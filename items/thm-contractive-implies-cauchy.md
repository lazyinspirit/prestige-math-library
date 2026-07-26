---
id: thm-contractive-implies-cauchy
kind: theorem
title: "Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$"
status: draft
origin: session
deps: [def-contractive-sequence, thm-cauchy-criterion-via-lub, lem-geometric-sequence-null, def-integer-power, lem-power-laws, lem-power-monotone, lem-power-difference-factorisation, lem-triangle-inequality-finite, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-abs, lem-limit-preserves-order, lem-limit-of-tail, lem-of-inverse-positive, lem-of-abs-value, prop-of-multiply-inequalities, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-contractive-sequence-fixed-point, cex-strictly-decreasing-gaps-no-limit]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5 (Thm 3.5.8)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a contractive sequence of reals with contraction constant $c$,
so $0 < c < 1$ and $|x_{k+2} - x_{k+1}| \le c\,|x_{k+1} - x_k|$ for every
$k \in \mathbb{N}$ ([[def-contractive-sequence]]). Then:

1. **Geometric decay of the gaps.** For every $k \ge 1$,
   $$|x_{k+1} - x_k| \;\le\; c^{\,k-1}\,|x_2 - x_1| .$$
2. **Convergence.** $(x_k)$ is Cauchy ([[def-real-limit]]) and therefore
   converges to some $x \in \mathbb{R}$ ([[thm-cauchy-criterion-via-lub]]).
3. **Error bound.** For every $k \ge 1$,
   $$|x - x_k| \;\le\; \frac{c^{\,k-1}\,|x_2 - x_1|}{1 - c} .$$

**The restriction $k \ge 1$ in claim 3 is a hypothesis, not a convention.** The
displayed bound is false at $k = 0$, even though $c^{-1}$ is defined
([[def-integer-power]]). Take $c = 1/2$ and the sequence
$x_0 = 0$, $x_k = 1$ for all $k \ge 1$: it is contractive with that $c$, its
limit is $x = 1$, the right-hand side at $k = 0$ is
$c^{-1}\,|x_2 - x_1|/(1-c) = 2 \cdot 0 / (1/2) = 0$, and the left-hand side is
$|x - x_0| = 1$. The classical statement of this theorem is written for
sequences indexed from $1$, where the question does not arise; this library
indexes from $0$ ([[def-sequence]]), so the hypothesis is stated.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and a real $c$ with $0 < c < 1$ such that $|x_{k+2} - x_{k+1}| \le c\,|x_{k+1} - x_k|$ for every $k \in \mathbb{N}$; the abbreviations $D := |x_2 - x_1| \ge 0$ and $A := D/(1-c)$, which is defined and $\ge 0$ since $1 - c > 0$.

[L1] Contractivity, with a constant independent of the index ([[def-contractive-sequence]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Integer powers: $a^0 = 1$, $a^{k+1} = a^k a$; and the law $a^{m+n} = a^m a^n$ ([[def-integer-power]], [[lem-power-laws]]).

[L4] Powers and order: $a \ge 0$ gives $a^n \ge 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L5] Absolute value: $|t| \ge 0$, $|t| = |-t|$, and $|t| \le u$ exactly when $-u \le t \le u$ ([[lem-of-abs-value]]).

[L6] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le e \le f$ give $ae \le bf$ ([[prop-of-multiply-inequalities]]).

[L7] Reciprocals of positives are positive ([[lem-of-inverse-positive]]).

[L8] Finite sums, their notation $\sum_{i<n}$, and their laws: additivity, scaling, monotonicity, and telescoping $\sum_{i<n}(t_{i+1} - t_i) = t_n - t_0$ for any sequence $(t_i)$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Triangle inequality for finite sums: $\big|\sum_{i<n} a_i\big| \le \sum_{i<n} |a_i|$ ([[lem-triangle-inequality-finite]]).

[L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).

[L11] For $0 < c < 1$ the sequence $(c^{\,j})$ converges to $0$ ([[lem-geometric-sequence-null]]).

[L12] Cauchy condition and convergence; it suffices to test a real $\varepsilon > 0$, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L13] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L14] Limits: a sequence and each of its tails converge to the same limit ([[lem-limit-of-tail]]); the algebra of limits ([[thm-algebra-of-limits]]); compatibility of the absolute value with limits ([[lem-limit-abs]]); and preservation of non-strict inequalities in the limit ([[lem-limit-preserves-order]]).

[L15] The order on $\mathbb{N}$ is total, so any two indices are comparable ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case of claim 1, at $k = 1$: $|x_2 - x_1| \le c^{\,0}|x_2 - x_1| = D$, since $c^{\,0} = 1$. [given, L3, base]

1.2 Inductive hypothesis: fix $j \in \mathbb{N}$ and assume $|x_{j+2} - x_{j+1}| \le c^{\,j} D$. [ih]

1.3 By [L10], $(1-c)\sum_{i<n} c^{\,i} = 1 - c^{\,n} \le 1$, since $c^{\,n} \ge 0$; dividing by $1 - c > 0$ gives $\sum_{i<n} c^{\,i} \le 1/(1-c)$. [given, L4, L6, L7, L10]

1.4 Let $\varepsilon > 0$ be an arbitrary real and put $\delta := \varepsilon/(2(A+1)) > 0$, which is defined since $A + 1 > 0$. By [L11] fix $J \in \mathbb{N}$ with $c^{\,j} < \delta$ for every $j \ge J$. [given, L4, L7, L11, L12, choose]

2.1 Successor step: contractivity at the index $j+1$ gives $|x_{j+3} - x_{j+2}| \le c\,|x_{j+2} - x_{j+1}| \le c \cdot c^{\,j} D = c^{\,j+1} D$, the middle inequality by the inductive hypothesis multiplied by $c > 0$. [step 1.2, L1, L3, L6]

3.1 By the induction principle, $|x_{j+2} - x_{j+1}| \le c^{\,j} D$ for every $j \in \mathbb{N}$; writing $k = j+1$ this is claim 1: $|x_{k+1} - x_k| \le c^{\,k-1} D$ for every $k \ge 1$. [step 1.1, step 2.1, L2]

4.1 Fix $k \ge 1$ and $n \in \mathbb{N}$, and put $t_i := x_{k+i}$. Telescoping gives $x_{k+n} - x_k = t_n - t_0 = \sum_{i<n}(t_{i+1} - t_i)$, so $|x_{k+n} - x_k| \le \sum_{i<n}|x_{k+i+1} - x_{k+i}|$. [step 3.1, L8, L9]

4.2 Each summand obeys claim 1 at the index $k+i \ge 1$: $|x_{k+i+1} - x_{k+i}| \le c^{\,k+i-1} D = c^{\,k-1} c^{\,i} D$. [step 3.1, L3]

5.1 Summing the bound of step 4.2 over $i < n$, by monotonicity and scaling of finite sums, $|x_{k+n} - x_k| \le c^{\,k-1} D \sum_{i<n} c^{\,i}$. [step 4.1, step 4.2, L8]

6.1 Combining steps 5.1 and 1.3: for every $k \ge 1$ and every $n \in \mathbb{N}$, $|x_{k+n} - x_k| \le c^{\,k-1} D/(1-c) = c^{\,k-1} A$. [step 5.1, step 1.3, L4, L6]

7.1 For all indices $l, k \ge J + 1$: by comparability one of them is the smaller, say $k$, and writing $l = k + n$ step 6.1 gives $|x_l - x_k| \le c^{\,k-1} A \le c^{\,k-1}(A+1) \le \delta(A+1) = \varepsilon/2 < \varepsilon$, using $k - 1 \ge J$; the case $l < k$ follows since $|x_l - x_k| = |x_k - x_l|$. [step 6.1, step 1.4, L5, L6, L15]

8.1 The real $\varepsilon > 0$ was arbitrary and the index $J+1$ was produced from it, so $(x_k)$ is Cauchy, and therefore converges to some $x \in \mathbb{R}$: this is claim 2. [step 7.1, L12, L13]

9.1 Fix $k \ge 1$. The $k$-th tail $n \mapsto x_{k+n}$ converges to $x$, so as $n$ ranges over $\mathbb{N}$ the sequence $n \mapsto x_{k+n} - x_k$ converges to $x - x_k$, so $n \mapsto |x_{k+n} - x_k|$ converges to $|x - x_k|$; the constant sequence with value $c^{\,k-1}A$ converges to $c^{\,k-1}A$, and step 6.1 compares the two at every $n$. [step 6.1, step 8.1, L14]

10.1 Preservation of non-strict inequalities in the limit therefore gives $|x - x_k| \le c^{\,k-1}A = c^{\,k-1}|x_2 - x_1|/(1-c)$ for every $k \ge 1$, which is claim 3; claims 1, 2 and 3 are thus all established. [step 3.1, step 8.1, step 9.1, L14, discharge-induction] ∎

## Remarks

- **The bound is computable before the limit is known.** Claim 3 needs only
  $c$ and the single number $|x_2 - x_1|$, so it is an a priori estimate of the
  error of the $k$-th term: this is what makes contractive iteration a numerical
  method and not merely an existence theorem.
  [[ex-contractive-sequence-fixed-point]] carries out the arithmetic on a
  concrete iteration.

- **Where completeness is spent.** Only in step 10.1, through
  [[thm-cauchy-criterion-via-lub]]. Claims 1 and 3 are inequalities that hold in
  any ordered field once the limit exists; it is the existence of the limit that
  needs the least-upper-bound property, and the theorem is exactly the shape in
  which the Cauchy criterion is usually applied, namely to prove convergence
  without exhibiting the limit.

- **A smaller constant is a better theorem.** Any $c' \in [c, 1)$ is also a
  contraction constant ([[def-contractive-sequence]]), and the bound degrades as
  $c'$ grows, tending to uselessness as $c' \to 1$. That degeneration is not an
  artefact: for gaps that merely shrink, with no uniform $c < 1$, the conclusion
  fails outright ([[cex-strictly-decreasing-gaps-no-limit]]).

- **On the index range.** Claims 1 and 3 both start at $k = 1$, and both are
  genuinely false at $k = 0$, on the single witness given in the statement: there
  $|x_1 - x_0| = 1$ while $c^{-1}|x_2 - x_1| = 0$, so claim 1 fails at $k = 0$
  for the same reason claim 3 does. Nothing at all is asserted about the step
  from $x_0$ to $x_1$, and nothing can be: the contractive hypothesis constrains
  every gap by its predecessor, and the first gap has no predecessor to be
  constrained by.
