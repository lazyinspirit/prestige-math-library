# frontier-21 — Alpha group **c**, step-3 scaffold review

Batches **4, 7, 8** (`covers:` line of the step3-c dispatch). Group rationale in
`research/frontier-21-alpha-groups.json`: these batches form the analysis
cluster, so one Alpha can check the shared closure issues around spectral
decomposition, comparison theorems for integrals, and boundary or winding
arguments once.

| pair | batch | A items | B items | verdict |
|---|---:|---:|---:|---|
| `the-spectral-theorem-and-singular-value-decomposition` | 4 | 34 | 19 | **insufficient** |
| `the-lebesgue-and-riemann-integrals-compared` | 7 | 6 | 5 | **insufficient** |
| `the-argument-principle-and-rouche` | 8 | 16 | 11 | **sufficient** with scope decisions recorded |
| `domains-of-holomorphy-and-pseudoconvexity` | 8 | 28 | 10 | **insufficient** |

Machine half: `research/frontier-21-alpha-c-step3-verdicts.json`.

Scope receipt: `research/frontier-21-alpha-c-scope-decisions.json`
(`node tools/scope-decisions.mjs check --run frontier-21 --group c` passes with
**17 current decline(s), 0 error(s)**).

---

## Severity table

| id | pair | class | severity | disposition |
|---|---|---|---|---|
| **C4-1** | spectral theorem and SVD | design theorem narrowed below the X-2 contract and lost its matching source | **blocking** | routed to Beta-4 |
| **C7-1** | Lebesgue/Riemann comparison | missing local witness for the designed false upgrade `Riemann integrable => Borel` | **blocking** | routed to Beta-7 |
| **C8-1** | domains of holomorphy | plane-domain corollary still depends on out-of-run CA-18/CA-19 suppliers already rescoped at step 0 | **blocking** | owner decision required; current scaffold remains insufficient |

No direct scaffold repair was licensed here. C4-1 needs re-sourcing and a
manifest correction, C7-1 needs a new B-page item, and C8-1 is the run-level
rescope already recorded in the drift file.

---

## What I checked

- Read each owned manifest, coverage file, and notes file:
  `research/frontier-21-batch-4.{pages.json,coverage.json,notes.md}`,
  `research/frontier-21-batch-7.{pages.json,coverage.json,notes.md}`,
  `research/frontier-21-batch-8.{pages.json,coverage.json,notes.md}`.
- Read the governing design sections and live plan:
  `research/plan-algebra-track.md` II.9 X-2,
  `research/plan-measure-theory-track.md` MT-9,
  `research/plan-complex-analysis-track.md` CA-10 and SC-4,
  the authority note in `research/plan-algebra-track-expansion.md`,
  the cross-track note in `research/plan-combinatorics-and-categories.md`,
  and the current `research/plan-spec.json`.
- Ran `node tools/coverage-checklist.mjs research/frontier-21-batch-4.coverage.json --require-destination`
  -> `47` harvested results, `0` errors, `0` warnings.
- Ran `node tools/coverage-checklist.mjs research/frontier-21-batch-7.coverage.json --require-destination`
  -> `24` harvested results, `0` errors, `0` warnings.
- Ran `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination`
  -> `44` harvested results, `0` errors, `1` warning:
  `coverage-low-yield [the-argument-principle-and-rouche]`.
- Ran `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-4.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json`
  -> `129` scoped items, `0` errors, `0` warnings.
- Ran `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories.
- Ran `node tools/scope-decisions.mjs refresh --run frontier-21 --group c`,
  resolved all `17` pending rows, then ran
  `node tools/scope-decisions.mjs check --run frontier-21 --group c`
  -> `17` current declines, `0` errors.
- Ran `node tools/scaffold-verdicts.mjs --run frontier-21`
  after writing the verdict file -> `10/14` A pages reviewed, `4`
  insufficient, `4` unreviewed. The four `verdict-missing` pages named by the
  tool belong to other groups, not to group `c`.

---

## Batch 4 — `the-spectral-theorem-and-singular-value-decomposition`

This pair is **insufficient** on one exact point, and otherwise rich. The page
shape, the field-sensitive normal/symmetric traps, the positivity convention,
the algebraic SVD route, the min-max block, and the declined Cholesky or
geometry branches all match X-2 as written. The five scope-decision declines are
honest and now recorded as `stands`.

### C4-1 — the designed Jordan-Chevalley theorem was narrowed to a different result

`research/plan-algebra-track.md` II.9.c still assigns X-2 the theorem
`thm-additive-jordan-chevalley-decomposition`: over a perfect field, every
finite-dimensional endomorphism has unique commuting semisimple and nilpotent
parts, each polynomial in the operator. The same section says the live spec
`requires` are already correct. The current manifest instead replaces that with
`thm-additive-jordan-chevalley-decomposition-for-split-operators`, and the notes
justify the narrowing by saying the perfect-field machinery is outside closure.

That justification is false on current disk. The authority note in
`research/plan-algebra-track-expansion.md` says `plan-spec.json` understates what
is already published and must be checked against `library/`. The required page
`the-fundamental-theorem-of-algebra` already depends on the published GA-1 page
`algebraic-closure-embeddings-and-separability`, which carries
`def-perfect-field`, `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
and `cor-algebraic-extensions-of-perfect-fields-are-separable`. So the designed
perfect-field theorem is still inside the declared closure.

The coverage file confirms the mismatch: the only live Jordan-Chevalley source
row is Yoo, Section 6, Proposition 6.1, explicitly harvested for the split-form
surrogate. No harvested live source currently backs the designed perfect-field
statement. Until the manifest restores the X-2 theorem and its matching source,
the pair is not sufficient for authoring.

**Verdict:** insufficient.

---

## Batch 7 — `the-lebesgue-and-riemann-integrals-compared`

This pair is **insufficient** on one missing B-page result, and otherwise
coherent. The A page keeps the MT-9 seam results the design actually needs:
Darboux envelopes, equality of the two integrals, the almost-everywhere Borel
corollary, Arzela bounded convergence, the nonnegative improper comparison, and
the Riemann-Stieltjes agreement theorem. The source set is adequate, and the
batch-7 notes are careful about the completeness trap and about not duplicating
already-published MT-4 material.

### C7-1 — the designed false statement `Riemann integrable => Borel` is still missing

MT-9 explicitly lists the false upgrade `If f is Riemann integrable then f is
Borel.` The current notes admit that no local witness was scaffolded for this
claim. That is a real omission, not optional polish.

The published closure already provides the needed witness route. The published
corollary `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel`
constructs a Lebesgue measurable non-Borel set `E` inside the Cantor set. Its
indicator is therefore bounded and non-Borel, while the discontinuity set is
contained in the null Cantor set, so the batch's own cited Lebesgue-criterion
machinery makes it Riemann integrable. No new page, no forward edge, and no new
measure theory beyond MT-9 is needed; the scaffold simply omits the designed
counterexample or false-statement item.

Because the missing result is load-bearing to the page's advertised seam role,
this pair is not yet sufficient for authoring.

**Verdict:** insufficient.

---

## Batch 8 — `the-argument-principle-and-rouche`

This pair is sufficient. The 16-item A page matches the CA-10 inventory exactly,
and the 11-item companion carries the designed Rouche counts, winding witness,
Hurwitz persistence example, inverse-formula example, and the three distinct
failure modes. The `coverage-low-yield` warning is explained by honest source
declines, not by a thin scaffold: the omitted Howell and Lebl rows are
alternative exercises or stronger variants outside the chosen page budget.

The scope decisions are sound. The stronger symmetric Rouche form, the Nyquist
application, and the extra worked exercises are all outside the exact CA-10
route the design fixes. No missing lemma, backward prerequisite, or dishonest
deferment remained after review.

**Verdict:** sufficient.

---

## Batch 8 — `domains-of-holomorphy-and-pseudoconvexity`

This pair is **insufficient** because one advertised A-page corollary still
depends on the run-level drift defect Alpha already recorded at step 0. The rest
of the SC-4 page is scoped honestly: the d-bar applications, Oka-Weil, and the
full Levi-problem direction are all properly kept out of SC-4 and their source
declines now stand in the scope receipt.

### C8-1 — the plane-domain corollary still spends out-of-run supplier pages

`research/frontier-21-alpha-step0-drift.md` already records
`domains-of-holomorphy-and-pseudoconvexity` as `drift-rescoped`. The exact
reason there is the design's own dependence on CA-18 and CA-19 for
boundary-singular holomorphic functions on plane domains. Those supplier pages
are lower-order, unpublished, and out of this run.

The current batch-8 manifest still keeps
`cor-plane-domains-are-domains-of-holomorphy`, and the notes openly acknowledge
that the live spec closure does not supply its intended proof. The replacement
coverage citation to Lebl Exercise 2.6.2 does not close the gap: the step-0
drift record already explains that the one-variable supplier pages are what the
design actually spends here. So the pair still contains a theorem the current
closure cannot honestly author.

This is not a local Beta-only cleanup. Removing or replacing the SC-4 plane
contrast is exactly the owner-level rescope step 0 already authorized.

**Verdict:** insufficient.

---

## Final verdicts

Group `c` has **one sufficient pair and three insufficient A pages** on current
bytes. No split is owed: the A-page counts are `34`, `6`, `16`, and `28`, all
below the step-3 ceiling.
