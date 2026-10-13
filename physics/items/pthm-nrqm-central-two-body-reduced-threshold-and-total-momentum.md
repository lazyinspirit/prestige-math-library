---
id: pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum
aliases: [ nrqm-central-two-body-reduced-threshold-and-total-momentum ]
kind: physics-theorem
domain: physics
title: "The declared two-body Coulomb model: reduced-mass decomposition,
  relative levels as thresholds and the absence of stationary total states"
status: draft
origin: session
dependency_level: 16
deps:
  - def-nrqm-central-framework-coulomb-and-hydrogen-model
  - pthm-nrqm-central-coulomb-energy-observable-and-flow
  - pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy
  - pthm-nrqm-central-coulomb-bound-state-radial-distributions
  - post-nrqm-framework-state-and-composition
  - post-nrqm-framework-observable-and-probability
  - post-nrqm-framework-autonomous-dynamics
  - post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
  - def-nrqm-framework-quantities-and-units
  - def-nrqm-observables-framework-observable-and-outcome-law
  - def-nrqm-autonomous-dynamics-framework-evolution
  - pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation
  - def-nrqm-state-geometry-framework-state-space
  - thm-nrqm-coulomb-two-body-reduced-mass
  - thm-nrqm-coulomb-onto-radial-continuum-transform
  - lem-nrqm-central-positive-scaling-spectral-measure
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-plancherel
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - def-weak-derivative-of-a-locally-integrable-function
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
  - thm-closed-graph-theorem
  - def-countable-choice
  - def-axiom-of-choice
  - thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  pthm-nrqm-central-coulomb-bound-state-radial-distributions: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-coulomb-two-body-reduced-mass: mathematical-premise
  thm-nrqm-coulomb-onto-radial-continuum-transform: mathematical-premise
  lem-nrqm-central-positive-scaling-spectral-measure: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  thm-closed-graph-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional consequence of the declared two-body Coulomb
  model with masses m1, m2, opposite charge magnitudes q_- and q_+, and coupling
  kappa=q_-q_+/(4 pi epsilon_0), including its equal-magnitude neutral branch:
  the centre-of-mass/relative decomposition U_Phi H_2 U_Phi^(-1) = T_R tensor I
  + I tensor C_mu, the identification of the relative problem with the
  one-centre Coulomb model of mass mu, the relative gross-structure levels
  E_n^mu = -mu kappa^2/(2 hbar^2 n^2) with degeneracy n^2 within the relative
  problem, the fact that the total two-body Hamiltonian has no eigenvalues and
  continuous negative spectrum with the relative levels as channel thresholds,
  and the absence of normalisable total-momentum eigenstates on the composite
  L2(R6) state space. H2, T_R and C_mu are energy operators in joules; the
  lifted total-momentum components have unit kg m s^-1. The item asserts no
  measured level, no transition, no photon, no external-field or many-body
  effect and no empirical result; it does not model binding or formation
  dynamics and does not identify the parameters with measured masses or
  charges."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1,
        printed pages 182-185 (equations (8.3)-(8.10): the centre-of-mass and
        relative coordinates, the reduced mass mu = m_e m_n/(m_e+m_n), the
        separated Hamiltonians and the product eigenfunctions)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 10.1-10.2, printed pages 221-225 (the one-particle reduction of
        the two-body Coulomb problem and the parameters of the relative
        equation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3,
        printed pages 111-112 (the hydrogen atom as a two-body Coulomb problem
        with the electron mass in the relative equation)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates P1, P2, P4 and P5 and the readings of the
declared two-body Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a), (b),
(d) and (e) with declared masses $m_{1},m_{2}>0$, opposite charge magnitudes
$q_{-},q_{+}>0$, and coupling
$\kappa=q_{-}q_{+}/(4\pi\varepsilon_{0})$ (the equal-magnitude branch
$q_{-}=q_{+}=q$ has $\kappa=q^{2}/(4\pi\varepsilon_{0})$), reduced mass
$\mu=m_{1}m_{2}/(m_{1}+m_{2})$, the centre-of-mass/relative coordinate map
$\Phi$, its unitary $U_{\Phi}$, the total operator $H_{2}$ on
$H^{2}(\mathbb R^{6};\mathbb C)$, the centre-of-mass kinetic operator $T_{R}$
and the relative operator $C_{\mu}$, together with the one-centre results
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]] and
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] applied with mass
parameter $\mu$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) the identity $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$
holds on the tensor product, and $C_{\mu}$ is exactly the one-centre Coulomb
operator of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass
parameter $\mu$; the model's relative problem is therefore the declared
one-centre Coulomb model with parameters $(\hbar,\mu,\kappa)$;

(b) the relative bound energies are
$$\mathcal E_{n}:=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}=-\frac{\hbar^{2}}{2\mu a_{\mu}^{2}n^{2}},\qquad a_{\mu}:=\frac{\hbar^{2}}{\mu\kappa}\qquad(n\ge1),$$
with model degeneracy $n^{2}$ within the relative problem and the same radial
and position readings as in
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] and
[[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] with $m$
replaced by $\mu$;

(c) the total operator $H_{2}$ has no eigenvalues at all:
$\sigma(H_{2})=[-\frac{\mu\kappa^{2}}{2\hbar^{2}},+\infty)$, the whole negative
part $[-\frac{\mu\kappa^{2}}{2\hbar^{2}},0)$ of the spectrum is continuous,
and each relative bound energy $\mathcal E_{n}$ is the lower endpoint of its
continuous centre-of-mass channel $[\mathcal E_{n},+\infty)$, hence a channel
threshold rather than an eigenvalue of $H_{2}$;

(d) let $P_{R,j}:=-i\hbar\partial_{R_j}$ on the factor domain
$$D(P_{R,j})=\{\varphi\in L^{2}(\mathbb R^{3}_{R};\mathbb C):\partial_{R_j}\varphi\in L^{2}(\mathbb R^{3}_{R};\mathbb C)\text{ as a weak derivative}\},$$
and define the lifted total-momentum component on the composite state space by
$$\widetilde P_{R,j}:=U_{\Phi}^{-1}(P_{R,j}\otimes I)U_{\Phi},\qquad D(\widetilde P_{R,j})=U_{\Phi}^{-1}\{F\in L^{2}(\mathbb R^{3}_{R}\times\mathbb R^{3}_{r};\mathbb C):\partial_{R_j}F\in L^{2}\text{ as a weak derivative}\};$$
it is self-adjoint on this maximal weak-derivative domain, has momentum unit
$\mathrm{kg\,m\,s^{-1}}$, and has no nonzero eigenvectors in
$L^{2}(\mathbb R^{6};\mathbb C)$. A state of definite total momentum would
be a simultaneous eigenvector of the three lifted components, so the model
has no such normalisable state. Since $H_{2}$ has no
eigenvalues, for every $\varphi\in L^{2}(\mathbb R^{3}_{R};\mathbb C)$ and
nonzero relative bound vector $u$ with $C_{\mu}u=\mathcal E_{n}u$, any
nonzero tensor product $\varphi\otimes u$ in the transformed $(R,r)$ tensor
space, equivalently $U_{\Phi}^{-1}(\varphi\otimes u)$ in the composite
$L^{2}(\mathbb R^{6})$ state space, is not an eigenvector; the
stationary-state criterion therefore excludes its pure preparation as a
stationary state;

(e) *Reading.* The reduced mass obeys $\mu=\frac{m_{1}}{1+m_{1}/m_{2}}$ and
satisfies $\mu\le\min\{m_{1},m_{2}\}$ with $\mu\to m_{1}$ as $m_{2}\to\infty$
at fixed $m_{1}$; the model reads the one-centre model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass
$m_{1}$ as the fixed-nucleus limiting description, and the relative energies
$\mathcal E_{n}$ are strictly weaker in magnitude than the fixed-nucleus
energies $-\frac{m_{1}\kappa^{2}}{2\hbar^{2}n^{2}}$;

(f) *Scope.* The statement is conditional on P1, P2, P4, P5, the declared
two-body model and the cited mathematics; it asserts no measured mass, charge
or level, no transition, photon or radiation statement, no binding or
formation dynamics, and no identification of the model with a laboratory
atom beyond the tested identification of clause (e) of the model definition.

## Facts & Assumptions

**Given:** The declared two-body Coulomb model with $m_{1},m_{2},\hbar>0$, opposite charge magnitudes $q_{-},q_{+}>0$, coupling $\kappa=q_{-}q_{+}/(4\pi\varepsilon_{0})$, reduced mass $\mu=m_{1}m_{2}/(m_{1}+m_{2})$, the coordinate map $\Phi$, the unitary $U_{\Phi}$, the operators $T_{R}$, $C_{\mu}$ and $H_{2}$; the one-centre results with mass parameter $\mu$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Model data.** $C_{\mu}=-\frac{\hbar^{2}}{2\mu}\Delta_{r}-\frac{\kappa}{|r|}$ on $H^{2}(\mathbb R^{3}_{r};\mathbb C)=D(C_{\mu})$ is exactly the one-centre Coulomb operator of [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b) with mass parameter $\mu$; $H_{2}$ with $D(H_{2})=H^{2}(\mathbb R^{6};\mathbb C)$ is self-adjoint, and $\Phi(x_{1},x_{2})=(R,r)$ is the centre-of-mass/relative coordinate map of clause (d) of the same definition ([[thm-nrqm-coulomb-two-body-reduced-mass]]).

[F2] **Unscaled relative Coulomb spectral representation.** For $\gamma>0$, the mathematical operator $C_{\gamma}:=-\Delta-\gamma/|\cdot|$ on $H^{2}(\mathbb R^{3};\mathbb C)$ is unitarily equivalent to the direct sum, over spherical channels $(l,m)$, of its negative bound-state copies with values $-\gamma^{2}/(4n^{2})$ for $n\ge l+1$ and a continuum copy $L^{2}((0,\infty),d\lambda)$ on which it is multiplication by $\lambda$ on the maximal domain $\{h:\lambda h\in L^{2}\}$; the negative family is complete and $0$ is not an eigenvalue ([[thm-nrqm-coulomb-onto-radial-continuum-transform]] clause (d), [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]]).

[F3] **Spectral-measure transfer under positive scaling.** If $A$ is self-adjoint with spectral PVM $E_A$ and $c>0$, the PVM of $cA$ is $E_{cA}(B)=E_A(c^{-1}B)$ for every Borel $B$ ([[lem-nrqm-central-positive-scaling-spectral-measure]] clauses (b), (c)).

[F4] **Dilation and center Fourier multiplier.** For $c>0$, the map $D_ch(E):=c^{-1/2}h(E/c)$ is unitary from $L^{2}((0,\infty),d\lambda)$ to the correspondingly scaled $L^{2}((0,\infty),dE)$; explicitly $D_c^{-1}g(\lambda)=c^{1/2}g(c\lambda)$. The one-dimensional change-of-variables formula gives its norm identity, and direct substitution gives $D_cM_fD_c^{-1}=M_{f(E/c)}$ for bounded Borel $f$, where $M_f$ denotes the maximal multiplication operator (bounded here) by $f$. On $L^{2}(\mathbb R^{3}_{R})$ the $2\pi$-normalized Fourier transform sends $T_R$ to multiplication by $\tau_R(\xi):=2\pi^{2}\hbar^{2}|\xi|^{2}/M$ and $P_{R,j}$ to multiplication by $2\pi\hbar\xi_j$. Their maximal multiplier domains are $\{g:\tau_Rg\in L^2\}$ and $\{g:\xi_jg\in L^2\}$ respectively; the corresponding real multiplication operators are self-adjoint on these maximal domains. Tensoring the transform with the identity gives the unitary partial Fourier transform on the composite $L^2$ space and the maximal weak-derivative domain for $P_{R,j}\otimes I$. Spheres in $\mathbb R^{3}_{\xi}$ are Lebesgue-null by the polar-coordinate formula; Tonelli applies to the $\xi$ and $E$ product measure ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[def-weak-derivative-of-a-locally-integrable-function]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F5] **Two-body decomposition.** $\Phi$ is a linear isomorphism with $|\det\Phi|=1$, $U_{\Phi}$ is unitary, and $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$ under the identification $L^{2}(\mathbb R^{6})\cong L^{2}(\mathbb R^{3}_{R})\widehat\otimes L^{2}(\mathbb R^{3}_{r})$; $H_{2}$ is self-adjoint on $H^{2}(\mathbb R^{6};\mathbb C)$ and $C_{\mu}=-(\hbar^{2}/2\mu)\Delta-\kappa/|\cdot|$ is the one-centre Coulomb operator with mass parameter $\mu$ ([[thm-nrqm-coulomb-two-body-reduced-mass]] clauses (a)-(c), [[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F6] **One-centre results with mass $\mu$.** The one-centre Coulomb model with parameters $(\hbar,\mu,\kappa)$ has bound energies $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$, $n\ge1$, the eigenspace at $\mathcal E_{n}$ having dimension $n^{2}$ and consisting of the transported Laguerre solutions, with the radial and position readings of the one-centre items ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a), (b), [[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] clauses (a), (c)).

[F7] **Stationary states.** For an assigned energy observable, a nonzero vector is an eigenvector if and only if its pure preparation is stationary ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c), [[def-nrqm-autonomous-dynamics-framework-evolution]]).

## Proof

**Proof technique:** direct; transfer the exact unscaled relative PVM by the positive-scaling lemma and continuum dilation, derive the product-channel spectrum, and lift the centre-of-mass momentum through the coordinate unitary.

**Given:** The data of the statement and [F1]-[F7].

1.1 [Decomposition and relative problem] By [F1] and [F5], $U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$ and $C_{\mu}$ is the one-centre Coulomb operator with mass parameter $\mu$; with the model definition this proves (a). Applying [F6] at mass $\mu$ gives the relative levels $\mathcal E_n=-\frac{\mu\kappa^2}{2\hbar^2n^2}=-\frac{\hbar^2}{2\mu a_\mu^2n^2}$, $a_\mu=\hbar^2/(\mu\kappa)$, degeneracy $n^2$ and the stated radial and position readings. This proves (b). [given, F1, F5, F6, algebra]

1.2 [Scaled relative PVM and continuum dilation] Put $\gamma:=2\mu\kappa/\hbar^2>0$ and $c_\mu:=\hbar^2/(2\mu)>0$, so $C_\mu=c_\mu C_\gamma$. By [F2], a unitary spectral representation of $C_\gamma$ has bound channels with values $-\gamma^2/(4n^2)$ and continuum channels $L^2((0,\infty),d\lambda)$ with maximal multiplier $M_\lambda$. The PVM of the scaled operator is transferred by [F3], so on each continuum channel its projection for a Borel set $B$ is multiplication by $\mathbf 1_{c_\mu^{-1}B}(\lambda)$. The unitary dilation of [F4], $$(D_{c_\mu}h)(E):=c_\mu^{-1/2}h(E/c_\mu),$$ satisfies $D_{c_\mu}M_fD_{c_\mu}^{-1}=M_{f(E/c_\mu)}$ for bounded Borel $f$; direct substitution on the maximal multiplier domain gives $D_{c_\mu}(c_\mu M_\lambda)D_{c_\mu}^{-1}=M_E$, with domain $\{g:E g\in L^2(dE)\}$. It sends the transferred projection $M_{\mathbf 1_{c_\mu^{-1}B}(\lambda)}$ to $M_{\mathbf 1_B(E)}$. Each bound value scales to $c_\mu(-\gamma^2/(4n^2))=\mathcal E_n$. Hence the exact spectral representation of $C_\mu$ consists of these bound channels and continuum copies with multiplier $E$, with no zero eigenchannel. This explicitly transfers both the continuum representation and its PVM. [F2, F3, F4, algebra]

2.1 [Product-channel representation and lower spectral bound] Apply the relative unitary of step 1.2 and the partial $2\pi$-normalized Fourier transform in $R$ to the tensor decomposition of [F5]. The transformed $H_2$ is multiplication on each bound channel $(n,l,m)$ by $\tau_R(\xi)+\mathcal E_n$ and on each continuum channel by $\tau_R(\xi)+E$, where $\tau_R(\xi):=2\pi^2\hbar^2|\xi|^2/M\ge0$ by [F4]. Since $\mathcal E_n\ge\mathcal E_1=-\mu\kappa^2/(2\hbar^2)$ and continuum energies satisfy $E>0$, every channel multiplier is at least $\mathcal E_1$; thus $H_2\ge\mathcal E_1 I$. [step 1.1, step 1.2, F4, F5, algebra]

2.2 [Reduced-mass factor] Algebra gives $\mu=\frac{m_1m_2}{m_1+m_2}=\frac{m_1}{1+m_1/m_2}$, hence $\mu<m_1$ and $\mu<m_2$, so $\mu\le\min\{m_1,m_2\}$; at fixed $m_1$, $\mu\to m_1$ as $m_2\to\infty$. Comparing $\mathcal E_n=-\frac{\mu\kappa^2}{2\hbar^2n^2}$ with the fixed-nucleus energy $-\frac{m_1\kappa^2}{2\hbar^2n^2}$, the relative binding magnitude is smaller by $\mu/m_1=1/(1+m_1/m_2)<1$. This proves (e). [step 1.1, F5, algebra]

3.1 [Every energy above threshold is spectral] Fix $\Lambda\ge\mathcal E_1$ and choose $\xi_0\in\mathbb R^3$ with $\tau_R(\xi_0)=\Lambda-\mathcal E_1$; such a point exists because $\tau_R$ takes every value in $[0,\infty)$. Choose normalized $\chi_k\in C_c^\infty(\mathbb R^3_\xi)$ supported in balls of radius $1/k$ about $\xi_0$, and let $u_1$ be a normalized relative ground-state vector in the $(n,l,m)=(1,0,0)$ bound channel. Then $\chi_k\otimes u_1$ lies in the product operator domain, has norm one, and $$\|((H_2-\Lambda I)(\chi_k\otimes u_1))\|\le\sup_{|\xi-\xi_0|\le1/k}|\tau_R(\xi)-\tau_R(\xi_0)|\longrightarrow0$$ by continuity of $\tau_R$. If $H_2-\Lambda I$ had an everywhere-defined bounded inverse, then $1\le\|(H_2-\Lambda I)^{-1}\|\cdot\|(H_2-\Lambda I)(\chi_k\otimes u_1)\|\to0$, a contradiction. Thus every $\Lambda\ge\mathcal E_1$ lies in $\sigma(H_2)$, and together with step 2.1 this gives $\sigma(H_2)=[\mathcal E_1,\infty)$. [step 2.1, F4, F5, algebra]

4.1 [No point spectrum and channel thresholds] Suppose an eigenvector at $\Lambda$ existed in the product representation. In a bound channel its Fourier component would vanish outside the level set $\{\xi:\tau_R(\xi)=\Lambda-\mathcal E_n\}$; this set is empty, a point, or a sphere, hence has Lebesgue measure zero by [F4]. In a continuum channel its component would be supported on $\{(\xi,E):E=\Lambda-\tau_R(\xi)\}$; every fixed-$\xi$ section in $E$ is empty or a singleton and has measure zero, so Tonelli [F4] makes this measurable graph null in the product measure. Every channel component is therefore zero, proving that $H_2$ has no eigenvalues. For real $\Lambda\in[\mathcal E_1,0)$, the range of $H_2-\Lambda I$ is dense because its orthogonal complement is $\ker(H_2-\Lambda I)^{*}=\ker(H_2-\Lambda I)=\{0\}$. If it were onto, the inverse map from $L^{2}(\mathbb R^{6})$ to $D(H_2)$ with the graph norm would have closed graph and would be bounded by [[thm-closed-graph-theorem]]; then $\Lambda$ would be in the resolvent as defined by [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], contradicting step 3.1. Thus $H_2-\Lambda I$ has dense but non-surjective range; this is the continuous spectrum of the self-adjoint operator, proving the continuous-spectrum clause of (c). Each relative bound energy $\mathcal E_n$ is the lower endpoint of its bound channel $[\mathcal E_n,\infty)$, so it is a channel threshold and not a total eigenvalue. This completes (c). [step 2.1, step 3.1, F4, F5, algebra]

5.1 [Lifted total momentum on the composite state space] In the partial Fourier representation of [F4], $P_{R,j}$ is the real multiplier $2\pi\hbar\xi_j$ on its maximal domain. Therefore $P_{R,j}\otimes I$ is self-adjoint on the maximal weak-derivative domain in the product space, and conjugation by $U_\Phi$ gives exactly $\widetilde P_{R,j}$ and $D(\widetilde P_{R,j})$ stated in (d). If $\widetilde P_{R,j}\Psi=p\Psi$, then for $F=U_\Phi\Psi$ its partial Fourier transform satisfies $$(2\pi\hbar\xi_j-p)\widehat F(\xi,r)=0\quad\text{for almost every }(\xi,r).$$ It is supported on the hyperplane $\xi_j=p/(2\pi\hbar)$, which is null in $\mathbb R^3_\xi$; Tonelli over the remaining momentum and relative variables gives $\widehat F=0$, hence $\Psi=0$. The multiplier has momentum dimension $[\hbar][\xi_j]=\mathrm{kg\,m\,s^{-1}}$. This proves the total-momentum assertion of (d). Since step 4.1 excludes every eigenvector of $H_2$, the stationary-state criterion [F7] also excludes a stationary preparation from any nonzero centre-of-mass/relative-bound product. [F4, F5, F7, step 4.1, algebra]

6.1 [Assembly and scope] Step 1.1 gives (a) and (b), steps 2.1-4.1 give (c), step 5.1 gives the total-momentum assertion of (d), and step 2.2 gives (e). Only the declared two-body model, P1, P2, P4, P5 and the cited mathematics were used, so (f) holds and no empirical identification, measured parameter, transition, photon or formation dynamics is asserted. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 2.2] ∎


## Remarks

- **Why the relative levels are not total energies.** The centre-of-mass motion of an isolated two-body system is free in this model, so its operator has purely continuous spectrum; a relative bound state is an internal state and cannot be a stationary state of the total system. Any statement that a hydrogen atom "is" an eigenstate of a two-body Hamiltonian conflicts with this decomposition and is not made.
- **Threshold reading.** The bottom of the continuous spectrum, $\mathcal E_{1}=-\frac{\mu\kappa^{2}}{2\hbar^{2}}$, coincides with the relative ground energy; the model reads it as the continuum threshold of the total two-body operator, and no ionisation or scattering process is described here.
