---
id: def-littlewood-paley-square-function
kind: definition
title: "The Littlewood-Paley square function"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-inhomogeneous-dyadic-frequency-partition, lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds, lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded, thm-arithmetic-and-lattice-operations-preserve-measurability, def-borel-and-lebesgue-measurable-function-on-rn, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, thm-complex-holder-minkowski-and-the-quotient-norm, thm-dominated-convergence, lem-schwartz-functions-and-all-derivatives-are-integrable]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "the square function $(\\sum_{j\\in\\mathbb Z}|\\Delta_j(f)|^2)^{1/2}$ following Definition 6.1.1, printed p. 421"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.10) and (5.17), the square function of $f$, printed pp. 17-19"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 5.4, the two-sided Littlewood-Paley inequality, printed p. 24"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). With the fixed partition and
operators of [[def-inhomogeneous-dyadic-frequency-partition]], for
$f\in L^p(\mathbb R^n;\mathbb C)$ with $1\le p<\infty$ and $N\ge0$ define, for
$x\in\mathbb R^n$,
$$S_Nf(x):=\Bigl(\sum_{j=0}^{N-1}|\Delta_jf(x)|^2\Bigr)^{1/2},\qquad Sf(x):=\Bigl(\sum_{j\ge0}|\Delta_jf(x)|^2\Bigr)^{1/2}\in[0,\infty].$$
The functions $\Delta_jf$ in these formulae are the convolution representatives
$f*K_j$ of
[[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]]. The
following conventions and well-definedness facts are part of the definition.

1. Each $\Delta_jf=f*K_j$ lies in $L^p$ by
   [[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]].
   Its integral is defined at every $x$: Holder gives
   $\int|f(u)K_j(x-u)|du\le\|f\|_p\|K_j\|_{p' }$, with
   $p'=\infty$ when $p=1$
   ([[thm-complex-holder-minkowski-and-the-quotient-norm]]). Translations
   of a Schwartz kernel are continuous in $L^{p'}$: for finite $p'$ use
   dominated convergence with a common Schwartz majorant, and for $p'=\infty$
   use its bounded first derivatives. Holder therefore makes this everywhere
   convolution representative continuous, hence Borel measurable
   ([[thm-dominated-convergence]],
   [[def-borel-and-lebesgue-measurable-function-on-rn]]). Finite sums,
   products and the square root of nonnegative measurable functions preserve
   measurability
   ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]), so
   every $S_Nf$ is measurable and $S_Nf\le S_{N+1}f$ pointwise.
2. $Sf=\sup_N S_Nf$ is measurable as the increasing limit of measurable
   functions, with values in $[0,\infty]$; no finiteness is asserted, that is
   $Sf(x)=+\infty$ is allowed a priori.
3. Replacing $f$ by an almost everywhere equal function in $L^p$ replaces
   every convolution representative $\Delta_jf$ by an almost everywhere equal
   function, hence replaces $Sf$ by an almost everywhere equal function; the
   functional is therefore defined on almost everywhere classes, and $Sf$ is
   recorded as an almost everywhere function, exactly as the $L^p$ classes of
   [[def-complex-lp-and-euclidean-test-function-conventions]] are.
4. One writes $\|Sf\|_p$ for the $L^p$ norm of the class of $Sf$ when
   $Sf\in L^p$; the norm is that of $L^p(\mathbb R^n;\mathbb C)$, with $Sf$
   interpreted as the complex-valued function $x\mapsto Sf(x)$ (it is
   real-valued and nonnegative). The notation $S_Ff$ for a finite set
   $F\subset\{0,1,2,\dots\}$ means
   $\bigl(\sum_{j\in F}|\Delta_jf|^2\bigr)^{1/2}$, so that
   $S_Nf=S_{\{0,\dots,N-1\}}f$.

The operator-theoretic counterpart of $S$ for functions on the frequency side
is not asserted here: the definition names only the pointwise square function
of the convolution representatives, and the strict-range equivalence with
$\|f\|_p$ is a theorem proved later on this page.
