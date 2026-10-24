# Step 3a reader report — batch 7

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `7`

## Scope and opened inventory

Read the current batch manifest, reader brief, batch-7 proof contracts, notes,
coverage record, and cross-batch dependency record. The author's notes and
check results were used as navigation and evidence only, not as verdicts.

Opened both assigned page files:

- `library/quantum-field-theory-mathematics/qftx-equivariant-cohomology.md`
- `library/quantum-field-theory-mathematics/qftx-equivariant-cohomology-examples.md`

Both are draft mathematics pages with frontmatter only, `page_layout: compact-v1`, and no page summary. Their manifest inventories and companion
identity match. All 27 unique page IDs appearing in their `requires` lists
resolve to a unique library page; the required pages are published except for
the assigned draft A page. I opened
`library/differential-geometry/moment-maps-and-symplectic-reduction.md` in full
because its stated negative-exponential fundamental-field convention is used
by the Cartan definition. The other external required-page sources were
resolved by ID, path, and status, but were not read in full; their mathematical
content was checked through the item's exact dependency interfaces where used.

Opened all five assigned items in their within-batch dependency order:

1. `def-standard-product-torus-as-a-compact-lie-group`
2. `lem-torus-classifying-space-cohomology`
3. `def-torus-equivariant-cohomology-cartan-model`
4. `ex-qftx-equivariant-cohomology-of-a-point`
5. `ex-qftx-equivariant-cohomology-of-a-free-circle-action`

Opened the exact Definition/Statement interfaces for all 49 distinct external
published mathematical item suppliers in the five assigned dependency lists.
The complete set is:

`cor-singular-cohomology-is-homotopy-invariant`,
`def-axiom-of-choice`,
`def-compactly-generated-based-space-and-well-pointed-object`,
`def-countable-choice`, `def-exponential-map-of-a-lie-group`,
`def-exterior-derivative-by-the-invariant-vector-field-formula`,
`def-fundamental-vector-field-of-a-left-action`,
`def-interior-product-of-a-form-by-a-vector-field`,
`def-lie-derivative-of-a-differential-form`,
`def-lie-derivative-of-a-tensor-field`, `def-lie-group`,
`def-milnor-infinite-join-model-of-eg`,
`def-one-parameter-subgroup-of-a-lie-group`,
`def-singular-cochain-complex-with-coefficients`,
`def-singular-cohomology-with-coefficients`,
`def-singular-cup-product-on-cochains`, `def-smooth-differential-k-form`,
`def-smooth-left-action-of-a-lie-group`, `def-smooth-manifold`,
`def-smooth-map-between-manifolds-with-boundary`,
`def-symmetric-algebra-of-a-vector-space`,
`def-the-one-dimensional-torus-and-normalized-haar-integral`,
`def-torus-and-maximal-torus-in-a-compact-lie-group`,
`def-wedge-product-of-differential-forms`,
`lem-cohomology-ring-of-infinite-complex-projective-space`,
`lem-open-or-closed-surjection-is-quotient`,
`lem-unit-circle-is-a-compact-metrizable-topological-group`,
`prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth`,
`prop-cup-product-is-natural-unital-and-associative`,
`prop-differential-forms-form-a-graded-commutative-algebra`,
`prop-interior-product-is-a-graded-antiderivation`,
`prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
`prop-real-line-mod-integers-is-compact-and-path-connected`,
`prop-relative-cw-inclusions-are-cofibrations`, `thm-cartans-magic-formula`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-compactness-agrees-with-metric-compactness`,
`thm-compactness-under-continuous-maps`,
`thm-finite-products-of-compact-spaces`, `thm-heine-borel-rn`,
`thm-milnor-join-model-is-a-contractible-free-g-space`,
`thm-product-of-connected-spaces`,
`thm-the-exterior-derivative-commutes-with-pullback`,
`thm-the-exterior-derivative-is-a-graded-derivation`,
`thm-the-exterior-derivative-squares-to-zero`,
`thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`,
and `thm-universal-coefficient-theorem-for-homology-over-a-pid`.

The imported files for these 49 item dependencies and the published
moment-maps page match their SHA-256 values in `research/math-imports.json`.
The complete published proof of
`lem-cohomology-ring-of-infinite-complex-projective-space` was also opened to
check the Euler-class generator used by the real-coefficient calculation.
The 49 direct supplier interfaces were checked against the actual facts and
proof uses; their entire transitive proof closures were not re-audited.

Reviewed the current batch-7 contract mappings against all five current item
Facts & Assumptions and proof steps. The source-citation records and step inputs
match the displayed arguments. I also checked the current source passages at:

- [Hatcher, *Algebraic Topology*, Chapter 0](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), “Cell Complexes” and “Operations on Spaces,” printed pp. 5–8, for the circle cell and finite product-cell construction.
- [Hatcher, *Algebraic Topology*, Chapter 3](https://pi.math.cornell.edu/~hatcher/ATch3.pdf), §3.2, Theorem 3.19, printed pp. 221–222, for the projective-space cohomology-ring statement. The exact Euler-class identification and proof needed locally are supplied by the pinned mathematical lemma named above.
- [Ren, *Equivariant de Rham Theory*](https://math.berkeley.edu/~qiuyu/papers/Equivariant_de_Rham_Theory.pdf), §2.1, Definition 2.3; §4.3, Example 4.10; and §4.4, Proposition 4.12, for the Borel definition, point calculation, and coordinate Cartan differential.
- [Menzi and Michler, *A Brief Introduction to Equivariant Cohomology*](https://people.math.ethz.ch/~acannas/Teaching/Moment_Map_2026/Papers/09_Introduction_to_Equivariant_Cohomology.pdf), §§2.1–2.2, Definitions 2.1, 2.3 and 2.11, formula (3), Remark 2.12, Lemma 2.14, Proposition–Definition 2.15, and Examples 2.4 and 2.22; §3, Theorem 3.1. The local definition proves its own square-zero statement and the local free-circle example proves its own computation; neither relies on the general Borel–Cartan comparison or the general free-action theorem.

The PDF passages above were checked at the cited locations; I did not read each
entire PDF. No conclusion here depends on results outside those passages and
the exact local or published mathematical dependencies recorded above.

## Mathematical review and repair

- `def-standard-product-torus-as-a-compact-lie-group`: the quotient charts,
  product smooth structure, coordinate group operations, period-one basis and
  exponential normalization are defined and proved. The finite CW structure,
  identity cofibration, and compactly-generated weak-Hausdorff conditions
  follow from the displayed constructions and cited results. I found no gap.
- `lem-torus-classifying-space-cohomology`: the product Milnor quotient is
  identified with the product of the circle classifying spaces using open
  quotient maps. The integral generator, real coefficient change, cup-product
  compatibility, finite-free homology, and finite Künneth iteration have the
  required hypotheses. The empty-product case is handled. I found no gap.
- `def-torus-equivariant-cohomology-cartan-model`: the right diagonal action,
  associated-space square, invariant algebra, degree and sign conventions are
  consistent. In particular, the negative-exponential field convention gives
  the stated minus sign, and the square of the Cartan operator reduces to the
  Lie derivative, which vanishes on invariant forms. The TikZ commutative
  square has the stated objects and arrows and commutes. The item explicitly
  makes no general Borel–Cartan isomorphism claim. I found no gap or diagram
  defect.
- `ex-qftx-equivariant-cohomology-of-a-point`: both complexes and their
  degree-two normalization are computed correctly.
- `ex-qftx-equivariant-cohomology-of-a-free-circle-action`: the quotient map
  `[v,x] ↦ v·x` is well-defined with the stated right diagonal action, the
  sign `X_e=-∂_x` gives `ι_{X_e}η=1`, and multiplication by `u` gives the
  claimed Cartan cohomology. I repaired one proof-line boundary case below.

Repair in `items/ex-qftx-equivariant-cohomology-of-a-free-circle-action.md`,
Proof step 2.1: the original singular-boundary formula used
`σ_{n-1}` without restricting to `n≥1`, so at `n=0` it referred to a
nonexistent `σ_{-1}`. The paragraph now states `∂σ_0=0` separately and applies
the alternating-face formula only for `n≥1`. I updated the corresponding
`step-2-1` claim in
`research/advanced-qft-supersymmetry-build-2026-10-23-batch-7.proof-contracts.json`.
No `verification.judge` record was present to remove. Required focused commands
after the repair returned:

- Reflow: unchanged.
- Precheck: PASS for the changed item.
- Final proof-layout: 1 item, 4 steps, 0 defects.

No other assigned item was edited. No diagram was missing or required repair.

## Page verdicts

- `qftx-equivariant-cohomology`: **pass**. Draft A page has the expected three
  items in supplier-first inventory order, resolves its required pages, and
  has no summary body.
- `qftx-equivariant-cohomology-examples`: **pass**. Draft B page has the
  correct A-page companion, both examples in its examples inventory, and no
  summary body.

## Unedited defects and blockers

No confirmed defects remain in the assigned items or pages. No defect requiring
an outside repair was found, and there is no blocker.

## Coverage limitations

To enumerate the dependency closure, I initially opened the assigned carriers
before reviewing the imported supplier interfaces. I then checked the exact
supplier interfaces and re-evaluated each assigned argument with those
interfaces in context, but this did not follow the requested strict
supplier-first file-reading order. Also, the external required-page list was
resolved by current paths and status, but only the moment-maps page was read in
full; and I read the relevant source passages rather than every complete source
PDF or every full proof in the 49-item published dependency set. These limits
are disclosed rather than treated as comprehensive transitive or source-proof
audits. An overly broad search briefly matched historical run-log output; that
output was discarded and was not used as review evidence.
