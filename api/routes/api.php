<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SessionsController;
use App\Http\Controllers\Api\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index');
    Route::post('product', 'store');
    Route::get('product/{id}', 'show');
    Route::put('product/{id}', 'update');
    Route::delete('product/{id}', 'destroy');
});


Route::controller(SessionsController::class)->group(function () {
    Route::get('login', 'index');
    Route::post('login', 'store');
    Route::get('login/{id}', 'show');
    Route::put('login/{id}', 'update');
    Route::delete('login/{id}', 'destroy');
});

