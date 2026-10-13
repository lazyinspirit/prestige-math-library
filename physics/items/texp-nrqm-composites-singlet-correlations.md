---
id: texp-nrqm-composites-singlet-correlations
aliases: [ nrqm-composites-singlet-correlations ]
kind: thought-experiment
domain: physics
title: "The spin singlet of two declared spin-half factors: directional
  correlations, perfect anti-correlation and setting-independent marginals"
status: published
origin: session
dependency_level: 14
deps:
  [
    def-countable-choice,
    def-axiom-of-choice,
    def-nrqm-angular-momentum-framework-angular-momentum-observables,
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-framework-reduced-preparations,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    post-nrqm-framework-observable-and-probability,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws,
    pthm-nrqm-composites-local-instruments-and-no-signalling,
    pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations,
    pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement,
    thm-nrqm-orbital-and-spin-tensor-spin-composition
  ]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  pthm-nrqm-composites-local-instruments-and-no-signalling: physical-result
  pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations: physical-result
  pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement: physical-result
  thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An idealized model computation for the internal-factor
  composite of two declared spin-half factors in the singlet preparation: the
  reduced preparations, the joint PVM of the two local directional spin
  readouts, its outcome probabilities predicted by P2, the resulting correlation
  expectation and the setting-independent marginals. The declared settings and
  PVM are model inputs; no particular apparatus, performed laboratory
  measurement, recorded trial, measured correlation or empirical fact is
  asserted, and the item draws no conclusion about nature."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the spin singlet of an
        electron-positron pair and the expectation value of the product of the
        two spin measurements"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 5, chapter pages
        16-19: the singlet state of two spin-half particles and the joint
        probability for spin measurements along two directions"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 1.4 printed pages 45-47 (PDF pages 57-59): tensor products of
        finite-dimensional spaces and product bases"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition, state and measurement readings for the
internal factors of two declared spin-half particles
([[thm-nrqm-orbital-and-spin-tensor-spin-composition]],
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-composites-framework-reduced-preparations]],
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]),
and assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), as required by the cited
spin-outcome spectral construction. Let
$V=\mathbb C^{2}$ be a declared spin-half internal factor with orthonormal
basis $(e_{+},e_{-})$ and spin matrices $J_{i}=\tfrac12\sigma_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]], so that
$S_{i}:=\hbar J_{i}$, with unit $\mathrm{J\,s}$, and for each unit vector
$n\in\mathbb R^{3}$ let $S_{n}:=\sum_{i}n_{i}S_{i}$. On the declared
composite of the two internal factors $V\widehat\otimes V$, define the total
spin component for each $i\in\{x,y,z\}$ by
$$S^{\mathrm{tot}}_{i}:=S_i\otimes I_V+I_V\otimes S_i.$$
For a unit direction $n$ the local spin observable is
$S_{n}\otimes I_V$ or $I_V\otimes S_n$, read as a bounded assigned sharp
observable of its factor with unit $\mathrm{J\,s}$
([[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause
(c), [[def-nrqm-observables-framework-observable-and-outcome-law]]). Put
$$\Psi:=\frac{1}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\bigr),\qquad \rho:=T_{\Psi,\Psi}\in D(V\widehat\otimes V),$$
the **singlet preparation**, and let $\rho_{A}=\operatorname{Tr}_{B}\rho$,
$\rho_{B}=\operatorname{Tr}_{A}\rho$ be its reduced preparations. Then:
 
**(a) Singlet data.** $\Psi$ is a unit vector; $S^{\mathrm{tot}}_{i}\Psi=0$ for
all $i$; $\rho_{A}=\rho_{B}=\tfrac12 I$; and the Schmidt expansion of $\Psi$
is $\Psi=\tfrac{1}{\sqrt2}\bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\bigr)$
with two equal coefficients, so $\Psi$ is not a product vector and both
reduced preparations are mixed with $\operatorname{tr}\rho_{A}^{2}=\tfrac12$.
 
**(b) Joint directional laws.** For unit vectors $a,b\in\mathbb R^{3}$ with
$\theta:=\arccos(a\cdot b)\in[0,\pi]$, put
$P_{n,\varepsilon}=\frac12(I+\varepsilon n\cdot\sigma)$ for
$\varepsilon\in\{-1,+1\}$. These are the spectral projections of $S_n$.
Define the four-outcome joint PVM on the power set of $\{-1,+1\}^{2}$ by
$$G_{a,b}(C):=\sum_{(\varepsilon,\delta)\in C}P_{a,\varepsilon}\otimes P_{b,\delta}\qquad(C\subseteq\{-1,+1\}^{2}).$$
The declared PVM is the ideal joint model readout for the two factors; its
P2 outcome probabilities
$p(\varepsilon,\delta):=\operatorname{tr}\bigl(\rho G_{a,b}(\{(\varepsilon,\delta)\})\bigr)$ are
$$p(+,+)=p(-,-)=\tfrac12\sin^{2}\tfrac{\theta}{2},\qquad p(+,-)=p(-,+)=\tfrac12\cos^{2}\tfrac{\theta}{2},$$
where the first sign refers to the outcome $+\hbar/2$ or $-\hbar/2$ of
$S_{a}\otimes I$ and the second to that of $I\otimes S_{b}$;
in particular the four numbers are nonnegative and sum to one.
 
**(c) Correlation function.** With the product $\varepsilon\delta$ of the two
sign labels,
$$\mathbb E(a,b):=\sum_{\varepsilon,\delta\in\{-1,+1\}}\varepsilon\delta\,p(\varepsilon,\delta)=-\cos\theta=-a\cdot b .$$
In particular $\mathbb E(a,a)=-1$ and $\mathbb E(a,-a)=+1$: the outcomes are
perfectly anti-correlated for equal directions.
 
**(d) Setting-independent marginals.** The marginal laws are
$p_{A}(\pm)=\tfrac12$ and $p_{B}(\pm)=\tfrac12$, independent of $b$ and of
$a$ respectively; the reduced preparations $\rho_{A}=\rho_{B}=\tfrac12 I$ are
unchanged under the other factor's declared ideal local measurement model
followed by discarding its record, in agreement with
[[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b).
 
**(e) Scope.** This is a thought experiment of the declared framework: the
composite is an internal-factor composite, and the PVM and probabilities in
clause (b) are ideal model objects and predictions under P2. The particles are
not assigned spatial positions or worldlines here; no spatial separation,
temporal order, relativistic consideration, concrete apparatus, performed
measurement, recorded data or empirical correlation enters. The computation
draws no conclusion about nature and makes no claim about the completeness of
the framework or about any hidden-variable model.

## Facts & Assumptions

**Given:** The declared spin-half internal factor $V=\mathbb C^{2}$ with basis $(e_{+},e_{-})$ and the spin matrices $S_{i}=\hbar J_{i}$; the declared composite $V\widehat\otimes V$ with local observables $S_{n}\otimes I$, $I\otimes S_{m}$; the singlet vector $\Psi$ and preparation $\rho$; unit directions $a,b$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Finite spin-half matrices.** $J_{i}=\frac12\sigma_{i}$ is self-adjoint on $V$ with $J_{z}e_{\pm}=\pm\frac12e_{\pm}$, $J_{+}e_{-}=e_{+}$, $J_{+}e_{+}=0$, and $\sigma_{i}\sigma_{j}=\delta_{ij}I+i\sum_{k}\varepsilon_{ijk}\sigma_{k}$, so $S_{n}=\frac{\hbar}{2}n\cdot\sigma$ with $(n\cdot\sigma)^{2}=I$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a), (b), (e)).

[F2] **Directional outcome laws on the declared internal factor.** Put $A_n=n\cdot\sigma$ on $V=\mathbb C^2$. The matrices of [F1] give $A_n^*=A_n$, $A_n^2=I$ and $\operatorname{tr}A_n=0$ for unit $n$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)). Hence $P_{n,\pm}=(I\pm A_n)/2$ are self-adjoint idempotents, $P_{n,+}P_{n,-}=0$ and $P_{n,+}+P_{n,-}=I$. Each has trace one, so neither is zero or $I$ and each has rank one on the two-dimensional space. The identity $S_n=(\hbar/2)(P_{n,+}-P_{n,-})$ therefore identifies them as the spectral projections, with eigenvalues $\pm\hbar/2$. For a unit $\psi\in V$, P2 assigns $\mu^{S_n}_\psi(\{\pm\hbar/2\})=\operatorname{tr}(T_{\psi,\psi}P_{n,\pm})=\langle P_{n,\pm}\psi,\psi\rangle=\|P_{n,\pm}\psi\|^2=(1\pm\langle A_n\psi,\psi\rangle)/2$ ([[post-nrqm-framework-observable-and-probability]] clause (ii), [[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b), (d)). This finite-factor deduction is distinct from [[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clauses (a), (c), whose outcome law is on $H_{1/2}=L^2(\mathbb R^3;\mathbb C^2)$ with fibrewise projections.

[F3] **Tensor composition.** For the spin-half factor, the mathematical tensor-spin supplier defines the dimensionless total components $J^{\mathrm{tot}}_{i}=J_i\otimes I_V+I_V\otimes J_i$; the completed tensor product preserves the elementary tensor pairing, and the bounded tensor calculus has the adjoint and product rules ([[thm-nrqm-orbital-and-spin-tensor-spin-composition]] clause (a), [[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a), (b), [[lem-nrqm-composites-bounded-tensor-maps]] clauses (a)-(c)). Thus the displayed $S_i^{\mathrm{tot}}$ is $\hbar J_i^{\mathrm{tot}}$. No annihilation of the displayed singlet is asserted by this supplier; that action is computed below.

[F4] **Partial trace and reductions.** $\operatorname{Tr}_{B}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$, and for unit $\Psi=\frac{1}{\sqrt2}(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+}))$ the reduced preparations are $\rho_{A}=\frac12T_{e_{+},e_{+}}+\frac12T_{e_{-},e_{-}}$ and $\rho_{B}=\frac12T_{e_{-},e_{-}}+\frac12T_{e_{+},e_{+}}$; the purity criterion gives $\operatorname{tr}\rho_{A}^{2}=\frac12$ and shows $\Psi$ is not a product vector ([[lem-nrqm-composites-separable-partial-trace]] clause (c), [[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]] clauses (a), (b)).

[F5] **Joint model outcome law.** Once the family $G_{a,b}$ is verified to be a declared ideal sharp measurement in step 1.2, P2 assigns probabilities $\operatorname{tr}(\rho G_{a,b}(\{(\varepsilon,\delta)\}))$; for rank-one local projections the pairing is $|\langle\Psi,\kappa(x\otimes y)\rangle|^{2}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a), (b), [[post-nrqm-framework-observable-and-probability]] clause (ii), [[lem-nrqm-composites-rank-one-operator-calculus]] clause (e)).

[F6] **No-signalling.** A declared instrument of one factor leaves the reduced preparation of the other factor unchanged when its record is discarded ([[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b)).

[F7] **Choice hypothesis.** The Axiom of Choice is inherited by the adopted composite interface for local spectral readouts ([[def-axiom-of-choice]]). The finite-matrix derivation in [F2] uses no further choice or full-space spin outcome premise.

## Proof

**Proof technique:** direct; read the singlet's reduced preparations off the partial trace, project the singlet onto the product of directional spin eigenstates to obtain the joint laws, and evaluate the correlation sum and the marginals.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Singlet data and reduced preparations] The basis actions of the Pauli matrices are $\sigma_xe_+=e_-$, $\sigma_xe_-=e_+$, $\sigma_ye_+=ie_-$, $\sigma_ye_-=-ie_+$, $\sigma_ze_+=e_+$, and $\sigma_ze_-=-e_-$. On each of the two terms $e_+\otimes e_-$ and $e_-\otimes e_+$, the $z$-component $\sigma_z\otimes I+I\otimes\sigma_z$ vanishes; applying the displayed $x$- and $y$-actions shows respectively that $(\sigma_x\otimes I+I\otimes\sigma_x)(e_+\otimes e_--e_-\otimes e_+)=0$ and $(\sigma_y\otimes I+I\otimes\sigma_y)(e_+\otimes e_--e_-\otimes e_+)=0$. Since $S_i^{\mathrm{tot}}=\frac{\hbar}{2}(\sigma_i\otimes I+I\otimes\sigma_i)$, this proves $S_i^{\mathrm{tot}}\Psi=0$ for all three indices. Orthonormality makes $\Psi$ unit; the partial-trace formula [F4] gives $\rho_A=\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-}=\frac12I$ and $\rho_B=\frac12I$, with $\operatorname{tr}\rho_A^2=\frac12$. The two positive Schmidt coefficients show $\Psi$ is not product. This is (a). [given, F1, F3, F4, algebra]

1.2 [The declared joint PVM] For each unit $a$, the two operators $P_{a,\varepsilon}$ are orthogonal projections with sum $I_V$ by [F2]; likewise for $b$. By [F3], each $G_{a,b}(\{(\varepsilon,\delta)\})=P_{a,\varepsilon}\otimes P_{b,\delta}$ is an orthogonal projection. The tensor product rule shows distinct outcome pairs give orthogonal projections, and $\sum_{\varepsilon,\delta}G_{a,b}(\{(\varepsilon,\delta)\})=(\sum_\varepsilon P_{a,\varepsilon})\otimes(\sum_\delta P_{b,\delta})=I_V\otimes I_V$. Thus $G_{a,b}$ is a finite PVM, hence a declared ideal sharp joint measurement under P3. [F2, F3, F7, algebra]

1.3 Fix unit $a$ and choose an orthonormal eigenbasis $(u_+,u_-)$ of $a\cdot\sigma$, with eigenvalues $+1,-1$. Write its two columns in the fixed basis $(e_+,e_-)$ as the unitary matrix $W$ and set $\Delta=\det W$. Expanding the two elementary tensors gives $\kappa(u_+\otimes u_-)-\kappa(u_-\otimes u_+)=\Delta[\kappa(e_+\otimes e_-)-\kappa(e_-\otimes e_+)]$. Orthonormality gives $|\Delta|^2=\|u_+\|^2\|u_-\|^2-|\langle u_+,u_-\rangle|^2=1$, by direct two-coordinate expansion. Thus with $\eta=\Delta^{-1}$, the fixed vector is $\Psi=\eta[\kappa(u_+\otimes u_-)-\kappa(u_-\otimes u_+)]/\sqrt2$, where $|\eta|=1$. For unit $b$ use $P_{b,\pm}=(I\pm b\cdot\sigma)/2$ from [F2]. This phase changes no projection norm or probability. [given, F1, F2, F3, algebra]

2.1 [Joint outcome probabilities] By step 1.3, $(P_{a,+}\otimes P_{b,+})\Psi=\eta\kappa(u_+\otimes P_{b,+}u_-)/\sqrt2$. Since $|\eta|=1$, [F5] and [F2] give $p(+,+)=\|P_{b,+}u_-\|^2/2=[1+\langle(b\cdot\sigma)u_-,u_-\rangle]/4$. The Pauli identities [F1] give $(a\cdot\sigma)(b\cdot\sigma)+(b\cdot\sigma)(a\cdot\sigma)=2(a\cdot b)I$. Pairing this identity against $u_-$ and using self-adjointness and $(a\cdot\sigma)u_-=-u_-$ gives $\langle(b\cdot\sigma)u_-,u_-\rangle=-a\cdot b$; the same calculation for $u_+$ gives $+a\cdot b$. Applying the other three projection pairs therefore gives $p(+,+)=p(-,-)=(1-a\cdot b)/4=\sin^2(\theta/2)/2$ and $p(+,-)=p(-,+)=(1+a\cdot b)/4=\cos^2(\theta/2)/2$, where $\cos\theta=a\cdot b$. These nonnegative numbers sum to one, proving (b). [given, F1, F2, F3, F5, F7, step 1.2, step 1.3, algebra]

3.1 [Correlation and marginals] Summing with the product signs, $\mathbb E(a,b)=p(+,+)+p(-,-)-p(+,-)-p(-,+)=\frac12\sin^{2}\frac{\theta}{2}+\frac12\sin^{2}\frac{\theta}{2}-\frac12\cos^{2}\frac{\theta}{2}-\frac12\cos^{2}\frac{\theta}{2}=\sin^{2}\frac{\theta}{2}-\cos^{2}\frac{\theta}{2}=-\cos\theta$, which is (c) since $\theta$ is the angle between $a$ and $b$; the marginals are $p_{A}(+)=p(+,+)+p(+,-)=\frac12$ and $p_{A}(-)=\frac12$, and likewise $p_{B}(\pm)=\frac12$, independent of the other direction. The preparations $\rho_{A}=\rho_{B}=\frac12I$ are unchanged by a discarded local instrument on the other factor by [F6]; this is (d). [given, F2, F6, step 2.1, algebra]

4.1 [Assembly and scope] Step 1.1 is (a), step 2.1 is (b), step 3.1 is (c), (d); only the declared internal-factor composite and the cited mathematics were used. No spatial, temporal, relativistic, concrete-apparatus or empirical input enters, which is (e). [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Anti-correlation and the singlet.** For $b=\pm a$ the correlation is $\mp1$, the perfect anti-correlation (or correlation for the reversed direction) of the model. For $a\perp b$ the correlation vanishes, $\mathbb E=0$.
- **Correlated but not signalling.** The joint laws depend on both directions, while each marginal is the fixed law $\frac12$ of the maximally mixed reduced preparation: the model's correlations are not a dependence of one factor's local statistics on the other factor's setting.
- **Not an experiment.** No counts, apparatus or uncertainty analysis appears; a comparison of such a model with recorded data would require a separate experiment item with its own preparation, efficiency and sampling qualifications, and the Bell comparison belongs to a later page.
