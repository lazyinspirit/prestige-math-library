---
id: thm-sine-biholomorphism-from-upper-half-strip
kind: theorem
title: "The sine map biholomorphically sends an upper half-strip onto the upper half-plane"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-principal-exponential-biholomorphism-from-principal-strip, thm-joukowski-biholomorphism-outside-unit-disc, def-complex-trigonometric-and-hyperbolic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let

$$S:=\{\,z\in\mathbb C:-\pi/2<\operatorname{Re}z<\pi/2,\ \operatorname{Im}z>0\,\}.$$

Then the sine map

$$\sin:S\to\mathbb H$$

is a biholomorphism onto the upper half-plane
$\mathbb H=\{w\in\mathbb C:\operatorname{Im}w>0\}$.

## Facts & Assumptions

**Given:** The upper half-strip $S$ above.

[F1] The exponential is a biholomorphism from the principal strip
$P=\{u\in\mathbb C:-\pi<\operatorname{Im}u<\pi\}$ onto the slit plane
$\mathbb C\setminus\{x\in\mathbb R:x\le0\}$, with inverse the principal
logarithm ([[thm-principal-exponential-biholomorphism-from-principal-strip]]).

[F2] The Joukowski map $J(\eta)=\frac12(\eta+\eta^{-1})$ is a biholomorphism
from $\{|\eta|>1\}$ onto $\mathbb C\setminus[-1,1]$
([[thm-joukowski-biholomorphism-outside-unit-disc]]).

[F3] Complex sine is defined by
$$\sin z=\frac{\exp(iz)-\exp(-iz)}{2i}$$
([[def-complex-trigonometric-and-hyperbolic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z\in S$ and put $q:=\exp(iz)$. Since $iz$ has real part $-\operatorname{Im}z<0$ and imaginary part $\operatorname{Re}z\in(-\pi/2,\pi/2)\subset(-\pi,\pi)$, [F1] gives $q$ in the slit plane with $|q|<1$ and $\operatorname{Re}q>0$. Define $\eta:=-i/q$; then $|\eta|>1$ and $\operatorname{Im}\eta=-\operatorname{Re}q/|q|^2<0$. [F1, given, construct, algebra]

2.1 By [F3], $\sin z=(q-q^{-1})/(2i)=-(\eta+\eta^{-1})/2=-J(\eta)$. For $\eta=u+iv$ with $|\eta|>1$, one has $\operatorname{Im}J(\eta)=\frac12\left(v-\frac{v}{u^2+v^2}\right)=\frac v2\left(1-\frac1{|\eta|^2}\right)$, so step 1.1 gives $\operatorname{Im}J(\eta)<0$ and therefore $\operatorname{Im}\sin z>0$. Hence $\sin[S]\subseteq\mathbb H$. [F2, F3, step 1.1, algebra]

3.1 Conversely, let $w\in\mathbb H$. Since $-w\in\mathbb C\setminus[-1,1]$, [F2] supplies a unique $\eta\in\{|\eta|>1\}$ with $J(\eta)=-w$. The imaginary-part formula from step 2.1 shows $\operatorname{Im}\eta$ has the same sign as $\operatorname{Im}J(\eta)=-\operatorname{Im}w<0$, so $\operatorname{Im}\eta<0$. Put $q:=-i/\eta$; then $|q|<1$ and $\operatorname{Re}q=-\operatorname{Im}\eta/|\eta|^2>0$, so $q$ lies in the right half-disc. By [F1], $u:=\operatorname{Log}q$ belongs to the principal strip, with $\operatorname{Re}u=\log|q|<0$ and $\operatorname{Im}u\in(-\pi/2,\pi/2)$. Therefore $z:=-iu$ lies in $S$. [F1, F2, step 2.1, given, construct, algebra]

4.1 For the point $z$ of step 3.1, [F1] gives $\exp(iz)=q$, so the identity of step 2.1 yields $\sin z=-J(-i/q)=-J(\eta)=w$. Thus $\sin:S\to\mathbb H$ is surjective. [F1, F2, F3, step 3.1, algebra]

5.1 If $z_1,z_2\in S$ and $\sin z_1=\sin z_2$, step 2.1 gives $J(\eta_1)=J(\eta_2)$ for $\eta_j:=-i\exp(-iz_j)$. By [F2], $\eta_1=\eta_2$, so $\exp(iz_1)=\exp(iz_2)$. Because each $iz_j$ lies in the principal strip, [F1] makes the exponential injective there, and hence $z_1=z_2$. Therefore $\sin$ is bijective. Its inverse is the holomorphic composition $w\mapsto -i\operatorname{Log}(-i/K(-w))$, where $K$ is the holomorphic inverse supplied by [F2]. Thus $\sin:S\to\mathbb H$ is a biholomorphism. [F1, F2, F3, step 3.1, step 4.1] ∎
