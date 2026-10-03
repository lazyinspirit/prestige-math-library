---
id: lem-maximal-dyadic-cubes-at-height-lambda
kind: lemma
title: "Maximal dyadic cubes above a level"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable, def-dyadic-cube-in-rn-all-generations, def-l-one-of-a-measure, def-nonnegative-extended-series, lem-dyadic-cubes-all-generations-partition-and-nesting, lem-subset-of-countable, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 3"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes3.pdf"
      locator: "§4, Proposition 4.3 and its proof, printed pp. 23–24"
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "Chapter 1, Theorem 1.12, printed pp. 12–14"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.1 and its proof, printed pp. 356–357"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $f\in L^1(\mathbb R^n)$ and $\lambda>0$, and let the dyadic cubes be the
all-generations cubes of [[def-dyadic-cube-in-rn-all-generations]]. The dyadic
cubes $Q$ with average $|Q|^{-1}\int_Q|f|>\lambda$ that are maximal under
inclusion form a countable family of pairwise disjoint cubes; their union is
exactly the dyadic maximal superlevel set $\{M_df>\lambda\}$, where
$$M_df(x)=\sup\Bigl\{|Q|^{-1}\int_Q|f|:Q\text{ dyadic},\ x\in Q\Bigr\}$$
over all generations; each such $Q$ satisfies
$|Q|^{-1}\int_Q|f|\le2^n\lambda$; and
$\sum_Q|Q|\le\lambda^{-1}\|f\|_1$.

## Facts & Assumptions

**Given:** $f\in L^1(\mathbb R^n)$ and $\lambda>0$; a dyadic cube $Q$ of generation $k$ with centre-related index $m$; the all-generations dyadic grid of [[def-dyadic-cube-in-rn-all-generations]]; two dyadic cubes $Q,Q'$ of generations $k'\ge k$.

[F1] For every generation $k\in\mathbb Z$ the generation-$k$ cubes are pairwise disjoint with union $\mathbb R^n$ and volume $2^{-kn}$; every dyadic cube $Q$ of generation $k$ has for each $j<k$ exactly one ancestor $A_j(Q)$ of generation $j$ containing it, and the parent $A_{k-1}(Q)$ has volume $2^n|Q|$; and if two dyadic cubes intersect then one contains the other ([[lem-dyadic-cubes-all-generations-partition-and-nesting]]).

[F2] $\int_Q|f|\,d\lambda\le\|f\|_1<\infty$ for every measurable $Q$, and every dyadic cube has finite volume ([[def-l-one-of-a-measure]], [[def-dyadic-cube-in-rn-all-generations]]).

[F3] The set $\mathbb Z\times\mathbb Z^n$ is countable, and every subset of a countable set is countable ([[def-countable]], [[lem-subset-of-countable]]); finite and countable sums of nonnegative extended reals are defined by the usual supremum over finite partial sums ([[def-nonnegative-extended-series]]).

## Proof

**Proof technique:** direct.

1.1 Call a dyadic cube **bad** when $|Q|^{-1}\int_Q|f|>\lambda$. Every bad cube satisfies $0\le\lambda|Q|<\int_Q|f|\le\|f\|_1$, so $|Q|<\lambda^{-1}\|f\|_1$; in particular there is a scale above which no bad cube lives. [F2, given, algebra]

1.2 A bad cube is maximal exactly when none of its strictly larger ancestors is bad: by [F1] any intersecting cube is nested, and any containing cube of coarser generation is the unique ancestor of that generation. Every maximal bad cube therefore has a good parent. A good parent alone need not imply maximality; coarser ancestors must also be excluded. Distinct maximal bad cubes are disjoint, since nesting would otherwise make one a strictly larger bad cube containing the other. The family is countable because it is a subset of the dyadic grid parameterized by $\mathbb Z\times\mathbb Z^n$; no selection is required. [F1, F3, given, algebra]

2.1 Every bad cube is contained in a maximal bad cube. Let $Q$ be bad of generation $k$, and let $J:=\{j\le k:A_j(Q)\text{ is bad}\}\subseteq\mathbb Z$, where $A_j(Q)$ is the unique generation-$j$ ancestor of $Q$ from [F1]. The set $J$ is nonempty because $k\in J$, and it is bounded below: if $j\in J$ then $|A_j(Q)|=2^{-jn}<\lambda^{-1}\|f\|_1$ by step 1.1, so $2^{-j}<(\lambda^{-1}\|f\|_1)^{1/n}$ and $j$ exceeds a fixed bound. A nonempty subset of $\mathbb Z$ that is bounded below has a least element $j_0$; the ancestor $A_{j_0}(Q)$ is bad by definition, and every strictly larger ancestor has generation $j<j_0$ and is not bad by minimality. Thus $A_{j_0}(Q)$ is maximal by step 1.2, and contains $Q$. [F1, step 1.1, step 1.2, algebra]

2.2 Let $Q$ be a maximal bad cube and $P$ its parent; by step 1.2 the cube $P$ is good, that is, $|P|^{-1}\int_P|f|\le\lambda$. Since $Q\subseteq P$ and $|P|=2^n|Q|$ by [F1], $\int_Q|f|\le\int_P|f|\le\lambda|P|=2^n\lambda|Q|$, so the average of every maximal bad cube is at most $2^n\lambda$. For the sum, the maximal bad cubes are pairwise disjoint by step 1.2, so with disjoint additivity and monotonicity of the integral, $$\sum_Q\lambda|Q|\le\sum_Q\int_Q|f|=\int_{\bigcup Q}|f|\le\|f\|_1,$$ because each maximal bad cube has average $>\lambda$; hence $\sum_Q|Q|\le\lambda^{-1}\|f\|_1$, the sums being understood as suprema of finite partial sums over the countable family. [F1, F2, F3, step 1.2, algebra]

3.1 The union of the maximal bad cubes is $\{M_df>\lambda\}$. If $x$ lies in a maximal bad cube $Q$, then [F1] gives $M_df(x)\ge|Q|^{-1}\int_Q|f|>\lambda$. Conversely, if $M_df(x)>\lambda$, then by definition of the supremum over a nonempty set of real numbers there is a dyadic cube $Q\ni x$ with $|Q|^{-1}\int_Q|f|>\lambda$, i.e. $Q$ is bad; step 2.1 provides a maximal bad cube containing $Q$, hence containing $x$. [F1, step 2.1, algebra]

4.1 Steps 1.2 and 2.1 give the countable pairwise disjoint maximal family with the containment property, step 3.1 identifies its union with $\{M_df>\lambda\}$, and step 2.2 gives both the average bound and the sum bound. This proves the lemma. [step 1.2, step 2.1, step 2.2, step 3.1] ∎
