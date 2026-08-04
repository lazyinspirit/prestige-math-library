# Wave 3 foundations: Audit-Beta A1/A2 findings

Date: 2026-08-04  
Scope: `ordinal-arithmetic` (28 items) and `ordinal-arithmetic-examples` (8 items)  
Status: A4 complete; only the repairs approved in `wave3-A3.md` were applied.

## Continuity checkpoint

- Substage: A4 application and local gate validation complete.
- Owned artifacts: `research/audit/wave3-foundations.provenance.jsonl`, `research/audit/wave3-foundations.proof-contracts.json`, and this findings file.
- Completed checks: all 36 manifest items and both page files read in full; all numbered proof steps, Facts citations, declared dependency edges, current dependency targets, Remarks, and A-page summary read; 11 distinct proposed source URLs opened through the model-side web fetch route and verified to return rendered HTML or PDF content (HTTP 200); provenance ledger reconciled exactly to the manifest; proof-contract structure and eight-case worksheets checked.
- Open mathematical constraints: preserve right-recursive ordinal multiplication and its left-distributive law; preserve the restricted limit clause for ordinal exponentiation; do not blur ordinal with cardinal exponentiation; keep ZF, $\mathrm{AC}_\omega$, and Feferman--Levy independence claims separated.
- Exact next action: return the completed foundations batch to the orchestrator for the post-A4 stage snapshot, merged-contract refresh, A5 gates, and A6 independent reading.

## Result and coverage census

- Provenance: 36/36 items have one ledger row, with 36 unique ids and no manifest omission or extra id. Statements are 14 `literature-derived` and 22 `ai-altered`; proofs are 27 `ai-altered`, 2 `ai-generated`, and 7 `not-applicable`. Evidence is 14 `exact-source` and 22 `semantic-source`. There is no `established-knowledge` waiver and no unresolved provenance classification.
- Proof scope: the repository proof-bearing predicate finds **29**, not the 28 reported in `wave3-A0.md`. The contract deliberately covers the mechanically observed 29/29 rather than reproducing the A0 undercount.
- Proof contracts after A4: 196 numbered steps, all mapped exactly once; 169 labelled facts; 287 direct Fact-to-source citation pairs; eight boundary cases for every one of the 29 contracts. All 29 `risk_review` records remain `pending` for the independent lane.
- Dependencies: 357 declared edges were read and checked: 128 within this batch and 229 leaving it, reaching 32 distinct external targets (55 distinct targets in total). The current on-disk version of every target was read. The 29 A0 pending seam edges into `countability-and-uncountability` were assessed against its current text; its absent future provenance tags were not treated as defects. The one `external_refs` target, `rem-feferman-levy-model`, was also read in full.
- Gate state before repair: `proof-contract.mjs --strict` checks 29/29 and reports exactly five `citation-uses` errors, all corresponding to proposals B2--B4 below, with zero warnings. `finite-smoke.mjs` reports zero errors and no selected finite checks. `content-policy.mjs --audit --ledger` sees all 36 ledger rows but reports the expected 144 pre-A4 errors because all 36 legacy items still lack on-disk provenance tags; applying those tags is intentionally deferred to A4.

## Proposed repair register

This section preserves the A1/A2 proposals. A3 approved A1, A2, the page-only
part of B1, B2--B4, all 36 class-(c) determinations, D1, and the single bounded
claim inside D2. It declined the `def-ordinal-exponentiation` edit and the
wholesale A-page rewrite; those declined changes remain unapplied.

### (a) Unambiguous falsehoods

#### A1. `def-cofinal-subset-of-an-ordinal`: false boundedness equivalence

Current Definition:

> A subset that is not cofinal is bounded below $\alpha$: there is $\xi\in\alpha$ with $\eta<\xi$ for every $\eta\in C$, equivalently $\eta\le\xi$ for every $\eta\in C$ and some $\xi\in\alpha$.

The second condition is not equivalent at a successor ordinal. Let $\alpha=1$ and $C=\{0\}$. Then $C$ is cofinal in $1$, and the strict bound condition fails, but the weak condition holds with $\xi=0$.

Proposed repair: retain only the correct strict formulation:

> A subset that is not cofinal is bounded below $\alpha$: there is $\xi\in\alpha$ such that $\eta<\xi$ for every $\eta\in C$.

Evidence: direct counterexample above; the sourced cofinality definition agrees with the first displayed definition, not the false weak reformulation.

#### A2. `fs-ordinal-addition-is-commutative`: false characterization of commuting pairs

Current Remark:

> The commutative special case is exactly the finite one.

This is false: infinite ordinals can commute. The immediate example is $\omega+\omega=\omega+\omega$. The cited agreement theorem shows only that addition is commutative on finite ordinals; it does not prove that every commuting pair is finite.

Proposed repair:

> Addition is commutative on finite ordinals because it agrees there with Peano addition. The displayed witness shows that ordinal addition is not commutative in general.

Evidence: direct substitution of $(\omega,\omega)$ and the exact scope of `thm-ordinal-arithmetic-agrees-on-omega`.

### (b) Citation-precision repairs

#### B1. `def-ordinal-exponentiation` and the A-page summary: theorem attributed to the well-definedness corollary

Both places say that `cor-ordinal-exponentiation-well-defined` carries the exponent law falsified by the unrestricted limit clause. The corollary constructs the ordinal-valued class function and proves uniqueness. The law $\alpha^{\beta+\gamma}=\alpha^\beta\alpha^\gamma$ belongs to, and is proved in, `thm-ordinal-exponent-laws`; the corollary's Remark only discusses the later theorem.

Proposed repair in both places:

> `cor-ordinal-exponentiation-well-defined` carries the well-definedness details; `thm-ordinal-exponent-laws` proves the exponent law that the naive clause would falsify.

Evidence: the corollary Statement and steps 1.1--4.2 versus `thm-ordinal-exponent-laws` clause (e) and step 5.1.

#### B2. `fs-ordinal-addition-is-commutative`: unused proof Fact `[L5]`

`[L5]` cites `lem-ordinal-sum-as-an-order-type`, but no numbered Refutation step uses `[L5]`; it is used only by the subsequent picture Remark. This is one strict `citation-uses` failure.

Proposed repair: remove `[L5]` from the proof Facts and cite `lem-ordinal-sum-as-an-order-type` directly in the picture Remark. The Refutation itself remains unchanged.

#### B3. `fs-ordinal-multiplication-is-commutative`: unused proof Fact `[L5]`

`[L5]` cites `lem-ordinal-product-as-an-order-type`, but no numbered Refutation step uses `[L5]`; it is used only by the subsequent picture Remark. This is one strict `citation-uses` failure.

Proposed repair: remove `[L5]` from the proof Facts and cite `lem-ordinal-product-as-an-order-type` directly in the picture Remark. The Refutation itself remains unchanged.

#### B4. `cex-omega-one-has-no-at-most-countable-cofinal-subset`: wholly unused proof Fact `[L5]`

`[L5]` cites `def-ordinal`, `lem-ordinal-basics`, and `lem-ordinal-trichotomy`, but no numbered Counterexample step cites `[L5]`. These are the remaining three strict `citation-uses` failures.

Proposed repair: delete `[L5]`. No proof step or prose needs replacement text.

### (c) Provenance retags

Every ledger row below is an A3 proposal to replace the absent legacy component tags at A4 and to add its verified URLs to `sources.references`. This section is a proposal only: no item frontmatter has been changed.

| item | statement | proof | evidence |
|---|---|---|---|
| `lem-recursion-on-the-ordinals` | `ai-altered` | `ai-altered` | `semantic-source` |
| `cor-ordinal-addition-well-defined` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-ordinal-addition` | `literature-derived` | `not-applicable` | `exact-source` |
| `cor-ordinal-multiplication-well-defined` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-ordinal-multiplication` | `literature-derived` | `not-applicable` | `exact-source` |
| `cor-ordinal-exponentiation-well-defined` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-ordinal-exponentiation` | `literature-derived` | `not-applicable` | `exact-source` |
| `lem-ordinal-sum-as-an-order-type` | `literature-derived` | `ai-altered` | `exact-source` |
| `lem-ordinal-product-as-an-order-type` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-arithmetic-monotonicity` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-ordinal-addition-associative` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-multiplication-associative-and-left-distributive` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-subtraction` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-division-with-remainder` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-exponent-laws` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-cantor-normal-form` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ordinal-arithmetic-agrees-on-omega` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-first-uncountable-ordinal` | `literature-derived` | `not-applicable` | `exact-source` |
| `thm-omega-one-is-the-least-uncountable-ordinal` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-cofinal-subset-of-an-ordinal` | `ai-altered` | `not-applicable` | `semantic-source` |
| `thm-countable-subsets-of-omega-one-are-bounded` | `ai-altered` | `ai-altered` | `semantic-source` |
| `rem-ordinal-versus-cardinal-exponentiation` | `ai-altered` | `not-applicable` | `semantic-source` |
| `rem-omega-one-and-the-cost-of-choice` | `ai-altered` | `not-applicable` | `semantic-source` |
| `fs-ordinal-addition-is-commutative` | `ai-altered` | `ai-altered` | `semantic-source` |
| `fs-ordinal-multiplication-is-commutative` | `ai-altered` | `ai-altered` | `semantic-source` |
| `fs-ordinal-multiplication-is-right-distributive` | `ai-altered` | `ai-altered` | `semantic-source` |
| `fs-ordinal-addition-is-strictly-monotone-in-the-left-argument` | `ai-altered` | `ai-altered` | `semantic-source` |
| `fs-the-ordinal-two-to-the-omega-is-uncountable` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-one-plus-omega-and-omega-plus-one` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-omega-times-two-and-two-times-omega` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-omega-plus-omega-is-countable` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-powers-of-omega-and-epsilon-zero` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-cantor-normal-form-computed` | `ai-altered` | `ai-generated` | `semantic-source` |
| `ex-ordinal-subtraction-and-division-computed` | `ai-altered` | `ai-generated` | `semantic-source` |
| `ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum` | `ai-altered` | `ai-altered` | `semantic-source` |
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | `ai-altered` | `ai-altered` | `semantic-source` |

The two `ai-generated` proof determinations are positive, not fallback classifications. The exact squeeze/comparison computation in `ex-cantor-normal-form-computed` and the paired worked subtraction/division computation in `ex-ordinal-subtraction-and-division-computed` are identifiable bespoke pedagogical constructions; their mathematical statements remain recoverable alterations of sourced standard arithmetic and are therefore `ai-altered`. Full item-level source and convention rationales are in the JSONL ledger.

### (d) Debatable restatements

#### D1. `thm-cantor-normal-form`: overstatement about proof portability to arbitrary bases

Current Remark:

> The same argument with $\omega$ replaced by any ordinal $\gamma>1$ gives a base-$\gamma$ normal form, with coefficients in $\gamma$ rather than in $\omega$.

General ordinal base expansion for $\gamma>1$ is a standard result, but the literal claim about the same argument is not licensed. This proof makes additive indecomposability of $\omega^\beta$ “the whole content of uniqueness.” That step does not survive simple substitution of an arbitrary base: for example, the analogous absorption already fails at base $2$, since $1+2=3\ne2$. General bases need their digit/carry analysis rather than this base-$\omega$ absorption proof unchanged.

Proposed repair:

> More general base-$\gamma$ expansions exist for ordinals $\gamma>1$, with digits below $\gamma$, but their proof requires a general digit-and-carry argument. The theorem and proof here concern only base $\omega$.

Evidence: the general base-expansion statement in the verified ordinal-arithmetic source, contrasted with steps 2.1 and 3.1 of the present proof.

#### D2. `library/foundations/ordinal-arithmetic.md`: summary contract and overbroad scope claim

The A-page body is 1,023 words and many prose paragraphs. `CLAUDE.md` requires exactly two nonempty prose paragraphs, each under 150 words, with a specific background/progression division and no counts or survey claims. The body also says “Every other law a reader might expect fails,” a much broader mathematical assertion than the five named counterexamples establish.

Proposed repair: replace the entire A-page body at A4 with two contract-compliant paragraphs, each under 150 words, retaining only the dependency background and the page's logical progression. Replace the overstatement by the bounded claim “Several familiar commutative and distributive laws fail, as the companion counterexamples show.” Preserve the exact right-recursive multiplication convention, the ordinal/cardinal exponentiation distinction, and the explicit $\mathrm{AC}_\omega$ boundary.

Evidence: `CLAUDE.md` lines 509--516 and direct word/paragraph census of the current page.

## Mathematical convention and hypothesis audit

- **Addition and multiplication:** the library recurses on the right argument. Its successor product is $\alpha(\beta+1)=\alpha\beta+\alpha$, so $\alpha\beta$ is $\beta$ copies of $\alpha$. The proved distributive direction is the left law $\alpha(\beta+\gamma)=\alpha\beta+\alpha\gamma$. The located sources use the same orientation; no mirror-convention source was accepted as exact evidence.
- **Exponentiation:** the library's limit clause ranges over $0<\beta<\lambda$, preserving $0^\lambda=0$ for nonzero limits while taking $0^0=1$. The verified ordinal-arithmetic source states this convention. Cardinal exponentiation was checked separately and is not used to license an ordinal-exponentiation claim.
- **Cantor normal form:** the theorem's stated base is exactly $\omega$, exponents strictly decrease, coefficients are nonzero natural numbers, and uniqueness has the same convention as the exact sources. D1 concerns only the subsequent arbitrary-base proof claim.
- **Choice:** the global recursion bridge spends Replacement but no choice. Hartogs' construction and the existence/basic properties of $\omega_1$ are correctly stated in ZF. `thm-countable-subsets-of-omega-one-are-bounded` and the two dependent examples/counterexamples explicitly assume $\mathrm{AC}_\omega$ where the countable-union theorem is used. The current `rem-feferman-levy-model` target correctly supports the consistency warning that $\omega_1$ may be singular in ZF. No silent use of AC, countable choice, dependent choice, or well-ordering of an arbitrary set was found.

## URL verification record

Every URL below was opened through the model-side web fetch route on 2026-08-04 and returned rendered HTML or PDF content (HTTP 200). A shell DNS result was not used for any determination.

- `https://builds.openlogicproject.org/open-logic-complete.pdf`
- `https://en.wikipedia.org/wiki/Axiom_of_countable_choice`
- `https://en.wikipedia.org/wiki/Cardinal_number`
- `https://en.wikipedia.org/wiki/Cofinality`
- `https://en.wikipedia.org/wiki/Epsilon_number_(mathematics)`
- `https://en.wikipedia.org/wiki/First_uncountable_ordinal`
- `https://en.wikipedia.org/wiki/Hartogs_number`
- `https://en.wikipedia.org/wiki/Ordinal_arithmetic`
- `https://karagila.org/files/Forcing-2023.pdf`
- `https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf`
- `https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf`

## Triage disposition and unresolved matters

- No class (a) proof invalidity, missing theorem hypothesis, invalid witness, or undeclared choice use was found beyond A1 and A2 above.
- The explicitly scoped leastness gap in `ex-powers-of-omega-and-epsilon-zero` is not a defect: the item says it proves the fixed-point equation but not leastness, and a competent reader can close the later normal-form reduction remark immediately from the displayed construction.
- Minor redundant step tags and non-load-bearing prose quirks were not proposed for repair under the standing triage rule.
- The only workflow discrepancy is A0's proof-bearing count of 28 versus the repository predicate and strict gate's 29. The contract covers all 29; the orchestrator should correct the wave census rather than dropping a contract.

## Explicit coverage statement

Every one of the 36 in-scope mathematical-content items was read in full. Every one of the 196 numbered proof, refutation, counterexample, and verification steps was read and checked against its inputs. Every one of the 292 direct Fact-to-source citation pairs and every one of the 357 declared dependency edges was read and checked semantically against the current on-disk target; all 32 distinct external targets and the sole `external_refs` target were read. Both page bodies, every Remark, and every dependency citation in the pair were read. **There is no coverage exception.**


## A4 applied repair ledger

A4 applied only the A3-approved subset. No id, page order, dependency list, or item order changed, and no snapshot was taken. The `def-ordinal-exponentiation` wording and the wholesale page-summary draft remain exactly as they were and stay routed to A6/A10 respectively.

### Class (a), (b), and (d) repairs

1. **`def-cofinal-subset-of-an-ordinal` — class (a), fatal Definition repair.** Old: “there is $\xi\in\alpha$ with $\eta<\xi$ for every $\eta\in C$, equivalently $\eta\le\xi$ for every $\eta\in C$ and some $\xi\in\alpha$.” New: “there is $\xi\in\alpha$ such that $\eta<\xi$ for every $\eta\in C$.” Elementary derivation: for $\alpha=1$ and $C=\{0\}$, the weak condition holds with $\xi=0$ although $C$ is cofinal and the strict condition fails. The prior `verification.verified` block certified different text and was removed; no `verification.judge` or `audited` field existed on disk.

2. **`fs-ordinal-addition-is-commutative` — class (a), fatal Remark repair.** Old: “The commutative special case is exactly the finite one.” New: “Addition is commutative on finite ordinals because it agrees there with Peano addition. The displayed witness shows that ordinal addition is not commutative in general.” Elementary derivation: $\omega+\omega=\omega+\omega$, and also $\omega+\omega\cdot2=\omega\cdot2+\omega=\omega\cdot3$; `thm-ordinal-arithmetic-agrees-on-omega` supplies only the finite forward direction. The stale judge block and obsolete `audited` stamp were removed.

3. **`library/foundations/ordinal-arithmetic.md` exponent attribution — class (b).** Old: “`cor-ordinal-exponentiation-well-defined` carries the details and the exponent law that the naive clause falsifies.” New: the corollary is credited only with the well-definedness details, while `thm-ordinal-exponent-laws` is credited with the exponent law. Source check: the corollary proves existence, uniqueness, and ordinal-valuedness; clause (e) of `thm-ordinal-exponent-laws` states and proves $\alpha^{\beta+\gamma}=\alpha^\beta\alpha^\gamma$.

4. **`fs-ordinal-addition-is-commutative` Fact `[L5]` — class (b).** Old: the order-type lemma was a proof Fact with no numbered-step use. New: the Fact is absent and the picture Remark directly links `lem-ordinal-sum-as-an-order-type`. Evidence: the pre-A4 contract recorded `uses: []`; the Refutation is unchanged.

5. **`fs-ordinal-multiplication-is-commutative` Fact `[L5]` — class (b).** Old: the product order-type lemma was a proof Fact with no numbered-step use. New: the Fact is absent and the picture Remark directly links `lem-ordinal-product-as-an-order-type`. Evidence: the pre-A4 contract recorded `uses: []`; the Refutation is unchanged. The stale judge block and obsolete `audited` stamp were removed.

6. **`cex-omega-one-has-no-at-most-countable-cofinal-subset` Fact `[L5]` — class (b).** Old: one Fact cited `def-ordinal`, `lem-ordinal-basics`, and `lem-ordinal-trichotomy`, with no numbered-step use. New: the wholly unused Fact is absent; no proof or Remark needed its statement. Evidence: all three pre-A4 citation rows recorded `uses: []`. The stale judge block and obsolete `audited` stamp were removed.

7. **`thm-cantor-normal-form` base Remark — class (d), material repair.** Old: “The same argument with $\omega$ replaced by any ordinal $\gamma>1$ gives a base-$\gamma$ normal form.” New: “More general base-$\gamma$ expansions exist for ordinals $\gamma>1$, with digits below $\gamma$, but their proof requires a general digit-and-carry argument. The theorem and proof here concern only base $\omega$.” Elementary obstruction: the proof's absorption step does not survive substitution of base $2$, since $1+2=3\ne2$. The stale judge block and obsolete `audited` stamp were removed.

8. **`library/foundations/ordinal-arithmetic.md` scope sentence — class (d).** Old: “Every other law a reader might expect fails,” followed by an unbounded characterization. New: the sentence says exactly that the companions show noncommutativity of addition and multiplication, failure of right distributivity and strict left-argument monotonicity for addition, and countability of ordinal $2^\omega$. Evidence: those are precisely the five companion false statements; no universal claim about every expected law remains.

### Class (c) provenance retags

For every row below, the old component provenance was absent. The new text is the displayed `statement / proof` pair, and `sources.references` now contains every source key in the final column. No legacy `authorship` line existed in any of the 36 files. The evidence class and individualized source rationale remain one-to-one in `wave3-foundations.provenance.jsonl`.

| item | new statement / proof | evidence | source keys |
|---|---|---|---|
| `lem-recursion-on-the-ordinals` | `ai-altered` / `ai-altered` | `semantic-source` | MOOSA, OLP |
| `cor-ordinal-addition-well-defined` | `ai-altered` / `ai-altered` | `semantic-source` | MOOSA, OA |
| `def-ordinal-addition` | `literature-derived` / `not-applicable` | `exact-source` | OA, MOOSA |
| `cor-ordinal-multiplication-well-defined` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA |
| `def-ordinal-multiplication` | `literature-derived` / `not-applicable` | `exact-source` | OA, MOOSA, OLP |
| `cor-ordinal-exponentiation-well-defined` | `ai-altered` / `ai-altered` | `semantic-source` | OA |
| `def-ordinal-exponentiation` | `literature-derived` / `not-applicable` | `exact-source` | OA |
| `lem-ordinal-sum-as-an-order-type` | `literature-derived` / `ai-altered` | `exact-source` | OA, OLP |
| `lem-ordinal-product-as-an-order-type` | `literature-derived` / `ai-altered` | `exact-source` | OA, OLP |
| `thm-ordinal-arithmetic-monotonicity` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA, OLP |
| `thm-ordinal-addition-associative` | `literature-derived` / `ai-altered` | `exact-source` | OA, MOOSA, OLP |
| `thm-ordinal-multiplication-associative-and-left-distributive` | `literature-derived` / `ai-altered` | `exact-source` | OA, OLP |
| `thm-ordinal-subtraction` | `literature-derived` / `ai-altered` | `exact-source` | OA |
| `thm-ordinal-division-with-remainder` | `literature-derived` / `ai-altered` | `exact-source` | OA |
| `thm-ordinal-exponent-laws` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA |
| `thm-cantor-normal-form` | `literature-derived` / `ai-altered` | `exact-source` | OA, MARKS |
| `thm-ordinal-arithmetic-agrees-on-omega` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA |
| `def-first-uncountable-ordinal` | `literature-derived` / `not-applicable` | `exact-source` | HART, W1 |
| `thm-omega-one-is-the-least-uncountable-ordinal` | `ai-altered` / `ai-altered` | `semantic-source` | HART, W1 |
| `def-cofinal-subset-of-an-ordinal` | `ai-altered` / `not-applicable` | `semantic-source` | COF |
| `thm-countable-subsets-of-omega-one-are-bounded` | `ai-altered` / `ai-altered` | `semantic-source` | W1, ACW, KAR |
| `rem-ordinal-versus-cardinal-exponentiation` | `ai-altered` / `not-applicable` | `semantic-source` | OA, CARD |
| `rem-omega-one-and-the-cost-of-choice` | `ai-altered` / `not-applicable` | `semantic-source` | HART, W1, ACW, KAR |
| `fs-ordinal-addition-is-commutative` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA |
| `fs-ordinal-multiplication-is-commutative` | `ai-altered` / `ai-altered` | `semantic-source` | OA, MOOSA, OLP |
| `fs-ordinal-multiplication-is-right-distributive` | `ai-altered` / `ai-altered` | `semantic-source` | OA, OLP |
| `fs-ordinal-addition-is-strictly-monotone-in-the-left-argument` | `ai-altered` / `ai-altered` | `semantic-source` | OA |
| `fs-the-ordinal-two-to-the-omega-is-uncountable` | `ai-altered` / `ai-altered` | `semantic-source` | OA, CARD |
| `ex-one-plus-omega-and-omega-plus-one` | `literature-derived` / `ai-altered` | `exact-source` | MOOSA, OA |
| `ex-omega-times-two-and-two-times-omega` | `literature-derived` / `ai-altered` | `exact-source` | MOOSA, OA, OLP |
| `ex-omega-plus-omega-is-countable` | `ai-altered` / `ai-altered` | `semantic-source` | OA, W1 |
| `ex-powers-of-omega-and-epsilon-zero` | `literature-derived` / `ai-altered` | `exact-source` | EPS, OA, MARKS |
| `ex-cantor-normal-form-computed` | `ai-altered` / `ai-generated` | `semantic-source` | OA, MARKS |
| `ex-ordinal-subtraction-and-division-computed` | `ai-altered` / `ai-generated` | `semantic-source` | OA |
| `ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum` | `ai-altered` / `ai-altered` | `semantic-source` | W1, ACW, OA |
| `cex-omega-one-has-no-at-most-countable-cofinal-subset` | `ai-altered` / `ai-altered` | `semantic-source` | COF, W1, ACW, KAR |

Source-key legend:

- **MOOSA:** `https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf`
- **OLP:** `https://builds.openlogicproject.org/open-logic-complete.pdf`
- **ACW:** `https://en.wikipedia.org/wiki/Axiom_of_countable_choice`
- **CARD:** `https://en.wikipedia.org/wiki/Cardinal_number`
- **COF:** `https://en.wikipedia.org/wiki/Cofinality`
- **EPS:** `https://en.wikipedia.org/wiki/Epsilon_number_(mathematics)`
- **W1:** `https://en.wikipedia.org/wiki/First_uncountable_ordinal`
- **HART:** `https://en.wikipedia.org/wiki/Hartogs_number`
- **OA:** `https://en.wikipedia.org/wiki/Ordinal_arithmetic`
- **KAR:** `https://karagila.org/files/Forcing-2023.pdf`
- **MARKS:** `https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf`

### Proof-contract refresh

The three contracts whose Facts changed now omit the five obsolete `[L5]` citation rows (one addition row, one multiplication row, and three cofinal-counterexample rows). The two remaining citations of `def-cofinal-subset-of-an-ordinal` now quote its corrected Definition. Derivation maps and numbered steps were unchanged.

### A4 validation

- `reflow.mts` reported all four materially changed proof-bearing items unchanged.
- `precheck.mts` passed those four items, 4/4.
- `proof-contract.mjs --strict` passed, 29/29 contracts with 0 errors and 0 warnings.
- `finite-smoke.mjs` passed with 0 errors (no selected finite checks).
- `content-policy.mjs --audit` passed, 36/36 scoped items with 0 errors and 0 warnings.
- Global `fwdcheck`, `extcheck`, `citecheck`, `rendercheck`, and `prosecheck` each exited 0 in the concurrent shared tree.
- Global `depcheck --json` is intentionally red only on 17 `published-unaudited` rows: the five foundations material items named here plus twelve concurrently repaired sibling-batch items. It reports no other error class.
- `git diff --check` passed on all 36 owned item files and the approved page file. A baseline body comparison confirmed that the 31 pure-retag items have byte-identical bodies.
- All five materially changed items are left without a judge/audit/delegated-verifier stamp for A6; Audit-Beta wrote no certification.
