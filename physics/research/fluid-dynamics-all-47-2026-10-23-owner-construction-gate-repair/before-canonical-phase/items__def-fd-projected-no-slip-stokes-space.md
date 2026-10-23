---
id: def-fd-projected-no-slip-stokes-space
kind: definition
title: "Projected no-slip Stokes Hilbert space"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-sobolev-space-wkp-and-its-norm
  - thm-sobolev-spaces-are-banach-spaces
  - def-axiom-of-choice
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
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
      locator: "Chapter 6 §6.1, PDF pp. 55–56: no-slip Stokes formulation in H¹₀ and mean-zero L² pressure; independent source context."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Definition

Assume the full Axiom of Choice. Let $d\ge2$, let $R>0$, and let $\Omega\subset(-R,R)^d$ be a nonempty bounded open set. Define $H_0^1(\Omega;\mathbb R^d)$ as the closure of $C_c^\infty(\Omega;\mathbb R^d)$ in the real $W^{1,2}$ norm. Define $\operatorname{div}v=0$ distributionally to mean $\int_\Omega v\cdot\nabla\phi=0$ for every $\phi\in C_c^\infty(\Omega)$, and set $V=\{v\in H_0^1(\Omega;\mathbb R^d):\operatorname{div}v=0\}$. Equip $V$ with the inherited $H^1$ inner product $\int_\Omega(v\cdot w+\nabla v:\nabla w)$. The phrase no-slip here means membership in this closure; no trace characterization on arbitrary $\Omega$ is part of the definition.

## Definition references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; full AC is adopted for the Sobolev completeness supplier used here.

[F2] [[def-sobolev-space-wkp-and-its-norm]]: $W^{1,2}$ consists of $L^2$ classes with first weak derivatives in $L^2$, with the sum-of-squares Sobolev norm.

[F3] [[thm-sobolev-spaces-are-banach-spaces]]: under its stated full Axiom of Choice hypothesis, the stated $W^{1,2}$ space is complete.

[F4] [[def-real-and-complex-inner-product-space]]: the real $W^{1,2}$ pairing is bilinear, symmetric and positive definite.

[F5] [[def-hilbert-space]]: a real inner-product space is Hilbert when its induced norm is complete.

## Proof

**Given:** Full AC, $d\ge2$, and nonempty bounded open $\Omega\subset(-R,R)^d$ with the weak-derivative convention in the Definition.

1.1 By [F2] and [F3], the real $W^{1,2}(\Omega;\mathbb R^d)$ norm is complete under the stated AC assumption. Its closed linear subspace $H_0^1$, defined by norm closure, is therefore complete in the inherited inner product from [F4]. [given, F1, F2, F3, F4]

1.2 For each fixed $\phi\in C_c^\infty(\Omega)$ the functional $v\mapsto\int_\Omega v\cdot\nabla\phi$ is continuous in the $H^1$ norm, since its absolute value is at most $\|v\|_{L^2}\|\nabla\phi\|_{L^2}$. Its kernel is closed; the intersection of these kernels is exactly $V$. Thus $V$ is a closed real linear subspace of $H_0^1$ and is complete. [given, step 1.1, algebra]

1.3 The inherited pairing is positive definite and complete on $V$, so [F5] makes $V$ a real Hilbert space. The only boundary condition used is the defining closure $H_0^1$; no converse density or arbitrary-domain trace theorem has been invoked. [given, F4, F5, step 1.2] ∎
