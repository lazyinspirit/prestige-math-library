# Step 7 adjudication — group **j**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **18**, **19**, **31**: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-42-coxeter-32-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 18 | `finite-reflection-length-and-orthogonal-moved-spaces` | A | coxeter-groups | 1752 | `finite-reflection-arrangements-and-spherical-coxeter-complexes` |
| 18 | `finite-reflection-length-and-orthogonal-moved-spaces-examples` | B | coxeter-groups | 1753 | `finite-reflection-length-and-orthogonal-moved-spaces` |
| 19 | `bipartite-coxeter-elements-and-ordered-root-complexes` | A | coxeter-groups | 1754 | `finite-reflection-length-and-orthogonal-moved-spaces`, `finite-lattice-projections-and-coxeter-chain-labels`, `spherical-simplex-metrics-angular-links-and-cones` |
| 19 | `bipartite-coxeter-elements-and-ordered-root-complexes-examples` | B | coxeter-groups | 1755 | `bipartite-coxeter-elements-and-ordered-root-complexes` |
| 31 | `noncrossing-partition-lattices-and-kreweras-complements` | A | coxeter-groups | 1778 | `bipartite-coxeter-elements-and-ordered-root-complexes`, `braided-and-symmetric-monoidal-categories` |
| 31 | `noncrossing-partition-lattices-and-kreweras-complements-examples` | B | coxeter-groups | 1779 | `noncrossing-partition-lattices-and-kreweras-complements` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-reflection-length-and-orthogonal-moved-spaces` — Finite Reflection Length and Orthogonal Moved Spaces (4 item(s))

- `def-cg-reflection-length-absolute-order-and-moved-space` · definition — Reflection length, the absolute order on a finite Coxeter group, and the moved and fixed spaces of an orthogonal operator
- `lem-cg-orthogonal-wall-form-and-subspace-restriction` · lemma — The Wall form of an orthogonal operator, subspace restriction, and the interval structure of the orthogonal reflection-length order
- `lem-cg-reflection-factorizations-and-independent-normals` · lemma — Root normals inside the moved space, factorizations into reflections, and independent normals
- `thm-cg-carter-reflection-length-and-absolute-order` · theorem — Carter's reflection-length formula, the absolute order on a finite Coxeter group, and moved-space rigidity under a common upper bound

### `finite-reflection-length-and-orthogonal-moved-spaces-examples` — Finite Reflection Length and Orthogonal Moved Spaces — Examples (3 item(s))

- `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5` · example — Simple and reflection lengths of a long transposition in $S_5$
- `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` · example — The Wall form and line restrictions of a plane rotation, and the necessity of a common upper bound
- `ex-cg-moved-space-intersection-is-not-a-meet-in-a3` · example — A moved-space intersection in $A_3$ that is not the meet

### `bipartite-coxeter-elements-and-ordered-root-complexes` — Bipartite Coxeter Elements and Ordered Root Complexes (6 item(s))

- `def-cg-bipartite-coxeter-element-and-root-recursion` · definition — The bipartite Coxeter element, its ordered prefix roots, and the conditional vector map mu(a) = -2(c-1)^{-1}a
- `lem-cg-steinberg-bipartite-root-enumeration` · lemma — The Coxeter plane, ordered-root enumeration, and invertibility of rho(c) - id
- `lem-cg-ordered-root-pairings-and-simple-systems` · lemma — The mu-dot-root identities, the cone separation, and the canonical simple systems of the subintervals [1, sigma]
- `def-cg-brady-watt-ordered-spherical-root-complex` · definition — The Brady-Watt ordered root complex X(c), its subcomplexes X(sigma) and X(sigma,rho), and their positive-cone realizations
- `lem-cg-ordered-root-complex-is-geometric-simplicial` · lemma — The factorization criterion, linear independence of the faces, and the geometric simplicial structure of X(sigma)
- `thm-cg-root-complex-convex-cones-and-facet-induction` · theorem — The separating-root lemma, the exact facet halfspaces of the added cones, and the spherical convexity of |X(sigma)|

### `bipartite-coxeter-elements-and-ordered-root-complexes-examples` — Bipartite Coxeter Elements and Ordered Root Complexes - Examples (3 item(s))

- `ex-cg-ordered-roots-and-mu-matrix-in-i2-5` · example — Ordered roots and the mu-dot-root matrix in I2(5)
- `ex-cg-ordered-roots-and-mu-matrix-in-a3` · example — Ordered roots and the mu-dot-root matrix in A3
- `ex-cg-cone-intersection-versus-moved-space-meet-in-a3` · example — In A3 the moved spaces meet in a line, while the root complexes have no common nonempty face

### `noncrossing-partition-lattices-and-kreweras-complements` — Noncrossing Partition Lattices and Kreweras Complements (6 item(s))

- `def-cg-coxeter-noncrossing-poset-and-kreweras-map` · definition — Coxeter elements, the noncrossing interval [1,c], and the Kreweras map w ↦ w⁻¹c
- `lem-cg-reversed-reflection-product-and-face-spans` · lemma — Moved space of a reversed reflection product with independent normals
- `lem-cg-convex-root-subcomplex-intersection-and-purity` · lemma — Intersection of root subcomplexes and purity under convexity
- `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves` · lemma — Coxeter elements of tree type are conjugate by source and sink firings
- `thm-cg-noncrossing-finite-lattice-and-conjugacy-independence` · theorem — Finite noncrossing intervals are lattices, independently of the Coxeter element
- `thm-cg-kreweras-complement-and-type-a-partition-model` · theorem — The Kreweras complement of [1,c], and the type-A model by noncrossing set partitions

### `noncrossing-partition-lattices-and-kreweras-complements-examples` — Noncrossing Partition Lattices and Kreweras Complements — Examples (3 item(s))

- `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4` · example — The fourteen elements below (1 2 3 4), the noncrossing partitions of a square, and their Kreweras complements
- `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement` · example — The noncrossing interval of a dihedral group: a five-reflection claw for I2(5) and its complement
- `ex-cg-crossing-interval-and-non-lattice-absolute-order` · example — A crossing double transposition whose interval is Boolean, and the two incomparable maximal Coxeter elements of S3

## Your seams

Your pages depend on another group's:

- `finite-reflection-length-and-orthogonal-moved-spaces` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `bipartite-coxeter-elements-and-ordered-root-complexes` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)
- `bipartite-coxeter-elements-and-ordered-root-complexes` requires `spherical-simplex-metrics-angular-links-and-cones` (group e, batch 8)

Another group's pages depend on yours:

- `finite-coxeter-invariants-and-coinvariant-gradings` (group c) requires your `bipartite-coxeter-elements-and-ordered-root-complexes`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-42-coxeter-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-42-coxeter-32`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
