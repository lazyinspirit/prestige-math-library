---
id: lem-multilinearization-preserves-boolean-values
kind: lemma
title: "Multilinearization preserves Boolean values and bounds individual degree"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-multilinearization-operator, lem-quantifier-polynomials-agree-on-booleans, def-qbf-arithmetization-operators, def-arithmetization-of-a-boolean-formula, lem-formula-arithmetization-degree-and-evaluation-cost, lem-degree-under-arithmetized-quantifiers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

## Statement

Let $F$ be a field and $R_{X_i}$ the reduction of [[def-multilinearization-operator]].

1. For every $P\in F[X_1,\dots,X_m]$ and $b\in\{0,1\}$, $(R_{X_i}P)|_{X_i=b}=P|_{X_i=b}$. Consequently, if $P$ agrees with a function on the Boolean cube at every Boolean point, then so does $R_{X_i}P$.
2. $R_{X_i}P$ has degree at most one in $X_i$, and degree in every other variable at most that of $P$ there.
3. Let $\Phi=Q_1x_1\cdots Q_nx_n\psi$ be a closed prenex quantified Boolean formula whose quantifier-free matrix $\psi$ has $L$ syntax nodes, let $b=P_\psi$ and $D:=\max(L,2)$, and let $P^{(j)}$ and $M_j$ be the polynomials of the multilinearized ordered arithmetization. Then each $P^{(j)}$ with $j\le n-1$ has individual degree at most $2$ in each of $x_1,\dots,x_j$, each $M_j$ is multilinear in $x_1,\dots,x_j$, and every node polynomial of the operator list, after substituting arbitrary field elements for all variables other than its active variable, has degree at most $D$ in that active variable. The operator list has $T=n(n+3)/2=O(n^2)$ entries.

## Facts & Assumptions

**Given:** A field $F$, a polynomial $P$ over it, and a closed prenex quantified Boolean formula $\Phi$ with quantifier-free matrix $\psi$ of $L$ syntax nodes.

[A1] Multilinearization is $R_{X_i}P=(1-X_i)P|_{X_i=0}+X_iP|_{X_i=1}$; the operator list of $\Phi$ runs, for $j=n$ down to $1$ through the blocks $R_{X_1},\dots,R_{X_j},O_j$, and has $T=n(n+1)/2+n$ entries ([[def-multilinearization-operator]]).

[A2] The matrix arithmetization $b=P_\psi$ is built by the gate rules of [[def-arithmetization-of-a-boolean-formula]], and $O_j$ is $A_{X_j}$ or $E_{X_j}$ according to $Q_j$ ([[def-qbf-arithmetization-operators]]).

[L1] If $\varphi$ is a formula with $s\ge1$ syntax nodes in which $t_i$ leaves are labelled $X_i$, then $P_\varphi$ has individual degree at most $t_i$ in $X_i$, hence at most $s$; and $P_\varphi$ can be evaluated at a supplied point in $O(s)$ field operations ([[lem-formula-arithmetization-degree-and-evaluation-cost]]).

[L2] Write $p_b=p|_{X_i=b}$. If $\deg_{X_j}p\le d_j$ for $j\ne i$, then $p_0+p_1$ has bound $d_j$ in $X_j$, while $p_0p_1$ and $p_0+p_1-p_0p_1$ have bound $2d_j$ ([[lem-degree-under-arithmetized-quantifiers]]).

## Proof

**Proof technique:** direct.

1.1 Substituting $X_i=0$ in the right side of [A1] leaves $P|_{X_i=0}$ and substituting $X_i=1$ leaves $P|_{X_i=1}$. The coefficient of $X_i$ is $P|_{X_i=1}-P|_{X_i=0}$, so the $X_i$-degree is at most one; specialization, multiplication by $1-X_i$ or by $X_i$, and addition do not raise the degrees in the other variables. This proves claims (1) and (2), including for constant and zero polynomials. [A1, algebra]

2.1 If $P$ agrees with a function $g$ at every Boolean point, then at each Boolean point the value of $R_{X_i}P$ is the value of $P$ at the same point by step 1.1 and hence equals $g$ there. So $R_{X_i}P$ also agrees with $g$ on the Boolean cube, whichever bits $g$ takes. [step 1.1, given]

2.2 By [L1] the matrix arithmetization $b=P_\psi$ has individual degree at most $L$ in every variable. Let $1\le j\le n$ and suppose $P^{(j)}$ has individual degree at most $2$ in $x_1,\dots,x_j$ when $j\le n-1$. By step 1.1 the reductions of the block $j$ do not increase degrees in $x_{j+1},\dots,x_n$ and make each of $x_1,\dots,x_j$ have degree at most one, so $M_j$ is multilinear in $x_1,\dots,x_j$ and its individual degrees in $x_{j+1},\dots,x_n$ are at most those of $P^{(j)}$. [L1, A1, A2, step 1.1]

3.1 Applying $O_j$ specializes $M_j$ at $X_j=0$ and $X_j=1$ and multiplies or combines the two results, so [L2] gives $P^{(j-1)}$ individual degree at most twice that of $M_j$ in each remaining variable. At $j=n$ the polynomial $P^{(n-1)}$ has individual degree at most $2$ in $x_1,\dots,x_{n-1}$, because $M_n$ is multilinear; inductively the same bound holds at every level $j\le n-1$. [L2, step 2.2, algebra]

4.1 For the degree of a node polynomial in its active variable, consider the blocks in turn. The reductions of the first block act on $b$ and on its successive reductions; repeated use of claim (2) of step 1.1 shows that the input polynomial of the reduction $R_{X_i}$ in that block has $X_i$-degree at most that of $b$, namely at most $L$. Every later reduction acts on some $P^{(j)}$ with $j\le n-1$, whose individual degrees are at most $2$ by step 3.1, and the quantifier node $O_j$ acts on the multilinear $M_j$, of $X_j$-degree at most one. Substituting arbitrary field elements for the other variables cannot raise any of these degrees, so every node polynomial specializes to a univariate of degree at most $D=\max(L,2)$. [step 1.1, step 2.2, step 3.1, L1, algebra]

5.1 The operator list consists of $\sum_{j=1}^{n}j=n(n+1)/2$ reductions and $n$ quantifier operators, so $T=n(n+3)/2$, which is $O(n^2)$; for $n=0$ the list is empty and all degree assertions are vacuous. [A1, step 4.1, algebra] ∎
