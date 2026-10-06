---
id: def-bmo-seminorm-and-quotient-by-constants
kind: definition
title: "BMO seminorm and the quotient by constants"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-locally-integrable-function-on-r-n, def-multidimensional-rectangle-and-volume, def-complex-lp-and-euclidean-test-function-conventions, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.1(b), printed p. 29 (BMO seminorm $\\sup_Q|Q|^{-1}\\int_Q|f-f_Q|$)"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definition 3.1 and the surrounding Moral, printed pp. 34-35"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Definition 3.1 and the equivalent $\\inf_c$ formulation, printed pp. 11-12"
---

## Definition

Complex scalars, Lebesgue measure on $\mathbb R^n$, and the complex $L^p$ and
test-function conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].
A cube is a nondegenerate axis-parallel cube ([[def-multidimensional-rectangle-and-volume]]).
For $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$ and a cube $Q$ put
$b_Q:=|Q|^{-1}\int_Qb$, so that $b_Q$ is the mean of $b$ over $Q$, and define
the $\mathrm{BMO}$ seminorm
$\|b\|_{\mathrm{BMO}}:=\sup_Q|Q|^{-1}\int_Q|b-b_Q|\in[0,\infty]$, the supremum
over all cubes, and
$\mathrm{BMO}(\mathbb R^n):=\{b\in L^1_{\mathrm{loc}}:\|b\|_{\mathrm{BMO}}<\infty\}$.
The mean is optimal up to a factor of $2$ in the average:
$|Q|^{-1}\int_Q|b-b_Q|\le 2\inf_c|Q|^{-1}\int_Q|b-c|\le 2|Q|^{-1}\int_Q|b-b_Q|$
where the infimum is over $c\in\mathbb C$. Moreover $\|b\|_{\mathrm{BMO}}=0$ exactly when $b$ is
constant almost everywhere, so the page works with the quotient
$\mathrm{BMO}(\mathbb R^n)/\mathbb C$ of equivalence classes modulo constants; a
class is written $b\in\mathrm{BMO}/\mathbb C$ and the zero class is the class of
the constants. Replacing cubes by balls in the supremum defines an equivalent
seminorm with comparison constants depending only on $n$.


These assertions follow directly from the averages. For every $c\in\mathbb C$,
$|b_Q-c|\le|Q|^{-1}\int_Q|b-c|$, so the triangle inequality gives the
factor-$2$ upper bound; taking $c=b_Q$ gives the other inequality. For locally integrable functions $b,d$, homogeneity
and $(b+d)_Q=b_Q+d_Q$ give the seminorm laws. If the seminorm is zero,
$b=b_{Q_m}$ almost everywhere on each $Q_m=[-m,m]^n$, $m\ge1$.
The constants agree on their positive-measure overlaps, and the exceptional
set is the union of the explicit measurable null sets
$Q_m\cap\{b\ne b_{Q_1}\}$, hence is null by countable additivity of Lebesgue
measure. Conversely an almost-everywhere constant has zero oscillation.
Thus the quotient also identifies almost-everywhere equal representatives.
Finally, if $E\subseteq F$ are measurable sets of finite positive measure
and $b\in L^1(F)$, then
$|E|^{-1}\int_E|b-b_E|\le2(|F|/|E|)|F|^{-1}\int_F|b-b_F|$.
Every ball is contained in a concentric cube of comparable volume, and every
cube is contained in a concentric ball of comparable volume. Applying this
inequality in both directions proves the cube/ball comparison.
