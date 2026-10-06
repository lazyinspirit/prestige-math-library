# Step 3a scope review — `morita-bicategories-and-projective-generators` / `morita-bicategories-and-projective-generators-examples`

- **Run:** frontier-41-ha-dt-29 (role alpha, dispatch `step3a-pair-morita-bicategories-and-projective-generators-66ed206fe20b8c67`)
- **Pair:** A `morita-bicategories-and-projective-generators` (order 921) / B
  `morita-bicategories-and-projective-generators-examples` (order 922), batch 26.
  Batch 26 holds exactly this pair, so no sibling pair shares the batch.
- **Decision:** `sufficient` — the planned definitions, results and examples
  cover the designed subject (HA-26) at design strength, and every prerequisite
  resolves to a published library item or to a manifest of this run. One
  uncertain prerequisite nuance (F1), one confirmed coverage-record
  discrepancy (F2) and two non-defect notes (F3–F4) are recorded below for
  owner attention under the Step-3a unmet-prerequisite rule.
- **Assessed scope, not proof correctness.** No scaffold, item file, coverage
  file or owner record was edited.

## 1. Inputs read

- Manifests: `research/frontier-41-ha-dt-29-batch-26.pages.json` (both pages,
  all 19 items with statements, deps, `justified_by` and dependency levels);
  current-plan entries for orders 921/922 in `research/plan-spec.json`.
- Prose/design: `research/plan-homological-algebra-track.md` L5405–5483
  (HA-25–HA-29 conventions: left modules, $A\to B$ a $(B,A)$-bimodule,
  $T_M=M\otimes_A-$, no commutativity, supplied universal-object data,
  no class-wide inverse choices), L5582–5749 (HA-26 P5 coherence, P6
  reconstruction, P7 dual basis/invertibility/center), L6164–6181 (B2
  witnesses), L6234–6277 (source-reading table), L6278–6350 (binding item
  inventory; HA-26 A heading L6309, B heading L6326); `research/eilenberg-watts-expansion/proposed-items.json`.
- Coverage: `research/frontier-41-ha-dt-29-batch-26.coverage.json`
  (2 pages, 7 sources, 40 harvested rows, all with dispositions and stamped
  fetch evidence).
- Owner decisions: `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
  (binding: HA-25–HA-29 statements, complete local proof contracts and
  justified definitions bind to the plan and `proposed-items.json`; the items
  are proposals that must pass normal authoring and proof review; preserve
  audited endpoints and report blockers honestly);
  `research/frontier-41-ha-dt-29-planning-notes.md`;
  `research/frontier-41-ha-dt-29-alpha-step1-drift.md` L97–101 (`VERDICT:
  no-drift` for this page, preserving "supplied small projective generators
  and specified equivalence data, not arbitrary class-wide inverse choices").
  No owner Step-3a scope receipt exists for this A page.
- Dependency records: `research/frontier-41-ha-dt-29-batch-26.cross-batch-dependencies.json`
  (13 rows: 12 item + 1 page, all `verified`),
  `research/frontier-41-ha-dt-29-cross-batch-dependencies.json`, and the
  run scope ledger `research/frontier-41-ha-dt-29-scope-ledger.json`.
- Sibling scaffolds: `...-batch-25.pages.json` (HA-25, the in-run supplier
  page, 13 A + 4 B items) and the downstream consumer manifests
  `...-batch-27/28/29.pages.json` (HA-27/28/29 items that consume this page).
- Published suppliers: statements/front matter of every published dependency
  of the pair, read at statement level (see §5 for the load-bearing ones and
  §6 for the two citations whose recorded route needs care).

## 2. Design vs scaffold

Checked item-by-item against the binding inventory in
`plan-homological-algebra-track.md` L6309 (A) / L6326 (B) and
`proposed-items.json`:

- All 15 designed items are present in the manifest with unchanged id, kind
  and design proof location: 12 A items (P5: `def-bicategory-pseudofunctor-and-biequivalence`,
  `def-morita-bicategory-of-rings-and-bimodules`,
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`,
  `lem-tensoring-defines-a-pseudofunctor-with-interchange`,
  `thm-eilenberg-watts-biequivalence-for-module-categories`; P6:
  `def-small-projective-generator-and-progenerator`,
  `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom`,
  `thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category`,
  `lem-small-projective-modules-are-exactly-finitely-generated-projective-modules`;
  P7: `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`,
  `thm-morita-equivalence-is-invertibility-of-a-bimodule`,
  `cor-center-is-morita-invariant-via-natural-endomorphisms`) and all 3 B
  items (`ex-matrix-ring-morita-pair-with-explicit-tensor-inverses`,
  `cex-a-projective-generator-need-not-be-small`,
  `ex-central-elements-as-natural-endomorphisms-of-the-identity`). The two
  `justified_by` links (`def-morita-bicategory-...` ←
  `lem-bimodule-tensor-associators-...`; `def-small-projective-generator-...`
  ← `lem-small-projective-modules-...`) match the design.
- Four local A-page closure items are added, each traceable to a claim the
  design asserts without a supplier: `def-center-of-a-ring` (P7/nLab center
  notation), `lem-endomorphism-ring-of-an-object-in-a-preadditive-category`
  (P6 "make $E$ a unital ring"), 
  `lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful`
  (P6 exactness, coproduct preservation, faithfulness, $H(Z)=0\Rightarrow
  Z=0$), and `lem-equivalences-preserve-progenerators` (P7 "equivalences also
  preserve projectivity, coproducts and the separating property"). These are
  proof-closure supports inside the pair's owned subject, not imports of
  another pair's scope; two of them are additionally consumed by batch 27
  (see §4). A page of 16 items and a B page of 3 items are below any size
  limit, and no split/merge is indicated.
- Recorded design resolutions are preserved, not weakened: handedness (left
  modules; composition $N\otimes_BM$), explicit coherence checked before any
  pseudofunctor claim, canonical presentation first with an explicitly
  non-monic first map, split finite cover for the dual basis, no five-lemma,
  and no commutativity. The design's P7 names the commutative-only
  `thm-hom-tensor-adjunction-for-modules`; the scaffold replaces that design
  dependency with the local `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`,
  whose statement delivers
  $\operatorname{Hom}_B(P,B)\otimes_BY\cong\operatorname{Hom}_B(P,Y)$
  naturally for arbitrary unital $B$ with the left $A$-action and
  $(B,A)$-bimodule $P$. At scope level the replacement *preserves* the
  designed claim (arbitrary rings, f.g. projective, no commutativity); it
  removes a source-hypothesis mismatch, not a claim.
- B2's three witnesses, including the declared Axiom of Choice use in
  `cex-a-projective-generator-need-not-be-small` and its `def-axiom-of-choice`
  dependency, are present as designed. No design claim, example or witness was
  dropped or narrowed.

## 3. Source coverage

- 40 harvested rows over 7 sources: A page 36 rows (15 included, 8 inline,
  9 deferred, 4 out-of-scope), B page 4 rows (2 included, 1 inline,
  1 out-of-scope). Every row carries an explicit locator and disposition; all
  7 sources carry `fetch_verified` stamps (Johnson–Yau 476 pp / 4 229 777 B;
  Crawley-Boevey 88 pp / 463 312 B; EGNO 362 pp / 3 067 397 B; FSS 41 pp /
  454 533 B; nLab 12 517 extracted characters; the two B-page rows reuse the
  Crawley-Boevey and nLab stamps). No source is dropped, so no
  `source_resolution` record is needed; the design's own scoped checker
  review is preserved in `research/eilenberg-watts-expansion/review.md`.
- Deferrals are to pairs of this run and are consistent with their designs
  where checked: EGNO's finite-category material (1.8.5–1.8.6) and the
  Lex/Rex triangle go to HA-27 (`finite-abelian-categories-and-eilenberg-watts`,
  batch 27), which proves the intrinsic finite realization and both finite
  classifications; FSS's Deligne/kernel/Nakayama material goes to HA-28
  (`deligne-products-and-categorical-eilenberg-watts`, batch 28), which
  proves the Deligne product, explicit kernel end/coend calculus and the
  Nakayama functors. Two destination claims are inaccurate — see F2.
- Out-of-scope declines (Johnson–Yau's later 2-dimensional-category chapters;
  Crawley-Boevey's semisimple/application closing paragraph; the nLab's
  homotopy-theoretic, Lie-groupoid and tensor-category Morita notions and its
  other Morita invariants) each carry a specific reason and match a subject
  actually owned elsewhere or not commissioned here. The pair deliberately
  records the center as its only Morita invariant; this is the design's
  recorded choice (L5703–5749), not an omission found here.
- I did not re-fetch or re-read the source PDFs in this session: the source
  evidence used is the stamped coverage records and the read scopes recorded
  in the batch notes, cross-checked against the design. The classical
  mathematics involved (Morita theory for unital rings, the bimodule
  bicategory, Eilenberg–Watts) is standard and was checked at statement level
  against the published suppliers; no source-level re-reading is claimed.

## 4. Intended role and page-level requirements

- Role: HA-26 supplies the bicategorical framework (Bimod), its coherence,
  the Eilenberg–Watts biequivalence with module categories, the
  projective-generator reconstruction, Morita equivalence as invertibility of
  a bimodule, and center invariance. The B page is a dependency leaf
  (examples/counterexample) that requires only its A page.
- The manifest `requires` arrays equal `plan-spec.json` exactly: A =
  [`eilenberg-watts-theorem-and-natural-transformations`,
  `subobject-lattices-generators-and-the-grothendieck-axioms`,
  `monoidal-categories-and-monoidal-functors`]; B = [A]. The first is HA-25 of
  this run (in-flight manifest, 13 A + 4 B items); the other two are published
  category-theory pages.
- In-run consumers, verified in the current manifests: batch 27 uses
  `def-bicategory-pseudofunctor-and-biequivalence`,
  `def-morita-bicategory-of-rings-and-bimodules`,
  `lem-endomorphism-ring-of-an-object-in-a-preadditive-category`,
  `lem-tensoring-defines-a-pseudofunctor-with-interchange`; batch 28 uses
  `def-morita-bicategory-of-rings-and-bimodules`,
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`,
  `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`; batch 29
  uses `def-bicategory-pseudofunctor-and-biequivalence` and
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`.
  The consumers' statements match what the HA-26 items assert (e.g. batch 27
  reuses the endomorphism-ring lemma for $\operatorname{End}_{\mathcal C}(P)$
  over a finite $k$-linear category; batch 29 builds its graded bicategory "in
  the sense of" the HA-26 bicategory definition). Any later statement change
  on these A items invalidates those consumer records.
- No A item of this run depends on a B-26 item and no page manifest of this
  run requires either page (the run's 60 page entries were scanned), so the B
  page is correctly a leaf; the A page's statements are free of B-page homes.
  Whether any concluded-run artifact references these still-unpublished page
  ids is a Step-4 splice question, not a Step-3a scope question.

## 5. Dependency and prerequisite audit

- All 92 distinct `deps` and both `justified_by` targets resolve: 69 to
  published `items/*.md` (every one `status: published`, each with a unique
  library-page home), 7 to the batch-25 HA-25 manifest, 16 to this batch's own
  items. Zero unresolved or plan-only targets. All `[[...]]` citations inside
  statements and proof strategies resolve to published or current-run items.
- The 69 published homes all lie inside the 114-page prerequisite closure
  generated from `plan-spec.json` `requires` edges from this A page, so no
  published dependency escapes the declared closure. The 7 in-run suppliers
  are exactly the HA-25 items named in the batch-26 cross-batch records.
- The 13 cross-batch rows (12 item + 1 page) to HA-25 are all `verified` with
  statement-level evidence; I re-read the batch-25 statements and they supply
  what HA-26 uses: `def-additive-cocontinuous-module-functor` (additive +
  every small colimit; used to define the target 2-category),
  `lem-additive-cocontinuous-module-functors-form-a-category` (hom-categories),
  `thm-eilenberg-watts-for-arbitrary-unital-rings` ($T_M$ in the class;
  conversely $F\mapsto F(A)$), `cor-eilenberg-watts-is-an-equivalence-of-hom-categories`
  (local equivalence of Hom categories),
  `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`
  ($\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$,
  compatible with addition, identities, vertical composition),
  `lem-tensor-hom-adjunction-for-bimodules` ($T_M\dashv\operatorname{Hom}_B(M,-)$
  with the left $A$-action), and
  `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`
  (canonical free presentation with non-monic first map). Hypotheses
  (unital rings, left modules, no commutativity, no choice) match.
- Load-bearing published suppliers were checked at statement level and match
  their uses: `def-generator-and-cogenerator-of-a-category` and
  `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree`
  (generator ⇔ $\mathcal A(G,-)$ faithful ⇔ canonical epimorphism from a
  copower of $G$; supplies the faithfulness clause of
  `lem-generator-hom-functor-...` and the progenerator identification);
  `thm-projective-object-characterisations` (projectivity ⇒ exact
  Hom-sequence; splitting of epimorphisms; supplies the dual-basis split
  cover); `def-power-and-copower-by-a-set` (copower $P^{(I)}$ by a set, as
  used by the P6 construction); `def-strict-two-category` (strict 2-category
  with horizontal composition functorial, hence the interchange law — the
  target of `lem-tensoring-defines-a-pseudofunctor-with-interchange`);
  `thm-associativity-of-balanced-tensor-products` /
  `thm-unit-isomorphisms-for-module-tensor-products` /
  `thm-bimodule-actions-induced-on-tensor-products` /
  `prop-functoriality-of-module-tensor-products` (the associator and unitors
  as natural bimodule isomorphisms and $g\otimes f$ functoriality in
  `lem-bimodule-tensor-associators-...`; the handedness of the associator was
  checked against the expansion convention and applies with
  $M=H$, $N=G$, $P=F$);
  `thm-free-modules-are-projective-with-choice-boundary` +
  `def-axiom-of-choice` (the AC boundary declared by the counterexample);
  `cor-square-matrices-form-a-ring`, `thm-matrix-multiplication-laws`,
  `def-matrices-over-a-commutative-ring`, `def-field` (B-page matrix-ring
  computations); and `thm-every-equivalence-can-be-made-an-adjoint-equivalence`
  (P7's adjoint-equivalence remark).
- No published dependency was found defective at statement level, and no
  consumed published item was found with mismatched hypotheses except the
  design-level `thm-hom-tensor-adjunction-for-modules` case already replaced
  locally (§2) and the nuance recorded as F1.

## 6. Unmet prerequisites (findings for the owner)

**F1 (uncertain; not a confirmed scope gap).** Consuming items:
`cor-center-is-morita-invariant-via-natural-endomorphisms` (A) and
`ex-central-elements-as-natural-endomorphisms-of-the-identity` (B). Required
prerequisite claim: for the (locally small but *not small*) category
$A\text{-Mod}$, natural endomorphisms of the identity can be added
componentwise and vertical composition distributes over this addition, so
that $\operatorname{Nat}(1_{A\text{-}\mathrm{Mod}},1_{A\text{-}\mathrm{Mod}})$
is a ring. Evidence: the two published functor-category suppliers that could
serve as a citation have hypotheses that fail here —
`prop-additive-functors-and-natural-transformations-form-a-preadditive-category`
requires the source category to be *small*, and
`cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity`
requires small $\mathcal C$ and states only the monoid under vertical
composition — while `def-vertical-composition-of-natural-transformations`
defines only composition. This is not a blocker: the corollary's own `deps`
already contain `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`
(no smallness hypothesis; compatible with addition and vertical composition)
together with the unitor $T_A\cong1_{A\text{-}\mathrm{Mod}}$, which transports
the ring structure from $\operatorname{End}_{A\text{-}A}({}_AA_A)$; the
componentwise closure is also a short bilinearity check in the preadditive
structure. Recommended owner action: none required for scope; record the
intended route in the Step-3b proof strategy (or add `def-preadditive-category`
and/or `prop-endomorphisms-form-a-ring` to the two items' `deps` so the route
is auditable). Uncertainty: whether the authors will prefer the inline check
or the transport route; I flag the citation trap, not a missing theorem.

**F2 (confirmed; coverage-record discrepancy, no effect on this pair's
claims).** Two rows of `research/frontier-41-ha-dt-29-batch-26.coverage.json`
defer source material to a destination that does not host it in the current
scaffold:

1. EGNO Proposition 1.8.17 (Gabber's criterion) is recorded `deferred` with
   destination `finite-abelian-categories-and-eilenberg-watts`, reason
   "Gabber's criterion ... is proved in the finite-category pair". Evidence of
   absence: `grep -i gabber` over `research/plan-homological-algebra-track.md`
   (HA-27 design P8–P9, L5750–5859) and over
   `...-batch-27.pages.json` returns no hit; batch 27 proves the intrinsic
   finite characterization via projective covers, not Gabber's criterion.
2. The FSS row for "Sections 3.5–3.6: ... and the bimodule Radford $S^4$
   theorem" is recorded `deferred` with destination
   `deligne-products-and-categorical-eilenberg-watts`, reason "Nakayama
   functors and the Radford $S^4$ theorem are proved in the Deligne-products
   pair". Evidence of absence: HA-28's design P10–P12 (L5860–6046) and
   `...-batch-28.pages.json` contain the Nakayama items but no Radford
   theorem, and the plan at L6139 explicitly lists "Radford's $S^4$ theorem"
   among the subjects that "are not prerequisites". The Nakayama half of the
   row is correctly placed.

Neither claim is used by any HA-26 or HA-27/28 item, so this pair's scope is
unaffected; the rows overstate destination coverage. Recommended owner action
(owner-owned scaffold record): correct the two disposition reasons — mark the
unused Gabber and Radford parts `out-of-scope` with a stated reason, or re-home
them in a later scaffold — before the Step-3 baseline. Uncertainty: a future
batch-27/28 scaffold change could make the current wording true; the finding is
against the scaffold as it stands.

**F3 (non-defect; published overlap for reconciliation).** The published
example `ex-cyclic-tensor-coinvariants-of-matrix-bimodules` (frontier-37) also
uses the $k$–$M_n(k)$ Morita pair (matrix-unit computation of
$HH_0$), but it does not state the tensor-inverse isomorphisms of the B-26
example; the two claims are different, so the new example remains in scope. The
published `def-matrix-units` and `lem-matrix-unit-multiplication`
($E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$) exist and could replace or supplement
the B example's current matrix-multiplication citations; optional for Step 3b.

**F4 (recorded minor wording point).** The Crawley–Boevey Example (ii) row
(general idempotent $e$ with $ReR=R$) is marked `inline` against
`ex-matrix-ring-morita-pair-with-explicit-tensor-inverses`, but the item, like
the design's B2, states and verifies the matrix-ring instance $e=E_{11}$ only.
No scope is lost (the design promises only the matrix-ring witness); the
coverage reason could be tightened to say the general idempotent statement is
not an item claim, or the author may prove it inline.

## 7. Recorded uncertainty and outstanding findings

- Batch 25 (HA-25) is still in flight; all 13 cross-batch evidence rows are
  current only against its present manifest. If a batch-25 statement changes,
  the batch-26 dependency records and this review's premises must be
  recomputed.
- I verified statements and dependency hypotheses, not the future proofs;
  nothing here approves an item. F1 needs a recorded route in Step 3b; F2
  needs an owner-owned coverage-record correction; F3/F4 are optional.
- No confirmed unmet prerequisite absent from both the published library and
  the current scaffold was found for this pair.

## 8. Decision

`sufficient` for `morita-bicategories-and-projective-generators` (pair scope
fixed by the manifests as of this review): all 15 designed items are present
at design strength, the four closure items close design-asserted local gaps
inside the pair's subject, the 40 coverage rows give a complete disposition
story over 7 stamped sources, the `requires` arrays match the plan, and all 92
dependencies resolve inside the declared closure with matching hypotheses.
F1–F4 are recorded for owner action under the Step-3a rules; no item approval,
owner record or scaffold edit is made here.
