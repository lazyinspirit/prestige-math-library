## Assigned repair — `lem-completely-regular-topologies-come-from-continuous-pseudometrics`

Item path: `items/lem-completely-regular-topologies-come-from-continuous-pseudometrics.md`

Normalized final-text SHA-256 at dispatch: `82ff1c86a370fc25366dd85b92c5100dd2accd8e9325e273e78bcb732576120d`

Split reasons: ["body text","title","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-gauge-of-pseudometrics",
    "declared_target": "def-gauge-of-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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
id: lem-completely-regular-topologies-come-from-continuous-pseudometrics
kind: lemma
title: "The topology of a nonempty completely regular space is induced by the gauge of its continuous $[0,1]$-valued pseudometrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completely-regular-and-tychonoff-spaces, def-gauge-of-pseudometrics, def-continuous-map-top, def-interval, lem-of-abs-value, lem-of-triangle-inequality]
aliases: []
landmark: true
proof_strategy: constructive
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

The topology of a nonempty completely regular space is induced by the gauge of pseudometrics $p_f(x,y)=|f(x)-f(y)|$, where $f:X\to[0,1]$ ranges over continuous maps.

## Facts & Assumptions

**Given:** A nonempty completely regular space $X$.

[L1] Complete regularity separates a point from a closed set by a continuous $[0,1]$-valued function ([[def-completely-regular-and-tychonoff-spaces]], [[def-interval]]).

[L2] Such functions are continuous in the neighbourhood sense ([[def-continuous-map-top]]).

[L3] A gauge generates a uniformity from finite simultaneous pseudometric balls ([[def-gauge-of-pseudometrics]]).

[L4] Absolute value is nonnegative, vanishes only at zero and is even ([[lem-of-abs-value]]), and it satisfies $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** constructive.

1.1 For each continuous $f:X\to[0,1]$, direct substitution in [L4] shows that $p_f(x,y)=|f(x)-f(y)|$ is nonnegative, symmetric, zero on the diagonal and satisfies the triangle inequality, so it is a pseudometric; its balls about $x$ are original-open by [L2]. [L2, L4, construct]

1.2 Conversely, if $x\in U$ is original-open, apply [L1] to the closed set $X\setminus U$ to obtain $f$ with $f(x)=1$ and $f[X\setminus U]=\{0\}$; then the $p_f$-ball of radius $1/2$ about $x$ lies in $U$. [L1, L3, choose]

2.1 Hence every gauge-open set is original-open. [step 1.1, L3]

3.1 Thus original-open and gauge-open sets contain one another, so the two topologies agree. [step 2.1, step 1.2, discharge-construct] ∎
````
