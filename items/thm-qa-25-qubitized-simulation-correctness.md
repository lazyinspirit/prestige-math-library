---
id: thm-qa-25-qubitized-simulation-correctness
kind: theorem
title: Qubitized simulation correctness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-25-qubitized-hamiltonian-simulation
  - lem-qa-25-jacobi-anger-truncation
  - thm-qa-23-qsp-synthesis-correctness
  - thm-qa-24-qsvt-singular-space-action
  - lem-qa-24-qsvt-robustness-amplitude-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-qc-reflection-unitary-involution
  - lem-qa-25-isometry-error-implies-trace-distance
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qa-25-qubitization-access-model
  - lem-qa-21-robust-one-step-oaa-isometry
  - cor-triangle-inequality-for-inner-product-norm
proof_strategy: direct
axiom_use: "None; the proof uses finite-dimensional spectral and operator-norm arguments."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Theorem 58 and proof"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.3–29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Guang Hao Low and Isaac L. Chuang, Hamiltonian Simulation by Qubitization"
      url: "https://arxiv.org/pdf/1610.06546"
---

## Statement

For the exact access model of [[def-qa-25-qubitization-access-model]], or its bounded-block-error variant satisfying the post-degree budget in [[alg-qa-25-qubitized-hamiltonian-simulation]], rational $t$, and $0<\epsilon\le1$, a successful execution of [[alg-qa-25-qubitized-hamiltonian-simulation]] returns a unitary dilation $V_{\rm impl}$ satisfying
$$\|V_{\rm impl}J_{\rm clean}-J_{\rm out}e^{-itH}\|_{\rm op}\le\epsilon$$
on the clean-input isometry $J_{\rm clean}$, where $J_{\rm out}$ appends every work register in zero. Output work registers are approximate; no full-space error on arbitrary dirty work inputs or exact cleanup is asserted. For $t=0$, the declared identity branch is exact. For every reference system, tracing out work gives the corresponding system-output trace-distance bound at most $\epsilon$.

## Facts & Assumptions

**Given:** A finite Hermitian $H$ with $\|H\|_{\rm op}\le\alpha$, either the exact or budgeted bounded-error normalized block encoding, and a successful certified OP4 execution.

[F1] [[alg-qa-25-qubitized-hamiltonian-simulation]]: OP4 gives combined scalar error at most $\rho=\epsilon^2/10000$, sets each real phase-synthesis tolerance to $\delta_{\rm qsp}=\rho/64$, requires the bounded-block mode to satisfy $\eta_{\rm OAA}=3\rho+2\delta_{\rm qsp}+8d\sqrt{\epsilon_{\rm BE}}\le(3\epsilon/128)^2$, and allocates the remaining post-amplification primitive-implementation error at most $\epsilon/64$.

[F2] [[lem-qa-25-jacobi-anger-truncation]]: the factorial-tail polynomial and its certified coefficient rounding give the stated scalar error on $[-1,1]$.

[F3] [[thm-qa-23-qsp-synthesis-correctness]]: on a successful numerical phase-synthesis call, the exact phase-list polynomial error plus the sum of its implemented phase-slot errors is at most $\delta_{\rm qsp}$.

[F4] [[thm-qa-24-qsvt-singular-space-action]]: the alternating QSVT sequence has the stated polynomial compressed block on each singular space, including endpoints and null spaces.

[F6] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_{\rm op}\le\|S\|_{\rm op}\|T\|_{\rm op}$.

[F7] [[lem-qa-25-isometry-error-implies-trace-distance]]: clean-input isometry error bounds the reference-system trace distance after work is traced out.

[F8] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite Hermitian $H$ has an orthonormal eigenbasis.

[F9] [[def-qa-25-qubitization-access-model]] and [[alg-qa-25-qubitized-hamiltonian-simulation]]: the exact and bounded-error modes both satisfy $\|H\|_{\rm op}\le\alpha$.

[F10] [[lem-qa-21-robust-one-step-oaa-isometry]]: if $W$ has clean block $M/2$ and $\|M-V\|_{\rm op}\le\eta\le1/100$ for a unitary $V$, the phase-corrected OAA circuit has clean-input isometry error at most $10\sqrt\eta$, including workspace leakage.

[F11] [[cor-triangle-inequality-for-inner-product-norm]]: the vector triangle inequality induces the operator-norm triangle inequality used in spectral and circuit-product error sums.

[F12] [[lem-qa-24-qsvt-robustness-amplitude-bound]]: for any fixed exact degree-$d$ QSVT phase sequence, changing the encoded contraction by $\epsilon_{\rm BE}$ changes its singular-value-transform block by at most $4d\sqrt{\epsilon_{\rm BE}}$.

## Proof

**Given:** A successful output of the simulator in Facts & Assumptions; when $t\ne0$, all OP4 certificates succeed. Put $V=e^{-itH}$ and $\rho=\epsilon^2/10000$.

1.1 If $t=0$, [F1] returns the identity circuit with no signal query, and $e^{-itH}=I$; hence its clean-input isometry error is zero. If $t\ne0$, continue with the certified OP4 output. [F1, F8, algebra]

1.2 On an eigenvector of $H$ with eigenvalue $\lambda$, $H/\alpha$ has eigenvalue $x=\lambda/\alpha\in[-1,1]$, by [F8] and [F9]. Put $Q=E-iO$ and $B=1+2\rho$. The OP4 certificate gives $\|Q-f_\tau\|_{[-1,1]}\le\rho$ by [F1]–[F2], and $|f_\tau(x)|=1$. Since $M=Q/B$, $|M(x)-f_\tau(x)|\le |Q(x)-f_\tau(x)|/B +(B-1)|f_\tau(x)|/B \le 3\rho/(1+2\rho)<3\rho.$ In the orthonormal eigenbasis, this error is diagonal; for any vector with coordinates $c_j$, its squared output norm is the sum of $|c_j|^2$ times the squared scalar errors. Thus the uniform scalar bound gives $\|M(H/\alpha)-e^{-itH}\|_{\rm op}<3\rho$. For each real QSVT extraction, [F3] bounds the exact phase-list polynomial mismatch plus the implemented phase-slot errors by $\delta_{\rm qsp}=\rho/64$ uniformly on $[-1,1]$. For the bounded mode, apply [F12] to the exact $\Phi$ and $-\Phi$ phase sequences on the supplied block and on the target block; each branch changes by at most $4d\sqrt{\epsilon_{\rm BE}}$, so their average has the same block-perturbation bound. The coefficient-qubit average therefore gives a complete block $M_{\rm ph}/2$ with
$$\|M_{\rm ph}-M(H/\alpha)\|_{\rm op}\le2\delta_{\rm qsp}+8d\sqrt{\epsilon_{\rm BE}}.$$
For even $p_E$, $p_E(\sigma)=p_E(-\sigma)$; for odd $p_O$, the singular vector of a negative eigenvalue has left vector $u=-v$, so $p_O(\sigma)|u\rangle\langle v|=-p_O(\sigma)|v\rangle\langle v|=p_O(-\sigma)|v\rangle\langle v|$, and $p_O(0)=0$. Thus these transforms are the ordinary polynomial blocks on $H/\alpha$. The certified error is consequently
$$\|M_{\rm ph}-e^{-itH}\|_{\rm op}<3\rho+2\delta_{\rm qsp}+8d\sqrt{\epsilon_{\rm BE}}\le\eta_{\rm OAA}\le\left(\frac{3\epsilon}{128}\right)^2.$$
[F1, F2, F3, F4, F8, F9, F12, algebra]

2.1 Since $0<\epsilon\le1$, $\eta_{\rm OAA}\le9/16384<1/100$. Apply [F10] to the unitary $W$ whose clean block is $M_{\rm ph}/2$, with target unitary $V=e^{-itH}$. The phase-corrected OAA circuit therefore has clean-input isometry error at most $10\sqrt{\eta_{\rm OAA}}\le30\epsilon/128=15\epsilon/64$, including its retained-work leakage. [F1, F10, step 1.2, algebra]

3.1 The per-occurrence certificates in [F1] cover every remaining unitary primitive in the fully unrolled post-amplification circuit, counting repeated, inverse and controlled calls separately. If there are $N>0$ such occurrences, each contributes at most $\epsilon/(64N)$ in full operator norm. The telescoping product identity, [F11], and unitary norm one bound the difference between the actual and phase-certified OAA unitaries by $\sum_{j=1}^N\epsilon/(64N)=\epsilon/64$; for $N=0$ the difference is zero. Thus the actual clean-input isometry error is at most $15\epsilon/64+\epsilon/64=\epsilon/4<\epsilon$. [F1, F6, F11, step 2.1, algebra]

4.1 If $t=0$, [F1] returns the exact identity and the conclusion holds with zero error. If $t\ne0$, step 3.1 gives the clean-input isometry bound. Apply [F7] in either case; it includes arbitrary reference systems and discarding the work registers, so the trace distance is at most $\epsilon$. [F1, F7, step 1.1, step 3.1, algebra] ∎
