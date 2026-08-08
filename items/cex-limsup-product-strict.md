---
id: cex-limsup-product-strict
kind: counterexample
title: "$x_k = 1 + (-1)^k$, $y_k = 1 + (-1)^{k+1}$ give $\\limsup(x_k y_k) = 0 < 4$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-limsup-submultiplicative, def-limsup-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-extended-reals, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
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

## Statement refuted

That the submultiplicativity of [[thm-limsup-submultiplicative]] can be improved
to an equality: that for all bounded nonnegative sequences $(x_k)$, $(y_k)$ of
reals,
$$\limsup_{k}(x_k y_k) = \Big(\limsup_{k} x_k\Big)\Big(\limsup_{k} y_k\Big).$$

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]] and the index maps $e, o$; the sequences $x_k := 1 + s_k$ and $y_k := 1 - s_k$, which are the families usually written $1 + (-1)^k$ and $1 + (-1)^{k+1}$; and the tail ranges $T_n$ of [[def-limsup-liminf]].

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$, and $e$, $o$ are strictly increasing with $n_j \ge j$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior in $\overline{\mathbb{R}}$: existence for every sequence, and the least-upper-bound and greatest-lower-bound descriptions of the tail bounds ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-extended-reals]], [[def-sequence]]).

[L3] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Order and field arithmetic: $0 < 1$, so $0 < 2 = 1 + 1$ and $0 < 4 = 2 \cdot 2$; $1 + 1 = 2$, $1 - 1 = 0$, $1 + (-1) = 0$ and $1 - (-1) = 2$; a product with a zero factor is $0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L5] Submultiplicativity: for bounded nonnegative sequences, $\limsup_k(x_k y_k) \le (\limsup_k x_k)(\limsup_k y_k)$, all three quantities being real ([[thm-limsup-submultiplicative]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$. When $s_k = 1$ the pair $(x_k, y_k)$ is $(2, 0)$, and when $s_k = -1$ it is $(0, 2)$. In either case $0 \le x_k \le 2$ and $0 \le y_k \le 2$, so both sequences are bounded and nonnegative, and $x_k y_k = 0$ because one of the two factors is $0$. [given, L1, L3, L4]

1.2 For every $n$ both cases occur at an index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1]

2.1 Hence $T_n(x) = \{0, 2\}$ and $T_n(y) = \{0, 2\}$ for every $n$, each with least upper bound $2$ in $\overline{\mathbb{R}}$, since $2$ bounds both elements and belongs to the set; so $\limsup_k x_k = \limsup_k y_k = 2$. The product sequence is constantly $0$, so $T_n(x y) = \{0\}$ and $\limsup_k (x_k y_k) = 0$. [step 1.1, step 1.2, L2, L4]

3.1 The hypotheses of [L5] are met by step 1.1, and the inequality it gives reads $0 \le 2 \cdot 2 = 4$. Since $0 < 4$, it is strict, so the equality asserted above fails for this pair and the refuted claim is false. [step 2.1, step 1.1, L4, L5] ∎

## Remarks

- **The two sequences vanish at complementary indices.** Wherever $x_k$ attains
  its maximum $2$, its partner $y_k$ is $0$, so the product is $0$ everywhere and
  the two limit superiors are attained along disjoint sets of indices. This is the
  multiplicative form of the phase mismatch behind
  [[cex-limsup-subadditivity-strict]].

- **Nonnegativity and boundedness are satisfied, so the failure is not
  degenerate.** Both hypotheses of [[thm-limsup-submultiplicative]] hold, and the
  right-hand side is an honest product of real numbers; the inequality simply
  cannot be reversed.

- **The gap can be made total.** Here the product sequence is identically zero
  while the bound is $4$, so no fraction of the bound is achieved. Equality does
  hold when one of the two sequences converges, for the same reason as in the
  additive case.
