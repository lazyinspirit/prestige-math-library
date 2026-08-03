# Wave 1 combinatorics — Audit-Beta A1/A2/A4 findings

Status: **A1, A2, and the approved A4 combinatorics work are complete.** The coordinated wave-wide `post-A4` touch snapshot is recorded and this batch's impact classification is written; independent A6 certification and shared-wave dispositions remain. This report covers exactly the two pages and 31 items in `wave1-combinatorics.pages.json` (manifest SHA-256 `0ace325bd318be634affe8d04ea69168d75886f74b4b27a73f10aa563c857049`). Audit role: Audit-Beta, GPT 5.6 Sol at xhigh. Date: 2026-08-02.

## Continuity checkpoint

The working context was compacted after the every-item reading pass. Disk state was rechecked against the manifest before artifact generation. The two page files, all 31 scoped item files, all 62 distinct dependency target source sections, every one of the 151 numbered proof steps, and every direct dependency link in the 317 fact/source pairs have been read. At A1/A2 no item or page content was edited. At A4, after the orchestrator's `pre-A4` touch snapshot, all 31 item frontmatters were retro-tagged, one Remark was materially corrected, and the A-page summary was rewritten; the B/examples page remained byte-for-byte untouched. The `post-A4` snapshot then froze the stage and `wave1-combinatorics.impact-classification.json` recorded this batch's slice of the wave-wide computation. The next independent action is A6 certification and risk/genrisk/impact disposition.

## Coverage and result

- Scope: 2 pages, 31 items, 62 distinct dependency targets, and 356 declared relationships (61 same-batch and 295 published-backward; none unresolved).
- Proof-bearing scope: 25 items. The remaining six are definitions or the convention remark and correctly have proof provenance `not-applicable`.
- Proof contract: 25 contracts, 317 exact fact/source citation records, 151 derivation records, zero routine-step shortcuts, and 200 boundary dispositions (all eight standard cases for every proof-bearing item).
- Mathematical result: no false theorem, invalid proof step, wrong counterexample, or load-bearing citation mismatch was found. All stated boundary cases and zero-index conventions used by the sieve, surjection, derangement, pigeonhole, and Erdős–Szekeres arguments check out.
- Three prose/schema defects require A3 disposition. One is an unambiguous false page-scope claim in a Remark; two are legacy page-summary shape violations. None changes a theorem statement or proof.

## A1 provenance classifications

The JSONL ledger contains the source URLs, convention deltas, direct verification, and rationale for every row. There are six `exact-source`, nineteen `semantic-source`, five `trivial`, and one `none` determinations. There are no `established-knowledge` holds and therefore no classification waiting on Alpha concurrence merely for lack of a source. All 14 distinct recorded URLs returned HTTP 200 on 2026-08-02.

### Exact source (6)

- `thm-inclusion-exclusion` — statement `literature-derived`; proof `ai-altered`.
- `lem-the-partial-alternating-sum-of-a-binomial-row` — statement `literature-derived`; proof `ai-altered`.
- `thm-the-bonferroni-inequalities` — statement `literature-derived`; proof `ai-altered`.
- `def-the-derangement-number` — statement `literature-derived`; proof `not-applicable`.
- `thm-the-derangement-formula` — statement `literature-derived`; proof `ai-altered`.
- `cor-the-derangement-recurrences` — statement `literature-derived`; proof `ai-generated`.

### Semantic source (19)

- `lem-a-double-sum-over-finite-index-sets-may-be-interchanged` — statement `ai-altered`; proof `ai-generated`.
- `def-a-finite-incidence-relation-and-its-fibres` — statement `ai-altered`; proof `not-applicable`.
- `thm-double-counting` — statement `ai-altered`; proof `ai-altered`.
- `cor-the-averaging-principle` — statement `ai-altered`; proof `ai-generated`.
- `def-the-ceiling-of-a-quotient-of-naturals` — statement `ai-altered`; proof `not-applicable`.
- `thm-the-strong-pigeonhole-principle` — statement `ai-altered`; proof `ai-altered`.
- `def-a-sieve-family-and-its-intersections` — statement `ai-altered`; proof `not-applicable`.
- `thm-the-number-of-surjections` — statement `ai-altered`; proof `ai-altered`.
- `def-a-monotone-sublist-of-a-finite-list-of-reals` — statement `ai-altered`; proof `not-applicable`.
- `thm-erdos-szekeres` — statement `ai-altered`; proof `ai-altered`.
- `thm-the-erdos-szekeres-bound-is-sharp` — statement `ai-altered`; proof `ai-altered`.
- `fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term` — statement `ai-altered`; proof `ai-generated`.
- `fs-a-bonferroni-truncation-is-exact` — statement `ai-altered`; proof `ai-generated`.
- `fs-the-erdos-szekeres-bound-can-be-lowered` — statement `ai-altered`; proof `ai-altered`.
- `ex-the-derangements-of-a-four-element-set-listed` — statement `ai-altered`; proof `ai-generated`.
- `ex-the-hat-check-ratio-as-a-quotient-of-counts` — statement `ai-altered`; proof `ai-generated`.
- `ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation` — statement `ai-altered`; proof `ai-altered`.
- `ex-the-handshake-identity-by-double-counting` — statement `ai-altered`; proof `ai-altered`.
- `cex-a-list-of-length-mn-with-no-long-monotone-sublist` — statement `ai-altered`; proof `ai-altered`.

### Directly verified bespoke constructions (5)

- `ex-a-three-set-and-a-four-set-sieve-computed` — statement/proof `ai-generated`; evidence `trivial`.
- `ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways` — statement/proof `ai-generated`; evidence `trivial`.
- `ex-a-ceiling-bound-from-the-strong-pigeonhole` — statement/proof `ai-generated`; evidence `trivial`.
- `cex-a-sieve-computation-that-omits-a-term` — statement/proof `ai-generated`; evidence `trivial`.
- `cex-an-averaging-bound-that-is-not-attained` — statement/proof `ai-generated`; evidence `trivial`.

These five are positive novelty determinations about the particular locally selected finite witnesses or worked instances, not defaults caused by a failed search. Their arithmetic and finite-set claims were independently recomputed. None has a downstream `deps` consumer.

### Bespoke page-specific composition (1)

- `rem-sieve-pigeonhole-and-double-counting-conventions` — statement `ai-generated`; proof `not-applicable`; evidence `none`.

This is positively classified as a novel composition because it is a ledger of this page's own interfaces and prerequisite absences, not a recoverable literature proposition. It has no downstream `deps` consumer. One of its page-scope assertions is false and is separately proposed for repair below.

## A2 findings and A3 recommendations

### W1-COMB-001 — false page-scope claim in the convention Remark

Class: **(a) unambiguous falsehood**, non-mathematical published-claim decay. Recommended A3 disposition: approve the smallest prose repair.

`items/rem-sieve-pigeonhole-and-double-counting-conventions.md` says that the stipulation $A_\varnothing=X$ “is used at exactly one place,” namely the complementary form of inclusion-exclusion. That page-wide claim is false:

- `items/thm-the-number-of-surjections.md`, step 1.3, explicitly uses $F_\varnothing=X$ to identify $F_J=\operatorname{Map}(A,B\setminus J)$ at $J=\varnothing$.
- `items/thm-the-derangement-formula.md`, step 1.2, explicitly uses the same stipulation to identify the fixed-point intersection at $J=\varnothing$.

Approved and applied at A4. The neighbouring mathematical explanation of why the empty intersection is stipulated was left unchanged; the exact repair ledger appears below.

### W1-COMB-002 — A-page summary violates the current two-paragraph contract

Class: **page-prose/schema repair**. Recommended A3 disposition: queue a page-summary rewrite; do not touch item mathematics.

`library/combinatorics/inclusion-exclusion-and-the-pigeonhole-principle.md` has ten nonempty prose blocks and about 1,077 words. SCHEMA requires exactly two nonempty prose paragraphs, each under 150 words, and forbids the summary from describing the page as an object. The body also begins “Objective” and repeatedly says “this page,” “comes first,” “follows,” “closes,” and “ends,” all outside the current summary contract. The mathematical descriptions sampled during the audit are accurate; the defect is shape and self-description.

Approved and applied at A4. The frontmatter was left unchanged. The replacement body has exactly two nonempty mathematical paragraphs of 86 and 98 words, with no page inventory, ranking, reading-order, or corpus claim; the exact replacement appears below.

### W1-COMB-003 — B/examples page has an authored summary body

Class: **page-prose/schema repair**. Recommended A3 disposition: queue removal of the authored B-page body under the owner-controlled page-prose path.

`library/combinatorics/inclusion-exclusion-and-the-pigeonhole-principle-examples.md` has six nonempty prose blocks and about 611 words after frontmatter. SCHEMA says a B/examples page has no authored summary body. The sampled descriptions of the examples are accurate; this is a pure shape violation.

Owner-only at A3 and deliberately not edited at A4. It remains in the A10 queue. No other repair was applied. In particular, non-load-bearing wikilinks in Remarks were not promoted into `deps` merely for duplication, and the minor prosecheck/citecheck heuristics listed below were false positives under the standing triage rule.

## A4 applied-repair ledger

### W1-COMB-001 — `rem-sieve-pigeonhole-and-double-counting-conventions`

- Class: unambiguous falsehood in a published Remark; public-interface and material prose repair.
- Source: written-out on-disk cross-check. `thm-the-number-of-surjections` step 1.3 uses $F_\varnothing=X$ when identifying $F_J=\operatorname{Map}(A,B\setminus J)$ at $J=\varnothing$; `thm-the-derangement-formula` step 1.2 uses the empty-intersection stipulation for the fixed-point sieve at $J=\varnothing$. Thus “exactly one place” is false.
- Old: `The clause is used at exactly one place, the term of the complementary form of [[thm-inclusion-exclusion]] at $J = \varnothing$.`
- New: `The clause supplies the $J = \varnothing$ term in the complementary form of [[thm-inclusion-exclusion]] and in later sieves whenever an intersection must also be identified at the empty subfamily.`
- Provenance transition: statement `ai-generated` → `ai-generated`; proof `not-applicable` → `not-applicable`. The component was already AI-generated and remains honestly tagged so.
- Stamp hygiene: the stale 2026-07-29 `verification.verified` (`scope: page`) and `verification.judge` blocks were deleted. `verification.precheck: n/a` remains. The item is intentionally `published-unaudited` until an independent A6 reader writes the current-context `published-audit` certification; this Beta does not self-certify.

### W1-COMB-002 — A-page summary

- Class: page-prose/schema repair; public-interface change, with no item mathematics or page frontmatter changed.
- Source: `SCHEMA.md`'s A-page contract requires exactly two nonempty prose paragraphs under 150 words each and forbids self-description, page inventory, ranking, reading-order, and corpus claims.
- Old: the complete baseline body (Git blob `72af347`, 10 nonempty blocks, about 1,077 words) began `**Objective.** The sum rule counts a union of finite sets only when the blocks are disjoint. This page removes that hypothesis.` and ended `Every index range starts at $0$, and each hypothesis of the form $t \ge 1$ or $n \ge 1$ on this page exists for that reason and is checked at its first legal index.`
- New, paragraph 1 (86 words): `Finite cardinality, finite sums over arbitrary finite index sets, the sum and product rules, binomial coefficients, and the canonical embedding of the naturals into the reals supply the counting and arithmetic background. The alternating binomial-row identity controls signed subset sums, while ordered-field arithmetic permits subtraction and division after natural counts are embedded in $\mathbb{R}$. A finite incidence relation supplies row and column fibres, and a finite family of subsets of a named ambient set supplies its intersections, including the empty intersection relative to that ambient set.`
- New, paragraph 2 (98 words): `Counting a finite incidence relation by either fibre family yields double counting and the averaging principle; applying the same partition-of-fibres argument to a function gives the strong pigeonhole principle and its ceiling form. Pointwise alternating sums over traces give inclusion-exclusion, and partial binomial-row sums give the Bonferroni bounds. Sieving functions by omitted values counts surjections, while sieving permutations by fixed points gives the derangement formula and its recurrences. Finally, longest increasing and decreasing sublists ending at each position define an injective rank-pair map, proving the Erdős–Szekeres bound; decreasing blocks ordered increasingly supply the sharp examples of length $mn$.`
- Provenance transition: not applicable to a page summary. The B/examples page was not edited.

## A4 provenance/source application

- All 31 ledger rows now have exact on-disk `provenance.statement` and `provenance.proof` values matching the JSONL evidence ledger.
- The five AI-generated examples/counterexamples have schema-valid `generation.role` values (`example` on three, `counterexample` on two). The legacy AI-generated Remark intentionally has no dishonest/non-schema role; audit mode exposes it as `generated-kind` for A6/Alpha's zero-cone genrisk disposition.
- The ledger requests 32 item/URL associations. Five exact URLs were already present and were de-duplicated; 27 source-reference entries were added. The Remark's `evidence: none` row has no ledger URL and retained its existing orientation references.
- Zero scoped items had legacy `authorship`, so there was nothing to delete. No proof body, dependency edge, id, title, Statement, Definition, Example, or counterexample claim changed.

## Proof, citation, and boundary audit

Every proof-bearing item has a strict contract. Each direct `[[...]]` citation in every `[F#]`, `[A#]`, or `[L#]` fact has an exact excerpt from the target's `Statement`, `Statement refuted`, `Definition`, or `Example` section and the complete set of proof steps using that fact. Each numbered step appears exactly once in `derivations`; no step was dismissed as routine. Every contract records all eight boundary cases.

The audit specifically rechecked the load-bearing edge cases that are easy to get wrong here: both empty-index forms of inclusion-exclusion; Bonferroni parity and exactness once the depth reaches $|I|$; $0^0=1$ in the surjection formula; $D_0$, the first legal indices of both derangement recurrences, and the factorial divisions; the empty-domain/nonempty-codomain pigeonhole readings; and $m=0$ or $n=0$ in both Erdős–Szekeres items. No correction was required.

Risk routing is intentionally unfinished at A2: `risk-report` classifies 18 contracts as critical and seven as high, so all 25 require Alpha proof-refuter review and a completed `risk_review` before Step 7. The pending records in the contract do not claim independent certification.

## A2 pre-A3 gate record

- `node tools/proof-contract.mjs research/audit/wave1-combinatorics.proof-contracts.json --strict --json` — pass, 25/25 contracts, zero errors or warnings.
- Scoped `tools/precheck.mts` over all 31 items — pass, 25 proof-bearing files checked, zero failures.
- Scoped `tools/citecheck.mjs` — one warning, triaged false positive: the word “irreflexivity” in `ex-the-handshake-identity-by-double-counting` matched the order-axiom heuristic; the step invokes the relation's given irreflexivity, not order reflexivity.
- Scoped `tools/prosecheck.mjs` over the 31 items and two pages — zero errors and three false-positive count warnings (“two of them”/“all of them” referring to mathematical objects, not page inventory). The two page-shape defects above are reading findings outside that heuristic.
- `node tools/audit-manifest.mjs ... --json` — 356 relationships, 61 same-batch and 295 published-backward, zero unresolved targets.
- `node tools/risk-report.mjs ... --json` — pass as a routing report; 18 critical and seven high, all pending Alpha disposition as required at A2.
- `node tools/finite-smoke.mjs ... --json` — pass with zero selected checks; the tool's available graph/tree and cyclic-group check families do not match these assertions.
- Repository-wide `tools/depcheck.mjs --json` — zero hard errors; 153 pre-existing global warnings, none a scoped failure.
- All 14 distinct provenance URLs were fetched with redirects enabled and returned HTTP 200.
- `content-policy --manifest-only` is not an audit gate: it is the future-authoring preflight and correctly rejects all 31 already-existing published files. Full `content-policy --audit --ledger ...` is deferred until A4 writes the approved on-disk provenance blocks, because before A4 a ledger/on-disk mismatch is expected by design.

## A4 scoped gate record

- Provenance/source/generation inventory assertion — pass: 31 exact ledger matches, five valid generation roles, zero unexpected roles, all 32 requested item/URL associations present, zero legacy `authorship`; A-page paragraph counts exactly 2 with word counts 86/98; B-page `git diff --quiet` passes.
- `node tools/proof-contract.mjs research/audit/wave1-combinatorics.proof-contracts.json --strict --json` — pass, 25/25 contracts, zero errors or warnings. No proof text changed, so no contract rebuild or proof `reflow` was owed.
- Scoped `tools/precheck.mts` over all 31 items — pass, 25 proof-bearing files checked, zero failures.
- `node tools/content-policy.mjs ... --audit --ledger ... --json` — pass: 31 scoped items, zero errors, one intentional `generated-kind` warning on the legacy AI-generated Remark.
- Scoped `tools/citecheck.mjs --json` — one unchanged false-positive warning: “irreflexivity” in `ex-the-handshake-identity-by-double-counting` matches the order-axiom heuristic, but the step uses the given relation's irreflexivity.
- Scoped `tools/prosecheck.mjs` over the 31 items and both pages — zero errors, three unchanged heuristic `count-of-this-page` warnings about mathematical objects; the rewritten A-page introduces none.
- `tools/extcheck.mjs` / `tools/fwdcheck.mjs` — zero hard errors and no scoped finding. The repository has zero open forward references.
- Repository-wide `tools/depcheck.mjs --json` — 12 errors, all `published-unaudited` transients from concurrent wave-1 A4 repairs; exactly one is in this scope, the corrected Remark whose stale certification was deliberately removed. No other error class is present.
- `node tools/audit-manifest.mjs ... --json` — pass: 356 relationships, 61 same-batch and 295 published-backward, zero unresolved targets.
- `node tools/risk-report.mjs ... --json` — pass as routing report; the 18 critical and seven high records remain pending independent A6 review.
- `node tools/finite-smoke.mjs ... --json` — pass, zero selected checks.
- Scoped `git diff --check` — pass.
- Coordinated `post-A4` touch snapshot — recorded at `2026-08-02T10:23:33.594Z`. `impact-audit` template/report mode passes with zero errors or warnings and computes 122 changed item interfaces and 1,567 affected items wave-wide. This batch contributes 31 changed item interfaces: 30 pure additive retags and one material Remark. Their union has 37 required-review consumers, while the materially corrected Remark itself has zero logical or direct-citation consumers. The A-page prose repair is outside the item-surface tool and is separately queued for independent reading. Exact classification: `wave1-combinatorics.impact-classification.json`.

## Unresolved work for Alpha/orchestrator

1. Independently certify W1-COMB-001 and the A-page rewrite; write the Remark's current-context `verification.verified` only after that reading and disposition every computed impact consumer in the shared wave receipt, using the namespaced impact classification as the batch slice.
2. Independently review and complete the `risk_review` for all 25 proof-bearing contracts (18 critical, seven high).
3. Review the six positive `ai-generated` determinations and record genrisk dispositions. All six have zero downstream `deps` consumers; the five `trivial` rows have written direct verification, and the convention Remark remains a visible legacy truth-risk seed with its false scope sentence repaired.
4. Retain W1-COMB-003 in the A10 owner-only queue. Its B-page authored body was not edited.

Coverage statement: **every scoped Statement/Definition/Example/Statement-refuted section, every Facts & Assumptions paragraph, every numbered proof/refutation/counterexample/verification step, every cited dependency source section, every Remark, and both page bodies were read. There are no coverage exceptions.**
