---
id: cor-poisson-adjoint-h2-estimate-from-global-regularity
kind: corollary
title: A global H² bound for the Poisson adjoint on a C² domain
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bounded-c-k-domain-and-boundary-charts
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-dirichlet-solution-for-a-divergence-form-operator
  - thm-global-h-two-dirichlet-regularity
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§4.12, Theorem 4.30, printed pp. 114–116: global H² regularity with the L² solution term retained."
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "§5.2, Theorem 5.10, printed pp. 112–113: global H² regularity for a bounded C² domain."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a
bounded $C^2$ domain, let $g\in L^2(\Omega)$, and let $z\in H^1_0(\Omega)$
be a weak solution of $-\Delta z=g$ with zero Dirichlet data. Suppose a
Poincaré constant $C_P$ is specified such that
$$\|v\|_{L^2(\Omega)}\le C_P\|\nabla v\|_{L^2(\Omega)}\qquad(v\in H^1_0(\Omega)).$$
Then $z\in H^2(\Omega)$ and
$$\|z\|_{H^2(\Omega)}\le C_{\rm reg}(1+C_P^2)\|g\|_{L^2(\Omega)},$$
where $C_{\rm reg}$ is the constant from the global H² Dirichlet regularity
theorem for the coefficient matrix $I$ and zero lower-order coefficients.
The Poincaré inequality is an explicit hypothesis here; this item does not
import a stronger domain or axiom branch for it.

## Facts & Assumptions

**Given:** Countable Choice; the bounded $C^2$ domain; $g\in L^2(\Omega)$;
the zero-trace weak equation
$$\int_\Omega\nabla z\cdot\overline{\nabla v}\,dx=\int_\Omega g\overline v\,dx\qquad(v\in H^1_0(\Omega));$$
and the displayed Poincaré inequality with constant $C_P$.

[F1] A zero-trace weak solution of a divergence-form problem is an $H^1_0$
class satisfying the variational equation for every $H^1_0$ test function
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F2] For a bounded $C^2$ domain, coefficients $a^{ij}\in W^{1,\infty}$,
$b^i,c\in L^\infty$, ellipticity, $g\in L^2$, and a zero-trace weak
solution, the global theorem gives
$\|z\|_{H^2}\le C(\|g\|_{L^2}+\|z\|_{L^2})$; its statement retains the
second term ([[thm-global-h-two-dirichlet-regularity]]).

[F3] On real or complex $L^2$, the corresponding integral inner product is
well defined and satisfies Cauchy–Schwarz, so
$|\int g\overline z|\le\|g\|_{L^2}\|z\|_{L^2}$
([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[A1] The Poincaré inequality with constant $C_P$ is assumed exactly as
displayed in **Given**.

## Proof

1.1 Test the weak equation with $v=z$ and take real parts. By [F3] and [A1], $\|\nabla z\|_{L^2}^2=\operatorname{Re}\int_\Omega g\overline z\,dx\le\|g\|_{L^2}\|z\|_{L^2}\le C_P\|g\|_{L^2}\|\nabla z\|_{L^2}.$ If $\|\nabla z\|_{L^2}=0$, [A1] gives $z=0$ in $L^2$; otherwise divide by $\|\nabla z\|_{L^2}$. In either case $\|\nabla z\|_{L^2}\le C_P\|g\|_{L^2}$ and $\|z\|_{L^2}\le C_P^2\|g\|_{L^2}$. [F1, F3, A1, algebra]

2.1 The operator $-\Delta$ has principal matrix $a^{ij}=\delta_{ij}$, ellipticity constant $1$, coefficients in $W^{1,\infty}$, and zero lower order coefficients. Thus [F2] applies to the given weak solution and yields $\|z\|_{H^2}\le C_{\rm reg}(\|g\|_{L^2}+\|z\|_{L^2}).$ Insert the bound from step 1.1 to obtain the asserted estimate. [F2, step 1.1, algebra] ∎

## Remarks

The estimate uses the global theorem only for the symmetric Poisson operator
on its stated bounded $C^2$ domain branch. It does not extend that supplier to
general Lipschitz domains or nonsymmetric adjoints.
