---
id: thm-qa-33-local-hamiltonian-in-qma
kind: theorem
title: The encoded Local Hamiltonian problem belongs to QMA
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-33-k-local-hamiltonian-promise
  - def-qa-33-effective-finite-matrix-encoding
  - lem-qa-33-fixed-arity-local-measurement-synthesis
  - def-qa-33-qma-promise-class
  - thm-qa-33-qma-amplification-entangled-witness-soundness
  - lem-qa-33-finite-dimensional-unitary-synthesis
  - lem-qa-33-uniform-programmed-circuit-interpreter
  - def-qc-povm-and-outcome-law
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - prop-trace-is-linear
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite effects, Born probabilities and trace linearity.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §3, local Hamiltonian membership, PDF pp. 7–10
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §2, PDF pp. 2–4
---

## Statement

For each fixed $k$, the encoded $k$-Local Hamiltonian promise problem of [[def-qa-33-k-local-hamiltonian-promise]] is in QMA. A verifier receives an $n$-qubit witness $\rho$, uses the $\ell=\lceil\log_2m\rceil$ address qubits to choose uniformly one of $d=2^\ell$ addresses, rejects addresses $j\ge m$, and for $j<m$ measures the locally synthesized effect $E_j=(I-H_j/B)/2$. Its ideal local-energy test has acceptance probability
$$p(\rho)=\frac{m}{2d}-\frac{\operatorname{Tr}(H\rho)}{2dB}.$$
The promised acceptance gap is $(b-a)/(2dB)\ge(b-a)/(4mB)$ (with $d=1$ when $m=1$). Synthesize each conditional test to effect error at most one eighth of this gap; then the implemented verifier retains an inverse-polynomial gap and is uniformly generated from the term encodings. An efficiently synthesized coin normalizes the instance-dependent acceptance midpoint to length-only QMA thresholds. The QMA amplifier of [[thm-qa-33-qma-amplification-entangled-witness-soundness]] then gives standard bounded error.

## Facts & Assumptions

**Given:** A promised encoded instance $H=\sum_{j=1}^mH_j$, each $\|H_j\|\le B$, and a witness density operator $\rho$.

[F1] [[def-qa-33-k-local-hamiltonian-promise]]: the explicit encoding has $n$ polynomial in input length and lists $m$ finite Hermitian local matrices; YES has $\lambda_{min}(H)\le a$, and NO has $\lambda_{min}(H)\ge b$.

[F2] [[lem-qa-33-fixed-arity-local-measurement-synthesis]]: a polynomial-time classical compiler obtains a finite gate list for each local test from its matrix encoding and supplies Cauchy names for the controlled dilation target.

[F3] [[def-qa-33-qma-promise-class]]: acceptance is a uniform finite-circuit effect on the witness, with an inverse-polynomial completeness/soundness gap.

[F4] [[thm-qa-33-qma-amplification-entangled-witness-soundness]]: a verifier with inverse-polynomial gap can be amplified with polynomial overhead to any inverse-polynomial target error.

[F5] [[prop-trace-is-linear]]: trace is linear on finite matrices.

[F6] [[lem-qa-33-finite-dimensional-unitary-synthesis]]: a fixed-dimensional unitary and its selector-controlled block diagonal form can be generated to any inverse-polynomial operator precision.

[F7] [[lem-qa-33-uniform-programmed-circuit-interpreter]]: any polynomial-time input-to-gate-list compiler is simulated by one full-list uniform verifier family with inverse-polynomial operator error.

[F8] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: the exact Hadamard matrix sends $|0\rangle$ to $(|0\rangle+|1\rangle)/\sqrt2$.

[F9] [[def-qc-povm-and-outcome-law]]: finite measurement effects determine the outcome probabilities by the Born trace formula.

[F10] [[def-qa-33-effective-finite-matrix-encoding]]: each encoded local matrix has a uniform polynomial-time entry-approximation procedure.

## Proof

1.1 Let $N=|x|$. Because $n$ is polynomially bounded in $N$, choose fixed polynomial envelopes $P(N)\ge\max\{1,p(n)\}$ and $Q(N)\ge1$ bounding both $m$ and $B$ on every valid length-$N$ input; these envelopes are computable in polynomial time from $1^N$. Put $g_*(N)=1/(4Q(N)^2P(N))$. Since $d<2m$ for $m>1$ and $d=1$ for $m=1$, the exact gap $g=(b-a)/(2dB)$ satisfies $g\ge g_*(N)$. Prepare the address uniformly with Hadamards using [F8]. A fixed polynomial-time classical compiler on the encoded instance builds the verifier gate list: compute each equality predicate, apply the selector-controlled local Naimark test, and reject invalid addresses. The controlled target has fixed dimension at most $2^{k+2}$; [F2] supplies its Cauchy matrix description, and [F6] compiles each full selector-controlled block to operator error at most $g_*(N)/(32m)$, up to a whole-circuit scalar. Telescoping the $m$ block replacements gives total operator error at most $g_*(N)/32$, hence acceptance error at most $g_*(N)/16$ for the complete address test; this also bounds leakage from approximate selector controls. The compiler's full output list has polynomial length because $m,B$ are polynomially bounded and each matrix encoding has the uniform polynomial-time approximation routine of [F10]. The compiler is uniformized by [F7] with operator error $\delta(N)=g_*(N)/32$ after appending the threshold normalization below; the single full-list family generated from $1^N$ computes the complete list from $x$ and interprets it. A fixed polynomial time limit makes the classical compiler total, emitting a fixed rejecting circuit on malformed input or overrun; promised encodings satisfy the established bounds. [F1, F2, F3, F6, F7, F8, F10, given, algebra]

1.2 In the address basis, the acceptance effect on the witness is the direct sum average $d^{-1}\sum_{j<m}E_j$. The finite outcome law [F9] and trace linearity [F5] give $p(\rho)=d^{-1}\sum_{j<m}\operatorname{Tr}(E_j\rho)=\frac{m}{2d}-\frac{\operatorname{Tr}(H\rho)}{2dB}.$ For a YES instance use a ground-state eigenvector from the finite spectral theorem; for a NO instance every density matrix has energy at least $b$. Thus the exact acceptance gap is $(b-a)/(2dB)$. If $m>1$, $d<2m$; if $m=1$, $d=1$, so in either case it is at least $(b-a)/(4mB)$. [F1, F5, F9, given, algebra]

2.1 By [F2] and [F7], the implemented energy test has acceptance error at most $g_*(N)/16+2(g_*(N)/32)=g_*(N)/8$. Its ideal instance-dependent thresholds are $c_x=m/(2d)-a/(2dB)$ and $s_x=m/(2d)-b/(2dB)$, with $c_x-s_x=g$. Compute $t_x=(c_x+s_x)/2$ exactly. If $t_x<0$, then $s_x<0$, so no NO instance can occur because acceptance is nonnegative; accept deterministically. If $t_x>1$, then $c_x>1$, so no YES instance can occur; reject deterministically. For $0\le t_x\le1$, use a fair branch coin: on one branch perform the energy test, and on the other accept with probability $1-t_x$. The ideal combined acceptance is $q=(p+1-t_x)/2$, at least $1/2+g/4$ on YES and at most $1/2-g/4$ on NO. The second coin is prepared by synthesizing the one-qubit real rotation with first column $(\sqrt{t_x},\sqrt{1-t_x})^T$ to probability error at most $g_*(N)/16$ using [F6]; square-root Cauchy evaluation, including zero endpoints, is supplied by the rounded Newton construction in [F2]. All branch and outcome bits are measured only at termination, with a polynomial-time final predicate. Apply the interpreter once to this complete input-generated circuit. Its energy-block error contributes at most $g_*/32$ after the half mixture, the second coin contributes at most $g_*/32$, and interpreter error contributes at most $g_*/16$, for total error at most $g_*/8$. Thus the length-only rational thresholds $c(N)=1/2+g_*(N)/8$ and $s(N)=1/2-g_*(N)/8$ apply to every promised length-$N$ input. Both lie in $[0,1]$ since $g_*\le1/4$, and their gap is inverse polynomial. Amplify this uniform verifier using [F4]; witness width, initialized workspace, size and generator time remain polynomial. [F2, F3, F4, F6, F7, step 1.1, step 1.2, algebra] ∎
