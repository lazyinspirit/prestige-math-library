---
id: def-locally-connected
kind: definition
title: "Locally connected and locally path-connected spaces: a neighbourhood base of open connected, respectively open path-connected, sets at every point"
status: published
origin: session
deps: [def-connected-space, def-path-connected, def-neighbourhood-top,
       def-topological-space, def-subspace-topology-top,
       def-connected-component-and-quasicomponent, def-standard-topologies]
justified_by: []
aliases: []
landmark: true
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
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §25"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$. Subsets carry the subspace topology
([[def-subspace-topology-top]]); connectedness is [[def-connected-space]] and
path-connectedness is [[def-path-connected]].

- $X$ is **locally connected at $x$** when for every open $U$ with $x \in U$
  there is an **open connected** $V$ with $x \in V \subseteq U$.
- $X$ is **locally connected** when it is locally connected at every point.
- $X$ is **locally path-connected at $x$** when for every open $U$ with
  $x \in U$ there is an **open path-connected** $V$ with $x \in V \subseteq U$;
  and **locally path-connected** when this holds at every point.

**The neighbourhood-base reading.** $X$ is locally connected at $x$ exactly when
the open connected sets containing $x$ form a neighbourhood base at $x$
([[def-neighbourhood-top]]). Indeed a neighbourhood $N$ of $x$ contains an open
$U$ with $x \in U \subseteq N$, and an open connected $V$ with
$x \in V \subseteq U$ is then a member of that family inside $N$; conversely a
base member inside an open $U \ni x$ is exactly what the displayed condition
asks. The same sentence with "path-connected" in place of "connected" gives the
reading for local path-connectedness. Recall that in this library a neighbourhood
need not be open ([[def-neighbourhood-top]]), which is why "open" is written out
in both clauses above.

**Openness in the clauses is not removable and is a live fork.** Asking only for
a *connected neighbourhood* inside every open $U \ni x$ — with no openness
demanded of the connected set — defines an a priori weaker condition at a single
point, called *connectedness im kleinen at $x$* in the literature. This library
takes the definition above, with openness, and **no statement here asserts that
the two agree**, at a point or globally.

**Local and global connectedness are independent conditions, and neither clause
above mentions the other.** A two-point discrete space
([[def-standard-topologies]]) is locally connected, every singleton being open
and connected, and is not connected, the two singletons separating it. So local
connectedness does not imply connectedness. The reverse implication is not
asserted here either.

**Both notions are properties of the space, not of an ambient pair.** "A locally
connected subset $A \subseteq X$" means that the space $A$ with its subspace
topology is locally connected, and the open sets tested are then the sets open in
$A$.

## Remarks

- **Why the notion is stated at a point and then quantified.** Almost every
  application needs the pointwise form: a space can fail to be locally connected
  at a single point and be perfectly well behaved everywhere else, and naming the
  bad point is what a counterexample does. Quantifying afterwards costs one line
  and keeps both forms available.

- **The relation to components.** The condition says that arbitrarily small open
  connected sets exist around each point. Since the component of $x$ inside an
  open $U$ is the largest connected subset of $U$ containing $x$
  ([[def-connected-component-and-quasicomponent]]), the definition is asking that
  those components be large enough to be neighbourhoods — which is exactly the
  reformulation proved as the next item on this page.

- **Local path-connectedness is strictly the stronger-looking of the two, and
  nothing here compares them.** Every path-connected space is connected, so an
  open path-connected set is an open connected set and local path-connectedness
  implies local connectedness once that implication is available; it is proved
  later on this page and is not assumed in this definition.
