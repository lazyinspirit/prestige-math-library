# Step 7 adjudication — group **e**, run `phase-2-next-17`

You are the group Alpha for batches **8**, **9**: 3 A/B pair(s), 6 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-e-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `affine-lie-algebras-and-loop-central-extensions` | A | lie-theory | 510.025 | `kac-moody-algebras-from-generalized-cartan-matrices`, `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 8 | `affine-lie-algebras-and-loop-central-extensions-examples` | B | lie-theory | 510.026 | `affine-lie-algebras-and-loop-central-extensions` |
| 8 | `the-weyl-kac-character-formula` | A | lie-theory | 510.029 | `kac-moody-algebras-from-generalized-cartan-matrices`, `affine-lie-algebras-and-loop-central-extensions`, `integrable-highest-weight-kac-moody-modules` |
| 8 | `the-weyl-kac-character-formula-examples` | B | lie-theory | 510.03 | `the-weyl-kac-character-formula` |
| 9 | `brauers-first-main-theorem` | A | representation-theory | 510.061 | `blocks-defect-groups-and-the-brauer-homomorphism`, `vertices-sources-and-the-green-correspondence`, `modular-representations-and-projective-covers`, `brauer-characters-and-decomposition-matrices` |
| 9 | `brauers-first-main-theorem-examples` | B | representation-theory | 510.062 | `brauers-first-main-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `affine-lie-algebras-and-loop-central-extensions` — Affine Lie Algebras and Loop Central Extensions (15 item(s))

- `def-loop-algebra-of-a-simple-lie-algebra` · definition — Loop algebra of a simple Lie algebra
- `def-residue-two-cocycle-on-a-loop-algebra` · definition — Residue two cocycle on a loop algebra
- `lem-the-loop-residue-form-is-alternating` · lemma — The loop residue form is alternating
- `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity` · lemma — The loop residue form satisfies the Lie two cocycle identity
- `def-untwisted-affine-central-extension` · definition — Untwisted affine central extension
- `def-degree-derivation-and-full-untwisted-affine-algebra` · definition — Degree derivation and full untwisted affine algebra
- `prop-the-derived-affine-algebra-omits-only-the-degree-derivation` · proposition — The derived affine algebra omits only the degree derivation
- `def-null-root-central-coroot-and-affine-level` · definition — Null root, central coroot, and affine level
- `lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root` · lemma — The affine simple root alpha zero is delta minus the highest root
- `thm-loop-and-affine-gcm-presentations-are-isomorphic` · theorem — Loop and affine GCM presentations are isomorphic
- `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product` · proposition — Affine Weyl group is a coroot lattice semidirect product
- `prop-roots-of-an-untwisted-affine-lie-algebra` · proposition — Roots of an untwisted affine Lie algebra
- `def-evaluation-module-at-nonzero-loop-parameter` · definition — Evaluation module at a nonzero loop parameter
- `prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d` · proposition — Evaluation modules have level zero and do not extend canonically over d
- `def-twisted-loop-algebra-from-a-diagram-automorphism` · definition — Twisted loop algebra from a diagram automorphism

### `affine-lie-algebras-and-loop-central-extensions-examples` — Affine Lie Algebras and Loop Central Extensions — Examples (6 item(s))

- `ex-affine-sl2-mode-brackets` · example — Affine sl2 mode brackets
- `ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra` · example — The Heisenberg subalgebra of an affine Lie algebra
- `ex-the-affine-a1-simple-roots-and-gcm` · example — The affine A1 simple roots and GCM
- `ex-an-evaluation-module-for-affine-sl2` · example — An evaluation module for affine sl2
- `cex-omitting-the-central-term-breaks-the-affine-gcm-bracket` · counterexample — Omitting the central term breaks the affine GCM bracket
- `cex-the-residue-cocycle-depends-on-invariant-form-normalization` · counterexample — The residue cocycle depends on invariant form normalization

### `the-weyl-kac-character-formula` — The Weyl Kac Character Formula (16 item(s))

- `def-kac-moody-formal-character-completion` · definition — Kac Moody formal character completion
- `def-kac-moody-weyl-vector` · definition — Kac Moody Weyl vector
- `def-kac-moody-denominator-product-with-root-multiplicities` · definition — Kac Moody denominator product with root multiplicities
- `lem-the-kac-moody-denominator-is-weyl-skew` · lemma — The Kac Moody denominator is Weyl skew
- `lem-casimir-constrained-verma-character-expansion` · lemma — Casimir constrained Verma character expansion
- `lem-the-denominator-quotient-has-only-imaginary-cone-support` · lemma — The denominator quotient has only imaginary cone support
- `lem-casimir-norm-excludes-nonzero-denominator-corrections` · lemma — Casimir norm excludes nonzero denominator corrections
- `thm-kac-moody-denominator-identity` · theorem — Kac Moody denominator identity
- `lem-the-shifted-integrable-character-numerator-is-weyl-skew` · lemma — The shifted integrable character numerator is Weyl skew
- `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator` · lemma — Only the highest dot orbit can occur in the integrable numerator
- `thm-weyl-kac-character-formula` · theorem — Weyl Kac character formula
- `def-generalized-kostant-partition-function` · definition — Generalized Kostant partition function
- `cor-kac-moody-kostant-multiplicity-formula` · corollary — Kac Moody Kostant multiplicity formula
- `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula` · corollary — Weyl Kac specializes to the finite Weyl character formula
- `prop-affine-denominator-separates-real-and-imaginary-root-factors` · proposition — Affine denominator separates real and imaginary root factors
- `rem-weyl-kac-products-are-formal-not-analytic-identities-here` · remark — Weyl Kac products are formal not analytic identities here

### `the-weyl-kac-character-formula-examples` — The Weyl Kac Character Formula — Examples (4 item(s))

- `ex-finite-a1-specialization-of-weyl-kac` · example — Finite A1 specialization of Weyl Kac
- `ex-real-and-imaginary-factors-in-the-affine-sl2-denominator` · example — Real and imaginary factors in the affine sl2 denominator
- `ex-first-weight-layers-of-the-basic-affine-sl2-character` · example — First weight layers of the basic affine sl2 character
- `cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator` · counterexample — Using multiplicity one for imaginary roots gives the wrong affine denominator

### `brauers-first-main-theorem` — Brauers First Main Theorem (15 item(s))

- `thm-modular-block-central-characters-correspond-to-blocks` · theorem — Modular block central characters correspond to blocks
- `def-induced-block-from-a-subgroup` · definition — A block induced from a subgroup
- `lem-induced-blocks-have-controlled-defect` · lemma — Induced blocks have controlled defect
- `lem-block-induction-exists-under-centralizer-containment` · lemma — Centralizer containment makes block induction well-defined
- `lem-block-induction-is-transitive` · lemma — Block induction is transitive when both stages are defined
- `lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection` · lemma — Normal p-subgroups fix block idempotents under Brauer projection
- `lem-first-main-theorem-local-block-existence` · lemma — A global block of defect D determines a local block of defect D
- `lem-first-main-theorem-surjectivity` · lemma — Every local full-defect block induces to a global block of defect D
- `lem-first-main-theorem-injectivity` · lemma — Distinct local full-defect blocks induce to distinct global blocks
- `thm-brauer-first-main-theorem` · theorem — Brauer's First Main Theorem
- `def-brauer-correspondent-of-a-block` · definition — The Brauer correspondent of a block
- `thm-corresponding-block-bimodules-are-green-correspondents` · theorem — Corresponding block bimodules are Green correspondents
- `lem-tensoring-preserves-relative-projectivity-for-finite-group-modules` · lemma — Tensoring preserves relative projectivity for finite-group modules
- `thm-brauer-green-nagao-block-compatibility` · theorem — Brauer–Green block compatibility
- `cor-every-block-has-an-indecomposable-module-of-full-defect-vertex` · corollary — Every block contains a module whose vertex is a full defect group

### `brauers-first-main-theorem-examples` — Brauers First Main Theorem — Examples (4 item(s))

- `ex-brauer-correspondence-in-s7` · example — Brauer correspondence for a defect-D8 block of S7 in characteristic 2
- `ex-brauer-correspondence-for-sl2-over-fp` · example — Brauer correspondence for SL2(Fp) in defining characteristic
- `cex-centralizer-containment-is-not-necessary-for-block-induction` · counterexample — Centralizer containment is sufficient but not necessary
- `ex-defect-one-first-main-theorem-boundary` · example — The trivial-defect-group and identity-normalizer boundaries

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-66ff38cc1eb01f8c7fc3ded1 · `lem-first-main-theorem-local-block-existence`** (from group e, gap-a-reader-closes) — Step 3.1's converse ("if any block c of kN induces to B, F5 gives 1=λ_B(f)=λ_c(e)") applies the central-character formula of lem-block-induction-exists-under-centralizer-containment to a block c whose defect group is not known to be D: that lemma's formula λ_{c^G}(z)=λ_c(Br_{D_c}(z)) uses c's own defect group D_c and needs C_G(D_c)≤N, neither of which is established for an arbitrary inducing block (lem-induced-blocks-have-controlled-defect gives only D_c⊆ a conjugate of D). The uniqueness conclusion itself is standard, and the injectivity step actually used downstream (lem-first-main-theorem-injectivity) assumes both local blocks have defect group D, so this is a gap in the written argument rather than an identified false claim.
- **s8a-f39e67bd5f03845f3d4386c4 · `lem-casimir-constrained-verma-character-expansion`** (from group e, gap-a-reader-closes) — Steps 2.1 and 3.1 apply the Casimir scalar and the simple-quotient citation to simple subquotients L(μ) of V, i.e. they use the standard fact that simple objects of O are highest-weight modules; that identification is nowhere stated or cited on the page (the cited items concern Verma modules and primitive vectors only). Step 3.1's "pointwise finite defining operator" is likewise only available through the cited Casimir theorem.
- **s8a-dac3cdaa167eb66c97cc157b · `lem-the-denominator-quotient-has-only-imaginary-cone-support`** (from group e, gap-a-reader-closes) — Step 2.1 needs the base slices p_0=1−x and a_0=1−x. The claim about a_0 is justified in one sentence ("a reduced second letter is different from i and its reflected root has a nonzero coordinate off that axis"); the required computation, that s_iα_j=α_j−a_{ij}α_i has nonzero j-coordinate (using a_{ii}=2 and α_i independence), is not written out, and m(b)=−Σ_{j≠i}a_{ij}b_j silently uses a_{ij}≤0. The rest of the induction is explicit.
- **s8a-2582a4935acc521974ca421e · `lem-the-kac-moody-denominator-is-weyl-skew`** (from group e, presentation) — Step 1.1 cites "F1's root conventions" for the fact that the only roots on the i-th axis are ±α_i and that the α_i-factor has multiplicity one; F1 is the denominator definition, which asserts this only in passing and cites a different item. The input really used is prop-kac-moody-root-spaces-are-finite-dimensional, which does state it.
- **s8a-98ddf455f1e4d118aaee7a25 · `def-residue-two-cocycle-on-a-loop-algebra`** (from group e, presentation) — The definition body already discusses the affine normalization: it speaks of "a longest root" and asserts B(e_θ,f_θ)=1 "[o]nce the highest root θ is identified as long", while also saying no highest-root existence theorem is assumed here. Existence, uniqueness and longness of a highest root are proved later, in lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root; the forward dependence inside a Definition is at minimum not stated as such.
- **s8a-c790502b34b2ea2ae8762203 · `def-induced-block-from-a-subgroup`** (from group e, presentation) — The convention that b^G is undefined whenever more than one block of kG contains b as a restriction summand is the item's own definitional choice; it is stated clearly, but a reader coming from the Brauer-correspondence usage (where b^G is attached to the local block of kN via Br_D) may misread "more than one block" as referring to blocks of kN rather than of kG.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-17`

Read `research/phase-2-next-17-judge-closure.json`,
`research/phase-2-next-17-judge.jsonl`,
`research/phase-2-next-17-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-17-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-17-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-17-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
