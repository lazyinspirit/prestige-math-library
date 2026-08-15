## Step 9 — scope-denial sweep. LEAD ALPHA

Step 9 is a **sweep, not a pause** — it does not stop the build. Its job is to
make every scope denial in this run honest and recoverable before the step-10
report is written.

### Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- Step 8's fatal-only freeze is **over** for scope-denial repairs specifically,
  but any content edit you make here must be recorded and will be re-gated. Do
  not reopen judged mathematics on a stylistic impulse.
- Write `research/frontier-13-alpha-a-step9.md`.

### 1. Every declined result, re-tested against the rule

The 2026-08-11 rule retired "it needs a definition or lemma I'd have to write" as
a permitted disposition: **if a result can be built, it must be built.**
`deferred` / `out-of-scope` is reserved for material genuinely belonging to
another page's topic, or resting on a whole subject area the library has not
reached.

Across the seven `coverage.json` files this run declined roughly **90 results**
(the largest concentrations: batch 6 with 43 `deferred` + 20 `out-of-scope`,
batch 1 with 15, batch 4 with 12). Earlier steps already overturned several
declines as false — the Sylvester resultant decline rested on Milne needing a
determinant he never uses; a Q₈ decline rests on a claim that the quaternion page
is outside the closure when `def-quaternions` is published inside it.

For each declined row check: **is the stated reason true?** Verify the specific
claim, not its plausibility. Re-classify anything whose reason does not hold, and
either build it or record the honest reason.

### 2. The two items still owed, neither yet done

- **Batch 2's Q₈ nonsplitting witness.** The decline reason states the closure
  does not contain the quaternion page. That is false: `def-quaternions` is
  published on `rings-subrings-and-integral-domains`, inside order 68's closure,
  which page 68 already cites from. The decline's *first* reason holds and the
  C_{p²} witness covers the mathematics, so this is at minimum a **correction of
  a false reason**; page 68 sits at 23 items against 60, so authoring the Q₈
  items is available if they earn their place.
- **The Chernikov/Zhao section titles**, flagged by group C at round 1 and never
  routed to anyone.

### 3. Every `deferred` row names its licensing page

A deferral that names no destination is indistinguishable from a drop. Confirm
each names the page that will carry it, and that the named page exists in
`research/plan-spec.json` with that id.

### 4. `proved_here: false` records

Any item resting on the documented external fallback needs its structured
`external_dependency` record, exact source, failed in-library route, and the ‡
marking that makes it honest to readers. Verify each; there should be very few.

### Report

Declines re-tested, re-classifications with reasons, items built, rows corrected,
and anything you decided to leave declined **with the specific reason that
survives checking**. This feeds the step-10 report directly.
