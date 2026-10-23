---
id: def-fd-projected-no-slip-stokes-space
kind: definition
title: "Projected no-slip Stokes Hilbert space"
status: published
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
      locator: "Chapter 6 §6.1, PDF pp. 55–56: no-slip Stokes formulation in H¹₀ and mean-zero L² pressure; independent source context."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Definition

Assume the full Axiom of Choice. Let $d\ge2$, let $R>0$, and let $\Omega\subset(-R,R)^d$ be a nonempty bounded open set. Define $W^{1,2}(\Omega;\mathbb R^d)$ componentwise: $v=(v_1,\ldots,v_d)$ belongs to it exactly when each $v_i$ belongs to the scalar $W^{1,2}(\Omega;\mathbb R)$ defined in the earlier integer-order Sobolev-space definition. Its weak derivatives are $\partial_jv_i$, its gradient is the matrix $\nabla v=(\partial_jv_i)_{i,j=1}^d$, and its norm is
$$\|v\|_{W^{1,2}(\Omega;\mathbb R^d)}^2=\sum_{i=1}^d\left(\|v_i\|_{L^2(\Omega)}^2+\sum_{j=1}^d\|\partial_jv_i\|_{L^2(\Omega)}^2\right)=\int_\Omega\left(|v|^2+|\nabla v|_F^2\right)\,dx,$$
where $v\cdot w=\sum_i v_iw_i$, $|v|^2=\sum_i|v_i|^2$, $A:B=\sum_{i,j}A_{ij}B_{ij}$, and $|A|_F^2=\sum_{i,j}|A_{ij}|^2$. Define $H_0^1(\Omega;\mathbb R^d)$ as the closure of the $d$-tuples of compactly supported smooth real functions in this norm. Define $\operatorname{div}v=0$ distributionally to mean $\int_\Omega v\cdot\nabla\phi=0$ for every $\phi\in C_c^\infty(\Omega;\mathbb R)$, and set $V=\{v\in H_0^1(\Omega;\mathbb R^d):\operatorname{div}v=0\}$. Equip $V$ with the inherited $H^1$ inner product $\int_\Omega(v\cdot w+\nabla v:\nabla w)$. The phrase no-slip here means membership in this closure; no trace characterization on arbitrary $\Omega$ is part of the definition.

## Definition references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; full AC is adopted for the Sobolev completeness supplier used here.

[F2] [[def-sobolev-space-wkp-and-its-norm]]: $W^{1,2}$ consists of $L^2$ classes with first weak derivatives in $L^2$, with the sum-of-squares Sobolev norm.

[F3] [[thm-sobolev-spaces-are-banach-spaces]]: under its stated full Axiom of Choice hypothesis, the stated $W^{1,2}$ space is complete.

[F4] [[def-real-and-complex-inner-product-space]]: a real inner product is a bilinear, symmetric, positive-definite pairing; these axioms must be checked for the displayed Sobolev pairing.

[F5] [[def-hilbert-space]]: a real inner-product space is Hilbert when its induced norm is complete.

## Proof

**Given:** Full AC, $d\ge2$, and nonempty bounded open $\Omega\subset(-R,R)^d$ with the weak-derivative convention in the Definition.

1.1 First check the pairing. Every product in its finite sum is integrable because $2|ab|\le |a|^2+|b|^2$ for $L^2$ coordinates or weak derivatives $a,b$. Null-set changes do not change its integrals, and [F2] supplies unique weak derivative classes. Adding and scaling the weak-derivative test identities proves linearity of weak differentiation, so linearity of integration and commutativity of real multiplication give bilinearity and symmetry. The pairing of $v$ with itself equals the displayed squared Sobolev norm. It is nonnegative and vanishes exactly when every component is the zero $L^2$ class, whose weak derivatives are zero. Thus it satisfies [F4], and its induced norm is exactly the vector Sobolev norm. By [F2] and [F3], each scalar component space $W^{1,2}(\Omega;\mathbb R)$ is complete under the stated AC assumption. A Cauchy sequence in the finite product is Cauchy in each component; completeness gives a limit in each component, and the finite sum in the vector norm gives convergence to the vector of those limits. Thus the vector space is complete. Its closed linear subspace $H_0^1$, defined by norm closure, is therefore complete in that same inner-product norm. [given, F1, F2, F3, F4, algebra]

2.1 For each fixed $\phi\in C_c^\infty(\Omega)$ the functional $v\mapsto\int_\Omega v\cdot\nabla\phi$ is continuous in the $H^1$ norm, since its absolute value is at most $\|v\|_{L^2}\|\nabla\phi\|_{L^2}$. Its kernel is closed; the intersection of these kernels is exactly $V$. Thus $V$ is a closed real linear subspace of $H_0^1$ and is complete. [given, step 1.1, algebra]

3.1 The inherited pairing is positive definite and complete on $V$, so [F5] makes $V$ a real Hilbert space. The only boundary condition used is the defining closure $H_0^1$; no converse density or arbitrary-domain trace theorem has been invoked. [given, F4, F5, step 2.1] ∎

