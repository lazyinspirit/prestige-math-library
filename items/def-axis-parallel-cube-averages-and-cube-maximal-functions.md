---
id: def-axis-parallel-cube-averages-and-cube-maximal-functions
kind: definition
title: Axis-parallel cubes, their averages, and cube maximal functions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-locally-integrable-function-on-r-n, def-ball-average-operator-on-r-n, def-half-open-box, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-under-dilations-and-reflections, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§7.1, the cube maximal function $M_c$ and its averages, printed p. 500; §7.1.2, the cubes $Q(x,\\delta)$, printed p. 507"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "§4.1, the cube-based Hardy-Littlewood maximal operator, printed p. 66"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the principle
already assumed by the published ball-based maximal functions.

For $x\in\mathbb R^n$ and $r>0$ let $Q(x,r):=\prod_{i<n}(x_i-r,x_i+r)$ be the
**open axis-parallel cube** with centre $x$ and side length $2r$, so that
$Q(x,r)=\{\,y\in\mathbb R^n:|y_i-x_i|<r\text{ for every }i<n\,\}$. Its half-open counterpart is a
box in the sense of [[def-half-open-box]] with the same real endpoints $a_i=x_i-r$ and
$b_i=x_i+r$, and the box-measure theorem
([[thm-lebesgue-measure-of-a-box-of-every-kind]]) gives
$|Q(x,r)|=(2r)^n$; the face convention is immaterial because all boxes with the
same endpoints have the same Lebesgue measure. For $\lambda>0$, $\lambda Q$
denotes the cube concentric with $Q$ whose side length is $\lambda$ times that
of $Q$; thus $\lambda Q(x,r)=Q(x,\lambda r)$ and $|\lambda Q(x,r)|=(2\lambda r)^n=\lambda^n|Q(x,r)|$ by the same box-measure computation.

For $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$
([[def-locally-integrable-function-on-r-n]]) and an axis-parallel cube $Q$ the
**average** of $f$ over $Q$ is the finite number
$\langle f\rangle_Q:=|Q|^{-1}\int_Qf\,d\lambda$, and $\langle|f|\rangle_Q$ is
the average of the nonnegative function $|f|$. For any nonnegative measurable $g$, the same notation $\langle g\rangle_Q:=|Q|^{-1}\int_Qg\,d\lambda$ denotes an extended average in $[0,\infty]$, with value $+\infty$ when the integral diverges. The **centred** and
**uncentred cube maximal functions** of $f$ are
$$M_cf(x):=\sup_{r>0}\langle|f|\rangle_{Q(x,r)},\qquad M_c^*f(x):=\sup_{Q\ni x}\langle|f|\rangle_Q,$$
the second supremum taken over all axis-parallel cubes $Q=Q(y,r)$ with $y\in\mathbb R^n$, $r>0$ that contain $x$. Both functions take values in $[0,\infty]$.

These are the cube analogues of the published centred and uncentred ball-based
Hardy-Littlewood maximal functions $Mf$ and $M^*f$
([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]), whose
averages are formed with the ball average operator
([[def-ball-average-operator-on-r-n]]). Every Euclidean ball between the
inscribed and circumscribed cube of a fixed cube has comparable volume, so the
ball and cube maximal functions are pointwise comparable by a constant
depending only on $n$; that comparison is proved on this page. The two
functions $M_cf$ and $M_c^*f$ are themselves pointwise comparable by $2^n$,
since the centred cube $Q(x,r)$ is among the cubes containing $x$, and every cube $Q(y,r)\ni x$ lies in $Q(x,2r)$, whose volume is $2^n|Q(y,r)|$.
