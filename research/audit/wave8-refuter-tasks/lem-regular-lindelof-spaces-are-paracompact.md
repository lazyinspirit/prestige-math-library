## Selection reasons

- high risk (5): 4 declared dependencies; 4 cited facts; 6 numbered proof steps

## Target item — `lem-regular-lindelof-spaces-are-paracompact`

Normalized current SHA-256: `e60eb4e40e877d109716fb1e089fd3956d6e0f0fba73a1377bbf177a1e0a352c`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-regular-lindelof-spaces-are-paracompact
kind: lemma
title: "Under countable choice, every regular Lindelöf space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-paracompact-space, def-compactness-variants, lem-regularity-via-closed-neighbourhoods, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every regular Lindelöf topological space
is paracompact.

## Facts & Assumptions

**Given:** Countable choice, a regular Lindelöf space $X$, and an open cover $\mathcal U$.

[A1] Countable choice selects from a countably indexed family of nonempty sets ([[def-countable-choice]]).

[L1] If $x\in U$ with $U$ open in a regular space, then some open $V$ satisfies $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F1] Lindelöfness gives an at most countable subcover, and paracompactness asks for a locally finite open refinement ([[def-compactness-variants]], [[def-paracompact-space]]).

## Proof

**Proof technique:** constructive.

1.1 The family of all open $V$ for which $\overline V\subseteq U$ for some $U\in\mathcal U$ covers $X$ by [L1]; by Lindelöfness take a sequence $V_0,V_1,\ldots$ covering $X$. [L1, F1, construct]

2.1 By [A1], choose $U_n\in\mathcal U$ with $\overline{V_n}\subseteq U_n$ for each $n$. [A1, step 1.1, choose]

3.1 Put $W_n:=U_n\setminus\bigcup_{i<n}\overline{V_i}$. Each $W_n$ is open and lies in $U_n$. [step 2.1, construct]

4.1 The $W_n$ cover $X$: if $n$ is the least index with $x\in U_n$, then $x\notin\overline{V_i}$ for $i<n$, since $\overline{V_i}\subseteq U_i$, and hence $x\in W_n$. [step 1.1, step 2.1, step 3.1]

4.2 The cover is locally finite: for $x\in V_k$, the neighbourhood $V_k$ is disjoint from $W_n$ for every $n>k$, while it can meet only $W_0,\ldots,W_k$. [step 3.1]

5.1 Thus $\{W_n\}$ is a locally finite open refinement of $\mathcal U$, and [F1] proves paracompactness. [F1, step 3.1, step 4.1, step 4.2, discharge-construct] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-regular-lindelof-spaces-are-paracompact",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.csun.edu/~ac53971/research/topology_262.pdf",
    "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
  ],
  "rationale": "The sources state that every regular Lindelöf space is paracompact and use the same countable shrinking/difference construction. The item makes Countable Choice explicit and rewrites the indexing and least-index argument.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-regularity-via-closed-neighbourhoods",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nclosures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in\n[[def-neighbourhood-top]], so that a neighbourhood need not be open. The\nfollowing three conditions are equivalent.\n\n- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).\n- **(b)** For every $x \\in X$ and every open $U$ with $x \\in U$ there is an open\n  $V$ with\n  $$x \\in V \\subseteq \\overline{V} \\subseteq U .$$\n- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**\n  neighbourhoods: for every $x \\in X$ and every neighbourhood $N$ of $x$ there is\n  a closed neighbourhood $K$ of $x$ with $K \\subseteq N$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-compactness-variants",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nopen covers, subcovers, finiteness and compactness as in [[def-compact-space]],\nand *finite*, *at most countable* and *uncountable* as in [[def-countable]].\n\n- $(X, \\mathcal{T})$ is **countably compact** when every open cover of $X$ that\n  is at most countable has a finite subcover.\n- $(X, \\mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at\n  most countable subcover.\n- $(X, \\mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in\n  $X$, that is every function $x : \\mathbb{N} \\to X$\n  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to\n  a point of $X$, the index map $n : \\mathbb{N} \\to \\mathbb{N}$ being strictly\n  increasing ([[def-sequence]], [[lem-index-map-grows]]).\n- $(X, \\mathcal{T})$ is **limit point compact** when every infinite subset\n  $A \\subseteq X$ has a limit point in $X$, that is a point $p \\in X$ every\n  neighbourhood $N$ of which satisfies $N \\cap (A \\setminus \\{p\\}) \\ne \\varnothing$\n  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in\n  the sense of [[def-countable]].\n- $(X, \\mathcal{T})$ is **$\\sigma$-compact** when there is an at most countable\n  family $\\mathcal{K}$ of compact subsets of $X$ with $X = \\bigcup \\mathcal{K}$.\n- A subset $A \\subseteq X$ is **relatively compact in $X$** when its closure\n  $\\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of\n  $X$.\n\nA subset $A \\subseteq X$ is called countably compact, Lindel&ouml;f,\nsequentially compact, limit point compact or $\\sigma$-compact when the subspace\n$(A, \\mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for\ncompactness. **Relative compactness is the exception and is deliberately not of\nthat form**: it is a statement about $A$ *inside* $X$, since $\\overline{A}$ is\ncomputed in $X$, and a set may be relatively compact in one space and not in\nanother that contains it. Every other notion on this list is intrinsic to the\nsubspace.\n\n**The countable covers may be listed.** A nonempty at most countable family\n$\\mathcal{U}$ admits a surjection $\\mathbb{N} \\to \\mathcal{U}$\n([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for\nevery sequence $(U_n)_{n \\in \\mathbb{N}}$ of open sets with\n$X = \\bigcup_{n \\in \\mathbb{N}} U_n$ there are finitely many indices whose sets\nalready cover $X$. That surjection is produced from the countability assumption\nalone and no choice principle is involved; the empty family covers only the empty\nspace, which is compact anyway.\n\n**Indexing starts at $0$.** A sequence here is a function on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is\n$(x_{n_j})_{j \\in \\mathbb{N}}$ with $n_0 < n_1 < \\cdots$ and $n_j \\ge j$\n([[lem-index-map-grows]]). An index range taken from a text that starts at $1$\nmust be shifted before it is used here.\n\n**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying\nits metric topology $\\mathcal{T}_d$ ([[def-metric-topology]],\n[[def-metrizable-space]]). Then the three notions that\n[[def-metric-compactness-variants]] defines metrically are the three defined\nabove, read in $(X, \\mathcal{T}_d)$:\n\n- *Countably compact.* The open sets used there are the members of\n  $\\mathcal{T}_d$, so the at most countable open covers are the same families and\n  the condition is the same condition, exactly as for compactness itself\n  ([[thm-compactness-agrees-with-metric-compactness]]).\n- *Sequentially compact.* Convergence of a sequence in the metric sense and in\n  the sense of [[def-sequence-convergence-top]] agree on a metric topology,\n  because the balls around a point are a neighbourhood base at it\n  ([[def-metrizable-space]]); the subsequences quantified over are the same.\n- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense\n  when every ball around $p$ meets $A \\setminus \\{p\\}$, and in the sense above\n  when every neighbourhood does; the same neighbourhood base makes the two\n  conditions one ([[def-metrizable-space]],\n  [[def-interior-closure-boundary-top]]).\n\nSo no statement below about a metrizable space introduces a second notion, and\nevery theorem of the metric development about these three properties may be\nquoted here once a metric inducing the topology is named. Lindel&ouml;fness,\n$\\sigma$-compactness and relative compactness have no metric counterpart in this\nlibrary and are defined here for the first time.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-paracompact-space",
      "source_section": "Definition",
      "quote": "A topological space $X$ is **paracompact** when every open cover $\\mathcal U$\nof $X$ has an open refinement $\\mathcal V$ which covers $X$ and is locally\nfinite. In symbols, for every open cover $\\mathcal U$ there is a locally finite\nopen cover $\\mathcal V$ such that every $V\\in\\mathcal V$ lies in some\n$U\\in\\mathcal U$.\n\nNo separation axiom is included in this definition. Some sources reserve the\nword *paracompact* for the conjunction of this covering property with\nHausdorffness. Here the covering property is named by itself, and any use of\nHausdorffness is stated explicitly.",
      "uses": [
        "1.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The family of all open $V$ for which $\\overline V\\subseteq U$ for some $U\\in\\mathcal U$ covers $X$ by [L1]; by Lindelöfness take a sequence $V_0,V_1,\\ldots$ covering $X$. [L1, F1, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "F1",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [A1], choose $U_n\\in\\mathcal U$ with $\\overline{V_n}\\subseteq U_n$ for each $n$. [A1, step 1.1, choose]",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Put $W_n:=U_n\\setminus\\bigcup_{i<n}\\overline{V_i}$. Each $W_n$ is open and lies in $U_n$. [step 2.1, construct]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "construct"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The $W_n$ cover $X$: if $n$ is the least index with $x\\in U_n$, then $x\\notin\\overline{V_i}$ for $i<n$, since $\\overline{V_i}\\subseteq U_i$, and hence $x\\in W_n$. [step 1.1, step 2.1, step 3.1]",
      "step": "4.1",
      "inputs": [
        "1.1",
        "2.1",
        "3.1"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "The cover is locally finite: for $x\\in V_k$, the neighbourhood $V_k$ is disjoint from $W_n$ for every $n>k$, while it can meet only $W_0,\\ldots,W_k$. [step 3.1]",
      "step": "4.2",
      "inputs": [
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Thus $\\{W_n\\}$ is a locally finite open refinement of $\\mathcal U$, and [F1] proves paracompactness. [F1, step 3.1, step 4.1, step 4.2, discharge-construct]",
      "step": "5.1",
      "inputs": [
        "F1",
        "3.1",
        "4.1",
        "4.2",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: if X is empty, the empty refinement proves the conclusion immediately; steps 1.1--5.1 cover the nonempty case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 3.1 and 4.1 include n=0, where the preceding finite union is empty."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--5.1 allow a finite one-set subcover to be repeated as a sequence."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and steps 1.1--5.1 include X empty, U_n=X, and repeated V_n or U_n."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 3.1--4.2 check n=0, the least index, and the strict tail n>k."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 gets an at-most-countable subcover from Lindelofness; step 2.1 uses A1 only on nonempty containing-member families."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-regular-lindelof-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-paracompact-space",
    "declared_target": "def-paracompact-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-regular-lindelof-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-compactness-variants",
    "declared_target": "def-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-regular-lindelof-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-regularity-via-closed-neighbourhoods",
    "declared_target": "lem-regularity-via-closed-neighbourhoods",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-regular-lindelof-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (4)

### `def-compactness-variants`

````markdown
---
id: def-compactness-variants
kind: definition
title: "Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-countable, lem-countable-iff-surjection-from-n, def-sequence-convergence-top, def-sequence, def-interior-closure-boundary-top, def-metric-compactness-variants, def-subspace-topology-top, def-topological-space, lem-index-map-grows, def-metrizable-space, def-metric-topology, thm-compactness-agrees-with-metric-compactness]
justified_by: []
aliases: [def-lindelof, def-sigma-compact, def-relatively-compact, def-countably-compact-top, def-sequentially-compact-top, def-limit-point-compact-top]
landmark: true
short: "the compactness variants"
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
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

## Remarks

**None of the conditions listed above is compactness by definition.** Countable
compactness restricts the covers tested; Lindel&ouml;fness weakens the conclusion
from finite to at most countable; sequential compactness speaks about sequences
instead of covers; limit point compactness speaks about subsets;
$\sigma$-compactness asks only that the space be assembled from at most countably
many compact pieces; relative compactness is a condition on a subset of an
ambient space. Which implications hold between them, and which need a choice
principle, is [[thm-compactness-variants-hierarchy]]; that some of them fail
to be equivalent is witnessed by the false statements at the end of this page.

**Why $\sigma$-compactness is not a compactness property at all.** The real line
is $\sigma$-compact, being the union of the compact intervals $[-n, n]$, and it is
not compact; the definition is useful precisely because it names a class of
spaces built out of compact pieces without being compact. The same remark
explains why a $\sigma$-compact space need not be countably compact.

**Limit point compactness is sometimes called the Bolzano-Weierstrass
property**, and *countably compact* is occasionally used for what is called limit
point compact here. This library uses the four names above with the meanings
given, and writes the condition out whenever the risk of confusion is real.
````

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `def-paracompact-space`

````markdown
---
id: def-paracompact-space
kind: definition
title: "Paracompactness: every open cover has a locally finite open refinement, with no separation axiom built into the word"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-compact-space]
justified_by: []
aliases: [def-paracompactness]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **paracompact** when every open cover $\mathcal U$
of $X$ has an open refinement $\mathcal V$ which covers $X$ and is locally
finite. In symbols, for every open cover $\mathcal U$ there is a locally finite
open cover $\mathcal V$ such that every $V\in\mathcal V$ lies in some
$U\in\mathcal U$.

No separation axiom is included in this definition. Some sources reserve the
word *paracompact* for the conjunction of this covering property with
Hausdorffness. Here the covering property is named by itself, and any use of
Hausdorffness is stated explicitly.

## Remarks

The finite-subcover condition defining compactness is recalled in
[[def-compact-space]]. A finite family is locally finite, but compactness and
paracompactness remain distinct definitions because their conclusions quantify
over different refinements of a cover.
````

### `lem-regularity-via-closed-neighbourhoods`

````markdown
---
id: lem-regularity-via-closed-neighbourhoods
kind: lemma
title: "A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-and-t3-spaces, def-neighbourhood-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "regularity by closed neighbourhoods"
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
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
[[def-neighbourhood-top]], so that a neighbourhood need not be open. The
following three conditions are equivalent.

- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).
- **(b)** For every $x \in X$ and every open $U$ with $x \in U$ there is an open
  $V$ with
  $$x \in V \subseteq \overline{V} \subseteq U .$$
- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**
  neighbourhoods: for every $x \in X$ and every neighbourhood $N$ of $x$ there is
  a closed neighbourhood $K$ of $x$ with $K \subseteq N$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a point $x \in X$, an open set $U$ with $x \in U$, a neighbourhood $N$ of $x$, and a closed set $C$ with $x \notin C$.

[A1] $X$ is regular when for every closed $C$ and every $x \notin C$ there are disjoint open $U_0 \ni x$ and $V_0 \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] $N$ is a neighbourhood of $x$ exactly when some open $W$ satisfies $x \in W \subseteq N$; a set is open exactly when it is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $x \in \operatorname{int}(K)$ exactly when $K$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]]).

[L4] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a) and let $U$ be open with $x \in U$; then $C := X \setminus U$ is closed by [L4] and $x \notin C$, so [A1] gives disjoint open $V \ni x$ and $W \supseteq C$. [A1, L4, assume-hyp]

1.2 Assume (b) and let $N$ be a neighbourhood of $x$; fix an open $U$ with $x \in U \subseteq N$ by [L1], and let $V$ be as in (b), so $x \in V \subseteq \overline{V} \subseteq U \subseteq N$. [L1, assume-hyp]

1.3 Assume (c) and let $C$ be closed with $x \notin C$; then $X \setminus C$ is open by [L4] and contains $x$, hence is a neighbourhood of $x$ by [L1], so (c) gives a closed neighbourhood $K$ of $x$ with $K \subseteq X \setminus C$. [L1, L4, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V$ and $W$ are disjoint, and $X \setminus W$ is closed by [L4], so $\overline{V} \subseteq X \setminus W$ by [L2]; and $X \setminus W \subseteq X \setminus C = U$ because $C \subseteq W$. [step 1.1, L2, L4]

2.2 Under step 1.2: $\overline{V}$ is a closed set containing the open $V \ni x$, so it is a neighbourhood of $x$ by [L1], and it is a closed neighbourhood of $x$ contained in $N$. [step 1.2, L1, L2]

2.3 Under step 1.3: put $V_0 := \operatorname{int}(K)$, which is open and contains $x$ by [L3] since $K$ is a neighbourhood of $x$; and put $W_0 := X \setminus K$, which is open by [L4] since $K$ is closed. [step 1.3, L3, L4]

3.1 Step 2.1 gives $x \in V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives, for every neighbourhood $N$ of $x$, a closed neighbourhood of $x$ inside $N$, so (b) implies (c). [step 2.2]

3.3 Under step 2.3: $V_0 \cap W_0 = \operatorname{int}(K) \cap (X \setminus K) = \varnothing$ because $\operatorname{int}(K) \subseteq K$ by [L3], and $C \subseteq X \setminus K = W_0$ because $K \subseteq X \setminus C$; so $V_0$ and $W_0$ are disjoint open sets containing $x$ and $C$ respectively, and (c) implies (a). [step 2.3, A1, L3]

4.1 By steps 3.1, 3.2 and 3.3 the three conditions (a), (b) and (c) are equivalent. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Clause (b) is the working form.** Every application of regularity below uses it in the shape "shrink an open set around a point so that even its closure stays inside", which is what makes regularity behave like a one-sided version of the normality shrinking lemma proved later on this page.

- **Clause (c) is what makes a clopen basis decisive.** If a space has a basis of clopen sets then the basic sets containing a point are closed neighbourhoods of it and form a neighbourhood base ([[def-neighbourhood-top]]), so (c) holds and the space is regular with no further work. That is exactly the route by which the ordinal spaces later on this page are shown to be regular.

- **No separation hypothesis is used anywhere above.** Points need not be closed, and the lemma is a statement about regularity alone; combining it with $T_1$ is the separate step that produces $T_3$.
````

