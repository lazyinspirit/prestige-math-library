---
id: def-qa-finite-abelian-character-dual
kind: definition
title: Dual group of a finite abelian group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-additive-character-of-a-finite-abelian-group, def-group]
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
verification:
  precheck: n/a
---

## Definition

Let $G$ be a finite abelian group ([[def-group]]) written additively. Its set of additive characters is
$$\widehat G:=\{\chi:G\to\mathbb C^{\times}:\chi(x+y)=\chi(x)\chi(y)\text{ for all }x,y\in G\},$$
where an additive character is the group homomorphism of [[def-additive-character-of-a-finite-abelian-group]]. For $\chi,\psi\in\widehat G$, define their pointwise product by $(\chi\psi)(x):=\chi(x)\psi(x)$. The constant-one function is denoted $1$, and the pointwise inverse is $\chi^{-1}(x):=\chi(x)^{-1}$.

This specifies a set and operations. The later theorem `thm-qa-finite-abelian-character-dual-is-finite-abelian-group` proves that these operations make $\widehat G$ a finite abelian group; no isomorphism $G\cong\widehat G$ is part of this definition.
