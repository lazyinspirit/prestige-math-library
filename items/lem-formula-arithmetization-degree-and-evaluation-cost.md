---
id: lem-formula-arithmetization-degree-and-evaluation-cost
kind: lemma
title: "Formula degree and point-evaluation cost"
status: published
origin: pipeline
deps: [def-arithmetization-of-a-boolean-formula]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: induction
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1, p.158, 3CNF construction generalized by the same gate induction"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $\varphi$ be a formula with $s\geq1$ syntax nodes on $n\geq0$ variables, and let $t_i$ count the leaves labelled $x_i$. Then $P_\varphi$ has individual degree at most $t_i$ in $X_i$ and total degree at most $\sum_i t_i$. The bounds include the zero polynomial (which satisfies every nonnegative degree upper bound). At any supplied point, $P_\varphi$ can be evaluated with $O(s)$ field operations.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The polynomial is represented by a formula tree with the specified arithmetic gates ([[def-arithmetization-of-a-boolean-formula]]).

## Proof

1.1 For a constant leaf all degree bounds are zero; for a variable leaf the individual bound is one in that variable and zero otherwise, and the total bound is one. Each leaf needs no arithmetic operation. [F1, base]

1.2 Assume the bounds for the children. Subtracting a polynomial from $1$ does not raise any nonnegative degree bound. At a binary gate with child bounds $a,b$ (individual or total), the product has bound $a+b$ and the sum has bound $\max(a,b)\leq a+b$. Thus AND and OR obey the sum of the child occurrence bounds, even if coefficients cancel or a child is zero. [F1, ih, algebra]

2.1 Occurrence counts add over child trees, so the preceding leaf and parent argument proves all degree bounds by structural induction. A bottom-up evaluator visits each syntax node once and applies at most a fixed number of operations to its stored child values; the OR gate reuses those values. Hence its field-operation count is $O(s)$. This includes variable-free formulas and unused variables. [step 1.1, step 1.2, discharge-induction, algebra] ∎
