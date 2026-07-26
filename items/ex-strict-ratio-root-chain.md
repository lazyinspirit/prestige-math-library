---
id: ex-strict-ratio-root-chain
kind: example
title: "A positive sequence making all three inequalities of the ratio-to-root chain strict"
status: draft
origin: session
deps: [thm-ratio-root-inequality, def-limsup-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, lem-geometric-sequence-null, def-integer-power, lem-power-laws, def-rational-power, lem-rational-power-laws, thm-nth-roots-exist, def-extended-reals, def-divergence-to-infinity, def-upper-bound, def-partial-order, def-sequence, def-real-limit, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
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
sources:
  scraped: []
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]] and
define

$$a_k := 2^{-k} \ \text{ when } s_k = 1, \qquad a_k := 3^{-k} \ \text{ when } s_k = -1 .$$

This interleaves the two geometric sequences $2^{-k}$ and $3^{-k}$, taking the
first at even indices and the second at odd ones. With $q_k := a_{k+1}/a_k$ and
$r_k := a_{k+1}^{1/(k+1)}$ as in [[thm-ratio-root-inequality]],

$$\liminf_{k} q_k = 0, \qquad \liminf_{k} r_k = \frac{1}{3}, \qquad \limsup_{k} r_k = \frac{1}{2}, \qquad \limsup_{k} q_k = +\infty,$$

so the chain of that theorem reads

$$0 \;<\; \tfrac{1}{3} \;<\; \tfrac{1}{2} \;<\; +\infty$$

with **all three** inequalities strict.

**Where each comparison lives.** The first two, $0 < 1/3$ and $1/3 < 1/2$, are
comparisons of real numbers and hold in $\mathbb{R}$; they hold in
$\overline{\mathbb{R}}$ as well only because the extended order restricts on
$\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]). The third,
$1/2 < +\infty$, is not a comparison in $\mathbb{R}$ at all: $+\infty$ is not a
real number, and the inequality is the instance of "every real is below the
greatest element" in $\overline{\mathbb{R}}$. So the outer two values of the
chain are of different kinds here, and only the extended line can hold all four
at once.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ with index maps $e, o$ ([[lem-alternating-sequence]]); the sequence $a_k$ defined above; the ratios $q_k = a_{k+1}/a_k$; and the roots $r_k = a_{k+1}^{1/(k+1)}$.

[L1] The alternating sequence: $|s_k| = 1$, $s_{k+1} = -s_k$, $s_{e_j} = 1$, $s_{o_j} = -1$, with $e$, $o$ strictly increasing, so $e_j \ge j$ and $o_j \ge j$; also $o_0 = \sigma(0) \ge 1$ ([[lem-alternating-sequence]], [[lem-index-map-grows]]).

[L2] Limit superior and limit inferior in $\overline{\mathbb{R}}$: existence for every sequence, the tail supremum being the least upper bound of the tail range and the tail infimum its greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L3] The order on $\overline{\mathbb{R}}$ is total, $+\infty$ is greatest, every real is $< +\infty$, and the order restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L4] Powers: $2^{-k} = (1/2)^{k}$ and $3^{-k} = (1/3)^{k}$; $x^{m} x^{m'} = x^{m+m'}$ and $(xy)^{m} = x^{m} y^{m}$ for integer exponents and nonzero bases; $x^{m} > 0$ for $x > 0$; $\big(x^{-n}\big)^{1/n} = x^{-1}$ for $x > 0$ and $n \ge 1$ ([[def-integer-power]], [[lem-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]], [[thm-nth-roots-exist]]).

[L5] Geometric sequences: $|\rho| < 1$ implies $\rho^{k} \to 0$, and $|\rho| > 1$ implies $|\rho|^{k} \to +\infty$ ([[lem-geometric-sequence-null]], [[def-real-limit]], [[def-divergence-to-infinity]]).

[L6] Order arithmetic: $0 < 1$, so $0 < 1/3 < 1/2 < 1 < 2 < 3$; multiplying an inequality by a positive element preserves it; reciprocals reverse the order; the order is total; $|t| = 1$ forces $t = 1$ or $t = -1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] The order on $\mathbb{N}$ is total, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

[L8] The chain $\liminf_k q_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q_k$ ([[thm-ratio-root-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $a_k$ is well defined, and $a_k > 0$ for every $k$ since positive powers of positive bases are positive. [given, L1, L4, L6]

1.2 For every $n \in \mathbb{N}$ there are indices $k, k' \ge n$ with $s_k = 1$ and $s_{k'} = -1$, namely $k = e_n$ and $k' = o_n$; and there are indices $l, l' \ge n$ with $s_{l+1} = 1$ and $s_{l'+1} = -1$, namely $l = e_j - 1$ and $l' = o_j - 1$ for any $j \ge n+1$, these being natural numbers because $e_j \ge j \ge 1$ and $o_j \ge j \ge 1$, and satisfying $l \ge j - 1 \ge n$ and $l' \ge j-1 \ge n$. [given, L1, L7]

1.3 Since $s_{k+1} = -s_k$, the ratios are $q_k = 3^{-(k+1)}/2^{-k} = 3^{-1}(2/3)^{k}$ when $s_k = 1$, and $q_k = 2^{-(k+1)}/3^{-k} = 2^{-1}(3/2)^{k}$ when $s_k = -1$; in both cases $q_k > 0$. [given, L1, L4, L6]

1.4 Likewise the roots are $r_k = \big(2^{-(k+1)}\big)^{1/(k+1)} = 2^{-1}$ when $s_{k+1} = 1$, and $r_k = \big(3^{-(k+1)}\big)^{1/(k+1)} = 3^{-1}$ when $s_{k+1} = -1$. [given, L1, L4]

2.1 By steps 1.2 and 1.4 the tail range of $(r_k)$ at every index $n$ is exactly $\{1/2, 1/3\}$, whose least upper bound is $1/2$ and greatest lower bound $1/3$, since $1/3 < 1/2$ and both belong to the set. Hence $\limsup_k r_k = 1/2$ and $\liminf_k r_k = 1/3$. [step 1.2, step 1.4, L2, L3, L6]

2.2 $\limsup_k q_k = +\infty$. Fix $n$ and a real $M$. Since $|3/2| > 1$, the sequence $(3/2)^{k}$ diverges to $+\infty$, so there is $K$ with $2^{-1}(3/2)^{k} > M$ for all $k \ge K$; taking $j$ at least as large as both $n$ and $K$ and putting $k := o_j$, we get $k \ge j \ge n$ and $s_k = -1$, hence $q_k = 2^{-1}(3/2)^{k} > M$. So no real bounds the tail range of $(q_k)$ above, its least upper bound in $\overline{\mathbb{R}}$ is $+\infty$ for every $n$, and $\limsup_k q_k$ is the greatest lower bound of $\{+\infty\}$, namely $+\infty$. [step 1.2, step 1.3, L2, L3, L5, L6, L7]

2.3 $\liminf_k q_k = 0$. Fix $n$. All $q_k$ are positive, so $0$ is a lower bound of the tail range. If $\ell > 0$ were a lower bound, then, since $|2/3| < 1$ gives $(2/3)^{k} \to 0$ and hence $3^{-1}(2/3)^{k} < \ell$ for all $k \ge K$ for some $K$, taking $j$ at least as large as both $n$ and $K$ and putting $k := e_j$ would give $k \ge j \ge n$, $s_k = 1$ and $q_k = 3^{-1}(2/3)^{k} < \ell$, contradicting that $\ell$ is a lower bound. So every lower bound is $\le 0$ and the greatest lower bound of each tail range is $0$; hence $\liminf_k q_k$ is the least upper bound of $\{0\}$, namely $0$. [step 1.2, step 1.3, L2, L3, L5, L6, L7]

3.1 Collecting the four values, the chain [L8] reads $0 \le 1/3 \le 1/2 \le +\infty$, and each inequality is strict: $0 < 1/3$ and $1/3 < 1/2$ hold in $\mathbb{R}$ and therefore in $\overline{\mathbb{R}}$, while $1/2 < +\infty$ holds because $+\infty$ is the greatest element of $\overline{\mathbb{R}}$ and is distinct from every real. So no two of the four quantities coincide. [step 2.1, step 2.2, step 2.3, L3, L6, L8] ∎

## Remarks

- **Why interleaving two different geometric sequences does it.** Each root is
  determined by the base used at a single index, so the root sequence takes only
  the two values $1/2$ and $1/3$, and its limit superior and limit inferior are
  those two numbers. Each ratio, by contrast, compares two *different* bases at
  consecutive indices, so it contains a factor $(2/3)^{k}$ or $(3/2)^{k}$ and runs
  to $0$ on one subsequence and to $+\infty$ on the other. Widening the gap
  between the two bases widens the outer two values without moving the inner two.

- **Compare [[ex-ratio-fails-root-succeeds]].** There the roots converge, so the
  middle inequality is an equality and only the outer two are strict. Here all
  three are strict, which is the most that
  [[thm-ratio-root-inequality]] permits.

- **Both outer values are attained by the ratios in the extreme sense.** The
  ratio sequence has $\liminf = 0$ and $\limsup = +\infty$, so the ratio data
  place no restriction whatever on the roots beyond the chain, and the chain is
  therefore the sharpest general statement relating the two.
