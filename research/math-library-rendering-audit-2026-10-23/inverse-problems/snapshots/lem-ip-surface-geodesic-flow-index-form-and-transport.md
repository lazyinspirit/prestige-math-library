---
id: lem-ip-surface-geodesic-flow-index-form-and-transport
kind: lemma
title: "Surface geodesic flow, index form, and transport primitive"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-surface-and-geodesic-xray-transform
  - def-riemannian-volume-density
  - def-jacobi-field
  - def-curvature-of-an-affine-connection
  - def-riemann-curvature-four-tensor
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - def-riemannian-distance-on-a-connected-manifold
  - thm-riemannian-distance-is-a-metric
  - thm-the-riemannian-distance-topology-is-the-manifold-topology
  - prop-length-dominates-endpoint-distance
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, §§3.5–3.7, printed pp. 77–100; Chapter 4, §§4.2 and 4.4, printed pp. 113–119."
    - title: "Joonas Ilmavirta, Geometry of geodesics, full lecture notes"
      url: "https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf"
      locator: "Chapter 8, §8.2, PDF pp. 53–59; Chapter 13, §§13.1–13.3, PDF pp. 87–91."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, author-hosted lecture notes"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§§2.4.1–2.4.2, PDF pp. 11–18."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, connected, nonempty, oriented smooth Riemannian surface with smooth strictly convex boundary, no conjugate points, and nontrapping geodesic flow. Let $SM=\{(x,v):x\in M,\ v\in T_xM,\ g_x(v,v)=1\}$, and let $\varphi_t$ denote its unit-speed geodesic flow up to boundary exit. For $w\in C^\infty(SM)$ define the geodesic vector field by $Xw=\left.\frac{d}{dt}\right|_{0}w(\varphi_t(x,v))$. Define the vertical vector field by $Vw(x,v)=\left.\frac{d}{d\theta}\right|_{0}w(x,\cos\theta\,v+\sin\theta\,v^\perp)$, where $v^\perp$ is the positive $90$-degree rotation of $v$, and put $X^\perp=[X,V]$. The Liouville measure is $d\Sigma=dV_g(x)\,dS_x(v)$, with induced boundary measure $d\Sigma_{\partial}=dS_{\partial M}(x)\,dS_x(v)$; write $\mu(x,v)=g_x(v,\nu_{\mathrm{in}}(x))$ on $\partial_+SM$.

In a positive orthonormal frame $e_1,e_2$, define $K(x)=g(R(e_1,e_2)e_2,e_1)$; this scalar is independent of the frame. For a positive-length unit-speed geodesic $\gamma:[0,L]\to M$ and a smooth normal field $Y$ with $Y(0)=Y(L)=0$, define the index form
$$
\mathcal I_\gamma(Y,Y)=\int_0^L\left(|D_tY|_g^2-g(R(Y,\dot\gamma)\dot\gamma,Y)\right)dt.
$$
Then $d\Sigma$ is preserved by $\varphi_t$, and the commutators are $[X,V]=X^\perp$, $[V,X^\perp]=X$, and $[X,X^\perp]=-KV$. If $a,b\in C^\infty(SM)$ and $ab=0$ on $\partial SM$, then each $Y\in\{X,V,X^\perp\}$ satisfies $\int_{SM}(Ya)b\,d\Sigma=-\int_{SM}a(Yb)\,d\Sigma$. For every $h\in C(SM)$, Santaló's formula is
$$
\int_{SM}h\,d\Sigma=\int_{\partial_+SM}\mu(x,v)\int_0^{\tau_+(x,v)}h(\varphi_t(x,v))\,dt\,d\Sigma_\partial.
$$
The index form is positive definite: $\mathcal I_\gamma(Y,Y)>0$ whenever $Y\not\equiv0$. Finally, if $f\in C_c^\infty(M^\circ)$ and $I_0f=0$, then
$$
u_f(x,v)=\int_0^{\tau_+(x,v)}f(\gamma_{x,v}(t))\,dt
$$
extends to a smooth function compactly supported in $SM^\circ$, satisfies $Xu_f=-f$, and vanishes on $\partial SM$. For smooth $a,b$ with $ab=0$ on $\partial SM$, integration by parts holds for $X$ and $X^\perp$; for $V$, which is tangent to $\partial SM$, it holds for all smooth $a,b$.

## Statement references

[[def-ip-simple-surface-and-geodesic-xray-transform|Definition of a simple surface and its scalar transform]]

[[def-riemannian-volume-density|Definition of Riemannian volume density]]

[[def-jacobi-field|Definition of a Jacobi field]]

[[def-curvature-of-an-affine-connection|Definition of curvature of an affine connection]]

[[def-riemann-curvature-four-tensor|Definition of the Riemann curvature four-tensor]]

[[def-levi-civita-connection|Definition of the Levi-Civita connection]]

[[thm-fundamental-theorem-of-riemannian-geometry|Fundamental theorem of Riemannian geometry]]

[[def-riemannian-metric-and-riemannian-manifold|Definition of a Riemannian metric]]

[[def-riemannian-speed-and-length|Definition of Riemannian speed and length]]

[[def-riemannian-distance-on-a-connected-manifold|Definition of Riemannian distance]]

[[thm-riemannian-distance-is-a-metric|Theorem that Riemannian distance is a metric]]

[[thm-the-riemannian-distance-topology-is-the-manifold-topology|Theorem identifying the distance and manifold topologies]]

[[prop-length-dominates-endpoint-distance|Proposition that length dominates endpoint distance]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves|Local existence, uniqueness, and smooth dependence for integral curves]]

[[thm-parametrized-implicit-function-theorem-with-higher-regularity|Parametrized implicit function theorem with $C^k$ regularity]]

## Facts & Assumptions

**Given:** A compact, connected, nonempty oriented smooth Riemannian surface with smooth strictly convex boundary, no conjugate points, and nontrapping geodesic flow; a scalar $f\in C_c^\infty(M^\circ)$ with $I_0f=0$; and a smooth function $h$ on $SM$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: simple means strict convexity, absence of Jacobi fields vanishing at two distinct parameters, and finite forward and backward exit times; $I_0f$ integrates the scalar pullback along unit-speed boundary-to-boundary geodesics.

[F2] [[def-riemannian-volume-density]]: in coordinates with metric matrix $G_x$, the base density is $dV_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$.

[F3] [[thm-fundamental-theorem-of-riemannian-geometry]]: a supplied smooth Riemannian metric, including one up to a smooth boundary, has a unique Levi-Civita connection; [[def-levi-civita-connection]] states that this connection is metric-compatible and torsion-free.

[F4] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: every smooth local vector field has unique local integral curves depending smoothly on initial data.

[F5] [[def-jacobi-field]]: along a geodesic, a Jacobi field satisfies $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$.

[F6] [[def-curvature-of-an-affine-connection]]: $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; [[def-riemann-curvature-four-tensor]] defines $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$, positive on the unit round sphere.

[F7] [[def-riemannian-metric-and-riemannian-manifold]]: $g$ is positive definite; [[def-riemannian-speed-and-length]]: the length of a unit-speed curve on a time interval is the length of that interval; [[def-riemannian-distance-on-a-connected-manifold]]: $d_g$ is the infimum of lengths of piecewise $C^1$ curves; [[thm-riemannian-distance-is-a-metric]]: $d_g$ is a finite metric; [[thm-the-riemannian-distance-topology-is-the-manifold-topology]]: its metric topology is the manifold topology; [[prop-length-dominates-endpoint-distance]]: endpoint distance is at most curve length.

[F8] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: if a $C^k$ map $F(z,t)$ vanishes at $(z_0,t_0)$ and $\partial_tF(z_0,t_0)\ne0$, then near $z_0$ its zero set near $t_0$ is the graph of a unique $C^k$ function $t=T(z)$. If $F$ is smooth, applying this for every finite $k$ shows that $T$ is smooth.

## Proof

1.1 In a boundary chart the metric coefficients are smooth up to the boundary, so its Levi-Civita Christoffel coefficients extend locally to smooth coefficients on an open chart. The geodesic equation is the smooth first-order system $(\dot x^i,\dot v^k)=(v^i,-\Gamma^k_{ij}(x)v^iv^j)$ on the chart tangent coordinates. [F3, F4, given]

1.2 On an oriented coordinate patch choose a positive orthonormal frame $e_1,e_2$ and write $\nabla e_1=\omega e_2$, $\nabla e_2=-\omega e_1$. With $v=\cos\theta\,e_1+\sin\theta\,e_2$ and $v^\perp=-\sin\theta\,e_1+\cos\theta\,e_2$, the fibre density is $d\theta$ and $d\Sigma=dV_g\,d\theta$. A change of positive orthonormal frame changes $\theta$ by a smooth rotation angle depending on $x$; its coordinate Jacobian is triangular with fibre derivative $1$, so this density is independent of the frame. [F2, F3, given]

2.1 The local ODE result in [F4] gives unique geodesic arcs with smooth dependence on initial state. The coordinate equations agree on overlaps because they are the covariant equation $D_t\dot\gamma=0$; metric compatibility gives $\frac{d}{dt}g(\dot\gamma,\dot\gamma)=2g(D_t\dot\gamma,\dot\gamma)=0$. Thus the local arcs patch uniquely on their common intervals and unit-speed initial states remain in $SM$ until exit. [F3, F4, step 1.1]

2.2 The horizontal lifts are $H_i=e_i-\omega(e_i)V$ and $X=\cos\theta\,H_1+\sin\theta\,H_2$. At fixed $\theta$, the base divergence of $v$ is $\operatorname{div}_g v=\omega(v^\perp)$, while the vertical coefficient of $X$ is $-\omega(v)$ and its $\theta$-derivative is $-\omega(v^\perp)$. Hence $\operatorname{div}_{d\Sigma}X=0$. Also $\operatorname{div}_{d\Sigma}V=0$ because $V=\partial_\theta$, and $\operatorname{div}_{d\Sigma}X^\perp=0$ because $X^\perp=[X,V]$ and $\operatorname{div}[X,V]=X(\operatorname{div}V)-V(\operatorname{div}X)$. The local flow equation for the density is $\frac{d}{dt}\varphi_t^*d\Sigma=\varphi_t^*(\operatorname{div}_{d\Sigma}X\,d\Sigma)=0$, so the geodesic flow preserves $d\Sigma$ until boundary exit. [F2, F3, step 1.2, algebra]

2.3 Write $\omega_i=\omega(e_i)$. The curvature definition gives $R(e_1,e_2)e_1=d\omega(e_1,e_2)e_2$ and $R(e_1,e_2)e_2=-d\omega(e_1,e_2)e_1$, so $d\omega=-K\,dV_g$ for $K=g(R(e_1,e_2)e_2,e_1)$. First-slot skewness follows from [F6]; last-slot skewness follows by applying metric compatibility in [F3] to $g(R(A,B)C,D)+g(C,R(A,B)D)$. Under a positive rotation of $(e_1,e_2)$, each alternating pair in $g(R(e_1,e_2)e_2,e_1)$ is multiplied by the determinant $1$, so $K$ is frame-independent. Torsion-freeness gives $[e_1,e_2]=-\omega_1e_1-\omega_2e_2$ and direct expansion of $H_i=e_i-\omega_iV$ gives $[H_1,H_2]=-\omega_1H_1-\omega_2H_2+KV$. Put $c=\cos\theta$, $s=\sin\theta$, $X=cH_1+sH_2$, and $X^\perp=sH_1-cH_2$. Since $V(c)=-s$ and $V(s)=c$, the definitions give $[X,V]=X^\perp$ and $[V,X^\perp]=X$. In $[X,X^\perp]$, the horizontal-frame bracket contributes $-[H_1,H_2]=\omega_1H_1+\omega_2H_2-KV$; differentiating the coefficients $c,s$ along $H_i$ contributes $-\omega_1H_1-\omega_2H_2$, leaving $[X,X^\perp]=-KV$. [F3, F6, step 1.2, algebra]

3.1 Let $\rho$ be a boundary defining function, positive in $M^\circ$. At a boundary point, $\nu_{\mathrm{out}}=-\nabla\rho/|d\rho|_g$. For tangent $w$, differentiation gives $\operatorname{Hess}\rho(w,w)=-|d\rho|_g\,g(\nabla_w\nu_{\mathrm{out}},w)<0$. Along a geodesic tangent to the boundary, $\frac{d^2}{dt^2}\rho(\gamma(t))=\operatorname{Hess}\rho(\dot\gamma,\dot\gamma)<0$, so the geodesic lies outside $M$ on both sides near tangency. Therefore a geodesic arriving from the interior exits transversely. For an interior initial state $z_0$, nontrapping gives a finite first exit time $t_0=\tau_+(z_0)$. In a local chart of $SM$ near $z_0$, choose a boundary defining function $\rho$ near the exit and extend the geodesic ODE locally across the boundary in a boundary chart. A finite composition of the local flows from [F4] gives the smooth map $F(z,t)=\rho(\varphi_t(z))$ near $(z_0,t_0)$. Transversality gives $F(z_0,t_0)=0$ and $\partial_tF(z_0,t_0)=d\rho_{\gamma_{z_0}(t_0)}(\dot\gamma_{z_0}(t_0))\ne0$. For each finite $k\ge1$, [F8] gives a local $C^k$ root $t=T(z)$; applying this for every $k$ makes $T$ smooth. For each $\epsilon>0$ with $\epsilon<t_0$, the compact arc $\gamma_{z_0}([0,t_0-\epsilon])$ and compact boundary are disjoint, so their positive distance in the metric topology [F7] keeps nearby arcs interior on that interval. Transversality gives a unique crossing near $t_0$; shrinking the neighborhood therefore makes the IFT root the first exit for nearby interior states. Thus the exit time is smooth near every interior initial state. [F1, F3, F4, F7, F8, step 2.1]

3.2 For $Y\in\{X,V,X^\perp\}$, the local density formula for divergence gives $\operatorname{div}_{d\Sigma}(abY)=(Ya)b+a(Yb)$ because $\operatorname{div}_{d\Sigma}Y=0$. Integrating in coordinate charts and applying one-variable integration by parts gives the boundary flux term $\int_{\partial SM}ab\,\iota_Yd\Sigma$. It vanishes for $X$ and $X^\perp$ when $ab=0$ on $\partial SM$; for $V$ it vanishes for arbitrary $a,b$ because $V$ rotates only the fibre and is tangent to $\partial SM$. A finite chart cover and a partition of unity sum these local identities to yield the asserted global formulas. [F2, step 2.2, algebra]

3.3 Fix a unit-speed segment $\gamma:[0,L]\to M$. Since $M$ is oriented, let $Q$ be positive rotation by $90$ degrees on each tangent plane. In any local positive orthonormal frame $e_1,e_2=Qe_1$, metric compatibility gives $\nabla_Ae_1=\omega(A)e_2$ and $\nabla_Ae_2=-\omega(A)e_1$; for $e_1$, $(\nabla_AQ)e_1=\nabla_Ae_2-Q(\omega(A)e_2)=-\omega(A)e_1+\omega(A)e_1=0$, and for $e_2$, $(\nabla_AQ)e_2=\nabla_A(-e_1)-Q(-\omega(A)e_1)=-\omega(A)e_2+\omega(A)e_2=0$. Thus $\nabla Q=0$ and $n(t)=Q\dot\gamma(t)$ is a parallel unit normal along the whole segment. By [F5], the scalar coefficient $j$ in the Jacobi field $j n$ solves $j''+K(\gamma(t))j=0$. Let $j(0)=0$, $j'(0)=1$. This solution is positive for $0<t\le L$: it is positive near $0$, and a later zero would give a nonzero Jacobi field vanishing at both endpoints of a positive-length subsegment, contradicting [F1]. [F1, F3, F4, F5, step 2.3]

3.4 If $\operatorname{supp}f=\varnothing$, then $f=0$ and $u_f=0$, so the transport claim is immediate; assume henceforth that the support is nonempty. The nontrapping hypothesis and existence of an interior unit geodesic from step 2.1 imply $\partial M\ne\varnothing$. The unit circle bundle $SM$ is compact: cover compact $M$ by finitely many smaller coordinate neighborhoods with closures inside charts carrying smooth orthonormal frames; each part of $SM$ over such a closure is homeomorphic to the product of that compact closure with $S^1$, so finitely many compact sets cover $SM$. Define $D=\min\{d_g(x,y):x\in\partial M,\ y\in\operatorname{supp}f\}$. These disjoint sets are compact in the metric topology by [F7], so the minimum is attained and is positive because $d_g$ is a metric. For a subset $A$, write $d_g(x,A)=\inf_{a\in A}d_g(x,a)$. [F1, F4, F7, given, step 2.1, choose]

4.1 Every interior state has a unique backward geodesic to its first boundary hit, and transversality in step 3.1 puts that state in $\partial_+SM$. Thus $(z,t)\mapsto\varphi_t(z)$ maps $z\in\partial_+SM$, $0<t<\tau_+(z)$ bijectively onto $SM^\circ$. In a boundary coordinate and the fibre angle, adjoining the flow-time column to the two boundary-state tangent columns gives the volume determinant $|g(v,\nu_{\mathrm{in}})|=\mu(z)$ at $t=0$: the fibre column supplies $dS_x(v)$, the boundary column supplies $dS_{\partial M}(x)$, and the component of the flow column normal to $\partial M$ is $g(v,\nu_{\mathrm{in}})$. Since the flow preserves $d\Sigma$ by step 2.2, that determinant is constant along each flow line. The change-of-variables formula therefore gives Santaló's identity; tangential boundary states form a measure-zero set and contribute nothing. [F1, step 3.1, step 2.2, step 3.2]

4.2 Write an endpoint-zero normal field as $Y=y n$ and set $q=y/j$ on $(0,L]$. Since $y(0)=j(0)=0$ and $j'(0)=1$, both functions factor smoothly as $t$ times a smooth function and $q$ extends smoothly to $0$; also $q(L)=0$. Expanding $y=j q$ and using $j''+Kj=0$ gives $(y')^2-Ky^2=j^2(q')^2+(jj'q^2)'$. The boundary term $jj'q^2$ vanishes at $0$ because $j(0)=0$ and at $L$ because $q(L)=0$. Consequently $\mathcal I_\gamma(Y,Y)=\int_0^L j^2(q')^2dt\ge0$, with equality only if $q$ is constant and hence zero from $q(L)=0$. Thus the index form is positive definite. [F1, F5, step 3.3, algebra]

4.3 If $d_g(x,\partial M)<D/4$, the triangle inequality gives $d_g(x,\operatorname{supp}f)>3D/4$; hence a unit-speed curve from $x$ cannot reach the support before time $D/2$, since its length equals elapsed time and endpoint distance is at most length. Fix any $z=(x,v)\in\partial SM$ and a boundary chart with defining coordinate $\rho$ positive inside. If $v$ is transverse, choose the one of $v,-v$ pointing outward; after shrinking a neighborhood, $\rho'(t)<-c<0$ up to some $t_0<D/2$, and nearby interior states have $\rho(0)<ct_0$, so this ray exits by $t_0$. If $v$ is tangent, step 3.1 gives $\rho''(0)<0$. Choose $t_0<D/2$ small enough to remain in the chart; after shrinking a neighborhood, $\rho''(t)<-c<0$ for $0\le t\le t_0$, while $\rho(0)<ct_0^2/8$ and $|\rho'(0)|<ct_0/4$. Taylor's formula yields $\rho(t_0)\le\rho(0)+t_0\rho'(0)-ct_0^2/2<0$, so the geodesic has exited by $t_0$. In either case there is a neighborhood of $z$ and one fixed orientation whose forward ray exits before reaching $\operatorname{supp}f$. Shrink each such neighborhood so every state in it also has base point at distance less than $D/4$ from $\partial M$. Compactness of $\partial SM$ from step 3.4 gives a finite subcover, whose union contains an open neighborhood of $\partial SM$ with the same property. [F1, F4, F7, step 3.1, step 3.4, choose, algebra]

5.1 At every non-tangent boundary state, the relevant first boundary hit is transverse: it is the time-zero hit for an outgoing state and the finite future exit for an incoming state. In local coordinates for the extension across the boundary, choose a boundary defining function near the hit and extend the geodesic ODE. The finite-time smooth dependence established in step 3.1 and [F8] give a smooth local root of $F(z,t)=\rho(\varphi_t(z))=0$. For an outgoing state the nonzero outward derivative makes this root the first exit for nearby interior states. For an incoming state the initial inward derivative gives a short interior segment; each compact middle segment before the final hit has positive distance from $\partial M$ by [F7], and the final transverse crossing is the IFT root, so it remains the first exit for nearby states. Therefore the integration endpoint and integral defining $u_f$ depend smoothly on the initial state near every non-tangent boundary state. In the neighborhood from step 4.3, one of $u_f(x,v)$ and $u_f(x,-v)$ is zero by the support separation. Their sum is the full boundary-to-boundary integral of $f$ along the same unoriented geodesic, which is $I_0f=0$ by [F1]; therefore both vanish throughout that neighborhood. Thus $u_f$ is zero near $\partial SM$, removing the glancing singularity and making it smooth with compact support in $SM^\circ$, since $SM$ is compact by step 3.4. Along the flow, $u_f(\varphi_s(x,v))=\int_s^{\tau_+(x,v)}f(\varphi_t(x,v))dt$, so differentiation gives $Xu_f=-f$. The incoming boundary value is $I_0f=0$ and the outgoing value is zero because its future exit time is zero. [F1, F4, F7, F8, step 3.1, step 3.4, step 4.3, algebra] ∎




## Source locator

The source comparisons and item-specific dispositions are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38.coverage.json` and the batch notes.
