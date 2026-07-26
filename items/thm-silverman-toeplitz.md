---
id: thm-silverman-toeplitz
kind: theorem
title: "A summability matrix with only finitely many nonzero entries per row is regular iff each column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded"
status: draft
origin: session
deps: [def-summability-matrix, def-sequence, thm-of-archimedean, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-of-abs-value, def-real-limit, lem-rat-embeds-dense, lem-convergent-implies-bounded, thm-algebra-of-limits, cor-archimedean-reciprocal, def-complete-ordered-field, def-upper-bound, def-bounded-set, lem-finite-set-has-max, def-max-min, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, lem-limit-unique, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

Let $c$ be a summability matrix ([[def-summability-matrix]]), so that every row
has only finitely many nonzero entries. Then $c$ is regular if and only if all
three of the following hold:

1. **(Columns are null.)** For every $k \in \mathbb{N}$ the $k$-th column
   converges with $\lim_n c_{n,k} = 0$.
2. **(Row sums tend to $1$.)** The sequence of row sums converges with
   $\lim_n \sum_k c_{n,k} = 1$.
3. **(Row absolute sums are uniformly bounded.)** There is $M \in \mathbb{R}$
   with $\sum_k |c_{n,k}| \le M$ for every $n \in \mathbb{N}$.

In 1 and 2 the existence of the limit is part of the assertion. The notation is
licensed by uniqueness of limits of real sequences ([[lem-limit-unique]]).

Condition 3 is the one that cannot be seen on any single sequence: 1 and 2 are
read off two particular convergent inputs, while the necessity of 3 needs a
sequence built against the matrix, by a gliding hump.

## Facts & Assumptions

**Given:** A summability matrix $c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ with finite row support. For a sequence $(x_k)$ of reals we write $(y_n)$ for its transform, $y_n = \sum_k c_{n,k}x_k$, and $r_n := \sum_k |c_{n,k}|$ for the row absolute sums.

[L1] Summability matrices: finite row support, the transform and its independence of the admissible row bound used, the row sum, the row absolute sum, and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] Finite sums ([[def-finite-sum]]) and their laws: additivity, scaling with $\sum_{k<d}\lambda = d\lambda$, splitting, and monotonicity in the terms ([[lem-finite-sum-laws]]).

[L3] Triangle inequality for finite sums ([[lem-triangle-inequality-finite]]); $|uv| = |u|\,|v|$, $|u| \ge 0$, $\big||u|\big| = |u|$ and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

[L4] Convergence: for every real $\varepsilon > 0$ there is $N$ beyond which the terms are within $\varepsilon$ of the limit, the rational and real formulations agreeing ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]); limits are unique ([[lem-limit-unique]]); a sequence that is eventually $0$ converges to $0$.

[L5] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L6] Algebra of limits for sums and scalar multiples ([[thm-algebra-of-limits]]).

[L7] Archimedean property of $\mathbb{R}$: for every real $z$ there is a natural $n \ge 1$ with $z < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); equivalently, for every real $\varepsilon > 0$ there is a natural $J \ge 1$ with $1/J < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum, which dominates every element of the set ([[def-complete-ordered-field]], [[def-upper-bound]], [[def-bounded-set]]).

[L9] Every nonempty finite set of reals has a maximum, which lies in the set and dominates it ([[lem-finite-set-has-max]], [[def-max-min]]).

[L10] Recursion theorem ([[thm-recursion]]); well-ordering principle ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]); and consecutive comparisons suffice for strict increase, with $k_j \ge j$ for a strictly increasing index map ([[lem-index-map-grows]]).

[L11] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ if and only if $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); canonical naturals are positive and increasing ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Sufficiency.** Assume conditions 1, 2 and 3, let $(x_k)$ converge to $L$, and let $\varepsilon > 0$ be an arbitrary real; fix $M \ge 0$ as in condition 3, and fix $D \ge 0$ with $|x_k - L| \le D$ for every $k$, which exists because a convergent sequence is bounded. [L1, L3, L4, L5, L11, choose]

1.2 Choose $K \in \mathbb{N}$ with $|x_k - L| < \varepsilon\,(3(M+1))^{-1}$ for every $k \ge K$. [L4, L11, choose]

1.3 For every $n$, choosing an admissible bound $R \ge K$ for row $n$, one has $y_n - L = \sum_{k=0}^{R} c_{n,k}(x_k - L) + \big(\textstyle\sum_k c_{n,k} - 1\big)L$, since $\sum_{k=0}^{R} c_{n,k}L = L\sum_k c_{n,k}$. [L1, L2]

1.4 **Necessity.** The remaining steps, apart from 2.1, 2.2, 2.3 and 3.1 which finish the sufficiency argument above, assume instead that $c$ is regular. [L1]

1.5 Suppose, towards a contradiction, that the row absolute sums $(r_n)$ are not bounded above, that is, for every $T \in \mathbb{R}$ there is $n$ with $r_n > T$. [L1, L11, assume-contra]

1.6 For each $n$ the set of admissible bounds for row $n$ is a nonempty subset of $\mathbb{N}$, so it has a least element $\rho(n)$; thus $c_{n,k} = 0$ for every $k > \rho(n)$, and every $R \ge \rho(n)$ is admissible for row $n$. [L1, L10]

2.1 For every $n$: $\big|\sum_{k=0}^{R} c_{n,k}(x_k-L)\big| \le \sum_{k<K}|c_{n,k}|\,|x_k-L| + \sum_{k=K}^{R}|c_{n,k}|\,|x_k-L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon\,(3(M+1))^{-1} r_n \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3$, the last step because $r_n \le M < M+1$. [step 1.1, step 1.2, step 1.3, L2, L3, L11]

2.2 By condition 1 each of the finitely many columns $k < K$ satisfies $c_{n,k} \to 0$, hence $|c_{n,k}| \to 0$ since $\big||c_{n,k}| - 0\big| = |c_{n,k} - 0|$; a sum of finitely many null sequences is null, by induction on the number of summands, so $\sum_{k<K}|c_{n,k}| \to 0$ in $n$ and there is $N_1$ with $\sum_{k<K}|c_{n,k}| < \varepsilon\,(3(D+1))^{-1}$ for every $n \ge N_1$. [step 1.1, step 1.2, L3, L4, L6, L10, L11, choose]

2.3 By condition 2 there is $N_2$ with $\big|\sum_k c_{n,k} - 1\big| < \varepsilon\,(3(|L|+1))^{-1}$ for every $n \ge N_2$, so that $\big|(\sum_k c_{n,k} - 1)L\big| < \varepsilon/3$ for such $n$. [step 1.1, L3, L4, L11, choose]

2.4 **Condition 1 holds.** Fix $k$ and let $e$ be the sequence with $e_k = 1$ and $e_j = 0$ for $j \ne k$; it is eventually $0$, so it converges to $0$, and its transform at row $n$ is $c_{n,k}$ because every other term of the row sum vanishes. Regularity gives $\lim_n c_{n,k} = 0$. [step 1.4, L1, L2, L4]

2.5 **Condition 2 holds.** The constant sequence with value $1$ converges to $1$ and its transform at row $n$ is the row sum $\sum_k c_{n,k}$, so regularity gives $\lim_n \sum_k c_{n,k} = 1$. [step 1.4, L1, L4]

3.1 For every $n$ beyond both $N_1$ and $N_2$: $|y_n - L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3 + \varepsilon/3 < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$; as $\varepsilon$ was arbitrary, $y_n \to L$, and as $(x_k)$ was an arbitrary convergent sequence, $c$ is regular. [step 1.3, step 2.1, step 2.2, step 2.3, L1, L4, L10, L11]

3.2 Each column converges, hence is bounded, so $M_k := \sup\{\,|c_{n,k}| : n \in \mathbb{N}\,\}$ exists in $\mathbb{R}$ for every $k$; putting $B_m := \sum_{k=0}^{m} M_k$ one has $\sum_{k=0}^{m}|c_{n,k}| \le B_m$ for every $n$ and every $m$, and $B_m \ge 0$. [step 2.4, L2, L3, L5, L8, L11]

4.1 Define by recursion $k_0 := 0$, $n_0 := 0$ and, for $j \ge 1$, first $T_j := $ the larger of $\max\{r_n : n \le n_{j-1}\}$ and $B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$, then $n_j := \min\{n : r_n > T_j\}$, which exists by step 1.5 and well-ordering, and then $k_j := $ the larger of $k_{j-1}+1$ and $\rho(n_j)$; then $n_j > n_{j-1}$, because $r_{n_j}$ exceeds every $r_n$ with $n \le n_{j-1}$, and $k_{j-1} < k_j$ with $c_{n_j,k} = 0$ for every $k > k_j$, and $r_{n_j} > B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$. [step 1.5, step 1.6, step 3.2, L9, L10, L11, construct]

5.1 Since $(k_j)$ is strictly increasing with $k_0 = 0$, every $k \ge 1$ lies in exactly one block $k_{j-1} < k \le k_j$ with $j \ge 1$; define $x_0 := 0$ and, for $k$ in the $j$-th block, $x_k := \operatorname{sgn}(c_{n_j,k})\,j^{-1}$, where $\operatorname{sgn}(t) := 1$ for $t \ge 0$ and $\operatorname{sgn}(t) := -1$ for $t < 0$. Then $|x_k| \le 1$ for every $k$, and $x_k \to 0$: given $\varepsilon > 0$, take $J \ge 1$ with $1/J < \varepsilon$, and every $k > k_J$ lies in a block with index $j > J$, so $|x_k| = 1/j < 1/J < \varepsilon$. [step 4.1, L3, L7, L10, L11, construct]

6.1 For every $j \ge 1$: the terms of $y_{n_j}$ with $k > k_j$ vanish, so $y_{n_j} = \sum_{k \le k_{j-1}} c_{n_j,k}x_k + \sum_{k_{j-1} < k \le k_j} c_{n_j,k}x_k$; the second sum equals $j^{-1}\sum_{k_{j-1}<k\le k_j}|c_{n_j,k}| = j^{-1}\big(r_{n_j} - \sum_{k \le k_{j-1}}|c_{n_j,k}|\big) \ge j^{-1}(r_{n_j} - B_{k_{j-1}})$, while the first has absolute value at most $\sum_{k\le k_{j-1}}|c_{n_j,k}| \le B_{k_{j-1}}$; hence $y_{n_j} \ge j^{-1}(r_{n_j} - B_{k_{j-1}}) - B_{k_{j-1}} > j^{-1}\,j\,(j + B_{k_{j-1}}) - B_{k_{j-1}} = j$. [step 3.2, step 4.1, step 5.1, L2, L3, L11]

7.1 But $(x_k)$ converges to $0$, so regularity makes $(y_n)$ converge, hence bounded, so some $S \in \mathbb{R}$ has $|y_n| \le S$ for every $n$; taking $j$ with $j \cdot 1_{\mathbb{R}} > S$, available by the Archimedean property, step 6.1 gives $y_{n_j} > j > S$, a contradiction. [step 1.4, step 5.1, step 6.1, L1, L5, L7, L11]

8.1 The assumption of step 1.5 is therefore untenable and condition 3 holds; with steps 2.4 and 2.5, regularity implies all three conditions. [step 2.4, step 2.5, step 7.1, discharge-contradiction]

9.1 Sufficiency is step 3.1 and necessity is step 8.1, so $c$ is regular exactly when conditions 1, 2 and 3 all hold. [step 3.1, step 8.1] ∎

## Remarks

- **The three conditions are independent**, and each is tested by a different
  input. Condition 1 is what a single nonzero coordinate detects, condition 2
  what the constant sequence detects, and condition 3 is invisible to any fixed
  sequence: for each individual bounded input a matrix with unbounded row
  absolute sums may behave perfectly well, and the failure only appears against
  a sequence whose signs are chosen row by row.
  [[cex-irregular-summability-matrix]] exhibits a matrix satisfying 1 and 2 and
  failing 3, together with a null sequence whose transform diverges.

- **The gliding hump.** The witness of the necessity argument is built in blocks:
  on the $j$-th block its terms have modulus $1/j$, so the sequence tends to
  $0$, and their signs are chosen to align with the entries of one row $n_j$, so
  that on that row the transform picks up almost the whole row absolute sum,
  divided by $j$. Choosing $r_{n_j}$ larger than $j$ times its own head bound
  makes the transform exceed $j$ there. The bound $B_{k_{j-1}}$ on the head is
  available *before* $n_j$ is chosen, because it depends only on the earlier
  block boundary, and that is what keeps the construction from circling.

- **No choice is used.** Every stage of the recursion takes a least element or a
  maximum of a finite set; the row bound $\rho(n)$ is the least admissible one;
  and $M_k$ is a supremum, that is, a definite element of $\mathbb{R}$ rather
  than a selected bound.
