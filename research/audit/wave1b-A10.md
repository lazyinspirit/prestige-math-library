# Wave 1b — A10 owner rundown

**Scope:** 4 batches, 9 pages, **174 items** (linear-algebra 28, number-theory
27, real-analysis 43, topology 76). Baseline `8289fc0`.

**Status: A0–A9 complete. This is your pause.** Nothing is committed or pushed.
`verification.audited` was never written by any actor — verified: zero additions
of that field across all 185 changed content files. 194 files changed in total
(185 content + 9 research ledgers).

---

## 1. Provenance census

Before (at `8289fc0`): **174/174 untagged** (`legacy-unclassified`).
After: **174/174 carry both component labels.** Zero untagged remain.

| statement | n | evidence classes |
|---|---:|---|
| `ai-altered` | 140 | semantic-source 137, established-knowledge 3 |
| `literature-derived` | 28 | exact-source 28 |
| `ai-generated` | 6 | trivial 4, none 2 |

| proof | n |
|---|---:|
| `ai-generated` | 104 |
| `ai-altered` | 36 |
| `not-applicable` | 32 |
| `literature-derived` | 2 |

Disk label counts match the four provenance ledgers exactly.

**URL discipline.** 165/174 carry a reader-visible `sources.references` URL. The
9 without one are each licensed: 6 `ai-generated` statements (a novel AI claim
has no source to cite), and the 3 `established-knowledge` waivers
`lem-of-square-monotone`, `prop-of-ab-less-b`, `lem-of-hom-order-preserving`,
which now carry `alpha_concurred: true` — the sole waiver the hard rules permit,
and Alpha did concur at A6.

## 2. Generated-statement containment

45 seeds corpus-wide, 8 with a nonzero cone. Wave 1b's four dispositions:

| seed | cone | logical consumers | disposition |
|---|---:|---:|---|
| `rem-topology-conventions` | 1 | **0 (was 5)** | **unfold** |
| `ex-prime-factorisation-worked` | 1 | 0 | verified-generated |
| `rem-complete-metrizability-is-the-topological-shadow` | 1 | 0 | verified-generated |
| `cex-cantor-intersection-needs-vanishing-diameters` | 1 | 0 | verified-generated |

`rem-topology-conventions` is the one that mattered. It entered A6 with **five**
logical dependents including `def-t0-and-t1-spaces`, a definition on the spine.
Alpha declined retag (no source can establish a house convention) and restate,
then **unfolded**: it inlined each consumer's use and dropped the `deps` edges.
Its logical-consumer list is now empty, the only survivor being a wikilink
mention from `ex-sorgenfrey-line`. So tagging it `ai-generated` does not create a
forbidden dependency target — the rule is satisfied, not deferred. The other
three were mention-only and follow the wave-1 precedent that a dependence
propagates while a mention does not. `genrisk --receipt` exits 0.

## 3. Fatal-error report

**19 fatal adjudications over 18 distinct items** (`def-metrizable-space` was
fatal in both lanes), plus one further fatal found at the rejudge, for **19
distinct fatal items** across both A8 rounds. Grouped by defect type, then
location.

### Missing hypothesis / choice scope — the dominant class this wave

**Nine items stated a first-countability or sequence-detection consequence
without the Countable Choice hypothesis the cited theorem actually spends.** It
propagated almost entirely through **titles and Remarks**, which no mechanical
gate reads.

| item | location | disposition |
|---|---|---|
| `def-first-countable-top` | Remark consequences | each consequence now carries its cited theorem's exact hypotheses |
| `ex-cocountable-topology-on-r` | Remark | conclusion explicitly conditional on AC_ω; claims 1–3 stay choice-free |
| `fs-sequentially-continuous-implies-continuous` | intro converse + Remark | both conditional on AC_ω; choice-free counterexample unchanged |
| `fs-every-topology-is-metrizable` | Remark | surviving paragraph choice-qualified; duplicate retaining old text removed |
| `cex-sequential-closure-strictly-inside-closure` | Remark | witness stays choice-free; only the first-countability inference is conditional |
| `thm-first-countable-sequences-suffice` | **title + short label** + Remark | title and label now carry the theorem's exact choice scope |
| `cex-non-metrizable-topology` | Remark | inference conditional; primary counterexample unconditional |
| `lem-sequential-closure-inside-closure` | Remark | choice-free inclusions unconditional; cited reversal choice-qualified |
| `cex-sequentially-continuous-not-continuous` | Remark | exact countable-range mechanism; inference conditional |
| `ex-uncountable-cantor-cube-…-not-first-countable` | **title** + step 1.1 | title states ultrafilter lemma and AC_ω; new product-Hausdorff Fact licenses Hausdorffness |
| `ex-hamel-basis-of-r-over-q` | Given + `[L5]` | **two** separate missing hypotheses — see §6 |

### Incorrect / insufficient dependency citation

| item | location | disposition |
|---|---|---|
| `cor-dimension-of-a-direct-sum` | proof + Facts | induction used natural-addition laws with no licensed dependency; three dependencies, exact Facts and step citations added |

### False or overstrong claim

| item | location | disposition |
|---|---|---|
| `def-dimension` | Remark | said *every* proper subfield gives a different dimension → now *can* give, which is what the cited examples establish |
| `def-neighbourhood-top` | Remark | claimed an arbitrary universal neighbourhood predicate can be checked on open neighbourhoods only → restricted to enlargement-preserving predicates |
| `def-metrizable-space` | Remark | identified metric open neighbourhoods with the broader topological convention and denied an order-native use that exists → exact cofinal local-base relation |
| `def-lipschitz-holder-contraction` | Remark | used the equal-point case to explain α>0 → distinguishes it from the global α=0 bounded-image condition |
| `fs-equivalent-metrics-share-cauchy-sequences` | Remark | claimed the displayed metrics give different completeness verdicts → proves both are incomplete, says a different witness is needed |
| `ex-sierpinski-and-particular-point-spaces` | Remark | overclaimed the singleton case; **first repair then overclaimed** the cofinite intersection property → final text splits the cases and restricts to infinite `X` |
| `def-dense-top` | Remark | indiscrete-space Remark excluded the empty subset even when the space is empty → exhaustive split |
| `thm-kuratowski-closure-axioms` | **Remark heading** | credited (K3) with making the fixed points a topology, contradicting its own proof → (K1),(K2),(K4) give the topology; (K3) makes `c` recoverable |
| `thm-fundamental-theorem-of-arithmetic` | Remark | conflated the primality use in existence with the distinct use in uniqueness → existence attributed to finding a prime divisor, uniqueness to Euclid's lemma |
| `lem-metric-convergent-implies-cauchy` | Remark | said the proof uses only the triangle inequality, though step 2.1 also uses symmetry → now names both |

### Invalid inference

| item | location | disposition |
|---|---|---|
| `cex-embedding-not-order-preserving` | proof step 6.1 | inferred that codomain completeness forces order preservation, which the cited lemma does not say → step now contraposes the lemma correctly |

**Location tally: of 19 fatal items, 16 were located in Remark prose or a
title/short label, not in a numbered proof step.** Two were in proof steps
(`cex-embedding-not-order-preserving` 6.1, `ex-uncountable-cantor-cube…` 1.1)
and one in Facts/`Given`. This is the wave's most transferable finding: the
library's mathematical risk is concentrated where no gate reads.

## 4. Judge comparison

`judge-compare.mjs --adjudications`, whole wave including the targeted rejudge.
**Zero unadjudicated rejections in either lane.**

| model | candidates | fatal | nonfatal | false pos | real-defect precision | fatal rate |
|---|---:|---:|---:|---:|---:|---:|
| `gpt-5.6-terra` | 91 | 18 | 69 | 4 | **95.6%** | 19.8% |
| `deepseek-v4-pro` | 17 | 2 | 13 | 2 | **88.2%** | 11.8% |

Terra fatal breakdown: 1 logic, 7 dependency-citation, 10 other.
DeepSeek: 0 logic, 1 dependency-citation, 1 other.

**A7 coverage was 174/174 in both lanes with zero nulls.** DeepSeek rejected 16
(9%), Terra 82 (47%); 15 both, 1 DeepSeek-only, 67 Terra-only.

**On Terra's 47% — it is the corpus, not the lane.** Of its 67 solo rejections,
**64 were real** (16 fatal + 48 nonfatal) and 3 false positives — 95.5%,
matching its 94.4% historical precision. There is a confound you should know
about: `tools/judge.mts` was changed mid-wave to pass Terra a 1,000,000-token
context window explicitly, and **A7 is the first sweep under it** (see §7). The
window raised *volume*, not error rate. Three-quarters of the extra volume lands
as nonfatal precision findings the 30-second rule disposes without a repair.
DeepSeek at 9% missed 16 real fatal defects Terra caught.

**The two lanes are not redundant.** On
`fs-sequentially-continuous-implies-continuous` both rejected — Terra correctly
(fatal), DeepSeek for a different and wrong reason (false positive). And the one
fatal found at the targeted rejudge was **DeepSeek's**, on an item Terra passed.

## 5. A8 convergence, and the churn that was avoided

The targeted rejudge of the 24 repaired items returned **14 pass / 10 reject**.
All 10 alleged the same thing — a step using a fact its citations do not license
— and **none alleged a false claim**; several concerned text round 1 never
touched, because Terra rereads the whole item rather than the diff.

Round 2 adjudicated **9 `confirmed_nonfatal`** (all Terra) and **1
`confirmed_fatal`** (DeepSeek). The nine were recorded without repair under your
30-second rule; the one real defect was repaired and passed both lanes.

This is worth stating plainly: had the nine been repaired instead of recorded,
the rewritten text would have invited a further round of the same class, and so
on. **The 30-second rule is what makes this wave terminate.** It went against
volume — nine findings from the higher-precision lane were classified nonfatal
while the single finding from the quieter lane was the genuine defect.

## 6. Twice-touched escalation (discharged personally)

`ex-hamel-basis-of-r-over-q` — **refuted 2×, repaired 4×, total 6** — exceeded
the threshold, and Alpha correctly declined to discharge the orchestrator's role
on it. I read the item's full current text myself.

**Verdict: sound; the history is coherent, not a rotten proof.** Both defects
were the same family — a hypothesis *used* but not *declared* — and they were
independent: round 1 declared the Axiom of Choice for basis existence, round 2
declared completeness for uncountability. `[L5]` previously asserted "ℝ is
uncountable" citing `thm-r-uncountable`, whose Statement begins "Let ℝ be a
complete ordered field", while the item had established only an ordered field.
Both hypotheses now appear in all four places that bind: Example header,
`Given`, the `[L#]` facts, and `deps`.

I verified the mathematics independently. The contradiction in step 2.2 is
valid: a finite basis yields an injection ℝ → (ℚ_ℝ)ⁿ, that set is at most
countable by steps 1.2–1.3, so ℝ would be at most countable. The title claims
"every such basis is infinite" and the proof rules out exactly finite bases — no
overclaim. Its Remark explicitly declines the countably-infinite case, noting it
would cost Countable Choice via `thm-countable-union-of-countable`. That
restraint is the opposite of the defect pattern.

## 7. Mechanism changes this session — not content

1. **`tools/judge.mts`** — the Terra lane now passes
   `model_context_window=1000000` explicitly. Its temporary `CODEX_HOME` carries
   only `auth.json`, so your `config.toml` window was **not** inherited; before
   this fix the lane silently ran at the Codex built-in default. This is the
   confound behind A7's rejection rate, resolved in §4.
2. **`tools/judge-sweep.mjs`** — DeepSeek concurrency 16 → 24 (Terra unchanged
   at 16; 40 combined), on your instruction. Doc references updated in
   `CLAUDE.md` (3 sites), `WORKFLOW.md`, `LEVELS.md`, `AUDIT-WORKFLOW.md`.
3. **`AUDIT-WORKFLOW.md`** — A4 is now parallel across batches (disjoint write
   sets); the whole-wave gate run and `touchlog` snapshot stay serial.

**A structural finding you should decide on.** Audit-Alpha runs under
`--sandbox workspace-write` and **cannot launch judge child processes** — it
returns `EPERM`. A8 hit this, recorded the blocker, and invented nothing, which
is exactly right. The orchestrator ran the sweep instead. This is not a one-off:
**every future Alpha will hit it.** Either the workflow states that judge-lane
execution is always the orchestrator's, or Alpha's sandbox changes. Right now
the docs imply Alpha runs it.

## 8. Owner queue

Narrowed by R1 to what only you may decide.

### Deferred mathematical finding — recommend a dedicated wave

- **`thm-metric-sequential-closure`** carries an **unqualified title and
  Statement** while its proof spends **Countable Choice**, with **21 downstream
  consumers**. It is an *earlier-wave* published item, outside wave 1b scope.
  Alpha found it at A8 while tracing a comparison, confirmed no wave-1b repair
  rests on the unqualified direction, restored the page after a local
  experiment, and queued it rather than opening a 21-consumer cascade inside an
  83-item scope. That was the right call. It is the same defect class as §3's
  dominant finding, which suggests the choice-scope sweep should be run
  library-wide rather than wave by wave.

### Scope-denial candidates from A9 (8) — non-blocking

`cor-every-vector-space-has-a-basis`, `def-metrizable-space`,
`fs-continuous-bijection-is-a-homeomorphism`, `fs-every-fermat-number-is-prime`,
`fs-union-of-two-independent-sets-is-independent`,
`lem-sequential-closure-inside-closure`, `rem-separation-axiom-conventions`,
`thm-canonical-prime-factorisation`. Each is currently true and several are
load-bearing for reader honesty. They are the class **published-claim decay**
falsifies later: "this library does not define compactness" becomes false the
day a compactness page ships. Full detail in `wave1b-A9.md`.

### Delegated debatable restatements Alpha adjudicated

Kept inspectable per R3: the full record is `wave1b-published-repairs.md`
(24 round-1 repairs + 1 round-2 repair, each with old defect, replacement,
class, provenance transition, independent certifier and pre-stamp hash) and the
multiple-repair escalation table in `wave1b-alpha.md`.

**No deletions, id renames, or reading-order changes are proposed.**

## 9. Gates and coverage receipt

All green after stamping, re-run by me from disk (Amendment 6 — no stage
advances on an agent's report):

```
depcheck [0]   fwdcheck [0]   extcheck [0]   citecheck [0]   rendercheck [0]
precheck [0]   genrisk --receipt [0]   proof-contract --strict [0]
git diff --check [0]
```

A9 prose gate: **185 files, 0 positional-contradiction errors**, 50 heuristic
warnings (21 `count-in-prose`, 21 `count-of-this-page`, 8
`library-scope-denial`).

**Stamp status.** 15 of the 24 repaired items carry a paired
`deepseek-v4-pro + gpt-5.6-terra` pass, bound by
`wave1b-targeted-judge-receipt.json` (15 targets, each with its rejudge context
hash and an item SHA-256 excluding only the `judge:` block).
`apply-judge-stamps --audit-targeted-rejudges` validated the receipt and
reported 15 stamped / 0 skipped.

**The other 9 deliberately carry no judge stamp.** A judge rejected them and
Alpha cleared the rejection as nonfatal; recording a pass would assert something
no judge said. They carry the adjudication instead. All 24 carry
`verification.verified` with `scope: published-audit`, `delegated_by: owner`,
after independent certification — no author certified its own repair.

Every repair is anchored: 47+ touch snapshots including a dedicated pre-repair
snapshot per item, impact closure re-run from each baseline, and proof contracts
re-anchored to the changed text.

## 10. Remaining scope

**1,649 of 2,716 published items remain untagged (61%)** — real-analysis 725,
topology 523, combinatorics 191, foundations 113, not-proved-here 64,
number-theory 33. At wave 1b's size that is roughly **9–10 further waves**.
Calendar time is dominated by the per-wave owner pause, not by compute.

---

**Awaiting your release.** On clearance the wave's repairs and retro-tags ship
in one commit (conventional style, no trailers). I will not commit, push, or
write `verification.audited` without it.
