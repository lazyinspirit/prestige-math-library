---
id: ex-gradient-flow-on-the-torus-morse-function
kind: example
title: "Gradient flow for a Morse function on the flat torus"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
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

## Example

On the flat torus with angular coordinates $(\theta,\phi)$, take
$f(\theta,\phi)=\cos\theta+\cos\phi$. Its critical points are
$(0,0)$ (maximum, index $2$), $(\pi,0)$ and $(0,\pi)$ (saddles, index $1$),
and $(\pi,\pi)$ (minimum, index $0$). The negative-gradient equations are

$$ \dot\theta=\sin\theta,\qquad \dot\phi=\sin\phi. $$

## Verification

**Given:** The flat two-torus and $f(\theta,\phi)=\cos\theta+\cos\phi$.

1.1 Differentiating gives $df=-\sin\theta\,d\theta-\sin\phi\,d\phi$, hence the displayed negative-gradient equations. Their zeros give exactly the four listed critical points, and the diagonal Hessian $\operatorname{diag}(-\cos\theta,-\cos\phi)$ gives the stated indices. [given, algebra]

2.1 The circles $\theta\in\{0,\pi\}$ and $\phi\in\{0,\pi\}$ are invariant and supply the coordinate-circle separatrices. On either component of $S^1\setminus\{0,\pi\}$, each nonconstant coordinate trajectory has backward limit $0$ and forward limit $\pi$ (it increases on $(0,\pi)$ and decreases on $(\pi,2\pi)$ in the displayed coordinate). Thus the trajectories off those circles run from the maximum to the minimum in four arc-choice components. In each component, quotienting the two integration constants by common time translation leaves a one-parameter family. [step 1.1, algebra] ∎
