# Run `frontier-12` — Alpha step 9: the `[L2]` objection to `ex-rational-function-field-order`

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** the paired REJECT / REJECT on the published
item `ex-rational-function-field-order`, surfaced by the D10 rejudge.

**Status: COMPLETE. Adjudication `confirmed_fatal` on BOTH lanes,
`defect_type: dependency_citation`. Repair applied under the owner-delegated
published-dependency repair; all gates clean except the one it cannot clear
itself.**

**Is the item safe to carry a verification stamp?** **Not yet, and not from me.**
The mathematics is now sound and every load-bearing Fact quotes a published
Statement — but *no author certifies its own repair*, so `verification.verified`
must be written by an independent Step-6 reader, not by Alpha. It does **not**
need to go to the owner unrepaired: the repair needed no new theorem, no new
item, no debatable restatement, no deletion and no reading-order change. §5.

---

## 1. The objection, and the 8b/8c test run explicitly

Both lanes, on context `ba83023774dc…`, independently:

> **Terra:** `[L2]` is not licensed by its citations: none states the
> eventual-sign theorem for real polynomials, finite real roots, or the
> leading-coefficient product rule. The fraction-field corollary that states the
> domain fact is not cited there either.
>
> **DeepSeek:** `[L2]` claims every nonzero real polynomial has finitely many
> roots and a fixed eventual sign equal to its leading coefficient sign, but none
> of the cited items states or implies this; step 1.1 therefore rests on an
> unsupported fact.

The dispatch asked me to run the standard I used at 8b and 8c. My step-8 line,
quoted from the 8c report:

> **NONFATAL** iff the mathematics is correct and complete in substance and the
> defect is in the local citation or justification, **including cases where the
> named route does not work but a correct one is immediate from the item's own
> facts.**

**It comes out the 8b way, not the 8c way.** At 8c the item discharged the
missing hypothesis from its own `[given]` and wrote the inference out forty lines
below. Here `[given]` supplies only $\mathbb R(t)$ as fractions of $\mathbb R[t]$,
the equality criterion $p/q=p'/q'\iff pq'=p'q$, the set $P$, and the notation
$\operatorname{lc}$. It supplies **none** of the four propositions `[L2]` asserts,
and the Verification does not write the eventual-sign inference out anywhere —
old step 1.1 simply asserted "the sign of that value is the sign of
$\operatorname{lc}(p)\operatorname{lc}(q)$" and pointed at `[L2, L3]`.

At 8b I confirmed a citation defect because **no route existed from the item's
declared facts** and the reader had to go find an item the page never mentions.
That is exactly the situation here, and worse for one conjunct.

## 2. What the deps actually license, item by item, read on disk

I opened every id in `deps` and every plausible candidate the dispatch named.

| conjunct of `[L2]` | licensed? | by what |
|---|---|---|
| (a) a nonzero real polynomial has finitely many real roots | **not by a cited item.** The library *does* state it — `thm-root-bound-for-polynomials-over-a-domain`, "a nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots" (page 52) — but that item is in neither `[L2]` nor `deps`. | — |
| (b) beyond them, values carry the constant sign of the leading coefficient | **not by anything the library publishes, anywhere.** See §3. | — |
| (c) $\mathbb R[t]$ is an integral domain | **yes, by an item already in `deps`** — `cor-rational-function-field-as-a-fraction-field` (this run, page 53.2): "For every field $F$, the polynomial ring $F[t]$ is an integral domain…" `[L2]` did not cite it. Terra spotted this precisely. | miscited |
| (d) $\operatorname{lc}(pq)=\operatorname{lc}(p)\operatorname{lc}(q)$, product of nonzero polynomials nonzero | **yes, by an uncited item** — `thm-polynomial-degree-of-a-product-over-a-domain` (page 52) states exactly this, both clauses. Not in `[L2]`, not in `deps`. | miscited |

The three actually-cited ids carry none of it. `cex-ordered-field-not-archimedean`
refutes "every ordered field is Archimedean"; `thm-reals-ordered-field` says
$\mathbb R$ is a totally ordered field; `def-field` defines a field.

**The dispatch asked specifically whether the licensing lives in the order-9
counterexample, since a Fact may cite it.** It does not. That item's *proof step
1.1* does derive the eventual sign — for $p$, for $q$, and for the quotient
$f=p/q$ — but that is a step inside another item's proof, not its proposition,
and CLAUDE.md §"Natural mathematical voice and citation fidelity" requires a Fact
to state the cited definition or theorem itself. Citing an item's internal step
as though it were its statement is the very move both lanes refused. And it would
rescue only conjunct (b): (a) and (d) appear nowhere in that item at all.

## 3. A second defect in the same sentence, and one reading under which it is false

"…and beyond all of them its values have the constant sign of its leading
coefficient." On the intended reading — *to the right of every root* — this is
true, and it is how old step 1.1 used it ("a real $X$ beyond which…"). On the
other natural reading — *off the root set* — it is **false**: $p(t)=t$ has
$\operatorname{lc}(p)=1>0$ and $p(x)<0$ for every $x<0$. I did not weight this
heavily in the fatality call, which stands on the licensing failure alone, but it
is why the repair states the threshold explicitly rather than reproducing the
phrase.

## 4. Falsification pass

I tried to refute my own `confirmed_fatal` three ways.

1. **"The counterexample is a legitimate cite; the example is its continuation."**
   Fails: a proof step is not a proposition, and even granting it, (a) and (d)
   remain unlicensed.
2. **"The 30-second rule makes it nonfatal."** Fails: the 30-second rule covers a
   logical gap *between proof steps* that a competent reader closes from what is
   there. This gap is not between steps — a Fact asserts four theorems and names
   three items that state none of them. A reader cannot close (d) from `def-field`
   in thirty seconds; they must go find an item the page never names. And (b)
   cannot be closed from this library at all, only from outside knowledge.
3. **"A previous judge passed it."** Fails: no lane had ever judged this item.
   The D10 edit triggered its first rejudge. Cross-family agreement,
   independently reached, with Terra naming the exact missing citation.

Both lanes are right, and the finding is a genuine pre-existing defect in
published content — not an artefact of the wiring.

## 5. The repair, and why it is inside the delegation rather than an owner escalation

Full record, with the error, the replacement, the validation route, the
provenance decision and the gate table:
**`research/frontier-12-published-dependency-repairs.md` §R1.**

In brief:

- `[L2]` re-cited so that every clause quotes a published Statement:
  `def-polynomial-degree-leading-coefficient-and-monic`,
  `cor-rational-function-field-as-a-fraction-field`,
  `thm-polynomial-degree-of-a-product-over-a-domain`, plus
  `thm-reals-ordered-field` / `def-field` for "$\mathbb R$ is a field".
- New `[L6]` for the absolute value (`def-abs-value`, `lem-of-abs-value`).
- Conjunct (b) **stops being a Fact and becomes a proved step** — a new step 1.1
  deriving the eventual sign from the leading-term bound, with an explicit
  threshold $X_p$.
- That threshold yields "$p(x)\ne0$ for $x>X_p$" for free, so conjunct (a) is no
  longer needed and `thm-root-bound-for-polynomials-over-a-domain` was
  deliberately **not** added — the smallest correction, not the largest.
- `deps` gains four ids, loses none. No id renamed or removed.

**The four tripwires that would have made this an owner escalation, checked one
by one:**

| tripwire | status |
|---|---|
| needs a **new theorem** | **No.** No new item. The eventual sign is derived inline in five lines of ordered-field arithmetic — delegation route (b), written out in full in the repair record. The natural alternative *would* have been a new lemma on page 52, which would have been a new item **and** a reading-order change; I did not take it, precisely because that is owner territory. |
| needs a **debatable restatement** | **No.** Every new clause quotes a published Statement; the derivation is elementary and case-complete ($m=0$; $m\ge1$ with $a>0$ and $a<0$). |
| needs a **deletion** | **No.** Nothing removed — not an id, not a dep, not a step, not a conclusion. |
| needs a **reading-order change** | **No.** All four new deps live on pages 9 and 52, inside the `requires` closure of page 126 and strictly earlier in reading order. `fwdcheck` OK. |
| leaves an **impact queue open** | **No.** `impact-audit` exits 0; both consumers dispositioned. §6. |

Nothing in the Example section, the title, the Remarks or `sources.references`
changed, so the reader-facing statement of the item is exactly what it was.
Provenance is unchanged and deliberately so: `statement: literature-derived`
(nothing in the statement moved), `proof: ai-generated` (the new step is
AI-written, and uncertainty must not fall toward a sourced label).

## 6. Gates and impact

Snapshots `pre-step9-l2-repair` (taken before the first keystroke) →
`after-step9-l2-repair-final`, both in `research/frontier-12-touches.json`.

| gate | result |
|---|---|
| `precheck.mts` | **PASS**, `direct`. No REPAIR output: my stratification is canonical as written. |
| `depcheck.mjs` | **1 error** — `published-unaudited` on this item, and nothing else. `cited-not-in-deps` does not fire on it. |
| `fwdcheck.mjs` · `extcheck.mjs` · `citecheck.mjs` · `rendercheck.mjs` · `prosecheck.mjs` | **OK** |
| `impact-audit.mjs` | **exit 0** against `research/frontier-12-step9-impact.json` |

Impact: 1 changed interface, 2 affected items, queue closed.

- `cex-q-not-dense-in-an-ordered-field` — **still-licensed**. Its `[L2]` draws
  exactly "$0<1/t$" and "$1/t<q\cdot1$ for every rational $q>0$" from this item;
  both survive the repair verbatim, as steps 3.2 and 4.1 (were 2.2 and 3.1).
- `ex-cauchy-complete-not-complete-field` — **not-load-bearing**. A contrast
  mention in a Remark; no Fact cites this item and it is not in that item's
  `deps`.

Adjudication rows appended to `research/frontier-12-judge-adjudications.jsonl`,
one per lane, against the **pre-edit** `item_sha256`
`3f0f776e1e0a22ad35ee8fc663d9fea8c8449b3bad6e5fc09b6a28bdafeae7e6` as R1's
mechanism requires. Post-repair hash:
`ab3f55bfd0a7fae27b9077f4acc6b832e4845022a2912d05df6b9a289edf0c9f`.

## 7. What the orchestrator owes next

1. **An independent certifier (Sol, read-only, Step-6 reader role) on this
   repair.** I have deliberately **not** written `verification.verified`; no
   author certifies its own repair. Until a reader certifies it, `depcheck`'s
   `published-unaudited` on this item is correct and should not be waived. The
   stamp to write, once certified, is `verification.verified` with
   `scope: published-dependency-repair` and `delegated_by: owner`.
2. **A paired rejudge of the final text**, `--items ex-rational-function-field-order`,
   both lanes. Its own `item_sha256` changed, so it rejudges regardless; its
   page-mates did not change and are spared under the owner's 2026-08-06 reading.
3. **Nothing else.** The other D10 item, `cex-ordered-field-not-archimedean`,
   passed both lanes and has since been stamped by the parallel Terra certifier;
   I did not touch it.

## 8. One observation outside my scope, recorded not acted on

`depcheck` warns `[cited-not-in-deps]` on `cex-ordered-field-not-archimedean`:
its `**Given:**` cites `cor-rational-function-field-as-a-fraction-field`, which
the D10 wiring put in `forward_refs` rather than `deps`. That is by design for a
load-bearing forward reference and `fwdcheck` passes, so it is a warning about
where forward references live, not a defect — but it belongs to the wiring
certifier's report, not mine, and I left it alone.

## 9. For the step-10 fatal-error report

- **Defect type:** incorrect dependency citation.
- **Location:** Facts/dependencies — Fact `[L2]` of
  `items/ex-rational-function-field-order.md`, load-bearing for the item's
  central computation rule.
- **Pre-existing in published content**, not introduced by this run; surfaced
  because the D10 wiring forced the item's first-ever paired judging.
- **Disposition:** repaired under the owner-delegated published-dependency
  repair; impact closed; **awaiting independent certification and a paired
  rejudge**, and therefore **not** yet cleared to carry a verification stamp.
