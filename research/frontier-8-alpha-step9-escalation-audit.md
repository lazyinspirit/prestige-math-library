# Frontier 8 — Step 9 bounded escalation audit

Baseline: `pre-step9-alpha-escalation` in
`research/frontier-8-touches.json`.

This audit began from the frozen postrepair corpus.  It did not reopen the
167 nonfatal judge findings.  Repairs below are restricted to the four
authorized clusters and the separately authorized graph-constraint corollary,
with the three later, narrowly authorized Batch-5 closure repairs recorded
separately.

## Independent reader coverage

- A read-only independent proof refuter checked Batch 2 natural-to-complex
  coercions and Batch 3 multivariable Taylor/remainder consumers.  It also
  re-read the repaired graph-constraint corollary and passed its open ambient
  domain, scalar codomain, relative extremum, curve containment, dimensions,
  signs, and affine example.
- A second read-only independent proof refuter checked Batch 4 labelled-path
  notions and Batch 5 Samuel target-metric/uniformity conventions.

Both readers worked from the same frozen content and did not edit files.

## Findings and dispositions

| Scope | Fatal finding | Disposition |
| --- | --- | --- |
| Batch 2 | Natural indices/coefficient counts were used as complex or real scalars without the canonical map in `cor-complex-de-moivre-formula`, `lem-binomial-theorem-over-complex-numbers`, `thm-complex-nth-roots-and-roots-of-unity`, `cor-sum-of-roots-of-unity`, and `ex-fifth-roots-of-unity`. | Repaired with the appropriate $\mathbb Z\to\mathbb Q\to\mathbb R$, $\mathbb N\to\mathbb C$, or $\mathbb N\to\mathbb R$ map.  The direct exponential-series consumer was conformed to the corrected complex binomial formula and its contract. |
| Batch 3 | Factorial and multinomial coefficients in the real Taylor formulas were untyped natural numbers rather than their real canonical images. | Repaired in `lem-derivatives-along-a-line-have-the-multinomial-expansion`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, and `cor-multivariable-taylor-formula-with-peano-remainder`; added the exact finite-sum/canonical-map citation receipts.  `def-multivariable-taylor-polynomial` now explicitly quantifies its natural degree. |
| Graph constraint | `cor-lagrange-multiplier-rule-for-graph-constraints` lacked an open scalar-valued ambient domain and did not establish that its curve remained in that domain. | Repaired to state $f:W\to\mathbb R$, $a\in W$, the relative extremum on $W\cap\operatorname{graph}(\psi)$, and the continuity/open-set bridge in step 1.1.  Independent reread: pass. |
| Batch 4 | The labelled-undirected-path definition cited only simple graph/digraph material, while it claimed multigraph edge-label semantics. | Added `def-multigraph-loop-and-digraph`, an inline citation, and explicit ordinary graph/digraph specialisations. |
| Batch 5 target metric | `def-samuel-uniformity` invoked the usual uniformity on $[0,1]$ without establishing the restricted real metric; `ex-samuel-compactification-of-the-open-unit-interval` had the same convention gap. | Repaired both with the inherited subspace metric $d(s,t)=|s-t|$, the real-line metric source, the metric-subspace licence, and metric-uniformity source. |

The two Batch-2/B4 nonfatal observations were deliberately not repaired:
the omitted modulus-one bridge in `lem-dalembert-minimum-modulus-descent` and
the short circulation/opposite-inequality bridges in the local-path/Menger
cluster are human-closeable in under 30 seconds.  No other nonfatal finding was
reopened.

## Narrow Batch-5 closeout addition authorized by root

After the bounded readers reported three additional fatal public claims, root
authorized only these minimal corrections because leaving them would defeat a
credible Step-10 closure:

| Item/page | Fatal public claim | Minimal correction |
| --- | --- | --- |
| `ex-samuel-compactification-of-a-compact-hausdorff-space` | The affirmative $K=\varnothing$ branch is incompatible with the proper-filter compactification convention. | Restricted the example/title to nonempty compact Hausdorff $K$, removed the empty branch, and updated the empty-boundary receipt. |
| `ex-samuel-compactification-of-discrete-naturals-is-beta-n` | Its title did not carry the dependent-choice and ultrafilter-lemma assumptions. | Added those assumptions to the title, example statement, and Given block without changing the item ID. |
| `library/topology/uniform-completeness-and-samuel-compactification.md` | “Precisely” asserted necessity where the cited construction only gives a sufficient route. | Replaced it with the stated sufficiency wording. |

## Contracts, changed scope, and handoff

Updated Batch 2, 3, and 5 contracts, then regenerated
`research/frontier-8-proof-contracts.json`.  The material item rejudge set is:

```text
cor-complex-de-moivre-formula
lem-binomial-theorem-over-complex-numbers
thm-complex-exponential-addition-and-real-extension
thm-complex-nth-roots-and-roots-of-unity
cor-sum-of-roots-of-unity
ex-fifth-roots-of-unity
def-multivariable-taylor-polynomial
lem-derivatives-along-a-line-have-the-multinomial-expansion
thm-multivariable-taylor-formula-with-lagrange-remainder
cor-multivariable-taylor-formula-with-peano-remainder
cor-lagrange-multiplier-rule-for-graph-constraints
def-local-path-packings-and-separators
def-samuel-uniformity
ex-samuel-compactification-of-the-open-unit-interval
ex-samuel-compactification-of-a-compact-hausdorff-space
ex-samuel-compactification-of-discrete-naturals-is-beta-n
```

All sixteen item edits change a public surface (statement/definition/example,
facts, title, or dependencies), except that
`thm-complex-exponential-addition-and-real-extension` changes the cited fact
and proof rather than its theorem statement.  Root must run
`tools/impact-audit.mjs` from `pre-step9-alpha-escalation` after the post-Step-9
snapshot and own the resulting downstream review receipt.  The authorised page
prose change is outside the item touch ledger and must be included in that
closure review.

## Non-judge mechanical gates

- `tools/reflow.mts` on the sixteen changed items: unchanged/canonical.
- `tools/precheck.mts` on the thirteen proof-bearing changed items: 13/13 pass.
- `tools/rendercheck.mjs` on all sixteen changed items: 16/16 pass.
- `tools/proof-contract.mjs --strict` on the thirteen changed contract items:
  13/13, zero errors and warnings.
- Strict contract check on the eight direct contract consumers whose source
  quote/receipt could have been affected: 8/8, zero errors and warnings.

No judge, publication, commit, or push was run in this step.

## Post-Step-9 receipt

Recorded `post-step9-alpha-escalation` in
`research/frontier-8-touches.json`: exactly the sixteen listed items changed
mathematically and on their public surfaces.  The touch ledger now reports 17
items with at least two repairs; the Step-9 members of that escalation set are
`cor-multivariable-taylor-formula-with-peano-remainder` (4),
`lem-derivatives-along-a-line-have-the-multinomial-expansion` (4),
`thm-multivariable-taylor-formula-with-lagrange-remainder` (3),
`def-local-path-packings-and-separators` (2),
`def-multivariable-taylor-polynomial` (2), `def-samuel-uniformity` (2),
`ex-samuel-compactification-of-a-compact-hausdorff-space` (2),
`ex-samuel-compactification-of-discrete-naturals-is-beta-n` (2),
`ex-samuel-compactification-of-the-open-unit-interval` (2), and
`thm-complex-exponential-addition-and-real-extension` (2).  They remain in
the targeted rejudge/closure set; the ledger counts are not a reason to widen
this repair pass.

## Authorized Batch-5 page-prose review

The only non-item change was re-read directly in
`library/topology/uniform-completeness-and-samuel-compactification.md`.
Its revised sentence now says that, in the separated choice-qualified setting,
the stated completion theorem **supplies** a compactification; it no longer
claims the construction is a necessary-and-sufficient characterization.  This
matches the cited theorem's sufficient conclusion.  The page has no item
interface fingerprint in the touch ledger, so this review is recorded here
rather than added to the generated 47-item impact receipt.
