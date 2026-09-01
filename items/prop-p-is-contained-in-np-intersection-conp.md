---
id: prop-p-is-contained-in-np-intersection-conp
kind: proposition
title: "$P \\subseteq NP \\cap coNP$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p, def-np-by-verifiers, def-conp, def-polynomially-balanced-verifier]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
---

## Statement

Every language in $P$ belongs to both $NP$ and $coNP$.

## Facts & Assumptions

**Given:** A language $L\subseteq\{0,1\}^*$ in $P$.

[L1] $L\in P$ means that some deterministic Turing machine decides $L$ in polynomial time, by [[def-p]].

[L2] $L\in NP$ means that $L$ has a polynomial-time verifier with polynomially bounded certificates, by [[def-np-by-verifiers]] and [[def-polynomially-balanced-verifier]].

[L3] $L\in coNP$ means that the complement of $L$ belongs to $NP$, by [[def-conp]].

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a polynomial-time decider $D$ for $L$. Use the empty certificate $u=\varepsilon$ and define the verifier relation $R_L$ by $(x,\varepsilon)\in R_L$ exactly when $D$ accepts $x$, with no other certificates allowed. Then the paired language for $R_L$ is decidable in polynomial time by running $D$ on the first component and checking that the second component is empty. Thus [L2] gives $L\in NP$. [L1, L2, given, construct]

2.1 Swap the accepting and rejecting halting states of $D$ to obtain a polynomial-time decider for the complement $\{0,1\}^*\setminus L$. Repeating step 1.1 with the same empty-certificate idea shows that the complement belongs to $NP$. Therefore [L3] gives $L\in coNP$. [L1, L2, L3, step 1.1, construct]

3.1 Steps 1.1 and 2.1 show that every language in $P$ lies in $NP\cap coNP$. [step 1.1, step 2.1] ∎
