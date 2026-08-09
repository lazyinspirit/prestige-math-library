## Selection reasons

- high risk (5): 3 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `fs-a-compatible-uniformity-is-unique`

Normalized current SHA-256: `0a65a88ce32e83ad4f467019d0830a4117f684654968367347dc778f93d0d95e`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-a-compatible-uniformity-is-unique
kind: false-statement
title: "FALSE: every uniformizable topology has a unique compatible uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic, def-uniformizable-space, def-uniform-embedding-and-uniform-isomorphism]
aliases: []
landmark: false
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

**FALSE.** Every uniformizable topology has a unique compatible uniformity.

## Facts & Assumptions

**Given:** The usual topology and usual metric uniformity $\mathcal U$ on $\mathbb R$.

[L1] The map $h(x)=x/(1+|x|)$ is a homeomorphism $\mathbb R\to(-1,1)$ but not a uniform isomorphism for the usual metric uniformities ([[ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic]]).

[L2] Uniformizable means induced by a uniformity, and a uniform isomorphism has uniformly continuous inverse ([[def-uniformizable-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 Pull the usual uniformity of $(-1,1)$ back along the homeomorphism $h$, obtaining a uniformity $\mathcal V$ on the underlying set $\mathbb R$. [L1]

2.1 Since $h$ is a homeomorphism, $\mathcal V$ induces the usual topology of $\mathbb R$, so that topology is uniformizable. [step 1.1, L2]

2.2 If $\mathcal V=\mathcal U$, then $h$ would be a uniform isomorphism from $\mathcal U$ onto the usual uniformity of $(-1,1)$, contrary to [L1]. [step 1.1, L1, L2]

3.1 Thus one topology has distinct compatible uniformities, refuting the statement. [step 2.1, step 2.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "fs-a-compatible-uniformity-is-unique",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
  ],
  "rationale": "ESCALATED TO ALPHA. Nonuniqueness of compatible uniformities on noncompact spaces is standard; Wodzicki proves uniqueness only compactly and gives continuous-not-uniformly-continuous witnesses. No source states this exact false universal plus pullback refutation. ALPHA CONCURRENCE: A topology need not determine a unique compatible uniformity, and pulling back the interval's metric uniformity along the canonical homeomorphism gives the standard counterexample mechanism. The local false-statement package is established mathematics.",
  "alpha_concurred": true,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
      "source_section": "Example",
      "quote": "The function $h(x)=x/(1+|x|)$ maps $\\mathbb R$ onto $(-1,1)$ with inverse $h^{-1}(t)=t/(1-|t|)$. It is uniformly continuous, but its inverse is not.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniformizable-space",
      "source_section": "Definition",
      "quote": "A topological space is **uniformizable** if its topology is induced by some uniformity ([[thm-uniformity-induces-a-topology]]). It is **separated-uniformizable** if it is induced by a separated uniformity ([[def-separated-uniform-space]]).",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniform-embedding-and-uniform-isomorphism",
      "source_section": "Definition",
      "quote": "A map $f:X\\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].",
      "uses": [
        "2.1",
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Pull the usual uniformity of $(-1,1)$ back along the homeomorphism $h$, obtaining a uniformity $\\mathcal V$ on the underlying set $\\mathbb R$. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since $h$ is a homeomorphism, $\\mathcal V$ induces the usual topology of $\\mathbb R$, so that topology is uniformizable. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "If $\\mathcal V=\\mathcal U$, then $h$ would be a uniform isomorphism from $\\mathcal U$ onto the usual uniformity of $(-1,1)$, contrary to [L1]. [step 1.1, L1, L2]",
      "step": "2.2",
      "inputs": [
        "L1",
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Thus one topology has distinct compatible uniformities, refuting the statement. [step 2.1, step 2.2] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: any given uniform space has nonempty carrier under the library's proper-filter convention, and a topological group contains its identity"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no separate coincident-point, constant-map, or collapsed-parameter branch."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.1: strict entourage bounds, interval endpoints, and limiting boundary behavior were checked"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses formula-defined objects and fixed quantified data and makes no selection from an asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (5): 3 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Verified that the pullback uniformity V is well-defined (h is a bijection), that it induces the usual topology (initial uniformity topology equals initial topology for a homeomorphism), and that V ≠ U (equality would make h a uniform isomorphism under the usual metric uniformity, contradicting L1). The universal claim is refuted by a single valid counterexample; no empty, degenerate, or edge-case issues affect the reasoning. Checked surface: Read the title, public statement, all numbered refutation steps (1.1, 2.1, 2.2, 3.1), and the item contains no Remarks. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/fs-a-compatible-uniformity-is-unique--babd8dbce96fcb96.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-a-compatible-uniformity-is-unique",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "declared_target": "ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces-examples",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-compatible-uniformity-is-unique",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformizable-space",
    "declared_target": "def-uniformizable-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-a-compatible-uniformity-is-unique",
    "sourcePage": "uniform-spaces-examples",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-embedding-and-uniform-isomorphism",
    "declared_target": "def-uniform-embedding-and-uniform-isomorphism",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (3)

### `def-uniform-embedding-and-uniform-isomorphism`

````markdown
---
id: def-uniform-embedding-and-uniform-isomorphism
kind: definition
title: "Uniform embedding and uniform isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniformly-continuous-map, def-injection-surjection-bijection]
aliases: []
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A map $f:X\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].
````

### `def-uniformizable-space`

````markdown
---
id: def-uniformizable-space
kind: definition
title: "Uniformizable and separated-uniformizable topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-uniformity-induces-a-topology, def-separated-uniform-space, def-topological-space]
aliases: []
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Definition

A topological space is **uniformizable** if its topology is induced by some uniformity ([[thm-uniformity-induces-a-topology]]). It is **separated-uniformizable** if it is induced by a separated uniformity ([[def-separated-uniform-space]]).
````

### `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`

````markdown
---
id: ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic
kind: example
title: "The map $x\\mapsto x/(1+|x|)$ is a uniformly continuous homeomorphism from $\\mathbb{R}$ to $(-1,1)$ whose inverse is not uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-metric-uniformity-dictionary, def-uniform-embedding-and-uniform-isomorphism, def-homeomorphism-and-open-maps, lem-of-abs-value, cor-archimedean-reciprocal, lem-of-triangle-inequality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The function $h(x)=x/(1+|x|)$ maps $\mathbb R$ onto $(-1,1)$ with inverse $h^{-1}(t)=t/(1-|t|)$. It is uniformly continuous, but its inverse is not.

## Facts & Assumptions

**Given:** The usual metric uniformities on $\mathbb R$ and $(-1,1)$.

[L1] The metric dictionary translates metric uniform continuity into uniform continuity ([[lem-metric-uniformity-dictionary]]).

[L2] Absolute value is nonnegative ([[lem-of-abs-value]]) and satisfies the triangle inequality ([[lem-of-triangle-inequality]]).

[L3] The reciprocal form of the Archimedean property says that $1/n\to0$ ([[cor-archimedean-reciprocal]]).

## Verification

**Proof technique:** direct.

1.1 Direct algebra gives $|h(x)-h(y)|\le2|x-y|$, so $h$ is uniformly continuous; its displayed inverse and the usual open-interval formulas make it a homeomorphism. [L1, L2]

1.2 Put $a_n=n/(n+1)$ and $b_n=(n+1)/(n+2)$. Then $|a_n-b_n|\to0$, while $|h^{-1}(a_n)-h^{-1}(b_n)|=1$. [L2, L3]

2.1 Thus $h^{-1}$ is not uniformly continuous, so this homeomorphism is not a uniform isomorphism ([[def-uniform-embedding-and-uniform-isomorphism]], [[def-homeomorphism-and-open-maps]]). [step 1.1, step 1.2] ∎
````

