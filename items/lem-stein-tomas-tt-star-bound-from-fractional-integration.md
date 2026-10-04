---
id: lem-stein-tomas-tt-star-bound-from-fractional-integration
kind: lemma
title: Stein-Tomas TT-star bound from fractional integration
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds
- thm-hardy-littlewood-sobolev-fractional-integration
- def-riesz-potential-of-order-alpha
- thm-minkowski-integral-inequality
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-schwartz-functions-and-all-derivatives-are-integrable
- def-conjugate-exponents
- def-countable-choice
- def-complex-lp-and-euclidean-test-function-conventions
- thm-complex-holder-minkowski-and-the-quotient-norm
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

Assume Countable Choice. Let $n\ge2$ and let $U,h,a,\mu$ be as in [[lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds]], with $\det D^2h\neq0$ on $\operatorname{supp}a$. Set $p=2(n+1)/(n+3)$, so that $p'=2(n+1)/(n-1)$ and $1/p-1/p'=2/(n+1)$. Then $\|f*\check\mu\|_{L^{p'}(\mathbb R^n)}\le C_a\|f\|_{L^p(\mathbb R^n)}$ for every $f\in\mathcal S(\mathbb R^n)$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the graph-patch data $U,h,a$ with $\det D^2h\ne0$ on $\operatorname{supp}a$, the localized measure $\mu$, its transform $\check\mu$, the exponent $p=2(n+1)/(n+3)$ and $f\in\mathcal S(\mathbb R^n)$; write $f_s(x'):=f(x',s)$ for the slice at height $s$.

[F1] Slice family: with $K(x',t)=\check\mu(x',t)$ and $U(t)g(x')=\int K(x'-y',t)g(y')\,dy'$, one has for $1\le p\le2$ the bound $\|U(t)g\|_{L^{p'}(\mathbb R^{n-1})}\le C_a\langle t\rangle^{-(n-1)(1/p-1/2)}\|g\|_{L^p(\mathbb R^{n-1})}$, uniformly in $t$, and $\langle z\rangle^{-(1-\alpha)}\le|z|^{-(1-\alpha)}$ for $z\ne0$ for the order $\alpha:=2/(n+1)$. ([[lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds]], [[def-conjugate-exponents]])

[F2] Minkowski's integral inequality and Tonelli: for measurable $F$ with $\int_Y\|F(\cdot,y)\|_{L^r(X)}\,d\nu(y)<\infty$ one has $\|\int_Y|F(\cdot,y)|\,d\nu\|_{L^r(X)}\le\int_Y\|F(\cdot,y)\|_{L^r(X)}d\nu(y)$ for $1\le r<\infty$; iterated integrals over sigma-finite products agree for nonnegative integrands. ([[thm-minkowski-integral-inequality]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F3] Hardy–Littlewood–Sobolev in one dimension: for $0<\alpha<1$ and $1<p<1/\alpha$ with $1/p'=1/p-\alpha$, the unit-normalized Riesz potential $I_\alpha g(t)=\int|t-s|^{\alpha-1}g(s)\,ds$ satisfies $\|I_\alpha g\|_{L^{p'}(\mathbb R)}\le C_{\alpha,p}\|g\|_{L^p(\mathbb R)}$ for $g\in L^p(\mathbb R)$; the kernel convention is $K_\alpha(z)=|z|^{\alpha-1}$ for $z\ne0$ and $K_\alpha(0)=0$. ([[thm-hardy-littlewood-sobolev-fractional-integration]], [[def-riesz-potential-of-order-alpha]])

[F4] Complex $L^p$ conventions: norms on complex classes, Tonelli for nonnegative measurable functions, and the modulus estimates used to pass from complex functions to their pointwise moduli. ([[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-complex-holder-minkowski-and-the-quotient-norm]])



[F5] Fubini applies to absolutely integrable complex product kernels, and Schwartz decay gives integrability of all slices and arbitrarily rapid decay of their norms in the remaining coordinate. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-schwartz-functions-and-all-derivatives-are-integrable]])

## Proof

**Proof technique:** direct; write the full convolution as a superposition of slice operators, apply Minkowski in the space variable, and recognize the resulting one-dimensional kernel as a Riesz potential of order $2/(n+1)$.

1.1 The slice superposition. The bounded kernel and $f\in L^1$ make the full integral absolutely convergent; Fubini therefore licenses splitting the variable $y=(y',s)\in\mathbb R^{n-1}\times\mathbb R$ and writing $x=(x',t)$, the defining convolution and [F1] give, at every point, $$f*\check\mu(x',t)=\int_{\mathbb R}\Bigl(\int_{\mathbb R^{n-1}}f(x'-y',t-s)K(y',s)\,dy'\Bigr)ds=\int_{\mathbb R}U(s)f_{t-s}(x')\,ds.$$ [F1, F5, given, algebra]

2.1 Minkowski in the slice variable. Fix $t$. By [F2] applied in the space variable $x'$ with $\nu$ the Lebesgue measure in $s$, $$\Bigl\|\int_{\mathbb R}U(s)f_{t-s}\,ds\Bigr\|_{L^{p'}(\mathbb R^{n-1})}\le\int_{\mathbb R}\|U(s)f_{t-s}\|_{L^{p'}(\mathbb R^{n-1})}\,ds.$$ For Schwartz $f$, $g(\tau)=\|f_\tau\|_p$ decays faster than any prescribed power (bound $|f(x\prime,\tau)|$ by $C_N(1+|x\prime|)^{-N}(1+|\tau|)^{-N}$). Thus the slice estimate of [F1] bounds the right side by $C\int g<\infty$, licensing [F2] for every $t$; this is the Minkowski inequality for the complex-valued measurable integrand of [F4]. [F1, F2, F4, F5, step 1.1]

3.1 The slice decay. For the exponent $p=2(n+1)/(n+3)$ one has $1/p-1/2=1/(n+1)$, so [F1] gives $\|U(s)f_{t-s}\|_{L^{p'}}\le C_a\langle s\rangle^{-(n-1)/(n+1)}\|f_{t-s}\|_{L^p(\mathbb R^{n-1})}$. Substituting into step 2.1 and substituting $\tau=t-s$, $$\Bigl\|\int_{\mathbb R}U(s)f_{t-s}\,ds\Bigr\|_{L^{p'}(\mathbb R^{n-1})}\le C_a\int_{\mathbb R}\langle t-\tau\rangle^{-\beta}\,g(\tau)\,d\tau,\qquad g(\tau):=\|f_\tau\|_{L^p(\mathbb R^{n-1})},\qquad\beta:=\frac{n-1}{n+1}.$$ The function $g$ is measurable and nonnegative and, by Tonelli, $\|g\|_{L^p(\mathbb R)}^p=\int_{\mathbb R}\int_{\mathbb R^{n-1}}|f(x',\tau)|^p\,dx'\,d\tau=\|f\|_{L^p(\mathbb R^n)}^p$, so $g\in L^p(\mathbb R)$ and $\|g\|_p=\|f\|_p$. [F1, F2, F4, step 2.1, algebra]

4.1 Fractional integration. Let $\alpha:=1-\beta=2/(n+1)\in(0,1)$ and compare kernels: $\langle t-\tau\rangle^{-(1-\alpha)}\le|t-\tau|^{-(1-\alpha)}=K_\alpha(t-\tau)$ for $\tau\ne t$ by [F1]. Hence the function $h(t):=\|(f*\check\mu)(\cdot,t)\|_{L^{p'}(\mathbb R^{n-1})}$ satisfies $h(t)\le C_a2^{1-\alpha}\int_{\mathbb R}K_\alpha(t-\tau)g(\tau)\,d\tau=C_a2^{1-\alpha}I_\alpha g(t)$ for almost every $t$; the single diagonal point $\tau=t$ has zero measure and does not affect the comparison. The HLS hypotheses hold: $0<\alpha<1$ because $n\ge2$, and $1<p<1/\alpha=(n+1)/2$ because $p=2(n+1)/(n+3)$ and $n>1$. By [F3] applied in dimension one, $$\Bigl\|\int_{\mathbb R}U(s)f_{t-s}ds\Bigr\|_{L^{p'}(\mathbb R^n)}=\|h\|_{L^{p'}(\mathbb R)}\le C_a2^{1-\alpha}C_{\alpha,p}\|g\|_{L^p(\mathbb R)}=C_a'\|f\|_{L^p(\mathbb R^n)},$$ with $C_a'$ depending on $a,h,n$. [F1, F3, step 3.1, algebra]

5.1 Conclusion. Steps 1.1–4.1 show that for the endpoint exponent $p=2(n+1)/(n+3)$ the convolution $f*\check\mu$ lies in $L^{p'}(\mathbb R^n)$ with norm controlled by $\|f\|_p$, the constants depending only on $a,h,n$. The exponent identity $1/p-1/p'=2/(n+1)=1-\beta$ used above is exactly the conjugacy of $p$ and $p'$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
