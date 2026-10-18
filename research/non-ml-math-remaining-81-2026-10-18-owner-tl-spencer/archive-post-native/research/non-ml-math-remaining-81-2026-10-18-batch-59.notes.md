# Batch 59 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Pair: `temperley-lieb-semisimplicity-and-generic-structure` and its examples page  
Scheduling input: `4836a2dc692b41d7ae72da9e8835da8103ab7bed3d61c4896f751a14ba7c829d`  
Batch dependency level: 3; scheduled prerequisite batch: 58.

## Scope and plan reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch assignment, the owner-authoring direction, the current plan, `plan-spec.json`, the run dependency-level input, the existing batch evidence, and the complete PA-28 design section in `plan-physics-algebras-track.md` before authoring. The controlling owner direction takes precedence over stale task/design wording.

PA-28 and the matching `plan-spec.json` page both specify this A/B pair, category, page order, and navigation requirements, with empty initial item inventories. There is no substantive conflict between those records. The batch task’s two page requirements remain navigation; the Hecke Markov trace and localized quotient are not used as logical suppliers for the Temperley–Lieb trace. The current published quotient definition explicitly leaves trace descent unproved, so the trace is defined directly by diagram closure here.

The design requires (i) the link-state Gram determinant and complex semisimplicity classification, (ii) distinct treatment of the order-one, order-two, and nontrivial order-at-least-three cases, including the first-root trace boundary, and (iii) Spencer’s arbitrary-field projector criterion with characteristic-zero and field-versus-ring caveats. All are represented. The order-two claim has the necessary rank-zero endpoint refinement: at `n=0`, `TL_0(C,0)=C` is semisimple, so the exact statement is “`n=0` or `n` odd,” rather than the positive-rank odd/even slogan. The parameter definition also separates `kappa=ord(q^2)` from recurrence quantum characteristic: at complex `q=±1`, `kappa=1` while the recurrence quantum characteristic is infinite. The complex classification uses the former; Spencer’s field criterion uses the latter.

## Inventory, dependencies, and levels

The manifest contains 11 A-page items and 3 B-page examples. Direct dependencies are recorded on every item in `batch-59.pages.json`; local dependencies are acyclic and item levels are derived from in-run suppliers:

- Level 0: `def-temperley-lieb-quantum-integers-and-quantum-characteristic`.
- Level 1: `def-temperley-lieb-normalized-markov-trace-by-closure`.
- Level 3: `lem-temperley-lieb-closure-trace-is-cyclic-and-markov`, `def-temperley-lieb-jones-wenzl-recursion`, `lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective`.
- Level 4: `lem-temperley-lieb-jones-wenzl-recursion-properties`, `ex-temperley-lieb-order-three-trace-boundary`.
- Level 5: `ex-temperley-lieb-jones-wenzl-at-loop-two`.
- Level 7: `lem-temperley-lieb-link-state-gram-determinant`, `lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c`, `thm-temperley-lieb-spencer-jones-wenzl-existence-criterion` (escalated; not a proved supplier).
- Level 8: `thm-temperley-lieb-complex-semisimplicity-classification`, `ex-temperley-lieb-zero-loop-parity-ranks-three-four`.
- Level 9: `thm-temperley-lieb-trace-degenerates-at-first-root-boundary`.

The 25 declared in-run page/item edges and current supplier-body inspections are recorded in `batch-59.cross-batch-dependencies.json`. The run’s current Batch 58 link-state module, dimension, form-invariance, restriction, cellular-basis, and simple-quotient bodies were read; the current Batch 57 diagram-category, category-law, generator-relation, and generator-spanning bodies were also read. These are interface verifications only and confer no independent acceptance. The Hecke page is a published navigation prerequisite outside the run and is not an in-run ledger edge.

## Sources and dispositions

The source coverage records URLs, locators, supported items, every harvested result’s `included`/`inline` disposition, full-text fetch stamps, and read extents. Five distinct full texts were read, including a complete book-length manuscript, meeting the two-independent-treatments-per-A-page expectation:

- Ridout–Saint-Aubin, *Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra*, complete article; the full determinant derivation and equations (4.6)–(4.20), Corollary 4.8, and Proposition 4.9 were inspected directly.
- Mathas, *Hecke Algebras and Schur Algebras of the Symmetric Group*, complete 79-page manuscript, Chapter 2 §§1–2 and Theorem 2.13 proof.
- Spencer, *The Modular Temperley–Lieb Algebra*, complete article body; the quantum-characteristic conventions, Theorems 8.1–8.4, and §10.3 were read.
- Iohara–Lehrer–Zhang, *The Jones Quotients of the Temperley–Lieb Algebras*, §1.2 and §2.
- Chen, *The Temperley–Lieb Categories and Skein Modules*, §2.3, Theorem 2.3.2 and Proposition 2.3.6, plus the closure-trace sections.

`source-fetch-check --stamp` returned `8/8 source(s) fetch-verified (0 newly stamped)` and `8/8 source(s) resolved (0 documented drops; not fetch stamps)`. These are eight page-level records for five distinct full texts. There were no retrieval failures, retries, drops, or invented reading records. During carrier reconciliation, an earlier unverified bibliography entry for Enyang–Goodman, “Cellular bases for algebras with a Jones basic construction,” §6.4.2 (`https://arxiv.org/pdf/1106.5339`) was removed from the Gram item because no read/fetch record existed and it was not needed; no fetch attempt was made and it is not marked dropped. The actual Batch 58 cellular supplier was inspected, and the local Gram proof still establishes the determinant argument. Every source URL retained by the 14 authored item records is represented in the coverage evidence. The B page’s example-specific source dispositions reuse these same stamped full texts. The authoring uses no finite-check result as a substitute for a proof; the three explicit finite example calculations are listed in the proof contracts.

## Mathematical review and escalation

The Gram determinant proof was checked against the complete Ridout–Saint-Aubin block derivation and expanded locally: the four refined link-state types, orthogonalizing block equations, scalar recurrence, base case `n=2p`, determinant recurrence, exponent comparison, and rational-function continuation are all stated. The complex classification separates `q^2=1`, `q^2=-1` (including `n=0`), `ell>=3`, and infinite order. The normalized closure trace is proved directly by cyclic closure and loop counts. The Jones–Wenzl induction verifies idempotence, both annihilation sides, primitivity via the one-dimensional corner, and the normalized trace.

`thm-temperley-lieb-spencer-jones-wenzl-existence-criterion` retains the full field-scope statement and its positive-characteristic digit branch, but has no supplied proof and is not a logical supplier. The local bridge from projectivity of the trivial module to a normalized annihilating idempotent is proved. The unresolved prerequisite is the substantial Spencer composition-factor support classification (including the truncation/linkage/morphism and multiplicity arguments) and its reduction to the digit cases. Proposed A-page intermediate supplier: `thm-temperley-lieb-spencer-trivial-simple-support-classification`. Affected claim: the entire arbitrary-field iff criterion. The criterion item is escalated rather than weakened or omitted.

The B-page order-three example includes a TikZ diagram of the rank-two generator and its exterior closure; the text specifies which arcs and closure connections are drawn. Its algebraic verification does not rely on the picture.

## Scoped-check record

Final check commands and their actual outputs are recorded in `batch-59.source-evidence.json`. The authored scope passed precheck (10 proof-bearing items, zero failures), proof-layout (14 items, 42 steps, zero defects), rendercheck (16 files, zero defects), strict proof-contract validation (14/14, zero errors/warnings), focused depcheck (14 items, prerequisite cycles pass), extcheck, fwdcheck, coverage-checklist (2 pages, 33 harvested results, zero errors/warnings), and source-fetch check (8/8). A scoped dependency calculation followed the 14 batch items through 26 in-run items, checked frontmatter/manifest dependencies and labels, and found zero cycles or level mismatches.

The global item dependency check exits 1 with 129 unrelated errors, including 10 empty scaffold inventories and 101 stale level labels; the batch-59 closure is clean in the scoped calculation above. The global batch dependency check exits 1 while parsing malformed YAML in unrelated `items/def-cost-constrained-dmc-code-and-capacity.md` (unquoted colon in the title at line 18). Global proof-contract coverage exits 1 because the unrelated page `finite-blocklength-and-reliability` has an empty or invalid frontier inventory. The run-wide Step 1 check also remains open elsewhere (1,402 items total, 881 currently ready); a scoped hash-bound check confirms 13 Batch 59 `ready` records and the intended Spencer escalation, with no stale Batch 59 records. These shared run/corpus defects were left to the owner; no shared plan, engine state, published content, or verdict was edited.
