# Frontier 24, batch 2 - scaffold notes

## Continuity checkpoint

- Current substage: step-1 scaffolding is complete on the current batch-2 bytes.
- Owned artifact paths: `research/frontier-24-batch-2.pages.json`, `research/frontier-24-batch-2.coverage.json`, and `research/frontier-24-batch-2.notes.md`.
- Exact next action: await step-3 review or a batch-local source/scaffold defect; otherwise do not edit batch 2 again before authoring.

## Scope, order, and design reconciliation

This batch owns the single abstract-algebra pair
`induced-representations-and-frobenius-reciprocity` /
`induced-representations-and-frobenius-reciprocity-examples`.

I read both the original RT-4 design block at
`research/plan-algebra-track-expansion.md` lines `1612` onward and the later RT
reconciliation at lines `2714-2812`. The later addendum materially changes the
page: Burnside is no longer a scope denial, Mackey's criterion is included, and
the tensor-product model is retained only as a remark alongside the function
model.

Recorded drift, with the manifest kept aligned to `research/plan-spec.json` as
instructed:

- Design order: `145` for the A page and `146` for the B page.
- Spec / batch manifest order: `149` for the A page and `150` for the B page.
- Action taken here: preserved the spec orders in the manifest and recorded the
  conflict here for stage-1 drift handling.

The design and the spec still agree on the page-level prerequisites:

- `characters-and-the-orthogonality-relations`
- `free-modules-and-exact-sequences`

No split is needed. The A page now carries `27` scaffold items and the B page
`9`, both well below the 60-item ceiling.

## Source verification and URL discipline

I harvest-backed the A page from three independent sources:

1. Peter Webb, *A Course in Finite Group Representation Theory*.
2. Pavel Etingof et al., *Introduction to Representation Theory*, Chapter 4.
3. Anupam Singh, *Representation Theory of Finite Groups*.

All three URLs were reopened over HTTP(S) in the web reader on Saturday,
August 29, 2026 at the locators recorded in
`research/frontier-24-batch-2.coverage.json`. The durable
`fetch_verified` fields in that file are therefore web-open confirmations on the
current URLs.

URL choices:

- Webb uses the live Minnesota-hosted PDF
  `https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf`, not the
  older `www-users.cse.umn.edu` host that earlier runs had to recover away
  from.
- MIT OCW uses the chapter-specific PDF URL for Chapter 4, because that is the
  exact full-text range read for induction, virtual characters, and Burnside.
- Anupam Singh uses the direct arXiv PDF at
  `https://arxiv.org/pdf/1001.0462.pdf`, not the `/abs/` metadata page.

No mathematical re-source was needed.

## A-page scaffold decisions

### Route and conventions

- The scaffold follows the live RT-4 reconciliation, not only the older RT-4
  bullet list. That means Burnside's theorem is included, Mackey's criterion is
  included, and the false-scope note saying Burnside is not stated is not
  carried forward.
- Induction is defined by the function model, exactly as the design requires.
  The tensor-product construction `k[G] \\otimes_{k[H]} W` is recorded only in
  `rem-induced-representation-agrees-with-the-tensor-product-model`.
- The first induction/Frobenius items are stated in module language where the
  library already has the `R[G]` module dictionary. The character-theoretic
  applications then specialize to complex characters, because the current
  published RT-3 page is ordinary complex character theory on disk.
- The central-character and degree-divisibility thread cites the published
  integrality block on `chain-conditions-and-semisimple-modules`; no fresh
  algebraic-integer theory is reminted here.

### Shape of the A page

- Induction core: definition by covariant functions, coset-transversal
  decomposition, dimension, tensor-model remark, induced character formula, and
  the permutation representation on `G/H`.
- Reciprocity core: induction left adjoint to restriction, character-level
  Frobenius reciprocity, virtual characters, transitivity, projection formula,
  and the corollary that every irreducible character appears in an induction
  from any subgroup constituent of its restriction.
- Mackey core: double cosets, conjugate characters, the Mackey restriction
  formula, and Mackey's irreducibility criterion.
- Arithmetic/applications core: central characters, algebraic integrality,
  Frobenius divisibility, Schur's center-index divisibility as a canonical
  synthesis, the nonabelianity corollary, the roots-of-unity lemma, the
  prime-power class theorem, and Burnside's `p^aq^b` theorem.

### Deliberate choices and one design defect

- I kept `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center`
  even though none of the exact read ranges isolated it under its own heading.
  The live design explicitly keeps it, and the notes record the intended proof
  strategy honestly: the tensor-power argument, not a fictitious source theorem.
- I did not duplicate the published RT-3 examples-page `S_4` table calculations.
  Rebuilding them here would either duplicate foreign B-page claims or make this
  batch depend on another examples page, which the validator forbids. The B page
  instead uses legal same-page `S_3` witnesses plus the abelian `C_4`
  divisibility witness.
- The original RT-4 false-statement list contains `Res` of a faithful
  representation is faithful. That statement is true: the kernel of the
  restricted action is `H \\cap \\ker(\\rho)`, so faithfulness is preserved.
  I did not scaffold a knowingly false carrier. The nearest honest boundary is
  `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible`,
  which matches the design's own earlier warning that restriction need not
  preserve irreducibility.

## B-page scaffold decisions

- The B page carries `5` worked examples and `4` false statements.
- The two `S_3` induction examples do the real work: one induction from the
  order-three subgroup gives an irreducible degree-two character, while
  induction from an order-two subgroup gives `1` plus an irreducible degree-two
  character. Those two examples are enough to verify Frobenius reciprocity
  numerically and to refute both `Ind` irreducible `=>` irreducible and
  `Ind Res = Id`.
- The restriction boundary is carried by
  `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters`
  and the matching false statement.
- The divisibility boundary uses `C_4`, not `S_4` or `Q_8`, because it stays
  entirely inside A-page theorems and published A-page group facts while still
  showing that divisibility of irreducible degrees by `|G|` is not an
  equivalence.

## Validation

Commands run on Saturday, August 29, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-24-batch-2.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-24-batch-2.coverage.json','utf8'))"`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-2.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-2.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-2.coverage.json --out /tmp/frontier-24-batch-2-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`

Actual results:

- `node -e "JSON.parse(...)"` -> `json-parse: ok`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-2.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 450 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.` The only diagnostics before that were the standing repository-wide `redundant-prereq` advisories outside this batch.

`url-sweep` is the lone failing validator:

```text
url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-24-batch-2-url-liveness.json
FAIL 0 https://arxiv.org/pdf/1001.0462.pdf — curl: (6) Could not resolve host: arxiv.org
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf — curl: (6) Could not resolve host: ocw.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf — curl: (6) Could not resolve host: www-users.math.umn.edu
  no archived snapshot under any host variant — re-sourcing is justified here
```

I did not re-source on that basis, because all three current URLs were already
reopened successfully in the web reader on Saturday, August 29, 2026 at the
locators recorded in `research/frontier-24-batch-2.coverage.json`. On the
current evidence this is a runner-local DNS/liveness failure, not proof that
the recorded sources are dead or that their text is unavailable.

Orchestrator resolution on Saturday, August 29, 2026:

- `source-fetch-check --stamp --force` generated fresh mechanical content
  hashes for all three sources: `3/3 source(s) fetch-verified (3 newly stamped)`.
- `url-sweep --recover --fail-on-dead --timeout-ms 4000` reported `3/3 live`,
  zero failed, zero recoverable, and zero suspect.

The batch-2 runner-local liveness blocker is resolved.

## Step-3 fix pass

- Finding id: `unlabelled batch-2 direct repair from research/frontier-24-alpha-a-step3-scaffold-review.md` — accepted; no further scaffold edit was needed on the current bytes.
  Evidence: the Alpha step-3 review says batch `2` was missing two A-page coverage carriers, `def-induced-character-of-a-complex-representation` and `def-conjugate-representation-and-conjugate-character`. On current disk, `research/frontier-24-batch-2.coverage.json` now carries canonical `included` rows for both exact item ids, and a manifest-to-coverage alignment check over the `27` A-page items returns no missing carriers.
  Changed scaffold record: `research/frontier-24-batch-2.coverage.json` already contains the repaired canonical rows; this fix pass updates `research/frontier-24-batch-2.notes.md` to record that accepted repair on the current bytes.

  Targeted alignment check:
  `node -e "..."`
  -> `{ "a_page": "induced-representations-and-frobenius-reciprocity", "a_items": 27, "harvested_or_canonical": 30, "missing": [] }`

- Source verification for this fix pass:
  I re-opened the three recorded A-page sources through the web reader on Saturday, August 29, 2026 and verified that each live HTTP(S) URL still opens at the harvested document: Webb, *A Course in Finite Group Representation Theory* at `https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf` (294-page PDF, with the recorded contents and Chapter 3-5 ranges present); MIT OCW Chapter 4 at `https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf` (32-page PDF); and Singh, *Representation Theory of Finite Groups* at `https://arxiv.org/pdf/1001.0462.pdf` (112-page PDF). No URL repair or re-sourcing was needed.
  Changed scaffold record: none beyond this notes receipt; the current `fetch_verified` stamps in `research/frontier-24-batch-2.coverage.json` remain valid for `source-fetch-check`.

  Mechanical fetch gate:
  `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-2.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-24-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.` The preceding diagnostics were the standing repository-wide `redundant-prereq` advisories outside batch `2`.

## Step-5 authoring

Authored draft pages:

- `library/abstract-algebra/induced-representations-and-frobenius-reciprocity.md`
- `library/abstract-algebra/induced-representations-and-frobenius-reciprocity-examples.md`

Authored draft A-page items:

- `def-induced-r-linear-g-module-by-h-covariant-functions`
- `prop-induced-module-decomposes-over-a-left-transversal`
- `cor-dimension-of-an-induced-finite-dimensional-representation`
- `rem-induced-representation-agrees-with-the-tensor-product-model`
- `def-induced-character-of-a-complex-representation`
- `thm-frobenius-formula-for-induced-characters`
- `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets`
- `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`
- `cor-frobenius-reciprocity-for-complex-characters`
- `def-virtual-character-and-character-ring-of-a-finite-group`
- `thm-transitivity-of-induction-for-finite-groups`
- `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings`
- `cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction`
- `def-double-cosets-of-two-subgroups`
- `def-conjugate-representation-and-conjugate-character`
- `thm-mackey-double-coset-formula-for-restricting-an-induced-character`
- `thm-mackeys-irreducibility-criterion-for-finite-groups`
- `def-central-character-of-an-irreducible-complex-character`
- `prop-class-sums-act-by-central-character-scalars`
- `thm-central-characters-are-algebraic-integers`
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order`
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center`
- `cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian`
- `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant`
- `thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action`
- `thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup`
- `thm-burnsides-p-a-q-b-theorem`

Authored draft B-page items:

- `ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character`
- `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters`
- `ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character`
- `ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions`
- `ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence`
- `fs-an-induced-irreducible-complex-character-is-always-irreducible`
- `fs-induction-followed-by-restriction-is-the-identity-on-complex-representations`
- `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible`
- `fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree`

Provenance rationale:

- Core induction, reciprocity, Mackey, central-character, divisibility, and Burnside statements are tagged `literature-derived` at statement level because the exact claims are harvested from Webb, MIT Chapter 4, and Singh's Chapters 15-20 as recorded in `research/frontier-24-batch-2.coverage.json`.
- The local proofs are tagged `ai-altered` where they adapt the harvested route to the library's existing dependency spine, especially for the function-model induction proofs, the tensor-power proof of the center-index divisibility theorem, and the Burnside reduction through the prime-power class theorem.
- The B-page witness items and false statements are tagged `ai-altered` or `ai-generated` only at the proof level where the concrete $S_3$ and $C_4$ calculations are library-local worked examples built from the A-page theorems rather than quoted as standalone theorem statements from the sources.

Narrowed or dropped claims:

- No scaffolded item was dropped.
- The older RT-4 denial that Burnside's theorem would remain out of scope was not carried into authoring; the live RT reconciliation already withdrew that denial, and the authored page follows the reconciled scope.
- The design's old false claim about restriction preserving faithfulness remained excluded, because it is true; the B page instead keeps the honest irreducibility failure witness already recorded in the scaffold notes.

Blockers:

- None at close of Step 5 on the authored batch-2 files.

Authoring checks run on Saturday, August 29, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts items/prop-induced-module-decomposes-over-a-left-transversal.md ... items/fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree.md`
  -> `29 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.` The preceding diagnostics were the standing repository-wide `redundant-prereq` advisories outside this batch.
- `node tools/content-policy.mjs research/frontier-24-batch-2.pages.json`
  -> `content-policy: 36 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-24-batch-2.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 29/29 item(s) checked`
