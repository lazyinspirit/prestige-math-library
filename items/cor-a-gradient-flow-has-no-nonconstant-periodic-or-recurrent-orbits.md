---
id: cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits
kind: corollary
title: "A downward gradient flow has no nonconstant periodic or recurrent orbit"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

A nonconstant orbit of a negative-gradient flow is neither periodic nor
recurrent. Here recurrent means that for some point $x$ on the orbit there are
$t_k\to\infty$ with $\Phi_{t_k}(x)\to x$.

## Facts & Assumptions

**Given:** A nonconstant negative-gradient orbit $\gamma(t)=\Phi_t(x)$.

[F1] The function $f\circ\gamma$ is strictly decreasing ([[cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function]]).

## Proof

**Proof technique:** direct.

1.1 If the orbit had period $T>0$, then $f(\gamma(T))=f(\gamma(0))$, contradicting [F1]. [F1, given]

1.2 If $\Phi_{t_k}(x)\to x$ with $t_k\to\infty$, fix $s>0$. For all sufficiently large $k$, $t_k\ge s$, so [F1] gives $f(\Phi_{t_k}(x))\le f(\Phi_s(x))<f(x)$. [F1, given]

2.1 Continuity of $f$ makes the left side of step 1.2 tend to $f(x)$, a contradiction. Thus the orbit is not recurrent either. [step 1.2] ∎
