---
id: lem-ltwo-fourier-multiplier-bound
kind: lemma
title: Exact L2 Fourier multiplier norm
status: published
origin: pipeline
deps:
  - def-translation-invariant-fourier-multiplier-on-schwartz-space
  - thm-plancherel
  - lem-schwartz-space-is-dense-in-l-two
  - thm-extension-of-a-bounded-map-from-a-dense-subspace
  - thm-polynomial-growth-functions-define-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - def-essential-supremum-with-respect-to-a-measure
  - thm-continuity-from-below-for-measures
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-operator-norm
  - def-countable-choice
landmark: false
proof_strategy: unitary transport of multiplication to the frequency side plus superlevel tests
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.5.4, Theorem 2.5.10 and its proof, printed pp. 154-155"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.9, paragraph following Definition 3.11, printed p. 12, and Definition 6.5, printed p. 25"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice and let $n\ge1$. Let $m:\mathbb R^n\to\mathbb C$ be
measurable with finite essential supremum
$M:=\|m\|_\infty=\operatorname{ess\,sup}|m|<\infty$. Then:

1. $\mathcal S(\mathbb R^n)\subseteq D_m$, and for every Schwartz class $f$ the
   tempered distribution $T_mf$ of
   [[def-translation-invariant-fourier-multiplier-on-schwartz-space]] is the
   regular distribution of the $L^2$ class
   $\mathcal F_2^{-1}(m\cdot\mathcal F_2f)$, so as $L^2$ classes
   $T_mf=\mathcal F_2^{-1}(m\,\mathcal F_2f)$ and
   $\|T_mf\|_2\le M\|f\|_2$.
2. The Schwartz-core action extends uniquely to a bounded operator
   $T_m:L^2(\mathbb R^n;\mathbb C)\to L^2(\mathbb R^n;\mathbb C)$, namely
   $T_m=\mathcal F_2^{-1}M_m\mathcal F_2$ with $M_mg=m\,g$ the multiplication
   operator, and its operator norm is exactly
   $$\|T_m\|_{L^2\to L^2}=M=\operatorname{ess\,sup}_{\mathbb R^n}|m| .$$
3. The operator depends only on the almost-everywhere class of $m$: if
   $m=m'$ almost everywhere then the two operators on $L^2$ agree. In
   particular the values of $m$ on Lebesgue-null sets, including the single
   point $\{0\}$, do not affect the operator or its norm.

This is an $L^2$ statement only: no $L^p$ boundedness for $p\ne2$ is asserted,
and $m$ is not assumed continuous, smooth, or polynomially bounded.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, a measurable $m$ with $M=\|m\|_\infty<\infty$, and the conventions of [[def-complex-lp-and-euclidean-test-function-conventions]] for $L^2$ classes.

[A1] Countable Choice is assumed for the Plancherel, density and extension interfaces [F2]-[F4], the Fourier compatibility and multiplier-domain interfaces [F6]-[F7], and the Lebesgue-measure interface in [F8] ([[def-countable-choice]]).

[F1] The essential supremum $N_\infty(m)=\|m\|_\infty$ is the least essential bound: $|m|\le M$ almost everywhere, and $|m|\le L$ almost everywhere implies $M\le L$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F2] Plancherel $\mathcal F_2:L^2(\mathbb R^n;\mathbb C)\to L^2(\mathbb R^n;\mathbb C)$ is a surjective complex-linear isometry ([[thm-plancherel]]).

[F3] The Schwartz classes are dense in complex $L^2(\mathbb R^n)$ ([[lem-schwartz-space-is-dense-in-l-two]]).

[F4] A bounded linear map on a dense subspace of a normed space into a Banach space has a unique bounded linear extension with the same operator norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[def-operator-norm]]).

[F5] Every $L^p$ class, $1\le p\le\infty$, has a representative defining a tempered distribution; in particular $L^2$ classes define tempered distributions ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F6] For $h\in L^2$ the distributional transform of the regular distribution is $\mathcal Fu_h=u_{\mathcal F_2h}$, equivalently $\mathcal F^{-1}(u_{\mathcal F_2h})=u_h$ ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F7] $D_m$ and $T_mf=\mathcal F^{-1}(u_{m\widehat f})$ are defined whenever $m\widehat f$ is locally integrable with tempered regular distribution; on Schwartz functions $\widehat f$ is the integral transform and is a Schwartz class ([[def-translation-invariant-fourier-multiplier-on-schwartz-space]]).

[F8] Lebesgue measure is sigma-finite and finite on bounded sets ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]), and for an increasing sequence of measurable sets $\mu(\bigcup_kE_k)=\sup_k\mu(E_k)$ ([[thm-continuity-from-below-for-measures]]).

## Proof

**Proof technique:** conjugate the multiplication operator by Plancherel and test it on normalised indicators of superlevel sets.

1.1 Put $M=\|m\|_\infty$, so $|m|\le M$ almost everywhere and no smaller constant has this property [F1]. For an $L^2$ class $g$ the product $mg$ is measurable, and $|mg|\le M|g|$ almost everywhere, so $mg\in L^2$ with $\|mg\|_2\le M\|g\|_2$; the assignment $M_mg=mg$ is complex-linear and depends only on the classes of $m$ and $g$, since changing either on a null set changes $mg$ only on a null set. [F1, given]

1.2 Assume $M>0$ and fix $0<\varepsilon<M$. Were $|m|\le M-\varepsilon$ almost everywhere, [F1] would give $M\le M-\varepsilon$, a contradiction; hence $E_\varepsilon=\{x:|m(x)|>M-\varepsilon\}$ has positive Lebesgue measure. [F1, given]

2.1 The operator $S_m:=\mathcal F_2^{-1}M_m\mathcal F_2$ is a bounded complex-linear operator on $L^2(\mathbb R^n;\mathbb{C})$ with $\|S_m\|\le\|M_m\|\le M$, by [F2] and step 1.1. [F2, step 1.1]

2.2 Let $f\in\mathcal S(\mathbb R^n)$ and let $\widehat f$ be its integral transform, a Schwartz class; then $m\widehat f\in L^2$ with $\|m\widehat f\|_2\le M\|\widehat f\|_2$, so $m\widehat f$ is locally integrable and its regular distribution is tempered by [F5]; hence $f\in D_m$ and $T_mf=\mathcal F^{-1}(u_{m\widehat f})$ by [F7]. [F5, F7, step 1.1]

2.3 The sets $E_\varepsilon\cap B(0,k)$ increase to $E_\varepsilon$, so [F8] gives $0<|E_\varepsilon|=\sup_k|E_\varepsilon\cap B(0,k)|$; choose $k$ with $0<|E_\varepsilon\cap B(0,k)|<\infty$, possible because balls have finite measure. [F8, step 1.2]

3.1 Applying [F6] with $h=\mathcal F_2^{-1}(m\mathcal F_2f)\in L^2$ identifies $\mathcal F^{-1}(u_{m\mathcal F_2f})=u_h$; since $\widehat f=\mathcal F_2f$ as $L^2$ classes by [F2] and [F6], step 2.2 gives $T_mf=u_h$ and therefore the $L^2$ class identity $T_mf=\mathcal F_2^{-1}(m\mathcal F_2f)=S_mf$, with $\|T_mf\|_2=\|m\mathcal F_2f\|_2\le M\|\mathcal F_2f\|_2=M\|f\|_2$. [F2, F6, step 2.2]

3.2 Claim $\|S_m\|=M$. In the degenerate case $M=0$, [F1] gives $m=0$ almost everywhere, so $M_m=0$ and $\|S_m\|=0=M$. [F1, step 2.1]

3.3 Put $g=|E_\varepsilon\cap B(0,k)|^{-1/2}\mathbf 1_{E_\varepsilon\cap B(0,k)}\in L^2$, a unit vector. On $E_\varepsilon\cap B(0,k)$ one has $|m|>M-\varepsilon$ and $g\ne0$, so $\|M_mg\|_2^2=\int_{E_\varepsilon\cap B(0,k)}|m|^2|g|^2> (M-\varepsilon)^2\int g^2=(M-\varepsilon)^2$; therefore, putting $f=\mathcal F_2^{-1}g$, [F2] gives $\|f\|_2=1$ and $\|S_mf\|_2=\|M_mg\|_2>M-\varepsilon$; and $\|S_m\|\ge M-\varepsilon$ for every such $\varepsilon$. [F2, step 2.3]

4.1 By step 3.1 the operator $S_m$ agrees on the dense subspace $\mathcal S(\mathbb R^n)$ with the Schwartz-core action $f\mapsto T_mf$ of [F7]; since $\mathcal S$ is dense in $L^2$ by [F3] and $S_m$ is bounded linear by step 2.1, [F4] makes $S_m$ the unique bounded linear extension of the core action, with the same operator norm. [F3, F4, step 2.1, step 3.1]

5.1 Step 3.2 gives $\|S_m\|=0=M$ when $M=0$, and when $M>0$ step 3.3 gives $\|S_m\|\ge M-\varepsilon$ for every $0<\varepsilon<M$, hence $\|S_m\|\ge M$ after letting $\varepsilon\downarrow0$; step 2.1 gives $\|S_m\|\le M$; hence $\|S_m\|=M$, which together with step 4.1 proves the exact operator norm of statement 2. [step 2.1, step 4.1, step 3.2, step 3.3]

6.1 Finally let $m=m'$ almost everywhere. Then for every $L^2$ class $g$ the products $mg$ and $m'g$ agree almost everywhere, so $M_m=M_{m'}$ and $S_m=S_{m'}$; the operators, and hence their norm $M$, depend only on the almost-everywhere class of $m$. Countable Choice supplies the hypotheses of [F2]-[F4], [F6]-[F7] and the Lebesgue-measure part of [F8]. The choice of a single integer $k$ in step 2.3 for a fixed $\varepsilon$ requires no additional choice principle. [A1, F2, F3, F4, F6, F7, F8, step 1.1, step 3.1, step 5.1] ∎
