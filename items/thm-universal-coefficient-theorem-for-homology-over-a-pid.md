---
id: thm-universal-coefficient-theorem-for-homology-over-a-pid
title: "The universal coefficient theorem for homology over a PID"
kind: theorem
status: draft
origin: pipeline
deps: ["lem-the-universal-coefficient-edge-map-for-homology-is-well-defined", "lem-the-universal-coefficient-tor-obstruction-map-for-homology", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Let $R$ be a PID, $C$ a chain complex of free right $R$-modules, and $G$ a left $R$-module. Then naturally in $C,G$, $0\to H_n(C)\otimes_RG\to H_n(C\otimes_RG)\to\operatorname{Tor}^R_1(H_{n-1}(C),G)\to0$ is exact.

## Proof

**Given:** the two cycle-boundary short exact sequences of the free PID-complex $C$.

1.1 The cycle and boundary modules are free, hence flat, so tensoring $0\to Z_nC\to C_n\to B_{n-1}C\to0$ remains exact. [given]

2.1 The homology sequence of these degreewise exact rows has edge map $[z]\otimes g\mapsto[z\otimes g]$ and quotient map induced by $d\otimes1$; their kernel and cokernel are respectively $H_n(C)\otimes G$ and $\operatorname{Tor}_1^R(H_{n-1}C,G)$. [step 1.1, algebra] ∎
