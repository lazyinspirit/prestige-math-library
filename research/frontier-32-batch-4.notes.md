# frontier-32 · beta · batch 4 scaffold notes

## Scope, controlling design, and plan drift

Only this note, `frontier-32-batch-4.pages.json`, and `frontier-32-batch-4.coverage.json` are changed for this dispatch. No library page, published item, plan structure, workflow state, or other batch has been changed.

I read FA-6 in `research/plan-functional-analysis-track.md` from L573 onward. Its required route is retained: uniform boundedness, the pointwise-limit consequence, Sokal's separately proved gliding-hump route, the split open-mapping proof, bounded inverse, graph and closability definitions, closed graph, the sequential closability criterion, separately continuous bilinear maps, equivalent complete norms, and the five named companion leaves. The only added A items are proof-support rather than padding: `lem-sokal-local-operator-norm-lower-bound` is the displayed lemma Sokal's proof actually invokes, and `thm-banach-steinhaus-dichotomy` is the stronger Baire result needed for the selected condensation example.

FA-6 calls for FA-1 and FA-2 and cites the Baire-category theorem from `approximation-and-compactness-in-ck`; `research/plan-spec.json` and the dispatch give A order `288.057` and only `geometric-hahn-banach-and-convex-separation-examples` as its direct page prerequisite. The completed Step-0 review traced those inputs through the declared transitive closure and recorded `no-drift`. The manifest follows the dispatch/spec page edge and names `thm-baire-category-for-complete-metric-spaces` wherever a proof actually uses Baire.

The A page has 16 items and is below the 60-item split threshold. Its B companion has 5 leaves. All 21 manifest objects carry an explicit `deps` array, and no planned item ID collided with current plan or batch IDs.

## Sources read and URL verification

I read the stated source ranges as complete source sections through the browser fetcher on 2026-09-06, rather than treating search snippets or citations as evidence. Bühler--Salamon is the primary textbook treatment with a harvestable Chapter 2 contents; Teschl is an independent full lecture-note treatment with a harvestable contents page; and Sokal is an independent paper giving the selected elementary proof. Exact source headings/results and a disposition for every harvested result are recorded in `frontier-32-batch-4.coverage.json`.

| Source | HTTP(S) URL read | Exact range |
| --- | --- | --- |
| Bühler--Salamon, *Functional Analysis* (textbook) | https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf | Chapter 2 contents (printed p. 57), §2.1 pp. 58--61, §2.2.1 pp. 62--65, §2.2.2 pp. 66--69, and §2.2.3 p. 70. |
| Teschl, *Topics in Real and Functional Analysis* (lecture notes) | https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf | Contents (PDF p. 6) and §4.1 “The Baire theorem and its consequences”, printed pp. 101--111/PDF pp. 113--123. |
| Sokal, *A Really Simple Elementary Proof of the Uniform Boundedness Theorem* (paper) | https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf | PDF pp. 1--3: theorem, local lower-bound lemma, gliding-hump proof, and Remarks 1--7. |

The browser reads are substantive source verification. Terminal source-fetch and liveness validators are run below; their results, including any stamps, are left to those validators and are never inferred from browser access.

The original Bühler--Salamon ETH URL, `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`, returned browser HTTP 403 during the liveness recheck. I recovered the complete same 8 June 2017 document at the recorded alternate URL: its title page names Bühler and Salamon, it has 452 pages, and its contents and Chapter 2 pagination exactly match the range already read. The coverage row preserves the failed original as `original_url`; it does not attribute an unread replacement to the old source.

## Conventions and proof boundaries

All normed spaces use one fixed real or complex scalar field. “Bounded operator” and its norm use the existing `def-bounded-linear-operator` and `def-operator-norm` conventions. The principal theorems have Banach source and target spaces except where a statement deliberately weakens an assumption. In particular, `cor-pointwise-limit-of-bounded-operators-is-bounded` requires Banach (X), but only normed (Y): pointwise convergence (T_nx\to Tx) gives bounded (T) and the liminf norm estimate without completing (Y).

`thm-banach-steinhaus-dichotomy` is kept distinct from `thm-uniform-boundedness-principle`: it gives the alternative that a non-uniformly-bounded family has a dense G-delta singular set. The companion condensation example depends on the stronger result. The uniform-boundedness theorem remains separately scaffolded with the standard Baire proof so neither statement silently replaces the other.

The existing Baire theorem records `def-dependent-choice`. Sokal's non-Baire proof explicitly records `def-countable-choice` to select a countable sequence of operators with rapidly growing norms, then `def-dependent-choice` for the recursively dependent nearby-point selections; it does not claim either principle is logically necessary for uniform boundedness. The closability criterion records the dependent sequence used when it turns a metric closure condition into 1/n approximants.

The open-mapping proof is intentionally two-stage. `lem-open-mapping-ball-closure-step` proves only a ball in the closure of a bounded image by Baire. `lem-open-mapping-successive-approximation` alone performs geometric-error lifting, sums corrections in the Banach domain, and passes the bounded operator through the limit. The theorem then translates and rescales the zero-ball result; the corollary gives a fixed quantitative lift constant; bounded inverse applies it to a bounded bijection.

The graph is the graph of a linear map on a linear domain in the finite-product norm. Closed graph is restricted to an everywhere-defined map between Banach spaces: its graph is a closed Banach subspace and the first projection has bounded inverse. Closability follows the designed densely-defined convention: the closure of the graph must remain a graph, equivalently every sequence with x_n tending to zero and Ax_n tending to y has y equal to zero. A separately continuous bilinear map is bounded by applying uniform boundedness to fixed-second-variable operators; then the existing bilinear equivalence gives joint continuity. The complete-norm corollary assumes both norms complete and obtains the reverse comparison from bounded inverse; it makes no incomplete-space claim.

## Item ledger

| Item | Claim, route, and source support | Dependencies |
| --- | --- | --- |
| `thm-uniform-boundedness-principle` | Pointwise-bounded families in B(X,Y), with X Banach, have uniformly bounded norms. Baire applied to closed pointwise-bound sets yields an interior ball, then translation/rescaling. Bühler--Salamon Theorem 2.1/Lemma 2.2; Teschl Corollary 4.4. | bounded operator; operator norm; Baire category |
| `thm-banach-steinhaus-dichotomy` | A family is uniformly bounded in operator norm or its singular set is dense G-delta. Apply Baire in each nonempty open set. Teschl Theorem 4.3; Sokal Remark 5. | bounded operator; operator norm; Baire category |
| `cor-pointwise-limit-of-bounded-operators-is-bounded` | Uniform boundedness controls a pointwise-convergent sequence; pass the pointwise bound to the limit and take a liminf subsequence. Bühler--Salamon §2.1, pp. 60--61. | UBP; bounded operator; operator norm |
| `lem-sokal-local-operator-norm-lower-bound` | One of two symmetric nearby points has a large image; use the triangle inequality. Sokal displayed Lemma, p. 1. | bounded operator; operator norm |
| `thm-sokal-gliding-hump-uniform-boundedness` | Contrapose uniform boundedness by choosing rapidly growing operators and nearby points; completeness supplies a limit and the tail estimate diverges. Sokal pp. 1--2. | Sokal lemma; Banach space; operator norm; countable choice; dependent choice |
| `lem-open-mapping-ball-closure-step` | A surjective bounded map has a bounded-image closure containing a ball. Bühler--Salamon §2.2.1; Teschl Theorem 4.5 proof. | bounded operator; metric closure; Baire category |
| `lem-open-mapping-successive-approximation` | Iteratively lift shrinking residuals and sum corrections; continuity passes the limit through T. Bühler--Salamon §2.2.1; Teschl Theorem 4.5 proof. | closure-ball lemma; Banach-series criterion; bounded/continuous equivalence |
| `thm-open-mapping-theorem` | A surjective bounded linear map between Banach spaces is open. Translate/scale the actual zero-ball inclusion. Bühler--Salamon §2.2.1; Teschl Theorem 4.5. | successive approximation; bounded operator |
| `cor-open-mapping-quantitative-form` | Extract a fixed preimage norm bound from the zero-ball inclusion. Bühler--Salamon §2.2.1, p. 65. | Open Mapping Theorem |
| `thm-bounded-inverse-theorem` | A bounded bijection between Banach spaces has a bounded inverse. Bühler--Salamon inverse theorem; Teschl Theorem 4.6. | Open Mapping Theorem; bounded/continuous equivalence |
| `def-graph-of-a-linear-operator` | Define domain, graph, and closed graph in the product norm. Bühler--Salamon §2.2.2; Teschl p. 106. | linear subspace; product norms |
| `thm-closed-graph-theorem` | A closed graph for everywhere-defined T between Banach spaces makes T bounded via bounded inverse on the first projection. Bühler--Salamon §2.2.2; Teschl Theorem 4.7. | graph; bounded inverse; closed-subspace Banach; finite-product Banach |
| `def-closable-linear-operator` | A densely defined operator is closable when its graph closure is a graph. Bühler--Salamon Definition 2.25; Teschl p. 107. | graph; metric closure/density |
| `thm-closability-sequential-criterion` | Equate closability with the vertical sequential condition using metric closure and 1/n approximants. Bühler--Salamon Lemma 2.26; Teschl p. 107. | closability; metric closure; dependent choice |
| `cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous` | UBP supplies a uniform product bound, then bilinear boundedness/continuity equivalence gives joint continuity. Bühler--Salamon Corollary 2.7. | bounded bilinear map; UBP; bounded/continuous equivalence |
| `cor-equivalent-complete-norms-from-one-sided-comparison` | One bounded identity between two complete norms has a bounded inverse, giving the reverse comparison. Bühler--Salamon §2.2.1; Teschl Theorem 4.6. | Banach; equivalent norms; bounded operator; bounded inverse |
| `ex-condensation-of-singularities` | Use the dichotomy to give the dense G-delta singular set and a singular vector in each nonempty ball. Teschl Theorem 4.3. | Banach--Steinhaus dichotomy |
| `cex-uniform-boundedness-fails-on-an-incomplete-domain` | On c_00 with sup norm, f_n(x)=n x_n is pointwise bounded but has norm n. It also records the source's weighted-truncation variant, and proves c_00 incomplete by an explicit Cauchy sequence, so it needs no earlier examples-page claim. Teschl Problem 4.3; Bühler--Salamon Example 2.6. | bounded operator; operator norm |
| `cex-open-mapping-fails-without-completeness` | The bounded identity (c_00,l1) to (c_00,linfinity) has unbounded inverse on equal-coordinate finite vectors, hence is not open. It reuses the established sup-norm incompleteness and proves l1 incompleteness with its own explicit Cauchy sequence. | preceding B counterexample; bounded operator |
| `cex-closed-graph-fails-without-completeness` | The reversed identity is unbounded but its graph is closed by coordinatewise uniqueness of the two norm limits. Teschl graph discussion after Theorem 4.7. | preceding counterexample; graph |
| `ex-a-closed-unbounded-differential-operator` | D:C^1[0,1] to C[0,1] is closed by Newton--Leibniz and uniform derivative convergence; sin(nt)/n witnesses unboundedness. Teschl Problem 4.8. | graph; closability; integral function; continuous integrability; Newton--Leibniz |

## Harvest disposition, validation, and limits

The coverage file retains every heading/result read in the source ranges: 69 harvested rows in all. Teschl’s closure/inverse, closed-range, perturbation, graph-norm, and Hellinger--Toeplitz results are deferred with destinations to `unbounded-self-adjoint-operators-and-stones-theorem` or `dual-spaces-adjoint-operators-and-annihilators`. Fourier, compact, nonclosable, generic-function, sharp-plank, alternative-proof, nonnormable, and historical branches remain source-specific out-of-scope rows. Nothing was removed merely to clear a source gate.

- JSON parse and dependency audit: pass — 2 pages, 16 A items, 5 B items, no absent `deps` array.
- `coverage-checklist --require-destination`: pass — 1 A page, 3 independent sources, 69 harvested results, 0 errors, 0 warnings.
- Read-only merged-plan `validate-plan`: pass (exit 0) — no unresolved IDs, item cycles, forward references, B-page dependency violations, or size violations. The temporary merged plan is only `/tmp/frontier-32-batch-4-merged-plan.json`.
- Whole-run `content-policy --manifest-only research/frontier-32-batch-*.pages.json`: not clean, but its only two errors are pre-existing Batch 12 dependencies on `def-separated-morphism-schemes`; neither error names a Batch 4 item. The Batch 4-only manifest run passes: 21 scoped items, 0 errors, 0 warnings.
- `source-fetch-check` on 2026-09-06: pass — all 3 recorded sources carry current `fetch_verified` receipts.

Known authoring limits: preserve closure versus image in open mapping; do not require Y complete in the pointwise-limit corollary; do not omit bijectivity from bounded inverse; do not apply closed graph to a proper-domain operator; and do not call Sokal Baire-free in a choice-free foundation. The required Baire input is present in the declared transitive page closure and remains an explicit item dependency.

## Step-3 fix pass

The group-c review reports its two FA-6 findings as literal dependency
statements, not numbered records. The identifiers below preserve those
statements exactly; no finding has been renumbered or inferred from a declined
harvest row.

- Finding id `thm-banach-steinhaus-dichotomy` -> `def-operator-norm`.
  **Applied and confirmed.** The current `thm-banach-steinhaus-dichotomy`
  record in `frontier-32-batch-4.pages.json` has explicit dependencies
  `def-bounded-linear-operator`, `def-operator-norm`, and
  `thm-baire-category-for-complete-metric-spaces`. This is needed because its
  uniform-boundedness alternative is an operator-*norm* assertion. The
  source support remains Teschl §4.1, Theorem 4.3 / Corollary 4.4 (printed
  pp. 103--104; PDF pp. 115--116) and Sokal Remark 5 (PDF p. 2). Changed
  scaffold record: the existing manifest item was retained with that required
  backward edge; no duplicate item or duplicate dependency was introduced.

- Finding id `def-closable-linear-operator` ->
  `def-metric-interior-closure-boundary`. **Applied and confirmed.** The
  current `def-closable-linear-operator` record in
  `frontier-32-batch-4.pages.json` explicitly depends on
  `def-graph-of-a-linear-operator` and
  `def-metric-interior-closure-boundary`. The latter supplies the closure and
  density conventions used in the definition. Source support remains
  Bühler--Salamon §2.2.3, Definition 2.25 and Lemma 2.26 (printed p. 70;
  PDF p. 77), with Teschl §4.1's graph/closability discussion (printed
  pp. 107--109; PDF pp. 119--121). Changed scaffold record: the existing
  manifest definition was retained with that required backward edge; no
  duplicate item or dependency was introduced.

I reread the controlling source headings/results through the full-text
document fetcher: the 452-page Bühler--Salamon textbook's Chapter 2 contents
and §§2.1--2.2.3, the 563-page Teschl notes' §4.1, and the five-page Sokal
paper's theorem, proof, and remarks. Their recorded HTTP(S) URLs and exact
locators remain faithful in `frontier-32-batch-4.coverage.json`; its three
current source receipts pass `source-fetch-check` (3/3). A forced local
re-fetch on 2026-09-06 was unable to resolve each remote host
(`EAI_AGAIN`), so it made no replacement or unverified stamp; the independent
full-text read and existing same-day validated receipts are retained rather
than deleting any harvest evidence.

- `manifest-deps research/frontier-32-batch-4.pages.json`: 21 items, 0
  normalized, 0 errors.
- `coverage-checklist --require-destination`: 1 A page, 69 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check`: 3/3 source receipts fetch-verified.
- Whole-run `content-policy --manifest-only research/frontier-32-batch-*.pages.json`:
  672 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: exit 0;
  no item cycles, forward references, B-page dependencies, or unresolved IDs
  among pages with item lists.

No further batch-4 scaffold repair is outstanding. Next action: author the
21 planned items while preserving the stated Banach-space hypotheses,
closure-versus-image distinction, and choice accounting.

## Step-5 authoring

Authored all 21 planned draft items and the two functional-analysis pages. Sources and provenance follow the recorded Bühler--Salamon, Teschl, and Sokal locators. The open-mapping route retains the closure-to-image split; the pointwise-limit corollary keeps only the domain Banach; examples retain explicit incompleteness witnesses. The item-specific proof-contract worksheet remains incomplete: no strict proof-contract pass is claimed.
