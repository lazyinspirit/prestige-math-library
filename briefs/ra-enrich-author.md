# ra-enrich-01 phase 1b — author the seven approved items

**You are an expert of real analysis.**

The owner approved `research/ra-enrich-01-PLAN.md` on 2026-08-14 with the words
*"build the seven items, judge, audit, then publish."* You do the **build** and
nothing after it. Judging, auditing and publishing belong to other agents and to
the owner, and you are excluded from all three because you are the author:
authors never judge, and no author certifies its own work.

## No permission prompts, ever

Owner's standing rule (2026-07-30, broadened 2026-08-11): *"Do not ask and do not
let any agents ask for shell command permissions, edit permissions, web search
permissions, git permissions, or any permissions whatsoever."* No segment of an
`&&` chain may prompt either. You already hold every permission you need. If
something genuinely cannot be done without new authority, **record a blocker** —
that is the escape hatch, never a prompt.

## 1. What to author — exactly seven items, no more and no fewer

`research/ra-enrich-01-PLAN.md` Table A is the specification, and
`research/ra-enrich-01-placement.json` is its machine-readable twin. Author
exactly these ids:

1. `def-taylor-and-maclaurin-series`
2. `thm-taylor-series-representation-by-remainder`
3. `cex-smooth-function-not-equal-to-its-maclaurin-series`
4. `thm-euler-mascheroni-constant-and-harmonic-asymptotic`
5. `def-radian-angle-by-unit-circle-arc-length`
6. `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`
7. `thm-standard-maclaurin-expansions`

**Author them in that order** — it is dependency order.
`def-taylor-and-maclaurin-series` is a dependency of items 2, 3 and 7, and
`def-radian-angle-by-unit-circle-arc-length` is a dependency of item 6.

The plan gives each item its exact statement, its `deps` with the published
status of each, its source backing, and the gap it closes. **Do not restate a
theorem more strongly than the plan does, and do not add an eighth item.** If
authoring reveals that a planned statement is false or unprovable from the
declared dependencies, stop on that item, record it, and author the rest — do not
silently weaken or strengthen it.

## 2. Status and placement — read this before writing frontmatter

Every item is `status: draft`. **Do not edit any file under `library/`**, do not
edit `research/plan-spec.json`, and do not set any status to `published`.

A published page may not list a draft item (`depcheck.mjs`,
`draft-on-published-page`), so the placement recorded in `placement.json` is
applied at publication by the owner, not by you. Your output is seven files under
`items/` and nothing else there.

## 3. The five authorability controls the plan committed to

These came out of the source research and are binding:

- **Provenance is `statement: literature-derived`** for all seven — none is
  AI-generated, and none may change a source hypothesis, domain, endpoint or
  direction. Expected `proof: ai-altered`: adapt the cited proof to the exact
  published dependency graph and record why in your report.
- **`thm-standard-maclaurin-expansions` must not claim generalized-binomial
  endpoint behaviour.** Only $|x|<1$ is authorised for the $(1+x)^\alpha$ family.
- **`thm-taylor-series-representation-by-remainder` must keep the $M_{n+1}$ index
  and the compact interval explicit.** No hidden global derivative bound.
- **`thm-analytic-sine-cosine-agree-with-right-triangle-ratios` is acute-angle
  only.** Axis and quadrantal endpoints are unit-circle values, not nondegenerate
  right triangles; note that rather than forcing an undefined side-ratio
  convention.
- **`cex-smooth-function-not-equal-to-its-maclaurin-series` is a B-page leaf** and
  must not become a dependency target for later A-page mathematics.

## 4. House standard

`SCHEMA.md` is the item contract. `items/lem-cauchy-bounded.md` is the approved
exemplar of proof style. `briefs/authoring.md` carries the house authoring
discipline — read it for proof layout, the stratified numbering, and the defect
classes this library ships. In particular:

- **Citation fidelity.** In every `[F#]`/`[A#]`/`[L#]` fact, state the cited
  definition or theorem itself — quoted exactly where practical, otherwise the
  smallest faithful shortening, with no changed domain, quantifier, hypothesis,
  direction or conclusion and no invented converse. Never replace a proposition
  with a synthetic summary of what it is "for".
- **Natural mathematical voice.** No AI-sounding labels or interpretive filler.
- **Boundary pass.** Empty, zero, one, degenerate, endpoint, nonempty-choice, and
  both directions of every iff. The representation theorem is an iff; prove both
  directions.
- **Self-contained scope.** Every step uses an explicit fact, an earlier step, a
  hypothesis, or elementary algebra. If a proof will not close honestly against
  the published dependencies, say so rather than patching it with an overstated
  citation.
- **`sources.references`** needs a real title and a working URL for each.
- **No applied `\iota(n)`** around a natural number.
- Open every published dependency you cite before citing it. They are listed
  per-item in the plan and every one is `status: published` today.

## 5. Gates you run

```
node tools/tsx-run.mjs tools/precheck.mts items/<each-new-file>.md
```

Adopt the printed canonical stratification into the file and re-run until clean —
the repo stores the strictly stratified form, so a step citing phase-k steps sits
in phase k+1. Then record `verification.precheck: pass`.

Leave `verification.judge` and `verification.audited` **absent**. They are not
yours to write, and writing them would forge a review that has not happened.

Run no other gate: no `depcheck`, no `validate-plan`, no level-build gate.

## 6. Report and stop

Write `research/ra-enrich-01-author-report.md`: each item, its provenance
rationale, the proof route you took and why it differs from the source if it
does, every boundary case you disposed of, and any place the plan's statement had
to be adjusted (with the reason). Then stop — no judging, no auditing, no
publishing, no page edits.
