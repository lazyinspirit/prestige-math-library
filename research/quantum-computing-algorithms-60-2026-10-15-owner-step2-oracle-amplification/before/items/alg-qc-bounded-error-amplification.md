---
id: alg-qc-bounded-error-amplification
kind: algorithm
title: "Bounded-error repetition amplification"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-uniform-circuit-family
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

**Inputs.** A full-list uniform family generator $G$, a total deterministic acceptance-predicate machine $A$, and their explicit polynomial clock bounds as in [[def-qc-uniform-circuit-family]], [[def-qc-promise-computation-model]], and [[def-qc-quantum-acceptance-probability]]; machines that output exact binary rationals $a(n),b(n),\delta(n)$ with explicit polynomial clock bounds; and a fixed positive integer-valued polynomial $s(n)$. The machine descriptions and clock bounds are fixed parts of the input data, and each rational output has polynomial bit length. Valid inputs satisfy, for every $n$,
$$0\le b(n)<a(n)\le1,\qquad a(n)-b(n)\ge\frac1{s(n)},\qquad 0<\delta(n)\le\frac12.$$
The procedure checks the clock and syntax at each requested length and returns INVALID if a run exceeds its supplied clock, a code is malformed, or any displayed inequality fails. Its domain consists of descriptions whose stated polynomial bounds and inequalities hold for all $n$; the procedure does not decide that global validity property for arbitrary machine descriptions.

**Instructions at length $n$.**

1. Run the supplied machines within their polynomial clocks to obtain the full description of $C_n$, $a=a(n)$, $b=b(n)$, $\delta=u/v$ with positive integers $u,v$, and $s=s(n)$. Check exact rational syntax and the validity inequalities by integer arithmetic; on failure return INVALID.
2. Let $\ell(v)$ be the number of binary digits of $v$ and set
$$r:=2s^2\bigl(\ell(v)+1\bigr).$$
This is a positive integer. No logarithm or irrational ceiling is evaluated.
3. Allocate $r$ disjoint copies of the entire $C_n$ wire register. Put the classical-basis input $|x\rangle$ in the first copy; initialize the other $n$-wire input registers and every base auxiliary register to zero. For each input position $i$ and each copy $j=2,\ldots,r$, apply CNOT from position $i$ in copy $1$ to position $i$ in copy $j$, with the first wire as control. These gates map the basis input $|x\rangle|0^n\rangle^{\otimes(r-1)}$ to $|x\rangle^{\otimes r}$; this does not assert cloning of arbitrary superpositions. Apply one copy of $C_n$ to each disjoint block. The repeated circuit has $r w(C_n)$ wires and $r g(C_n)+n(r-1)$ ordinary gate occurrences before any separately declared oracle accounting.
4. Concatenate the $r$ copies of the declared output tuple in copy order and measure that tuple at the final readout. For measured strings $z_1,\ldots,z_r$, compute $S=\#\{i:A_n(x,z_i)=1\}$. The single total output predicate returns YES exactly when $2S\ge r(a+b)$, evaluated exactly: if $a=A/B$ and $b=C/D$ with positive denominators, compare $2SBD$ with $r(AD+CB)$. Return NO otherwise.

The output is one full-list repeated circuit and its total classical predicate. Every base gate and oracle call is repeated $r$ times, with queries kept separate from ordinary gates and classical bit costs ([[def-qc-circuit-cost-model]]). The endpoint comparison is classical postprocessing, not an intermediate measurement or coherent amplitude-amplification step. Correctness, uniformity, and resource bounds are separate claims proved by [[thm-qc-bounded-error-amplification-correct]].
