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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-31a
role: alpha-adjudicate
label: step8-b
covers: 8, 9, 10

# Step 8 adjudication — group **b**, run `frontier-31a`

You are the group Alpha for batches **8**, **9**, **10**: 5 A/B pair(s), 10 page(s), 233 item(s), 88 open rejection(s) over 88 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `ext-and-balanced-resolutions` | A | homological-algebra | 365.051 | `delta-functors-and-universality-examples` |
| 8 | `ext-and-balanced-resolutions-examples` | B | homological-algebra | 365.052 | `ext-and-balanced-resolutions` |
| 8 | `yoneda-extensions-and-homological-dimension` | A | homological-algebra | 365.053 | `ext-and-balanced-resolutions-examples` |
| 8 | `yoneda-extensions-and-homological-dimension-examples` | B | homological-algebra | 365.054 | `yoneda-extensions-and-homological-dimension` |
| 9 | `tor-flatness-and-global-dimension` | A | homological-algebra | 365.055 | `yoneda-extensions-and-homological-dimension-examples`, `flatness-and-faithful-flatness` |
| 9 | `tor-flatness-and-global-dimension-examples` | B | homological-algebra | 365.056 | `tor-flatness-and-global-dimension` |
| 9 | `universal-coefficients-and-kunneth-theorems` | A | homological-algebra | 365.057 | `tor-flatness-and-global-dimension-examples` |
| 9 | `universal-coefficients-and-kunneth-theorems-examples` | B | homological-algebra | 365.058 | `universal-coefficients-and-kunneth-theorems` |
| 10 | `group-cohomology-as-a-derived-functor` | A | homological-algebra | 365.059 | `universal-coefficients-and-kunneth-theorems-examples`, `the-group-algebra-and-representations` |
| 10 | `group-cohomology-as-a-derived-functor-examples` | B | homological-algebra | 365.06 | `group-cohomology-as-a-derived-functor` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ext-and-balanced-resolutions` — Ext and Balanced Resolutions (35 item(s))

- `def-ext-via-an-injective-resolution-of-the-second-variable` · definition — Ext via an injective resolution of the second variable
- `def-ext-via-a-projective-resolution-of-the-first-variable` · definition — Ext via a projective resolution of the first variable
- `prop-ext-zero-is-hom-for-the-injective-construction` · proposition — The degree-zero injective construction of Ext is Hom
- `prop-ext-zero-is-hom-for-the-projective-construction` · proposition — The degree-zero projective construction of Ext is Hom
- `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Injective-resolution Ext has the stated bifunctor variance
- `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Projective-resolution Ext has the stated bifunctor variance
- `prop-positive-ext-vanishes-on-an-injective-second-variable` · proposition — Positive injective-resolution Ext vanishes on an injective second variable
- `prop-positive-ext-vanishes-on-a-projective-first-variable` · proposition — Positive projective-resolution Ext vanishes on a projective first variable
- `def-hom-double-complex-of-a-projective-and-an-injective-resolution` · definition — The Hom double complex of projective and injective resolutions
- `lem-the-two-hom-double-complex-differentials-commute-before-signing` · lemma — The two Hom double-complex differentials commute before signing
- `def-direct-sum-total-complex-on-finite-diagonals` · definition — The direct-sum total complex on finite diagonals
- `lem-acyclic-assembly-by-exact-columns` · lemma — Acyclic assembly by exact columns
- `lem-acyclic-assembly-by-exact-rows` · lemma — Acyclic assembly by exact rows
- `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact` · lemma — Hom from a projective makes injective-resolution columns exact
- `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact` · lemma — Hom into an injective makes projective-resolution rows exact
- `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic` · theorem — Projective and injective constructions of Ext are naturally isomorphic
- `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data` · lemma — The Ext balance isomorphism is independent of resolution comparison data
- `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` · proposition — The Ext balance isomorphism is natural in both variables
- `prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws` · proposition — Ext balance isomorphisms satisfy change-of-resolution cocycle laws
- `def-balanced-ext-bifunctor` · definition — The balanced Ext bifunctor
- `thm-long-exact-ext-sequence-in-the-second-variable` · theorem — The long exact Ext sequence in the second variable
- `thm-long-exact-ext-sequence-in-the-first-variable` · theorem — The long exact Ext sequence in the first variable
- `prop-the-two-ext-long-exact-sequences-agree-under-balance` · proposition — The two Ext long exact sequences agree under balance
- `thm-ext-dimension-shifting-in-the-first-variable` · theorem — Ext dimension shifting in the first variable
- `thm-ext-dimension-shifting-in-the-second-variable` · theorem — Ext dimension shifting in the second variable
- `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` · corollary — Ext can be computed from any projective resolution of the first variable
- `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` · corollary — Ext can be computed from any injective resolution of the second variable
- `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses` · proposition — Exact functors compatible with Hom transport Ext under stated adjunction hypotheses
- `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` · lemma — Ext one of Z modulo n by Z is Z modulo n
- `fs-ext-is-defined-before-choosing-or-supplying-resolutions` · false-statement — FALSE: Ext is defined before choosing or supplying resolutions
- `fs-projective-ext-and-injective-ext-are-equal-by-definition` · false-statement — FALSE: projective and injective Ext are equal by definition
- `fs-ext-is-covariant-in-both-variables` · false-statement — FALSE: Ext is covariant in both variables
- `fs-positive-ext-vanishes-whenever-either-variable-is-injective` · false-statement — FALSE: positive Ext vanishes whenever either variable is injective
- `fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals` · false-statement — FALSE: double-complex totalisation is unambiguous with infinite diagonals
- `fs-balance-of-ext-requires-the-spectral-sequence-pages` · false-statement — FALSE: balance of Ext requires spectral-sequence pages

### `ext-and-balanced-resolutions-examples` — Ext and Balanced Resolutions — Examples (7 item(s))

- `ex-ext-zero-as-hom-in-both-constructions` · example — Ext zero as Hom in both constructions
- `ex-ext-from-a-two-term-projective-resolution` · example — Ext from a two-term projective resolution
- `ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group` · example — Ext of a cyclic abelian group by an abelian group
- `ex-the-hom-double-complex-in-low-bidegrees` · example — The Hom double complex in low bidegrees
- `ex-an-ext-dimension-shift` · example — An Ext dimension shift
- `cex-positive-ext-does-not-vanish-for-an-injective-first-variable` · counterexample — Positive Ext need not vanish for an injective first variable
- `ex-naturality-of-the-balance-isomorphism` · example — Naturality of the balance isomorphism

### `yoneda-extensions-and-homological-dimension` — Yoneda Extensions and Homological Dimension (44 item(s))

- `def-extension-of-an-object-by-an-object-in-an-abelian-category` · definition — An extension of an object by an object in an abelian category
- `def-equivalence-of-extensions` · definition — Equivalence of extensions
- `prop-a-morphism-of-extensions-is-an-isomorphism` · proposition — A morphism of extensions is an isomorphism
- `prop-equivalence-of-extensions-is-an-equivalence-relation` · proposition — Equivalence of extensions is an equivalence relation
- `def-split-extension-class` · definition — The split extension class
- `def-pullback-and-pushout-of-an-extension` · definition — Pullback and pushout of an extension
- `lem-pullback-and-pushout-descend-to-extension-classes` · lemma — Pullback and pushout descend to extension classes
- `def-baer-sum-of-extension-classes` · definition — The Baer sum of extension classes
- `lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives` · lemma — The Baer sum is independent of representatives
- `thm-baer-sum-makes-extension-classes-an-abelian-group` · theorem — Baer sum makes extension classes an abelian group
- `prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject` · proposition — Extension classes are contravariant in the quotient and covariant in the subobject
- `def-class-of-an-extension-in-derived-ext-one` · definition — The derived Ext-one class of an extension
- `lem-equivalent-extensions-have-the-same-ext-class` · lemma — Equivalent extensions have the same Ext class
- `lem-every-ext-one-class-is-represented-by-an-extension` · lemma — Every Ext-one class is represented by an extension
- `lem-two-extensions-with-the-same-ext-class-are-equivalent` · lemma — Two extensions with the same Ext class are equivalent
- `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` · theorem — Yoneda Ext one is naturally isomorphic to derived Ext one
- `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` · corollary — Extension classes form a set whenever derived Ext one does
- `def-n-fold-yoneda-extension` · definition — An n-fold Yoneda extension
- `def-equivalence-of-n-fold-extensions` · definition — Equivalence of n-fold extensions
- `def-yoneda-splice-product` · definition — The Yoneda splice product
- `lem-yoneda-splicing-is-well-defined-on-equivalence-classes` · lemma — Yoneda splicing is well-defined on equivalence classes
- `thm-yoneda-product-is-associative-and-unital` · theorem — The Yoneda product is associative and unital
- `thm-higher-yoneda-ext-agrees-with-derived-ext` · theorem — Higher Yoneda Ext agrees with derived Ext
- `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` · proposition — The Yoneda product agrees with derived Ext composition
- `def-graded-ext-algebra-of-an-object` · definition — The graded Ext algebra of an object
- `def-projective-dimension-of-an-object` · definition — Projective dimension of an object
- `def-injective-dimension-of-an-object` · definition — Injective dimension of an object
- `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective` · theorem — Projective dimension at most n iff the nth syzygy is projective
- `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Projective dimension at most n iff higher Ext vanishes
- `thm-injective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Injective dimension at most n iff higher Ext vanishes
- `cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite` · corollary — Finite projective dimension is the largest nonzero Ext degree
- `def-left-and-right-global-dimension-of-a-ring` · definition — Left and right global dimension of a ring
- `def-global-dimension-of-an-abelian-category` · definition — Global dimension of an abelian category
- `thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees` · theorem — Global dimension is the supremum of nonzero Ext degrees
- `prop-global-dimension-zero-characterises-semisimple-module-categories` · proposition — Global dimension zero characterises semisimple module categories
- `prop-hereditary-rings-have-global-dimension-at-most-one` · proposition — Hereditary rings have global dimension at most one
- `lem-subgroups-of-free-abelian-groups-are-free` · lemma — Subgroups of free abelian groups are free
- `thm-the-integers-have-global-dimension-one` · theorem — The integers have global dimension one
- `fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m` · false-statement — FALSE: an extension of M by N represents Ext one of N by M
- `fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects` · false-statement — FALSE: Baer sum only takes the direct sum of middle objects
- `fs-equivalence-classes-of-extensions-automatically-form-a-set` · false-statement — FALSE: extension classes automatically form a set
- `fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category` · false-statement — FALSE: the Yoneda product is graded commutative for every abelian category
- `fs-projective-dimension-is-the-length-of-any-projective-resolution` · false-statement — FALSE: projective dimension is the length of any projective resolution
- `fs-left-and-right-global-dimension-are-equal-by-definition` · false-statement — FALSE: left and right global dimensions are equal by definition

### `yoneda-extensions-and-homological-dimension-examples` — Yoneda Extensions and Homological Dimension — Examples (8 item(s))

- `ex-the-split-extension-as-the-zero-baer-class` · example — The split extension as the zero Baer class
- `ex-baer-sum-of-two-extensions-of-cyclic-groups` · example — Baer sum of two extensions of cyclic groups
- `ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes` · example — Ext one of Z modulo n by an abelian group as extension classes
- `ex-splicing-two-short-exact-sequences` · example — Splicing two short exact sequences
- `ex-a-noncommutative-yoneda-product` · example — A noncommutative Yoneda product
- `ex-projective-dimension-of-a-cyclic-abelian-group` · example — Projective dimension of a cyclic abelian group
- `ex-global-dimension-of-a-field-and-of-the-integers` · example — Global dimension of a field and of the integers
- `cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms` · counterexample — Equivalent higher extensions need not have one middle-term isomorphism

### `tor-flatness-and-global-dimension` — Tor Flatness and Global Dimension (41 item(s))

- `def-tensor-product-total-complex-of-chain-complexes` · definition — The tensor product of a right and a left chain complex is totalized on finite diagonals with the Koszul differential
- `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero` · lemma — The tensor-total differential is balanced, well defined, and squares to zero
- `def-tor-by-resolving-the-left-module` · definition — Tor from a projective resolution of the left module
- `def-tor-by-resolving-the-right-module` · definition — Tor from a projective resolution of the right module
- `prop-tor-zero-is-the-tensor-product-in-either-construction` · proposition — Degree-zero Tor is the tensor product in either construction
- `prop-each-tor-construction-is-covariant-in-both-variables` · proposition — Each resolution-defined Tor construction is covariant in both variables
- `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective` · proposition — Positive Tor vanishes when the resolved variable is projective
- `def-tensor-double-complex-of-two-projective-resolutions` · definition — The first-quadrant tensor double complex of two projective resolutions
- `def-left-and-right-flat-modules-over-an-arbitrary-ring` · definition — Left and right flat modules over an arbitrary ring
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` · lemma — Projective left and right modules are flat over an arbitrary ring
- `rem-projective-modules-are-flat-is-supplied-by-mod-three` · remark — The earlier flatness page is the commutative specialization; this page records the arbitrary-handed version used in balance
- `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented rows of the tensor double complex are exact
- `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented columns of the tensor double complex are exact
- `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` · theorem — The left and right projective constructions of Tor are naturally isomorphic
- `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` · proposition — The Tor balance isomorphism is natural and coherent under a change of resolutions
- `def-balanced-tor-bifunctor` · definition — The balanced Tor bifunctor
- `thm-long-exact-tor-sequence-in-the-left-module-variable` · theorem — The long exact Tor sequence in the left-module variable
- `thm-long-exact-tor-sequence-in-the-right-module-variable` · theorem — The long exact Tor sequence in the right-module variable
- `prop-tor-dimension-shifting` · proposition — Tor admits dimension shifting in either variable
- `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` · theorem — A left module is flat exactly when Tor one against every right module vanishes
- `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` · theorem — A right module is flat exactly when Tor one against every left module vanishes
- `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes` · corollary — The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence
- `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` · theorem — Tor one of a cyclic abelian group detects n-torsion
- `thm-tor-of-two-cyclic-abelian-groups` · theorem — Tor one of two cyclic abelian groups is cyclic of gcd order
- `thm-higher-tor-over-the-integers-vanishes` · theorem — Higher Tor over the integers vanishes
- `prop-torsion-free-abelian-groups-are-flat` · proposition — Torsion-free abelian groups are flat
- `thm-over-a-pid-flat-is-equivalent-to-torsion-free` · theorem — Over a principal ideal domain flatness is equivalent to torsion-freeness
- `thm-tor-symmetry-over-a-commutative-ring` · theorem — Tor is symmetric over a commutative ring
- `def-flat-dimension-of-a-module` · definition — The flat dimension of a module
- `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` · theorem — Flat dimension at most n is equivalent to the prescribed higher Tor vanishing
- `def-left-and-right-weak-global-dimension` · definition — Left and right weak global dimension
- `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` · proposition — Weak global dimension is at most the corresponding global dimension
- `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` · theorem — Weak global dimension is Tor-detected and left-right symmetric
- `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` · proposition — Semisimple rings have vanishing positive Tor and Ext
- `prop-the-integers-have-weak-and-global-dimension-one` · proposition — The integers have weak and global dimension one
- `fs-tor-takes-two-left-modules-over-an-arbitrary-ring` · false-statement — Tor does not take two left modules over an arbitrary ring without extra bimodule structure
- `fs-the-two-tor-constructions-are-equal-by-definition` · false-statement — The two resolution constructions of Tor are not equal by definition
- `fs-flat-modules-have-projective-dimension-zero` · false-statement — Flat modules need not have projective dimension zero
- `fs-tor-one-vanishes-only-when-one-module-is-projective` · false-statement — Vanishing Tor one does not require a projective factor
- `fs-tor-is-symmetric-over-every-noncommutative-ring` · false-statement — Tor is not symmetric as a typed expression over every noncommutative ring
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` · false-statement — Tor one of R modulo I and M is not always the I-torsion submodule of M

### `tor-flatness-and-global-dimension-examples` — Tor Flatness and Global Dimension — Examples (8 item(s))

- `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution` · example — Tor of two cyclic groups from a two-term resolution
- `ex-tor-detects-n-torsion` · example — Tor detects n-torsion
- `ex-a-flat-nonprojective-module` · example — A flat nonprojective module
- `ex-localization-is-flat-and-has-vanishing-positive-tor` · example — Localization is flat and has vanishing positive Tor
- `ex-the-tensor-double-complex-in-low-degrees` · example — The tensor double complex in low degrees
- `ex-tor-symmetry-over-a-commutative-ring` · example — Tor symmetry over a commutative ring
- `cex-a-noncommutative-handedness-error-in-tor` · counterexample — A noncommutative handedness error in Tor
- `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` · example — Weak and global dimension for a field and the integers

### `universal-coefficients-and-kunneth-theorems` — Universal Coefficients and Kunneth Theorems (32 item(s))

- `def-cochain-complex-hom-from-a-chain-complex` · definition — The Hom cochain complex of a chain complex
- `lem-the-hom-cochain-differential-squares-to-zero` · lemma — The Hom cochain differential squares to zero
- `def-chain-complex-with-coefficients-by-tensoring` · definition — A chain complex with coefficients obtained by tensoring
- `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid` · lemma — The cycle-boundary short exact sequences for a free complex over a PID
- `thm-submodules-of-free-modules-over-a-pid-are-free` · theorem — A submodule of an arbitrary-rank free module over a PID is free
- `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` · lemma — Boundaries and cycles in a free complex over a PID are free
- `lem-the-universal-coefficient-edge-map-for-homology-is-well-defined` · lemma — The homological universal-coefficient edge map is well defined
- `lem-the-universal-coefficient-tor-obstruction-map-for-homology` · lemma — The homological universal-coefficient Tor obstruction map
- `thm-universal-coefficient-theorem-for-homology-over-a-pid` · theorem — The universal coefficient theorem for homology over a PID
- `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The homology universal-coefficient sequence splits nonnaturally
- `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally` · counterexample — A universal-coefficient splitting cannot in general be chosen naturally
- `def-evaluation-map-from-cohomology-to-hom-of-homology` · definition — The evaluation map from cohomology to Hom of homology
- `lem-the-cohomology-universal-coefficient-extension-map` · lemma — The cohomological universal-coefficient extension map
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` · theorem — The universal coefficient theorem for cohomology over a PID
- `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The cohomology universal-coefficient sequence splits nonnaturally
- `cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology` · corollary — Cohomology with a divisible abelian coefficient group is Hom of homology
- `prop-modules-over-a-field-are-projective-flat-and-injective` · proposition — Modules over a field are projective, flat, and injective
- `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` · corollary — Cohomology over a field is dual to homology for finite-dimensional complexes
- `def-homology-cross-product-for-tensor-complexes` · definition — The homology cross product for tensor complexes
- `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` · lemma — The Kunneth cross-product map is well defined and natural
- `lem-the-kunneth-tor-map` · lemma — The Kunneth Tor map
- `thm-kunneth-theorem-for-free-complexes-over-a-pid` · theorem — The Kunneth theorem for free complexes over a PID
- `thm-the-kunneth-sequence-splits-nonnaturally` · theorem — The Kunneth sequence splits nonnaturally
- `cor-kunneth-over-a-field` · corollary — Kunneth over a field
- `cor-kunneth-when-one-homology-family-is-flat` · corollary — Kunneth when one homology family is flat
- `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` · proposition — Euler characteristic is multiplicative under the finite Kunneth hypotheses
- `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map` · proposition — The Kunneth cross product is graded commutative under the twist map
- `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` · false-statement — The universal coefficient theorem does not always give a natural direct-sum decomposition
- `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term` · false-statement — The homological and cohomological UCT correction terms are not reversed
- `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism` · false-statement — Kunneth over a PID is not always a tensor-product isomorphism
- `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement` · false-statement — Freeness of chain groups cannot simply be dropped from the classical Kunneth statement
- `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting` · false-statement — The Kunneth short exact sequence has no generally canonical splitting

### `universal-coefficients-and-kunneth-theorems-examples` — Universal Coefficients and Kunneth Theorems — Examples (7 item(s))

- `ex-uct-homology-with-z-mod-m-coefficients` · example — Universal-coefficient homology with Z modulo m coefficients
- `ex-uct-cohomology-of-a-two-term-free-complex` · example — Universal-coefficient cohomology of a two-term free complex
- `ex-a-nonzero-tor-correction-in-universal-coefficients` · example — A nonzero Tor correction in universal coefficients
- `ex-kunneth-for-two-cyclic-two-term-complexes` · example — Kunneth for two cyclic two-term complexes
- `ex-kunneth-over-a-field` · example — Kunneth over a field
- `cex-a-nonnatural-choice-of-uct-splitting` · counterexample — A nonnatural choice of universal-coefficient splitting
- `ex-euler-characteristic-of-a-tensor-product-complex` · example — Euler characteristic of a tensor-product complex

### `group-cohomology-as-a-derived-functor` — Group Cohomology as a Derived Functor (42 item(s))

- `def-integral-group-ring-module-and-trivial-module-convention` · definition — Integral group-module and trivial-module convention
- `def-invariants-functor-of-a-group-module` · definition — The invariants functor of a group module
- `thm-invariants-are-hom-from-the-trivial-group-ring-module` · theorem — Invariants are Hom from the trivial group-ring module
- `prop-the-invariants-functor-is-left-exact` · proposition — The invariants functor is left exact
- `def-group-cohomology-as-a-derived-functor` · definition — Group cohomology as the right derived invariants functor
- `def-coinvariants-functor-of-a-group-module` · definition — The coinvariants functor of a group module
- `prop-the-coinvariants-functor-is-right-exact` · proposition — The coinvariants functor is right exact
- `def-group-homology-as-a-derived-functor` · definition — Group homology as the left derived coinvariants functor
- `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` · proposition — Degree-zero group cohomology and homology are invariants and coinvariants
- `thm-long-exact-sequence-in-group-cohomology` · theorem — Long exact sequence in group cohomology
- `thm-long-exact-sequence-in-group-homology` · theorem — Long exact sequence in group homology
- `def-unnormalized-homogeneous-bar-resolution` · definition — Unnormalized homogeneous bar resolution
- `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` · lemma — The bar differential is group equivariant and squares to zero
- `def-bar-augmentation` · definition — Bar augmentation
- `lem-the-augmented-bar-complex-is-exact` · lemma — The augmented bar complex is exact
- `thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module` · theorem — The bar complex is a free resolution of the trivial module
- `def-inhomogeneous-group-cochains` · definition — Inhomogeneous group cochains
- `lem-the-inhomogeneous-group-cochain-differential-squares-to-zero` · lemma — The inhomogeneous group-cochain differential squares to zero
- `thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes` · theorem — Homogeneous and inhomogeneous group cochains are isomorphic complexes
- `thm-the-bar-cochain-complex-computes-derived-group-cohomology` · theorem — The bar cochain complex computes derived group cohomology
- `def-normalized-bar-resolution` · definition — Normalized bar resolution
- `lem-degenerate-bar-chains-form-a-contractible-subcomplex` · lemma — Degenerate bar chains form a contractible subcomplex
- `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent` · theorem — Normalized and unnormalized bar complexes are chain-homotopy equivalent
- `cor-normalized-cochains-compute-group-cohomology` · corollary — Normalized cochains compute group cohomology
- `def-restriction-induction-and-coinduction-for-group-modules` · definition — Restriction, induction, and coinduction for group modules
- `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` · theorem — Induction is left adjoint and coinduction right adjoint to restriction
- `lem-the-group-ring-is-free-over-a-subgroup-ring` · lemma — The group ring is free over a subgroup ring
- `thm-shapiro-lemma-for-group-cohomology` · theorem — Shapiro lemma for group cohomology
- `thm-shapiro-lemma-for-group-homology` · theorem — Shapiro lemma for group homology
- `def-cohomological-dimension-of-a-group` · definition — Cohomological dimension of a group
- `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` · theorem — Group cohomological dimension is detected by cohomology vanishing
- `def-restriction-and-corestriction-on-group-cohomology` · definition — Restriction and corestriction on group cohomology
- `lem-corestriction-is-independent-of-the-coset-representatives` · lemma — Corestriction is independent of the coset representatives
- `thm-restriction-corestriction-composite-is-multiplication-by-the-index` · theorem — Restriction--corestriction composite is multiplication by the index
- `lem-positive-group-cohomology-of-the-trivial-group-vanishes` · lemma — Positive group cohomology of the trivial group vanishes
- `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` · proposition — Finite groups have torsion annihilation in positive cohomology
- `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free` · theorem — Groups of finite integral cohomological dimension are torsion free
- `fs-group-cohomology-is-the-derived-functor-of-coinvariants` · false-statement — FALSE: group cohomology is the derived functor of coinvariants
- `fs-the-bar-contracting-homotopy-is-group-equivariant` · false-statement — FALSE: the bar contracting homotopy is group equivariant
- `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` · false-statement — FALSE: H^1 is defined here as crossed homomorphisms modulo principal ones
- `fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions` · false-statement — FALSE: H^2 is defined here as equivalence classes of group extensions
- `fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction` · false-statement — FALSE: Shapiro lemma needs no distinction between induction and coinduction

### `group-cohomology-as-a-derived-functor-examples` — Group Cohomology as a Derived Functor — Examples (9 item(s))

- `ex-group-cohomology-of-the-trivial-group` · example — Group cohomology of the trivial group
- `ex-degree-zero-invariants-and-coinvariants` · example — Degree-zero invariants and coinvariants
- `ex-the-first-three-bar-differentials` · example — The first three bar differentials
- `ex-normalizing-an-inhomogeneous-cochain` · example — Normalizing an inhomogeneous cochain
- `ex-a-periodic-resolution-for-a-finite-cyclic-group` · example — A periodic resolution for a finite cyclic group
- `ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution` · example — Cohomology of a finite cyclic group from the periodic resolution
- `ex-shapiro-lemma-for-the-trivial-subgroup` · example — Shapiro lemma for the trivial subgroup
- `cex-the-underlying-bar-contraction-is-not-equivariant` · counterexample — The underlying bar contraction is not equivariant
- `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group` · example — Cohomological dimension of the trivial and infinite cyclic groups

## Your seams

Another group's pages depend on yours:

- `schur-multipliers-and-universal-central-extensions` (group a) requires your `group-cohomology-as-a-derived-functor-examples`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-eedd76f6e3fe0a8936542f98 · `def-evaluation-map-from-cohomology-to-hom-of-homology`** (from group b, would-be-fatal) — Its sole Definition says only that it introduces the standard construction under hypotheses stated below; it gives neither source, target, nor formula. The later cohomological UCT theorem invokes this evaluation map, so the definition is not a mathematical definition as written.
- **s8a-c05dbe583155ecd391aa8052 · `thm-the-integers-have-global-dimension-one`** (from group b, would-be-fatal) — The statement and Given omit the Axiom of Choice, but proof step 1.1 invokes lem-subgroups-of-free-abelian-groups-are-free, whose statement explicitly assumes Choice, to make a free presentation into a length-one projective resolution. The cited hypothesis is silently dropped.
- **s8a-de638321040ad5d9ffdb051f · `prop-modules-over-a-field-are-projective-flat-and-injective`** (from group b, would-be-fatal) — The statement says every module over a field is free, while the proof assumes a basis. Its direct dependency cor-every-vector-space-has-a-basis explicitly assumes the Axiom of Choice; neither the statement nor Given carries that assumption.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-noncommutative-handedness-error-in-tor` | `tor-flatness-and-global-dimension-examples` | gpt-5.6-terra | `bd2a7d16364969580fcee70e3cc0af11a9c17f6209ce1ad4c6ca0ac59cda1d13` |
| `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `78a2ffb1f8623ba884d1eb85a62cd62172c4ab633762dadbae920e4ed4a6d22c` |
| `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `c997b2e4093801ec5d0f4ff3d0ec2f225c24813ac4906578e478c83a8c90f0e1` |
| `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `c7ed91242de23ba1b243252a26b7735e3daaff275b0545cc43919b6c736bc8ba` |
| `def-balanced-ext-bifunctor` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `50bb827b8c64527d6d6ccbd67a7b10788de66d3914c6c4f12f930b0d12ad3d16` |
| `def-cochain-complex-hom-from-a-chain-complex` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `513a5bc51ddbc8c0925956b5140b365aed463f5b98d09474d782410ff74d80d6` |
| `def-coinvariants-functor-of-a-group-module` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `fb14627f0cb979ca36b2eced480978d7c5a47103baeef288dc19c98e0051e964` |
| `def-evaluation-map-from-cohomology-to-hom-of-homology` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `6fe91b5840ca7846df45afc45a530e886d471ee6a36178b7d6633d858d7c40f9` |
| `def-graded-ext-algebra-of-an-object` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `458aae270b9078d0e959a0efb145fecd1f28077dd4b1744e63b259eefad972af` |
| `def-group-cohomology-as-a-derived-functor` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `13051e93b8b0bd8340c8a59bcaef5c918b30506b2121366cb5caedfc5bfe3881` |
| `def-group-homology-as-a-derived-functor` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `1e212304212dff58045ad5dfb29204c1338285eccaa289f8edfb4a9a60f0732b` |
| `def-homology-cross-product-for-tensor-complexes` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `e4c31e7908c99e09dc76e8f41f23f103d8ae146cf1fd92a2e21c22a4646944b5` |
| `def-inhomogeneous-group-cochains` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `037610eb1518a47d3c021bf6f3180c0c1ca60ad38d8004e96de81fdd4a843374` |
| `def-normalized-bar-resolution` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `37a0f5a355cd59442e91b9223d4f96459505ba23aba65911a8856be9eff7ed2e` |
| `def-restriction-and-corestriction-on-group-cohomology` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `a3aa076c5fd2fe968b514b55f3458261eaee13dbcb4a100315f820c9470289cf` |
| `def-tor-by-resolving-the-right-module` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `fdd04456e078fb9ee500940ada249845a3c2e04470f2233d0e7ddca0a9a1130c` |
| `def-unnormalized-homogeneous-bar-resolution` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `0b0f8765debee61d394aa66f71ce7f8d83cac3e0cf2b852f027034538dfa918a` |
| `ex-a-noncommutative-yoneda-product` | `yoneda-extensions-and-homological-dimension-examples` | gpt-5.6-terra | `8a5b47ce4efbfc82ead818ddc7267728f665c9a31e7db7260c50145adb292ca4` |
| `ex-baer-sum-of-two-extensions-of-cyclic-groups` | `yoneda-extensions-and-homological-dimension-examples` | gpt-5.6-terra | `7705fdd2a5fd8fc7aa20fdbcf63fb61e4d97369da2c16f078fbb19fce152e28f` |
| `ex-global-dimension-of-a-field-and-of-the-integers` | `yoneda-extensions-and-homological-dimension-examples` | gpt-5.6-terra | `31209806bb48101a3ad90618be3a9bb3de40c57a068242a969ab17376b47746d` |
| `ex-localization-is-flat-and-has-vanishing-positive-tor` | `tor-flatness-and-global-dimension-examples` | gpt-5.6-terra | `633429e43a862d38f135cc97c8f7cc69e8538947118176c39dfc3178855dac09` |
| `ex-splicing-two-short-exact-sequences` | `yoneda-extensions-and-homological-dimension-examples` | gpt-5.6-terra | `db1f643a87bda144936c642879b507d064b00214e3bff318fbd610edc75a2f27` |
| `ex-the-split-extension-as-the-zero-baer-class` | `yoneda-extensions-and-homological-dimension-examples` | gpt-5.6-terra | `cefba107d786a37a5a0e2343fa1d60896ac336bca29796f03d3cb5eed6337666` |
| `ex-the-tensor-double-complex-in-low-degrees` | `tor-flatness-and-global-dimension-examples` | gpt-5.6-terra | `87e6ce6c89dcc9ec3306adaf7aa6eadc74297878f11f92161b6dc70d41ec0f80` |
| `ex-uct-cohomology-of-a-two-term-free-complex` | `universal-coefficients-and-kunneth-theorems-examples` | gpt-5.6-terra | `3e7c02f5895e95b0e8f3c987dbe29d492eedba16638d3547e7a4fe998016523c` |
| `ex-uct-homology-with-z-mod-m-coefficients` | `universal-coefficients-and-kunneth-theorems-examples` | gpt-5.6-terra | `b0e90cc84fd5780371c55ae07e681b44826c01ce7554b3be7d5af1c4d4fb9b89` |
| `fs-equivalence-classes-of-extensions-automatically-form-a-set` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `d3969a4bddebc94b8afcf91ae030baebef5e357fa529081ab07594c719947f21` |
| `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `144633024d1ca9366834e37b827f2f05baa3347f02ba01853d604be45a8dcf02` |
| `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `66ab3eff2ed8004113961118bd473c3b24921ef082d99869eb277c8a5448870b` |
| `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `c0bcca6a705cc21d4749fe4b272178620932b2b33c1086655771f094d7b930f6` |
| `fs-the-two-tor-constructions-are-equal-by-definition` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `074dc8e6b8727c57ee7d668cd2cf5bc29328870f386e2d71b66eca0577eabeaf` |
| `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `f73c13c014214e36e87c7a043c70363e0ee4567c29e3b2ae77f66a89e25fc3e6` |
| `fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `26f18c67dc768aea338c87c102b035bf9f1b64f00d23493252509dc5af2871dd` |
| `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `c3973ab0ce4e9bb6070444540f9b75c91c8ab067d9be7d904f5705fcbe69b0cf` |
| `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `afa12aa1c281b5af5d232d90e532399a90e927e0d6f4c19116c20e553b6b8084` |
| `lem-corestriction-is-independent-of-the-coset-representatives` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `b314f65911dea87e68ab360dfebe4489a2d64f204dc7459d4948654e066bedce` |
| `lem-every-ext-one-class-is-represented-by-an-extension` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `edc1bb3483d8c8cf5361c5a50edfdefbc93ae47f7836b55d137b937a05c11c7a` |
| `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `d2922be5e4518ab58d1a9488f4acfc074b736b8c06daf99079349b14dd1dc924` |
| `lem-the-augmented-bar-complex-is-exact` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `3596918549d6584e664973841aa7337dbd0eb96c189140b749782c6850e5551f` |
| `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `fbb688eb42399d54d76db5f134d179ed6280ee5c09c8d012423ef7c7643ae4aa` |
| `lem-the-cohomology-universal-coefficient-extension-map` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `ef74616e128c1fbfcdebc633c3ac08ecffa2657bde694308e557a89394c22931` |
| `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `91a60d76bb9dc896cf4925d244e1225d6072ff17f14b3d3da9a6eddb199252de` |
| `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `f8f0646a812d143241f072e108c1a20659328debed5e341c00da26cfe182b277` |
| `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `07524859323fb237c618ad3d91c7fe516ef9adfb711a3ac76581bd5383cfac1f` |
| `lem-the-kunneth-tor-map` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `43c50b33522b7c12bf165fa7a30a96df4dfbed8a982a5e243ca54b5734df56d4` |
| `lem-two-extensions-with-the-same-ext-class-are-equivalent` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `d229a9c99944d00396ebf8cae42ff5b819740b9d750bfa8417d14ff41dc929a2` |
| `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `8cab5162b8495dda4bfe4dab431680d774a879c0781ef585b7fe81688bac3cfa` |
| `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `ae9e141d56e8b18346708f554ca5cfb6341c51dd15d665804583f7c52d4618c2` |
| `prop-ext-zero-is-hom-for-the-injective-construction` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `19e7f54b9ebc7974082b06063562df5d7c161fe049f58f385576585badc2f238` |
| `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `4269fa47f8d41d48be9e9cdbdfd66a413564d033088de8d37aae498ebba8ea5f` |
| `prop-global-dimension-zero-characterises-semisimple-module-categories` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `56e266b07070e67ad2ae2d0244d4b972bd51913744d97cba93c377e511b9acbc` |
| `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `d7b65fee0958621508687c6f5b418cbc9ae7afc23d8044451e4cbf490a5d4f33` |
| `prop-modules-over-a-field-are-projective-flat-and-injective` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `9bbbe26b606e824f6563ea8ea0d774681fd0cacb07b5b6e8a3bb6ad20ad0b451` |
| `prop-positive-ext-vanishes-on-a-projective-first-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `b27ad3148bae5e4021b1d7442aca57454e83389a115303be2855d3c2b1377e67` |
| `prop-positive-ext-vanishes-on-an-injective-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `1f682839caec3014e13d75fd85b9ddf1532a9715e15441d243a50eea8650de41` |
| `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `8e7f08287f9f4dd59b0f5a217778f859a4100facad0ddfeb8a5e203ce10f2ace` |
| `prop-the-coinvariants-functor-is-right-exact` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `f5910f13f07cea383795f36d8a5c1d65173650e0494f9524e2792e24eb089433` |
| `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `df3c04e359f9c48b9b8d6b1161cb3552856a0633f3404eda1d9034a020810c16` |
| `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `ffbc2928f9be756bf2e44badb6c188d889714159cd30893733219e00ba0a4a8d` |
| `prop-the-two-ext-long-exact-sequences-agree-under-balance` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `7282ee1e988961ca8e32033487fdd7e19bed8a72e9f52be96b58c6a6a9a64ff7` |
| `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `c0e8b14ee11d38efaa2307227ad6d949e15711a80a15ab11871f42fc0c9d433b` |
| `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `0755446b537c3b58806279ac3c470143f825c652a54509027cfb2392afb2e6d9` |
| `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `640088a75cf70f918f14885f3d0c532311d83950a5a7aaba0a5be0fae0a04992` |
| `thm-baer-sum-makes-extension-classes-an-abelian-group` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `eb55176e12b7e60ea229dc7717c9fb2accbbe8fb1ebec79f8320557936a1fcc8` |
| `thm-ext-dimension-shifting-in-the-first-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `2a55d145ad0a9e6fa7b45394de1bc519410e4c72ad5e4fd158540a203ef08049` |
| `thm-ext-dimension-shifting-in-the-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `db017d42345d98a72883455e1d41c05964b2557819e94e060935551a66cf77a4` |
| `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `5ebddb7d3fb9319fe0c192577e17906cce9e92a9f04168b97c7c6e7f431ab26c` |
| `thm-higher-yoneda-ext-agrees-with-derived-ext` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `c3cf67c71cd00bdf64fd84cca880be37184f607092683414a642fed5ff36396a` |
| `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `b67b999cc34b6baef70bf86dfaf666444c36b1e0189226a065c06b55f7a13d11` |
| `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `f55022ce903c98617058ddd7998715f7a9b50005cb9c150f6825ed6ced94deaf` |
| `thm-long-exact-ext-sequence-in-the-first-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `a4f3ebc1d933ad6e0cfb085aa177da2328721910178f442c032903f40aba47b8` |
| `thm-long-exact-ext-sequence-in-the-second-variable` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `5eb1b6a3788a2692fc1316fde73947de80d264c0f8394b41d2695c4eaa3c60a1` |
| `thm-long-exact-sequence-in-group-cohomology` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `9fcd024b841dd354d405a76a245e4d28fb863c7f5b51fc02109a02f4b71b38d3` |
| `thm-long-exact-sequence-in-group-homology` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `5e1e326c49d446ac25f808555138b89891674e9e939eea99d7ebff560f05a76c` |
| `thm-long-exact-tor-sequence-in-the-left-module-variable` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `3a966e622cdd67fc8fd0e539ba158d92bb1cfb83c7822dfda2080d720f8743b0` |
| `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic` | `ext-and-balanced-resolutions` | gpt-5.6-terra | `96a5146c00ba627558c750734e266e43b97a413a895a2d7531bd23393b06171e` |
| `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `695a85a7cd1592c51067270f4ebf39ad1a4cf2eebbfc1a11f564c500ba231716` |
| `thm-restriction-corestriction-composite-is-multiplication-by-the-index` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `c01ef00138ff0ec04518d9c51422de1efef31cbf49618ed37d74f2fc92286b65` |
| `thm-the-bar-cochain-complex-computes-derived-group-cohomology` | `group-cohomology-as-a-derived-functor` | gpt-5.6-terra | `4153232d7baddc0841dea8599aea18e032309d764671ab72688d4b1740a671f3` |
| `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `15f0bb5bcf2e99f5c7ccd931ca7713e5658362c0e612b863f364d7946c229261` |
| `thm-the-integers-have-global-dimension-one` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `a892114dee887345408a959a72706cb8764b223648179d5f354e98dc4f687a8b` |
| `thm-the-kunneth-sequence-splits-nonnaturally` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `0e335cfa2356e631b47c1fbf01eff00b19b5491f632753ef99d65f7a8cd7c1a7` |
| `thm-tor-symmetry-over-a-commutative-ring` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `a7afa6d8d5be13e25d59a783ef975c4070459f31251356f3a2798273ea116103` |
| `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `50795691df279be050f28fd35a5fd216439fb5ee0e80e8ddeb7912399cc73d9f` |
| `thm-universal-coefficient-theorem-for-homology-over-a-pid` | `universal-coefficients-and-kunneth-theorems` | gpt-5.6-terra | `bce3b7b293a52c65cd100a0f96a7cfb02541b51324b38fb90c4e8eb6f627a9fd` |
| `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` | `tor-flatness-and-global-dimension` | gpt-5.6-terra | `6bd4b20a9f60d3b05b05193210ec461d4ebbc361529dc898881f006fb8cbbf5d` |
| `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `85c552628d4588eb3ff0f2ebb36ca3d50b98bef78e237cec463d7ce965419d16` |
| `thm-yoneda-product-is-associative-and-unital` | `yoneda-extensions-and-homological-dimension` | gpt-5.6-terra | `05b6d27e9826ce967cbb591356706a3090e005185f5aa1c33040224e7013cbf3` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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
