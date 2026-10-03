# Step 3a scope review — `analytic-hardy-spaces-and-canonical-factorisation`

- Run: `frontier-38-owner-30`, batch 20, role alpha (Step 3a scope review).
- A page: `analytic-hardy-spaces-and-canonical-factorisation` (order 837).
- B page: `analytic-hardy-spaces-and-canonical-factorisation-examples` (order 838).
- Scope decision: **sufficient** (receipt `research/frontier-38-owner-30-step3a-review-analytic-hardy-spaces-and-canonical-factorisation.json`).
- This report decides scope only. It is not an item approval, a proof review, or an owner record, and it edits no scaffold.

## Inputs read (exact paths)

- Design: `research/plan-complex-analysis-track.md`, CA-HP-2 at L3727–3767 (item table L3733–3746, companion L3748–3752, sources/proof route L3753–3766), its `requires` crosswalk row L5421 and order row L5729; CA-HP-1 (L3691–3725) read for the handoff; downstream consumer SC-7 `bergman-and-szego-kernels` (L4281–4312, requires row L5437).
- Contract: `research/plan-spec.json` rows 837/838 (empty planned item lists; the A `requires` list equals the manifest's six entries verbatim).
- Manifest: `research/frontier-38-owner-30-batch-20.pages.json` (A 25 items, B 7 items; only this pair in the batch).
- Coverage: `research/frontier-38-owner-30-batch-20.coverage.json` (4 sources per page, 81 harvested rows).
- Step-1 construction record: `research/frontier-38-owner-30-batch-20.notes.md` (design-vs-scaffold deviations, proof route, checks, escalations).
- Readiness: `research/frontier-38-owner-30-step1-<id>.json` for all 32 items: 32/32 `ready`.
- Owner direction: `research/frontier-38-owner-30-owner-authoring-direction.md` (pair selected at 837/838; local-prerequisite construction rule; 100-item page cap; no reliance on the unbuilt 873/877 pairs).
- Dependency records: `research/frontier-38-owner-30-batch-20.cross-batch-dependencies.json` (`[]`), the unified frontier ledger (no batch-20 edge), and `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope` — for this page: "current scope review required"; no owner or review receipt existed.
- Source spot checks re-fetched 2026-10-03: Srivastava MA650 lecture notes and Ryzhik Stanford 215 notes were downloaded again and text-searched directly; Garnett and Axler–Bourdon–Ramey were examined through the recorded fetch stamps only (stated honestly below).

## Design vs delivered scaffold

- All 12 design A rows are present, id by id: `def-analytic-hardy-space-disc`, `thm-fatou-boundary-theorem-analytic-hardy-spaces`, `thm-hardy-zero-set-blaschke-condition`, `def-blaschke-product`, `def-inner-singular-inner-and-outer-functions`, `thm-inner-outer-factorisation-hardy-space`, `thm-f-and-m-riesz-theorem`, `cor-hardy-one-cauchy-representation`, `def-nevanlinna-class-on-the-disc`, `thm-nevanlinna-class-is-bounded-quotient-class`, `def-smirnov-class-on-the-disc`, `thm-smirnov-maximum-principle`.
- The A page adds the 13 local prerequisites recorded in the batch notes (all intermediate, none a scope expansion): `lem-hardy-radial-means-are-monotone`, `thm-blaschke-product-boundary-values-and-zeros`, `thm-riesz-factorization-hardy-space`, `lem-hardy-log-integrability-of-boundary-values`, `lem-poisson-jensen-inequality-hardy-functions`, `lem-outer-function-properties`, `thm-singular-inner-function-properties`, `thm-zero-free-inner-functions-are-singular-inner`, `lem-nevanlinna-sup-mean-criterion`, `lem-nevanlinna-blaschke-factorization`, `thm-nevanlinna-boundary-values-and-log-integrability`, `lem-smirnov-class-quotient-characterisation`, `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients`. A = 5 definitions + 11 theorems + 8 lemmas + 1 corollary = 25 items, under the cap.
- B delivers the six design companion rows as 7 items: "finite/infinite Blaschke products" split into `ex-finite-blaschke-products` and `ex-blaschke-product-with-zeros-accumulating-at-one`; "singular inner function from a point mass" (`ex-singular-inner-function-from-a-point-mass`); "outer function with a simple positive boundary modulus" (`ex-outer-function-with-prescribed-boundary-modulus`); "zero-set failure when the Blaschke sum diverges" (`cex-divergent-blaschke-sum`); "factorisation of a rational inner function" (`ex-factorization-of-a-rational-function`, see next bullet); "boundary uniqueness" (`ex-boundary-vanishing-and-uniqueness`). Kind counts: 6 examples + 1 counterexample.
- Documented deviations that preserve the designed scope: (i) `N(D)` is defined by the harmonic-majorant form with the design's radial-mean form proved equivalent in `lem-nevanlinna-sup-mean-criterion` (not assumed); (ii) the companion's "factorisation of a rational inner function" is realised as a rational function with a nonconstant Blaschke factor times a nonconstant outer factor, the finite/inner rational case being `ex-finite-blaschke-products`; (iii) design-named Schlag Ch. 3 §§2–3 is replaced by Axler–Bourdon–Ramey Ch. 6 as the independent harmonic-Hardy/Herglotz treatment, consistent with the design's own route to F. and M. Riesz without a Hilbert transform. No designed claim is dropped or weakened.

## Subject coverage (definitions, results, examples)

- Classes and boundary theory: `H^p(D)` for `0<p<=infinity` with the `p<1` quasi-norm; monotonicity of radial means and `H^q` contained in `H^p` for `q>p`; Fatou nontangential limits a.e., `L^p` radial convergence for finite `p`, boundary-norm identity, weak-star convergence at `p=infinity`, and Poisson representation of the boundary function for `1<=p<=infinity`.
- Zero theory: Blaschke condition from Jensen; normalized Blaschke factors with normal convergence, prescribed zeros, `|B|<=1` and `|B*|=1` a.e.; F. Riesz factorisation `f=Bg` with `|g(z)|>=|f(z)|` and equality of norms.
- Canonical factors: inner, singular inner (`S_mu` from finite positive measures) and outer (`[h]`) functions, their boundary moduli, uniqueness up to a unimodular constant, zero-free inner functions are `lambda S_mu` (Herglotz plus conjugates), and the unique normalised factorisation `f=lambda B S_mu F` for `f` in `H^p`, `0<p<=infinity`.
- Analytic measures: exactly the finite complex measures with vanishing negative Fourier coefficients have holomorphic Poisson integrals; the F. and M. Riesz theorem; the `H^1` boundary measure is an `L^1` density with the Cauchy/Poisson representation.
- Larger classes: Nevanlinna class `N` (majorant form, equivalent sup-mean form), bounded-quotient representation, Blaschke factorisation inside `N`, boundary values and `log|f*|` in `L^1`; Poisson–Jensen inequality; Smirnov class `N^+` with the outer-denominator quotient characterisation and `N^+ ∩ L^p = H^p` with equality of norms, `0<p<=infinity`.
- Companion: the finite Blaschke computation `B(z)=(1/4-z^2)/(1-z^2/4)`; an infinite Blaschke product with zeros `1-1/n^2`, value `1/2` and no continuous extension; the point-mass singular inner function `exp(-(1+z)/(1-z))` with limit `0` at `1`; the outer function `(1-z)^alpha` of modulus `|1-z|^alpha`; the divergent Blaschke sum `1-1/n` with a Weierstrass product outside every `H^p`; the rational factorisation `((z-a)/(1-az))·((1+z)/2)`; boundary vanishing and a.e. uniqueness.
- By design out of scope and marked so in the coverage file: completeness of `H^p`, the `A_N` density corollary, disc/half-plane transfers, `H^p ∩ L^r` contained in `H^r`, the `1/f` and `Re f>=0` outer criteria, inner-function continuation theorems, and Beurling's shift-invariant-subspace theorem (left to the later operator/function-theory track, as the design says).

## Intended role and downstream consumer

- Order 837/838 places the pair after CA-HP-1 (835/836) and is the analytic refinement of the harmonic Hardy pair; the B page is its examples companion with the same boundary-uniqueness emphasis.
- The only downstream consumer named in the plan is SC-7 `bergman-and-szego-kernels` (order 867, requires row L5437). Its disc Szego/Hardy-boundary construction needs the identification of `H^2(D)` with its boundary values in `L^2(T)` and the fact that `P[f]` is holomorphic exactly for data with no negative Fourier coefficients. The pair supplies this through `thm-fatou-boundary-theorem-analytic-hardy-spaces` (b)(c) combined with `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` and the published `h^2` representation, so the consumer's prerequisite is covered.

## Prerequisite audit (unmet-prerequisite check)

- Method: for all 32 scaffold items I collected the declared `deps`, `justified_by` and `forward_refs`, and followed the transitive `deps` closure through both the run scaffold (`research/frontier-38-owner-30-batch-*.pages.json`) and the published item frontmatter under `items/`, classifying each node as run-scaffold, published, or unresolved.
- Result: 58 distinct direct published suppliers, every one `status: published` on disk; transitive closure of 1,635 ids = 32 own items + 1,603 published items with **0 unresolved** nodes. All `justified_by` references are own-pair items already in the scaffold; there are no `forward_refs`. No prerequisite is absent from both the published library and the current scaffold.
- Two direct suppliers live on published pages outside the declared page `requires` closure: `thm-jensen-inequality-for-expectation` (`probability-spaces-random-variables-and-expectation`) and `thm-zero-divisor-theorem-on-plane-domains` (`mittag-leffler-and-runges-theorem`). Both are published standalone items, not gaps; recorded here so the owner can see the full picture. Neither blocks scope, ordering, or the consumer.
- Statement spot checks of load-bearing suppliers (all published): the `h^p` contraction/norm-limit and `h^1` measure-representation items carry the exact norm identities and weak-star convergence used; `thm-fatou-nontangential-boundary-theorem-harmonic` gives cone limits for `L^1` data; `cor-bounded-harmonic-functions-have-nontangential-limits` gives bounded-harmonic cone limits; `thm-jensen-formula-on-a-disc`, `thm-jensen-inequality-for-expectation`, `thm-normal-convergence-of-holomorphic-products`, `cor-modulus-powers-of-holomorphic-functions-are-subharmonic`, `thm-poisson-modification-preserves-subharmonicity-and-majorizes`, `thm-harnack-convergence-positive-harmonic-functions`, `thm-harmonic-conjugate-on-homologically-simply-connected-domains`, `thm-zero-divisor-theorem-on-plane-domains`, `thm-cauchy-integral-formula-circle`, `thm-removable-singularity-characterizations` and `def-unit-disc-upper-half-plane-and-blaschke-factor` all state the claims the scaffold's strategies invoke, with hypotheses at least as strong as the uses.
- Conclusion: no unmet prerequisite, no confirmed gap, and no scaffold addition is required for scope. (Uncertainty: I checked statements, not the full proofs, of the published suppliers; proof-level verification is Step 3b/Step 5 territory.)

## Source coverage

- Every one of the 32 items carries at least two references drawn from the four fully-read works: Garnett Ch. II §§1–6, Srivastava §§5.1–5.11/6.2–6.5, Ryzhik §5.4, Axler–Bourdon–Ramey Ch. 6. The coverage file disposes of 81 harvested rows: 55 `included`, 6 `inline`, 4 `already-published`, 16 `out-of-scope`, each with a specific reason; no harvested result is left undisposed, and every scaffold item is mapped by at least one `included` row.
- Independent check (2026-10-03): the Srivastava MA650 PDF is live at the recorded URL; PDF p. 35 carries Lemma 5.17 with the same `lim inf` integral hypothesis, p. 36 Lemma 5.19 (normal convergence, `|B|=1` a.e., prescribed zeros), p. 37 Corollary 5.20 (F. Riesz `f=Bg` with equal `p`-norms), pp. 43–46 Theorems 5.27/5.29/5.32 (outer functions, singular inner functions, canonical factorisation `f=lambda BS[f]`). The Ryzhik notes are live and PDF pp. 75–79 carry Theorem 5.13 (F. and M. Riesz for measures with vanishing negative coefficients) and the analytic-`h^1` `log|f|` integrability result. Both match the coverage locators.
- Uncertainty (honest): Garnett and Axler–Bourdon–Ramey were not re-fetched in this review; their recorded stamps (`f26774f0970230c8` / `fd693a49a5f3efb4` and `4e64124f7e36993e`) are the only evidence consulted for those two bodies. The two independently re-checked sources already carry the pair's most distinctive claims (Blaschke/factorisation; F. and M. Riesz), so the scope verdict does not rest on the un-rechecked locators.

## Mechanical checks on the current batch (observed)

| Check | Result |
|---|---|
| `coverage-checklist` on `batch-20.coverage.json` | exit 0; 2 pages, 81 harvested results, 0 errors, 0 warnings |
| `manifest-deps` on `batch-20.pages.json` | exit 0; 32 items, 0 missing, 0 errors |
| `step3-decisions check --phase scope` | this page reported "current scope review required" (now discharged by the receipt below) |

## Findings

- No omitted design topic or result; the delivered pair is the design inventory plus documented local closure items, so there is no insufficient-scope ground and no pair merger is recommended.
- No unmet prerequisite (transitive closure fully resolved; 58/58 published suppliers status-published). The two out-of-closure published suppliers noted above are not gaps and need no scaffold action.
- Non-blocking observation for Step 3b only (not a scope finding): the level-0 `def-analytic-hardy-space-disc` statement uses the ambient notation `D` without declaring `def-unit-disc-upper-half-plane-and-blaschke-factor`, the published item that introduces it. This mirrors the published sibling `def-harmonic-hardy-class-disc` (frontier-37, judged pass) and the library's habit of restating `D` locally (for example `def-poisson-kernel-on-the-disc`); it is a notation matter for the author, not a missing result, and it does not affect this scope decision.

## Decision

`sufficient` — the planned definitions, results and examples adequately cover the intended subject, source coverage is complete for every item, and no prerequisite is unmet. Receipt written with `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30 --page analytic-hardy-spaces-and-canonical-factorisation --decision sufficient`, whose hash covers both pages of the pair at review time.
