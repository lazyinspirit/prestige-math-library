# Step 8 adjudication — group **a**, run `frontier-30`

You are the group Alpha for batches **1**, **16**, **17**: 4 A/B pair(s), 8 page(s), 129 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `brauer-characters-and-decomposition-matrices` | A | group-theory | 150.003 | `modular-representations-and-projective-covers-examples` |
| 1 | `brauer-characters-and-decomposition-matrices-examples` | B | group-theory | 150.004 | `brauer-characters-and-decomposition-matrices` |
| 1 | `second-cohomology-and-abelian-kernel-extensions` | A | group-theory | 365.073 | `crossed-homomorphisms-complements-and-first-cohomology-examples` |
| 1 | `second-cohomology-and-abelian-kernel-extensions-examples` | B | group-theory | 365.074 | `second-cohomology-and-abelian-kernel-extensions` |
| 16 | `harish-chandra-isomorphism-casimir-and-central-characters` | A | lie-theory | 510.001 | `real-forms-and-real-semisimple-lie-algebras-examples` |
| 16 | `harish-chandra-isomorphism-casimir-and-central-characters-examples` | B | lie-theory | 510.002 | `harish-chandra-isomorphism-casimir-and-central-characters` |
| 17 | `artin-induction-and-rational-characters` | A | representation-theory | 510.031 | `the-weyl-kac-character-formula-examples`, `the-group-algebra-and-representations`, `maschkes-theorem-and-complete-reducibility`, `characters-and-the-orthogonality-relations`, `induced-representations-and-frobenius-reciprocity` |
| 17 | `artin-induction-and-rational-characters-examples` | B | representation-theory | 510.032 | `artin-induction-and-rational-characters` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `brauer-characters-and-decomposition-matrices` — Brauer Characters and Decomposition Matrices (27 item(s))

- `def-p-regular-and-p-singular-elements` · definition — p-regular and p-singular elements
- `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers` · lemma — p-regularity is preserved by conjugacy and by powers coprime to the element order
- `def-teichmuller-lift-in-a-splitting-p-modular-system` · definition — Teichmuller lift in a splitting p-modular system
- `lem-teichmuller-lift-is-multiplicative-and-unique` · lemma — The Teichmuller lift is multiplicative and unique
- `def-brauer-character-of-a-finite-dimensional-kg-module` · definition — Brauer character of a finite-dimensional kG-module
- `lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation` · lemma — The Brauer character is independent of basis and splitting-field realization
- `prop-brauer-characters-are-class-functions-on-p-regular-elements` · proposition — Brauer characters are class functions on p-regular elements
- `thm-brauer-character-is-additive-on-short-exact-sequences` · theorem — Brauer characters are additive on short exact sequences
- `thm-brauer-nesbitt-module-determination` · theorem — Brauer-Nesbitt determines semisimplifications
- `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions` · theorem — Irreducible Brauer characters form a basis of the p-regular class functions
- `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes` · corollary — The number of simple kG-modules equals the number of p-regular conjugacy classes
- `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` · definition — Decomposition map from ordinary to modular Grothendieck groups
- `thm-decomposition-map-is-independent-of-the-stable-lattice` · theorem — The decomposition map is independent of the stable lattice
- `def-decomposition-numbers-and-decomposition-matrix` · definition — Decomposition numbers and the decomposition matrix
- `lem-decomposition-numbers-are-nonnegative-integers` · lemma — Decomposition numbers are nonnegative integers
- `def-projective-indecomposable-characters-and-cartan-invariants` · definition — Projective indecomposable characters and Cartan invariants
- `thm-brauer-reciprocity` · theorem — Brauer reciprocity
- `thm-cartan-matrix-is-d-transpose-d` · theorem — The Cartan matrix is D^T D
- `def-p-blocks-by-primitive-central-idempotents` · definition — p-blocks from primitive central idempotents
- `thm-blocks-partition-ordinary-and-brauer-irreducible-characters` · theorem — Blocks partition the ordinary and Brauer irreducible characters
- `prop-decomposition-matrix-is-block-diagonal-after-block-ordering` · proposition — After block ordering, the decomposition matrix is block diagonal
- `rem-defect-groups-and-brauer-main-theorems` · remark — Defect groups and Brauer's main theorems lie beyond this page
- `fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace` · false-statement — FALSE: a Brauer character is defined on all elements by the usual trace
- `fs-modular-representations-are-determined-by-ordinary-characters` · false-statement — FALSE: modular representations are determined by ordinary characters
- `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible` · false-statement — FALSE: reduction mod p of an ordinary irreducible is always irreducible
- `fs-the-cartan-matrix-equals-the-decomposition-matrix` · false-statement — FALSE: the Cartan matrix equals the decomposition matrix
- `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character` · false-statement — FALSE: every block has one ordinary and one Brauer irreducible character

### `brauer-characters-and-decomposition-matrices-examples` — Brauer Characters and Decomposition Matrices — Examples (6 item(s))

- `ex-brauer-characters-of-a-p-group` · example — Brauer characters of a p-group
- `ex-p-regular-classes-of-s-three` · example — The p-regular classes of S_3
- `ex-decomposition-matrix-of-s-three-in-characteristic-two` · example — The decomposition matrix of S_3 in characteristic 2
- `ex-cartan-matrix-from-d-transpose-d` · example — Computing a Cartan matrix from D^T D
- `ex-a-block-with-one-ordinary-and-one-brauer-character` · example — A block with one ordinary and one Brauer irreducible character
- `cex-ordinary-trace-on-a-p-singular-unipotent-element` · counterexample — An ordinary trace on a p-singular unipotent element is not a Brauer-character value

### `second-cohomology-and-abelian-kernel-extensions` — Second Cohomology and Abelian Kernel Extensions (25 item(s))

- `def-normalized-two-cocycle-and-two-coboundary` · definition — Normalized two-cocycles and two-coboundaries
- `lem-normalized-two-cocycles-and-coboundaries-form-groups` · lemma — Normalized two-cocycles and two-coboundaries form groups
- `def-second-cohomology-by-factor-sets` · definition — Second cohomology by factor sets
- `thm-factor-set-model-agrees-with-derived-second-group-cohomology` · theorem — The factor-set model agrees with the inhomogeneous cochain model in degree two
- `def-extension-inducing-a-prescribed-abelian-kernel-action` · definition — Extensions inducing a prescribed abelian-kernel action
- `def-normalized-set-theoretic-section-and-factor-set` · definition — Normalized set-theoretic section and factor set
- `lem-factor-set-of-a-section-is-a-normalized-two-cocycle` · lemma — The factor set of a section is a normalized two-cocycle
- `lem-changing-the-section-changes-the-factor-set-by-a-coboundary` · lemma — Changing the section changes the factor set by a coboundary
- `cor-an-extension-determines-a-well-defined-h-two-class` · corollary — An extension determines a well-defined H^2 class
- `def-twisted-product-extension-from-a-two-cocycle` · definition — Twisted-product extension from a two-cocycle
- `lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle` · lemma — The twisted product is a group exactly when the factor set is a two-cocycle
- `lem-cohomologous-two-cocycles-give-equivalent-extensions` · lemma — Cohomologous two-cocycles give equivalent extensions
- `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action` · theorem — H^2 classifies extensions with fixed abelian kernel action
- `cor-zero-h-two-class-is-equivalent-to-splitting` · corollary — The zero H^2 class is equivalent to a split extension
- `def-baer-sum-of-abelian-kernel-extensions` · definition — Baer sum of abelian-kernel extensions
- `lem-baer-sum-is-independent-of-extension-representatives` · lemma — Baer sum is independent of extension representatives
- `thm-baer-sum-agrees-with-addition-in-h-two` · theorem — Baer sum agrees with addition in H^2
- `cor-central-extensions-are-classified-by-h-two-with-trivial-action` · corollary — Central extensions are classified by H^2 with trivial action
- `thm-five-term-exact-sequence-as-extension-and-transgression-data` · theorem — Extension-theoretic interpretation of the standard five-term exact sequence
- `rem-nonabelian-extension-obstruction-in-h-three` · remark — Nonabelian extension obstructions live in H^3
- `fs-every-function-g-times-g-to-m-is-a-factor-set` · false-statement — FALSE: every function G x G -> M is a factor set
- `fs-the-factor-set-is-independent-of-the-section-as-a-function` · false-statement — FALSE: the factor set is independent of the chosen section as a function
- `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` · false-statement — FALSE: H^2 classifies extensions with arbitrary nonabelian kernel
- `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic` · false-statement — FALSE: equivalent extensions only require the middle groups to be isomorphic
- `fs-the-zero-h-two-class-corresponds-to-the-direct-product-only` · false-statement — FALSE: the zero H^2 class corresponds to the direct product only

### `second-cohomology-and-abelian-kernel-extensions-examples` — Second Cohomology and Abelian Kernel Extensions — Examples (7 item(s))

- `ex-the-cp-squared-extension-as-a-nonzero-two-cocycle` · example — The C_p^2 extension as a nonzero two-cocycle
- `ex-the-split-extension-as-the-zero-cocycle` · example — The split extension arises from the zero cocycle
- `ex-central-extensions-of-a-cyclic-group` · example — Central extensions of a cyclic group
- `ex-the-quaternion-and-dihedral-central-extension-classes` · example — Quaternion and dihedral central extension classes
- `ex-changing-a-section-by-a-one-cochain` · example — Changing a section by a one-cochain
- `ex-baer-sum-of-two-factor-sets` · example — Baer sum of two factor sets
- `cex-same-middle-group-with-inequivalent-extension-maps` · counterexample — The same middle group can support inequivalent extension structures

### `harish-chandra-isomorphism-casimir-and-central-characters` — Harish Chandra Isomorphism Casimir and Central Characters (45 item(s))

- `def-universal-enveloping-algebra-as-a-tensor-quotient` · definition — The universal enveloping algebra as a tensor quotient
- `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra` · proposition — Lie algebra actions extend to unital actions of the enveloping algebra
- `def-killing-form-of-a-semisimple-lie-algebra` · definition — The Killing form of a semisimple Lie algebra
- `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra` · proposition — The Killing form is invariant and nondegenerate on a complex semisimple Lie algebra
- `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra` · definition — The PBW filtration by tensor degree on the enveloping algebra
- `prop-associated-graded-of-the-pbw-filtration-is-commutative` · proposition — The associated graded algebra of the PBW filtration is commutative
- `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` · theorem — PBW gives an ordered monomial basis for the enveloping algebra
- `thm-root-space-decomposition-relative-to-a-cartan-subalgebra` · theorem — Root-space decomposition relative to a Cartan subalgebra
- `prop-root-space-brackets-add-their-roots` · proposition — Brackets of root spaces add their roots
- `prop-killing-form-pairs-only-opposite-root-spaces` · proposition — The Killing form pairs only opposite root spaces
- `def-killing-dual-vector-attached-to-a-root` · definition — The Killing-dual vector attached to a root
- `prop-opposite-root-spaces-bracket-to-the-killing-dual-line` · proposition — Opposite root spaces bracket to the Killing-dual line
- `thm-triangular-decomposition-from-a-chosen-positive-root-system` · theorem — Triangular decomposition from a chosen positive root system
- `def-highest-weight-vector-and-cyclic-highest-weight-module` · definition — Highest-weight vectors and cyclic highest-weight modules
- `def-weyl-vector-rho-for-a-chosen-positive-system` · definition — The Weyl vector rho for a chosen positive system
- `def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra` · definition — Regular elements and rank for a complex semisimple Lie algebra
- `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra` · definition — The regular root-hyperplane arrangement in a Cartan subalgebra
- `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots` · proposition — The centralizer of a Cartan element from its vanishing roots
- `lem-regular-elements-form-a-connected-dense-open-subset` · lemma — Regular elements form a connected dense open subset
- `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra` · theorem — Cartan subalgebras are conjugate in a complex semisimple Lie algebra
- `thm-the-root-set-is-a-reduced-crystallographic-root-system` · theorem — The root set is a reduced crystallographic root system
- `def-root-reflections-and-the-weyl-group-action` · definition — Root reflections and the Weyl group action
- `def-fundamental-weights-for-a-chosen-simple-root-system` · definition — Fundamental weights for a chosen simple root system
- `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights` · theorem — Finite-dimensional simple modules are classified by dominant highest weights
- `def-central-character-of-a-lie-algebra-module` · definition — Central character of a Lie algebra module
- `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar` · lemma — Central elements act by scalars on cyclic highest-weight modules
- `def-quadratic-casimir-element` · definition — The quadratic Casimir element
- `lem-the-casimir-element-is-independent-of-dual-bases` · lemma — The quadratic Casimir element is independent of the choice of dual bases
- `prop-the-quadratic-casimir-element-is-central` · proposition — The quadratic Casimir element is central
- `prop-casimir-eigenvalue-on-a-highest-weight-module` · proposition — The quadratic Casimir eigenvalue on a highest-weight module is $(\lambda,\lambda+2\rho)$
- `def-harish-chandra-projection` · definition — The Harish-Chandra projection
- `lem-central-elements-have-weight-zero` · lemma — Central elements lie in the zero-weight subspace of $U(\mathfrak g)$
- `prop-harish-chandra-projection-is-multiplicative-on-the-center` · proposition — The Harish-Chandra projection is multiplicative on the center
- `lem-harish-chandra-projection-computes-highest-weight-scalars` · lemma — The Harish-Chandra projection computes the highest-weight scalar
- `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions` · lemma — The rho-shift intertwines the dot and ordinary Weyl actions
- `prop-harish-chandra-map-is-injective` · proposition — The Harish-Chandra map on the center is injective
- `lem-associated-graded-symbol-of-a-central-element-is-invariant` · lemma — The leading PBW symbol of a central element is invariant
- `lem-regular-semisimple-elements-form-a-dense-open-subset` · lemma — Regular semisimple elements form a dense open subset
- `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` · lemma — An invariant polynomial is determined by its restriction to a Cartan subalgebra
- `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` · lemma — Weyl-invariant polynomials on the Cartan extend to invariant polynomials on $\mathfrak g$
- `thm-symmetric-invariants-restrict-to-weyl-invariants` · theorem — Chevalley restriction for symmetric invariants
- `thm-harish-chandra-isomorphism-for-the-center` · theorem — Harish-Chandra isomorphism for the center
- `cor-central-characters-are-dot-weyl-orbits` · corollary — Central characters are dot-Weyl orbits
- `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` · corollary — The center is a polynomial algebra on rank-many generators
- `thm-enveloping-algebra-is-free-over-its-center` · theorem — The enveloping algebra is free over its center

### `harish-chandra-isomorphism-casimir-and-central-characters-examples` — Harish Chandra Isomorphism Casimir and Central Characters — Examples (6 item(s))

- `ex-sl2-casimir-and-its-highest-weight-eigenvalue` · example — $\mathfrak{sl}_2$ Casimir and highest-weight eigenvalue
- `ex-sl3-harish-chandra-center-generators` · example — Degree-two and degree-three Harish-Chandra generators for $\mathfrak{sl}_3$
- `ex-dot-conjugate-weights-have-the-same-central-character` · example — Dot-conjugate type-$A_2$ weights have the same central character
- `cex-unshifted-weyl-orbits-do-not-classify-central-characters` · counterexample — Ordinary Weyl orbits do not classify central characters
- `ex-the-zero-weight-singular-central-character` · example — The zero-weight singular central character
- `cex-a-noninvariant-quadratic-pbw-element-is-not-central` · counterexample — A noninvariant quadratic PBW element need not be central

### `artin-induction-and-rational-characters` — Artin Induction and Rational Characters (9 item(s))

- `def-rational-character-ring` · definition — The rational representation ring $R_{\mathbb Q}(G)$ and rational-valued class functions
- `def-cyclic-induction-subgroup` · definition — The cyclic induction subgroup of the character ring
- `lem-induction-image-is-an-ideal-in-the-representation-ring` · lemma — The cyclic induction subgroup is an ideal of the character ring
- `lem-cyclic-generator-class-functions-by-moebius-inversion` · lemma — The generator-indicator class function of a cyclic group is obtained by Möbius inversion
- `lem-artin-cyclic-permutation-relation` · lemma — A positive integer multiple of the trivial character is an integral combination of cyclic permutation characters
- `thm-artin-induction-for-rational-characters` · theorem — Artin induction for rational characters
- `cor-cyclic-fixed-points-detect-rational-representations` · corollary — Cyclic fixed-space dimensions detect rational virtual characters
- `cor-rank-of-the-rational-representation-ring` · corollary — The rank of $R_{\mathbb Q}(G)$ is the number of conjugacy classes of cyclic subgroups
- `cor-cyclic-local-integrality-criterion` · corollary — Cyclic restrictions force a bounded denominator in the rational representation ring

### `artin-induction-and-rational-characters-examples` — Artin Induction and Rational Characters — Examples (4 item(s))

- `ex-artin-induction-for-a-cyclic-group` · example — Artin induction is tautological for a cyclic group
- `ex-artin-permutation-relation-for-a5` · example — The $A_5$ permutation relation already needs a denominator
- `ex-cyclic-fixed-point-detection-for-s3` · example — The cyclic fixed-space data recovers an $S_3$ rational character
- `cex-rational-valued-character-need-not-be-defined-over-the-rationals` · counterexample — A rational-valued irreducible character need not come from a $\mathbb Q$-representation

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
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-30`

Read `research/frontier-30-judge-closure.json`,
`research/frontier-30-judge.jsonl`,
`research/frontier-30-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-30-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-30-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-30-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
