---
id: pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness
aliases: [ nrqm-scattering-resolvent-tail-asymptotic-completeness ]
kind: physics-theorem
domain: physics
title: "Asymptotic completeness for the resolvent-tail short-range class, with
  the decaying-tail example and the explicit exclusion of the Coulomb tail"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    lem-nrqm-scattering-model-scaling-correspondence,
    thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-sobolev-space-wkp-and-its-norm,
    def-countable-choice,
    def-axiom-of-choice,
    lem-smooth-bump-between-concentric-euclidean-balls,
    lem-complex-translation-and-approximate-identity-interfaces,
    lem-nrqm-central-free-operator-differential-identification
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a potential in
  the resolvent-tail class (square-integrable plus bounded decomposition whose
  shifted nondimensional free resolvent tail is integrable): self-adjointness,
  existence and asymptotic completeness of the model's wave operators, vanishing
  singular continuous spectrum, and unitarity of the scattering operator;
  together with the explicitly checked sufficient decay class |V_tail| <=
  C(1+|x|/L*)^(-1-delta), delta>0, with reference length L*>0 and C in joules,
  and the explicit exclusion of the Coulomb tail delta=0 from this class.
  Conditional on the declared model and the cited mathematics; no cross section,
  preparation, detector or empirical claim."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 12.3 printed pages 253-256 (PDF pages 265-268): the short-range
        condition and asymptotic completeness"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 12, printed pages 257-281 (PDF pages 265-289)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$, and a declared potential $V$ of the
**resolvent-tail class**: real $V=V_{2}+V_{\mathrm b}$ with
$V_{2}\in L^{2}(\mathbb R^{3})$ and $V_{\mathrm b}\in L^{\infty}(\mathbb R^{3})$
real, and, with the model's reference length $L_*$, energy $E_*=\hbar^2/(2mL_*^2)$, dimensionless coordinate $y=x/L_*$, reduced potential $W_*(y)=V(L_*y)/E_*$ and the
nondimensional free operator $A_{0,*}:=-\Delta_y^{\mathrm{weak}}$ of the model,
$$h_*(r):=\bigl\|M_{W_*}(A_{0,*}-iI)^{-1}\mathbf 1_{\{|y|\ge r\}}\bigr\|,$$
finite for every dimensionless $r\ge0$ and in $L^{1}([0,\infty))$.
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) $H=H^{\mathrm{free}}+M_{V}$ is self-adjoint on
$D(H)=W^{2,2}(\mathbb R^{3};\mathbb C)$
([[def-sobolev-space-wkp-and-its-norm]]); both wave operators
$$\Omega_{\pm}=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$$
exist as bounded linear isometries, $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}
=H_{\mathrm{ac}}(H)=H_{\mathrm c}(H)$, and $H_{\mathrm{sc}}(H)=\{0\}$;

(b) $S=\Omega_{+}^{*}\Omega_{-}$ is unitary on $H_{0}$;

(c) the conclusions of (a) and (b) hold in particular for a declared potential
of the explicit **decaying-tail form** $V=V_{\mathrm{loc}}+V_{\mathrm{tail}}$
with real $V_{\mathrm{loc}}\in L^{2}(\mathbb R^{3})$ compactly supported and
$|V_{\mathrm{tail}}(x)|\le C(1+|x|/L_*)^{-1-\delta}$ almost everywhere for some
constants $C>0$ in joules and dimensionless $\delta>0$; here the integrability hypothesis of the preamble
is not presupposed, because the cited theorem supplies it for this form;

(d) the explicit decaying-tail form of (c) does not cover the pure Coulomb
potential $V(x)=-\kappa/|x|$, $\kappa>0$: after any split into a compactly
supported $L^{2}$ part and a tail part, the bound
$|V_{\mathrm{tail}}(x)|\le C(1+|x|/L_*)^{-1-\delta}$ fails for every $\delta>0$,
because $\kappa(1+|x|/L_*)^{1+\delta}/|x|\to+\infty$ as $|x|\to\infty$. The pure Coulomb potential also fails the general resolvent-tail integrability hypothesis itself, as proved below; the Coulomb case is the separate
declared long-range model of this page.

The statement is conditional on the declared model with the displayed
integrability hypothesis and the cited mathematics; no cross section,
stationary amplitude or measured quantity is asserted.

## Facts & Assumptions

**Given:** the declared short-range scattering model with $m,\hbar>0$, spin zero and a resolvent-tail-class potential $V$; the choice hypotheses.

[F1] **Spatial and energy scaling.** The model proves that the unitary
$D_*$ maps $W^{2,2}_x$ onto $W^{2,2}_y$ and conjugates the physical pair to
$E_*A_{0,*}$ and $E_*A_*$, where $A_*=A_{0,*}+M_{W_*}$.
The purely mathematical positive-scaling correspondence
[[lem-nrqm-scattering-model-scaling-correspondence]] applies to these
operators with positive scalar $c=E_*$ (its numerical parameters can be
chosen as $\hbar'=\hbar$, $m'=\hbar^2/(2E_*)$). It gives spectral dilation, preservation
of spectral types and the time change $\tau=tE_*/\hbar=t/T_*$.
Unitary conjugation transports the PVM and the strong limits, so
$E_H(E_*B)=D_*^*E_{A_*}(B)D_*$ and
$\Omega_\pm=D_*^*\Omega_{\pm,*}D_*$; each physical spectral subspace is
$D_*^*$ of the corresponding subspace for $A_*$.

[F2] **Resolvent-tail short-range completeness in dimensionless coordinates.** Assume Countable Choice. For real $V_{0}=V_{0,2}+V_{0,\mathrm b}$ with $V_{0,2}\in L^{2}$, $V_{0,\mathrm b}\in L^{\infty}$ real and $\|M_{V_{0}}(-\Delta-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\|$ finite for every dimensionless $r\ge0$ and integrable over $r\ge0$, the operator $-\Delta+M_{V_{0}}$ on $H^{2}(\mathbb R^{3};\mathbb C)$ is self-adjoint, both ordinary wave operators exist, $H_{\mathrm{sc}}=\{0\}$, $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}=H_{\mathrm c}$, and $S=\Omega_{+}^{*}\Omega_{-}$ is unitary; all conclusions hold for $V_{0}=V_{0,\mathrm{loc}}+V_{0,\mathrm{tail}}$ with compactly supported $L^{2}$ part and $|V_{0,\mathrm{tail}}(x)|\le C(1+|x|)^{-1-\delta}$, $\delta>0$ ([[thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness]] clause display and its final paragraph).

[F3] **The model's readings.** The model's wave operators and scattering operator are the strong limits and the product of clause (d) of its definition, with the potential classes declared in clause (b) ([[def-nrqm-scattering-framework-short-range-model]] clauses (b), (d)).

[F4] A nonzero smooth bump supported in a fixed ball exists ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Translation preserves complex $L^2$ norms ([[lem-complex-translation-and-approximate-identity-interfaces]], first clause); on compact smooth functions the free operator is exactly $-\Delta$ on $H^2$ ([[lem-nrqm-central-free-operator-differential-identification]] (a) at $m=1/2$, $\hbar=1$). Coordinate differentiation commutes with translation by direct substitution in the derivative definition.

## Proof

**Proof technique:** direct; the class hypothesis is exactly the nondimensional resolvent-tail hypothesis for the reduced potential, so the cited theorem applies, and the scaling correspondence transfers self-adjointness, the limits, the range equalities and the unitarity.

**Given:** the data and hypotheses of the statement and [F1]-[F4].

1.1 Put $W_*(y)=V(L_*y)/E_*=W_{*,2}(y)+W_{*,\mathrm b}(y)$. Lebesgue dilation gives $\|W_{*,2}\|_2=E_*^{-1}L_*^{-3/2}\|V_2\|_2$ and $\|W_{*,\mathrm b}\|_\infty=E_*^{-1}\|V_{\mathrm b}\|_\infty$. Thus these parts are real $L^2$ and bounded functions respectively. In [F2] use the dimensionless variable $y$ in place of its abstract variable $x$, $V_0=W_*$ and $A_{0,*}=-\Delta_y^{\mathrm{weak}}$. The full hypothesis is exactly $h_*(r)<\infty$ for every $r$ with $h_*\in L^1$, so [F2] gives self-adjoint $A_*$ on $H^2_y$, isometric wave operators $\Omega_{\pm,*}$, $H_{\mathrm{sc}}(A_*)=0$, equal ranges $H_{\mathrm{ac}}(A_*)=H_{\mathrm c}(A_*)$ and unitary $S_*$. [F1, F2, given, algebra]

1.2 [Failure of the general Coulomb resolvent-tail condition] For the pure Coulomb reduced potential put $W_{*,C}=-\gamma_*/|y|$, $\gamma_*=\kappa/(E_*L_*)>0$. All radii in this argument are dimensionless. Fix by [F4] a nonzero real $\phi\in C_c^\infty(B_R)$, and for $r>R$ set $\phi_r(y)=\phi(y-2r e_1)$ and $f_r=(A_{0,*}-i)\phi_r$. Both are supported outside the radius-$r$ ball, since $2r-R>r$; derivatives do not enlarge support. The free derivative action and translation isometry give $\|\phi_r\|_2=\|\phi\|_2>0$ and $\|f_r\|_2=\|(A_{0,*}-i)\phi\|_2=:c_f>0$. Positivity and self-adjointness of $A_{0,*}$ ensure its resolvent at $i$ exists, and $(A_{0,*}-i)^{-1}\mathbf1_{\{|y|\ge r\}}f_r=\phi_r$. If the Coulomb resolvent-tail operator is not bounded at some radius it already fails the class; otherwise its operator norm obeys $h_{*,C}(r)\ge\frac{\|M_{W_{*,C}}\phi_r\|_2}{\|f_r\|_2}\ge\frac{\gamma_*\|\phi\|_2}{c_f(2r+R)}.$ The last bound uses $|y|\le2r+R$ on that support. The positive lower bound has divergent integral over $r>R$, so $h_{*,C}\notin L^1([0,\infty))$. Thus pure Coulomb fails the general class as well, proving the general-class exclusion in (d) without any zero-energy hypothesis. [F4, given, algebra]

2.1 By [F1], $H=D_*^*E_*A_*D_*$ is self-adjoint on $W^{2,2}_x$. For $\tau=t/T_*$ the physical comparison is $D_*^*e^{i\tau A_*}e^{-i\tau A_{0,*}}D_*$. Since $T_*>0$, each physical infinite-time limit exists and equals $D_*^*\Omega_{\pm,*}D_*$. These are isometries, their ranges are the conjugated spectral subspaces $H_{\mathrm{ac}}(H)=H_{\mathrm c}(H)$ and $H_{\mathrm{sc}}(H)=0$. This proves (a). [F1, step 1.1, algebra]

3.1 By [F3] and step 2.1, $S=D_*^*S_*D_*$, which is unitary since $S_*$ and $D_*$ are unitary. This proves (b). [F1, F3, step 1.1, step 2.1, algebra]

4.1 For the physical decay form in (c), set $W_{*,\mathrm{loc}}(y)=V_{\mathrm{loc}}(L_*y)/E_*$ and $W_{*,\mathrm{tail}}(y)=V_{\mathrm{tail}}(L_*y)/E_*$. The local part has norm $E_*^{-1}L_*^{-3/2}\|V_{\mathrm{loc}}\|_2$ and support radius divided by $L_*$. The tail satisfies $|W_{*,\mathrm{tail}}(y)|\le(C/E_*)(1+|y|)^{-1-\delta}$. Thus [F2]'s full sufficient-decay result supplies the integrable resolvent-input tail and all conclusions for $A_*$; step 2.1 and step 3.1 transfer them to the physical operators. This proves (c) without assuming the resolvent estimate for this example. [F1, F2, step 2.1, step 3.1, algebra]

5.1 For $V(x)=-\kappa/|x|$ with $\kappa>0$ and any split $V=V_{\mathrm{loc}}+V_{\mathrm{tail}}$ into a compactly supported part and the remainder, the remainder equals $-\kappa/|x|$ for all sufficiently large $|x|$, so for every $\delta>0$ the quotient $(1+|x|/L_*)^{1+\delta}|V_{\mathrm{tail}}(x)|=\kappa(1+|x|/L_*)^{1+\delta}/|x|$ tends to $+\infty$ as $|x|\to\infty$; hence no constant $C$ satisfies the sufficient decay bound of [F2]'s final paragraph, and the explicit form of (c) does not cover the Coulomb potential. This proves the sufficient-decay exclusion in (d). [F2, step 1.2, step 4.1, given, algebra] ∎


## Remarks

- **What the class excludes.** The resolvent-tail class excludes Coulomb's
  $\delta=0$ tail; the long-range comparison construction for the Coulomb
  potential is a separate declared model of this page
  ([[pthm-nrqm-scattering-coulomb-dollard-completeness]]).
- **Threshold.** No zero-energy nonresonance or absence-of-zero-eigenvalue
  hypothesis is imposed by the cited theorem; the item makes no statement about
  the stationary problem at $k=0$.
