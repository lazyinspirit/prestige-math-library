---
id: ex-qa-25-two-dimensional-block-encoding
kind: example
title: Two-dimensional Hermitian block-encoding signal
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - lem-qa-25-hermitian-block-encoding-signal-subspaces
proof_strategy: direct
axiom_use: "None; this is an explicit two-dimensional matrix calculation."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Example

Fix $\alpha>0$, $x\in[-1,1]$, $s=\sqrt{1-x^2}$, and take one-dimensional system $H=\mathbb C$ with $K=[\alpha x]$. On a one-qubit ancilla define
$$U_x=\begin{pmatrix}x&s\\s&-x\end{pmatrix},\qquad Jz=|0\rangle z,\qquad \Pi=|0\rangle\langle0|.$$
This is an exact Hermitian block encoding of $K/\alpha=[x]$. Its signal complement has amplitude $s$; at $x=0$ the signal matrix is $X$, while at $x=\pm1$ the clean line is invariant and the normalized complement is not defined or needed.

## Facts & Assumptions

**Given:** $\alpha>0$, $x\in[-1,1]$, and the standard orthonormal ancilla basis $|0\rangle,|1\rangle$.

[F1] [[lem-qa-25-hermitian-block-encoding-signal-subspaces]]: for a normalized Hermitian block eigenvalue $x$, the non-endpoint signal matrix has entries $x,\sqrt{1-x^2}$, and the endpoint complement is absent without division by zero.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Since $s^2=1-x^2$, direct multiplication gives $U_x^*=U_x$ and $U_x^2=I$. Also $J^*U_xJ=[x]=K/\alpha$, so $U_x$ is unitary and has the claimed block encoding. Its clean and complementary components are $U_x|0\rangle=x|0\rangle+s|1\rangle$. [given, algebra]

2.1 If $|x|<1$, then $s>0$, so the normalized complement defined in [F1] is $|1\rangle$; both input and output paired bases are $(|0\rangle,|1\rangle)$, and the matrix is exactly $U_x$. At $x=0$, $s=1$, hence $U_0=X$, confirming that zero is a regular two-dimensional signal plane. [F1, step 1.1, algebra]

3.1 If $x=1$ or $x=-1$, then $s=0$ and $U_x|0\rangle=x|0\rangle=U_x^*|0\rangle$. No complement vector is normalized in these cases; this verifies the endpoint convention and the encoded eigenvalue $\lambda/\alpha=x$. [F1, step 1.1, algebra] ∎
