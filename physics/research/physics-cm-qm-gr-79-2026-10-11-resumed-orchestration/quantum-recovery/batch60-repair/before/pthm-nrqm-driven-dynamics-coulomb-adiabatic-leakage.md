---
id: pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage
aliases: [nrqm-driven-dynamics-coulomb-adiabatic-leakage]
kind: physics-theorem
domain: physics
title: "The slowly varying one-centre Coulomb source: verified uniform gap of the n-th level and the 1/T leakage estimate"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-driven-dynamics-framework-adiabatic-protocol, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-framework-quantities-and-units, thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate, thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-sobolev-space-wkp-and-its-norm, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-projection-valued-measure, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-driven-dynamics-framework-adiabatic-protocol: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared one-centre Coulomb model with a prescribed C^2 path of the external source strength (the coupling kappa): the identification of the n-th Coulomb level and of its n^2-fold eigenspace along the path, the verification of a uniform positive gap from the model's spectrum theorem with the explicit rational lower bound, and the operator-norm and Born leakage estimates for an initial preparation in that level under the slowly varying source. The theorem concerns the declared external-source model only; it asserts no laboratory field or control, no linear Stark coupling, no transition rate, no branch selection and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.2 printed pages 222-233 (PDF pages 234-245): the hydrogen atom and its discrete spectrum, and Section 6.6 printed pages 153-159: perturbation of isolated eigenvalues"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1 printed pages 181-200 (PDF pages 189-208): the hydrogenic spectrum E_n = -K/(2 a0 n^2) and the n^2 degeneracy of the level n"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared one-centre Coulomb model of [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with mass parameter $m>0$, action constant $\hbar>0$ and declared coupling $\kappa>0$ of unit $\mathrm{J\,m}$, and its energy operator $H_{\kappa}=\frac{\hbar^{2}}{2m}C_{\gamma}$, $C_{\gamma}=-\Delta-\gamma/|\cdot|$ on $Y=H^{2}(\mathbb R^{3};\mathbb C)$ with $\gamma=2m\kappa/\hbar^{2}$. Adopt the declared adiabatic protocol of [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] in its common-domain branch (u) with the following **declared source-strength family**: a prescribed path $\kappa\in C^{2}([0,1];(0,\infty))$ with $0<\kappa_{\min}\le\kappa(s)\le\kappa_{\max}<\infty$, the family
$$H(s):=H_{\kappa(s)},\qquad \gamma(s):=\frac{2m\kappa(s)}{\hbar^{2}},\qquad A(s):=-\Delta-\frac{\gamma(s)}{|\cdot|},\qquad D(A(s))=Y,$$
read as the model's energy at slow time $s$, a protocol duration $T>0$ (seconds), and the protocol propagator $U_{T}$ defined by $i\hbar\partial_{s}U_{T}(s,\sigma)=TH(s)U_{T}(s,\sigma)$, $U_{T}(\sigma,\sigma)=I$. Assume the family $s\mapsto H(s)$ satisfies the common-domain regularity of branch (u), i.e. $s\mapsto H(s)\in C^{1}([0,1];\mathcal B(Y,L^{2}(\mathbb R^{3};\mathbb C)))$; this is the regularity hypothesis of the declared protocol model and is not derived here. Fix $n\ge1$ and let $P_{n}(s)$ be the spectral projection of $H(s)$ for its $n$-th level. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Level, degeneracy and uniform gap.* For every $s\in[0,1]$ the number
$$E_{n}(s)=-\frac{m\kappa(s)^{2}}{2\hbar^{2}n^{2}}=\frac{\hbar^{2}}{2m}\Bigl(-\frac{\gamma(s)^{2}}{4n^{2}}\Bigr)$$
is an eigenvalue of $H(s)$ with eigenspace of dimension $n^{2}$, the spectrum of $H(s)$ has no eigenvalues in $[0,\infty)$, its essential spectrum is $[0,\infty)$, and the complementary distance of the level is bounded below uniformly by
$$\operatorname{dist}\bigl(E_{n}(s),\sigma(H(s))\setminus\{E_{n}(s)\}\bigr)\ \ge\ \frac{\hbar^{2}}{2m}\,\delta_{n}\,\gamma_{\min}^{2}\ =:\ g_{n}\ >\ 0,\qquad \delta_{n}:=\frac{2n+1}{4n^{2}(n+1)^{2}},\qquad \gamma_{\min}=\frac{2m\kappa_{\min}}{\hbar^{2}} .$$
Consequently the family of projections $s\mapsto P_{n}(s)$ is a uniformly gapped, coherently followed label of the protocol in the sense of [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] clause (c).

(b) *Leakage estimate.* There is a constant $C_{n}<\infty$, depending only on $n$, on the mass parameter $m$, on $\hbar$ and on $\kappa_{\min},\kappa_{\max}$ and the $C^{2}$ norm of the path $\kappa$ (that is, on the data of the declared family), such that for every $s\in[0,1]$
$$\bigl\|(I-P_{n}(s))U_{T}(s,0)P_{n}(0)\bigr\|\le\frac{C_{n}}{T},$$
and therefore, for every unit vector $\psi(0)\in\operatorname{ran}P_{n}(0)$ with $\psi(t)=U_{T}(t/T,0)\psi(0)$,
$$p_{\mathrm{leak}}(s)=\bigl\|(I-P_{n}(s))\psi(sT)\bigr\|^{2}\le\frac{C_{n}^{2}}{T^{2}},\qquad \bigl\langle P_{n}(s)\psi(sT),\psi(sT)\bigr\rangle\ge1-\frac{C_{n}^{2}}{T^{2}} .$$

(c) *Scope.* The theorem concerns the declared external-source family only: the coupling path is a prescribed source strength of the one-centre model, not an applied laboratory field, and the statement asserts no laboratory control, no linear Stark coupling (which has no uniformly gapped branch), no transition rate, no branch selection or relaxation, and no empirical result.

## Facts & Assumptions


**Given:** the declared one-centre Coulomb model with parameters $m,\hbar,\kappa$ and the source-strength path $\kappa(\cdot)$; the family $H(s)=H_{\kappa(s)}$, $\gamma(s)=2m\kappa(s)/\hbar^{2}$, $A(s)$; the duration $T$ and propagator $U_{T}$; the label $n\ge1$ and projections $P_{n}(s)$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Coulomb model data.** $H_{\kappa}=\frac{\hbar^{2}}{2m}C_{\gamma}$ is self-adjoint on the exact domain $Y=H^{2}(\mathbb R^{3};\mathbb C)$ ([[def-sobolev-space-wkp-and-its-norm]]) for every $\kappa>0$, with $\gamma=2m\kappa/\hbar^{2}$, and $(H_{\kappa},\mathrm J)$ is the model's declared energy observable with length scale $a_{\kappa}=\hbar^{2}/(m\kappa)$ and energy scale $\hbar^{2}/(2ma_{\kappa}^{2})$ ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c)).

[F2] **Coulomb spectrum.** For the fixed coupling $\kappa$: $\Psi_{nlm}\in D(H_{\kappa})$ are unit eigenvectors with $H_{\kappa}\Psi_{nlm}=E_{n}\Psi_{nlm}$, $E_{n}=-m\kappa^{2}/(2\hbar^{2}n^{2})$; the eigenvalues of $H_{\kappa}$ are exactly the numbers $E_{n}$, $n\ge1$, the eigenspace at $E_{n}$ has dimension $\sum_{l=0}^{n-1}(2l+1)=n^{2}$, and $H_{\kappa}$ has no eigenvalues in $[0,+\infty)$, whose spectral content is entirely essential spectrum $[0,+\infty)$ ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a), (b), (d)). The same statements hold for the scalar multiple $A(s)=\frac{2m}{\hbar^{2}}H_{\kappa(s)}$, with eigenvalues multiplied by $2m/\hbar^{2}$.

[F3] **Atomic adiabatic supplier.** For $A(s)=-\Delta-\gamma(s)/|\cdot|$ on $Y$ with $\gamma\in C^{2}([0,1];(0,\infty))$, $0<\gamma_{\min}\le\gamma(s)\le\gamma_{\max}<\infty$, if $E_{n}(s)=-\gamma(s)^{2}/(4n^{2})$ is the named eigenvalue with uniform complementary gap $g_{n}>0$ and $U_{T}$ solves $i\partial_{s}U_{T}=T A(s)U_{T}$, then there is $C<\infty$, depending on $n,\gamma_{\min},\gamma_{\max}$ and the $C^{2}$ norm of $\gamma$, with $\|(I-P_{n}(s))U_{T}(s)P_{n}(0)\|\le C/T$ for $s\in[0,1]$ ([[thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate]]); the strong propagator $U_{T}$ of the common-domain family exists and is unique ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]]).

[F4] **Protocol readings.** The protocol declares $U_{T}$ as its propagator, $P_{n}(s)$ as a followed spectral projection when the label is uniformly gapped and coherently followed, and $p_{\mathrm{leak}}(s)=\|(I-P_{n}(s))\psi(sT)\|^{2}$ as the Born leakage probability of a unit initial vector in $\operatorname{ran}P_{n}(0)$ ([[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] clauses (b), (c); [[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[def-nrqm-framework-quantities-and-units]]).

[F5] **Spectral and norm readings.** $\sigma(H_{\kappa})$ and the projections are those of [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]] and [[def-projection-valued-measure]]; for a bounded $B$ and vector $v$, $\|Bv\|\le\|B\|\|v\|$ and complementary projections $Q$, $I-Q$ satisfy $\|Qv\|^{2}+\|(I-Q)v\|^{2}=\|v\|^{2}$ ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-hilbert-space]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

**Proof technique:** direct; identify the scaled physical family with the supplier's normalized Coulomb family, verify the uniform gap from the model's spectrum theorem, and rescale the supplier's $1/T$ estimate to physical time.

**Given:** the data of the Statement and [F1]-[F5].

1.1 [Levels, degeneracy and uniform gap] By [F1] and [F2] applied at each $s$ with $\kappa=\kappa(s)$, the eigenvalues of $H(s)=\frac{\hbar^{2}}{2m}A(s)$ are exactly $E_{n}(s)=-\frac{\hbar^{2}}{2m}\frac{\gamma(s)^{2}}{4n^{2}}=-\frac{m\kappa(s)^{2}}{2\hbar^{2}n^{2}}$, the level $n$ has eigenspace dimension $n^{2}$, the spectrum has no eigenvalue in $[0,\infty)$ and its essential part is $[0,\infty)$. The complementary distance of $E_{n}(s)$ is therefore $\min\{E_{n}(s)-E_{n+1}(s),\ E_{n-1}(s)-E_{n}(s)\ (n\ge2),\ |E_{n}(s)|\}$ with $E_{j}(s)=-\frac{\hbar^{2}}{2m}\frac{\gamma(s)^{2}}{4j^{2}}$; in units of $\frac{\hbar^{2}}{2m}\gamma(s)^{2}$ these are $\frac{2n+1}{4n^{2}(n+1)^{2}}$, $\frac{2n-1}{4n^{2}(n-1)^{2}}$ and $\frac{1}{4n^{2}}$, and $\frac{2n+1}{4n^{2}(n+1)^{2}}\le\frac{2n-1}{4n^{2}(n-1)^{2}}$ for $n\ge2$ and $\frac{2n+1}{4n^{2}(n+1)^{2}}\le\frac{1}{4n^{2}}$ for all $n\ge1$, since $2n+1\le(n+1)^{2}$ and $(2n-1)(n+1)^{2}\ge(2n+1)(n-1)^{2}$; hence the distance is at least $\frac{\hbar^{2}}{2m}\gamma(s)^{2}\delta_{n}\ge\frac{\hbar^{2}}{2m}\gamma_{\min}^{2}\delta_{n}=g_{n}>0$, uniformly in $s$ and continuous in $s$, so the label is uniformly gapped and coherently followed in the reading of [F4]. This is clause (a). [F1, F2, F4, F5, algebra]

2.1 [Rescaling the supplier] By [F1] the family $A(s)$ satisfies the hypotheses of [F3] with $\gamma_{\min}=2m\kappa_{\min}/\hbar^{2}$ and $\gamma_{\max}=2m\kappa_{\max}/\hbar^{2}$, and by step 1.1 the named eigenvalue has the uniform gap $g_{n}>0$, so [F3] supplies a constant $C<\infty$ with the normalized bound $\|(I-P_{n}(s))U^{A}_{S}(s)P_{n}(0)\|\le C/S$, where $U^{A}_{S}$ solves $i\partial_{s}U^{A}_{S}=SA(s)U^{A}_{S}$. The physical family is $H(s)=\frac{\hbar^{2}}{2m}A(s)$, so the physical equation $i\hbar\partial_{s}U_{T}=TH(s)U_{T}$ is $i\partial_{s}U_{T}=\frac{T\hbar}{2m}A(s)U_{T}$; hence $U_{T}=U^{A}_{S}$ with $S=\frac{T\hbar}{2m}$ and the normalized bound becomes $\|(I-P_{n}(s))U_{T}(s)P_{n}(0)\|\le 2mC/(\hbar T)$. Setting $C_{n}:=\frac{2mC}{\hbar}$ (seconds; finite, depending only on $n,m,\hbar$ and the path data through $\gamma$) gives the operator bound of clause (b). [step 1.1, F1, F3, algebra]

3.1 [Born leakage and survival] Let $\psi(0)\in\operatorname{ran}P_{n}(0)$ be unit, so $P_{n}(0)\psi(0)=\psi(0)$; $U_{T}(s,0)$ is unitary, so $\psi(sT)$ is unit, and $(I-P_{n}(s))\psi(sT)=(I-P_{n}(s))U_{T}(s,0)P_{n}(0)\psi(0)$; the operator bound of step 2.1 and [F5] give $\|(I-P_{n}(s))\psi(sT)\|\le C_{n}/T$, whose square is $p_{\mathrm{leak}}(s)$ by [F4], and the survival probability is $1-p_{\mathrm{leak}}(s)\ge1-C_{n}^{2}/T^{2}$ by [F5]. This is clause (b). [step 2.1, F4, F5, algebra]

4.1 [Scope] The identification used only the declared one-centre model, its spectrum theorem and the normalized adiabatic supplier; the coupling path is an external source strength of that model, no laboratory field, Stark coupling, rate, selection or empirical comparison entered, which is clause (c). [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Where the physics is added.** The supplier proves the estimate for the abstract family $A(s)=-\Delta-\gamma(s)/|\cdot|$; the theorem adds the identification of that family with the declared Coulomb model at a prescribed source strength, the verification of the uniform gap from the model's own spectrum theorem with the explicit rational constant $\delta_{n}$, and the conversion of the supplier's slow-time parameter to the physical protocol duration.
- **The regularity assumption.** The branch-(u) regularity $s\mapsto H(s)\in C^{1}([0,1];\mathcal B(Y,L^{2}))$ is declared with the protocol model; for the Coulomb family it rests on the boundedness of the multiplication $u\mapsto u/|x|$ from $Y=H^{2}$ to $L^{2}$ and on the differentiability of the path, which the cited mathematics of the model supplies. It is stated as a hypothesis here rather than re-derived.
