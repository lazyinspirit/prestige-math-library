---
id: rem-lang-neron-proof-dependency-chain
kind: remark
title: Geometric proof dependencies in Lang–Néron
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- thm-lang-neron-finite-generation-modulo-the-trace
- thm-k-k-trace-existence-and-uniqueness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: B. Kahn, Démonstration géométrique du théorème de Lang-Néron, Lemmas 1–3, pp. 1–3
    url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Lang-Neron.pdf
  - title: B. Kahn, Sur le groupe des classes d’un schéma arithmétique, §1 Theorem 5, §3 Theorem 3, and Appendices A–B, pp.
      400–413
    url: https://www.numdam.org/item/BSMF_2006__134_3_395_0.pdf
---

## Remark

Kahn’s geometric proof passes to a smooth finite-type model on which the abelian variety extends to an abelian scheme, compares the Picard group of the total space with that of the generic fiber, and identifies the quotient by the trace through codimension-one Néron–Severi groups. Trace existence with finite kernel now has a local construction by regular and purely inseparable Hom descent, polarization projectors and descending kernels, followed by duality. The remaining local reconstruction still requires complete proofs of Néron–Severi finite generation, finite generation of codimension-one cycles modulo algebraic equivalence, the Picard restriction sequence, and the trace-image statement for algebraically trivial classes. Passing from arbitrary constants to algebraically closed constants also needs the regular-extension trace base-change and rational-point-intersection argument; it is not supplied merely by the existence theorem. Kahn 2006 §3 Theorem 3 is the finite-generation result cited in Kahn 2007 Lemma 3; its proof uses the Néron–Severi theorem, Picard representability, and equivariant de Jong alteration. Kahn 2006 §1 Theorem 1 is a distinct arithmetic class-group theorem whose proof invokes classical Mordell–Weil, Hironaka resolution, and de Jong alteration; those inputs are not silently substituted for the §3 Theorem 3 route.

## Remark references

[[thm-k-k-trace-existence-and-uniqueness]]

[[thm-neron-severi-group-finite-generation]]

[[thm-finite-generation-of-codimension-one-cycles-mod-algebraic-equivalence]]

[Kahn, Lemmas 1–3](https://webusers.imj-prg.fr/~bruno.kahn/preprints/Lang-Neron.pdf)

[Kahn, §1 Theorem 1 and §3 Theorem 3](https://www.numdam.org/item/BSMF_2006__134_3_395_0.pdf)

