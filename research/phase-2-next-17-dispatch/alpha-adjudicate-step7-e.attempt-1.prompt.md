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
group work, `research/phase-2-next-17-alpha-groups.json` is the assignment: it permits at
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

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

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

run: phase-2-next-17
role: alpha-adjudicate
label: step7-e
covers: 8, 9

# Step 7 adjudication — group **e**, run `phase-2-next-17`

You are the group Alpha for batches **8**, **9**: 3 A/B pair(s), 6 page(s), 60 item(s), 18 open rejection(s) over 18 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-kac-moody-kostant-multiplicity-formula` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `caf0a1700219733d2cb65e07f807822cfd3f27571f7494255251c91d7c850748` |
| `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `abd5ad91f072ba0870c31fb0c889438ad1c5a52b6dfa95d01ac14ce9d193ef0f` |
| `def-residue-two-cocycle-on-a-loop-algebra` | `affine-lie-algebras-and-loop-central-extensions` | gpt-5.6-terra | `db45f784b8cfbffae69553403882b4129fcbd11d3ccd72419dc7e80247a75cc0` |
| `def-untwisted-affine-central-extension` | `affine-lie-algebras-and-loop-central-extensions` | gpt-5.6-terra | `e8c9153ad3e5e9ff763f5edf47717690a60ecbf9f892dcf62be01fcdc2e4f215` |
| `ex-first-weight-layers-of-the-basic-affine-sl2-character` | `the-weyl-kac-character-formula-examples` | gpt-5.6-terra | `0b8e8be9a31ef519dce83fadbc62e24e149c5e8811059eab53ac3cddb5b1b60a` |
| `lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection` | `brauers-first-main-theorem` | gpt-5.6-terra | `8c196fccc315ad846254fd7db3a308d75f5c8798df3f02be547a7b59b1377b6e` |
| `lem-block-induction-exists-under-centralizer-containment` | `brauers-first-main-theorem` | gpt-5.6-terra | `386534dbd7590a4fc6cd4c841587fc5d9803155d662a08e239787bd4fe4ea353` |
| `lem-casimir-norm-excludes-nonzero-denominator-corrections` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `1b047945d9c3716d1901307cc33047ed61a1f7f9ee2619ec0c6a8276bd7e3a1e` |
| `lem-first-main-theorem-local-block-existence` | `brauers-first-main-theorem` | gpt-5.6-terra | `0039136220a41111cfaefbd9587d4825b147e462a10e429aa70efa0b39640b4a` |
| `lem-tensoring-preserves-relative-projectivity-for-finite-group-modules` | `brauers-first-main-theorem` | gpt-5.6-terra | `66a401c06d94d3a4542ccee039d40648ea2e63b0517e208988bd66bbee5882b1` |
| `lem-the-denominator-quotient-has-only-imaginary-cone-support` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `fa34876e4bdb4dde88f86040102432e20ac6da44fe7dbb612e4835159e7a32be` |
| `lem-the-shifted-integrable-character-numerator-is-weyl-skew` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `f5308cb332126b1344b0d655c2dcf0bd5b4e2a14fe85df27935d188ddda5b9eb` |
| `prop-affine-denominator-separates-real-and-imaginary-root-factors` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `bfab55a1d979577e05d891930daa2baf618974192329192f6efc89931f3d67e3` |
| `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product` | `affine-lie-algebras-and-loop-central-extensions` | gpt-5.6-terra | `d2aa7e3aa519e5896e3ef0341c7834896a8449e86899324d8f52303097b546ac` |
| `prop-roots-of-an-untwisted-affine-lie-algebra` | `affine-lie-algebras-and-loop-central-extensions` | gpt-5.6-terra | `0128b3c6028013745133d30833e24cc5f321cc55dbe8989dc504a5d694c215cf` |
| `thm-brauer-green-nagao-block-compatibility` | `brauers-first-main-theorem` | gpt-5.6-terra | `cc4117fad36060a0fbd259b9cf0c3f18a11fd5b4f8314a00c42c72b07517105d` |
| `thm-corresponding-block-bimodules-are-green-correspondents` | `brauers-first-main-theorem` | gpt-5.6-terra | `543008db104ecced1595660137bfc1ca2dc00a10e191e95a11d33d59861f01d3` |
| `thm-weyl-kac-character-formula` | `the-weyl-kac-character-formula` | gpt-5.6-terra | `7e6cd97488fd4344aa0438b4cbfc957c66bd8b39039a012383456f6fc5837e38` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-17`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-17-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-17-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-17-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-17-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-17-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
