---
id: lem-finite-bessel-inequality
kind: lemma
title: The finite Bessel inequality and best approximation by a finite orthonormal family
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-pythagorean-theorem-and-finite-orthogonal-sums, def-real-and-complex-inner-product-space, def-orthogonality-and-orthogonal-complement, def-linear-subspace]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.47–48, Lemma 2.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Theorem 2.65 area, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product
space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
let $F\subseteq I$ be finite, and for $x\in H$ put

$$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$Then: 1. $P_Fx$ lies in the span of $\{e_i : i\in F\}$, and $\|P_Fx\|^2=\sum_{i\in F}|\langle x,e_i\rangle|^2$; 2. the residual $x-P_Fx$ is orthogonal to every $e_j$ with $j\in F$, hence to every vector of the span of $\{e_i : i\in F\}$; 3. $\|x-P_Fx\|^2=\|x\|^2-\sum_{i\in F}|\langle x,e_i\rangle|^2$, and therefore the **finite Bessel inequality** holds:$$\sum_{i\in F}|\langle x,e_i\rangle|^2\le\|x\|^2 ;$$4. $P_Fx$ is the unique best approximation to $x$ from the span of $\{e_i : i\in F\}$: for every $y$ in that span,$$\|x-y\|^2=\|x-P_Fx\|^2+\|P_Fx-y\|^2\ge\|x-P_Fx\|^2 ,$$
   with equality if and only if $y=P_Fx$.

At $F=\varnothing$ the sum defining $P_Fx$ is empty, so $P_Fx=0$ and the
identities read $\|x\|^2=\|x\|^2$.

## Facts & Assumptions

[A1] The inner product is linear in the first argument and conjugate-linear in the second, and $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A2] $\langle e_i,e_j\rangle=\delta_{ij}$, so in particular $\|e_i\|=1$ and $e_i\ne0$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A3] Orthogonality is symmetry-compatible and means $\langle u,v\rangle=0$; every vector is orthogonal to $0$ ([[def-orthogonality-and-orthogonal-complement]]).

[A4] Pairwise orthogonal finite sums satisfy Pythagoras: $\|\sum_j z_j\|^2=\sum_j\|z_j\|^2$ when the $z_j$ are pairwise orthogonal, the empty sum being $0$ ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A5] The span of a set of vectors consists of its finite linear combinations and is a linear subspace ([[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

**Given:** An orthonormal family $(e_i)_{i\in I}$ in $H$, a finite $F\subseteq I$, a vector $x\in H$, and $P_Fx=\sum_{i\in F}\langle x,e_i\rangle e_i$.

1.1 The vector $P_Fx$ is the finite linear combination of the vectors $e_i$, $i\in F$, with coefficients $\langle x,e_i\rangle$, so it lies in the span of $\{e_i:i\in F\}$ by [A5]; and $F=\varnothing$ gives $P_Fx=0$ with empty sums on both sides of the two norm identities. [A5, A1]

1.2 For every $j\in F$, linearity in the first argument and [A2] give $\langle P_Fx,e_j\rangle=\sum_{i\in F}\langle x,e_i\rangle\langle e_i,e_j\rangle=\langle x,e_j\rangle$, hence $\langle x-P_Fx,e_j\rangle=\langle x,e_j\rangle-\langle P_Fx,e_j\rangle=0$: the residual is orthogonal to every $e_j$ with $j\in F$. [A1, A2, A3]

1.3 Expanding the pairing of $P_Fx$ with itself, $\langle P_Fx,P_Fx\rangle=\sum_{i,j\in F}\langle x,e_i\rangle\overline{\langle x,e_j\rangle}\langle e_i,e_j\rangle=\sum_{i\in F}|\langle x,e_i\rangle|^2$, so $\|P_Fx\|^2=\sum_{i\in F}|\langle x,e_i\rangle|^2$ by [A1]. [A1, A2, algebra]

2.1 If $y$ lies in the span of $\{e_i:i\in F\}$, then $y=\sum_{i\in F}\lambda_ie_i$ for suitable scalars, so conjugate-linearity in the second argument together with step 1.2 gives $\langle x-P_Fx,y\rangle=\sum_{i\in F}\overline{\lambda_i}\langle x-P_Fx,e_i\rangle=0$; thus the residual is orthogonal to the whole span. [step 1.2, A1, A5]

2.2 The decomposition $x=P_Fx+(x-P_Fx)$ has orthogonal summands by step 1.2, so Pythagoras and step 1.3 give $\|x\|^2=\|P_Fx\|^2+\|x-P_Fx\|^2=\sum_{i\in F}|\langle x,e_i\rangle|^2+\|x-P_Fx\|^2$; since $\|x-P_Fx\|^2\ge0$ this yields the difference identity and the finite Bessel inequality. [step 1.2, step 1.3, A4, algebra]

3.1 For $y$ in the span, the vector $P_Fx-y$ also lies in the span, so it is orthogonal to $x-P_Fx$ by step 2.1; the difference identity of step 2.2 applied to the orthogonal decomposition $x-y=(x-P_Fx)+(P_Fx-y)$ gives $\|x-y\|^2=\|x-P_Fx\|^2+\|P_Fx-y\|^2$, which is at least $\|x-P_Fx\|^2$ and is equal to it exactly when $\|P_Fx-y\|=0$, that is exactly when $y=P_Fx$ by definiteness of the norm. [step 2.1, step 2.2, A4, A5, A1]

4.1 Steps 1.1 and 1.3 give the first claim, steps 1.2 and 2.1 the second, step 2.2 the third, and step 3.1 the fourth, so all four assertions hold for every finite $F$ and every $x$. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎
