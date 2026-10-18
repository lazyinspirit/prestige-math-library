---
id: thm-hp-corner-exponential-energy-convergence
kind: theorem
title: Exponential hp energy convergence for weighted-analytic polygon corners
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-hp-simplex-p-explicit-conforming-interpolant
  - lem-hp-corner-uniform-degree-dof-count
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: "The unproved Galerkin energy-transfer branch would use Countable Choice through the cited Céa theorem; no proof or axiom sufficiency is accepted here."
verification:
  precheck: pending
sources:
  references:
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§2.3, Definition 1, Proposition 2; §4.1, equations (29)–(31), and Theorem 2, PDF pp. 5–11. Theorem 2 imports established hp approximation properties and does not derive the local conforming p-lift."
    - title: Martin Vohralík, Finite Element Methods, Chapter 6, hp finite elements
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorems 6.2.1 and 6.3.1, printed pp. 55–58: hp approximation and corner-rate context; the relevant local proof is explicitly omitted."
---

## Statement

**Required theorem, not established by this draft.** Let $\Omega\subset\mathbb R^2$ be a bounded polygon with corners $\mathcal C=\{c_i\}_{i=1}^m$, corner weights $\beta_i\in[0,1)$, and $\Phi_\beta(x)=\prod_{i=1}^m|x-c_i|^{\beta_i}$. For integers $k\ge2$, define the corner-weighted norm
For any nonnegative weight vector $\gamma$, set $\Phi_\gamma(x)=\prod_i|x-c_i|^{\gamma_i}$; for $j\ge2$, $\beta+j-2$ means adding $j-2$ to each component of $\beta$. Define $|D^ku|=\sum_{|\alpha|=k}|D^\alpha u|$ and
$$\|v\|_{H^{k,2}_\beta(\Omega)}^2=\|v\|_{H^1(\Omega)}^2+\sum_{j=2}^k\sum_{|\alpha|=j}\|\Phi_{\beta+j-2}D^\alpha v\|_{L^2(\Omega)}^2.$$
The weighted analytic class $B^2_\beta(\Omega)$ consists of functions in every $H^{k,2}_\beta$ for which some $C_u,d_u>0$ satisfy $\|\Phi_{\beta+k-2}|D^ku|\|_{L^2}\le C_ud_u^{k-2}(k-2)!$ for every integer $k\ge2$.

Assume a nested sequence of matching shape-regular triangulations $\mathcal T_k$ with at most $C_0k$ triangles, geometric corner grading
$$\sigma\le\frac{\operatorname{diam}(T)}{\operatorname{dist}(T,\mathcal C)}\le\sigma^{-1}\quad(\overline T\cap\mathcal C=\varnothing),\qquad \operatorname{diam}(T)\le C_1\sigma^k\quad(\overline T\cap\mathcal C\ne\varnothing),$$
for fixed $0<\sigma<1$, and a uniform total degree satisfying $c_0k\le p_k\le c_1k$ for fixed $0<c_0\le c_1$. Let $V_k$ be the trace-matching degree-$p_k$ space with the stated homogeneous boundary trace, and let $N_k=\dim V_k$. The target for $u\in B^2_\beta(\Omega)$ with the same boundary trace is
$$\inf_{v_k\in V_k}\|\nabla(u-v_k)\|_{L^2(\Omega)}\le C e^{-bN_k^{1/3}}.$$
For a coercive conforming Galerkin problem whose energy norm is equivalent to this $H^1$ seminorm, the corresponding energy error is then obtained from Céa. This draft records the exact 2D corner branch and grading law but supplies no proof of the target estimate.

## Facts & Assumptions

**Given:** A polygon and corner set, the stated weight vector and weighted-analytic class, the nested uniformly shape-regular geometric corner meshes, uniform total degrees $p_k\simeq ck$, and the finite-dimensional conforming Galerkin spaces $V_k$.

[F1] [[lem-hp-simplex-p-explicit-conforming-interpolant]] is the required local unweighted simplex approximation and p-stable face-lift supplier; its proof is not supplied.

[F2] [[lem-hp-corner-uniform-degree-dof-count]] proves $N_k\le Ck^3$ from the mesh count and degree law.

[F3] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]] supplies H1 conformity for matching variable-degree piecewise polynomials under Countable Choice.

[F4] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] transfers a proved best-approximation bound to the energy error under its boundedness, coercivity, and Countable Choice hypotheses.

## Escalation

The cited He–Houston–Schwab–Wihler Theorem 2 uses this weighted class and the geometric mesh/degree law, but its proof says the exponential approximation is a direct consequence of known approximation properties and cites prior works; it does not prove the local unweighted simplex p-estimate, conformity lift, layer error sum, or the present best-approximation conclusion. The missing item [[lem-hp-simplex-p-explicit-conforming-interpolant]] is therefore a logical prerequisite, not a completed supplier. The cubic count is proved separately in [[lem-hp-corner-uniform-degree-dof-count]]. This established corner theorem remains an authoring escalation, not an open problem and not a proof-ready claim.
