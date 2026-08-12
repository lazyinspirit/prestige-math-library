# Run `frontier-12` — step 0: frontier, D10 splice, and batching

**Date:** 2026-08-13 · **Orchestrator:** this session · **Owner instruction:**
build the next set of buildable non-topology A/B pairs, plus a new A/B pair
closing decision **D10** of run `frontier-11`; orchestrate autonomously from
step 0 to step 10; no permission prompts from any agent; decide autonomously,
prioritising **mathematical richness and accuracy**.

Working tree: `main`, in sync with `origin/main` at step-0 start.

---

## 1. The frontier, computed from disk

A pair is **buildable** when every page in its `requires` closure is
`status: published` on disk. Computed by walking `library/*/*.md` for status and
`research/plan-spec.json` for the page graph — not read from any prior run
record.

**15 buildable A/B pairs.** Four are topology and are **out of scope** by the
owner's standing non-topology framing for this session:

| order | id |
|---|---|
| 277 | `complete-metrizability-and-baire` |
| 285 | `ascoli-arzela` |
| 287 | `stone-weierstrass-general` |
| 293 | `covering-spaces-and-lifting` |

The remaining **11 pairs are this run's scope**, listed with the transitive
count of unscaffolded A pages each one unblocks:

| order | category | A page | unlocks |
|---|---|---|---|
| 53.2 | abstract-algebra | `the-field-of-fractions-and-localisation` | *(new — D10)* |
| 56 | abstract-algebra | `splitting-fields` | 15 |
| 66 | abstract-algebra | `composition-series-and-solvable-groups` | 8 |
| 86 | linear-algebra | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 10 |
| 92 | linear-algebra | `dual-spaces-bilinear-forms-and-inertia` | 7 |
| 104 | abstract-algebra | `free-modules-and-exact-sequences` | 15 |
| 183 | real-analysis | `pi-the-equivalent-characterizations` | 0 |
| 221 | combinatorics | `finite-probability-and-the-probabilistic-method` | 27 |
| 241 | real-analysis | `line-integrals-and-the-gradient-theorem` | 0 |
| 303 | complex-analysis | `complex-differentiability-and-cauchy-riemann` | 26 |
| 363 | category-theory | `limits-and-colimits` | 14 |

`complex-differentiability-and-cauchy-riemann` **opens a new category**:
`complex-analysis` has no `library/` directory yet and carries 54 planned pages,
the largest untouched subject in the plan. It renders with the neutral fallback
in `web/lib/library-categories.ts`, exactly as `topology` and `category-theory`
already do — no accent is added, and presentation stays frozen.

## 2. The D10 splice

`frontier-11` decision **D10** recorded that two **published** items —
`cex-ordered-field-not-archimedean` (homed on `foundations-of-the-real-numbers`,
order 9) and `ex-rational-function-field-order` (homed on
`equivalent-forms-of-completeness-examples`, order 125) — both open with *"the
field of fractions of the polynomial ring ℝ[t]"*, while the library builds no
field-of-fractions or localisation construction anywhere: not in `items/`, not
as a page in `plan-spec.json`. Re-verified from disk at step 0; still true.

Spliced this run, on the owner's instruction:

| order | kind | id |
|---|---|---|
| 53.2 | A | `the-field-of-fractions-and-localisation` |
| 53.4 | B | `the-field-of-fractions-and-localisation-examples` |

`requires: [polynomial-rings-and-roots]` only — orders 48 and 46 are reachable
through it, and declaring a reachable page directly is `redundant-prereq`. The
pair adds **zero** new validate-plan warnings.

Fractional orders follow the established `5.1`–`5.4` / `178.1`–`178.2` splice
idiom, so the **relative** order of every existing page is preserved and nothing
downstream is renumbered (`LEVELS.md` §"`order` is not stable"). Placed after
`polynomial-rings-and-roots` (52) so ℝ[t] is available for the motivating
example ℝ(t), and before `field-extensions-and-the-complex-numbers` (54).

**Why 53.2 is the right order for closing D10.** It is strictly *later* than
order 9, so the counterexample's dependency on the construction is a genuine
**forward** reference; and strictly *earlier* than order 125, so the example's is
an ordinary backward `deps` edge. `fwdcheck.mjs` permits a **load-bearing**
forward reference on consequence kinds — "example, counterexample,
false-statement, remark, corollary" — and forbids it only on the spine
(definition, lemma, proposition, theorem), error `forward-on-spine`. Both items
are consequence kinds: `cex-ordered-field-not-archimedean` is
`kind: counterexample` and `ex-rational-function-field-order` is an example. The
wiring is therefore a supported, gated move, and it is scheduled for **step 9**,
after the new page exists — declaring it earlier would be an open forward
reference (warning `open-on-published`) for no benefit.

## 3. Batching — 7 batches, 11 pairs

Owner cap: **at most two A/B pairs per Beta** (2026-08-01), enforced by
`content-policy.mjs --manifest-only`. Beta lane cap is 5 concurrent
(`dispatch.mjs`), so this dispatches as a wave of 5 and a wave of 2.

| batch | pairs | subject |
|---|---|---|
| 1 | 53.2 `the-field-of-fractions-and-localisation` · 56 `splitting-fields` | field theory — one Beta owns the construction and its first consumer |
| 2 | 66 `composition-series-and-solvable-groups` · 104 `free-modules-and-exact-sequences` | filtration and exactness: Jordan–Hölder beside short exact sequences |
| 3 | 86 `eigenvalues-…-characteristic-polynomial` · 92 `dual-spaces-bilinear-forms-and-inertia` | linear algebra, shared sources |
| 4 | 183 `pi-the-equivalent-characterizations` · 241 `line-integrals-and-the-gradient-theorem` | real analysis; both rest on arc length |
| 5 | 221 `finite-probability-and-the-probabilistic-method` | **singleton** — 27 downstream |
| 6 | 303 `complex-differentiability-and-cauchy-riemann` | **singleton** — 26 downstream, opens a new category |
| 7 | 363 `limits-and-colimits` | **singleton** — 14 downstream |

Batches 5–7 are deliberately single-pair. They are the three highest-leverage
pairs in the run, they sit in three unrelated subjects, and richness is the
owner's stated priority: a dedicated Beta reads more of each source set than one
splitting attention across two subjects. The cap is a maximum, not a quota.

## 4. Seam analysis — zero, and mechanically so

**No pair in this run declares a `requires` edge on any other pair in this run.**
Checked pairwise across all 11.

Unlike previous runs this can be stated at **item** level too, rather than only
at page level. `validate-plan.mjs` raises the hard error `undeclared-prereq`
when *"page P has an item depending on Q, which is NOT in the closure of its
declared requires"*. Since no in-run pair is in any other in-run pair's closure,
an item-level citation between two batches cannot pass the gate at all. A seam
could only be created deliberately, by editing `requires` — which no Beta may do.

So: **Betas never wait on each other, and no batch may cite another's drafts.**
The one place a cross-pair citation would have been natural — `splitting-fields`
reaching for the field of fractions — is handled by putting both pairs in
**batch 1**, where a single Beta owns the order of its own authoring.

## 5. Gates at step 0

```
node tools/validate-plan.mjs research/plan-spec.json     -> exit 0
```

446 pages; 220 with item lists validated at item level; 221 planned pages carry
no item list yet, as expected before scaffolding. The 309 `redundant-prereq`
warnings are all pre-existing on other pages — the new pair contributes none.

## 6. Next

Step 1–2: dispatch 7 Betas against `research/frontier-12-brief-beta.md`, each
producing `.pages.json`, `.notes.md`, `.coverage.json` and an opening
`.proof-contracts.json` for its batch.
