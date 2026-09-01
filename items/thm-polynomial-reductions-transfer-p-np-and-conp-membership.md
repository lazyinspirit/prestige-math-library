---
id: thm-polynomial-reductions-transfer-p-np-and-conp-membership
kind: theorem
title: "Polynomial-time many-one reductions transfer P-, NP-, and coNP-membership"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-time-many-one-reduction, lem-polynomial-reductions-compose, def-p, def-np-by-verifiers, def-conp, def-polynomially-balanced-verifier]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $A,B\subseteq\{0,1\}^*$ and suppose that $A\le_p B$.

1. If $B\in P$, then $A\in P$.
2. If $B\in NP$, then $A\in NP$.
3. If $B\in coNP$, then $A\in coNP$.

## Facts & Assumptions

**Given:** Binary languages $A,B\subseteq\{0,1\}^*$ and a fixed total
polynomial-time map $f$ witnessing $A\le_p B$.

[L1] A polynomial-time many-one reduction is a total polynomial-time membership-preserving map, by [[def-polynomial-time-many-one-reduction]].

[L2] Composites of polynomial-time many-one reductions are again polynomial-time many-one reductions, by [[lem-polynomial-reductions-compose]].

[L3] $P$ is the class of polynomial-time decidable languages, by [[def-p]].

[L4] $NP$ is the class of languages with polynomial-time verifiers and polynomially bounded certificates, by [[def-np-by-verifiers]] and [[def-polynomially-balanced-verifier]].

[L5] $coNP$ consists of complements of NP-languages, by [[def-conp]].

## Proof

**Proof technique:** direct.

1.1 Assume $B\in P$, and let $D_B$ be a polynomial-time decider for $B$ from [L3]. On input $x$, compute the fixed map $f(x)$ and then run $D_B$ on that output. By [L1], the answer is correct because $x\in A$ iff $f(x)\in B$, and the whole procedure is polynomial-time because both stages are. Thus $A\in P$. [L1, L3, given, construct]

1.2 Assume $B\in NP$. By [L4], choose a verifier relation $R_B$ and polynomial certificate bound $p$ for $B$. Using the fixed reduction map $f$, define a verifier for $A$ by declaring that $(x,u)$ is accepted exactly when $(f(x),u)\in R_B$. The output length $|f(x)|$ is polynomial in $|x|$, so the bound $p(|f(x)|)$ is still polynomial in $|x|$. Correctness follows from $x\in A\iff f(x)\in B\iff \exists u\text{ with } |u|\le p(|f(x)|) \text{ and } (f(x),u)\in R_B$. Therefore $A\in NP$. [L1, L4, given, construct]

2.1 Assume $B\in coNP$. Then $B^c\in NP$ by [L5]. The fixed reduction map $f$ also witnesses $A^c\le_p B^c$, because $x\in A^c\iff x\notin A\iff f(x)\notin B\iff f(x)\in B^c$. Applying step 1.2 to the reduction $A^c\le_p B^c$ gives $A^c\in NP$, and then [L5] yields $A\in coNP$. The composition principle [L2] guarantees that chaining such transfers remains inside the same reduction class. [L1, L2, L5, step 1.2, given]

3.1 Steps 1.1, 1.2, and 2.1 prove the three transfer clauses. [step 1.1, step 1.2, step 2.1] ∎
