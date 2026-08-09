---
id: fs-continuous-image-of-a-closed-set-is-closed
kind: false-statement
title: "FALSE: the image of a closed subset of $\\mathbb{R}$ under a continuous real function is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, thm-continuity-preimage-characterisation, thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, thm-algebra-of-continuous-functions, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, def-neighbourhood-r, def-interval, def-integer-power, thm-nth-roots-exist, lem-power-monotone, lem-of-inverse-positive, lem-of-abs-value, def-max-min, lem-finite-set-has-max, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: continuous image of a closed set is closed"
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
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$ is
continuous on $A$ ([[def-continuity-real]]) and if $F \subseteq A$ is a closed
subset of $\mathbb{R}$ ([[def-open-and-closed-in-r]]), then the image
$f[F] = \{\, f(x) : x \in F \,\}$ is a closed subset of $\mathbb{R}$.

**Why it is tempting.** Continuity is characterised by the behaviour of
*preimages*: the preimage of every closed set is relatively closed
([[thm-continuity-preimage-characterisation]]). It is easy to transpose that to
images, and images are exactly where the characterisation says nothing.

**What is true.** Compactness, not closedness, is preserved: the image of a
compact set under a continuous function is compact
([[thm-continuous-image-of-a-compact-set-r]]), hence closed and bounded
([[thm-heine-borel-characterisation-r]]). Closedness by itself is preserved by
neither images nor unions of infinitely many closed sets, and boundedness by
itself is not preserved either, since $x \mapsto 1/x$ carries the bounded set
$(0,1)$ onto the unbounded set $(1,\infty)$.

## Facts & Assumptions

**Given:** The domain $A := \mathbb{R}$, the closed set $F := \mathbb{R}$, and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := 1/(1+x^{2})$ ([[def-integer-power]]).

[L1] $\mathbb{R}$ is a closed subset of $\mathbb{R}$, since its complement $\varnothing$ is open ([[def-open-and-closed-in-r]]).

[L2] Algebra of continuous functions: polynomial functions are continuous on $\mathbb{R}$, and if $q$ is continuous and nowhere zero on a set then $1/q$ is continuous there ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Squares and order: $x^{2} \ge 0$ for every real $x$, so $1 + x^{2} \ge 1 > 0$; and $0 < s \le t$ implies $0 < 1/t \le 1/s$ ([[lem-power-monotone]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-integer-power]]).

[L4] Square roots: every real $t \ge 0$ has a unique $s \ge 0$ with $s^{2} = t$ ([[thm-nth-roots-exist]]).

[L5] Closure: $x \in \overline{S}$ exactly when $N_{\varepsilon}(x) \cap S \ne \varnothing$ for every real $\varepsilon > 0$; and $S$ is closed exactly when $S = \overline{S}$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Intervals and minima: $(0,1] = \{\, y : 0 < y \le 1 \,\}$ ([[def-interval]]); the minimum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]); and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

## Refutation

**Proof technique:** direct.

1.1 $F = \mathbb{R}$ is a closed subset of $\mathbb{R}$ and is contained in $A = \mathbb{R}$. [L1]

1.2 $f$ is continuous on $\mathbb{R}$: the denominator $x \mapsto 1 + x^{2}$ is a polynomial function, hence continuous by [L2], and it satisfies $1 + x^{2} \ge 1 > 0$ by [L3], so it never vanishes and $f = 1/(1+x^{2})$ is continuous by [L2]. [L2, L3]

1.3 **$(0,1] \subseteq f[\mathbb{R}]$.** Let $y$ satisfy $0 < y \le 1$ and put $t := 1/y - 1$. By [L3] we have $1/y \ge 1$, so $t \ge 0$, and [L4] supplies a real $s \ge 0$ with $s^{2} = t$. Then $1 + s^{2} = 1/y$ and hence $f(s) = 1/(1+s^{2}) = y$. [L3, L4, L6]

1.4 **$(0,1]$ is not closed.** Let a real $\varepsilon > 0$ be given and put $y := \min\{\varepsilon/2,\ 1\}$, a real with $0 < y \le 1$ by [L6], so $y \in (0,1]$; and $|y - 0| = y \le \varepsilon/2 < \varepsilon$, so $y \in N_{\varepsilon}(0) \cap (0,1]$. Hence $0 \in \overline{(0,1]}$ by [L5], while $0 \notin (0,1]$ because $0 < 0$ is false. So $(0,1] \ne \overline{(0,1]}$ and $(0,1]$ is not closed by [L5]. [L5, L6]

2.1 **$f[\mathbb{R}] \subseteq (0,1]$.** For every real $x$, [L3] gives $1 + x^{2} \ge 1 > 0$ and hence $0 < 1/(1+x^{2}) \le 1$, that is $f(x) \in (0,1]$. [step 1.2, L3, L6]

3.1 So $f[F] = f[\mathbb{R}] = (0,1]$. [step 2.1, step 1.3]

4.1 The set $F = \mathbb{R}$ is closed, $f$ is continuous on $\mathbb{R}$, and $f[F] = (0,1]$ is not closed: the claim is false. [step 1.1, step 1.2, step 3.1, step 1.4] ∎

## Remarks

- **The witness is as tame as possible.** $f$ is a quotient of polynomials, defined on the whole line, bounded, and its image is an interval; the failure is only that the infimum $0$ of the image is approached and not attained, because the points that would attain it have escaped to infinity. Replacing $\mathbb{R}$ by any closed unbounded set on which $f$ has infimum $0$, such as $[0,\infty)$, gives the same conclusion.

- **The image of a closed *bounded* set is closed**, because such a set is compact ([[thm-heine-borel-characterisation-r]]) and compactness is preserved ([[thm-continuous-image-of-a-compact-set-r]]). So the false claim becomes true exactly when the hypothesis is strengthened from closed to compact, which is what [[cor-continuous-image-of-an-interval-is-an-interval]] uses in its second half.

- **Openness is not preserved either**, in the other direction: the image of the open set $\mathbb{R}$ under this same $f$ is $(0,1]$, which is not open, and the image of $\mathbb{R}$ under a constant function is a single point. Continuity constrains preimages, not images; that asymmetry is the content of [[thm-continuity-preimage-characterisation]].
