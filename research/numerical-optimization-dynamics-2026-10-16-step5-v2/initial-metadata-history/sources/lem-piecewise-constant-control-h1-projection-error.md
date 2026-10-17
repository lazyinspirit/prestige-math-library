---
id: lem-piecewise-constant-control-h1-projection-error
kind: lemma
title: Cell averaging preserves constant box bounds and has an H1 error bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-countable-choice
  - def-matching-affine-simplicial-meshes
  - lem-affine-pullback-weak-derivatives-and-scaling
  - thm-reference-simplex-poincare-wirtinger
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: cell-average control projection, admissibility, orthogonality, and its H1-to-L2 estimate."
    - title: Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§1, printed pp. 2–3: H1 control regularity, control projection, and the piecewise-constant O(h) branch."
---

## Statement

Assume Countable Choice. Let $E\subset\mathbb R^d$ be a nonempty bounded polyhedral open control domain, and let $\{\mathcal T_h\}$ be a family of matching affine simplicial meshes of $E$ as in [[def-matching-affine-simplicial-meshes]]. Set $h=\max_{K\in\mathcal T_h}\operatorname{diam}(K)$. For every $q\in L^2(E)$ define
$$
(\Pi_hq)|_K=|K|^{-1}\int_Kq.
$$
Then $\Pi_h$ is the $L^2$ orthogonal projection onto the cellwise-constant space. For every $q\in H^1(E)$,
$$
\|q-\Pi_hq\|_{L^2(E)}\le C h\,|q|_{H^1(E)},
$$
where $C$ depends only on dimension and the fixed reference simplex. If additionally the box bounds $q_a,q_b$ are constant on each cell and $q\in Q_{ad}$, then $\Pi_hq\in Q_{ad}$.

## Facts & Assumptions
**Given:** Countable Choice; the affine simplex mesh convention; $q\in L^2(E)$ for orthogonal projection and $q\in H^1(E)$ for the error estimate; and, only for box preservation, cellwise-constant bounds with $q_a\le q\le q_b$ almost everywhere.

[F1] A cell map is an affine bijection from the fixed reference simplex, and the cells have disjoint interiors ([[def-matching-affine-simplicial-meshes]]).

[F2] Affine pullback transports weak derivatives and Sobolev seminorms by the matrix and determinant factors ([[lem-affine-pullback-weak-derivatives-and-scaling]]).

[F3] On the reference simplex, subtracting the cell mean leaves an $L^2$ norm bounded by a constant times the $H^1$ seminorm ([[thm-reference-simplex-poincare-wirtinger]]).

[F4] Hölder with exponents $2,2$ makes each $L^2(K)$ function integrable on the finite-measure cell, so its mean is finite ([[thm-holder-inequality-for-integrals]]).

[F5] Change of variables holds for nonnegative measurable integrands; applying it to the positive and negative parts gives the formula for the integrable real function $q$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F6] Every mesh facet lies in a Lebesgue-null affine hyperplane, so the finite union of facets is null ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]).

[A1] Countable Choice is the stated hypothesis of [F2] and [F3] ([[def-countable-choice]]).

## Proof

1.1 By [F4], the cell means are finite, and finitely many finite cell values define an element of the cellwise-constant subspace of $L^2(E)$. For every cellwise-constant $c$, $\int_K(q-\Pi_hq)c|_K=0$ by the mean identity. Summing over cells, ignoring the null facets by [F6], gives $(q-\Pi_hq,c)_U=0$, proving the orthogonal-projection property for all $q\in L^2(E)$. If additionally $q_a|_K\le q\le q_b|_K$, integration and division by $|K|>0$ place each mean in that interval; hence $\Pi_hq\in Q_{ad}$. [F1, F4, F6, given, algebra]

1.2 Fix a cell $K$ with affine map $F_K(\hat x)=b_K+A_K\hat x$ and write $\hat q=q\circ F_K$. By [F5], change of variables applied to $q^+$ and $q^-$ gives the signed integral formula; [F6] lets us ignore the cell facets. Hence $(\Pi_hq)|_K\circ F_K=\hat q_{\widehat S_d}$, the mean of $\hat q$ on the reference simplex. By [F3], $\|q-\Pi_hq\|_{L^2(K)} =|\det A_K|^{1/2}\|\hat q-\hat q_{\widehat S_d}\|_{L^2(\widehat S_d)} \le C|\det A_K|^{1/2}|\hat q|_{H^1(\widehat S_d)}.$ By [F2], $|\hat q|_{H^1(\widehat S_d)}\le C\|A_K\||\det A_K|^{-1/2}|q|_{H^1(K)}$, and $\|A_K\|\le C_d h_K$ from the fixed reference simplex geometry. Thus $\|q-\Pi_hq\|_{L^2(K)}\le C h_K|q|_{H^1(K)}$. [A1, F1, F2, F3, F4, F5, F6, given, algebra]

2.1 Square the cell estimates in step 1.2 and sum over cells; the interiors are disjoint and their omitted facets are null by [F6]. Since $h_K\le h$, the sum is at most $C^2h^2|q|_{H^1(E)}^2$. Taking square roots proves the global bound. [F1, F6, step 1.2, algebra] ∎
