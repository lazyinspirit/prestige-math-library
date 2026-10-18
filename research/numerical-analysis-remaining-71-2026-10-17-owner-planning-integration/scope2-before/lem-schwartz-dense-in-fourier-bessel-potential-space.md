---
id: lem-schwartz-dense-in-fourier-bessel-potential-space
kind: lemma
title: "Schwartz functions are dense in the Fourier Bessel-potential norm"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-weighted-fourier-space-is-hilbert-and-injective
  - lem-matern-spectral-integral-and-normalization
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-schwartz-space-and-its-seminorms
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-integration-by-parts
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 23–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
---

## Statement

Assume the Axiom of Choice inherited from the declared $L^2$ dependency. For every $s>d/2$, every Schwartz function $f$ belongs to $H^s(\mathbb R^d)$, and the inverse Fourier transforms of $C_c^\infty(\mathbb R^d)$ are Schwartz functions and are dense in $H^s(\mathbb R^d)$ of [[def-bessel-potential-space-and-restriction-quotient]]. The Fourier transform uses the negative-sign $2\pi$ convention.

## Facts & Assumptions

**Given:** The Axiom of Choice, $s>d/2$, and $g\in L^2_s(\mathbb R^d)$.

[F1] $H^s$ is defined by the weighted Fourier norm and inverse Fourier representative. ([[def-bessel-potential-space-and-restriction-quotient]])

[F2] Smooth compactly supported functions are dense in $L^2(O)$ for every open $O\subset\mathbb R^d$. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

[F3] Truncating an integrable nonnegative function to increasing balls makes the integrals increase to its full integral. ([[thm-monotone-convergence-for-the-integral]])

[F4] The inverse Fourier map is injective and the weighted representation is a Hilbert space under the declared choice assumption. ([[lem-matern-weighted-fourier-space-is-hilbert-and-injective]])

[F5] A Schwartz function and all its derivatives decay faster than every polynomial, with seminorms $\sup_x|x^\beta D^\alpha f(x)|$ finite. ([[def-schwartz-space-and-its-seminorms]])

[F6] The Matérn calculation gives the $d$-dimensional Gaussian Fourier transform and the complex exponential derivative; Tonelli/Fubini, polar integration, monotone convergence and dominated convergence hold under their stated hypotheses. ([[lem-matern-spectral-integral-and-normalization]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]])

[F7] Integration by parts applies on finite intervals to continuously differentiable factors; the Schwartz decay makes boundary terms vanish when the interval endpoints tend to infinity. ([[thm-integration-by-parts]], [[def-schwartz-space-and-its-seminorms]])

[A1] Full AC is included only to match the inherited $L^2$ Hilbert-space dependency; the truncation, smoothing and Gaussian inversion arguments are otherwise choice-free. ([[def-axiom-of-choice]], [[def-countable-choice]])



**Proof technique:** direct.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses above and the Fourier convention in [F1].

1.1 Put $g_R=g\mathbf1_{B(0,R)}$. By [F3], $$\|g-g_R\|_{L^2_s}^2=\int_{|\xi|>R}(1+|\xi|^2)^s|g(\xi)|^2d\xi\longrightarrow0\qquad(R\to\infty).$$ Choose $R$ so this norm is less than a prescribed $\varepsilon/2$. [F1, F3, choose]

1.2 Let $f$ be any Schwartz function and define $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$. Integration by parts on finite boxes, with boundary terms tending to zero by [F5], shows that every $\xi^\gamma D_\xi^\alpha\widehat f(\xi)$ is a finite linear combination of Fourier transforms of derivatives of polynomial multiples of $f$. Each such function is in $L^1$ by [F5], so its Fourier transform is bounded; hence $\widehat f$ is Schwartz and in $L^1$. In particular $\int(1+|\xi|^2)^s|\widehat f(\xi)|^2d\xi<\infty$, by polar integration [F6]. [F5, F6, F7, algebra]

2.1 On the bounded ball $O=B(0,R+1)$, the weight $(1+|\xi|^2)^s$ is bounded above by a finite constant $C_R$. The restriction of $g_R$ to $O$ lies in $L^2(O)$, so [F2] gives $\phi\in C_c^\infty(O)$ with $\|g_R-\phi\|_{L^2(O)}<\varepsilon/(2\sqrt{C_R})$. Extending $\phi$ by zero is still smooth and compactly supported on $\mathbb R^d$ because its support is compactly contained in $O$, and $$\|g_R-\phi\|_{L^2_s}^2\le C_R\|g_R-\phi\|_{L^2(O)}^2<\varepsilon^2/4.$$ [F1, F2, step 1.1, construct]

2.2 For $\epsilon>0$, absolute Fubini [F6] and the Gaussian transform [F6] give $$\int\widehat f(\xi)e^{2\pi ix\cdot\xi}e^{-\pi\epsilon|\xi|^2}d\xi=\int f(y)\epsilon^{-d/2}e^{-\pi|x-y|^2/\epsilon}dy=(f*G_\epsilon)(x),$$ where $G_\epsilon(z)=\epsilon^{-d/2}e^{-\pi|z|^2/\epsilon}$. Since $\widehat f\in L^1$, dominated convergence sends the left side to $\int\widehat f(\xi)e^{2\pi ix\cdot\xi}d\xi$. The right side tends to $f(x)$: given $\varepsilon>0$, continuity at $x$ gives $\delta>0$ such that $|f(x-z)-f(x)|<\varepsilon$ for $|z|<\delta$. Since $G_\epsilon$ has total mass one, the contribution from this ball is at most $\varepsilon$; boundedness of $f$ and the Gaussian tail estimate from scaling make the contribution on $|z|\ge\delta$ tend to zero. Thus Fourier inversion holds and $f=U_{\widehat f}\in H^s$. [F1, F6, step 1.2, algebra]

3.1 For any multi-indices $\alpha,\beta$, differentiation under the integral and integration by parts, with no boundary terms because $(2\pi i\xi)^\alpha\phi(\xi)$ has compact support, give $$x^\beta D_x^\alpha U_\phi(x)=(-1)^{|\beta|}(2\pi i)^{-|\beta|}\int \partial_\xi^\beta\big((2\pi i\xi)^\alpha\phi(\xi)\big)e^{2\pi ix\cdot\xi}d\xi.$$ The right side is uniformly bounded by the $L^1$ norm of a smooth compactly supported function. Hence every Schwartz seminorm of $U_\phi$ is finite, so $U_\phi$ is Schwartz. [F1, F6, F7, step 2.1, algebra]

4.1 Steps 1.1 and 2.1 show that $C_c^\infty$ frequency functions are dense in the weighted Fourier norm. Step 3.1 shows their inverse transforms are Schwartz. Steps 1.2 and 2.2 show every Schwartz function belongs to $H^s$, and [F4] identifies the normed Fourier images injectively with the functions in $H^s$. Thus Schwartz functions are dense in $H^s(\mathbb R^d)$. [F1, F4, A1, step 1.1, step 2.1, step 3.1, step 1.2, step 2.2] ∎
