# Frontier 20 — Alpha group b step-6b adjudication

**Dispatch:** `6b-b`

## Scope and method

- Reopened `CLAUDE.md`, `README.md`, `research/frontier-20-alpha-6b-routed.task.md`, `tools/step6-scope.mjs`, and the routed Step-6 scope files for batches `3` and `9`.
- Verified the reader reports, reader findings JSON, refuter reports, current carriers, cited dependencies, and the batch-9 prior-retry records against current disk before deciding any routed obligation.
- Worked only inside group `b` scope: touched carriers and refuter findings for batches `3` and `9`.

## Batch 3 refuter

| obligation | verdict | evidence |
|---|---|---|
| `refuter:3:1` | `confirmed_fatal` | Step 1.1 no longer inserts the unsupported inequality u <= h on the inner circle; it now proves h - u >= 0 by applying the maximum principle to the subharmonic difference v = u - h. |
| `refuter:3:2` | `confirmed_fatal` | Step 2.1 no longer invokes step 1.1 backwards; it now proves the comparison property directly by applying the second-derivative test to w + epsilon\|z-a\|^2 at an interior maximum. |
| `refuter:3:3` | `confirmed_fatal` | The proof no longer claims T(Omega) is bounded; it now uses only that T(E) is a connected complement component containing 0 and infinity, which is enough for the logarithmic peak-function argument. |
| `refuter:3:4` | `confirmed_fatal` | Step 1.1 no longer claims the supremum is finite on compact sets; it now uses the local bounded-above hypothesis only to bound U from above and the nonempty family to rule out U equiv -infinity on a component. |
| `refuter:3:5` | `confirmed_fatal` | The false-statement carrier now targets the regularized Perron envelope H_phi, the object actually proved harmonic by the cited theorem, so the punctured-disc contradiction is licensed on current disk. |

## Batch 3 touched

| obligation | verdict | evidence |
|---|---|---|
| `touched:3:def-barrier-and-regular-boundary-point` | `accepted_repair` | The reader's render repair is still present: the boundary-point definition now renders correctly on current disk. |
| `touched:3:def-poisson-modification-of-a-subharmonic-function` | `accepted_repair` | The reader's render repair is still present: the Poisson-modification definition now renders correctly on current disk. |
| `touched:3:ex-basic-plane-subharmonic-functions` | `accepted_repair` | The example's frontmatter/title parse and display math are repaired, and the current carrier matches the reader-cleaned state. |
| `touched:3:ex-perron-solution-on-an-annulus-with-radial-data` | `accepted_repair` | The current example still carries the reader's contract-only boundary repair, and the live batch-3 contract now matches its radial witness. |
| `touched:3:ex-poisson-modification-of-a-radial-quadratic-on-a-disc` | `accepted_repair` | The current example preserves the reader's render repair and refreshed contract entry. |
| `touched:3:fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` | `accepted_repair` | The current false-statement carrier preserves the reader's display repair and matching contract entry. |
| `touched:3:lem-boundary-point-whose-complementary-component-contains-another-point-is-regular` | `amended_repair` | The reader's boundary-row repair remains, and 6b additionally removed the false claim that the Mobius image T(Omega) is bounded. |
| `touched:3:lem-gluing-lemma-for-plane-subharmonic-functions` | `accepted_repair` | The reader's render repair is still present: the seam-gluing statement now renders correctly on current disk. |
| `touched:3:lem-local-subharmonic-peak-function-globalizes` | `accepted_repair` | The current lemma preserves the reader's render repair and refreshed contract entry. |
| `touched:3:thm-barrier-characterization-of-regular-boundary-points` | `accepted_repair` | The current theorem preserves the reader's render repair and refreshed contract entry. |
| `touched:3:thm-decreasing-limit-theorem-for-plane-subharmonic-functions` | `accepted_repair` | The current proof still cites monotone convergence for the integral rather than the sequence theorem, and the refreshed contract quote matches. |
| `touched:3:thm-exterior-disc-and-exterior-cone-points-are-regular` | `accepted_repair` | The current exterior-cone branch uses the symmetric sector with lambda = pi/(2 theta), so the signed barrier now has the right boundary behavior. |
| `touched:3:thm-harmonic-majorant-characterization-of-plane-subharmonicity` | `amended_repair` | The reader's monotone-convergence citation repair remains, and 6b additionally replaced the unsupported boundary-majorant jump with the subharmonic difference v = u - h plus the maximum principle. |
| `touched:3:thm-upper-envelope-theorem-for-plane-subharmonic-functions` | `amended_repair` | The reader's boundary-row resync remains, and 6b additionally removed the false claim that local boundedness-above forces finiteness on compact sets. |

## Batch 9 refuter

| obligation | verdict | evidence |
|---|---|---|
| `refuter:9:1` | `confirmed_fatal` | Step 7.1 no longer jumps from a pointwise limsup bound to an eventual compact bound by upper semicontinuity alone; it now proves that compact bound through a Hartogs-lemma style disc-average argument for the subharmonic coefficient family. |
| `refuter:9:2` | `confirmed_fatal` | The repaired lemma no longer asserts that slicewise bidisc extensions are jointly holomorphic for free; it now constructs the extension explicitly and proves separate holomorphy and local boundedness before invoking the published locally-bounded theorem. |
| `refuter:9:3` | `confirmed_fatal` | The theorem no longer overclaims from the weaker overlap hypothesis; it now records the componentwise overlap condition under which the repaired gluing lemma really yields the global extension. |
| `refuter:9:4` | `confirmed_fatal` | The opening prose no longer claims the broken Baire/local-boundedness and shell-gluing routes as established; it now describes the repaired Hartogs-lemma coefficient argument and the strengthened finite-shell-cover hypothesis. |

## Batch 9 touched and pages

| obligation | verdict | evidence |
|---|---|---|
| `touched:9:cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy` | `accepted_repair` | The live counterexample still isolates the complex-hypersurface obstruction exactly as the Hartogs examples page states, and its current contract entry matches the item. |
| `touched:9:cex-misidentifying-a-double-pole-gives-the-wrong-residue` | `accepted_repair` | The live counterexample still isolates the double-pole misread exactly as stated, and the current contract entry matches the carrier. |
| `touched:9:cex-one-over-z-defeats-the-large-semicircle-estimate` | `accepted_repair` | The current counterexample preserves the reader's canonical proof-step repair and prechecks cleanly as written. |
| `touched:9:cex-one-over-z-has-a-nonremovable-puncture-in-one-variable` | `accepted_repair` | The live counterexample still marks the one-variable boundary exactly as the Hartogs examples page states, and its current contract entry matches the item. |
| `touched:9:cor-hartogs-figure-obstruction-to-domain-of-holomorphy` | `accepted_repair` | The live corollary still reads as the direct domain-of-holomorphy obstruction from the Hartogs-figure extension theorem, and its current contract entry matches the item. |
| `touched:9:cor-no-isolated-holomorphic-singularities-in-several-complex-variables` | `accepted_repair` | The live corollary still states the several-variable puncture consequence exactly as the page needs, and its current contract entry matches the item. |
| `touched:9:def-hartogs-figure-and-polydisc-hull` | `accepted_repair` | The live definition still fixes the Hartogs figure and bidisc hull model used throughout the page. |
| `touched:9:def-holomorphic-extension-and-domain-of-holomorphy` | `accepted_repair` | The live definition still fixes the simultaneous-extension convention used by the Hartogs obstruction branch, and its contract quote matches. |
| `touched:9:ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy` | `accepted_repair` | The live example still computes the punctured-bidisc extension witness exactly as the examples page states, and its contract entry matches. |
| `touched:9:ex-hartogs-figure-in-modulus-coordinates` | `accepted_repair` | The live example still makes the Hartogs figure concrete in the modulus coordinates used by the page, and its contract entry matches. |
| `touched:9:ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` | `accepted_repair` | The live example still instantiates the keyhole residue formula exactly as quoted in the current contract entry. |
| `touched:9:ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure` | `accepted_repair` | The live example still witnesses Hartogs-figure extension by the stated rational function, and its current contract entry matches. |
| `touched:9:ex-residue-evaluates-sine-over-x-principal-value` | `accepted_repair` | The current example preserves the reader's title and proof-step repair, and it prechecks cleanly as written. |
| `touched:9:ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc` | `accepted_repair` | The live example still computes the punctured-bidisc extension exactly as the examples page states, and its contract entry matches. |
| `touched:9:fs-every-domain-in-c-two-is-a-domain-of-holomorphy` | `accepted_repair` | The live false-statement carrier still isolates the Hartogs-figure obstruction exactly as stated, and its contract entry matches. |
| `touched:9:fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue` | `accepted_repair` | The live false-statement carrier still isolates the one-variable analogy failure exactly as stated, and its contract entry matches. |
| `touched:9:fs-punctured-domain-functions-must-be-unbounded` | `accepted_repair` | The live false-statement carrier still isolates the bounded punctured-domain failure exactly as stated, and its contract entry matches. |
| `touched:9:fs-separate-holomorphy-can-fail-to-imply-local-boundedness` | `accepted_repair` | The carrier itself did not need a further text edit: its one-line refutation now closes because the cited local-boundedness lemma has been repaired and verified in 6b. |
| `touched:9:lem-bounded-punctured-slice-has-holomorphic-parameter-extension` | `accepted_repair` | The live lemma still supplies the bounded punctured-slice parameter extension exactly as the Hartogs page states, and its contract entry matches. |
| `touched:9:lem-holomorphic-dependence-of-slice-laurent-coefficients` | `amended_repair` | The mathematics was already sound, and 6b only tightened the stale empty-case boundary row in the contract to match the fixed nonempty Laurent index set. |
| `touched:9:lem-indented-arc-residue-limit` | `accepted_repair` | The live indentation estimate still matches its current contract row and remains coherent with the principal-value branch. |
| `touched:9:lem-local-boundedness-of-separately-holomorphic-functions` | `amended_repair` | The scope restore remains, and 6b additionally replaced the unsupported compactness jump with a Hartogs-lemma style disc-average argument on the subharmonic coefficient family. |
| `touched:9:lem-local-hartogs-extension-across-polydisc-shells` | `amended_repair` | The scope restore remains, and 6b additionally rebuilt the extension by an explicit Cauchy-integral kernel in z_1 with separate holomorphy plus local boundedness, removing the unsupported assembled-function leap. |
| `touched:9:lem-propagation-and-gluing-of-hartogs-extensions` | `amended_repair` | The live lemma now requires every connected overlap component to meet G, which is exactly the hypothesis needed for the identity-theorem gluing step in the repaired proof. |
| `touched:9:lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure` | `accepted_repair` | The live lemma still removes the negative Laurent tail exactly as the Hartogs-figure extension proof needs, and its contract entry matches. |
| `touched:9:thm-hartogs-extension-across-compact-holes` | `amended_repair` | The scope restore remains, and 6b additionally narrowed the finite shell-cover hypothesis to the componentwise overlap condition inherited from the repaired gluing lemma. |
| `touched:9:thm-hartogs-figure-extension` | `accepted_repair` | The live theorem still gives the local Hartogs extension exactly as the page needs, and its current contract entry matches. |
| `touched:9:thm-hartogs-separate-holomorphy` | `accepted_repair` | The carrier itself did not need a further text edit: its only missing ingredient was the cited local-boundedness lemma, and that dependency now closes on current disk. |
| `touched:9:thm-keyhole-residue-formula-mellin-rational-integrals` | `accepted_repair` | The live theorem still states the keyhole residue formula exactly as the current examples and contract row use it. |
| `touched:9:thm-removability-of-a-puncture-in-several-complex-variables` | `accepted_repair` | The live theorem still gives the several-variable puncture-removability route exactly as the Hartogs page needs, and its contract entry matches. |
| `touched:9:thm-riemann-extension-across-a-coordinate-hyperplane` | `accepted_repair` | The live theorem still gives the coordinate-hyperplane extension route exactly as the Hartogs page needs, and its contract entry matches. |
| `page:9:the-hartogs-phenomena` | `amended_repair` | The restored A-page prose remains, and 6b additionally rewrote the second paragraph to match the repaired Hartogs-lemma and finite-shell-cover route. |
| `page:9:the-hartogs-phenomena-examples` | `accepted_repair` | The restored examples page still matches the live Hartogs examples and counterexamples and needed no 6b amendment. |

## Focused checks

Ran on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-harmonic-majorant-characterization-of-plane-subharmonicity.md items/thm-c-two-characterization-of-plane-subharmonicity.md items/lem-boundary-point-whose-complementary-component-contains-another-point-is-regular.md items/thm-upper-envelope-theorem-for-plane-subharmonic-functions.md items/fs-the-perron-envelope-always-attains-the-boundary-data.md items/lem-local-boundedness-of-separately-holomorphic-functions.md items/lem-local-hartogs-extension-across-polydisc-shells.md items/lem-propagation-and-gluing-of-hartogs-extensions.md items/thm-hartogs-extension-across-compact-holes.md` -> reflowed the five touched carriers that needed canonical formatting; the other edited carriers were already canonical.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-3.proof-contracts.json thm-harmonic-majorant-characterization-of-plane-subharmonicity thm-c-two-characterization-of-plane-subharmonicity lem-boundary-point-whose-complementary-component-contains-another-point-is-regular thm-upper-envelope-theorem-for-plane-subharmonic-functions fs-the-perron-envelope-always-attains-the-boundary-data thm-poisson-modification-preserves-subharmonicity-and-majorizes thm-perron-envelope-is-harmonic` -> regenerated `7`, skipped `0`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-9.proof-contracts.json lem-local-boundedness-of-separately-holomorphic-functions lem-local-hartogs-extension-across-polydisc-shells lem-propagation-and-gluing-of-hartogs-extensions thm-hartogs-extension-across-compact-holes` -> regenerated `4`, skipped `0`.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-harmonic-majorant-characterization-of-plane-subharmonicity.md items/thm-c-two-characterization-of-plane-subharmonicity.md items/lem-boundary-point-whose-complementary-component-contains-another-point-is-regular.md items/thm-upper-envelope-theorem-for-plane-subharmonic-functions.md items/fs-the-perron-envelope-always-attains-the-boundary-data.md items/lem-local-boundedness-of-separately-holomorphic-functions.md items/lem-local-hartogs-extension-across-polydisc-shells.md items/lem-propagation-and-gluing-of-hartogs-extensions.md items/thm-hartogs-extension-across-compact-holes.md` -> `9 checked, 0 failing`.
- `node tools/rendercheck.mjs items/thm-harmonic-majorant-characterization-of-plane-subharmonicity.md items/thm-c-two-characterization-of-plane-subharmonicity.md items/lem-boundary-point-whose-complementary-component-contains-another-point-is-regular.md items/thm-upper-envelope-theorem-for-plane-subharmonic-functions.md items/fs-the-perron-envelope-always-attains-the-boundary-data.md items/lem-local-boundedness-of-separately-holomorphic-functions.md items/lem-local-hartogs-extension-across-polydisc-shells.md items/lem-propagation-and-gluing-of-hartogs-extensions.md items/thm-hartogs-extension-across-compact-holes.md library/complex-analysis/the-hartogs-phenomena.md` -> clean on all `10` edited carriers.
- `node tools/proof-contract.mjs research/frontier-20-batch-3.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 32/32 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-20-batch-9.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 23/23 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-3.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-9.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-3.proof-contracts.json --fail-on-contradicted` -> no contradicted candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-9.proof-contracts.json --fail-on-contradicted` -> no contradicted candidates.
- `node tools/content-policy.mjs research/frontier-20-batch-3.pages.json` -> `40 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-20-batch-9.pages.json` -> `58 scoped item(s), 0 error(s), 0 warning(s)`.

## Blockers

- None inside group `b` scope after the current repairs.

## Files changed in this Alpha pass

- `items/thm-harmonic-majorant-characterization-of-plane-subharmonicity.md`
- `items/thm-c-two-characterization-of-plane-subharmonicity.md`
- `items/lem-boundary-point-whose-complementary-component-contains-another-point-is-regular.md`
- `items/thm-upper-envelope-theorem-for-plane-subharmonic-functions.md`
- `items/fs-the-perron-envelope-always-attains-the-boundary-data.md`
- `items/lem-local-boundedness-of-separately-holomorphic-functions.md`
- `items/lem-local-hartogs-extension-across-polydisc-shells.md`
- `items/lem-propagation-and-gluing-of-hartogs-extensions.md`
- `items/thm-hartogs-extension-across-compact-holes.md`
- `library/complex-analysis/the-hartogs-phenomena.md`
- `research/frontier-20-batch-3.proof-contracts.json`
- `research/frontier-20-batch-9.proof-contracts.json`
- `research/frontier-20-alpha-b-6b-decisions.json`
- `research/frontier-20-alpha-b-6b.md`

## Next action

- Append the closed ledger rows for group `b`, stamp the current carrier hashes into `research/frontier-20-alpha-b-6b-decisions.json`, and run `step6-scope` adjudication checks for the repaired group.

## Gate repair — `risk-report` cycle 5-b

Ran on Thursday, August 27, 2026.

- Reproduced the scoped primary gate on the live 13-item batch-3 set with
  `node tools/risk-report.mjs research/frontier-20-batch-3.proof-contracts.json --items lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined,thm-harmonic-majorant-characterization-of-plane-subharmonicity,thm-c-two-characterization-of-plane-subharmonicity,thm-plane-subharmonic-functions-are-locally-integrable,thm-log-modulus-of-a-holomorphic-function-is-subharmonic,thm-decreasing-limit-theorem-for-plane-subharmonic-functions,thm-upper-envelope-theorem-for-plane-subharmonic-functions,thm-poisson-modification-preserves-subharmonicity-and-majorizes,thm-perron-envelope-is-harmonic,thm-barrier-characterization-of-regular-boundary-points,thm-perron-solves-dirichlet-on-regular-plane-domains,lem-boundary-point-whose-complementary-component-contains-another-point-is-regular,thm-conformal-transport-of-plane-dirichlet-solutions --require-reviewed`
  before any new writes; it matched the dispatch exactly with `13` routed
  items and `13` `risk-review-missing` errors.
- Reopened all 13 live carriers against the current batch-3 contract, the
  earlier batch-3 refuter evidence in
  `research/frontier-20-dispatch/refuter-refute-3.result.json`, the prior
  Alpha-b adjudication record, and the cited Axler/Boas source routes for the
  barrier/Perron branch.
- Three additional current-carrier defects were real on Thursday, August 27,
  2026:
  - `gate:f20-b-g3-1` on
    `thm-plane-subharmonic-functions-are-locally-integrable`
    — `confirmed_fatal`. Step `1.2` still asserted propagation of an open
    `-\infty` disc without writing the positive-arc circle-average argument or
    the connected-component propagation. The repaired proof now carries the
    polygonal-chain propagation argument needed to force the contradiction.
  - `gate:f20-b-g3-2` on
    `thm-poisson-modification-preserves-subharmonicity-and-majorizes`
    — `confirmed_fatal`. Step `2.1` still applied Harnack convergence at an
    unlicensed point `z_0` with `u(z_0)>-\infty`. The repaired proof now cites
    local integrability to obtain the finite anchor in `D`.
  - `gate:f20-b-g3-3` on
    `thm-barrier-characterization-of-regular-boundary-points`
    — `confirmed_fatal`. The converse branch's chosen boundary datum did not
    prove the required uniform negative bound away from `\zeta`. The repaired
    proof now uses `\psi(\eta)=-|\eta-\zeta|^2` and the subharmonic weight
    `q(z)=|z-\zeta|^2`.
- No surviving content defect remained on the other 10 live carriers after the
  current reread. Wrote complete Alpha `risk_review` blocks for all 13 live
  batch-3 items.

### Focused checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-plane-subharmonic-functions-are-locally-integrable.md items/thm-poisson-modification-preserves-subharmonicity-and-majorizes.md items/thm-barrier-characterization-of-regular-boundary-points.md`
  - reflowed the three repaired carriers once, then stayed canonical.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-plane-subharmonic-functions-are-locally-integrable.md items/thm-poisson-modification-preserves-subharmonicity-and-majorizes.md items/thm-barrier-characterization-of-regular-boundary-points.md`
  - `3 checked, 0 failing`.
- `node tools/rendercheck.mjs items/thm-plane-subharmonic-functions-are-locally-integrable.md items/thm-poisson-modification-preserves-subharmonicity-and-majorizes.md items/thm-barrier-characterization-of-regular-boundary-points.md`
  - clean on all `3` repaired carriers.
- `node tools/proof-contract.mjs research/frontier-20-batch-3.proof-contracts.json --strict --items lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined,thm-harmonic-majorant-characterization-of-plane-subharmonicity,thm-c-two-characterization-of-plane-subharmonicity,thm-plane-subharmonic-functions-are-locally-integrable,thm-log-modulus-of-a-holomorphic-function-is-subharmonic,thm-decreasing-limit-theorem-for-plane-subharmonic-functions,thm-upper-envelope-theorem-for-plane-subharmonic-functions,thm-poisson-modification-preserves-subharmonicity-and-majorizes,thm-perron-envelope-is-harmonic,thm-barrier-characterization-of-regular-boundary-points,thm-perron-solves-dirichlet-on-regular-plane-domains,lem-boundary-point-whose-complementary-component-contains-another-point-is-regular,thm-conformal-transport-of-plane-dirichlet-solutions`
  - `0 error(s), 0 warning(s), 13/13 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-3.proof-contracts.json --fail-on-missing-quote`
  - no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-20-batch-3.proof-contracts.json --fail-on-contradicted`
  - no contradicted candidates.
- `node tools/risk-report.mjs research/frontier-20-batch-3.proof-contracts.json --items lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined,thm-harmonic-majorant-characterization-of-plane-subharmonicity,thm-c-two-characterization-of-plane-subharmonicity,thm-plane-subharmonic-functions-are-locally-integrable,thm-log-modulus-of-a-holomorphic-function-is-subharmonic,thm-decreasing-limit-theorem-for-plane-subharmonic-functions,thm-upper-envelope-theorem-for-plane-subharmonic-functions,thm-poisson-modification-preserves-subharmonicity-and-majorizes,thm-perron-envelope-is-harmonic,thm-barrier-characterization-of-regular-boundary-points,thm-perron-solves-dirichlet-on-regular-plane-domains,lem-boundary-point-whose-complementary-component-contains-another-point-is-regular,thm-conformal-transport-of-plane-dirichlet-solutions --require-reviewed`
  - `0 error(s), 13 item(s) routed`.
- `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 3`
  - `0 error(s)`.
- `node tools/defect-ledger.mjs append --file research/frontier-20-alpha-b-6b-ledger-rows.json`
  - appended `3` gate rows to `research/defect-ledger.jsonl` and refreshed `research/DEFECT-LEDGER.md`.

### Current gate result

- The live `risk-report` gate is now green for this dispatch's 13-item scope:
  `0` errors on Thursday, August 27, 2026, with all required Alpha
  `risk_review` rows present.
- The earlier Alpha-b `Next action` note is now complete for batch `3`: the
  gate decisions are stamped, the matching ledger rows are appended, and the
  local `step6-scope` check returns `0 error(s)`.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for group `b` on the current tree and confirmed that the touched obligations below no longer equal the exact post-reader carriers recorded in `research/frontier-20-step6-hash-*-post.json`.
- The earlier batch-3/batch-9 touched-table evidence remains the mathematical closure record for the original reader defects; the supersession below updates only the exact carrier-state verdict after later risk_review and current-byte repairs.
- Reclassified these contract-only touched obligations from `accepted_repair` to `amended_repair` because the live carriers now also include the later Alpha `risk_review` contract state:
  - `touched:3:ex-basic-plane-subharmonic-functions`
  - `touched:3:lem-local-subharmonic-peak-function-globalizes`
  - `touched:3:thm-decreasing-limit-theorem-for-plane-subharmonic-functions`
  - `touched:3:thm-exterior-disc-and-exterior-cone-points-are-regular`
  - `touched:9:ex-hartogs-figure-in-modulus-coordinates`
  - `touched:9:fs-every-domain-in-c-two-is-a-domain-of-holomorphy`
  - `touched:9:lem-bounded-punctured-slice-has-holomorphic-parameter-extension`
  - `touched:9:lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure`
- Reclassified these touched obligations from `accepted_repair` to `amended_repair` because the live item bytes also changed after the post-reader snapshot through later in-scope repairs already recorded elsewhere in this run:
  - `touched:3:thm-barrier-characterization-of-regular-boundary-points`
  - `touched:9:cex-misidentifying-a-double-pole-gives-the-wrong-residue`
  - `touched:9:cor-hartogs-figure-obstruction-to-domain-of-holomorphy`
  - `touched:9:def-hartogs-figure-and-polydisc-hull`
  - `touched:9:ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x`
  - `touched:9:lem-indented-arc-residue-limit`
  - `touched:9:thm-hartogs-figure-extension`
  - `touched:9:thm-keyhole-residue-formula-mellin-rational-integrals`
  - `touched:9:thm-removability-of-a-puncture-in-several-complex-variables`
- No new mathematical defect or new defect-ledger row was introduced by this repair; it is a stale adjudication-state correction on current disk.
- Focused reruns on Thursday, August 27, 2026: `node tools/step6-scope.mjs check --run frontier-20 --phase adjudicate` and `node tools/step6-scope.mjs check --run frontier-20 --phase final` each returned `step6-scope: 522 item(s) routed, 146 adjudication obligation(s), 0 error(s)`.
