<?php

namespace App\Controller;

use Ratchet\WebSocket\MessageComponentInterface;
use Ratchet\ConnectionInterface;

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
