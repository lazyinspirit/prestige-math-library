---
id: lem-positive-fourier-majorant-bump
kind: lemma
title: "Nonnegative Compact Fourier Majorant Bump"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-countable-choice, lem-smooth-unit-mass-compact-bump-on-euclidean-space, thm-fourier-transform-converts-convolution-to-products]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited from the smooth-bump and L1-convolution suppliers; no stronger choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "MIT 18.102, Chapter 4, §9 Convolution, Lemma 58"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
      locator: "Smooth compactly supported bump construction"
    - title: "Semyon Dyatlov, MIT 18.155 (2022)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Proposition 11.10, pp. 122–123, Fourier transform of convolution"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. There is a real-valued nonnegative function $\phi:\mathbb R^5\to\mathbb R$ that is infinitely differentiable and compactly supported such that, with the Fourier convention $\widehat\phi(\xi)=\int_{\mathbb R^5}\phi(x)e^{-2\pi i x\cdot\xi}\,dx$, one has $\widehat\phi(\xi)\ge0$ for every $\xi\in\mathbb R^5$, $\widehat\phi(\xi)\ge1$ for every $\xi\in[-1,1]^5$, and for each $E>0$ there is $C_E<\infty$ such that $\phi(x)\le C_E(1+|x|)^{-E}$ for every $x\in\mathbb R^5$.

## Statement references

[MIT 18.102, Chapter 4, §9 Convolution](https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf)

[Dyatlov, MIT 18.155, Proposition 11.10](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the Fourier transform convention in the Statement.

[A1] [[def-countable-choice]]: Countable Choice states that every countable family of nonempty sets has a choice function.

[F1] [[lem-smooth-unit-mass-compact-bump-on-euclidean-space]]: Assuming Countable Choice, there is a nonnegative smooth compactly supported function on $\mathbb R^5$ with integral $1$.

[F2] [[thm-fourier-transform-converts-convolution-to-products]]: Assuming Countable Choice, if $f,g\in L^1(\mathbb R^5)$ then $\widehat{f*g}(\xi)=\widehat f(\xi)\widehat g(\xi)$ for every $\xi\in\mathbb R^5$.

## Proof

1.1 Apply [F1] and let $\rho\ge0$ be the resulting smooth compactly supported unit-mass function. Set $h(x)=\rho(x)+\rho(-x)$. Then $h$ is real, even, nonnegative and smooth with compact support, and $\int h=2$. The number $M=\int |x|h(x)\,dx$ is finite. It is positive because a continuous nonnegative function with positive integral is positive on an open set containing points other than the origin. [A1, F1, given, construct]

2.1 Put $g=h*h$. Differentiating under the integral, justified by the compact supports and bounded derivatives of $h$, shows that $g\in C_c^\infty(\mathbb R^5)$; its integral formula shows $g\ge0$. Since $h$ is real and even, $\widehat h$ is real and even. By [F2], $\widehat g=\widehat h^2=|\widehat h|^2\ge0$, and $\widehat h(0)=\int h=2$. [A1, F2, step 1.1, algebra]

3.1 The elementary inequality $|e^{it}-1|\le |t|$ gives $|\widehat h(\xi)-2|\le2\pi M|\xi|$. Thus $|\widehat h(\xi)|\ge3/2$ whenever $|\xi|\le(4\pi M)^{-1}$. Choose $a\ge4\pi\sqrt5 M$ and define $\phi(x)=a^5g(ax)$. Change of variables gives $\widehat\phi(\xi)=\widehat g(\xi/a)$. For $\xi\in[-1,1]^5$, $|\xi/a|\le(4\pi M)^{-1}$, so $\widehat\phi(\xi)\ge9/4\ge1$; step 2.1 gives nonnegativity of $\widehat\phi$ everywhere. [step 2.1, algebra]

4.1 The dilation preserves nonnegativity, smoothness, and compact support. For any $E>0$, the function $x\mapsto\phi(x)(1+|x|)^E$ is bounded on the compact support of $\phi$ and vanishes outside it. Its supremum is a valid $C_E$, proving the required decay bound. [step 3.1, algebra] ∎
