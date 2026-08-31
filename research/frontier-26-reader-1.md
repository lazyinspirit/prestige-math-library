# frontier-26 reader-1 report

Date: Sunday, August 30, 2026.
Batch: `1`.
Scope: `dedekind-domains-and-ideal-classes` / `dedekind-domains-and-ideal-classes-examples`.

## Opened scope

- Batch artifacts: `research/frontier-26-batch-1.pages.json`, `research/frontier-26-batch-1.coverage.json`, `research/frontier-26-batch-1.proof-contracts.json`, `research/frontier-26-batch-1.notes.md`.
- Page files: `library/commutative-algebra/dedekind-domains-and-ideal-classes.md`, `library/commutative-algebra/dedekind-domains-and-ideal-classes-examples.md`.
- Assigned A items opened: `def-dedekind-domain`, `lem-dedekind-localisation-at-nonzero-prime-is-dvr`, `lem-local-dvr-condition-implies-global-normality`, `lem-local-dvr-condition-implies-dimension-one`, `thm-local-characterisation-of-dedekind-domains`, `thm-localisation-of-a-dedekind-domain`, `lem-trace-pairing-for-a-finite-separable-extension`, `thm-finite-integral-closure-in-a-finite-separable-extension`, `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension`, `rem-separability-is-essential-for-finite-integral-closure`, `def-fractional-ideal`, `def-product-and-colon-of-fractional-ideals`, `lem-fractional-ideal-operations-well-defined`, `def-invertible-fractional-ideal`, `thm-invertible-ideal-characterisations`, `thm-nonzero-ideals-in-dedekind-domains-are-invertible`, `def-prime-ideal-valuations-on-fractional-ideals`, `lem-finite-support-of-ideal-valuations`, `thm-unique-factorisation-of-ideals-in-dedekind-domains`, `cor-ideal-divisibility-reverses-inclusion-dedekind`, `cor-ideals-in-a-dedekind-domain-are-two-generated`, `def-ideal-class-group-of-a-domain`, `lem-ideal-class-group-well-defined`, `def-divisor-group-of-a-dedekind-domain`, `thm-principal-divisor-exact-sequence`, `thm-dedekind-pid-class-group-characterisation`, `lem-rank-one-projective-embedded-as-a-fractional-ideal`, `thm-invertible-ideals-and-rank-one-projective-modules`, `thm-ideal-class-group-is-the-picard-group`, `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective`, `lem-rank-one-summand-of-a-finite-projective-dedekind-module`, `thm-finite-torsionfree-modules-over-dedekind-domains`, `thm-submodules-of-projectives-over-dedekind-domains`.
- Assigned B items opened: `ex-pid-as-dedekind-domain`, `ex-semilocal-dedekind-domain-is-a-pid`, `ex-fractional-ideal-in-the-integers`, `ex-ideal-inverse-computation`, `ex-steinitz-class-rank-two-module`, `ex-dedekind-localisation-is-dvr`, `ex-two-generators-for-a-dedekind-ideal`, `ex-divisor-of-a-fractional-ideal`, `ex-nondedekind-ideal-not-invertible`.
- Published dependencies opened: `def-noetherian-ring`, `def-integral-closure-and-integrally-closed-domain`, `def-krull-dimension-of-a-ring`, `def-field-of-fractions`, `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`, `thm-equivalent-characterisations-of-a-dvr`, `thm-normality-is-local-for-domains`, `thm-localisation-at-a-prime-is-local`, `thm-prime-spectrum-of-a-localisation-bijection`, `cor-prime-ideals-and-dimension-of-a-dvr`, `thm-proper-ideal-contained-in-maximal-ideal`, `thm-ideals-in-a-dvr`, `thm-noetherian-ring-quotients-and-localisations`, `thm-integrality-commutes-with-localisation`, `thm-trace-form-is-nondegenerate-iff-separable`, `thm-lying-over`, `cor-contraction-of-maximal-ideals-integral-extension`, `thm-localisation-of-modules-is-exact`, `thm-local-criterion-for-zero-modules-and-maps`, `thm-projective-module-characterizations`, `thm-chinese-remainder-theorem-for-comaximal-ideals`, `def-principal-ideal-domain`, `cor-principal-ideal-domains-are-noetherian`, `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`, `thm-associativity-of-balanced-tensor-products`, `thm-unit-isomorphisms-for-module-tensor-products`, `thm-projective-modules-are-flat`, `cor-dimension-preserved-by-integral-extensions`, `thm-incomparability-for-integral-extensions`, `thm-prime-spectrum-of-a-quotient-bijection`, `thm-artinian-ring-characterisation-by-primes`, `thm-artinian-ring-has-finitely-many-maximal-ideals`, `thm-support-and-annihilator-of-a-finite-module`, `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`.
- Live source PDFs re-opened in the web reader for spot verification: Milne §20, Mustata §8.5, May §§2, 6, 7.

## Edits

- Repaired `thm-finite-integral-closure-in-a-finite-separable-extension`: replaced the unsupported “clear one common denominator into the integral closure” step with an explicit algebraic-integrality scaling argument and tightened the trace-integrality sentence.
- Repaired `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension`: removed the false universal claim from one chosen prime, replaced it with the dimension-preservation route, and fixed the integrally-closed argument.
- Repaired `lem-fractional-ideal-operations-well-defined`: supplied nonzero witnesses for `I+J`, `IJ`, `aI`, and `(I:J)`.
- Repaired `thm-nonzero-ideals-in-dedekind-domains-are-invertible`: fixed the type error that treated a fractional ideal as a subset of a maximal ideal by clearing denominators to an integral ideal first.
- Repaired `lem-finite-support-of-ideal-valuations`: replaced the circular “finitely many prime divisors of `(xd)`” assertion with a Noetherian quotient to Artinian quotient argument; added the needed Choice hypothesis and dependencies.
- Repaired `thm-unique-factorisation-of-ideals-in-dedekind-domains`: replaced the unjustified inclusion `J\hookrightarrow I` with two quotient-module local-zero arguments and removed the forward reference into another item’s internal step numbering.
- Repaired `lem-rank-one-projective-embedded-as-a-fractional-ideal`: made the injectivity of `P -> P \otimes_R K` explicit via the split monomorphism into a free module.
- Repaired `lem-rank-one-summand-of-a-finite-projective-dedekind-module`: added the missing projectivity argument for the image ideal before invoking the rank-one projective/invertible-ideal theorem; added the needed Choice hypothesis.
- Repaired `thm-finite-torsionfree-modules-over-dedekind-domains`, `thm-submodules-of-projectives-over-dedekind-domains`, `ex-pid-as-dedekind-domain`, and `ex-steinitz-class-rank-two-module`: added the Choice hypothesis required by their cited proofs; simplified the final consequence in `thm-submodules-of-projectives-over-dedekind-domains` to the already-proved cited statement.
- Repaired `ex-dedekind-localisation-is-dvr`: restricted the displayed power example to `n >= 0`, matching the proof on disk.
- Repaired `ex-nondedekind-ideal-not-invertible`: replaced the invalid “some bad localisation, hence this one” inference with a direct computation of non-principality in the cusp localization and a separate one-dimensionality argument.
- Synced `research/frontier-26-batch-1.proof-contracts.json` to all material repairs.
- Fixed malformed frontmatter/body separators in `lem-fractional-ideal-operations-well-defined`, `thm-invertible-ideal-characterisations`, `cor-ideal-divisibility-reverses-inclusion-dedekind`, `lem-rank-one-projective-embedded-as-a-fractional-ideal`, `lem-rank-one-summand-of-a-finite-projective-dedekind-module`, and `thm-finite-torsionfree-modules-over-dedekind-domains`.

## Verdicts

- A page `dedekind-domains-and-ideal-classes`: pass after the repairs above. I found no remaining uneditable defect on current bytes.
- B page `dedekind-domains-and-ideal-classes-examples`: pass after the repairs above. I found no remaining uneditable defect on current bytes.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on every changed item; only `items/thm-submodules-of-projectives-over-dedekind-domains.md` needed reflow.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 16 changed items: all pass on current bytes.
- `node tools/content-policy.mjs research/frontier-26-batch-1.pages.json`: `42 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`: exits `0` on current bytes.

## Uneditable defects

None.

## Blockers

None.
