---
id: pthm-nrqm-uncertainty-position-momentum-relation
aliases: [ nrqm-uncertainty-position-momentum-relation ]
kind: physics-theorem
domain: physics
title: "The position-momentum preparation relation of the massive spin-s model"
status: published
origin: pipeline
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-uncertainty-preparation-spread,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-uncertainty-approximation-by-product-domain-vectors,
    lem-nrqm-uncertainty-product-domain-commutator-identity,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-preparation-moments,
    pthm-nrqm-uncertainty-robertson-relation,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-uncertainty-approximation-by-product-domain-vectors: mathematical-premise
  lem-nrqm-uncertainty-product-domain-commutator-identity: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-preparation-moments: physical-result
  pthm-nrqm-uncertainty-robertson-relation: physical-result
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The position-momentum preparation relation of the massive
  spin-s particle model of the framework, for one particle of mass parameter m>0
  and spin label s: for every unit state vector in D(Q_j) cap D(P_j) the product
  of the preparation spreads of the j-th position and j-th momentum is at least
  hbar/2, with no product-domain hypothesis, together with the equality
  characterization by linear dependence of the centered vectors and the exact
  imaginary part -hbar/2. The statement is a conditional consequence of P1, P2,
  P5, P6 and the cited mathematics; P1 assigns pure preparations to unit rays,
  P2 supplies the outcome laws and spread reading, and P5/P6 assign this massive
  spin-s model. It concerns the spreads of the two separately assigned outcome
  laws and asserts no joint sharp observable with the exact spectral marginals,
  no claim about unsharp joint measurements, no apparatus realisation, no
  disturbance relation and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 3.4 and
        3.4.1, printed pages 81-88 (PDF pages 84-91): canonical commutation
        relations, the position-momentum bound Delta x Delta p >= hbar/2 and the
        Gaussian saturation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 2, printed
        pages 3-6: the uncertainty inequality for position and momentum and the
        conditions for saturation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1 and Section 8.1, printed pages 55-58 and 173-175 (PDF pages
        67-70 and 185-187): position and momentum as self-adjoint operators and
        the algebraic calculus behind the canonical commutation relation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5, and the
internal-factor assignment P6 of the framework, read for the spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$, spin label $s\in\{0,\tfrac12,1,\dots\}$ and $r=2s+1$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $Q_{j},P_{j}$ be the model's $j$-th position and
$j$-th momentum operators with their maximal domains, and let
$\Delta_{\psi}Q_{j}$ and $\Delta_{\psi}P_{j}$ be their preparation spreads in
the reading of [[def-nrqm-uncertainty-preparation-spread]]. Let
$\psi\in D(Q_{j})\cap D(P_{j})$ be a unit vector and put
$$a:=\langle Q_{j}\psi,\psi\rangle,\qquad b:=\langle P_{j}\psi,\psi\rangle,\qquad x:=(Q_{j}-a)\psi,\qquad y:=(P_{j}-b)\psi .$$
Then:

(a) $\Delta_{\psi}Q_{j}$ and $\Delta_{\psi}P_{j}$ are defined and
$$\Delta_{\psi}Q_{j}\,\Delta_{\psi}P_{j}\ge\frac{\hbar}{2};$$

(b) if in addition $\psi\in D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$, then
$(Q_{j}P_{j}-P_{j}Q_{j})\psi=i\hbar\psi$ and the bound of (a) follows from the
Robertson relation for the two observables;

(c) for every unit $\psi\in D(Q_{j})\cap D(P_{j})$ the centered pairing has the
exact imaginary part
$$\operatorname{Im}\langle x,y\rangle=-\frac{\hbar}{2};$$
consequently equality $\Delta_{\psi}Q_{j}\Delta_{\psi}P_{j}=\hbar/2$ holds if
and only if $x$ and $y$ are linearly dependent and
$\operatorname{Re}\langle x,y\rangle=0$;

(d) **Scope.** The statement is conditional on P1, P2, P5, P6 and the cited
mathematics. It concerns the two separately assigned position and momentum
outcome laws in one preparation, needs no hypothesis on the products
$Q_{j}P_{j}$ or $P_{j}Q_{j}$. The compatibility results of this page show that
no joint sharp observable with the exact spectral marginals of $Q_{j}$ and
$P_{j}$ exists; this statement makes no claim about existence or
nonexistence of unsharp joint measurements or their outcome laws. It asserts
no apparatus realization, no disturbance relation, no dynamics and no
empirical result. Massless, relativistic, singular-potential and boundary
realizations are separate models for which no such relation is asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P5 and P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the operators $Q_{j},P_{j}$ of the model with their maximal domains; a unit vector $\psi\in D(Q_{j})\cap D(P_{j})$; the numbers $a,b$ and the centered vectors $x,y$.

[F1] **Model operators.** $Q_{j}$ and $P_{j}$ are the componentwise position and momentum operators of [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a), self-adjoint with domains $D(Q_{j})=\{f:x_{j}f_{l}\in L^{2}\ \forall l\}$ and $D(P_{j})=\{f:D_{j}f_{l}\in L^{2}\ \forall l\}$, and the model assigns to them the status of assigned sharp observables in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a) ([[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (b)).

[F2] **Moments and spreads.** For a unit vector in $D(Q_{j})$ the mean and variance of the position law exist with $\Delta_{\psi}Q_{j}=\|(Q_{j}-a)\psi\|$ where $a=\langle Q_{j}\psi,\psi\rangle$ is real, and likewise for $P_{j}$ ([[pthm-nrqm-observables-preparation-moments]] clauses (a) and (b), [[def-nrqm-uncertainty-preparation-spread]] clauses (b) and (c)).

[F3] **Product domain and commutator.** $D(Q_{j}P_{j})\cap D(P_{j}Q_{j})=\{f:D_{j}f,x_{j}f,x_{j}D_{j}f\in L^{2}\}$ and on it $(Q_{j}P_{j}-P_{j}Q_{j})f=i\hbar f$ ([[lem-nrqm-uncertainty-product-domain-commutator-identity]] clauses (b) and (c)).

[F4] **Approximation.** For every unit $\psi\in D(Q_{j})\cap D(P_{j})$ there is a sequence $(\varphi_{n})$ of unit vectors in $D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$ with $\varphi_{n}\to\psi$, $Q_{j}\varphi_{n}\to Q_{j}\psi$ and $P_{j}\varphi_{n}\to P_{j}\psi$ in $H_{s}$, and with $\langle Q_{j}\varphi_{n},\varphi_{n}\rangle\to\langle Q_{j}\psi,\psi\rangle$, $\|Q_{j}\varphi_{n}\|\to\|Q_{j}\psi\|$ and the analogous momentum limits ([[lem-nrqm-uncertainty-approximation-by-product-domain-vectors]]).

[F5] **Robertson relation.** For two assigned sharp observables and a unit vector in the intersection of the two operator domains and the two product domains, the spread product is at least half the absolute value of the commutator pairing ([[pthm-nrqm-uncertainty-robertson-relation]] clause (b)).

[F6] **Cauchy-Schwarz and its equality case.** In a complex inner product space, $\|v\|\,\|w\|\ge|\langle v,w\rangle|\ge|\operatorname{Im}\langle v,w\rangle|$ and $|\langle v,w\rangle|^{2}=(\operatorname{Re}\langle v,w\rangle)^{2}+(\operatorname{Im}\langle v,w\rangle)^{2}$, with equality in the first inequality if and only if $v,w$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-hilbert-space]]).

## Proof

**Proof technique:** prove the bound first on the product domain from the commutator identity and the Robertson relation, transfer it to the full maximal domain of the pair by the cutoff approximation, and compute the exact imaginary part of the centered pairing along the approximating sequence.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Product-domain case] Let $\varphi$ be a unit vector in $D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$. By [F1] the operators $Q_{j},P_{j}$ are the model's assigned sharp observables with their maximal domains, so the preparation spreads and the Robertson relation of [F5] apply to them. By [F3], $(Q_{j}P_{j}-P_{j}Q_{j})\varphi=i\hbar\varphi$, so $\langle[Q_{j},P_{j}]\varphi,\varphi\rangle=i\hbar\|\varphi\|^{2}=i\hbar$. By [F5] the product of the preparation spreads of the two assigned observables satisfies $\Delta_{\varphi}Q_{j}\Delta_{\varphi}P_{j}\ge\tfrac12|i\hbar|=\hbar/2$. [given, F1, F3, F5, algebra]

2.1 [Approximation] Let $\psi\in D(Q_{j})\cap D(P_{j})$ be a unit vector and let $(\varphi_{n})$ be the approximating sequence of [F4]. For every $n$, $\varphi_{n}$ is a unit product-domain vector, so step 1.1 gives $\Delta_{\varphi_{n}}Q_{j}\Delta_{\varphi_{n}}P_{j}\ge\hbar/2$. By [F2] and [F4], $\Delta_{\varphi_{n}}Q_{j}^{2}=\|Q_{j}\varphi_{n}\|^{2}-\langle Q_{j}\varphi_{n},\varphi_{n}\rangle^{2}\to\|Q_{j}\psi\|^{2}-\langle Q_{j}\psi,\psi\rangle^{2}=\Delta_{\psi}Q_{j}^{2}$, and the analogous identity holds for $P_{j}$ with the momentum limits of [F4]; taking square roots and products gives $\Delta_{\varphi_{n}}Q_{j}\Delta_{\varphi_{n}}P_{j}\to\Delta_{\psi}Q_{j}\Delta_{\psi}P_{j}$. Hence the limit satisfies $\Delta_{\psi}Q_{j}\Delta_{\psi}P_{j}\ge\hbar/2$, which is (a); and on the product domain the same computation together with [F3] is the derivation of (b). [given, step 1.1, F2, F3, F4, algebra]

3.1 [Exact imaginary part] Keep the notation of step 2.1 and put $a_{n}:=\langle Q_{j}\varphi_{n},\varphi_{n}\rangle$, $b_{n}:=\langle P_{j}\varphi_{n},\varphi_{n}\rangle$, $x_{n}:=(Q_{j}-a_{n})\varphi_{n}$, $y_{n}:=(P_{j}-b_{n})\varphi_{n}$. Since $\varphi_n$ lies in both product domains, symmetry of $Q_j$ and $P_j$ gives $\langle[Q_j,P_j]\varphi_n,\varphi_n\rangle=\langle P_j\varphi_n,Q_j\varphi_n\rangle-\langle Q_j\varphi_n,P_j\varphi_n\rangle=-2i\operatorname{Im}\langle Q_j\varphi_n,P_j\varphi_n\rangle$. The means $a_n,b_n$ are real by [F2], and expanding with the inner product linear in the first argument gives $\langle x_n,y_n\rangle=\langle Q_j\varphi_n,P_j\varphi_n\rangle-a_nb_n$; hence $\operatorname{Im}\langle Q_j\varphi_n,P_j\varphi_n\rangle=\operatorname{Im}\langle x_n,y_n\rangle$. By [F3], $\langle[Q_j,P_j]\varphi_n,\varphi_n\rangle=i\hbar$; hence $-2i\operatorname{Im}\langle x_n,y_n\rangle=i\hbar$ and $\operatorname{Im}\langle x_n,y_n\rangle=-\hbar/2$. By [F4], $x_{n}\to x$ and $y_{n}\to y$ in $H_{s}$ (each is the sum of a convergent term and a scalar multiple of a convergent term), so the inner product is continuous and $\operatorname{Im}\langle x,y\rangle=\lim_{n}\operatorname{Im}\langle x_{n},y_{n}\rangle=-\hbar/2$. This is the first display of (c). [given, step 2.1, F1, F2, F3, F4, algebra]

4.1 [Equality characterization] For a unit $\psi\in D(Q_{j})\cap D(P_{j})$ put $\Delta_{Q}:=\Delta_{\psi}Q_{j}$, $\Delta_{P}:=\Delta_{\psi}P_{j}$. By step 3.1, $\operatorname{Im}\langle x,y\rangle=-\hbar/2$, and by [F6] $$\hbar/2\le\Delta_{Q}\Delta_{P}=\|x\|\,\|y\|\ge|\langle x,y\rangle|\ge|\operatorname{Im}\langle x,y\rangle|=\hbar/2 .$$ Equality $\Delta_{Q}\Delta_{P}=\hbar/2$ holds exactly when both inequalities are equalities, that is (by the equality case of [F6] and the identity $|\langle x,y\rangle|^{2}=(\operatorname{Re}\langle x,y\rangle)^{2}+(\operatorname{Im}\langle x,y\rangle)^{2}$) when $x,y$ are linearly dependent and $\operatorname{Re}\langle x,y\rangle=0$. This completes (c). [step 2.1, step 3.1, F6, algebra]

5.1 [Scope] Clauses (a)-(c) were obtained from the model's operators, the product-rule identity, the approximation lemma and the Robertson relation; no joint outcome law, apparatus, disturbance, dynamics or empirical input enters. This is (d). [step 1.1, step 2.1, step 3.1, step 4.1] ∎
