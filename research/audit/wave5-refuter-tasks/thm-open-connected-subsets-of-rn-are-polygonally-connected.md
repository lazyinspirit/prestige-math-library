# Adversarial proof reading — `thm-open-connected-subsets-of-rn-are-polygonally-connected`

## The item under review, in full

`items/thm-open-connected-subsets-of-rn-are-polygonally-connected.md`

```markdown
---
id: thm-open-connected-subsets-of-rn-are-polygonally-connected
kind: theorem
title: "For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-polygonally-reachable-set-is-clopen, thm-path-connected-implies-connected, def-connected-space, def-polygonal-path-and-polygonal-connectedness]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb{R}^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$.

[L1] The polygonally reachable set from a point of $U$ is clopen in $U$ ([[lem-polygonally-reachable-set-is-clopen]]).

[L2] A polygonal path is a path, and every path-connected space is connected ([[def-polygonal-path-and-polygonal-connectedness]], [[thm-path-connected-implies-connected]]).

[L3] A connected space has no nonempty proper clopen subset ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $U$ is connected. If $U=\varnothing$, then polygonal connectedness, path-connectedness, and connectedness all hold vacuously. Otherwise choose $a\in U$. The reachable set $R_a$ is nonempty and clopen by [L1], so [L3] gives $R_a=U$. [L1, L3, cases, choose]

1.2 Polygonal connectedness implies path-connectedness, and path-connectedness implies connectedness, by [L2]. [L2]

2.1 In the nonempty case, every point of $U=R_a$ is joined to $a$ by a polygonal path; reversing one such path and concatenating it with another joins any two points of $U$. Together with the empty case, connectedness implies polygonal connectedness. [step 1.1]

3.1 Steps 2.1 and 1.2 give all three equivalences. [step 2.1, step 1.2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-polygonally-reachable-set-is-clopen` — lemma — The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Statement

Let $U\subseteq\mathbb{R}^n$ be open and let $a\in U$. The set $R_a$ of points of $U$ joined to $a$ by a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $U$ is both open and closed in the subspace $U$.

### `thm-path-connected-implies-connected` — theorem — Every path-connected space is connected, and every path component lies inside a component

(statement provenance: ai-altered)

### Statement

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

### `def-connected-space` — definition — Separation of a topological space, connected and disconnected spaces, clopen sets, and connected subsets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- A **separation** of $X$ is an ordered pair $(U, V)$ of **open**, **nonempty**,
  **disjoint** subsets of $X$ with $U \cup V = X$.
- $X$ is **disconnected** when a separation of $X$ exists, and **connected** when
  none does.
- A subset $A \subseteq X$ is a **connected subset** of $X$ when the space
  $(A, \mathcal{T}_A)$ is connected, $\mathcal{T}_A$ being the subspace topology
  ([[def-subspace-topology-top]]). "Disconnected subset" is read the same way.

Since $U$ and $V$ are complementary in $X$, each of them is closed as well as
open; so a separation is the same thing as a partition of $X$ into two nonempty
clopen pieces ([[def-topological-space]]). The **clopen** subsets of $X$ are
those that are both open and closed, and $\varnothing$ and $X$ are always among
them.

**The empty space and the one-point space are connected in this library.**
Neither admits a separation: a separation requires two nonempty disjoint sets
whose union is the whole space, and neither $\varnothing$ nor a singleton can be
written as such a union. So both are connected under the definition above,
without any special clause. **This is a live convention fork** and the competing
choice is recorded in [[rem-connectedness-conventions]]; nothing on this page
depends on which is taken except the reading of the word "connected" applied to
those two spaces.

**Connectedness is a property of a space, not of an ambient pair.** The condition
above mentions only $(X,\mathcal{T})$. When it is applied to $A \subseteq X$ it
is applied to the space $(A, \mathcal{T}_A)$, so it does not change if $A$ is
regarded as a subspace of some other space inducing the same topology on $A$; in
particular a subset of $A$ is connected as a subset of $A$ exactly when it is
connected as a subset of $X$, by transitivity of the subspace topology
([[def-subspace-topology-top]]). This is why "connected" may be used of a subset
with no ambient space named.

**Spelled out for a subset.** $A \subseteq X$ is disconnected exactly when there
are open $U, V \subseteq X$ with

$$A \subseteq U \cup V, \qquad U \cap A \ne \varnothing, \qquad V \cap A \ne \varnothing, \qquad U \cap V \cap A = \varnothing,$$

because the open sets of $(A,\mathcal{T}_A)$ are precisely the traces $U \cap A$.
Note the last condition: it asks $U$ and $V$ to be disjoint **on $A$**, not in
$X$. Requiring $U \cap V = \varnothing$ outright is a strictly stronger demand
and is a different notion.

**The two-point discrete space.** Write $\mathbf{2} := \{0,1\}$ with the discrete
topology ([[def-standard-topologies]]), in which every subset is open. A
separation of $X$ is the same datum as a surjective continuous map
$X \to \mathbf{2}$ ([[def-continuous-map-top]]): given $(U,V)$, the map sending
$U$ to $0$ and $V$ to $1$ is continuous because the preimage of each of the four
open subsets of $\mathbf{2}$ is one of $\varnothing$, $U$, $V$, $X$; given a
surjective continuous $\chi : X \to \mathbf{2}$, the pair
$(\chi^{-1}[\{0\}], \chi^{-1}[\{1\}])$ is a separation. This reformulation is
proved as a theorem on this page and is recorded here only to name $\mathbf{2}$.

**Separated sets.** Two subsets $A_1, A_2 \subseteq X$ are **separated in $X$**
when

$$\overline{A_1} \cap A_2 = \varnothing \qquad \text{and} \qquad A_1 \cap \overline{A_2} = \varnothing,$$

closures taken in $X$ ([[def-interior-closure-boundary-top]],
[[thm-closure-characterisation-top]]). Separated sets are disjoint, since
$A_1 \subseteq \overline{A_1}$; the converse fails. This is verbatim the
condition [[def-connected-r]] uses on the real line, transported to an arbitrary
space, and the theorem relating it to the definition above is the next lemma on
this page.

**Totally disconnected spaces, and the empty case.** The vocabulary for a space
all of whose connected subsets are single points is fixed later on this page,
together with the components; it is not defined here because it is stated in
terms of components.

### `def-polygonal-path-and-polygonal-connectedness` — definition — Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Definition

Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

$$\gamma(t)=\frac{t_i-t}{t_i-t_{i-1}}v_{i-1}+\frac{t-t_{i-1}}{t_i-t_{i-1}}v_i\quad\text{when }t_{i-1}\le t\le t_i.$$

The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

The subset $A$ is **polygonally connected** when every pair of its points is joined by a polygonal path in $A$.

## What to return

Read `thm-open-connected-subsets-of-rn-are-polygonally-connected` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
