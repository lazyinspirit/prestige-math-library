## Assigned repair — `cor-compact-domain-maps-are-uniformly-continuous`

Item path: `items/cor-compact-domain-maps-are-uniformly-continuous.md`

Normalized final-text SHA-256 at dispatch: `ed4880dc07ccf773dee888fb8e31c08142af521ec72acfe68f664263ab29ec60`

Split reasons: ["body text","title","deps"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
    "declared_target": "thm-compact-hausdorff-space-has-a-unique-compatible-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compact-hausdorff-open-cover-uniformity",
    "declared_target": "thm-compact-hausdorff-open-cover-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
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
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
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
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
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
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
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
  },
  {
    "source": "cor-compact-domain-maps-are-uniformly-continuous",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: cor-compact-domain-maps-are-uniformly-continuous
kind: corollary
title: "Every continuous map from a nonempty compact Hausdorff space to a uniform space is uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, thm-compact-hausdorff-open-cover-uniformity, def-uniformly-continuous-map, def-continuous-map-top, thm-uniformity-induces-a-topology, lem-symmetric-entourages-form-a-base, lem-entourage-and-uniform-cover-dictionary]
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

Every continuous map from a nonempty compact Hausdorff space to a uniform space is uniformly continuous.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$ with $X$ nonempty compact Hausdorff and $Y$ uniform.

[L1] A compact Hausdorff space has one compatible uniformity ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]]).

[L2] Continuity means that every neighbourhood of $f(x)$ contains the image of some neighbourhood of $x$, while uniform continuity is the entourage condition ([[def-continuous-map-top]], [[def-uniformly-continuous-map]]).

[L3] Every entourage ball is a neighbourhood in the induced topology ([[thm-uniformity-induces-a-topology]]). Every open cover of a nonempty compact Hausdorff space is uniform ([[thm-compact-hausdorff-open-cover-uniformity]]), and every uniform cover has an entourage-ball cover refining it ([[lem-entourage-and-uniform-cover-dictionary]]); every target entourage has a symmetric square root ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be a target entourage and choose a symmetric $W$ with $W^{-1}\circ W=W^{\circ2}\subseteq V$. For each $x\in X$, let $O_x$ be the union of all open sets $O$ such that $x\in O$ and $f[O]\subseteq W[f(x)]$. Continuity makes this family nonempty, and its union is an open neighbourhood of $x$ satisfying $f[O_x]\subseteq W[f(x)]$. [L2, L3, construct]

2.1 The open cover $(O_x)_{x\in X}$ is uniform by [L3]. Hence there is a source entourage $E$ whose ball cover refines it: for each $a\in X$, some $O_x$ contains $E[a]$. [step 1.1, L1, L3]

3.1 If $(a,b)\in E$, then $a,b\in E[a]\subseteq O_x$ for some $x$. Thus $f(a),f(b)\in W[f(x)]$, so $(f(a),f(b))\in W^{-1}\circ W\subseteq V$. This is uniform continuity. [step 1.1, step 2.1, L2] ∎
````
