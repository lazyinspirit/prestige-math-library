# Frontier 32 contract audit

Date: Sunday, September 6, 2026.
Dispatch: `contract-audit-8`
Run: `frontier-32`

## Reproduced detector state before repair

- `boundary-audit` over all nineteen batch contracts with `--fail-on-contradicted --fail-on-template` failed with `68` template clusters (`2913` affected rows) and `34` contradicted candidates. All `478` scoped items were authored.
- `citation-fidelity` checked `246` citations and passed with `0` missing quotes and `0` widening candidates.
- `gate-liveness` failed because `finite-smoke` was vacuous (`0` applicable checks). The other gates were live: `proof-contract 478`, `coverage-checklist 1327`, and `precheck 11477`.
- The strict proof-contract check passed `478/478` items before repair.
- The required risk review was missing for `fs-the-third-map-in-a-morphism-of-triangles-is-unique`.

## Template-cluster adjudication

Every member of every detected cluster was checked against its own statement and proof. Repeated `checked` evidence was replaced by the actual item title, applicable boundary axis, cited proof step, and an excerpt of that step. Repeated `not_applicable` rationales were replaced by item-named mathematical reasons stating why that axis introduces no additional case. Where the existing status did not match the written claim, it was corrected; this produced `294` status changes among the `2913` rewritten rows.

Batch `8` required a full status audit because its clustered records initially marked every axis `checked`. Those rows were reclassified item by item according to the claim surface: an axis remains `checked` only when the written claim actually exhibits that boundary, and otherwise records a claim-specific `not_applicable` reason.

| Batch | Detected clusters | Whole-run member rows reviewed and rewritten | Changed record |
| ---: | ---: | ---: | --- |
| 1 | 5 | 209 | `research/frontier-32-batch-1.proof-contracts.json` |
| 2 | 2 | 11 | `research/frontier-32-batch-2.proof-contracts.json` |
| 4 | 2 | 10 | `research/frontier-32-batch-4.proof-contracts.json` |
| 5 | 7 | 208 | `research/frontier-32-batch-5.proof-contracts.json` |
| 6 | 1 | 6 | `research/frontier-32-batch-6.proof-contracts.json` |
| 7 | 2 | 343 | `research/frontier-32-batch-7.proof-contracts.json` |
| 8 | 2 | 280 | `research/frontier-32-batch-8.proof-contracts.json` |
| 9 | 3 | 536 | `research/frontier-32-batch-9.proof-contracts.json` |
| 10 | 8 | 196 | `research/frontier-32-batch-10.proof-contracts.json` |
| 11 | 9 | 142 | `research/frontier-32-batch-11.proof-contracts.json` |
| 12 | 4 | 90 | `research/frontier-32-batch-12.proof-contracts.json` |
| 14 | 6 | 44 | `research/frontier-32-batch-14.proof-contracts.json` |
| 15 | 2 | 372 | `research/frontier-32-batch-15.proof-contracts.json` |
| 16 | 7 | 182 | `research/frontier-32-batch-16.proof-contracts.json` |
| 17 | 2 | 110 | `research/frontier-32-batch-17.proof-contracts.json` |
| 18 | 3 | 152 | `research/frontier-32-batch-18.proof-contracts.json` |
| 19 | 3 | 22 | `research/frontier-32-batch-19.proof-contracts.json` |

Batches `3` and `13` had no template cluster and needed no template rewrite. The whole-run detector forms clusters across files, so its per-batch member counts can exceed the rows seen when a batch is scanned in isolation.

## Contradicted-candidate adjudications

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `thm-perron-formula [empty]` | upheld | The series and finite truncations use the fixed positive integers, not a quantified family allowed to be empty. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `7`. |
| `thm-truncated-perron-formula [empty]` | upheld | The error sum uses the fixed positive integers with at most one excluded index, not an optional empty input family. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `7`. |
| `lem-local-logarithmic-derivative-zeta [empty]` | repaired | Step `2.1` leaves the displayed local zero sum after bounding the grouped tails; if the local zero set is empty, that displayed sum is the empty sum `0` and the same estimate remains valid. | Changed to `checked`, citing step `2.1`, in batch `7`. |
| `thm-von-mangoldt-explicit-formula-smoothed [empty]` | upheld | Its sums have fixed arithmetic index sets: positive integers, zeta zeros, and positive integers. None is a free family that may be omitted. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `7`. |
| `thm-von-mangoldt-explicit-formula-truncated [empty]` | repaired | Step `2.1` performs the contour shift and treats the crossed zeros as a finite sum; the derivation remains valid when no zero ordinate satisfies `|Im rho| < T`, using the standard empty-sum value `0`. | Changed to `checked`, citing step `2.1`, in batch `7`. |
| `thm-number-field-integral-ideal-factorisation-in-zf [empty]` | repaired | For the unit ideal, step `1.1` gives an empty finite list of containing primes and step `2.1` forms the corresponding empty product, namely the unit ideal; uniqueness localizes over that same finite list. | Changed to `checked`, citing steps `1.1` and `2.1`, in batch `7`. |
| `thm-fundamental-identity-for-primes-in-number-fields [empty]` | upheld | A nonzero rational prime has at least one prime above it by factorization of its extended ideal, so the displayed sum cannot have an empty index set. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `7`. |
| `thm-ramified-primes-and-the-number-field-discriminant [iff-forward]` | repaired | Steps `1.1` and `2.1` identify ramification with a nontrivial radical of the trace pairing modulo `p`, then with `p | d_K`; step `2.1` explicitly says this proves both directions. | Changed to `checked`, citing step `2.1`, in batch `7`. |
| `thm-ramified-primes-and-the-number-field-discriminant [iff-reverse]` | repaired | The same chain of equivalences in steps `1.1` and `2.1` proves that divisibility of the determinant forces the radical and hence ramification. | Changed to `checked`, citing step `2.1`, in batch `7`. |
| `cor-discriminant-valuation-from-different-exponents [empty]` | upheld | The primes above a rational prime are nonempty; primes absent from the different contribute exponent `0`, rather than creating an empty-family case. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `7`. |
| `lem-regular-element-exists-by-prime-avoidance [iff-forward]` | repaired | Step `1.1` identifies regular elements with avoiding the associated-prime union, and step `2.1` applies finite prime avoidance to obtain the displayed pointwise containment criterion. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `lem-regular-element-exists-by-prime-avoidance [iff-reverse]` | repaired | Conversely, the pointwise noncontainments and finite prime avoidance give an element outside every associated prime; steps `1.1` and `2.1` show it is regular and its quotient is nonzero. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `lem-maximal-regular-sequence-stops-at-associated-prime [iff-forward]` | repaired | Steps `1.1` and `2.1` identify nonextendability with depth zero, then apply the depth-zero associated-prime criterion to get an associated prime containing `I`. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `lem-maximal-regular-sequence-stops-at-associated-prime [iff-reverse]` | repaired | The same depth-zero criterion converts an associated prime containing `I` back to absence of a regular extension, hence maximality. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `cor-regular-quotient-cohen-macaulay-equivalence [iff-forward]` | repaired | Step `1.1` gives equality of the depth-dimension gaps and step `2.1` observes that Cohen--Macaulayness on either side is exactly vanishing of that common gap. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `cor-regular-quotient-cohen-macaulay-equivalence [iff-reverse]` | repaired | Vanishing of the quotient's gap therefore forces vanishing of the original module's identical gap by the same two steps. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-regular-quotients-and-cohen-macaulayness [iff-forward]` | repaired | Step `1.1` applies the one-element equivalence successively and step `2.1` chains those equivalences. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-regular-quotients-and-cohen-macaulayness [iff-reverse]` | repaired | The chained one-element equivalences are biconditional at every quotient, so step `2.1` also proves the reverse implication; it separately records the `r=0` identity case. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules [iff-forward]` | repaired | Step `1.1` proves `(1) => (2) => (3)` using the two stated parameter-sequence results. | Changed to `checked`, citing step `1.1`, in batch `9`. |
| `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules [iff-reverse]` | repaired | Step `2.1` proves `(3) => (1)`, closing the equivalence. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `cor-completion-preserves-cohen-macaulayness-two-directions [iff-forward]` | repaired | Step `1.1` shows completion preserves both depth and support dimension; step `2.1` concludes that equality of the two holds on one side exactly when it holds on the other. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `cor-completion-preserves-cohen-macaulayness-two-directions [iff-reverse]` | repaired | The same two equalities reflect the zero depth-dimension gap from the completion back to the original module. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-completion-preserves-cohen-macaulayness [iff-forward]` | repaired | Step `1.1` invokes the exact module-level completion equivalence. | Changed to `checked`, citing step `1.1`, in batch `9`. |
| `thm-completion-preserves-cohen-macaulayness [iff-reverse]` | repaired | The invoked result is explicitly two-directional, and step `2.1` specializes it to the ring assertion. | Changed to `checked`, citing step `1.1`, in batch `9`. |
| `cor-flat-local-cohen-macaulay-fibre-criterion [iff-forward]` | repaired | Step `1.1` expresses the target gap as the sum of two nonnegative gaps, and step `2.1` proves that a zero sum forces both summands to vanish. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `cor-flat-local-cohen-macaulay-fibre-criterion [iff-reverse]` | repaired | If both source and fibre gaps vanish, the equality in step `1.1` makes the target gap zero; step `2.1` states the resulting equivalence. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-depth-formula-for-flat-local-homomorphisms [iff-forward]` | repaired | Step `2.1` invokes the exact flat-local Cohen--Macaulay fibre criterion for the forward implication, under the displayed hypotheses only. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `thm-depth-formula-for-flat-local-homomorphisms [iff-reverse]` | repaired | The same invoked criterion is biconditional and supplies the reverse implication without adding finite-type assumptions. | Changed to `checked`, citing step `2.1`, in batch `9`. |
| `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors [iff-forward]` | repaired | Step `2.1` compares any defining function with the boundary-chart normal coordinate and shows an inward vector has positive differential. | Changed to `checked`, citing step `2.1`, in batch `15`. |
| `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors [iff-reverse]` | repaired | Step `2.1` also uses vanishing on the tangent hyperplane and the positive normal derivative to show that positive differential detects inwardness. | Changed to `checked`, citing step `2.1`, in batch `15`. |
| `thm-jantzen-sum-formula-for-a-verma-module [empty]` | repaired | Step `2.1` proves the identity coefficientwise from determinant orders; when no positive-root/integer pair satisfies the equality, the order and the right-hand coefficient are both the empty sum `0`. | Changed to `checked`, citing step `2.1`, in batch `16`. |
| `thm-character-of-an-irreducible-over-a-nonsplitting-field [empty]` | upheld | `Gal(E/F)/H` contains the identity coset, so its character sum is necessarily nonempty. | Kept `not_applicable`; added item-specific `reviewed.upheld` in batch `17`. |
| `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator [iff-forward]` | repaired | Steps `2.1` and `3.1` identify the dual cokernel with the annihilator of the tangent-space sum; transversality makes that annihilator vanish, so the Fredholm operator is onto. | Changed to `checked`, citing step `3.1`, in batch `18`. |
| `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator [iff-reverse]` | repaired | Conversely, surjectivity makes the cokernel and its dual annihilator vanish, forcing the stable and unstable tangent spaces to span; step `3.1` explicitly closes the biconditional. | Changed to `checked`, citing step `3.1`, in batch `18`. |

The six upheld rows are detector-inapplicability decisions, not content exceptions. No mathematical item defect was confirmed, so no item text changed and no ledger row was added by this dispatch.

## Citation-fidelity disposition

There was no citation candidate to repair. The initial and final runs each checked all `246` contract citations with `0` missing quotes and `0` widening candidates. No citation or item source record changed.

## Finite-smoke and risk-review repairs

`gate-liveness` initially reported `VACUOUS finite-smoke 0 checks`. An applicable `vieta-elementary-symmetric` obligation was added to `ex-galois-conjugate-characters-of-c3` in batch `17`.

- Exact asserted step: step `1.1` says the displayed matrix has characteristic polynomial `x^2+x+1`, hence eigenvalues `zeta,zeta^2`, and has cube equal to the identity.
- Applicability: the registered smoke check is a bounded independent check of the coefficient/root relation used in that characteristic-polynomial inference.
- Result: `837` coefficient comparisons passed, through degree `4` with roots in `[-4,4]`.

Adding the smoke signal raised this item to the review threshold, so batch `17` also received a complete `risk_review`. Its review records the matrix calculation, `A^3=I`, the orbit-multiplicity use in step `2.1`, and the scope of the Vieta smoke.

The pre-existing missing review for `fs-the-third-map-in-a-morphism-of-triangles-is-unique` was completed in batch `8`. The item itself is sound: step `3.1` constructs two completions of the same zero square, while step `4.1` proves their off-diagonal difference is nonzero in the homotopy category. This was a missing contract review, not an item defect.

## Merge and final validation

- `node tools/merge-proof-contracts.mjs --level frontier-32 research/frontier-32-proof-contracts.json research/frontier-32-batch-{1..19}.proof-contracts.json`
  - pass; wrote `478` scoped items from `19` batch contracts.
- `node tools/boundary-audit.mjs research/frontier-32-proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template --json`
  - pass; `3824` rows, `0` template clusters, `0` contradicted candidates, and `6` item-specific upheld records.
- `node tools/citation-fidelity.mjs research/frontier-32-proof-contracts.json --items-dir items --fail-on-missing-quote --json`
  - pass; `246` citations, `0` missing quotes, and `0` widening candidates.
- `node tools/gate-liveness.mjs --run frontier-32 --contracts research/frontier-32-proof-contracts.json --checklists research/frontier-32-batch-{1..19}.coverage.json --min-checks 1 --json`
  - pass; `finite-smoke 1`, `proof-contract 478`, `coverage-checklist 1327`, and `precheck 11477` are all live.
- `node tools/proof-contract.mjs research/frontier-32-proof-contracts.json --items-dir items --strict`
  - pass; `0` errors, `0` warnings, `478/478` items checked.
- `node tools/finite-smoke.mjs research/frontier-32-proof-contracts.json`
  - pass; `0` errors, `1` check over `1/478` items carrying obligations.
- `node tools/risk-report.mjs research/frontier-32-proof-contracts.json --items-dir items --require-reviewed`
  - pass; `0` errors, `478` items routed.

## Changed records

- Rewritten batch contracts: `research/frontier-32-batch-1.proof-contracts.json`, batches `2`, `4` through `12`, and `14` through `19`; batches `3` and `13` were unchanged.
- Merged contract: `research/frontier-32-proof-contracts.json`.
- Audit record: `research/frontier-32-alpha-contract-audit.md`.
- Item files: none.
- Defect ledger: no row added by this dispatch.

## Remaining blocker

- None in this dispatch scope.
