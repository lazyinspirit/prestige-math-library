---
id: ex-ratio-fails-root-succeeds
kind: example
title: "$a_k = 2^{-k + (-1)^k}$ has $\\liminf a_{k+1}/a_k = 1/8$, $\\limsup a_{k+1}/a_k = 2$ and $\\lim a_k^{1/k} = 1/2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-ratio-and-root-limits-always-agree, thm-ratio-root-inequality, def-limsup-liminf, def-integer-power, def-rational-power, lem-power-laws, lem-alternating-sequence, lem-geometric-sequence-null, thm-squeeze, def-real-limit, def-sequence, def-extended-reals, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
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
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], let
$t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when $s_k = -1$, and put

$$a_k \;:=\; 2^{-k} t_k \qquad (k \in \mathbb{N}),$$

the sequence usually written $a_k = 2^{-k + (-1)^k}$. Writing
$q_k := a_{k+1}/a_k$ for the ratios and $r_k := a_{k+1}^{1/(k+1)}$ for the roots,
which is $a_n^{1/n}$ reindexed by $n = k+1$ as [[thm-ratio-root-inequality]]
requires,

$$\liminf_{k} q_k = \frac{1}{8}, \qquad \limsup_{k} q_k = 2, \qquad \lim_{k} r_k = \frac{1}{2},$$

so also $\liminf_k r_k = \limsup_k r_k = 1/2$. In addition $a_k \to 0$.

**The point.** The ratios oscillate across $1$, taking the values $1/8$ and $2$
alternately, so no statement of the form "the ratios are eventually below some
$\lambda < 1$" is available; the roots, by contrast, converge to $1/2 < 1$. Any
criterion reading the ratios alone is silent here, and one reading the roots is
not. That is the concrete form of the dominance recorded in
[[thm-ratio-root-inequality]].

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$, the auxiliary $t_k \in \{2, 1/2\}$, the sequence $a_k = 2^{-k} t_k$, the ratios $q_k = a_{k+1}/a_k$ and the roots $r_k = a_{k+1}^{1/(k+1)}$, all as in [[fs-ratio-and-root-limits-always-agree]].

[L1] For this sequence: every $a_k$ is positive, $q_k \in \{1/8, 2\}$ with both values occurring at arbitrarily large indices, $\liminf_k q_k = 1/8$, $\limsup_k q_k = 2$, and $r_k \to 1/2$, so $\liminf_k r_k = \limsup_k r_k = 1/2$ ([[fs-ratio-and-root-limits-always-agree]]).

[L2] The chain $\liminf_k q_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q_k$ ([[thm-ratio-root-inequality]]).

[L3] Limit superior and limit inferior in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L4] Powers: $2^{-k} = (1/2)^{k}$ and $t_k \le 2$, so $a_k \le 2 \cdot (1/2)^{k}$; and $a_k > 0$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-of-sign-rules]]).

[L5] Geometric sequences: $|\rho| < 1$ implies $\rho^{k} \to 0$ ([[lem-geometric-sequence-null]]); the squeeze theorem and the scalar rule ([[thm-squeeze]], [[def-real-limit]], [[def-sequence]]).

[L6] Order arithmetic: $0 < 1$, so $1/8 < 1/2 < 1 < 2$ and $1/2 \ne 2$; $|t| = 1$ forces $t = \pm 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The three values in the display are exactly what [L1] records for this sequence, together with $\liminf_k r_k = \limsup_k r_k = 1/2$, which follows from the convergence of $(r_k)$ to $1/2$. [given, L1, L3]

1.2 The sequence is null: $0 < a_k = 2^{-k} t_k \le 2 \cdot (1/2)^{k}$ for every $k$, and $(1/2)^{k} \to 0$ because $|1/2| < 1$, so $2 \cdot (1/2)^{k} \to 0$ and the squeeze gives $a_k \to 0$. [given, L4, L5, L6]

2.1 The ratio quantities differ from one another and from the root quantities: $1/8 < 1/2 < 2$, so $\liminf_k q_k < \liminf_k r_k = \limsup_k r_k < \limsup_k q_k$. In particular the chain [L2] holds here with both outer inequalities strict and the middle one an equality, and the ratios do not determine the roots. [step 1.1, L1, L2, L6]

3.1 So $(a_k)$ is a positive null sequence whose root sequence converges to $1/2 < 1$ while its ratio sequence has $\limsup_k q_k = 2 > 1$ and $\liminf_k q_k = 1/8 < 1$, that is, the ratios oscillate across $1$ while the roots settle strictly below it. [step 1.2, step 2.1, L1, L6] ∎

## Remarks

- **Where the numbers come from.** The exponent $-k + (-1)^k$ changes by
  $-1 + (-1)^{k+1} - (-1)^k = -1 \mp 2$ from one index to the next, giving ratios
  $2^{-3} = 1/8$ and $2^{1} = 2$; the root divides the exponent by the index, so
  the bounded oscillation contributes $2^{\pm 1/(k+1)} \to 1$ and only the linear
  part $-k$ survives, giving $2^{-1} = 1/2$. The full computation is in
  [[fs-ratio-and-root-limits-always-agree]].

- **The same sequence reappears for series.** With these $a_k$ the series
  $\sum_k a_k$ converges, and the root criterion sees it while the ratio criterion
  does not. That use belongs to the series page and is not made here.

- **Strictness of the middle inequality needs a different witness.** Here
  $\liminf_k r_k = \limsup_k r_k$, since the roots converge. A sequence making all
  three inequalities of the chain strict is [[ex-strict-ratio-root-chain]].
