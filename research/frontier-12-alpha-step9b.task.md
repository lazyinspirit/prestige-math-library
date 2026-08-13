## Alpha — step 9b. Two closures, then the level is done.

### 1. One new Terra rejection on your repaired `ex-rational-function-field-order`

Your `[L2]` repair worked on the cross-family lane: **DeepSeek flipped REJECT →
PASS**, verifying "the polynomial eventual-sign computation, representative
independence, and the orders on t and 1/t".

**Terra now rejects, on something new** (`item_sha256` `f112c01a2df3…`):

> Step 3.1 claims its leading-coefficient test compares any two rational
> functions, but for equal functions their difference has zero numerator, whose
> leading coefficient is undefined.

This is the *fix the loud defect, expose the quiet one* pattern again — the same
shape as `lem-green-type-ii-boundary-identity` at 8b/8c.

**Adjudicate it with the same test you have applied three times now.** Does the
item license the degenerate case from its own declared facts, or not?

- If step 3.1's comparison is stated for **any** two rational functions and `f = g`
  makes `lc(0)` undefined, the claim is overstated as written — that is
  `confirmed_fatal`, and the natural repair is to state the test on `f ≠ g` and
  handle equality separately (trichotomy normally does exactly that, so check
  whether the item already does it elsewhere and step 3.1 merely overreaches in
  its phrasing).
- If equality is already excluded upstream — by the positive cone's definition,
  by `P` requiring `f ≠ 0`, or by an earlier step — then Terra is reading step 3.1
  out of its context and this is `confirmed_nonfatal` or `false_positive`. Say
  exactly where the exclusion lives.

Remember what the item is: a published Example whose *own* conclusion was never
in doubt. The 8c lesson applies — a missing bracket is not a missing hypothesis.
But the 8b lesson applies too — if `lc(0)` genuinely appears on a path the text
allows, that is a real hole in freshly written text on a published page.

Record the row, repair only under `confirmed_fatal`, and note it in
`research/frontier-12-published-dependency-repairs.md` if you edit.

### 2. Impact dispositions — 11 affected items, required before the level closes

`impact-audit --from after-step8` reports **2 changed public interfaces, 11
affected items**:

| changed item | consumers |
|---|---|
| `cex-ordered-field-not-archimedean` | 2 logical, 10 direct citation |
| `ex-rational-function-field-order` | 1 logical, 2 direct citation |

Record a disposition for each in `research/frontier-12-impact-audit.json`.

Most of these should be trivial: the counterexample's change was **a citation
addition only** — a `forward_refs` entry and a parenthetical link in `Given:` —
with its Statement, its cone `P`, and its proof untouched. Its 10 direct-citation
consumers cite a Statement that did not move. Say so if true.

`ex-rational-function-field-order`'s change is more substantive: `[L2]` was
re-cited and the eventual-sign claim became a proved step. Check its 2 consumers
against the corrected text specifically — a consumer that leaned on the old,
unlicensed `[L2]` is a real finding.

### Then the level is closed

After these two, `depcheck` should have no `published-unaudited` error once a
certifier stamps the repaired item (one is running independently — that is not
your job, and you may not stamp your own repair).

State explicitly in `research/frontier-12-alpha-step9b.md` whether the level is
ready for the step-10 owner pause, and list anything you are deliberately leaving
for the owner rather than deciding yourself.
