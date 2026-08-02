# Wave 0 · foundations batch — Audit-Beta findings (A1 + A2)

Pair: `construction-of-the-natural-numbers` (A page, 39 in-scope items, no
`-examples` companion). Auditor: Audit-Beta, Opus 5, high effort, 2026-08-02.
Files owned by this agent: `research/audit/wave0-foundations.provenance.jsonl`,
this file, `research/audit/wave0-foundations.proof-contracts.json`.
No file under `items/` or `library/` was modified.

## 0. Coverage

Every one of the 39 manifest items was read from disk in full. Every numbered
proof step in the 33 proof-bearing items (143 steps) was verified against the
facts it cites, and every one of the 69 `[L#] -> [[target]]` dependency
citations was checked semantically against the target item's own on-disk
Statement or Definition. The A-page prose (`library/foundations/
construction-of-the-natural-numbers.md`) and every `## Remarks` block were read
with proof-step suspicion. No exceptions.

None of the 39 items carried a `provenance` block or a legacy `authorship`
line, so decision D5 (delete `authorship` in the same edit) does not apply to
this batch.

All dependency targets of every in-scope citation are items on this same page:
the pair has no cross-page, cross-batch or cross-category dependency edge for
Alpha to pick up at A6 beyond the page's own `library` prerequisite links.

## 1. A1 — provenance census

39 rows written to `wave0-foundations.provenance.jsonl`. Every URL recorded was
verified HTTP 200 on 2026-08-02.

| `provenance.statement` | count |
|---|---|
| `literature-derived` | 25 |
| `ai-altered` | 14 |
| `ai-generated` | 0 |

| `provenance.proof` | count |
|---|---|
| `ai-altered` | 32 |
| `not-applicable` (definitions) | 6 |
| `ai-generated` | 1 (`lem-nat-transitive-irreflexive`) |

| evidence class | count |
|---|---|
| `exact-source` | 25 |
| `semantic-source` | 14 |
| `established-knowledge` | 0 |
| `trivial` | 0 |
| `none` | 0 |

**No item is classified `ai-generated` at the statement axis and no row needs an
Alpha escalation under the 2026-08-02 rule change.** A located, HTTP-200 source
carrying the statement (exactly or semantically) was found for all 39, including
the two counterexamples and the false statement, whose witnesses turned out to
be recoverable restatements of published independence models rather than
bespoke constructions. The one `ai-generated` label is a *proof* label
(`lem-nat-transitive-irreflexive` runs transitivity and irreflexivity as a
single simultaneous induction, which no located source does); it does not touch
dependency eligibility.

Sources used (all verified 200):

- Aitken, *MATH 378 Ch. 1: The Peano Axioms*, CSU San Marcos —
  <https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf>. The
  closest match to this page: same 0-based Peano axioms, same additively
  defined order, same recursion proof. Carries exact statements for 18 items.
- Kaya, *MATH 320 Set Theory*, METU —
  <https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf>. The
  ZFC/von Neumann half: inductive sets, the construction of omega, the
  induction principle, the recursion theorem, the arithmetic recursions.
- Res, *Mathematics 144 Set Theory*, UC Riverside —
  <https://math.ucr.edu/~res/math153-2019/set-theory-notes.pdf>.
- Wikipedia: Peano axioms, Set-theoretic definition of natural numbers, Axiom
  of infinity, Mathematical induction, Well-ordering principle.
- Encyclopedia of Mathematics, *Peano axioms* —
  <https://encyclopediaofmath.org/wiki/Peano_axioms> (independence models).
- Sutner, *Dedekind-Peano Axioms*, CMU —
  <https://www.cs.cmu.edu/~sutner/pdf/30-Peano.pdf> (nonstandard-model shape).

Convention deltas worth carrying forward (all recorded in the ledger rows):

- **Multiplication recursion.** The page uses `m·σ(n) = m·n + m` (Kaya, Goldrei
  via UCR, Aitken). Wikipedia writes the same clause as `a·S(b) = a + (a·b)`,
  the summands in the other order. The page's form is the more widely adopted
  one in the set-theoretic literature; no change proposed.
- **Which of `<`, `≤` is primitive.** The page defines `≤` by
  `∃k (m + k = n)` (verbatim Wikipedia) and derives `<` as `≤ and ≠`. Aitken
  takes `<` primitive (`∃b ≠ 0`) and derives `≤`. Equivalent; see defect D4.
- **Recursion theorem generality.** The page states it for an arbitrary Peano
  system; Kaya states it for omega only. Aitken's Theorem 54 is proved from the
  axioms alone, so the page's generality is sourced.

## 2. A2 — defects found

**No fatal defect was found.** Every Statement, Definition, construction and
refutation on the page is true as written, every title matches what its proof
delivers, and every proof closes. All findings below are nonfatal under the
30-second rule; they are recorded and proposed because they are
citation-precision defects, the dominant historical class, and because six of
them block a clean `proof-contract.mjs --strict` receipt.

### Class (b) citation-precision — declared fact never tagged in a step

`proof-contract.mjs --strict` reports exactly 11 errors on the contract file,
and they are exactly this defect. The house pattern elsewhere on the page is to
write the tag inline on the discharging step ("By induction [L1], …"); these
items omit it.

| # | item | fact | location | proposed repair |
|---|---|---|---|---|
| D1a | `lem-nat-transitive-irreflexive` | `[L1]` → `thm-induction-principle` | step 3.1 says "by induction" untagged | insert `[L1]` inline in step 3.1 |
| D1b | `lem-nat-successor-neq-self` | `[L2]` → `thm-induction-principle` | step 3.1 "By induction," untagged | insert `[L2]` inline in step 3.1 |
| D1c | `lem-nat-nonzero-is-successor` | `[L1]` → `thm-induction-principle` | step 3.1 "By induction, $S = \mathbb{N}$" untagged | insert `[L1]` inline in step 3.1 |
| D1d | `cex-induction-axiom-necessary` | `[L1]` → `def-peano-system` | steps 1.1, 1.2, 1.3 verify P1, P2, P3 with `[given]` only | add `L1` to the tags of 1.1, 1.2, 1.3 |
| D1e | `cex-successor-injective-necessary` | `[L1]` → `def-peano-system` | steps 1.1, 1.2, 1.3 same | add `L1` to the tags of 1.1, 1.2, 1.3 |

Two further declared facts are not merely untagged but genuinely unused by the
argument:

| # | item | fact | finding | proposed repair |
|---|---|---|---|---|
| D2a | `cex-induction-axiom-necessary` | `[L2]` "ℕ itself is the standard model" → `def-natural-numbers` | no step uses it; the ℕ-copy of the witness is introduced in **Given** | tag `L2` at step 1.3 (where `S = N_ℕ` is taken), keeping the `deps` edge honest |
| D2b | `fs-induction-without-base` | `[L3]` "every nonzero natural is a successor" → `lem-nat-nonzero-is-successor` | genuinely unused: the refutation needs only `σ(n) ≠ 0` (`[L2]`) | delete `[L3]` and drop `lem-nat-nonzero-is-successor` from `deps`. **This is a dependency-metadata change and therefore needs an `impact-audit` pass at A4/A6.** If the orchestrator prefers no metadata churn, leaving it costs only the contract error. |

Related, non-blocking: `ex-two-plus-two` declares `ex-one-plus-one` in `deps`
but never uses it — the proof unfolds `2 + 2` from the recursion directly and
neither its Facts nor any step mentions `1 + 1 = 2`. Same class as D2b, same
`impact-audit` caveat. Low priority.

### Class (b) citation-precision — fact states more than its target does

| # | item | finding | evidence | proposed repair |
|---|---|---|---|---|
| D3a | `thm-nat-linear-order` | `[L3]` reads "Every nonzero natural is a successor **and $\sigma(j) \ne 0$** ([[lem-nat-nonzero-is-successor]])". The target states only "For every $n \in \mathbb{N}$ with $n \neq 0$, there exists $m \in \mathbb{N}$ with $n = \sigma(m)$". `σ(j) ≠ 0` is Peano P1, i.e. `thm-omega-is-peano-system`, which is **not** in this item's `deps`. Step 1.3 uses the second conjunct. | target item on disk | split `[L3]` into two facts, cite `thm-omega-is-peano-system` for P1, and add it to `deps` |
| D3b | `thm-well-ordering-principle` | `[L2]` reads "$m < \sigma(n) \iff m \le n$, and $\sigma(n)$ is the immediate successor of $n$ ([[lem-nat-discrete]])". The target states `m < n ⟺ σ(m) ≤ n` plus the no-element-between clause; it does **not** state `m < σ(n) ⟺ m ≤ n`. The claimed equivalence is true, but deriving it from `lem-nat-discrete` needs injectivity of `σ` (P1/P2) or additive cancellation, neither in this item's `deps`. Used twice in step 2.2. | target item on disk | restate `[L2]` as what `lem-nat-discrete` says and add the one-line bridge (`m < σ(n) ⇒ σ(m) ≤ σ(n) ⇒ m ≤ n` by injectivity) as a step, citing `thm-omega-is-peano-system`; or cite `lem-nat-add-cancellative`. Either way a `deps` addition. |
| D3c | `thm-peano-categoricity` | `[L2]` attributes "Induction holds in each system (axiom P3)" jointly to `def-peano-system` **and** `thm-induction-principle`. The latter is about ℕ specifically and licenses nothing about the second system `(N', 0', σ')`. `def-peano-system` P3 alone is the correct and sufficient citation. | target items on disk | drop the `thm-induction-principle` link from `[L2]` (keeping the `deps` entry is harmless) |

### Class (b) citation-precision — used but undeclared dependency

All of these are results proved earlier on the same page, so each is a
sub-30-second gap for a reader, but each is a citation the item does not make.

| # | item | undeclared dependency | where used |
|---|---|---|---|
| D4a | `lem-nat-discrete` | `lem-nat-add-cancellative` | the **Given** restates `def-nat-order`'s strict order as "$m + j = n$ with $j \ne 0$"; the `⇐` half of that equivalence (and step 1.2's conclusion `m < n`) needs cancellation to rule out `m = n` |
| D4b | `lem-nat-order-mult-compatible` | `lem-nat-add-cancellative` | step 2.1 concludes `m·k < n·k` from `m·k + d·k = n·k` with `d·k ≠ 0`; strictness again needs cancellation |
| D4c | `lem-nat-mult-cancellative` | — | the **Given** restates the strict order the same way as D4a but the proof only uses `<` through `[L1]`/`[L2]`, so nothing is actually unlicensed; restate the Given for accuracy only |
| D4d | `thm-well-ordering-principle` | `lem-nat-add-identity` | step 2.1 uses "$0 + s = s$" to get `0 ≤ s`, and uses it again (with trichotomy) to get "$m \le 0$ forces $m = 0$" |
| D4e | `thm-strong-induction` | `lem-nat-trichotomy` or `thm-nat-linear-order` | step 2.1 turns "ℓ is least" into "every `m < ℓ` is outside `S`", which needs antisymmetry/trichotomy |
| D4f | `cor-nat-addition-well-defined`, `cor-nat-multiplication-well-defined` | `thm-omega-is-peano-system` | both apply the recursion theorem, stated for a Peano system, to ℕ; that ℕ *is* a Peano system is `thm-omega-is-peano-system` and is cited by neither. (`thm-recursion`'s own Statement says "in particular the natural numbers ℕ ([[def-natural-numbers]])" and carries the same gap.) |

Proposed repair for D4a/b/d/e/f: add the named item to `deps` and state it as a
new `[L#]` fact, tagged on the step that uses it. These are `deps` additions, so
they also need the A4/A6 `impact-audit` pass.

### Class (d) debatable restatement — prose claims stronger than what is proved

| # | location | finding | proposed repair |
|---|---|---|---|
| D5a | `thm-induction-principle`, Statement | "Equivalently (property form): …". Step 5.1 derives the property form **from** the set form; the converse (`P(n) :≡ n ∈ S`) is immediate but is not written. The word "equivalently" claims both directions. | either write the one-clause converse into step 5.1 or replace "Equivalently" with "In particular"; the first is preferable |
| D5b | `def-nat-order`, Remarks | "the gap $k$ with $m + k = n$ is unique when it exists (by cancellation, [[lem-nat-add-cancellative]])". `lem-nat-add-cancellative` cancels a common **right** summand (`m + k = n + k ⇒ m = n`); uniqueness of the gap cancels a common **left** summand, which additionally needs `lem-nat-add-commutative`. | add the commutativity citation to the Remark |
| D5c | `def-nat-order`, Remarks | "In the von Neumann model this order coincides with membership and inclusion: $m \le n \iff m \subseteq n$ and $m < n \iff m \in n$." True and standard (it is Kaya's definition of the order on omega), but it is asserted as fact and is **nowhere proved on this page**, while the page's whole method is to prove such facts. | mark it as stated-without-proof ("one checks that …", or "this is proved in any set-theory text, e.g. …" with the Kaya URL), or queue a lemma for a later wave. Owner queue if a new lemma is wanted. |
| D5d | page prose, "Why the axioms are sharp" | "The optional items show the Peano axioms are independent." Only two independence models are given: P3 is not implied by P1+P2 (`cex-induction-axiom-necessary`) and P2 is not implied by P1+P3 (`cex-successor-injective-necessary`). No witness for the independence of P1 is on the page. | narrow to "…show that the induction axiom and the injectivity of the successor cannot be dropped" |
| D5e | page prose, "Order and its consequences" | "ordinary induction, strong induction, and well-ordering are three faces of one property". The page proves induction ⇒ well-ordering ⇒ strong induction only; neither converse is established here. | narrow to "…and each of the three can be recovered from the others" is *also* unproved here; safest is "…so induction, well-ordering and strong induction are available interchangeably in what follows" or an explicit "in fact these three principles are equivalent, though only these two implications are proved here" |

Both D5d and D5e are page-prose claims, not item Statements; they are recorded
per triage, and the proposed edits are minimal.

### Recorded, no repair proposed

- `lem-nat-successor-neq-self` is redundant given `lem-nat-transitive-irreflexive`
  (`n ∈ σ(n)` and `n ∉ n`). It is proved independently from P1/P2, which is the
  more portable route. Not a defect.
- `lem-nat-trichotomy` step 1.3 (`n < σ(n)`) is never used: step 2.1 re-derives
  it inline and step 3.1 does not cite 1.3. Harmless duplication.
- `lem-nat-trichotomy` step 1.4 tags `[L4]` (`lem-nat-nonzero-is-successor`)
  but the base case only needs `[L1]`. Harmless over-citation.
- Throughout the order lemmas the page uses the inference
  "`m + k = n` with `k ≠ 0` ⟹ `m < n`" as if it were the definition of `<`.
  Under `def-nat-order` (`m ≤ n` and `m ≠ n`) it needs commutativity plus
  cancellation. `lem-nat-trichotomy` has both in its Facts (`[L6]`, `[L7]`);
  `lem-nat-discrete` and `lem-nat-order-mult-compatible` do not — that is
  exactly D4a and D4b. Recorded once here because it is one systematic habit,
  not five unrelated slips.
- `cex-induction-axiom-necessary` builds its witness from `ℤ`, which this
  library has not constructed at this level. The self-contained-scope rule is
  forward-looking and explicitly does not retrofit published items, so this is
  recorded, not raised. The construction is a counterexample witness, not a
  `deps` edge, and the standard alternative (adjoin a second, order-isomorphic
  copy of ω with an added predecessor chain) would be a rewrite, not a repair.
- No published-claim decay was observed: nothing on this page is falsified by
  later levels, and nothing on it counts, ranks, or makes survey claims about
  other pages beyond the two prose imprecisions D5d/D5e.

## 3. A2 — proof-contract capture

`research/audit/wave0-foundations.proof-contracts.json`, version 1, level
`audit-wave0-foundations`. Scope: the 33 proof-bearing items (all 39 minus the
6 definitions `def-peano-system`, `def-inductive-set`, `def-natural-numbers`,
`def-nat-addition`, `def-nat-multiplication`, `def-nat-order`). 69 citation
entries with exact quotes verified to occur in the cited item's own
Statement/Definition section, 143 step entries covering every numbered step
exactly once, and the full eight-case boundary worksheet for each item.

Self-check:

```
node tools/proof-contract.mjs research/audit/wave0-foundations.proof-contracts.json --strict
-> 11 error(s), 0 warning(s), 33/33 item(s) checked
```

All 11 errors are `citation-uses` / `citation-use-not-supported` and correspond
one-for-one to D1a–D1e, D2a and D2b above: the contract records the step that
mathematically uses each fact, and the tool correctly observes that the step
text does not carry the tag. **After the D1/D2 tag repairs are applied at A4 the
file passes `--strict` with no edit to the contract itself**, except for D2b if
the orchestrator chooses deletion over tagging, in which case the `L3` citation
entry is removed. No other error class appears: no quote mismatch, no
undeclared dependency in a contracted citation, no unmapped step, no missing
boundary case.

`risk_review` is left `pending` on every entry; the reviewer field names Alpha,
per the wave-0 routing.

## 4. Summary for A3

- 39 provenance rows, 25 `exact-source`, 14 `semantic-source`, zero
  `ai-generated` statements, zero Alpha escalations, zero URL waivers needed.
- 0 fatal defects.
- 13 proposed repairs: 7 citation-tag/unused-fact (D1a–e, D2a–b), 3 fact
  over-statement (D3a–c), 6 undeclared-dependency (D4a–f, of which D4c is
  cosmetic), 5 prose/statement narrowings (D5a–e). Of these, D2b, D4a, D4b,
  D4d, D4e, D4f and D3a/D3b touch `deps` and so require the `impact-audit` pass.
- 1 owner-queue candidate: D5c, only if the orchestrator wants a new lemma
  proving `m ≤ n ⟺ m ⊆ n` and `m < n ⟺ m ∈ n` in the von Neumann model rather
  than marking the Remark as stated-without-proof. Nothing else on this page
  needs a deletion, an id change, or a reading-order change.

## 5. Checkpoint

Substage: A1 and A2 complete for the whole batch; nothing applied to `items/`.
Owned artefacts, all written: `wave0-foundations.provenance.jsonl` (39 rows),
`wave0-foundations.proof-contracts.json` (33 items, self-checked),
`wave0-foundations.findings.md` (this file). Completed checks: full read of all
39 items, all 143 proof steps, all 69 dependency citations, the page prose and
all Remarks; literature search with 10 HTTP-200-verified sources. Open
mathematical constraints: none blocking; the systematic
`m + k = n, k ≠ 0 ⟹ m < n` habit (D4a/D4b) and the two fact-overstatements
(D3a/D3b) are the substantive items for A3. Exact next action: hand this report
to the orchestrator for A3 adjudication; apply nothing until A3 approves.

---

# A4 — repairs applied (2026-08-02)

Authorised by `research/audit/wave0-foundations.A3.md`. No `touchlog` run by
this agent (the orchestrator holds the pre-A4 snapshot). No id renamed or
removed; no reading order changed. **D5c was not touched** — deferred to Alpha.

## 6.1 Provenance retags (39 items, pure retag)

Each of the 39 items received the `provenance:` block from its ledger row,
inserted directly after `origin:`, and every ledger URL not already present was
appended to `sources.references` with a descriptive title (**57 new reference
entries** across the batch). No item carried a legacy `authorship` line, so D5
was a no-op. Retag-only items keep their `verification.judge` and
`verification.audited` stamps, per SCHEMA's material-rewrite test.

Gate: `content-policy.mjs --audit --ledger …` → **39 scoped items, 0 errors,
0 warnings**.

## 6.2 Mathematical and citation repairs (49 text edits)

| tag | file | class | old | new |
|---|---|---|---|---|
| `D1a` | `items/lem-nat-transitive-irreflexive.md` | (b) citation-precision — missing step tag | `3.1 Hence $P(\sigma(n))$ holds; by induction $P(n)$ for all` | `3.1 Hence $P(\sigma(n))$ holds; by induction [L1], $P(n)$ for all` |
| `D1b` | `items/lem-nat-successor-neq-self.md` | (b) citation-precision — missing step tag | `3.1 By induction, $n \neq \sigma(n)$` | `3.1 By induction [L2], $n \neq \sigma(n)$` |
| `D1c` | `items/lem-nat-nonzero-is-successor.md` | (b) citation-precision — missing step tag | `3.1 By induction, $S = \mathbb{N}$,` | `3.1 By induction [L1], $S = \mathbb{N}$,` |
| `D1d/1.1` | `items/cex-induction-axiom-necessary.md` | (b) citation-precision — missing step tag | `so $\sigma(x) \neq 0$ for all $x$. [given]` | `so $\sigma(x) \neq 0$ for all $x$. [given, L1]` |
| `D1d/1.2` | `items/cex-induction-axiom-necessary.md` | (b) citation-precision — missing step tag | `so $\sigma$ is injective on $N$. [given]` | `so $\sigma$ is injective on $N$. [given, L1]` |
| `D1d+D2a/1.3` | `items/cex-induction-axiom-necessary.md` | (b) citation-precision — missing step tag | `so $S$ contains $0$ and is closed under $\sigma$. [given]` | `so $S$ contains $0$ and is closed under $\sigma$; the $\mathbb{N}$-copy is the standard model [L2]. [given, L1, L2]` |
| `D1e/1.1` | `items/cex-successor-injective-necessary.md` | (b) citation-precision — missing step tag | `none of which is $0$, so $\sigma(x) \neq 0$ for all $x$. [given]` | `none of which is $0$, so $\sigma(x) \neq 0$ for all $x$. [given, L1]` |
| `D1e/1.2` | `items/cex-successor-injective-necessary.md` | (b) citation-precision — missing step tag | `thus induction holds. [given]` | `thus induction holds. [given, L1]` |
| `D1e/1.3` | `items/cex-successor-injective-necessary.md` | (b) citation-precision — missing step tag | `so $\sigma$ is not injective. [given]` | `so $\sigma$ is not injective. [given, L1]` |
| `D2b/fact` | `items/fs-induction-without-base.md` | (b) citation-precision — unused fact/edge removed | `⏎ [L3] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]). ⏎` | `⏎` |
| `D2b/deps` | `items/fs-induction-without-base.md` | (b) citation-precision — unused fact/edge removed | `deps: [def-natural-numbers, thm-induction-principle, thm-omega-is-peano-system, lem-nat-nonzero-is-successor]` | `deps: [def-natural-numbers, thm-induction-principle, thm-omega-is-peano-system]` |
| `D2b/ex-deps` | `items/ex-two-plus-two.md` | (b) citation-precision — unused fact/edge removed | `deps: [def-nat-addition, def-natural-numbers, ex-one-plus-one]` | `deps: [def-nat-addition, def-natural-numbers]` |
| `D3a/L3` | `items/thm-nat-linear-order.md` | (b) citation-precision — fact overstated its target | `[L3] Every nonzero natural is a successor and $\sigma(j) \ne 0$ ([[lem-nat-nonzero-is-successor]]).` | `[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).` |
| `D3a/L6` | `items/thm-nat-linear-order.md` | (b) citation-precision — fact overstated its target | `[L5] Addition is commutative ([[lem-nat-add-commutative]]).` | `[L5] Addition is commutative ([[lem-nat-add-commutative]]). ⏎  ⏎ [L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).` |
| `D3a/step` | `items/thm-nat-linear-order.md` | (b) citation-precision — fact overstated its target | `$k + j = k + \sigma(i) = \sigma(k + i) \ne 0$, a contradiction, so $k = j = 0$. [L1, L3]` | `$k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]` |
| `D3a/deps` | `items/thm-nat-linear-order.md` | (b) citation-precision — fact overstated its target | `deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy]` | `deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]` |
| `D3b/L2` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `[L2] $m < \sigma(n) \iff m \le n$, and $\sigma(n)$ is the immediate successor of $n$ ([[lem-nat-discrete]]).` | `[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).` |
| `D3b/L3-L6` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `[L3] For any $s, n$ either $s \le n$ or $n < s$, and $n < s \iff \sigma(n) \le s$ (comparability and discreteness) ([[lem-nat-trichotomy]], [[lem-nat-discrete]]).` | `[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]). ⏎  ⏎ [L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]). ⏎  ⏎ [L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law…` |
| `D4d/2.1` | `items/thm-well-ordering-principle.md` | (b) citation-precision — undeclared dependency | `2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$ (since $0 + s = s$), making $0$ a least element, contrary to the assumption; hence $0 \notin S$, and $m \le 0$ forces $m = 0$, so every $m \le 0$ lies outside $S$. [step 1.1, given]` | `2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ giv…` |
| `D3b/bridge` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `⏎ 2.2 Next, $T$ is closed` | `⏎ 1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5] ⏎  ⏎ 2.2 Next, $T$ is closed` |
| `D3b/2.2a` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `(else $s \le n$ by [L2], so $s \notin S$` | `(else $s \le n$ by step 1.2, so $s \notin S$` |
| `D3b/2.2b` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by [L2] and $m \notin S$` | `gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$` |
| `D3b/2.2c` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `giving $\sigma(n) \in T$. [step 1.1, L2, L3]` | `giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]` |
| `D3b/deps` | `items/thm-well-ordering-principle.md` | (b) citation-precision — fact overstated its target | `deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy]` | `deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]` |
| `D3c` | `items/thm-peano-categoricity.md` | (b) citation-precision — fact overstated its target | `is the whole system ([[def-peano-system]], [[thm-induction-principle]]).` | `is the whole system ([[def-peano-system]]).` |
| `D4a/given` | `items/lem-nat-discrete.md` | (b) citation-precision — undeclared dependency | `**Given:** The order, where $m < n$ means $m + j = n$ with $j \ne 0$ ([[def-nat-order]]), and addition` | `**Given:** The order $m \le n \iff \exists j\ (m + j = n)$, with $m < n$ meaning $m \le n$ and $m \ne n$ ([[def-nat-order]]), and addition` |
| `D4a/facts` | `items/lem-nat-discrete.md` | (b) citation-precision — undeclared dependency | `[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion).` | `[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion). ⏎  ⏎ [L3] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]). ⏎  ⏎ [L4] $\sigma(x) \ne 0$ for every $x$ (Peano ax…` |
| `D4a/1.1` | `items/lem-nat-discrete.md` | (b) citation-precision — undeclared dependency | `1.1 Forward: if $m < n$ then $m + j = n$ with $j \ne 0$, so $j = \sigma(i)$ and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$, hence $\sigma(m) \le n$. [given, L1, L2]` | `1.1 Forward: if $m < n$ then $m \le n$ and $m \ne n$, so $m + j = n$ for some $j$, with $j \ne 0$ since $j = 0$ would give $m = n$; then $j = \sigma(i)$ [L1] and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$ [L2], hence $\sigma(m) \le n$. [given, L1, L2]` |
| `D4a/1.2` | `items/lem-nat-discrete.md` | (b) citation-precision — undeclared dependency | `1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ with $\sigma(i) \ne 0$, giving $m < n$. [given, L2]` | `1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ [L2], hence $m \le n$; and $m \ne n$, since $m = n$ would give $m + \sigma(i) = m = m + 0$, so $\sigma(i) + m = 0 + m$ by [L5] and $\sigma(i) = 0$ by [L3], contradicting [L4]; there…` |
| `D4a/deps` | `items/lem-nat-discrete.md` | (b) citation-precision — undeclared dependency | `deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left]` | `deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left, lem-nat-add-cancellative, lem-nat-add-commutative, thm-omega-is-peano-system]` |
| `D4b/facts` | `items/lem-nat-order-mult-compatible.md` | (b) citation-precision — undeclared dependency | `[L2] No zero divisors: $d \ne 0$ and $k \ne 0 \Rightarrow d \cdot k \ne 0$ ([[lem-nat-no-zero-divisors]]).` | `[L2] No zero divisors: $d \ne 0$ and $k \ne 0 \Rightarrow d \cdot k \ne 0$ ([[lem-nat-no-zero-divisors]]). ⏎  ⏎ [L3] Cancellation for addition: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]). ⏎  ⏎ [L4] Addition is commutative: $x + y = y + x$ ([[lem-nat-add-commutative]]).` |
| `D4b/2.1` | `items/lem-nat-order-mult-compatible.md` | (b) citation-precision — undeclared dependency | `so $m \cdot k + d \cdot k = n \cdot k$ with $d \cdot k \ne 0$ gives $m \cdot k < n \cdot k$. [step 1.1, given, L2] ∎` | `so $m \cdot k + d \cdot k = n \cdot k$ with $d \cdot k \ne 0$; and $m \cdot k \ne n \cdot k$, since equality would give $m \cdot k + d \cdot k = m \cdot k + 0$, hence $d \cdot k + m \cdot k = 0 + m \cdot k$ by [L4] and $d \cdot k = 0$ by [L3], a contradiction; therefore $m \cdot k < n \cdot k$. […` |
| `D4b/deps` | `items/lem-nat-order-mult-compatible.md` | (b) citation-precision — undeclared dependency | `deps: [def-nat-order, def-nat-addition, def-nat-multiplication, lem-nat-mult-distributive, lem-nat-mult-commutative, lem-nat-no-zero-divisors]` | `deps: [def-nat-order, def-nat-addition, def-nat-multiplication, lem-nat-mult-distributive, lem-nat-mult-commutative, lem-nat-no-zero-divisors, lem-nat-add-cancellative, lem-nat-add-commutative]` |
| `D4c` | `items/lem-nat-mult-cancellative.md` | (b) citation-precision — undeclared dependency | `$m\cdot\sigma(j)=m\cdot j+m$; the strict order $m<n\iff\exists j\ne 0\ (m+j=n)$.` | `$m\cdot\sigma(j)=m\cdot j+m$; the order $m\le n\iff\exists j\ (m+j=n)$, with $m<n$ meaning $m\le n$ and $m\ne n$.` |
| `D4e/fact` | `items/thm-strong-induction.md` | (b) citation-precision — undeclared dependency | `[L1] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).` | `[L1] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]). ⏎  ⏎ [L2] Exactly one of $x < y$, $x = y$, $y < x$ holds ([[lem-nat-trichotomy]]).` |
| `D4e/2.1` | `items/thm-strong-induction.md` | (b) citation-precision — undeclared dependency | `2.1 By well-ordering [L1], $S$ has a least element $\ell$; minimality means every $m < \ell$ has $m \notin S$, i.e. $P(m)$ holds for all $m < \ell$. [step 1.1, L1]` | `2.1 By well-ordering [L1], $S$ has a least element $\ell$, so $\ell \le s$ for every $s \in S$; hence every $m < \ell$ lies outside $S$, since $m \in S$ would give $\ell \le m$, which [L2] does not allow alongside $m < \ell$; that is, $P(m)$ holds for all $m < \ell$. [step 1.1, L1, L2]` |
| `D4e/deps` | `items/thm-strong-induction.md` | (b) citation-precision — undeclared dependency | `deps: [def-natural-numbers, def-nat-order, thm-well-ordering-principle]` | `deps: [def-natural-numbers, def-nat-order, thm-well-ordering-principle, lem-nat-trichotomy]` |
| `D4f/add-fact` | `items/cor-nat-addition-well-defined.md` | (b) citation-precision — undeclared dependency | `with $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ ([[thm-recursion]]).` | `with $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ ([[thm-recursion]]). ⏎  ⏎ [L2] $(\mathbb{N}, 0, \sigma)$ is a Peano system ([[thm-omega-is-peano-system]]).` |
| `D4f/add-1.1a` | `items/cor-nat-addition-well-defined.md` | (b) citation-precision — undeclared dependency | `1.1 Fix $m \in \mathbb{N}$ and apply the recursion theorem with` | `1.1 Fix $m \in \mathbb{N}$; since $(\mathbb{N}, 0, \sigma)$ is a Peano system [L2], apply the recursion theorem with` |
| `D4f/add-1.1b` | `items/cor-nat-addition-well-defined.md` | (b) citation-precision — undeclared dependency | `$s_m(\sigma(n)) = \sigma(s_m(n))$. [L1]` | `$s_m(\sigma(n)) = \sigma(s_m(n))$. [L1, L2]` |
| `D4f/add-deps` | `items/cor-nat-addition-well-defined.md` | (b) citation-precision — undeclared dependency | `deps: [thm-recursion, def-natural-numbers]` | `deps: [thm-recursion, def-natural-numbers, thm-omega-is-peano-system]` |
| `D4f/mul-fact` | `items/cor-nat-multiplication-well-defined.md` | (b) citation-precision — undeclared dependency | `is a function $\mathbb{N} \to \mathbb{N}$ ([[def-nat-addition]]).` | `is a function $\mathbb{N} \to \mathbb{N}$ ([[def-nat-addition]]). ⏎  ⏎ [L3] $(\mathbb{N}, 0, \sigma)$ is a Peano system ([[thm-omega-is-peano-system]]).` |
| `D4f/mul-2.1a` | `items/cor-nat-multiplication-well-defined.md` | (b) citation-precision — undeclared dependency | `2.1 Apply the recursion theorem with $A = \mathbb{N}$, $a = 0$, $f = \mathrm{add}_m$:` | `2.1 Since $(\mathbb{N}, 0, \sigma)$ is a Peano system [L3], apply the recursion theorem with $A = \mathbb{N}$, $a = 0$, $f = \mathrm{add}_m$:` |
| `D4f/mul-2.1b` | `items/cor-nat-multiplication-well-defined.md` | (b) citation-precision — undeclared dependency | `= p_m(n) + m$. [L1, step 1.1]` | `= p_m(n) + m$. [L1, L3, step 1.1]` |
| `D4f/mul-deps` | `items/cor-nat-multiplication-well-defined.md` | (b) citation-precision — undeclared dependency | `deps: [thm-recursion, def-natural-numbers, def-nat-addition]` | `deps: [thm-recursion, def-natural-numbers, def-nat-addition, thm-omega-is-peano-system]` |
| `D5a` | `items/thm-induction-principle.md` | (d) debatable restatement | `i.e. $P$ holds for all $n$. [step 4.1] ∎` | `i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎` |
| `D5b` | `items/def-nat-order.md` | (d) debatable restatement | `unique when it exists (by cancellation, [[lem-nat-add-cancellative]]) and is` | `unique when it exists (by commutativity and cancellation, ⏎ [[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is` |
| `D5e` | `library/foundations/construction-of-the-natural-numbers.md` | (d) debatable restatement | `([[thm-strong-induction]]), and ordinary induction, strong induction, ⏎ and well-ordering are three faces of one property.` | `([[thm-strong-induction]]), so ordinary induction, well-ordering and strong ⏎ induction are available interchangeably in what follows.` |
| `D5d` | `library/foundations/construction-of-the-natural-numbers.md` | (d) debatable restatement | `The optional items show the Peano axioms are ⏎ independent. Dropping induction` | `The optional items show that the induction axiom and ⏎ the injectivity of the successor cannot be dropped. Dropping induction` |

## 6.3 Deviations and judgement calls, recorded for A6

1. **D3b needed two co-requisite dependencies, not one.** A3 named
   `thm-omega-is-peano-system`. The σ-injectivity bridge it prescribes also
   needs the left successor law to rewrite `σ(m) + i` as `σ(m + i)`, so
   `lem-nat-add-successor-left` was added to `deps` and stated as `[L5]`.
   A trichotomy-only bridge existed that would have added **no** dependency
   (from `m < σ(n)`, comparability gives `m ≤ n` or `n < m`; the latter gives
   `σ(n) ≤ m`, which the exclusivity clause of `[L3]` rules out against
   `m < σ(n)`). A3 explicitly preferred the P2 route, so the P2 route was
   built; Alpha may prefer the cheaper one.
2. **D4a and D4b each needed `lem-nat-add-commutative` beside the named
   `lem-nat-add-cancellative`.** `lem-nat-add-cancellative` cancels a common
   *right* summand; both repairs cancel on the left, which requires
   commuting first. Both items also needed `thm-omega-is-peano-system` (D4a
   only) for `σ(i) ≠ 0`.
3. **`[L3]` of `thm-well-ordering-principle` was strengthened to what its
   target states.** It read "either `s ≤ n` or `n < s`" (comparability only);
   `lem-nat-trichotomy` states *exactly one* of the three. The D4d repair to
   step 2.1 needs the exclusivity clause, and the owner rule requires a fact to
   reproduce the cited Statement faithfully, so `[L3]` now quotes trichotomy in
   full. Step 2.2's existing use of `[L3]` remains licensed.
4. **The bridge step was placed at 1.2, not appended.** `precheck` REPAIR
   output showed the canonical stratification puts a fact-only step in phase 1;
   the step was moved to sit immediately after 1.1 and the file now stores the
   canonical strictly stratified form.
5. **New finding, not repaired (out of A3 scope, nonfatal).**
   `thm-well-ordering-principle` step 2.1 (unchanged clause) and
   `lem-nat-discrete` step 2.1 both infer a contradiction from `σ(n) ≤ k`
   together with `k < σ(n)`, which is antisymmetry/exclusivity. Both are
   sub-30-second gaps; `lem-nat-discrete` step 2.1 was left untouched under
   "smallest corrections only". Flagged for A6.
6. **`ex-two-plus-two` treated as non-material.** Its only change is dropping
   an unused `deps` entry — no fact or step text changed — so its stamps were
   kept, per the A4 protocol's "fact-text/step changes are MATERIAL" rule. It is
   still a dependency-metadata change and so belongs in the wave
   `impact-audit` closure.

## 6.4 Verification stamps

16 items had fact text or proof steps changed and are therefore **material**.
On each, the stale `verification.judge` block and the obsolete
`verification.audited` stamp were deleted; nothing was written in their place —
the independent A6 reading writes `verification.verified` with
`scope: published-audit`, `delegated_by: owner`.

`thm-induction-principle`, `lem-nat-transitive-irreflexive`,
`cor-nat-addition-well-defined`, `cor-nat-multiplication-well-defined`,
`lem-nat-successor-neq-self`, `lem-nat-nonzero-is-successor`,
`lem-nat-discrete`, `lem-nat-order-mult-compatible`,
`lem-nat-mult-cancellative`, `thm-nat-linear-order`,
`thm-well-ordering-principle`, `thm-strong-induction`,
`thm-peano-categoricity`, `cex-induction-axiom-necessary`,
`cex-successor-injective-necessary`, `fs-induction-without-base`.

Kept their stamps (retag-only, or citation added with no claim changed):
the 6 definitions, `def-nat-order` (D5b adds a citation to a Remark and changes
no claim), `ex-one-plus-one`, `ex-two-plus-two`, and the remaining arithmetic
lemmas. The page file `library/foundations/construction-of-the-natural-numbers.md`
carries no verification stamp.

**Dependency edges added** (all to items earlier on the same page; `depcheck`
reports no cycle and the page's dependency depth is unchanged at 0):
`thm-nat-linear-order` += `thm-omega-is-peano-system`;
`thm-well-ordering-principle` += `thm-omega-is-peano-system`,
`lem-nat-add-successor-left`, `lem-nat-add-identity`;
`lem-nat-discrete` += `lem-nat-add-cancellative`, `lem-nat-add-commutative`,
`thm-omega-is-peano-system`;
`lem-nat-order-mult-compatible` += `lem-nat-add-cancellative`,
`lem-nat-add-commutative`;
`thm-strong-induction` += `lem-nat-trichotomy`;
`cor-nat-addition-well-defined` += `thm-omega-is-peano-system`;
`cor-nat-multiplication-well-defined` += `thm-omega-is-peano-system`.
**Removed:** `fs-induction-without-base` −= `lem-nat-nonzero-is-successor`;
`ex-two-plus-two` −= `ex-one-plus-one`.

## 6.5 Gate results after A4

| gate | result |
|---|---|
| `reflow.mts` (17 changed items) | all `unchanged` — house layout already canonical |
| `precheck.mts` (all 39) | **33 checked, 0 failing — all clean** (6 definitions are `precheck: n/a`) |
| `proof-contract.mjs --strict` | **0 errors, 0 warnings, 33/33 checked** — the contract was regenerated from the final text (79 citations, 144 steps) |
| `content-policy.mjs --audit --ledger` | **39 scoped items, 0 errors, 0 warnings** |
| `depcheck.mjs` | no cycle; page depth unchanged at 0. FAIL only on `published-unaudited` for the 16 material items (expected §9 state until A6) — the same code also fires for sibling wave-0 batches |
| `citecheck.mjs` | one pre-existing heuristic hit, `thm-omega-is-peano-system:54` `[order-axioms]`, triggered by the word "transitivity" describing a **transitive set**, not an order. citecheck's own class (c), "the phrase used but the move not made — leave it". Body untouched by this agent |
| `rendercheck.mjs` | OK, 2844 files |
| `extcheck.mjs` / `fwdcheck.mjs` | OK; no new `‡` or forward reference introduced |

## 6.6 Checkpoint (post-A4)

Substage: A4 complete. All A3-approved repairs applied and gated; D5c
untouched and owned by Alpha. Owned artefacts current on disk: the provenance
ledger (39 rows), the regenerated proof-contract file (0 errors), this findings
file. Exact next action: hand back to the orchestrator for the wave
`touchlog` snapshot and `impact-audit` closure over the 12 added and 2 removed
dependency edges, then A6.
