# Frontier 23, batch 4 - scaffold notes

## Continuity checkpoint

- Current substage: step-1 scaffolding is complete on the current batch-4 bytes.
- Owned artifact paths: `research/frontier-23-batch-4.pages.json`, `research/frontier-23-batch-4.coverage.json`, and `research/frontier-23-batch-4.notes.md`.
- Exact next action: await step-3 review or a batch-local source/scaffold defect; otherwise do not edit batch 4 again before authoring.

## Scope, order, and design/spec drift

This batch owns the single abstract-algebra pair
`characters-and-the-orthogonality-relations` /
`characters-and-the-orthogonality-relations-examples`.

The governing design block is `research/plan-algebra-track-expansion.md` RT-3 at
lines 1532-1574. I used that block as controlling.

Recorded drift, with the manifest kept aligned to `research/plan-spec.json` as
instructed:

- Design order: `143` for the A page and `144` for the B page.
- Spec / batch manifest order: `147` for the A page and `148` for the B page.
- Action taken here: preserved the spec orders in the manifest and recorded the
  conflict here for stage-1 drift handling.

The design and the spec agree on the page-level prerequisites:

- `maschkes-theorem-and-complete-reducibility`
- `inner-product-spaces-and-orthogonality`
- `tensor-products-of-modules`

No split is needed. The A page currently carries 30 scaffold items, well below
the 60-item ceiling.

## Source verification and URL discipline

I read and harvest-backed the page from three independent sources:

1. Peter Webb, *A Course in Finite Group Representation Theory*.
2. Etingof-Golberg-Hensel-Liu-Schwendner-Vaintrob-Yudovina, *Introduction to
   Representation Theory*.
3. Meynet-Moscrop, *McKay quivers and decomposition* Appendix A.3 together with
   its `D_4` example.

Fetch verification on Saturday, August 29, 2026:

- The three URLs were reopened through the web reader at the exact locators now
  recorded in `research/frontier-23-batch-4.coverage.json`.
- The old `www-users.cse.umn.edu` Webb PDF no longer reopened reliably from
  this runner, so I recovered the same prepublication book at
  `https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf`, preserved
  the former CSE-hosted URL as `original_url`, and kept the same text range and
  harvest dispositions.
- Because this shell runner does not have dependable outbound DNS for the
  fetch-at-harvest tools, the durable `fetch_verified` stamps remain minimal
  hand-written web-open confirmations. `source-fetch-check` only requires those
  durable stamps to exist.

No mathematical re-source was needed. The three current coverage URLs were read
again at their recorded locators on Saturday, August 29, 2026.

## A-page scaffold decisions

### Conventions fixed explicitly

- The page opens with `rem-standing-hypotheses-for-ordinary-character-theory`
  to satisfy the design requirement that the scope be fixed numerically:
  `G` finite, base field `\\mathbb C`, and every representation
  finite-dimensional.
- The class-function inner product is defined using the library's published
  linear-first convention from
  `inner-product-spaces-and-orthogonality`. I recorded that decision both in
  the manifest and in the coverage harvest because earlier run material warned
  that a later representation-theory track depends on this exact convention.
- I kept the page entirely finite-group and ordinary-character only. No
  infinite-group, unitary-representation, harmonic-analysis, or modular
  character material is load-bearing anywhere in the scaffold.

### Added local bridge items

The published library already had Maschke, Schur, the group-ring dictionary,
the regular representation, complete reducibility, the sum-of-squares theorem,
the irreducibles-versus-conjugacy-classes theorem, tensor products of modules,
and the linear-algebra inner-product machinery. The missing local bridges were:

- the character, class-function, character-table, dual-representation, and
  character-kernel definitions;
- the fixed-subspace definition and averaging-projector lemma;
- the identification of intertwiners with fixed points in `V^* \\otimes W`;
- the quotient-factorization bridge for representations whose kernel contains a
  normal subgroup.

Those are the minimum items needed to carry the orthogonality proofs, the
kernel/normal-subgroup theorem, and the examples page without hidden forward
references.

### Proof-route decisions

- `prop-basic-value-properties-of-a-complex-character` groups the immediate
  trace/eigenvalue facts together: `\\chi(1)=\\dim V`, class-function
  invariance, the root-of-unity sum, the scalar-equality criterion, and
  `\\chi(g^{-1})=\\overline{\\chi(g)}`. That keeps the later kernel theorem and
  dual-character formula honest without bloating the page into five tiny
  isolated propositions.
- The first orthogonality relation follows the design's route exactly:
  `\\dim \\operatorname{Hom}_G(V,W)=\\langle \\chi_V,\\chi_W\\rangle`, proved by
  averaging onto fixed points.
- The basis theorem for irreducible characters uses the already-published RT-2
  count of irreducibles versus conjugacy classes. I did not re-scaffold that
  theorem here, per the design warning that it is a separate two-dimension
  computation.
- The normal-subgroup theorem goes through quotient factorization plus the
  faithful regular representation of `G/N`. That keeps the result internal to
  the library and avoids appealing to a source-only assertion.

### Known limits

- I did not scaffold a separate theorem recovering `Z(G)` from the character
  table. Meynet-Moscrop Appendix A.3 states that stronger center-reading
  result, but the design for RT-3 only requires kernels and normal subgroups.
- The page defines kernels of characters and proves they agree with
  representation kernels, but it does not open induction, restriction, or
  quotient-character functoriality beyond what the normal-subgroup theorem
  genuinely needs. Those belong on the next page.

## B-page scaffold decisions

- I kept the examples page at 17 items: 12 worked examples and 5 false
  statements.
- Four new batch-local bridge examples now carry the degree and class data that
  alpha said could not be borrowed from foreign `-examples` pages: one each for
  finite cyclic groups, `S_3`, `A_4`, and `S_4`.
- The design's `D_4` notation is realized as the library's
  `\\operatorname{Dih}(C_4)`. The notes call that out explicitly so later
  authoring does not silently introduce a competing name.
- `fs-nonisomorphic-finite-groups-can-have-the-same-character-table` is the
  landmark false statement from the design, backed by the side-by-side
  `Q_8` and `\\operatorname{Dih}(C_4)` tables.
- I placed the standard `S_n` representation example before the local `S_3`
  degree witness and the full `S_4` table because both computations use the
  permutation character, and the `S_4` computation also uses its sign twist.
- The last false statement keeps the hypothesis in the title, per the design
  trap about false-statement titles carrying their full claim.

## Dependency rationale

Page-level dependencies stay exactly as the spec declares.

At item level, the scaffold leans on already-published material from:

- `maschkes-theorem-and-complete-reducibility`
- `inner-product-spaces-and-orthogonality`
- `tensor-products-of-modules`
- `the-group-algebra-and-representations`
- `normal-subgroups-and-quotient-groups`
- `conjugacy-and-simplicity-in-the-symmetric-groups`
- `the-structure-of-finite-abelian-groups`
- earlier linear-algebra, group-theory, and trace prerequisites in their
  closure

Key choices:

- The quotient-factorization proposition is local because the current published
  library had the group quotient map but not the representation-language
  factorization result this page needs.
- The examples page now uses four batch-local bridge examples for cyclic,
  `S_3`, `A_4`, and `S_4` degree/class data. Every B-page dependency lands
  either on the A page or an earlier item on this B page; the post-fix local
  audit reports `0` foreign examples-page dependencies.
- The `S_4` table depends on the earlier standard-representation example and on
  the earlier local `S_4` class-data witness, not the other way around.
- The normal-subgroup theorem depends on the faithful regular representation and
  complete reducibility, not on the next induction page.

## Validation

Checks run on Saturday, August 29, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-23-batch-4.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-23-batch-4.coverage.json','utf8'))"`
- local foreign-examples audit over `research/frontier-23-batch-4.pages.json`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-4.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-4.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-4.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `timeout 25s node tools/url-sweep.mjs --coverage research/frontier-23-batch-4.coverage.json --out /tmp/frontier-23-batch-4-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
- `node tools/prosecheck.mjs research/frontier-23-batch-4.notes.md --warnings`

Actual results:

- `node -e "JSON.parse(...)"` -> `json-parse: ok`
- local foreign-examples audit -> `local-foreign-examples-check: 0 foreign examples-page dependencies`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-4.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  -> `content-policy: 504 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-4.pages.json`
  -> `content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass. The validator ended with `OK - declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.` The printed diagnostics before that were the repository's standing run-wide `redundant-prereq` advisories outside batch 4.
- `node tools/prosecheck.mjs research/frontier-23-batch-4.notes.md --warnings`
  -> pass with `0` errors and `3` heuristic `count-in-prose` warnings.
- `timeout 25s node tools/url-sweep.mjs --coverage research/frontier-23-batch-4.coverage.json --out /tmp/frontier-23-batch-4-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
  -> shell-level failure only:
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-23-batch-4-url-liveness.json`

The three failed hosts were:

- `https://link.springer.com/article/10.1007/s11005-023-01685-9`
- `https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf`
- `https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf`

Each failure was the same transport-local DNS error from `curl`:
`Could not resolve host`. I did not re-source on that basis because the same
three current URLs were reopened successfully through the web reader on
Saturday, August 29, 2026 at the locators recorded in the coverage file:

- Webb at the recovered Minnesota-hosted PDF, including the contents page, the
  Chapter 4 `4.1` / `4.2` span, and Example `4.3.4`.
- Etingof et al. at the extended Section `3.3` through Section `3.9` span,
  including the cyclic-group and `S_3` examples and the worked `A_4` / `S_4`
  tables.
- Meynet-Moscrop at Section `4.1` and Appendix `A.3`, including equations
  `(A.14)` through `(A.18)`.

So the shell liveness probe remains a runner-local blocker, not evidence that
the coverage URLs need mathematical replacement.

## Step-3 fix pass

- `A4-1` — applied. Alpha required batch-local replacements for four illegal
  foreign `-examples` dependencies. I added
  `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root`,
  `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two`,
  `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes`, and
  `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six`,
  then rewired the four dependent table examples to those local witnesses.
- Disposition: fixed on current batch-4 bytes. The post-fix local audit reports
  `0` foreign examples-page dependencies, and `validate-plan` still ends `OK`.
- Evidence: `research/frontier-23-alpha-a-step3-scaffold-review.md` and
  `research/frontier-23-alpha-a-step3-verdicts.json` both require local
  degree-data witnesses for the cyclic and `S_3` tables and local
  subgroup/conjugacy-class witnesses for the `A_4` and `S_4` tables.
- Changed scaffold record: `research/frontier-23-batch-4.pages.json` now has
  `47` scoped items with the four new local bridge examples and no foreign
  `-examples` dependencies; `research/frontier-23-batch-4.coverage.json` now
  harvest-backs those bridge items, extends the Etingof locator to Section
  `3.3`, and preserves the superseded Webb CSE URL as `original_url` while the
  live Minnesota-hosted PDF carries the current `url`.

## Step-5 authoring

### Authored artifacts

Authored all 47 planned items and both pages, all `status: draft`:

- A page `characters-and-the-orthogonality-relations` (30 items), file
  `library/abstract-algebra/characters-and-the-orthogonality-relations.md`.
- B page `characters-and-the-orthogonality-relations-examples` (17 items),
  file
  `library/abstract-algebra/characters-and-the-orthogonality-relations-examples.md`.
- All 47 item files in `items/`, ids unchanged from the scaffold manifest:
  the 1 remark, 9 definitions, 8 theorems, 2 lemmas, 2 propositions, 8
  corollaries, 12 examples, and 5 false statements planned for batch 4. The
  four batch-local bridge examples added at the Step-3 fix pass (cyclic
  characters, `S_3` degrees, `A_4` Klein-four/classes, `S_4` classes) are
  authored here and homed on the B page.

Written `research/frontier-23-batch-4.proof-contracts.json`: scope is the 37
proof-bearing items; the remark and the 9 definitions carry no contract
entries, matching prior runs where non-proof items are out of contract scope.
Every proof-bearing entry carries its `citations`, `derivations`, all eight
standard boundary dispositions, and `routine_steps: []`.

### Provenance rationale

All 47 items carry `provenance` with both component values. Statements are
`literature-derived` except the five false statements and the
standing-hypotheses remark, which are `ai-altered`; every proof is
`ai-altered` (the source routes are reworked into the schema's phase format).
The three scaffold sources back the content exactly as the coverage file
records them: Webb at the recovered UMN-hosted PDF, Etingof et al. at the OCW
PDF, and Meynet-Moscrop at the Springer paper. Every proof-bearing item lists
`sources.references` URLs present in the coverage file. No item uses a
recorded-not-proved or external-dependency fallback.

### Canonical precheck repairs

The interrupted authoring run had committed 47 item files whose proof steps
were hard-wrapped across physical lines; the line-based phase checker then
failed 37 files with `untagged-steps`. I ran `tools/reflow.mts` over the
proof sections and then adopted the checker's canonical phase stratification
for every file that passed only after auto-repair: step numbers are
relabelled and step lines reordered into layered dependency order by the
checker's own `layerRepair`, and `step p.q` references are renamed to match.
After the fix point, `precheck` reports `37 checked, 0 failing — all clean`
with no repair step.

### Content corrections made while verifying

All are batch-local and keep the claims of the cited targets intact:

- `cor-the-regular-character-gives-the-sum-of-squares-formula`: the proof
  used additivity of characters on direct sums without declaring it. Added
  `thm-characters-of-direct-sums-tensor-products-and-duals` to `deps`, a new
  fact `[F3]` carrying the additivity clause, and cited `[F3]` in step 2.1.
- `lem-averaging-operator-projects-onto-the-fixed-subspace`: the linked
  assumption `[A1]` (trace linearity via `prop-trace-is-linear`) is not used
  anywhere in the proof; `tr P = dim V^G` follows from the projection block
  form `[A2]`. Dropped the fact and the dep so no citation is fabricated.
- `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`:
  the fact `[F3]` quoting the character-table definition is never cited by a
  step. Dropped the fact and the `def-character-table-of-a-finite-group` dep;
  the theorem needs neither.
- `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`:
  the definition of normality was linked only in an uncited fact. The
  Statement now links `def-normal-subgroup` (the dep stays declared), the
  uncited fact is dropped, and the remaining facts renumber `F3->F2`,
  `F4->F3` with all step citations updated.
- Two phantom step references fixed in prose: `thm-character-inner-product-computes-intertwiner-dimension`
  and `fs-every-complex-class-function-with-self-inner-product-one-is-a-character`
  both said "steps 1.1 through 3.1" where the last step is 1.3; corrected to
  "through 1.3".
- Missing fact citations added so every fact with a wikilink is actually used:
  `[F1]` (class sizes) in step 5.1 of the `S_4` table, `[F1]` (order 8) in
  step 6.1 of the `Dih(C_4)` table, and `[F1]` (trivial character) in step
  1.2 of the unit-inner-product false statement.
- `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`:
  a `cases` display split across source lines was joined to one line to
  satisfy the one-line-display render contract.

Title alignment: the authored title of
`thm-character-inner-product-computes-intertwiner-dimension` states
`dim Hom_G(W,V)`, the orientation its proof actually establishes through the
fixed points of `W* tensor V`; the scaffold title had the equivalent
`dim Hom_G(V,W)`. No claim was narrowed by this.

### Narrowed / dropped claims

No planned item was dropped and no statement was narrowed. Three local bridge
facts were removed as unused declarations, not claims: trace linearity in the
averaging lemma, the normality definition in the quotient proposition, and
the character-table definition in the column-orthogonality theorem. The
design's `A_5` table remains deliberately unclaimed (design trap (iv)), and
the center-reading statement of Meynet-Moscrop (A.18) stays out-of-scope as
recorded in the coverage harvest. Design order 143/144 versus spec order
147/148 is carried from the scaffold notes; authoring followed the spec
orders and the current `plan-spec.json`.

### Checks run (all on the batch scope)

- `precheck` over the 47 batch items: 37 proof-bearing checked, 0 failing.
- `content-policy` item mode on `research/frontier-23-batch-4.pages.json`:
  `47 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan research/plan-spec.json`: OK, acyclic and consistent.
- `proof-contract --strict` on the batch contract: `0 error(s), 0 warning(s),
  37/37 item(s) checked`; also clean after a one-batch merge test.
- `boundary-audit --fail-on-contradicted --fail-on-template`: clean; no
  contradicted dispositions and no template clusters.
- `citation-fidelity --fail-on-missing-quote`: 126 citations over 37 items,
  every recorded quote present in its cited item; no widening candidates.
- `finite-smoke`: `0 error(s), 0 check(s) over 0/37 item(s)` — honest
  disposition: no registered check in `tools/finite-smoke.mjs` models a
  character-table or orthogonality claim, and attaching `cyclic-subgroup-lagrange`
  or `matrix-ring-laws-mod-n` would manufacture coverage. Recorded here
  rather than fabricated.
- `risk-report`: 37 items routed, 0 errors (tiered HIGH/CRITICAL items are
  listed; Step 6 owns the `risk_review` records).
- `rendercheck`, `depcheck`, `fwdcheck`, `extcheck`, `depsource`, `pathcheck`:
  no batch-4 finding in any of them. The repo-level failures that remain are
  foreign-batch (smooth-manifolds batch 9: three unresolved wikilinks, three
  multiline displays, one undeclared forward reference) and are not batch 4.

### Blockers

None batch-local. The shell DNS liveness probe from the scaffold notes remains
a runner-local transport issue, not a content blocker; the three coverage
URLs were re-opened at their recorded locators and the durable
`fetch_verified` stamps exist.
