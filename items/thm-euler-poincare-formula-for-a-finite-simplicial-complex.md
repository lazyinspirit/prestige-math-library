---
id: thm-euler-poincare-formula-for-a-finite-simplicial-complex
kind: theorem
title: "The Euler-Poincare formula for a finite simplicial complex with free homology"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simplicial-euler-characteristic, def-simplicial-cycles-boundaries-and-homology, thm-euler-poincare-formula-for-finite-free-complexes]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

Let $K$ be a finite simplicial complex. Assume that each simplicial homology
group $H_n^{\mathrm{simp}}(K)$ is free of finite rank. Then
$$\chi(K)=\sum_{n \geq 0} (-1)^n \operatorname{rank} H_n^{\mathrm{simp}}(K).$$

## Proof

**Given:** A finite simplicial complex $K$ whose simplicial homology groups are free of finite rank.

1.1 For each $n$, the chain group $C_n(K)$ is free abelian on the oriented $n$-simplices of $K$, so $\operatorname{rank} C_n(K)=f_n(K)$. Since $K$ is finite, only finitely many of these groups are nonzero. [given]

2.1 Therefore the simplicial chain complex of $K$ is a bounded chain complex of finite-rank free abelian groups, and its homology groups are free of finite rank by hypothesis. The finite-free Euler-Poincare theorem applies and gives $\sum_{n \geq 0} (-1)^n \operatorname{rank} C_n(K)=\sum_{n \geq 0} (-1)^n \operatorname{rank} H_n^{\mathrm{simp}}(K)$. [step 1.1]

3.1 Replace $\operatorname{rank} C_n(K)$ by $f_n(K)$ using step 1.1, and replace the left-hand side by $\chi(K)$ by definition. This yields the stated formula. [step 1.1, step 2.1] ∎
