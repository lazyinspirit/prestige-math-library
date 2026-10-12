# Step 3b pair report — `proper-hyperresolutions-and-mixed-hodge-restriction-images`

- Run: `frontier-44-special-representation-examples-28`; role alpha-high; label
  `step3b-pair-proper-hyperresolutions-and-mixed-hodge-restriction-images-523c6bbe647be147`.
- A page: `proper-hyperresolutions-and-mixed-hodge-restriction-images` (batch 46,
  order 1828, category `algebraic-geometry`); B page:
  `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` (batch 46,
  order 1831).
- Owned IDs (5), in the dispatch's dependency order:
  `lem-blowups-of-projective-schemes-are-projective` (level 0);
  `thm-proper-varieties-admit-smooth-projective-hyperresolutions` (level 1);
  `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
  (level 19);
  `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`
  (level 20); `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`
  (level 20, B page).
- Shared files: `research/…-batch-46.pages.json`,
  `research/…-batch-46.proof-contracts.json` (to be created),
  `research/…-batch-46.coverage.json`, `research/…-batch-46.cross-batch-dependencies.json`,
  the two library pages, and this report. Only this pair lives in batch 46.

## Open obligations at entry

1. **Unfinished in-run suppliers (flag and author anyway).**
   - `thm-proper-hypercovers-compute-constructible-derived-cohomology`
     (batch 45, `proper-cohomological-descent-and-constructible-hypercovers`,
     order 1824; file absent at entry). Consumers and consuming steps:
     `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
     (Facts [F2], Step 1.1 descent/comparison) and
     `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`
     (Step 1.1 Cech descent spectral sequence).
   - `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
     (batch 37; file absent at entry). Consumer:
     `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`,
     Step 2.1 chart-wise triangulation clause. Its primitive
     `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
     is a recorded open interface in the monodromy inventory.
   - `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`
     (batch 38; file absent at entry). Consumers:
     `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
     (Facts [F5], Step 4.1) and
     `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`
     (Facts [F1], Step 1.1).
   Per dispatch, the consumers are authored anyway; their item decisions stay
   escalated until each supplier file exists and its actual proof use is
   reconciled. Reconciled uses are recorded in the checkpoints below.
2. **Step 3a prerequisites P1/P2 (confirmed absent from library and scaffold).**
   These are missing vocabulary/mathematics, not scope gaps. Resolution at
   authoring, as directed by the brief ("create and fully author the necessary
   prerequisite items on assigned existing A pages"):
   - P1 Borel–Moore homology: add `def-borel-moore-homology` and
     `lem-borel-moore-homology-of-compact-spaces` on the A page; consumers are
     `thm-proper-cohomology-…` (Statement, Step 5.1).
   - P2 split augmented simplicial objects / matching objects: add
     `def-split-augmented-simplicial-objects-and-matching-objects`; consumer is
     `thm-proper-varieties-admit-smooth-projective-hyperresolutions`
     (Statement, Steps 3.1–4.1).
   Additions are registered in the manifest, coverage, contracts and pages; per
   the brief they receive engine certification and are not self-reviewed.
   The refreshed pair scope therefore needs a fresh `sufficient` scope record
   before item bookkeeping.
3. **Wiring findings to apply while authoring** (from the Step 3a review):
   N1 cite the projective-Kähler bridge
   `lem-smooth-projective-analytification-has-rational-kahler-polarization`
   explicitly in the proper-weights proof (componentwise for reducible
   hyperresolution terms); N3 declare the published normalization suppliers and
   integrality wording in the nodal-curve example; N5 plan splice adopts the
   4-item (now 7-item) A manifest.
4. **Batch checks to run after authoring:** explicit-path `precheck` and
   `rendercheck`, content policy, strict proof contracts, item dependency
   levels, `validate-plan` against `research/plan-spec.json`, `depcheck` for
   the pair, and `proof-layout` on every changed item path in one command.

## Item checkpoints

(filled in one item at a time, ascending dependency level)

### 0. `def-split-augmented-simplicial-objects-and-matching-objects` (new, level 0) — done

- **Claim/conventions.** Augmented simplicial $S$-schemes (finite limits and
  coproducts of $S$-schemes available); matching object
  $M_p=(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p$ as the
  boundary limit with $M_0=S$; Deligne's $N$-construction and splitness as
  $m_p$ being an isomorphism; proper hypercover = augmentation and all boundary
  maps proper surjective. Remarks record the nondegenerate-part decomposition,
  the classical extra-degeneracy formulation (SGA 4 V bis 5.1.3) and the
  closed-subscheme presentation of matching objects over a separated base.
- **Resolution of P2** (Step 3a open obligation): the vocabulary absent from
  both the published library and the scaffold is now a registered local
  prerequisite on the A page, placed before its consumer
  `thm-proper-varieties-admit-smooth-projective-hyperresolutions`.
- **Checks.** Definition item: precheck `not-applicable`, rendercheck OK,
  proof contracts, levels and `depcheck` to be run at handoff.
- **Open.** None in-pair. As a new ID absent from the pre-author scaffold
  inventory it receives engine certification; it is not self-reviewed.

### 1. `lem-blowups-of-projective-schemes-are-projective` (level 0) — done

- **Claim/conventions.** AC; $X$ integral projective finite type over
  $\mathbb C$; $\mathcal I\ne0$ finite-type quasi-coherent; then
  $\operatorname{Bl}_{\mathcal I}X$ is H-projective over $\mathbb C$, and every
  finite composition of such blowups stays integral projective.
- **Repairs.** Dropped the scaffold's `lem-very-ample-implies-ample` /
  `def-relatively-ample-invertible-sheaf` route in favour of the direct
  ampleness criterion on the standard charts (the closed immersion of $X$ into
  $\mathbb P^N_{\mathbb C}$ makes $X$ Noetherian via the finite affine chart
  cover, which simultaneously supplies coherence of $\mathcal I$ and
  quasi-compactness). Added the actually consumed published inputs:
  `thm-coherent-sheaves-abelian-noetherian-scheme`, `lem-field-is-noetherian`,
  `cor-finite-variable-polynomial-ring-noetherian`,
  `thm-noetherian-ring-quotients-and-localisations`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `lem-base-change-open-closed-immersions`,
  `lem-twisting-sheaf-projective-space-ample`, `def-ample-invertible-sheaf`,
  `def-locally-noetherian-and-noetherian-scheme`,
  `def-quasi-compact-and-quasi-separated-scheme`,
  `def-relative-projective-space-standard-charts`, `def-invertible-sheaf`,
  `def-integral-scheme`, `def-closed-immersion-schemes`.
  Manifest row updated to the same dependency list.
- **Checks.** `precheck` pass (7 steps, direct), `proof-layout` 7 steps
  0 defects, manifest JSON valid.
- **Open.** None in-pair.

### 2. `thm-proper-varieties-admit-smooth-projective-hyperresolutions` (level 1) — done

- **Claim/conventions.** AC; existence of split smooth projective proper
  hypercovers of every proper complex variety; common refinements; lifting of
  morphisms after refining the source; finite skeleton through degree $n+1$
  suffices for degree-$n$ cohomology.
- **Resolution of P2 use and wiring.** The proof is written against the new
  split/matching definition item; smooth projective covers come from
  `thm-weak-embedded-desingularization` composed with
  `lem-blowups-of-projective-schemes-are-projective`; Chow's lemma gives the
  degree-zero projective cover; matching objects are shown to be projective via
  the Segre embedding and closedness of limits into separated targets. The
  common-refinement clause uses the levelwise fibre product (split objects are
  closed under products) followed by the same relative construction, and the
  lifting clause uses the relative matching object over the target hypercover.
- **Checks.** `precheck` pass (8 steps, canonical 5.1/6.1/6.2/7.1 numbering),
  `proof-layout` 8 steps 0 defects.
- **Open (Step 5-7 precision obligations, stated plainly).** (a) The simplicial
  identities for the summandwise structure maps in step 4.1 are verified by the
  unique factorisation of ordinal maps and the identities in $\Delta$; the
  finite bookkeeping is compressed, not exhibited simplex by simplex. (b) Step
  4.1's claim that the boundary map on a degenerate summand is a section of a
  separated projection uses $M_p\to Y_q$ separated; this is inherited from
  projectivity of $M_p$. (c) Step 6.1's identification
  $M_p(W)\cong M_p(Y)\times_YM_p(Z)$ is a finite-limit commutation statement.
  These are flagged for the independent Steps 5–7 review rather than hidden.

### 3. `def-borel-moore-homology` and `lem-borel-moore-homology-of-compact-spaces` (new, levels 0 and 1) — done

- **Claim/conventions.** Locally finite chains on a locally compact Hausdorff
  space: formal sums of continuous simplices such that every point has a
  neighbourhood meeting finitely many images; coefficientwise boundary; proper
  pushforward only; and the agreement with ordinary singular homology for
  compact spaces, proved choice-free by extracting a finite subcover from the
  local-finiteness cover.
- **Resolution of P1** (Step 3a open obligation): the Borel-Moore vocabulary
  used in the proper-weights statement is now a registered local prerequisite
  on the A page, placed before its consumer. Sources: Mark Goresky, Lecture
  Notes on Sheaves and Perverse Sheaves (already run-verified), 5.3 and 11.2,
  read in this session; the earlier Fulton/Goresky-MacPherson citations were
  replaced because those texts were not read.
- **Checks.** `precheck` pass (lemma, 3 steps), `proof-layout` 0 defects,
  `rendercheck` OK, `depcheck` 0 errors, contracts pass.
- **Open.** None in-pair. New IDs absent from the pre-author scaffold
  inventory receive engine certification.

### 4. `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree` (level 21, updated from 19) — done

- **Claim/conventions.** AC; functorial rational MHS with weights at most $n$
  on $H^n$ of a proper complex algebraic variety; pullbacks from smooth
  quasiprojective varieties into proper varieties are mixed Hodge morphisms for
  the logarithmic structure; and the proper homological class map into a smooth
  projective ambient variety has pure Hodge image after the Poincare Tate
  twist. The level was recomputed from the current manifests (21), as were the
  levels of the next two items; item metadata and manifest rows were updated
  together.
- **Authoring.** Step 1.1 builds the cosimplicial system of weight-zero Hodge
  complexes on a smooth projective hypercover and applies the mixed-complex
  lemma (ii); step 2.1 constructs the metrization and applies the
  sheaf-singular comparison; step 3.1 proves independence and functoriality by
  strictness; step 3.2 is the smooth-open pullback; step 4.1 is the
  homology/duality class map. Wiring N1 was applied: the projective-Kahler
  bridge `lem-smooth-projective-analytification-has-rational-kahler-polarization`
  is cited explicitly, componentwise on possibly reducible hyperresolution
  terms.
- **Checks.** `precheck` pass (6 steps, canonical 1.1/2.1/3.1/3.2/4.1/5.1),
  `proof-layout` 0 defects, `rendercheck` OK, `content-policy` 0 errors.
- **Supplier reconciled at handoff.** The batch-38 supplier
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`
  appeared on disk during this session; its statement was read in full and
  matches fact [F7] and step 3.2 exactly (functorial logarithmic structure,
  weights at least $n$, $W_nH^n(U)=\operatorname{im}j^*$ for an SNC smooth
  projective compactification, independent of the compactification). The
  receipts, the strict contract citation and the cross-batch ledger row were
  refreshed against the authored file, so this consumer is reconciled rather
  than escalated. Separate interface finding:
  the descent theorem (batch 45) and the analytic-topology machinery are stated
  for classical complex varieties, while the hyperresolutions are constructed
  as schemes; the closed-point dictionary is published only for the irreducible
  and affine cases, so the scheme/variety bridge used in step 2.1 is recorded as
  an interface obligation for Steps 4-7 with exact consumer step 2.1.

### 5. `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images` (level 22, updated from 20) — done

- **Claim/conventions.** For $U$ smooth quasiprojective, $j:U\hookrightarrow X$
  any smooth projective compactification, and $g:Y\to U$ with $Y$ proper, the
  images of $(jg)^*$ and $g^*$ in $H^n(Y,\mathbb Q)$ coincide and are pure of
  weight $n$. The proof uses strictness to identify $g^*(W_nH^n(U))$ with
  $\operatorname{im}g^*\cap W_nH^n(Y)$, the log identity
  $W_nH^n(U)=\operatorname{im}j^*$, and the proper target bound
  $W_nH^n(Y)=H^n(Y)$.
- **Checks.** `precheck` pass (3 steps), `proof-layout` 0 defects,
  `rendercheck` OK, `content-policy` 0 errors.
- **Supplier reconciled at handoff.** Same batch-38 supplier as item 4 (fact
  [F1], steps 1.1-2.1); its authored statement matches the use exactly, the
  strict contract citation was regenerated, and the cross-batch ledger row is
  `verified`, so this consumer is reconciled.

### 6. `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class` (level 22, updated from 20) — done

- **Claim/conventions.** The rational nodal projective curve has
  one-dimensional $H^1$ of weight $0$ and type $(0,0)$.
- **Authoring.** The Cech nerve of the normalization is a proper hypercover
  whose degree-$p$ term is the diagonal $\mathbb P^1$ plus $2^{p+1}-2$ reduced
  isolated points; the degree-zero cohomology row of the descent spectral
  sequence gives $E_2^{1,0}=\mathbb Q$ (the alternating face differential forces
  $c_d=0$ and $c_{ba}=-c_{ab}$) and $E_2^{0,1}=0$; the weight identification of
  item 4 makes the single class pure of weight $0$. Wiring N3 was applied: the
  published suppliers `cor-normalization-resolves-singularities-of-curves` and
  `cor-finite-morphism-proper` are declared, and integrality is stated
  explicitly.
- **Correction to the scaffold's nilpotent remark.** The fibre products are in
  fact reduced at the non-diagonal points (the local tensor computation over
  the node gives $\mathbb C$), so the terms are smooth projective rather than
  merely singular with harmless nilpotents; the proof uses the stronger and
  correct statement.
- **Checks.** `precheck` pass (3 steps), `proof-layout` 0 defects,
  `rendercheck` OK, `content-policy` 0 errors, `depcheck` 0 errors for this
  item (all its suppliers are now authored).

## Batch checks (actual results)

- `precheck` (explicit paths, all 8 items): pass, 0 failing. `proof-layout`
  (explicit paths, all 8 items, final batched run at handoff): 8 items,
  30 steps, 0 defects. `rendercheck` (8 items + 2 pages): OK.
- `content-policy` on `research/…-batch-46.pages.json`: 8 scoped items, 0
  errors, 0 warnings.
- `proof-contract --strict` on `research/…-batch-46.proof-contracts.json`:
  8/8 items checked, 0 errors, 0 warnings after the batch-38 supplier was
  authored and the two citations regenerated; every fact, derivation and
  boundary worksheet passes.
- `depcheck --items-file` (the 8 items): OK, all dependency targets resolve,
  no cycles, no page errors.
- `fwdcheck` and `extcheck` scoped to the 8 items: OK, no open forward
  references, no recorded-not-proved or external fallback records.
- `item-dependency-levels check --run`: my items now match the computed levels
  0, 1, 0, 1, 0, 21, 22, 22; run-wide mismatches remain in other batches
  (their owners).
- `validate-plan` against `research/plan-spec.json` via the frontier gate: the
  A page's former `undeclared-prereq` finding was repaired by adding
  `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` (order
  1154, earlier than 1828) to the page `requires`; the remaining 4 run-wide
  errors are in other pairs.
- `coverage-checklist --require-destination`: 2 pages, 35 harvested results, 0
  errors, 0 warnings. `source-fetch-check --stamp`: 7/7 sources fetch-verified
  (1 newly stamped: the Goresky notes already used elsewhere in the run).
  `frontier-dependency-ledger refresh --run`: refreshed; batch-46 rows updated
  for all cross-batch consumers and one new edge (batch 39 bridge) added.

## Plan mismatches and additions for Step 4 slice

1. The plan's A page still lists 3 items; the manifest now has 7. Step 4 should
   adopt the manifest inventory: the added IDs are
   `def-split-augmented-simplicial-objects-and-matching-objects`,
   `lem-blowups-of-projective-schemes-are-projective` (already requested by the
   batch-46 notes), `def-borel-moore-homology` and
   `lem-borel-moore-homology-of-compact-spaces`.
2. The A page `requires` gained
   `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`
   (home of `lem-twisting-sheaf-projective-space-ample`, used by the blowup
   lemma); the plan-spec copy is unchanged.
3. Coverage dispositions changed: Deligne III rows (8.2.5) and (8.2.7)-(8.2.8)
   are now `out-of-scope` with reasons per finding N2 of the Step 3a review,
   and three new Goresky rows record the Borel-Moore material.

## Published concerns

- **Confirmed defect (published).** `lem-blowup-reduced-integral-under-domain-rees`
  is cited by `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup`
  for integrality, and that corollary is used here; the corollary and lemma
  statements were read and match the use at the level needed. No new defect
  found beyond what the Step 3a review already recorded.
- **Interface gap (confirmed, non-blocking).** As recorded in item 4 above, the
  scheme/classical-variety dictionary is published only for the irreducible and
  affine cases; the proper-weights and example proofs use the general
  reduced finite-type case. Required repair: a bridge item or an owner
  statement of the dictionary; consumers with exact steps: item 4 step 2.1,
  item 6 steps 1.1-3.1, and batch 45's hypercover theorem. Confidence:
  confirmed from the published item inventory, not a suspicion.
- **Suspicion (low confidence).** `thm-proper-hypercovers-compute-constructible-derived-cohomology`
  (batch 45, now authored) states the proper-hypercover condition with
  matching maps, while the smooth-projective hyperresolutions of this page are
  split in Deligne's stronger sense; the consumer uses only the weaker
  condition, so no defect is claimed, but Steps 5-7 should confirm that the
  authored theorem's hypotheses are exactly the ones checked in item 4 step 1.1.

## Handoff state

- Completed IDs: all five dispatched items plus the three new local
  prerequisites; both library pages authored.
- Decisions recorded: `lem-blowups-…` repaired (dependency), `thm-proper-varieties-…`
  repaired (dependency), `thm-proper-cohomology-…` repaired (dependency),
  `thm-mixed-hodge-weights-…` repaired (dependency), `ex-a-nodal-…` repaired
  (dependency); pair scope refreshed `sufficient`. All five receipts are
  current at handoff; the three new prerequisite IDs are left to the engine's
  addition certification as directed. Concurrent sibling authoring makes
  closure-bound receipts stale quickly, so the last check was rerun and the
  three closure-dependent receipts refreshed immediately before handoff.
- Open obligations: scheme/variety dictionary (items 4 and 6, and batch 45's
  hypercover theorem); Step 4 slice of the plan inventory, `requires` and
  coverage dispositions; the compressed simplicial-identity verifications in
  item 2 steps 4.1-6.2 left for the independent Steps 5-7 review.
