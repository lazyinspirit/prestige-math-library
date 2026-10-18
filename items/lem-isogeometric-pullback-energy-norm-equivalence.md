---
id: lem-isogeometric-pullback-energy-norm-equivalence
kind: lemma
title: Bi-Lipschitz NURBS maps preserve H1 and energy norms
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
  - def-wkp-zero-as-a-sobolev-closure
  - lem-w-one-two-is-a-hilbert-space
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-compactly-supported-h1-belongs-to-h-zero
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-bounded-piecewise-c-one-euclidean-domain
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

Assume Countable Choice and the admissible piecewise $C^1$ NURBS map $F:\widehat\Omega\to\Omega$ of [[def-nurbs-patch-map-and-rational-spline-space]]. Write $J_F=\det DF$, and assume $j_-\le J_F\le j_+$ and $\|DF\|_{\mathrm{op}},\|DF^{-1}\|_{\mathrm{op}}\le L$ almost everywhere on the cells. For every $u\in H^1(\Omega)$, its pullback $\widehat u=u\circ F$ lies in $H^1(\widehat\Omega)$, with cellwise weak gradient
$$\nabla_\xi\widehat u=DF^\mathsf T(\nabla_xu)\circ F.$$
The inverse pullback also preserves $H^1$, and
$$\|\widehat u\|_{H^1(\widehat\Omega)}\le j_-^{-1/2}\sqrt{1+L^2}\,\|u\|_{H^1(\Omega)},\qquad \|u\|_{H^1(\Omega)}\le j_+^{1/2}\sqrt{1+L^2}\,\|\widehat u\|_{H^1(\widehat\Omega)}.$$
Pullback maps $H^1_0(\Omega)$ onto $H^1_0(\widehat\Omega)$. For a vector field $\widehat v=v\circ F$, the physical gradient is $(\nabla_\xi\widehat v)DF^{-1}$, so the scalar diffusion and finite-Lamé elasticity forms are transformed by the same Jacobian and inverse-map factors.

## Facts & Assumptions

**Given:** Countable Choice; an admissible finite piecewise $C^1$ NURBS map $F$ with the determinant and derivative bounds in the Statement; $u\in H^1(\Omega)$; and, for the zero-boundary assertion, $u\in H^1_0(\Omega)$.

[A1] [[def-countable-choice]] is assumed through the density [F1], change-of-variables [F2], Sobolev [F3], completeness and closed-subspace [F4], compact-support $H^1_0$ [F5], and boundary-integration [F6] interfaces, and to select the approximation sequences. No stronger choice principle is used.

[F1] [[thm-meyers-serrin-density-on-an-arbitrary-open-set]] under Countable Choice: for $1\le p<\infty$, smooth functions in $C^\infty(\Omega)\cap W^{1,p}(\Omega)$ are dense in $W^{1,p}(\Omega)$.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] under Countable Choice: on each cell diffeomorphism, the change-of-variables factor is the positive Jacobian determinant.

[F3] [[def-sobolev-space-wkp-and-its-norm]] and [[def-weak-derivative-of-a-locally-integrable-function]]: $H^1$ membership is characterized by an $L^2$ function with distributional first derivatives in $L^2$.

[F4] [[lem-w-one-two-is-a-hilbert-space]] under Countable Choice: $H^1$ is complete for its Sobolev norm, and $H^1_0$ is a closed subspace.

[F5] [[lem-compactly-supported-h1-belongs-to-h-zero]]: under Countable Choice, every compactly supported $H^1$ function on an open set belongs to $H^1_0$; its proof uses zero extension, Meyers--Serrin density and a cutoff.

[F6] [[def-bounded-piecewise-c-one-euclidean-domain]] gives the finite piecewise $C^1$ cell presentation; [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] gives cellwise integration by parts and cancellation of opposite shared-face fluxes.

## Proof

1.1 First let $v\in C^\infty(\Omega)\cap H^1(\Omega)$. On each open knot cell the differentiability expansions of $F$ and $v$ give $\nabla_\xi(v\circ F)=DF^\mathsf T(\nabla_xv)\circ F$. Fix a test function compactly supported in $\widehat\Omega$. Its support stays away from the exterior patch boundary. On every part of a cell where the test function is nonzero, its image under $F$ lies in a compact subset of $\Omega$, so $v\circ F$ and its first derivatives are bounded there; near exterior faces the test function vanishes. Apply the divergence theorem [F6] to $(v\circ F)\phi e_j$ cell by cell. The values of $v\circ F$ and $\phi$ agree on either side of every shared face, so opposite normal fluxes cancel, and exterior terms vanish. This proves the weak-derivative identity without requiring $v$ to extend to $\partial\Omega$. Cellwise change of variables [F2], summed over the finite partition using finite additivity of the integral, yields $\|v\circ F\|_{L^2(\widehat\Omega)}^2\le j_-^{-1}\|v\|_{L^2(\Omega)}^2,\qquad \|\nabla_\xi(v\circ F)\|_{L^2(\widehat\Omega)}^2\le L^2j_-^{-1}\|\nabla_xv\|_{L^2(\Omega)}^2.$ Thus $\|v\circ F\|_{H^1(\widehat\Omega)}\le j_-^{-1/2}\sqrt{1+L^2}\|v\|_{H^1(\Omega)}$. The same argument applied to $F^{-1}$, whose Jacobian is $J_F^{-1}$ and derivative is bounded by $L$, gives the reverse estimate. [F2, F3, F6, given, algebra]

2.1 For arbitrary $u\in H^1(\Omega)$, choose $v_n\in C^\infty(\Omega)\cap H^1(\Omega)$ with $v_n\to u$ in $H^1$ by [F1]. Step 1.1 applied to $v_n-v_m$ makes $v_n\circ F$ Cauchy in $H^1(\widehat\Omega)$; completeness [F4] gives a limit $\widehat u\in H^1(\widehat\Omega)$. The same change-of-variables estimate in step 1.1 implies $v_n\circ F\to u\circ F$ in $L^2(\widehat\Omega)$, so this limit is the composition class. The gradient formula follows by taking the $L^2$ limit of the step 1.1 gradients: the bound on $DF$ and the change-of-variables estimate imply $DF^\mathsf T(\nabla v_n)\circ F\to DF^\mathsf T(\nabla u)\circ F$ in $L^2$. Repeating the argument with $F^{-1}$ proves the reverse estimate and inverse pullback. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 Suppose $u\in H^1_0(\Omega)$ and choose $\varphi_n\in C_c^\infty(\Omega)$ converging to $u$ in $H^1$ by [F4]. Each $\varphi_n\circ F$ belongs to $H^1(\widehat\Omega)$ by step 1.1 and has compact support in $\widehat\Omega$, because $F^{-1}$ maps compact subsets of $\Omega$ to compact subsets of $\widehat\Omega$. Applying [F5] gives $\varphi_n\circ F\in H^1_0(\widehat\Omega)$. The forward estimate in step 2.1 gives convergence in $H^1$, and closedness in [F4] implies $u\circ F\in H^1_0(\widehat\Omega)$. Applying the same reasoning to $F^{-1}$ proves the converse. Finally, the scalar energy identity follows by substituting $\nabla_xu\circ F=DF^{-\mathsf T}\nabla_\xi\widehat u$ and $dx=J_F\,d\xi$ into the defining integral. For a vector field with row-gradient convention, $\nabla_xv=(\nabla_\xi\widehat v)DF^{-1}$; hence $\varepsilon_x(v)\circ F=\operatorname{sym}((\nabla_\xi\widehat v)DF^{-1})$ and $\operatorname{div}_xv\circ F=\operatorname{tr}((\nabla_\xi\widehat v)DF^{-1})$, which gives the stated elasticity transformation. [A1, F2, F4, F5, step 1.1, step 2.1, algebra] ∎
