# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`

Item path: `items/lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space.md`

Normalized final-text SHA-256 at dispatch: `050cc5c6f9590d866b3ba33cc7f0fa0c335a12579e8b96fce0e124f5c1bed500`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "declared_target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "declared_target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformly-continuous-map",
    "declared_target": "def-uniformly-continuous-map",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformity-induces-a-topology",
    "declared_target": "thm-uniformity-induces-a-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space
kind: lemma
title: "The minimal Cauchy filters associated to points define a uniformly continuous dense canonical map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-interior-closure-boundary-top, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

The map $\eta:X\to\widehat X$ sending $x$ to the minimal Cauchy filter associated to its principal filter is uniformly continuous and has dense image. For every $x\in X$, every member of $\eta(x)$ contains $x$.

## Facts & Assumptions

**Given:** A uniform space $X$ and its minimal-Cauchy-filter space $\widehat X$.

[L1] Principal filters are Cauchy and have associated minimal Cauchy filters ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] The standard relations are entourages on $\widehat X$ ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L3] Entourage balls describe the induced topology and density is closure equal to the whole space ([[thm-uniformity-induces-a-topology]], [[def-interior-closure-boundary-top]]).

[L4] Symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\eta(x)$ to be the minimal filter associated to the principal filter $\mathcal P_x$ at $x$. Since $\eta(x)=m(\mathcal P_x)\subseteq\mathcal P_x$, every member of $\eta(x)$ contains $x$. [L1, construct]

1.2 Let $\widehat E[\mathcal F]$ be a basic neighbourhood. Choose a symmetric $D$ with $D^{\circ2}\subseteq E$, a $D$-small $A\in\mathcal F$, and $a\in A$. The point filter $\eta(a)$ contains $D[a]$, and $D[a]\times A\subseteq D^{\circ2}\subseteq E$, so $\eta(a)\in\widehat E[\mathcal F]$. Thus every basic neighbourhood meets $\eta[X]$. [L1, L2, L3, L4, choose]

2.1 Given a target basic entourage $\widehat E$, choose a symmetric $D$ with $D^{\circ3}\subseteq E$. If $(x,y)\in D$, then $D[x]\in\eta(x)$ and $D[y]\in\eta(y)$, while $D[x]\times D[y]\subseteq D^{\circ3}\subseteq E$. Hence $(\eta(x),\eta(y))\in\widehat E$, which proves uniform continuity. [step 1.1, L2, L4]

3.1 Thus every neighbourhood meets $\eta[X]$, so its closure is all of $\widehat X$ and the image is dense. [step 1.2, L3, discharge-construct] ∎
````
