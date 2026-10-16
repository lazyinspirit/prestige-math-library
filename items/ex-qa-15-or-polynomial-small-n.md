---
id: ex-qa-15-or-polynomial-small-n
kind: example
title: "A one-query exact algorithm on a two-point OR promise"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-15-acceptance-polynomial
  - def-qa-15-bit-oracle-query-complexity
  - def-qa-standard-bit-query
  - def-qc-clifford-t-gate-library
  - def-qc-pauli-matrices
  - def-qc-instrument-and-conditional-state
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
justified_by: []
proof_strategy: direct
axiom_use: "No choice; fixed finite-dimensional unitaries, one query, and a finite output measurement suffice."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

For $N=2$, let $D=\{00,11\}$ and let $f=\mathrm{OR}_2|_D$, so $f(00)=0$ and $f(11)=1$. There is a one-query local bit-query algorithm with acceptance probability
$$p(x_0,x_1)=\frac{x_0+x_1}{2}.$$

## Facts & Assumptions

**Given:** The two-bit local query model, one-hot addresses $e_0=10,e_1=01$, and the two-point promise $D$.

[F1] [[def-qa-15-bit-oracle-query-model]]: the root state is all zero, fixed unitaries may prepare a superposition of addresses, one XOR query acts on that address register, and acceptance is a fixed subset of terminal outputs, with probabilities given by the finite output law summing over unmeasured basis labels.

[F2] [[def-qa-standard-bit-query]]: a query at address $e_i$ toggles the target by $x_i$.

[F3] [[def-qc-clifford-t-gate-library]]: $H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and CNOT maps $|a,b\rangle$ to $|a,b\oplus a\rangle$.

[F4] [[def-qc-pauli-matrices]]: $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the ordered basis $(|0\rangle,|1\rangle)$.

[F5] [[def-qa-15-acceptance-polynomial]]: exact approximate degree on $D$ is the least total degree of a real polynomial agreeing with $f$ at every point in $D$.

[F6] [[def-qa-15-bit-oracle-query-complexity]]: $Q^{\mathrm{bit}}_0(f;D)$ is the minimum worst-branch number of oracle queries among algorithms exact on $D$.

[F7] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: coordinate variables and their finite real linear combinations are multivariate polynomials, with the displayed linear polynomial having degree one.

## Verification


1.1 The matrices in [F3] and [F4] satisfy $H^*H=I$ and $X^*X=I$ by direct multiplication; the CNOT action in [F3] permutes the four computational-basis vectors, so it is unitary. Starting at $|00,0\rangle$, apply $X$ to the second address bit, then $H$ to the first and CNOT from the first to the second. The basis actions in [F3]–[F4] give $\frac1{\sqrt2}(|01,0\rangle+|10,0\rangle)=\frac1{\sqrt2}(|e_1,0\rangle+|e_0,0\rangle)$. These are fixed input-independent unitaries permitted by [F1]. [given, F1, F3, F4, construct]

2.1 One oracle call and [F2] transform this to $\frac1{\sqrt2}(|e_1,x_1\rangle+|e_0,x_0\rangle)$. Measuring the target and accepting exactly when it is $1$ has probability $\frac12|x_1|^2+\frac12|x_0|^2=(x_0+x_1)/2$, because the orthogonal address basis states have no cross terms and each $x_i$ is a bit. This gives the stated acceptance polynomial. [step 1.1, F1, F2, algebra]

3.1 On $00$ the acceptance probability is $0=f(00)$, and on $11$ it is $1=f(11)$, so the algorithm is exact on $D$ with one query. The polynomial $p$ has total degree one by [F7]. No constant polynomial can be exact on $D$ because a constant has the same value at $00$ and $11$, while $f$ differs there. Thus $\widetilde{\deg}_0(f;D)=1$ by [F5], and the one-query construction verifies $Q^{\mathrm{bit}}_0(f;D)\le1$ by [F6]. [given, step 2.1, F5, F6, F7, algebra] ∎
