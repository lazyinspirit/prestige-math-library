# Step 7 adjudication — group **a**, run `frontier-37-owner-30`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 87 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `minkowski-theory-and-number-field-class-groups` | A | number-theory | 365.917 | `decomposition-inertia-and-frobenius`, `convex-and-semicontinuous-functions-on-rn` |
| 2 | `minkowski-theory-and-number-field-class-groups-examples` | B | number-theory | 365.918 | `minkowski-theory-and-number-field-class-groups` |
| 3 | `dirichlets-unit-theorem-regulators-and-s-units` | A | number-theory | 365.919 | `minkowski-theory-and-number-field-class-groups`, `pell-equations-and-generalized-pell-orbits` |
| 3 | `dirichlets-unit-theorem-regulators-and-s-units-examples` | B | number-theory | 365.92 | `dirichlets-unit-theorem-regulators-and-s-units` |
| 4 | `cyclotomic-arithmetic-and-reciprocity-via-frobenius` | A | number-theory | 365.921 | `decomposition-inertia-and-frobenius`, `exterior-powers-orientation-and-hodge-duality` |
| 4 | `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples` | B | number-theory | 365.922 | `cyclotomic-arithmetic-and-reciprocity-via-frobenius` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `minkowski-theory-and-number-field-class-groups` — Minkowski Theory and Number Field Class Groups (24 item(s))

- `def-minkowski-embedding-of-a-number-field` · definition — Unscaled Minkowski embedding
- `def-full-euclidean-lattice-and-covolume` · definition — Full Euclidean lattice and covolume
- `lem-full-lattice-fundamental-domain-and-bounded-points` · lemma — Fundamental parallelotope and finite bounded intersections
- `lem-blichfeldt-lattice-point-principle` · lemma — Blichfeldt lattice-point principle
- `thm-minkowski-convex-body-theorem` · theorem — Minkowski convex-body theorem, strict form
- `cor-minkowski-convex-body-theorem-at-equality` · corollary — Minkowski convex-body theorem at equality
- `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice` · definition — Successive minima of a convex body
- `lem-successive-minima-attainment-and-adapted-flag` · lemma — Attained successive minima and adapted flag
- `lem-triangular-borel-maps-scale-euclidean-volume` · lemma — Triangular Borel maps scale Euclidean volume
- `lem-minkowski-successive-minima-volume-deformation` · lemma — Successive-minima volume deformation and collision avoidance
- `thm-minkowski-second-theorem-on-successive-minima` · theorem — Minkowski second theorem on successive minima
- `thm-ring-of-integers-and-ideals-are-full-lattices` · theorem — Number-field integer rings and ideals are full lattices
- `thm-covolume-of-an-ideal-lattice` · theorem — Covolume of an integral ideal lattice
- `lem-archimedean-norm-bound` · lemma — Archimedean product region, volume and norm bound
- `thm-small-element-in-a-number-field-ideal` · theorem — Small nonzero element in a number-field ideal
- `thm-minkowski-bound-for-ideal-classes` · theorem — Minkowski bound for ideal classes
- `lem-finitely-many-number-field-ideals-of-bounded-norm` · lemma — Finitely many ideals of bounded norm
- `thm-finiteness-of-the-number-field-class-group` · theorem — Finiteness of the number-field class group
- `cor-class-group-generated-by-small-primes` · corollary — Class group generated by small prime ideals
- `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one` · corollary — Nontrivial number fields have discriminant of absolute value greater than one
- `cor-no-nontrivial-number-field-is-unramified-over-q` · corollary — Every nontrivial number field has a ramified finite prime
- `lem-bounded-conjugates-give-finitely-many-integral-polynomials` · lemma — Bounded roots give finitely many monic integer polynomials
- `lem-hermite-minkowski-bounded-primitive-integral-element` · lemma — Bounded primitive integral element for Hermite–Minkowski
- `thm-hermite-minkowski-finiteness` · theorem — Hermite–Minkowski finiteness

### `minkowski-theory-and-number-field-class-groups-examples` — Minkowski Theory and Number Field Class Groups — Examples (7 item(s))

- `ex-minkowski-bound-for-gaussian-integers` · example — Minkowski bound for Gaussian integers
- `ex-class-group-of-q-sqrt-minus-five` · example — Class group of Q(√−5)
- `ex-class-group-of-q-sqrt-ten` · example — Class group of Q(√10)
- `ex-class-group-from-small-prime-ideals` · example — Higher-degree class group by norm exclusions
- `ex-discriminant-lower-bound` · example — Signature constant rules out discriminant ±1
- `ex-no-everywhere-unramified-extension-of-q` · example — No nontrivial everywhere unramified number field over Q
- `cex-minkowski-constants-change-under-scaled-embedding` · counterexample — Mixing scaled and unscaled Minkowski covolumes fails

### `dirichlets-unit-theorem-regulators-and-s-units` — Dirichlets Unit Theorem Regulators and S Units (18 item(s))

- `lem-roots-of-unity-in-a-number-field-are-finite` · lemma — Finitely many roots of unity in a number field
- `thm-kronecker-root-of-unity-criterion` · theorem — Kronecker root-of-unity criterion
- `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` · lemma — A number-field unit is exactly an algebraic integer of norm ±1
- `thm-product-formula-for-number-fields` · theorem — Product formula for a number field
- `def-logarithmic-unit-embedding` · definition — Logarithmic embedding of a number field
- `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` · lemma — Unit logarithms lie in the trace-zero hyperplane
- `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` · lemma — Kernel of the unit logarithm is the roots of unity
- `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` · lemma — Discrete subgroups of a real vector space are lattices
- `lem-logarithmic-unit-image-is-discrete` · lemma — The logarithmic unit image is discrete
- `thm-logarithmic-unit-image-is-a-full-lattice` · theorem — The logarithmic unit image is a full lattice
- `thm-dirichlet-unit-theorem` · theorem — Dirichlet unit theorem
- `def-fundamental-units` · definition — System of fundamental units
- `def-number-field-regulator` · definition — Regulator of a number field
- `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` · lemma — Deleted-row minors of a zero-column-sum matrix agree up to sign
- `thm-number-field-regulator-is-well-defined` · theorem — The regulator is well defined
- `cor-unit-ranks-by-number-field-signature` · corollary — Unit ranks by signature
- `def-s-integers-and-s-units-of-a-number-field` · definition — S-integers and S-units
- `thm-s-unit-theorem` · theorem — S-unit theorem

### `dirichlets-unit-theorem-regulators-and-s-units-examples` — Dirichlets Unit Theorem Regulators and S Units — Examples (7 item(s))

- `ex-units-of-q-and-imaginary-quadratic-fields` · example — Units of Q and the imaginary quadratic fields
- `ex-real-quadratic-units-and-pell` · example — Real quadratic units and Pell's equation
- `ex-units-in-a-real-cubic-field` · example — Two independent units in a real cubic field
- `ex-regulator-of-a-real-quadratic-field` · example — Regulator of a real quadratic field
- `ex-change-of-fundamental-units-preserves-regulator` · example — A unimodular change of generators preserves the regulator determinants
- `ex-s-units-of-q` · example — S-units of Q
- `cex-z-sqrt-d-units-need-not-equal-ok-units` · counterexample — Units of Z[√5] are a proper subgroup of the units of its maximal order

### `cyclotomic-arithmetic-and-reciprocity-via-frobenius` — Cyclotomic Arithmetic and Reciprocity via Frobenius (21 item(s))

- `def-conductor-of-a-cyclotomic-field` · definition — Cyclotomic conductor of a full cyclotomic field
- `lem-prime-power-cyclotomic-integral-structure` · lemma — Prime-power cyclotomic ring, discriminant support and p factor
- `lem-coprime-discriminant-compositum-integral-basis` · lemma — Integral basis and discriminant of a coprime-discriminant compositum
- `thm-cyclotomic-ring-of-integers` · theorem — Ring of integers of every cyclotomic field
- `thm-discriminant-of-a-cyclotomic-field` · theorem — Signed discriminant of a cyclotomic field
- `cor-total-ramification-in-a-prime-power-cyclotomic-field` · corollary — Total ramification at a prime-power cyclotomic level
- `lem-monogenic-prime-factorisation-by-polynomial-reduction` · lemma — Choice-free prime factorisation for a monogenic number ring
- `lem-arithmetic-frobenius-on-a-cyclotomic-field` · lemma — Arithmetic Frobenius is the power map in an unramified cyclotomic field
- `thm-prime-factorisation-in-a-cyclotomic-field` · theorem — Prime factorisation in a cyclotomic field
- `cor-cyclotomic-ramification-criterion` · corollary — Ramification primes of a reduced cyclotomic conductor
- `thm-conductor-of-a-full-cyclotomic-field` · theorem — Conductor of a full cyclotomic field
- `cor-unramified-prime-decomposition-in-a-cyclotomic-field` · corollary — Decomposition of an unramified prime in a cyclotomic field
- `cor-complete-splitting-in-a-cyclotomic-field` · corollary — Complete splitting criterion for a cyclotomic field
- `def-quadratic-gauss-sum-in-a-cyclotomic-field` · definition — Quadratic Gauss sum in a prime cyclotomic field
- `lem-galois-action-on-the-quadratic-gauss-sum` · lemma — Galois action on the quadratic Gauss sum
- `thm-quadratic-gauss-sum-square` · theorem — Square of the quadratic Gauss sum
- `thm-quadratic-subfield-of-a-prime-cyclotomic-field` · theorem — Quadratic subfield generated by the Gauss sum
- `thm-quadratic-frobenius-restriction-identity` · theorem — Quadratic reciprocity as a Frobenius restriction identity
- `cor-quadratic-reciprocity-via-frobenius` · corollary — Quadratic reciprocity via Frobenius
- `cor-first-supplement-via-cyclotomic-frobenius` · corollary — First supplement from Frobenius on Q(i)
- `cor-second-supplement-via-cyclotomic-frobenius` · corollary — Second supplement from Frobenius on Q(ζ_8)

### `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples` — Cyclotomic Arithmetic and Reciprocity via Frobenius — Examples (10 item(s))

- `ex-reduced-conductor-of-q-zeta-six` · example — The reduced conductor of Q(ζ_6)
- `ex-arithmetic-of-q-zeta-five` · example — Arithmetic of Q(ζ_5)
- `ex-prime-decomposition-in-q-zeta-eight` · example — Prime decomposition in Q(ζ_8)
- `ex-prime-decomposition-in-q-zeta-twelve` · example — Prime decomposition in Q(ζ_12)
- `ex-quadratic-gauss-sum-for-three` · example — Quadratic Gauss sum at p=3
- `ex-quadratic-gauss-sum-for-five` · example — Quadratic Gauss sum at p=5
- `ex-quadratic-subfield-of-q-zeta-seven` · example — Quadratic subfield of Q(ζ_7)
- `ex-frobenius-restriction-for-p-five-q-three` · example — Frobenius restriction for p=5 and q=3
- `ex-second-supplement-from-q-zeta-eight` · example — Second supplement in four residue classes modulo eight
- `cex-gauss-sum-sign-without-a-complex-embedding` · counterexample — The sign of a quadratic Gauss sum needs a chosen primitive root

## Your seams

Another group's pages depend on yours:

- `hyperbolic-riemann-surfaces-and-uniformization` (group j) requires your `dirichlets-unit-theorem-regulators-and-s-units`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-37-owner-30`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
