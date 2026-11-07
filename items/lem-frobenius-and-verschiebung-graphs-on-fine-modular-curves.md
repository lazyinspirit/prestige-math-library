---
id: lem-frobenius-and-verschiebung-graphs-on-fine-modular-curves
kind: lemma
title: Frobenius and Verschiebung graphs on a fine modular curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-relative-frobenius-and-verschiebung-of-an-elliptic-family
- thm-smooth-local-standard-form
- thm-etale-locally-standard-etale
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Pierre Deligne, Formes modulaires et représentations ℓ-adiques
    url: https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf
    locator: §4, Frobenius and characteristic-p correspondences; only the two explicitly constructed graphs are asserted below.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is assumed by the Frobenius and smooth-coordinate suppliers.
---

## Statement

Assume AC. Let p be prime, N≥3 with p∤N, and let Y/F_p be a smooth fine full-level-N modular curve with universal framed elliptic curve `(E,α)`. Write `F_Y` for absolute Frobenius on Y and `D_p` for the level-change automorphism `(E,α)↦(E,α∘[p])`. The two pairs of maps

`Y → Y×Y`, `y↦(y,F_Y(y))`, and `y↦(F_Y(y),D_p(y))`

are families of degree-p isogenies: the first is relative Frobenius and the second is Verschiebung, with their induced level frames. Each projection is finite flat, of degree one or p. These give two explicit characteristic-p correspondence graphs. No claim is made that they exhaust the rank-p subgroup moduli, that they occur with specified scheme-theoretic multiplicities, or that their cohomological sum is the Hecke operator.

## Facts & Assumptions

**Given:** AC, p, N and the smooth fine modular curve Y with its universal framed family.

[F1] Relative Frobenius and Verschiebung on an elliptic family in characteristic p are finite flat of degree p, satisfy `VF=FV=[p]`, and induce isomorphisms on N-torsion for p∤N. [[lem-relative-frobenius-and-verschiebung-of-an-elliptic-family]]

[F2] A smooth relative curve has local étale coordinates, and the relative Frobenius of an étale map is an isomorphism on standard étale charts. [[thm-smooth-local-standard-form]] [[thm-etale-locally-standard-etale]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** functoriality of relative Frobenius and level frames.

1.1 Apply [F1] to E/Y. Its relative Frobenius `F_E:E→E^(p)` has rank-p finite flat kernel and carries α isomorphically to a full frame on E^(p). The Frobenius twist `E^(p)` is the pullback of E along absolute Frobenius F_Y, and the induced frame is the pullback of α: relative Frobenius on the constant source `(Z/N)²_Y` is the identity on its component labels. Thus the framed target is classified by F_Y. This gives the first graph and its family of p-isogenies. [F1, F3, given, construct, algebra]

2.1 By [F1], `V:E^(p)→E` is a degree-p finite flat isogeny. On the frame α^(p)=F_Eα it acts as `Vα^(p)=VF_Eα=[p]α`. Hence its source is classified by F_Y and its target by the level-changed framed curve `(E,α∘[p])`, classified by D_p. The inverse level change by the inverse of p modulo N shows D_p is an automorphism. This gives the second graph with its Verschiebung isogeny. [F1, F3, step 1.1, given, construct, algebra]

3.1 The absolute Frobenius F_Y is finite flat of degree p: by [F2], locally on the smooth curve Y it is the base change of `F_p[t^p]⊂F_p[t]`, which is finite free of rank p. The other projections of the two pairs are the identity and D_p, both isomorphisms. Therefore every projection is finite flat with the asserted degrees. The constructions exhibit only the two stated families; no classification or multiplicity assertion about the whole p-isogeny moduli follows. [F2, F3, step 1.1, step 2.1, given, algebra] ∎

## Source and authoring record

These are characteristic-p graph families of actual finite flat isogenies. They do not by themselves prove the Eichler–Shimura congruence or a cohomological Hecke relation.
