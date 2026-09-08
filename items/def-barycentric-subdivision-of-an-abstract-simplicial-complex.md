---
id: def-barycentric-subdivision-of-an-abstract-simplicial-complex
kind: definition
title: "Barycentric subdivision of an abstract simplicial complex"
status: draft
origin: pipeline
deps: ["def-face-poset-and-order-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Definition

The **barycentric subdivision** of $K$ is $\operatorname{sd}K=\Delta F(K)$, using [[def-face-poset-and-order-complex]]. Thus its vertices are the nonempty faces $\sigma$ of $K$, and its nonempty simplices are strict chains $\sigma_0\subsetneq\cdots\subsetneq\sigma_q$.

A subcomplex $A\subseteq K$ gives $F(A)\subseteq F(K)$ with the induced order; hence every chain in $F(A)$ is a chain in $F(K)$ and $\operatorname{sd}A$ is a subcomplex. The vertex associated to $\{v\}$ is distinct as a label from $v$, though its geometric position will be the same. There is no vertex for the empty face; the complex with no vertices subdivides to itself.

## Source locators

2.5.7–2.5.10, pp.49–52.

