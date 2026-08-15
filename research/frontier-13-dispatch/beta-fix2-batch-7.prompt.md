# frontier-13 — Beta scaffold-repair brief (step 3 → 4)

You are the Beta that scaffolded this batch. The step-3 Alpha review is complete
and the orchestrator has adjudicated it. **Apply the fixes listed in your task
file, and nothing else.**

## Hard rules

- **No permission prompts of ANY kind** (owner, 2026-07-30, broadened
  2026-08-11). Not from you, not from any subagent you dispatch. This binds a
  compound command as a whole: no segment of an `&&` chain may raise a prompt.
  If an indispensable operation truly cannot be expressed without new authority,
  **stop and record a blocker in your notes** — that is the escape hatch, never a
  prompt.
- **Your write scope is exactly your own four artifacts:**
  `research/frontier-13-batch-<i>.{pages,coverage,proof-contracts}.json` and
  `research/frontier-13-batch-<i>.notes.md`. Do **not** edit
  `research/plan-spec.json` — the orchestrator owns it and has already applied
  every approved `requires` amendment. Do not edit another batch's files. Do not
  create `items/*.md`; authoring is step 5.
- **Ids are immutable.** Adding an item mints a new id; never rename or remove an
  existing one.
- This is a **scaffold repair, not a re-scaffold.** Do not re-harvest, do not
  restructure pages that were found sufficient, do not "improve" anything not
  named in your task file.

## What the fixes must satisfy

1. **Every new item is dependency-closed.** Each dependency is either an earlier
   item in the same pair or a published item whose **home page is inside this
   page's declared `requires` closure**. Checking that a dependency is *published*
   is NOT sufficient — that is precisely the check that let a real defect through
   this run. Resolve each published dependency to the page that lists it, then
   confirm that page is in the closure.
2. **No cross-pair edge.** No item may depend on an item scaffolded in another
   pair of this run, including the other pair in your own batch.
3. **No dependency on a B-page item**, including from the same B page. B pages
   are leaves.
4. **The 60-item ceiling** stands per A page. If a fix would cross it, stop and
   record a blocker rather than splitting on your own.
5. **Provenance** on every new item: `provenance.statement` and
   `provenance.proof`, with a rationale in your notes. An `ai-generated`
   statement may never be load-bearing.
6. **Coverage rows.** If a fix adds a result that came from a source heading,
   update that heading's disposition to `included` and name the new item id. If a
   fix corrects a decline reason, rewrite the reason to be true of the new state.
7. **Natural mathematical voice.** State the cited proposition itself in each
   `[F#]`/`[A#]`/`[L#]` fact — quote exactly when practical, otherwise the
   smallest faithful shortening. No changed domain, quantifier, hypothesis,
   direction or conclusion; no invented converse; no interpretive filler.

## Proof-contract citations — read this even if your task file does not mention it

A whole-run audit found the `citations` arrays populated very unevenly:

```
batch 1: 70 contracts,  0 empty, 212 citations
batch 2: 65 contracts,  0 empty, 222 citations
batch 6: 49 contracts,  8 empty, 100 citations
batch 7: 37 contracts, 20 empty,  43 citations
batch 3: 72 contracts, 28 empty,  91 citations
batch 4: 43 contracts, 43 empty,   0 citations
batch 5: 41 contracts, 41 empty,   0 citations
```

Batches 1 and 2 populated every contract's citations at scaffold time with
disk-checked exact source clauses. **That is the standard.** If your batch has
empty `citations` arrays, populate them now for every proof-bearing item: the
exact cited source clause and the steps that use each fact. This is required by
`QUALITY-CONTROLS.md` before step 7 freezes context, and doing it now is far
cheaper than doing it after the items are authored.

## When you are done

Re-run your own gates and report their exact output:

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
node tools/content-policy.mjs research/frontier-13-batch-<i>.pages.json --manifest-only
```

Then re-run your own dependency-closure audit over every item in your batch —
unresolved ids, out-of-closure published deps, cross-pair edges, B-leaf deps,
duplicate ids — and report the counts. Do **not** run `tools/gates.mjs`.

Report: what you changed, the new item count per page, the gate output, and any
blocker. Append a dated section to your notes; do not delete existing notes.


---

# This dispatch

## Batch 7 second pass — five findings my first fix brief omitted

Your first repair is accepted (F7.1 fixed on both halves, reciprocity in $K(x)$,
Stanley Ex 4.7.5 added, 38 contracts / 0 empty / 112 citations). **The omissions
below are the orchestrator's error, not yours** — the first brief was written from
the Alpha's closing summary rather than its full report, and it renumbered as it
went: five of Alpha's eight findings never reached you.

Source of record: `research/frontier-13-alpha-b-step3-scaffold-review.md`, findings
F7.2, F7.4, F7.5, F7.7, F7.8. Read each there in full.

### F7.2 (blocking) — an undischarged split hypothesis

`cor-eigenvalue-form-of-the-transfer-matrix-trace` takes
`def-algebraically-closed-field` as a step-1.1 input, quoting "every nonconstant
polynomial $p\in F[x]$ has a root in $F$", and in the same step applies
`thm-spectral-mapping-for-polynomials` and `thm-trace-is-sum-of-eigenvalues`.

Alpha opened both consumers: **each takes the split factorisation as an explicit
hypothesis of its Statement** — "suppose $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$".
Having one root is not having that factorisation. The bridge is an induction on
degree via the factor theorem, and **no published item states it** (Alpha grepped
the corpus).

**Fix:** add a local lemma
`lem-monic-polynomials-split-over-an-algebraically-closed-field`, proved by
induction on degree from `def-algebraically-closed-field` and
`cor-factor-theorem-over-a-commutative-ring` — Alpha confirmed the latter is
published, homed on `polynomial-rings-and-roots`, and **in order 195's closure**.
Then cite it as the hypothesis-discharging step. Failing that, record it as a
numbered inline derivation citing the factor theorem; do not leave it implicit.

*Recorded as a positive:* Alpha first suspected a worse defect — that spectral
mapping gives only a set equality and cannot carry multiplicities through
$A\mapsto A^n$. The published `thm-spectral-mapping-for-polynomials` is in fact
stated as $\chi_{p(T)}(y)=\prod_{i<n}(y-p(\lambda_i))$, **with algebraic
multiplicity**, so your route is correct. Only the split hypothesis is undischarged.

### F7.4 — `lem-binomial-series-for-a-repeated-pole` cites nothing for its binomial machinery

Its Statement contains $\binom{n+j-1}{j-1}$ and its strategy applies the
hockey-stick identity to a Cauchy convolution, but `deps` are only
`thm-formal-power-series-unit-criterion` and
`prop-coefficient-extraction-linearity-and-extensionality`. Neither
`def-binomial-coefficient` nor any binomial identity is declared.

Both are published and **in order 195's closure**, homed on
`finite-counting-and-binomial-coefficients`. **Add `def-binomial-coefficient` and
`thm-pascals-rule` to `deps`** and name the identity in the derivation (hockey-stick
follows from Pascal by a short induction).

Alpha verified the lemma's statement against Stanley p. 536 —
$\frac{1}{(1-\gamma x)^j}=\sum_{n\ge0}x^n\gamma^n\binom{j+n-1}{j-1}$, exact match.
The statement is right; only its citations are missing.

### F7.5 — a decline reason that states a falsehood about reading order

The Stanley Cor 4.7.4 row says the "inner-product and orthogonal-diagonalisation
machinery is **homed after order 195**". **That is false.**
`inner-product-spaces-and-orthogonality` is order **94** and
`the-spectral-theorem-and-singular-value-decomposition` is order **141** — both
*below* 195.

**The decline itself stands** — Alpha read Cor 4.7.4 (Stanley p. 576) and it does
use a real orthogonal $U$ with $U^{-1}AU=\operatorname{diag}(\lambda_1,\dots,\lambda_p)$,
so the spectral theorem is genuinely required and your algebraically-closed trace
form is the right substitute. Only the reason text is wrong.

Correct it to the true obstruction: neither page is in this pair's declared
`requires` closure and neither is published today (the spectral-theorem page also
needs `the-fundamental-theorem-of-algebra` and
`triangularisation-and-jordan-canonical-form`, neither built; the inner-product
page is in flight as batch 3 of this run). **Also change the disposition from
`out-of-scope` to `deferred`** — this is the page's own topic blocked on unbuilt
prerequisites, not another page's subject matter.

### F7.7 — the B-page summary must not be authored

Your notes §"Proposed page summaries" contains a two-paragraph summary for
`linear-recurrences-and-rational-generating-functions-examples` (61 and 70 words).
**A B page has no authored summary body at all.** Delete it. The A page's two
paragraphs (74 and 75 words) are fine and stay.

### F7.8 — `def-finite-words-factor-avoidance-and-prefix-states` declares `deps: []`

A definition introducing finite words over an alphabet, contiguous factors and
proper-prefix states, with no cited dependency at all. Your local-interface
decision is right — the free-group word page is outside closure and your notes say
so — but the underlying notion of a finite sequence should be cited rather than
assumed. One line.

### Re-run and report

The three gates plus your dependency-closure audit. Report the new lemma's id and
deps, the two items whose `deps` gained binomial citations, the corrected decline
row, and confirmation the B-page summary is gone.
