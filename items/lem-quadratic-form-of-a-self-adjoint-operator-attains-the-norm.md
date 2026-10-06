---
id: lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm
kind: lemma
title: A self-adjoint operator is detected by its quadratic form
deps:
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-hilbert-space
  - def-bounded-linear-operator
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-hilbert-space-adjoint
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-parallelogram-law
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A, §A.8 (Hilbert space operators)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.A: discussion of the strong and weak operator topologies and unitaries"
status: published
origin: pipeline
---
## Statement

Let $K$ be a complex Hilbert space and let $S\in\mathcal B(K)$ be self-adjoint
([[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-hilbert-space]], [[def-bounded-linear-operator]]). Then
$$\|S\|=\sup_{\|\eta\|=1}\bigl|\langle S\eta,\eta\rangle\bigr|,$$
and if $S\ge0$ (that is, $\langle S\eta,\eta\rangle\ge0$ for every $\eta$) then
$$\|S\|=\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle .$$
The supremum is taken over the unit sphere of $K$; when $K=\{0\}$ the supremum
over the empty set is understood as $0$ in $[0,\infty)$, and the statements
read $0=0$. No attainment of the supremum is asserted.

## Facts & Assumptions

**Given:** a complex Hilbert space $K$ and a self-adjoint bounded operator $S\in\mathcal B(K)$.

[A1] The pairing is linear in the first argument and conjugate-linear in the second, and $\langle v,v\rangle=\|v\|^2$ ([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]). The operator norm satisfies $\|Tv\|\le\|T\|\,\|v\|$ and, when $K\ne\{0\}$, $\|T\|=\sup_{\|v\|=1}\|Tv\|$; when $K=\{0\}$, $\|T\|=0$ ([[def-operator-norm]]).

[A2] Cauchy–Schwarz: $|\langle v,w\rangle|\le\|v\|\,\|w\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] The parallelogram law holds: $\|v+w\|^2+\|v-w\|^2=2\|v\|^2+2\|w\|^2$ ([[thm-parallelogram-law]]).

[A4] $S$ is self-adjoint, so $\langle Sv,w\rangle=\langle v,Sw\rangle$ for all $v,w$ by the defining identity of its adjoint ([[def-hilbert-space-adjoint]]); and $S\ge0$ means $\langle S\eta,\eta\rangle\ge0$ for every $\eta$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]). Only the given self-adjoint operator and its defining identity are used; existence of adjoints for arbitrary operators is not invoked.

## Proof

**Proof technique:** direct.

**Given:** a complex Hilbert space $K$, a self-adjoint $S\in\mathcal B(K)$, and the number $M:=\sup_{\|\eta\|=1}|\langle S\eta,\eta\rangle|$ with value $0$ when $K=\{0\}$.

1.1 $M\le\|S\|$: for unit $\eta$, Cauchy–Schwarz and $\|S\eta\|\le\|S\|$ give $|\langle S\eta,\eta\rangle|\le\|S\eta\|\le\|S\|$. [A1, A2]

1.2 For unit $x,y$, self-adjointness gives $\langle S(x+y),x+y\rangle=\langle Sx,x\rangle+\langle Sx,y\rangle+\langle Sy,x\rangle+\langle Sy,y\rangle$ and $\langle S(x-y),x-y\rangle=\langle Sx,x\rangle-\langle Sx,y\rangle-\langle Sy,x\rangle+\langle Sy,y\rangle$, and $\langle Sy,x\rangle=\overline{\langle Sx,y\rangle}$; subtracting, $4\operatorname{Re}\langle Sx,y\rangle=\langle S(x+y),x+y\rangle-\langle S(x-y),x-y\rangle$. [A1, A4]

2.1 For unit $x,y$ one has $|\langle Sx,y\rangle|\le M$: if $u:=\langle Sx,y\rangle\ne0$, replace $y$ by the unit vector $y'=(u/|u|)y$, so that $\langle Sx,y'\rangle=(\overline{u}/|u|)\langle Sx,y\rangle=|u|$ is real and nonnegative; then step 1.2 applies to $(x,y')$, and bounding each quadratic form by $M$ times the squared norm by rescaling nonzero vectors (the quadratic form at zero is zero) and applying the parallelogram law gives $4|u|=4\operatorname{Re}\langle Sx,y'\rangle\le M(\|x+y'\|^2+\|x-y'\|^2)=4M$. [A3, step 1.2]

3.1 For unit $x$ one has $\|Sx\|\le M$: if $Sx=0$ this is clear, and otherwise $y:=Sx/\|Sx\|$ is a unit vector with $|\langle Sx,y\rangle|=\|Sx\|$, so step 2.1 applies; consequently $\|S\|=\sup_{\|x\|=1}\|Sx\|\le M$ by [A1]. [A1, step 2.1]

4.1 Steps 1.1 and 3.1 give $M=\|S\|$, which is the first display. If $S\ge0$, then $\langle S\eta,\eta\rangle\ge0$ for every $\eta$ by [A4], so $|\langle S\eta,\eta\rangle|=\langle S\eta,\eta\rangle$ for every $\eta$ and the same supremum equals $\sup_{\|\eta\|=1}\langle S\eta,\eta\rangle$, giving the second display. When $K=\{0\}$ both suprema are the empty supremum $0$ by the stated convention and $\|S\|=0$. [A1, A4, step 1.1, step 3.1] ∎
