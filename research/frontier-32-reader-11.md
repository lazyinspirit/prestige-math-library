# Frontier 32 — Independent reader report, batch 11

## Scope opened

- Manifest and current contracts: `research/frontier-32-batch-11.pages.json` and
  `research/frontier-32-batch-11.proof-contracts.json`.
- A page: `library/algebraic-geometry/products-segre-and-veronese-embeddings-and-grassmannians.md`;
  its 25 in-flight items were opened in full.
- B page: `library/algebraic-geometry/products-segre-and-veronese-embeddings-and-grassmannians-examples.md`;
  its eight items were opened in full.
- Dependency closure: all 44 current item paths reached by the manifest (including the
  33 assigned items) were opened. In particular, I checked the affine coordinate-ring
  product, homogeneous-coordinate, exterior-power, projective-variety, and fibre
  interfaces actually used by the arguments.
- Sources: the complete current Milne v6.10 (231 pages) and MIT 18.725 (63 pages) PDFs
  were opened. The relevant current locators include Milne Proposition 5.20 (affine
  products and irreducibility), pp. 112--113 (classical fibred products and their
  reduced-coordinate limitation), and Proposition 6.29 (Plucker closed image), together
  with MIT Lecture 7 Proposition 8 (Segre/projective products) and Lecture 4's
  Grassmannian charts.

## Review log

All 25 A items and all eight B items were independently read, including statements,
coordinate calculations, endpoint conventions, provenance, and the 19 proof contracts.

- The affine product, Segre, Veronese, Plucker, chart, incidence, graph, diagonal,
  multihomogeneous, and Segre--Veronese arguments type-check after the edits below.
  The affine tensor-product domain hypothesis is retained; the Segre rank-one recovery
  uses a genuinely nonzero pivot; and the Plucker endpoint cases are now explicit.
- The B calculations for the Segre quadric, Veronese conic, Klein quadric, Grassmannian
  endpoints, tensor-product counterexample, and bidegree map are mathematically sound
  subject to the two B-page defects recorded below.
- Dependencies support the current conventions: a classical affine/projective variety is
  nonempty and irreducible; product-topology basic opens are products; the exterior
  annihilator recovers a decomposable wedge's span; and a homogeneous tuple needs a
  common degree and no common zero.

## Edits

All edits were confined to in-flight A items and the associated proof contract; no
published item, B-page body, another batch, plan, or judge stamp was changed.

- `items/lem-affine-product-topology-not-product-topology.md`: replaced the invalid
  empty-interior argument with the required argument at an off-diagonal point: every
  cofinite basic neighbourhood meets the diagonal. Updated its contract's calculation
  description.
- `items/cor-projective-variety-product-exists.md`: separated the universal-property
  conclusion from the required irreducibility proof. The added intersecting affine-chart
  cover proves that the closed Segre model is a projective variety; its direct dependency
  list now includes the affine-product theorem. Updated its proof contract with step 4.1.
- `items/thm-plucker-image-closed.md`: corrected the title and statement to the proved
  closed projective algebraic-set assertion and handled $r=0,n$ directly. The next
  corollary now records that its irreducibility proof upgrades this Plucker model to a
  subvariety. Updated both relevant contracts.
- `items/def-base-change-classical-varieties.md`: corrected the category and output from
  “a variety” to a classical algebraic set. A pullback of varieties need not be
  irreducible (for example, the equalizer $x^2=y^2$), and may be empty; the definition
  now says this explicitly while retaining the restricted constructed-pullback scope.

No changed item contained a stale `verification.judge` record to remove.

## Uneditable findings

- `items/cex-zariski-product-topology-too-coarse.md`, Counterexample steps 2.1--3.1:
  the proof only shows that the diagonal has empty interior, then concludes that it is
  not closed. That inference is invalid. The intended result is true, but needs the
  off-diagonal-neighbourhood argument used in the repaired A lemma. This B item cannot
  be edited by this role.
- `items/ex-incidence-point-hyperplane.md`, final sentence: at $n=0$, the sole point of
  $\mathbf P^0$ lies on no hyperplane; the incidence locus and both described fibres are
  empty, not one point. The claimed endpoint exception is false. This B item cannot be
  edited by this role.

## Page verdicts and blocker

- A `products-segre-and-veronese-embeddings-and-grassmannians`: **pass after repair**.
- B `products-segre-and-veronese-embeddings-and-grassmannians-examples`: **fail** due to
  the two uneditable B-item findings above (one fatal false endpoint claim, one nonfatal
  proof inference).
- Blocker: B prose is outside the reader's edit authority; both defects are routed in the
  findings JSON.

## Validation

- PASS — `node tools/tsx-run.mjs tools/reflow.mts` on each of the five changed items.
- PASS — focused `precheck` on the four proof-bearing changed items: 4 checked, 0 failing.
- PASS — strict `proof-contract` check: 19/19 items, 0 errors, 0 warnings.
- PASS — `content-policy` for this manifest: 33 scoped items, 0 errors, 0 warnings.
- PASS — `manifest-deps`: 33 items, 0 normalized, 0 errors.
- PASS — `git diff --check`.
- The first attempted reflow command used the nonexistent `tools/reflow.mjs`; the
  documented `tools/tsx-run.mjs tools/reflow.mts` invocation above then completed and
  left all five files correctly reflowed.
