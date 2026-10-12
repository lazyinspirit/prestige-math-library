---
id: pthm-nrqm-oscillator-energy-spectrum-and-completeness
aliases: [nrqm-oscillator-energy-spectrum-and-completeness]
kind: physics-theorem
domain: physics
title: "The energy observable of the oscillator model: spectrum, eigenbasis and outcome law"
status: draft
origin: pipeline
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-oscillator-framework-quadratic-potential-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, lem-nrqm-oscillator-diagonal-eigenspaces, lem-nrqm-oscillator-unitary-transport-of-spectral-pvms, lem-nrqm-oscillator-closed-ladder-domains, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-multidimensional-oscillator-completeness, pthm-nrqm-observables-born-outcome-law-properties, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, lem-nrqm-observables-spectral-support-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  lem-nrqm-oscillator-diagonal-eigenspaces: mathematical-premise
  lem-nrqm-oscillator-unitary-transport-of-spectral-pvms: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The energy observable of the quadratic-potential oscillator model: for the one-dimensional realization with parameters m>0, omega>0 and hbar>0 the exact eigenvalue list hbar omega (n+1/2), one-dimensional eigenspaces spanned by the Hermite eigenbasis, completeness of that basis, the energy gap hbar omega and the atomic energy outcome law of the model; and for the isotropic three-dimensional realization of the spinless massive particle the spectrum hbar omega (M+3/2) with multiplicity (M+1)(M+2)/2. The statement is a conditional consequence of the postulates P1, P2, P4 and P5, of the adopted oscillator model and of the cited mathematics; it asserts no measured spectral line, no value of m, omega or hbar and no empirical result."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 printed pages 1-9: the spectrum E_n = hbar omega (n+1/2), the eigenstates and the ground-state equation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed pages 37-41 (PDF pages 45-49): the energy levels (3.12), the non-degenerate ground state and the ladder operators"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 printed pages 178-179 (PDF pages 190-191): completeness of the polynomial-Gaussian eigenbasis and the exact oscillator spectrum"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Adopt the state and composition postulate P1, the observable and probability postulate P2, the autonomous-dynamics postulate P4 and the kinematics and massive-particle model postulate P5, read through the oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] with parameters $m>0$, $\omega>0$ and action constant $\hbar>0$, and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\ell=\sqrt{\hbar/(m\omega)}$, let $(g_n)$, $D$, $A$, $(\psi_n)$ and $H_1$ be the Hermite family, the unitary, the dimensionless diagonal operator, the scaled eigenbasis and the energy operator of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a) and (b), so that $\psi_n=Dg_n$ and $(H_1,\mathrm J)$ is the model's one-dimensional assigned energy observable of the model definition clause (c), and let
$$N_\psi:=DND^{-1},\qquad a_\psi:=DaD^{-1},\qquad a^\dagger_\psi:=Da^\dagger D^{-1}$$
be the transported number and ladder operators of [[lem-nrqm-oscillator-closed-ladder-domains]], with domains $U D(N)$, $U D(a)$ and $U D(a^\dagger)$. Write $E_n:=\hbar\omega(n+\tfrac12)$ and, for the three-dimensional realization of the model definition clause (d), let $(H_3,\mathrm J)$ and $(\psi_N)_{N\in\mathbb N^3}$ be its assigned energy observable and its product eigenbasis. Then:

(a) **Spectrum, eigenbasis and simplicity.** $D(H_1)=\{f\in H_1:\sum_nn^{2}|\langle f,\psi_n\rangle|^{2}<\infty\}$, the family $(\psi_n)$ is a complete orthonormal family of $H_1$ and a core for $H_1$, $H_1\psi_n=E_n\psi_n$, and the spectrum and eigenspaces are
$$\sigma(H_1)=\{E_n:n\in\mathbb N\},\qquad \ker(H_1-E_nI)=\mathbb C\psi_n\quad(n\in\mathbb N);$$
the ground energy is $E_0=\hbar\omega/2$ and the gap between consecutive levels is $E_{n+1}-E_n=\hbar\omega$;

(b) **Excitation reading.** $H_1=\hbar\omega\bigl(N_\psi+\tfrac12I\bigr)$ with common domain $D(H_1)=D(N_\psi)$; $N_\psi$ is self-adjoint with spectrum $\mathbb N$ and eigenbasis $(\psi_n)$; $a_\psi$ and $a^\dagger_\psi$ are closed with $a_\psi^{*}=a^\dagger_\psi$, and on the eigenbasis
$$a_\psi\psi_n=\sqrt n\,\psi_{n-1}\ (n\ge1),\qquad a_\psi\psi_0=0,\qquad a^\dagger_\psi\psi_n=\sqrt{n+1}\,\psi_{n+1},\qquad N_\psi\psi_n=n\psi_n;$$
the $\psi_n$ are exactly the eigenvectors of $N_\psi$, and the outcome law of $N_\psi$ in the pure preparation of $\psi_n$ is the point mass $\delta_n$;

(c) **Energy outcome law.** For every unit $f\in H_1$ the outcome law of the assigned energy observable $(H_1,\mathrm J)$ in the pure preparation of $f$ is purely atomic with
$$\mu^{H_1}_f\bigl(\{E_n\}\bigr)=|\langle f,\psi_n\rangle|^{2}\quad(n\in\mathbb N),\qquad \mu^{H_1}_f(B)=\sum_{n:\,E_n\in B}|\langle f,\psi_n\rangle|^{2}$$
for every Borel set $B\subseteq\mathbb R$, and $\mu^{H_1}_f(\sigma(H_1))=1$; in particular the law has no mass outside $\{E_n:n\in\mathbb N\}$, and $E_n$ is an atom of the law of $f$ exactly when $\langle f,\psi_n\rangle\ne0$;

(d) **Three-dimensional isotropic realization.** The energy observable $(H_3,\mathrm J)$ of the model definition clause (d) has spectrum $\sigma(H_3)=\{\hbar\omega(M+\tfrac32):M\in\mathbb N\}$; for every $M\in\mathbb N$ the eigenspace $\ker(H_3-\hbar\omega(M+\frac32)I)$ has the orthonormal basis $\{\psi_N:N\in\mathbb N^{3},\ n_1+n_2+n_3=M\}$ and dimension $(M+1)(M+2)/2$; the ground energy is $\tfrac32\hbar\omega$;

(e) **Status.** Clauses (a)-(d) are conditional consequences of P1, P2, P4, P5, the adopted oscillator model and the cited mathematics. They concern the eigenvalue list, the eigenbasis, the excitation operators and the atomic outcome law of the model's assigned energy observable; they assert no measured spectral line, no numerical value of $m$, $\omega$ or $\hbar$, no apparatus realization, no selection rule and no transition rate. The identification of a laboratory resonance or spectral line with an eigenvalue difference of this model is a tested identification under the preparation and apparatus postulate P7 and is not a consequence of this theorem.

## Facts & Assumptions

**Given:** the adopted postulates P1, P2, P4, P5; the Axiom of Countable Choice and the Axiom of Choice; the oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]]; the Hermite data, the unitary $D$, the diagonal operator $A$, the eigenbasis $(\psi_n)$ and the energy operator $H_1$ of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]; the closed ladder and number operators of [[lem-nrqm-oscillator-closed-ladder-domains]] and their transports; a unit vector $f\in H_1$; a Borel set $B\subseteq\mathbb R$; a nonnegative integer $n$ and a nonnegative integer $M$.

[F1] **The model's assigned observables.** $(H_1,\mathrm J)$ is the model's assigned energy observable and $(Q,\mathrm m)$, $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ are its assigned position and momentum observables; the flow of the isolated model is $U(t)=\exp(-itH_1/\hbar)$, so $H_1$ is a self-adjoint operator with a spectral projection-valued measure $E_{H_1}$ and outcome law $\mu^{A}_{f}(B)=\|E_A(B)f\|^{2}$ for the assigned observable $(A,u_A)$ in the pure preparation of a unit vector $f$ ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c); [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b); [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a), (b)).

[F2] **The scaling theorem.** $D:L^{2}(\mathbb R,dy)\to L^{2}(\mathbb R,dx)$ is a bijective linear isometry with $Dg_n=\psi_n$; $(\psi_n)$ is a complete orthonormal family of $H_1$; $H_1=\frac{\hbar\omega}{2}DAD^{-1}$ is self-adjoint with
$$D(H_1)=\Bigl\{f:\sum_n\hbar^{2}\omega^{2}(n+\tfrac12)^{2}|\langle f,\psi_n\rangle|^{2}<\infty\Bigr\},\qquad H_1f=\sum_n\hbar\omega(n+\tfrac12)\langle f,\psi_n\rangle\psi_n,$$
spectrum $\sigma(H_1)=\{\hbar\omega(n+\frac12):n\in\mathbb N\}$, ground energy $\hbar\omega/2$, core the span of $(\psi_n)$ and pointwise differential identity $H_1F=-\frac{\hbar^{2}}{2m}F''+\frac{m\omega^{2}}{2}x^{2}F$ for $F$ in that span ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a), (b), (c)).

[F3] **The closed ladder operators.** For the complete orthonormal family $(g_n)$ with coefficients $c_n=\langle x,g_n\rangle$ one has $D(a)=\{x:\sum_nn|c_n|^{2}<\infty\}$, $D(a^\dagger)=\{x:\sum_n(n+1)|c_n|^{2}<\infty\}$, $D(N)=\{x:\sum_nn^{2}|c_n|^{2}<\infty\}$, $a$ and $a^\dagger$ are closed with $a^{*}=a^\dagger$ and $(a^\dagger)^{*}=a$, $D(aa^\dagger)=D(a^\dagger a)=D(N)$, $a^\dagger a=N$ and $aa^\dagger=N+I$ on $D(N)$, $N$ is self-adjoint with $Ng_n=ng_n$ and spectrum $\mathbb N$, and $ag_n=\sqrt n\,g_{n-1}$ for $n\ge1$, $ag_0=0$, $a^\dagger g_n=\sqrt{n+1}\,g_{n+1}$, $a^\dagger ag_n=ng_n$ ([[lem-nrqm-oscillator-closed-ladder-domains]] clauses (a), (b), (d), (e)).

[F4] **Eigenspaces of a diagonal operator.** For a complete orthonormal family $(e_n)$ and pairwise distinct real eigenvalues $\lambda_n$, the diagonal operator with this data and domain $\{x:\sum_n\lambda_n^{2}|\langle x,e_n\rangle|^{2}<\infty\}$ has $\ker(A-\lambda_nI)=\mathbb Ce_n$ for every $n$ ([[lem-nrqm-oscillator-diagonal-eigenspaces]] clauses (a), (b)).

[F5] **Atoms and support of a spectral law.** For a self-adjoint operator $A$ with spectral projection-valued measure $E_A$: $E_A(\{\lambda\})$ is the orthogonal projection onto $\ker(A-\lambda I)$, so for a unit vector $f$ the law satisfies $\mu^{A}_f(\{\lambda\})=\|E_A(\{\lambda\})f\|^{2}$; and $\mu^{A}_f(B)=\mu^{A}_f(B\cap\sigma(A))$ with $\mu^{A}_f(\sigma(A))=1$ for every Borel $B$, while the scalar law of a pure preparation is a probability measure and is countably additive ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a), (b); [[lem-nrqm-observables-spectral-support-and-outcome-law]] clauses (a), (b); [[pthm-nrqm-observables-born-outcome-law-properties]] clause (a)).

[F6] **The multidimensional theorem.** For the three-dimensional isotropic realization the energy operator $H_3$ of the model definition clause (d) is self-adjoint with the domain and core displayed in [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]] clause (c), and its spectrum is $\{\hbar\omega(M+\frac32):M\in\mathbb N\}$ with the eigenvalue $\hbar\omega(M+\frac32)$ having multiplicity $\binom{M+2}{2}=(M+1)(M+2)/2$ and eigenspace spanned by the orthonormal family $\{\psi_N:\sum_jn_j=M\}$ ([[thm-nrqm-oscillator-multidimensional-oscillator-completeness]] clauses (c), (d)).

[F7] **Transport along isometric bijections.** For complex Hilbert spaces $H,K$, a bijective linear isometry $U:H\to K$ and a self-adjoint $T$ on $H$, the operator $UTU^{-1}$ with domain $U D(T)$ is self-adjoint, has the same spectrum as $T$, and satisfies $\mu^{UTU^{-1}}_{Ux}(B)=\mu^{T}_x(B)$ for every unit $x\in H$ and Borel $B$ ([[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] clauses (a), (c), (d)).

## Proof

**Given:** the data of the Statement together with [F1]-[F6].

1.1 [The diagonal form of $H_1$] By [F2], $(\psi_n)$ is complete orthonormal, $H_1$ has domain $\{f:\sum_nE_n^{2}|\langle f,\psi_n\rangle|^{2}<\infty\}$ and acts by $H_1f=\sum_nE_n\langle f,\psi_n\rangle\psi_n$; since $E_n=\hbar\omega(n+\frac12)$ satisfies $n^{2}\le4(n+\frac12)^{2}$ and $(n+\frac12)^{2}\le2n^{2}+\frac12$ for every $n\in\mathbb N$, the domain condition is equivalent to $\sum_nn^{2}|\langle f,\psi_n\rangle|^{2}<\infty$, and the family and the real numbers $E_n$ are pairwise distinct nonnegative numbers with $E_0=\hbar\omega/2$ and $E_{n+1}-E_n=\hbar\omega$. Thus $H_1$ is the self-adjoint diagonal operator of [F4] for the family $(\psi_n)$ and the eigenvalues $E_n$, and the span of $(\psi_n)$ is a core. [given, F2, F4, algebra]

1.2 [Transported ladder and number operators] The map $D$ is a bijective linear isometry by [F2], and the operators $N_\psi=DND^{-1}$, $a_\psi=DaD^{-1}$, $a^\dagger_\psi=Da^\dagger D^{-1}$ have the transported domains $D(N_\psi)=D\,D(N)$, $D(a_\psi)=D\,D(a)$, $D(a^\dagger_\psi)=D\,D(a^\dagger)$; because $\psi_n=Dg_n$ and $D$ preserves the inner product, the coefficients satisfy $\langle Dx,\psi_n\rangle=\langle x,g_n\rangle$, so by [F3] $D(N_\psi)=\{f:\sum_nn^{2}|\langle f,\psi_n\rangle|^{2}<\infty\}$ and the identities of [F3] transport: $D(a_\psi a^\dagger_\psi)=D(a^\dagger_\psi a_\psi)=D(N_\psi)$, on which $a^\dagger_\psi a_\psi=N_\psi$ and $a_\psi a^\dagger_\psi=N_\psi+I$, and $N_\psi\psi_n=n\psi_n$, $a_\psi\psi_n=\sqrt n\,\psi_{n-1}$ ($n\ge1$) with $a_\psi\psi_0=0$, $a^\dagger_\psi\psi_n=\sqrt{n+1}\,\psi_{n+1}$. For the non-self-adjoint pair, closedness and the adjoint relations transport by the direct pairing computation: for $x\in D(a_\psi)$ and $y\in D(a^\dagger_\psi)$, $\langle a_\psi x,y\rangle=\langle aD^{-1}x,D^{-1}y\rangle=\langle D^{-1}x,a^\dagger D^{-1}y\rangle=\langle x,a^\dagger_\psi y\rangle$, so $a_\psi\subseteq(a^\dagger_\psi)^{*}$ and $a^\dagger_\psi\subseteq a_\psi^{*}$; and if $x_k\to x$ with $a_\psi x_k\to y$, then $D^{-1}x_k\to D^{-1}x$ and $aD^{-1}x_k=D^{-1}a_\psi x_k\to D^{-1}y$, so closedness of $a$ gives $D^{-1}x\in D(a)$ and $aD^{-1}x=D^{-1}y$, that is $x\in D(a_\psi)$ and $a_\psi x=y$: $a_\psi$ is closed, and the same argument with $a^\dagger$ makes $a^\dagger_\psi$ closed and forces equalities in the two inclusions. By [F7] applied with $U=D$ and $T=N$, the operator $N_\psi$ is self-adjoint with $\sigma(N_\psi)=\sigma(N)=\mathbb N$ and $\mu^{N_\psi}_{Dx}(B)=\mu^{N}_x(B)$ for every unit $x$ and Borel $B$. [given, F2, F3, F7]

1.3 [The three-dimensional realization] By [F6] the spectrum of $H_3$ is $\{\hbar\omega(M+\frac32)\}=\{E^{(3)}_M:M\in\mathbb N\}$, the eigenspace at $E^{(3)}_M$ has the orthonormal basis $\{\psi_N:n_1+n_2+n_3=M\}$ and dimension $(M+1)(M+2)/2$, and the least eigenvalue is $\frac32\hbar\omega$; this is clause (d), whose self-adjointness, domain and core assertions are those of [F6]. [given, F6]

2.1 [Spectrum and eigenspaces of $H_1$] By step 1.1 the operator $H_1$ is the diagonal operator of [F4] with the pairwise distinct eigenvalues $E_n$, and by [F2] its spectrum is $\{E_n:n\in\mathbb N\}$, a closed discrete set whose least element is $E_0$ and whose consecutive gaps are $\hbar\omega$; [F4] gives $\ker(H_1-E_nI)=\mathbb C\psi_n$ for every $n$, and [F2] gives that $(\psi_n)$ is a complete orthonormal family and a core. This is clause (a). [step 1.1, F2, F4]

2.2 [Number-operator identity] By steps 1.1 and 1.2, $D(H_1)=\{f:\sum_nn^{2}|\langle f,\psi_n\rangle|^{2}<\infty\}=D(N_\psi)$ and both operators act diagonally on the family, with $H_1$ having eigenvalues $E_n=\hbar\omega(n+\frac12)$ and $N_\psi$ having eigenvalues $n$; hence $H_1=\hbar\omega(N_\psi+\frac12I)$ with common domain $D(H_1)=D(N_\psi)$. By step 1.2 and [F4] the eigenspaces of $N_\psi$ are $\ker(N_\psi-nI)=\mathbb C\psi_n$, so its eigenvectors are exactly the nonzero multiples of the $\psi_n$, and its spectrum is $\mathbb N$ by [F7]. For the preparation of the unit eigenvector $\psi_n$, [F5] and the eigenspace identity give $\mu^{N_\psi}_{\psi_n}(\{n\})=\|E_{N_\psi}(\{n\})\psi_n\|^{2}=\|\psi_n\|^{2}=1$; since the scalar law of a pure preparation is a probability measure [F5], the law is the point mass $\delta_n$. Together with the ladder actions of step 1.2 this is clause (b). [step 1.1, step 1.2, F4, F5, F7]

3.1 [Atoms of the energy law] By [F1], $(H_1,\mathrm J)$ is an assigned sharp observable of the model whose outcome law in the pure preparation of a unit vector $f$ is $\mu^{H_1}_f(B)=\|E_{H_1}(B)f\|^{2}$. For every $n$, [F4] and step 2.1 give $\ker(H_1-E_nI)=\mathbb C\psi_n$, so the orthogonal projection $E_{H_1}(\{E_n\})$ is the projection onto $\mathbb C\psi_n$ by the first clause of [F5]; for a unit $f$ this gives $\mu^{H_1}_f(\{E_n\})=\|E_{H_1}(\{E_n\})f\|^{2}=|\langle f,\psi_n\rangle|^{2}$. [step 2.1, F1, F5]

4.1 [The full law and its support] Let $B\subseteq\mathbb R$ be Borel. By the support clause of [F5], $\mu^{H_1}_f(B)=\mu^{H_1}_f(B\cap\sigma(H_1))$ and $\mu^{H_1}_f(\sigma(H_1))=1$; by step 2.1, $\sigma(H_1)=\{E_n:n\in\mathbb N\}$, so $B\cap\sigma(H_1)$ is the countable union of the disjoint singletons $\{E_n\}$ with $E_n\in B$, and countable additivity of the probability measure $\mu^{H_1}_f$ gives $\mu^{H_1}_f(B)=\sum_{n:E_n\in B}\mu^{H_1}_f(\{E_n\})=\sum_{n:E_n\in B}|\langle f,\psi_n\rangle|^{2}$ by step 3.1. In particular the law has no mass on Borel sets disjoint from $\{E_n\}$, and $E_n$ is an atom of the law of $f$ exactly when $\langle f,\psi_n\rangle\ne0$. This is clause (c). [step 2.1, step 3.1, F5]

5.1 [Status] Clauses (a), (b) and (c) were obtained from the postulates, the adopted model, the scaling theorem, the closed ladder operators and the general spectral law facts; clause (d) from the multidimensional theorem. No measured spectral line, no numerical value of $m$, $\omega$ or $\hbar$, no apparatus model, no selection rule and no transition rate entered, and the identification of a laboratory resonance with an eigenvalue difference is a tested identification under P7, not a consequence of the argument. This is clause (e). [step 1.3, step 2.1, step 2.2, step 4.1] ∎
