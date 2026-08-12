# Authoring brief for run `frontier-11` (step 5)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a compound command
> as a whole, so **no segment of an `&&` chain may raise a prompt either** —
> prefer one command per invocation and absolute paths over `cd`. Pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. If an indispensable operation has no escalation-free form, **record a
> blocker** in your notes; that is the escape hatch, never a prompt.

You are the **same Beta that scaffolded your batch on run `frontier-11`**. You
now author every item you scaffolded. This is the ownership rule (owner,
2026-07-31): the Beta that scaffolded a batch authors it, and is excluded at
step 6 from auditing anything it wrote.

## Read first

1. `briefs/authoring.md` — **your base contract**, in full. It wins on method.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over both.
3. `items/lem-cauchy-bounded.md` — the approved house-style exemplar. Match its
   voice, its density, its citation style.
4. Your `research/frontier-11-batch-1.pages.json` — what you are authoring.
5. Your `research/frontier-11-batch-1.notes.md` and `.proof-contracts.json` —
   your own reasoning, including the boundary passes you promised.
6. `research/frontier-11-alpha-step3-scaffold-review.md` and
   `research/frontier-11-alpha-recheck.md` — the sections for your pairs. Alpha's
   findings are why several of your items exist; author them to that standard.

## The scaffold is settled — author it, do not redesign it

All nine pairs are `sufficient` on breadth and depth and the spec is spliced.
`research/plan-spec.json` is the machine authority for ids, order and `requires`.
If authoring reveals that a scaffolded item is **false or unprovable as stated**,
do not quietly reshape the page: fix it if the fix is local and honest, and
record what you changed and why in your notes. A claim you cannot close honestly
gets narrowed or dropped with a written reason — never patched with an overstated
dependency.

## Rules that decide whether your text passes

- **Every step uses an explicit fact, an earlier step, a given hypothesis, or
  elementary algebra.** Numbered steps; a stated input map covering every step
  exactly once; the proof contract you already began must end up true of the text.
- **Citation fidelity.** In every `[F#]`/`[A#]`/`[L#]`, state the cited
  definition or theorem itself — quote it when practical, otherwise the smallest
  faithful shortening. No changed domain, quantifier, hypothesis, direction or
  conclusion; no invented converse; never a synthetic summary of what it is
  "for". If a dependency looks insufficient, add inline steps or reconsider the
  claim — do not inflate the restatement.
- **Natural mathematical voice.** No AI-sounding labels or interpretive filler
  ("Null definition:", "the key bridge says").
- **Boundaries.** Empty objects, zero/one indices, degenerate parameters,
  endpoints, nonempty choices, and *both* directions of every iff.
- **Provenance on every mathematical-content item**: `provenance.statement` and
  `provenance.proof`, with the rationale in your notes. No `ai-generated`
  statement or construction may be load-bearing.
- **B pages are leaves.** Nothing may depend on an item homed on an examples
  page. This cost batch 2 four errors at step 4 — cite the A-page theorem and
  prove the specialisation inline.
- **Notation:** never the canonical embedding applied to a natural number
  (`\iota(n)`, `\iota(0)`, `\iota(k!)`). Write the number. Bare `\iota` naming a
  basis inclusion in a universal property is fine.
- **Page summaries:** exactly two nonempty paragraphs, each under 150 words.
  Paragraph 1: background, naming definitions and results from declared
  dependencies that the development uses. Paragraph 2: the main definitions and
  theorems developed here and their logical progression. No counts, no
  self-ranking, no survey claims about other pages. **B pages have no authored
  summary body at all.**
- Author as `status: draft`, `origin: session`. Never fabricate a scraped source;
  use `references`.

## Gates you must leave green

```
node tools/tsx-run.mjs tools/precheck.mts <your item files>
node tools/validate-plan.mjs research/plan-spec.json
```

On a REPAIR from precheck, adopt the printed canonical stratification into the
file and re-run until clean — the repo stores the strictly stratified form, so a
step citing phase-k steps sits in phase k+1. Record `verification.precheck: pass`.

**Do not run `tools/gates.mjs`** — its `spawnSync` of `node` is refused in this
sandbox before any child runs. The orchestrator runs the wrapper and is the gate
of record.

## BATCH 1 ONLY — the four rewritten ℂ items

`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus` and
`lem-complex-conjugation-and-modulus-laws` are **currently published items** that
the owner has approved rewriting (D12, 2026-08-12). You rewrite them **in place**
in `items/`, to the quotient construction ℝ[x]/(x²+1). For each of the four:

- **They STAY `status: published`. Do NOT flip them to draft.** Order 189 still
  lists all four until the step-10 publish commit, and *a published page listing
  a draft item is a hard error*. This corrects an earlier version of this brief.
- **delete `verification.audited`** — the 2026-08-02 audit no longer covers this
  text; the owner re-audits at step 10.
- **There is no `verification.judge` on any of the four** — Alpha read all four
  frontmatter blocks. Nothing to delete; do not add one. Both judge lanes see the
  new text at step 7 inside order 54/55's frozen pair context.
- **re-run `precheck.mts` on all four and record the result.** On disk today
  `thm-complex-numbers-form-a-field` and `lem-complex-conjugation-and-modulus-laws`
  carry `precheck: pass` and the two definitions carry `precheck: n/a` — those
  stamps describe text you are replacing.
- **Ids are immutable and no `aliases` entry is needed**, because no id is
  renamed. Titles and dependency sets do change; that is the rewrite.
- **Keep the existing component provenance.** Retag only a component the rewrite
  materially alters, and say so in your notes. Nothing is fabricated.

`lem-complex-conjugation-and-modulus-laws` **must not cite `def-p-norms-on-rn` or
anything on `rn-as-a-normed-space`** — that order-167 forward reference is the
entire reason this re-home exists.

`lem-complex-conjugation-and-modulus-laws` is the load-bearing one. Its published
proof takes the triangle inequality as `[given]` from the Euclidean norm on ℝ² at
**order 167**, which order 54 cannot legally cite. Your proof must derive it from
**Lagrange's identity** `(a²+b²)(u²+v²) − (au+bv)² = (av−bu)² ≥ 0` plus squaring
monotonicity, whose inputs sit at order ≤ 9. Alpha verified the identity; you
must still write the derivation honestly.

`thm-complex-numbers-are-the-real-coordinate-plane` states the coordinate
bijection and arithmetic **only** — not the norm identification with `d_2`, which
needs order 167 and stays at order 189.

**Do not touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.**
The four ids stay listed there until the step-10 publish commit; that split state
is receipted in `research/frontier-11-rehomed.json` and is intended.

## Report

Item counts authored, every place your text departs from the scaffold and why,
every published dependency you opened, precheck results, the provenance labels
you assigned, and any blocker. State plainly anything you could not do.


---

# This dispatch

# frontier-11, batch 1 — step-5 gate failures (rendercheck + finite-smoke)

You are **Beta-frontier-11-1**. Your authored content is otherwise green:
`precheck`, `proof-contract` (205/205), `citecheck`, `fwdcheck`, `extcheck`,
`prosecheck` and `content-policy` all pass. Two gates fail and both are yours.

## 1. `rendercheck` — 5 errors, all `multiline-display`

**Display math must be one source line between `$$`.** A hard line break inside
`$$…$$` mis-renders in the published page. Fix by joining each display onto a
single source line.

| file | display |
|---|---|
| `items/def-complex-conjugate-real-imaginary-part-and-modulus.md` | `\operatorname{Re}z=a,\qquad \operatorname{Im}z=b,\qquad \overline z=a-bi,` |
| `items/lem-complex-conjugation-and-modulus-laws.md` | `\overline{z+w}=\overline z+\overline w,\qquad \overline{zw}=…` |
| `items/lem-complex-conjugation-and-modulus-laws.md` | `z\overline z=\|z\|^2,\qquad \|z\|\ge0,qquad \|z\|=0\Longleftrightarrow z=0,` |
| `items/thm-every-complex-number-has-a-square-root.md` | `u+vi,\qquad u=\sqrt{\frac{\|z\|+a}{2}},\qquad v=\frac{b}{2u}.` |

**One of these is a real LaTeX bug, not a line-break problem.** In
`lem-complex-conjugation-and-modulus-laws`, the third display reads

```
|z|\ge0,qquad |z|=0
```

— `qquad` is missing its backslash and would render as the literal letters
"qquad" in the published page. Fix it to `\qquad`. **Read each of the five
displays character by character while you are in there**; rendercheck reports the
line-break defect and will not necessarily report a second defect on the same
line.

Verify with:

```
node tools/rendercheck.mjs
```

## 2. `finite-smoke` — 14 errors, `unknown finite smoke check`

Your `research/frontier-11-batch-1.proof-contracts.json` puts **free-text prose**
in the `smoke.check` field, e.g. *"Enumerate the four reduced representatives and
verify the complete multiplication table…"*. That field is not a description: it
must name a **registered check** implemented in `tools/finite-smoke.mjs`. There
are exactly four:

- `tree-characterisation`
- `forest-edge-component-count`
- `induced-complement-commutes`
- `cyclic-subgroup-lagrange`

Because the names did not resolve, **`0 check(s)` actually ran** — the gate is
not "failing a countermodel search", it never executed one. The affected ids:

`ex-the-four-element-field-from-an-irreducible-quadratic`,
`cex-reducible-polynomial-quotient-is-not-a-field`,
`thm-centralizer-cardinality-from-cycle-type`,
`cor-symmetric-group-class-equation-by-cycle-type`,
`lem-normal-subgroup-containing-a-three-cycle-is-a-n`,
`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`,
`thm-alternating-group-is-simple-for-n-at-least-five`,
`ex-s-four-conjugacy-classes-and-class-equation`,
`ex-s-five-conjugacy-classes-and-class-equation`,
`ex-a-five-conjugacy-classes-and-split-five-cycles`,
`ex-klein-four-is-normal-in-a-four`,
`fs-same-cycle-type-implies-conjugate-in-a-n`,
`fs-a-n-is-simple-for-all-n-at-least-four`,
`fs-arbitrary-transposition-and-n-cycle-generate-s-n`.

**For each of the 14, do one of these two things:**

- **If a registered check genuinely applies**, use its exact name with the
  parameters that check accepts. `cyclic-subgroup-lagrange` may fit one or two of
  the group-theoretic ids — read its implementation in `tools/finite-smoke.mjs`
  before claiming it, and only use it if it actually verifies the claim you are
  anchoring. Do not bend an item's contract to fit a check.
- **Otherwise remove the `smoke` field from that contract entry**, and move the
  verification you described into the entry's **boundary/degenerate disposition
  prose**, where a written finite check belongs. The reasoning you wrote is good
  and should not be lost — it is in the wrong field, not wrong.

**Do not invent a check name, and do not edit `tools/finite-smoke.mjs`.** Adding
a new check is a tooling change, not authoring work; if you believe one of these
deserves a real implementation, say so in your notes and name the check you would
add. The orchestrator decides.

Verify with:

```
node tools/finite-smoke.mjs research/frontier-11-proof-contracts.json
```

after the orchestrator re-merges — or against your own batch file directly.

## Boundaries

Change only `items/` files you authored and your own
`research/frontier-11-batch-1.*` artifacts. The four re-homed ℂ items stay
`status: published` with `verification.audited` absent — **do not re-add it** and
do not flip them to draft. Do not touch `plan-spec.json`, `library/`, another
batch, or any normative doc.

Re-run `precheck` on any item whose text you change and keep
`verification.precheck: pass` truthful.
