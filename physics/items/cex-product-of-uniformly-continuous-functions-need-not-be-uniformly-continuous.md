---
id: cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous
kind: counterexample
title: "The identity is uniformly continuous on $\\mathbb{R}$ and its square is not, so uniform continuity is not preserved by products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-x-squared-is-not-uniformly-continuous-on-r, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, def-integer-power, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "products do not preserve uniform continuity"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "Rutgers Mathematics 300, Fall 2017 examination solutions"
      url: "https://sites.math.rutgers.edu/~sussmann/exam-311-April-30-2018-answers.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $f, g : A \to \mathbb{R}$ are uniformly continuous on
$A \subseteq \mathbb{R}$ ([[def-uniform-continuity-real]]) then so is their
pointwise product $fg$.

The witness is the simplest possible one: $A := \mathbb{R}$ and
$f = g = \mathrm{id}$, the identity. The identity is uniformly continuous on
$\mathbb{R}$ — one may take $\delta := \varepsilon$ — and its product with
itself is $x \mapsto x^{2}$, which is not uniformly continuous on $\mathbb{R}$
([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

**The contrast with continuity is the point.** Products *do* preserve
continuity, with no hypothesis at all
([[thm-algebra-of-continuous-functions]]). The reason the proof there does not
transfer is visible in the estimate: bounding $|f(x)g(x) - f(x')g(x')|$ requires
a bound on the *values* of $f$ and $g$ near the two points, and for continuity
that bound is local, supplied afresh at each point, whereas uniform continuity
would need one bound valid on the whole domain. On an unbounded domain no such
bound need exist.

## Facts & Assumptions

**Given:** The domain $A := \mathbb{R}$, the identity $\mathrm{id} : \mathbb{R} \to \mathbb{R}$, $\mathrm{id}(x) = x$, and its square $x \mapsto x^{2}$ ([[def-integer-power]]).

[L1] Uniform continuity on $A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|h(x) - h(x')| < \varepsilon$ ([[def-uniform-continuity-real]]).

[L2] $x \mapsto x^{2}$ is continuous on $\mathbb{R}$ and is **not** uniformly continuous on $\mathbb{R}$ ([[cex-x-squared-is-not-uniformly-continuous-on-r]], [[def-continuity-real]]).

[L3] The pointwise product of $\mathrm{id}$ with itself is $x \mapsto x \cdot x = x^{2}$, and products of continuous functions are continuous ([[thm-algebra-of-continuous-functions]], [[def-integer-power]]).

[L4] Absolute value and order: $|u| \ge 0$ and $|u| = 0$ exactly when $u = 0$; the order is total ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity is uniformly continuous on $\mathbb{R}$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; then all $x, x' \in \mathbb{R}$ with $|x - x'| < \delta$ satisfy $|\mathrm{id}(x) - \mathrm{id}(x')| = |x - x'| < \varepsilon$. [L1, L4]

1.2 The pointwise product of the identity with itself is the function $x \mapsto x^{2}$. [L3]

1.3 By [L2] the function $x \mapsto x^{2}$ is not uniformly continuous on $\mathbb{R}$. [L2]

2.1 So $f := \mathrm{id}$ and $g := \mathrm{id}$ are uniformly continuous on $A = \mathbb{R}$ while $fg$ is not: the refuted claim is false. [step 1.1, step 1.2, step 1.3, L1] ∎

## Remarks

- **Where the implication survives.** On a **bounded** domain the product of two uniformly continuous functions *is* uniformly continuous, because each factor is then bounded: a uniformly continuous function on a bounded set is bounded, and the estimate $|fg - f'g'| \le |f|\,|g - g'| + |g'|\,|f - f'|$ closes. Nothing on this page asserts that, and it is not used anywhere here; the witness above shows only that the unrestricted claim fails.

- **Sums and scalar multiples are safe.** If $f$ and $g$ are uniformly continuous on $A$ then so are $f + g$ and $\alpha f$, by the same $\varepsilon/2$ and $\varepsilon/|\alpha|$ arguments that work for continuity, with the $\delta$'s inherited uniformly. It is only the product, and the quotient, that need a bound on values.

- **A second witness on a bounded domain.** $x \mapsto 1/x$ is not uniformly continuous on $(0,1)$ ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]) although the identity is; that failure is a quotient rather than a product, and it shows that boundedness of the domain does not rescue every algebraic operation.
