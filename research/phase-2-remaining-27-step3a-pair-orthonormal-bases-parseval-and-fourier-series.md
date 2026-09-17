# Step 3a scope review — `orthonormal-bases-parseval-and-fourier-series`

- Run: `phase-2-remaining-27` · role alpha · dispatch
  `step3a-pair-orthonormal-bases-parseval-and-fourier-series-deea63cd7e0561a8`.
- A page: `orthonormal-bases-parseval-and-fourier-series` (batch 1, order 288.073,
  functional-analysis). B page: `orthonormal-bases-parseval-and-fourier-series-examples`.
- Decision: **sufficient**. Recorded with
  `node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27
  --page orthonormal-bases-parseval-and-fourier-series --decision sufficient`.
- Scope only. No scaffold, coverage, plan, item or page file was edited; no item
  approval and no owner record was written.

## Scope inputs read (exact paths)

- Prose design: `research/plan-functional-analysis-track.md` §5 FA-14,
  lines 1108–1169 (19 A items, 5 B examples; `Requires: FA-13`; L² Fourier
  theory on $\mathbb T$ and $\mathbb T^n$ routed through the complex
  self-adjoint Stone–Weierstrass theorem; no pointwise theory).
- Binding owner direction: `research/phase-2-remaining-27-owner-authoring-direction.md`
  (FA amendment = `research/plan-functional-analysis-track.md` §§14.4–14.5).
  §14.4 FA-14 mandates five insertions, in order:
  `def-square-summable-family-on-an-arbitrary-index-set`,
  `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`,
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `lem-finite-tori-are-compact-hausdorff-character-spaces`,
  `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`;
  arbitrary-index sums are finite-subset nets; maximal bases use AC while a
  supplied dense sequence gives deterministic Gram–Schmidt; do not cite the
  later fundamental-group circle page.
- Current plan: `research/plan-spec.json` — A page requires exactly
  `hilbert-space-geometry-and-riesz-representation`; B requires the A page.
  Drift review `research/phase-2-remaining-27-alpha-step1-drift.md`,
  §`orthonormal-bases-parseval-and-fourier-series`: VERDICT no-drift; FA-14's
  integration, product-measure, L², density, convolution, topology,
  Stone–Weierstrass and complex-exponential inputs are in the transitive
  closure, and the finite-subset-supremum convention is local to the page.
- Manifests: `research/phase-2-remaining-27-batch-1.pages.json` (pair entries),
  `research/phase-2-remaining-27-batch-1.coverage.json`,
  `research/phase-2-remaining-27-batch-1.notes.md`,
  `research/phase-2-remaining-27-batch-1.cross-batch-dependencies.json` (`[]`),
  `research/phase-2-remaining-27-cross-batch-dependencies.json`,
  `research/phase-2-remaining-27-scope-ledger.json`.
- No Step-3a owner or review receipt existed for this page before this review
  (`tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`
  returned `current scope review required`, 27 pairs / 1006 items).

## Inventory against the design

`batch-1.pages.json` A page has 24 items and the B page 5. All 19 FA-14 design
items are present, in design order, with all five binding §14.4 insertions
interleaved at positions 3, 6, 13, 15 and 19 (each before its first consumer):

| design FA-14 A item | manifest position |
|---|---|
| `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` | 1 |
| `lem-finite-bessel-inequality` | 2 |
| `thm-bessel-inequality-for-an-arbitrary-orthonormal-family` | 4 |
| `lem-only-countably-many-fourier-coefficients-are-nonzero` | 5 |
| `thm-parseval-equivalences-for-a-complete-orthonormal-family` | 7 |
| `thm-hilbert-space-fourier-expansion` | 8 |
| `thm-existence-of-a-maximal-orthonormal-family` | 9 |
| `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set` | 10 |
| `thm-separable-hilbert-space-has-a-countable-orthonormal-basis` | 11 |
| `cor-separable-infinite-dimensional-hilbert-space-is-ell-two` | 12 |
| `def-the-one-dimensional-torus-and-normalized-haar-integral` | 14 |
| `def-fourier-coefficients-and-trigonometric-polynomials` | 16 |
| `lem-trigonometric-characters-are-orthonormal` | 17 |
| `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions` | 18 |
| `thm-trigonometric-system-is-complete-in-l-two-of-the-torus` | 20 |
| `thm-l-two-fourier-series-converges-in-mean-square` | 21 |
| `thm-parseval-identity-for-fourier-series` | 22 |
| `thm-riesz-fischer-for-fourier-coefficients` | 23 |
| `thm-fourier-basis-and-parseval-on-the-n-torus` | 24 |

Insertions: position 3 `def-square-summable-family-on-an-arbitrary-index-set`;
6 `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`;
13 `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`;
15 `lem-finite-tori-are-compact-hausdorff-character-spaces`;
19 `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`.
The owner-directed finite-subset-supremum semantics is implemented in items
3–8 (supremum definition, Bessel as supremum, net convergence, net-continuity
equivalences, unconditional expansion).

B page: all five design examples, in order —
`ex-standard-basis-of-ell-two`, `ex-legendre-polynomials-from-gram-schmidt`,
`ex-haar-orthonormal-basis-of-l-two-zero-one`,
`ex-fourier-series-of-a-sawtooth`, `ex-fourier-series-of-a-square-wave`.
No design item is dropped, reordered past a consumer, or added.

Structural checks on the pair, run against the current files:

- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-1.pages.json`
  → 63 items, 0 normalized, 0 errors.
- Every dependency id of the 29 items resolves to a run item or a published
  item (0 unresolved); no item declares `forward_refs`/`justified_by`; no A
  item depends on a B item.
- All 29 pair ids are new: none exists in `items/`, so there is no id collision
  with published content.
- All 29 items carry statement, strategy, provenance, axiom audit and at least
  one source reference; kinds are 11 theorems, 7 lemmas, 4 definitions, 2
  corollaries (A) and 5 examples (B).

## Source coverage

`batch-1.coverage.json`, page `orthonormal-bases-parseval-and-fourier-series`:
6 source rows, 36 harvested headings, 33 included/inline, 3 reasoned
`out-of-scope` declines. Fetch-verified records (bytes/pages, sha256_16):
MIT 18.102 820,929 B/125 pp `f6e1ebe856c40608`; Bühler–Salamon 1,912,109 B/452 pp
`8ffd5f868b480006`; Blackadar–Farah–Karagila 471,634 B/49 pp `765c4fb68a21206f`;
Teschl 2,619,066 B/563 pp `d172dae775f1274f`; Gavin 562,867 B/14 pp
`7b4040febae7bd29`; Dobrushkin HTML 81,656 B/48,200 chars `531612be4c43a366`.
Coverage locators name specific definitions/theorems with printed page ranges
(MIT pp.72–80; Bühler–Salamon §2.3.6 pp.87–88; Teschl §2.1 pp.47–53 and §2.5
pp.63–68; BFK §3 and §4.1 pp.6–9; Gavin §4.1–4.2; Dobrushkin Example 5).

`node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-1.coverage.json`
→ 2 pages, 66 harvested results, 0 errors, 0 warnings.
`node tools/step1-decisions.mjs check --run phase-2-remaining-27`
→ 1006/1006 items ready, closed true (all 29 pair items carry current
`ready` receipts).

I did not re-fetch the six documents for this scope review; the review uses the
recorded fetch-verified locators and my reading of the item statements. Two
record-keeping observations, neither of which removes backing from an item:

1. The design's "Source backing read" for FA-14 names Knapp (*Basic Real
   Analysis* ch. VI §§7, 9; *Advanced Real Analysis* ch. II §§2–3) and MIT
   pp.38–53. The batch coverage record for this page contains no Knapp row; the
   load-bearing results are backed instead by Teschl, Bühler–Salamon, MIT, BFK,
   Gavin and Dobrushkin. I cannot confirm from disk that Knapp was read, and I
   do not claim it.
2. Nine of the 29 items have no heading of their own in the harvest. Four are
   steps of a harvested source result whose row is attached to the composite
   item (`lem-only-countably-many-fourier-coefficients-are-nonzero`,
   `def-fourier-coefficients-and-trigonometric-polynomials`,
   `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions`,
   `thm-l-two-fourier-series-converges-in-mean-square`, each citing Teschl
   §2.1/§2.5). Five are the torus/L² interface and the §14.4 insertions whose
   item citations are broad multi-section citations
   (`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
   `def-the-one-dimensional-torus-and-normalized-haar-integral`,
   `lem-finite-tori-are-compact-hausdorff-character-spaces`,
   `lem-trigonometric-characters-are-orthonormal`,
   `thm-fourier-basis-and-parseval-on-the-n-torus`); the last of these has no
   harvested $\mathbb T^n$ heading, and the design itself routes it through a
   local Stone–Weierstrass/coordinate-character proof rather than a cited
   theorem. This is an authoring and Step-5 locator-precision obligation, not a
   scope gap: no planned result lacks a source row for its source, and every
   result has a declared local proof strategy from earlier suppliers.

## Role in the library (consumers)

`research/phase-2-remaining-27-cross-batch-dependencies.json` records 21
incoming item edges to this pair, each with a `verified` consumer-side review:

- batch 2 (`compact-operators-and-riesz-schauder-theory`): `def-square-summable-…`
  (coordinate projections), `def-orthonormal-family-…`,
  `thm-parseval-equivalences-…` (Hilbert–Schmidt norm basis independence),
  `thm-hilbert-space-fourier-expansion` (HS compactness),
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`,
  `thm-existence-of-a-maximal-orthonormal-family`.
- batch 3 (`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`):
  `thm-hilbert-space-fourier-expansion` (SVD, spectral theorem, nuclear
  series), `thm-parseval-equivalences-…` (trace basis independence),
  `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`,
  `def-square-summable-…` (trace-class definition).
  `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis` consumes
  `thm-parseval-equivalences-…` and
  `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`.
- batch 6 (`unbounded-self-adjoint-operators-and-stones-theorem`):
  `thm-existence-of-a-maximal-orthonormal-family` and
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`
  (deficiency-index corollary).
- batch 12 (`compact-lie-groups-maximal-tori-and-peter-weyl-theory`):
  `thm-fourier-basis-and-parseval-on-the-n-torus` and
  `thm-hilbert-space-fourier-expansion` (Peter–Weyl),
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`.

The published Fourier-analysis pages FR-1/FR-3/FR-4K/FR-10 name this A page as
an earlier supplier in `research/plan-fourier-analysis-track.md` (ledger rows
and "S-1 applied", lines 62–171). The pair is a prerequisite supplier for the
pairs above and for later published-track repairs; no consumer needs an item
outside the 24-item A inventory.

## Deliberate exclusions checked (not omissions)

- Pointwise/Dirichlet–Jordan theory, Dirichlet and Fejér kernels, Gibbs
  phenomenon, and divergence counterexamples are owned by FR-1/FR-2/FR-5:
  `research/plan-fourier-analysis-track.md` "S-1 applied" (lines 160–171), and
  the published pages `library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence.md`,
  `…/fejer-and-poisson-summability-of-fourier-series.md`,
  `…/divergence-and-almost-everywhere-convergence-of-fourier-series.md` already
  carry `thm-dirichlet-jordan-pointwise-convergence`,
  `lem-fejer-kernel-is-a-positive-approximate-identity`, and
  `cex-continuous-function-with-divergent-fourier-series-at-a-point`. The three
  coverage declines repeat exactly this split.
- $L^p(\mathbb T)$ Fourier convergence for $1<p<\infty$ is FR-4
  (`thm-fourier-partial-sums-converge-in-periodic-lp`, plan line 672);
  Carleson–Hunt is FR-4C/FR-5 (`library/fourier-analysis/carleson-hunt-time-frequency-theorem.md`).
- Bühler–Salamon Example 2.67 (half-range sine/cosine bases) and BFK Theorem
  4.1.3 (transfinite Gram–Schmidt) are declined in the coverage file with
  written reasons; the arbitrary-basis case is covered under AC by items 9–10
  and the deterministic countable case by item 11.
- The Fourier transform, Schwartz space, distributions and tempered
  distributions are FA-22–FA-25 material and are not part of this pair.

## Uncertainty

- I did not verify any item proof; this review decides scope only.
- Item-citation precision is uneven: several items carry multi-section
  citations (e.g. "Bühler–Salamon §§1.3.3, 2.3.6, 5.3.1–5.3.2", "MIT
  Lectures 15–16 and 22–23"). Fine locators exist in the coverage file; the
  Step 3b author and Step 5 reader should reconcile them.
- The design prose lists MT-8/MT-11/MT-14/MT-15 and topology's
  `stone-weierstrass-general` as predecessors, while the current plan gives the
  single page edge FA-13. The batch notes (line ~30) record that the current
  plan controls; the drift review verified transitive closure and
  `validate-plan`/Step-1 records report no unresolved ids or forward
  references, so I treat this as a settled plan reconciliation rather than a
  scope defect.

## Decision

**sufficient.** The planned definitions, results and examples cover the
subject the prose design fixes for this pair — arbitrary-index orthonormal
families, Bessel/Parseval equivalences, Fourier expansion and the ℓ²(I) model,
the separable classification, and L² Fourier theory on $\mathbb T$ and
$\mathbb T^n$ — with the five binding §14.4 insertions present and correctly
ordered, all sources harvested with fetch-verified records (0 gate
errors/warnings), all 29 items Step-1 ready, and every consumer interface in
the run satisfied by the declared items. No enrichment or pair merger is
required.
