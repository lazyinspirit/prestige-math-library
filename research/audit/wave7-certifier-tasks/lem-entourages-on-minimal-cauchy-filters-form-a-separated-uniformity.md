## Assigned repair — `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`

Item path: `items/lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity.md`

Normalized final-text SHA-256 at dispatch: `3125cac2efe29647db1ba9eae81f172b28e8265c4b59242cc18e1409bbb685a5`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "declared_target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
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
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
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
    "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity
kind: lemma
title: "The standard entourages on minimal Cauchy filters form a separated uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-uniform-space-by-entourages, def-separated-uniform-space, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

On the set $\widehat X$ of minimal Cauchy filters, the relations $\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.

## Facts & Assumptions

**Given:** Minimal Cauchy filters $\mathcal F,\mathcal G$ on $X$.

[L1] Every Cauchy filter has a unique associated minimal Cauchy filter, and every principal filter is Cauchy and therefore has an associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Symmetric entourages form a base and admit square roots ([[lem-symmetric-entourages-form-a-base]]).

[L3] The entourage axioms and separatedness are stated in [[def-uniform-space-by-entourages]] and [[def-separated-uniform-space]].

## Proof

**Proof technique:** constructive.

1.1 Because a uniformity is a proper filter on $X\times X$, its carrier $X$ is nonempty. Choose $x\in X$; then [L1] gives a minimal Cauchy filter associated to the principal filter at $x$, so $\widehat X$ is nonempty. For symmetric $E$, put $(\mathcal F,\mathcal G)\in\widehat E$ when some $A\in\mathcal F$ and $B\in\mathcal G$ satisfy $A\times B\subseteq E$. [L1, L3, construct, choose]

2.1 Every $\mathcal F$ is $\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. Thus each $\widehat E$ contains the nonempty diagonal of $\widehat X$. The relation $\widehat E$ is symmetric. If $\widehat E$ and $\widehat D$ have respective witnesses $A\times B$ and $C\times K$, then $(A\cap C)\times(B\cap K)\subseteq E\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]

2.2 Choose a symmetric entourage $D$ with $D^{\circ2}\subseteq E$. If $\mathcal F\,\widehat D\,\mathcal G$ via $A\times B\subseteq D$ and $\mathcal G\,\widehat D\,\mathcal H$ via $C\times K\subseteq D$, choose $b\in B\cap C$. Then $aDbDk$ for every $a\in A,k\in K$, so $A\times K\subseteq D^{\circ2}\subseteq E$. Hence $\widehat D\circ\widehat D\subseteq\widehat E$. [step 1.1, L2, choose]

2.3 Steps 2.1 and 2.2 show that the upward closure of the relations $\widehat E$ is a uniformity. To prove separation, suppose $\mathcal F\,\widehat E\,\mathcal G$ for every entourage $E$. Given $A\in\mathcal F$, minimality gives $\mathcal F=m(\mathcal F)$ by [L1], so some $D[C]\subseteq A$ with $C\in\mathcal F$ and symmetric $D$. Choose an entourage $E\subseteq D$ and witnesses $P\in\mathcal F,Q\in\mathcal G$ with $P\times Q\subseteq E$. Pick $c\in C\cap P$. Then $Q\subseteq E[c]\subseteq D[C]\subseteq A$, so $A\in\mathcal G$. Thus $\mathcal F\subseteq\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]

3.1 Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎
````
