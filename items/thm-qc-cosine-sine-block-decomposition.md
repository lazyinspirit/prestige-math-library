---
id: thm-qc-cosine-sine-block-decomposition
kind: theorem
title: Cosine-Sine Block Decomposition
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-singular-value-decomposition
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-16}}
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
---

## Statement

Let $k\ge1$ and let $U\in U(2k)$ be partitioned into $k\times k$ blocks
$$U=\begin{pmatrix}A&B\\ C&D\end{pmatrix}.$$
There are block-diagonal unitaries $L=\operatorname{diag}(L_0,L_1)$ and $R=\operatorname{diag}(R_0,R_1)$ and nonnegative real diagonal matrices $C_0,S_0$ such that
$$U=L\begin{pmatrix}C_0&-S_0\\S_0&C_0\end{pmatrix}R,\qquad C_0^2+S_0^2=I,\quad 0\le C_0,S_0\le I.$$
The singular values at $0$ and $1$ are allowed, with no nondegeneracy assumption.

## Facts & Assumptions

**Given:** An integer $k\ge1$ and a unitary matrix $U\in M_{2k}(\mathbb C)$ partitioned as in the Statement.

[F1] [[thm-singular-value-decomposition]]: a linear map between finite-dimensional real or complex inner-product spaces has orthonormal bases in which it is diagonal with nonnegative singular values, including zero values.

[F2] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique adjoint.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional real or complex inner-product space has an orthonormal basis.

## Proof



1.1 Apply [F1] to $A$ to obtain unitary $L_0,R_0$ and $C_0=\operatorname{diag}(c_1,\dots,c_k)$ with $A=L_0C_0R_0^*$ and $c_i\ge0$. Since $A$ is the compression of the unitary $U$ to the first block, $\|Av\|\le\|v\|$ for every $v$, so each singular value satisfies $c_i\le1$. Put $S_0=\operatorname{diag}(s_i)$ with $s_i=\sqrt{1-c_i^2}$. [given, F1, F2, algebra]

2.1 The first block row of $UU^*=I$ gives $AA^*+BB^*=I$, hence $(L_0^*B)(L_0^*B)^*=S_0^2$. For every $i$ with $s_i>0$, the row $s_i^{-1}e_i^*L_0^*B$ has norm one, and these rows are mutually orthogonal by the displayed Gram identity. Extend them to an orthonormal basis using [F3], and choose the signs of the completed rows so that a unitary $W$ satisfies $L_0^*B=-S_0W^*$. [F3, step 1.1, algebra]

3.1 The first block column of $U^*U=I$ gives $A^*A+C^*C=I$, hence $(CR_0)^*(CR_0)=S_0^2$. For every $i$ with $s_i>0$, the column $s_i^{-1}CR_0e_i$ has norm one, and these columns are mutually orthogonal. Extend them to an orthonormal basis using [F3]; the resulting unitary $Z$ satisfies $CR_0=ZS_0$. Therefore $\widetilde U:=\operatorname{diag}(L_0^*,Z^*)U\operatorname{diag}(R_0,W)=\begin{pmatrix}C_0&-S_0\\S_0&E\end{pmatrix}$ for some $E$. [F3, step 1.1, step 2.1, algebra]

4.1 The upper-right block of $\widetilde U\widetilde U^*=I$ gives $S_0E^*=C_0S_0$. Thus, for each $i$ with $s_i>0$, column $i$ of $E$ is $c_ie_i$. The lower-right blocks of $\widetilde U\widetilde U^*=I$ and $\widetilde U^*\widetilde U=I$ give $EE^*=E^*E=C_0^2$. For such $i$, the prescribed entry $E_{ii}=c_i$ already contributes $c_i^2$ to row $i$'s squared norm, so $EE^*=C_0^2$ forces every other entry in that row to vanish. Thus both the rows and columns indexed by $P=\{i:s_i>0\}$ have no cross-block entries. On $K=\{i:s_i=0\}$ one has $c_i=1$; the $K\times K$ block of $E$ has orthonormal rows and columns and is therefore unitary. This also covers $c_i=0$, where the corresponding row and column are zero, and $c_i=1$, where the index belongs to $K$. [step 3.1, algebra]

5.1 Let $Q$ be that unitary $K\times K$ block and replace $Z$ by $Z'=Z\operatorname{diag}(I,Q)$. Since $Q$ acts only where $S_0=0$ and $C_0=I$, this leaves $CR_0=Z'S_0$ unchanged and changes the lower-right block to $C_0$. Hence $U=\operatorname{diag}(L_0,Z')\begin{pmatrix}C_0&-S_0\\S_0&C_0\end{pmatrix}\operatorname{diag}(R_0^*,W^*).$ Both outside factors are unitary, and $C_0^2+S_0^2=I$ by definition. The argument includes $c_i=0$, $c_i=1$, repeated values, and empty positive or zero supports. [step 4.1, step 3.1, algebra] ∎
