---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "ee1aa73ff31ca71db1869cb38719d3a06f124e451b79f6075e3bd2caa1ad9fc9"
id: thm-fatou-boundary-theorem-analytic-hardy-spaces
kind: theorem
title: "Fatou's boundary theorem for analytic Hardy spaces"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-circle-maximal-weak-one-one, thm-poisson-nontangential-maximal-bound, def-circle-maximal-function-and-nontangential-region, thm-layer-cake-formula-for-l-p-powers, thm-monotone-convergence-for-the-integral, lem-complex-circle-measures-have-finite-total-variation-under-countable-choice, def-countable-choice, def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, thm-nevanlinna-boundary-values-and-log-integrability, lem-hardy-log-integrability-of-boundary-values, lem-poisson-jensen-inequality-hardy-functions, lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice, thm-jensen-inequality-for-expectation, thm-poisson-extension-lp-contraction-and-norm-limit, lem-poisson-kernel-properties-on-the-disc, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, thm-fatou-lemma, thm-dominated-convergence, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-complex-holder-minkowski-and-the-quotient-norm, thm-taylor-expansion-holomorphic-function, thm-complex-power-series-converge-locally-uniformly, def-fourier-coefficients-and-trigonometric-polynomials, lem-trigonometric-characters-are-orthonormal, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7 and §5.9"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Identification of $H^p(\\mathbb D)$ with $H^p(\\mathbb T)$ and Corollaries 5.12-5.26, printed pp. 29-42: $f_r\\to f^*$ a.e. and in $L^p$, $f=P[f^*]$, and the boundary function determines $f$."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §3"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 59-62: the analytic Hardy-space boundary theorem, with the $p<1$ case through the root trick."
---

## Statement

Assume countable choice. Let $0<p\le\infty$ and $f\in H^p(\mathbb D)$ (the
zero function is allowed in (a)–(c)).

(a) For $m$-almost every $\zeta\in\mathbb T$ the nontangential limit
$f^*(\zeta):=\lim_{z\to\zeta,\,z\in\Gamma_A(\zeta)}f(z)$ exists and is finite for
every $A>1$, and $f^*\in L^p(\mathbb T,m)$ with
$\|f^*\|_p\le\|f\|_{H^p}$.

(b) If $p<\infty$ then $\|f_r-f^*\|_p\to0$ as $r\uparrow1$ and
$\|f^*\|_p=\|f\|_{H^p}$; for $p=\infty$, $\|f^*\|_\infty=\|f\|_\infty$ and the
radial functions converge to $f^*$ weak-star against $L^1(\mathbb T,m)$.

(c) If $1\le p\le\infty$ then $f=P[f^*]$, the Poisson integral of its boundary
function; for $p=1$ it says that the analytic $h^1$
representing measure of $f$ is the absolutely continuous measure $f^*m$,
proved here without the F. and M. Riesz theorem, from the a.e. limits and the
$L^1$ convergence in (b).

## Facts & Assumptions

**Given:** Countable choice, $0<p\le\infty$ and $f\in H^p(\mathbb D)$.

[F1] A nonzero Hardy function belongs to N and has finite nonzero nontangential boundary values $f^*$ under CC, with $f^*\in L^p$ and $\|f^*\|_p\le\|f\|_{H^p}$. Its logarithm is integrable and $\log|f(z)|\le P[\log|f^*|](z)$. A bounded holomorphic function has the CC Poisson representation and equality of infinity norms. ([[thm-nevanlinna-boundary-values-and-log-integrability]], [[lem-hardy-log-integrability-of-boundary-values]], [[lem-poisson-jensen-inequality-hardy-functions]], [[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]], [[def-countable-choice]], [[def-circle-maximal-function-and-nontangential-region]])

[F2] Convex Jensen for the positive unit-mass Poisson kernel gives $\exp(pP[u])\le P[e^{pu}]$ for an integrable real u with integrable exponential. The kernel is positive and its circle mass is one. ([[thm-jensen-inequality-for-expectation]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-kernel-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]])

[F3] Poisson extension contracts L1 and positivity preserves pointwise order; for bounded datum v, $P[v]\le\|v\|_\infty$. Tonelli applies to nonnegative integrands. The integral of an L1 function is absolutely continuous with respect to the measure, which also follows directly by splitting it into a bounded truncation and its small L1 tail. ([[thm-poisson-extension-lp-contraction-and-norm-limit]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[lem-poisson-kernel-properties-on-the-disc]])

[F4] Dominated convergence and Fatou apply to nonnegative measurable functions. Holder on the probability circle gives $\|v\|_1\le\|v\|_p$ for $1\le p\le\infty$. Radial means define the Hardy norm and increase with the radius. ([[thm-dominated-convergence]], [[thm-fatou-lemma]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-analytic-hardy-space-disc]], [[lem-hardy-radial-means-are-monotone]])

[F5] Holomorphic f equals its locally uniformly convergent Taylor series. Fourier coefficients use the orthonormal circle characters. For each fixed interior z the Poisson kernel has the uniformly absolutely convergent geometric expansion $1+\sum_{n\ge1}(z^n\zeta^{-n}+\overline{z}^n\zeta^n)$. ([[thm-taylor-expansion-holomorphic-function]], [[thm-complex-power-series-converge-locally-uniformly]], [[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]], [[def-poisson-kernel-on-the-disc]])

[F6] An L1 density first defines a countably additive complex measure by dominated convergence. Its finite positive regular variation is supplied under CC by the local circle-variation lemma. The direct simple-integral and phase-approximation proof of the density formula then gives total variation equal to its absolute density integral; no general Hahn/Jordan existence assertion is used. Under CC finite complex circle measures are uniquely determined by their Poisson integral. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]], [[lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients]])

[F7] Under CC, $m\{M_{\mathbb T}v>t\}\le3\|v\|_1/t$ for L1 data and $N_A(P[v])\le(A+1)^2M_{\mathbb T}v$. For a nonnegative measurable function, its squared integral is $\int_0^\infty2t\,m\{v>t\}dt$; the same formula for finite truncations and monotone convergence handles extended values. ([[lem-circle-maximal-weak-one-one]], [[thm-poisson-nontangential-maximal-bound]], [[def-circle-maximal-function-and-nontangential-region]], [[thm-layer-cake-formula-for-l-p-powers]], [[thm-monotone-convergence-for-the-integral]])

## Proof

1.1 For f identically zero take the zero boundary function; every assertion is immediate, including the unique zero density measure by [F6]. Otherwise [F1] supplies the finite nontangential boundary values and the $L^p$ bound in (a) under CC. For finite p put $h=|f^*|^p\in L^1$. The Poisson logarithmic inequality and [F2] give $|f(z)|^p\le P[h](z)$. For p infinity [F1] already gives the Poisson representation and equality of infinity norms. [F1, F2, F6, given, construct, algebra]

2.1 Uniform integrability for finite p. For $M\ge1$ write $h=h_M+t_M$, where $h_M=\min(h,M)$ and $t_M=(h-M)_+$. Since h is integrable, $\|t_M\|_1\to0$ by [F4]. For every Borel E and every radius r, positivity and [F3] give $$\int_E|f_r|^pdm\le\int_EP_rh\,dm\le M m(E)+\|t_M\|_1.$$ The same truncation bounds $\int_Eh\,dm$. Therefore both $|f_r|^p$ uniformly in r and h have arbitrarily small integrals on sets of sufficiently small Haar measure. The inequality $|a-b|^p\le c_p(|a|^p+|b|^p)$, with $c_p=1$ for $p\le1$ and $c_p=2^{p-1}$ for $p\ge1$, gives the same uniform integrability for $e_r=|f_r-f^*|^p$. [step 1.1, F3, F4, construct, algebra]

2.2 The infinity case. The equal infinity norms and Poisson representation are in step 1.1. For any a in $L^1$, $a(f_r-f^*)$ tends to zero almost everywhere and is bounded by $2\|f\|_\infty|a|$, an integrable function. Dominated convergence [F4] gives $\int a f_rdm\to\int a f^*dm$, exactly the stated weak-star convergence. [step 1.1, F4, algebra]

3.1 Strong convergence for finite p. The radial limits in step 1.1 give $e_r\to0$ almost everywhere. For each eta>0 the indicators of $\{e_r>\eta\}$ tend to zero almost everywhere, so [F4] gives $m\{e_r>\eta\}\to0$. Given epsilon>0, choose delta>0 by step 2.1 so that $\int_Ee_rdm<\varepsilon/2$ for every r whenever $m(E)<\delta$. Take eta=epsilon/2. For r sufficiently near one the exceptional superlevel has measure below delta, so $$\int e_rdm\le\eta+\int_{\{e_r>\eta\}}e_rdm<\varepsilon.$$ This argument along every sequence r tending to one proves $\|f_r-f^*\|_p\to0$, including p<1. Also step 1.1 and unit kernel mass give $\int|f_r|^pdm\le\int hdm$ for every r by Tonelli; the supremum and the reverse inequality in (a) yield $\|f\|_{H^p}=\|f^*\|_p$. [step 1.1, step 2.1, F2, F3, F4, algebra]

4.1 Poisson representation for finite $p\ge1$. Holder [F4] and step 3.1 give $L^1$ convergence of $f_r$ to $f^*$. Write $f(z)=\sum_{n\ge0}c_nz^n$ by [F5]. At each r>0 the Fourier coefficients of $f_r$ are $c_nr^n$ for nonnegative n and zero for negative n, by uniform Taylor convergence and orthogonality. $L^1$ convergence passes every Fourier coefficient to the limit, so $\widehat{f^*}(n)=c_n$ for n nonnegative and zero for n negative. Integrate the uniformly absolutely convergent kernel expansion of [F5] against the $L^1$ datum $f^*$; the uniform error is bounded in integral by its supremum times $\|f^*\|_1$. The result is $P[f^*](z)=\sum_{n\ge0}c_nz^n=f(z)$, proving (c). For p=1, [F6] makes $f^*m$ a finite complex representing measure; any other such measure has the same Poisson integral and is equal to it by [F6]. Its total variation is $\|f^*\|_1=\|f\|_{H^1}$. [step 3.1, F4, F5, F6, algebra]

5.1 Steps 1.1, 3.1, 2.2 and 4.1 prove every clause (a)–(c). All prior AC instances remain covered by the stronger CC conclusion. CC is used by the boundary and Fourier/measure uniqueness suppliers; the uniform integrability and convergence deduction is completely supplied in steps 2.1–3.1. [step 1.1, step 3.1, step 2.2, step 4.1, algebra]

6.1 Ancillary maximal bound in the included source. Fix A>1. The superlevel set of $N_Af$ at t is the union, over interior z with $|f(z)|>t$, of the open circle sets $\{\zeta:|z-\zeta|<A(1-|z|)\}$, so it is Borel measurable. First let $u\ge0$ be in $L^2$ on the circle, hence in $L^1$ by [F4]. For t>0 split $u=\min(u,t/2)+(u-t/2)_+$. The first summand has maximal function at most t/2, while subadditivity of averages gives $\{M_{\mathbb T}u>t\}\subseteq\{M_{\mathbb T}(u-t/2)_+>t/2\}$. The weak bound in [F7] therefore gives $$m\{M_{\mathbb T}u>t\}\le\frac6t\int_{\{u>t/2\}}u\,dm.$$ Apply layer-cake to $\min(M_{\mathbb T}u,K)$, then Tonelli to this nonnegative bound, and finally let K increase to infinity by [F7]. This yields $$\int(M_{\mathbb T}u)^2dm\le12\int_0^\infty\int_{\{u>t/2\}}u\,dm\,dt=24\int u^2dm.$$ For finite p>0 put q=p/2 and $u=|f^*|^q\in L^2$. The same Poisson-Jensen and convexity argument as step 1.1 gives $|f(z)|^q\le P[u](z)$; applying [F7] gives $(N_Af)^q\le(A+1)^2M_{\mathbb T}u$. Since p/q=2, $$\|N_Af\|_p^p\le24(A+1)^4\int|f^*|^pdm=24(A+1)^4\|f\|_{H^p}^p.$$ Thus $\|N_Af\|_p\le24^{1/p}(A+1)^{4/p}\|f\|_{H^p}$. For p infinity, $N_Af\le\|f\|_\infty$ everywhere. All these estimates include f zero and imply the maximal function is finite almost everywhere for finite p. [step 1.1, step 3.1, F1, F2, F3, F4, F7, algebra] ∎

## Remark

The maximal estimate in step 6.1 also closes the maximal-bound clause of the included Garnett source Theorem3.1. It is an additional consequence; clauses (a)–(c) of the Statement retain their full original conclusions.
