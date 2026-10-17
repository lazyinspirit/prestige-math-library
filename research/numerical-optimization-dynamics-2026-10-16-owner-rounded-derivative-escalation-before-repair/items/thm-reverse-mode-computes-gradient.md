---
id: thm-reverse-mode-computes-gradient
kind: theorem
title: "Reverse mode computes the exact gradient of the real-arithmetic graph"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, lem-finite-straight-line-program-defines-c1-map, alg-reverse-mode-automatic-differentiation, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "Atilım Güneş Baydin and Barak A. Pearlmutter, Automatic Differentiation of Algorithms for Machine Learning, complete arXiv text, §§2–3"
      url: "https://arxiv.org/pdf/1404.7456"
---

## Statement

For a finite $C^1$ program with one scalar output $f$, on a fixed strict branch and at every admissible $x$, the reverse-mode algorithm returns $Df(x)^T1$, the gradient of $f$. More precisely, at any operation node $i$, if its value is temporarily treated as an independent variable and all later operations are recomputed from it, then the accumulated cotangent at $i$ is the derivative of the scalar output with respect to that independent node value.

## Facts & Assumptions

**Given:** The graph, its admissible input $x$, and a fixed strict branch.

[F1] [[def-finite-straight-line-computational-program]]: the output is obtained from finitely many primitive nodes in topological order, and repeated parent slots are distinct edges.

[F2] [[lem-finite-straight-line-program-defines-c1-map]]: every node map is $C^1$ on the fixed branch.

[F3] [[alg-reverse-mode-automatic-differentiation]]: reverse mode seeds the scalar output with cotangent $1$ and adds $D_k\phi_j^T\bar z_j$ to each parent slot in reverse topological order.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the ordered composition of its total derivatives.

## Proof

**Proof technique:** reverse induction on graph nodes.

1.1 For each node $i$, define a directed path from $i$ to the output by choosing one parent slot at each successive operation. Associate to an edge from parent slot $k$ of node $j$ the linear map $D_k\phi_j$ at the stored primal arguments. Repeated slots give separate edges. [F1, F2, construct]

2.1 Fix a node $i$ and form the downstream map $F_i(u)$ by replacing its value with an independent $u$ while holding earlier node values fixed and then evaluating all later operations in topological order. Repeated use of [F4] shows that the derivative contribution along a fixed path from $i$ to $o$ is the ordered product of its edge maps. At each operation, its derivative is linear in the concatenated parent direction, so contributions from distinct parent slots add. Induction backward from the output therefore gives $DF_i(z_i)^T$ as the sum of the path products over all paths from $i$ to $o$; if there is no such path, the sum is zero. [F1, F2, F4, step 1.1, construct, algebra]

3.1 At the output node the path sum is the identity scalar $1$, matching [F3]. In reverse topological order, every path from $i$ to $o$ begins with exactly one outgoing parent-slot edge $i\to j$; after that edge its remaining portion is a path from $j$ to $o$. Therefore the path-sum recurrence is $\bar z_i=\sum_{j,k:p_{j,k}=i}D_k\phi_j^T\bar z_j$, exactly the accumulation performed by [F3]. Induction gives $\bar z_i=DF_i(z_i)^T$ for each operation node and, at input coordinates, $\bar x=Df(x)^T1$. [F1, F3, step 2.1, algebra]

4.1 The algorithm returns precisely those input cotangents, proving the statement. [F3, step 3.1] ∎
