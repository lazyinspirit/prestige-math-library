# Run `frontier-12` — Alpha step-8b: the one rejudge rejection

> **Superseded on blocker 1 by `research/frontier-12-alpha-step8c.md`.** The
> rejudge this report calls for ran: Terra PASS, DeepSeek REJECT on a *new*
> objection to [L4], adjudicated **`confirmed_nonfatal`** (row 329) with no edit.
> The rejudge set is now empty. Blocker 2 (the 126 `plan_reconciliation` rows)
> stands unchanged.

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** the single surviving rejection from the step-8
rejudge, plus the impact receipt owed from step 8.

**Status: COMPLETE.** DeepSeek's objection is **confirmed_fatal**
(`defect_type: dependency_citation`). Repaired. All gates re-run and clean.
`step8-guard` still passes 3/3. The impact receipt is written and validated.

**The level is NOT ready for step 9.** Two things block it, one of them mine and
small, one of them large and pre-existing — and my step-8 report **undercounted
the large one by an order of magnitude**. §7.

---

## 1. The objection, and what the cited theorem actually says

`lem-green-type-ii-boundary-identity`, `item_sha256` `c25c40c5de27b7bd…`
(judge-ledger normalization) = `c4f4d550c66687f6…` (`item-hash.mjs`
normalization). Terra PASS, DeepSeek REJECT:

> Fact L3 overstates its cited source: `thm-fubini-over-a-region-between-continuous-graphs`
> only states vertical-graph regions y in [a,b], not Type II x-between-graphs
> regions. Hence step 3.1 lacks a cited horizontal Jordan-measurability/Fubini
> result.

I opened the theorem on disk. Its Statement, in full:

> Let $a<b$, let $\alpha,\beta:[a,b]\to\mathbb R$ be continuous with
> $\alpha\le\beta$, and put $K:=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\}$.
> Then $K$ is compact and Jordan measurable. If a function on the open region
> between the graphs extends to a continuous $H:K\to\mathbb R$, then $H$ is
> Riemann integrable over $K$ and $\int_KH=\int_a^b\bigl(\int_{\alpha(x)}^{\beta(x)}H(x,y)\,dy\bigr)dx$.

Every quantifier is over the vertical orientation. There is no symmetric clause —
and that absence is deliberate rather than accidental, because its sibling
`thm-jordan-fubini-by-sections` **does** carry one ("The symmetric assertion holds
for the other coordinate block"), and `def-type-i-type-ii-and-elementary-green-regions`
is careful to say only "each **Type I description** is compact and Jordan
measurable." The library states this Fubini for one orientation and knows it.

The Fact under attack read:

> [L3] Jordan-Fubini has a symmetric assertion for the other coordinate block,
> and **graph-bounded regions with continuous data are Jordan measurable and
> integrable** ([[thm-jordan-fubini-by-sections]], [[thm-fubini-over-a-region-between-continuous-graphs]]).

The second clause drops the word that carries the theorem's whole content. That
is not a loose paraphrase of a fact that covers the use; a Type II region **is
not an instance of the cited theorem at all**. DeepSeek read it correctly, and
this is the "no changed domain" prohibition in CLAUDE.md §"Natural mathematical
voice and citation fidelity" by name.

**It is load-bearing.** Step 3.1 applied the symmetric assertion of Jordan-Fubini
to $E=D$ and $g=\partial_xQ$. That theorem's hypotheses are: $D$ a bounded Jordan
set, $\partial_xQ$ Riemann integrable over $D$, and the sections Jordan
measurable with integrable restrictions off a content-zero parameter set. The
deleted "vertical" was the only thing in the item supplying the first two.

## 2. Why fatal and not nonfatal — the line, applied honestly

I closed 317 rows nonfatal at step 8 on this line:

> **NONFATAL** iff the mathematics is correct and complete in substance and the
> defect is in the local citation or justification, **including cases where the
> named route does not work but a correct one is immediate from the item's own
> facts.**

The clause after "including" is what decides this one, and it fails. The item's
declared facts were the orientation definition, the line-integral definition and
reversal/concatenation theorem, Jordan-Fubini, Newton-Leibniz, and the vertical
Fubini. **None of them yields Jordan measurability of a horizontal-graph region.**
Closing the gap requires importing a theorem the item does not reach — the reader
must leave the page, find `thm-linear-images-scale-jordan-content-by-absolute-determinant`
(or reprove content-zero invariance under a coordinate exchange), and come back.
That is not a 30-second closure from material the item can reach; it is a missing
step.

Two further checks, because the 30-second rule deserves a real test and not a
gesture at one:

- **The Statement is true.** A Type II region genuinely is Jordan measurable, so
  nothing false was going to publish. Fatality here is (c) of my step-8 test — an
  unclosable gap — not (a) a false assertion. I want that distinction on the
  record, because it is a weaker kind of fatal than the two I found at step 8.
- **Terra's PASS is not evidence against.** Terra's pass reason is *"Verified the
  boundary signs, endpoint cases, Newton-Leibniz step, and symmetric Fubini
  application; the cited facts license the argument."* The last clause is the one
  DeepSeek checked and Terra did not. Per the dispatch and per CLAUDE.md, DeepSeek
  is the run's only cross-family lane; I did not weigh Terra's pass against it.

**The asymmetry is the tell.** Neither lane objected to `lem-green-type-i-boundary-identity`'s
[L3], which restates the same theorem **exactly** and applies it to a region that
is literally the theorem's $K$. The complaint landed on precisely the one of the
two twin lemmas where the library's tool does not fit. That is a substantive
finding, not a stochastic nitpick.

**Adjudication row** appended to `research/frontier-12-judge-adjudications.jsonl`
(row 328), with the pre-edit `item-hash.mjs` digest:

```json
{"id":"lem-green-type-ii-boundary-identity","model":"deepseek-v4-pro",
 "context_sha256":"7a9482bc48b5b553…","item_sha256":"c4f4d550c66687f6…",
 "outcome":"confirmed_fatal","defect_type":"dependency_citation"}
```

## 3. The repair — the transpose is now written, not assumed

The Statement is **unchanged**. I did not narrow the lemma to elementary regions,
which would have been the cheap fix (its only consumer applies it to pieces that
have a Type I description too, so Jordan measurability was available there by
coincidence) — it would have broken the symmetry with the Type I lemma and left
the true general statement unproved.

**[L3] narrowed** to what `thm-jordan-fubini-by-sections` actually gives, with
the symmetric-block clause quoted rather than gestured at. **Four facts added**,
each an exact restatement of a published item:

| fact | source | what it supplies |
|---|---|---|
| [L5] | `def-type-i-type-ii-and-elementary-green-regions` | the region class the Statement names: $c<d$, $\lambda\le\rho$ continuous, $\lambda<\rho$ on $(c,d)$, and $D$ compact |
| [L6] | `thm-fubini-over-a-region-between-continuous-graphs` | the vertical case, stated **with** its orientation |
| [L7] | `thm-linear-images-scale-jordan-content-by-absolute-determinant` | a linear endomorphism carries bounded Jordan sets to bounded Jordan sets |
| [L8] | `thm-continuous-functions-on-compact-jordan-sets-are-integrable` | continuous on compact Jordan ⟹ integrable |

**New step 1.3** writes the transpose out. $\sigma(x,y)=(y,x)$ is linear with
$\sigma\circ\sigma=\mathrm{id}$; $\sigma(D)=\{(u,v):c\le u\le d,\ \lambda(u)\le v\le\rho(u)\}$
is a region between two continuous graphs over an interval of its **first**
coordinate, so [L6] applies to it with $a=c,b=d,\alpha=\lambda,\beta=\rho$ and
makes it compact and Jordan measurable; [L7] then returns $D=\sigma(\sigma(D))$
as a bounded Jordan set. The step says in terms that [L6]'s orientation
hypothesis "is verified for $\sigma(D)$ and is never asserted of $D$" — the
sentence whose absence was the defect.

**New step 2.2** discharges the rest of Jordan-Fubini's hypotheses: $\partial_xQ$
is continuous on the compact Jordan set $D$, so [L8] makes it integrable there;
each section $\{x:(x,y)\in D\}$ with $y\in[c,d]$ is the compact interval
$[\lambda(y),\rho(y)]$, whose boundary is at most two points, with a continuous
restriction; sections off $[c,d]$ are empty, so the exceptional set is empty.

**Step 3.1 rewritten** to apply [L3] with those hypotheses discharged by name and
to note that the outer integrand vanishes off $[c,d]$, which is what identifies
the theorem's $\int h$ with $\int_c^d$.

Steps 1.1, 1.2 and 4.1 are byte-identical to the step-8 text.

Two places where I matched, deliberately, the level of detail the **published**
parent theorem already sets rather than escalating: that a compact interval is
Jordan measurable in $\mathbb R$, and that the Jordan-set integral over
$[\lambda(y),\rho(y)]$ is the ordinary $\int_{\lambda(y)}^{\rho(y)}$. Both are
asserted in exactly the same way inside
`thm-fubini-over-a-region-between-continuous-graphs`'s own step 2.1 ("Every
vertical section is the closed interval $[\alpha(x),\beta(x)]$, and its
restriction is continuous, so [L1] gives the displayed formula"), which is
published and owner-audited. Escalating them here would fork this item against
its own parent.

**Three dependency edges added** — `def-type-i-type-ii-and-elementary-green-regions`,
`thm-linear-images-scale-jordan-content-by-absolute-determinant`,
`thm-continuous-functions-on-compact-jordan-sets-are-integrable`. All three are
published, all precede this page, `depcheck` reports no cycle and `fwdcheck` no
forward reference. The first also closes a pre-existing omission: the Statement
says "Type II region" and the item did not previously cite the definition that
owns the term.

`research/frontier-12-batch-4.proof-contracts.json` is updated in step: new
citation contracts with exact source quotes for [L5]–[L8], [L3]'s stale
`thm-fubini-…` citation removed, derivations for 1.3 and 2.2, corrected
inputs and claims for 1.2/3.1 (1.2's claim had been stale since the step-8
repair), and a `risk_review` note recording this adjudication.

## 4. Thrice-touched: is the lemma converging?

Yes, and I will say why rather than assert it.

| touch | what was wrong | who found it |
|---|---|---|
| step 6 | Newton-Leibniz was applied without discharging the endpoint sections | reader 3 / refuter-2 |
| step 8 | that step-6 repair asserted $\lambda(c)=\rho(c)$, false for a square | both lanes |
| step 8b | [L3] cited a vertical-graph theorem for a horizontal-graph region | DeepSeek only |

Each touch closed a different, real defect, and each defect was in a different
part of the argument — the endpoint case, then the endpoint case's own repair,
then the measure-theoretic prerequisites. **The Statement has never changed and
has never been in doubt.** The residual surface is now small: steps 1.1/1.2/4.1
have survived two independent full readings unchallenged, and 1.3/2.2/3.1 consist
of four exact citations and one elementary set identity ($\sigma\circ\sigma=\mathrm{id}$).

**The Type II case does not need a different route.** The route it needed was the
one the library already owns and the item was not citing. If a further rejudge
faults this text, my expectation is a citation-precision nitpick on the interval
sections — nonfatal, and identical to something already published upstream.

## 5. Impact — `research/frontier-12-impact-audit.json`

Written and **validated** against `--from pre-step8 --to after-alpha-step8b`
(exit 0). It covers **both** changed interfaces, so it supersedes the narrower
step-8 pair named in my step-8 report.

> **Orchestrator:** re-run it with `--to after-alpha-step8b`, not
> `--to after-alpha-step8`; the receipt's `changed_interfaces` must match the
> computed set exactly and the step-8 pair now computes a smaller one.

**`cor-potentials-differ-by-a-componentwise-constant`** (2 logical, 2 direct
citation) — the corollary whose old [L1] carried a false biconditional. Both
consumers read in full:

- `ex-constructing-a-potential-on-an-open-rectangle` — `still-licensed`. Its [L3]
  restates only the corollary's **Statement**, untouched by the repair. Step 3.1
  applies it with the corollary's own $U$ taken to be the open rectangle, which
  the step separately argues is convex; a convex open set is one piecewise-$C^1$
  path class, which is the **true** direction the corrected clause states.
- `lem-potentials-glue-over-a-path-connected-overlap` — `still-licensed`. Step 1.1
  needs "nonempty and path-connected ⟹ one class" to get a *single* constant $C$
  on $U_1\cap U_2$. The corrected clause supplies exactly that; the old text
  reached it through a biconditional whose forward half was false.

**Neither consumer leaned on the false direction**, and the reason is structural
rather than lucky: in both, the path-connected set is the corollary's own domain
$U$, never a proper subset of a larger one. The false direction only bites for a
proper subset. So the answer to the dispatch's question — "a consumer that leaned
on the false direction is a real finding" — is that there is no such consumer, and
the repair strengthens both.

**`lem-green-type-ii-boundary-identity`** (3 logical, 1 direct citation) — all
three read in full:

- `thm-greens-theorem-for-finite-unions-of-elementary-regions` — `still-licensed`.
  Its [L3] restates the lemma's conclusion verbatim; the repair changed no
  hypothesis, quantifier or conclusion of the Statement, only widened what the
  proof licenses. Its [L1] independently gives every elementary piece both
  descriptions, so the repair removes a dependence on that coincidence.
- `cor-area-as-a-line-integral-for-elementary-regions` — `not-load-bearing`. It
  never cites the Type II lemma; its Jordan measurability comes from
  `lem-green-boundary-cancellation-under-finite-gluing` step 3.1, untouched.
- `rem-greens-theorem-jordan-domain-limitation` — `still-licensed`, and worth
  stating explicitly: **the repair introduces no Jordan-curve machinery.** [L7] is
  about linear images of Jordan *sets*, not Jordan *curves*. The elementary-region
  scope D2 fixed is unchanged and the remark remains accurate.

## 6. Gates at close

| gate | result |
|---|---|
| `precheck` (edited item) | PASS, 0 failing |
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages |
| `fwdcheck` · `extcheck` · `prosecheck` | **OK** (exit 0) |
| `rendercheck` | **OK** — 4424 files |
| `content-policy` | 454 scoped items, **0 errors, 0 warnings** |
| `merge-proof-contracts` | 370 scoped items from 7 batch contracts |
| `proof-contract --strict` | **0 errors, 0 warnings, 370/370** |
| `finite-smoke` | **0 errors**, 2 checks |
| `risk-report --require-reviewed` | **0 errors**, 370 routed |
| `impact-audit` `pre-step8` → `after-alpha-step8b` + receipt | **exit 0** — 2 interfaces, 5 items, all disposed |
| **`step8-guard`** (baseline `pre-step8`) | **OK — 3/3 changes licensed by a confirmed_fatal adjudication** |

Touch ledger: I recorded the snapshot `after-alpha-step8b`. One housekeeping note
the orchestrator should have — `impact-audit` resolves a label with
`snapshots.find` (**first** match) while `step8-guard` uses
`[...snapshots].reverse().find` (**last** match). I took the snapshot, then made
one further wording edit, so rather than re-snapping under the same label and
leaving two entries that the two tools would resolve differently, I removed my
first `after-alpha-step8b` entry and re-snapped once. The ledger holds exactly one
snapshot per label and every pre-existing snapshot is untouched.

## 7. Verdict — NOT ready for step 9, and I owe a correction

Two blockers.

**1. The rejudge, mine and small.** `level-coverage --verify-current-context`
returns exactly one `judge-coverage-missing`: `lem-green-type-ii-boundary-identity`,
new `item_sha256` `abafe6ceaf853717…`. Its page-mates keep byte-identical hashes
and need nothing. **The rejudge set is one item.** The other two step-8 repairs
now have complete current pairs (Terra and DeepSeek both PASS
`cor-potentials-differ-by-a-componentwise-constant` at `8a659ab4f73c5c05` and
`lem-green-type-i-boundary-identity` at `151305499b220001`); `apply-judge-stamps`
still owes them their `verification.judge` blocks.

**2. `plan_reconciliation` — and my step-8 report was wrong about its size.**

My step-8 report said this was **14 items** and named them. It is **127**. I read
a truncated tail of the gate's output — all fourteen names I listed begin `thm-s`
through `thm-z`, which should have told me — and reported the tail as the whole
set. The correct figure comes from `--json`, which I ran this time: 127
`audit-receipt-plan-reconciliation-missing` errors, spanning `cex-`, `cor-`,
`def-`, `ex-`, `lem-`, `prop-` and `thm-` items across every batch. Nothing about
the obligation changed; my measurement of it was wrong, and it is the difference
between an afternoon's work and a stage.

I have filled in **one** row — my own, for `lem-green-type-ii-boundary-identity`,
whose drift I caused and can therefore explain concretely. **126 remain**, and
they are authorship records, not adjudications: the Betas that authored each item
know why its deps left the plan. I have not fabricated any of them.

I also **refreshed `manifest_sha256`** in `research/frontier-12-audit-coverage.json`
(`71eae74091589602…` → `7dc7df10f92e720f…`). My three added edges changed the
relationship set, so my own step-6 attestation no longer covered current disk —
`audit-receipt-manifest` is an error class that was **not** present at step 8 and
appeared because of this repair. The refresh re-attests those three edges, which I
reviewed from disk, and I wrote that limitation into the attestation text itself so
it cannot be read as a re-attestation of the 126 open rows.

**Good news since step 8:** `spine-receipt-invalid` is **gone**.
`research/frontier-12-spine-audit.json` now exists (GPT 5.6 Sol independent
reader, top-100 cones, 60 scoped items) and is valid against current disk,
including after my edit — none of the three repaired items sits in a top-100 cone.
That was the third blocker in my step-8 report and it is closed.

### What must happen before step 9

1. Rejudge `lem-green-type-ii-boundary-identity` on both lanes
   (`--items`, since this is an Alpha-selected rejudge after the complete sweep).
2. `apply-judge-stamps` for the three repaired items once (1) lands.
3. Fill the 126 remaining `plan_reconciliation` reasons — **not** step-8 work,
   and the item that actually gates the level.

Step 8 itself is closed: every rejection in the sweep and in the rejudge is
adjudicated, every edit is licensed, and no nonfatal row mutated a byte.

## 8. The finding worth keeping

The step-8 rejudge existed to check three repairs. Two passed. The third drew a
single-lane rejection that was **correct**, and it was correct about something
neither lane had raised in 908 verdicts against the *previous* text of the same
item — because the previous text's defect (a false endpoint identity) was loud
enough to absorb both lanes' attention. Fixing the loud defect exposed the quiet
one underneath it.

That is an argument for the rejudge being a real gate rather than a formality, and
against reading a single-lane rejection as weaker evidence than a double. The lane
that caught it is the cross-family one, on an item where the same-family lane
passed with a reason that named every part of the proof **except** the part that
was wrong.
