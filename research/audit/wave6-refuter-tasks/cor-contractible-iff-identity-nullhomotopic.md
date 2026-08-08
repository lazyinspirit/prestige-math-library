## Target item — `cor-contractible-iff-identity-nullhomotopic`

Normalized current SHA-256: `48b5bff70f04bfa3ae79dde0c8eee7f289c5eea90725088e1b9a959d9c0c3fa2`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-contractible-iff-identity-nullhomotopic
kind: corollary
title: "A nonempty space is contractible if and only if its identity map is nullhomotopic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nullhomotopic-map-and-contractible-space, thm-composition-respects-homotopy]
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

For a nonempty topological space $X$, the following are equivalent:

1. $X$ is contractible.
2. The identity map $\operatorname{id}_X$ is nullhomotopic.

## Facts & Assumptions

**Given:** A nonempty topological space $X$.

[A1] $X$ is contractible when every continuous map from $X$ to every topological space is nullhomotopic; a map is nullhomotopic when it is homotopic to a constant map ([[def-nullhomotopic-map-and-contractible-space]]).

[L1] Postcomposition by a continuous map preserves homotopies ([[thm-composition-respects-homotopy]], claim 2).

## Proof

**Proof technique:** direct.

1.1 If $X$ is contractible, apply [A1] to the continuous map $\operatorname{id}_X:X\to X$ to conclude that $\operatorname{id}_X$ is nullhomotopic. [A1]

1.2 Conversely suppose $\operatorname{id}_X\simeq c_{x_0}$ for some $x_0\in X$, and let $f:X\to Y$ be any continuous map. Postcomposition by $f$ gives $f=f\circ\operatorname{id}_X\simeq f\circ c_{x_0}=c_{f(x_0)}$ by [L1]. Thus $f$ is nullhomotopic. [assume-hyp, L1, A1]

2.1 Since $Y$ and $f$ in step 1.2 were arbitrary, every continuous map out of $X$ is nullhomotopic, so $X$ is contractible by [A1]. Together with step 1.1 this proves the equivalence. [step 1.1, step 1.2, A1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-nullhomotopic-map-and-contractible-space",
      "source_section": "Definition",
      "quote": "Let $f:X\\to Y$ be continuous. The map $f$ is **nullhomotopic** if there is a point $y_0\\in Y$ such that $f$ is homotopic to the constant map $c_{y_0}:X\\to Y$, $c_{y_0}(x)=y_0$ ([[def-homotopy-relative-and-path-homotopy]]). A nonempty topological space $X$ is **contractible** if every continuous map $f:X\\to Y$ to every topological space $Y$ is nullhomotopic. This definition separates the property of the space from the particular map $\\operatorname{id}_X$. The next corollary proves that it is equivalent to the familiar condition that the identity map be nullhomotopic.",
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
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $X$ is contractible, apply [A1] to the continuous map $\\operatorname{id}_X:X\\to X$ to conclude that $\\operatorname{id}_X$ is nullhomotopic. [A1]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely suppose $\\operatorname{id}_X\\simeq c_{x_0}$ for some $x_0\\in X$, and let $f:X\\to Y$ be any continuous map. Postcomposition by $f$ gives $f=f\\circ\\operatorname{id}_X\\simeq f\\circ c_{x_0}=c_{f(x_0)}$ by [L1]. Thus $f$ is nullhomotopic. [assume-hyp, L1, A1]",
      "step": "1.2",
      "inputs": [
        "L1",
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Since $Y$ and $f$ in step 1.2 were arbitrary, every continuous map out of $X$ is nullhomotopic, so $X$ is contractible by [A1]. Together with step 1.1 this proves the equivalence. [step 1.1, step 1.2, A1] ∎",
      "step": "2.1",
      "inputs": [
        "1.2",
        "A1",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
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
      "evidence": "steps 1.1 and 1.2 use homotopies whose two endpoint maps are the identity and a constant map"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 1.1 establishes that contractibility makes the identity nullhomotopic"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "steps 1.2 and 2.1 establish that a nullhomotopic identity makes every map out nullhomotopic"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-contractible-iff-identity-nullhomotopic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-nullhomotopic-map-and-contractible-space",
    "declared_target": "def-nullhomotopic-map-and-contractible-space",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-contractible-iff-identity-nullhomotopic",
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
  }
]
```

## Full text of every cited or declared item (2)

### `def-nullhomotopic-map-and-contractible-space`

````markdown
---
id: def-nullhomotopic-map-and-contractible-space
kind: definition
title: "Nullhomotopic maps and contractible spaces"
status: published
origin: session
provenance:
  statement: ai-altered
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

Let $f:X\to Y$ be continuous. The map $f$ is **nullhomotopic** if there is a point $y_0\in Y$ such that $f$ is homotopic to the constant map $c_{y_0}:X\to Y$, $c_{y_0}(x)=y_0$ ([[def-homotopy-relative-and-path-homotopy]]).

A nonempty topological space $X$ is **contractible** if every continuous map $f:X\to Y$ to every topological space $Y$ is nullhomotopic.

This definition separates the property of the space from the particular map $\operatorname{id}_X$. The next corollary proves that it is equivalent to the familiar condition that the identity map be nullhomotopic.

## Remarks

- Nonemptiness is included so that a contracting point can be named. The empty space is not called contractible under this convention.
- The constant to which a map is homotopic may depend on the map. Contractibility does not assert that two arbitrary constant maps into a disconnected target are homotopic.
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

