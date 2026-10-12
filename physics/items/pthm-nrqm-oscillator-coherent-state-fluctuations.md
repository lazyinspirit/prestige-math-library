---
id: pthm-nrqm-oscillator-coherent-state-fluctuations
aliases: [ nrqm-oscillator-coherent-state-fluctuations ]
kind: physics-theorem
domain: physics
title: "Fluctuations of the oscillator coherent states and the position-momentum
  relation of the model"
status: draft
origin: pipeline
dependency_level: 12
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-oscillator-coherent-states,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-uncertainty-preparation-spread,
    def-nrqm-framework-quantities-and-units,
    pthm-nrqm-observables-preparation-moments,
    pthm-nrqm-uncertainty-robertson-relation,
    lem-nrqm-uncertainty-product-domain-commutator-identity,
    lem-nrqm-uncertainty-approximation-by-product-domain-vectors,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    thm-nrqm-oscillator-coherent-evolution-and-variance,
    thm-nrqm-oscillator-coherent-state-convergence,
    lem-nrqm-oscillator-closed-ladder-domains,
    def-hilbert-space,
    def-inner-product-space,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  pthm-nrqm-uncertainty-robertson-relation: physical-result
  lem-nrqm-uncertainty-product-domain-commutator-identity: mathematical-premise
  lem-nrqm-uncertainty-approximation-by-product-domain-vectors: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  thm-nrqm-oscillator-coherent-evolution-and-variance: mathematical-premise
  thm-nrqm-oscillator-coherent-state-convergence: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The preparation spreads of position and momentum in the
  coherent states of the one-dimensional oscillator model, the exact value
  hbar/2 of their product, the one-dimensional position-momentum relation Delta
  Q Delta P >= hbar/2 for every unit preparation vector in the common domain of
  the two model operators, and the saturation of that relation by every coherent
  preparation. The statement is a conditional consequence of the postulates P1,
  P2 and P5, of the adopted oscillator model, of the cited uncertainty and
  moment results and of the cited mathematics; it concerns the two separately
  assigned outcome laws in one preparation and asserts no joint outcome law, no
  apparatus resolution, no disturbance and no empirical result."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §4.3 printed pages 30-33: the coherent-state uncertainties
        (4.31)-(4.33) and the time-independence of Delta x"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed
        pages 37-41 (PDF pages 45-49): the Gaussian ground state, its position
        and momentum dispersions and the saturated uncertainty product"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), §2.2 printed
        pages 34-41 (PDF pages 37-44): the oscillator eigenstates and the
        normalizable Gaussian ground state"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
---

## Statement

Adopt the state and composition postulate P1, the observable and probability postulate P2 and the kinematics and massive-particle model postulate P5, read through the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), and the coherent-state family of [[def-nrqm-oscillator-coherent-states]]; assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $Q$ and $P$ be the model's position and momentum observables with their declared units ($\mathrm m$ and $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$), let $\ell=\sqrt{\hbar/(m\omega)}$, let $\Delta_{\rho}A$ be the preparation spread of an assigned sharp observable in the reading of [[def-nrqm-uncertainty-preparation-spread]], and write $\langle A\rangle_z:=\langle A\Psi_z,\Psi_z\rangle$ for the model's coherent preparation of label $z$. Then:

(a) **Coherent spreads.** For every $z\in\mathbb C$ the vector $\Psi_z$ lies in $D(Q)\cap D(P)$, the preparation spreads of $Q$ and $P$ in the pure preparation of $\Psi_z$ exist, and
$$\Delta_{\Psi_z}Q=\frac{\ell}{\sqrt2},\qquad \Delta_{\Psi_z}P=\frac{\hbar}{\ell\sqrt2},\qquad \Delta_{\Psi_z}Q\,\Delta_{\Psi_z}P=\frac{\hbar}{2};$$

(b) **Position-momentum relation of the model.** Every unit vector $f\in D(Q)\cap D(P)$ satisfies
$$\Delta_{f}Q\,\Delta_{f}P\ge\frac{\hbar}{2},$$
read in the product unit $\mathrm{kg}\,\mathrm m^{2}\mathrm s^{-1}$; consequently the value $\hbar/2$ attained in (a) is the minimum over the common domain, and it is attained by every coherent preparation;

(c) **Saturation.** For every $z\in\mathbb C$, with the centered vectors
$$x_z:=(Q-\langle Q\rangle_zI)\Psi_z,\qquad y_z:=(P-\langle P\rangle_zI)\Psi_z,$$
one has $\langle x_z,y_z\rangle=-i\hbar/2$; in particular $\operatorname{Re}\langle x_z,y_z\rangle=0$ and $x_z,y_z$ are linearly dependent, so $\|x_z\|\,\|y_z\|=|\langle x_z,y_z\rangle|=\hbar/2$;

(d) **Status.** Clauses (a)-(c) are conditional consequences of P1, P2, P5, the adopted oscillator model, the cited preparation-moment and uncertainty results and the cited mathematics. They concern the spreads of the two separately assigned outcome laws of $Q$ and $P$ in one preparation; they introduce no joint outcome law of position and momentum, no measurement error, no disturbance of the preparation, no dynamics and no empirical value. Whether a laboratory preparation and apparatus realize the pair of observables and produce this spread is a tested identification under the preparation and apparatus postulate P7.

## Facts & Assumptions

**Given:** the adopted postulates P1, P2, P5; the Axiom of Countable Choice and the Axiom of Choice; the one-dimensional oscillator model with parameters $m,\omega,\hbar>0$ and length $\ell$; the coherent states $\Psi_z$; a unit vector $f\in D(Q)\cap D(P)$; a complex number $z$.

[F1] **The model's observables.** $(Q,\mathrm m)$ and $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ are assigned sharp observables of the model with $D(Q)=\{f:xf\in L^{2}\}$, $Qf=xf$, $D(P)=\{f:D_xf\in L^{2}\}$, $Pf=-i\hbar D_xf$, where $D_x$ is the weak derivative, and $Q,P$ are the $d=1$, $r=1$ instances of the componentwise operators of [[lem-nrqm-kinematics-componentwise-position-and-momentum]]; the flow of the isolated model is generated by the assigned energy observable $H_1$ ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c); [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]; [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a)).

[F2] **Coherent data.** For every $z$: $\Psi_z$ is a unit vector with $a_\psi\Psi_z=z\Psi_z$ and $\Psi_z\in D(N_\psi^{k})$ for every $k$; $\langle\Psi_z,\Psi_w\rangle=e^{-(|z|^{2}+|w|^{2})/2+z\overline w}$; and $\Psi_0=\psi_0$ ([[def-nrqm-oscillator-coherent-states]] clauses (b), (c); [[thm-nrqm-oscillator-coherent-state-convergence]] clauses (a), (b), (c), (d), (e)).

[F3] **Exact coherent quantities.** With $Q$ and $P$ the position and momentum operators on $L^{2}(\mathbb R,dx)$ and $a_\psi=DaD^{-1}$, $a^\dagger_\psi=Da^\dagger D^{-1}$ the transported ladder operators,
$$Q\Psi_z=\frac{\ell}{\sqrt2}\bigl(a_\psi+a^\dagger_\psi\bigr)\Psi_z,\qquad P\Psi_z=\frac{\hbar}{i\ell\sqrt2}\bigl(a_\psi-a^\dagger_\psi\bigr)\Psi_z,$$
and the quadratic-form means and variances of the coherent vectors are
$$\langle Q\Psi_z,\Psi_z\rangle=\sqrt2\,\ell\operatorname{Re}z,\qquad\langle P\Psi_z,\Psi_z\rangle=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}z,$$
$$\|(Q-\langle Q\rangle_zI)\Psi_z\|^{2}=\frac{\ell^{2}}{2},\qquad\|(P-\langle P\rangle_zI)\Psi_z\|^{2}=\frac{\hbar^{2}}{2\ell^{2}};$$
and $\|a_\psi\Psi_z\|^{2}=|z|^{2}$, $\|a^\dagger_\psi\Psi_z\|^{2}=|z|^{2}+1$; also the adjoint relation $(a_\psi)^{*}=a^\dagger_\psi$ holds, the transport of $a^{*}=a^\dagger$ along the unitary $D$ ([[thm-nrqm-oscillator-coherent-evolution-and-variance]] clauses (d), (e); [[thm-nrqm-oscillator-coherent-state-convergence]] clause (e); [[lem-nrqm-oscillator-closed-ladder-domains]] clauses (b), (d), (e)).

[F4] **Means, variances and spreads.** For an assigned sharp observable $(A,u_A)$ and a unit vector $f\in D(A)$ the mean and second moment of the outcome law exist, $\int\lambda\,d\mu^{A}_f=\langle Af,f\rangle$, $\int\lambda^{2}\,d\mu^{A}_f=\|Af\|^{2}$, and the preparation variance and spread are
$$\operatorname{Var}_{f}(A)=\|(A-\langle Af,f\rangle I)f\|^{2},\qquad \Delta_{f}A=\operatorname{Var}_{f}(A)^{1/2},$$
read in the unit $u_A$ and its square ([[pthm-nrqm-observables-preparation-moments]] clauses (a), (b); [[def-nrqm-uncertainty-preparation-spread]] clauses (b), (c), (d)).

[F5] **Product domain and commutator in one dimension.** For $d=1$, $r=1$ the product domain is $D(QP)\cap D(PQ)=\{f:D_xf,xf,xD_xf\in L^{2}\}$ and $(QP-PQ)\varphi=i\hbar\varphi$ for every $\varphi$ in it ([[lem-nrqm-uncertainty-product-domain-commutator-identity]] clauses (b), (c)).

[F6] **Robertson relation.** For two assigned sharp observables $(A,u_A)$, $(B,u_B)$ and a unit vector $\psi\in D(A)\cap D(B)$: $\Delta_{\psi}A\Delta_{\psi}B\ge|\operatorname{Im}\langle A\psi,B\psi\rangle|$; and if in addition $\psi\in D(AB)\cap D(BA)$, then $\Delta_{\psi}A\Delta_{\psi}B\ge\frac12|\langle[A,B]\psi,\psi\rangle|$ ([[pthm-nrqm-uncertainty-robertson-relation]] clauses (a), (b)).

[F7] **Approximation by product-domain vectors.** For every nonzero $f\in D(Q)\cap D(P)$ there is a sequence of unit vectors $\varphi_k\in D(QP)\cap D(PQ)$ with $\varphi_k\to f/\|f\|$, $Q\varphi_k\to Qf/\|f\|$, $P\varphi_k\to Pf/\|f\|$, and with $\langle Q\varphi_k,\varphi_k\rangle\to\langle Qf,f\rangle/\|f\|^{2}$, $\|Q\varphi_k\|\to\|Qf\|/\|f\|$, and the analogous momentum limits ([[lem-nrqm-uncertainty-approximation-by-product-domain-vectors]]).

[F8] **Inner-product calculus and Cauchy-Schwarz.** The pairing is linear in the first argument and conjugate-linear in the second, $\|u\|^{2}=\langle u,u\rangle$, $|\langle u,v\rangle|\le\|u\|\,\|v\|$ with equality if and only if $u,v$ are linearly dependent, and inner products and norms are continuous for norm convergence ([[def-inner-product-space]], [[def-hilbert-space]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** the data of the Statement and [F1]-[F8].

1.1 [The model's operators and the coherent formulas] By [F1] the model's $Q$, $P$ are the $d=1$, $r=1$ componentwise operators with the displayed dense domains, and both are assigned sharp observables; by [F2] each $\Psi_z$ is a unit vector with $a_\psi\Psi_z=z\Psi_z$, $\|a_\psi\Psi_z\|^{2}=|z|^{2}$ and $\|a^\dagger_\psi\Psi_z\|^{2}=|z|^{2}+1$. By [F3] the vectors $Q\Psi_z=\frac{\ell}{\sqrt2}(a_\psi+a^\dagger_\psi)\Psi_z$ and $P\Psi_z=\frac{\hbar}{i\ell\sqrt2}(a_\psi-a^\dagger_\psi)\Psi_z$ lie in $H_1$, so $\Psi_z\in D(Q)\cap D(P)$, and the displayed coherent means and central norms hold. [given, F1, F2, F3]

1.2 [Spreads as centered norms] Let $f\in D(Q)\cap D(P)$ be a unit vector. By [F4] applied to the assigned observables $(Q,\mathrm m)$ and $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$, the outcome-law means and variances exist and $\Delta_{f}Q^{2}=\|(Q-\langle Qf,f\rangle I)f\|^{2}=\|Qf\|^{2}-\langle Qf,f\rangle^{2}$, and likewise $\Delta_{f}P^{2}=\|Pf\|^{2}-\langle Pf,f\rangle^{2}$. [given, F4]

1.3 [Bound on the product domain] Let $\varphi\in D(QP)\cap D(PQ)$ be a unit vector. By [F5], $(QP-PQ)\varphi=i\hbar\varphi$, so $\langle[Q,P]\varphi,\varphi\rangle=\langle i\hbar\varphi,\varphi\rangle=i\hbar\langle\varphi,\varphi\rangle=i\hbar$ by linearity of the pairing in its first argument. By the Robertson form of [F6] applied to the assigned sharp observables $(Q,\mathrm m)$ and $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$, $\Delta_{\varphi}Q\Delta_{\varphi}P\ge\frac12|i\hbar|=\hbar/2$. [given, F5, F6]

1.4 [Approximating a common-domain vector] Let $f\in D(Q)\cap D(P)$ be a unit vector. By [F7] there is a sequence of unit vectors $\varphi_k\in D(QP)\cap D(PQ)$ with $\varphi_k\to f$, $Q\varphi_k\to Qf$, $P\varphi_k\to Pf$, $\langle Q\varphi_k,\varphi_k\rangle\to\langle Qf,f\rangle$, $\|Q\varphi_k\|\to\|Qf\|$ and the analogous momentum limits. [given, F7]

2.1 [Clause (a)] By step 1.1 and step 1.2 applied to the unit vector $\Psi_z\in D(Q)\cap D(P)$, the preparation variances are the central squared norms of [F3]: $\operatorname{Var}_{\Psi_z}(Q)=\|(Q-\langle Q\rangle_zI)\Psi_z\|^{2}=\ell^{2}/2$ and $\operatorname{Var}_{\Psi_z}(P)=\hbar^{2}/(2\ell^{2})$; taking square roots gives $\Delta_{\Psi_z}Q=\ell/\sqrt2$ and $\Delta_{\Psi_z}P=\hbar/(\ell\sqrt2)$, whose product is $\hbar/2$ in the unit $\mathrm m\cdot\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}=\mathrm{kg}\,\mathrm m^{2}\mathrm s^{-1}$. [step 1.1, step 1.2, F3]

2.2 [Clause (b), relation] Let $f\in D(Q)\cap D(P)$ be a unit vector and let $(\varphi_k)$ be the approximating sequence of step 1.4. For every $k$, step 1.3 gives $\Delta_{\varphi_k}Q\Delta_{\varphi_k}P\ge\hbar/2$; by step 1.2, $\Delta_{\varphi_k}Q^{2}=\|Q\varphi_k\|^{2}-\langle Q\varphi_k,\varphi_k\rangle^{2}$, and the limits of step 1.4 together with the continuity of the inner product [F8] give $\Delta_{\varphi_k}Q^{2}\to\|Qf\|^{2}-\langle Qf,f\rangle^{2}=\Delta_{f}Q^{2}$, and likewise $\Delta_{\varphi_k}P^{2}\to\Delta_{f}P^{2}$. Taking square roots and passing to the limit in the inequality gives $\Delta_{f}Q\Delta_{f}P\ge\hbar/2$. [step 1.2, step 1.3, step 1.4, F8]

3.1 [Clause (c), saturation] Fix $z$ and put $u:=(a_\psi+a^\dagger_\psi)\Psi_z$, $v:=(a_\psi-a^\dagger_\psi)\Psi_z$, both in $H_1$ by step 1.1. Using the conjugate-linearity in the second argument, the coherent data $a_\psi\Psi_z=z\Psi_z$ and the adjoint relation $(a_\psi)^{*}=a^\dagger_\psi$ of [F2] and [F3], so that $\langle a_\psi\Psi_z,\Psi_z\rangle=z$, $\langle\Psi_z,a^\dagger_\psi\Psi_z\rangle=\langle a_\psi\Psi_z,\Psi_z\rangle=z$ and $\langle a^\dagger_\psi\Psi_z,\Psi_z\rangle=\overline z$, together with $\|\Psi_z\|=1$ and $\|a^\dagger_\psi\Psi_z\|^{2}=|z|^{2}+1$, the four pairings are $\langle a_\psi\Psi_z,a_\psi\Psi_z\rangle=|z|^{2}$, $\langle a_\psi\Psi_z,a^\dagger_\psi\Psi_z\rangle=z\langle\Psi_z,a^\dagger_\psi\Psi_z\rangle=z^{2}$, $\langle a^\dagger_\psi\Psi_z,a_\psi\Psi_z\rangle=\overline z\langle a^\dagger_\psi\Psi_z,\Psi_z\rangle=\overline z^{2}$ and $\langle a^\dagger_\psi\Psi_z,a^\dagger_\psi\Psi_z\rangle=|z|^{2}+1$, so $\langle u,v\rangle=|z|^{2}-z^{2}+\overline z^{2}-(|z|^{2}+1)=\overline z^{2}-z^{2}-1$; hence, using the first formula of [F3] and $\overline{\hbar/(i\ell\sqrt2)}=i\hbar/(\ell\sqrt2)$, $\langle Q\Psi_z,P\Psi_z\rangle=\frac{\ell}{\sqrt2}\cdot\frac{i\hbar}{\ell\sqrt2}\langle u,v\rangle=\frac{i\hbar}{2}\bigl(\overline z^{2}-z^{2}-1\bigr)=2\hbar\operatorname{Re}z\operatorname{Im}z-\frac{i\hbar}{2}$, because $\overline z^{2}-z^{2}=(\overline z-z)(\overline z+z)=-4i\operatorname{Re}z\operatorname{Im}z$. By [F3], $\langle Q\rangle_z\langle P\rangle_z=\sqrt2\ell\operatorname{Re}z\cdot\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z=2\hbar\operatorname{Re}z\operatorname{Im}z$, so $\langle x_z,y_z\rangle=\langle Q\Psi_z,P\Psi_z\rangle-\langle Q\rangle_z\langle P\rangle_z=-\frac{i\hbar}{2}$. Therefore $\operatorname{Re}\langle x_z,y_z\rangle=0$ and $|\langle x_z,y_z\rangle|=\hbar/2$, while step 2.1 gives $\|x_z\|\,\|y_z\|=\Delta_{\Psi_z}Q\,\Delta_{\Psi_z}P=\hbar/2$, so equality holds in the Cauchy-Schwarz inequality of [F8] and $x_z,y_z$ are linearly dependent. [step 1.1, step 2.1, F3, F8]

3.2 [Clause (b), minimality] By step 2.2 every unit vector in $D(Q)\cap D(P)$ has spread product at least $\hbar/2$, and by step 2.1 every coherent preparation attains the value $\hbar/2$; hence the minimum of the spread product over the unit vectors of the common domain is $\hbar/2$, attained by each $[\Psi_z]$. [step 2.1, step 2.2]

4.1 [Clause (d)] The spread values and the relation were obtained from the model's assigned observables, the preparation-moment theorem, the product-domain commutator, the cutoff approximation and the Robertson relation; the saturation computation used the same operators and the exact coherent-state quantities. No joint outcome law, apparatus resolution, disturbance, dynamics or empirical value entered, and the identification of a laboratory pair with $(Q,P)$ is a tested identification under P7. This is clause (d). [step 2.1, step 2.2, step 3.1, step 3.2] ∎
