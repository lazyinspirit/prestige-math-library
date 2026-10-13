---
id: def-gr-plane-wave-perturbation
kind: definition
title: "Plane-wave perturbations of the flat linearization: planar profiles, wave covectors, amplitudes, TT form and the linearized field equations"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-lorentz-orthogonality-and-orthogonal-complement, def-sine-and-cosine-by-power-series, def-rational-power, def-c-r-and-smooth-maps-between-smooth-manifolds, def-euclidean-inner-product]
dependency_roles:
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-rational-power: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6: the weak-field decomposition g = eta + h, the plane-wave solutions hbar = C e^{ik.x}, the null wave-vector condition, the gauge condition k^mu C_{mu nu} = 0 and the transverse-traceless form (6.30)-(6.57), printed pp. 142-152 (PDF pp. 149-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1: the plane-wave ansatz hbar_{mu nu} = Re(H_{mu nu} e^{ik.x}), the null wavevector, transversality k^mu H_{mu nu} = 0 and the two polarisation states H_+ and H_x (5.17)-(5.22), printed pp. 209-212 (PDF pp. 216-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: plane-wave solutions of the vacuum linearized equation, the null condition k^mu k_mu = 0, transversality k^nu H_{mu nu} = 0 and the two independent polarizations (7.37)-(7.49), printed pp. 76-79 (PDF pp. 77-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart $x$ and constant metric components
$\eta_{ab}=\operatorname{diag}(-1,1,1,1)$
([[def-gr-minkowski-model-and-inertial-chart]],
[[def-gr-smooth-lorentzian-objects]]), and let $\Omega\subseteq\mathbb R^4$
be a nonempty open set, identified with its image under the chart; all
components and all partial derivatives below are taken in this chart. Let
$c>0$ be a real parameter. Throughout, a **symmetric field** means a smooth
symmetric covariant $2$-tensor field on $\Omega$
([[def-gr-smooth-covariant-two-tensor-field]]) and indices are raised and
lowered with $\eta$ and its inverse $\eta^{-1}$
([[def-gr-inverse-metric-and-musical-isomorphisms]]).

**(a) Phase coordinate and wave covector.** The **phase coordinate** of the
planar waves of this page is $u(x):=x^0-x^3$. Its differential $n:=du$ has
components $n_a=\delta^0_a-\delta^3_a$, so that $n_0=1$, $n_3=-1$,
$n_1=n_2=0$ and $\eta^{ab}n_an_b=-1+1=0$: $n$ is a nonzero null covector, and
the vector with spatial components $(0,0,-1)$ has Euclidean norm $1$ in the
sense of [[def-euclidean-inner-product]]. The vector $T:=\partial_0+\partial_3$
is null and future-directed, and $\eta(T,\cdot)=-n$, so that the phase
covector is the metric dual of $-T$. For $\omega\in\mathbb R$ we call
$k_a:=\omega\,\eta_{ab}T^b=\omega(-1,0,0,1)$ a **wave covector**; $\omega$
is its real phase coefficient and $|\omega|$ its absolute value. Its raised components are $k^a=\omega T^a=
\omega(1,0,0,1)$, so that $k\ne0$ for $\omega\ne0$ and $k^ak_a=0$. For a
general null covector $k\ne0$ of the flat model the adapted orthonormal
frames are treated in the gauge-decomposition lemma of this page; clauses
(a)-(d) fix the standard propagation direction $x^3$ used on this page.

**(b) Planar perturbations and TT profiles.** A symmetric field $h$ on
$\Omega$ is a **planar perturbation** when there is a smooth map
$F=(F_{ab}):\mathbb R\to\mathbb R^{4\times4}$ with values in the symmetric
matrices such that $h_{ab}(x)=F_{ab}(u(x))$ for all $x\in\Omega$; such an
$F$ is a **planar profile**. The image $u(\Omega)$ is open: near each
$x\in\Omega$, varying $x^0$ through a sufficiently small interval varies
$u(x)$ through an interval while remaining in $\Omega$. The restriction
$F|_{u(\Omega)}$ is uniquely determined by $h$, but an extension of it outside
$u(\Omega)$ is not determined unless $u(\Omega)=\mathbb R$. A planar
perturbation is **transverse traceless (TT) with respect to the inertial
frame** when $h_{a0}=h_{a3}=0$ and $\eta^{ab}h_{ab}=0$ on $\Omega$;
equivalently, a chosen profile satisfies $F_{a0}=F_{a3}=0$ and
$F_{11}+F_{22}=0$ on $u(\Omega)$. In that case its restriction to
$u(\Omega)$ has the form

$$F_{ab}(u)=A_+(u)\bigl(\delta^1_a\delta^1_b-\delta^2_a\delta^2_b\bigr)+A_\times(u)\bigl(\delta^1_a\delta^2_b+\delta^2_a\delta^1_b\bigr)$$

for smooth functions $A_+,A_\times:u(\Omega)\to\mathbb R$, uniquely given by
$A_+=F_{11}|_{u(\Omega)}$ and $A_\times=F_{12}|_{u(\Omega)}$; these are the
**plus and cross amplitudes** on the phase image. In particular a TT planar perturbation is
spatial ($h_{a0}=0$), traceless ($\eta^{ab}h_{ab}=0$) and transverse (its
contraction with the wave covector of (a) vanishes).

**(c) Single-frequency plane waves.** Let $k\ne0$ be a null covector of the
flat model and let $X=(X_{ab})$ and $Y=(Y_{ab})$ be real symmetric matrices.
The symmetric field

$$h_{ab}(x):=X_{ab}\cos(k\cdot x)+Y_{ab}\sin(k\cdot x),\qquad k\cdot x:=k_ax^a,$$

where $\cos$ and $\sin$ are the power-series functions
([[def-sine-and-cosine-by-power-series]]), is the **plane-wave perturbation
with wave covector $k$ and amplitudes $(X,Y)$**. Its **trace-reversed
amplitudes** are $\bar X_{ab}:=X_{ab}-\tfrac12\eta_{ab}\eta^{cd}X_{cd}$ and
$\bar Y_{ab}:=Y_{ab}-\tfrac12\eta_{ab}\eta^{cd}Y_{cd}$, in agreement with the
trace reversal of [[def-gr-flat-linearized-perturbation]] clause (c). The
plane wave is **in harmonic gauge** when $k^a\bar X_{ab}=0$ and
$k^a\bar Y_{ab}=0$. The plane wave is **TT with respect to the wave covector
$k$** when, in some $\eta$-orthonormal frame $(e_0,e_1,e_2,e_3)$ with $e_0$
future timelike, $e_1,e_2$ spanning the screen of (d) and
$k_A=k(e_A)=\omega(-1,0,0,1)$ for some $\omega\ne0$ (existence of such a
frame is proved in the gauge-decomposition lemma of this page, where also
$k^A=\omega(1,0,0,1)$), both amplitude matrices have components
$X_{a0}=X_{a3}=Y_{a0}=Y_{a3}=0$ and $X_{11}+X_{22}=Y_{11}+Y_{22}=0$ in that
frame.

**(d) Screen amplitudes.** In the situation of (c) with
$k_A=\omega(-1,0,0,1)$ in the adapted frame, the **screen** of $k$ is the two-dimensional linear
subspace $\Sigma_k:=\{v\in T_p\mathbb R^4:\eta(v,e_0)=\eta(v,e_3)=0\}$,
which is independent of the point $p$ and is the orthogonal complement of
$\operatorname{span}\{e_0,e_3\}$ in the sense of
[[def-lorentz-orthogonality-and-orthogonal-complement]]. The **plus and cross
amplitudes of a screen tensor** $A$ (a symmetric bilinear form on
$\Sigma_k$) with respect to an ordered $\eta$-orthonormal basis $(e_1,e_2)$
of $\Sigma_k$ are $A_+:=A(e_1,e_1)$ and $A_\times:=A(e_1,e_2)$.

**(e) Linearized field equations.** Let $\Lambda\in\mathbb R$ be a real
parameter and let $S=(S_{ab})$ be a symmetric field on $\Omega$. A symmetric
field $h$ **solves the linearized field equation with source $S$ and
parameter $\Lambda$** when $G^{(1)}_{ab}(h)+\Lambda h_{ab}=S_{ab}$ on
$\Omega$, with $G^{(1)}$ the first-order Einstein coefficient of
[[def-gr-flat-linearized-perturbation]] clause (b). It **solves the
linearized vacuum equations** when $S=0$ and $\Lambda=0$; and it **solves the
linearized vacuum equations with parameter $\Lambda$** when $S=0$ and
$\Lambda$ is arbitrary. A planar perturbation (b) or a plane wave (c) is a
**linearized vacuum wave** when it solves the linearized vacuum equations
with $\Lambda=0$.

**(f) Scope.** This item fixes objects and terminology only. It asserts no
existence of a profile or amplitude solving any equation, no relation between
the single-frequency and planar descriptions, and no physical
interpretation; in particular the harmonic-gauge condition in (c) is a named
algebraic condition whose equivalence with the differential condition of
[[def-gr-flat-linearized-perturbation]] clause (d) is proved in the
gauge-decomposition lemma of this page, and the terminology "TT" in (b)-(c)
is defined relative to a chosen orthonormal frame and not claimed to be
geometrically canonical.
