## Target item — `thm-two-maps-into-a-convex-set-are-homotopic`

Normalized current SHA-256: `9af5575bc4589e20ce00fff6cb7c1b7c7efbac05bbcfb5ecd66287b73443ad99`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-two-maps-into-a-convex-set-are-homotopic
kind: theorem
title: "Any two continuous maps into a nonempty convex subset of $\\mathbb{R}^n$ are homotopic by straight lines"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-straight-line-homotopies-are-continuous, def-homotopy-relative-and-path-homotopy]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty and convex in the sense stated in [[lem-straight-line-homotopies-are-continuous]], and let $f,g:X\to C$ be continuous. Then

$$H(x,t)=(1-t)f(x)+tg(x)$$

is a homotopy from $f$ to $g$.

## Facts & Assumptions

**Given:** A nonempty convex $C\subseteq\mathbb R^n$ with $n\ge1$ and continuous maps $f,g:X\to C$.

[L1] The straight-line formula defines a continuous map $H:X\times I\to C$ ([[lem-straight-line-homotopies-are-continuous]]).

[A1] A homotopy from $f$ to $g$ is a continuous $H:X\times I\to C$ with $H(x,0)=f(x)$ and $H(x,1)=g(x)$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 The map $H(x,t)=(1-t)f(x)+tg(x)$ is continuous by [L1]. [L1]

1.2 Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. [algebra]

2.1 Thus $H$ satisfies the continuity and endpoint conditions of [A1], so it is a homotopy from $f$ to $g$. [step 1.1, step 1.2, A1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-straight-line-homotopies-are-continuous",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$. A subset $C\\subseteq\\mathbb R^n$ is called **convex** here when $$u,v\\in C,\\ t\\in[0,1]\\quad\\Longrightarrow\\quad(1-t)u+tv\\in C.$$ If $X$ is a topological space and $f,g:X\\to C$ are continuous, where $C$ has the subspace topology from $\\mathbb R^n$, then $$H:X\\times I\\longrightarrow C,\\qquad H(x,t)=(1-t)f(x)+tg(x),$$ is continuous.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-homotopy-relative-and-path-homotopy",
      "source_section": "Definition",
      "quote": "A **homotopy from $f$ to $g$** is a continuous map",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The map $H(x,t)=(1-t)f(x)+tg(x)$ is continuous by [L1]. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\\in X$. [algebra]",
      "step": "1.2",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus $H$ satisfies the continuity and endpoint conditions of [A1], so it is a homotopy from $f$ to $g$. [step 1.1, step 1.2, A1] ∎",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1",
        "1.2"
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
      "reason": "the statement assumes n>=1, so the zero-dimensional case is outside its hypotheses"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the displayed Euclidean formulas remain valid for n=1"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 through 2.1 include the coincident-map and singleton-target cases"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1 verifies H(x,0)=f(x) and H(x,1)=g(x)"
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
    "source": "thm-two-maps-into-a-convex-set-are-homotopic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-straight-line-homotopies-are-continuous",
    "declared_target": "lem-straight-line-homotopies-are-continuous",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-maps-into-a-convex-set-are-homotopic",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-relative-and-path-homotopy",
    "declared_target": "def-homotopy-relative-and-path-homotopy",
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

### `def-homotopy-relative-and-path-homotopy`

````markdown
---
id: def-homotopy-relative-and-path-homotopy
kind: definition
title: "Homotopies of continuous maps, homotopies relative to a subspace, and path homotopies relative to the endpoints"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, def-interval, def-path-connected]
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

Write $I=[0,1]$ with its usual subspace topology, as in [[def-path-connected]]. Let $X$ and $Y$ be topological spaces, and let $f,g:X\to Y$ be continuous maps ([[def-continuous-map-top]]).

A **homotopy from $f$ to $g$** is a continuous map

$$H:X\times I\longrightarrow Y$$

from the product space ([[def-product-topology]]) such that $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. When such an $H$ exists, $f$ and $g$ are **homotopic**, written $f\simeq g$.

Let $A\subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]). The homotopy $H$ is a **homotopy relative to $A$**, or a homotopy **rel $A$**, when

$$H(a,t)=f(a)=g(a)\qquad(a\in A,\ t\in I).$$

Thus a homotopy rel $A$ can exist only when $f|_A=g|_A$, and every ordinary homotopy is a homotopy rel $\varnothing$. We write $f\simeq_A g$ when a homotopy rel $A$ exists.

If $\alpha,\beta:I\to Y$ are paths with the same initial point and the same terminal point ([[def-path-connected]]), a **path homotopy from $\alpha$ to $\beta$ relative to the endpoints** is a homotopy $H:I\times I\to Y$ rel $\{0,1\}$. Explicitly,

$$H(s,0)=\alpha(s),\quad H(s,1)=\beta(s),\quad H(0,t)=\alpha(0)=\beta(0),\quad H(1,t)=\alpha(1)=\beta(1).$$

The first coordinate $s$ parametrises the path and the second coordinate $t$ parametrises the deformation.

## Remarks

- The adjective *relative* means pointwise fixed throughout the deformation, not merely mapped back into $A$.
- A homotopy is a map on a product. A family of maps $H_t(x):=H(x,t)$ is not by itself a homotopy unless the joint map $(x,t)\mapsto H_t(x)$ is continuous.
````

### `lem-straight-line-homotopies-are-continuous`

````markdown
---
id: lem-straight-line-homotopies-are-continuous
kind: lemma
title: "For continuous maps into a convex subset of $\\mathbb{R}^n$, the straight-line formula defines a continuous homotopy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-product-universal-property, thm-componentwise-limits-and-continuity, def-subspace-topology-top, thm-continuity-characterisations-top, lem-product-topology-on-rn]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. A subset $C\subseteq\mathbb R^n$ is called **convex** here when

$$u,v\in C,\ t\in[0,1]\quad\Longrightarrow\quad(1-t)u+tv\in C.$$

If $X$ is a topological space and $f,g:X\to C$ are continuous, where $C$ has the subspace topology from $\mathbb R^n$, then

$$H:X\times I\longrightarrow C,\qquad H(x,t)=(1-t)f(x)+tg(x),$$

is continuous.

## Facts & Assumptions

**Given:** A natural $n\ge1$, a convex subspace $C\subseteq\mathbb R^n$, a topological space $X$, and continuous maps $f,g:X\to C$.

[A1] Convexity is the displayed condition in the Statement.

[L1] Product projections are continuous, and a map into a product is continuous exactly when all component maps are continuous ([[thm-product-universal-property]]).

[L2] The product topology on $\mathbb R^m$ agrees with its Euclidean metric topology for every $m\ge1$ ([[lem-product-topology-on-rn]]).

[L3] For maps from a metric space into $\mathbb R^m$, continuity is componentwise; sums and scalar multiples of continuous vector-valued maps and inner products of two such maps are continuous ([[thm-componentwise-limits-and-continuity]], clauses 1 and 3).

[L4] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

[L5] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Addition and multiplication $\mathbb R^2\to\mathbb R$ are continuous. Indeed the coordinate projections are continuous by [L1], and by [L2] may be read as continuous scalar functions on the Euclidean metric space $\mathbb R^2$. The identity map $z\mapsto z$ and the constant map $z\mapsto(1,1)$ are continuous, so [L3] makes their inner product $z_0+z_1$ continuous. The maps $z\mapsto(z_0,0)$ and $z\mapsto(z_1,0)$ are continuous by the componentwise part of [L3], and their inner product $z_0z_1$ is continuous by its algebra part. [L1, L2, L3]

2.1 Consequently, if $a,b:Z\to\mathbb R$ are continuous on an arbitrary topological space $Z$, then $a+b$ and $ab$ are continuous: the pair $(a,b):Z\to\mathbb R^2$ is continuous by [L1] and [L2], and composing it with the two maps of step 1.1 is continuous because the preimage of an open set under a composite is an iterated preimage, which is open by [L5]. Constant functions and additive inverses are continuous by the same argument, using a constant component and the continuous scalar multiple supplied by [L3]. [step 1.1, L1, L2, L3, L5]

3.1 Let $\iota:C\hookrightarrow\mathbb R^n$ be the inclusion and put $F=\iota\circ f$, $G=\iota\circ g$. These ambient maps are continuous by [L4]. For $Z=X\times I$, let $p_X:Z\to X$ and $\tau:Z\to I\subseteq\mathbb R$ be the projections. Each scalar coordinate $F_k\circ p_X$ and $G_k\circ p_X$ is continuous: coordinate projections on $\mathbb R^n$ are continuous by [L1] and [L2], and composites preserve continuity by the preimage calculation of step 2.1. The scalar map $\tau$ is continuous, also as a map into $\mathbb R$, by [L1] and [L4]. [L1, L2, L4, L5]

4.1 By step 2.1, for every $k<n$ the function $(x,t)\mapsto(1-t)F_k(x)+tG_k(x)$ is continuous on $Z$. Therefore the ambient map $\widetilde H:Z\to\mathbb R^n$ with these coordinates is continuous by [L1] and [L2]. [step 2.1, step 3.1, L1, L2]

5.1 Convexity [A1] gives $\widetilde H(x,t)\in C$ for every $(x,t)\in Z$. Since the composite of $H:Z\to C$ with the inclusion $\iota$ is $\widetilde H$, [L4] makes $H$ continuous into $C$. [step 4.1, A1, L4] ∎

## Remarks

The continuity argument uses only products, subspaces and ordinary Euclidean continuity. Convexity is used solely to ensure that the straight-line formula takes values in $C$.
````

