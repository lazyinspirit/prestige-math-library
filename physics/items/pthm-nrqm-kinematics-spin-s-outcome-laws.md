---
id: pthm-nrqm-kinematics-spin-s-outcome-laws
aliases: [ nrqm-kinematics-spin-s-outcome-laws ]
kind: physics-theorem
domain: physics
title: "Position and momentum outcome laws of the massive spin-s model"
status: published
origin: session
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-nrqm-kinematics-framework-massive-spin-s-model
  - def-nrqm-observables-framework-observable-and-outcome-law
  - def-projection-valued-measure
  - lem-finite-measure-uniqueness-on-a-pi-system
  - lem-nrqm-kinematics-ccr-and-internal-factor-commutation
  - lem-nrqm-kinematics-componentwise-position-and-momentum
  - lem-nrqm-kinematics-momentum-representation
  - lem-nrqm-observables-l2-multiplication-spectral-measure
  - post-nrqm-framework-identical-particles-and-spin
  - post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
  - post-nrqm-framework-observable-and-probability
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - thm-heine-borel-rn
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  cor-second-countable-lch-locally-finite-borel-measures-are-regular: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The position and momentum outcome laws of the spin-s
  massive-particle model of the framework: the spectral projection-valued
  measures of the componentwise position and momentum operators, the joint
  position law with Born density the squared component norm, the momentum laws
  with density the squared momentum-representative norm, the atomlessness of
  exact values, and the invariance of the spatial laws under the internal
  factor. The statement is a conditional consequence of the observable and
  probability postulate P2 and the model postulates P5 and P6 and the cited
  mathematics; it asserts no joint position-momentum statistics, no dynamics, no
  apparatus or detector realization, no species identification and no empirical
  result."
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2
        and 3.2.3, printed pages 3-14 and 75-76 (PDF pages 6-17 and 78-79): the
        wave function and its probability density, the Schroedinger Hamiltonian,
        momentum eigenstates and the Fourier transform"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Sections 4 and 6, printed pages 12-18 and 22-25 (PDF pages
        12-18 and 22-25): the nature of the spectrum and the position and
        momentum representations"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the observable and probability postulate in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the kinematics
and massive-particle model postulate P5, and the internal-factor assignment of
the postulate P6, all read for the spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$, spin label $s\in\{0,\tfrac12,1,\dots\}$ and $r=2s+1$
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $H_{s}$ be the model's state space, $Q_{j},P_{k}$
its componentwise position and momentum operators, $U^{(s)}$ its momentum
transform, and let $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$ be the outcome law
of an assigned sharp observable $A$ in a unit vector $\psi$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).
Then:

(a) for each $j$ the spectral projection-valued measure of $Q_{j}$ is
$$E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}}\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
the componentwise multiplication by the indicator, and
$$\mu^{Q_{j}}_{\psi}(B)=\int_{x_{j}^{-1}(B)}\|\psi(x)\|_{\mathbb C^{r}}^{2}\,dx;$$
the law is atomless, $\mu^{Q_{j}}_{\psi}(\{\lambda\})=0$ for every
$\lambda\in\mathbb R$, and $\sigma(Q_{j})=\mathbb R$;

(b) there is a unique regular projection-valued measure $G$ on the Borel sets
of $\mathbb R^{3}$ with
$$G(B_{1}\times B_{2}\times B_{3})=E_{Q_{1}}(B_{1})E_{Q_{2}}(B_{2})E_{Q_{3}}(B_{3})$$
for all Borel $B_{1},B_{2},B_{3}$, namely $G(B)=M_{\mathbf 1_{B}}$, and its
scalar law is the model's Born position law,
$$\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}\|\psi(x)\|_{\mathbb C^{r}}^{2}\,dx;$$

(c) for each $k$ the spectral projection-valued measure of $P_{k}$ is
$$E_{P_{k}}(B)=U^{(s)-1}M_{\mathbf 1_{B}(p_{k})}U^{(s)},$$
and with $\psi_{p}:=U^{(s)}\psi$
$$\mu^{P_{k}}_{\psi}(B)=\int_{\{p\in\mathbb R^{3}:\,p_{k}\in B\}}\|\psi_{p}(p)\|_{\mathbb C^{r}}^{2}\,dp;$$
the law is atomless and $\sigma(P_{k})=\mathbb R$;

(d) for every unitary $V\in U(r)$, with $V_{\times}$ the matrix action of
[[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] clause (b),
$$\mu^{Q_{j}}_{V_{\times}\psi}=\mu^{Q_{j}}_{\psi},\qquad \mu^{P_{k}}_{V_{\times}\psi}=\mu^{P_{k}}_{\psi};$$

(e) **Scope.** The statement is conditional on P2, P5 and P6 and the cited
mathematics, and extends the position and momentum laws of the massive model to
the spin-$s$ state space. No joint law of a position and a momentum observable
is asserted, no dynamics is used or claimed, and the identification of the
operators with concrete laboratory apparatus is a tested identification under
the preparation and apparatus postulate, not a consequence of this theorem;
no empirical result is recorded. Exact values have probability zero although
both spectra equal $\mathbb R$. The real outcome spaces remain $\mathbb R$;
zero singleton mass means atomlessness and supplies no normalizable exact-value
eigenstate. Finite-resolution records use the displayed Borel bin probabilities.

## Facts & Assumptions

**Given:** The postulates P2, P5, P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the state space $H_{s}$ with $r=2s+1$; the operators $Q_{j},P_{k}$ and the unitaries $\Psi_{0},U^{(s)}$; a unit vector $\psi\in H_{s}$; Borel sets $B,B_{1},B_{2},B_{3}\subseteq\mathbb R$; a Borel set $B'\subseteq\mathbb R^{3}$; a unitary matrix $V\in U(r)$; a real $\lambda$.

[F1] **Outcome law.** For an assigned sharp observable $A$ with spectral PVM $E_{A}$ the law in a unit vector is $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$, a probability measure on the Borel sets; the spectral support of $E_{A}$ is the spectrum $\sigma(A)$, and $\mu^{A}_{\psi}(\{\lambda\})=0$ unless $\lambda$ is an eigenvalue of $A$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b)-(d)). If $A$ has no eigenvalues its laws are atomless, with real outcome space $\mathbb R$ and no normalizable exact-value eigenstate; zero singleton mass does not exclude real point realizations (clause (c) of the same definition, [[def-projection-valued-measure]]).

[F2] **Componentwise operators and their spectral measures.** $Q_{j}$ and $P_{k}$ are the componentwise operators of the model, self-adjoint with their maximal domains; $E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}}$ and $E_{P_{k}}(B)=\mathcal F_{2}^{(r)*}M_{\mathbf 1_{\{2\pi\hbar\xi_{k}\in B\}}}\mathcal F_{2}^{(r)}$ are their spectral PVMs ([[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] clauses (b),(c), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)); the matrix action $V_{\times}$ commutes with these PVMs and is unitary for unitary $V$ ([[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] clauses (b)-(d)).

[F3] **Momentum representation.** $U^{(s)}=U^{(\cdot)}$ for $r=2s+1$ is unitary, $U^{(s)}D(P_{k})=D(M_{p_{k}})$ and $U^{(s)}P_{k}=M_{p_{k}}U^{(s)}$; on Schwartz classes the displayed integral formula holds and the Plancherel identity $\int\|U^{(s)}f\|^{2}dp=\int\|f\|^{2}dx$ ([[lem-nrqm-kinematics-momentum-representation]] clauses (a),(b)).

[F4] **Multiplication spectral measure.** For a $\sigma$-finite measure space and a real measurable finite-valued multiplier $m$, the multiplication operator $M_{m}$ is self-adjoint with regular spectral PVM $M_{\mathbf 1_{m^{-1}(B)}}$ and $\sigma(M_{m})$ equal to the essential range of $m$ ([[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (a),(c),(d)); a regular PVM representing a self-adjoint operator is its spectral PVM ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F5] **Measure toolkit.** For $\sigma$-finite measure spaces, integrals of nonnegative product-measurable functions may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); for nonnegative measurable $h$ the set function $A\mapsto\int_{A}h\,d\mu$ is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]); finite measures on the $\sigma$-algebra generated by a $\pi$-system that agree on the $\pi$-system and have equal mass are equal ([[lem-finite-measure-uniqueness-on-a-pi-system]]); the Euclidean Borel $\sigma$-algebra of $\mathbb R^{3}$ is generated by the rectangles ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]). Under Countable Choice, every Borel measure finite on compact sets on a second-countable locally compact Hausdorff space is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]). The usual Euclidean $\mathbb R^3$ is such a space: rational-center, positive rational-radius balls form a countable base; the metric is Hausdorff; and closed bounded balls are compact by [[thm-heine-borel-rn]], so every point has a compact neighborhood. A coordinate hyperplane in $\mathbb R^{3}$ has Lebesgue measure zero: its indicator has iterated integral zero by [F5] because the inner integral over a singleton vanishes.

## Proof

**Proof technique:** direct; read the spectral measures of the componentwise operators from the conjugation lemmas, compute the laws by Tonelli, construct the joint position projection-valued measure and prove its uniqueness on rectangles, and transport the momentum measure through the unitary momentum representation.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Position spectral measure and law] [F2] gives $E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}}$, so for a unit $\psi$, $\mu^{Q_{j}}_{\psi}(B)=\|E_{Q_{j}}(B)\psi\|^{2} =\int_{x_{j}^{-1}(B)}\|\psi(x)\|_{\mathbb C^{r}}^{2}dx$ by [F1] and the definition of the componentwise norm. The measure is the indefinite integral $A\mapsto\int_{A}\|\psi\|^{2}dx$ of a nonnegative integrable function [F5], hence atomless: for every $\lambda$ the set $x_{j}^{-1}(\{\lambda\})$ is a coordinate hyperplane, whose indicator has iterated integral zero by [F5], so $\mu^{Q_{j}}_{\psi}(\{\lambda\})=0$. Finally the essential range of $x_{j}$ is $\mathbb R$ because every interval slab $x_{j}^{-1}((\lambda-\varepsilon,\lambda+\varepsilon))$ has positive Lebesgue measure, so [F4] gives $\sigma(Q_{j})=\mathbb R$. This proves (a). [F1, F2, F4, F5, algebra]

1.2 [Internal-factor invariance] Let $V\in U(r)$. By [F2] the matrix action $V_{\times}$ is unitary and commutes with $E_{Q_{j}}(B)$ and $E_{P_{k}}(B)$; hence $\mu^{Q_{j}}_{V_{\times}\psi}(B) =\|E_{Q_{j}}(B)V_{\times}\psi\|^{2} =\|V_{\times}E_{Q_{j}}(B)\psi\|^{2} =\|E_{Q_{j}}(B)\psi\|^{2}=\mu^{Q_{j}}_{\psi}(B)$, and the same computation with $P_{k}$ proves (d). [F1, F2, algebra]

2.1 [Joint position law] Define $G(B):=M_{\mathbf 1_{B}}$ for Borel $B\subseteq\mathbb R^{3}$; each $G(B)$ is a bounded self-adjoint projection because pointwise multiplication by an indicator is one, and $G$ is a PVM: $G(B)G(C)=G(B\cap C)$, the total mass is $I$, and strong countable additivity follows by dominated convergence for $\|G(B)\psi-\sum_{n\le N}G(B_{n})\psi\|^{2} =\int\bigl|\mathbf 1_{B}-\sum_{n\le N}\mathbf 1_{B_{n}}\bigr|\,\|\psi\|^{2}$. For every $h\in H_s$, the scalar measure is $G_h(B)=\langle G(B)h,h\rangle=\int_B\|h(x)\|_{\mathbb C^r}^2dx$, a Borel measure of finite total mass $\|h\|^2$ by [F5], hence finite on every compact set. Apply the regularity corollary in [F5] on the usual Euclidean $\mathbb R^3$, using the Countable Choice already assumed: each $G_h$ is regular. In particular the measure for a unit $\psi$ is the regular probability measure $\mu_\psi(B)=\int_B\|\psi(x)\|^2dx$; the zero vector gives the zero regular measure. This proves regularity of the actual component-valued PVM $G$ in [[def-projection-valued-measure]], including its finite matrix amplification. On rectangles, $G(B_{1}\times B_{2}\times B_{3}) =M_{\mathbf 1_{B_{1}}(x_{1})\mathbf 1_{B_{2}}(x_{2})\mathbf 1_{B_{3}}(x_{3})} =E_{Q_{1}}(B_{1})E_{Q_{2}}(B_{2})E_{Q_{3}}(B_{3})$ by [F2], since the componentwise multipliers commute. For a unit $\psi$ the scalar law is $\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}\|\psi(x)\|^{2}dx$. If $G'$ is another regular PVM with the same rectangle values, then for every unit $\varphi$ the finite measures $B\mapsto\langle G(B)\varphi,\varphi\rangle$ and $B\mapsto\langle G'(B)\varphi,\varphi\rangle$ agree on the rectangles, a $\pi$-system generating the Borel $\sigma$-algebra of $\mathbb R^{3}$ [F5], and have equal total mass $\|\varphi\|^{2}$; [F5] makes them equal on all Borel sets, and polarization recovers all pairings, so $G'=G$. This proves (b). [step 1.1, F2, F4, F5, algebra]

2.2 [Momentum spectral measure and law] By [F3] and [F4], $U^{(s)}$ is unitary, $D(M_{p_{k}})=U^{(s)}D(P_{k})$ and $M_{p_{k}}=U^{(s)}P_{k}U^{(s)-1}$; the multiplication operator $M_{p_{k}}$ on $L^{2}(dp;\mathbb C^{r})$ is self-adjoint with spectral PVM $M_{\mathbf 1_{\{p_{k}\in B\}}}$ [F4], so transporting through the unitary $U^{(s)}$ and using uniqueness of the spectral PVM [F4] gives $E_{P_{k}}(B)=U^{(s)-1}M_{\mathbf 1_{\{p_{k}\in B\}}}U^{(s)}$. For a unit $\psi$, $\mu^{P_{k}}_{\psi}(B)=\|E_{P_{k}}(B)\psi\|^{2} =\|M_{\mathbf 1_{\{p_{k}\in B\}}}U^{(s)}\psi\|^{2} =\int_{\{p_{k}\in B\}}\|\psi_{p}(p)\|^{2}dp$ [F3]. The law is the indefinite integral of the integrable function $\|\psi_{p}\|^{2}$ over a slice condition, hence atomless by the hyperplane argument of step 1.1; and the essential range of $p_{k}$ is $\mathbb R$, so $\sigma(P_{k})=\mathbb R$ [F4]. This proves (c). [step 1.1, F3, F4, algebra]

3.1 [Scope] Clauses (a)-(d) are consequences of P2, P5 and P6 as read by [[def-nrqm-kinematics-framework-massive-spin-s-model]] together with the displayed mathematics; no dynamics, joint position-momentum statistics, apparatus model or empirical claim is used, and the last sentences of the statement record the scope. [given, step 1.1, step 2.1, step 2.2, step 1.2] ∎

## Remarks

- **Relation to the spinless laws.** For $s=0$ one has $r=1$ and the statement
  reduces to the position and momentum outcome laws of the spinless massive
  model already established on the observables page; the present theorem
  supplies the component-valued case and the invariance of the spatial laws
  under the internal factor.
- **Nondegenerate continuum.** Both spectra equal $\mathbb R$ and both laws are
  atomless: the model admits no normalizable position or momentum eigenvector,
  and no exact value is an outcome with positive probability. Finite-resolution
  readings are the Borel bin probabilities displayed above.
