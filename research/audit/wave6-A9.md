# Wave 6 — A9 scope-denial re-grep and published-claim decay sweep

Orchestrator decision receipt. `AUDIT-WORKFLOW.md` §A9 requires every repaired
file to be re-read for scope-denial prose and for claims that were true when
written but have been falsified by later published levels. This pass did not
invoke either judge lane.

## Scope

The exact surface was all 30 unique ids in
`research/audit/wave6-rejudge-targets.json`: five mathematical A4 repairs, 19
A4 topology source corrections, and eight A6 source corrections, with two
items common to the source-correction sets. Every item was read in full, not
sampled. Their six published home pages were also read in full:

- `real-analysis/formal-laurent-series-field`
- `real-analysis/limsup-and-subsequential-limits-examples`
- `topology/homotopy-and-homotopy-equivalence`
- `topology/homotopy-and-homotopy-equivalence-examples`
- `topology/hausdorff-via-the-diagonal`
- `topology/hausdorff-via-the-diagonal-examples`

## Re-grep dispositions

The earlier 13-item pass remained sound. In particular, the Laurent-field
denials still distinguish Cauchy completeness from least-upper-bound
completeness and the unrestricted nested-interval property; the extended-real
example's “does not determine” is the claim its three incompatible products
prove; and the two closed-graph counterexample items state their missing
hypotheses accurately.

The 17 topology source-repair items omitted from the first target receipt were
then read in full. Their mathematical bodies are internally consistent and no
new denial was introduced by the source corrections. The A8 adjudications have
the following durable dispositions:

- `def-the-diagonal-of-a-space`: the common domain's topology is implicit in
  the cited product-universal-property continuity clause; confirmed nonfatal,
  no edit.
- `thm-hausdorff-iff-the-diagonal-is-closed`: its false universal page-scope
  claim was fatal and was repaired at A8, independently certified, and passed
  both rejudge lanes.
- `rem-what-the-diagonal-criterion-gives-and-what-it-costs`: replacing an
  ambient open cover by its traces in the compact subspace is immediate from
  the cited subspace definition; confirmed nonfatal, no edit.
- `ex-the-graph-of-a-continuous-real-function-is-closed`: its missing
  Hausdorff hypothesis was fatal and was repaired at A8, independently
  certified, and passed both rejudge lanes.
- `ex-a-finite-hausdorff-space-is-discrete`: the alleged missing complement
  rule is explicitly supplied by `def-topological-space`; false positive.
- `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`:
  the cited subspace-topology definition explicitly states transitivity;
  false positive.

The repaired theorem exposed one stale sentence on
`library/topology/hausdorff-via-the-diagonal.md`: “Everything else here is
obtained by pulling that one closed set back” contradicted the page's
sequential and compactness sections. A9 narrowed that page prose to the exact
agreement-set and graph pullbacks, the dense-uniqueness consequence, and the
separate separation arguments used later. No item text, contract, impact
receipt, or judge target changed at A9.

## Required personal audits

The combined judge/touch history escalated ten items. The orchestrator re-read
each complete item and the cited hinge rather than accepting the A8 disposition
by report:

| item | personal disposition |
|---|---|
| `thm-laurent-cauchy-complete` | **Sound; no edit.** Induction on the additive natural-number gap extends the consecutive-index inequality; no predecessor lemma is needed. |
| `cex-zero-times-infinity-indeterminate` | **Sound; no edit.** The eventual-threshold definition gives divergence to `+infinity`, and the two constant product limits already prove indeterminacy. |
| `cor-convex-subsets-of-rn-are-contractible` | **Sound; no edit.** The Statement's standing `n >= 1` hypothesis governs the shortened local Fact. |
| `lem-straight-line-homotopies-are-continuous` | **Sound; no edit.** Direct substitution gives the endpoints; the item proves the only non-algebraic obligation. |
| `def-the-diagonal-of-a-space` | **Sound; no edit.** The cited product theorem supplies the topological-space reading of the common domain in its continuity clause. |
| `thm-hausdorff-iff-the-diagonal-is-closed` | **Fatal scope prose repaired.** The biconditional itself is unchanged; the narrow final text is certified and passed both judges. |
| `rem-what-the-diagonal-criterion-gives-and-what-it-costs` | **Sound; no edit.** Taking ambient-open traces yields the intrinsic compact-subspace cover immediately. |
| `ex-the-graph-of-a-continuous-real-function-is-closed` | **Fatal hypothesis omission repaired.** “Compact Hausdorff” now matches the cited equivalence; the final text is certified and passed both judges. |
| `ex-a-finite-hausdorff-space-is-discrete` | **Sound; no edit.** Closed-complement duality is directly cited. |
| `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure` | **Sound; no edit.** Subspace-topology transitivity is directly cited. |

Dropping any of the eight sound items would remove a load-bearing theorem,
counterexample, or topology spine node without a mathematical basis. The two
fatal findings were repaired rather than dropped, and their 25 computed
consumers remain licensed.

## Outcome

- Published-claim decay: **one stale page-scope sentence repaired**.
- Scope-denial defects: **none remaining**.
- A9 edits: **one page-prose correction; zero item edits**.
- Rejudge calls at A9: **zero**.
- Decision: **A9 complete; advance to A10**.
