# Phase 2 remaining 27 — Step 3a scope review: square-integrable kernels

Run: `phase-2-remaining-27`
Dispatch: `step3a-pair-square-integrable-kernels-and-hilbert-schmidt-compactness-a9d60bfcdaf04cc4`
Batches: 2 (both pages)

Scope review only: this report decides scope and records no item approval and
no owner decision.

## Pair reviewed

| page | kind | planned items | decision |
| --- | --- | ---: | --- |
| `square-integrable-kernels-and-hilbert-schmidt-compactness` | A | 5 | **sufficient** |
| `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` | B | 4 | companion, covered by the A decision |

A inventory in page order: `def-hilbert-schmidt-operator`,
`thm-hilbert-schmidt-norm-is-basis-independent`,
`thm-hilbert-schmidt-operators-are-compact`,
`lem-product-rectangle-kernels-are-dense-in-product-l-two`,
`thm-l-two-kernels-give-hilbert-schmidt-operators`.
B inventory in page order: `ex-square-integrable-separable-product-kernel`,
`ex-square-integrable-kernel-without-continuous-representative`,
`ex-square-integrable-kernel-finite-rank-truncations`,
`ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two`.

## Evidence reviewed

- Current artifacts: `research/phase-2-remaining-27-batch-2.pages.json` (both
  pages, plus the sibling `compact-operators-and-riesz-schauder-theory` pair the
  A page requires in-batch), the plan-spec entries (orders 288.0752/288.0754,
  exact `requires` arrays), the scope ledger, the drift evidence and
  `research/phase-2-remaining-27-alpha-step1-drift.md` (`no-drift` for this A
  page), the batch-2 scaffold notes, the batch-2 coverage record, and the
  cross-batch dependency edges into batches 3 and 12 plus the in-batch page
  edges.
- Binding prose: `research/plan-functional-analysis-track.md` §14.1 (page table),
  §14.4 (FA-15/FA-16 repair bullets, including the rehoming of
  `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two` with the explicit
  "do not add a B-to-B page edge" rule), and §14.5 (the square-kernel A items
  1–5, B items 1–4 and their source paragraph). The owner direction
  `research/phase-2-remaining-27-owner-authoring-direction.md` reproduces both
  exact inventories; the manifest matches it item-for-item in IDs, kinds and
  order. No owner Step-3a record exists for this run, so nothing overrides
  those documents for this pair.
- Source coverage: two independent primary treatments, both fetch-verified —
  G. Teschl, *Topics in Real and Functional Analysis*, §3.6, printed pp. 93–96,
  and J. Roe, *Lectures on Analysis*, Lecture 13, printed pp. 67–68
  (Definition 13.1 through Proposition 13.6). I re-downloaded both PDFs and
  reproduced the recorded fetch stamps exactly (Teschl: 2 619 066 bytes,
  sha256_16 `d172dae775f1274f`, 563 pages; Roe: 804 056 bytes, sha256_16
  `48b6e5fc820e537f`, 131 pages) and read the complete harvested ranges. Every
  heading the coverage records exists at the recorded locator.
- Role consumers: the page edge `compact-self-adjoint-hilbert-schmidt-and-
  trace-class-operators` (batch 3) and its item edges
  (`def-trace-of-a-trace-class-operator`,
  `thm-hilbert-schmidt-operators-form-a-two-sided-ideal`,
  `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators`,
  `rem-schatten-p-classes`, `ex-diagonal-schatten-class-criteria-on-ell-two`,
  `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`,
  `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent`), and the
  batch-12 Peter–Weyl item `lem-continuous-convolution-operators-are-hilbert-
  schmidt-and-compact`, which names the kernel theorem and the compactness
  theorem as its exact suppliers.
- Checks re-run for this review: `manifest-deps` on the batch-2 manifest
  (41 items, 0 errors) and `coverage-checklist --require-destination` on the
  batch-2 coverage (2 pages, 46 harvested results, 0 errors, 0 warnings).

## Why the scope is sufficient

The intended subject is the Hilbert–Schmidt core plus the square-integrable
kernel operator, and the planned inventory covers every part of it that the
pair's role uses: a basis-relative definition with the finite-subset-supremum
convention for arbitrary index sets; basis independence (hence well-defined
membership and value) proved by Parseval and adjunction rather than by the
later singular-value theory; the compactness theorem with the explicit
finite-rank tail estimate; density of rectangle kernels in the product L²
space for sigma-finite factors, which is the only genuinely new measure-
theoretic input; and the kernel theorem with a.e. section well-definedness,
representative independence, the operator bound, the exact Hilbert–Schmidt
norm, and the separable-support/sigma-finite reductions performed locally.
The four B items cover the rehomed compactness example and three diagnostic
kernels (exact rank-one product kernel, a square-integrable kernel with no
continuous representative, and diagonal finite-rank truncations with both
Hilbert–Schmidt and operator-norm truncation errors on a sigma-finite
counting-measure product). That is the full interface its consumers need, and
both consumer families were checked item-by-item.

The deliberately excluded material is owned elsewhere and does not leave the
pair short: trace-class definitions and results are deferred to the in-run
batch-3 page `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`
(`def-trace-class-operator` onward, proofs self-contained there); the
Hilbert–Schmidt triangle inequality and ideal estimates are covered by that
page's `thm-hilbert-schmidt-operators-form-a-two-sided-ideal`, which is
authored locally from this page's definition and basis-independence theorem; and
Roe's converse kernel representation (Proposition 13.6) is a genuine
clarification of the same subject but is not claimed by the binding design and
is not used by any declared consumer edge, so its omission does not affect the
pair's role. Nothing published in this pair's closure was found defective.

## Observations and residual uncertainty (do not change the decision)

- The Roe harvest lists Definition 13.1, Lemma 13.2, the matrix-coefficient
  invariance calculation, Exercise 13.4, and Propositions 13.5–13.6, but not
  Proposition 13.3 (Hilbert–Schmidt operators form a Banach/Hilbert space and
  a two-sided ideal). Its ideal estimate is absorbed in-run by batch 3's ideal
  theorem as noted above; its completeness clause is not planned anywhere in
  this run. This is a harvest-record completeness note for the Step-5 reader,
  not a scope gap for this pair's subject or consumers.
- Locator nit: Proposition 13.6 opens on printed p. 69, not p. 68; the coverage
  range endpoint "through Proposition 13.6, printed pp. 67–68" is off by one
  for that proposition alone. The manifest citations that place Exercise 13.4
  and Proposition 13.5 on printed p. 68 are accurate.
- The remaining Teschl §3.6 headings I read (Lemmas 3.26–3.28, the trace and
  Lidskii discussion, and the multiplication/Sturm–Liouville/periodic examples)
  sit under the coverage's umbrella disposition "Trace-class definitions and
  examples — deferred"; none of them concerns this pair's subject beyond the
  deferred trace-class block.
- `lem-product-rectangle-kernels-are-dense-in-product-l-two` is a sigma-finite
  re-proof of the published finite-measure
  `lem-product-rectangle-kernels-are-dense-in-complex-l-two`, deliberately kept
  local to avoid a requirement edge to an unrelated published page. Its second
  source entry is a duplicate Axler URL with a descriptive title; the
  mathematical backing is the local generating-algebra argument over Axler
  §§7A/10C. Flagged for the Step-3b/Step-5 item reviewers, not a scope issue.
- My source reading reproduces the recorded fetch stamps and all harvested
  headings; it is a coverage check, not an independent proof audit.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27
--page square-integrable-kernels-and-hilbert-schmidt-compactness
--decision sufficient` with this report as the reason path.
