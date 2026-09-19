---
id: lem-spectrum-of-a-positive-operator-is-nonnegative
kind: lemma
title: Spectrum of a positive operator is nonnegative
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-operator, def-countable-choice, def-spectrum-and-resolvent-of-a-bounded-operator, thm-cauchy-schwarz-in-an-inner-product-space, lem-kernel-range-orthogonality-for-hilbert-adjoints, def-hilbert-space-adjoint, def-real-and-complex-inner-product-space, thm-hilbert-adjoint-properties, def-operator-norm, def-hilbert-space, def-orthogonality-and-orthogonal-complement, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.49, printed pp.238–240"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume Countable Choice. If $T$ is a bounded positive operator on a nonzero complex Hilbert space, then $\sigma(T)\subseteq[0,+\infty)$.

## Facts & Assumptions

[A1] $T$ is positive when $\langle Tx,x\rangle$ is a real number in $[0,+\infty)$ for every $x$; positivity is a condition on the values of the quadratic form and does not presuppose self-adjointness ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A2] $\langle T^*x,y\rangle=\langle x,Ty\rangle$, and for a fixed $w$ the expansion of $\langle Tx,x\rangle$ at $x+ty$ uses the linear/conjugate-linear inner-product conventions ([[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]]).

[A3] $|\langle u,v\rangle|\le\|u\|\,\|v\|$ for all vectors $u,v$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A4] $\lambda\in\rho(T)$ exactly when $\lambda I-T$ is bijective with bounded inverse; $\sigma(T)$ is the complement of $\rho(T)$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A5] $(\operatorname{ran}S)^\perp=\ker S^*$ and $\overline{\operatorname{ran}S}=(\ker S^*)^\perp$ for every bounded $S$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[A6] $S^\perp=\{v:\langle v,s\rangle=0\ \forall s\in S\}$ and $\{0\}^\perp=H$ ([[def-orthogonality-and-orthogonal-complement]]).

[A7] A Hilbert space is complete for its induced norm; $z=\operatorname{Re}z+i\operatorname{Im}z$ and $z\notin[0,+\infty)$ means $\operatorname{Im}z\ne0$ or $\operatorname{Re}z<0$ ([[def-hilbert-space]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-operator-norm]]).

[A8] Countable Choice is the hypothesis of the adjoint and orthogonality suppliers used below ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded positive operator $T\in\mathcal B(H)$ and a scalar $z$ outside $[0,+\infty)$.

1.1 For every $x$ the number $r:=\langle Tx,x\rangle$ is real and nonnegative, so writing $z=a+bi$ one has $|\langle(T-zI)x,x\rangle|=|r-z|\,\|x\|^2$ with $|r-z|\ge|b|$ always and $|r-z|=r+|a|\ge|a|$ when $b=0$ and $a<0$. [A1, A7, algebra]

1.2 If $(T^*-zI)x=0$ with $x\ne0$, then testing against $x$ and using the adjoint identity gives $\langle Tx,x\rangle=z\|x\|^2$; the left side is a nonnegative real number while $z\notin[0,+\infty)$ makes $z\|x\|^2$ non-real or negative, so $\ker(T^*-zI)=\{0\}$. [A1, A2, A7, algebra]

2.1 If $z\notin\mathbb R$ then $\|(T-zI)x\|\ge|\operatorname{Im}z|\,\|x\|$ by the estimate and Cauchy–Schwarz, and the same lower bound with $|\operatorname{Re}z|$ holds when $z$ is real and negative; in either case $T-zI$ is injective and has closed range. [step 1.1, A3, A7, algebra]

3.1 For such $z$ the orthogonal complement of $\operatorname{ran}(T-zI)$ is $\ker(T^*-\overline zI)=\{0\}$, the vanishing being step 1.2 applied to the scalar $\overline z$, which also lies outside $[0,+\infty)$; the closed range equals its closure, so $\operatorname{ran}(T-zI)=H$. [step 2.1, step 1.2, A5, A6, A8]

4.1 Hence every $z\notin[0,+\infty)$ lies in $\rho(T)$: $T-zI$ is bijective with bounded inverse, so $\sigma(T)\subseteq[0,+\infty)$. [step 2.1, step 3.1, A4] ∎
