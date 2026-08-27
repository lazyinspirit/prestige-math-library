# frontier-20 batch 7 notes — step 1 scaffold

Owned pair: `the-fundamental-theorem-of-algebra` (A, order 139) with
`the-fundamental-theorem-of-algebra-examples` (B, order 140).

Artifacts written in this dispatch:
`research/frontier-20-batch-7.pages.json`,
`research/frontier-20-batch-7.coverage.json`,
and this file. Nothing else was edited.

## Design against spec

Recorded, not adjudicated here.

- The earlier design location `research/plan-algebra-track.md` lines 2001-2027
  (`X-1`) still describes the older order-125 Laplace/symmetric-polynomial
  route, with `requires` equal to
  `symmetric-polynomials`,
  `continuity-ivt-evt-and-uniform-continuity`.
- The later expansion `research/plan-algebra-track.md` lines 4005-4190
  (`II.8 X-1`) explicitly amends the page to the Artin–Galois route, with order
  139/140 and `requires` equal to
  `solvability-by-radicals-and-kummer-theory`,
  `sylow-theorems-and-nilpotent-groups`,
  `continuity-ivt-evt-and-uniform-continuity`.
- `research/plan-spec.json` agrees with the later `II.8` amendment and not with
  the earlier `X-1` row.

Per the dispatch, I did not choose between the two design locations inside the
batch. I followed the spec, recorded the disagreement, and treated `II.8` as the
controlling design text because it is the later amendment and it names the owed
route change explicitly.

## Scope and duplicate-control choices

- The scaffold keeps the Artin proof, exactly as `II.8` requires. I did **not**
  revive the older Laplace/symmetric-polynomial route from `X-1`.
- The page does **not** re-mint `[\mathbb C:\mathbb R]=2`. That fact is already
  published as `cor-complex-numbers-are-a-quadratic-real-extension`, so X-1 cites
  it and scaffolds only the genuinely new algebraic-closure corollaries.
- The page also does **not** duplicate the already-published examples
  `ex-relative-algebraic-closure-of-r-in-c` or
  `ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield`. Instead,
  X-1 carries theorem-level corollaries identifying `\mathbb C` and the
  algebraic numbers as algebraic closures.
- The counted-roots theorem is included here. The frontier-16 analytic pair
  explicitly deferred the full multiplicity statement to this page, and it is a
  cheap algebraic consequence once splitting is available.
- The companion-page agreement record is scaffolded as a `rem-` with **no**
  dependency edge to the later minimum-modulus theorem. The authoring-time item
  must carry `forward_refs: [thm-fundamental-theorem-of-algebra-minimum-modulus-proof]`,
  exactly as `II.8.d` requires.

## Source set actually read

Independent treatments harvested for this pair:

1. J. S. Milne, *Fields and Galois Theory*, v5.10.
   Read Lemma 3.25 and the Chapter-5 FTA block through Corollary 5.7.
2. Keith Conrad, *Applications of Galois Theory*.
   Read Section 2 through Theorem 2.1.
3. Keith Conrad, *The Artin-Schreier Theorem*.
   Read Theorem 3.1 through Corollary 3.2 for the deferred converse.

This satisfies the standing requirement of two independent treatments with a
harvestable textbook-tier source. The coverage file records the exact URLs,
locators, harvested headings, and per-heading dispositions.

## Route and trap compliance

- The theorem starts from the library's existing construction of `\mathbb C` as
  the quadratic real extension from order 54. It does not treat “the complex
  numbers” as an unexplained ambient field.
- The only analytic input scaffolded on this page is the odd-degree real-root
  theorem, proved from published continuity and IVT.
- Step 3 of the Artin proof is scaffolded with the full “every
  `\alpha \in E^H`” degree-divisibility move. It is **not** weakened to a single
  generator claim.
- The subgroup-of-index-`2` step uses the published **existence** theorem
  `thm-index-p-subgroup-existence-in-finite-p-groups`, not a normality
  consequence that presupposes such a subgroup.
- The deferred Artin-Schreier converse is recorded in the coverage ledger rather
  than silently dropped.
- The companion-page remark is phrased as a statement about two proofs, not as a
  claim that the library “does” or “does not” contain certain material.

## Item census

- A page `the-fundamental-theorem-of-algebra`: 13 items.
- B page `the-fundamental-theorem-of-algebra-examples`: 10 items.

The A page is well below the 60-item split ceiling, so no split is proposed.

## Item-shape summary

### A page

The scaffold decomposes X-1 into:

1. the isolated analytic input;
2. the odd-degree irreducibility corollary;
3. the reduction from complex to real polynomials;
4. the quadratic-extension lemma;
5. the algebraically-closed / splitting / finite-extension criterion;
6. the main Artin theorem;
7. the splitting corollary;
8. the two algebraic-closure corollaries;
9. the conjugate-root lemma;
10. the degree-`1`-or-`2` corollary;
11. the real factorisation corollary;
12. the counted-roots theorem.

That matches the later design's intended mathematical route and keeps the
analytic surface visibly small.

### B page

The companion page keeps all four items the later design singles out as
especially valuable:

- `x^3-2` over `\mathbb R` and `\mathbb C`;
- `x^4+1` as two irreducible real quadratics;
- the odd-degree witness `x^5-x-1`;
- the insoluble quintic `x^5-6x+3`.

Its false statements follow the later `II.8.c` design rather than the older
generated task table: the “theorem holds over `\mathbb Q`” wording is replaced
by the more honest quintic solvability comparison, paired with the published
solvable quintic `x^5-2`.

## Known limits and open risks

- I did **not** create `research/frontier-20-batch-7.proof-contracts.json`.
  The step-1 task authorizes only the manifest, coverage, and notes.
- The scaffold manifest format has no item-level `forward_refs` field. The
  companion-page agreement remark therefore records the required forward
  reference in its strategy text and in these notes; the actual
  `forward_refs: [thm-fundamental-theorem-of-algebra-minimum-modulus-proof]`
  must be added at authoring time.
- The counted-roots theorem is backed algebraically from the split-factorization
  consequence rather than by an extra third source row naming that exact
  corollary. This is deliberate: the frontier-16 analytic pair already deferred
  the statement here as an algebraic consequence of root existence, and the
  proof route on X-1 is exactly that.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-7.coverage.json
node tools/content-policy.mjs --audit --manifest-only research/frontier-20-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-7.coverage.json --out /tmp/frontier-20-batch-7-url-liveness.json --recover --fail-on-dead
```

The command results are recorded below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-7.coverage.json`
  passed: `1` page, `27` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --audit --manifest-only research/frontier-20-batch-*.pages.json`
  passed: `240` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, August 26, 2026. A filtered rerun against the new
  page ids showed `the-fundamental-theorem-of-algebra` and its companion in the
  expected order, with no X-1-specific `resolve`, `forward-ref`, `b-leaf`, or
  cycle failure. The remaining output is the repository's existing
  `redundant-prereq` warning stream outside this batch.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json --stamp`
  failed for all three URLs with the same resolver error `EAI_AGAIN`.
  Exact failures:
  - `https://www.jmilne.org/math/CourseNotes/FT.pdf`
  - `https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf`
  - `https://kconrad.math.uconn.edu/blurbs/galoistheory/artinschreier.pdf`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure: `0/3 source(s) fetch-verified, 3 FAILED`.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-7.coverage.json --out /tmp/frontier-20-batch-7-url-liveness.json --recover --fail-on-dead`
  failed `0/3` live on Wednesday, August 26, 2026, with the same DNS-level
  problem:
  - `curl: (6) Could not resolve host: www.jmilne.org`
  - `curl: (6) Could not resolve host: kconrad.math.uconn.edu`
  The receipt was still written to
  `/tmp/frontier-20-batch-7-url-liveness.json`.

What was still verified despite the shell-network blocker:

- All three source bodies were opened and read through the web-research channel
  in this dispatch, and the coverage locators were written from those actual
  reads.
- No `fetch_verified` object was fabricated.
- I did **not** re-source Milne or Conrad. The shell tools failed at the local
  DNS layer, but the sources themselves were reachable and readable in the
  browsing channel, so this is an environment/transport blocker rather than
  evidence that the cited documents are dead or unavailable.

Exact remaining action for an environment with working shell DNS:

```bash
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-7.coverage.json --out /tmp/frontier-20-batch-7-url-liveness.json --recover --fail-on-dead
```

## Step-3 fix pass

Worked from `research/frontier-20-alpha-c-step3-scaffold-review.md` (group
Alpha `c`, batches `4`, `6`, and `7`).

- `B7-1` — disposition: **accepted as already repaired on current bytes**.
  Evidence:
  - In `research/frontier-20-batch-7.pages.json`,
    `fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals` now refutes
    the claim locally with `x^5-2`, explicitly citing the radical extension
    `\mathbb Q(\zeta_5,\sqrt[5]{2})`; the old foreign B-page witness is gone,
    and the item now depends only on `def-solvable-by-radicals` together with
    the published Eisenstein irreducibility theorem needed by its narrowed
    statement.
  - The forbidden foreign B-page witness
    `ex-x-fifth-minus-two-is-solvable-by-radicals` is not present anywhere in
    the batch-7 manifest.
  - On Wednesday, August 26, 2026, I re-opened the three recorded source URLs
    and re-checked the harvested locator ranges against the live documents:
    Milne `FT.pdf` still contains the Chapter 5 heading
    `Fundamental Theorem of Algebra` through Corollary `5.7`, Conrad
    `galoisappn.pdf` still contains Section `2. Applications to Field Theory`
    through Theorem `2.1`, and Conrad `artinschreier.pdf` still contains
    Theorem `3.1` through Corollary `3.2`. No URL recovery, archive
    substitution, or re-sourcing was needed. The coverage file still carries
    `fetch_verified` objects for all three URLs, and
    `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json`
    now reports `3/3 source(s) fetch-verified`.
  - Required validator reruns on Wednesday, August 26, 2026:
    - `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-7.coverage.json`
      -> `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`.
    - `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
      -> `content-policy: 486 scoped item(s), 0 error(s), 0 warning(s)`.
    - `node tools/validate-plan.mjs research/plan-spec.json`
      -> exit `0`; only repository-wide `redundant-prereq` advisories were
      printed outside this batch.
  Changed scaffold record:
  - `research/frontier-20-batch-7.pages.json`: kept the repaired local-witness
    route for `B7-1` and narrowed the neighbouring false statement from
    “every quintic over `\mathbb Q`” to “every irreducible quintic over
    `\mathbb Q`” so the batch no longer silently duplicates the already
    published broader `x^5-2` false statement from
    `solvability-by-radicals-and-kummer-theory-examples`
  - no further edit to `research/frontier-20-batch-7.coverage.json`
  - appended this `## Step-3 fix pass` receipt to
    `research/frontier-20-batch-7.notes.md`

## Step-5 authoring

Artifacts authored in this step:

- `items/thm-odd-degree-real-polynomial-has-a-real-root.md`
- `items/cor-irreducible-real-polynomial-has-degree-one-or-even-degree.md`
- `items/lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra.md`
- `items/lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root.md`
- `items/prop-algebraically-closed-splitting-and-finite-extension-criteria.md`
- `items/thm-the-complex-numbers-are-algebraically-closed.md`
- `items/cor-every-complex-polynomial-splits-into-linear-factors.md`
- `items/cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals.md`
- `items/cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q.md`
- `items/lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs.md`
- `items/cor-irreducible-real-polynomials-have-degree-one-or-two.md`
- `items/cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors.md`
- `items/thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity.md`
- `items/ex-x-cubed-minus-two-over-r-and-c.md`
- `items/ex-x-four-plus-one-factors-into-two-real-quadratics.md`
- `items/ex-x-squared-plus-one-is-irreducible-over-r-and-split-over-c.md`
- `items/ex-x-fifth-minus-x-minus-one-has-a-real-root.md`
- `items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`
- `items/fs-every-real-polynomial-has-a-real-root.md`
- `items/fs-the-real-numbers-are-algebraically-closed.md`
- `items/fs-every-irreducible-real-polynomial-has-degree-one.md`
- `items/fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals.md`
- `items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`
- `library/abstract-algebra/the-fundamental-theorem-of-algebra.md`
- `library/abstract-algebra/the-fundamental-theorem-of-algebra-examples.md`
- `research/frontier-20-batch-7.proof-contracts.json`

Provenance rationale actually used:

- The A-page theorem/lemma/proposition/corollary statements were tagged
  `literature-derived` where the coverage file names the same result from Milne
  or Conrad; their local proofs were written to the library's phase format and
  tagged `ai-altered`.
- The B-page examples, false statements, and the agreement remark were tagged
  `ai-altered` on the statement side as well: the batch design specifies their
  role and witness choices, but the exact local presentation and proof text were
  synthesized here from the library's earlier results rather than copied from one
  external source.
- The remark keeps `proof: not-applicable`, carries the required forward
  reference to `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, and
  still has no dependency edge to that later theorem, exactly as `II.8.d`
  requires.

Scope, narrowing, and blockers:

- No new page-scope narrowing or dropped item was introduced at authoring time.
- The already-approved Step-3 narrowing stayed in force: the B-page false
  statement remains `fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals`,
  refuted locally by `x^5-2`, so the batch does not duplicate the broader
  published `fs-not-every-quintic-is-insoluble-by-radicals`.
- No authoring blocker remained on current bytes.

Checks run on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-7 proof-bearing items...`
  -> `22 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-20-batch-7.pages.json`
  -> `content-policy: 23 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; only the repository's existing `redundant-prereq` advisories were
  printed outside this batch.

Additional focused check run, not claimed as a dispatch requirement but used to
catch renderer-only defects before handoff:

- `node tools/rendercheck.mjs ...batch-7 items and pages...`
  -> `OK — 25 file(s)` with clean YAML and KaTeX parsing.
