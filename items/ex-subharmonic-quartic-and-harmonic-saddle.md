---
id: ex-subharmonic-quartic-and-harmonic-saddle
kind: example
title: "Subharmonic quartic and harmonic saddle"
status: draft
origin: pipeline
deps: [def-subharmonic-and-superharmonic-functions-in-rn, thm-comparison-principle-for-classical-subharmonic-functions, thm-strong-maximum-principle-for-harmonic-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Example 2.6 p.22 and Example 2.16 p.27"
---

## Example

For $n\ge2$, on $\overline B_1(0)$ the function $q(x)=|x|^4$ is subharmonic and lies below the harmonic function $h\equiv1$ having the same boundary values. The function $s(x)=x_1^2-x_2^2$ is harmonic and has a saddle at the origin, despite $\nabla s(0)=0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[F1] Subharmonicity in the classical convention is nonnegativity of the Laplacian. ([[def-subharmonic-and-superharmonic-functions-in-rn]]).

[F2] On bounded nonempty open sets, the classical Laplacian and boundary comparisons imply comparison on the closure. ([[thm-comparison-principle-for-classical-subharmonic-functions]]).

[F3] The strong harmonic theorem requires an attained interior global maximum or minimum on a domain. ([[thm-strong-maximum-principle-for-harmonic-functions]]).

## Verification

**Proof technique:** direct.

1.1 Differentiation gives $\partial_iq=4|x|^2x_i$ and $\partial_{ii}q=8x_i^2+4|x|^2$, so $\Delta q=4(n+2)|x|^2\ge0$. It is subharmonic, with value one on the unit sphere. [F1, given, algebra]

2.1 The constant $h=1$ is harmonic, and $\Delta q\ge\Delta h$ with equal boundary values. Comparison gives $q\le h$ on the closed ball, also directly visible from $|x|\le1$. [F2, step 1.1]

3.1 For $s$, the only nonzero pure second derivatives are $\partial_{11}s=2$ and $\partial_{22}s=-2$, so $\Delta s=0$ and $\nabla s(0)=0$. But $s(te_1)=t^2$ and $s(te_2)=-t^2$ for $0<|t|<1$, proving that zero is neither a local maximum nor a local minimum. There is no interior global extremum to which the strong theorem would apply. [F3, algebra] ∎
