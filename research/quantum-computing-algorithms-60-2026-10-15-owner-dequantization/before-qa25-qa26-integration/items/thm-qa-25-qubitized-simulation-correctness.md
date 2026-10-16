---
id: thm-qa-25-qubitized-simulation-correctness
kind: theorem
title: Near-optimal simulation correctness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-25-qubitized-hamiltonian-simulation
  - lem-qa-25-jacobi-anger-truncation
  - thm-qa-23-qsp-synthesis-correctness
  - thm-qa-24-qsvt-singular-space-action
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-qc-reflection-unitary-involution
  - lem-qa-25-isometry-error-implies-trace-distance
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qa-25-qubitization-access-model
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

For the exact access model of [[def-qa-25-qubitization-access-model]], rational $t$, and $0<\epsilon\le1$, a successful execution of [[alg-qa-25-qubitized-hamiltonian-simulation]] returns a unitary dilation $V_{\rm impl}$ satisfying
$$\|V_{\rm impl}J_{\rm clean}-J_{\rm out}e^{-itH}\|_{\rm op}\le\epsilon$$
on the clean-input isometry $J_{\rm clean}$, where $J_{\rm out}$ appends every work register in zero. Output work registers are approximate; no full-space error on arbitrary dirty work inputs or exact cleanup is asserted. For $t=0$, the declared identity branch is exact. For every reference system, tracing out work gives the corresponding system-output trace-distance bound at most $\epsilon$.

## Facts & Assumptions

**Given:** A finite Hermitian $H$, an exact normalized block encoding, and a successful certified OP4 execution.

[F1] [[alg-qa-25-qubitized-hamiltonian-simulation]]: the exact OP4 generation gives even/odd polynomials with combined scalar error at most $\rho=\epsilon^2/10000$, and allocates post-amplification phase, gate, and block implementation error at most $\epsilon/4$.

[F2] [[lem-qa-25-jacobi-anger-truncation]]: the factorial-tail polynomial and its certified coefficient rounding give the stated scalar error on $[-1,1]$.

[F3] [[thm-qa-23-qsp-synthesis-correctness]]: on successful phase synthesis, the real QSP polynomial entry has its certified uniform error.

[F4] [[thm-qa-24-qsvt-singular-space-action]]: the alternating QSVT sequence has the stated polynomial compressed block on each singular space, including endpoints and null spaces.

[F5] [[thm-qc-reflection-unitary-involution]]: the projector reflections in OAA are unitary involutions.

[F6] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_{\rm op}\le\|S\|_{\rm op}\|T\|_{\rm op}$.

[F7] [[lem-qa-25-isometry-error-implies-trace-distance]]: clean-input isometry error bounds the reference-system trace distance after work is traced out.

[F8] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite Hermitian $H$ has an orthonormal eigenbasis and scalar functional calculus.

[F9] [[def-qa-25-qubitization-access-model]]: the block-encoding normalization satisfies $\|H\|_{\rm op}\le\alpha$.

## Proof

**Given:** A successful output of the simulator in Facts & Assumptions; when $t\ne0$, all OP4 certificates succeed. Put $V=e^{-itH}$, $\rho=\epsilon^2/10000$, and $\eta=3\rho$.

1.1 If $t=0$, [F1] returns the identity circuit with no signal query, and $e^{-itH}=I$; hence its clean-input isometry error is zero. If $t\ne0$, continue with the certified OP4 output. [F1, F8, algebra]

1.2 On an eigenvector of $H$ with eigenvalue $\lambda$, $H/\alpha$ has eigenvalue $x=\lambda/\alpha\in[-1,1]$, by [F8] and [F9]. Put $Q=E-iO$ and $B=1+2\rho$. The OP4 certificate gives $\|Q-f_\tau\|_{[-1,1]}\le\rho$ by [F1]–[F2], and $|f_\tau(x)|=1$. Since $M=Q/B$, $|M(x)-f_\tau(x)|\le |Q(x)-f_\tau(x)|/B +(B-1)|f_\tau(x)|/B \le 3\rho/(1+2\rho)<3\rho.$ The finite spectral calculus therefore gives $\|M(H/\alpha)-e^{-itH}\|_{\rm op}<\eta:=3\rho$. The two real QSVT extractions act on each eigenspace by their scalar polynomials by [F3]–[F4], so their coefficient-qubit combination has clean block $M/2$. [F1, F2, F3, F4, F8, F9, algebra]

2.1 Let $P$ be the clean-work projector and $B=PWP=M/2$ the compressed block of the complete even/odd circuit $W$, by step 1.2. Expanding $R=I-2P$ gives $P(-WRW^*RW)P=3B-4BB^*B=3M/2-MM^*M/2.$ Indeed, $RWP=WP-2B$, $W^*RWP=P-2W^*B$, and a second application of $R$, followed by $PW$, yields $-3B+4B(PW^*P)B=-3B+4BB^*B$ before the leading minus sign. The full OAA circuit $C=-WRW^*RW$ is unitary by [F5]. [F1, F5, step 1.2, given, algebra]

3.1 Since $\|M\|_{\rm op}\le1+\eta$, telescoping $MM^*M-VV^*V$ into three factors gives $\|MM^*M-V\|_{\rm op}\le\eta\bigl((1+\eta)^2+(1+\eta)+1\bigr).$ By step 2.1, $D=3M/2-MM^*M/2$, so $\|D-V\|_{\rm op}\le\tfrac32\eta+\tfrac12\eta\bigl((1+\eta)^2+(1+\eta)+1\bigr)\le4\eta,$ where the last inequality follows from $\eta\le3/10000<1/100$. Here $D=P C P|_{\operatorname{ran}P}$ is the clean block. [F1, F6, step 1.2, step 2.1, algebra]

4.1 Write $CJ_{\rm clean}=J_{\rm clean}D+L$, where $L=(I-P)CJ_{\rm clean}$ is the work-space leakage. Unitarity of $C$ gives $L^*L=I-D^*D$, and $D$ is a contraction as a compression of $C$. Thus $\|L\|_{\rm op}^2=\|I-D^*D\|_{\rm op} \le\|D^*(D-V)\|_{\rm op}+\|(D^*-V^*)V\|_{\rm op} \le 2\|D-V\|_{\rm op}\le8\eta.$ It follows that $\|CJ_{\rm clean}-J_{\rm clean}V\|_{\rm op}\le4\eta+\sqrt{8\eta}\le10\sqrt{\eta}$, since $\eta<1$ implies $4\eta\le4\sqrt\eta$ and $\sqrt8<3$. [F5, F6, step 3.1, algebra]

5.1 Because $\eta=3\epsilon^2/10000$, $10\sqrt{\eta}=(\sqrt3/10)\epsilon$. Adding the post-amplification implementation budget $\epsilon/4$ from [F1] gives at most $(\sqrt3/10+1/4)\epsilon<\epsilon$. This is the asserted clean-input isometry error, with the residual leakage retained in $V_{\rm impl}J_{\rm clean}$. [F1, step 4.1, algebra]

6.1 The $t=0$ branch has zero isometry error by step 1.1; when $t\ne0$, step 5.1 gives error at most $\epsilon$. Apply [F7] in either case; it includes arbitrary reference systems and discarding the work registers, so the trace distance is at most $\epsilon$. [F7, step 1.1, step 5.1, algebra] ∎
