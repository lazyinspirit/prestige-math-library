# Step 5a reader report — batch 18

Run: frontier-37-owner-30  
Role: reader-18

## Opened inventory

Assigned pages:

- library/homological-algebra/perfect-complexes-and-triangulated-grothendieck-groups.md
- library/homological-algebra/perfect-complexes-and-triangulated-grothendieck-groups-examples.md

Assigned items:

- def-perfect-complex-over-a-ring
- lem-perfect-complexes-form-a-triangulated-subcategory
- def-triangulated-grothendieck-group
- lem-triangulated-k-zero-shifts-and-exact-functors
- lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant
- thm-perfect-complex-k-zero-agrees-with-projective-k-zero
- thm-abelian-k-zero-agrees-with-bounded-derived-k-zero
- thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories
- thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions
- ex-homological-and-internal-shifts-on-k-zero
- ex-dual-numbers-simple-is-not-perfect
- ex-euler-class-of-a-two-term-cone

Published dependency pages opened:

- library/homological-algebra/grothendieck-groups-and-graded-cartan-pairings.md
- library/homological-algebra/bounded-bimodule-complexes-and-derived-tensor.md

Published dependency items opened for the reviewed derivations:

- def-mapping-cone-of-a-chain-map
- def-derived-category-of-an-abelian-category
- thm-canonical-truncations-fit-a-distinguished-triangle
- prop-bounded-derived-localizations-embed-fully-faithfully
- prop-cohomology-factors-through-the-derived-category
- lem-bounded-above-complexes-admit-projective-replacements
- thm-a-bounded-above-complex-of-projectives-is-homotopically-projective
- thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
- def-left-and-right-global-dimension-of-a-ring
- thm-choice-implies-dependent-implies-countable-choice
- def-noetherian-ring
- prop-morphisms-from-a-homotopically-projective-complex-need-no-roof
- thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor
- thm-inverse-bimodule-complexes-give-derived-tensor-equivalences
- lem-graded-balanced-tensor-and-shift-isomorphisms
- thm-graded-projective-and-simple-classes-have-shift-orbit-bases
- def-graded-grothendieck-group-shift-module-and-cartan-map
- def-tor-by-resolving-the-left-module
- def-balanced-tor-bifunctor
- def-derived-tensor-product-in-the-bounded-above-setting
- prop-homology-of-the-derived-tensor-product-is-tor
- lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
- def-tensor-product-total-complex-of-chain-complexes

I read the batch manifest and reader brief, checked the run status, and inspected the batch proof-contract, coverage, and cross-batch-dependency records. The cross-batch dependency record is empty. The run status showed Step 5a reading open with no running worker when checked.

## Repairs

- In items/ex-euler-class-of-a-two-term-cone.md, proof step 1.1 mixed chain indices with cochain indices while deriving the cone terms. The published chain-cone definition gives terms \(D_n\oplus C_{n-1}\); under \(X^i=X_{-i}\) these become \(Q^i\oplus P^{i+1}\), so the stalk terms are \(Q\) in degree \(0\) and \(P\) in degree \(-1\). I replaced the incorrect index calculation with this reindexing. The claim and its citation to the cone convention are now aligned. The relevant source is the current local dependency def-mapping-cone-of-a-chain-map, Definition; the cochain cone formula is also stated in def-derived-category-of-an-abelian-category, Definition. Stacks Project, Section 13.9, Definition 13.9.1 ([tag 014D](https://stacks.math.columbia.edu/tag/014D)), states the cochain cone terms \(L^n\oplus K^{n+1}\).
- In items/thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories.md, I changed the title to include the theorem's stated Axiom of Choice and left-Noetherian hypotheses. Its statement and proof were already qualified correctly; the old title named only finite left global dimension.
- I updated the step-1-1 derivation and empty-support boundary evidence for ex-euler-class-of-a-two-term-cone in research/frontier-37-owner-30-batch-18.proof-contracts.json. Neither changed item had a verification.judge record to remove.
- Reflow and precheck passed for both changed items:
  - ex-euler-class-of-a-two-term-cone: reflowed; precheck PASS.
  - thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories: reflowed; precheck PASS.

The Stacks Project sections independently checked for the relevant conventions and comparisons were Section 15.76, Definition 15.76.1 ([tag 0656](https://stacks.math.columbia.edu/tag/0656)); Section 15.121, Lemmas 15.121.1–15.121.2 ([tag 0FJG](https://stacks.math.columbia.edu/tag/0FJG)); and Section 13.28, Definition 13.28.1 and Lemmas 13.28.2–13.28.3 ([tag 0FCM](https://stacks.math.columbia.edu/tag/0FCM)).

## Uneditable defects

None found in the opened published dependencies.

## Page verdicts

- perfect-complexes-and-triangulated-grothendieck-groups (A): pass after the item repairs. Its summary accurately states the perfect-complex and K0 comparisons, the finite-left-global-dimension theorem's Noetherian and AC conditions, and the graded tensor result's limits. No page prose edit was needed.
- perfect-complexes-and-triangulated-grothendieck-groups-examples (B): pass. Its three example summaries agree with the current item statements and computations. No page prose edit was needed.

## Blocker

None.

## Coverage note

I independently read all assigned pages and items and the local dependencies listed above. I also fetched the cited Stacks sections listed above. I did not independently retrieve the bibliography's Weibel or Khovanov–Seidel texts; the reviewed claims from those areas were checked against the current local dependency statements and the explicit item proofs. No unresolved mathematical uncertainty remains in the reviewed batch.
