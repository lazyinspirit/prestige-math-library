---
id: ex-rauch-comparison-between-euclidean-and-spherical-geodesics
kind: example
title: Rauch comparison between euclidean and spherical geodesics
status: draft
origin: pipeline
deps:
  - thm-rauch-comparison-theorem-first-form
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - def-constant-sectional-curvature-and-space-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-jacobi-field
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - cor-mean-value-theorem
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-sine-and-cosine-by-power-series
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§24.2, 25.3, 26.2, printed pp.176–177, 188–189, 195–197: the sphere-versus-Euclidean model comparison"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch I and its model cases, printed p.13"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Compare
the radial normal Jacobi fields of the unit round sphere $S^n$ (sectional
curvature $k=1$) and of Euclidean space $\mathbb R^n$ (curvature $k=0$) with
**equal unit initial derivatives**: along a unit-speed geodesic of $S^n$ the
spherical field has length
$$|J_{\mathrm{sphere}}(t)|=\sin t,$$
while along a unit-speed straight line in $\mathbb R^n$ the Euclidean field
has length
$$|J_{\mathrm{euclid}}(t)|=t .$$
Rauch's first comparison gives
$$\sin t\le t\qquad(0\le t\le\pi),$$
with strict inequality for every interior time $0<t<\pi$. The endpoint
$t=\pi$ is the antipodal conjugate instant of the sphere, where the spherical
field returns to zero.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the unit round sphere
$S^n$ and Euclidean space $\mathbb R^n$, unit-speed geodesics $\gamma_1$ in
$S^n$ and $\gamma_2$ in $\mathbb R^n$, and unit normal vectors $E_i$ with
parallel transports $\Phi^i_tE_i$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), used through the Jacobi-field and parallel
transport suppliers.

[F1] Comparison sine ([[def-comparison-sine-cosine-and-cotangent-functions]],
[[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]):
$\operatorname{sn}_1(t)=\sin t$ and $\operatorname{sn}_0(t)=t$,
$\operatorname{sn}_k''+k\operatorname{sn}_k=0$,
$\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, and
$\operatorname{sn}_1(t)>0$ for $0<t<\pi$.

[F2] Model geometry
([[def-constant-sectional-curvature-and-space-form]],
[[prop-curvature-tensor-of-constant-sectional-curvature]],
[[def-jacobi-field]]): the sphere is a manifold of constant curvature $1$ and
Euclidean space one of curvature $0$, so for a parallel normal unit field
$\Phi_tE$ the fields $\operatorname{sn}_1(t)\Phi_tE$ and
$\operatorname{sn}_0(t)\Phi_tE$ satisfy the Jacobi equation on the respective
geodesics.

[F3] Parallel transport
([[thm-existence-and-uniqueness-of-parallel-sections]],
[[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]):
the parallel field with prescribed unit normal value exists, is unique and
preserves norms and orthogonality.

[F4] Rauch comparison, first form
([[thm-rauch-comparison-theorem-first-form]]): with the pointwise radial
curvature hypothesis and no conjugate point of the first manifold in
$(0,T]$, normal radial fields with equal positive initial-derivative norms
satisfy $|J_1(t)|\le|J_2(t)|$ on $[0,T]$.

[F5] The strict sine bound
([[lem-sine-positive-and-cosine-decreasing-on-zero-two]],
[[cor-mean-value-theorem]], [[def-sine-and-cosine-by-power-series]],
[[cor-trigonometric-parity-and-pythagorean-identity]]): $\sin0=0$,
$\cos0=1$, $\cos$ is strictly decreasing on $[0,2]$, so
$\sin t=\cos\xi\,t<t$ for $0<t\le2$ and some $\xi\in(0,t)$; and
$|\sin t|\le1$ for all $t$ by the Pythagorean identity.

## Verification

**Proof technique:** direct: identify the two explicit model fields, apply
Rauch's first form on $[0,T]$ for every $T<\pi$, extend to $T=\pi$ by
continuity, and verify strictness in the interior by the mean value theorem.

1.1 The two explicit fields. [F1, F2, F3, given]
Let $\gamma_1$ be a unit-speed great-circle geodesic of $S^n$ and
$\gamma_2$ a unit-speed straight line in $\mathbb R^n$; let $E_1,E_2$ be unit
normal vectors at the starting points and $\Phi^i_tE_i$ their parallel
transports. Put
$$J_{\mathrm{sphere}}(t):=\operatorname{sn}_1(t)\,\Phi^1_tE_1 =\sin t\,\Phi^1_tE_1,\qquad J_{\mathrm{euclid}}(t):=\operatorname{sn}_0(t)\,\Phi^2_tE_2 =t\,\Phi^2_tE_2 .$$
By [F1] and [F2] both are normal Jacobi fields with vanishing value at $0$ and
initial-derivative norm $1$, and by the isometry property of parallel
transport [F3],
$$|J_{\mathrm{sphere}}(t)|=\sin t,\qquad |J_{\mathrm{euclid}}(t)|=t .$$
[F1, F2, F3, given]

2.1 Rauch comparison on $[0,T]$, $T<\pi$. [F1, F2, F4, step 1.1, given]
Fix $T<\pi$. Every radial sectional curvature of the sphere is $1$ and every
radial sectional curvature of Euclidean space is $0$ [F2], so the pointwise
curvature hypothesis of [F4] holds with the sphere as the more curved
manifold; and the sphere has no conjugate point in $(0,T]$ because the
spherical radial fields are $\sin t$ times parallel normal fields, which
vanish only at multiples of $\pi$ [F1]. Applying [F4] to the fields of
step 1.1 gives
$$|J_{\mathrm{sphere}}(t)|\le|J_{\mathrm{euclid}}(t)|,\qquad\text{that is,} \qquad\sin t\le t\qquad(0\le t\le T).$$
[F1, F2, F4, step 1.1, given]

3.1 Extension to the endpoint and strictness. [F5, step 2.1, given]
Both sides of $\sin t\le t$ are continuous on $[0,\pi]$, and
step 2.1 gives the inequality on $[0,T]$ for every $T<\pi$; hence it holds on
$[0,\pi]$, where $\sin\pi=0\le\pi$. For strictness let $0<t<\pi$. If
$0<t\le2$, then by [F5] $\sin t=\cos\xi\,t$ for some $\xi\in(0,t)\subset(0,2]$
and $\cos\xi<1$, so $\sin t<t$. If $2<t<\pi$, then
$\sin t\le|\sin t|\le1<2<t$ by [F5]. In both cases the inequality is strict,
while at $t=\pi$ the spherical field returns to zero together with its
antipodal conjugate point. Both model fields are explicit, so the inherited
$\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration.
[F5, step 2.1, given] ∎

## Source locator

Datar §25.2–25.3 (printed pp.185–189) uses the sphere-versus-Euclidean and
Euclidean-versus-hyperbolic pairs as the basic illustrations of the
comparison signs, and §24.1 gives the model fields $\operatorname{sn}_k$;
Eschenburg §3 (printed p.13) records the same model cases of `Rauch I`. The
verification above is carried out from the in-run Rauch first form and the
published trigonometric facts.
