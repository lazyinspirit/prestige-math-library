# Frontier 33 Step 6b — group e adjudication

- Run: `frontier-33`
- Role / dispatch: group Alpha, `6b-e`
- Owned batches: `9`, `10`
- Live decision routes: 86 computed `post-reader:<batch>:<id>` item-carrier obligations; no routed reader, refuter, page, or originally touched obligations.

## Frozen evidence and queue

The batch 9 and 10 reader reports, findings JSON, refuter reports, current manifests, current item carriers, proof contracts, and exact Facts blocks were compared with `research/frontier-33-step6-hash-{9,10}-post.json` and `research/frontier-33-step6-hash-{9,10}-pre-6b.json`. The reader and refuter reports are evidence only: both independently report complete owned-scope coverage and no findings, and the published scope JSON contains no reader/refuter obligations.

The post-reader/pre-6b comparison has 44 changed batch-9 item carriers and 42 changed batch-10 item carriers. In every case the item, page, manifest, and provenance hashes are unchanged; the changed component is `contract_sha256`. The causal gate record is `research/frontier-33-alpha-contract-audit.md`: its stage-5 repair replaced repeated generic boundary dispositions with carrier-specific verification records. Its two stale empty rows and its separately identified mathematical repairs belong to other batches. Group e therefore independently adjudicates each owned contract repair as a computed touched obligation and does not claim another group's content.

## Mathematical review checkpoint

Batch 10 HIGH/CRITICAL review completed for these exact current carriers:

`lem-affine-fibre-product-projections-stalk-maps`, `lem-fibre-product-open-restriction`, `lem-fibre-products-glue-over-open-covers`, `lem-tensor-ring-presentations-for-base-change`, `lem-field-valued-points-of-schemes`, `thm-affine-fibre-coordinate-ring`, `lem-points-of-fibre-primes-over-point`, `lem-points-of-scheme-fibre-product-residue-tensors`, `lem-fibre-after-base-change`, `lem-geometric-fibre-choice-independent`, `lem-base-change-open-closed-immersions`, `lem-subscheme-intersection-fibre-product`, `lem-base-change-locally-finite-type-presentation`, `lem-affineness-from-unit-generating-global-sections`, `lem-affine-morphism-local-on-target`, `lem-base-change-affine-morphisms`, `thm-classical-product-agrees-scheme-product`, `lem-base-change-surjective-morphisms`, `lem-immersions-and-localizations-monomorphisms`, `ex-fibre-family-xy-equals-t`, `ex-nonreduced-fibre-x-squared-equals-t`, `ex-base-change-real-conic-to-complex`, `cex-domain-tensor-algebraic-closure-reducible`, `ex-product-affine-lines-plane`, `ex-fibre-closed-immersion`, `ex-graph-polynomial-map-closed-subscheme`, `cex-set-theoretic-fibre-loses-multiplicity`, and `cex-purely-inseparable-base-change-nonreduced`.

The review checked the universal-property and affine tensor descriptions, contractions and stalk/residue-field maps, localization/quotient order, empty and zero tensor rings, arbitrary base change without flatness, image ideals for closed immersions, finite and empty intersections, Choice-dependent common-field and prime-existence arguments, nonclosed points, geometric-fibre scalar transport, affineness locality, scheme-versus-point-set fibres, multiplicities, characteristic-two and characteristic-$p$ cases, and classical-product irreducibility. Exact dependency statements were available in each current Facts block. No defective batch-10 claim, hypothesis, quantifier, computation, witness, or citation use was found in this review.

The fourteen additional batch-10 computed repairs were also checked against their current proofs and Facts: fibre-product uniqueness/existence, tensor-product universality including the zero ring, products and units over a base, associativity, iterated base change, fibre stalks, field extension charts, target-local quasi-compactness, finite type, diagonals, graphs, the empty localization fibre, and the characteristic-two quadratic self-product all agree with their carrier-specific contract records.

Batch 9 HIGH/CRITICAL review completed for all 43 ids in the scope, including the three risk-routed carriers that did not change between snapshots. The review checked chain and Krull dimension conventions; nonempty irreducibility; affine-chart function fields; transcendence-degree and height formulas; normalization after shrinking; constructible-image induction; fibre lower bounds and generic purity; reducible-source component formulas; projective cone, hypersurface, equation, intersection, avoidance, and closed-projection arguments; semicontinuity; closed-family irreducibility; module-finite fibres; and every displayed example/counterexample. It specifically checked $r=0$, $n=0$, empty fibres and empty maxima, zero/redundant equations, Choice uses, nonunits, reducible special fibres, inseparability, characteristic two, projective vertex-only loci, and both directions of every equivalence. The four additional computed repairs—`lem-dimension-finite-union-components`, `lem-chain-dimension-open-cover`, `lem-constructible-boolean-operations`, and `lem-constructible-dense-contains-open`—also match their current claims and exact Facts.

Across both batches, every contract citation quote matches its current Facts statement, every numbered derivation corresponds to the current proof, and each boundary disposition now gives carrier-specific evidence or a claim-specific reason for non-applicability. No item, page, manifest, provenance, or impact repair is warranted.

## Decisions and ledger accountability

`research/frontier-33-alpha-e-6b-decisions.json` contains exactly 86 unique decisions with 86 unique ledger references:

- batch 9: 44 computed touched obligations — 4 `accepted_repair`, 40 `amended_repair`;
- batch 10: 42 computed touched obligations — 14 `accepted_repair`, 28 `amended_repair`.

The 18 accepted repairs equal their pre-6b gate carriers. The 68 amended repairs retain the same gate repair and add the required completed HIGH/CRITICAL `risk_review`, so their live contract carriers differ from both the post-reader and pre-6b snapshots. The remaining three batch-9 HIGH/CRITICAL reviews were required by risk routing but had no post-reader/pre-6b carrier change and therefore correctly create no extra decision.

The append-only ledger interface appended 86 closed, nonfatal `contract-mismatch` rows (`f33-e6b-contract-001` through `f33-e6b-contract-086`). These rows account for a semantic verification-record defect—the old repeated boundary wording did not itself evidence the named carrier—not a command or formatting failure. Every row names its current item, owned batch contract, and the causal gate audit. No reader/refuter finding row was invented because both owned finding sets are empty.

## Validation

- `risk-report.mjs` without `--require-reviewed`: 43 required HIGH/CRITICAL items in batch 9 and 28 in batch 10 identified and reviewed.
- `risk-report.mjs --require-reviewed`: 0 errors for both owned batch contracts; 43/43 and 28/28 reviews are complete under reviewer `alpha-6b-e`.
- `proof-contract.mjs --strict`: 47/47 batch-9 and 42/42 batch-10 items checked, 0 errors and 0 warnings.
- `boundary-audit.mjs --fail-on-template`: 376 batch-9 rows and 336 batch-10 rows checked; no template reuse at the threshold and no contradicted dispositions.
- `defect-ledger.mjs validate --run frontier-33`: 0 errors; all 86 group-e references are present, unique, and closed.
- The current-carrier comparison found no group-e route, verdict, carrier-state, or ledger mismatch. `subject_sha256` is deliberately left to the stage-owned stamp operation. The owned-batch adjudication command's only two additional errors are a shared published-content check for batch 6: `published-claim-extra` on `def-tensor-product-total-complex-of-chain-complexes` and `published-repair-extra` on `reader:6:1`. Group-c has published its repair receipt but has not yet published its decisions file, so these are outside group e and must not be repaired here.

Group e has no unresolved mathematical obligation and has not judged or requested a stage transition. The decision hashes remain for the configured stage to stamp. The shared batch-6 checker condition is the sole external focused-gate blocker at handoff.
