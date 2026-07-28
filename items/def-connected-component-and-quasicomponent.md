---
id: def-connected-component-and-quasicomponent
kind: definition
title: "Connected components, quasicomponents, and totally disconnected spaces"
status: published
origin: session
deps: [def-connected-space, thm-unions-of-connected-sets, def-topological-space,
       def-subspace-topology-top, def-standard-topologies]
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Totally disconnected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_disconnected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §25"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subsets carrying the subspace topology ([[def-subspace-topology-top]]) and
connectedness as in [[def-connected-space]]. Let $x \in X$.

- The **connected component of $x$** is
  $$C(x) \;:=\; \bigcup \{\, A \subseteq X : x \in A \text{ and } A \text{ is connected} \,\} .$$
  A **component of $X$** is a set of the form $C(x)$ for some $x \in X$.
- The **quasicomponent of $x$** is
  $$Q(x) \;:=\; \bigcap \{\, K \subseteq X : x \in K \text{ and } K \text{ is clopen in } X \,\} .$$
  A **quasicomponent of $X$** is a set of the form $Q(x)$.
- $X$ is **totally disconnected** when $C(x) = \{x\}$ for every $x \in X$.

**Both are well posed, and the obligations are discharged here.** The family
united in the definition of $C(x)$ is nonempty, since the singleton $\{x\}$ is
connected: a singleton admits no separation, a separation requiring two disjoint
nonempty pieces. Every member of that family contains $x$, so
[[thm-unions-of-connected-sets]] claim 1 applies and **$C(x)$ is connected**;
being a union of every connected set through $x$, it contains each of them, so
$C(x)$ is *the largest connected subset of $X$ containing $x$*. The family
intersected in the definition of $Q(x)$ is nonempty as well, since $X$ itself is
clopen ([[def-topological-space]]), so the intersection is a set; it contains
$x$, every member doing so.

**Both notions are defined by a property of $X$, not of an ambient space.** A
component of a subspace $S \subseteq X$ means a component of the space $S$, and
is written $C_S(y)$ when the space needs naming. The same holds for
quasicomponents.

**Totally disconnected, spelled out.** $X$ is totally disconnected exactly when
every connected subset of $X$ has at most one point: if some connected $A$ had
two points $x \ne y$ then $A \subseteq C(x)$ would give $C(x) \ne \{x\}$, and
conversely if $C(x) \ne \{x\}$ then $C(x)$ is a connected set with at least two
points. The empty space is totally disconnected, having no point to test.

**A discrete space is totally disconnected.** Let $X$ carry the discrete topology
([[def-standard-topologies]]) and let $A \subseteq X$ have two distinct points
$x, y$. Every subset of $A$ is open in $A$, so $(\{x\}, A \setminus \{x\})$ is a
pair of open, disjoint, nonempty sets covering $A$, that is a separation. Hence
no connected subset has two points and every component is a singleton. The
converse fails: total disconnectedness does not force the topology to be
discrete.

## Remarks

- **Why two notions and not one.** The component of $x$ is built from the
  *connected* sets through $x$ and the quasicomponent from the *clopen* sets
  containing $x$. One is an inner approximation, assembled from below out of
  pieces known to be connected; the other is an outer approximation, cut down
  from above by every partition of $X$ into two clopen pieces. They always
  satisfy $C(x) \subseteq Q(x)$, and they can differ; both facts are theorems on
  this page, and the difference is exactly the gap between "cannot be split by a
  clopen set" and "is connected".

- **Quasicomponents are what a separation argument actually produces.** A proof
  that two points cannot be separated typically produces a clopen set containing
  both or neither, which is a statement about $Q$, not about $C$. Naming the
  weaker notion keeps such an argument honest instead of letting it be read as a
  connectedness claim.

- **The definition of totally disconnected is stated with components, not with
  quasicomponents.** The condition "every quasicomponent is a singleton" is a
  different and strictly stronger property, usually called total separatedness.
  Nothing on this page asserts that the two agree.
