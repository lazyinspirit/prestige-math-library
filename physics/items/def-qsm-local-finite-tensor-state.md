---
id: def-qsm-local-finite-tensor-state
kind: definition
title: Finite tensor density, observable and measurement language
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qc-density-operator
  - def-qc-tensor-register-and-permutation
dependency_roles:
  def-qc-density-operator: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 2, §§2.3–2.3.1
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix an integer $q\ge1$, let $V=\mathbb C^q$ with its standard ordered
orthonormal basis $(|j\rangle)_{j=1}^q$, and use the inner-product convention
that is linear in the first argument. For each integer $N\ge0$, write
$V_N=V^{\otimes N}$ with the displayed factor order; $V_0=\mathbb C$.
The lexicographically ordered product vectors form the chosen basis of
$V_N$, as in [[def-qc-tensor-register-and-permutation]].

A **finite tensor density** on $V_N$ is a density operator in the exact
root-library sense of [[def-qc-density-operator]]: a nonnegative endomorphism
$\rho$ with $\operatorname{Tr}\rho=1$. In the standard column coordinates
this means $\rho=\rho^*$ and $x^*\rho x\ge0$ for every $x$.

A **bounded observable matrix** on $V_N$ is a Hermitian matrix $A=A^*$,
with operator norm $\|A\|_{\mathrm{op}}=\sup_{\|x\|=1}\|Ax\|$. Its
mathematical expectation functional in $\rho$ is
$\omega_\rho(A)=\operatorname{Tr}(\rho A)$. This is a finite matrix trace
pairing; its physical interpretation is supplied separately by a measurement
postulate.

A **finite POVM** with $r\ge1$ outcomes is a family
$M_1,\ldots,M_r$ of nonnegative matrices on $V_N$ with
$\sum_{a=1}^r M_a=I$. Each $M_a$ is an **effect**, meaning $0\le M_a\le I$;
the upper bound follows because $I-M_a=\sum_{b\ne a}M_b\ge0$. The numbers
$\operatorname{Tr}(\rho M_a)$ are its finite trace pairings. They are
nonnegative and normalized when read as outcome probabilities under the
adopted physical Born rule. Here $M\ge0$ means $M=M^*$ and
$x^*Mx\ge0$ for every column vector $x$. This definition alone does not
adopt the physical probability rule.
