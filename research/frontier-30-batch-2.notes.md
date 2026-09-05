# frontier-30 batch 2 notes - beta scaffold

Owned pair:

- `zariski-topology-on-prime-spectra` / `zariski-topology-on-prime-spectra-examples`

Artifacts written in this dispatch:

- `research/frontier-30-batch-2.pages.json`
- `research/frontier-30-batch-2.coverage.json`
- this file

Session date: Friday, September 4, 2026.

## Design control and plan drift

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`, `research/plan-spec.json`,
`research/frontier-30-beta-batch.task.md`,
`research/frontier-30-beta-2.task.md`, and both matched design locations in
[research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:1244)
and
[research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:3670).

Control decision:

- the later `CA-15 additions` block is the controlling amendment where it
  conflicts with the earlier `CA-15` block, because it is the later page-local
  refinement and it rewrites the scope toward topology-facing lemmas rather than
  the earlier coarse spectrum inventory;
- however, that later amendment is not self-contained by itself: it presupposes
  definitions of irreducibility, Noetherian topological spaces, and generic
  points without restating them; I therefore retained the three topological
  definition items from the earlier CA-15 block because otherwise the scaffold
  would not be dependency-closed.

The live spec and the design agree on:

- A/B page ids
- title
- order
- category

The prerequisite prose does not match literally:

- the design names the broader closure `CA-2`, `CA-3`, `CA-5`, `CA-7`, plus
  the published topology pages and the compactness convention;
- the live `research/plan-spec.json` page edge is only
  `["henselian-rings-and-equicharacteristic-cohen-structure-examples", "topological-spaces-and-continuity", "compactness"]`.

I followed `research/plan-spec.json` exactly for the page-level `requires` field
and recorded the broader design closure here instead of mutating the plan.

## Already-published overlap I did not duplicate

The earlier CA-15 block predates several now-published commutative-algebra
pages. The following results are already homed earlier and were therefore **not**
re-minted on this page:

- `def-prime-spectrum-and-vanishing-sets`,
  `def-principal-distinguished-subset-of-spectrum`,
  `lem-distinguished-subset-identities`,
  `thm-prime-spectrum-map-by-contraction`,
  `thm-prime-spectrum-of-a-quotient-bijection`,
  `thm-prime-spectrum-of-a-localisation-bijection`, and
  `cor-prime-spectrum-insensitive-to-nilpotents`, all already homed on
  `library/commutative-algebra/prime-spectra-and-radicals.md`;
- `def-support-of-a-module` and
  `thm-support-and-annihilator-of-a-finite-module`, already homed on
  `library/commutative-algebra/localisation-of-modules-and-support.md`;
- `cor-affine-closed-points-detect-radicals`, already homed on
  `library/commutative-algebra/noether-normalisation-and-nullstellensatz.md`;
- the earlier B-page examples on product spectra, dual numbers, the node ring,
  and the prime set of `\mathbb Z`, already homed on
  `prime-spectra-and-radicals-examples` or
  `localisation-of-modules-and-support-examples`.

That overlap is exactly why this scaffold keeps only the topology-bearing
upgrades on the A page and chooses B-page examples that use the topology rather
than redoing the earlier set-theoretic spectrum examples.

## Item census and split check

- A page `zariski-topology-on-prime-spectra`: `28` items
- B page `zariski-topology-on-prime-spectra-examples`: `6` items

The A page is well below the `60`-item split ceiling, so no split is needed.

## Route choices that matter later

I kept the proof spine in the order the later amendment actually needs:

1. add the three missing topological definitions first;
2. promote the earlier set-level `Spec`, `V(I)`, and `D(f)` material into an
   actual topology and basis;
3. upgrade contraction, quotient, and localisation from set correspondences to
   topological statements;
4. prove compactness through distinguished-open covers and unit-ideal
   expressions, keeping the library's non-Hausdorff `compact` convention;
5. compute closures, specialization, the `T_0` property, and closed points;
6. identify irreducible closed subsets with prime radical ideals and then
   identify irreducible components with minimal primes;
7. prove the Noetherian-spectrum theorem directly from ideal ACC rather than by
   building a larger general-purpose Noetherian-topology subtheory;
8. recover connectedness from the clopen/idempotent correspondence; and
9. finish with the two topological payoffs that are not already published
   elsewhere: support is specialization-closed, and affine finite-type spectra
   have dense closed points.

Important omissions or recombinations:

- I did **not** scaffold the earlier coarse CA-15 theorem
  `thm-spectrum-map-is-continuous`, because its mathematical content is already
  present in the published set-level contraction item; the new page only needs
  the topological upgrade `cor-spectrum-is-a-contravariant-topological-functor`.
- I did **not** re-split `thm-irreducible-closed-subsets-and-prime-ideals` into
  the later amendment's generic-point micro-lemmas, because once the earlier
  radical/spectrum algebra is already published the single theorem is honest,
  source-backed, and sufficient for the later component theorem.
- I kept the examples page focused on topological uses:
  finite distinguished-open subcovers, the topology of `Spec(\mathbb Z)`,
  failure of Hausdorffness, a small specialization poset, clopen product-ring
  pieces, and a specialization-closed support that is not closed.

## Source set actually read

I reopened every recorded source URL in the web reader on Friday, September 4,
2026 before writing its harvest rows.

1. Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*:
   `https://web.mit.edu/18.705/www/13Ed.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Stacks Project, Section 10.17 `The spectrum of a ring`:
   `https://stacks.math.columbia.edu/tag/00DY`
4. Stacks Project, Section 5.8 `Irreducible components`:
   `https://stacks.math.columbia.edu/tag/004U`
5. Stacks Project, Section 5.9 `Noetherian topological spaces`:
   `https://stacks.math.columbia.edu/tag/0050`
6. Stacks Project, Section 10.21 `Open and closed subsets of spectra`:
   `https://stacks.math.columbia.edu/tag/04PN`
7. Stacks Project, Section 10.22 `Connected components of spectra`:
   `https://stacks.math.columbia.edu/tag/04PP`
8. Stacks Project, Section 10.26 `Irreducible components of spectra`:
   `https://stacks.math.columbia.edu/tag/00ET`

How they are used:

- Altman-Kleiman and Milne are the two independent primary treatments the task
  requires.
- Stacks supplies the section-level independent checks the design explicitly
  names for the topology, compactness, connectedness/idempotents, and
  irreducibility/component parts.

## URL discipline and provenance handling

All recorded source URLs reopened successfully in the web reader on Friday,
September 4, 2026. None needed URL recovery, archive substitution, or
`original_url` provenance handling in this batch.

Because this runner is network-restricted, I used the repository's established
manual `fetch_verified` form:

- `at`
- `kind`
- `verified_via: "web-open"`
- `pages` for PDFs
- a note explaining that the verification receipt is manual because the shell
  fetcher cannot be relied on in this environment

## Validation checklist

I am running the scaffold-stage checks relevant to this batch:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-30-batch-2.coverage.json --out /tmp/frontier-30-batch-2-url-liveness.json --recover --fail-on-dead
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-30-batch-2-spliced-plan.json
git diff --check
```

The temporary spliced plan replaces the two live `frontier-30` batch-2 page
entries inside `research/plan-spec.json` with the scaffolded entries from
`research/frontier-30-batch-2.pages.json`, so `validate-plan` checks the actual
proposed batch rather than the still-empty batch slots in the live plan.

## Validation results

One local manifest repair was required after the first spliced-plan validation
pass:

- `cor-spectrum-is-t-zero` originally depended on `def-t0-and-t1-spaces`, which
  lies on the later `separation-axioms` page and is therefore outside the spec
  closure of this batch's declared `requires`; I removed that external
  dependency and kept the item in the closure-distinguishing form the page
  actually proves.
- `ex-nonclosed-support-without-finiteness` originally depended on the published
  B-page example `ex-support-of-an-infinite-direct-sum`; because B pages must be
  leaves, I replaced that dependency by earlier A-page support items.

Actual results on Friday, September 4, 2026:

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"`
  passed: `json-parse: ok`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-2.coverage.json`
  passed twice, before and after the manifest repair:
  `1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json --stamp`
  passed: `8/8 source(s) fetch-verified (0 newly stamped)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json`
  passed: `8/8 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-2.pages.json`
  passed after the manifest repair:
  `34 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  still fails for unrelated `frontier-30` work outside this batch:
  `670 scoped item(s), 34 error(s), 0 warning(s)`. The reported failures are
  missing Lie-theory dependencies on items such as
  `def-central-character-of-a-lie-algebra-module`,
  `def-quadratic-casimir-element`, `def-harish-chandra-projection`, and
  `thm-enveloping-algebra-is-free-over-its-center`. None of those pages belongs
  to batch 2.
- `node tools/validate-plan.mjs research/plan-spec.json`
  passed with warnings only and ended in `OK`. The output still includes many
  global `[redundant-prereq]` warnings unrelated to this batch.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-2-spliced-plan.json`
  passed and ended in `OK`:
  `no item-level cycles, forward references, B-page dependencies, or unresolved ids`.
- `git diff --check`
  passed with no output.

Environment blocker:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-2.coverage.json --out /tmp/frontier-30-batch-2-url-liveness.json --recover --fail-on-dead`
  failed in this shell environment, not because the sources were dead but
  because DNS resolution is blocked for every host:
  `curl: (6) Could not resolve host` for all 8 URLs, with `0/8 live`.
  Because the same URLs were manually reopened in the web reader and
  `source-fetch-check` accepts the recorded manual `web-open` receipts, this is
  an environment-level liveness blocker rather than a defect in the batch's
  coverage ledger.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-b-step3-scaffold-review.md` on Saturday,
September 5, 2026.

- Finding ids for batch `2`: none recorded.
- Disposition: explicit no-op. I did not edit the CA-15 manifest or coverage
  because the pair remains tagged `sufficient`, and the review's `Local repair`
  section says that no new Step-3 scaffold repair was required in the owned
  batch artifacts.
- Evidence: the six standing batch-2 decline ids in
  `research/frontier-30-alpha-b-scope-decisions.json` still stand on current
  bytes: deferred `27abb5e8b7a3926de18a12187766054c79e9ade8e912526824de106e45b2868f`
  and `c0b3743ab7ec54a7640b0fface5c8321b2dcc623210d8bdf5e1e15ac6a127bff`,
  plus out-of-scope
  `34a53dfae0021477bfc89dc8a43566cbea576c6a79e1b7a8cf8140af2921cb6c`,
  `76e1eef6e0fc27c4591fdd3d560daa3c3dbcf921f958c72ba79fc2d698116701`,
  `8f2b5b05a472db722e3289a8d98fce7d9c390553e1586032dabb570032e4c6fb`,
  and `a0310c16ae3f4ce84d84c831c9629d573510e387bbccb531130844569e8dad55`.
- Evidence: `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-2.coverage.json`
  returned `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json` exited `0`
  and ended with `OK`; only the repository's standing out-of-batch
  `[redundant-prereq]` advisories remain.
- Evidence: after splicing `research/frontier-30-batch-2.pages.json` into
  `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-2-spliced-plan.json`
  exited `0` and ended with `OK`; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids appeared.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json`
  returned `source-fetch-check: 8/8 source(s) fetch-verified`.
- Evidence: I reopened all `8` recorded source URLs in the web reader on
  Saturday, September 5, 2026: Altman-Kleiman `13Ed.pdf`, Milne `CA.pdf`, and
  Stacks tags `00DY`, `004U`, `0050`, `04PN`, `04PP`, and `00ET`.
- Changed scaffold record: no change to `research/frontier-30-batch-2.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-2.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-2.notes.md`.

## Step-5 authoring

Authoring completed on Saturday, September 5, 2026.

Authored page files:

- `library/commutative-algebra/zariski-topology-on-prime-spectra.md`
- `library/commutative-algebra/zariski-topology-on-prime-spectra-examples.md`

Authored item ids:

- `def-irreducible-topological-space-and-subset`
- `def-noetherian-topological-space`
- `def-specialisation-and-generic-point`
- `lem-zariski-closed-set-axioms`
- `lem-every-zariski-closed-set-has-a-radical-defining-ideal`
- `lem-distinguished-opens-cover-every-open`
- `lem-distinguished-open-refinement-at-a-point`
- `cor-spectrum-is-a-contravariant-topological-functor`
- `lem-quotient-spectrum-map-is-closed`
- `lem-localisation-spectrum-map-homeomorphism-onto-image`
- `cor-principal-localisation-spectrum-is-distinguished-open`
- `lem-spectrum-compactness-open-cover-to-unit-ideal`
- `lem-spectrum-compactness-unit-expression-finite-subcover`
- `thm-prime-spectrum-is-compact`
- `cor-every-distinguished-open-is-compact`
- `lem-closure-of-a-point-is-its-vanishing-set`
- `cor-specialisation-order-is-prime-inclusion`
- `cor-spectrum-is-t-zero`
- `cor-closed-points-of-spectrum-are-maximal-ideals`
- `thm-irreducible-closed-subsets-and-prime-ideals`
- `thm-irreducible-components-and-minimal-primes`
- `thm-noetherian-ring-has-noetherian-spectrum`
- `cor-noetherian-spectrum-has-finitely-many-irreducible-components`
- `lem-clopen-subset-gives-idempotent-decomposition`
- `lem-idempotent-gives-clopen-spectrum-partition`
- `cor-spectrum-connected-iff-no-nontrivial-idempotents`
- `lem-support-is-specialisation-closed`
- `cor-closed-points-dense-in-affine-spectra`
- `ex-distinguished-open-finite-subcover-from-unit-expression`
- `ex-zariski-spectrum-of-the-integers`
- `ex-zariski-spectrum-not-hausdorff`
- `ex-specialisation-poset-of-a-small-spectrum`
- `ex-idempotent-clopen-product-ring`
- `ex-nonclosed-support-without-finiteness`

Provenance rationale:

- all A-page theorem, lemma, corollary, and definition statements were authored as `literature-derived`, matching the batch coverage and design backing from Milne, Altman-Kleiman, and the cited Stacks sections;
- the local proofs are tagged `literature-derived`, `ai-altered`, or `not-applicable` according to whether the written proof is essentially source-level, adapted to the library's existing dependency spine and proof-row contract, or absent by kind;
- every authored page and item remains `status: draft`;
- `research/frontier-30-batch-2.proof-contracts.json` was generated from the current item text and then checked against those authored proof rows.

Narrowed or dropped claims:

- no planned batch-2 item was dropped;
- no page split was introduced;
- I kept explicit Axiom-of-Choice hypotheses on the items whose written proofs cite already-published choice-dependent dependencies such as radical-as-intersection, maximal-ideal existence, or affine radical detection by maximal ideals.

Blockers:

- no in-batch authoring blocker remains;
- `node tools/proof-contract.mjs research/frontier-30-batch-2.proof-contracts.json --strict` passes with one advisory warning only: `shotgun-bracket` on `lem-clopen-subset-gives-idempotent-decomposition`; this is not a gate failure.

Checks run on Saturday, September 5, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-2 item files...` — pass, `31 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-30-batch-2.pages.json` — pass, `34 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-2-spliced-plan.json` — pass, ended in `OK`.
- `node tools/proof-contract.mjs research/frontier-30-batch-2.proof-contracts.json --strict` — pass with `0 error(s), 1 warning(s), 31/31 item(s) checked`.
- `git diff --check -- ...batch-2 authored files... research/frontier-30-batch-2.proof-contracts.json` — pass with no output.
