<?php

namespace App\Controller;

class PlayController extends AbstractController
{
    public function play()
    {
        return $this->twig->render("Play/play.html.twig");
    }

    public function lobby()
    {
        return $this->twig->render("Play/lobby.html.twig");
    }
}
