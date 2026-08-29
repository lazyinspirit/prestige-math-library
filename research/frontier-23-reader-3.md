# Frontier 23 — independent reader 3 report

Date: 2026-08-29  
Run: `frontier-23`  
Batch: `3`  
Role: `reader`

## Scope opened

- Task and run artifacts: `research/frontier-23-dispatch/reader-reader-3.prompt.md`, `research/frontier-23-batch-3.pages.json`, `research/frontier-23-batch-3.coverage.json`, `research/frontier-23-batch-3.notes.md`, `research/frontier-23-batch-3.proof-contracts.json`, and the live run state from `node tools/autopilot/bin/autopilot.mts status`.
- Assigned page files: `library/commutative-algebra/integral-extensions-and-going-up.md` and `library/commutative-algebra/integral-extensions-and-going-up-examples.md`.
- Assigned item files: `def-integral-ring-extension`, `def-integral-closure-and-integrally-closed-domain`, `thm-transitivity-of-integrality`, `thm-integral-closure-is-integrally-closed`, `thm-integrality-commutes-with-localisation`, `lem-field-integrality-criterion`, `cor-contraction-of-maximal-ideals-integral-extension`, `thm-lying-over`, `thm-incomparability-for-integral-extensions`, `thm-going-up`, `cor-integral-extension-lifts-finite-prime-chains`, `lem-integral-extension-chain-contraction-is-strict`, `cor-dimension-preserved-by-integral-extensions`, `lem-integrally-closed-minimal-polynomial-coefficients`, `thm-normality-is-local-for-domains`, `thm-going-down-over-normal-domains`, `cor-height-preserved-under-going-down-integral-extensions`, `ex-integrality-equation-and-power-basis`, `ex-integral-elements-subring-computation`, `ex-integrality-localisation-clearing-denominators`, `ex-lying-over-by-quotient-and-localisation`, `ex-incomparability-in-a-quadratic-integral-extension`, and `ex-going-down-needs-normality`.
- Published dependency items opened directly while checking the current proofs and contracts: `cor-integral-elements-form-a-subring`, `def-field`, `def-field-of-fractions`, `def-height-of-a-prime-ideal`, `def-integral-element-and-algebraic-integer`, `def-krull-dimension-of-a-ring`, `def-localisation-at-a-prime-ideal`, `def-multiplicative-subset-and-localisation`, `def-zero-divisor-and-integral-domain`, `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`, `lem-transitivity-of-module-finiteness`, `prop-iterated-localisation`, `prop-localisation-zero-equality-and-kernel-criteria`, `thm-adjugate-identity-over-a-commutative-ring`, `thm-evaluation-kernel-and-minimal-polynomial`, `thm-field-of-fractions-is-a-field-and-the-domain-embeds`, `thm-integrality-and-finite-module-equivalences`, `thm-local-criterion-for-zero-modules-and-maps`, `thm-localisation-at-a-prime-is-local`, `thm-localisation-equivalence-and-ring-laws`, `thm-prime-spectrum-of-a-localisation-bijection`, `thm-prime-spectrum-of-a-quotient-bijection`, `thm-proper-ideal-contained-in-maximal-ideal`, `thm-quotient-is-domain-iff-ideal-prime`, `thm-quotient-is-field-iff-ideal-maximal`, `thm-splitting-fields-exist-for-nonzero-polynomials`, and `thm-universal-property-of-adjoining-an-irreducible-root`.

## Outcome

I read every assigned page summary, every assigned definition/theorem/corollary/example, and the current batch proof-contract file. I repaired two in-flight proof-support defects and one proof-contract boundary defect cluster. Four uneditable manifest-dependency mismatches remain in `research/frontier-23-batch-3.pages.json`.

## Repaired defects

### R3-1 — `cor-dimension-preserved-by-integral-extensions` — fixed — nonfatal

Location: facts block, proof step `1.2`, and the corresponding contract entry.

Defect: the proof chose a bottom over-prime above `\mathfrak p_0` without citing lying over, so the existence of `\mathfrak q_0` was unsupported on the current bytes.

Repair: added the missing dependency on `thm-lying-over`, introduced the explicit fact line, and rewrote step `1.2` so the lifted chain starts from a cited over-prime and explains why the lifted inclusions are strict. Regenerated the proof-contract citations and derivations for this item.

### R3-2 — `cor-height-preserved-under-going-down-integral-extensions` — fixed — nonfatal

Location: facts block, proof steps `1.1` to `3.1`, and the corresponding contract entry.

Defect: the old proof compared heights by counting chains below `\mathfrak p` and `\mathfrak q` directly, but the current facts block only defined height as `\dim(R_{\mathfrak p})`; it omitted the localization-spectrum bridge and the Krull-dimension chain-length bridge needed to justify that reduction.

Repair: added the missing dependencies on `def-krull-dimension-of-a-ring` and `thm-prime-spectrum-of-a-localisation-bijection`, rewrote the proof so step `1.1` explicitly reduces height comparison to chain comparison via localized spectra, and renumbered the steps into the repository's canonical form. Regenerated the proof-contract citations and derivations for this item.

### R3-3 — proof-contract boundary rows — fixed — nonfatal

Location: `research/frontier-23-batch-3.proof-contracts.json`.

Defects:

- `thm-normality-is-local-for-domains` marked the `iff-forward` and `iff-reverse` axes `not_applicable`, but the item's own Statement is an explicit equivalence.
- Two example entries reused the same generic `\"The example is not a biconditional.\"` rationale in all four `iff-*` rows, which kept `boundary-audit --fail-on-template` nonclean.

Repair: changed the `thm-normality-is-local-for-domains` `iff-*` rows to `checked` with step-based evidence, and rewrote the two example `iff-*` rationales so the boundary audit no longer reports template reuse.

## Uneditable defects

1. `research/frontier-23-batch-3.pages.json` underdeclares `thm-integrality-commutes-with-localisation`: the manifest omits `prop-localisation-zero-equality-and-kernel-criteria`, but the current item file depends on it and uses it as fact `[L4]` in proof step `1.2`.
2. `research/frontier-23-batch-3.pages.json` underdeclares `thm-lying-over`: the manifest omits `prop-localisation-zero-equality-and-kernel-criteria`, but the current item file depends on it and uses it as fact `[L9]` in step `2.1`.
3. `research/frontier-23-batch-3.pages.json` underdeclares `cor-dimension-preserved-by-integral-extensions`: after the repair above, the current item file depends on `thm-lying-over` to choose the initial over-prime in step `1.2`, but the manifest still lists only the chain-lifting and contraction results.
4. `research/frontier-23-batch-3.pages.json` underdeclares `cor-height-preserved-under-going-down-integral-extensions`: after the repair above, the current item file depends on `def-krull-dimension-of-a-ring` and `thm-prime-spectrum-of-a-localisation-bijection`, but the manifest still omits both edges.

These four rows are reported in the structured findings JSON because the dispatch does not permit me to edit the batch manifest.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-dimension-preserved-by-integral-extensions.md items/cor-height-preserved-under-going-down-integral-extensions.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-dimension-preserved-by-integral-extensions.md items/cor-height-preserved-under-going-down-integral-extensions.md` — PASS, 2 checked, 0 failing.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-3.proof-contracts.json cor-dimension-preserved-by-integral-extensions cor-height-preserved-under-going-down-integral-extensions` — regenerated 2 entries.
- `node tools/proof-contract.mjs --strict research/frontier-23-batch-3.proof-contracts.json` — 0 errors, 0 warnings, 21/21 checked.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-3.proof-contracts.json --fail-on-missing-quote` — 68 citations, no missing quotes or widening candidates.
- `node tools/boundary-audit.mjs research/frontier-23-batch-3.proof-contracts.json --fail-on-contradicted --fail-on-template` — no contradicted dispositions and no template-reuse clusters.
- `node tools/finite-smoke.mjs research/frontier-23-batch-3.proof-contracts.json` — 0 errors, 0 registered checks.
- `node tools/rendercheck.mjs library/commutative-algebra/integral-extensions-and-going-up.md library/commutative-algebra/integral-extensions-and-going-up-examples.md` — OK.
- `node tools/content-policy.mjs research/frontier-23-batch-3.pages.json` — 23 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-23-batch-3.coverage.json --require-destination` — 1 page, 59 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-3.coverage.json` — 3/3 fetch-verified.
- `git diff --check -- items/cor-dimension-preserved-by-integral-extensions.md items/cor-height-preserved-under-going-down-integral-extensions.md research/frontier-23-batch-3.proof-contracts.json` — clean.

## Per-page verdicts

- `integral-extensions-and-going-up` — pass on current page prose and item mathematics after the two item repairs. The remaining defects are manifest-metadata omissions, not A-page prose defects.
- `integral-extensions-and-going-up-examples` — pass on current page prose and example mathematics. No B-page prose edit was needed.

## Blockers

None.
