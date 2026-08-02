# Wave 0 · real-analysis · sub-batch `cauchy` — Audit-Beta findings (A1/A2)

Pair audited: `construction-of-r-via-cauchy-sequences`
(`library/real-analysis/construction-of-r-via-cauchy-sequences.md`), A page, 40 items,
no `-examples` companion. Includes the 22 shared Z/Q prelude items
(`def-integers` … `fs-sqrt2-rational`) that also appear on the sibling's Dedekind page;
those are audited and ledgered here and only here.

Owned files:
`research/audit/wave0-real-analysis-cauchy.provenance.jsonl` (40 rows),
`research/audit/wave0-real-analysis-cauchy.proof-contracts.json` (29 proof-bearing items),
this file. No item, page, or tool file was modified.

## 0. Checkpoint (context-continuity rule)

Substage: A1 + A2 complete; nothing applied, everything proposed below for A3.
Completed: all 40 items read from disk; literature search done and every recorded URL
verified HTTP 200 by WebFetch; 40 ledger rows written; full three-part contracts
captured for all 29 proof-bearing items and self-checked with `tools/proof-contract.mjs
--strict` (1 error, which IS finding D-1 below); `citecheck`/`depcheck`/`fwdcheck`/
`extcheck` run read-only and clean on all 40 items. Next action: none — report to
orchestrator. If resumed: re-read the three owned files, do not re-run the literature
search, and act only on A3 decisions.

## 1. Coverage statement

Every one of the 40 items was opened from disk. **Every numbered proof step and every
`[F#]`/`[A#]`/`[L#]` fact in all 29 proof-bearing items was read and checked against the
cited item's own on-disk text; every `deps` edge was checked semantically.** No
exceptions. Cross-category targets in `foundations` (`def-natural-numbers`,
`def-nat-addition`, `def-nat-multiplication`, `def-nat-order`, `lem-nat-add-commutative`,
`lem-nat-add-associative`, `lem-nat-add-cancellative`, `lem-nat-add-identity`,
`lem-nat-mult-commutative`, `lem-nat-mult-identity`, `lem-nat-mult-distributive`,
`thm-nat-linear-order`) were opened and their Statements compared with the N-facts the
Z items assume; all match. Their missing provenance tags are their own wave's business
and are not counted as defects here.

## 2. Provenance census (proposed, A1)

| `provenance.statement` | count |
|---|---|
| `literature-derived` | 15 |
| `ai-altered` | 25 |
| `ai-generated` | 0 |

| evidence class | count |
|---|---|
| `exact-source` | 15 |
| `semantic-source` | 22 |
| `established-knowledge` (needs Alpha concurrence) | 3 |
| `trivial` | 0 |
| `none` | 0 |

| `provenance.proof` | count |
|---|---|
| `not-applicable` (11 definitions) | 11 |
| `ai-altered` | 14 |
| `ai-generated` | 15 |

No statement in this sub-batch is judged AI-invented. Every one is either an exactly
located standard construction/theorem or a recoverable restatement of one, so under the
2026-08-02 owner rule none is tagged `ai-generated`. Consequence: this sub-batch
contributes **no `genrisk` seed**, and no `deps` edge in it targets an `ai-generated`
statement.

The three `established-knowledge` rows are **Alpha escalations** (`alpha_concurred:
false`; they fall back to `ai-generated` if Alpha declines):

- `lem-rat-inverse-well-defined` — representative-independence of `[(a,b)]^{-1} :=
  [(b,a)]`. Standard obligation attached to the sourced reciprocal formula; also
  one-line verifiable from `def-rationals` (`ab' = a'b` ⟺ `ba' = b'a`). Cited by
  `def-rat-operations` only via `justified_by`, never as a proof dependency.
- `lem-null-is-cauchy` — the limit-zero instance of "every convergent sequence is
  Cauchy". Load-bearing: `lem-null-ideal` cites it as `[L4]`.
- `ex-one-over-n-null` — `(1/n)` is null; the Archimedean property restated as a worked
  example. Not a `deps` target of any item in the corpus.

### Sources actually used (all verified HTTP 200 this session)

`en.wikipedia.org/wiki/Integer` · `/Rational_number` · `/Construction_of_the_real_numbers`
· `/Cauchy_sequence` · `/Archimedean_property` · `/Absolute_value` · `/Square_root_of_2`
· `/Dense_set` · `/Ordered_field` · `/Principles_of_Mathematical_Analysis` ·
`encyclopediaofmath.org/wiki/Real_number` ·
`www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf`
(L. S. Krapp, *Constructions of the real numbers — a set theoretical approach*, Oxford
BE Mathematical Extended Essay, 2014; supervised by P. M. Neumann) ·
`terrytao.wordpress.com/books/analysis-i/` · `archive.org/details/foundationsofana0000land`.

The Krapp essay is the single closest source for this page: its Def. 2.1/2.4/2.5,
Prop. 2.3/2.6, Thm. 2.10, Def. 2.11/2.14/2.15, Prop. 2.12/2.16/2.18, Def. 3.17–3.21/3.24,
Prop. 3.19/3.20/3.25, Thm. 3.26, Def. 3.27 and Thm. 3.29 line up one-for-one with this
page's Z → Q → R development, including the ring/ideal/maximal-ideal presentation and the
eventual-rational-lower-bound order on R.

## 3. Defects found

Nothing fatal. No false Statement, no unlicensed inference, no overstrong title, no
dependency cited for more than it states. Every proof closes. Findings are
citation-precision and metadata, listed worst first.

### D-1 · unused fact and unused dependency edge — `thm-rat-ordered-field`
**Location:** Facts & Assumptions + frontmatter `deps`.
`[L2] $\mathbb{Z}$ has no zero divisors; cancellation holds ([[lem-int-cancellation]]).`
is cited by **no** proof step. Steps 2.3 and 3.1 cancel the positive factors `d` and
`bd` explicitly "via order-scaling", i.e. by the item's own step 1.1, not by
multiplicative cancellation; `bd > 0` comes from `[L1]` (positives closed under
multiplication). `lem-int-cancellation` is therefore a dead `deps` edge here.
**Class:** (b) citation-precision. **Severity:** nonfatal — nothing false is asserted;
the edge overstates what the proof rests on.
**Proposed repair:** delete the `[L2]` paragraph and drop `lem-int-cancellation` from
`deps`. This changes the public dependency interface, so it needs a `touchlog` snapshot
and an `impact-audit` pass if approved. **Mechanical trace:** this is the single
`citation-uses` error `tools/proof-contract.mjs --strict` reports on my contract file; I
recorded `uses: []` rather than invent a use. The contract goes green the moment the
repair lands.

### D-2 · dead source URL (HTTP 403) — `def-integers`, `thm-int-comm-ring`, `def-rationals`
**Location:** `sources.references`.
`https://bookstore.ams.org/chel-79` (Landau, *Foundations of Analysis*) returns **403
Forbidden**, so these three items violate the working-URL rule.
**Class:** (c) sources repair. **Severity:** nonfatal.
**Proposed repair:** replace that URL with the verified
`https://archive.org/details/foundationsofana0000land` (same book, Chelsea 1960 English
translation), keeping the title text. Frontmatter-only, no mathematical text changes, so
`verification.judge`/`audited` survive per SCHEMA's material-rewrite test.

### D-3 · `[L2]` names the wrong order on `lem-int-embeds-rat`
**Location:** Facts & Assumptions.
`[L2] The orders on $\mathbb{Z}$ and $\mathbb{Q}$ ([[def-rat-order]]).` — `def-rat-order`
defines only the order on Q (it *mentions* `def-int-order` in a Remark). Step 1.4
concludes `k ≤ m` **in Z**, and `def-int-order` is absent from this item's `deps`
(reachable only transitively through `def-rat-order`).
**Class:** (b) citation-precision. **Severity:** nonfatal (30-second gap).
**Proposed repair:** split into `[L2] The order on Q ([[def-rat-order]])` and `[L3'] The
order on Z ([[def-int-order]])`, adding `def-int-order` to `deps`. Adding a dependency
edge is an interface change; if the orchestrator prefers zero interface churn, rewording
`[L2]` to "The order on Q ([[def-rat-order]]), which is defined from the order on Z"
fixes the fidelity problem without touching `deps`.

### D-4 · `justified_by` recorded inconsistently across the page's definitions
**Location:** frontmatter of five definitions.
`def-rat-operations` (`justified_by: [lem-rat-inverse-well-defined]`) and `def-rat-order`
(`justified_by: [lem-rat-positive-denominator]`) follow the definition-justification
rule; the following link their discharging lemma in the body but declare nothing:

| definition | body links (well-definedness discharger) | `justified_by` on disk |
|---|---|---|
| `def-integers` | `lem-int-equivalence` | absent |
| `def-int-operations` | `lem-int-add-well-defined`, `lem-int-mul-well-defined` | absent |
| `def-rationals` | `lem-rat-equivalence` | absent |
| `def-rat-operations` | also `lem-rat-ops-well-defined` | only the inverse lemma |
| `def-real-numbers`, `def-real-order`, `def-int-order` | `thm-reals-field`/`thm-reals-ordered-field`/`thm-int-ordered-ring` in Remarks | absent |

**Class:** (b)/metadata. **Severity:** nonfatal — no gate fails and nothing false is
claimed; the audit checklist and the prerequisite closure are simply less informative
than the page's own text.
**Proposed repair:** add the missing `justified_by` entries. Each target does
transitively depend on its definition, so `depcheck`'s `justified_by` rule is satisfied.
Recommend batching this with any other approved edit to these files.

### D-5 · unused dependency edge — `fs-rationals-complete`
`deps` lists `lem-cauchy-bounded`, which no fact and no step uses. Same class and
disposition as D-1 but with no fact paragraph to remove — `deps`-only.
**Severity:** nonfatal.

### D-6 · page prose asserts a result the library does not establish
**Location:** `library/real-analysis/construction-of-r-via-cauchy-sequences.md`,
"Destination" paragraph: "it fills the holes once and for all, since completing
$\mathbb{R}$ by the same device yields nothing new."
The claim is **true** (the completion of a complete field is itself), but no item on this
page or elsewhere in the corpus proves it, and it is stated as fact in reader-facing
prose. **Class:** (d) debatable restatement. **Severity:** nonfatal.
**Proposed repair (optional):** soften to "…and the construction cannot be iterated to
gain anything further: `thm-reals-cauchy-complete` already gives every Cauchy sequence of
reals a real limit", which says only what the page proves.

## 4. Nonfatal citation compressions accepted under the 30-second rule (recorded, not chased)

These are all cases where an `[L#]` fact states an immediate consequence of the cited
Statement rather than the Statement itself. Each is closable by a competent reader well
inside 30 seconds; I verified each derivation and propose **no** repair.

- `lem-int-cancellation` `[L1]` calls trichotomy a consequence of `thm-int-ordered-ring`
  (total order + antisymmetry + `x ≠ 0`); `[L2]` attributes `(-u)v = -(uv)` and
  `-(-u) = u` to `thm-int-comm-ring` (standard ring identities).
- `lem-cauchy-bounded` `[L1]` states the triangle inequality in the instantiated form
  `|x| ≤ |x-y| + |y|`; `lem-rat-triangle` states `|x+y| ≤ |x|+|y|`.
- `lem-rat-triangle` `[L1]` attributes `(-u)v = -(uv)` to `thm-rat-ordered-field`, whose
  Statement routes through `thm-rat-field`.
- `thm-cauchy-ring` `[L4]` / `lem-null-ideal` `[L1]` attribute the existence of the
  quotients `ε/2`, `ε/(A+B)`, `ε/B` to `thm-rat-ordered-field`; division needs
  `thm-rat-field`, which both items also cite.
- `thm-cauchy-ring` step 1.3 and `lem-null-ideal` step 1.2 silently normalise the bound
  from `lem-cauchy-bounded` (`M ≥ 0`) up to `≥ 1`; `lem-null-ideal` does it explicitly,
  `thm-cauchy-ring` does not.
- `lem-null-maximal` step 4.1 concludes maximality without separately remarking that the
  null ideal is **proper**; that is `thm-reals-field` `[L4]` (the constant sequence 1 is
  not null), one line away.
- `lem-rat-embeds-dense` step 3.1 and `thm-reals-cauchy-complete` step 4.1 both use
  "eventually `> δ` (resp. `< ε/3`) implies `≥ δ̂` (resp. `≤ ε̂/3`)". That needs the
  trichotomy of `thm-reals-ordered-field`: if the class were negative its representative
  would eventually sit below `δ − δ''`, contradicting the hypothesis. Both items cite
  `thm-reals-ordered-field`, so the step is licensed; I checked the inequality chains
  numerically and they are strict where the items claim strictness.
- The Z/Q items state N-arithmetic as bare `[A#]` assumptions with no wikilink, following
  `def-integers`' explicit "N and its arithmetic … are taken as given background
  throughout this construction". I checked every such assumption against the
  `foundations` items that prove it (`lem-nat-add-commutative`, `lem-nat-add-associative`,
  `lem-nat-add-cancellative`, `lem-nat-mult-commutative`, `lem-nat-mult-associative`,
  `lem-nat-mult-distributive`, `lem-nat-add-identity`, `lem-nat-mult-identity`,
  `lem-nat-order-add-compatible` — which is the biconditional `thm-int-ordered-ring`
  `[A3]` needs — `lem-nat-no-zero-divisors`, `lem-nat-trichotomy`, `thm-nat-linear-order`,
  `def-nat-order`). **Every N-assumption used on this page is true and is proved in the
  library.** Converting them to `[L#]` citations with `deps` edges would be an
  improvement in fidelity but is a large interface change across ~10 published items;
  I record it rather than propose it.

## 5. Choice usage (recorded, permitted)

`thm-reals-cauchy-complete` step 1.1 picks one rational `q_k` for every `k ≥ 1`; that is
countable choice, which the library has adopted as a foundational axiom. `lem-cauchy-
bounded` step 2.2 takes a maximum over a finite list, and `fs-rationals-complete` step
1.1 selects the largest `k_n` in a finite nonempty set — neither needs choice. No item on
this page uses AC beyond the adopted scope.

## 6. Published-claim decay

None detected. No claim on this page is falsified by later levels; the only unproved
assertion I found is the page-prose one in D-6, which is true.

## 7. Verification-stamp note for A4

The 40 items carry `verification.judge: {model: openai/gpt-5.4, verdict: pass}` and
`audited: 2026-07-24/25` stamps under a retired judge lineup. D-2, D-4 and the
provenance retags are frontmatter-only and do **not** void them. D-1, D-3, D-5 and D-6
change what a judge would see and, if approved, void the `judge` block and the `audited`
stamp on the items they touch, per `AUDIT-WORKFLOW.md` §9.

## 8. Nothing for the owner-only queue

No deletion, id rename/removal, or reading-order change is proposed.

---

# A4 — applied repairs (2026-08-02)

Authorised by `research/audit/wave0-real-analysis-cauchy.A3.md`. The orchestrator took
the pre-A4 `touchlog` snapshot; I did not run `touchlog`. **37 of my 40 items were
edited; the three `established-knowledge` items were not touched at all.** Nothing
outside those 37 item files and my three namespaced audit files was written.

## A4-1 · Provenance retags — 37 items

`provenance:` inserted immediately after `origin:`, with `statement` and `proof` exactly
as the ledger row declares. No item carried a legacy `authorship` field, so owner
decision D5 had nothing to delete here. No `generation:` block was needed: no statement
in this sub-batch is `ai-generated`.

The evidence URL backing each row was added to `sources.references` where it was not
already present (37 additions, one per item): Wikipedia *Integer* (8 items), *Rational
number* (5), *Archimedean property* (2), *Cauchy sequence* (2), *Absolute value*,
*Square root of 2*, *Dense set*; Encyclopedia of Mathematics *Real number* (2); Krapp,
*Constructions of the real numbers* (16). Every URL was WebFetch-verified 200 during A1.
These additions change no claim, so per SCHEMA's material-rewrite test they do not void
`verification.judge` or `audited`.

**HELD, no provenance block written** (A3: pending Alpha's A6 concurrence):
`lem-rat-inverse-well-defined`, `lem-null-is-cauchy`, `ex-one-over-n-null`. If Alpha
declines, all three fall back to `provenance.statement: ai-generated` and the ledger
rows must be rewritten to `evidence: trivial`/`none` before they are tagged.

## A4-2 · D-1 `thm-rat-ordered-field` — MATERIAL

- Deleted fact, verbatim: `[L2] $\mathbb{Z}$ has no zero divisors; cancellation holds ([[lem-int-cancellation]]).`
- `deps`: `[def-rat-order, def-rat-operations, thm-rat-field, thm-int-ordered-ring, lem-int-cancellation]`
  → `[def-rat-order, def-rat-operations, thm-rat-field, thm-int-ordered-ring]`
- Class (b) citation-precision. Justification: no numbered step cites `[L2]`; steps 2.3
  and 3.1 cancel `d` and `bd` "via order-scaling", i.e. by the item's own step 1.1, and
  `bd > 0` comes from `[L1]`. No step tag changed, so the proof is untouched.
- Stamps: deleted `verification.judge` (`openai/gpt-5.4`, pass, 2026-07-24) and
  `verification.audited: 2026-07-24`. Public-interface change → wave-level
  `impact-audit` closure, per A3.

## A4-3 · D-3 `lem-int-embeds-rat` — MATERIAL

- old: `[L2] The orders on $\mathbb{Z}$ and $\mathbb{Q}$ ([[def-rat-order]]).`
- new: `[L2] The order on $\mathbb{Q}$ ([[def-rat-order]]), whose defining inequality is read in the order on $\mathbb{Z}$ ([[def-int-order]]).`
- `deps`: `def-int-order` inserted after `def-rat-order`.
- Class (b). Label `L2` kept so step 1.4's `[L1, L2]` tag is unchanged; the fact now
  names both cited definitions instead of attributing Z's order to `def-rat-order`.
- Stamps: deleted `verification.judge` (`openai/gpt-5.4`, pass, 2026-07-24) and
  `verification.audited: 2026-07-24`.

## A4-4 · D-2 dead Landau URL — `def-integers`, `thm-int-comm-ring`, `def-rationals`

`url: "https://bookstore.ams.org/chel-79"` (HTTP 403) →
`url: "https://archive.org/details/foundationsofana0000land"` (verified 200). Title text
"E. Landau, Foundations of Analysis" unchanged. Class (c), frontmatter-only, stamps kept.

## A4-5 · D-4 `justified_by` normalisation — 7 items

| item | `justified_by` after |
|---|---|
| `def-integers` | `[lem-int-equivalence]` |
| `def-int-operations` | `[lem-int-add-well-defined, lem-int-mul-well-defined]` |
| `def-int-order` | `[thm-int-ordered-ring]` |
| `def-rationals` | `[lem-rat-equivalence]` |
| `def-real-numbers` | `[thm-reals-field]` |
| `def-real-order` | `[thm-reals-ordered-field]` |
| `def-rat-operations` | `[lem-rat-ops-well-defined, lem-rat-inverse-well-defined]` (was inverse only) |

Each target already links back from the definition's own body and transitively depends on
it, so SCHEMA's `justified_by` rule holds. Class (b)/metadata, frontmatter-only, stamps
kept. `depcheck` and `fwdcheck` stayed clean on all seven.

## A4-6 · D-5 `fs-rationals-complete`

`deps`: dropped `lem-cauchy-bounded` (cited by no fact and no step); the remaining eight
edges are unchanged. Class (b), frontmatter-only, stamps kept.

## Not applied

D-6 (page-prose softening) — deferred to Alpha at A6, page untouched. The bare-`[A#]`
N-arithmetic conversion sweep — A10 owner queue, no item touched.

## Gate results after A4

| gate | result |
|---|---|
| `reflow.mts` on the two changed proof items | unchanged (already canonical) |
| `precheck.mts` on the two changed proof items | **PASS, PASS — 2 checked, 0 failing** |
| `proof-contract.mjs --strict` (contracts regenerated against final text) | **0 errors, 0 warnings, 29/29 checked** — the single `citation-uses` error is gone |
| `citecheck.mjs` | no finding on any of the 40 |
| `fwdcheck.mjs` | OK corpus-wide |
| `extcheck.mjs` | OK corpus-wide; no finding on any of the 40 |
| `rendercheck.mjs` | OK, 2844 files |
| `prosecheck.mjs` | OK — no positional claim contradicts the spec |
| `depcheck.mjs` | 16 corpus errors, of which **exactly 2 are mine**: `published-unaudited` on `thm-rat-ordered-field` and `lem-int-embeds-rat`. **This is the designed transient** — §9 removes the obsolete `audited` stamp on a material repair and A6's independent reader writes `verification.verified` (`scope: published-audit`, `delegated_by: owner`). The other 14 are sibling batches in the same state. The 38 `multi-home` warnings on the shared Z/Q prelude are pre-existing structure (both construction pages list those items), not caused by this repair. |
| `content-policy.mjs --audit --ledger …` scoped to this page | 40 scoped items, **15 errors, all on the 3 HELD items only** (5 each: `provenance-statement-missing`, `provenance-proof-missing`, `audit-ledger-mismatch`, `audit-ledger-evidence-mismatch`, `audit-ledger-alpha-concurrence`). All 37 retagged items pass, including the source-backed-URL requirement. Running it against the full `wave0-real-analysis.pages.json` additionally reports 22 `batch-duplicate-item` errors, because that manifest holds both construction pages and the Z/Q prelude is listed on both — a manifest-scoping artefact for the orchestrator, not a content defect. |

## A6 handoff

1. Concur (or decline) on the three `established-knowledge` rows; on concurrence set
   `alpha_concurred: true` in the ledger and write their provenance blocks.
2. Independently certify D-1 and D-3 (I authored them; I do not certify them) and write
   `verification.verified` with `scope: published-audit`, `delegated_by: owner` on
   `thm-rat-ordered-field` and `lem-int-embeds-rat`, clearing the two `depcheck` errors.
3. `impact-audit` dispositions for consumers of the two changed public interfaces.
4. Decide D-6.
5. Both judge lanes rejudge `thm-rat-ordered-field` and `lem-int-embeds-rat` at A7 on the
   final text (their old `openai/gpt-5.4` verdicts are deleted, not stale-kept).
