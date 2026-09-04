# frontier-29 reader-14 report

Date: Tuesday, September 1, 2026.
Batch: `14`.
Page pair: `presheaves-sheaves-stalks-and-sheafification` / `presheaves-sheaves-stalks-and-sheafification-examples`.

## Opened scope

Artifacts opened from `research/`:
- `frontier-29-reader.task.md`
- `frontier-29-dispatch/reader-reader-14.prompt.md`
- `frontier-29-batch-14.pages.json`
- `frontier-29-batch-14.coverage.json`
- `frontier-29-batch-14.notes.md`
- `frontier-29-batch-14.proof-contracts.json`
- live run state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`

Assigned pages opened:
- `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification.md`
- `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md`

Assigned A items opened:
- `def-open-set-category-topological-space`, `def-presheaf-on-topological-space`, `def-section-restriction-and-global-section`, `def-morphism-of-presheaves`, `def-separated-presheaf`, `def-sheaf-on-topological-space`, `lem-sheaf-section-over-empty-set-terminal`, `thm-sheaf-equalizer-condition`, `lem-sheaf-condition-check-on-basis`, `def-presheaf-of-groups-rings-modules`, `lem-forgetful-sheaf-compatibility`, `def-stalk-of-presheaf`, `lem-germ-equivalence-relation`, `def-germ-of-section`, `lem-section-zero-if-all-germs-zero`, `lem-morphisms-of-sheaves-determined-by-stalks`, `thm-sheaf-morphism-isomorphism-stalkwise`, `def-etale-space-of-sheaf-of-sets`, `thm-sheaves-as-local-homeomorphisms`, `def-presheaf-plus-construction`, `lem-first-plus-construction-is-separated`, `lem-second-plus-construction-is-sheaf`, `def-sheafification`, `thm-sheafification-universal-property`, `thm-sheafification-preserves-stalks`, `cor-sheafification-idempotent`, `def-subsheaf`, `lem-image-sheaf-is-sheafification-presheaf-image`, `rem-sections-not-determined-by-single-stalk`

Assigned B items opened:
- `ex-sheaf-continuous-real-functions`, `ex-sheaf-locally-constant-functions`, `cex-presheaf-bounded-continuous-functions-not-sheaf`, `cex-constant-presheaf-not-sheaf-disconnected-open`, `ex-skyscraper-set-sheaf-stalks`, `ex-extension-by-empty-outside-open`, `cex-objectwise-image-not-sheaf`, `ex-germs-of-continuous-functions`, `ex-empty-space-unique-sheaf-sections`

Published dependency items opened:
- `def-category`
- `def-topological-space`
- `def-functor-and-contravariant-functor`
- `prop-sets-and-functions-form-category-set`
- `def-natural-transformation`
- `def-equalizers-and-coequalizers`
- `def-topology-basis-subbasis`
- `prop-groups-and-homomorphisms-form-category-grp`
- `prop-rings-and-homomorphisms-form-category-ring`
- `prop-modules-and-homomorphisms-form-category-rmod`
- `def-neighbourhood-top`
- `def-filtered-category-and-filtered-colimit`
- `def-equivalence-relation`
- `lem-equality-in-a-filtered-colimit-of-sets-is-eventual`
- `def-group`
- `def-local-homeomorphism`

## Repairs

1. `def-presheaf-of-groups-rings-modules`
   Fixed the module clause to mean left `$R$`-modules for a fixed ring `$R$`, and replaced the false "zero section" language for arbitrary groups with the correct identity-section/additive-notation wording.

2. `lem-forgetful-sheaf-compatibility`
   Aligned the statement, givens, and proof with the repaired fixed-ring module convention.

3. `lem-section-zero-if-all-germs-zero`
   Corrected the cited structural fact: the proof now relies on the identity section of a sheaf of groups, written as `0` only after choosing additive notation.

4. `thm-sheaf-equalizer-condition`
   Repaired the reverse implication. The previous proof incorrectly concluded injectivity from "an equalizer is a set map"; the current proof uses the equalizer universal property on a singleton to derive locality.

5. `thm-sheaves-as-local-homeomorphisms`
   Made the local-homeomorphism notion explicit inside the item and replaced the undefined fibre notation `E_x` with the correct `x=q(e)` formulation.

6. `ex-skyscraper-set-sheaf-stalks`
   Narrowed the off-support stalk claim to points admitting an open neighbourhood disjoint from `x_0`. The previous unrestricted statement was false on non-`T_1` spaces.

7. `ex-empty-space-unique-sheaf-sections`
   Added the missing `def-topological-space` dependency and corrected the citation for the fact that `\varnothing` has only one open subset.

8. `research/frontier-29-batch-14.proof-contracts.json`
   Regenerated the six affected proof-contract rows so the citations and derivations match the repaired current bytes.

## Defects checked but left unchanged

- No remaining editable mathematical defect was found in the other assigned items.
- No uneditable defect was confirmed in an assigned page, a published dependency, or another batch item/page.

## Page verdicts

- `presheaves-sheaves-stalks-and-sheafification`: pass on current bytes after the module, equalizer, group-identity, and local-homeomorphism repairs.
- `presheaves-sheaves-stalks-and-sheafification-examples`: pass on current bytes after the skyscraper-stalk and empty-space citation repairs.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <7 changed item files>`: completed; the final bytes are stable after reflow.
- `node tools/tsx-run.mjs tools/precheck.mts <7 changed item files>`: pass, `6` proof-bearing changed items checked and `0` failing.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-14.proof-contracts.json <6 changed proof-bearing ids>`: regenerated all `6`, skipped `0`.
- `node tools/proof-contract.mjs research/frontier-29-batch-14.proof-contracts.json --strict`: pass, `24/24` scoped items checked.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-14.proof-contracts.json --items-dir items --fail-on-missing-quote`: pass, `60` citations, no missing quote, no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-29-batch-14.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`: pass, no contradicted disposition and no template-reuse cluster.
- Initial `rendercheck` exposed multiline-display rendering errors in `thm-sheaf-equalizer-condition` and `ex-skyscraper-set-sheaf-stalks`; I collapsed those displays to one source line, reran focused `reflow`/`precheck`, regenerated the two contract rows, and the final `node tools/rendercheck.mjs <7 changed items> <2 assigned pages>` passed cleanly.
- `node tools/content-policy.mjs research/frontier-29-batch-14.pages.json`: pass, `38` scoped items, `0` errors, `0` warnings.
- `git diff --check -- <touched files>`: pass.

## Blockers

- No mathematical blocker remains inside the editable Step-6 scope.
- The live autopilot controller still reports run `frontier-23`; per dispatch limits I recorded that state but did not attempt to steer workflow state or rewrite run-level control artifacts.
