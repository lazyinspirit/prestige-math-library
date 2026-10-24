# Step 3a reader report — batch 70

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `70`

## Opened inventory

Pages reviewed:

- `qftx-equivariant-pseudodifferential-calculus` — `library/quantum-field-theory-mathematics/qftx-equivariant-pseudodifferential-calculus.md`
- `qftx-equivariant-pseudodifferential-calculus-examples` — `library/quantum-field-theory-mathematics/qftx-equivariant-pseudodifferential-calculus-examples.md`

Assigned items reviewed in dependency order:

1. `lem-equivariant-finite-chart-symbol-calculus`
2. `lem-equivariant-controlled-symbol-realization`
3. `lem-equivariant-associated-symbol-product-index`
4. `lem-equivariant-compact-bott-index-normalization`
5. `ex-equivariant-fourier-hardy-symbol-index`

The direct mathematical suppliers were opened at their current statements: `def-axiom-of-choice`, `thm-plancherel`, `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`, `thm-atkinson`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `cor-normalized-haar-probability-on-a-compact-group`, `thm-bounded-inverse-theorem`, `thm-uniform-peter-weyl-density`, `thm-de-rham-cohomology-of-spheres`, `thm-general-stokes-theorem`, and `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`. I also opened the representative-function definition and its self-adjoint translation-invariant algebra lemma used through the Peter–Weyl density supplier. Their stated hypotheses match the uses in the assigned proofs; full AC in the applicable items covers the weaker choice assumptions in the cited analysis suppliers.

## Review and repairs

The finite-chart calculus proof supplies its Fourier, amplitude, coordinate-change, composition, parametrix, Sobolev, compactness, closure, averaging, and Fredholm arguments locally. The controlled-realization proof supplies the compact-support smoothing and stabilization, homotopy invariance, controlled excision, and elliptic-complex Hodge argument. The associated-product proof gives the positive-order cone cutoff estimate in every integer Sobolev level, constructs the compatible lifts, proves their exact commutations, checks the joint-symbol homotopy, and derives the kernel and index formula from the vertical kernels. I found no unsupported inference that changes any of these conclusions.

The Bott-normalization proof's root sign agrees with the pinned Hopf-line statement and the Fourier–Hardy example. The line and rotation-plane calculations, external-product step, character detection on every orthogonal component, and orientation convention are consistent. The example's Fourier shift has zero kernel and constant cokernel, and its two-ray symbol and rectangle winding have the asserted sign. Its TikZ diagram labels the rectangle boundary consistently with the proof: the top edge is traversed right-to-left and carries `exp(i phi(x))`; the other three edges carry `1`. The winding and class argument do not rely on the diagram.

I repaired definition order in the two affected in-flight Statements, without changing any claim or proof:

- In `lem-equivariant-compact-bott-index-normalization`, the compact-support class and representation-ring conventions now precede their use. The orthogonal group, exterior multiplication, controlled realization condition, and Hopf-line convention are stated explicitly before the corresponding claims.
- In `ex-equivariant-fourier-hardy-symbol-index`, the relative group is defined before the class `b` is named; the clutching and controlled-realization conventions are stated before their use.

The direct consumer of the Bott lemma, `lem-equivariant-symbol-index-comparison` in batch 71, and its downstream consumer `thm-equivariant-index-character-formula` were checked at their uses of the orthogonal Bott normalization. Both continue to use the same unchanged claim. No consumer repair was needed. No direct item consumer of the Fourier–Hardy example was found. The batch-70 proof-contract derivations, citations, and dependency declarations remain accurate because no proof step, premise, or claim changed. Neither edited item had a `verification.judge` record to remove.

Required post-edit commands:

- `reflow.mts` on both changed items: unchanged.
- `precheck.mts` on both changed items: both passed.
- One batched `proof-layout.mjs` invocation on both changed items: 2 items, 14 steps, 0 defects.

No other edits were made. No TikZ repair was needed.

## Page verdicts

- `qftx-equivariant-pseudodifferential-calculus`: **pass**. The page is frontmatter-only, preserves its draft status and `compact-v1` layout, and places exactly its four assigned A-page items. Its prerequisite list is present and the item order matches the supplier-before-consumer chain.
- `qftx-equivariant-pseudodifferential-calculus-examples`: **pass**. The page is frontmatter-only, preserves its draft status and `compact-v1` layout, and places exactly its assigned example. Its sole page prerequisite is the A page.

## Source checks, unresolved defects, and blocker

I downloaded and visually inspected the primary [Atiyah–Singer I scan](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf) at printed pp. 499–500 (Lemma 3.2), pp. 505–508 (Proposition 4.4 and Lemma 4.7), pp. 525–526 (the Fourier–Hardy operator and rectangle sign), and pp. 527–529 (the multiplicative axiom). These passages support the source locators and conventions used by the assigned items; the detailed local arguments, rather than an unproved appeal to the paper, close the reviewed steps. I did not independently reread the cited [Haller lecture notes](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf) sections; they are supplementary references, and no remaining proof step depends on them as an unstated premise.

No confirmed defect remains unedited in batch 70. No blocker remains.
