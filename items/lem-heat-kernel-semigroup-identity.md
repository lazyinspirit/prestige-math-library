---
id: lem-heat-kernel-semigroup-identity
kind: lemma
title: "The heat kernel semigroup identity $\\Gamma_t*\\Gamma_s=\\Gamma_{t+s}$"
status: draft
origin: pipeline
deps:
  - def-convolution-of-two-functions-on-rn
  - def-countable-choice
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-exponential-addition-formula
  - thm-gaussian-integral
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-tonelli-and-fubini-for-completed-product-measures
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "printed p. 130, formulas (5.5)–(5.6) obtained from the convolution theorem"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.36) and convolution representation (6.35)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Theorem 1.1, p. 5, formula (1.1.12)"
---

## Statement

Assume Countable Choice and let $n\ge1$. For all $s,t>0$ the convolution
$\Gamma(\cdot,t)*\Gamma(\cdot,s)$ converges absolutely at every
$x\in\mathbb R^n$ and equals $\Gamma(x,t+s)$; that is,
$\Gamma_t*\Gamma_s=\Gamma_{t+s}$ as functions on $\mathbb R^n$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s,t>0$, and $x\in\mathbb R^n$.

[A1] Countable Choice is the hypothesis carried by the integration and
change-of-variables suppliers below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is
$\Gamma(y,t)=(4\pi t)^{-n/2}\exp(-|y|^2/(4t))$, positive and integrable
([[def-heat-kernel]]); the convolution $f*g$ of
[[def-convolution-of-two-functions-on-rn]] is defined at $x$ when
$y\mapsto f(x-y)g(y)$ is measurable and integrable.

[F2] For real $u,v$ the exponential satisfies
$\exp(u)\exp(v)=\exp(u+v)$ ([[thm-exponential-addition-formula]]).

[F3] $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F4] Under $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$ the Lebesgue measure
$\lambda_{m+n}$ is the completion of the product measure
$\lambda_m\times\lambda_n$
([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F5] On completed sigma-finite product measure spaces, a nonnegative completed-product-measurable $f$ has measurable sections outside measurable null sets. Set the inner integrals to zero on those exceptional sets; the resulting measurable functions have integrals equal to $\int f\,d\overline{\mu\times\nu}$ ([[thm-tonelli-and-fubini-for-completed-product-measures]]). For the continuous Euclidean Gaussian integrands used here, every section is measurable, so the ordinary iterated integrals give the same value.

[F6] For a $C^1$ diffeomorphism $T:U\to V$ of open sets and every nonnegative
Lebesgue measurable $f:V\to[0,\infty]$,
$\int_Vf(y)\,dy=\int_Uf(T(x))|\det DT(x)|\,dx$
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]);
a translation of $\mathbb R^n$ has $|\det DT|=1$
([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F7] For every $t>0$ the kernel satisfies
$\Gamma(\lambda z,\lambda^2t)=\lambda^{-n}\Gamma(z,t)$ for every $\lambda>0$
and $z\in\mathbb R^n$
([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).



## Proof

**Proof technique:** direct.

1.1 Work under [A1] and fix $s,t>0$ and $x\in\mathbb R^n$. By the product form [F1] and the addition formula [F2], the convolution integrand is $\Gamma(x-y,t)\Gamma(y,s)=(4\pi t)^{-n/2}(4\pi s)^{-n/2}\exp\bigl(-|x-y|^2/(4t)-|y|^2/(4s)\bigr)$, a measurable function of $y$ that is strictly positive everywhere. [A1, F1, F2, F7, given]

1.2 Gaussian evaluation: for $A>0$, $\int_{\mathbb R^n}e^{-A|z|^2}\,dz=(\pi/A)^{n/2}$. Indeed, by the identification [F4] and Tonelli's theorem [F5] the integral factorises over the coordinates, each one-dimensional factor is $\int_{\mathbb R}e^{-Au^2}du=A^{-1/2}\sqrt\pi$ by the substitution $u=A^{-1/2}v$ of [F6] and the Gaussian integral [F3], and the product is $(\pi/A)^{n/2}$. [F3, F4, F5, F6, given, algebra]

2.1 Completing the square in the exponent: with $A:=(t+s)/(4ts)$ and $b:=xs/(t+s)$, the algebraic identity $-|x-y|^2/(4t)-|y|^2/(4s)=-A|y-b|^2-|x|^2/(4(t+s))$ holds, since the quadratic terms give $-A|y|^2$, the linear terms give $2Ab\cdot y=x\cdot y/(2t)$, and the constant term gives $A|b|^2-|x|^2/(4t)=-|x|^2/(4(t+s))$. [step 1.1, given, algebra]

3.1 Therefore the absolutely convergent (indeed nonnegative) integral defining the convolution equals $(4\pi t)^{-n/2}(4\pi s)^{-n/2}e^{-|x|^2/(4(t+s))}\int_{\mathbb R^n}e^{-A|y-b|^2}\,dy$, where the last integral is $\int_{\mathbb R^n}e^{-A|z|^2}\,dz=(\pi/A)^{n/2}=(4\pi ts/(t+s))^{n/2}$ by the translation case of [F6] and step 1.2; the prefactor simplifies to $(4\pi t)^{-n/2}(4\pi s)^{-n/2}(4\pi ts/(t+s))^{n/2}=(4\pi(t+s))^{-n/2}$, so $\Gamma(x-y,t)\Gamma(y,s)$ is integrable in $y$ and $\Gamma_t*\Gamma_s(x)=(4\pi(t+s))^{-n/2}e^{-|x|^2/(4(t+s))}=\Gamma(x,t+s)$ by [F1]. [step 2.1, step 1.2, F1, F6, given, algebra]

4.1 Steps 1.1, 2.1, 1.2 and 3.1 show that for every fixed $x$ the convolution integral converges absolutely and equals $\Gamma(x,t+s)$; as $s,t>0$ and $x$ were arbitrary, $\Gamma_t*\Gamma_s=\Gamma_{t+s}$ as functions on $\mathbb R^n$. [F1, step 3.1, given] ∎
