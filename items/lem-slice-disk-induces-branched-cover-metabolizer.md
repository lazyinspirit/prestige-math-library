---
id: lem-slice-disk-induces-branched-cover-metabolizer
kind: lemma
title: A slice disk induces a metabolizer on the branched-cover linking form
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-q-fold-branched-cover-of-a-slice-disk
  - lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball
  - lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer
  - lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
  - def-finite-linking-form-and-metabolizer
  - def-axiom-of-choice
  - def-smooth-and-topological-slice-genus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 8, §8.2, pp. 167–168; the slice-kernel interface and its caveat read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 306–309; complete metabolizer and character-extension argument read
---

## Statement

Assume AC. If a smooth oriented knot $K$ bounds a smooth proper disk $D$ in $B^4$ and $q$ is a prime power, then
$$P_D=\ker\bigl(H_1(\Sigma_q(K);\mathbb Z)\to H_1(W_{D,q};\mathbb Z)\bigr)$$
is a metabolizer for the torsion linking form of $\Sigma_q(K)$.

## Statement references

[[def-q-fold-branched-cover-of-a-slice-disk|The branched cover of a slice disk]]

[[lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball|The branched cover is a rational homology ball]]

[[lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer|The boundary-kernel metabolizer lemma]]

[[def-finite-linking-form-and-metabolizer|The metabolizer convention]]

[[def-smooth-and-topological-slice-genus|The smooth slice-disk convention]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.2, pp. 167–168](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC, a smooth proper slice disk $D$ for $K$, and a prime-power cover degree $q=p^k$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] The branched cover $W_{D,q}$ has boundary $\Sigma_q(K)$ by the disk-cover convention, and it is a compact connected rational homology ball for prime-power $q$. [[def-q-fold-branched-cover-of-a-slice-disk]] [[lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball]]

[F2] For any compact connected oriented rational homology ball with connected boundary, the kernel of boundary inclusion on $H_1$ is a metabolizer for the boundary linking form. [[lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer]]

[F3] The linking form on the finite first homology of a rational homology sphere is symmetric and nonsingular. [[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular]]

[F4] A smooth knot is smoothly slice when it bounds a smooth properly embedded disk in $B^4$. [[def-smooth-and-topological-slice-genus]]

[F5] A metabolizer is a subgroup equal to its orthogonal complement for the finite nonsingular linking form. [[def-finite-linking-form-and-metabolizer]]

## Proof

1.1 By [F1], the boundary of $W_{D,q}$ is the rational homology sphere $\Sigma_q(K)$, and both are compact connected oriented manifolds with the required boundary identification. The kernel of its boundary inclusion is exactly the subgroup $P_D$ displayed in the statement. [F1, F4, given, A1]

2.1 Apply [F2] to $W_{D,q}$ and its boundary. The kernel identified in step 1.1 is self-annihilating for the boundary linking form; [F3] supplies nonsingularity and [F5] the metabolizer convention. Therefore $P_D$ is a metabolizer. [F2, F3, F5, step 1.1] ∎
