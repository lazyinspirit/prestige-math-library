## Assigned repair — `fs-nested-intervals-implies-lub`

Item path: `items/fs-nested-intervals-implies-lub.md`

Normalized final-text SHA-256 at dispatch: `2914ff5574347dc68cb5551c2dbd26104cfc991fbee1862c5f85ad6bb1910104`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-real-analysis-completeness-limits.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-completeness-equivalences",
    "declared_target": "thm-completeness-equivalences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
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
    "source": "fs-nested-intervals-implies-lub",
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
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequences-in-an-ordered-field",
    "declared_target": "def-sequences-in-an-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cor-laurent-nested-intervals",
    "declared_target": "cor-laurent-nested-intervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cor-laurent-not-lub-complete",
    "declared_target": "cor-laurent-not-lub-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-laurent-non-archimedean",
    "declared_target": "lem-laurent-non-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-nested-intervals-implies-lub",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-laurent-ordered-field",
    "declared_target": "thm-laurent-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
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
id: fs-nested-intervals-implies-lub
kind: false-statement
title: "FALSE: the nested interval property alone implies the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, cor-laurent-nested-intervals, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
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
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field with the nested interval property (NIP) of
[[def-completeness-properties]] has the least-upper-bound property (LUB).

This is clause 2 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted, and the deletion is exactly what makes it false. The witness
is the formal Laurent series field $K = \mathbb{R}((t^{-1}))$, which satisfies
(NIP) and has no least upper bound for the set of its own canonical naturals.

Note that the false claim is being refuted in the *shrinking* form of (NIP),
which is the weaker hypothesis and therefore makes the implication stronger.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one point in its intersection ([[cor-laurent-nested-intervals]]); intervals, nesting and lengths tending to $0$ in an ordered field are as in [[def-sequences-in-an-ordered-field]], and (NIP) asks exactly that such an intersection be nonempty ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (NIP) does imply (LUB) ([[thm-completeness-equivalences]], clause 2 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (NIP): any nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has a point in its intersection, indeed exactly one. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (NIP) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **The failure is not an accident of one field.** By [[lem-lub-implies-nested-intervals]] every field with (LUB) is Archimedean, so any witness at all must be non-Archimedean; and in a non-Archimedean field the shrinking hypothesis in (NIP) is a severe restriction, because a length that tends to $0$ in the order of the field must get below every infinitesimal. That is why checking shrinking (NIP) in $K$ is substantive, and why $K$ can satisfy (NIP) while failing (LUB) at all.

- **$\mathbb{R}(t)$ will not do as a witness**, although it is the library's other non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]). Nothing in this library establishes any nested interval property for it, and the page that built $K$ says why a new field was constructed rather than reusing that one.

- **The companion failure** is [[fs-cauchy-complete-implies-lub]], refuted by the same field. Together they are the exact content of the Archimedean hypotheses in clauses 2 and 4 of [[thm-completeness-equivalences]].
````
