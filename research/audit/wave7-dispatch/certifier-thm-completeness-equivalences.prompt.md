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

## Assigned repair — `thm-completeness-equivalences`

Item path: `items/thm-completeness-equivalences.md`

Normalized final-text SHA-256 at dispatch: `95ea5483cd72b0f13c891ea5295e2f6fdddb5550d2de656ef385e28c3afc55d9`

Split reasons: ["body text","title"]

Provenance ledger: `wave7-real-analysis-completeness-limits.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-completeness-properties",
    "declared_target": "def-completeness-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-lub-implies-nested-intervals",
    "declared_target": "lem-lub-implies-nested-intervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-nested-intervals-and-archimedean-imply-bw",
    "declared_target": "lem-nested-intervals-and-archimedean-imply-bw",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-bw-implies-archimedean",
    "declared_target": "lem-bw-implies-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-bw-implies-cauchy-complete",
    "declared_target": "lem-bw-implies-cauchy-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-cauchy-complete-and-archimedean-imply-mct",
    "declared_target": "lem-cauchy-complete-and-archimedean-imply-mct",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-mct-implies-archimedean",
    "declared_target": "lem-mct-implies-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-mct-implies-lub",
    "declared_target": "lem-mct-implies-lub",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-completeness-equivalences
kind: theorem
title: "For an ordered field the five completeness properties are equivalent, provided the Archimedean property is assumed alongside nested intervals and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-archimedean-field, lem-lub-implies-nested-intervals, lem-nested-intervals-and-archimedean-imply-bw, lem-bw-implies-archimedean, lem-bw-implies-cauchy-complete, lem-cauchy-complete-and-archimedean-imply-mct, lem-mct-implies-archimedean, lem-mct-implies-lub]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with the five properties (LUB), (MCT), (NIP), (BW),
(CC) and the Archimedean property (ARCH) as in
[[def-completeness-properties]] and [[def-archimedean-field]]. The following
five statements about $F$ are equivalent:

1. (LUB);
2. (ARCH) and (NIP);
3. (BW);
4. (ARCH) and (CC);
5. (MCT).

Moreover each of (LUB), (BW) and (MCT) implies (ARCH) on its own, so in
statements 1, 3 and 5 the Archimedean property is a consequence rather than a
hypothesis.

**The Archimedean hypothesis in statements 2 and 4 may not be dropped.** It is
not an artefact of the proof: the nested interval property without it does not
imply (LUB) ([[fs-nested-intervals-implies-lub]]), and neither does Cauchy
completeness without it ([[fs-cauchy-complete-implies-lub]]). Both are refuted
by the same witness, the formal Laurent series field
$\mathbb{R}((t^{-1}))$.

The equivalence is proved as a single cycle
$1 \Rightarrow 2 \Rightarrow 3 \Rightarrow 4 \Rightarrow 5 \Rightarrow 1$, each
arrow being one lemma of this page.

## Facts & Assumptions

**Given:** An ordered field $F$.

[L1] (LUB) implies (ARCH) and (NIP) ([[lem-lub-implies-nested-intervals]]).

[L2] (ARCH) together with (NIP) implies (BW) ([[lem-nested-intervals-and-archimedean-imply-bw]]).

[L3] (BW) implies (ARCH) ([[lem-bw-implies-archimedean]]).

[L4] (BW) implies (CC) ([[lem-bw-implies-cauchy-complete]]).

[L5] (ARCH) together with (CC) implies (MCT) ([[lem-cauchy-complete-and-archimedean-imply-mct]]).

[L6] (MCT) implies (ARCH) ([[lem-mct-implies-archimedean]]).

[L7] (ARCH) together with (MCT) implies (LUB) ([[lem-mct-implies-lub]]).

## Proof

**Proof technique:** direct.

1.1 Statement 1 implies statement 2: (LUB) gives both (ARCH) and (NIP). [L1]

1.2 Statement 2 implies statement 3: (ARCH) with (NIP) gives (BW). [L2]

1.3 Statement 3 implies statement 4: (BW) gives (ARCH), and (BW) gives (CC), so it gives their conjunction. [L3, L4]

1.4 Statement 4 implies statement 5: (ARCH) with (CC) gives (MCT). [L5]

1.5 Statement 5 implies statement 1: (MCT) gives (ARCH) by [L6], and (ARCH) with (MCT) gives (LUB) by [L7]. [L6, L7]

2.1 Steps 1.1 to 1.5 form a cycle passing through all five statements, so for any two of them there is a chain of implications from the first to the second; the five are therefore equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

2.2 Each of (LUB), (BW) and (MCT) implies (ARCH): the first by [L1], the second by [L3], the third by [L6]. [step 1.1, step 1.3, step 1.5, L1, L3, L6]

3.1 Both assertions of the statement are established, by steps 2.1 and 2.2. [step 2.1, step 2.2] ∎

## Remarks

- **What the cycle costs.** Seven lemmas suffice for the whole equivalence, because a single cycle through all five statements yields every implication between them, and the arrangement is chosen so that no lemma has to carry an Archimedean hypothesis it cannot discharge. Statement 3 is deliberately the hinge: (BW) is the one property that both implies (ARCH) and is implied by a nested interval argument, so the cycle can enter and leave it without an extra hypothesis.

- **Read as a statement about $\mathbb{R}$**, the theorem says that the five familiar theorems of a first analysis course are not five theorems but one, and that the least-upper-bound axiom could have been replaced by any of the other four (with (ARCH) alongside, where required). This library takes (LUB) as the axiom ([[def-complete-ordered-field]]) and proves the others from it on earlier pages; nothing here re-proves them for $\mathbb{R}$, and nothing here may be cited as a proof about $\mathbb{R}$ that is not already there.

- **The two failures are genuinely different from the three successes.** (NIP) and (CC) are both statements about sequences whose data are already close together, and neither of them ever produces a new element far away; that is why an infinitesimal layer can be added to a field without disturbing them, and why the naturals can stay bounded. (LUB), (BW) and (MCT) each quantify over an object that is only assumed *bounded*, so each of them can be tested against the canonical naturals themselves, and each fails at once when those are bounded. [[rem-where-the-archimedean-hypothesis-is-needed]] develops this.
````
