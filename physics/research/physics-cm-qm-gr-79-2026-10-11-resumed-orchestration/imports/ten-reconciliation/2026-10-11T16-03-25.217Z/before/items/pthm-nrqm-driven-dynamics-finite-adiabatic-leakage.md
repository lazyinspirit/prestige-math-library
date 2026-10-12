---
id: pthm-nrqm-driven-dynamics-finite-adiabatic-leakage
aliases: [nrqm-driven-dynamics-finite-adiabatic-leakage]
kind: physics-theorem
domain: physics
title: "Finite-dimensional gapped protocol: the 1/T leakage estimate, the intertwining propagator and the Born leakage probability"
status: draft
origin: session
dependency_level: 10
deps: [lem-nrqm-composites-density-and-scalar-spectral-probability, def-nrqm-driven-dynamics-framework-adiabatic-protocol, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-framework-quantities-and-units, thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-inner-product-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-nrqm-driven-dynamics-framework-adiabatic-protocol: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared finite-dimensional adiabatic protocol: regularity of the followed cluster projection, the intertwining of the modified propagator, the operator-norm leakage estimate ||(I-P(s))U_T(s)P(0)|| <= C/T with the explicit constant, and the resulting Born leakage and survival probabilities of an initial preparation in the followed subspace. The theorem is conditional on the finite branch, a uniform positive gap and coherent following; it asserts no unbounded family, no gap closing, no laboratory ramp, no branch selection and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 printed pages 153-159 (PDF pages 165-171): the Riesz projection of a uniformly separated cluster and its differentiability"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.2 printed pages 206-208 (PDF pages 214-216): the gapped-subspace behaviour under a slowly varying perturbation, with the adiabatic sentence recorded as an assertion of the source that this theorem replaces by an explicit estimate"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared adiabatic protocol of [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] in its **finite branch (f)**: $\mathfrak H=\mathbb C^{d}$ for some $d\ge1$, $H\in C^{2}([0,1];\operatorname{Herm}(\mathbb C^{d}))$, $T>0$ and $U_{T}(s,\sigma)$ the protocol propagator, and let $P(s)$ be the spectral projection of $H(s)$ for a spectral cluster $\sigma_{P}(s)$ that is **uniformly gapped** with
$$\operatorname{dist}\bigl(\sigma_{P}(s),\sigma(H(s))\setminus\sigma_{P}(s)\bigr)\ge g>0\qquad(s\in[0,1])$$
and **coherently followed** in the sense of the protocol definition (continuity in operator norm, equivalently the local Riesz continuation of $P(0)$). Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Regularity of the followed cluster.* $P\in C^{2}([0,1];\operatorname{End}(\mathbb C^{d}))$, the commutator $K(s):=[P'(s),P(s)]$ is anti-Hermitian of class $C^{1}$ with $[K(s),P(s)]=P'(s)$, and there is a $C^{1}$ Hermitian family $X(s)$ with $[H(s),X(s)]=K(s)$ for every $s\in[0,1]$.

(b) *Intertwining.* Let $U_{A}$ solve $i\,\partial_{s}U_{A}(s)=(TH(s)/\hbar+iK(s))U_{A}(s)$, $U_{A}(0)=I$ (equivalently $U_{A}'=(-iTH/\hbar+K)U_{A}$). Then $P(s)U_{A}(s)=U_{A}(s)P(0)$ for every $s\in[0,1]$.

(c) *Leakage estimate.* With
$$C:=\hbar\Bigl(2\sup_{s\in[0,1]}\|X(s)\|+\int_{0}^{1}\bigl(\|X'(s)\|+\|K(s)\|\,\|X(s)\|\bigr)\,ds\Bigr)<\infty,$$
one has, for every $s\in[0,1]$,
$$\bigl\|(I-P(s))U_{T}(s)P(0)\bigr\|\le\frac{C}{T},$$
and therefore, for every unit vector $\psi(0)\in\operatorname{ran}P(0)$ with $\psi(sT)=U_{T}(s,0)\psi(0)$,
$$p_{\mathrm{leak}}(s)=\bigl\|(I-P(s))\psi(sT)\bigr\|^{2}\le\frac{C^{2}}{T^{2}},\qquad \bigl\langle P(s)\psi(sT),\psi(sT)\bigr\rangle\ge1-\frac{C^{2}}{T^{2}} .$$ The same Born leakage and survival bounds hold for every supported mixed preparation $\rho_0=P(0)\rho_0P(0)$, with $\rho(s)=U_T(s,0)\rho_0U_T(s,0)^*$ and $p_{\rm leak}(s)=\operatorname{tr}(\rho(s)(I-P(s)))$.

(d) *Scope.* The estimate is conditional on the uniform positive gap, on coherent following and on the finite branch; the constant $C$ depends on the family and its label, not on $T$. The theorem asserts no statement for gap-closing families, no unbounded or common-domain family (which is the subject of the companion theorem), no laboratory protocol, no branch selection or relaxation, and no empirical result.

## Facts & Assumptions


**Given:** the declared finite-branch adiabatic protocol with family $H$, duration $T$, gap $g$, followed projection $P$ and propagator $U_{T}$; a unit vector $\psi(0)\in\operatorname{ran}P(0)$ and $s\in[0,1]$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Finite gapped adiabatic supplier and physical scaling.** Applied to the normalized generator $A=H/\hbar$, [[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]] gives $P\in C^2$, $K=[P',P]$, $[K,P]=P'$ and a $C^1$ Hermitian $X_A$ with $[A,X_A]=K$. Its modified propagator solves $iU_A'=(TA+iK)U_A$, intertwines $P$, and its leakage constant is $C_A=2\sup\|X_A\|+\int_0^1(\|X_A'\|+\|K\|\|X_A\|)$. Put $X=X_A/\hbar$; then $[H,X]=K$ and $C_A=\hbar(2\sup\|X\|+\int_0^1(\|X'\|+\|K\|\|X\|))$. The normalized protocol generator $TH/\hbar$ has the unitary Dyson propagator ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]), which solves exactly the physical equation $i\hbar U_T'=THU_T$.

[F2] **Protocol readings.** The protocol declares $U_{T}$ as its propagator, $P(s)$ as the followed subspace and $p_{\mathrm{leak}}(s)=\|(I-P(s))\psi(sT)\|^{2}$ as the leakage probability of a unit initial vector in $\operatorname{ran}P(0)$ ([[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] clauses (b), (c)); the probability is the Born outcome probability of the projection $I-P(s)$ in the evolved preparation, in the P2 reading ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[def-nrqm-framework-quantities-and-units]]).

[F3] **Norm and inner-product estimates.** For a bounded operator $B$ and a vector $v$ one has $\|Bv\|\le\|B\|\|v\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]]); for a projection $Q$ and unit $v$ the identity $\|Qv\|^{2}+\|(I-Q)v\|^{2}=\|v\|^{2}=1$ holds in the inner product of $\mathbb C^{d}$ ([[def-inner-product-space]]; [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]); and $I-P(s)$ is again a projection because $P(s)$ is an orthogonal spectral projection.

[F4] **Supported densities.** Every density has a trace-norm convergent orthonormal expansion with positive eigenvalue weights $\rho_0=\sum_jw_jT_{u_j,u_j}$, $\sum_jw_j=1$, and its projection probabilities are the weighted pure projection probabilities ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], Statement(a),(b)).

## Proof

**Proof technique:** direct; instantiate the finite gapped adiabatic supplier at the protocol data and convert its operator-norm leakage estimate into the Born leakage probability.

**Given:** the data of the Statement and [F1]-[F4].

1.1 [Regularity, commutator and intertwining] The family $A=H/\hbar$ is C² Hermitian with the same coherently followed spectral projections and gap $g/\hbar>0$. Applying [F1] and putting $X=X_A/\hbar$ gives $P\in C^{2}$, the anti-Hermitian $K=[P',P]$ with $[K,P]=P'$, the $C^{1}$ Hermitian $X$ with $[H,X]=K$, and the intertwining $P(s)U_{A}(s)=U_{A}(s)P(0)$. These are clauses (a) and (b). [F1, given]

2.1 [Leakage operator estimate] [F1] gives $\|(I-P(s))U_{T}(s)P(0)\|\le C/T$ with the displayed physical constant $C=C_A$ for every $s\in[0,1]$. This is the first display of clause (c). [F1, step 1.1, given]

3.1 [Born leakage and survival] Let $\psi(0)\in\operatorname{ran}P(0)$ be unit, so $P(0)\psi(0)=\psi(0)$, and let $\psi(sT)=U_{T}(s,0)\psi(0)$, a unit vector because $U_{T}$ is unitary [F1]. Then $$(I-P(s))\psi(sT)=(I-P(s))U_{T}(s,0)P(0)\psi(0),$$ so $\|(I-P(s))\psi(sT)\|\le\|(I-P(s))U_{T}(s,0)P(0)\|\le C/T$ by [F3] and step 2.1; squaring gives $p_{\mathrm{leak}}(s)\le C^{2}/T^{2}$ by [F2]. Since $P(s)$ and $I-P(s)$ are complementary projections on the unit vector $\psi(sT)$, the survival probability is $\langle P(s)\psi(sT),\psi(sT)\rangle=1-\|(I-P(s))\psi(sT)\|^{2}\ge1-C^{2}/T^{2}$ by [F3]. This is the second and third display of clause (c). [step 2.1, F2, F3, algebra]

4.1 [Supported mixed preparations] Let $\rho_0=P(0)\rho_0P(0)$. In the expansion of [F4], every vector of positive eigenvalue $w_j$ satisfies $u_j=w_j^{-1}\rho_0u_j\in\operatorname{ran}P(0)$. Unitary transport gives the same weights and orthonormal vectors $U_T(s,0)u_j$ in the evolved density. By [F4], its leakage projection probability is $\sum_jw_j\|(I-P(s))U_T(s,0)u_j\|^2$. The pure bound in step 3.1 holds for each such $u_j$, so this sum is at most $C^2/T^2$ since $\sum_jw_j=1$. The complementary projection probability is $1-p_{\rm leak}(s)\ge1-C^2/T^2$. All operators in the trace expression are bounded projections; no unbounded-density product or eigenvector selection within the degenerate energy level is required. [step 3.1, F4, algebra]

5.1 [Scope] The estimate used only the finite branch, the uniform gap $g>0$, the coherent following and the finite constant $C$, which does not depend on $T$; no gap-closing, unbounded, laboratory, selection or empirical statement entered, which is clause (d). [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **What the theorem replaces.** The sources motivate the adiabatic behaviour of a gapped level by the slowness of the perturbation; the theorem replaces that qualitative statement by the explicit operator bound $C/T$ and the Born bound $C^{2}/T^{2}$, valid uniformly on $[0,1]$ and only under the stated gap and following hypotheses.
- **Why coherent following is a hypothesis.** Without the uniform gap the Riesz projection of the initial cluster need not be defined away from $s=0$; the protocol therefore declares the followed cluster together with the gap, and both enter the constant through $X$ and $K$.
