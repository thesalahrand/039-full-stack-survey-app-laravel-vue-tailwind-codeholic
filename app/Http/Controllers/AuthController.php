<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
  public function register(Request $request): Response
  {
    $validated = $request->validate([
      'name' => 'required|string',
      'email' => 'required|email|string|unique:users,email',
      'password' => ['required', 'confirmed', Password::min(8)->mixedCase()->numbers()->symbols()]
    ]);

    $user = User::create([
      'name' => $validated['name'],
      'email' => $validated['email'],
      'password' => bcrypt($validated['password']),
    ]);

    $user['token'] = $user->createToken('main')->plainTextToken;

    return response([
      'user' => $user
    ]);
  }
}