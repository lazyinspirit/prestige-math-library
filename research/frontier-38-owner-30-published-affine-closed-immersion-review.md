# Published affine closed immersion proof repair

Run frontier-38-owner-30, 2026-10-03. Exact item: `thm-affine-closed-immersions-quotient-rings`. The published Statement is byte-for-byte unchanged; status remains published. This lane edited only this item and scoped evidence. No source metadata changed; no shared ledger, manifest, runtime, outside consumer or new audit/judge stamp was written.

## Finding and actual repair

The canonical A-P finding remains applicable to the old proof: step 1.1 imported all of Stacks 01IN. A fresh successful retrieval and complete proof reading of 01IN and 01IH confirmed that 01IN uses 01IH, whose proof invokes the affine quasi-coherent equivalence and its kernel theorem. That import was not justified by the old three declared prerequisites. The theorem itself is true.

Read the complete published direct reconstruction `lem-closed-immersion-affine-quotient-and-base-change`, the complete finite-principal-cover criterion `lem-affineness-from-unit-generating-global-sections`, and the actual primitive interfaces. The direct reconstruction's recursive deps closure has 465 published nodes, no missing target/cycle/recorded-unproved supplier, and does not reach the repaired theorem. Its hash list and 24 direct consumers of the repaired theorem are recorded in `research/frontier-38-owner-30-published-affine-closed-immersion-closure.json`.

The replacement proof supplies the argument directly rather than importing the conclusion. It constructs a finite principal cover of the closed subspace subordinate to affine charts, uses vanishing sets and prime-ideal detection to write a unit relation modulo its defining closed-set ideal, proves the remaining terms nilpotent uniformly on the finite affine cover, and obtains global sections generating the unit ideal. The finite sheaf-equalizer/localization criterion then makes Z affine. Computing direct-image stalks over all primes gives surjectivity of the localized ring maps; an annihilator/maximal-ideal argument forces their global cokernel to vanish. The converse checks quotient-spectrum topology and stalk surjectivity. The unique kernel gives the ideal and unique isomorphism over the original affine scheme.

Empty covers, empty subschemes, A=0, B=0 and I=A are covered explicitly. Nilpotence is uniformly bounded using only the finite charts and finitely many chosen ideal elements. No Noetherian, finite-generation or reducedness assumption was introduced. Finite products suffice in the sheaf equalizer, so localization preserves them. No later quasi-coherent equivalence is used by the new proof or its actual suppliers. Current repaired target closure has 435 nodes, all published, zero graph errors. Graph checking is not claimed as a fresh complete audit of all foundational proofs.

## Choice disposition and bounded consumers

The original Statement and Facts did not assert choice-freeness. The old dependency chain already reached AC by

`target -> thm-affine-scheme-ring-anti-equivalence -> thm-sections-basic-open-affine-scheme -> thm-structure-sheaf-affine-scheme -> lem-structure-presheaf-basic-open-well-defined -> lem-spectrum-compactness-open-cover-to-unit-ideal -> thm-proper-ideal-contained-in-maximal-ideal -> def-axiom-of-choice`.

The new proof exposes these ambient uses in Facts/deps: detecting the unit ideal, identifying nilradical elements, and detecting a nonzero localized cokernel. The finite subcovers require no choice. No new AC-reachable consumer is introduced: all 412 current transitive deps consumers already inherited AC through the old target. No original claim hypothesis was strengthened.

Parent should correct the batch22 report's lines85 and227 asserting choice-free proof/no AC dependency. Exact actual uses:

- `lem-closed-subgroup-scheme-valued-point-criterion`: F2 and proof step3.1 use the target's quotient presentation to pull back the finite affine cover of G and prove H finite type. Its Given and direct deps omit explicit AC.
- `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`: F1 and step1.1 use that criterion to induce the closed subgroup laws. Its Given and direct deps likewise omit explicit AC. Explicit Hopf algebra formulas could bypass the criterion use, but this lane has not changed it.
- `ex-affine-extension-of-an-abelian-variety`, the other selected direct consumer, already declares AC in deps/Given. No Choice correction identified there.

The scoped evidence lists every selected-run transitive consumer with hashes and its actual Choice text. Only one selected item has a literal choice-free assertion: `lem-closed-immersion-projection-formula-invertible` says its own proof is choice-free *beyond the cited sheaf and tensor constructions*. That qualification does not assert choice-free recursive suppliers. No blanket 412-item repair is opened. These consumer metadata findings predate this proof repair; parent coordinates the bounded selected-run correction after active authors drain.

## Full source reads

Successfully retrieved complete HTML and read the complete statements and proofs on 2026-10-03:

| URL | Retrieved raw SHA-256 |
|---|---|
| https://stacks.math.columbia.edu/tag/01IN | `a285f245d0b5ee5bfae26e4bf59c4ddd3e6113072d6a729b6fd68cc081354326` |
| https://stacks.math.columbia.edu/tag/01IH | `3ecae9829dc6044ba64e35730e75ed074509de578413bbf29f95e45e871548b6` |
| https://stacks.math.columbia.edu/tag/01QF | `2f90fa62538c9a4a604ff502049bcbcb824a4376c3034e938fa77c58d300bf9a` |

The 01QF source proof goes through quasi-affine results. The local published finite-equalizer proof was independently read and checked in full; the repair uses that earlier elementary proof instead. No additional source waiver is needed.

## Stable hashes and parent receipt integration

`research/frontier-38-owner-30-published-affine-closed-immersion-evidence.json` gives the full current supplier hashes, exact old/new deps, source delta (empty), current selected consumer hashes, before/post hashes and actual check output. It is a handoff evidence carrier, not a finalized local published repair receipt.

- Durable before file: `research/frontier-38-owner-30-published-affine-closed-immersion.before.md`.
- Before raw SHA-256: `b27714084a5966016dd71a7674f7efcfd064e73fbf71361d24b5c88d8b222412`.
- Before canonical `pre_sha256`: `b9abf15d531c4a973d27758e9f3a94a9e6af2e2d6ca72bd978f06e1f8f87c9a6`.
- Current raw SHA-256: `886667a1c82d28b94066b71bb9208d88938baa1cdd60e9b749cec8cb24476840`.
- Current canonical `content_sha256`: `52d0cdcdc7beace2b27432c5b78e4bef084d947a897463d314da6da579e1e135`.

Canonical hashes were computed by `itemHashGuard` in tools/item-hash.mjs. Parent must add its ownership group, canonical ledger marker/hash and dated local checks to the policy receipt, and replace the stale historical verification block with `verification.repair` as appropriate. The preserved old audit/judge block attests only the old bytes; this lane did not renew it. No current independent audit or engine judgment is claimed.

After the final mathematical edit, precheck initially proposed phase renumbering, which was adopted. Final explicit-path precheck: exit0, one checked, zero failed. Final rendercheck: exit0, one checked, zero errors/warnings. Final proof-layout, after all item edits: exit0, one item, five steps, zero defects. Commands and outputs are in the scoped evidence. No engine gate or test suite ran.

Mathematical confidence: complete direct proof checked, no unresolved defect or blocked supplier identified. Parent handles canonical ledger/receipt and stable central evidence recertification. The prior quotient-closure receipt includes the old published theorem hash and must be refreshed during that central pass; the four quotient item bytes themselves remain unchanged. This lane's item authoring is stopped.

## Authorized extension: two batch22 consumers repaired

After the initial published-item handoff, parent explicitly extended this same supplier lane to the completed batch22 consumers `lem-closed-subgroup-scheme-valued-point-criterion` and `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`, their exact two manifest entries and their exact two proof-contract entries. The consumer metadata findings above are now repaired in those authorized carriers. This does not modify the historical report assertions; parent should append a dated correction to the batch22 author report stating that its original choice-free/noAC assertions were incomplete because of already inherited supplier AC.

Both statements are byte-for-byte unchanged. Each now lists `def-axiom-of-choice`, includes AC in Given, and has a specific fact tracing it to the actual supplier. Criterion step3.1 carries its F3 tag for affine quotient presentations; counterexample step1.1 carries its F4 tag for the criterion's induced group laws. No mathematical construction changed. Their two manifest deps arrays now match. Their contract citations quote the unchanged AC Definition exactly; the added proof-input tokens and nonempty-choice boundary rows record the supplier inheritance. The old source quotes in the quotient theorem's Statement and the criterion's Statement remain exact because both Statements are unchanged.

`research/frontier-38-owner-30-choice-consumers-evidence.json` records each durable before file and exact before/post raw and canonical hashes. Existing item decisions need parent final dependency-ordered recertification because item and supplier hashes changed; this lane did not alter owner or item decisions. Other published consumer metadata findings remain recorded.

Preservation comparison confirms that all other three manifest entries, all target source rows and non-deps manifest fields, the unrelated example proof contract and the contract scope are unchanged. No source/coverage, page, global plan or canonical ledger row was edited.

Final consumer checks after all edits: explicit-path precheck exit0, 2 checked/0 failed; rendercheck exit0, 2 checked/0 errors/0 warnings; strict proof-contract check restricted to the two IDs exit0, 0 errors/0 warnings; final exact two-path proof-layout exit0, 2 items/6 steps/0 defects. Full commands:

- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/tsx-run.mjs tools/precheck.mts items/lem-closed-subgroup-scheme-valued-point-criterion.md items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md --json`
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/rendercheck.mjs items/lem-closed-subgroup-scheme-valued-point-criterion.md items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md --json`
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-contract.mjs research/frontier-38-owner-30-batch-22.proof-contracts.json --strict --items lem-closed-subgroup-scheme-valued-point-criterion,cex-alpha-p-mu-p-rational-points-do-not-detect-scheme --json`
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/lem-closed-subgroup-scheme-valued-point-criterion.md items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md`

All three item files and the two authorized manifest/contract entries are now stable. Parent's canonical published-repair receipt still needs ownership/ledger binding and replacement of the target's stale historical audit marker; source and mathematical checks are supplied in this lane's handoff evidence.

### Authentic published-repair ownership checkpoint

Parent found that the required `research/frontier-38-owner-30-step5-published-claims.jsonl` pre-edit ownership claim is absent. No claim or receipt was invented or backdated. Parent will preserve the reviewed corrected bytes and before snapshot, restore the verified original bytes briefly, run the normal ownership claim, reapply these exact corrected bytes, then run fresh explicit target precheck/rendercheck bound to the canonical content hash. Parent owns that authentic sequence, canonical ledger binding, final policy receipt and verification replacement. This lane has stopped all further target writes. The source reads, mathematical repair review, exact content hashes and draft consumer repairs above remain the current handoff.

## Gate repair: inline the finite-cover affineness argument

Parent's actual dependency gate found a defect in this lane's first repaired carrier: `lem-affineness-from-unit-generating-global-sections` is homed on the later fibre-product page (order366.0565), whereas the target is on the subscheme page (order366.055). Its dependency created a page cycle. This was caused by the earlier repair and is now corrected; the earlier claim that its graph checks established complete readiness did not include this page-order defect.

Removed that helper from deps and F3 entirely. Added the earlier `thm-sheaf-equalizer-condition` (presheaves/sheaves page, order366.04021), whose complete proof was read. Expanded step3.1 into the full finite principal-cover proof: global B is a module kernel for a finite affine-cover sheaf equalizer; exact localization and finite common denominators commute with its kernel and products; the localized factors are sections of actual double/triple intersections; the equalizer for the cover of U_k then gives the restriction ring isomorphism B_fk=C_k. The identity of B defines the canonical map, whose restrictions over D_B(f_k) are isomorphisms by affine anti-equivalence. The unit-generating functions cover both sides, so local inverses glue. The empty list gives the empty scheme and zero ring explicitly. No later-page result, rehoming or new item was used. The original Statement remains unchanged.

`research/frontier-38-owner-30-published-affine-closed-immersion-inline-evidence.json` supersedes the earlier current target hashes and records the durable pre-inline carrier, exact final hashes, all nineteen direct supplier home/order/hash rows and focused depcheck output. Every current supplier is on an earlier page or is an earlier item of the target page. The source proof reads of 01IN/01IH/01QF above remain applicable comparisons; the new proof relies only on actual earlier local suppliers and contains the complete finite equalizer argument.

After the last target edit: precheck exit0, one checked/zero failed; rendercheck exit0, one checked/zero errors/warnings; proof-layout exit0, one item/five steps/zero defects. Focused `node tools/depcheck.mjs --items-file /tmp/affine-closed-repair-items.json --json` runs full page metadata/cycle checks and reports zero target item errors, zero item cycles and zero page cycles. It exits1 for seven other-lane global findings: two absent blowup page items and five B-leaf content edges; exact rows are retained in the scoped inline evidence. This is not a claim that the complete run gate is green. An initial invocation with unsupported `--items` accidentally ran full scope; its findings also had no cycle, but the recorded focused invocation above is the actual target check.

The verification block was preserved byte-for-byte from the disk carrier read for this correction (it contained the historical audited/judge block, with no repair field at this checkpoint). This lane neither added nor renewed verification. Parent owns the existing authentic ownership claim, canonical ledger/current repair receipt integration and any metadata discrepancy; no new claim or restore sequence was performed. The two draft consumers' inherited AC annotations remain mathematically valid and untouched, while their current supplier hashes require parent recertification.
