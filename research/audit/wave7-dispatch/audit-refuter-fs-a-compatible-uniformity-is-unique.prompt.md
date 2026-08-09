# Audit proof-refuter brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

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
  "finite_smoke": []
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

