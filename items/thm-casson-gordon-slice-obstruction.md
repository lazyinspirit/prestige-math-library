---
id: thm-casson-gordon-slice-obstruction
kind: theorem
title: Casson–Gordon signature-defect obstruction to sliceness
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - def-finite-linking-form-and-metabolizer
  - def-finite-order-character-of-a-branched-cover
  - lem-casson-gordon-signature-defect-and-vanishing
  - lem-prime-power-branched-cover-homology-is-finite
  - def-axiom-of-choice
  - def-smooth-and-topological-slice-genus
  - lem-slice-disk-induces-branched-cover-metabolizer
justified_by: []
aliases: []
proof_strategy: contrapositive
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Theorem 8.2.1, pp. 167–168; full statement and proof outline read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: Theorem 0.1 / Theorem 1.1, printed pp. 306–309; complete argument through the cited Casson–Gordon vanishing theorem read
    - title: Patrick Gilmer and Charles Livingston, On Surgery Curves for Genus-One Slice Knots
      url: https://msp.org/pjm/2013/265-2/pjm-v265-n2-p06-p.pdf
      locator: §4, printed pp. 412–413; Theorem 16 gives the prime-power character and metabolizer interface
    - title: Stefan Friedl, Higher and Quantum Invariants of Knots
      url: https://epub.uni-regensburg.de/53903/1/phd_thesis.pdf
      locator: §4.3.8, Theorem 4.88; exact statement read, with proof referred to Casson–Gordon
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp. 193–194, Theorem 2 and proof; the slice-disk τ-vanishing implication is stated and derived using the prime-power cover argument
---

## Statement

Assume AC. Let $K\subset S^3$ be a smooth oriented knot and let $q$ be a prime power. If for every metabolizer $P$ of the torsion linking form on $H_1(\Sigma_q(K);\mathbb Z)$ there is a prime-power-order character $\chi:H_1(\Sigma_q(K);\mathbb Z)\to\mathbb Q/\mathbb Z$ vanishing on $P$ with $\sigma(K,\chi)\ne0$, then $K$ is not smoothly slice.

## Statement references

[[def-finite-linking-form-and-metabolizer|Metabolizers of finite nonsingular linking forms]]

[[def-finite-order-character-of-a-branched-cover|Prime-power characters of a branched cover]]

[[lem-casson-gordon-signature-defect-and-vanishing|Vanishing of the signature defect on the disk metabolizer]]

[[lem-prime-power-branched-cover-homology-is-finite|Finiteness of prime-power branched-cover homology]]

[[def-smooth-and-topological-slice-genus|The smooth-sliceness convention]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, Theorem 8.2.1, pp. 167–168](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, a prime-power degree $q$, the linking form on $H_1(\Sigma_q(K);\mathbb Z)$, and the hypothesis that every metabolizer admits a character vanishing on it with nonzero signature defect.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] For prime-power $q$, $H_1(\Sigma_q(K);\mathbb Z)$ is finite, and its torsion linking form is nonsingular. [[lem-prime-power-branched-cover-homology-is-finite]]

[F2] If $K$ is smoothly slice, a disk induces a metabolizer of this form. [[lem-slice-disk-induces-branched-cover-metabolizer]]

[F3] A knot is smoothly slice when it bounds a smooth proper disk in $B^4$. [[def-smooth-and-topological-slice-genus]]

[F4] A metabolizer is a subgroup equal to its orthogonal complement for the finite nonsingular linking form. [[def-finite-linking-form-and-metabolizer]]

[F5] A prime-power-order character is a finite-order homomorphism to $\mathbb Q/\mathbb Z$ whose order is a prime power. [[def-finite-order-character-of-a-branched-cover]]

[F6] For a smooth slice disk and any prime-power-order character vanishing on its induced metabolizer, the specified Casson–Gordon signature defect vanishes; its proof constructs the actual extending disk-exterior coefficient system and proves the full Witt comparison. [[lem-casson-gordon-signature-defect-and-vanishing]]


## Proof

1.1 Prove the contrapositive. Suppose $K$ is smoothly slice, and choose its smooth proper disk $D$. By [F1] its prime-power branched-cover first homology is finite, and by [F2] the disk kernel $P_D$ is a metabolizer of its nonsingular linking form. [A1, F1, F2, F3, given, contrapositive-reduce, assume-hyp, choose]

2.1 Every prime-power-order character vanishing on this particular $P_D$ has $\sigma(K,\chi)=0$ by the now proved vanishing statement [F6]. Therefore the universal metabolizer hypothesis in the Statement fails at $P_D$: there is no such character with nonzero defect. We have proved that smooth sliceness implies the negation of that hypothesis, so contraposition gives the stated obstruction. If the linking form has no metabolizer, smooth sliceness already contradicts [F2]; no independent existence of a metabolizer was assumed. All prime-power quantifiers and the stated smooth and AC scope are retained. [F2, F4, F5, F6, step 1.1, discharge-contrapositive] ∎
