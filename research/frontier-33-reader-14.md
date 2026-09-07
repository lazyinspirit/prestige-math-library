# Frontier 33 — reader report, batch 14

## Scope opened

- Assigned A page: `library/lie-theory/category-o-finiteness-duality-and-blocks.md`.
- Assigned B page: `library/lie-theory/category-o-finiteness-duality-and-blocks-examples.md`.
- A items read: `def-bgg-category-o`, `lem-enveloping-algebra-is-left-and-right-noetherian`, `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `prop-equivalent-support-description-of-category-o`, `prop-verma-and-finite-dimensional-modules-lie-in-category-o`, `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `thm-simple-objects-of-category-o-are-highest-weight-modules`, `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`, `lem-the-center-has-finite-dimensional-image-on-an-o-object`, `def-generalized-central-character-subcategory-of-o`, `lem-generalized-central-character-submodules-are-direct-summands`, `thm-category-o-decomposes-by-generalized-central-character`, `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`, `thm-every-category-o-object-has-finite-length`, `prop-hom-spaces-in-category-o-are-finite-dimensional`, `def-restricted-dual-of-a-weight-module`, `lem-simple-highest-weight-modules-are-restricted-self-dual`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-standard-and-costandard-objects-in-category-o`, `prop-costandard-objects-have-simple-socles`, `def-integral-weyl-group-of-a-weight`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `lem-extensions-between-distinct-o-linkage-classes-split`, `lem-o-modules-split-across-separated-simple-classes`, `thm-central-character-summands-split-into-linkage-blocks`, `cor-restricted-duality-preserves-linkage-blocks`, `lem-verma-self-extensions-in-category-o-split`, `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`, `def-grothendieck-group-and-character-of-category-o`, and `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`.
- B items read: `ex-the-regular-integral-sl2-block-of-category-o`, `ex-a-generic-sl2-block-is-semisimple`, `ex-a-singular-a2-central-character-summand`, `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o`, `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`, `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`, `cex-category-o-is-not-extension-closed-in-all-g-modules`, and `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`.
- Opened direct published dependencies needed by these arguments: PBW and triangular decomposition; the Hilbert basis theorem; Verma construction, weights, universal property, simple quotient, and root-reflection embeddings; central characters and the Harish--Chandra dot-orbit criterion; strong linkage; Jordan--Hölder and module-category abelianness; the Chevalley anti-involution; Weyl/reflection, rho, and linkage conventions; and the Shapovalov irreducibility criterion. Same-batch dependencies were read as items above.
- Read the current manifest, coverage inventory, proof contract, source references, both page summaries, and the Step-6 pre-hash. All 39 current assigned item hashes match `research/frontier-33-step6-hash-14-pre.json`.

## Mathematics and citation review

The local-finiteness and finite-cone formulations retain finite generation in both directions; the proof correctly derives finite weight spaces only after the forward PBW argument. The qualified extension statement correctly requires the middle term to be a weight module. The central-image, generalized-eigenspace, finite-detector, and finite-length arguments preserve their character and weight-space hypotheses.

The Chevalley-twisted restricted dual preserves weights, not their negatives; its exactness and self-duality arguments are compatible with the stated anti-involution. The integral-reflection equivalence, splitting across separated simple classes, and block argument consistently use dot action and positive-integral reflection embeddings. The `sl_2` regular/nonintegral and singular `A_2` computations have the stated labels and boundary distinctions. The four counterexamples correctly isolate full versus restricted dual, finite generation, upward support, nonsemisimple Cartan action, and arbitrary tensor products.

Opened live source passages: Etingof, §§15.1 and 20.4 (pp.79--81, 103); Chen lectures 2, 6, and 8 (category O, finite length, and duality); Sakellaridis, §§2 and 6 (finite Verma flags, central-character decomposition, and $K_0$); and Humphreys, §§1.13 and 4.9 (finite length, $K_0$, and blocks). Their qualified statements agree with the current claims and locators. Contract inspection found 33 proof-bearing entries, each with cited facts, derivations, and all eight boundary rows; `proof-contract --strict` has no errors and citation fidelity found no absent quoted dependency text.

## Repairs made

None. No repairable mathematical, title, citation, contract, or A-page-prose defect was confirmed. No `verification.judge` record was changed.

## Uneditable finding

- `library/lie-theory/category-o-finiteness-duality-and-blocks-examples.md:3`: the double-quoted title contains literal `\u2014`. Repository policy treats a non-quote backslash inside such a scalar as a `yaml-escape` hard error. It is B-page frontmatter, outside the authorized repair scope, so it is recorded in `research/frontier-33-reader-findings-14.json` rather than repaired.

## Checks

- Focused precheck: 33 proof-bearing assigned items checked; 0 failing.
- Focused rendercheck: both assigned pages and all 39 assigned items checked; 41 files clean, including renderer-YAML and KaTeX parsing.
- Batch proof-contract strict check: 33/33 items, 0 errors; one nonfatal citation-distribution warning on `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` (not a false or unsupported claim).
- Batch citation fidelity: 119 citations over 33 authored proof-bearing items; no quote-not-found or widening candidate.
- Whole-repository `depcheck --quiet`: fails on six existing hard errors. One is the in-scope B-page title above; the other five are outside this batch (`yaml-escape` in two other B pages and four unrelated unresolved inline links).

## Page verdicts

| Page | Verdict |
| --- | --- |
| `category-o-finiteness-duality-and-blocks` | Pass: mathematics, dependencies, citations, proof contracts, summary, and rendering checked. |
| `category-o-finiteness-duality-and-blocks-examples` | Mathematics and rendering pass; blocked from a clean repository dependency check by the uneditable frontmatter policy violation at line 3. |

## Blocker

The B-page frontmatter title is an in-scope hard `depcheck` failure but cannot be changed under the reader's B-page restriction. No other uneditable mathematical or citation defect remains.
