---
id: lem-qa-dihedral-sieve-pair-combination
kind: lemma
title: Dihedral hidden-state pair combination
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-dirac-notation-conversion
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-partial-trace
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-projective-conditional-state
  - def-non-negative-and-positive-operator
  - def-qc-circuit-denotational-semantics
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - thm-qc-dirac-notation-coordinate-identity
  - def-trace-of-an-endomorphism
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof is a finite two-qubit basis calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Let $N\ge2$, $s\in\mathbb Z/N\mathbb Z$, and
$$
|\psi_k\rangle:=\frac{|0\rangle+\exp(2\pi i ks/N)|1\rangle}{\sqrt2}
$$
for $k\in\mathbb Z/N\mathbb Z$. On two ordered qubits define $C|a,b\rangle=|a,b\oplus a\rangle$ for $a,b\in\{0,1\}$. Apply $C$ to $|\psi_k\rangle\otimes|\psi_\ell\rangle$ and projectively measure the second qubit in its computational basis. Each outcome has probability $1/2$. After discarding the measured qubit, outcome $0$ leaves the first qubit in $|\psi_{k+\ell}\rangle$; outcome $1$ leaves it in $|\psi_{k-\ell}\rangle$ up to a global phase. The readout is implemented by the Lüders projective instrument of the stated computational-basis projections, so the conditional-state claims refer to its normalized branches.

## Facts & Assumptions

**Given:** $N\ge2$, $s,k,\ell\in\mathbb Z/N\mathbb Z$, the two normalized states above, the specified ordered two-qubit basis, and the specified two-outcome measurement.

[F1] A finite projective measurement has outcome weights $\operatorname{tr}(\rho P_b)$, and those weights are nonnegative and sum to one ([[def-qc-projective-measurement]], [[thm-qc-projective-measurement-outcome-law]]).

[F2] The ordered computational basis of a finite register is orthonormal, and the ordered tensor basis retains the factor order ([[thm-qc-computational-basis-orthonormal]], [[def-qc-tensor-register-and-permutation]]).

[F3] The Dirac rank-one operator $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle_{\rm root}x$ ([[def-qc-dirac-notation-conversion]]).

[F4] The circuit denotation composes the supplied chronological gate actions on the specified ordered wires ([[def-qc-circuit-syntax-and-register-order]], [[def-qc-circuit-denotational-semantics]]).

[F5] The matrix of a rank-one operator $|x\rangle\langle y|$ in ordered orthonormal bases is $[x][y]^\dagger$ ([[thm-qc-dirac-notation-coordinate-identity]]).

[F6] An endomorphism trace is the sum of its diagonal entries in an ordered basis ([[def-trace-of-an-endomorphism]]).

[F7] For real $\theta$, $|\exp(i\theta)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F8] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F9] A finite projective measurement's orthogonal projections form a POVM: each $P_b$ is nonnegative because $P_b=P_b^*=P_b^2$ gives $\langle P_bv,v\rangle=\langle P_bv,P_bv\rangle\ge0$, and their sum is the identity. Its positive square roots are the projections themselves. The Lüders maps are $\mathcal I_b(X)=P_bXP_b$; for $p_b=\operatorname{tr}(\rho P_b)>0$, the conditional state is $\rho_b=P_b\rho P_b/p_b$. The maps form an instrument by the Lüders-instrument theorem, and the displayed conditional-state formula is the projective conditional-state rule ([[def-qc-povm-and-outcome-law]], [[def-qc-instrument-and-conditional-state]], [[thm-qc-luders-instrument-of-a-povm-is-valid]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-qc-projective-conditional-state]], [[def-non-negative-and-positive-operator]]).

[F10] Discarding the second factor contracts its matching basis index by the partial-trace rule ([[def-qc-partial-trace]]).

## Proof

1.1 Put $\alpha=\exp(2\pi i ks/N)$ and $\beta=\exp(2\pi i\ell s/N)$. By [F8], $\alpha\beta=\exp(2\pi i(k+\ell)s/N)$. Expanding the input gives $\frac12(|00\rangle+\beta|01\rangle+\alpha|10\rangle+\alpha\beta|11\rangle)$. The map $C$ permutes the four orthonormal basis vectors by an involution, so it is unitary by [F2]. Its action sends this vector to $\frac12(|00\rangle+\beta|01\rangle+\alpha\beta|10\rangle+\alpha|11\rangle)$, in accordance with the ordered circuit semantics [F4]. [given, F2, F4, F8, algebra]

2.1 The second-qubit-zero projection leaves $\frac12(|0\rangle+\alpha\beta|1\rangle)\otimes|0\rangle$. Its squared norm is $(1+|\alpha\beta|^2)/4=1/2$, since [F7] gives $|\alpha|=|\beta|=1$. By [F3], the pure-state density is the rank-one operator; [F5] gives its coordinate matrix and [F6] its trace, so the trace of the projected rank-one state is this squared norm. [F1] identifies it with the projective outcome weight. The Lüders conditional-state rule [F9] normalizes the joint branch; its product form and the partial trace [F10] leave first-qubit state $|\psi_{k+\ell}\rangle$. [given, F1, F3, F5, F6, F7, F9, F10, step 1.1, algebra]

3.1 The second-qubit-one projection leaves $\frac12(\beta|0\rangle+\alpha|1\rangle)\otimes|1\rangle$. Its squared norm is $(|\beta|^2+|\alpha|^2)/4=1/2$ by [F7]. As in step 2.1, [F3], [F5], and [F6] identify that squared norm with the trace weight, and [F1] gives the projective outcome probability. The Lüders conditional-state rule [F9] normalizes this joint branch; [F10] discards the measured second qubit. Since $\beta\ne0$, the normalized first-qubit vector is $\beta/|\beta|$ times $(|0\rangle+\alpha\overline\beta|1\rangle)/\sqrt2$; the factor is a global phase. By [F7] and [F8], $\alpha\overline\beta=\alpha\beta^{-1}=\exp(2\pi i(k-\ell)s/N)$. Thus the residual ray is $|\psi_{k-\ell}\rangle$. This calculation includes $k=\ell$ and either zero label. [given, F1, F3, F5, F6, F7, F8, F9, F10, step 1.1, algebra] ∎
