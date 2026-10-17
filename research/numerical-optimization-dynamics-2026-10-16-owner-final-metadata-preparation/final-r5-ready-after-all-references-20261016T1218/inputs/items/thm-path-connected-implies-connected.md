---
id: thm-path-connected-implies-connected
kind: theorem
title: "Every path-connected space is connected, and every path component lies inside a component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-path-connected, def-connected-space, cor-connected-subsets-of-the-line,
       thm-continuous-image-of-a-connected-space, thm-unions-of-connected-sets,
       def-interval, def-continuous-map-top, def-connected-component-and-quasicomponent,
       def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Keith Conrad, Spaces That Are Connected but Not Path-Connected"
      url: "https://kconrad.math.uconn.edu/blurbs/topology/connnotpathconn.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

## Facts & Assumptions

**Given:** A topological space $X$ and the unit interval $I = [0,1]$ with the subspace topology from $\mathbb{R}$ ([[def-path-connected]]).

[A1] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, and $[0,1]$ is order-convex ([[cor-connected-subsets-of-the-line]], [[def-interval]]).

[A2] A continuous image of a connected space is a connected subset of the target ([[thm-continuous-image-of-a-connected-space]], claim 1).

[A3] A union of connected subsets with a point in common is connected ([[thm-unions-of-connected-sets]], claim 1).

[A4] A path in $X$ from $x$ to $y$ is a continuous map $\gamma : I \to X$ with $\gamma(0) = x$ and $\gamma(1) = y$; $X$ is path-connected when every pair of its points is joined by one; the path component $P(x)$ is the set of points joined to $x$, and it is a path-connected subset of $X$ ([[def-path-connected]], [[def-continuous-map-top]]).

[A5] $C(x)$ is the largest connected subset of $X$ containing $x$; the empty space is connected ([[def-connected-component-and-quasicomponent]], [[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 $[0,1]$ is order-convex, so it is a connected subset of $\mathbb{R}$ by [A1], that is the space $I$ is connected; this is claim 1. [A1]

1.2 Assume $X$ is path-connected. If $X = \varnothing$ it is connected by [A5] and claim 2 holds, so assume $X \ne \varnothing$ and fix a point $x_0 \in X$. [A5, given]

1.3 Let $\Gamma := \{\, \gamma : \gamma \text{ is a path in } X \text{ with } \gamma(0) = x_0 \,\}$, a set of functions from $I$ to $X$. No member of $\Gamma$ is selected: the whole family is used. [A4]

2.1 For each $\gamma \in \Gamma$ the image $\gamma[I]$ is a connected subset of $X$, by step 1.1 and [A2] applied to the continuous map $\gamma$; and $x_0 = \gamma(0) \in \gamma[I]$. [step 1.1, step 1.3, A2, A4]

2.2 $X = \bigcup_{\gamma \in \Gamma} \gamma[I]$: each image is a subset of $X$, and conversely every $y \in X$ is joined to $x_0$ by some path $\gamma$, which lies in $\Gamma$ and has $y = \gamma(1) \in \gamma[I]$. [step 1.2, step 1.3, A4]

3.1 Hence $X$ is connected by [A3], being a union of connected sets all containing $x_0$. Applied to the space $A$ with its subspace topology, the same argument shows that a path-connected subset $A \subseteq X$ is a connected subset of $X$; this is claim 2. [step 2.1, step 2.2, A3]

4.1 For claim 3, $P(x)$ is a path-connected subset of $X$ by [A4], hence a connected subset of $X$ by claim 2, and it contains $x$; so $P(x) \subseteq C(x)$ by the maximality in [A5]. Since the path components partition $X$ by [A4] and each lies inside a single component, every component is a union of path components. [step 3.1, A4, A5] ∎

## Remarks

- **Where choice would have crept in.** The textbook phrasing "for each $y \in X$ choose a path from $x_0$ to $y$" produces a family of paths indexed by $X$ and is an application of the Axiom of Choice over an arbitrary index set. It is unnecessary: the union of the images of **all** paths from $x_0$ is already $X$, and forming that union selects nothing. Step 1.3 is written to make the difference visible rather than to leave it to the reader.

- **Claim 1 is where the real line enters, and it enters once.** Everything else in the proof is formal. All the content of "path-connected implies connected" is the connectedness of the interval, which is a consequence of the least upper bound property through [[cor-connected-subsets-of-the-line]].

- **Claim 3 gives the standard picture.** Components are unions of path components, so the two partitions of $X$ are nested, with the path components the finer of the two. They coincide in many familiar spaces and not in all, and nothing above says which case a given space is in.
