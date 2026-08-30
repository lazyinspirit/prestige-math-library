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
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
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

run: frontier-24
role: alpha-adjudicate
label: step8-a
covers: 1, 2, 7

# Step 8 — group **a**, run `frontier-24`

You are the group Alpha for batches **1**, **2**, **7**: 3 A/B pair(s), 6 page(s), 114 item(s), 66 open rejection(s) over 66 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `noether-normalisation-and-nullstellensatz` | A | commutative-algebra | 111.013 | `integral-extensions-and-going-up-examples`, `algebraic-closure-embeddings-and-separability`, `finite-fields-and-cyclotomic-extensions` |
| 1 | `noether-normalisation-and-nullstellensatz-examples` | B | commutative-algebra | 111.014 | `noether-normalisation-and-nullstellensatz` |
| 2 | `induced-representations-and-frobenius-reciprocity` | A | abstract-algebra | 149 | `characters-and-the-orthogonality-relations`, `free-modules-and-exact-sequences` |
| 2 | `induced-representations-and-frobenius-reciprocity-examples` | B | abstract-algebra | 150 | `induced-representations-and-frobenius-reciprocity` |
| 7 | `the-diagram-lemmas-in-an-abelian-category` | A | category-theory | 365.021 | `exactness-and-the-member-calculus-examples` |
| 7 | `the-diagram-lemmas-in-an-abelian-category-examples` | B | category-theory | 365.022 | `the-diagram-lemmas-in-an-abelian-category` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `noether-normalisation-and-nullstellensatz` — Noether Normalisation and Nullstellensatz (28 item(s))

- `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis` · lemma — A maximal algebraically independent set is a transcendence basis
- `lem-transcendence-basis-exchange` · lemma — One element of a transcendence basis can be exchanged for a suitable rival
- `cor-transcendence-degree-tower-additivity` · corollary — Transcendence degree is additive in finite towers
- `lem-noether-normalisation-nonzero-polynomial-made-monic` · lemma — Over an infinite field, a triangular change makes a nonzero polynomial monic
- `lem-noether-normalisation-finite-field-exponent-substitution` · lemma — Rapidly increasing power substitutions isolate one highest x_n-term
- `lem-noether-normalisation-one-relation-reduction` · lemma — A monic relation makes the last generator integral over the earlier ones
- `lem-noether-normalisation-inductive-integrality` · lemma — Induction produces a polynomial subalgebra over which the affine algebra is integral
- `cor-noether-normalisation-module-finiteness` · corollary — Noether normalisation yields module finiteness over a polynomial subring
- `cor-noether-normalisation-dimension-lower-bound` · corollary — A domain finite over a polynomial ring has dimension at least the number of variables
- `lem-zariski-lemma-one-variable-localisation-not-finite` · lemma — The rational function field k(t) is not finite over k[t]
- `lem-zariski-lemma-localised-polynomial-ring-not-field` · lemma — A finitely localized polynomial ring in positive dimension is not a field
- `lem-zariski-lemma-transcendence-basis-reduction` · lemma — A finite-type field reduces to a localization over a transcendence basis
- `cor-field-finite-type-over-a-field-is-a-finite-extension` · corollary — A field finitely generated as a k-algebra is a finite extension of k
- `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` · lemma — A maximal ideal of an affine algebra has finite residue field over the base field
- `lem-evaluation-ideal-is-maximal` · lemma — Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)
- `cor-weak-nullstellensatz-algebraically-closed-coordinate-form` · corollary — Over an algebraically closed field, every maximal ideal is an evaluation ideal
- `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus` · lemma — The Rabinowitsch auxiliary ideal has no common zero
- `lem-rabinowitsch-unit-ideal-consequence` · lemma — The auxiliary ideal is the unit ideal
- `lem-rabinowitsch-substitution-clears-denominators` · lemma — Substituting y = 1/f and clearing denominators yields a power of f in I
- `cor-strong-nullstellensatz-two-inclusions` · corollary — Strong Nullstellensatz: I(V(I)) equals the radical of I
- `lem-affine-algebra-points-as-k-algebra-maps` · lemma — k-points of k[x_1, ..., x_n]/I are exactly k-algebra maps to k
- `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field` · corollary — Over an algebraically closed field, maximal ideals of an affine algebra are kernels of points
- `lem-vanishing-ideal-is-radical` · lemma — A vanishing ideal is always radical
- `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` · lemma — An ideal and its radical have the same zero locus
- `cor-affine-radical-ideal-point-separation` · corollary — A radical ideal can be separated from an outside element by a point
- `lem-jacobson-ring-prime-as-intersection-of-maximals` · lemma — A ring is Jacobson exactly when every prime is an intersection of maximal ideals above it
- `lem-finite-type-jacobson-residue-extension` · lemma — Finite-type maps from Jacobson rings induce finite residue-field extensions at maximal ideals
- `cor-affine-closed-points-detect-radicals` · corollary — In a finite-type algebra over a field, radical ideals are intersections of maximal ideals

### `noether-normalisation-and-nullstellensatz-examples` — Noether Normalisation and Nullstellensatz — Examples (7 item(s))

- `ex-transcendence-basis-and-algebraic-remainder` · example — A transcendence basis of k(s, t, sqrt(s+t)) over k
- `ex-noether-normalisation-triangular-change` · example — A triangular change makes a bivariate relation monic
- `ex-noether-normalisation-finite-field-weight-choice` · example — Finite-field normalization needs the weight trick
- `ex-zariski-lemma-denominator-obstruction` · example — A new irreducible denominator stays outside a finitely generated subalgebra of k(t)
- `ex-weak-nullstellensatz-over-real-numbers` · example — Over R, not every maximal ideal is an evaluation ideal
- `ex-strong-nullstellensatz-nonradical-ideal` · example — I(V(x^2, xy)) keeps only the radical information
- `ex-rabinowitsch-identity-explicit` · example — A small Rabinowitsch identity written out completely

### `induced-representations-and-frobenius-reciprocity` — Induced Representations, Frobenius Reciprocity and Applications (27 item(s))

- `def-induced-r-linear-g-module-by-h-covariant-functions` · definition — The induced $R$-linear $G$-module $\operatorname{Ind}_H^G W$ as $H$-covariant functions on $G$
- `prop-induced-module-decomposes-over-a-left-transversal` · proposition — A left transversal identifies $\operatorname{Ind}_H^G W$ with a direct sum of $[G:H]$ copies of $W$
- `cor-dimension-of-an-induced-finite-dimensional-representation` · corollary — The dimension of an induced finite-dimensional representation is $[G:H]\dim W$
- `rem-induced-representation-agrees-with-the-tensor-product-model` · remark — The function model of induction agrees with the tensor-product model $k[G]\otimes_{k[H]}W$
- `def-induced-character-of-a-complex-representation` · definition — The induced character $\operatorname{Ind}_H^G\chi$ of a complex character
- `thm-frobenius-formula-for-induced-characters` · theorem — Frobenius' formula for the character of an induced representation
- `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets` · theorem — Inducing the trivial representation gives the permutation representation on $G/H$
- `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules` · theorem — Induction is left adjoint to restriction for finite-group modules over a commutative ring
- `cor-frobenius-reciprocity-for-complex-characters` · corollary — Frobenius reciprocity for complex characters
- `def-virtual-character-and-character-ring-of-a-finite-group` · definition — Virtual characters and the character ring $R(G)$ of a finite group
- `thm-transitivity-of-induction-for-finite-groups` · theorem — Induction is transitive along subgroup chains
- `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings` · proposition — Induction and restriction satisfy the projection formula on character rings
- `cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction` · corollary — Every irreducible complex character occurs in the induction of an irreducible constituent of its restriction
- `def-double-cosets-of-two-subgroups` · definition — Double cosets $K\backslash G/H$ of two subgroups
- `def-conjugate-representation-and-conjugate-character` · definition — Conjugate representations and conjugate characters on conjugate subgroups
- `thm-mackey-double-coset-formula-for-restricting-an-induced-character` · theorem — Mackey's double-coset formula for restricting an induced character
- `thm-mackeys-irreducibility-criterion-for-finite-groups` · theorem — Mackey's irreducibility criterion for finite groups
- `def-central-character-of-an-irreducible-complex-character` · definition — The central character of an irreducible complex character
- `prop-class-sums-act-by-central-character-scalars` · proposition — Class sums act on an irreducible representation by central-character scalars
- `thm-central-characters-are-algebraic-integers` · theorem — The values of a central character are algebraic integers
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order` · theorem — The degree of an irreducible complex character divides $|G|$
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center` · theorem — The degree of an irreducible complex character divides $[G:Z(G)]$
- `cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian` · corollary — A finite group with an irreducible complex character of degree greater than $1$ is nonabelian
- `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` · lemma — An algebraic-integer average of roots of unity is either $0$ or a common root of unity
- `thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action` · theorem — A conjugacy class of size coprime to $\chi(1)$ forces either $\chi(g)=0$ or scalar action
- `thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup` · theorem — A conjugacy class of prime-power size forces a proper nontrivial normal subgroup
- `thm-burnsides-p-a-q-b-theorem` · theorem — Burnside's $p^aq^b$ theorem

### `induced-representations-and-frobenius-reciprocity-examples` — Induced Representations, Frobenius Reciprocity and Applications — Examples (9 item(s))

- `ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character` · example — Inducing a nontrivial character of a three-cycle subgroup of $S_3$ gives an irreducible degree-two character
- `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters` · example — Restricting that degree-two $S_3$ character to the three-cycle subgroup gives the two nontrivial linear characters
- `ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character` · example — Inducing the trivial character of a subgroup of order two in $S_3$ gives $1$ plus an irreducible degree-two character
- `ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions` · example — Frobenius reciprocity matches multiplicities in the two preceding $S_3$ inductions
- `ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence` · example — $C_4$ shows that divisibility of irreducible degrees by $|G|$ is not an equivalence
- `fs-an-induced-irreducible-complex-character-is-always-irreducible` · false-statement — An induced irreducible complex character is always irreducible
- `fs-induction-followed-by-restriction-is-the-identity-on-complex-representations` · false-statement — Induction followed by restriction is the identity on complex representations
- `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible` · false-statement — Restriction of an irreducible complex representation is always irreducible
- `fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree` · false-statement — Every divisor of $|G|$ is an irreducible character degree

### `the-diagram-lemmas-in-an-abelian-category` — The Diagram Lemmas in an Abelian Category (35 item(s))

- `thm-short-five-lemma-in-an-abelian-category` · theorem — Short five lemma in an abelian category
- `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible` · corollary — A morphism of short exact sequences with invertible outer maps is invertible
- `thm-short-five-lemma-by-pullback-without-members` · theorem — Short five lemma by pullback without members
- `def-snake-data` · definition — Snake data
- `thm-the-connecting-morphism-exists-and-is-unique` · theorem — The connecting morphism exists and is unique
- `rem-the-connecting-morphism-depends-on-no-choices` · remark — The connecting morphism depends on no choices
- `thm-snake-lemma-in-an-abelian-category` · theorem — Snake lemma in an abelian category
- `thm-snake-lemma-under-the-weaker-stacks-hypotheses` · theorem — Snake lemma under the weaker Stacks hypotheses
- `def-the-arrow-category-of-an-abelian-category` · definition — The arrow category of an abelian category
- `thm-naturality-of-the-connecting-morphism` · theorem — Naturality of the connecting morphism
- `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` · corollary — The kernel-cokernel sequence of a composite is a snake
- `thm-four-lemma-in-an-abelian-category` · theorem — Four lemma in an abelian category
- `thm-weak-four-lemma-with-the-exactness-hypotheses-named` · theorem — Weak four lemma with the exactness hypotheses named
- `rem-the-two-halves-of-the-four-lemma-are-mutually-dual` · remark — The two halves of the four lemma are mutually dual
- `thm-sharp-five-lemma-in-an-abelian-category` · theorem — Sharp five lemma in an abelian category
- `thm-five-lemma-in-an-abelian-category` · theorem — Five lemma in an abelian category
- `rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle` · remark — Why the five lemma asks for isomorphisms in the middle
- `lem-half-nine-lemma` · lemma — Half nine lemma
- `thm-nine-lemma-in-an-abelian-category` · theorem — Nine lemma in an abelian category
- `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` · theorem — Nine lemma variants by which rows are assumed exact
- `rem-why-the-middle-nine-lemma-needs-a-zero-composite` · remark — Why the middle nine lemma needs a zero composite
- `thm-sharp-nine-lemma` · theorem — Sharp nine lemma
- `thm-symmetric-nine-lemma` · theorem — Symmetric nine lemma
- `thm-the-nine-lemma-follows-from-the-snake-lemma` · theorem — The nine lemma follows from the snake lemma
- `thm-the-splitting-lemma-follows-from-the-nine-lemma` · theorem — The splitting lemma follows from the nine lemma
- `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` · theorem — Noether isomorphism theorems recovered from the nine lemma
- `thm-the-pullback-and-pushout-theorems` · theorem — The pullback and pushout theorems
- `thm-the-diagram-lemmas-hold-in-the-opposite-category` · theorem — The diagram lemmas hold in the opposite category
- `thm-an-exact-functor-transports-every-diagram-lemma` · theorem — An exact functor transports every diagram lemma
- `thm-five-lemma-for-a-morphism-of-long-exact-sequences` · theorem — Five lemma for a morphism of long exact sequences
- `fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction` · false-statement — FALSE: the connecting morphism depends on the choices made in its construction
- `fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic` · false-statement — FALSE: the five lemma needs only that the two middle maps are monic
- `fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero` · false-statement — FALSE: the middle nine lemma holds without assuming the composite is zero
- `fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows` · false-statement — FALSE: the snake lemma is just a pair of short exact kernel and cokernel rows
- `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem` · false-statement — FALSE: the diagram lemmas in an abelian category follow from the module case by the embedding theorem

### `the-diagram-lemmas-in-an-abelian-category-examples` — The Diagram Lemmas in an Abelian Category — Examples (8 item(s))

- `ex-the-published-module-five-lemma-as-an-instance` · example — The published module five lemma as an instance
- `ex-the-published-module-snake-lemma-as-an-instance` · example — The published module snake lemma as an instance
- `ex-the-published-module-four-lemma-as-an-instance` · example — The published module four lemma as an instance
- `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups` · example — The connecting morphism computed for a short exact sequence of abelian groups
- `ex-the-snake-lemma-applied-to-multiplication-by-an-integer` · example — The snake lemma applied to multiplication by an integer
- `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` · example — The nine lemma verified on a diagram of cyclic groups
- `cex-a-snake-configuration-whose-kernel-row-is-not-short-exact` · counterexample — A snake configuration whose kernel row is not short exact
- `ex-the-short-five-lemma-chased-with-members` · example — The short five lemma chased with members

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
| `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `635c83df443ea73373b28d844f9aa00e5dbe0452cbd62d15b9f724b3795eee95` |
| `cor-affine-closed-points-detect-radicals` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `85b4bb97601192a0bec8166a386342178e33c6c8f71e7c2d83a56671d934c533` |
| `cor-affine-radical-ideal-point-separation` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `7fcf88085a60bf294b84d2c6c35f143b4e68b6d750e81456adc932886c2ad7da` |
| `cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `a06ecf3f26321820b44c371b3f6068fa332b1411b402049df575b907789122a3` |
| `cor-frobenius-reciprocity-for-complex-characters` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `ad0c0d07636c1f870657a87585d7f41a4bb9bcc2db67db56f08393ad98e33368` |
| `cor-noether-normalisation-dimension-lower-bound` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `65657eb571088fedb6fa863d9b020d0002afc99bd155f5a1069d81b22835a778` |
| `cor-strong-nullstellensatz-two-inclusions` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `5a79265382d710fa1b2e52c263356634439c4f749ce2876c4e36cc48631c2189` |
| `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `cad881a6271ca099e8932d568bb7a42c8b23d20808f1103f9336f4ba8232c251` |
| `cor-transcendence-degree-tower-additivity` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `079834bc6cd508fac9946ea248c053ab29490331bc972bf68aacb881e3847d6a` |
| `def-induced-character-of-a-complex-representation` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `504d2ea3846a7839097dd0fd7764b6e14ade796e46a4ecdacdb58522a9785e5a` |
| `def-virtual-character-and-character-ring-of-a-finite-group` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `f6ba3a48caac94c28adc857d5a10d7eafe11405d6e5386411eb97c9c82e42724` |
| `ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `b30a29da77a52b37677d4a21a95e95f098f97fbc62441a90b246fb3ac6db18e1` |
| `ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `7c09241d69d5849d6de7b420f628db750949cff7b02ab8d08a6c0b925535b7df` |
| `ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `867d2ecb9829840b8814305f10fa25ab213dd8fac8fd7b5e3eb909bc6fb01596` |
| `ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `9070f6951ce7ddeeba14d953c22afecda347e7647db0b272f20199e6998de4cb` |
| `ex-noether-normalisation-finite-field-weight-choice` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `b1f30eecf0fb8f43e56a08068f92e5bd2d0eadb1dd465265757232e3ee6e3748` |
| `ex-noether-normalisation-triangular-change` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `29ea8332d6e69a9c27b5045f9518b12ffedb0cc5f5ca70df935950d1eb1a99e6` |
| `ex-rabinowitsch-identity-explicit` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `da22c3df8e0afe08da9da323dde0e04218106a5e6d3db6982f8805e1855fe192` |
| `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `b5c932ee442fb47b1c67edbcc109789a4d7bf866c398fa95784285733689123a` |
| `ex-strong-nullstellensatz-nonradical-ideal` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `2c6b5b2b4bff354e3aecdfd26b724f03ca2ec80cbd2932a495fbdce333f96465` |
| `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups` | `the-diagram-lemmas-in-an-abelian-category-examples` | gpt-5.6-terra | `889a475a626e908d14ad80fcaad0af16c28dc408561b9033c2370ea5e125552a` |
| `ex-the-published-module-five-lemma-as-an-instance` | `the-diagram-lemmas-in-an-abelian-category-examples` | gpt-5.6-terra | `fbb34a4c4306cc51e54f24416f2d9411e35a650ee1f6fdad99eed7590ecbbda0` |
| `ex-the-published-module-four-lemma-as-an-instance` | `the-diagram-lemmas-in-an-abelian-category-examples` | gpt-5.6-terra | `5d9b51091ac74334407799c83a710d03e764dcef3006a309018cd6737d44cc1d` |
| `ex-the-published-module-snake-lemma-as-an-instance` | `the-diagram-lemmas-in-an-abelian-category-examples` | gpt-5.6-terra | `c3564de03876d1fe941f40d9e056e3e2fdc03619914e0ee88430b03bf680048e` |
| `ex-transcendence-basis-and-algebraic-remainder` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `c6afa89b3bb84711fe5b4a1ff3e391c5cb5c95d8bc70e6fb057272acf4a41fe1` |
| `ex-weak-nullstellensatz-over-real-numbers` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `c1c4e0e6b150705efa7ee9a17f5b39b4d5925b3cd8d6799bd596f6126cb3d1b3` |
| `ex-zariski-lemma-denominator-obstruction` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `ee23d91f5597331e6621c2bbf9fbd5a26f6fb6d34daae965ae742b54a50198af` |
| `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible` | `induced-representations-and-frobenius-reciprocity-examples` | gpt-5.6-terra | `f4113fa3cc1876088ba7ff5444789061983b36f100149a23651868bef851ea82` |
| `lem-affine-algebra-points-as-k-algebra-maps` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `97f0dbf23d6af7858a4ef48434098eaef9db55710fc889f09f17005f4112339f` |
| `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `8781a84a49e60c313ea1308f5d4dc958ef56a997f08c287d86e54cc8dbcc4030` |
| `lem-evaluation-ideal-is-maximal` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `0d79b7107c8fe8351a8b345dac46b856c60e634ee5cb34174f2bac61d9c1bbc3` |
| `lem-finite-type-jacobson-residue-extension` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `d64506f49d22fd4bc5b1b6d324d4a6b744b59baac010539cec1ad211754a8a1a` |
| `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `2b9616729a2b6cbd4fb4a36dace8b595dbb8ac6510ff13a26644925d48e55016` |
| `lem-noether-normalisation-nonzero-polynomial-made-monic` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `bf471b8c5520f3b53da7c9b464c1e904da24adc1c853889524230c42a335c0ee` |
| `lem-noether-normalisation-one-relation-reduction` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `7e6e39cd9c7875220154227b48f87335abf9aecd7873d78a37ef99ff85694342` |
| `lem-rabinowitsch-substitution-clears-denominators` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `114696238096c9f4edc9fd846ba1636ce68ce46a0f8b9682b13fc7d91f5b041d` |
| `lem-transcendence-basis-exchange` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `63fcfeb45e09637677d5d005a8a7681559e7a4b5c7e1eb4a45dffb1243650613` |
| `lem-vanishing-ideal-is-radical` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `746baa865c8de036726d0f478d210d4ecbce6a129c882b00aaa4cdbfdc30425a` |
| `lem-zariski-lemma-localised-polynomial-ring-not-field` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `add12077876e4dfda2962dd42f6ab8118a8a89556e518059dd37db0dde33e833` |
| `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` | `noether-normalisation-and-nullstellensatz` | gpt-5.6-terra | `9a490c11ae92a54ab316cae06aef6431953c3b320f80d789267a40fa9ff71e20` |
| `prop-class-sums-act-by-central-character-scalars` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `18d43b3b6f709313c2d219c1b088a1aa1668df7b12d35019d9e0e4f6f2e9190b` |
| `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `abb153c8673cafb488bafbd67474896d8b0eb1a348e03923acb24f9be3ad65ce` |
| `rem-induced-representation-agrees-with-the-tensor-product-model` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `9602036055e159c23e5eecfda3453bd5a9ca03939a063378355d31a708ea39c3` |
| `thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `0d12f5116398c200b1d4640e6c78c1dd49f1f1d069224d6a6537b5c1f63f7e5b` |
| `thm-an-exact-functor-transports-every-diagram-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `2e6f60cd18d6619fde7bef2af4a6fb28d3397be1f957040b8bb45bcad11bc34c` |
| `thm-burnsides-p-a-q-b-theorem` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `f19d0e04ca3720e04c79afbcff01c235585874f45e47e8d029d1e9cf6bf6ed18` |
| `thm-central-characters-are-algebraic-integers` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `cd02021cd1cc70f3ccb469287505e179e17ff4fb4a1d9751357d91a3d2a1e18f` |
| `thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `f6455e66437bf3cdb3ef4de392b4797aa0a73479c4643a9591128ad83048e48d` |
| `thm-four-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `b62cc698e57e82b7373a4040461180070155447bc7b6c8b14f1f64000fd14653` |
| `thm-mackey-double-coset-formula-for-restricting-an-induced-character` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `c1c03b65416870b94986f036d2f55b3775f66485cad4b74d334d7924ea714a96` |
| `thm-mackeys-irreducibility-criterion-for-finite-groups` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `5782a74de548dc05ff92ff8bda7b83a20588c0ebab6b0f69c578e0985b540a64` |
| `thm-nine-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `50101348f16c9e8c7ed2f587a569e2699f38467dc5fd2ee309bc66a3bbab9b33` |
| `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `a08f09533cb8a310dc2ca68ee1bb12b755709af3945aebbbf7bb08ab34063ee0` |
| `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `9c3deb2003f26de96d3056bfed11db5c01dd6992183918abb5d90b328242611d` |
| `thm-sharp-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `1feec205ebc7f318a0e03cdda80c44fbc99d00962a8d24b8eb7e6fe7d40edae9` |
| `thm-short-five-lemma-by-pullback-without-members` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `a7f213aee21e0594df7a24f71234d2bfe2b802c1290cbf6441570b1979cca97f` |
| `thm-short-five-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `7c631d56cd605233f2d6ec47bf0eac88aeb2183083d8ef5189556e17d98c6d92` |
| `thm-snake-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `289d12555cdb1419663b5460be7d7631e238e86fde2226b989f71092c616f300` |
| `thm-snake-lemma-under-the-weaker-stacks-hypotheses` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `a6f1fb11e12ca20a397eafe7126c01090648eba628a4dd946809496bd096e2c4` |
| `thm-symmetric-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `6b82d0026237f589f5202b74739deb7a9fe6e48bd2021a5baf7e08e30695e635` |
| `thm-the-connecting-morphism-exists-and-is-unique` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `8deefa5b964e2518fb44cb7888c06d220832f7e5b0501ac0bd55fc9aaa0c722a` |
| `thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `82d6f5e805283691dfee6043c506369d90dfd41cf5062c818486dd509c99b205` |
| `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center` | `induced-representations-and-frobenius-reciprocity` | gpt-5.6-terra | `61fe372292d592a8e5ff6819a61e5dc34f9b6afaf9a7e12a2e0abd1adffcaa02` |
| `thm-the-diagram-lemmas-hold-in-the-opposite-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `729617de6b15fe3f9996ebdf530e8317619e7a529e4a21a7e421b1cc0d0133d6` |
| `thm-the-splitting-lemma-follows-from-the-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `b7cf5c58763bd8f55a3f9a5c6697f5fcaf9a5fa866ab5f32d0b544a41e552497` |
| `thm-weak-four-lemma-with-the-exactness-hypotheses-named` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `ef1b19527219e722601ab29ad345c41bd856974d7d1fe1cbae48414d12c0d9c8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-24`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-24-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-24-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-24-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-24-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
