---
id: lem-pe26-preconditioned-operator-norm-bound
kind: lemma
title: Eigenvalue bounds from a left-inverse preconditioner
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof is finite-dimensional SPD linear algebra."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §4, Lemma 4.1"
      url: "https://arxiv.org/pdf/0708.4031"
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 94–95"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Statement

Let $A:V\to V'$ be symmetric positive definite on a finite-dimensional real vector space, and let $L:V\to U$, $T:U\to V$ satisfy $LT=I_U$. Every eigenvalue of

$$G=(LA^{-1}L^T)(T^TAT)$$

lies in $[1,\|TL\|_A^2]$, where $\|Q\|_A:=\sup_{v\ne0}\sqrt{\langle A Qv,Qv\rangle/\langle Av,v\rangle}$.

## Facts & Assumptions

**Given:** Finite-dimensional real spaces $V,U$, a symmetric positive definite operator $A:V\to V'$, linear maps $L:V\to U$ and $T:U\to V$, and $LT=I_U$.

[A1] The energy form $\langle Av,v\rangle$ is positive for every nonzero $v\in V$, and $LT$ is the identity on $U$.

## Proof

1.1 Put $D=T^TAT$, which is SPD because $T$ is injective (if $Tu=0$, then $u=LT u=0$), and $C=LA^{-1}L^T$, which is SPD because $L$ is onto (it has right inverse $T$). Hence $G=CD$ is similar to the symmetric positive definite matrix $D^{1/2}CD^{1/2}$ and has positive real eigenvalues. For an eigenvector $u\ne0$ with eigenvalue $\lambda$, let $w=A^{-1}L^TDu$, so $Lw=Gu=\lambda u$ and $\|w\|_A^2=\langle Du,Gu\rangle=\lambda\langle Du,u\rangle$. [given, A1, algebra]

2.1 By [A1], $\langle Du,u\rangle=\langle Du,LTu\rangle=\langle Aw,Tu\rangle$. Cauchy–Schwarz in the $A$ inner product gives $\langle Du,u\rangle^2\le\|w\|_A^2\|Tu\|_A^2=\lambda\langle Du,u\rangle^2$. Dividing by the positive square gives $\lambda\ge1$. [given, A1, step 1.1, algebra]

3.1 Also $\|Gu\|_D^2=\|TLw\|_A^2\le\|TL\|_A^2\|w\|_A^2$. For the eigenvector, the left side is $\lambda^2\langle Du,u\rangle$ and step 1.1 makes the right side $\|TL\|_A^2\lambda\langle Du,u\rangle$. Divide by the positive factor to obtain $\lambda\le\|TL\|_A^2$. [given, A1, step 1.1, algebra] ∎
