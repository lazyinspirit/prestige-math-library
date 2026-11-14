---
id: lem-qec-prereq-qubit-coherence-fidelities
kind: lemma
domain: mathematics
title: Qubit coherence channels and fidelity functionals
status: published
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-entanglement-fidelity
  - math:def-qc-quantum-channel
  - math:def-qc-instrument-and-conditional-state
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $H=\mathbb C^2$ have the ordered orthonormal basis $|0\rangle,|1\rangle$. For $\lambda\in\mathbb C$ with $|\lambda|\leq1$, let the complex-linear map $\mathcal D_\lambda$ send a matrix $X=(x_{ij})$ to the matrix with diagonal entries $x_{00},x_{11}$ and off-diagonal entries $\lambda x_{01},\overline\lambda x_{10}$. Then $\mathcal D_\lambda$ is a quantum channel and its entanglement fidelity for the maximally mixed input is $F_e(\mathcal D_\lambda)=(1+\operatorname{Re}\lambda)/2$. For every unit vector $|\psi\rangle=a|0\rangle+b|1\rangle$, its pure-state infidelity $1-\langle\psi|\mathcal D_\lambda(|\psi\rangle\langle\psi|)|\psi\rangle$ is $2|a|^2|b|^2(1-\operatorname{Re}\lambda)$.

Composition satisfies $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. For a finite instrument $(\mathcal I_j)_{j\in J}$ from $H$ to $H$, the flag here means its outcome label $j$, and discarding it means taking the nonselective map $\mathcal I_{\rm ns}(X):=\sum_{j\in J}\mathcal I_j(X)$. If its branches are $\mathcal I_j=p_j\mathcal D_{\lambda_j}$, with $p_j\geq0$, $\sum_jp_j=1$ and $|\lambda_j|\leq1$, then this map is the channel $\sum_jp_j\mathcal D_{\lambda_j}$; its entanglement fidelity and pure-state infidelity at any fixed $|\psi\rangle$ are the respective $p_j$-weighted averages of the preceding expressions. For $p_j>0$ the conditional output is $\mathcal D_{\lambda_j}(\rho)$; zero-weight branches contribute zero and have no assigned conditional state.

## Statement references

[[def-qec-prereq-finite-operator-conventions]]

[[def-qec-prereq-entanglement-fidelity]]

[[math:def-qc-quantum-channel]]

[[math:def-qc-instrument-and-conditional-state]]

## Facts & Assumptions

[F1] The specified coordinates, bras, outer products and ordered tensor basis use the finite operator conventions. [[def-qec-prereq-finite-operator-conventions]]

[F2] For a qubit channel, $F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$. [[def-qec-prereq-entanglement-fidelity]]

[F3] A quantum channel is a complex-linear, completely positive, trace-preserving map. Complete positivity means positivity after tensoring with the identity on every finite ancillary matrix space. [[math:def-qc-quantum-channel]]

[F4] An instrument's outcome weight is the trace of its branch output, and its conditional state is that output divided by the weight when positive; no conditional state is assigned at zero weight. [[math:def-qc-instrument-and-conditional-state]]

## Proof

**Given:** The parameters, maps, vector and flagged branches in the statement.

**Goal:** Establish channel validity, the fidelity formulas, composition and branch averaging.

1.1 Put $r=|\lambda|$ and choose $z=\lambda/r$ if $r>0$, and $z=1$ if $r=0$. Let $U=\operatorname{diag}(1,\overline z)$ and $Z=\operatorname{diag}(1,-1)$. Direct multiplication gives $\mathcal D_\lambda(X)=((1+r)/2)UXU^\dagger+((1-r)/2)UZXZU^\dagger$. The coefficients are nonnegative and sum to one. After tensoring with any finite identity map, each summand sends a positive matrix to a positive matrix by conjugation; hence their sum is positive. Both conjugating matrices are unitary, so the trace is preserved. Thus $\mathcal D_\lambda$ is a quantum channel. [F1, F3, given, algebra]

1.2 The input projector has diagonal entries $|a|^2,|b|^2$ and $01$ entry $a\overline b$. Its output overlap with $\psi$ is $|a|^4+|b|^4+2|a|^2|b|^2\operatorname{Re}\lambda$. Since $|a|^2+|b|^2=1$, subtracting this from one gives the stated infidelity. Entrywise multiplication also gives $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. [F1, given, algebra]

2.1 Expand $|\Phi\rangle\langle\Phi|$ as one half of the sum of $|jj\rangle\langle kk|$ over $j,k\in\{0,1\}$. The two diagonal terms contribute $1/4$ each to the overlap in [F2], while the two off-diagonal terms contribute $\lambda/4$ and $\overline\lambda/4$. Therefore $F_e(\mathcal D_\lambda)=(1+\operatorname{Re}\lambda)/2$. [F1, F2, step 1.1, algebra]

3.1 For each density operator $\rho$, trace preservation gives $\operatorname{tr}\mathcal I_j(\rho)=p_j$. The conditional-state rule therefore gives the stated branch output when $p_j>0$, and assigns none when $p_j=0$. By the definition in the Statement, discarding the outcome label gives $\mathcal I_{\rm ns}=\sum_j\mathcal I_j=\sum_jp_j\mathcal D_{\lambda_j}$. This sum is complex-linear and completely positive: after every finite amplification it is a sum of positive maps with nonnegative coefficients, by step 1.1. For every matrix $X$, its trace is $\sum_jp_j\operatorname{tr}X=\operatorname{tr}X$, so it is a channel by [F3]. Both the overlap defining entanglement fidelity and the pure-state output overlap are linear in that sum; because $\sum_jp_j=1$, the corresponding infidelity is also the weighted sum of branch infidelities. Substituting steps 2.1 and 1.2 proves the claimed averages. [F2, F3, F4, step 1.1, step 2.1, step 1.2, given, algebra] ∎
