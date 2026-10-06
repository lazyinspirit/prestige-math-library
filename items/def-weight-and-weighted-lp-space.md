---
id: def-weight-and-weighted-lp-space
kind: definition
title: Weights, their associated measures, and the spaces L^p(w)
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-locally-integrable-function-on-r-n, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-calligraphic-l-p-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-riesz-fischer-completeness-of-l-p, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, cor-rn-is-locally-compact-and-sigma-compact, def-measure-null-set-and-almost-everywhere, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, thm-heine-borel-rn, thm-complex-holder-minkowski-and-the-quotient-norm]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§7.1, definition of a weight and of the w-measure w(E), printed p. 499; the weighted spaces L^p(w), printed p. 500"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "§4.1, weights, their measures and the weighted L^p spaces, printed pp. 65-66"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the principle
used by the completeness statement below.

**Weights.** A **weight** on $\mathbb R^n$ is a Lebesgue measurable function
$w:\mathbb R^n\to[0,\infty]$ such that $\int_{B(x,r)}w\,d\lambda<\infty$ for every Euclidean ball with $r>0$, and $0<w(x)<\infty$ for Lebesgue-almost every $x$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-measure-null-set-and-almost-everywhere]]). Thus a weight may vanish or be infinite only on a Lebesgue null set.

Set $\widetilde w(x)=w(x)$ where $0<w(x)<\infty$ and $\widetilde w(x)=1$ otherwise. This positive finite-valued representative belongs to $L^1_{\mathrm{loc}}(\mathbb R^n)$ in the precise sense of [[def-locally-integrable-function-on-r-n]]. In all finite-valued function interfaces and reciprocal powers below, use this representative and denote it again by $w$. Its associated measure, cube integrals and almost-everywhere assertions agree with those of the original extended-valued weight.

**The $w$-measure.** For a Lebesgue measurable set $E$ the **$w$-measure** of
$E$ is
$$w(E):=\int_Ew\,d\lambda.$$
The map $E\mapsto w(E)$ is countably additive by the indefinite-integral
theorem ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]),
so it is a measure on the Lebesgue $\sigma$-algebra; its restriction to the
Borel sets is a Borel measure. It is finite on bounded sets: a bounded $E$ lies
in some ball $B$, and monotonicity of the integral together with
$w\in L^1_{\mathrm{loc}}$ gives $w(E)\le\int_Bw\,d\lambda<\infty$. It is
therefore a locally finite (equivalently, Radon) Borel measure: $\mathbb R^n$ is
locally compact and $\sigma$-compact
([[cor-rn-is-locally-compact-and-sigma-compact]]), so every open subset is
$\sigma$-compact (for a proper open $U$, use, for integers $m\ge1$, $K_m=\{x:|x|\le m,\ \operatorname{dist}(x,U^c)\ge1/m\}$: distance to the closed complement is continuous by the triangle inequality, so $K_m$ is closed and bounded, hence compact by [[thm-heine-borel-rn]], and $U=\bigcup_mK_m$; for $U=\mathbb R^n$ use closed balls), and
[[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]
makes the measure regular. Since $\mathbb R^n$ is $\sigma$-compact, $w$ is
$\sigma$-finite as well.

Because $0<w<\infty$ almost everywhere, a Lebesgue measurable set is
$w$-null exactly when it is Lebesgue null: the integral of $w$ over a Lebesgue
null set vanishes, and conversely $\int_Nw\,d\lambda=0$ forces $w=0$ a.e. on
$N$, hence $\lambda(N)=0$ since $w>0$ a.e.

**The spaces $L^p(w)$.** Fix $1\le p<\infty$. For a measurable $f$ the
**weighted $L^p$ functional** is
$$\|f\|_{L^p(w)}:=\Bigl(\int_{\mathbb R^n}|f|^p\,w\,d\lambda\Bigr)^{1/p}\in[0,\infty],$$
the value $+\infty$ being assigned when the integral diverges. Since
$\int|f|^p\,w\,d\lambda=\int|f|^p\,d(w\lambda)$ and $w\lambda$ is a measure,
this is the $L^p$ functional of the measure space $(\mathbb R^n,w\lambda)$ in
the sense of [[def-calligraphic-l-p-on-a-measure-space]], and $L^p(w)$ is the
corresponding quotient of the class of measurable $f$ with
$\|f\|_{L^p(w)}<\infty$ by the functions that vanish $w$-almost everywhere
([[def-l-p-space-as-a-quotient-by-null-functions]]); complex-valued $f$ are
admitted under the componentwise conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]]. Equivalently, and
this is how the norm is used below, $\|f\|_{L^p(w)}=\bigl\||f|\bigr\|_{L^p(w)}$ and the
quotient norm is well defined
([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]);
the real space is complete by [[thm-riesz-fischer-completeness-of-l-p]] applied to $w\lambda$. For complex functions, real and imaginary component projections contract the norm and recombination has norm at most the sum of the component norms ([[thm-complex-holder-minkowski-and-the-quotient-norm]]). A complex Cauchy sequence therefore has two real Cauchy components with limits, whose recombination is its complex norm limit; hence the complex space is Banach as well. Because the
$w$-null sets are exactly the Lebesgue null sets, membership of $L^p(w)$ and
equality in $L^p(w)$ are determined by the same negligible sets as in
unweighted measure theory.
