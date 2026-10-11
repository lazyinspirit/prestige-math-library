# Batch 13 Step-1 scaffold — `projective-functors-and-the-soergel-functor-in-category-o`

Run `frontier-44-special-representation-examples-28`, batch 13 (orders 1544/1545),
category `special-topics-in-representation-theory`. Owned pair:

- A `projective-functors-and-the-soergel-functor-in-category-o`
- B `projective-functors-and-the-soergel-functor-in-category-o-examples`

Owned outputs written in this dispatch: `…-batch-13.pages.json` (25 items),
`…-batch-13.coverage.json`, the 25 `…-step1-<item>.json` readiness records,
`…-batch-13.cross-batch-dependencies.json`, and this note; plus the owned
"Batch 13 Step-1 scaffold" section in `briefs/tasks/frontier-dependency-ledger.md`.
No published item, shared plan, engine state or verdict was edited.

## 1. Binding direction and plan reconciliation

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before construction. It authorises this pair, requires suppliers before
consumers, preserves every approved claim and directs precise escalation of
unclosable proof obligations. Nothing in it conflicts with the scaffold.

`research/plan-kazhdan-lusztig-track.md` KL-3 (line 110) is the inventory source:
`research/plan-spec.json` carries both pages with **empty `items: []`**, so there is
no design-versus-plan item conflict to record; the plan's page metadata (id, title,
kind, category, companion, order, `requires`) matches the design table and the
manifest exactly. Every design row is scaffolded; the plan controls and nothing in
it contradicts the design.

Deviations from the design table, recorded as required:

- `thm-projective-functors-are-generated-by-wall-crossing` is scaffolded as
  `thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group`. The
  broader statement (Krull–Schmidt, the Θ_w characterisation, generation by
  wall-crossings and determination on `K_0`) covers the design claim without
  narrowing it; the design's `def-the-antidominant-projective-and-soergel-functor`
  is scaffolded with the corrected grammar `…-and-the-soergel-functor`.
- Ten local prerequisites absent from the design table were added on the A page
  (the design requires local closure and permits necessary prerequisites):
  `def-regular-integral-category-o-block-and-its-antidominant-weight`;
  `lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle`;
  `lem-the-harmonic-complement-of-the-coinvariant-algebra`;
  `lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension`;
  `lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s`;
  `lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label`;
  `def-the-deformed-category-o-family-and-its-specializations`;
  `prop-base-change-freeness-and-specialization-in-the-deformed-family`;
  `thm-lifting-of-indecomposable-projectives-to-the-deformed-family`;
  `lem-the-central-action-on-the-deformed-antidominant-projective`.
  The last four route Soergel's deformation proof of the Endomorphismensatz; they
  are the four escalated items together with the design items that consume them.
- The four B items are the design's B companion filled in (the design names only
  the page): rank-one wall crossing, the rank-two class computation, the S_2/S_3
  coinvariant algebra, and non-commutativity of wall crossing.
- `thm-category-o-has-enough-projectives` (a plan stage-1 supplier named in the
  design) is already published on disk and is consumed directly.

The design's warnings are preserved: no graded lift of category O is asserted
(the grading on the coinvariant target is its own, and the auxiliary Soergel
grading is bookkeeping); the Verma-multiplicity comparison is stated at `v=1`
(i.e. by total internal degree), never as individual polynomial coefficients;
the Struktursatz is stated for the regular integral block only.

## 2. Construction summary

25 items in prerequisite order, 21 A + 4 B, `dependency_level` 0…10 (levels
recomputed after every dependency edit; `item-dependency-levels check --run` reports
no batch-13 diagnostic). A-page order: coinvariant algebra → block conventions →
projective functors → coinvariant lemmas → wall-crossing definition → two-step flag
lemma → graded regular representation → K_0 action → projective generation →
projective-functor classification → deformed family → base change → lifting →
central action → Endomorphismensatz → antidominant projective and Soergel functor →
Struktursatz → wall crossing under V → projective/Soergel-module correspondence →
Verma-multiplicity comparison. Every item ids is stable and unused elsewhere; every
`deps` array is explicit; no cycle exists.

Readiness recorded: **17 ready**, **8 escalated** (`prop-base-change-freeness-and-specialization-in-the-deformed-family`,
`thm-lifting-of-indecomposable-projectives-to-the-deformed-family`,
`lem-the-central-action-on-the-deformed-antidominant-projective`,
`thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra`,
`thm-soergels-struktursatz-full-faithfulness-on-projectives`,
`thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule`,
`thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`,
`prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v`). The
readiness records carry the examined dependency ids and the exact blocker; none is
a proof approval.

## 3. Mathematical corrections made in this dispatch

Every correction below was made before the readiness records were written, so all
records bind the current content.

1. `def-regular-integral-category-o-block-and-its-antidominant-weight` claimed the
   false diagonal formula `[Δ(w·λ):L(v·λ)] = δ_{v,w}` (already false for sl_2:
   `[M(0):L(-2)] = 1`). Replaced by the published triangularity:
   `Δ(w_0·λ) = L(w_0·λ)` is the unique simple standard,
   `[Δ(w·λ):L(w·λ)] = 1`, and
   `[Δ(w·λ):L(v·λ)] ≠ 0 ⇒ v·λ ≤ w·λ` in the dominance order, read off
   `thm-bgg-reciprocity` in the direction of
   `cor-projective-standard-labels-lie-above-the-head`; those two published
   suppliers were added to `deps`.
2. Degree-normalisation consistency. The page fixes `deg h = 2`
   (`def-the-coinvariant-algebra…`), while
   `lem-the-coinvariant-algebra-is-a-gorenstein-algebra…` and
   `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` displayed
   the `deg h = 1` formulas. Both now state the invariants' page degrees `2d_i`
   (`d_i` the classical degrees), Hilbert series `∏(1-t^{2d_i})/(1-t^2)^r`, top
   degree `2N`, socle degree `2N`, and graded character
   `∏(1-t^{2d_i})·det(1-t^2w|h*)^{-1}`; the `t→1` order argument now uses
   `dim h^w ≤ r-1` for `w ≠ 1` (the earlier text only said `≥1`, which does not
   suffice).
3. `lem-the-harmonic-complement…` strategy: replaced an incorrect direct-sum
   sentence by graded Nakayama modulo `S^W_+` plus the rank count.
4. `prop-base-change-freeness-and-specialization-in-the-deformed-family`: the
   target of (1) said `(End_T(M_S(λ)))^{g-linear}`; it is the **g-finite** part of
   `End_T(M_T(λ))` for the adjoint action (source: [So1, §1.2 with Cor. 8] =
   [Soe90, Prop. 2(a)]). The strategy's escalation sentence was replaced by the
   precise external input.
5. `lem-the-central-action-on-the-deformed-antidominant-projective`: (2) claimed
   `End P_R ≅ T^W ⊗_{T^W} T`, which has rank one over `T`; the correct target is
   `T ⊗_{T^W} T` (rank `|W|`, special fibre `C`), confirmed by [Soe92, §3.2,
   Thm. 9] and McDonnell Prop. 3.10.
6. `thm-wall-crossing-under-the-soergel-functor…`: the "more precisely" clause
   claimed `B_s⊗_S C ≅ C⊗_{C^s}C` as graded `C`-modules. This is false already for
   `W = S_2` (2- versus 4-dimensional). Replaced by the correct graded
   identification `Vθ_s ≅ (−⊗_R B_s)∘V` with the auxiliary suspension stated as a
   normalisation fixed by the rank-one case, not as a literal isomorphism.
7. `prop-verma-flag-multiplicities…`: the display carried a redundant `|_{v=1}`
   on a sum over internal degrees; removed, with the auxiliary grading named.
8. AC declarations: every item whose statement assumes AC now also lists
   `def-axiom-of-choice` in `deps` (ten A items and all four B items gained the
   declaration; the four B contracts also now state the inherited assumption).
   Items stating AC already carry the dependency. The use is the inherited block /
   translation / enough-projectives theory; the coinvariant computations proper are
   choice-free.
9. Process chatter was removed from the strategies of the eight escalated items;
   their strategies are now complete mathematical routes modulo the recorded
   missing input.

## 4. Sources

Seven sources back the A page and three the B page; all ten entries are
fetch-verified by `source-fetch-check --stamp` (PDF bodies, hashes recorded):

| Source | Kind | URL / locator read |
|---|---|---|
| Soergel, *Kategorie O, perverse Garben und Moduln über den Koinvarianten zur Weylgruppe* (JAMS 3 (1990) 421–445; MPIM preprint 1989/46) | paper | `https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf`; §§1.1–1.2, 2.1–2.6, bibliography (complete German text) |
| Soergel, *The combinatorics of Harish-Chandra bimodules* (J. reine angew. Math. 429 (1992) 49–74) | paper | `http://sporadic.stanford.edu/macdo/papers/SoergelHC.pdf`; §1 and §3.2 (Thms 9–10 with proofs) |
| Soergel, *Universelle versus relative Einhüllende* (Math. Ann. 284 (1989) 177–198) | paper | `https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0284/LOG_0020.pdf`; §§1.1–1.4, 2.1–2.2, 3.1–3.5, headings of 4–8 — image-only scan, full text read by OCR (§5 below) |
| Garnier, *The classical theory of Soergel bimodules and the link with Lusztig's conjecture* (Oberwolfach notes) | lecture-notes | `https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf`; Parts 3–4 (Def. 4.6–Cor. 4.21, §10) |
| Brundan, *Representations of the general linear Lie superalgebra in the BGG category O* (survey) | survey | `https://darkwing.uoregon.edu/~brundan/papers/supero.pdf`; §4 (Thm 4.1, Thm 4.2, translation-functor conventions, historical notes) |
| Bernstein–Gelfand, *Tensor products of finite and infinite dimensional representations of semisimple Lie algebras* (Compositio Math. 41 (1980) 245–285) | paper | `https://www.numdam.org/item/CM_1980__41_2_245_0.pdf`; §§0.2–0.4, 2.1–2.5, 3.1–3.9 (definition, Lemma 3.2, Thms 3.3–3.5, Cor. 3.8) |
| McDonnell, *Gradings and Soergel Bimodules* (Freiburg dissertation 2019) | monograph | `https://d-nb.info/1203066686/34`; Chapter I, Chapter II §§2–3, Chapter III §§2, 3.3–3.4 (Prop. 3.9, Prop. 3.10 deformed Endomorphismensatz) |

Harvest: 59 named results/section headings over the ranges read, each disposed in
`…-batch-13.coverage.json` (`included`, `inline`, `already-published` is used only
for published on-disk items, with several `deferred`/`out-of-scope` declines each
carrying its own reason). The primitives of category O (BGG category, Verma flags,
BGG reciprocity, translation functors, enough projectives, projective covers,
Grothendieck-group bases, type-A Soergel bimodules) were harvested as
`already-published` or `inline` against the corresponding published items; no
published item was re-scaffolded. `coverage-checklist` reports 0 errors and 0
warnings.

The single-source shortfall case does not arise: no `source_resolution` drop is
recorded, because the one retrieval difficulty (below) was resolved by reading the
retrieved scan, not by dropping a result.

## 5. The Math. Ann. scan: reading record, not an outage

[So1] (Math. Ann. 284 (1989) 177–198) is the input behind every escalated item. Its
GDZ PDF is a real, fetchable, complete 23-page document (stamped as such), but it is
an image-only scan with no text layer: `mutool draw -F txt` yields only the
copyright page, and the sandbox had no OCR binary. Earlier attempts (direct GDZ
download, text extraction, alternate hosts EuDML/Springer/MPIM, and a scan of
Soergel's publication page) either failed to give a readable body or a full text at
all. This dispatch installed a pure-Python OCR engine (RapidOCR with an ONNX
runtime, in `/tmp`) and OCR'd the complete article; the used passages were then
cross-checked: the theorem actually consumed by the library
(`U(g)⊗_Z S → (End_S M)^{g-endl}` for the Borel case) is exactly the result
[Soe90, Prop. 2(a)] cites from [So1], and its deformed consequence is independently
quoted in [Soe92, Thm. 9] and McDonnell Prop. 3.10. The OCR text is therefore
adequate for the locators recorded here; formulas were used only where
corroborated. This closes the *reading* gap and converts the escalation into a
*proof-closure* escalation (below). The OCR output is in `/tmp/kl3/so1pages/*.txt`
and the source entry in the coverage file states the OCR reading explicitly.

## 6. Escalations: exact blocker and consequences

All eight escalated items have one smallest missing prerequisite in common: a
**local proof of the universal-family structure theorem** [So1, §1.2 with Cor. 8] =
[Soe90, Prop. 2(a)]: for a Borel subgroup the relative enveloping algebra is
`U(g)⊗_Z S(h)`, and its g-finite endomorphisms are exactly the endomorphisms of the
universal Verma family `M_S(λ)`. The only known routes pass through the tangential
description of twisted D-modules on `G/P` (Beilinson–Bernstein type geometry) or
through Bernstein's alternative trace-of-projective-functors argument, which is not
in the library and for which no complete readable argument is available in this
environment. This is outside the algebraic type-A scope of this batch; a faithful
local closure would require a new dedicated sub-block (relative/universal
enveloping algebras, twisted D-modules on flag varieties) with its own A/B
inventory, or an owner decision to re-scope the KL-3 route.

Chain: [A13] feeds [A14] and [A15]; [A15] feeds the Endomorphismensatz [A16];
[A16] feeds the Struktursatz [A18]; [A18] with [A15] feeds wall-crossing under V
[A19]; [A19] with [A18] feeds the projective/Soergel-module correspondence [A20];
[A13]/[A16]/[A18]/[A20] feed the Verma-multiplicity proposition [A21]. Downstream,
batch 14 (`the-kazhdan-lusztig-character-and-multiplicity-theorem`) consumes this
page; its `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` is
designed to combine these items, so the owner should expect that row to inherit the
hold unless the KL-4 route is re-scoped. The unescalated remainder of the page
(coinvariant theory, wall-crossing classes, projective generation, projective-functor
classification) is independent of this block and stays ready.

Secondary inputs also recorded on the affected items: Jantzen 7.25 (base change,
[A13]); the omitted-proof Lemma 2 of [Soe90, §2.1] ([A14]); the quotient-category
adjunction Lemma 5 of [Soe90, §2.3] ([A18]); and the two scaffolded-but-unauthored
batch-12 items ([A19], [A20], [A21]).

## 7. Cross-batch reconciliation

- `content-policy --manifest-only` must load batch 12 and batch 13 together: the
  four uses of the two batch-12 items (`def-reduced-soergel-module-and-dominant-lefschetz-operator`,
  `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`)
  are supplied by batch 12 (orders 1542/1543, lower than 1544/1545, so suppliers
  precede consumers in the run order). Loaded alone, batch 13 reports four
  `batch-dependency-missing` errors that are an artefact of the loader, not a
  defect; loaded together, 58 scoped items give 0 errors.
- Owned cross-batch input: five `open` rows (1 page + 4 item), recorded in
  `…-batch-13.cross-batch-dependencies.json` and listed in the ledger brief; the
  unified refresh shows no orphaned reviews and adds the inbound batch-14 page edge
  (batch 14 owns that row).
- No other batch consumes batch-13 items, and batch 13 consumes no other batch's
  items beyond the two named batch-12 definitions.

## 8. Checks actually run (results as printed)

- `manifest-deps …-batch-13.pages.json` → 25 item(s), 0 errors.
- `item-dependency-levels check --run …` → only the other batches'
  `empty scaffold inventory` rows; zero diagnostics on either batch-13 page.
- `validate-plan research/plan-spec.json --run … --pages-file <all 56 pages>` →
  exit 0; no item-level cycle, forward reference, B-page dependency or unresolved
  id; 81 `redundant-prereq` warnings, the run-wide shared-plan class, none
  batch-13-specific.
- `content-policy --manifest-only <batch-12, batch-13>` → 58 scoped items,
  0 errors, 0 warnings.
- `coverage-checklist …-batch-13.coverage.json` → 2 pages, 59 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --stamp …` → 10/10 fetch-verified (PDFs of 12–94 pages with
  hashes); check-mode re-run → 10/10 resolved, 0 drops.
- `url-sweep --coverage … --out /tmp/b13/url-liveness.json --recover
  --fail-on-dead` → 7/7 live, 0 failed, 0 drops (batch-scoped diagnostic only; the
  run-level liveness artifact is the engine's).
- `source-backing --coverage … --liveness /tmp/b13/url-liveness.json
  --reharvest-plan /tmp/b13/reharvest.json` → every authored result still backed,
  empty re-harvest list.
- `frontier-dependency-ledger refresh --run …` → refreshed, 5 owned rows present,
  0 orphaned reviews.
- `manifest-integrity --run …` → 56 pages owed, 56 present, no scope drift.
- `drift-review-check --run … --before-apply` → 28 pages reviewed, decisions valid.
- `step1-decisions check --run …` → 324 items, 279 ready; the 8 batch-13 rows are
  owner-held escalations, the remaining rows belong to other batches.
- Scripted external-reference check → every batch-13 dependency resolves to a
  published on-disk item except the four uses of the two batch-12 in-run items
  recorded in the ledger.

Two unresolved findings, both run-wide and not batch-13 defects:

1. `depsource.mjs … --run … --items-file <batch-13 ids>` aborts inside the run
   loader: `Invalid or empty current page in
   …-batch-10.pages.json` (batch 10 is still an unscaffolded placeholder with
   `items: []`; `readRunManifestPages` is called without `allowEmptyItems`). The
   per-item `depsource` classification for batch 13 could not be produced until
   batch 10's inventory is written; the equivalent information is available from
   `manifest-deps`, `content-policy` and the ledger.
2. The run-wide `step1-decisions check` still shows other batches' pending work:
   32 `empty scaffold inventory` rows, 36 stale (`Item or dependency changed`)
   records in batches 1/2/5/6, one missing record in batch 5, and two owner-held
   stale rows in batch 2. Those are their owners' obligations; this note records
   them only so the reconciliation is not misread as complete.

No published defect was confirmed in the suppliers examined
(`def-bgg-category-o`, `def-verma-module`, `def-standard-and-costandard-objects-in-category-o`,
`thm-bgg-reciprocity`, `cor-projective-standard-labels-lie-above-the-head`,
`thm-projectives-in-category-o-have-verma-flags`, `def-translation-functor-between-o-blocks`,
`prop-translation-functors-are-exact-and-biadjoint-across-a-wall`,
`thm-translation-to-and-from-a-wall-on-standard-modules`, `def-verma-flag-and-its-multiplicities`,
`def-grothendieck-group-and-character-of-category-o`, `thm-category-o-has-enough-projectives`,
`prop-projective-covers-in-o-are-indecomposable-and-unique`,
`lem-finite-dimensional-tensors-reach-every-block-simple`,
`def-type-a-soergel-bimodule-for-a-simple-reflection`, `def-the-type-a-soergel-category`).
The two published items used in the corrected triangularity claim are consistent
with each other and with the corrected statement.

## 9. Axiom of Choice

Every item whose statement assumes AC declares `def-axiom-of-choice` in `deps`
(verified by script: 0 inconsistencies). The use is the inherited published block,
translation-functor and projective-cover theory named in each record; the
coinvariant-algebra computations and the rank-one/rank-two class computations are
choice-free beyond those inherited suppliers. No incompatible-axiom branch occurs
on this pair.

## 10. Verification posture

These records state scaffold readiness to author, with sources read and
fetch-verified and prerequisites examined, and they state the exact escalation for
the eight items that cannot be closed here. They are not mathematical acceptance,
not proof completion, and not a gate verdict; Step 3 authors write the proofs, and
the engine gate plus owner reconciliation decide the run. The escalated rows are
owner-held and were not overwritten.

## 9. Owner repair and independent focused review (2026-10-08)

The native carrier assertions above are retained as dispatch history. Their exact
pre-repair bytes, all 25 native decisions and both dispatch result receipts are
preserved in `frontier-44-special-representation-examples-28-owner-category-o-native-baseline/`.
The current mathematical review is
`frontier-44-special-representation-examples-28-owner-category-o-proof-closure-review.json`.
No active item file was created and no proof acceptance is asserted.

Confirmed corrections, in supplier order:

- Hom specialization uses the actual residue field at a point; the Nakayama
  statement requires a g⊗R-linear map, so it preserves finite free deformed
  weight spaces. Arbitrary R-linear maps on the underlying infinite module do
  not satisfy that inference. The central structure uses the published
  HC_rho evaluated at lambda+rho+epsilon.
- Singular lifted projectives have labels W_A/W_A,lambda, not the stabilizer.
- The deformed central action has domain Z⊗R and target
  R⊗_{R^W}R (singular version R^{W_lambda}⊗_{R^W}R). Generic Verma constituents
  have different x-indexed central scalars. A single scalar map Z→R is
  inconsistent with the rank-|W| algebra. The source is Soe92 §3.2 Theorems9–10;
  McDonnell Proposition3.10 is a modular SL2 calculation, not a proof in the
  general complex semisimple setting. Generic equality cannot justify integral
  surjectivity: codimension-one rank-one fibers must also be proved.
- The closed-fiber Endomorphismensatz chooses the dominant representative of
  the regular block; its proof specializes the right R factor. This preserves
  every regular block, rather than treating w0·lambda as antidominant for an
  arbitrary representative.
- Injectivity of P_antidominant is now proved locally in the functor Definition.
  At -rho the central orbit has one weight; highest-weight classification and
  BGG reciprocity make its block semisimple. Translate its simple module with
  E=L(lambda+rho); the published general exact tensor-block biadjunction makes
  the translated object Q projective-injective. The reverse tensor projection
  of the simple antidominant Verma retains only the extremal E* weight
  -w0(lambda+rho), multiplicity one. Thus Hom(Q,L_antidominant)=C, and the
  projective cover is a split summand of Q. The actual published biadjoint
  Statement is general, despite the supplier's across-wall filename. This
  complete proof closes this particular gap without using the universal theorem.
- The left-module wall-crossing bimodule acts on its first factor. Its action is
  obtained by restricting/extending scalars along C^s⊂C. The reduced polynomial
  B_s has dimension two; the coinvariant bimodule has dimension 2|W|. They are
  different objects. Centered self-dual rank-one degrees are -1,1; 0,2 is an
  uncentered shift.
- With right multiplication on Verma labels and left tensor action followed by
  right origin reduction, P(w·lambda) corresponds to reduced B_{w^{-1}}.
  The target is generated by wall-crossing tensors applied to the trivial
  module, not the regular C-module. Soe90's convention appears explicitly in
  the remark after Theorem12. Full reduced indecomposability still requires
  a local reduction-of-Hom proof; polynomial rational-to-real scalar extension
  is a different operation and cannot replace it.
- Individual standard-support ranks are computed on the polynomial/deformed
  lift before reduction. All graph supports collide at the origin; the
  finite-dimensional V(P) alone has no separated Bruhat graph filtration of
  the asserted kind. The current proposition retains every individual Verma
  multiplicity using pre-reduction ranks and inverse labels. Its added batch12
  dependency is the actual scalar-extension/support-rank supplier.

The eight native escalated subjects remain mathematically held. In addition to
the universal-family theorem, Soe90 Prop2(b) uses the specialized Kostant theorem
for every Verma M(mu), not merely a generic one: U/U ker chi_mu equals its
ad-g-finite endomorphisms, compatibly with universal specialization. The library's
Verma-annihilator item proves only containment. The source lists Joseph,
Inventiones56(1980)191–213 and Jantzen7.25; no complete local proof was found in
these scaffold suppliers. The integral central-order, reduction-of-Hom and
individual standard-rank dictionary obligations are separately recorded, rather
than hidden behind the universal citation.

The algebraic generic/codimension-one gluing route is a possible least-destructive
alternative for the central-order theorem, but it still needs construction of
flat deformed projectives and a full nonsplit rank-one extension/central-generation
comparison. The most-singular translation argument closes injectivity only.
Bernstein's trace argument is historical attribution without a complete available
argument; the tangential differential-operator route needs absent geometric
prerequisites. No graph/home/new-pair expansion or narrowing to force readiness
was performed. Batch14's prospective multiplicity consumer inherits the hold.
Current readiness registration awaits root stable-input guard authorization;
unchanged ready decisions and immutable native escalations are not fabricated.

## 10. Four local algebraic prerequisites and provisional closure (2026-10-09)

The independently read MIT18.757 full 162-page body supplies the actual proof
routes in §§13.1,13.5,17.1–17.4,18.1–18.2. Four necessary local A-page items
have been added, taking the inventory to29 (25 A+4 B): invariant degree-sum,
adjoint isotypic zero-weight rank, reduced integral nilpotent central fiber,
and the all-weight Duflo–Joseph Verma endomorphism theorem. Their strategies
expand the omitted exercises/primitives: the degree identity uses the next
Molien coefficient; the harmonic rank uses an explicit finite root-lattice
shift/constant-term limit; the nilcone proof gives a dominant principal slice,
its nonzero constant weighted Jacobian, Borel conjugacy, and local-CM
associated-prime detection; the Verma proof supplies simple-submodule PBW
growth, Hopf tensor freeness and the injective dual-Shapovalov action argument.
The universal all-T proposition now has the finite highest-weight kernel/
constant-rank determinantal base-change strategy, retaining every original claim.
The zero Lie algebra case and right-multiplication orientation of a singular
PBW embedding are explicit.

The original projective-functor classification route has also been corrected:
evaluation on the dominant Verma need not be faithful on natural maps in
ordinary O (central nilpotents are a counterexample). Matrix coefficients lift
from U_chi to U via the proved harmonic isotypic decomposition, so evaluation
is onto. Its kernel is nilpotent because maps vanish on every embedded standard
and strictly lower a fixed projective-generator Verma flag. Idempotents and
isomorphisms lift through that nilpotent kernel, proving classification of
isomorphism classes, generation, Krull–Schmidt and K0 determination. No false
full-faithfulness claim for this evaluation is used.

Additional native ready defects repaired in supplier order: choose the dominant
regular representative in the block Definition; fix wall-translation flag
proof directions; replace the K0 single-w claim by the true subexpression
product; reverse the displayed functor word to match right multiplication;
use the correct dominant Bruhat support y<=x for projective standard flags;
characterize Theta_w on Delta_dominant, removing the unsupported arbitrary-
Verma-head condition; correct the rank-one highest wall to -1 and the same
nonsplit extension for both inputs; correct the rank-two top projective to ts;
and remove the false harmonic 'sum of all disjoint submodules' characterization.
Coinvariant Frobenius duality is now proved by computing top Tor through both
Koszul resolutions, rather than a circular dimension-symmetry pairing shortcut.

Current separate detailed proof notes cover local projectives, the central
order, and translation/Struktursatz/reduction/multiplicities. They are local
review work, not independent audit receipts. All old native decisions remain
historical and no new readiness is registered. The three added fulltext sources
are mechanically fetch-stamped: source-fetch-check13/13 resolved,3 newlystamped.
The late published Cartier/Borel page prerequisites require root's approved
serial order integration of the12 pages of selected batches13–18; current
orders remain provisional until that owner-only window. No whole-plan write
or empty passing validator selection has been used.


## 11. Current local proof closure after root metadata integration (2026-10-09)

This section supersedes the mathematical holds in the historical §§9–10. Root
completed the three required-page declarations and selected13–18 order move;
current13 orders are1782–1783. The current inventory remains29 (25A+4B), with
all original true claims retained and four necessary local primitives added.
The full weight lattice, with root shifts, is used in the constant-term proof.

The all-weight field Verma theorem is proved from simple-Verma restriction,
PBW/Hopf growth, nilcone domain and harmonic adjoint rank. Finite polynomial
highest-weight raising matrices then give locally split constant-rank kernels,
base change at every prime and all-T universal action. Fixed regular-source
projective lifting is independent: truncated weight-representing projectives,
finite central CRT, maximal-weight flag peeling and lifted higher-projective
removal work over noncomplete R. Ordinary wall-word object generation precedes
this theorem; singular targets are coset-labelled and reached from a regular
source, with dot-dominant meaning shifted weight in the closed chamber.

The central-order proof includes the actual nonsplit root-DVR pair, Casimir
uniformizer, height-one intersection and shifted finite-orbit jet calculation
with (1/|H|) times the unnormalized W sum. Translation and quotient adjunction
prove ordinary Struktursatz and the coinvariant tensor action. The dictionary
proof gives deformed full faithfulness, polynomial reduction-of-Hom, local full
graded End rings and inverse labels. The actual batch12 form clauses5–6, finite
rational invariance equations and nonzero determinant descent supply centered
self-dual auxiliary gradings over C. Finite homogeneous components and local
End establish uniqueness up to shift and unique centered normalization.
Individual graph-support ranks are still measured before origin reduction.

Functor classification uses surjective evaluation, harmonic lifting from the
central quotient to U, and a nilpotent evaluation kernel on a fixed projective
generator; it asserts isomorphism-class determination, not faithful evaluation
on all natural maps. Its proof is separate from ordinary object generation.
The permutation polynomial realization has a fixed extra average coordinate,
removed in the Cartan coinvariant quotient; its Hilbert trace uses t^(2d_i).

Local review found no remaining proof-strategy obstruction among29 subjects.
This records the owner's source-grounded scaffold review, not an independent
item audit or a proof of already-authored item files. No readiness records have
been changed. Native25 decisions and four carriers remain in their immutable
baseline. Prospective14 consumers must use inverse labels, pre-reduction
standard ranks and corrected right-wall composition order.

Focused checks: explicit manifest29, content-policy batches12+13 (62subjects),
coverage79 harvested headings and source-fetch13/13 all passed. The first
coverage invocation used the obsolete documented --manifests syntax; the
current CLI pairs coverage with its sibling manifest and the corrected
coverage-only invocation passed. Own levels are acyclic with maximum12.
Normal itemInputPaths hash closure contains plan-spec and batches1–4,12,13;
no batch8 or future14 manifest path. This transitive hash context does not
extend the item validator or mathematical audit selection. Stable guard and
normal readiness registration remain root-controlled final steps.


## 12. Proposed owner Step3 scope enrichment, round1 (2026-10-10)

This successor preserves the full native note above as history. In particular the
§1 sentence “the design names only the page” is incorrect: the KL-3 B inventory
at plan-kazhdan-lusztig-track.md lines358–363 explicitly names diagnostic examples.
The Step3a review correctly identified that omission. The three exact planned IDs
are added without removing or changing any of the four existing sound B objects.
The current complete successor inventory is32 subjects (25 A+7 B). A objects,
claims, strategies, deps, page identity/order/requires and all previous coverage
rows/fetch stamps are unchanged. Source coverage gains three included B rows.

New subjects: ex-wall-crossing-on-projectives-in-the-sl-two-block;
ex-the-soergel-functor-on-a-small-regular-block;
cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects.
Their statements/strategies calculate the rank-one projective wall action,
V-values, full projective Hom table/composition, reduced modules and pre-reduction
standard ranks, then exhibit both nonfaithfulness and nonfullness outside the
target-projective hypothesis. Generated B examples remain leaves and are never
used as mathematical suppliers. All dependencies name actual current A scaffolds
or published items, including the real target-projective Struktursatz statement.
No A interface changed, so no supplier-change consumer propagation is opened.

The proposal author independently fetched the complete12-page Garnier PDF and read
Definitions4.17/Theorems4.18–4.19/Remark4.20/Corollary4.21 (printed10–11). Historical
source stamps are preserved verbatim; this author does not assert reading the
complete Soergel preprint or verifying the global A proofs. The finite calculations
are expanded locally. Proof strategy and source/dependency review are preparation,
not an independent audit or a readiness/scope/gate acceptance. Root must compare
the guarded native preimages after writer drain before integrating these successors.
The same reviewer must inspect actual integrated bindings for final sufficiency.
