# Phase 2 next 18 — Alpha group `e`, Step 5A authored-content review

Run `phase-2-next-18`, dispatch `5a-e`, batch `1` (functional analysis), 80 items
and 4 pages. This dispatch reviewed the authored mathematics of every assigned
item and page, not Step 3's scope/scaffold records. Decisions are in
`research/phase-2-next-18-alpha-e-5a-decisions.json` (78 `accepted`, 6 `repaired`,
0 `escalated`). The former owner hold on the Enflo assembly and its dependent
existence theorem is repaired and recertified below; every decision now closes.

## What was read

* The two assigned pairs' manifests, coverage records, notes and proof
  contracts, and the current A/B pages
  (`schauder-bases-approximation-and-banach-space-pathologies[-examples]`,
  `banach-valued-integration-and-the-radon-nikodym-property[-examples]`).
* Every one of the 80 item files in full, plus the published suppliers actually
  used on the load-bearing paths (dual of `c_0`, finite truncations in `c_0`/`l^1`,
  finite-dimensional coordinate maps, the bounded-inverse theorem, Hahn–Banach
  dominated extension, scalar Radon–Nikodym, Eberlein–Smulian, weak convergence
  facts, `l^p` reflexivity, `ba` duality).
* For the Enflo block, the primary source in the accessible translation
  (P. Enflo, *A counterexample to the approximation problem in Banach spaces*,
  Acta Math. 130 (1973) 309–317; read as *Matematika* 18:1 (1974) 146–155,
  pp. 148–154, Lemmas 4–7 and the parameter/incidence estimates), the
  authoritative English Acta scan at the Tsinghua archive mirror
  (`https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6150-11511_2006_Article_BF02392270.pdf`,
  especially pp. 315–317), plus an independent exposition with the same construction structure
  (T. Figiel and A. Petczyński, *On Enflo's method of constructing Banach spaces
  without the approximation property*, Russian Math. Surveys 29:6 (1974) 157–170,
  Combinatorial Lemma (c1)–(c3) and Corollary 1).

## Edits (all inside the assigned batch)

Six items were repaired; each repair is recorded as a closed defect row in
`research/defect-ledger.jsonl` and referenced by the corresponding decision.

1. `lem-enflo-walsh-block-estimates` — statement item 3 printed the bare token
   `le` inside math (`|F_{n-1}(a)|=|F_{n+1}(a)|le n^{-1}\|F_{n-1}\|_\infty`), so
   the estimate displayed no inequality. Repaired to `\le`. The estimate itself
   was checked (item 4's complement identity, the binomial recurrence for
   `|a|=1`, and the endpoint values `r=2,2n-2`).
   Defect `p2-next18-b1-5a-enflo-walsh-le-macro`.
2. `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` —
   step 2.1 printed `\|leq` instead of a norm-then-inequality pair. Repaired.
   The countable-additivity argument was re-derived and is unchanged.
   Defect `p2-next18-b1-5a-bochner-density-leq-macro`.
3. `ex-vector-measure-induced-by-an-l-one-function` — two display defects:
   `\lVert f\rVert,d\mu` (missing thin-space backslash) and the bare token
   `,qquad`. Repaired. Defect `p2-next18-b1-5a-lone-example-separators`.
4. `cex-weakly-measurable-need-not-be-strongly-measurable` — the definition of
   `\ell^2(I)` carried a raw control byte inside the supremum subscript, so the
   “finite `F`” restriction did not render. Repaired to `\text{finite}`.
   Defect `p2-next18-b1-5a-weakly-measurable-stray-byte`.
5. `rem-enflo-space-without-the-approximation-property` — the frontmatter
   `external_dependency.local_proof_attempt` and the closing paragraph both said
   the pair's AP conclusion “remains blocked only on the missing Grothendieck
   reflexive-AP-implies-MAP supplier”. That supplier is present in the same pair
   (`thm-reflexive-approximation-property-implies-metric-approximation-property`),
   so the two sentences were rewritten to record the locally supplied theorem and
   to keep the item non-load-bearing. No mathematical claim changed.
   Defect `p2-next18-b1-5a-enflo-remark-stale-grothendieck`.

The sixth repaired item is
`lem-enflo-symmetry-averaging-and-block-assembly`. Its earlier notation repair
restored the two Walsh layers in step 3.1 to `W^{n_m+1}` and
`W^{n_{m+1}-1}`; the owner repair below also corrects two incidence
mistranscriptions and replaces the invalid combinatorial count. Defects
`p2-next18-b1-5a-enflo-walsh-layer-labels` and
`p2-next18-b1-5a-enflo-condition-four-vacuous` are fixed.

## Owner repair and recertification

The authoritative English scan of Enflo's Acta paper resolves the garbled
formula on p. 315. Conditions 4°–6° are exactly

* `|N_{m,i} ∩ N_{m,j}| <= 2t_{m+1}/n_{m+1}` for `i != j`;
* `|N_{m,j} ∩ M_{m,i}| <= min(t_{m+1}/n_{m+1}, t_m/n_m)`;
* the already-correct total multiplicity error bound `<=1/n_{m+1}`.

Both of the first two conditions were mistranscribed in step 4.1. Condition 4
had the vacuous threshold `k_{m+1}^2/t_{m+1}`, while condition 5 used
`min(t_{m+1}/k_m,t_m/t_{m+1})`, whose second term tends to zero and is
incompatible with the construction's intersection bound one.

Step 6.1 now gives the full norm comparison from Enflo's Lemma 7. On the
norming `K_{m+1,j}` component, the Walsh vector has sup norm `2/n_{m+1}`.
Condition 4 bounds each other middle component by the same amount. The two
parts of condition 5 bound the adjacent outer components by `1/n_{m+1}`.
The Hilbertian ambient norm is therefore at most `sqrt(3/2)` times the
norming component (and hence less than twice it), giving the source's
`4||T||/n_{m+1}` localized-trace bound. Together with condition 6, this gives
the claimed `5||T||/n_{m+1}` adjacent-block estimate.

Steps 7.1–8.2 now reproduce the source construction rather than the earlier
non-source estimate. With

`L_m=floor(k_m/t_{m+1})`,
`nu_m=floor(k_{m+1}/(L_m t_m))`,

successive blocks in the lexicographic list `(j,j rho+k)` meet each
`M_{m,i}` in at most one point, proving condition 5. Their multiplicities
differ by at most one from `k_{m+1}/(L_m t_m)`; separating the active and
omitted rectangles gives total error at most

`2t_{m+1}/k_m + k_m t_m/(k_{m+1}t_{m+1}) = o(1/n_{m+1})`,

which proves condition 6. If two distinct selected blocks meet, their common
first coordinates are spaced by at least `t_m/nu_m`. Enflo's calculation is

`t_m/nu_m ~ k_m t_m^2/(t_{m+1}k_{m+1})
= t_m^{gamma+2-alpha(gamma+1)+o(1)}`.

The exponent is positive exactly under
`alpha<(gamma+2)/(gamma+1)`, so this spacing eventually exceeds
`n_{m+1}`; an interval shorter than `t_{m+1}` then contains at most
`2t_{m+1}/n_{m+1}` common coordinates. This proves the exact condition 4.

The dependent
`thm-enflo-separable-reflexive-banach-space-without-the-approximation-property`
is accepted after supplier recertification. Its contradiction route was
rechecked: the repaired assembly gives no BAP; reflexive AP would imply MAP by
the local Grothendieck theorem; and a Schauder basis would imply BAP. No gap
remains. The defect row is closed with the repaired item hash, both Step-5
decisions are current-hash stamped, and the Batch-1 contract carries the
regenerated derivations and updated risk reviews.

The same owner reread found and repaired one further proof gap in step 4.1.
The previous paragraph used one Walsh component to obtain a lower bound by the
chosen coefficient, but the local definition of property A requires that
coefficient times the full norm of the generator, which can occupy two adjacent
ambient coordinates. Enflo's p. 314 argument is coordinatewise: on every
`K_{r,i}` where the chosen generator is nonzero, Walsh orthogonality gives the
sup-norm lower bound; after maximizing within each `C(K_r)` and summing squares
over `r`, one gets the full property-A inequality with the factor `||e_0||`.
Step 4.1 now says this explicitly. Defect
`p2-next18-b1-owner-enflo-property-a-full-norm` is closed at the current item
hash.

## Local suppliers

No new definitions or lemmas were needed: every dependency used by the assigned
items resolves to an existing item (in this batch or in published content).
No new item, page, pair, dependency, or ID was needed. The existing manifest strategy was clarified to name the exact overlap threshold and spacing estimate, and the two affected Batch-1 proof-contract risk reviews and the assembly derivations were refreshed.

## Required shared-plan / Phase-2 amendments

None. The batch's page order, pair split and prerequisite edges were correct as
authored. The Enflo repair is a defect resolution inside the existing item and needs no plan or dependency edit.

## Published findings

No defective published item was found in this read, so
`research/published-consumer-supplier-ledger.md` was not modified. The published
suppliers whose statements were actually used on load-bearing paths were
spot-checked for statement-level fidelity (`thm-dual-of-c0-is-ell-one`,
`lem-finite-truncations-are-dense-in-c0-and-ell-one`,
`thm-coordinate-map-for-a-finite-dimensional-normed-space`,
`thm-bounded-inverse-theorem`, `thm-hahn-banach-dominated-extension`,
`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
`thm-eberlein-smulian`, `thm-reflexivity-of-lp-for-one-less-p-less-infinity`,
`cor-ell-p-duality-by-counting-measure`); each matched the use made of it, and the
`ba`-representation and `c_0` pathologies were independently re-derived inside
the batch. This is a local review, not an independent audit or a closure
certification.

## Checks run (honest report)

* `node tools/tsx-run.mjs tools/precheck.mts` over all 80 assigned items:
  63 checked, 0 failing (the remaining 17 are definitions/remarks with no
  phase-format body).
* `node tools/rendercheck.mjs` over the 80 items and the 4 pages: clean (no
  wikilink inside math, no unbalanced delimiters, every math span parses under
  the real KaTeX, every frontmatter block parses).
* `node tools/depcheck.mjs`: no cycles, all references resolve, no draft items on
  published pages.
* `node tools/risk-report.mjs research/phase-2-next-18-batch-1.proof-contracts.json
  --require-reviewed`: 0 errors over all 80 items; complete `risk_review` records
  were written into the owning batch contract for all 55 high/critical items
  during this same read.
* `node tools/defect-ledger.mjs validate --run phase-2-next-18`: 32 current-run rows checked, 0 errors; `research/DEFECT-LEDGER.md` was regenerated after the owner repair.
* One workflow defect found while doing this (`tools/reflow.mts`'s documented
  one-line step convention disagrees with the batch's tag-first convention and
  with `tools/precheck.mts`'s trailing-tag rule) was recorded as a deferred row,
  `p2-next18-b1-5a-reflow-precheck-convention-clash`, for the owner/operator.
* Items changed by a repair were put back into the corpus's phase-format
  convention and re-prechecked individually: all six edited item files (the five
  earlier repairs plus the Enflo assembly) pass, and the final whole-batch author
  check reports 63 proof items, 84 rendered carriers, and 80 strict contracts
  clean. The two Enflo item owner receipts and all 84 group-e Step-5 decision
  hashes were refreshed against current bytes.
* Exact Batch-1 boundary audit (`--fail-on-contradicted --fail-on-template
  --json`) reports 640 rows, zero template clusters, and zero contradicted
  candidates. Coverage reports 2 pages and 79 harvested results with zero
  errors or warnings; citation fidelity reports no missing quote and no widening
  candidate; the current defect-ledger validation reports 32 run rows and zero
  errors.

## Blockers

None. The former Enflo owner hold is repaired from the primary English scan, the dependent theorem is accepted, and every one of the 84 decisions now closes with no open defect.
