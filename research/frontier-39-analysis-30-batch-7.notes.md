# Batch 7 notes — `littlewood-paley-theory-and-square-functions`

Run `frontier-39-analysis-30`, Beta scaffold of 1 A/B pair in `fourier-analysis`.
Outputs: `research/frontier-39-analysis-30-batch-7.pages.json` (18 A items,
5 B items), `research/frontier-39-analysis-30-batch-7.coverage.json` (2 pages,
40 harvested rows), `research/frontier-39-analysis-30-batch-7.cross-batch-dependencies.json`
(6 rows), 23 Step-1 readiness records, this note. No published content, shared
plan, engine state or verdict was edited.

## Design versus plan

`research/plan-spec.json` carries both pages of this pair (`littlewood-paley-theory-and-square-functions`,
order 458.02611, and its `-examples` companion, order 458.02612) **with empty item
inventories**, so there is no item-level plan conflict to reconcile: the design
table at `research/plan-fourier-analysis-track.md` L847 (FR-11) is the only
inventory, and it was adopted with the corrections recorded below. Page ids,
orders, titles, companions, categories and `requires` lists were left exactly as
generated. Every item id named by the design is present in the manifest (14 A,
5 B); the design's duplicated row numbers (two rows numbered 2, 9 and 12; row 11
missing) were read as distinct items by id, not by number.

Design/plan conflicts and gaps recorded for the owner:

1. **FR-4 does not supply Khintchine.** The design says "FR-4 supplies the actual
   Khintchine theorem", but the published FR-4 page
   (`lacunary-fourier-series-and-sidon-sets`) contains Hadamard-lacunary and
   Sidon material only: a local search found no Rademacher or Khintchine item
   anywhere in `items/` or `library/`. The A page therefore scaffolds its own
   Rademacher chain — `def-rademacher-functions-on-the-unit-interval`,
   `lem-finite-rademacher-blocks-are-equidistributed`,
   `thm-khintchine-inequality-for-finite-rademacher-sums` — sourced to Grafakos
   Appendix C.1–C.3, Tao note 4 §5.5 and Williams Proposition 5.1. Adding a
   Khintchine item to the already-published FR-4 page would be a published-content
   change outside this batch's write scope; the owner may prefer to rehome the
   chain there in a later run.
2. **The Mihlin theorem lives on the FR-8 (Calderón–Zygmund) page.** The design
   attributes the uniform signed-sum bound to "FR-6 Mihlin"; FR-6 supplies the
   symbol definition and the $L^p$ multiplier convention, while the published
   `thm-mihlin-fourier-multiplier-theorem` is homed on
   `calderon-zygmund-decomposition-and-singular-integrals` (FR-8). The cross-batch
   audit and the A-page deps follow the actual home. No page-level `requires`
   change is needed: both pages are already required.
3. **MT-17 interpolation is not consumed.** The route is Khintchine randomisation
   plus the published Mihlin theorem; no interpolation theorem and no
   maximal-function item is a proof prerequisite. FA Plancherel is consumed
   (`thm-plancherel`, `thm-parseval-pairing-on-schwartz-space`).
4. **FR-9/FR-10 are consumed only by the two endpoint remarks.** They are required
   at page level (design), and item-level edges were declared to
   `def-real-hardy-space-by-a-radial-maximal-function` (batch 5) and to
   `def-bmo-seminorm-and-quotient-by-constants` and `thm-real-hone-bmo-duality`
   (batch 6); no proof step of the strict-range theorem uses them.
5. **B-page source re-pointing.** The design cites "UW lecture 22/W §7.4" for the
   $L^\infty$-endpoint record. UW lecture 22 is a handwritten scan whose relevant
   content could not be read with confidence; the B-page remark records the dyadic
   endpoint ladder from Williams §7.4–7.5 (Theorem 7.19, Definition 7.21(a),
   Proposition 7.22) and the strict range from Grafakos §6.1.1 instead. The
   classical failure of the lower $L^\infty$ direction is visible from lacunary
   sums but is deliberately **not** scaffolded as a proof (the design asks for a
   recorded leaf).
6. **Sharp-cutoff example narrowed honestly.** The design says inverse transforms
   of "interval/ball" indicators have slow nonintegrable decay. The counterexample
   proves the one-dimensional interval case ($\|K_j\|_1=\infty$ for the sharp
   dyadic interval cutoffs) and records the $n\ge2$ annulus failure as cited
   orientation from Grafakos §6.1.3, where the local proof would need Bessel-function
   asymptotics this page does not build.
7. **Four added prerequisites** (beyond the design table): the three Rademacher
   items above and `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded`
   (each piece is a Mihlin symbol with uniform constants; needed to define
   $\Delta_j$ on $L^p$ and to make the extension in the main theorem honest). The
   A page has 18 items, far inside the 100-item cap.

## Inventory and dependency levels

A page `littlewood-paley-theory-and-square-functions`, 18 items, levels 0–9:

| level | item |
|---:|---|
| 0 | `def-rademacher-functions-on-the-unit-interval`, `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition`, `def-lusin-area-function-for-a-fixed-admissible-kernel` |
| 1 | `lem-finite-rademacher-blocks-are-equidistributed`, `def-inhomogeneous-dyadic-frequency-partition` |
| 2 | `thm-khintchine-inequality-for-finite-rademacher-sums`, `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`, `lem-ltwo-almost-orthogonality-of-dyadic-pieces`, `lem-littlewood-paley-reproducing-formula-in-tempered-distributions`, `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`, `rem-square-function-characterisation-of-real-hone` |
| 3 | `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded`, `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` |
| 4 | `def-littlewood-paley-square-function` |
| 5 | `lem-rademacher-randomisation-converts-square-functions-to-multipliers` |
| 6 | `thm-littlewood-paley-square-function-equivalence-on-lp` |
| 7 | `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` |
| 9 | `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` (via the FR-10 duality theorem) |

B page `littlewood-paley-theory-and-square-functions-examples`, 5 items, levels
3–7: `ex-square-function-of-one-frequency-localised-function` (5),
`ex-dyadic-square-function-of-two-separated-frequency-packets` (5),
`cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` (3),
`rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` (7),
`ex-sobolev-weight-on-a-single-dyadic-annulus` (3). No B-page item is a
dependency target anywhere in the run; the three examples are the only
`ai-generated` statements (with `generation.role: example`) and are ineligible
as future dependency targets.

## Proof route and hard obligations

The route is the design's randomised-square-function route (Tao note 4 §5.5,
Williams §5.3, Grafakos §6.1.1):

* smooth inhomogeneous partition with telescoping, annular support, bounded
  overlap and derivative bounds; $\Delta_j$ and companion $\tilde\Delta_j$;
* Rademacher equidistribution → Khintchine for finite sums (exponential moment,
  Markov, layer cake for the upper bound; fourth moment plus Cauchy–Schwarz for
  the lower bound) → pointwise comparison of $S_Ff$ with random signed sums,
  identified as compactly supported multiplier operators;
* uniform Mihlin constants of $\sum c_j\varphi_j$ for $|c_j|\le1$ (at most three
  overlaps, geometric derivative series) → upper $L^p$ bound;
* reproducing formula $f=\sum_j\tilde\Delta_j\Delta_jf$ in $\mathcal S'$ via the
  tail $\sigma_N$ argument → duality with the $L^q$ norm-recovery corollary →
  lower $L^p$ bound on Schwartz functions;
* Lipschitz extension by $|Sf-Sg|\le S(f-g)$ plus a diagonal argument identifying
  the extension with the increasing pointwise square function;
* Sobolev characterisation by Plancherel and the annular weight comparison
  $2^{2js}\langle\xi\rangle^{-2s}\asymp1$.

The design's hard obligations are met: the low-frequency block is never assigned
mean zero (recorded in the definition and the kernel lemma); infinite sums
converge first in $\mathcal S'$ (reproducing lemma) and then in the norm supplied
by the theorem (extension clause); Khintchine's constants are stated to be
independent of the number of pieces; no sharp-cutoff analogue is inferred (the
counterexample instead shows the smooth kernels' uniform $L^1$ bound is lost).

## Sources (full text fetched and stamped)

`research/frontier-39-analysis-30-batch-7.coverage.json` passes
`node tools/coverage-checklist.mjs ... --require-destination` with
`2 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)` and
`node tools/source-fetch-check.mjs --coverage ...` with
`5/5 source(s) fetch-verified` and `5/5 source(s) resolved`.

| source | locator read | supports |
|---|---|---|
| Tao, Math 247A Lecture Notes 4 | §5, §5.5, printed pp. 20–26; proofs of Prop. 5.3, Cor. 5.4, Lemma 5.6, Cor. 5.8 read in full | square function, randomisation, Khintchine (scalar and function form), alternate LP proof via uniform symbol estimates |
| Grafakos, Classical Fourier Analysis 3rd ed. | §6.1.1–6.1.3, printed pp. 419–437 (Def. 6.1.1, Thm. 6.1.2 with proof, Rem. 6.1.3, Thms. 6.1.5–6.1.6 and sharp-cutoff discussion); Appendix C.1–C.3, printed pp. 585–590 | dyadic operators and kernels, LP theorem and converse (polynomial caveat), sharp-cutoff failure for $n\ge2$, Rademacher functions and Khintchine |
| Williams, Notes on Harmonic Analysis | ch. 5 §§5.1–5.3, printed pp. 15–22; ch. 6 §6.2, printed pp. 24–26; ch. 7 §§7.4–7.7, printed pp. 36–47; proofs of Prop. 5.1, Thms. 5.3 and 5.5, Thm. 6.6, Props. 7.22 and 7.30 read | Khinchine-type inequality, lacunary series, periodic LP theorem, multiplier route, inhomogeneous Sobolev characterisation, dyadic endpoint ladder, $H^1$ square-function characterisation and cone/tent machinery |

Harvest: 40 source-anchored rows — 20 `included`, 7 `inline`, 1
`already-published` (`thm-lacunary-lp-norm-equivalence`), 3 `deferred` (two to
`real-hardy-spaces-maximal-functions-and-atoms`, one to
`bmo-john-nirenberg-and-h1-duality` for the BMO/lacunary exercise) and 9
`out-of-scope`, each with a result-specific reason (vector-valued CZ route,
periodic analogue, Besov/Triebel–Lizorkin scales, weak-type Khintchine,
martingale model, continuous-scale exercise, $H^1$–BMO proof route, dyadic
one-grid remark). Fetch history: all five entries stamped on the first fetch
(no recovery needed); the Grafakos and Williams hashes coincide with the copies
used by earlier batches.

## Dependency and supplier audit

- Published suppliers read for the interface check: `def-schwartz-space-and-its-seminorms`,
  `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `thm-fourier-inversion-on-schwartz-space`,
  `thm-plancherel`, `thm-parseval-pairing-on-schwartz-space`,
  `def-translation-invariant-fourier-multiplier-on-schwartz-space`,
  `def-mihlin-symbol-with-more-than-half-dimension-derivatives`,
  `thm-mihlin-fourier-multiplier-theorem`,
  `def-lp-fourier-multiplier-and-multiplier-norm`,
  `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`,
  `thm-complex-lp-completeness-and-almost-everywhere-subsequences`,
  `cor-l-p-norm-recovery-by-unit-l-q-pairings`,
  `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`,
  `thm-layer-cake-formula-for-l-p-powers`, `thm-markov-inequality`,
  `thm-young-convolution-inequality`, `thm-newton-leibniz-with-interior-derivative`,
  `ex-harmonic-series-diverges`, and the standard Lebesgue/measurability items.
  No defective actual prerequisite was found; no published defect is recorded
  for the canonical ledger from this batch. The pre-existing batch-27
  content-policy error and the empty scaffold inventories of batches 12–20 are
  unrelated run debt and were not touched.
- In-run suppliers: batch 5 (`real-hardy-spaces-maximal-functions-and-atoms`)
  and batch 6 (`bmo-john-nirenberg-and-h1-duality`). Their items used here
  (`def-real-hardy-space-by-a-radial-maximal-function`,
  `def-bmo-seminorm-and-quotient-by-constants`, `thm-real-hone-bmo-duality`) all
  carry current `ready` Step-1 records, and their statements were re-read in the
  batch scaffolds before the six cross-batch rows were marked `verified`
  (`research/frontier-39-analysis-30-batch-7.cross-batch-dependencies.json`;
  two page rows and four item rows). Every declared cross-batch edge of this
  batch now has a review row in the unified ledger.
- Axiom audit: the strict-range chain assumes Countable Choice and declares
  `def-countable-choice` exactly where its statement says so; the plain
  Rademacher definition and equidistribution lemma use no choice principle. No
  item uses full AC, Banach–Alaoglu or the ultrafilter lemma, and no path reaches
  `deferred-set-theory-beyond-choice`.
- Graph checks: no cycle, no forward dependency (all in-run suppliers sit on
  earlier pages), no B-page dependency target, no ai-generated statement used as
  a dependency. `node tools/item-dependency-levels.mjs check --run ...` reports
  zero non-empty-inventory errors and the stored `dependency_level` labels match
  the computed levels (18 items on A, 5 on B).

## Post-construction repairs (found on the closure re-read)

1. Two dependency ids were wrong at first write: `thm-chain-rule-for-euclidean-maps`
   and `def-compact-support-and-support-of-a-function` do not exist; replaced by
   the published `thm-chain-rule-for-total-derivatives` and
   `def-support-and-compactly-supported-riemann-integral-in-rn`.
2. Four items stated "Assume Countable Choice" without declaring
   `def-countable-choice` (`lem-ltwo-almost-orthogonality...`,
   `def-littlewood-paley-square-function`,
   `lem-rademacher-randomisation...`; conversely the kernel-bounds lemma
   declared it without stating it). All four are now consistent.
3. The Khintchine lower bound was recorded with a wrong constant in the strategy
   sketch: Cauchy–Schwarz gives $|\{|S|>s/2\}|\ge(9/16)C_4^{-1}$, not
   $(9/16)^2C_4^{-1}$. Corrected (the weaker value would have been true but the
   derivation as written was not).
4. Markov's one-sided estimate was displayed with a spurious factor $\lambda$ on
   the left; corrected to $|\{A>\lambda\}|\le e^{-\lambda^2/(2u^2)}$.
5. The Sobolev item's converse needed the convention $\|\Delta_jU\|_2=+\infty$
   when $\Delta_jU$ is not a regular $L^2$ distribution, and its statement now
   says "lies in the image of $E_s$" instead of "is in $H^s$"; without this the
   converse direction was implicitly assuming what it had to prove.
6. The B-page Sobolev-weight example defined $A_j$ by one formula for all
   $j\ge0$ (false at $j=0$) and justified the vanishing of neighbours by an
   incorrect support slogan; both the statement ($A_0$ separated out) and the
   strategy (the two-rescaled-argument check) were rewritten.
7. The recorded-leaf remarks were narrowed to what the cited sources state: the
   $H^1$ remark now displays only the square-function identity of Williams
   Prop. 7.30(a) and records the conical form separately; the $L^\infty$
   remark no longer asserts a failure theorem beyond the recorded dyadic ladder.
8. The sharp-cutoff strategy's remark about $K_0$ symmetry was corrected to the
   even modulus identity, and the Lusin-area strategy now cites Tonelli (not
   Fubini) for the measurability and the iterated integral.

All readiness records were refreshed after these repairs; the 23 records are
hash-current.

## Commands actually run (results copied from the terminal)

- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-7.coverage.json --require-destination`
  — `coverage-checklist: 2 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-7.coverage.json [--stamp]`
  — `5/5 source(s) fetch-verified`; `5/5 source(s) resolved (0 documented drops; not fetch stamps)`.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  — `manifest-deps: 565 item(s), 0 normalized, 0 error(s)`; a later repeat of the
  same command reported `604 item(s), 0 error(s)` after another batch was
  scaffolded concurrently, with no batch-7 change.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — `565 scoped item(s), 1 error(s), 0 warning(s)`; the single error is the
  unrelated batch-27 item `lem-positive-compactly-supported-transform-bump-on-the-dual`
  missing `thm-unique-left-haar-measure-up-to-scale`. No batch-7 line appears.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — 18 errors, all `empty scaffold inventory` for batches 12–20; 0 non-empty
  errors, no cycle, and no label mismatch for any batch-7 item.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (plan-level; the
  pair's plan-spec inventories are empty by design).
- `node tools/fwdcheck.mjs` — OK; `node tools/extcheck.mjs` — OK (the
  `unproved-on-published` warnings name other published items only).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` —
  `items: 565 ready: 565 closed: False` at construction time; the last repeat on
  the current carriers reported `items: 604 ready: 565` (another batch was
  scaffolded concurrently) with **no batch-7 item pending** in either run. The
  remaining open entries are other batches' empty scaffolds or freshly added
  items.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — `refreshed and deduplicated`; batch 7 is in `reviewed_batches` and all six of
  its edges carry `verified` reviews. Run-wide `--require-reviewed` still fails
  because batches 12–20 have supplied no inputs.

## Residual uncertainty recorded honestly

1. The Rademacher/Khintchine chain is new local material not promised by the
   design (which believed FR-4 supplied it). It is faithfully sourced to
   Grafakos Appendix C and Tao §5.5, but the proof sketches are this worker's;
   Step 3 must write them out and Step 5 must re-derive them.
2. Khintchine's constants $c_p,C_p$ are stated abstractly; the strategy gives
   explicit constructions (Gaussian-type constants, Paley–Zygmund) but no
   numerical values. This is deliberate; any consumer needing explicit constants
   must track them.
3. The $L^p$ extension in the main theorem is the most delicate step: it hinges on
   simultaneous approximation, the Lipschitz bound for finite truncations and a
   diagonal argument for the almost-everywhere identification. The strategy is
   complete at scaffold level, but Step 3/5 should treat it as the main
   verification target.
4. The multidimensional sharp-annulus failure in the counterexample is cited
   orientation only; the locally proved claim is the one-dimensional
   nonintegrability of the sharp interval kernel.
5. The two endpoint items are recorded leaves. The $H^1$ square-function
   characterisation is quoted in the homogeneous form stated by Williams; the
   conical (Lusin-area) form is recorded as classical and not proved. The
   $L^\infty$ remark records the dyadic ladder and deliberately does not prove a
   failure theorem.
6. The design's FR-4/MT-17 expectations and the two source re-pointings
   (UW lecture 22, Mihlin's actual home) are design-bookkeeping conflicts for
   owner reconciliation, not mathematical gaps.

Owner/operator reconciliation and the full engine gate follow construction;
neither this worker exit nor these readiness records is independent mathematical
approval. Step 3 and Step 5 provide that review.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.
