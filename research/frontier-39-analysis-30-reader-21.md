# Reader 21 — batch 21, frontier-39-analysis-30

Independent Step 5a mathematical review completed. Required local validation is complete. All 27 assigned current draft items and both assigned pages have been opened; assigned items were read by increasing dependency level after the external direct supplier sections; selected deeper supplier arguments and additional prerequisites were opened during targeted follow-up checks. Author manifest statements were treated as navigation only (the current rho-shift counterexample already uses the correct negative argument −4ω).

## Opened assigned inventory

- `library/lie-theory/weyl-character-and-multiplicity-formulas.md` (A page).
  - `items/def-completed-formal-character-ring-for-downward-cones.md`.
  - `items/lem-weyl-length-parity-is-multiplicative.md`.
  - `items/lem-rho-minus-w-rho-is-a-sum-of-positive-roots.md`.
  - `items/lem-casimir-comparison-on-a-weight-vector.md`.
  - `items/def-formal-character-of-a-finite-dimensional-weight-module.md`.
  - `items/def-weyl-alternation-operator.md`.
  - `items/lem-positive-root-strings-sum-the-freudenthal-correction.md`.
  - `items/lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight.md`.
  - `items/prop-formal-characters-are-additive-and-multiplicative.md`.
  - `items/prop-characters-of-finite-dimensional-modules-are-weyl-invariant.md`.
  - `items/lem-weyl-alternants-are-skew-invariant.md`.
  - `items/lem-geometric-series-invertibility-in-the-completed-character-ring.md`.
  - `items/thm-freudenthal-weight-multiplicity-recursion.md`.
  - `items/thm-weyl-denominator-identity.md`.
  - `items/def-kostant-partition-function.md`.
  - `items/cor-freudenthal-recursion-terminates-from-the-highest-weight.md`.
  - `items/lem-bgg-euler-character-gives-the-weyl-numerator.md`.
  - `items/thm-weyl-character-formula.md`.
  - `items/thm-kostant-weight-multiplicity-formula.md`.
  - `items/lem-regularized-evaluation-of-the-weyl-character-quotient-at-one.md`.
  - `items/thm-weyl-dimension-formula.md`.
- `library/lie-theory/weyl-character-and-multiplicity-formulas-examples.md` (B page).
  - `items/ex-a2-weyl-denominator-expansion.md`.
  - `items/ex-kostant-multiplicity-in-the-sl3-adjoint-module.md`.
  - `items/cex-omitting-the-rho-shift-breaks-kostants-formula.md`.
  - `items/ex-weyl-character-and-dimension-formulas-for-sl2.md`.
  - `items/ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight.md`.
  - `items/ex-weyl-dimension-formula-for-a-fundamental-sl3-module.md`.

## Repairs and evidence

- `lem-rho-minus-w-rho-is-a-sum-of-positive-roots`, old Proof 4.1: membership of k roots in a k-element inversion set did not prove distinctness. Replaced the reduced-word proof by a direct partition of wΦ⁺ into positive roots and negatives of its complementary inversion set. The statement and cone conclusion are unchanged.
- `def-weyl-alternation-operator`, caveat: its universal denial of an action on the completion failed in rank zero. Added the rank-zero exception and an explicit simple-root geometric-series witness for positive rank.
- `lem-weyl-length-parity-is-multiplicative`, Proof 1.1: explicitly separated rank zero before using the positive-dimensional determinant multiplicativity supplier.
- `lem-casimir-comparison-on-a-weight-vector`, F1: supplied the Cartan-to-maximal-toral prerequisite using the opened published equivalence theorem under AC.
- `prop-formal-characters-are-additive-and-multiplicative`, F2: removed the false description of category O as semisimple. Weight-space exactness is sufficient.
- `lem-geometric-series-invertibility-in-the-completed-character-ring`, F1 and Proof 1.1: added the omitted downward-support condition to the asserted coefficient-family membership test and corrected the sign of exponents of uᵏ. Replaced the purported equivalence between cone support and negative height by its correct implication.
- `lem-positive-root-strings-sum-the-freudenthal-correction`: replaced the undefined largest index of an empty string and the restricted indexing of Vᵢ with all integer-indexed weight spaces, allowing zero spaces. Finite-dimensionality supplies an upper bound. Proved the rectangular trace identity by summing matrix entries, then telescoped to establish the formula for every μ. Removed the undefined height bound for μ outside the root coset.
- `def-kostant-partition-function`: explicitly extended height to Q by the coordinate sum and corrected P(0)'s witness to the all-zero family (empty only if Φ⁺ is empty).
- `cor-freudenthal-recursion-terminates-from-the-highest-weight`: repaired the induction's use of zero multiplicities at unknown nonweights below λ. For each candidate ν, D(ν)≤0 excludes an actual non-top weight; otherwise Freudenthal computes it from smaller-height candidates. Proved finiteness for a requested height bound and explicitly extended height to Q.
- `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one`: preserved ν∈h* by explicitly using the published complex exponential and addition/real-extension theorem. Replaced the sequence-limit citation by the function-limit theorem, added chain and derivative-algebra suppliers, established strict positivity of the real denominator from the exponential series, and identified the nonzero denominator derivative and limit of the derivative quotient before l'Hôpital.
- `ex-weyl-character-and-dimension-formulas-for-sl2`, F3: corrected the ambient ring for the denominator inverse to the completion R.
- `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`, Verification 3.1: corrected D(μ) to 4(θ,θ)−(μ+ρ,μ+ρ); 3(θ,θ) is D(0), not the unshifted first term. The computed multiplicity two and top-weight conclusion remain unchanged.

## Source evidence

- Etingof, MIT 18.755 complete lectures, §26.5, printed pp. 142–143, equation (26.2) and Proposition 26.8: read the complete specialization and factorization argument, including the limiting product. URL: https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf . Also opened §26.4 and Exercise 26.7, including the exact rho-shifted partition arguments.
- Borcherds, Berkeley Math 261, 47.pdf, printed p. 146: read the formula, full Casimir trace sketch, and E8 calculation. URL: https://math.berkeley.edu/~reb/courses/261/47.pdf . Its comment about no information for highest-orbit vectors is used in the dominant-representative orbit calculation; it is not a proof that the fixed-positive-system coefficient vanishes on the entire orbit. The local shifted-norm proof and A2 computations establish that only the top actual weight has vanishing coefficient.
- Published local suppliers opened include the Cartan/maximal-toral equivalence, finite root-system structure, Casimir eigenvalue, weight bounds and Weyl invariance, the BGG resolution and its coinvariant exactness lemmas, the complex-exponential definition and addition theorem, and the exact real function-limit/derivative suppliers. Full external inventory will be finalized below.

## Handoff state

Completed: affected proof contracts and boundary evidence are updated; reflow, precheck, strict contract checking, and the final batched proof-layout command passed. Page verdicts, supplier inventory, and coverage limitations appear below. No judgments or certification have been issued.

## Further page and contract repairs

The A-page prose now names the actual evaluation e^ν↦exp(2t(ν,ρ)), avoiding the undeclared identification of h* and h in “h=2tρ”. It also distinguishes coefficient positivity from finite computation by height induction for each requested weight. The B-page prose was read and left unchanged.

The batch proof-contract file was updated for the repaired facts, steps, and changed supplier statements. Regenerated exact source quotations and derivation entries for the 23 proved items; the four definitions have no proof entries to regenerate. Corrected 20 boundary entries, including the false rank-zero caveat, the claimed inverse for arbitrary finite-union support instead of the stated single negative cone, the claim that ν perpendicular to ρ forces the alternant to vanish, the incomplete rank-one Kostant arguments, and the confused character/numerator endpoints. Removed duplicate citation entries produced from repeated links in one fact. Boundary evidence now points to exact statements or steps. These are evidence repairs, with no added judgments or certification.

## Opened external inventory

The following 67 external item files were opened. The four real-calculus follow-ups (`thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-algebra-of-function-limits`, `lem-function-limit-unique`) were read at their Statement and Facts & Assumptions sections; other listed items were read at their relevant definitions, statements, and proof bodies. Selected ancestry was checked where needed, including the BGG exactness argument and the three coinvariant suppliers, rather than recursively auditing the entire published graph.

- `items/cor-bgg-euler-character-identity.md`.
- `items/cor-determinant-multiplicativity-from-the-top-exterior-power.md`.
- `items/cor-exponential-reciprocal-and-positivity.md`.
- `items/cor-the-top-exterior-power-acts-by-the-determinant.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-classical-complex-matrix-lie-algebras.md`.
- `items/def-complex-exponential.md`.
- `items/def-finite-weyl-root-system-lattice-and-chamber-conventions.md`.
- `items/def-function-limit.md`.
- `items/def-fundamental-weights.md`.
- `items/def-grothendieck-group-and-character-of-category-o.md`.
- `items/def-height-of-a-root-and-highest-root.md`.
- `items/def-integral-dominant-and-strictly-dominant-weights.md`.
- `items/def-killing-form-of-a-semisimple-lie-algebra.md`.
- `items/def-quadratic-casimir-element.md`.
- `items/def-real-exponential-function-and-e.md`.
- `items/def-representation-of-a-lie-algebra.md`.
- `items/def-root-reflections-and-the-weyl-group-action.md`.
- `items/def-weight-and-weight-space-of-a-lie-algebra-representation.md`.
- `items/def-weyl-vector-rho-for-a-chosen-positive-system.md`.
- `items/lem-algebra-of-continuous-real-maps-on-a-space.md`.
- `items/lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term.md`.
- `items/lem-dominant-weights-are-maxima-of-their-weyl-orbits.md`.
- `items/lem-finite-semisimple-cartan-root-and-string-structure.md`.
- `items/lem-finite-weyl-closed-chambers-and-stabilizers.md`.
- `items/lem-finite-weyl-positive-roots-and-simple-reflections.md`.
- `items/lem-finite-weyl-strong-exchange-and-deletion.md`.
- `items/lem-function-limit-unique.md`.
- `items/lem-highest-weight-modules-have-weights-below-the-top-weight.md`.
- `items/lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential.md`.
- `items/lem-positive-root-pairings-of-a-dominant-integral-weight.md`.
- `items/lem-simple-reflections-preserve-weight-multiplicities.md`.
- `items/lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules.md`.
- `items/prop-casimir-eigenvalue-on-a-highest-weight-module.md`.
- `items/prop-direct-sum-dual-hom-and-tensor-representations.md`.
- `items/prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces.md`.
- `items/prop-formal-character-of-a-verma-module.md`.
- `items/prop-killing-form-pairs-only-opposite-root-spaces.md`.
- `items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md`.
- `items/prop-root-systems-of-the-classical-complex-lie-algebras.md`.
- `items/prop-root-vectors-shift-weight-spaces.md`.
- `items/prop-tensoring-with-a-finite-dimensional-module-preserves-category-o.md`.
- `items/prop-the-adjoint-representation-has-highest-weight-the-highest-root.md`.
- `items/prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional.md`.
- `items/prop-the-quadratic-casimir-element-is-central.md`.
- `items/prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system.md`.
- `items/prop-verma-and-finite-dimensional-modules-lie-in-category-o.md`.
- `items/prop-weights-of-a-verma-module-lie-below-lambda.md`.
- `items/prop-weyl-length-equals-positive-root-inversion-number.md`.
- `items/prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-algebra-of-function-limits.md`.
- `items/thm-algebra-of-limits.md`.
- `items/thm-bgg-resolution-of-a-finite-dimensional-simple-module.md`.
- `items/thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras.md`.
- `items/thm-category-o-is-abelian-and-extension-closed.md`.
- `items/thm-chain-rule.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-derivative-of-exponential.md`.
- `items/thm-exponential-addition-formula.md`.
- `items/thm-finite-dimensional-representations-of-sl-two.md`.
- `items/thm-highest-weight-classification-of-finite-dimensional-irreducible-representations.md`.
- `items/thm-lhopital-zero-over-zero.md`.
- `items/thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra.md`.
- `items/thm-pbw-model-of-a-verma-module.md`.
- `items/thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates.md`.
- `items/thm-the-root-set-is-a-reduced-crystallographic-root-system.md`.

## Independent mathematical conclusions

The completed-ring operations and geometric inversion are justified by the finite simple-coordinate bounds and the negative-height bound. Weyl invariance is supplied by the opened simple-reflection multiplicity proof. The BGG Euler identity supplies the denominator at λ=0, then the numerator at general dominant integral λ; formal cancellation and coefficient extraction give the character and Kostant formulas with both rho shifts. The Casimir and rectangular trace calculations give Freudenthal for every μ, while the independently checked shifted-norm argument gives positivity only at actual non-top weights. The corrected candidate-height induction handles zero multiplicities without assuming their locations. The complex evaluation of the finite denominator identity proves the numerator factorization, and real denominator positivity plus function-limit algebra and l'Hôpital justify the dimension specialization.

The six examples/counterexample were checked against the actual current formulas: the A2 eight-subset expansion, six Weyl images and two zero-weight partitions agree; the adjoint trace yields multiplicity two; the sl2 finite telescoping has m+1 terms; the shift-omission witness uses the correct negative argument −4ω; and the fundamental sl3 coroot ratios are 2, 1, and 3/2, without an undeclared normalization of the Killing form. The defining-module irreducibility calculation closes the final dimension comparison.

## Page verdicts

- `weyl-character-and-multiplicity-formulas` (A): no unresolved mathematical defect found after the recorded item and prose repairs. The character, denominator, Kostant, Freudenthal and dimension routes are supplied. Reader conclusion only; no judgment or certification.
- `weyl-character-and-multiplicity-formulas-examples` (B): no unresolved mathematical defect found after repairing the two assigned example items. Its prose accurately describes the examples and the top-weight exception among actual weights. No B-page prose edits.

## Uneditable findings and blockers

No confirmed or suspected uneditable defect remains from this review. No withdrawal proposed. No operational blocker remains.

## Validation and coverage

Reflow and precheck were run for all 12 changed items. Every command exited zero; ten proved items passed, and the two changed definitions each reported zero proof sections checked. No stale verification.judge record remains on any changed item. Strict proof-contract checking passed for all 27 items with zero errors and zero warnings after correcting duplicate citations and boundary anchors. These are local mechanical checks, not mathematical acceptance stamps.

Coverage: both assigned pages, all 27 assigned current items, and the listed supplier sections were opened. Some initially truncated outputs were recovered by targeted section reads. The two consulted web source sections were read as described above; this is not a verification of every bibliography entry (Knapp, Moreau and Weber were not independently fetched), nor a recursive audit of all published ancestry. No engine transition, publication, or out-of-scope edit was performed.

Final required layout command (run once after the final item edits and formatters):

```sh
node tools/proof-layout.mjs items/lem-rho-minus-w-rho-is-a-sum-of-positive-roots.md items/def-weyl-alternation-operator.md items/lem-weyl-length-parity-is-multiplicative.md items/lem-casimir-comparison-on-a-weight-vector.md items/prop-formal-characters-are-additive-and-multiplicative.md items/lem-geometric-series-invertibility-in-the-completed-character-ring.md items/lem-positive-root-strings-sum-the-freudenthal-correction.md items/def-kostant-partition-function.md items/cor-freudenthal-recursion-terminates-from-the-highest-weight.md items/lem-regularized-evaluation-of-the-weyl-character-quotient-at-one.md items/ex-weyl-character-and-dimension-formulas-for-sl2.md items/ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight.md
```

Result: `proof-layout: 12 items, 32 steps, 0 defects` (exit 0). No item edits or formatters followed this command. The handoff findings file has an empty findings array; repaired defects belong to this report and the item/contract/prose diffs. Next action is the engine's Step 5b review.
