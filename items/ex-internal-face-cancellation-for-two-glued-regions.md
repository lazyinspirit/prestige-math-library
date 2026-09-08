---
id: ex-internal-face-cancellation-for-two-glued-regions
kind: example
title: Internal faces cancel for glued boxes
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12, discussion following Theorem 1.46, printed p. 18 (PDF p. 24). The faces and field calculation below make the finite-gluing instance explicit.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["thm-divergence-theorem-for-bounded-piecewise-c-one-domains"]
---

## Example

Assume $\mathrm{AC}_\omega$ and $n\ge2$. The boxes $Q_-=(-1,0)\times(0,1)^{n-1}$ and $Q_+=(0,1)\times(0,1)^{n-1}$ glue to $Q=(-1,1)\times(0,1)^{n-1}$ up to their common face. For $F\in C^1(\overline Q;\mathbb R^n)$ their divergence identities sum to the identity on Q because the common fluxes cancel. The same calculation applies after replacing the coordinate intervals by arbitrary positive-length adjacent intervals.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$, the two explicit adjacent boxes and final box Q in the Example, and $F\in C^1(\overline Q;\mathbb R^n)$.

[F1] The specified finite-face theorem includes cancellation. ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

## Verification

1.1 For a box $\prod_i(a_i,b_i)$, its 2n faces are $x_i=a_i$ and $x_i=b_i$, with remaining coordinates in their closed intervals. Each is a compact subset of an affine regular hypersurface, with area element the ordinary product measure and outward normal $-e_i$ or $e_i$. Put every face boundary (at least two endpoint coordinates) into E. On each face it is a finite union of parameter-coordinate hyperplanes and is null: a bounded hyperplane strip has arbitrarily small volume by giving the fixed coordinate an arbitrarily short interval. Off E exactly one coordinate is an endpoint and the domain is locally on one side of that plane. Thus all three boxes satisfy the specified finite-face conditions. [given, algebra]

2.1 The common face $S=\{0\}\times[0,1]^{n-1}$ has normal $e_1$ for $Q_-$ and $-e_1$ for $Q_+$. The same continuous F has the same trace on both sides, so the sum of its flux densities is $F\cdot e_1+F\cdot(-e_1)=0$ pointwise off E. F1 applies to both restrictions of F. Their volume integrals add to the integral on Q because the omitted plane S is volume-null by the strip argument in step 1.1. Their exposed face integrals add to the faces of Q, while the two integrals over S cancel. This proves the asserted identity and all required gluing data. [step 1.1, F1, algebra]

3.1 For $F(x)=x$, the divergence is n and each small box has volume one. On $Q_-$ the face $x_1=-1$ contributes 1 and $x_1=0$ contributes 0; on $Q_+$ the face $x_1=1$ contributes 1 and $x_1=0$ contributes 0. For each $i\ge2$ the face $x_i=1$ contributes 1 on each box and $x_i=0$ contributes 0. Each box therefore has flux $1+(n-1)=n$, and Q has flux $2+2(n-1)=2n$, equal to its volume integral. For the further constant field $F=e_1$ the shared fluxes are explicitly 1 and -1, exhibiting nonzero cancellation. [step 2.1, algebra] ∎

## Source notes

Hunter §1.12, discussion following Theorem 1.46, printed p. 18 (PDF p. 24). The faces and field calculation below make the finite-gluing instance explicit.

