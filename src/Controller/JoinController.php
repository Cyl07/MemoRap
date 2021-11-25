<?php

namespace App\Controller;

class JoinController extends AbstractController
{
    public function join()
    {
        return $this->twig->render("Join/join.html.twig");
    }
}
