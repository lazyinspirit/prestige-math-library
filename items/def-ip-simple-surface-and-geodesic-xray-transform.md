---
id: def-ip-simple-surface-and-geodesic-xray-transform
kind: definition
title: "Simple surface and geodesic X-ray transform"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-jacobi-field
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 4, §4.1, printed pp. 110–112; Chapter 3, §§3.1–3.3, printed pp. 53–76."
    - title: "Joonas Ilmavirta, Geometry of geodesics, full lecture notes"
      url: "https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf"
      locator: "Chapter 13, §13.1, PDF pp. 87–89."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, author-hosted lecture notes"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.2, PDF pp. 6–9."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $(M,g)$ be a compact, connected, nonempty smooth two-dimensional Riemannian manifold with smooth boundary. For $x\in\partial M$, let $\nu_{\mathrm{out}}(x)$ be the outward unit normal. The boundary is **strictly convex** if
$$
g(\nabla_w\nu_{\mathrm{out}},w)>0
$$
for every $x\in\partial M$ and every nonzero $w\in T_x\partial M$. A **Jacobi field** along a unit-speed geodesic $\gamma$ is a smooth vector field $J$ along $\gamma$ satisfying
$$
D_t^2J+R(J,\dot\gamma)\dot\gamma=0,
$$
where $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. The manifold has **no conjugate points** if, on every unit-speed geodesic segment $\gamma:[a,b]\to M$, a Jacobi field with $J(a)=J(b)=0$ must be identically zero. It is **nontrapping** if every maximal unit-speed geodesic starting in $M^\circ$ reaches $\partial M$ in finite forward and backward time. The pair $(M,g)$ is a **simple surface** if its boundary is strictly convex, it has no conjugate points, and it is nontrapping.

The unit tangent bundle is $SM=\{(x,v):x\in M,\ v\in T_xM,\ g_x(v,v)=1\}$. Write $\nu_{\mathrm{in}}=-\nu_{\mathrm{out}}$ and
$$
\partial_+SM=\{(x,v)\in SM:x\in\partial M,\ g_x(v,\nu_{\mathrm{in}})>0\}
$$
for inward-pointing unit boundary vectors. For $(x,v)\in\partial_+SM$, let $\gamma_{x,v}$ be the unit-speed geodesic with $\gamma_{x,v}(0)=x$ and $\dot\gamma_{x,v}(0)=v$, and let $\tau_+(x,v)$ be its first positive exit time from $M$. For $f\in C^\infty(M)$, its scalar **geodesic X-ray transform** is the function on $\partial_+SM$ defined by
$$
I_0f(x,v)=\int_0^{\tau_+(x,v)} f(\gamma_{x,v}(t))\,dt.
$$
The geodesic equation is interpreted up to first boundary exit; local smooth extensions of the metric are used only to solve the coordinate ODE at boundary initial data.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-levi-civita-connection]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[def-jacobi-field]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]
