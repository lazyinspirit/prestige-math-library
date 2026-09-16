---
id: thm-hilbert-adjoint-properties
kind: theorem
title: Hilbert-adjoint identities
status: draft
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
---

## Statement

Assume the Axiom of Countable Choice. Let $H,K,L$ be real or complex Hilbert spaces and let $S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$ be bounded linear operators. Then the Hilbert adjoints satisfy:

1. $(aT+bS)^*=\overline a\,T^*+\overline b\,S^*$ for scalars $a,b$, and the adjoint of an operator is unique;
2. $(TS)^*=S^*T^*$;
3. $T^{**}=T$ and $\|T^*\|=\|T\|$;
4. $\|T^*T\|=\|T\|^2$.

## Facts & Assumptions

[A1] The Hilbert adjoint of $T\in\mathcal B(K,L)$ is the unique map $T^*\in\mathcal B(L,K)$ with $\langle Tx,y\rangle_L=\langle x,T^*y\rangle_K$ for all $x,y$ ([[def-hilbert-space-adjoint]]).

[A2] The pairing is linear in the first argument, conjugate-linear in the second, conjugate symmetric, and $\langle v,v\rangle=0$ implies $v=0$ ([[def-real-and-complex-inner-product-space]]).

[A3] The operator norm satisfies $\|Tu\|\le\|T\|\,\|u\|$ and is the unit-ball supremum ([[def-operator-norm]]), while composition obeys $\|UV\|\le\|U\|\,\|V\|$ ([[lem-composition-operator-norm-inequality]]); every adjoint is a bounded linear operator ([[def-bounded-linear-operator]]).

[A4] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A5] Countable Choice is the hypothesis of the Riesz construction of adjoints ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Hilbert spaces $H,K,L$ and bounded operators $S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$.

1.1 For unitarity of the adjoint and conjugate-linearity in the operator: if $U,V\in\mathcal B(H,K)$ both satisfy the defining identity and $y\in K$, then $\langle x,(U-V)y\rangle=0$ for all $x$, in particular for $x=(U-V)y$, so $(U-V)y=0$; and for scalars $a,b$ the pairing identities $\langle(aT+bS)x,y\rangle=a\langle Tx,y\rangle+b\langle Sx,y\rangle=\langle x,\overline aT^*y+\overline bS^*y\rangle$ hold for all $x,y$, so $(aT+bS)^*=\overline aT^*+\overline bS^*$. [A1, A2, A5]

2.1 Composition and involution: for $T\in\mathcal B(K,L)$ and $S\in\mathcal B(H,K)$, $\langle x,S^*T^*y\rangle_K=\langle Sx,T^*y\rangle_L=\langle TSx,y\rangle_L$ for all $x\in H$ and $y\in L$, so $(TS)^*=S^*T^*$ by uniqueness; likewise $\langle x,T^{**}y\rangle_K=\overline{\langle T^*y,x\rangle_H}=\overline{\langle y,Tx\rangle_L}=\langle Tx,y\rangle_L$ for all $x,y$, so $T^{**}=T$. [step 1.1, A1, A2]

3.1 Norms: Cauchy–Schwarz gives $\|T^*y\|^2=\langle T^*y,T^*y\rangle_K=\langle T(T^*y),y\rangle_L\le\|T\|\,\|T^*y\|\,\|y\|$, hence $\|T^*y\|\le\|T\|\,\|y\|$ (trivially when $T^*y=0$) and $\|T^*\|\le\|T\|$; applying this to $T^*$ and using $T^{**}=T$ gives $\|T^*\|=\|T\|$. Moreover $\|T^*T\|\le\|T^*\|\,\|T\|=\|T\|^2$, while for $\|x\|\le1$ one has $\|Tx\|^2=\langle x,T^*Tx\rangle_K\le\|x\|\,\|T^*Tx\|\le\|T^*T\|$, so $\|T\|^2\le\|T^*T\|$ and hence $\|T^*T\|=\|T\|^2$. [step 2.1, A3, A4, algebra] ∎
