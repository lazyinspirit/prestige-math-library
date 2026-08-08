## Target item — `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`

Normalized current SHA-256: `02e8748b266ddfd06b9f054b72ddb422b9ff3addbc3ccf8d3eae2b64f258c694`

The complete current item follows, including frontmatter:

````markdown
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
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on $\\prod_i X_i$ is the initial topology of the family of projections $(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated by the subbasis",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "**The same condition with open sets only.** $f$ is continuous at $x$ if and only if for every open $V \\subseteq Y$ with $f(x) \\in V$ there is an open $U \\subseteq X$ with $x \\in U$ and $f[U] \\subseteq V$. Indeed, if $f$ is continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of $f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \\ni x$, which satisfies $f[U] \\subseteq V$. Conversely, given the displayed condition and a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \\in V_0 \\subseteq V$ and then open $U \\ni x$ with $f[U] \\subseteq V_0$; then $x \\in U \\subseteq f^{-1}[V_0] \\subseteq f^{-1}[V]$, so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the same statement written twice.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset $F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and **clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$ are clopen. *Open and closed are not opposites*: a set may be neither, and it may be both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "1.1",
        "1.2",
        "6.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let $S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closed-subspace-of-a-compact-space-is-compact",
      "source_section": "Statement",
      "quote": "1. **Closed in compact is compact.** If $(X, \\mathcal{T})$ is compact and $F \\subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$. 2. **Finite unions.** If $n \\in \\mathbb{N}$ and $K_0, \\dots, K_n$ are compact subsets of $X$, then $K_0 \\cup \\dots \\cup K_n$ is a compact subset of $X$. The union of the empty list is $\\varnothing$, which is a compact subset of every space.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so that $$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$ is itself the set of its predecessors.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose values are nonempty sets. Then the family of its values, $\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function ([[def-choice-function]]).",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-choice-function",
      "source_section": "Definition",
      "quote": "Let $\\mathcal{F}$ be a family of sets, every member of which is nonempty. A **choice function** for $\\mathcal{F}$ is a function ([[def-function]]) $$g : \\mathcal{F} \\to \\bigcup \\mathcal{F} \\qquad \\text{such that} \\qquad g(S) \\in S \\ \\text{ for every } S \\in \\mathcal{F}.$$ Given a set $X$, a **choice function on $X$** means a choice function for the family $\\mathcal{P}(X) \\setminus \\{\\emptyset\\}$ ([[def-power-set]], [[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
      "source_section": "Statement",
      "quote": "\\{\\, (x, f(x)) : x \\in X \\,\\}$$ is closed in $X \\times Y$ with the product topology ([[def-product-topology]]). No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and the continuity hypothesis is on $f$;",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Assume $Y$ is compact and $G_f$ is closed, and put $N := (X \\times Y) \\setminus G_f$, which is open. [A3]",
      "step": "1.1",
      "inputs": [
        "A3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Fix $x_0 \\in X$ and an open $V \\subseteq Y$ with $f(x_0) \\in V$, and put $C := Y \\setminus V$; then $C$ is closed in $Y$, hence a compact subspace. [A3, L2]",
      "step": "1.2",
      "inputs": [
        "A3",
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Let $\\mathcal{P}$ be the set of all pairs $(U, W)$ such that $U$ is open in $X$, $W$ is open in $Y$, $x_0 \\in U$ and $(U \\times W) \\cap G_f = \\varnothing$; this family is specified by a formula and nothing is selected in forming it. [construct]",
      "step": "1.3",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed, which is claim 2. [L5]",
      "step": "1.4",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Every $y \\in C$ lies in $W$ for some $(U,W) \\in \\mathcal{P}$: since $f(x_0) \\in V$ and $y \\notin V$ we have $y \\ne f(x_0)$, so $(x_0, y) \\in N$, and by [A1] there is a basic box $U \\times W$ with $(x_0,y) \\in U \\times W \\subseteq N$, which gives $(U,W) \\in \\mathcal{P}$. [step 1.1, step 1.2, step 1.3, A1]",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The family $\\mathcal{V} := \\{\\, W \\cap C : (U,W) \\in \\mathcal{P} \\text{ for some } U \\,\\}$ consists of sets open in the subspace $C$ and its union is $C$, by step 2.1. [step 2.1, L1]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By compactness of $C$ there is a finite subfamily of $\\mathcal{V}$ whose union is $C$; being finite it may be listed as $V_0, \\dots, V_{n-1}$ for some $n \\in \\mathbb{N}$, so that $C \\subseteq \\bigcup_{i<n} V_i$. [step 1.2, step 3.1, L1, L3]",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "For each $i < n$ the set $\\mathcal{P}_i := \\{\\, (U,W) \\in \\mathcal{P} : W \\cap C = V_i \\,\\}$ is nonempty, since $V_i \\in \\mathcal{V}$; so by [L4] applied to the function $i \\mapsto \\mathcal{P}_i$ on $n$ there is a choice function on the family of these sets, and it supplies a pair $(U_i, W_i) \\in \\mathcal{P}_i$ for every $i < n$. [step 4.1, L4, choose]",
      "step": "5.1",
      "inputs": [
        "L4",
        "4.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Put $U := \\{\\, x \\in X : x \\in U_i \\text{ for every } i < n \\,\\}$; this is $X$ when $n = 0$ and a finite intersection of open sets otherwise, hence open in either case, and $x_0 \\in U$ since $x_0 \\in U_i$ for every $i < n$. [step 5.1, A3, construct]",
      "step": "6.1",
      "inputs": [
        "5.1",
        "A3"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "$f[U] \\subseteq V$: let $x \\in U$ and suppose $f(x) \\notin V$, that is $f(x) \\in C$; then $f(x) \\in V_i = W_i \\cap C \\subseteq W_i$ for some $i < n$ by step 4.1, while $x \\in U \\subseteq U_i$, so the point $(x, f(x))$ of $G_f$ lies in $U_i \\times W_i$, contradicting $(U_i \\times W_i) \\cap G_f = \\varnothing$; hence $f(x) \\in V$. [step 4.1, step 5.1, step 6.1]",
      "step": "7.1",
      "inputs": [
        "4.1",
        "5.1",
        "6.1"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "By steps 6.1 and 7.1 there is, for the arbitrary $x_0 \\in X$ and the arbitrary open $V$ containing $f(x_0)$ fixed in step 1.2, an open $U \\ni x_0$ with $f[U] \\subseteq V$; so $f$ is continuous by [A2], which is claim 1. [step 1.2, step 6.1, step 7.1, A2]",
      "step": "8.1",
      "inputs": [
        "6.1",
        "7.1",
        "1.2",
        "A2"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "If $Y$ is compact and Hausdorff then step 8.1 gives one implication and step 1.4 the other, so continuity of $f$ and closedness of $G_f$ are equivalent, which is claim 3; with steps 8.1 and 1.4 the theorem is proved. [step 8.1, step 1.4] ∎",
      "step": "9.1",
      "inputs": [
        "8.1",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 6.1 explicitly treats the n=0 finite-subcover intersection as X"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 5.1 applies finite choice only after each indexed set of admissible boxes is proved nonempty"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "steps 1.1 through 8.1 establish that a closed graph and compact codomain imply continuity"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 1.4 establishes that continuity and a Hausdorff codomain imply a closed graph; step 9.1 combines the implications"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
    "declared_target": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "declared_target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-choice-function",
    "declared_target": "def-choice-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (12)

### `def-choice-function`

````markdown
---
id: def-choice-function
kind: definition
title: "Choice function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-indexed-union-and-intersection, def-power-set,
       def-set-difference-and-symmetric-difference]
justified_by: []
forward_refs: [ex-canonical-choice-on-naturals, ex-russells-socks,
               lem-finite-choice]
aliases: []
landmark: false
short: "choice function"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function ([[def-function]])
$$g : \mathcal{F} \to \bigcup \mathcal{F} \qquad \text{such that} \qquad g(S) \in S \ \text{ for every } S \in \mathcal{F}.$$

Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ ([[def-power-set]],
[[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.

## Remarks

- The requirement is only that $g$ pick *some* element of each member. Nothing
  requires the choices to be coherent, definable, or computable, and this is
  exactly where the difficulty lies: for a single nonempty set $S$ the existence
  of an element to pick is immediate, and for a family presented as the values
  of a function on a natural number the picks can be made one after another
  ([[lem-finite-choice]]). What is not available in ZF is
  a *simultaneous* choice across an arbitrary family.
- A choice function often exists for a concrete family with no appeal to any
  axiom, because the family carries extra structure that names a canonical
  element. Every nonempty set of natural numbers has a least element, so
  $S \mapsto \min S$ is an explicit choice function on $\mathbb{N}$
  ([[ex-canonical-choice-on-naturals]]). The contrast with families that admit no
  such rule is the content of [[ex-russells-socks]].
- Members of $\mathcal{F}$ must be nonempty: no function can select an element of
  $\emptyset$. The family $\mathcal{F}$ itself is allowed to be empty, and the
  empty function is then a choice function for it.
````

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
````

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`

````markdown
---
id: lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
kind: lemma
title: "The graph of a continuous map into a Hausdorff space is closed in the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       lem-continuity-is-local-and-pastes, def-hausdorff-space, def-continuous-map-top]
justified_by: []
aliases: [lem-closed-graph-of-a-continuous-map]
landmark: true
short: "a continuous map into a Hausdorff space has closed graph"
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be Hausdorff
([[def-hausdorff-space]]) and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Then the **graph**

$$G_f \;:=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\} \;=\; \{\, (x, f(x)) : x \in X \,\}$$

is closed in $X \times Y$ with the product topology ([[def-product-topology]]).

No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and
the continuity hypothesis is on $f$; both are used, and the converse implication
— that a closed graph forces continuity — needs a *different* hypothesis on the
codomain and is treated separately.

## Facts & Assumptions

**Given:** A topological space $X$, a Hausdorff space $Y$, a continuous map $f : X \to Y$, and the product $X \times Y$ with the product topology and projections $\pi_0, \pi_1$.

[A1] $G_f = \{\, z \in X \times Y : (f \circ \pi_0)(z) = \pi_1(z) \,\}$, since $(f \circ \pi_0)(z) = f(z_0)$ and $\pi_1(z) = z_1$ ([[def-product-topology]], [[def-the-diagonal-of-a-space]]).

[L1] The projections $\pi_0 : X \times Y \to X$ and $\pi_1 : X \times Y \to Y$ are continuous ([[thm-product-universal-property]], claim 1).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] If $Y$ is Hausdorff and $u, v : Z \to Y$ are continuous, then $\{\, z \in Z : u(z) = v(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 $\pi_0$ and $\pi_1$ are continuous. [L1]

2.1 $f \circ \pi_0 : X \times Y \to Y$ is continuous, being a composite of the continuous $\pi_0$ with the continuous $f$. [step 1.1, L2]

3.1 By [A1] the graph $G_f$ is the agreement set of the two continuous maps $f \circ \pi_0$ and $\pi_1$ from $X \times Y$ to the Hausdorff space $Y$, so it is closed in $X \times Y$. [step 1.1, step 2.1, A1, L3] ∎

## Remarks

- **The graph is an agreement set, and that is the whole proof.** Writing $G_f$ as the set where $f \circ \pi_0$ and $\pi_1$ agree turns a statement about a map into a statement about two maps out of one space, which is exactly the shape [[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]] handles. Equivalently $G_f = \langle f \circ \pi_0, \pi_1 \rangle^{-1}[\Delta_Y]$, the preimage of the diagonal ([[def-the-diagonal-of-a-space]]).

- **The Hausdorff hypothesis is not removable.** Let $X$ be a one-point space and let $Y = \{a,b\}$ with $a \ne b$ carry the indiscrete topology ([[def-standard-topologies]]). Every function $X \to Y$ is continuous, the only preimages to check being those of $\varnothing$ and $Y$. The product $X \times Y$ has as its open boxes only $\varnothing$ and itself, so its only closed sets are $\varnothing$ and itself; and $G_f$ is a single point, hence neither. The argument above breaks at [L3] and nowhere else.

- **Continuity of $f$ is used, and only through the composite.** Step 2.1 is the only appearance of the hypothesis; everything else is a property of the product.
````

### `thm-closed-subspace-of-a-compact-space-is-compact`

````markdown
---
id: thm-closed-subspace-of-a-compact-space-is-compact
kind: theorem
title: "A closed subspace of a compact space is compact, and a finite union of compact subspaces is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-subspace-topology-top, lem-finite-choice]
justified_by: []
aliases: [thm-closed-subset-of-a-compact-space-is-compact-top]
landmark: true
short: "closed in compact is compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subspaces as in [[def-subspace-topology-top]] and compactness as in
[[def-compact-space]]. Then:

1. **Closed in compact is compact.** If $(X, \mathcal{T})$ is compact and
   $F \subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$.
2. **Finite unions.** If $n \in \mathbb{N}$ and $K_0, \dots, K_n$ are compact
   subsets of $X$, then $K_0 \cup \dots \cup K_n$ is a compact subset of $X$. The
   union of the empty list is $\varnothing$, which is a compact subset of every
   space.

Claim 1 needs $X$ to be compact and claim 2 does not; no hypothesis of any kind
is placed on $X$ in claim 2. **No choice principle is used**: claim 1 selects
nothing, taking a least index where a selection would be natural, and claim 2
makes finitely many selections through [[lem-finite-choice]], a theorem of ZF.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $(X, \mathcal{T})$ is compact exactly when every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$; a subset $A \subseteq X$ is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact; and a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$, repetitions allowed ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L3] $F \subseteq X$ is closed exactly when $X \setminus F$ is open ([[def-topological-space]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, let $(X, \mathcal{T})$ be compact, let $F \subseteq X$ be closed and let $\mathcal{U}$ be a family of open subsets of $X$ with $F \subseteq \bigcup \mathcal{U}$; put $\mathcal{W} := \mathcal{U} \cup \{\, X \setminus F \,\}$, a family of open subsets of $X$ with $\bigcup \mathcal{W} = X$, since every point outside $F$ lies in $X \setminus F$ and every point of $F$ lies in some member of $\mathcal{U}$. [L2, L3, construct]

1.2 For claim 2, let $n \in \mathbb{N}$, let $K_0, \dots, K_n$ be compact subsets of $X$, put $K := K_0 \cup \dots \cup K_n$ and let $\mathcal{U}$ be a family of open subsets of $X$ with $K \subseteq \bigcup \mathcal{U}$; then $K_m \subseteq \bigcup \mathcal{U}$ for every $m \le n$, so by [L2] the set $T_m$ of finite subfamilies of $\mathcal{U}$ whose union contains $K_m$ is nonempty, the empty subfamily belonging to it when $K_m = \varnothing$. [L1, L2, construct]

2.1 If $X = \varnothing$ then $F = \varnothing$ and the second alternative of [L2] holds for $F$; otherwise compactness of $X$ applied to $\mathcal{W}$ gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $X = W_0 \cup \dots \cup W_n$. [L1, step 1.1]

2.2 The assignment $m \mapsto T_m$ is a function with domain the natural number $\sigma(n)$ all of whose values are nonempty, so a choice function for its values supplies finite subfamilies $\mathcal{V}_0, \dots, \mathcal{V}_n$ of $\mathcal{U}$ with $K_m \subseteq \bigcup \mathcal{V}_m$ for every $m \le n$. [L4, step 1.2]

3.1 Assume $F \ne \varnothing$, the case $F = \varnothing$ being settled at step 2.1, and fix $x \in F$; then $x \in W_j$ for some $j \le n$, and $x \notin X \setminus F$, so that $W_j \ne X \setminus F$ and hence $W_j \in \mathcal{U}$. Let $j_0$ be the least $j \le n$ with $W_j \in \mathcal{U}$, which exists by the previous sentence, and put $V_j := W_j$ when $W_j \in \mathcal{U}$ and $V_j := W_{j_0}$ otherwise; then $V_0, \dots, V_n \in \mathcal{U}$, and nothing has been selected, $j_0$ being the least admissible index. [step 2.1, construct]

3.2 The family $\mathcal{V} := \mathcal{V}_0 \cup \dots \cup \mathcal{V}_n$ is a subfamily of $\mathcal{U}$; it is finite, a union of finitely many listable families being listed by concatenating their lists; and $K = K_0 \cup \dots \cup K_n \subseteq \bigcup \mathcal{V}$, since each $K_m$ lies inside $\bigcup \mathcal{V}_m \subseteq \bigcup \mathcal{V}$. So $\mathcal{V}$ is empty, in which case $K = \varnothing$, or listable as $\{U_0, \dots, U_p\}$ with $K \subseteq U_0 \cup \dots \cup U_p$; by [L2] the set $K$ is a compact subset of $X$, which is claim 2. [L1, L2, algebra, step 2.2]

4.1 $F \subseteq V_0 \cup \dots \cup V_n$: given $y \in F$ there is $j \le n$ with $y \in W_j$, and $y \in F$ forces $W_j \ne X \setminus F$, hence $W_j \in \mathcal{U}$ and $V_j = W_j \ni y$. Since $V_0, \dots, V_n$ are members of $\mathcal{U}$, [L2] gives that $F$ is a compact subset of $X$, the case $F = \varnothing$ having been settled at step 2.1. [L2, step 2.1, step 3.1]

5.1 Claim 1 is step 4.1 and claim 2 is step 3.2, and the final sentence of claim 2 is the compactness of the empty space, which holds because the empty subfamily of any family covers it. [L1, step 3.2, step 4.1] ∎

## Remarks

**Claim 1 is where the two hypotheses do different work.** Compactness of $X$ supplies a finite subcover of $X$; closedness of $F$ is what makes $X \setminus F$ available as one more open set, so that a cover of $F$ can be enlarged to a cover of $X$ by adding a single member. Neither hypothesis can be dropped: an open subspace of a compact space need not be compact, and without compactness of $X$ there is nothing to thin.

**The converse of claim 1 fails, and that is the subject of the next item.** A compact subset of an arbitrary space need not be closed; it is closed as soon as the ambient space is Hausdorff ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]), and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure without that hypothesis.

**The metric special case is [[lem-closed-subset-of-a-compact-space-is-compact]].** It is stated there for a closed subset of a compact metric space and is not used above; by [[thm-compactness-agrees-with-metric-compactness]] it is claim 1 applied to a metric topology. The general theorem is proved from the general definitions and borrows nothing from the metric development, which is why the metric statement does not appear among its dependencies.
````

