---
id: pthm-emg-local-charged-fluid-model
kind: physics-theorem
title: "Local evolution of the adopted strict charged-fluid model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
deps:
  - post-emg-einstein-maxwell-equations
  - post-emg-strict-charged-fluid-model
  - thm-emg-local-charged-barotropic-development
  - def-countable-choice
  - def-dependent-choice
  - def-emg-geometry-units
  - def-gr-harmonic-gauge-and-reduced-equations
  - def-gr-periodic-torus-and-sobolev-spaces
  - thm-gr-constraint-equations-in-normal-frame
  - lem-emg-observer-field-decomposition
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-maxwell-stress-conservation
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  post-emg-strict-charged-fluid-model: physical-assumption
  thm-emg-local-charged-barotropic-development: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
physical_scope: >
  Conditional local development for the equation-based smooth SI Einstein-Maxwell
  model coupled to the adopted strict interior charged barotropic fluid, on
  complete compatible initial data. The conclusion covers only the stated
  torus Sobolev and smooth local branches; it asserts no global evolution,
  shock continuation, vacuum/free-boundary behavior, matter action, or empirical
  applicability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology, Oxford University Press, open-access first edition (2023), Chapter IX, Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
      locator: "Complete 300-page PDF inspected; charged-fluid model and Theorem IX.13.1, printed §§IX.13.1–IX.13.2, pp. 227–228."
    - title: "Benoit Pausader, Relativistic Fluid Equations, complete Brown University lecture notes (16 pages, undated)"
      url: "https://www.math.brown.edu/bpausade/Relativistic%20fluid.pdf"
      locator: "Complete notes inspected; charged-fluid equations in §§2.1–2.2.1, printed pp. 7–9."
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v2 (2012)"
      url: "https://arxiv.org/pdf/1112.1525"
      locator: "Full PDF fetched; abstract/introduction, §3.3 and §4.6 inspected, including the paper's explicit omission of full constraint propagation."
verification:
  precheck: pending
---

## Statement

Adopt the equation-based Einstein-Maxwell field postulate
[[post-emg-einstein-maxwell-equations]] and the smooth material closure of
[[post-emg-strict-charged-fluid-model]], with the SI, signature, and coordinate
conventions of [[def-emg-geometry-units]]. Thus the spacetime field equations
are $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, and
$$G_{ab}+\Lambda g_{ab}=\kappa(T_{m,ab}+T_{\mathrm{EM},ab}),\qquad \kappa=8\pi G_N/c^4,$$
while the fluid contributes exactly its adopted $T_m,j$ and material balance
equations. No matter action is assumed.

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice.
Let $p=p(\epsilon)$ be smooth on an open interval $J$, and let
$K_\epsilon\Subset J$ be a compact interval containing the initial density
values, on which $\epsilon+p(\epsilon)>0$ and $0<p'(\epsilon)<1$. Take
$\kappa>0$, $\mu_0>0$, $c>0$, and $\Lambda\in\mathbb R$.

Let $\Sigma$ be a smooth oriented three-manifold without boundary, and let
$\mathfrak n$ be its future unit normal. Let $h$ be a Riemannian metric and
let $K\in\Gamma(\operatorname{Sym}^2T^*\Sigma)$ use the second fundamental
form convention
$$K(X,Y):=g(\nabla_X\mathfrak n,Y).$$
The initial normal bundle is
$\mathcal V:=\mathbb R\mathfrak n\oplus T\Sigma$ with
$$g_0(a\mathfrak n+X,b\mathfrak n+Y):=-ab+h(X,Y).$$
Let $\epsilon_0,Z_0$ be smooth scalar fields, $u_0$ a smooth future unit
timelike section of $\mathcal V$ satisfying $g_0(u_0,u_0)=-1$, and $e,b$
smooth spatial vector fields
representing $E/c$ and $B$ in an oriented orthonormal frame. Their units are
J m$^{-3}$, C, dimensionless, and tesla, respectively; $K$ has units m$^{-1}$.
The components of the smooth initial two-form $F_0$ are defined in every
positively oriented $h$-orthonormal frame $(\mathsf e_i)$ by
$$e_i=F_0(\mathsf e_i,\mathfrak n),\qquad b_i=\tfrac12\varepsilon_i{}^{jk}F_0(\mathsf e_j,\mathsf e_k), \qquad \varepsilon_{123}=1.$$
This fixes all six independent components of $F_0$. Set
$j_0=cN(\epsilon_0)Z_0u_0$ and $T_0=T_{m,0}+T_{\mathrm{EM},0}$ from the
adopted model.

Write $D$ for the Levi-Civita connection of $h$,
$\tau:=\operatorname{tr}_hK=h^{ij}K_{ij}$,
$|K|_h^2:=h^{ik}h^{jl}K_{ij}K_{kl}$,
$(\operatorname{div}_hK)_j:=h^{ik}(D_iK)_{kj}$, and $R(h)$ for the scalar
curvature of $h$. Assume the complete Einstein and sourced Maxwell initial
constraints
$$R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T_0(\mathfrak n,\mathfrak n),\qquad (\operatorname{div}_hK)(X)-D_X\tau=\kappa T_0(\mathfrak n,X)$$
for every tangent vector $X$, and
$$\operatorname{div}_h e=-\mu_0g_0(j_0,\mathfrak n),\qquad \operatorname{div}_h b=0.$$

Then the adopted equation-based fluid model has the following conditional
local developments.

**(a) Torus Sobolev branch.** If
$\Sigma=\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$ with the periodic
Sobolev spaces of [[def-gr-periodic-torus-and-sobolev-spaces]], assigning each
spatial period length $2\pi\,\mathrm m$ in the length-coordinate convention of
[F6]. Assume $s\ge5$ is an integer, $h\in H^{s+1}$ and
$K,e,b,\epsilon_0,u_0,Z_0\in H^s$, with the same strict compact
admissibility. Then there is $T>0$ and a solution on
$(-T,T)\times\mathbb T^3$ in the harmonic gauge of
[[def-gr-harmonic-gauge-and-reduced-equations]], relative to the fixed
background used by [[thm-emg-local-charged-barotropic-development]]. In
periodic charts,
$g\in L^\infty H^{s+1}\cap C^0H^s$,
$\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$, and
$F,\epsilon,u,Z\in L^\infty H^s\cap C^0H^{s-1}$. The equations hold
classically, and the reduced solution is unique on common intervals with common
compact admissible bounds.

**(b) Smooth geometric branch.** For smooth data on any $\Sigma$ above, there
is a smooth time-oriented solution on an open variable-width neighborhood of
$\{0\}\times\Sigma$, inducing exactly $(h,K,F_0,\epsilon_0,u_0,Z_0)$. It is
unique near the initial surface up to a data-fixing time-orientation-preserving
isometry matching $F,\epsilon,u,Z$. No uniform time width for noncompact
$\Sigma$, global existence, shock continuation, vacuum/free-boundary solution,
or empirical validity is asserted.

This is a model deduction. It does not assert that the postulates describe
nature.

## Facts & Assumptions

**Given:** The two adopted physical postulates, the exact displayed initial
data and constraints, $\mathrm{AC}_\omega$, Dependent Choice, and the current
mathematical interfaces listed below.

[A1] [[def-countable-choice]]: Assume the Axiom of Countable Choice
$\mathrm{AC}_\omega$, the principle that each $\mathbb N$-indexed family of
nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: Assume Dependent Choice: for an entire relation
on a nonempty set and a fixed starting element, an $\mathbb N$-indexed chain
starting there exists.

[F1] [[post-emg-einstein-maxwell-equations]]: For smooth $F,j,T_m$ on the
selected Lorentzian model, adopt $dF=0$,
$\nabla_aF^{ab}=-\mu_0j^b$, and
$G_{ab}+\Lambda g_{ab}=\kappa(T_{\mathrm{EM},ab}+T_{m,ab})$, with
$T_{\mathrm{EM},ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$.

[F2] [[post-emg-strict-charged-fluid-model]]: Adopt smooth $\epsilon,u,Z$,
$p=p(\epsilon)$ with $\epsilon+p>0$ and $0<p'<1$,
$j=cN(\epsilon)Zu$,
$T_{m,ab}=(\epsilon+p)u_au_b+pg_{ab}$,
$\nabla^aT_{m,ab}=F_{bc}j^c$, and $u^a\nabla_aZ=0$; $N$ is the stated
positive EOS integral.

[F3] [[thm-emg-local-charged-barotropic-development]]: Its current Statement
has the same constrained data, $(-,+,+,+)$ signature, Maxwell signs, and
local-development conclusions used here. Its torus branch additionally admits
nonsmooth Sobolev data; this physical application retains its smooth-data
premises. Its authored proof adds the algebraic current to the source-free
principal block [L1], propagates the sourced Maxwell constraints, and obtains
stress conservation using a classical $C^1$ Maxwell-stress identity. That
finite-regularity identity is distinct from the smooth-field lemma [L2].
The supplier remains draft; this application records no independent proof approval.

[F4] [[thm-gr-constraint-equations-in-normal-frame]]: With
$K(X,Y)=g(\nabla_X\mathfrak n,Y)$,
$G(\mathfrak n,\mathfrak n)=\tfrac12(R(h)+\tau^2-|K|_h^2)$ and
$G(\mathfrak n,X)=(\operatorname{div}_hK)(X)-D_X\tau$; inserting
$G+\Lambda g=\kappa T$ gives exactly the displayed Einstein constraints.

[F5] [[lem-emg-observer-field-decomposition]]: In a positively oriented
future orthonormal tetrad, $F_{0i}=-e_i$ and
$F_{ij}=\varepsilon_{ijk}b_k$; these six components uniquely reconstruct a
two-form from the spatial fields.

[F6] [[def-emg-geometry-units]]: In the adopted length-coordinate SI
convention, $x^0=ct$, $g$ is dimensionless, curvature has units m$^{-2}$,
$K$ has units m$^{-1}$, $F$ has units tesla and $j$ has units A m$^{-2}$.

[F7] [[def-gr-periodic-torus-and-sobolev-spaces]]: $\mathbb T^3_{2\pi}$ is the
quotient $\mathbb R^3/(2\pi\mathbb Z)^3$; its integer-order $H^s$ spaces consist
of periodic $L^2$ classes whose weak spatial derivatives through order $s$ are
in $L^2$.

[F8] [[def-gr-harmonic-gauge-and-reduced-equations]]: For a smooth Lorentz
metric $g$ and fixed smooth background metric $\bar g$, the harmonic-gauge
vector is $H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$; harmonic gauge
means $H=0$.

[L1] [[lem-emg-fieldstrength-positive-symmetric-reduction]]: For the
source-free equations, the current authored Statement gives the six-field Maxwell principal block
$P(\zeta)=\zeta(n)I_6+S(\zeta_\perp)$ and positive time matrix
$\alpha^{-1}I_6$. Its Gauss constraints are
$\operatorname{div}_h e=\operatorname{div}_h b=0$; it does not supply the
sourced constraints of this theorem.

[L2] [[lem-emg-maxwell-stress-conservation]]: For smooth fields satisfying
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, the current authored Statement gives
$\nabla^aT_{\mathrm{EM},ab}=-F_{bc}j^c$. This is a stress identity under
assumed Maxwell equations, not a constraint-propagation result.

## Proof

**Proof technique:** direct conditional application of the complete local
mathematical development interface.

1.1 The equation-based postulate [F1] supplies the Einstein equation, sourced
Maxwell sign and electromagnetic stress used by the local mathematical result;
the material postulate [F2] supplies exactly its $T_m$, $j$, Lorentz-force
balance and advected $Z$ equation. The postulates are assumptions, not
consequences of one another. [F1, F2, F6]

2.1 The given bundle, smoothness, EOS interval, field reconstruction and four
constraint equations match the current Statement of [F3]; [F4] fixes the
second-fundamental-form and constraint signs, [F5] fixes the six initial
Maxwell components, [F6] fixes the length-coordinate convention, [F7] fixes
the torus and Sobolev conventions, and [F8] defines the gauge used in branch
(a). Since $j=cN(\epsilon)Zu$ is algebraic in the fluid variables, its
addition changes only zero-order terms in the Maxwell evolution system,
leaving the principal matrices of [L1] unchanged. The sourced Gauss
constraints are hypotheses of [F3], whose proof propagates them; they are
not obtained from the source-free Gauss laws of [L1]. For smooth Maxwell
fields, [L2] gives the stress divergence that cancels the material force in
[F2]; the finite-regularity stress argument belongs to [F3] as specified
above. [A1, A2, F2, F3, F4, F5, F6, F7, F8, L1, L2,
step 1.1]

3.1 Applying [F3] under [A1] and [A2] gives its torus Sobolev branch when the
torus and Sobolev hypotheses hold, and its smooth geometric branch for the
smooth data stated here. Interpreting the resulting fields through [F1] and
[F2] gives a local solution of the adopted equation-based Einstein-Maxwell-
fluid model, with exactly the stated initial data. The deduction is conditional
on the adopted physical model and the stated mathematical hypotheses of [F3],
with the supplier roles checked in step 2.1; it is not an empirical validation
or a claim of global evolution. [A1, A2, F1, F2, F3, step 2.1] ∎
