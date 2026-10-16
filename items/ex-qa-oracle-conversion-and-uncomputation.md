---
id: ex-qa-oracle-conversion-and-uncomputation
kind: example
title: "Oracle conversion and uncomputation examples"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-standard-bit-query
  - def-qa-phase-query
  - thm-qa-phase-kickback
  - def-qa-binary-dot-product
  - alg-qa-reversible-binary-dot-product
  - thm-qa-reversible-binary-dot-product-correct-and-cost
  - def-qc-clean-and-dirty-ancillas
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
  - def-qc-elementary-circuit-resources
  - def-qc-toffoli-and-fredkin
  - def-qc-cnot-and-control-target-order
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qa-global-phase-under-control
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.4, PDF pp. 22–33: reversible Boolean computation, XOR queries, and phase kickback."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp. 10–11; Chapter 21, §21.2, PDF pp. 105–106: compute-copy-uncompute and query conventions."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp. 7–8: the standard function oracle and phase kickback."
---

## Example

For the one-bit function $f(x)=x$, compute the standard XOR query with a clean work bit, copy its value to the target, and uncompute the work. On input address $|+\rangle$, target $|-\rangle$, and work $|0\rangle$, the address becomes $|-\rangle$ and the work returns to zero; a final Hadamard on the address yields outcome $1$ with certainty. For the two-bit dot product, take $a=11$, $x=10$, and target $z=0$. The reversible Toffoli circuit outputs target $1$ and resets its work bit. If the one-bit circuit omits its final uncomputation, residual address-dependent work makes the same final address measurement uniform instead of deterministic. Finally, a constant-one phase query has no standalone measurement effect, but its controlled call changes a control $|+\rangle$ to $|-\rangle$.

## Facts & Assumptions

**Given:** The explicit one-bit and two-bit inputs above and the stated ordered registers. The operation model's declared finite nonoracle gate alphabet contains and permits CNOT, Toffoli and $H$ as callable gates, with each occurrence counted once; any explicitly supplied standard or controlled phase-oracle call is charged separately from those gate occurrences.

[F1] [[def-qa-standard-bit-query]]: the standard query is the basis action $|x\rangle|y\rangle\mapsto|x\rangle|y\oplus f(x)\rangle$.

[F2] [[def-qa-phase-query]]: a Boolean phase query acts by $P_f|x\rangle=(-1)^{f(x)}|x\rangle$.

[F3] [[thm-qa-phase-kickback]]: a standard query with target $|-\rangle$ applies $P_f$ to the address and returns the target unchanged.

[F4] [[def-qa-binary-dot-product]]: $a\cdot x$ is the XOR of coordinatewise conjunctions.

[F5] [[alg-qa-reversible-binary-dot-product]]: the reversible circuit accumulates the products into a clean work bit, copies the parity to the target, and reverses the Toffolis.

[F6] [[thm-qa-reversible-binary-dot-product-correct-and-cost]]: the circuit realizes that map with $2n$ Toffoli gates, one CNOT, and clean work.

[F7] [[def-qc-clean-and-dirty-ancillas]]: clean work begins at zero and must return exactly to zero; an uncomputed work register is not clean.

[F8] [[def-qc-toffoli-and-fredkin]]: Toffoli toggles its target by the conjunction of its two controls.

[F9] [[def-qc-cnot-and-control-target-order]]: CNOT toggles its target by its control and leaves the control unchanged.

[F10] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ in the ordered basis $|0\rangle,|1\rangle$.

[F11] [[def-qc-register-and-computational-basis]]: the displayed wire order specifies the tensor-factor order and computational-basis labels.

[F12] [[thm-qa-global-phase-under-control]]: constant phase is unobservable standalone and, under explicit controlled access, is a relative phase with a distinguishing control measurement.

[F13] [[def-qc-elementary-circuit-resources]]: elementary gate occurrences and explicitly supplied oracle calls are separate resource coordinates.

## Verification

1.1 Let the one-bit address be $x$ and the target be $y$. The first CNOT from $x$ to clean work $r$ maps $|x\rangle|0\rangle_r$ to $|x\rangle|x\rangle_r$ by [F9]. Copying $r$ to $y$ changes $y$ to $y\oplus x$. The final CNOT from $x$ to $r$ restores $r$ to $x\oplus x=0$ and leaves $x,y\oplus x$ unchanged. Thus the three-CNOT circuit is exactly the standard query for $f(x)=x$ with clean work. [given, F1, F7, F9, F11, algebra]

1.2 For $a=11$ and $x=10$, the two coordinate products are $1\land1=1$ and $1\land0=0$, so $a\cdot x=1\oplus0=1$ by [F4]. In the forward Toffoli loop of [F5], the first gate changes $r:0\to1$ and the second leaves it at $1$; CNOT changes $z:0\to1$. In reverse, the second Toffoli leaves $r$ unchanged and the first changes $r:1\to0$ by [F8]. Thus the output is $|11\rangle|10\rangle|1\rangle|0\rangle_r$, consistent with [F6]. [given, F4, F5, F6, F8, F9, algebra]

2.1 Starting with address $|+\rangle$, target $|-\rangle$, and clean work $|0\rangle_r$, step 1.1 applies the standard query. By [F3] the output is $|-\rangle_x|-\rangle_y|0\rangle_r$. Multiplying the matrix in [F10] gives $H|0\rangle=|+\rangle$ and $H|1\rangle=|-\rangle$, hence $H|-\rangle=|1\rangle$. The final address measurement therefore returns $1$ with probability one. [step 1.1, F3, F7, F10, algebra]

2.2 Omit only the final CNOT from $x$ to $r$ in step 1.1. After compute and copy, the input $|+\rangle_x|-\rangle_y|0\rangle_r$ becomes, in the same register order $x,y,r$,
$$
\frac{|0\rangle_x|-\rangle_y|0\rangle_r-|1\rangle_x|-\rangle_y|1\rangle_r}{\sqrt2}.
$$
Applying $H$ to the address gives
$$
\frac{|0\rangle_x|-\rangle_y|-\rangle_r+|1\rangle_x|-\rangle_y|+\rangle_r}{\sqrt2}.
$$
Because $|+\rangle_r$ and $|-\rangle_r$ are orthogonal unit vectors, address outcomes $0$ and $1$ each have probability $1/2$. The residual work value is correlated with the address, violating the clean-ancilla contract [F7] and destroying the intended deterministic interference. [step 1.1, F7, F9, F10, F11, algebra]

3.1 For the constant function $f(x)=1$, [F2] gives $P_f=-I$, a standalone global scalar; [F12] therefore gives no standalone measurement distinction from $I$. Under the explicit controlled call, the control output is $|+\rangle$ for the identity case and $|-\rangle$ for the constant-one case by [F12]. Matrix multiplication using [F10] gives $H|+\rangle=|0\rangle$ and $H|-\rangle=|1\rangle$, so a computational-basis measurement distinguishes them with certainty. [given, F2, F10, F12, F13, algebra] ∎
