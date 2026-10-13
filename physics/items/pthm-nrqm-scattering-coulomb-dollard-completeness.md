---
id: pthm-nrqm-scattering-coulomb-dollard-completeness
aliases: [nrqm-scattering-coulomb-dollard-completeness]
kind: physics-theorem
domain: physics
title: "Completeness of the Dollard-modified wave operators for the declared Coulomb model"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-scattering-coulomb-dollard-model, def-nrqm-scattering-framework-short-range-model, lem-nrqm-scattering-model-scaling-correspondence, thm-nrqm-controlled-dynamics-dollard-integrable-remainder, thm-nrqm-controlled-dynamics-dollard-channel-completeness, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-bounded-borel-pvm-integral, thm-unbounded-borel-functional-calculus, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, pthm-nrqm-central-coulomb-energy-observable-and-flow, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-coulomb-dollard-model: formulation-prerequisite
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-dollard-integrable-remainder: mathematical-premise
  thm-nrqm-controlled-dynamics-dollard-channel-completeness: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared long-range Coulomb model with coupling kappa>0 and its Dollard-modified free comparison: existence of the modified wave operators as strong limits, their isometry and intertwining, the completeness equalities of their ranges with the absolutely continuous and continuous subspaces of the Coulomb operator, and unitarity of the modified scattering operator. Conditional on the declared model and the cited mathematics; the item asserts no Coulomb scattering amplitude, no Rutherford cross section, no measured quantity and no ordinary short-range comparison for the Coulomb potential."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.4, printed pages 271-273 (PDF pages 279-281)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 printed pages 253-256 (PDF pages 265-268): short-range completeness, with the long-range case explicitly outside the short-range condition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared long-range Coulomb model
[[def-nrqm-scattering-coulomb-dollard-model]] with mass $m>0$, spin zero,
action constant $\hbar>0$, coupling $\kappa>0$, the assigned energy operator
$H_{\kappa}$ on $H^{2}(\mathbb R^{3};\mathbb C)$, the free operator
$H^{\mathrm{free}}$, the inverse-length coupling
$\gamma=2m\kappa/\hbar^{2}$, a declared reference length $\ell_\star>0$ in metres and reference time $t_{\star}=2m\ell_\star^2/\hbar$, the
Dollard-modified comparison $U_{D}(t)$ and the modified wave operators
$\Omega_{D\pm}$ and $S_{D}$ of that definition. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) the modified wave operators exist as strong limits and are bounded linear
isometries, $\Omega_{D\pm}^{*}\Omega_{D\pm}=I$, and they intertwine,
$$\Omega_{D\pm}e^{-isH^{\mathrm{free}}/\hbar}=e^{-isH_{\kappa}/\hbar}\Omega_{D\pm} \qquad(s\in\mathbb R);$$

(b) the modified wave operators are complete,
$$\operatorname{ran}\Omega_{D+}=\operatorname{ran}\Omega_{D-} =H_{\mathrm{ac}}(H_{\kappa})=H_{\mathrm c}(H_{\kappa});$$

(c) the modified scattering operator $S_{D}=\Omega_{D+}^{*}\Omega_{D-}$ is
unitary on $H_{0}$ and commutes with the free flow;

(d) the ordinary short-range comparison of the model is not substituted:
neither existence nor completeness of
$\operatorname*{s-lim}_{t\to\pm\infty}e^{itH_{\kappa}/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$
is asserted, and the modification is essential to the statement.

The statement is conditional on the declared model and the cited
mathematics. It asserts no explicit Coulomb scattering amplitude, no
Rutherford or other cross section, and no measured quantity; the logarithmic
phase is a comparison construction for the long-range generator.

## Facts & Assumptions

**Given:** the declared Coulomb model with $m,\hbar>0$, spin zero, $\kappa>0$, $\gamma=2m\kappa/\hbar^{2}$, $c=\hbar^{2}/(2m)$, $\ell_\star>0$, $t_{\star}=2m\ell_\star^2/\hbar$, the operators $H_{\kappa}=c(-\Delta_{w}-\gamma/|\cdot|)$ and $H^{\mathrm{free}}=c(-\Delta_{w})$ on $W^{2,2}$, the comparison $U_{D}(t)$ and the choice hypotheses.

[F1] **Dollard integrable remainder.** Assume Countable Choice. For $\gamma>0$, with $H_{0}=-\Delta$, $H_{\gamma}=-\Delta-\gamma/|\cdot|$ on $H^{2}$ and the Dollard-modified evolution $U_{D}^{\mathrm{nd}}(\tau)=e^{-i\tau H_{0}}e^{i\operatorname{sign}(\tau)a(P)\log|\tau|}$, $a(p)=\gamma/(2|p|)$, the family is unitary and the remainder $\gamma/|\cdot|-\gamma/(2|\tau||P|)$ is integrable along $U_{D}^{\mathrm{nd}}$: there are $T_{\psi},C_{\psi}$ with $\|\bigl[\gamma/|\cdot|-\gamma/(2|\tau||P|)\bigr]U_{D}^{\mathrm{nd}}(\tau)\psi\|_{2}\le C_{\psi}(1+\log|\tau|)/|\tau|^{2}$ for $|\tau|\ge T_{\psi}$, for vectors in the dense momentum-test class ([[thm-nrqm-controlled-dynamics-dollard-integrable-remainder]] clauses (a), (b)).

[F2] **Dollard channel completeness.** With the hypotheses of [F1], the modified wave operators $\Omega_{D\pm}=s\text{-}\lim_{\tau\to\pm\infty}e^{i\tau H_{\gamma}}U_{D}^{\mathrm{nd}}(\tau)$ exist on all of $L^{2}$, satisfy $\Omega_{D\pm}e^{-isH_{0}}=e^{-isH_{\gamma}}\Omega_{D\pm}$, act in each angular channel as multiplication by a bounded Borel function of the energy with $|b_{l,\pm}(E)|=1$ for a.e. $E>0$, and $\operatorname{ran}\Omega_{D\pm}=H_{\mathrm{ac}}(H_{\gamma})=H_{\mathrm c}(H_{\gamma})$; $S_{D}=\Omega_{D+}^{*}\Omega_{D-}$ is unitary ([[thm-nrqm-controlled-dynamics-dollard-channel-completeness]] clauses (a), (b), (c)).

[F3] **Spectral correspondence of a positive multiple.** For a self-adjoint operator $T$, positive $c_{0}$ and every Borel $B$, the projection valued measure of $c_{0}T$ satisfies $E_{c_{0}T}(B)=E_{T}(B/c_{0})$, so $H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$, $H_{\mathrm{pp}}$ and $H_{\mathrm c}$ of $c_{0}T$ and $T$ coincide; consequently for a bounded Borel $f$ one has $f(c_{0}T)=(f\circ c_{0})(T)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-bounded-borel-pvm-integral]], [[thm-unbounded-borel-functional-calculus]] clause 2, [[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a), (b)).

[F4] **The model's readings.** The declared comparison, modified wave operators and spectral vocabulary are those of clauses (b), (c) of the Coulomb definition; the Coulomb operator is self-adjoint on $H^{2}$ with the flow $e^{-itH_{\kappa}/\hbar}$ ([[def-nrqm-scattering-coulomb-dollard-model]] clauses (b), (c), [[pthm-nrqm-central-coulomb-energy-observable-and-flow]] clauses (a), (b)).

## Proof

**Proof technique:** direct; represent the physical data numerically in SI, compare with the supplied mathematical Dollard evolution through a fixed incoming or outgoing energy phase, and transfer the full limits, intertwining, completeness and scattering unitarity.

**Given:** the data and hypotheses of the statement and [F1]-[F4].

1.1 [Numerical SI comparison with dimensionless arguments] Write the fixed SI units as $L_0=1\,\mathrm m$, $T_0=1\,\mathrm s$, $M_0=1\,\mathrm{kg}$ and $E_0=1\,\mathrm J$. Let $m_0=m/M_0$, $h_0=\hbar/(E_0T_0)$, $k_0=\kappa/(E_0L_0)$, $L=\ell_\star/L_0>0$ and $t_0=t/T_0$ be their numerical values, and put $\gamma_0=\gamma L_0=2m_0k_0/h_0^2$, $c_0=h_0^2/(2m_0)$ and $\tau=h_0t_0/(2m_0)$. These are pure real numbers, with $\tau\to\pm\infty$ as $t\to\pm\infty$. Represent the wavefunctions in the numerical SI coordinate $q=x/L_0$, with the normalized $L^2$ coordinate map $\mathcal J_0f(q)=L_0^{3/2}f(L_0q)$, the Jacobian normalization understood in the chosen length unit. Substitution in the integral proves this map unitary; weak derivative substitution gives its exact $H^2$ domain transport. The numerical energy representatives are therefore $\mathsf H_\kappa=E_0^{-1}\mathcal J_0H_\kappa\mathcal J_0^{-1}=c_0C_{\gamma_0}$ and $\mathsf H_f=E_0^{-1}\mathcal J_0H^{\mathrm{free}}\mathcal J_0^{-1}=c_0A_0$, where $A_0=-\Delta_q$ and $C_{\gamma_0}=-\Delta_q-\gamma_0/|q|$. Thus $\mathcal J_0e^{-itH_\kappa/\hbar}\mathcal J_0^{-1}=e^{-i\tau C_{\gamma_0}}$ and similarly for the free operator. The numerical reference time is $t_{\star,0}=2m_0L^2/h_0$, so $\frac{|t|}{t_\star}=\frac{|t_0|}{t_{\star,0}}=\frac{|\tau|}{L^2},\qquad \log\frac{|t|}{t_\star}=\log|\tau|-2\log L.$ Every logarithm has a dimensionless argument; no time having units of length squared is placed inside the source logarithm. [F3, F4, given, algebra]

2.1 [Exact fixed energy phases] For a positive numerical energy $e=c_0\lambda$, the phase coefficient of the physical definition is $m_0k_0/(h_0\sqrt{2m_0e})=\gamma_0/(2\sqrt\lambda)$. By [F1], $a(P)=\gamma_0/(2|P|)$ for the numerical source $A_0=|P|^2$. For $\sigma\in\{+1,-1\}$ define the fixed bounded unitary $B_{\sigma,L}=b_{\sigma,L}(A_0),\qquad b_{\sigma,L}(\lambda)=\exp\Bigl(-2i\sigma\frac{\gamma_0}{2\sqrt\lambda}\log L\Bigr)\quad(\lambda>0),\qquad b_{\sigma,L}(0)=1.$ The functions are bounded unimodular Borel functions despite their oscillation near zero, so their calculus is defined on all $L^2$ and they commute with $e^{-irA_0}$ for every $r$. Spectral correspondence [F3] and step 1.1 give, for $|\tau|\ge1$ and $\sigma=\operatorname{sign}t$, $\mathcal J_0U_D(t)\mathcal J_0^{-1}=e^{-i\tau A_0}e^{i\sigma a(P)\log|\tau|}B_{\sigma,L}=U_D^{\mathrm{nd}}(\tau)B_{\sigma,L}.$ The bounded functional calculus also transports under $\mathcal J_0$: conjugating the PVM gives a regular PVM representing the numerical operator, so spectral uniqueness identifies it and simple-function approximation gives the claimed calculus transport. If desired, the annular smooth momentum class in [F1] is preserved by each $B_{\sigma,L}$ because its multiplier is smooth on every compact annulus; hence the source remainder estimate remains integrable on that class after this fixed phase. The comparison for finite $|\tau|<1$ need not equal the source's short-time extension and is irrelevant to the two asymptotic limits. [step 1.1, F1, F3, F4, algebra]

3.1 [Strong limits, isometry and intertwining] Apply [F2] at the positive numerical coupling $\gamma_0$. Let $W_\pm$ be its two full-space Dollard wave operators. Step 2.1 makes the physical comparison product, conjugated by $\mathcal J_0$, equal $e^{i\tau C_{\gamma_0}}U_D^{\mathrm{nd}}(\tau)B_{\pm,L}$ on the corresponding exterior half-line. The fixed bounded right factor and the positive scalar time change let the strong limits pass on every vector, giving $\Omega_{D\pm}=\mathcal J_0^{-1}W_\pm B_{\pm,L}\mathcal J_0.$ Both $W_\pm$ are isometries by [F2] and both $B_{\pm,L}$ are unitaries, so these operators are isometries. For physical $s\in\mathbb R$, put $r=h_0(s/T_0)/(2m_0)$. The numerical free/Coulomb flows are $e^{-irA_0}$ and $e^{-irC_{\gamma_0}}$ by step 1.1. Since $B_{\pm,L}$ commute with the free flow and $W_\pm e^{-irA_0}=e^{-irC_{\gamma_0}}W_\pm$, conjugating gives the exact intertwining of (a). No new source existence or momentum-domain assumption was introduced. [step 1.1, step 2.1, F2, F3, algebra]

4.1 [Full completeness under the reference convention] Because $B_{\pm,L}$ are onto, step 3.1 gives $\operatorname{ran}\Omega_{D\pm}=\mathcal J_0^{-1}\operatorname{ran}W_\pm$. By [F2], this is $\mathcal J_0^{-1}H_{\mathrm{ac}}(C_{\gamma_0})=\mathcal J_0^{-1}H_{\mathrm c}(C_{\gamma_0})$. Positive energy scaling by $c_0$ preserves these spectral subspaces [F3], and the unitary numerical coordinate representation transports the spectral measures and their subspaces as in step 2.1. The resulting physical subspaces are exactly $H_{\mathrm{ac}}(H_\kappa)=H_{\mathrm c}(H_\kappa)$. This proves (b) for every declared reference length, preserving the source's whole continuous subspace and all angular channels. [step 2.1, step 3.1, F2, F3, algebra]

5.1 [Scattering phases, unitarity and free-flow commutation] Put $S^{\mathrm{nd}}=W_+^*W_-$. The formula in step 3.1 gives $S_D=\mathcal J_0^{-1}B_{+,L}^*S^{\mathrm{nd}}B_{-,L}\mathcal J_0.$ All factors are unitary by [F2] and step 2.1, so $S_D$ is unitary. The commutation with the free flow follows directly from the two intertwinings: taking the adjoint of the plus identity at time $-r$ gives $e^{-irA_0}W_+^*=W_+^*e^{-irC_{\gamma_0}}$, hence $S^{\mathrm{nd}}e^{-irA_0}=W_+^*e^{-irC_{\gamma_0}}W_-=e^{-irA_0}S^{\mathrm{nd}}$. The fixed $B_{\pm,L}$ commute with that same flow, so their scattering product does too, and conjugating proves (c). Equivalently the common range projection from step 4.1 gives both $S_D^*S_D=I$ and $S_DS_D^*=I$. For any other reference time $t_\star'$, let $Q_\sigma=q_\sigma(H^{\mathrm{free}})$ with $q_\sigma(E)=\exp(-i\sigma\alpha(E)\log(t_\star'/t_\star))$, $\alpha(E)=m\kappa/(\hbar\sqrt{2mE})$ for $E>0$ and $q_\sigma(0)=1$. The defining phases give exactly $\Omega_{D\pm}'=\Omega_{D\pm}Q_\pm$ and $S_D'=Q_+^*S_DQ_-$. These incoming/outgoing factors are different sign conventions, not a claim that the scattering operator itself is unchanged. [step 2.1, step 3.1, step 4.1, F2, F3, F4, algebra]

6.1 [Scope and assembly] Steps 3.1–5.1 establish all the original modified-limit, isometry, intertwining, full completeness and scattering-unitarity conclusions with their corrected dimensional convention. No step supplies the ordinary unmodified Coulomb wave limits, so (d) retains exactly that distinction. The reference length adds only a comparison convention and its fixed channel phases; it adds no hypothesis on a state or on the Coulomb interaction, no amplitude formula and no measured cross section. [F4, given, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **Phases and observables.** The modified comparison is not unique: changing
  the reference time $t_{\star}$ changes asymptotic channel phases. The
  completeness equalities of (b) and the unitarity of (c) are invariant
  under that change, which is why the definition declares the reference time
  as a convention.
- **What would be needed for an amplitude.** An explicit Coulomb scattering
  amplitude, and with it any Rutherford-type cross section, would require the
  angular asymptotic analysis of the Coulomb continuum solutions and a
  further normalization statement; neither is contained in the completeness
  theorem, and the pair does not assert one.
