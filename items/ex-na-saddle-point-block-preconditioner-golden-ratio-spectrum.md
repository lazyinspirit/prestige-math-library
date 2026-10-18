---
id: ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum
kind: example
title: "A scalar saddle system has golden-ratio preconditioned eigenvalues"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - thm-na-symmetrically-preconditioned-saddle-point-spectrum
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of
        saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§10.1.1, printed pp. 61–63: symmetric block-diagonal saddle
        preconditioning and its eigenvalue polynomial."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Take $A=[1]$, $B=[1]$, $M_Q=[1]$, and $\gamma=1$ in the symmetric
saddle-point and block-preconditioning convention of
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]]. Interpret
$V=Q=\mathbb R$ with Euclidean norms, $a(v,w)=vw$, and $b(v,q)=qv$; thus the
pressure-Schur hypotheses hold with $\alpha=\Lambda=C_b=\beta=1$. Then
$$ K=\begin{pmatrix}1&1\\1&0\end{pmatrix},\qquad P_1=I. $$
The symmetrically preconditioned eigenvalues are
$$ \frac{1-\sqrt5}{2},\qquad\frac{1+\sqrt5}{2}. $$
For right-hand side $(1,0)^T$, the unique saddle solution is $(u,p)=(0,1)$.
This exact example illustrates the spectrum only; it implies no solver-speed
or iteration-count claim.

## Facts & Assumptions

**Given:** The scalar SPD blocks $A=M_Q=[1]$, the full-row-rank matrix
$B=[1]$, scaling $\gamma=1$, and right-hand side $(1,0)^T$.

[F1] The saddle matrix is $K=[A\ B^T; B\ 0]$ and the symmetric
preconditioner is $P_\gamma=\operatorname{diag}(A,\gamma M_Q)$
([[def-na-symmetric-saddle-point-system-and-block-preconditioners]]).

[F2] For normalized Schur eigenvalue $\mu$, the saddle eigenvalues are
$\lambda_\pm(\mu)=(1\pm\sqrt{1+4\mu})/2$
([[thm-na-symmetrically-preconditioned-saddle-point-spectrum]]).

## Proof
1.1 The scalar matrix $A=[1]$ is SPD, $B^Tq=0$ implies $q=0$, and the Schur matrix is $S=BA^{-1}B^T=[1]$. Thus the normalized Schur eigenvalue is $\mu=1$ and $P_1=\operatorname{diag}(1,1)=I$ by [F1]. [F1, algebra]

2.1 Applying [F2] at $\mu=1$ gives the characteristic polynomial $\lambda^2-\lambda-1$ and roots $(1\pm\sqrt5)/2$. Direct substitution in $u+p=1$ and $u=0$ yields $(u,p)=(0,1)$; the coefficient matrix is invertible because its determinant is $-1$, so this solution is unique. [F1, F2, step 1.1, algebra] ∎
