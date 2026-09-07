---
id: "def-closed-sublevel-and-level-set-of-a-smooth-function"
kind: "definition"
title: "Closed sublevel and level set of a smooth function"
deps: ["def-smooth-manifold"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: "draft"
origin: "pipeline"
proof_strategy: "definition"
---

## Definition

Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}(( -\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included. A regular value may have empty fiber. The smooth-manifold convention is [[def-smooth-manifold]].
