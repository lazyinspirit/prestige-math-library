---
id: pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness
aliases: [nrqm-scattering-resolvent-tail-asymptotic-completeness]
kind: physics-theorem
domain: physics
title: "Asymptotic completeness for the resolvent-tail short-range class, with the decaying-tail example and the explicit exclusion of the Coulomb tail"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-scattering-framework-short-range-model, lem-nrqm-scattering-model-scaling-correspondence, thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice, lem-smooth-bump-between-concentric-euclidean-balls, lem-complex-translation-and-approximate-identity-interfaces, lem-nrqm-central-free-operator-differential-identification]
dependency_roles:
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a potential in the resolvent-tail class (square-integrable plus bounded decomposition whose shifted nondimensional free resolvent tail is integrable): self-adjointness, existence and asymptotic completeness of the model's wave operators, vanishing singular continuous spectrum, and unitarity of the scattering operator; together with the explicitly checked sufficient decay class |V_tail| <= C(1+|x|)^(-1-delta), delta>0, and the explicit exclusion of the Coulomb tail delta=0 from this class. Conditional on the declared model and the cited mathematics; no cross section, preparation, detector or empirical claim."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 printed pages 253-256 (PDF pages 265-268): the short-range condition and asymptotic completeness"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 12 printed pages 257-284 (PDF pages 265-292): scattering by localized potentials and the S-matrix"
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
real, and, with the reduced potential $W:=2mV/\hbar^{2}$ and the
nondimensional free operator $A_{0}:=-\Delta_{w}$ of the model,
$$h(r):=\bigl\|M_{W}(A_{0}-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\bigr\|,$$
finite for every $r\ge0$ and in $L^{1}([0,\infty))$.
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
$|V_{\mathrm{tail}}(x)|\le C(1+|x|)^{-1-\delta}$ almost everywhere for some
constants $C>0$, $\delta>0$; here the integrability hypothesis of the preamble
is not presupposed, because the cited theorem supplies it for this form;

(d) the explicit decaying-tail form of (c) does not cover the pure Coulomb
potential $V(x)=-\kappa/|x|$, $\kappa>0$: after any split into a compactly
supported $L^{2}$ part and a tail part, the bound
$|V_{\mathrm{tail}}(x)|\le C(1+|x|)^{-1-\delta}$ fails for every $\delta>0$,
because $\kappa(1+|x|)^{1+\delta}/|x|\to+\infty$ as $|x|\to\infty$. The pure Coulomb potential also fails the general resolvent-tail integrability hypothesis itself, as proved below; the Coulomb case is the separate
declared long-range model of this page.

The statement is conditional on the declared model with the displayed
integrability hypothesis and the cited mathematics; no cross section,
stationary amplitude or measured quantity is asserted.

## Facts & Assumptions

**Given:** the declared short-range scattering model with $m,\hbar>0$, spin zero and a resolvent-tail-class potential $V$; the choice hypotheses.

[F1] **Scaling correspondence.** With $c=\hbar^{2}/(2m)$ and $W=2mV/\hbar^{2}$, the operators $A_{0}=-\Delta_{w}$, $A=A_{0}+M_{W}$ and $H=cA$, $H^{\mathrm{free}}=cA_{0}$ on $W^{2,2}$ satisfy $E_{H}(cB)=E_{A}(B)$ for every Borel $B$, the physical and nondimensional wave-operator limits coincide, and the spectral subspaces $H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$, $H_{\mathrm{pp}}$, $H_{\mathrm c}$ of $H$ and $A$ agree ([[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b), (d), (e)).

[F2] **Resolvent-tail short-range completeness.** Assume Countable Choice. For real $V_{0}=V_{0,2}+V_{0,\mathrm b}$ with $V_{0,2}\in L^{2}$, $V_{0,\mathrm b}\in L^{\infty}$ real and $\|M_{V_{0}}(-\Delta-i)^{-1}\mathbf 1_{\{|x|\ge r\}}\|$ finite for every $r\ge0$ and integrable over $r\ge0$, the operator $-\Delta+M_{V_{0}}$ on $H^{2}(\mathbb R^{3};\mathbb C)$ is self-adjoint, both ordinary wave operators exist, $H_{\mathrm{sc}}=\{0\}$, $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}=H_{\mathrm c}$, and $S=\Omega_{+}^{*}\Omega_{-}$ is unitary; all conclusions hold for $V_{0}=V_{0,\mathrm{loc}}+V_{0,\mathrm{tail}}$ with compactly supported $L^{2}$ part and $|V_{0,\mathrm{tail}}(x)|\le C(1+|x|)^{-1-\delta}$, $\delta>0$ ([[thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness]] clause display and its final paragraph).

[F3] **The model's readings.** The model's wave operators and scattering operator are the strong limits and the product of clause (d) of its definition, with the potential classes declared in clause (b) ([[def-nrqm-scattering-framework-short-range-model]] clauses (b), (d)).

[F4] A nonzero smooth bump supported in a fixed ball exists ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Translation preserves complex $L^2$ norms ([[lem-complex-translation-and-approximate-identity-interfaces]], first clause); on compact smooth functions the free operator is exactly $-\Delta$ on $H^2$ ([[lem-nrqm-central-free-operator-differential-identification]] (a) at $m=1/2$, $\hbar=1$). Coordinate differentiation commutes with translation by direct substitution in the derivative definition.

## Proof

**Proof technique:** direct; the class hypothesis is exactly the nondimensional resolvent-tail hypothesis for the reduced potential, so the cited theorem applies, and the scaling correspondence transfers self-adjointness, the limits, the range equalities and the unitarity.

**Given:** the data and hypotheses of the statement and [F1]-[F4].

1.1 Put $W:=2mV/\hbar^{2}=W_{2}+W_{\mathrm b}$ with $W_{2}:=(2m/\hbar^{2})V_{2}\in L^{2}$ and $W_{\mathrm b}:=(2m/\hbar^{2})V_{\mathrm b}\in L^{\infty}$, both real. The nondimensional free operator $A_{0}=-\Delta_{w}$ is the operator written $-\Delta$ on $H^{2}(\mathbb R^{3};\mathbb C)$ in [F2], and the class definition gives that $\|M_{W}(A_{0}-i)^{-1}\mathbf 1_{\{|\cdot|\ge r\}}\|$ is finite for every $r$ and integrable in $r$; hence [F2] applies with $V_{0}=W$ and gives: $A:=-\Delta+M_{W}$ is self-adjoint on $H^{2}$, both nondimensional wave operators exist, $H_{\mathrm{sc}}(A)=\{0\}$, $\operatorname{ran}\Omega_{+}=\operatorname{ran}\Omega_{-}=H_{\mathrm{ac}}(A)=H_{\mathrm c}(A)$, and $S_{\mathrm{nd}}=\Omega_{+}^{*}\Omega_{-}$ is unitary. [F2, given, algebra]

1.2 [Failure of the general Coulomb resolvent-tail condition] For the pure Coulomb reduced potential put $W_C=-\gamma/|x|$, $\gamma=2m\kappa/\hbar^2>0$. Fix by [F4] a nonzero real $\phi\in C_c^\infty(B_R)$, and for $r>R$ set $\phi_r(x)=\phi(x-2r e_1)$ and $f_r=(A_0-i)\phi_r$. Both are supported outside the radius-$r$ ball, since $2r-R>r$; derivatives do not enlarge support. The free derivative action and translation isometry give $\|\phi_r\|_2=\|\phi\|_2>0$ and $\|f_r\|_2=\|(A_0-i)\phi\|_2=:c_f>0$. Positivity and self-adjointness of $A_0$ ensure its resolvent at $i$ exists, and $(A_0-i)^{-1}\mathbf1_{\{|x|\ge r\}}f_r=\phi_r$. If the Coulomb resolvent-tail operator is not bounded at some radius it already fails the class; otherwise its operator norm obeys $h_C(r)\ge\frac{\|M_{W_C}\phi_r\|_2}{\|f_r\|_2}\ge\frac{\gamma\|\phi\|_2}{c_f(2r+R)}.$ The last bound uses $|x|\le2r+R$ on that support. The positive lower bound has divergent integral over $r>R$, so $h_C\notin L^1([0,\infty))$. Thus pure Coulomb fails the general class as well, proving the general-class exclusion in (d) without any zero-energy hypothesis. [F4, given, algebra]

2.1 By [F1] the model's operators are $H=cA$, $H^{\mathrm{free}}=cA_{0}$ on $W^{2,2}$ with $c=\hbar^{2}/(2m)$, so $H$ is self-adjoint on $D(H)=W^{2,2}(\mathbb R^{3};\mathbb C)$, the physical strong limits exist exactly when the nondimensional ones do and then coincide, and the subspaces $H_{\mathrm{ac}},H_{\mathrm{sc}},H_{\mathrm c}$ of $H$ and $A$ agree; moreover every operator $e^{itH/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$ is unitary, so for every $\psi$ the strong limit satisfies $\|\Omega_{\pm}\psi\|=\lim_{t\to\pm\infty}\|e^{itH/\hbar}e^{-itH^{\mathrm{free}}/\hbar}\psi\|=\|\psi\|$, i.e. $\Omega_{\pm}$ are isometries. Combining with step 1.1 gives (a). [F1, step 1.1, algebra]

3.1 By [F3] the model's operator $S$ is $\Omega_{+}^{*}\Omega_{-}$ for the wave operators of step 2.1; by steps 1.1 and 2.1 these coincide with the nondimensional operators of [F2], whose product is unitary. Hence $S$ is unitary on $H_{0}$, which is (b). [F2, F3, step 1.1, step 2.1, algebra]

3.2 Let now $V=V_{\mathrm{loc}}+V_{\mathrm{tail}}$ with $V_{\mathrm{loc}}\in L^{2}$ compactly supported and $|V_{\mathrm{tail}}|\le C(1+|x|)^{-1-\delta}$, $\delta>0$; then $W=(2m/\hbar^{2})V=W_{\mathrm{loc}}+W_{\mathrm{tail}}$ with $W_{\mathrm{loc}}:=(2m/\hbar^{2})V_{\mathrm{loc}}\in L^{2}$ compactly supported and $|W_{\mathrm{tail}}(x)|\le C'(1+|x|)^{-1-\delta}$ with $C':=(2m/\hbar^{2})C$, so [F2]'s final paragraph gives all the conclusions of step 1.1 for this $W$ without the general integrability hypothesis; step 2.1 transfers them to $H$, so (a) and (b) hold for this $V$. This is (c). [F2, step 2.1, algebra]

4.1 For $V(x)=-\kappa/|x|$ with $\kappa>0$ and any split $V=V_{\mathrm{loc}}+V_{\mathrm{tail}}$ into a compactly supported part and the remainder, the remainder equals $-\kappa/|x|$ for all sufficiently large $|x|$, so for every $\delta>0$ the quotient $(1+|x|)^{1+\delta}|V_{\mathrm{tail}}(x)|=\kappa(1+|x|)^{1+\delta}/|x|$ tends to $+\infty$ as $|x|\to\infty$; hence no constant $C$ satisfies the sufficient decay bound of [F2]'s final paragraph, and the explicit form of (c) does not cover the Coulomb potential. This proves the sufficient-decay exclusion in (d). [F2, step 1.2, step 3.2, given, algebra] ∎


## Remarks

- **What the class excludes.** The resolvent-tail class excludes Coulomb's
  $\delta=0$ tail; the long-range comparison construction for the Coulomb
  potential is a separate declared model of this page
  ([[pthm-nrqm-scattering-coulomb-dollard-completeness]]).
- **Threshold.** No zero-energy nonresonance or absence-of-zero-eigenvalue
  hypothesis is imposed by the cited theorem; the item makes no statement about
  the stationary problem at $k=0$.
