---
id: lem-the-prism-triangulation-has-the-stated-oriented-boundary
kind: lemma
title: "The prism triangulation has the stated oriented boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prism-operator-for-a-homotopy, def-singular-boundary-operator]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Haynes Miller, Algebraic Topology I, Lecture 6"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/87a1ec7a7bcb92c59881ab6a8e70e0c2_MIT18_905F16_lec6.pdf"
pipeline_run: frontier-30
---

## Statement

Fix $n\geq 0$. Let $\iota_0,\iota_1:\Delta^n\to\Delta^n\times I$ be the bottom
and top inclusions, $\iota_\varepsilon(u)=(u,\varepsilon)$. Let
$$\Pi_n:=\sum_{i=0}^n(-1)^i\lambda_i\in C_{n+1}(\Delta^n\times I;\mathbb Z),$$
with the simplices $\lambda_i$ from [[def-prism-operator-for-a-homotopy]]. Then
$$\partial\Pi_n=\iota_1-\iota_0-\sum_{j=0}^n(-1)^j(\delta_j\times\operatorname{id}_I)_\#\Pi_{n-1},$$
where the last sum is omitted when $n=0$.

## Facts & Assumptions

**Given:** An integer $n\geq 0$.

[L1] The prism simplices $\lambda_i$ are the simplices of the standard triangulation of $\Delta^n\times I$ ([[def-prism-operator-for-a-homotopy]]).

[L2] The singular boundary is the alternating sum of the codimension-one faces ([[def-singular-boundary-operator]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then $\Pi_0=\lambda_0$ is the oriented edge from $(v_0,0)$ to $(v_0,1)$, so [L2] gives $\partial\Pi_0=\iota_1-\iota_0$. This is exactly the displayed formula with no side-prism sum. [L1, L2, given]

1.2 Assume $n\geq 1$. By [L2], each $\partial\lambda_i$ is the alternating sum of its $n+2$ codimension-one faces. The face opposite $(v_0,0)$ in $\lambda_0=[(v_0,0),(v_0,1),\dots,(v_n,1)]$ is the top face $\iota_1$, and the face opposite $(v_n,1)$ in $\lambda_n=[(v_0,0),\dots,(v_n,0),(v_n,1)]$ is the bottom face $\iota_0$. For each $1\le i\le n$, the face of $\lambda_i$ opposite $(v_i,0)$ is the same $n$-simplex as the face of $\lambda_{i-1}$ opposite $(v_{i-1},1)$, so these interior faces occur twice in $\sum_{i=0}^n(-1)^i\partial\lambda_i$ with opposite total signs and cancel. [L1, L2, given]

2.1 The remaining uncancelled faces are the top face $\iota_1$ from $\lambda_0$, the bottom face $-\iota_0$ from $\lambda_n$, and the side faces obtained by deleting one vertex $v_j$ of $\Delta^n$. For each fixed $j$, those side faces are exactly the prism simplices in the standard triangulation of $\delta_j(\Delta^{n-1})\times I$, and comparing the induced vertex order with the definition of $\Pi_{n-1}$ gives the total contribution $-(-1)^j(\delta_j\times\operatorname{id}_I)_\#\Pi_{n-1}$. Summing over $j$ and combining with steps 1.1 and 1.2 yields the stated boundary formula. [step 1.1, step 1.2, L1, L2, algebra] ∎
