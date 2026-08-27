# frontier-21 · Beta-3 · batch notes — `artinian-rings-and-length`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`artinian-rings-and-length` / `artinian-rings-and-length-examples`
at orders `111.007` and `111.008`.

I read the design block in
`research/plan-commutative-algebra-track.md` at the `CA-4. Artinian rings and finite length`
section, then checked `research/plan-spec.json`, `SCHEMA.md`, and the published
dependency items that the design names or requires.

Artifacts written by this dispatch:

- `research/frontier-21-batch-3.pages.json`
- `research/frontier-21-batch-3.coverage.json`
- this file

No plan structure, workflow state, published library content, or other batch
artifact was edited.

## 2. Design/spec drift

The design and the spec agree on:

- page id
- title
- order
- category
- companion page

They do **not** agree on prerequisites.

- The design says CA-4 requires CA-1 through CA-3 plus the Artinian-module,
  composition-series, and module-length spine on
  `chain-conditions-and-semisimple-modules`.
- `research/plan-spec.json` gives the formal prerequisite list as only
  `prime-spectra-and-radicals-examples`.

Per the batch brief, I did **not** resolve that conflict inside the batch. I
followed the spec prerequisite list in the manifest and recorded the conflict
here. The earlier drift notes already observe that the current closure from
`prime-spectra-and-radicals-examples` reaches the chain-conditions page, so the
scaffold remains dependency-closed without editing the run plan.

## 3. Scaffold shape

The A page has **12 items**. The B page has **6 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page has three proof clusters:

- **Artinian ideal theory.**
  The domain-to-field lemma, primes are maximal, finiteness of maximal ideals,
  nilpotence of the nilradical, and the finite-ideal Chinese remainder theorem.

- **Length and structure.**
  The commutative Artinian-implies-Noetherian theorem, the finite-length
  characterization for the regular module, the local-ring finite-length theorem,
  and the canonical product decomposition into local factors.

- **Criterion and closure consequences.**
  The finite prime set, the Noetherian criterion by maximality of primes, and
  stability under quotient and localization.

The B page keeps the examples concrete:

- the truncated polynomial ring
- the `Z/12Z` product decomposition
- the length-one field case
- the standard Noetherian-but-not-Artinian pair `Z` and `k[x]`
- the lengths of the truncated cyclic modules `R/(x^i)`
- a zero-dimensional non-Noetherian infinite product of fields

## 4. Design adjustments

I made three deliberate scaffold adjustments to avoid duplicating existing
global items while keeping the design route intact.

### Already-published module-length spine

The raw design list included two results that are already published elsewhere in
the library under different ids:

- the additivity-of-length result already exists as
  `cor-length-is-additive-in-short-exact-sequences`;
- the finite-length iff Noetherian-and-Artinian module criterion already exists
  as `thm-composition-series-iff-noetherian-and-artinian`.

I therefore **did not** mint duplicate CA-4 items for those claims. The
coverage file records the corresponding Altman-Kleiman and Stacks rows as
`already-published`.

### No duplicate Prüfer witness

The design's B-page item `ex-artinian-module-not-noetherian` is already
materially present as the published sibling example
`ex-prufer-p-group-is-artinian-not-noetherian` on
`chain-conditions-and-semisimple-modules-examples`.

I did **not** re-scaffold that witness under a new id, because re-homing it here
would silently duplicate an existing claim. If the authored B page wants the
comparison in prose, it can cross-link the published sibling example in the page
summary without adding a new item.

### Infinite-product counterexample kept, but specialized

The design explicitly wants an infinite product of fields to show that
"every prime maximal" does **not** imply Artinianity without Noetherianity.
I kept that route, but specialized it to `(\mathbb Z/2)^{\mathbb N}`.

That specialization is deliberate:

- it stays inside the design's chosen infinite-product-of-fields family;
- it avoids importing new arbitrary-product or ultrafilter infrastructure just
  to prove the prime-maximal half;
- the proof that every prime is maximal is then internal and elementary, since
  every element is idempotent and any domain quotient must collapse to the field
  with two elements.

So the example is not a pure clone of the already-published
`ex-infinite-binary-product-ring-is-not-noetherian`: it deliberately **reuses**
that published ascending-chain half on the same ring, and adds the
zero-dimensional / all-primes-maximal half that this page needs.

## 5. Source choices and URL discipline

I used five fetch-verifiable HTTP(S) sources in the coverage artifact:

1. **Altman-Kleiman, _A Term of Commutative Algebra_**.
   This is the page's textbook anchor for Section 19 length material and the
   integrated Chinese remainder exercise solution.

2. **Milne, _A Primer of Commutative Algebra_**.
   This is the independent lecture-note treatment for the Artinian-ring core,
   including the prime/maximal, finite-maximal-set, nilradical, criterion, and
   structure results.

3. **Stacks Project, Section 10.52: Length**.
   This independently checks the additivity, local nilpotence, and
   residue-field length computations used in the local finite-length theorem and
   the truncated-module example.

4. **Stacks Project, Section 10.53: Artinian rings**.
   This independently checks the Artinian-ring finiteness, nilpotence, and
   structure statements.

5. **Stacks Project, Section 15.106: Weakly étale ring maps**.
   I used this for the infinite-product-of-fields counterexample because the
   current Stacks Section 10.53 does not itself carry that example, while
   Section 15.106 explicitly records that a product of fields is absolutely flat
   and therefore reduced with all primes maximal.

### Source-range dispositions worth flagging

- Milne's `Lemma 16.5` is harvested as `out-of-scope`, not because it is wrong
  or dead weight, but because the design explicitly chose the nilpotent-radical
  filtration route for `thm-artinian-ring-is-noetherian` instead of homing the
  zero-product auxiliary lemma as a separate scaffold item.

- Milne's `Example 16.9` is also harvested as `out-of-scope`. It is a good
  zero-dimensional non-Noetherian witness, but it is **not** the witness this
  design chose; the batch keeps the infinite-product-of-fields route and says so
  honestly.

## 6. Dependency and proof rationale

The manifest's page-level prerequisite stays exactly as the spec gives it:
`prime-spectra-and-radicals-examples`. The actual item-level closure uses
published material from:

- `prime-spectra-and-radicals`
- `noetherian-rings-and-hilbert-basis`
- `localisation-of-modules-and-support`
- `chain-conditions-and-semisimple-modules`

plus earlier already-published ring and module basics.

Key dependency decisions:

- `lem-artinian-domain-is-a-field` is separated out because it is genuinely
  needed to make `thm-artinian-ring-primes-are-maximal` honest rather than
  hiding the quotient-domain argument inside one large theorem.

- `thm-chinese-remainder-theorem-for-comaximal-ideals` is scaffolded on CA-4
  even though the design table listed it later than some of the Artinian
  consequences. It is load-bearing both for the finite-product-of-fields step in
  the Noetherian proof route and for the final structure theorem, so leaving it
  implicit would make the page's intended proof route dishonest.

- `thm-artinian-ring-is-noetherian` follows the design's requested route: finite
  maximal spectrum, nilpotent nilradical, reduced quotient as a finite product
  of fields, then a finite nilpotent filtration. The field-product module step
  is intended to be proved inline inside this theorem rather than split into its
  own page item, because it is only used locally here and the page remains well
  below the item ceiling. I did **not** reduce the theorem to the
  already-published false-statement page or to a bare import of Milne's Lemma
  16.5.

- `thm-artinian-ring-has-finite-length` then uses the already-published module
  chain-condition theorem rather than re-scaffolding Jordan-Holder or finite
  composition-series machinery on this page.

Choice and foundational costs:

- the ring-theoretic Artinian results through Chinese remainder are kept in the
  choice-light route described by the design;
- `thm-artinian-ring-has-finite-length` and the converse half of
  `thm-artinian-ring-characterisation-by-primes` inherit dependent choice
  through the already-published module theorem
  `thm-composition-series-iff-noetherian-and-artinian` and through
  `thm-noetherian-ring-has-finitely-many-minimal-primes`, whose current proof
  already records the same cost;
- the identification of a local ring with its localization at its maximal ideal,
  which I use in the canonical-localization form of the structure theorem,
  inherits the library's existing Choice tag from
  `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal`.

Known limit:

- the quotient-by-powers presentation in `thm-structure-theorem-for-artinian-rings`
  is intentionally marked non-canonical in both the design and the scaffold.
  The canonical statement is the product map to the localizations.

## 7. Expected validator targets

Per `research/frontier-21-beta-batch.task.md`, the in-scope gate set for this
fresh scaffold pass is:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json ... research/frontier-21-batch-10.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-3.coverage.json --out research/frontier-21-url-liveness.json --recover --fail-on-dead`

I append the actual results below after running them.

## 8. Actual results run on Thursday, August 27, 2026

- `node tools/coverage-checklist.mjs research/frontier-21-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json ... research/frontier-21-batch-10.pages.json`
  -> `content-policy: 365 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with run-wide warnings only**. The validator ended with `OK` and
  reported no item-level cycles, unresolved ids, forward references, or B-page
  dependency violations among the pages whose item lists are currently asserted.
  The lines
  `111.007* artinian-rings-and-length 0 items <- prime-spectra-and-radicals-examples`
  and
  `111.008* artinian-rings-and-length-examples 0 items <- artinian-rings-and-length`
  are the expected readout from `research/plan-spec.json`, which this batch does
  not edit. So this validator confirms the global plan and its currently asserted
  item lists, but it does **not** validate the new batch-local item graph by
  itself at this scaffold stage. I found no warning line specific to this page
  pair beyond that expected plan-spec status display; the printed warnings are
  the run-wide pre-existing `redundant-prereq` notices on other pages.

## Step-5 authoring

Authored on Thursday, August 27, 2026:

- pages: `library/commutative-algebra/artinian-rings-and-length.md` and
  `library/commutative-algebra/artinian-rings-and-length-examples.md`
- items: `lem-artinian-domain-is-a-field`,
  `thm-artinian-ring-primes-are-maximal`,
  `thm-artinian-ring-has-finitely-many-maximal-ideals`,
  `thm-nilradical-of-artinian-ring-is-nilpotent`,
  `thm-chinese-remainder-theorem-for-comaximal-ideals`,
  `thm-artinian-ring-is-noetherian`,
  `thm-artinian-ring-has-finite-length`,
  `thm-artinian-local-ring-has-nilpotent-maximal-ideal`,
  `thm-structure-theorem-for-artinian-rings`,
  `cor-prime-set-of-an-artinian-ring`,
  `thm-artinian-ring-characterisation-by-primes`,
  `cor-artinian-quotients-and-localisations`,
  `ex-artinian-truncated-polynomial-ring`,
  `ex-artinian-product-of-local-rings`,
  `ex-field-is-artinian`,
  `ex-noetherian-not-artinian`,
  `ex-length-of-a-truncated-local-module`,
  `ex-zero-dimensional-nonnoetherian-ring`
- contract worksheet: `research/frontier-21-batch-3.proof-contracts.json`

Provenance rationale:

- All A-page theorem and corollary statements are tagged `literature-derived`.
  Their proofs are tagged `ai-altered`: the arguments were written locally from
  the stated Milne / Altman-Kleiman / Stacks route, but not copied verbatim.
- The concrete examples are also source-backed, but two are deliberately
  specialized or packaged locally rather than harvested as verbatim textbook
  examples: `ex-artinian-product-of-local-rings` and
  `ex-zero-dimensional-nonnoetherian-ring` are tagged `ai-altered` on the
  statement side for that reason.

Material authoring repairs made during Step 5:

- I flattened every numbered proof row to the canonical single-paragraph phase
  format after batch-local `precheck` first reported `untagged-steps`.
- I repaired one real boundary omission, not just formatting: the zero-ring case
  needed to be stated or handled explicitly in
  `thm-artinian-ring-has-finite-length`,
  `thm-structure-theorem-for-artinian-rings`, and
  `cor-artinian-quotients-and-localisations`.
- I removed two invalid B-page dependency edges that I had introduced during
  drafting. `thm-artinian-ring-is-noetherian` no longer depends on the
  examples-page item `ex-noetherian-integers-and-fields`, and
  `ex-noetherian-not-artinian` now uses the A-page Noetherian results directly.

Narrowed or dropped claims:

- none

Blockers:

- none within this batch

Checks actually run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-artinian-domain-is-a-field.md items/thm-artinian-ring-primes-are-maximal.md items/thm-artinian-ring-has-finitely-many-maximal-ideals.md items/thm-nilradical-of-artinian-ring-is-nilpotent.md items/thm-chinese-remainder-theorem-for-comaximal-ideals.md items/thm-artinian-ring-is-noetherian.md items/thm-artinian-ring-has-finite-length.md items/thm-artinian-local-ring-has-nilpotent-maximal-ideal.md items/thm-structure-theorem-for-artinian-rings.md items/cor-prime-set-of-an-artinian-ring.md items/thm-artinian-ring-characterisation-by-primes.md items/cor-artinian-quotients-and-localisations.md items/ex-artinian-truncated-polynomial-ring.md items/ex-artinian-product-of-local-rings.md items/ex-field-is-artinian.md items/ex-noetherian-not-artinian.md items/ex-length-of-a-truncated-local-module.md items/ex-zero-dimensional-nonnoetherian-ring.md`
  -> `18 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-21-batch-3.pages.json`
  -> `content-policy: 18 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; ends `OK — declared page order is acyclic and consistent...` and
  still reports only the standing repository-wide `redundant-prereq` warnings
- `node tools/proof-contract.mjs research/frontier-21-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 18/18 item(s) checked`
- `node tools/boundary-audit.mjs research/frontier-21-batch-3.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> `boundary-audit: 144 rows ... TEMPLATE REUSE — none ... CONTRADICTED DISPOSITIONS — none found`

Extra local graph check:

- I ran `node tools/depcheck.mjs --quiet` and filtered its output to this
  batch's page and item ids. The full command still fails on unrelated
  repository-wide pre-existing missing-item / citation issues outside batch 3,
  but after repairing the two temporary B-leaf dependencies noted above, the
  filtered scan returned no lines for `artinian-rings-and-length`.

- Supplementary local sanity checks on the batch-local artifacts:
  `JSON.parse(...)` on both JSON files -> `json-ok`;
  a manifest dependency scan over `research/frontier-21-batch-3.pages.json` ->
  `deps-ok`;
  and a manifest-to-coverage scan -> `18` new item ids covered by included or
  inline harvest rows.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-3.coverage.json --stamp`
  -> **failed mechanically**:
  `source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED`
  with `EAI_AGAIN` on all five source hosts:
  `web.mit.edu`, `www.jmilne.org`, and `stacks.math.columbia.edu`.

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-3.coverage.json --out research/frontier-21-url-liveness.json --recover --fail-on-dead`
  -> **failed mechanically**:
  `url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect`
  with `curl: (6) Could not resolve host` for the same five URLs. The written
  receipt is `research/frontier-21-url-liveness.json`.

### Interpretation of the failed URL gates

These URL-gate failures are transport failures in this sandbox, not a
mathematical or harvest failure discovered by reading:

- I opened and read the same five source URLs through the web tool during this
  dispatch before writing the coverage locators.
- `source-fetch-check` stopped at DNS resolution (`EAI_AGAIN`) before any
  document-content or fetch-stamp validation.
- `url-sweep` likewise failed at `curl: (6)` host resolution and therefore never
  reached an archive-recovery or bot-wall decision on the actual documents.

So the remaining blocker is narrow and operational:
**the batch has no local fetch stamps because the shell-side network resolver
could not resolve the source hosts on Thursday, August 27, 2026.**

That is **not** evidence that the sources themselves are dead, and it is not a
reason to re-source or to clear harvest rows. If DNS resolution in the sandbox
recovers, the next action is simply to rerun:

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-3.coverage.json --out research/frontier-21-url-liveness.json --recover --fail-on-dead`

## Step-3 fix pass

- Finding id: `none` in `research/frontier-21-alpha-b-step3-scaffold-review.md`.
  Disposition: push back on any scaffold edit; the Alpha review's live batch-3 verdict is already `sufficient`, so this fix pass leaves the batch manifest and coverage unchanged.
  Evidence: the group-`b` review states that "No batch-2 or batch-3 scaffold-content repair was required in this Alpha review pass." I re-read the CA-4 design block in `research/plan-commutative-algebra-track.md`, re-opened the five recorded source URLs at their existing locators on Thursday, August 27, 2026, and reran the batch gates on current bytes. `node tools/coverage-checklist.mjs research/frontier-21-batch-3.coverage.json --require-destination` returned `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`. `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json ... research/frontier-21-batch-10.pages.json` returned `content-policy: 433 scoped item(s), 0 error(s), 0 warning(s)`. `node tools/validate-plan.mjs research/plan-spec.json` ended with `OK`; only the standing run-wide `redundant-prereq` advisories remain. `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-3.coverage.json` returned `source-fetch-check: 5/5 source(s) fetch-verified`, and `--stamp` then returned `5/5 source(s) fetch-verified (0 newly stamped)`. `node tools/url-sweep.mjs --coverage research/frontier-21-batch-3.coverage.json --out /tmp/frontier-21-batch-3-url-liveness.json --recover --fail-on-dead` still failed mechanically with `curl: (6) Could not resolve host` for all five hosts, which conflicts with the successful web fetches and therefore does not justify re-sourcing or dropping any harvest row.
  Changed scaffold record: none. `research/frontier-21-batch-3.pages.json` and `research/frontier-21-batch-3.coverage.json` remain on their pre-fix-pass bytes.
