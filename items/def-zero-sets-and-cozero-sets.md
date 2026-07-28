---
id: def-zero-sets-and-cozero-sets
kind: definition
title: "Zero sets and cozero sets of continuous real-valued functions"
status: published
origin: session
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       def-subspace-topology-top, def-g-delta-and-f-sigma-in-a-topological-space,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-zero-set-top, def-cozero-set-top]
landmark: false
short: "zero set, cozero set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Zero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_set"
    - title: "Cozero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cozero_set"
    - title: "L. Gillman and M. Jerison, Rings of Continuous Functions, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Rings_of_Continuous_Functions"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbb{R}$ carry its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$
([[def-continuous-map-top]]) put

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\, x \in X : f(x) = 0 \,\}, \qquad \operatorname{coz}(f) \;:=\; X \setminus Z(f) \;=\; \{\, x \in X : f(x) \ne 0 \,\} .$$

$Z(f)$ is the **zero set** of $f$ and $\operatorname{coz}(f)$ its **cozero set**.
A subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous
$f : X \to \mathbb{R}$, and *a cozero set of $X$* when it is the complement of
one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
same thing as a continuous map $X \to \mathbb{R}$ with all values in $[0,1]$, by
the characteristic property of a map into a subspace recorded in
[[def-subspace-topology-top]]; so nothing below depends on which of the two
targets is written.

**Every zero set is closed and every cozero set is open.** $\{0\}$ is closed in
$\mathbb{R}$: its complement $\mathbb{R} \setminus \{0\}$ is open, since a point
$t \ne 0$ has the bounded open interval $(t - |t|,\ t + |t|)$ around it inside
$\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],
claim 3). The preimage of a closed set under a continuous map is closed
([[thm-continuity-characterisations-top]], clause (c)).

**Every zero set is a $G_\delta$ and every cozero set an $F_\sigma$**
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\iota$ for the
canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$
abbreviates the inverse of $\iota(n+1)$, put

$$V_n \;:=\; f^{-1}\big[\,(-1/(n+1),\ 1/(n+1))\,\big] \qquad (n \in \mathbb{N}).$$

Each $V_n$ is open, being the preimage of an open interval
([[thm-continuity-characterisations-top]], clause (b)). Clearly
$Z(f) \subseteq \bigcap_n V_n$. Conversely, if $f(x) \ne 0$ then
$\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural
$k \ge 1$ with $1/k < \varepsilon$; since $k \ne 0$ it is a successor,
$k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so
$|f(x)| > 1/(n+1)$ and $x \notin V_n$. Hence $Z(f) = \bigcap_{n} V_n$ is a
$G_\delta$, and $\operatorname{coz}(f)$ is an $F_\sigma$ by complementation.

**Both extremes occur.** The constant maps are continuous, since the preimage of
any set under a constant map is $\varnothing$ or $X$
([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and
$\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the
corresponding constant maps.

## Remarks

- **A closed set need not be a zero set, and no witness for that is exhibited
  here.** The zero sets of $X$ are exactly the closed sets that a continuous
  real-valued function can see, and a space may have very few continuous
  real-valued functions: in the indiscrete topology on a set with at least two
  points, every continuous map to $\mathbb{R}$ is constant, because a nonconstant
  one would pull back two disjoint intervals to two disjoint nonempty open sets.
  So the only zero sets there are $\varnothing$ and $X$ — which in that space is
  also all of the closed sets and all of the $G_\delta$ sets, the only open sets
  being $\varnothing$ and $X$. That space therefore illustrates the scarcity of
  continuous functions without separating the two classes; a space with a closed
  set that is not a zero set is not constructed on this page.

- **Where zero sets are used on this page.** They are the vocabulary of complete
  regularity: the defining function separating a point from a closed set $C$
  places $C$ inside a zero set and the point in the corresponding cozero set.
  They also give the sharp form of the metric case, where *every* closed set is a
  zero set.

- **The name.** $\operatorname{coz}$ is the standard notation in the theory of
  rings of continuous functions, where the zero sets of $X$ are the closed sets
  the ring can detect; nothing of that theory is used here.
