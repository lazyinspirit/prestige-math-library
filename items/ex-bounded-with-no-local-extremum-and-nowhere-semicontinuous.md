---
id: ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous
kind: example
title: "A bounded function on $\\mathbb{R}$ with no local maximum and no local minimum at any point, upper semicontinuous at no point and lower semicontinuous at no point: compose the Hamel coefficient with a strictly increasing injection of $\\mathbb{R}$ into $(0,1)$"
status: published
origin: session
deps: [ex-hamel-basis-additive-function, lem-hamel-basis-exists, def-additive-function, lem-additive-is-q-linear, def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-max-min, lem-rat-embeds-dense, def-bounded-set, def-interval, lem-q-and-irrationals-dense-r, def-continuity-real, def-complete-ordered-field, def-neighbourhood-r, lem-of-abs-value, def-axiom-of-choice, thm-zorn]
justified_by: []
aliases: []
landmark: false
short: "no local extremum, nowhere semicontinuous"
proof_strategy: constructive
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]], [[thm-zorn]]), which
enters through [[lem-hamel-basis-exists]]. Let
$f = \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$ be the Hamel coefficient
map of [[ex-hamel-basis-additive-function]], whose values are exactly the
rationals and each of whose nonempty level sets is dense in $\mathbb{R}$. Define

$$\varphi : \mathbb{R} \to \mathbb{R}, \qquad \varphi(u) \;:=\; \frac{1}{2} + \frac{u}{2\,(1 + |u|)}, \qquad g := \varphi \circ f .$$

Say that $x$ is a **local maximum point** of $g$ when there is a real
$\delta > 0$ with $g(y) \le g(x)$ for every $y \in N_\delta(x)$
([[def-neighbourhood-r]]), and a **local minimum point** when there is a real
$\delta > 0$ with $g(y) \ge g(x)$ for every $y \in N_\delta(x)$. Then:

1. $0 < g(x) < 1$ for every real $x$, so $g$ is bounded
   ([[def-bounded-set]]);
2. $g$ has **no** local maximum point and **no** local minimum point;
3. $g$ is upper semicontinuous at no point of $\mathbb{R}$ and lower
   semicontinuous at no point ([[def-semicontinuity]]); in particular it is
   continuous at no point ([[def-continuity-real]]).

**Why $\varphi$ and not a bijection onto $\mathbb{Q} \cap (0,1)$.** All that is
needed of $\varphi$ is that it be strictly increasing, take values in $(0,1)$,
and send rationals to rationals; the explicit formula above does all three and
costs no countability argument.

## Facts & Assumptions

**Given:** The Axiom of Choice; the Hamel coefficient map $f$; the map $\varphi$ above; and $g = \varphi \circ f$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is an additive $f : \mathbb{R} \to \mathbb{R}$ whose range is exactly the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals and each of whose level sets $f^{-1}(\{r\})$, $r \in \mathbb{Q}$, is dense in $\mathbb{R}$ ([[ex-hamel-basis-additive-function]], claims 1 and 4, [[lem-hamel-basis-exists]], [[def-additive-function]], [[lem-additive-is-q-linear]], [[lem-rat-embeds-dense]]).

[L2] A set $S \subseteq \mathbb{R}$ is dense exactly when $S \cap N_\delta(x) \ne \varnothing$ for every real $x$ and every real $\delta > 0$ ([[lem-q-and-irrationals-dense-r]], [[def-neighbourhood-r]]).

[L3] $g$ is upper semicontinuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $g(y) < g(c) + \varepsilon$ for every $y \in N_\delta(c)$, lower semicontinuous at $c$ with $g(y) > g(c) - \varepsilon$, and continuous at $c$ exactly when it is both ([[def-semicontinuity]], [[def-continuity-real]], [[thm-semicontinuity-level-set-characterisation]]).

[L4] $\mathbb{R}$ is an ordered field, and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

[L5] $m$ is a maximum of a set when it belongs to it and dominates it, and dually for a minimum ([[def-max-min]]); $N_\delta(x) = (x-\delta, x+\delta)$ is a nondegenerate interval ([[def-neighbourhood-r]], [[def-interval]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice and fix $f$ as in [L1]; define $\varphi(u) := 1/2 + u/(2(1+|u|))$ and $g := \varphi \circ f$. [A1, L1, construct]

2.1 $\varphi$ is strictly increasing. For $0 \le u_{1} < u_{2}$: $u_{1}(1+u_{2}) < u_{2}(1+u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1+u_{1})(1+u_{2})$ gives $u_{1}/(1+u_{1}) < u_{2}/(1+u_{2})$. For $u_{1} < u_{2} \le 0$: $u_{1}(1-u_{2}) < u_{2}(1-u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1-u_{1})(1-u_{2})$ gives $u_{1}/(1-u_{1}) < u_{2}/(1-u_{2})$. For $u_{1} < 0 \le u_{2}$ the first quantity is negative and the second is nonnegative. In every case $u_{1}/(1+|u_{1}|) < u_{2}/(1+|u_{2}|)$, and $\varphi$ is an increasing function of that quantity. [step 1.1, L4]

3.1 $0 < \varphi(u) < 1$ for every real $u$, since $|u|/(1+|u|) < 1$ gives $-1 < u/(1+|u|) < 1$; and $\varphi$ takes rationals to rationals, since $|u|$ and $1 + |u| \ne 0$ are rational when $u$ is. Claim 1 follows: $0 < g(x) < 1$ for every real $x$. [step 1.1, step 2.1, L4]

3.2 Let $x$ be real and put $r := f(x)$, a rational, and $v := g(x) = \varphi(r)$. The reals $r - 1$ and $r + 1$ are rational, and $\varphi(r-1) < v < \varphi(r+1)$ by step 2.1. [step 1.1, step 2.1, L1]

4.1 With $r$ and $v$ as in step 3.2, every real $\delta > 0$ gives points $y_{-}, y_{+} \in N_\delta(x)$ with $g(y_{-}) = \varphi(r-1) < v$ and $g(y_{+}) = \varphi(r+1) > v$: the level sets $f^{-1}(\{r-1\})$ and $f^{-1}(\{r+1\})$ are dense in $\mathbb{R}$, hence meet $N_\delta(x)$. [step 3.2, L1, L2]

5.1 Claim 2: $x$ is not a local maximum point, since every $N_\delta(x)$ contains $y_{+}$ with $g(y_{+}) > g(x)$; and $x$ is not a local minimum point, since every $N_\delta(x)$ contains $y_{-}$ with $g(y_{-}) < g(x)$. As $x$ was arbitrary, $g$ has no local maximum point and no local minimum point. [step 4.1, L5]

5.2 Claim 3: put $\varepsilon_{+} := \varphi(r+1) - v > 0$. For every real $\delta > 0$ the point $y_{+}$ of step 4.1 lies in $N_\delta(x)$ and satisfies $g(y_{+}) = v + \varepsilon_{+}$, so the inequality $g(y_{+}) < g(x) + \varepsilon_{+}$ fails; hence no $\delta$ witnesses upper semicontinuity at $x$ for $\varepsilon_{+}$, and $g$ is upper semicontinuous at no point. [step 3.2, step 4.1, L3]

6.1 Symmetrically, with $\varepsilon_{-} := v - \varphi(r-1) > 0$ the point $y_{-}$ satisfies $g(y_{-}) = v - \varepsilon_{-}$, so $g(y_{-}) > g(x) - \varepsilon_{-}$ fails and $g$ is lower semicontinuous at no point; being continuous at a point would require both, so $g$ is continuous at no point. [step 3.2, step 4.1, step 5.2, L3]

7.1 Claims 1, 2 and 3 hold for the function $g$ constructed in step 1.1. [step 3.1, step 5.1, step 5.2, step 6.1, discharge-construct] ∎

## Remarks

- **Boundedness is what makes the example surprising.** A function with no local
  extremum anywhere is easy to arrange if it is allowed to be unbounded; here
  every value lies strictly inside $(0,1)$ and yet no point is even a local
  extremum, because arbitrarily close to any point the function takes both a
  strictly larger and a strictly smaller value.

- **Everything comes from the level sets.** The only property of $f$ used after
  step 1.1 is that its nonempty level sets are dense and indexed by the
  rationals ([[ex-hamel-basis-additive-function]]); $\varphi$ contributes only
  the bounding into $(0,1)$ and the preservation of strict order. Any function
  with countably many dense level sets, relabelled by a strictly increasing
  injection into a bounded interval, would do as well.

- **The additivity of $f$ is not used here.** It was used to prove that the level
  sets are dense, on the companion item; once that is known, $g$ has nothing to
  do with Cauchy's equation. In particular $g$ is not additive: it takes values
  in $(0,1)$ and $g(0) \ne 0$.
