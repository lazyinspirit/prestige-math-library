---
id: pthm-emg-classical-charged-scalar-model-evolution
kind: physics-theorem
title: "Local evolution of the adopted classical charged scalar model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - lem-emg-classical-charged-scalar-compact-variation
  - def-emg-classical-charged-scalar-finite-regularity-system
  - def-emg-geometry-units
  - post-emg-trivial-classical-charged-scalar-model
  - thm-emg-local-classical-charged-scalar-development
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  lem-emg-classical-charged-scalar-compact-variation: mathematical-premise
  def-emg-classical-charged-scalar-finite-regularity-system: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  post-emg-trivial-classical-charged-scalar-model: physical-assumption
  thm-emg-local-classical-charged-scalar-development: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
physical_scope: >
  Conditional local existence and smooth local uniqueness, up to spacetime
  isometry and electromagnetic gauge, for the adopted Einstein–Maxwell–classical
  charged-scalar action in the global real-potential sector and for the stated
  compatible initial data, with the finite-Sobolev branch interpreted in the
  explicit classical C3-metric/C2-matter action domain. The deduction uses the current draft mathematical
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
stronger choice principle is assumed. Use a smooth Hausdorff, second-countable,
boundaryless, oriented underlying four-manifold with a time-oriented $C^3$
Lorentzian metric $(M,g,N,o)$, signature $(-,+,+,+)$,
curvature convention, length coordinates $x^0=ct$, and SI assignments of
[[def-emg-geometry-units]]. Fix $c,G_N,\mu_0,K_\varphi>0$,
$\lambda,\Lambda\in\mathbb R$, and a real $V\in C^\infty(\mathcal U)$ on an
open interval $\mathcal U\subseteq\mathbb R$ containing the attained values
of $|\varphi|^2$. The classical domain is [[def-emg-classical-charged-scalar-finite-regularity-system]]: the model uses a $C^2$ complex scalar $\varphi$ and a
globally defined real $C^2$ one-form $A$ with $F=dA$. The smooth configurations are retained as a subclass. In length coordinates
$[A_a]=\mathrm{Wb\,m^{-1}}$, $[\lambda]=\mathrm{Wb^{-1}}$,
$[K_\varphi]=\mathrm{J\,m^{-1}}$, and $[V]=\mathrm{m^{-2}}$.

Adopt the explicit classical compact-interior stationary total action of
[[post-emg-trivial-classical-charged-scalar-model]]. The same declared classical action includes smooth configurations; no integer-weight circle representation is assumed for arbitrary real $\lambda$.
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
and derivative units use the length coordinates $x$. Let $s\ge5$ be an integer. Prescribe a
Riemannian metric $h\in H^{s+1}$ whose continuous
representative satisfies $h\ge c_0I$ for some $c_0>0$, a symmetric
$\mathcal K\in H^s$, spatial vector fields $e,b\in H^s$, a global real
$A_\Sigma\in H^s$, $\varphi_0\in H^{s+1}$, and an independent complex
$\pi_n\in H^s$. Here the Sobolev spaces are componentwise real, with complex
components split into real and imaginary parts. For the periodic state, let
$(\mathsf e_A(h))_{A=1}^3$ be the positively oriented $h$-orthonormal frame
obtained by Gram–Schmidt from the ordered global length-coordinate frame, as
specified in [[def-emg-periodic-high-sobolev-state]]. Put
$\widehat e_A:=h(e,\mathsf e_A(h))$ and
$\widehat b_A:=h(b,\mathsf e_A(h))$. The initial two-form convention below
then gives $F_\Sigma(\mathsf e_A(h),n)=\widehat e_A$ and
$F_\Sigma(\mathsf e_A(h),\mathsf e_B(h))=\epsilon_{ABC}\widehat b_C$, with
$\epsilon_{123}=+1$. Thus $\widehat e_A=E_A/c$ and
$\widehat b_A=B_A$ in the observer convention of [[def-emg-geometry-units]],
and both components have unit tesla. Sobolev regularity of the vector fields
$e,b$ refers to their components in the fixed periodic coordinates; the
orthonormal-frame state components are those specified by the named convention.
The initial two-form $F_\Sigma$ is fixed by
$F_\Sigma(X,n)=h(e,X)$ and
$F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)$ for spatial $X,Y$. Assume
$\pi_i=\mathcal D_i\varphi_0$ and
$F_\Sigma|_{T\Sigma}=d_\Sigma A_\Sigma$. With $j,T^{\mathrm{tot}}$
evaluated on the complete initial fields, impose the Maxwell constraints

$$\nabla^\Sigma_i b^i=0,\qquad \nabla^\Sigma_i e^i=\mu_0j^0,\qquad j^0:=-n_aj^a,$$

and the Einstein constraints in the stated sign convention,

$$R(h)+\tau^2-|\mathcal K|_h^2=2\Lambda+2\kappa_E T^{\mathrm{tot}}(n,n),\qquad (\operatorname{div}_h\mathcal K)(X)-\nabla^\Sigma_X\tau=\kappa_E T^{\mathrm{tot}}(n,X)\quad(X\in T\Sigma).$$

Here $(\operatorname{div}_h\mathcal K)(X):=h^{ij}(\nabla^\Sigma_{\partial_i}\mathcal K)(\partial_j,X)$, so the momentum equation is an equality of covectors and does not mix coordinate and orthonormal components.

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
$(g_{ab},p_{ab},q_{abi})$, the six orthonormal-frame Maxwell components
$(\widehat e_A,\widehat b_A)$, the three spatial potential components $A_i$,
and the real and imaginary parts of $\varphi,\pi_0,\pi_i$. Rescale each first
metric derivative and each $\pi_a$ by multiplying by $L_0$, each
$\widehat e_A,\widehat b_A$ by dividing by $F_0$, and each $A_i$ by dividing
by $L_0F_0$; $g_{ab}$ and $\varphi$ are already
dimensionless. These fixed invertible scales are bookkeeping choices, not
extra equations. Denote the resulting componentwise-real periodic state by
$u_0$. Suppose its continuous range is a compact $K_0$ contained in the
interior of a compact $K_1$ inside an open admissible state set $O$, that the
coefficient maps are smooth on $O$, the potential range lies in $\mathcal U$,
and the combined time matrix is positive definite throughout $O$. Require
$\|u_0\|_{H^s}\le R$ for some finite $R\ge0$. Thus
$u_0\in\mathcal S_s(K_0,R)$ in the componentwise real periodic Fourier and
weak-derivative convention used by the CP04 supplier.

Under the stated mathematical hypotheses of the current authored supplier
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
$F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)$ for spatial $X,Y$. The current authored supplier states local smooth development near each initial point, provided
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

**Given:** The adopted action and scalar-model postulates, constants and smooth potential in the Statement, temporal-gauge exact-potential data, and all displayed regularity, compatibility and constraint conditions.

[F1] [[def-emg-geometry-units]]: the spacetime is a smooth oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$ with the stated curvature and length-coordinate SI conventions; in a positive future orthonormal frame $E_i=cF_{i0}$ and $F_{ij}=\epsilon_{ijk}B_k$.

[A1] [[post-emg-trivial-classical-charged-scalar-model]]: the selected matter functional is $S_\varphi$ in the global real-potential sector, with the stated $E_\varphi$, $j$, $T^\varphi$ and compact variation conventions. Its smooth variation formulas and its separately declared classical total action have the same coefficients; the classical first variations and equation equivalence are supplied by [L2].

[A2] [[def-countable-choice]]: assume only $\mathrm{AC}_\omega$, the principle that each countable family of nonempty sets has a choice function.

[A3] [[def-dependent-choice]]: assume DC, the principle that every total relation on a nonempty set admits a sequence starting at any prescribed point and following that relation.

[L1] [[thm-emg-local-classical-charged-scalar-development]]: its current authored Statement assumes $\mathrm{AC}_\omega$ and DC, integer $s\ge5$, $h,\varphi_0\in H^{s+1}$ with uniformly positive $h$, the remaining complete data in $H^s$, exact spatial potential compatibility, and the explicit charged condition $\pi_i=\mathcal D_i\varphi_0=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$ in both the periodic and general-smooth branches. It reserves $D$ for the spatial Levi-Civita derivative. It also requires the sourced Maxwell and total-stress Einstein constraints as invariant equations, the stated harmonic/temporal initialization, compact admissible ranges $K_0\subset\operatorname{int}K_1\subset O$, smooth coefficients, positive time matrix and $\|u_0\|_{H^s}\le R$. Its proof supplies local periodic evolution with the stated regularity and smooth persistence, normal Maxwell subsidiary recovery and a smooth local branch on arbitrary smooth boundaryless initial three-manifolds. Smooth geometric uniqueness is obtained after restoring temporal matter gauge in the wave-coordinate comparison; the conclusion is a data-fixing isometry plus a single real gauge function near the initial surface. This is an authored local mathematical theorem used at its exact hypotheses, not a claim of empirical applicability or a new independent supplier audit.

[L2] [[lem-emg-classical-charged-scalar-compact-variation]]: on the smooth underlying manifold with $g\in C^3$, $A,\varphi\in C^2$, the exact relative total action adopted in [A1] has the displayed metric, Maxwell and scalar first variations for compact smooth directions. Its continuous coefficients vanish exactly under the full classical equations, and its off-shell current/stress identities hold at that regularity. No smoothness improvement is assumed.

## Proof

**Proof technique:** identify the selected action equations, match the complete Cauchy data to the current mathematical supplier, and apply that supplier conditionally.

1.1 By [A1], the adopted action has precisely the total Einstein–Hilbert, Maxwell and scalar coefficients in [L2]. The classical metric, connection and scalar first variations in [L2] prove both directions between compact stationarity and the displayed equations, since their coefficients are continuous and compact smooth tests separate them. The same proof applies to the smooth subclass. Thus the equations in the Statement are exactly the adopted classical action-model equations. No existence or empirical conclusion is inferred at this step. [A1, L2, algebra]

1.2 The periodic data in the Statement match the explicit hypotheses in [L1]: $s\ge5$, the exact-potential condition, the displayed gauge-covariant scalar compatibility, $A(n)=0$, the sourced Maxwell and total-stress Einstein constraints, the same harmonic metric jet, the compact admissible state range, and the bounded dimensionless $H^s$ norm in the state class specified by [L1]. In the Gram–Schmidt state frame, the Maxwell state variables satisfy $\widehat e_A=F_\Sigma(\mathsf e_A(h),n)=E_A/c$ and $\widehat b_A=\tfrac12\epsilon_A{}^{BC}F_\Sigma(\mathsf e_B(h),\mathsf e_C(h))=B_A$. They are exactly the orthonormal Maxwell components used in [L1]'s symmetric block; [L1] verifies their $H^s$ regularity from the coordinate-component data. Only [A2] and [A3] are assumed, exactly as [L1] states. Both branches of [L1] explicitly use $\mathcal D_i$ for the charged derivative; $\nabla^\Sigma$ here and the supplier's spatial $D$ act only as Levi-Civita derivatives. [F1, A2, A3, L1, given]

2.1 The periodic local-existence conclusion of the mathematical theorem [L1]
applies to $u_0\in\mathcal S_s(K_0,R)$ under the state definition named in [L1] and yields the stated solution regularity and constraint propagation. Its proof establishes $g\in C^3$ and $A,\varphi\in C^2$ at integer $s\ge5$, so the output belongs to the explicit classical model domain of [L2], without requiring smooth persistence for nonsmooth data. By step 1.1 the resulting solution satisfies the Euler–Lagrange equations of the adopted action branch. The deduction remains conditional on the adopted action model and the explicitly stated mathematical hypotheses; it claims no empirical validation or new independent audit. [L1, L2, step 1.1, step 1.2, construct]

3.1 The general-smooth data meet the same charged compatibility equation in [L1], $\pi_i=\mathcal D_i\varphi_0=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$. The spatial Levi-Civita derivative is a distinct operator and imposes no extra condition $\lambda A_{\Sigma,i}\varphi_0=0$. The global spatial potential, exact magnetic restriction, independent normal scalar derivative, $A(n)=0$, total-stress Einstein and sourced Maxwell constraints, positive metric and smooth potential domain are precisely the complete smooth hypotheses of [L1]. Under [A2] and [A3], its general-smooth branch therefore gives local development near every initial point. Its temporal-gauge-before-comparison argument gives a data-fixing time-orientation-preserving isometry and the stated electromagnetic gauge equivalence near the initial surface, with $\chi|_\Sigma=0$. Interpreting these mathematical fields through the adopted action model yields exactly the claimed smooth conditional physical conclusion, without a nontrivial-bundle or global-in-time assertion. [A1, A2, A3, L1, step 1.1, algebra] ∎

## Remarks

- The global real potential forces $F$ to be exact; nontrivial $U(1)$ bundles are outside this result. The classical coupling $\lambda$ is arbitrary and is not tied to $\hbar$ or a quantized charge.
- The action, field equations and development are adopted or deduced model statements. No measurement or observation is used, and the proof does not establish that the model describes nature.
- The local mathematical theorem is used with its complete charged data, integer Sobolev order, choice and admissible-state hypotheses. The conditional physical conclusion still depends on adoption of the stated action model.
