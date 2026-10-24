---
id: lem-nuclear-series-characterizes-trace-norm
kind: lemma
title: Nuclear series characterizes trace norm
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-bessel-inequality, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-infimum, def-hilbert-space, def-countable-choice, def-real-and-complex-inner-product-space, def-compact-linear-operator, thm-monotone-convergence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.29 (printed pp. 98–100)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Proposition 2.9"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be Hilbert spaces over the same real or complex scalar field and let $T\in\mathcal B(H,K)$ be compact
([[def-compact-linear-operator]]). Then $T$ is trace class
([[def-trace-class-operator]]) if and only if there are families
$(u_j)_{j\ge1}$ in $H$ and $(v_j)_{j\ge1}$ in $K$, indexed by the positive
integers, with
$$\sum_{j\ge1}\|u_j\|\,\|v_j\|<+\infty$$
such that the zero-based sequence of finite-rank operators defined by $R_0=0$
and
$$R_m:=\sum_{j=1}^{m}\langle\cdot,u_j\rangle v_j\qquad(m\ge1)$$
converges to $T$ in operator norm ([[def-operator-norm]],
[[def-metric-convergence]]).  Here the displayed scalar series is, under the
library convention, the series of the sequence
$(\|u_{m+1}\|\,\|v_{m+1}\|)_{m\in\mathbb N}$. In that case
$$\|T\|_1=\inf\Bigl\{\sum_{j\ge1}\|u_j\|\,\|v_j\|:\ R_m\to T\ \text{in operator norm}\Bigr\},$$
the infimum being over all such **nuclear representations** of $T$, with the
same zero-based shift understood in every displayed sum, and the
infimum is attained: using its positive-integer index set and padding finite rank by zeros,
the singular-value series
$T=\sum_{j\in J}s_j\langle\cdot,e_j\rangle f_j$ is a nuclear representation with
sum $\|T\|_1$.

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $H,K$ over the same
field, and compact $T\in\mathcal B(H,K)$. Nuclear data are assumed only in the
reverse implication.

[A1] The SVD has $J=\{1,2,\ldots\}$ in infinite rank and $J=\{1,\ldots,r\}$
in rank $r$, including $J=\varnothing$ when $r=0$. It supplies orthonormal
$(e_j),(f_j)$, $Te_j=s_jf_j$, and operator-norm convergence of
$T_m=\sum_{j\in J,\ j\le m}s_j\langle\cdot,e_j\rangle f_j$ to $T$
([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] Trace class and its norm are defined by the sum of the zero-padded
positive-indexed singular values, equivalently by the zero-indexed sequence
$(s_{m+1}(T))_{m\in\mathbb N}$ ([[def-trace-class-operator]]).

[A3] The operator norm bounds $\|Sx\|\le\|S\|\|x\|$, and norm convergence
means these norms of differences tend to zero ([[def-operator-norm]],
[[def-bounded-linear-operator]], [[def-metric-convergence]]).

[A5] The pairing is linear in the first argument and conjugate-linear in the
second. Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and finite
Bessel sums are bounded by the squared norm
([[def-real-and-complex-inner-product-space]],
[[thm-cauchy-schwarz-in-an-inner-product-space]], [[lem-finite-bessel-inequality]]).

[A6] An infimum is a greatest lower bound; a member of a set that is also a
lower bound is consequently its infimum ([[def-infimum]]).

[A7] A nondecreasing real sequence bounded above converges to the supremum of
its range ([[thm-monotone-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $T$ is trace class. For every $j\in J$ set $u_j=s_je_j$ and $v_j=f_j$. Because $s_j$ is real, conjugate-linearity gives $\langle x,s_je_j\rangle=s_j\langle x,e_j\rangle$. In finite rank put $u_j=v_j=0$ for $j>r$; in rank zero use zero families throughout. In infinite rank $J$ already consists of all positive integers, so no index shift and no vector $e_0$ is used. Orthonormality gives $\|u_j\|\|v_j\|=s_j$ for $j\in J$. The shifted zero-based sum is $\|T\|_1<\infty$, and the zero-based partial-sum sequence with $R_0=0$ converges in operator norm by [A1]. [A1, A2, A5, assume-hyp]

1.2 Conversely assume given positive-integer-indexed families with $C=\sum_{j\ge1}\|u_j\|\|v_j\|<\infty$ in the shifted sense just specified, and let the zero-based sequence $(R_m)_{m\in\mathbb N}$ converge to $T$ in operator norm. Each term is linear and bounded by $\|u_j\|\|v_j\|$ using [A5], so $R_m$ is bounded and its range lies in the finite span of $v_1,\ldots,v_m$ (the zero subspace when $m=0$). The given compactness of $T$ licenses [A1]; no new compactness theorem is needed. [given, A1, A3, A5, assume-hyp]

2.1 Fix a finite $F\subseteq J$. Since $Te_k=s_kf_k$, put $S_F=\sum_{k\in F}s_k=\sum_{k\in F}\langle Te_k,f_k\rangle$. For every $m\in\mathbb N$, finite rearrangement (with the sum empty at $m=0$) gives $$a_m:=\sum_{k\in F}\langle R_me_k,f_k\rangle=\sum_{j=1}^m\sum_{k\in F}\langle e_k,u_j\rangle\langle v_j,f_k\rangle.$$ Finite Cauchy–Schwarz, applied to the vectors of absolute values in $\mathbb R^{|F|}$, and Bessel give $$\left|\sum_{k\in F}\langle e_k,u_j\rangle\langle v_j,f_k\rangle\right|\le\left(\sum_{k\in F}|\langle u_j,e_k\rangle|^2\right)^{1/2}\left(\sum_{k\in F}|\langle v_j,f_k\rangle|^2\right)^{1/2}\le\|u_j\|\|v_j\|.$$ Thus $|a_m|\le C$. Also $|S_F-a_m|\le |F|\|T-R_m\|$ by [A3] and [A5], so the zero-based sequence $(a_m)$ converges to $S_F$ and $S_F\le C$. For empty $F$ this says $0\le C$; otherwise a hypothetical $S_F>C$ contradicts the displayed error bound for sufficiently large $m$. [step 1.2, A1, A3, A5, algebra]

3.1 Take $F=J\cap\{1,\ldots,n\}$ for each $n\in\mathbb N$. The zero-padded singular-value partial sums are nondecreasing, start at zero, and are bounded above by $C$ by step 2.1. Therefore [A7] makes their series converge to a value at most $C$. By [A2], $T$ is trace class and $\|T\|_1\le C$. [step 2.1, A2, A7]

4.1 Steps 1.1 and 3.1 prove the equivalence. For trace-class $T$, the set of nuclear-representation sums is nonempty by step 1.1, every such sum is at least $\|T\|_1$ by step 3.1, and step 1.1 attains this bound. It is therefore the infimum by [A6]. All sequences used in the reverse implication were given; the forward implication spends only the Countable Choice already assumed by the SVD. [step 1.1, step 3.1, A6] ∎
