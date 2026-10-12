---
id: lem-nrqm-composites-complex-gaussian-continuation
kind: lemma
domain: mathematics
title: "Complex Gaussian continuation"
status: draft
origin: pipeline
dependency_level: 0
deps: [lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-dominated-convergence, def-complex-differentiability-holomorphic-and-entire, def-complex-domain, def-complex-logarithms-principal-logarithm-and-complex-powers, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, thm-identity-theorem-holomorphic-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-improper-integral-at-infinity, def-countable-choice]
dependency_roles:
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-complex-domain: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
  cor-principal-logarithm-is-holomorphic-on-the-slit-plane: mathematical-premise
  thm-chain-rule-for-complex-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §7.2-7.3 pp. 167-172 (Gaussian kernels for the free evolution)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics' (Gaussian integrals and free packets)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For $z\in\mathbb C$ with $\operatorname{Re}z>0$ and $n\ge1$ let

$$G_n(z):=\int_{\mathbb R^n}e^{-z|x|^2}\,dx,$$

understood as the absolutely convergent improper multiple integral of the real and imaginary parts ([[def-improper-integral-at-infinity]]). Then:

(a) $G_n(z)$ converges absolutely for every $z$ with $\operatorname{Re}z>0$, and $G_1$ is holomorphic on the right half-plane $\Omega:=\{z\in\mathbb C:\operatorname{Re}z>0\}$ with $G_1'(z)=-\int_{\mathbb R}x^2e^{-zx^2}dx$ ([[def-complex-differentiability-holomorphic-and-entire]], [[def-complex-domain]]);

(b) with $\operatorname{Log}$ the principal logarithm and the branch $z^{-1/2}:=\exp\bigl(-\tfrac12\operatorname{Log}z\bigr)$ on the slit plane ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]),

$$G_1(z)=\sqrt{\pi}\,z^{-1/2},\qquad G_1(z)^2=\frac{\pi}{z}\qquad(z\in\Omega),$$

the value on the positive real axis being $G_1(t)=\sqrt{\pi/t}$ for $t>0$;

(c) for every $n\ge1$ and $z\in\Omega$, $G_n(z)=G_1(z)^n=(\pi/z)^{n/2}$, the power being the branch $(\pi/z)^{n/2}=\exp\bigl(\tfrac n2(\log\pi-\operatorname{Log}z)\bigr)$.

In particular the factor $(1+i\tau)^{-1/2}$ is defined by this branch for every real $\tau$, since $\operatorname{Re}(1+i\tau)=1>0$. No asymptotic or distributional interpretation is asserted.

## Facts & Assumptions

**Given:** $n\ge1$; a complex parameter $z$ with $\operatorname{Re}z>0$; the functions $G_n$ of the Statement; the principal logarithm $\operatorname{Log}$.

[F1] For $n\ge1$, $t>0$ and $\xi\in\mathbb R^n$, $\mathcal F(e^{-\pi t|x|^2})(\xi)=t^{-n/2}e^{-\pi|\xi|^2/t}$; at $\xi=0$ this reads $\int_{\mathbb R^n}e^{-\pi t|x|^2}dx=t^{-n/2}$, and substituting $s=\pi t$ gives $\int_{\mathbb R^n}e^{-s|x|^2}dx=(\pi/s)^{n/2}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F2] If $f_h\to f$ pointwise and $|f_h|\le g$ with $\int g<\infty$ uniformly in $h$, then $\int|f_h-f|\to0$ ([[thm-dominated-convergence]]).

[F3] A function is holomorphic when it is complex differentiable at every point of its domain; the derivative is the limit of difference quotients ([[def-complex-differentiability-holomorphic-and-entire]]). A complex domain is a nonempty connected open set ([[def-complex-domain]]).

[F4] The principal logarithm $\operatorname{Log}$ is holomorphic on the slit plane $S=\mathbb C\setminus(-\infty,0]$, satisfies $\exp(\operatorname{Log}z)=z$ and $\operatorname{Log}z=\log|z|+i\operatorname{Arg}z$ with $\operatorname{Arg}z\in(-\pi,\pi)$, and $\operatorname{Log}t=\ln t$ for $t>0$; complex powers are defined by $z^a=\exp(a\operatorname{Log}z)$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F5] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, they agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

[F6] Tonelli's theorem: for a product-measurable nonnegative function on a $\sigma$-finite product, the iterated and double integrals agree ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] For continuous $f$ on $\mathbb R$ the improper integral $\int_{-\infty}^{\infty}f$ is the limit of $\int_{-R}^{R}f$ when it exists ([[def-improper-integral-at-infinity]]).

## Proof

1.1 [Absolute convergence] Let $z\in\Omega$ and $\delta:=\operatorname{Re}z>0$. For every $x$, $|e^{-z|x|^2}|=e^{-\delta|x|^2}$, whose integral over $\mathbb R^n$ is finite by [F1] with $s=\delta$; hence the real and imaginary parts of $x\mapsto e^{-z|x|^2}$ are absolutely improperly integrable and $G_n(z)$ is well defined by [F7]. The same bound holds uniformly on compact subsets of $\Omega$, where $\delta$ can be taken positive uniformly. [given, F1, F7, algebra]

2.1 [Holomorphy of $G_1$] Fix $z\in\Omega$ and $0<\delta<\operatorname{Re}z$; let $|h|<\delta/2$. For the function $w\mapsto e^w$ the second-order Taylor remainder satisfies $|e^{w}-1-w|\le|w|^2e^{|w|}$ (the power series of $e^w-1-w$ has its first term $\frac{w^2}2$ and the remaining terms are bounded by $\frac{|w|^2}{2}(e^{|w|}-1)\le|w|^2e^{|w|}$). Applying this with $w=-hx^2$ gives $\bigl|e^{-zx^2}\frac{e^{-hx^2}-1+hx^2}{h}\bigr|\le|h|x^4e^{(|h|-\operatorname{Re}z)x^2}\le|h|x^4e^{-\delta x^2/2}$ for all real $x$ and all $|h|<\delta/2$, and $x\mapsto x^4e^{-\delta x^2/2}$ has finite integral; by [F2] (applied on $[-R,R]$ uniformly in $R$ and then by [F7]) the difference quotient $\bigl(G_1(z+h)-G_1(z)\bigr)/h$ tends, as $h\to0$, to $-\int_{\mathbb R}x^2e^{-zx^2}dx$. Hence $G_1$ is complex differentiable at every $z\in\Omega$, with the displayed derivative; by [F3] it is holomorphic on $\Omega$. [step 1.1, F2, F3, F7, algebra]

2.2 [The candidate branch] Put $H(z):=\sqrt\pi\,\exp\bigl(-\tfrac12\operatorname{Log}z\bigr)$ for $z$ in the slit plane $S\supseteq\Omega$. By [F4], $\operatorname{Log}$ is holomorphic on $S$ with $\operatorname{Log}'z=1/z$, and the complex exponential is entire with derivative itself, so by the chain rule for complex derivatives $H$ is holomorphic on the complex domain $S$ ([[thm-chain-rule-for-complex-derivatives]], [[thm-complex-exponential-is-entire-with-derivative-itself]]); also $H(z)^2=\pi\exp(-\operatorname{Log}z)=\pi/z$ because $\exp(\operatorname{Log}z)=z$. On the positive axis, $\operatorname{Log}t=\ln t$ [F4], so $H(t)=\sqrt\pi\,t^{-1/2}=\sqrt{\pi/t}$, which equals $G_1(t)=\int_{\mathbb R}e^{-tx^2}dx$ by [F1] with $n=1$, $s=t$. [step 1.1, F1, F3, F4, algebra]

3.1 [Agreement by the identity theorem] The right half-plane $\Omega$ is nonempty, open and convex (if $\operatorname{Re}z_1,\operatorname{Re}z_2>0$ then $\operatorname{Re}((1-\lambda)z_1+\lambda z_2)>0$ for $0\le\lambda\le1$), hence a complex domain, and it is contained in $S$, so both $G_1$ (step 2.1) and $H$ (step 2.2) are holomorphic on $\Omega$. They agree at every $t>0$ (step 2.2), and the set $(0,\infty)$ has accumulation points in $\Omega$; by [F5] applied to the complex domain $\Omega$, $G_1=H$ on $\Omega$, giving clause (b). [step 2.1, step 2.2, F3, F5, algebra]

4.1 [Factorization] For $z\in\Omega$ write $e^{-z|x|^2}=\prod_{j=1}^n e^{-zx_j^2}$; the absolute value factors as $\prod_je^{-\operatorname{Re}(z)x_j^2}$, a product of nonnegative integrable functions of the single coordinates. Tonelli's theorem [F6] applied to the nonnegative function $x\mapsto\prod_je^{-\operatorname{Re}(z)x_j^2}$ shows that the multiple integral of $|e^{-z|x|^2}|$ factorizes as the product of the one-dimensional integrals and is finite; hence $x\mapsto e^{-z|x|^2}$ is integrable on the product, and the Fubini theorem for $L^1$ functions ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]) applied to its real and imaginary parts gives $G_n(z)=\prod_{j=1}^nG_1(z)=G_1(z)^n$. By step 3.1, $G_1(z)^n=(\pi/z)^{n/2}$ in the branch notation of [F4]. This is clause (c), and $\operatorname{Re}(1+i\tau)=1>0$ shows the branch is defined at $1+i\tau$. [step 3.1, F4, F6, algebra] ∎
