## Target item — `ex-a-finite-hausdorff-space-is-discrete`

Normalized current SHA-256: `e38f4906c8772f1d5b3b2785e2ad8d2a91bb127977c73f611391282936eb72d5`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-a-finite-hausdorff-space-is-discrete
kind: example
title: "A finite Hausdorff space is discrete, and its diagonal is closed for the trivial reason that every subset of the square is"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-hausdorff-space, thm-t1-iff-singletons-are-closed, def-t0-and-t1-spaces,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-standard-topologies,
       def-countable, def-product-topology, def-topology-basis-subbasis,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "a finite Hausdorff space is discrete"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Topological Spaces lecture notes (University of Cambridge)"
      url: "https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf"
pipeline_run: null
---

## Example

Let $(X, \mathcal{T})$ be a Hausdorff space ([[def-hausdorff-space]]) whose
underlying set is finite ([[def-countable]]). Then:

1. $\mathcal{T}$ is the **discrete** topology on $X$
   ([[def-standard-topologies]]): every subset of $X$ is open.
2. $X \times X$ with the product topology ([[def-product-topology]]) is discrete
   as well, so every subset of it — the diagonal $\Delta_X$ included — is both
   open and closed.

Clause 2 makes the diagonal criterion
([[thm-hausdorff-iff-the-diagonal-is-closed]]) true here for a reason that has
nothing to do with the diagonal: in a discrete square *every* subset is closed.
The example is worth recording precisely because it is the degenerate case, where
the criterion carries no information.

## Facts & Assumptions

**Given:** A Hausdorff space $(X,\mathcal{T})$ with $X$ finite, and $X \times X$ with the product topology.

[A1] $X$ is finite, so every subset of $X$ is finite ([[def-countable]], [[def-standard-topologies]], fact (i)).

[A2] The discrete topology on a set is the family of all its subsets; in it every subset is open, hence every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).

[A3] The boxes $U \times W$ with $U, W \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

[L2] A space is $T_1$ exactly when every finite subset of it is closed ([[thm-t1-iff-singletons-are-closed]], clause (c)).

## Verification

**Proof technique:** direct.

1.1 $X$ is $T_1$, being Hausdorff. [L1]

2.1 Every subset $A \subseteq X$ is finite by [A1], hence closed by step 1.1 and [L2]; so every subset of $X$ is closed. [step 1.1, A1, L2]

3.1 Every subset $A \subseteq X$ is open, its complement $X \setminus A$ being a subset of $X$ and therefore closed by step 2.1; so $\mathcal{T}$ is the discrete topology, which is claim 1. [step 2.1, A2]

4.1 Every singleton $\{(u,v)\} = \{u\} \times \{v\}$ of $X \times X$ is a basic open box by step 3.1 and [A3], so every subset of $X \times X$, being the union of the singletons of its elements, is open; hence $X \times X$ is discrete and every subset of it, $\Delta_X$ included, is closed. This is claim 2. [step 3.1, A2, A3] ∎

## Remarks

- **The finiteness is used only through "every subset is finite".** Nothing about cardinality beyond that enters, and the argument gives, for an arbitrary $T_1$ space, that every finite subset is closed — which is the content of clause (c) of [[thm-t1-iff-singletons-are-closed]] and is the real reason a finite $T_1$ space is discrete.

- **The Hausdorff hypothesis may be weakened to $T_1$.** Step 1.1 is the only place it is used, and it is used only to obtain $T_1$; so a finite $T_1$ space is already discrete, and a finite Hausdorff space is discrete because Hausdorff implies $T_1$. Neither hypothesis can be dropped altogether: the indiscrete topology on a two-point set is finite and not discrete ([[def-standard-topologies]]).

- **Why the diagonal is uninformative here.** In a discrete square every subset is closed, so the closedness of $\Delta_X$ is not evidence of anything about $X$; the criterion is a genuine test only where the square has proper nonempty non-closed subsets to be distinguished from.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "Throughout, a topology is as in [[def-topological-space]], and *finite*, *at most countable* and *uncountable* are as in [[def-countable]], so that \"countable\" always means \"at most countable\" and every finite set is countable. Let $X$ be a set. The six families below are topologies on $X$; that each really satisfies (T1), (T2) and (T3) is discharged in full after the list.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-standard-topologies",
      "source_section": "Definition",
      "quote": "1. **Discrete topology.** $\\mathcal{T}_{\\mathrm{disc}} := \\mathcal{P}(X)$: every subset is open, hence every subset is closed, hence every subset is clopen.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "Conversely, if a family $\\mathcal{C} \\subseteq \\mathcal{P}(X)$ satisfies (C1), (C2) and (C3), then $\\mathcal{T} := \\{\\, X \\setminus C : C \\in \\mathcal{C} \\,\\}$ is a topology on $X$ whose closed sets are exactly the members of $\\mathcal{C}$. So a topology may be presented equally well by its open sets or by its closed sets, and this library uses whichever is shorter.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on $\\prod_i X_i$ is the initial topology of the family of projections $(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated by the subbasis",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if every open set is a union of members of $\\mathcal{B}$: for every $U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with $U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-the-diagonal-of-a-space",
      "source_section": "Definition",
      "quote": "So $$\\{\\, U \\times V : U \\in \\mathcal{T},\\ V \\in \\mathcal{T}_Y \\,\\}$$ is a basis for the product topology on $X \\times Y$, and every statement below that tests a basic open set tests a box of two open sets.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]). Then: 1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff ([[def-hausdorff-space]]). 2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$ ([[def-t0-and-t1-spaces]]). 3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$ is $T_3$ — then $X$ is Urysohn. Consequently $T_3$ implies $T_{2\\frac12}$, which implies $T_2$, which implies $T_1$, which implies $T_0$. Nothing here asserts that any of the four implications reverses; two of the failures are recorded among this page's false statements.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is an open set containing exactly one of $x$ and $y$. - $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points has an open set containing it and missing the other: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). - **(b)** $\\{x\\}$ is closed for every $x \\in X$. - **(c)** $F$ is closed for every finite $F \\subseteq X$ ([[def-countable]]). - **(d)** $\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$, that is, the topology of $X$ is finer than the cofinite topology on the same set.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$X$ is $T_1$, being Hausdorff. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Every subset $A \\subseteq X$ is finite by [A1], hence closed by step 1.1 and [L2]; so every subset of $X$ is closed. [step 1.1, A1, L2]",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Every subset $A \\subseteq X$ is open, its complement $X \\setminus A$ being a subset of $X$ and therefore closed by step 2.1; so $\\mathcal{T}$ is the discrete topology, which is claim 1. [step 2.1, A2]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "A2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Every singleton $\\{(u,v)\\} = \\{u\\} \\times \\{v\\}$ of $X \\times X$ is a basic open box by step 3.1 and [A3], so every subset of $X \\times X$, being the union of the singletons of its elements, is open; hence $X \\times X$ is discrete and every subset of it, $\\Delta_X$ included, is closed. This is claim 2. [step 3.1, A2, A3] ∎",
      "step": "4.1",
      "inputs": [
        "3.1",
        "A3",
        "A2"
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
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton-space or singleton-subset instance is included and all separation conditions become vacuous or immediate"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and steps 1.1 through 4.1 remain valid for an empty or one-point finite space"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "declared_target": "thm-hausdorff-iff-the-diagonal-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-the-diagonal-of-a-space",
    "declared_target": "def-the-diagonal-of-a-space",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "declared_target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-a-finite-hausdorff-space-is-discrete",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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

## Full text of every cited or declared item (11)

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

### `def-standard-topologies`

````markdown
---
id: def-standard-topologies
kind: definition
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable, lem-subset-of-countable, thm-countable-union-of-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, thm-induction-principle]
justified_by: []
aliases: [def-discrete-topology, def-indiscrete-topology, def-cofinite-topology,
          def-cocountable-topology, def-particular-point-topology, def-sierpinski-space]
landmark: true
short: "discrete, indiscrete, cofinite, cocountable, particular point, Sierpinski"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## Remarks

- **Two degenerate collapses.** If $X$ is finite then the cofinite topology is
  the discrete one, since every subset then has finite complement by fact (i)
  above; if $X$ is at most countable the cocountable topology is discrete for the
  same reason. Both families are therefore interesting only on an infinite,
  respectively uncountable, set, and every statement made about them below names
  that hypothesis.

- **Where the two extremes sit in the comparison order.** The discrete topology
  is the finest and the indiscrete the coarsest topology on $X$
  ([[def-topological-space]]): every topology is a subfamily of $\mathcal{P}(X)$
  and contains $\varnothing$ and $X$. Every other topology on $X$ lies between
  them, and the cofinite topology is coarser than the cocountable one, because a
  finite set is at most countable.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

- **The Sierpinski point that is open is a genuine choice of labelling.** Both
  $\{\varnothing,\{b\},S\}$ and $\{\varnothing,\{a\},S\}$ are topologies, and they
  are carried to each other by the transposition of $a$ and $b$; this library
  fixes the first and always names the open point.
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
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
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `def-the-diagonal-of-a-space`

````markdown
---
id: def-the-diagonal-of-a-space
kind: definition
title: "The diagonal $\\Delta_X \\subseteq X \\times X$, the diagonal map $\\delta_X$, and the pairing $\\langle f, g \\rangle$ of two maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-product-topology, thm-product-universal-property,
       def-continuous-map-top, def-subspace-topology-top, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-diagonal-top, def-pairing-of-two-maps]
landmark: true
short: "the diagonal, the diagonal map, the pairing of two maps"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Diagonal embedding (PlanetMath)"
      url: "https://planetmath.org/diagonalembedding"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]). Throughout, $X \times Y$ is the binary product
$\prod_{i<2} X_i$ with $X_0 = X$ and $X_1 = Y$ ([[def-product-topology]]),
carrying the product topology; a point of it is a **function** $z$ on the von
Neumann natural $2 = \{0,1\}$, written $(z_0, z_1)$, and $\pi_0, \pi_1$ are the
two projections.

**The basis used throughout.** For the index set $2$ the product basis and the
box basis coincide, since a box $\prod_{i<2} U_i$ has all but finitely many
factors unrestricted for the trivial reason that it has only two
([[def-product-topology]]). So

$$\{\, U \times V : U \in \mathcal{T},\ V \in \mathcal{T}_Y \,\}$$

is a basis for the product topology on $X \times Y$, and every statement below
that tests a basic open set tests a box of two open sets.

**The diagonal.** The **diagonal** of $X$ is

$$\Delta_X \;:=\; \{\, z \in X \times X : z_0 = z_1 \,\} \;=\; \{\, (x,x) : x \in X \,\} ,$$

the second description being the first read through the definition of a point of
the product as a function on $2$. It is a subset of $X \times X$ and is given the
subspace topology ([[def-subspace-topology-top]]) whenever it is regarded as a
space.

**The diagonal map.** The **diagonal map** of $X$ is

$$\delta_X : X \to X \times X, \qquad \delta_X(x) := (x,x) ,$$

that is, the function sending $x$ to the constant function $2 \to X$ with value
$x$. Its two components are $\pi_0 \circ \delta_X = \mathrm{id}_X$ and
$\pi_1 \circ \delta_X = \mathrm{id}_X$, and by claim 2 of
[[thm-product-universal-property]] it is the *unique* function $X \to X \times X$
with those two components. The same claim makes it **continuous**
([[def-continuous-map-top]]), the identity being continuous. Its image is
$\Delta_X$, and it is injective, since $\delta_X(x) = \delta_X(x')$ forces
$x = x'$ by reading the coordinate at $0$. Whether $\delta_X$ is an **embedding**
onto $\Delta_X$ ([[def-homeomorphism-and-open-maps]]) is not asserted here; it is
the content of the next item.

**The pairing of two maps.** For functions $f : Z \to X$ and $g : Z \to Y$ on a
common domain, the **pairing** is

$$\langle f, g \rangle : Z \to X \times Y, \qquad \langle f, g \rangle(z) := (f(z), g(z)) .$$

By claim 2 of [[thm-product-universal-property]] it is the unique function
$Z \to X \times Y$ with $\pi_0 \circ \langle f, g \rangle = f$ and
$\pi_1 \circ \langle f, g \rangle = g$; no hypothesis on $f$ and $g$ is needed
for the pairing to be defined, and continuity of the pairing is exactly
continuity of both components, which is again that claim. In this notation

$$\delta_X = \langle \mathrm{id}_X, \mathrm{id}_X \rangle ,$$

so the diagonal map is a special case of the pairing and needs no separate
treatment.

**The preimage identity that every later proof uses.** For $f, g : Z \to Y$,

$$\langle f, g \rangle^{-1}[\Delta_Y] \;=\; \{\, z \in Z : f(z) = g(z) \,\} ,$$

directly from the definitions above: $\langle f, g \rangle(z) \in \Delta_Y$ says
that the function $(f(z), g(z))$ on $2$ takes the same value at $0$ and at $1$.

## Remarks

- **The diagonal is a subset of a product, and the diagonal map is a function
  into it; they are different objects with the same name.** The set $\Delta_X$
  records which pairs are repetitions, and the map $\delta_X$ produces the
  repetitions. Both are needed: the closedness criterion of this page is about the
  set, and the transport of properties from $X$ to its copy inside the square is
  about the map.

- **Nothing here depends on a choice principle.** The product $X \times X$ is a
  binary product, and a point of it is exhibited by naming its two coordinates;
  the nonemptiness of an arbitrary product, which is where choice enters
  ([[thm-product-universal-property]], claim 4), is never invoked for a binary
  product with a named point.

- **Why the box description is recorded at the top.** The criterion proved on
  this page tests basic open sets of $X \times X$, and for the binary product
  there is no gap between the box topology and the product topology to worry
  about ([[def-product-topology]]). No infinite product is formed anywhere on
  this page, so the distinction never becomes live here.
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

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`

````markdown
---
id: lem-urysohn-sits-between-hausdorff-and-regular-plus-t1
kind: lemma
title: "Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-urysohn-space, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-interior-closure-boundary-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and points $x, y \in X$ with $x \ne y$.

[A1] $X$ is Urysohn when distinct points have open neighbourhoods with disjoint closures ([[def-urysohn-space]]).

[A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $X$ is $T_1$ when for distinct $x, y$ there are open $U \ni x$ with $y \notin U$ and open $V \ni y$ with $x \notin V$; every $T_1$ space is $T_0$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] $X$ is regular exactly when for every $x$ and every open $U \ni x$ there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]], clause (b)).

[L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Urysohn and let $x \ne y$; [A1] gives open $U \ni x$ and $V \ni y$ with $\overline{U} \cap \overline{V} = \varnothing$. [A1, assume-hyp]

1.2 Assume $X$ is Hausdorff and let $x \ne y$; [A2] gives disjoint open $U \ni x$ and $V \ni y$. [A2, assume-hyp]

1.3 Assume $X$ is regular and $T_1$ and let $x \ne y$; by [L1] the set $\{y\}$ is closed, so $U_0 := X \setminus \{y\}$ is open by [L3] and contains $x$. [L1, L3, assume-hyp]

2.1 Under step 1.1: $U \cap V \subseteq \overline{U} \cap \overline{V} = \varnothing$ by [L3], so $U$ and $V$ are disjoint open neighbourhoods of $x$ and $y$ and $X$ is Hausdorff, which is claim 1. [step 1.1, A2, L3]

2.2 Under step 1.2: $y \notin U$ and $x \notin V$, since $U \cap V = \varnothing$ with $y \in V$ and $x \in U$; so $U$ and $V$ witness the $T_1$ condition and $X$ is $T_1$, hence $T_0$, which is claim 2. [step 1.2, A3]

2.3 Under step 1.3: [L2] applied to $x \in U_0$ gives an open $U$ with $x \in U \subseteq \overline{U} \subseteq U_0 = X \setminus \{y\}$, so $y \notin \overline{U}$. [step 1.3, L2]

3.1 Under step 2.3: $X \setminus \overline{U}$ is open by [L3] and contains $y$, so [L2] applied to it gives an open $V$ with $y \in V \subseteq \overline{V} \subseteq X \setminus \overline{U}$. [step 2.3, L2, L3]

4.1 Under step 3.1: $\overline{U} \cap \overline{V} = \varnothing$, since $\overline{V} \subseteq X \setminus \overline{U}$; so $U$ and $V$ witness the Urysohn condition at the pair $x, y$ and $X$ is Urysohn, which is claim 3. [step 3.1, A1]

5.1 Claims 1, 2 and 3 are steps 2.1, 2.2 and 4.1, and composing them gives the chain $T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$. [step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **Claim 3 is where the $T_1$ hypothesis earns its place.** Regularity separates a point from a *closed* set, and the closed set used in the proof is the singleton $\{y\}$; without $T_1$ that singleton need not be closed and the argument has nothing to start from. The indiscrete topology on two points is regular and not Urysohn, which shows the hypothesis cannot simply be dropped.

- **Regularity is applied twice, and the second application is the whole point.** The first shrink puts $y$ outside $\overline{U}$; the second separates $y$ from the closed set $\overline{U}$, which is what upgrades disjointness of the sets to disjointness of their closures.

- **Claim 2 explains why the Hausdorff condition alone is often quoted as "points are closed".** By [[thm-t1-iff-singletons-are-closed]] the two are not the same condition; $T_1$ is strictly weaker, and the cofinite topology on an infinite set separates them.
````

### `thm-hausdorff-iff-the-diagonal-is-closed`

````markdown
---
id: thm-hausdorff-iff-the-diagonal-is-closed
kind: theorem
title: "A space is Hausdorff if and only if its diagonal is closed in the square carrying the product topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-diagonal-of-a-space, def-hausdorff-space, def-product-topology,
       def-topology-basis-subbasis, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: [thm-diagonal-criterion-for-hausdorff]
landmark: true
short: "Hausdorff iff the diagonal is closed"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space and give $X \times X$ the product
topology ([[def-product-topology]]). Then $X$ is Hausdorff
([[def-hausdorff-space]]) if and only if the diagonal $\Delta_X$
([[def-the-diagonal-of-a-space]]) is closed in $X \times X$:

$$X \text{ Hausdorff} \iff \Delta_X = \overline{\Delta_X} \text{ in } X \times X .$$

The condition on the right is a single closedness statement about one subset of
one space, with no quantifier over pairs of points visible in it; that is what
makes the criterion useful, and every consequence on this page is obtained by
pulling $\Delta_X$ back along a continuous map.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the product $X \times X$ with the product topology, and the diagonal $\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$.

[A1] $X$ is Hausdorff when for all $x \ne y$ in $X$ there are open $U \ni x$ and $V \ni y$ with $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[A2] The boxes $U \times V$ with $U, V \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] For a basis $\mathcal{B}$ of a space, a point lies in $\overline{A}$ if and only if every $B \in \mathcal{B}$ containing it meets $A$; and $A$ is closed if and only if $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2, [[def-interior-closure-boundary-top]]).

[L2] $A \subseteq \overline{A}$ for every subset $A$ of a space ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Hausdorff and let $z \in X \times X$ with $z \notin \Delta_X$, so that $z_0 \ne z_1$; by [A1] there are open $U \ni z_0$ and $V \ni z_1$ with $U \cap V = \varnothing$. [A1]

1.2 Assume $\Delta_X$ is closed and let $x, y \in X$ with $x \ne y$; then $z := (x,y)$ satisfies $z \notin \Delta_X = \overline{\Delta_X}$, the equality holding by [L1] since $\Delta_X$ is closed. [L1]

2.1 The box $U \times V$ of step 1.1 is a basic open set containing $z$, and $(U \times V) \cap \Delta_X = \varnothing$: a point $w$ of the intersection would satisfy $w_0 = w_1$ with $w_0 \in U$ and $w_1 \in V$, putting $w_0$ in $U \cap V = \varnothing$. [step 1.1, A2]

2.2 By [L1] applied to the basis of [A2], step 1.2 supplies a basic open box $U \times V$ with $z \in U \times V$ and $(U \times V) \cap \Delta_X = \varnothing$; so $x \in U$ and $y \in V$. [step 1.2, A2, L1]

3.1 From step 2.1 and [L1], $z \notin \overline{\Delta_X}$ for every $z \notin \Delta_X$; hence $\overline{\Delta_X} \subseteq \Delta_X$, and with [L2] this gives $\overline{\Delta_X} = \Delta_X$, so $\Delta_X$ is closed. [step 1.1, step 2.1, L1, L2]

3.2 The sets $U$ and $V$ of step 2.2 are disjoint: if $t \in U \cap V$ then $(t,t)$ lies in $U \times V$ and in $\Delta_X$, contradicting $(U \times V) \cap \Delta_X = \varnothing$. [step 2.2]

4.1 Step 3.1 shows that $X$ Hausdorff implies $\Delta_X$ closed, and steps 2.2 and 3.2 show that $\Delta_X$ closed implies that any two distinct points of $X$ have disjoint open neighbourhoods, which by [A1] is the Hausdorff condition; the two implications are the theorem. [step 2.2, step 3.1, step 3.2, A1] ∎

## Remarks

- **The criterion is about the product topology on a binary product**, and there the box basis and the product basis are the same family ([[def-product-topology]]), so the boxes tested in steps 2.1 and 2.2 are legitimately basic. No infinite product is formed anywhere in the argument, and the criterion says nothing about one.

- **Neither direction spends a choice principle.** The forward direction produces one box from one Hausdorff separation of one named pair, and the backward direction reads one box out of the closure characterisation; there is no family to select from in either.

- **What the criterion does not say.** It does not say that $\Delta_X$ is closed in $X \times X$ carrying some other topology, and it does not say that $\Delta_X$ is closed in $X$ — the latter is not even a statement, $\Delta_X$ being a subset of the square. The hypothesis that $X \times X$ carries the product topology is used at [A2] and cannot be dropped.
````

### `thm-t1-iff-singletons-are-closed`

````markdown
---
id: thm-t1-iff-singletons-are-closed
kind: theorem
title: "A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-topological-space, def-standard-topologies,
       def-neighbourhood-top, def-countable]
justified_by: []
aliases: []
landmark: true
short: "$T_1$ iff points are closed"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ on the same set $X$, points $x, y \in X$ and a finite subset $F \subseteq X$.

[A1] $X$ is $T_1$ when for all $x \ne y$ there are open $U, V$ with $x \in U$, $y \notin U$, $y \in V$ and $x \notin V$ ([[def-t0-and-t1-spaces]]).

[L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).

[L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

[L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): fix $x \in X$ and let $y \in X \setminus \{x\}$; then $y \ne x$, so [A1] supplies an open $V$ with $y \in V$ and $x \notin V$, whence $y \in V \subseteq X \setminus \{x\}$. [A1]

1.2 (b) implies (c): let $F \subseteq X$ be finite and list it as $F = \{x_0, \dots, x_{n-1}\}$ by [L4], so that $F = \{x_0\} \cup \dots \cup \{x_{n-1}\}$; for $n = 0$ this reads $F = \varnothing$, which is closed by [L1]. [L1, L4]

1.3 (c) implies (d): let $U \in \mathcal{T}_{\mathrm{cof}}$; if $U = \varnothing$ then $U \in \mathcal{T}$ by [L1], and otherwise $X \setminus U$ is finite by [L3], hence closed by (c), hence $U$ is open. [L1, L3]

1.4 (d) implies (a): let $x \ne y$ in $X$; the sets $X \setminus \{y\}$ and $X \setminus \{x\}$ have finite complements, so they lie in $\mathcal{T}_{\mathrm{cof}}$ by [L3] and hence in $\mathcal{T}$ by (d), and they witness the $T_1$ condition, since $x \in X \setminus \{y\}$, $y \notin X \setminus \{y\}$, $y \in X \setminus \{x\}$ and $x \notin X \setminus \{x\}$. [A1, L3]

2.1 By step 1.1 the set $X \setminus \{x\}$ is a neighbourhood of each of its points, hence open by [L2], so $\{x\}$ is closed by [L1]; this completes the implication (a) implies (b). [step 1.1, L1, L2]

2.2 By step 1.2 and (b) the set $F$ is a union of $n$ closed sets, hence closed by [L1]; this completes the implication (b) implies (c). [step 1.2, L1]

3.1 The four implications of steps 2.1, 2.2, 1.3 and 1.4 close the cycle (a) implies (b) implies (c) implies (d) implies (a), so the four conditions are equivalent. [step 1.3, step 1.4, step 2.1, step 2.2]

4.1 In particular $\mathcal{T}_{\mathrm{cof}}$ itself satisfies (d) with $\mathcal{T} = \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on any set is $T_1$ by step 3.1, and by (d) it is contained in every $T_1$ topology on that set; this is the final assertion of the statement. [step 3.1, L3] ∎

## Remarks

- **The theorem is the reason $T_1$ is quoted as "points are closed".** Every later use of $T_1$ on this page goes through clause (b): the $T_1$ hypothesis in $T_3$ and $T_4$ is used exactly to turn a point into a closed set so that regularity or normality applies to it.

- **Clause (c) is not a strengthening of clause (b).** It follows from it by a finite union, and the finite union is genuinely finite: an *arbitrary* union of closed sets need not be closed, and in the cofinite topology on an infinite set no infinite proper subset is closed at all, although every singleton is.

- **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.
````

