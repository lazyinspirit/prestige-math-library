# Wave 1 abstract-algebra Audit-Beta findings (A1/A2)

Date: 2026-08-02

Role: Audit-Beta — GPT 5.6 Sol, `xhigh`

Frozen scope: `research/audit/wave1-abstract-algebra.pages.json`

## Scope and coverage

This report covers only the two assigned A/B pairs:

1. `cosets-and-lagranges-theorem` (15 items) and `cosets-and-lagranges-theorem-examples` (8 items);
2. `rings-subrings-and-integral-domains` (26 items) and `rings-subrings-and-integral-domains-examples` (10 items).

Coverage is 59/59 scoped items: 45 proof-bearing items and 14 definitions. I read every item in full, including every Statement/Definition/Example, all Facts & Assumptions, all 233 numbered proof/verification/refutation/counterexample steps, and all Remarks. I also read the exact Definition or Statement of every cited dependency target used by the proofs. The captured proof contracts contain 45/45 items, 387 fact-to-source citation records, 233 derivation records, and all 360 required boundary dispositions (eight per proof-bearing item).

No Wave 0 item, other category, or item outside this manifest was audited as a new scope item. Earlier audited dependencies were read only to verify the exact clauses spent by this batch. No `items/` or `library/` file was edited, and no A3/A4 repair or provenance application was attempted.

## A1 provenance result

The ledger has exactly one evidence row for each of the 59 scoped items:

| component | label | count |
|---|---:|---:|
| Statement | `literature-derived` | 10 |
| Statement | `ai-altered` | 49 |
| Proof | `ai-altered` | 10 |
| Proof | `ai-generated` | 35 |
| Proof | `not-applicable` | 14 |
| Evidence | `exact-source` | 10 |
| Evidence | `semantic-source` | 49 |

There are no `established-knowledge` rows, no URL waivers, no positive novelty determinations, and therefore no provenance classification held for Alpha concurrence. The ledger uses 24 distinct external URLs. A live check with redirects and a browser user agent returned HTTP 200 for all 24 on 2026-08-02. The main exact chapter sources are Judson’s coset/Lagrange/Fermat-Euler/ring chapters; specialist definitions and examples use their working topic pages, with MathWorld used for quaternions.

The conservative classification is intentional: merged claims, library-specific convention reconciliation, explicit edge cases, and specialised examples are `ai-altered`/`semantic-source` even when every mathematical component is standard. `ai-generated` is used for locally written proofs, not as a fallback for a statement whose source was hard to find.

## A2 mathematical verdict

I found no false Statement, no failed counterexample, and no proof whose conclusion is mathematically unsupported after allowing the brief’s sub-30-second routine-gap rule. In particular, the long quaternion proof was checked through the coefficient expansion, all basis-triple reductions, the cyclic symmetry, norm positivity, and the two-sided inverse calculation; the ring/field convention bridges and the characteristic-zero/characteristic-one edges also check out.

The batch is not ready for A3 acceptance unchanged because exact citation precision exposes three strict proof-contract errors and several additional local repairs. These are citation or dependency defects, not mathematical falsehoods.

### A3 repair recommendations — strict blockers

1. **`ex-cosets-of-nz-in-z`: declared fact `[L1]` is never spent by a numbered step.** The item needs `n\mathbb Z\le(\mathbb Z,+)` before using coset and index language, but step 1.1 cites only `[F1,F2]`. Add `[L1]` to the step that first instantiates the coset definition (most naturally step 1.1), or rewrite the Given/Facts split so the subgroup premise is genuinely established and tagged. The strict contract correctly reports two `citation-uses` errors, one for each direct `[L1]` source (`lem-subgroups-of-z-are-cyclic` and `thm-int-comm-ring`).

2. **`ex-integers-are-an-integral-domain-not-a-field`: declared fact `[L9]` is never spent by the verification.** `[L9]` supports only the later orientation Remark; claim 4 is proved directly from `[L5,L8]`. Remove `[L9]` from Facts & Assumptions and remove its load-bearing dependency edge (the Remark may retain its orientation wikilink), or genuinely cite it in a proof step after simplifying the direct argument. The present strict contract reports one `citation-uses` error for `lem-characteristic-and-additive-order`.

### A3 repair recommendations — exact citation/dependency precision

3. **`cor-index-tower-finite`, step 1.1:** `[L1]` may be applied to `K\le H` only after establishing that `H` is finite. That follows immediately from `H\subseteq G` and finite `G`, but no fact/source is declared or tagged for it. Add the appropriate finite-subset dependency/fact and cite it in step 1.1, or route the finiteness through an already licensed finite-subgroup result.

4. **`lem-field-is-a-commutative-ring`, step 3.2:** the prose explicitly spends axiom (M) for existence of `x^{-1}` and commutativity, but the tag is `[step 2.1,A4,L3]`. `[L3]` licenses uniqueness, not existence or commutativity. Add `[A1]` to step 3.2; retain `[L3]` only for identifying the inverse as unique if that identification is intended.

5. **`lem-ring-homomorphism-basic-properties`, step 1.2:** claim 5 introduces a second ring homomorphism `g:S\to T`, but the Given paragraph and `[A1]`–`[A3]` are stated only for `f:R\to S`. The step is mathematically routine, but its tag falsely presents the three `f`-equations as licensing the corresponding `g`-equations. Add `T,g` to the Given data and state the homomorphism laws generically or add `g`-specific facts, then cite them in step 1.2.

6. **`thm-lagrange`, step 2.1:** the step explicitly invokes a “constant-sum clause”, while `[L3]` states only the partition-sum identity. The linked `def-sum-over-a-finite-index-set` does contain the needed constant-summand law, so the proof is sound; make `[L3]` faithfully state that clause or introduce a separate exact fact for it.

7. **`thm-quaternions-form-a-division-ring`, `[L2]` and step 1.4:** `[L2]` concludes “in particular `1>0`” from the ordered-field structure, but its two direct targets state the ordered-field/cone structure rather than the derived nonzero-square theorem. `[L3]` is the exact source that gives `1^2>0` from `1\ne0`. Cite/spend `[L3]` for `1>0`, or remove the overcompressed conclusion from `[L2]` and derive it where used.

8. **`ex-index-of-the-trivial-subgroups`, step 1.2:** the proof invokes Lagrange with `H={e}` without an explicit fact that `{e}\le G`. The direct singleton-coset argument already nearly proves the formula. Either cite the trivial-subgroup fact before applying Lagrange, or finish the direct bijection `g\mapsto\{g\}` and remove the redundant Lagrange invocation.

### Non-blocking Remarks and published-prose queue

9. **`cex-2z-is-not-a-subring`, final Remark:** the claim that `2\mathbb Z` has no multiplicative identity uses `lem-int-cancellation`, but that item is absent from the frontmatter dependency list. The claim is true; declare the dependency if this proof-like Remark is retained, or shorten the Remark to orientation prose that does not establish a new result.

10. **`fs-every-nonzero-element-is-a-unit-or-a-zero-divisor`, finiteness Remark:** the finite-ring argument spends “an injective self-map of a finite set is surjective” without a citation. The corpus already has `thm-subset-of-a-finite-set` with the needed clause. Add the exact wikilink/dependency or mark the paragraph more clearly as a sourced forward observation.

11. **`def-ring-characteristic`, final Remark:** it says the “characteristic of an integral domain is 0 or prime” property “is taken up on a later page”. The later prime-number page explicitly says that claim is absent and still deferred, and no item in the current corpus states it. Replace the unfulfilled promise with an honest forward deferral or add the promised result in a separately authorised future scope. This is a published-claim-decay/A10 issue, not a defect in the Definition.

12. **Legacy page prose:** scoped `prosecheck --warnings` has 0 errors and 7 count warnings, all on the rings A/B pair: five `count-in-prose` and two `count-of-this-page`. The cosets pair is clean under the current A-two-paragraph/B-no-body form; the rings pages retain legacy authored prose and explicit item counts. Queue this for the A9/A10 prose sweep rather than changing it during A1/A2.

## Gate evidence inspected before A3

- Scoped `precheck.mts`: **45 checked, 0 failing**.
- Scoped `citecheck.mjs`: **59 scanned, 0 warnings**. Its heuristics do not detect the exact tag/source defects listed above; those came from the full semantic read.
- Scoped `rendercheck.mjs`: **63 checked** (59 items + 4 pages), **0 errors, 0 warnings**.
- Scoped `prosecheck.mjs --warnings`: **4 pages, 0 errors, 7 warnings** (all recorded above).
- `audit-manifest.mjs`: **464 relationships**, consisting of 182 same-batch and 282 published-backward edges; **0 unresolved and 0 forward edges**. All were included in the semantic audit coverage appropriate to A2.
- `finite-smoke.mjs`: **ok**, with no smoke cases selected. No available bounded checker matched this algebra batch closely enough to add a meaningful independent model test.
- `risk-report.mjs`: **ok** as a routing report; 30 contracts are critical, 12 high, and 3 moderate, so 42 require Alpha’s independent proof-refuter disposition at A6. Every contract intentionally retains `risk_review.status: pending` for Alpha.
- Strict `proof-contract.mjs`: checked **45/45** contracts, with no warnings and exactly the **3 expected `citation-uses` errors** described in recommendations 1–2. All other contract-shape, derivation, source-quote, and boundary checks pass.
- Audit `content-policy.mjs` was also run to expose the correct pre-A4 state: 236 errors = 59 each of missing Statement tag, missing Proof tag, ledger mismatch, and ledger-evidence mismatch. This is expected because A4 is expressly outside this assignment and none of the ledger rows has yet been applied to item frontmatter.
- Live source check: **24/24 distinct ledger URLs returned HTTP 200**.

## Handoff to Alpha/orchestrator

Recommended disposition: **proceed to A3 with repairs required; do not apply A4 yet**. Alpha should independently assess the twelve recommendations, require the three strict contract errors to reach zero after A3, and record A6 risk reviews for the 42 high/critical items. There is no A1 established-knowledge hold and no unresolved mathematical-correctness concern. The only unresolved items are the listed citation/dependency/prose repairs and the deliberately pending Alpha risk reviews.

Artifacts written by this Beta, and only these repo artifacts:

- `research/audit/wave1-abstract-algebra.provenance.jsonl`
- `research/audit/wave1-abstract-algebra.findings.md`
- `research/audit/wave1-abstract-algebra.proof-contracts.json`

## A4 — approved retags and repairs applied

Applied on 2026-08-02 after the orchestrator approved A3 and recorded the
`pre-A4` snapshot in `research/audit/wave1-touches.json`. No id, page file, or
page order was changed. The rings-page count warnings remain untouched for the
A9/A10 queue.

### Provenance and source application

All 59 ledger rows are now represented in item frontmatter immediately after
`origin:`: 10 `literature-derived` and 49 `ai-altered` Statements; 10
`ai-altered`, 35 `ai-generated`, and 14 `not-applicable` Proof components.
Sixty missing ledger reference entries were appended to
`sources.references`; all 104 row-to-URL occurrences are now reader-visible.
No scoped item carried legacy `authorship`, so D5 deleted nothing. No Statement
is `ai-generated`, so no `generation:` block is required or present.

The 48 retag-only items retain their existing judge/audit/verified stamps. The
eleven materially repaired items listed below have only their precheck result
left: every stale `verification.judge`, `verification.audited`, or prior
`verification.verified` record was deleted for independent A6 certification.

### Material repairs — old/new/source record

1. **`ex-cosets-of-nz-in-z` — citation precision.** Old step 1.1 instantiated
   the coset of `n\mathbb Z` with tag `[F1,F2]`, leaving declared subgroup fact
   `[L1]` unused. New step 1.1 first states that `[L1]` makes `n\mathbb Z` a
   subgroup and tags `[L1,F1,F2]`. Source: the existing exact statements of
   `lem-subgroups-of-z-are-cyclic`, `thm-int-comm-ring`, and `def-coset`.

2. **`ex-integers-are-an-integral-domain-not-a-field` — unused fact/edge
   removal.** Old Facts contained unused `[L9]`, and `deps` contained
   `lem-characteristic-and-additive-order`; the Verification proves
   characteristic zero directly from `[L5,L8]`. New Facts and `deps` omit
   `[L9]` and that edge. The non-load-bearing Remark retains its direct
   `[[lem-characteristic-and-additive-order]]` orientation link. No claim was
   weakened.

3. **`cor-index-tower-finite` — missing finiteness licence.** Old step 1.1
   applied Lagrange to `K\le H` without first licensing that `H` is finite. New
   fact `[F2]` quotes `thm-subset-of-a-finite-set`; the dependency was added,
   and step 1.1 derives finite `H` from `H\subseteq G` before its three
   Lagrange applications, tagged `[F2,L1]`.

4. **`lem-field-is-a-commutative-ring` — missing axiom tag.** Old step 3.2
   spent axiom (M) for inverse existence and commutativity but ended
   `[step 2.1,A4,L3]`. New tag is `[step 2.1,A1,A4,L3]`, where `[A1]` is the
   exact axiom-(M) clause from `def-field`.

5. **`lem-ring-homomorphism-basic-properties` — composition hypotheses made
   explicit.** Old Given/Facts introduced only `f:R\to S`, while step 1.2 used
   the homomorphism laws of `g:S\to T` under `[A1,A2,A3]`, which are
   `f`-specific. The new Given introduces ring `T` and ring homomorphism `g`;
   new `[A4]`–`[A6]` state its addition, multiplication, and identity laws with
   exact `def-ring-homomorphism` links; step 1.2 now tags all six axioms.

6. **`thm-lagrange` — exact constant-sum clause.** Old `[L3]` stated only the
   finite partition-sum identity while step 2.1 invoked a constant-summand
   clause. New `[L3]` also states `\sum_{i\in I}c=|I|c` when every summand is
   `c`, exactly as licensed by `def-sum-over-a-finite-index-set`; the theorem
   and proof calculation are otherwise unchanged.

7. **`thm-quaternions-form-a-division-ring` — positivity source precision.**
   Old `[L2]` appended “in particular `1>0`, so `1\ne-1`” to the ordered-field
   facts, and step 1.4 cited only `[L2]`. New `[L2]` states only the exact
   ordered-field/cone clauses. Step 1.4 uses `[L1]` for `1\ne0`, `[L3]`
   (`lem-of-square-positive`) for `1=1^2>0`, and `[L2]` for `-1<0`, with tag
   `[L1,L2,L3,given]`.

8. **`ex-index-of-the-trivial-subgroups` — trivial subgroup established.** Old
   step 1.2 applied Lagrange at `H={e}` without first establishing
   `{e}\le G`. New `[L2]` records the subgroup criterion and `e^{-1}=e` from
   `def-subgroup` and `lem-group-inverse-laws`; both dependencies were added.
   Step 1.2 explicitly checks `e\in H`, `ee=e`, and `e^{-1}=e` before applying
   `[L1]`.

9. **`cex-2z-is-not-a-subring` — proof-like Remark dependency.** Old final
   Remark used `[[lem-int-cancellation]]` to prove that `2\mathbb Z` has no
   multiplicative identity, but the frontmatter omitted that dependency. New
   `deps` includes `lem-int-cancellation`; the already precise Remark text and
   link are retained.

10. **`fs-every-nonzero-element-is-a-unit-or-a-zero-divisor` — finite-map
    citation.** Old finiteness Remark asserted that an injective self-map of a
    finite set is surjective, then said no item here proved the assertion. New
    prose cites `[[thm-subset-of-a-finite-set]]` at the inference, adds that
    dependency, and accurately labels the paragraph as an observation rather
    than part of the refutation.

11. **`def-ring-characteristic` — published-claim decay.** Old final Remark
    promised that the further integral-domain characteristic theorem “is taken
    up on a later page”, while the current corpus contains no such theorem and
    the prime page expressly leaves it absent. New prose states honestly that
    the current corpus does not yet state or prove the further theorem and that
    a future algebra page may add it from
    `lem-characteristic-and-additive-order` once the prime-number interface is
    in scope.

`tools/reflow.mts` was run on all ten materially changed proof-bearing items;
it made only syntactic paragraph reflow changes where needed. The full proof
contract was regenerated from the repaired disk state. Strict contract
validation is now 45/45 with zero errors and zero warnings, including complete
uses for the formerly unused `[L1]` and removal of `[L9]`.

### A4 impact handoff

The orchestrator/Alpha impact stage should classify 48 items as pure
frontmatter retags and eleven as material repairs. Five of the eleven change
dependency interfaces: one removal (`ex-integers-are-an-integral-domain-not-a-field`)
and four additions (`cor-index-tower-finite`,
`ex-index-of-the-trivial-subgroups`, `cex-2z-is-not-a-subring`, and
`fs-every-nonzero-element-is-a-unit-or-a-zero-divisor`). The other six change
Facts, proof tags, or published Remarks without changing `deps`. All eleven
need independent A6 certification; consumer impact must be computed from the
orchestrator’s touch ledger rather than inferred from this narrative.

### A4 validation and expected holds

- The orchestrator recorded both shared `pre-A4` and `post-A4` touch snapshots;
  item text was frozen before the latter snapshot.
- `content-policy.mjs --audit --ledger`: 59 scoped items, 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: 45/45 contracts, 392 citation records, 233
  derivations, 360 boundary dispositions, 0 empty citation-use sets, 0 errors,
  0 warnings.
- `precheck.mts`: 45 proof-bearing items checked, 0 failing.
- `citecheck.mjs`: 59 items scanned, 0 warnings.
- `rendercheck.mjs`: 59 items plus four pages checked, 0 errors, 0 warnings.
- `audit-manifest.mjs`: 468 relationships after the dependency repairs (181
  same-batch, 287 published-backward), 0 unresolved and 0 forward.
- `depsource.mjs`: all 86 coset-A, 47 coset-B, 188 ring-A, and 103 ring-B
  dependency rows resolve to published items; no draft, homeless, later, or
  unresolved dependency.
- `finite-smoke.mjs`: pass, with no applicable selected smoke test.
- `risk-report.mjs`: pass as routing; 30 critical, 13 high, 2 moderate, hence
  43 items require Alpha’s pending proof-refuter review.
- Repository-wide `fwdcheck.mjs`: 0 errors, 0 warnings. Repository-wide
  `extcheck.mjs`: 0 errors; its 83 standing unproved-consequence warnings are
  unrelated to this batch.
- Repository-wide `depcheck.mjs` has no dependency, cycle, link, or schema
  error. Its only hard errors are 12 expected `published-unaudited` holds:
  exactly the eleven material items in this batch plus one sibling
  combinatorics repair. A6 must write current `verification.verified` records
  before that gate can close.
- Scoped `prosecheck.mjs --warnings` remains 0 errors and the same seven legacy
  ring-page count warnings deliberately left for A9/A10.
- All 24 distinct ledger URLs were live-checked at HTTP 200; all 104 ledger URL
  occurrences are present in their corresponding item frontmatter.

Impact receipt requirements are therefore explicit: classify all 59 changed
interfaces from the touch ledger; dispose the 48 pure-retag interfaces in the
bulk pure class; independently certify the eleven material items; compute and
record every consumer of those eleven, especially the five changed dependency
interfaces; and complete the 43 high/critical risk reviews. This batch adds no
`ai-generated` Statement seed, so it creates no new genrisk disposition.
