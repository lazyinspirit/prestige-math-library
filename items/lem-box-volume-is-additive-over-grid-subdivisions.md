---
id: lem-box-volume-is-additive-over-grid-subdivisions
kind: lemma
title: "The volume of a half-open box is the sum of the volumes of the cells of any coordinate grid subdividing it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-half-open-box, def-finite-sum, lem-finite-sum-laws, def-extended-reals, def-nonnegative-extended-series, def-multidimensional-grid-partition, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let $B = B(a,b) \subseteq \mathbb{R}^n$ be a nonempty half-open
box ([[def-half-open-box]]). Suppose that for each $i < n$ a strictly increasing
finite list

$$a_i = c_{i,0} < c_{i,1} < \dots < c_{i,N_i} = b_i, \qquad N_i \ge 1,$$

in $\overline{\mathbb{R}}$ is given, and for a multi-index $k$ with $k_i < N_i$
for every $i<n$ put
$Q_k := B\big((c_{i,k_i})_{i<n},\ (c_{i,k_i+1})_{i<n}\big)$. Then the cells $Q_k$
are nonempty half-open boxes, pairwise disjoint, with union $B$, and

$$\operatorname{vol}(B) \;=\; \sum_{k_0<N_0}\ \cdots \sum_{k_{n-1}<N_{n-1}} \operatorname{vol}(Q_k),$$

where a sum over cells is the iterated recursive sum of
[[def-multidimensional-grid-partition]], formed here in $[0,+\infty]$ by the
recursion of [[def-nonnegative-extended-series]].

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, a nonempty box $B = B(a,b)$, the lists $c_{i,0}<\dots<c_{i,N_i}$ and the cells $Q_k$ of the Statement, and the induction principle ([[thm-induction-principle]]). For $p \le n$ and a multi-index $k$ with $k_i < N_i$ for every $i<p$, let $D^p_k$ denote the half-open box whose $i$-th parameter pair is $(c_{i,k_i},c_{i,k_i+1})$ for $i<p$ and $(a_i,b_i)$ for $p \le i < n$, so that $D^0$ is $B$ itself and $D^n_k = Q_k$; and let $S(p)$ be the assertion that $\operatorname{vol}(B) = \sum_{k_0<N_0}\cdots\sum_{k_{p-1}<N_{p-1}}\operatorname{vol}(D^p_k)$, a sum over no index being read as its single term.

[L1] A box is nonempty exactly when $a_i < b_i$ for every $i < n$, and $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$ ([[def-half-open-box]]).

[L2] For a nonempty box with parameter pair $(a,b)$, $\operatorname{vol}(B) := +\infty$ when $a_i = -\infty$ or $b_i = +\infty$ for some $i<n$, and $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real; and $\operatorname{vol}(\varnothing) := 0$ ([[def-half-open-box]]).

[F1] For sequences of reals, $\sum_{k<n}\lambda a_k = \lambda\sum_{k<n}a_k$; if $m \le n$ then $\prod_{k<n}a_k = (\prod_{k<m}a_k)(\prod_{k=m}^{n-1}a_k)$; $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$; and $\prod_{k<n}(a_kb_k) = (\prod_{k<n}a_k)(\prod_{k<n}b_k)$ ([[lem-finite-sum-laws]], claims 2, 3, 5 and 6).

[F2] Finite sums and finite products of a sequence of reals are defined by the recursions $\Sigma_0 = 0$, $\Sigma_{\sigma(n)} = \Sigma_n + a_n$ and $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$, written $\sum_{k<n}a_k$ and $\prod_{k<n}a_k$ ([[def-finite-sum]]).

[F3] For $a,b \in \overline{\mathbb{R}}$, $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$ ([[def-extended-reals]]).

[F4] The partial sums of a sequence in $[0,+\infty]$ are the unique sequence with $s_0=0$ and $s_{n+1}=s_n+a_n$, and finite sums use the same recursion, $\sum_{k<n}a_k=s_n$ ([[def-nonnegative-extended-series]]).

[F5] A sum over cells means the iterated recursive sum $\sum_{i_0<n_0}\cdots\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]] ([[def-multidimensional-grid-partition]]).

## Proof

**Proof technique:** induction.

1.1 Each cell is a nonempty box contained in $B$, since $a_i = c_{i,0} \le c_{i,k_i} < c_{i,k_i+1} \le c_{i,N_i} = b_i$ for every $i<n$, so that $(c_{i,k_i}, c_{i,k_i+1}] \subseteq (a_i,b_i]$ in every coordinate. [L1]

1.2 The cells are pairwise disjoint with union $B$: distinct multi-indices differ at some $i$ with, say, $k_i < k'_i$, whence $c_{i,k_i+1} \le c_{i,k'_i}$ and no point can satisfy $x_i \le c_{i,k_i+1}$ and $c_{i,k'_i} < x_i$ at once; and for $x \in B$ and $i<n$ the set $\{\, r \le N_i : c_{i,r} < x_i \,\}$ contains $0$ and omits $N_i$, so its greatest member $k_i$ satisfies $k_i<N_i$ and $c_{i,k_i} < x_i \le c_{i,k_i+1}$. [L1]

1.3 A finite sum in $[0,+\infty]$ equals $+\infty$ exactly when one of its terms does, and when every term is real it is the finite sum of those reals: the recursion $s_{q+1} = s_q + u_q$ produces $+\infty$ once a term is $+\infty$ and never leaves $[0,+\infty)$ otherwise. [F3, F4]

1.4 Let $D = B(d,f)$ be a nonempty box all of whose parameters are real, let $p<n$, let $d_p = t_0 < \dots < t_N = f_p$ be reals, and write $D^{(r)}$ for the box obtained from $D$ by replacing its $p$-th parameter pair by $(t_r,t_{r+1})$; putting $u_i := f_i - d_i$ for $i \ne p$ and $u_p := 1$, and $\Pi := \prod_{i<n}u_i$, the product and splitting laws give $\operatorname{vol}(D) = \Pi\,(f_p-d_p)$ and $\operatorname{vol}(D^{(r)}) = \Pi\,(t_{r+1}-t_r)$, so scaling and telescoping give $\sum_{r<N}\operatorname{vol}(D^{(r)}) = \Pi\sum_{r<N}(t_{r+1}-t_r) = \Pi\,(t_N-t_0) = \operatorname{vol}(D)$. [L2, F1, F2, algebra]

1.5 At $p = 0$ the iterated sum carries no summation index, so its value is its single term $\operatorname{vol}(D^0) = \operatorname{vol}(B)$ and $S(0)$ holds. [F5, base]

1.6 Let $p < n$ and assume $S(p)$ as the induction hypothesis. [ih]

2.1 Let $D = B(d,f)$ be a nonempty box, let $p<n$, and let $d_p = t_0 < \dots < t_N = f_p$ in $\overline{\mathbb{R}}$ with the boxes $D^{(r)}$ as in step 1.4; if some parameter of $D$ is infinite then $\operatorname{vol}(D) = +\infty$, and the sum $\sum_{r<N}\operatorname{vol}(D^{(r)})$ is $+\infty$ as well, because an infinite parameter in a coordinate $i \ne p$ is shared by every nonempty $D^{(r)}$, while $d_p = -\infty$ makes $\operatorname{vol}(D^{(0)}) = +\infty$ and $f_p = +\infty$ makes $\operatorname{vol}(D^{(N-1)}) = +\infty$. [step 1.3, L2, F3]

3.1 Combining the two cases, for every nonempty box $D$, every $p<n$ and every strictly increasing list $d_p = t_0 < \dots < t_N = f_p$ in $\overline{\mathbb{R}}$ one has $\operatorname{vol}(D) = \sum_{r<N}\operatorname{vol}(D^{(r)})$, since either all parameters of $D$ are real, and then so are all the $t_r$, or some parameter is infinite. [step 1.4, step 2.1, L2]

4.1 Each box $D^p_k$ is nonempty, by the inequalities of step 1.1 applied in coordinates $i<p$ and $a_i<b_i$ in the others, and its $p$-th parameter pair is $(a_p,b_p)$ with the list $a_p = c_{p,0} < \dots < c_{p,N_p} = b_p$ available, so step 3.1 gives $\operatorname{vol}(D^p_k) = \sum_{k_p<N_p}\operatorname{vol}(D^{p+1}_{k}) $; substituting this into the identity of step 1.6 termwise yields $S(p+1)$. [step 1.1, step 1.6, step 3.1]

5.1 By induction $S(p)$ holds for every $p \le n$, and $S(n)$ is the displayed identity because $D^n_k = Q_k$; together with steps 1.1 and 1.2 this is the Statement. [step 1.1, step 1.2, step 4.1, discharge-induction: step 4.1] ∎
