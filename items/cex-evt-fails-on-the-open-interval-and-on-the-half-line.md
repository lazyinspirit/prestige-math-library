---
id: cex-evt-fails-on-the-open-interval-and-on-the-half-line
kind: counterexample
title: "The identity on $(0,1)$ is bounded with no greatest value, and on $[0,\\infty)$ it is continuous and unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-evt-holds-on-every-bounded-domain, thm-extreme-value-r, thm-compactness-is-necessary-for-evt-and-uniform-continuity, thm-heine-borel-characterisation-r, def-open-cover-r, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-open-and-closed-in-r, thm-of-archimedean, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "EVT fails on $(0,1)$ and on $[0,\\infty)$"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "University of Edinburgh, The Extreme Value Theorem"
      url: "https://uoe-school-of-mathematics.github.io/MATH08081_IMA/Ch4.S9.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for the conclusions of the extreme value theorem it is enough
that the domain be bounded, or that it be closed; that is, a continuous real
function on a bounded domain attains a greatest value, and a continuous real
function on a closed domain is bounded ([[def-continuity-real]],
[[def-bounded-set]], [[def-max-min]]).

Both halves are false, and one function refutes both:

- on $E_1 := (0,1)$, which is **bounded and not closed**, the identity is
  continuous and bounded, $\sup$ of its image exists and equals $1$, and no
  point of $E_1$ attains it;
- on $E_2 := [0,\infty)$, which is **closed and not bounded**, the identity is
  continuous and unbounded.

Neither $E_1$ nor $E_2$ is compact ([[thm-heine-borel-characterisation-r]]), so
[[thm-extreme-value-r]] does not apply to either, and both are instances of
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]: the first is
its bounded-not-closed case, the second its unbounded case. Together they show
that neither half of "closed and bounded" can be dropped.

This item is the worked witness for
[[fs-evt-holds-on-every-bounded-domain]], which refutes the first half alone.

## Facts & Assumptions

**Given:** The sets $E_1 := (0,1)$ and $E_2 := [0,\infty)$ ([[def-interval]]) and the identity $\mathrm{id}(x) = x$ on each of them.

[L1] The identity is continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] A greatest value of $h$ on $E$ is a point $p \in E$ with $h(x) \le h(p)$ for every $x \in E$; a set is bounded when it lies between two reals ([[def-max-min]], [[def-bounded-set]]).

[L3] Suprema: a nonempty set bounded above has a least upper bound, and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]]).

[L4] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n$ ([[thm-of-archimedean]]).

[L5] Ordered-field arithmetic: for $0 < x < 1$ one has $x < (x+1)/2 < 1$; the maximum of a two-element set of reals exists and is one of them; and $n \ge 1 > 0$ for a natural $n \ge 1$ ([[def-ordered-field]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L6] $(0,1)$ is bounded and not closed, $[0,\infty)$ is closed and not bounded, and neither is compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity is continuous on $E_1$ and on $E_2$ by [L1], and $E_1$ is bounded while $E_2$ is closed, by [L6]. [L1, L6]

1.2 **On $E_1$ the identity is bounded.** Every $x \in (0,1)$ satisfies $0 \le x \le 1$, so the image $\mathrm{id}[E_1] = E_1$ lies between $0$ and $1$ and is bounded by [L2]. [L5, L2]

1.3 **On $E_2$ the identity is unbounded.** Let a real $M$ be given. By [L4] there is a natural $n \ge 1$ with $M < n$, and $n \ge 0$ so $n \in [0,\infty) = E_2$ with $\mathrm{id}(n) = n > M$. So no real bounds $\mathrm{id}[E_2]$ above, and by [L2] the identity is unbounded on $E_2$. [L2, L4, L5]

2.1 **On $E_1$ there is no greatest value.** Let $p \in E_1$, so $0 < p < 1$. By [L5] the point $p' := (p+1)/2$ satisfies $p < p' < 1$ and $p' > 0$, so $p' \in E_1$ and $\mathrm{id}(p') = p' > p = \mathrm{id}(p)$. Hence no $p \in E_1$ satisfies $\mathrm{id}(x) \le \mathrm{id}(p)$ for every $x \in E_1$, and by [L2] the identity attains no greatest value on $E_1$. [step 1.2, L2, L5]

3.1 **The supremum exists and equals $1$.** By step 1.2 and [L3] the nonempty set $\mathrm{id}[E_1] = (0,1)$ has a least upper bound $u$, and $u \le 1$ since $1$ bounds it above. For a real $\varepsilon > 0$ the point $x := \max\{1/2,\ 1 - \varepsilon/2\}$ lies in $(0,1)$ by [L5] and satisfies $x > 1 - \varepsilon$, so no real below $1$ bounds $(0,1)$ above; hence $u = 1$. By step 2.1 no point of $E_1$ has value $1$, so the supremum is not attained. [step 1.2, step 2.1, L3, L5]

4.1 So on the bounded set $E_1$ a continuous function attains no greatest value, and on the closed set $E_2$ a continuous function is unbounded: both halves of the refuted claim are false, and by [L6] neither domain is compact, so no conflict with [[thm-extreme-value-r]] arises. [step 1.1, step 2.1, step 3.1, step 1.3, L6] ∎

## Remarks

- **The two failures are of different kinds.** On $(0,1)$ the function is bounded and the supremum exists as a real number; what is missing is a point at which it is attained, and adding the endpoint $1$ restores it. On $[0,\infty)$ there is no supremum at all, and no endpoint can be added. That is the distinction [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] draws between its bounded-not-closed and unbounded cases.

- **The domains are exactly the two minimal ways to fail compactness.** By [[thm-heine-borel-characterisation-r]] a subset of $\mathbb{R}$ fails compactness by failing closedness or by failing boundedness; $E_1$ fails only the first, $E_2$ only the second, and each already kills the theorem.

- **The same domains kill uniform continuity too**, but with different witnesses: on $(0,1)$ it is $1/x$ ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]) and on an unbounded closed set it is $x^{2}$ ([[cex-x-squared-is-not-uniformly-continuous-on-r]]). The identity itself is uniformly continuous on both, so a single witness cannot serve every conclusion at once.
