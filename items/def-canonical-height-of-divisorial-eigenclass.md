---
id: def-canonical-height-of-divisorial-eigenclass
kind: definition
title: "Canonical height of a polarized divisorial eigenclass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - thm-canonical-height-functional-equation-and-bounded-error
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms"
      url: "https://www.numdam.org/article/CM_1993__89_2_163_0.pdf"
      locator: "§1, Theorem 1.1 and Corollary 1.1.1, printed pp. 166–170"
    - title: "Joseph H. Silverman, Arithmetic and dynamical degrees on projective varieties"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
      locator: "Lecture 3, printed pp. 14–16"
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice. For a polarized endomorphism $(X,f,L,d)$ over a number field, choose any Weil height representative $h_L$ for the ample invertible sheaf $L$. The **canonical height** attached to the divisorial eigenclass $[L]$ is the real-valued function on $X(\overline K)$ defined by
$$
\widehat h_{f,L}(P)=\lim_{n\to\infty}d^{-n}h_L(f^n(P)).
$$
The choice of representative does not affect the function.

## Definition references

[[thm-canonical-height-functional-equation-and-bounded-error]]

## Facts & Assumptions

**Given:** The Axiom of Choice and a polarized endomorphism $(X,f,L,d)$ over a number field and a Weil height representative $h_L$.

[A1] The number-field height construction and the canonical-height supplier assume the Axiom of Choice. ([[def-axiom-of-choice]])

[F1] The displayed limit exists, is independent of the representative, differs from $h_L$ by a bounded function, and satisfies the functional equation. ([[thm-canonical-height-functional-equation-and-bounded-error]])

## Verification

1.1 The limit in the definition exists for every algebraic point by [F1], so the formula assigns a real number to each point. [given, F1]

2.1 If a different representative is used, [F1] gives the same limit; hence the assignment is a well-defined function of $(X,f,L,d)$ and not of the chosen representative. [given, F1, step 1.1] ∎
