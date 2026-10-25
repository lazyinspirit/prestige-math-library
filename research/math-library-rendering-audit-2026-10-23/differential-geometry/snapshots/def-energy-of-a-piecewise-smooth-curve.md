---
id: "def-energy-of-a-piecewise-smooth-curve"
kind: "definition"
title: "Energy of a piecewise smooth curve"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-riemannian-speed-and-length","lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 16.1.3, p.120, with the conventional factor one-half adopted here
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

For a piecewise smooth curve $\gamma:[a,b]\to M$ with finite smooth subdivision $a=t_0<\cdots<t_m=b$, its **energy** is
$$E(\gamma)=\frac12\sum_{j=1}^{m}\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g^2\,dt.$$
The factor $1/2$ is part of this library's convention.

## Facts & Assumptions

**Given:** A piecewise smooth curve with an admissible finite subdivision.

[F1] [[def-riemannian-speed-and-length]] makes the speed continuous on every smooth closed piece and fixes one-sided derivative values at its endpoints.

[F2] [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]] states that the corresponding piecewise integral of speed is independent of the admissible subdivision and of finitely many corner values.

## Verification

1.1 By [F1], $|\dot\gamma|_g^2$ is continuous and nonnegative on every smooth piece, so every displayed Riemann integral is finite and nonnegative. If two subdivisions are used, their union is a finite common refinement. Ordinary finite additivity of the Riemann integral splits the integral of $|\dot\gamma|_g^2$ over each old piece into the integrals over its refined subintervals, so both sums equal the common-refinement sum. Changing one-sided derivative conventions at finitely many corners does not change any integral. Thus $E(\gamma)$ is well-defined and nonnegative. [F1, given, algebra]

2.1 A constant curve has speed and energy zero. For a singleton parameter interval the empty sum is zero; no negative-length interval is admitted. In dimensions zero and one the same formula applies, with every zero-dimensional curve locally constant. An empty target admits no nonempty-domain curve. Endpoints contribute only through the integrals and their values at the two individual endpoints do not affect them. Only a given finite subdivision and its finite common refinement are used, so no choice axiom is needed. [F1, F2, step 1.1] ∎
