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

# frontier-11, batch 1

You are **Beta-frontier-11-1**. Your writable artifacts are the four
`research/frontier-11-batch-1.*` files named in the brief above.

## Your pages

- **A** `field-extensions-and-the-complex-numbers` (order 54, abstract-algebra) — "Simple Field Extensions and the Construction of the Complex Numbers"
  - **B** `field-extensions-and-the-complex-numbers-examples` (order 55)
  - requires: `polynomial-rings-and-roots`
- **A** `conjugacy-and-simplicity-in-the-symmetric-groups` (order 64, abstract-algebra) — "Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$"
  - **B** `conjugacy-and-simplicity-in-the-symmetric-groups-examples` (order 65)
  - requires: `symmetric-groups-and-the-sign-homomorphism`

## Prose scaffold sections to read

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`

## Batch note

Both pairs are high-leverage unblockers and must be scaffolded so the pages that
cite them can do so directly.

**Order 54** is the sole blocker of `splitting-fields` (56) and a joint blocker of
`inner-product-spaces-and-orthogonality` (94) and
`complex-differentiability-and-cauchy-riemann` (303). Build the quotient
construction properly: `F[x]/(p)` for irreducible `p` as a field, the evaluation
homomorphism and its kernel, the degree and basis `1, a, ..., a^{n-1}` of a simple
algebraic extension, the universal property of adjoining a root, minimal
polynomials, and then `C := R[x]/(x^2+1)` as the worked instance with conjugation,
modulus and the field axioms verified rather than asserted. `R` is not
algebraically closed here and the fundamental theorem of algebra is order 139 —
do not reach for it; if you need it anywhere, that is a forward reference and is
declared, not assumed.

**Order 64** is the sole blocker of `composition-series-and-solvable-groups` (66)
and thence the whole solvable/Sylow chain. `symmetric-groups-and-the-sign-homomorphism`
(44) already owns cycle decomposition, cycle type, parity and the sign
homomorphism — **cite it, do not restate it**. What this page owes: conjugation
in `S_n` computed on cycles, conjugacy classes indexed by cycle type, the class
equation instance for `S_n`, generation results (transpositions, adjacent
transpositions, a transposition plus an n-cycle), conjugacy in `A_n` and where a
class splits, and the simplicity of `A_n` for `n >= 5` with `A_4` as the
explicit counterexample on the B page. The 3-cycle generation lemma for `A_n` is
load-bearing for simplicity — scaffold it as its own item.
