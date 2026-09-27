# Step 5a reader report — batch 16

Run: `frontier-35-ten-categories`  
Role: reader  
Assigned pages: 4  
Assigned items opened: 40

## Opened inventory

### `library/braid-groups/ordered-and-unordered-configuration-spaces.md` (A)

- `def-ordered-configuration-space`
- `prop-the-symmetric-group-acts-freely-on-ordered-configurations`
- `def-unordered-configuration-space`
- `lem-path-conjugation-isomorphism-of-fundamental-groups`
- `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`
- `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations`
- `thm-ordered-configurations-cover-unordered-configurations-regularly`
- `lem-the-closed-disk-is-a-manifold-with-boundary`
- `def-pure-braid-group-from-ordered-configurations`
- `def-braid-group-from-unordered-configurations`
- `def-endpoint-monodromy-of-a-configuration-loop`
- `thm-configuration-braid-pure-braid-short-exact-sequence`
- `lem-forgetting-configuration-points-is-locally-trivial`
- `thm-fadell-neuwirth-forgetful-fibration`

### `library/braid-groups/ordered-and-unordered-configuration-spaces-examples.md` (B)

- `ex-two-point-ordered-configurations-of-the-plane`
- `ex-the-two-point-unordered-cover-and-its-monodromy`
- `cex-collisions-destroy-freeness-of-coordinate-permutation`
- `cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one`

### `library/braid-groups/graded-quiver-algebras-and-derived-tensor-functors.md` (A)

- `def-path-ring-of-a-finite-quiver-over-the-integers`
- `def-khovanov-seidel-type-a-quiver-algebra`
- `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis`
- `def-graded-khovanov-seidel-module-category-and-projectives`
- `def-vertex-khovanov-seidel-modules`
- `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions`
- `lem-finite-graded-projective-resolutions-are-extension-stable`
- `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension`
- `lem-bounded-finite-projective-model-for-khovanov-seidel-modules`
- `def-bounded-projective-homotopy-category-for-a-m`
- `def-two-sided-projective-khovanov-seidel-bimodule-functors`
- `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`
- `def-khovanov-seidel-beta-and-gamma-bimodule-maps`
- `def-signed-totalization-of-graded-a-m-bimodule-actions`
- `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m`
- `def-khovanov-seidel-positive-and-negative-twist-complexes`
- `def-triangulated-k-zero-of-khovanov-seidel-projectives`
- `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero`

### `library/braid-groups/graded-quiver-algebras-and-derived-tensor-functors-examples.md` (B)

- `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives`
- `ex-a-simple-module-projective-resolution-for-a-two`
- `ex-totalizing-a-two-term-bimodule-action`
- `cex-internal-and-homological-shifts-are-not-interchangeable`

Additional dependencies opened for the repaired claims included the published
shift, derived-localization, small-category, homotopically-projective, and
equivalence items, as well as the assigned shift counterexample. In particular,
`def-equivalence-and-adjoint-equivalence-of-categories` defines an equivalence
using quasi-inverse data, and
`thm-fully-faithful-split-essentially-surjective-characterises-equivalence`
requires split essential surjectivity for the choice-free converse. The Stacks
Project K-groups section was checked at Definition 13.28.1 (tag 0FCM,
<https://stacks.math.columbia.edu/tag/0FCM>): it defines the group by triangle
relations on a free abelian group on objects. The Khovanov–Seidel paper was
consulted at §1b, printed p. 3, for its algebra/module conventions.

## Page verdicts

- **Ordered and unordered configuration spaces (A):** pass after the local
  repair below. The remaining definitions, covering claims, monodromy, and
  forgetful-map statements are consistent with their stated hypotheses.
- **Ordered and unordered configuration-space examples (B):** pass. The plane
  examples and collision counterexamples agree with the quotient and covering
  constructions; no edits made.
- **Graded quiver algebras and derived tensor functors (A):** pass after the
  local repairs below. The page summary now states the exact fully faithful
  comparison and objectwise replacement result without claiming an unprovided
  quasi-inverse.
- **Graded quiver examples (B):** pass. The (A_2) computations and shift
  counterexample are consistent with the assigned definitions; no edits made.

## Repairs and evidence

1. In `items/def-ordered-configuration-space.md`, “Based configurations,” the
   infinitude sentence now assumes (n\ge1) and (F_n(X)\ne\varnothing).
   (F_0(X)) is a one-point space even when (X) is infinite. For positive
   finite (n), fix the other (n-1) coordinates of one configuration and
   vary the first outside that finite set. This supplies infinitely many
   configurations without claiming it in the (n=0) case. The item contract’s
   zero-boundary evidence was updated.
2. In `items/def-bounded-projective-homotopy-category-for-a-m.md`, the
   two-shifts description and proof step 3.1 now put (P_i[1]) in homological
   degree (-1). Under the stated convention ((X[1])^n=X^{n+1}), the only
   nonzero term of a complex concentrated in degree (0) occurs at (n=-1).
   This matches the assigned counterexample’s support computation. Its proof
   contract’s boundary evidence was updated.
3. In `items/lem-bounded-finite-projective-model-for-khovanov-seidel-modules.md`,
   step 1.1 no longer infers a small skeleton from a set of module isomorphism
   types while claiming no choice. It constructs a set of quotient-presentation
   codes ((\mathbf r,N)), uses the small category of coded bounded complexes,
   and explains why only finite presentations are needed for each bounded
   complex and each roof middle term. The argument now supports the bounded
   localization used by the proof without asserting a size result for the
   unbounded derived category. Steps 2.1–3.1 were adjusted to use the bounded
   localization. The unsupported skeleton dependencies were removed, and the
   corresponding proof-contract citations, derivations, and choice-boundary
   evidence were updated.
4. In `items/lem-bounded-finite-projective-model-for-khovanov-seidel-modules.md`
   and `items/def-bounded-projective-homotopy-category-for-a-m.md`, the result
   no longer claims that pointwise replacements supply a quasi-inverse functor.
   The repository defines equivalence using a quasi-inverse in
   `items/def-equivalence-and-adjoint-equivalence-of-categories.md` and proves
   that full faithfulness plus essential surjectivity gives one only with split
   essential-surjectivity data. The current construction gives a replacement
   for each bounded complex but does not provide that class-wide assignment.
   The items and the assigned A-page summary now state exactness, full
   faithfulness, and objectwise essential surjectivity. Both affected proof
   contracts were updated.
5. In `items/def-triangulated-k-zero-of-khovanov-seidel-projectives.md`, the
   indexing set is now the isomorphism-type set of a small coded projective
   category. Step 1.1 proves it represents every projective complex and triangle
   type; step 2.1 proves the represented type is unique; the relations are
   imposed on the coded triangles. This avoids treating a class of arbitrary
   isomorphic copies as a set and avoids selecting a global skeleton. The
   Stacks citation is now described as the isomorphism-type presentation of
   Definition 13.28.1, with step 4.1 verifying the identification of isomorphic
   objects. The stale skeleton dependency was removed, and the proof contract
   was updated, including its step numbering and choice-boundary evidence.

The assigned graded-quiver A-page summary was edited for the comparison claim;
no B-page prose or published content was edited. No stale `verification.judge`
record was present in the four repaired items.

## Validation

- Reflow completed for all four changed items; each reported `unchanged` after
  formatting.
- Precheck passed for `def-bounded-projective-homotopy-category-for-a-m`,
  `lem-bounded-finite-projective-model-for-khovanov-seidel-modules`, and
  `def-triangulated-k-zero-of-khovanov-seidel-projectives`.
- `def-ordered-configuration-space` precheck reported 0 checked and 0 failing.
- The first K₀ precheck requested canonical proof-step numbering after the proof
  restructuring. The step labels and references were normalized; reflow and a
  second precheck then passed.

## Uneditable defects

None found.

## Blockers

None.

## Coverage note

All four assigned pages and all 40 assigned item files were opened. I checked
the dependencies needed for the audited inferences directly and read the
authoritative K₀ definition noted above. I did not read the Khovanov–Seidel
paper end-to-end; its source text was not used in place of the current item
proofs.
