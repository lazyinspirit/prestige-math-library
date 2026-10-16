---
id: lem-qa-33-feynman-propagation-path-gap
kind: lemma
title: Propagation kernel and path-Laplacian gap
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: None; the diagonalization is an explicit finite cosine calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4 and Lemma 3, PDF pp. 11–15
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §4, propagation spectrum, PDF pp. 6–8
---

## Statement

On the legal clock space spanned by $|c_0\rangle,\ldots,|c_T\rangle$, the propagation Hamiltonian of [[def-qa-33-feynman-kitaev-history-hamiltonian]] is unitarily conjugate to
$$L_T=\tfrac12\sum_{t=1}^T(|t\rangle-|t-1\rangle)(\langle t|-\langle t-1|)$$
tensor the identity on computation space. Its kernel is the uniform clock vector, equivalently the valid computation histories, and its first positive eigenvalue is
$$1-\cos\!\left(\frac{\pi}{T+1}\right)\ge\frac{2}{(T+1)^2}.$$

## Facts & Assumptions

**Given:** The ordered computation unitaries $U_1,\ldots,U_T$ and legal clock basis.

[F1] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: each propagation edge couples adjacent legal times with weight $1/2$ and transports computation by $U_t$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite Hermitian matrix has an orthonormal eigenbasis.

[F3] [[def-qc-dirac-notation-conversion]]: ket-bra products and inner products use the stated root convention and matrix-adjoint correspondence.

## Proof

1.1 Set $V_0=I$ and $V_t=U_t\cdots U_1$. The block diagonal map $W=\sum_{t=0}^T V_t\otimes|c_t\rangle\langle c_t|$ is unitary because every $V_t$ is unitary and clock sectors are orthogonal. Conjugating an edge term by $W$ replaces $U_t$ in its off-diagonal block by $V_t^*U_tV_{t-1}=I$; its diagonal clock blocks remain unchanged. The ket-bra multiplications use the convention [F3]. Summing gives $W^*H_{prop}W=I_{comp}\otimes L_T$. Thus the kernel consists of vectors constant across clock time, and undoing $W$ gives exactly the history vectors $\eta_\phi$, normalized when $\|\phi\|=1$. [F1, F3, given, algebra]

2.1 Put $M=T+1$. For $j=0,\ldots,M-1$, the vector with coordinates $v_j(r)=\cos(\pi j(r+1/2)/M)$, $r=0,\ldots,M-1$, is nonzero. The cosine addition identity verifies the interior eigenvalue equation for $L_T$ with eigenvalue $1-\cos(\pi j/M)$; the same identity with the endpoint degree-one rows verifies both endpoint equations. These $M$ eigenvalues are distinct, so symmetry of $L_T$ makes the corresponding vectors orthogonal; by [F2] they form a full eigenbasis. The $j=0$ vector is constant and the smallest positive eigenvalue is the $j=1$ value. [F2, step 1.1, algebra]

3.1 For $x\in[0,\pi/2]$, concavity of sine gives $\sin x\ge2x/\pi$. Hence $1-\cos(\pi/M)=2\sin^2(\pi/(2M))\ge2/M^2.$ This proves the stated gap and includes $T=1$ ($M=2$). [step 2.1, algebra] ∎
