---
id: def-qbf-arithmetization-operators
kind: definition
title: "Field arithmetization of QBF quantifiers"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-arithmetization-of-a-boolean-formula, def-quantified-boolean-formula-and-tqbf, def-field]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Definition

Let $F$ be a field ([[def-field]]) and let $m\ge1$. For a polynomial $P\in F[X_1,\dots,X_m]$ and an index $1\le i\le m$, write
$$P|_{X_i=0},\qquad P|_{X_i=1}$$
for the two polynomials in $F[X_1,\dots,X_{i-1},X_{i+1},\dots,X_m]$ obtained by substituting the field elements $0$ and $1$ for $X_i$. Define the **field quantifier operators**
$$A_{X_i}P:=(P|_{X_i=0})\,(P|_{X_i=1}),\qquad E_{X_i}P:=1-(1-P|_{X_i=0})(1-P|_{X_i=1}),$$
both of which again lie in $F[X_1,\dots,X_{i-1},X_{i+1},\dots,X_m]$.

Let $\Phi=Q_1x_1\,Q_2x_2\cdots Q_nx_n\,\psi$ be a closed prenex quantified Boolean formula ([[def-quantified-boolean-formula-and-tqbf]]) with quantifier-free matrix $\psi$, and let $b:=P_\psi\in F[X_1,\dots,X_n]$ be the arithmetization of the matrix ([[def-arithmetization-of-a-boolean-formula]]). The **ordered arithmetization** of $\Phi$ over $F$ is the constant obtained from $b$ by processing the quantifiers from the innermost to the outermost: put $P^{(n)}:=b$ and, for $j=n,n-1,\dots,1$, put $P^{(j-1)}:=A_{X_j}P^{(j)}$ when $Q_j=\forall$ and $P^{(j-1)}:=E_{X_j}P^{(j)}$ when $Q_j=\exists$. The resulting $P^{(0)}$ is a polynomial in no variables, hence a field element.

## Remarks

- The operators act on the polynomial and the index, not on a formula tree: each specialization is a well-defined polynomial in the remaining variables, and the two displayed expressions are computed in that polynomial ring. No enumeration, decomposition, isomorphism or choice is made in the definition, and no expansion into monomials is required.
- The convention "inner quantifiers first" is used throughout this page: the prefix is read left to right and $Q_n$, the innermost quantifier, is processed first, so $Q_1$ is processed last. The operator list of [[def-multilinearization-operator]] refines this ordered convention.
- The field elements $0$ and $1$ are the two Boolean values, and they are distinct in a field. The gate operations reproduce the truth tables only at Boolean inputs; that agreement is the subject of [[lem-quantifier-polynomials-agree-on-booleans]], and no such agreement is asserted here.
- The definition itself does not assert a truth-value theorem. For the multilinearized refinement of this sequence in [[def-multilinearization-operator]], agreement with QBF truth is proved in [[lem-ordered-arithmetization-evaluates-to-the-truth-value]].
- For $n=0$ the matrix is a formula with no variable occurrences, $b\in F$ is a constant, and $P^{(0)}=b$.
