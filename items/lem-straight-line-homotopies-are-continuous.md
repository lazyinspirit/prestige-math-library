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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
  audited: 2026-07-31
sources:
  scraped: []
  references:
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
