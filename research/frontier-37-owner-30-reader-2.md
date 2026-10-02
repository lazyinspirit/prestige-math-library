# Step 5a reader report — batch 2

Run: `frontier-37-owner-30`  
Role: reader (`reader-2`)

## Opened pages and items

- `library/number-theory/minkowski-theory-and-number-field-class-groups.md` (A page, draft)
- `library/number-theory/minkowski-theory-and-number-field-class-groups-examples.md` (B companion, draft)

Opened all 24 current A-page items:

`def-minkowski-embedding-of-a-number-field`, `def-full-euclidean-lattice-and-covolume`, `lem-full-lattice-fundamental-domain-and-bounded-points`, `lem-blichfeldt-lattice-point-principle`, `thm-minkowski-convex-body-theorem`, `cor-minkowski-convex-body-theorem-at-equality`, `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice`, `lem-successive-minima-attainment-and-adapted-flag`, `lem-triangular-borel-maps-scale-euclidean-volume`, `lem-minkowski-successive-minima-volume-deformation`, `thm-minkowski-second-theorem-on-successive-minima`, `thm-ring-of-integers-and-ideals-are-full-lattices`, `thm-covolume-of-an-ideal-lattice`, `lem-archimedean-norm-bound`, `thm-small-element-in-a-number-field-ideal`, `thm-minkowski-bound-for-ideal-classes`, `lem-finitely-many-number-field-ideals-of-bounded-norm`, `thm-finiteness-of-the-number-field-class-group`, `cor-class-group-generated-by-small-primes`, `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one`, `cor-no-nontrivial-number-field-is-unramified-over-q`, `lem-bounded-conjugates-give-finitely-many-integral-polynomials`, `lem-hermite-minkowski-bounded-primitive-integral-element`, and `thm-hermite-minkowski-finiteness`.

Opened all 7 current B-page items:

`ex-minkowski-bound-for-gaussian-integers`, `ex-class-group-of-q-sqrt-minus-five`, `ex-class-group-of-q-sqrt-ten`, `ex-class-group-from-small-prime-ideals`, `ex-discriminant-lower-bound`, `ex-no-everywhere-unramified-extension-of-q`, and `cex-minkowski-constants-change-under-scaled-embedding`.

The assigned items are draft artifacts from this run. I checked the current item text and page prose, not only the manifest or generated proof contracts. I also opened the statement/definition sections of all 91 unique external direct citation targets used in the current batch contracts and the exact measure, number-field, and ideal-theory interfaces needed by the proofs.

## Repair

Edited the assigned in-flight item `items/thm-minkowski-second-theorem-on-successive-minima.md` and synchronized its entry in `research/frontier-37-owner-30-batch-2.proof-contracts.json`.

1. In proof steps 1.3 and 3.1, the signed copies of the positive simplex were described as disjoint measurable pieces even though copies with different signs meet on coordinate hyperplanes. Step 1.3 now shows each overlap lies in such a hyperplane and proves it null by projecting onto that hyperplane and applying the singular clause of `thm-linear-change-of-variables-for-lebesgue-measure`. The same dependency’s invertible clause gives equal volume for each diagonal sign map, whose determinant has absolute value one. Step 3.1 now disjointifies the finite cover, which changes each piece only by a null set, before applying finite additivity.

2. The former fact [F7] attributed Lebesgue finite additivity to `thm-countable-additivity-and-set-function-continuity` and `thm-lebesgue-measure-under-dilations-and-reflections`; those statements do not establish that `lambda_n` is a measure or finite additivity. Fact [F7] now cites `thm-lebesgue-measure-is-a-complete-measure` for the measure and finite-additivity interface, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` to identify product and Euclidean volume, and `thm-tonelli-theorem-for-sigma-finite-product-spaces` for the iterated integral. The direct dependencies were corrected accordingly. The Axiom of Choice supplies the countable-choice hypotheses at the cited steps.

The revised lower-bound computation uses the simplex volume `1/n!`, hence `vol(Delta)=2^n/n!`; the cross-polytope inclusion and determinant/index argument then give the stated lower bound. The upper bound remains the centroid-deformation and Blichfeldt argument. The literature sources were opened at the cited locations: Ben Green, *Additive Combinatorics*, Chapter 3 §3.7, Theorem 3.3, PDF pp. 27–28, [source](https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf), for the centroid-slice deformation and upper bound; Martin Henk, *Successive Minima and Lattice Points*, §3, proof of Theorem 1.3, pp. 5–7, [source](https://arxiv.org/pdf/math/0204158), for an independent proof of the upper inequality. The lower bound here is checked directly by the cross-polytope argument.

No `verification.judge` record was present in the item. After the repair, the required commands returned:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-minkowski-second-theorem-on-successive-minima.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-minkowski-second-theorem-on-successive-minima.md` — PASS (1 checked, 0 failing).

## Uneditable defects

None found in assigned pages, assigned items, or the direct published dependency statements opened for this review. No published dependency is being reported to the 5b lead.

## Page verdicts

- **A page — pass.** Its unscaled embedding and covolume convention, geometry-of-numbers chain, arithmetic class-group bounds, and Hermite–Minkowski summary match the reviewed items. The second theorem’s lower-bound additivity and its measure dependencies are repaired above.
- **B companion — pass.** The class-group calculations, prime-norm exclusions, signature/discriminant constants, finite-prime ramification conclusion, and scaled-embedding counterexample agree with the current example proofs and computations.

## Blocker and coverage note

No blocker. The current assigned pages and all 31 assigned items were opened and checked; direct external citation targets were checked at their statement/definition sections. This review did not recursively audit every transitive published dependency proof or every bibliography entry beyond the two geometry-of-numbers sources opened above. No unresolved uncertainty affecting an assigned claim remains.
