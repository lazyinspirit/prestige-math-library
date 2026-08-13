## Alpha — step 9. A published item, rejected by BOTH lanes.

The D10 wiring edited two **published** items and forced a rejudge of both.

- `cex-ordered-field-not-archimedean` — **PASS / PASS**. Clean.
- `ex-rational-function-field-order` — **REJECT / REJECT**, and the objection is
  not about the wiring.

Both lanes independently:

> **Terra:** `[L2]` is not licensed by its citations: none states the
> eventual-sign theorem for real polynomials, finite real roots, or the
> leading-coefficient claim.
>
> **DeepSeek:** `[L2]` claims every nonzero real polynomial has finitely many
> roots and a fixed eventual sign equal to its leading coefficient's sign, but
> none of its citations state that.

**This is a pre-existing defect in published content.** The item was published,
carried a `verification.verified` published-audit stamp, and neither lane had
ever judged it — the D10 edit is what triggered the first rejudge, and it
surfaced this. Cross-family agreement makes it strong.

### Adjudicate it

Open the item and every id in its `deps` **on disk**. Does anything the library
publishes actually license `[L2]`? Candidates worth checking: the polynomial-root
count over an integral domain, sign behaviour of polynomials, and whatever
`polynomial-rings-and-roots` (order 52) and `the-field-of-fractions-and-localisation`
(53.2, this run) now provide. Note that 53.2 is newly available to this item —
its page's `requires` was extended for the D10 wiring.

Then:

- **`confirmed_fatal`** — repair it. The **owner-delegated published-dependency
  repair** applies: this is a published item whose Fact is unlicensed as written.
  Record the error, replacement, validation route and provenance change in
  `research/frontier-12-published-dependency-repairs.md`, make the smallest
  correction, never rename or remove an id, then run `impact-audit` from a
  dedicated snapshot and resolve every consumer. If the fix needs a new theorem,
  a debatable restatement, a deletion or a reading-order change, it is **not**
  "obvious" — stop and report it for the owner instead of applying a partial
  public repair.
- **`confirmed_nonfatal` / `false_positive`** — if the licensing is present and
  both lanes misread it, say exactly where, with the text.

Apply the same standard you used at 8b and 8c. At 8b you confirmed a citation
defect because no route existed from the item's declared facts; at 8c you refuted
one because the item discharged the hypothesis from its own `[given]` and wrote
the inference out. **Run that test here and state which way it comes out.**

### Context you need

- `cex-ordered-field-not-archimedean` (order 9) proves the eventual-sign
  positive-cone argument itself and passed both lanes. `ex-rational-function-field-order`
  (order 126) cites that counterexample in its `deps`. If the licensing lives
  there, say so — a Fact may cite it, since order 9 precedes 126.
- Both items had their stale `verification.verified` removed by the wiring, so
  `depcheck` currently fails `published-unaudited` on both. A Terra certifier is
  checking the wiring's correctness in parallel; **your job is the `[L2]`
  mathematics**, not the citation edit.

### Output

`research/frontier-12-alpha-step9.md`, plus an adjudication row in
`research/frontier-12-judge-adjudications.jsonl` for each lane. State explicitly
whether `ex-rational-function-field-order` is safe to carry a verification stamp,
or whether it must go to the owner unrepaired.
