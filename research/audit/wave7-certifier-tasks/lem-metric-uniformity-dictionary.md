## Assigned repair — `lem-metric-uniformity-dictionary`

Item path: `items/lem-metric-uniformity-dictionary.md`

Normalized final-text SHA-256 at dispatch: `2c707df83ce57c5117f8d52649511f41f6ed0b20fecf7077edefc8c4ebc6ac4c`

Split reasons: ["body text","title"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-space-by-entourages",
    "declared_target": "def-uniform-space-by-entourages",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
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
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-separated-uniform-space",
    "declared_target": "def-separated-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
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
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-uniform-continuity",
    "declared_target": "def-metric-uniform-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-base",
    "declared_target": "def-filter-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-filter-base-generates",
    "declared_target": "lem-filter-base-generates",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
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
id: lem-metric-uniformity-dictionary
kind: lemma
title: "A metric on a nonempty set generates an entourage uniformity whose induced topology and uniformly continuous maps are the usual metric notions, and this uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-separated-uniform-space, def-uniformly-continuous-map, def-metric-space, def-metric-topology, def-metric-uniform-continuity, def-filter-base, lem-filter-base-generates]
aliases: []
landmark: true
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

For a metric space $(X,d)$ with $X\ne\varnothing$, the sets $E_\varepsilon=\{(x,y):d(x,y)<\varepsilon\}$, $\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.

## Facts & Assumptions

**Given:** Metric spaces $(X,d)$ and $(Y,\rho)$ with $X\ne\varnothing$ and $Y\ne\varnothing$.

[L1] A metric has symmetry and the triangle inequality, and a pseudometric is a metric exactly when zero distance separates points ([[def-metric-space]]).

[L2] Metric-open sets are those containing a positive-radius ball about each point ([[def-metric-topology]]).

[L3] Metric uniform continuity means: for every $\varepsilon>0$ there is $\delta>0$ such that $d(x,x')<\delta$ implies $\rho(f(x),f(x'))<\varepsilon$ ([[def-metric-uniform-continuity]]).

[L4] A nonempty proper downward-directed family is a filter base, whose upward closure is the least filter containing it ([[def-filter-base]], [[lem-filter-base-generates]]).

[L5] In an entourage uniformity, entourage balls form a neighbourhood base for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal lies in every $E_\varepsilon$, inverses agree with $E_\varepsilon$ by symmetry, intersections contain $E_{\min(\varepsilon,\delta)}$, and $E_{\varepsilon/2}\circ E_{\varepsilon/2}\subseteq E_\varepsilon$ by the triangle inequality. [L1]

2.1 The family $(E_\varepsilon)_{\varepsilon>0}$ is nonempty, none of its members is empty because $X\ne\varnothing$, and it is downward directed by step 1.1, so [L4] makes its upward closure a filter. The diagonal, inverse, and square-root properties in step 1.1 then make it a uniformity. Its $E_\varepsilon[x]$ are precisely metric balls, so its induced topology is the metric topology by [L2] and [L5]. [step 1.1, L2, L4, L5]

2.2 The intersection of all $E_\varepsilon$ is the diagonal, since $d(x,y)>0$ for $x\ne y$ and $E_{d(x,y)/2}$ excludes $(x,y)$; hence the uniformity is separated. [L1, step 1.1]

3.1 The defining entourage implication for $E_\delta$ and $E_\varepsilon$ is exactly the quantified condition of [L3], which proves the final equivalence. [L3] ∎
````
