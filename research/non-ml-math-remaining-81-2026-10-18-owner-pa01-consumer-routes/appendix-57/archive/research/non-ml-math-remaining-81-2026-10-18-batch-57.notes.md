# Batch 57 authoring notes

Run `non-ml-math-remaining-81-2026-10-18`; batch 57 is dependency level 1 and
requires batch 32. The dispatched scheduling input is
`7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`.

## Plan and design reconciliation

- The controlling design is PA-26 in `research/plan-physics-algebras-track.md`
  (the Temperley–Lieb entry identified at line 62); the complete design record
  is in `research/physics-algebras-planning-2026-10-17/dossiers/01-temperley-lieb.md`,
  `definition-and-diagram-contracts.md`, `prerequisites.md`, and the PA-26 rows
  of `proposed-pages.json` and `splice/placed-pages.json`.
- The page proves the ring-level diagram construction and associativity, local
  generator relations, Jones normal-form spanning and Catalan count, diagram
  generation, and the diagram/presentation isomorphism. It does not claim
  cellularity, standard modules, semisimplicity, Jones–Wenzl projectors, trace
  descent, root-of-unity classification, or physical realizations. The localized
  Hecke quotient remains a separate partial supplier with its own parameter
  conversion.
- Conflict recorded: the original proposed-page row lists only
  `algebraic-representation-and-tensor-symmetry-map` as a formal prerequisite
  and treats the Hecke, Catalan, and tensor pages as navigation context. The
  current `plan-spec.json` and generated batch manifest list all four in
  `requires`. The current plan controls; all four page routes remain in the
  manifest. Logical item dependencies are listed separately below and in the
  scaffold manifest.
- The added category-law, diagram-count, local-relation, and generator-span
  items are local intermediate results required to discharge the design's
  three core obligations; they do not expand the later representation-theory
  scope.

## Inventory and dependency levels

The manifest was populated before the carriers. Its local item graph is acyclic.

- Level 0: `def-temperley-lieb-diagram-category`,
  `def-temperley-lieb-generator-presentation`.
- Level 1: `thm-temperley-lieb-diagram-category-laws`,
  `thm-temperley-lieb-diagrams-have-catalan-cardinality`,
  `thm-temperley-lieb-generator-normal-form`.
- Level 2: `lem-temperley-lieb-generators-satisfy-local-relations`,
  `thm-temperley-lieb-diagram-generators-span`.
- Level 3: `thm-temperley-lieb-presentation-isomorphism`.
- Level 4 on the B page:
  `ex-temperley-lieb-ranks-zero-through-two`,
  `ex-temperley-lieb-three-strand-normal-forms`, and
  `cex-temperley-lieb-zero-loop-generator-is-zero`.

The definitions introduce raw diagram data before the category-law theorem,
avoiding a circular definition/justification dependency. The A8 isomorphism
proof uses a surjective map between finite free modules of the same positive
Catalan rank, then the determinant criterion over a commutative ring. Its
finite choice of preimages is choice-free in the sense that it selects from
only a finite basis.

## Supplier checks and unresolved route

- Read the actual published `lattice-paths-and-catalan-numbers` page and the
  Catalan, Dyck-path, balanced-bracket count, and ballot-word equivalence
  suppliers. They support the direct path/count claims; the diagram and
  normal-form bijections are proved locally.
- Read the complete actual generic Coxeter–Hecke page and its standard-basis
  theorem. The Hecke route is contextual only; no Hecke basis or localization
  result is used to prove the classical Temperley–Lieb isomorphism.
- Read the actual `tensor-and-fusion-categories` page and the exact category
  prerequisites `def-category`, `def-product-category`,
  `def-functor-and-contravariant-functor`, `def-natural-transformation`,
  `def-natural-isomorphism`, `def-monoidal-category`, and
  `def-algebra-over-a-commutative-ring`. The A-page proof tags morphisms by
  endpoints and verifies the bifunctor, naturality, pentagon, triangle, and
  central scalar-map requirements. The locally defined category is linear over
  an arbitrary commutative ring and is not claimed to satisfy the field,
  abelian, rigidity, or finiteness assumptions of a tensor/fusion category.
- For the all-ring independence argument, read the actual free-module and
  universal-property suppliers, matrix definition/product laws, determinant
  definition and multiplicativity theorem, and the positive-size
  determinant-unit criterion. The proof uses the commutative-ring hypotheses
  directly and checks the positive matrix size from the identity diagram.
- Read the complete published
  `def-temperley-lieb-quotient-and-jones-specialization` carrier. It proves a
  localized Hecke quotient after adjoining parameters and rescaling; it does
  not identify the classical diagram algebra, prove its Catalan basis, or prove
  trace descent. The A page records this boundary and does not use it as a
  substitute.
- The required batch-32 page
  `algebraic-representation-and-tensor-symmetry-map` currently has an actual
  draft page body with `items: []`. No exact theorem/interface hypothesis is
  declared by the controlling plan. This page-level route remains open in
  `non-ml-math-remaining-81-2026-10-18-batch-57.cross-batch-dependencies.json`.
  No A-page claim uses an absent batch-32 item, so authoring continued without
  inventing a supplier excerpt or claiming that route verified.

## Sources and reading history

Four complete full-text sources were retrieved and inspected. Two independent
Temperley–Lieb treatments were read in full over the relevant arguments, with
Guichard's complete textbook supplying the required book treatment:

- Ridout–Saint-Aubin, complete 51-page PDF; read §2, including Lemmas 2.1–2.2,
  Proposition 2.3 and its proof, the corner/path bijection, and the dimension
  comparison. Its isomorphism argument is over `C`; the arbitrary-ring claim is
  proved locally.
- Ernst–Hastings–Salmon, complete 23-page publisher PDF; read §§2–4, including
  the diagram model, Proposition 3.6's stated basis route, simple-diagram
  relations, and the full diagram-factorization algorithm. The source's
  fully-commutative basis route is recorded as context, not used in place of
  the local all-ring proof.
- Guichard, complete 155-page textbook PDF; read §3.5, printed p. 69, for the
  Catalan convention and matched-parenthesis count. The diagram-to-word and
  word-to-path bijections are proved locally.
- Jones, complete 21-page author-hosted notes; read §3, printed pp. 6–8, for
  the idempotent normalization and reduced-word upper-bound convention. The
  notes cite an external equality result, which is not treated as a proof
  premise.

All four sources passed `source-fetch-check --stamp`; the exact URLs, item
coverage, locators, retrieval timestamps, byte counts, hashes, and page counts
are in `non-ml-math-remaining-81-2026-10-18-batch-57.coverage.json`. No used
source fetch failed and no used source was dropped. A candidate Martin lecture
PDF fetched as an 18-page excerpt but omitted the relevant Temperley–Lieb
chapter; an official Springer chapter page exposed only a restricted preview.
These were not included as proof sources. The complete alternative treatments
above were retrieved, so no source claim depends on those candidates.

## Scoped results

The final checks were run after the last item and page edits:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 11 assigned items: 9
  proof-bearing items checked, 0 failures or repairs; the two definitions have
  no proof phase.
- `node tools/proof-layout.mjs` on the 11 changed items: 34 numbered steps,
  0 defects.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-57.proof-contracts.json --strict`:
  11/11 contracts checked, 0 errors and 0 warnings.
- `node tools/rendercheck.mjs` on the 11 items and both assigned pages: 13
  files checked, no delimiter, multiline-display, KaTeX, wikilink-in-math, or
  renderer-YAML defects.
- Focused `depcheck` on the 11 items and their two pages: 0 errors and 0
  warnings. Focused `extcheck`: 11 items, 0 errors and 0 warnings.
- Batch-local dependency levels: all 11 items pass; maximum item level 4.
  A separate inventory consistency check confirmed all carrier IDs, kinds,
  titles, direct dependencies, levels, page placements, and source-coverage
  mappings agree with the batch manifest.
- `source-fetch-check --stamp`: all 4 full-text sources fetch-verified and
  resolved; 0 new stamps were needed and 0 sources were dropped.
- `step1-decisions record`: all 11 assigned items recorded `ready` with their
  examined direct dependency IDs and current evidence. The open batch-32
  page-level route is recorded separately; no assigned item claim consumes an
  absent batch-32 theorem.

The latest run-wide dependency-level check remains red outside this pair: 102
errors, all empty scaffold inventories on other assigned pages; it reported 0
duplicate item placements, 0 dependency-level mismatches, and 0 batch-57
findings. Empty-inventory examples include
`rate-distortion-and-lossy-source-coding`,
`temperley-lieb-cellularity-and-representation-theory`, and
`yangians-quantum-affine-and-transfer-matrices`. No other pair's files were
edited. The latest run-wide Step-1 decision check is still open: 251/546 items
ready, 397 outstanding, with 0 outstanding items in batch 57. Those outstanding
records belong to other batches and were not edited here.
