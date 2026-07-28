---
id: thm-uniform-limit-theorem
kind: theorem
title: "A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric"
status: draft
origin: session
deps: [def-topology-of-uniform-convergence, lem-uniform-convergence-in-the-uniform-metric,
       lem-uniform-metric-on-a-function-space, def-continuous-map-top,
       thm-continuity-characterisations-top, def-neighbourhood-top, def-metric-ball,
       def-metric-topology, def-metrizable-space, def-metric-convergence,
       thm-metric-closure-characterisation, def-metric-bounded-diameter,
       lem-inf-epsilon, def-infimum, def-metric-space, def-topological-space,
       lem-bounded-remetrisation, def-max-min, lem-finite-set-has-max,
       def-topology-of-pointwise-convergence, lem-metric-ball-neighbourhood-base,
       thm-metric-sequential-closure]
justified_by: []
aliases: [thm-uniform-limit-of-continuous-is-continuous]
landmark: true
short: "uniform limit theorem"
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
    - title: "Uniform limit theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_limit_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,\mathcal{T}_X)$ be a topological space ([[def-topological-space]]) and
let $(Y,d)$ be a metric space ([[def-metric-space]]) carrying its metric
topology. Then:

1. **The $\varepsilon/3$ criterion.** Let $f : X \to Y$ be a function such that
   for every real $\varepsilon > 0$ there is a **continuous** $g : X \to Y$ with
   $$d\big(f(x), g(x)\big) < \varepsilon \qquad \text{for every } x \in X .$$
   Then $f$ is continuous ([[def-continuous-map-top]]).
2. **Uniform limit theorem.** If $X$ is nonempty, $(f_k)$ is a sequence of
   continuous maps $X \to Y$ and $(f_k)$ converges uniformly to $f$
   ([[def-topology-of-uniform-convergence]]), then $f$ is continuous.
3. **Closedness.** If $X$ is nonempty, $C(X,Y)$ is a closed subset of
   $(Y^{X}, \bar\rho)$, the uniform metric being that of
   [[lem-uniform-metric-on-a-function-space]].

**The domain is an arbitrary topological space**, not a metric space: nothing in
the argument uses a distance in $X$. Only the target carries a metric, and it
carries one because the hypothesis of claim 1 is a statement about distances in
$Y$.

**No choice principle is used, and claim 3 in particular is choice free.** The
proof of claim 3 instantiates *one* continuous $g$ for each $\varepsilon$ and uses
it immediately, rather than manufacturing a sequence of them; a sequential
argument through [[thm-metric-sequential-closure]] would spend the Axiom of
Countable Choice, and that route is deliberately not taken.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T}_X)$, a metric space $(Y,d)$ with its metric topology, and where claims 2 and 3 apply, a nonempty $X$ and the uniform metric $\bar\rho$ on $Y^{X}$ with $\bar d = \min\{d,1\}$.

[L1] $h : X \to Y$ is continuous at $a$ exactly when for every open $V \subseteq Y$ with $h(a) \in V$ there is an open $U \subseteq X$ with $a \in U$ and $h[U] \subseteq V$; and $h$ is continuous exactly when it is continuous at every point ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-neighbourhood-top]]).

[L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).

[L3] The triangle inequality (M3) and symmetry (M2) of $d$ ([[def-metric-space]]).

[L4] Uniform convergence of $(f_k)$ to $f$ gives, for each real $\varepsilon > 0$, an index $K$ with $d(f_k(x),f(x)) < \varepsilon$ for every $x \in X$ and every $k \ge K$ ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]]).

[L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).

[L6] If $\inf S = 0$ and $\eta > 0$ is real, then some $s \in S$ satisfies $s < \eta$ ([[lem-inf-epsilon]], [[def-infimum]]).

[L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Two elements of $Y^{X}$ are equal exactly when they agree at every point of $X$, and $Y^{X}$ is the set of all functions $X \to Y$ ([[def-topology-of-pointwise-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume the displayed hypothesis, fix $a \in X$, and let $V \subseteq Y$ be open with $f(a) \in V$; fix a real $\varepsilon > 0$ with $B(f(a),\varepsilon) \subseteq V$. [assume-hyp, L1, L2, choose]

1.2 For claim 3, if $C(X,Y) = \varnothing$ then it is closed and there is nothing to prove; so assume $C(X,Y) \ne \varnothing$ and let $f$ lie in the closure of $C(X,Y)$ in $(Y^{X},\bar\rho)$, so that $\bar\rho(f, C(X,Y)) = 0$. [L5, assume-hyp]

2.1 Apply the hypothesis at $\varepsilon/3$: fix a continuous $g : X \to Y$ with $d(f(x),g(x)) < \varepsilon/3$ for every $x \in X$. [step 1.1, choose]

2.2 Let $\varepsilon_1 > 0$ be real and put $\eta := \min\{\varepsilon_1, 1\}/2$, a real with $0 < \eta \le 1/2 < 1$ and $\eta < \varepsilon_1$; since the infimum of the distances from $f$ to the members of $C(X,Y)$ is $0 < \eta$, there is $g \in C(X,Y)$ with $\bar\rho(f,g) < \eta$. [step 1.2, L6, L7, choose]

3.1 $B(g(a),\varepsilon/3)$ is open in $Y$ and contains $g(a)$, so continuity of $g$ at $a$ gives an open $U \subseteq X$ with $a \in U$ and $g[U] \subseteq B(g(a),\varepsilon/3)$. [step 2.1, L1, L2, choose]

3.2 For every $x \in X$: $\bar d(f(x),g(x)) \le \bar\rho(f,g) < \eta < 1$, hence $d(f(x),g(x)) = \bar d(f(x),g(x)) < \eta < \varepsilon_1$. [step 2.2, L7]

4.1 For every $x \in U$: $d(f(x),f(a)) \le d(f(x),g(x)) + d(g(x),g(a)) + d(g(a),f(a)) < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$, so $f[U] \subseteq B(f(a),\varepsilon) \subseteq V$. [step 1.1, step 2.1, step 3.1, L3]

5.1 As $V$ was an arbitrary open set containing $f(a)$ and $a$ an arbitrary point of $X$, step 4.1 makes $f$ continuous at every point, hence continuous; this is claim 1. [step 1.1, step 4.1, L1]

6.1 For claim 2, let $\varepsilon > 0$ be real; uniform convergence gives an index $K$ with $d(f_k(x),f(x)) < \varepsilon$ for every $x \in X$ and every $k \ge K$, so the continuous map $g := f_K$ witnesses the hypothesis of claim 1 at $\varepsilon$; hence $f$ is continuous by claim 1. [step 5.1, L4]

6.2 Steps 2.2 and 3.2 supply, for each real $\varepsilon_1 > 0$, a continuous $g$ with $d(f(x),g(x)) < \varepsilon_1$ for every $x \in X$, which is the hypothesis of claim 1; so $f$ is continuous, that is $f \in C(X,Y)$. [step 5.1, step 2.2, step 3.2, L8]

7.1 Hence the closure of $C(X,Y)$ is contained in $C(X,Y)$, and containing it always, it equals it; so $C(X,Y)$ is closed in $(Y^{X},\bar\rho)$, which is claim 3. [step 1.2, step 6.2, L5] ∎

## Remarks

- **The three thirds are the three legs of the estimate**, and each is a different approximation: $f$ to $g$ at $x$, $g$ at $x$ to $g$ at $a$, and $g$ to $f$ at $a$. Only the middle one uses continuity, and only the outer two use that the approximation of $f$ by $g$ is uniform. If the approximation were merely pointwise, the third leg would still hold but the first would need an $\varepsilon$ depending on $x$, and the argument collapses; the companion page exhibits exactly that collapse.

- **Claim 3 is what makes $C(X,Y)$ a complete space when $Y$ is complete**, by the next item, and it is the reason the uniform topology and not the pointwise one is the natural home for limits of continuous functions. In the pointwise topology $C(X,Y)$ is in general **not** closed, and the companion page carries a witness on $[0,1]$.

- **Why the choice-free route was taken.** The usual proof of claim 3 shows that $C(X,Y)$ is sequentially closed and then invokes [[thm-metric-sequential-closure]] to conclude closedness; that item's forward direction spends the Axiom of Countable Choice, since it manufactures a sequence out of adherence. The argument above instead works with the distance to the set directly and instantiates a single $g$ at each $\varepsilon$, so claim 3 is a theorem of ZF.
