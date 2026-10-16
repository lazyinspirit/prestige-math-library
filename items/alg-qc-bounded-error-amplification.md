---
id: alg-qc-bounded-error-amplification
kind: algorithm
title: "Bounded-error repetition amplification"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qc-uniform-circuit-family
  - def-qc-oracle-full-list-circuit-family
  - def-qc-promise-computation-model
  - def-qc-quantum-acceptance-probability
  - def-qc-circuit-cost-model
  - def-qc-clifford-t-gate-library
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Section IV.2"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2 and Appendix B.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** In ordinary mode, a full-list uniform family generator $G$ in the exact fixed-library format of [[def-qc-uniform-circuit-family]]; or, in oracle mode, an oracle-aware full-list generator and its granted access specification as in [[def-qc-oracle-full-list-circuit-family]]. In either mode supply a total deterministic acceptance-predicate machine $A$ and explicit polynomial clock bounds, with zero auxiliary initialization, output tuples, and acceptance as in [[def-qc-promise-computation-model]] and [[def-qc-quantum-acceptance-probability]]; machines that output exact binary rationals $\alpha(n),\beta(n),\delta(n)$ with explicit polynomial clock bounds; and a fixed positive integer-valued polynomial $s(n)$ with an exact rational-coefficient representation. The machine descriptions and clock bounds are fixed parts of the input data, and each rational output has polynomial bit length. Valid inputs satisfy, for every $n$,
$$0\le \beta(n)<\alpha(n)\le1,\qquad \alpha(n)-\beta(n)\ge\frac1{s(n)},\qquad 0<\delta(n)\le\frac12.$$
The procedure checks the clock and syntax at each requested length and returns INVALID if a run exceeds its supplied clock, a code is malformed, or any displayed inequality fails. Its domain consists of descriptions whose stated polynomial bounds and inequalities hold for all $n$; the procedure does not decide that global validity property for arbitrary machine descriptions.

**Instructions at length $n$.**

1. Run the supplied machines within their polynomial clocks to obtain the full description of $C_n$, $\alpha=\alpha(n)$, $\beta=\beta(n)$, and $\delta=u/v$ with positive integers $u,v$. In oracle mode, also compare the printed port descriptors with the supplied access specification at length $n$; on any mismatch return INVALID. Evaluate $s(n)$ exactly from its fixed rational-coefficient polynomial. Check that it is a positive integer, check exact rational syntax, and check the validity inequalities by integer arithmetic; on failure return INVALID.
2. Let $\ell(v)$ be the number of binary digits of $v$ and set
$$r:=2s^2\bigl(\ell(v)+1\bigr).$$
This is a positive integer. No logarithm or irrational ceiling is evaluated.
3. Allocate $r$ disjoint copies of the entire $C_n$ wire register in block order, with block $1$ first. Put the classical-basis input $|x\rangle$ on the first block's first $n$ wires; initialize every other wire to zero. For $j=2,\ldots,r$ in increasing order, and then $i=0,\ldots,n-1$ in increasing order, append a CNOT from wire $i$ of block $1$ to wire $i$ of block $j$, with the first wire as control. These operations map $|x\rangle|0^n\rangle^{\otimes(r-1)}$ to $|x\rangle^{\otimes r}$ and do not clone arbitrary superpositions. Then, for blocks $j=1,\ldots,r$ in order, append the records of $C_n$ in their supplied chronological order, shifting each wire index by $(j-1)w(C_n)$. This serializes each base circuit's records; gates listed in a common layer have disjoint supports, so serialization preserves its denotation. Keep the first block's $n$ input wires first in the output wire order and encode input count $n$; every other wire is auxiliary. In oracle mode, retain each slot's port and granted variant, shift only its ordered wire indices by the block offset, and copy the access descriptors once. The added CNOTs are ordinary records, never query slots. The repeated circuit has $r w(C_n)$ wires and $r g(C_n)+n(r-1)$ operation occurrences; in oracle mode its ordinary count is $r g_{\rm ord}(C_n)+n(r-1)$.
4. Concatenate the $r$ copies of the declared output tuple in copy order and measure that tuple at the final readout. For measured strings $z_1,\ldots,z_r$, compute $S=\#\{i:A_n(x,z_i)=1\}$. The single total output predicate returns YES exactly when $2S\ge r(\alpha+\beta)$, evaluated exactly: if $\alpha=A/B$ and $\beta=C/D$ with positive denominators, compare $2SBD$ with $r(AD+CB)$. Return NO otherwise.

The output is one full-list repeated circuit in the input mode's format and its total classical predicate. Ordinary mode uses only the original fixed library. In oracle mode every base port/variant occurrence is repeated $r$ times: $N_{j,v}$, raw call counts $q_j$, and charged query costs $Q_j$ all scale by $r$, with unchanged grants and per-call charges ([[def-qc-oracle-full-list-circuit-family]]). Query costs remain separate from ordinary gates and classical bit costs ([[def-qc-circuit-cost-model]]). The endpoint comparison is classical postprocessing, not an intermediate measurement or coherent amplitude-amplification step. Correctness, uniformity, and resource bounds are separate claims proved by [[thm-qc-bounded-error-amplification-correct]].
