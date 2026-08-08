## Target item — `thm-a-deformation-retract-is-a-homotopy-equivalence`

Normalized current SHA-256: `114a725401319aa1ec97ea68637387dd4d6bae37353d69c8325c87847e303959`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-a-deformation-retract-is-a-homotopy-equivalence
kind: theorem
title: "The inclusion of a deformation retract is a homotopy equivalence with the retraction as homotopy inverse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-retraction-and-deformation-retract, def-homotopy-equivalence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

If $A$ is a deformation retract of $X$, with inclusion $i:A\hookrightarrow X$ and retraction $r:X\to A$, then $i$ is a homotopy equivalence and $r$ is a homotopy inverse of $i$.

## Facts & Assumptions

**Given:** A deformation retraction $(r,H)$ of $X$ onto $A$, with inclusion $i:A\hookrightarrow X$.

[A1] Retraction gives $r\circ i=\operatorname{id}_A$, and deformation retraction gives $i\circ r\simeq_A\operatorname{id}_X$ ([[def-retraction-and-deformation-retract]]).

[A2] A continuous map is a homotopy equivalence when it has a continuous map whose composites with it are homotopic to the identity maps ([[def-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 The equality $r\circ i=\operatorname{id}_A$ is in particular a homotopy $r\circ i\simeq\operatorname{id}_A$, while $i\circ r\simeq_A\operatorname{id}_X$ is in particular an ordinary homotopy. [A1]

2.1 Hence $r$ satisfies both homotopy-inverse conditions for $i$, so $i$ is a homotopy equivalence with homotopy inverse $r$. [step 1.1, A2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-retraction-and-deformation-retract",
      "source_section": "Definition",
      "quote": "The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\\to A$ and a homotopy $$H:\\operatorname{id}_X\\simeq_A i\\circ r.$$ Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\\in A$ and $t\\in I$ ([[def-homotopy-relative-and-path-homotopy]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-homotopy-equivalence",
      "source_section": "Definition",
      "quote": "The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The equality $r\\circ i=\\operatorname{id}_A$ is in particular a homotopy $r\\circ i\\simeq\\operatorname{id}_A$, while $i\\circ r\\simeq_A\\operatorname{id}_X$ is in particular an ordinary homotopy. [A1]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Hence $r$ satisfies both homotopy-inverse conditions for $i$, so $i$ is a homotopy equivalence with homotopy inverse $r$. [step 1.1, A2] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "A2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1 records the identity and retraction endpoints of the deformation"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-a-deformation-retract-is-a-homotopy-equivalence",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-retraction-and-deformation-retract",
    "declared_target": "def-retraction-and-deformation-retract",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-deformation-retract-is-a-homotopy-equivalence",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-equivalence",
    "declared_target": "def-homotopy-equivalence",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (2)

### `def-homotopy-equivalence`

````markdown
---
id: def-homotopy-equivalence
kind: definition
title: "Homotopy equivalences, homotopy inverses and spaces of the same homotopy type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $X,Y$ be topological spaces. A continuous map $f:X\to Y$ is a **homotopy equivalence** if there is a continuous map $g:Y\to X$ such that

$$g\circ f\simeq\operatorname{id}_X\qquad\text{and}\qquad f\circ g\simeq\operatorname{id}_Y$$

in the sense of [[def-homotopy-relative-and-path-homotopy]]. Such a $g$ is a **homotopy inverse** of $f$.

The spaces $X$ and $Y$ have the **same homotopy type**, or are **homotopy equivalent**, written $X\simeq Y$, when a homotopy equivalence $X\to Y$ exists.

The equations required of an ordinary inverse have been weakened to homotopies. Neither composite need equal the corresponding identity map, and a homotopy equivalence need not be bijective.
````

### `def-retraction-and-deformation-retract`

````markdown
---
id: def-retraction-and-deformation-retract
kind: definition
title: "Retractions and deformation retracts, with a deformation retraction required to fix the retract pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top, def-subspace-topology-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $A\subseteq X$ carry the subspace topology, and let $i:A\hookrightarrow X$ be the inclusion ([[def-subspace-topology-top]]).

A continuous map $r:X\to A$ is a **retraction of $X$ onto $A$** if

$$r\circ i=\operatorname{id}_A,$$

equivalently, if $r(a)=a$ for every $a\in A$. When such an $r$ exists, $A$ is a **retract** of $X$.

The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\to A$ and a homotopy

$$H:\operatorname{id}_X\simeq_A i\circ r.$$

Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]). The pair $(r,H)$ is a **deformation retraction**.

Some sources call the pointwise-fixed condition a *strong deformation retract*. In this library the word *deformation retract* always includes it.
````

