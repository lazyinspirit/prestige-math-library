---
id: rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof
kind: remark
title: The general Bernstein PBW construction and source boundary
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
- thm-hh-affine-hecke-general-root-data-bernstein-pbw
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: Maarten Solleveld, Affine Hecke Algebras and Their Representations
    url: https://arxiv.org/pdf/2009.03007
    locator: §1.3, Definition 1.6 and equation (1.16), PDF pp. 9–10; §1.4, Theorems 1.8 and 1.10, PDF pp. 10–12. The survey
      refers the associativity and basis proofs to Lusztig.
  - title: Dan Ciubotaru, Tutorial on Affine Hecke Algebras
    url: https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf
    locator: §3, Theorem 3.1, PDF p. 4. The Bernstein–Lusztig basis theorem is stated with its proof referred to the cited
      source.
---

## Remark

The general Bernstein PBW obligation is now supplied locally in [[thm-hh-affine-hecke-general-root-data-bernstein-pbw]]. Its proof begins with the signed-alcove basis, constructs multiplicative Bernstein elements, calculates both cross-relations by a finite deletion/reflection sum, and proves both ordered bases and the Iwahori–Matsumoto presentation isomorphism. The canonical root-datum geometry and the exceptional wall-parameter attachment are explicit suppliers. The formal presentation with an arbitrary unattached second scalar is not identified with a previously fixed affine parameter function.

The native author's source report and escalation are preserved in the owner completion before archive. Solleveld and Ciubotaru state the general theorem with proof referred elsewhere. The completion uses Görtz's full alcove-walk treatment and supplies the explicit local arguments; a named external theorem is not a proof supplier. This remark is context, and consumers use the proved theorem rather than this remark. All current carriers remain draft pending native review.
