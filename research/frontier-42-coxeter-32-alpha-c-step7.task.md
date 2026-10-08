# Step 7 adjudication — group **c**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **4**, **17**, **20**: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

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
| 4 | `real-forms-and-reflection-geometry` | A | coxeter-groups | 1724 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `dual-spaces-bilinear-forms-and-inertia`, `sine-cosine-and-the-definition-of-pi`, `group-homomorphisms-and-the-isomorphism-theorems` |
| 4 | `real-forms-and-reflection-geometry-examples` | B | coxeter-groups | 1725 | `real-forms-and-reflection-geometry` |
| 17 | `finite-reflection-arrangements-and-spherical-coxeter-complexes` | A | coxeter-groups | 1750 | `finite-coxeter-diagrams-and-complete-classification`, `finite-lattice-projections-and-coxeter-chain-labels`, `further-trigonometric-identities-and-inverses` |
| 17 | `finite-reflection-arrangements-and-spherical-coxeter-complexes-examples` | B | coxeter-groups | 1751 | `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `the-divergence-theorem-and-classical-stokes`, `hilbert-space-geometry-and-riesz-representation`, `further-trigonometric-identities-and-inverses`, `permutation-statistics-inversions-and-eulerian-numbers` |
| 20 | `finite-coxeter-invariants-and-coinvariant-gradings` | A | coxeter-groups | 1756 | `finite-coxeter-diagrams-and-complete-classification`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `relations-functions-and-quotients`, `bipartite-coxeter-elements-and-ordered-root-complexes`, `complexification-realification-and-real-structures`, `reductive-affine-invariant-theory-and-geometric-quotients` |
| 20 | `finite-coxeter-invariants-and-coinvariant-gradings-examples` | B | coxeter-groups | 1757 | `finite-coxeter-invariants-and-coinvariant-gradings` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `real-forms-and-reflection-geometry` — Real Forms and Reflection Geometry (6 item(s))

- `def-cg-real-coxeter-form-and-reflection` · definition — The real Coxeter form, its radical, reflections, and form-preserving maps
- `lem-cg-reflection-form-invariance-and-rank-two-orders` · lemma — Reflections: involutivity, form invariance, fixed hyperplane, and exact rank-two order
- `def-cg-canonical-reflection-homomorphism` · definition — The canonical reflection homomorphism, roots, reflections, and the positive cone
- `lem-cg-reflection-representation-descends-and-root-norms` · lemma — Descent of the reflection representation, unit root norms, and conjugation of reflections
- `def-cg-dual-chambers-and-reflection-hyperplanes` · definition — The dual action, chambers, faces, and root hyperplanes
- `lem-cg-dual-action-and-chamber-faces-exist` · lemma — The dual action, the faces, and the rank-two chamber tiling

### `real-forms-and-reflection-geometry-examples` — Real Forms and Reflection Geometry — Examples (3 item(s))

- `ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes` · example — Reflection matrices in a positive plane, a Lorentzian plane, and a plane with radical
- `ex-cg-null-normal-admits-no-displayed-reflection` · example — A null normal admits no reflection of the displayed form
- `ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product` · example — The finite dihedral rotation and the infinite unipotent rank-two product

### `finite-reflection-arrangements-and-spherical-coxeter-complexes` — Finite Reflection Arrangements and Spherical Coxeter Complexes (3 item(s))

- `def-cg-finite-reflection-arrangement-and-spherical-chambers` · definition — The finite reflection arrangement, its chambers, the spherical chamber complex, and the coset face poset
- `thm-cg-finite-chamber-tiling-and-coset-face-identification` · theorem — The finite chamber tiling, the face-stabiliser identification, and the spherical Coxeter complex as a triangulation of the sphere
- `thm-cg-finite-parabolic-longest-element-and-opposition` · theorem — The longest element as the opposition of the chamber, and longest elements of finite parabolics

### `finite-reflection-arrangements-and-spherical-coxeter-complexes-examples` — Finite Reflection Arrangements and Spherical Coxeter Complexes — Examples (3 item(s))

- `ex-cg-circle-coxeter-complex-of-i2-5` · example — The Coxeter complex of $I_2(5)$: a circle triangulated by a decagon
- `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` · example — The Coxeter complex of $A_3$: a triangulation of the sphere and the residue of a proper parabolic
- `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` · example — Infinite dihedral type: the chamber system is a line, not a sphere; the contractible model is deferred

### `finite-coxeter-invariants-and-coinvariant-gradings` — Finite Coxeter Invariants and Coinvariant Gradings (8 item(s))

- `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` · lemma — Complexifying a finite Coxeter reflection representation: faithfulness, complex reflections, and the hypotheses of the invariant-theory suppliers
- `def-cg-coxeter-basic-degrees-and-graded-coinvariants` · definition — Basic degrees, exponents, and the graded coinvariant algebra of a finite Coxeter system
- `lem-cg-classical-coxeter-spectra-from-reflection-models` · lemma — The Coxeter elements of the classical types A_n, B_n, D_n and I_2(m): characteristic polynomials, orders and spectral exponents from their reflection models
- `lem-cg-basic-degrees-independent-and-coinvariant-series` · lemma — The basic degrees are independent of the chosen family; Hilbert series of the invariants and of the coinvariant algebra; the order formula and the Molien identity
- `lem-cg-formal-rational-differentials-and-invariant-jacobian` · lemma — Algebraicity of the coordinates over the invariant field and non-vanishing of the invariant Jacobian
- `thm-cg-coinvariant-top-degree-and-discriminant` · theorem — The total degree sum, the invariant Jacobian as the discriminant, anti-invariants, and the top coinvariant class
- `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` · lemma — The six exceptional Coxeter spectra: characteristic polynomials, orders and spectral exponents from exact matrices
- `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` · theorem — A regular Coxeter eigenvector determines the basic degrees: the exponent-residue identification and the complete degree tables for all finite Coxeter types

### `finite-coxeter-invariants-and-coinvariant-gradings-examples` — Finite Coxeter Invariants and Coinvariant Gradings — Examples (3 item(s))

- `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class` · example — The A_2 discriminant, its Jacobian and the top coinvariant class in $\mathbb C[u,z]/(uz,u^3+z^3)$
- `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` · example — The invariants and the coinvariant Hilbert series of $I_2(m)$: an explicit computation and the noncrystallographic contrast
- `ex-cg-e6-and-h3-spectra-from-exact-matrices` · example — The exceptional spectra for E_6 and H_3 computed exactly: characteristic polynomials, cyclotomic factorisations and the resulting degree tables

## Your seams

Your pages depend on another group's:

- `real-forms-and-reflection-geometry` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `finite-reflection-arrangements-and-spherical-coxeter-complexes` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)
- `finite-reflection-arrangements-and-spherical-coxeter-complexes` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)
- `finite-coxeter-invariants-and-coinvariant-gradings` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)
- `finite-coxeter-invariants-and-coinvariant-gradings` requires `bipartite-coxeter-elements-and-ordered-root-complexes` (group j, batch 19)

Another group's pages depend on yours:

- `canonical-roots-signs-and-faithful-reflections` (group b) requires your `real-forms-and-reflection-geometry`
- `spherical-parabolic-cosets-and-the-davis-complex` (group d) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `spherical-simplex-metrics-angular-links-and-cones` (group e) requires your `real-forms-and-reflection-geometry`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `finite-coxeter-invariants-and-coinvariant-gradings`
- `coxeter-euler-forms-and-sortable-chamber-cones` (group i) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `finite-reflection-length-and-orthogonal-moved-spaces` (group j) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `weak-order-inversions-and-lattice-operations` (group k) requires your `finite-reflection-arrangements-and-spherical-coxeter-complexes`
- `affine-reflections-coroot-translations-and-alcoves` (group l) requires your `real-forms-and-reflection-geometry`

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

# Step 7 batch adjudication, `frontier-42-coxeter-32`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
