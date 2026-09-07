---
id: def-arithmetization-of-a-boolean-formula
kind: definition
title: "Arithmetization of Boolean formulas"
status: draft
origin: pipeline
deps: [def-boolean-formula-cnf-and-sat, def-field, def-multivariate-polynomial-ring-by-iteration]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1, printed p.158 (PDF p.174)"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $F$ be a field and let $\varphi$ be a Boolean formula on variables $x_1,\ldots,x_n$, with $n\geq0$. Use the syntax of [[def-boolean-formula-cnf-and-sat]], with binary AND and OR. Its **arithmetization** is the formal polynomial $P_\varphi\in F[X_1,\ldots,X_n]$ defined recursively by
$$P_\bot=0,\quad P_\top=1,\quad P_{x_i}=X_i,\quad P_{\neg\psi}=1-P_\psi,$$
$$P_{\psi\land\theta}=P_\psi P_\theta,\qquad P_{\psi\lor\theta}=P_\psi+P_\theta-P_\psi P_\theta.$$
Here field and polynomial ring mean [[def-field]] and [[def-multivariate-polynomial-ring-by-iteration]]. Retain the original formula tree with these gate operations; a gate can use its two already computed child values more than once. Expanding into monomials is unnecessary. Boolean false and true are identified with the distinct field elements $0$ and $1$.
