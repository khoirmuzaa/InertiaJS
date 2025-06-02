<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource {
    public function toArray(Request $request): array {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'email' => $this->email,
            'username' => $this->username,
            'avatar' => $this->avatar,
            'role' => $this->role,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            // 'contacts' => ContactResource::collection($this->whenLoaded('contacts'))
        ];
    }
}
