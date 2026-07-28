---
id: thm-quasicomponents-contain-components
kind: theorem
title: "Every quasicomponent is a closed union of components, so each component is contained in a quasicomponent, and the quasicomponents partition the space"
status: draft
origin: session
deps: [def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed,
       thm-connectedness-characterisations, def-connected-space, def-topological-space,
       def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $C(x)$ and $Q(x)$ be the component and the
quasicomponent of $x \in X$ ([[def-connected-component-and-quasicomponent]]).
Then:

1. **Containment.** $C(x) \subseteq Q(x)$.
2. **Closedness.** $Q(x)$ is closed in $X$.
3. **Saturation.** If $y \in Q(x)$ then $Q(y) = Q(x)$; consequently
   $C(y) \subseteq Q(x)$ for every $y \in Q(x)$, and
   $$Q(x) \;=\; \bigcup \{\, C(y) : y \in Q(x) \,\},$$
   so every quasicomponent is a union of components.
4. **Partition.** The quasicomponents are nonempty, pairwise disjoint, and cover
   $X$.

**No converse is asserted.** Claim 1 is an inclusion and this theorem does not
claim it is an equality; the question of when $C(x) = Q(x)$ is not settled on
this page, and nothing here may be read as settling it.

## Facts & Assumptions

**Given:** A topological space $X$, a point $x \in X$, and subsets carrying the subspace topology ([[def-subspace-topology-top]]).

[A1] $C(x)$ is the largest connected subset of $X$ containing $x$, and $Q(x)$ is the intersection of all clopen $K \subseteq X$ with $x \in K$; that family is nonempty, $X$ being clopen; every point lies in its own component ([[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]], claims 1 and 2).

[A2] A connected space has no clopen subset other than $\varnothing$ and the whole space; a subset $A \subseteq X$ is connected exactly when the only subsets of $A$ clopen in $(A,\mathcal{T}_A)$ are $\varnothing$ and $A$ ([[thm-connectedness-characterisations]], claims 1 and 2, [[def-connected-space]]).

[A3] The traces $U \cap A$ of open sets are the open sets of $A$, and the traces $F \cap A$ of closed sets are the closed sets of $A$ ([[def-subspace-topology-top]]).

[A4] A clopen set is closed; a nonempty intersection of closed sets is closed; the complement of a clopen set is clopen ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $K \subseteq X$ be clopen with $x \in K$. Then $K \cap C(x)$ is both open and closed in the subspace $C(x)$ by [A3], and it contains $x$, so it is nonempty. [A1, A3]

1.2 Every clopen $K \ni y$ also contains $x$ whenever $y \in Q(x)$: otherwise $X \setminus K$ is a clopen set containing $x$ by [A4], so $Q(x) \subseteq X \setminus K$ by [A1], contradicting $y \in Q(x) \cap K$. [A1, A4]

1.3 $Q(x)$ is closed, being by [A1] the intersection of a nonempty family of clopen, hence closed, sets, and such an intersection is closed by [A4]; this is claim 2. And $x \in Q(x)$, every member of that family containing $x$. [A1, A4]

2.1 Since $C(x)$ is connected by [A1], its only clopen subsets are $\varnothing$ and $C(x)$ by [A2]; so step 1.1 forces $K \cap C(x) = C(x)$, that is $C(x) \subseteq K$. [step 1.1, A1, A2]

2.2 Let $y \in Q(x)$. Every clopen $K$ with $x \in K$ contains $y$, since $Q(x) \subseteq K$ by [A1], so $Q(y) \subseteq K$; hence $Q(y) \subseteq Q(x)$. Conversely every clopen $K$ with $y \in K$ contains $x$ by step 1.2, so $Q(x) \subseteq K$ and therefore $Q(x) \subseteq Q(y)$. Thus $Q(y) = Q(x)$. [step 1.2, A1]

3.1 As $K$ was an arbitrary clopen set containing $x$, it follows that $C(x)$ is contained in the intersection of all of them, that is $C(x) \subseteq Q(x)$; this is claim 1. [step 2.1, A1]

4.1 So for $y \in Q(x)$ one has $C(y) \subseteq Q(y) = Q(x)$ by step 3.1 and step 2.2; and each such $y$ lies in $C(y)$ by [A1], so $Q(x) = \bigcup \{\, C(y) : y \in Q(x) \,\}$. This is claim 3. [step 3.1, step 2.2, A1]

5.1 For claim 4: each $Q(x)$ is nonempty by step 1.3; if $z \in Q(x) \cap Q(y)$ then $Q(z) = Q(x)$ and $Q(z) = Q(y)$ by step 2.2, so $Q(x) = Q(y)$, and hence two quasicomponents are equal or disjoint; and $x \in Q(x)$ by step 1.3, so they cover $X$. [step 1.3, step 2.2] ∎

## Remarks

- **Where the inclusion can be strict, and why the proof cannot be improved.** Step 2.1 uses connectedness of $C(x)$ to promote "meets $K$" to "is contained in $K$". Running the argument backwards would need every point of $Q(x)$ to be joined to $x$ by a connected set, and nothing in the definition of $Q$ provides one: $Q(x)$ records only that no clopen set separates the two points. That gap is real and not an artefact of this proof.

- **Both partitions are into closed sets, and they are nested.** The components partition $X$ into closed sets ([[thm-components-partition-and-are-closed]]), the quasicomponents partition $X$ into closed sets by claims 2 and 4, and by claim 3 the second partition is coarser: every quasicomponent is a union of whole components.

- **Claim 3 is what makes the notion useful.** A clopen set never cuts a component in half, so any argument that produces a clopen set separating two points has automatically shown that they lie in different components. That implication runs only in this direction, which is exactly claim 1.
