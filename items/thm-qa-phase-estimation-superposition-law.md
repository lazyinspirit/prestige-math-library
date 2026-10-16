---
id: thm-qa-phase-estimation-superposition-law
kind: theorem
title: Phase estimation on a superposition of eigenspaces
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - def-qc-controlled-unitary-access
  - def-qc-dirac-notation-conversion
  - thm-qc-dirac-notation-coordinate-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
  - lem-qc-finite-ancilla-amplification-is-block-map
  - def-qc-instrument-and-conditional-state
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - def-qa-cyclic-quantum-fourier-transform
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qc-density-operator
  - def-qc-partial-trace
  - def-qc-povm-and-outcome-law
  - def-qc-completely-positive-map
  - def-non-negative-and-positive-operator
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-kernel-and-fibres-of-complex-exponential
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - def-orthogonal-projection
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - prop-trace-is-linear
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-finite-dimensional-isometry-characterisations
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-self-adjoint-and-normal-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
justified_by: []
axiom_use: "None; the proof uses finite-dimensional spectral decomposition and finite sums."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Statement

Let $U$ be a unitary on a nonzero finite-dimensional complex inner-product space $H$. Let $\Theta\subset[0,1)$ be its finite set of distinct eigenphases, and let $\Pi_\theta$ denote the orthogonal projection onto the full eigenspace for eigenvalue $\exp(2\pi i\theta)$; degeneracies are grouped in one projection. For $Q=2^m$, $m\ge1$, define
$$a_y(\theta):=Q^{-1}\sum_{j=0}^{Q-1}\exp(2\pi ij(\theta-y/Q)),\qquad K_y:=\sum_{\theta\in\Theta}a_y(\theta)\Pi_\theta.$$
For a unit input $\psi=\sum_{\theta\in\Theta}\Pi_\theta\psi$, the unnormalized branch vector is $K_y\psi$ and
$$p_y=\|K_y\psi\|^2=\sum_{\theta\in\Theta}|a_y(\theta)|^2\|\Pi_\theta\psi\|^2.$$
If $p_y>0$, the conditional vector is $K_y\psi/\sqrt{p_y}$; if $p_y=0$, no conditional vector is assigned. The outcome law is an eigenspace-weighted mixture, while the conditional branch can retain coherent cross terms between distinct eigenspaces.

After discarding the phase register, the induced system instrument has branch maps $\mathcal I_y(X)=K_yXK_y^\dagger$ for operators $X$ on $H$. More generally, for a density operator $\rho$ on $H\otimes R$, where $R$ is a nonzero finite-dimensional reference space, the unnormalized reference-preserving branch after measuring and discarding the phase register is
$$\mathcal I_y^{(R)}(\rho)=(K_y\otimes I_R)\rho(K_y^\dagger\otimes I_R).$$
Its probability is $\operatorname{tr}\mathcal I_y^{(R)}(\rho)$, and the conditional state is $\mathcal I_y^{(R)}(\rho)/\operatorname{tr}\mathcal I_y^{(R)}(\rho)$ exactly when that probability is positive. With $w_\theta=\operatorname{tr}((\Pi_\theta\otimes I_R)\rho)$, the reference outcome law is $p_y=\sum_{\theta\in\Theta}|a_y(\theta)|^2w_\theta$, where $w_\theta\ge0$ and $\sum_\theta w_\theta=1$. If every eigenphase is on the $Q$-grid, then $K_y=\Pi_{y/Q}$ when $y/Q\in\Theta$ and $K_y=0$ otherwise, so the instrument branch is $X\mapsto K_yXK_y^\dagger$. If any eigenphase is off-grid, its nonzero coefficient has modulus less than one in every $K_y$, so $K_y^\dagger K_y$ is not a projection and the induced instrument is not the spectral projection instrument.

## Facts & Assumptions

**Given:** The finite-dimensional unitary $U$, its spectral subspaces, the QPE circuit and access promise, a unit vector $\psi$, and optionally a density operator $\rho$ on $H\otimes R$.

[F1] A unitary on a finite-dimensional inner-product space is normal: the isometry characterization gives $U^*U=UU^*=I$ ([[thm-finite-dimensional-isometry-characterisations]]). The complex spectral theorem therefore gives an orthogonal decomposition into eigenspaces, with mutually orthogonal spectral projections summing to the identity ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

[F2] A unitary is an isometry; if $Uv=\lambda v$ with $v\ne0$, norm preservation gives $|\lambda|=1$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[thm-finite-dimensional-isometry-characterisations]]).

[F3] Every unit scalar is $\exp(2\pi i\theta)$ for a unique $\theta\in[0,1)$; moreover $|\exp(it)|=1$ for every real $t$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F13] The algorithm's final readout branch is the Lüders map $Z\mapsto P_y ZP_y$ for $P_y=|y\rangle\langle y|\otimes I_H$ ([[alg-qa-quantum-phase-estimation]]).

[F14] Chronological layers $L_1,\ldots,L_d$ denote $U_{L_d}\cdots U_{L_1}$, and each local gate is embedded on its declared wires ([[def-qc-circuit-denotational-semantics]]). For linear maps $A,B$, the operator $A\otimes B$ is the linear map with $(A\otimes B)(u\otimes v)=Au\otimes Bv$ ([[def-qc-tensor-map]]).

[F15] Tensor-map adjoints satisfy $(A\otimes B)^\dagger=A^\dagger\otimes B^\dagger$, so $(K_y\otimes I_S)^\dagger=K_y^\dagger\otimes I_S$ for every finite reference factor $S$ ([[thm-qc-tensor-map-composition-and-adjoint]]).

[F16] If $X=[X_{ij}]$ in the ancilla basis, the identity extension of $\Phi(X)=K_yXK_y^\dagger$ has blocks $K_yX_{ij}K_y^\dagger$ by the block-amplification lemma. The sandwich $(K_y\otimes I_S)X(K_y^\dagger\otimes I_S)$ has those same blocks because tensor maps act factorwise ([[lem-qc-finite-ancilla-amplification-is-block-map]], [[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]]).

[F4] The inverse positive-sign QFT contributes matrix coefficient $Q^{-1/2}\exp(-2\pi ixy/Q)$, and the eigenphase convention contributes $\exp(2\pi ij\theta)$ on the $j$-th controlled-power branch ([[def-qa-cyclic-quantum-fourier-transform]], [[alg-qa-quantum-phase-estimation]], [[thm-qa-exact-binary-qft-circuit-correct]]).

[F5] The finite outcome kernel satisfies $\sum_y|a_y(\theta)|^2=1$ for every phase $\theta$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F6] Orthogonal projections satisfy $\Pi_\theta^*=\Pi_\theta$, $\Pi_\theta\Pi_\phi=0$ for $\theta\ne\phi$, and $\sum_\theta\Pi_\theta=I_H$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-orthogonal-projection]]).

[F7] A completely positive map remains positive under every finite identity extension; a finite instrument has completely positive branches and its sum preserves trace ([[def-qc-completely-positive-map]], [[def-qc-instrument-and-conditional-state]]).

[F8] Trace is linear and cyclic on finite-dimensional operators ([[prop-trace-is-linear]], [[thm-trace-of-ab-equals-trace-of-ba]], [[def-trace-of-an-endomorphism]]).

[F9] A density operator is nonnegative with trace one, and partial trace over a finite register discards that factor while retaining the reference system ([[def-qc-density-operator]], [[def-qc-partial-trace]]).

[F10] For $z\ne1$, the finite geometric amplitude is $(1-z^Q)/(1-z)$; $\exp(w)=1$ exactly for $w\in2\pi i\mathbb Z$ ([[lem-qa-phase-estimation-geometric-sum]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F11] The phase-register computational-basis readout is a projective measurement with effects $P_y=|y\rangle\langle y|\otimes I_H$: they are self-adjoint idempotents, mutually orthogonal and complete ([[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[def-qc-projective-measurement]]). For every vector $v$ in the joint register, $\langle P_yv,v\rangle=\langle P_y^2v,v\rangle=\langle P_yv,P_yv\rangle\ge0$, so each $P_y$ is nonnegative ([[def-non-negative-and-positive-operator]]). Together with completeness, this makes $(P_y)_y$ a finite POVM ([[def-qc-povm-and-outcome-law]]).

[F12] The spectral projections tensored with $I_R$ form a finite projective measurement, and their traces against a density operator are nonnegative weights summing to one ([[def-qc-tensor-map]], [[thm-qc-projective-measurement-outcome-law]], [[def-qc-projective-measurement]], [[def-qc-density-operator]]).

## Proof

1.1 By [F1], write $H=\bigoplus_{\theta\in\Theta}E_\theta$ orthogonally with projections $\Pi_\theta$. By [F2], every eigenvalue has modulus one, and [F3] supplies its unique phase $\theta\in[0,1)$. Therefore $\sum_\theta\Pi_\theta=I_H$ and $\psi=\sum_\theta\Pi_\theta\psi$. [given, F1, F2, F3]

2.1 On a phase-register basis branch $|j\rangle$, the controlled powers act as $U^j$. On each eigenspace, $U^j\Pi_\theta=\exp(2\pi ij\theta)\Pi_\theta$. Applying the inverse-QFT matrix in [F4], the coefficient of $|y\rangle$ on $E_\theta$ is $a_y(\theta)$; hence the post-readout Kraus operator on $H$ is $K_y=\sum_\theta a_y(\theta)\Pi_\theta$. Interpreting the chronological gate list as this operator uses [F14]. [F4, F14, step 1.1, algebra]

2.2 Orthogonality in [F6] gives $K_y^\dagger K_y=\sum_\theta|a_y(\theta)|^2\Pi_\theta$. Summing over $y$ and using [F5] yields $\sum_yK_y^\dagger K_y=\sum_\theta\Pi_\theta=I_H$. Consequently, for a unit vector $\psi$, $\|K_y\psi\|^2=\sum_\theta|a_y(\theta)|^2\|\Pi_\theta\psi\|^2$; all cross terms vanish because the eigenspaces are orthogonal. The weights $\|\Pi_\theta\psi\|^2$ are nonnegative and sum to one, so this is the eigenspace-weighted mixture law. [F5, F6, step 1.1, algebra]

2.3 If every $\theta\in\Theta$ has $Q\theta=t_\theta\in\{0,\ldots,Q-1\}$, the finite geometric sum in [F10] and cyclic-character orthogonality give $a_y(\theta)=1$ for $y=t_\theta$ and $0$ otherwise. Distinct phases have distinct labels, so $K_y$ is exactly the spectral projection for the eigenspace with label $y$, or zero if there is none. [F4, F10, step 1.1]

3.1 By linearity of the circuit, its pre-readout map from $H$ to the phase register tensored with $H$ is $V:v\mapsto\sum_z|z\rangle\otimes K_zv$, with the $K_z$ from step 2.1. For any operator $X$ on $H\otimes R$, the joint output is $(V\otimes I_R)X(V^\dagger\otimes I_R)$, using [F15] for the tensor adjoint. Applying the readout branch in [F13] gives $|y\rangle\langle y|\otimes (K_y\otimes I_R)X(K_y^\dagger\otimes I_R)$. Reorder the phase factor to the last position using [F11], then take its partial trace by the coordinate formula [F9]; the sole nonzero diagonal phase coordinate is $y$, so the result is exactly $(K_y\otimes I_R)X(K_y^\dagger\otimes I_R)$. In particular this holds for the density operator $\rho$ in the statement. To prove complete positivity, take any finite reference factor $S$ and any nonnegative operator $X$ on $H\otimes S$. Its identity extension is $X\mapsto (K_y\otimes I_S)X(K_y^\dagger\otimes I_S)$ by [F16]. Writing $A=K_y\otimes I_S$, its quadratic form is $\langle AXA^\dagger v,v\rangle=\langle XA^\dagger v,A^\dagger v\rangle\ge0$, so every finite extension is positive and each branch is completely positive by [F7]. [F7, F9, F11, F13, F14, F15, F16, step 2.1, construct, algebra]

3.2 If some phase $\theta$ is off-grid, then for every $y$, $z=\exp(2\pi i(\theta-y/Q))\ne1$ and $z^Q=\exp(2\pi iQ\theta)\ne1$ by [F10]. The geometric formula gives $a_y(\theta)\ne0$ for every $y$. Since $Q\ge2$ and [F5] says the $Q$ squared moduli sum to one, each is strictly less than one. Thus $K_y$ acts on this eigenspace by a scalar of modulus strictly between zero and one, so $K_y^\dagger K_y$ is not a projection; the induced system instrument is not the spectral projection instrument. [F5, F10, given, step 2.1, algebra]

4.1 For any finite-dimensional reference $R$ (including $R=\mathbb C$) and any operator $X$ on $H\otimes R$, [F8] and step 2.2 give $\sum_y\operatorname{tr}\mathcal I_y^{(R)}(X)=\operatorname{tr}(((\sum_yK_y^\dagger K_y)\otimes I_R)X)=\operatorname{tr}X$. Taking $R=\mathbb C$ proves that the system maps form an instrument on $H$. For a density $\rho$ with arbitrary reference $R$, cyclicity and linearity also give $p_y=\operatorname{tr}\mathcal I_y^{(R)}(\rho)=\sum_\theta|a_y(\theta)|^2\operatorname{tr}((\Pi_\theta\otimes I_R)\rho)$. By [F12], the weights $\operatorname{tr}((\Pi_\theta\otimes I_R)\rho)$ are nonnegative and sum to one. Therefore the reference outcome law is the claimed mixture. When $p_y>0$, $\mathcal I_y^{(R)}(\rho)/p_y$ is nonnegative of trace one, and when $p_y=0$ no conditional density is defined. For a pure input the conditional vector is $K_y\psi/\sqrt{p_y}$. [F7, F8, F9, F12, F14, step 2.2, step 3.1]

5.1 To witness coherence for a permitted $m\ge1$, let $Q=2^m$ and choose the witness space $H_{\rm wit}=\mathbb C^2$ with orthonormal basis $u_0,u_1$. Define $U$ on this entire space by $Uu_0=u_0$ and $Uu_1=\exp(\pi i/Q)u_1$, extending linearly. Each basis coefficient is multiplied by a unit scalar by [F3], so $U$ preserves the norm and is unitary by [[thm-finite-dimensional-isometry-characterisations]]. Set $\psi=(u_0+u_1)/\sqrt2$, which is unit. At output $y=0$, $a_0(0)=1$, while [F10] and [F3] give $a_0(1/(2Q))=Q^{-1}\sum_{j<Q}\exp(\pi ij/Q)=2/[Q(1-\exp(\pi i/Q))]\ne0$: [F10] makes the denominator nonzero since $Q(1/(2Q))=1/2\notin Q\mathbb Z$, and [F3] gives $\exp(\pi i)=-1$ for the numerator. Thus $K_0\psi=(u_0+a_0(1/(2Q))u_1)/\sqrt2$, and its rank-one operator has the nonzero cross terms $a_0(1/(2Q))|u_1\rangle\langle u_0|/2$ and $\overline{a_0(1/(2Q))}|u_0\rangle\langle u_1|/2$. The branch probability is positive because its $u_0$ coefficient is nonzero, so conditioning preserves these cross terms. [F3, F10, step 2.1, construct, algebra] ∎
