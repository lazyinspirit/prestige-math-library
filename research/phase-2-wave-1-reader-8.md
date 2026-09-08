# Step-6a independent reader report — batch 8

Date: 2026-09-08. Run: `phase-2-wave-1`. Batch: `8`.

## Scope opened

- A page: `library/algebraic-geometry/classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface.md`.
- B page: `library/algebraic-geometry/classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples.md`.
- A inventory (48 items):
  `def-classical-affine-algebraic-set-with-empty-boundaries`,
  `lem-classical-zero-locus-ideal-radical-invariance`,
  `thm-classical-affine-zero-loci-form-zariski-closed-sets`,
  `def-classical-vanishing-ideal`,
  `lem-classical-zero-locus-vanishing-ideal-galois-connection`,
  `thm-classical-affine-nullstellensatz-correspondence`,
  `def-classical-affine-variety-interface`,
  `lem-classical-irreducible-space-open-intersection-criterion`,
  `lem-classical-affine-variety-nonempty-opens-dense`,
  `def-classical-affine-coordinate-ring`,
  `thm-classical-affine-variety-prime-coordinate-ring`,
  `thm-classical-polynomial-functions-equal-coordinate-ring`,
  `def-classical-principal-open`,
  `lem-classical-principal-opens-form-affine-basis`,
  `def-classical-regular-function-on-open-set`,
  `lem-classical-regular-functions-locality-and-gluing`,
  `thm-classical-principal-open-coordinate-ring-localization`,
  `lem-classical-affine-algebraic-set-finite-irreducible-components`,
  `def-reduced-finitely-generated-k-algebra-interface`,
  `lem-classical-affine-closed-points-are-maximal-ideals`,
  `thm-classical-affine-global-regular-functions-coordinate-ring`,
  `def-classical-affine-variety-morphism`,
  `def-classical-regular-map-image-and-set-theoretic-fibre`,
  `lem-classical-morphism-inverse-image-of-closed-is-closed`,
  `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`,
  `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence`,
  `lem-classical-affine-morphisms-equal-on-dense-open`,
  `def-classical-germ-and-local-ring`,
  `thm-classical-affine-local-ring-is-localization`,
  `thm-classical-principal-open-is-affine-variety`,
  `def-classical-affine-open-subset`,
  `def-classical-variety-function-field`,
  `lem-classical-regular-functions-on-open-embed-in-function-field`,
  `thm-classical-function-field-independent-of-affine-open`,
  `def-classical-rational-map`,
  `lem-classical-rational-map-equivalence-transitive`,
  `def-classical-rational-map-domain-union`,
  `def-classical-dominant-morphism-and-rational-map`,
  `lem-classical-open-source-morphisms-equal-on-dense-open`,
  `lem-classical-morphisms-glue-on-open-cover`,
  `thm-classical-rational-map-maximal-domain-affine-target`,
  `lem-classical-dominant-rational-maps-compose`,
  `lem-classical-dominant-map-pulls-back-function-fields`,
  `thm-classical-dominant-rational-maps-function-field-embeddings`,
  `def-classical-integral-affine-atlas-and-chartwise-morphism`,
  `lem-classical-integral-affine-charts-have-canonical-common-function-field`,
  `def-classical-birational-equivalence`, and
  `thm-classical-birational-equivalence-iff-function-fields-isomorphic`.
- B inventory (1 item):
  `ex-classical-affine-line-coordinate-local-and-function-field-dictionary`.
- Opened direct external supplier interfaces (35): the strong and weak
  Nullstellensatz, Noetherian/minimal-prime and DC interfaces, polynomial,
  quotient, radical, localization, fraction-field, ideal-correspondence, and
  finite-type interfaces named by the scoped item `deps`. Their exact current
  statements were compared with their uses. No cross-batch dependency is
  declared by `phase-2-wave-1-batch-8.cross-batch-dependencies.json`.

## Reading verdict

The mathematics and interfaces are adequate as currently written.

- The empty-set and zero-ring boundaries are carried consistently through zero
  loci, coordinate rings, polynomial functions, principal localization, and
  the affine-line example.
- The Nullstellensatz-dependent chain explicitly carries AC. The finite
  irreducible-components item explicitly carries DC, matching the current
  minimal-prime supplier.
- The principal-open localization proof avoids cancellation in a possibly
  reduced non-domain: injectivity uses `fa=0`, and surjectivity uses finite
  denominator clearing from radical ideal membership.
- The morphism/rational-map chain checks nonempty domains, representative
  independence, dominance, and composition before field pullback. The
  field-embedding construction uses only finitely many coordinate generators
  and a common nonzero denominator.
- The integral-atlas and birational arguments use common principal affine
  opens and the resulting comparison/cocycle maps; no constructibility claim
  is imported.

## Page verdicts

- A page: pass. Its title, summary, all 48 items, dependency uses, AC/DC
  qualifications, proof contracts, and source locators are consistent.
- B page: pass. Its summary and sole affine-line computation preserve the
  stated characteristic and boundary cases. Its body was read only.

## Edits, defects, and blockers

No content repair was made. No `verification.judge` record was altered. No
uneditable defect was confirmed, so the findings artifact has an empty array.
There is no blocker for this reader pass.

## Checks

- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-8.proof-contracts.json --strict --json` — 49 scoped/checked, 0 errors, 0 warnings.
- Full scoped-item precheck — 32 proof-bearing items, 0 failing.
- Focused reflow/precheck of the zero-locus, principal-localization,
  field-embedding, and birationality proofs — unchanged; 4 checked, 0 failing.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-8.coverage.json` — 1 page, 86 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-8.pages.json --manifest-only` — 49 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-8.pages.json` — 49 items, 0 normalized, 0 errors.
