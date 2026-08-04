# Wave 3 — A10 rundown, at the owner pause

Run 2026-08-04 from baseline `136fb35`. **A0–A10 complete. This is the sole owner
pause.** Nothing in this wave published anything: `verification.audited` is
untouched, no `status` was flipped, no id renamed, nothing deleted.

## 1. Scope, and what shipped

**12 pages · 8 A/B pairs · 224 items · 174 in contract scope**, every one 100%
untagged legacy content at A0. Five Audit-Betas: the combinatorics manifest held
three A/B pairs, over the two-pair cap, and split into `-graphs` (74 items) and
`-incidence` (34). The split was free — zero cross-pair edges, and the manifest's
cross-batch count was 58 before and after.

Wave 3 **completes the `combinatorics` category**. `foundations` completes at
wave 4; from wave 5 only `real-analysis` and `topology` remain.

## 2. Provenance census

All 224 items tagged, from 0.

| `provenance.statement` | count | evidence class | count |
|---|---:|---|---:|
| `ai-altered` | 191 | `semantic-source` | 191 |
| `literature-derived` | 31 | `exact-source` | 31 |
| `ai-generated` | 2 | `trivial` | 2 |

`provenance.proof`: 102 `ai-altered`, 72 `ai-generated`, 45 `not-applicable`,
5 `not-supplied`.

**Zero `established-knowledge` waivers** — against wave 2's eight, of which seven
dissolved once someone with a working fetch looked. The difference is that this
wave the orchestrator verified sources itself.

Stamps: **29 `verification.verified` with `scope: published-audit`**, 91
`verification.judge`, **132 `verification.audited` retained** on items nothing
touched, **0 written**.

## 3. The fatal-error report

**16 confirmed fatal defects across 14 items**, grouped as `LEVELS.md` step 10
requires.

### By defect type

| type | count |
|---|---:|
| false/overstrong statement in Fact or Remark text | 9 |
| incorrect or insufficient dependency citation | 5 |
| invalid inference in a numbered step | 1 |
| title asserting more than the proof gives | 1 |

### By location

| location | count |
|---|---:|
| Fact block (`[F#]`/`[L#]`/`[A#]`) | 6 |
| Remark prose | 6 |
| Definition / Statement | 2 |
| numbered proof step | 1 |
| title | 1 |

**For the fifth consecutive wave, almost nothing was wrong inside a proof.** One
of sixteen was an unlicensed inference in a numbered step. The defects live in
the apparatus around the mathematics — the Facts that license steps, and the
Remarks that explain them.

### The list

Found at **A6** by Sol refuter lanes (11), every one adjudicated by Alpha:

| item | defect | disposition |
|---|---|---|
| `def-cofinal-subset-of-an-ordinal` | false equivalence: a non-cofinal subset "bounded by η<ξ, equivalently η≤ξ". At α=1, C={0} is cofinal, strict fails, weak holds | false clause deleted |
| `fs-ordinal-addition-is-commutative` | Remark "the commutative special case is exactly the finite one" — false (ω+ω commutes) and unsupported by its own citation, which gives only the forward direction | restated |
| `thm-cantor-normal-form` | Remark claiming the base-ω argument ports to any γ>1; absorption already fails at base 2 (1+2=3≠2) | restated |
| `thm-product-of-connected-spaces` | **title contradicted its own Statement** about the Axiom of Choice | title corrected |
| `ex-connectedness-of-the-standard-topologies` | three fatals: unlicensed continuity characterisation, missing `thm-path-connected-implies-connected`, and a false "path-connectedness depends on \|X\|" claim | repaired |
| `thm-closure-of-a-connected-set` | Remark false in non-T₁ spaces (Sierpiński counterexample) | restated |
| `ex-the-oscillating-zigzag-curve-computed` | Remark cited `thm-closure-of-a-connected-set` for a neighbourhood claim it does not state | citation corrected |
| `lem-divisibility-poset-is-lower-finite-and-factorises` | `[L1]` "a positive divisor of a **nonzero** integer satisfies 1≤d≤n" — false at n=−6, d=2 | corrected |
| `thm-holder-finite` | `[L5]` misdescribed what `lem-of-q-embeds` does | corrected |
| `def-ordinal-exponentiation` | exponent law attributed to the well-definedness corollary; it is clause (e) of `thm-ordinal-exponent-laws` | reattributed |
| `rem-real-exponents-deferred` | repeated a corpus claim falsified by a published page | corrected |

Found at **A8** by the judges, on text A6 had already certified (4):

| item | defect | lane |
|---|---|---|
| `def-rational-power` | published-claim decay: "There is no aˣ for irrational x in this library", falsified by `def-real-power` and cited in the next sentence to the item recording exactly that | judge |
| `rem-connectedness-conventions` §3 | described *connectedness im kleinen* as "dropping the word open" — vacuous, since V={x} always qualifies | judge |
| `rem-connectedness-conventions` §2 | "disjoint open sets in a subspace need not be separated in the ambient space" — they always are, by the argument its own cited lemma runs at step 3.1. **Found by the targeted rejudge of the §3 repair** | judge |
| `lem-rational-power-laws` | `[L6]` said 0ᵗ undefined for t≤0; its cited `def-rational-power` sets 0⁰=1 explicitly | judge |

**The layering worked in both directions.** A6's Sol refuters found eleven
defects the judges never saw, because A6 repaired them first. A7's judges then
found four more *on text A6 had certified* — including one only the targeted
rejudge of another repair exposed. Neither layer subsumes the other.

## 4. Generated-statement report

`genrisk.json`: **56 seeds** (54 before this wave's tagging), 10 load-bearing,
largest cone 9. The two new seeds are this wave's only `ai-generated` statements,
both `trivial`-evidence counterexamples in `combinatorics-incidence`
(`cex-an-incidence-function-with-nonunit-diagonal`,
`cex-equal-size-intervals-with-different-mobius-values`), both **zero-cone** and
both dispositioned by Alpha. `genrisk --receipt` exits 0.

Two pre-existing seeds remain `verified-generated` with cone 1
(`rem-complete-metrizability-is-the-topological-shadow`,
`rem-counting-conventions-and-scope`); future batches may not cite them, which
`content-policy` enforces.

## 5. Judge comparison

448 verdict rows, 224 items, **zero nulls, zero context mismatches** — verified
from the ledger, not from the sweep's report.

| lane | pass | reject | rate | adjudicated fatal / nonfatal / false positive | precision |
|---|---:|---:|---|---|---|
| `gpt-5.6-terra` | 133 | 91 | 40.6% | 4 / 86 / 3 | **96.8%** |
| `deepseek-v4-pro` | 197 | 27 | 12.1% | 0 / 25 / 2 | **92.6%** |

Paired: 128 both pass · 22 both reject · 69 Terra-only · 5 DeepSeek-only.
120 rejection rows (118 from the sweep, 2 from targeted rejudges), **121
adjudications, 0 unadjudicated**, every row carrying `item_sha256`.

**All four fatals were Terra's.** DeepSeek returned no confirmed fatal this wave
— its value was the cross-family screen and its 92.6% precision, not detection.
That is a genuine change from wave 2, where DeepSeek caught 2 of 25 alone.

**The σ fix worked.** Wave 2's nine Terra false positives were dominated by one
repeated misreading of `σ(n)`; the convention line added this wave was
injection-tested before the sweep (control passed, injected false σ-cardinality
claim rejected by **both** lanes citing the new line), and **not one of this
wave's five false positives was a σ error**.

**A hypothesis I raised and the data refuted:** I predicted
`combinatorics-graphs` would show an elevated rejection rate because its Beta's
provenance rationales were templated and I sent them back at A3. On the full
sweep it does not — Terra rejects 45% there against 44% in topology and 43% in
real-analysis, both batches with individualised rationales. Only DeepSeek shows
it as an outlier (18% vs 8–12%).

## 6. R1 earned its keep, measurably

A8 is fatal-only for the first time with `step8-guard` enforcing it. The targeted
rejudge produced both halves of the argument in one round: a **fresh** Terra
nitpick on just-repaired `lem-rational-power-laws`, adjudicated nonfatal and
closed on its row with **no edit and no third judge call** — the resampling loop
R1 exists to stop — and a **real** fatal in a different item, repaired uncapped.

`step8-guard`: **OK — 3 changed, 3/3 licensed**, 0 created, 0 deleted.

Alpha also applied R1 against convenience on the item I flagged. Terra was
**right** that `ex-connectedness-of-the-standard-topologies` says "four of the
six" where five is correct; Alpha adjudicated `confirmed_nonfatal` and **made no
edit**, because the Example already states fifteen lines above that Sierpiński is
an instance of the row above, and a nonfatal row licenses nothing. The one-word
fix is recommended at a stage where polish is legal.

## 7. Gates at the pause

| gate | result |
|---|---|
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages; `published-unaudited` empty |
| `precheck` · `citecheck` · `fwdcheck` · `extcheck` · `rendercheck` · `prosecheck` · `depsource` | exit 0 |
| `proof-contract --strict` | **0 errors, 0 warnings, 174/174** |
| `finite-smoke` | 0 errors, 3 checks |
| `risk-report --require-reviewed` | exit 0 |
| `content-policy --audit --ledger` ×5 | **224 scoped, 0 errors, 0 warnings** |
| `genrisk --receipt` | exit 0 |
| `step8-guard` | OK, 3/3 licensed |
| `audit-manifest` | 1,687 edges: 956 published-backward, 669 same-batch, 58 cross-batch, 4 forward |

Alpha audited **1,063 cross-edges**, including all 33 pointing into later,
unaudited waves.

Impact: A4's stage measured 224 changed interfaces / 2,107 affected, split
**195 pure retag / 29 material** by `audit-split.mjs`. A8's three repairs touched
3 public interfaces; Alpha dispositioned all **91 direct consumers**
`still-licensed` with evidence, and the mechanical template from the `post-a8`
snapshot records **566** items in the transitive logical cone. Both numbers are
true of different graphs — direct citation versus transitive `deps` — and neither
contradicts the other.

## 8. Owner queue

Nothing here is assigned work; each needs a decision only the owner makes.

1. **A false definition on a published page, now fixed under your authorisation.**
   `def-real-power-by-rational-supremum` set `a^[x] := 1/(a⁻¹)^[−x]` for 0<a<1,
   which evaluates to `a^−x` and made `thm-rational-supremum-power-agrees-with-exp`
   **false for every base in (0,1)**. Repaired, propagated to all three
   consumers, certified by an independent Sol reader, recorded in
   `wave3-published-dependency-repairs.md`. **Both judge lanes rejected my repair
   twice** for real missing citations before it converged — the rejudge condition
   is load-bearing, not ceremony. One DeepSeek rejection remains open and Alpha
   adjudicated it `false_positive` with the certifier's evidence.
2. **`level-coverage --audit --verify-current-context` structurally cannot pass
   after any A8 repair.** Repairing an item moves the frozen context of every
   page-sibling; the tool has no targeted-receipt mode. Measured: 58
   `judge-coverage-missing`, **55 of them untouched siblings**. `AUDIT-WORKFLOW.md`
   §7 A8 already says a targeted repair must not force a full-current-context run.
   The gate needs a targeted mode, or the doc needs to stop asking for it.
3. **Two doc-vs-code bugs found by running that gate for the first time in any
   wave**, both now fixed in `AUDIT-WORKFLOW.md` §8: the spine receipt path
   `research/dependency-spine-audit.json` does not exist (it is per-wave), and the
   gate was documented as the "A7→A8 receipt" when it needs adjudications that
   only exist after A8.
4. **Link liveness as a gate — fifth wave running, and this time a *repair*
   shipped a dead link.** 38 of 74 items in one batch carried a URL that was dead
   or contentless; `wikipedia.org/wiki/Topology_(Munkres_book)` is 404 on 19
   published items. No gate checks this.
5. **The Beta sandboxes have no DNS.** This is why URL verification moved to the
   orchestrator, and why wave 2's eight `established-knowledge` waivers happened.
   Now encoded in `AUDIT-WORKFLOW.md` §7's A6 efficiency protocol.
6. **The one-word fix**: "Four" → "Five" in `ex-connectedness-of-the-standard-topologies`'s
   first Remark. Correct as adjudicated; illegal to apply at A8.
7. **One scope-denial candidate**, `cex-omega-one-has-no-at-most-countable-cofinal-subset`
   line 49 — see `wave3-A9.md`. Recorded, not chased.
8. **Three wholesale A-page summary rewrites declined at A3** and preserved in the
   Beta findings files: `ordinal-arithmetic` (10 paragraphs / 1,023 words),
   `countability-and-uncountability` (8 / 843), `roots-and-rational-powers`
   (5 / 707). The contract wants exactly two paragraphs under 150 words. Take them
   as a batch if you want the contract retrofitted.

## 9. Built this wave, beyond the audit

- `tools/audit-split.mjs` — field-aware pure/material classifier. Its first,
  line-based version was wrong and **hid a confirmed fatal** (`thm-product-of-connected-spaces`,
  whose *title* changed inside the frontmatter).
- **The unattended audit driver**: `tools/run-wave.mjs`, `gates.mjs --audit`,
  four audit roles in `dispatch.mjs`, `preflight.mjs --audit`,
  `ops/run-wave@.service`, `UNATTENDED-AUDIT.md`, and `tools/run-wave.test.mjs`
  (20 properties, all passing). A0–A10 with no session; A10 remains the terminus.
- `AUDIT-WORKFLOW.md` §7 gained the **A6 efficiency protocol**, including the
  optimisation that was measured and **rejected**: narrowing Alpha's reading to
  the changed set would have missed **6 of the 11 A6 fatals**, which were in items
  A4 left byte-identical.
- `ARCHITECTURE.md` §5 records the σ injection test and why it mattered.
