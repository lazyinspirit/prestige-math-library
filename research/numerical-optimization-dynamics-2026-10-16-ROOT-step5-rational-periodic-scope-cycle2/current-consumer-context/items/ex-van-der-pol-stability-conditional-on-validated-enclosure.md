---
id: ex-van-der-pol-stability-conditional-on-validated-enclosure
kind: example
title: "Conditional van der Pol stability from a validated enclosure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - alg-validated-periodic-orbit-corrector
  - thm-validated-periodic-orbit-certificate-soundness
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
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
---

## Statement

For the van der Pol system $\dot x=y$, $\dot y=\mu(1-x^2)y-x$, fix $\mu=1$. If a future run of [[alg-validated-periodic-orbit-corrector]] certifies a positive-period nonconstant orbit, and pairwise disjoint Floquet cluster polygons have counts summing to $2$, with one polygon containing multiplier $1$ at count one and the other count-one polygon strictly inside the unit disk, then that certified orbit is orbitally asymptotically stable. This example states a conditional implication only; it supplies no computed interval, orbit, or numerical certificate.

## Facts & Assumptions

**Given:** The parameter value and the hypothetical successful root and cluster certificate records stated above.

[F1] A successful `validated-root` corrector record includes a complete Krawczyk partition with one unique-root box and every other box root-free, outward residual/Jacobian bounds, a nonsingular preconditioner, strict inclusion and a separate contraction bound, and a field component excluding zero. Together with its successful validated trajectory/monodromy jet, these certify a unique phase-fixed nonconstant periodic orbit in its box ([[alg-validated-periodic-orbit-corrector]], [[thm-validated-periodic-orbit-certificate-soundness]]).

[F2] The Floquet cluster theorem certifies the algebraic multiplier counts for every matrix in the validated family ([[alg-floquet-multiplier-cluster-certifier]], [[thm-floquet-multiplier-cluster-certificate-soundness]]).

[F3] A complete cluster family with a single neutral multiplier and all other clusters strictly inside the unit disk implies orbital asymptotic stability ([[thm-orbital-stability-from-certified-floquet-multipliers]]).

## Proof
1.1 Under the stated hypothetical corrector output, [F1] supplies the exact periodic orbit and a monodromy matrix in the enclosure family. [F1, given]

2.1 The assumed cluster certificates apply to that matrix by [F2]. The van der Pol field is polynomial and hence $C^2$. The neutral multiplier cannot be on a certified polygon boundary, so it is interior to its count-one polygon. The other filled polygon is compact and lies strictly inside the unit disk, so its maximum modulus $r$ satisfies $r<1$; take $\sigma=1-r>0$. The two counts sum to the state dimension $2$, giving the complete cluster hypotheses of [F3], so the orbit is orbitally asymptotically stable. No numerical conclusion is claimed without those certificates. [F2, F3, step 1.1, given] ∎
