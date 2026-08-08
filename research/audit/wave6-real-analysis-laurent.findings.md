# Wave 6 Audit-Beta findings — real-analysis-laurent

## A1/A2 handoff

Scope is the single A page `formal-laurent-series-field` in `wave6-real-analysis-laurent.pages.json`: eleven mathematical-content items, nine of them proof-bearing. The batch has no B companion and is within the two-pair cap. This pass is at A1/A2. No item or page has been edited, no touchlog snapshot has been taken, and A4 is waiting for the orchestrator's A3 decision.

All eleven item files and the A-page summary were read in full. All 82 numbered proof steps were checked, all 90 direct Fact-to-source citations were contracted against exact on-disk source text, and all 110 manifest dependency edges in this batch (73 `published-backward`, 37 `same-batch`) were checked for existence, legality, and semantic direction. There is no coverage exception.

The literature sources used by the ledger were successfully retrieved on 2026-08-08: Sambale's open-access survey in *Jahresbericht der Deutschen Mathematiker-Vereinigung* (Definition 7.1 and Theorem 7.2), the Encyclopedia of Mathematics entries on Laurent series and Cantor's theorem, Dales's published AMS Contemporary Mathematics chapter on Hahn fields and the `G=Z` Laurent-series case, Rutgers notes proving complete ordered fields Archimedean, and University of Tennessee notes defining Cauchy completeness in an arbitrary ordered field. The ledger records the stable URLs and the convention deltas item by item.

## Provenance determinations

| Item | Statement | Proof | Evidence | Determination |
|---|---|---|---|---|
| `def-formal-laurent-series` | `ai-altered` | `not-applicable` | `semantic-source` | Standard `R((X))`/Hahn-field construction, repackaged as functions on `Z` with `X=t^{-1}` and all distinguished notation collected in one definition. |
| `lem-laurent-series-ring` | `ai-altered` | `ai-altered` | `semantic-source` | Standard finite convolution and Laurent-series ring, with the sourced coefficient proof expanded to explicit support bounds, shifts, constants, and least-index bookkeeping. |
| `lem-laurent-valuation` | `ai-altered` | `ai-altered` | `semantic-source` | Standard least-exponent valuation proofs adapted and expanded into leading-coefficient and cancellation cases. |
| `thm-laurent-series-field` | `ai-altered` | `ai-altered` | `semantic-source` | Standard theorem that `K((X))` is a field; local explicit geometric inverse adapts the sourced shift-to-a-power-series-unit proof. |
| `thm-laurent-ordered-field` | `ai-altered` | `ai-generated` | `semantic-source` | Standard leading-term order on the `Z`-Hahn field, with local absolute-value and constant-embedding clauses. |
| `lem-laurent-non-archimedean` | `ai-altered` | `ai-generated` | `semantic-source` | Standard non-Archimedean consequences of the `Z`-valued Hahn/Laurent order, specialized to the monomials `t^{-k}`. |
| `cor-laurent-not-lub-complete` | `ai-altered` | `ai-altered` | `semantic-source` | Standard contrapositive of complete-ordered-field implies Archimedean, with the usual canonical-naturals supremum argument adapted by leading-coefficient halving. |
| `def-sequences-in-an-ordered-field` | `ai-altered` | `not-applicable` | `semantic-source` | Standard ordered-field sequence and Cauchy notions compiled in one definition; epsilon ranges over the field, as in the source. |
| `thm-laurent-cauchy-complete` | `ai-altered` | `ai-altered` | `semantic-source` | Literature gives the discretely valued complete Laurent field; the proof adapts the sourced coefficient-stabilization argument and adds the Laurent support and order-topology steps. |
| `cor-laurent-nested-intervals` | `ai-altered` | `ai-altered` | `semantic-source` | Cantor's shrinking-closed-set theorem specialized to closed intervals and the `K`-valued order distance. |
| `cex-laurent-nested-intervals-empty` | `ai-generated` | `ai-generated` | `none` | Positive novelty determination for the bespoke paired endpoints; the full truth-risk derivation was checked directly. |

The exact eleven JSONL rows are in `wave6-real-analysis-laurent.provenance.jsonl`. No `established-knowledge` waiver is used, so no row depends on Alpha concurrence. The counterexample is the only `ai-generated` Statement: exact endpoint-formula searches found no established counterpart, and its nestedness, empty intersection, and failure of the shrinking hypothesis were independently derived rather than inferred from absence of a source.

## A3 proposals

### W6-RALA-PROV-001 — class (c), provenance retag

Approve the eleven frontmatter retags exactly as recorded in the provenance ledger and add the ledger's reputable literature URLs to each applicable `sources.references` list. There is no legacy one-axis `authorship` key in these files. For an item receiving only this retro-tag, preserve its existing `verification.judge` and `audited` entries. The three items also receiving a material citation repair below must instead lose the stale judge block and audit stamp under the A4 rule.

### W6-RALA-001 — class (b), citation precision in `thm-laurent-ordered-field`

Current dependency list omits `def-archimedean-field`. Current [L5] ends:

> the order is then $a < b :\iff b - a \in P$, and $n \cdot 1_F$ denotes the $n$-fold sum of $1_F$, with $0 \cdot 1_F = 0$ ([[def-ordered-field]]).

`def-ordered-field` defines the positive cone and induced order but does not define the canonical-natural notation. The exact licensing clause is in `def-archimedean-field`:

> For a natural number $n \ge 1$, write $n \cdot 1_F$ for the $n$-fold sum of the multiplicative identity, and $0 \cdot 1_F := 0$.

Proposed smallest repair: add `def-archimedean-field` to `deps` and replace [L5] by:

> [L5] An ordered field is a field with a subset $P$ satisfying (O1) trichotomy, for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$, and (O2) closure of $P$ under addition and multiplication; the order is then $a < b :\iff b - a \in P$ ([[def-ordered-field]]). For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$ ([[def-archimedean-field]]).

The proof use at step 2.3 is correct once the cited definition is supplied. No Statement or proof-step conclusion changes.

### W6-RALA-002 — class (b), citation precision in `thm-laurent-cauchy-complete`

Current [L6] asserts that the order on `N` is total but cites `def-nat-order`, `def-natural-numbers`, `thm-induction-principle`, and `lem-nat-embeds-int`. Those targets define the order and naturals, supply induction, and supply the embedding, but none states totality. The exact on-disk theorem is `thm-nat-linear-order`:

> The relation $\le$ on $\mathbb{N}$ ... is a linear (total) order: reflexive, antisymmetric, transitive, and total.

Proposed smallest repair: add `thm-nat-linear-order` to `deps` and replace [L6] by:

> [L6] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]), induction is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every integer $\ge 0$ is the image of a unique natural number, so a natural number may be used as an index in $\mathbb{Z}$ ([[lem-nat-embeds-int]]).

The affected proof uses are steps 2.1, 2.2, 2.3, 3.1, and 4.1. Their mathematics is correct; only the theorem licensing the comparisons was absent.

### W6-RALA-003 — class (b), citation precision in `cor-laurent-nested-intervals`

Current [L5] says:

> The order on $\mathbb{N}$ is total and induction is available ([[def-nat-order]], [[def-natural-numbers]], [[thm-induction-principle]]).

As above, the definitions and induction theorem do not state totality. Proposed smallest repair: add `thm-nat-linear-order` to `deps` and replace [L5] by:

> [L5] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]) and induction is available ([[thm-induction-principle]], [[def-natural-numbers]]).

The affected proof uses are steps 2.1, 3.1, 5.1, and 5.2. The comparisons and induction are valid once the exact total-order theorem is cited.

There are no class (a) falsehood proposals and no class (d) debatable-restatement proposals. None of the proposed changes deletes or renames an id or changes reading order.

## Mathematical audit record

- `lem-laurent-series-ring`: the support translation to `N`, finite convolution bounds, triple-convolution associativity, closure, monomial shifts, constants, identity, and ring assembly are correct. The finite-sum reassociation claim follows directly from the cited field laws within the standing 30-second allowance.
- `lem-laurent-valuation`: the unique contribution at the product's least index and every sum/cancellation case are exhaustive and correct.
- `thm-laurent-series-field`: the factorization `f=iota(c)t^{-p}(1-u)`, support of every `u^n`, coefficientwise finite definition of `g`, convolution reindexing, and the identity `(1-u)g=1` were checked at every index, including `k<0`, `k=0`, and `k>=1`.
- `thm-laurent-ordered-field`: positive-cone trichotomy and closure, the constant embedding, canonical naturals, and absolute-value clauses are correct. W6-RALA-001 concerns only the source of the canonical-natural notation.
- `lem-laurent-non-archimedean`: `t` dominates every canonical natural, the monomial chain is strictly decreasing and coinitial among positives, and both directions of the coefficient/valuation threshold estimate are correct, including `h=0` and the strict endpoint distinction.
- `cor-laurent-not-lub-complete`: both the abstract contrapositive and the concrete canonical-naturals witness are valid. Every upper bound has negative valuation, and halving its leading coefficient yields a strictly smaller upper bound.
- `thm-laurent-cauchy-complete`: Cauchyness at `t^{-(k+1)}` freezes every coefficient through index `k`; the least stages `N_k` are monotone; the coefficientwise limit has a uniform lower support bound from `k=0`; and the monomial coinitiality clause converts coefficient stabilization back to convergence for every positive epsilon. No choice principle is used.
- `cor-laurent-nested-intervals`: nestedness makes the left endpoints Cauchy, Cauchy completeness supplies the limit, closed endpoint inequalities retain it in every interval, and shrinking length gives uniqueness. W6-RALA-003 concerns only total-order citation precision.
- `cex-laurent-nested-intervals-empty`: the intervals are nonempty and nested. A common positive point would have valuation at least 1 from all real-constant upper endpoints and valuation below 1 from all multiples of `t^{-1}`; this is impossible. Each length has a nonzero coefficient at index 0, so it never becomes smaller than `t^{-1}`.

No mathematical falsehood was found in either definition, any Statement, proof, counterexample, or Remark.

## Recorded nonfatal prose defect

`library/real-analysis/formal-laurent-series-field.md` is not the required two-paragraph A-page summary: it contains nine titled prose sections and makes several page/corpus count and position claims. Each mathematical synopsis was checked against the item text and none is false. Under the binding triage rule for prose counts, position claims, and corpus-wide scope statements, this is recorded for the later page-cleanup queue and is not an A3 repair proposal.

## Proof-contract receipt and unresolved state

`wave6-real-analysis-laurent.proof-contracts.json` covers all nine proof-bearing items, all 82 numbered steps exactly once, all 90 direct Fact-to-source links with exact source text and complete use maps, and all eight boundary cases per item. On the current published text:

```text
node tools/proof-contract.mjs research/audit/wave6-real-analysis-laurent.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 9/9 item(s) checked
```

The mechanical gate verifies quotation and mapping, not semantic sufficiency; W6-RALA-001 through W6-RALA-003 are the manual semantic mismatches exposed by reading those exact clauses. The only unresolved action is A3 approval or rejection of W6-RALA-PROV-001 and the three class-(b) repairs. No A4 edit has been made.

The audit manifest shape is also green on the exact batch scope:

```text
node tools/content-policy.mjs --audit --manifest-only research/audit/wave6-real-analysis-laurent.pages.json --json
scope: 11; errors: 0; warnings: 0
```

## A4 application handoff

The orchestrator approved `W6-RALA-PROV-001` and `W6-RALA-001` through `W6-RALA-003` in `research/audit/wave6-A3.md`. No deferred page prose was edited.

All eleven items now carry the ledger's component provenance. Ten Statements are `ai-altered`; `cex-laurent-nested-intervals-empty` remains the positively determined `ai-generated` bespoke construction. The nine proof-bearing items carry the proof labels recorded in the ledger, and the two definitions carry `proof: not-applicable`. Every ledger URL was added to the corresponding `sources.references` list; no item had a legacy `authorship` field to remove. Pure-retag items retain their historical `verification.judge` and `verification.audited` records.

The three approved class-(b) citation repairs were applied as follows.

- `W6-RALA-001`, `thm-laurent-ordered-field`: the old `[L5]` attributed both the positive-cone definition and canonical-natural notation to `def-ordered-field`. The new `[L5]` keeps the positive-cone and order clause under `[[def-ordered-field]]` and states separately: “For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$,” citing `[[def-archimedean-field]]`. That target's Definition gives exactly the $n$-fold-sum and zero clauses. `def-archimedean-field` was added to `deps`.
- `W6-RALA-002`, `thm-laurent-cauchy-complete`: the old `[L6]` asserted totality of the natural order while citing only its definitions, induction, and the natural-to-integer embedding. The new `[L6]` attributes totality to `[[thm-nat-linear-order]]`, whose Statement says that the defined relation is a linear (total) order, while retaining the original exact sources for induction and the embedding. `thm-nat-linear-order` was added to `deps`.
- `W6-RALA-003`, `cor-laurent-nested-intervals`: the same unsupported totality clause in `[L5]` now cites `[[thm-nat-linear-order]]`, with the induction clause left under `[[thm-induction-principle]]` and `[[def-natural-numbers]]`. `thm-nat-linear-order` was added to `deps`.

The dedicated material baselines are `pre-A4-thm-laurent-ordered-field`, `pre-A4-thm-laurent-cauchy-complete`, and `pre-A4-cor-laurent-nested-intervals` in `wave6-touches.json`. Each of those three items lost its stale `verification.judge` block and obsolete `verification.audited` stamp. No replacement certification was written; A6 owns that independent reading.

The final namespaced proof contract covers nine proof-bearing items, all 82 numbered steps exactly once, 93 direct Fact-to-source links with complete use maps, and all eight boundary cases for every item. The three new citation entries quote the exact clauses above and list every step carrying the repaired Fact label. The final manifest has 113 edges: 76 published-backward and 37 same-batch. All three new edges point to legal earlier published targets.

The final local checks are clean:

```text
proof-contract: 0 error(s), 0 warning(s), 9/9 item(s) checked
precheck: 3 checked, 0 failing — all clean
finite-smoke: 0 error(s), 0 check(s)
risk-report: 0 error(s), 9 item(s) routed
depcheck --pending-audit-ok: exit 0
fwdcheck / extcheck / rendercheck / prosecheck / citecheck / depsource: exit 0
content-policy --audit: 0 errors, 1 legacy warning (`generated-role` on the positively determined AI-generated counterexample)
```

The configured `tools/tsx-run.mjs` entrypoint could not load the app checkout's absent `worker/node_modules/tsx/dist/loader.mjs`. The same `tools/reflow.mts`, `tools/precheck.mts`, and normative app `worker/src/precheck.ts` sources were compiled without modification to temporary JavaScript by the installed TypeScript 6.0.3 compiler and executed from `/tmp`; reflow completed and all three repaired proofs passed. The repository gate runner will still report the missing configured loader until the orchestrator supplies its ordinary runtime dependency or uses the same non-escalated exact-source route.

Coverage remains complete: every one of the 82 proof steps, all 93 direct Fact citations, and all 113 dependency edges in the final pair have been read. No mathematical falsehood is unresolved. The only retained content concern is the already-recorded nonfatal A-page summary shape/count prose, deferred by A3 to A10.
