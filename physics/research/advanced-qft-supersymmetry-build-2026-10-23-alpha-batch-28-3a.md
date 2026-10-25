# Batch 28 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-28`.

## Completed definition risk review

`def-aqft-eft-scattering-channel` (level 1): reviewed Definition and Verification 1.1–2.1 against `def-aqft-scattering-amplitude-input` and `def-aqft-local-operator-and-dimension`. The Lorentz covector action, invariant contraction, engineering weight eight, mass gap, finite crossing-paired subtraction, partial-wave sign limit, analytic assumptions and exact matching premise are consistent. Empty pole list and zero spectral density are allowed; no arbitrary choice or empirical measurement enters. Recorded complete risk review in the batch contract. No item edit or decision is owed for this unchanged carrier.

Next: finish the touched theorem, exact pre/post comparison, direct consumer review, and published-supplier finding.

## Completed theorem review

`touched:28:pthm-aqft-forward-positivity-wilson-coefficient`: **accepted_repair**, repair confidence 1. Git `HEAD:physics/items/pthm-aqft-forward-positivity-wilson-coefficient.md` has raw SHA256 `a7d4d30f678f605ff650e02b336ff29cf20fc00db04f62de503249f8d9e5e468`, exactly the immutable pre-reader snapshot; the current carrier has `19b90e732d43735a0f115fc3f03665a5494c5089b89c7dbee2b08f5da15825ab`, exactly the post-reader snapshot. The exact diff clarifies which integrand has vanishing threshold arcs and replaces the unprovided formal interaction insertion argument with a finite contact-polynomial calculation. No historical preimage uncertainty remains for this obligation.

Checked every current theorem proof step and the full current proofs of `thm-aqft-gapped-scalar-forward-positivity` and `prop-aqft-quartic-contact-jet-matching`. The former's fixed threshold detours and shifted compact bank limit precede taking imaginary parts and shrinking threshold arcs; its outer bound is uniform, and its nonnegative moment is finite. The latter has eight assignments per quartic pairing, giving `2[(s-2m²)²+(t-2m²)²+(u-2m²)²]`, hence `8m⁴+4v²` forward. Zero relation space suffices here; arbitrary declared relations need not preserve contact data. Independently opened the crossing lemma, finite-jet definition, quotient and normalized-coordinate definitions, and exact Cauchy/improper-integral suppliers. Their hypotheses match the uses; no complete transitive foundation audit is claimed.

The deduction is `c1=(2/pi) integral rho(nu)/nu^3 >= 0`, followed by the separately assumed identity `c1=4C8/Lambda^4+Delta_match`. Multiplication by positive `Lambda^4/4` proves the bound. Zero density and equality are allowed. No loop matching, amplitude construction, arbitrary choice, strict sign, sufficiency or observation is inferred. The massless case is excluded.

The only item/reference consumer found in `items/` and `library/` is `ex-aqft-eft-positivity-application`, besides the owning A-page placement. Its full channel hypothesis includes vanishing endpoint arcs for the defined cut integrals, so the clarification is compatible without repair. Its three verification steps give `c1=±1/(128m⁴)` and retain the zero boundary. Its TikZ number-line diagram shades negative values excluded and nonnegative values passing the necessary inequality; labels, boundary and directions agree with the text. There is no diagram in the definition or theorem. Both pages remain frontmatter-only with `page_layout: compact-v1`.

Source read: [de Rham et al., Positivity Bounds for Scalar Theories](https://arxiv.org/pdf/1702.06134), PDF pp. 1–3, equations (1)–(15): partial waves and sign, crossing-paired pole subtraction, twice-subtracted dispersion and forward derivatives. The local supplier proves the extra boundary/convergence requirements. Other bibliography entries were not reread in full; no such reading is claimed. No empirical data or statistical inference occurs.

Recorded theorem risk review complete after definition review. Next: published finding disposition, ledgers, focused checks and final decisions.

## Published finding and ledgers

`reader:28:1`: **confirmed_nonfatal**. The full current `thm-monotonicity-of-the-integral` Statement and Proof were read, together with the linked `fs-nonnegative-integrable-with-zero-integral-vanishes` Statement and Refutation. Its zero-integral paragraph is grammatically ill-formed and ambiguously negates a true possibility. Thomae's function supplies the stated infinite-support counterexample. Independently, the one-point spike is nonnegative and nonzero with zero integral: isolate its sole nonzero value in partition intervals with arbitrarily small total length; lower sums vanish and upper sums tend to zero. In contrast, nonnegative lower sums directly prove Claim 1, and the rest of the monotonicity proof uses linearity and Darboux bounds correctly.

Current raw hash is `8995be01407f4fbafd66b40b67187a5692fd338b82f12ff7f8034a1630599c08`, matching the reader report. Current verification-excluded content hash is `3d0f7f874a8a203a408aa705d85909d42ae793502a5ac799a23ba02ab9b2a179`, matching the routed pre hash. No observation is relabeled as repaired or false-positive. The published source and root mathematics were left read-only. The existing published-ledger classification index entry was enriched under an exclusively created/released owned lock; its batch-28 section records exact supplier/consumer IDs, evidence and original-owner repair strategy. Scoped disposition is closed `nonfatal-recorded`; published wording maintenance remains OPEN, independently of batch completion.

Closed defect rows:

- `advanced-qft-supersymmetry-build-2026-10-23-batch-28-contact-premise`: nonfatal unsupported inference, fixed by retained reader repair, confidence 1.
- `advanced-qft-supersymmetry-build-2026-10-23-batch-28-published-zero-commentary`: nonfatal ill-formed commentary, recorded read-only.

The owned cross-batch input's four item-edge evidence records and the frontier notes were updated; the native frontier-dependency refresh succeeded. Existing page dependencies, stable IDs and inventories remain present. No withdrawal is proposed. There are exactly two owed decisions and no page/refuter decisions.

## Local checks and handoff

- Initial risk report: HIGH 7 channel definition; CRITICAL 10 coefficient theorem; MODERATE 3 example. Both required risk reviews were authored with specific mathematical evidence, in supplier-before-consumer order.
- Final `risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-28.proof-contracts.json --require-reviewed`: exit 0, three routed items, zero errors.
- `tsx-run.mjs tools/physics-support/precheck.mts items/pthm-aqft-forward-positivity-wilson-coefficient.md`: exit 0, one checked, zero failing.
- `rendercheck.mjs` on the three batch items and two pages: exit 0, five files, all YAML/math checks passed.
- Final proof-layout result is recorded below after the required final layout invocation.

Alpha changed no item or page bytes; only risk reviews and review/ledger evidence were authored. No judge, acceptance stamp, self-certification or workflow transition was run. The engine owns decision hashes and remaining gates. No mathematical blocker or outside consumer repair remains; published editorial maintenance remains with its owner.

Final `proof-layout.mjs items/pthm-aqft-forward-positivity-wilson-coefficient.md`: exit 0, one item, four steps, zero defects. Final JSON/ledger/hash consistency check passed: exactly two decisions, unique closed owned ledger rows, all three item raw hashes equal the post-reader snapshot, both required risk reviews complete.
