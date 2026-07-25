---
id: thm-cauchy-schwarz-finite
kind: theorem
title: "The Cauchy-Schwarz inequality for finite sums"
status: published
origin: session
deps: [def-finite-sum, lem-finite-sum-laws, lem-of-square-positive, lem-of-zero-mult, thm-of-square-roots, def-integer-power, lem-of-square-monotone, lem-of-abs-value, def-abs-value, lem-of-sign-rules, lem-of-add-order, lem-of-inverse-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$(\\sum a_k b_k)^2 \\le \\sum a_k^2 \\sum b_k^2$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.35)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$ be
reals, with finite sums as in [[def-finite-sum]]. Then

$$\Big(\sum_{k<n} a_k b_k\Big)^{2} \;\le\; \Big(\sum_{k<n} a_k^{2}\Big)\Big(\sum_{k<n} b_k^{2}\Big),$$

and, in root form ([[thm-of-square-roots]]),

$$\Big|\sum_{k<n} a_k b_k\Big| \;\le\; \sqrt{\sum_{k<n} a_k^{2}} \; \sqrt{\sum_{k<n} b_k^{2}}.$$

Equality holds in the first display if and only if the two lists are
proportional, in the symmetric sense that there is a pair
$(\lambda, \mu) \ne (0,0)$ of reals with $\lambda a_k = \mu b_k$ for every
$k < n$.

**No root is used in the proof of the squared form.** That form is an identity
plus a sign argument in the ordered field, and the root form is only a
restatement of it through the monotonicity of squaring on the nonnegatives
([[lem-of-square-monotone]]); the root enters nowhere but the last step, where
that restatement is made and [[thm-of-square-roots]] is what supplies the
square-root symbol. This matters here, because it makes the squared
inequality independent of the existence theorem for roots.

## Facts & Assumptions

**Given:** A natural $n$ and reals $a_0, \dots, a_{n-1}$, $b_0, \dots, b_{n-1}$. Write $A := \sum_{k<n} a_k^{2}$, $B := \sum_{k<n} a_k b_k$ and $C := \sum_{k<n} b_k^{2}$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, and the fact that a sum of nonnegative terms is nonnegative and vanishes only if every term vanishes.

[L2] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $x^{2} \ge 0$ for every $x$, and $x^{2} = 0$ only for $x = 0$; and a product with a zero factor vanishes, $0 \cdot x = 0$ ([[lem-of-zero-mult]]).

[L3] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$.

[L4] Monotonicity of squaring ([[lem-of-square-monotone]]): for $x, y \ge 0$, $x \le y \iff x^{2} \le y^{2}$; and $|x|^{2} = x^{2}$ with $|x| \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Order arithmetic in an ordered field: adding inequalities ([[lem-of-add-order]]) and scaling an inequality by a positive element ([[lem-of-sign-rules]], claim 4) are both stated there for the STRICT order alone, so the nonstrict uses below are those statements together with the case of equality, settled by trichotomy ([[def-ordered-field]]); the inverse of a positive element is positive ([[lem-of-inverse-positive]], claim 1); and a nonzero factor cancels, since $\lambda x = 0$ with $\lambda \ne 0$ gives $x = \lambda^{-1}(\lambda x) = \lambda^{-1} \cdot 0 = 0$, a product with a zero factor ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 For every $t \in \mathbb{R}$ each term $(a_k t + b_k)^{2}$ is nonnegative, so the sum is nonnegative, and expanding with additivity and scaling gives $0 \le \sum_{k<n}(a_k t + b_k)^{2} = A t^{2} + 2 B t + C$. [L1, L2]

1.2 In particular $A \ge 0$ and $C \ge 0$, being sums of squares. [L1, L2]

1.3 Proportionality forces equality: assume $\lambda a_k = \mu b_k$ for all $k < n$ with $(\lambda, \mu) \ne (0,0)$; if $\mu \ne 0$ then $b_k = c a_k$ with $c = \lambda/\mu$, so $B = cA$ and $C = c^{2}A$ by scaling, whence $B^{2} = c^{2}A^{2} = A\big(c^{2}A\big) = AC$; and if $\mu = 0$ then $\lambda \ne 0$ forces $a_k = 0$ for all $k$, so $A = B = 0$ and both sides vanish. [L1, L5]

2.1 Suppose first $A = 0$: then every term of $\sum_{k<n} a_k^{2}$ vanishes, so $a_k = 0$ for all $k < n$, hence $B = \sum_{k<n} 0 \cdot b_k = 0$ and both sides of the squared inequality are $0$, so it holds with equality; and the pair $(\lambda, \mu) = (1, 0)$ satisfies $\lambda a_k = 0 = \mu b_k$. [step 1.2, L1, L2]

2.2 Suppose instead $A > 0$ and substitute $t = -B/A$ into step 1.1: $0 \le A\frac{B^{2}}{A^{2}} - 2\frac{B^{2}}{A} + C = C - \frac{B^{2}}{A}$, so $\frac{B^{2}}{A} \le C$, and multiplying by $A > 0$ gives $B^{2} \le AC$. [step 1.1, step 1.2, L5]

3.1 The squared inequality therefore holds in both cases, which exhaust the possibilities since $A \ge 0$. [step 2.1, step 2.2, step 1.2]

3.2 Equality forces proportionality: in the case $A = 0$ this was step 2.1; in the case $A > 0$, if $B^{2} = AC$ then putting $t_0 = -B/A$ in step 1.1 gives $\sum_{k<n}(a_k t_0 + b_k)^{2} = A t_0^{2} + 2Bt_0 + C = C - \frac{B^{2}}{A} = 0$, so every term vanishes and $b_k = -t_0 a_k$ for all $k$, and the pair $(\lambda, \mu) = (-t_0, 1) \ne (0,0)$ works. [step 1.1, step 2.1, step 2.2, L1, L2, L5]

4.1 The root form: by step 3.1, $|B|^{2} = B^{2} \le AC = \big(\sqrt{A}\,\sqrt{C}\big)^{2}$, and both $|B|$ and $\sqrt{A}\sqrt{C}$ are nonnegative, so monotonicity of squaring on the nonnegatives gives $|B| \le \sqrt{A}\,\sqrt{C}$; note also that $\sqrt{A}\sqrt{C}$ is the nonnegative square root of $AC$, by uniqueness. [step 3.1, step 1.2, L3, L4] ∎
