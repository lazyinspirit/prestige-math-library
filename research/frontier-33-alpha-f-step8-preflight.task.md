# Step 8 adjudication — group **f**, run `frontier-33`

You are the group Alpha for batches **14**, **15**: 2 A/B pair(s), 4 page(s), 56 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `category-o-finiteness-duality-and-blocks` | A | lie-theory | 510.007 | `homomorphisms-between-verma-modules-and-linkage-examples`, `chain-complexes-and-homology` |
| 14 | `category-o-finiteness-duality-and-blocks-examples` | B | lie-theory | 510.008 | `category-o-finiteness-duality-and-blocks` |
| 15 | `clifford-theory-over-normal-subgroups` | A | representation-theory | 510.037 | `schur-indices-and-fields-of-definition-examples` |
| 15 | `clifford-theory-over-normal-subgroups-examples` | B | representation-theory | 510.038 | `clifford-theory-over-normal-subgroups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `category-o-finiteness-duality-and-blocks` — Category O Finiteness Duality and Blocks (31 item(s))

- `def-bgg-category-o` · definition — The classical BGG category O
- `lem-enveloping-algebra-is-left-and-right-noetherian` · lemma — Noetherianity of the enveloping algebra
- `lem-finite-b-stable-generators-and-weight-flags-in-category-o` · lemma — Finite Borel-stable generators and weight flags
- `prop-equivalent-support-description-of-category-o` · proposition — The support description of category O with finite generation
- `prop-verma-and-finite-dimensional-modules-lie-in-category-o` · proposition — Verma and finite-dimensional weight modules belong to O
- `thm-category-o-is-abelian-and-extension-closed` · theorem — Category O is abelian and extension closed among weight modules
- `lem-n-plus-invariants-exist-in-every-nonzero-o-module` · lemma — A nonzero O-object has a highest-weight vector
- `thm-simple-objects-of-category-o-are-highest-weight-modules` · theorem — The simple objects of O
- `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation` · lemma — Finite filtrations by highest-weight quotients
- `lem-the-center-has-finite-dimensional-image-on-an-o-object` · lemma — The center has finite-dimensional image on each O-object
- `def-generalized-central-character-subcategory-of-o` · definition — Generalized central-character subcategories
- `lem-generalized-central-character-submodules-are-direct-summands` · lemma — Generalized central-character summands
- `thm-category-o-decomposes-by-generalized-central-character` · theorem — Generalized central-character decomposition of O
- `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients` · lemma — Finite weight-space detection of subquotients
- `thm-every-category-o-object-has-finite-length` · theorem — Every object of O has finite length
- `prop-hom-spaces-in-category-o-are-finite-dimensional` · proposition — Finite-dimensional Hom spaces in O
- `def-restricted-dual-of-a-weight-module` · definition — Restricted Chevalley dual
- `lem-simple-highest-weight-modules-are-restricted-self-dual` · lemma — Restricted self-duality of simple highest-weight modules
- `prop-restricted-duality-is-an-exact-involution-on-category-o` · proposition — Restricted duality is exact and involutive on O
- `def-standard-and-costandard-objects-in-category-o` · definition — Standard and costandard objects
- `prop-costandard-objects-have-simple-socles` · proposition — The simple socle of a costandard object
- `def-integral-weyl-group-of-a-weight` · definition — The integral Weyl group of a weight
- `lem-integral-reflection-orbits-are-linkage-equivalence-classes` · lemma — Integral reflection linkage is an equivalence relation
- `lem-extensions-between-distinct-o-linkage-classes-split` · lemma — Simple extensions cannot cross linkage classes
- `lem-o-modules-split-across-separated-simple-classes` · lemma — Splitting finite-length modules across separated simple classes
- `thm-central-character-summands-split-into-linkage-blocks` · theorem — Central-character summands refine into linkage blocks
- `cor-restricted-duality-preserves-linkage-blocks` · corollary — Duality preserves linkage blocks and block orthogonality
- `lem-verma-self-extensions-in-category-o-split` · lemma — Verma self-extensions in O split
- `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` · proposition — Finite-dimensional tensoring preserves O
- `def-grothendieck-group-and-character-of-category-o` · definition — The Grothendieck group and character of O
- `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` · proposition — Simple and standard bases of K0(O)

### `category-o-finiteness-duality-and-blocks-examples` — Category O Finiteness Duality and Blocks — Examples (8 item(s))

- `ex-the-regular-integral-sl2-block-of-category-o` · example — The regular integral sl2 block
- `ex-a-generic-sl2-block-is-semisimple` · example — Nonintegral sl2 central characters split into two simple blocks
- `ex-a-singular-a2-central-character-summand` · example — A singular integral A2 central-character summand
- `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o` · counterexample — The full algebraic Verma dual is too large
- `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o` · counterexample — Finite weight spaces and bounded support do not replace finite generation
- `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o` · counterexample — Finite weight spaces alone do not give category O
- `cex-category-o-is-not-extension-closed-in-all-g-modules` · counterexample — An ambient extension can leave category O
- `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o` · counterexample — O is not closed under arbitrary tensor products

### `clifford-theory-over-normal-subgroups` — Clifford Theory over Normal Subgroups (14 item(s))

- `def-conjugate-representation-and-inertia-group` · definition — Inertia group and characters lying above a normal type
- `lem-normal-isotypical-components-are-permuted-by-translation` · lemma — Translation permutes normal isotypical components
- `lem-normal-restriction-constituents-form-one-conjugacy-orbit` · lemma — Normal restriction has one orbit of constituents
- `thm-clifford-homogeneous-restriction-formula` · theorem — Clifford restriction formula
- `def-clifford-ramification-index` · definition — Clifford ramification index
- `lem-normal-isotypical-component-is-inertia-stable` · lemma — The stabilizer of a nonzero isotypical component
- `lem-induction-from-the-inertia-group-recovers-the-module` · lemma — Reconstruction from the inertia component
- `lem-inducing-an-irreducible-inertia-module-is-irreducible` · lemma — Induction of an inertia constituent is irreducible
- `thm-clifford-correspondence` · theorem — Clifford correspondence
- `cor-normal-subgroup-induction-irreducibility-criterion` · corollary — Normal subgroup induction criterion
- `cor-clifford-ramification-squares-sum-to-inertia-index` · corollary — Ramification indices account for the inertia quotient
- `def-extension-of-an-irreducible-normal-subgroup-representation` · definition — An extension of a normal subgroup representation
- `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces` · lemma — Isotypical evaluation and multiplicity subspaces
- `thm-gallagher-correspondence-for-an-extendible-character` · theorem — Gallagher correspondence for an extendible type

### `clifford-theory-over-normal-subgroups-examples` — Clifford Theory over Normal Subgroups — Examples (3 item(s))

- `ex-clifford-theory-for-s3-over-a3` · example — Clifford correspondence for A3 in S3
- `ex-gallagher-correspondence-for-a-direct-product` · example — Gallagher correspondence for a direct product
- `ex-clifford-boundaries-n-equals-one-and-n-equals-g` · example — Boundary normal subgroups in Clifford theory

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-33`

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
