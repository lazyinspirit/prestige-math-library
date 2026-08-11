# frontier-11 — Step 0: frontier, batching, seams

Run `frontier-11`. Owner instruction (2026-08-11): **build the next set of
non-topology A/B pairs.** Orchestrator: Claude Opus 5, `xhigh`, 1M window.

## 1. The frontier, computed from disk

Per `LEVELS.md` §Step 0.1 the frontier is *an unpublished page all of whose
`requires` are published*, read from the item files in `library/`, **not** from
`rounds.mjs` levels, which ignore publication state.

Disk frontier: **15 A-pages**. Two are `not-proved-here` catalogue pages already
sitting as drafts (`deferred-functional-analysis` order 2,
`deferred-algebraic-topology` order 4) and are not mathematical-content builds.
Four are topology and are excluded by the owner's scope:
`complete-metrizability-and-baire` (277), `ascoli-arzela` (285),
`stone-weierstrass-general` (287), `covering-spaces-and-lifting` (293).

That leaves **9 non-topology pairs**, all buildable now:

| order | category | A page | requires (all published) |
|---|---|---|---|
| 54 | abstract-algebra | `field-extensions-and-the-complex-numbers` | polynomial-rings-and-roots |
| 64 | abstract-algebra | `conjugacy-and-simplicity-in-the-symmetric-groups` | symmetric-groups-and-the-sign-homomorphism |
| 84 | linear-algebra | `the-determinant-of-a-linear-operator` | determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction |
| 178.1 | real-analysis | `the-integral-logarithm-and-its-characterisations` | the-logarithm-and-general-powers |
| 181 | real-analysis | `arc-length-and-rectifiable-curves` | bounded-variation-and-riemann-stieltjes, rn-as-a-normed-space |
| 193 | combinatorics | `formal-power-series` | polynomial-rings-and-roots, euclidean-domains-pids-and-unique-factorisation, formal-laurent-series-field |
| 219 | combinatorics | `extremal-graph-theory` | ramsey-theory, graph-colouring |
| 239 | real-analysis | `the-fundamental-theorems-of-calculus` | bounded-variation-and-riemann-stieltjes |
| 361 | category-theory | `universal-properties-and-the-yoneda-lemma` | categories-functors-and-natural-transformations |

Each pair's B companion (orders +1, and 178.2 for RA-27b) is in scope with it;
the judge's context unit is the pair.

## 2. Standing scope obligation — discharged into this run

`LEVELS.md` §Step 0.5 carries one standing obligation, and it is **included**:
`the-integral-logarithm-and-its-characterisations` + `-examples` (orders
178.1/178.2, owner 2026-08-11). Its design is
`research/plan-realanalysis-pages.md` §RA-27b and it specifies **three** gaps
that must all close — the integral-first construction `L(x) := \int_1^x dt/t`
developed with no reference to `exp`, the functional-equation characterisation,
and the equivalence theorem presenting the identities as competing definitions.
**Closing two of the three does not discharge it.** No other obligation stands.

## 3. Batching — 5 batches, at most 2 A-pages each

The cap is owner rule (2026-08-01) and `content-policy.mjs --manifest-only`
rejects a manifest above it. Five batches also exactly fills the `beta` lane cap
of 5 in `dispatch.mjs`, so every batch scaffolds in parallel with no queueing.

| batch | A pages | packing rationale |
|---|---|---|
| 1 | 54 field-extensions, 64 conjugacy-and-simplicity | abstract-algebra; one literature base (Dummit–Foote, Lang, Artin, Judson) covers both |
| 2 | 239 fundamental-theorems-of-calculus, 181 arc-length | **shared prerequisite** `bounded-variation-and-riemann-stieltjes`; one Riemann–Stieltjes reading serves both |
| 3 | 219 extremal-graph-theory, 193 formal-power-series | combinatorics; distinct sources but one subject library |
| 4 | 84 determinant-of-a-linear-operator, 178.1 integral-logarithm | the two most tightly specified pairs — 84 is a basis-free restatement over a published matrix determinant, 178.1 has a prescriptive design in RA-27b |
| 5 | 361 universal-properties-and-the-yoneda-lemma | category-theory; the subtlest pair in the run gets an undivided Beta |

Batch 4 is the only cross-subject batch. It is deliberate: with zero seams
anywhere in this run (below), affinity packing has no seam benefit to buy, so
the batch was balanced on specification density instead.

## 4. Cross-batch seam count

**Page-level cross-batch seams: 0.** No page in this run appears in any other
run page's `requires` — every one of the 9 rests entirely on already-published
pages. Every batch is therefore independent of every other, and no Beta needs to
wait on or coordinate with another.

**Item-level seams: not computable yet, and not reported as 0.** `LEVELS.md`
§Step 0.4 is explicit that when the pages have no item lists the count cannot be
computed and must be said so rather than reported as zero. The item lists arrive
at step 1. Page-level independence bounds item-level seams at zero *between
these pages*, but forward references into unpublished pages outside the run are
a separate matter and are declared per `fwdcheck.mjs` at step 2.

## 5. Dispatch

Betas are GPT 5.6 Sol on the Codex subscription, `xhigh`, 1,000,000-token
context, `workspace-write`, web enabled — `tools/dispatch.mjs` passes each
setting explicitly. Run-specific brief: `research/frontier-11-brief-beta.md`;
per-batch assignment: `research/frontier-11-beta-<i>.task.md`.

## 6. Known blocker, recorded rather than prompted

`DEEPSEEK_API_KEY` is not set on this machine and there is no `.env` in the app
repo, so the DeepSeek judge lane cannot cast a verdict. **Step 7 cannot record a
paired pass without it**, since `CLAUDE.md` requires both models to actually pass
the text. Steps 0–6 are unaffected and proceed. `katex` and `yaml` were missing
from the app repo and were installed; `preflight.mjs` is otherwise green.
