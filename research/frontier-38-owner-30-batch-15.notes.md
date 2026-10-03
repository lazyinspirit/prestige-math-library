# frontier-38-owner-30 — batch 15 scaffold notes

## Scope and authority

- Owned pair: `the-artin-action-on-a-free-group` (A, order 743, braid-groups) and
  `the-artin-action-on-a-free-group-examples` (B, order 744). The manifest holds
  23 A items and four B items, in dependency order; all 27 have current Step-1
  `ready` records written after the manifest was frozen (levels 0 to 8). A
  readiness record states that the item has a complete proof strategy and
  adequate met prerequisites; it is not independent mathematical approval.
- Read before construction: `AGENTS.md`, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
  `briefs/beta-scaffold.md`, the generated task, `research/frontier-38-owner-30-owner-authoring-direction.md`
  (present, read first, binding), `research/plan-spec.json` orders 743/744,
  `research/plan-braid-groups-track.md` L451–L500 (the whole BG-8 design,
  A section and examples section), the run's planning notes and drift evidence,
  and the published suppliers named below. No selected pair was changed, no
  unbuilt or unselected pair is used as a supplier, and no page split is needed
  (23/4 items against the hard 100-item cap).
- Written by this batch only: `research/frontier-38-owner-30-batch-15.pages.json`,
  `research/frontier-38-owner-30-batch-15.coverage.json`, this notes file,
  `research/frontier-38-owner-30-batch-15.cross-batch-dependencies.json`, and the
  27 `research/frontier-38-owner-30-step1-<item>.json` readiness records. The
  three source stamps live in the coverage file. No published content, shared
  plan, engine state or verdict was edited.

## Design, plan and owner-direction reconciliation

- **Which design location controls.** `plan-braid-groups-track.md` L451 is the
  A-page design section `## BG-8 — The Artin Action on a Free Group`, with the
  proposed A inventory, its proof routes and the source locators; L479 is the
  paired `### BG-8 — … — Examples` section, which proposes the four B items and
  their verification routes. The A section controls the A page and the pair's
  proof route; the examples section controls the B page. Both were read in full.
- **Plan versus design.** The current plan (`research/plan-spec.json`, orders
  743/744) carries the same `id`, `kind`, `category`, `title`, `order`,
  `companion` and `requires` as the task and manifest, but its item lists for
  both pages are still the planning shells (empty), so no item-level plan text
  conflicts with the design. The plan controls the page metadata and the
  `requires` edges; the design controls the item inventory and route.
  `validate-plan` reports the two pages as planned-with-no-items (expected
  before the Step-4 splice) and repeats pre-existing `redundant-prereq` notes
  about this page's `requires` edges; those edges are plan-owned and were not
  edited.
- **Owner direction.** The direction does not single out 743/744; it imposes the
  ordinary local-prerequisite, source, dependency-level and gate discipline.
  It was honored: every necessary prerequisite is a local item on this page or a
  published library item, no unbuilt pair is consumed, and every axiom
  assumption is stated, declared and identified (below).
- **Inventory reconciliation.** All 18 items proposed in the BG-8 A table appear
  in the manifest; the design's `lem-cutting-a-punctured-disk-along-a-full-stem-system-leaves-a-disk`
  is materialized under the stable id
  `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk` with the
  same claim, and the design's phrase "track the boundary loop's ordered product"
  inside its fundamental-group theorem is separated into the local lemma
  `lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians`.
  Five further local prerequisites were added because the commissioned B-page
  and faithfulness routes need them and no published item supplies them:
  `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`,
  `lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity`,
  `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`,
  `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`
  (this one only specializes the published
  `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`
  to puncture endpoints), and the boundary-word lemma above. The four B items
  are exactly the design's examples, all using A-page items.
- **Route conflicts recorded (plan/design control, all conservative).**
  1. The design routes the cutting lemma through "Euler characteristic and
     boundary bookkeeping, followed by the classification of compact genus-zero
     surfaces" (F-M §§1.2.7, 1.3.1). The manifest instead models the cut-open
     surface as a curvilinear polygon and applies the published
     Jordan–Schönflies extension for plane curves. Same claim, same source
     range, but the Jordan–Schönflies supplier assumes AC, so the item now
     states and declares AC; the previous draft neither declared it nor avoided
     it.
  2. The design folds `[∂]=[x_1]⋯[x_n]` into the fundamental-group theorem by
     "tracking the boundary loop". The manifest isolates it as a separate lemma
     and proves it by the explicit flower deformation retraction, which keeps
     that lemma choice-free and removes an AC dependency on the cutting lemma.
  3. The design's faithfulness route stops at the braid–mapping-class
     isomorphism; the manifest adds the published completeness theorem
     (`thm-the-artin-presentation-is-complete-for-geometric-braids`) so that
     injectivity of the presented group is explicit rather than implicit.

## Prerequisite and dependency verification

- **A-page spine (levels 0–10, geometry).** `def-standard-meridians-…` fixes the
  disc, the marked tuple and the meridians. The flower lemma proves the explicit
  deformation retraction, the free basis `[x_1],…,[x_n]` and asphericity from
  the published wedge-of-circles, collapse and covering-space items.
  The fundamental-group theorem composes the retraction isomorphism. The
  boundary-word lemma reroutes through the flower retraction (choice-free). The
  based-map lemma glues based homotopies of the `n` summand loops of a wedge.
  The arc-isotopy lemma is the F-M bigon criterion for arcs with the half-bigon
  caveat exactly where isotopies must be relative to the endpoints. The
  puncture-endpoint extension lemma is the AC_ω specialization of the published
  smooth finite-arc-system lemma. The trivial-action lemma first forces
  `h(q_i)=q_i` by the coordinate homomorphism `F_n→Z` and then tracks the stems
  (the locally-constant endpoint argument is flagged for Step 3); the
  straightening lemma glues the extension lemma finitely many times with the
  closed set `C` growing; the isotopy-to-identity lemma cuts along the stem
  system and applies the published Alexander contraction.
- **Algebraic spine (levels 3–8).** `def-artin-automorphisms-…` freezes the
  Nielsen formulas and their inverses; the braid-relation lemma checks the
  defining relations; `def-the-artin-representation-…` descends by von Dyck;
  the geometric-action proposition reads the half twist off the published
  mapping-class theorem; faithfulness combines the geometric-action proposition,
  the isotopy-to-identity lemma and the published completeness/surjection/
  isomorphism items; the conjugacy/boundary-word lemma is the generator check;
  `def-peripheral-boundary-preserving-automorphism-of-f-n` states Artin's two
  hypotheses; the dichotomy and shortening lemmas are Artin's Theorem 16 cases;
  the sufficiency theorem is Artin's induction; the characterization theorem
  assembles necessity, sufficiency and faithfulness; the word-problem corollary
  compares reduced images.
- **Axiom audit.** AC is stated and declared with its use identified on: the
  cutting lemma (Jordan–Schönflies), the straightening lemma (smooth
  representative + AC_ω), the isotopy-to-identity lemma (cutting +
  straightening), the geometric-action proposition (published mapping-class
  theorem), the faithfulness theorem, the characterization theorem and the
  word-problem corollary. `lem-smooth-relative-isotopy-extension-…` assumes
  AC_ω and declares `def-countable-choice`; no item claims to avoid choice where
  choice is used. The items that say "no choice principle is used" (standard
  meridians, boundary word, based-map lemma, trivial-action lemma, the four
  algebraic items, the peripheral definition, the sufficiency theorem,
  `cex-permuting-…`, `cex-the-induced-permutation-…`, the B examples) were each
  checked for that claim. No item reaches the deferred-set-theory or
  beyond-choice branch: all foundation-side dependencies are published ZFC
  items of this library.
- **Resolution of every `deps` entry.** All out-of-run suppliers are published
  item files (verified on disk): the mapping-class page items
  (`def-boundary-fixed-mapping-class-group-of-a-punctured-disk`,
  `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
  `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group`,
  `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`),
  the Artin-completeness page items
  (`prop-the-artin-presentation-surjects-onto-geometric-braids`,
  `thm-the-artin-presentation-is-complete-for-geometric-braids`), the free-group
  items (`def-free-group`, `thm-reduced-words-form-the-free-group`,
  `thm-free-groups-unique-up-to-unique-isomorphism`, `thm-von-dyck`),
  `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`,
  `prop-retracts-inject-fundamental-groups`,
  `thm-fundamental-group-of-finite-wedge-of-circles`,
  `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`,
  `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant`,
  `thm-induced-fundamental-group-map-functoriality`,
  `thm-covering-space-lifting-criterion`,
  `thm-higher-dimensional-spheres-are-simply-connected`,
  `thm-convex-subsets-have-trivial-fundamental-group`,
  `lem-contractibility-implies-trivial-fundamental-group`,
  `thm-fundamental-group-laws`, `def-based-loops-and-fundamental-group`,
  `def-homotopy-relative-and-path-homotopy`, `def-path-connected`,
  `def-homeomorphism-and-open-maps`, `def-retraction-and-deformation-retract`,
  `def-wedge-of-pointed-spaces`,
  `def-group-isomorphism-and-automorphism`,
  `def-nullhomotopic-map-and-contractible-space`,
  `lem-jordan-schoenflies-extension-for-plane-curves`,
  `thm-choice-implies-dependent-implies-countable-choice`, `def-countable-choice`,
  `def-axiom-of-choice`, `def-elementary-geometric-half-twist`,
  `thm-the-braid-group-surjects-onto-the-symmetric-group` and
  `def-braid-group-by-the-artin-presentation`. No dependency is a planned
  supplier, a citation-only item, a forward reference or a missing id; the
  manifest-deps and content-policy checks confirm resolution.
- **No cross-batch in-run dependency.** No dep of this pair is an item owned by
  another batch of this run, so
  `research/frontier-38-owner-30-batch-15.cross-batch-dependencies.json` is the
  empty array; the unified ledger was refreshed after writing it.
- **Levels.** Every item carries `dependency_level` recomputed from the frozen
  manifest; `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  reports no error for any batch-15 item (the whole-run check still reports
  seven pre-existing label mismatches in the lie-theory batch and empty
  inventories in the still-unscaffolded batches, none of them this batch).

## Sources

- Three independent treatments back the A page, all fetched whole and stamped
  (`source-fetch-check` 3/3 fetch-verified): the Gonzalez-Meneses survey
  (arXiv:1010.0321), the Farb–Margalit author draft (F-M, version 5.0, archived
  copy) and Artin's 1947 *Theory of Braids* (complete journal PDF). The retrieved
  full texts were inspected at the cited locators:
  - GM §1.6 (printed pp. 8–9): Figure 3, the formulas
    `ρ_{σ_i}(x_i)=x_{i+1}`, `ρ_{σ_i}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}`, other
    generators fixed, the composition convention, the braid-relation check, the
    conjugacy/boundary-word observations and Theorem 1.3 (printed p. 10);
    §1.6.1 (printed p. 10) for the word problem; §1.5 (printed p. 7) for the
    standard generators. §1.6.2 (residual finiteness, Hopfianity) read and
    recorded out of scope.
  - Artin 1947: Theorems 13–16 with proofs, formulas (14) and (15), the
    substitution/groupoid identification of Theorem 14, the ordered-product
    condition (13)/(16) and the two-case induction of Theorem 16 (printed
    pp. 111–115). Theorem 13, Theorem 14, and Theorems 17–19 (normal form,
    center) are recorded out of scope with reasons.
  - F-M: Proposition 1.7 and the arc version (printed pp. 31–33, 37–38,
    including the half-bigon caveat), Proposition 1.10 "also works for arcs"
    (printed p. 38), Theorem 1.12 and its relative form with marked points
    (printed pp. 43–44), Lemma 2.1 (printed pp. 50–51), Proposition 2.8
    (printed p. 62), §1.3.1 cutting along proper arcs (printed pp. 38–39),
    §9.1.3 (printed p. 256) and §9.2 (printed pp. 258–259).
- Coverage dispositions: 28 harvested results, every one `included`, `inline`,
  `already-published` or `out-of-scope` with a written reason for each decline
  (`coverage-checklist`: 0 errors, 0 warnings).

## Repairs made in this attempt (attempt 1 left the manifest and coverage without
records or notes)

1. Added the missing statement-level dependencies
   `prop-retracts-inject-fundamental-groups` and
   `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` to the flower
   lemma, and added
   `lem-jordan-schoenflies-extension-for-plane-curves` to the cutting lemma.
2. Stated and declared AC on the cutting lemma and on the isotopy-to-identity
   lemma (which already assumed it), and completed the cutting lemma's boundary
   bookkeeping (2n slit sides, one corner per puncture, one outer arc; the
   earlier "outer circle split into n arcs" sentence was wrong for a stem star
   based at one boundary point).
3. Rerouted the boundary-word lemma through the flower retraction so that it no
   longer consumes the AC cutting lemma; recomputed all levels after the edit
   (unchanged labels).
4. Fixed the boundary-loop parametrization in the meridian definition to start
   at the frozen basepoint `d`.
5. Added the statement's cited suppliers to `prop-the-geometric-action-…`
   (`def-artin-automorphisms-…`), `thm-the-artin-representation-is-faithful`
   (`def-the-artin-representation-…`) and the two B-page items that use them.
6. Recorded the abelianisation argument in the peripheral-automorphism
   definition so the two displayed formulations are visibly equivalent, and
   corrected the Artin locator in the coverage to printed pp. 111–115.
7. Wrote the 27 readiness records only after the manifest was frozen; a recheck
   of every record against the current manifest returns 27 closed, 0 open.

## Checks run and actual results

- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  no batch-15 error; seven unrelated label errors remain in the lie-theory
  batch and empty-scaffold errors in batches still in flight.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`:
  503 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only` (whole run): 503 items, one
  error in another batch
  (`def-translation-functor-between-o-blocks` misses
  `def-h-semisimple-module`); on this manifest alone: 27 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-15.coverage.json`:
  1 page, 28 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-15.coverage.json`:
  3/3 sources fetch-verified (stamps written; check mode re-reads them green).
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — acyclic and
  consistent; pages 743/744 appear as planned pages with no item list yet
  (Step-4 splice territory), plus pre-existing redundant-prereq notes on this
  page's plan-owned `requires` edges.
- `node tools/extcheck.mjs --quiet` and `node tools/fwdcheck.mjs --quiet`: OK on
  the current corpus (the extcheck notes concern other, already-published items
  and no batch-15 item exists yet).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`:
  refreshed and deduplicated; this batch contributes no cross-batch row.

## Unresolved findings and Step-3 checks owed

- `prop-the-geometric-action-on-meridians-is-the-artin-representation` carries a
  flag that Step 3 must print the geometric read-off at the support disc `U_i`
  and confirm the conjugation direction against the frozen stacking convention
  of `def-elementary-geometric-half-twist`; the display is frozen by
  `def-artin-automorphisms-of-the-free-group`, so only the printed comparison is
  owed, not a choice of convention.
- `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`
  owes the written end-continuity argument for the tracked punctures, and
  `lem-a-standard-stem-arc-system-can-be-straightened-…` owes the explicit
  smooth/topological arc-isotopy comparison; both are recorded in the items.
- `lem-homotopic-simple-proper-arcs-…` and the cutting lemma rest on cited
  external results (F-M bigon criterion; Jordan–Schönflies). The sources were
  retrieved whole and the locators inspected; the Step-3 proofs must reproduce
  the arguments rather than cite-only, and Step-5 Alpha re-reads the sources.
- No defective published item was found among the examined suppliers; the
  published items were checked at statement/hypothesis level against their uses,
  not re-audited.

## Owner repair lane: stem/faithfulness

Current local repair and exact uncertainty are recorded in `frontier-38-owner-30-batch-15-stem-faithfulness-repair.md`; exact current raw item/source hashes are in its companion `-hashes.json`. Format/contracts passes do not close the general topological arc-neighborhood prerequisite. Parent must refresh scope and Step-3 decisions on final stable content.

The final faithful chain now uses the filled-point/point-pushing induction
recorded in that repair note, and its dependency closure excludes the unresolved
general arc supplier. It has a stable local mathematical handoff with exact
canonical hashes, already sent to the Markov lane. The original general arc
item's planar-neighborhood prerequisite remains an explicit owner hold; it is
not hidden by the faithful route. The native Step-3 decisions remain stale until
central recertification.


## Final bounded repair refresh (supersedes earlier arc-open progress)

Local plane-arc prerequisite now supplies the full explicit AC tameness route;
general arc and straightening texts repaired with distinct-end parametrization
and unoriented coincident-end convention. Root mathematical reread is pending;
no acceptance stamp is inferred. Standard circles now have pairwise disjoint
CLOSED disks with a finite choice-free minimum-radius formula; old admissible
meridian classes are preserved by an independent annular radius homotopy.
The13 direct consumers at audit were all batch15; removing the false smooth
endpoint quote/dependency leaves12 current direct consumers. Peripheral conjugators corrected
to LEFT powers; inverse-index proof and rank2 full-twist Remark corrected. Smooth
interior endpoint extension now uses direct compact velocity/cutoff/flow, with
its original statement unchanged. No outside item edits or controller changes.

Final scoped checks: explicit17 item paths/76 proof steps/layout0 defects;
precheck15 proved items0 failures; render18 files0 errors; strict contracts28/28
0 errors/warnings; manifest/content policy28 clean; coverage40 clean; sources4/4;
whole-run levels823/60 pages/max16 clean. Exact updated evidence and recursive
hashes are in the stem-faithfulness-repair Markdown/JSON companion. The main
faithfulness hash alone does not preserve earlier certificates after supplier
changes; root must refresh central native evidence on this content.

Final scoped depcheck also passes selected item and complete global page/cycle
checks (141 global multi-home warnings). Recomputed controller status22:24:06Z:
PAUSED3b-author,30/30 authors complete, nothing in flight.


### Final mathematical closure and bookkeeping

Root completed full final ARC4.1/5.1, straightening and flower mathematical
reread and reported that the arguments check. The last straightening6.1 edit
corrects Choice accounting only: general plane/Jordan arc route and countable
choice finite point motions consume Choice; the completed finite cut does not.
Explicit changed-path layout1item7steps0defects, precheck/render pass, strict
contracts28/28 clean. Hash companion refreshed; faithful recursive fingerprint
unchanged. This lane writes no native decisions/stamps; central all-item
recertification awaits other lane drain under root ownership. Earlier pending
reread/arc-open progress is superseded by this final state.


## Step 3 gate boundary refresh

The meridian empty-family boundary checks n=0 without an empty minimum. The
plane-arc reverse row identifies the actual one-way straightening statement.
All source declines were individually reviewed against current point pushing
and local graph/face proofs. Exact guards/evidence are in Artin gate repair
decisions. No batch15 item proof changed in this gate pass.
