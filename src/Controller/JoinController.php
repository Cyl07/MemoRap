<?php

namespace App\Controller;

class JoinController extends AbstractController
{
    public function join1()
    {
        return $this->twig->render("Join/join1.html.twig");
    }

    public function join2()
    {
        return $this->twig->render("Join/join2.html.twig");
    }
}
