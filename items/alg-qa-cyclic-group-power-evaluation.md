---
id: alg-qa-cyclic-group-power-evaluation
kind: algorithm
title: Costed coherent evaluation of cyclic group powers
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - lem-qa-controlled-cyclic-multiplication-clean
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - def-qc-coherent-function-oracle
  - def-qc-pauli-matrices
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
---

## Definition

Inputs are a valid instance from [[def-qa-finite-cyclic-discrete-logarithm-problem]], exponent registers $u,v\in\{0,\ldots,q-1\}$, and one of these access profiles:

1. a supplied coherent XOR oracle for $f(u,v)=g^u x^v$; initialize a fresh output target to $0^w$, invoke the oracle once, and return its output (the zero target need not be the encoding of the group identity); or
2. explicit reversible group-operation circuits, or separately charged named controlled-multiplication operations with the same complete-register action, for each classically specified constant and its inverse. Initialize a fresh accumulator to $\operatorname{enc}(e)$, the code of the group identity. Precompute $g_j=g^{2^j}$ and $x_j=x^{2^j}$ for $0\le j<L$, where $L=\lceil\log_2q\rceil$, by repeated squaring. For $j=0,\ldots,L-1$, use the bit $u_j$ to apply the clean controlled multiplication by $g_j$ to the accumulator, and use $v_j$ to apply the clean controlled multiplication by $x_j$. The procedure is the circuit of [[lem-qa-controlled-cyclic-multiplication-clean]] applied at each control bit.

In profile 2, return the accumulator as the function value. The exponent registers are unchanged, all work and temporary target wires are returned to their declared initial states, and each direct oracle invocation or group-operation invocation is charged under its separately declared access profile. If only an uncontrolled black-box group operation is supplied, return UNSUPPORTED_ACCESS: it does not provide a controlled call.

To supply the total coherent XOR oracle required by the hidden-subgroup sampler, profile 2 is wrapped as follows. Prepare its $w$-bit accumulator from zero to $\operatorname{enc}(e)$ with at most $w$ Pauli-$X$ gates, execute the $2L$ controlled multiplications, copy the resulting $w$-bit value by CNOT into an arbitrary target $y$, then reverse the evaluation using the separately supplied inverse-constant controlled multiplications. Finally undo the initial $X$ gates. This implements $|u,v,y\rangle\mapsto|u,v,y\oplus\operatorname{enc}(g^ux^v)\rangle$ on valid exponent codes and restores every auxiliary wire to zero. The supplied total controlled operations also define its action on invalid exponent codes; these values are the declared Boolean extension. The wrapper uses $4L$ controlled multiplications and at most $3w$ extra $X$/CNOT gates; preparation, output copying, and inverse calls are charged.

## Remarks

The two explicit-circuit loops use $2L$ controlled multiplications per function evaluation. Their correctness and clean-work identity are proved in [[thm-qa-cyclic-group-power-evaluation-correctness]]. This algorithm makes no generic efficiency claim for abstract finite groups.
