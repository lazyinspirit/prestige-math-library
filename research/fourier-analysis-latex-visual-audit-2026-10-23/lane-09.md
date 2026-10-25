# Fourier Analysis visual math audit — lane 09

## Scope and method

Reviewed all 44 assigned items against their frozen snapshots and all 99 lane screenshots from capture revision 2. Every listed tile was opened at original resolution. The screenshots show the application SSR/CSS local preview with Scratch open; this was a local render audit, not a live HTTP site review. All rendered sections visible in the receipts were checked, including Statements/Definitions, Facts & Assumptions, Proof/Counterexample/Verification, Remarks, and Scratch where present. No item content was changed.

Findings below distinguish confirmed raw notation leakage from optional style preferences. “Clean” means no malformed math or clearly raw notation was found in the viewed render for this lane item; it is not a mathematical review or a claim about other pages/items.

## Confirmed findings

### `lem-carleson-restricted-weak-interpolation`

Page: `carleson-hunt-time-frequency-theorem`
Section: Statement; Proof (Given and numbered steps)
Source: `snapshots/lem-carleson-restricted-weak-interpolation.md` lines 27, 45, 47, 49, 51, 53, 55, 57
Excerpt: “restricted weak type (r,r) and (s,s), with 1<r<p<s<infinity” (line 27); “for q=r,s ... every lambda>0” and repeated plain q>1, N_q, lambda and A_n notation in the proof.
Visual symptom: The statement and proof show mathematical operators and inequalities as literal inline text (for example “1<r<p<s<infinity”, “lambda>0”, and identifiers such as “N_q”), rather than rendered math. The formulas enclosed in math delimiters render normally, so this is a source-delimiting inconsistency.
Suggested repair: Wrap mathematical expressions in the affected prose in inline math delimiters, preserving surrounding words and punctuation.
Screenshots:
- `screenshots/lem-carleson-restricted-weak-interpolation--01.png`
- `screenshots/lem-carleson-restricted-weak-interpolation--02.png`

### `lem-wave-packet-model-dominates-the-linearised-carleson-operator`

Page: `carleson-hunt-time-frequency-theorem`
Section: Statement
Source: `snapshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator.md` lines 27, 33
Excerpt: “strong type (p,p) bound B” (line 27); “weak L2 and every strong Lp bound” (line 33).
Visual symptom: The exponent-bearing operator names and type parameters appear as raw text (“L2”, “Lp”, “(p,p)”), while surrounding displayed inequalities and expressions render as math.
Suggested repair: Set the type parameters and L-space notation in the statement as inline math, or rewrite the phrases in words.
Screenshots:
- `screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--01.png`
- `screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--02.png`
- `screenshots/lem-wave-packet-model-dominates-the-linearised-carleson-operator--03.png`

### `lem-power-decay-implies-a-p-membership`

Page: `muckenhoupt-weights-and-weighted-estimates`
Section: Title
Source: `snapshots/lem-power-decay-implies-a-p-membership.md` lines 4
Excerpt: title: Power decay implies membership in some A_p
Visual symptom: The title renders the underscore literally as “A_p”. The body’s A_p notation is correctly rendered inside math delimiters.
Suggested repair: Use a math-aware title form if supported, or phrase the title as “some Muckenhoupt A-p class” to avoid a literal underscore.
Screenshots:
- `screenshots/lem-power-decay-implies-a-p-membership--01.png`
- `screenshots/lem-power-decay-implies-a-p-membership--02.png`

### `thm-littlewood-paley-square-function-equivalence-on-lp`

Page: `littlewood-paley-theory-and-square-functions`
Section: Title
Source: `snapshots/thm-littlewood-paley-square-function-equivalence-on-lp.md` lines 4
Excerpt: title: "Littlewood-Paley square-function equivalence on Lp for 1<p<infinity"
Visual symptom: The title renders the exponent and comparison as raw text (“Lp for 1<p<infinity”), unlike the properly typeset p-range in the Statement below.
Suggested repair: Use a math-aware title if supported, or use a prose title such as “Littlewood-Paley square-function equivalence for finite p above one”.
Screenshots:
- `screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--01.png`
- `screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--02.png`
- `screenshots/thm-littlewood-paley-square-function-equivalence-on-lp--03.png`

### `rem-gibbs-phenomenon`

Page: `fejer-and-poisson-summability-of-fourier-series`
Section: Unheaded remark body; linked reference label
Source: `snapshots/rem-gibbs-phenomenon.md` lines 23
Excerpt: [[thm-gibbs-overshoot-at-a-piecewise-c-one-jump]]
Visual symptom: The rendered link label exposes the caret in “C^1” instead of a superscript. Other surrounding inline math in the same remark is typeset.
Suggested repair: Use a math-aware link label such as a KaTeX-capable C¹ label, or rewrite it as “continuously differentiable jump”.
Screenshots:
- `screenshots/rem-gibbs-phenomenon--01.png`
- `screenshots/rem-gibbs-phenomenon--02.png`

## Per-item coverage ledger

| Item | Pages | Result | Screenshots | Sections reviewed |
|---|---|---|---:|---|
| `cex-calderon-zygmund-strong-lone-bound-fails` | calderon-zygmund-decomposition-and-singular-integrals-examples | clean | 2 | Title/header, Statement refuted, Facts & Assumptions, Counterexample |
| `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` | lacunary-fourier-series-and-sidon-sets-examples | clean | 2 | Title/header, Statement refuted, Facts & Assumptions, Counterexample |
| `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` | littlewood-paley-theory-and-square-functions-examples | clean | 3 | Title/header, Statement refuted, Facts & Assumptions, Counterexample, Remarks |
| `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` | littlewood-paley-theory-and-square-functions | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `cor-linfinity-embeds-continuously-into-bmo` | bmo-john-nirenberg-and-h1-duality | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `cor-riesz-transforms-are-bounded-on-lp` | calderon-zygmund-decomposition-and-singular-integrals | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `def-carleson-tiles-wave-packets-and-tile-order` | carleson-hunt-time-frequency-theorem | clean | 2 | Title/header, Definition |
| `def-fourier-transform-on-an-lca-group` | bochner-inversion-and-plancherel-on-lca-groups | clean | 2 | Title/header, Definition |
| `def-lusin-area-function-for-a-fixed-admissible-kernel` | littlewood-paley-theory-and-square-functions | clean | 2 | Title/header, Definition |
| `def-rademacher-functions-on-the-unit-interval` | littlewood-paley-theory-and-square-functions | clean | 2 | Title/header, Definition |
| `def-truncated-hilbert-transform-and-principal-value` | hilbert-and-riesz-transforms | clean | 2 | Title/header, Definition |
| `ex-an-absolutely-convergent-non-smooth-fourier-series` | absolute-convergence-and-the-wiener-algebra-examples | clean | 2 | Title/header, Example, Facts & Assumptions, Verification |
| `ex-dyadic-square-function-of-two-separated-frequency-packets` | littlewood-paley-theory-and-square-functions-examples | clean | 2 | Title/header, Example, Verification |
| `ex-haar-normalisations-on-the-circle-and-the-integers` | bochner-inversion-and-plancherel-on-lca-groups-examples | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `ex-logarithm-is-in-bmo-but-not-linfinity` | bmo-john-nirenberg-and-h1-duality-examples | clean | 2 | Title/header, Example, Facts & Assumptions, Verification |
| `ex-riesz-potential-scaling-determines-the-target-exponent` | riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples | clean | 3 | Title/header, Example, Facts & Assumptions, Verification |
| `ex-two-comparable-and-two-incomparable-carleson-tiles` | carleson-hunt-time-frequency-theorem-examples | clean | 2 | Title/header, Example, Facts & Assumptions, Proof |
| `lem-an-hp-atom-has-uniform-hp-quasinorm` | real-hardy-spaces-maximal-functions-and-atoms | clean | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-bmo-functions-pair-uniformly-with-hone-atoms` | bmo-john-nirenberg-and-h1-duality | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-carleson-restricted-weak-interpolation` | carleson-hunt-time-frequency-theorem | findings | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-compact-curved-hypersurface-finite-graph-cover` | fourier-restriction-and-the-stein-tomas-theorem | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` | calderon-zygmund-decomposition-and-singular-integrals | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions` | absolute-convergence-and-the-wiener-algebra | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm` | lacunary-fourier-series-and-sidon-sets | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` | bochner-inversion-and-plancherel-on-lca-groups | clean | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators` | bmo-john-nirenberg-and-h1-duality | clean | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-kolmogorov-atomic-kernel-maxima` | kolmogorov-block-construction-and-almost-everywhere-divergence | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-lca-lone-character-topology-is-the-compact-open-topology` | bochner-inversion-and-plancherel-on-lca-groups | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-local-polynomial-projections-match-moments-through-order-s` | real-hardy-spaces-maximal-functions-and-atoms | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` | bmo-john-nirenberg-and-h1-duality | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-power-decay-implies-a-p-membership` | muckenhoupt-weights-and-weighted-estimates | findings | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-riesz-potential-near-far-splitting` | riesz-potentials-and-the-hardy-littlewood-sobolev-inequality | clean | 4 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` | fourier-restriction-and-the-stein-tomas-theorem | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` | dirichlet-kernel-localisation-and-pointwise-fourier-convergence | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `lem-wave-packet-model-dominates-the-linearised-carleson-operator` | carleson-hunt-time-frequency-theorem | findings | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `rem-gibbs-phenomenon` | fejer-and-poisson-summability-of-fourier-series | findings | 2 | Title/header, Unheaded remark body |
| `rem-uncertainty-principles-measure-different-notions-of-localisation` | uncertainty-principles-for-fourier-analysis | clean | 2 | Title/header, Remarks |
| `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation` | real-hardy-spaces-maximal-functions-and-atoms | clean | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-dirichlet-jordan-pointwise-convergence` | dirichlet-kernel-localisation-and-pointwise-fourier-convergence | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` | fourier-multipliers-and-sobolev-characterisations | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-hausdorff-young-for-the-euclidean-fourier-transform` | fourier-multipliers-and-sobolev-characterisations | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-littlewood-paley-square-function-equivalence-on-lp` | littlewood-paley-theory-and-square-functions | findings | 3 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-principal-structure-theorem-for-lca-groups` | pontryagin-duality-for-locally-compact-abelian-groups | clean | 2 | Title/header, Statement, Facts & Assumptions, Proof |
| `thm-stein-tomas-spherical-restriction-theorem` | fourier-restriction-and-the-stein-tomas-theorem | clean | 3 | Title/header, Statement, Facts & Assumptions, Proof |

## Limits

The audit covers only the 44 IDs in `assignment-09.json` and the screenshots listed for those IDs. It did not inspect other lanes, live site behavior, mobile layouts, alternate themes, or mathematical correctness. Source lines and excerpts point to the frozen lane snapshots; the review does not authorize repairs.
