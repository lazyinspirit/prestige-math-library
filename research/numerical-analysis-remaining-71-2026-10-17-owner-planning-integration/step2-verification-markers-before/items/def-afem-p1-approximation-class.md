---
id: "def-afem-p1-approximation-class"
kind: "definition"
title: "The P1 AFEM approximation class"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-nvb-labelled-triangulation-family"
  - "def-broken-and-conforming-polynomial-spaces"
  - "def-countable-choice"
  - "lem-galerkin-orthogonality-for-conforming-galerkin-approximations"
  - "thm-cea-quasi-optimality-for-conforming-galerkin-approximations"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "def-afem-p1-residual-estimator-and-data-oscillation"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 4"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture4.pdf"
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted P1 Laplace complexity, PDF pp. 1–4."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
---
## Definition

Assume Countable Choice. The space $H_0^1(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $H^1$ norm, as in [[def-wkp-zero-as-a-sobolev-closure]] and [[def-countable-choice]].

Fix a compatible initial triangulation $\mathcal T_0$, its 2D NVB family $\mathbb T(\mathcal T_0)$ from [[def-afem-nvb-labelled-triangulation-family]], and a weak solution $u\in H_0^1(\Omega)$ of the symmetric $A=I$, $b=0$ model in [[def-afem-p1-residual-estimator-and-data-oscillation]]. For a conforming refinement $\mathcal T$, let $V(\mathcal T)$ be its continuous P1 zero-boundary space and define
$$E(\mathcal T;u)=\inf_{v\in V(\mathcal T)}\|\nabla(u-v)\|_{L^2(\Omega)},\qquad E_N(u)=\inf_{\substack{\mathcal T\in\mathbb T(\mathcal T_0)\\ \#\mathcal T-\#\mathcal T_0\le N}}E(\mathcal T;u).$$
For $s>0$, the approximation seminorm and class are
$$|u|_{\mathbb A_s}=\sup_{N\ge0}(N+1)^sE_N(u),\qquad \mathbb A_s=\{u\in H_0^1(\Omega):|u|_{\mathbb A_s}<\infty\}.$$
The infimum is over a nonempty finite-budget set because $\mathcal T_0$ is allowed. This definition concerns best energy approximation, not the number of cells selected by an algorithm. For the symmetric Laplace Galerkin solution, [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] supplies the unique exact solution, while [[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]] gives orthogonality in the gradient inner product. Expanding the square shows that the exact Galerkin error equals $E(\mathcal T;u)$.

## Interface

The model, P1 spaces, and energy norm are those of [[def-broken-and-conforming-polynomial-spaces]] and [[def-afem-p1-residual-estimator-and-data-oscillation]]. This class is used only in the restricted P1 Laplace optimal-complexity result on this page.
