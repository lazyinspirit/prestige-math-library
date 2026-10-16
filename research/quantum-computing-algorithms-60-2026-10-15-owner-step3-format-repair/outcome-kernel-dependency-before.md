---
id: lem-qa-phase-estimation-outcome-kernel
kind: lemma
title: Phase-estimation finite outcome law
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - def-qc-dirac-notation-conversion
  - thm-qc-dirac-notation-coordinate-identity
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-projective-measurement
  - def-qc-pure-state-and-ray
  - thm-qc-ray-projector-well-defined-and-bijective
  - thm-qc-projective-measurement-outcome-law
  - thm-qa-exact-binary-qft-circuit-correct
  - lem-qa-phase-estimation-geometric-sum
  - def-qc-circuit-denotational-semantics
  - def-qa-cyclic-quantum-fourier-transform
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-povm-and-outcome-law
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-induction-principle
  - thm-kernel-and-fibres-of-complex-exponential
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - thm-trace-of-ab-equals-trace-of-ba
  - def-finite-sum-in-a-commutative-monoid
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
axiom_use: "None; the normalization check is a finite sum and the measurement law is finite-dimensional."
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

Let $m\ge1$, $Q=2^m$, and let the input be an eigenvector with
$U\psi=\exp(2\pi i\theta)\psi$, where $\theta\in[0,1)$.
For each $y\in\{0,\ldots,Q-1\}$, the probability of measuring $y$ in the algorithm of [[alg-qa-quantum-phase-estimation]] is
$$P_\theta(y)=Q^{-2}\left|\sum_{j=0}^{Q-1}\exp\!\left(2\pi i j(\theta-y/Q)\right)\right|^2.$$
Thus the finite outcome kernel is defined at every phase, including $Q\theta\in\mathbb Z$; no quotient with a zero denominator is needed in this formula.

## Facts & Assumptions

**Given:** The eigenphase input and access model of [[def-qa-eigenphase-estimation-model]], the algorithm of [[alg-qa-quantum-phase-estimation]], and $m\ge1$.

[F1] The phase convention is $U\psi=\exp(2\pi i\theta)\psi$, and the phase-register basis is big-endian with the wire of weight $2^j$ at position $m-1-j$ ([[def-qa-eigenphase-estimation-model]], [[def-qc-ordered-bitstring-encoding]]).

[F2] The algorithm prepares $Q^{-1/2}\sum_x|x\rangle\otimes\psi$, applies controlled $U^{2^j}$ on the wire of weight $2^j$, then applies the inverse of the positive-sign binary QFT and measures the phase register ([[alg-qa-quantum-phase-estimation]]).

[F9] The denotation of chronological layers $L_1,\ldots,L_d$ is $U_{L_d}\cdots U_{L_1}$, with each gate embedded on its declared wires ([[def-qc-circuit-denotational-semantics]]).

[F3] The positive-sign cyclic QFT has matrix action $|x\rangle\mapsto Q^{-1/2}\sum_y e^{2\pi ixy/Q}|y\rangle$; the exact binary circuit implements it in the declared order ([[def-qa-cyclic-quantum-fourier-transform]], [[thm-qa-exact-binary-qft-circuit-correct]]).

[F4] On the phase register, $P_y=|y\rangle\langle y|\otimes I_H$ is one member of the finite orthogonal resolution of the identity; the outcome weight of a density operator $\rho$ is $\operatorname{tr}(\rho P_y)$ ([[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[def-qc-projective-measurement]], [[thm-qc-projective-measurement-outcome-law]], [[def-qc-povm-and-outcome-law]]).

[F5] The Dirac convention is linear in the first argument of the root inner product, so $|v\rangle\langle w|$ acts by $z\mapsto\langle z,w\rangle_{\rm root}v$, has coordinate matrix $[v][w]^\dagger$, and has trace $\langle v,w\rangle_{\rm root}$ ([[def-qc-dirac-notation-conversion]], [[thm-qc-dirac-notation-coordinate-identity]], [[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]]). A normalized nonzero vector defines the density operator $|v\rangle\langle v|$ by [[thm-qc-ray-projector-well-defined-and-bijective]].

[F6] The finite cyclic character sum is $Q$ at frequency $0\bmod Q$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F7] Complex conjugation distributes over finite sums and $|z|^2=z\overline z$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F8] Trace is cyclic for compatible finite-dimensional maps: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

[F10] For real $t$, $\overline{\exp(it)}=\exp(-it)$. Indeed, $|\exp(it)|=1$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], while the addition law gives $\exp(it)\exp(-it)=\exp(0)=1$ ([[thm-complex-exponential-addition-and-real-extension]], [[def-complex-exponential]]); since $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]), conjugation gives the same inverse, which is unique in the complex field ([[thm-complex-numbers-form-a-field]]).

## Proof

1.1 Before the controlled powers, the state is $Q^{-1/2}\sum_{x=0}^{Q-1}|x\rangle\otimes\psi$ by [F2]. Write $x=\sum_j c_j2^j$, where $c_j$ is the bit at wire $q_{m-1-j}$ by [F1]. The controlled operation on that wire applies $U^{2^j}$ exactly when $c_j=1$; multiplying the eigenvalues gives $\prod_j\exp(2\pi i\theta c_j2^j)=\exp(2\pi i\theta x)$. Hence the state after the controlled-power stage is $Q^{-1/2}\sum_x\exp(2\pi i\theta x)|x\rangle\otimes\psi$. Reading this gate sequence as an operator on the ordered register uses [F9]. [F1, F2, F9, algebra]

2.1 The inverse QFT matrix coefficient from input $x$ to output $y$ is $Q^{-1/2}\exp(-2\pi ixy/Q)$, by [F3] and the adjoint convention. Applying it to step 1.1 gives $\chi=\sum_{y=0}^{Q-1}a_y|y\rangle\otimes\psi$, where $a_y=Q^{-1}\sum_{x=0}^{Q-1}\exp(2\pi ix(\theta-y/Q))$. The sign is positive in the eigenphase and negative in the inverse-QFT coefficient, yielding the displayed difference $\theta-y/Q$. The operator ordering is the one in [F9]. [F2, F3, F9, step 1.1, algebra]

3.1 The vector $\chi$ is normalized. Expand the finite squared moduli using [F7]. For every real $t$, [F10] gives $\overline{\exp(it)}=\exp(-it)$, and the exponential addition law combines each conjugate pair of phases; interchanging the finite sums then gives $\sum_y|a_y|^2=Q^{-2}\sum_{x,x'}\exp(2\pi i(x-x')\theta)\sum_y\exp(-2\pi i(x-x')y/Q)$. By [F6], the inner sum is $Q$ when $x=x'$ and $0$ otherwise, because $0\le x,x'<Q$; therefore $\sum_y|a_y|^2=Q^{-2}Q\cdot Q=1$. Since $\|\psi\|=1$ and the $|y\rangle$ are orthonormal, $\|\chi\|=1$. [F6, F7, F10, step 2.1, algebra]

3.2 The ray-projector theorem [F5] makes $\rho=|\chi\rangle\langle\chi|$ a density operator. The phase-register projective outcome has projector $P_y$ from [F4], so it extracts $a_y|y\rangle\otimes\psi$. By [F5] and [F8], $\operatorname{tr}(\rho P_y)=\operatorname{tr}(P_y\rho)=\operatorname{tr}(|P_y\chi\rangle\langle\chi|)=\langle P_y\chi,\chi\rangle_{\rm root}=\|P_y\chi\|^2=|a_y|^2$, where the penultimate equality uses $P_y=P_y^*=P_y^2$. The outcome law in [F4] therefore gives this probability to the classical label $y$. Substituting the value of $a_y$ from step 2.1 gives exactly the displayed $P_\theta(y)$. [F4, F5, F8, step 2.1]

4.1 The finite sum in the displayed law is defined for every $y,\theta$, including when $Q\theta$ is an integer. For its geometric-sum specialization, the denominator is zero exactly when $z=\exp(2\pi i(\theta-y/Q))=1$, equivalently $Q\theta-y\in Q\mathbb Z$; in every other case [[lem-qa-phase-estimation-geometric-sum]] gives the nonzero-denominator quotient. Thus the stated squared-sum law handles all phases without an undefined quotient. [F1, F9, step 2.1, algebra] ∎
