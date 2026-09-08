# Phase-2 expansion consumer audit

Snapshot: 2026-09-08. Read-only audit of the working-tree
`phase-2-build-manifest.md`, `published-consumer-supplier-ledger.md`,
`plan-spec.json`, the live item/page graph, and the binding category scaffolds.
No workflow or canonical content was changed.

## Verdict

The **122-pair set is an exact closure of the current literal page
`requires` graph, but it is not an exact mathematical supplier closure and is
not sufficient by itself to certify that all known published-item repairs can
be completed.**

The 52-pair expansion starts from twelve published-page-to-unpublished-page
edges. Binding scaffolds already adjudicate nine of those twelve edges as
placement/B-page artifacts that must be deleted or replaced. Only two are
genuine mathematical page inputs. The last is the ordinary companion edge
from a published B page to its still-draft A page, not a published consumer
repair root. Consequently the expansion substantially overbuilds if treated
as a repair closure.

Conversely, the ledger deliberately excludes additions to already-published A
pages from Phase 2. Those local additions include load-bearing suppliers for
known repairs. Publishing 122 new pairs therefore cannot, without the Phase-3
insertions and edge rewrites, retire every recorded or otherwise inadequate
input. The Strong Perfect Graph Theorem seam remains an explicit unresolved
blocker as well.

## The twelve expansion edges

| current published-page edge | disposition | evidence / correct contract |
|---|---|---|
| `affine-algebraic-sets-and-coordinate-rings` -> `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | **artifact; delete** | Algebraic Geometry's binding A-only matrix gives this page exactly `noether-normalisation-and-nullstellensatz`. Characteristic classes have no role in the affine zero-locus/coordinate-ring proofs. |
| `regular-local-rings-and-homological-dimension` -> `tor-flatness-and-global-dimension` | **genuine A input** | Commutative Algebra CA-18 explicitly requires HA-10 for Tor, projective/flat/global dimension and minimal-resolution interfaces. Keep an A-only edge. The current consumer items happen already to cite published homological-algebra items, so Phase 3 must also reconcile the present rehoming/duplication rather than assume page publication alone repairs them. |
| `the-riemann-zeta-function` -> `tempered-distributions-and-the-fourier-transform` | **genuine A input** | Complex Analysis CA-22 assigns Gaussian Fourier transform/Poisson summation and the theta transformation to FA-23/FA-25. The current `thm-jacobi-theta-transformation` instead imports Gaussian Poisson summation as unlinked source fact `[L3]`; this is exactly the proof interface the FA page is meant to supply. |
| `morse-critical-points-hessians-and-indices` -> `moment-maps-and-symplectic-reduction-examples` | **artifact; replace** | Differential Topology §12.7 calls it an order anchor, not mathematics. Its binding A array instead names tangent/rank/vector-bundle/transversality, DG metric and connection, bilinear-form, and compactness A pages. |
| `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` -> `itos-formula-and-brownian-martingales-examples` | **artifact; delete** | Fourier §Probability reconciliation states that the page has zero Probability item dependencies and orders deletion with no replacement. |
| `crossed-homomorphisms-complements-and-first-cohomology` -> `grothendieck-spectral-sequences-and-computations-examples` | **artifact; replace** | Group Theory's binding matrix gives GT-21 the A inputs `group-extensions-complements-and-schur-zassenhaus` and `group-cohomology-as-a-derived-functor`. HA-17 is used by later GT-22, not by GT-21, and no B page is a supplier. |
| `group-cohomology-as-a-derived-functor` -> `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples` | **artifact; replace** | Homological Algebra HA-12 requires `ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, and `the-group-algebra-and-representations`. HA-11a supplies a later Algebraic Topology Kunneth repair, not group cohomology. |
| `tor-flatness-and-global-dimension-examples` -> `tor-flatness-and-global-dimension` | **structural companion edge** | This is the required singleton B-to-own-A edge. It is not evidence that HA-10 is directly consumed by a repaired published theorem. The mixed state is unusual: B and its items are published while A remains draft, although HA-10 A items are already published. |
| `harish-chandra-isomorphism-casimir-and-central-characters` -> `real-forms-and-real-semisimple-lie-algebras-examples` | **artifact; replace** | Lie Representation §Binding page order says DG-34 B is only a physical splice anchor and supplies no analytic representation theory. RL-1 is self-contained now and later requires the new A page `finite-weyl-invariants-bruhat-and-kostant-harmonics`. |
| `partial-differential-equations-and-characteristics` -> `itos-formula-and-brownian-martingales-examples` | **artifact; delete** | PDE §§10.1 and 12.9 say this is unpublished, not a mathematical supplier, and has zero item-level impact. The binding replacement array contains elementary analysis, ODE, linear algebra and inverse-function inputs instead. |
| `probability-spaces-random-variables-and-expectation` -> `tempered-distributions-and-the-fourier-transform-examples` | **artifact; delete** | Probability's A-only contract makes PT-1 foundational probability/measure theory. The B page is an old placement anchor; it supplies no PT-1 item. |
| `artin-induction-and-rational-characters` -> `the-weyl-kac-character-formula-examples` | **artifact; delete** | Both Lie and Representation Theory of Groups reconciliations say the nine Artin items have zero Lie dependencies and order deletion without replacement. |

Thus the nine normalized roots introduced by the twelve edges split into two
genuine roots (`tor-flatness-and-global-dimension` and
`tempered-distributions-and-the-fourier-transform`) and seven artifact roots.
Their transitive cones must be recomputed after the binding page amendments;
the current category totals of 15 added Algebraic Topology pairs, 16
Probability pairs, and so on are properties of the stale ordering graph, not a
mathematical necessity result.

## Known direct suppliers outside the 122 new-pair closure

The following are not omissions under the narrow rule “Phase 2 builds only new
A/B pairs,” but they are omissions from any claim that the 122 pairs alone
make all known repairs ready:

- Differential Geometry: two new DG-1 items proving the coordinate-bump
  family and an explicit compatible metric directly repair
  `thm-topological-manifolds-are-metrizable-and-paracompact`.
- PDE: the two missing local Weyl-lemma steps
  `lem-zero-mass-radial-test-functions-are-compactly-supported-laplacians` and
  `lem-harmonic-distribution-mollifications-stabilise-locally` are required
  before the present distributional Weyl lemma is closed.
- Differential Topology: the binding scaffold requires local global
  stable-manifold parametrization and quantitative critical-point persistence
  lemmas, plus seven explicit DT-4 Fredholm/Sard--Smale/quotient lemmas. The
  FA Banach-manifold pair in Phase 2 supplies only the external analytic
  interface; it does not prove these local steps.
- Combinatorics: three local Skolem-construction items and the local
  `thm-weak-perfect-graph-theorem` and
  `thm-substitution-preserves-perfect-graphs` replace five load-bearing
  recorded imports. The plane-dual repair instead needs the already-existing
  `def-plane-graph-face-and-boundary` added to `deps`.
- Lie Representation: four local Shapovalov determinant lemmas must precede
  and replace the current theorem's imported `[L1]` proof step.
- Probability: the new local bounded-expectation metric lemma supplies the
  probability-convergence metric definition and theorem. The planned local
  Doob--Dynkin item has only a future PT-11 consumer and is not needed for a
  current published repair.
- Topology: three local metrization lemmas replace the two proof-critical
  recorded metrization remarks and feed Nagata--Smirnov/Bing and their
  published impact cones.

These local suppliers need their own Phase-3 closure ledger. They cannot be
treated as automatically supplied when the new-pair manifest completes.

One known repair remains without an accepted proved supplier:
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`
still consumes the recorded Strong Perfect Graph Theorem seam. The
Combinatorics binding explicitly says its source invokes SPGT and that no
bounded replacement was found. Therefore the claim that publishing all 122
pairs permits retirement of all recorded inputs is false unless this consumer
is deleted, weakened, or supplied by an independently accepted full proof.

## Draft suppliers and page-status blind spots

Page publication is not a reliable proxy for item publication in this
checkout. A direct filesystem census finds 15,014 published and 402 draft item
files. A block-list-aware parse finds **345 draft items listed on pages whose
page frontmatter says `status: published`**. The ordinary `depcheck` success
line does not detect these because its page-list reader accepts flow arrays
only when `[` begins on the same line as `items:`/`examples:`; it misses both
YAML block lists and arrays placed on the following line.

The binding ledger does cover the two major direct-supplier families:

- Algebraic Geometry's old AV-1/AV-2 draft roots are mapped to the 45-item
  `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`
  replacement pair, with Phase-3 cutover of the published consumers.
- Computability §52 records 55 draft closure items on ten published pages,
  including 29 direct supplier roots, and §53 maps them to the five Phase-2
  replacement pairs present in the manifest.

This means those draft suppliers do not establish additional missing A/B
roots, but publishing their replacement pairs still does not change any
published consumer edge. The Phase-3 cutovers remain mandatory. A broader
mechanical audit reports 88 published-to-draft edges in the current graph;
all of their draft targets are homed on already-published pages, reinforcing
that this is an item-status/content-cutover problem rather than a page-closure
problem.

## Published orphan check

A naive run using the same limited page-list grammar reports 94 published
orphans. Ninety-two are false positives: 44 A + 7 B items on
`derived-functors`, and 34 A + 7 B items on
`delta-functors-and-universality`, whose valid YAML arrays start on the line
after `items:`/`examples:`. The two genuine published orphans are:

- `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`,
  directly consumed by
  `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property`;
- `thm-leaf-deletion-preserves-virality-of-a-finite-family`, directly consumed
  by `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property` and
  `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`.

Neither exact orphan id appears in the central published-consumer ledger. The
published `pure-pairs-forests-and-path-antipath-classes` page explicitly says
they were withheld from its inventory because their source proofs were not
internalized, yet both item files are `status: published` and are load-bearing
for other published items. They require an explicit owner disposition; the
122-pair manifest neither owns nor repairs them.

The owner-exempt CFSG landscape A/B pair is isolated: its thirty items have
zero inbound `deps`, `justified_by`, `external_refs`, `forward_refs`, body
wikilinks, plan-page `requires`, or library prose links from outside the pair.
Its eventual deletion will not strand a consumer.

## Full-source disposition of the two true orphans

This follow-up parsed all item and page frontmatter with the renderer's own
YAML package selected by `tools/paths.mjs::yamlCandidates`, and traversed the
reverse `deps` plus `justified_by` graph. Every impact item below is
`status: published` and is homed on a published page. The result agrees with
the generated census, but the levels and page homes below make the repair
boundary explicit.

### Forest-free linear anticomplete-pair theorem

The [official full source of *Pure pairs. I*](https://arxiv.org/e-print/1809.00919)
does prove the orphan's exact claim. Theorem 1.4 (`mainthm`) states the same
forest-free alternative, and the paper proves its equivalent coherent-graph
form at the end of the main proof section using its previously proved rainbow
blockade theorem. The final displayed proof is written for a tree; this gives
the forest statement because every finite forest is an induced subgraph of a
finite tree obtained by connecting its components through new vertices.

The local item does **not** reproduce that proof. Its sole fact `[F1]` is the
entire source theorem and proof step 1.1 merely applies `[F1]`. Thus the source
is complete but the published library proof is a black-box import. The page
prose was right to withhold it.

Its exact published impact is:

1. direct:
   `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property`
   on `star-expansions-and-erdos-hajnal`;
2. distance two:
   `thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property` on the
   same page.

There are no other published transitive consumers. The direct consumer is
also presently a citation-only translation of its own source theorem, despite
listing the forest theorem and several internal lemmas as dependencies.
Deleting the orphan edge would therefore hide, not repair, the proof gap.

**Disposition:** the intended home remains the A page
`pure-pairs-forests-and-path-antipath-classes` (page 409), but the current
binding reconciliation deliberately removed this item from the page plan.
There is no bounded Phase-3 local insertion already specified for it. Treat it
as an explicit research block requiring an internal decomposition of the
*Pure pairs. I* support-uniformity, support-invariance, concavity and rainbow
blockade chain through the final coherent-graph proof. The existing page-417
item `thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest`
is not that carrier: it assumes every pair of blocks is already complete or
anticomplete according to the forest and proves the resulting immediate
vertex-selection fact. After the page-409 proof exists, the direct page-417
consumer still needs its source-Theorem-7.2 proof internalized before the two
items above are clean.

### Purported two-leaf virality theorem

Here the issue is not merely a missing proof. The
[official v1 full source of *Induced subgraph density. IV*](https://arxiv.org/e-print/2307.06455v1)
and the [current full source](https://arxiv.org/e-print/2307.06455) prove the
theorem with stable source label `unorderedaxioms` in full, by reducing it to
the ordered axiom proved earlier in the paper. It is numbered Theorem 7.8 in
v1 and Theorem 7.7 in the current revision, so the label and statement are the
stable locators. Its statement is asymmetric: it assumes
`H_1` and `complement(H_2)` are members of the forbidden family, deletes a
leaf from `H_1`, and deletes from `complement(H_2)` the co-leaf corresponding
to a leaf of `H_2`. It does **not** say that deleting an ordinary leaf from
each of two arbitrary family members preserves virality.

The published orphan asserts that stronger two-leaf statement, claims in
`[F1]` that Nguyen--Scott--Seymour say "exactly" this, and then only applies
`[F1]`. The citation therefore fails claim match, and the local proof is a
black-box import even apart from that mismatch. The source proves a complete
leaf/co-leaf theorem; it does not prove this orphan's stated claim. This audit
does not assert that the stronger statement is false; it establishes that the
cited theorem does not supply it and that the present proof is invalid.

The mathematically matching replacement id already exists as the draft
`thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family`, originally
destined for page 409. It too merely imports the source theorem as `[F1]`, and
the binding reconciliation removed it from the current page inventory.
Accordingly it is a statement-level replacement, not yet an acceptable proved
supplier. Its ordered-leaf extension, divisive-to-viral transfer, repeated
ordered-axiom application and order-forgetting argument must be internalized
before promotion.

The orphan's two direct published consumers are:

- `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property` on
  `small-graph-erdos-hajnal-consequences`;
- `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`
  on `iterative-restriction-and-comb-extraction-lemmas`.

The first is an isolated impact leaf. The second generates the following
22-item published branch, including itself:

- distance one: the leaf-reducible lemma above;
- distance two:
  `lem-generalized-niceness-yields-four-reduction-outcomes` and
  `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`;
- distance three:
  `ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade`,
  `lem-cy-restricted-generalized-niceness-yields-three-outcomes`, and
  `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome`;
- distance four:
  `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph`,
  `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`,
  and
  `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade`;
- distance five:
  `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice`,
  `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives`,
  and
  `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`;
- distance six:
  `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`,
  `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`,
  and
  `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`;
- distance seven:
  `ex-a-complete-four-blockade-gives-a-four-vertex-clique`,
  `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set`,
  `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`,
  `ex-the-square-root-rescaling-in-lemma-four-four`,
  `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade`,
  and
  `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`;
- distance eight:
  `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one`.

The full 23-item impact occupies eight published pages:
`small-graph-erdos-hajnal-consequences`,
`iterative-restriction-and-comb-extraction-lemmas`,
`generalized-niceness-and-reduction-outcomes` and its examples page,
`from-generalized-niceness-to-erdos-hajnal` and its examples page, and
`property-star-and-comb-outcomes` and its examples page.

**Direct-consumer repair split:**

- The leaf-reducible lemma must not be cut over to the leaf/co-leaf theorem.
  Its present proof applies the unsupported stronger two-leaf statement twice
  to the same leaf and thereby concludes that every leaf-reducible family is
  viral. The
  [full target-paper source](https://arxiv.org/e-print/2606.06258v2) instead
  labels the sparse dichotomy as contained in the source's leaf-extension
  lemma. Repair this item locally from the induced-copy counting and sparse
  leaf-extension argument in the full Nguyen--Scott--Seymour source; remove
  the orphan dependency. This is a bounded destination (the existing lemma on
  page 423), but it is a substantive proof reconstruction, not a metadata
  cutover.
- The six-vertex corollary can in principle use the correct leaf/co-leaf
  theorem, but its graph data must be corrected in the same repair. The
  current left graph is a triangle with three pendant leaves, of degree
  sequence `(3,3,3,1,1,1)`, and therefore has no co-leaf. It is not either
  six-vertex graph drawn in the cited papers: the first graph in Figure 2 of
  the target source has degree sequence `(4,3,3,2,1,1)`, and the second has
  `(4,4,3,2,2,1)`. Thus merely swapping the dependency id would leave the
  consumer invalid. Correct the two graph definitions/examples to the source
  figures, then derive their Erdős--Hajnal property from the fully
  internalized leaf/co-leaf theorem and the already proved five-vertex base
  cases.

Consequently the forest root is a genuine hard proof-internalization block,
while the purported two-leaf root should not be repaired under its current
statement at all. It should be retired in favour of the correct leaf/co-leaf
carrier plus the two distinct direct-consumer repairs above.

## Actionable closure rule

Do not use “122 pairs published” as the Phase-3 start certificate. The
certificate should instead require all of the following:

1. apply the binding A-only page requirements and recompute the pair closure;
2. retain the genuine HA-10 and FA-25 roots and their then-current unpublished
   A-prerequisite closures;
3. publish every ledgered new-pair replacement root and repoint every affected
   published item in the same Phase-3 repair transaction;
4. materialize and audit every load-bearing Phase-3 local supplier above;
5. resolve the SPGT-dependent bull-route consumer and the two genuine
   published orphan suppliers;
6. run a block-list-aware item/page/status and published-consumer traversal,
   rather than infer publication or closure from nonempty `plan-spec` items or
   the current `depcheck` page parser.

Only that union, not the literal 122-pair page traversal, is sufficient for the
known repairs recorded in the present ledger and binding scaffolds.
