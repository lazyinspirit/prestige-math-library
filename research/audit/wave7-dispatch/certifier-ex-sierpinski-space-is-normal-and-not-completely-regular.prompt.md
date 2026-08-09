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

## Assigned repair — `ex-sierpinski-space-is-normal-and-not-completely-regular`

Item path: `items/ex-sierpinski-space-is-normal-and-not-completely-regular.md`

Normalized final-text SHA-256 at dispatch: `ce644d645afb9f315bedfdfec1f50c14cd215ade9f9ddb2bea531084c6e036f9`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-separation-urysohn.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "fs-every-normal-space-is-completely-regular",
    "declared_target": "fs-every-normal-space-is-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-urysohns-lemma-closes-the-separation-chain",
    "declared_target": "cor-urysohns-lemma-closes-the-separation-chain",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-regular-implies-regular",
    "declared_target": "thm-completely-regular-implies-regular",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-regular-and-t3-spaces",
    "declared_target": "def-regular-and-t3-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: ex-sierpinski-space-is-normal-and-not-completely-regular
kind: example
title: "Sierpinski space is normal and not completely regular, so the $T_1$ hypothesis in the Urysohn corollary is not decoration"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-every-normal-space-is-completely-regular, cor-urysohns-lemma-closes-the-separation-chain,
       def-standard-topologies, def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces, def-t0-and-t1-spaces]
justified_by: []
aliases: []
landmark: false
short: "Sierpinski: normal, not $T_1$, not completely regular"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Example

Sierpinski space $S = \{a,b\}$, $a \ne b$, with
$\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$
([[def-standard-topologies]]) is normal ([[def-normal-and-t4-spaces]]) but not
completely regular ([[def-completely-regular-and-tychonoff-spaces]]), by
[[fs-every-normal-space-is-completely-regular]]. The refutation there in fact
shows $S$ is not even regular — the only open set containing $a$ is $S$ itself —
and complete regularity then fails because it implies regularity
([[thm-completely-regular-implies-regular]]). And $S$ is not $T_1$: the
singleton $\{b\}$ is not closed in $S$.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] proves
its arrow for a normal $T_1$ space and not for a bare normal space: $S$ is a
normal space for which the corollary's conclusion — complete regularity —
genuinely fails, and the one hypothesis it lacks is $T_1$.

## Facts & Assumptions

**Given:** Sierpinski space $S$ as above.

[L1] $S$ is normal and not completely regular, with witness argument as in [[fs-every-normal-space-is-completely-regular]].

[L2] $S$ is not $T_1$ ([[def-t0-and-t1-spaces]]): the only closed sets of $S$ are $S, \{a\}, \varnothing$, so the singleton $\{b\}$ is not closed.

## Verification

**Proof technique:** direct.

1.1 By [L1], $S$ is normal and not completely regular. [L1]

1.2 By [L2], $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of $S$, so $S$ fails $T_1$. [L2]

2.1 By steps 1.1 and 1.2: $S$ is a normal space that is not $T_1$ and not completely regular, so it does not meet the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] (normal *and* $T_1$), and indeed its conclusion fails for $S$; dropping $T_1$ from that corollary would make it false, with $S$ as the witness. [step 1.1, step 1.2] ∎

## Remarks

- **This is not a new computation.** Every fact used above is proved in [[fs-every-normal-space-is-completely-regular]]; this item only reads that refutation as the positive example it also is, and connects it to the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] by name.
````
