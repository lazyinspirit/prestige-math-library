---
id: cor-cramers-rule-over-a-field
kind: corollary
title: "Over a field, for each right-hand side $b$, $Ax=b$ has a unique solution exactly when $\\det(A)$ is nonzero, and then Cramer's quotient formula holds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cramers-rule-over-a-commutative-ring,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       thm-invertible-matrix-theorem, thm-ring-matrix-arithmetic-laws,
       lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Interactive Linear Algebra"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, $n\geq1$, $A\in M_n(F)$, and fix $b\in F^n$. The
system $Ax=b$ has a unique solution if and only if $\det(A)\neq0$. In that
case

$$x_j=\frac{\det(A_j(b))}{\det(A)}\qquad(0\leq j<n).$$

## Facts & Assumptions

**Given:** $F,n,A,b$ as in the statement.

[F1] A field is a commutative ring, and every nonzero field element is a unit
([[lem-field-is-a-commutative-ring]]).

[L1] Over a commutative ring, a unit determinant gives the unique Cramer
solution $x_j=\det(A)^{-1}\det(A_j(b))$
([[thm-cramers-rule-over-a-commutative-ring]]).

[L2] A square matrix over a field is invertible exactly when its kernel is
zero ([[thm-invertible-matrix-theorem]]).

[L3] A positive-sized square matrix over a commutative ring is invertible
exactly when its determinant is a unit
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[L4] Matrix multiplication distributes over column addition
([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $\det(A)\neq0$, it is a unit by [F1], so [L1] gives the unique solution and the displayed quotient formula. [F1, L1]

1.2 Conversely, suppose $Ax=b$ has the unique solution $x$. If $Az=0$, then $A(x+z)=b$ by distributivity, so uniqueness gives $z=0$. Thus the kernel of $A$ is zero. [L4, given]

2.1 By [L2], step 1.2 makes $A$ invertible. By [L3] and [F1], $\det(A)$ is a unit and hence is nonzero. [step 1.2, L2, L3, F1]

3.1 Steps 1.1 and 2.1 prove both directions. [step 1.1, step 2.1] ∎