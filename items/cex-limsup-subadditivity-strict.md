---
id: cex-limsup-subadditivity-strict
kind: counterexample
title: "$x_k = (-1)^k$, $y_k = (-1)^{k+1}$ give $\\limsup(x_k + y_k) = 0 < 2 = \\limsup x_k + \\limsup y_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-limsup-additive, thm-limsup-subadditive, def-limsup-liminf, lem-alternating-sequence, def-extended-reals, def-sequence, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement refuted

That the subadditivity of [[thm-limsup-subadditive]] can be improved to an
equality: that for all sequences $(x_k)$, $(y_k)$ of reals whose limit superiors
have a defined sum,
$\limsup_k(x_k + y_k) = \limsup_k x_k + \limsup_k y_k$. The claim is recorded and
refuted as [[fs-limsup-additive]]; this item is the named witness.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]]; the sequences $x_k := s_k$ and $y_k := -s_k$, which are the families usually written $(-1)^k$ and $(-1)^{k+1}$.

[L1] For this pair of sequences: $x_k + y_k = 0$ for every $k$, $\limsup_k x_k = 1$, $\limsup_k y_k = 1$ and $\limsup_k(x_k + y_k) = 0$ ([[fs-limsup-additive]]).

[L2] Subadditivity: $\limsup_k(x_k + y_k) \le \limsup_k x_k + \limsup_k y_k$ whenever the right-hand side is defined ([[thm-limsup-subadditive]]).

[L3] Limit superior in $\overline{\mathbb{R}}$, and the fact that a sum of two real numbers is the field sum ([[def-limsup-liminf]], [[def-extended-reals]], [[def-sequence]]).

[L4] Order arithmetic: $0 < 1$, hence $0 < 1 + 1 = 2$ and $0 \ne 2$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The two sequences $x_k = s_k$ and $y_k = -s_k$ are sequences of reals whose termwise sum is constantly $0$, and their limit superiors are both the real number $1$. [given, L1, L3]

1.2 Both limit superiors being real, their sum is defined in $\overline{\mathbb{R}}$ and equals the field sum $1 + 1 = 2$. [given, L1, L3, L4]

2.1 The limit superior of the sum sequence is $0$, while the sum of the limit superiors is $2$, and $0 < 2$; so the inequality of [L2] holds here and is strict, and the equality asserted by the refuted claim fails. [step 1.1, step 1.2, L1, L2, L4] ∎

## Remarks

- **The gap is as large as the oscillation.** Each sequence oscillates between
  $-1$ and $1$, and the two oscillations are exactly out of phase, so the sum
  never sees either peak. Replacing $y$ by a sequence in phase with $x$, for
  instance $y = x$, restores equality; the failure is a statement about the
  relative phase, not about the sizes involved.

- **Both hypotheses of [[thm-limsup-subadditive]] hold here.** The two limit
  superiors are real, so their sum is defined, and no boundedness is needed for
  that theorem at all. The counterexample therefore refutes the equality on the
  theorem's own terms, not by exploiting a degenerate case.

- **The dual statement fails in the dual way.** For the same pair,
  $\liminf_k x_k = \liminf_k y_k = -1$ while $\liminf_k(x_k + y_k) = 0$, so the
  $\liminf$ inequality $\liminf_k(x_k+y_k) \ge \liminf_k x_k + \liminf_k y_k$ of
  [[thm-limsup-subadditive]] is also strict here, reading $0 \ge -2$.
