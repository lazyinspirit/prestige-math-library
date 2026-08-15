---
id: prop-finite-modification-preserves-rationality-and-eventual-recurrence
kind: proposition
title: "Changing finitely many coefficients preserves rationality and eventual linear recurrence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-recurrence-iff-rational-generating-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.2.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, ultimately recurrent sequences"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Let $(a_n)$ and $(b_n)$ be sequences over a field which differ at only finitely many indices. Then the generating series $\sum a_nx^n$ is rational if and only if $\sum b_nx^n$ is rational. Equivalently, $(a_n)$ is eventually linearly recurrent if and only if $(b_n)$ is eventually linearly recurrent.

A finite modification need not preserve a recurrence with starting index zero.

## Facts & Assumptions

**Given:** Two sequences $(a_n)$ and $(b_n)$ over a field which differ at only finitely many indices.

[L1] A coefficient sequence is eventually linearly recurrent if and only if its formal generating function is rational ([[thm-linear-recurrence-iff-rational-generating-function]]).

## Proof

**Proof technique:** direct.

1.1 The difference $H(x)=\sum_{n\ge0}(a_n-b_n)x^n$ has finite support, so it is a polynomial. [given]

2.1 If $A(x)=\sum a_nx^n=P/Q$ is rational, then $B(x)=A(x)-H(x)=(P-HQ)/Q$ is rational; the same argument with $A=B+H$ proves the converse. [step 1.1, algebra]

3.1 Applying [L1] to both series converts step 2.1 into the equivalence of eventual recurrence. [step 2.1, L1]

4.1 For the final warning, the zero sequence satisfies $a_{n+1}+a_n=0$ from zero, while changing only $a_0$ to $1$ destroys that identity at $n=0$, even though the modified sequence is eventually zero. [step 3.1] ∎
