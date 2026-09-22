---
id: thm-hilbert-adjoint-properties
kind: theorem
title: Hilbert-adjoint identities
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space-adjoint, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, lem-composition-operator-norm-inequality, def-bounded-linear-operator, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.36 and Lemma 5.38, pp.237–238"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 185"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice. Let $H,K,L$ be real or complex Hilbert spaces and let $R,S\in\mathcal B(H,K)$ and $T\in\mathcal B(K,L)$ be bounded linear operators. Then the Hilbert adjoints satisfy:

1. $(aR+bS)^*=\overline a\,R^*+\overline b\,S^*$ for scalars $a,b$, and the adjoint of an operator is unique;
2. $(TS)^*=S^*T^*$;
3. $T^{**}=T$ and $\|T^*\|=\|T\|$;
4. $\|T^*T\|=\|T\|^2$.

## Facts & Assumptions

[A1] The Hilbert adjoint of $T\in\mathcal B(K,L)$ is the unique map $T^*:L\to K$ with $\langle Tx,y\rangle_L=\langle x,T^*y\rangle_K$ for all $x,y$ ([[def-hilbert-space-adjoint]]).

[A2] The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric, and $\langle v,v\rangle=0$ implies $v=0$ ([[def-real-and-complex-inner-product-space]]).

[A3] The operator norm satisfies $\|Tu\|\le\|T\|\,\|u\|$ and is the unit-ball supremum ([[def-operator-norm]]), while composition obeys $\|UV\|\le\|U\|\,\|V\|$ ([[lem-composition-operator-norm-inequality]]); a linear map is bounded if it admits a finite constant $C\ge0$ with $\|Uy\|\le C\|y\|$ for every $y$ ([[def-bounded-linear-operator]]).

[A4] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A5] Countable Choice is the hypothesis of the Riesz construction of adjoints ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Hilbert spaces $H,K,L$ and bounded operators $R,S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$.

1.1 First let $U:X\to Y$ be any bounded linear operator between Hilbert spaces over the same scalar field. The map $U^*:Y\to X$ exists by the adjoint construction. For $y,z\in Y$, scalars $a,b$ and $x\in X$, its identity gives $\langle x,U^*(ay+bz)\rangle=\langle Ux,ay+bz\rangle=\overline a\langle x,U^*y\rangle+\overline b\langle x,U^*z\rangle=\langle x,aU^*y+bU^*z\rangle$. Positive definiteness applied to the difference proves that $U^*$ is linear. Also $\|U^*y\|^2=\langle U(U^*y),y\rangle\le|\langle U(U^*y),y\rangle|\le\|U\|\,\|U^*y\|\,\|y\|$, so division when $U^*y\ne0$, and the trivial inequality otherwise, give $\|U^*y\|\le\|U\|\,\|y\|$. Thus $U^*$ is bounded and its now-defined operator norm satisfies $\|U^*\|\le\|U\|$. This applies to each bounded operator used below, including an adjoint once its boundedness has been established. [A1, A2, A3, A4, A5, algebra]

2.1 For uniqueness of the adjoint and conjugate-linearity in the operator, let $U,V\in\mathcal B(K,H)$ both satisfy the defining adjoint identity for the same operator in $\mathcal B(H,K)$. For $y\in K$, one has $\langle x,(U-V)y\rangle_H=0$ for every $x\in H$; taking $x=(U-V)y$ gives $(U-V)y=0$. For scalars $a,b$, the identities $\langle(aR+bS)x,y\rangle_K=a\langle Rx,y\rangle_K+b\langle Sx,y\rangle_K=\langle x,\overline aR^*y+\overline bS^*y\rangle_H$ hold for all $x\in H$ and $y\in K$, so $(aR+bS)^*=\overline aR^*+\overline bS^*$. [step 1.1, A1, A2, A5]

3.1 Composition and involution: for $x\in H$ and $y\in L$, $\langle x,S^*T^*y\rangle_H=\langle Sx,T^*y\rangle_K=\langle TSx,y\rangle_L$, so $(TS)^*=S^*T^*$ by uniqueness. Likewise, for $x\in K$ and $y\in L$, the defining identity for $T^*$ gives $\langle T^*y,x\rangle_K=\langle y,T^{**}x\rangle_L$; conjugate symmetry and the defining identity for $T$ give $\langle T^{**}x,y\rangle_L=\langle x,T^*y\rangle_K=\langle Tx,y\rangle_L$, so $T^{**}=T$ by uniqueness. [step 1.1, step 2.1, A1, A2]

4.1 Norms: Cauchy–Schwarz gives $\|T^*y\|^2=\langle T^*y,T^*y\rangle_K=\langle T(T^*y),y\rangle_L\le\|T\|\,\|T^*y\|\,\|y\|$, hence $\|T^*y\|\le\|T\|\,\|y\|$ (trivially when $T^*y=0$) and $\|T^*\|\le\|T\|$; applying this to $T^*$ and using $T^{**}=T$ gives $\|T^*\|=\|T\|$. Moreover $\|T^*T\|\le\|T^*\|\,\|T\|=\|T\|^2$, while for $\|x\|\le1$ one has $\|Tx\|^2=\langle x,T^*Tx\rangle_K\le\|x\|\,\|T^*Tx\|\le\|T^*T\|$, so $\|T\|^2\le\|T^*T\|$ and hence $\|T^*T\|=\|T\|^2$. [step 1.1, step 3.1, A3, A4, algebra] ∎
