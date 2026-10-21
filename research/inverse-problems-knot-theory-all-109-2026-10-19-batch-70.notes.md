# Batch 70 authoring notes — Torus knots and Seifert-fibered exteriors

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; batch `70`; assigned pair:
`torus-knots-and-seifert-fibered-exteriors` /
`torus-knots-and-seifert-fibered-exteriors-examples`.

## Controlling plan and current run

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
  `briefs/beta-scaffold.md`, the generated batch task, the dependency-order task,
  and `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`.
  The owner direction requires draft-only content, uninterrupted statements,
  frontmatter-only A/B pages, local proofs, and no publication or push.
- The complete KT-16 section at `research/plan-knot-theory-track.md` lines
  507–520 controls the five designed claims and their proof route. The matching
  `plan-spec.json` rows at 877004–877039 and the initial batch-70 manifest agree
  on page IDs, titles, category `knot-theory`, order 3136/3137, and page
  prerequisites. Their empty item arrays are pre-authoring placeholders; the
  KT-16 section supplies the item inventory. Four A-page helper items were added
  because the group, signed-parameter, Fox-module, and surface-construction
  steps require them locally.
- The controlling plan says “two exceptional Seifert fibers” for every coprime
  nonzero pair, while its B leaf includes `T(1,q)` as an unknot. Hatcher defines
  multiplicity-one fibers as regular. The authored group statement therefore
  records two distinguished fibers of multiplicities `|p|` and `|q|`, and says
  exactly two are exceptional when both multiplicities exceed one. This is the
  precise boundary correction; it retains the full parameter domain.
- The batch dependency input hash is
  `aee06ba4fd38f0657787d6f860231fc99d8f2a469a2e01b3698e526329221a16`;
  batch 70 is level 4 and requires batches 57, 60, and 62. The live native
  status was `1-scaffold`, 53/109 pairs covered, no workers in flight, with an
  owner blocker for batches 31 and 56. No run state or verdict was changed.

## Planned inventory, dependency work, and decisions

- Designed items retained: `def-coprime-torus-knot`,
  `thm-torus-knot-group-presentation`,
  `thm-torus-knot-alexander-and-genus-formulas`,
  `ex-knot-kt-16-worked-cases`, and `cex-knot-kt-16-boundary-case`.
- Local A-page modules added: `lem-torus-knot-unit-slope-is-unknot`,
  `lem-torus-knot-sign-changes-give-mirror-or-reversal`,
  `lem-positive-torus-knot-hopf-plumbing-surface`, and
  `lem-torus-knot-alexander-polynomial-from-presentation`.
- The manifest assigns levels 2, 3, 3, 3, 4, 5, 13, 14, 14 in dependency
  order. A scoped item-level projection over the nonempty current run manifests
  returns exactly those labels and no batch-70 cycle. `dependency_level` counts
  current in-run suppliers only; the run-level batch schedule remains level 4.
- The design map declares `def-knot-connected-sum-and-prime-knot` as a direct
  prerequisite of `def-coprime-torus-knot`, and declares both
  `thm-seifert-determinant-is-the-knot-alexander-polynomial` and
  `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible` as direct
  prerequisites of `thm-torus-knot-group-presentation`. The authored logical
  graph uses the connected-sum definition in the separate unit-slope unknot
  lemma, and uses the Seifert determinant only in the Alexander/genus theorem.
  The group proof derives its own peripheral words from the Heegaard annulus,
  Van Kampen, and the full-AC exterior homology theorem; it makes no claim that
  the boundary subgroup injects and no irreducibility claim. Those two map
  edges are therefore not logical prerequisites of this group statement. This
  discrepancy is recorded for owner reconciliation; the content claims remain
  complete and unchanged in scope.
- The planned supplier
  `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible` has no
  active item carrier and no batch-57 manifest entry. Its exact planned claim
  is “Every knot exterior in S3 is irreducible; it has compressible boundary
  iff the knot is the unknot.” The registration delta assigns it to KT-02; its
  proof design uses smooth/PL Schoenflies for spheres and caps a compressing
  disk with the neighborhood annulus after identifying its boundary as the
  preferred longitude. It would be needed for an additional irreducibility or
  peripheral-subgroup-injection claim, neither of which is made in this batch.
  No source excerpt or proof is inferred and no other pair was edited.
- The proposed-registration item levels for the definition and group theorem
  differ from the recomputed local levels because the proposed graph included
  unneeded edges. The authored labels follow the current manifest's actual
  logical dependencies; no cycle is present.
- The actual proof of the group/peripheral statement uses the published
  `thm-choice-implies-dependent-implies-countable-choice` to discharge the
  countable-choice hypotheses of the exterior and peripheral definitions;
  this dependency is in the authored graph. The Fox-module helper explicitly
  records its UFD supplier `lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain`.

## Supplier interfaces inspected

- Batch 57 actual carriers read: `def-knot-exterior`,
  `def-knot-meridian-and-preferred-longitude`, and the full proof of
  `thm-knot-exterior-homology-and-longitude`. The latter assumes full AC and
  proves `H1(E_K; Z) = Z` generated by the positive meridian and uniqueness of
  the degree-one null-homologous longitude. The two definitions alone do not
  assert longitude existence or uniqueness.
- Batch 60 actual carriers read: `def-knot-connected-sum-and-prime-knot` and
  `lem-knot-genus-invariant-under-mirror-and-reversal`. The latter assumes
  countable choice and proves genus invariance by reflecting/reorienting each
  admissible spanning surface.
- Batch 59 actual carriers read: `def-oriented-seifert-surface` and
  `def-oriented-seifert-surface-and-knot-genus`. The genus definition assumes
  countable choice and uses nonemptiness plus well-ordering to define the
  minimum.
- Batch 62 actual carriers read: the full statements/proofs of
  `thm-seifert-determinant-is-the-knot-alexander-polynomial` and
  `cor-knot-alexander-normalization-symmetry-and-genus-bound`, plus the
  positive-push convention, square-presentation lemma, and module-presentation
  theorem. The exact convention is `V_ij = lk(a_i^+, a_j)` with positive
  meridian deck action and determinant `det(V - t V^T)`. The genus bound is
  exponent width `deg Delta <= 2g`; it carries full AC and its countable-choice
  consequences.
- Published suppliers inspected for the Fox-cover argument:
  `def-one-variable-alexander-module-of-an-oriented-link`,
  `def-alexander-polynomial-from-the-first-elementary-ideal`,
  `def-elementary-ideals-of-a-finitely-presented-module`,
  `def-the-laurent-polynomial-ring`,
  `thm-cellular-homology-computes-singular-homology`,
  `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, and
  `thm-seifert-van-kampen`. The module convention is ordinary `H1` of the
  infinite cyclic cover with positive meridian deck action; `E0` is generated
  by the determinant of a square presentation.

## Source reading and harvest

- Cattabriga–Francaviglia, *Knot Theory and Applications: Lecture Notes*, full
  PDF `https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf`: read the
  torus-slope conventions and sign boundary in §5.1 (printed pp. 26–27), the
  annulus/Van Kampen group route and full meridian/longitude derivation in
  §§5.1.6–5.2.4 (pp. 27–30), and the torus braid/Seifert-surface construction
  in §5.3.2 (pp. 31–32). The notes leave the exact genus as an exercise; its
  complete local proof is authored here.
- Calegari, *Introduction to Knot Theory* (Spring 2025), full PDF
  `https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf`: read Example 1.2,
  §§3.1–3.3 (pp. 21–30), and §4.3 (pp. 38–39). It supplies the torus-knot
  parameterization, Seifert-surface definition/construction, linking
  convention, and Alexander-polynomial/Fox-coloring context; it does not
  supply the torus-knot group or formula proof.
- Hatcher, *Notes on Basic 3-Manifold Topology*, full PDF
  `https://pi.math.cornell.edu/~hatcher/3M/3M.pdf`: read §1.2 (printed pp.
  13–14), including the model Seifert fibration and the distinction between
  multiplicity-one regular fibers and multiple/exceptional fibers.
- Stanford, *Knot Theory* lecture notes,
  `https://web.stanford.edu/~sfh/knot.pdf`: the complete indexed text of
  Exercise 9.3.3 and its solution was inspected. It computes the torus-knot
  Alexander polynomial by Fox calculus, derives the degree lower bound, and
  constructs the matching Seifert-algorithm upper bound. The direct PDF open
  endpoint rejected the 12.8 MB document for size; the indexed result supplied
  the full relevant page. The draft no longer cites this source: the Fox-module
  computation and degree argument are proved locally, and the required full
  texts are Cattabriga–Francaviglia and Calegari, with Hatcher and Akbulut–Ozbagci
  supporting the fibration and Hopf-plumbing claims. The unused-source attempt,
  search, alternatives, and affected item arguments are recorded in the
  `source_resolution_history` field in coverage; no result was dropped and no
  mathematical coverage was waived.

## Item authoring checkpoint

- `def-coprime-torus-knot` defines the oriented primitive slope on the standard
  Heegaard torus, reflection in the second complex coordinate, reversal, and
  noncoprime torus-link components. It uses the actual exterior, peripheral,
  and countable-choice definitions; its statement references Cattabriga–Francaviglia
  §5.1 and Calegari Example 1.2. Dependency level 2.
- `lem-torus-knot-unit-slope-is-unknot` constructs smooth isotopies to a core
  for either unit parameter, tracks the orientation sign, and uses an explicit
  orientation-preserving ambient rotation to correct the negative core. It
  invokes the actual isotopy-extension theorem; its exact inputs are the
  coprime-slope definition, unknot convention, and isotopy-extension supplier.
  Cattabriga–Francaviglia Remark 5.1.1 and
  Corollary 5.2.3 and Calegari Example 1.2 support the claim. Level 3.
- `lem-torus-knot-sign-changes-give-mirror-or-reversal` proves the parameter
  sign identities directly from the definition's parameterization and fixed
  reflection. It uses `def-coprime-torus-knot` and the inherited
  `def-countable-choice` hypothesis; Cattabriga–Francaviglia
  Proposition 5.1.4 and Lemma 5.1.5 are its source. Level 3.
- `lem-positive-torus-knot-hopf-plumbing-surface` identifies the positive
  torus braid, constructs its oriented braid surface, verifies the grid's
  positive Hopf plumbings, and computes its Euler characteristic and one
  boundary component. It uses the actual slope and Seifert-surface definitions.
  Sources: Cattabriga–Francaviglia §5.3.2, Calegari §3.2, and Akbulut–Ozbagci
  §2, printed pp. 324–326. Level 3.
- `thm-torus-knot-group-presentation` derives the group pushout by van Kampen,
  obtains the Seifert fibration from the weighted circle action, and proves the
  meridian/longitude words using the punctured Heegaard curve and exterior
  homology. Its definitions require countable choice, supplied from full AC;
  Hatcher §1.2 supports the multiplicity-one correction and Cattabriga–Francaviglia
  §§5.1.6–5.2.4 supplies the group and peripheral derivation. Level 4.
- `lem-torus-knot-alexander-polynomial-from-presentation` derives the cyclic
  cover chain complex, Fox boundary, cyclic Alexander module, and $E_0$ generator
  from the actual group theorem, exterior retraction, cellular-homology and
  Hurewicz suppliers, Alexander-module/elementary-ideal definitions, and the
  Laurent UFD result. Sources: Cattabriga–Francaviglia §§5.1.6–5.2.4 and
  Calegari §4.3. Level 5.
- `thm-torus-knot-alexander-and-genus-formulas` reduces signed exponents to
  absolute values, treats unit slopes, and proves the nonunit genus lower and
  upper bounds from the local Fox formula, mirror/reversal invariance, the
  Hopf-plumbing surface, and the Seifert determinant degree bound. Sources:
  Cattabriga–Francaviglia §§5.1.6–5.3.2, Calegari §§3.1–3.3 and 4.3, and
  Akbulut–Ozbagci §2. Level 13.
- `ex-knot-kt-16-worked-cases` computes the trefoil group, central fiber,
  meridian/longitude, Alexander polynomial and genus, then computes $T(1,5)$
  as the unknot. It uses the group/formula/unit-slope suppliers. Sources:
  Cattabriga–Francaviglia §§5.1.1, 5.1.6–5.2.4 and Calegari Example 1.2, §4.3.
  Level 14.
- `cex-knot-kt-16-boundary-case` verifies $T(2,2)$ is two parallel copies of
  $T(1,1)$ and therefore lies outside the coprime knot-genus theorem. It uses
  the actual link convention and formula hypotheses. Sources: Cattabriga–
  Francaviglia §5.1. Level 14.

## Transitive genus-interface audit

- The actual `def-oriented-seifert-surface` statement assumes ACω and defines
  the individual surface genus by $\chi=2-2g-b$. Its transitive
  `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`
  assumes the same ACω, gives the compact-surface normal form and Euler identity,
  and derives genus from finite cellulation and surface reductions; no stronger
  choice axiom is needed.
- `def-oriented-seifert-surface-and-knot-genus` assumes ACω and defines the
  minimum over the nonempty set of surface genera using
  `thm-every-oriented-knot-bounds-a-seifert-surface` and the published
  `thm-well-ordering-principle`. The latter's statement/proof is choice-free.
  The existence theorem's full proof uses ACω through regular projection and
  the disk-and-band construction. In the torus-knot theorem, the positive
  Hopf-plumbing lemma and the explicit unit-slope disk give nonempty genus sets
  directly in the two cases, while the genus definition supplies the declared
  minimum convention. No additional axiom branch is merged into full AC.
- The Axiom of Choice derivations actually used are full AC for the Alexander
  module/polynomial definitions and AC→ACω for exterior, isotopy-extension,
  surface, and genus interfaces. Source and proof contracts name these uses.

## Scoped checks and readiness

- `precheck`: 8/8 proof-bearing items pass. The unit-slope proof uses canonical
  phase numbering `1.1`, `1.2`, `2.1`; the Alexander helper defines its
  presentation complex and cover in the uninterrupted Statement, then derives
  the cellular differentials in dependency order.
- `proof-layout`: 9 assigned items checked, 37 numbered steps, 0 defects.
- `statement-first`: 9 assigned items checked, 0 defects. `rendercheck`: all 9
  items and both A/B page files checked, 0 errors and 0 warnings.
- Focused `depcheck`: all 9 item identities/dependencies and both assigned pages
  pass, with no dependency or page cycles. `manifest-deps` finds no missing
  arrays, manifest dependency arrays exactly match item frontmatter, and
  `manifest-integrity` reports 218/218 run items present with no additions.
- `content-policy`: 9 scoped items, 0 errors/warnings. Focused `citecheck`:
  9 items, 0 warnings. Strict proof contracts: 8/8 proof-bearing items, 0
  errors/warnings. Coverage: 2 pages, 17 harvested results, 0 errors/warnings.
- `source-fetch-check --stamp` and the follow-up check pass: all 6 coverage
  source entries are full-text fetch-verified; no source is dropped. Coverage
  records the unused Stanford candidate and its alternative source route.
- The recomputed item dependency levels for this batch remain
  `2,3,3,3,4,5,13,14,14`, with no Batch 70 level error or cycle. The whole-run
  `item-dependency-levels` command exits 1 with 68 errors on other, incomplete
  batches/pages; representative errors include empty inventories for
  `credible-sets-and-frequency-coverage-in-inverse-problems` and
  `satellite-knots-and-jsj-tori`, and unrelated recorded-level mismatches. No
  Batch 70 item is named in those errors.
- The whole-run `proof-contract-coverage` command cannot build its frontier
  scope because `khovanov-to-floer-spectral-sequence` has an empty inventory.
  Batch 70's own contract file covers all 8 proof-bearing assigned items under
  the strict contract checker; no other batch was edited to clear the run-wide
  blocker.
- All nine `step1-decisions.mjs record` entries are `ready`, `owner:false`, with
  each item's direct declared dependencies and evidence recorded. After the
  orientation and phase-label correction, the unit-slope lemma, its Alexander/
  genus consumer, the worked example, and the boundary counterexample were
  re-recorded against current hashes; the other five unchanged records remain
  intact. They certify
  Step 1 authoring completeness only; supplier drafts have not been accepted or
  independently approved. A focused snapshot/hash check reports 9/9 Batch 70
  records valid.

The A and B page files contain YAML frontmatter only, with empty Markdown
bodies. `page_layout` remains unset for the engine's post-authoring
`compact-v1` transition. No item or page is published, and no shared plan,
engine state, or owner verdict was changed.
