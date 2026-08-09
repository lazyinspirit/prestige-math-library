# Wave 7 — A9 scope-denial re-grep and published-claim decay sweep

Orchestrator decision receipt. This was the decision-only A9 dispatch: no
item or page was edited, and neither judge lane was invoked.

## Prerequisite check

The dispatch is valid. `research/audit/wave7-run-state.json` records A4 and A6
complete, A7 complete on the exact 48-item repair set, and A8 complete after
four fatal-only repairs. The final targeted A8 receipt keeps all four repaired
items in both lanes. The A9 task on disk matches this brief.

The evidence read before deciding was the current text on disk, not an agent
summary: `research/audit/wave7-rejudge-targets.json`, the complete A6/A8 repair
ledger in `research/audit/wave7-published-repairs.md`, all adjudication rows in
`research/audit/wave7-judge-adjudications.jsonl`, the current targeted-judge
receipt, every repaired item, and every published home page containing one of
those items.

## Complete reread surface

All 48 repaired items were read in full, not sampled:

- `cex-composition-of-limits-fails`,
  `cex-limit-not-unique-at-an-isolated-point`,
  `cor-compact-domain-maps-are-uniformly-continuous`,
  `cor-perfect-normality-is-hereditary`,
  `cor-separated-uniformizable-iff-tychonoff`,
  `def-completeness-properties`.
- `def-gauge-of-pseudometrics`, `def-uniform-cover-space`,
  `ex-a-urysohn-function-on-the-real-line`,
  `ex-abel-dini-pair-for-the-harmonic-series`,
  `ex-cauchy-complete-not-complete-field`,
  `ex-harmonic-series-diverges`.
- `ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`,
  `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`,
  `ex-rational-function-field-order`,
  `ex-sierpinski-space-is-normal-and-not-completely-regular`,
  `ex-the-metric-urysohn-function-costs-no-choice`,
  `fs-nested-intervals-implies-lub`.
- `fs-nth-term-test-converse`,
  `lem-cauchy-filter-with-a-cluster-point-converges`,
  `lem-completely-regular-topologies-come-from-continuous-pseudometrics`,
  `lem-convergent-filters-are-cauchy`,
  `lem-entourage-and-uniform-cover-dictionary`,
  `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`.
- `lem-finite-minima-of-continuous-unit-interval-maps`,
  `lem-limit-implies-local-boundedness`,
  `lem-metric-uniformity-dictionary`,
  `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
  `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`,
  `lem-symmetric-entourages-form-a-base`.
- `rem-classical-oscillator-is-sine-of-one-over-x`,
  `rem-strength-order-of-the-nonnegative-tests`,
  `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`,
  `thm-compact-hausdorff-open-cover-uniformity`,
  `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`,
  `thm-complete-and-totally-bounded-uniform-spaces-are-compact`.
- `thm-completeness-equivalences`, `thm-composition-of-function-limits`,
  `thm-countably-based-uniformity-is-pseudometrizable`,
  `thm-hausdorff-completion-of-a-uniform-space`,
  `thm-limit-comparison-test`, `thm-ratio-test`.
- `thm-root-test`, `thm-sequential-criterion-for-function-limits`,
  `thm-three-definitions-of-uniform-space-are-equivalent`,
  `thm-tietze-extension-theorem`,
  `thm-uniformizable-iff-completely-regular`, `thm-urysohn-lemma`.

Their 11 published home pages were also read in full:

- `library/real-analysis/equivalent-forms-of-completeness.md`
- `library/real-analysis/equivalent-forms-of-completeness-examples.md`
- `library/real-analysis/limits-of-real-functions.md`
- `library/real-analysis/limits-of-real-functions-examples.md`
- `library/real-analysis/series-and-nonnegative-tests.md`
- `library/real-analysis/series-and-nonnegative-tests-examples.md`
- `library/topology/hereditary-and-productive-separation.md`
- `library/topology/urysohn-lemma-and-tietze.md`
- `library/topology/urysohn-lemma-and-tietze-examples.md`
- `library/topology/uniform-spaces.md`
- `library/topology/uniform-spaces-examples.md`

## A9 decisions

### A9-1 — stale categorical overclaim on the uniform-spaces page

**APPROVE a page-prose correction.** The summary in
`library/topology/uniform-spaces.md` still says that the page develops “the
complete Hausdorff reflection.” A8 deliberately corrected
`thm-hausdorff-completion-of-a-uniform-space` to “Hausdorff completion”: its
Statement proves a complete separated target, dense canonical image, and the
embedding criterion, but not the universal factorisation property conveyed by
“reflection.” Replace the page phrase with “Hausdorff completion.” This is the
same overclaim A8 removed from the theorem title, not a new theorem proposal.

### A9-2 — decayed global absence claim in the oscillator remark

**APPROVE an item-prose correction.** The last paragraph of
`rem-classical-oscillator-is-sine-of-one-over-x` says that smoothness, power
series, and the topologist's sine curve are not defined “in this library yet.”
That is contradicted by the same item's earlier statement that the library now
constructs sine and cosine from power series, and by the published
`def-real-power-series-and-radius-of-convergence`,
`def-higher-derivatives-and-smoothness`,
`lem-the-oscillating-zigzag-curve`, and `rem-shape-theory`. Preserve the true
reading-order boundary by deleting the global absence claim and saying instead
that those notions occur only later in the reading order and are unavailable
on this earlier page. The mathematical comparison between the zigzag
oscillator and sine remains unchanged.

### Candidates declined after full-context reading

- **DECLINE changes to page-local and reading-order denials.** Phrases such as
  “at this point,” “on this page,” and “until the next page” in the series and
  completeness material remain true even though later published pages now
  define logarithms, power series, and integration.
- **DECLINE changes to the Abel–Dini logarithm sentence.** Its full sentence
  says the logarithm and the asymptotic estimate are unavailable “at this
  point,” then proves that neither is needed.
- **DECLINE changes to the rational-function-field limitations.** The current
  library proves the non-Archimedean order on `R(t)` but does not decide its
  Cauchy or nested-interval properties or construct the discussed embedding;
  the page expressly limits each denial to what it proves or uses.
- **DECLINE changes to the choice-cost independence disclaimer.** The linked
  independence item is published as sourced context with `proved_here: false`;
  saying this library proves no such independence result remains precise.
- **DECLINE changes to mathematical negations and counterexample prose.** The
  remaining grep hits—“neither hypothesis,” “nothing about the value,” missing
  converses, and inconclusive ratio/root tests—state the local mathematics,
  not claims that the library lacks later content.

## Required personal audits

The combined touch/refutation history escalated the following 32 items. Each
complete current item and the cited hinge was re-read personally:

| item | personal disposition |
|---|---|
| `cex-limit-not-unique-at-an-isolated-point` | **Sound; no edit.** The cited absolute-value fact contains the needed nonnegative case. |
| `cor-perfect-normality-is-hereditary` | **Sound; no edit.** The standing perfect-normality hypothesis supplies the displayed `G_delta` representation. |
| `def-completeness-properties` | **Fatal A7 overclaim repaired at A8.** The current Remark records agreement at the reals without claiming that they are the only overlap. |
| `def-gauge-of-pseudometrics` | **Sound; no edit.** The pseudometric and filter-base checks are immediate from the displayed definitions. |
| `def-uniform-cover-space` | **Sound; no edit.** The cited dictionary explicitly says the two constructions recover the same uniform structure. |
| `ex-a-urysohn-function-on-the-real-line` | **Sound; no edit.** Corestricting the displayed continuous real-valued map to `[0,1]` is immediate. |
| `ex-abel-dini-pair-for-the-harmonic-series` | **Fatal A7 superlatives repaired at A8.** The current text states the two exponents and obtains no-slowest divergence by reapplying Abel–Dini. |
| `ex-harmonic-series-diverges` | **Fatal A7 superlative repaired at A8.** The current lower bound is called a quantitative witness, not a slowest divergence. |
| `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` | **Sound; no edit.** The cited reciprocal-limit corollary supplies the exact eventual estimate used. |
| `ex-rational-function-field-order` | **Sound; no edit.** Leading coefficients multiply, so the positive-cone product check closes directly. |
| `ex-sierpinski-space-is-normal-and-not-completely-regular` | **Sound; no edit.** The closed subsets follow immediately by complementing the displayed topology. |
| `ex-the-metric-urysohn-function-costs-no-choice` | **Sound; no edit.** Lipschitz distance functions and positivity of the denominator license the explicit ratio. |
| `fs-nth-term-test-converse` | **Sound; no edit.** Equality and strict cases supply the displayed non-strict reciprocal inequality. |
| `lem-cauchy-filter-with-a-cluster-point-converges` | **Sound; no edit.** Upward closure is one of the cited filter axioms. |
| `lem-completely-regular-topologies-come-from-continuous-pseudometrics` | **Sound; no edit.** The empty-complement edge case only makes the stated zero-image requirement vacuous. |
| `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity` | **Sound; no edit.** The cited construction supplies the base characterization used by the proof. |
| `lem-finite-minima-of-continuous-unit-interval-maps` | **Sound; no edit.** Product topology and coordinate projections license the coordinate-open neighborhoods. |
| `lem-limit-implies-local-boundedness` | **Sound; no edit.** Epsilon one and the triangle inequality give the bound directly; its provenance was already corrected. |
| `lem-metric-uniformity-dictionary` | **Sound; no edit.** The diagonal condition is the metric axiom at zero distance. |
| `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` | **Sound; no edit.** The intersection construction satisfies the filter axioms directly. |
| `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space` | **Sound; no edit.** Taking the singleton containing the point produces the required basic member. |
| `lem-symmetric-entourages-form-a-base` | **Sound; no edit.** The uniformity definition explicitly puts the diagonal in every entourage. |
| `rem-classical-oscillator-is-sine-of-one-over-x` | **A7 rejection false; separate A9 decay approved.** The zigzag implications have the stated direction, but the final global absence claim is stale as recorded in A9-2. |
| `rem-strength-order-of-the-nonnegative-tests` | **Sound; no edit.** Its alternating-series sentence is explicitly deferred orientation, not a proof dependency. |
| `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` | **Sound; no edit.** The two-distance ratio follows immediately from the cited metric ingredients; the independence disclaimer remains accurate. |
| `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` | **Sound; no edit.** The cited cover theorem applies to covers admitting an open refinement, which includes the use made here. |
| `thm-composition-of-function-limits` | **Sound; no edit.** The Given clause already assumes that the intermediate target is a limit point. |
| `thm-countably-based-uniformity-is-pseudometrizable` | **Sound; no edit.** Adjoining the full relation and reindexing gives the normalized sequence used in the proof. |
| `thm-hausdorff-completion-of-a-uniform-space` | **Fatal A7 title overclaim repaired at A8.** The current title and Statement assert exactly a Hausdorff completion; A9-1 removes the stale page echo. |
| `thm-ratio-test` | **Sound; no edit.** The cited extended-real definition supplies the total order used in the case split. |
| `thm-sequential-criterion-for-function-limits` | **Sound; no edit.** The construction quantifies over positive indices and uses `k+1`, so there is no zero-index gap. |
| `thm-tietze-extension-theorem` | **Sound; no edit.** The finite-sum estimate follows by induction from the binary triangle inequality. |

All 32 current mathematical cores are sound. Dropping any item would remove a
definition, theorem, example, or boundary witness without mathematical cause;
the oscillator remark needs only the narrow A9-2 prose correction. The four A8
fatal findings were narrowed without deleting their valid mathematical
content.

## Validation and outcome

The authoritative prose check reports 3,043 files checked, zero errors, and
only its known heuristic warning classes. Its scope-denial warnings were used
as entry points and then resolved by the complete rereads above.

- Published-claim decay: **two defects approved for correction**.
- Other scope-denial candidates: **declined; current wording is accurate in
  context**.
- A9 content edits: **zero**, as required by the decision-only orchestrator
  dispatch.
- A9 judge calls: **zero**.
- Decision: **A9 adjudication complete. The two approved prose corrections
  must be applied by the execution role before the final A10 gate.**

## Execution closure

The execution role applied exactly A9-1 and A9-2. The uniform-spaces page now
says “Hausdorff completion.” The oscillator Remark now limits unavailability
to the earlier page and explicitly records that the later counterexample's
`Statement refuted` is the false limit-existence proposition that its
Counterexample section disproves.

The page edit changes no item interface. The one changed item has final
normalized hash
`950a18d311bee4d606a8d76ac36711f353a42be70b6a96831634519ae036f985`;
a fresh read-only GPT 5.6 Terra certifier returned `CERTIFIED`. Its two direct
citation consumers were reviewed `still-licensed`. Only that item was sent to
the judges; the final DeepSeek V4 Pro and GPT 5.6 Terra verdicts are both
`keep:true` at exact context
`f0707ce5c98f9e644bde170c8c4de79e97375f25b69e5f328bf584a0fac83bc8`.
Earlier rejected wording attempts remain append-only evidence and are not used
as final coverage. The A9 gates and all nine A10 gates pass on this final text.
