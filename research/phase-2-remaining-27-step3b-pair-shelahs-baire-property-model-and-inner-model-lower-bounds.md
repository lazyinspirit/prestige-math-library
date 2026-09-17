# Step 3b — scaffold audit, repair and authoring: `shelahs-baire-property-model-and-inner-model-lower-bounds`

- Run: `phase-2-remaining-27`, stage `3b-author`, role alpha-high
- Dispatch: `step3b-pair-shelahs-baire-property-model-and-inner-model-lower-bounds-64e210a5ff730193`
- A page: `shelahs-baire-property-model-and-inner-model-lower-bounds` (order 703, 29 items)
- B page: `shelahs-baire-property-model-and-inner-model-lower-bounds-examples` (order 704, 5 items,
  including the owner-added `ex-sweet-amalgam-over-a-common-complete-subalgebra`)
- Batch: 15. Output manifest `research/phase-2-remaining-27-batch-15.pages.json` (unchanged);
  contracts `research/phase-2-remaining-27-batch-15.proof-contracts.json` (new, 34 entries).

## Disposition

All 34 items and both page files are authored and on disk; the batch contract passes strict
mode. 33 items are recorded `accept` with confidence 1; **one item is recorded `escalate`**:
`thm-shelah-universal-meagre-composition-preserves-sweetness` (see "Open obligations"). No
published item, plan entry, selected pair or owner decision was edited. The manifest was
deliberately not rewritten: the owner's `proceed` scope decision hashes the manifest item
statements (`scopeHash`), and the authored item frontmatter is the canonical dependency record.

Because these 34 items did not exist in the pre-author scaffold inventory, they are the
auditor-created class of the dispatch; they were authored directly rather than sent through a
Step-3 review loop.

## Scaffold audit and local repairs

The Step-3a scope review (non-owner `insufficient`, then owner `proceed` with the B enrichment)
is current; the owner's added B item was present in the manifest and is authored. The following
local repairs were made while authoring, all inside the pair and inside the page’s declared
191-page prerequisite closure:

1. `lem-shelah-sweet-forcings-are-sigma-directed-ccc`: the scaffold dependency
   `def-countable-chain-condition` defines ccc for *topological spaces*, while the lemma concludes
   ccc for a *forcing order*. Replaced by
   `def-kappa-closure-distributivity-and-chain-condition` (ccc = aleph-one-cc for forcing
   preorders). The conclusion is the same promised statement.
2. `def-shelah-sweetness-model`: the extension clause’s "complete suborder" was left undefined by
   the scaffold; the definition now fixes it as subset + induced order + every condition of the
   larger order has a condition of the smaller below it (order-density), which is exactly the
   property Claim 7.4 uses (a common strengthening of a compatible pair is below an element of
   the suborder). It also records the induced compatibility equivalence.
3. Quotient reading: `lem-shelah-sweet-density-transfer-along-complete-suborders` and the
   amalgamation/monotonicity items add `def-two-step-forcing-iteration`,
   `thm-forcing-equivalence-and-boolean-completion` and
   `def-complete-boolean-algebra-and-regular-open-sets` as explicit suppliers for the assertion
   `p forces q in Q/P` (p and q compatible; p' below q forces q into the quotient).
4. Choice suppliers declared explicitly where used: `def-countable-choice` on the continuous-union
   and Raisonnier items, `def-axiom-of-choice` on the partial-isomorphism, name-capture and
   HOD(S) items. The choice ledger below records each use.
5. Admissibility/absorption suppliers declared: `def-trees-and-bodies-on-discrete-alphabets`,
   `def-nowhere-dense-meagre-and-residual-subsets` (grafting and finite unions),
   `def-filter` (filter axioms in the Raisonnier lemma), `def-lambda-system` +
   `thm-dynkin-pi-lambda` (zero-one law), `def-complete-metric-baire-principle-over-zf` (the
   local ZF Baire argument for closed subsets of Cantor space),
   `lem-cantor-and-baire-sequence-coding`, `cor-countable-choice-and-omega-one-cofinality`,
   `def-ordinal-definability-and-hod`, `def-lc-inaccessible-and-mahlo-cardinals`,
   `thm-formal-consistency-transfer-by-forcing`.
6. `def-shelah-universal-meagre-forcing` and
   `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` record explicitly that
   the meagre envelope is a countable union of *finite-prefix rearrangements* of the generic
   tree, not the generic tree itself; the scaffold’s warning against the false `[S] subset [U_G]`
   claim is preserved.
7. `def-boldface-sigma-one-three-measurability`, `def-rapid-and-raisonnier-filters` and
   `ex-sweet-amalgam-over-a-common-complete-subalgebra` carry the small equivalences their
   scaffolds promise (dummy-quantifier inclusion; Ishii 3.6 uniform-bounding equivalence and
   `H(cl X)=H(X)`; the displayed modulus/class data). The definition items carry
   `provenance.proof: not-applicable`; the scaffold manifests had `literature-derived` there, and
   no proof statement was dropped.

Every authored item keeps its promised ID, kind, title and claim. The five B items and the
false statement keep their promised claims.

## Choice ledger (as authored)

- ZF, no choice: `def-shelah-sweetness-model`, the sweetness ccc lemma (canonical least class
  index), the UM definition, the absorption lemma, the uniform null-capture lemma (canonical
  least choices plus the local ZF Baire argument), the two filter definitions, the cylinder
  example.
- ZF+DC: density transfer (Claim 7.4 bad-witness recursion), the amalgamation theorem, the
  composition theorem, the continuous-union lemma, the partial-isomorphism extension, the ZF+DC
  verification item, the inner-model Baire-property item.
- ZF+Countable Choice (from DC where applicable): Raisonnier filter complexity, Mokobodzki
  theorem (CC is declared because the published Lebesgue density theorem consumes it), the
  null-code order/Fubini lemma, rapidity, the noninaccessibility real-coding lemma, the
  Sigma-one-three lower bound, the equiconsistency items. The all-measurable lower bound obtains
  Countable Choice from DC explicitly.
- ZFC: the CH-length construction (global well-order and transfinite choices), name capture,
  omega-sequence closure, and the upper-branch formal transfer. The upper and lower branches are
  kept separate; no branch asserts the stronger every-`L[r]` claim.

## Checks actually run (batch 15)

| Check | Result |
|---|---|
| `tools/precheck.mts` on the 29 proof-bearing authored item paths | PASS: 29 checked, 0 failing |
| `tools/rendercheck.mjs` (repo-wide) | No error names any of the 34 items or 2 pages (14 errors remain, all in other groups: Brownian filtration, Lie algebra root spaces) |
| `tools/content-policy.mjs research/phase-2-remaining-27-batch-15.pages.json` (item mode) | PASS: 34 scoped items, 0 errors, 0 warnings |
| `tools/manifest-deps.mjs` (batch manifest) | PASS: 34 items, 0 missing, 0 errors |
| `tools/proof-contract.mjs research/phase-2-remaining-27-batch-15.proof-contracts.json --strict` | PASS: 0 errors, 0 warnings, 34/34 checked |
| `tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template` | PASS: 272 rows, no template cluster, no contradicted disposition |
| `tools/citation-fidelity.mjs ... --fail-on-missing-quote` | PASS: every quote occurs in its cited section |
| `tools/finite-smoke.mjs` (batch contracts) | PASS: 2 checks (cylinder independence for the block construction and the cylinder cover) |
| `tools/gate-liveness.mjs --min-checks 1` | PASS: finite-smoke 2, proof-contract 34, coverage 24, precheck 15370 |
| `tools/coverage-checklist.mjs ... --require-destination` | PASS: 2 pages, 24 harvested results, 0 errors |
| `tools/validate-plan.mjs research/plan-spec.json` | PASS, exit 0 (reading order acyclic; 481 pages still carry no item list, expected pre-splice) |
| `tools/source-fetch-check.mjs --coverage ...batch-15...` | PASS: 5/5 source records fetch-verified and resolved |
| `tools/frontier-dependency-ledger.mjs refresh --require-reviewed` | PASS: refreshed and deduplicated; batch-15 input is `[]` (published page prerequisites only) |
| `tools/depcheck.mjs --quiet` (repo-wide) | FAIL with 7 pre-existing errors, none in this pair (see below) |
| `tools/fwdcheck.mjs --quiet` (repo-wide) | FAIL with 5 pre-existing findings, none in this pair |
| `tools/prosecheck.mjs`, `tools/depsource.mjs`, `tools/extcheck.mjs` (repo-wide) | PASS (extcheck exit 0 with its existing recorded-item warnings) |
| `tools/scope-decisions.mjs check --run phase-2-remaining-27` | Pair scope closed (owner `proceed`); the run-wide check reports 57 current declines from other pairs, outside this dispatch |
| `tools/step3-decisions.mjs record-item` | 34 receipts written: 33 `accept` at confidence 1, 1 `escalate` |

Item decisions were recorded only after each complete item, its proof contract and the batch
checks were on disk; each receipt names the examined dependency IDs and a concrete reason.

## Published concerns for the owner (Phase-3 ledger)

1. `rem-shelah-inaccessible-and-the-baire-property` (published, `proved_here: false`).
   **Confirmed defect, high confidence.** The remark’s "What would prove it" paragraph promises a
   proof of the stronger statement that the ambient `omega_1` is inaccessible in `L[r]` for every
   real `r`; the binding owner direction forbids that strengthening, and the remark’s only
   declared dependency is the recorded `rem-solovay-model`, so neither of its consistency claims
   has a local proof chain. Required suppliers now exist: `thm-baire-property-model-equiconsistent-with-zfc`
   (no-inaccessible Baire model), `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model`
   and `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` (measurability
   lower bound and exact equiconsistency). Repair strategy: replace both clauses with those items
   and rewrite the every-`L[r]` sentence to the authorized `L` conclusion unless the owner
   separately authorizes and reviews a complete relativized proof. The owner’s Step-3a note says
   the item is recorded separately in the canonical Phase-3 ledger; this report re-flags the
   `L[r]` wording as the part that still needs the owner’s direction. This debt is not a
   prerequisite of any authored item here.
2. Two Step-3a observations remain as recorded there and are unaffected by this dispatch:
   the interpretive ambiguity of the design’s phrase "Solovay random-real analysis" (the two
   mathematical roles are covered on this page), and the batch-14 page-level edge to this A page
   (consumer-side row, owned by batch 14).

## Open obligations

1. **Escalated item** `thm-shelah-universal-meagre-composition-preserves-sweetness`. The item is
   fully authored on the name-level setting of Shelah 7.6 (classes A_m, the moduli kappa_m, the
   E-star clauses (i)-(iv), the Subclaim-style stability, directedness by unioning trees, the
   transfer clause by synchronizing moduli, and the extension clauses). Its sequential clause
   states the forced nowhere-density of the amalgamated tree name at mechanism level: the
   recursive simultaneous-omission construction of Shelah 7.6, condition (c) (pp. 38-39) is
   described but not reproduced line by line, so the item is not claimed complete. Exact remedy:
   reproduce that diagonal (the l(i) recursion over the enumerated old classes and the increasing
   nodes nu_i) inside step 5.1, or authorize an equivalent complete local argument. Downstream
   use: `thm-shelah-ch-omega-one-sweet-construction` clause (d) consumes this theorem; the owner
   repair should be rechecked against that consumption.
2. **Condensed but not escalated**, highest priority for the Step-5a reader/refuter passes:
   * `thm-shelah-sweet-amalgamation-preserves-sweetness`, step 8.1 (the union-of-relations
     extension form: the mixed transfer clause between the two disjoint parts);
   * `lem-shelah-continuous-unions-of-sweetness-models`, step 3.2 (the class-stability argument
     that lets the stage sequential clause finish, with the finite-maximum bookkeeping of the
     moduli);
   * `thm-shelah-sweet-partial-isomorphism-extension`, step 4.1 (stagewise computation of
     arbitrary joins by a complete homomorphism).
   These proofs contain the full constructions and verifications at mechanism level; the
   flagged steps should be read as the first targets rather than as accepted skips.
3. **Run-wide gate findings observed but not owned here** (no fix attempted, no ledger entry):
   `depcheck` 7 errors (`def-good-tree-watson-symmetric-stone-model`,
   `rem-raw-versus-usual-filtration-in-the-strong-markov-theorem`,
   `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`,
   `thm-dmc-implies-compact-hausdorff-baire`, plus three `b-leaf-content` findings);
   `fwdcheck` 5 findings in the same areas; `rendercheck` 14 findings in the Brownian-filtration
   and Lie-algebra groups; 57 scope declines missing in other pairs. None involves this pair.
4. **Step 4 pre-splice notes.** `research/plan-spec.json` still lists both pages with empty item
   arrays (expected); the splice source is the manifest, whose item lists match the two authored
   page files exactly (29 and 5, same order). The authored item frontmatter deps differ from the
   manifest deps in the rows listed under "Scaffold audit and local repairs"; all added suppliers
   lie inside the page’s 191-page prerequisite closure, and no manifest statement was changed, so
   the owner scope hash stays current. No prose or plan amendments are requested from Step 4.

## Appendix — checkpoint log (navigation only; the items on disk are the evidence)

1. Items 1-3 (`def-shelah-sweetness-model`, ccc lemma, Claim 7.4) — checkpoints before the first
   compaction; the ccc dependency repair and the complete-suborder repair are recorded above.
2. Items 4-22 — authored in prerequisite order with precheck after each; checkpoint 2 recorded the
   per-item suppliers added (UM, composition, continuous unions, isomorphism extension, the CH
   construction, name capture, homogeneity, the HOD(S) block, the boldface definition, the
   Raisonnier filters, Mokobodzki, the null-code/Fubini lemma, and the uniform capture lemma).
3. Items 23-34 — authored in order, followed by the two page files, the 34-entry proof contract
   (generated from the completed arguments, with exact quotes and per-step inputs), the six batch
   checks above, and the 34 item receipts.

## Completed IDs

A page, 29 items (all authored, all `accept` except where noted):
`def-shelah-sweetness-model`, `lem-shelah-sweet-forcings-are-sigma-directed-ccc`,
`lem-shelah-sweet-density-transfer-along-complete-suborders`,
`thm-shelah-sweet-amalgamation-preserves-sweetness`, `def-shelah-universal-meagre-forcing`,
`lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets`,
`thm-shelah-universal-meagre-composition-preserves-sweetness` (**escalate**),
`lem-shelah-continuous-unions-of-sweetness-models`,
`thm-shelah-sweet-partial-isomorphism-extension`, `thm-shelah-ch-omega-one-sweet-construction`,
`lem-shelah-real-name-capture-and-coded-meagre-unions`,
`lem-shelah-homogeneous-truth-has-baire-representatives`,
`def-shelah-hereditarily-ordinal-sequence-definable-model`,
`lem-shelah-inner-model-is-closed-under-ambient-omega-sequences`,
`thm-shelah-inner-model-satisfies-zf-and-dependent-choice`,
`thm-shelah-inner-model-all-sets-of-reals-have-baire-property`,
`thm-baire-property-model-equiconsistent-with-zfc`, `def-boldface-sigma-one-three-measurability`,
`def-rapid-and-raisonnier-filters`, `lem-raisonnier-family-is-a-sigma-one-three-filter`,
`thm-rapid-filters-are-not-lebesgue-measurable`,
`lem-measurable-null-code-orders-bound-constructible-null-unions`,
`lem-uniform-null-g-delta-capture-functions`,
`thm-raisonnier-filter-is-rapid-from-null-code-measurability`,
`lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one`,
`thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l`,
`thm-all-real-sets-measurable-gives-an-inaccessible-inner-model`,
`thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible`,
`thm-shelah-baire-model-separates-baire-property-from-measurability`.

B page, 5 items (all authored, all `accept`):
`ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`,
`ex-raisonnier-first-difference-cover`, `ex-uniform-null-capture-on-a-block-function`,
`fs-the-baire-property-model-needs-an-inaccessible`,
`ex-sweet-amalgam-over-a-common-complete-subalgebra`.

Pages authored: `library/foundations/shelahs-baire-property-model-and-inner-model-lower-bounds.md`
(29 items listed, matching the manifest order) and its `-examples` companion (5 items listed).
