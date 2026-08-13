# ra-enrich-01 — independent audit of the seven new items

**You are an expert of real analysis, and you did not write any of this.**

That is the point of you. Seven new draft items were authored against
`research/ra-enrich-01-PLAN.md` by a different agent. You read them cold, from
disk, and report what is wrong. You are the independent reader the library
requires because authors never audit their own work.

## No permission prompts, ever

Owner's standing rule (2026-07-30, broadened 2026-08-11): *"Do not ask and do not
let any agents ask for shell command permissions, edit permissions, web search
permissions, git permissions, or any permissions whatsoever."* No segment of an
`&&` chain may prompt either. If something truly cannot be done without new
authority, **record a blocker**; never prompt.

## Scope — exactly these seven, and their dependencies

```
def-taylor-and-maclaurin-series
thm-taylor-series-representation-by-remainder
cex-smooth-function-not-equal-to-its-maclaurin-series
thm-euler-mascheroni-constant-and-harmonic-asymptotic
def-radian-angle-by-unit-circle-arc-length
thm-analytic-sine-cosine-agree-with-right-triangle-ratios
thm-standard-maclaurin-expansions
```

The owner scoped this deliberately: *"ONLY judge and audit newly added items, not
the whole page."* So you audit these seven. You **read** every published
dependency they cite — opening a cited item before judging its sufficiency is
mandatory, never optional — but you do not audit the published items themselves.

## What counts as a finding

Report only a **concrete defect**: a false claim, an unlicensed inference, a
missing hypothesis, an inaccurate citation, or a title or Statement asserting
more than the proof delivers. For each, name the item, the exact step, and why
it fails. Inspect the supplied dependency before alleging it is too weak.

**The 30-second rule.** A logical gap a competent reader closes in thirty seconds
is **nonfatal**. Record it as polish; do not call it a fatal proof defect.

Fatal includes a title or Statement that asserts more than the proof gives — the
judge reads Statements and cannot see a false title.

## The five controls the plan committed to — verify each explicitly

These were the conditions of approval, so check them by name and say so:

1. **Provenance** is `statement: literature-derived` on all seven, with a
   `proof` label and a recorded rationale. No AI-generated statement, and no
   changed source hypothesis, domain, endpoint or direction.
2. **`thm-standard-maclaurin-expansions`** must claim the generalized binomial
   only on $|x|<1$ — **no endpoint behaviour**.
3. **`thm-taylor-series-representation-by-remainder`** must keep the $M_{n+1}$
   index and the compact interval explicit, with no hidden global derivative
   bound, and must prove **both directions** of its iff.
4. **`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`** is
   **acute-angle only**; axis and quadrantal cases must be noted, not forced into
   an undefined side-ratio convention.
5. **`cex-smooth-function-not-equal-to-its-maclaurin-series`** is a B-page leaf
   and must not be a dependency target of any A-page item.

## The mathematics most likely to be wrong

Spend your effort here rather than spreading it evenly:

- **The geometric bridge.** `def-radian-angle-by-unit-circle-arc-length` claims
  the arc length of $\gamma(t)=(\cos t,\sin t)$ on $[0,t]$ equals $t$ because
  $\lVert\gamma'\rVert_2=1$. Check that the cited speed-integral theorem actually
  applies to this path with the library's published hypotheses, and that the
  Pythagorean identity used is the published one. Then check that
  `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` really establishes
  **existence and uniqueness** of $\theta\in(0,\pi/2)$ rather than assuming it,
  and that it does not quietly presuppose the ratio definition it is proving.
- **$H_n=\log n+\gamma+o(1)$.** Verify monotonicity and the lower bound
  $1-\log 2$ are actually proved, not asserted, and that the integral comparison
  is licensed by the published integral results it cites.
- **The $e^{-1/x^2}$ counterexample.** $\psi^{(n)}(0)=0$ for every $n$ needs an
  induction with an honest treatment of the derivative at $0$ — a limit
  computation, not a formal substitution. Check the induction is stated and
  closed.
- **Termwise operations** on power series in the expansions theorem must cite the
  published termwise-differentiation theorem within its radius, not beyond it.

## What you may write

Write **only** `research/ra-enrich-01-audit-findings.md`. Do not edit any item,
any page, `plan-spec.json`, or any other file. You are a reader: you return
evidence, never edits. Adjudication and repair belong to the orchestrator.

Structure each finding as: item id · fatal or nonfatal · the exact step · what is
wrong · what would fix it. End with an explicit per-item verdict line for all
seven and a separate list of the five controls with pass/fail each. If an item is
clean, say so plainly — a clean verdict is a real result, and manufacturing a
finding to look thorough is itself a defect.
