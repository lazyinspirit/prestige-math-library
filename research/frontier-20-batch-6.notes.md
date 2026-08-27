# frontier-20 batch 6 notes — scaffold and step-3 fix pass

Owned pair: `prime-spectra-and-radicals` (A, order `111.005`) with
`prime-spectra-and-radicals-examples` (B, order `111.006`).

Artifacts owned by this batch:
`research/frontier-20-batch-6.pages.json`,
`research/frontier-20-batch-6.coverage.json`,
and this file.

Session date: Wednesday, August 26, 2026.

## Design against spec

Recorded here, not adjudicated here.

- The CA-3 design block at
  `research/plan-commutative-algebra-track.md:382-437` still lists the broader
  prerequisite spine
  `CA-1`, `CA-2`, `ideals-and-quotient-rings`,
  `the-field-of-fractions-and-localisation`.
- `research/plan-spec.json` and the generated batch task still give only
  `localisation-of-modules-and-support-examples`.
- The later CA III density enrichment pass at
  `research/plan-commutative-algebra-track.md:2788-3210` is an additive
  amendment to the same track section. I therefore kept the page-level
  `requires` field at the spec value, but I rebuilt the item scaffold to the
  amended CA-3 content totals and source route.

## Current scaffold shape

- A page `prime-spectra-and-radicals`: **44 items**.
- B page `prime-spectra-and-radicals-examples`: **12 items**.

The A page remains below the 60-item split ceiling, so no split is owed.

The repaired scaffold now matches the amended CA-3 route:

- `Spec` is still treated only as the **set** of prime ideals on this page.
  No topology words are introduced as mathematical content here.
- The added density pass is now present: radical product/intersection laws,
  quotient/localisation radical compatibility, separating-prime proof pieces,
  quotient/localisation prime correspondences, the Noetherian finite-intersection
  corollary, nilradical nilpotence, and the chain-language quotient/dimension
  corollaries all live on the A page.
- The ad hoc step-1 item `def-minimal-prime-over-an-ideal` was removed. The
  amended route instead carries the proof-bearing item
  `lem-minimal-prime-over-an-ideal-exists`, which is the honest dependency
  carrier for the later Noetherian minimal-prime branch.
- The zero-ring convention remains explicit but non-load-bearing here: the
  scaffold keeps `def-krull-dimension-of-a-ring` as the **nonzero-ring**
  boundary definition and leaves theorem-level dimension calculus to the later
  dimension page.

## Source set actually read

The repaired A-page harvest now records these source bodies actually read for
this batch:

1. J. S. Milne, *A Primer of Commutative Algebra*, v4.03:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
2. Allen Altman and Steven Kleiman, *A Term of Commutative Algebra*, 13th ed.:
   `https://web.mit.edu/18.705/www/13Ed.pdf`
3. The Stacks Project, Section 10.17:
   `https://stacks.math.columbia.edu/tag/00DY`
4. The Stacks Project, Section 10.60:
   `https://stacks.math.columbia.edu/tag/00KD`
5. The Stacks Project, Section 10.31:
   `https://stacks.math.columbia.edu/tag/00FM`
6. Melvin Hochster, *Introduction to Commutative Algebra*:
   recorded as the same-document archive copy
   `http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`
   with `original_url`
   `https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`
7. The Stacks Project, Section 10.32:
   `https://stacks.math.columbia.edu/tag/00IM`

Milne and Altman remain the two independent primary treatments, with Milne also
supplying the harvestable table of contents. The H20 archive row is a
same-document recovery, not a re-source: the archived PDF is the recorded copy
because it already carries valid fetch metadata elsewhere in the repo, and the
coverage preserves the original live URL explicitly. The new `00IM` row is a
newly read source for the nilradical-nilpotence theorem.

## Scope decisions still standing

Two alpha-c scope decisions remain correct after the repair:

- `49d6b811bcfa182f9476bca3f5c95059bd020747c1f82a720609fa97a9248d60`
  remains honestly out-of-scope: Stacks `Lemma 10.31.5, Spec(R) is a
  Noetherian topological space` still belongs to the later Zariski-topology
  page.
- `806e876990c2c533b447471ee83601ded5cd1f8d36e6fc42e23f004b1573e274`
  remains honestly out-of-scope: Stacks `Lemma 10.60.4, dimension is the
  supremum of the heights of maximal primes` is still the first dimension
  theorem rather than a boundary definition.

The earlier scope decision on Milne `Corollary 14.9` does **not** stand after
the additive amendment; that repair is recorded below in the step-3 fix-pass
section.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-6.coverage.json`
  passed: `1` page, `60` harvested results, `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
  passed: `522` scoped items, `0` errors, `0` warnings.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, August 26, 2026. The run still emits the
  repository-wide `redundant-prereq` notes outside this batch, but it reports no
  item-cycle, forward-reference, B-leaf, or unresolved-id failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-6.coverage.json`
  now reports `7/8` source rows fetch-verified and one honest remaining blocker:
  the newly added Stacks `00IM` row is readable in the web channel but cannot be
  shell-stamped because this runner still fails external DNS resolution.

## Step-3 fix pass

On Wednesday, August 26, 2026 I re-read:

- `research/frontier-20-alpha-c-step3-scaffold-review.md`
- `research/frontier-20-alpha-c-step3-verdicts.json`
- `research/frontier-20-alpha-c-scope-decisions.json`
- the CA-3 base block at `research/plan-commutative-algebra-track.md:382-437`
- the later CA III density enrichment pass at
  `research/plan-commutative-algebra-track.md:2788-3210`
- the current batch-6 scaffold artifacts

I also obtained an independent GPT-5.6 Sol audit before finalizing the repair.

- Finding id: **none separately issued for batch 6 in the alpha-c review file**.
  Disposition: **pushback on the no-change conclusion; repaired**.
  Evidence: the stable alpha-c review judged the earlier 17/6 scaffold
  sufficient, but the later design amendment explicitly says it is “an additive
  amendment” and records CA-3 final totals of **44 A / 12 B**. The step-1 batch
  scaffold therefore omitted required CA-3 mathematics even though the alpha
  review did not catch it.
  Changed scaffold record:
  - rebuilt `research/frontier-20-batch-6.pages.json` from `17/6` items to
    `44/12`;
  - inserted the omitted radical-identity, separating-prime, quotient/local
    correspondence, Noetherian finite-intersection, nilradical-nilpotence, and
    dimension-language items;
  - removed the ad hoc `def-minimal-prime-over-an-ideal`;
  - expanded `research/frontier-20-batch-6.coverage.json` from `36` to `60`
    harvested results to support the repaired scaffold.

- Finding id: `49d6b811bcfa182f9476bca3f5c95059bd020747c1f82a720609fa97a9248d60`.
  Disposition: **accepted as standing out-of-scope; no change**.
  Evidence: CA-3 still avoids topology language, and the repaired manifest still
  does not introduce `open`, `closed`, compactness, or Noetherian topological
  space claims.
  Changed scaffold record: **none**. The coverage row for Stacks `Lemma 10.31.5`
  remains out-of-scope with the same reason.

- Finding id: `806e876990c2c533b447471ee83601ded5cd1f8d36e6fc42e23f004b1573e274`.
  Disposition: **accepted as standing out-of-scope; no change**.
  Evidence: the repaired CA-3 page still keeps only the boundary dimension and
  height language. It does add `lem-height-equals-local-dimension` and the
  quotient-chain corollary, but it still does **not** import the later theorem
  “dimension is the supremum of the heights of maximal primes.”
  Changed scaffold record: **none**. The coverage row for Stacks `Lemma 10.60.4`
  remains out-of-scope with the same reason.

- Finding id: `bae677238eeea34bdc10e61bb9a7531f8c411054fa6a5b7d91d82f8f4aac5e26`.
  Disposition: **pushback; repaired**.
  Evidence: the alpha-c scope receipt treated Milne `Corollary 14.9, every
  radical ideal in a Noetherian ring is a finite intersection of prime ideals`
  as out-of-scope, but the later density amendment explicitly adds the matching
  CA-3 item `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`.
  Changed scaffold record:
  - changed the Milne Corollary 14.9 harvest row from `out-of-scope` to
    `included`;
  - added the new carrier item
    `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` to the A
    page;
  - rebuilt the downstream Noetherian minimal-primes branch so the radical
    finite-intersection theorem is no longer silently omitted.

## Remaining blocker

The scaffold itself is now structurally clean, source-grounded, and validator
clean on the required gates. The only remaining batch-local blocker is durable
fetch stamping for the newly added source row:

- `https://stacks.math.columbia.edu/tag/00IM`

The row was read through the web channel and recorded honestly, but
`source-fetch-check --stamp` still cannot resolve external hosts from this
runner, so no new `fetch_verified` object was fabricated for `00IM`.

## Step-5 authoring

- Authored the A-page files on Wednesday, August 26, 2026:
  `def-radical-of-an-ideal`, `lem-radical-membership-by-a-power`,
  `lem-radical-is-an-ideal`, `lem-radical-of-an-intersection`,
  `lem-radical-of-a-product`, `def-nilradical-and-reduced-ring`,
  `lem-radical-commutes-with-quotient-correspondence`,
  `lem-radical-commutes-with-localisation`,
  `cor-reduced-quotient-by-the-nilradical`,
  `lem-prime-containing-a-multiplicative-set-disjoint-ideal`,
  `cor-prime-containing-an-ideal-avoiding-an-element`,
  `lem-radical-intersection-proof-forward-inclusion`,
  `lem-radical-intersection-proof-separating-prime`,
  `thm-radical-as-intersection-of-primes`,
  `cor-nilradical-as-intersection-of-primes`,
  `cor-ring-reduced-iff-zero-is-an-intersection-of-primes`,
  `def-prime-spectrum-and-vanishing-sets`,
  `def-krull-dimension-of-a-ring`, `def-height-of-a-prime-ideal`,
  `lem-vanishing-set-reverses-inclusions`,
  `lem-vanishing-set-of-an-arbitrary-sum`,
  `lem-vanishing-set-of-a-finite-product`,
  `lem-vanishing-set-identities`,
  `lem-vanishing-sets-detect-radicals`,
  `def-principal-distinguished-subset-of-spectrum`,
  `lem-distinguished-subset-identities`,
  `lem-distinguished-subset-cover-detects-radical`,
  `lem-spectrum-map-respects-composition-and-identities`,
  `lem-spectrum-map-preimage-of-vanishing-set`,
  `thm-prime-spectrum-map-by-contraction`,
  `lem-primes-of-a-quotient-are-primes-over-the-kernel`,
  `thm-prime-spectrum-of-a-quotient-bijection`,
  `lem-primes-of-a-localisation-avoid-the-multiplicative-set`,
  `cor-primes-of-a-prime-local-ring`,
  `cor-primes-of-a-principal-localisation`,
  `thm-prime-spectrum-of-a-localisation-bijection`,
  `cor-prime-spectrum-insensitive-to-nilpotents`,
  `lem-minimal-prime-over-an-ideal-exists`,
  `lem-noetherian-minimal-primes-induction-split`,
  `thm-nilradical-of-a-noetherian-ring-is-nilpotent`,
  `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`,
  `thm-noetherian-ring-has-finitely-many-minimal-primes`,
  `lem-height-equals-local-dimension`, and
  `cor-dimension-of-a-quotient-as-chains-above-an-ideal`.

- Authored the B-page files on Wednesday, August 26, 2026:
  `ex-prime-sets-of-a-field-and-the-integers`,
  `ex-prime-spectrum-set-of-a-product-ring`,
  `ex-prime-spectrum-set-of-dual-numbers`,
  `ex-prime-ideals-of-a-node`,
  `ex-distinguished-subset-and-localisation-primes`,
  `ex-radical-intersection-computation`,
  `ex-radical-of-a-product-and-intersection`,
  `ex-separating-prime-for-a-missing-radical-element`,
  `ex-spectrum-of-a-zero-ring-empty`,
  `ex-primes-in-a-prime-localisation`,
  `ex-noetherian-nilradical-common-exponent`, and
  `ex-nilradical-need-not-be-nilpotent-nonnoetherian`.

- Authored the page files
  `library/commutative-algebra/prime-spectra-and-radicals.md` and
  `library/commutative-algebra/prime-spectra-and-radicals-examples.md`, and
  created `research/frontier-20-batch-6.proof-contracts.json` from the final
  on-disk item text before regenerating its citation and derivation rows.

- Provenance rationale:
  the A-page statements are literature-derived from the batch coverage route
  through Milne, Altman--Kleiman, Stacks, and Hochster, with local proofs
  rewritten against current library dependencies; `lem-radical-membership-by-a-power`
  received an actual local proof because SCHEMA only permits
  `provenance.proof: not-applicable` on definitions and remarks; the generated
  example statements are exactly
  `ex-radical-of-a-product-and-intersection`,
  `ex-spectrum-of-a-zero-ring-empty`,
  `ex-primes-in-a-prime-localisation`, and
  `ex-noetherian-nilradical-common-exponent`, each carrying
  `generation.role: example`; the other example statements remain
  literature-derived.

- Narrowed or corrected claims:
  `lem-noetherian-minimal-primes-induction-split` was written in the honest
  one-way form needed by the induction proof, namely that every prime minimal
  over a non-prime radical ideal is minimal over one of the two larger split
  ideals, rather than as an unsupported equality of minimal-prime sets;
  `ex-prime-ideals-of-a-node` was corrected during authoring from the false
  “every maximal ideal contains exactly one branch prime” form to the true
  statement that every maximal ideal contains at least one branch prime, with
  the node maximal ideal `(\bar x,\bar y)` containing both.

- Boundary/proof-contract rationale:
  the contract rows were regenerated from the final Facts blocks and numbered
  proof steps, then the boundary worksheet was hand-corrected where the audit
  found a real issue. In particular, `lem-vanishing-set-identities` now marks
  the empty-family axis as checked through the arbitrary-sum clause instead of a
  false `not_applicable` row.

- Validators run on Wednesday, August 26, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts` on the 50 proof-bearing batch-6
  items: pass, `50 checked, 0 failing`;
  `node tools/content-policy.mjs research/frontier-20-batch-6.pages.json`:
  pass, `56 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/validate-plan.mjs research/plan-spec.json`: pass, with only the
  standing repository-wide `redundant-prereq` advisories outside this batch;
  `node tools/proof-contract.mjs research/frontier-20-batch-6.proof-contracts.json --strict`:
  pass, `50/50 item(s) checked`;
  `node tools/citation-fidelity.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-missing-quote`:
  pass, `95 citation(s)` with no missing quotes;
  `node tools/boundary-audit.mjs research/frontier-20-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template`:
  pass after tightening the boundary evidence, with no contradicted or template
  rows;
  `node tools/prosecheck.mjs library/commutative-algebra/prime-spectra-and-radicals.md library/commutative-algebra/prime-spectra-and-radicals-examples.md --warnings`:
  pass, `0 error(s), 0 warning(s)`.

- Blockers:
  no authoring blocker remains for batch 6. The earlier Step-3 source-fetch
  stamping limit on Stacks `00IM` remains a coverage-artifact note only; it did
  not block truthful step-5 authoring or the required validators.
