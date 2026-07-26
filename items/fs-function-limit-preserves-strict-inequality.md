---
id: fs-function-limit-preserves-strict-inequality
kind: false-statement
title: "FALSE: $f < g$ near $c$ implies $\\lim f < \\lim g$"
status: draft
origin: session
deps: [lem-function-limit-preserves-order, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: strict order survives"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

**False claim:** let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ have limits at $c$
([[def-function-limit]]), and suppose there is a real $\eta > 0$ with

$$f(x) < g(x) \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \eta .$$

Then $\lim_{x \to c} f(x) < \lim_{x \to c} g(x)$.

**What is true is the non-strict version**,
[[lem-function-limit-preserves-order]]: the hypothesis $f \le g$ near $c$ gives
$\lim f \le \lim g$, and that conclusion cannot be improved even when the
hypothesis is strengthened to a strict inequality at every point.

**Why the strengthening fails.** Strictness at each point is not a uniform
statement: it says $g(x) - f(x) > 0$ for every $x$ near $c$, with no lower bound
on that positive quantity. The limit only sees the *limit* of $g - f$, and a
function that is positive everywhere may have limit $0$. What does survive is the
uniform version: if $g(x) - f(x) \ge \kappa$ near $c$ for a fixed real
$\kappa > 0$, then $\lim g - \lim f \ge \kappa > 0$, by applying
[[lem-function-limit-preserves-order]] to $f + \kappa$ and $g$.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the point $c := 0$, the constant function $f : \mathbb{R} \to \mathbb{R}$ with $f(x) := 0$ for every $x$, and the function $g : \mathbb{R} \to \mathbb{R}$ with $g(x) := |x|$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; and $|u| = u$ for $u \ge 0$, so $\bigl| |x| - 0 \bigr| = |x|$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, so $|u| \ge 0$ together with $|u| \ne 0$ gives $|u| > 0$, and $t < t$ is impossible ([[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 The point $0$ is a limit point of $\mathbb{R}$. [L2]

1.2 The strict hypothesis holds with $\eta := 1$: every $x \in \mathbb{R}$ with $0 < |x - 0| < 1$ has $|x| \ne 0$, hence $|x| > 0 = f(x)$, that is $f(x) < g(x)$. [L3, L4]

2.1 Both limits exist and are equal to $0$. For $f$: $|f(x) - 0| = 0 < \varepsilon$ for every $x$ and every real $\varepsilon > 0$, any $\delta$ serving. For $g$: given a real $\varepsilon > 0$ take $\delta := \varepsilon$; every $x$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x| - 0 \bigr| = |x| < \varepsilon$. [step 1.1, L1, L3]

3.1 So $f(x) < g(x)$ throughout a punctured neighbourhood of $0$ while $\lim_{x \to 0} f(x) = 0 = \lim_{x \to 0} g(x)$; the asserted strict inequality $0 < 0$ is impossible by trichotomy, so the claim is false. [step 1.2, step 2.1, L4] ∎

## Remarks

- **The non-strict conclusion is sharp**, and this witness shows it: the hypothesis is as strong as a pointwise strict inequality can be, and the conclusion still degenerates to equality.

- **The same phenomenon for sequences** is the reason [[lem-limit-preserves-order]] is stated non-strictly; the witness there is a positive null sequence compared with the constant $0$, which is the sequential shadow of the pair above.

- **A common misuse.** From $f < g$ near $c$ one may conclude $\lim f \le \lim g$ and nothing more; in particular one may not conclude that $\lim g > 0$ from $g > 0$ near $c$. To get a strict conclusion one needs either a uniform gap, as noted above, or a separate argument such as [[lem-sign-preservation-near-a-limit]], which works in the opposite direction: from a nonzero limit to a bound on the values.
