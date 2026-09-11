# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-20-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-20
role: alpha-group-read
label: e
covers: e

# Step 6 whole-group reading — group **e**, run `phase-2-next-20`

You are the group Alpha for batches **7**, **8**, **9**: 5 A/B pair(s), 10 page(s), 215 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `double-complexes-exact-couples-and-convergence` | A | homological-algebra | 365.067 | `spectral-sequences`, `mapping-cones-cylinders-and-chain-triangles`, `long-exact-sequences-in-homology` |
| 7 | `double-complexes-exact-couples-and-convergence-examples` | B | homological-algebra | 365.068 | `double-complexes-exact-couples-and-convergence` |
| 8 | `singular-cohomology-and-coefficient-theorems` | A | algebraic-topology | 366.011 | `singular-chains-and-singular-homology`, `relative-homology-excision-and-mayer-vietoris`, `homology-axioms-degree-and-classical-applications`, `universal-coefficients-and-kunneth-theorems`, `kunneth-exactness-and-splittings-over-principal-ideal-domains` |
| 8 | `singular-cohomology-and-coefficient-theorems-examples` | B | algebraic-topology | 366.012 | `singular-cohomology-and-coefficient-theorems` |
| 8 | `fibrations-fiber-bundles-and-homotopy-exact-sequences` | A | algebraic-topology | 366.021 | `higher-homotopy-groups-and-cofiber-sequences`, `covering-spaces-and-lifting`, `classification-of-covering-spaces`, `uniform-spaces`, `partitions-of-unity-and-paracompactness` |
| 8 | `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples` | B | algebraic-topology | 366.022 | `fibrations-fiber-bundles-and-homotopy-exact-sequences` |
| 9 | `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` | A | differential-geometry | 473 | `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `singular-chains-and-singular-homology`, `relative-homology-excision-and-mayer-vietoris`, `singular-cohomology-and-coefficient-theorems`, `free-modules-and-exact-sequences`, `homotopy-and-homotopy-equivalence`, `chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`, `long-exact-sequences-in-homology` |
| 9 | `singular-cochains-mayer-vietoris-and-smooth-singular-comparison-examples` | B | differential-geometry | 474 | `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` |
| 9 | `connections-levi-civita-and-parallel-transport` | A | differential-geometry | 479 | `smooth-partitions-of-unity-and-exhaustions`, `smooth-vector-bundles-and-sections`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `manifolds-with-boundary-collars-and-orientations`, `riemannian-metrics-length-distance-and-volume` |
| 9 | `connections-levi-civita-and-parallel-transport-examples` | B | differential-geometry | 480 | `connections-levi-civita-and-parallel-transport` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `double-complexes-exact-couples-and-convergence` — Double Complexes Exact Couples and Convergence (47 item(s))

- `def-homological-double-complex` · definition — Homological double complex
- `rem-commuting-versus-anticommuting-double-complex-conventions` · remark — Commuting versus anticommuting double complex conventions
- `def-direct-sum-total-complex-of-a-double-complex` · definition — Direct sum total complex of a double complex
- `lem-the-total-differential-squares-to-zero` · lemma — The total differential squares to zero
- `def-product-total-complex-of-a-double-complex` · definition — Product total complex of a double complex
- `prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes` · proposition — Sum and product totalisations agree on finite diagonal double complexes
- `lem-countable-sequence-groups-and-tail-filtrations` · lemma — Countable sequence groups and tail filtrations
- `cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals` · counterexample — Sum and product totalisations can differ on infinite diagonals
- `def-row-and-column-filtrations-of-a-first-quadrant-double-complex` · definition — Row and column filtrations of a first quadrant double complex
- `thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex` · theorem — The row filtration spectral sequence of a first quadrant double complex
- `thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex` · theorem — The column filtration spectral sequence of a first quadrant double complex
- `prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages` · proposition — The two double complex spectral sequences have the same abutment but not the same pages
- `thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex` · theorem — Acyclic assembly lemma for a first quadrant double complex
- `def-exact-couple` · definition — Exact couple
- `def-differential-associated-to-an-exact-couple` · definition — Differential associated to an exact couple
- `lem-the-exact-couple-differential-squares-to-zero` · lemma — The exact couple differential squares to zero
- `def-derived-exact-couple` · definition — Derived exact couple
- `lem-the-derived-couple-maps-are-well-defined` · lemma — The derived couple maps are well defined
- `thm-the-derived-couple-is-exact` · theorem — The derived couple is exact
- `thm-an-exact-couple-generates-a-spectral-sequence` · theorem — An exact couple generates a spectral sequence
- `thm-a-filtered-complex-produces-an-exact-couple` · theorem — A filtered complex produces an exact couple
- `prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree` · proposition — The exact couple and subquotient constructions of the filtered complex spectral sequence agree
- `def-regular-spectral-sequence` · definition — Regular spectral sequence
- `def-weak-convergence-of-a-spectral-sequence` · definition — Weak convergence of a spectral sequence
- `def-strong-convergence-of-a-spectral-sequence` · definition — Strong convergence of a spectral sequence
- `thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology` · theorem — A first quadrant filtered complex spectral sequence converges to filtered homology
- `def-lim-one-obstruction-to-completeness` · definition — Lim one obstruction to completeness
- `lem-countable-tower-completion-obstruction-exact-sequence` · lemma — Countable tower completion obstruction exact sequence
- `lem-countable-tower-six-term-limit-sequence` · lemma — Countable tower six term limit sequence
- `lem-two-by-two-delta-complex-for-a-double-tower` · lemma — Two by two Delta complex for a double tower
- `lem-boardman-approximate-cycle-obstruction-sequence` · lemma — Approximate cycle obstruction sequence for a complete filtered complex
- `thm-complete-exhaustive-filtered-complex-convergence-criterion` · theorem — Complete exhaustive filtered complex convergence criterion
- `prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment` · proposition — Failure of separatedness or completeness can destroy the claimed abutment
- `lem-finite-and-complete-filtered-isomorphism-lifting` · lemma — Finite and complete filtered isomorphism lifting
- `thm-spectral-sequence-comparison-theorem` · theorem — Spectral sequence comparison theorem
- `cor-quasi-isomorphism-criterion-from-a-filtered-map` · corollary — Quasi isomorphism criterion from a filtered map
- `thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence` · theorem — Five term exact sequence of a first quadrant cohomological spectral sequence
- `thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence` · theorem — Five term exact sequence of a first quadrant homological spectral sequence
- `prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically` · proposition — Collapse with projective associated graded pieces splits the finite filtration noncanonically
- `prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences` · proposition — A map of exact couples induces a map of spectral sequences
- `prop-short-exact-sequences-of-filtered-complexes-give-compatible-exact-couples` · proposition — Short exact sequences of filtered complexes give compatible exact couples
- `fs-the-two-spectral-sequences-of-a-double-complex-have-identical-e-one-pages` · false-statement — The two spectral sequences of a double complex have identical e one pages
- `fs-direct-sum-and-product-totalisations-are-always-isomorphic` · false-statement — Direct sum and product totalisations are always isomorphic
- `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data` · false-statement — Every exact couple is a long exact sequence with no extra grading data
- `fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration` · false-statement — First quadrant support alone identifies the abutment without a filtration
- `fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets` · false-statement — An isomorphism on e infinity automatically gives an isomorphism of unfiltered targets
- `fs-exhaustive-filtration-implies-separated-and-complete-filtration` · false-statement — Exhaustive filtration implies separated and complete filtration

### `double-complexes-exact-couples-and-convergence-examples` — Double Complexes Exact Couples and Convergence — Examples (8 item(s))

- `ex-the-two-spectral-sequences-of-a-two-by-two-double-complex` · example — The two spectral sequences of a two by two double complex
- `ex-acyclic-assembly-with-exact-columns` · example — Acyclic assembly with exact columns
- `ex-the-exact-couple-of-a-two-step-filtration` · example — The exact couple of a two step filtration
- `ex-deriving-an-exact-couple-once` · example — Deriving an exact couple once
- `ex-a-first-quadrant-five-term-exact-sequence` · example — A first quadrant five term exact sequence
- `cex-sum-and-product-totalisations-on-an-infinite-diagonal` · counterexample — Sum and product totalisations on an infinite diagonal
- `cex-an-exhaustive-nonseparated-filtration-with-the-wrong-naive-abutment` · counterexample — An exhaustive nonseparated filtration with the wrong naive abutment
- `ex-a-filtered-quasi-isomorphism-detected-on-associated-graded-complexes` · example — A filtered quasi isomorphism detected on associated graded complexes

### `singular-cohomology-and-coefficient-theorems` — Singular Cohomology and Coefficient Theorems (26 item(s))

- `def-singular-cochain-complex-with-coefficients` · definition — Singular cochain complex with coefficients
- `lem-the-singular-coboundary-squares-to-zero` · lemma — The singular coboundary squares to zero
- `def-singular-cohomology-with-coefficients` · definition — Singular cohomology with coefficients
- `prop-singular-cohomology-is-contravariantly-functorial` · proposition — Singular cohomology is contravariantly functorial
- `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology` · theorem — Homotopic maps induce equal maps in singular cohomology
- `def-relative-singular-cochain-complex` · definition — Relative singular cochain complex
- `thm-long-exact-sequence-of-a-pair-in-singular-cohomology` · theorem — Long exact sequence of a pair in singular cohomology
- `thm-naturality-of-the-singular-cohomology-pair-sequence` · theorem — Naturality of the singular cohomology pair sequence
- `thm-excision-for-singular-cohomology` · theorem — Excision for singular cohomology
- `thm-mayer-vietoris-sequence-in-singular-cohomology` · theorem — Mayer vietoris sequence in singular cohomology
- `def-kronecker-evaluation-pairing` · definition — Kronecker evaluation pairing
- `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives` · lemma — The kronecker pairing is independent of cocycle and cycle representatives
- `lem-singular-uct-extension-from-cycle-projections` · lemma — Singular uct extension from cycle projections
- `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology` · theorem — Topological universal coefficient short exact sequence for cohomology
- `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` · proposition — The cohomology universal coefficient sequence splits nonnaturally
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field` · corollary — Cohomology over a field is dual to homology over that field
- `cor-integral-cohomology-detects-adjacent-homology-torsion` · corollary — Integral cohomology detects adjacent homology torsion
- `lem-singular-product-chain-equivalence-by-simplex-models` · lemma — Singular product chain equivalence by simplex models
- `thm-topological-kunneth-short-exact-sequence-for-homology` · theorem — Topological kunneth short exact sequence for homology
- `prop-the-homology-kunneth-sequence-splits-nonnaturally` · proposition — The homology kunneth sequence splits nonnaturally
- `cor-field-kunneth-isomorphism-for-homology-of-products` · corollary — Field kunneth isomorphism for homology of products
- `def-additive-singular-cohomology-cross-product` · definition — Additive singular cohomology cross product
- `lem-additive-singular-cohomology-cross-product-is-well-defined` · lemma — The additive singular cohomology cross product is well-defined
- `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses` · theorem — Cohomological kunneth isomorphism under finite free hypotheses
- `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms` · corollary — Singular cohomology satisfies the eilenberg steenrod cohomology axioms
- `lem-real-projective-space-cellular-homology-and-pinch-map` · lemma — Real projective space cellular homology and the pinch map

### `singular-cohomology-and-coefficient-theorems-examples` — Singular Cohomology and Coefficient Theorems — Examples (8 item(s))

- `ex-integral-cohomology-of-real-projective-space-from-uct` · example — Integral cohomology of real projective space from uct
- `ex-cohomology-of-lens-spaces-from-uct` · example — Cohomology of lens spaces from uct
- `ex-field-cohomology-of-an-infinite-wedge-of-circles` · example — Field cohomology of an infinite wedge of circles
- `ex-homology-of-a-product-of-spheres-by-kunneth` · example — Homology of a product of spheres by kunneth
- `ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces` · example — Tor term in the homology of a product of real projective spaces
- `ex-kronecker-pairing-for-a-cellular-circle-generator` · example — Kronecker pairing for a cellular circle generator
- `cex-the-integral-kronecker-map-need-not-be-an-isomorphism` · counterexample — The integral kronecker map need not be an isomorphism
- `cex-the-uct-splitting-is-not-natural` · counterexample — The uct splitting is not natural

### `fibrations-fiber-bundles-and-homotopy-exact-sequences` — Fibrations Fiber Bundles and Homotopy Exact Sequences (18 item(s))

- `def-hurewicz-and-serre-fibrations` · definition — Hurewicz and serre fibrations
- `prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace` · proposition — A fibration has path lifting and homotopy lifting relative to a subspace
- `def-fiber-and-fiber-homotopy-equivalence` · definition — Fiber and fiber homotopy equivalence
- `prop-pullbacks-of-fibrations-are-fibrations` · proposition — Pullbacks of fibrations are fibrations
- `def-mapping-path-space-replacement-of-a-map` · definition — Mapping path space replacement of a map
- `thm-mapping-path-factorization` · theorem — Mapping path factorization
- `def-homotopy-fiber-of-a-map` · definition — Homotopy fiber of a map
- `def-fibration-connecting-homomorphism` · definition — Fibration connecting homomorphism
- `lem-the-fibration-connecting-map-is-independent-of-lift-and-representative` · lemma — The fibration connecting map is independent of lift and representative
- `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration` · theorem — Long exact sequence of homotopy groups of a fibration
- `thm-fibration-sequence-is-natural` · theorem — Fibration sequence is natural
- `def-fiber-transport-and-monodromy-action` · definition — Fiber transport and monodromy action
- `prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent` · proposition — Fibers over one path component are fiber homotopy equivalent
- `def-locally-trivial-fiber-bundle` · definition — Locally trivial fiber bundle
- `thm-numerable-fiber-bundles-are-hurewicz-fibrations` · theorem — Numerable fiber bundles are hurewicz fibrations
- `def-principal-g-bundle-and-associated-fiber-bundle` · definition — Principal g bundle and associated fiber bundle
- `prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback` · proposition — Associated bundle is locally trivial and functorial under pullback
- `lem-covering-homotopies-lift-by-finite-local-strips` · lemma — Covering homotopies lift by finite local strips

### `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples` — Fibrations Fiber Bundles and Homotopy Exact Sequences — Examples (6 item(s))

- `ex-path-loop-fibration-and-its-connecting-isomorphisms` · example — Path loop fibration and its connecting isomorphisms
- `ex-hopf-circle-fibration` · example — Hopf circle fibration
- `ex-real-projective-space-cover-as-a-discrete-fiber-fibration` · example — Real projective space cover as a discrete fiber fibration
- `ex-mobius-band-as-an-interval-bundle-with-monodromy` · example — Mobius band as an interval bundle with monodromy
- `cex-a-surjective-map-need-not-be-a-fibration` · counterexample — A surjective map need not be a fibration
- `cex-a-fibration-need-not-be-a-locally-trivial-bundle` · counterexample — A fibration need not be a locally trivial bundle

### `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` — Singular Cochains Mayer Vietoris and Smooth Singular Comparison (31 item(s))

- `def-continuous-singular-simplex-and-real-singular-chain-group` · definition — Continuous singular simplex and real singular chain group
- `def-real-singular-chain-complex` · definition — Real singular chain complex
- `prop-singular-chains-are-covariantly-functorial` · proposition — Singular chains are covariantly functorial
- `lem-real-singular-cochains-identify-with-functions-on-the-supplied-simplex-basis` · lemma — Real singular cochains identify with functions on the supplied simplex basis
- `def-real-singular-cochain-complex` · definition — Real singular cochain complex
- `def-real-singular-cohomology` · definition — Real singular cohomology
- `cor-singular-cohomology-is-homotopy-invariant` · corollary — Singular cohomology is homotopy invariant
- `thm-short-exact-two-open-cover-small-singular-chain-sequence` · theorem — Short exact two open cover small singular chain sequence
- `lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis` · lemma — Canonical extension by zero of a singular cochain on a simplex basis
- `thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence` · theorem — Short exact two open singular cochain mayer vietoris sequence
- `thm-mayer-vietoris-sequence-in-real-singular-cohomology` · theorem — Mayer vietoris sequence in real singular cohomology
- `thm-naturality-of-singular-mayer-vietoris-connectors` · theorem — Naturality of singular mayer vietoris connectors
- `def-smooth-singular-simplex` · definition — Smooth singular simplex
- `def-smooth-singular-chain-and-cochain-complexes` · definition — Smooth singular chain and cochain complexes
- `prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps` · proposition — Smooth singular chains and cochains are functorial for smooth maps
- `prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains` · proposition — Barycentric subdivision and prism preserve smooth singular chains
- `thm-smooth-singular-mayer-vietoris-sequence` · theorem — Smooth singular mayer vietoris sequence
- `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension` · lemma — Compatible smooth simplex faces have a neighbourhood extension
- `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces` · lemma — Relative smoothing of a continuous simplex along its faces
- `thm-smooth-singular-chains-compute-singular-homology` · theorem — Smooth singular chains compute singular homology
- `def-restriction-from-continuous-to-smooth-singular-cochains` · definition — Restriction from continuous to smooth singular cochains
- `prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-domains` · proposition — Smooth continuous singular cohomology comparison is an isomorphism on convex coordinate domains
- `lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions` · lemma — De rham and singular cohomology respect countable disjoint unions
- `thm-countable-mayer-vietoris-open-set-principle` · theorem — Countable mayer vietoris open set principle
- `thm-smooth-and-continuous-real-singular-cohomology-agree` · theorem — Smooth and continuous real singular cohomology agree
- `fs-the-singular-boundary-of-a-simplex-is-the-unsigned-sum-of-its-faces` · false-statement — The singular boundary of a simplex is the unsigned sum of its faces
- `fs-a-singular-cochain-is-a-finite-linear-combination-of-singular-simplices` · false-statement — A singular cochain is a finite linear combination of singular simplices
- `rem-dualizing-real-vector-space-sequences-and-the-choice-boundary` · remark — Dualizing real vector-space sequences and the choice boundary
- `fs-one-fixed-number-of-barycentric-subdivisions-makes-every-singular-simplex-cover-small` · false-statement — One fixed number of barycentric subdivisions makes every singular simplex cover small
- `fs-every-continuous-singular-simplex-is-smooth` · false-statement — Every continuous singular simplex is smooth
- `rem-dualizing-real-chain-complexes-requires-an-exactness-argument` · remark — Dualizing real chain complexes requires an exactness argument

### `singular-cochains-mayer-vietoris-and-smooth-singular-comparison-examples` — Singular Cochains Mayer Vietoris and Smooth Singular Comparison — Examples (7 item(s))

- `ex-a-finite-chain-needing-different-subdivision-depths-on-its-simplices` · example — A finite chain needing different subdivision depths on its simplices
- `ex-canonical-zero-extension-of-an-overlap-cochain` · example — Canonical zero extension of an overlap cochain
- `ex-smooth-singular-simplices-in-a-coordinate-ball` · example — Smooth singular simplices in a coordinate ball
- `cex-a-continuous-nowhere-differentiable-singular-one-simplex` · counterexample — A continuous nowhere differentiable singular one simplex
- `ex-relative-smoothing-fixes-the-endpoints-of-a-path` · example — Relative smoothing fixes the endpoints of a path
- `ex-singular-cohomology-of-a-point-from-the-cochain-complex` · example — Singular cohomology of a point from the cochain complex
- `rem-hom-of-homology-is-not-the-definition-of-singular-cohomology` · remark — Hom of homology is not the definition of singular cohomology

### `connections-levi-civita-and-parallel-transport` — Connections Levi Civita and Parallel Transport (52 item(s))

- `def-connection-on-a-smooth-vector-bundle` · definition — Connection on a smooth vector bundle
- `def-covariant-derivative-of-a-section-in-a-vector-field-direction` · definition — Covariant derivative of a section in a vector field direction
- `prop-connection-laws-in-directional-form` · proposition — Connection laws in directional form
- `lem-a-bundle-connection-is-local-and-restricts-to-open-sets` · lemma — A bundle connection is local and restricts to open sets
- `def-connection-one-form-in-a-local-frame` · definition — Connection one form in a local frame
- `prop-local-coordinate-formula-for-a-bundle-connection` · proposition — Local coordinate formula for a bundle connection
- `thm-connection-one-form-transformation-law` · theorem — Connection one form transformation law
- `thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law` · theorem — Local connection forms glue exactly when they obey the transformation law
- `prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form` · proposition — The difference of two connections is an endomorphism valued one form
- `prop-adding-an-endomorphism-valued-one-form-to-a-connection-gives-a-connection` · proposition — Adding an endomorphism valued one form to a connection gives a connection
- `thm-every-smooth-vector-bundle-admits-a-connection` · theorem — Every smooth vector bundle admits a connection
- `def-pullback-connection` · definition — Pullback connection
- `thm-pullback-connection-is-well-defined-and-functorial` · theorem — Pullback connection is well defined and functorial
- `def-dual-connection` · definition — Dual connection
- `lem-finite-tensor-products-of-smooth-vector-bundles` · lemma — Finite tensor products of smooth vector bundles
- `def-product-connection-on-tensor-and-hom-bundles` · definition — Product connection on tensor and hom bundles
- `prop-induced-connections-commute-with-contraction-and-permutation` · proposition — Induced connections commute with contraction and permutation
- `prop-induced-connection-on-exterior-powers-is-a-degree-zero-derivation` · proposition — Induced connection on exterior powers is a degree zero derivation
- `def-vector-field-and-section-along-a-smooth-curve` · definition — Vector field and section along a smooth curve
- `def-covariant-derivative-along-a-curve` · definition — Covariant derivative along a curve
- `thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension` · theorem — Covariant derivative along a curve is independent of frame and extension
- `prop-local-frame-formula-for-covariant-differentiation-along-a-curve` · proposition — Local frame formula for covariant differentiation along a curve
- `def-parallel-section-along-a-curve` · definition — Parallel section along a curve
- `thm-existence-and-uniqueness-of-parallel-sections` · theorem — Existence and uniqueness of parallel sections
- `def-parallel-transport-along-a-piecewise-smooth-curve` · definition — Parallel transport along a piecewise smooth curve
- `thm-parallel-transport-is-a-linear-isomorphism` · theorem — Parallel transport is a linear isomorphism
- `prop-parallel-transport-under-reparametrization-reversal-and-concatenation` · proposition — Parallel transport under reparametrization reversal and concatenation
- `prop-pullback-connections-intertwine-parallel-transport` · proposition — Pullback connections intertwine parallel transport
- `def-metric-compatible-connection-on-a-riemannian-vector-bundle` · definition — Metric compatible connection on a riemannian vector bundle
- `prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric` · proposition — A connection is metric compatible iff parallel transport is isometric
- `def-affine-connection-on-a-smooth-manifold` · definition — Affine connection on a smooth manifold
- `def-christoffel-symbols-of-an-affine-connection` · definition — Christoffel symbols of an affine connection
- `thm-christoffel-symbol-transformation-law` · theorem — Christoffel symbol transformation law
- `def-torsion-tensor-of-an-affine-connection` · definition — Torsion tensor of an affine connection
- `lem-torsion-is-c-infinity-bilinear-and-skew-symmetric` · lemma — Torsion is c infinity bilinear and skew symmetric
- `prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames` · proposition — Torsion free is equivalent to symmetric christoffel symbols in coordinate frames
- `def-levi-civita-connection` · definition — Levi civita connection
- `lem-koszul-formula-is-necessary-for-a-levi-civita-connection` · lemma — Koszul formula is necessary for a levi civita connection
- `thm-the-koszul-formula-defines-an-affine-connection` · theorem — The koszul formula defines an affine connection
- `thm-fundamental-theorem-of-riemannian-geometry` · theorem — Fundamental theorem of riemannian geometry
- `prop-christoffel-formula-for-the-levi-civita-connection` · proposition — Christoffel formula for the levi civita connection
- `prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume` · proposition — Levi civita parallel transport preserves lengths angles and volume
- `prop-levi-civita-connection-commutes-with-musical-isomorphisms` · proposition — Levi civita connection commutes with musical isomorphisms
- `prop-gradient-hessian-and-divergence-connection-formulas` · proposition — Gradient hessian and divergence connection formulas
- `prop-the-riemannian-hessian-is-symmetric` · proposition — The riemannian hessian is symmetric
- `rem-holonomy-of-a-connection` · remark — Holonomy of a connection
- `fs-a-connection-is-c-infinity-linear-in-the-section-being-differentiated` · false-statement — A connection is c infinity linear in the section being differentiated
- `fs-christoffel-symbols-are-components-of-a-tensor` · false-statement — Christoffel symbols are components of a tensor
- `fs-parallel-transport-depends-only-on-the-endpoints-of-a-curve` · false-statement — Parallel transport depends only on the endpoints of a curve
- `fs-every-affine-connection-is-the-levi-civita-connection-of-a-riemannian-metric` · false-statement — Every affine connection is the levi civita connection of a riemannian metric
- `fs-torsion-free-means-curvature-free` · false-statement — Torsion free means curvature free
- `fs-every-connection-on-a-riemannian-vector-bundle-is-metric-compatible` · false-statement — Every connection on a riemannian vector bundle is metric compatible

### `connections-levi-civita-and-parallel-transport-examples` — Connections Levi Civita and Parallel Transport — Examples (12 item(s))

- `ex-the-flat-connection-on-a-trivial-vector-bundle` · example — The flat connection on a trivial vector bundle
- `ex-a-connection-one-form-on-a-trivial-line-bundle` · example — A connection one form on a trivial line bundle
- `ex-gauge-transformation-of-a-connection-one-form` · example — Gauge transformation of a connection one form
- `ex-pullback-of-the-flat-connection` · example — Pullback of the flat connection
- `ex-parallel-transport-for-a-scalar-linear-ode` · example — Parallel transport for a scalar linear ode
- `ex-the-euclidean-levi-civita-connection` · example — The euclidean levi civita connection
- `ex-christoffel-symbols-in-polar-coordinates` · example — Christoffel symbols in polar coordinates
- `ex-levi-civita-connection-of-a-conformal-plane-metric` · example — Levi civita connection of a conformal plane metric
- `ex-parallel-transport-on-the-round-sphere-along-the-equator` · example — Parallel transport on the round sphere along the equator
- `cex-a-torsion-free-connection-that-is-not-metric-compatible` · counterexample — A torsion free connection that is not metric compatible
- `cex-path-dependent-parallel-transport-on-the-sphere` · counterexample — Path dependent parallel transport on the sphere
- `ex-hessian-and-divergence-in-euclidean-coordinates` · example — Hessian and divergence in euclidean coordinates

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-20`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
