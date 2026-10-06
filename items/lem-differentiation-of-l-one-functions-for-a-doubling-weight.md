---
id: lem-differentiation-of-l-one-functions-for-a-doubling-weight
kind: lemma
title: Differentiation of L-one functions for a doubling weight
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-weight-and-weighted-lp-space, def-weighted-maximal-function-relative-to-a-doubling-weight, lem-weighted-maximal-function-is-weak-type-one-one, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-chebyshev-markov-inequality-for-the-integral, def-family-shrinking-nicely-to-a-point, def-dependent-choice, lem-dependent-choice-implies-countable-choice, thm-dominated-convergence, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, lem-complex-translation-and-approximate-identity-interfaces, thm-completion-measurable-functions-have-base-measurable-representatives, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The differentiation remark for A_infinity weights following Theorem 7.3.3, printed pp. 527-530"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Remark 4.28, differentiation for doubling weights, printed p. 81"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]), hence
Countable Choice ([[lem-dependent-choice-implies-countable-choice]]). Let $v$
be a weight on $\mathbb R^n$ whose measure $v\,d\lambda$ is doubling, and let
$h\in L^1_{\mathrm{loc}}(v)$ ([[def-weight-and-weighted-lp-space]]). Then for
$v$-almost every $x\in\mathbb R^n$,
$$\lim_{r\to0^+}\frac{1}{v(B(x,r))}\int_{B(x,r)}h\,v\,d\lambda=h(x);$$
more generally the same limit holds along any family of balls or cubes
shrinking nicely to $x$ ([[def-family-shrinking-nicely-to-a-point]]) with
$v$-measure comparable to the corresponding ball.

## Facts & Assumptions

**Given:** Dependent Choice, a weight $v$ with $v\,d\lambda$ doubling, and $h\in L^1_{\mathrm{loc}}(v)$.

[F1] $M^vh(x)=\sup_{r>0}v(B(x,r))^{-1}\int_{B(x,r)}|h|v\,d\lambda$ is the weighted maximal function of [[def-weighted-maximal-function-relative-to-a-doubling-weight]], and it obeys the weak $(1,1)$ bound $v(\{M^vg>\eta\})\le C(n,c_v)\eta^{-1}\int|g|v\,d\lambda$ for every $g\in L^1(v)$ ([[lem-weighted-maximal-function-is-weak-type-one-one]]).

[F2] $C_c(\mathbb R^n)$ is dense in $L^1(v\,d\lambda)$ because $v\,d\lambda$ is a Radon measure ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]), with complex density obtained by approximating the two real components separately; a function $g\in C_c$ is continuous, so for every $x$ and every family shrinking nicely to $x$ the weighted averages of $g$ converge to $g(x)$ (the averages of $|g(\cdot)-g(x)|$ are bounded by the maximum of $|g-g(x)|$ over the shrinking sets, which tends to $0$).

[F3] Chebyshev's inequality: for a nonnegative measurable $G$ and $\eta>0$, $v(\{G>\eta\})\le\eta^{-1}\int G\,v\,d\lambda$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[F4] Dominated convergence gives continuity in radius for local weighted integrals, and Lebesgue-measurable functions have Borel representatives: apply [[thm-completion-measurable-functions-have-base-measurable-representatives]] componentwise using [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], setting infinite values on null sets to zero. These representatives give jointly Borel integrands by composition with continuous maps; Tonelli gives measurable section integrals ([[thm-dominated-convergence]], [[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 First suppose $h\in L^1(v)$ globally and put $\mu=v\,d\lambda$. For $g\in C_c$ and $G=|h-g|$, the centred weighted oscillation $D h(x):=\limsup_{r\downarrow0}\mu(B(x,r))^{-1}\int_{B(x,r)}|h(y)-h(x)|\,d\mu(y)$ is at most $M^vG(x)+G(x)$, since the corresponding oscillation of continuous $g$ tends to zero. These limsups are measurable: for each fixed $x$ the integrals are continuous in positive radius by dominated convergence, hence rational radii suffice; joint measurability follows after choosing Borel representatives, and changing them on a null set does not change the a.e. assertion. [F1, F2, F4, given, algebra]

2.1 For $\eta>0$, $\{Dh>\eta\}\subseteq\{M^vG>\eta/2\}\cup\{G>\eta/2\}$. The weak bound and Chebyshev give $\mu(\{Dh>\eta\})\le2(C(n,c_v)+1)\eta^{-1}\|h-g\|_{L^1(v)}$. Taking the infimum over $g\in C_c$ using [F2] makes this measure zero. The countable union over $\eta=1/k$ is null, so the centred absolute oscillation tends to zero a.e. For local $h$, apply this result to $h_m=h\mathbf1_{B(0,m+1)}\in L^1(v)$; on $B(0,m)$, sufficiently small centred balls see $h=h_m$. The countable union of these exceptional sets is null and $\bigcup_mB(0,m)=\mathbb R^n$, proving the same conclusion for every local input. [F1, F2, F3, step 1.1, given, algebra]

3.1 Outside the null set of step 2.1, the absolute oscillation over any shrinking set $E_r\subseteq B(x,\rho_r)$ with $\rho_r\to0$ and $\mu(B(x,\rho_r))\le C_x\mu(E_r)$ is bounded by $C_x$ times the centred oscillation. It therefore tends to zero, and the modulus of the difference between the average of $h$ and $h(x)$ is at most this oscillation. Balls and cubes shrinking nicely with the stipulated weighted comparability meet these hypotheses. This proves all the stated limits, on a common full-measure set. [step 2.1, given, algebra] ∎
