---
id: ex-gr-fx06-2
kind: example
title: "Compact Cauchy slices in de Sitter block the Penrose conclusion"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
physical_scope: "An exact Lorentzian counterexample to omitting the noncompact-Cauchy hypothesis. The model is mathematical; no observational or matter interpretation is asserted."
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-euclidean-spheres-and-closed-balls
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - thm-heine-borel-rn
  - thm-closed-subspace-of-a-compact-space-is-compact
  - lem-gr-warped-spherical-christoffel-and-ricci
  - def-gr-smooth-lorentzian-objects
  - def-gr-causal-curves-and-reachability
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-fx-null-screen-geometry
  - def-gr-fx-trapped-surface-and-black-region
  - def-gr-fx-future-null-geodesic-completeness
  - lem-gr-fx-cauchy-slices-are-diffeomorphic
  - def-geodesic-of-an-affine-connection
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-cauchy-surface-implies-globally-hyperbolic
  - lem-gr-causal-curve-calculus
  - lem-gr-fx-trapped-boundary-compactness
  - thm-gr-fx-penrose-incompleteness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  lem-gr-warped-spherical-christoffel-and-ricci: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-fx-trapped-surface-and-black-region: mathematical-premise
  def-gr-fx-future-null-geodesic-completeness: mathematical-premise
  lem-gr-fx-cauchy-slices-are-diffeomorphic: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-fx-trapped-boundary-compactness: mathematical-premise
  thm-gr-fx-penrose-incompleteness: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §5.6 and its de Sitter exercises, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §§4.1–4.2."
      url: "https://arxiv.org/pdf/1410.5226"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Éric Gourgoulhon, From Geometry to Numerics: Interdisciplinary Aspects in Mathematical and Numerical Relativity, arXiv:0712.2332v2 (2008), §§2.2 and 6.2.2, full 72-page PDF."
      url: "https://arxiv.org/pdf/0712.2332"
generation:
  role: example
verification:
  precheck: pending
---

## Example

Assume the Axiom of Choice. For $H>0$, let $M_H$ be the hyperboloid
$$-X_0^2+X_1^2+X_2^2+X_3^2+X_4^2=H^{-2}$$
in five-dimensional Minkowski space, with its induced Lorentzian metric and future orientation. The global coordinates
$$X_0=H^{-1}\sinh(H\tau),\qquad (X_1,X_2,X_3,X_4)=H^{-1}\cosh(H\tau)\,\omega,\qquad \omega\in S^3$$
give $g=-d\tau^2+a(\tau)^2\gamma_{S^3}$ with $a(\tau)=H^{-1}\cosh(H\tau)$. Use geometric length coordinates: $\tau$ and affine parameters are in metres, $H$ is in $\mathrm m^{-1}$, and $g$ is dimensionless. Every slice $\Sigma_\tau=\{\tau\}\times S^3$ is a compact connected Cauchy hypersurface, and the spacetime is globally hyperbolic. Every future null geodesic is complete and $\operatorname{Ric}(v,v)=0$ for every null vector $v$. For any $\tau_0<0$, the equatorial sphere $S_{\tau_0}=\{\tau=\tau_0,\ \chi=\pi/2\}\cong S^2$ is future trapped, with both expansions equal to $2H\tanh(H\tau_0)<0$ (units $\mathrm m^{-1}$). Thus this model satisfies the trapped-surface and null-Ricci hypotheses and is null complete; its compact Cauchy slices show why the noncompact-Cauchy hypothesis in the Penrose theorem cannot be omitted.

## Example references

[[def-gr-fx-trapped-surface-and-black-region]]

[[def-gr-fx-future-null-geodesic-completeness]]

[[lem-gr-fx-cauchy-slices-are-diffeomorphic]]

[[lem-gr-warped-spherical-christoffel-and-ricci]]

[[lem-gr-fx-trapped-boundary-compactness]]

[[thm-gr-fx-penrose-incompleteness]]

## Diagram conventions

The diagram is a schematic conformal causal picture of the global coordinates. Put $\eta=\arcsin(\tanh(H\tau))$, so $-\pi/2<\eta<\pi/2$ and
$$g=H^{-2}\sec^2\eta\,(-d\eta^2+d\chi^2+\sin^2\chi\,d\Omega_2^2).$$
The drawn rectangle has $\chi\in[0,\pi]$ horizontally and $\eta\in[-\pi/2,\pi/2]$ vertically, on equal scales; radial null rays therefore have slope $\pm1$. Each interior point represents an $S^2$ orbit. The vertical sides are regular poles where that orbit collapses, not spacetime boundaries. The top and bottom are spacelike conformal boundaries $\mathcal C^\pm$, not points of $M_H$ and not null infinity. The middle line is a compact Cauchy $S^3$; the lower interior line marks $\tau_0<0$. The rays illustrate the two future null normal directions at the trapped sphere. No horizon is drawn, and the diagram is not used in the proof.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
  \draw[thick] (0,0) rectangle (4,4);
  \draw[dashed] (0,2) -- (4,2);
  \draw[dotted] (0,1.15) -- (4,1.15);
  \draw[very thick] (2,1.15) circle (0.055);
  \draw[->,thick] (2,1.15) -- (2.65,1.8) node[above right] {$\ell$};
  \draw[->,thick] (2,1.15) -- (1.35,1.8) node[above left] {$k$};
  \node[above] at (2,4) {$\mathcal C^+$};
  \node[below] at (2,0) {$\mathcal C^-$};
  \node[right] at (4,2) {$\tau=0:\ S^3$};
  \node[right] at (4,1.15) {$\tau_0<0$};
  \node[below left] at (0,0) {$\chi=0$};
  \node[below right] at (4,0) {$\chi=\pi$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $H>0$, the unit round metric on $S^3$, the induced hyperboloid metric, and Countable Choice and Dependent Choice as consequences of AC.

[F1] [[def-euclidean-spheres-and-closed-balls]] and [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]: $S^3$ is the unit sphere in $\mathbb R^4$ with its smooth round Riemannian metric, and its equatorial $S^2$ has the induced round metric.

[F2] [[lem-gr-warped-spherical-christoffel-and-ricci]]: for $q=-d\tau^2+a(\tau)^2d\chi^2$, $r=a(\tau)\sin\chi$, and $g=q+r^2\gamma_{S^2}$ on $\mathbb R\times(0,\pi)\times S^2$, the Ricci tensor is given by $\operatorname{Ric}_{AB}=\operatorname{Ric}(q)_{AB}-2r^{-1}\operatorname{Hess}_{AB}r$ and $\operatorname{Ric}_{ij}=(1-z-r\Delta_qr)\gamma_{ij}$, with the Christoffel symbols stated there.

[F3] [[def-gr-fx-trapped-surface-and-black-region]] and [[def-gr-fx-null-screen-geometry]]: a future trapped surface has both future null expansions negative; $\theta_\ell=\operatorname{tr}_q\chi_\ell$ with $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$.

[F4] [[def-geodesic-of-an-affine-connection]] and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: an affinely parametrized geodesic has zero covariant acceleration for the unique metric-compatible torsion-free connection.

[F5] [[def-gr-causal-curves-and-reachability]] and [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]: a Cauchy hypersurface is a spacelike hypersurface met exactly once by every inextendible causal curve.

[F6] [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]: under Countable Choice and Dependent Choice, the existence of a Cauchy set implies strong causality and compact causal diamonds, hence global hyperbolicity.

[F7] [[def-gr-smooth-lorentzian-objects]]: in a time-oriented Lorentzian manifold, a nonzero causal vector is future-directed exactly when its metric pairing with the future timelike orientation field is negative.

[F8] [[thm-heine-borel-rn]] and [[thm-closed-subspace-of-a-compact-space-is-compact]]: the unit sphere $S^3$ is compact, and closed subsets of compact spaces are compact.

[F9] [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies both dependent choice and countable choice.

[F10] [[lem-gr-fx-trapped-boundary-compactness]]: under Countable Choice and Dependent Choice, global hyperbolicity, a compact future trapped surface, null Ricci nonnegativity, and future null completeness, $E^+(S)$ is compact.

[F11] [[thm-gr-fx-penrose-incompleteness]]: under AC, global hyperbolicity, a compact future trapped surface, and null Ricci nonnegativity, the incompleteness conclusion also requires a connected noncompact smooth spacelike Cauchy hypersurface.

[F12] [[lem-gr-causal-curve-calculus]]: the coordinates of a causal curve are locally absolutely continuous; under Countable Choice and Dependent Choice their scalar coordinates obey the fundamental theorem of calculus on compact parameter subintervals.

[F13] [[lem-gr-fx-cauchy-slices-are-diffeomorphic]]: for a supplied complete timelike product flow and any smooth spacelike Cauchy hypersurface, projection along the flow is a diffeomorphism onto the product-flow slice; diffeomorphisms preserve compactness.

[A1] Assume the Axiom of Choice. Its Countable Choice and Dependent Choice consequences supply the choice hypotheses of the cited geometric and causal suppliers, including [F12] in step 1.2, [F6] in step 2.1, and [F10] in step 3.1.

## Verification

**Given:** [F1]–[F13] and [A1].

1.1 The map $\Phi_H(\tau,\omega)=(H^{-1}\sinh(H\tau),H^{-1}\cosh(H\tau)\omega)$ is a smooth bijection from $\mathbb R\times S^3$ onto $M_H$. Its inverse is $\tau=H^{-1}\operatorname{arsinh}(HX_0)$ and $\omega=(X_1,X_2,X_3,X_4)/\sqrt{H^{-2}+X_0^2}$, so it is a diffeomorphism. Pulling back the ambient metric $-dX_0^2+\sum_{i=1}^4dX_i^2$ gives $g=-d\tau^2+a^2\gamma_{S^3}$ with $a=H^{-1}\cosh(H\tau)>0$; hence $g$ is Lorentzian and $N=\partial_\tau$ is a smooth future timelike orientation. Let $\Sigma_0=\{X_0=0\}$ and identify $z_\omega=(0,H^{-1}\omega)\in\Sigma_0$. Then $\Psi(\tau,z_\omega):=\Phi_H(\tau,\omega)$ is a diffeomorphism $\mathbb R\times\Sigma_0\to M_H$ with $\Psi(0,z)=z$; each orbit is future timelike, and $\tau\to\pm\infty$ along its two ends prevents a limit point in $M_H$, so the orbit is inextendible. The unit sphere $S^3$ is compact by [F8] and connected because any two points are joined by a great-circle arc (with an intermediate point chosen for antipodal pairs). [F1, F7, F8, given, construct, algebra]

1.2 Let $\gamma(s)=(\tau(s),\omega(s))$ be any future causal curve. At almost every parameter its tangent is nonzero future causal, so $\dot\tau>0$ and $a(\tau)^2|\dot\omega|_{\gamma_{S^3}}^2\le\dot\tau^2$. Since $a(\tau)\ge H^{-1}$ and the round metric on $S^3$ is induced from $\mathbb R^4$, every angular component satisfies $|\dot\omega^j(s)|\le H\dot\tau(s)$ almost everywhere. By [F12], for any compact subinterval $[s_1,s_2]$ and each coordinate $j$,
$$|\omega^j(s_2)-\omega^j(s_1)|\le\int_{s_1}^{s_2}|\dot\omega^j(s)|\,ds\le H\bigl(\tau(s_2)-\tau(s_1)\bigr).$$
The function $\tau$ is strictly increasing, since its derivative is positive almost everywhere on every nondegenerate subinterval. If its future endpoint were a finite $b$, then $\tau(s)\uparrow b$ and the four component estimates make each $\omega^j(s)$ Cauchy as $s$ approaches the endpoint. Completeness of $\mathbb R$ gives a limit $\omega_b\in\mathbb R^4$, and continuity of the Euclidean norm gives $|\omega_b|=1$, so $\omega_b\in S^3$. Hence $\gamma(s)\to(b,\omega_b)$ in $M_H$, contradicting the definition of future-inextendibility; the vertical curve $\tau\mapsto(\tau,\omega_b)$ also exhibits a future timelike continuation. The same estimates at a finite past endpoint give a past limit and contradict past-inextendibility. Thus every inextendible causal curve has $\tau$-range $\mathbb R$. Continuity and strict monotonicity make every slice meet it exactly once. Each slice is smooth and spacelike with metric $a(\tau)^2\gamma_{S^3}$; it is compact and connected by [F1], [F8], hence is a compact connected Cauchy hypersurface. [A1, F1, F5, F7, F8, F9, F12, given, construct, algebra]

1.3 On $0<\chi<\pi$, write $\omega=(\cos\chi,\sin\chi\,\sigma)$ with $\sigma\in S^2$, so $g=q+r^2\gamma_{S^2}$ for $q=-d\tau^2+a^2d\chi^2$ and $r=a\sin\chi$. Directly from the two-dimensional Christoffel symbols $\Gamma^\tau_{\chi\chi}=aa'$ and $\Gamma^\chi_{\tau\chi}=a'/a$, one gets $\operatorname{Ric}(q)_{\tau\tau}=-a''/a$, $\operatorname{Ric}(q)_{\chi\chi}=aa''$, $\operatorname{Hess}_{\tau\tau}r=a''\sin\chi$, $\operatorname{Hess}_{\chi\chi}r=-a(1+a'^2)\sin\chi$, $z=\cos^2\chi-a'^2\sin^2\chi$, and $\Delta_qr=-a''\sin\chi-(1+a'^2)\sin\chi/a$. [F2, given, algebra]

1.4 Let $X(\lambda)$ be an affinely parametrized null geodesic on the hyperboloid. The tangential projection of the ambient flat derivative is torsion-free and compatible with the induced metric: projecting $D_UV$ removes only a normal component, which is orthogonal to every tangent field, while the ambient derivative preserves the metric and torsion. By uniqueness of the metric-selected connection, this projected derivative is the geodesic connection. Hence $X''(\lambda)$ is normal to the hyperboloid and is a scalar multiple $f(\lambda)X(\lambda)$. Differentiating $\langle X,X\rangle=H^{-2}$ twice gives $\langle X,X''\rangle=-\langle X',X'\rangle=0$; because $\langle X,X\rangle=H^{-2}>0$, $f=0$. Therefore $X(\lambda)=X_0+(\lambda-\lambda_0)V$ with constant null $V$ and $\langle X_0,V\rangle=0$. This entire affine line remains on the hyperboloid, so every null geodesic extends through every finite affine parameter; in particular all future null geodesics are complete. [F4, given, construct, algebra]

1.5 Fix $\tau_0<0$ and set $S_{\tau_0}=\{\tau=\tau_0,\chi=\pi/2\}$. This is a smooth embedded equatorial $S^2$ with positive induced metric $q_S=a(\tau_0)^2\gamma_{S^2}$ and is compact by [F1], [F8]. Its future null normals $\ell=\partial_\tau+a^{-1}\partial_\chi$ and $k=\partial_\tau-a^{-1}\partial_\chi$ satisfy $g(\ell,\ell)=g(k,k)=0$, $g(\ell,k)=-2$, and $g(\ell,N)=g(k,N)=-1$, so they are normalized future null normals by [F7]. [F1, F7, F8, given, construct, algebra]

2.1 By [F6] and [F9], the assumed Axiom of Choice supplies Countable Choice and Dependent Choice, so the existence of $\Sigma_0$ makes $M_H$ globally hyperbolic. [A1, F6, F9, step 1.2]

2.2 Since $a''=H^2a$ and $1+a'^2=H^2a^2$, [F2] and step 1.3 give $\operatorname{Ric}_{\tau\tau}=-3H^2$, $\operatorname{Ric}_{\chi\chi}=3H^2a^2$, $\operatorname{Ric}_{\tau\chi}=0$, and $\operatorname{Ric}_{ij}=3H^2r^2\gamma_{ij}$. Thus $\operatorname{Ric}=3H^2g$ on the regular spherical chart; both tensors are smooth on the global hyperboloid, so equality extends by continuity to the two poles. Consequently $\operatorname{Ric}(v,v)=3H^2g(v,v)=0$ for every null vector. [F2, step 1.1, step 1.3, algebra]

2.3 The mixed Christoffel symbols in [F2] give $\nabla_X\partial_\tau=(a'/a)X$ and $\nabla_X\partial_\chi=(\partial_\chi r/r)X=(\cot\chi)X$ for every angular tangent vector $X$. Thus at $\chi=\pi/2$, $\chi_\ell=(a'/a)q_S$ and $\chi_k=(a'/a)q_S$. Tracing in two dimensions gives $\theta_\ell=\theta_k=2a'/a=2H\tanh(H\tau_0)<0$. So $S_{\tau_0}$ is future trapped by [F3]. [F2, F3, step 1.5, algebra]

3.1 The spacetime is globally hyperbolic by step 2.1, has the compact trapped surface of step 2.3, satisfies the null Ricci condition by step 2.2, and is future null complete by step 1.4. By [F9] and the assumed AC, the choice hypotheses of [F10] also hold, so [F10] gives compactness of $E^+(S_{\tau_0})$, consistently with the compact Cauchy slices in step 1.2. [A1, F9, F10, step 1.2, step 2.1, step 2.2, step 1.4, step 2.3]

4.1 By [F13], applied to the complete timelike product flow $\Psi$ from step 1.1 and the compact slice $\Sigma_0$ from step 1.2, every smooth spacelike Cauchy hypersurface of $M_H$ is diffeomorphic to $\Sigma_0$ and hence compact. The model satisfies AC, global hyperbolicity, the compact trapped-surface, and null-Ricci hypotheses of [F11], but has no connected noncompact smooth spacelike Cauchy hypersurface. It is therefore outside the theorem’s scope while remaining future null complete; the noncompact-Cauchy condition cannot simply be omitted. [A1, F9, F11, F13, step 1.1, step 1.2, step 2.1, step 2.2, step 1.4, step 2.3] ∎
