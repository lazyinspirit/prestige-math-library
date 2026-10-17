---
id: lem-gaussian-smoothing-of-finite-complex-measures
kind: lemma
title: Gaussian smoothing of finite measures
deps: ["thm-fourier-transform-of-a-finite-complex-measure", "lem-gaussian-fourier-summability-kernel-is-an-approximate-identity", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation", "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities", "def-complex-lp-and-euclidean-test-function-conventions", "thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value", "def-axiom-of-choice", "lem-complex-translation-and-approximate-identity-interfaces", "thm-fourier-translation-modulation-dilation-and-reflection-laws"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 14.10, p.387; explicit smoothing argument
---

## Statement

Assume AC. Let $\mu$ be a finite complex Borel measure of finite variation on $\mathbb R^n$, $n\ge1$. For $t>0$ define $h_t(x)=\int k_t(x-y)\,d\mu(y)$ using the Gaussian kernel. Then $h_t\in L^1$, $\|h_t\|_1\le|\mu|(\mathbb R^n)$, and $\widehat h_t=\widehat k_t\,\widehat\mu$. For every complex $\varphi\in C_c(\mathbb R^n)$,
$$\int\varphi(x)h_t(x)\,dx\longrightarrow\int\varphi\,d\mu.$$

## Facts & Assumptions

**Given:** The stated data, [[def-axiom-of-choice]], the complex test convention [[def-complex-lp-and-euclidean-test-function-conventions]], and the measure transform [[thm-fourier-transform-of-a-finite-complex-measure]].

[F1] Under AC a finite complex measure absolutely continuous with respect to a sigma-finite positive measure has an integrable density ([[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]]).

[F2] The variation of a measure with density u has density $|u|$ ([[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]]).

[F3] Complex integration obeys the variation bound ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]).

[F4] Tonelli and complex Fubini apply on sigma-finite positive product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Gaussian kernels have mass and norm one and the stated Gaussian transform ([[lem-gaussian-fourier-summability-kernel-is-an-approximate-identity]]).

[F6] Gaussian approximate identities converge uniformly on complex $C_0$ ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F7] Translation has transform multiplier $e^{-2\pi iy\cdot\xi}$ ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

## Proof

1.1 Put $v=|\mu|$. The inequality $|\mu(E)|\le v(E)$ gives $\mu\ll v$; v is finite, hence sigma-finite. F1 gives $\mu=u v$ with $u\in L^1(v)$, and F2 gives $v(E)=\int_E|u|\,dv$, in particular $\int|u|\,dv=v(\mathbb R^n)$. For any bounded measurable H, $\int H\,d\mu=\int Hu\,dv$: first verify this for simple H using the density formula on sets, then approximate bounded H uniformly by quantizing its real and imaginary values. F3 bounds the error on the left by $v(\mathbb R^n)\|H-H_m\|_\infty$, and the right error by $\|u\|_1\|H-H_m\|_\infty$. AC enters F1 through the signed RN/Hahn/Jordan existence selections; it also covers the existence assumption omitted in the older F2 proof. [F1, F2, F3, given]

2.1 Consequently $h_t(x)=\int k_t(x-y)u(y)\,dv(y)$, absolutely at every x because k_t is bounded and u integrable. The joint function is Borel measurable. By F4, F5 and translation invariance, its double absolute integral is $\int|u(y)|[\int k_t(x-y)\,dx]dv(y)=v(\mathbb R^n)$. Fubini therefore supplies a measurable integrable h_t and its stated norm bound. With the additional modulus-one Fourier factor the same double bound applies. F4 and F7 give $\widehat h_t(\xi)=\widehat k_t(\xi)\int e^{-2\pi iy\cdot\xi}u(y)\,dv(y)=\widehat k_t(\xi)\widehat\mu(\xi)$ by step 1.1. [F4, F5, F7, step 1.1]

3.1 For a compactly supported continuous $\varphi$, the double absolute integral after multiplication by $\varphi(x)$ is at most $\|\varphi\|_\infty v(\mathbb R^n)$. F4 exchanges the integrals. Since k_t is even, the inner test integral is $(k_t*\varphi)(y)$, and F6 gives uniform convergence to $\varphi(y)$. Thus the difference from $\int\varphi u\,dv$ has modulus at most $\|k_t*\varphi-\varphi\|_\infty\|u\|_{L^1(v)}\to0$. Step 1.1 identifies the limit with $\int\varphi\,d\mu$. [F4, F5, F6, step 1.1, step 2.1] ∎
