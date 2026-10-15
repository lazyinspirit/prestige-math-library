# Batch 2 authoring notes — Complex Norms and Realification

Run: `quantum-prerequisites-4-2026-10-15` · role: beta · batch: 2 · pair: `complex-norms-and-realification`.

## Inventory and dependency order

The controlling design at `research/plan-quantum-prerequisite-completion-track.md` L7 and the owner direction require six A items and one genuine B example. The B example is `N(x+iy)=|x|+2|y|`, with `N(1)=1` and `N(i)=2`. The proposal-only `lem-complex-normed-subspace-realifies-to-real-normed-subspace` belongs to the separately assigned pair and is excluded here.

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-complex-norm-and-complex-normed-space` | none | 0 |
| `lem-complex-modulus-of-real-embedding-equals-real-absolute-value` | none | 0 |
| `lem-complex-norm-realification-is-a-real-norm` | complex norm definition; real-embedding modulus lemma | 1 |
| `lem-complex-coordinate-l1-is-a-norm` | complex norm definition | 1 |
| `def-complex-normed-subspace` | complex norm definition | 1 |
| `def-equivalent-complex-norms` | complex norm definition | 1 |
| `ex-anisotropic-real-norm-on-c` (B) | complex norm definition | 1 |

Complete direct dependency arrays and labels are in `research/quantum-prerequisites-4-2026-10-15-batch-2.pages.json`; all seven arrays agree with the assigned Markdown carriers. Three dependencies supplement the design's lists for explicit proof inputs: `def-function-space` gives pointwise operations and the zero-dimensional function space on `C^n`; `lem-of-square-positive` treats the nonzero radicand in the modulus restriction; `lem-of-zero-mult` treats its zero-radicand case. The dependency graph is acyclic. No proof uses Choice. No direct or transitive supplier required by these items is unresolved.

The task captured scheduling input `7a9fade1c2973db63bbee55b192c95d09e7ce7b6ed822c4443021691462ffe49`: batch 2 is level 0 with no incoming batch, while batch 4 is a downstream consumer requiring batch 2. The assigned batch-2 cross-batch dependency input is empty. The coverage file preserves its earlier `input_sha256` value `a4000ec66183e89bce5ad6b3d32dd52a79bf3050274d46d387c9b9f56fda6d6f` from its source-harvest snapshot. After the explicit `lem-of-zero-mult` dependency was added, the current run-level artifact records input hash `d9174154aaaa8f6f5f86c2cdb144b99a242cff567340bb268e8e03f1478e04b6`; its final `check` passes with the same batch levels and edges.

## Plan comparison and dispositions

- `plan-spec.json` and the current canonical page rows place A at `248.1`, B at `248.11`, and both in `functional-analysis`, with the same two required pages. The design's `248.10999999999999` B order is a floating-point serialization artifact; the canonical `248.11` is used.
- The canonical plan rows have empty item arrays because authoring was outstanding. The assigned scaffold manifest now holds six A items and the one required B example; the Markdown pages carry the same inventory. Both pages have fewer than 100 items.
- The proposal-only norms directory contains seven proposed suppliers because it also includes the later complex-subspace-realification pair. Only the six A items named for this pair were used; proposal checks and statuses are not acceptance or readiness evidence.
- `def-function-space`, `lem-of-square-positive`, and `lem-of-zero-mult` are additional declared inputs where the controlling design lists fewer dependencies. Their use is recorded above; the other dependencies follow the controlling design.
- The proposal's complex-norm definition also added a derived nonnegativity explanation and induced-metric claim. The controlling design calls for the three norm clauses as a definition, so this item keeps that interface; the assigned realification lemma states and proves the induced-metric identity. Nonnegativity is not added as an extra axiom.

## Supplier and source inspection

The required pages are present and published: `complexification-realification-and-real-structures` supplies realification by restriction of scalars, and `rn-as-a-normed-space` contains the current published real norm definition with its owner-recorded repair. I inspected the actual direct supplier bodies and proofs used by the six A items and example, including `def-realification-of-a-complex-vector-space`, `def-norm-and-normed-space`, `def-vector-space`, `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`, `def-abs-value`, `lem-of-abs-value`, `lem-of-square-positive`, `lem-of-zero-mult`, `lem-of-triangle-inequality`, `thm-of-square-roots`, `def-finite-sum`, `lem-finite-sum-laws`, `def-function-space`, `def-linear-subspace`, `def-complete-ordered-field`, and the ordered-field positivity/order suppliers used in the example. Their hypotheses match the authored uses: complex modulus is nonnegative, definite, multiplicative and subadditive; realification keeps the set and addition while restricting scalar multiplication along the canonical real embedding; finite sums include the empty case; and `C^0` is the singleton zero space.

Two independent full-text treatments were inspected for the A page:

1. Tomasz Kochanek, [*Functional analysis*, Lecture 1](https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf), complete five-page PDF. Definition 1.1 states the norm axioms over `K=R` or `C`; Example 1.2 gives finite-coordinate norms; Definition 1.5 gives equivalence through positive constants. The complete extracted text is retained at `research/quantum-build-60-2026-10-15-owner/norms/sources/lecture1.txt`.
2. M. Winklmeier, [*Functional Analysis* lecture notes](https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf), complete 140-page PDF. I inspected Chapter 1 §1.2: Definition 1.10 (printed p. 11), Example 1.15(i) (p. 13), Definition 1.17 and Theorem 1.18 (p. 17), and Theorem 1.20 (pp. 17–18). Its norm definition, coordinate example, and equivalence definition support the corresponding interfaces. The local proofs cover `n=0`, realification, and the complex normed-subspace restriction.

The source URLs, locators, supported items, dispositions, fetch hashes and recovery history are in `research/quantum-prerequisites-4-2026-10-15-batch-2.coverage.json`. Searches used to select the second treatment were `site:math.berkeley.edu functional analysis lecture notes normed spaces complex vector space norm definition pdf`, `university functional analysis lecture notes complex normed space definition equivalent norms pdf`, `Functional Analysis Kreyszig normed spaces complex norm definition pdf open textbook`, and `complex coordinate l1 norm C^n complex modulus sum norm lecture notes`. Berkeley's full notes were screened but not used because the inspected section did not cover the coordinate-sum and equivalent-norm interfaces. No retrieval failure or source drop occurred. The final scoped `source-fetch-check --stamp` result is 2/2 existing full-text stamps verified, 0 newly stamped; proposal stamps were not reused.

## Proof and evidence corrections

- The real-modulus proof now establishes `r^2\ge0` before applying the square-root definition and explicitly treats `r=0`; `lem-of-square-positive` covers nonzero `r` and `lem-of-zero-mult` covers zero.
- The coordinate-sum proof spells out both directions of separation, the empty sum, and the singleton `C^0` case.
- The anisotropic example now justifies positivity of a positive summand plus a nonnegative one, and derives weak-order addition from the cited strict-order rules by equality/strict cases. It verifies the real norm axioms and the complex-homogeneity counterexample.
- The B example explicitly tests the same function on two scalar structures: it is a norm on the realification, while the failure of complex homogeneity is evaluated on the original complex vector space.
- Contracts use the finished proof step numbers, exact supplier excerpts, boundary cases, and no inapplicable finite smoke test. The registered finite-smoke checks contain no check for this example.

## Final scoped checks and readiness

The current items and pages remain draft. All seven readiness records are `ready`, owner attribution is false, and each record binds its final item hash and examined direct dependencies. These records are not independent mathematical approval.

- Source fetch: pass, 2/2 sources verified, 0 new stamps.
- Item dependency levels: pass, 18 items across 8 pages, maximum level 4.
- Batch dependency levels: pass, 4 batches, maximum level 1; batch 2 is level 0 and batch 4 level 1.
- Precheck: 7 files, 5 proof-bearing checks, 0 failures; both definition-only items are not applicable.
- Rendercheck: 9 scoped item/page files, 0 errors and 0 warnings.
- Proof layout: 7 items, 17 steps, 0 defects.
- Proof contract: strict local contract check passes for all 7 items, with no warnings.
- Content policy: pass for the 7-item batch manifest, 0 errors and 0 warnings. An initial run flagged applied `\iota` notation in two facts; replacing it with the explicitly named canonical-image notation cleared both findings.
- Manifest consistency: both page inventories match their Markdown pages, and all 7 manifest dependency arrays and levels match the item frontmatter.
- Scoped dependency, forward-reference, and active-content checks: `depcheck` passes for the seven items and their 280-item/63-page prerequisite closure; `fwdcheck` reports no open or closed forward references; `extcheck` reports no unproved items or consequences.
- Run-wide proof-contract coverage is still incomplete for other assigned pairs. At check time it reported missing contract entries for `def-complex-path-polygonal-length-and-rectifiability`, `def-measurable-pointwise-extended-real-product`, `ex-complex-coordinate-and-path-transport`, `ex-complex-line-realification-basis-in-c2`, `ex-pointwise-extended-real-function-product-cases`, `lem-complex-normed-subspace-realifies-to-real-normed-subspace`, `thm-complex-coordinate-isometry-and-topology-transport`, `thm-complex-coordinate-map-preserves-real-scalar-multiplication`, `thm-complex-coordinate-map-preserves-real-total-differentiability`, `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed`, and `thm-complex-path-length-invariant-under-monotone-reparametrization`. These are outside batch 2; no other pair's files were edited.
