---
id: def-arithmetization-of-a-boolean-formula
kind: definition
title: "Arithmetization of Boolean formulas"
status: published
origin: pipeline
deps: [def-field, def-multivariate-polynomial-ring-by-iteration]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local definition and direct-prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1, printed p.158 (PDF p.174)"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $F$ be a field and let $n\geq0$. Here a **Boolean formula** on $x_1,\ldots,x_n$ is a finite rooted syntax tree whose leaves are variables or the constants $\bot,\top$, whose unary nodes are NOT, and whose ordered binary nodes are AND or OR. Its Boolean value is obtained from a truth assignment by the usual truth tables: NOT reverses a bit, AND is true exactly when both bits are true, and OR is true exactly when at least one bit is true. Its **arithmetization** is the formal polynomial $P_\varphi\in F[X_1,\ldots,X_n]$ defined from the leaves upward by
$$P_\bot=0,\quad P_\top=1,\quad P_{x_i}=X_i,\quad P_{\neg\psi}=1-P_\psi,$$
$$P_{\psi\land\theta}=P_\psi P_\theta,\qquad P_{\psi\lor\theta}=P_\psi+P_\theta-P_\psi P_\theta.$$
Here field and polynomial ring mean [[def-field]] and [[def-multivariate-polynomial-ring-by-iteration]]. Retain the original formula tree with these gate operations; a gate can use its two already computed child values more than once. Expanding into monomials is unnecessary. Boolean false and true are identified with the distinct field elements $0$ and $1$.

Every child has smaller tree height than its parent, so the displayed rules assign a unique polynomial at each node in finitely many stages. All the operations remain in the polynomial ring. For $n=0$ that ring is $F$, and the same construction applies to formulas with only constant leaves.
