---
id: ex-emg-adopted-linear-eos-model
kind: example
title: "A neutral, constraint-compatible linear-EOS sector"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 5
deps:
  - post-emg-strict-charged-fluid-model
  - pthm-emg-local-charged-fluid-model
  - def-emg-strict-charged-barotropic-system
  - def-emg-geometry-units
  - lem-emg-charged-fluid-positive-symmetric-reduction
  - def-gr-periodic-torus-and-sobolev-spaces
  - def-countable-choice
  - def-dependent-choice
  - thm-gr-constraint-equations-in-normal-frame
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-maxwell-stress-conservation
dependency_roles:
  post-emg-strict-charged-fluid-model: physical-assumption
  pthm-emg-local-charged-fluid-model: physical-result
  def-emg-strict-charged-barotropic-system: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  lem-emg-charged-fluid-positive-symmetric-reduction: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
physical_scope: >
  A neutral, strictly subluminal p=w epsilon sector of the adopted smooth
  charged-fluid closure with explicit compatible flat-torus Einstein-Maxwell
  initial data. It supplies a conditional local model solution only; no global
  cosmological evolution, observation, or universal material law is asserted.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology, Oxford University Press, open-access first edition (2023), Chapter IX, Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
      locator: "Complete relevant EOS and charged-fluid sections inspected: §§IX.4 and IX.13.2, printed pp. 212–216 and 228."
    - title: "Benoit Pausader, Relativistic Fluid Equations, complete Brown University lecture notes (16 pages, undated)"
      url: "https://www.math.brown.edu/bpausade/Relativistic%20fluid.pdf"
      locator: "Complete relevant sections inspected: §1.5 and §2.2.1, printed pp. 4 and 8–9."
verification:
  precheck: pending
---

## Example

Choose $w\in(0,1)$, a constant $H>0$ with units m$^{-1}$, and $N_*>0$ with
units m$^{-3}$. Use the Einstein coupling
$\kappa=\kappa_E=8\pi G_N/c^4>0$ from [[def-emg-geometry-units]], with units
m J$^{-1}$. Set
$$J=(0,\infty),\qquad \epsilon_*:=\frac{3H^2}{\kappa},\qquad p(\epsilon):=w\epsilon,\qquad \Lambda:=0.$$
Then $\epsilon_*>0$ has units J m$^{-3}$. Adopt the linear EOS on all of
$J$, use $\epsilon_*$ as the normalization point in the definition of $N$,
and set the advected charge-per-particle field to $Z\equiv0$.

On $\Sigma=\mathbb T^3_{2\pi}:=\mathbb R^3/(2\pi\mathbb Z)^3$, assign the
spatial period length $2\pi\,\mathrm m$ in the length-coordinate convention of
[[def-emg-geometry-units]], and use the standard smooth quotient structure and
orientation. Take the flat metric $h=\delta$,
prescribe $K=Hh$, set the constant energy density $\epsilon_0=\epsilon_*$,
take fluid velocity $u_0=\mathfrak n$, and set $e=b=0$. The slice is compact
and has no boundary. The equation of state is strict on the open density interval, the
current vanishes, and the Einstein and Maxwell constraints hold exactly. By
the local theorem, these data admit a smooth local development, conditional
on $\mathrm{AC}_\omega$, Dependent Choice, and the currently draft mathematical
inputs used by [[pthm-emg-local-charged-fluid-model]]. This example is a model
calculation, not an observation.

## Facts & Assumptions

**Given:** $0<w<1$, $H>0$ with units m$^{-1}$, $\kappa=\kappa_E>0$ with units
m J$^{-1}$, $N_*>0$ with units m$^{-3}$, the postulated fluid closure, and the
choices and initial fields in the Example.

[A1] [[def-countable-choice]]: Assume $\mathrm{AC}_\omega$.

[A2] [[def-dependent-choice]]: Assume Dependent Choice.

[F1] [[def-emg-strict-charged-barotropic-system]]: For $p=p(\epsilon)$,
$N(\epsilon)=N_*\exp(\int_{\epsilon_*}^{\epsilon}dz/(z+p(z)))$,
$j=cNZu$, and
$T_{m,ab}=(\epsilon+p)u_au_b+pg_{ab}$.

[F2] [[lem-emg-charged-fluid-positive-symmetric-reduction]]: The model's
enthalpy coordinate is
$r(\epsilon)=\int_{\epsilon_*}^{\epsilon}\sqrt{p'(z)}/(z+p(z))\,dz$,
with derivative $r'=\sqrt{p'}/(\epsilon+p)>0$ when $0<p'<1$.

[F3] [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]],
and [[thm-natural-logarithm-laws]]: For positive $x,y$,
$\log'(x)=1/x$, $\log x=\int_1^x dt/t$, and
$\log(x/y)=\log x-\log y$; $\log$ is strictly increasing.

[F4] [[def-gr-periodic-torus-and-sobolev-spaces]]: The smooth slice is the
quotient $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$, with the flat
metric descending from the Euclidean metric.

[F5] [[pthm-emg-local-charged-fluid-model]]: Under the displayed smooth data,
Einstein and Maxwell constraints, $\mathrm{AC}_\omega$ and Dependent Choice,
the adopted equations admit a smooth local development. This result's current
carrier is draft and its proof uses draft inputs [L1] and [L2].

[F6] [[thm-gr-constraint-equations-in-normal-frame]]: With
$K(X,Y)=g(\nabla_X\mathfrak n,Y)$, the Hamiltonian constraint is
$R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T(\mathfrak n,\mathfrak n)$ and the
momentum constraint is $(\operatorname{div}_hK)(X)-D_X\tau=\kappa
T(\mathfrak n,X)$.

[F7] [[post-emg-strict-charged-fluid-model]]: In the adopted strict-interior
model the barotropic characteristic speed is $c_{\mathrm s}:=c\sqrt{p'(\epsilon)}$
for $0<p'(\epsilon)<1$.

[F8] [[def-emg-geometry-units]]: In length coordinates all coordinate values
are measured in metres with $x^0=ct$; the speed constant $c$ has units m
s$^{-1}$ and $\kappa_E=8\pi G_N/c^4$ has units m J$^{-1}$.

[L1] [[lem-emg-fieldstrength-positive-symmetric-reduction]]: Its current
Statement gives the conditional Maxwell field-strength symmetric principal
block; the carrier is draft with precheck pending.

[L2] [[lem-emg-maxwell-stress-conservation]]: Its current Statement gives
$\nabla^aT_{\mathrm{EM},ab}=-F_{bc}j^c$ for the adopted source sign; the
carrier is draft with precheck pending.

## Verification

1.1 On $J=(0,\infty)$, $p'=w\in(0,1)$ and
$\epsilon+p=(1+w)\epsilon>0$. By [F1] and [F3],
$$N(\epsilon)=N_*\exp\!\left(\frac1{1+w} \int_{\epsilon_*}^{\epsilon}\frac{dz}{z}\right) =N_*\exp\!\left(\frac{\log(\epsilon/\epsilon_*)}{1+w}\right) =N_*\left(\frac{\epsilon}{\epsilon_*}\right)^{1/(1+w)}.$$
The ratio in the logarithm is dimensionless. [F1, F3, algebra]

1.2 Since $\sqrt{p'(z)}=\sqrt w$, [F2] and [F3] give
$$r(\epsilon)=\frac{\sqrt w}{1+w}\log\!\left(\frac{\epsilon}{\epsilon_*}\right), \qquad r'(\epsilon)=\frac{\sqrt w}{(1+w)\epsilon}>0,$$
so this is the strictly increasing enthalpy coordinate of [F2]. By [F7], the
adopted physical characteristic speed is $c_{\mathrm s}=c\sqrt w\in(0,c)$.
[F2, F3, F7, algebra]

1.3 The definition [F4] identifies the torus as the quotient by translations
in $(2\pi\mathbb Z)^3$. For any point of $\mathbb R^3$, an open ball of radius
less than $\pi$ is disjoint from each of its nontrivial lattice translates;
the quotient map therefore gives local smooth charts with transition maps that
are translations, so the quotient is a smooth three-manifold without boundary.
The translations preserve both the Euclidean orientation and metric, so these
descend to an orientation and the flat metric $h=\delta$. The continuous
quotient map sends the compact cube $[0,2\pi]^3$ onto the torus, hence the torus
is compact. In these local quotient charts $h$ has constant Euclidean
coefficients, so its Levi-Civita derivative vanishes and its curvature is zero.
[F4, F8, construct, algebra]

1.4 For the data in the Example, $j_0=0$ because $Z_0=0$. Also
$T_{m,0}(\mathfrak n,\mathfrak n)
=(\epsilon_*+p(\epsilon_*))(-1)^2
+p(\epsilon_*)g_0(\mathfrak n,\mathfrak n)=\epsilon_*$,
and $T_{m,0}(\mathfrak n,X)=0$ for every tangent $X$. The electromagnetic
stress vanishes because $e=b=0$. [F1, given, algebra]

2.1 By step 1.3 the flat torus has $R(h)=0$ and $D h=0$. In three dimensions,
$\tau=\operatorname{tr}_h(Hh)=3H$ and $|K|_h^2=3H^2$, so the Hamiltonian
left side is $9H^2-3H^2=6H^2$. Its right side is
$2\Lambda+2\kappa T_0(\mathfrak n,\mathfrak n)=2\kappa\epsilon_*=6H^2$
by the choice of $\epsilon_*$. The density units are
$[3H^2/\kappa]=\mathrm{m}^{-2}/(\mathrm{m\,J}^{-1})=\mathrm{J\,m}^{-3}$
by the stated units and [F8]. Both sides of the momentum constraint vanish
because $H$ is constant and $T_0(\mathfrak n,X)=0$. [F4, F6, step 1.4,
step 1.3, given, F8, algebra]

2.2 The two Maxwell constraints reduce to $\operatorname{div}_h0=0$ and
$-\mu_0g_0(j_0,\mathfrak n)=0$, so both hold. The fields are smooth, and
their density range $\{\epsilon_*\}$ is contained in the compact interval
$K_\epsilon=[\epsilon_*/2,3\epsilon_*/2]\Subset J$. All strict EOS
inequalities hold on $K_\epsilon$ by step 1.1. Thus the complete
smooth-data hypotheses of [F5] hold. [F5, step 1.1, step 1.3, step 1.4,
given, algebra]

3.1 Applying [F5] under [A1] and [A2] gives the smooth local development for
these exact constrained data. The conclusion remains conditional on the actual
current draft mathematical interfaces [L1] and [L2]; neither their pending
status nor this example is evidence that the model describes nature.
[A1, A2, F5, L1, L2, step 2.1, step 2.2] ∎
