# frontier-32 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `3`, `5`, and `6`, comprising three A/B pairs. The
machine-readable A-page verdicts are in
`research/frontier-32-alpha-b-step3-verdicts.json`.

## Material and plan route reviewed

- Batch 3: `research/frontier-32-batch-3.pages.json`,
  `research/frontier-32-batch-3.coverage.json`, and
  `research/frontier-32-batch-3.notes.md`; controlling design MT-20 at
  `research/plan-measure-theory-track.md:3581-3685`.
- Batch 5: `research/frontier-32-batch-5.pages.json`,
  `research/frontier-32-batch-5.coverage.json`, and
  `research/frontier-32-batch-5.notes.md`; controlling design PT-4 at
  `research/plan-probability-track.md:491-556`.
- Batch 6: `research/frontier-32-batch-6.pages.json`,
  `research/frontier-32-batch-6.coverage.json`, and
  `research/frontier-32-batch-6.notes.md`; controlling design FR-4 at
  `research/plan-fourier-analysis-track.md:331-394`.
- The current `research/plan-spec.json` and the group assignment in
  `research/frontier-32-alpha-groups.json`.

The current plan agrees with all three pairs' ids, titles, categories,
companions, relative order, and direct page prerequisites. Each B page depends
only on its A page, and no A item depends on B. All 61 distinct external item
dependencies named by the three manifests resolve on current disk. The plan
validator reports that the declared page order is acyclic and consistent; no
new page, forward edge, or reading-order change is needed for these pairs.

## Batch 3 — Radon measures and Riesz–Markov–Kakutani

The A/B pair contains 35/7 items. Its mathematical route is otherwise complete:
the manifest separates the weak Radon convention from all-Borel regularity;
builds the LCH cutoff and finite compactly supported partition; decomposes the
positive representation proof into outer content, outer measure,
Carathéodory measurability, compact finiteness, open inner regularity,
integration, and uniqueness among Radon measures; then treats the bounded
complex `C_0` form and its exact variation norm. The B page supplies the
ordinal nonregularity and nonuniqueness witnesses required to prevent the two
principal overstatements.

The primary Cohn receipt covers §§7.1–7.4 at PDF pp. 199–228 / printed
pp. 182–211, including Theorem 7.2.8 and Propositions 7.2.9–7.2.11 for the
positive representation construction, Proposition 7.2.3 for second-countable
LCH regularity, Proposition 7.2.6 for sigma-finite regularity, Proposition
7.4.3 for `C_c` density, Theorem 7.4.4 for Lusin, and Exercise 7.2.7 for the
ordinal example. Stanford Math 205A Supplement #4, §2, independently supports
the cutoff/partition and positive-functional route. The Directorate wedge-space
treatment supports the distinction between weak open-set inner regularity and
strong compact inner regularity. The 65-result coverage ledger has no missing
destination or unreasoned decline.

One local note repair was made after checking the exact published dependency
statements. `thm-urysohn-lemma` is stated under Dependent Choice, while
`cor-compact-hausdorff-partitions-of-unity` carries its own Choice plus
Dependent Choice ledger. The batch-3 notes now require the author to preserve
the assumptions of the route actually used; this closes the prior risk that
the cutoff-dependent RMK construction would be presented as a ZF proof.

The page nevertheless remains **insufficient** because the manifest has no
`rem-rmk-functional-analysis-uses`. MT-20 explicitly requires that item at
`research/plan-measure-theory-track.md:3647-3651`, with the exact content that
FA-9 cites the positive representation form, FA-18 the compact/`C_0` form, and
FA-20 the complex-measure form. The design calls the receipt orientation only,
but it is still part of the declared page contract. Adding a missing remark is
not one of this dispatch's licensed local repairs (false claim, missing lemma,
or backward prerequisite), so no new item was inserted.

## Batch 5 — modes of convergence for random variables

The A/B pair contains 23/9 items and is **sufficient**. The scaffold fixes
real-valued random variables and the real-CDF meaning of convergence in
distribution, proves measurability before using the almost-sure convergence
event, and proves representative independence and separation before calling
`d_0(X,Y)=E[min(1,|X-Y|)]` a metric. The implication route includes the exact
`p>0` Markov argument, finite-measure `L^q` to `L^p` only in the published
range, the least-index Borel–Cantelli subsequence extraction, both directions
of the subsequence characterization, the uniform-integrability equivalence,
and direct probability versions of pairing, continuous mapping, and Slutsky.
The quotient case requires a nonzero limiting constant and a fixed value on
the zero-denominator event. The manifest's `justified_by` and `forward_refs`
fields correctly keep well-definedness on A and implication counterexamples
on B without making B load-bearing.

Durrett, *Probability: Theory and Examples*, 5th ed., §§2.2–2.2.3 and §3.2
(PDF pp. 63–73 and 123–132), and Roch, *Lecture 3: Modes of convergence*,
§§1.3–1.4 (PDF pp. 4–5), support the included definitions, implications,
subsequence theorem, and examples. The 69-result coverage ledger's low-yield
advisory is explained by the deliberately broad harvested ranges: 39 current
declines are deferred to existing later pages (23 weak convergence, 13 weak
laws, 2 strong laws, and 1 central-limit result), and 10 model-specific results
are out of scope. None is required by the PT-4 proof route.

## Batch 6 — lacunary Fourier series and Sidon sets

The A/B pair contains 9/4 items and is **sufficient**. It fixes normalized Haar
measure on `T=R/Z`, characters `e_k(x)=exp(2 pi i kx)`, and the strict Hadamard
ratio condition. The local finite Parseval lemma closes the absent published
Parseval supplier. The residue split with `q^r>m` supplies the exact multiset
uniqueness needed for even moments without falsely excluding trivial signed
relations. For `0<p<1`, the finite-sum norm comparison is explicitly proved by
the fourth-moment distribution estimate and normalized-measure monotonicity,
rather than attributed to Grafakos's `p>=1` theorem; the series corollary then
uses the published complete metric, not norm terminology. The Sidon route
uses residue-class Riesz products and sums the class estimates, so it does not
need an unproved finite-union theorem; Fejér polynomials justify the passage
from finite polynomials to continuous Sidon-supported functions.

Grafakos §3.6, PDF pp. 242–253 / printed pp. 226–237, supports the Hadamard,
`p>=1`, Riesz-product, and finite-polynomial Sidon core. The current replacement
receipts from Pisier (PDF p. 7), Rider (PDF pp. 1–2 / printed pp. 390–391), and
Fan–Queffélec–Queffélec (PDF p. 3, pp. 11–14, and pp. 28–30) support the explicit
examples and continuous-Sidon boundary; all four current sources have genuine
full-text fetch stamps. The reharvest supersedes the dead ResearchGate source.
All 11 current declines in the 37-result coverage ledger are deliberate
out-of-scope extensions (general groups or spheres, random/sign variants,
stronger Sidon characterizations, or unrelated open problems), not missing
steps in FR-4.

## Scope decisions and checks

`node tools/scope-decisions.mjs refresh --run frontier-32 --group b` produced
72 current decline rows. All were checked against their exact coverage row,
manifest, notes, controlling design section, and current plan closure, and all
are now `stands`: batch 3 has 12 out-of-scope rows; batch 5 has 39 deferred and
10 out-of-scope rows; batch 6 has 11 out-of-scope rows. Every deferred batch-5
destination exists later in plan order. No row requires an `owner-decision`.

Focused validation on current bytes:

- `node tools/scope-decisions.mjs check --run frontier-32 --group b`:
  `72 current decline(s), 0 error(s)`.
- `node tools/manifest-deps.mjs` on batches 3, 5, and 6: respectively
  `42`, `32`, and `13` items, with zero errors.
- `node tools/content-policy.mjs --manifest-only` on each assigned manifest:
  zero errors and zero warnings.
- `node tools/coverage-checklist.mjs --require-destination` on batches 3, 5,
  and 6: respectively `65`, `69`, and `37` harvested results, with zero
  errors; batch 5 retains its expected low-yield advisory.
- `node tools/validate-plan.mjs research/plan-spec.json`: `OK — declared page
  order is acyclic and consistent`.

The next authoring action is blocked only for the Radon A page: the owner must
add the exact design-required functional-analysis receipt without renaming any
established id. The modes-of-convergence and lacunary/Sidon pairs are ready for
authoring from their current manifests, source locators, and recorded boundary
conditions.
