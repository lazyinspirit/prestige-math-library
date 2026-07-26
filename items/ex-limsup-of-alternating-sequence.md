---
id: ex-limsup-of-alternating-sequence
kind: example
title: "$(-1)^k$ has $\\liminf = -1$ and $\\limsup = 1$, so it does not converge"
status: published
origin: session
deps: [def-limsup-liminf, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], the
sequence usually written $s_k = (-1)^k$, characterised by $s_0 = 1$ and
$s_{k+1} = -s_k$. Then

$$\liminf_{k} s_k = -1, \qquad \limsup_{k} s_k = 1,$$

so the two differ and $(s_k)$ neither converges nor diverges to $\pm\infty$
([[thm-convergence-iff-limsup-equals-liminf]]).

This is the smallest example in which the inequality
$\liminf \le \limsup$ is strict, and it shows exactly what the gap measures: the
sequence keeps returning to two different values, and neither of them can be the
limit because the other keeps interrupting.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]], and the tail ranges $T_n = \{s_k : k \ge n\}$ with extended tail bounds $s\!\sup_n := \sup T_n$ and $s\!\inf_n := \inf T_n$ ([[def-limsup-liminf]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ for every $j$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L3] Limit superior and limit inferior: $\limsup_k z_k = \inf\{\sup T_n(z)\}$ and $\liminf_k z_k = \sup\{\inf T_n(z)\}$, all four kinds of bound existing in $\overline{\mathbb{R}}$ for every sequence, the supremum being the least upper bound and the infimum the greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L4] The order on $\overline{\mathbb{R}}$ is total and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L5] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Order arithmetic: $0 < 1$, hence $-1 < 1$ and $-1 \ne 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] A real sequence converges to $L \in \mathbb{R}$ exactly when $\liminf = \limsup = L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]]).

## Verification

**Proof technique:** direct.

1.1 Every value of the sequence is $1$ or $-1$, since $|s_k| = 1$. [given, L1, L5]

1.2 For every $n \in \mathbb{N}$ both values occur at some index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$, and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1, L2]

2.1 Hence $T_n = \{1, -1\}$ for every $n$. Its least upper bound in $\overline{\mathbb{R}}$ is $1$, since $1$ bounds both elements from above, using $-1 < 1$, and any upper bound is $\ge 1$ because $1 \in T_n$; dually its greatest lower bound is $-1$. [step 1.1, step 1.2, L3, L4, L6]

3.1 Therefore the family of tail suprema is the one-element family $\{1\}$, whose greatest lower bound is $1$, so $\limsup_k s_k = 1$; and the family of tail infima is $\{-1\}$, whose least upper bound is $-1$, so $\liminf_k s_k = -1$. [step 2.1, L3, L4]

4.1 Since $-1 \ne 1$, there is no $L$ with $\liminf_k s_k = \limsup_k s_k = L$, so by [L7] the sequence converges to no real number and diverges to neither $+\infty$ nor $-\infty$. [step 3.1, L6, L7] ∎

## Remarks

- **The two values are exactly the subsequential limits.** By
  [[thm-limsup-is-greatest-subsequential-limit]] and
  [[cor-liminf-is-least-subsequential-limit]] the numbers $1$ and $-1$ are the
  greatest and least elements of $\overline{\operatorname{SL}}(s)$, and since
  every term is $1$ or $-1$ no other value can be a subsequential limit, so
  $\operatorname{SL}(s) = \{-1, 1\}$ exactly.

- **Contrast with [[ex-two-subsequential-limits]].** There the same two
  subsequential limits arise for a sequence none of whose terms equals either of
  them. The limit superior and limit inferior do not care: they are determined by
  the tails, not by whether the values are attained.

- **This sequence is the standard witness for strictness throughout the page.**
  It drives [[fs-limsup-additive]] and [[cex-limsup-subadditivity-strict]], and,
  after an affine change, [[cex-limsup-product-strict]].
