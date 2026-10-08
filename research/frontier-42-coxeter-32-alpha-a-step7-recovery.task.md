# Step 7 adjudication — group **a**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **1**, **3**: 2 A/B pair(s), 4 page(s), 24 item(s), 0 open rejection(s) over 0 item(s).

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
| 1 | `tensor-coherence-and-algebraic-descent` | A | hopf-hecke-algebras | 1688 | `tensor-products-of-modules`, `modules-and-module-homomorphisms`, `ideals-and-quotient-rings`, `dual-spaces-bilinear-forms-and-inertia`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `chain-conditions-and-semisimple-modules`, `relations-functions-and-quotients` |
| 1 | `tensor-coherence-and-algebraic-descent-examples` | B | hopf-hecke-algebras | 1689 | `tensor-coherence-and-algebraic-descent` |
| 3 | `generic-coxeter-hecke-algebras-and-the-standard-basis` | A | hopf-hecke-algebras | 1710 | `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `polynomial-rings-and-roots` |
| 3 | `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` | B | hopf-hecke-algebras | 1711 | `generic-coxeter-hecke-algebras-and-the-standard-basis`, `the-group-algebra-and-representations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-coherence-and-algebraic-descent` — Tensor Coherence and Algebraic Descent (10 item(s))

- `def-hh-scalar-and-tensor-conventions` · definition — Scalars, tensor powers, the empty tensor, opposite algebras and finite sums
- `lem-hh-tensor-coherence-on-elementary-tensors` · lemma — Associator naturality, pentagon, unit triangle and symmetry hexagons on elementary tensors
- `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` · lemma — Tensoring injections and the kernel of a tensor product of quotient maps over a field
- `lem-hh-coefficient-extension-and-finite-tensor-separation` · lemma — Coefficient separation for an independent family of vectors, with the exact Choice boundary
- `lem-hh-finite-tensor-duality-and-canonical-coevaluation` · lemma — Finite tensor duality and basis-independent coevaluation
- `lem-hh-free-associative-ring-and-relations-descent` · lemma — The free associative R-algebra on a set and descent of relations
- `lem-hh-universal-presentations-and-base-change` · lemma — Presentation base change and transport of explicit bases to commutative specializations
- `lem-hh-finite-polynomial-and-localization-constructions` · lemma — Multivariate polynomial and Laurent rings over commutative rings, domains and fraction fields
- `lem-hh-finite-matrix-and-module-preliminaries` · lemma — Finite matrix and module preliminaries: right inverses, rank invariance, finite length and nilpotent trace
- `lem-hh-regular-module-detects-linear-and-tensor-identities` · lemma — The left regular module and its tensor powers detect linear and tensor identities

### `tensor-coherence-and-algebraic-descent-examples` — Tensor Coherence and Algebraic Descent — Examples (5 item(s))

- `ex-hh-elementary-tensor-presentations-and-invariant-contractions` · example — Many finite presentations of one tensor and the invariant contraction
- `ex-hh-pentagon-on-four-named-vectors` · example — The pentagon on four named vectors in $k^2$
- `ex-hh-tensor-quotient-by-a-one-dimensional-subspace` · example — The tensor quotient by a one-dimensional subspace and its kernel
- `ex-hh-finite-coevaluation-in-two-bases` · example — Finite coevaluation computed in two bases
- `cex-hh-infinite-dimensional-tensor-dual-identification-fails` · counterexample — An infinite-dimensional tensor-dual functional outside the image

### `generic-coxeter-hecke-algebras-and-the-standard-basis` — Generic Coxeter Hecke Algebras and the Standard Basis (5 item(s))

- `def-hh-universal-coxeter-hecke-parameters-and-presentation` · definition — Universal parameters, the generic Coxeter Hecke algebra and generator conjugacy
- `lem-hh-reduced-word-independence-and-length-multiplication` · lemma — Reduced-word independence of T_w and the length-multiplication rules
- `lem-hh-commuting-left-right-hecke-length-operators` · lemma — The commuting left and right length operators and their Hecke relations
- `thm-hh-generic-coxeter-hecke-standard-basis` · theorem — The generic Coxeter Hecke algebra is free with standard basis {T_w}, and its basis survives base change
- `lem-hh-hecke-anti-involution-bar-and-normalization` · lemma — The reversal anti-involution, the bar operator and the multiplicative normalization

### `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` — Generic Coxeter Hecke Algebras and the Standard Basis — Examples (4 item(s))

- `ex-hh-rank-one-hecke-multiplication-in-both-normalizations` · example — The rank-one Hecke algebra in both normalizations
- `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` · example — The complete S3 multiplication table in both normalizations
- `ex-hh-unequal-parameter-dihedral-consistency` · example — Unequal parameters in the dihedral cases: the odd-edge obstruction and the even-edge freedom
- `ex-hh-hecke-specialization-at-v-equals-one` · example — Specialization of the generic Hecke algebra to the group ring

## Your seams

Your pages depend on another group's:

- `generic-coxeter-hecke-algebras-and-the-standard-basis` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)

Another group's pages depend on yours:

- `coxeter-presentations-exchange-and-reduced-word-theorems` (group b) requires your `tensor-coherence-and-algebraic-descent`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `generic-coxeter-hecke-algebras-and-the-standard-basis`

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
