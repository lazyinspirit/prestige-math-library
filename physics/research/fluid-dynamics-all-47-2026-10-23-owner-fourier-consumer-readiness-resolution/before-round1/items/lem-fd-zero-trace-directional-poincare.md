---
id: lem-fd-zero-trace-directional-poincare
kind: lemma
title: "Directional Poincaré bound for zero trace"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-projected-no-slip-stokes-space
  - def-axiom-of-choice
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 3 §3.7, PDF p. 30: global Friedrichs inequality on H¹₀(Ω); the local directional 2R estimate is proved here."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Statement

Assume full AC. Let $d\ge2$, $R>0$, and let $\Omega\subset(-R,R)^d$ be bounded and open. For every $v\in H_0^1(\Omega;\mathbb R^d)$,
$$\|v\|_{L^2(\Omega)}\le2R\|\partial_1v\|_{L^2(\Omega)}\le2R\|\nabla v\|_{L^2(\Omega)}.$$
Here $H_0^1$ is the closure of compactly supported smooth fields in the Sobolev norm.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: full AC is the explicit background assumption retained by the local zero-trace Stokes-space definition.

[F2] [[def-fd-projected-no-slip-stokes-space]]: $H_0^1$ is the Sobolev-norm closure of $C_c^\infty$ fields on $\Omega$.

## Proof

**Given:** Full AC, $R>0$, $\Omega\subset(-R,R)^d$, and $v\in H_0^1(\Omega;\mathbb R^d)$.

1.1 For $v\in C_c^\infty(\Omega;\mathbb R^d)$, extend $v$ by zero to the cube. For each component and fixed $x'=(x_2,\ldots,x_d)$, the fundamental theorem of calculus gives $v(x_1,x')=\int_{-R}^{x_1}\partial_1v(t,x')dt$. Cauchy–Schwarz bounds its squared norm by $2R\int_{-R}^R|\partial_1v(t,x')|^2dt$. [given, F2, construct, algebra]

1.2 Integrating the preceding bound over $x_1\in(-R,R)$ and $x'$ yields $\|v\|_2^2\le(2R)^2\|\partial_1v\|_2^2$. The pointwise matrix norm inequality $|\partial_1v|\le|\nabla v|$ gives the second inequality. [given, step 1.1, F2, algebra]

1.3 By the closure in [F2], choose compactly supported smooth $v_n\to v$ in $H^1$. Then both $v_n\to v$ in $L^2$ and $\partial_1v_n\to\partial_1v$ in $L^2$, so the inequalities pass to the limit. [given, F1, F2, step 1.2, algebra] ∎
