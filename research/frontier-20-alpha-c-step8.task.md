# Step 8 — group **c**, run `frontier-20`

You are the group Alpha for batches **4**, **6**, **7**: 4 A/B pair(s), 8 page(s), 145 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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
