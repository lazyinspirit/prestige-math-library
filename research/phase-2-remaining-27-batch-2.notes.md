# Phase 2 remaining 27 — batch 2 scaffold notes

## Scope and outcome

Owned only the two dispatched pairs. The completed manifest contains 41 items:

- `compact-operators-and-riesz-schauder-theory`: 25 A items and 7 B items.
- `square-integrable-kernels-and-hilbert-schmidt-compactness`: the binding 5 A items and 4 B items, with the exact owner-directed IDs.

All 41 items have hash-current Step-1 `ready` records after the owner-authorized repair. No item was weakened, no published item or page was edited, and no engine state, shared plan, or verdict was changed. The whole run remains live and its unrelated readiness totals are not used to certify this batch.

## Direction and design control

`research/phase-2-remaining-27-owner-authoring-direction.md` was read first and treated as binding.

For `compact-operators-and-riesz-schauder-theory`, the complete FA-15 design in `research/plan-functional-analysis-track.md` controls the mathematics because it is the category's explicit page design and supplies the theorem order and proof route. The other two cited locations are constraints, not rival designs:

- `research/plan-differential-topology-track.md` §12.2 only names this page as a prerequisite for later Banach differential calculus. It creates an outgoing consumer and adds no compact-operator content.
- `research/plan-measure-theory-track.md` §21b says an earlier weak-mixing page must not depend on this later page. It is a directionality warning and adds no supplier result.

The owner direction modifies FA-15 in binding ways: it inserts the four local prerequisites `lem-linear-combinations-of-compact-operators-are-compact`, `lem-neumann-series-and-small-perturbations-of-bounded-inverses`, `def-spectrum-and-resolvent-of-a-bounded-operator`, and `lem-a-compact-remainder-estimate-forces-closed-range`; it keeps the norm-closure theorem's Banach-target hypothesis; and it removes `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two` from the compact B page and rehomes that ID to the new square-kernel B page. No B-page prerequisite edge was introduced; within the square-kernel B page, the discontinuous-kernel example deliberately reuses the immediately preceding product-kernel example.

For `square-integrable-kernels-and-hilbert-schmidt-compactness`, the owner direction and FA §14.1/§14.5 control. The manifest preserves the five-item proof order: definition, basis independence, Hilbert–Schmidt compactness, sigma-finite rectangle density, then the kernel theorem. The proof uses arbitrary-index finite-subset suprema and performs the separable-support reduction before countable Parseval. It does not use the later singular-value/SVD page.

## Plan comparison and conflicts

The page metadata and `requires` arrays match the four current `research/plan-spec.json` entries exactly. The current plan controls these conflicts with stale design text:

- The old FA-15 design listed many earlier FA pages and an Ascoli page directly. The current plan requires only `orthonormal-bases-parseval-and-fourier-series`; its transitive closure reaches the needed earlier FA and complex-L2 material. The continuous-kernel B example uses the already-published Ascoli result as a transitive backward dependency rather than changing page requirements.
- The old FA-15 B inventory contained the Hilbert–Schmidt kernel example. The binding direction/current pair split moves it to `square-integrable-kernels-and-hilbert-schmidt-compactness-examples`.
- The four owned plan item arrays remain intentionally empty before owner/operator reconciliation, while this Step-1 manifest supplies the reviewed item lists. The dry-run splice recognizes Batch 2 as four pages and 41 new items. The shared plan was not edited.

## Dependency and mathematical audit

Published prerequisite statements and relevant proofs were inspected, including metric compactness equivalences, closed-range quotient estimates, bounded inverse, Banach transposes and bidual maps, finite-dimensional complement and compact-ball results, product measure/Fubini–Tonelli, Lp completeness/density, and the generating rectangle algebra.

Planned batch-1 suppliers were read from the current manifest and treated as planned, not published. The exact cross-batch uses are recorded in `research/phase-2-remaining-27-batch-2.cross-batch-dependencies.json` and merged by the required ledger refresh. In particular, the square-kernel theorem uses the batch-1 first-variable-linear complex L2 convention and the arbitrary-index Parseval convention.

Unsafe dependency shortcuts were rejected:

- Published `lem-product-rectangle-kernels-are-dense-in-complex-l-two` is mathematically relevant but is homed on `weak-mixing-and-the-chacon-transformation`, outside the current page-requirement closure, and covers only finite factors. The new local `lem-product-rectangle-kernels-are-dense-in-product-l-two` instead proves the generating-algebra approximation and sigma-finite exhaustion directly from earlier product-measure/Lp suppliers.
- Planned `thm-existence-of-a-maximal-orthonormal-family` currently depends on `thm-choice-implies-dependent-implies-countable-choice`, whose page lies outside batch 1's declared requirement closure. Because that is a defective actual prerequisite path, the kernel theorem does not consume it. It declares `def-axiom-of-choice` and `thm-zorn` and performs the orthonormal extension directly inside its proof strategy.

Choice is now exact at every load-bearing step. Sequential compactness, normalized quotient selections, ascent/descent and compact-remainder arguments state DC; metric compactness, norm closure, approximability, Parseval and Hilbert–Schmidt compactness state AC_omega; Schauder, weak compactness, Fredholm splitting/alternative/Atkinson/index results, sigma-finite rectangle density and the kernel theorem state full AC. Every stronger consumer directly declares the relevant AC=>DC=>AC_omega bridge. The square-kernel B consumers propagate the full-AC kernel theorem explicitly. Foundations obtains no path to `deferred-set-theory-beyond-choice` from these pages.

Hilbert–Schmidt compactness now expands vectors by the arbitrary-index Fourier finite-subset net and passes that net through bounded `T`; finite scalar Cauchy–Schwarz controls the tail. It never asserts that the family `(Te)` is orthogonal. The cross-batch ledger names `thm-hilbert-space-fourier-expansion` as the exact supplier. The sigma-finite kernel theorem separately performs its rectangle-density and separable-support reductions before countable Parseval.

## Source inspection and dispositions

The coverage file records exact locators and a disposition for every harvested heading. Complete relevant arguments were inspected from:

- Bühler–Salamon, *Functional Analysis*, §§4.2–4.4 and §5.2.3, printed pp. 183–198 and 224–226.
- Teschl, *Topics in Real and Functional Analysis*, §§3.1, 3.6, 6.5, and 6.6, printed pp. 69–72, 93–96, and 183–192.
- Roe, *Lectures on Analysis*, Lecture 13, printed pp. 67–68, through Propositions 13.5–13.6.

The source PDFs were fetched, converted to text locally, and the complete relevant proof ranges inspected. Author-hosted Teschl/ETH PDF endpoints were also searched, but direct recovery returned 404/403 in this environment; the already successful full-text university mirrors were retained. This was not a five-retry drop and no `source_resolution` waiver was used. Roe is author-hosted at Penn State. `source-fetch-check --stamp` verified all four active coverage entries.

## Checks

- `node tools/coverage-checklist.mjs --require-destination research/phase-2-remaining-27-batch-2.coverage.json`: PASS — 2 pages, 46 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-*.pages.json`: PASS at recertification — 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-remaining-27-batch-*.pages.json`: PASS at recertification — 0 errors, 0 warnings.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --all --dry-run`: PASS; Batch 2 is four pages and 41 new items.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: PASS — no item-level cycle, forward dependency, B-page dependency, or unresolved ID among pages carrying item lists; existing empty-page and redundant-prerequisite notices remain informational.
- `node tools/fwdcheck.mjs`: PASS — all recorded forward references are declared, strictly forward, closed by planned pages, and acyclic.
- `node tools/extcheck.mjs`: PASS — recorded-not-proved items and their consumers obey policy; the listed published warnings are inherited.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-2.coverage.json`: PASS — 4/4 fetch-verified, 0 drops.
- `node tools/url-sweep.mjs --coverage research/phase-2-remaining-27-batch-2.coverage.json --out /tmp/phase-2-remaining-27-batch-2-url-liveness.json --recover --fail-on-dead`: PASS — 3/3 distinct URLs live, 0 failed.
- `node tools/source-backing.mjs --coverage research/phase-2-remaining-27-batch-2.coverage.json --liveness /tmp/phase-2-remaining-27-batch-2-url-liveness.json --require-verified`: PASS — 26 authored included/inline results remain backed.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`: PASS.
- Canonical Step-1 check: PASS — 41/41 Batch 2 receipts are hash-current `ready`, with no missing, stale, or escalated owned item.

The URL-liveness receipt used here is temporary and batch-local; the owner/operator can later replace it with the unified run receipt without changing any source or disposition.
