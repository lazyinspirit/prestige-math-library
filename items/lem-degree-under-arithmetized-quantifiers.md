---
id: lem-degree-under-arithmetized-quantifiers
kind: lemma
title: "Degree under Boolean elimination operators"
status: published
origin: pipeline
deps: [def-arithmetization-of-a-boolean-formula]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1 p.158 and \u00a78.5.3 opening degree-growth paragraph p.160"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $p\in F[X_1,\ldots,X_n]$, with $n\geq1$, and eliminate variable $X_i$. Write $p_b=p|_{X_i=b}$ for $b=0,1$. If $\deg_{X_j}p\leq d_j$ for $j\ne i$, with nonnegative upper bounds including zero polynomials, then $p_0+p_1$ has bound $d_j$, while $p_0p_1$ and $p_0+p_1-p_0p_1$ have bound $2d_j$.

If $p$ is Boolean-valued on the Boolean cube, the latter two operators represent universal and existential quantification there, respectively. The sum operator adds the two field values; it is not a Boolean OR operator over arbitrary fields. Repeated product elimination can produce exponentially growing degrees.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The Boolean AND and OR arithmetizations are uv and u+v-uv ([[def-arithmetization-of-a-boolean-formula]]).

## Proof

1.1 Substituting $0$ or $1$ for $X_i$ does not increase any exponent in another variable. Addition preserves the maximum of the remaining bounds and multiplication adds them. Thus the sum has bound $d_j$ and both expressions containing a product have bound $2d_j$, including when a restriction vanishes or $d_j=0$. [given, algebra]

1.2 At any remaining Boolean assignment, put $u=p_0$ and $v=p_1$; by hypothesis $u,v\in\{0,1\}$. The AND and OR gate formulas give $uv$ and $u+v-uv$ as the universal and existential truth values. The sum instead gives $2$ when both inputs are one: in characteristic two this is zero, and in other characteristics it is not one. When $n=1$, these are simply operations on two constants. [F1, algebra]

2.1 Actual exponential growth is possible: start with $p=Y$ and eliminate $k$ other variables absent from $p$ using the product operator. Each elimination squares the current polynomial, leaving the formal polynomial $Y^{2^k}$. Hence degree growth is not merely a loose bound. [step 1.1, algebra] ∎
