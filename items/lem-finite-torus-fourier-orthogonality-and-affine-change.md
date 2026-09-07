---
id: lem-finite-torus-fourier-orthogonality-and-affine-change
kind: lemma
title: "Finite torus fourier orthogonality and affine change"
status: published
origin: pipeline
deps: [def-finite-torus-fourier-transform, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §8.1.1 Propositions8.5–8.6, pp70–71, corrected normalization."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For the normalized negative-exponent Fourier transform on $(\mathbb Z/m\mathbb Z)^2$, the characters are an orthonormal basis, and
$$f=\sum_b\widehat f(b)\chi_b,\quad \|f\|^2=\sum_b|\widehat f(b)|^2,\quad \sum_x f(x)=0\iff\widehat f(0)=0.$$
For every invertible matrix $T$ over $\mathbb Z/m\mathbb Z$, and $g(x)=f(Tx+a)$,
$$\widehat g(y)=\omega^{\,y\cdot T^{-1}a}\widehat f(T^{-\mathsf T}y).$$

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] On $V=(\mathbb Z/m\mathbb Z)^2$, $m\ge1$, let $\omega=e^{2\pi i/m}$ and $\chi_b(x)=\omega^{b_1x_1+b_2x_2}$. Residue representatives do not affect these values. With inner product $\langle f,g\rangle=m^{-2}\sum_x f(x)\overline{g(x)}$, define $$\widehat f(b)=\langle f,\chi_b\rangle=m^{-2}\sum_x f(x)\omega^{-b\cdot x}.$$ The norm is $\|f\|^2=m^{-2}\sum_x|f(x)|^2$. At $m=1$ there is one character, the constant function one. The sign in the exponent is part of this convention. ([[def-finite-torus-fourier-transform]]).


## Proof

1.1 For $m>1$, $\sum_{j=0}^{m-1}\omega^{cj}$ is $m$ if $c=0$ modulo $m$, and otherwise is zero because multiplication by $1-\omega^c\ne0$ telescopes to $1-\omega^{cm}=0$. Applying this to each coordinate shows $\langle\chi_b,\chi_c\rangle$ is one for $b=c$ and zero otherwise. At $m=1$ the one character has norm one directly. [F1]

2.1 There are $m^2$ orthonormal characters in the $m^2$-dimensional function space, hence they form a basis: linear independence follows by taking inner products, and an independent list of that length spans by elementary elimination. Expansion in this basis gives inversion and, on taking its squared norm, Parseval. The zero coefficient is exactly the normalized sum, establishing both directions of the mean-zero criterion. [step 1.1, algebra]

3.1 Substitute $u=Tx+a$ in the defining sum. The exponent becomes $-y\cdot T^{-1}(u-a)=-(T^{-\mathsf T}y)\cdot u+y\cdot T^{-1}a$. Bijection of this substitution preserves the sum and its normalization, giving the positive phase in the displayed formula. It covers $a=0$, constant and zero functions, and the singleton torus as well. [F1, step 2.1, algebra] ∎
