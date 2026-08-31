# Alpha

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
group work, `research/frontier-27-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
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

run: frontier-27
role: alpha-adjudicate
label: step8-b
covers: 1, 5, 6

# Step 8 — group **b**, run `frontier-27`

You are the group Alpha for batches **1**, **5**, **6**: 3 A/B pair(s), 6 page(s), 126 item(s), 76 open rejection(s) over 76 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `krull-dimension-and-height-theorems` | A | commutative-algebra | 111.019 | `dedekind-domains-and-ideal-classes-examples` |
| 1 | `krull-dimension-and-height-theorems-examples` | B | commutative-algebra | 111.02 | `krull-dimension-and-height-theorems` |
| 5 | `closed-monoidal-categories-and-the-internal-hom` | A | category-theory | 365.027 | `strictification-and-mac-lanes-coherence-theorem-examples` |
| 5 | `closed-monoidal-categories-and-the-internal-hom-examples` | B | category-theory | 365.028 | `closed-monoidal-categories-and-the-internal-hom` |
| 6 | `long-exact-sequences-in-homology` | A | homological-algebra | 365.043 | `mapping-cones-cylinders-and-chain-triangles-examples`, `the-diagram-lemmas-in-an-abelian-category` |
| 6 | `long-exact-sequences-in-homology-examples` | B | homological-algebra | 365.044 | `long-exact-sequences-in-homology` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krull-dimension-and-height-theorems` — Krull Dimension and Height Theorems (37 item(s))

- `cor-minimal-prime-has-height-zero` · corollary — Minimal primes are exactly the primes of height zero
- `lem-prime-chains-in-a-domain-start-at-zero` · lemma — In a domain, every prime chain below a prime begins at (0)
- `lem-height-in-quotient-is-relative-chain-length` · lemma — Height in a quotient measures chains between two primes
- `lem-principal-ideal-theorem-reduction-to-local-domain` · lemma — Reduce the principal ideal theorem to a Noetherian local domain
- `lem-principal-ideal-theorem-associated-prime-step` · lemma — The associated-prime step inside the principal ideal theorem
- `thm-krull-principal-ideal-theorem` · theorem — Krull's principal ideal theorem
- `cor-noetherian-local-domain-dimension-zero-iff-field` · corollary — A Noetherian local domain has dimension zero exactly when it is a field
- `cor-minimal-prime-over-a-nonzerodivisor-has-height-one` · corollary — A minimal prime over a principal nonzerodivisor has height one
- `lem-height-theorem-first-generator-reduction` · lemma — Choose the first generator's minimal prime inside the target prime
- `lem-height-theorem-quotient-induction` · lemma — Quotienting by the first minimal prime reduces the remaining height count
- `thm-krull-height-theorem` · theorem — Krull's height theorem
- `cor-height-of-a-prime-bounded-by-minimal-number-of-generators` · corollary — Height is bounded by the minimal number of local generators
- `lem-height-converse-parameter-selection` · lemma — Select generators witnessing the converse height theorem
- `thm-krull-height-theorem-converse` · theorem — Converse to Krull's height theorem in localised form
- `def-system-of-parameters-and-parameter-ideal` · definition — Systems of parameters and parameter ideals
- `lem-parameter-ideal-equivalent-m-primary` · lemma — Parameter ideals are exactly the m-primary d-generated ideals
- `lem-parameter-selection-avoids-minimal-components` · lemma — Choose a parameter that misses the top-dimensional minimal components
- `lem-parameter-dimension-drop-is-exact` · lemma — A first parameter lowers local dimension by exactly one
- `thm-existence-of-systems-of-parameters` · theorem — Every finite-dimensional Noetherian local ring has a system of parameters
- `thm-dimension-as-minimal-number-of-radical-generators` · theorem — Local dimension is the minimal number of generators of an ideal with maximal radical
- `cor-dimension-drops-under-a-parameter` · corollary — Quotienting by a first parameter lowers local dimension by one
- `cor-localisation-dimension-does-not-increase` · corollary — Localisation does not increase Krull dimension
- `cor-quotient-dimension-does-not-increase` · corollary — Passing to a quotient does not increase Krull dimension
- `lem-polynomial-ring-dimension-lower-chain` · lemma — A prime chain in R extends to a longer chain in R[x]
- `lem-polynomial-prime-contraction-height-jump-at-most-one` · lemma — Only one saturated step can lie over a fixed contracted prime in R[x]
- `lem-polynomial-ring-dimension-upper-bound` · lemma — A prime chain in R[x] has length at most one more than its contraction chain
- `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring` · theorem — A Noetherian polynomial ring has dimension one larger
- `cor-dimension-of-a-finite-polynomial-ring-over-a-field` · corollary — A polynomial ring in n variables over a field has dimension n
- `lem-affine-domain-normalisation-dimension-upper-bound` · lemma — A finite affine extension of a polynomial ring has dimension at most the number of variables
- `lem-affine-domain-normalisation-dimension-lower-bound` · lemma — A finite affine extension of a polynomial ring has dimension at least the number of variables
- `thm-affine-domain-dimension-transcendence-degree` · theorem — Affine-domain dimension equals transcendence degree
- `lem-affine-domain-chain-dimension-formula-step` · lemma — Transcendence degrees along affine prime quotients add correctly
- `thm-dimension-formula-for-affine-domains` · theorem — The dimension formula for affine domains
- `cor-height-plus-quotient-dimension-affine-domain` · corollary — Height plus quotient dimension equals ambient dimension in an affine domain
- `cor-affine-domain-maximal-ideal-height-equals-dimension` · corollary — Maximal ideals of an affine domain have full height
- `cor-maximal-chains-in-affine-domains-have-equal-length` · corollary — Maximal chains in an affine domain all have the same length
- `rem-catenarity-boundary` · remark — Why the equal-chain statement stops at affine domains

### `krull-dimension-and-height-theorems-examples` — Krull Dimension and Height Theorems — Examples (7 item(s))

- `ex-relative-height-in-a-quotient` · example — Relative height in a quotient of k[x,y,z]
- `ex-principal-ideal-height-zero-for-a-zerodivisor` · example — A principal ideal generated by a zero divisor can have a minimal prime of height zero
- `ex-height-theorem-bound-sharp` · example — Coordinate ideals show the height bound is sharp
- `ex-system-of-parameters-not-a-minimal-generating-set` · example — A system of parameters need not minimally generate the maximal ideal
- `ex-localisation-strictly-lowers-dimension` · example — Localisation can strictly lower dimension
- `ex-polynomial-dimension-zero-ring-boundary` · example — The polynomial-dimension formula at fields, Artinian rings, and the zero-ring boundary
- `ex-affine-dimension-formula` · example — The affine dimension formula on a plane curve domain

### `closed-monoidal-categories-and-the-internal-hom` — Closed Monoidal Categories and the Internal Hom (33 item(s))

- `def-left-closed-and-right-closed-monoidal-category` · definition — Left-closed, right-closed, and biclosed monoidal categories
- `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` · theorem — The internal hom is unique up to unique natural isomorphism
- `def-the-internal-hom-and-its-evaluation-morphism` · definition — The internal hom and its evaluation morphism
- `thm-in-a-symmetric-monoidal-category-the-two-closures-agree` · theorem — A supplied symmetry identifies the left and right internal homs
- `cex-a-monoidal-category-need-not-be-closed` · counterexample — A monoidal category need not be closed
- `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable` · theorem — In a biclosed monoidal category tensor is cocontinuous in each variable
- `thm-the-internal-hom-is-continuous-in-each-variable` · theorem — The internal hom preserves limits in the covariant variable and sends colimits to limits in the contravariant variable
- `thm-the-internal-hom-composition-morphism` · theorem — The internal-hom composition morphism
- `thm-the-unit-is-an-internal-hom-unit` · theorem — The tensor unit is an internal-hom unit
- `def-exponential-object` · definition — Exponential object
- `def-cartesian-closed-category` · definition — Cartesian closed category
- `thm-set-is-cartesian-closed` · theorem — Set is cartesian closed
- `thm-the-category-of-small-categories-is-cartesian-closed` · theorem — The category of small categories is cartesian closed
- `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed` · theorem — A presheaf category on a small category is cartesian closed
- `thm-currying-and-uncurrying-are-mutually-inverse` · theorem — Currying and uncurrying are mutually inverse
- `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` · corollary — In a cartesian closed category, any initial object is strict
- `thm-cartesian-closed-preorders-have-relative-implications` · theorem — A cartesian closed preorder has relative implications
- `def-slice-category-and-the-pullback-functor` · definition — Slice categories, composition, and pullback along a morphism
- `def-locally-cartesian-closed-category` · definition — Locally cartesian closed category
- `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed` · theorem — Slices of a locally cartesian closed category are locally cartesian closed
- `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed` · theorem — A locally cartesian closed category with a terminal object is cartesian closed
- `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits` · theorem — A locally cartesian closed category has pullbacks, and with a terminal object it has all finite limits
- `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` · theorem — Local cartesian closure is equivalent to every pullback functor having a right adjoint
- `thm-set-is-locally-cartesian-closed` · theorem — Set is locally cartesian closed
- `def-subobject-classifier` · definition — Subobject classifier
- `thm-a-subobject-classifier-represents-the-subobject-functor` · theorem — With a supplied well-powering, a subobject classifier represents the subobject functor
- `thm-the-two-element-set-is-a-subobject-classifier-for-sets` · theorem — The two-element set is a subobject classifier for Set
- `rem-what-is-not-developed-here` · remark — Boundary: this page stops before elementary and Grothendieck toposes
- `fs-every-monoidal-category-is-closed` · false-statement — FALSE: every monoidal category is closed
- `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category` · false-statement — FALSE: the left and right internal homs agree in every monoidal category
- `fs-a-cartesian-closed-category-has-all-finite-limits` · false-statement — FALSE: every cartesian closed category has all finite limits
- `fs-every-cartesian-closed-category-is-locally-cartesian-closed` · false-statement — FALSE: every cartesian closed category is locally cartesian closed
- `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` · false-statement — FALSE: a subobject classifier is any object representing monomorphisms

### `closed-monoidal-categories-and-the-internal-hom-examples` — Closed Monoidal Categories and the Internal Hom - Examples (6 item(s))

- `ex-the-function-set-as-an-exponential-computed` · example — A function set computed as an exponential object
- `ex-currying-for-sets-of-three-variables` · example — Currying for sets of three variables
- `ex-the-internal-hom-of-abelian-groups` · example — The internal hom of abelian groups
- `ex-the-exponential-of-two-small-categories` · example — The exponential of two small categories computed on a walking-arrow source
- `ex-a-locally-cartesian-closed-slice-computed` · example — A slice of Set computed as a locally cartesian closed category
- `ex-the-subobject-classifier-of-a-presheaf-category` · example — The subobject classifier in a presheaf category on the walking arrow

### `long-exact-sequences-in-homology` — Long Exact Sequences in Homology (35 item(s))

- `def-morphism-of-short-exact-sequences-of-complexes` · definition — A morphism of short exact sequences of complexes
- `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes` · lemma — The cycle-boundary diagram associated to a short exact sequence of complexes
- `def-preconnecting-arrow-on-cycles` · definition — The preconnecting arrow on cycles
- `lem-the-preconnecting-arrow-annihilates-boundaries` · lemma — The preconnecting arrow annihilates boundaries
- `def-connecting-morphism-in-homology` · definition — The connecting morphism in homology
- `prop-elementwise-formula-for-the-connecting-map-in-module-categories` · proposition — Elementwise formula for the connecting map in module categories
- `lem-exactness-at-the-homology-of-the-left-complex` · lemma — Exactness at the homology of the left complex
- `lem-exactness-at-the-homology-of-the-middle-complex` · lemma — Exactness at the homology of the middle complex
- `lem-exactness-at-the-homology-of-the-right-complex` · lemma — Exactness at the homology of the right complex
- `lem-exactness-at-the-target-of-the-connecting-map` · lemma — Exactness at the target of the connecting map
- `thm-long-exact-sequence-in-homology` · theorem — The long exact sequence in homology
- `thm-naturality-of-the-homology-connecting-morphism` · theorem — Naturality of the homology connecting morphism
- `cor-the-long-exact-homology-sequence-is-natural` · corollary — The long exact homology sequence is natural
- `thm-long-exact-sequence-in-cohomology` · theorem — The long exact sequence in cohomology
- `thm-naturality-of-the-cohomology-connecting-morphism` · theorem — Naturality of the cohomology connecting morphism
- `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology` · corollary — A short exact sequence with acyclic middle complex identifies neighbouring homology
- `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes` · corollary — Two-out-of-three for acyclicity in a short exact sequence of complexes
- `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram` · corollary — Two-out-of-three for quasi-isomorphisms in a short exact sequence diagram
- `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` · proposition — The connecting morphism vanishes for a chain-split short exact sequence
- `thm-the-cone-long-exact-sequence` · theorem — The cone long exact sequence
- `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` · proposition — The cone connecting map agrees with the shifted identity up to the declared sign
- `cor-the-cone-criterion-from-the-general-long-exact-sequence` · corollary — The cone criterion from the general long exact sequence
- `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` · theorem — The long exact sequence of relative homology for a composable pair
- `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone` · corollary — A chain map between acyclic complexes has an acyclic cone
- `prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence` · proposition — An exact functor carries the long exact homology sequence to the corresponding long exact sequence
- `cor-homology-of-a-degreewise-split-direct-sum-sequence` · corollary — Homology of a chain-split direct-sum sequence
- `cor-short-five-lemma-for-quasi-isomorphisms` · corollary — Short five lemma for quasi-isomorphisms
- `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees` · proposition — A short exact sequence of complexes gives six-term exact sequences when homology is concentrated in two degrees
- `def-homological-delta-functor-carried-by-homology-of-complexes` · definition — The homological delta-functor carried by homology of complexes
- `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` · proposition — Homology of complexes satisfies the delta-functor naturality and exactness laws
- `fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof` · false-statement — FALSE: the connecting morphism is defined by choosing one lift with no independence proof
- `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map` · false-statement — FALSE: a degreewise split short exact sequence of complexes has zero connecting map
- `fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes` · false-statement — FALSE: the homology functor is exact on short exact sequences of complexes
- `fs-the-cohomology-connecting-morphism-lowers-degree` · false-statement — FALSE: the cohomology connecting morphism lowers degree
- `fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square` · false-statement — FALSE: naturality of the long exact sequence follows without checking the connecting square

### `long-exact-sequences-in-homology-examples` — Long Exact Sequences in Homology — Examples (8 item(s))

- `ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes` · example — The connecting map for a short exact sequence of two-term complexes
- `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` · example — A degreewise split sequence with nonzero connecting map
- `ex-the-cone-long-exact-sequence-for-multiplication-by-m` · example — The cone long exact sequence for multiplication by m
- `ex-two-out-of-three-for-a-diagram-of-finite-complexes` · example — Two-out-of-three for a diagram of finite complexes
- `ex-a-six-term-cohomology-sequence` · example — A six-term cohomology sequence
- `cex-homology-is-not-an-exact-functor` · counterexample — Homology is not an exact functor
- `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` · example — Naturality of a connecting map under a map of coefficient sequences
- `ex-relative-homology-of-a-composable-pair-of-stalk-complexes` · example — Relative homology of a composable pair of stalk complexes

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-homology-is-not-an-exact-functor` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `27a90c4e50162e207b2be752f2e8d157b34d5712243467302ce676b016bb321c` |
| `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `2ba27049828f384d9017968e18d11fd0ad2846a3683df2847e5a200f6e0bf6ad` |
| `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `0a8be97922b5a6c8f0aaa94d8145582ea73f30b27c48b2c1b7e060fa9c48a8c9` |
| `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `ebd0b55f8dab6134121fe375cfe443420500985e2c29e40d7c4199a8b1f22860` |
| `cor-dimension-of-a-finite-polynomial-ring-over-a-field` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `68de272966a6e8448c8e896313406ad9313d45c8bd95ede00f4e39299de1ffb5` |
| `cor-height-of-a-prime-bounded-by-minimal-number-of-generators` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `568f4e8f47d30a4183be58f7ee4fca3e23f2e6bfcfa7182647414234992bccde` |
| `cor-localisation-dimension-does-not-increase` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `c1442c26e91ea030756447b49aed305aaec8be2faf5dd13c45434df0536537ea` |
| `cor-minimal-prime-over-a-nonzerodivisor-has-height-one` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `ac65ffd12922ace6ba86e14ebcae1f9d4d4a316514b1670ce28259419b5c3e4c` |
| `cor-quotient-dimension-does-not-increase` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `b53a6a1b528972d03088817e90a1658af77ac15ed3f0a06599964cda80f2b93f` |
| `cor-the-cone-criterion-from-the-general-long-exact-sequence` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `1b2b72dc63ca1e8a5c67301905fc4521b14b2af9b8e6b9da2307354270908d2e` |
| `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `70ee93c0920a43cd0bf3571734245d673b09515b0db18d380ce078fa4bc0d5ed` |
| `def-connecting-morphism-in-homology` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `4b05045384a26a231213a0da8cf5f76a63f48d60808757922f58007e2cfe5f9a` |
| `def-exponential-object` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `091ae6fc6ec2df9352fe071ec8f92c730dcdc22a077e0d30f61e46a055a879da` |
| `def-preconnecting-arrow-on-cycles` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `7b2f72b654f4ddb423ba352347215c2b7111149435bd5e1a4aff60329030bcfd` |
| `def-slice-category-and-the-pullback-functor` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `32633f8f602e5117dfbcf77b8f54dce27be427fe54ad75b65de84387596e273f` |
| `def-system-of-parameters-and-parameter-ideal` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `a488bb0f529c91882ec3c25a5614dbc2e40af924bfc84241cf5926bc061e1b3d` |
| `ex-a-locally-cartesian-closed-slice-computed` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `d676fc1f1dbdde106d49f7133240847008f3dc43beab5c7ceb6644477cf23f13` |
| `ex-a-six-term-cohomology-sequence` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `e9e6e3f2bd3a3e25bdc808255fbad6a89eb728df0c65431f43f201ca16509c28` |
| `ex-affine-dimension-formula` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `7444ffa1c7fe6261b493d5636a01507e9789f40137576eb1c72137d8e4b336ab` |
| `ex-currying-for-sets-of-three-variables` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `906aceeeb4ee32b2908cb150f9eef2a82bec242cff706c5252e92e2db64bc381` |
| `ex-height-theorem-bound-sharp` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `74eae5cbaca7877bbac555a548dfea2fc277132f1adfd50ca2d1ef18ada0fce8` |
| `ex-localisation-strictly-lowers-dimension` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `39718cc5de81954528b4ee5dab996c138a4067ea02a54aa48291d3ebee716c17` |
| `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `84c2ea48cfac63882fde66af049df7521cf7712e72788aa24642cf1261700196` |
| `ex-polynomial-dimension-zero-ring-boundary` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `1535b79dafb36fab9f9396991947c0dc652a75d09f20c25f49365984b14cc1ca` |
| `ex-principal-ideal-height-zero-for-a-zerodivisor` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `1334ee022ef1ed0b41a72ae7f80862a48a997efce7a7380e5cfa9da242d0d377` |
| `ex-relative-homology-of-a-composable-pair-of-stalk-complexes` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `ff2f056c8a0bfea5dc26d19ee233a259025c4378311ba03dedcdcaf8c4b9af9a` |
| `ex-system-of-parameters-not-a-minimal-generating-set` | `krull-dimension-and-height-theorems-examples` | gpt-5.6-terra | `970870f4131f77ae6fe7522f4f52e817c84b99c35ba36a76ab8f3e520f27d6ca` |
| `ex-the-cone-long-exact-sequence-for-multiplication-by-m` | `long-exact-sequences-in-homology-examples` | gpt-5.6-terra | `cf810db7b98e4da67612743644897218fa4755220c3a69f3389ee3fdb778464b` |
| `ex-the-exponential-of-two-small-categories` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `6f8b41b9025d800a8439c9baa347db415cdc7414b5052af66bf599027c06f600` |
| `ex-the-subobject-classifier-of-a-presheaf-category` | `closed-monoidal-categories-and-the-internal-hom-examples` | gpt-5.6-terra | `632c8f752f82a0f7cc283cee73806e579a20c897fe9b2549ec4f2d71294602d1` |
| `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `44dca19dc34914f21eefd74238ae7cb6153202466ae8867224ed29506b0cdbcb` |
| `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `5d9670ad2c10b43742af0cd24574e13bfa77189f0bb0473f4b683071fd7b16f8` |
| `lem-affine-domain-normalisation-dimension-lower-bound` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `95701a8979e0593f624f592fee29c275436944d88ccd02adcb3c2224e3378c46` |
| `lem-affine-domain-normalisation-dimension-upper-bound` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `e49b406f6b95fbedae3819043606b0980f191a0368351446071331deb76bd891` |
| `lem-exactness-at-the-homology-of-the-left-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `b00312103036c906f6a3a71a2a1cef70c362f52178dbbde5a031588f4b944e71` |
| `lem-exactness-at-the-homology-of-the-middle-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `2987840ed996f058fe35e63c89ea8b606a69800f07c8551ad17b839f6f8f97e0` |
| `lem-exactness-at-the-homology-of-the-right-complex` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `ff5840a7ebc2ccfc633c1ed8588009ad91625882654ddfe67c3796933f902bc4` |
| `lem-exactness-at-the-target-of-the-connecting-map` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `f71a0c381bf56201337dea29bfd826a6e40ddd093427b6ddcfd03cccd7e3907a` |
| `lem-height-converse-parameter-selection` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `2bab5cf56976f66d496b846f6316d8067765f6442b9e40f989280eafb9743078` |
| `lem-height-in-quotient-is-relative-chain-length` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `68a24bdfe247031bb92bda5642497ec6a9791a769507bc3d614433e411387f4a` |
| `lem-height-theorem-first-generator-reduction` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `6af089888250a6805fed37e556b8d79593269f67977ce789748ece7048f2040e` |
| `lem-height-theorem-quotient-induction` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `93035b82c32cb911317df95b6671ed953a1c1f4cfd0eb819ca1fa1baaae7023e` |
| `lem-parameter-dimension-drop-is-exact` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `a024c8e094f1cff78367864784661e24a6a31b8f1d5f31bdf1a1989228b46797` |
| `lem-parameter-ideal-equivalent-m-primary` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `c1a24cfe7c70d3b72e37c67ee2196e44b2ead394edef90b4e6a1389d5a8c03f6` |
| `lem-parameter-selection-avoids-minimal-components` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `a3bda2431b1789eae86ed2ebce2a8918f61bdb42f5e305f04e772dcf1d20f218` |
| `lem-polynomial-prime-contraction-height-jump-at-most-one` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `0738d6743bcb63229a916e1ea0eb04f3c6f814f0b55a553f69eb169d01c9567d` |
| `lem-polynomial-ring-dimension-upper-bound` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `1522872f58fe972dcdeceec8d3501ffb35c442540b98355b6f153ac0fadb969c` |
| `lem-principal-ideal-theorem-associated-prime-step` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `6b1bb062654e1be37cecd79201a5661b9d7b1a56cfeb60caa0c98b6668d82ced` |
| `lem-principal-ideal-theorem-reduction-to-local-domain` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `e0f593ee600436e895ae495a2140cce3e1d4ceb1f101b14902e04887b412aa14` |
| `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `4487a2cfe176d21fa60933606c8fd7857302575b6465fd462f5c37436e6138ca` |
| `lem-the-preconnecting-arrow-annihilates-boundaries` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `665ac0f3ade09f7b01613aad3ac1b635462798e56d0e9e053afcbedb9c5bc482` |
| `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `9f0a09b5712d5aca7733cf90c90e3b324b28d93ad1ad823409a1f7a94422fe60` |
| `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `e27bc16f42649b8a53cddd82902501cd858b712595bc3ac26a89efeadc6e745e` |
| `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `08ee54fb7766d09da9bcf091fe17275a29b3fc3c77454c1a792b4f345e70c1f0` |
| `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `614e732f9a70a6916046e0b22b294c2c37eef72736622e65ad9004cd27172cea` |
| `thm-a-subobject-classifier-represents-the-subobject-functor` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `da5b48c23a9a558834a4c8fbf8718329179c7e93f1421504baf7bee3a98729b0` |
| `thm-affine-domain-dimension-transcendence-degree` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `01654f8afd5a981036a4e050fe31dc3b15dc03b59c167e3b7c87a238080c9e0a` |
| `thm-cartesian-closed-preorders-have-relative-implications` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `379bece6182e0e1d772eeb35e3f8354736179f607f21176c83addf24a24dbfeb` |
| `thm-currying-and-uncurrying-are-mutually-inverse` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `0966ed450d14a85fef028081a9bc5e1b93a6819d997755445c83a4e573d0bb27` |
| `thm-dimension-as-minimal-number-of-radical-generators` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `780a25d0935e11b1da4dec0d80ba067b50977fb7ba605713e9ffbf63ff1cc794` |
| `thm-dimension-formula-for-affine-domains` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `0e030e267d457e39924b01b53156095e15774e70d189ec99e4846cce49564393` |
| `thm-existence-of-systems-of-parameters` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `ffb1895da5fc17dc48bdc5a115c7b1684b6a3a09bc0c2bc4845132f6f595b188` |
| `thm-in-a-symmetric-monoidal-category-the-two-closures-agree` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `beffa72cc32c285d533329ac39c8d7e6ea729224b873e9d75eb158e010d64baf` |
| `thm-krull-height-theorem` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `b31c2f2ba35f90851bc035de430557d16a91218bdf90a0f6b8b0c55bd70c2e9d` |
| `thm-krull-height-theorem-converse` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `5417a3b2b963817faed6a48e82345bac73551628367f0a4f21f2d24a9b33b998` |
| `thm-krull-principal-ideal-theorem` | `krull-dimension-and-height-theorems` | gpt-5.6-terra | `9f5f0de548540a1935c9249859702acb5c9676046ef74348bb7cad64259b2e8e` |
| `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `414518914699f41cac75aaeed5265af2cc44de00c1eab5d7515d9801f88a9e39` |
| `thm-long-exact-sequence-in-cohomology` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `a20d836b5fb11a747b68dc3f526445d42a9aba374b8cec7496bd845c2434d8aa` |
| `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `37509f1df84136f0764160957fa538ace6961dfe8456144e077cf7853d919fb0` |
| `thm-naturality-of-the-homology-connecting-morphism` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `aeb36e1aceddb232ac6f915ec92f03b440529e17f62ce3501b11b9d44f5e3500` |
| `thm-set-is-locally-cartesian-closed` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `00296baa18bc81eb6c0767cb09dc8950c5101cb429ad166a8a2adfc97df3b3ce` |
| `thm-the-cone-long-exact-sequence` | `long-exact-sequences-in-homology` | gpt-5.6-terra | `dbaa29359573f115b963e150c830a91056258f0d8013f7eafab2f87d00c5c123` |
| `thm-the-internal-hom-composition-morphism` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `008d9c23a472b5594c5bc33627dcfcf9de583062d022a9530c5b598e15a5f01c` |
| `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `e682417979842cca478420ee7f051f448eacfb1a43334b214f85d4de3e8e796e` |
| `thm-the-two-element-set-is-a-subobject-classifier-for-sets` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `14680e1436697055b1819143ab38c9e1fadafbaeb3b4698ea8f1ed7be01ec3ff` |
| `thm-the-unit-is-an-internal-hom-unit` | `closed-monoidal-categories-and-the-internal-hom` | gpt-5.6-terra | `362eb09d89c423b118c2a9b12259e50d3ba7bf16f30e53cb2c7f4b3edb165e2b` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-27-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-27-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-27-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
