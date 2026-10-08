# Step 7 adjudication — group **h**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **13**, **21**, **25**: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

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
| 13 | `finite-coxeter-diagrams-and-complete-classification` | A | coxeter-groups | 1742 | `tits-cones-chambers-and-parabolic-stabilizers` |
| 13 | `finite-coxeter-diagrams-and-complete-classification-examples` | B | coxeter-groups | 1743 | `finite-coxeter-diagrams-and-complete-classification` |
| 21 | `crystallographic-root-lattices-and-weyl-group-interfaces` | A | coxeter-groups | 1758 | `finite-coxeter-diagrams-and-complete-classification`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| 21 | `crystallographic-root-lattices-and-weyl-group-interfaces-examples` | B | coxeter-groups | 1759 | `crystallographic-root-lattices-and-weyl-group-interfaces` |
| 25 | `coxeter-descents-poincare-polynomials-and-growth` | A | coxeter-groups | 1766 | `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `parabolic-subgroups-and-double-coset-geometry`, `finite-coxeter-invariants-and-coinvariant-gradings`, `weak-order-inversions-and-lattice-operations`, `permutation-statistics-inversions-and-eulerian-numbers`, `braided-and-symmetric-monoidal-categories` |
| 25 | `coxeter-descents-poincare-polynomials-and-growth-examples` | B | coxeter-groups | 1767 | `coxeter-descents-poincare-polynomials-and-growth` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-coxeter-diagrams-and-complete-classification` — Finite Coxeter Diagrams and Complete Classification (5 item(s))

- `def-cg-coxeter-diagram-components-and-finite-type` · definition — Coxeter diagrams: edges, labels, components and finite type
- `lem-cg-diagram-products-and-invariant-form-comparison` · lemma — Disconnected diagrams, direct products, and comparison of invariant forms
- `thm-cg-finite-type-positive-definite-criterion` · theorem — Finiteness criterion: W is finite exactly when the Coxeter form is positive definite
- `lem-cg-positive-definite-diagram-exclusions` · lemma — Exclusions for positive definite diagrams: trees, valency, labels, chains and arms
- `thm-cg-finite-coxeter-classification-including-h-and-dihedral` · theorem — Classification of finite Coxeter systems, including the H and dihedral families

### `finite-coxeter-diagrams-and-complete-classification-examples` — Finite Coxeter Diagrams and Complete Classification — Examples (5 item(s))

- `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences` · example — Dihedral diagrams $I_2(m)$: Gram determinants, the infinite case, and the low-rank coincidences
- `ex-cg-h3-and-h4-gram-determinants-and-principal-minors` · example — Gram determinants and principal minors of the non-crystallographic types $H_3$ and $H_4$
- `ex-cg-bn-and-cn-are-the-same-coxeter-diagram` · example — $B_n$ and $C_n$ define the same Coxeter diagram and the same Coxeter group
- `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses` · example — A cycle and an overlong arm: explicit non-positive witnesses
- `ex-cg-path-determinant-recursion-and-arm-inequality` · example — Path determinants $d_k=d_{k-1}-\cos^2(\pi/m)d_{k-2}$ and the three-arm inequality

### `crystallographic-root-lattices-and-weyl-group-interfaces` — Crystallographic Root Lattices and Weyl Group Interfaces (3 item(s))

- `def-cg-crystallographic-scaling-coroot-and-lattice` · definition — Crystallographic scalings: scaled simple roots, coroots and the root, coroot and weight lattices
- `lem-cg-integer-pairings-and-allowed-dihedral-labels` · lemma — Cartan-number products, allowed edge labels, tree scalings and reflection stability
- `thm-cg-crystallographic-finite-type-and-lattice-stability` · theorem — Crystallographic finite type: the Weyl types, reduced realizations and lattice stability

### `crystallographic-root-lattices-and-weyl-group-interfaces-examples` — Crystallographic Root Lattices and Weyl Group Interfaces — Examples (4 item(s))

- `ex-cg-a2-root-and-weight-lattices` · example — The A2 root and weight lattices: P/Q of order three
- `ex-cg-b2-c2-dual-realizations-and-lattices` · example — The two realizations of I2(4): B2 and C2 with their lattices and duality
- `ex-cg-g2-from-i2-six` · example — G2 from I2(6): the scaled realization and its twelve roots
- `cex-cg-i2-five-is-not-crystallographic` · counterexample — I2(5) admits no crystallographic scaling and no reduced crystallographic root system with that base angle

### `coxeter-descents-poincare-polynomials-and-growth` — Coxeter Descents, Poincaré Polynomials, and Growth (6 item(s))

- `def-cg-length-series-descent-generating-polynomial` · definition — Length generating series, descent-class series, spherical subsets, and the multivariate descent polynomial
- `thm-cg-parabolic-growth-factorization-and-rationality` · theorem — Finite descent parabolics, parabolic factorization, the Steinberg inclusion-exclusion identity, and rational growth
- `lem-cg-fundamental-weight-orbit-and-schreier-distance` · lemma — The orbit of a dual fundamental functional: stabilizer, minimal coset length, Schreier distance, and the quotient formula
- `lem-cg-classical-type-poincare-products` · lemma — Classical Poincare products for A, B, D and I2(m) from the permutation and signed-permutation models
- `lem-cg-exceptional-parabolic-orbit-length-certificates` · lemma — Exceptional parabolic-orbit length certificates for E6, E7, E8, F4, H3 and H4
- `thm-cg-finite-poincare-exponent-product-and-reciprocity` · theorem — The Poincare polynomial as a product of q-integers of the basic degrees, with longest-element reciprocity

### `coxeter-descents-poincare-polynomials-and-growth-examples` — Coxeter Descents, Poincaré Polynomials, and Growth — Examples (3 item(s))

- `ex-cg-classical-poincare-products-by-insertion` · example — Poincare products for Sn, Bn and Dn by explicit insertion
- `ex-cg-a2-descent-inclusion-exclusion-and-reciprocity` · example — The A2 = S3 case: Steinberg inclusion-exclusion, degree product, and reciprocity
- `ex-cg-infinite-dihedral-growth` · example — Infinite dihedral growth, the infinite Steinberg identity, and the failure of polynomial reciprocity

## Your seams

Your pages depend on another group's:

- `finite-coxeter-diagrams-and-complete-classification` requires `tits-cones-chambers-and-parabolic-stabilizers` (group b, batch 9)
- `coxeter-descents-poincare-polynomials-and-growth` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `coxeter-descents-poincare-polynomials-and-growth` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `coxeter-descents-poincare-polynomials-and-growth` requires `finite-coxeter-invariants-and-coinvariant-gradings` (group c, batch 20)
- `coxeter-descents-poincare-polynomials-and-growth` requires `weak-order-inversions-and-lattice-operations` (group k, batch 23)

Another group's pages depend on yours:

- `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c) requires your `finite-coxeter-diagrams-and-complete-classification`
- `finite-coxeter-invariants-and-coinvariant-gradings` (group c) requires your `finite-coxeter-diagrams-and-complete-classification`
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `finite-coxeter-diagrams-and-complete-classification`
- `affine-reflections-coroot-translations-and-alcoves` (group l) requires your `crystallographic-root-lattices-and-weyl-group-interfaces`
- `affine-coxeter-diagrams-and-semidefinite-classification` (group l) requires your `finite-coxeter-diagrams-and-complete-classification`

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
