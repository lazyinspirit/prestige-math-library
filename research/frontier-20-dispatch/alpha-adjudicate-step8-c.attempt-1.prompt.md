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
group work, `research/frontier-20-alpha-groups.json` is the assignment: it permits at
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

run: frontier-20
role: alpha-adjudicate
label: step8-c
covers: 4, 6, 7

# Step 8 — group **c**, run `frontier-20`

You are the group Alpha for batches **4**, **6**, **7**: 4 A/B pair(s), 8 page(s), 145 item(s), 73 open rejection(s) over 73 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-20-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-20-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `socles-and-the-onan-scott-landscape` | A | group-theory | 71.007 | `blocks-primitivity-and-multiple-transitivity-examples` |
| 4 | `socles-and-the-onan-scott-landscape-examples` | B | group-theory | 71.008 | `socles-and-the-onan-scott-landscape` |
| 4 | `hyperbolic-spaces-and-hyperbolic-groups` | A | group-theory | 302.005 | `geometric-actions-svarc-milnor-and-growth-examples`, `sylow-theorems-and-nilpotent-groups` |
| 4 | `hyperbolic-spaces-and-hyperbolic-groups-examples` | B | group-theory | 302.006 | `hyperbolic-spaces-and-hyperbolic-groups` |
| 6 | `prime-spectra-and-radicals` | A | commutative-algebra | 111.005 | `localisation-of-modules-and-support-examples`, `algebraic-extensions-degree-and-finite-fields` |
| 6 | `prime-spectra-and-radicals-examples` | B | commutative-algebra | 111.006 | `prime-spectra-and-radicals` |
| 7 | `the-fundamental-theorem-of-algebra` | A | abstract-algebra | 139 | `solvability-by-radicals-and-kummer-theory`, `sylow-theorems-and-nilpotent-groups`, `continuity-ivt-evt-and-uniform-continuity` |
| 7 | `the-fundamental-theorem-of-algebra-examples` | B | abstract-algebra | 140 | `the-fundamental-theorem-of-algebra` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `socles-and-the-onan-scott-landscape` — Socles and the Onan Scott Landscape (21 item(s))

- `def-minimal-normal-subgroup-and-socle` · definition — Minimal normal subgroups and the socle of a finite group
- `lem-distinct-minimal-normal-subgroups-centralize-one-another` · lemma — Distinct minimal normal subgroups centralize one another
- `lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple` · lemma — Minimal normal subgroups of finite groups are characteristically simple
- `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` · theorem — Finite characteristically simple groups are direct products of isomorphic simple groups
- `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` · proposition — The socle is characteristic and decomposes as a direct product of minimal normal subgroups
- `thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive` · theorem — Minimal normal subgroups of faithful primitive groups are transitive
- `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular` · lemma — Two distinct minimal normal subgroups of a primitive group are regular
- `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups` · corollary — A finite primitive group has at most two minimal normal subgroups
- `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type` · proposition — A unique abelian minimal normal subgroup gives affine type
- `def-almost-simple-finite-group` · definition — Almost simple finite groups
- `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types` · definition — Affine, almost simple, diagonal, product action, and twisted wreath types
- `lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses` · lemma — Product-action wreath products are primitive under the standard hypotheses
- `rem-onan-scott-eight-type-and-five-type-conventions` · remark — This page uses the coarse five-type O'Nan-Scott convention
- `thm-onan-scott-classification-of-finite-primitive-groups` · theorem — The O'Nan-Scott classification of finite primitive groups
- `rem-cfsg-refinements-of-the-onan-scott-reduction` · remark — CFSG enters later refinements of the O'Nan-Scott reduction
- `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type` · proposition — Finite 2-transitive groups have affine or almost simple socle type
- `rem-algorithmic-role-of-onan-scott` · remark — The O'Nan-Scott theorem reduces finite primitive-group questions to socle types
- `fs-the-socle-is-always-a-single-simple-group` · false-statement — FALSE: the socle is always a single simple group
- `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` · false-statement — FALSE: every primitive group has a unique minimal normal subgroup
- `fs-onan-scott-is-the-classification-of-finite-simple-groups` · false-statement — FALSE: the O'Nan-Scott theorem is the classification of finite simple groups
- `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups` · false-statement — FALSE: the O'Nan-Scott theorem requires the classification of finite simple groups

### `socles-and-the-onan-scott-landscape-examples` — Socles and the Onan Scott Landscape — Examples (7 item(s))

- `ex-affine-type-agl-one-p` · example — The natural action of AGL(1,p) is affine type
- `ex-almost-simple-type-from-an-alternating-group` · example — The natural action of A_n is almost simple type
- `ex-simple-diagonal-action` · example — A simple diagonal action
- `ex-product-action-wreath-product` · example — A primitive product-action wreath product
- `ex-two-regular-minimal-normal-subgroups` · example — A primitive group with two regular minimal normal subgroups
- `ex-socle-of-a-finite-solvable-primitive-group` · example — The socle of a finite solvable primitive group is elementary abelian and regular
- `cex-transitive-does-not-force-minimal-normal-subgroups-transitive` · counterexample — A transitive imprimitive action can have a nontransitive minimal normal subgroup

### `hyperbolic-spaces-and-hyperbolic-groups` — Hyperbolic Spaces and Hyperbolic Groups (31 item(s))

- `def-geodesic-segment-triangle-and-geodesic-metric-space` · definition — Geodesic segments, geodesic triangles, and geodesic metric spaces
- `def-delta-slim-geodesic-triangle-and-hyperbolic-space` · definition — Delta-slim triangles and hyperbolic spaces
- `prop-cayley-trees-are-zero-hyperbolic` · proposition — Cayley trees are 0-hyperbolic
- `def-gromov-product` · definition — The Gromov product based at a point
- `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` · theorem — Slim triangles, the Gromov product, and the four-point condition are equivalent up to constants
- `lem-thin-quadrilaterals-in-a-hyperbolic-space` · lemma — Hyperbolic spaces have thin geodesic quadrilaterals
- `thm-morse-stability-of-quasi-geodesics` · theorem — Morse stability of quasi-geodesics
- `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces` · theorem — Hyperbolicity is a quasi-isometry invariant of geodesic spaces
- `def-hyperbolic-group` · definition — Hyperbolic groups
- `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set` · theorem — Hyperbolicity of a finitely generated group is independent of the finite generating set
- `prop-finite-and-free-groups-are-hyperbolic` · proposition — Finite groups and free groups are hyperbolic
- `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` · proposition — Free abelian groups of rank at least two are not hyperbolic
- `thm-hyperbolic-groups-admit-finite-dehn-presentations` · theorem — Hyperbolic groups admit finite Dehn presentations
- `cor-hyperbolic-groups-have-solvable-word-problem` · corollary — Hyperbolic groups have solvable word problem
- `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` · theorem — Linear isoperimetric characterisation of hyperbolic groups
- `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups` · theorem — Finite C'(1/6) presentations define hyperbolic groups
- `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted` · theorem — Infinite-order elements of hyperbolic groups are undistorted
- `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic` · theorem — The centralizer of an infinite-order element in a hyperbolic group is virtually cyclic
- `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic` · corollary — Abelian subgroups of hyperbolic groups are virtually cyclic
- `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups` · theorem — Finite subgroups of a hyperbolic group have uniformly bounded order
- `def-elementary-and-non-elementary-hyperbolic-groups` · definition — Elementary and non-elementary hyperbolic groups
- `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup` · theorem — Non-elementary hyperbolic groups contain a rank-two free subgroup
- `def-gromov-boundary-by-asymptotic-sequences` · definition — The Gromov boundary via asymptotic sequences
- `lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences` · lemma — Asymptoticity of Gromov sequences is an equivalence relation
- `def-boundary-topology-by-gromov-products` · definition — The boundary topology defined by Gromov products
- `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant` · theorem — The boundary topology is well defined and quasi-isometry invariant
- `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup` · false-statement — FALSE: a hyperbolic group is just a group with a hyperbolic-plane subgroup
- `fs-the-same-delta-works-after-every-change-of-generating-set` · false-statement — FALSE: the same delta works after every finite change of generating set
- `fs-every-abelian-group-is-hyperbolic` · false-statement — FALSE: every abelian group is hyperbolic
- `fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics` · false-statement — FALSE: all quasi-geodesics in all metric spaces stay uniformly close to geodesics
- `fs-the-boundary-definition-needs-no-properness-or-equivalence-check` · false-statement — FALSE: the Gromov boundary definition needs no properness or equivalence check

### `hyperbolic-spaces-and-hyperbolic-groups-examples` — Hyperbolic Spaces and Hyperbolic Groups — Examples (7 item(s))

- `ex-a-tree-is-zero-hyperbolic` · example — Every tree is 0-hyperbolic
- `ex-the-hyperbolic-plane-is-hyperbolic` · example — The hyperbolic plane is hyperbolic
- `ex-free-groups-and-their-cantor-boundaries` · example — Free groups have Cantor-set boundaries
- `ex-surface-groups-as-hyperbolic-groups` · example — Closed surface groups are hyperbolic
- `ex-a-small-cancellation-hyperbolic-group` · example — A small-cancellation presentation gives a hyperbolic group
- `cex-z-squared-is-not-hyperbolic` · counterexample — Z^2 is not hyperbolic
- `cex-product-of-two-infinite-groups-need-not-be-hyperbolic` · counterexample — A product of two infinite groups need not be hyperbolic

### `prime-spectra-and-radicals` — Prime Spectra and Radicals (44 item(s))

- `def-radical-of-an-ideal` · definition — The radical of an ideal
- `lem-radical-membership-by-a-power` · lemma — Radical membership via positive powers
- `lem-radical-is-an-ideal` · lemma — The radical of an ideal is an ideal
- `lem-radical-of-an-intersection` · lemma — The radical of a finite intersection
- `lem-radical-of-a-product` · lemma — The radical of a product of ideals
- `def-nilradical-and-reduced-ring` · definition — The nilradical and reduced rings
- `lem-radical-commutes-with-quotient-correspondence` · lemma — Radicals and quotient correspondence
- `lem-radical-commutes-with-localisation` · lemma — Radicals commute with localization
- `cor-reduced-quotient-by-the-nilradical` · corollary — The reduced quotient by the nilradical
- `lem-prime-containing-a-multiplicative-set-disjoint-ideal` · lemma — A prime containing an ideal and avoiding a multiplicative set
- `cor-prime-containing-an-ideal-avoiding-an-element` · corollary — Separating an element from an ideal by a prime
- `lem-radical-intersection-proof-forward-inclusion` · lemma — Primes containing an ideal contain its radical
- `lem-radical-intersection-proof-separating-prime` · lemma — A separating prime for an element outside a radical
- `thm-radical-as-intersection-of-primes` · theorem — The radical of an ideal is the intersection of the prime ideals containing it
- `cor-nilradical-as-intersection-of-primes` · corollary — The nilradical is the intersection of all prime ideals
- `cor-ring-reduced-iff-zero-is-an-intersection-of-primes` · corollary — A ring is reduced exactly when zero is an intersection of primes
- `def-prime-spectrum-and-vanishing-sets` · definition — The prime spectrum and vanishing sets
- `def-krull-dimension-of-a-ring` · definition — Krull dimension of a nonzero ring
- `def-height-of-a-prime-ideal` · definition — The height of a prime ideal
- `lem-vanishing-set-reverses-inclusions` · lemma — Vanishing sets reverse inclusions
- `lem-vanishing-set-of-an-arbitrary-sum` · lemma — Vanishing sets of arbitrary sums
- `lem-vanishing-set-of-a-finite-product` · lemma — Vanishing sets of finite products
- `lem-vanishing-set-identities` · lemma — Vanishing-set identities
- `lem-vanishing-sets-detect-radicals` · lemma — Vanishing sets detect radicals
- `def-principal-distinguished-subset-of-spectrum` · definition — Principal distinguished subsets of the prime spectrum
- `lem-distinguished-subset-identities` · lemma — Distinguished-subset identities
- `lem-distinguished-subset-cover-detects-radical` · lemma — Distinguished-subset covers detect radicals
- `lem-spectrum-map-respects-composition-and-identities` · lemma — The spectrum map respects composition and identities
- `lem-spectrum-map-preimage-of-vanishing-set` · lemma — The spectrum map pulls back vanishing sets
- `thm-prime-spectrum-map-by-contraction` · theorem — A ring map induces a contraction map on prime spectra
- `lem-primes-of-a-quotient-are-primes-over-the-kernel` · lemma — Primes of a quotient lie over the kernel
- `thm-prime-spectrum-of-a-quotient-bijection` · theorem — Prime ideals of a quotient ring are exactly the prime ideals containing the ideal
- `lem-primes-of-a-localisation-avoid-the-multiplicative-set` · lemma — Primes of a localization avoid the denominator set
- `cor-primes-of-a-prime-local-ring` · corollary — Primes of a localization at a prime
- `cor-primes-of-a-principal-localisation` · corollary — Primes of a principal localization
- `thm-prime-spectrum-of-a-localisation-bijection` · theorem — Prime ideals of a localization are exactly the primes disjoint from the denominator set
- `cor-prime-spectrum-insensitive-to-nilpotents` · corollary — Passing to the reduced quotient does not change the prime spectrum
- `lem-minimal-prime-over-an-ideal-exists` · lemma — Minimal primes over a proper ideal exist
- `lem-noetherian-minimal-primes-induction-split` · lemma — The Noetherian minimal-prime induction split
- `thm-nilradical-of-a-noetherian-ring-is-nilpotent` · theorem — The nilradical of a Noetherian ring is nilpotent
- `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` · corollary — A radical ideal in a Noetherian ring is a finite intersection of minimal primes
- `thm-noetherian-ring-has-finitely-many-minimal-primes` · theorem — A Noetherian ring has finitely many minimal prime ideals
- `lem-height-equals-local-dimension` · lemma — Height equals local dimension
- `cor-dimension-of-a-quotient-as-chains-above-an-ideal` · corollary — Dimension of a quotient via chains above an ideal

### `prime-spectra-and-radicals-examples` — Prime Spectra and Radicals - Examples (12 item(s))

- `ex-prime-sets-of-a-field-and-the-integers` · example — The prime ideals of a field and of the integers
- `ex-prime-spectrum-set-of-a-product-ring` · example — Every prime ideal of a product ring comes from one factor
- `ex-prime-spectrum-set-of-dual-numbers` · example — Dual numbers and their reduced quotient have the same prime set
- `ex-prime-ideals-of-a-node` · example — Minimal and maximal primes of the node ring
- `ex-distinguished-subset-and-localisation-primes` · example — The distinguished subset D(x) matches the primes of the localization at x
- `ex-radical-intersection-computation` · example — Computing sqrt((x^2,xy)) from its containing primes
- `ex-radical-of-a-product-and-intersection` · example — A radical of a product and intersection computation
- `ex-separating-prime-for-a-missing-radical-element` · example — A separating prime for an element outside a radical
- `ex-spectrum-of-a-zero-ring-empty` · example — The zero ring has empty prime spectrum
- `ex-primes-in-a-prime-localisation` · example — Primes inside a localization at a prime
- `ex-noetherian-nilradical-common-exponent` · example — A common nilpotence exponent in a Noetherian quotient
- `ex-nilradical-need-not-be-nilpotent-nonnoetherian` · example — A non-Noetherian nilradical need not be nilpotent

### `the-fundamental-theorem-of-algebra` — The Fundamental Theorem of Algebra (13 item(s))

- `thm-odd-degree-real-polynomial-has-a-real-root` · theorem — Every odd-degree real polynomial has a real root
- `cor-irreducible-real-polynomial-has-degree-one-or-even-degree` · corollary — An irreducible polynomial over $\mathbb R$ has degree $1$ or an even degree
- `lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra` · lemma — To prove the fundamental theorem of algebra, it suffices to split every real polynomial over $\mathbb C$
- `lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root` · lemma — A quadratic extension in characteristic not $2$ is obtained by adjoining a square root
- `prop-algebraically-closed-splitting-and-finite-extension-criteria` · proposition — A field is algebraically closed exactly when every nonconstant polynomial splits, equivalently when it has no nontrivial finite extension
- `thm-the-complex-numbers-are-algebraically-closed` · theorem — The complex numbers are algebraically closed
- `cor-every-complex-polynomial-splits-into-linear-factors` · corollary — Every nonconstant polynomial in $\mathbb C[x]$ splits into linear factors
- `cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals` · corollary — The complex numbers form an algebraic closure of $\mathbb R$
- `cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q` · corollary — The algebraic numbers in $\mathbb C$ form an algebraic closure of $\mathbb Q$
- `lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs` · lemma — A nonreal root of a real polynomial comes with its complex conjugate
- `cor-irreducible-real-polynomials-have-degree-one-or-two` · corollary — An irreducible polynomial in $\mathbb R[x]$ has degree $1$ or $2$
- `cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors` · corollary — Every real polynomial factors into linear and irreducible quadratic factors
- `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity` · theorem — A complex polynomial of degree $n$ has exactly $n$ roots counted with multiplicity

### `the-fundamental-theorem-of-algebra-examples` — The Fundamental Theorem of Algebra: Examples and Counterexamples (10 item(s))

- `ex-x-cubed-minus-two-over-r-and-c` · example — $x^3-2$ over $\mathbb R$ and over $\mathbb C$
- `ex-x-four-plus-one-factors-into-two-real-quadratics` · example — $x^4+1$ factors over $\mathbb R$ into two irreducible quadratics
- `ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c` · example — $x^2+1$ is irreducible over $\mathbb R$ and split over $\mathbb C$
- `ex-x-fifth-minus-x-minus-one-has-a-real-root` · example — $x^5-x-1$ has a real root
- `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` · example — $x^5-6x+3$ over $\mathbb Q$ is not solvable by radicals
- `fs-every-real-polynomial-has-a-real-root` · false-statement — FALSE: every polynomial with real coefficients has a real root
- `fs-the-real-numbers-are-algebraically-closed` · false-statement — FALSE: the real numbers are algebraically closed
- `fs-every-irreducible-real-polynomial-has-degree-one` · false-statement — FALSE: every irreducible polynomial in $\mathbb R[x]$ has degree $1$
- `fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals` · false-statement — FALSE: every irreducible quintic over $\mathbb Q$ is insoluble by radicals
- `rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra` · remark — The Artin and minimum-modulus proofs of the fundamental theorem of algebra use different machinery

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
| `cor-hyperbolic-groups-have-solvable-word-problem` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `b6233f122b8ae793155b37e0a7a0faab2be3c2eaea353cebcbfdb886a6059430` |
| `cor-irreducible-real-polynomials-have-degree-one-or-two` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `1b1211f17bed7a4882ecbcc8abdacd83656309ff40778c1080207b5c6a815caa` |
| `cor-prime-spectrum-insensitive-to-nilpotents` | `prime-spectra-and-radicals` | gpt-5.6-terra | `f972fdecfb03bfe62ff7489250558ccad62da6614a15fe2e357074916801d8df` |
| `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` | `prime-spectra-and-radicals` | gpt-5.6-terra | `710ba346f01ac2f4a82386def31685cfb94cb1e3c515e9ad9c70b0ce61744684` |
| `cor-reduced-quotient-by-the-nilradical` | `prime-spectra-and-radicals` | gpt-5.6-terra | `a01faf80f140809ee3dd2d92158a865f5b5ed87af533ddc906c0371e419e01a5` |
| `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `da6aa5538f2fa8ce170d02c6696e01f7552821adce8592da9a5a40874046f7cc` |
| `def-hyperbolic-group` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `8ae649dc8e9525511464297701c5553ab3b6ae427c2c79b4556641625a85291e` |
| `def-minimal-normal-subgroup-and-socle` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `0091f3722d185b67bbf00211041296decb19800c68a3c349668d20b2f177f8a1` |
| `ex-a-tree-is-zero-hyperbolic` | `hyperbolic-spaces-and-hyperbolic-groups-examples` | gpt-5.6-terra | `6063090e6da5aaf9a5286071d9d1722d3c1edd34e52055399cce6078d245823f` |
| `ex-affine-type-agl-one-p` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `2d26e672b37119e777b77868f3ec116f99baa9756ed9c11c168489ac63eddc86` |
| `ex-almost-simple-type-from-an-alternating-group` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `45f8dce0ff7f56f54aa71f712f6d6635ae95f8550c7b3df53586d3c798f1ddfe` |
| `ex-free-groups-and-their-cantor-boundaries` | `hyperbolic-spaces-and-hyperbolic-groups-examples` | gpt-5.6-terra | `6bd6cbffdf592095c9505a2a713b818db570736b2fa70e68b3aaea4d7b92a07d` |
| `ex-nilradical-need-not-be-nilpotent-nonnoetherian` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `493f8926c3d1d0e6a56f339a61f3e24c6b74b241b28f4842aac2ed9a5620aefa` |
| `ex-noetherian-nilradical-common-exponent` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `13767cb5bdb6faee311649d8eff7e0dbc63dae905e8f95b1e35e4d607b6b2cfe` |
| `ex-prime-ideals-of-a-node` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `15ffdf75d05df9005c7c98d1a16872ec7a474620732e35a047eeecb7b72c5b07` |
| `ex-prime-sets-of-a-field-and-the-integers` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `d12e533359d8fe86862bf6523b9a3d9de592e0489c92c32c03a831fc1851b104` |
| `ex-prime-spectrum-set-of-a-product-ring` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `2571229520700ee3c7b161b2ddce9a0f3588df1f9f2b126fea7ff452dbfbb28e` |
| `ex-prime-spectrum-set-of-dual-numbers` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `5de523e4ce604acbf410ebe07fc78b7959dc73713564e59165f0f52a317ffb95` |
| `ex-product-action-wreath-product` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `5cb6eedbf8ef2a6a1cc38900cddea08260f6ecd3a64b05af044b8c94dff4ce91` |
| `ex-radical-intersection-computation` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `31c3c4b333a983de0fe5f1a83ac558eeda0d2e44e838501c51d7264e72b7add9` |
| `ex-separating-prime-for-a-missing-radical-element` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `6b953c0af0c86aa231a9c25945bf7e57a11f72a66bea4c8829dea64d53f1ba6d` |
| `ex-simple-diagonal-action` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `477241b2712d25a6334e64c2c1f5d9e697a372bd4e293e6eb7ed0bfab1ee557f` |
| `ex-socle-of-a-finite-solvable-primitive-group` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `8b7b70138c30e968b0e58ad6605de0478b5be979707c38039b214a1db332077e` |
| `ex-spectrum-of-a-zero-ring-empty` | `prime-spectra-and-radicals-examples` | gpt-5.6-terra | `c0d186044e29b1867b625dcb3b16055665cdeebc9d699f033f1e566cb5f9f5d4` |
| `ex-surface-groups-as-hyperbolic-groups` | `hyperbolic-spaces-and-hyperbolic-groups-examples` | gpt-5.6-terra | `9a43d50fee5b40f633a38675cce565cbde76f7b698b478138c9cf518e9949dcd` |
| `ex-two-regular-minimal-normal-subgroups` | `socles-and-the-onan-scott-landscape-examples` | gpt-5.6-terra | `f8f5817895a96f8aeb6c595c682a88fcdf243a3e91047973452d1fc719137843` |
| `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` | `the-fundamental-theorem-of-algebra-examples` | gpt-5.6-terra | `81b1154d737c556ad3e97f50c1bb267d989b20742af9138a1a676a06219dbbb9` |
| `ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c` | `the-fundamental-theorem-of-algebra-examples` | gpt-5.6-terra | `b6cd1c2830578ec219b77a2282ab9e9639d2f6bfefb10673974002f03ffc4f5d` |
| `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `a220579c8ed9ccb83c3ed3a0f185fb923111b8f5ce75975edf17e7af1fae5e58` |
| `fs-onan-scott-is-the-classification-of-finite-simple-groups` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `a4053a9d4e710eee6d6984d7e03923374d68e67e6ff58199aee24b89d0340835` |
| `fs-the-boundary-definition-needs-no-properness-or-equivalence-check` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `e0572067a910bb1bb2ff17a9642829cd88bd52fb2978b00c71082ebad7d3ab07` |
| `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `2904c2ce4974bbdb4896e27a9da7ffc04ea65febc245eb168ab7b8e5689b14f2` |
| `fs-the-same-delta-works-after-every-change-of-generating-set` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `1c84c5584703716d82e7361f802ef381fb062b0866a0355e502a5ba2d5213a77` |
| `fs-the-socle-is-always-a-single-simple-group` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `a36d511d895e954f4554cb53556485d584a5e986c3e0115c01bebd17aff9fb5f` |
| `lem-distinct-minimal-normal-subgroups-centralize-one-another` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `7602a915389cb05aba04584f4ae7e52fba1b726d1a98f9ec6c585daa7f7f16bc` |
| `lem-distinguished-subset-cover-detects-radical` | `prime-spectra-and-radicals` | gpt-5.6-terra | `d4906dda6653c6477425f4a656ab8377613c187f958667cabdeec8e34cbdf95d` |
| `lem-height-equals-local-dimension` | `prime-spectra-and-radicals` | gpt-5.6-terra | `de4e7714bf0934a43a02558238531a96e2a75b229cf1bc11e64fc544363abbd6` |
| `lem-minimal-prime-over-an-ideal-exists` | `prime-spectra-and-radicals` | gpt-5.6-terra | `85c2ecc45542977284e5c17e10dc1509dfecd3be5bdfee5fca43d9d521f41f48` |
| `lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `1b1831661ecda9aac90bac1d0000c84bfd9e4760a16283cb6ff63d9f563451a6` |
| `lem-prime-containing-a-multiplicative-set-disjoint-ideal` | `prime-spectra-and-radicals` | gpt-5.6-terra | `0024eb34a9842d31aaa3f131c0bbbc95a7a1cc95bfc6871872427ea13f173fac` |
| `lem-primes-of-a-quotient-are-primes-over-the-kernel` | `prime-spectra-and-radicals` | gpt-5.6-terra | `53571081063bb033c2b9483ce7efe1cfc138f517427a3665ec153519693cc4c6` |
| `lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `b81197448c2e5dd3941ffc04bfc690eca177c43ef864b90bc5b3288da4d4944f` |
| `lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `01ff89d25e07cebe3151d7264dbcf881f9208d577928ce25fbd838a0cf4efbbc` |
| `lem-radical-commutes-with-localisation` | `prime-spectra-and-radicals` | gpt-5.6-terra | `1b45dc59e57a3ba3fa319c81ed6291ccbb7375fa981884079137832e28aafc4f` |
| `lem-radical-commutes-with-quotient-correspondence` | `prime-spectra-and-radicals` | gpt-5.6-terra | `ef642640826da6f10431790c637e4a349f8d1055c715dcbe3706c271c7ccbe97` |
| `lem-radical-is-an-ideal` | `prime-spectra-and-radicals` | gpt-5.6-terra | `2874febdd7ac581c4b7fce44fd2580ec3b26d0fa6adb6995d774799b020d8060` |
| `lem-radical-of-a-product` | `prime-spectra-and-radicals` | gpt-5.6-terra | `6f24597a80a23a406ed65f60d9ed67cb8384e5bd090750f3172146e6e9f498ff` |
| `lem-radical-of-an-intersection` | `prime-spectra-and-radicals` | gpt-5.6-terra | `24a9fc52fdb59ae957e3404a30ccf5a42143601551db1713f56ead7f5ecdacd2` |
| `lem-spectrum-map-preimage-of-vanishing-set` | `prime-spectra-and-radicals` | gpt-5.6-terra | `7a2b0330d15b928c594e8c4cbd9a07b53c3f39f4d8c7712629c1c77bafda46c9` |
| `lem-spectrum-map-respects-composition-and-identities` | `prime-spectra-and-radicals` | gpt-5.6-terra | `bd54cd87bedc7cf88df7e7b5305ed9e09a06bf0d692ef8f9555e5f6784aa0aff` |
| `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `d22307c5ce4cd951b87480b929800c90e6b4164bb9cbf928c0341ec7b1a62437` |
| `prop-algebraically-closed-splitting-and-finite-extension-criteria` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `98fc402a6c5b32c8b3e9c14b8ebcdca1c3d5873a7ded69d5b2fa16939bace674` |
| `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `8ec69dda88a946d404a2043ccb9987559976f87e94db863faa530da7a845e316` |
| `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `0ee09b49d01ea9cf2b9c09d295f57e94f64dd7df8f23e83e11c808d754a7d756` |
| `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `2b51834ef80ad543b47f48f048c95471f049f43c625580701fe5d6749022053d` |
| `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `1fb2b05a9187fa6c6047d9b105f0f888295cd1fc223afc8a4d9b2a5fa884c168` |
| `rem-onan-scott-eight-type-and-five-type-conventions` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `d9384c5131b021ae0aabac278b91cf4a1fa1d584a091f3c44595868a24965c07` |
| `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `c7b9c6440c640532119e75c05198bcc28986cc3ada41d9ce5b6ee4fe2bee9efe` |
| `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `569ca725b54ef84263f096f5fd174dfb1e0d9a419070d86ea0eca823b1623917` |
| `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `81cd064096f39ba34960613d89f455d08cba442cd0c4f3e679dfb88b9b9b1dd0` |
| `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `5b23f06bfe5d689e6c8e909c675668538be268e46647eef9addcb4da742d8424` |
| `thm-hyperbolic-groups-admit-finite-dehn-presentations` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `af9c2339b7ea8fa323a0a778d0d8c08f80ef42da66e7ea342408dae0b2e460a0` |
| `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `390d7c70d5b0c0dd2d059451b09efe12e67f676b3ad0138c622543acecee98ec` |
| `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `f816d9878f449fba5454f96bfce3dc3cf7c27e585729b966d46fbc65935433b3` |
| `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `4cb9e6f1c7f85813d46d1b601da1f6bfedd9642fd98b8d223548710904c00137` |
| `thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive` | `socles-and-the-onan-scott-landscape` | gpt-5.6-terra | `2d60d993b065a4f24a4b42f1cf68911d23386c3475e407a3abb26ebddc365ea6` |
| `thm-morse-stability-of-quasi-geodesics` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `a62efc5bdedd03b2da49ae375382fe045dba61cc2896b2e752667bbc2db44d4b` |
| `thm-nilradical-of-a-noetherian-ring-is-nilpotent` | `prime-spectra-and-radicals` | gpt-5.6-terra | `57f8f7f0ee8ee4f06e802edf653039ff96f938239747b030a27ee9997a12840b` |
| `thm-noetherian-ring-has-finitely-many-minimal-primes` | `prime-spectra-and-radicals` | gpt-5.6-terra | `a9469752e9419790a4486dc0a9b34df3597006a56f83a1362db805ea2d107feb` |
| `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup` | `hyperbolic-spaces-and-hyperbolic-groups` | gpt-5.6-terra | `11d7e0d5cbd7be4656345f67e4bc5de2c2961d326cef4ff2370aa7345ac2237f` |
| `thm-odd-degree-real-polynomial-has-a-real-root` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `18d025f0fcf0fe6bd3f5ab387a6a12c51e3eed3fc4dffb2b5af9af8942f2fe36` |
| `thm-prime-spectrum-of-a-quotient-bijection` | `prime-spectra-and-radicals` | gpt-5.6-terra | `595dd311700d7217eb0934c664fa71a695e01bc9360366e511f2189c4789e153` |
| `thm-the-complex-numbers-are-algebraically-closed` | `the-fundamental-theorem-of-algebra` | gpt-5.6-terra | `155d50dcad57b2dd02fc65f4814d5067895ee5299b73c67fab1e2bfe48eea383` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-20`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-20-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-20-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-20-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-20-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
