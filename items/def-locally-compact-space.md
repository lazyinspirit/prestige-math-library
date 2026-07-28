---
id: def-locally-compact-space
kind: definition
title: "Locally compact topological space: every point has a compact neighbourhood; and what this says in a metric space"
status: published
origin: session
deps: [def-compact-space, def-neighbourhood-top, def-topological-space, def-subspace-topology-top, def-metrizable-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, thm-compactness-agrees-with-metric-compactness, cor-heine-borel-in-the-product-topology, lem-metrics-on-rn]
justified_by: []
aliases: [def-locally-compact]
landmark: true
short: "locally compact space"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **locally
compact** when

> every point of $X$ has a compact neighbourhood:

that is, for every $x \in X$ there is a neighbourhood $N$ of $x$
([[def-neighbourhood-top]]) that is a compact subset of $X$
([[def-compact-space]], [[def-subspace-topology-top]]).

**A neighbourhood need not be open here**, and that is what makes the condition
the weak one it is meant to be: $N$ is required only to contain some open set
containing $x$. Writing "compact **open** neighbourhood" instead would define a
strictly stronger property, satisfied by no space in which a point has no compact
open neighbourhood, $\mathbb{R}$ among them; and requiring the compact set merely
to *contain* $x$ would define a property so weak that every space with a
singleton has it, singletons being compact.

**Every compact space is locally compact**, since $X$ itself is a neighbourhood
of each of its points and is a compact subset of itself. The converse fails, and
$\mathbb{R}^n$ is the standard witness.

**What the condition says in a metric space.** Let $(X,d)$ be a metric space
carrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),
with balls as in [[def-metric-ball]], and let $x \in X$. Then

> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and
> a compact $K \subseteq X$ with $B(x,r) \subseteq K$.

*Both directions are immediate and are discharged here.* If $N$ is a compact
neighbourhood of $x$, fix an open $U$ with $x \in U \subseteq N$; by
[[def-metric-topology]] there is $r > 0$ with $B(x,r) \subseteq U \subseteq N$, so
$K := N$ serves. Conversely, if $B(x,r) \subseteq K$ with $K$ compact, then $K$
contains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of
$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read
metrically and read topologically
([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be
applied with either development's theorems.

**$\mathbb{R}^n$ is locally compact for every $n \ge 1$.** Give $\mathbb{R}^n$
the product topology, which is the metric topology of $d_\infty$
([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For
$p \in \mathbb{R}^n$ the set

$$Q_p \;:=\; \{\, x \in \mathbb{R}^n : d_\infty(x,p) \le 1 \,\}$$

is closed, being the complement of the union of the open balls $B(y, d_\infty(y,p) - 1)$
over the points $y$ with $d_\infty(y,p) > 1$, and it is bounded
([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by
[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,
which contains $p$, so it is a compact neighbourhood of $p$. The space
$\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than
compactness.

## Remarks

**Local compactness is a local condition and compactness is not.** The definition
quantifies over points and asks for something in a neighbourhood of each; nothing
is asserted about covers of the whole space. That is why a locally compact space
may be as large as one likes, and why the two properties separate.

**Where the extra strength is needed.** For an arbitrary space, "every point has
a compact neighbourhood" does not by itself give a *base* of compact
neighbourhoods at each point, nor an open set with compact closure around each
compact set. Both of those do follow once the space is also Hausdorff, and that
is [[thm-locally-compact-hausdorff-basics]]; several authors build the stronger
condition into the definition and then note the agreement in the Hausdorff case.
This library takes the weak definition and proves the strengthening under the
hypothesis that licenses it.

**Local compactness is not hereditary**, unlike metrizability. A subspace of a
locally compact space need not be locally compact, and
[[fs-local-compactness-is-hereditary]] records the failure with a witness; what
does survive is heredity along open and along closed subspaces of a locally
compact **Hausdorff** space ([[thm-locally-compact-hausdorff-basics]]).
