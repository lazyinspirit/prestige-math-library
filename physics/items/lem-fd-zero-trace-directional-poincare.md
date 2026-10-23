---
id: lem-fd-zero-trace-directional-poincare
kind: lemma
title: "Directional Poincaré bound for zero trace"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-projected-no-slip-stokes-space
  - def-axiom-of-choice
  - def-sobolev-space-wkp-and-its-norm
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
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

[F2] [[def-fd-projected-no-slip-stokes-space]]: for nonempty $\Omega$, $H_0^1$ is the Sobolev-norm closure of $C_c^\infty$ fields on $\Omega$.

[F3] [[def-sobolev-space-wkp-and-its-norm]]: scalar $W^{1,2}$ is defined for every open set, including the empty set, where it is the zero space and every displayed norm is zero.

## Proof

**Given:** Full AC, $R>0$, $\Omega\subset(-R,R)^d$, and $v\in H_0^1(\Omega;\mathbb R^d)$.

1.1 If $\Omega=\varnothing$, [F3] makes each scalar Sobolev space the zero space, so its finite vector product and the closure of the sole compactly supported smooth field are $\{0\}$. Thus the closure convention in the Statement gives $H_0^1(\varnothing;\mathbb R^d)=\{0\}$, and all three displayed norms vanish. Henceforth assume $\Omega\ne\varnothing$, so [F2] applies. For $v\in C_c^\infty(\Omega;\mathbb R^d)$, extend $v$ by zero to the cube. For each component and fixed $x'=(x_2,\ldots,x_d)$, the fundamental theorem of calculus gives $v(x_1,x')=\int_{-R}^{x_1}\partial_1v(t,x')dt$. Cauchy–Schwarz bounds its squared norm by $2R\int_{-R}^R|\partial_1v(t,x')|^2dt$. [given, F2, F3, construct, algebra]

2.1 Integrating the preceding bound over $x_1\in(-R,R)$ and $x'$ yields $\|v\|_2^2\le(2R)^2\|\partial_1v\|_2^2$. The pointwise matrix norm inequality $|\partial_1v|\le|\nabla v|$ gives the second inequality. [given, step 1.1, F2, algebra]

3.1 By the closure in [F2], choose compactly supported smooth $v_n\to v$ in $H^1$. Then both $v_n\to v$ in $L^2$ and $\partial_1v_n\to\partial_1v$ in $L^2$, so the inequalities pass to the limit. [given, F1, F2, step 2.1, algebra] ∎

