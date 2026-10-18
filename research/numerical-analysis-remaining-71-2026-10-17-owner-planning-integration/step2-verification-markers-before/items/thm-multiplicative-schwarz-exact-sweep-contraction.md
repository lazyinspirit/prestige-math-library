---
id: thm-multiplicative-schwarz-exact-sweep-contraction
kind: theorem
title: "Multiplicative Schwarz projection sweeps contract with explicit overlap constants"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-local-corrections-are-energy-orthogonal-projections
  - thm-additive-schwarz-stable-decomposition-condition-number
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Section 4.1, Lemma 4.3 and Theorem 4.4, printed pp. 592–593: ordered projection products and telescoped energy decreases."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §4.3, Theorem 4.10 and proof, printed pp. 63–66: multiplicative contraction from stable splitting and overlap constants."
---

## Statement

Use the exact data of
[[def-overlapping-schwarz-subspace-correction-data]], with one coarse space
$V_0$ and $m\ge1$ local spaces $V_1,\ldots,V_m$. Assume the stable-decomposition
and synthesis hypotheses of
[[thm-additive-schwarz-stable-decomposition-condition-number]] hold with
constants $C_0,C_1$. Suppose a symmetric matrix
$G=(\epsilon_{ij})_{i,j=1}^m$ has nonnegative entries and
$$ |a(v_i,v_j)|\le\epsilon_{ij}\|v_i\|_A\|v_j\|_A \quad(v_i\in V_i,\ v_j\in V_j). $$
For a real matrix $M$, write $\|M\|_2=\sup_{y\ne0}\|My\|_2/\|y\|_2$ for its
induced Euclidean operator norm. Set $\rho=\|G\|_2$ and
$K=1+2C_1+2(1+\rho)^2$. For the coarse-first exact multiplicative sweep
$E_{\mathrm{mult}}=(I-\Pi_m)\cdots(I-\Pi_1)(I-\Pi_0)$,
$$ \|E_{\mathrm{mult}}\|_A^2 \le 1-\frac{1}{C_0K}<1. $$
The ordered factors need not commute. Here
$\|S\|_A=\sup_{x\ne0}\|Sx\|_A/\|x\|_A$ is the induced operator norm.

## Facts & Assumptions

**Given:** The local spaces, exact projections, constants $C_0,C_1$, and
pairwise overlap bounds $\epsilon_{ij}$ in the statement.

[F1] The error map is the ordered product of the exact local corrections,
with the coarse correction applied first
([[def-overlapping-schwarz-subspace-correction-data]]).

[F2] Each $\Pi_i$ is an $A$-orthogonal projection and
$\|x\|_A^2=\|\Pi_i x\|_A^2+\|(I-\Pi_i)x\|_A^2$
([[lem-schwarz-local-corrections-are-energy-orthogonal-projections]]).

[F3] The additive projection sum $T=\sum_{i=0}^m\Pi_i$ satisfies
$a(Tx,x)\ge C_0^{-1}\|x\|_A^2$ and
$a(Tx,x)\le C_1\|x\|_A^2$
([[thm-additive-schwarz-stable-decomposition-condition-number]]).

[F4] In the real energy inner product,
$|a(u,v)|\le\|u\|_A\|v\|_A$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A1] Stable decomposition: every $x$ has $x=\sum_{i=0}^m R_i z_i$ with
$\sum_i z_i^{\mathsf T}A_i z_i\le C_0\|x\|_A^2$.

[A2] Pairwise local overlap: the stated $\epsilon_{ij}$ inequalities hold,
and $G$ is symmetric with nonnegative entries.

## Proof

1.1 For an arbitrary initial error $x$, set $e_{-1}=x$, $d_0=\Pi_0x$, and $e_0=x-d_0$. For $i=1,\ldots,m$, set $d_i=\Pi_i e_{i-1}$ and $e_i=e_{i-1}-d_i$. By [F2], each correction is orthogonal to its updated error, so telescoping gives $D:=\sum_{i=0}^m\|d_i\|_A^2 =\|x\|_A^2-\|e_m\|_A^2.$ Also $e_{i-1}=x-d_0-\sum_{j=1}^{i-1}d_j$. [F1, F2, given, construct]

2.1 Fix a local index $i\ge1$ and set $b_i=\|\Pi_i x\|_A$, $c_i=\|d_i\|_A$, and $q_i=\|\Pi_i d_0\|_A$. Since $x=e_{i-1}+d_0+\sum_{j<i}d_j$ and $\Pi_i$ is an orthogonal projection, $a(\Pi_i x,e_{i-1})=a(\Pi_i x,\Pi_i e_{i-1})=a(\Pi_i x,d_i)$ and $a(\Pi_i x,d_0)=a(\Pi_i x,\Pi_i d_0)$. Thus $b_i^2=a(\Pi_i x,d_i)+a(\Pi_i x,\Pi_i d_0)+\sum_{j<i}a(\Pi_i x,d_j)$. The first term has absolute value at most $b_i c_i$ and the second at most $b_i q_i$ by [F4]; the remaining terms are at most $b_i\sum_{j<i}\epsilon_{ij}c_j$ by [A2]. If $b_i=0$ the resulting bound is immediate; otherwise divide by $b_i$ to obtain $b_i\le c_i+q_i+\sum_{j<i}\epsilon_{ij}c_j.$ [F2, F4, A2, step 1.1, algebra]

3.1 Let $L$ be the strict lower-triangular part of $G$, and let $b,c,q\in\mathbb R^m$ have entries $b_i,c_i,q_i$. They are nonnegative and $0\le Lc\le Gc$ entrywise. Hence $\|Lc\|_2\le\|Gc\|_2\le\rho\|c\|_2$, and step 2.1 yields $\|b\|_2\le(1+\rho)\|c\|_2+\|q\|_2.$ Furthermore, by [F2], $\|q\|_2^2 =\sum_{i=1}^m a(\Pi_i d_0,d_0) =a\left(\sum_{i=1}^m\Pi_i d_0,d_0\right) \le a(Td_0,d_0) \le C_1\|d_0\|_A^2.$ The first inequality uses that $\Pi_0$ is positive semidefinite; the last is [F3]. [A2, F2, F3, step 2.1, algebra]

4.1 By $(r+s)^2\le2r^2+2s^2$, steps 1.1 and 3.1 give $\sum_{i=0}^m\|\Pi_i x\|_A^2 =\|d_0\|_A^2+\|b\|_2^2 \le(1+2C_1)\|d_0\|_A^2 +2(1+\rho)^2\sum_{i=1}^m\|d_i\|_A^2 \le K D.$ The left side is $a(Tx,x)$, which [F3] bounds below by $C_0^{-1}\|x\|_A^2$. Thus $D\ge(C_0K)^{-1}\|x\|_A^2$. Since $D\le\|x\|_A^2$ by step 1.1, $C_0K\ge1$. [F3, step 1.1, step 3.1, algebra]

5.1 Step 1.1 now gives $\|E_{\mathrm{mult}}x\|_A^2 =\|e_m\|_A^2 =\|x\|_A^2-D \le\left(1-\frac1{C_0K}\right)\|x\|_A^2.$ Taking the supremum over nonzero $x$ proves the operator-norm bound; finiteness of $C_0,K$ makes the contraction factor strictly less than one. [F1, step 1.1, step 4.1, algebra] ∎
