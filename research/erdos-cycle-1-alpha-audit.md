# Erdős cycle 1 Alpha audit

Date: 2026-07-31

Role: Alpha-n, step 6b/6c

## Outcome

The Beta report at `research/erdos-cycle-1-beta-audit.md` was received and its
coverage was complete. I independently read all four assigned pages and all 67
draft item files from disk, including every proof/refutation step, Definition,
Statement, Fact, dependency list, Remark, and page summary. I then checked all
ten reported Beta repairs against the final files. All ten repairs are accepted;
none required amendment, rejection, reversion, or extension.

I found no additional publish-blocking mathematical defect and made no change to
an assigned item or page. This report is the only file added by Alpha. No result
was added, deleted, renamed, judged, published, or marked audited, so the
personally-authored-proof requirement was not triggered.

## Coverage

| Page | Kind | Items read |
|---|---:|---:|
| `library/real-analysis/uniform-convergence-of-functions.md` | A | 19 |
| `library/real-analysis/uniform-convergence-of-functions-examples.md` | B | 8 |
| `library/combinatorics/chains-antichains-sperner-and-dilworth.md` | A | 32 |
| `library/combinatorics/chains-antichains-sperner-and-dilworth-examples.md` | B | 8 |
| **Total** |  | **67** |

All 54 proof-bearing items pass final proof precheck. All 67 items remain
`status: draft`; none has a stale `verification.audited` or
`verification.judge` block.

### Page-summary contracts

- `uniform-convergence-of-functions.md` has exactly two nonempty prose
  paragraphs, with 55 and 71 words.
- `chains-antichains-sperner-and-dilworth.md` has exactly two nonempty prose
  paragraphs, with 50 and 66 words.
- Both B pages have no authored summary body.

Each A-page first paragraph accurately states the mathematical background and
the declared prerequisites actually used. Each second paragraph accurately
describes the main definitions, theorems, and logical progression. All four
pages therefore satisfy their summary contracts.

## Dependency and forward-reference audit

The mechanical checklist is
`research/erdos-cycle-1-audit-manifest.json`. It contains one Beta batch,
`erdos-cycle-1-batch-1`, so there are no cross-batch edges. Its 271 dependency
edges divide into 85 same-batch edges and 186 backward edges to published
content. I read every one of those 271 source uses and its target on disk,
including all same-batch edges rather than only the minimum non-same-batch
set. For each edge I checked the exact target Definition or Statement, the
hypotheses, the direction of use, and whether the source silently needed a
stronger claim. All 271 are semantically sound.

The manifest is a pre-Beta snapshot. Final frontmatter contains four additional
dependency edges:

- `def-pointwise-uniform-and-uniformly-cauchy-convergence` to
  `cor-archimedean-reciprocal`;
- `thm-uniform-derivative-limit-on-a-closed-interval` to
  `def-continuity-real`;
- `thm-uniform-derivative-limit-on-a-closed-interval` to
  `lem-real-and-metric-notions-agree`;
- `cor-sperner-from-symmetric-chains` to
  `def-boolean-lattice-and-levels`.

I audited those four edges by the same source-and-target standard. Thus the
final-disk dependency coverage is 275 edges: 86 same-batch and 189 backward to
published content. There is no manifest-only stale edge. The manifest has 73
distinct published targets; the post-Beta supplement raises the final-disk
total to 74. Every one was opened and read, is published, has the claimed
consumer-visible result, is not a B-page result, and is not marked
`proved_here: false`.

I also audited all four declared forward references, all from
`rem-uniform-convergence-agrees-with-the-later-uniform-topology`:

- `def-topology-of-uniform-convergence`;
- `lem-uniform-convergence-in-the-uniform-metric`;
- `thm-uniform-limit-theorem`;
- `thm-dini`.

Each target exists on the later published page
`function-space-topologies`; each local use is an accurate orientation-only
remark rather than a load-bearing proof citation. `fwdcheck` classifies the
source as direct and reports no open or inherited scoped forward reference.

## Beta-fix adjudication

| # | Item | Alpha disposition | Disk verification |
|---:|---|---|---|
| 1 | `def-pointwise-uniform-and-uniformly-cauchy-convergence` | Accepted | The Archimedean reciprocal dependency and rational-to-real epsilon bridge are present and correct. |
| 2 | `thm-uniform-cauchy-criterion-real-functions` | Accepted | Fact A3, the joint threshold, and the canonical phase structure correctly license the real-epsilon conclusion. |
| 3 | `thm-uniform-derivative-limit-on-a-closed-interval` | Accepted | The real-continuity and real/metric dictionary dependencies, Statement link, Fact L7, and proof conversions now match exactly. |
| 4 | `rem-uniform-convergence-agrees-with-the-later-uniform-topology` | Accepted | The text is a local orientation remark and its four forward targets are accurate and declared. |
| 5 | `def-join-irreducible-element` | Accepted | The title and Definition now impose the necessary nonempty finite-lattice hypothesis. |
| 6 | `def-sunflower` | Accepted | The parameter is typed as `r in N` with `r >= 2`. |
| 7 | `lem-dilworth-induction-step` | Accepted | The Statement exposes the nonempty proper smaller subposets and width conclusions; the proof establishes strict cardinality and valid chain splicing. |
| 8 | `thm-dilworth-finite-posets` | Accepted | The cumulative predicate `Q(n)` correctly licenses induction on all smaller finite cardinalities. |
| 9 | `lem-finite-lattice-join-irreducible-decomposition` | Accepted | The full finite-family join argument proves the required decomposition rather than only a binary fragment. |
| 10 | `cor-sperner-from-symmetric-chains` | Accepted | The direct Boolean-lattice level dependency and Fact F2 are present and used in the right direction. |

## Alpha edits, unresolved findings, and touch ledger

No assigned item or page was changed. No result was added or deleted. The only
mechanical reconciliation finding is that the supplied manifest predates four
Beta dependency additions; those additions are explicitly listed and fully
audited above. There is no unresolved mathematical, citation, page-contract, or
write-boundary defect.

The touch ledger records the ten Beta-repaired items at one repair each. Alpha
did not retouch any of them. Therefore there is no twice-touched item requiring
orchestrator personal audit.

## Consolidated step-10 fatal-error ledger

The following ledger reconciles all publish-blocking defects found by Beta and
confirmed by Alpha. Alpha found no additional fatal defect. Maintenance edits
that a competent reader could close within 30 seconds are excluded from this
ledger.

| Defect type | Location | Affected id/file | Exact disposition |
|---|---|---|---|
| Semantic citation and unlicensed inference | Definition and Facts/dependencies; proof/refutation | `def-pointwise-uniform-and-uniformly-cauchy-convergence`; `thm-uniform-cauchy-criterion-real-functions` | **Correct dependencies/hypotheses and repair proof:** added `cor-archimedean-reciprocal`, repaired the Definition bridge, and used it to pass from rational error control to arbitrary real epsilon. |
| Semantic dictionary mismatch | Title/Statement; Facts/dependencies; proof step 1.1 | `thm-uniform-derivative-limit-on-a-closed-interval` | **Correct dependencies/hypotheses and repair proof:** added the real-continuity and real/metric equivalence dependencies and made both conversions explicit. |
| Invalid induction inference | Proof steps 1.1–1.2 | `thm-dilworth-finite-posets` | **Repair/replace proof:** replaced exact-cardinality induction by the cumulative assertion `Q(n)` and repaired the induction step. |
| Missing consumer-visible hypotheses and conclusions | Title/Statement; proof/refutation; consumer proof step 2.1 | `lem-dilworth-induction-step`; `thm-dilworth-finite-posets` | **Restate and repair proof:** exposed the nonempty proper smaller-subposet and width conclusions, proved strict cardinality, and corrected the theorem's citation use. |
| False/overstrong definition | Title/Statement | `def-join-irreducible-element` | **Restate:** added the necessary nonempty hypothesis to the finite-lattice title and Definition. |

For completeness, the expanded Dilworth chain-splicing explanation, full-family
finite join argument, sunflower type annotation, direct Boolean-level
dependency, and orientation-only wording were useful Beta maintenance repairs
but are not separate fatal entries under the 30-second-gap rule.

## Gates

| Gate | Final result |
|---|---|
| `tools/reflow.mts` | Beta ran it on all six repaired proof-bearing files; all were already canonical single-line physical paragraphs. Alpha changed no proof file, so no further reflow target existed. |
| `tools/precheck.mts` | 54 scoped proof-bearing items checked; 54 passed, 0 failed. |
| `tools/prosecheck.mjs --warnings` | All 67 items and four pages checked; 0 errors and 0 warnings. |
| `tools/citecheck.mjs` | All 67 items checked; clean. |
| `tools/rendercheck.mjs` | All 67 items and four pages checked; all math and delimiters parsed cleanly. |
| `tools/depcheck.mjs` | Exit 0: no cycles, all references resolve, and no draft item occurs on a published page. The global warning stream contains no scoped item defect. |
| `tools/fwdcheck.mjs` | Exit 0: every scoped forward reference is declared, strictly forward, closed, orientation-only, and acyclic. |
| `tools/extcheck.mjs` | Exit 0; the repository-wide legacy warning stream contains no scoped item. |
| `tools/validate-plan.mjs research/plan-spec.json` | Exit 0. Its scoped messages are the plan's known nonblocking redundant-prerequisite warnings, not authored-item defects. |
| `tools/depsource.mjs` on each assigned page | Four runs, all exit 0, with 0 unresolved dependencies. |

No judge was invoked and no status, audited flag, publication state, commit, or
remote branch was changed. The owner-prescribed closing workflow remains:
step 9 proceeds without a pause, and the owner pauses only at the end of step
10. This step-6 audit neither advances nor pauses that workflow.
