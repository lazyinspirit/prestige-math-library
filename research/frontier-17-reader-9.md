# Frontier 17 Step 6a — independent reader 9, batch 9

## Scope and coverage

- Role: independent Step-6a reader; I did not author this batch.
- Scope of record: `research/frontier-17-batch-9.pages.json` only.
- Pages opened: `monadicity-and-becks-theorem` (A, 44 items) and `monadicity-and-becks-theorem-examples` (B, 7 items).
- Actual item files opened and read: **51/51**.
- Proof-bearing items audited: **43/43**.
- Numbered proof/verification/refutation steps read adversarially: **192 before repair, 202/202 after repair**.
- `[L#]` facts read against their cited dependency on disk: **135/135 before repair, 140/140 after repair**. This opened all 56 distinct external cited dependency sections as well as every batch-local cited item.
- Title/Statement versus proof, component provenance, AI-generated truth risk, A-page summary, B-page body, Remarks, and all 344 contract boundary rows were separately checked.

## Fatal findings and repairs

### R9-1 — `lem-free-word-rings-are-unital-rings` — overstrong title

Severity: **fatal** (title asserts more than the proof establishes).

The title said that the construction forms *free word rings*, while this item proves only that the convolution construction is a unital ring. The universal/free property is established only in the following theorem. I narrowed the item and manifest title to “Integer-valued finite formal sums of words form unital convolution rings” and updated title-dependent contract boundary prose. No mathematical content was removed.

### R9-2 — `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor` — unlicensed coequalizer inference

Severity: **fatal**.

Step 4.1 asserted that applying the comparison functor to the created coequalizer gives a coequalizer in the Eilenberg–Moore category. Neither `[L1]` nor `[L2]` licensed preservation by the comparison. I added the earlier theorem that the Eilenberg–Moore forgetful functor strictly creates its split coequalizers as a dependency and `[L4]`, and rewrote the step: ordinary creation transports the canonical splitting to the underlying fork of `K(q_A)`, after which strict creation by `U^T` makes that lifted fork a coequalizer. The manifest and proof contract now carry the added dependency/citation.

### R9-3 — `lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice` — missing recurrence, limit equations, and set-valued DC domain

Severity: **fatal**.

The old proof never defined `v_{n+1}` or the transition maps, replaced all successor compatibilities with “the required commutative squares,” invoked unspecified “stage equations” for both algebra laws, and asserted compatible target factorizations without their induction invariant. Its rank-minimal-code sentence also did not produce the single set with an entire relation that the cited form of dependent choice requires. I rewrote the proof around the source construction:

- `q_{n,n+1}=u_{n+1}\eta_{Q_n}`, `v_{n+1}=Tq_{n,n+1}`, and the `p_n,q_n` recurrences are explicit;
- `q_{n,n+1}u_n=u_{n+1}v_n` and the two base invariants are proved;
- least-rank successor sets are closed under finite reachability and united over `\mathbb N` before DC is applied;
- the two sequential colimits, the finitary comparison `P_\omega\cong TQ_\omega`, the unit law, multiplication law, and algebra-homomorphism equation are explicit;
- the target-factor induction records `cT(k_n)v_n=k_nu_n`, proves it propagates, and yields the weakly universal algebra fork used by GAFT.

The `[L3]` and `[L5]` facts/contract quotes were also repaired to retain the cited GAFT and functor-category smallness, completeness, continuity, chosen-limit, and local-smallness hypotheses. The endpoint and nonempty-choice boundary rows now point to the actual omega/DC discharges.

### R9-4 — `thm-the-contravariant-power-set-functor-is-monadic` — preservation proof omitted the universal property

Severity: **fatal**.

The old step 2.1 merely called a coreflexive equalizer a pullback and asserted that Beck–Chevalley produced the required coequalizer. It neither displayed the square nor proved the coequalizer universal property. I rewrote the passage for a coreflexive pair `f,g:A\rightrightarrows B` with common retraction `r` and equalizer `e:E\to A`. The square with both `e` maps is proved to be a pullback, Beck–Chevalley gives `e[e^{-1}[S]]=g^{-1}[f[S]]=S\cap e[E]`, and an arbitrary equalizing map `H` is shown to factor uniquely through the surjection `e^{-1}:\mathcal P(A)\to\mathcal P(E)`. This establishes preservation rather than naming it.

### R9-5 — `cor-group-actions-are-strictly-monadic-over-sets` — comparison not constructed

Severity: **fatal**.

The old final step jumped from a classification of algebras and their morphisms to the claim that *the comparison for the free-action adjunction* is an isomorphism, but no free-action adjunction or induced-monad identification appeared, and the strict-monadicity definition was not cited. I added the natural universal-arrow bijection `u\leftrightarrow\bar u`, identified the induced `G\times-` monad, added the exact strict-monadicity fact, and finished with the object/morphism inverse to the comparison.

### R9-6 — `prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers` — coproduct construction not discharged

Severity: **fatal**.

The old reverse implication referred only to “the two canonical maps” and said the free-algebra adjunction made their coequalizer a coproduct. I added the canonical-presentation theorem, the Eilenberg–Moore adjunction, and preservation of colimits by left adjoints; defined `P`, `Q`, both maps on every summand; constructed each coproduct injection through the canonical algebra coequalizer; and proved the factorization and uniqueness for an arbitrary family of algebra maps. The manifest and proof contract now include the added dependencies and steps.

### R9-7 — multiple Riehl source locators / exact-source claims were inaccurate

Severity: **fatal citation defect**.

The source pass found that several frontmatter citations named a numbered result that does not contain the claimed clause, or named a nonexistent/wrong number. Repairs:

- `def-absolute-colimit`: replaced “Definition 5.4.5” (a diagram number) by Exercise 3.4.vi(iii) and Lemma 5.4.6;
- `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs`: Proposition 5.4.9 → Proposition 5.4.10;
- `thm-groups-are-monadic-over-sets`: nonexistent Example 5.3.5 → Example 5.1.4(iv) and Corollary 5.5.3(i);
- `thm-modules-are-monadic-over-sets`: unrelated Exercise 5.3.ii → Example 5.1.4(iii) and Corollary 5.5.3(ii);
- `cor-group-actions-are-strictly-monadic-over-sets`: nonexistent Example 5.1.10 → Corollary 5.5.3(ii) and Exercise 5.5.iv;
- `ex-the-comparison-functor-for-the-free-group-adjunction`: nonexistent Example 5.3.5 → Example 5.1.4(iv) and Section 5.3;
- `ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic`: added Example 5.3.2 to the two construction examples, while retagging the local strictness strengthening;
- the free-word-ring lemma and free-ring adjunction now also cite the actual free-ring construction, Example 4.1.10(vi), rather than relying on the later monadicity corollary alone.

### R9-8 — Mehrle source locations and coverage headings were off by one result block

Severity: **fatal citation defect**.

Mehrle Example 5.18(a) begins the familiar algebra examples; the later parts are Example 5.20, continued from 5.18. I corrected item/source records for the strict ring descent (`5.20(b)`), torsion-free-abelian counterexample (`5.20(d)`), and topological-space counterexample (`5.20(e)`), plus the corresponding false statement. The coverage harvest now calls its `(c)` through `(g)` headings Example 5.20 rather than Example 5.18. The torsion-free counterexample and strict local strengthenings were retagged `ai-altered` where the local Statement combines more than the cited source's exact displayed conclusion.

### R9-9 — proof-contract quotes stopped before the clauses used

Severity: **fatal citation-evidence defect**.

Several contract `quote` fields were literal prefixes that ended before the equation or universal property used: `thm-crude-monadicity-the-reflexive-tripleability-theorem` `[L1]`; `lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism` `[L3]`; `cex-a-reflexive-pair-whose-coequalizer-is-not-preserved` `[L1]`, `[L2]`, and `[L3]`; `thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor` `[L3]`; and the finitary lemma's `[L3]`/`[L5]`. I regenerated those scoped contract entries from the full cited sections and then hand-audited the resulting uses.

## Nonfatal findings and repairs

### R9-10 — `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras` — wrong earlier-step reference

Severity: **nonfatal (30-second bridge)**.

Step 3.1 attributed existence of the base splitting to step 1.2, which is only the free-monoid counterexample. Step 1.1/2.1 proves existence. I changed the prose and input tag to cite step 2.1 and updated the contract derivation.

### R9-11 — component provenance understated material local adaptations

Severity: **nonfatal metadata defect**.

I retagged the following Statements from `literature-derived` to `ai-altered`, with matching rationales in the batch notes: the strict group/module/monoid-ring/G-set conclusions; the arbitrary-pullback Beck–Chevalley form; the DC-strengthened finitary theorem and complete-and-cocomplete algebraic-model corollary; the torsion-free-abelian construction; the free-group comparison example; the maybe-monad strictness example; and the six UL/BPI-explicit Manes-route results from the closure lemma through the compact-Hausdorff conservativity corollary. These are source-backed, but their hypotheses, strength, construction, or combination is materially local under `SCHEMA.md` §3.

### R9-12 — boundary worksheets marked excluded cases as checked or hid the omega endpoint

Severity: **nonfatal contract defect**.

I corrected the `empty` rows for the canonical-algebra theorem, groups, modules, and `\beta\mathbb N`; the `zero` row for the canonical-monoid example; the power-set empty row; and the finitary lemma's empty/degenerate/endpoint/nonempty-choice anchors. In particular, the finitary proof's omega colimit is an endpoint obligation, not `not_applicable`.

### R9-13 — page title omitted the possessive apostrophe

Severity: **polish**.

Both page files and both manifest titles said “Becks Theorem.” I changed them to “Beck's Theorem” without editing `research/plan-spec.json`.

## Clean results

- The remaining theorem, definition, counterexample, false-statement, and example Statements agree with their titles and written proofs after the repairs above.
- Both AI-generated example constructions (`ex-a-split-coequalizer-in-set` and `ex-the-canonical-presentation-of-a-monoid`) were exhaustively checked on their displayed finite data, including empty-word/identity cases, and remain non-load-bearing.
- No batch item depends on an `ai-generated` Statement/Construction.
- The A-page summary has exactly two nonempty prose paragraphs, each below 150 words, with dependency background followed by the local development. It contains no count, ranking, or unsupported corpus-wide claim.
- The B page has no authored summary body.
- No item carried a stale `verification.judge` block; none needed deletion.
- No published dependency defect was found, so the published-dependency repair protocol was not invoked.

## Per-page verdicts

- `monadicity-and-becks-theorem`: **pass after repair**. All 44 items and every final proof step/fact were read; all batch-scoped gates below are clean.
- `monadicity-and-becks-theorem-examples`: **pass after source/provenance/title/boundary repair**. All 7 items were read; both generated examples remain valid and non-load-bearing.

## Gate record

Initial pre-repair diagnostics:

- `proof-contract --strict`: 43/43 checked, 0 errors, 0 warnings.
- `boundary-audit`: 344 rows, 213 `not_applicable`, no detector contradiction/template cluster; human audit nevertheless found R9-12.
- `citation-fidelity`: 135 citations, no detector miss/widening; human audit nevertheless found R9-7 through R9-9.
- `risk-report`: completed; high/critical routing remains Alpha's Step-6 obligation and was not filled by this reader.

Final post-repair results:

- `node tools/tsx-run.mjs tools/reflow.mts <28 changed item files>`: all unchanged after the explicit edits; canonical single-line proof format retained.
- `node tools/tsx-run.mjs tools/precheck.mts <28 changed item files>`: **27 proof-bearing files PASS, 0 failing**; `def-absolute-colimit` is correctly definition-only/`n/a`.
- `node tools/proof-contract.mjs research/frontier-17-batch-9.proof-contracts.json --strict`: **43/43 checked, 0 errors, 0 warnings**.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`: **344 rows, 217 `not_applicable`, no contradicted disposition and no template cluster**.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`: **140 citations, no missing quote and no widening candidate**.
- `node tools/risk-report.mjs ...`: **43 items routed, 0 errors** (2 ordinary, 9 moderate, 19 high, 13 critical). Alpha still owns the required high/critical `risk_review` records.
- `node tools/content-policy.mjs research/frontier-17-batch-9.pages.json`: **51 scoped items, 0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs research/frontier-17-batch-9.coverage.json`: **1 A page, 88 harvested results, 0 errors, 0 warnings**.
- `node tools/audit-manifest.mjs research/frontier-17-batch-9.pages.json`: **234 relationships over 51 items, 0 defects**.
- `node tools/prosecheck.mjs <both page files>`: **2 files, 0 errors, 0 warnings**.
- `node tools/citecheck.mjs <six proof-repaired files>`: **6 files, no recognised uncited move**.
- `node tools/rendercheck.mjs --quiet <28 changed items and both pages>`: **30 files, clean YAML, delimiters, wikilinks-in-math, and KaTeX parsing**.
- Whole-repository `node tools/depcheck.mjs --quiet`: **blocked outside this batch** by `items/rem-sine-period-arc-length-integrand-is-nonelementary.md`, which is `status: published` and `proved_here: false` but carries `verification.audited` instead of the required `verification.sources_checked`. That item is absent from batch 9 and from the frontier-17 batch manifests searched by id. I did not edit it. The batch-scoped dependency backstop (`audit-manifest`) is clean.

## Changed paths

Mathematical proof/title repairs:

- `items/lem-free-word-rings-are-unital-rings.md`
- `items/lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor.md`
- `items/lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice.md`
- `items/thm-the-contravariant-power-set-functor-is-monadic.md`
- `items/cor-group-actions-are-strictly-monadic-over-sets.md`
- `items/prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers.md`
- `items/thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras.md`

Source/provenance-only repairs:

- `items/def-absolute-colimit.md`
- `items/thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs.md`
- `items/thm-groups-are-monadic-over-sets.md`
- `items/thm-modules-are-monadic-over-sets.md`
- `items/thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor.md`
- `items/lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers.md`
- `items/thm-monoids-and-rings-are-monadic-over-sets.md`
- `items/lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets.md`
- `items/thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras.md`
- `items/cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete.md`
- `items/lem-closure-in-an-ultrafilter-algebra-topology.md`
- `items/lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit.md`
- `items/lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology.md`
- `items/thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse.md`
- `items/thm-compact-hausdorff-spaces-are-monadic-over-sets.md`
- `items/cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity.md`
- `items/cex-a-conservative-functor-that-is-not-monadic.md`
- `items/fs-every-conservative-right-adjoint-is-monadic.md`
- `items/fs-the-forgetful-functor-from-topological-spaces-is-monadic.md`
- `items/ex-the-comparison-functor-for-the-free-group-adjunction.md`
- `items/ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic.md`

Batch/page artifacts:

- `research/frontier-17-batch-9.pages.json`
- `research/frontier-17-batch-9.coverage.json`
- `research/frontier-17-batch-9.notes.md`
- `research/frontier-17-batch-9.proof-contracts.json`
- `library/category-theory/monadicity-and-becks-theorem.md`
- `library/category-theory/monadicity-and-becks-theorem-examples.md`
- `research/frontier-17-reader-9.md`

No file outside batch 9 and this report was edited; `research/plan-spec.json` was not edited. This reader did not judge and did not drive a stage transition.
