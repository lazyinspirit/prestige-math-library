---
id: lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform
kind: lemma
title: TT-star reduces extension to convolution with the surface-measure transform
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-fourier-pairing-for-a-finite-measure-and-schwartz-data
- thm-holder-inequality-for-integrals
- def-conjugate-exponents
- def-complex-measure
- thm-fourier-transform-of-a-finite-complex-measure
- thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
- thm-complex-holder-minkowski-and-the-quotient-norm
- def-complex-l-two-inner-product
- thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
proof_strategy: direct
verification:
  precheck: pass
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

Assume Countable Choice. Let $\mu$ be a finite positive Borel measure on $\mathbb R^n$, let $E_\mu g=(g\mu)^\vee$ for $g\in L^1(\mu)\cap L^2(\mu)$, and let $E_\mu^*F$ be the restriction of $\widehat F$ to $\operatorname{supp}\mu$ for $F\in\mathcal S(\mathbb R^n)$. Then $E_\mu E_\mu^*F=F*\check\mu$ for every $F\in\mathcal S(\mathbb R^n)$, and for every $1\le p\le\infty$, $\|\widehat F\|_{L^2(\mu)}^2=\langle(\widehat F\mu)^\vee,F\rangle=\langle F*\check\mu,F\rangle\le\|F\|_{L^p}\|F*\check\mu\|_{L^{p'}}$. In particular, for a compact hypersurface $S$ with surface measure $\sigma$, a bound on $\|F*\check\sigma\|_{L^{p'}}$ bounds $\|\widehat F\|_{L^2(\sigma)}$.

The brackets here denote the absolutely convergent integral $\langle H,F\rangle=\int H\overline F\,dx$, not a claim that $H\in L^2(\mathbb R^n)$. Positivity of $\mu$ is essential to the squared-norm identity.

## Facts & Assumptions

**Given:** Countable Choice, a finite positive Borel measure $\mu$ on $\mathbb R^n$ with $\mu(\mathbb R^n)<\infty$, $F\in\mathcal S(\mathbb R^n)$, and $1\le p\le\infty$ with conjugate $p'$.

[F1] For $g\in L^1(\mu)$ the extension $E_\mu g=(g\mu)^\vee$ is the bounded uniformly continuous function $x\mapsto\int e^{2\pi ix\cdot\omega}g(\omega)\,d\mu(\omega)$, and $E_\mu^*F=\widehat F|_{\operatorname{supp}\mu}$, so that $g=E_\mu^*F$ is the restriction of the Schwartz transform; $\check\mu(x)=\widehat\mu(-x)=\int e^{2\pi ix\cdot\omega}\,d\mu(\omega)$ is bounded with $|\check\mu|\le|\mu|(\mathbb R^n)$. ([[def-fourier-restriction-and-adjoint-extension-operators]], [[thm-fourier-transform-of-a-finite-complex-measure]], [[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[F2] Fourier pairing and convolution identity: for all $F,G\in\mathcal S(\mathbb R^n)$, $\int(G\mu)^\vee\overline F\,dx=\int G\overline{\widehat F}\,d\mu$, and $(\widehat F\mu)^\vee=F*\check\mu$ holds as an identity of everywhere-defined bounded continuous functions. ([[lem-fourier-pairing-for-a-finite-measure-and-schwartz-data]], [[def-complex-measure]])

[F3] Hölder and inner products: on a measure space, $\int|fg|\,d\nu\le\|f\|_r\|g\|_{r'}$ for conjugate $r,r'$ and complex measurable $f,g$ (endpoint cases included), and the complex $L^2$ pairing is $\langle h,k\rangle=\int h\overline k$ with $|\langle h,k\rangle|\le\|h\|_2\|k\|_2$; the $L^2$ norm is $\|h\|_2^2=\langle h,h\rangle=\int|h|^2$. ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-holder-inequality-for-integrals]], [[def-complex-l-two-inner-product]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[def-conjugate-exponents]])



## Proof

**Proof technique:** direct; apply the pairing and convolution identities of the finite-measure lemma to $G=\widehat F$ and then bound the resulting pairing by Hölder.

1.1 The $TT^*$ identity. Applying the convolution identity [F2] with the given $F$ gives $(\widehat F\mu)^\vee=F*\check\mu$ as functions on $\mathbb R^n$. Since $E_\mu^*F=\widehat F|_{\operatorname{supp}\mu}$ and $E_\mu(\widehat F|_{\operatorname{supp}\mu})=(\widehat F\mu)^\vee$, this reads $E_\mu E_\mu^*F=F*\check\mu$, which is the first assertion. [F1, F2]

2.1 The squared norm identity. The $L^2(\mu)$ norm is computed by [F3]: $\|\widehat F\|_{L^2(\mu)}^2=\int|\widehat F|^2\,d\mu=\int\widehat F\overline{\widehat F}\,d\mu$. Applying the pairing identity [F2] with $G=\widehat F$ (a Schwartz function) gives $\int(\widehat F\mu)^\vee\overline F\,dx=\int\widehat F\overline{\widehat F}\,d\mu$, that is $\int(\widehat F\mu)^\vee\overline F\,dx=\|\widehat F\|_{L^2(\mu)}^2$. By step 1.1 the left side equals $\langle F*\check\mu,F\rangle$, so the first two equalities of the statement hold. [F1, F2, F3, step 1.1]

3.1 The Hölder bound. By [F3] for the $L^p$–$L^{p'}$ pairing with $h=F*\check\mu$ and $k=F$, $$\bigl|\langle F*\check\mu,F\rangle\bigr|=\Bigl|\int(F*\check\mu)\overline F\,dx\Bigr|\le\|F*\check\mu\|_{p'}\|F\|_p$$ when $F*\check\mu\in L^{p'}$; if that norm is infinite, the inequality is automatic. The pairing itself is absolutely convergent since $F\in L^1$ and $F*\check\mu$ is bounded. Combining with step 2.1, $\|\widehat F\|_{L^2(\mu)}^2=\langle F*\check\mu,F\rangle\le\|F\|_p\|F*\check\mu\|_{p'}$. [F3, step 2.1]

4.1 Specialization to a hypersurface. Let $S$ be a compact hypersurface with surface measure $\sigma$; then $\sigma$ is a finite Borel measure, $\check\sigma=\widehat\sigma(-\cdot)$ obeys $|\check\sigma|\le\sigma(S)$, and the identities of steps 1.1–3.1 hold with $\mu=\sigma$. Consequently, if there is $C<\infty$ with $\|F*\check\sigma\|_{L^{p'}}\le C\|F\|_{L^p}$ for every $F\in\mathcal S(\mathbb R^n)$, then $\|\widehat F\|_{L^2(\sigma)}^2\le C\|F\|_p^2$, that is $\|\widehat F\|_{L^2(\sigma)}\le C^{1/2}\|F\|_{L^p}$: a bound on the convolution with $\check\sigma$ bounds the restriction estimate. [F1, F2, F3, step 2.1, step 3.1]

5.1 Conclusion. Step 1.1 proves $E_\mu E_\mu^*F=F*\check\mu$; steps 2.1 and 3.1 prove the chain $\|\widehat F\|_{L^2(\mu)}^2=\langle(\widehat F\mu)^\vee,F\rangle=\langle F*\check\mu,F\rangle\le\|F\|_p\|F*\check\mu\|_{p'}$ for every $1\le p\le\infty$; step 4.1 records the hypersurface specialization. Countable Choice is inherited from the finite-measure pairing and transform suppliers. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
