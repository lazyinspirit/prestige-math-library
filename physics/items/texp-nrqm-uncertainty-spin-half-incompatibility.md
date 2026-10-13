---
id: texp-nrqm-uncertainty-spin-half-incompatibility
aliases: [ nrqm-uncertainty-spin-half-incompatibility ]
kind: thought-experiment
domain: physics
title: "Spin one half: spread identity, incompatible component outcomes and
  saturated Robertson bounds"
status: draft
origin: pipeline
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-orthogonal-projection,
    def-hilbert-space,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-uncertainty-preparation-spread,
    def-projection-valued-measure,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    pthm-nrqm-observables-preparation-moments,
    pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law,
    pthm-nrqm-uncertainty-robertson-relation,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-observables-preparation-moments: physical-result
  pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law: formulation-prerequisite
  pthm-nrqm-uncertainty-robertson-relation: physical-result
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The spin-one-half internal factor of the massive particle
  model: the exact identity for the sum of the three component spreads in every
  unit state, the resulting lower bound hbar^2/2 and the impossibility of a
  state with all three component spreads small, the failure of spectral
  compatibility for every pair of spin components with the explicit projection
  witness, and the saturation of the Robertson bound in the S_z eigenstates. The
  statement is a conditional consequence of P1, P2, P5 and P6, under the Axiom
  of Choice and Countable Choice required by the cited spectral and moment
  suppliers, and the cited
  finite-dimensional mathematics; it asserts no measurement, apparatus,
  dynamics, empirical value or claim about angular momentum in space."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 2, printed
        pages 3-6: the uncertainty inequality and its saturation conditions,
        with the position-momentum example"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-half, Bras, Kets, and Operators', sections 3.3-3.5, printed pages
        10-15: the Pauli matrices S_i = (hbar/2) sigma_i, the anticommutation
        relations {sigma_i,sigma_j} = 2 delta_ij 1 and the product formula (a
        dot sigma)(b dot sigma)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        7.4.2, printed pages 161-164 (PDF pages 169-172): the spin-half
        matrices, their commutation relations and incompatible spin components"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor assignment P6, read for the spin-$\tfrac12$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$, spin label $s=\tfrac12$ and $r=2$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]), the hypotheses of the cited spectral, moment and
Robertson suppliers. Write
$S_{i}=\hbar J_{i}$ for the model's internal-factor operators of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c), so that
$J_{i}=\tfrac12\sigma_{i}$ in the Pauli matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), and let
$\Delta_{\psi}S_{i}$ be the preparation spread of
[[def-nrqm-uncertainty-preparation-spread]]. Then, for every unit
$\psi\in H_{1/2}$:

(a) with $\langle\mathbf S\rangle_{\psi}:=\bigl(\langle S_{x}\psi,\psi\rangle,\langle S_{y}\psi,\psi\rangle,\langle S_{z}\psi,\psi\rangle\bigr)\in\mathbb R^{3}$,
$$\sum_{i\in\{x,y,z\}}\bigl(\Delta_{\psi}S_{i}\bigr)^{2}=\frac{3\hbar^{2}}{4}-\bigl|\langle\mathbf S\rangle_{\psi}\bigr|^{2}\ge\frac{\hbar^{2}}{2},$$
so at least one component satisfies
$\Delta_{\psi}S_{i}\ge\hbar/\sqrt6$; in particular no unit state has all
three component spreads equal to zero;

(b) for every pair of distinct components the spectral projection-valued
measures fail to commute; explicitly, with
$P_{i}^{\pm}:=\tfrac12(I\pm\sigma_{i})$ the spectral projections of $S_{i}$ at
$\pm\hbar/2$,
$$P_{x}^{+}P_{y}^{+}-P_{y}^{+}P_{x}^{+}=\tfrac{i}{2}\sigma_{z}\ne0,$$
and cyclically; consequently no pair of the three components possesses a joint
sharp observable in the sense of
[[pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law]];

(c) in the state $\psi=f\,e_{1/2}$ with any unit spatial factor
$f\in L^{2}(\mathbb R^{3};\mathbb C)$ and the basis vector
$e_{1/2}$ of the internal factor,
$$\langle S_{z}\rangle_{\psi}=\frac{\hbar}{2},\qquad \langle S_{x}\rangle_{\psi}=\langle S_{y}\rangle_{\psi}=0,\qquad \Delta_{\psi}S_{x}=\Delta_{\psi}S_{y}=\frac{\hbar}{2},\qquad \Delta_{\psi}S_{z}=0,$$
and $\Delta_{\psi}S_{x}\Delta_{\psi}S_{y}=\hbar^{2}/4=\tfrac12|\langle[S_{x},S_{y}]\psi,\psi\rangle|$,
so the Robertson bound of
[[pthm-nrqm-uncertainty-robertson-relation]] is attained in this state;

(d) **Scope.** Clauses (a)-(c) are conditional consequences of P1, P2, P5, P6,
the stated choice hypotheses and the cited mathematics of the finite internal
matrices acting on $H_{1/2}$. They concern the internal-factor
coupling constants of the model; they assert no laboratory measurement of a
spin component, no Stern-Gerlach apparatus model, no dynamics, no empirical
value and no interpretation of $S_{i}$ as a rotating body or as orbital
angular momentum.

## Facts & Assumptions

**Given:** The postulates P1, P2, P5, P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]] with $s=\tfrac12$; the Axiom of Countable Choice and the Axiom of Choice; the internal operators $S_{i}$; a unit vector $\psi\in H_{1/2}$; a unit spatial factor $f$; the basis vector $e_{1/2}$.

[F1] **Internal operators.** $S_{i}=\hbar J_{i}$ acts on the internal factor as the matrix action, $J_{i}=\tfrac12\sigma_{i}$, and the Pauli matrices satisfy $\sigma_{i}^{2}=I$ and $\sigma_{i}\sigma_{j}=\delta_{ij}I+i\sum_{k}\varepsilon_{ijk}\sigma_{k}$, so $S_{i}^{2}=\tfrac{\hbar^{2}}{4}I$, $S_{x}^{2}+S_{y}^{2}+S_{z}^{2}=\tfrac{3\hbar^{2}}{4}I$ and $[S_{x},S_{y}]=i\hbar S_{z}=i\tfrac{\hbar^{2}}{2}\sigma_{z}$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), [[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c)).

[F2] **Spreads in the finite factor.** $S_{i}$ is bounded and self-adjoint, so for every unit $\psi$ the mean $\langle S_{i}\psi,\psi\rangle$ and the variance $(\Delta_{\psi}S_{i})^{2}=\langle S_{i}^{2}\psi,\psi\rangle-\langle S_{i}\psi,\psi\rangle^{2}$ exist ([[pthm-nrqm-observables-preparation-moments]] clauses (a) and (b), [[def-nrqm-uncertainty-preparation-spread]] clauses (b) and (c), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a)).

[F3] **Spectral projections of the components.** For $\lambda=\pm\hbar/2$ the spectral projection $E_{S_{i}}(\{\lambda\})$ is the orthogonal projection onto the eigenspace $\ker(S_{i}-\lambda)$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (a), [[def-projection-valued-measure]]); the matrices $P_{i}^{\pm}=\tfrac12(I\pm\sigma_{i})$ satisfy $P_{i}^{\pm}=P_{i}^{\pm\,2}=P_{i}^{\pm\,*}$, $P_{i}^{+}+P_{i}^{-}=I$ and $S_{i}P_{i}^{\pm}=\pm\tfrac{\hbar}{2}P_{i}^{\pm}$, so $P_{i}^{\pm}=E_{S_{i}}(\{\pm\hbar/2\})$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), [[def-hilbert-orthogonal-projection]]).

[F4] **Cauchy-Schwarz.** In a real or complex inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]). Thus in $\mathbb C^{2}$, $|\langle\sigma_i z,z\rangle|\le\|z\|^2$ because $\sigma_i$ is unitary by [F1].

[F5] **Robertson relation.** For two assigned sharp observables and a unit vector in the intersection of the two operator domains and the two product domains, the spread product is at least half the absolute value of the commutator pairing; bounded observables satisfy the hypotheses automatically ([[pthm-nrqm-uncertainty-robertson-relation]] clauses (b) and (c)).

[F6] **PVM multiplicativity and joint-observable vocabulary.** A PVM satisfies $H(S\cap T)=H(S)H(T)=H(T)H(S)$ for measurable $S,T$ ([[def-projection-valued-measure]]). A joint sharp observable means a regular PVM on $\mathcal B(\mathbb R^2)$ with the two spectral measures as marginals, as defined in the Statement of [[pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law]]; only that definition is used, not the theorem's deductions under P3.

## Proof

**Proof technique:** evaluate the finite spin matrices pointwise on the internal factor, sum the three component variances, bound the vector mean by the Bloch identity, and read off the noncommutation of the spectral projections and the saturated Robertson bound in the $S_{z}$ eigenstate.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Spread identity] By [F1], $\sum_{i}S_{i}^{2}=\tfrac{3\hbar^{2}}{4}I$, so for a unit $\psi$, $$\sum_{i}\bigl(\Delta_{\psi}S_{i}\bigr)^{2}=\sum_{i}\langle S_{i}^{2}\psi,\psi\rangle-\sum_{i}\langle S_{i}\psi,\psi\rangle^{2}=\frac{3\hbar^{2}}{4}-\bigl|\langle\mathbf S\rangle_{\psi}\bigr|^{2}$$ by [F2]. This is the identity of (a). [given, F1, F2, algebra]

1.2 [Noncommutation of the component projections] By [F3] the projections $P_{i}^{\pm}=E_{S_{i}}(\{\pm\hbar/2\})$ are the spectral projections of the components. Using $\sigma_{i}^{2}=I$ and $\sigma_{x}\sigma_{y}=i\sigma_{z}$, $\sigma_{y}\sigma_{x}=-i\sigma_{z}$ from [F1], $$P_{x}^{+}P_{y}^{+}-P_{y}^{+}P_{x}^{+}=\tfrac14(\sigma_{x}\sigma_{y}-\sigma_{y}\sigma_{x})=\tfrac{i}{2}\sigma_{z}\ne0,$$ with nonzero action on any unit spatial factor times $e_{1/2}$. Cyclic permutations give nonvanishing differences for the other two pairs, so every two distinct components fail to strongly commute. If a joint sharp observable $H$ for components $i,j$ existed, [F6] applied to $\Lambda\times\mathbb R$ and $\mathbb R\times\Sigma$ would give $E_{S_i}(\Lambda)E_{S_j}(\Sigma)=H(\Lambda\times\Sigma)=E_{S_j}(\Sigma)E_{S_i}(\Lambda)$ for all Borel sets, contradicting those projection witnesses. This proves (b) without an ideal-instrument assumption. [given, F1, F3, F6, algebra]

2.1 [Bound on the vector mean] Choose a representative of the class $\psi$ and write $g(x):=\bigl(\langle\sigma_{x}\psi(x),\psi(x)\rangle,\langle\sigma_{y}\psi(x),\psi(x)\rangle,\langle\sigma_{z}\psi(x),\psi(x)\rangle\bigr)\in\mathbb R^{3}$, which is defined for almost every $x$ and measurable. For $z=(z_{1},z_{2})\in\mathbb C^{2}$ the Pauli relations of [F1] give $\langle\sigma_{x}z,z\rangle=2\operatorname{Re}(z_{1}\overline{z_{2}})$, $\langle\sigma_{y}z,z\rangle=-2\operatorname{Im}(z_{1}\overline{z_{2}})$ and $\langle\sigma_{z}z,z\rangle=|z_{1}|^{2}-|z_{2}|^{2}$, hence the Bloch identity $\sum_{i}\langle\sigma_{i}z,z\rangle^{2}=4|z_{1}z_{2}|^{2}+(|z_{1}|^{2}-|z_{2}|^{2})^{2}=\|z\|^{4}$; so $|g(x)|=\|\psi(x)\|_{\mathbb C^{2}}^{2}$ for almost every $x$, and $g\in L^{1}(\mathbb R^{3};\mathbb R^{3})$ with $\|g\|_{1}=\|\psi\|^{2}=1$; and $\langle S_{i}\psi,\psi\rangle=\tfrac{\hbar}{2}\int_{\mathbb R^{3}}g_{i}(x)\,dx$ because $S_{i}$ acts on the internal factor. Put $M:=\int_{\mathbb R^3}g(x)\,dx$. If $M\ne0$, set $v:=M/|M|$; the real Cauchy-Schwarz inequality [F4] gives $|M|=v\cdot M=\int v\cdot g\le\int|g|$. If $M=0$, the same bound is immediate. Hence $$\bigl|\langle\mathbf S\rangle_{\psi}\bigr|=\frac{\hbar}{2}\Bigl|\int_{\mathbb R^{3}}g(x)\,dx\Bigr|\le\frac{\hbar}{2}\int_{\mathbb R^{3}}|g(x)|\,dx=\frac{\hbar}{2}.$$ Substituting into step 1.1 gives $\sum_{i}(\Delta_{\psi}S_{i})^{2}\ge\tfrac{3\hbar^{2}}{4}-\tfrac{\hbar^{2}}{4}=\tfrac{\hbar^{2}}{2}$; since the sum of the three nonnegative numbers is at least $\hbar^{2}/2$, their maximum is at least $\hbar^{2}/6$, so some component satisfies $\Delta_{\psi}S_{i}\ge\hbar/\sqrt6$. This completes (a). [step 1.1, F1, F2, F4, algebra]

2.2 [The $S_{z}$ eigenstate] Let $\psi=f\,e_{1/2}$ with $\|f\|=1$. Since $S_{i}$ acts on the internal factor, the pointwise expectations are constants: $\sigma_{z}e_{1/2}=e_{1/2}$ gives $\langle S_{z}\rangle_{\psi}=\tfrac{\hbar}{2}$, and $\sigma_{x}e_{1/2}=e_{-1/2}$, $\sigma_{y}e_{1/2}=ie_{-1/2}$ with the basis orthonormal give $\langle S_{x}\rangle_{\psi}=\langle S_{y}\rangle_{\psi}=0$. By [F1], $\langle S_{x}^{2}\rangle_{\psi}=\langle S_{y}^{2}\rangle_{\psi}=\tfrac{\hbar^{2}}{4}$, so $\Delta_{\psi}S_{x}=\Delta_{\psi}S_{y}=\hbar/2$; and $S_{z}\psi=\tfrac{\hbar}{2}\psi$ by the same eigenrelation, so $\Delta_{\psi}S_{z}=0$. Finally $[S_{x},S_{y}]=i\hbar S_{z}$ from [F1] gives $\tfrac12|\langle[S_{x},S_{y}]\psi,\psi\rangle|=\tfrac{\hbar}{2}\langle S_{z}\psi,\psi\rangle=\tfrac{\hbar^{2}}{4}=\Delta_{\psi}S_{x}\Delta_{\psi}S_{y}$, so the Robertson bound of [F5] is attained. This is (c). [step 1.2, F1, F2, F5, algebra]

3.1 [Scope] Clauses (a)-(c) used the internal matrices, the spread definition, the spectral-projection criterion and the Robertson relation; no measurement procedure, apparatus, dynamics or empirical input entered, which is the scope statement (d). [step 1.1, step 2.1, step 1.2, step 2.2] ∎
