---
id: prop-tqbf-is-in-pspace
kind: proposition
title: "TQBF is in PSPACE"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quantified-boolean-formula-and-tqbf, def-pspace-and-npspace]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

The language TQBF belongs to PSPACE.

## Facts & Assumptions

**Given:** an input quantified Boolean formula $\Phi$.

[L1] TQBF is the language of true quantified Boolean formulas ([[def-quantified-boolean-formula-and-tqbf]]).

[L2] A language lies in PSPACE exactly when some deterministic machine decides it using polynomial space ([[def-pspace-and-npspace]]).

## Proof

**Proof technique:** direct.

1.1 If $\Phi$ has no quantifiers, then by [L1] one only needs to evaluate a quantifier-free Boolean formula under a fully specified truth assignment. That can be done by a deterministic left-to-right parse using space polynomial in $|\Phi|$. [L1, given]

1.2 Suppose $\Phi$ begins with $\exists x\,\Psi(x)$. Recursively evaluate $\Psi(0)$ and, if necessary, $\Psi(1)$; accept exactly when at least one branch returns true. If instead $\Phi$ begins with $\forall x\,\Psi(x)$, recursively evaluate both $\Psi(0)$ and $\Psi(1)$ and accept exactly when both are true. By [L1], this is exactly the truth definition of the quantified formula. [L1, construct]

2.1 The recursion depth is at most the number of quantified variables, hence at most $|\Phi|$. At each level the machine stores the current parse position and the current partial assignment, both of polynomial size. So the whole depth-first evaluation uses polynomial space, even though it may take exponential time. [step 1.2, algebra]

3.1 By [L2], the deterministic recursive evaluator places TQBF in PSPACE. [L2, step 1.1, step 2.1] ∎
