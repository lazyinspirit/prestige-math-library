# Frontier 31a — reader report, batch 14

## Scope opened

I read both current draft pages in full:

- `library/scheme-theory/affine-schemes-and-the-structure-sheaf.md` (A),
  including its summary and all 28 listed items.
- `library/scheme-theory/affine-schemes-and-the-structure-sheaf-examples.md`
  (B), including its summary and all 9 listed items.

The A-item inventory was
`def-affine-scheme-spectrum`, `def-structure-presheaf-on-basic-opens`,
`lem-structure-presheaf-basic-open-well-defined`,
`thm-structure-sheaf-affine-scheme`,
`thm-sections-basic-open-affine-scheme`,
`thm-stalk-structure-sheaf-prime-localization`,
`cor-spectrum-with-structure-sheaf-locally-ringed`,
`def-residue-field-scheme-point`, `thm-global-sections-affine-scheme`,
`lem-spectrum-localization-open-immersion`, `def-affine-scheme`,
`def-morphism-affine-schemes-from-ring-map`,
`lem-spectrum-map-stalk-homomorphisms-local`,
`thm-affine-scheme-ring-anti-equivalence`,
`cor-affine-scheme-isomorphism-ring-isomorphism`, `def-closed-point-scheme`,
`lem-classical-points-inside-affine-scheme`,
`def-generic-point-irreducible-closed-subset`, `thm-spectrum-sober`,
`def-reduced-affine-scheme`, `def-integral-affine-scheme`,
`def-nonreduced-infinitesimal-thickening-affine`,
`def-functor-of-points-affine-scheme`,
`thm-affine-schemes-determined-by-functor-of-points`,
`def-dual-numbers-scheme`, `lem-basic-opens-quasi-compact`,
`cor-affine-scheme-quasi-compact`, and
`rem-spec-contravariance-and-points`.

The B-item inventory was `ex-spectrum-field-one-point`,
`ex-spectrum-zero-ring-empty`, `ex-spectrum-integers-generic-and-closed-points`,
`ex-dual-numbers-one-point-nonreduced`,
`ex-spectrum-product-ring-disjoint-union`, `ex-basic-open-affine-line`,
`cex-scheme-not-determined-by-underlying-space`,
`ex-functor-points-affine-line`, and
`cex-nonclosed-scheme-point-no-k-valued-coordinate`.

I also opened the direct dependency closure needed for these claims, including
the spectrum, distinguished-open, localization, stalk, locally-ringed-space,
quotient-spectrum, residue-field, irreducibility, closed-point, compactness,
polynomial, algebra, Yoneda, and integer-prime-classification items. In
particular, I read `lem-sheaf-condition-check-on-basis`,
`thm-prime-spectrum-of-a-quotient-bijection`,
`thm-irreducible-closed-subsets-and-prime-ideals`,
`thm-universal-property-of-localisation`,
`thm-localisation-at-a-prime-is-local`,
`cor-residue-field-of-a-localisation-at-a-prime`,
`cor-prime-spectrum-insensitive-to-nilpotents`,
`cor-principal-localisation-spectrum-is-distinguished-open`,
`thm-prime-spectrum-is-compact`,
`thm-universal-property-of-a-polynomial-ring`, and
`thm-quotient-is-domain-iff-ideal-prime`.

## Source verification

I independently opened the cited primary sources: Stacks Project tags 01HR
(§26.5), 01HX (§26.6), and 00DY (§10.17), and Milne, *Algebraic Geometry*,
pp. 7--8 and 21. Stacks §26.5 verifies the distinguished-open localization
maps, finite covers, sheaf extension, sections, and stalks; §26.6 verifies the
global-sections characterization, anti-equivalence, principal opens, and the
product/disjoint-union route. Stacks 10.17.7 gives
`Spec(R/I) -> V(I)` as a homeomorphism. Milne §10.81--10.83 verifies the
relative functor-of-points convention used here.

## Repairs made

1. `def-nonreduced-infinitesimal-thickening-affine`: added the general
   quotient-spectrum dependency
   `thm-prime-spectrum-of-a-quotient-bijection` and the exact Stacks §10.17
   source. The old nilradical-only dependency did not by itself support the
   stated claim for an arbitrary nilpotent ideal.
2. `ex-dual-numbers-one-point-nonreduced`: replaced the unsupported jump from
   “$(\epsilon)$ is nilpotent” to the reduced-quotient theorem with the
   calculation `Nil(R)=(epsilon)`: elements with nonzero constant term are
   units and the remaining elements square to zero.
3. `cex-scheme-not-determined-by-underlying-space`: narrowed `[F1]` to its
   cited one-point claim and supplied the elementary field argument for the
   reducedness of `Spec k`; the cited example had not itself asserted that
   reducedness.
4. `cex-nonclosed-scheme-point-no-k-valued-coordinate`: made the title and
   refuted statement relative to `$k$`, supplied the domain and quotient
   calculations for `(0)` and `(t)`, and identified a coordinate as a
   `$k$`-algebra map. Added the exact algebra and quotient-domain dependencies
   and regenerated its proof-contract entry.

The proof-contract entries for the three repaired proof-bearing items were
regenerated. No judge stamp was present to remove.

## Uneditable finding and blocker

`items/lem-sheaf-condition-check-on-basis.md`, Proof 1.3, invokes the assumed
basis gluing condition for the family `(r_x)` before Proof 2.1 proves that this
family satisfies the required overlap compatibility. The theorem is true, but
the published proof has an invalid inference order. It is a fatal published
dependency defect for the assigned consumer
`lem-structure-presheaf-basic-open-well-defined`; I could not edit it. It is
recorded in `frontier-31a-reader-findings-14.json`.

## Page verdicts

| Page | Verdict |
| --- | --- |
| A: `affine-schemes-and-the-structure-sheaf` | Mathematics and current source citations support the assigned items, but the page is blocked on the fatal published basis-sheaf dependency proof defect above. |
| B: `affine-schemes-and-the-structure-sheaf-examples` | Pass after the three in-scope repairs. Field, zero-ring, dual-number, product, affine-line, and generic-point boundary cases were checked. |

## Validation

- Reflow and focused precheck: PASS for all three repaired proof-bearing
  items; the changed definition has no phase-format proof to precheck.
- Focused renderer checks: PASS for all three repaired proof-bearing items and
  the changed definition.
- `proof-contract.mjs --strict`: PASS for the three repaired entries and then
  for the full batch contract (24/24).
- `citation-fidelity.mjs`: PASS (27 citations, no absent quotes or widening
  candidates). `boundary-audit.mjs` reported no contradicted dispositions.
- `coverage-checklist.mjs --require-destination`: PASS (1 page, 38 harvested
  results). `git diff --check`: PASS.
- The manifest-only `content-policy` check reports the expected 37
  “already exists” errors because it is a pre-mint scaffold check and this
  batch has already been authored; it is not a post-author content failure.
- Repository-wide `depcheck` still reports six unrelated, pre-existing errors
  (five provenance-applicability entries and one missing page item); it reports
  no batch-14 error.

