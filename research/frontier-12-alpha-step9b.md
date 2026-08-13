# Run `frontier-12` — Alpha step 9b: the Terra follow-up rejection, and impact closure

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** (1) the single-lane Terra REJECT on the repaired
`ex-rational-function-field-order`; (2) impact dispositions for the 11 items
affected by the two D10-wired published interfaces.

**Status: both assigned closures COMPLETE. The level is NOT yet closed, and the
reason is not either of them.**

1. **Terra's step-3.1 objection: `confirmed_nonfatal`. No edit made.** The
   equality case Terra asks to be handled separately is already excluded, in four
   independent places on the page, one of them the trichotomy clause of the very
   definition step 3.1 cites. §1–§3.
2. **Impact: all 11 dispositions recorded**, `impact-audit` exit 0. §4.
3. **The independent certifier DECLINED to certify the step-9 repair.** It
   confirms the repair's substance but raises two findings; one is factually
   correct and corrects a word in my own repair record, the other is Terra's
   equality-case objection again, cited from Terra's ledger row by a Terra
   certifier. **I cannot overrule a refusal to certify my own repair, and the
   item therefore cannot be stamped.** §4b.
4. **`level-coverage --verify-current-context` fails, and I did not expect it
   to.** Judge coverage is perfect — **454/454 required pairs**. The single error
   is `spine-receipt-invalid`, and I traced it to the **D10 wiring commit
   `a891a3f7` itself**, not to my step-9 repair. Step 9 shipped with a lapsed
   spine receipt because `level-coverage` was not re-run at step 9 — including in
   my own step-9 gate table. §6.
5. **Three items block the step-10 pause**, and one of them now needs an owner
   decision rather than a mechanical fix. §7.

---

## 1. The objection, and the one fact that reframes it

Terra, on `item_sha256` `f112c01a2df3…` / context `28b42a1d5591…`:

> Step 3.1 claims its leading-coefficient test compares any two rational
> functions, but for equal functions their difference has zero numerator, whose
> leading coefficient is undefined. The claimed exact order rule needs a separate
> zero-difference case.

DeepSeek, the cross-family lane, **PASSED the same text**: "Verified the
polynomial eventual-sign computation, representative independence, and the orders
on t and 1/t."

**The fact the dispatch's framing did not have: step 3.1 is not freshly written
text.** I diffed the repair. Step 3.1 *is* the published step 2.1: my R1 repair
renumbered its label, updated its one internal cross-reference ("the rule of step
1.1" → "the rule of step 2.1") and its bracket
(`[step 1.1, step 1.2, L1, L4]` → `[step 1.2, step 2.1, L1, L4]`). **The clause
Terra objects to — "$p/q < p'/q'$ exactly when the numerator and denominator of
$p'/q' - p/q$, written in any representative, have leading coefficients of
positive product" — is byte-identical to the published text.** So this is not "the R1
repair exposed a hole in its own new text"; it is a pre-existing phrasing in
published content, surfaced because R1 forced the item's second-ever judging.

That does not make it nonfatal — R1 itself was a pre-existing defect, and I
confirmed it fatal. It means the 8b "freshly written text" consideration carries
no weight here, and the question is decided purely on whether the item licenses
the degenerate case from its own declared facts.

## 2. It does — in four places, and the dispatch named the right one

The dispatch asked whether "equality is already excluded upstream … Say exactly
where the exclusion lives." It lives here:

1. **`def-ordered-field` (O1), cited by the item's own `[L1]` and `[L4]`.** Read
   on disk: *"**(O1) Trichotomy.** For each $x \in F$, exactly one of the
   following holds: $x \in P$, or $x = 0$, or $-x \in P$"*, with the Remark *"By
   trichotomy applied to $b-a$, for any $a,b$ exactly one of $a<b$, $a=b$, $a>b$
   holds."* **This is precisely the "separate zero-difference case" Terra asks
   for**, already published, already cited by the step. When the difference is
   $0$ the case is $a = b$; no leading coefficient is consulted, because (O1)
   splits $x = 0$ off from both cone memberships by definition.
2. **$P$'s own definition**, stated twice on the page — in the Example section
   and again in `**Given:**` — is
   $\{f : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large } x\}$.
   The `f ≠ 0` clause is its first conjunct, so $0 \notin P$, and by `[L4]`
   ("$f<g$ means $g-f\in P$") equal elements are simply not related by `<`.
3. **Step 2.1 — the rule step 3.1 invokes — is explicitly scoped**: "For
   **nonzero** $p, q \in \mathbb{R}[t]$ … hence $f \in P$ exactly when
   $\operatorname{lc}(p)\operatorname{lc}(q) > 0$." The rule never claims anything
   about a zero numerator. A reader who applies it to one is applying it outside
   its stated hypothesis.
4. **`[L2]`, as repaired, defines $\operatorname{lc}$ only where it is defined**:
   "For a commutative ring $R$ and a **nonzero** $f \in R[x]$ … $\operatorname{lc}(f)$
   is that coefficient." So "the numerator and denominator … **have** leading
   coefficients of positive product" is an existence-and-sign claim, and it is
   *false*, not meaningless, when the numerator is $0$.

Under (4) the biconditional is materially true even at $f = g$: both sides false.
Under the strictest partial-logic reading it is truth-value-gapped at exactly that
one instance — but in neither reading does the item assert anything false.

**And no path in the item or below it ever reaches $\operatorname{lc}(0)$.** I
checked every downstream use of step 3.1: step 4.1 applies it to $(qt-1)/t$ with
$q>0$ rational, step 4.2 to $t-n$ and to $t^2-t=t(t-1)$. All four numerators are
nonzero polynomials. Step 5.1 is a summary. Outside the item, the sole
load-bearing consumer draws two inequalities, not the rule (§4). The blast radius
of the phrasing gap is empty.

## 3. Falsification pass, and why R1 forbids the edit anyway

I tried to refute my own `confirmed_nonfatal` four ways.

1. **"An overstated claim is fatal, and this one is overstated."** Partly
   granted — the sentence would read better as "for $f \ne g$". But my step-8
   standard is: *nonfatal iff the mathematics is correct and complete in
   substance and the defect is in the local citation or justification, including
   where the named route does not work but a correct one is immediate from the
   item's own facts.* Here the correct route is not merely immediate, it is
   **cited by the step itself** — (O1) is in `def-ordered-field`, which `[L4]`
   names. That is the opposite of 8b, where no route existed from the declared
   facts and the reader had to leave the page.
2. **"Terra says the rule is claimed for *any* two rational functions."** The
   text does not say that. It says "$p/q < p'/q'$ exactly when …" with the
   Given's generic notation. Terra's "any two" is Terra's universal reading of a
   schematic statement; the schema's own hypothesis lives one step up in 2.1.
3. **"Cross-family agreement made R1 fatal; what makes this different?"** Exactly
   that. At step 9 **both** lanes independently found the same defect and named
   it precisely. Here the cross-family lane — the one CLAUDE.md makes
   load-bearing for independence — read the identical text and passed, and Terra
   shares a family with the audit-side adjudicator. This is the single-lane
   pattern, not the agreement pattern.
4. **"Repair it anyway; it costs one clause."** This is the one R1 exists to
   forbid, and the situation is textbook. Any edit is a material rewrite under
   SCHEMA §3: it would void DeepSeek's fresh PASS on this exact text, force a
   third rejudge, and resample a lane that has now produced a different nitpick
   on each of two successive texts. R1's words: *"an unbounded loop converging on
   nothing."* At step 8+ a `confirmed_nonfatal` closes the row with **no content,
   page, frontmatter, contract, impact, or judge mutation.** I made none.

**Adjudication row appended** to `research/frontier-12-judge-adjudications.jsonl`:
`{id: ex-rational-function-field-order, model: gpt-5.6-terra, context_sha256:
28b42a1d5591…, item_sha256: ab3f55bfd0a7…, outcome: confirmed_nonfatal}`. No
`defect_type` — that field is fatal-only. The `item_sha256` is the `itemContentHash`
normalization (verification block excluded) that CLAUDE.md and `step8-guard`
require, verified to be the same family as my step-9 rows and to match current
disk; `level-coverage` matches the row to the rejection by
`(id, model, context_sha256)`, which is exact.

`research/frontier-12-published-dependency-repairs.md` is **unmodified**, because
nothing was repaired. This report is the durable record of the follow-up.

## 4. Impact — 11 items, all dispositioned

`research/frontier-12-step9b-impact.json`, validated by
`impact-audit --from after-step8 --receipt …`, **exit 0**: 2 changed interfaces,
11 affected items, no errors, no warnings.

**A deviation from the dispatch, deliberate and flagged.** The dispatch said to
record these in `research/frontier-12-impact-audit.json`. That path already holds
the **step-8/8b** receipt (baseline `pre-step8` → `after-alpha-step8b`, the two
Green's-theorem interfaces, five dispositions), and it is cited by name as
evidence in `research/frontier-12-audit-coverage.json`'s batch-4
`plan_reconciliation` entry, in `research/frontier-12-alpha-step8b.md` §5, and in
three Beta reconcile logs. I overwrote it before noticing, then restored it from
`HEAD` and re-validated it against its own baseline (`--from pre-step8 --to
after-alpha-step8b`, exit 0) — it is byte-identical to the committed version and
every reference to it still resolves. Step 9b's receipt therefore goes to its own
step-named file, following the convention `research/frontier-12-step9-impact.json`
already set at step 9. Two receipts with different baselines cannot share one
path.

**What each interface actually changed** — established from the diffs, not
assumed:

- **`cex-ordered-field-not-archimedean`: citation-only, confirmed.** The whole
  body diff at `a891a3f7` is one parenthetical, `(constructed at
  [[cor-rational-function-field-as-a-fraction-field]])`, in the `**Given:**` line,
  plus `forward_refs` in frontmatter and a re-issued stamp. The `## Statement
  refuted` section, the cone $P$, `[L1]`–`[L4]` and every step 1.1–4.1 are
  byte-identical. **So the dispatch's expectation holds: its 10 direct-citation
  consumers cite a Statement that did not move.**
- **`ex-rational-function-field-order`: substantive, and strictly strengthening.**
  Every conclusion it previously asserted it still asserts verbatim; the
  eventual-sign claim moved from an unlicensed Fact to a proved step.

**Nine of the eleven are `not-load-bearing`**, and I verified this rather than
inferring it: for each I parsed the frontmatter and confirmed the changed item is
**not in `deps`**, and located the single citation — every one is a Remarks bullet
using the counterexample as the standard illustration that an ordered field need
not be Archimedean. Two of them disclaim load-bearing use in their own prose
(`ex-inf-of-reciprocals`: "it says nothing about $H$ or its greatest lower bound";
`def-formal-laurent-series`: "This page neither constructs that identification nor
uses it"), and `fs-nested-intervals-implies-lub` cites it precisely to say
$\mathbb{R}(t)$ will **not** serve as its witness.

**Two are `still-licensed`:**

- **`ex-rational-function-field-order`** appears in its own impact set as a
  consumer of the counterexample. Its `[L1]` draws the counterexample's steps
  2.1, 2.2 and 3.1, all byte-identical, plus the definition of $P$, which is
  character-for-character the same set in both files.
- **`cex-q-not-dense-in-an-ordered-field` is the only genuinely load-bearing
  consumer of either item** — the only one with a `deps` edge. On the dispatch's
  sharp question, *did a consumer lean on the old, unlicensed `[L2]`*: **it did,
  transitively, and it is fine.** Its own `[L2]` draws exactly two conclusions —
  "$0 < 1/t$" and "$1/t < q\cdot1$ for every rational $q>0$" — used at its steps
  1.1, 1.2 and 2.1. Those are the repaired item's steps 3.2 and 4.1 (were 2.2 and
  3.1), and **neither changed a character**. Both previously rested on a chain
  running through the unlicensed eventual-sign Fact; that chain is now proved from
  an explicit leading-term bound. The consumer's support is strictly stronger
  after the repair than before it, and nothing it draws was weakened, narrowed, or
  renumbered out of existence. Its `[L1]` cites the counterexample's unchanged
  conclusion. No finding.

## 4b. The independent certifier declined to certify — and I cannot overrule it

The Terra certifier running in parallel finished at 05:01Z
(`research/audit/frontier-12-dispatch/certifier-repair.result.json`). **Verdict:
"do not certify; no verification stamp."** It confirms the substance of my
step-9 repair — "Alpha's original diagnosis was otherwise correct. The new
eventual-sign derivation is mathematically sound and removes the 'beyond all
roots' ambiguity; the diff is minimal, leaves $P$, the Example, title, conclusion,
and provenance unchanged, and the relevant source contract passes strict
checking" — and raises two findings.

**Finding 1 — `[L2]` cites a draft. Factually correct, and I checked it.**
`cor-rational-function-field-as-a-fraction-field` is `status: draft`. Verified on
disk, along with the other four ids: `thm-polynomial-degree-of-a-product-over-a-domain`,
`def-polynomial-degree-leading-coefficient-and-monic`, `lem-of-abs-value` and
`def-abs-value` are all `published`. So:

- **Every id my repair added is published.** The draft id was already in `deps`,
  put there by the D10 wiring commit `a891a3f7` and certified then by an
  independent Terra certifier. My repair cited it in `[L2]` rather than
  introducing it.
- **My step-9 repair record overstated one word.** It says every `[L2]` clause
  quotes a *published* Statement. For four of five clauses that is exact; for the
  integral-domain clause the Statement exists and says precisely what `[L2]`
  attributes to it, but it is this run's own draft page 53.2. The certifier is
  right to hold me to my own wording, and §5 of
  `research/frontier-12-published-dependency-repairs.md` should be corrected to
  say so.
- **The underlying state is D10's design, not a defect introduced here.** Page
  53.2 exists precisely because these two published items assumed a construction
  the library had never built; it is *earlier* in reading order (53.2 vs 126), so
  this is an ordinary backward citation that is merely draft until step 10
  publishes the level. `depcheck`'s `draft-on-published-page` does not fire, and
  the interim state resolves the moment the level publishes.

**Finding 2 — the equality case. Same issue as Terra's, and not independent of
it.** The certifier's own text cites the Terra ledger row as its support ("The
current Terra rejudge independently rejects this exact issue"). The certifier
**is** GPT 5.6 Terra. So this is one model family twice, one instance having read
the other's verdict — not the cross-family corroboration that made R1 fatal. The
cross-family lane, DeepSeek, passed this exact text. My §2–§3 analysis stands and
my adjudication remains `confirmed_nonfatal`.

**But the adjudication is not what is blocking.** I am the sole adjudicator of
*judge* rejections; I am **not** the certifier of my own repair, and the
delegated protocol is explicit that no author is. The certifier has declined. I
cannot stamp the item, cannot overrule the refusal by re-adjudicating a judge row,
and will not try. The protocol's own escape hatch applies: when a repair "needs a
debatable restatement … report it for the owner rather than applying a partial
public repair." That is what §7 does.

**One orchestration gap, recorded.** The certifier ends: "I could not write a
findings file or stamp because this session is read-only, and the supplied
dispatch does not bind `<slot>` to an exact findings filename." Its verdict
survives only in the dispatch result JSON. A certifier dispatch should bind a
findings path.

## 5. Gates, as of this report

| gate | result |
|---|---|
| `precheck.mts` (repaired item) | **PASS**, `direct` |
| `fwdcheck` · `extcheck` · `citecheck` · `rendercheck` · `prosecheck` | **OK**, exit 0 |
| `impact-audit --from after-step8 --receipt` | **exit 0** — 2 interfaces, 11 items, all dispositioned |
| `impact-audit --from pre-step8 --to after-alpha-step8b` (restored step-8/8b receipt) | **exit 0** — unchanged from step 8b |
| `depcheck` | **1 error: `published-unaudited` on `ex-rational-function-field-order`, and nothing else.** 154 warnings, all legacy; I edited no item at step 9b, so the warning set is exactly the step-9 state. |
| `level-coverage --verify-current-context` | **FAIL, 1 error — `spine-receipt-invalid`.** 454 items, 370 proof-bearing, 1691 relationships, **454/454 required judge pairs**. §6. |

The one `depcheck` error is correct and **must not be waived by me**. No author
certifies its own repair: `verification.verified` (`scope:
published-dependency-repair`, `delegated_by: owner`) is the independent
certifier's to write. I have not written it and will not — and as of §4b the
certifier has declined to write it, so this error stands until the owner breaks
the deadlock.

**Judge coverage is complete and my adjudication was honoured.** `level-coverage`
reports 454/454 required pairs, with the expected
`judge-verdict-adjudicated-nonfatal` warnings for Alpha-classified rejections and
no `judge-coverage-missing` anywhere. Note that neither
`ex-rational-function-field-order` nor `cex-ordered-field-not-archimedean` is in
the gate's 454-item scope — that scope is this run's own content, and these two are
pre-existing published items. Their governance is `depcheck` plus the delegated
published-dependency-repair protocol, which is why the certifier's stamp, not this
gate, is what clears them.

## 6. The one real blocker: the spine receipt lapsed at step 9, and not because of the repair

`level-coverage` returns exactly one error:

> `ERROR spine-receipt-invalid: research/frontier-12-spine-audit.json: scope no
> longer matches the current high-blast-radius proof set`

**I traced it rather than reporting it raw, and the result is narrow.** Comparing
the receipt against a freshly generated `spine-audit --template --top 100`:

| | result |
|---|---|
| items entering scope | **none** |
| items leaving scope | **none** — the same 60 proof-bearing items |
| `content_sha256` changes among those 60 | **none.** Every attested proof is byte-identical to what the independent Sol reader read. |
| what actually moved | **7 of 60 `transitive_consumers` counts, by +1 or +2** |

The seven are `lem-a-relation-is-included-in-the-product-of-its-domain-and-range`
(3124→3126), `lem-inverse-relations-composites-and-restrictions-are-sets`
(3093→3095), `lem-nat-discrete` (3304→3305), `lem-nat-order-is-membership`
(2745→2747), `lem-nat-successor-neq-self` (2921→2923), `lem-pigeonhole`
(2629→2631) and `thm-well-ordering-principle` (2652→2653).

**Attribution, checked in a detached worktree at `a891a3f7` rather than
inferred.** The scope fingerprint at HEAD is `c80e3a9357a1d018`; in the working
tree it is **also** `c80e3a9357a1d018`; the receipt carries `a8563d4c9354d6c2`.

- **My step-9 `[L2]` repair moved nothing in the spine scope at all** — HEAD and
  the working tree fingerprint identically. The four `deps` I added were already
  inside those cones.
- **All seven deltas are attributable to the D10 wiring commit `a891a3f7`**,
  which put `cor-rational-function-field-as-a-fraction-field` into
  `ex-rational-function-field-order`'s `deps` and thereby pulled that item and
  `cex-q-not-dense-in-an-ordered-field` into seven deep foundational cones.

**So step 9 committed a change that lapsed the spine receipt, and nobody caught
it, because `level-coverage` was not re-run at step 9 — my own step-9 gate table
omitted it.** That is the finding here, and it is mine.

**What it does and does not mean.** The condition the gate protects — that no
high-fan-out proof rests on unreviewed text — is intact: the audited set is
unchanged and every audited proof is byte-identical. What is stale is
mechanically-derived graph metadata inside the fingerprint the receipt binds to.

**I have not refreshed it, deliberately.** The receipt is an independent reader's
artifact (`reviewer: GPT 5.6 Sol independent Step-6 reader (frontier-12)`), and I
am both the author of the step-9 repair and the adjudicator. Re-fingerprinting an
independent receipt because Alpha judges the drift immaterial would make the
gate's teeth Alpha's discretion, and whether count-only drift should lapse it is a
mechanism question — `ARCHITECTURE.md` territory, and the owner's. §7.

**No further rejudge is required and none should be run.** The current text has a
complete paired verdict set at context `28b42a1d5591…` — one PASS, one adjudicated
REJECT — and running another would only resample the lane that has produced a
fresh nitpick on each successive text.

## 7. What I am deliberately leaving to the owner

1. **The spine-receipt refresh (§6), with a recommendation.** Because no item
   entered or left scope and no attested `content_sha256` changed, this needs **no
   re-reading of any proof**: regenerate the `scope`/`scope_sha256` block from
   `spine-audit --template --top 100` and carry the existing 60 attestations over
   verbatim, leaving `reviewer` as the Sol reader's. That is a mechanical
   re-fingerprint, not a new attestation — but it should be done by someone other
   than me, or under an explicit owner instruction. **The separate question worth
   deciding once:** should a `transitive_consumers` count delta lapse the spine
   receipt at all, given `content_sha256` is already in the fingerprint and is
   what tracks mathematical change? If not, that is a one-line change to the
   `receipt-scope` comparison in `tools/spine-audit.mjs` and a note in
   `ARCHITECTURE.md`. I am not making it.
2. **Terra's observation is a legitimate polish, and I am not applying it.** If
   the owner wants step 3.1 to read "for $f \ne g$ … and $f = g$ exactly when the
   difference is $0$", that is a defensible improvement to a published Example.
   It is forbidden to me at this stage by R1 and it would cost a third rejudge
   cycle on an item whose conclusion was never in doubt. **Recommendation: leave
   it.** The case is discharged by the trichotomy of the definition the step
   cites, and the library states that definition well.
3. **The `[cited-not-in-deps]` warning on `cex-ordered-field-not-archimedean`**,
   carried over from my step-9 report §8: its `**Given:**` cites
   `cor-rational-function-field-as-a-fraction-field`, which the D10 wiring
   correctly placed in `forward_refs` rather than `deps`. `fwdcheck` passes. This
   is a warning about where forward references live, not a defect, and whether
   `depcheck` should learn about `forward_refs` is a tooling decision for the
   owner, not a content one for me.
4. **Nothing else.** I made no item edit at step 9b, so there is no new repair to
   certify beyond the one already in flight.

## 7b. Is the level ready for the step-10 owner pause?

**No — and the blocker needing your decision is the certifier's refusal, not the
mathematics.** Three items are open:

1. **The certification deadlock on `ex-rational-function-field-order` (§4b) —
   yours to break.** The certifier will not stamp until step 3.1 gains an explicit
   equality branch. I adjudicate that objection `confirmed_nonfatal`, and R1
   forbids me from editing an item on a nonfatal adjudication at this stage. Both
   positions are protocol-correct, which is exactly why it needs you. **My
   recommendation: authorise the one-clause edit directly.** It is not a
   mathematical correction — it makes explicit what `def-ordered-field` (O1)
   already gives — but it costs one sentence, satisfies the certifier and the
   Terra lane, cannot plausibly fail the DeepSeek lane, and ends a loop that has
   now consumed three rejudges of a published Example whose conclusion was never
   in doubt. The alternative I would accept without complaint: you rule the
   objection nonfatal and direct the certifier to stamp on that basis. What I
   should **not** do is relabel it fatal to license my own edit — that is the
   instrumental use of the fatality label R1 exists to prevent.
2. **The draft citation in `[L2]` (§4b, finding 1).** No action needed if the
   level publishes page 53.2 at step 10 as planned — the citation resolves the
   moment it does. What I owe regardless is a one-word correction to
   `research/frontier-12-published-dependency-repairs.md` §5, which claims all
   five `[L2]` clauses cite published Statements. I have not edited that record
   yet, because if you authorise (1) the repair record needs rewriting anyway and
   both corrections should land together.
3. **The spine-receipt refresh** (§6, §7.1) — mechanical, no proof re-reading,
   but not mine to perform.

Everything else is closed. Both step-9b assignments are complete, judge coverage
is 454/454, all 11 impact dispositions are recorded and validated against their
baselines, and **no open mathematical question remains on either D10-wired
item** — the certifier itself confirms the repair's substance is sound.

## 8. For the step-10 fatal-error report

**No new fatal mathematical defect.** The single rejection adjudicated here is
recorded as **nonfatal — overstated phrasing in a step whose degenerate case is
discharged by the trichotomy clause of its own cited definition** (location:
proof/verification, step 3.1 of `items/ex-rational-function-field-order.md`; no
edit; no content change). The step-9 fatal entry (incorrect dependency citation
in `[L2]`, repaired) stands as written in `research/frontier-12-alpha-step9.md`
§9, with one correction from §4b: four of its five `[L2]` clauses cite published
Statements and the fifth cites this run's draft page 53.2, which publishes with
the level.

Two non-mathematical items belong in the step-10 account because they are process
failures of step 9, both mine:

- **`level-coverage` was not re-run at step 9**, so the spine receipt lapsed at
  commit `a891a3f7` and stayed lapsed through the step-9 report (§6).
- **My step-9 repair record claimed all `[L2]` clauses cite published content**;
  one cites a draft (§4b).
