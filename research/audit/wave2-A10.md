# Wave 2 — A10 owner rundown

Baseline `720c747`. Scope: 5 batches, 15 pages, 8 A/B pairs, **258 items**, all
fully untagged legacy content. Audit Alpha ran as **`claude-opus-5`** for the
first time (owner rule, 2026-08-03); Betas, readers and refuters stayed GPT 5.6
Sol.

---

## 1. Provenance census

**258 of 258 scoped items now carry both component tags — 100%.**

| `provenance.statement` | count | | `provenance.proof` | count |
|---|---:|---|---|---:|
| `ai-altered` | 194 | | `ai-generated` | 121 |
| `literature-derived` | 55 | | `ai-altered` | 78 |
| `ai-generated` | 9 | | `not-applicable` | 57 |
| | | | `literature-derived` | 2 |

Only 9 statements are `ai-generated`, each on a positive novelty determination
rather than a failed search. **One `established-knowledge` waiver survives**
(`fs-erdos-ko-rado-without-the-ground-set-bound`), with Alpha's concurrence.

That number was nearly eight. Alpha traced the cause into the Beta ledger —
**the Beta sandbox cannot resolve DNS** — fetched sources itself at HTTP 200 and
upgraded 7 rows to `semantic-source`. Its independent Sol certifier then caught
the eighth: that item is Erdős–Ko–Rado **with a hypothesis deleted**, which is
not semantic identity, so it correctly returned to the waiver.

## 2. Fatal-error report, by defect type and location

**30 `confirmed_fatal` adjudication rows over 25 distinct items.**

| defect_type | rows |
|---|---:|
| `other` (false statement, over-strong claim, false corpus prose) | 22 |
| `dependency_citation` (a Fact citing an item for more than it states) | 7 |
| **`logic` (unlicensed inference inside a numbered proof step)** | **1** |

**Exactly one fatal defect was a broken inference inside a proof.** This
reproduces wave 1b, where 16 of 19 fatals were in Remark prose or a title. The
proofs are in far better shape than the prose around them; the recurring failure
is a Statement, title, or Remark claiming more than the proof below it delivers.

Two items were re-typed after investigation rather than left as first graded:

- **`thm-well-ordering-theorem`** `logic` → `dependency_citation`. `[L6]`
  restated the *weak* form of `def-well-order` while the proof used the *strict*
  form. The decisive evidence was step 8.1, which builds
  `R' = R_M ∪ {(m,x) : m ∈ M}` — omitting `(x,x)`, so it is not a reflexive
  well-order at all. Re-derived under both readings: weak makes 5.1 and 8.1
  fail, strict makes every step valid. Title, Statement and every `deps` entry
  byte-identical after repair, which matters at **26 direct consumers**.
- **`fs-transfinite-induction-needs-choice`** `logic` → `other`. Step 3.1's
  criterion "given by a formula ⇒ choice-free" is genuinely false, and the
  counterexample was already in the library: `thm-well-ordering-theorem`'s own
  Remark describes Zermelo's `G(h) = c(X \ ran h)`, formula-given with `c` a
  parameter and emphatically not choice-free.

**The largest single find: `thm-ultrafilter-lemma`** — a landmark whose title and
Statement claimed "every filter extends to an ultrafilter" unconditionally while
`[L1]` restated Zorn without its AC hypothesis and step 4.1 spent it. It is the
root of defects in `def-ultrafilter` and `fs-every-ultrafilter-principal`.

**Undeclared choice hypotheses are now four consecutive waves.**

## 3. Judge comparison

| lane | verdicts | reject | rate | precision |
|---|---:|---:|---:|---:|
| `gpt-5.6-terra` | 258 | 112 | 43.4% | **94.8%** (109/115) |
| `deepseek-v4-pro` | 257 | 23 | 8.9% | **91.3%** (21/23) |

Adjudicated: **30 fatal / 107 nonfatal / 9 false positive**, 146 rows against
146 rejections, **0 unadjudicated**.

**Both lanes paid for themselves.** Of the 25 fatal items, 17 were caught by
both, **6 by Terra alone, 2 by DeepSeek alone**.

**A cheap fix worth taking: six of the nine false positives are one repeated
mistake.** Terra read `σ(n)` as `{0,…,n−1}` when `def-natural-numbers` says
`σ(n) := n ∪ {n}`, and on that misreading produced confident, specific
off-by-one allegations against correct proofs. **One line about `σ` in
`briefs/judge-conventions.txt` removes four wrong rejections of correct proofs.**

Also notable: both lanes caught a missing triangle-inequality citation in
`cex-projection-is-not-closed` **on text Alpha had certified at A6** — its check
verified the estimate's arithmetic but not that every ingredient was cited. The
judge layer catching the audit layer is exactly why A7 runs after A6.

## 4. A8 convergence

Three rounds, and it terminated:

| round | rejections in | fatal | nonfatal | false positive | repairs out |
|---|---:|---:|---:|---:|---:|
| 1 | 138 | 29 | 101 | 8 | 23 |
| 2 | (2 blocked fatals) | — | — | — | 2 |
| 3 | 7 | 1 | 5 | 1 | **1** |

Round 1's rejudge returned 16 of 23 passing both lanes and 7 still rejected —
wave 1b's exact shape. Alpha absorbed 6 of those 7 as adjudications rather than
rewrites. That is the discipline that makes the loop terminate: a rejection of
freshly repaired text is not evidence the repair was wrong, and Terra rereads
whole items rather than diffs.

The one round-3 repair, `rem-choice-ledger`, was a genuine fifth finding:
`def-dependent-choice` states DC with "every `a ∈ X`" and `x₀ = a` and calls the
unbased version "the **formally weaker** statement", and the ledger bullet stated
that weaker form as if it were DC — in the one item whose whole job is stating
choice principles precisely.

## 5. Stamps

- **19 items carry a paired `deepseek + terra` pass**, bound by
  `wave2-targeted-judge-receipt.json`; `apply-judge-stamps` reported 19 stamped
  / 0 skipped.
- **6 repaired items deliberately carry no judge stamp** —
  `def-adjunction-cone-suspension`, `def-hereditary-property`,
  `ex-cylinder-and-mobius-band-as-quotients`, `ex-petersen-graph-basic-invariants`,
  `fs-projections-are-closed-maps`, `thm-product-of-subspaces-and-closures`. A
  judge rejected each and Alpha cleared the rejection; recording a pass would
  assert something no judge said. They carry the adjudication instead.
- 53 scoped items carry `verification.verified` (`scope: published-audit`,
  `delegated_by: owner`) after independent Sol certification.
- **`verification.audited` was never written — 0 additions wave-wide.**

## 6. Twice-touched escalations

Real count, measured from the ledger: `touchlog` reports 51, of which **zero**
are genuine — the rest is a snapshot-window artifact of 260 per-item snapshots
from 5 concurrent Betas, the same artifact wave 0 saw. Genuine multiple-touch
items are three, all prose-and-citation defects on stable mathematics, none
proposed for deletion:

- **`rem-choice-ledger` — five touches**, each finding a *different* false claim
  about the library's own contents. **If you re-read one item by hand, make it
  this one.**
- `rem-constructions-this-page-stops-short-of` — three (also an `ai-generated` seed).
- `cex-projection-is-not-closed` / `fs-projections-are-closed-maps` — three.

## 7. Mechanism finding: a prescribed gate that has never run

**`level-coverage.mjs --audit --verify-current-context` — prescribed by
`AUDIT-WORKFLOW.md` §8 as the hard A7→A8 receipt gate — has never been executed
by any audit wave, including waves 0, 1, 1b.** No `wave*-coverage.json` exists on
disk or anywhere in git history, and wave 1b's own A10 §9 lists its gates without
it.

Running it now returns exit 1 for three separate reasons, none of them a defect
in this wave's mathematics:

1. **227 `judge-coverage-missing`.** A8's repairs changed page-level context, so
   every co-page item's frozen context moved. This is expected by `CLAUDE.md`'s
   own rule, which says a post-A8 repair refreshes the targeted receipt and "does
   not trigger a whole-wave Step-8 sweep or a full-current-context coverage run."
   The gate belongs *before* A8's repairs; I ran A7 → A8 directly. **The
   substance was verified** — at A7 close I confirmed 261-item universe, 522
   verdicts, 0 items missing a lane, 0 lane-context mismatches — but by direct
   computation rather than by this tool.
2. **`spine-receipt-invalid`.** The command references
   `research/dependency-spine-audit.json`, which does not exist; the real
   receipts are per-frontier (`frontier-9-spine-audit.json`). Generating a wave-2
   template yields **68 proof-bearing items among the top 100 transitive cones,
   each needing an independent attestation** — a substantial audit no wave has
   performed.
3. **`audit-receipt-read`.** `wave2-coverage.json` is read, not written, by the
   tool; nothing has ever produced one.

**This is a doc-versus-code divergence, and by the standing rule the code is the
truth and the doc is the bug.** Two honest routes, and it is your call:

- **Run the spine audit as a dedicated pass** (68 high-fan-out proofs, Sol
  readers) and re-sequence the coverage run to sit between A7 and A8, or
- **Amend `AUDIT-WORKFLOW.md` §8** to state which gates actually apply to audit
  waves and drop or re-scope the ones that never have.

I did not silently skip it and I did not unilaterally launch a 68-item audit
outside the wave's scope.

## 8. Owner queue

1. **`thm-metric-sequential-closure`** — unqualified Statement whose proof spends
   Countable Choice, now corroborated a **third** time, plus a new rider
   **`thm-metric-continuity-characterisations`** (18 consumers, same root cause).
   Repair together in a dedicated choice-scope sweep.
2. **The coverage gate divergence** in §7.
3. **Add link liveness to a gate.** Three ledger URLs failed HTTP 200 this wave
   and a stale LibreTexts URL was live in two published items (old 404 / new
   200). A6 additionally found 2 URLs that resolve but do not contain the claim.
   `level-coverage` checks a reference URL is *present*, never that it *resolves*.
   Third consecutive wave.
4. **Beta and certifier sandboxes have no DNS.** This is what forced the
   waivers, and it will recur every wave until fixed.
5. **The `σ(n)` line for `briefs/judge-conventions.txt`** (§3) — cheapest quality
   win available.
6. **14 scope-denial prose candidates** across 11 files (`wave2-A9.md`),
   non-blocking, and the `published-claim-decay` class this wave proved dangerous.

## 9. Gates

Re-run by me from disk after stamping (Amendment 6 — no stage advances on an
agent's report):

```
precheck [0]   depcheck [0]   fwdcheck [0]   extcheck [0]   citecheck [0]
rendercheck [0]   prosecheck [0]   depsource [0]
proof-contract --strict [0]  (0 errors, 201/201)
content-policy --audit [0]   (16 -> 0 errors)
risk-report --require-reviewed [0]  (201 routed, 163 risk_review records)
genrisk --receipt [0]   impact-audit --receipt [0]  (24 interfaces / 521 consumers)
apply-judge-stamps [0]  (19 stamped / 0 skipped)
level-coverage --audit  [1]  -- see §7; never run by any wave
```

A9 prose gate: **266 files, 0 positional-contradiction errors**, 53 heuristic
warnings.

## 10. Remaining scope

**1,326 items across 21 batches remain**, after this wave's 258. By category:
real-analysis 725 (13 waves), topology 522 (7 waves), combinatorics 191,
foundations 113. **abstract-algebra, linear-algebra, not-proved-here and
number-theory are now complete categories.**

At wave 2's size that is roughly **5–6 further waves**.
