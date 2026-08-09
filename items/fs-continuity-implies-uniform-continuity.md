---
id: fs-continuity-implies-uniform-continuity
kind: false-statement
title: "FALSE: every continuous real function is uniformly continuous on its domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, thm-heine-cantor-r, thm-algebra-of-continuous-functions, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field, def-integer-power]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: false
short: "FALSE: continuity implies uniform continuity"
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
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$ is
continuous on $A$ ([[def-continuity-real]]), then $f$ is uniformly continuous on
$A$ ([[def-uniform-continuity-real]]).

**Why it is tempting.** Continuity says that for every $\varepsilon > 0$ and
every point $c$ there is a $\delta > 0$ that works at $c$. It is easy to read
that as producing "a $\delta$", forgetting that the $\delta$ was produced after
$c$ was fixed and may depend on it. Uniform continuity demands one $\delta$
before any point is named, and the two quantifier orders are genuinely
different.

**What is true.** On a **compact** domain the implication does hold, and that is
[[thm-heine-cantor-r]]; the metric-space form is [[thm-heine-cantor-metric]].
Compactness is not a convenience there: for every noncompact bounded
$E \subseteq \mathbb{R}$ there is a continuous function on $E$ that is not
uniformly continuous, which is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]. The witness
below is the smallest familiar instance of that theorem.

## Facts & Assumptions

**Given:** The domain $A := (0,1) = \{\, x \in \mathbb{R} : 0 < x < 1 \,\}$ ([[def-interval]]) and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Natural numbers are identified with their canonical images in $\mathbb{R}$.

[L1] Continuity on $A$ and uniform continuity on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]]; in particular, $f$ fails to be uniformly continuous on $A$ as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$.

[L2] Algebra of continuous functions: the identity is continuous on $A$, and if $q$ is continuous on $A$ and does not vanish there then $1/q$ is continuous on $A$ ([[thm-algebra-of-continuous-functions]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $k \ge 1$ with $1/k < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: for a natural $k$, $0 < 1/(k+3) < 1/(k+2) < 1$, so both lie in $(0,1)$; the product $(k+2)(k+3) \ge k+2 \ge 2$; and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[def-ordered-field]], [[lem-of-abs-value]], [[def-integer-power]]).

## Refutation

**Proof technique:** direct.

1.1 $f$ is continuous on $A$. The identity is continuous on $A$ by [L2] and does not vanish on $A$, since $x > 0$ for $x \in (0,1)$; so $f(x) = 1/x$ is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $(0,1) = A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. Note that $\mathbb{N}$ contains $0$, so the smallest pair is $x_0 = 1/2$ and $y_0 = 1/3$, and no index $k$ produces a point outside $A$. [L4]

2.1 The gap between the arguments is $|x_k - y_k| = 1/(k+2) - 1/(k+3) = 1/\bigl((k+2)(k+3)\bigr) \le 1/(k+2)$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]. The gap between the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Take $\varepsilon_0 := 1$ and let a real $\delta > 0$ be given. By [L3] there is a natural $m \ge 1$ with $1/m < \delta$; put $k := m$, so $k + 2 > m > 0$ and hence $1/(k+2) < 1/m < \delta$ by [L3]. Then $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no $\delta > 0$ serves $\varepsilon_0 = 1$: by [L1] the function $f$ is continuous on $A$ and not uniformly continuous on $A$, and the claim is false. [step 1.1, step 3.1, L1] ∎

## Remarks

- **The domain is bounded, and that is the point.** $(0,1)$ is bounded but not closed, hence not compact ([[thm-heine-borel-characterisation-r]]), so [[thm-heine-cantor-r]] does not apply. The obstruction sits at the missing endpoint $0$: the pairs above crowd towards it, their separation shrinking while the values they take diverge.

- **Unboundedness produces the same failure for a different reason.** $x \mapsto x^{2}$ is continuous on the closed set $\mathbb{R}$ and not uniformly continuous there, the pairs $k+1$ and $k+1+1/(k+1)$ defeating every $\delta$; that witness is [[cex-x-squared-is-not-uniformly-continuous-on-r]] on the companion page, and it shows that closedness alone is no more sufficient than boundedness alone.

- **The witness is worked out in full on the companion page.** [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] repeats the computation above with the estimates spelled out and records what it witnesses about the regularity hierarchy of [[lem-real-and-metric-notions-agree]].
