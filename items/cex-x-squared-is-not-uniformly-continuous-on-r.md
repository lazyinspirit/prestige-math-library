---
id: cex-x-squared-is-not-uniformly-continuous-on-r
kind: counterexample
title: "$x \\mapsto x^2$ is continuous on $\\mathbb{R}$ and not uniformly continuous, the pairs $k+1$ and $k+1+1/(k+1)$ defeating every $\\delta$"
status: published
origin: session
deps: [fs-continuity-implies-uniform-continuity, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-integer-power, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$x^2$ not uniformly continuous on $\\mathbb{R}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : \mathbb{R} \to \mathbb{R}$,
$f(x) := x^{2}$ ([[def-integer-power]]), is uniformly continuous on
$\mathbb{R}$ ([[def-uniform-continuity-real]]).

$f$ is continuous on $\mathbb{R}$ ([[def-continuity-real]]) and $\mathbb{R}$ is
a **closed** subset of itself, so this is the complement of
[[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]: there the
domain was bounded and not closed, here it is closed and not bounded, and
uniform continuity fails in both cases. Neither half of compactness suffices on
its own, and [[thm-heine-cantor-r]] needs both
([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of reals closer than
$\delta$ whose squares differ by more than $2$. The pairs are

$$a_k := k+1, \qquad b_k := k + 1 + \frac{1}{k+1} \qquad (k \in \mathbb{N}),$$

and the shift by $1$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so the reciprocal $1/k$ would be undefined at
the first index.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{2}$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $\mathbb{R}$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in \mathbb{R}$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Polynomial functions are continuous on $\mathbb{R}$; in particular so is $x \mapsto x^{2}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 1 \ge 1 > 0$, so $1/(k+1)$ is defined and positive; the identity $v^{2} - u^{2} = (v-u)(v+u)$; and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[def-ordered-field]], [[lem-of-abs-value]], [[def-integer-power]]).

[L5] $\mathbb{R}$ is closed in itself but not bounded, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $\mathbb{R}$, being a polynomial function. [L2]

1.2 For $k \in \mathbb{N}$ put $a_k := k+1$ and $b_k := (k+1) + 1/(k+1)$, both defined because $k + 1 \ge 1 > 0$ by [L4]. At the first index, $k = 0$, this reads $a_0 = 1$ and $b_0 = 2$. [L4]

2.1 The separation of the arguments is $|a_k - b_k| = 1/(k+1)$. The separation of the values is, by [L4], $$|f(b_k) - f(a_k)| = |b_k - a_k|\,(b_k + a_k) = \frac{1}{k+1}\Bigl(2(k+1) + \frac{1}{k+1}\Bigr) = 2 + \frac{1}{(k+1)^{2}} > 2 .$$ [step 1.2, L4]

3.1 Put $\varepsilon_0 := 2 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$ and take $k := m$; then $k + 1 > m > 0$, so $|a_k - b_k| = 1/(k+1) < 1/m < \delta$ by [L3], while step 2.1 gives $|f(a_k) - f(b_k)| > 2 = \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 2$, and by [L1] the function $f$ is not uniformly continuous on $\mathbb{R}$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **The mechanism is the growing slope, not a singularity.** The increment $b_k - a_k$ is chosen to be the reciprocal of the point, so the product $(b_k - a_k)(b_k + a_k)$ stays above $2$ however small the increment becomes. Nothing blows up: $f$ is a polynomial, bounded on every bounded set, and the failure is entirely about how far out one is allowed to look.

- **On every bounded interval it is uniformly continuous.** On $[-M,M]$ one has $|x^{2} - y^{2}| = |x-y|\,|x+y| \le 2M|x-y|$, so $f$ is Lipschitz there, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6). That is also what [[thm-heine-cantor-r]] gives, since $[-M,M]$ is compact.

- **The consequence for products.** The identity is uniformly continuous on $\mathbb{R}$ and its square is not, so the product of two uniformly continuous functions need not be uniformly continuous; that is [[cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous]], which is this item read once more.
