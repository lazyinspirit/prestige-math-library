# frontier-30 reader-12 report

Date: Friday, September 4, 2026.
Batch: `12`.
Page pair: `morphisms-local-rings-and-rational-maps-of-affine-varieties` / `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`.

## Opened scope

Artifacts opened from `research/` and repo control docs:
- `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`
- `research/frontier-30-dispatch/reader-reader-12.prompt.md`
- `research/frontier-30-beta-12.task.md`
- `research/frontier-30-batch-12.pages.json`
- `research/frontier-30-batch-12.coverage.json`
- `research/frontier-30-batch-12.notes.md`
- `research/frontier-30-batch-12.proof-contracts.json`
- `research/frontier-30-step6-hash-12-pre.json`
- `research/plan-algebraic-geometry-track.md` (AV-2 block)
- live run state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`

Assigned pages opened:
- `library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties.md`
- `library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties-examples.md`

Assigned A items opened:
- `def-regular-function-classical-variety`, `lem-regular-functions-form-sheaf-classical`, `thm-global-regular-functions-affine-variety-coordinate-ring`, `def-morphism-classical-varieties`, `def-regular-map-image-and-fibre-classical`, `thm-affine-morphisms-coordinate-ring-anti-equivalence`, `cor-affine-algebraic-set-coordinate-duality-complete`, `lem-morphism-equality-on-dense-open`, `def-germ-and-local-ring-classical-variety`, `thm-local-ring-affine-variety-localization`, `def-residue-field-classical-point`, `def-affine-open-subset-classical-variety`, `def-function-field-variety`, `thm-function-field-independent-affine-open`, `def-rational-function-regular-at-point`, `def-rational-map-varieties`, `lem-rational-map-equivalence-transitive`, `def-domain-of-definition-rational-map`, `def-dominant-morphism-and-rational-map`, `lem-dominant-map-pullback-function-fields`, `thm-rational-maps-to-affine-variety-function-field`, `def-birational-equivalence-varieties`, `thm-birational-equivalence-function-fields`

Assigned B items opened:
- `ex-polynomial-map-coordinate-pullback`, `ex-hyperbola-is-multiplicative-group-variety`, `ex-rational-parametrization-circle-conic`, `cex-rational-map-with-indeterminacy`, `cex-birational-does-not-imply-isomorphic`, `ex-local-ring-affine-line-at-origin`, `cex-regular-bijection-not-isomorphism-cusp`

Dependency items opened to verify the current claims:
- `def-affine-variety-classical`
- `def-coordinate-ring-affine-algebraic-set`
- `def-field-of-fractions`
- `def-localisation-at-a-prime-ideal`
- `def-principal-open-classical-variety`
- `def-ring-characteristic`
- `def-vanishing-ideal-affine-set`
- `lem-density-nonempty-open-affine-variety`
- `lem-maximal-ideals-are-points-over-algebraically-closed-field`
- `lem-principal-opens-form-affine-basis`
- `thm-affine-algebraic-sets-coordinate-duality`
- `thm-affine-variety-prime-coordinate-ring`
- `thm-coordinate-ring-principal-open`
- `thm-field-of-fractions-is-a-field-and-the-domain-embeds`
- `thm-localisation-at-a-prime-is-local`
- `thm-regular-functions-on-affine-algebraic-set`
- `prop-localisation-zero-equality-and-kernel-criteria`
- `thm-zariski-closed-sets-affine-space`
- `cor-residue-field-of-a-localisation-at-a-prime`

Coverage sources opened independently:
- Milne, *Algebraic Geometry* (`AG.pdf`)
- Arapura, *Notes on Basic Algebraic Geometry* (`algeom.pdf`)
- Artin, *Notes for a Course in Algebraic Geometry* (`ag-jan26-2022.pdf`)

## Repairs

1. `items/thm-local-ring-affine-variety-localization.md`
   Repaired step 2.2. Equality in the localization only yields `t(au-bs)=0`, so the proof had to pass to the common principal open where the extra clearing factor `t` is also nonzero before dividing and concluding `a/s=b/u` as functions.

2. `items/thm-affine-morphisms-coordinate-ring-anti-equivalence.md`
   Replaced KaTeX-invalid pullback notation `^\*` by `^*`.

3. `items/lem-morphism-equality-on-dense-open.md`
   Replaced KaTeX-invalid pullback notation `^\*` by `^*`.

4. `items/lem-dominant-map-pullback-function-fields.md`
   Replaced KaTeX-invalid pullback notation `^\*` by `^*`.

5. `items/thm-rational-maps-to-affine-variety-function-field.md`
   Replaced KaTeX-invalid pullback notation `^\*` by `^*` and adopted the canonical precheck step numbering (`2.1` through `6.1`) so the stored proof matches the checker's repaired phase structure.

6. `items/thm-birational-equivalence-function-fields.md`
   Replaced KaTeX-invalid pullback notation `^\*` by `^*`.

7. `research/frontier-30-batch-12.proof-contracts.json`
   Updated the local-ring contract to reflect the repaired common-open argument and refreshed the rational-maps contract so its citation text and step map match the current item bytes.

## Confirmed defects left unchanged

1. `items/cex-rational-map-with-indeterminacy.md:28-32`
   Nonfatal citation defect. The proof invokes `[[lem-morphism-equality-on-dense-open]]` on an arbitrary neighbourhood inside `\mathbf A_k^2`, but that cited lemma only states equality for morphisms defined on a whole classical affine variety. The counterexample claim is correct, but the cited support is not exact. This B-page item is out of reader edit scope.

2. `research/frontier-30-batch-12.notes.md:4-6,245,265,370`
   The notes file records source reopenings and authoring activity on Saturday, September 5, 2026, which is in the future relative to the applicable current date for this dispatch, Friday, September 4, 2026. I did not edit notes outside the allowed Step-6 scope.

## Page verdicts

- `morphisms-local-rings-and-rational-maps-of-affine-varieties`: pass on current bytes after the localization-step repair and the KaTeX/precheck cleanup.
- `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`: one nonfatal outstanding citation defect in `cex-rational-map-with-indeterminacy`; the other current example bodies read coherently.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/{thm-local-ring-affine-variety-localization,thm-affine-morphisms-coordinate-ring-anti-equivalence,lem-morphism-equality-on-dense-open,lem-dominant-map-pullback-function-fields,thm-rational-maps-to-affine-variety-function-field,thm-birational-equivalence-function-fields}.md`
  `thm-local-ring-affine-variety-localization` and `thm-rational-maps-to-affine-variety-function-field` reflowed; the other four changed items were already stable.

- `node tools/tsx-run.mjs tools/precheck.mts items/{thm-local-ring-affine-variety-localization,thm-affine-morphisms-coordinate-ring-anti-equivalence,lem-morphism-equality-on-dense-open,lem-dominant-map-pullback-function-fields,thm-rational-maps-to-affine-variety-function-field,thm-birational-equivalence-function-fields}.md`
  Pass, `6 checked, 0 failing`.

- `node tools/proof-contract.mjs research/frontier-30-batch-12.proof-contracts.json --strict`
  Pass, `11/11 item(s) checked`.

- `node tools/rendercheck.mjs library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties.md library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties-examples.md items/{def-regular-function-classical-variety,lem-regular-functions-form-sheaf-classical,thm-global-regular-functions-affine-variety-coordinate-ring,def-morphism-classical-varieties,def-regular-map-image-and-fibre-classical,thm-affine-morphisms-coordinate-ring-anti-equivalence,cor-affine-algebraic-set-coordinate-duality-complete,lem-morphism-equality-on-dense-open,def-germ-and-local-ring-classical-variety,thm-local-ring-affine-variety-localization,def-residue-field-classical-point,def-affine-open-subset-classical-variety,def-function-field-variety,thm-function-field-independent-affine-open,def-rational-function-regular-at-point,def-rational-map-varieties,lem-rational-map-equivalence-transitive,def-domain-of-definition-rational-map,def-dominant-morphism-and-rational-map,lem-dominant-map-pullback-function-fields,thm-rational-maps-to-affine-variety-function-field,def-birational-equivalence-varieties,thm-birational-equivalence-function-fields,ex-polynomial-map-coordinate-pullback,ex-hyperbola-is-multiplicative-group-variety,ex-rational-parametrization-circle-conic,cex-rational-map-with-indeterminacy,cex-birational-does-not-imply-isomorphic,ex-local-ring-affine-line-at-origin,cex-regular-bijection-not-isomorphism-cusp}.md`
  Pass, `32 file(s)` clean.

- `node tools/content-policy.mjs research/frontier-30-batch-12.pages.json`
  Pass, `30 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-12.pages.json`
  Expected phase-mismatch failure on current authored bytes: every batch-12 item now already exists on disk, so the scaffold-only minting check is no longer the relevant gate.

- `git diff --check -- items/thm-local-ring-affine-variety-localization.md items/thm-affine-morphisms-coordinate-ring-anti-equivalence.md items/lem-morphism-equality-on-dense-open.md items/lem-dominant-map-pullback-function-fields.md items/thm-rational-maps-to-affine-variety-function-field.md items/thm-birational-equivalence-function-fields.md research/frontier-30-batch-12.proof-contracts.json`
  Pass.

## Blockers

- No mathematical blocker remains inside the editable A-item scope.
- Clean Step-6 closure is still blocked by the uneditable B-item citation defect in `cex-rational-map-with-indeterminacy`.
- The batch notes file also carries future-dated provenance text relative to Friday, September 4, 2026, but that artifact is outside the permitted repair scope for this dispatch.
