---
id: ex-near-unit-floquet-multiplier-is-inconclusive
kind: example
title: "A near-unit multiplier enclosure does not decide stability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - def-validated-periodic-shooting-jet-enclosure
  - alg-floquet-multiplier-cluster-certifier
  - thm-floquet-multiplier-cluster-certificate-soundness
  - thm-orbital-stability-from-certified-floquet-multipliers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
---

## Statement

Suppose a validated transverse multiplier enclosure is the real interval $[0.99,1.01]$. It intersects the unit circle at $1$ and contains both a strictly stable scalar multiplier, for example $0.995$, and a strictly unstable one, for example $1.005$. A cluster count may establish how many multipliers the interval represents, but the strict Floquet separation hypothesis of [[thm-orbital-stability-from-certified-floquet-multipliers]] is not established; the stability verdict is inconclusive.

## Facts & Assumptions

**Given:** The interval enclosure $[0.99,1.01]$ for a non-phase multiplier and the unit-circle separation rule.

[F1] A validated shooting jet encloses a family of exact monodromy matrices and their multiplier data ([[def-validated-periodic-shooting-jet-enclosure]]).

[F2] The cluster procedure certifies algebraic root counts inside a polygon, while orbital stability requires strict non-phase separation from the unit circle ([[alg-floquet-multiplier-cluster-certifier]], [[thm-floquet-multiplier-cluster-certificate-soundness]], [[thm-orbital-stability-from-certified-floquet-multipliers]]).

## Proof
1.1 Both $0.995$ and $1.005$ lie in $[0.99,1.01]$, but the first has modulus less than one and the second has modulus greater than one. Thus the interval alone admits opposite stability classifications, and it also intersects the unit circle at $1$. [given, algebra]

2.1 A contour count can certify the number of roots enclosed without sharpening their location relative to the circle. Since the enclosure does not place every non-phase multiplier strictly inside the unit disk or strictly outside it, the hypotheses required for a stability verdict in [F2] are not met. The sound output is inconclusive. [F1, F2, step 1.1] ∎
