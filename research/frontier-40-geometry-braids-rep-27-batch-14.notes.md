# Batch 14 notes — `lie-algebras-and-infinitesimal-group-schemes`

Run `frontier-40-geometry-braids-rep-27`, batch 14 (beta, Step 1 scaffold).
Pair orders 875/876, category `scheme-theory`.
Owned outputs written: the populated manifest, the coverage record, 13
item-readiness records and the consumer-batch dependency input. No published
content, shared plan, engine state or verdict was edited.

## What was read before construction

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`; the engine task for this batch.
- `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (binding: 27 selected pairs, in-run lower-order dependencies on other
  selected pairs allowed, publication and pushing stay owner actions).
- The design section: `research/plan-algebraic-geometry-expansion-track.md`,
  section **AG-GS-3** (line 204), whose page row is the L31 id mention.
- Current plan: `research/plan-spec.json` rows 875/876; the run scope ledger
  and `drift-evidence.json` (this page's declared requires and design locator).
- The supplier batch-13 manifest (`...-batch-13.pages.json`), its coverage,
  notes and readiness records, and the published supplier items named in the
  item records.

## Design versus plan

No conflict found at the page level. The plan row reproduces the design's pair
ID, order 875/876, category, companion and required pages; the plan's
`requires` adds the published Kähler page to the design's "Requires AG-GS-1/2",
which is consistent: the Kähler/conormal page is the published supplier of the
cotangent-space and tangent-vector machinery used by the Lie-algebra
definition.

Inventory alignment. The design's exact A inventory
(`def-lie-algebra-of-a-group-scheme`;
`thm-lie-bracket-and-adjoint-action-from-infinitesimals`;
`thm-cartier-smoothness-for-affine-groups-in-characteristic-zero`) and B
inventory (`ex-lie-algebras-of-alpha-p-mu-p-and-gl-n`;
`cex-lie-algebra-does-not-detect-nonsmooth-group-scheme`) are preserved
verbatim, with the same IDs. Local prerequisites without which those claims
cannot be stated or proved are added on the A page (the tangent-space vector
structure and functoriality, the adjoint representation, the GL_n computation,
the invariant-differentials lemma and the characteristic-zero
regularity/smoothness chain) and on the B page (the explicit construction of
G_a, alpha_p and mu_p, which the design's B inventory presupposes). No promised
claim was weakened and no inventory was padded: each added item is consumed by
a listed item.

Two recorded deviations, both scaffold decisions for owner reconciliation:

- **Cartier route.** The design's source note names M22 Theorem 3.23 (the Oort
  nilpotent argument) for Cartier's theorem. The local proof of
  `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` instead
  follows Stacks 39.8.2 through this page's invariant-differentials lemma and
  the characteristic-zero criterion
  `thm-smoothness-over-characteristic-zero-via-free-differentials` (Stacks
  Varieties 25.1 and Algebra 10.140.4/10.140.6/10.140.7). Reason: Milne's
  proof needs his Proposition 1.37 and Appendix A.52, a scheme-level
  dimension/tangent smoothness criterion that is not published locally as an
  item, whereas the Stacks route reuses machinery this pair already builds.
  Milne 1.28/1.37, 3.19-3.22 and Theorem 3.23 were read in full and are
  recorded as the independent complete alternative treatment in the coverage
  file. The design's exact scope is preserved: affine groups, characteristic
  zero only, with the positive-characteristic failure exhibited on the B page.
- **Stronger general form not claimed.** Stacks 39.8.2 covers locally algebraic
  (not necessarily affine) group schemes in characteristic zero. The item
  states the design's affine form; the general form is recorded in the
  coverage record but deliberately not claimed, so that no proof obligation is
  added beyond the assigned pair.

The design's warning that Stacks 39.6.3 [047I] and 39.6.4 [0BF5] "support the
underlying tangent module, not the Lie bracket or adjoint commutator proof" is
respected: the bracket and adjoint items rest on M22 10.18-10.23 and SGA 3
Expose II §4, and the Stacks lemmas appear only in the tangent-space and
invariant-differentials items.

The design's "second-source gate remains for the bracket" is closed by SGA 3,
Expose II (M. Demazure), §4, read in full: Definition 4.7.2, statement 4.7.3
with note (79) (bracket as the commutator of independent lifts, functoriality
and skew-symmetry), Proposition 4.8 (Ad(g)Y = g o Y o g^{-1},
[X,Y] = X o Y - Y o X), Corollaire 4.8.1 (Jacobi) and Scholie 4.9. Milne's
corresponding treatment (10.18-10.23) is the other independent route.

## Sources (full text fetched, extracted and read)

1. J. S. Milne, *Algebraic Groups* (corrected 2022 printing, CUP),
   <https://www.jmilne.org/math/Books/iAG2022.pdf>. Full text downloaded
   (4,838,013 bytes, SHA-256 `f2ddd8fa…f21f40`, 659 pages) and read over Ch. 1
   §1(b) Propositions 1.28/1.37 (printed pp. 17-18), Ch. 2 §2.1-2.5 (printed
   pp. 39-41, 44), Ch. 3 §3(g) Lemmas 3.19-3.22, Theorem 3.23 and Corollary
   3.24 (printed pp. 69-72), and Ch. 10 §10(a)-(h) (printed pp. 186-196),
   including Definitions 10.1/10.5/10.6/10.11, 10.14-10.23 and Propositions
   10.28-10.29.
2. SGA 3, Expose II (M. Demazure), *Fibres tangents - Algebres de Lie*,
   corrected 14 October 2024 edition,
   <https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp2-14oct24.pdf>. Full text
   downloaded (504,805 bytes, 52 PDF pages) and read over §3.6-3.11, §4.1-4.5,
   Definition 4.6, Lemme 4.6.2, Theoreme 4.7 and §4.7-4.9, printed pp. 53-88.
   This is the independent full treatment of the adjoint representation and
   the bracket.
3. The Stacks Project, *Groupoid Schemes*
   (<https://stacks.math.columbia.edu/download/groupoids.pdf>; 635,545 bytes,
   55 pages), read over Lemmas 39.6.3 [047I], 39.6.4 [0BF5], 39.8.1 [045X],
   39.8.2 [047N], Remark 39.8.3 [047O], Lemma 39.8.4 [047P] and §5 examples.
4. The Stacks Project, *Varieties*
   (<https://stacks.math.columbia.edu/download/varieties.pdf>; 997,886 bytes,
   113 pages), §25 Lemma 25.1 [04QN] and Lemma 25.2 [04QP] with their proofs.
5. The Stacks Project, *Commutative Algebra*
   (<https://stacks.math.columbia.edu/download/algebra.pdf>; 2,828,052 bytes,
   469 pages), §10.140 Lemmas 10.140.3-10.140.7 [00TT-00TX]; 10.140.4,
   10.140.6 and 10.140.7 and their proofs read in full.

All 8 coverage source entries are fetch-verified by
`source-fetch-check --stamp` (bytes, page counts and SHA-256 prefixes are in
the coverage file). The coverage record disposes 51 headings of these sources;
the declinations (Milne's Corollary 3.24, 10.8-10.10, 10.15-10.17 and §10(e)-(h);
Stacks 39.8.1/39.8.3/39.8.4, Varieties 25.2, Algebra 10.140.3/10.140.5; the
relative derived-morphism calculus of SGA 3 §4.2-4.3) each carry a specific
reason, and every consumed heading names the item that absorbs it.

## Inventory (11 A + 3 B items, built once in prerequisite order)

| level | item | kind | role |
|---:|---|---|---|
| 0 | `def-lie-algebra-of-a-group-scheme` | definition | design item: tangent space at the identity, cotangent and dual-number descriptions |
| 0 | `lem-invariant-differentials-of-a-group-scheme` | lemma | Stacks 39.6.3: Omega_{G/k} = f^*e^*Omega_{G/k}, free over O_G |
| 0 | `lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors` | lemma | Stacks 10.140.6: theta(df) = 1 forces f nonnilpotent / a nonzerodivisor |
| 1 | `lem-lie-algebra-tangent-space-and-functoriality` | lemma | vector-space structure, g(R) = g tensor R, functoriality, injectivity on closed immersions |
| 1 | `lem-free-differentials-imply-regular-in-characteristic-zero` | lemma | Stacks 10.140.7: free Omega implies regular local ring in characteristic zero |
| 2 | `lem-adjoint-representation-of-an-affine-group-scheme` | lemma | Ad: G -> GL_g via conjugation, with the exponential identity and naturality |
| 2 | `thm-smoothness-over-characteristic-zero-via-free-differentials` | theorem | Stacks Varieties 25.1: locally finite type + locally free Omega + char 0 implies smooth |
| 3 | `lem-lie-algebra-of-the-general-linear-group` | lemma | Lie(GL_n) = gl_n, commutator of lifts, Ad(A)X = AXA^{-1} |
| 3 | `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` | theorem | design item: Cartier's theorem in the exact affine characteristic-zero scope |
| 5 | `thm-lie-bracket-and-adjoint-action-from-infinitesimals` | theorem | design item: ad = Lie(Ad), bracket by the dual-number commutator, Jacobi, GL_n and uniqueness |
| 2 | `ex-additive-and-infinitesimal-group-schemes` | example | G_a, alpha_p and mu_p with their Hopf algebras and points |
| 6 | `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` | example | design B item: one-dimensional Lie algebras of G_a, alpha_p, mu_p and gl_n |
| 7 | `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` | counterexample | design B item: alpha_p is nonsmooth with the Lie algebra of the smooth G_a |

The additions beyond the design's three A and two B items are necessary local
prerequisites, each consumed by a listed item. The A-page chain for Cartier is:
free differentials (invariant differentials) plus the characteristic-zero
criterion; that criterion is proved from the free-differentials/regularity
induction, the perfect-base Jacobian local-chart theorem, and the standard
smooth/geometric-regularity dictionary.

No page split is required: 11 + 3 items against the 100-item cap.

## Dependencies, well-definedness and choice

- Every `deps` target resolves to a published item at HEAD or to an item of the
  in-run supplier batch 13 (scaffolded, all readiness records recorded). The
  key published suppliers actually read are `def-group-scheme-over-a-field`,
  `def-relative-cotangent-space`, `thm-cotangent-space-maximal-ideal-quotient`,
  `thm-tangent-vectors-dual-numbers`, `lem-differentials-commute-base-change-schemes`,
  `lem-ag-separable-residue-cotangent-sequence`, `thm-nakayama-lemma`,
  `thm-quotient-and-lifting-regularity-across-a-regular-element`,
  `thm-conormal-exact-sequence-algebra`, `thm-ag-perfect-field-jacobian-regularity`,
  `thm-ag-standard-smooth-geometric-regularity`,
  `thm-ag-separating-transcendence-basis-perfect-field`,
  `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented`,
  `cor-minimal-generators-over-a-local-ring`,
  `cor-noetherian-modules-are-hopfian`,
  `thm-krull-intersection-theorem`, `lem-regular-local-domain-induction`,
  `def-ag-geometrically-regular-algebra-and-fibre`,
  `thm-differentials-smooth-locally-free`, `def-smooth-morphism-schemes`,
  `def-ag-geometrically-regular-algebra-and-fibre` and the published
  `def-lie-algebra-over-a-field`.
- Dependency levels were validated by
  `item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`:
  28 errors, all `empty scaffold inventory` for pages of other in-flight
  batches; **no error names any page or item of batch 14**, so the labels
  0,0,0,1,1,2,2,3,3,5 and 2,6,7 agree with the run-wide computation. (A
  computation restricted to this batch's manifest alone is not the authority:
  its in-run suppliers live in batch 13's manifest.)
- No cycle, no forward edge, no B-page supplier for an A item, and no item
  depends on a `proved_here: false` result. No dependency path reaches
  `deferred-set-theory-beyond-choice`.
- Axiom of Choice. Declared and identified exactly where inherited:
  `thm-lie-bracket-and-adjoint-action-from-infinitesimals` (only in clause (e),
  through batch-13 `thm-affine-group-scheme-faithful-finite-dimensional-representation`);
  `lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors`
  (only in the nonzerodivisor statement, through
  `thm-krull-intersection-theorem`);
  `lem-free-differentials-imply-regular-in-characteristic-zero` (through
  `thm-nakayama-lemma`, `cor-minimal-generators-over-a-local-ring`,
  `cor-noetherian-modules-are-hopfian` and
  `thm-quotient-and-lifting-regularity-across-a-regular-element`);
  `thm-smoothness-over-characteristic-zero-via-free-differentials` and
  `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` (through
  the preceding item and `thm-ag-perfect-field-jacobian-regularity` and
  `thm-ag-standard-smooth-geometric-regularity`); and
  `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` (through
  `lem-regular-local-domain-induction` and
  `thm-ag-standard-smooth-geometric-regularity`). Every other item of the pair
  — the definition, the tangent-space/functoriality lemma, the adjoint
  representation, the GL_n computation, the invariant-differentials lemma,
  `ex-additive-and-infinitesimal-group-schemes` and
  `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` — is choice-free and is scoped
  that way.

## Published observations for the canonical ledger (no repair attempted)

- Placement observation: the published B-homed example
  `ex-additive-multiplicative-and-general-linear-group-schemes` (on
  `group-schemes-of-finite-type-over-a-field-examples`) already constructs G_a,
  G_m and GL_n, but it is homed only on a B page, so SCHEMA forbids using it as
  a dependency of another page. The B page therefore builds its own explicit
  construction `ex-additive-and-infinitesimal-group-schemes` (as batch 13 did
  for GL_n), and alpha_p/mu_p have no A-homed construction at all. The owner
  may prefer to re-home an A-level construction so that later pairs can cite
  one. Evidence: the item appears only in the `examples` list of its B page.
- Scope observation (no defect): `def-lie-algebra-over-a-field` is already
  published on `lie-algebra-representations-enveloping-algebras-and-pbw`; this
  batch consumes it instead of minting a duplicate, and the bracket theorem's
  statement depends on it. Nothing in that item conflicts with the
  characteristic-free use here (its alternation axiom and Jacobi identity are
  exactly what the bracket theorem proves).
- The design's caution that the published AG-LIE faithful-representation item
  is over C and "is not this general supplier" is preserved: no item of this
  batch depends on it; the arbitrary-field supplier is the batch-13 theorem.
- `tools/extcheck.mjs` exits 0 and reports 40 pre-existing
  `unproved-on-published` warnings across the corpus (for example
  `thm-urysohn-lemma`, `thm-bing-metrization`). None of them is attributable to
  this batch and none blocks construction; they are recorded here as
  outside-scope corpus observations for the owner, not repaired.

## Cross-batch ledger

`research/frontier-40-geometry-braids-rep-27-batch-14.cross-batch-dependencies.json`
has 9 rows: the page edge to
`affine-group-schemes-hopf-algebras-and-rational-representations` (supplier
batch 13) and the eight item edges to batch-13 items
(`lem-general-linear-group-scheme-and-its-coordinate-ring` for four consumers,
`lem-hopf-ideal-kernels-and-quotients` and
`def-commutative-hopf-algebra-over-a-field` and
`lem-quotient-spectrum-map-is-a-closed-immersion` for the B-page construction,
and
`thm-affine-group-scheme-faithful-finite-dimensional-representation` for the
uniqueness clause). All rows are `open` with the exact required claim, use and
owner, because the supplier proofs are not authored yet; they are reviewed at
the Step-3 gate. The unified ledger was refreshed with
`frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`.
It also shows one declared consumer of this pair,
`split-reductive-root-systems-bruhat-cells-and-parabolics` (batch 19), which the
design's AG-GRP-4 requires AG-GS-1--3; that row belongs to batch 19's input and
carries no review yet.

## Checks actually run (exact results at the time of writing)

- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  → exit 1; at the final snapshot 26 errors, all `empty scaffold inventory`
  for pages of other in-flight batches; zero errors naming any batch-14 page
  or item (earlier snapshots during this session had 28 or 30 such sibling
  findings as other batches progressed).
- `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27`
  → 361 items, 315 ready at the final snapshot; no batch-14 row in `work` (all
  13 readiness records
  close; the remaining rows are other batches' missing records). After a
  dependency refinement of the characteristic-zero regularity and smoothness
  items (adding the basis-extension, Hopfian, geometric-regularity and
  regular-local-domain suppliers
  `cor-minimal-generators-over-a-local-ring`, `cor-noetherian-modules-are-hopfian`,
  `def-ag-geometrically-regular-algebra-and-fibre` and
  `lem-regular-local-domain-induction`), the three affected readiness records
  were re-recorded against the current hashes; the check above is from after
  that refresh.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-14.coverage.json`
  → `2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-40-geometry-braids-rep-27-batch-14.coverage.json --stamp`
  → `8/8 source(s) fetch-verified (8 newly stamped)`; check mode → `8/8
  source(s) resolved (0 documented drops)`.
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-14.pages.json`
  → `13 item(s), 0 normalized, 0 error(s)`.
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-*.pages.json`
  (whole run) → `361 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-13.pages.json research/frontier-40-geometry-braids-rep-27-batch-14.pages.json`
  → `28 scoped item(s), 0 error(s), 0 warning(s)`. (Batch 14 alone cannot pass
  `--manifest-only`, because its in-run suppliers are declared in batch 13's
  manifest; the two-batch invocation is the meaningful scope.)
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json`
  (whole run) → `361 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27`
  → `54 page(s) owed, 54 in the manifests`, `no scope drift`, exit 0.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (247 planned
  pages still carry no item list, as expected mid-scaffold).
- `node tools/extcheck.mjs` → exit 0 (`OK — every recorded-not-proved statement
  is a cited remark with no proof, and every consequence is marked`), with the
  40 pre-existing corpus warnings noted above.
- `node tools/fwdcheck.mjs` → `OK — every forward reference is declared, points
  strictly forward, is closed by a planned later page, stays off the spine
  unless orientation only, and introduces no cycle`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
  → `refreshed and deduplicated`.

## Escalations and unresolved findings

None for this pair. All 13 items are recorded `ready` with complete proof
strategies and met prerequisites (published suppliers, or batch-13 items whose
readiness records are recorded and whose scaffold this batch waited for). No
new pair or cross-batch prerequisite is needed, no page split is required, and
no source was dropped or escalated. Owner/operator reconciliation and the full
engine gate follow; these readiness records are not independent mathematical
approval. Step 3 provides the authoring and review.
