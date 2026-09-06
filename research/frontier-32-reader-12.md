# Frontier-32, batch 12 — independent reader report

## Scope opened

Read the dispatch task, current Batch-12 manifest, coverage receipt, notes,
proof contracts, and all four current library pages. The pages and their current
inventories are:

- `presheaves-sheaves-stalks-and-sheafification` (A, draft): 29 items —
  `def-open-set-category-topological-space`,
  `def-presheaf-on-topological-space`,
  `def-section-restriction-and-global-section`,
  `def-morphism-of-presheaves`, `def-separated-presheaf`,
  `def-sheaf-on-topological-space`,
  `lem-sheaf-section-over-empty-set-terminal`,
  `thm-sheaf-equalizer-condition`, `lem-sheaf-condition-check-on-basis`,
  `def-presheaf-of-groups-rings-modules`,
  `lem-forgetful-sheaf-compatibility`, `def-stalk-of-presheaf`,
  `lem-germ-equivalence-relation`, `def-germ-of-section`,
  `lem-section-zero-if-all-germs-zero`,
  `lem-morphisms-of-sheaves-determined-by-stalks`,
  `thm-sheaf-morphism-isomorphism-stalkwise`,
  `def-etale-space-of-sheaf-of-sets`, `thm-sheaves-as-local-homeomorphisms`,
  `def-presheaf-plus-construction`,
  `lem-first-plus-construction-is-separated`,
  `lem-second-plus-construction-is-sheaf`, `def-sheafification`,
  `thm-sheafification-universal-property`,
  `thm-sheafification-preserves-stalks`, `cor-sheafification-idempotent`,
  `def-subsheaf`, `lem-image-sheaf-is-sheafification-presheaf-image`, and
  `rem-sections-not-determined-by-single-stalk`.
- `presheaves-sheaves-stalks-and-sheafification-examples` (B, published):
  9 examples/counterexamples — `ex-sheaf-continuous-real-functions`,
  `ex-sheaf-locally-constant-functions`,
  `cex-presheaf-bounded-continuous-functions-not-sheaf`,
  `cex-constant-presheaf-not-sheaf-disconnected-open`,
  `ex-skyscraper-set-sheaf-stalks`, `ex-extension-by-empty-outside-open`,
  `cex-objectwise-image-not-sheaf`, `ex-germs-of-continuous-functions`, and
  `ex-empty-space-unique-sheaf-sections`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type` (A, draft): 33
  items, from
  `def-classical-algebraic-prevariety-regular-maps-and-varieties` through
  `rem-topological-versus-scheme-theoretic-subspace`, including the affine
  gluing, closed-immersion, reduction, finite-type, classical-comparison, and
  scheme-theoretic-image results listed in the current manifest.
- `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` (B,
  draft): 9 items — `ex-projective-line-by-gluing-affines`,
  `ex-doubled-origin-nonseparated-scheme`,
  `ex-closed-subscheme-double-origin-point`, `ex-reduction-dual-numbers`,
  `cex-closed-subset-does-not-determine-closed-subscheme`,
  `ex-affine-n-space-over-arbitrary-base`,
  `cex-locally-finite-type-not-finite-type`,
  `cex-finite-type-not-finite-presentation-nonnoetherian-base`, and
  `ex-scheme-theoretic-image-dense-open-immersion`.

All 34 external direct dependencies were opened as well: the category,
topology, presheaf, filtered-colimit, affine-scheme, gluing, morphism,
quasi-compactness, reducedness, finite-type, tensor-product, and
classical-point interfaces named by the manifest. The exact statements used by
the scheme arguments were checked against the current affine anti-equivalence,
global-sections, localization, and local-ringed-space items.

Current coverage locators reviewed were Vakil Chapter 3; Stacks *Sheaves on
Spaces* §§2–20; Vakil Chapters 5–7; Stacks *Schemes* §§7–14 and 19–24; Stacks
*Morphisms of Schemes* §§2, 4, 6, 14, 15, and 22; and Milne Chapter 5 and
Chapter 10 §p/10.158. I also opened the cited live Stacks targets 01J3, 01IQ,
01KP, 01T2, 01TY, and 01R5 while checking the reduction, closed-subscheme,
separation, finite-type, finite-presentation, and image claims.

## Repairs made

- `items/def-reduction-of-scheme.md`: replaced the false global-sections
  description of the nilradical ideal with the correct local one: its germs
  are nilpotent, equivalently its sections are locally nilpotent. An infinite
  disjoint union with unbounded nilpotence orders shows why globally nilpotent
  sections are not enough.
- `items/def-affine-overlap-separation-condition.md`: restored the missing
  backslash in `\mathbin{\otimes}`, so the displayed canonical ring map is
  well formed.
- `items/thm-classical-varieties-equivalent-integral-separated-finite-type-schemes.md`:
  made the title retain the separated hypothesis already present in the
  statement and manifest. Without it, the title overstates the comparison.
- `items/cex-finite-type-not-finite-presentation-nonnoetherian-base.md` and
  `research/frontier-32-batch-12.proof-contracts.json`: split the two distinct
  cited definitions formerly sharing `F1` into `F1` and `F2`, and updated the
  contract's citation uses and derivation inputs. This removes the stale
  contract-to-proof mismatch.

During the review the current in-flight counterexamples also acquired their
explicit `proof_strategy: direct` fields and phase bodies. They now pass
precheck; they are treated as repaired current-disk work rather than escalated
findings.

No changed item had a stale `verification.judge` record to remove. Definitions
and the title repair do not carry proof contracts; the only proof-bearing repair
above has its contract updated.

## Verification

- Reflow was run for every item changed by this review.
- Focused precheck on the 40 proof-bearing current Batch-12 items: PASS, 40
  checked and 0 failing.
- Focused precheck on the individually changed proof item: PASS.
- `node tools/proof-contract.mjs research/frontier-32-batch-12.proof-contracts.json --strict`:
  PASS, 16/16 checked, 0 errors and 0 warnings.
- `node tools/content-policy.mjs research/frontier-32-batch-12.pages.json`:
  PASS, 80 scoped items, 0 errors and 0 warnings.
- Coverage checklist: 104 harvested results, 0 errors; the only warning is the
  pre-existing, documented zero-yield advisory for the published presheaf page.
- Source-fetch check: PASS, 7/7 sources verified.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`:
  PASS (`OK`).

## Verdicts and blockers

- Presheaves/sheaves A: pass. The equalizer, germ, stalkwise-isomorphism,
  étalé-space, plus, and image-sheaf routes retain their hypotheses and
  directions.
- Presheaves/sheaves B: pass. The bounded-function, constant-presheaf,
  objectwise-image, and empty-space boundary examples are correctly stated.
- Schemes A: pass after the repairs above. The affine-overlap condition is read
  with its common affine base, and the classical comparison is restricted to
  irreducible classical varieties and integral separated finite-type schemes.
- Schemes B: pass. The quotient, dual-number, finite-type, and dense-open
  calculations respect their stated base, quasi-compactness, and integrality
  hypotheses.

There is no remaining mathematical or source blocker and no uneditable defect
to escalate. The reader-stage `step6-scope check --phase split` is not yet
applicable because no post-reader scope artifact exists; its absent scope file
is a stage-order condition, not a content finding.
