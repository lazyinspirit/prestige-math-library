---
id: lem-dirac-maximal-domain-is-h1
kind: lemma
title: "The maximal distributional domain of a geometric Dirac operator is H1"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 4
deps:
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - def-second-order-laplace-type-operators-on-vector-bundles
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - def-axiom-of-choice
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - lem-geometric-dirac-operator-is-well-defined
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; inherited from the compact bundle analytic suppliers"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC. Let $M$ be closed, Riemannian, and of even dimension $n\ge2$. Let $D_V$ be the formally symmetric geometric Dirac operator of [[def-graded-hermitian-clifford-module-and-geometric-dirac]], and let $P=D_V^2$ have the Lichnerowicz form of [[lem-lichnerowicz-formula-for-geometric-dirac-operators]]. Then
$$\operatorname{dom}(\overline D_V)=H^1(M,V)=\{u\in L^2: D_Vu\in L^2\text{ distributionally}\},$$
its graph norm is equivalent to the $H^1$ norm, smooth sections are a core, and $\overline D_V$ is selfadjoint.

## Facts & Assumptions

**Given:** Full AC, closed compact $M$, the module and operator above, and the compact $L^2$ and Sobolev spaces.

[F1] The Lichnerowicz formula says $P=\nabla^*\nabla+R_0$, where $R_0=\operatorname{scal}/4+c(F^{V/S})$ is a smooth bounded endomorphism ([[lem-lichnerowicz-formula-for-geometric-dirac-operators]]).

[F2] For a formally symmetric Laplace-type bundle operator on compact boundaryless $M$, $(P+\lambda):H^2\to L^2$ is an isomorphism for sufficiently large $\lambda>0$, its inverse $B$ maps $L^2\to H^2$ and is selfadjoint, and smooth data are preserved ([[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

[F3] $P$ has a smooth finite-dimensional kernel, closed range, and a Green inverse; the exact $H^2$ domain and higher regularity are as in [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]].

[F4] The geometric Dirac operator is globally defined and formally symmetric on closed $M$ under Countable Choice ([[lem-geometric-dirac-operator-is-well-defined]]).

[A1] Full AC supplies the choice assumptions of [F2]–[F4] ([[def-axiom-of-choice]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 For smooth $u$, formal symmetry [F4] and integration of [F1] against $u$ give $\|Du\|_2^2=\|\nabla u\|_2^2+\langle R_0u,u\rangle$. Since $R_0$ is bounded and the connection Sobolev norm is equivalent to a finite-chart $H^1$ norm, this gives $\|u\|_{H^1}\le C(\|Du\|_2+\|u\|_2)$. Smooth density extends the estimate to $H^1$, while the first-order local formula gives $\|Du\|_2\le C\|u\|_{H^1}$. Thus the graph norm is equivalent to $H^1$, and smooth sections are dense in that graph norm. [F1, F3, F4, given]

1.2 Let $B=(P+\lambda)^{-1}$ from [F2]. It maps $L^2\to H^2$, so $DB:L^2\to H^1$ is bounded. On smooth $h$, $D(Bh)=B(Dh)$: both solve $(P+\lambda)z=Dh$ because $D$ commutes with $D^2$ on smooth sections and the solution is unique. Density extends the symmetry identity $\langle DBf,h\rangle=\langle f,DBh\rangle$ to $f,h\in L^2$. [F2, F3, F4, given, algebra]

2.1 Suppose $u\in L^2$ and $Du=f\in L^2$ distributionally. Then $(P+\lambda)u=Df+\lambda u$ distributionally. Test against $Bh$ for smooth $h$: formal symmetry gives $\langle u,h\rangle=\langle f,DBh\rangle+\lambda\langle u,Bh\rangle=\langle DBf+\lambda Bu,h\rangle$, using step 1.2 and selfadjointness of $B$. Hence $u=DBf+\lambda Bu$ as distributions. The first term is in $H^1$ by the bounded map $DB$, and the second is in $H^2$ by [F2]; therefore $u\in H^1$. Conversely every $H^1$ section has $Du\in L^2$ by the first-order local formula, so the maximal distributional domain equals $H^1$. [F2, F4, step 1.2]

3.1 The closure of smooth $D$ has domain $H^1$ by step 1.1, so its closure is contained in the maximal distributional operator. If $u\in\operatorname{dom}(D^*)$, then the distribution $Du$ equals the $L^2$ vector $D^*u$ by the definition of adjoint testing against smooth sections. Step 2.1 gives $u\in H^1$, and formal symmetry plus density shows $D^*u=Du$. Thus $D^*=\overline D$; the closure is selfadjoint. No compact-resolvent theorem for a general first-order operator is assumed. Full AC supplies the choice assumptions of [F2]–[F4] as recorded in [A1]. [A1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎

