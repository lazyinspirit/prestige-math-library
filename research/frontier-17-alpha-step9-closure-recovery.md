# Step 9 — judge-closure recovery, run `frontier-17`

Lead Alpha, 2026-08-23. Dispatch label `step9-closure-recovery`.

This is the narrow recovery the `9-scope` judge-closure gate asked for: one
current rejection row carried no exact Alpha outcome, because `9-scope` is
licensed to author new content but has no `onGateFailure` route and so cannot
dispatch its own adjudicator. It is not a second audit. The Step-8 report
(`research/frontier-17-alpha-step8.md`), the Step-9 scope report
(`research/frontier-17-alpha-step9.md`) and all 162 pre-existing adjudications
stand untouched; nothing below reinterprets any of them.

## The scope, recomputed rather than trusted

`research/frontier-17-judge-closure.json` named one `unadjudicated_row`. I
recomputed the join myself over `research/frontier-17-judge.jsonl` (1,361 rows,
163 with `keep: false`, 369 null/capacity rows excluded) against
`research/frontier-17-judge-adjudications.jsonl` (162 rows), keyed on the exact
triple `(id, model, context_sha256)`. It returns exactly one row, the same one:

| id | model | `context_sha256` | verdict |
|---|---|---|---|
| `ex-lagrange-multipliers-with-two-constraints` | `deepseek-v4-pro` | `4d7534305f61…` | reject |

> *L4 misstates the cited local-extremum definition by replacing its open domain
> with an arbitrary constraint set, so step 3.3's strict local maximum of P4 on M
> is unsupported.*

Its Opus page-mate verdict on the same frozen context is a pass, so this is a
DeepSeek-only rejection: the one signal in this run that no other lane could have
produced, on text I authored myself at step 9 six minutes before the sweep read
it. I weighed it on the text and the cited item, not on what I meant to write.

## J-1 — `ex-lagrange-multipliers-with-two-constraints`, **confirmed_fatal**, `dependency_citation`

**What [L4] said.** *"A point is a strict local maximum when the objective is
strictly smaller at every other point of a Euclidean neighbourhood of it, the
neighbourhood being taken in the set the objective is compared on"*, citing
`def-euclidean-local-extrema-and-critical-points`.

**What that item says**, opened on disk, `## Definition`, in full:

> Let $U\subseteq\mathbb R^m$ be open, $a\in U$, and $f:U\to\mathbb R$. The point
> $a$ is a **local minimum** when some Euclidean neighbourhood $V$ of $a$
> satisfies $f(a)\le f(x)$ for every $x\in U\cap V$; it is a **strict local
> minimum** when the inequality is strict for $x\ne a$. Local and strict local
> maxima reverse these inequalities.

The definition is stated **only for an open domain**. The constraint set
$M=G^{-1}(2,1)$ is the unit circle in the plane $z=1$ and is not open in
$\mathbb R^3$, so no instance of that definition speaks about $f$ on $M$. The
fact line replaced the openness hypothesis with an arbitrary comparison set, and
step 3.3 then read *"By [L4], $P_4$ is a strict local maximum of $f$ on $M$"* off
the widened form. The judge is right, and precisely right: it named the exact
substitution.

**Why fatal rather than a 30-second gap.** This is not a gap between two steps
that a reader closes by inference; there is nothing to infer, because the cited
item does not cover the case. Worse, the one reading under which the citation
literally applies — the item's own $f$, which really is defined on the open set
$\mathbb R^3$ — makes the conclusion **false**:
$$f\bigl(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2},1+t\bigr)=\tfrac12-\sqrt2-t\sqrt2>f(P_4)\quad(t<0),$$
so $f$ takes strictly larger values arbitrarily close to $P_4$ in $\mathbb R^3$.
A fact line whose only literal instantiation contradicts the step it licenses is
the citation-inflated class, not a polish.

**What was NOT wrong.** The mathematics the item proves is correct and I
re-verified it independently, symbolically and numerically: on $M$,
$f=(s^2+2s-1)/2$ with $s=x+y\in[-\sqrt2,\sqrt2]$; $\lVert p-P_4\rVert_2^2=2+\sqrt2\,s$,
so $0<\lVert p-P_4\rVert_2<\sqrt{2-\sqrt2}$ is exactly $-\sqrt2<s<-1$; and there
$g(s)-g(-\sqrt2)=(s+\sqrt2)(s+2-\sqrt2)/2<0$. A sweep of 500,000 points of $M$ in
that punctured ball gives $\max\bigl(f(p)-f(P_4)\bigr)=-2.9\times10^{-12}$, i.e.
strictly negative to floating point, and the global bounds $\tfrac12+\sqrt2$ and
$-1$ reproduce. The defect was in what licensed the word, never in the
inequality.

### The repair (licensed by the `confirmed_fatal` row, and confined to this item)

1. **[L4] now states the cited definition as it stands** — with
   $U\subseteq\mathbb R^m$ open, $a\in U$, $f:U\to\mathbb R$, and both
   inequalities, `def-p-norms-on-rn` still carrying the Euclidean norm.
2. **The constrained notions are stipulated in the `**Given:**` paragraph**, where
   SCHEMA §4 puts an item's context: $a\in M$ is a *local extremum of $f$ on $M$*
   when for some $r>0$ either $f(p)\le f(a)$ for every $p\in M$ within $r$, or
   $f(p)\ge f(a)$ for every such $p$; a *strict local maximum of $f$ on $M$* when
   for some $r>0$, $f(p)<f(a)$ for every $p\in M$ with $0<\lVert p-a\rVert_2<r$.
   The Given says outright that this is the sense of "a local maximum or minimum
   of $f$ subject to $G(x)=c$" that [L3] takes as its hypothesis, and that [L4] is
   the unconstrained notion. The distinction is now stated where it used to be
   silently elided.
3. **Steps 3.2 and 3.3 cite the Given**, which are the two steps that use the
   constrained sense; step 3.3 concludes from the stipulation with the explicit
   radius $r=\sqrt{2-\sqrt2}$ rather than "by [L4]".
4. **The Example's two unqualified occurrences were qualified "on $M$"** — the
   headline claim and the closing sentence — in the same act, since the
   unqualified term is the defect.

No other item, page, manifest or plan entry was touched. `deps` is unchanged, so
there is no public-interface change and no impact-audit consumer to re-resolve.
The item carried no `verification.judge` stamp, so none had to be deleted.

**Contract.** `research/frontier-17-batch-4.proof-contracts.json`, the owning
batch file, not the merged one: the L4 quote now runs from *"Let
$U\subseteq\mathbb R^m$ be open"* so the recorded quote carries the hypothesis
that was dropped; steps 3.2 and 3.3 record `given` in their input maps; step 3.3's
claim text matches the item; and the item's `risk_review.notes` records J-1 beside
the step-9 refuter's S9-1. Re-merged into
`research/frontier-17-proof-contracts.json` afterwards.

**Where this defect came from.** It is S9-1's own repair. Correcting the earlier
false claim that $P_4$ was "neither a maximum nor a minimum" required the
constrained local-extremum notion, and the corpus has no item that defines it —
so the new [L4] widened the nearest definition instead of stipulating the notion.
Ledger row `f17-step9-closure-f001` records that lineage.

## Consistency with the standing adjudications

DeepSeek raised the same class on `thm-lagrange-multipliers-for-regular-level-set-constraints`
(*"the cited definition covers only unconstrained extrema and [L2] does not state
that implication"*), and an earlier round closed it `confirmed_nonfatal`. That
disposition stands and I did not reopen it. The two are genuinely different: on
the theorem the constrained notion sits in the **hypothesis**, where the unfolding
is a one-line restriction along the curve and the Statement's truth does not turn
on it; here the widened fact licensed a **conclusion** that the cited definition,
read as written, contradicts.

## Gates

| gate | command | result |
|---|---|---|
| precheck | `precheck.mts items/ex-lagrange-multipliers-with-two-constraints.md` | PASS, 1 checked, 0 failing |
| merge-contracts | `merge-proof-contracts.mjs --level frontier-17 …` | 384 scoped items from 9 batch contracts |
| proof-contract | `proof-contract.mjs … --strict` | 0 errors, 384/384 items (1 pre-existing warning, other item) |
| finite-smoke | `finite-smoke.mjs …` | 0 errors, 3 checks |
| risk-report | `risk-report.mjs … --require-reviewed` | 0 errors, 384 items routed |
| boundary-audit | `boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | none |
| citation-fidelity | `citation-fidelity.mjs … --fail-on-missing-quote` | 1,390 citations, no quote-not-found, no widening candidate |
| gate-liveness | `gate-liveness.mjs --run frontier-17 … --min-checks 1` | all live |
| depcheck | `depcheck.mjs` | OK — no cycles, all references resolve, nothing new on this item |
| defect-ledger | `defect-ledger.mjs check --run frontier-17 --adjudications … --closure …` | 333 rows checked, 0 errors |
| step8-guard | `step8-guard.mjs --touches … --baseline pre-step8 --adjudications …` | OK — 1/1 change licensed; this item is `created` since the baseline (authored at step 9), so it is outside the R1 window by construction, and the adjudication still carries the guard-form hash |
| judge-closure | `level-coverage.mjs --judge-only --verify-current-context --allow-pending-rejudge` | 442/443 current pairs; **0 unadjudicated, 0 open fatal**, 1 needs rejudge |

`item_sha256` on the adjudication row is `92354445a8d8c4ac…`, the guard form
(whole `verification:` block excluded, `tools/item-hash.mjs itemHashGuard`) of the
**pre-edit** text, not the differently normalized hash in the judge ledger.

## Rejudge target

    ex-lagrange-multipliers-with-two-constraints

One id, its own hash having moved. Its page-mates are untouched and must not be
swept. `research/frontier-17-judge-closure.json` now reads
`unadjudicated: []`, `open_fatal: []`, `needs_rejudge: ["ex-lagrange-multipliers-with-two-constraints"]`,
`closed: false` under the `pending_rejudge` allowance — which is exactly the state
this dispatch defines as complete.

## Honest remaining gap (recorded, not acted on)

The library has **no item defining a constrained local extremum**. Four items use
the phrase and none defines it: `thm-lagrange-multipliers-for-regular-level-set-constraints`
("subject to $G(x)=c$"), `cor-lagrange-multiplier-rule-for-one-regular-constraint`
("a local maximum or minimum of $f$ subject to $G(x)=c$"),
`ex-lagrange-multipliers-on-the-sphere` ("at every constrained local extremum")
and, until this repair, this example. The right fix is one small definition item
on the A page, cited by all four — which is authoring on three items outside this
dispatch's scope, each under a frozen verdict, one of them already carrying an
Alpha `confirmed_nonfatal` on this very point. I am recording it rather than
widening the recovery into it; it is an owner call for step 10 or the next run.
