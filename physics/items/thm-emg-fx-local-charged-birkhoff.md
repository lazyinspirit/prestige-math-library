---
id: thm-emg-fx-local-charged-birkhoff
kind: theorem
title: Local charged Birkhoff rigidity away from critical areal gradients
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-fx-spherical-quotient
  - def-emg-fx-spherical-orbit-geometry
  - lem-emg-fx-two-dimensional-ricci-trace
  - lem-emg-fx-warped-curvature
  - def-emg-xs-rn-data
  - def-countable-choice
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-ftc-first-part
  - def-lie-bracket-of-smooth-vector-fields
dependency_roles:
  def-emg-fx-spherical-quotient: mathematical-premise
  def-emg-fx-spherical-orbit-geometry: mathematical-premise
  lem-emg-fx-two-dimensional-ricci-trace: mathematical-premise
  lem-emg-fx-warped-curvature: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 3, Theorem 1 proof and equations (8)–(9), PDF pp. 3–4: local static or homogeneous character for non-null areal-radius gradient and the RN-(A)dS family; the exact warped proof here is reconstructed locally."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Sections 6.1.1, 6.2.1 and 6.2.5, printed pp. 234–236, 259–260 and 266–268 (PDF pp. 241–243, 266–267 and 273–275): Birkhoff proof sketch, dyonic RN solution, and the Bertotti–Robinson exception."
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, arXiv:1205.6112v1 (2012)"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Section 5.3, PDF pp. 27–28: its black-hole-domain Birkhoff statement is global context only and is not used as the proof of this local theorem."
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ and let an exact spherical Einstein–Maxwell–$\Lambda$
datum be given on a connected patch. Suppose $dr$ is nowhere zero and
$z=q^{-1}(dr,dr)$ is nowhere zero. Then the charged mass function $\varpi$ is
constant, say $m$. Around each point there are local
coordinates $(t,r)$ on the quotient in which
$$g=-f(r)\,dt^2+f(r)^{-1}\,dr^2+r^2\gamma_{S^2},\qquad f(r)=1-\frac{2m}{r}+\frac{q_e^2+q_m^2}{r^2}-\frac{\Lambda r^2}{3},$$
and
$$\mathcal F=-\frac{q_e}{r^2}\,dt\wedge dr+q_m\omega_{S^2}.$$
For smooth vector fields $Y,V$ on an open set $O\subseteq\mathcal M$, define
their Lie bracket on $\varphi\in C^\infty(O)$ by
$[Y,V](\varphi):=Y(V(\varphi))-V(Y(\varphi))$. For a smooth symmetric
covariant $2$-tensor field $h$ on $\mathcal M$ and smooth vector field $Y$,
define its Lie derivative by
$$(\mathcal L_Yh)(V,W):=Y(h(V,W))-h([Y,V],W)-h(V,[Y,W]),$$
for smooth vector fields $V,W$ on a common open set. A vector field is
**Killing** for $h$ when
$\mathcal L_Yh=0$. The quotient coordinate field $\partial_t$
has the product lift $K_{(y,p)}=(\partial_t|_y,0)$ to $\mathcal M$; this
lift is Killing for the full warped metric $g$ and has squared norm $-f$.
Where $f>0$, $K$ is timelike and is future- or past-directed according to the
given time orientation; where $f<0$, $K$ is spacelike and no future/past
designation is asserted. For $\Lambda=0$ this is the dyonic
Reissner–Nordström local form in the stated source convention.
Constant-radius and null-gradient patches, points with $f=0$, global
extensions, asymptotic flatness, positive mass, and black-hole uniqueness are
outside the claim.

## Statement references

[[def-emg-fx-spherical-quotient]]

[[def-emg-xs-rn-data]]

[[def-lie-bracket-of-smooth-vector-fields]]

## Facts & Assumptions

**Given:** The oriented, time-oriented, smooth Lorentzian orbit geometry and field equations, $\mathrm{AC}_\omega$, the nonvanishing conditions on $dr$ and $z$, and the source conventions below.

[F1] [[def-emg-fx-spherical-quotient]] defines the exact
Einstein–Maxwell–$\Lambda$ system, $z=q^{-1}(dr,dr)$, the constant fluxes, and
$$\varpi=\frac r2(1-z)+\frac{q_e^2+q_m^2}{2r}-\frac{\Lambda r^3}{6}.$$

[F2] [[lem-emg-fx-warped-curvature]] proves $\nabla^q dr=\tfrac12(\Delta_qr)q$, $dz=\Delta_qr\,dr$, and $d\varpi=0$ from the displayed local field equations.

[F3] [[lem-emg-fx-two-dimensional-ricci-trace]] gives the parallel oriented volume form and two-dimensional Lorentzian curvature identity used to show that the rotated gradient of $r$ is Killing.

[F4] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] gives smooth local flows for smooth vector fields on manifolds.

[F5] [[thm-smooth-inverse-function-theorem-on-manifolds]] gives local coordinates from a smooth map with invertible differential.

[F6] [[thm-ftc-first-part]] gives a local smooth antiderivative for the one-variable cross-term coefficient.

[F7] [[def-emg-xs-rn-data]] fixes the zero-$\Lambda$ metric signature, orientation, field sign, and length units used to identify the Reissner–Nordström specialization.

[F8] [[def-emg-fx-spherical-orbit-geometry]] fixes the chosen orbit volume form and four-dimensional orientation used to identify the local electric field sign.

[F9] The Lie bracket is the commutator on smooth functions, $[Y,V]h=Y(Vh)-V(Yh)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[A1] $\mathrm{AC}_\omega$ is inherited through [F1] and [F3] for the stated Lorentzian geometric and flux conventions; this proof adds no full Axiom-of-Choice assumption.

[A2] $dr$ and $z$ are nowhere zero on the chosen patch. This excludes constant-radius and null-gradient branches and ensures the Killing field and areal-coordinate chart are nondegenerate.

## Proof

1.1 By [F2], $d\varpi=0$. Any two points in a connected smooth manifold can be joined by a piecewise smooth path: the set reachable from a point by such paths and its complement are both unions of coordinate-ball neighborhoods, so connectedness makes the reachable set the whole patch. Along each smooth path segment $\sigma$, $(\varpi\circ\sigma)'=d\varpi(\sigma')=0$, so the one-variable mean-value theorem makes $\varpi$ constant along the segment. Thus $\varpi=m$ on the patch. [F1, F2, given, algebra]

1.2 Let $X^A:=\epsilon_2^{AB}\nabla^q_Br$, where indices on $\epsilon_2$ are raised with $q^{-1}$. The volume form is nondegenerate, so $X\ne0$ because $dr\ne0$. Antisymmetry gives $X(r)=0$. In an oriented orthonormal frame with $\epsilon_2=-e^0\wedge e^1$, direct contraction gives $q(X,X)=-(r_1)^2+(r_0)^2=-z$. By [F2] the Hessian is $\nabla^q dr=\tfrac12(\Delta_qr)q$, and [F3] gives $\nabla^q\epsilon_2=0$. Hence $\nabla_A X_B=\tfrac12(\Delta_qr)\epsilon_{BA}$, which is antisymmetric in $A,B$. In local coordinates, [F9] and the Lie-derivative definition give $(\mathcal L_Xq)_{AB}=X^C\partial_Cq_{AB}+q_{CB}\partial_AX^C+q_{AC}\partial_BX^C$. Expanding $\nabla^q_A X_B+\nabla^q_B X_A$ with $X_B=q_{BC}X^C$ and the Christoffel formula for $\nabla^q$ in [F3] gives the same expression: the coefficient of $X^C$ reduces to $\partial_Cq_{AB}$ by $2\Gamma^D{}_{AB}q_{DC}=\partial_Aq_{BC}+\partial_Bq_{AC}-\partial_Cq_{AB}$. Thus $\mathcal L_Xq=0$. Let $\widehat X_{(y,p)}:=(X_y,0)$ be the lift to $\mathcal M$; its local flow is $(y,p)\mapsto(\Phi_t(y),p)$, so $\mathcal L_{\widehat X}\pi_S^*\gamma_{S^2}=0$. Applying the defining Lie-derivative formula to the warped metric yields $\mathcal L_{\widehat X}g=\pi_U^*(\mathcal L_Xq)+2(r\circ\pi_U)(Xr)\pi_S^*\gamma_{S^2}=0$. Thus the lifted vector field is Killing for the full four-dimensional metric, and in the constructed coordinates it is the lift $K$ of $\partial_t$. [F2, F3, F8, F9, A2, algebra]

2.1 The smooth local flow theorem [F4] gives a local flow $\Phi_t$ of the nonvanishing field $X$. To construct a transverse curve, choose a chart $(y^0,y^1)$ with $\partial_{y^0}r\ne0$ at the point; the map $(y^0,y^1)\mapsto(r(y^0,y^1),y^1)$ has invertible differential there. The inverse function theorem [F5], after restricting the chart, therefore gives a smooth curve $\sigma(s)$ through the point with $r(\sigma(s))=s$. Define $\Psi(t,s):=\Phi_t(\sigma(s))$ on a sufficiently small product neighborhood. The identity $X(r)=0$ gives $r(\Psi(t,s))=s$. At the initial point the two derivatives of $\Psi$ are $X$ and $\sigma'(s)$; they are independent because $dr(X)=0$ and $dr(\sigma')=1$. Thus $d\Psi$ is invertible, and [F5] makes $(t,r)$ valid local coordinates with $X=\partial_t$. [F4, F5, step 1.2, construct]

3.1 Since $X=\partial_t$ and $\mathcal L_Xq=0$, each coordinate coefficient is independent of $t$, so $q=A(r)dt^2+2B(r)\,dt\,dr+C(r)dr^2$. From step 1.2, $A=q(X,X)=-z\ne0$. Both $A$ and $B$ are smooth functions of $r$, so $B/A$ is smooth on the local $r$-interval. Define $G(r):=\int_{r_0}^r B(s)/A(s)\,ds$. Applying [F6] on each compact subinterval containing $r_0$ and $r$ gives $G'=B/A$, first making $G$ continuously differentiable. Since its derivative $B/A$ is smooth, repeated differentiation shows $G$ is smooth. The coordinate change $(t,r)\mapsto(\widetilde t,r):=(t+G(r),r)$ and its inverse $(\widetilde t,r)\mapsto(\widetilde t-G(r),r)$ are therefore smooth. Substituting $dt=d\widetilde t-G'(r)dr$ makes the cross-term coefficient $2(B-AG')=0$. The coordinate $r$ is unchanged, so $q^{rr}=q^{-1}(dr,dr)=z$; for a diagonal two-metric this implies $q_{\widetilde t\widetilde t}=-z$ and $q_{rr}=z^{-1}$. [F1, F2, F6, step 1.2, step 2.1, algebra]

4.1 Solving $\varpi=m$ from step 1.1 for $z$ gives $z=1-2m/r+(q_e^2+q_m^2)/r^2-\Lambda r^2/3=:f(r)$. Substituting this in step 3.1 gives the stated metric; $f\ne0$ by [A2]. In these diagonal coordinates $\det q=-1$, so the metric volume form has the form $\epsilon_2=s\,d\widetilde t\wedge dr$ for a locally constant $s\in\{-1,1\}$. Raising indices gives $\epsilon_2^{\widetilde t r}=-s$, and hence $X^{\widetilde t}=\epsilon_2^{\widetilde t r}\partial_r r=-s$. Since the construction gives $X=\partial_{\widetilde t}$, it follows that $s=-1$. Thus $\epsilon_2=-d\widetilde t\wedge dr$ and the Maxwell form in [F1] is exactly the stated field. Since $q(\partial_{\widetilde t},\partial_{\widetilde t})=-f$, its causal character has the claimed sign. For $\Lambda=0$, this is precisely the signature and field normalization of [F7]. Renaming $\widetilde t$ as $t$ gives the coordinates in the Statement. No extension across $f=0$ or global uniqueness follows from these local coordinates. [F1, F7, F8, A2, step 1.1, step 3.1, algebra] ∎
