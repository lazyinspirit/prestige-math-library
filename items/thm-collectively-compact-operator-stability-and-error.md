---
id: thm-collectively-compact-operator-stability-and-error
kind: theorem
title: Collective compactness gives eventual Fredholm invertibility and solution
  error bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-banach-space
  - def-compact-linear-operator
  - def-operator-norm
  - thm-compact-subset-is-closed-and-bounded
  - thm-metric-compactness-equivalences
  - thm-fredholm-alternative-for-identity-minus-compact
justified_by: []
proof_strategy: direct
axiom_use: "AC is used to choose a sequence of unit vectors violating any
  eventual lower bound, to obtain the compact-subsequence argument, and in the
  Fredholm alternative for I-K and I-K_n."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Lemmas 3.13–3.16, Theorems 3.18–3.19 and Corollary 3.20, printed pp.
        60–64."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and
        Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computa\
        tional%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Theorems 1.7–1.9, printed pp. 12–13."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $X\ne\{0\}$ be a Banach space ([[def-banach-space]]), let $K:X\to X$
be compact, and let $(K_n)_{n\ge1}$ be bounded linear operators such that
$$\overline{\bigcup_{n\ge1}K_n(B_X)}$$
is compact for the closed unit ball $B_X:=\{x\in X:\|x\|\le1\}$ and
$K_nx\to Kx$ in norm for every $x\in X$. Suppose $I-K$ is injective. Then
there are $n_0\ge1$ and $C<\infty$ such that $I-K_n$ is boundedly invertible
for every $n\ge n_0$ and
$$\sup_{n\ge n_0}\|(I-K_n)^{-1}\|\le C.$$
For any $f,f_n\in X$, if $u$ and $u_n$ solve $(I-K)u=f$ and
$(I-K_n)u_n=f_n$, then for $n\ge n_0$,
$$\|u_n-u\|\le C\bigl(\|(K_n-K)u\|+\|f_n-f\|\bigr).$$
The theorem does not assert that $\|K_n-K\|\to0$.

## Facts & Assumptions

**Given:** AC, the Banach space $X\ne\{0\}$, compact $K$, bounded linear $K_n$, compact closure of the union of their unit-ball images, pointwise norm convergence $K_nx\to Kx$, and injectivity of $I-K$.

[A1] [[def-axiom-of-choice]] and [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]: AC supplies Countable Choice and Dependent Choice, including the prescribed countable selections used below.

[F1] [[thm-fredholm-alternative-for-identity-minus-compact]]: under AC, for a compact operator on a Banach space, injectivity of $I-T$ implies surjectivity and a bounded inverse.

[F2] [[thm-metric-compactness-equivalences]]: under Countable Choice and Dependent Choice, a compact metric space is sequentially compact.

[F3] [[thm-compact-subset-is-closed-and-bounded]]: a compact subset of a normed space is bounded and closed.

[F4] [[def-compact-linear-operator]]: compactness means that every bounded set has image with compact closure; in particular each $K_n$ is compact when its unit-ball image has compact closure.

[F5] [[def-operator-norm]]: for a bounded linear operator, its norm is the supremum of the norms of its image on the closed unit ball.

## Proof




**Given:** The data in the Statement.

1.1 Since $K$ is compact and $I-K$ is injective, [F1] gives a bounded inverse $(I-K)^{-1}$. [given, F1]

1.2 We claim there are $n_0$ and $c>0$ such that $\|(I-K_n)x\|\ge c\|x\|$ for all $x\in X$ and $n\ge n_0$. Otherwise, for each integer $m\ge1$, failure of the bound $c=1/m$ for all $n\ge m$ gives an index $n_m\ge m$ and a unit vector $x_m$ with $\|(I-K_{n_m})x_m\|<1/m$; [A1] permits choosing such a sequence. Then $x_m=(I-K_{n_m})x_m+K_{n_m}x_m.$ The sequence $(K_{n_m}x_m)$ lies in the compact closure of the union in the Statement, so [F2] gives a convergent subsequence, say $K_{n_{m_j}}x_{m_j}\to y$. The displayed identity and $\|(I-K_{n_{m_j}})x_{m_j}\|\to0$ imply $x_{m_j}\to y$, hence $\|y\|=1$. [given, A1, F2, choose]

2.1 By [F3], choose $M<\infty$ bounding the norms of all vectors in the compact union closure. Every $K_n$ maps the unit ball into this closure, so [F5] gives $\|K_n\|\le M$ for all $n$. Along the subsequence in step 1.2, $\|K_{n_{m_j}}x_{m_j}-K_{n_{m_j}}y\|\le M\|x_{m_j}-y\|\to0,$ while pointwise convergence for the fixed vector $y$ gives $K_{n_{m_j}}y\to Ky$. Therefore the same sequence converges to both $y$ and $Ky$, so $Ky=y$. This contradicts injectivity of $I-K$ because $\|y\|=1$. [given, F3, F5, step 1.2, algebra]

3.1 The contradiction in step 2.1 establishes the eventual lower bound claimed in step 1.2, so each $I-K_n$ is injective for $n\ge n_0$. Its unit-ball image is contained in the compact closure from the Statement, so $K_n$ is compact by [F4]; applying [F1] to each $K_n$ makes $I-K_n$ surjective with bounded inverse. For $z=(I-K_n)x$, the same lower bound gives $\|(I-K_n)^{-1}z\|=\|x\|\le c^{-1}\|z\|$, hence the inverse norms are uniformly at most $C:=c^{-1}$. [given, F1, F4, step 1.2, step 2.1]

4.1 Subtracting the equations gives $(I-K_n)(u_n-u)=f_n-f+(K_n-K)u.$ Applying the inverse from step 3.1 and the triangle inequality yields the stated error estimate. [given, step 3.1, algebra] ∎

