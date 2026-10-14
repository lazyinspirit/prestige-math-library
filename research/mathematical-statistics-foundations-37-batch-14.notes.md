# Batch 14 — Concentration authoring notes

Run: `mathematical-statistics-foundations-37` · role: beta · batch: 14.
The live run was checked from `.autopilot/` and remains in Step 1 scaffold authoring; no engine state or verdict was changed. Batch scheduling input: `4ac773619bf67b0bf9f2906a3e1587567c1ec3367e8bd46a1c3215d9e984e95e`.

## Controlling plan and conflicts

The binding owner direction, `research/mathematical-statistics-foundations-37-owner-authoring-direction.md`, names `research/plan-mathematical-statistics-track.md` as the complete controlling design and requires following its dependency-ordered pair table. Its MSF-18 row (line 95) controls this pair: it specifies the scalar/vector sub-Gaussian and restricted-MGF sub-exponential conventions; bounded Hoeffding and variance-sensitive Bernstein; a finite sub-Gaussian maximum and sphere-net reduction; McDiarmid from the Doob martingale with conditional endpoint widths; and the four assigned B examples.

The two design locations in the generated task were read in full. Bayesian/computational-statistics line 99 concerns Gaussian-process support and concentration, while combinatorics/categories line 8299 concerns martingales and concentration on finite spaces. Their scopes do not match the MSF-18 page or assigned B examples. The owner direction makes the mathematical-statistics plan controlling, so neither stale design supplies this batch's scope. `research/plan-spec.json` has matching page IDs, orders 1870/1871, category, titles, companion links, and prerequisites; its empty item arrays are planning placeholders, not an inventory conflict.

## Inventory, prerequisites, and dependency levels

The batch manifest contains eight A items and four B examples/counterexamples. Each draft item's direct `deps` set matches its manifest row. The item dependency levels below were recomputed from in-run edges; external published suppliers do not raise a run level.

| Level | Items | In-run suppliers |
|---|---|---|
| 0 | `def-subgaussian-variable-and-vector`; `thm-hoeffding-independent-bounded-sums`; `thm-bernstein-independent-sums`; `lem-epsilon-net-of-unit-sphere-has-cardinality-bound`; `lem-doob-martingale-differences-inherit-coordinate-oscillations` | none |
| 1 | `thm-subexponential-independent-sums`; `thm-finite-subgaussian-maximum-and-epsilon-net`; `thm-mcdiarmid-bounded-differences`; `ex-rademacher-sum-concentration` | respectively definition; definition and epsilon-net lemma; Doob-difference lemma; Hoeffding theorem |
| 2 | `ex-gaussian-maximum-concentration`; `ex-subgaussian-vector-norm-via-net`; `cex-finite-variance-does-not-imply-subgaussian-tail` | finite-maximum theorem and sub-Gaussian definition |

Batch level is 0 and there are no prerequisite batches. `batch-14.cross-batch-dependencies.json` remains `[]`; all run-internal edges are within this batch. The A and B pages contain 8 and 4 items respectively, below the 100-item cap. All declared external prerequisites resolve through existing published items, as confirmed by scoped dependency checking.

The direct prerequisite audit checked definitions and hypotheses for integrability/expectation, measurability and product laws, independence, conditional expectation, Jordan content and scaling, finite maxima, exponential/MGF operations, variance, and the required real-analysis suppliers. In particular, the sub-exponential definition is centered and uses the closed MGF range `|lambda| <= 1/b` with `b > 0`; the bounded-sum results keep distinct hypotheses and constants. The counterexample uses the local sub-Gaussian tail consequence plus exponential domination, rather than assuming finite variance controls tails.

## Mathematical review and local repairs

- The sub-Gaussian definition states centeredness and finite dimension `d >= 1`, distinguishes proxy parameters from variance, and does not imply coordinate independence. Sub-exponentiality is a separate centered restricted-range MGF condition.
- The Hoeffding proof applies the existing conditional Hoeffding supplier to natural-filtration differences with deterministic endpoint width `b_i-a_i`; it handles zero total width separately and retains the required AC branch. Step 2.2's input tag was corrected to include step 1.2, which bounds the differences used in the exponential iteration.
- Bernstein is proved by the bounded-summand exponential-series estimate, independence factorization, Chernoff optimization, and a separate zero-variance branch. It yields the exact `b/3` denominator. Duchi Proposition 4.1.20 is Bennett and is recorded out-of-scope; the classical Bernstein consequence immediately derived after it is recorded separately as inline support. The local proof does not silently substitute Bennett's rate function.
- The sphere-net proof now establishes `V_d > 0` from the volume recursion before cancelling it. For a separated finite set it uses closed balls of radius exactly `epsilon/2`; strict separation makes them disjoint, and the Jordan-volume comparison gives the bound directly. The maximal packing argument chooses a maximum among finitely many possible cardinalities and is choice-free. The added direct prerequisites are the Darboux-integral definition, rational-power definition and monotonicity, and multidimensional integral properties; the manifest and item dependency lists agree.
- The Doob-difference lemma supplies measurable finite product-integral versions, event-integral martingale identities, and measurable conditional endpoints of width at most each coordinate oscillation. This construction uses Fubini and product-law facts without AC. McDiarmid separately declares AC for the conditional-expectation/Hoeffding route and iterates the exact conditional width.
- The sub-exponential sum theorem treats `v=0` separately, uses the maximum admissible scale `b=max_i b_i`, and proves both tails. The finite-maximum theorem makes no independence assumption and handles zero proxy; the vector clause uses the sphere net with the factor `(1-epsilon)^2`. The Rademacher and Gaussian examples state their AC assumptions and degeneracies. The countable symmetric counterexample verifies its probability measure, centering, finite second moment, positive polynomial tails, and contradiction with every finite sub-Gaussian proxy.

AC is explicit in Hoeffding, McDiarmid, the Rademacher example, and the Gaussian example, with its uses represented by the declared axiom supplier. Bernstein, the sphere-net construction, the Doob product-integral lemma, the sub-exponential result, and the finite-maximum/vector arguments remain choice-free.

## Source reading and harvest

Full-text source URLs, locators, supported item IDs, retrieval stamps, and every harvested-result disposition are recorded in `research/mathematical-statistics-foundations-37-batch-14.coverage.json`.

- Rigollet–Hütter, *High-Dimensional Statistics: Lecture Notes*, Chapter 1 §§1.2–1.4 (PDF pp. 16–30): definitions, Chernoff/Hoeffding results, sub-exponential concentration, finite maxima, epsilon nets, and the vector-norm route. Supports the definition, Hoeffding, sub-exponential, finite-maximum/net, and vector-example items.
- John Duchi, *Lecture Notes on Statistics and Information Theory*, Chapter 4, Definitions 4.1/4.2, §§4.1.1–4.1.2, Theorem 4.2.3, Corollary 4.2.4, and Proposition 4.2.5 with adjacent hypotheses and proofs: supports the proxy conventions, Rademacher example, Hoeffding, Bernstein distinction, sub-exponential sum, and McDiarmid/Doob items.
- Jon A. Wellner, *Empirical Processes: Theory and Applications*, Chapter 1 §3, Lemmas 3.2–3.3: full Bennett/Bernstein statements and proofs; Lemma 3.3 supports the bounded variance-sensitive Bernstein item.

The B-page harvest uses independent Rigollet–Hütter and Duchi treatments for the Gaussian maximum, vector-net, and Rademacher worked examples. The source checklist records 38 A-page results (13 included, 12 inline, 13 out-of-scope) and 9 B-page results (1 included, 8 inline). The B examples and the heavy-tail counterexample are locally proved; no additional source theorem was needed to carry the counterexample. The checklist has no errors, but its low-yield warnings request Alpha confirmation of the declined source results; these are recorded for later review rather than padded with unplanned items. No source is dropped or unresolved. All three full-text URLs have current fetch stamps.

## Evidence and checks

Proof contracts in `research/mathematical-statistics-foundations-37-batch-14.proof-contracts.json` cover all 12 items, every numbered proof step and its declared inputs, exact supplier-section excerpts, all eight boundary axes, and the applicable `finite_smoke` field. No registered finite-smoke check applies to these analytic inequalities, so the arrays are empty; finite-smoke evidence is not used as a substitute for the proofs.

Final scoped checks after the last item and contract edits:

- Dependency recomputation: all 12 batch items checked, maximum item level 2; draft `deps` sets and levels match the manifest.
- `node tools/tsx-run.mjs tools/precheck.mts <assigned items>`: 11 proof-bearing items checked, 0 failing. The definition has no proof body and is not applicable.
- `node tools/proof-layout.mjs <assigned items>`: 12 items, 48 numbered steps, 0 defects.
- Strict proof contracts: 12/12 checked, 0 errors and 0 warnings. Boundary audit: 96 rows, 0 template clusters, 0 contradicted candidates.
- Scoped `depcheck`: 0 errors and 0 warnings. `content-policy`: 12 items, 0 errors and 0 warnings. `rendercheck`: 14 assigned item/page files, all pass.
- Coverage checklist: 2 pages, 47 harvested entries, 0 errors. It retains two low-yield warnings for Alpha confirmation: A page 13/38 results scaffolded and B page 1/9; the dispositions and reasons remain in the coverage file.
- `source-fetch-check --stamp`: 5/5 coverage source rows fetch-verified, no new stamps or unresolved drops. `finite-smoke`: 0 errors, no registered check obligations apply to these items.
- `step1-decisions.mjs record` marked all 12 assigned items `ready`, with their direct dependency IDs and current item hashes. The run-wide `step1-decisions.mjs check` remains open outside batch 14 (37 of 59 in-run items currently ready, plus other unscaffolded pages); this dispatch closes only its assigned 12 items.

These completion records are author evidence only and do not constitute independent mathematical approval.
