## Target item — `ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space`

Normalized current SHA-256: `75e81d1c6250af82537edde737ddfeb9c65c833dc8a00bd011b6ad4d5a9a59cd`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space
kind: example
title: "A finite subset of any space is compact, so the compact separation clauses specialise to separating a point from a finite set in a Hausdorff space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       def-subspace-topology-top, def-hausdorff-space, def-countable,
       lem-finite-choice, def-choice-function, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "finite sets are compact; separating a point from a finite set"
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "A. Hatcher, Topology Notes"
      url: "https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf"
pipeline_run: null
---

## Example

Let $X$ be a topological space ([[def-topological-space]]) and let
$F \subseteq X$ be finite ([[def-countable]]), with the subspace topology
([[def-subspace-topology-top]]). Then:

1. $F$ is compact ([[def-compact-space]]), whatever $X$ is and whatever topology
   it carries.
2. Consequently, if $X$ is Hausdorff ([[def-hausdorff-space]]) then a point
   $x \in X \setminus F$ and the set $F$ have disjoint open neighbourhoods, and
   two disjoint finite subsets of $X$ have disjoint open neighbourhoods
   ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); in particular $F$ is
   closed in $X$.

Clause 1 spends a choice principle, and exactly one: finite choice
([[lem-finite-choice]]), which is a theorem of ZF. The naive phrasing of the same
argument — "for each $y \in F$ pick a member of the cover containing it" — is a
selection over the index set of $F$, and because that index set is a natural
number the selection is licensed outright.

## Facts & Assumptions

**Given:** A topological space $X$, a finite subset $F \subseteq X$ with the subspace topology, and, where clause 2 is at issue, the hypothesis that $X$ is Hausdorff.

[A1] $F$ is finite, so $F$ is equinumerous with a natural number $n$ and may be listed as $y_0, \dots, y_{n-1}$ ([[def-countable]]).

[A2] A space is compact when every family of its open sets whose union is the whole space has a finite subfamily whose union is the whole space; a subset is compact when it is compact as a subspace ([[def-compact-space]], [[def-subspace-topology-top]]).

[L1] If $G$ is a function with domain a natural number $n$ all of whose values are nonempty sets, then the family of its values has a choice function; this is a theorem of ZF ([[lem-finite-choice]], [[def-choice-function]]).

[L2] In a Hausdorff space a point and a disjoint compact set have disjoint open neighbourhoods, two disjoint compact sets have disjoint open neighbourhoods, and every compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Verification

**Proof technique:** direct.

1.1 List $F$ as $y_0, \dots, y_{n-1}$ for a natural number $n$, and let $\mathcal{U}$ be a family of sets open in the subspace $F$ whose union is $F$. [A1, A2]

2.1 For each $i < n$ the set $\mathcal{U}_i := \{\, O \in \mathcal{U} : y_i \in O \,\}$ is nonempty, since the union of $\mathcal{U}$ is $F$ and $y_i \in F$; so by [L1] applied to the function $i \mapsto \mathcal{U}_i$ on $n$ there is a choice function on the family of these sets, and it supplies $O_i \in \mathcal{U}_i$ for every $i < n$. [step 1.1, L1, choose]

3.1 The finitely many sets $O_0, \dots, O_{n-1}$ lie in $\mathcal{U}$ and their union contains every $y_i$, hence is $F$; as $\mathcal{U}$ was arbitrary, $F$ is compact, which is claim 1. [step 1.1, step 2.1, A2]

4.1 If $X$ is Hausdorff then, $F$ being compact by step 3.1, [L2] separates $F$ from any point of $X \setminus F$ by disjoint open sets, separates $F$ from any disjoint finite subset of $X$ likewise, and makes $F$ closed in $X$. This is claim 2. [step 3.1, L2] ∎

## Remarks

- **Clause 2 recovers the $T_1$ behaviour of a Hausdorff space by a different route.** That every finite subset of a Hausdorff space is closed is usually read off from the separation axioms; here it arrives as a special case of a compactness statement, and the two readings agree, as they must.

- **Where the finiteness of $F$ is used.** Only in step 2.1, and only to make the selection a finite one. The same argument with an infinite $F$ would need a genuine choice principle and would in any case fail at step 3.1, an infinite index set producing no finite subcover.

- **The example is the smallest non-trivial instance of the compact separation clauses.** It needs no compactness hypothesis on $X$ and no cover argument beyond the one above, so it is the case in which the clauses of [[thm-compact-subset-of-a-hausdorff-space-is-closed]] can be checked against intuition before being used on genuinely compact sets.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so that $$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$ is itself the set of its predecessors.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let $S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose values are nonempty sets. Then the family of its values, $\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function ([[def-choice-function]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-choice-function",
      "source_section": "Definition",
      "quote": "Let $\\mathcal{F}$ be a family of sets, every member of which is nonempty. A **choice function** for $\\mathcal{F}$ is a function ([[def-function]]) $$g : \\mathcal{F} \\to \\bigcup \\mathcal{F} \\qquad \\text{such that} \\qquad g(S) \\in S \\ \\text{ for every } S \\in \\mathcal{F}.$$ Given a set $X$, a **choice function on $X$** means a choice function for the family $\\mathcal{P}(X) \\setminus \\{\\emptyset\\}$ ([[def-power-set]], [[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-compact-subset-of-a-hausdorff-space-is-closed",
      "source_section": "Statement",
      "quote": "4. **In a compact Hausdorff space the two classes coincide.** If in addition $(X, \\mathcal{T})$ is compact, then a subset of $X$ is compact if and only if it is closed.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "List $F$ as $y_0, \\dots, y_{n-1}$ for a natural number $n$, and let $\\mathcal{U}$ be a family of sets open in the subspace $F$ whose union is $F$. [A1, A2]",
      "step": "1.1",
      "inputs": [
        "A1",
        "A2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For each $i < n$ the set $\\mathcal{U}_i := \\{\\, O \\in \\mathcal{U} : y_i \\in O \\,\\}$ is nonempty, since the union of $\\mathcal{U}$ is $F$ and $y_i \\in F$; so by [L1] applied to the function $i \\mapsto \\mathcal{U}_i$ on $n$ there is a choice function on the family of these sets, and it supplies $O_i \\in \\mathcal{U}_i$ for every $i < n$. [step 1.1, L1, choose]",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The finitely many sets $O_0, \\dots, O_{n-1}$ lie in $\\mathcal{U}$ and their union contains every $y_i$, hence is $F$; as $\\mathcal{U}$ was arbitrary, $F$ is compact, which is claim 1. [step 1.1, step 2.1, A2]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "A2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "If $X$ is Hausdorff then, $F$ being compact by step 3.1, [L2] separates $F$ from any point of $X \\setminus F$ by disjoint open sets, separates $F$ from any disjoint finite subset of $X$ likewise, and makes $F$ closed in $X$. This is claim 2. [step 3.1, L2] ∎",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "steps 1.1 through 3.1 allow n=0 and make the finite subcover and finite-choice argument vacuous"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton-space or singleton-subset instance is included and all separation conditions become vacuous or immediate"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 through 4.1 include the empty and singleton finite-subset cases"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1 applies finite choice to sets proved nonempty from the cover condition; n=0 is vacuous"
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "declared_target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
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
    "source": "ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space",
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

## Full text of every cited or declared item (8)

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

### `thm-compact-subset-of-a-hausdorff-space-is-closed`

````markdown
---
id: thm-compact-subset-of-a-hausdorff-space-is-closed
kind: theorem
title: "In a Hausdorff space a point and a disjoint compact set, and two disjoint compact sets, have disjoint open neighbourhoods; hence every compact subset is closed, and in a compact Hausdorff space the compact subsets are exactly the closed ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-hausdorff-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: [thm-compact-hausdorff-separation]
landmark: true
short: "compact sets separate in a Hausdorff space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a Hausdorff topological space
([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in
[[def-compact-space]]. Then:

1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is
   compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with
   $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact
   and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with
   $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$.
4. **In a compact Hausdorff space the two classes coincide.** If in addition
   $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if
   it is closed.

**The proof is written choice-free, and that is not a stylistic preference.** The
textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$",
which is a selection over an arbitrary index set and therefore an appeal to the
full Axiom of Choice. What is done below instead is to take the family of **all**
open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by
a formula, with nothing selected — extract a finite subcover from it, and only
then make finitely many selections, which [[lem-finite-choice]] supplies as a
theorem of ZF.

## Facts & Assumptions

**Given:** A Hausdorff topological space $(X, \mathcal{T})$.

[A1] For all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[L1] $\varnothing$ and $X$ are open, an arbitrary union of open sets is open, the intersection of finitely many open sets is open when at least one is taken, and a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L2] A subset $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix a compact $K \subseteq X$ and a point $x \in X \setminus K$, and put $\mathcal{V} := \{\, V \in \mathcal{T} : U \cap V = \varnothing \text{ for some } U \in \mathcal{T} \text{ with } x \in U \,\}$, a family cut out by a property of $V$ alone and not by any selection. [construct]

2.1 $K \subseteq \bigcup \mathcal{V}$: given $y \in K$ we have $y \ne x$, since $x \notin K$, so [A1] provides $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$; that $V$ belongs to $\mathcal{V}$ and contains $y$. [A1, step 1.1]

3.1 If $K = \varnothing$ then $U := X$ and $V := \varnothing$ satisfy claim 1; otherwise [L2] applied to the family $\mathcal{V}$ gives $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $K \subseteq V_0 \cup \dots \cup V_n$. [L1, L2, step 1.1, step 2.1]

4.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{T} : x \in U \text{ and } U \cap V_j = \varnothing \,\}$ is nonempty, because $V_j \in \mathcal{V}$; and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{T}$ with $x \in U_j$ and $U_j \cap V_j = \varnothing$ for every $j \le n$. [L3, step 3.1]

5.1 Put $U := U_0 \cap \dots \cap U_n$ and $V := V_0 \cup \dots \cup V_n$; both are open by [L1], $x \in U$ because $x \in U_j$ for every $j$, $K \subseteq V$ by step 3.1, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $V_j$ and in $U \subseteq U_j$, contradicting $U_j \cap V_j = \varnothing$. So claim 1 holds. [L1, step 3.1, step 4.1]

6.1 For claim 3 let $K \subseteq X$ be compact and put $G := \bigcup \{\, W \in \mathcal{T} : W \cap K = \varnothing \,\}$, which is open by [L1]. Every member of the union misses $K$, so $G \subseteq X \setminus K$; conversely for $x \in X \setminus K$ claim 1, proved at step 5.1, gives disjoint open $U \ni x$ and $V \supseteq K$, whence $U \cap K = \varnothing$ and $x \in U \subseteq G$. So $G = X \setminus K$ is open, $K$ is closed, and claim 3 holds. [L1, step 5.1]

6.2 For claim 2 let $K, L \subseteq X$ be compact with $K \cap L = \varnothing$, and put $\mathcal{W} := \{\, W \in \mathcal{T} : V \cap W = \varnothing \text{ for some } V \in \mathcal{T} \text{ with } K \subseteq V \,\}$, again cut out by a property. Then $L \subseteq \bigcup \mathcal{W}$: for $y \in L$ we have $y \notin K$, so claim 1, proved at step 5.1, gives disjoint open $U \ni y$ and $V \supseteq K$, and that $U$ lies in $\mathcal{W}$ and contains $y$. [step 5.1, construct]

7.1 If $L = \varnothing$ then $U := \varnothing$ and $V := X$ satisfy claim 2; otherwise [L2] applied to $\mathcal{W}$ gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $L \subseteq W_0 \cup \dots \cup W_m$. [L1, L2, step 6.2]

8.1 For each $j \le m$ the set $T_j := \{\, V \in \mathcal{T} : K \subseteq V \text{ and } V \cap W_j = \varnothing \,\}$ is nonempty, because $W_j \in \mathcal{W}$; and $j \mapsto T_j$ is a function with domain the natural number $\sigma(m)$, so a choice function for its values supplies $V_0, \dots, V_m \in \mathcal{T}$ with $K \subseteq V_j$ and $V_j \cap W_j = \varnothing$ for every $j \le m$. [L3, step 7.1]

9.1 Put $U := W_0 \cup \dots \cup W_m$ and $V := V_0 \cap \dots \cap V_m$; both are open by [L1], $L \subseteq U$ by step 7.1, $K \subseteq V$ because $K \subseteq V_j$ for every $j$, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $W_j$ and in $V \subseteq V_j$, contradicting $V_j \cap W_j = \varnothing$. So claim 2 holds. [L1, step 7.1, step 8.1]

10.1 For claim 4 assume $(X, \mathcal{T})$ is also compact: a compact subset of $X$ is closed by step 6.1, and a closed subset of $X$ is compact by [L4], so the two classes of subsets coincide; with claims 1, 2 and 3 settled at steps 5.1, 9.1 and 6.1 the theorem is proved. [L4, step 6.1, step 9.1] ∎

## Remarks

**Where each hypothesis is spent.** The Hausdorff condition is used exactly once, at step 2.1, to know that the family $\mathcal{V}$ covers $K$; compactness of $K$ is used exactly once, at step 3.1, to cut that cover down to finitely many members. Claim 2 then reuses claim 1 in the same shape, with the roles of point and compact set played by a point of $L$ and the compact set $K$.

**Why the family is defined and not chosen.** For each $y \in K$ the Hausdorff condition asserts that *some* pair $(U, V)$ exists; it provides no rule for naming one. A proof that writes $U_y$ and $V_y$ has selected a pair for every $y \in K$ at once, and for an arbitrary compact $K$ that is the Axiom of Choice. Collecting instead every $V$ that works for *some* $U$ replaces the selection by a formula, and the only selection left is over the finite index set $\sigma(n)$, where [[lem-finite-choice]] applies.

**Claim 3 fails without the Hausdorff hypothesis**, and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure with a witness. Claim 4 is the converse pairing: closedness is enough for compactness only when the ambient space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and compactness is enough for closedness only when it is Hausdorff.
````

