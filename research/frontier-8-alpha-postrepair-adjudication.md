# Frontier 8 post-repair current-context adjudication

**Frozen input:** `research/frontier-8-postrepair-current-rejection-candidates.json`,
generated `2026-08-01T23:02:34.228Z`.

## Exact coverage

Alpha adjudicated all **178** frozen post-repair candidates independently
against the current disk text and cited dependency.  One new row, with
`notes`, was appended to `research/frontier-8-judge-adjudications.jsonl` for
every candidate, including candidates whose hash was also present in an older
sweep.  The final 178 ledger rows exactly match the frozen candidate list in
order and on `(id, model, context_sha256)`.

No library item, proof contract, plan, receipt, or renderer was edited during
this adjudication.

| Judge | Candidates | Fatal | Nonfatal | False positive |
| --- | ---: | ---: | ---: | ---: |
| DeepSeek v4 Pro | 58 | 2 | 52 | 4 |
| GPT-5.6 Terra | 120 | 3 | 115 | 2 |
| **Total** | **178** | **5** | **167** | **6** |

All five confirmed fatals are semantic/statement defects (`other`).  The
remaining confirmed issues are localized citation or proof gaps subject to the
30-second rule.  Rejections based solely on omitted AC, Countable Choice, or
Dependent Choice were false positives because those principles are globally
adopted by the library.

## Fatal disposition

| Current fatal candidate | Owner | Current status | Bounded escalation audit? |
| --- | --- | --- | --- |
| `cor-lagrange-multiplier-rule-for-graph-constraints` (Terra) | Batch 3 | Fresh current fatal: the statement leaves the scalar-valued ambient domain of `f` unspecified, so its gradient and graph-local extremum are not well-formed. | **No.** A narrowly scoped Beta statement/hypothesis repair is sufficient. |
| `def-local-path-packings-and-separators` (DeepSeek) | Batch 4 | Repeated/unrepaired semantic defect: the undirected multigraph/path-occurrence basis remains undefined after the earlier labelled-arc repair. | **Yes.** Audit the bounded flow/connectivity definition cluster before another repair, including labelled undirected edges and every use of edge/arc disjointness. |
| `def-samuel-uniformity` (DeepSeek) | Batch 5 | Repeated/unrepaired semantic defect: the target “usual metric” uniformity on `[0,1]` is still not supplied, so the defining family of uniformly continuous maps is incomplete. | **Yes.** Audit the bounded Samuel/uniformity-definition cluster and its target-space conventions. |
| `thm-complex-nth-roots-and-roots-of-unity` (Terra) | Batch 2 | Fresh direct fatal on the current hash: root formulas divide by a natural number rather than its canonical field image. Earlier citations to this item were not an adjudication of this malformed statement. | **Yes.** Audit the bounded complex-power/root formula cluster for the same natural-to-field coercion defect. |
| `thm-multivariable-taylor-formula-with-lagrange-remainder` (Terra) | Batch 3 | Fresh direct fatal on the current hash: its displayed Taylor formula divides by a natural factorial rather than the canonical real image. Earlier mixed-partial/Taylor findings were distinct proof defects. | **Yes.** Audit the bounded multivariable Taylor formula cluster, including definitions and downstream remainder statements, before another Beta repair. |

“Fresh” here means a new direct fatal defect in the current post-repair
hash-attested text; “repeated/unrepaired” means the same semantic definition
problem was already surfaced in an earlier Frontier-8 adjudication.  The
escalation recommendation is a containment measure, not a permission to begin
an audit or repair in this step.

## Remaining nonfatal backlog

The 167 confirmed nonfatal findings are dominated by missing proof-step
citations, shortened fact statements, omitted boundary sentences, and small
proof repairs (for example, a missing finite-subcover reference or an explicit
empty-chain case).  They do not authorize a repair until the owner coordinates
the next stage.
