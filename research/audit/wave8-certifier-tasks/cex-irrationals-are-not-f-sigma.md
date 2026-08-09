## Assigned repair — `cex-irrationals-are-not-f-sigma`

Item path: `items/cex-irrationals-are-not-f-sigma.md`

Normalized final-text SHA-256 at dispatch: `1221ee7b038126b968b4a6e169b0966e50c202bc7d91470367f2349b8bef3477`

Split reasons: ["body text","deps"]

Provenance ledger: `wave8-real-analysis-cantor-continuity.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-q-is-g-delta",
    "declared_target": "fs-q-is-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-q-is-meager-and-not-g-delta",
    "declared_target": "cor-q-is-meager-and-not-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-f-sigma-g-delta",
    "declared_target": "def-f-sigma-g-delta",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-baire-category-r",
    "declared_target": "thm-baire-category-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-irrationals-are-not-f-sigma",
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
    "source": "cex-irrationals-are-not-f-sigma",
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
id: cex-irrationals-are-not-f-sigma
kind: counterexample
title: "The irrationals form a residual $G_\\delta$ set that is not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-q-is-g-delta, cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathbb{Q}$ is a $G_\delta$ subset of $\mathbb{R}$
([[fs-q-is-g-delta]]); equivalently, by complementation
([[def-f-sigma-g-delta]]), the irrationals are $F_\sigma$.

The witness is the set $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of
irrationals ([[lem-rat-embeds-dense]]). It **is** $G_\delta$, being
$\bigcap_n (\mathbb{R} \setminus \{e(n)\})$ for any enumeration $e$ of the
rationals, and it **is** residual, its complement being a countable union of
singletons; but it is **not** $F_\sigma$, and that is the failure of the refuted
claim. The refutation is carried out in full in
[[cor-q-is-meager-and-not-g-delta]]; this item records the witness and the three
properties that make it the right one.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[A1] The refuted claim: $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, equivalently $X$ is $F_\sigma$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, $X$ is $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2, 3).

[L2] $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is $G_\delta$ and residual, by claim 2 of [L1]. [L1]

1.2 $X$ is not $F_\sigma$: were it $F_\sigma$, its complement $\mathbb{Q}_{\mathbb{R}}$ would be $G_\delta$ by [L2], which claim 3 of [L1] forbids. [L1, L2]

2.1 So $X$ is a residual $G_\delta$ set that is not $F_\sigma$, and it witnesses the failure of [A1] in both of the equivalent formulations. [step 1.1, step 1.2, A1, L2] ∎

## Remarks

- **The asymmetry is real and is not a defect of the definitions.** The two classes $F_\sigma$ and $G_\delta$ are exchanged by complementation, but a *particular* set need not lie in both: $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and not $G_\delta$, and $X$ is $G_\delta$ and not $F_\sigma$. A set lying in both classes is a genuinely stronger condition, satisfied for instance by every open set and every closed set.

- **What forces it is the Baire category theorem**, through the fact that $\mathbb{R}$ is not meager ([[thm-baire-category-r]]) while $\mathbb{Q}_{\mathbb{R}}$ is. Both are dense; the rationals are countable and the irrationals are uncountable. No cardinality or density argument distinguishes them in the required way; the distinction is one of category.

- **$X$ is large in both senses.** It is residual, so it is large in category; and it is not null. For if it were, then, $\mathbb{Q}_{\mathbb{R}}$ being null ([[lem-countable-sets-are-null]]), one could interleave a cover of each with slack $\varepsilon \cdot 2^{-1}$ and obtain a cover of $\mathbb{Q}_{\mathbb{R}} \cup X = \mathbb{R}$ of total length at most $\varepsilon$, which [[lem-nondegenerate-interval-is-not-null]] forbids already for $[0,1]$. Interleaving two covers needs no choice principle, unlike the countably infinite case ([[thm-countable-union-of-null-is-null]]).
````
