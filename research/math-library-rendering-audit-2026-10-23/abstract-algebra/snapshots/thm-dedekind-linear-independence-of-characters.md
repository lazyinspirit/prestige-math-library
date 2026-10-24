---
id: thm-dedekind-linear-independence-of-characters
kind: theorem
title: "Dedekind's linear independence theorem for distinct characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-homomorphism, def-linear-independence]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.14"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a group and $K$ a field. Every finite family of distinct group homomorphisms $G\to K^\times$ is linearly independent over $K$ as a family of functions.

## Facts & Assumptions

**Given:** A finite family of pairwise distinct characters $\chi_i:G\to K^\times$, where character means group homomorphism ([[def-group-homomorphism]]), and linear independence has the function-space meaning of [[def-linear-independence]].

[A1] For every character $\chi$, one has $\chi(gx)=\chi(g)\chi(x)$, and every value $\chi(g)$ lies in $K^\times$ and is nonzero.

## Proof

**Proof technique:** contradiction.

1.1 The empty family is independent vacuously, and a singleton is independent because its character never vanishes. Suppose, for contradiction, that some finite distinct family is dependent; among all nonzero relations choose one with the least support, relabel its supported characters as $\chi_1,\ldots,\chi_r$, and divide by the first nonzero coefficient to write $\sum_{i=1}^r a_i\chi_i(x)=0$ for every $x\in G$, where $r\ge2$ and $a_1=1$. [assume-contra, choose]

2.1 Since $\chi_1\ne\chi_r$, choose $g\in G$ with $\chi_1(g)\ne\chi_r(g)$. Evaluate the relation of step 1.1 at $gx$ and subtract $\chi_r(g)$ times its value at $x$ to obtain $\sum_{i=1}^{r-1}a_i(\chi_i(g)-\chi_r(g))\chi_i(x)=0$ for every $x\in G$. [step 1.1, A1, choose, algebra]

3.1 The new relation has support smaller than $r$ but is nonzero because its $\chi_1$-coefficient is $\chi_1(g)-\chi_r(g)\ne0$. This contradicts the minimality in step 1.1, so no nontrivial relation exists and the characters are linearly independent. [step 1.1, step 2.1, discharge-contradiction] ∎
