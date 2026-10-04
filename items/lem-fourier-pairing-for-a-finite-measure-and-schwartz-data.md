---
id: lem-fourier-pairing-for-a-finite-measure-and-schwartz-data
kind: lemma
title: Fourier pairing for a finite measure and Schwartz data
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-fourier-transform-of-a-finite-complex-measure
- def-integration-against-a-signed-or-complex-measure
- thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fourier-inversion-on-schwartz-space
- cor-schwartz-convolution-and-product-transform-laws
- lem-schwartz-functions-and-all-derivatives-are-integrable
- def-complex-measure
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-countable-choice
- thm-total-variation-of-a-complex-measure-is-finite
- thm-fourier-translation-modulation-dilation-and-reflection-laws
- def-convolution-of-two-functions-on-rn
- thm-borel-products-of-euclidean-spaces-are-euclidean-borel
- thm-composition-with-borel-functions-preserves-measurability
- cor-sine-and-cosine-are-one-lipschitz
- thm-arithmetic-and-lattice-operations-preserve-measurability
- thm-fourier-transform-maps-schwartz-space-continuously-to-itself
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: '§11.3, printed pp.73–74, equations (11.10)–(11.17): integral TT* pairing, graph slice estimates and fractional-integration argument.'
---

## Statement

Assume Countable Choice. Let $\mu$ be a finite complex Borel measure on $\mathbb R^n$ and let $F,G\in\mathcal S(\mathbb R^n)$. (i) $\int_{\mathbb R^n}(G\mu)^\vee(x)\overline{F(x)}\,dx=\int_{\mathbb R^n}G(\omega)\overline{\widehat F(\omega)}\,d\mu(\omega)$, where $(G\mu)^\vee(x)=\int e^{2\pi ix\cdot\omega}G(\omega)\,d\mu(\omega)$. (ii) Writing $\check\mu(x):=\widehat\mu(-x)=\int e^{2\pi ix\cdot\omega}\,d\mu(\omega)$, one has $(\widehat F\,\mu)^\vee=F*\check\mu$ as everywhere-defined bounded continuous functions. (iii) $|\check\mu(x)|\le|\mu|(\mathbb R^n)$ for every $x$, and $\check\mu$ is uniformly continuous.

## Facts & Assumptions

**Given:** Countable Choice, a finite complex Borel measure $\mu$ on $\mathbb R^n$ with $M:=|\mu|(\mathbb R^n)<\infty$, and Schwartz functions $F,G\in\mathcal S(\mathbb R^n)$.

[F1] Every complex measure has finite total variation: $|\nu|(X)<\infty$; in particular $M<\infty$. ([[thm-total-variation-of-a-complex-measure-is-finite]])

[F2] For a complex Borel measure $\nu$ of finite total variation, $\widehat\nu(\xi)=\int e^{-2\pi ix\cdot\xi}\,d\nu(x)$ is bounded and uniformly continuous with $\sup|\widehat\nu|\le|\nu|(\mathbb R^n)$. ([[thm-fourier-transform-of-a-finite-complex-measure]])

[F3] Fubini and Tonelli hold on sigma-finite products: Tonelli's identity for nonnegative product-measurable integrands, and the threefold equality $\int f\,d(\mu\times\nu)=\int\int f\,d\nu\,d\mu=\int\int f\,d\mu\,d\nu$ for $f\in L^1(\mu\times\nu)$. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F4] Schwartz functions and their transforms are bounded and integrable: $\mathcal F:\mathcal S\to\mathcal S$ is continuous, and $x^\alpha\partial^\beta h\in L^p$ for all $p$ with norm bounded by finitely many Schwartz seminorms; in particular $F,\widehat F,G\in L^1\cap L^\infty$. ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[lem-schwartz-functions-and-all-derivatives-are-integrable]])

[F5] Fourier transform laws for $f\in L^1(\mathbb R^n;\mathbb C)$: with $\tau_af(x)=f(x-a)$, $\widehat{\tau_af}(\xi)=e^{-2\pi ia\cdot\xi}\widehat f(\xi)$, $\widehat{f(-\cdot)}(\xi)=\widehat f(-\xi)$, and $\widehat{\overline f}(\xi)=\overline{\widehat f(-\xi)}$, all at every frequency. ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]])

[F6] Convolution: $(f*g)(x)=\int f(x-y)g(y)\,dy$ whenever $y\mapsto f(x-y)g(y)$ is measurable and integrable. ([[def-convolution-of-two-functions-on-rn]])

[F7] Measurability toolkit: $\mathcal B(\mathbb R^{2n})=\mathcal B(\mathbb R^n)\otimes\mathcal B(\mathbb R^n)$; composition of a Borel function with a Borel function is Borel; sums, products and scalar multiples of Borel functions are Borel; $\sin$ and $\cos$ are $1$-Lipschitz, and $e^{2\pi ix\cdot\omega}=\cos(2\pi x\cdot\omega)+i\sin(2\pi x\cdot\omega)$ in the Cartesian form of the exponential. ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[cor-sine-and-cosine-are-one-lipschitz]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F8] Integration against a signed or complex measure is the published $L^1(\nu)=L^1(|\nu|)$ integral and obeys $|\int f\,d\nu|\le\int|f|\,d|\nu|$. ([[def-integration-against-a-signed-or-complex-measure]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[def-complex-measure]])

## Proof

**Proof technique:** direct; the pairing identity is Fubini applied to the product $\mathbb R^n\times\mathbb R^n$ against $\lambda_n\times\mu$, the conjugation identity is the published transform law, and the convolution identity substitutes the translation law into the defining integral.

1.1 Joint measurability and absolute integrability. The characters $e^{2\pi ix\cdot\omega}$ are Borel on $\mathbb R^{2n}$ by the Cartesian form, the $1$-Lipschitz sine and cosine, and the closure rules of [F7]; the projections $(x,\omega)\mapsto x$, $(x,\omega)\mapsto\omega$ are Borel, so $G(\omega)$, $\overline{F(x)}$ and $\widehat F(\omega)$ pull back to Borel functions, and $p(x,\omega):=e^{2\pi ix\cdot\omega}G(\omega)\overline{F(x)}$, $q(z,\omega):=e^{2\pi iz\cdot\omega}F(x-z)$ for fixed $x$ are Borel by [F7]. For $p$, using $|e^{2\pi ix\cdot\omega}|=1$ and $|G|\le\|G\|_\infty$, $|F|\le\|F\|_\infty$, with $\|F\|_1<\infty$ from [F4], $$\int_{\mathbb R^n}\!\!\int_{\mathbb R^n}|p|\,d|\mu|\,dx=\|F\|_1\!\int|G|\,d|\mu|\le\|F\|_1\|G\|_\infty M<\infty,$$ and for $q$, translation invariance gives $\int\int|q|\,d|\mu|\,dz=\|F\|_1M<\infty$. Thus both kernels are integrable against $\lambda_n\times|\mu|$. Fubini against the complex measure follows first for simple functions by linearity and then by approximation in this absolute-integral norm, using [F8]; this licenses the interchange below. [F1, F3, F4, F7, F8]

1.2 The clause (iii). By definition $\check\mu(x)=\widehat\mu(-x)$, so $|\check\mu(x)|=|\widehat\mu(-x)|\le M$ for every $x$ by [F2], and $|\check\mu(x)-\check\mu(y)|=|\widehat\mu(-x)-\widehat\mu(-y)|$ tends to $0$ uniformly as $|x-y|\to0$ because $\widehat\mu$ is uniformly continuous [F2]. [F2]

2.1 The identity (i). By definition of $(G\mu)^\vee$ and step 1.1, $\int(G\mu)^\vee(x)\overline{F(x)}\,dx=\int\int p(x,\omega)\,d\mu(\omega)\,dx$, and Fubini [F3] rewrites this iterated integral as $\int\bigl[\int p(x,\omega)\,dx\bigr]d\mu(\omega)=\int G(\omega)\bigl[\int e^{2\pi ix\cdot\omega}\overline{F(x)}\,dx\bigr]d\mu(\omega)$, because $G(\omega)$ does not depend on $x$. By the conjugation law of [F5] with $\xi=-\omega$, $\int e^{2\pi ix\cdot\omega}\overline{F(x)}\,dx=\widehat{\overline F}(-\omega)=\overline{\widehat F(\omega)}$, so the last expression is $\int G(\omega)\overline{\widehat F(\omega)}\,d\mu(\omega)$. This proves (i). [F3, F5, step 1.1]

2.2 The convolution identity (ii). Fix $x\in\mathbb R^n$ and put $F_x:=F(-\cdot)$, so that $\tau_xF_x(z)=F_x(z-x)=F(x-z)$. By the translation and reflection laws of [F5], for every $\omega$, $$\int F(x-z)e^{2\pi iz\cdot\omega}\,dz=\widehat{\tau_xF_x}(-\omega)=e^{-2\pi ix\cdot(-\omega)}\widehat{F_x}(-\omega)=e^{2\pi ix\cdot\omega}\widehat F(\omega).$$ Substituting this into the definition of $(\widehat F\mu)^\vee$ and applying Fubini [F3], which is licensed by step 1.1, gives $$(\widehat F\mu)^\vee(x)=\int e^{2\pi ix\cdot\omega}\widehat F(\omega)\,d\mu(\omega)=\int\int q(z,\omega)\,dz\,d\mu(\omega)=\int F(x-z)\Bigl[\int e^{2\pi iz\cdot\omega}\,d\mu(\omega)\Bigr]dz.$$ The inner integral is $\check\mu(z)$ by its defining formula, so the last expression is $\int F(x-z)\check\mu(z)\,dz=(F*\check\mu)(x)$ by [F6]; this holds for every $x$. [F3, F5, F6, step 1.1]

3.1 Bounded continuity. By [F2], $|\check\mu(z)|\le M$ for every $z$, so $|F*\check\mu(x)|\le\|F\|_1M<\infty$; for the other side, $|(\widehat F\mu)^\vee(x)|=\bigl|\int e^{2\pi ix\cdot\omega}\widehat F(\omega)\,d\mu(\omega)\bigr|\le\int|\widehat F|\,d|\mu|\le\|\widehat F\|_\infty M\le\|F\|_1M<\infty$ by the modulus bound of [F8] and [F4], and the equality of step 2.2 therefore holds between two bounded functions. For continuity of $F*\check\mu$, let $\omega_{\check\mu}$ be the modulus of uniform continuity of [F2]: for all $x,x'$, $$|F*\check\mu(x)-F*\check\mu(x')|\le\int|F(z)|\,|\check\mu(x-z)-\check\mu(x'-z)|\,dz\le\|F\|_1\,\omega_{\check\mu}(|x-x'|)\longrightarrow0$$ as $x'\to x$; hence $F*\check\mu$ is continuous, and by step 2.2 so is $(\widehat F\mu)^\vee$. Thus the identity of (ii) holds as everywhere-defined bounded continuous functions. [F2, F4, F8, step 2.2]

4.1 Conclusion. Step 2.1 proves (i); steps 2.2 and 3.1 prove (ii) as an identity of everywhere-defined bounded continuous functions; step 1.2 proves (iii). Countable Choice is spent only through the sigma-finite Fubini/Tonelli interfaces and the transform law of the cited suppliers, whose own hypotheses carry it. [step 2.1, step 2.2, step 3.1, step 1.2] ∎
