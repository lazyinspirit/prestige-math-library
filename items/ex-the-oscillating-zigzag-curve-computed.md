---
id: ex-the-oscillating-zigzag-curve-computed
kind: example
title: "The zigzag curve and its closure worked out: the components, the path components, and the points at which local connectedness fails"
status: draft
origin: session
deps: [lem-the-oscillating-zigzag-curve, def-connected-space, def-path-connected,
       def-locally-connected, def-connected-component-and-quasicomponent,
       thm-components-partition-and-are-closed, thm-quasicomponents-contain-components,
       thm-closure-of-a-connected-set, def-subspace-topology-top,
       thm-subspace-closure-and-interior, lem-product-topology-on-rn, def-interval,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       thm-continuous-image-of-a-connected-space, def-product-topology,
       thm-product-universal-property, def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Example

Let $G$ be the graph of the zigzag function and
$\overline{G} = G \cup (\{0\} \times [0,1])$ its closure in $\mathbb{R}^2$
([[lem-the-oscillating-zigzag-curve]], claim 2). Write
$\Sigma := \{0\} \times [0,1]$ for the added segment. Then, in the space
$\overline{G}$ with its subspace topology ([[def-subspace-topology-top]]):

1. **One component.** $\overline{G}$ is connected, so it has exactly one
   component, namely $\overline{G}$ itself, and exactly one quasicomponent, also
   $\overline{G}$ ([[def-connected-component-and-quasicomponent]],
   [[thm-components-partition-and-are-closed]],
   [[thm-quasicomponents-contain-components]]).
2. **Two path components**, namely $G$ and $\Sigma$
   ([[def-path-connected]]).
3. **$G$ is open in $\overline{G}$ and $\Sigma$ is closed in it**; neither is
   clopen, since $\overline{G}$ is connected.
4. **Local connectedness holds at every point of $G$ and fails at every point of
   $\Sigma$** ([[def-locally-connected]]). So the set of points at which
   $\overline{G}$ fails to be locally connected is exactly $\Sigma$.

Claim 2 is the sharp form of "not path-connected": the failure is not that some
pair of points is unjoined but that the space splits into exactly two path
classes, one of which is the whole added segment.

## Facts & Assumptions

**Given:** $G$, $\Sigma = \{0\} \times [0,1]$ and $\overline{G} = G \cup \Sigma$ as subspaces of $\mathbb{R}^2$.

[L1] $G$ is path-connected, connected and locally connected; $\overline{G} = G \cup \Sigma$; $\overline{G}$ is connected; no path in $\overline{G}$ joins a point of $\Sigma$ to a point of $G$; and $\overline{G}$ is not locally connected at any point of $\Sigma$ ([[lem-the-oscillating-zigzag-curve]], claims 1, 2, 3, 4, 5).

[A1] The component of a point is the largest connected set containing it, the components partition the space, and every quasicomponent contains the component of each of its points ([[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]], [[thm-quasicomponents-contain-components]]).

[A2] The path components partition the space and each is path-connected; a path-connected subset containing $x$ lies inside the path component of $x$ ([[def-path-connected]]).

[A3] A map into $\mathbb{R}^2$ is continuous exactly when both components are, constant maps and the inclusion of an interval are continuous, and a continuous image of a connected space is connected ([[thm-product-universal-property]], [[def-product-topology]], [[def-continuous-map-top]], [[thm-continuous-image-of-a-connected-space]], [[lem-product-topology-on-rn]], [[def-interval]], [[def-connected-space]]).

[A4] A product of closed subsets of $\mathbb{R}$ is closed in $\mathbb{R}^2$; for $A \subseteq S$ the closure of $A$ in the subspace $S$ is $\overline{A} \cap S$; a set is closed exactly when it equals its closure ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], [[thm-subspace-closure-and-interior]], [[def-product-topology]]).

[A5] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$; if $S$ is open in $X$ then a subset of $S$ is open in $S$ exactly when it is open in $X$ ([[def-locally-connected]], [[def-subspace-topology-top]]).

[A6] If $A$ is connected and $A \subseteq B \subseteq \overline{A}$ then $B$ is connected ([[thm-closure-of-a-connected-set]]).

## Verification

**Proof technique:** direct.

1.1 $\overline{G}$ is connected by [L1], so the largest connected subset containing any of its points is $\overline{G}$ itself; by [A1] it is therefore the unique component, and by [A1] the unique quasicomponent contains it and is contained in the space, hence equals it. This is claim 1. [L1, A1]

1.2 $\Sigma = \{0\} \times [0,1]$ is path-connected: for $(0,s), (0,u) \in \Sigma$ the map $t \mapsto (0, s + t(u-s))$ is continuous into $\mathbb{R}^2$ by [A3] and takes values in $\Sigma$, since $s + t(u-s)$ lies between $s$ and $u$, hence in $[0,1]$. [A3]

2.1 $\Sigma$ is closed in $\mathbb{R}^2$ by [A4], being a product of two closed subsets of $\mathbb{R}$; hence $\Sigma = \overline{\Sigma} \cap \overline{G}$ is closed in $\overline{G}$ by [A4], and $G = \overline{G} \setminus \Sigma$ is open in $\overline{G}$. This is claim 3, the "not clopen" half following from claim 1, a clopen proper nonempty subset being impossible in a connected space. [step 1.1, A4]

2.2 $G$ and $\Sigma$ are path-connected subsets of $\overline{G}$ by [L1] and step 1.2, so each lies inside a single path component by [A2]; and no path joins a point of one to a point of the other by [L1], so the two lie in different path components. Since $G \cup \Sigma = \overline{G}$, the path components are exactly $G$ and $\Sigma$. This is claim 2. [step 1.2, L1, A2]

3.1 Local connectedness holds at every point of $G$: let $p \in G$ and let $U$ be open in $\overline{G}$ with $p \in U$. Then $U \cap G$ is open in $\overline{G}$ by step 2.1, hence open in $G$ by [A5], $G$ being open; $G$ is locally connected by [L1], so there is $V$ open in $G$ and connected with $p \in V \subseteq U \cap G$; and $V$ is open in $\overline{G}$ by [A5]. [step 2.1, L1, A5]

4.1 Local connectedness fails at every point of $\Sigma$ by [L1]; with step 3.1 this shows the failure set is exactly $\Sigma$, which is claim 4. [step 3.1, L1, A5] ∎

## Remarks

- **The two path components have different topological characters.** $\Sigma$ is homeomorphic to a closed bounded interval and $G$ to a half-open one, and only the first is closed in $\overline{G}$. So the partition into path components is not a partition into clopen pieces, which is exactly what [[thm-connected-and-locally-path-connected-implies-path-connected]] would supply if the space were locally path-connected — and it is not, by claim 4.

- **Why $\overline{G}$ has one component and two path components at once.** Connectedness is destroyed only by a clopen splitting, and adjoining $\Sigma$ to $G$ creates none: every neighbourhood of a point of $\Sigma$ meets $G$ by [A6] and claim 2 of [[lem-the-oscillating-zigzag-curve]]. Path-connectedness is destroyed by a single continuity failure along one map, and that is enough.

- **The quasicomponent carries no extra information here.** Since the space is connected, its unique quasicomponent equals its unique component, so this witness says nothing about the strictness of the inclusion $C(x) \subseteq Q(x)$; a separate space is needed for that.
