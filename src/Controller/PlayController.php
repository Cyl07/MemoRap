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

    public function round()
    {
        return $this->twig->render("Play/round.html.twig");
    }

    public function round2()
    {
        return $this->twig->render("Play/round2.html.twig");
    }

    public function result()
    {
        return $this->twig->render("Play/result.html.twig");
    }
}
