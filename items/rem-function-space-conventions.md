---
id: rem-function-space-conventions
kind: remark
title: "Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness"
status: draft
origin: session
deps: [def-topology-of-pointwise-convergence, def-topology-of-uniform-convergence,
       def-topology-of-compact-convergence, def-compact-open-topology,
       def-locally-compact-metric-space, def-evaluation-map, def-metric-compactness,
       def-metrizable-space, def-hausdorff-space, rem-topology-conventions,
       rem-metric-axiom-conventions, rem-sup-conventions,
       lem-uniform-metric-on-a-function-space, lem-sup-metric-is-a-metric,
       def-function-space, def-product-topology, def-equicontinuity,
       thm-compact-open-equals-compact-convergence, def-metric-space,
       def-topological-space, def-metric-ball, thm-the-exponential-law,
       thm-uniform-limit-theorem]
justified_by: []
aliases: []
landmark: false
short: "conventions of this page"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "J. Munkres, Topology, 2nd ed., §§21, 46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

This page carries several standing hypotheses, and a reader who does not know
which are essential and which are bookkeeping will misread its scope. They are
collected here once and then used silently.

**1. "The domain is a metric space" is this page's standing convention, not a
hypothesis every item needs; each Statement carries exactly what its own proof
uses.** Where the domain *must* be metric, that is forced rather than chosen: an
item quantifying over the **compact** subsets of the domain needs a notion of
compactness, and the only one available at this point in the reading order is
[[def-metric-compactness]], which is defined for metric spaces. Compactness for
an arbitrary topological space is not developed anywhere in this library at
present, and nothing here anticipates it. The items with a metric domain for that reason are
[[def-locally-compact-metric-space]],
[[lem-compact-closed-balls-in-a-locally-compact-metric-space]],
[[lem-tube-lemma-for-a-compact-metric-factor]], [[def-compact-open-topology]],
[[def-topology-of-compact-convergence]],
[[thm-compact-open-equals-compact-convergence]],
[[thm-comparison-of-the-three-function-space-topologies]],
[[def-evaluation-map]],
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]],
[[thm-exponential-correspondence-is-continuous]], [[thm-the-exponential-law]] and
[[thm-dini]], together with the three false statements, whose witnesses are metric
spaces. [[def-equicontinuity]] also takes a metric domain, for a different reason:
it writes a distance in the domain.

**Several items on this page need no metric on the domain at all, and say so.**
[[def-topology-of-pointwise-convergence]] and
[[lem-convergence-in-the-pointwise-topology]] are stated for a bare **set** $X$.
[[lem-uniform-metric-on-a-function-space]],
[[def-topology-of-uniform-convergence]],
[[lem-uniform-convergence-in-the-uniform-metric]] and
[[thm-function-space-is-complete-for-a-complete-target]] are stated for a nonempty
**set** $X$. [[thm-uniform-limit-theorem]] is stated for an arbitrary
**topological space** $X$, no distance in the domain being used anywhere in its
proof. Where any of these speaks of $C(X,Y)$ it asks in addition only that $X$
carry a topology, continuity being meaningless otherwise.

Where a purely topological statement is nevertheless made about a metric domain,
it is made through [[def-metrizable-space]]: the metric topology *is* the
topology, so the two vocabularies name one thing.

**2. The target is metric exactly where a distance in it is written.** The
topology of pointwise convergence ([[def-topology-of-pointwise-convergence]]),
the compact-open topology ([[def-compact-open-topology]]), the evaluation map
([[def-evaluation-map]]) and the exponential law ([[thm-the-exponential-law]])
need only the open sets of the target, so there $Y$ is an arbitrary topological
space ([[def-topological-space]]). The uniform metric
([[lem-uniform-metric-on-a-function-space]]), the topology of uniform convergence
([[def-topology-of-uniform-convergence]]), the topology of compact convergence
([[def-topology-of-compact-convergence]]), the comparison theorem, completeness,
Dini's theorem and equicontinuity ([[def-equicontinuity]]) all write a distance
$d(f(x),g(x))$, and there $Y$ is required to be metric. The theorem that the
compact-open and compact-convergence topologies agree
([[thm-compact-open-equals-compact-convergence]]) is exactly the bridge between
the two regimes, and it is stated with both spaces metric because that is where
both topologies are defined.

**3. $X$ is nonempty wherever a supremum over $X$ is taken.** The uniform metric
is a supremum over $X$, and this library has no extended real line and no
convention $\sup \varnothing = -\infty$ ([[rem-sup-conventions]]). So
[[lem-uniform-metric-on-a-function-space]] carries the hypothesis $X \ne \varnothing$
and everything resting on it inherits it. Nothing is lost: for $X = \varnothing$
the set of functions has exactly one element ([[def-product-topology]]) and all
questions on this page are trivial there.

**4. $C(X,Y)$ never carries a default topology.** Four topologies appear on this
page, and every statement names the one it means at the point of use. Where a
subset of $C(X,Y)$ is topologised, it carries the subspace topology of the named
one.

**5. Compact sets carry no separation hypothesis, and the sets $S(K,V)$ are not
spheres.** No Hausdorff assumption is made about the target anywhere on this page
([[def-hausdorff-space]]); where the target is metric it is Hausdorff for free
([[def-metrizable-space]]), and where it is not metric nothing here needs it. And
the notation $S(K,V)$ of [[def-compact-open-topology]] is unrelated to the sphere
$S(x,r)$ of [[def-metric-ball]]; no sphere is written on this page.

**6. Two objects on this page are deliberately new rather than reused, and each
says so where it is defined.**

- [[lem-uniform-metric-on-a-function-space]] is **not** the published supremum
  metric. [[lem-sup-metric-is-a-metric]] is stated for the **bounded real-valued**
  functions on a nonempty set; it cannot carry an arbitrary metric target and it
  cannot carry unbounded functions. The uniform metric here truncates distances at
  $1$ and needs no boundedness hypothesis. The companion page checks that on
  $C([0,1],\mathbb{R})$, where both are defined, they induce the same topology,
  so no second notion of convergence is created.
- [[def-locally-compact-metric-space]] is a metric special case of a notion this
  library does not yet define in general. Its own dictionary remark records the
  agreement and why the agreement is immediate.

**7. $Y^{X}$ here is a bare set of functions with the product topology, not the
vector space of [[def-function-space]].** That item writes $F^{X}$ for the same
underlying set when the target is a field and equips it with pointwise addition
and scalar multiplication. Nothing on this page uses those operations, and the
target is not assumed to carry any algebraic structure at all. Where both are in
play, the algebraic structure is named.

**8. General conventions of the two ambient developments apply unchanged**: the
topological ones of [[rem-topology-conventions]] — *coarser* and *finer* rather
than *weaker* and *stronger*, neighbourhoods not required to be open — and the
metric ones of [[rem-metric-axiom-conventions]] — real-valued metrics only, no
extended metrics. $\mathbb{N}$ contains $0$ and every sequence on this page is
indexed from $0$, so every reciprocal written here is $1/(k+1)$ or $1/(k+2)$ and
never $1/k$.

**What this page does not do.** It does not prove the Ascoli-Arzelà theorem or
the Stone-Weierstrass theorem, both of which belong to later pages;
[[def-equicontinuity]] is placed here only so that the first of those pages has
its vocabulary earlier in the reading order. It does not claim that the
exponential law is a homeomorphism — [[thm-the-exponential-law]] is a bijection of
sets of continuous maps, and its own remark records exactly what the homeomorphism
form would additionally require. And it does not claim that the compact-open
topology is metrizable; the negative statement, with a witness, is on this page.
