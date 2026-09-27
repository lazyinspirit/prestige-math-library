---
id: lem-complex-translation-and-approximate-identity-interfaces
kind: lemma
title: "Complex translation, convolution, approximate identities, and mollification"
status: published
origin: pipeline
landmark: false
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, lem-complex-lp-completeness-density-and-inner-product, def-translation-of-a-function-on-rn, def-l-one-approximate-identity-on-rn, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-young-convolution-inequality, thm-minkowski-integral-inequality, thm-l-one-approximate-identities-converge-in-l-p, thm-integral-triangle-inequality, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-countable-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-dominated-convergence, thm-completion-measurable-functions-have-base-measurable-representatives, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-heine-borel-rn, thm-heine-cantor-metric, thm-extreme-value-metric, thm-lebesgue-measure-of-a-box-of-every-kind]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Use real norm and measurability suppliers, then estimate the complex error by an absolute integral envelope."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (2017)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Lemma 14.6 p.81 (proof refers to Lemma 1.4 p.11); Theorem 15.7 p.92 (proof refers to Theorem 2.6 p.21). Mollifier backing: Teschl \u00a710.4, Lemmas 10.18\u201310.19."
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Lemma 10.18(ii)\u2013(iv), pp.295\u2013296; Lemma 10.19, pp.297\u2013298. Absolute tails follow Laugesen Definition 15.1, SR3."
---

## Statement

Assume countable choice, let $n\ge1$, and use Lebesgue measure on $\mathbb R^n$. Translation $\tau_hf(x)=f(x-h)$ is an isometry of complex $L^p$ for $1\le p\le\infty$ and depends norm-continuously on $h$ for $p<\infty$.

For complex $K\in L^1$ and $f\in L^p$, the convolution
$$(K*f)(x)=\int K(y)f(x-y)\,dy$$
exists absolutely a.e., defines a measurable class independent of representatives, and satisfies $\|K*f\|_p\le\|K\|_1\|f\|_p$.

If $K_\varepsilon\in L^1(\mathbb R^n;\mathbb C)$ satisfy
$$\int K_\varepsilon=1,\qquad M:=\sup_{\varepsilon>0}\|K_\varepsilon\|_1<\infty,\qquad \int_{|y|\ge\delta}|K_\varepsilon(y)|\,dy\longrightarrow0\quad(\delta>0),$$
then $K_\varepsilon*f\to f$ in $L^p$ for $p<\infty$, and uniformly for $f\in C_0(\mathbb R^n;\mathbb C)$. For fixed $K\in L^1$, $K*f\in C_0$ when $f\in C_0$. These assertions allow complex and sign-changing kernels. In particular $K_\varepsilon(x)=\varepsilon^{-n}K(x/\varepsilon)$ is such an approximate identity whenever $K\in L^1$ and $\int K=1$.

If $\rho\in C_c^\infty(\mathbb R^n;\mathbb R)$ has mass one, $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$, and $f$ is complex locally integrable, then $\rho_\varepsilon*f$ is smooth and
$$\partial^\alpha(\rho_\varepsilon*f)=(\partial^\alpha\rho_\varepsilon)*f.$$
A compactly supported input gives a compactly supported output. No general $L^\infty$ translation-continuity or approximate-identity convergence is asserted.

## Facts & Assumptions

**Given:** Countable choice, Euclidean dimension $n\ge1$, and the kernels and inputs in the statement; limits of kernels are as $\varepsilon\downarrow0$.

[F1] Measurability, local integrability and smoothness have their componentwise meanings ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] Complex norms have component bounds, Hölder and the triangle inequality ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F3] Under countable choice real translations are norm-continuous for finite p ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

[F4] Real Young applies in particular to $L^1$ times Lp and yields an a.e.-defined Lp convolution ([[thm-young-convolution-inequality]]).

[F5] On sigma-finite spaces and for finite p, the norm of a nonnegative integral envelope is bounded by the integral of the section norms ([[thm-minkowski-integral-inequality]]).

[F6] Under countable choice a completion-measurable real function has a base-measurable a.e.-equal representative ([[thm-completion-measurable-functions-have-base-measurable-representatives]]).

[F7] Borel representatives give jointly Borel convolution integrands ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[F8] Translation preserves Lebesgue measurability and measure ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F9] Under countable choice dilation by c scales measure by the factor |c|^n; reflection preserves measure ([[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F10] A.e.-equal integrable functions have equal integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F11] An integrable majorant permits passing a.e. limits through integrals ([[thm-dominated-convergence]]).

[F12] A real smooth compactly supported mollifier differentiates by differentiating the kernel on locally integrable inputs ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F13] For Borel $L^1$ inputs, the convolution support lies in the closure of their support sum ([[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]).

[F14] Countable choice selects one element from each member of a natural-number-indexed family of nonempty sets ([[def-countable-choice]]).

[F15] Complex integrals are linear ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F16] The modulus of a complex integral is bounded by the integral of the modulus ([[thm-integral-triangle-inequality]]).

[F17] Closed bounded Euclidean sets are compact and compact sets are bounded ([[thm-heine-borel-rn]]).

[F18] Continuous functions on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]]).

[F19] A continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[F20] Under countable choice Euclidean boxes have their volume as Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** Use real norm and measurability suppliers, then estimate the complex error by an absolute integral envelope.

1.1 Write $f=u+iv$. Translation invariance F8 gives $\int|f(x-h)|^p\,dx=\int|f(x)|^p\,dx$ for finite $p$: first substitute translated level sets for a nonnegative simple function, then take the supremum defining its nonnegative integral. For infinity the sets $\{|f(\cdot-h)|>a\}$ have the same measure as $\{|f|>a\}$, so the essential bounds coincide. Null disagreement sets also translate to null sets, so translations act on classes. For finite $p$, F3 and F2 give $\|\tau_hf-f\|_p\le\|\tau_hu-u\|_p+\|\tau_hv-v\|_p\to0$. The isometry gives continuity at every $h_0$ from $\|\tau_hf-\tau_{h_0}f\|_p=\|\tau_{h-h_0}f-f\|_p$. [F1, F2, F3, F8]

1.2 Under the given countable-choice hypothesis F14, F6 applied to each component supplies Borel representatives of $K,f$; any infinite component values in the base representative occur on a Borel null set and can be set to zero there. F7 makes $(x,y)\mapsto K(y)f(x-y)$ Borel. Apply F4 to the nonnegative real inputs $|K|\in L^1$ and $|f|\in L^p$: the envelope $A(x)=\int|K(y)||f(x-y)|\,dy$ is finite a.e. and $\|A\|_p\le\|K\|_1\|f\|_p$. On this set the complex integral exists absolutely and its modulus is at most $A$ by F16. For measurability, expand $K=a+ib$, $f=u+iv$ and write $K*f=(a*u-b*v)+i(a*v+b*u)$ wherever all integrals converge. Each real convolution is an Lp measurable function by F4 since $a,b\in L^1$ and $u,v\in L^p$ by F2. Define the output to be zero on the measurable exceptional set. F2 and monotonicity now give the claimed sharp norm bound, including $p=\infty$. [F2, F4, F6, F7, F14, F16, given]

1.3 A complex $f\in C_0$ is bounded: its components are bounded on a sufficiently large closed ball by F17 and F19 and are small outside by definition. It is uniformly continuous: for a given $\eta>0$, take $R$ with $|f(x)|<\eta/2$ for $|x|>R$ and use F18 on the closed ball of radius $R+2$ to choose $0<\delta<1$ making differences below $\eta$ there. If $|x-z|<\delta$, either both points are in that ball or both have radius greater than $R$, in which case their values differ by less than $\eta$. This proves uniform continuity. Hence $K*f$ exists everywhere and $|(K*f)(x+z)-(K*f)(x)|\le\|K\|_1\sup_w|f(w+z)-f(w)|\to0$. As $|x|\to\infty$, $f(x-y)\to0$ for fixed $y$, dominated by the integrable function $\|f\|_\infty|K(y)|$; F11 gives $(K*f)(x)\to0$. Thus $K*f\in C_0$. [F1, F11, F16, F17, F18, F19]

1.4 For a fixed $K\in L^1$ of integral one, substitution $y=x/\varepsilon$ using F9 gives $\int K_\varepsilon=\int K=1$, $\|K_\varepsilon\|_1=\|K\|_1$, and $\int_{|x|\ge\delta}|K_\varepsilon(x)|\,dx=\int_{|y|\ge\delta/\varepsilon}|K(y)|\,dy\to0$ by F11, dominated by $|K|$. Thus scaled integrable mass-one kernels satisfy all three conditions, whether or not they are nonnegative. [F9, F11, given]

1.5 For locally integrable $f=u+iv$, F1 gives locally integrable real components. Apply F12 to each with the real kernel $\rho_\varepsilon$. By F15 their recombination gives all ordered partial derivatives, equal to the integrals with the corresponding kernel derivatives. To check their continuity explicitly, fix $x_0$ and a closed unit ball of x-values about it. The y-supports of $\partial^\alpha\rho_\varepsilon(x-y)$ for those x-values lie in a fixed closed bounded ball $Q$, compact by F17. The derivative of the kernel is globally bounded, say by $C_\alpha$, by F19 on a ball containing its compact support. Thus the integrands are dominated by $C_\alpha|f|\mathbf1_Q$, integrable by local integrability. As $x\to x_0$ their pointwise limits are the integrands at $x_0$, so F11 gives continuity of every derivative integral. The change of variables between the two convolution orders follows from F8–F9. Hence the convolution is smooth with the stated formula. [F1, F8, F9, F11, F12, F15, F17, F19]

2.1 For any other measurable representatives let $N_K,N_f$ be their measurable null disagreement sets. For each fixed $x$, the integrands coincide outside $N_K\cup(x-N_f)$, a measurable null set by F8–F9. The same is true of their absolute values, so absolute integrability holds for either pair exactly when it holds for the other. At those points F10 gives equal integrals. Thus the measurable class in step 1.2 is representative-independent throughout $L^1$ times Lp, without restricting both inputs to $L^1$. [F8, F9, F10, step 1.2]

2.2 For finite $p$, normalization and F15 give $K_\varepsilon*f-f=\int K_\varepsilon(y)(f(\cdot-y)-f(\cdot))\,dy$ a.e. Its absolute value is bounded by the envelope with integrand $|K_\varepsilon(y)||f(x-y)-f(x)|$ by F16. This integrand is measurable by F7 applied to Borel representatives and ordinary products. Its section norm is $|K_\varepsilon(y)|\|\tau_yf-f\|_p$, measurable by step 1.1 and bounded by $2\|f\|_p|K_\varepsilon(y)|$, which is integrable. Euclidean Lebesgue measure is sigma-finite, since $[-j,j]^n$ for positive integers $j$ cover it and have finite measure $(2j)^n$ by F20. Therefore F5 applies and gives $\|K_\varepsilon*f-f\|_p\le\int|K_\varepsilon(y)|\|\tau_yf-f\|_p\,dy$. [F2, F5, F7, F15, F16, F20, step 1.1, step 1.2]

2.3 For $f\in C_0$, put $\omega_f(\delta)=\sup_{|y|<\delta,x}|f(x-y)-f(x)|$. Step 1.3 gives $\omega_f(\delta)\to0$. Taking pointwise absolute values in the normalized error integral and then the supremum gives $\|K_\varepsilon*f-f\|_{\mathrm{sup}}\le M\omega_f(\delta)+2\|f\|_{\mathrm{sup}}\int_{|y|\ge\delta}|K_\varepsilon(y)|\,dy$. First send $\varepsilon\downarrow0$, then $\delta\downarrow0$. This proves the uniform assertion by a direct supremum estimate. [F15, F16, step 1.3, given]

3.1 For any $\eta>0$, step 1.1 gives $\delta>0$ with $\|\tau_yf-f\|_p<\eta$ whenever $|y|<\delta$. Splitting the last integral yields $\|K_\varepsilon*f-f\|_p\le M\eta+2\|f\|_p\int_{|y|\ge\delta}|K_\varepsilon(y)|\,dy$. The tail tends to zero, so the limit superior is at most $M\eta$. Let $\eta\downarrow0$ to obtain convergence. No separate normalization of the real and imaginary kernel parts has been used. [step 1.1, step 2.2, given]

4.1 If the locally integrable input has compact support $S$, then $\int|f|=\int_S|f|<\infty$. A Borel representative can be made zero outside the closed set $S$ while preserving its class by step 2.1. F13 gives output support inside $\overline{S+\operatorname{supp}\rho_\varepsilon}$. Both input supports are bounded, so this closed sum closure is bounded and hence compact by F17. The smooth output has closed support inside it, therefore compact support. Zero input or zero convolution yields the empty support; neither requires a nonempty support choice. All estimates above apply at p=1; the only general infinity assertion is the isometry and Young bound, with uniform approximation restricted to C0. [F13, F17, step 2.1, step 1.5] ∎
