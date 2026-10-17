---
id: pthm-emg-classical-charged-scalar-model-evolution
kind: physics-theorem
title: "Local evolution of the adopted classical charged scalar model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - def-emg-geometry-units
  - post-emg-einstein-maxwell-action
  - post-emg-trivial-classical-charged-scalar-model
  - pthm-emg-action-field-equations
  - thm-emg-local-classical-charged-scalar-development
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  post-emg-einstein-maxwell-action: physical-assumption
  post-emg-trivial-classical-charged-scalar-model: physical-assumption
  pthm-emg-action-field-equations: physical-result
  thm-emg-local-classical-charged-scalar-development: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
physical_scope: >
  Conditional local existence and smooth local uniqueness, up to spacetime
  isometry and electromagnetic gauge, for the adopted Einstein–Maxwell–classical
  charged-scalar action in the global real-potential sector and for the stated
  compatible initial data. The deduction uses the current draft mathematical
  development result with its exact Countable Choice and Dependent Choice
  assumptions. It asserts no empirical validity, quantum interpretation,
  nontrivial bundle sector, singular-source evolution, global existence, or
  geodesic completeness.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete 97-page preprint"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "§3.1, PDF pp. 22–31, for the symmetric-hyperbolic local Cauchy framework; §5.4, PDF pp. 81–87, for Einstein–matter coupling and charged-scalar context. The source explicitly gives an outline rather than the exact coupled proof used here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, eqs. (4.68)–(4.70), PDF pp. 123–124 (printed pp. 117–118), matter action and Hilbert-stress conventions; Ch. 5, eqs. (5.33)–(5.38), PDF p. 145 (printed p. 139), on-shell diffeomorphism identity. The source conventions are not substituted for the local SI ones."
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes (457-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80), the four-dimensional Abelian-Higgs action with a complex scalar and its covariant derivative. Its natural units, Higgs potential, and quantum interpretation are not adopted."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice (DC). No
stronger choice principle is assumed. Use the smooth, boundaryless, oriented
and time-oriented Lorentzian four-manifold $(M,g,N,o)$, signature $(-,+,+,+)$,
curvature convention, length coordinates $x^0=ct$, and SI assignments of
[[def-emg-geometry-units]]. Fix $c,G_N,\mu_0,K_\varphi>0$,
$\lambda,\Lambda\in\mathbb R$, and a real $V\in C^\infty(\mathcal U)$ on an
open interval $\mathcal U\subseteq\mathbb R$ containing the attained values
of $|\varphi|^2$. The model uses a smooth complex scalar $\varphi$ and a
smooth globally defined real one-form $A$ with $F=dA$. In length coordinates
$[A_a]=\mathrm{Wb\,m^{-1}}$, $[\lambda]=\mathrm{Wb^{-1}}$,
$[K_\varphi]=\mathrm{J\,m^{-1}}$, and $[V]=\mathrm{m^{-2}}$.

Adopt the compact-interior stationary action of
[[post-emg-einstein-maxwell-action]] and select exactly the scalar action of
[[post-emg-trivial-classical-charged-scalar-model]] as its matter functional.
Write $\mathcal D_a\varphi:=\partial_a\varphi-i\lambda A_a\varphi$ and
$P_a:=\mathcal D_a\varphi$. For a charged covector set
$\mathcal D_aP_b:=\nabla_aP_b-i\lambda A_aP_b$, where $\nabla$ is the
spacetime Levi-Civita derivative; indices are raised with $g^{-1}$. The scalar
equation, current and Hilbert tensor are

$$E_\varphi:=\mathcal D_aP^a-V'(|\varphi|^2)\varphi=0,\qquad j^a:=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a),$$

$$T^\varphi_{ab}:=K_\varphi\operatorname{Re}(\overline{P_a}P_b)-\frac{K_\varphi}{2}g_{ab}\bigl(g^{cd}\overline{P_c}P_d+V(|\varphi|^2)\bigr).$$

Set $T^{\mathrm{EM}}_{ab}:=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$,
$T^{\mathrm{tot}}:=T^{\mathrm{EM}}+T^\varphi$, and
$\kappa_E:=8\pi G_N/c^4$. The equations of the adopted action model are

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,\qquad G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{tot}}_{ab},\qquad E_\varphi=0.$$

Let $\Sigma$ be a smooth spacelike initial hypersurface, $h$ its induced
Riemannian metric, $n$ its future unit normal, and
$\mathcal K(X,Y):=g(\nabla_Xn,Y)$ its second fundamental form. Let
$\nabla^\Sigma$ denote the Levi-Civita derivative of $h$ and
$\tau:=\operatorname{tr}_h\mathcal K$.
Let $i_\Sigma:\Sigma\hookrightarrow M$ be the inclusion. The complete scalar
data are $\varphi_0:=\varphi|_\Sigma$,
$\pi_i:=(\mathcal D_i\varphi)|_\Sigma$, and the independently prescribed
$\pi_n:=n^a\mathcal D_a\varphi|_\Sigma$. In a spatial chart this means
$\pi_i=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$. The globally
defined spatial potential is $A_\Sigma:=i_\Sigma^*A$, with exact-potential
compatibility $F|_{T\Sigma}=d_\Sigma A_\Sigma$. Use the temporal potential
gauge $A_0:=A(\partial_0)=0$ in local normal coordinates with $\partial_0=n$
initially, so $A(n)=0$ on $\Sigma$ and $\pi_0=\pi_n$ initially.

For the periodic high-regularity branch take
$\Sigma=\mathbb T^3_{2\pi}:=\mathbb R^3/(2\pi\mathbb Z)^3$ with
dimensionless periodic coordinates $y^i$, and fix $L_0>0$ metres so that the
length coordinates are $x^i=L_0y^i$. Sobolev norms use $y$; tensor components
and derivative units use the length coordinates $x$. Let $s\ge5$. Prescribe a
Riemannian metric $h\in H^{s+1}$ whose continuous
representative satisfies $h\ge c_0I$ for some $c_0>0$, a symmetric
$\mathcal K\in H^s$, spatial vector fields $e,b\in H^s$, a global real
$A_\Sigma\in H^s$, $\varphi_0\in H^{s+1}$, and an independent complex
$\pi_n\in H^s$. Here the Sobolev spaces are componentwise real, with complex
components split into real and imaginary parts. In a positively oriented
local $h$-orthonormal spatial frame $(X_i)$, put
$\widehat e_i:=h(e,X_i)=F_\Sigma(X_i,n)$ and
$\widehat b_i:=h(b,X_i)=\tfrac12\epsilon_i{}^{jk}F_\Sigma(X_j,X_k)$, with
$\epsilon_{123}=+1$. Thus $\widehat e_i=E_i/c$ and
$\widehat b_i=B_i$ in the observer convention of [[def-emg-geometry-units]],
and both components have unit tesla. Sobolev regularity of $e,b$ refers to
their vector components in the fixed periodic coordinates.
The initial two-form $F_\Sigma$ is fixed by
$F_\Sigma(X,n)=h(e,X)$ and
$F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)$ for spatial $X,Y$. Assume
$\pi_i=\mathcal D_i\varphi_0$ and
$F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$. With $j,T^{\mathrm{tot}}$
evaluated on the complete initial fields, impose the Maxwell constraints

$$\nabla^\Sigma_i b^i=0,\qquad \nabla^\Sigma_i e^i=\mu_0j^0,\qquad j^0:=-n_aj^a,$$

and the Einstein constraints in the stated sign convention,

$$R(h)+\tau^2-|\mathcal K|_h^2=2\Lambda+2\kappa_E T^{\mathrm{tot}}(n,n),\qquad \nabla^{\Sigma,j}\mathcal K_{ji}-\nabla^\Sigma_i\tau=\kappa_E T^{\mathrm{tot}}(n,X_i).$$

Fix a smooth positive reference metric $\gamma$ on $\Sigma$ and the product
comparison metric $\bar g:=-(dx^0)^2+\gamma$ near the initial slice. Define
$H^a:=g^{bc}(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc})$ and
$Q^i:=h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})$. Use the initial
harmonic metric jet

$$g_{ij}=h_{ij},\quad g_{00}=-1,\quad g_{0i}=0,\quad \partial_0g_{ij}=2\mathcal K_{ij},\quad \partial_0g_{00}=-2\tau,\quad \partial_0g_{0i}=h_{ij}Q^j.$$

Let $\bar\nabla$ be the Levi-Civita derivative of $\bar g$ and put
$p_{ab}:=\bar\nabla_0g_{ab}$ and $q_{abi}:=\bar\nabla_i g_{ab}$ for the
first-order metric derivative variables. For a fixed field scale $F_0>0$
tesla, form the real first-order state from
$(g_{ab},p_{ab},q_{abi})$, the six periodic-coordinate Maxwell components
$(e^i,b^i)$, the three spatial potential components $A_i$, and the real and
imaginary parts of $\varphi,\pi_0,\pi_i$. Rescale each first metric derivative
and each $\pi_a$ by multiplying by $L_0$, each $e^i,b^i$ by dividing by $F_0$,
and each $A_i$ by dividing by $L_0F_0$; $g_{ab}$ and $\varphi$ are already
dimensionless. These fixed invertible scales are bookkeeping choices, not
extra equations. Denote the resulting componentwise-real periodic state by
$u_0$. Suppose its continuous range is a compact $K_0$ contained in the
interior of a compact $K_1$ inside an open admissible state set $O$, that the
coefficient maps are smooth on $O$, the potential range lies in $\mathcal U$,
and the combined time matrix is positive definite throughout $O$. Require
$\|u_0\|_{H^s}\le R$ for some finite $R\ge0$. Thus
$u_0\in\mathcal S_s(K_0,R)$ in the componentwise real periodic Fourier and
weak-derivative convention used by the CP04 supplier.

Conditionally on the current draft mathematical supplier
[[thm-emg-local-classical-charged-scalar-development]], these periodic data
have a local solution of the full Einstein, sourced
Maxwell, and classical charged-scalar equations on
$(-T_*,T_*)\times\mathbb T^3_{2\pi}$. Here $T_*>0$ is a width in the length
coordinate $x^0=ct$ (so the corresponding time width in seconds is $T_*/c$).
In its coordinate gauge, the first-order state lies in
$L^\infty H^s\cap C H^{s-1}$ with time derivative in
$L^\infty H^{s-1}$; the metric has
$g\in L^\infty H^{s+1}\cap C H^s$ and
$\partial_0g\in L^\infty H^s\cap C H^{s-1}$, while
$F,\pi,A_i\in L^\infty H^s\cap C H^{s-1}$ and
$\varphi\in L^\infty H^{s+1}\cap C H^s$. The Maxwell, scalar-potential,
metric-derivative, and harmonic constraints propagate. More generally, for
smooth data $(h,\mathcal K,e,b,A_\Sigma,\varphi_0,\pi_n)$ on any smooth
oriented three-manifold without boundary, define $F_\Sigma$ by
$F_\Sigma(X,n)=h(e,X)$ and
$F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)$ for spatial $X,Y$. The current draft
supplier states local smooth development near each initial point, provided
$h$ is positive definite, $A_\Sigma$ is global,
$F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$,
$\pi_i=\mathcal D_i\varphi_0$, $A(n)=0$, the sourced Maxwell and
total-stress Einstein constraints hold, and $|\varphi|^2$ remains in
$\mathcal U$. Its uniqueness conclusion is local near the initial surface, up
to a data-fixing time-orientation-preserving isometry and electromagnetic
gauge $A\mapsto A+d\chi$,
$\varphi\mapsto e^{i\lambda\chi}\varphi$ with $\chi|_\Sigma=0$ and
$[\chi]=\mathrm{Wb}$. This is a local conditional deduction in the adopted action
model. It asserts no nontrivial bundle sector, singular source, global-in-time
existence, geodesic completeness, empirical validity, or quantum field.

## Facts & Assumptions

**Given:** The adopted action and scalar-model postulates, constants and smooth
potential in the Statement, temporal-gauge exact-potential data, and all
displayed regularity, compatibility and constraint conditions.

[F1] [[def-emg-geometry-units]]: the spacetime is a smooth oriented,
time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$ with the
stated curvature and length-coordinate SI conventions; in a positive future
orthonormal frame $E_i=cF_{i0}$ and $F_{ij}=\epsilon_{ijk}B_k$.

[A1] [[post-emg-einstein-maxwell-action]]: the fixed-sector total action is
adopted and dynamic admissibility is defined by independent compactly
supported metric, connection and matter stationarity.

[A2] [[post-emg-trivial-classical-charged-scalar-model]]: the selected matter
functional is $S_\varphi$ in the global real-potential sector, with the stated
$E_\varphi$, $j$, $T^\varphi$ and compact variation conventions. Its displayed
variation formulas are conditional on its linked current draft mathematical
variation supplier.

[F2] Draft [[pthm-emg-action-field-equations]]: for the current fixed-sector
action, stationarity is equivalent to the sourced Maxwell equation, the
Einstein equation with total Hilbert stress, and stationarity of the selected
matter functional. Its carrier has a current proof and format precheck, but
remains draft and is not treated as independently accepted.

[A3] [[def-countable-choice]]: assume only $\mathrm{AC}_\omega$, the principle
that each countable family of nonempty sets has a choice function.

[A4] [[def-dependent-choice]]: assume DC, the principle that every total
relation on a nonempty set admits a sequence starting at any prescribed point
and following that relation.

[L1] Draft [[thm-emg-local-classical-charged-scalar-development]]: its actual
current Statement assumes $\mathrm{AC}_\omega$ and DC, $s\ge5$, the exact
potential and scalar compatibility conditions, Maxwell and total-stress
Einstein constraints, the stated temporal-gauge initialization, compact
admissible states $u_0\in\mathcal S_s(K,R)$ in componentwise real periodic
Fourier/weak-derivative Sobolev spaces and a bounded norm; it concludes local periodic
development, subsidiary propagation, and a smooth local branch on smooth
boundaryless initial three-manifolds. Its explicit compatibility equation is
$\pi_i=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$. Its general
smooth clause later assumes $\pi_i=D_i\varphi_0=\partial_i\varphi_0$ after
defining $D$ as the Levi-Civita derivative of $h$, overloading $D_i$ between
that derivative and the gauge-covariant derivative. This item uses
$\mathcal D_i$ for the charged derivative and $\nabla^\Sigma$ for the
Levi-Civita derivative; the general smooth input mismatch is unresolved. The item file exists, but has
`status: draft` and `verification.precheck: pending`; the current batch-11
manifest lists this theorem at dependency level 7 and its defining system at
level 4. The theorem proof depends on draft symmetric-hyperbolic, reduction,
and subsidiary suppliers. This use remains conditional on the explicit
displayed interface; its proof-status and notation issues remain unresolved.

## Proof

**Proof technique:** identify the selected action equations, match the complete
Cauchy data to the current mathematical supplier, and apply that supplier
conditionally.

1.1 By [A2], the scalar action is the selected matter functional and its
variation interface identifies the matter equation, current and Hilbert
stress. Under [A1], [F2] gives both directions between total-action
stationarity and the displayed Einstein, sourced Maxwell and matter
Euler–Lagrange equations. Thus the equations in the Statement are exactly the
adopted action-model equations, conditional on the current draft variation and
action-field-equation suppliers; no existence or physical applicability is
inferred at this step. [A1, A2, F2, algebra]

1.2 The periodic data in the Statement match the explicit hypotheses in [L1]:
$s\ge5$, the exact-potential condition, the displayed gauge-covariant scalar
compatibility, $A(n)=0$, the sourced Maxwell and total-stress Einstein
constraints, the same harmonic metric jet, the compact admissible state range,
and the bounded dimensionless $H^s$ norm in the state class specified by [L1]. The orthonormal-frame components
satisfy $\widehat e_i=F_\Sigma(X_i,n)=E_i/c$ and
$\widehat b_i=\tfrac12\epsilon_i{}^{jk}F_\Sigma(X_j,X_k)=B_i$, matching [L1]'s
$e,b$ convention and the charged-scalar subsidiary interface. Only [A3] and [A4] are
assumed, exactly as [L1] states. Its later reuse of $D_i$ for the spatial
Levi-Civita derivative is not used to reinterpret the explicit compatibility
formula; the unresolved notation collision is recorded in [L1].
[F1, A3, A4, L1, given]

2.1 Conditional on [L1]'s actual draft theorem, its periodic local existence
conclusion applies to $u_0\in\mathcal S_s(K_0,R)$ under the state definition
named in [L1]
and yields the stated solution regularity and
constraint propagation. By step 1.1 the resulting solution satisfies the
Euler–Lagrange equations of the adopted action branch. Although [L1] is present
in the batch-11 manifest, it remains draft with pending precheck and draft
transitive suppliers; this is a complete conditional deduction, not a claim
that the mathematical development has been independently accepted.
[L1, step 1.1, step 1.2, construct]

3.1 The general-smooth clause of [L1] does not match the initial scalar data
in this Statement. [L1] defines $D$ as the Levi-Civita derivative of $h$ and
then assumes $\pi_i=D_i\varphi_0=\partial_i\varphi_0$, whereas this charged
model requires $\pi_i=\mathcal D_i\varphi_0=
\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$. Equality of these
conditions requires $\lambda A_{\Sigma,i}\varphi_0=0$ for every spatial
component, an assumption absent from the Statement. Thus [L1] does not supply
the claimed general-smooth existence and uniqueness for all of the stated
charged data. This local subclaim remains escalated pending repair of the
CP04 interface and its proof; the periodic branch above remains conditional
on its explicit gauge-covariant compatibility formula. [A2, L1, algebra] ∎

## Remarks

- The global real potential forces $F$ to be exact; nontrivial $U(1)$ bundles
  are outside this result. The classical coupling $\lambda$ is arbitrary and
  is not tied to $\hbar$ or a quantized charge.
- The action, field equations and development are adopted or deduced model
  statements. No measurement or observation is used, and the proof does not
  establish that the model describes nature.
- The mathematical development carrier is present in the current batch-11
  manifest at level 7, but remains a draft with pending precheck and unresolved
  upstream proof status. Its actual interface has been inspected and is used
  only conditionally above.
