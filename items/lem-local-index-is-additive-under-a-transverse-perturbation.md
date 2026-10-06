---
id: lem-local-index-is-additive-under-a-transverse-perturbation
kind: lemma
title: "The local index is additive under a transverse perturbation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, lem-index-sum-of-an-outward-field-is-the-gauss-degree, lem-vector-field-index-is-independent-of-chart-ball-and-trivialization, thm-morse-sard-for-smooth-manifolds, cor-regular-values-have-null-complement-and-are-dense, def-induced-boundary-orientation, def-embedded-smooth-submanifold-with-boundary, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-induced-tangent-bundle-chart, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Lemma 3 and its Step 2, printed pp. 35-36 and p. 40 (the sum of indices over a ball equals the boundary degree, and a generic perturbation preserves it)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Lemma 2.3.3, printed p. 34 (perturbation of a degenerate zero into nondegenerate zeros with the same index sum)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §6, Exercise 3 and its hint, printed pp. 145-147 (a ball's zero count by the boundary map)"
dependency_level: 4
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a smooth $n$-manifold, $n\ge1$, let $X$ be a smooth vector field
with an isolated zero at $p$, and let $B\subseteq M$ be an embedded closed ball
with $p\in\operatorname{int}B$, $X\ne0$ on $\partial B$, and no zero of $X$ in
$\operatorname{int}B$ other than $p$ (such a ball exists in a chart around $p$).

(i) Choose an orientation of $B$ and a smooth trivialization of $TM|_B$
preserving that orientation, and orient $\partial B$ as the boundary of $B$;
then $\operatorname{ind}_pX$ equals the degree of
$x\mapsto X(x)/|X(x)|$ from $\partial B$ to $S^{n-1}$ (the reduced degree for
$n=1$).

(ii) If $X'$ is a smooth vector field on $M$ with $X'=X$ outside
$\operatorname{int}B$ and only nondegenerate zeros $q_1,\dots,q_k$ in
$\operatorname{int}B$, then $\sum_{i=1}^k\operatorname{ind}_{q_i}X'=
\operatorname{ind}_pX$.

(iii) Consequently every isolated zero can be perturbed, supported in an
arbitrarily small ball around it, to finitely many nondegenerate zeros with the
same index sum.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on the smooth $n$-manifold $M$ with an isolated zero $p$, and a sufficiently small embedded closed ball $B\subseteq M$ with $p\in\operatorname{int}B$ and no other zero of $X$ in $\operatorname{int}B$.

[F1] The index of the isolated zero $p$ is the degree of the normalized field on the boundary of a small ball in a chart, with the reduced degree for $n=1$; it is independent of chart and radius, and of trivializations with matching base and fibre orientations ([[def-isolated-zero-and-local-index-of-a-vector-field]], [[lem-vector-field-index-is-independent-of-chart-ball-and-trivialization]]).

[F2] Hopf's boundary lemma: for a compact smooth $m$-manifold with boundary $N\subset\mathbb R^m$ and a smooth field $Y$ on $N$ with only isolated zeros and $Y\ne0$ on $\partial N$, the sum of the indices over the zeros of $Y$ equals the degree of $x\mapsto Y(x)/|Y(x)|$ from $\partial N$ to $S^{m-1}$ with the boundary orientation (the reduced degree for $m=1$) ([[lem-index-sum-of-an-outward-field-is-the-gauss-degree]], [[def-induced-boundary-orientation]]).

[F3] Nondegenerate zeros have index $\operatorname{sign}\det(DY)\in\{+1,-1\}$ ([[thm-index-of-a-nondegenerate-vector-field-zero]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F4] The set of regular values of a smooth map is dense and has null complement; in particular there are regular values of the chart representative $X_\varphi$ arbitrarily close to (but different from) $0$ ([[thm-morse-sard-for-smooth-manifolds]], [[cor-regular-values-have-null-complement-and-are-dense]]).

[F5] There is a smooth bump on the chart that equals $1$ on a smaller ball and is supported in a slightly larger one ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]), and a chart around $p$ trivializes $TM$ over $B$ ([[def-induced-tangent-bundle-chart]], [[def-embedded-smooth-submanifold-with-boundary]]).

## Proof

1.1 Choose a smooth parametrization $b:D^n\to B$ and pull back the field as $Y(u)=(db_u)^{-1}X(b(u))$ on $D:=D^n$: this is a smooth field on the compact manifold $D$ with boundary, with the single zero $b^{-1}(p)$ and $Y\ne0$ on $\partial D$; [F2] applied to $N=D$ gives $\operatorname{ind}_{b^{-1}(p)}Y=\deg(\partial D\to S^{n-1},y\mapsto Y(y)/|Y(y)|)$, and this degree is the degree of $x\mapsto X(x)/|X(x)|$ on $\partial B$ in the induced trivialization; any other orientation-compatible trivialization has the same degree by the matrix-contraction argument of [F1]; hence (i). [F1, F2, F5, algebra]

2.1 For (ii), the same computation applies to the transported field $Y'$ on $D$: its zeros in $\operatorname{int}D$ are $b^{-1}(q_1),\dots,b^{-1}(q_k)$ and it agrees with $Y$ on $\partial D$, so [F2] gives $\sum_i\operatorname{ind}_{b^{-1}(q_i)}Y'=\deg(\partial D,\,Y/|Y|)=\operatorname{ind}_pX$ by step 1.1; the indices are transported back by [F1], and each equals $\pm1$ by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 For (iii), let $B$ be an arbitrarily small embedded closed ball around $p$ with no other zero of $X$ in its interior and let $\varphi$ be a chart on a neighbourhood of $B$ with $\varphi(p)=0$; choose a smooth radial bump $\lambda$ equal to $1$ on a ball $B_1\subset B$ around $p$ and supported in a slightly larger ball $B_2$ with $B_1\subseteq B_2$, $\overline{B_2}\subseteq\operatorname{int}B$, and $B_2$ containing no zero of $X$ except $p$, and by [F4] choose a regular value $y$ of $X_\varphi$ with $|y|$ smaller than the (positive) minimum of $|X_\varphi|$ on the compact collar $\operatorname{supp}\lambda\setminus B_1$. Then $X':=X-\lambda y$ (read in the chart) equals $X$ outside $\operatorname{supp}\lambda\subseteq\operatorname{int}B$, is nowhere zero on the collar $\operatorname{supp}\lambda\setminus B_1$, and on $B_1$ has the zeros $(X_\varphi)^{-1}(y)$, a finite set of nondegenerate points because $y$ is a regular value; all these zeros lie in $\operatorname{int}B_2\subseteq\operatorname{int}B$, so (ii) applies and gives $\sum_i\operatorname{ind}_{q_i}X'=\operatorname{ind}_pX$, with each index $\pm1$ by [F3]. [F3, F4, F5, step 1.1, step 2.1, construct, algebra] ∎
