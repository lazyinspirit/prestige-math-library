---
id: thm-moore-penrose-pseudoinverse-exists-and-is-unique
kind: theorem
title: "Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moore-penrose-pseudoinverse, thm-singular-value-decomposition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

For every matrix $A\in M_{m\times n}(\mathbb F)$ over $\mathbb F=\mathbb R$ or
$\mathbb C$, there exists a unique matrix $A^+\in M_{n\times m}(\mathbb F)$
satisfying the four Penrose equations of
[[def-moore-penrose-pseudoinverse]].

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ with $\mathbb F\in\{\mathbb R,\mathbb C\}$.

[L1] $A$ admits a singular value decomposition $A=U\Sigma V^*$ with $U$ and $V$ unitary and $\Sigma$ diagonal with the nonzero singular values on the diagonal ([[thm-singular-value-decomposition]]).

[L2] The Moore--Penrose pseudoinverse is defined by the four Penrose equations ([[def-moore-penrose-pseudoinverse]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after choosing singular values $\sigma_1,\dots,\sigma_r>0$ one may write $$ A=U \begin{bmatrix} \operatorname{diag}(\sigma_1,\dots,\sigma_r) & 0 \\ 0 & 0 \end{bmatrix} V^*. $$ [L1, given]

2.1 Define $$ \Sigma^+:= \begin{bmatrix} \operatorname{diag}(\sigma_1^{-1},\dots,\sigma_r^{-1}) & 0 \\ 0 & 0 \end{bmatrix}, \qquad B:=V\Sigma^+U^*. $$ Then $\Sigma\Sigma^+\Sigma=\Sigma$, $\Sigma^+\Sigma\Sigma^+=\Sigma^+$, and the two products $\Sigma\Sigma^+$ and $\Sigma^+\Sigma$ are diagonal with only $0$ and $1$ on the diagonal, hence are self-adjoint. [step 1.1, construct, algebra]

3.1 Multiplying the relations of step 2.1 by the unitary factors $U$ and $V$ shows $$ ABA=A,\qquad BAB=B,\qquad (AB)^*=AB,\qquad (BA)^*=BA. $$ Thus $B$ is a Moore--Penrose pseudoinverse of $A$ in the sense of [L2]. [L2, step 2.1, algebra]

4.1 Let $C$ be any other Moore--Penrose pseudoinverse of $A$, and put $D:=V^*CU$. Then the same unitary transport used in step 3.1 gives $$ \Sigma D\Sigma=\Sigma,\qquad D\Sigma D=D, $$ with $\Sigma D$ and $D\Sigma$ self-adjoint. [L2, step 1.1, step 3.1, algebra]

5.1 Write $$ \Sigma=\begin{bmatrix}S&0\\0&0\end{bmatrix},\qquad D=\begin{bmatrix}X&Y\\Z&W\end{bmatrix}, $$ where $S=\operatorname{diag}(\sigma_1,\dots,\sigma_r)$. From $\Sigma D\Sigma=\Sigma$ one gets $SXS=S$, hence $X=S^{-1}$. Because $\Sigma D$ is self-adjoint, its upper-right block satisfies $SY=0$, so $Y=0$. Because $D\Sigma$ is self-adjoint, its lower-left block satisfies $ZS=0$, so $Z=0$. With these identities, the equation $D\Sigma D=D$ reduces to $$ \begin{bmatrix}X&0\\0&0\end{bmatrix} = \begin{bmatrix}X&0\\0&W\end{bmatrix}, $$ so $W=0$. Hence $D=\Sigma^+$ and therefore $C=V\Sigma^+U^*=B$. [step 4.1, algebra]

6.1 Step 3.1 gives existence and step 5.1 gives uniqueness, so every finite real or complex matrix has a unique Moore--Penrose pseudoinverse. [step 3.1, step 5.1] ∎
