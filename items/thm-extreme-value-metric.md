---
id: thm-extreme-value-metric
kind: theorem
title: "A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value"
status: published
origin: session
deps: [thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-metric-continuity, def-metric-compactness, def-bounded-set, def-infimum, lem-sup-epsilon, lem-inf-epsilon, def-max-min, def-complete-ordered-field, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, def-metric-ball, def-interval, def-metric-bounded-diameter, def-isometry-and-metric-embedding, def-metric-space]
justified_by: []
forward_refs: [cex-evt-fails-without-compactness]
aliases: [thm-evt-metric]
landmark: true
short: "extreme value theorem (metric)"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $f : X \to \mathbb{R}$ be continuous
([[def-metric-continuity]]), $\mathbb{R}$ carrying its usual metric
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]). Then the
image $f[X]$ is bounded above and below ([[def-bounded-set]]), and it has a
maximum and a minimum ([[def-max-min]]): there are points
$x_{\max}, x_{\min} \in X$ with

$$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$

and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$
([[def-complete-ordered-field]], [[def-infimum]]).

Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the
image is empty and has neither a supremum nor a maximum. No choice principle is
used.

## Facts & Assumptions

**Given:** A nonempty compact metric space $(X,d)$ and a continuous $f : X \to \mathbb{R}$.

[L1] The image of a compact metric space under a continuous map is a compact subset of the codomain ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L2] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]], [[lem-compactness-is-intrinsic]], [[def-metric-bounded-diameter]]).

[L3] In $(\mathbb{R}, d_{\mathbb{R}})$ the ball $B(x_0,\rho)$ is the interval $(x_0-\rho, x_0+\rho)$ ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-interval]]).

[L4] A nonempty subset of $\mathbb{R}$ that is bounded above has a supremum, and one bounded below has an infimum ([[def-complete-ordered-field]], [[def-infimum]], [[def-bounded-set]]).

[L5] For $S$ nonempty and bounded above with supremum $u$: for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s \le u$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] $x$ lies in the closure of $S$ exactly when every ball around $x$ meets $S$, and a closed set contains its closure ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]).

[L7] A subset of a metric space is compact exactly when the corresponding metric subspace is compact, the subspace metric being the restriction ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 $f[X]$ is a compact subset of $(\mathbb{R}, d_{\mathbb{R}})$, and it is nonempty because $X$ is. [L1, L7]

2.1 So $f[X]$ is closed in $\mathbb{R}$ and bounded as a subset of the metric space $(\mathbb{R},d_{\mathbb{R}})$: there are $x_0 \in \mathbb{R}$ and a real $\rho > 0$ with $f[X] \subseteq B(x_0,\rho) = (x_0-\rho,\ x_0+\rho)$. [L2, L3, step 1.1]

3.1 Hence $x_0 + \rho$ is an upper bound and $x_0 - \rho$ a lower bound of $f[X]$, so $f[X]$ is bounded above and below, and being nonempty it has a supremum $u$ and an infimum $\ell$. [L4, step 2.1]

4.1 For every real $\varepsilon > 0$ there is $t \in f[X]$ with $u - \varepsilon < t \le u$, so $|t - u| < \varepsilon$ and $t \in B(u,\varepsilon) \cap f[X]$; therefore every ball around $u$ meets $f[X]$ and $u$ lies in the closure of $f[X]$. [L3, L5, L6, step 3.1]

5.1 Since $f[X]$ is closed, $u \in f[X]$; so $u$ is a member of $f[X]$ bounding it above, that is $u = \max f[X]$, and $u = f(x_{\max})$ for some $x_{\max} \in X$. [L6, step 2.1, step 4.1]

6.1 The same argument with $\ell$ in place of $u$, using the infimum form of step 4.1, gives $\ell \in f[X]$, so $\ell = \min f[X]$ and $\ell = f(x_{\min})$ for some $x_{\min} \in X$. [L5, L6, step 3.1, step 5.1]

7.1 For every $x \in X$ the value $f(x)$ lies in $f[X]$, hence $f(x_{\min}) = \ell \le f(x) \le u = f(x_{\max})$, which is the assertion, with $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$. [L4, step 3.1, step 5.1, step 6.1] ∎

## Remarks

**Compactness is what is used, not boundedness of the domain.** A bounded non-compact domain is not enough: on the interval $(0,1)$ the identity map is continuous and bounded with no greatest value, and $x \mapsto 1/x$ is continuous and unbounded ([[cex-evt-fails-without-compactness]]).

**Why the supremum has to be shown to be attained at all.** $\sup f[X]$ exists as soon as $f[X]$ is nonempty and bounded above, which needs only boundedness; what compactness adds is that $f[X]$ is closed, and a closed set contains the supremum it approaches. Steps 4.1 and 5.1 are exactly that passage, and they are where the theorem is more than the least-upper-bound property.
