# Step 3b — pair `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` (batch 17)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-4be022a68714d06e`.
Owned A page: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`
(order 1790, category `special-topics-in-representation-theory`, 26 items).
Owned B page: `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples`
(order 1791, 5 items). Batch 17 contains only this pair, so the batch-17 shared
files have no sibling rows. Direct in-run prerequisite pair to inspect:
`parabolic-category-o-and-fock-space-bases` (batch 16, order 1788).

## Owned IDs and open obligations (entry checkpoint)

A (26): `def-degenerate-affine-hecke-algebra`,
`lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties`,
`def-arakawa-suzuki-casimir-operators-on-tensor-functors`,
`lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize`,
`def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character`,
`thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations`,
`def-the-type-a-finite-w-algebra-and-whittaker-category`,
`thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer`,
`def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra`,
`lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading`,
`thm-ordered-monomial-pbw-basis-for-the-shifted-yangian`,
`thm-skryabins-equivalence-for-the-type-a-whittaker-pair`,
`thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e`,
`def-degenerate-cyclotomic-hecke-algebra`,
`lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient`,
`def-deformed-tensor-space-for-the-type-a-finite-w-algebra`,
`def-the-whittaker-functor-from-the-relevant-parabolic-o-summand`,
`thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer`,
`thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives`,
`def-the-higher-level-schur-weyl-projective-generator-and-schur-functor`,
`def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality`,
`def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks`,
`thm-higher-level-schur-weyl-endomorphism-isomorphism`,
`thm-higher-level-schur-weyl-double-centralizer`,
`thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`,
`thm-category-o-translation-intertwines-residue-induction-and-restriction`.

B (5): `ex-degenerate-affine-hecke-relations-on-two-tensor-factors`,
`ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration`,
`cex-a-hecke-action-alone-does-not-imply-double-centralizer`,
`ex-vust-double-centralizer-in-a-small-stable-range`,
`ex-a-block-idempotent-corner-outside-the-stable-range`.

Open obligations at entry: (1) author all 31 item files in dependency order;
(2) author both library pages
(`library/special-topics-in-representation-theory/…`), preserving the
scaffold inventories; (3) write
`research/frontier-44-special-representation-examples-28-batch-17.proof-contracts.json`
with exact citation quotes, per-step inputs and boundary dispositions;
(4) run the focused checks named by the dispatch (proof-layout, precheck,
rendercheck, content-policy, depcheck/depsource, manifest-deps, dependency
levels, validate-plan, coverage-checklist, source-fetch-check, proof-contract
--strict, boundary-audit, citation-fidelity, pathcheck, prosecheck);
(5) reconcile the 24 item + 1 page cross-batch supplier rows against the
actual proof uses and the 16 not-yet-authored in-run suppliers
(batches 13/15/16); (6) record item decisions for all 31 IDs;
(7) report published concerns and escalations.

## Supplier status at entry (provisional)

The 16 in-run supplier items of batches 13/15/16 are **not yet authored** at
entry (`items/<id>.md` absent): `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality`,
`def-parabolic-category-o-for-a-standard-parabolic`,
`def-projective-functors-on-a-regular-integral-category-o-block`,
`prop-base-change-freeness-and-specialization-in-the-deformed-family`,
`thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules`,
`thm-parabolic-category-o-is-a-highest-weight-category`,
`def-standard-parabolic-and-levi-subalgebras-from-simple-roots`,
`thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule`,
`thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module`,
`thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases`,
`thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o`,
`def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category`,
`def-dual-canonical-canonical-and-quasi-canonical-fock-bases`,
`def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks`,
`lem-residue-casimir-operators-give-local-affine-hecke-actions`,
`thm-residue-translation-functors-give-the-integrable-fock-space-action`.
Consumers using them (exact consuming items/steps recorded below as authored):
the Whittaker-functor definition, the exactness theorem, the projective
generator definition, the endomorphism isomorphism and the translation
intertwiner. These consumer decisions stay escalated until the suppliers are
authored and their actual interfaces reconciled.

All 55 published suppliers resolve in `items/`. All 31 pair items depend only
on published items or on earlier items of this pair.

## Checkpoint log

Format: item — claim/conventions — sources and suppliers actually used — checks —
decision — open gaps. Entries 1–22 (levels 0–33 of the dispatch order) were
written before this checkpoint log was opened; they are verified on disk by the
batch-wide check battery and by the per-item decisions recorded at handoff. The
entries below resume at the level-34 item and cover everything authored after it.

- `def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality`
  (level 34): stable range $q_l\ge d$; outside it the image is a central block
  corner $fH_d(\mathbf a)f$, nonadmissible origins keep only the genuine double
  centralizer. Sources: BKHL §6.2, Lemma 6.5, Theorem 6.6, Corollary 6.7; BKAR
  §3.2 idempotents. Suppliers used: level 32/33 items plus published
  projective-cover/regular-module facts. Adopted the precheck canonical proof
  (step renumbering); precheck PASS, proof-layout 0 defects. Decision: accept.
- `ex-degenerate-affine-hecke-relations-on-two-tensor-factors` (level 3, B):
  $d=2$, $M=V=\mathbb C^2$; $x_1=P_{01}$, $s_1=P_{12}$,
  $x_2=P_{02}+P_{12}$; all four relations verified on the eight tensor words
  from the two braid identities, the explicit $v_1\otimes v_2\otimes v_1$
  computation, and the $[s_1,x_2]\ne1$ caveat. Sources: AS §2.2 Lemma 2.2.1;
  BKHL §3.4. Suppliers: level-2 theorem and level-1/0 definitions. Independent
  numerical check of all displayed identities (8×8 matrices) passed. Precheck
  PASS, proof-layout 0 defects. Decision: accept.
- `ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration`
  (level 9, B): $p=(1,2)$, $q=(2,1)$, $N=3$, $n=2$, $c=(0,0)$; $e=E_{23}$,
  $x_1=E_{23}+\operatorname{diag}(0,0,-1)$, minimal polynomial $x(x+1)$ with
  eigenspaces $\mathbb C v_1\oplus\mathbb C v_2$ and
  $\mathbb C(v_3-v_2)$, $\dim H_d(\Lambda)=2^dd!$. Sources: BKHL Lemma 3.3–3.5;
  BKAR §3.2. Suppliers: level-8 minimal-polynomial lemma and level-7/1
  definitions. Precheck PASS, proof-layout 0 defects. Decision: accept.
- `def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks`
  (level 35): tower inclusion, residue idempotents $u_i$, functors
  $e_i=u_i(-)$, $f_i=H_{d+1}u_i\otimes_{H_d}-$; exactness, biadjunction and
  $*$-duality compatibility, Cartan-pairing adjointness, root/coset and
  admissible-realization boundaries. Sources: BKAR §3.3 (3.16)–(3.20) citing
  [K, Lemma 8.2.2]; BK3 §6.2. Suppliers: level-7 definition and level-34
  stable-range item. The first adjunction, exactness of $e_i$ and the formal
  duality-implies-biadjunction step are proved locally; the self-duality input
  for the induced projective bimodule is recorded from the symmetric trace form
  with its source locator (marked in Remarks). Precheck PASS, proof-layout 0
  defects. Decision: accept, with the recorded-input qualification noted.
- `thm-higher-level-schur-weyl-endomorphism-isomorphism` (level 35):
  $\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}=B_d$ and
  $\operatorname{End}_{\mathfrak g}(T_\alpha)^{\mathrm{op}}=B_\alpha$; the
  Whittaker comparison is injective on endomorphisms of $T$ because every
  nonzero image has a standard composition factor; the image of the comparison
  is $B_d$ by the double centralizer. Sources: BKAR Theorem 3.6; BKHL
  Corollary 5.12, Lemma 5.11, Theorem 5.13; BK3 §8.5. Suppliers: levels
  32/33/34 plus the batch-16 integral block. Precheck PASS, proof-layout 0
  defects. Decision: accept (cross-batch supplier now authored; reconciled).
- `thm-higher-level-schur-weyl-double-centralizer` (level 36): all-origin raw
  double centralizer, admissible-origin Morita progenerator, exact Schur Serre
  quotient with full faithfulness on projectives/tiltings, left-adjoint
  boundary, stable-range and central-corner clauses. Sources: BKHL Theorems A,
  B, 3.7, 5.10, 5.14, Corollary 5.15; BKAR Theorem 3.7; BK3 §6.10. Suppliers:
  levels 32–35. Precheck PASS, proof-layout 0 defects. Decision: accept.
- `ex-a-block-idempotent-corner-outside-the-stable-range` (level 36, B):
  $\lambda=(1,1)$, $d=3$, $V=\mathbb C^2$; $H_3(\Lambda)=\mathbb C[S_3]$ of
  dimension 6, image $\mathbb C\times M_2$ of dimension 5, kernel the sign
  block spanned by the antisymmetrizer because $\Lambda^3V=0$, image
  $\cong f\mathbb C[S_3]f$ for the trivial+standard block idempotent; stable
  range fails. Sources: BKHL §3.5, Lemma 3.5, §6.2, Theorem 6.6, Corollary
  6.7; BKAR §3.2, §4.2. Suppliers: levels 32/34/35 plus published
  symmetric-group and Schur–Weyl items. Precheck PASS, proof-layout 0 defects.
  Decision: accept.
- `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`
  (level 37): $\pi(N(A))\cong S(A)$ (intrinsic parabolic-induction Specht
  module via the stable corner/colour-fibre computation), $D(A)=\pi(K(A))$
  simple for $A\in\mathrm{Std}$ and zero otherwise, $\pi(P(A))=Y(A)$ with
  $\pi^*\pi(P(A))\cong P(A)$ for standard $A$, tilting flags and full
  faithfulness on tiltings, $[S(A):D(B)]=[N(A):K(B)]=d_{B,A}(1)$. Sources:
  BKHL Theorems 6.12, 6.15, Corollary 6.13 and §5.3–5.5; BKAR Theorems
  3.7/3.8/3.10 and §3.4; BK3 §6.3–6.5. Suppliers: level 36 plus the four
  batch-16 items (tilting classification, standard/costandard objects, Fock
  bases, three-bases dictionary). The step-1.1 corner computation expands the
  owner batch-17 Specht-corner note §§1–4; Steps 5–7 must audit this expansion
  against the source. Precheck PASS, proof-layout 0 defects. Decision: accept,
  with the expansion flagged for independent audit.
- `thm-category-o-translation-intertwines-residue-induction-and-restriction`
  (level 38): natural isomorphisms $f_i^{H}\pi\cong\pi f_i^{\mathcal O}$,
  $e_i^{H}\pi\cong\pi e_i^{\mathcal O}$ from the tensor-Hom identity
  $\pi_d(-\otimes V)\cong\operatorname{Res}\pi_{d+1}$, with units/counits,
  duality compatibility, ungraded $K_0$ operator equality and filtration
  preservation; typed coset realization for admissible nonintegral origins.
  Sources: BKAR Theorem 3.7(iv), Theorem 4.5, §4.1; BKHL Lemma 5.16; the Hecke
  side from the level-35 definition. Suppliers: levels 33–37 plus the three
  batch-16 residue-translation items. Precheck PASS, proof-layout 0 defects.
  Decision: accept (cross-batch suppliers now authored; reconciled).

All 31 owned items are on disk and pass `precheck` and `proof-layout`
(31 items, 182 steps, 0 defects in one explicit-path invocation). Remaining
work: the two library pages, the batch-17 proof-contracts file, cross-batch
reconciliation, item decisions and the batch-wide check battery.


## Cross-batch reconciliation (all 25 declared rows)

All 16 in-run supplier items of batches 13/15/16 are **authored on disk** at
handoff, so the five consumers were reconciled against their actual proof uses
instead of being escalated:

- `def-the-whittaker-functor-from-the-relevant-parabolic-o-summand` uses its ten
  declared suppliers at facts F1, F4 and F5 (steps 1.1, 1.5): the integral
  block, the standard parabolic, base change/specialization, Duflo–Joseph the
  g-finite endomorphisms, the projective functors, the parabolic
  highest-weight theorem, the standard-parabolic definition, the
  standard-tableau Fock basis, the parabolic-O Grothendieck group and the
  three-bases dictionary; each supplier Statement was read and matches the
  interface the fact invokes.
- `thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives`
  uses its four declared suppliers at facts F1 and F4 (steps 1.1, 2.1, 3.2):
  the integral block, tilting classification, standard/costandard-filtered
  objects and parabolic highest-weight structure.
- `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor` uses
  its two declared suppliers at facts F2 and F3 (steps 1.2, 2.1, 3.1, 4.1).
- `thm-higher-level-schur-weyl-endomorphism-isomorphism` uses
  `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality`
  in its Statement (the ground object $P_c$ and the summand conventions); the
  row is verified on that Statement-level use.
- `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`
  uses its four declared suppliers at fact F1 (steps 1.1, 1.2) and fact F4
  (step 4.1): tilting classification, standard/costandard objects, the
  dual-canonical/canonical/quasi-canonical Fock bases and the three-bases
  dictionary.
- `thm-category-o-translation-intertwines-residue-induction-and-restriction`
  uses its three declared suppliers at fact F1 (steps 2.1, 3.1, 4.1): the
  residue translation functors, the local affine-Hecke Casimir lemma and the
  integrable Fock-space action.
- The page row (`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` →
  `parabolic-category-o-and-fock-space-bases`) is verified: the supplier page is
  authored in `library/special-topics-in-representation-theory/` with the same
  category and prerequisite inventory the scaffold requires.

All 25 rows are now `status: verified` with a current statement/use check and
the explicit caveat that supplier-internal proof audits remain with Steps 5–7;
`node tools/frontier-dependency-ledger.mjs refresh --run
frontier-44-special-representation-examples-28` was run after the update.
Because item receipt hashes include the transitive dependency closure, the
thirteen downstream consumer receipts can be invalidated again by concurrent
edits to the batch 13/15/16 suppliers; a final refresh of those receipts is the
engine's/next writer's last bookkeeping step (residual measured below).

## Library pages

- `library/special-topics-in-representation-theory/arakawa-suzuki-functors-and-higher-level-schur-weyl-duality.md`
  (A): 26 items, requires `parabolic-category-o-and-fock-space-bases`,
  `tensor-products-of-modules`, `graded-bimodules-and-tensor-functors`; body
  summarises the Hecke/Casimir action, the pyramid and finite W-algebra, the
  cyclotomic quotient and double centralizer, the Whittaker and Schur functors,
  the stable range, residue functors and Schur images.
- `library/special-topics-in-representation-theory/arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples.md`
  (B): five examples, requires the A page; items placed in `examples`.
- `pathcheck` reports only the expected `draft-unplaced` warning for the A page
  (pathway sync places draft pages); no pathway file was edited by this writer.

## Proof contracts

`research/frontier-44-special-representation-examples-28-batch-17.proof-contracts.json`
(version 1, scope = all 31 owned items) contains one citation contract per
fact→source link with a verbatim quote from the source item's Statement/
Definition section and the exact proof steps using the fact, one
derivation entry per numbered step with its stated inputs, and the eight-case
boundary worksheet (empty, zero, one, degenerate, endpoints, nonempty-choice,
iff-forward, iff-reverse) for every item.

## Checks actually run (final results)

- `node tools/proof-layout.mjs <31 explicit item paths>` — **31 items, 182
  steps, 0 defects**.
- `node tools/tsx-run.mjs tools/precheck.mts <31 explicit item paths>` — **31
  checked, 0 failing**.
- `node tools/rendercheck.mjs <31 items + 2 pages>` — **0 errors** (nine
  multiline display blocks in seven items were joined to one source line each).
- `node tools/proof-contract.mjs research/...-batch-17.proof-contracts.json
  --strict` — **0 errors, 0 warnings, 31/31 items checked**.
- `node tools/boundary-audit.mjs research/...-batch-17.proof-contracts.json` —
  **0 contradicted dispositions** (the earlier four heuristic candidates for
  the empty axis were resolved by checked dispositions with step anchors; the
  template-reuse warning is inherent to a uniform worksheet and each row now
  carries its item's own statement snippet).
- `node tools/citation-fidelity.mjs research/...-batch-17.proof-contracts.json`
  — exit 0, **no missing quotes, no widening candidates**.
- `node tools/manifest-deps.mjs <all 50 run manifests>` — **864 items, 0
  errors**.
- `node tools/content-policy.mjs <all 50 run manifests>` — **no finding for any
  of the 31 batch-17 items or the two pages**; 231 run-level errors were
  observed in sibling batches (e.g. `ex-dj-bridge-singular-two-tableau-shape`
  declared without a file), all outside this pair's scope.
- `node tools/item-dependency-levels.mjs check --run ...` — the run-level
  command reports 54 sibling-batch label mismatches; a direct recomputation
  restricted to this pair gives **31/31 exact labels, 0 mismatches, 0 cycle
  errors**.
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <all 100
  run pages> --run ...` — the pair's pages show only the pre-recorded
  non-blocking `[redundant-prereq]` advisories (the plan and design declare the
  full `requires` sets); the seven `[undeclared-prereq]` errors are in sibling
  pages and are reported for Step 4, not repaired here.
- `node tools/coverage-checklist.mjs research/...-batch-17.coverage.json
  --require-destination` — **2 pages, 48 results, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage
  research/...-batch-17.coverage.json` — **17/17 sources fetch-verified and
  17/17 resolved**.
- `node tools/pathcheck.mjs --pages-file <pair pages>` — 0 errors, 1 warning
  (draft-unplaced, expected before pathway sync).
- `node tools/prosecheck.mjs <31 items + 2 pages>` — **OK**, no positional
  claim contradicts the spec.
- `node tools/depcheck.mjs --items-file <31 items>` — OK; three
  `[cited-not-in-deps]` warnings remain for non-load-bearing same-page forward
  pointers (`def-the-type-a-finite-w-algebra-and-whittaker-category` to the
  Gan–Ginzburg and Skryabin items, and the parabolic-truncation lemma to the
  deformed tensor definition); they are informational links to later items of
  the same page and are recorded rather than removed.
- `node tools/depsource.mjs --items-file <31 items> --run ...` — 0 unresolved,
  31/31 consumers covered.
- `node tools/fwdcheck.mjs` and `node tools/extcheck.mjs` on the same scope —
  OK (no forward cycles, no active recorded-not-proved or external records).
- `node tools/step3-decisions.mjs record-item` — 31/31 item receipts recorded
  (14 accept, 17 repaired with `dependency`/`format`/`reference` defect types);
  receipt currency against the moving sibling suppliers was refreshed twice and
  the residual staleness is recorded below.

## Added suppliers

None beyond the two owner-authorized items already in the scaffold
(`lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties`,
`lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize`); no
pair, page or plan scope was expanded.

## Published concerns and escalations

- No published-content defect was confirmed by this authoring pass.
- Run-level findings outside this pair (sibling batches, for the serial
  reconciler and Step 4, not repaired here): 231 `content-policy` errors, 54
  `item-dependency-levels` mismatches, and 7 `undeclared-prereq` plan errors
  in other pages; none involves a batch-17 item or page.
- Open obligations carried forward: (1) the independent mathematical audit of
  this pair in Steps 5–7, in particular the expanded corner computation in
  `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`
  step 1.1 and the recorded Frobenius/self-duality input in
  `def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks`
  (both marked in the items themselves); (2) a final refresh of the thirteen
  downstream receipt hashes after the batch 13/15/16 writers stop; (3) the
  three informational `[cited-not-in-deps]` depcheck warnings and the three
  `[redundant-prereq]` plan advisories, preserved for Step 4.

## Residual receipt staleness (measured at handoff)

The last refresh loop re-recorded every stale receipt twice and drove the
batch-17 stale set to zero; a subsequent check seconds later showed 13 stale
receipts again (the levels 31–38 chain and the four examples whose closures
include the actively edited batch 13/15/16 supplier files). This is transitive
bookkeeping flux from concurrent sibling writers, not a mathematical
disposition: the recorded statuses (accept/repaired) and their reasons stand,
and the engine's Step-3b gate should re-run the same `record-item` refresh for
these 13 IDs once the sibling writers drain.
