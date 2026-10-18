---
id: lem-matern-weighted-fourier-space-is-hilbert-and-injective
kind: lemma
title: "The weighted Fourier model is an injective Hilbert representation"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-spectral-integral-and-normalization
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-gaussian-integral
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 19–25"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter
        4, equations (4.5)–(4.6)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice as a conservative cover of the published $L^2$ completeness dependency, which declares it in its transitive dependencies although its statement requires only Countable Choice. For every $s>d/2$, each $g\in L^2_s(\mathbb R^d)$ lies in $L^1(\mathbb R^d)$, its inverse Fourier representative $U_g$ is bounded and continuous, the map $g\mapsto U_g$ is injective, and the whole-space Fourier Bessel-potential space of [[def-bessel-potential-space-and-restriction-quotient]] is a complex Hilbert space. In particular, for a constant $C_{d,s}<\infty$,
$$|U_g(x)|\le C_{d,s}\|g\|_{L^2_s}\qquad(x\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $d\ge1$, a real $s>d/2$, and $g\in L^2_s(\mathbb R^d)$.

[F1] The weighted Fourier norm is $\|g\|_{L^2_s}^2=\int(1+|\xi|^2)^s|g(\xi)|^2d\xi$, and $U_g(x)=\int g(\xi)e^{2\pi ix\cdot\xi}d\xi$. ([[def-bessel-potential-space-and-restriction-quotient]])

[F2] Cauchy--Schwarz holds in $L^2(\lambda_d)$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F3] The integral $\int_{\mathbb R^d}(1+|\xi|^2)^{-s}d\xi$ is finite when $s>d/2$, by polar coordinates. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F4] The Matérn calculation supplies the $d$-dimensional Gaussian Fourier transform and its normalized Gaussian $G_\epsilon(y)=\epsilon^{-d/2}e^{-\pi|y|^2/\epsilon}$ of integral one. ([[lem-matern-spectral-integral-and-normalization]])

[F5] Fubini/Tonelli applies to the absolute integrals on completed product measure spaces. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F6] Translations are continuous in $L^1(\mathbb R^d)$. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F7] Increasing nonnegative integrals converge to the integral of their pointwise limit, and dominated convergence applies under an integrable majorant. ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]])

[F8] $L^2$ with the integral pairing is a Hilbert space under Countable Choice. Its declared transitive dependencies include the Axiom of Choice. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-countable-choice]], [[def-axiom-of-choice]])

[F9] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[A1] Full AC is carried conservatively to match the legacy transitive dependency of the published $L^2$ Hilbert-space item; the Fourier injectivity argument itself is choice-free. ([[def-axiom-of-choice]])



**Proof technique:** direct.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement and the Fourier convention in [F1].

1.1 Write $W_s(\xi)=(1+|\xi|^2)^{s/2}$. By [F2] and [F3], $$\int|g(\xi)|d\xi\le\left(\int W_s(\xi)^2|g(\xi)|^2d\xi\right)^{1/2}\left(\int W_s(\xi)^{-2}d\xi\right)^{1/2}<\infty.$$ Hence $U_g$ is bounded by $\|g\|_1$ and continuous by [F7] applied to the pointwise-continuous exponential integrand dominated by $|g|$. The same estimate gives the displayed evaluation bound with $C_{d,s}=\|W_s^{-1}\|_2$. [F1, F2, F3, F7]

1.2 The kernels $G_\epsilon$ are nonnegative and have integral one by [F4]. For each fixed $\delta>0$, scaling $y=\sqrt\epsilon z$ and [F7] show $$\int_{|y|\ge\delta}G_\epsilon(y)dy=\int_{|z|\ge\delta/\sqrt\epsilon}e^{-\pi|z|^2}dz\longrightarrow0\qquad(\epsilon\downarrow0).$$ [F4, F7, algebra]

2.1 Suppose $U_g(x)=0$ for every $x$. For $\epsilon>0$ and $\eta\in\mathbb R^d$, the double integral of $|g(\xi)|e^{-\pi\epsilon|x|^2}$ is finite by step 1.1 and [F4]. Thus [F5] and [F4] give $$0=\int U_g(x)e^{-\pi\epsilon|x|^2}e^{-2\pi ix\cdot\eta}dx=\int g(\xi)\epsilon^{-d/2}e^{-\pi|\xi-\eta|^2/\epsilon}d\xi=(g*G_\epsilon)(\eta).$$ [F4, F5, step 1.1]

2.2 Given $\tau>0$, translation continuity [F6] supplies $\delta>0$ such that $\|g(\cdot-y)-g\|_1<\tau$ when $|y|<\delta$. Tonelli and the triangle inequality then give $$\|g*G_\epsilon-g\|_1\le\int G_\epsilon(y)\|g(\cdot-y)-g\|_1dy\le\tau+2\|g\|_1\int_{|y|\ge\delta}G_\epsilon(y)dy.$$ Step 1.2 makes the last term tend to zero; as $\tau$ was arbitrary, $g*G_\epsilon\to g$ in $L^1$. [F5, F6, step 1.2, algebra]

3.1 Step 2.1 says $g*G_\epsilon=0$ for every $\epsilon$, whereas step 2.2 says these convolutions converge to $g$ in $L^1$. Hence $\|g\|_1=0$, so $\int |g|=0$ and [F9] gives $g=0$ almost everywhere. This proves injectivity. [F9, step 2.1, step 2.2]

4.1 Multiplication $g\mapsto W_sg$ is a linear isometry of the weighted $L^2_s$ space onto ordinary complex $L^2(\lambda_d)$, with inverse $h\mapsto W_s^{-1}h$. By [F8] the latter is Hilbert under the declared choice assumption. Step 3.1 makes the inverse Fourier image isometric and one-to-one, so the whole-space $H^s$ is Hilbert; step 1.1 makes its restriction quotient norm positive on nonzero functions. [F1, F8, A1, step 1.1, step 3.1, algebra] ∎
