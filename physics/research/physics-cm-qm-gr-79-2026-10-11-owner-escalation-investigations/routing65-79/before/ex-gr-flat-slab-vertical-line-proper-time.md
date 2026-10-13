---
id: ex-gr-flat-slab-vertical-line-proper-time
kind: example
title: "Worked vertical geodesics of the open flat slab: affine parameter, limit point and proper time"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, def-gr-flat-minkowski-model-and-inertial-charts, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-constant-component-chart-flatness, prop-coordinate-geodesic-equation]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
relations:
  motivated_by: [def-gr-si-unit-and-coordinate-conventions, post-gr-ideal-clocks-and-free-fall]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: causal curves (sections 1.11 and 2.5 printed pp. 15-16 and 32-33) and global hyperbolicity (section 4.5.4 printed pp. 146-148)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): foliations by spacelike slices, the lapse function and the normal evolution vector, sections 3.2.2 and 3.3.1-3.3.2 printed pp. 40-42"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Example

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the general absolutely continuous causal-curve
conclusions used here.

Let $(M,g,N)$ be the open flat slab $M=x^{-1}((0,1)\times\mathbb R^3)$ of
[[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] with restricted
inertial chart $x=(x^0,z)$. Fix $z_0\in\mathbb R^3$ and let
$\gamma:(0,1)\to M$, $\gamma(s):=x^{-1}(s,z_0)$. This example records the
explicit numbers behind the incompleteness claim of that theorem:

**(i)** $\gamma$ is a smooth future timelike geodesic with affine parameter
$s$ and unit tangent $\gamma'(s)=\partial_0$; in the chart the geodesic
equation is $\ddot y=0$.

**(ii)** The affine separation and the Lorentzian length of the segment from
$s_1$ to $s_2$, $0<s_1<s_2<1$, are
$$\Delta s=s_2-s_1,\qquad L(\gamma|_{[s_1,s_2]})=\int_{s_1}^{s_2}\sqrt{-g(\gamma',\gamma')}\,ds=s_2-s_1;$$
under the framework's SI length-coordinate convention
[[def-gr-si-unit-and-coordinate-conventions]] clause (b), the coordinates
$x^0=s$ and the affine parameter values $s_1,s_2$ are lengths in metres,
while $c$ has units $\mathrm m\,\mathrm s^{-1}$; thus
$(s_2-s_1)/c$ is a duration in seconds. If $\gamma$ is also interpreted as
an ideal clock's worldline, the ideal-clock assumption of
[[post-gr-ideal-clocks-and-free-fall]] clause (i) identifies that
metric-defined proper-time increment with the clock-reading difference.
This physical reading is conditional; the mathematical example alone asserts
no clock reading.

**(iii)** The maximal domain of a geodesic with the data of $\gamma$ is
exactly $(0,1)$; the image converges in the ambient affine space to the event
$x^{-1}(1,z_0)$, which does not belong to $M$. Hence $\gamma$ is
future-inextendible in $M$ with bounded affine parameter, and the slab is
timelike geodesically incomplete.

**(iv)** The slice $\Sigma_{1/2}=\{x^0=1/2\}$ is a Cauchy hypersurface and
the slab is globally hyperbolic, so the example exhibits incompleteness in a
globally hyperbolic model.

## Facts & Assumptions

**Given:** The open flat slab $(M,g,N)$ with its restricted inertial chart, the point $z_0\in\mathbb R^3$, and real numbers $0<s_1<s_2<1$.

[L1] $M$ is an open subset of the flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]] with restricted metric $g=\eta|_M$ and time orientation $N=\partial_0|_M$; the restricted chart has constant components $\operatorname{diag}(-1,1,1,1)$; the Christoffel symbols of the metric-selected connection vanish in this chart, every coordinate curve is a geodesic, and the curvature vanishes ([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] clause (a), [[lem-gr-constant-component-chart-flatness]], [[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (b), (c)).

[L2] A smooth curve whose coordinate path satisfies the geodesic equation is a geodesic, and coordinate curves with $\ddot y=0$ satisfy it ([[prop-coordinate-geodesic-equation]], [[lem-gr-constant-component-chart-flatness]] clause (c)).

[L3] For a piecewise-$C^1$ future timelike curve the metric-defined proper-time increment is $c^{-1}\int\sqrt{-g(\gamma',\gamma') }\,ds$, and its Lorentzian length is the integral without the factor $c^{-1}$ ([[def-gr-timelike-worldline-and-proper-time]] clause (d)).

[L4] No geodesic of $M$ with the initial data of $\gamma$ extends the parameter interval beyond $(0,1)$; $\gamma$ does not converge to a point of $M$ as $s\to1$, and $(M,g,N)$ is globally hyperbolic with Cauchy slice $\Sigma_{1/2}$ ([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] clauses (b)-(d), [[def-gr-causal-conditions-and-global-hyperbolicity]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

## Verification

**Proof technique:** direct.

1.1 (The curve is a unit timelike geodesic.) Write $y(s):=(s,z_0)$ for the coordinate path of $\gamma$. Then $\dot y=(1,0,0,0)$ and $\ddot y=0$, so the geodesic equation holds by [L2] because the Christoffel symbols vanish; hence $\gamma$ is a geodesic with affine parameter $s$. Its tangent is $\gamma'(s)=\partial_0$, with $g(\gamma',\gamma')=\eta(\partial_0,\partial_0)=-1<0$ and $g(\gamma',N)=-1<0$; so it is future unit timelike and the chart geodesic equation is $\ddot y=0$. This is (i). [given, L1, L2]

2.1 (Affine and length computations.) By step 1.1, $\sqrt{-g(\gamma',\gamma')}=1$ on $(0,1)$; the length of the segment over $[s_1,s_2]$ is therefore $\int_{s_1}^{s_2}1\,ds=s_2-s_1$, equal to the affine separation, and [L3] gives the metric-defined proper-time increment $(s_2-s_1)/c$. Under the SI interpretation stated in (ii), this has units seconds because $s_2-s_1$ is measured in metres and $c$ in $\mathrm m\,\mathrm s^{-1}$. If the curve is also an ideal-clock worldline, the separate postulate in (ii) identifies this duration with the difference in clock readings. This proves (ii). [step 1.1, given, L3]

3.1 (Maximal domain, limit point and conclusion.) By [L4] no geodesic of $M$ with the data of $\gamma$ extends the parameter interval beyond $(0,1)$, and $\gamma$ does not converge to a point of $M$ as $s\to1$: its coordinate $x^0(\gamma(s))=s$ tends to $1$, while every point of $M$ has $x^0\in(0,1)$. Hence $\gamma$, restricted to the maximal geodesic domain $(0,1)$, is future-inextendible in the sense of [[def-gr-causal-curves-and-reachability]] clause (d) and its affine parameter is bounded above; the slab is timelike geodesically incomplete. By [L4] the slice $\Sigma_{1/2}$ is a Cauchy hypersurface and the model is globally hyperbolic, which is (iii) and (iv). [step 1.1, step 2.1, given, L4] ∎

## Remarks

- **Numbers used.** The affine parameter interval has length $1$ in these coordinates; the value is a coordinate statement about the chart $x$ and changes under affine reparametrizations of $x^0$ by a constant factor, under which the incomplete/incomplete verdict is unchanged.
- **Not a singularity.** Curvature vanishes identically on the slab; the incompleteness is caused by the absent boundary of the region, not by curvature blow-up.
