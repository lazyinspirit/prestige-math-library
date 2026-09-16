---
id: ex-brownian-transition-density-and-semigroup-convolution
kind: example
title: "Brownian density and Gaussian convolution"
status: draft
origin: pipeline
deps: [def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, thm-gaussian-integral, thm-substitution, thm-monotone-convergence-for-the-integral, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and let
$p_t(x,y)=(2\pi t)^{-1/2}e^{-(y-x)^2/(2t)}$ be the Brownian transition
[[def-brownian-transition-semigroup]]. Then for all $s,t>0$ and
$x,z\in\mathbb R$,
$$\int_{\mathbb R}p_s(x,y)\,p_t(y,z)\,dy=p_{s+t}(x,z),$$
and the integral is evaluated below by completing the square, giving the
constant $\sqrt{2\pi st/(s+t)}$.

## Facts & Assumptions

**Given:** AC, $s,t>0$, $x,z\in\mathbb R$ and the kernel $p$.

[F1] $p_r(x,y)=(2\pi r)^{-1/2}e^{-(y-x)^2/(2r)}$, and the semigroup identity holds for these kernels. [[def-brownian-transition-semigroup]] [[lem-brownian-transition-semigroup-property]]

[F2] $\int_{\mathbb R}e^{-u^2}du=\sqrt\pi$, and affine substitutions on compact intervals with the continuous integrand $e^{-u^2}$ pass to the improper limit by monotone convergence. [[thm-gaussian-integral]] [[thm-substitution]] [[thm-monotone-convergence-for-the-integral]]

[F3] AC is the ambient assumption of the Brownian interface. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Put $A=\frac{1}{2s}+\frac1{2t}=\frac{s+t}{2st}$, $m=\frac{tz+sx}{s+t}$ and $C=\frac{(z-x)^2}{2(s+t)}$. Expanding squares gives $\frac{(y-x)^2}{2s}+\frac{(z-y)^2}{2t}=A(y-m)^2+C$: the coefficient of $y^2$ is $A$, the coefficient of $-2y$ is $2Am=\frac zt+\frac xs$, and subtracting the square leaves the constant $\frac{x^2}{2s}+\frac{z^2}{2t}-\frac{(z/t+x/s)^2}{4A}$, which equals $\frac{(z-x)^2}{2(s+t)}$. [F1, algebra]

2.1 Consequently $p_s(x,y)p_t(y,z)=\frac{1}{2\pi\sqrt{st}}e^{-C}e^{-A(y-m)^2}$ for every $y$, a nonnegative continuous function of $y$. [step 1.1, F1]

2.2 For $L>0$, the affine substitution $u=\sqrt A(y-m)$ on $[m-L/\sqrt A,m+L/\sqrt A]$ and [F2] give $\int_{m-L/\sqrt A}^{m+L/\sqrt A}e^{-A(y-m)^2}dy=\frac1{\sqrt A}\int_{-L}^Le^{-u^2}du$; letting $L\to\infty$ with [F2] gives $\int_{\mathbb R}e^{-A(y-m)^2}dy=\frac{\sqrt\pi}{\sqrt A}=\sqrt{\frac{2\pi st}{s+t}}$. [F2, step 1.1]

3.1 Multiplying by the constant of step 2.1, $\int_{\mathbb R}p_s(x,y)p_t(y,z)\,dy=\frac{1}{2\pi\sqrt{st}}\sqrt{\frac{2\pi st}{s+t}}e^{-C}=\frac{1}{\sqrt{2\pi(s+t)}}e^{-(z-x)^2/(2(s+t))}=p_{s+t}(x,z)$, which is the displayed identity; the semigroup identity for the operators follows from it as in the cited lemma. [F1, step 2.1, step 2.2]

4.1 The degenerate cases are excluded or harmless as stated: $s,t>0$ keeps $A$ finite and positive and all square roots real, the case $s=t$ and $x=z$ are included, and the cases $s=0$ or $t=0$ belong to the identity operator convention of the semigroup rather than to this convolution. AC is used only through [F3]. [F1, F3, given, step 3.1] ∎

## Source notes

Lawler, Section 2.6, computes the Gaussian convolution by completing the square; the example records the exact constant produced by the one-dimensional Gaussian integral.
