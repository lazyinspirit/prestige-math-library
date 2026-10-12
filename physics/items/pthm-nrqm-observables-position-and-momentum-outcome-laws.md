---
id: pthm-nrqm-observables-position-and-momentum-outcome-laws
aliases: [ nrqm-observables-position-and-momentum-outcome-laws ]
kind: physics-theorem
domain: physics
title: "Position and momentum outcome laws and the Born density of the massive
  particle model"
status: draft
origin: pipeline
dependency_level: 8
deps:
  [
    cor-second-countable-lch-locally-finite-borel-measures-are-regular,
    def-axiom-of-choice,
    def-countable-choice,
    def-fourier-transform-on-l-one-of-rn,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-projection-valued-measure,
    def-regular-borel-measure-on-an-lch-space,
    lem-finite-measure-uniqueness-on-a-pi-system,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint,
    lem-nrqm-observables-l2-multiplication-spectral-measure,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    prop-countable-subsets-of-rn-are-lebesgue-null,
    thm-borel-products-of-euclidean-spaces-are-euclidean-borel,
    thm-indefinite-integral-of-a-nonnegative-function-is-a-measure,
    thm-plancherel,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    thm-tonelli-theorem-for-sigma-finite-product-spaces
  ]
dependency_roles:
  cor-second-countable-lch-locally-finite-borel-measures-are-regular: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  def-regular-borel-measure-on-an-lch-space: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional consequences of the adopted observable and
  probability postulate for the spinless massive-particle model of the
  kinematics postulate: the position operators are self-adjoint with maximal
  domains and pure-preparation laws of density |ψ|²; their unique joint position
  PVM has density |ψ|² for pure preparations and mixture density Σₙwₙ|uₙ|² for a
  density-operator preparation ρ=ΣₙwₙT_{uₙ,uₙ}; the momentum operators are
  self-adjoint with Fourier multipliers and pure-preparation laws of density
  |ψ-hat|² in the momentum variable; exact values of each position and momentum
  coordinate have probability zero for every preparation although the spectra
  are all of R. The item is spinless, asserts no joint position-momentum
  statistics, no dynamics and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2
        and 3.2.1, printed pages 3-14 and 67-70 (the wave function and its
        probability density; momentum eigenstates, plane waves and the
        continuous spectrum)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.2 and Section 3.1, printed pages 58-69 and 88-95 (position and
        momentum operators, multiplication operators and their spectral
        measures)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4
        \"Dirac's Bra and Ket Notation\", Section 3, printed pages 11-15
        (position and momentum states, their inner products and the
        interpretation of the wave function)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9\
        d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the observable and probability postulate [[post-nrqm-framework-observable-and-probability]] (P2) and the kinematics and massive-particle model postulate [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] (P5) for a spinless particle of mass $m>0$ and action constant $\hbar>0$, with state space $H=L^{2}(\mathbb R^{3};\mathbb C)$ and position and momentum operators $Q_{j},P_{j}$ as in [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\mathcal F_{2}$ be the unitary Plancherel transform with the convention $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^{1}$ ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]), and for a unit vector $\psi\in H$ let $\mu^{Q_{j}}_{\psi}$ and $\mu^{P_{j}}_{\psi}$ be the outcome laws of the assigned observables $Q_{j}$ and $P_{j}$ in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]]. Then:

(a) **Position observable.** $Q_{j}$ is self-adjoint with domain $D(Q_{j})=\{\psi\in H:x_{j}\psi\in H\}$, its spectral PVM is given by $E_{Q_{j}}(B)\psi=\mathbf 1_{x_{j}^{-1}(B)}\psi$, and
$$\mu^{Q_{j}}_{\psi}(B)=\int_{x_{j}^{-1}(B)}|\psi(x)|^{2}\,dx\qquad(B\subseteq\mathbb R\ \text{Borel}).$$
The law is absolutely continuous with respect to Lebesgue measure with density
$$f_{j}(t)=\int_{\mathbb R^{2}}|\psi(x_{\perp},t)|^{2}\,dx_{\perp},$$
the $j$-th marginal density of $|\psi|^{2}$, and it is atomless: $\mu^{Q_{j}}_{\psi}(\{\lambda\})=0$ for every $\lambda\in\mathbb R$. Moreover $\sigma(Q_{j})=\mathbb R$.

(b) **Joint position law.** There is a unique regular projection-valued measure $G$ on the Borel $\sigma$-algebra of $\mathbb R^{3}$ with
$$G(B_{1}\times B_{2}\times B_{3})=E_{Q_{1}}(B_{1})E_{Q_{2}}(B_{2})E_{Q_{3}}(B_{3})$$
for all Borel $B_{1},B_{2},B_{3}\subseteq\mathbb R$, and its scalar law in the preparation $\psi$ is the measure of the density $|\psi|^{2}$:
$$\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}|\psi(x)|^{2}\,dx\qquad(B\subseteq\mathbb R^{3}\ \text{Borel}).$$
For a density-operator preparation $\rho=\sum_nw_nT_{u_n,u_n}$, its joint scalar law is
$$\mu^{G}_{\rho}(B):=\operatorname{tr}(\rho G(B))=\sum_nw_n\int_B|u_n(x)|^{2}\,dx=\int_Bf_{\rho}(x)\,dx,\qquad f_{\rho}(x):=\sum_nw_n|u_n(x)|^{2},$$
where $f_{\rho}\in L^{1}(\mathbb R^{3})$ is a nonnegative density class of total integral $1$, by [F8] and Tonelli. Thus the model's joint position law in a spatial region $B$ has density $|\psi|^{2}$ for a pure preparation and $f_{\rho}$ for a density-operator preparation.

(c) **Momentum observable.** $P_{j}$ is self-adjoint with domain $D(P_{j})=\{\psi\in H:\xi_{j}\mathcal F_{2}\psi\in L^{2}\}$ and Fourier representation $\mathcal F_{2}(P_{j}\psi)(\xi)=2\pi\hbar\,\xi_{j}\,\mathcal F_{2}\psi(\xi)$; its spectral PVM is $E_{P_{j}}(B)=\mathcal F_{2}^{-1}M_{\mathbf 1_{m^{-1}(B)}}\mathcal F_{2}$ with $m(\xi)=2\pi\hbar\xi_{j}$, and
$$\mu^{P_{j}}_{\psi}(B)=\int_{m^{-1}(B)}|\mathcal F_{2}\psi(\xi)|^{2}\,d\xi,\qquad m^{-1}(B)=\{\xi\in\mathbb R^{3}:2\pi\hbar\xi_{j}\in B\}.$$
The law is absolutely continuous with density
$$g_{j}(p)=\frac{1}{2\pi\hbar}\int_{\mathbb R^{2}}\bigl|\mathcal F_{2}\psi\bigl(\xi_{\perp},\tfrac{p}{2\pi\hbar}\bigr)\bigr|^{2}d\xi_{\perp}$$
in the momentum variable $p$, and it is atomless; moreover $\sigma(P_{j})=\mathbb R$.

(d) **Exact values.** For every $\lambda\in\mathbb R$ one has $\mu^{Q_{j}}_{\psi}(\{\lambda\})=0$ and $\mu^{P_{j}}_{\psi}(\{\lambda\})=0$ for every preparation, although both observables have spectrum $\mathbb R$: an exact position or momentum value is not an outcome of the model's sharp law, while its finite-resolution readings are the Borel bin probabilities of (a)-(c).

(e) **Scope.** The statement is conditional on P2, on the massive spinless model of P5 and on the cited mathematics. The componentwise extension to the spin-$s$ model is not proved here; no joint statistics of a position and a momentum observable, no dynamics and no apparatus or empirical claim are made. The identification of the operators $Q_{j},P_{j}$ with concrete laboratory position and momentum measurements is a tested identification under P7 and is not asserted by this item.

## Facts & Assumptions

**Given:** The adopted postulates P2 and P5 for a spinless particle of mass $m>0$ with state space $H=L^{2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]); the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); the operators $Q_{j},P_{j}$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]; the Plancherel transform $\mathcal F_{2}$ of [[def-fourier-transform-on-l-one-of-rn]] and [[thm-plancherel]]; a unit vector $\psi\in H$; a density-operator preparation $\rho$ and its finite or countable spectral expansion when it is used; Borel sets $B,B_{1},B_{2},B_{3}$; and the outcome-law reading of [[def-nrqm-observables-framework-observable-and-outcome-law]].

[F1] **Outcome law of an assigned observable.** For an assigned observable $A$ and a unit vector $\psi$ the law is $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$, where $E_{A}$ is the spectral PVM of $A$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b) and (c), clause (ii)).

[F2] **The massive-particle model.** P5 assigns the state space $H=L^{2}(\mathbb R^{3};\mathbb C)$ to a spinless particle of mass $m>0$ and defines $(Q_{j}\psi)(x)=x_{j}\psi(x)$ on the classes with $x_{j}\psi\in L^{2}$ and $(P_{k}\psi)=-i\hbar D_{k}\psi$ on the classes whose componentwise weak derivative lies in $L^{2}$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iii)).

[F3] **Self-adjointness and Fourier representation.** $Q_{j}$ is self-adjoint with $D(Q_{j})=\{\psi:x_{j}\psi\in L^{2}\}$; $P_{j}$ is self-adjoint with $D(P_{j})=\{\psi:\xi_{j}\mathcal F_{2}\psi\in L^{2}\}$ and $\mathcal F_{2}(P_{j}\psi)(\xi)=2\pi\hbar\xi_{j}\mathcal F_{2}\psi(\xi)$ almost everywhere ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clauses (a) and (b)).

[F4] **Multiplication operators.** Let $(X,\Sigma,\mu)$ be a $\sigma$-finite measure space and $m:X\to\mathbb R$ measurable and finite $\mu$-a.e.; then $M_{m}f=mf$ on $D(M_{m})=\{f:\int|m|^{2}|f|^{2}d\mu<\infty\}$ is self-adjoint with regular spectral PVM $E(B)=M_{\mathbf 1_{m^{-1}(B)}}$, $\int\lambda\,dE=M_{m}$ and $\sigma(M_{m})$ equal to the essential range of $m$ ([[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (a)-(d)).

[F5] **Unitary transport of a spectral PVM.** If $U$ is unitary and $F$ is a regular PVM, then $B\mapsto U^{-1}F(B)U$ is a regular PVM with $U^{-1}(\int\lambda\,dF(\lambda))U=\int\lambda\,d(U^{-1}FU)(\lambda)$ on the transported domain; the spectral PVM of a self-adjoint operator is the unique regular PVM representing it, so a transported regular PVM representing the transported operator is its spectral PVM ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F6] **Tonelli, null sets and indefinite integrals.** For $\sigma$-finite measure spaces, integrals of product-measurable nonnegative functions may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); for nonnegative measurable $f$ the set function $A\mapsto\int_{A}f\,d\mu$ is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]); countable subsets of $\mathbb R^{n}$ are Lebesgue-null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F7] **Measure uniqueness on a pi-system.** Finite measures on the $\sigma$-algebra generated by a $\pi$-system that agree on the $\pi$-system and have equal total mass are equal ([[lem-finite-measure-uniqueness-on-a-pi-system]]); the Euclidean Borel $\sigma$-algebra of $\mathbb R^{3}$ is generated by the rectangles $B_{1}\times B_{2}\times B_{3}$ ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]],).

[F8] **Density-operator law.** Every density-operator preparation has a finite or countable expansion $\rho=\sum_nw_nT_{u_n,u_n}$ with $w_n\ge0$, $\sum_nw_n=1$ and $(u_n)$ orthonormal; for any PVM $E$ its law is $\mu_\rho(B)=\sum_nw_n\|E(B)u_n\|^{2}$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F9] **Regularity on $\mathbb R^{3}$.** Every finite Borel measure on the second-countable locally compact Hausdorff space $\mathbb R^{3}$ is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]); a regular PVM is a PVM whose finite scalar measures $B\mapsto\langle E(B)\chi,\chi\rangle$ are regular ([[def-projection-valued-measure]], [[def-regular-borel-measure-on-an-lch-space]]).

## Proof

1.1 [The position observable] On the $\sigma$-finite space $(\mathbb R^{3},\text{Borel},\text{Lebesgue})$ the function $x\mapsto x_{j}$ is real, measurable and finite everywhere, so [F4] applies to $M_{x_{j}}$; by [F2] and [F3] the operator $Q_{j}$ is exactly $M_{x_{j}}$ with its displayed domain, hence is self-adjoint with spectral PVM $E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}}$ and $\sigma(Q_{j})$, the essential range of $x_{j}$, equal to $\mathbb R$ (every open interval in the $j$-th coordinate has a slab preimage of positive Lebesgue measure). For a unit vector $\psi$, [F1] gives $\mu^{Q_{j}}_{\psi}(B)=\|E_{Q_{j}}(B)\psi\|^{2}=\int_{x_{j}^{-1}(B)}|\psi(x)|^{2}dx$. Writing the integral over $x_{j}^{-1}(B)=\{(x_{\perp},t):t\in B\}$ as an iterated integral by Tonelli [F6] identifies the density $f_{j}(t)=\int_{\mathbb R^{2}}|\psi(x_{\perp},t)|^{2}dx_{\perp}$: $\mu^{Q_{j}}_{\psi}(B)=\int_{B}f_{j}(t)\,dt$. For the atomless claim, $x_{j}^{-1}(\{\lambda\})$ is a translate of $\mathbb R^{2}$, and the integral over $t\in\{\lambda\}$ vanishes because $\{\lambda\}$ is countable hence Lebesgue-null [F6]; equivalently $\mu^{Q_{j}}_{\psi}(\{\lambda\})=\int_{\{\lambda\}}f_{j}(t)dt=0$. This is clause (a). [given, F1, F2, F3, F4, F6, algebra]

1.2 [The momentum observable] By [F3] the operator $P_{j}$ is self-adjoint with the stated domain and Fourier representation. Let $M:=M_{2\pi\hbar\xi_{j}}$ be the multiplication operator of [F4] on $L^{2}(\mathbb R^{3};\mathbb C)$ with multiplier $m(\xi)=2\pi\hbar\xi_{j}$, whose spectral PVM is $E^{M}(B)=M_{\mathbf 1_{m^{-1}(B)}}$; then $P_{j}=\mathcal F_{2}^{-1}M\mathcal F_{2}$ on $D(P_{j})=\mathcal F_{2}^{-1}D(M)$ by [F3], so by the transport rule [F5] the operator family $E_{P_{j}}(B):=\mathcal F_{2}^{-1}E^{M}(B)\mathcal F_{2}$ is a regular PVM representing $P_{j}$; since the spectral PVM is unique among regular PVMs representing a self-adjoint operator, $E_{P_{j}}$ is the spectral PVM of $P_{j}$ and $\sigma(P_{j})=\sigma(M)=\mathbb R$ is the essential range of $2\pi\hbar\xi_{j}$. For a unit $\psi$, [F1] and unitarity of $\mathcal F_{2}$ give $\mu^{P_{j}}_{\psi}(B)=\|E_{P_{j}}(B)\psi\|^{2}=\|E^{M}(B)\mathcal F_{2}\psi\|^{2}=\int_{m^{-1}(B)}|\mathcal F_{2}\psi(\xi)|^{2}d\xi$. Substituting the momentum variable $p=2\pi\hbar\xi_{j}$ and iterating the resulting integral by Tonelli [F6] gives the density $g_{j}(p)=(2\pi\hbar)^{-1}\int_{\mathbb R^{2}}|\mathcal F_{2}\psi(\xi_{\perp},p/(2\pi\hbar))|^{2}d\xi_{\perp}$. For $c=\lambda/(2\pi\hbar)$, Tonelli [F6] and the nullity of the singleton $\{c\}\subset\mathbb R$ [F6] give $\int_{m^{-1}(\{\lambda\})}|\mathcal F_{2}\psi(\xi)|^{2}d\xi=\int_{\{c\}}\bigl(\int_{\mathbb R^{2}}|\mathcal F_{2}\psi(\xi_{\perp},s)|^{2}d\xi_{\perp}\bigr)ds=0$. Thus the momentum coordinate law is atomless. This proves clause (c). [given, F1, F3, F4, F5, F6, algebra]

1.3 [Exact values for density-operator preparations] Let $\rho=\sum_nw_nT_{u_n,u_n}$ be the finite or countable expansion of a density-operator preparation from [F8]. For every $j$ and $\lambda$, the law formula of [F8] gives
$\mu^{Q_j}_{\rho}(\{\lambda\})=\sum_nw_n\mu^{Q_j}_{u_n}(\{\lambda\})=0,\qquad \mu^{P_j}_{\rho}(\{\lambda\})=\sum_nw_n\mu^{P_j}_{u_n}(\{\lambda\})=0,$
because each unit vector $u_n$ has zero singleton probabilities by steps 1.1 and 1.2. Every preparation is either a pure unit ray or a density operator in the state-space assignment [[def-nrqm-state-geometry-framework-state-space]], so this proves clause (d) for every preparation. [step 1.1, step 1.2, F8, algebra]

2.1 [The joint position law] Define $G(B):=M_{\mathbf 1_{B}}$ for Borel $B\subseteq\mathbb R^{3}$. Each $G(B)$ is an orthogonal projection, $G(\varnothing)=0$, $G(\mathbb R^{3})=I$, and $G(B)G(C)=G(B\cap C)$. If pairwise disjoint $B_n$ have union $B$, then for every $\chi\in H$ the squared norm of $G(B)\chi-\sum_{n\le N}G(B_n)\chi$ is $\int_{B\setminus\cup_{n\le N}B_n}|\chi|^{2}dx$, which tends to zero by countable additivity of the measure $C\mapsto\int_C|\chi|^{2}dx$ [F6]; hence $G$ is a PVM. For each $\chi\in H$, its scalar measure is $\langle G(B)\chi,\chi\rangle=\int_B|\chi(x)|^{2}dx$, a finite Borel measure of total mass $\|\chi\|^{2}$ by [F6], and it is regular by [F9] because $\mathbb R^{3}$ is second-countable, locally compact and Hausdorff. By the regularity definition in [F9], $G$ is a regular PVM. Its rectangle values satisfy $G(B_{1}\times B_{2}\times B_{3})=M_{\mathbf 1_{B_{1}}(x_{1})\mathbf 1_{B_{2}}(x_{2})\mathbf 1_{B_{3}}(x_{3})}=E_{Q_{1}}(B_{1})E_{Q_{2}}(B_{2})E_{Q_{3}}(B_{3})$ by step 1.1. For a unit $\psi$, the scalar law is $\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_B|\psi(x)|^{2}dx$. For a density operator $\rho=\sum_nw_nT_{u_n,u_n}$, [F8] gives $\mu^{G}_{\rho}(B)=\operatorname{tr}(\rho G(B))=\sum_nw_n\int_B|u_n(x)|^{2}dx$; Tonelli [F6] identifies this with $\int_Bf_{\rho}(x)dx$ for $f_{\rho}:=\sum_nw_n|u_n|^{2}$, whose integral is $\sum_nw_n=1$. If $H'$ is another regular PVM with the same values on all rectangles, then for every unit $\varphi$ the finite measures $B\mapsto\langle H'(B)\varphi,\varphi\rangle$ and $B\mapsto\langle G(B)\varphi,\varphi\rangle$ agree on rectangles, which form a $\pi$-system generating the Borel $\sigma$-algebra of $\mathbb R^{3}$ by [F7], and have the common total mass $\|\varphi\|^{2}$; [F7] makes them equal on all Borel sets, and polarization recovers equality of the operator values, so $H'=G$. Thus $G$ is the unique regular PVM with the displayed rectangle values and the joint position density is $|\psi|^{2}$ for a pure preparation and $f_{\rho}$ for a density-operator preparation. [step 1.1, F1, F4, F6, F7, F8, F9, algebra]

2.2 [Exact values for pure preparations] For a pure preparation represented by a unit vector $\psi$, steps 1.1 and 1.2 give $\mu^{Q_j}_{\psi}(\{\lambda\})=\mu^{P_j}_{\psi}(\{\lambda\})=0$ for every $\lambda\in\mathbb R$. The spectra remain $\sigma(Q_j)=\sigma(P_j)=\mathbb R$ by those same steps; no finite-resolution reading is affected, since the bin probabilities remain those of (a)-(c). [step 1.1, step 1.2, F1, algebra]

3.1 [Conclusion] Steps 1.1 and 1.2 prove (a) and (c), step 2.1 proves (b), and steps 2.2 and 1.3 prove (d). Each is conditional on P2, P5 and the cited mathematical hypotheses; the limits in (e) are exactly those used in the argument. [step 1.1, step 1.2, step 2.1, step 2.2, step 1.3, algebra] ∎
