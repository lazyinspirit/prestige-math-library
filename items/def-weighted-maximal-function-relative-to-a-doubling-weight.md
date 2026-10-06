---
id: def-weighted-maximal-function-relative-to-a-doubling-weight
kind: definition
title: The weighted maximal function of a doubling weight
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-weight-and-weighted-lp-space, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-ball-and-cube-maximal-functions-are-comparable, lem-a-p-weights-are-doubling, prop-ball-average-is-continuous-in-centre-and-radius, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The weighted maximal functions $M^w_c$ and $M^w$ of §7.1.2 and the estimates (7.1.28)-(7.1.29), printed pp. 507-509"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definition 4.23 and the weighted maximal function (4.26)-(4.27), printed pp. 79-81"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $v$ be a weight ([[def-weight-and-weighted-lp-space]]) whose measure
$v\,d\lambda$ is **doubling** with constant $c_v$:
$$v(B(x,2r))\le c_vv(B(x,r))\qquad(x\in\mathbb R^n,\ r>0).$$

For $f\in L^1_{\mathrm{loc}}(v)$ the **weighted maximal function** is
$$M^vf(x):=\sup_{r>0}\frac{1}{v(B(x,r))}\int_{B(x,r)}|f|\,v\,d\lambda,$$
and its cube analogue is
$$M_c^vf(x):=\sup_{Q\ni x}\frac{1}{v(Q)}\int_Q|f|\,v\,d\lambda,$$
the supremum over the axis-parallel cubes of
[[def-axis-parallel-cube-averages-and-cube-maximal-functions]] containing $x$.
The weighted averages are finite because $f\in L^1_{\mathrm{loc}}(v)$ and
$0<v(Q)<\infty$ for bounded $Q$.

**Ball-cube comparability.** Balls and cubes of comparable size have
$v$-measure comparable by a constant depending only on $n$ and $c_v$: for a
cube $Q$ with centre $y$ and side length $2r$ one has
$Q\subseteq B(y,\sqrt nr)\subseteq Q(y,\sqrt nr)$, and iterating the doubling
inequality a number of times depending only on $n$ gives
$v(Q)\le v(B(y,\sqrt nr))\le C(n,c_v)v(B(y,r))\le C(n,c_v)v(Q)$, while
$B(x,r)\subseteq Q(x,r)\subseteq B(x,\sqrt nr)$ gives the same comparison for
balls. Consequently $M^vf\le C(n,c_v)M_c^vf$ and $M_c^vf\le C(n,c_v)M^vf$
pointwise: a cube $Q=Q(y,r)\ni x$ is contained in $B(x,2\sqrt nr)\subseteq B(y,3\sqrt nr)$, whose $v$-measure is at most a dimensional number of doublings times $v(B(y,r))\le v(Q)$; conversely each centred ball $B(x,r)$ lies in $Q(x,r)$ of comparable $v$-measure. These containments compare each average to one in the appropriate supremum
([[lem-ball-and-cube-maximal-functions-are-comparable]] provides the
unweighted geometric sandwich, and the doubling of $v\,d\lambda$ converts it
to a $v$-measure comparison).

**Measurability.** For each fixed $r>0$ the function
$x\mapsto v(B(x,r))^{-1}\int_{B(x,r)}|f|\,v\,d\lambda$ is continuous: the
numerator is continuous in the centre by dominated convergence with dominating
function $|f|v$ over a fixed bounded ball containing all the translates, and
the denominator $x\mapsto v(B(x,r))$ is continuous by dominated convergence
with dominating function $v$ over such a ball; the denominator is positive
([[thm-dominated-convergence]], and
[[prop-ball-average-is-continuous-in-centre-and-radius]] for the unweighted
averages that underlie the same argument). The same dominated-convergence argument gives continuity in $r$, so the supremum over positive radii equals that over positive rational radii. Hence $M^vf$ is Borel measurable
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]);
the same holds for $M_c^vf$.
