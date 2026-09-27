---
id: lem-ordered-arithmetization-evaluates-to-the-truth-value
kind: lemma
title: "The ordered arithmetization evaluates to the quantified Boolean truth value"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-multilinearization-operator, def-qbf-arithmetization-operators, lem-multilinearization-preserves-boolean-values, def-quantified-boolean-formula-and-tqbf, def-arithmetization-of-a-boolean-formula, lem-arithmetization-agrees-on-boolean-inputs]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let $F$ be a field, let $\Phi=Q_1x_1\cdots Q_nx_n\psi$ be a closed prenex quantified Boolean formula with quantifier-free matrix $\psi$ ([[def-quantified-boolean-formula-and-tqbf]]), let $b=P_\psi$ be its matrix arithmetization ([[def-arithmetization-of-a-boolean-formula]]), and let $P^{(n)}=b,P^{(n-1)},\dots,P^{(0)}$ be the multilinearized ordered arithmetization of $\Phi$ ([[def-multilinearization-operator]]). For $0\le j\le n$ put
$$\Psi_j:=Q_{j+1}x_{j+1}\cdots Q_nx_n\,\psi,$$
so that $\Psi_n=\psi$ and $\Psi_0=\Phi$, and $\Psi_j$ has free variables $x_1,\dots,x_j$. Then for every $j$ and every Boolean assignment $a\in\{0,1\}^j$,
$$P^{(j)}(a)=\text{the Boolean value of }\Psi_j\text{ at }a,$$
the truth values being embedded in $F$ as $0$ and $1$. In particular $P^{(0)}$, a constant, is the truth value of $\Phi$.

## Facts & Assumptions

**Given:** A field $F$ and a closed prenex quantified Boolean formula $\Phi=Q_1x_1\cdots Q_nx_n\psi$.

[A1] The polynomials $P^{(j)}$ and $M_j$ are the stages of the multilinearized ordered arithmetization: $P^{(n)}=b$, $M_j$ is obtained from $P^{(j)}$ by the reductions $R_{X_1},\dots,R_{X_j}$, and $P^{(j-1)}=O_j(M_j)$ ([[def-multilinearization-operator]]).

[A2] The subformulas $\Psi_j$ are given by $\Psi_n=\psi$ and $\Psi_{j-1}=Q_jx_j\,\Psi_j$; their Boolean values are defined by the usual recursive semantics ([[def-quantified-boolean-formula-and-tqbf]]).

[L1] $R_{X_i}P$ agrees with $P$ at $X_i=0$ and $X_i=1$, and leaves the other variables' degrees no larger; in particular, if $P$ agrees with a function at all Boolean points of the cube, then so does $R_{X_i}P$ ([[lem-multilinearization-preserves-boolean-values]]).

[L2] The matrix arithmetization agrees with the Boolean value of $\psi$ at every Boolean assignment ([[lem-arithmetization-agrees-on-boolean-inputs]]).

[L3] For every polynomial $P$, the operators are $A_XP=(P|_{X=0})(P|_{X=1})$ and $E_XP=1-(1-P|_{X=0})(1-P|_{X=1})$ ([[def-qbf-arithmetization-operators]]).

## Proof

**Proof technique:** induction.

1.1 Base case $j=n$: by [A1] and [A2], $P^{(n)}=b=P_\psi$ and $\Psi_n=\psi$; by [L2] the two agree at every Boolean assignment to $x_1,\dots,x_n$, including the assignment-free case $n=0$. [L2, A1, A2, given, base]

1.2 Induction hypothesis: suppose $1\le j\le n$ and $P^{(j)}$ agrees with $\Psi_j$ at every point of the cube $\{0,1\}^j$. [ih]

2.1 Under the hypothesis of step 1.2, $M_j$ is obtained from $P^{(j)}$ by the reductions $R_{X_1},\dots,R_{X_j}$, each of which preserves agreement on Boolean points by [L1]; hence $M_j$ also agrees with $\Psi_j$ on $\{0,1\}^j$. In particular, for every $a\in\{0,1\}^{j-1}$ and each $b\in\{0,1\}$, the specialized value $M_j|_{X_j=b}(a)$ is the Boolean value of $\Psi_j(a,b)$, and the two values are the two bits whose universal and existential quantification define the truth values of $\Psi_{j-1}(a)=Q_jx_j\Psi_j$. [step 1.2, L1, A1, A2]

3.1 Fix a Boolean assignment $a$ to the remaining variables and put $u=M_j|_{X_j=0}(a)$ and $v=M_j|_{X_j=1}(a)$. Both are bits by step 2.1. By [L3], the universal operator returns $uv$ and the existential operator returns $1-(1-u)(1-v)$. On the four pairs $(u,v)=(0,0),(0,1),(1,0),(1,1)$ these expressions give, respectively, $(0,0,0,1)$ and $(0,1,1,1)$ in every field. Thus they compute conjunction and disjunction, precisely the semantics of $Q_j$ in [A2]. Since $P^{(j-1)}=O_j(M_j)$ by [A1], it agrees with $\Psi_{j-1}$ at every Boolean $a$. [step 2.1, L3, A1, A2, algebra]

4.1 Step 1.1 supplies the base case and step 3.1 the induction step, so agreement holds at every index $j=n,n-1,\dots,0$. For $j=0$ the cube $\{0,1\}^0$ has the single empty assignment and $\Psi_0=\Phi$, so the constant $P^{(0)}$ is the truth value of $\Phi$; the case $n=0$ is the base case itself. [step 1.1, step 1.2, step 3.1, discharge-induction] ∎
