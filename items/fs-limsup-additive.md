---
id: fs-limsup-additive
kind: false-statement
title: "FALSE: $\\limsup(x_k + y_k) = \\limsup x_k + \\limsup y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-limsup-subadditive, def-limsup-liminf, def-extended-reals, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-limsup-subadditivity-strict]
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

## Statement

**False claim:** for all sequences $(x_k)$, $(y_k)$ of reals ([[def-sequence]])
whose limit superiors have a defined sum in $\overline{\mathbb{R}}$
([[def-extended-reals]]),

$$\limsup_{k}(x_k + y_k) \;=\; \limsup_{k} x_k + \limsup_{k} y_k .$$

The corresponding statement with $=$ replaced by $\le$ is true and is
[[thm-limsup-subadditive]]. The claim above is what one gets by strengthening
that inequality to an equality, and it fails: the two sides can differ by as much
as the whole oscillation of the sequences, because the two limit superiors may be
attained along different sets of indices while the sum of the sequences never
sees either of them.

The witness is $x_k = (-1)^k$ and $y_k = -(-1)^k$, refuted below; it is recorded
separately as a named counterexample on the companion page.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequences $x_k := s_k$ and $y_k := -s_k$; and the tail ranges and extended tail bounds of [[def-limsup-liminf]].

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ for every $j$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L3] Limit superior: $\limsup_k z_k = \inf\{\sup T_n(z)\}$ with $T_n(z) = \{z_k : k \ge n\}$; all these bounds exist in $\overline{\mathbb{R}}$, $\sup$ being the least upper bound and $\inf$ the greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L4] The order on $\overline{\mathbb{R}}$ is total and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $\pm\infty$ are not real ([[def-extended-reals]]).

[L5] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Order arithmetic: $0 < 1$, so $-1 < 1$ and $0 < 1 + 1 = 2$; in particular $0 \ne 2$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Subadditivity: $\limsup_k(z_k + w_k) \le \limsup_k z_k + \limsup_k w_k$ whenever the right-hand side is defined ([[thm-limsup-subadditive]]).

[L8] The refuted claim: for all sequences whose limit superiors have a defined sum, $\limsup_k(z_k + w_k) = \limsup_k z_k + \limsup_k w_k$.

## Refutation

**Proof technique:** direct.

1.1 The sequences $x_k = s_k$ and $y_k = -s_k$ are sequences of reals, and $x_k + y_k = s_k + (-s_k) = 0$ for every $k$. [given, L1]

1.2 Every value $s_k$ is $1$ or $-1$, since $|s_k| = 1$; and for every $n$ both values occur at an index $\ge n$, since $s_{e_n} = 1$ with $e_n \ge n$ and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1, L2, L5]

2.1 Hence $T_n(x) = \{1, -1\}$ for every $n$. Its least upper bound in $\overline{\mathbb{R}}$ is $1$: the element $1$ bounds both $1$ and $-1$ from above because $-1 < 1$, and any upper bound $u$ satisfies $1 \le u$ because $1 \in T_n(x)$. So $\sup T_n(x) = 1$ for every $n$, and $\limsup_k x_k$ is the greatest lower bound of the one-element family $\{1\}$, namely $1$. [step 1.2, L3, L4, L6]

2.2 The sequence $y_k = -s_k$ takes the value $1$ at every $o_n$ and the value $-1$ at every $e_n$, and takes no other value, so $T_n(y) = \{1, -1\}$ for every $n$ as well, and the same computation gives $\limsup_k y_k = 1$. [step 1.2, L1, L2, L3, L4, L5, L6]

2.3 The sum sequence is constantly $0$, so $T_n(x+y) = \{0\}$, whose least upper bound is $0$, and $\limsup_k(x_k + y_k) = 0$. [step 1.1, L3, L4]

3.1 Both limit superiors are the real number $1$, so their sum is defined and equals $1 + 1 = 2$, and the claim asserts $0 = 2$ for this pair. But $0 < 2$, so $0 \ne 2$ and the claim fails. [step 2.1, step 2.2, step 2.3, L6, L8]

4.1 The claim is therefore false. What survives is the inequality of [L7], which for this pair reads $0 \le 2$ and is strict. [step 3.1, L7, L8] ∎

## Remarks

- **Which half of the equality fails.** Only $\ge$; the inequality $\le$ is a
  theorem ([[thm-limsup-subadditive]]). So the claim is not wrong by accident of
  the witness: the reverse inequality has no proof, and this pair shows it has no
  proof because it is false.

- **The mechanism is a mismatch of index sets.** $\limsup_k x_k = 1$ is achieved
  along the even indices and $\limsup_k y_k = 1$ along the odd ones. The sum can
  only see both at once if some index is large in both sequences simultaneously,
  and here no index is: where $x_k = 1$ one has $y_k = -1$. Equality does hold
  when one of the two sequences converges, because then its limit superior is
  achieved along *every* subsequence.

- **The witness is named on the companion page** as
  [[cex-limsup-subadditivity-strict]], which quotes the computation made here.

- **The defined-sum hypothesis is inherited from [[thm-limsup-subadditive]] and is
  not what fails here.** Both limit superiors in the witness are real, so the
  right-hand side is a perfectly good real number; the equality is false anyway.
