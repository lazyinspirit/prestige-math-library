---
id: thm-von-neumann-mean-ergodic-theorem-in-l-two
kind: theorem
title: Von Neumann mean ergodic theorem in L2
status: published
origin: pipeline
landmark: true
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, prop-ergodic-averages-are-well-defined-and-l-p-contractive, lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace, def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.1 and complete proof, printed pp. 35–36"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Theorems 9.5.1 and 9.6.1, printed pp. 85–87"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice.  For a measure-preserving system and
$f\in L^2(\mu;\mathbb C)$,

$$A_nf\longrightarrow P_{\mathcal M}f\quad\text{in }L^2,$$

where $\mathcal M=\{g:g\circ T=g\ \mu\text{-a.e.}\}$ and
$P_{\mathcal M}$ is the orthogonal projection onto $\mathcal M$.  Neither
finite measure, ergodicity, nor invertibility of $T$ is required.

## Facts & Assumptions

**Given:** AC, a measure-preserving system, and complex $f\in L^2$.

[F1] Composition $U_Tg=g\circ T$ is a well-defined linear isometry on complex $L^2$ ([[prop-ergodic-averages-are-well-defined-and-l-p-contractive]]).

[F2] Under AC, Cesaro averages of any linear isometry on a closed complex $L^2$ subspace converge in norm to the orthogonal projection onto its fixed space, even when the isometry is not surjective ([[lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace]], [[def-axiom-of-choice]]).

[F3] The fixed space of $U_T$ is exactly $\mathcal M$ by [[def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace]].

## Proof

**Proof technique:** direct application of the Hilbert-space Cesaro lemma.

1.1 By [F1], $U_T$ is a linear isometry of complex $L^2$.  Its fixed vectors are precisely the classes $g$ with $g\circ T=g$ a.e., namely $\mathcal M$ by [F3]. [F1, F3]

2.1 The operator averages in [F2] satisfy $$\frac1n\sum_{k=0}^{n-1}U_T^kf=\frac1n\sum_{k=0}^{n-1}f\circ T^k=A_nf.$$ Applying [F2] therefore gives $A_nf\to P_{\mathcal M}f$ in $L^2$.  AC is spent exactly in the published projection/Cesaro supplier.  That supplier treats a nonsurjective isometry through its closed range, so no inverse of $T$ or of $U_T$ on all of $L^2$ has been assumed. [F2, step 1.1]

3.1 This argument used neither the pointwise Birkhoff theorem nor any finite-measure or ergodicity hypothesis.  In particular its norm conclusion alone makes no assertion about pointwise convergence of the full sequence. [step 2.1] ∎
