# Level-8 published-item amendments — prepared for owner audit

**Status: PREPARED, NOT APPLIED.** The changes live on the branch
`level8-published-amendments`, commit `cd42bd0`. `main` is untouched.

## Why these exist

Level 8 adds general topological spaces, series, and uniform continuity of maps
of metric spaces. Four **already published and audited** items contain claims of
the form "this library does not develop X". Every one was true when written, and
every one becomes false at the instant level 8 goes live.

No mechanical gate can catch this class. The item was correct at authoring time;
it decays when a later level lands. The only instrument that finds it is a sweep
of the published corpus for scope-denial sentences, which is what Alpha-8 ran
over all 503 published items at step 9.

## Sequencing, and why it matters

**Merge this branch only in the same commit that flips level 8 to `published`.**

The live site reads this directory. Applying the amendments early would put text
on the public page describing pages nobody can see, and would strand the owner's
`audited` field on rewritten prose. Applying them late would leave four false
claims live. There is exactly one correct instant, and it is the publish flip.

## The gate enforces the audit

`depcheck` **fails on the branch**, with exactly four errors:

```
[published-unaudited] items/def-equivalent-metrics.md
[published-unaudited] items/def-metric-continuity.md
[published-unaudited] items/rem-r-native-topology-scope.md
[published-unaudited] items/rem-real-exponents-deferred.md
```

`verification.audited` was cleared on all four, because the owner audited text
that no longer exists. The branch therefore cannot be merged and pass the gates
until the owner re-audits these four items and re-sets the field. That is the
intended behaviour, not a defect to work around.

All four were re-judged on their final text after their stale judge blocks were
deleted: `z-ai/glm-5.2`, `keep: true`, 2026-07-27. `precheck` 492 checked / 0
failing; `fwdcheck`, `extcheck`, `citecheck` clean.

---

## 1. `rem-r-native-topology-scope` (page `topology-of-r`) — MANDATORY

Two passages. The remark said three times that this library develops no general
topological spaces.

**Passage 1, intro.** Old:

> **It asserts nothing about topological spaces in general: this library does not
> develop them, and no claim about them is made or needed here.**

New:

> **It asserts nothing about topological spaces in general: they are developed
> later in this library, on the page of [[def-topological-space]] and
> [[def-metrizable-space]], where the metric development becomes a special case,
> but no claim about them is made or needed here and nothing below rests on
> them.**

**Passage 2, final paragraph.** Old:

> This library develops metric spaces but no general topological spaces, proves
> nothing about the latter, and the reader should take no assertion about them
> from this page.

New:

> This library takes those questions up on a later page, where
> [[def-metrizable-space]] identifies the metric development, this page's
> topology included, as a special case of the general one; but nothing on
> **this** page proves anything about general spaces, and the reader should take
> no assertion about them from here.

The closing sentence the remark was right about is preserved verbatim: its four
order-dependent results are licensed outside ℝ by nothing on that page, and that
is checkable line by line.

**Mechanism.** `def-topological-space` and `def-metrizable-space` are added to
`forward_refs`. The item is `kind: remark`, a consequence kind, so a
load-bearing forward reference is legal on it and `fwdcheck` passes. The item
was already forward-dependent (`direct`) via
`cex-closed-bounded-in-q-not-compact`, so its rendered marking does not change.

## 2. `rem-real-exponents-deferred` (page `roots-and-rational-powers`) — MANDATORY

Old:

> …but no continuity, no uniform continuity, no series and no derivative is
> developed **anywhere in it**…

Level 8 falsifies two of the four outright: `def-series` on
`series-and-nonnegative-tests` and `def-metric-uniform-continuity` on
`completeness-and-uniform-continuity`. New:

> …but no continuity, no uniform continuity, no series and no derivative is
> **available at this point in its reading order**…

which is all the surrounding argument ever needed: the point is that the proof
cannot use machinery that does not exist *yet*, not that it never exists.

**Extra change needing an explicit decision.** This item carried a
`verification.verified` block (`claude-opus-5`, `certify`, `scope: page`,
`delegated_by: owner`, 2026-07-26) certifying text that has now changed. It was
removed, on the same principle that governs the judge block: a stale
certification claims a pass on text nobody read. **If the owner wants that
certification restored rather than re-obtained, say so** — it is the only place
in this set where a non-owner verification tier was discarded.

## 3. `def-equivalent-metrics` (page `metric-spaces`) — MANDATORY

Old:

> Uniform continuity is not given a definition of its own in this library yet, so
> the condition is written out in full above; when it is needed it is quoted from
> here.

New:

> Uniform continuity has no definition of its own at this point in the reading
> order, so the condition is written out in full above; a later page defines it,
> and until then this write-out is what earlier pages quote.

## 4. `def-metric-continuity` (page `metric-spaces`) — MANDATORY

Old:

> …a strictly stronger condition, uniform continuity; this library does not define
> it here, and where it is needed it is written out in full
> ([[def-equivalent-metrics]]).

New:

> …a strictly stronger condition, uniform continuity; it is defined on a later
> page of this library, and at this point in the reading order it is written out
> in full where needed ([[def-equivalent-metrics]]).

### A mechanism note on 3 and 4, which changed the drafted fix

Alpha-8 proposed naming `[[def-metric-uniform-continuity]]` in both. **That would
have hard-errored the gate.** Both items are `kind: definition`, and the stale
sentence sits in the Definition body, not in `## Remarks`. `fwdcheck` classifies
everything outside `## Remarks` as load bearing, and `forward-on-spine` is a hard
error: a load-bearing forward reference on a definition, lemma, proposition or
theorem is forbidden, because the spine of the library must stay strictly
ordered.

Neither amendment names the later item. The fact is stated without a link, which
is both legal and sufficient. Adding a Remarks bullet with the link would also be
legal, and is available if the owner wants the pointer to be clickable.

---

## 5. `cex-topologically-not-uniformly-equivalent` — OPTIONAL, not prepared

> Cauchy sequences in a metric space are not defined in this library yet, so that
> comparison is orientation only and belongs to the completeness page.

Borderline. The word "yet" and the explicit pointer to the completeness page do
real work, so the sentence is not false in the way the four above are. The clause
sits in `## Remarks`, so a link to `def-cauchy-in-metric` would be
orientation-only and legal. Not prepared, because it costs a fifth re-audit for a
sentence that is already honest.

## 6. `def-metric-topology` — NO CHANGE

> the abstract notion of a topological space … is not introduced in this library
> yet

Reading-order-relative, and the topology page does come later. Acceptable as-is.
Listed only so the sweep's coverage is on record.

---

## What the sweep did not cover

Alpha-8 swept for scope-denial phrasing. Statements of the form "no item states
X" or "the library has no Y", where X or Y is now supplied by level 8, would be
caught by the same pattern; statements that *assume* absence without saying so
would not. If a future level adds material that an existing published item
silently relies on being absent, this sweep will not find it.

Every level from here on should end with the same sweep. The cost is one agent
pass; the alternative is publishing a page that contradicts a published one.
