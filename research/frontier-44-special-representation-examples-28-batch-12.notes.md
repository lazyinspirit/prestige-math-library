# Batch 12 notes — Soergel Intersection Forms and Hodge Theory

Run `frontier-44-special-representation-examples-28`, 2026-10-08. Owned pair:
`soergel-intersection-forms-and-hodge-theory` (order 1542) and
`soergel-intersection-forms-and-hodge-theory-examples` (order 1543). Final
stable inventory: **28 A items + 5 B items = 33 items**, all labelled with a
current `dependency_level` (maximum 12) and recorded ready for authoring. No
item file, page file, published item, shared plan, engine state or verdict was
edited; the batch wrote only its manifest, coverage, notes, readiness records,
its cross-batch dependency input, the derived unified-ledger refresh
(`research/<run>-cross-batch-dependencies.json`) required after that input, and
its own record section in `briefs/tasks/frontier-dependency-ledger.md`.

## Design, plan and owner direction

`research/plan-kazhdan-lusztig-track.md` L75 (KL-2) and `research/plan-spec.json`
agree on every declared field of this pair: A/B identities, order 1542/1543,
category `special-topics-in-representation-theory`, the four `requires`
(`kazhdan-lusztig-bases-polynomials-and-cells`,
`type-a-soergel-bimodules-and-hecke-categorification`,
`rouquier-complexes-and-categorical-braid-relations`,
`dual-spaces-bilinear-forms-and-inertia`, all of them published pages), and the
design's item table (21 proposed items). The plan's `items` arrays were the
empty planning placeholders. **No design-vs-plan conflict to record.** The
design's route (Lefschetz/HR induction, local intersection forms, deformed
Lefschetz operator, Rouquier complexes, Soergel conjecture, positivity) is
preserved item by item; the B companion is restricted to rank-one and rank-two
calculations and is not used to prove the general induction, exactly as the
design requires. The binding owner direction (`...-owner-authoring-direction.md`)
authorizes the pair, requires supplier-before-consumer construction and
mathematical closure, and keeps the content draft; the batch complies.

**One naming deviation, recorded.** The design's proposed item
`def-soergel-module-and-dominant-lefschetz-operator` was authored as
`def-reduced-soergel-module-and-dominant-lefschetz-operator`: the definition is
exactly the design's ("quotient a Soergel bimodule by positive-degree right
polynomials", i.e. the reduced Soergel module, then act by a strictly dominant
degree-two element), and the renamed id merely makes the standard terminology
explicit. No other artifact in the run references either id — the design id
appears only in `research/plan-kazhdan-lusztig-track.md`, the plan's `items`
array is an empty planning placeholder, and the new id is unique across all 28
batch manifests — so the rename changes no dependency edge and no consumer.

The run's drift review (batch-relevant entry at
`research/...-alpha-step1-drift.md` lines 167–171) records `no-drift` for this
pair. Independently re-checked here against the current published supplier
inventories; the drift conclusion holds.

## Native scaffold inventory (historical 30-item inventory)

A page (`soergel-intersection-forms-and-hodge-theory`), 25 items in
prerequisite order (levels 0–11):

1. `def-real-type-a-soergel-category-and-scalar-extension` (L0)
2. `lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis` (L0)
3. `def-reduced-soergel-module-and-dominant-lefschetz-operator` (L1)
4. `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree` (L1)
5. `def-invariant-intersection-form-on-a-bott-samelson-bimodule` (L2)
6. `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs` (L3)
7. `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category` (L3)
8. `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons` (L3)
9. `lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate` (L4)
10. `lem-hard-lefschetz-implies-primitive-decomposition` (L4)
11. `def-the-deformed-lefschetz-operator-on-b-x-b-s` (L5)
12. `thm-positive-rouquier-complexes-are-delta-split` (L4)
13. `lem-family-signature-constancy-and-the-weak-lefschetz-substitute` (L5)
14. `def-local-intersection-form-for-a-soergel-summand` (L5)
15. `lem-tensoring-with-b-s-preserves-hodge-riemann-signs` (L6)
16. `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction` (L6)
17. `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character` (L6)
18. `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms` (L7)
19. `lem-hodge-riemann-for-large-positive-deformation` (L7)
20. `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs` (L8)
21. `lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity` (L8)
22. `thm-deformed-hard-lefschetz-for-b-x-b-s` (L10)
23. `thm-hodge-riemann-for-indecomposable-soergel-bimodules` (L10)
24. `thm-soergels-character-conjecture` (L11)
25. `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants` (L11)

B page (`soergel-intersection-forms-and-hodge-theory-examples`), 5 items:
`ex-the-rank-one-soergel-bimodule-its-intersection-form-and-hard-lefschetz`,
`ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule`,
`ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition`,
`ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three`,
`cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element`.

**Added local prerequisites (4).** Beyond the design's 21 proposed items the
scaffold adds four items that its own route needs and that no published page
supplies: the Hecke trace/bilinear form with its values on the
Kazhdan-Lusztig basis (used by the detection theorem); uniqueness and
non-degeneracy of invariant forms on B_w (Lemma 3.7/3.11, used by the
embedding theorem and by the Hodge-Riemann statements); signature constancy
plus the weak-Lefschetz substitute and the degenerate shifted case (Lemmas
2.1/2.3/2.5, used by the hard-Lefschetz proofs and the large-deformation
lemma); and the tensoring lemma (Prop. 6.12, used by Prop. 6.13 and by the
hard-Lefschetz proofs). Each is a genuine prerequisite of a design item; none
is padding, and no design claim was weakened or dropped. The A page remains
far below the 100-item cap.

Dependencies were verified one by one. Every one of the 54 out-of-batch
suppliers resolves to a **published** item (checked on disk and by status),
including the four `requires` pages, the KL-1 algebraic items, the BG-16
classification/character/Hom-formula items, the BG-17 Rouquier-complex items,
the HA-24 Gaussian-elimination theorem and the dual-space/Sylvester items. No
planned-but-unbuilt supplier is treated as published. All in-run dependencies
are inside this batch, so the B-page and consumer-side cross-batch obligations
are trivial; the cross-batch input is the empty array. The unified ledger
records exactly one edge touching this batch and it points inward: batch 13's
page `projective-functors-and-the-soergel-functor-in-category-o` declares
`requires: soergel-intersection-forms-and-hodge-theory` in its own manifest
(plan KL-3). That is a consumer-side declaration owned by batch 13; its review
row belongs to batch 13's cross-batch input (not yet written), and this batch's
own input correctly stays empty. No AC is needed anywhere: the whole
construction is finite-dimensional linear algebra over R plus finite
inductions, and the strategies say so where relevant.

## Native worker source-reading report (historical; owner readings below)

Full texts fetched and stamped by `tools/source-fetch-check.mjs --stamp` on
2026-10-08 (stamps are in the batch coverage file); the mathematical arguments
were read in the fetched bodies, not from abstracts:

- Elias–Williamson, *The Hodge theory of Soergel bimodules*, arXiv:1212.0791v2
  (final version), 45 pp. Read: §1.1–1.2 (main theorems, S/hL/HR dictionary,
  outline and the summary of the induction), §2 (Lefschetz linear algebra,
  Lemmas 2.1–2.5), §3.1–3.6 (realization over R, Hecke algebra, the trace form,
  Bott–Samelson calculus, Hom formula, induced forms and Corollaries 3.9–3.11),
  §4 (Theorem 4.1 and Corollary 4.3), §5 (Theorem 5.1, Lemma 5.2, Corollary
  5.3), §6.1–6.8 (minimal complexes, perverse filtration, Rouquier complexes,
  Δ-splitness, linearity, HR for Rouquier complexes, the factorization, and the
  three hard-Lefschetz theorems).
- Soergel, *Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln über
  Polynomringen*, arXiv:math/0403496 (JIMJ 2007), 29 pp. Read: Theorem 1.10,
  Definition 1.12, Vermutung 1.13, Lemma 4.5, Proposition 4.6, Theorem 5.15,
  Satz 6.14 (classification, self-duality, stability under summands, over any
  infinite field of characteristic not two), Lemma 7.1 (the omnibus lemma).
- Riche, *La théorie de Hodge des bimodules de Soergel (d'après Soergel et
  Elias–Williamson)*, Séminaire Bourbaki no. 1139, arXiv:1711.02464, 37 pp.
  (survey, used as the independent treatment and as the primary-kind source).
  Read: §0.2–0.4, §1.1–1.7, §2.1–2.6 with Théorème 2.7, Propositions 2.8/2.11,
  Lemmes 2.1–2.6/2.9 and Corollaire 2.3.
- Libedinsky–Williamson, *Standard objects in 2-braid groups*, arXiv:1205.4206,
  25 pp. Read §3.2–3.4 and Proposition 3.7 (the standard filtration of positive
  Rouquier complexes), the source of EW Proposition 6.8.
- Gobet, *Twisted filtrations of Soergel bimodules and linear Rouquier
  complexes*, arXiv:1601.00339, 30 pp. Read §5.1–5.2 and §6 (independent
  treatment of the linearity statement and the parity argument).

Coverage gives every named heading in those ranges a disposition
(`coverage-checklist`: 2 pages, 68 harvested results, 0 errors, 0 warnings).
Each A-page claim is anchored in at least two independent treatments; the
survey supplies the book/monograph-class treatment the workflow asks for. The
history is retained: no source was dropped, no fetch evidence was invented,
and the two treatments used for each item are recorded in the item sources.

## Honest caveats and unresolved uncertainty

1. **Owner-resolved grading and restriction errors (2026-10-08).** The native
   source-error allegation was incorrect: the two diagonal rho blocks of EW
   (6.5) act on B_x(1) and B_x(-1), centered at -1 and +1. At zeta=0 the bottom
   class in degree -ell(x)-1 is killed by rho^{ell(x)+1}, so centered HL fails,
   exactly as EW states. The positive middle-position operator does not
   automatically preserve a chosen bimodule summand. The Definition now only
   defines it; a new proof-bearing local lemma supplies the undeformed HL/HR
   restriction at zero. A second local lemma gives the descent matrix from a
   complete counit/twisted-counit proof under the already-established S(x).
   The stronger hL(x)-only positive descent consequence is retained after
   the full character induction, without a dependency cycle. These matters
   are resolved, not left open; see the owner evidence linked below.
2. **Dependency-level check scope.** `node tools/item-dependency-levels.mjs
   check --run frontier-44-special-representation-examples-28` reports only
   “empty scaffold inventory” errors for the other 21 batches (their manifests
   are still placeholders); it reports **no** error for any item of this batch
   — no cycle, no label mismatch, no missing deps array. Maximum level 11.
3. **`validate-plan` warnings.** With the full 56-page run selection,
   `validate-plan` exits 0 with 0 errors and 81 `redundant-prereq` warnings
   across the planned run, four of them on this A page: `requires
   type-a-soergel-bimodules-and-hecke-categorification` (already reachable
   through `rouquier-complexes-and-categorical-braid-relations`) and `requires
   dual-spaces-bilinear-forms-and-inertia` (reachable through three other
   declared suppliers). Those redundancies are in the shared plan's `requires`
   lists and in the design's own wording; the manifest reproduces the plan
   exactly and does not silently “fix” a shared-plan decision. Owner
   reconciliation may trim them; nothing in this batch's item dependencies
   depends on the decision.
4. **Published Kazhdan-Lusztig positivity citation (informational).** The
   published item `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`
   on `kazhdan-lusztig-bases-polynomials-and-cells` records its positivity
   clause as an owner-authorized original-source fallback to EW Corollary
   1.2(1). The corollary of this page
   (`cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`)
   proves positivity locally from the character theorem, so the citation is
   after this page redundant (not defective: it is an explicitly recorded,
   owner-authorized state). Reported here for the canonical ledger/owner
   decision; no published content was edited, and no item of this batch
   consumes the cited positivity clause.
5. **Companion-page duplication check.** `kazhdan-lusztig-bases-polynomials-and-cells-examples`
   (published) already contains the S_2/S_3 Kazhdan-Lusztig basis
   computations; the B page of this pair computes the *Hodge-theoretic* rank
   one/two data (trace form, reduced module, Lefschetz operator, coinvariant
   algebra, characters) and does not re-build those polynomial tables.

## Post-scaffold precision edit (recorded 2026-10-08)

While re-verifying the strategy of
`thm-positive-rouquier-complexes-are-delta-split` against the fetched full
texts, one non-standard phrase was found and replaced. The strategy had
described LW's key commutativity input as "Williamson's localization
identity". No fetched source uses that name (grep of the full texts of EW, LW,
Riche, Soergel 2007 and Libedinsky 2006 finds no such term; the "localization"
of the Hecke category in the later Elias–Williamson *Localized calculus* is a
different construction, the base change to the fraction field). What the
proof actually uses is displayed by LW in the proof of their Proposition 3.7:
the natural map `(Gamma_{<=m+1/<m}B)B_s -> Gamma_{<=m+1/<m}(BB_s)` is an
isomorphism for even `m`, quoted there from Williamson, *Singular Soergel
Bimodules* (IMRN 2011), Proposition 6.5, and used as LW's display (17).
EW's Proposition 6.8 is a verbatim citation of LW Proposition 3.7. The
parenthetical now reads "(the commutativity isomorphism quoted from Williamson,
Singular Soergel Bimodules, Prop. 6.5; displayed as (17) in LW, Section 3.3)".
Only this one field changed (verified by a structural diff of the parsed
manifest: one changed field, `[0].items[11].strategy`); no dependency, statement,
level or source was touched. Twelve readiness records hash through this item
(the item itself and its eleven downstream consumers, four of them B-page)
and were re-recorded `ready` with their unchanged dependency lists after the
edit; `step1-decisions check` then reported 158/158 run-wide items ready with
no batch-12 work row.

## Native worker checks (historical, before owner amendment)

- `node tools/manifest-deps.mjs research/...-batch-12.pages.json` → 30 items,
  0 missing, 0 errors.
- `node tools/coverage-checklist.mjs research/...-batch-12.coverage.json`
  → 2 pages, 68 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-12.coverage.json --stamp`
  → 8/8 sources fetch-verified (PDF bodies, 25–45 pages, with hashes recorded
  in the coverage file); 8/8 resolved, 0 drops.
- `node tools/content-policy.mjs --manifest-only research/...-batch-12.pages.json`
  → 30 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --run ... --pages-file <all 56 pages>`
  → exit 0; no item-level cycle, forward reference, B-page dependency or
  unresolved id on this pair; the 81 warnings are the shared-plan
  `redundant-prereq` class discussed above.
- `node tools/item-dependency-levels.mjs check --run ...` → no error on this
  batch (only the other batches' empty-inventory errors).
- External-reference check: all 54 out-of-batch dependency ids resolve to
  published items on disk (scripted status check, 0 non-published).
- `node tools/url-sweep.mjs --coverage research/...-batch-12.coverage.json
  --out /tmp/b12/url-liveness.json --recover --fail-on-dead` → exit 0; 5/5
  citation URLs live, 0 failed, 0 blocking; 5 citation decisions, 0
  documented source drops. Batch-scoped diagnostic only — the run-level
  `research/<run>-url-liveness.json` is the engine gate's artifact and was
  deliberately not written by this worker.
- `node tools/source-backing.mjs --coverage research/...-batch-12.coverage.json
  --liveness /tmp/b12/url-liveness.json --reharvest-plan /tmp/b12/reharvest.json`
  → exit 0; 30 authored results, every one still backed by an openable source;
  empty re-harvest work list.
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` → refreshed,
  46 declared cross-batch edges run-wide. Batch-12's consumer-side input is
  present (empty array, correct: every out-of-run supplier we declare is a
  published item, which is not an in-run ledger node). The only edge touching
  this batch is the inbound page `requires` discussed above; run-wide
  `--require-reviewed` is still red (36 of 46 edges, 22 of 28 batches have no
  review input yet), which is the engine's join-time condition, not this
  batch's obligation.
- `node tools/step1-decisions.mjs check --run ...` (re-run after the ledger
  refresh and again after the precision edit above) → 158 recorded items, all
  `ready`; the 44 open work rows are all
  `Empty scaffold inventory` for the other 22 batches' pages, none for either
  page of this pair, and the 30 readiness records of this batch are `ready`
  with `owner: false` (none overwritten, none escalated).
- Re-run after the precision edit (all unchanged results):
  `manifest-deps` 30/0/0, `content-policy --manifest-only` 30/0/0,
  `coverage-checklist` 2/68/0/0, `item-dependency-levels check` no batch-12
  error, and a second ledger refresh (no edge change; the edit touched only a
  strategy string). The twelve hash-affected readiness records were re-recorded
  from their stored dependency lists, as described above.
- Appended the owned "Batch 12 Step-1 scaffold" record to
  `briefs/tasks/frontier-dependency-ledger.md` (the cross-batch record file the
  step instructions maintain): the empty consumer input, the 54 published
  out-of-batch suppliers, and the batch-13 supplier-direction page edge owed by
  batch 13's own input.
- Run-wide checks re-run after the edit: `node tools/manifest-integrity.mjs
  --run ...` → 56 owed, 56 present, no scope drift, exit 0;
  `node tools/drift-review-check.mjs --run ... --before-apply` → 28 pages
  reviewed, decisions valid, exit 0.

No item file was written, so item-level precheck/proof-layout runs are not
applicable in this dispatch; Step 3 authors run them after authoring. This
dispatch records scaffolding readiness only; it is not mathematical acceptance.

## Owner amendment: source and proof-route closure (2026-10-08)

The original four carrier files and all 30 native readiness records are preserved
byte-for-byte in `frontier-44-special-representation-examples-28-owner-soergel-preimages/`, with SHA-256 index.
The current scaffold retains every mathematically sound original claim and adds
only three necessary local A-page suppliers (33 total items, maximum level 12):
`lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands` and
`lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis`, and
`lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category`.
The A page is well below the 100-item cap. Current supplier-before-consumer order:

1. `def-real-type-a-soergel-category-and-scalar-extension` (L0)
2. `lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis` (L0)
3. `def-reduced-soergel-module-and-dominant-lefschetz-operator` (L1)
4. `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree` (L1)
5. `def-invariant-intersection-form-on-a-bott-samelson-bimodule` (L2)
6. `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs` (L3)
7. `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category` (L3)
8. `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons` (L3)
9. `lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate` (L4)
10. `lem-hard-lefschetz-implies-primitive-decomposition` (L4)
11. `def-the-deformed-lefschetz-operator-on-b-x-b-s` (L4)
12. `lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category` (L4)
13. `thm-positive-rouquier-complexes-are-delta-split` (L5)
14. `lem-family-signature-constancy-and-the-weak-lefschetz-substitute` (L5)
15. `def-local-intersection-form-for-a-soergel-summand` (L5)
16. `lem-tensoring-with-b-s-preserves-hodge-riemann-signs` (L5)
17. `lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis` (L5)
18. `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction` (L6)
19. `lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands` (L6)
20. `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character` (L6)
21. `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms` (L6)
22. `lem-hodge-riemann-for-large-positive-deformation` (L6)
23. `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs` (L7)
24. `lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity` (L7)
25. `thm-deformed-hard-lefschetz-for-b-x-b-s` (L8)
26. `thm-hodge-riemann-for-indecomposable-soergel-bimodules` (L9)
27. `thm-soergels-character-conjecture` (L10)
28. `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants` (L11)

Further necessary supplier repairs distinguish local degree-zero endomorphism
algebras from full graded Hom modules, prove absolute scalar-extension
indecomposability using the top-support residue field and nilpotent radical,
compute local intersection-form rank using degree-zero Hom and actual summand
multiplicity, and establish negative-degree Rouquier injectivity from the
right-module homotopy retraction and reduced cohomology before invoking HR.
The tensoring lemma now gives explicit grading-dependent signs. The large-
deformation comparison sets P^1=0. The S3 companion computes its two genuine
negative-degree primitive spaces, both one-dimensional, with positive/negative
forms; its full dominant-chamber formulas are verified algebraically.

Independent owner source fetching and targeted full-argument readings, exact
mathematical evidence, preserved history, affected consumer closure and current
checks are recorded in [`frontier-44-special-representation-examples-28-owner-soergel-repair.md`](frontier-44-special-representation-examples-28-owner-soergel-repair.md).
Native worker source-read claims and native checks above remain attributed to
that worker; they are not a claim that the owner re-read every listed source.
The current owner checks are scaffold checks and do not certify authored item
proofs. No item or page file was authored, and no shared plan or runtime state
was altered.

The owner also completed the actual downstream mathematical corrections:
radical and perversity definitions, minimal-model/functorial-filtration proof
supplier, degree-zero form uniqueness and local intersection forms, reduced
embedding proof, the existential Rouquier-embedding quantifier, inverse-KL
coefficient orientation, and the local s-stable support-cut commutation used
in Delta-splitness. The owner evidence records their exact arguments and sources.

The final foundation review also corrected the coordinate-versus-balanced
Hodge root convention, lowest-degree HR sign dictionary, primitive-decomposition
signature formula, A-bilinear Hecke trace computation and reduced factorization
boundary. All 33 contracts and actual dependency closures were examined before
the final owner readiness refresh; the stable boundary is recorded in the
owner repair inputs and owner evidence files.

Final native Step-1 readiness check after the stable refresh: all **33 batch12 items ready**, zero batch12 work rows. Run-wide status remains root-owned and incomplete (283 items, 145 ready at this check); this is not a passing whole-run gate. Preserved preimage and current owner-input hash verification found zero mismatches.
