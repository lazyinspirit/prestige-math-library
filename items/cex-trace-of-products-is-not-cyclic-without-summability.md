---
id: cex-trace-of-products-is-not-cyclic-without-summability
kind: counterexample
title: Trace of products is not cyclic without summability
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cyclicity-of-the-trace, ex-rank-one-operator-adjoint-norm-and-trace, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-of-a-trace-class-operator, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-hilbert-space-fourier-expansion, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-hilbert-schmidt-operator, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-operator-norm, def-bounded-linear-operator, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, the shift and the failure of cyclicity without trace class"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\ell^2:=\ell^2(\mathbb N,\mathbb F)$ with standard basis $(u_n)_{n\in\mathbb N}$
given by $u_n(m)=\delta_{mn}$, and let
$S\in\mathcal B(\ell^2)$ be the unilateral forward shift
$$Su_n:=u_{n+1}\qquad(n\in\mathbb N),$$
extended linearly and by continuity, with $P_0:=\langle\cdot,u_0\rangle u_0$.
Then
$$S^*S=I,\qquad SS^*=I-P_0,\qquad S^*S-SS^*=P_0,$$
neither $S^*S=I$ nor $SS^*=I-P_0$ is trace class
([[def-trace-class-operator]]), while $P_0$ is rank one with
$\operatorname{tr}(P_0)=1$
([[ex-rank-one-operator-adjoint-norm-and-trace]]). Consequently the cyclicity
identity $\operatorname{tr}(ST)=\operatorname{tr}(TS)$ of
[[thm-cyclicity-of-the-trace]] cannot be extended to products that are not
trace class: here the two products fail the hypothesis, and the difference
$S^*S-SS^*$ has trace $1$, so no subtraction of "infinite traces" is available.

## Facts & Assumptions

**Given:** Countable Choice, the space $\ell^2$ with its standard basis $(u_n)$, the forward shift $S$, and the projection $P_0=\langle\cdot,u_0\rangle u_0$.

[A1] **The standard basis and shifts.** The vectors $u_n\in\ell^2$ satisfy $\langle u_m,u_n\rangle=\delta_{mn}$ and $\|u_n\|_2=1$, and if $a\in\ell^2$ has $\langle a,u_n\rangle=0$ for every $n$ then $a=0$, so the zero-complement characterisation makes $(u_n)$ a complete orthonormal family, a Hilbert basis of $\ell^2$; hence every $x\in\ell^2$ equals $\sum_n\langle x,u_n\rangle u_n$ and two vectors with equal coefficients coincide ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-real-and-complex-inner-product-space]]). The forward shift has $\|Su_n\|=1$, is an isometry, and its adjoint satisfies $S^*u_0=0$, $S^*u_n=u_{n-1}$ for $n\ge1$, the adjoint being characterised by $\langle Sx,y\rangle=\langle x,S^*y\rangle$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]], [[def-operator-norm]], [[def-bounded-linear-operator]]).

[A2] **Trace-class diagonal test.** If $T$ is trace class and $E$ is a Hilbert basis, then $\sum_{e\in E}|\langle Te,e\rangle|\le\|T\|_1<+\infty$; hence an operator $T$ for which some Hilbert basis has infinitely many $e$ with $\langle Te,e\rangle=1$ is not trace class ([[def-trace-of-a-trace-class-operator]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-class-operator]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A3] **Rank-one operators.** For $u,v\in H$ the operator $\langle\cdot,v\rangle u$ has adjoint $\langle\cdot,u\rangle v$, norm $\|u\|\|v\|$, and trace $\langle u,v\rangle$; in particular $P_0=\langle\cdot,u_0\rangle u_0$ has trace $\langle u_0,u_0\rangle=1$ ([[ex-rank-one-operator-adjoint-norm-and-trace]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A4] **Cyclicity theorem.** If $T$ is trace class and $S$ is bounded then $ST$ and $TS$ are trace class and have equal traces ([[thm-cyclicity-of-the-trace]]).

## Counterexample

**Proof technique:** direct.

**Given:** Countable Choice, the shift $S$, the projection $P_0$, and the standard basis.

1.1 **The products.** Since $S$ is an isometry, $\langle S^*Sx,y\rangle=\langle Sx,Sy\rangle=\langle x,y\rangle$ for all $x,y$ by [A1], so $S^*S=I$. Similarly $\langle SS^*x,u_n\rangle=\langle S^*x,S^*u_n\rangle$ for $n\ge1$ equals $\langle S^*x,u_{n-1}\rangle=\langle x,u_n\rangle$, while $\langle SS^*x,u_0\rangle=\langle S^*x,S^*u_0\rangle=0$; hence $SS^*$ fixes each $u_n$ with $n\ge1$ and annihilates $u_0$, that is $SS^*x=x-\langle x,u_0\rangle u_0=(I-P_0)x$ for all $x$, and $S^*S-SS^*=P_0$. [A1]

1.2 **Neither product is trace class.** For $I$ with the Hilbert basis $(u_n)$, every diagonal coefficient is $\langle Iu_n,u_n\rangle=1$, so $\sum_n|\langle Iu_n,u_n\rangle|=+\infty$ and $I$ is not trace class by [A2]. For $I-P_0$, the coefficients at $u_n$ with $n\ge1$ are $\langle(I-P_0)u_n,u_n\rangle=1$, again infinitely many equal to $1$, so $I-P_0$ is not trace class by [A2]. [A1, A2]

1.3 **The difference has trace one.** $P_0=\langle\cdot,u_0\rangle u_0$ is a rank-one operator whose trace is $\langle u_0,u_0\rangle=1$ by [A3]; note that $u_0\ne0$ because it is a unit vector. [A3]

2.1 **Conclusion.** The products $S^*S=I$ and $SS^*=I-P_0$ are not trace class by [step 1.2], so the hypothesis of the cyclicity theorem [A4] fails for this pair and no equality of traces is asserted or available; the difference of the two products is $P_0$ with trace $1$ by [step 1.1] and [step 1.3], so the identity cannot be repaired by subtracting the two "traces", which are not defined. [step 1.1, step 1.2, step 1.3, A4] ∎
