# Step 3a scope review — Finite Fourier Analysis and the Fast Fourier Transform

- Run: `frontier-39-analysis-30` (role alpha; batch 28; this pair only)
- A page: `finite-fourier-analysis-and-the-fast-fourier-transform` (order 510.06507, `fourier-analysis`)
- B page: `finite-fourier-analysis-and-the-fast-fourier-transform-examples` (order 510.06508)
- Inventory: 14 A items (levels 0-6: 5 definitions, 2 of them recorded local closure additions; 4 lemmas; 4 theorems; 1 remark) and 5 B leaves; pair cap respected; batch 28 holds no other pair.
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
  --page finite-fourier-analysis-and-the-fast-fourier-transform --decision sufficient`;
  receipt `research/frontier-39-analysis-30-step3a-review-finite-fourier-analysis-and-the-fast-fourier-transform.json`.
- This file judges **scope only**, not proof correctness. No scaffold, coverage, plan,
  engine state or owner record was edited; nothing below is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-28.pages.json` | Current scope carrier: 14 A + 5 B items with statements, deps, sources, strategies; page `requires`, orders, companion pointers |
| `research/frontier-39-analysis-30-batch-28.coverage.json` | 3 source entries, 46 harvested rows on the two pages; current dispositions |
| `research/frontier-39-analysis-30-batch-28.notes.md` | Step-1 construction record: design reconciliation, local additions, EW range correction, Taylor/MITF convention translations, earlier complex-sum deps correction |
| `research/frontier-39-analysis-30-batch-28.cross-batch-dependencies.json` and `research/frontier-39-analysis-30-cross-batch-dependencies.json` | Two `open` page edges FR-18 -> FR-16/FR-17; FR-18 as supplier to batches 29 and 30 |
| `research/plan-fourier-analysis-track.md` FR-18 (L1326-L1366) | Binding prose design: 12 A rows, 5 B leaves, `Requires` FR-15--FR-17, hard proof/boundary obligations |
| `research/plan-spec.json` orders 510.06507/.06508 | Page `requires`/`companion` match the manifests; item arrays are the expected Step-4-era empty state |
| `research/frontier-39-analysis-30-step1-owner-resolution.md` | Owner's 30-pair resolution; no FR-18 amendment or owner authoring direction for this pair |
| Batch 26 (FR-16), 27 (FR-17), 29 (FR-19), 30 (uncertainty) manifests | Sibling scaffolds: prerequisite suppliers and in-run consumers |
| Published suppliers (`items/*.md`) | Statement-level check of the load-bearing deps (character example, finite-sum machinery, inner products, rational powers, logarithm and asymptotic definitions, recursion theorem, matrix product) |
| Live re-fetch of the three sources: Taylor PDF (603921 B, sha256_16 `e85e7a4e882a278d`, 107 pp.), MITF HTML (25994 B, sha256_16 `e30b7b67c1cdd48e`), EW PDF (1024475 B, sha256_16 `c8e8b3e47226ca27`, 171 pp.) | Direct reads: Taylor PDF pp. 86-100, MITF headings 1-4 complete, EW Appendix C.1-C.3 |
| `node tools/manifest-deps.mjs` / `content-policy.mjs --manifest-only` / `coverage-checklist.mjs --require-destination` on batch 28 | Current state: 19 items 0 errors / 19 items 0 errors 0 warnings / 46 harvested 0 errors 1 advisory warning |

## Role in the library

- The A page `requires` `character-groups-and-elementary-lca-duals` (FR-15, published on
  disk), `bochner-inversion-and-plancherel-on-lca-groups` (FR-16, in-run batch 26, 20 A
  items) and `pontryagin-duality-for-locally-compact-abelian-groups` (FR-17, in-run batch
  27, 20 A items). Both in-run edges are `open` in the cross-batch ledger and are
  page-scope interface records only: no FR-18 item declares an item-level dependency on
  any batch-26/27 item. The character family used by the pair is the published FR-15
  example `ex-pontryagin-dual-of-a-finite-cyclic-group`
  (`chi_k([m]) = exp(2 pi i k m / N)`, unique `k`, no generator choice), so the finite-group
  interface is available at item level today and the open edges cannot block authoring.
- FR-18 is a page-level supplier to batch 29 `poisson-summation-sampling-and-lattice-duality`
  (17 items; recipient of the recorded aliasing deferral) and to batch 30
  `uncertainty-principles-for-fourier-analysis`, whose items consume four A items:
  `def-unitary-discrete-fourier-transform-on-z-mod-n`,
  `def-counting-inner-product-on-complex-functions-on-z-mod-n`,
  `thm-finite-parseval-and-plancherel` and
  `lem-orthogonality-of-characters-on-a-finite-cyclic-group`. Checked against
  `thm-finite-dft-support-product-uncertainty` and
  `ex-finite-dft-delta-and-constant-extremisers` (batch 30): the general `N >= 1`
  statement, unitary normalisation, counting pairing and diagonal orthogonality supplied by
  the scaffold are exactly what those consumers use. No B leaf is a dependency target of
  any item anywhere in the run; no published item or page names any of the 19 ids.
- Published near-duplicates are deliberately not consumed, as recorded in the batch notes:
  `lem-additive-character-orthogonality-from-representation-orthogonality` (normalised,
  representation-theoretic, finite abelian groups) and
  `def-additive-character-of-a-finite-abelian-group`. The design's concrete unnormalised
  geometric-sum form is the local engine that keeps the pair inside finite sums and
  elementary exponential identities, as FR-18 explicitly requires; the abstract item is
  used only as an independent cross-check. No duplication defect.

## Inventory against the prose design

All 12 designed A rows and all 5 designed B leaves are realized, under the design's ids,
with unweakened hypotheses; the only additions are the two recorded closure definitions.

| Design FR-18 row | Manifest item |
|---|---|
| A1 orthogonality, all `N >= 1` | `lem-orthogonality-of-characters-on-a-finite-cyclic-group` |
| A2 unitary DFT, fixed sign/normalisation | `def-unitary-discrete-fourier-transform-on-z-mod-n` |
| (counting pairing presupposed by A4) | `def-counting-inner-product-on-complex-functions-on-z-mod-n` (local addition) |
| A3 inversion / exact recoverability | `thm-finite-fourier-inversion` |
| A4 Parseval | `thm-finite-parseval-and-plancherel` |
| A5 convolution -> scaled product | `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` |
| (unnormalised cyclic convolution presupposed by A5) | `def-cyclic-convolution-on-z-mod-n` (local addition) |
| A6 `F_N^2 = R`, `F_N^4 = id` | `lem-dft-squares-to-reflection-and-has-fourth-power-identity` |
| A7 engineering DFT and conversion | `def-unnormalised-engineering-dft-and-conversion` |
| A8 radix-two even/odd factorisation | `lem-radix-two-even-odd-dft-factorisation` |
| A9 terminating recursive algorithm | `def-recursive-radix-two-fast-fourier-transform` |
| A10 correctness for every length `2^m` | `thm-radix-two-fft-correctness` |
| A11 `O(N log_2 N)` arithmetic operations | `thm-radix-two-fft-arithmetic-complexity` |
| A12 mixed-radix remark, recorded not proved | `rem-cooley-tukey-factorisation-for-composite-lengths` |
| B1-B5 | `ex-unitary-dft-for-n-equals-one-and-two`, `ex-cyclic-convolution-via-the-dft`, `ex-four-point-radix-two-fft`, `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding`, `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` |

The design's hard obligations are all realized in the statements: `N >= 1` with the empty
transform not defined and the `N = 1` recursion base case making the algorithm total;
cyclic and linear convolution distinguished (definition plus B4); the complexity count
restricted to complex multiplications and additions with no bit-complexity or
stability claim; the power-of-two restriction of the bound explicit in the A12 remark and
the B5 counterexample; the unnormalised transform computed first, with the unitary
normalisation recovered by the explicit `2^{-m/2}` rescaling.

## Source coverage

The three sources were re-fetched at the stamped sizes and read at the recorded locators:

- **Taylor §§11-12, PDF pp. 86-100**: §11 opening and (11.1)-(11.2); Proposition 11.1
  (unitary isomorphism, inversion (11.4)) and (11.5) counting-measure conventions;
  (11.6)/Proposition 11.2 with the orthogonality computation and the `omega^m = 1` case
  split; (11.30)-(11.31) discrete convolution and multipliers; §12 (12.1) with the direct
  `n^2`/`n(n-1)` count, (12.2)-(12.7) the Gamma_4 identities, (12.8)-(12.13) the mirror
  decimation-in-frequency recursion and its proof, the after-(12.13) cost paragraph
  (`kn` additions, `kn/2` multiplications), the "in case `n` is a power of 2" restriction,
  and Exercise 4 (generalisation to `n = 3^k` and products of small primes). The
  convention translation from Taylor's `n^{-1}`-normalised transform on `Gamma_n` to the
  design's `N^{-1/2}`-normalised transform on `Z/N` is recorded in the batch notes and
  invents nothing.
- **MIT 18.310 lecture 23, complete text (25994 B)**: headings 1-4 verified; heading 3
  supplies the polynomial-at-roots evaluation, the `n^2` naive cost and the inverse
  `a_s = (1/n) sum_k p_k z^{-sk}`; heading 4 supplies the `n = 2s` even/odd reduction,
  `s` additions/subtractions/multiplications per level, iteration to powers of two and the
  worked four-coefficient computation.
- **EW Appendix C.1-C.3, printed pp. 429-439**: Lemma C.7 with the orthogonality
  computation and Theorem C.8 (Parseval) verified as the recorded cross-checks; Theorems
  C.9/C.10 and Lemmas C.15/C.16 are correctly deferred to FR-16, Theorems C.12/C.13 to
  FR-17, Theorem C.11 (completeness for compact groups) is out of scope for the finite
  page, and Example C.14's dual computations are already-published items.

The advisory `coverage-low-yield` warning (`13/36 harvested` on the A page, where 13 counts
only `included` rows) is confirmed as sound: all 36 A-page dispositions and 10 B-page
dispositions were reviewed, each decline carries a substantive reason, and the
deferred rows point to pairs that exist in the run (FR-16 batch 26, FR-17 batch 27,
FR-19 batch 29). No planned item is left without source backing.

## Dependency closure and unmet prerequisites

- Mechanical sweep over all 30 run manifests: 176 direct dep references on the 19 items -
  137 resolve to published items, 39 to the pair's own in-run items, **0 missing**; all 90
  inline wikilinks resolve. The load-bearing published statements were opened and match
  the declared uses (`ex-pontryagin-dual-of-a-finite-cyclic-group`,
  `thm-kernel-and-fibres-of-complex-exponential`,
  `def-finite-sum-in-a-commutative-monoid` / `lem-finite-sum-reindexing-and-fubini`,
  `def-function-space`, the inner-product definitions, `def-rational-power` /
  `lem-rational-power-laws`, `lem-finite-sum-laws`, `def-counting-measure` /
  `ex-counting-measure-as-haar-measure-on-a-discrete-group`,
  `def-asymptotic-resource-comparison`, `thm-recursion`).
- **No confirmed unmet prerequisite**: every claim the 19 items need exists in the
  published library or in the current scaffold. The two open FR-16/FR-17 page edges are
  interface records, not consumed claims.
- **Minor declared-dependency gaps (non-blocking; every missing supplier is published, so
  this is Step 3b authoring/owner action, not a scope omission):**
  - **F1** `thm-radix-two-fft-arithmetic-complexity`: the displayed equality
    `2m 2^m = 2N log_2 N` with `N = 2^m` needs the evaluation
    `log_2(2^m) = m`. The item's strategy cites `def-logarithm-to-a-base`, which only
    defines `log_b x = log x / log b` and evaluates nothing. The published
    `thm-logarithm-change-of-base` states `log_b(b^u) = u` (hypotheses `b > 0`,
    `b != 1`, `u` real), and `thm-natural-logarithm-laws` plus an induction gives the
    natural-log power rule. Recommend adding one of these to the dep list and correcting
    the strategy line.
  - **F2** `thm-radix-two-fft-correctness`: the equivalent form
    `FFT_m(f) = 2^{m/2} F_N f` rewrites `N^{1/2} = (2^m)^{1/2}` as `2^{m/2}`, which uses
    `lem-rational-power-laws` (claim 5) and `def-rational-power`; neither is declared.
  - **F3** `thm-finite-fourier-inversion`: the word "bijective" in the statement needs the
    published definition `def-injection-surjection-bijection` (the two-sided inverse
    identity itself is proved directly). Recommend adding the definition or rephrasing.
  - **F4** `ex-unitary-dft-for-n-equals-one-and-two`: the `N = 2` entries use
    `e^{-pi i} = -1`, supplied by the published
    `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` (declared in the
    analogous four-point example but not here). Separately, no dedicated
    symmetric/unitary-matrix definition exists in the library (nearest published items:
    `def-linear-isometry-and-orthogonal-or-unitary-operator`,
    `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`); recommend the author phrase
    the check as the directly computable `A^2 = I` (the example already declares
    `def-matrix-product-and-identity-matrix`) or declare the operator definition -
    flagged as uncertainty, not a confirmed gap.
  - **F5** Source-attribution correction (coverage and item `sources`): three MITF
    locators claim convolution/polynomial-product/`z^N - 1`-wrap content in headings 3-4
    for `def-cyclic-convolution-on-z-mod-n`, `ex-cyclic-convolution-via-the-dft` and
    `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding`. The
    complete lecture text contains no occurrence of "convolut", "cyclic" or a
    `z^n - 1` reduction and uses "product" only of the sine product in heading 1. The
    statements remain backed by Taylor (11.30)-(11.33); recommend correcting or dropping
    the MITF attribution for those rows. Not a scope deficiency.
  - **F6** (uncertainty) `def-recursive-radix-two-fast-fourier-transform` defines a
    recursion over `m` whose value type varies with `m`; `thm-recursion` is declared and
    the in-library precedent `def-bounded-reachability-recursion` exists. Recommend the
    author record the encoding in the definition's well-definedness note. Not a
    confirmed gap.
  - **F7** (editorial) `thm-radix-two-fft-arithmetic-complexity` states the direct-cost
    comparison with Taylor's symbol `n` while the rest of the statement uses `N`;
    recommend one symbol.

## Scope conclusion

**Sufficient.** The planned definitions (unitary DFT, counting inner product,
engineering DFT, recursive radix-two FFT), results (orthogonality, inversion/bijectivity,
Parseval-Plancherel, the cyclic-convolution product law, the reflection/fourth-power
identity, the radix-two step, correctness and the arithmetic-operation bound) and
examples/counterexamples (lengths 1 and 2, the four-point transform by two routes,
convolution via the transform, zero-padding wrap-around, failure of the radix-two split
at odd length) adequately cover the intended subject and its design role as the finite
cyclic specialisation feeding the sampling and uncertainty pages. The design is realized
unweakened with exactly the two recorded closure definitions added, the source coverage is
verified against complete texts, and no unmet prerequisite is confirmed. The owner may
optionally fold the F1-F4 dependency additions and the F5 locator correction into Step 3b
authoring; none of them blocks the pair, and no enrichment or merger is needed.
