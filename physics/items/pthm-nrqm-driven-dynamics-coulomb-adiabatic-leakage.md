---
id: pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage
aliases: [ nrqm-driven-dynamics-coulomb-adiabatic-leakage ]
kind: physics-theorem
domain: physics
title: "The slowly varying one-centre Coulomb source: verified uniform gap of
  the n-th level and the 1/T leakage estimate"
status: published
origin: session
dependency_level: 15
deps:
  [
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-nrqm-driven-dynamics-framework-adiabatic-protocol,
    def-nrqm-central-framework-coulomb-and-hydrogen-model,
    pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-framework-quantities-and-units,
    thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate,
    thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-sobolev-space-wkp-and-its-norm,
    def-discrete-and-essential-spectrum-of-a-self-adjoint-operator,
    def-projection-valued-measure,
    def-countable-choice,
    def-axiom-of-choice,
    thm-nrqm-coulomb-infinitesimal-kinetic-bound
  ]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
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
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared one-centre Coulomb model with a prescribed C^2
  path of the external source strength (the coupling kappa): the identification
  of the n-th Coulomb level and of its n^2-fold eigenspace along the path, the
  verification of a uniform positive gap from the model's spectrum theorem with
  the explicit rational lower bound, and the operator-norm and Born leakage
  estimates for an initial preparation in that level under the slowly varying
  source. The theorem concerns the declared external-source model only; it
  asserts no laboratory field or control, no linear Stark coupling, no
  transition rate, no branch selection and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 10.2 printed pages 222-233 (PDF pages 234-245): the hydrogen
        atom and its discrete spectrum, and Section 6.6 printed pages 153-159:
        perturbation of isolated eigenvalues"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1
        printed pages 181-200 (PDF pages 189-208): the hydrogenic spectrum E_n =
        -K/(2 a0 n^2) and the n^2 degeneracy of the level n"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared one-centre Coulomb model of [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with mass parameter $m>0$, action constant $\hbar>0$ and declared coupling $\kappa>0$ of unit $\mathrm{J\,m}$, and its energy operator $H_{\kappa}=\frac{\hbar^{2}}{2m}C_{\gamma}$, $C_{\gamma}=-\Delta-\gamma/|\cdot|$ on $Y=H^{2}(\mathbb R^{3};\mathbb C)$ with $\gamma=2m\kappa/\hbar^{2}$. Adopt the declared adiabatic protocol of [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] in its common-domain branch (u) with the following **declared source-strength family**: a prescribed path $\kappa\in C^{2}([0,1];(0,\infty))$ with $0<\kappa_{\min}\le\kappa(s)\le\kappa_{\max}<\infty$, the family
$$H(s):=H_{\kappa(s)},\qquad \gamma(s):=\frac{2m\kappa(s)}{\hbar^{2}},\qquad A(s):=-\Delta-\frac{\gamma(s)}{|\cdot|},\qquad D(A(s))=Y,$$
read as the model's energy at slow time $s$, a protocol duration $T>0$ (seconds), and the protocol propagator $U_{T}$ defined by $i\hbar\partial_{s}U_{T}(s,\sigma)=TH(s)U_{T}(s,\sigma)$, $U_{T}(\sigma,\sigma)=I$. For this prescribed positive $C^{2}$ path, the exact common domain, uniform graph-norm equivalence and $C^{2}([0,1];\mathcal B(Y,L^{2}))$ regularity are consequences of the Coulomb bound, proved below; they require no additional admissibility assumption on the path. Fix $n\ge1$ and let $P_{n}(s)$ be the spectral projection of $H(s)$ for its $n$-th level. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Level, degeneracy and uniform gap.* For every $s\in[0,1]$ the number
$$E_{n}(s)=-\frac{m\kappa(s)^{2}}{2\hbar^{2}n^{2}}=\frac{\hbar^{2}}{2m}\Bigl(-\frac{\gamma(s)^{2}}{4n^{2}}\Bigr)$$
is an eigenvalue of $H(s)$ with eigenspace of dimension $n^{2}$, the spectrum of $H(s)$ has no eigenvalues in $[0,\infty)$, its essential spectrum is $[0,\infty)$, and the complementary distance of the level is bounded below uniformly by
$$\operatorname{dist}\bigl(E_{n}(s),\sigma(H(s))\setminus\{E_{n}(s)\}\bigr)\ \ge\ \frac{\hbar^{2}}{2m}\,\delta_{n}\,\gamma_{\min}^{2}\ =:\ g_{n}\ >\ 0,\qquad \delta_{n}:=\frac{2n+1}{4n^{2}(n+1)^{2}},\qquad \gamma_{\min}=\frac{2m\kappa_{\min}}{\hbar^{2}} .$$
Consequently $P_n\in C^2([0,1];\mathcal B(L^2,Y))$, and the family of projections $s\mapsto P_{n}(s)$ is a uniformly gapped, coherently followed label of the protocol in the sense of [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] clause (c).

(b) *Leakage estimate.* There is a constant $C_{n}<\infty$, depending only on $n$, on the mass parameter $m$, on $\hbar$ and on $\kappa_{\min},\kappa_{\max}$ and the $C^{2}$ norm of the path $\kappa$ (that is, on the data of the declared family), such that for every $s\in[0,1]$
$$\bigl\|(I-P_{n}(s))U_{T}(s,0)P_{n}(0)\bigr\|\le\frac{C_{n}}{T},$$
and therefore, for every unit vector $\psi(0)\in\operatorname{ran}P_{n}(0)$ with $\psi(t)=U_{T}(t/T,0)\psi(0)$,
$$p_{\mathrm{leak}}(s)=\bigl\|(I-P_{n}(s))\psi(sT)\bigr\|^{2}\le\frac{C_{n}^{2}}{T^{2}},\qquad \bigl\langle P_{n}(s)\psi(sT),\psi(sT)\bigr\rangle\ge1-\frac{C_{n}^{2}}{T^{2}} .$$ The same Born leakage and survival bounds hold for every supported mixed preparation $\rho_0=P_n(0)\rho_0P_n(0)$, with $\rho(s)=U_T(s,0)\rho_0U_T(s,0)^*$ and $p_{\rm leak}(s)=\operatorname{tr}(\rho(s)(I-P_n(s)))$.

(c) *Scope.* The theorem concerns the declared external-source family only: the coupling path is a prescribed source strength of the one-centre model, not an applied laboratory field, and the statement asserts no laboratory control, no linear Stark coupling (which has no uniformly gapped branch), no transition rate, no branch selection or relaxation, and no empirical result.

## Facts & Assumptions


**Given:** the declared one-centre Coulomb model with parameters $m,\hbar,\kappa$ and the source-strength path $\kappa(\cdot)$; the family $H(s)=H_{\kappa(s)}$, $\gamma(s)=2m\kappa(s)/\hbar^{2}$, $A(s)$; the duration $T$ and propagator $U_{T}$; the label $n\ge1$ and projections $P_{n}(s)$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Coulomb model data.** $H_{\kappa}=\frac{\hbar^{2}}{2m}C_{\gamma}$ is self-adjoint on the exact domain $Y=H^{2}(\mathbb R^{3};\mathbb C)$ ([[def-sobolev-space-wkp-and-its-norm]]) for every $\kappa>0$, with $\gamma=2m\kappa/\hbar^{2}$, and $(H_{\kappa},\mathrm J)$ is the model's declared energy observable with length scale $a_{\kappa}=\hbar^{2}/(m\kappa)$ and energy scale $\hbar^{2}/(2ma_{\kappa}^{2})$ ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c)).

[F2] **Coulomb spectrum.** For the fixed coupling $\kappa$: $\Psi_{nlm}\in D(H_{\kappa})$ are unit eigenvectors with $H_{\kappa}\Psi_{nlm}=E_{n}\Psi_{nlm}$, $E_{n}=-m\kappa^{2}/(2\hbar^{2}n^{2})$; the eigenvalues of $H_{\kappa}$ are exactly the numbers $E_{n}$, $n\ge1$, the eigenspace at $E_{n}$ has dimension $\sum_{l=0}^{n-1}(2l+1)=n^{2}$, and $H_{\kappa}$ has no eigenvalues in $[0,+\infty)$, whose spectral content is entirely essential spectrum $[0,+\infty)$ ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a)-(c), together with the essential-spectrum statement in clause (b)). The same statements hold for the scalar multiple $A(s)=\frac{2m}{\hbar^{2}}H_{\kappa(s)}$, with eigenvalues multiplied by $2m/\hbar^{2}$.

[F3] **Atomic adiabatic supplier.** For $A(s)=-\Delta-\gamma(s)/|\cdot|$ on $Y$ with $\gamma\in C^{2}([0,1];(0,\infty))$, $0<\gamma_{\min}\le\gamma(s)\le\gamma_{\max}<\infty$, if $e_{n}(s)=-\gamma(s)^{2}/(4n^{2})$ is the named eigenvalue with uniform complementary gap $g>0$ and $U_{T}$ solves $i\partial_{s}U_{T}=T A(s)U_{T}$, then there is $C<\infty$, depending on $n,\gamma_{\min},\gamma_{\max}$ and the $C^{2}$ norm of $\gamma$, with $\|(I-P_{n}(s))U_{T}(s)P_{n}(0)\|\le C/T$ for $s\in[0,1]$ ([[thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate]]); the strong propagator $U_{T}$ of the common-domain family exists and is unique ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]]).

[F4] **Protocol readings.** The protocol declares $U_{T}$ as its propagator, $P_{n}(s)$ as a followed spectral projection when the label is uniformly gapped and coherently followed, and $p_{\mathrm{leak}}(s)=\|(I-P_{n}(s))\psi(sT)\|^{2}$ as the Born leakage probability of a unit initial vector in $\operatorname{ran}P_{n}(0)$ ([[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] clauses (b), (c); [[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[def-nrqm-framework-quantities-and-units]]).

[F5] **Spectral and norm readings.** $\sigma(H_{\kappa})$ and the projections are those of [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]] and [[def-projection-valued-measure]]; for a bounded $B$ and vector $v$, $\|Bv\|\le\|B\|\|v\|$ and complementary projections $Q$, $I-Q$ satisfy $\|Qv\|^{2}+\|(I-Q)v\|^{2}=\|v\|^{2}$ ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-hilbert-space]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F6] **Exact-domain Coulomb estimate and graph control.** For $B=-\Delta$ on $Y=H^2$, $M u=u/|x|$ and every $\eta>0$, $\|Mu\|_2\le\eta\|Bu\|_2+\eta^{-1}\|u\|_2$; $B-\gamma M$ is self-adjoint on exactly $Y$ for every $\gamma>0$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] clauses (a),(c)). The fixed Fourier/Sobolev norm satisfies $\|u\|_Y\le c_0(\|u\|_2+\|Bu\|_2)$, and $B:Y\to L^2$ is bounded; the uniform graph and $C^2$ operator estimates are also supplied explicitly by [[thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate]] proof 1.1. Its proof 3.1 supplies the resolvent/PVM contour argument and inverse derivative formulas on the same exact domain, used explicitly below.

[F7] **Supported densities.** Every density has a trace-norm convergent orthonormal expansion with positive eigenvalue weights $\rho_0=\sum_jw_jT_{u_j,u_j}$, $\sum_jw_j=1$, and its projection probabilities are the weighted pure projection probabilities ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], Statement(a),(b)).

## Proof

**Proof technique:** direct; identify the scaled physical family with the supplier's normalized Coulomb family, derive common-domain regularity, verify the uniform gap and coherent Riesz following from the model's spectrum theorem, and rescale the supplier's $1/T$ estimate to physical time.

**Given:** the data of the Statement and [F1]-[F7].

1.1 [Common domain and automatic regularity] Put $B=-\Delta$, $Mu=u/|x|$ and $\gamma_{\max}=2m\kappa_{\max}/\hbar^2$. By [F6], each $A(s)=B-\gamma(s)M$ is self-adjoint on exactly the dense Hilbert domain $Y=H^2$, continuously embedded in $L^2$. Choose $\eta=(2\gamma_{\max})^{-1}$. For every $u\in Y$, $\gamma(s)\|Mu\|_2\le\tfrac12\|Bu\|_2+2\gamma_{\max}^2\|u\|_2$, whence $\|A(s)u\|_2\le\tfrac32\|Bu\|_2+2\gamma_{\max}^2\|u\|_2$ and $\|Bu\|_2\le2\|A(s)u\|_2+4\gamma_{\max}^2\|u\|_2$. Together with the fixed Fourier/Sobolev equivalence of [F6], these give uniform equivalence between $\|u\|_Y$ and $\|u\|_2+\|A(s)u\|_2$. Also $M:Y\to L^2$ is bounded, by the same estimate, so $A\in C^2([0,1];\mathcal B(Y,L^2))$ with $A'=-\gamma'M$ and $A''=-\gamma''M$. All these norms are controlled by $\gamma_{\max}$ and $\|\gamma\|_{C^2}$. Positive multiplication by $\hbar^2/(2m)$ gives the same exact domain and uniform graph equivalence for $H(s)$ and yields $H'=-\kappa'M$, $H''=-\kappa''M$. Thus every stated positive $C^2$ path automatically satisfies branch (u); [F3] supplies the unique domain-preserving unitary propagator for the self-adjoint $C^1$ family $T H(s)/\hbar$ on $Y$. [given, F1, F3, F6, algebra]

2.1 [Correct adjacent gaps and the whole level] By [F1] and [F2], $H(s)=(\hbar^2/(2m))A(s)$ has eigenvalues exactly $E_n(s)=-(\hbar^2/(2m))\gamma(s)^2/(4n^2)$, each eigenspace having dimension $n^2$; its nonnegative spectrum is the essential interval $[0,\infty)$ and contains no eigenvalue. Since $E_1<E_2<\cdots<0$, the complementary distance at $E_n$ is the minimum of the positive differences $E_{n+1}-E_n$, $E_n-E_{n-1}$ when $n\ge2$, and $|E_n|$. Dividing by $(\hbar^2/(2m))\gamma(s)^2$ gives, respectively, $\delta_n=(2n+1)/(4n^2(n+1)^2)$, $(2n-1)/(4n^2(n-1)^2)$ and $1/(4n^2)$. The first is the smallest: $2n+1\le(n+1)^2$, and $(2n-1)(n+1)^2-(2n+1)(n-1)^2=6n^2-2>0$ for $n\ge2$. Hence the distance is exactly $(\hbar^2/(2m))\gamma(s)^2\delta_n\ge g_n>0$. For the normalized family $A(s)$ this gives the uniform bound $\widetilde g_n=\delta_n\gamma_{\min}^2>0$, with $g_n=(\hbar^2/(2m))\widetilde g_n$. The eigenprojection refers to the entire $n^2$-dimensional space; no vector or sublevel is selected. [F1, F2, F5, step 1.1, algebra]

3.1 [Projection regularity and coherent local Riesz following] Write $e_n(s)=-\gamma(s)^2/(4n^2)$, $\rho=\widetilde g_n/3$ and $z(s,\theta)=e_n(s)+\rho e^{i\theta}$. Step 2.1 gives spectral distance at least $\rho$ on this circle. The exact-domain resolvent $R(s,\theta)=(z(s,\theta)-A(s))^{-1}$ therefore has $L^2$ norm at most $\rho^{-1}$ by the contour/PVM argument in [F6]. The identity $A(s)R=zR-I$ and step 1.1's uniform graph bound give a uniform $L^2\to Y$ bound, since $z$ is uniformly bounded by the path data. Put $B_j(s)=A^{(j)}(s)-e_n^{(j)}(s)I:Y\to L^2$ for $j=1,2$. The inverse equations on these exact spaces give joint continuity and $C^2$ regularity in $s$ by the local Neumann identity; differentiating gives $R'=RB_1R$ and $R''=RB_2R+2RB_1RB_1R$ in $\mathcal B(L^2,Y)$. These derivatives are uniformly bounded by the established bounds and $\|\gamma\|_{C^2}$. Thus $P_n(s)=(\rho/(2\pi))\int_0^{2\pi}e^{i\theta}R(s,\theta)\,d\theta$ is $C^2$ in $\mathcal B(L^2,Y)$; the PVM contour formula of [F6] identifies this integral with the full eigenprojection, and positive energy scaling leaves that eigenspace and projection unchanged. For any $s_0$, continuity of $e_n$ gives a neighborhood with $|e_n(s)-e_n(s_0)|<\rho/2$. The fixed circle $|z-e_n(s_0)|=\rho$ then encloses $e_n(s)$ and excludes the rest of the spectrum, whose distance from its center is at least $\widetilde g_n-\rho/2>\rho$. Its resolvents have the same local $C^2$ inverse construction, and its Riesz integral is exactly $P_n(s)$. On overlapping neighborhoods the integrals agree as the same named spectral projection. Therefore $P_n$ is norm-continuous and coincides with coherent local Riesz continuation from $P_n(0)$ in [F4], proving the final assertion of (a). [step 1.1, step 2.1, F1, F2, F4, F6, construct, algebra]

4.1 [Rescaling the supplier] By [F1] the family $A(s)$ satisfies the hypotheses of [F3] with $\gamma_{\min}=2m\kappa_{\min}/\hbar^{2}$ and $\gamma_{\max}=2m\kappa_{\max}/\hbar^{2}$, and by step 2.1 the normalized named eigenvalue has the uniform gap $\widetilde g_n>0$, with coherent $C^2$ projection supplied by step 3.1, so [F3] supplies a constant $C<\infty$ with the normalized bound $\|(I-P_{n}(s))U^{A}_{S}(s)P_{n}(0)\|\le C/S$, where $U^{A}_{S}$ solves $i\partial_{s}U^{A}_{S}=SA(s)U^{A}_{S}$. The physical family is $H(s)=\frac{\hbar^{2}}{2m}A(s)$, so the physical equation $i\hbar\partial_{s}U_{T}=TH(s)U_{T}$ is $i\partial_{s}U_{T}=\frac{T\hbar}{2m}A(s)U_{T}$; hence $U_{T}=U^{A}_{S}$ with $S=\frac{T\hbar}{2m}$ and the normalized bound becomes $\|(I-P_{n}(s))U_{T}(s)P_{n}(0)\|\le 2mC/(\hbar T)$. Setting $C_{n}:=\frac{2mC}{\hbar}$ (seconds; finite, depending only on $n,m,\hbar$ and the path data through $\gamma$) gives the operator bound of clause (b). [step 1.1, step 2.1, step 3.1, F1, F3, algebra]

5.1 [Born leakage and survival] Let $\psi(0)\in\operatorname{ran}P_{n}(0)$ be unit, so $P_{n}(0)\psi(0)=\psi(0)$; $U_{T}(s,0)$ is unitary, so $\psi(sT)$ is unit, and $(I-P_{n}(s))\psi(sT)=(I-P_{n}(s))U_{T}(s,0)P_{n}(0)\psi(0)$; the operator bound of step 4.1 and [F5] give $\|(I-P_{n}(s))\psi(sT)\|\le C_{n}/T$, whose square is $p_{\mathrm{leak}}(s)$ by [F4], and the survival probability is $1-p_{\mathrm{leak}}(s)\ge1-C_{n}^{2}/T^{2}$ by [F5]. This is clause (b). [step 4.1, F4, F5, algebra]

6.1 [Supported mixed preparations] Let $\rho_0=P_n(0)\rho_0P_n(0)$. In the expansion of [F7], every vector of positive eigenvalue $w_j$ satisfies $u_j=w_j^{-1}\rho_0u_j\in\operatorname{ran}P_n(0)$. Unitary transport gives the same weights and orthonormal vectors $U_T(s,0)u_j$ in the evolved density. By [F7], its leakage projection probability is $\sum_jw_j\|(I-P_n(s))U_T(s,0)u_j\|^2$. The pure bound in step 5.1 holds for each such $u_j$, so this sum is at most $C_n^2/T^2$ since $\sum_jw_j=1$. The complementary projection probability is $1-p_{\rm leak}(s)\ge1-C_n^2/T^2$. All operators in the trace expression are bounded projections; no unbounded-density product or eigenvector selection within the degenerate energy level is required. [step 5.1, F7, algebra]

7.1 [Scope] The identification used only the declared one-centre model, its spectrum theorem and the normalized adiabatic supplier; the coupling path is an external source strength of that model, no laboratory field, Stark coupling, rate, selection or empirical comparison entered, which is clause (c). [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, given] ∎

## Remarks

- **Where the physics is added.** The supplier proves the estimate for the abstract family $A(s)=-\Delta-\gamma(s)/|\cdot|$; the theorem adds the identification of that family with the declared Coulomb model at a prescribed source strength, the verification of the uniform gap from the model's own spectrum theorem with the explicit rational constant $\delta_{n}$, and the conversion of the supplier's slow-time parameter to the physical protocol duration.
- **Automatic regularity for the stated path.** The Hardy/infinitesimal kinetic bound proves the exact common $H^2$ domain, uniform graph-norm equivalence and $C^2(H^2\to L^2)$ regularity for every prescribed positive $C^2$ source-strength path. The explicit contour construction proves $C^2$ projection regularity and coherent Riesz following for the entire $n^2$-dimensional eigenspace. No additional path-admissibility or eigenvector-selection assumption is needed.
