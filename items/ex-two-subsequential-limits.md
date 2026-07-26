---
id: ex-two-subsequential-limits
kind: example
title: "The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$"
status: draft
origin: session
deps: [lem-alternating-sequence, def-subsequential-limit, thm-algebra-of-limits, lem-subsequence-inherits-limit, lem-limit-abs, lem-limit-unique, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-abs-value, def-sequence, def-real-limit, def-complete-ordered-field, def-ordered-field]
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Example

For $k \ge 1$ let

$$x_k = (-1)^k\Big(1 + \frac{1}{k}\Big).$$

Then $(x_k)$ is bounded, with $1 < |x_k| \le 2$ at every index, it does not
converge, and its subsequential limit set ([[def-subsequential-limit]]) is
exactly

$$\operatorname{SL}(x) = \{-1, 1\}.$$

The example separates two things that a first reading of Bolzano-Weierstrass can
run together. A bounded sequence must have a subsequential limit; it may have
several; and having several is exactly what stops it converging. Here there are
two, and neither is a value of the sequence, since $|x_k| > 1$ always.

**Indexing and the sign.** Written on $\mathbb{N}$ the sequence is
$u_j := t_j\big(1 + 1/(j+1)\big)$ for $j \in \mathbb{N}$, where $t_j := -s_j$
and $(s_k)$ is the alternating sequence of [[lem-alternating-sequence]]. Since
$s_{\sigma(j)} = -s_j$, the sequence $(t_j)$ is $j \mapsto s_{j+1}$, so
$u_j = x_{j+1}$ and $(u_j)$ is the family above under the substitution
$k = j+1$. The verification uses $(u_j)$.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_j := -s_j$; the sequence $p_j := 1 + 1/(j+1)$, where $j+1$ denotes the canonical natural $(j+1)\cdot 1_{\mathbb{R}}$; and $u_j := t_j\,p_j$ ([[def-sequence]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_i} = 1$ and $s_{o_i} = -1$ for every $i$, and $e$ and $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Absolute value: $|ab| = |a||b|$, $|t| \ge 0$, $|t| = t$ for $t \ge 0$, and $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

[L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L8] Subsequential limits: $L \in \operatorname{SL}(u)$ exactly when some subsequence of $(u_j)$ converges to $L$ ([[def-subsequential-limit]]).

[L9] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 For every $j$: $j + 1 \ge 1$ gives $0 < 1/(j+1) \le 1$, so $1 < p_j \le 2$; and $|t_j| = |-s_j| = |s_j| = 1$. [given, L1, L2, L3, L5]

1.2 The sequence $(p_j)$ converges to $1$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and for $j \ge n$ we have $0 < 1/(j+1) \le 1/n < \varepsilon$, so $|p_j - 1| = 1/(j+1) < \varepsilon$. [given, L2, L3, L4, L5, L7]

2.1 $(u_j)$ is bounded, with $1 < |u_j| = |t_j|\,p_j = p_j \le 2$ at every index. [step 1.1, L5, L7]

2.2 Along the even index map: $t_{e_i} = -s_{e_i} = -1$, so $u_{e_i} = -p_{e_i}$; since $e$ is strictly increasing, $(p_{e_i})_i$ is a subsequence of $(p_j)$ and so converges to $1$, whence $u_{e_i} \to -1$. [step 1.2, L1, L6, L8]

2.3 Along the odd index map: $t_{o_i} = -s_{o_i} = 1$, so $u_{o_i} = p_{o_i} \to 1$ by the same argument. [step 1.2, L1, L6, L8]

3.1 Hence $-1 \in \operatorname{SL}(u)$ and $1 \in \operatorname{SL}(u)$. [step 2.2, step 2.3, L8]

3.2 Conversely, let $L \in \operatorname{SL}(u)$ and fix a strictly increasing $n$ with $u_{n_i} \to L$. Then $|u_{n_i}| \to |L|$; but $|u_{n_i}| = p_{n_i}$ by step 2.1, and $(p_{n_i})_i$ is a subsequence of $(p_j)$, so it converges to $1$. [step 1.2, step 2.1, L6, L8]

4.1 By uniqueness of limits $|L| = 1$, so $L = 1$ or $L = -1$. [step 3.2, L5, L6, L9]

5.1 Combining, $\operatorname{SL}(u) = \{-1, 1\}$; and $(u_j)$ does not converge, since a convergent sequence has exactly one subsequential limit. Bounded by step 2.1, the sequence $(u_j)$, that is $(x_k)$, therefore has the asserted properties. [step 2.1, step 3.1, step 4.1, L6, L8] ∎

## Remarks

- **Where Bolzano-Weierstrass sits.** [[thm-bolzano-weierstrass]] guarantees that
  a bounded sequence has *at least one* subsequential limit; this example computes
  the whole set and finds two. Nothing above uses the theorem, since the two
  subsequential limits are exhibited directly, and that is the honest order of
  business: an existence theorem is not needed once a witness is in hand.

- **The perturbation is what makes the example more than the alternating
  sequence.** With $p_j$ replaced by the constant $1$ the sequence is
  $\pm 1$ alternating and each subsequential limit is attained infinitely often.
  Here $|x_k| > 1$ at every index, so neither subsequential limit is ever a value
  of the sequence. Subsequential limits are limits, not values.

- **The converse direction is where the partition earns its keep.** Step 4.1 rules
  out every other candidate by taking absolute values, which collapses the sign
  and leaves the single null perturbation to handle. The alternative, splitting an
  arbitrary subsequence according to how many of its indices are even, needs the
  disjointness half of [[lem-alternating-sequence]] and is longer.

- **This is the standard example of a bounded divergent sequence with a
  computable $\limsup$ and $\liminf$**, namely $1$ and $-1$. Those notions are
  developed on the next page of the track, and this item is written so that it can
  be cited there without change.
