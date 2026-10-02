---
id: fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster
kind: false-statement
title: Higher sectional curvature makes jacobi fields spread faster
status: published
origin: pipeline
deps:
  - thm-rauch-comparison-theorem-first-form
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-constant-sectional-curvature-and-space-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-jacobi-field
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - cor-mean-value-theorem
  - def-sine-and-cosine-by-power-series
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§25.2–25.3, printed pp.185–189: larger curvature gives smaller Jacobi fields"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch I, printed p.13: the more curved side has the shorter field"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$.

**False claim.** Suppose two unit-speed geodesics $\gamma_1,\gamma_2$ in
$n$-dimensional Riemannian manifolds have normal Jacobi fields $J_1,J_2$ with
$J_i(0)=0$ and equal positive initial-derivative norms, and suppose every
radial sectional curvature of the first manifold is at least every radial
sectional curvature of the second. Then higher curvature makes the field
longer: $|J_1(t)|\ge|J_2(t)|$ at every time $t$ in the common interval of
definition.

The claim is false. On a segment $[0,T]$ where $\gamma_1(0)$ has no
conjugate point along $\gamma_1$ in $(0,T]$, Rauch's first comparison
([[thm-rauch-comparison-theorem-first-form]]) gives
$|J_1(t)|\le|J_2(t)|$ for $0\le t\le T$. This reversed comparison is
restricted to that segment; it is not asserted beyond the first conjugate
instant of the more-curved geodesic.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1] and the false claim
above; the refutation uses the explicit comparison pair below.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), inherited through the constant-sectional-curvature and curvature-tensor
interfaces below; the parallel initial-value supplier itself is choice-free.

[F1] Comparison sine ([[def-comparison-sine-cosine-and-cotangent-functions]],
[[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]): for
$k=1$ one has $\operatorname{sn}_1(t)=\sin t$,
$\operatorname{sn}_1''+\operatorname{sn}_1=0$, $\operatorname{sn}_1(0)=0$,
$\operatorname{sn}_1'(0)=1$, and $\operatorname{sn}_1(t)>0$ for
$0<t<\pi$.

[F2] Model geometry
([[def-constant-sectional-curvature-and-space-form]],
[[prop-curvature-tensor-of-constant-sectional-curvature]],
[[def-jacobi-field]]): a manifold of constant sectional curvature $k$ has
$R(X,Y)Z=k(g(Y,Z)X-g(X,Z)Y)$; the unit sphere has $k=1$ and Euclidean space
has $k=0$, so on a unit-speed geodesic $\gamma$ and for a parallel normal
unit field $\Phi_tE$ the fields
$$J_{\mathrm{sphere}}(t)=\sin t\,\Phi_tE,\qquad J_{\mathrm{euclid}}(t)=t\,\Phi_tE$$
satisfy
$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$: indeed $J_{\mathrm{sphere}}''=-J_{\mathrm{sphere}}=-R(J_{\mathrm{sphere}},\dot\gamma)\dot\gamma$
on the unit sphere and $J_{\mathrm{euclid}}''=0=R(J_{\mathrm{euclid}},\dot\gamma)\dot\gamma$
in Euclidean space.

[F3] Parallel transport
([[thm-existence-and-uniqueness-of-parallel-sections]],
[[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]):
the parallel field with prescribed unit normal value exists, is unique and
has constant norm $1$.

[F4] Rauch comparison, first form
([[thm-rauch-comparison-theorem-first-form]]): under its two hypotheses the
inequality is $|J_1|\le|J_2|$ when the first manifold is the more curved one.

[F5] The strict sine bound
([[lem-sine-positive-and-cosine-decreasing-on-zero-two]],
[[cor-mean-value-theorem]], [[def-sine-and-cosine-by-power-series]]):
$\sin0=0$, $\cos0=1$ and $\cos$ is strictly decreasing on $[0,2]$, so for
$0<t\le2$ the mean value theorem gives $\sin t=\cos\xi\cdot t<\ t$ for some
$\xi\in(0,t)$.

## Refutation

**Proof technique:** direct: exhibit the sphere-versus-Euclidean pair, check
the hypotheses of the false claim, and evaluate the asserted inequality at a
single time where the reverse strict inequality holds.

1.1 The witness pair. [F1, F2, F3, given]
Take the unit sphere $S^n$ with its round metric of curvature $1$ and
Euclidean space $\mathbb R^n$, both of dimension $n\ge2$. Let
$\gamma_1$ be a unit-speed great-circle geodesic on $S^n$ and $\gamma_2$ a
unit-speed straight line in $\mathbb R^n$; let $E\in T_{\gamma_i(0)}M_i$ be a
unit normal vector and $\Phi_tE$ its parallel transport along $\gamma_i$
[F3]. Restrict the witness pair to $[0,1]$. Put
$$J_1(t):=\operatorname{sn}_1(t)\,\Phi_tE=\sin t\,\Phi_tE,\qquad J_2(t):=t\,\Phi_tE .$$
By [F1] and [F2] both are normal Jacobi fields with
$$J_i(0)=0,\qquad |D_tJ_i(0)|=1,$$
so the initial data have the equal positive norm required by the false claim;
and
$$|J_1(t)|=\sin t,\qquad|J_2(t)|=t .$$
[F1, F2, F3, given]

2.1 The curvature hypothesis holds and the true inequality is reversed. [F1, F2, F4, step 1.1, given]
Every radial sectional curvature of the unit sphere is $1$, and every
sectional curvature of Euclidean space is $0$, by [F2]; hence every radial
curvature of the first manifold is at least every radial curvature of the
second. For this explicit pair, [F5] gives $\sin t\le t$ on $[0,1]$,
so directly
$$|J_1(t)|\le|J_2(t)|\qquad(0\le t\le1).$$
This calculation refutes the proposed direction without needing to apply
Rauch or verify its no-conjugate hypothesis. [F1, F2, F4,
step 1.1, given]

3.1 The false claim fails at $t=1$. [F5, step 1.1, step 2.1, given]
By [F5] with $t=1\le2$, $\sin1=\cos\xi<1$ for some $\xi\in(0,1)$, because
$\cos$ is strictly decreasing on $[0,2]$ and $\cos0=1$. Therefore
$$|J_1(1)|=\sin1<1=|J_2(1)|,$$
so the inequality $|J_1(1)|\ge|J_2(1)|$ of the false claim is violated by
the displayed pair, whose data satisfy every hypothesis of the claim. Hence
the claim is false; the correct statement is the opposite comparison
inequality of [F4], on its no-conjugate comparison interval. Both model
fields are explicit, so the inherited $\mathrm{AC}_\omega$ of [A1] is not
drawn on beyond its declaration. [F5, step 1.1, step 2.1, given] ∎

## Source locator

Datar §25.2 (printed p.185) states the lesson verbatim: "larger the
curvature, smaller the Jacobi fields", and §25.3 proves the corresponding
norm comparison; Eschenburg §3 (`Rauch I`, printed p.13) states the same
direction. The refutation above uses the sphere-versus-Euclidean comparison
pair, where the spherical field is $\sin t$ and the Euclidean field is $t$.
