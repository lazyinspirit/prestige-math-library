# Owner terminal closure repair — group E

Run: `phase-2-remaining-27`  
Role: `owner-terminal-e`  
Date: 2026-09-21

## Scope and decision

This report is the owner basis for repairing exactly the twelve current group-E terminal escalations named in the dispatch. I read each current item, its latest `escalated-to-owner` row and immutable closure receipt, the dependency proofs and carriers, the two full residual reports, the position-61 proposal, and the complete relevant primary-source arguments. Every selected claim is retained. No item is weakened, deleted, renamed, published, stamped, or sent through another judge wave.

One necessary draft supplier was repaired: `thm-extreme-amenability-yields-bpi-in-finite-support-models`. Its owner prerequisite receipt is appended to `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`. No other nonselected item was changed.

## Sources read

- Saharon Shelah, *Can You Take Solovay's Inaccessible Away?*, <https://shelah.logic.at/files/95333/176.pdf>: complete Claims 7.1–7.17, especially Claims 7.3–7.15 and Theorem 7.16/Conclusion 7.17, journal pp. 33–44.
- Robert M. Solovay, *A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable*, <https://people.math.ethz.ch/~fdalio/ZKmodel.pdf>: Part III §§1.3–1.6 and the HOD(S) argument in §§2.2–2.10.
- Andreas Blass, *Partitions and Permutation Groups*, <https://janos.cs.technion.ac.il/RESEARCH/AMS-Book-files/pdfs/11_Blass.pdf>: Definition 2.1 and Theorems 5.1–5.2.
- Martin Kleppmann, *The Development of the Concept of Amenability*, <https://www.repository.cam.ac.uk/bitstream/1810/253759/1/thesis.pdf>: the fixed-point formulation of extreme amenability.
- Norbert Brunner, *Geordnete Läuchli Kontinuen*, <https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf>: §§3.3–3.4.
- Samuel Corson, *The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem*, <https://arxiv.org/pdf/2001.06513>: Propositions 2, 3 and 6, Lemma 5, and Theorem 1.
- Hiromi Ishii, *Regularity Properties and Inaccessible Cardinals*, <https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf>: Chapter 3, especially the correct-$\omega_1$, Raisonnier and rapid-filter arguments.

## Item resolutions

### `thm-shelah-sweet-amalgamation-preserves-sweetness`

- Defect: admission had been treated as if a condition carried a selected common reduction; the canonical embeddings and the fixed-model density interface were not proved at their exact source strength.
- Repair: conditions are intrinsically admitted pairs in the sense of Shelah's Definition 7.1. The proof retains one admission witness through two applications of Claim 7.4, defines the intrinsic least modulus by universal admission of coordinate perturbations, and proves stability before defining the shifted equivalence relations. The canonical weak-coordinate copies come from Definition 7.1 and need not lie in the chosen dense presentation. Claim 7.12 is used with its separated dense-open piece, old dense set, no cross-piece classes, mixed transfer check, and all five extension clauses.
- Boundary: arbitrary named complete embeddings are allowed; no countable-generation assumption is introduced; the least modulus contains no witness data.
- Source locator: Shelah, Claim 7.3, Claim 7.4, Lemma 7.5 and Claim 7.12.

### `ex-sweet-amalgam-over-a-common-complete-subalgebra`

- Defect: the worked example used a witness-dependent modulus and silently imported countably generated partial-isomorphism machinery into an arbitrary complete-subalgebra example.
- Repair: the example now instantiates the repaired named-embedding theorem directly, defines the same intrinsic least admission modulus, displays the exact shifted classes, and obtains complete canonical copies and ccc from the theorem and the sigma-directed supplier.
- Boundary: the common complete subalgebra is arbitrary; no CH construction, countable generation, or partial-isomorphism theorem is used.
- Source locator: Shelah, Claim 7.4, Lemma 7.5 and the canonical-copy clauses of Definition 7.1.

### `thm-shelah-sweet-partial-isomorphism-extension`

- Defect: an untwisted amalgam does not extend the given isomorphism, and the old proof conflated the Boolean union of stage completions with a complete direct limit.
- Repair: the one-sided step uses the old inclusion of `C_1` and the twisted embedding `b ↦ c(g^{-1}(b))`; the induced copy map therefore extends `g`. Forward and inverse steps alternate while preserving the fixed sweetness model. The union `C=⋃_l BA(U_l)` is stated only to be a Boolean algebra. Its coherent automorphism extends uniquely to `BA(P*)` because `C` is order-dense there.
- Boundary: no completeness of `C` is claimed and sweetness remains attached to the retained dense forcing presentation `P*`.
- Source locator: Shelah, Claim 7.13(1)–(2).

### `thm-shelah-universal-meagre-composition-preserves-sweetness`

- Defect: the prior equivalence relation omitted source interfaces, the sequential proof compressed away the diagonal construction, and the fixed-model conclusion was transported through forcing equivalence.
- Repair: the relation now contains all five source clauses: fine old equivalence, equality of the finite tree, cone-meeting traces, conditional forced-membership traces, and the finite transfer moduli. The stability subclaim is explicit. Directedness uses union of witness-tree names; the sequential clause records the full block-diagonal nowhere-density argument; transfer retains its height qualification. Claim 7.11 supplies the separate fixed-model presentation and all extension clauses.
- Boundary: transport is permitted only along a specified forced order isomorphism with canonical UM, not through bare forcing equivalence.
- Source locator: Shelah, Composition Lemma 7.6, Definition 7.7, Subclaim 7.8 and Claim 7.11.

### `thm-shelah-ch-omega-one-sweet-construction`

- Defect: the old carrier treated Boolean completions as a continuous direct union and used an ordinary size-bound supplier in place of the special final conclusion.
- Repair: the recursion is continuous in the forcing presentations `P_α`, with `B_α=BA(P_α)`. At a countable limit it forms `P_λ=⋃P_α` and then completes; it does not assert `B_λ=⋃B_α`. CH plus ccc gives the stage size bound. At the final `ω_1` union the proof invokes Main Lemma 7.14(a) for the special identity `BA(P)=⋃B_α` and invokes clauses (b)–(d) directly for automorphism extension, free amalgamation, and canonical UM quotients.
- Boundary: the countable-cofinality union lemma is never applied at `ω_1`; the construction is not recast as a finite-support iteration.
- Source locator: Shelah, Main Lemma 7.14(a)–(d).

### `lem-shelah-real-name-capture-and-coded-meagre-unions`

- Defect: capture did not justify ordinal decisions or the passage to one stage of the Boolean completion, and the constructible coding and UM presentation were underspecified.
- Repair: every coordinate uses a countable maximal deciding antichain; the final completion identity bounds all Boolean values below one complete stage, including ordinal-valued coordinates. Over `L`, the canonical definable well-order codes the name and antichain enumerations by ordinals, while one real codes the generic indices. A later quotient with the exact canonical UM presentation absorbs every old coded meagre set into one meagre `F_σ` envelope.
- Boundary: the real-plus-ordinal coding is asserted only on the constructible-ground branch; no arbitrary forcing-equivalence transfer of UM absorption is used.
- Source locator: Shelah, Main Lemma 7.14 and Claims 7.15–7.16.

### `lem-shelah-homogeneous-truth-has-baire-representatives`

- Defect: the prior proof equated truth in the full extension with Cohen-forcing truth over the captured model and jumped from a Borel representative to the open representative required by the definition.
- Repair: after capture, the forcing is factored in `M[x]` through the Cohen algebra. The free-amalgamation and partial-isomorphism clauses give homogeneity of the residual quotient, whose top condition decides the translated formula. The forcing theorem translates full-extension truth to an intermediate formula `θ(x)`. Solovay's reading gives a Borel code on Cohen generics; the UM quotient covers all nongenerics by one meagre code; the uniform Borel-to-open construction produces the required open representative.
- Boundary: quotient homogeneity is used only after adjoining a Cohen-generic `x`; nongeneric reals are handled by the meagre envelope, not by an absoluteness assertion.
- Source locator: Shelah, Theorem 7.16; Solovay, Part III §§1.3–1.6.

### `thm-relative-consistency-bpi-without-urysohn`

- Defect: the argument passed from bare consistency to a transitive ground and therefore did not justify the permutation construction in the arbitrary model supplied by completeness.
- Repair: first-order completeness supplies a possibly externally ill-founded `M ⊨ ZFC+GCH`. Inside `M`, a tagged hierarchy over its ordered rational atoms is verified to satisfy ZFA+AC. The repaired arbitrary-ground fixed-point theorem yields BPI in the internal finite-support interpretation; Brunner's certified Urysohn obstruction holds in the same interpretation; Pincus transfer sends their conjunction to an atom-free ZF model.
- Boundary: this is an external semantic relative-consistency construction. It makes no transitive-model inference and invokes no unverified uniform proof-code reduction.
- Source locator: Brunner §§3.3–3.4; Blass Theorems 5.1–5.2; the stated Pincus transfer theorem.

### `thm-relative-consistency-bpi-without-stone`

- Defect: the same transitive-ground gap remained, and the last implication did not preserve the exact open-refinement formulation of Corson's obstruction.
- Repair: the ordered rational Urysohn atom structure and tagged ZFA+AC universe are built internally in the arbitrary completeness model. The arbitrary-ground fixed-point theorem gives BPI. Corson's certified cover has no point-finite open refinement and transfers with BPI. Since every locally finite open refinement is point-finite, the transferred metrizable space is not paracompact.
- Boundary: the certificate and conclusion concern open refinements; no stronger unproved statement about arbitrary refinements is substituted.
- Source locator: Corson, Theorem 1, Lemma 5 and Proposition 6.

### `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`

- Defect: the summary presented the two BPI separations without their exact relative-consistency qualification and abbreviated the Stone obstruction.
- Repair: the ledger now states the implications from `Con(ZF)` and identifies Corson's witness as a metrizable space with an open cover having no point-finite open refinement, hence no locally finite open refinement.
- Boundary: no unconditional model existence or exact-strength equivalence is asserted.
- Source locator: Brunner §§3.3–3.4 and Corson, Introduction and Theorem 1.

### `thm-shelah-inner-model-all-sets-of-reals-have-baire-property`

- Defect: the proof treated a Borel representative as already open and left the convention for set-theoretic versus usual reals implicit.
- Repair: for `2^ω`, the homogeneity lemma supplies a Borel representative and the Solovay code lemma explicitly supplies an open code and coded nowhere-dense error. Same reals puts all codes in `N`, and DC supplies Countable Choice for the meagre union. The usual real-line result is transferred through the infinitely-many-ones subspace, Baire space, and the irrationals; the omitted binary sequences and rationals are countable.
- Boundary: witnesses are internal to `N`; both `2^ω` and the usual real line are covered without identifying the two spaces globally.
- Source locator: Shelah, Theorems 7.16–7.17; Solovay, Part III §§1.6 and 2.8–2.10.

### `thm-shelah-baire-model-separates-baire-property-from-measurability`

- Defect: the final theorem inferred a suitable transitive ground from `Con(ZFC)`, did not construct the extension over an arbitrary first-order model, and did not prove the same-`L` invariant needed for the noninaccessibility argument. The Raisonnier premise was also required uniformly for every real parameter.
- Repair: completeness gives a countable arbitrary model `M`. Internally, use `L^M` if it has no inaccessible, otherwise its rank segment at the least inaccessible; the internal rank-segment and constructibility theorems produce `N_0 ⊨ ZFC+V=L+`“no inaccessible.” Shelah's forcing is performed internally and an external generic is used only to form the Boolean-valued quotient of internal names. The internal forcing theorem proves preservation of internal ordinals and equality of the constructible levels. Inside the extension, `N=HOD(S)` is transitive with every ordinal, so internally `L^N=N_0`. If all real sets of `N` were measurable, DC gives Countable Choice, the noninaccessibility lemma gives `x` with correct `ω_1`, and measurability of every `A(x⊕r)` makes `F(x)` rapid, contradicting rapid-filter nonmeasurability.
- Boundary: no external well-foundedness or transitivity of `M` or `N_0` is used; the full uniform family indexed by every real `r` is supplied before invoking rapidity.
- Source locator: Shelah, Theorem 7.16 and Conclusion 7.17; Ishii, Chapter 3.

## Necessary supplier repair

`thm-extreme-amenability-yields-bpi-in-finite-support-models` is now stated and proved internally over an arbitrary `M ⊨ ZFA+AC`. Internal Choice constructs the prime-ideal compactum, a stabilizer coset controls inverse images of the finitely many cylinder coordinates and proves joint continuity, internal extreme amenability gives a fixed prime ideal, and its finite support plus elementwise supports make it hereditarily symmetric. The obsolete dependency on the transitive Fraenkel–Mostowski construction was removed. The owner prerequisite row records:

- baseline guard hash: `0be8df97c59cd58c39058056b994dee020c94bb8bf568535d3e6300fc0b8416a`
- current guard hash: `3213f9724ced4437c032d5ba79cc3d9b686e597b035931fb00edf35a77af8658`
- sources: Blass and Kleppmann, as listed above
- dependency path: `thm-relative-consistency-bpi-without-urysohn` → `thm-extreme-amenability-yields-bpi-in-finite-support-models`

## Rejected and repaired hashes

`Rejected` is the `itemHashJudge` preserved on the latest `escalated-to-owner` row. `Final guard` and `Final judge` are computed from the current item bytes by `tools/item-hash.mjs`.

| Item | Rejected | Final guard | Final judge |
|---|---|---|---|
| `thm-shelah-sweet-amalgamation-preserves-sweetness` | `a5db0fad088005866a9327af17a16e400cdfb3ec28fbbc5f8937d82df196f24a` | `cfafe6d0b693861bd77ef5478b9485938cb2961295a38d22040339f904ed286f` | `123ae8063525e73f91fa261aca4f98b852fd536a5407a76c281ccfe12e2960ec` |
| `ex-sweet-amalgam-over-a-common-complete-subalgebra` | `ad0ccebbdb9025a778c8a360b9e4bde652ada71948e5b76c5376d8c31d1d2b2a` | `8cc4827d610fc2a6a36c2cb11e9231ccdffedcfa22cf914246f5baa6dab325c6` | `1e607b9bfcdd8a78f1e71083b691a09739b2f2336549b5da255d57f7b33ebcdf` |
| `thm-shelah-sweet-partial-isomorphism-extension` | `ed2f0120af1f2b5a48913090bd3374fbf274513c75fd58d650bdce6ad806eb07` | `01159640a55c3c73ff371831d2425250679d5a664eec00b52d97af8f3a4d3e47` | `663e990c4c2172571fc7c94c1bf437f3fcd7a84db4ec1bfee9c1da07448bb60e` |
| `thm-shelah-universal-meagre-composition-preserves-sweetness` | `5d59eb9ba6bdef26b283937aca017e3a341b4d715f01eecbd697ec683663c67b` | `7135008d6f951d06d56fedcf407a2e4db21e12d89ec46be7aeb8a4ccdaa3ff8d` | `c61491d8db6b5d46ff6ad0e9d990e077bd75f32bc2a440a4f45284f97f52b5ce` |
| `thm-shelah-ch-omega-one-sweet-construction` | `f36fd4332ee4cfd385689f5e68dba68261ead79e89725612c9210ee829e88ef5` | `733163057f381b4500b2a50375a2fbeee59cd1625f8af1cc80c3222c11aacf57` | `0d14ce7e3a47e83f4e8c601943e6dc8c91dfb229c79b54c5982d532e32a7cc82` |
| `lem-shelah-real-name-capture-and-coded-meagre-unions` | `e2424d8c4a69d51457a80fd1522a61c164b1b2936f73728f1d35013f65a16e6b` | `a4921cbbfd58e5fa80fcbad377490dd4fa5ba0619b5399fb88bb3b2b814e5fe4` | `27f60c9b2491a0be661a08a65aa0194f003362747e50c39e16414070c47d864e` |
| `lem-shelah-homogeneous-truth-has-baire-representatives` | `9eb387e7b75f533d468adab165b67dddf2bb571916df976930d79afc855d047c` | `99e93e1dc800bc0effc164e766c704f556e72d020a99c3fbcdba8121335d450d` | `579e454af72d6bb72390c543fd8f835649c481540f5b4a07fd73e8d40e480e0f` |
| `thm-relative-consistency-bpi-without-urysohn` | `08a12e7928ae918b609548245b1da6f4ff36a5e88dcd2c0ddffa62a72f773e53` | `57f97ff19779fe786060c43346d0c0ccd77dd65d69c7cadee10a7630b3bb9a93` | `14d8d77754ae855115ad7be5b5f0a7e4f056bc62419291457c3d2a2ed774c27b` |
| `thm-relative-consistency-bpi-without-stone` | `41912c12d3c41a55dc492c0b7ea31c52815e37eae4ec6221c5daeefff39acc12` | `d65516b2af962a9dae2e5f8d53cad9a506d545d383d24900f7fbbcca75e87c04` | `35c30d0a6394e3aa3d328a43b4caab3f48d1ff2f0e14d728e498449dc94493dd` |
| `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` | `85ab3c72a85dcbcb9c11cc424dcb208edb6daaffb61c885a6e28d06e0c161319` | `6607ab1822ae627a30bd8622df78eb2281ea490311eef16380fdd06a8f9477b3` | `9f8a5403d9aa586847bcd776a387a58f61fa1cf9c81a70812b87a3ad223d8168` |
| `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` | `a2fa80722999f47869c912f514eeb30aea49ad68fc37f1aad6b80cf30e411bce` | `75d2a17c38bc123759e0ab9a5afc9e03f5ac6bdb17b16ae3ed37987ecc1fbb85` | `6902ee6672d4d55f82665987fe6ebeb2aa66b711f85d440faff4af3f5139cc78` |
| `thm-shelah-baire-model-separates-baire-property-from-measurability` | `426dc489ed27977b084d34f3d7f7b431035cd6fa4b4212b65f9c2fcbf07482e6` | `4664e6a0c1bd3102b66f4aff006076be388b232500010ed85aeef507de58dd54` | `145bf26818ae5aceafbe99361030677a9fc707634258a468d1fea4d9a648cedb` |

The corresponding receipt files are `research/phase-2-remaining-27-step7-item-<id>-closure.json`; the latest escalated rows additionally preserve their context and closure-evidence hashes.

## Carrier synchronization

- Batch 14 and 15 manifests now match every current frontmatter dependency and summarize the repaired claims and proof plans.
- The selected proof-contract entries were regenerated from current Facts and proof steps, then their boundary and risk notes were updated to the owner review. Source locators in prose were expressed through Fact labels so source claim numbers cannot be misparsed as internal proof-step references.
- The batch-14 supplier entry now records the arbitrary-ground statement and both authoritative sources.
- The derived unified frontier ledger was refreshed. Every frontier edge incident with these twelve items has a current verified review; no selected group-E edge is open or unreviewed.

## Validation

Completed before recording terminal resolutions:

- focused precheck on the eleven proof-bearing selected items plus the repaired supplier: **12/12 PASS**;
- focused prosecheck on all twelve selected items plus the supplier: **13 files, 0 errors, 0 warnings**;
- strict selected batch-14 proof contracts: **3/3, 0 errors, 0 warnings**;
- strict selected batch-15 proof contracts: **9/9, 0 errors, 0 warnings**;
- `manifest-deps` for batches 14 and 15: **114 items, 0 normalized, 0 errors**;
- `manifest-integrity`: **54 pages owed, 54 present, no scope drift**;
- `depcheck`: **no cycles, all references resolve, no draft item on a published page**; repository-wide legacy warning classes remain outside this dispatch;
- unified frontier refresh: **completed and deduplicated**; scoped inspection found no open or unreviewed edge incident with a selected item. An optional repository-wide `--require-reviewed` diagnostic remains nonzero because other batches currently contain unreviewed edges outside group E; none is created by or incident with this repair cluster.

Terminal-resolution recording, the final Step-7 guard, and the scoped `git diff --check` are recorded below after those commands run.

## Terminal-resolution and final-gate results

The prescribed recorder command succeeded for all twelve items. The latest row for every selected id has `resolved_by: "owner"`, `disposition: "repaired"`, and the final `itemHashJudge` shown in the table above. The recorder produced one immutable receipt per item and reported no stale closure or hash error.

The scoped `git diff --check` over all thirteen edited items, both manifests, both proof-contract files, the unified frontier ledger, the prerequisite ledger, the terminal ledger and this report is **clean**.

The final Step-7 guard reached the following substantive result:

> 696/696 change(s) licensed by a confirmed_fatal judge/reader adjudication, exact owner run-local repair, or terminal resolution.

Its first run nevertheless exited nonzero with one mechanical error:

```text
reader-warning-fatal-licence-stale:
research/phase-2-remaining-27-step7-alert-decisions.jsonl:37:
reader-warning repair hashes do not match the Step-7 baseline and current item
```

The row is for the selected item `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`. Its earlier reader-warning repair records baseline hash `2111353284f10c0193315d167a66552d68df6e4bd44b2a1eca137aabcf5496b4` and then-current post hash `40baafff0c5cb6a4c58a53b657c38b671208f842117e5db9d9f5e938af6003b5`; this owner repair necessarily changed the item again, to current guard hash `6607ab1822ae627a30bd8622df78eb2281ea490311eef16380fdd06a8f9477b3` and current judge hash `9f8a5403d9aa586847bcd776a387a58f61fa1cf9c81a70812b87a3ad223d8168`.

The historical reader finding remains fatal and its correction remains present in
the final owner-repaired ledger. The owner therefore appended a new decision for
the same stable alert id, preserving the Step-7 baseline hash and binding the
reader repair to the current guard hash. This is the alert ledger's documented
append-only supersession mechanism; no historical row was edited or deleted.
The rerun passed with **696/696 licensed changes, 0 errors, and 0 warnings**.
