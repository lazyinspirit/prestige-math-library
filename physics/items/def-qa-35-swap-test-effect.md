---
id: def-qa-35-swap-test-effect
kind: definition
title: "Symmetric and antisymmetric swap-test measurement"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-tensor-register-and-permutation", "lem-qc-tensor-product-basis-and-dimension", "def-qc-density-operator", "def-qc-povm-and-outcome-law", "def-qc-dirac-notation-conversion", "thm-qc-projective-measurement-outcome-law"]
justified_by: ["thm-qa-35-swap-test-measurement-effect"]
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§1.1.3 (operator decompositions and norms), §2.1.2 (density operators), §2.3.1 (measurements), and §3.1.1, Theorem 3.4 (binary state discrimination)."
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space. On $H\otimes H$ define the **swap** $F$ by $F(u\otimes v)=v\otimes u$ and linear extension. Define the symmetric and antisymmetric effects
$$P_+=(I+F)/2,\qquad P_-=(I-F)/2.$$
The “equal” outcome corresponds to $P_+$ and “unequal” to $P_-$. When $H\ne\{0\}$, the following theorem proves well-definedness as a two-outcome projective measurement and calculates its pure-product law. For $H=\{0\}$ the operators are still defined, but no density input or measurement interpretation under the cited nonzero-space convention is asserted.
