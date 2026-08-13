## Alpha — step 8b, one rejudge rejection

Your three step-8 fatal repairs were rejudged. Two pass both lanes. One does not.

**`lem-green-type-ii-boundary-identity`** — `gpt-5.6-terra` PASS,
`deepseek-v4-pro` **REJECT**, against `item_sha256` `c25c40c5de27b7bd…`, which is
the current disk text you produced at step 8.

DeepSeek's reason, verbatim:

> Fact L3 overstates its cited source: `thm-fubini-over-a-region-between-continuous-graphs`
> only states vertical-graph regions y in [a,b], not Type II x-between-graphs
> regions. Hence step 3.1 lacks a cited horizontal Jordan-measurability/Fubini
> result.

DeepSeek is the run's only cross-family lane, and this is a **citation-fidelity**
objection of exactly the kind the house rule targets: a `[F#]` fact restating its
source with a changed domain. Do not weigh it by the fact that Terra passed.

### Adjudicate it

Open `thm-fubini-over-a-region-between-continuous-graphs` **on disk** and read
what it actually states. Then decide:

- **`confirmed_fatal`** (`defect_type: dependency_citation`) if L3 really does
  claim a horizontal-graph case the source does not license. Repair it — either
  by citing a result that does cover Type II regions, by proving the transpose
  case explicitly (the coordinate swap is elementary but must be *written*, not
  assumed), or by narrowing the Fact to what the source gives and supplying the
  missing step inline.
- **`confirmed_nonfatal`** if the gap is one a competent reader closes in 30
  seconds — but be careful here. "Swap the axes" is intuitive, yet the whole
  point of Type I/II is that the two cases are not literally the same statement,
  and the item's own structure treats them as separate lemmas. If the library
  states Fubini only for one orientation, an unwritten transpose is a real hole.
- **`false_positive`** if the cited theorem does cover both orientations and
  DeepSeek misread it. Say so with the exact text.

Record the row in `research/frontier-12-judge-adjudications.jsonl` with
`item_sha256` set to the **pre-edit** hash if you repair.

### Constraints

- **R1 still binds.** Only `confirmed_fatal` licenses an edit. The orchestrator
  re-runs `step8-guard` against the `pre-step8` baseline afterwards.
- If you repair, the item **rejudges again** — its `item_sha256` changes. Its
  unedited page-mates do not.
- **This item has now been touched twice** (step-6 authoring, step-8 repair). The
  twice-touched escalation is advisory, not blocking, but note it: if this third
  touch does not close the objection cleanly, say plainly whether the lemma is
  converging or whether the Type II case needs a different route.

### Also record, in the same pass

`impact-audit` reports one changed public interface from your step-8 repairs:
**`cor-potentials-differ-by-a-componentwise-constant` — 2 logical, 2 direct
citation consumers.** Record a disposition for each affected item in
`research/frontier-12-impact-audit.json`, confirming the consumers still hold
against the corrected statement. That corollary's old text was false as written,
so a consumer that leaned on the false direction is a real finding.

### Output

Append to `research/frontier-12-alpha-step8.md` or write
`research/frontier-12-alpha-step8b.md` — your call. State explicitly whether the
level is ready for step 9.
