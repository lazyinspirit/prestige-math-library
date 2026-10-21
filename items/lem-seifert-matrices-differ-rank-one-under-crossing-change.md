---
id: lem-seifert-matrices-differ-rank-one-under-crossing-change
kind: lemma
title: One crossing change changes a Seifert matrix by rank at most one
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-seifert-pairing-and-matrix
  - alg-seifert-surface-from-diagram
  - thm-seifert-surface-from-diagram-procedure-properties
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - def-regular-oriented-link-diagram
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Proposition 2.3.9, printed pp. 24–25"
    - title: "Signature Invariants Related to the Unknotting Number"
      url: "https://msp.org/pjm/2020/305-1/pjm-v305-n1-p09-p.pdf"
      locator: "§3.2, Theorem 9"
---

## Statement

Assume the full Axiom of Choice. Let $D_+$ and $D_-$ be finite regular oriented diagrams that agree outside one crossing neighborhood and differ inside it by switching which branch is over. Let $V_+$ and $V_-$ be the Seifert matrices obtained from their oriented disk-and-band surfaces. There are corresponding integral bases in which either $V_+=V_-$ or $V_+-V_-=\pm vv^T$ for some integral column vector $v$. In particular, $\operatorname{rank}(V_+-V_-)\le1$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert pairing and its matrix]]

[[alg-seifert-surface-from-diagram|The oriented disk-and-band construction]]

## Facts & Assumptions

**Given:** Full AC, two oriented knot diagrams differing at one crossing, and their Seifert disk-and-band constructions.

[A1] Full AC is the choice-function axiom used by the knot Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] The Seifert construction smooths each crossing by the orientation-compatible pairing and adds one half-twisted band per original crossing. [[alg-seifert-surface-from-diagram]]

[F2] For a knot diagram, the resulting disk-and-band data can be realized as a connected compact oriented embedded spanning surface. [[lem-seifert-bands-embedded-orientable-boundary-correct]]

[F3] In an ordered integral basis, the Seifert matrix has entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, where $a_i^+$ is the positive normal push-off. [[def-knot-seifert-pairing-and-matrix]]

## Proof

**Given:** Full AC, the two diagrams and their prescribed crossing change.


1.1 Switching over and under does not change the oriented smoothing at the distinguished crossing. Thus [F1] gives the same Seifert circles, disk records, and bands at every other crossing. Only the distinguished band changes: its two possible half-twist directions differ by one full twist. By [F2], both disk-and-band constructions give connected embedded oriented spanning surfaces, and each surface retracts to the finite graph with one vertex per disk and one edge per band. [A1, F1, F2, given, construct]

2.1 Let $e$ be the distinguished edge of that graph. If $e$ is a bridge, every graph cycle avoids $e$, so choose the corresponding homology basis outside the changed band; all Seifert-pairing entries are then identical. If $e$ is not a bridge, the graph with $e$ removed is connected. Choose a spanning tree of that graph; its fundamental cycles, together with the fundamental cycle using $e$, form an integral homology basis. All basis curves except the last can be represented disjoint from the distinguished band. [F1, step 1.1, construct]

3.1 The crossing change is supported in a ball disjoint from every other band and disk. Hence the basis curves avoiding $e$, and their positive push-offs, have identical linking numbers before and after the change. Their pairings with the last basis curve also remain the same, because the other curve and its push-off miss that ball. The last curve passes once through the distinguished band; changing the band by a full twist adds one signed meridional turn to its positive push-off about its core, so its self-linking in [F3] changes by exactly $+1$ or $-1$. Thus only one diagonal entry changes. The matrix difference is zero in the bridge case and is $\pm vv^T$ in the non-bridge case, so its rank is at most one. [F2, F3, step 2.1, algebra] ∎

## Sources

[[def-knot-seifert-pairing-and-matrix]]

[[lem-seifert-bands-embedded-orientable-boundary-correct]]
