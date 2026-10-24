---
id: fs-np-means-not-polynomial
kind: false-statement
title: "FALSE: NP means not polynomial-time solvable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-np-by-verifiers, prop-p-is-contained-in-np-intersection-conp]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

NP means "not polynomial-time solvable."

## Facts & Assumptions

**Given:** The classes $P$ and $NP$.

[L1] Every language in $P$ also lies in $NP$, by [[prop-p-is-contained-in-np-intersection-conp]].

[L2] NP is a language class defined by polynomially checkable certificates, by [[def-np-by-verifiers]].

## Refutation

**Proof technique:** direct.

1.1 By [L1], any language already known to be in $P$ is automatically also in $NP$. [L1, given]

2.1 Step 1.1 contradicts the slogan in the statement: a polynomial-time solvable language can still belong to $NP$. By [L2], NP is about efficiently verifiable yes-certificates, not about being known outside polynomial time. [L2, step 1.1] ∎
