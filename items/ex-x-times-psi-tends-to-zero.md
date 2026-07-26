---
id: ex-x-times-psi-tends-to-zero
kind: example
title: "$x\\,\\psi(1/x) \\to 0$ as $x \\to 0$, by the squeeze theorem"
status: draft
origin: session
deps: [ex-distance-to-the-integers, thm-squeeze-for-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,\\psi(1/x) \\to 0$"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Let $A := \mathbb{R} \setminus \{0\}$ and define $h : A \to \mathbb{R}$ by

$$h(x) \;:=\; x \cdot \psi(1/x),$$

with $\psi$ as in [[ex-distance-to-the-integers]]. Then $0$ is a limit point of
$A$, the limit of $h$ at $0$ exists, and

$$\lim_{x \to 0} h(x) \;=\; 0 .$$

**The point of the example.** The factor $\psi(1/x)$ has no limit at $0$ at all
([[cex-psi-of-one-over-x-has-no-limit-at-zero]]), so
[[thm-algebra-of-function-limits]] cannot be applied to the product: its product
rule requires both factors to have limits. What is available is that
$\psi(1/x)$ stays inside $[0,1/2]$, and a bounded factor multiplied by one
tending to $0$ is killed. That is exactly what
[[thm-squeeze-for-function-limits]] delivers, and it delivers the *existence* of
the limit, not merely its value.

## Facts & Assumptions

**Given:** The set $A = \mathbb{R} \setminus \{0\}$ and the function $h : A \to \mathbb{R}$, $h(x) = x \cdot \psi(1/x)$, with $\psi$ the function of [[ex-distance-to-the-integers]].

[L1] Range of $\psi$: $0 \le \psi(u) \le 1/2$ for every real $u$ ([[ex-distance-to-the-integers]], claim 2).

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L3] Squeeze theorem: if $f \le g \le k$ on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$, and the limits of $f$ and of $k$ at $c$ exist and are equal to $L$, then the limit of $g$ at $c$ exists and equals $L$ ([[thm-squeeze-for-function-limits]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uv| = |u|\,|v|$; $|-u| = |u|$; $|u| = u$ for $u \ge 0$; and $-|u| \le u \le |u|$ ([[lem-of-abs-value]]).

[L5] Order and field arithmetic: $x \ne 0$ has an inverse $1/x$ ([[def-field]]); $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $t/2 < t$ for $t > 0$ ([[cor-of-one-positive]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]]); multiplying an inequality by a non-negative factor, and adding inequalities ([[lem-of-sign-rules]], [[lem-of-add-order]]); the order is total ([[def-ordered-field]]). Those two sources state their moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide ([[def-ordered-field]]).

[L6] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 $0$ is a limit point of $A = \mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ satisfies $\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L4, L5, L6]

1.2 $h$ is defined on all of $A$, and $|h(x)| \le |x|/2$ there: for $x \in A$ we have $x \ne 0$, so $1/x$ exists, and $|h(x)| = |x| \cdot \psi(1/x)$ by [L4], while $0 \le \psi(1/x) \le 1/2$ by [L1] and $|x| \ge 0$, so multiplying the inequality $\psi(1/x) \le 1/2$ by the non-negative factor $|x|$ gives $|h(x)| \le |x|/2$. [L1, L4, L5]

1.3 The two functions $x \mapsto -|x|/2$ and $x \mapsto |x|/2$ on $A$ each have limit $0$ at $0$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; every $x \in A$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x|/2 - 0 \bigr| = |x|/2 < \varepsilon/2 < \varepsilon$, and likewise $\bigl| -|x|/2 - 0 \bigr| = |x|/2 < \varepsilon$. [L2, L4, L5]

2.1 Hence $-|x|/2 \le h(x) \le |x|/2$ for every $x \in A$, by [L4] applied to $|h(x)| \le |x|/2$. [step 1.2, L4]

3.1 The three functions satisfy $-|x|/2 \le h(x) \le |x|/2$ on all of $A$, in particular on $A \cap N^{*}_{1}(0)$, and the two outer ones have limit $0$ at $0$; since $0$ is a limit point of $A$, the squeeze theorem [L3] gives that the limit of $h$ at $0$ exists and equals $0$. [step 1.1, step 1.3, step 2.1, L3] ∎

## Remarks

- **Where the hypotheses of the squeeze theorem are met.** The order hypothesis holds on all of $A$, so any $\eta > 0$ serves and $\eta = 1$ is taken; the two outer limits are computed by hand in step 1.3; and $0$ is a limit point of $A$ by step 1.1, which is what makes every limit here well posed ([[def-function-limit]]).

- **Nothing about $\psi$ beyond its range is used.** Replacing $\psi$ by any function with values in a fixed bounded set would give the same conclusion by the same three steps. What makes the example worth stating is the contrast with [[cex-psi-of-one-over-x-has-no-limit-at-zero]]: the same oscillating factor, multiplied by $x$ or not, is the difference between a limit existing and not.

- **The classical version of this example** is $x \sin(1/x) \to 0$ as $x \to 0$; see [[rem-classical-oscillator-is-sine-of-one-over-x]] for why this library writes $\psi$ and not $\sin$.
