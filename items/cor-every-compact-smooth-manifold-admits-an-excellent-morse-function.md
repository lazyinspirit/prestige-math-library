---
id: cor-every-compact-smooth-manifold-admits-an-excellent-morse-function
kind: corollary
title: "Every compact smooth manifold admits an excellent Morse function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse, thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Every compact smooth manifold admits an excellent Morse function.

## Facts & Assumptions

**Given:** A compact smooth manifold $M$.

[L1] Every smooth manifold embeds in some finite-dimensional Euclidean space ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]).

[L2] On a compact embedded manifold, a generic linear height function is Morse ([[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]).

[L3] On a compact manifold, excellent Morse functions are dense among all smooth functions ([[thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a smooth embedding $M\hookrightarrow\mathbb R^N$. Then [L2] gives a Morse height function $h:M\to\mathbb R$ on that embedding. [L1, L2, given, choose]

2.1 Apply [L3] to the Morse function $h$. Since excellent Morse functions are dense on the compact manifold $M$, some excellent Morse function lies arbitrarily close to $h$ and in particular exists on $M$. [L3, step 1.1]

3.1 Therefore every compact smooth manifold admits an excellent Morse function. [step 2.1] ∎
