# Batch 22 repair handoff — frontier-38-owner-30

## Scope and current readiness

The inactive batch22 artifact lane was repaired after the original zero-exit/no-final-response dispatch left an empty manifest. This repair preserves its original success receipt and all engine history. Only the assigned five item files, batch22 manifest/coverage/dependency/notes and the five Step1 readiness records were written. No live page, shared plan, other batch, Step1 report, receipt, runtime state, publication or configuration was edited.

The exact commissioned AG-GS-1 inventory is complete: three A items and two B items, in registered order, with no local additions. Both pages stay below100. Definitions retain every field and nonreduced case; the subgroup criterion tests every commutative k-algebra; the examples have regular structure maps; the characteristic-p counterexample preserves algebraic closedness in its contract and proves that alpha_p and mu_p are not isomorphic as group schemes despite isomorphic underlying schemes and singleton rational-point groups. No result was weakened or converted to an unproved remark.

The subgroup criterion uses universal points of affine opens of H×H and H to factor multiplication and inverse, and R=k for identity; uniqueness through the closed immersion glues the factors and transfers every group identity. Finite type of the closed subscheme is checked on quotient affine charts. This avoids a field-point shortcut or an unproved Yoneda import. Ga/Gm formulas and GLn matrix multiplication, determinant localization and adjugate inversion are checked on all algebras. For the nonisomorphism, a group-like unit g in the additive coordinate algebra has coefficients c_r=c_1^r/r! for r<p; its x^(p-1)y coefficient forces c_1^p=0 and hence g=1. Thus every homomorphism alpha_p→Gm is trivial, which excludes every group-scheme isomorphism alpha_p→mu_p, including p=2.

All five current Step1 records were written with the ordinary `tools/step1-decisions.mjs` record function, decision ready, owner:false, exact examined deps and evidence. These are local author readiness records, not mathematical approval by an independent reviewer. Ordinary engine gates remain required.

## Sources actually fetched and read

Two complete authoritative treatments were used: Milne, *Algebraic Groups* corrected2022 monograph, and the complete Stacks *Groupoid Schemes* chapter. Full-text source-fetch stamps are present for all four coverage entries (two per page), and the command reported4/4 resolved,0 documented drops. The actual retrieved files were also inspected at the following portions; no cover-to-cover reading is claimed.

- https://www.jmilne.org/math/Books/iAG2022.pdf: full659-page PDF, SHA256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`. Read Definition1.1–1.3 and1.4–1.5, printedpp.6–8, for group objects, morphisms, subgroup/all-algebra criterion; §2.1–2.5 and2.8, printedpp.39–41, and2.14 printedp.44, for affine formulas, infinitesimal schemes and alpha_p/mu_p scheme comparison. Milne2.5 explicitly states that the underlying schemes are isomorphic while the algebraic groups are not. The complete missing nonisomorphism argument is supplied locally by the coefficient proof above.
- https://stacks.math.columbia.edu/download/groupoids.pdf: full55-page chapter, SHA256 `4506a39201063afc270cbb68c9c0c1d3c90937c03f98cfee074605b402e7a30f`. Read §4 Definitions4.1/4.3/4.5 and Lemmas4.2/4.4, printedpp.4–5, and §5 Examples5.1–5.4, printedpp.5–6. Tags022S/047D/0G8L give exact group and factorization definitions/proof; 022U/040M/022V/022W give Gm, roots of unity, Ga and GLn. The full relevant statements and arguments were read.

Coverage records enumerate every named result over the claimed ranges with an included/inline/out-of-scope disposition. The Milne2.3 constant-group aside is outside the exact example inventory. Stacks4.2 general-base-change and4.5 auxiliary smooth/flat/separated definitions are outside the exact three-A contract. No excluded assertion is used as a prerequisite.

The planned Snowden URL and its historical verified receipt remain in the shared plan, which this lane did not edit. Current comparison attempts were: public.websites.umich.edu original URL403; websites.umich.edu alternative403; asnowden.com alternative404. This lane does not claim new access to Snowden, and did not adopt it as a source for the newly created item carrier/coverage. The actual item sources are the retrieved Milne and Stacks full texts; Milne2.5 supports the exact assertion and the local coefficient argument supplies its entire proof. No failed-fetch source-drop receipt or source-count waiver is asserted. The original plan's Snowden comparison and stale broad ChapterI/II source locators should be reconciled to the precise actual source rows in this batch manifest. There is no unresolved mathematical uncertainty in the replacement local proof.

## Dependency and integration evidence

All direct prerequisite statements were examined, including affine anti-equivalence, closed affine quotient spectra, scheme fibre products, ring matrix arithmetic, determinant multiplicativity and adjugate inversion. Fresh recursive deps traversal reached **448 unique nodes**, with no missing target, cycle, external draft supplier or recorded-unproved supplier. The only draft suppliers are the five batch22 carriers. The B counterexample uses the earlier B example on its own page, which is permitted; no other page depends on a B supplier. There are no cross-batch item dependencies, so the batch-owned cross-batch dependency input is empty.

Computed in-run dependency levels in registered order are **0,1,2,2,3**, matching the manifest. Exact current item deps and external homes are durable in `frontier-38-owner-30-batch-22.dependency-review.json`. These deps add published scheme/linear-algebra suppliers absent from the original coarse plan rows. Parent integration owns plan-spec synchronization and any necessary backward page metadata edges; this lane did not edit the plan. The commissioned item IDs, titles, kind, statements and page order are retained. Current item sources/strategies are made precise in the manifest.

## Actual checks on final content

- `node tools/tsx-run.mjs tools/precheck.mts [five explicit paths] --json`: exit0;5files,3proof-bearing,0failed. Adopted its canonical phase-renumbering proposal in the example.
- `node tools/rendercheck.mjs [five explicit paths] --json`: exit0;5checked,noerrors orwarnings.
- `node tools/proof-layout.mjs [five explicit paths]`: exit0;5items,9steps,0defects, after the last item edit. The counterexample's proof was placed in its canonical Counterexample section after the checker correctly rejected a separate unnumbered Counterexample plus Proof arrangement.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-22.pages.json --json`: exit0;5scoped,0errors,0warnings.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-22.coverage.json --require-destination --json`: exit0;2pages,21harvested,0errors,0warnings (rerun after final coverage disposition).
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-22.coverage.json --stamp --timeout-sec30`: exit0;4/4fetch-verified andresolved. Check-only pass afterward.
- Focused `depcheck.mjs`, `fwdcheck.mjs`, and `extcheck.mjs` using the exact five-ID selector: all exit0 and0errors. Depcheck reports141 global legacy warnings; extcheck reports40 global recorded-result warnings; none is a new dependency defect in this packet.
- Required whole-run `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`: exit1 on other batches' empty active inventories and existing BGG level mismatches. None names a batch22 item. A separate exact batch22 invocation of the same exported level computation passes5items with levels0,1,2,2,3. Whole-run integration belongs to the parent.

The default proof-layout attempt could not execute JSX because worker node_modules lacks tsx. The successful check used `PRESTIGE_APP_DIR=/tmp/batch22-render-app`, an isolated symlink shim pointing to the actual app's renderer and worker precheck and its installed web tsx. No app/repository code or fixture was substituted. These local checks are evidence of format, rendering, provenance, source retrieval and dependency readiness; no test suite, engine gate, workflow dispatch or certification was run.

## Stable hashes

- `def-group-scheme-over-a-field`: `592060d24568a8523fd415496f8717e52e3d5b3603e1a7a5f48c9b4b9c73a0d5`.
- `def-morphism-and-closed-subgroup-scheme`: `56d30380ba7de9774c0c3606f87c69d7f1e82fa55cfb34de20e147f8a77b42cf`.
- `lem-closed-subgroup-scheme-valued-point-criterion`: `d9aa9c4f8beb0f89a39570f2502a5545ef5345983b45f3be2256529651020107`.
- `ex-additive-multiplicative-and-general-linear-group-schemes`: `74cad200f4f419de2a89f7d8d9dc2e17fc33479fe3450925b34fc3984a666936`.
- `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`: `456e3dcc85f9abc901d02a492323cb0f17598745e8dc72d01545f92ca12f9601`.

Writing is complete and stopped. The parent may reconcile the exact manifest rows and refresh any invalidated readiness evidence after integration, then retry the ordinary current gate. The original dispatch receipt remains historical; these concrete artifacts resolve its missing coverage/inventory/readiness carriers without bypassing the gate.
