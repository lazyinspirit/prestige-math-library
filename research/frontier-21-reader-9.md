# frontier-21 reader-9 report

Date: Thursday, August 27, 2026.
Batch: `research/frontier-21-batch-9.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-batch-9.pages.json`, `research/frontier-21-batch-9.coverage.json`, `research/frontier-21-batch-9.proof-contracts.json`, `research/frontier-21-batch-9.notes.md`, `research/plan-category-theory-track.md`, and the live run state from `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Assigned page paths checked: `library/category-theory/abelian-categories.md` and `library/category-theory/abelian-categories-examples.md`.
- Assigned item scope: opened all `64` batch-owned item files on the current bytes (`55` A-page items and `9` B-page items).
- Dependency items opened for verification: `48`.

```text
cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense
cor-additive-categories-are-closed-under-passage-to-the-opposite
cor-equalizers-are-monic-and-coequalizers-are-epic
cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero
cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument
cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal
def-additive-category
def-additive-functor
def-dense-top
def-embedding-of-categories
def-equalizers-and-coequalizers
def-equivalence-and-adjoint-equivalence-of-categories
def-hausdorff-space
def-initial-terminal-and-zero-object
def-intersection-of-a-family-of-subobjects
def-kernels-and-cokernels-as-equalizers-and-coequalizers
def-left-exact-and-right-exact-functor
def-module-homomorphism-kernel-image-and-cokernel
def-monomorphism-and-epimorphism
def-opposite-category
def-preorder
def-subobject-and-quotient-object
def-topological-group
lem-q-and-irrationals-dense-r
prop-a-small-product-of-preadditive-categories-is-preadditive
prop-abelian-groups-are-z-modules
prop-additive-functors-and-natural-transformations-form-a-preadditive-category
prop-equivalences-preserve-reflect-and-create-limits-and-colimits
prop-modules-and-homomorphisms-form-category-rmod
prop-size-of-functor-categories
thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids
thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts
thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits
thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels
thm-biproduct-data-characterisation-without-addition
thm-first-isomorphism-theorem-modules
thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference
thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero
thm-limits-and-colimits-in-functor-categories-are-computed-pointwise
thm-localisation-of-modules-is-exact
thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence
thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation
thm-pullback-and-pushout-pasting
thm-rmod-is-complete-and-cocomplete
thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections
thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique
thm-third-isomorphism-theorem-modules
thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups
```

- External source sections opened independently through the web reader:
  `https://stacks.math.columbia.edu/tag/00ZX` (Definition 12.5.1, Lemmas 12.5.2, 12.5.4, 12.5.5, Example 12.5.6, Lemmas 12.5.11-12),
  `https://stacks.math.columbia.edu/tag/010N` (Lemma 12.7.2),
  `https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf` (§9.4-§9.5),
  `https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture10.pdf` (§10.4),
  `https://arxiv.org/pdf/1901.08591` (Theorems 2.3-2.5, 5.1, Corollary 7.17, and the additive-inverses argument around Theorem 2.11),
  and `https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf` (§1.4 and §1.6).

## Confirmed defects

1. `items/thm-every-monomorphism-is-the-kernel-of-its-cokernel.md:10,44-56`
   Disposition: repaired in the owned A-page item and synced into the batch manifest and proof contract.
   Severity: nonfatal.
   Evidence: the dual epimorphism half was invoked by passing to the opposite category without citing the earlier result that the opposite of an abelian category is abelian. I added the missing dependency, an explicit fact line, and the matching contract citation/derivation.

2. `items/thm-third-isomorphism-theorem-in-an-abelian-category.md:46-50`
   Disposition: repaired in the owned A-page item and synced into the proof contract.
   Severity: nonfatal.
   Evidence: step `1.2` used the first isomorphism theorem to identify `\operatorname{im}(q_C b)` with `B/C` after observing only that `q_C b` kills `C`. That omitted the needed kernel computation `c = \ker(q_C b)`. I inserted the universal-property argument through the cokernel `q_C`.

## Edits

- Patched `items/thm-every-monomorphism-is-the-kernel-of-its-cokernel.md`.
- Patched `items/thm-third-isomorphism-theorem-in-an-abelian-category.md`.
- Synced the new dependency in `research/frontier-21-batch-9.pages.json`.
- Synced the repaired proof records in `research/frontier-21-batch-9.proof-contracts.json`.
- Wrote this report.
- Wrote `research/frontier-21-reader-findings-9.json`.

## Page verdicts

- `library/category-theory/abelian-categories.md`: sufficient on the current bytes after the two repaired proof gaps.
- `library/category-theory/abelian-categories-examples.md`: sufficient on the current bytes.

## Verification

- `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-21-batch-9.pages.json`
  Result: `content-policy: 64 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-every-monomorphism-is-the-kernel-of-its-cokernel.md items/thm-third-isomorphism-theorem-in-an-abelian-category.md`
  Result: both changed items reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-every-monomorphism-is-the-kernel-of-its-cokernel.md items/thm-third-isomorphism-theorem-in-an-abelian-category.md`
  Result: `2 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-21-batch-9.proof-contracts.json --strict --items thm-every-monomorphism-is-the-kernel-of-its-cokernel,thm-third-isomorphism-theorem-in-an-abelian-category`
  Result: `proof-contract: 0 error(s), 0 warning(s), 2/2 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-9.proof-contracts.json --items-dir items`
  Result: `160 citation(s) over 53 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-21-batch-9.proof-contracts.json --items-dir items`
  Result: `424 rows over 1 contract file(s); 413 marked not_applicable`, with no contradicted dispositions.
- `node tools/rendercheck.mjs items/thm-every-monomorphism-is-the-kernel-of-its-cokernel.md items/thm-third-isomorphism-theorem-in-an-abelian-category.md library/category-theory/abelian-categories.md library/category-theory/abelian-categories-examples.md`
  Result: `OK — 4 file(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 5`
  Result: `OK`, with only the repository's standing `redundant-prereq` advisories.

## Blockers

- None.
