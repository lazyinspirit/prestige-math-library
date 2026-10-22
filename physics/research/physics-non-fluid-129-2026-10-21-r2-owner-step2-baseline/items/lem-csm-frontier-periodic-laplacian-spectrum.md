---
id: lem-csm-frontier-periodic-laplacian-spectrum
kind: lemma
title: Fourier spectrum and positivity of the periodic lattice Laplacian
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-integers-modulo-n
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - lem-finite-sum-reindexing-and-fubini
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-addition-formulas
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
dependency_roles:
  def-integers-modulo-n: mathematical-premise
  lem-orthogonality-of-characters-on-a-finite-cyclic-group: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §§8.2–8.3, printed pp. 385–388, finite Gaussian fields and the discrete Laplacian/Green identities.
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.2, printed pp. 44–46 / PDF pp. 45–47, Fourier representation of the Gaussian Green kernel.
verification:
  precheck: pending
---

## Statement

Let $d\ge1$ and $L\ge1$ be integers, let $\Lambda_{d,L}:=(\mathbb Z/L\mathbb Z)^d$, and represent every residue coordinate by its unique value in $\{0,\ldots,L-1\}$. Write $e_j$ for the $j$th coordinate class, and count the two terms $x+e_j$ and $x-e_j$ separately even when they coincide for $L=1$ or $L=2$. For a real function $f$ on $\Lambda_{d,L}$, define

$$(-\Delta f)(x):=\sum_{j=1}^d\bigl(2f(x)-f(x+e_j)-f(x-e_j)\bigr).$$

Extend $-\Delta$ complex-linearly. For $r=(r_1,\ldots,r_d)\in\{0,\ldots,L-1\}^d$, define $\chi_r(x):=\exp(2\pi i\,r\cdot x/L)$. With inner product $\langle f,g\rangle=L^{-d}\sum_{x\in\Lambda_{d,L}}f(x)\overline{g(x)}$, the $L^d$ characters $\chi_r$ form an orthonormal basis of $\mathbb C^{\Lambda_{d,L}}$ and satisfy

$$-\Delta\chi_r=\lambda_r\chi_r,\qquad \lambda_r=4\sum_{j=1}^d\sin^2(\pi r_j/L).$$

Consequently $-\Delta$ is real symmetric positive semidefinite, and for $m^2>0$ and $\kappa>0$ the matrix $m^2I_{\Lambda_{d,L}}+\kappa(-\Delta)$ is real symmetric positive definite with eigenvalues $m^2+4\kappa\sum_j\sin^2(\pi r_j/L)>0$.

## Statement references

[[def-integers-modulo-n]]

## Facts & Assumptions

**Given:** Integers $d,L\ge1$, the periodic lattice and discrete Laplacian of the Statement, and the canonical representatives $0,\ldots,L-1$.

[F1] For $N\ge1$ and integers $k,\ell$, $\sum_{x=0}^{N-1}e^{2\pi i(k-\ell)x/N}$ is $N$ if $k\equiv\ell\pmod N$ and is $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F2] Finite sums over product index sets may be factored and evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

[F3] $\exp(z+w)=\exp z\exp w$ and $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F4] $e^{it}=\cos t+i\sin t$ for real $t$, and $2-2\cos t=4\sin^2(t/2)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-addition-formulas]]).

[F5] Sine is odd and cosine is even, so $e^{-it}+e^{it}=2\cos t$ for real $t$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 For $r\in\{0,\ldots,L-1\}^d$, the character is periodic in each coordinate: adding or subtracting $L$ in coordinate $j$ multiplies it by $\exp(2\pi i r_j)=1$ by [F3]. Therefore $\chi_r(x+e_j)=e^{2\pi i r_j/L}\chi_r(x)$ and $\chi_r(x-e_j)=e^{-2\pi i r_j/L}\chi_r(x)$, including coordinate wraparound. [given, F3, algebra]

2.1 For $r,s\in\{0,\ldots,L-1\}^d$, finite-sum factorization [F2] gives $\langle\chi_r,\chi_s\rangle=\prod_{j=1}^d L^{-1}\sum_{x_j=0}^{L-1}e^{2\pi i(r_j-s_j)x_j/L}$. By [F1], each factor is $1$ if $r_j=s_j$ and $0$ otherwise; hence these characters are orthonormal. [F1, F2, step 1.1, algebra]

2.2 Substituting the shift identities of step 1.1 into the definition of $-\Delta$ gives $-\Delta\chi_r=\sum_j(2-e^{2\pi i r_j/L}-e^{-2\pi i r_j/L})\chi_r$. By Euler's identity [F4] and parity [F5], each coefficient is $2-2\cos(2\pi r_j/L)$; the double-angle identity in [F4] makes this $4\sin^2(\pi r_j/L)$, proving the displayed eigenvalue formula. [F4, F5, step 1.1, algebra]

3.1 For any $f:\Lambda_{d,L}\to\mathbb C$, set $\widehat f(r)=L^{-d}\sum_{y\in\Lambda_{d,L}}f(y)\overline{\chi_r(y)}$. Applying [F1] in the frequency coordinates and using the unique representatives for the residue classes ([[def-integers-modulo-n]]) gives $\sum_r\chi_r(x)\overline{\chi_r(y)}=L^d$ when $x=y$ in $\Lambda_{d,L}$ and $0$ otherwise. Thus $\sum_r\widehat f(r)\chi_r(x)=L^{-d}\sum_y f(y)\sum_r\chi_r(x)\overline{\chi_r(y)}=f(x)$ for every $x$, so the characters span and the orthonormal family is a basis. [F1, F2, step 2.1, algebra]

4.1 For every real $f$, reindexing the finite sums gives $\sum_xf(x)(-\Delta f)(x)=\sum_{j=1}^d\sum_x(f(x+e_j)-f(x))^2\ge0$, so $-\Delta$ is positive semidefinite; its displayed matrix is symmetric because each neighbor term is paired with its reverse. Hence for nonzero $f$, $$f^{\mathsf T}(m^2I+\kappa(-\Delta))f=m^2\sum_xf(x)^2+\kappa\sum_{j=1}^d\sum_x(f(x+e_j)-f(x))^2>0,$$ since $m^2>0$ and $\kappa>0$. The characters form a basis by step 3.1, and their eigenvalues for $-\Delta$ are given by step 2.2, so the combined operator has the stated eigenvalues. Therefore it is symmetric positive definite with the displayed spectrum. [given, F2, step 2.2, step 3.1, algebra] ∎
