---
id: prop-pe26-feti-dp-is-dual-schur-complement
kind: proposition
title: FETI-DP is the exact dual Schur system
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-pe26-feti-dp-dual-system-and-preconditioner, def-pe26-primal-interface-spaces-and-jumps, thm-pe26-primal-constraints-remove-floating-kernels]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the saddle system is finite-dimensional."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §3.3"
      url: "https://arxiv.org/pdf/0708.4031"
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, §§83–84 and 89"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Statement

Let $f\in\widehat W'$ and set $\widetilde f=E_0^T f$. The constrained minimization problem

$$\min_{w\in\widetilde W,\ Bw=0}\left(\tfrac12\langle\widetilde S w,w\rangle-\langle\widetilde f,w\rangle\right)$$

has the saddle equations $\widetilde S w+B^T\lambda=\widetilde f$, $Bw=0$. Eliminating $w$ gives the FETI-DP dual system

$$B\widetilde S^{-1}B^T\lambda=B\widetilde S^{-1}E_0^Tf.$$

On $\Lambda=\operatorname{range}B$ its matrix is positive definite, and the exact multiplier solution reconstructs the unique assembled interface solution $w\in\widehat W$.

## Facts & Assumptions

**Given:** $\widetilde S$ is positive definite on $\widetilde W$, $B:\widetilde W\to\Lambda$ is onto with $\ker B=\widehat W$, and $E_0$ is the projection used by BDDC.

[F1] [[def-pe26-feti-dp-dual-system-and-preconditioner]]: $F=B\widetilde S^{-1}B^T$ and the multiplier space is $\Lambda=\operatorname{range}B$.

[F2] [[def-pe26-primal-interface-spaces-and-jumps]]: $\ker B=\widehat W$ and redundant multiplier rows are represented by their range.

[F3] [[thm-pe26-primal-constraints-remove-floating-kernels]]: all subdomain vertices primal and a nonempty global Dirichlet boundary suffice for positive definiteness of $\widetilde S$. Here positive definiteness is an explicit hypothesis, also for other primal choices.

## Proof

1.1 The Lagrangian is $L(w,\lambda)=\tfrac12\langle\widetilde S w,w\rangle-\langle E_0^Tf,w\rangle+\langle\lambda,Bw\rangle$. Its derivative in arbitrary $z\in\widetilde W$ is $\langle\widetilde S w+B^T\lambda-E_0^Tf,z\rangle$, and its multiplier derivative is $Bw$. Setting both derivatives to zero gives the displayed saddle equations. [given, F1, F2, algebra]

2.1 By the assumed positive definiteness of $\widetilde S$, the first equation has the unique solution $w=\widetilde S^{-1}(E_0^Tf-B^T\lambda)$. Substitution into $Bw=0$ gives the displayed dual system. [given, step 1.1, algebra]

3.1 If $\lambda\in\Lambda$ and $B^T\lambda=0$, write $\lambda=Bv$ using [F2]. Then $\langle\lambda,\lambda\rangle=\langle Bv,\lambda\rangle=\langle v,B^T\lambda\rangle=0$, hence $\lambda=0$. Thus $B^T$ is injective on $\Lambda$, and $\langle F\lambda,\lambda\rangle=\langle\widetilde S^{-1}B^T\lambda,B^T\lambda\rangle>0$ for every nonzero $\lambda$. The exact solution satisfies $Bw=0$, so by [F2] it lies in $\widehat W$ and solves the assembled variational problem. [F1, F2, F3, step 2.1, algebra] ∎
