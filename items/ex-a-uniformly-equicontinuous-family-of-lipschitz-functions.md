---
id: ex-a-uniformly-equicontinuous-family-of-lipschitz-functions
kind: example
title: "The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it"
status: draft
origin: session
deps: [def-equicontinuity, def-lipschitz-holder-contraction, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, def-metric-uniform-continuity,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-metric-space,
       def-metric-continuity, thm-metric-regularity-hierarchy, def-abs-value,
       def-topology-of-pointwise-convergence, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
short: "the $1$-Lipschitz maps are uniformly equicontinuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Equicontinuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equicontinuity"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathbb{R}$ carry
its usual metric ([[lem-real-line-is-a-metric-space]]). Put

$$\mathcal{L} \;:=\; \{\, f : X \to \mathbb{R} \;:\; f \text{ is Lipschitz with constant } 1 \,\} \;\subseteq\; \mathbb{R}^{X}$$

([[def-lipschitz-holder-contraction]], [[def-topology-of-pointwise-convergence]]).
Then:

1. $\mathcal{L}$ is **uniformly equicontinuous** ([[def-equicontinuity]]), with
   $\delta := \varepsilon$ serving at every $\varepsilon$;
2. for every nonempty $A \subseteq X$ the distance function
   $\varphi_A(x) := d(x,A)$ ([[def-metric-bounded-diameter]]) belongs to
   $\mathcal{L}$;
3. if $X \ne \varnothing$ then $\mathcal{L}$ is **not** pointwise bounded, since
   it contains every constant function.

So equicontinuity and pointwise boundedness are genuinely independent hypotheses:
this family has the first and not the second, and the next counterexample on this
page has the second and not the first.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, the target $\mathbb{R}$ with the metric $d_{\mathbb{R}}(s,t) = |s-t|$, and the family $\mathcal{L}$ displayed above.

[L1] $f$ is Lipschitz with constant $1$ when $|f(x) - f(x')| \le d(x,x')$ for all $x, x' \in X$ ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).

[L2] A family $\mathcal{F}$ is uniformly equicontinuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(x')| < \varepsilon$ for every $f \in \mathcal{F}$ and all $x,x'$ with $d(x,x') < \delta$; and $\mathcal{F}$ is pointwise bounded when each set $\{\, f(x) : f \in \mathcal{F} \,\}$ is bounded ([[def-equicontinuity]], [[def-metric-uniform-continuity]], [[def-metric-bounded-diameter]]).

[L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).

[L4] A subset $S \subseteq \mathbb{R}$ is bounded exactly when it lies in some ball of $\mathbb{R}$, so an unbounded set of reals lies in no ball ([[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]]).

[L5] A Lipschitz map is uniformly continuous and hence continuous ([[thm-metric-regularity-hierarchy]], claims 2 and 3, [[def-metric-continuity]], [[def-metrizable-space]]).

## Verification

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be real and put $\delta := \varepsilon$; for every $f \in \mathcal{L}$ and all $x, x' \in X$ with $d(x,x') < \delta$ we get $|f(x) - f(x')| \le d(x,x') < \varepsilon$. [L1, L2]

1.2 For nonempty $A \subseteq X$ the function $\varphi_A$ is defined at every point and satisfies $|\varphi_A(x) - \varphi_A(x')| \le d(x,x')$, so it is Lipschitz with constant $1$ and lies in $\mathcal{L}$; this is claim 2. [L1, L3]

2.1 As $\varepsilon$ was arbitrary, step 1.1 is exactly uniform equicontinuity of $\mathcal{L}$, which is claim 1; in particular every member of $\mathcal{L}$ is uniformly continuous and continuous. [step 1.1, L2, L5]

3.1 Every constant function $c : X \to \mathbb{R}$ satisfies $|c(x)-c(x')| = 0 \le d(x,x')$, so lies in $\mathcal{L}$; hence for $X \ne \varnothing$ and any $x \in X$ the set $\{\, f(x) : f \in \mathcal{L} \,\}$ contains every real and so lies in no ball of $\mathbb{R}$, and $\mathcal{L}$ is not pointwise bounded, which is claim 3. [L1, L2, L4] ∎

## Remarks

- **A common constant is what makes the family equicontinuous, not Lipschitzness of each member.** Every member of $\mathcal{L}$ is Lipschitz, but so is every member of $\{\, x \mapsto \iota(k) x : k \in \mathbb{N} \,\}$ on $\mathbb{R}$, and that family is not equicontinuous at any point: the constants grow without bound. Fixing the constant at $1$ is the hypothesis doing the work, exactly as the last remark of [[def-equicontinuity]] records.

- **Claim 2 is why equicontinuity is worth defining at all here.** The distance functions $\varphi_A$ are the standard supply of Lipschitz maps in a metric space, and they are what an Ascoli-type argument on a later page will use; that they all sit in one uniformly equicontinuous family is the reason such arguments do not need any hypothesis on $A$ beyond nonemptiness.

- **Claim 3 is a warning about reading the two hypotheses as one.** Pointwise boundedness is a condition on the *values* and equicontinuity a condition on the *variation*; a family may satisfy either without the other, and the theorem that uses both needs both.
