---
id: ex-harmonic-function-attaining-only-boundary-extrema
kind: example
title: "Harmonic function attaining only boundary extrema"
status: published
origin: pipeline
deps: [thm-weak-maximum-principle-for-the-laplacian, thm-hopf-boundary-point-lemma-for-the-laplacian]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorems 2.17 and Lemma 2.21, pp.27–30, affine specialization"
---

## Example

For $n\ge2$, $u(x)=x_1$ on $\overline B_1(0)\subset\mathbb R^n$ is harmonic. Its maximum $1$ and minimum $-1$ occur only at $e_1$ and $-e_1$, respectively, on the boundary. At $e_1$ its outward sphere derivative is $1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[F1] The weak maximum principle places closure maxima of continuous-closure subharmonic functions on bounded open sets on the boundary. ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F2] Under an interior tangent ball, strict interior inequality and continuity on its closure, an existing outward derivative at the boundary maximum is positive. ([[thm-hopf-boundary-point-lemma-for-the-laplacian]]).

## Verification

**Proof technique:** direct.

1.1 Every second derivative of $u$ is zero, so $\Delta u=0$. In the open ball, $|x_1|\le|x|<1$. On its closure, equality $x_1=1$ forces $x=e_1$, and $x_1=-1$ forces $x=-e_1$. Thus the explicit extrema have exactly the boundary location allowed by the weak principle. [F1, given, algebra]

2.1 The ball itself is an interior tangent ball at $e_1$, with outward direction $e_1$. The quotient $(u(e_1)-u(e_1-te_1))/t$ equals $1$ for $0<t<2$. It has a strictly positive limit, agreeing with Hopf since $u<1$ throughout the interior. [F2, step 1.1, algebra] ∎
