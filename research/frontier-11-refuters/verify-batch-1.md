## Your cluster — `vfy-batch-1`: batch 1 — field extensions / complex numbers (order 54) and symmetric-group conjugacy (order 64)

Your artifact is **`research/frontier-11-batch-1.proof-contracts.json`**.
The items are under `items/<id>.md` and are **frozen** — read them, never edit.

**Special history for this batch, and why you matter most here.** Reader-5 found
**181 boundary rows** across 44 of this batch's 49 items marked `checked` whose
"evidence" was a prospective instruction — "Step 1.1 **must** isolate…",
"must test…", "must preserve…". Those rows were rewritten by this batch's **own
Beta**, in the step-6a artifact reconciliation, *before* Alpha's step-6b report —
and Alpha's report carried reader-5's original count forward without re-checking
the file. **The consequence is that this rewrite has never been checked by
anybody.** 67 of those rows became `not_applicable` and 114 became `checked`
with new evidence text. You are the first independent reader of all 181.

Weight your effort accordingly: the 67 flips to `not_applicable` are as suspect
as the 114 rewrites, because flipping a hard row to `not_applicable` with a
plausible reason is the cheapest way to make it stop failing.

### Priority items — rule on each of these explicitly

- `thm-every-complex-number-has-a-square-root`
- `thm-evaluation-kernel-and-minimal-polynomial`
- `thm-irreducible-quotient-adjoins-a-root`
- `cor-every-nonconstant-polynomial-has-a-root-in-an-extension`
- `lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup`
- `thm-alternating-conjugacy-class-splitting-criterion`
- `cor-composite-of-two-subfields`

### Every row changed in the repair round, by item

These are the rows the Beta changed. Each is a claim that the row is now true of
the frozen item text. Work down the list; report coverage honestly and do not
extrapolate to rows you did not open.

- `cex-an-annihilating-polynomial-need-not-be-minimal`
    - quotes changed: F3<-cor-cauchy-reals-lub-complete (uses 1.1); F3<-thm-of-square-roots (uses 1.1)
    - boundary rows changed: zero[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `cex-reducible-polynomial-quotient-is-not-a-field`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `cor-center-of-symmetric-group-is-trivial`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `cor-complex-numbers-are-a-quadratic-real-extension`
    - quotes changed: F4<-def-algebraic-and-transcendental-elements (uses 1.1); F4<-thm-evaluation-kernel-and-minimal-polynomial (uses 1.1); F3<-def-complex-numbers-and-arithmetic (uses 1.1,1.2)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable], endpoints[checked]
- `cor-composite-of-two-subfields`
    - boundary rows changed: empty[checked]
- `cor-derived-subgroups-of-symmetric-and-alternating-groups`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[checked]
- `cor-every-nonconstant-polynomial-has-a-root-in-an-extension`
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[checked], degenerate[not_applicable], endpoints[not_applicable], nonempty-choice[checked]
- `cor-only-proper-nontrivial-normal-subgroup-of-s-n`
    - quotes changed: F3<-def-alternating-group (uses 2.2); F1<-thm-lagrange (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `cor-stem-fields-are-uniquely-f-isomorphic`
    - boundary rows changed: zero[checked]
- `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked], iff-forward[not_applicable], iff-reverse[not_applicable]
- `cor-symmetric-group-class-equation-by-cycle-type`
    - quotes changed: F3<-thm-lagrange (uses 2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `cor-three-cycles-form-one-conjugacy-class-in-a-n`
    - quotes changed: F2<-thm-alternating-conjugacy-class-splitting-criterion (uses 2.1)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked], iff-forward[not_applicable], iff-reverse[not_applicable]
- `cor-universal-property-of-the-complex-numbers`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[not_applicable]
- `ex-a-five-conjugacy-classes-and-split-five-cycles`
    - quotes changed: F3<-thm-alternating-conjugacy-class-splitting-criterion (uses 2.1); F1<-cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `ex-conjugating-permutations-by-relabeling`
    - boundary rows changed: one[not_applicable], degenerate[not_applicable], endpoints[not_applicable]
- `ex-klein-four-is-normal-in-a-four`
    - quotes changed: F1<-cor-sign-from-disjoint-cycle-structure (uses 1.1)
    - boundary rows changed: one[checked], degenerate[checked], nonempty-choice[not_applicable]
- `ex-minimal-polynomial-of-nested-radical-two-plus-root-three`
    - quotes changed: F3<-def-algebraic-and-transcendental-elements (uses 3.1); F5<-cor-cauchy-reals-lub-complete (uses 1.1); F5<-thm-of-square-roots (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable], endpoints[not_applicable]
- `ex-rational-square-root-two-as-a-simple-extension`
    - quotes changed: F3<-cor-cauchy-reals-lub-complete (uses 1.1); F3<-thm-of-square-roots (uses 1.1); F4<-def-algebraic-and-transcendental-elements (uses 1.1); F4<-thm-evaluation-kernel-and-minimal-polynomial (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable], endpoints[checked]
- `ex-s-five-conjugacy-classes-and-class-equation`
    - quotes changed: F4<-thm-alternating-conjugacy-class-splitting-criterion (uses 3.1); F2<-cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types (uses 1.1,2.1)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[not_applicable]
- `ex-s-four-conjugacy-classes-and-class-equation`
    - quotes changed: F2<-cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types (uses 1.1,2.1,3.1)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `ex-square-roots-of-the-imaginary-unit`
    - quotes changed: F2<-cor-cauchy-reals-lub-complete (uses 1.1,2.1)
    - boundary rows changed: zero[checked], degenerate[checked], endpoints[not_applicable]
- `ex-the-four-element-field-from-an-irreducible-quadratic`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `fs-a-n-is-simple-for-all-n-at-least-four`
    - quotes changed: F1<-cor-sign-from-disjoint-cycle-structure (uses 1.1,2.2)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked]
- `fs-arbitrary-transposition-and-n-cycle-generate-s-n`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[not_applicable]
- `fs-complex-numbers-form-an-ordered-field`
    - quotes changed: F2<-def-complex-numbers-and-arithmetic (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable]
- `fs-same-cycle-type-implies-conjugate-in-a-n`
    - quotes changed: F3<-thm-alternating-conjugacy-class-splitting-criterion (uses 2.1); F1<-cor-sign-from-disjoint-cycle-structure (uses 1.1)
    - boundary rows changed: empty[not_applicable], one[checked], degenerate[checked], endpoints[not_applicable]
- `lem-complex-conjugation-and-modulus-laws`
    - quotes changed: F3<-cor-cauchy-reals-lub-complete (uses 2.1,3.1)
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked], endpoints[not_applicable], iff-forward[checked], iff-reverse[checked]
- `lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup`
    - boundary rows changed: degenerate[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `lem-conjugating-a-cycle-relabels-its-entries`
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked]
- `lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `lem-normal-subgroup-containing-a-three-cycle-is-a-n`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[checked]
- `lem-x-squared-plus-one-is-irreducible-over-the-reals`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked], endpoints[not_applicable]
- `thm-adjacent-transpositions-generate-the-symmetric-group`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `thm-alternating-conjugacy-class-splitting-criterion`
    - quotes changed: F2<-thm-sign-is-a-homomorphism (uses 1.1,1.2,2.2)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-alternating-group-is-generated-by-three-cycles`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `thm-alternating-group-is-simple-for-n-at-least-five`
    - quotes changed: F4<-def-alternating-group (uses 1.1); F4<-cor-sign-from-disjoint-cycle-structure (uses 1.1)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked]
- `thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group`
    - boundary rows changed: one[not_applicable], degenerate[checked], endpoints[checked]
- `thm-centralizer-cardinality-from-cycle-type`
    - quotes changed: F3<-thm-number-of-bijections-of-a-finite-set (uses 2.1,4.1); F4<-thm-product-rule (uses 4.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `thm-complex-numbers-are-the-real-coordinate-plane`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked]
- `thm-complex-numbers-form-a-field`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked], nonempty-choice[not_applicable]
- `thm-evaluation-kernel-and-minimal-polynomial`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-every-complex-number-has-a-square-root`
    - quotes changed: F2<-cor-cauchy-reals-lub-complete (uses 1.1,1.2,2.1); F5<-thm-complex-numbers-form-a-field (uses 4.1)
    - boundary rows changed: empty[not_applicable], zero[checked], one[not_applicable], degenerate[checked], endpoints[checked]
- `thm-irreducible-quotient-adjoins-a-root`
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable], endpoints[checked], nonempty-choice[not_applicable]
- `thm-real-automorphisms-of-the-complex-numbers`
    - quotes changed: F1<-def-complex-numbers-and-arithmetic (uses 1.1,2.1,4.1)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
- `thm-simple-algebraic-extension-quotient-power-basis-and-degree`
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable], endpoints[checked], nonempty-choice[not_applicable]
- `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`
    - boundary rows changed: empty[checked]
- `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic`
    - boundary rows changed: one[checked]
- `thm-symmetric-permutations-are-conjugate-iff-same-cycle-type`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-universal-property-of-adjoining-an-irreducible-root`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[not_applicable]
