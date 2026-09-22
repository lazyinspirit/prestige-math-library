---
id: ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero
kind: example
title: Diagonal operator on ell p is compact iff diagonal tends to zero
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, thm-sequential-characterization-of-compact-operators, def-dependent-choice, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-counting-measure, prop-counting-measure-is-a-measure, rem-ell-p-is-l-p-of-counting-measure, def-complex-lp-and-euclidean-test-function-conventions, lem-complex-lp-completeness-density-and-inner-product, thm-riesz-fischer-completeness-of-l-p, def-banach-space, def-norm-and-normed-space, def-linear-map, lem-index-map-grows, def-metric-convergence, def-metric-ball, def-continuous-map-top]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 p.70, example after Theorem 3.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.186, Example 4.26"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let
$\mathbb K=\mathbb R$ or $\mathbb C$, let $1\le p\le\infty$ and let
$a:\mathbb N\to\mathbb K$, $n\mapsto a_n$, be bounded in modulus: there is a
real $M\ge0$ such that $|a_n|\le M$ for every $n$. Write
$\ell^p(\mathbb N,\mathbb K)$ for the counting-measure
space $L^p(\#;\mathbb K)$ on $(\mathbb N,\mathcal P(\mathbb N),\#)$, read as the
space of scalar sequences $x$ with $\sum_n|x_n|^p<\infty$ for $p<\infty$ and
with $\sup_n|x_n|<\infty$ for $p=\infty$
([[def-counting-measure]], [[prop-counting-measure-is-a-measure]],
[[rem-ell-p-is-l-p-of-counting-measure]],
[[def-complex-lp-and-euclidean-test-function-conventions]]), and let

$$D_a:\ell^p(\mathbb N,\mathbb K)\longrightarrow\ell^p(\mathbb N,\mathbb K),\qquad (D_ax)_n:=a_nx_n ,$$

be the diagonal operator. Then $D_a$ is compact
([[def-compact-linear-operator]]) if and only if $a_n\to0$, meaning that for
every real $\varepsilon>0$ there is $N\in\mathbb N$ such that
$|a_n|<\varepsilon$ whenever $n\ge N$.

## Facts & Assumptions

[A1] On $(\mathbb N,\mathcal P(\mathbb N),\#)$ every real function is measurable, for real $f$ one has $\int|f|^p\,d\#=\sum_n|f(n)|^p$ for $0<p<\infty$ and $\|f\|_\infty=\sup_n|f(n)|$, and almost-everywhere equality is equality everywhere ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-counting-measure]]); for complex $f=u+iv$ measurability means measurability of $u,v$, so every complex function on $\mathbb N$ is measurable, and $L^p(\#;\mathbb C)$ is complete under $\mathrm{AC}_\omega$ ([[def-complex-lp-and-euclidean-test-function-conventions]], [[lem-complex-lp-completeness-density-and-inner-product]]).

[A2] Real $L^p(\#)$ is complete under countable choice ([[thm-riesz-fischer-completeness-of-l-p]]); completeness of the target is what the norm-closure theorem needs for a compact conclusion ([[def-banach-space]], [[def-norm-and-normed-space]]).

[A3] For $\lambda$ a scalar and $n$ fixed, the sequence $e_n$ that is $1$ at $n$ and $0$ elsewhere lies in $\ell^p$ with $\|e_n\|_p=1$ for every $1\le p\le\infty$ ([[def-counting-measure]], [[rem-ell-p-is-l-p-of-counting-measure]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[A4] A bounded finite-rank operator is compact ([[lem-finite-rank-operators-are-compact]]); under $\mathrm{AC}_\omega$ a norm limit of compact operators with Banach target is compact ([[thm-norm-limit-of-compact-operators-is-compact]]); under DC a compact operator sends bounded sequences to sequences with convergent subsequences ([[thm-sequential-characterization-of-compact-operators]], [[def-dependent-choice]], [[def-countable-choice]], [[lem-dependent-choice-implies-countable-choice]]).

[A5] The operator norm bounds $\|Tx\|\le\|T\|\,\|x\|$ and equals the supremum of $\|Tx\|$ over the closed unit ball ([[def-operator-norm]], [[def-bounded-linear-operator]], [[def-metric-ball]]); operator-norm convergence is metric convergence ([[def-metric-convergence]]), while scalar convergence has the explicit epsilon meaning in the statement.

## Verification

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, $1\le p\le\infty$, a bounded sequence $a$, the operator $D_a$ on $\ell^p(\mathbb N,\mathbb K)$, and the truncations $D_a^{(N)}$ defined by $(D_a^{(N)}x)_n=a_nx_n$ for $n<N$ and $0$ for $n\ge N$.

1.1 $D_a$ is well defined and bounded with $\|D_ax\|_p\le\|a\|_\infty\|x\|_p$, because $|a_nx_n|\le\|a\|_\infty|x_n|$ for every $n$; so $\|D_a\|\le\|a\|_\infty$. [A1, A5, algebra]

1.2 Each truncation $D_a^{(N)}$ is bounded, and its range is contained in the linear span of $e_0,\dots,e_{N-1}$, so $D_a^{(N)}$ has finite rank and is compact by [A4]. [A3, A4]

1.3 If $a_n\not\to0$, then there is a real $\varepsilon>0$ and a strictly increasing $n$ with $|a_{n_k}|\ge\varepsilon$ for all $k$: this is the negation of convergence, and the indices are chosen by DC ([[def-dependent-choice]], [[lem-index-map-grows]]). [A5]

2.1 For every $N$ one has $\|D_a-D_a^{(N)}\|=\sup_{n\ge N}|a_n|$: the upper bound is [step 1.1] applied to the tail sequence, and the lower bound follows by testing $e_n$ for $n\ge N$, where $\|(D_a-D_a^{(N)})e_n\|_p=|a_n|$. [step 1.1, A3, A5]

2.2 Under the hypothesis of [step 1.3], the bounded sequence $(e_{n_k})$ has $\|D_ae_{n_k}-D_ae_{n_l}\|_p\ge\varepsilon$ for all $k\ne l$ (indeed it is at least $(\varepsilon^p+\varepsilon^p)^{1/p}$ for $p<\infty$ and at least $\varepsilon$ for $p=\infty$), so the sequence of images has no convergent subsequence; by the sequential characterization [A4] the operator $D_a$ is not compact. [step 1.3, A3, A4, A5]

3.1 If $a_n\to0$, then for every real $\varepsilon>0$ there is $N$ with $|a_n|<\varepsilon$ for all $n\ge N$, so $\|D_a-D_a^{(N)}\|\le\varepsilon$ by [step 2.1]; hence $D_a$ is a norm limit of the compact operators $D_a^{(N)}$ and is compact by [A4], the target $\ell^p$ being Banach by [A1] and [A2]. [step 1.2, step 2.1, A1, A2, A4]

4.1 Steps [step 3.1] and [step 2.2] are the two directions of the equivalence, so the diagonal operator $D_a$ on $\ell^p(\mathbb N,\mathbb K)$ is compact exactly when $a_n\to0$. [step 3.1, step 2.2] ∎
