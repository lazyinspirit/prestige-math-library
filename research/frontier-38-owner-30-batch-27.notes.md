# Batch 27 Step 1 scaffold — Point Blowup Resolution on Arbitrary Regular Surfaces

Scope: the single A/B pair `point-blowup-resolution-on-arbitrary-regular-surfaces`
(A, order 901) / `point-blowup-resolution-on-arbitrary-regular-surfaces-examples`
(B, order 902), category `algebraic-geometry`. No other pair was touched. Read
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the AG-CRES-1 design row
(section at `research/plan-algebraic-geometry-expansion-track.md` L253, reached from the
L44 id mention), the current `research/plan-spec.json`, the AV-26 batch-2 manifest
`research/frontier-38-owner-30-batch-2.pages.json`, the source reports
`research/algebraic-geometry-expansion-2026-09-30/source-stacks.md`,
`source-vakil.md`, `audit-repair.md`, `amendment-notes.md`, and the live run state
(`.autopilot/frontier-38-owner-30/state.json`, stage `1-scaffold`, dispatch
`1-scaffold:batch-27`). The owner direction was read before any construction and
controls.

## Scope and plan reconciliation

- The owner direction fixes the pair at A901/B902 and requires a local closure for
  "arbitrary Noetherian regular surfaces with finite normalization", explicitly
  forbidding AV-26's plane-curve theorem as a supplier for this broader claim and
  forbidding higher-dimensional resolution claims. The scaffold realizes exactly that:
  the page proves the Stacks 54.15 route locally (factorization of the finite
  normalization through point blowups, strict growth of the coherent intermediate
  algebras, Noetherian stabilization, regularization, and the multiplicity/contact
  descent to an SNC support) on arbitrary regular surfaces. It does not restate
  `thm-resolution-plane-curves-by-point-blowups` and does not consume it.
- Design versus plan: the design row AG-CRES-1 names four A items and three B items;
  `plan-spec.json` carries empty item lists for 901/902, so this batch mints exactly
  those seven items (four A: `lem-normalization-factors-through-blowup-of-curve-point`,
  `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`,
  `thm-regularization-of-finite-normalization-curve-by-point-blowups`,
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`; three B:
  `ex-node-resolved-by-one-blowup`, `ex-cusp-resolution-and-delta-drop`,
  `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups`) and adds
  five local-closure A items plus one local SNC definition
  (`def-intersection-multiplicity-of-closed-subschemes`,
  `lem-intersection-multiplicity-drop-under-point-blowup`,
  `lem-point-blowup-of-integral-curve-is-finite`,
  `lem-increasing-sequence-of-coherent-subsheaves-stabilizes`,
  `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups`,
  `lem-blowup-of-closed-point-of-regular-surface-is-regular`,
  `def-strict-normal-crossings-divisor`,
  `thm-separation-of-regular-curve-components-by-point-blowups`). That expansion is the
  owner-mandated local closure and the design's own proof route; no commissioned claim
  was weakened, moved or dropped. The current parent integration must reconcile the additional earlier page-885 prerequisite described below.
- Requires: the current manifest extends the plan by the earlier selected page
  `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` (A885, batch24),
  for the arbitrary regular-local UFD supplier. Parent must add this exact edge to
  `plan-spec.json`. The other A901 prerequisites remain
  `blowups-exceptional-divisors-and-strict-transforms` (in-run AV-26, batch 2),
  `normalization-finiteness-for-affine-domains` and `flat-smooth-and-etale-morphisms`
  (published AV-17); B902 requires A901. The design's "AV-26 charts and CA-19 finite
  normalization only in the finite-type-over-a-field scope" is preserved: the page
  carries finite normalization as an explicit hypothesis for the general Noetherian
  statements (so CA-19 is not consumed there), while the in-run batch-2 item
  `thm-normalization-reduced-curve-exists-finite` (finite type over a field) supplies
  the finiteness used by the B examples; `flat-smooth-and-etale-morphisms` is the
  published source of the smoothness vocabulary and of the non-smoothness caveat
  (regularity of point blowups is not smoothness over an imperfect field). The page
  edges are otherwise not changed; parent integration owns `plan-spec` synchronization.
- The direction's AV-26 warning is preserved as a statement caveat: blowups of a
  regular surface at a closed point stay regular even when the residue field extension
  is inseparable, and the SNC conclusion is about regular (not smooth) components, with
  no relative-SNC or smoothness-over-k claim. The design's "state separately the regular
  strict-transform conclusion and the embedded normal-crossing conclusion" is realized
  by the separation of `thm-regularization-...` and `thm-embedded-snc-resolution-...`.
- The design's gate asks for "a second independent full treatment of that exact scope".
  The owner direction overrides: a missing second source locator alone does not block a
  pair when one verified authoritative treatment is fully reproduced locally with every
  prerequisite proved. Stacks §54.15 is fully fetched, read and reproduced locally
  (every section lemma mapped to an item below); Vakil §28.4.4 is an independently read,
  independently fetched treatment of the field case (see Sources). The exact-scope
  second treatment remains an open item for Step-5 source reconciliation and is recorded
  here rather than fabricated.

## Manifest, dependency levels, and mathematical audit

Manifest `research/frontier-38-owner-30-batch-27.pages.json`: A901 has twelve items and
B902 three; every item carries `deps`, `design_row: AG-CRES-1`, `local_addition`,
provenance, sources with locators, and a `dependency_level` computed as one plus the
maximum level of its in-run `deps` (out-of-batch in-run suppliers are AV-26
batch-2 items and the batch24 arbitrary regular-local UFD theorem; remaining suppliers are published on disk). The
whole-run `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
reports **803 items across 60 pages, exit 0, maximum level 16** — no error names any
batch-27 item.

| Level | Item |
|---:|---|
| 0 | `def-intersection-multiplicity-of-closed-subschemes` |
| 0 | `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` |
| 2 | `def-strict-normal-crossings-divisor` |
| 7 | `lem-blowup-of-closed-point-of-regular-surface-is-regular` |
| 7 | `lem-intersection-multiplicity-drop-under-point-blowup` |
| 7 | `lem-point-blowup-of-integral-curve-is-finite` |
| 8 | `lem-normalization-factors-through-blowup-of-curve-point` |
| 9 | `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` |
| 10 | `thm-regularization-of-finite-normalization-curve-by-point-blowups` |
| 11 | `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` |
| 11 | `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` |
| 12 | `thm-separation-of-regular-curve-components-by-point-blowups` |
| 13 | `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` |
| 14 | `ex-node-resolved-by-one-blowup` |
| 14 | `ex-cusp-resolution-and-delta-drop` |

### Item-by-item audit

- **Intersection multiplicity (level 0).**
  `def-intersection-multiplicity-of-closed-subschemes` is Stacks' invariant
  (54.15.2.1, tag 0BI6): `m_p(Y cap Z) = length_{O_{X,p}}(O_{Y cap Z,p})` for integral
  one-dimensional `Y` with the generic point of `Y` outside `Z`, finite because the
  local ring is zero-dimensional Noetherian. The statement keeps the hypothesis that
  prevents a one-dimensional intersection, the locality claim, and the positivity.
- **Multiplicity drop (level 7).**
  `lem-intersection-multiplicity-drop-under-point-blowup` is Stacks 54.15.3 (tag
  0BI7) verbatim in scope: `O_{Y,p}` regular, strict transforms `Y', Z'`, exceptional
  subscheme `E`; conclusion (1) `Y' -> Y` isomorphism, (2) one point `q` with
  `m_q(Y' cap E) = 1`, (3) `m_q(Y' cap Z') < m_p(Y cap Z)` when `q in Z'`. The proof
  strategy follows the source's chart `A[m/x_1]`, its map to `A/I` and the valuation
  comparison, using the library's DVR and length-additivity items; the strict
  transform identification is the in-run batch-2 theorem
  `thm-blowup-closed-immersion-transform-universal`. Direction and strict inequality
  checked against the source proof.
- **Finiteness of the point blowup (level 7).**
  `lem-point-blowup-of-integral-curve-is-finite` supplies the proper/quasi-finite
  interface that Stacks 54.15.1 obtains from Varieties 33.17.2 (tags 0AB7, 02LS): the
  blowup is projective (batch-2 `thm-blowup-projective`), isomorphic off `p`, and its
  fibre over `p` is `Proj(gr_{m_p}O_{Y,p})`. The strategy proves that fibre is finite
  over `kappa(p)` by the Hilbert-Samuel dimension theorem (the Hilbert-Samuel function
  of a one-dimensional local ring has degree one, its difference is eventually
  constant, so the structure sheaf of the fibre has constant Hilbert polynomial, hence
  the fibre is 0-dimensional), then applies the published
  `thm-proper-quasi-finite-is-finite`. The criterion "blowup is an isomorphism iff
  `m_p` is invertible iff `O_{Y,p}` is regular" is stated and routed through
  `thm-blowup-effective-cartier-divisor-isomorphism` and the DVR item. An internal
  check of the finiteness claim against Stacks 37.44.1 (proper with finite fibres is
  finite) was carried out; no defect found in the published suppliers used.
- **Factorization of the normalization (level 8, design item 1).**
  `lem-normalization-factors-through-blowup-of-curve-point`: local rings of a normal
  one-dimensional scheme are DVRs or fields, so `m_p O_{Y^nu}` is invertible and the
  universal property of the blowup gives the unique factorization; `beta` is finite by
  the previous item. The extra hypothesis "normalization finite" is explicit, matching
  the owner direction.
- **Strict growth (level 9, design item 2).**
  `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`:
  `O_Y` is strictly inside `beta_*O_{Y_1}` inside `nu_*O_{Y^nu}` at a non-regular
  center, with quotient supported exactly at `p`; the strictness argument (equality
  would force `beta` to be an isomorphism) and its preservation under the finite
  (hence affine, exact) pushforward are both recorded. This is the "strict growth of
  the coherent intermediate algebras" the design asks for.
- **Stabilization (level 0).**
  `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` is the affine Noetherian
  ACC statement (Stacks 54.15.1 cites Cohomology of Schemes 30.10.1, tag 01X8); the
  proof reduces to finitely many affine charts and the ascending chain condition for
  finitely generated modules over Noetherian rings.
- **Regularization (level 10, design item 3).**
  `thm-regularization-of-finite-normalization-curve-by-point-blowups` is Stacks
  54.15.1(4)=>(3): iterate blowups at non-regular closed points; the coherent
  subalgebras strictly increase at each step and stabilize by Noetherianity, so a
  hypothetical stabilization at a non-regular stage is impossible. The statement keeps
  the finite-normalization hypothesis and the "no higher-dimensional resolution"
  boundary.
- **Ambient regularization (level 11).**
  `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` is Stacks
  54.15.2 (tag 0BI5): the strict transform in the ambient blowup sequence is the
  intrinsic blowup (batch-2 `thm-blowup-closed-immersion-transform-universal`, source
  Divisors 31.34.2, tag 080F), so the ambient strict transform is regular.
- **Regular regular-surface blowups (level 7).** The dimension-two charts are
  quotients `A[T]/(xT-y)` and `A[U]/(yU-x)`, not polynomial localizations.
  The power-torsion presentation and cotangent-space calculation in the repaired
  strategy prove regularity, using the published parameter-quotient lemma.
  The exceptional curve is `P^1_kappa(p)` for local dimension two (Stacks 54.3.1,
  actual tag **0AGQ**). At a dimension-one closed point the center is Cartier,
  the blowup is the identity and the exceptional inverse image is the reduced
  point. This case matters for non-Jacobson regular surfaces.
- **SNC definition (level 2).** Pairwise regular transverse intersections alone
  do not exclude triple points. The repaired equivalence explicitly requires
  no triple intersection; the full Stacks regular-intersection criterion requires
  codimension equal to the number of components intersected. The local UFD and
  parameter-quotient prerequisites are now declared.
- **Separation of components (level 12).**
  `thm-separation-of-regular-curve-components-by-point-blowups` is Stacks 54.15.4
  (tag 0BI8): regularize each component, then strictly decrease the maximum of
  `m_p(Y_i cap Y_j)` by blowing up the finitely many points where it is attained, and
  finally separate the multiplicity-one pairs. Termination is by the strictly
  decreasing maximum plus the drop lemma's transverse intersections with new
  exceptional curves.
- **Main SNC theorem (level 13, design item 4).**
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` is Stacks 54.15.6
  (tag 0BIC) in the reduced-curve scope: reduced curves on a regular surface are
  Cartier (regular local rings are UFDs, selected batch24
  `thm-nonaffine-regular-local-ring-is-ufd`), components are regularized, the maximum
  pairwise multiplicity is reduced to one, and points with three or more components
  are separated; exceptional curves are regular and transverse. The statement keeps
  the finite-normalization hypothesis per component, the "regularity, not smoothness"
  caveat, and the explicit exclusion of higher-dimensional resolution. Stacks 54.15.5
  (tag 0BIB) is disposed `inline`: in the reduced-curve scope the Cartier step is
  automatic, so the auxiliary Lemma 54.4.1 machinery for embedded/non-reduced parts is
  deliberately not built (recorded `out-of-scope` in the coverage).
- **B examples (levels 14, 14, 11).** The node and cusp are computed in the two
  standard charts. The node has two formal branches, not two global components.
  The cusp becomes regular in one blowup but meets the exceptional curve with
  intersection multiplicity two; two further blowups make SNC support. The delta drop of the cusp
  completion uses the in-run batch-2 delta items; the counterexample uses the published
  `ex-cusp-local-ring-not-regular` and `def-embedding-dimension-and-regular-local-ring`.
  No B item is a supplier for any A theorem, and no proof is duplicated from the A page.

### Cross-batch and published-supplier checks

- The current cross-batch input has 47 rows: 45 individual item edges and two
  page edges. Every consumer is one actual manifest ID and each item edge matches
  `deps`, `justified_by`, or `forward_refs`; no comma-joined owner remains.
- Batch24 supplies `thm-nonaffine-regular-local-ring-is-ufd` to the local SNC
  definition and main theorem. Its full current proof and Picard-principal-
  localization proof were read independently: the height-one-prime induction
  and determinant argument use arbitrary regular local rings under AC. The smooth
  finite-type field corollary is not the assertion consumed here. A901 now
  declares the A885 page prerequisite; parent owns the matching plan edge.
- Batch2 normalization finiteness is used only in finite-type field examples;
  the general Noetherian theorems retain explicit finite normalization. Delta
  drop is applied to the projective completion on `P^2_k`, with properness,
  ample bundle, rational residue field and multiplicity two checked.
- Batch2 supplier item files are not yet authored. The individual verified rows
  record independently checked scaffold dependency interfaces, not complete
  proof certification. The chart overlap clause is not consumed here and has
  been referred to the separate batch2 repair lane.

## Sources

- **Stacks Project, Section 54.15 "Embedded resolution" (tag 0BI3)**: full section
  text (26,532-byte HTML) retrieved and read, including the introduction and the
  complete proofs of Lemmas 54.15.1-54.15.6 (tags 0BI4, 0BI5, 0BI7, 0BI8, 0BIB, 0BIC)
  and the invariant 54.15.2.1 (tag 0BI6). Fetch stamp verified. Every lemma is mapped
  to an item in the coverage file; the one narrowing (`54.15.5`/`54.4.1` for
  non-reduced or embedded-point parts) is disposed `out-of-scope` with the reason.
- **Stacks Project, Etale Morphisms, Definition 41.21.1 and Lemma 41.21.2 (tag
  0BIA)**: complete text read for the SNC definition and criterion; mapped to
  `def-strict-normal-crossings-divisor` and the terminal step of the SNC theorem.
- **Stacks Project, More on Morphisms, Lemma 37.44.1 (tag 02LS) and Varieties, Lemma
  33.17.2 (tag 0AB7)**: complete statements and proofs read; they are the source of
  the proper/quasi-finite-to-finite and one-dimensional-base finiteness steps. The
  local items use the published `thm-proper-quasi-finite-is-finite` as the library
  supplier.
- **Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, 2025-10-21
  version** (author-hosted full PDF, 9,643,655 bytes, 852 pages), Section 28.4.4,
  printed pp. 781-782: independently fetched and read. It proves termination of
  point-blowup resolution for a reduced projective curve over a field by strict
  decrease of the arithmetic genus, with the finite birational comparison, Exercise
  28.4.E and the "blowup isomorphism implies regular" step. Dispositions: `inline`
  for the blowup-isomorphism-implies-regular step
  (`lem-point-blowup-of-integral-curve-is-finite`) and for the finite-type instance in
  `ex-cusp-resolution-and-delta-drop`; `out-of-scope` for the general termination
  statement on both pages, with the design's own warning that V25 cannot close the
  broader claim.
- **Second-treatment search history** (owner direction: a missing second locator
  alone does not block when the single verified treatment is fully reproduced
  locally). Queries and outcomes recorded:
  `"blowup of one-dimensional local ring at maximal ideal finite over ring
  normalization conductor"` -> unrelated complete-ideal literature;
  `"proper quasi-finite morphism finite counterexample blowup curve
  one-dimensional base"` -> Stacks 02LS/37.41.6 and a flatification paper (used to
  resolve the finiteness step); `"Kollár Lectures on Resolution of Singularities
  chapter embedded resolution curves surface blow up points"` -> book reference and
  a blog survey, no open full text of the exact scope; `"lecture notes resolution of
  singularities curves on smooth surfaces sequence of point blowups embedded normal
  crossings proof"` -> Clay Mathematics Proceedings vol. 20 (Cutkosky survey:
  embedded resolution in dimension 2 known, attribution to Abhyankar/Hironaka/Cossart-
  Jannsen-Saito, no full proof), Hauser's survey (blowup machinery, no full
  curve-on-surface proof). None of these provides an open full proof of the exact
  arbitrary-Noetherian scope; the Stacks route is therefore the verified treatment and
  the exact-scope second treatment is recorded as an open Step-5 reconciliation item.
- `source-fetch-check` (stamp mode, then check mode): **7/7 sources fetch-verified,
  7/7 resolved, 0 documented drops**.
- Published defects: none found in the published suppliers consulted. The published
  `thm-proper-quasi-finite-is-finite` was checked against Stacks 37.44.1 and its
  statement (proper + finite fibres implies finite, no Noetherian hypothesis) is used
  only where the local proof supplies finite fibres; no defect recorded.

## Historical checks before the owner repair (not current-content certificates)

- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`: exit 0 —
  803 items across 60 pages, maximum level 16, no batch-27 finding.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-27.coverage.json
  --require-destination --json`: exit 0 — 2 pages, 28 harvested results, 0 errors,
  0 warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-38-owner-30-batch-27.coverage.json --stamp` then check mode:
  exit 0 — 7/7 fetch-verified, 7/7 resolved.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-27.pages.json`:
  exit 0 — 15 items, 0 errors. Whole-run over all present batch manifests: 803 items,
  0 errors.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-*.pages.json
  --manifest-only --json`: 803 scoped items, 0 errors, 0 warnings; a batch-27-only
  file scope reports the expected cross-batch interface rows because in-run batch-2
  suppliers are not declared by batch 27's file, so the whole-run invocation is the
  recorded result (the batch-27 items contribute no whole-run finding).
- `node tools/depcheck.mjs`: exit 0 (no cycles, all references resolve, no draft item
  on a published page); `fwdcheck`: exit 0; `extcheck`: exit 0. No finding names a
  batch-27 item.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (289 planned pages
  without item lists remain the plan's own state; the 901/902 rows are registered).
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30`: run closed over
  803 loaded items, 803 ready; batch-27 has zero open work rows. All fifteen records
  were written with the ordinary tool, decision `ready`, `owner:false`, the examined
  dependency IDs and item-specific evidence.

## Unresolved findings and notes for the owner

- Exact-scope second independent treatment: not retrieved (see Sources); the owner
  direction permits the single verified Stacks treatment with complete local closure,
  which this batch provides. Step-5 source reconciliation should either accept the
  waiver or commission the second treatment; the search history above is the honest
  record.
- The `coverage-checklist` primary-source requirement is satisfied by Vakil's
  lecture-notes treatment for the field case; the arbitrary-Noetherian statements
  themselves rest on Stacks. This mismatch between gate shape and the actual source
  situation is recorded here for the operator.
- Item files, page files, `plan-spec.json`, the scope ledger, engine state, published
  content and verdicts were not edited. The fifteen
  `research/frontier-38-owner-30-step1-<id>.json` readiness records are local author
  readiness records, not independent mathematical approval; Step 3 authors the proofs
  and Step 5 reviews them.

## Owner repair handoff — 2026-10-03

The current manifest restores the commissioned **Noetherian** scope of the finite
embedded resolution theorem; merely locally Noetherian permits infinitely many
singular components and does not support a globally finite blowup sequence. The
separation theorem now explicitly lists distinct components. AC is carried into
the normalization-factorization, strict-growth and cusp counterexample contracts
that use AC-stated prerequisites. The UFD strategy uses the product of finitely
many distinct prime generators for the radical height-one ideal.

Fresh full-text retrievals inspected during this repair: Stacks
`https://stacks.math.columbia.edu/tag/0BIC` (54.15.6, complete proof),
`https://stacks.math.columbia.edu/tag/0BI4` (54.15.1, complete proof), and
`https://stacks.math.columbia.edu/tag/0AGQ` (54.3.1, complete proof). The former
54.3.1 locator `0BGG` was wrong: its retrieved text is 54.13.1 (finite
normalization from an alteration), so it was replaced by 0AGQ. Source 0AGQ
identifies the exceptional fibre through the polynomial associated graded and
the graded Rees-algebra closed immersion. The repaired chart regularity proof is
explicit local algebra; it does not attribute that argument to 0AGQ.

Parent integration: add A885 to A901's `requires` in `plan-spec.json`, reconcile
current generated tasks/coverage/source evidence and run the ordinary stable
Step-1 gate battery after all writers drain. Fifteen local readiness records must
match these current contracts and supplier interfaces; they certify scaffold
readiness only. No new item IDs were introduced; A901 has twelve and B902 three.

Current owner repair checks: `manifest-deps` passed for all15 items (exit0).
Read-only dependency-ledger collection found every47 actual batch27 cross-batch
edge reviewed; the same-batch B902→A901 reading edge was removed from the cross-batch
input. Whole-run dependency-level check currently fails only on two batch26
intersection items (computed levels8/9 versus labels7/8), outside this lane.

Parent plan integration is now confirmed on disk: A901.requires includes A885,
and A749.requires includes classification-of-compact-connected-surfaces.
Freshly retrieved and read full Stacks0BIA (41.21.2) as well: its criterion is
for every finite component subset, with regular intersection of codimension equal
to subset size; triple intersections are therefore excluded in a surface.
Current coverage-checklist passes2pages/29harvested/0errors/0warnings; ordinary
source-fetch stamp and check both pass8/8. These are coverage/retrieval checks.

Final stable handoff checks after batch2 repairs: combined batch17/batch27
manifest-deps passes52items/0errors; whole-run dependency levels pass804items
across60pages/max16. Bounded current readiness covers the15batch27 records and
one authorized batch17 counterexample record. Read-only cross-batch collection
has47batch27 edges, every edge reviewed and zero orphaned batch27 reviews.
No global ledger, runtime state, publication status or authored item file changed
in this lane. Parent owns central ledger refresh and full Step1 battery retry.

## Step3 owner review and repair (author terminal 2026-10-02T19:59:52Z)

The ten source-dependent escalations were read with full current proofs, in
supplier order. Green formatting did not imply validity: main SNC step4 skipped
contact descent; the drop lemma used the defining ideal of Y (zero on Y) rather
than the point-center ideal; the surface proof assumed arbitrary affine
parameter generators, confused generic exceptional local dimension1 with closed
local dimension2, and needed the localized cotangent argument. Repairs retain
all general Noetherian, finite-normalization and residue-field contracts.

Exact interface corrections authorized by parent:

- Main SNC: “at every closed point either one component passes or” becomes
  “at every closed point of the support either one component passes or”. The
  zero-component case off support is explicit in final proof step6.1.
- SNC Definition: “equivalently, a reduced effective Cartier divisor on S”
  becomes “equivalently, a reduced effective Cartier divisor on S of pure
  dimension one”. Its local proof now restricts to closed points on D and
  proves ambient dimension2; dimension1 ambient closed points off D cause no
  problem. Actual Definition consumers are strict-growth (unused vocabulary),
  main SNC, node, and cusp, all on batch27. No outside consumer was found.
- Point finiteness: unsupported bare global “projective” is replaced by the
  exact global closed immersion into `Proj_Y Sym(I_p)`, together with local
  H-projectivity, properness and finiteness. The quotient/gluing construction
  is proved; no global immersion into `P^N_Y` or global-generation hypothesis
  is asserted. The normative AG-CRES-1 design promises proper/quasi-finite
  factorization and finiteness, not arbitrary global H-projectivity; no literal
  commissioned H-projective promise remains unmet. Earlier published symmetric
  algebra and relative-Proj interfaces suffice, with no later Hilbert definition.

Full Stacks0BI7 and0BI8 statements and proofs were freshly retrieved and read.
The point-center ideal and maximum-contact descent match those texts and the
already-read full0BIC proof. No new source claim or new item was introduced.

Further actual repairs: the normalization pullback ideal is explicitly nonzero
at every point over the center; affine restriction of scalars faithfully keeps
strict-growth quotients nonzero (they need not be sheaves on reduced residue-
field points). Other components retain finite normalization while a selected
component is regularized. The cusp proof checks the second chart, finite
birational parametrization, all scheme points, projective infinity regularity,
and the proper/ample hypotheses of the defect formula. Direct consumer node
had illegal division by3 under its char≠2 contract; the repaired off-origin
coordinate proof includes char3, and its formal square root is recursively
constructed by dividing only by2. Its second chart and both exceptional points
are checked. The cusp counterexample's bijectivity assertion now covers scheme
points instead of only field-valued points.

The in-run batch2 author remains active at this checkpoint. Exact supplier
proofs and pending citation quotes must be checked on stable authored content
before owner decisions or final certification; file presence is not acceptance.

### Post-author checkpoint (2026-10-03)

Both authors are now terminal. The isolated batch2 normalization supplier is
repaired without changing its Statement: normalizations glue on common principal
opens without separatedness, and minimal-prime separators with summed
nonzerodivisor denominators identify the total fraction ring. There is no CRT
claim for intersecting components. The full earlier arbitrary-field finiteness
proof and its finite purely inseparable rational-envelope helpers were read;
no perfectness or separability hypothesis was imported. Fresh full Stacks texts
035E (current Section 29.55, not the old 29.54 numbering) and 032O were retrieved
and read as an independent source check. Exact serial manifest and contract
patches are in the owner-step3-normalization-{entry,contract}-patch JSON files;
shared batch2 carriers were not edited here.

The general curve regularization proof now explicitly invokes integral
 dimension preservation on a finite affine cover. The intersection Definition's
exposition calls Spec O_X,p -> X the canonical localization morphism rather than
an open immersion; its tangency interpretation is qualified to regular curve
components on a regular surface. Neither change alters its Definition contract.
The ambient regularization source is correctly 080E (Lemma 31.34.2); freshly
read 080F is Lemma 31.34.3 and does not supply that assertion.

Current scoped checks: 14 changed batch27 paths, 68 proof steps, no proof-layout
defects; 12 proof-bearing paths pass precheck; all 14 render. Manifest dependencies
pass for all 15 entries; strict contracts pass for all 15 entries; citation
fidelity has 135 exact quotes with no detected widening. Coverage has 30 harvested
results and no errors; source-fetch verifies all nine sources. The isolated
normalization supplier separately passes precheck, render, explicit proof-layout
(nine steps), strict contract, and 27 exact citation quotes.

Cross-batch inputs are rebuilt from actual deps with individual consumers:
64 current rows, including exact batch24 UFD ownership and page885 prerequisite.
Batch2 rows are deliberately open until the corrected supplier handoff is stable
and the full proof/consumer uses are read. No canonical ledger, owner decision,
runtime state, publication, or global configuration was written. Mechanical
checks above are scoped evidence, not central mathematical certification.

### Stable supplier-first handoff

The blowup lane has finished its corrected proofs and shared carriers, and parent
serially integrated the isolated normalization supplier at 21:37:32 UTC. Full
current direct supplier proofs and their exact consuming roles were read. The
strict-transform union clause is explicitly finite, compatible with every
Noetherian union here; its inverse chart maps and flat-localization intersection
argument are now complete. The universal property proves ratio-chart membership.
The defect supplier retains the correction term and negative line-bundle degrees,
uses properness, and its normalization invariance and Euler/length prerequisites
were also read after their repairs. No known mathematical uncertainty remains
in this scoped packet.

Current cross-input file has 64 individual current rows (62 item edges, two page
edges), all verified against the repaired supplier/consumer bytes; zero open
rows, zero comma-joined consumers. Recorded supplier hashes identify the exact
proofs read. Conditional finite-type examples do not widen the general Noetherian
normalization hypothesis. Owned dependency labels are refreshed; a read-only
whole-run dependency-level check passes 820 items on 60 pages, maximum 16.
All final scoped checks above were rerun and pass after the final separation
empty-contact correction. The durable handoff lists all 14 changed paths and
current hashes in owner-step3-surface-consumer-repair.json. Parent owns canonical
contract/source reconciliation, current owner decisions/receipts, ledger refresh,
and normal full gate recertification. This is a scoped mathematical review
handoff, not a central gate completion or publication claim.
