---
id: fs-ip-equals-pspace-needs-no-degree-reduction
kind: false-statement
title: "False: IP = PSPACE needs no degree reduction in this arithmetization"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-qbf-arithmetization-operators, def-multilinearization-operator, def-quantified-boolean-formula-and-tqbf, def-arithmetization-of-a-boolean-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

## Statement

**False assertion.** If the multilinearization operators $R_x$ are omitted from the quantified arithmetization and the resulting protocol uses only the quantifier operators $A_x$ and $E_x$ in inner-to-outer order, then the prover messages still have degree polynomial in the input length: for every closed prenex quantified Boolean formula of size $m$, the polynomial carried at every operator node of the naive sequence has degree at most a polynomial in $m$, so no degree reduction is needed for this proof route.

## Facts & Assumptions

**Given:** The naive inner-to-outer quantified arithmetization without multilinearization operators, and the family of formulas defined below.

[A1] The ordered arithmetization replaces NOT, AND and OR by $1-a$, $ab$ and $a+b-ab$, applies $A_XP=(P|_{X=0})(P|_{X=1})$ to a universally quantified variable and $E_XP=1-(1-P|_{X=0})(1-P|_{X=1})$ to an existentially quantified variable, and processes inner quantifiers first ([[def-qbf-arithmetization-operators]]).

[A2] The multilinearized ordered arithmetization inserts, before each quantifier operation, the reductions $R_{X_i}P=(1-X_i)(P|_{X_i=0})+X_i(P|_{X_i=1})$; the variant considered here omits exactly these reductions and keeps the same quantifier operations and the same inner-to-outer order ([[def-multilinearization-operator]]).

[A3] A closed prenex quantified Boolean formula is $Q_1x_1\cdots Q_kx_k\psi$ with quantifier-free matrix $\psi$, and its truth value is defined by the usual Boolean semantics of the quantifiers over $\{0,1\}$ ([[def-quantified-boolean-formula-and-tqbf]]).

[A4] Arithmetization maps a variable leaf $x_i$ to $X_i$ and a matrix built from these leaves by the gate rules of [A1] ([[def-arithmetization-of-a-boolean-formula]]).



## Refutation

1.1 For every $k\ge1$ let $\Phi_k:=\exists y\,\forall x_1\cdots\forall x_k\,(y)$; its matrix is the variable $y$, and its prefix has $k+1$ quantifiers. Fix the standard effective encoding with binary variable indices and fixed punctuation, so the encoded size of this family is $m_k=O(k\log(k+1))$. By [A4] the arithmetization of the matrix is $b=Y$. [A3, A4, construct]

1.2 In the naive inner-to-outer sequence the universal quantifiers are processed first, starting with the innermost $x_k$ and ending with $x_1$, and the outer existential quantifier in $y$ is processed last, by the ordering rule of [A1]; the omitted operations are precisely the reductions $R_{X_i}$ of [A2]. [A1, A2]

2.1 We claim that after the first $j$ universal quantifiers the carried polynomial is $Y^{2^j}$, by induction on $j$. For $j=0$ this is $b=Y$; for the step, $Y^{2^j}$ does not involve the next variable $X_i$, so both of its specializations at $X_i=0$ and $X_i=1$ equal $Y^{2^j}$, and $A_{X_i}$ gives the product $Y^{2^j}\cdot Y^{2^j}=Y^{2^{j+1}}$. [A1, step 1.1, algebra]

3.1 Taking $j=k$ in step 2.1, the polynomial carried at the input of the outer quantifier node $E_y$ is $Y^{2^k}$, whose degree as a polynomial in the active variable $y$ is $2^k$; the message that the protocol requires at that node is the restriction of this polynomial in the active variable, so it also has degree $2^k$. [step 1.2, step 2.1, algebra]

4.1 Since $m_k=O(k\log(k+1))$ for the encoding fixed in step 1.1, every polynomial $q(m_k)$ is bounded above by a polynomial in $k\log(k+1)$ and is eventually smaller than $2^k$. Hence the asserted polynomial degree bound fails for the family $\Phi_k$ under this allowed encoding, which refutes the false assertion. The count of syntax nodes alone would not give this encoded-length bound under an arbitrary effective encoding. [step 1.1, step 3.1, algebra]

5.1 The failure is one of degree and not of Boolean semantics: for every $k$ the formula $\Phi_k$ is true, because $\forall x_1\cdots\forall x_k\,(y)$ holds exactly when $y=1$ and then $\exists y$ is satisfied; so the refuted degree bound is not rescued by any appeal to the truth of the instances. [A3, step 3.1, algebra] ∎
