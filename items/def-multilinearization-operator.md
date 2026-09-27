---
id: def-multilinearization-operator
kind: definition
title: "Multilinearization in one variable"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-qbf-arithmetization-operators, def-field, def-quantified-boolean-formula-and-tqbf]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Definition

Let $F$ be a field and let $P\in F[X_1,\dots,X_m]$ with $m\ge1$. For $1\le i\le m$ define the **multilinearization of $P$ in $X_i$** by
$$R_{X_i}P:=(1-X_i)\,(P|_{X_i=0})+X_i\,(P|_{X_i=1}).$$
This is a polynomial in $F[X_1,\dots,X_m]$ of degree at most one in $X_i$; in every other variable its degree is at most the corresponding degree of $P$.

Let $\Phi=Q_1x_1\cdots Q_nx_n\psi$ be a closed prenex quantified Boolean formula ([[def-quantified-boolean-formula-and-tqbf]]) with quantifier-free matrix $\psi$ and matrix arithmetization $b=P_\psi$ ([[def-qbf-arithmetization-operators]]). The **multilinearized ordered arithmetization** of $\Phi$ is obtained from $b$ by applying, for $j=n,n-1,\dots,1$, first the $j$ reductions $R_{X_1},R_{X_2},\dots,R_{X_j}$ in this order and then the quantifier operator $O_j$, where $O_j:=A_{X_j}$ when $Q_j=\forall$ and $O_j:=E_{X_j}$ when $Q_j=\exists$. The **operator list** of $\Phi$ is the resulting sequence of operations read in application order,
$$R_{X_1},\dots,R_{X_n},\,O_n,\quad R_{X_1},\dots,R_{X_{n-1}},\,O_{n-1},\quad\dots,\quad R_{X_1},\,O_1,$$
and its length is denoted $T$. Then $T=n(n+1)/2+n=n(n+3)/2$, and for $n=0$ the list is empty.

Write $P^{(n)}:=b$. For $j=n,\dots,1$, write $M_j$ for the polynomial obtained from $P^{(j)}$ by the $j$ reductions of the $j$-th block, and $P^{(j-1)}:=O_j(M_j)$. The final $P^{(0)}$ is a constant.

## Remarks

- Substituting $X_i=0$ into $R_{X_i}P$ gives $(1-0)P|_{X_i=0}+0=P|_{X_i=0}$, and substituting $X_i=1$ gives $P|_{X_i=1}$; so $R_{X_i}P$ agrees with $P$ where the substituted variable is Boolean, and its coefficient of $X_i$ is $P|_{X_i=1}-P|_{X_i=0}$.
- Reductions in distinct variables commute with one another, because $R_{X_i}$ alters only the $X_i$-dependence. The displayed order is the one the interactive protocol of [[def-shamir-protocol-for-tqbf]] reverses; it is recorded here so that the protocol has a definite node list.
- The operator list is not the same as the ordered arithmetization of [[def-qbf-arithmetization-operators]]: the reductions are inserted before each quantifier operation, and they are what keep the individual degrees of the intermediate polynomials bounded. That bound, together with the agreement of the sequence with the Boolean semantics, is proved in [[lem-multilinearization-preserves-boolean-values]] and [[lem-ordered-arithmetization-evaluates-to-the-truth-value]].
