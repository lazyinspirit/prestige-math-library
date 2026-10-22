---
id: thm-ip-2d-simple-surface-xray-injectivity
kind: theorem
title: "Unweighted scalar geodesic X-ray injectivity on simple surfaces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-surface-and-geodesic-xray-transform
  - lem-ip-surface-geodesic-flow-index-form-and-transport
  - lem-ip-pestov-identity-for-geodesic-data
  - lem-ip-orientation-cover-preserves-simplicity
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-curvature-of-an-affine-connection
  - def-riemann-curvature-four-tensor
  - def-riemannian-volume-density
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 4, §4.4, printed pp. 119–121; Chapter 3, §§3.6–3.7, printed pp. 91–100."
    - title: "Joonas Ilmavirta, Geometry of geodesics, full lecture notes"
      url: "https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf"
      locator: "Chapter 13, §13.4, Theorem 13.5, printed/PDF p. 93; §13.2, Lemma 13.1, p. 90; §13.3, Proposition 13.2 and Lemma 13.3, pp. 91–92."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, author-hosted lecture notes"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.4.2, PDF pp. 13–18."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian surface with smooth boundary. Write $\nu_{\mathrm{out}}$ for its outward unit normal and use the curvature convention $R(A,B)C=\nabla_A\nabla_BC-\nabla_B\nabla_AC-\nabla_{[A,B]}C$. Write $D_tJ=\nabla_{\dot\gamma}J$; a Jacobi field along a unit-speed geodesic $\gamma$ is a smooth field $J$ satisfying $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$. Assume $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for every nonzero boundary-tangent vector $w$, no nonzero Jacobi field on any positive-length unit-speed geodesic segment vanishes at both endpoints, and every maximal unit-speed geodesic starting in $M^\circ$ reaches $\partial M$ in finite forward and backward time. Set $SM=\{(x,v):x\in M,\ g_x(v,v)=1\}$ and $\partial_+SM=\{(x,v)\in SM:x\in\partial M,\ g_x(v,-\nu_{\mathrm{out}})>0\}$. For a real-valued $f\in C_c^\infty(M^\circ,\mathbb R)$ and $(x,v)\in\partial_+SM$, let $\gamma_{x,v}$ be the unit-speed geodesic with initial data $(x,v)$, let $\tau_+(x,v)$ be its first positive boundary-exit time, and define
$$
I_0f(x,v)=\int_0^{\tau_+(x,v)} f(\gamma_{x,v}(t))\,dt.
$$
Then $I_0f=0$ on $\partial_+SM$ implies $f=0$ on $M$. No orientability assumption on $M$ is required.

## Statement references

[[def-ip-simple-surface-and-geodesic-xray-transform|Definition of simple surfaces and incoming geodesic data]]

[[lem-ip-surface-geodesic-flow-index-form-and-transport|Transport, Santaló, and index-form facts for simple surfaces]]

[[lem-ip-pestov-identity-for-geodesic-data|Pestov identity for geodesic data]]

[[lem-ip-orientation-cover-preserves-simplicity|Orientation-cover lifting of simple geometry and X-ray data]]

## Facts & Assumptions

**Given:** A simple compact connected nonempty smooth Riemannian surface $M$, a real scalar $f\in C_c^\infty(M^\circ)$, and zero boundary geodesic X-ray data $I_0f=0$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: simple means strictly convex boundary, no conjugate points, and finite forward/backward exit times; $I_0f$ is the integral of $f$ over each unit-speed boundary-to-boundary geodesic.

[F2] [[lem-ip-orientation-cover-preserves-simplicity]]: every connected component of the tangent orientation cover with pullback metric is compact, connected, oriented, and simple; its projection is a local isometry onto $M$.

[F3] [[lem-ip-orientation-cover-preserves-simplicity]]: $I_{0,C}(f\circ\pi)(\widetilde z)=I_{0,M}f(\pi(\widetilde z))$ for every incoming state $\widetilde z$ on a component $C$.

[F4] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: zero scalar data gives a smooth compactly supported transport primitive $u$ with $Xu=-f$ and $u|_{\partial SM}=0$; $V$ is tangent to $\partial SM$.

[F5] [[lem-ip-pestov-identity-for-geodesic-data]]: for smooth real $u$ vanishing on the boundary of an oriented simple surface, $\|VXu\|^2=\|XVu\|^2-(KVu,Vu)+\|Xu\|^2$.

[F6] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: $d\Sigma=dV_g(x)\,dS_x(v)$ and Santaló's formula is $\int_{SM}h\,d\Sigma=\int_{\partial_+SM}\mu\int_0^{\tau_+}h(\varphi_t(z))\,dt\,d\Sigma_\partial$ for continuous $h$; [[def-riemannian-volume-density]]: in coordinates $dV_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$.

[F7] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: $\mathcal I_\gamma(Y,Y)=\int_0^L(|D_tY|^2-g(R(Y,\dot\gamma)\dot\gamma,Y))\,dt$ for endpoint-zero normal fields.

[F8] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: the index form is positive for each nonzero endpoint-zero normal field.

[F9] [[thm-fundamental-theorem-of-riemannian-geometry]]: the metric has a unique Levi-Civita connection.

[F10] [[def-levi-civita-connection]]: the Levi-Civita connection is metric-compatible and torsion-free.

[F11] [[def-curvature-of-an-affine-connection]]: $R(A,B)C=\nabla_A\nabla_BC-\nabla_B\nabla_AC-\nabla_{[A,B]}C$.

[F12] [[def-riemann-curvature-four-tensor]]: $\operatorname{Rm}(A,B,C,D)=g(R(A,B)C,D)$.

## Proof

1.1 If $f=0$, the conclusion holds; assume $f\ne0$ for contradiction. Let $C$ be any connected component of the tangent orientation cover of $M$ and let $\widetilde f=f\circ\pi$ on $C$. By [F2], $C$ is a compact oriented simple surface and $I_{0,C}\widetilde f=0$. The transport conclusion of [F4] supplies $u\in C_c^\infty(SC^\circ)$ with $Xu=-\widetilde f$ and $u=0$ on $\partial SC$. [F1, F2, F3, F4, given]

2.1 The vector field $V$ is vertical, so it differentiates functions along a fixed fibre and $V\widetilde f=0$. Applying [F4] and [F5] to $u$ gives $0=\|VXu\|^2=\|XVu\|^2-(KVu,Vu)+\|Xu\|^2$. [F4, F5, step 1.1]

3.1 By [F4], $Vu=0$ on $\partial SC$: $V$ is tangent to that boundary and $u$ vanishes there. Fix any incoming unit geodesic $\gamma:[0,L]\to C$, and let $Q$ denote positive rotation by $90$ degrees on each oriented tangent plane. In a positive orthonormal frame $e_1,e_2=Qe_1$, metric compatibility gives $\nabla_Ae_1=\omega(A)e_2$ and $\nabla_Ae_2=-\omega(A)e_1$ for a scalar one-form $\omega$. Using $(\nabla_AQ)e_i=\nabla_A(Qe_i)-Q\nabla_Ae_i$, we get $(\nabla_AQ)e_1=-\omega(A)e_1+\omega(A)e_1=0$ and $(\nabla_AQ)e_2=-\omega(A)e_2+\omega(A)e_2=0$, so $\nabla Q=0$ and $n(t)=Q\dot\gamma(t)$ is a parallel unit normal. The scalar function $w(t)=Vu(\gamma(t),\dot\gamma(t))$ has $w(0)=w(L)=0$, and put $Y(t)=w(t)n(t)$; then $|D_tY|^2=(w')^2$. The positive frame $(\dot\gamma,n)$ gives $K=g(R(\dot\gamma,n)n,\dot\gamma)$. The curvature definition gives $R(n,\dot\gamma)=-R(\dot\gamma,n)$; metric compatibility and the scalar commutator identity give $0=A(Bg(C,D))-B(Ag(C,D))-[A,B]g(C,D)=g(R(A,B)C,D)+g(C,R(A,B)D)$. Taking $A=\dot\gamma$, $B=n$, $C=\dot\gamma$, and $D=n$ yields $g(R(\dot\gamma,n)\dot\gamma,n)=-K$, hence $g(R(n,\dot\gamma)\dot\gamma,n)=K$. Therefore $\int_0^L((XVu)^2-K(Vu)^2)(\gamma(t),\dot\gamma(t))\,dt=\mathcal I_\gamma(Y,Y)\ge0$, with equality allowed only when $Y=0$, by [F8]. [F4, F7, F8, F9, F10, F11, F12, step 1.1, step 2.1]

4.1 Apply Santaló's formula from [F6] to the continuous function $(XVu)^2-K(Vu)^2$ on $SC$. Step 3.1 shows that its integral over each boundary-to-boundary geodesic is nonnegative; the incoming flux weight is positive. Hence $\|XVu\|^2-(KVu,Vu)=\int_{SC}((XVu)^2-K(Vu)^2)\,d\Sigma\ge0$. [F6, step 3.1, algebra]

5.1 Since $Xu=-\widetilde f$, the remaining term in step 2.1 is $\|Xu\|^2=\|\widetilde f\|^2$. Under the standing assumption $f\ne0$, choose an interior point $x$ with $f(x)\ne0$; continuity gives an open neighborhood on which $f$ is nonzero. By [F2], $\pi|_C$ is onto and a local diffeomorphism, so $\widetilde f$ is nonzero on a nonempty open subset of $C$; [F6] supplies a smooth positive Liouville density, making $\|\widetilde f\|^2>0$. This contradicts step 2.1 together with the nonnegative quantity in step 4.1. Therefore $f=0$. [F2, F6, step 1.1, step 2.1, step 4.1, choose] ∎






## Source locator

The source comparisons and item-specific dispositions are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38.coverage.json` and the batch notes.
