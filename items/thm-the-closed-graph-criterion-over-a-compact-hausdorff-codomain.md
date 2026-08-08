---
id: thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain
kind: theorem
title: "A map into a compact space whose graph is closed is continuous; so for a compact Hausdorff codomain, continuity and closedness of the graph are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
       def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact,
       def-product-topology, def-topology-basis-subbasis, def-subspace-topology-top,
       lem-finite-choice, def-choice-function, def-countable, def-hausdorff-space,
       def-continuous-map-top, def-topological-space]
justified_by: []
aliases: [thm-closed-graph-criterion-top]
landmark: true
short: "closed graph criterion over a compact codomain"
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
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Introduction to Functional Analysis (MIT 18.102)"
      url: "https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces, let $f : X \to Y$ be a function, and give
$X \times Y$ the product topology ([[def-product-topology]]), writing

$$G_f \;=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\}$$

for the graph of $f$. Then:

1. **Closed graph implies continuity, over a compact codomain.** If $Y$ is
   compact ([[def-compact-space]]) and $G_f$ is closed in $X \times Y$, then $f$
   is continuous ([[def-continuous-map-top]]). *No separation hypothesis on $Y$
   is used in this direction.*
2. **Continuity implies closed graph, over a Hausdorff codomain.** If $Y$ is
   Hausdorff ([[def-hausdorff-space]]) and $f$ is continuous, then $G_f$ is
   closed in $X \times Y$.
3. **The equivalence.** If $Y$ is compact **and** Hausdorff then $f$ is
   continuous if and only if $G_f$ is closed in $X \times Y$.

**The two halves carry different hypotheses and the equivalence is stated only
where both hold.** Claim 1 needs compactness and does not need the Hausdorff
condition; claim 2 needs the Hausdorff condition and does not need compactness.
Neither hypothesis may be transplanted to the other half.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a function $f : X \to Y$, the product $X \times Y$ with the product topology, and the graph $G_f = \{\, z \in X \times Y : z_1 = f(z_0) \,\}$.

[A1] The boxes $U \times W$ with $U$ open in $X$ and $W$ open in $Y$ form a basis for the product topology on $X \times Y$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is continuous at $x_0$ exactly when for every open $V \subseteq Y$ with $f(x_0) \in V$ there is an open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$, and $f$ is continuous when this holds at every point of $X$ ([[def-continuous-map-top]]).

[A3] A subset of a space is closed exactly when its complement is open; a finite intersection of open sets is open, and $X$ itself is open ([[def-topological-space]]).

[L1] A space is compact when every family of its open sets whose union is the whole space has a finite subfamily whose union is the whole space; a subset is compact when it is compact as a subspace, whose open sets are the traces of the open sets of the ambient space ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L3] A finite set is equinumerous with some natural number $n$, hence may be listed as $a_0, \dots, a_{n-1}$ ([[def-countable]]).

[L4] If $F$ is a function with domain a natural number $n$ all of whose values are nonempty sets, then the family of its values has a choice function; this is a theorem of ZF ([[lem-finite-choice]], [[def-choice-function]]).

[L5] If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed in $X \times Y$ ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Y$ is compact and $G_f$ is closed, and put $N := (X \times Y) \setminus G_f$, which is open. [A3]

1.2 Fix $x_0 \in X$ and an open $V \subseteq Y$ with $f(x_0) \in V$, and put $C := Y \setminus V$; then $C$ is closed in $Y$, hence a compact subspace. [A3, L2]

1.3 Let $\mathcal{P}$ be the set of all pairs $(U, W)$ such that $U$ is open in $X$, $W$ is open in $Y$, $x_0 \in U$ and $(U \times W) \cap G_f = \varnothing$; this family is specified by a formula and nothing is selected in forming it. [construct]

1.4 If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed, which is claim 2. [L5]

2.1 Every $y \in C$ lies in $W$ for some $(U,W) \in \mathcal{P}$: since $f(x_0) \in V$ and $y \notin V$ we have $y \ne f(x_0)$, so $(x_0, y) \in N$, and by [A1] there is a basic box $U \times W$ with $(x_0,y) \in U \times W \subseteq N$, which gives $(U,W) \in \mathcal{P}$. [step 1.1, step 1.2, step 1.3, A1]

3.1 The family $\mathcal{V} := \{\, W \cap C : (U,W) \in \mathcal{P} \text{ for some } U \,\}$ consists of sets open in the subspace $C$ and its union is $C$, by step 2.1. [step 2.1, L1]

4.1 By compactness of $C$ there is a finite subfamily of $\mathcal{V}$ whose union is $C$; being finite it may be listed as $V_0, \dots, V_{n-1}$ for some $n \in \mathbb{N}$, so that $C \subseteq \bigcup_{i<n} V_i$. [step 1.2, step 3.1, L1, L3]

5.1 For each $i < n$ the set $\mathcal{P}_i := \{\, (U,W) \in \mathcal{P} : W \cap C = V_i \,\}$ is nonempty, since $V_i \in \mathcal{V}$; so by [L4] applied to the function $i \mapsto \mathcal{P}_i$ on $n$ there is a choice function on the family of these sets, and it supplies a pair $(U_i, W_i) \in \mathcal{P}_i$ for every $i < n$. [step 4.1, L4, choose]

6.1 Put $U := \{\, x \in X : x \in U_i \text{ for every } i < n \,\}$; this is $X$ when $n = 0$ and a finite intersection of open sets otherwise, hence open in either case, and $x_0 \in U$ since $x_0 \in U_i$ for every $i < n$. [step 5.1, A3, construct]

7.1 $f[U] \subseteq V$: let $x \in U$ and suppose $f(x) \notin V$, that is $f(x) \in C$; then $f(x) \in V_i = W_i \cap C \subseteq W_i$ for some $i < n$ by step 4.1, while $x \in U \subseteq U_i$, so the point $(x, f(x))$ of $G_f$ lies in $U_i \times W_i$, contradicting $(U_i \times W_i) \cap G_f = \varnothing$; hence $f(x) \in V$. [step 4.1, step 5.1, step 6.1]

8.1 By steps 6.1 and 7.1 there is, for the arbitrary $x_0 \in X$ and the arbitrary open $V$ containing $f(x_0)$ fixed in step 1.2, an open $U \ni x_0$ with $f[U] \subseteq V$; so $f$ is continuous by [A2], which is claim 1. [step 1.2, step 6.1, step 7.1, A2]

9.1 If $Y$ is compact and Hausdorff then step 8.1 gives one implication and step 1.4 the other, so continuity of $f$ and closedness of $G_f$ are equivalent, which is claim 3; with steps 8.1 and 1.4 the theorem is proved. [step 8.1, step 1.4] ∎

## Remarks

- **The choice cost is exactly one finite choice, and the family it is made from is defined by a formula.** The textbook phrasing "for each $y \in C$ choose a box around $(x_0,y)$ missing the graph" selects one object for each point of an arbitrary set and is an application of the Axiom of Choice. Step 1.3 avoids it by collecting *all* admissible pairs into one formula-defined family; only after compactness has cut the cover down to finitely many members is anything chosen, and that choice is licensed by [[lem-finite-choice]], a theorem of ZF.

- **Why the empty case is written out.** If $V = Y$ then $C = \varnothing$ and the finite subfamily of step 4.1 may be empty, so $n = 0$; the set $U$ of step 6.1 is then $X$, which is exactly what is wanted. Writing $U$ as a defining condition rather than as an intersection is what makes that reading available, an intersection over no sets not being defined.

- **Compactness of the codomain is doing the work in claim 1, and it is not removable.** Nothing in that direction separates points, and no Hausdorff hypothesis appears; what is used is that the *complement of the target open set* is compact. A discontinuous function with closed graph into a non-compact Hausdorff codomain is recorded on this page as a false statement.
