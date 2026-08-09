## Assigned repair — `ex-the-metric-urysohn-function-costs-no-choice`

Item path: `items/ex-the-metric-urysohn-function-costs-no-choice.md`

Normalized final-text SHA-256 at dispatch: `558496d650f94dc2df75575ceddfd85a224dfff2628ea9f18fab095fea79df17`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-topology-separation-urysohn.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-completely-normal",
    "declared_target": "thm-metric-spaces-are-completely-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "declared_target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-distance-to-set-is-lipschitz",
    "declared_target": "lem-distance-to-set-is-lipschitz",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-closure-characterisation",
    "declared_target": "thm-metric-closure-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
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
id: ex-the-metric-urysohn-function-costs-no-choice
kind: example
title: "In a metric space the function $d(x,A)/(d(x,A) + d(x,B))$ separates two disjoint closed sets outright, so the metric case spends no choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-urysohn-lemma, thm-metric-spaces-are-completely-normal,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-metric-space,
       def-metric-topology, def-dependent-choice, def-continuous-map-top,
       def-interval, def-metrizable-space, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, thm-metric-closure-characterisation]
justified_by: []
aliases: []
landmark: false
short: "an explicit choice-free metric Urysohn function"
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Gabriel Nagy, Real Analysis, Lecture 6: Metric spaces"
      url: "https://www.math.ksu.edu/~nagy/real-an/1-06-top-metric.pdf"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), metrizable ([[def-metrizable-space]]) and hence
normal ([[thm-metric-spaces-are-completely-normal]]), and let $A, B \subseteq X$
be disjoint, nonempty and closed. Define $h : X \to [0,1]$ by

$$h(x) \;:=\; \frac{d(x,A)}{d(x,A)+d(x,B)}.$$

Then $h$ is a witness for [[thm-urysohn-lemma]] applied to $A$ and $B$, and it
is written down by a single formula: no choice principle, dependent or
otherwise, is spent in producing it, in contrast with the general
construction inside that theorem.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and disjoint, nonempty, closed $A, B \subseteq X$.

[L1] For nonempty $S \subseteq X$, $d(\cdot,S)$ is $1$-Lipschitz, hence continuous; $d(x,S)\ge 0$; and $\overline S=\{x:d(x,S)=0\}$ ([[lem-distance-to-set-is-lipschitz]]; [[def-metric-bounded-diameter]]; [[thm-metric-closure-characterisation]], claim 1). In particular, when $S$ is closed, $d(x,S)=0$ exactly when $x\in S$.

## Verification

**Proof technique:** direct.

1.1 For every $x \in X$: $d(x,A) \ge 0$ and $d(x,B) \ge 0$ by [L1], and they are not both $0$, since $d(x,A)=d(x,B)=0$ would give $x \in A \cap B = \varnothing$ by [L1] (A, B closed); so $d(x,A)+d(x,B) > 0$ and $h(x)$ is a well-defined real number. [given, L1, algebra]

2.1 $0 \le h(x) \le 1$ for every $x$, since $0 \le d(x,A) \le d(x,A)+d(x,B)$ by step 1.1. [step 1.1, algebra]

2.2 $h$ is continuous: it is the quotient of the continuous functions $d(\cdot,A)$ and $d(\cdot,A)+d(\cdot,B)$ (both continuous by [L1], the second a sum of continuous functions), and the denominator is nowhere $0$ by step 1.1. [step 1.1, L1]

2.3 For $x \in A$: $d(x,A)=0$ by [L1], so $h(x) = 0/(0+d(x,B)) = 0$. For $x \in B$: $d(x,B)=0$, and $d(x,A) \ne 0$ by step 1.1, so $h(x) = d(x,A)/(d(x,A)+0) = 1$. [step 1.1, L1, algebra]

3.1 By steps 2.1, 2.2 and 2.3, $h : X \to [0,1]$ is continuous with $A \subseteq h^{-1}(\{0\})$ and $B \subseteq h^{-1}(\{1\})$, exactly the conclusion of [[thm-urysohn-lemma]] for the pair $A,B$. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Nothing is selected.** Every value $h(x)$ is computed from $d(x,A)$ and $d(x,B)$, both determined by $x$, $A$, $B$ and $d$ alone; no step above fixes a witness from a nonempty set of alternatives. This is the same observation [[thm-metric-spaces-are-completely-normal]] and [[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] make about their own constructions, and it is why the metric case of every separation theorem on this page needs no choice hypothesis at all.

- **The nonemptiness of $A$ and $B$ is not decoration.** If $A=\varnothing$ then $d(x,A)$ is undefined for every $x$ ([[lem-distance-to-set-is-lipschitz]] presupposes a nonempty set), and the constant function $1$ serves instead; the formula above is written for the case that matters, where both sets carry a point to measure distance from.
````
