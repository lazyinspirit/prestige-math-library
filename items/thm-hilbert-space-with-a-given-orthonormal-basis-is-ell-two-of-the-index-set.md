---
id: thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set
kind: theorem
title: A Hilbert space with a given orthonormal basis is $\ell^2$ of the index set
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, thm-hilbert-space-fourier-expansion, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, def-square-summable-family-on-an-arbitrary-index-set, def-countable-choice, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-bessel-inequality, lem-pythagorean-theorem-and-finite-orthogonal-sums]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.52, discussion following Theorem 2.7"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.64, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(e_i)_{i\in I}$ be an orthonormal basis of a real or complex Hilbert space $H$,
that is, a complete orthonormal family
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
define the **Fourier coefficient map**

$$\Phi:H\to\ell^2(I,\mathbb F),\qquad \Phi(x):=(\langle x,e_i\rangle)_{i\in I}$$with values in the space of [[def-square-summable-family-on-an-arbitrary-index-set]]. Then $\Phi$ is a linear bijection satisfying$$\|\Phi(x)\|_2=\|x\|,\qquad \langle \Phi(x),\Phi(y)\rangle_{\ell^2}=\langle x,y\rangle \qquad\text{for all } x,y\in H .$$

In particular $\ell^2(I,\mathbb F)$ is complete, hence a Hilbert space, with
the inner product of [[def-square-summable-family-on-an-arbitrary-index-set]].

## Facts & Assumptions

[A1] If an orthonormal family is complete, then Parseval's identity holds: $\sum_{i\in I}|\langle x,e_i\rangle|^2=\|x\|^2$ for every $x\in H$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[A2] Bessel's inequality $\sum_{i\in I}|\langle x,e_i\rangle|^2\le\|x\|^2$ shows that $\Phi(x)$ lies in $\ell^2(I,\mathbb F)$, and $\Phi$ is linear because the inner product is linear in its first argument ([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]], [[def-real-and-complex-inner-product-space]]).

[A3] If $a\in\ell^2(I,\mathbb F)$, then the finite-subset net $\sum_{i\in F}a_ie_i$ converges to a limit $s$ with $\langle s,e_j\rangle=a_j$ for every $j$ ([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]]).

[A4] For finite $F$ and $x,y\in H$, $\langle P_Fx,P_Fy\rangle=\sum_{i\in F}\langle x,e_i\rangle\overline{\langle y,e_i\rangle}$, where $P_Fx=\sum_{i\in F}\langle x,e_i\rangle e_i$; and if $z_F\to z$ in $H$ then $\langle z_F,v\rangle\to\langle z,v\rangle$ ([[lem-finite-bessel-inequality]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A5] $\ell^2(I,\mathbb F)$ is an inner-product space with norm $\|\cdot\|_2$ and pairing $\langle a,b\rangle=\sum_{i\in I}a_i\overline{b_i}$, and $H$ is complete for its norm ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-hilbert-space]]).

[A6] Under completeness the finite-subset net of Fourier partial sums $P_Fx$ converges to $x$ ([[thm-hilbert-space-fourier-expansion]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, an orthonormal basis $(e_i)_{i\in I}$ of $H$, and the coefficient map $\Phi$.

1.1 The map $\Phi$ takes values in $\ell^2(I,\mathbb F)$ and is linear, and Parseval's identity holds for every $x$ because the family is complete; hence $\|\Phi(x)\|_2=\|x\|$ for every $x$, and $\Phi(x)=0$ forces $\|x\|=0$, so $x=0$ by definiteness of the norm. Thus $\Phi$ is linear, norm preserving and injective. [A1, A2]

1.2 The finite-subset net $\sum_{i\in F}a_ie_i$ converges for every $a\in\ell^2(I,\mathbb F)$, and its limit $s$ has $\langle s,e_j\rangle=a_j$ for every $j$; hence $\Phi(s)=a$ and $\Phi$ is surjective. [A3]

1.3 For all $x,y\in H$ the inner products are preserved: for every finite $F$ orthonormality gives $\langle P_Fx,P_Fy\rangle=\sum_{i\in F}\langle x,e_i\rangle\overline{\langle y,e_i\rangle}$, both sides converge along the finite-subset net, the left to $\langle x,y\rangle$ by continuity of the pairing and convergence of the partial sums to $x$ and $y$, the right to the $\ell^2$ pairing of $\Phi(x)$ and $\Phi(y)$ by the definition of the sum of a scalar family; limits being unique, $\langle\Phi(x),\Phi(y)\rangle_{\ell^2}=\langle x,y\rangle$. [A4, A5, A6]

2.1 Consequently $\ell^2(I,\mathbb F)$ is complete: if $(a^{(n)})$ is a Cauchy sequence in $\ell^2(I,\mathbb F)$, then the vectors $x_n:=\Phi^{-1}(a^{(n)})$ form a Cauchy sequence in $H$ by norm preservation, hence converge to some $x\in H$; then $\|a^{(n)}-\Phi(x)\|_2=\|x_n-x\|\to0$, so the sequence converges to $\Phi(x)$. [step 1.1, step 1.2, A5]

3.1 Steps 1.1 to 1.3 show that $\Phi$ is a linear bijection preserving norms and inner products, and step 2.1 shows that $\ell^2(I,\mathbb F)$ is complete; hence $H$ and $\ell^2(I,\mathbb F)$ are isometrically isomorphic Hilbert spaces and $\ell^2(I,\mathbb F)$ is itself a Hilbert space. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
