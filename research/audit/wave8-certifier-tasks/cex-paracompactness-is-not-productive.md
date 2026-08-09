## Assigned repair — `cex-paracompactness-is-not-productive`

Item path: `items/cex-paracompactness-is-not-productive.md`

Normalized final-text SHA-256 at dispatch: `e547b28b1fca86b4873ed305206a33d8fcd17373f7dfa2f5742fc4c73ca0c8fc`

Split reasons: ["body text","deps"]

Provenance ledger: `wave8-topology.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-lower-limit-line-is-regular-and-lindelof",
    "declared_target": "lem-lower-limit-line-is-regular-and-lindelof",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-regular-lindelof-spaces-are-paracompact",
    "declared_target": "lem-regular-lindelof-spaces-are-paracompact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "thm-normality-is-not-productive",
    "declared_target": "thm-normality-is-not-productive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "lem-products-preserve-t0-t1-and-hausdorff",
    "declared_target": "lem-products-preserve-t0-t1-and-hausdorff",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "thm-paracompact-hausdorff-implies-normal",
    "declared_target": "thm-paracompact-hausdorff-implies-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-lower-limit-topology",
    "declared_target": "def-lower-limit-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
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
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-paracompactness-is-not-productive",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
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
id: cex-paracompactness-is-not-productive
kind: counterexample
title: "Assuming choice, two paracompact lower-limit lines can have a nonparacompact product"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-paracompact, thm-normality-is-not-productive, lem-products-preserve-t0-t1-and-hausdorff, thm-paracompact-hausdorff-implies-normal, def-lower-limit-topology, def-hausdorff-space, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement refuted

Assuming the Axiom of Choice, a product of paracompact spaces is paracompact.

## Facts & Assumptions

**Given:** The lower-limit line $L$ under the Axiom of Choice.

[A1] Choice implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] If $x<y$ in $L$, then $[x,y)$ and $[y,y+1)$ are disjoint open neighbourhoods, so $L$ is Hausdorff ([[def-lower-limit-topology]], [[def-hausdorff-space]]).

[L1] The lower-limit line is regular and Lindelöf; under countable choice every regular Lindelöf space is paracompact ([[lem-lower-limit-line-is-regular-and-lindelof]], [[lem-regular-lindelof-spaces-are-paracompact]]).

[L2] Under choice, $L^2$ is not normal ([[thm-normality-is-not-productive]]).

[L3] The product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L4] A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

## Counterexample

**Proof technique:** direct.

1.1 By [A1] and [L1], both factors $L$ are paracompact. [A1, L1]

2.1 If $L^2$ were paracompact, [F1] and [L3] would make it Hausdorff, and [L4] would then make it normal, contradicting [L2]. [F1, L2, L3, L4, step 1.1]

3.1 Thus two paracompact spaces have a nonparacompact product, refuting the displayed assertion. [step 2.1] ∎
````
