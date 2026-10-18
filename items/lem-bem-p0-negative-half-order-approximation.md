---
id: lem-bem-p0-negative-half-order-approximation
kind: lemma
title: P0 averages approximate smooth densities in H negative one half
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, def-bem-surface-mesh-and-piecewise-constant-density-space, lem-bem-surface-fractional-norm-equivalence, cor-poincare-wirtinger-on-convex-domains, def-axiom-of-choice, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-plancherel]
justified_by: []
proof_strategy: direct
axiom_use: The Axiom of Choice is inherited from the convex-domain Poincare–Wirtinger inequality.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: piecewise constant spaces on surface triangulations and approximation context."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 615–616: the H^{-1/2} energy norm and conforming finite-dimensional boundary spaces."
---

## Statement

Let $\{\mathcal T_h\}$ be a shape-regular family of conforming surface triangulations of $\Gamma$ from [[def-bem-surface-mesh-and-piecewise-constant-density-space]], and let $h=\max_{T\in\mathcal T_h}h_T$. For $v\in L^1(\Gamma)$ define the element-average projection
$$\Pi_hv|_T=|T|^{-1}\int_Tv\,ds.$$
There is a family-independent constant $C$ such that
$$\|v-\Pi_hv\|_{L^2(\Gamma)}\le Ch^{1/2}\|v\|_{H^{1/2}(\Gamma)}\qquad(v\in H^{1/2}(\Gamma)).$$
For every $\lambda\in L^2(\Gamma)$, without any alignment condition on the mesh,
$$\|\lambda-\Pi_h\lambda\|_{H^{-1/2}(\Gamma)}\le Ch^{1/2}\|\lambda-\Pi_h\lambda\|_{L^2(\Gamma)}.$$
If, in addition, every triangle $T$ is contained in a single face of the given planar face decomposition and $\lambda$ is continuously differentiable on each face (with facewise derivatives square integrable), then
$$\|\lambda-\Pi_h\lambda\|_{H^{-1/2}(\Gamma)}\le Ch^{3/2}\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)}.$$
Here $\nabla_\Gamma\lambda$ is the ordinary two-dimensional gradient on each planar face; neither the density nor its derivatives need agree across face edges. More generally, the same $h^{3/2}$ bound holds whenever $\lambda|_T\in H^1(T)$ for every triangle, with the gradient norm taken elementwise. Facewise regularity alone does not ensure this condition when a triangle crosses an edge between coplanar faces.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the fixed chart norm on $H^{1/2}(\Gamma)$, the conforming shape-regular triangle family, the additional face alignment for the facewise-density estimate, and the real dual norm on $H^{-1/2}(\Gamma)$.

[A1] The Axiom of Choice is required by the Poincare–Wirtinger supplier ([[def-axiom-of-choice]]).

[F1] The chart Bessel norm is equivalent to the surface chordal norm with seminorm $\int_\Gamma\int_\Gamma|v(x)-v(y)|^2|x-y|^{-3}ds_xds_y$ ([[lem-bem-surface-fractional-norm-equivalence]]).

[F2] On a bounded convex domain, subtracting the mean satisfies the Poincare–Wirtinger inequality with a constant proportional to its diameter ([[cor-poincare-wirtinger-on-convex-domains]], [[def-axiom-of-choice]]).

[F3] Each $T$ contains a disk of radius $\rho_T$, and the element average has zero mean error on $T$ ([[def-bem-surface-mesh-and-piecewise-constant-density-space]]).

[F4] Under Countable Choice, Fourier transformation is a surjective $L^2$ isometry ([[thm-plancherel]]), the Bessel completion is exactly the Fourier-weighted distribution space, and Fourier differentiation multiplies by $2\pi i\xi_j$ ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]). In particular the $s=0$ norm is the $L^2$ norm and the $s=1$ weight controls the weak first derivatives.

## Proof


1.1 We first construct a surface approximation at a length $0<\epsilon\le1$, using only the fixed atlas. For each zero-extended localized pullback $g_j=(\chi_jv)\circ\Phi_j$ in the chart-space definition, let $g_{j,\epsilon}$ have Fourier transform $1_{\{|\xi|\le\epsilon^{-1}\}}\widehat g_j$. The weighted characterization and differentiation in [F4] give $\|g_j-g_{j,\epsilon}\|_2\le C\epsilon^{1/2}q(g_j)$ and $\|g_{j,\epsilon}\|_{H^1}\le C\epsilon^{-1/2}q(g_j)$ by comparing the weights on the discarded and retained frequencies. Fix Lipschitz chart cutoffs $\beta_j$ equal to one on the fixed chart support of $\chi_j$ and compactly supported inside the charts. Transport $\beta_jg_{j,\epsilon}$ back and sum to obtain $v_\epsilon$. Bounded graph area densities and the finite partition give $\|v-v_\epsilon\|_{L^2(\Gamma)}\le C\epsilon^{1/2}\|v\|_{H^{1/2}(\Gamma)}$. Each band-limited function is smooth, and the compactly supported chart products transported to the surface are Lipschitz, including across coplanar face edges. Their restrictions thus belong to $H^1(T)$ on every triangle, even when it crosses such an edge. On each planar face the graph maps are affine with uniformly bounded derivative and inverse derivative; the product and chain rules give $\|\nabla_\Gamma v_\epsilon\|_2\le C\epsilon^{-1/2}\|v\|_{H^{1/2}(\Gamma)}$. These constants depend only on the fixed atlas and cutoffs. The averages form an $L^2$ orthogonal projection, so $\|(I-\Pi_h)z\|_2\le\|z\|_2$. Applying the shape-independent convex Poincare inequality [F2] on every triangle gives $\|(I-\Pi_h)v_\epsilon\|_2\le Ch\|\nabla_\Gamma v_\epsilon\|_2$. For $h\le1$, take $\epsilon=h$ and combine these estimates to obtain $\|(I-\Pi_h)v\|_2\le Ch^{1/2}\|v\|_{H^{1/2}}$. For $h>1$, use projection contraction and the fixed $H^{1/2}\to L^2$ inclusion from [F1]. This proves the first estimate with no dependence on any triangle aspect ratio or family shape-regularity bound. [A1, F1, F2, F3, F4, given, construct, algebra]

1.2 Under the face alignment hypothesis, facewise $C^1$ $\lambda$ with square-integrable derivatives restricts to $H^1(T)$ on each triangle. More generally assume directly that $\lambda|_T\in H^1(T)$. Apply [F2] on the relative interior of each planar triangle, which is convex, to obtain $\|\lambda-\Pi_h\lambda\|_{L^2(T)}\le Ch_T\|\nabla_\Gamma\lambda\|_{L^2(T)}$. Squaring and summing yields $\|\lambda-\Pi_h\lambda\|_{L^2(\Gamma)}\le Ch\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)}$. [A1, F2, F3, given, algebra]

2.1 For any $\lambda\in L^2(\Gamma)$ put $e=\lambda-\Pi_h\lambda$. For any $w\in H^{1/2}(\Gamma)$, [F3] gives $\int_Te\,ds=0$, hence $\int_\Gamma ew\,ds=\sum_T\int_Te(w-w_T)\,ds.$ Cauchy–Schwarz over the finite element sum and step 1.1 give $|\langle e,w\rangle|\le \|e\|_{L^2}\|w-\Pi_hw\|_{L^2}\le Ch^{1/2}\|e\|_{L^2}\|w\|_{H^{1/2}}.$ Taking the supremum over $\|w\|_{H^{1/2}}\le1$ proves the general negative-norm bound. When the hypotheses of step 1.2 hold, its additional factor $h\|\nabla_\Gamma\lambda\|_{L^2}$ proves the stated $h^{3/2}$ bound. [F3, step 1.1, step 1.2, given, algebra] ∎

