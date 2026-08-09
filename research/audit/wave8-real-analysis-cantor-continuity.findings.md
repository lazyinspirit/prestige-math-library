# Audit-Beta findings — wave 8, real-analysis-cantor-continuity

## A1/A2 record

- Scope of record: `research/audit/wave8-real-analysis-cantor-continuity.pages.json` (SHA-256 `0a54a0a8a92d14746477bc69d20a5348919eea7587038da5d9059eed206b12b3`).
- A1 provenance determination and A2 citation-precision/accuracy audit were completed before the A3 receipt. The A4 application record appears below.
- At the A1/A2 handoff no item, page, shared artifact, audit stamp, or judge block had been edited; the ten item repairs below were then proposals pending A3 approval.
- Coverage is complete with no reading exception: both A-page summaries, both B pages, all 67 scoped items, all Remarks, all 317 numbered proof/refutation/verification steps, all 355 declared Facts/Assumptions, and all 894 written Fact links were read skeptically. The proof contracts consolidate repeated links into 873 distinct fact-to-target citation rows.
- Dependency coverage is complete with no exception: the mathematical licensing sections of all 139 distinct Fact targets were read on disk; all 994 manifest relationships were checked for existence, legality, and semantic direction (770 published-backward, 184 same-batch, 40 declared forward; 165 distinct relationship targets overall).

## Provenance census

| Component | Classification | Count |
|---|---|---:|
| Statement | `literature-derived` / `exact-source` | 24 |
| Statement | `ai-altered` / `semantic-source` | 40 |
| Statement | `ai-generated` / `trivial` | 3 |
| Proof | `ai-altered` | 35 |
| Proof | `ai-generated` | 23 |
| Proof | `not-applicable` | 9 |

Every sourced classification has a working reputable-literature URL in the ledger. No row uses `established-knowledge`, no row needs Alpha concurrence to become valid, and no classification remains unresolved.

The three `ai-generated` statements are positive bespoke/trivial determinations, not failed source searches:

- `ex-cantor-function-values`: its four-value table follows directly from the local digit definition.
- `cex-cantor-point-that-is-not-an-endpoint`: the chosen point `1/4` has the alternating permitted ternary sequence, while removed-gap endpoints have eventually constant permitted expansions.
- `ex-fixed-point-from-the-ivt`: the locally chosen map has fixed-point equation `x^2=2`, and the preceding fixed-point theorem gives existence.

### Per-item classifications

| Item | Statement / evidence | Proof |
|---|---|---|
| `def-nowhere-dense-meager` | `ai-altered` / `semantic-source` | `not-applicable` |
| `def-f-sigma-g-delta` | `literature-derived` / `exact-source` | `not-applicable` |
| `thm-baire-category-r` | `ai-altered` / `semantic-source` | `ai-altered` |
| `cor-q-is-meager-and-not-g-delta` | `ai-altered` / `semantic-source` | `ai-generated` |
| `def-measure-zero-and-content-zero` | `ai-altered` / `semantic-source` | `not-applicable` |
| `lem-finite-interval-cover-total-length` | `literature-derived` / `exact-source` | `ai-altered` |
| `lem-nondegenerate-interval-is-not-null` | `literature-derived` / `exact-source` | `ai-altered` |
| `lem-countable-sets-are-null` | `literature-derived` / `exact-source` | `ai-altered` |
| `thm-countable-union-of-null-is-null` | `literature-derived` / `exact-source` | `ai-altered` |
| `lem-content-zero-implies-null` | `ai-altered` / `semantic-source` | `ai-generated` |
| `thm-compact-null-is-content-zero` | `ai-altered` / `semantic-source` | `ai-altered` |
| `def-cantor-set` | `literature-derived` / `exact-source` | `not-applicable` |
| `thm-cantor-set-ternary-description` | `ai-altered` / `semantic-source` | `ai-altered` |
| `thm-cantor-set-properties` | `ai-altered` / `semantic-source` | `ai-altered` |
| `def-fat-cantor-set` | `ai-altered` / `semantic-source` | `not-applicable` |
| `thm-fat-cantor-set-has-positive-measure` | `ai-altered` / `semantic-source` | `ai-altered` |
| `def-cantor-function` | `ai-altered` / `semantic-source` | `not-applicable` |
| `thm-cantor-function-properties` | `ai-altered` / `semantic-source` | `ai-altered` |
| `rem-baire-in-r-is-choice-free` | `ai-altered` / `semantic-source` | `not-applicable` |
| `fs-nowhere-dense-implies-measure-zero` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-measure-zero-implies-nowhere-dense` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-null-implies-content-zero` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-q-is-g-delta` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-cantor-set-countable` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-q-covered-by-intervals-of-small-total-length` | `ai-altered` / `semantic-source` | `ai-altered` |
| `ex-cantor-set-in-ternary` | `ai-altered` / `semantic-source` | `ai-altered` |
| `ex-fat-cantor-measure-computed` | `ai-altered` / `semantic-source` | `ai-altered` |
| `ex-baire-reproves-r-uncountable` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-cantor-function-values` | `ai-generated` / `trivial` | `ai-generated` |
| `ex-cantor-set-is-perfect-and-totally-disconnected` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-nowhere-dense-with-positive-measure` | `literature-derived` / `exact-source` | `ai-generated` |
| `cex-dense-set-of-measure-zero` | `literature-derived` / `exact-source` | `ai-generated` |
| `cex-null-set-not-of-content-zero` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-meager-set-of-full-measure` | `ai-altered` / `semantic-source` | `ai-altered` |
| `cex-cantor-point-that-is-not-an-endpoint` | `ai-generated` / `trivial` | `ai-generated` |
| `cex-irrationals-are-not-f-sigma` | `literature-derived` / `exact-source` | `ai-generated` |
| `def-continuity-real` | `ai-altered` / `semantic-source` | `not-applicable` |
| `thm-sequential-criterion-for-continuity` | `ai-altered` / `semantic-source` | `ai-altered` |
| `thm-algebra-of-continuous-functions` | `ai-altered` / `semantic-source` | `ai-altered` |
| `thm-composition-of-continuous-functions` | `literature-derived` / `exact-source` | `ai-altered` |
| `thm-continuity-preimage-characterisation` | `ai-altered` / `semantic-source` | `ai-altered` |
| `thm-continuous-image-of-a-compact-set-r` | `literature-derived` / `exact-source` | `ai-altered` |
| `cor-boundedness-theorem-r` | `literature-derived` / `exact-source` | `ai-generated` |
| `thm-extreme-value-r` | `literature-derived` / `exact-source` | `ai-altered` |
| `thm-intermediate-value` | `literature-derived` / `exact-source` | `ai-altered` |
| `cor-continuous-image-of-an-interval-is-an-interval` | `ai-altered` / `semantic-source` | `ai-generated` |
| `thm-one-dimensional-fixed-point` | `literature-derived` / `exact-source` | `ai-altered` |
| `lem-monotone-with-interval-image-is-continuous` | `ai-altered` / `semantic-source` | `ai-altered` |
| `def-uniform-continuity-real` | `literature-derived` / `exact-source` | `not-applicable` |
| `lem-real-and-metric-notions-agree` | `ai-altered` / `semantic-source` | `ai-generated` |
| `thm-heine-cantor-r` | `literature-derived` / `exact-source` | `ai-altered` |
| `cor-continuous-extension-from-a-dense-subset-r` | `ai-altered` / `semantic-source` | `ai-altered` |
| `thm-holder-exponent-above-one-forces-constancy` | `literature-derived` / `exact-source` | `ai-altered` |
| `thm-compactness-is-necessary-for-evt-and-uniform-continuity` | `literature-derived` / `exact-source` | `ai-altered` |
| `fs-continuity-implies-uniform-continuity` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-continuous-image-of-a-closed-set-is-closed` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-evt-holds-on-every-bounded-domain` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-distance-to-the-integers-is-1-lipschitz` | `ai-altered` / `semantic-source` | `ai-altered` |
| `cex-dirichlet-is-nowhere-continuous` | `literature-derived` / `exact-source` | `ai-altered` |
| `ex-x-times-dirichlet-is-continuous-exactly-at-zero` | `literature-derived` / `exact-source` | `ai-altered` |
| `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval` | `literature-derived` / `exact-source` | `ai-altered` |
| `cex-x-squared-is-not-uniformly-continuous-on-r` | `literature-derived` / `exact-source` | `ai-altered` |
| `ex-x-to-the-beta-separates-the-holder-classes` | `ai-altered` / `semantic-source` | `ai-altered` |
| `cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous` | `literature-derived` / `exact-source` | `ai-altered` |
| `cex-evt-fails-on-the-open-interval-and-on-the-half-line` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-ivt-gives-nth-roots` | `ai-altered` / `semantic-source` | `ai-altered` |
| `ex-fixed-point-from-the-ivt` | `ai-generated` / `trivial` | `ai-generated` |

## A2 repair proposals

Ten repairs are proposed: one class (a) unambiguous falsehood and nine class (b) citation-precision repairs. There are no class (c) provenance-retag proposals and no class (d) debatable restatements.

### 1. `thm-continuous-image-of-a-compact-set-r` — class (b)

The Statement allows `K = ∅`, but current Fact `[L3]` gives only a nonempty finite-list formulation and then appends that the empty set is compact. The cited Definition in `def-open-cover-r` says instead: “for every open cover U of K, either K = ∅ and the empty subfamily covers it, or there are n in N and U_0,...,U_n in U” covering K. With `K = ∅` and an empty cover family, current step 3.1 cannot obtain `W_0,...,W_n`.

Current text:

> `[L3] Compactness of K: for every family W ... there are n in N and W_0,...,W_n in W ...; and ∅ is compact ([[def-open-cover-r]]).`

Proposed replacement and proof branch:

> `[L3] Compactness of K: for every family W of open subsets of R with K contained in its union, either K = ∅ and the empty subfamily covers it, or there are n in N and W_0,...,W_n in W whose union covers K ([[def-open-cover-r]]).`
>
> Insert before the present step 1.1: `If K = ∅, then f[K] = ∅, which is compact by [L3]. Hence suppose K ≠ ∅ for the rest of the proof.` Then reflow the existing steps.

Derivation: under `K ≠ ∅`, any cover of K has a nonempty finite subcover, so the existing finite naming in steps 3.1–4.1 is licensed. Under `K = ∅`, the new branch proves the conclusion using exactly the cited empty-subfamily clause.

### 2. `cex-dense-set-of-measure-zero` — class (a)

The first Remark currently says that in the explicit rational cover “every one of those intervals meets every other.” The intervals are centred at an arbitrary enumeration of the rationals with rapidly decreasing radii; two sufficiently separated intervals need not intersect. Density of their union follows because the union contains every rational and is independent of pairwise intersection.

Proposed replacement:

> `For every ε > 0 the rationals are covered by open intervals of total length exactly ε ([[ex-q-covered-by-intervals-of-small-total-length]]), although their union is dense.`

### 3. `cor-q-is-meager-and-not-g-delta` — class (b)

Delete unused Fact `[L8]` (“an intersection of two open sets is open, and finite unions of closed sets are closed”). No numbered proof step cites it or needs it. Remove its now-unused dependency link in the ordinary dependency sweep.

### 4. `ex-cantor-set-in-ternary` — class (b)

Delete unused Fact `[L3]` about `C_1` and `C ⊆ C_1`; no verification step cites it. The one Remark that needs this observation already cites `def-cantor-set` directly. Sweep the two Fact-only dependencies if they become unused.

### 5. `cex-irrationals-are-not-f-sigma` — class (b)

Delete proof-unused Fact `[L3]`. In the Remark that currently says `R is not meager ([L3])`, replace the Fact citation with the direct licensing citation `[[thm-baire-category-r]]` (and retain the local terminology link where desired). The proof itself uses only `[L1]` and `[L2]`.

### 6. `thm-composition-of-continuous-functions` — class (b)

Delete proof-unused Fact `[L4]`, which contrasts composition of limits with composition of continuous functions. The same contrast is already stated with direct links in the Statement and Remarks; no numbered proof step cites `[L4]`. Sweep only dependencies that are truly unreferenced after deletion.

### 7. `fs-evt-holds-on-every-bounded-domain` — class (b)

Delete proof-unused Fact `[L6]`. Rewrite the first Remark’s indirect `[L6]` citation as the direct licensed claim: `(0,1)` is not closed and hence is not compact by `[[thm-heine-borel-characterisation-r]]`. No refutation step uses compactness.

### 8. `thm-sequential-criterion-for-continuity` — class (b)

Remove `[[rem-heine-criterion-choice-cost]]` from Fact `[L4]`. That dependency item has no licensing Statement/Definition/Example/Statement-refuted section, so it cannot be a strict Fact source. The mathematical content of `[L4]` is already licensed by `[[thm-sequential-criterion-for-function-limits]]` and `[[def-countable-choice]]`. Retain the Remark link in the theorem’s prose, where it correctly directs readers to the choice-cost discussion.

### 9. `thm-compact-null-is-content-zero` — class (b)

The Statement includes `K = ∅`, but current Fact `[L5]` says that compactness always extracts a nonempty list `U_0,...,U_m`. For `K = ∅` and the empty open cover this is not licensed by `def-open-cover-r`, and current step 4.1 repeats the same nonempty-list demand.

Proposed Fact replacement and proof branch:

> `[L5] K is compact: from every family of open sets whose union contains K, either K = ∅ and the empty subfamily covers it, or there are m in N and members U_0,...,U_m of the family whose union contains K; compactness is equivalent to being closed and bounded ([[def-open-cover-r]], [[thm-heine-borel-characterisation-r]]).`
>
> Before the current reverse-direction construction: `If K = ∅, then for every ε > 0 the single interval [0,0] covers K and has total length 0 ≤ ε, so K has content zero by [L1]. Hence suppose K ≠ ∅.` Then reflow the remaining steps.

Under `K ≠ ∅`, the open cover in the current step 3.1 has a nonempty finite subcover, so the present finite-index estimate is valid. The new branch proves the omitted boundary directly from the cited content-zero definition.

### 10. `lem-nondegenerate-interval-is-not-null` — class (b)

Current Fact `[L4]` states compactness for every subset of `R` using only a nonempty list `U_0,...,U_m`, omitting the empty-set/empty-subfamily clause of `def-open-cover-r`. The proof’s actual use is safe because step 1.1 has already established `a < b`, so `[a,b]` is nonempty, but the Fact itself overstates its cited source.

Proposed Fact replacement:

> `[L4] A subset of R is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]); from every family of open sets whose union contains a compact set, either the set is empty and the empty subfamily covers it, or one can extract m in N and members U_0,...,U_m of the family whose union already contains it ([[def-open-cover-r]]).`

No proof-step change is needed: step 1.1 licenses the nonempty branch before step 3.1 invokes compactness.

## A2 strict proof-contract result before A4

- Contract entries: 58/58 proof-bearing scoped items.
- Input map: 317/317 numbered steps, each covered exactly once.
- Fact-source rows: 873 distinct fact-to-target rows, each with source section, exact on-disk source clause, and all using steps.
- Boundary worksheets: 464/464 dispositions (eight cases for every contract).
- Strict gate on the pre-A4 published text: 58/58 checked, 0 warnings, 13 named errors.

The 13 current-text errors are not hidden or fabricated away in the contracts: 12 are unused Fact-target rows from proposals 3–7, and one is the non-licensing Remark target from proposal 8. Those six item-level repairs account for every strict-gate exception. Proposals 1, 9, and 10 are semantic empty-set mismatches between Facts and their cited compactness Definition that the syntactic quote gate cannot detect; proposals 1 and 9 also need the explicit proof branches stated above.

## Recorded page-summary decay

- Both A pages currently use long multi-paragraph labelled introductions rather than the canonical two-paragraph page-summary contract. This is nonfatal page prose and is recorded, not chased.
- The continuity A-page Objective formerly said that compactness was “exactly the hypothesis those results need” after listing compact-image, EVT, IVT, and Heine–Cantor. A3 approved the narrow sentence repair recorded below; the page's otherwise overlong summary remains untouched.

## A4 application record

A3 approved all ten item repairs and the narrow continuity-page sentence. They were applied as follows; proposals 1–10 above retain the full old and new wording where the replacement is longer than one line.

| Target | Old text/state | New text/state | Class and basis |
|---|---|---|---|
| `thm-continuous-image-of-a-compact-set-r` | `[L3]` forced a listed nonempty finite subcover, and step 3.1 used it even for `K = ∅`. | `[L3]` now states the exact empty-subfamily/listed-subcover disjunction quoted in proposal 1; new step 1.1 proves `f[∅] = ∅` compact, and the former construction is step 1.2. | (b), exact `def-open-cover-r` clause and the displayed two-case derivation in proposal 1. |
| `cex-dense-set-of-measure-zero` | “every one of those intervals meets every other and the union is dense.” | “although their union is dense because it contains $\mathbb{Q}_{\mathbb{R}}$.” | (a), containment of the dense rational set proves density; pairwise intersection is false for the stated cover. |
| `cor-q-is-meager-and-not-g-delta` | Unused `[L8]` and dependency `thm-open-set-algebra-r`. | Both deleted. | (b), no numbered step cited `[L8]`. |
| `ex-cantor-set-in-ternary` | Unused `[L3]`; dependencies included `def-interval`. | `[L3]` and `def-interval` deleted; `def-cantor-set` retained for the direct Remark link. | (b), no verification step cited `[L3]`. |
| `cex-irrationals-are-not-f-sigma` | Unused `[L3]`, dependency `def-nowhere-dense-meager`, indirect `([L3])`, and “both are uncountable or countable respectively.” | `[L3]` and the unused dependency deleted; the Remark links `[[thm-baire-category-r]]` directly and says “Both are dense; the rationals are countable and the irrationals are uncountable.” | (a)+(b), direct Baire licensing and the established countability/uncountability facts. |
| `thm-composition-of-continuous-functions` | Unused contrast Fact `[L4]`; dependency `def-limit-point-r`. | `[L4]` and only `def-limit-point-r` deleted; the three directly used contrast dependencies remain. | (b), no numbered proof step cited `[L4]`. |
| `fs-evt-holds-on-every-bounded-domain` | Unused `[L6]`, indirect “By [L6],” and dependencies `def-open-cover-r`, `def-open-and-closed-in-r`. | `[L6]` and both unused dependencies deleted; the Remark now says `(0,1)` “is not closed and hence is not compact by [[thm-heine-borel-characterisation-r]].” | (b), direct Heine–Borel licensing. |
| `thm-sequential-criterion-for-continuity` | Fact `[L4]` cited `[[rem-heine-criterion-choice-cost]]` as a licensing source. | That Fact link was deleted; `[[thm-sequential-criterion-for-function-limits]]` and `[[def-countable-choice]]` remain, as does the prose Remark link. | (b), the Remark has no licensing section; the retained targets state the Fact. |
| `thm-compact-null-is-content-zero` | `[L5]` and step 4.1 forced a listed nonempty finite subcover for `K = ∅`. | `[L5]` now states the exact empty-subfamily/listed-subcover disjunction quoted in proposal 9; new step 1.2 covers `∅` by `[0,0]`, and the nonempty construction begins at step 2.1. | (b), exact `def-open-cover-r` clause and the displayed two-case derivation in proposal 9. |
| `lem-nondegenerate-interval-is-not-null` | `[L4]` omitted the compact-empty-set alternative. | `[L4]` now gives the exact two alternatives quoted in proposal 10. | (b), exact `def-open-cover-r` clause; step 1.1 proves `a < b` before compactness is invoked. |
| continuity A page | “it closes with the sharp converse: compactness is exactly the hypothesis those results need.” | “it closes with counterexamples showing that compactness is needed for the extreme-value and uniform-continuity conclusions; the intermediate value theorem instead rests on the interval/connectedness hypothesis.” | (a), the sharp-converse item covers EVT and uniform continuity, whereas IVT uses the interval/connectedness hypothesis. |

All 67 scoped items received the A3-approved component provenance and source metadata. The receipt's overrides were also applied: `fs-q-is-g-delta` is `ai-altered` / `semantic-source`; the three Zakon problem citations use the exact problems URL; the five measure rows use the UAF notes URL and corrected rationales; and `thm-one-dimensional-fixed-point` uses Conrad's arbitrary-closed-interval theorem and rationale. Every `origin` remains `session`; no `authorship` field exists.

The ten materially repaired item files had stale `verification.judge` and `verification.audited` state removed. The other 57 item-file changes are pure retags/source additions. No declined or unlisted edit was applied, and the overlong page summaries were not rewritten.

Final contracts were regenerated from the published text: 58/58 entries, 319/319 numbered steps covered exactly once, 860 exact Fact-source rows with their actual uses, and 464/464 boundary dispositions. The strict result is 58/58 checked, zero errors, zero warnings.

Coverage remains complete with no reading exception. Apart from the applied repairs and the recorded nonfatal summary length, no mathematical falsehood, proof gap, illegal dependency, wrong-direction citation, hidden stronger dependency claim, or unresolved provenance issue remains in the batch.

## A4 validation

- `node tools/tsx-run.mjs tools/reflow.mts <ten material item files>` completed; the repaired proof bodies are in canonical single-line phase format.
- `node tools/tsx-run.mjs tools/precheck.mts <ten material item files>`: 10 checked, 0 failing. The final corpus-wide run checked 2172 proof-bearing items with 0 failing.
- `node tools/proof-contract.mjs research/audit/wave8-real-analysis-cantor-continuity.proof-contracts.json --strict`: 58/58 checked, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --audit --ledger research/audit/wave8-real-analysis-cantor-continuity.provenance.jsonl research/audit/wave8-real-analysis-cantor-continuity.pages.json`: 67 scoped items, 0 errors, 0 warnings.
- `node tools/finite-smoke.mjs ...proof-contracts.json`: 0 errors; `node tools/risk-report.mjs ...proof-contracts.json`: 0 errors, 58 items routed.
- `node tools/audit-manifest.mjs research/audit/wave8-real-analysis-cantor-continuity.pages.json`: exit 0; final relationships are 40 forward, 765 published-backward, and 183 same-batch.
- Corpus-wide `depcheck --pending-audit-ok`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, advisory `citecheck`, and `depsource research/plan-spec.json` all exited 0. Rendercheck parsed all 3043 files cleanly; prosecheck had 0 errors and 576 expected heuristic warnings.
- `git diff --check`: exit 0.
