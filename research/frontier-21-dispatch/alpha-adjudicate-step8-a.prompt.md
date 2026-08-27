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
group work, `research/frontier-21-alpha-groups.json` is the assignment: it permits at
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

run: frontier-21
role: alpha-adjudicate
label: step8-a
covers: 1, 5, 9

# Step 8 — group **a**, run `frontier-21`

You are the group Alpha for batches **1**, **5**, **9**: 4 A/B pair(s), 8 page(s), 163 item(s), 93 open rejection(s) over 93 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `subgroups-of-free-groups-and-schreier-rewriting` | A | group-theory | 71.009 | `socles-and-the-onan-scott-landscape-examples` |
| 1 | `subgroups-of-free-groups-and-schreier-rewriting-examples` | B | group-theory | 71.01 | `subgroups-of-free-groups-and-schreier-rewriting` |
| 1 | `amenable-groups-and-folner-criteria` | A | group-theory | 302.007 | `hyperbolic-spaces-and-hyperbolic-groups-examples` |
| 1 | `amenable-groups-and-folner-criteria-examples` | B | group-theory | 302.008 | `amenable-groups-and-folner-criteria` |
| 5 | `the-group-algebra-and-representations` | A | abstract-algebra | 143 | `chain-conditions-and-semisimple-modules`, `the-fundamental-theorem-of-algebra`, `sylow-theorems-and-nilpotent-groups`, `matrices-and-the-matrix-of-a-linear-map` |
| 5 | `the-group-algebra-and-representations-examples` | B | abstract-algebra | 144 | `the-group-algebra-and-representations` |
| 9 | `abelian-categories` | A | category-theory | 365.015 | `preadditive-and-additive-categories-and-biproducts-examples`, `modules-over-a-pid-and-canonical-forms` |
| 9 | `abelian-categories-examples` | B | category-theory | 365.016 | `abelian-categories`, `uniform-spaces`, `localisation-of-modules-and-support` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `subgroups-of-free-groups-and-schreier-rewriting` — Subgroups of Free Groups and Schreier Rewriting (21 item(s))

- `def-labeled-schreier-coset-graph` · definition — The labeled Schreier coset graph of a subgroup of a free group
- `lem-schreier-coset-graph-is-connected-and-deterministic` · lemma — The Schreier coset graph is connected and deterministic
- `def-schreier-transversal-and-schreier-system` · definition — Schreier transversals and Schreier systems
- `lem-spanning-trees-and-schreier-systems-correspond` · lemma — Rooted spanning trees and Schreier systems correspond
- `def-schreier-generator` · definition — Schreier generators in the right-coset convention
- `lem-schreier-generators-lie-in-the-subgroup` · lemma — Every Schreier generator lies in the subgroup
- `def-schreier-rewriting-map` · definition — The Schreier rewriting map
- `lem-schreier-rewriting-is-invariant-under-free-reduction` · lemma — Schreier rewriting is invariant under free reduction
- `thm-schreier-generating-lemma` · theorem — The nontrivial Schreier generators generate the subgroup
- `lem-tree-schreier-generators-are-freely-independent` · lemma — Tree Schreier generators are freely independent
- `thm-nielsen-schreier-with-an-explicit-basis` · theorem — Under the stated choice boundary, every subgroup of a free group is free with its nontrivial Schreier generators as a basis
- `thm-schreier-index-rank-formula` · theorem — The Schreier index-rank formula
- `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank` · corollary — A free group of rank at least two has subgroups of every finite rank
- `thm-reidemeister-schreier-presentation` · theorem — The Reidemeister-Schreier presentation theorem
- `lem-reidemeister-schreier-relators-are-independent-of-word-representatives` · lemma — Reidemeister-Schreier relators are independent of word representatives
- `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented` · corollary — Finite-index subgroups of finitely presented groups are finitely presented
- `thm-marshall-hall-free-factor-theorem` · theorem — Every finitely generated subgroup of a finite-rank free group is a free factor of a finite-index subgroup
- `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated` · false-statement — FALSE: every subgroup of a finitely generated free group is finitely generated
- `fs-schreier-generators-are-always-a-free-basis` · false-statement — FALSE: the raw Schreier generators are always a free basis
- `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn` · false-statement — FALSE: a finite-index d subgroup of a rank n free group has rank dn
- `fs-reidemeister-schreier-needs-no-choice-of-transversal` · false-statement — FALSE: the Reidemeister-Schreier presentation needs no choice of transversal

### `subgroups-of-free-groups-and-schreier-rewriting-examples` — Subgroups of Free Groups and Schreier Rewriting — Examples (7 item(s))

- `ex-index-two-subgroup-of-a-rank-two-free-group` · example — An index-two subgroup of a rank-two free group has rank three
- `ex-kernel-of-the-exponent-sum-map` · example — The kernel of an exponent-sum map in a free group
- `ex-a-schreier-coset-graph-and-its-tree-basis` · example — A Schreier coset graph and its spanning-tree basis
- `ex-reidemeister-schreier-for-a-surface-subgroup` · example — A Reidemeister-Schreier presentation for a surface subgroup
- `ex-infinite-rank-subgroup-of-a-rank-two-free-group` · example — A rank-two free group contains an infinite-rank subgroup
- `ex-marshall-hall-separating-quotient` · example — Marshall Hall's theorem produces a separating finite-index overgroup
- `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` · counterexample — An arbitrary transversal need not give the reduced Schreier basis

### `amenable-groups-and-folner-criteria` — Amenable Groups and Folner Criteria (29 item(s))

- `def-mean-on-bounded-functions-on-a-group` · definition — Means on bounded functions on a group
- `def-left-translation-action-on-bounded-functions` · definition — Left translation on bounded functions
- `def-left-invariant-mean-and-amenable-group` · definition — Left-invariant means and amenable groups
- `lem-left-and-right-amenability-agree-by-inversion` · lemma — Left and right amenability agree by inversion
- `prop-finite-groups-are-amenable` · proposition — Finite groups are amenable
- `thm-abelian-groups-are-amenable` · theorem — Abelian groups are amenable
- `thm-subgroups-and-quotients-of-amenable-groups-are-amenable` · theorem — Subgroups and quotients of amenable groups are amenable
- `thm-extensions-of-amenable-groups-are-amenable` · theorem — Extensions of amenable groups are amenable
- `def-locally-finite-group` · definition — Locally finite groups
- `lem-directed-union-of-amenable-subgroups-is-amenable` · lemma — Directed unions of amenable subgroups are amenable
- `cor-solvable-and-locally-finite-groups-are-amenable` · corollary — Solvable groups and locally finite groups are amenable
- `def-folner-set-and-folner-condition` · definition — Folner sets and the Folner condition
- `lem-equivalent-folner-boundary-formulations` · lemma — Equivalent boundary formulations of the Folner condition
- `thm-folner-criterion-for-amenability` · theorem — The Folner criterion for amenability
- `def-folner-sequence` · definition — Folner sequences for enumerated groups
- `prop-enumerated-countable-amenable-groups-admit-folner-sequences` · proposition — Enumerated countable amenable groups admit Folner sequences
- `thm-subexponential-growth-implies-amenability` · theorem — Subexponential growth implies amenability
- `def-paradoxical-decomposition-of-a-group` · definition — Paradoxical decompositions of groups
- `lem-paradoxical-groups-admit-no-invariant-mean` · lemma — Paradoxical groups admit no invariant mean
- `thm-tarski-alternative` · theorem — A group is amenable if and only if it is not paradoxical
- `thm-free-group-of-rank-two-is-nonamenable` · theorem — The free group of rank two is nonamenable
- `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable` · corollary — Groups containing a rank-two free subgroup are nonamenable
- `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups` · theorem — Amenability is a quasi-isometry invariant for finitely generated groups
- `rem-nonamenable-groups-without-nonabelian-free-subgroups` · remark — There exist nonamenable groups without nonabelian free subgroups
- `fs-amenable-means-finite` · false-statement — FALSE: amenable means finite
- `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup` · false-statement — FALSE: every nonamenable group contains a rank-two free subgroup
- `fs-one-finite-folner-set-proves-amenability` · false-statement — FALSE: one finite Folner set proves amenability
- `fs-folner-sequences-exist-for-every-uncountable-amenable-group` · false-statement — FALSE: every uncountable amenable group has a Folner sequence
- `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates` · false-statement — FALSE: a paradoxical decomposition is just an abstract partition without prescribed translates

### `amenable-groups-and-folner-criteria-examples` — Amenable Groups and Folner Criteria — Examples (7 item(s))

- `ex-folner-intervals-in-the-integers` · example — Intervals in Z are Folner sets
- `ex-folner-boxes-in-zn` · example — Boxes in Z^n are Folner sets
- `ex-finite-and-locally-finite-amenable-groups` · example — Finite groups and locally finite groups are amenable
- `ex-the-lamplighter-group-is-amenable` · example — The standard lamplighter group is amenable
- `ex-boundary-expansion-in-the-free-group` · example — Boundary expansion in the free group
- `ex-paradoxical-decomposition-of-a-free-group` · example — A paradoxical decomposition of a free group of rank two
- `cex-amenability-does-not-imply-subexponential-growth` · counterexample — Amenability does not imply subexponential growth

### `the-group-algebra-and-representations` — The Group Algebra and Representations of Finite Groups (24 item(s))

- `def-group-ring` · definition — The group ring $R[G]$ of finitely supported formal $R$-linear combinations of group elements
- `thm-group-ring-is-a-unital-algebra-with-basis-g` · theorem — The group ring $R[G]$ is a unital $R$-algebra with basis $G$, and each $g\in G$ is a unit of $R[G]$
- `def-augmentation-map-and-augmentation-ideal-of-a-group-ring` · definition — The augmentation map $\varepsilon:R[G]\to R$ and the augmentation ideal $I_G=\ker\varepsilon$
- `cor-dimension-of-a-finite-group-algebra` · corollary — If $G$ is finite then $\dim_k k[G]=|G|$
- `thm-group-ring-is-commutative-iff-the-group-is-abelian` · theorem — For a field $k$, the group algebra $k[G]$ is commutative if and only if $G$ is abelian
- `def-g-module-over-a-commutative-ring` · definition — An $R$-linear action of $G$ on a left $R$-module, and a $G$-module over $R$
- `def-finite-dimensional-representation-of-a-group-over-a-field` · definition — A finite-dimensional representation $\rho:G\to \operatorname{GL}(V)$ over a field, and its degree
- `def-subrepresentation-and-irreducible-representation` · definition — Subrepresentations, direct sums of representations, and irreducibility
- `def-intertwiner-equivalent-and-faithful-representations` · definition — Intertwiners, the spaces $\operatorname{Hom}_G(V,W)$ and $\operatorname{End}_G(V)$, equivalent representations, and faithful representations
- `thm-group-actions-and-group-ring-modules-correspond` · theorem — For a commutative ring $R$, $R$-linear $G$-actions are exactly the compatible left $R[G]$-module structures
- `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity` · corollary — Under the dictionary, subrepresentations are exactly submodules and irreducible representations are exactly simple modules
- `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra` · proposition — $\operatorname{Hom}_G(V,W)$ is a $k$-vector space and $\operatorname{End}_G(V)$ is a $k$-algebra
- `def-trivial-regular-and-permutation-representations` · definition — The trivial representation, the regular representation, and permutation representations from finite $G$-sets
- `def-sign-representation-and-restriction-of-a-representation` · definition — The sign representation of $S_n$ and the restriction $\operatorname{Res}^G_H(V)$ of a representation to a subgroup
- `thm-regular-representation-is-faithful` · theorem — The regular representation is faithful
- `thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation` · theorem — Every irreducible representation of a finite group is a quotient of the regular representation
- `cor-irreducible-representations-have-degree-at-most-the-group-order` · corollary — Every irreducible representation of a finite group has degree at most $|G|$
- `def-splitting-field-for-a-finite-group` · definition — A splitting field for a finite group: every irreducible representation has scalar endomorphism ring
- `rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here` · remark — Brauer's cyclotomic criterion for splitting fields is recorded here only as an external theorem
- `cor-schurs-lemma-for-irreducible-representations` · corollary — Schur's lemma for irreducible representations: a nonzero intertwiner is an isomorphism, and $\operatorname{End}_G(V)$ is a division ring
- `cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars` · corollary — Over a splitting field, every $G$-endomorphism of an irreducible representation is scalar
- `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars` · corollary — Over an algebraically closed field, every endomorphism of an irreducible representation is scalar
- `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional` · theorem — Every irreducible representation of a finite abelian group over a splitting field is one-dimensional
- `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group` · theorem — Equivalence classes of degree-one representations are exactly homomorphisms $G\to k^{\times}$; equivalently they factor through $G/G'$, and they form an abelian group

### `the-group-algebra-and-representations-examples` — The Group Algebra and Representations of Finite Groups — Examples (11 item(s))

- `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` · example — Over $\mathbb{C}$, a cyclic group of order $n$ has exactly $n$ irreducible representations up to equivalence, represented by the characters $g\mapsto \lambda$ with $\lambda^n=1$
- `ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign` · example — The regular representation of $C_2$ over a field of characteristic not $2$ is the direct sum of the trivial and sign representations
- `ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible` · example — The standard $2$-dimensional representation of $S_3$ inside the permutation representation on $\mathbb C^3$ is irreducible
- `ex-the-permutation-representation-on-left-cosets-g-mod-h` · example — The permutation representation on the left cosets $G/H$
- `ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group` · example — Any nontrivial finite group algebra has zero divisors coming from a nonidentity cyclic subgroup
- `ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication` · example — The quaternion group $Q_8$ acts on $\mathbb H$ by left multiplication
- `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c` · example — The real $2$-dimensional irreducible representation of $C_3$ has endomorphism ring $\mathbb C$
- `fs-every-representation-is-faithful` · false-statement — FALSE: every representation is faithful
- `fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field` · false-statement — FALSE: if $|G|>1$, then $k[G]$ is a field
- `fs-every-degree-one-representation-is-trivial` · false-statement — FALSE: every degree-one representation is trivial
- `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars` · false-statement — FALSE: over every field, the endomorphism ring of an irreducible representation is just the base field

### `abelian-categories` — Abelian Categories (55 item(s))

- `def-normal-monomorphism-and-conormal-epimorphism` · definition — Normal monomorphisms and conormal epimorphisms
- `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero` · proposition — The kernel of a monomorphism is zero and the cokernel of an epimorphism is zero
- `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism` · proposition — The cokernel of the zero map out of the zero object is the target, and dually for kernels
- `def-image-and-coimage-in-a-category-with-kernels-and-cokernels` · definition — Image and coimage in a category with kernels and cokernels
- `thm-a-morphism-factors-uniquely-through-its-coimage` · theorem — A morphism factors uniquely through its coimage
- `thm-a-morphism-factors-uniquely-through-its-image` · theorem — A morphism factors uniquely through its image
- `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique` · theorem — The canonical morphism from the coimage to the image exists and is unique
- `prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic` · proposition — The coimage projection is epic and the image inclusion is monic
- `def-abelian-category` · definition — Abelian category
- `rem-the-axiom-labels-and-where-they-come-from` · remark — This page uses Grothendieck's AB1 and AB2 labels, and records the competing conventions
- `thm-an-abelian-category-is-balanced` · theorem — An abelian category is balanced
- `thm-the-opposite-of-an-abelian-category-is-abelian` · theorem — The opposite of an abelian category is abelian
- `thm-every-monomorphism-is-the-kernel-of-its-cokernel` · theorem — Every monomorphism is the kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel
- `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism` · theorem — Every morphism factors as an epimorphism followed by a monomorphism, uniquely up to unique isomorphism
- `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors` · theorem — The image is the least subobject through which a morphism factors
- `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero` · corollary — In an abelian category, monic means zero kernel and epic means zero cokernel
- `def-the-freyd-axioms-for-an-abelian-category` · definition — Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3* for abelian categories
- `thm-the-freyd-axioms-imply-the-additive-axioms` · theorem — Freyd's axioms force the additive structure and recover the AB2 definition
- `thm-the-freyd-mitchell-characterisation-of-an-abelian-category` · theorem — Freyd and Mitchell's characterisation of abelian categories
- `rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data` · remark — Additivity can be derived rather than postulated, depending on the axiomatisation
- `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits` · theorem — An abelian category has all finite limits and all finite colimits
- `thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs` · theorem — A pullback is the kernel of the difference of the two legs, and dually for pushouts
- `thm-the-pullback-of-an-epimorphism-is-an-epimorphism` · theorem — The pullback of an epimorphism is an epimorphism
- `cor-the-pushout-of-a-monomorphism-is-a-monomorphism` · corollary — The pushout of a monomorphism is a monomorphism
- `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism` · theorem — In a pullback square, the induced map on the kernels of the two parallel arrows is an isomorphism
- `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism` · theorem — A square with monic legs is a pullback exactly when it identifies the source with the intersection subobject
- `thm-pullback-pasting-in-an-abelian-category` · theorem — Pullback pasting in an abelian category
- `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` · theorem — Kernel and cokernel are mutually inverse order-reversing correspondences between subobjects and quotient objects
- `def-the-quotient-of-an-object-by-a-subobject` · definition — The quotient of an object by a subobject
- `thm-the-quotient-is-independent-of-the-representing-monomorphism` · theorem — The quotient by a subobject is independent of the chosen representing monomorphism
- `thm-first-isomorphism-theorem-in-an-abelian-category` · theorem — First isomorphism theorem in an abelian category
- `thm-third-isomorphism-theorem-in-an-abelian-category` · theorem — Third isomorphism theorem in an abelian category
- `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation` · theorem — The quotient by the kernel followed by the image inclusion is the canonical epi-mono factorization
- `def-exact-functor-between-abelian-categories` · definition — Exact functor between abelian categories
- `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive` · theorem — A left or right exact functor between abelian categories is automatically additive
- `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences` · theorem — Left exactness, right exactness, and exactness are characterized by short exact sequences
- `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels` · theorem — An additive functor is exact exactly when it preserves kernels and cokernels
- `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms` · theorem — A left exact functor preserves monomorphisms and a right exact functor preserves epimorphisms
- `cex-an-exact-functor-need-not-be-faithful` · counterexample — An exact functor need not be faithful
- `thm-an-equivalence-between-abelian-categories-is-exact` · theorem — An equivalence between abelian categories is exact
- `def-abelian-subcategory-and-exact-embedding` · definition — Abelian subcategory and exact embedding
- `thm-abelian-groups-form-an-abelian-category` · theorem — Abelian groups form an abelian category
- `thm-modules-over-a-ring-form-an-abelian-category` · theorem — Modules over a ring form an abelian category
- `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category` · theorem — Additive functors from a small preadditive category to an abelian category form an abelian category
- `thm-a-small-product-of-abelian-categories-is-abelian` · theorem — A small product of abelian categories is abelian
- `cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian` · counterexample — Filtered vector spaces can be additive with kernels and cokernels without being abelian
- `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category` · counterexample — Torsion-free abelian groups do not form an abelian category
- `cor-an-abelian-category-that-is-a-preorder-is-trivial` · corollary — An abelian category that is a preorder is trivial
- `rem-the-freyd-mitchell-embedding-theorem` · remark — Freyd-Mitchell gives a fully faithful exact embedding of every small abelian category into a module category
- `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` · remark — The library does not use Freyd-Mitchell to prove the diagram lemmas
- `fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian` · false-statement — FALSE: every additive category with all kernels and cokernels is abelian
- `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic` · false-statement — FALSE: if coimage and image happen to be isomorphic as objects, then the canonical map is automatically an isomorphism
- `fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism` · false-statement — FALSE: in an abelian category a morphism can be monic and epic without being an isomorphism
- `fs-every-abelian-category-is-equivalent-to-a-category-of-modules` · false-statement — FALSE: every abelian category is equivalent to a module category
- `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks` · false-statement — FALSE: pullbacks preserve epimorphisms in every category with pullbacks

### `abelian-categories-examples` — Abelian Categories — Examples (9 item(s))

- `ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups` · example — Kernels, cokernels, images, and coimages in abelian groups are the familiar subgroup and quotient constructions
- `ex-the-canonical-factorisation-of-a-module-homomorphism` · example — A module homomorphism factors as quotient by its kernel followed by inclusion of its image
- `ex-a-pullback-computed-as-a-kernel-of-a-difference` · example — A pullback of module maps is computed as a kernel of a difference map
- `ex-vector-spaces-over-a-field-as-an-abelian-category` · example — Vector spaces over a field form an abelian category
- `ex-the-abelian-category-of-representations-of-a-two-object-quiver` · example — Representations of the quiver 1 -> 2 in abelian groups form an abelian category
- `cex-topological-abelian-groups-are-additive-and-not-abelian` · counterexample — Topological abelian groups are additive but not abelian
- `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` · example — The third isomorphism theorem in abelian groups matches the categorical statement
- `ex-an-exact-functor-between-module-categories` · example — Localization of modules gives an exact functor between module categories
- `cex-filtered-vector-spaces-fail-the-coimage-image-axiom` · counterexample — Filtered vector spaces can have zero kernel and zero cokernel without satisfying AB2

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
| `cex-amenability-does-not-imply-subexponential-growth` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `5fa2baf369ba7cf7f85ba858978dd2492e4154fe8b2ccf8f2b377a9418dc1615` |
| `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `542cc87fe5dd837377034948eb648f9929eb9e888145cad7bc04d8da9e12e0b4` |
| `cex-an-exact-functor-need-not-be-faithful` | `abelian-categories` | gpt-5.6-terra | `d5ee8ac9ac5edf81519c0e63cc264d4fd43bc1a1b43d250ae041d3303acb399b` |
| `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero` | `abelian-categories` | gpt-5.6-terra | `27c3efb914dc21913cb1b10a9827d83f85623301761a9ed30d7ecc1ea56fc11b` |
| `cor-an-abelian-category-that-is-a-preorder-is-trivial` | `abelian-categories` | gpt-5.6-terra | `8353f0df7792be013044bde91757a188db2b8b7d59ef6d33fd74aae52b4baca9` |
| `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `542b3b365d59624d384bf33b151650d57bb9a941a2e53427d9f661b05f011a5d` |
| `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `7e8863f77a66c1e916473ca3cbc8d2eb314648f0d325a2e7e22ba8e1bf1da3f8` |
| `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `f8c98ca1ff646e4acceab6a83c70088317be0ccb0e672cea46cb6228a5dbd7f2` |
| `cor-schurs-lemma-for-irreducible-representations` | `the-group-algebra-and-representations` | gpt-5.6-terra | `bb704376ced4b61ea01c8a1681a7ce800c2fa18b70002a96e45768e40b421f5a` |
| `cor-solvable-and-locally-finite-groups-are-amenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `c86f528eb6cd46173356166d5ea2e8e63790f2c59df6ff8bf075ca07401d2828` |
| `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity` | `the-group-algebra-and-representations` | gpt-5.6-terra | `6129227d320d4cc02b9f4245e1bcdd67a434da4f83455cffb7a50ef01bae2642` |
| `cor-the-pushout-of-a-monomorphism-is-a-monomorphism` | `abelian-categories` | gpt-5.6-terra | `46b6d5d97c0de8fd0d7f3cb6dcfbcb1cdf8d2ffeedcee08b5ef88831f1581c2e` |
| `def-abelian-category` | `abelian-categories` | gpt-5.6-terra | `5c1d68f9dafcc649bc3072cb39503830e70dd4f5241fac2143fef601c81554ee` |
| `def-abelian-subcategory-and-exact-embedding` | `abelian-categories` | gpt-5.6-terra | `27e5579b13e4bc0c15d90ae6e2dec59dc855b5feccba0d9e17eb32bc0c0d2aa5` |
| `def-finite-dimensional-representation-of-a-group-over-a-field` | `the-group-algebra-and-representations` | gpt-5.6-terra | `51c975bfccbbe7cca88faa7446f7f2547e202db907c196ee2da913c4f7ebdbf3` |
| `def-folner-sequence` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `f3f1812576d4c8fc5b424ef2e3e89a05f9500738d191e41c8e34e17c91bc0b04` |
| `def-intertwiner-equivalent-and-faithful-representations` | `the-group-algebra-and-representations` | gpt-5.6-terra | `7c6d93a6c3fdd2c6c766582eb4d3b877e2d0df0e214a72d9fa808e40fe6d7bdc` |
| `def-subrepresentation-and-irreducible-representation` | `the-group-algebra-and-representations` | gpt-5.6-terra | `badfa8cdff74e3ff76fbef8c9754c42f95f3bd3293d87bd6c1be429929c9aeba` |
| `def-the-freyd-axioms-for-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `eb10470f0fa7187eeca697486bc4e28f6609536bde3b6474e4e08dd893e1be06` |
| `def-the-quotient-of-an-object-by-a-subobject` | `abelian-categories` | gpt-5.6-terra | `f83c2a987229631cf9e82f14f3092af5b8f4693130ead559b14a04106a7cd53d` |
| `ex-a-pullback-computed-as-a-kernel-of-a-difference` | `abelian-categories-examples` | gpt-5.6-terra | `2716154188ccbe5ef2e830aec5d737a646f300a2257ad0fcffaba45d74925ecf` |
| `ex-a-schreier-coset-graph-and-its-tree-basis` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `8bbe64a53e226901fcfd0ccdf8ad107730802176aafd5d5081204f173749d4f9` |
| `ex-an-exact-functor-between-module-categories` | `abelian-categories-examples` | gpt-5.6-terra | `028be2c41706c2e8c01b62e63a73a5643b7f6328ae4d4ffa1885ce25071428f5` |
| `ex-boundary-expansion-in-the-free-group` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `84f218249176b9db3ef84d706655497ff63fe3100f834c6f469974e27dfddaac` |
| `ex-finite-and-locally-finite-amenable-groups` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `02d8a09bb416635403b74c836a2dc8c527b309a1b8eab3479925dcbbe0aebc6f` |
| `ex-folner-boxes-in-zn` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `dd533669675cc4518b1971528c92bb9d4ff34ce2be9d2706be61b1de4abde6d6` |
| `ex-folner-intervals-in-the-integers` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `422f2abab9a651c4152bb1a87269c5449e18da460b249fb75e96619d6e85733d` |
| `ex-index-two-subgroup-of-a-rank-two-free-group` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `d5b84787948c18380b21778253977db8d18a3f2ddb0d17fdca74afada1992393` |
| `ex-infinite-rank-subgroup-of-a-rank-two-free-group` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `4b20f465449a839a30fb6eb4e912ad9ac4677b281a03634b0b30138958b4e6ee` |
| `ex-kernel-of-the-exponent-sum-map` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `c37522728b2db4d5e91894454bba9740187f30edb6657495335db210d231a209` |
| `ex-marshall-hall-separating-quotient` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `9eae7bb7f42d9073ea2127b4d22d8a9976fa4e2e24aafb1119823657154858e2` |
| `ex-paradoxical-decomposition-of-a-free-group` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `3d4ba9accfe62e0e250c715007b1ae0710f255772bac6596c5b87926fbc16791` |
| `ex-reidemeister-schreier-for-a-surface-subgroup` | `subgroups-of-free-groups-and-schreier-rewriting-examples` | gpt-5.6-terra | `70f8aefc47bfde0b810c4e6b67fb56a3e95d35c32787f0a2090807e76c6ae3b1` |
| `ex-the-abelian-category-of-representations-of-a-two-object-quiver` | `abelian-categories-examples` | gpt-5.6-terra | `b6b3b2ac217a2c0b146ff13773e83f2d04eb349ffdb408b24ddec7991d80e336` |
| `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `9ec36fbbdd0100383ce8e39aaf81a4c955a337d491c536bf896dd2021d530bbd` |
| `ex-the-lamplighter-group-is-amenable` | `amenable-groups-and-folner-criteria-examples` | gpt-5.6-terra | `603530e8ec65031adcf949825fefd1b5900c17f37466b1fb42c8915b45b455f5` |
| `ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `119c1cb68dacb4f12af610cda359e3f1fff76b85d9a2e471015afed69fdfa05c` |
| `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `8e78036a993aa9f1697e1f8ec6be49753027f5d56a3b781092460bde6051315d` |
| `ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `c8993277366ce97ef20dcc9743ed686decb9f45cf2bdf5224da9a522401cf9c3` |
| `ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `626b167f1fd4af7aa3670237b6894a66f7a26de6d2662c0de9ef3e7bf16da329` |
| `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` | `abelian-categories-examples` | gpt-5.6-terra | `1eff77dbb8f87bf976a3498ef25054d460182b1a8e1c47300c7259a7a43a2493` |
| `ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `cef7305545400211b4ae82f0fbc946a1450130ee015c2ccf415b0dc5fe9d6e0e` |
| `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `25e751810f70db631043c9b571d27f852a1500d82bfa54a4442b7fd5203c7db7` |
| `fs-every-abelian-category-is-equivalent-to-a-category-of-modules` | `abelian-categories` | gpt-5.6-terra | `8b8471666843143e16daedf969bbe3f3d2063847fef6eb861ae7d62b45cacf05` |
| `fs-every-degree-one-representation-is-trivial` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `543ba076764e8fa1a6b34d0c515d44ee3206439430364408c005228a29ab9a1c` |
| `fs-every-representation-is-faithful` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `0e0f7ccb502ea041457374fbaa59a64f7e2821f48b967fe71b266ac1c721ba60` |
| `fs-folner-sequences-exist-for-every-uncountable-amenable-group` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `a7ac2f032f9dc68cbdd5f70f5aace6865a0b788525b152e0660757b46c23d6b2` |
| `fs-one-finite-folner-set-proves-amenability` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `3c807f09ac6356d237b9635fb54417a93dea7ab88ae5a88d6ee07d5441c91e83` |
| `fs-schreier-generators-are-always-a-free-basis` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `4fd612fed8992e5dbbdf9b760d919db300dd10c194818a8c2fab5e961757952c` |
| `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars` | `the-group-algebra-and-representations-examples` | gpt-5.6-terra | `c78b624a8a244b1b43198c69ea857340843ace6598f8d3f1294627c0262f0dd1` |
| `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic` | `abelian-categories` | gpt-5.6-terra | `01c4a41decb1a0ff1ce0d28df9d829e2d54ffb56b84b17e7aa29eeee4b746d99` |
| `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks` | `abelian-categories` | gpt-5.6-terra | `22190a847ae3d99371249680c05148e6fc0b37fc382e4e3d355b17826e40a37c` |
| `lem-equivalent-folner-boundary-formulations` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `dfa849bdac7c111833768cc69faff396f6151bf6e9c260863e9b0e81cf6ecac4` |
| `lem-schreier-coset-graph-is-connected-and-deterministic` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `65e1da9c3987ace20be783b151bd9f23bd3b3fd56fe19c5615c98bedc6668eb6` |
| `lem-schreier-rewriting-is-invariant-under-free-reduction` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `041f38760bea59a1e253f6bde39089e6a8c1e19260832aad78e3b5f7f3f17522` |
| `lem-spanning-trees-and-schreier-systems-correspond` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `734eef7447c37a5853ef21e487543abd2bf5da61dd1d515ba53d695c62427e3e` |
| `lem-tree-schreier-generators-are-freely-independent` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `3040408d543a3a23525f07ca946b340bcc999fe2b64200a994cbc147c65cdc6b` |
| `rem-nonamenable-groups-without-nonabelian-free-subgroups` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `afd15526d544318daa4363a1f6206f1e40349c7244149325f1c945198a7e7280` |
| `rem-the-axiom-labels-and-where-they-come-from` | `abelian-categories` | gpt-5.6-terra | `60966afd0e3ceafdff947063c460af0db511e2fe8317ef02a9d358fc3e99aed5` |
| `rem-the-freyd-mitchell-embedding-theorem` | `abelian-categories` | gpt-5.6-terra | `ac88e06d99867d55993d8424421c0f1650623f7075e6b3235089b9786f96d5be` |
| `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation` | `abelian-categories` | gpt-5.6-terra | `1d6a8b874d6c96c5f9613e9386a717a36cf01f154c92c4bd8f8d451cd0337680` |
| `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms` | `abelian-categories` | gpt-5.6-terra | `86cfc45203b16a54380a77b911d2fe981d82d5a04fc1c78600d50bf71dc948f9` |
| `thm-a-morphism-factors-uniquely-through-its-coimage` | `abelian-categories` | gpt-5.6-terra | `dfc0c69bced800a8408605e0d078b951957b6bd77227b53accc52b93bcf9a180` |
| `thm-a-morphism-factors-uniquely-through-its-image` | `abelian-categories` | gpt-5.6-terra | `484cfd21bf879e013753dc4ab197adf799dbb1960ecedba4163fe31ae7836a37` |
| `thm-abelian-groups-are-amenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `7582c1efc75ba4269f67f51c73e701181e8cedcecf2057b00cbc320e016a1111` |
| `thm-abelian-groups-form-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `e0c170e609ceae943e25e378b7635eac0417edaf91588147814c9d1c5d9e1092` |
| `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `73a15c14adfece842d9a6003ad576ee1380e1e0c0fff88650197d899fe0025d3` |
| `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `f77668ac4d7a7a2d0a2c8bb4518fe40b9f0dc771de0e7cc9c9018eae2b37aced` |
| `thm-an-abelian-category-is-balanced` | `abelian-categories` | gpt-5.6-terra | `2d55960b437a439b08af249ba64dffea4a1909eaefbe32db8f12a565eedf9024` |
| `thm-every-monomorphism-is-the-kernel-of-its-cokernel` | `abelian-categories` | gpt-5.6-terra | `74e29f4d449ca5c62dce0b2b79d34b402c56c855b42e99c990e1778cb5f63e7f` |
| `thm-extensions-of-amenable-groups-are-amenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `e2481d337b34827408d93f2721b830a5c36663f4c912cab14ed2517060667762` |
| `thm-folner-criterion-for-amenability` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `221ffd0368dbc2d8f89889fd941aab9d1e2986b869ab248e4d4b830b767ecfb9` |
| `thm-free-group-of-rank-two-is-nonamenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `57779fb501f072c86f95a1ffbb008c6dd8363ae3a894b69d6fcbf1af28a8ace4` |
| `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism` | `abelian-categories` | gpt-5.6-terra | `133e6a29e4ed8ae66f260e9b083b68e266a787e8c38f54f0fc6c546c6b4ef20b` |
| `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional` | `the-group-algebra-and-representations` | gpt-5.6-terra | `d810dbd104799c078c2648a4c912d47efaec634ae6a7037c7cac454b9da2521a` |
| `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` | `abelian-categories` | gpt-5.6-terra | `ed337c00273375f8921a8a76b4c4900e1560f3f739f3d81e13231a21e5423240` |
| `thm-marshall-hall-free-factor-theorem` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `aa4fb13f9f3b4943adf038d864bb4a6fa13ae72142731b82d2ed11b74b82dd93` |
| `thm-modules-over-a-ring-form-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `37608bc56da6b176396c5cfbb10e3f118149d189b3a95bd4a4529ba7a064cb6e` |
| `thm-nielsen-schreier-with-an-explicit-basis` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `50a7fa83a5b4f83469e558b5378781cd5fd1579379d411d0774d242d8b444ae0` |
| `thm-pullback-pasting-in-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `3410da4251e7a4dd460a3f171295c6eba05cfe1ddbf04b4e27786492d435e18b` |
| `thm-regular-representation-is-faithful` | `the-group-algebra-and-representations` | gpt-5.6-terra | `12c5616f47d5f147865fc1691f692eca3951eee75cef2b1de08487644fa8a3a6` |
| `thm-reidemeister-schreier-presentation` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `42c1e42acbfa3242e8d83fd3a7ccb4ab0200dc9838e6532ae81631b59bb64d57` |
| `thm-schreier-generating-lemma` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `af3e55e4a3e9f22f0af687b3079a20924cdbd5bb16d525deda2be8066ca6d61b` |
| `thm-schreier-index-rank-formula` | `subgroups-of-free-groups-and-schreier-rewriting` | gpt-5.6-terra | `31af287201d18c3dc497c65cb800fcd64ddc56286dcb0c32c5ff7ddcf0672a09` |
| `thm-subexponential-growth-implies-amenability` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `f32a89e269e60d79cae182740d56b807413b3a3bdc88924cfba6390c07248bd8` |
| `thm-subgroups-and-quotients-of-amenable-groups-are-amenable` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `9bb74810b2180ac404c1c2cb31482057836183932625a114f54711fd9dea072d` |
| `thm-tarski-alternative` | `amenable-groups-and-folner-criteria` | gpt-5.6-terra | `72873499edf3c2995c6f30a9bdea17135be23fb409b7e1fc3b6847a817d16e62` |
| `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique` | `abelian-categories` | gpt-5.6-terra | `84ac56bff41be7d196859fbd1bd069be8335740500444be799231f088d5a3d78` |
| `thm-the-freyd-axioms-imply-the-additive-axioms` | `abelian-categories` | gpt-5.6-terra | `f348c77abff993ad62108f1380c0b85109512f5dc85658384bda953cc6e5a6dd` |
| `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors` | `abelian-categories` | gpt-5.6-terra | `275595e0a4b19f3d51b285495209782d9f681fea1e90cf594194e1a56245395e` |
| `thm-the-opposite-of-an-abelian-category-is-abelian` | `abelian-categories` | gpt-5.6-terra | `bcf9f2b5b97c66cc4acfc8a6754d1954b62cc14f202cc8ab9e26ccbc1a3cedc3` |
| `thm-the-quotient-is-independent-of-the-representing-monomorphism` | `abelian-categories` | gpt-5.6-terra | `8e4afdbc9857ebbdd2ab4929b785772bb309c6096b65b7eaaabd09ccb1be9f0f` |
| `thm-third-isomorphism-theorem-in-an-abelian-category` | `abelian-categories` | gpt-5.6-terra | `651bc0660c9902116ebd2c4d9bf6e029f2ac60e685f3431a3ee0432cf2c9b18e` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-21-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-21-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-21-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
