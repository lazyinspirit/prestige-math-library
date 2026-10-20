---
id: thm-riesz-representation-for-hilbert-space
kind: theorem
title: Riesz representation for Hilbert spaces
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-orthogonal-decomposition-by-a-closed-subspace, thm-cauchy-schwarz-in-an-inner-product-space, def-dual-space-of-a-normed-space, def-bounded-linear-operator, def-operator-norm, def-linear-subspace, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorems 1.43 and 5.35, pp.39 and 236"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 184"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, Theorem 2.0.6"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a real or complex Hilbert space and let $f$ be a bounded linear functional on $H$ ([[def-dual-space-of-a-normed-space]]). Then there is a unique $y\in H$ with

$$f(x)=\langle x,y\rangle\qquad\text{for every }x\in H,$$

and $\|f\|=\|y\|$, where $\|f\|$ is the dual norm ([[def-operator-norm]]). Under the first-variable-linear convention the representing vector depends conjugate-linearly and isometrically on $f$: if $f_i$ is represented by $y_i$ and $a,b$ are scalars, then $af_1+bf_2$ is represented by $\overline a\,y_1+\overline b\,y_2$.

## Facts & Assumptions

[A1] If $f$ is a bounded linear functional then $\|f\|=\sup_{\|x\|\le1}|f(x)|$ and $|f(x)|\le\|f\|\,\|x\|$, and $f=0$ exactly when $\|f\|=0$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[A2] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$, and the pairing is linear in the first argument and conjugate-linear in the second with $\langle v,v\rangle=\|v\|^2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]]).

[A3] The kernel of a bounded linear functional is either all of $H$ or a proper linear subspace, and the orthogonal complement of a subspace is closed under the decomposition $H=N\oplus N^\perp$ for closed $N$ ([[def-linear-subspace]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A4] For a subset $S$, $S^\perp=\{v:\langle v,s\rangle=0\ \forall s\in S\}$ ([[def-orthogonality-and-orthogonal-complement]]).

[A5] Countable Choice is the hypothesis under which the orthogonal decomposition, and hence this representation, is obtained ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a real or complex Hilbert space $H$ and a bounded linear functional $f$ on $H$.

1.1 If $f=0$, then $y=0$ represents $f$ because $\langle x,0\rangle=0$ for every $x$, and $\|f\|=0=\|y\|$; the same $f$ has no other representing vector, since a vector $y'$ representing $f$ satisfies $\langle y',y'\rangle=0$ and hence $y'=0$. [A1, A2]

1.2 If $f\ne0$, its kernel is a proper linear subspace of $H$: it is linear because $f(au+bv)=af(u)+bf(v)$, it is proper because $f$ takes a nonzero value, and it is closed because $x_n\to x$ and $f(x_n)=0$ give $|f(x)|\le|f(x)-f(x_n)|\le\|f\|\,\|x-x_n\|\to0$. [A1, A3]

2.1 Choose $z$ with $f(z)\ne0$ and put $u=z/f(z)$, so $f(u)=1$; decompose $u=m+n$ with $m\in\ker f$ and $n\in(\ker f)^\perp$, then $1=f(u)=f(m)+f(n)=f(n)$ shows $n\ne0$ and $f(n)=1$. [step 1.2, A3, A5]

3.1 For arbitrary $x$, the vector $v=x-f(x)u$ satisfies $f(v)=f(x)-f(x)\cdot1=0$, hence $\langle v,n\rangle=0$ and $\langle x,n\rangle=f(x)\langle u,n\rangle$; moreover $\langle u,n\rangle=\langle m+n,n\rangle=\langle m,n\rangle+\langle n,n\rangle=0+\|n\|^2$, so $f(x)=\langle x,n\rangle/\|n\|^2=\langle x,n/\|n\|^2\rangle$ with $y:=n/\|n\|^2$. [step 2.1, A2, A4, algebra]

4.1 Norm and uniqueness: Cauchy–Schwarz gives $|f(x)|=|\langle x,y\rangle|\le\|x\|\,\|y\|$, so $\|f\|\le\|y\|$, while $f(y)=\|y\|^2$ gives $\|f\|\ge\|y\|$; hence $\|f\|=\|y\|$, and this contains the case $f=0$. If also $f(x)=\langle x,y'\rangle$ for all $x$, then $\langle x,y-y'\rangle=0$ for all $x$, and the choice $x=y-y'$ gives $\|y-y'\|^2=0$, so $y=y'$. [step 3.1, A1, A2, algebra]

5.1 Conjugate linearity: if $f_i(x)=\langle x,y_i\rangle$ for $i=1,2$, then for all $x$ and scalars $a,b$ one has $(af_1+bf_2)(x)=a\langle x,y_1\rangle+b\langle x,y_2\rangle=\langle x,\overline a y_1+\overline b y_2\rangle$ by conjugate-linearity in the second argument; uniqueness of the representing vector therefore gives the representing vector $\overline a y_1+\overline b y_2$, so the map $f\mapsto y$ is conjugate-linear, and by step 4.1 it is isometric. [step 4.1, A2, algebra]

6.1 Steps 1.1, 3.1 and 4.1 produce the unique representing vector together with the norm identity for every bounded $f$, and step 5.1 records its conjugate-linear isometric dependence; Countable Choice is used exactly through the orthogonal decomposition of step 2.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, A5] ∎
