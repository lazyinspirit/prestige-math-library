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

## Assigned repair — `thm-compact-hausdorff-open-cover-uniformity`

Item path: `items/thm-compact-hausdorff-open-cover-uniformity.md`

Normalized final-text SHA-256 at dispatch: `17022b44a16a9e4e77d5a778f3488ab17f61317ce55e486b468bfe606776b7ba`

Split reasons: ["body text","title"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "declared_target": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-cover-space",
    "declared_target": "def-uniform-cover-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "thm-compact-hausdorff-open-cover-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourage-and-uniform-cover-dictionary",
    "declared_target": "lem-entourage-and-uniform-cover-dictionary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-compact-hausdorff-open-cover-uniformity",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-compact-hausdorff-open-cover-uniformity
kind: theorem
title: "The covers admitting an open refinement form a compatible uniform-cover structure on a nonempty compact Hausdorff space; in particular every open cover is uniform"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-star-refinement-for-compact-hausdorff-spaces, def-uniform-cover-space, def-compact-space, def-hausdorff-space, lem-entourage-and-uniform-cover-dictionary, thm-uniformity-induces-a-topology]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

For a nonempty compact Hausdorff space, the covers that admit an open refinement form a compatible uniform-cover structure. In particular every open cover is uniform.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $X$.

[L1] Every open cover has a finite open star-refinement ([[lem-finite-star-refinement-for-compact-hausdorff-spaces]]).

[L2] A uniform-cover structure is closed under coarsening and common refinement and has star-refinements ([[def-uniform-cover-space]]).

[L3] A uniform-cover structure determines an entourage uniformity with basic relations $E_{\mathcal V}=\bigcup_{V\in\mathcal V}V\times V$, and entourage balls form neighbourhood bases for the induced topology ([[lem-entourage-and-uniform-cover-dictionary]], [[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak C$ be the covers admitting an open refinement. It is nonempty, since $\{X\}$ is open. [construct]

2.1 Coarsening preserves membership in $\mathfrak C$, and two open refinements have their intersection cover as a common open refinement. [step 1.1]

2.2 For $\mathcal V\in\mathfrak C$, take an open refinement and then its finite open star-refinement from [L1]; this is a star-refinement still witnessing membership in $\mathfrak C$. [L1, step 1.1]

3.1 Thus $\mathfrak C$ satisfies [L2]. Since every open cover refines itself, every open cover belongs to $\mathfrak C$. [step 2.1, step 2.2, L2]

4.1 The entourage uniformity recovered from $\mathfrak C$ by [L3] induces the original topology. If $\mathcal V\in\mathfrak C$, choose an open refinement $\mathcal W$; then $E_{\mathcal W}[x]=\operatorname{St}(x,\mathcal W)$ contains an open member through $x$, so the recovered entourage balls are neighbourhoods in the original topology. Conversely, if $x\in O$ with $O$ open, the open cover $\{O,X\setminus\{x\}\}$ belongs to $\mathfrak C$, since Hausdorffness makes $\{x\}$ closed. By [L1] choose a finite open star-refinement $\mathcal W$, which belongs to $\mathfrak C$, and choose $W_0\in\mathcal W$ containing $x$. The star of $W_0$ lies in $O$, rather than in $X\setminus\{x\}$, and therefore $E_{\mathcal W}[x]=\operatorname{St}(x,\mathcal W)\subseteq\operatorname{St}(W_0,\mathcal W)\subseteq O$. [step 3.1, L1, L3]

5.1 Hence the structure is compatible with the given topology, and every open cover is uniform. [step 3.1, step 4.1] ∎
````
