# Batch 11 - Cyclotomic KLR Algebras and Highest-Weight Categorification: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair
`cyclotomic-klr-algebras-and-highest-weight-categorification` (order 1838) /
`cyclotomic-klr-algebras-and-highest-weight-categorification-examples` (order 1839),
`special-topics-in-representation-theory`. This is the QG-8 page of
`research/plan-quantum-groups-track.md` (lines 263-286).

**Status of this batch.** Manifest populated: 17 A-page items and 5 B-page items (22 total).
The design's 14 A items and 5 B items are all present; three local prerequisite items were added
(`lem-generic-klr-induction-and-restriction-mixed-relations`,
`lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star`,
`lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action`). 19 items carry a
fresh `ready` record; 3 items carry a fresh `escalated` record:
`lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`,
`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis` and
`thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`. `step1-decisions check`
reports this batch's only unresolved items as those three escalations; `item-dependency-levels check`
reports no error line naming a batch-11 page (the remaining errors are the empty scaffolds of
batches 24/25).

## 1. Binding owner direction and preserved claims

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` is treated as
binding, in particular the two sections that name this pair:

- **Future cyclotomic first/right convention (2026-10-09).** The exact side convention of
  `research/frontier-44-special-representation-examples-28-owner-klr-future-cyclotomic-convention-and-quotient-proof.md`
  is bound in the manifest: the cyclotomic relation is imposed on the **first** strand, induction
  appends on the right, and the based-quotient lemma states the $K_0$-map as
  `pi_Lambda ∘ *` (the anti-automorphism fixing every $F_i$ and $q$), with the proved word-mirror
  twist as the alternative route to `pi_Lambda`. The mirror generators
  `rho(e_nu)=e_(rev nu)`, `rho(x_a)=x_(n+1-a)`, `rho(tau_a)=-tau_(n-a)` are recorded verbatim in
  the local word-mirror item, whose complete finite relation check is the owner note's calculation.
  The "projective to indecomposable-or-zero" and "duality commutes with the quotient" fragments are
  the proof skeleton of the based-quotient lemma. The positive star permutation of global vectors is
  **not** used as an input anywhere: it is explicitly excluded from the word-mirror item and never
  consumed by the generic suppliers.
- **The held geometric branch.** The owner's batch-10 hold is respected: the generic theorem
  `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` is
  consumed only as an explicitly escalated prerequisite, and the three conditional items are
  recorded `escalated`, not `ready`. No VV formality, Hodge decomposition or semisimple-flag
  realization is imported as an axiom.
- **QG-5/QG-7 interfaces.** The QG-5 based quotient
  (`thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`,
  `def-lower-global-basis-of-a-quantum-highest-weight-module`), the QG-7 divided-power, Cartan-pairing
  and categorification items, and the HA-19 shift-orbit/pairing items are the declared supplier
  interfaces; the QG-2/QG-5 divided-power and form normalizations are used exactly as recorded
  there.

## 2. Plan / design conflicts recorded

1. **Current plan vs design item inventory.** `research/plan-spec.json` carries the pair with an
   empty `items` array, as for every planned page of this run; the design's QG-8 section proposes
   14 A items and 5 B items. The manifest contains all 19 of them plus exactly three local
   prerequisites (the generic mixed-relations lemma, the word-mirror lemma, and the
   mixed-relations-to-integrable-action lemma). The first two are needed because batches 5-10 do not
   contain the generic rank-one relation and the 2-category side dictionary; the third is needed
   because the library has no citable item for the KMPY Proposition B.1 step used in KK Section 6.
   No design item was removed, weakened or replaced.
2. **Design clause "state exact left/right adjunction shifts" refined.** The design asks the functor
   definition to state exact left/right adjunction shifts. The manifest states the degree-zero
   tensor-Hom adjunction `F_i ⊣ E_i` exactly, and states the exact grading-shift normalizations of
   the operators used on $K_0$ and $G_0$ (KK Section 6: $E_i$ carries
   $q_i^{1-\langle h_i,\Lambda-\beta\rangle}$ at the **target** weight on `[Proj]`, and $F_i$
   carries it at the **source** weight on `[Rep]`; this pair of locations is what makes Lemma 6.1
   degree-homogeneous, and it was checked on the rank-one example). The sources' same-order
   *right* adjunction (Webster Theorem 1.8, "biadjoint up to grading shift") lives in the
   two-category normalization with intrinsic bubble shifts; a direct rank-one computation in the
   naive graded categories shows that no constant-or-weight-dependent shift of $E^\Lambda_i$ can
   make $E \dashv F$ hold there (level 1 and level 2 force different shifts for the same weights).
   The manifest therefore does not assert an unshifted right adjunction, records this obstruction,
   and no item of the page consumes a second adjunction; this is the recorded design conflict.
3. **Design order of the proof block.** The design lists definitions first, then the Frobenius and
   projectivity theorems, then the $sl_2$ commutator and the categorification. The manifest follows
   the dependency order actually required by the arguments: quotient and functors, word mirror,
   finite-dimensional graded symmetric structure, duality normalization, generic mixed relations,
   projectivity/exact sequence, $sl_2$ commutator, integrable action, vacuum generation, $K_0$ and
   $G_0$ identifications, crystals, then the three conditional global-basis items. All design claims
   are unchanged; only the array order was corrected.
4. **Source ledger of the design vs the verified readings.** The design's ledger lists KK, Webster,
   Rouquier, KL I/II, VV, Brundan-Kleshchev and (for type-A context) Kleshchev's survey. This batch
   read KK (primary route), LV (second independent treatment and the crystal theorem), Webster
   (Frobenius trace and biadjunction context), KL I/II, Rouquier, and the Kleshchev survey; VV is
   retained as the held geometric branch with its disposition recorded in the coverage file.
   Brundan-Kleshchev's type-A graded-decomposition results are not consumed by any item (they need
   Ariki's theorem, out of scope here); they are recorded as `deferred`/`out-of-scope` in the
   coverage ledger rather than silently ignored.
5. **Owner note reference.** The owner's future-cyclotomic note is cited in the based-quotient and
   word-mirror item records as a title-only reference (it is an in-repo owner direction file, not an
   external source); it is not counted as a mathematical source and no fetch stamp is claimed for
   it.

## 3. Source evidence and reading honesty

`node tools/source-fetch-check.mjs --coverage research/...-batch-11.coverage.json --stamp`
-> `13/13 source(s) fetch-verified (13 newly stamped)`; check mode later reports
`13/13 source(s) resolved`. Locators and per-result dispositions are in
`research/frontier-44-special-representation-examples-28-batch-11.coverage.json`
(2 pages, 55 harvested rows, 0 coverage errors; one survey-kind primary source per page).

What this worker actually read in this dispatch:

- **Kang-Kashiwara, arXiv:1102.4677v4** (local cached PDF, extracted with PyMuPDF): the introduction
  (main results and (1.2)); Section 2 (quantum groups, integrable highest weight modules,
  Proposition 2.3); Section 3 (R(nu), E_i, F_i, Frobenius reciprocity, Corollary 3.8, Theorems 3.6
  and 3.9); Section 4 in full (Definition 4.1, Lemmas 4.2-4.3, Corollary 4.4, Theorems 4.5-4.7,
  Lemmas 4.8-4.19 and the projective-resolution argument); Section 5 (Theorems 5.1-5.2 with the
  complete Section 5.2 proof); Section 6 in full (the normalized operator diagrams, Lemma 6.1, the
  pairing and its adjointness, the generation paragraph and Theorem 6.2).
- **Lauda-Vazirani, arXiv:0909.1810v2** (freshly fetched for this dispatch): Sections 2.2-2.3
  (Ind/Res/coInd and Frobenius reciprocity (2.2)-(2.3), Theorem 2.2 with its proof), Section 2.6
  (the cyclotomic quotient, Propositions 2.3-2.4), Section 2.5 (socle/head crystal operators on
  simple modules), Section 5.3 (the crystal data of $B_\Lambda$), Sections 6 and 7 (Theorems
  6.10-6.22, 7.4, 7.5 and 7.8 with the surrounding proofs).
- **Webster, arXiv:1001.2020v9** (cached text): Section 1.3 in full (Definition 1.5, Definition 1.6,
  Proposition 1.7 with its proof, Theorem 1.8, Remark 1.9).
- **KL I, arXiv:0803.4121v2** (cached text): Section 2.2 (Examples 2-3, the idempotents), Section 2.3
  (the polynomial action and its faithfulness), Section 2.5 (Krull-Schmidt, G_0 freeness), Section
  3.1 (Propositions 3.1-3.4, the pairing (2.45)-(2.47), Example 3.23).
- **KL II, arXiv:0804.2080v1** (source fetched and stamped; read in the batch-10 translation):
  Section 3, Proposition 6 and Corollary 7 (the categorical Serre relations used in the closure of
  the negative-half relations).
- **Rouquier, arXiv:0812.5023v3** (cached text): Section 2.3.2 (Frobenius forms), Sections
  3.1.6-3.1.7 (the nil affine Hecke symmetrizing form), Sections 3.2.1-3.2.4 (presentation and
  Cartan specialization), Section 4.1 and Section 4.1.3 with Definition 5.1 (the $sl_2$ axiom and
  integrable 2-representations).
- **Kleshchev survey, arXiv:0909.4844** (freshly fetched; the page's primary-kind source): Sections
  9.1-9.2 (Theorems 9.1-9.2, Proposition 9.3, Theorem 9.4) plus Sections 2.6-2.11 for the
  presentation and rank-one specializations. Limitation, recorded honestly: this source is type A
  (finite or affine); it corroborates and does not replace the general symmetric-type route, and the
  general claims ride on the QG-7/QG-5 suppliers, exactly as flagged in the escalated items.
- **Varagnolo-Vasserot, arXiv:0901.3992** (read by the owner/batch-10 for the held geometric
  branch; re-read here at section level): Sections 1-3 and Section 4.5 with 4.7-4.8, retained as the
  disposition record of the missing input rather than as a proof used by this batch.

No retrieval failure occurred in this dispatch; no `source_resolution` drop or owner-escalation
record was needed, and no retry allowance was consumed.

## 4. Mathematical verification performed at scaffold level

- **First/last strand and the star.** The word-mirror item rechecks every KLR relation by hand
  (idempotents, dots, word intertwiners, the reversed unequal pair via (Q2), the equal-colour mixed
  relation with its constant, and the braid relation with the sign cancellation), and records the
  first-strand relation image $a^\Lambda(x_n)e(\mathrm{rev}\,\nu)$; this is exactly the calculation
  that produces the star in the based-quotient $K_0$-map. The rank-one lexicographic check
  $x_1^\lambda e(\nu)\mapsto x_n^\lambda e(\mathrm{rev}\,\nu)$ is immediate.
- **Mixed relations and degree bookkeeping.** The internal generic lemma was compared line by line
  with KK Corollary 3.8, Theorem 3.6 and Theorem 3.9: $E_iF_j\cong q^{-(\alpha_i|\alpha_j)}F_jE_i$
  for $i\ne j$, the equal-colour identity with the $k[t_i]$-summand of degree $2d_i$, and the exact
  sequence with the $q^{-(\alpha_i|\beta)}$ coefficient and the two induction directions.
- **Small-weight verification of the categorical $sl_2$ relation.** For $I=\{i\}$,
  $(\alpha_i|\alpha_i)=2$, $\Lambda=2\Lambda_1$, $\beta=0$: both sides of Theorem 5.2(a) were
  computed, $E^\Lambda_iF^\Lambda_i k=R^\Lambda(\alpha_i)\cong k\oplus k\{2\}$ and the summands
  $\mathrm{Id}\oplus q^2\mathrm{Id}$ match. The two $K_0/G_0$ normalizations were then checked
  independently: on `[Rep]`, $F_i[k]=q^{-1}(1+q^2)[k]$ and $E_iF_i[k]=(q+q^{-1})[k]$ with
  $F_iE_i[k]=0$; on `[Proj]`, $E_i[R^\Lambda(\alpha_i)]=q^{-1}(1+q^2)[1_\Lambda]$ and the
  commutator equals $(q^2-q^{-2})/(q-q^{-1})$ at $K_i=q^2$. This pinned the target/source-weight
  locations of the $q$-factors (a mistake here would have produced the wrong scalar $q$ or
  $(1+q^2)$ instead of $q+q^{-1}$).
- **Rank-one cyclotomic quotient.** $R^\Lambda(\alpha_i)=k[x]/(x^\lambda)$ with graded dimension
  $\sum_{r<\lambda}q^{2d_ir}$ and Frobenius trace of degree $2d_i(\lambda-1)$; the halving rule
  $s=t/2$ of the self-dual normalization was verified for $\lambda=1,2$, and the vanishing
  $R^\Lambda(2\alpha_i)=0$ for $\lambda=1$ was re-derived from the mixed relation
  ($x_2\tau e=e$ and $\tau^2=0$ force $\tau e=0$, then $e=0$).
- **Counterexample check.** $NH_2\cong P_{i,2}^{\oplus(q+q^{-1})}$ gives
  $[R^\Lambda(2\alpha_i)]=(q+q^{-1})[P_{i,2}]$, while $F_i^2=[2]_{q_i}F_i^{(2)}$; the scalar
  $q+q^{-1}$ is not a unit of $A$, so the word class is not a lower-global-basis element and the
  bare $K_0\cong V_A(\Lambda)$ statement cannot decide the basis. This also cross-checks the
  Kleshchev/LV warning that word projectives are not the normalized self-dual indecomposables.
- **Dependency interfaces read** (supplier statements, not recursive proof certification): batch 5
  `def-quantum-weight-module-and-integrability`,
  `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
  `def-contravariant-form-on-an-integrable-quantum-highest-weight-module`,
  `def-quantum-verma-module-and-simple-highest-weight-quotient`,
  `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`; batch 6
  `def-crystal-graph-epsilon-phi-and-weight`, `def-kashiwara-lattices-lambda-and-infinity`,
  `thm-unique-kashiwara-i-string-decomposition`; batch 7
  `thm-the-highest-weight-crystal-b-lambda-exists`,
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`; batch 8
  `def-lower-global-basis-of-a-quantum-highest-weight-module`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`,
  `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`,
  `def-upper-global-basis-by-the-contravariant-form`,
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`,
  `lem-lusztig-and-kashiwara-normalizations-match-by-root-color`; batch 10
  `def-klr-induction-and-restriction-bimodules`,
  `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`,
  `def-divided-power-klr-idempotents-and-projectives`,
  `lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases`,
  `def-the-klr-cartan-pairing`,
  `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`,
  `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
  `thm-klr-categorification-of-the-negative-quantum-half`, and the owner-escalated
  `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`;
  published HA-18/HA-19 items named in the item deps, and the published QG-1 items.

## 5. Escalations (owner-held)

1. `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient` - escalated. Exact gap: the
   zero/survival clause consumes the generic lower-global-basis theorem
   `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`, which
   batch 10 records as owner-escalated because the semisimple quiver-flag Ext realization
   (Varagnolo-Vasserot Theorem 4.5 with the genuine equivariant constructible/perverse setup) has no
   in-run supplier. The side convention, the quotient/duality computation and the triangular
   projection interface are recorded unweakened; the item refuses readiness and no source-import
   fallback is asserted.
2. `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis` -
   escalated conditionally on the same missing input via the based-quotient lemma. Statement,
   normalization, parameter regime and consumers' interfaces are preserved.
3. `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis` - escalated
   conditionally on the cyclotomic lower-basis theorem and the QG-5 duality theorem.

No **published** item was found defective by this batch's checks. The published HA-18/HA-19 and QG-1
items were read at statement-interface level for the used clauses; no repair is proposed and none
was made. No page-split or new-pair escalation is needed: the A page carries 17 items and the B page
5, far below the 100-item cap.

## 6. Cross-batch convention observations for the owner (not edits)

1. **Two different $\psi$'s are in play.** Batch 10's `def-the-klr-cartan-pairing` declares
   $\psi$ as the horizontal-reflection anti-involution (reflection in a horizontal axis, reversing
   the order of crossings), while Kang-Kashiwara's Section 6 pairing uses the anti-involution that
   **fixes** the native generators and is the one that descends to the first-strand cyclotomic
   quotient. Batch 11's duality definition uses the generator-fixing anti-involution (so that the
   perfect pairing and the self-dual normalization live on $R^\Lambda$) and records the relation to
   the generic mirror convention. The two conventions must be reconciled once, with the shift
   dictionary, in the Step-3 supplier review; this batch does not edit batch 10.
2. **Sign normalization inside batch 10's divided-power item.** Batch 10 writes the horizontal
   reflection of $e_{i,n}=x_1^{n-1}\cdots x_{n-1}\partial_{w_0}$ as
   $\psi(e_{i,n})=\partial_{w_0}x_1^{n-1}\cdots x_{n-1}$; in rank two, the anti-involution with
   $\psi(\tau_a)=-\tau_{n-a}$ forced by the two mixed relations sends $x_1\tau$ to $-\tau x_2$, and
   $-\tau x_2\neq\tau x_1$ in $NH_2$ (the two differ by $x_1\tau+\tau x_2\neq0$). Both elements are
   idempotents, so the projective is the same up to a shift, but the displayed formula and the sign
   rule should be reconciled in the Step-3 review. Batch 11 consumes the generic item only through
   its shift-normalization statement and the Cartan pairing, which are not affected by this sign
   bookkeeping.
3. **Same-order biadjunction.** See conflict 2 above: Webster Theorem 1.8's biadjointness is a
   two-category statement; a naive graded-module right adjunction fails at rank one by a genuine
   degree obstruction. Future consumers (batches 24/25) should not use an unshifted
   $E^\Lambda_i\dashv F^\Lambda_i$; the recorded substitutes are the degree-zero
   $F^\Lambda_i\dashv E^\Lambda_i$ and KK Section 6's normalized Grothendieck operators.

## 7. Residual uncertainty and authoring obligations (not represented as completed work)

- The exact integer $t^\Lambda(\beta)$ (the closing-trace degree) is stated as homogeneous and even,
  with the rank-one value $2d_i(\lambda_i-1)$ verified; the general formula is left to authoring to
  pin against Webster Section 1.3 and the cap degrees. The self-dual halving only needs evenness,
  which is checked in the rank-one case and asserted for the standard normalization.
- The identification of Kang-Kashiwara's generator-fixing anti-involution with the descended
  cyclotomic $\psi$ and the relation to batch 10's horizontal-reflection convention are recorded as
  a convention dictionary, not expanded into a full lemma; the author must either prove the
  dictionary or state the pairing with the source's own $\psi$ and transport it.
- The crystal theorem follows Lauda-Vazirani's route through the negative-half crystal $B$ and the
  strict embeddings; the two restrictions $e_i$ and $\bar e_i$ and the socle multiplicity
  $[m]_{q_i}!$ are quoted from the source, and the author must reproduce the rank-one recursion
  rather than cite it.
- The based-quotient lemma's "surviving projective-cover shift orbits cannot merge" clause uses the
  finite-dimensional local-endomorphism quotient argument; it is complete algebraically but remains
  conditional on the escalated generic theorem.
- The B-page examples are locally derived computations, not source-native examples; every one of
  them is checked above, and their (11 + several inline) proof-use rows trigger no coverage warning.

## 8. Checks actually run (stable inputs, this dispatch)

- `node tools/manifest-deps.mjs research/...-batch-*.pages.json`
  -> `758 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json`
  -> `758 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-...`
  -> exit 0: no item-level cycles, forward references, B-page dependencies or unresolved ids among
  the 94 page(s) with item lists; the batch-11 diagnostics are the advisory `redundant-prereq`
  warnings inherited from the plan's `requires` list (preserved as planned).
- `node tools/item-dependency-levels.mjs check --run frontier-44-...`
  -> only the empty-inventory errors of batches 24/25; no error line names a batch-11 page, so all
  22 declared labels equal the recomputed `1 + max(in-run dep level)` values.
- `node tools/step1-decisions.mjs check --run frontier-44-...`
  -> `758 items, 755 ready`; the batch-11 work rows are exactly the three escalations.
- `node tools/coverage-checklist.mjs research/...-batch-11.coverage.json --require-destination`
  -> `2 page(s), 55 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-11.coverage.json --stamp`
  -> `13/13 source(s) fetch-verified (13 newly stamped)`; check mode `13/13 resolved`.
- `node tools/extcheck.mjs` (bare, whole corpus)
  -> `26654 items, 0 recorded-not-proved, 0 resting on them` - no active unproved records; the
  manifest-scoped selection is not usable before Step 3 because the new items have no item files
  yet.
- `node tools/manifest-integrity.mjs --run frontier-44-...`
  -> `98 page(s) owed, 98 in the manifests; no scope drift`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-...`
  -> `refreshed and deduplicated`; batch 11 is registered in `reviewed_batches` with 73 rows in the
  batch input (item edges into batches 5/6/7/8/10, the three escalation-blocker rows and the three
  page-requirement edges), all `open` and subject to the ordinary Step-3/Step-5 supplier-first
  review. `--require-reviewed` still reports the run-wide "supply every batch input" message,
  because batches 24/25 have no inputs yet; nothing in that message is owed by batch 11.

Not run by this worker (engine or other batches' responsibility): `url-liveness`/`source-backing`
(whole-run gates), `drift-review-check`, and manifest-scoped `depcheck`/`depsource` selections
(their subjects resolve to item files that do not exist until Step 3 authoring; the bare `depsource`
run lists 13 unresolved edges inside the batch-8 page `balanced-triples-and-global-crystal-bases`,
which belong to that batch's own splice timing, not to batch 11).

## 9. Cross-batch observations for the owner

- The batch input declares the item-level edges into batches 5/6/7/8/10 plus the three page
  requirement edges and the three escalation-blocker rows. The QG-5/QG-7 edges are the ones the
  owner already reviewed under the current-producer interface pass; nothing further is requested
  here beyond the Step-3 supplier-first check.
- Future consumer note (for batches 24 and 25, not edited): the interfaces this page exports are
  `def-cyclotomic-klr-quotient-at-a-dominant-weight`,
  `def-cyclotomic-klr-induction-and-restriction-functors`,
  `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`,
  `thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`,
  `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`,
  `thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module` and
  `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`, together with the three
  escalated global-basis items. Consumers must not assume the escalated items, and must use the
  first-strand/right-append side convention, including the `pi_Lambda ∘ *` map where relevant.
- No other batch's manifest, coverage, notes, decisions or the shared plan was edited by this
  worker; the only shared file touched is the tool-owned unified ledger
  `research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`,
  refreshed by its own tool.

## 10. Final pass on the frozen manifest bytes

After the last edits (the removal of forward wikilinks in two statements, the operator-location
clarification in the integrable-action theorem, the two B-example repairs, the single-typo link fix
in the counterexample and a final pass completing `deps` for every wikilink used in a statement or
strategy), the ordinary record command was re-run for all 22 items in dependency order: 19 ready
records are current (8 were rewritten by the final `deps` completion, the rest closed as unchanged)
and the three escalations kept their original stamps because the registrar refuses to overwrite an
escalation; no `--owner` flag was used anywhere in this batch. The final check battery on the frozen bytes is the
one tabulated in Section 8: `manifest-deps` 758 items / 0 errors; `content-policy` 758 scoped /
0 errors; `coverage-checklist` 2 pages / 55 rows / 0 errors; `source-fetch-check` 13/13 verified;
`validate-plan` exit 0; `item-dependency-levels` no batch-11 error; `step1-decisions` 758 items /
755 ready with only the three intended batch-11 escalations - which are also the only open item
rows in the whole run; `manifest-integrity` no scope drift; ledger refreshed and deduplicated with
73 batch-11 rows.

Readiness here remains scaffold readiness. Owner/operator reconciliation and the full engine gate
follow construction; neither a worker exit nor a readiness record is independent mathematical
approval, and Step 3 provides the review. The three escalated items are not mathematical approval of
the cyclotomic global-basis claims.
