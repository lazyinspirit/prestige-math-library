---
id: lem-a-limit-point-of-a-gradient-trajectory-is-critical
kind: lemma
title: "Every precompact end-limit point of a negative-gradient trajectory is critical"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant, lem-negative-gradient-energy-identity, lem-riemannian-gradient-vanishes-exactly-at-critical-points]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, Lemma 2.4.1"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

Every point of a nonempty precompact $\alpha$- or $\omega$-limit set of a
full negative-gradient trajectory is a critical point of $f$.

## Facts & Assumptions

**Given:** A full negative-gradient trajectory $\gamma$ with a precompact positive or negative tail.

[F1] Its tail-limit set is nonempty and flow-invariant ([[lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant]]).

[F2] Along $\gamma$, $(f\circ\gamma)'=-\lVert\operatorname{grad}_g f\rVert_g^2$ ([[lem-negative-gradient-energy-identity]]).

[F3] A noncritical point has nonzero gradient ([[lem-riemannian-gradient-vanishes-exactly-at-critical-points]]).

## Proof

**Proof technique:** direct.

1.1 On a precompact positive tail, $f\circ\gamma$ is decreasing by [F2] and bounded below because $f$ is continuous on its compact closure. It therefore has a finite limit $\ell$; every point of $\omega(\gamma)$ is a limit of tail values and has $f=\ell$. The same argument, with increasing time reversed, applies to $\alpha(\gamma)$. [F2, F1, given]

1.2 Let $z$ lie in either limit set. If $z$ were noncritical, [F3] and [F2] would give a sufficiently short positive orbit segment from $z$ on which $f$ strictly decreases. [F2, F3, assume-contra]

2.1 By [F1] the entire short segment in step 1.2 remains in the same limit set, whereas step 1.1 makes $f$ constant there. This contradiction proves that $z$ is critical. [F1, step 1.1, step 1.2, discharge-contradiction] ∎
