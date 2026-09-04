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
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
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

run: frontier-29
role: alpha-adjudicate
label: step8-a
covers: 1, 2, 10

# Step 8 adjudication — group **a**, run `frontier-29`

You are the group Alpha for batches **1**, **2**, **10**: 5 A/B pair(s), 10 page(s), 172 item(s), 72 open rejection(s) over 72 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `group-extensions-complements-and-schur-zassenhaus` | A | group-theory | 71.017 | `small-cancellation-and-dehn-algorithms-examples` |
| 1 | `group-extensions-complements-and-schur-zassenhaus-examples` | B | group-theory | 71.018 | `group-extensions-complements-and-schur-zassenhaus` |
| 1 | `crossed-homomorphisms-complements-and-first-cohomology` | A | group-theory | 365.071 | `grothendieck-spectral-sequences-and-computations-examples`, `group-extensions-complements-and-schur-zassenhaus` |
| 1 | `crossed-homomorphisms-complements-and-first-cohomology-examples` | B | group-theory | 365.072 | `algebraic-extensions-degree-and-finite-fields`, `crossed-homomorphisms-complements-and-first-cohomology` |
| 2 | `modular-representations-and-projective-covers` | A | group-theory | 150.001 | `induced-representations-and-frobenius-reciprocity-examples`, `valuation-rings-and-discrete-valuation-rings`, `inverse-limits-and-noetherian-completion` |
| 2 | `modular-representations-and-projective-covers-examples` | B | group-theory | 150.002 | `modular-representations-and-projective-covers` |
| 2 | `pro-p-groups-and-the-p-adic-integers` | A | group-theory | 302.015 | `inverse-systems-profinite-groups-and-completion-examples` |
| 2 | `pro-p-groups-and-the-p-adic-integers-examples` | B | group-theory | 302.016 | `pro-p-groups-and-the-p-adic-integers` |
| 10 | `duality-and-rigidity-in-monoidal-categories` | A | category-theory | 365.031 | `braided-and-symmetric-monoidal-categories-examples` |
| 10 | `duality-and-rigidity-in-monoidal-categories-examples` | B | category-theory | 365.032 | `duality-and-rigidity-in-monoidal-categories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `group-extensions-complements-and-schur-zassenhaus` — Group Extensions Complements and Schur Zassenhaus (23 item(s))

- `def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient` · definition — Equivalence of group extensions with fixed kernel and fixed quotient
- `def-morphism-of-group-extensions` · definition — Morphisms of group extensions
- `lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base` · lemma — In a group extension the kernel is normal and the quotient recovers the base
- `def-retraction-of-the-kernel-in-a-group-extension` · definition — A retraction of the kernel in a group extension
- `thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products` · theorem — A group extension splits exactly when it has a complement or a compatible semidirect-product model, and a kernel retraction forces a direct product
- `lem-a-complement-induces-the-conjugation-action-on-the-kernel` · lemma — A complement determines the conjugation action on the kernel
- `prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel` · proposition — A split extension is a direct product exactly when its complement centralizes the kernel
- `lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel` · lemma — A group extension induces a well-defined outer action on its kernel
- `def-abstract-kernel-and-the-general-extension-problem` · definition — Abstract kernels and the general extension problem
- `rem-nonabelian-extension-obstruction-and-h-two-torsor` · remark — Nonabelian extension obstructions live in H^3 and realized classes form an H^2-torsor
- `def-hall-pi-subgroup` · definition — Hall pi-subgroup
- `lem-normal-hall-subgroup-gives-a-coprime-extension` · lemma — A normal Hall subgroup presents the ambient group as an extension of coprime orders
- `thm-schur-zassenhaus-existence` · theorem — Schur-Zassenhaus existence theorem
- `thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable` · theorem — Schur-Zassenhaus conjugacy when the kernel or quotient is solvable
- `rem-schur-zassenhaus-conjugacy-in-full-generality` · remark — The full Schur-Zassenhaus conjugacy theorem
- `cor-extensions-with-coprime-kernel-and-quotient-split` · corollary — Extensions with coprime kernel and quotient split
- `def-complete-group` · definition — Complete group
- `prop-extensions-with-complete-kernel-split-over-the-centralizer` · proposition — If the kernel is complete, the extension splits over its centralizer
- `fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism` · false-statement — FALSE: a set-theoretic section of an extension is automatically a homomorphism
- `fs-isomorphic-middle-groups-force-equivalent-group-extensions` · false-statement — FALSE: isomorphic middle groups force equivalent extensions with fixed kernel and quotient
- `fs-every-split-group-extension-is-a-direct-product` · false-statement — FALSE: every split group extension is a direct product
- `fs-schur-zassenhaus-says-every-hall-subgroup-is-normal` · false-statement — FALSE: Schur-Zassenhaus says every Hall subgroup is normal
- `fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input` · false-statement — FALSE: Schur-Zassenhaus conjugacy needs no solvability or deeper input

### `group-extensions-complements-and-schur-zassenhaus-examples` — Group Extensions Complements and Schur Zassenhaus — Examples (6 item(s))

- `cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic` · counterexample — A set-theoretic section of C_4 onto C_2 need not be a homomorphism
- `ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two` · example — The dihedral group of order eight is a split extension of C_4 by C_2
- `ex-the-klein-four-extension-of-c-two-by-c-two-is-direct` · example — The split extension C_2 × C_2 of C_2 by C_2 is direct
- `ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup` · example — A_4 has four complements to its normal Klein four subgroup
- `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate` · example — The three transposition subgroups of S_3 are conjugate complements to A_3
- `cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions` · counterexample — The cyclic group Z/9 supports inequivalent extensions of C_3 by C_3

### `crossed-homomorphisms-complements-and-first-cohomology` — Crossed Homomorphisms Complements and First Cohomology (22 item(s))

- `def-crossed-homomorphism-for-a-g-group` · definition — Crossed homomorphism for a G-group
- `lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group` · lemma — With abelian coefficients, crossed homomorphisms form an abelian group
- `def-principal-crossed-homomorphism-for-abelian-coefficients` · definition — Principal crossed homomorphism for abelian coefficients
- `lem-principal-crossed-homomorphisms-form-a-subgroup` · lemma — Principal crossed homomorphisms form a subgroup
- `def-first-cohomology-via-crossed-homomorphisms` · definition — First cohomology via crossed homomorphisms
- `def-first-group-cohomology-via-inhomogeneous-one-cocycles` · definition — First group cohomology via inhomogeneous one-cocycles
- `thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one` · theorem — The inhomogeneous one-cocycle model agrees with crossed homomorphisms in degree one
- `cor-first-cohomology-for-a-trivial-action-is-hom` · corollary — For a trivial action, first cohomology is Hom
- `cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes` · corollary — For a finite group, uniquely divisible coefficients have trivial first cohomology
- `def-graph-subgroup-in-a-semidirect-product` · definition — The graph subgroup attached to a map into a semidirect product
- `lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism` · lemma — A graph subgroup is a complement exactly for a crossed homomorphism
- `lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism` · lemma — Kernel conjugation by an element of the coefficient group corresponds to a principal crossed homomorphism
- `thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy` · theorem — First cohomology classifies complements up to kernel conjugacy
- `def-first-nonabelian-cohomology-as-a-pointed-set` · definition — First nonabelian cohomology as a pointed set
- `thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set` · theorem — Nonabelian first cohomology classifies complements as a pointed set
- `def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology` · definition — Restriction, inflation, and the quotient conjugation action on first cohomology
- `thm-inflation-restriction-exact-sequence-in-degree-one` · theorem — Inflation-restriction exact sequence in degree one
- `fs-every-crossed-homomorphism-is-an-ordinary-homomorphism` · false-statement — FALSE: every crossed homomorphism is an ordinary homomorphism
- `fs-first-cohomology-with-nonabelian-coefficients-is-a-group` · false-statement — FALSE: first cohomology with nonabelian coefficients is a group
- `fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product` · false-statement — FALSE: first cohomology classifies all subgroups of a semidirect product
- `fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology` · false-statement — FALSE: whole-semiproduct conjugacy is the equivalence relation behind first cohomology
- `fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically` · false-statement — FALSE: the cochain and crossed-homomorphism definitions of first cohomology agree automatically

### `crossed-homomorphisms-complements-and-first-cohomology-examples` — Crossed Homomorphisms Complements and First Cohomology — Examples (6 item(s))

- `ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero` · example — With trivial action, H^1(C_2,C_3) is zero
- `ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator` · example — Crossed homomorphisms from a cyclic group are determined by the value on a generator
- `ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements` · example — The affine group AGL(1,p) has one kernel-conjugacy class of complements to its translation subgroup
- `ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism` · example — Kernel-conjugate complements differ by a principal crossed homomorphism
- `ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three` · example — With trivial C_2-action on S_3, the nonabelian H^1 pointed set has two classes
- `cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism` · counterexample — The inversion crossed homomorphism C_2 → Z is not an ordinary homomorphism

### `modular-representations-and-projective-covers` — Modular Representations and Projective Covers (33 item(s))

- `def-p-modular-system` · definition — A p-modular system is a characteristic-zero fraction field over a complete discrete valuation ring with residue field of characteristic p
- `def-splitting-p-modular-system-for-a-finite-group` · definition — A splitting p-modular system for a finite group is a p-modular system whose fraction and residue fields split the needed group algebras
- `def-og-lattice-and-reduction-modulo-the-maximal-ideal` · definition — An OG-lattice is a finite free module over the valuation ring with G-action, and reduction modulo the maximal ideal produces a kG-module
- `lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module` · lemma — Reducing an OG-lattice modulo the maximal ideal gives a finite-dimensional kG-module
- `rem-maschke-failure-in-defining-characteristic` · remark — When the characteristic divides the group order, Maschke can fail and kG need not be semisimple
- `def-jacobson-radical-of-a-finite-dimensional-algebra` · definition — The Jacobson radical of a finite-dimensional algebra is the intersection of its maximal left ideals
- `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` · theorem — For a finite-dimensional algebra, the Jacobson radical is nilpotent and the quotient by it is semisimple
- `thm-module-radical-is-jacobson-radical-times-the-module` · theorem — For a finite-dimensional algebra, the module radical is exactly the action of the Jacobson radical
- `thm-nakayama-lemma-for-finite-dimensional-algebras` · theorem — Over a finite-dimensional algebra, a module annihilated modulo its radical is zero, and generators lift from the head
- `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent` · lemma — For a finite p-group in characteristic p, the augmentation ideal of the group algebra is nilpotent
- `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra` · proposition — For a finite group and a field of characteristic p, the group algebra is a symmetric Frobenius algebra via the coefficient of the identity
- `cor-finitely-generated-projective-kg-modules-are-injective-and-conversely` · corollary — Over a finite group algebra in defining characteristic, finite-dimensional projective and injective modules coincide
- `def-module-radical-socle-head-and-loewy-series` · definition — The radical, socle, head, and Loewy series of a finite-dimensional module
- `lem-radical-of-a-finite-length-module-is-superfluous` · lemma — For a finite-length module, the radical is a superfluous submodule
- `def-essential-epimorphism-and-projective-cover` · definition — An essential epimorphism is a surjection with superfluous kernel, and a projective cover is a projective source with such a map
- `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` · theorem — Every finite-dimensional module has a projective cover, unique up to isomorphism over the target
- `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules` · theorem — Indecomposable projective kG-modules correspond to simple modules through taking the head
- `thm-krull-schmidt-for-finite-dimensional-kg-modules` · theorem — Finite-dimensional kG-modules decompose as finite direct sums of indecomposables uniquely up to order and isomorphism
- `cor-the-regular-module-decomposes-into-projective-indecomposables` · corollary — The regular module is a direct sum of the projective covers of the simple modules, with the split-field multiplicities
- `thm-kg-is-local-iff-g-is-a-p-group` · theorem — For a finite group and a field of characteristic p, the group algebra is local exactly when the group is a p-group
- `cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p` · corollary — A finite p-group has only the trivial simple module over a field of characteristic p
- `prop-normal-p-subgroups-act-trivially-on-simple-modules` · proposition — A normal p-subgroup acts trivially on every simple module in characteristic p
- `prop-restriction-and-induction-preserve-projectives` · proposition — Restriction and induction along a subgroup preserve projective modules
- `def-relative-projectivity` · definition — A module is relatively H-projective when it is a direct summand of one induced from H
- `thm-higman-criterion-for-relative-projectivity` · theorem — Higman's criterion characterizes relative projectivity through the relative trace idempotent test
- `def-vertex-and-source-of-an-indecomposable-module` · definition — A vertex is a minimal p-subgroup for relative projectivity, and a source is an indecomposable inducing summand there
- `thm-green-vertex-source-existence-and-conjugacy` · theorem — Vertices exist for indecomposable modules, are conjugate in G, and sources are conjugate by the appropriate normalizer
- `cor-projective-indecomposable-modules-have-trivial-vertex` · corollary — A projective indecomposable module has trivial vertex
- `fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order` · false-statement — If the field has characteristic p and p divides |G|, then Maschke's theorem still makes kG semisimple
- `fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible` · false-statement — Every reduction modulo p of an ordinary irreducible lattice stays irreducible
- `fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes` · false-statement — A module has one literally canonical projective cover, not just a unique isomorphism class over the target
- `fs-a-vertex-is-a-vertex-of-the-cayley-graph` · false-statement — The vertex of an indecomposable module is literally a graph vertex of a Cayley graph
- `fs-projective-and-injective-modules-coincide-over-every-ring` · false-statement — Projective and injective modules coincide over every ring

### `modular-representations-and-projective-covers-examples` — Modular Representations and Projective Covers - Examples (6 item(s))

- `ex-the-regular-module-of-cp-in-characteristic-p` · example — The regular module of Cp in characteristic p is indecomposable with a unique simple quotient
- `ex-the-augmentation-ideal-and-loewy-series-for-kcp` · example — The augmentation ideal and Loewy series of kCp can be written explicitly
- `ex-projective-cover-of-the-trivial-module-for-a-p-group` · example — For a finite p-group, the augmentation map from kP to the trivial module is its projective cover
- `ex-reducing-an-integral-lattice-for-s-three` · example — Reducing a standard integral lattice for S3 modulo 3 produces a reducible kS3-module
- `ex-relative-projectivity-detected-by-higmans-criterion` · example — A permutation-induced summand is detected as relatively projective by Higman's criterion
- `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction` · counterexample — An ordinary irreducible representation can have reducible reduction modulo p

### `pro-p-groups-and-the-p-adic-integers` — Pro P Groups and the P Adic Integers (25 item(s))

- `def-pro-p-group` · definition — A pro-p group is a profinite group that is an inverse limit of finite p-groups
- `def-pro-p-completion-of-an-abstract-group` · definition — The pro-p completion of an abstract group is the inverse limit over its finite p-group quotients
- `thm-topological-characterisation-of-pro-p-groups` · theorem — A topological group is pro-p exactly when it is profinite and has an open normal basis with finite p-group quotients
- `def-p-adic-integers-as-compatible-residue-classes` · definition — The p-adic integers are the compatible residue-class tuples in the inverse limit of Z mod p^n
- `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group` · lemma — Coordinatewise addition and negation make Zp a topological abelian group
- `def-p-adic-metric-on-zp` · definition — The p-adic metric on Zp is determined by the first coordinate at which two compatible residue systems differ
- `thm-inverse-limit-topology-equals-the-p-adic-metric-topology` · theorem — The inverse-limit topology on Zp agrees with the p-adic metric topology
- `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete` · theorem — Zp is Hausdorff, totally disconnected, and complete, and compact assuming Choice
- `def-canonical-map-from-the-integers-to-zp` · definition — The canonical map from Z to Zp sends an integer to its coherent residue classes modulo p^n
- `thm-the-integers-map-injectively-and-densely-into-zp` · theorem — The canonical map from the integers into Zp is injective and has dense image
- `prop-additive-group-of-zp-is-torsion-free` · proposition — The additive group of Zp is torsion-free
- `prop-zp-is-topologically-generated-by-one` · proposition — The additive topological group of Zp is topologically generated by 1, although it is not abstractly cyclic
- `thm-zp-is-the-pro-p-completion-of-the-integers` · theorem — Zp is the pro-p completion of the integers
- `prop-profinite-completion-of-z-is-the-product-of-all-zp` · proposition — The profinite completion of the integers is the direct product of the p-adic integer groups over all primes
- `def-frattini-subgroup-of-a-profinite-group` · definition — The Frattini subgroup of a profinite group is the intersection of its maximal proper closed subgroups
- `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open` · lemma — Every maximal proper closed subgroup of a profinite group is open
- `thm-frattini-subgroup-commutes-with-surjective-inverse-limits` · theorem — For surjective inverse systems in the pro-p setting, the Frattini subgroup commutes with the inverse limit
- `thm-frattini-formula-for-finitely-generated-pro-p-groups` · theorem — For a finitely generated pro-p group, the Frattini subgroup is the closure of [G,G]G^p
- `thm-topological-burnside-basis-theorem` · theorem — A subset topologically generates a finitely generated pro-p group exactly when its image spans the Frattini quotient over Fp
- `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini` · corollary — A homomorphism of finitely generated pro-p groups is surjective exactly when the induced map on Frattini quotients is surjective
- `fs-zp-is-the-profinite-completion-of-z` · false-statement — Zp is the full profinite completion of the integers
- `fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite` · false-statement — Because every coordinate group is finite, Zp is an additive torsion group
- `fs-zp-is-cyclic-as-an-abstract-group` · false-statement — The additive group of Zp is cyclic as an abstract group
- `thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups` · theorem — For a finitely generated pro-p group, the Frattini subgroup equals [G,G]G^p
- `fs-every-profinite-group-is-pro-p-for-some-prime` · false-statement — Every profinite group is pro-p for some prime

### `pro-p-groups-and-the-p-adic-integers-examples` — Pro P Groups and the P Adic Integers - Examples (7 item(s))

- `ex-compatible-p-adic-digit-sequences` · example — A p-adic integer is encoded by a compatible sequence of residue digits
- `ex-convergence-of-partial-p-adic-expansions` · example — The partial sums of a p-adic expansion converge in the inverse-limit topology
- `ex-a-cauchy-sequence-in-the-additive-p-adic-metric` · example — A standard p-adic digit sequence is Cauchy and converges in Zp
- `ex-pro-p-completion-of-a-finite-p-group` · example — A finite p-group is naturally isomorphic to its own pro-p completion
- `ex-frattini-quotient-of-zp` · example — The Frattini quotient of Zp is the one-dimensional vector space Fp
- `ex-topological-generation-in-zp-squared` · example — In Zp squared, topological generation is detected by the Frattini quotient coordinates
- `cex-an-abstractly-dense-proper-subgroup-of-zp` · counterexample — The embedded integers form an abstractly proper but topologically dense subgroup of Zp

### `duality-and-rigidity-in-monoidal-categories` — Duality and Rigidity in Monoidal Categories (37 item(s))

- `def-left-dual-and-right-dual-object` · definition — Left dual and right dual object
- `def-the-zig-zag-identities` · definition — The zig-zag identities
- `rem-which-side-the-word-left-refers-to` · remark — What 'left' refers to in 'left dual'
- `thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual` · theorem — A left dual of an object has that object as a right dual
- `thm-the-unit-is-self-dual` · theorem — The unit is self-dual
- `thm-reversing-the-tensor-product-exchanges-left-and-right-duals` · theorem — Reversing the tensor product exchanges left and right duals
- `thm-duals-are-unique-up-to-a-unique-compatible-isomorphism` · theorem — Duals are unique up to a unique compatible isomorphism
- `thm-duality-yields-adjunctions-of-tensoring-functors` · theorem — Duality yields adjunctions of tensoring functors
- `thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor` · theorem — A dual object in the endofunctor category is an adjoint functor
- `cor-a-second-proof-that-adjoints-are-unique` · corollary — A second proof that adjoints are unique
- `def-rigid-object-and-rigid-monoidal-category` · definition — Rigid object and rigid monoidal category
- `cex-not-every-monoidal-category-is-rigid` · counterexample — Not every monoidal category is rigid
- `thm-finite-dimensional-vector-spaces-are-rigid` · theorem — Finite-dimensional vector spaces are rigid
- `def-the-dual-of-a-morphism` · definition — The dual of a morphism
- `thm-left-duality-is-a-contravariant-antimonoidal-functor` · theorem — Left duality is a contravariant antimonoidal functor
- `thm-the-double-dual-is-a-monoidal-functor` · theorem — The double dual is a monoidal functor
- `cex-left-and-right-duals-and-double-duals-need-not-collapse` · counterexample — Left and right duals, and double duals, need not collapse
- `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism` · theorem — In a rigid category every morphism of monoidal functors is an isomorphism
- `thm-a-braided-rigid-category-has-a-drinfeld-morphism` · theorem — A braided rigid category has a Drinfeld morphism
- `def-the-categorical-trace-of-a-morphism-into-the-double-dual` · definition — The categorical trace of a morphism into the double dual
- `rem-what-is-needed-before-a-trace-can-be-written` · remark — What is needed before a trace can be written
- `def-pivotal-structure` · definition — Pivotal structure
- `def-the-dimension-of-an-object-relative-to-a-pivotal-structure` · definition — The dimension of an object relative to a pivotal structure
- `def-spherical-structure` · definition — Spherical structure
- `rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity` · remark — Pivotal and spherical structures vary by monoidal automorphisms of the identity
- `thm-in-a-spherical-category-the-left-and-right-traces-agree` · theorem — In a spherical category the left and right traces agree
- `thm-basic-properties-of-the-categorical-trace` · theorem — Basic properties of the categorical trace
- `rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses` · remark — Exact-sequence additivity of trace and its missing hypotheses
- `def-twist-and-ribbon-structure` · definition — Twist and ribbon structure
- `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type` · theorem — A twist on a braided rigid category is the same thing as a pivotal structure of Drinfeld type
- `rem-rigidity-alone-does-not-make-a-tensor-category` · remark — Rigidity alone does not make a tensor category
- `fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category` · false-statement — FALSE: a trace can be defined for an endomorphism in any monoidal category
- `fs-a-braiding-suffices-to-define-a-trace` · false-statement — FALSE: a braiding suffices to define a trace
- `fs-left-and-right-duals-of-an-object-are-isomorphic` · false-statement — FALSE: left and right duals of an object are isomorphic
- `fs-every-monoidal-category-is-rigid` · false-statement — FALSE: every monoidal category is rigid
- `fs-the-left-and-right-traces-always-agree` · false-statement — FALSE: the left and right traces always agree
- `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` · false-statement — FALSE: the dimension of an object is independent of the pivotal structure

### `duality-and-rigidity-in-monoidal-categories-examples` — Duality and Rigidity in Monoidal Categories — Examples (7 item(s))

- `ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual` · example — The dual of a finite-dimensional vector space as a categorical dual
- `ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces` · example — The zig-zag identities in finite-dimensional vector spaces
- `ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace` · example — The categorical trace of a linear endomorphism is its matrix trace
- `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` · example — The dimension of a vector space is its linear dimension
- `cex-an-infinite-dimensional-vector-space-has-no-dual-object` · counterexample — An infinite-dimensional vector space has no dual object
- `ex-an-adjunction-read-as-a-duality-of-endofunctors` · example — An adjunction read as a duality of endofunctors
- `ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual` · example — A symmetric monoidal category in which every object is self-dual

## Your seams

Another group's pages depend on yours:

- `absolute-values-completions-and-p-adic-numbers` (group f) requires your `pro-p-groups-and-the-p-adic-integers`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-infinite-dimensional-vector-space-has-no-dual-object` | `duality-and-rigidity-in-monoidal-categories-examples` | gpt-5.6-terra | `3f6a327c143cfc6340763a4fb22d7aa6fbf0174ddee77748d8562048f1217043` |
| `cex-left-and-right-duals-and-double-duals-need-not-collapse` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `a4c38a0280927ea6d290f877cb7c598d55d73e68e5098749244c637e2b6bcd17` |
| `cex-not-every-monoidal-category-is-rigid` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `03a5cc2eb0ef0db4d7ca91b357b58c3b0fd582ab2ae80898b3049b2e99cace0f` |
| `cor-finitely-generated-projective-kg-modules-are-injective-and-conversely` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `1b2b206c642c7d389d25e65014180bca392300dad603faa349865988b84310c7` |
| `cor-first-cohomology-for-a-trivial-action-is-hom` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `05d6fa87987e4b80d04c0605adbd3ed4e39477b59fb5bcc4e9512061c9320080` |
| `cor-projective-indecomposable-modules-have-trivial-vertex` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `785a8bfe3b7f6fc0c01ddcc169db63f45fcd3e4d38d8f52636352c59d3220ca6` |
| `def-jacobson-radical-of-a-finite-dimensional-algebra` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `070f8de9640dfcd4095a169f6ddba99158898bc227e5a97eb50c093461126088` |
| `def-morphism-of-group-extensions` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `6b66841484e5135119f683bdc429c99bdc13dc61d2290998844f0c173eb37fa1` |
| `def-principal-crossed-homomorphism-for-abelian-coefficients` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `923fc2c8734ed85039fee6b4b8b059e7386c99bee8537ce055a0147b1f0f3731` |
| `def-pro-p-completion-of-an-abstract-group` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `addf43cd3610eca95bd99e5ebbbd4b723d05c00b702f70e703a3d245973f8c9a` |
| `def-relative-projectivity` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `6bd8b7f9e55b3969c949a98112705c5b27b3a2a130138ad4bedfde46e58fb501` |
| `def-splitting-p-modular-system-for-a-finite-group` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `60239f2f1d6a08c671a03471d4eb31a7dc0249c7baeae6035aea926aefec058a` |
| `def-twist-and-ribbon-structure` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `201f79c0ce21531d0e1449127bfb8ff94d23cb7a5ecb40ef8935d177f47e83a9` |
| `def-vertex-and-source-of-an-indecomposable-module` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `f5f212e92cbf3ed2ac3bf4daa42d7867c9dd4e2298f3d715d54fbcf8a1210e2f` |
| `ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero` | `crossed-homomorphisms-complements-and-first-cohomology-examples` | gpt-5.6-terra | `e47ef6e66f071a1668ef2f9eb5dbb7b4778b68c8f9d2f8f030df90abd4d45069` |
| `ex-frattini-quotient-of-zp` | `pro-p-groups-and-the-p-adic-integers-examples` | gpt-5.6-terra | `03f9814d27305e6b0f04e58bde65c498a24a8a46f514e5a98d0012cbfe5cced6` |
| `ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism` | `crossed-homomorphisms-complements-and-first-cohomology-examples` | gpt-5.6-terra | `5fcb819d256d87cb62b946aacf60d411fd4ded87cf270986eb6a80ab0131edd1` |
| `ex-pro-p-completion-of-a-finite-p-group` | `pro-p-groups-and-the-p-adic-integers-examples` | gpt-5.6-terra | `a55e7269028aa8b4b87df162913635d5121b0062fd520b6c2de17e6d381509eb` |
| `ex-projective-cover-of-the-trivial-module-for-a-p-group` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `122684b5e9dafe434a4622dff424b48268a7c8d43ea9ff227da7aa93c4cdb714` |
| `ex-reducing-an-integral-lattice-for-s-three` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `6a9835deabbee61e78b9b021d1221743fa62bc48d81457629d0a01b152ea352c` |
| `ex-relative-projectivity-detected-by-higmans-criterion` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `72b23af4f08d849fa72c67e5f3cf5cf4419a07eb097f0514d1b5f6aad55d13c6` |
| `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate` | `group-extensions-complements-and-schur-zassenhaus-examples` | gpt-5.6-terra | `22692a7c557a24f41c5f967023111f8a75a998e685756f1513eef4ecee19e00a` |
| `ex-the-augmentation-ideal-and-loewy-series-for-kcp` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `353aa6158746e1d3d3dfaa69b9ebd146c3dc4e226b71c5bf291fe517f46d6493` |
| `ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two` | `group-extensions-complements-and-schur-zassenhaus-examples` | gpt-5.6-terra | `e5039fbe9ac8f3865cc847c7d853fa689474373e4c38a5f9987007f16dd4adc6` |
| `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` | `duality-and-rigidity-in-monoidal-categories-examples` | gpt-5.6-terra | `4ef0adbff8e25e5d86213c2e0ee474609d56e301657f6b6bd6db9dc9e11651d7` |
| `ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual` | `duality-and-rigidity-in-monoidal-categories-examples` | gpt-5.6-terra | `135b56855fdd74a47214bf321a597de792acf9ed0cfb9351aee6b892c86badd2` |
| `ex-the-regular-module-of-cp-in-characteristic-p` | `modular-representations-and-projective-covers-examples` | gpt-5.6-terra | `de993ac0fee119c70c6fa169285c4b976cfead401e8a91804e30eecabd4bb8c1` |
| `ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces` | `duality-and-rigidity-in-monoidal-categories-examples` | gpt-5.6-terra | `5545f10f0562dffbb715b5bc02f4cd10cfe0c77f71f7042846823029c36ce0e7` |
| `ex-topological-generation-in-zp-squared` | `pro-p-groups-and-the-p-adic-integers-examples` | gpt-5.6-terra | `d7b3edb36e892728cd02a70e6a5edcc00534bcb04db3d175d215e67d8dab1e20` |
| `fs-a-braiding-suffices-to-define-a-trace` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `fa546034cfd95588831da627a26cec4be4a3f95c16d24fbad7da809d50310926` |
| `fs-every-monoidal-category-is-rigid` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `8d2c3e8e234f69abbfba7b785bff0a6c0acc1acbd29ce6dc2a6e1727a009c748` |
| `fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `1fd9e6c2bbc0913b3c01f58840b2c37f5e048ba0040eaced552e12b63174a572` |
| `fs-every-split-group-extension-is-a-direct-product` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `044295ce7a342cc60a8cbce2c17b354c8aa187896958baa519a52e9ef28e494b` |
| `fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `b925649a8bb57f4ad5f435bcbb31dc44818c86d355d483e3b9f6ec02cd51639b` |
| `fs-first-cohomology-with-nonabelian-coefficients-is-a-group` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `012e9b0985210937293733ab4c428ac0d474558f00878a57adebc612f67cf9cb` |
| `fs-left-and-right-duals-of-an-object-are-isomorphic` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `d0a64e86d858942b3d1df6966e7083253d68ae0875871a0eb53820e2e0accb33` |
| `fs-projective-and-injective-modules-coincide-over-every-ring` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `5af4f333a6d5f44e6440d5e508ee8eb8d5acc2204e91cbc6deb6fb78ca9800f8` |
| `fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `46916938a6de0702b92b3d06402ec8554368ee60e418147eb36fc9e878e66c15` |
| `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `56691e504dfc1000bc3635ed3f2962ba93600c65bc9f1d42fff67ef2f3c83d61` |
| `fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology` | `crossed-homomorphisms-complements-and-first-cohomology` | gpt-5.6-terra | `cbde4a4f165452bea9a9a0aed1ae83795d2043b9c691175dbbab00b4b4462031` |
| `fs-zp-is-cyclic-as-an-abstract-group` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `d38f58d210a31a0de40ef86327a84add69e0474fc7fa9dcee6d67adb76f25fc2` |
| `lem-a-complement-induces-the-conjugation-action-on-the-kernel` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `9cb47c26454a3e36149fdfbc8c5b6973a18d6a498b14351c948307648b123461` |
| `lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `1ccc794570582e0d6a2820c2f8b877e00517077c9d93a04ac45233d618c9755d` |
| `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `c5b2e04fb7c71c1876f40b48d85b4051a6703501db54cb80dd1f55c100c56803` |
| `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `3ef303f6a3072c71e657d07ed338ce51ca155dad30f5dc4970881dcc32afa721` |
| `lem-normal-hall-subgroup-gives-a-coprime-extension` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `be4cfead8bddf6e3f248d2ef56bd1520ad5d06d572082081cd9af4429830893b` |
| `lem-radical-of-a-finite-length-module-is-superfluous` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `d0e379e73e9879e7feab1b4ebe9080b10a3ad280fbf3939cafa0d0301a80fb73` |
| `prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `7cfad7547e4bae6cacaaab8d480c30a99bde8bc96c8e1ddd0edb10cf1fd964fc` |
| `prop-extensions-with-complete-kernel-split-over-the-centralizer` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `26dfb7ca4202b493b497256c5a693e71215bef0f7e78b9de0f7107e5aee34719` |
| `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `516ae8ea831ac8e84fac2aecf8f181fb2d1ac1432863fb948216bc02e9016762` |
| `prop-normal-p-subgroups-act-trivially-on-simple-modules` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `d4f2d06ec07d825c02fd8f7f718fe67aeb7bbda9db8038d2b541e5e92a5384b2` |
| `prop-profinite-completion-of-z-is-the-product-of-all-zp` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `0d02017069fd4ad93d0932ea44d1b48e32baf578a27dba8bab5f079c2db17143` |
| `prop-restriction-and-induction-preserve-projectives` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `ac44920f9af5a6368074024e14469c2f4be20bd7f8fc2c577ed1db8f8f0ba906` |
| `prop-zp-is-topologically-generated-by-one` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `559c62224472f1fdf3c65fba9cb32ed9d00b5107584702351bcd2f0435beb5fa` |
| `rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `8dd2bf330568c111caf065e48acac508899b1322b551b00c8d23fcc4cb2d61d4` |
| `rem-what-is-needed-before-a-trace-can-be-written` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `4871bbec4f6e34ebbd2aa8f8794451620f67cb8c12f9fcfea38a26caa8c0872f` |
| `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `acceb9f9d8ef1e9e9134052da6cf49a3632e24dfb99817dd8e63f19dd701624b` |
| `thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `f5f55949cfc0f74801f30676c308560168737b56cc69ec86747b47743337f9f0` |
| `thm-green-vertex-source-existence-and-conjugacy` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `2e034d26eeebcf0ffd82c7bd45c52bc677da3640a6c999941f8b39abd2298743` |
| `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `991312fc37d3e9ff16bb164ec84e5560a8abba31432bb7e0217df4337ed79a60` |
| `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `9c007c07312d332d624bacda2f7cb6c8977896d48d4c1646d15ad818cd493d0a` |
| `thm-inverse-limit-topology-equals-the-p-adic-metric-topology` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `98061f75bcca21c6ca467c7670aedbff40a87c2e168860e6cedb9d352b4e5328` |
| `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `aff6896ef02b4b71b815238bac1f5e775fbc5678790a18b91475e93742aeb78b` |
| `thm-kg-is-local-iff-g-is-a-p-group` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `21fb526b5df1bf09e8cd5de85c9432b4074989170c2fb2f34f4826ebbd5480c3` |
| `thm-left-duality-is-a-contravariant-antimonoidal-functor` | `duality-and-rigidity-in-monoidal-categories` | gpt-5.6-terra | `69150912ede9d415303470fd29b89f437170e0298d018150d50cf0fa8ab4ab87` |
| `thm-module-radical-is-jacobson-radical-times-the-module` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `a3335a170b7c6fe9aa671148600b487ec8564a89faae905d97dfb8a373145435` |
| `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` | `modular-representations-and-projective-covers` | gpt-5.6-terra | `6f1d66fdab6606dfe3d5ae956dd376590514ee712ecd6d8b948bd25a0fee971d` |
| `thm-schur-zassenhaus-existence` | `group-extensions-complements-and-schur-zassenhaus` | gpt-5.6-terra | `fe09cb743bc008f23683b74a0737d1613af2eb8ca3f6afe3174446259fe53c51` |
| `thm-topological-burnside-basis-theorem` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `993803d62de6116ef46f80b2dd72aad41504a22900f11149d700fbe3cf1b339d` |
| `thm-topological-characterisation-of-pro-p-groups` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `753f20ec72be14a2ce14ec49e28a29c9f842927e7bc5a1a51d678c7b573cf690` |
| `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `fe1f9d9b763e246a0f15270598d10cf63f4b8477575200488c03d527466b44db` |
| `thm-zp-is-the-pro-p-completion-of-the-integers` | `pro-p-groups-and-the-p-adic-integers` | gpt-5.6-terra | `b1b70541896027c8bfd476db1a6e583ed2723ea6e738f8c2e601bec798a346a5` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-29`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-29-judge-adjudications.jsonl`
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
`research/frontier-29-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-29-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-29-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
