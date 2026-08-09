## Assigned repair — `cex-dense-set-of-measure-zero`

Item path: `items/cex-dense-set-of-measure-zero.md`

Normalized final-text SHA-256 at dispatch: `8d3e245eead286fb35f263a7f738461c338ed54ea7b516fcad0859755a2186a3`

Split reasons: ["body text"]

Provenance ledger: `wave8-real-analysis-cantor-continuity.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-measure-zero-implies-nowhere-dense",
    "declared_target": "fs-measure-zero-implies-nowhere-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-countable-sets-are-null",
    "declared_target": "lem-countable-sets-are-null",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-nowhere-dense-meager",
    "declared_target": "def-nowhere-dense-meager",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-dense-set-of-measure-zero",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
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
id: cex-dense-set-of-measure-zero
kind: counterexample
title: "$\\mathbb{Q}$ is dense in $\\mathbb{R}$ and has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-measure-zero-implies-nowhere-dense, lem-countable-sets-are-null, lem-q-and-irrationals-dense-r, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-rationals-countable, lem-rat-embeds-dense, def-countable, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ of measure zero is nowhere dense
([[fs-measure-zero-implies-nowhere-dense]]).

The witness is $\mathbb{Q}_{\mathbb{R}}$, the set of rationals inside
$\mathbb{R}$ ([[lem-rat-embeds-dense]]). It is at most countable, hence null
([[lem-countable-sets-are-null]]), and it is dense, so its closure is
$\mathbb{R}$ and the interior of that closure is $\mathbb{R}$, as far from empty
as possible. The refutation is carried out in full in
[[fs-measure-zero-implies-nowhere-dense]]; this item records the witness and the
explicit cover.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The refuted claim: every subset of $\mathbb{R}$ of measure zero is nowhere dense.

[L1] $\mathbb{Q}$ is countably infinite, so $\mathbb{Q}_{\mathbb{R}}$ is at most countable and therefore null ([[thm-rationals-countable]], [[def-countable]], [[lem-rat-embeds-dense]], [[lem-countable-sets-are-null]], [[def-measure-zero-and-content-zero]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense: $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

[L3] Nowhere dense means the interior of the closure is empty; $\mathbb{R}$ is open, so its interior is itself ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ has measure zero, by [L1]. [L1]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is not nowhere dense: its closure is $\mathbb{R}$ by [L2] and the interior of $\mathbb{R}$ is $\mathbb{R}$ by [L3], which is not empty. [L2, L3]

2.1 So $\mathbb{Q}_{\mathbb{R}}$ witnesses the failure of [A1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The cover is explicit and startling.** For every $\varepsilon > 0$ the rationals are covered by open intervals of total length exactly $\varepsilon$ ([[ex-q-covered-by-intervals-of-small-total-length]]), although their union is dense because it contains $\mathbb{Q}_{\mathbb{R}}$.

- **$\mathbb{Q}$ is small in the other sense too, one level up.** It is meager, being a countable union of singletons ([[cor-q-is-meager-and-not-g-delta]]); what fails is only nowhere density itself. So the counterexample separates "nowhere dense" from "meager", not category from measure.

- **The complementary witness** is the Smith-Volterra-Cantor set, nowhere dense and not null ([[cex-nowhere-dense-with-positive-measure]]).
````
