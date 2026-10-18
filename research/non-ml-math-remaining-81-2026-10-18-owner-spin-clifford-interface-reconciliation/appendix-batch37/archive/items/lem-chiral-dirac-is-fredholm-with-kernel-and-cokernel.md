---
id: lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel
kind: lemma
title: "A chiral geometric Dirac operator is Fredholm"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 5
deps:
  - lem-dirac-maximal-domain-is-h1
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - def-axiom-of-choice
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
justified_by:
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

Assume full AC and the closed hypotheses of [[lem-dirac-maximal-domain-is-h1]]. The chiral operator
$$D_V^+:H^1(V^+)\longrightarrow L^2(V^-)$$
is Fredholm. Its kernel is $\ker D_V\cap L^2(V^+)$, its cokernel is canonically $\ker D_V\cap L^2(V^-)$, and
$$\operatorname{ind}_{\mathbb C}D_V^+=\dim\ker D_V^+-\dim\ker D_V^-.$$
Both kernels are finite-dimensional and consist of smooth sections.

## Facts & Assumptions

**Given:** Full AC, $M$ closed compact of positive even dimension, and $D_V$ as above.

[F1] The selfadjoint domain is exactly $H^1$, and $D_V$ is odd ([[lem-dirac-maximal-domain-is-h1]], [[def-graded-hermitian-clifford-module-and-geometric-dirac]]).

[F2] $P_\pm=D^\mp D^\pm$ are formally symmetric Laplace-type operators with exact $H^2$ domains, finite smooth kernels, closed ranges, and Green operators $G_\pm$ satisfying $P_\pm G_\pm=I-\Pi_\pm$ ([[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]], [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[A1] AC is used through [F2] and [[def-axiom-of-choice]].

## Proof

**Given:** The chiral decomposition and the Green data in [F2].

1.1 Since $D$ is odd and selfadjoint, its blocks satisfy $(D^+)^*=D^-$ on the $H^1$ domain. If $D^+u=0$, then $P_+u=D^-D^+u=0$ distributionally, so [F2] makes $u$ a smooth element of the finite-dimensional $\ker P_+$. Conversely $P_+u=0$ implies $\|D^+u\|_2^2=\langle P_+u,u\rangle=0$, hence $D^+u=0$. The same argument applies to $D^-$. [F1, F2, given]

1.2 Define $Q=D^-G_-:L^2(V^-)\to H^1(V^+)$. The Green bound gives $G_-:L^2\to H^2$ and the first-order local formula gives $D^-:H^2\to H^1$ bounded. Therefore $D^+Q=P_-G_-=I-\Pi_-$. The range of $D^+$ contains $\ker P_-^\perp$ and is orthogonal to $\ker P_-$ because $\langle D^+u,h_-\rangle=\langle u,D^-h_-\rangle=0$. Hence its range is exactly $\ker P_-^\perp$, which is closed, and its cokernel is $\ker P_-$. [F1, F2, algebra]

2.1 For $u\in H^1(V^+)$, approximate by smooth sections. For smooth $u$, $D^-G_-D^+u-u$ lies in $\ker D^+$ because applying $D^+$ gives $D^+u-\Pi_-D^+u-D^+u=0$; here $\Pi_-D^+u=0$ by the orthogonality in step 1.2. It is also orthogonal to $\ker D^+$ since $D^-$ is the adjoint of $D^+$ and $D^+h_+=0$. Thus $D^-G_-D^+u=u-\Pi_+u$. Boundedness and density extend the identity to $H^1$. The two-sided inverses modulo finite-rank projections and the finite kernel/cokernel prove Fredholmness and the index formula. Full AC is inherited through [A1] and the Green-operator supplier. [A1, F1, F2, step 1.1, step 1.2] ∎

