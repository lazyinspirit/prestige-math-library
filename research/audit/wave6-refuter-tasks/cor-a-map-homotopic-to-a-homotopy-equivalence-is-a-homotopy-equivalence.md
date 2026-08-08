## Target item — `cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence`

Normalized current SHA-256: `1243ccc8c3cd2353ec75eb7fdb67e4bc7d496334c4013b08704ffa22ac4ba376`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence
kind: corollary
title: "A continuous map homotopic to a homotopy equivalence is itself a homotopy equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homotopy-equivalence, thm-composition-respects-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]
aliases: []
landmark: false
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

Let $f_0,f:X\to Y$ be continuous maps with $f\simeq f_0$. If $f_0$ is a homotopy equivalence, then $f$ is a homotopy equivalence. Every homotopy inverse of $f_0$ is also a homotopy inverse of $f$.

## Facts & Assumptions

**Given:** Continuous maps $f_0,f:X\to Y$, a homotopy $f\simeq f_0$, and a homotopy inverse $g:Y\to X$ of $f_0$.

[A1] $g\circ f_0\simeq\operatorname{id}_X$ and $f_0\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

[L2] Homotopy is transitive ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

## Proof

**Proof technique:** direct.

1.1 Postcomposing $f\simeq f_0$ by $g$ gives $g\circ f\simeq g\circ f_0$ by [L1], and [A1] with transitivity gives $g\circ f\simeq\operatorname{id}_X$. [L1, A1, L2]

1.2 Precomposing $f\simeq f_0$ by $g$ gives $f\circ g\simeq f_0\circ g$ by [L1], and [A1] with transitivity gives $f\circ g\simeq\operatorname{id}_Y$. [L1, A1, L2]

2.1 Steps 1.1 and 1.2 show that $g$ is a homotopy inverse of $f$, so $f$ is a homotopy equivalence. [step 1.1, step 1.2, A1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-homotopy-equivalence",
      "source_section": "Definition",
      "quote": "$$g\\circ f\\simeq\\operatorname{id}_X\\qquad\\text{and}\\qquad f\\circ g\\simeq\\operatorname{id}_Y$$",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-composition-respects-homotopy",
      "source_section": "Statement",
      "quote": "Let $f,g:X\\to Y$ be continuous and suppose $f\\simeq_A g$ for a subspace $A\\subseteq X$. 1. If $u:W\\to X$ is continuous, $B\\subseteq W$, and $u[B]\\subseteq A$, then $f\\circ u\\simeq_B g\\circ u$. 2. If $v:Y\\to Z$ is continuous, then $v\\circ f\\simeq_A v\\circ g$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
      "source_section": "Statement",
      "quote": "For fixed spaces $X,Y$ and a fixed subspace $A\\subseteq X$, the relation $\\simeq_A$ is an equivalence relation on the set of continuous maps $X\\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\\to Y$. For fixed endpoints $y_0,y_1\\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Postcomposing $f\\simeq f_0$ by $g$ gives $g\\circ f\\simeq g\\circ f_0$ by [L1], and [A1] with transitivity gives $g\\circ f\\simeq\\operatorname{id}_X$. [L1, A1, L2]",
      "step": "1.1",
      "inputs": [
        "L1",
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Precomposing $f\\simeq f_0$ by $g$ gives $f\\circ g\\simeq f_0\\circ g$ by [L1], and [A1] with transitivity gives $f\\circ g\\simeq\\operatorname{id}_Y$. [L1, A1, L2]",
      "step": "1.2",
      "inputs": [
        "L1",
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Steps 1.1 and 1.2 show that $g$ is a homotopy inverse of $f$, so $f$ is a homotopy equivalence. [step 1.1, step 1.2, A1] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "A1"
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
      "evidence": "steps 1.1 and 1.2 preserve both composite endpoint maps"
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
    "source": "cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence",
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
  },
  {
    "source": "cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-composition-respects-homotopy",
    "declared_target": "thm-composition-respects-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "declared_target": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (3)

### `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`

````markdown
---
id: cor-homotopy-relative-and-path-homotopy-are-equivalence-relations
kind: corollary
title: "Homotopy relative to a fixed subspace, and path homotopy relative to endpoints, are equivalence relations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, lem-homotopy-reflexive-and-symmetric, lem-homotopy-transitivity-by-reparametrisation, def-equivalence-relation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

For fixed spaces $X,Y$ and a fixed subspace $A\subseteq X$, the relation $\simeq_A$ is an equivalence relation on the set of continuous maps $X\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\to Y$.

For fixed endpoints $y_0,y_1\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.

## Facts & Assumptions

**Given:** Spaces $X,Y$, a subspace $A\subseteq X$, and the relations defined in [[def-homotopy-relative-and-path-homotopy]].

[L1] Homotopy rel $A$ is reflexive and symmetric ([[lem-homotopy-reflexive-and-symmetric]]).

[L2] Homotopy rel $A$ is transitive by the two-piece reparametrisation construction ([[lem-homotopy-transitivity-by-reparametrisation]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\simeq_A$ is reflexive, symmetric and transitive, so it is an equivalence relation by [L3]. Taking $A=\varnothing$ gives ordinary homotopy. [L1, L2, L3]

2.1 Paths from $y_0$ to $y_1$ are continuous maps $I\to Y$ with one prescribed restriction to the subspace $\{0,1\}$, and their path homotopies are exactly homotopies rel $\{0,1\}$. Hence step 1.1 applies to them. [step 1.1, given] ∎
````

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

### `thm-composition-respects-homotopy`

````markdown
---
id: thm-composition-respects-homotopy
kind: theorem
title: "Precomposition and postcomposition by continuous maps preserve homotopies, including their relative form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homotopy-relative-and-path-homotopy, thm-product-universal-property, thm-continuity-characterisations-top]
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
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $f,g:X\to Y$ be continuous and suppose $f\simeq_A g$ for a subspace $A\subseteq X$.

1. If $u:W\to X$ is continuous, $B\subseteq W$, and $u[B]\subseteq A$, then $f\circ u\simeq_B g\circ u$.
2. If $v:Y\to Z$ is continuous, then $v\circ f\simeq_A v\circ g$.

## Facts & Assumptions

**Given:** A homotopy $H:X\times I\to Y$ from $f$ to $g$ rel $A$, a continuous $u:W\to X$ with $u[B]\subseteq A$, and a continuous $v:Y\to Z$.

[A1] The endpoint and relative conditions are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Define $U:W\times I\to X\times I$ by $U(w,t)=(u(w),t)$. Its components are $u$ after the first projection and the second projection, so $U$ is continuous by [L1]. [L1]

1.2 The composite $v\circ H:X\times I\to Z$ is continuous by the same preimage calculation, and its endpoints are $v\circ f$ and $v\circ g$; for $a\in A$ it has the fixed value $v(f(a))=v(g(a))$. Thus it is a homotopy from $v\circ f$ to $v\circ g$ rel $A$. [A1, L2]

2.1 The composite $H\circ U$ is continuous: for every open $V\subseteq Y$, $(H\circ U)^{-1}[V]=U^{-1}[H^{-1}[V]]$ is open by [L2]. Its endpoints are $(f\circ u)(w)$ and $(g\circ u)(w)$; if $b\in B$, then $u(b)\in A$, so $(H\circ U)(b,t)=f(u(b))=g(u(b))$. Thus it is a homotopy from $f\circ u$ to $g\circ u$ rel $B$. [step 1.1, A1, L2]

3.1 Steps 2.1 and 1.2 prove the two claims. [step 2.1, step 1.2] ∎
````

