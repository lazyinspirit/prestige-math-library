## Batch 4 — step 5, author your batch

You scaffolded these pages and Alpha cleared them. **Author every item on them
now.** 61 items across 4 pages.

| order | kind | page | category | items |
|---|---|---|---|---|
| 183 | A | `pi-the-equivalent-characterizations` | real-analysis | **14** |
| 184 | B | `pi-the-equivalent-characterizations-examples` | real-analysis | **7** |
| 241 | A | `line-integrals-and-the-gradient-theorem` | real-analysis | **31** |
| 242 | B | `line-integrals-and-the-gradient-theorem-examples` | real-analysis | **9** |

Write `items/<id>.md` for every item listed in `research/plan-spec.json` for
these pages — the spec is now spliced and is the authority on what exists — and
`library/<category>/<page>.md` for each page. Everything `status: draft`.

### Your own record is the design you author to

- `research/frontier-12-batch-4.notes.md` — your provenance rationales,
  convention decisions and proof-obligation reasoning.
- `research/frontier-12-batch-4.proof-contracts.json` — the proof design you
  committed to, item by item. Author to it; where the written proof departs from
  the scaffolded strategy, say so in your report and update the contract.
- `research/frontier-12-alpha-step3-scaffold-review.md` and
  `research/frontier-12-alpha-recheck.md` — Alpha's verdicts on your pair,
  including anything it required you to add. Material added in a fix round is
  authored to the same standard as the rest, not bolted on.

### What will be checked, so write for it

Independent readers who did not author your content read **every proof step and
every dependency citation** at step 6, then two adversarial judges read the whole
pair at step 7. What they look for:

- a Statement or **title** asserting more than the proof gives — fatal, and the
  judges read Statements and cannot see a false title;
- a `[F#]`/`[A#]`/`[L#]` fact that restates its source inaccurately — changed
  domain, quantifier, hypothesis, direction or conclusion, or an invented
  converse. This run has already caught one at scaffold stage: a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`;
- a missing hypothesis — `char != 2`, ordered field, star-shaped rather than
  merely connected, a smallness condition, pairwise versus mutual independence;
- a boundary case not disposed of, or one direction of an iff left unproved.

Your proof contract is a promise about your text. `proof-contract.mjs --strict`
can check that a quote is a substring of its section, but **not** that the quote
supports the fact — on the previous run it passed 206/206 over rows whose
evidence was an instruction. Alpha reads the contracts against your prose.
