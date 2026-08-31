---
id: thm-riesz-fischer-completeness-of-l-p
kind: theorem
title: "Riesz-Fischer completeness of $L^p$ for $1 \\le p \\le \\infty$"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-minkowski-inequality-for-integrals, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-complete-metric-space, def-convergence-almost-everywhere-relative-to-a-measure, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-finite-and-countable-subadditivity-of-measures, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "For 1 <= p < infinity, choose a rapidly Cauchy subsequence by least indices, sum the successive differences with monotone convergence and Minkowski, and recover the limit by dominated convergence. For p = infinity, union the exceptional null sets and take the pointwise limit outside them."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 7.10 and Corollary 7.11"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Proposition 7.23 and Theorem 7.24"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Stein and Shakarchi, Real Analysis, Theorem 2.2"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $1\le p\le\infty$. Then
$L^p(\mu)$, with the norm of
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], is
complete. Equivalently, the metric induced by that norm is a complete metric in
the sense of [[def-complete-metric-space]].

Moreover, if a sequence in $L^p(\mu)$ converges in norm, then some subsequence
admits measurable representatives converging almost everywhere in the sense of
[[def-convergence-almost-everywhere-relative-to-a-measure]].

## Facts & Assumptions

**Given:** A measure space and an exponent $1\le p\le\infty$.

[L1] $L^p(\mu)$ is a normed space, so it has the norm metric
([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]],
[[def-complete-metric-space]]).

[L2] Minkowski's inequality holds in $L^p$ ([[thm-minkowski-inequality-for-integrals]]).

[L3] Monotone convergence and dominated convergence are available
([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

[L4] Pointwise limits of measurable functions are measurable
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[L5] Sums and absolute values of measurable functions are measurable
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L6] Countable unions of measurable null sets are measurable and null
([[thm-finite-and-countable-subadditivity-of-measures]]).

[L7] Finite essential suprema are attained almost everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** For $1 \le p < infinity$, choose a rapidly Cauchy
subsequence by least indices, sum the successive differences with monotone
convergence and Minkowski, and recover the limit by dominated convergence. For
$p = infinity$, union the exceptional null sets and take the pointwise limit
outside them.

1.1 Assume $1\le p<\infty$ and let $(u_n)$ be Cauchy in $L^p(\mu)$. Choose by least indices a strictly increasing sequence $(n_k)$ such that [L2, L3, L4, L5, given, choose]
$$\|u_{n_{k+1}}-u_{n_k}\|_p<2^{-k}\qquad(k\ge0).$$
For representatives $f_k$ of $u_{n_k}$, put $h_k:=|f_{k+1}-f_k|$. Then each
$h_k$ is measurable, belongs to $\mathcal L^p(\mu)$, and satisfies
$$\|h_k\|_p<2^{-k}.$$
If $g_m:=\sum_{k<m} h_k$, then
$$\|g_m\|_p\le\sum_{k<m}\|h_k\|_p\le\sum_{k=0}^\infty 2^{-k}<\infty,$$
so each $g_m$ lies in $\mathcal L^p(\mu)$. Monotone convergence then gives a
measurable pointwise limit $g:=\sum_{k=0}^\infty h_k$ with $g\in\mathcal L^p(\mu)$.

1.2 Assume now $p=\infty$ and let $(u_n)$ be Cauchy in $L^\infty(\mu)$. Choose least indices $n_k$ with [L4, L6, L7, given, choose]
$$\|u_{n_{k+1}}-u_{n_k}\|_\infty<2^{-k}.$$
Choose representatives $f_k$ of $u_{n_k}$. By [L7], for each $k$ there is a
measurable null set $E_k$ such that
$$|f_{k+1}-f_k|\le2^{-k}\qquad\text{on }X\setminus E_k.$$
With $E:=\bigcup_k E_k$, [L6] makes $E$ measurable and null, and for
$x\in X\setminus E$ and $m>n$,
$$|f_m(x)-f_n(x)|\le\sum_{k=n}^{m-1}2^{-k}.$$
So $(f_k(x))$ is Cauchy in $\mathbb R$, hence converges to some value $f(x)$.
Defining $f$ arbitrarily on $E$, [L4] makes it measurable.

2.1 Because $g<\infty$ almost everywhere, outside a measurable null set the series $\sum_k |f_{k+1}-f_k|$ converges. Hence the telescoping sums $f_k$ converge pointwise almost everywhere to a measurable function $f$, and [step 1.1, L3, L4]
$$|f-f_k|\le\sum_{j\ge k} h_j\le g.$$
Dominated convergence in [L3] therefore gives $\|f-f_k\|_p\to0$. So the
subsequence $u_{n_k}$ converges to $[f]$, and its representatives converge to
$f$ almost everywhere.

2.2 For $x\in X\setminus E$, the same tail estimate gives [step 1.2]
$$|f(x)-f_n(x)|\le\sum_{k=n}^\infty2^{-k}\le2^{1-n}.$$
Therefore $\|u_{n_k}-[f]\|_\infty\to0$. Given $\varepsilon>0$, choose $K$ with
$\|u_n-u_m\|_\infty<\varepsilon/2$ for $m,n\ge K$, then choose $k$ with
$n_k\ge K$ and $\|u_{n_k}-[f]\|_\infty<\varepsilon/2$. Hence
$$\|u_n-[f]\|_\infty\le\|u_n-u_{n_k}\|_\infty+\|u_{n_k}-[f]\|_\infty<\varepsilon,$$
so $u_n\to[f]$ in $L^\infty(\mu)$.

3.1 Since $(u_n)$ is Cauchy, for every $\varepsilon>0$ there is $K$ with $\|u_n-u_m\|_p<\varepsilon/2$ whenever $m,n\ge K$. Choose $k$ with $n_k\ge K$ and $\|u_{n_k}-[f]\|_p<\varepsilon/2$ from step 2.1. Then for every $n\ge K$, [step 2.1, L2]
$$\|u_n-[f]\|_p\le\|u_n-u_{n_k}\|_p+\|u_{n_k}-[f]\|_p<\varepsilon.$$
So the whole sequence converges to $[f]$. This proves completeness for
$1\le p<\infty$.

4.1 Step 2.1 proves the almost-everywhere convergent subsequence clause in the finite-$p$ case, and step 2.2 gives the same for $p=\infty$. Steps 3.1 and 2.2 prove completeness in every case, which by [L1] is exactly completeness of the norm metric. [step 2.1, step 2.2, step 3.1, L1] ∎
