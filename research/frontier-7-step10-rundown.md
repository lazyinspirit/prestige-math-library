# Frontier 7 — Step 10 rundown

Date: 2026-08-01. This is the sole owner-pause record for the eight selected
A/B pairs. All 185 new items and 16 pages remain `draft`. There was no owner
audit, publication, commit, or push.

## Scope and completion evidence

- Pairs: normal subgroups/quotients; Eulerian/Hamiltonian graphs;
  logarithm/general powers; sine/cosine/pi; convexity; total derivative;
  Tychonoff/Stone--Čech; metrization.
- Four Beta batches of two pairs satisfied the capacity rule. The final content
  policy reports 185 scoped items, zero errors and zero warnings.
- Independent Step-6 readers read all 185 items, their 16 A/B pages, 491
  numbered derivations, 146 proof contracts, and the declared dependency
  relationships. Alpha reconciled 409 published-backward and 302 same-batch
  edges; there are no unresolved or cross-batch edges.
- `proof-contract --strict` passes 146/146. The current level-coverage receipt
  covers 185 items, 143 proof-bearing bodies, and 30 documented plan-to-final
  dependency drifts. The independent dependency-spine receipt validates all 67
  proof-bearing items in its top-100 consumer-cone scope.
- The final current-context coverage gate, full precheck (1,868 items),
  dependency/forward/external/citation/render checks, plan validation,
  dependency-source check, finite smoke, risk routing, both impact receipts,
  audit manifest, and `git diff --check` pass. Citation-tool output is limited
  to pre-existing heuristic warnings outside this Frontier's findings.

## Paired judges and Alpha adjudication

Both models received each item's same hash-attested context. There are no
nulls or context mismatches; the current final hyperbolic-proof replay is
PASS/PASS on
`079a82e3724e5ecb9e352e6cfa9931e57e2baeeef8923ff69a7eaf21a02ba9a7`.

| model | calls | rejection candidates | confirmed fatal | logic | dependency citation | nonfatal | false positive |
|---|---:|---:|---:|---:|---:|---:|---:|
| DeepSeek V4 Pro | 199 | 57 | 11 | 7 | 4 | 26 | 20 |
| GPT-5.6 Terra | 199 | 100 | 14 | 8 | 6 | 56 | 30 |

`judge-compare` is complete: 158 raw rejections reduce to 157 unique
model/context candidates (one exact duplicate), all adjudicated by Alpha. The
fatal-confirmation rates among each model's rejection candidates are 19.30% for
DeepSeek and 14.00% for Terra. This compares precision on adjudicated signals,
not recall or a proof of superiority.

## Fatal-error report

### Prevented before authoring

| defect type and location | affected planned item/page | disposition |
|---|---|---|
| False theorem statement: an Euler trail was said to require exactly two odd vertices. | Eulerian/Hamiltonian scaffold | Restated as zero or two odd vertices; exactly two is reserved for an open trail. |
| Reversed theorem implication. | Eulerian/Hamiltonian scaffold | Restated correctly: Dirac implies Ore, not conversely. |
| False construction/limit statements. | logarithm/general-powers scaffold | Restricted rational-supremum powers to bases above one, used reciprocal bases below one, and replaced the false Landau expression by the dyadic-root limit. |
| Circular/forward/out-of-scope proof route. | total-derivative scaffold | Replaced the unsupported connected-open zero-derivative route with the convex-open theorem proved from the mean-value inequality. |
| Invalid B-leaf dependencies. | three Batch-4 B-page entries | Removed all three B-to-B proof dependencies and made the refutations A/published-dependency closed. |
| Missing page prerequisite. | Tychonoff page `requires` | Added the published hereditary/productive-separation prerequisite so a live dependency could not remain hidden from readers. |

### Step-6 independent audit

| defect type and location | affected item(s) | disposition |
|---|---|---|
| False definition edge case. | `def-unit-interval-function-family-separates-points-from-closed-sets` | Corrected the empty-family claim: it works only for the empty space, not a singleton. |
| Incorrect dependency citation: generic compactification existence was used for a specific evaluation closure. | `cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma`, `thm-stone-cech-evaluation-closure-universal-property`, `ex-bounded-functions-on-n-extend-to-beta-n` | Repaired the evaluation-closure statement/facts and cited its compactness, Hausdorffness, and density inputs precisely. |
| Invalid local proof construction. | `lem-sigma-locally-finite-base-produces-compatible-normal-sequence` and downstream Nagata--Smirnov route | Dropped the false construction and replaced it with the visibly marked, exact-source `rem-sigma-locally-finite-base-produces-compatible-normal-sequence` external fallback. |
| Invalid local proof construction. | `lem-metric-spaces-have-sigma-discrete-bases` and downstream Bing route | Dropped the false construction and replaced it with the visibly marked, exact-source `rem-metric-spaces-have-sigma-discrete-bases` fallback. |
| Unsupported load-bearing example claim. | `ex-niemytzki-plane-metrization-profile` | Added the local cardinal bridge and an explicit tangent-disk bump-function proof of complete regularity and $T_1$; corrected malformed math control sequences. |
| Missing source convention/hypothesis. | sigma-locally-finite fallback and `thm-nagata-smirnov-metrization` | Narrowed the source-backed route to regular $T_1$ spaces, matching the cited source's convention. |

### Step-8 judge adjudication and repairs

| defect type and location | affected item(s) | disposition |
|---|---|---|
| Overstrong definition. | `def-inflection-point-by-change-of-convexity` | Excluded constant-function false inflections. |
| Circularity and missing range restriction. | `def-hyperbolic-functions` | Made the nonzero/range argument non-circular and restricted cosh strict increase to its valid half-line. |
| Unjustified proof inference / citation defects. | `thm-hyperbolic-identities-and-derivatives` | Repaired MVT/IVT hypotheses, exact mean-value citation, defining-formula and quotient-domain facts, and the reference to the step whose identity is used. This proof was repeatedly escalated, locally re-audited, and finally passed both judges. |
| Proof ordering defect. | `cor-trigonometric-parity-and-pythagorean-identity` | Proved Pythagoras before consuming it; then made differentiability-to-continuity and the all-real addition formulas explicit. |
| Free variable and unsupported negative-integer shift. | `thm-sine-cosine-zero-sets-and-fundamental-period` | Bound the integer existentially, used natural induction, derived backward shifts explicitly, and cited the integer representation/power laws. |
| Missing proof bridge. | `thm-convex-functions-are-differentiable-off-a-countable-set` | Supplied the needed convex one-sided-limit argument. |
| Ill-defined metric construction when no chain exists. | `lem-alexandroff-urysohn-metrization-lemma` | Made the compatible-cover-chain distance well-defined in the no-chain case. |

The Step-8 table includes repeated citation defects where they mattered:
hyperbolic derivatives were repaired through four paired cycles; the
trigonometric corollary through two. Every later repair waited for both model
lanes on the same frozen context, and both repair intervals have impact receipts
covering their affected consumers.

## Mechanism findings

- The two-pair cap rejected a synthetic over-cap manifest; all real batches
  stayed within it.
- Source-grounded scaffold review prevented four false/unsafe mathematical
  routes before authoring; B-leaf checking caught three structural violations;
  plan validation exposed the hidden Tychonoff prerequisite.
- Independent readers caught five fatal defects before judges. The source-backed
  fallback protocol prevented two false local metrization proofs from becoming
  load-bearing local results.
- Paired judging found additional fatal logic and citation defects after the
  reader audit. Terra issued more signals; DeepSeek had the higher
  fatal-confirmation rate among its signals. Neither result establishes recall.
- The new current-context coverage and spine receipts validated closure rather
  than relying on a prose assurance. Their limitation is semantic: hashes and
  structural checks cannot establish a theorem's truth.

## Step-9 scope-denial result and readiness

The published corpus remains internally truthful today because all new content
is draft. The sweep found one future decay across two published oscillator
orientation surfaces: once sine is published, they can no longer say that no
sine item exists. The exact, unapplied publication-time amendments are in
`research/frontier-7-published-amendments.md`; do not alter that public prose
before a separate authorized publication change and owner audit.

The draft build is otherwise ready for the owner's publication decision. The
next authorized operation is owner audit (including the staged oscillator
prose amendment if publishing), not automatic publication, commit, or push.
