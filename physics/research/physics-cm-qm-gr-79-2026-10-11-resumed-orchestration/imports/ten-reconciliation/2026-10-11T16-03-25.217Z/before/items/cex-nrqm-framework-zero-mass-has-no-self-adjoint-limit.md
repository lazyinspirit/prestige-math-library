---
id: cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit
kind: counterexample
title: "The massive free-particle family has no mass-zero self-adjoint limit"
status: draft
origin: session
domain: physics
dependency_level: 7
deps: [post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-sobolev-space-wkp-and-its-norm, def-schwartz-space-and-its-seminorms, thm-algebra-of-derivatives, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, on explicit data of the model, of the inference that the massive free-particle family of the framework has a massless member obtained as the limit m to zero of the kinetic operators: the family has no strong limit on smooth classes, the energy of every nonzero-velocity state diverges, and the free frequencies diverge instead of approaching a finite massless dispersion. The item refutes that inference; it does not refute the framework, and it asserts no empirical claim. The radiation extension of the framework is a separate adopted model, not the limit refuted here."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2, printed pages 9-14 (PDF pages 12-17): the free Hamiltonian, plane-wave solutions and the dispersion of the Schroedinger equation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 7, Theorem 7.8 and Section 7.3, printed pages 168-171 (PDF pages 180-183): the free Schroedinger operator is self-adjoint with spectrum [0,infinity) and its time evolution is the free propagator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the one-particle model of [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] with potential $V=0$, the free kinetic operators
$$K_{m}:=-\frac{\hbar^{2}}{2m}\Delta,\qquad D(K_{m})=W^{2,2}(\mathbb R^{3};\mathbb C),\qquad m>0,$$
have a massless member: there exist a self-adjoint operator $K_{0}\ge0$ on $L^{2}(\mathbb R^{3};\mathbb C)$ and, for every $f$ in the Schwartz class $\mathcal S(\mathbb R^{3};\mathbb C)$, the convergence $K_{m}f\to K_{0}f$ in $L^{2}$ as $m\downarrow0$, and the free model defined by $K_{0}$ has a finite frequency law $\omega(k)$ for every wave number $k\ne0$.

## Facts & Assumptions

**Given:** $\hbar>0$; for $m>0$ the operator $K_{m}=-\frac{\hbar^{2}}{2m}\Delta$ with domain $W^{2,2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv), [[def-sobolev-space-wkp-and-its-norm]]); the free momentum operators $P_{j}$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]; a nonzero $f\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C)$.

[L1] The free-plus-bounded-potential theorem with $V=0$ and $c=2\pi^{2}\hbar^{2}/m$ gives: $-\frac{\hbar^{2}}{2m}\Delta$ is self-adjoint on $W^{2,2}(\mathbb R^{3};\mathbb C)$, and for every Schwartz function $g$ one has $-\frac{\hbar^{2}}{2m}\Delta g=-\frac{\hbar^{2}}{2m}(\Delta g)$ evaluating the Laplacian classically ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b) and (c), [[def-schwartz-space-and-its-seminorms]]).

[L2] Momentum operators: $P_{j}=-i\hbar D_{j}$ is self-adjoint with domain $D(P_{j})=\{u:\,D_{j}u\in L^{2}\}$, and $-\frac{\hbar^{2}}{2m}\Delta=\frac{1}{2m}\sum_{j}P_{j}^{2}$ as operators on the classes $\mathcal S\subseteq W^{2,2}$; for $u\in D(P_{j})$ one has $\langle P_{j}u,u\rangle=\langle u,P_{j}u\rangle$ and $\|P_{j}u\|^{2}=\langle P_{j}u,P_{j}u\rangle$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clause (a), [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]).

[L4] Frequencies of the free model: for $k\in\mathbb R^{3}$ and $\omega\in\mathbb R$, the smooth family $\psi_{k,\omega}(x,t)=e^{i(k\cdot x-\omega t)}$ satisfies $i\hbar\partial_{t}\psi_{k,\omega}=-\frac{\hbar^{2}}{2m}\Delta\psi_{k,\omega}$ at every point exactly when $\hbar\omega=\frac{\hbar^{2}|k|^{2}}{2m}$, that is $\omega=\frac{\hbar|k|^{2}}{2m}$, because $\partial_{t}\psi_{k,\omega}=-i\omega\psi_{k,\omega}$ and $\Delta\psi_{k,\omega}=-|k|^{2}\psi_{k,\omega}$ and the exponential does not vanish ([[thm-algebra-of-derivatives]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv)); the frequency has dimension $\tau^{-1}$ in the conventions of [[def-nrqm-framework-quantities-and-units]].

## Counterexample

**Proof technique:** direct; compute the operator values and frequencies on explicit smooth data under the stated assumptions.

1.1 [No strong limit on a smooth class] Let $f\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C)$ be nonzero with $\Delta f\ne0$; such functions exist, for instance the Gaussian $f(x)=e^{-|x|^{2}}$, whose Laplacian $(4|x|^{2}-6)e^{-|x|^{2}}$ is not the zero class. By [L1] $K_{m}f=-\frac{\hbar^{2}}{2m}\Delta f$, so $\|K_{m}f\|_{L^{2}}=\frac{\hbar^{2}}{2m}\|\Delta f\|_{L^{2}}$; since $\|\Delta f\|_{L^{2}}>0$ is fixed and $m\downarrow0$, this norm tends to $+\infty$. Hence the family $(K_{m}f)_{m}$ is not Cauchy in $L^{2}$ and does not converge for this $f$, so there is no operator $K_{0}$ with $K_{m}f\to K_{0}f$ for every Schwartz class. [given, L1, algebra]

1.2 [Energy divergence on every moving state] For $0\ne g\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C)$ with $\nabla g\ne0$, for instance the Gaussian above, one has $\langle K_{m}g,g\rangle=\frac{1}{2m}\sum_{j}\langle P_{j}^{2}g,g\rangle=\frac{1}{2m}\sum_{j}\|P_{j}g\|^{2}=\frac{\hbar^{2}}{2m}\|\nabla g\|_{L^{2}}^{2}$ by [L2] and the classical evaluation of the derivatives on $C_{c}^{\infty}$; since $\|\nabla g\|_{L^{2}}>0$, the energy expectation of every fixed state with nonzero mean square momentum diverges as $m\downarrow0$. A massless member obtained by this limit would therefore have to assign infinite energy to a fixed normalizable state, which is not the energy of any self-adjoint member of the family. [given, L2, algebra]

1.3 [Frequency divergence] By [L4], whose dimension is $[\hbar|k|^{2}/m]=\tau^{-1}$ in the conventions of [[def-nrqm-framework-quantities-and-units]], the free frequency of the wave number $k\ne0$ in the massive model is $\omega_{m}(k)=\frac{\hbar|k|^{2}}{2m}$, which satisfies $\omega_{m}(k)\to+\infty$ as $m\downarrow0$ for every fixed $k\ne0$; no finite frequency law $\omega(k)$ arises in this limit, and in particular the limit does not produce a law linear in $|k|$. [given, L4, algebra]

2.1 By steps 1.1 and 1.2 the family $(K_{m})_{m>0}$ has no strong limit operator on the smooth classes of the model, and by step 1.3 the frequencies of the free model diverge rather than converge under $m\downarrow0$. The statement refuted therefore fails in both of its claims: the massive free-particle family of the framework has no massless member obtained by this limit, and the model's radiation sector cannot be obtained as the $m\downarrow0$ limit of the massive model. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- What is refuted is the inference "massive free model, then $m\to0$, hence a massless quantum model". The refutation is conditional on the displayed definitions of $K_{m}$ and on the framework's massive-particle model with $m>0$; it does not claim that no massless quantum model exists, and it does not touch the radiation extension, which the framework adopts separately with its own assumptions and its own stated dispersion and detection models.
- The computations are carried out on the smooth classes where the operator action is the classical one; no spectral convergence theorem and no limiting evolution is asserted, because steps 1.1 and 2.1 show that the relevant limits do not exist on those classes.
