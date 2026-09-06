---
id: lem-time-translation-acts-freely-on-nonconstant-trajectories
kind: lemma
title: "Time translation acts freely on nonconstant trajectories"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-parametrized-morse-trajectory-space, def-downward-gradient-like-vector-field, thm-fundamental-theorem-on-flows]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, Proposition 2.2.2"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

The action $s\cdot\gamma(t):=\gamma(t+s)$ of $\mathbb R$ on $\widetilde{\mathcal M}(p,q)$ has trivial stabilizers.

## Facts & Assumptions

**Given:** A trajectory $\gamma\in\widetilde{\mathcal M}(p,q)$ and $s\in\mathbb R$ with $s\cdot\gamma=\gamma$.

[F1] Along every nonconstant $X$-orbit, $df(X)<0$ ([[def-downward-gradient-like-vector-field]]).

[F2] Distinct endpoints $p\ne q$ make every trajectory in $\widetilde{\mathcal M}(p,q)$ nonconstant ([[def-parametrized-morse-trajectory-space]]).

## Proof

**Proof technique:** direct.

1.1 Equality $s\cdot\gamma=\gamma$ says $\gamma(t+s)=\gamma(t)$ for every $t$, so if $s\ne0$ then $\gamma$ is periodic with nonzero period $|s|$. [given, algebra]

2.1 By [F2] the orbit is nonconstant, while [F1] makes $f\circ\gamma$ strictly decreasing; it therefore cannot be periodic.  Hence $s=0$, which is exactly freeness. [F1, F2, step 1.1] ∎
