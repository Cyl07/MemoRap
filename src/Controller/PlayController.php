<?php

namespace App\Controller;

class PlayController extends AbstractController
{
    public function play()
    {
        return $this->twig->render("Play/play.html.twig");
    }
}
