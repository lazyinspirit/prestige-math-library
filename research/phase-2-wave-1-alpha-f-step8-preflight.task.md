# Step 8 adjudication — group **f**, run `phase-2-wave-1`

You are the group Alpha for batches **7**, **8**: 2 A/B pair(s), 4 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `simplicial-subdivision-and-simplicial-approximation` | A | algebraic-topology | 366.0021 | `simplicial-complexes-and-simplicial-homology` |
| 7 | `simplicial-subdivision-and-simplicial-approximation-examples` | B | algebraic-topology | 366.0022 | `simplicial-subdivision-and-simplicial-approximation` |
| 8 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` | A | algebraic-geometry | 366.0403 | `ideals-and-quotient-rings`, `the-field-of-fractions-and-localisation`, `prime-spectra-and-radicals`, `noether-normalisation-and-nullstellensatz` |
| 8 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples` | B | algebraic-geometry | 366.0404 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `simplicial-subdivision-and-simplicial-approximation` — Simplicial Subdivision and Simplicial Approximation (25 item(s))

- `def-face-poset-and-order-complex` · definition — Face poset and order complex
- `def-barycentric-subdivision-of-an-abstract-simplicial-complex` · definition — Barycentric subdivision of an abstract simplicial complex
- `def-canonical-barycentric-realization-map` · definition — Canonical barycentric realization map
- `lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology` · lemma — Finite simplicial weak topology agrees with euclidean topology
- `lem-barycentric-face-chains-triangulate-a-geometric-simplex` · lemma — Barycentric face chains triangulate a geometric simplex
- `thm-barycentric-subdivision-realizes-homeomorphically` · theorem — Barycentric subdivision realizes homeomorphically
- `def-open-and-closed-stars-in-a-subdivision` · definition — Open and closed stars in a subdivision
- `lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices` · lemma — Compact subsets of an arbitrary simplicial realization meet finitely many open simplices
- `lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction` · lemma — An augmented simplicial cone has an explicit chain contraction
- `lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic` · lemma — Simplicial chain maps carried by specified cones are chain homotopic
- `def-oriented-simplicial-subdivision-chain-map` · definition — Oriented simplicial subdivision operator
- `lem-oriented-simplicial-subdivision-commutes-with-boundary` · lemma — Oriented simplicial subdivision commutes with boundary
- `lem-last-vertex-map-is-carried-by-original-simplices` · lemma — Last vertex map is carried by original simplices
- `thm-simplicial-subdivision-is-a-chain-map-and-homology-isomorphism` · theorem — Simplicial subdivision is a chain map and homology isomorphism
- `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero` · lemma — Mesh of iterated simplicial barycentric subdivision tends to zero
- `lem-the-open-star-criterion-produces-a-simplicial-map` · lemma — The open star criterion produces a simplicial map
- `thm-finite-simplicial-approximation-for-maps-of-pairs` · theorem — Finite simplicial approximation for maps of pairs
- `def-relative-derived-subdivision-of-a-finite-simplicial-pair` · definition — Relative derived subdivision of a finite simplicial pair
- `lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full` · lemma — Relative derived subdivision makes the fixed subcomplex full
- `lem-relative-subdivision-neighbourhood-adjustment` · lemma — Relative subdivision neighbourhood adjustment
- `thm-relative-simplicial-approximation-after-subdivision` · theorem — Relative simplicial approximation after subdivision
- `def-finite-convex-cell-complex-and-linear-subdivision` · definition — Finite convex cell complex and linear subdivision
- `lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex` · lemma — Intersections of finite linear complexes form a convex cell complex
- `lem-finite-convex-cell-complexes-admit-compatible-triangulations` · lemma — Finite convex cell complexes admit compatible triangulations
- `lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement` · lemma — Two finite linear subdivisions have a common simplicial refinement

### `simplicial-subdivision-and-simplicial-approximation-examples` — Simplicial Subdivision and Simplicial Approximation: Examples (6 item(s))

- `ex-barycentric-subdivision-of-an-edge-and-triangle` · example — Barycentric subdivision of an edge and triangle
- `ex-the-subdivision-chain-of-an-oriented-two-simplex` · example — The subdivision chain of an oriented two simplex
- `ex-a-relative-simplicial-approximation-fixed-on-the-endpoints` · example — A relative simplicial approximation fixed on the endpoints
- `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells` · example — A compact set in an infinite non locally finite realization still meets finitely many cells
- `cex-a-continuous-map-need-not-be-simplicial-before-subdivision` · counterexample — A continuous map need not be simplicial before subdivision
- `cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge` · counterexample — Ordinary barycentric subdivision cannot fix a nonconstant simplicial edge

### `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` — Classical Affine Varieties: Coordinate Rings, Morphisms, and Rational Maps (48 item(s))

- `def-classical-affine-algebraic-set-with-empty-boundaries` · definition — Classical affine algebraic sets, including the empty boundaries
- `lem-classical-zero-locus-ideal-radical-invariance` · lemma — A classical zero locus depends only on the generated ideal and its radical
- `thm-classical-affine-zero-loci-form-zariski-closed-sets` · theorem — Classical affine zero loci form the Zariski closed sets
- `def-classical-vanishing-ideal` · definition — The classical vanishing ideal
- `lem-classical-zero-locus-vanishing-ideal-galois-connection` · lemma — Zero loci and vanishing ideals form a Galois connection
- `thm-classical-affine-nullstellensatz-correspondence` · theorem — Classical affine algebraic sets correspond to radical ideals, and irreducible sets to prime ideals
- `def-classical-affine-variety-interface` · definition — A classical affine variety
- `lem-classical-irreducible-space-open-intersection-criterion` · lemma — Irreducibility is equivalent to the nonempty-open intersection criterion
- `lem-classical-affine-variety-nonempty-opens-dense` · lemma — Every nonempty open of a classical affine variety is dense
- `def-classical-affine-coordinate-ring` · definition — The coordinate ring of a classical affine algebraic set
- `thm-classical-affine-variety-prime-coordinate-ring` · theorem — A classical affine variety has a domain coordinate ring, and conversely
- `thm-classical-polynomial-functions-equal-coordinate-ring` · theorem — Polynomial functions on an affine algebraic set are its coordinate ring
- `def-classical-principal-open` · definition — A principal open subset of a classical affine variety
- `lem-classical-principal-opens-form-affine-basis` · lemma — Principal opens form a basis and multiply under intersection
- `def-classical-regular-function-on-open-set` · definition — A regular function on an open subset of a classical affine variety
- `lem-classical-regular-functions-locality-and-gluing` · lemma — Classical regular functions satisfy locality and unique gluing
- `thm-classical-principal-open-coordinate-ring-localization` · theorem — Regular functions on a principal open are the principal localization
- `lem-classical-affine-algebraic-set-finite-irreducible-components` · lemma — A classical affine algebraic set has a unique finite irredundant decomposition
- `def-reduced-finitely-generated-k-algebra-interface` · definition — A reduced finitely generated $k$-algebra
- `lem-classical-affine-closed-points-are-maximal-ideals` · lemma — Classical affine points are maximal ideals
- `thm-classical-affine-global-regular-functions-coordinate-ring` · theorem — Global regular functions on a classical affine variety are its coordinate ring
- `def-classical-affine-variety-morphism` · definition — A morphism from an open subset of a classical affine variety to an affine variety
- `def-classical-regular-map-image-and-set-theoretic-fibre` · definition — Images and set-theoretic fibres of classical regular maps
- `lem-classical-morphism-inverse-image-of-closed-is-closed` · lemma — A classical morphism pulls Zariski closed sets back to closed sets
- `thm-classical-affine-morphisms-coordinate-ring-antiequivalence` · theorem — Classical affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms
- `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` · theorem — Classical affine algebraic sets and reduced finitely generated $k$-algebras are contravariantly equivalent
- `lem-classical-affine-morphisms-equal-on-dense-open` · lemma — Affine-source morphisms agreeing on a dense open agree everywhere
- `def-classical-germ-and-local-ring` · definition — Germs and the local ring of a classical affine variety
- `thm-classical-affine-local-ring-is-localization` · theorem — The classical affine local ring is localization at the point's maximal ideal
- `thm-classical-principal-open-is-affine-variety` · theorem — Every nonempty principal open is a classical affine variety
- `def-classical-affine-open-subset` · definition — A classical affine open subset and its coordinate ring
- `def-classical-variety-function-field` · definition — The function field of an irreducible classical affine variety
- `lem-classical-regular-functions-on-open-embed-in-function-field` · lemma — Regular functions on a nonempty open embed in the affine function field
- `thm-classical-function-field-independent-of-affine-open` · theorem — The function field is independent of the chosen nonempty principal affine open
- `def-classical-rational-map` · definition — A rational map as an equivalence class of morphisms on nonempty opens
- `lem-classical-rational-map-equivalence-transitive` · lemma — The rational-map relation is transitive
- `def-classical-rational-map-domain-union` · definition — The candidate domain of a rational map
- `def-classical-dominant-morphism-and-rational-map` · definition — Dominant classical morphisms and rational maps
- `lem-classical-open-source-morphisms-equal-on-dense-open` · lemma — Morphisms defined on an open source and agreeing on a dense open agree on their common domain
- `lem-classical-morphisms-glue-on-open-cover` · lemma — Compatible classical morphisms to an affine target glue over an open cover
- `thm-classical-rational-map-maximal-domain-affine-target` · theorem — A rational map to an affine target has a unique maximal open domain
- `lem-classical-dominant-rational-maps-compose` · lemma — Dominant rational maps compose on nonempty open domains
- `lem-classical-dominant-map-pulls-back-function-fields` · lemma — Dominant maps pull back function fields functorially
- `thm-classical-dominant-rational-maps-function-field-embeddings` · theorem — Dominant rational maps to an affine variety correspond to field embeddings
- `def-classical-integral-affine-atlas-and-chartwise-morphism` · definition — Integral classical varieties in the compatible affine-atlas register
- `lem-classical-integral-affine-charts-have-canonical-common-function-field` · lemma — Compatible affine charts of an integral classical variety have one function field
- `def-classical-birational-equivalence` · definition — Birational maps and birational equivalence of classical varieties
- `thm-classical-birational-equivalence-iff-function-fields-isomorphic` · theorem — Classical integral varieties are birational exactly when their function fields are isomorphic over $k$

### `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples` — Classical Affine Varieties: Coordinate Rings, Morphisms, and Rational Maps — Examples (1 item(s))

- `ex-classical-affine-line-coordinate-local-and-function-field-dictionary` · example — The affine-line coordinate, local, and function-field dictionary

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-e7e89165bfef0da5b5726621 · `ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells`** (from group f, gap-a-reader-closes) — Verification step 1.3 proves attainment of m_n by using the cover {x in C : x_{v_n}<m_n-1/k}. The assertion that these sets cover C under non-attainment, and the resulting strict bound from a finite subcover, uses the Archimedean property of the reals but neither states nor cites it. The conclusion is sound, but this locally supplied compactness argument should state that elementary real fact or cite it.

Append one owning-group disposition per warning to `research/phase-2-wave-1-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `phase-2-wave-1`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
