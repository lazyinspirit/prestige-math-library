# frontier-24 · Beta · batch-8 notes — `chain-complexes-and-homology`

Run `frontier-24`, batch `8`, one A/B pair, category `homological-algebra`.
Author: Beta. Session date: August 29, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-24-batch-8.pages.json`
- `research/frontier-24-batch-8.coverage.json`
- this file

Per `research/frontier-24-beta-batch.task.md`, I did not edit workflow state,
published content, another batch artifact, or `proof-contracts`.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-24-beta-8.task.md`, the dispatch prompt
`research/frontier-24-dispatch/beta-batch-8.prompt.md`, the seed manifest
`research/frontier-24-batch-8.pages.json`, and the controlling HA-1 design
block in `research/plan-homological-algebra-track.md`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

That reported `frontier-24` running on August 29, 2026, with stage `1-drift`
still in flight and stage `1-scaffold` not yet credited with any batch
coverage.

## 2. Controlling design and design/spec drift

### Controlling design material

The generated task cites `research/plan-homological-algebra-track.md` at line
`535`, but on current disk the actual `HA-1. Chain and Cochain Complexes,
Homology and Cohomology` block begins earlier, around line `357`, because the
track file has grown above it. I treated the live HA-1 block itself as the
controlling design rather than trusting the stale line anchor.

The design decisions preserved in the scaffold are the ones the HA-1 block
states explicitly:

- homology is introduced only after item 6 constructs the canonical monomorphism
  from boundaries to cycles
- the abelian-category proof route goes through degreewise kernels, cokernels,
  images, and coimages before concluding that complexes form an abelian category
- additive functors are kept distinct from exact functors, so the false
  statement about commuting with homology stays on the A page
- subobjects are not treated as literal subsets in the general statements
- forward references remain `NONE`

### Design/spec drift

For this pair, the current design and `research/plan-spec.json` agree on the
page ids, orders, and page-level prerequisites:

- A page `chain-complexes-and-homology` at order `365.037`
- B page `chain-complexes-and-homology-examples` at order `365.038`
- A-page `requires`: `abelian-categories`, `exactness-and-the-member-calculus`

So there is **no design/spec drift to adjudicate locally** for batch 8.

## 3. Scaffold shape and page decisions

The scaffold now has:

- `chain-complexes-and-homology` (A): **47 items**
- `chain-complexes-and-homology-examples` (B): **10 items**

The A page is below the 60-item split threshold, so no split is proposed.

The A-page structure follows the design's five clusters:

1. chain/cochain data, cycles, boundaries, homology, exactness, and acyclicity
2. chain/cochain maps, induced homology maps, functoriality, and
   quasi-isomorphisms
3. subcomplexes, quotient complexes, short exact sequences of complexes, and
   the abelian-category proof
4. degreewise biproducts, products, coproducts, and the degreewise action of
   additive functors
5. exact functors on homology and the finite free Euler-Poincare theorem

The six `fs-` items are kept on the A page exactly because the design treats
them as conceptual guardrails, not optional enrichment.

## 4. Source set actually recorded

I recorded four source rows across three independent treatments:

1. Weibel, Chapter 1 PDF:
   `https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf`
2. Sharifi, full lecture notes:
   `https://math.ucla.edu/~sharifi/homalg.pdf`
3. Stacks Project, Section 12.13:
   `https://stacks.math.columbia.edu/tag/010V`
4. Stacks Project, Lemma 12.7.2:
   `https://stacks.math.columbia.edu/tag/010N`

This satisfies the standing source requirement:

- two independent treatments
- at least one textbook
- at least one full lecture-note set with a harvestable table of contents

### Why these four rows

- Weibel is the primary textbook treatment for the basic chain-complex,
  homology, quasi-isomorphism, subcomplex, quotient, and abelian-category
  statements.
- Sharifi is the independent lecture-note control that directly covers exact
  functors, homology/cohomology objects, degreewise exactness, and the long
  exact sequence seam.
- The Stacks Project was split into `010V` and `010N` because the exact-functor
  criterion used by item 38 lives outside the complexes section.

### Design sources not copied into this batch coverage

The design also names Rotman as a control source. I did not add a Rotman row
because the Weibel, Sharifi, and Stacks rows already satisfy the standing
two-treatment requirement, and I only wanted URLs in the ledger that I had
actually opened and read during this dispatch.

## 5. URL verification and source-side decisions

I re-opened each recorded URL in the web reader on August 29, 2026 and checked
the locator ranges against the live text:

- Weibel `01-chain_complexes.pdf` opened as a 29-page PDF and exposed the exact
  §1.1 and §1.2 material used in the ledger.
- Sharifi `homalg.pdf` opened as an 86-page PDF with contents and the exact
  `2.5` / `2.7` ranges used here.
- Stacks `010V` opened as the live HTML section for `12.13 Complexes`.
- Stacks `010N` opened as the live HTML record for `Lemma 12.7.2`.

The `010N` row already had an exact-URL `fetch_verified` receipt elsewhere in
the repository, so I reused that same receipt block verbatim. The other rows
were left for the mechanical `source-fetch-check --stamp` pass to stamp or to
fail explicitly.

## 6. Dependency rationale, proof strategy, and known limits

### Dependency rationale preserved from the design

- Item `lem-the-boundary-subobject-factors-through-the-cycle-subobject` is the
  well-definedness gate for `def-homology-object-of-a-chain-complex`; the
  quotient does not appear earlier in the scaffold.
- Items `lem-the-kernel-of-a-chain-map-is-computed-degreewise`,
  `lem-the-cokernel-of-a-chain-map-is-computed-degreewise`, and
  `prop-images-and-coimages-of-chain-maps-are-computed-degreewise` are kept
  separate because the design explicitly warns against saying these structures
  are inherited "obviously."
- `thm-homology-is-an-additive-functor` remains before the full abelian-category
  theorem, because the additivity check is on induced homology maps rather than
  on a later blanket appeal to `Ch(A)` being abelian.
- `cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative`
  keeps the conservativity hypothesis explicit rather than smuggling reflection
  into exactness alone.

### Known limits before validation

- The Euler-Poincare theorem is intentionally narrow: finite complexes of
  finite-rank free abelian groups only, with no attempt to generalize to vector
  spaces over a field or to arbitrary bounded complexes.
- The double-complex, sign-trick, and total-complex material in Weibel is
  harvested explicitly as deferred rather than silently ignored.
- The long exact sequence results in Sharifi and Stacks are also harvested as
  deferred rather than imported early onto HA-1.

## 7. Validator results

I ran the scaffold-stage checks on Saturday, August 29, 2026.

- `node tools/coverage-checklist.mjs research/frontier-24-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-1.pages.json research/frontier-24-batch-2.pages.json research/frontier-24-batch-3.pages.json research/frontier-24-batch-4.pages.json research/frontier-24-batch-5.pages.json research/frontier-24-batch-6.pages.json research/frontier-24-batch-7.pages.json research/frontier-24-batch-8.pages.json research/frontier-24-batch-9.pages.json research/frontier-24-batch-10.pages.json`
  -> `content-policy: 294 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with run-wide warnings only**. The tool ended with `OK`; the visible
  warnings were the standing run-wide `redundant-prereq` advisories, and there
  was no batch-8-specific unresolved-id, cycle, or B-page dependency failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 1/4 source(s) fetch-verified (0 newly stamped), 3 FAILED`
  with:
  - `ENOTFOUND` for `https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf`
  - `ENOTFOUND` for `https://math.ucla.edu/~sharifi/homalg.pdf`
  - `ENOTFOUND` for `https://stacks.math.columbia.edu/tag/010V`

  The fourth row, `https://stacks.math.columbia.edu/tag/010N`, passed only
  because the coverage file already carried the exact-URL receipt reused from
  earlier repository evidence.

- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-8.coverage.json --out /tmp/frontier-24-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-24-batch-8-url-liveness.json`
  with shell-side DNS failures:
  - `curl: (6) Could not resolve host: math.mit.edu`
  - `curl: (6) Could not resolve host: math.ucla.edu`
  - `curl: (6) Could not resolve host: stacks.math.columbia.edu`

- `git diff --check`
  -> clean

## 8. Post-validation interpretation

The scaffold gates that inspect the manifest and the harvest **passed**. The
only red gates are the source-fetch and URL-liveness checks, and both failures
are transport failures in the shell environment rather than evidence that the
recorded sources are dead.

Reasons:

- all four recorded URLs were re-opened successfully in the web reader on
  August 29, 2026
- `coverage-checklist` passed
- whole-run manifest-only `content-policy` passed
- `validate-plan` ended `OK`
- the failing source tools stopped at DNS resolution, not at an HTTP 404, bot
  wall, mismatched locator, or wrong-document body

So the exact blocker is:

**This runner cannot resolve the academic source hosts from the shell, so it
cannot mint new fetch stamps or a live liveness receipt even though the URLs
are reader-openable and the harvest rows match the live texts.**

That means re-sourcing is **not** justified by the evidence gathered in this
dispatch. The next correct action on a runner with working DNS is:

1. Re-run `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-8.coverage.json --stamp`.
2. Re-run `node tools/url-sweep.mjs --coverage research/frontier-24-batch-8.coverage.json --out /tmp/frontier-24-batch-8-url-liveness.json --recover --fail-on-dead`.
3. Only if those runs still fail for a specific source after DNS works, recover
   a same-text live or archived URL first and re-source only if that recovery
   genuinely fails.

## 9. Orchestrator resolution

On Saturday, August 29, 2026, the network-enabled orchestrator performed the
required follow-up:

- `source-fetch-check --stamp` passed with `4/4 source(s) fetch-verified`
  and `3 newly stamped`.
- `url-sweep --recover --fail-on-dead` passed with `4/4 live`, `0 failed`,
  `0 recoverable`, and `0 suspect`.

The shell-DNS blocker is resolved and no batch-8 source remains unfetched.

## Step-3 fix pass

I re-read `research/frontier-24-alpha-b-step3-scaffold-review.md` on Saturday,
August 29, 2026. That review records batch `8`
(`chain-complexes-and-homology`) as `sufficient` with `no repair needed`, and
it contains no `B8-*` finding id. The only numbered findings in the group-`b`
review are batch-9 repairs, so there is no batch-8 manifest or coverage repair
to apply.

## Step-5 authoring

Authoring completed on Saturday, August 29, 2026, for the full owned A/B pair.
All authored page files and item files remain `status: draft`.

### Authored page files

- `library/homological-algebra/chain-complexes-and-homology.md`
- `library/homological-algebra/chain-complexes-and-homology-examples.md`

### Authored A-page items

- `def-chain-complex-in-an-abelian-category`
- `def-cochain-complex-in-an-abelian-category`
- `def-bounded-bounded-below-and-bounded-above-complex`
- `def-zero-and-stalk-complex`
- `def-cycle-and-boundary-subobjects-of-a-complex`
- `lem-the-boundary-subobject-factors-through-the-cycle-subobject`
- `def-homology-object-of-a-chain-complex`
- `def-cohomology-object-of-a-cochain-complex`
- `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex`
- `thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero`
- `prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees`
- `def-chain-map`
- `def-cochain-map`
- `prop-identities-and-composites-of-chain-maps-are-chain-maps`
- `def-category-of-chain-complexes`
- `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`
- `thm-a-chain-map-induces-a-well-defined-map-on-homology`
- `prop-homology-respects-identities-and-composition`
- `thm-homology-is-an-additive-functor`
- `def-quasi-isomorphism`
- `prop-isomorphisms-of-complexes-are-quasi-isomorphisms`
- `prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is`
- `def-subcomplex`
- `lem-the-differential-descends-to-a-quotient-complex`
- `def-quotient-complex`
- `def-short-exact-sequence-of-complexes`
- `lem-the-kernel-of-a-chain-map-is-computed-degreewise`
- `lem-the-cokernel-of-a-chain-map-is-computed-degreewise`
- `prop-images-and-coimages-of-chain-maps-are-computed-degreewise`
- `thm-the-category-of-complexes-in-an-additive-category-is-additive`
- `thm-the-category-of-complexes-in-an-abelian-category-is-abelian`
- `cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise`
- `prop-a-subcomplex-is-the-kernel-of-its-quotient-map`
- `thm-the-first-isomorphism-theorem-for-complexes`
- `prop-finite-biproducts-of-complexes-are-computed-degreewise`
- `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials`
- `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps`
- `thm-an-exact-functor-commutes-with-homology`
- `cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative`
- `def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups`
- `thm-euler-poincare-formula-for-finite-free-complexes`
- `fs-any-sequence-of-morphisms-is-a-chain-complex`
- `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles`
- `fs-a-chain-map-is-determined-by-its-maps-on-homology`
- `fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes`
- `fs-an-additive-functor-commutes-with-homology`
- `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category`

### Authored B-page items

- `ex-the-zero-differential-complex-has-homology-equal-to-each-term`
- `ex-a-two-term-complex-and-its-kernel-and-cokernel-homology`
- `ex-the-multiplication-by-m-complex-computes-a-cyclic-group`
- `ex-an-exact-short-sequence-as-an-acyclic-three-term-complex`
- `ex-a-split-exact-complex-contracts-degree-by-degree`
- `ex-a-chain-map-computed-on-cycles-boundaries-and-homology`
- `cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes`
- `cex-two-distinct-chain-maps-inducing-the-same-homology-map`
- `ex-a-subcomplex-and-its-quotient-complex`
- `ex-euler-poincare-for-a-finite-complex`

### Proof-contract artifact

- Created `research/frontier-24-batch-8.proof-contracts.json`.
- Regenerated its `citations` and `derivations` from the final on-disk item
  text with `node tools/regen-contract-entries.mjs ...`.

### Provenance and dependency rationale

- The three well-definedness obligations were moved into the schema's dedicated
  `justified_by` field rather than left as ordinary `deps`:
  `def-homology-object-of-a-chain-complex`,
  `def-cohomology-object-of-a-cochain-complex`, and
  `def-quotient-complex`.
- `thm-euler-poincare-formula-for-finite-free-complexes` kept the planned claim,
  but its proof needed the actual published bridge from abelian groups to
  finite free `\mathbb Z`-modules. I therefore cited the PID/module items the
  proof really uses instead of pretending the rank argument is already available
  from the chain-complex sources alone. Its statement provenance is recorded as
  `ai-altered` for that reason.
- `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category`
  is refuted by deriving AB4 from the claimed homology-commutation property and
  recording the existence of non-AB4 abelian categories as an explicit
  assumption `[A1]` instead of smuggling it in as an uncited internal theorem.

### Narrowed or dropped claims

- No batch-8 item was dropped.
- No planned item statement was narrowed relative to the scaffold manifest.

### Blockers

- No batch-local authoring blocker remains on disk after the scoped checks
  below.

### Checks run

- `node tools/tsx-run.mjs tools/reflow.mts $(node -e "...batch-8 item list...")`
  to normalize proof rows before precheck.
- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch-8 proof-bearing item list...")`
  -> `41 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-24-batch-8.pages.json`
  -> `content-policy: 57 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing out-of-group
  `redundant-prereq` warnings.
- `node tools/proof-contract.mjs research/frontier-24-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 41/41 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-8.proof-contracts.json --fail-on-missing-quote`
  -> `121 citation(s) over 41 authored item(s)`, no missing quote or widening
  candidate.
- `node tools/boundary-audit.mjs research/frontier-24-batch-8.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> no contradicted disposition and no template cluster at threshold.
- `git diff --check -- items library/homological-algebra research/frontier-24-batch-8.proof-contracts.json research/frontier-24-batch-8.notes.md`
  -> clean.

| finding id | disposition | evidence | changed scaffold record |
|---|---|---|---|
| `B9-1` | pushback as out-of-scope for batch `8` | `research/frontier-24-alpha-b-step3-scaffold-review.md` assigns `B9-1` to page `smooth-partitions-of-unity-and-exhaustions` in batch `9`, while the batch-8 row says `chain-complexes-and-homology` is `sufficient` with `no repair needed` | none |
| `B9-2` | pushback as out-of-scope for batch `8` | `research/frontier-24-alpha-b-step3-scaffold-review.md` assigns `B9-2` to page `tangent-cotangent-and-the-differential` in batch `9`, while the batch-8 row says `chain-complexes-and-homology` is `sufficient` with `no repair needed` | none |

Required validator reruns on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs research/frontier-24-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-1.pages.json research/frontier-24-batch-2.pages.json research/frontier-24-batch-3.pages.json research/frontier-24-batch-4.pages.json research/frontier-24-batch-5.pages.json research/frontier-24-batch-6.pages.json research/frontier-24-batch-7.pages.json research/frontier-24-batch-8.pages.json research/frontier-24-batch-9.pages.json research/frontier-24-batch-10.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing out-of-group
  `redundant-prereq` warnings

Batch-8 scaffold records changed in this fix pass:

- `research/frontier-24-batch-8.notes.md` only
