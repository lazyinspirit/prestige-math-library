# Wave 1 — A10 owner rundown

Status: **owner pause**. Wave 1 covers the four A/B pairs in abstract algebra,
combinatorics, and foundations: eight pages, 122 items, and 93 proof-bearing
items. No commit, push, publication stamp, deletion, id change, or
reading-order change is made by this rundown.

The owner-amended A8 mechanism was the exact build Step-8 mechanism: adjudicate
each rejection, repair only a confirmed fatal, and rejudge both lanes only for
the material repair. The accidentally started whole-manifest A8 sweep was
stopped and its partial historical ledger rows are not a clearance sweep.

## Provenance census

Before A1, all 122 scoped items lacked component provenance. No scoped legacy
`authorship` field was retained. After the evidence-ledger pass:

| component / evidence | count |
| --- | ---: |
| Statement: `literature-derived` / `exact-source` | 25 |
| Statement: `ai-altered` / `semantic-source` | 89 |
| Statement: `ai-generated` / `none` | 1 |
| Statement: `ai-generated` / `trivial` | 7 |
| Proof: `ai-altered` | 43 |
| Proof: `ai-generated` | 50 |
| Proof: `not-applicable` | 29 |

The three provenance ledgers contain exactly 122 current rows. Every
source-backed row has its required reader-visible reference; `content-policy`
reports zero errors and one expected `generated-kind` warning for the
page-specific conventions Remark.

## Generated-statement containment

Every in-scope seed has Alpha's `verified-generated` disposition in
[`genrisk.json`](genrisk.json). Its current cone is shown below; the cone counts
logical and direct-citation consumers.

| seed | cone | disposition |
| --- | ---: | --- |
| `cex-progressive-map-without-fixed-point` | 3 | verified-generated; all are direct pointers, not logical consumers |
| `ex-finite-choice-by-induction` | 1 | verified-generated; direct pointer only |
| `cex-a-sieve-computation-that-omits-a-term` | 0 | verified-generated |
| `cex-an-averaging-bound-that-is-not-attained` | 0 | verified-generated |
| `ex-a-ceiling-bound-from-the-strong-pigeonhole` | 0 | verified-generated |
| `ex-a-three-set-and-a-four-set-sieve-computed` | 0 | verified-generated |
| `ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways` | 0 | verified-generated |
| `rem-sieve-pigeonhole-and-double-counting-conventions` | 0 | verified-generated |

The corpus-wide receipt has 38 seeds; its four load-bearing warnings are
separately dispositioned. The two positive-cone Wave-1 seeds above have no
logical dependency consumer.

## Fatal-error report

There are **four unique confirmed fatal defects**, with **five judge-lane
detections**. All four have been repaired. The detailed repair and
certification record is [`wave1-published-repairs.md`](wave1-published-repairs.md);
the exact per-model adjudications are in
[`wave1-judge-adjudications.jsonl`](wave1-judge-adjudications.jsonl).

### False or overstrong claim — title/Statement location

- `def-quaternions` — Terra found that the title claimed the multiplication
  table had been extended bilinearly, although the Definition only supplies the
  coordinate formula/table. **Disposition:** title restated to the formula/table
  actually given.
- `lem-finite-choice` — Terra found that the title claimed all finite families,
  while the proof is for natural-number-indexed finite families. **Disposition:**
  title narrowed and the supporting restriction/image derivation repaired.
- `fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term` — Terra
  found raw natural-number subtraction in the title, while the
  Statement/refutation use the embedded real-valued identity. **Disposition:**
  title restated to that real-valued false identity; independent Sol reread
  passed, and both current paired judge lanes passed context
  `5f7a26273c53781dac9bfcfc2409172d3d2281b79b59370c8834dd6dbbf42fd5`.

### Incorrect dependency citation — Facts/dependencies and proof location

- `thm-zorn-implies-ac` — Terra and DeepSeek independently found that the
  proof cited `thm-zorn`, whose statement assumes AC, while the theorem was
  deriving AC. **Disposition:** replaced the circular citation with the
  explicitly assumed Zorn principle and removed the circular dependency edge.

No confirmed fatal remains unresolved in this audit cycle. Historical A8
nonfatal repairs remain recorded as delegated repairs; no new item, lemma,
or deletion was required.

## Judge comparison

`judge-compare.mjs --adjudications` over the full historical ledger reports:

| lane | calls | pass | rejection | null | unique rejection candidates | fatal / nonfatal / false-positive |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| DeepSeek V4 Pro | 713 | 680 | 33 | 0 | 24 | 1 / 16 / 7 |
| GPT 5.6 Terra | 503 | 374 | 129 | 0 | 111 | 4 / 96 / 10 |

The shared Zorn dependency defect is the sole agreed fatal; the other three
fatal detections are Terra-only. The comparison's latest historical rows show
102 both-pass, one both-reject, 17 Terra-only rejects, two DeepSeek-only
rejects, and no nulls. These are **not a final-wave coverage measure**: they
include the stopped erroneous manifest run and mixed historical prompt hashes.
One Terra rejection (`ex-the-derangements-of-a-four-element-set-listed`) has a
later same-context pass and is superseded under the exact Step-8 rule, while
the raw comparison utility retains it as an historical unmatched candidate.

## Gates and impact closure

- Proof contracts: 93/93 strict, zero errors or warnings; `risk-report`
  routed and Alpha reviewed all 89 high/critical contracts.
- Proof precheck: all 93 proof-bearing scoped items pass.
- Audit manifest: current reconciliation contains 971 relationships; plan
  validation is acyclic with no illegal item dependency/forward-reference.
- `fwdcheck` passes globally. `ex-russells-socks -> def-countable` is a closed,
  orientation-only forward reference; the invalid same-page declaration in
  `def-commutative-ring` was removed while preserving its ordinary Remark link.
- `content-policy --audit`: 122 scoped items, zero errors, one expected
  warning. `genrisk --receipt` passes.
- Impact closure: initial A4--A6 receipt has 122 changed interfaces and 1,567
  `still-licensed` dispositions; cumulative A8 receipt has 55 interfaces and
  1,386 `still-licensed` dispositions; the sole r8 fatal repair has one changed
  interface and its one consumer `still-licensed`.
- A9 checked the 124 repaired `items/` and `library/` files: zero
  positional-contradiction errors and 16 heuristic warnings. See
  [`wave1-A9.md`](wave1-A9.md).

### Coverage/stamp status

The initial A7 coverage remains historical evidence; Wave 1 does **not** claim
a new whole-wave `level-coverage --verify-current-context` receipt after A8.
The owner amended the audit stamp rule to match exact build Step 8: a material
repair has a target-only receipt binding its item SHA-256 (with only the judge
block excluded) to the exact DeepSeek/Terra rejudge context. The final repaired
item is recorded in
[`wave1-targeted-judge-receipt.json`](wave1-targeted-judge-receipt.json), and
the stamp tool's targeted dry run passed (one target, both lanes passed, zero
skips). No stamp was applied while the A10 owner pause remains active; no
unchanged item was rejudged and no A9 work was rerun.

## Owner decisions

1. **Completed owner decision — all B-page bodies.** The owner extended the
   combinatorics decision to every B/examples page. The 36 pages that still
   had authored prose—including both original Wave-1 queue pages—were reduced
   mechanically to their existing frontmatter, preserving every `items` and
   `examples` list. All 73 B/examples pages now have no authored body;
   full-set prose and renderer checks pass with zero errors or warnings.
2. **Completed A9 wording decision — `ex-russells-socks`.** Its two incorrect
   library-scope claims now distinguish the actual state: `def-countable` is a
   closed, orientation-only forward reference for the definition of finiteness,
   and Jech--Sochor is recorded but not proved in
   `rem-fraenkel-socks-model`. The two scope warnings are cleared; the remaining
   count-language warning is a harmless false positive. Targeted prose and
   renderer checks pass.
3. **Completed A9 wording dispositions.** Of the remaining fourteen heuristic
   candidates, the two scope-bearing items (`fs-zorn-provable-in-zf` and
   `lem-finite-choice`) were corrected. The other eleven count-language
   candidates are exact mathematical descriptions, and the `ex-russells-socks`
   residual is likewise an exact individual-choice description; all are
   retained. This was a reasoned disposition of the existing A9 report, not an
   A9 rerun.
4. **Completed forward-reference gate repair — `def-commutative-ring`.** Its
   invalid same-page `forward_refs` declaration was removed; the ordinary
   Remark link to the quaternion theorem remains. `fwdcheck` now passes
   globally, and targeted prose and renderer checks pass.
5. **Completed audit stamp amendment.** The target-only receipt and
   `apply-judge-stamps --audit-targeted-rejudges` now enforce the
   owner-mandated exact Step-8 mechanism: validate the repaired item's
   unchanged material text against its own paired rejudge, then stamp only that
   item. Later unrelated companion-page prose changes do not trigger a sweep.

There are no proposed id renames/removals or reading-order changes. The full
delegated repair/restatement history, including retain/drop rationale for
multi-touch items, remains inspectable in
[`wave1-published-repairs.md`](wave1-published-repairs.md),
[`wave1-alpha.md`](wave1-alpha.md), and
[`wave1-touch-escalations.md`](wave1-touch-escalations.md).
