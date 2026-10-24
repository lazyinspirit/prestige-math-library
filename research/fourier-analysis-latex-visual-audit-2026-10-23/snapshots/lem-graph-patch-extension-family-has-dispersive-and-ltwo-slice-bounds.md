---
id: lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds
kind: lemma
title: 'Graph-patch extension family: dispersive and L2 slice bounds'
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-localized-curved-patch-measure-transform-decay
- thm-plancherel
- cor-schwartz-convolution-and-product-transform-laws
- cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
- lem-schwartz-space-is-dense-in-l-two
- def-conjugate-exponents
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-fourier-inversion-on-schwartz-space
- thm-fourier-transform-maps-schwartz-space-continuously-to-itself
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- lem-schwartz-functions-and-all-derivatives-are-integrable
- thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
- thm-extension-of-a-bounded-map-from-a-dense-subspace
- def-complex-lp-and-euclidean-test-function-conventions
- thm-holder-inequality-for-integrals
- def-countable-choice
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-6.md"
      - "research/frontier-38-owner-30-alpha-batch-6-5a.md"
      - "research/frontier-38-owner-30-step5-hash-6-post-5a.json"
    content_sha256: "6795a9b324caf1b9e1a19b52fa1c83eac768ce26cc7fd2440de2d4b9e7c3e9a9"
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

Assume the hypotheses and notation of [[lem-localized-curved-patch-measure-transform-decay]] ($U,h,a$ with $\det D^2h\neq0$ on $\operatorname{supp}a$, and $\mu$ the localized graph measure). Put $K(x',t)=\check\mu(x',t)=\int e^{2\pi i(x'\cdot\eta+th(\eta))}a(\eta)\sqrt{1+|\nabla h(\eta)|^2}\,d\eta$ and $U(t)g(x')=\int K(x'-y',t)g(y')\,dy'$ for $g\in\mathcal S(\mathbb R^{n-1})$. Then (i) $|K(x',t)|\le C_a\langle t\rangle^{-(n-1)/2}$ and hence $\|U(t)g\|_\infty\le C_a\langle t\rangle^{-(n-1)/2}\|g\|_1$; (ii) the partial Fourier transform satisfies $\widehat{K(\cdot,t)}(\xi')=e^{2\pi ith(\xi')}a(\xi')\sqrt{1+|\nabla h(\xi')|^2}$ for $\xi'\in U$ and zero outside, so $\|U(t)g\|_2\le C_a\|g\|_2$ uniformly in $t$; (iii) for every $1\le p\le2$, $\|U(t)g\|_{p'}\le C_a\langle t\rangle^{-(n-1)(1/p-1/2)}\|g\|_p$.

## Facts & Assumptions

**Given:** Countable Choice, the data $U,h,a,\mu$ of [[lem-localized-curved-patch-measure-transform-decay]] with $\det D^2h\ne0$ on $\operatorname{supp}a$, the kernel $K(x',t)=\check\mu(x',t)$, and $g\in\mathcal S(\mathbb R^{n-1})$.

[F1] Localized decay: $|\check\mu(x)|\le C_a(1+|x|)^{-(n-1)/2}$ for all $x=(x',x_n)\in\mathbb R^n$, with $C_a$ depending on $a,h,n$. ([[lem-localized-curved-patch-measure-transform-decay]])

[F2] Convolution and Young bound: $U(t)g(x')=\int K(x'-y',t)g(y')\,dy'$ converges absolutely when $K(\cdot,t)$ is bounded and $g\in L^1$, with $\|U(t)g\|_\infty\le\|K(\cdot,t)\|_\infty\|g\|_1$; the convolution conventions are the published ones, and $\langle t\rangle:=(1+t^2)^{1/2}$ satisfies $\langle t\rangle\le1+|t|\le1+|(x',t)|$. ([[lem-localized-curved-patch-measure-transform-decay]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-holder-inequality-for-integrals]])

[F3] Fourier conventions and Plancherel: for $h_k\in L^1(\mathbb R^m)\cap L^2(\mathbb R^m)$, $\check h_k(x)=\int e^{2\pi ix\cdot\eta}h_k(\eta)\,d\eta$ is bounded uniformly continuous, and $\mathcal F_2\check h_k=h_k$ in the Plancherel $L^2$ sense; the transform is an isometry on $L^2$ and $\|H\|_2=\|\widehat H\|_2$. For $g\in\mathcal S$ the product $F_t\widehat g$ is Schwartz, where $F_t(\eta):=e^{2\pi ith(\eta)}a(\eta)\sqrt{1+|\nabla h(\eta)|^2}$, and $\check{(F_t\widehat g)}$ is its everywhere-defined inverse transform. ([[thm-plancherel]], [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]], [[cor-schwartz-convolution-and-product-transform-laws]], [[lem-schwartz-functions-and-all-derivatives-are-integrable]], [[lem-schwartz-space-is-dense-in-l-two]])

[F4] Riesz–Thorin interpolation: a finite-simple-core operator on sigma-finite spaces with bounds $A$ from $L^1$ to $L^\infty$ and $B$ from $L^2$ to $L^2$ satisfies $\|Tf\|_{p'}\le A^{2/p-1}B^{2-2/p}\|f\|_p$ for $1<p<2$, and under countable choice it extends uniquely to the full $L^p$ spaces. ([[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]], [[def-conjugate-exponents]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])



[F5] Fubini licenses the multiplier interchange, Fourier inversion and Schwartz stability apply, and the smooth density proof supplies simultaneous $L^1$ and $L^2$ approximations by truncation and mollification. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-fourier-inversion-on-schwartz-space]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]])

## Proof

**Proof technique:** direct; read the dispersive bound off the localized decay, identify the slice operator as a Fourier multiplier with a bounded compactly supported symbol, and interpolate the two bounds.

1.1 The dispersive bound. Since $K(x',t)=\check\mu(x',t)$ and $\langle t\rangle\le1+|(x',t)|$, [F1] gives $|K(x',t)|\le C_a(1+|(x',t)|)^{-(n-1)/2}\le C_a\langle t\rangle^{-(n-1)/2}$. Substituting this bound into the convolution of [F2], $$|U(t)g(x')|\le\int|K(x'-y',t)|\,|g(y')|\,dy'\le C_a\langle t\rangle^{-(n-1)/2}\|g\|_1.$$ This proves (i) together with the absolute convergence of the defining integral. [F1, F2, algebra]

2.1 The multiplier form. For $g\in\mathcal S(\mathbb R^{n-1})$ insert the definition of $K$ into the convolution and apply Fubini (the absolute double integral is $\|F_t\|_1\|g\|_1<\infty$): $$U(t)g(x')=\int\!\!\int e^{2\pi i((x'-y')\cdot\eta+th(\eta))}a(\eta)\sqrt{1+|\nabla h(\eta)|^2}\,g(y')\,d\eta\,dy'=\int e^{2\pi ix'\cdot\eta}F_t(\eta)\widehat g(\eta)\,d\eta,$$ where $F_t(\eta)=e^{2\pi ith(\eta)}a(\eta)\sqrt{1+|\nabla h(\eta)|^2}$ is supported on $\operatorname{supp}a$ and $|\nabla h|$ is bounded there. Thus $U(t)g$ is the everywhere-defined inverse transform of the Schwartz function $F_t\widehat g$, so $\widehat{U(t)g}=F_t\widehat g$; equivalently, the kernel transform identity $\widehat{K(\cdot,t)}=F_t$ holds pointwise in the Schwartz sense: $F_t$, extended by zero outside $U$, is smooth with compact support, so $K(\cdot,t)=\check F_t$ is Schwartz for each fixed $t$. By the Plancherel isometry [F3], $$\|U(t)g\|_2=\|F_t\widehat g\|_2\le\|F_t\|_\infty\|\widehat g\|_2=\|F_t\|_\infty\|g\|_2\le B_a\|g\|_2$$ with $B_a:=\|F_0\|_\infty<\infty$, uniformly in $t$ because $|e^{2\pi ith}|=1$; enlarge the constant $C_a$ from step 1.1 to be at least $B_a$. This is (ii). [F3, F5, step 1.1, algebra]

3.1 Interpolation. For a finite simple $g$ of finite-measure support, $g\in L^1\cap L^2$. Its convolution equals the Plancherel multiplier: choose smooth compactly supported approximants converging in both $L^1$ and $L^2$ (truncate the support to balls and mollify; the density proof applies in both norms). The convolution converges uniformly by the bounded kernel, while the multipliers converge in $L^2$ by Plancherel, so their limits agree almost everywhere. Thus $U(t)$ defines a compatible complex-linear operator on the finite simple core and satisfies the $L^1\to L^\infty$ bound $A(t)=C_a\langle t\rangle^{-(n-1)/2}$ by step 1.1 and the $L^2\to L^2$ bound $B=C_a$ by step 2.1. Applying the Riesz–Thorin corollary [F4] with $1<p<2$ gives $$\|U(t)g\|_{p'}\le A(t)^{2/p-1}C_a^{\,2-2/p}\|g\|_p=C_a^{\,2/p-1+2-2/p}\langle t\rangle^{-\frac{n-1}2(2/p-1)}\|g\|_p=C_a\langle t\rangle^{-(n-1)(1/p-1/2)}\|g\|_p,$$ because $2/p-1=2(1/p-1/2)$; the endpoint cases $p=1$ and $p=2$ are the bounds of steps 1.1 and 2.1. The unique compatible bounded extensions to the full $L^p$ spaces exist by [F4]. This proves (iii). [F4, F5, step 1.1, step 2.1, algebra]

4.1 Conclusion. Step 1.1 gives the kernel decay and the $L^1\to L^\infty$ slice bound, step 2.1 identifies the slice operator as the Fourier multiplier by the bounded symbol $F_t$ and gives the uniform $L^2$ bound, and step 3.1 interpolates to the full range $1\le p\le2$ with the exponent $(n-1)(1/p-1/2)$. All constants depend only on $a,h,n$ and not on $t$. [step 1.1, step 2.1, step 3.1] ∎
