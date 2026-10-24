---
id: cex-ip-equals-pspace-needs-no-degree-reduction
kind: counterexample
title: "Exponential degree without multilinearization"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [fs-ip-equals-pspace-needs-no-degree-reduction, def-qbf-arithmetization-operators, def-arithmetization-of-a-boolean-formula, def-quantified-boolean-formula-and-tqbf]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 (degree growth warning) and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement refuted

**False claim** ([[fs-ip-equals-pspace-needs-no-degree-reduction]]): if the multilinearization operators $R_X$ are omitted from the ordered quantified arithmetization and only the quantifier operators $A_X,E_X$ are used in inner-to-outer order, then for every closed prenex quantified Boolean formula of size $m$ the polynomial carried at every operator node has degree at most a polynomial in $m$, so no degree reduction is needed for this proof route.

The family
$$\Phi_k:=\exists y\,\forall x_1\cdots\forall x_k\,(y),\qquad k\ge1,$$
refutes it under the standard explicit binary variable-index encoding, in which the identifiers $x_i$ use $O(\log(k+1))$ bits and the encoded length $m_k$ is $O(k\log(k+1))$. The naive inner-to-outer sequence carries $Y^{2^k}$ at the input of the node for the outermost quantifier $\exists y$: the polynomial immediately before $y$ is processed has degree $2^k$ in the active variable $y$, and $2^k$ is bounded by no polynomial in this $m_k$. The calculation of the carried polynomial is independent of the encoding; the length comparison requires an encoding bound.

## Facts & Assumptions

**Given:** The family $\Phi_k=\exists y\,\forall x_1\cdots\forall x_k\,(y)$ of closed prenex quantified Boolean formulas for $k\ge1$, over a field $F$, with the naive inner-to-outer quantified arithmetization that omits the reductions $R_{X_i}$.

[A1] The quantifier operators are $A_{X_i}P=(P|_{X_i=0})(P|_{X_i=1})$ and $E_{X_i}P=1-(1-P|_{X_i=0})(1-P|_{X_i=1})$, each returning a polynomial in the remaining variables; the ordered arithmetization processes the quantifiers from the innermost to the outermost, so $Q_n$ is processed first and $Q_1$ last ([[def-qbf-arithmetization-operators]]).

[A2] Arithmetization maps a variable leaf to the corresponding variable and builds the matrix from the gate rules, so the matrix $(y)$ of $\Phi_k$ is arithmetized to the polynomial $Y$ ([[def-arithmetization-of-a-boolean-formula]]).

[A3] A quantified Boolean formula is $Q_1x_1\cdots Q_mx_m\,\psi$ with quantifier-free matrix $\psi$, and it is true when its usual recursive Boolean semantics evaluates to true ([[def-quantified-boolean-formula-and-tqbf]]).

[A4] The refuted claim: for every closed prenex quantified Boolean formula of size $m$, each polynomial carried at an operator node of the naive sequence has degree at most a polynomial in $m$ ([[fs-ip-equals-pspace-needs-no-degree-reduction]]).



## Counterexample

1.1 Every $\Phi_k$ is a closed prenex quantified Boolean formula: its prefix is the $k+1$ quantifiers $\exists y,\forall x_1,\dots,\forall x_k$ read left to right and its matrix is the variable leaf $(y)$, so it has $k+2$ syntax nodes. Fix the explicit binary-index encoding that writes each $x_i$ using its binary index and fixed punctuation. This is a fixed effective encoding allowed by [A3]; its length $m_k$ satisfies $m_k\ge k+1$ and $m_k=O(k\log(k+1))$. By [A2] the arithmetization of the matrix $(y)$ is $b=Y$. Each $\Phi_k$ is also true, since the assignment $y=1$ makes the matrix $(y)$ true under every assignment to $x_1,\dots,x_k$, so $\forall x_1\cdots\forall x_k\,(y)$ holds and then $\exists y$ holds by [A3]. [A3, A2, construct]

2.1 By the inner-to-outer rule of [A1] the naive sequence of $\Phi_k$ applies the $k$ universal operators first, in the order $A_{x_k},A_{x_{k-1}},\dots,A_{x_1}$, and applies the outer existential operator $E_y$ for the variable $y$ last, no reduction $R_{X_i}$ being inserted. [A1, step 1.1]

2.2 Base case of the induction on $j$: after zero universal operators the carried polynomial is $b=Y=Y^{2^0}$ by step 1.1. [step 1.1, A2, base]

3.1 Induction hypothesis: for some $0\le j<k$, after the first $j$ universal operators of the sequence of step 2.1 the carried polynomial is $Y^{2^j}$. [ih]

4.1 Under the hypothesis of step 3.1 the polynomial $Y^{2^j}$ involves none of the variables $X_1,\dots,X_k$, so both specializations at the next variable $X_i$ coincide with $Y^{2^j}$, and the operator $A_{X_i}$ of [A1] returns the product $Y^{2^j}\cdot Y^{2^j}=Y^{2^{j+1}}$; hence the hypothesis holds again at $j+1$. [step 3.1, A1, algebra]

5.1 Steps 2.2, 3.1 and 4.1 give, after all $k$ universal operators, the carried polynomial $Y^{2^k}$, which is the polynomial immediately before the outer quantifier on $y$ is processed; the protocol's message at the node for $\exists y$ is the restriction of this polynomial in the active variable $y$, namely the univariate polynomial with value $y^{2^k}$ and $2^k+1$ coefficients, so its degree in the active variable is exactly $2^k$. Since $m_k=O(k\log(k+1))$ for the fixed encoding of step 1.1, for every polynomial $q$ one has $2^k>q(m_k)$ for all sufficiently large $k$, so the degree bound asserted in [A4] fails for this allowed encoding: the exponential degree is witnessed on instances that are true, and the failure is therefore one of degree and not of Boolean semantics. No length bound is inferred from syntax-node count alone. [step 2.2, step 4.1, step 1.1, A4, discharge-induction, algebra] ∎
