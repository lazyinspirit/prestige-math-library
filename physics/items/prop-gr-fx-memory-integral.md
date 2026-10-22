---
id: prop-gr-fx-memory-integral
kind: proposition
title: "Classical shear memory and the leading displacement approximation"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Conditional classical Bondi-boundary identity, formal
  first-order Jacobi response, and controlled actual Jacobi
  displacement/velocity estimate for a fixed compact tube, interval and smooth
  normalized local metric family; no uncontrolled finite-amplitude, observed, or
  quantized-gravity claim."
deps:
  - def-gr-fx-bondi-expansion
  - def-gr-wave-screen-and-tt-projection
  - thm-gr-tt-plane-wave-curvature
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - thm-ftc-second-part
  - def-countable-choice
  - def-gr-flat-linearized-perturbation
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism,
        arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (37), (40)-(43), and
        §4, supertranslation action on shear"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and
        Gauge Theory, Princeton University Press (2018), full lecture notes
        arXiv:1703.05448: §6, Eqs. (6.0.1)-(6.0.3), geodesic-deviation and
        displacement memory"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice and a smooth Bondi expansion as in [[def-gr-fx-bondi-expansion]]. For $u_1<u_2$ in its retarded-length interval, define $\Delta C_{AB}:=C_{AB}(u_2)-C_{AB}(u_1)$. Then

$$\Delta C_{AB}=\int_{u_1}^{u_2}N_{AB}(u)\,du.$$

For the detector clause, fix an angular point $x\in S^2$ and a large fixed area radius $r>r_0$. In the local flat approximation choose the future unit observer $n=\partial_0$ and outward unit propagation direction $\hat k=\partial_3$ of [[def-gr-wave-screen-and-tt-projection]], so the positive screen is $\Sigma(n,\hat k)=\operatorname{span}(\partial_1,\partial_2)$. Let $\jmath:S^2\to\mathbb R^3$ be the unit-sphere inclusion; $d\jmath_x$ identifies $T_xS^2$ isometrically, for $q$, with the plane orthogonal to $\jmath(x)$. Choose axes with $e_3=\jmath(x)$ and a fixed ordered orthonormal screen basis $e_1,e_2$ corresponding to a $q$-orthonormal basis of $T_xS^2$. Use adapted inertial coordinates with $x^0=ct$ and $x^3$ in the $\hat k$ direction. The background central worldline is the restriction to $[u_1,u_2]$ of the smooth future-directed timelike affine geodesic $\gamma_0(u)=(x^0=u+r,x^1=0,x^2=0,x^3=r)$; its affine parameter $u$ is also proper-length parameter, and on it the Bondi retarded coordinate is $u=x^0-r$.

A **linear transverse detector approximation** here is the formal flat first-order model with a dimensionless screen-TT profile $H_{AB}(u)=C_{AB}(u,x)/r+\rho_{AB}(u,r,x)$ in the chosen basis, extended on an open tube $\Omega\subset\mathbb R^4$ around $\gamma_0([u_1,u_2])$ as the planar perturbation $h_{AB}(x^0,x^3)=H_{AB}(x^0-x^3)$ with all other components zero. Take $H$ as the first-order coefficient of a smooth flat linearized metric family on $\Omega$; only this coefficient is used. Assume the profile has a smooth extension outside $[u_1,u_2]$; only its values on this interval enter. For $j=0,1,2$, assume $\sup_{u\in[u_1,u_2]}|\partial_u^j\rho_{AB}(u,r,x)|\le K_jr^{-2}$, where the constants $K_j$ are uniform on the fixed interval and angular patch and have dimensions $\mathrm{length}^{2-j}$. Let $s_0^A$ be any initial screen-separation components in the fixed basis, with zero initial relative velocity. The components $s_0^A$, $\delta s^A$, $s_\lambda^A$ and the Jacobi field $J_\lambda$ below carry length units; their first derivatives with respect to the proper-length parameter $u$ are dimensionless, and their second derivatives have inverse-length units. Its **formal first-order response** $\delta s^A$ is the unique solution of the linearized screen Jacobi equation

$$\partial_u^2\delta s^A=\frac12\partial_u^2H^A{}_B\,s_0^B,\qquad \delta s^A(u_1)=0,\qquad \partial_u\delta s^A(u_1)=0,$$

with angular indices raised using $q^{AB}$. Assume $N_{AB}(u_1)=N_{AB}(u_2)=0$. This formal clause is a first-order response coefficient only; its quantitative realization is stated separately below. Then

$$\delta s^A(u_2)=\frac{1}{2r}\Delta C^A{}_B\,s_0^B+O(r^{-2}|s_0|).$$

Under the same approximation, the endpoint relative screen velocity has first-order response $\partial_u\delta s^A(u_2)=O(r^{-2}|s_0|)$, so it has no leading $r^{-1}$ contribution when the news vanishes at both cuts.

The error constants depend on the fixed compact interval, angular patch and the $K_j$ bounds. No exact finite-radius identity $H_{AB}=C_{AB}/r$ is asserted.

A quantitative amplitude statement is also available. Fix $r$, the angular point, and the interval $[u_1,u_2]$, and let $\Omega$ contain a compact coordinate tube around $\gamma_0([u_1,u_2])$. Supply any smooth flat linearized family
$$g_{ab}(\lambda,x)=\eta_{ab}+\lambda h_{ab}(x)+\lambda^2k_{ab}(\lambda,x)$$
on this tube, in the exact sense of [[def-gr-flat-linearized-perturbation]], with the planar first-order coefficient $h_{AB}=H_{AB}(x^0-x^3)$ above and all other $h_{ab}=0$. The normalized remainder $k$ is smooth jointly in $(\lambda,x)$, and $\lambda$ is a dimensionless amplitude parameter. For small $|\lambda|$, use the future cone containing $\partial_0$ on a smaller tube. Issue the timelike geodesic $\gamma_\lambda$ from $\gamma_0(u_1)$ with unit initial velocity $\partial_0/\sqrt{-g_\lambda(\partial_0,\partial_0)}$. Choose a smooth initial orthonormal spatial frame tending to $(\partial_1,\partial_2,\partial_3)$ at $\lambda=0$, and parallel-transport it along $\gamma_\lambda$. Let $J_\lambda$ be the exact Jacobi field with initial value $s_0^AE_{A,\lambda}(u_1)$ and covariant initial derivative zero, and define $s_\lambda^A(u):=g_\lambda(J_\lambda,E_{A,\lambda})$, $A=1,2$. These are screen components in the transported frame; initial rest is covariant rest, not a coordinate-velocity condition. The geodesics, frames and Jacobi fields exist on the full fixed interval for sufficiently small $|\lambda|$, and $J_\lambda$ is realizable as a smooth timelike geodesic variation. There are constants for this fixed tube, interval and normalized family such that
$$s_\lambda(u_2)-s_0=\frac{\lambda}{2r}\Delta C\,s_0+O(|\lambda|r^{-2}|s_0|)+O(\lambda^2|s_0|),\qquad s_\lambda'(u_2)=O(|\lambda|r^{-2}|s_0|)+O(\lambda^2|s_0|).$$
More precisely, the actual screen components equal $s_0+\lambda\delta s+O(\lambda^2|s_0|)$, and their derivatives equal $\lambda\delta s'+O(\lambda^2|s_0|)$, uniformly on the interval. The first-order $r^{-2}$ constants are uniform wherever the stated $K_j$ bounds are uniform; the amplitude-squared constants here are for fixed $r$ and the chosen family and tube. No uniformity of those constants as $r\to\infty$ is asserted without uniform family bounds. The parameter $\lambda$ is not identified with $\sup|H|$. This is a local metric-family estimate, not an error estimate comparing a full Bondi spacetime with its detector approximation.

## Statement references

[[def-gr-fx-bondi-expansion]]

[[def-gr-wave-screen-and-tt-projection]]

[[thm-gr-tt-plane-wave-curvature]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-ftc-second-part]]

[[def-gr-flat-linearized-perturbation]]

[[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

## Facts & Assumptions

**Given:** The smooth shear and news of [[def-gr-fx-bondi-expansion]], a fixed large-$r$ local screen in the flat TT model of [[def-gr-wave-screen-and-tt-projection]], and the endpoint and linearization hypotheses in the Statement.

[F1] $N_{AB}=\partial_uC_{AB}$ by [[def-gr-fx-bondi-expansion]]. Separately, the detector clause assumes the screen profile $H_{AB}=C_{AB}/r+\rho_{AB}$ and the explicit uniform $K_jr^{-2}$ bounds on $\rho_{AB}$ and its first two retarded-time derivatives stated in the Statement.

[F2] In the adapted flat inertial frame $n=\partial_0$, $\hat k=\partial_3$, the screen $\Sigma(n,\hat k)$ is positive definite and two-dimensional; the chosen basis $e_1,e_2$ is orthonormal and TT means transverse to $n,\hat k$ and trace-free on this screen ([[def-gr-wave-screen-and-tt-projection]]).

[F3] For a spatial TT planar perturbation $h_{AB}=H_{AB}(u)$ in $x^0=u+r$, the first-order curvature satisfies $R^{(1)A}{}_{00B}=\tfrac12\partial_u^2H^A{}_B$ in the library curvature convention ([[thm-gr-tt-plane-wave-curvature]]).

[F4] Along a smooth affine timelike geodesic variation, its separation field is a Jacobi field and obeys $D_u^2s=R(T,s)T$. Along a supplied affine geodesic every prescribed initial value and covariant derivative determine a unique smooth Jacobi field; its pairing with the geodesic tangent is affine ([[thm-gr-jacobi-equation-and-geodesic-deviation]], clauses (b)–(d)).

[F5] For a differentiable component function with integrable derivative on a compact interval, the integral of the derivative equals the endpoint difference ([[thm-ftc-second-part]]).

[F6] A flat linearized family has $g_\lambda=\eta+\lambda h+\lambda^2k_\lambda$, with normalized remainder smooth jointly on its open parameter and coordinate domain; no field equation is assumed ([[def-gr-flat-linearized-perturbation]]).

[F7] A jointly smooth ordinary differential equation on an open time-state-parameter domain has locally unique solutions depending smoothly on initial data and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F8] For a smooth nondegenerate metric the unique metric-selected connection is torsion-free and metric-compatible and has the Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle inherited through the smooth Lorentzian screen suppliers; full Choice is not used ([[def-countable-choice]]).

[A2] The local detector approximation uses the specified future timelike affine background worldline, an outward unit propagation direction, a fixed orthonormal screen basis identified with $T_xS^2$, an initially comoving infinitesimal geodesic separation, and vanishing news at both endpoint cuts. Angular variation across the detector is excluded by the fixed-point planar approximation; the finite-radius profile remainder obeys the explicit $K_jr^{-2}$ bounds. Only the formal first-order response is retained.

## Proof


**Given:** [F1]–[F5] and [A1]–[A2] for the formal clauses; additionally [F6]–[F8] and the supplied normalized family for the quantitative clause.

1.1 Apply [F5] to each smooth tensor component $C_{AB}(u,x)$ at the fixed angular point. Since $N_{AB}=\partial_uC_{AB}$, $C_{AB}(u_2,x)-C_{AB}(u_1,x)=\int_{u_1}^{u_2}N_{AB}(u,x)\,du$. This is the first identity. [A1, F1, F5, given, algebra]

1.2 In the adapted frame of [A2], the plane-wave curvature supplier gives $R^{(1)A}{}_{00B}=\tfrac12\partial_u^2H^A{}_B$ ([F3]); the Jacobi equation of [F4] with initial screen value $s_0^Ae_A$ and zero initial derivative therefore has this forcing at first order, since the flat background curvature is zero and the basis is constant. Thus its formal first-order response obeys exactly the defining equation for $\delta s^A$ in the Statement. No finite-amplitude error estimate is used. [A2, F2, F3, F4, given, algebra]

1.3 For the quantitative clause set $T:=u_2-u_1>0$. Choose a compact state neighborhood of $(\gamma_0(u),\partial_0)$, $u\in[u_1,u_2]$, whose position projection lies inside the specified open tube, with positive margins about this compact graph. By [F6] and [F8], the Christoffels are smooth jointly and vanish at $\lambda=0$, so their norms on this neighborhood are at most $C|\lambda|$ for small $|\lambda|$. The coordinate geodesic system is $x'=v$, $v'^a=-\Gamma^a{}_{bc}(\lambda,x)v^bv^c$. By [F7] it has a local smooth solution from the stated unit initial velocity. As long as it stays in this neighborhood, the bounded velocity range gives $|v-\partial_0|\le|v(u_1)-\partial_0|+C_1|\lambda|T$ and $|x-\gamma_0|\le T\sup|v-\partial_0|$. Choose $|\lambda|$ small enough to keep both bounds strictly inside the chosen margins. The solution cannot leave the neighborhood. A putative finite maximal endpoint would have a state limit there, since its derivative is bounded; [F7] at that interior limit extends the solution, a contradiction. Thus it exists on the full interval. A finite subdivision and [F7] give smooth dependence on $\lambda$ throughout it. The unit timelike norm is preserved by [F8], and $\partial_0$ remains timelike on a smaller fixed tube for small $|\lambda|$, fixing the future cone. [F6, F7, F8, given, construct, algebra]

2.1 Integrate the linearized equation twice, using $\delta s(u_1)=\partial_u\delta s(u_1)=0$, to obtain
$$\delta s^A(u_2)=\frac12\int_{u_1}^{u_2}(u_2-v)\,\partial_v^2H^A{}_B(v)\,s_0^B\,dv.$$
Integration by parts gives $\delta s^A(u_2)=\tfrac12[\Delta H^A{}_B-(u_2-u_1)\partial_uH^A{}_B(u_1)]s_0^B$. Since $H=C/r+\rho$, the endpoint condition $N_{AB}(u_1)=0$ and the $K_1r^{-2}$ bound give $\partial_uH(u_1)=O(r^{-2})$; the $K_0r^{-2}$ bound gives $\Delta H=\Delta C/r+O(r^{-2})$. This proves the stated displacement estimate, with constants depending on $u_2-u_1$ and $K_0,K_1$. [A2, F1, step 1.2, algebra]

2.2 Integrating the linearized equation once gives $\partial_u\delta s^A(u_2)=\tfrac12(\partial_uH^A{}_B(u_2)-\partial_uH^A{}_B(u_1))s_0^B$. At both endpoints the leading derivative is $N^A{}_B/r=0$, and the $K_1r^{-2}$ bound controls the remainder derivatives. This proves the endpoint velocity estimate. [A2, F1, step 1.2, algebra]

2.3 Smooth Gram-Schmidt at the initial point gives the chosen spatial orthonormal frame, since its projected Gram matrix is positive at $\lambda=0$ and remains positive nearby. Parallel transport solves $E'{}^a=-\Gamma^a{}_{bc}v^bE^c$, a linear equation with bounded smooth coefficients along the compact geodesic. Local solutions from [F7] extend over the interval: the equation gives $(|E|^2)'\le2C|E|^2$, so differentiating $e^{-2C(u-u_1)}|E|^2$ bounds $|E|$ by $|E(u_1)|e^{CT}$ and prevents escape at a finite endpoint, and local uniqueness patches a finite subdivision. They depend smoothly on $\lambda$ and remain orthonormal and orthogonal to the geodesic tangent by [F8]. The Jacobi initial-data result [F4] gives a unique field $J_\lambda$ with the stated covariant rest data. It is an actual variation field: choose an initial chart curve with tangent $J_\lambda(u_1)$, parallel-transport the initial timelike velocity along it, and issue geodesics from those data. The same compact-state argument as step 1.3 supplies the resulting smooth geodesic variation on the whole interval for sufficiently small variation parameter. Torsion-freeness gives initial covariant derivative zero, so uniqueness in [F4] identifies its variation field with $J_\lambda$. [F4, F6, F7, F8, step 1.3, construct, algebra]

3.1 Write $x_\lambda\in\mathbb R^3$ for the spatial components of $J_\lambda$ in that parallel frame; its time component is zero because $g(J_\lambda,\gamma_\lambda')$ is affine with zero initial value and derivative by [F4]. Its exact equation is
$$x_\lambda''=K_\lambda x_\lambda,\qquad (K_\lambda)^i{}_j=g_\lambda(E_{i,\lambda},R_\lambda(\gamma_\lambda',E_{j,\lambda})\gamma_\lambda'),\qquad x_\lambda(u_1)=x_0:=(s_0^1,s_0^2,0),\quad x_\lambda'(u_1)=0.$$
The coefficient is smooth jointly. At $\lambda=0$ the curvature vanishes identically, so curve and frame derivatives make no contribution to its first $\lambda$ derivative. The sign convention $R(T,J)T$ in [F4] and the positive $R^{(1)A}{}_{00B}=\tfrac12H''{}^A{}_B$ in [F3] give
$$K_\lambda=\lambda \mathcal K_1+\lambda^2L_\lambda,\qquad (\mathcal K_1)^A{}_B=\tfrac12H''{}^A{}_B,$$
with all first-order longitudinal entries zero. On a compact parameter interval $|\lambda|\le\delta_0$ one can take $L_\lambda=\int_0^1(1-t)\partial_\lambda^2K_{t\lambda}\,dt$, so $\|L_\lambda\|\le\ell$ uniformly on $[u_1,u_2]$. Put $\kappa:=\sup\|\mathcal K_1\|$ and $b:=\kappa+\delta_0\ell$. [F3, F4, F6, F8, step 1.3, step 2.3, algebra]

4.1 Shrink $\delta\le\delta_0$ so $\delta T^2b/2\le1/2$. The exact integral equation
$$x_\lambda(u)=x_0+\int_{u_1}^{u}(u-v)K_\lambda(v)x_\lambda(v)\,dv$$
gives $\sup|x_\lambda|\le2|s_0|$ and $\sup|x_\lambda-x_0|\le T^2b|\lambda||s_0|$ for $|\lambda|\le\delta$. Define $x_1(u):=\int_{u_1}^{u}(u-v)\mathcal K_1(v)x_0\,dv$ and $e:=x_\lambda-x_0-\lambda x_1$. Subtracting the two integral equations yields
$$e(u)=\int_{u_1}^{u}(u-v)\left[\lambda \mathcal K_1(v)(x_\lambda(v)-x_0)+\lambda^2L_\lambda(v)x_\lambda(v)\right]dv.$$
Consequently
$$\sup|e|\le\frac{T^2}{2}(\kappa T^2b+2\ell)\lambda^2|s_0|,\qquad \sup|e'|\le T(\kappa T^2b+2\ell)\lambda^2|s_0|.$$
These are uniform bounds for this fixed family, tube and interval. The constants have respectively dimension zero and inverse length. No estimate in terms of $\sup|H|$ alone was used. [step 3.1, algebra]

5.1 The screen part of $x_1$ is exactly $\delta s$ by step 1.2 and the zero initial data. Step 2.1 bounds
$$\left|\delta s(u_2)-\frac{\Delta C}{2r}s_0\right|\le\left(K_0+\frac{T K_1}{2}\right)r^{-2}|s_0|,$$
while step 2.2 bounds $|\delta s'(u_2)|\le K_1r^{-2}|s_0|$. Here $K_0,K_1$ are the profile-remainder constants from the Statement, distinct from the tidal matrix $\mathcal K_1$ in step 3.1. Combining with step 4.1 proves both quantitative endpoint formulas and their claimed uniformity. In particular, vanishing news at the two endpoints removes the leading $r^{-1}$ velocity response while retaining the stated finite-radius and amplitude errors. The estimate concerns the specified local normalized family only; it does not compare arbitrary finite-amplitude Bondi metrics to their plane-profile limit. [step 1.2, step 2.1, step 2.2, step 4.1, algebra] ∎

## Remarks

The first identity is the classical shear-memory integral. The second is a large-radius, formal first-order Jacobi response with explicit screen, endpoint and remainder conditions. The quantitative clause additionally controls actual Jacobi fields for a fixed smooth normalized local metric family. It does not identify a finite-radius TT waveform with the limiting news without the stated $O(r^{-2})$ control, and its formal clause alone makes no finite-amplitude error estimate. It is neither an entropy statement nor a soft-graviton quantization result.
