# Wave 4 foundations — Audit-Beta A1/A2 findings

Date: 2026-08-04  
Scope: cardinal-arithmetic-and-cofinality (26 items) and cardinal-arithmetic-and-cofinality-examples (8 items)  
Status: A1/A2 complete; the corrected A3 receipt authorizes A4, and A4 is complete. Independent A6 certification remains pending.

## A3 recovery and A4 authorization — 2026-08-04

The first unattended A3 dispatch was misrouted to the Alpha A6/A8 brief and made no adjudication. No edit was made under that false receipt. The corrected receipt, `research/audit/wave4-A3.md`, independently checks the proposals and explicitly authorizes A4: A1 and B2–B8 as proposed, B1 in the amended form recorded below, and all 34 provenance retro-tags subject to live-source replacement.

The A4 edits were applied only after that corrected authorization. No page file, id, kind, or reading order changed.

## Continuity checkpoint

- Current substage: A4 complete; handoff is to the independent A6 reading and certification.
- Owned artifacts: research/audit/wave4-foundations.findings.md, research/audit/wave4-foundations.provenance.jsonl, and research/audit/wave4-foundations.proof-contracts.json.
- Completed checks: both page files and all 34 manifest item files read; every numbered proof, refutation, and verification step checked; every direct Fact link checked against the target Statement, Definition, or Example clause on disk; every manifest dependency edge accounted for; all 34 provenance determinations applied; every retained literature URL re-opened through the model-side web route.
- Open mathematical constraints: preserve the ZF/AC split for cardinality and exponentiation; preserve the nonzero hypothesis in product absorption; preserve the exact choice expenditure in successor regularity and König; do not identify Cantor's inequality with strict exponent monotonicity.
- Exact next action: Alpha performs A6 from the repaired disk state, writes `verification.verified` with `scope: published-audit` only after independent certification, and closes the nine impact-audit targets.

## Result and coverage census

- Provenance: 34/34 ledger rows, 34 unique ids, no manifest omission or extra id. Statements are 4 literature-derived, 26 ai-altered, and 4 ai-generated. Proofs are 18 ai-altered, 11 ai-generated, and 5 not-applicable. Evidence is 4 exact-source, 26 semantic-source, and 4 trivial. There is no established-knowledge waiver, no Alpha-concurrence dependency, and no unresolved classification.
- Proof scope: 29/29 proof-bearing items, containing 171 numbered steps, 210 labelled Facts, and 407 direct Fact-to-source citation pairs. Every numbered step is mapped exactly once and all eight boundary cases are dispositioned for every contract.
- Dependencies: 500 declared edges were checked: 187 within this batch and 313 leaving it, reaching 80 distinct targets, 58 of them external to the batch. Cross-category targets were checked against their current mathematical source clauses; absent future provenance tags on those targets were not treated as defects.
- Proof accuracy: apart from the proposals below, the displayed proofs, refutations, and verifications are mathematically sound under their stated ZF, AC, or AC_omega hypotheses. Each false claim was checked against the sourced standard counterexample or restriction from which the item reframes it.
- Coverage statement: every one of the 171 numbered proof steps and every one of the 407 direct dependency citations in the pair was read skeptically. There is no coverage exception.

## Gate state before A3

- tools/proof-contract.mjs --strict checks all 29 contracts and reports exactly three citation-uses errors, all for the three links in the unused [L3] of thm-cardinal-arithmetic-agrees-with-finite-counting. It reports no warning and no other error.
- tools/finite-smoke.mjs passes with zero errors and no selected finite checks.
- tools/content-policy.mjs --audit --ledger sees all 34 ledger rows and reports the expected 136 pre-A4 errors: for each item, the two missing on-disk provenance components and the two consequent ledger mismatches. There are no additional pre-A4 warnings.
- The ledger-to-manifest reconciliation and all provenance/evidence vocabulary checks pass independently.

## Proposed repair register

### (a) Unambiguous mathematical falsehood

#### A1. fs-cardinal-exponentiation-is-strictly-monotone-in-the-base: Cantor's inequality is misidentified as exponent-slot strictness

The Statement explanation currently says:

> strictness does hold in the other slot, where $\kappa < 2^{\kappa}$ at every cardinal

The Remark currently says:

> so does strictness in the exponent slot in the one case proved on this page, $\kappa < 2^{\kappa}$.

Neither sentence is correct. Strict monotonicity in the exponent slot would compare $a^\mu$ and $a^\nu$ for a fixed base $a$ and $\mu<\nu$. Cantor's inequality compares $\kappa$ with $2^\kappa$ and is not an instance of that monotonicity claim.

Proposed smallest repair in the Statement explanation:

> and because Cantor's theorem supplies the different strict inequality $\kappa < 2^{\kappa}$ at every cardinal

Proposed smallest repair in the Remark:

> The weak form is not damaged. $\kappa \le \lambda \Rightarrow \kappa^{\mu} \le \lambda^{\mu}$ remains true, and so does Cantor's strict inequality $\kappa < 2^{\kappa}$. What fails is the strict form in the base, and it fails at the smallest infinite instance.

Class: (a), material. Evidence: the definitions of monotonicity in an argument and thm-cardinal-power-set-and-cantor clause (b). The Refutation itself is correct and unchanged.

### (b) Citation-precision repairs

#### B1. thm-cardinal-arithmetic-agrees-with-finite-counting: unused Fact [L3]

Current Fact:

> [L3] $\omega$ is the least limit ordinal; every ordinal below $\omega$ is finite; an infinite ordinal is not a successor ordinal ([[lem-omega-least-limit-ordinal]], [[def-ordinal]], [[def-limit-ordinal]]).

No numbered Proof step cites [L3]. Clause (b) is instead proved in step 1.3 from [L4] and [L8]. This is the source of all three strict contract failures.

Proposed repair: delete [L3]. Remove lem-omega-least-limit-ordinal and def-ordinal from deps because they then have no remaining use. Retain def-limit-ordinal, which is cited in the Statement. No numbered proof text changes.

#### B2. thm-regularity-of-the-alephs: [L9] links an unstated injection definition

Current [L9] ends its ordinal list with def-injection-surjection-bijection, but the Fact states no proposition about injections. Step 1.2 uses that implicit proposition when it turns strict increase of $n\mapsto\aleph_n$ into injectivity.

Proposed replacement:

> [L9] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha=\beta$, the union of a set of ordinals is its least upper bound, every nonempty set of ordinals has an $\in$-least element, $\omega$ is the least limit ordinal, and every strictly increasing map of ordinals is injective ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[lem-omega-least-limit-ordinal]], [[def-injection-surjection-bijection]]).

This states the exact elementary consequence for which the definition is used.

#### B3. cor-cofinality-of-a-cardinal-power: [L10] links an unstated injectivity criterion

Current [L10] lists only ordinal facts but also links def-injection-surjection-bijection. Step 2.1 uses the definition to check the displayed coordinate map is injective.

Proposed replacement:

> [L10] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha=\beta$, the union of a set of ordinals is its least upper bound, and every nonempty set of ordinals has an $\in$-least element; a function is injective when equality of two values forces equality of the corresponding inputs ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-well-order]], [[def-injection-surjection-bijection]]).

#### B4. ex-the-cofinality-of-aleph-omega: irrelevant direct link in [L6]

Current [L6] states only ordinal comparison and antisymmetry facts, but ends with def-injection-surjection-bijection. No step uses an injection proposition through [L6].

Proposed repair: remove the def-injection-surjection-bijection link from [L6] and remove that id from deps. The ordinal clauses and all proof steps remain unchanged.

#### B5. ex-a-singular-cardinal-of-uncountable-cofinality: [L9] links an unstated injection definition

Step 1.1 uses strict increase of $\alpha\mapsto\aleph_\alpha$ to prove injectivity, while current [L9] states only ordinal-order facts.

Proposed replacement:

> [L9] Ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha=\beta$; the union of a set of ordinals is its least upper bound; every nonempty set of ordinals has an $\in$-least element; and every strictly increasing map of ordinals is injective ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-injection-surjection-bijection]]).

#### B6. ex-an-aleph-fixed-point: [L7] leaves the bijection-to-range step implicit

Current [L7] cites the injection/bijection definition but states only cardinal assignment and invariance. Step 4.2 needs the elementary bridge from the injective map $n\mapsto T(n)$ to a bijection $\omega\to C$.

Proposed replacement:

> [L7] An injective map onto its range is a bijection to that range; $\lvert X\rvert$ is the least ordinal equinumerous with $X$, and equinumerous sets receive the same cardinal ([[def-injection-surjection-bijection]], [[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

#### B7. ex-the-beth-hierarchy-computed: [L7] links an unstated injection definition

Step 1.2 uses strict increase of $n\mapsto\beth_n$ to prove injectivity, but current [L7] states only limit and ordinal-order facts.

Proposed replacement:

> [L7] $\omega$ is a limit ordinal; ordinals satisfy trichotomy, the union of a set of ordinals is its least upper bound, $\alpha\subseteq\beta$ iff $\alpha\in\beta$ or $\alpha=\beta$, and every strictly increasing map of ordinals is injective ([[lem-omega-least-limit-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

#### B8. ex-counting-functions-and-subsets-of-the-continuum: irrelevant direct link in [L7]

Current [L7] states only ordinal comparison and antisymmetry facts, but ends with def-injection-surjection-bijection. The only use, step 1.1, is cardinal antisymmetry; no injection proposition is taken from the linked definition.

Proposed repair: remove the def-injection-surjection-bijection link from [L7] and remove that id from deps. No proof claim changes.

B1–B8 are class (b). B2, B3, B5, B6, and B7 make an implicit elementary proposition explicit; B4 and B8 delete irrelevant links. They do not alter a theorem's mathematical conclusion.

### (c) Provenance retro-tags

A3 approval is requested for all 34 ledger determinations below. At A4, each approved row becomes the matching provenance block; source-backed rows also receive the ledger's academic source URL in sources.references. No legacy authorship field exists in this batch. Pure retags preserve existing verification blocks. Any item receiving a material repair follows the separate stamp-honesty rule.

| id | statement | proof | evidence |
|---|---|---|---|
| lem-cardinality-of-a-well-orderable-set | ai-altered | ai-altered | semantic-source |
| lem-cardinal-operations-are-well-defined | ai-altered | ai-generated | semantic-source |
| def-cardinal-arithmetic | ai-altered | not-applicable | semantic-source |
| lem-cardinal-arithmetic-basic-laws | ai-altered | ai-generated | semantic-source |
| thm-cardinal-arithmetic-agrees-with-finite-counting | ai-altered | ai-generated | semantic-source |
| thm-cardinal-power-set-and-cantor | ai-altered | ai-altered | semantic-source |
| thm-hessenberg | literature-derived | ai-altered | exact-source |
| cor-cardinal-absorption | ai-altered | ai-generated | semantic-source |
| lem-successor-cardinal-exists | ai-altered | ai-generated | semantic-source |
| cor-the-aleph-and-beth-hierarchies-are-well-defined | ai-altered | ai-generated | semantic-source |
| def-aleph-and-beth-hierarchies | ai-altered | not-applicable | semantic-source |
| thm-every-infinite-cardinal-is-an-aleph | ai-altered | ai-generated | semantic-source |
| thm-cardinal-comparability-iff-ac | literature-derived | ai-altered | exact-source |
| thm-tarski-square | literature-derived | ai-altered | exact-source |
| lem-cofinality-is-well-defined | ai-altered | ai-altered | semantic-source |
| def-cofinality | ai-altered | not-applicable | semantic-source |
| thm-cofinality-basics | ai-altered | ai-altered | semantic-source |
| thm-regularity-of-the-alephs | ai-altered | ai-altered | semantic-source |
| def-infinite-cardinal-sum-and-product | ai-altered | not-applicable | semantic-source |
| thm-konig | literature-derived | ai-altered | exact-source |
| cor-cofinality-of-a-cardinal-power | ai-altered | ai-altered | semantic-source |
| rem-cardinal-arithmetic-choice-ledger | ai-altered | not-applicable | semantic-source |
| fs-cardinal-addition-is-cancellative | ai-altered | ai-altered | semantic-source |
| fs-every-aleph-is-regular | ai-altered | ai-altered | semantic-source |
| fs-cardinal-exponentiation-is-strictly-monotone-in-the-base | ai-altered | ai-altered | semantic-source |
| fs-the-continuum-has-cardinality-aleph-omega | ai-altered | ai-altered | semantic-source |
| ex-cardinal-absorption-computed | ai-generated | ai-generated | trivial |
| ex-the-cardinality-of-the-continuum | ai-altered | ai-altered | semantic-source |
| ex-aleph-one-is-at-most-the-continuum | ai-generated | ai-generated | trivial |
| ex-the-cofinality-of-aleph-omega | ai-altered | ai-altered | semantic-source |
| ex-a-singular-cardinal-of-uncountable-cofinality | ai-altered | ai-altered | semantic-source |
| ex-an-aleph-fixed-point | ai-altered | ai-altered | semantic-source |
| ex-the-beth-hierarchy-computed | ai-generated | ai-generated | trivial |
| ex-counting-functions-and-subsets-of-the-continuum | ai-generated | ai-generated | trivial |

The four ai-generated statements are positive determinations, not failures to find a source: ex-cardinal-absorption-computed, ex-aleph-one-is-at-most-the-continuum, ex-the-beth-hierarchy-computed, and ex-counting-functions-and-subsets-of-the-continuum are bespoke bundles directly verified from their named dependencies, hence evidence trivial. None is a dependency target in the current manifest, and each has the natural legacy generation role example.

The choice ledger and the four false statements are not labelled generated merely because their exact prose is page-specific. Reputable sources recover their mathematical content: the ledger compiles sourced choice costs, while the false statements reframe standard counterexamples or continuum restrictions. They are therefore ai-altered with semantic-source evidence.

### (d) Debatable restatements

None proposed.

## Recorded published-page decay, not chased under triage

The A-page summary has eleven prose blocks after frontmatter rather than the current two-paragraph summary shape. It also contains presentation- and corpus-scope claims such as “section 5” and “not decided by anything among this page's declared prerequisites.” Those claims are not proof dependencies and no mathematical falsehood was found in them. They are recorded as published-claim/summary-shape decay and are not proposed for repair under the binding triage rule. The B page correctly has no body prose.

## A4 application record

All 34 items now carry the approved two-component `provenance` block. Each of the 30 source-backed rows has the matching live academic reference in `sources.references`; the four positively determined bespoke examples also carry `generation.role: example`. The statement census remains 4 literature-derived, 26 ai-altered, and 4 ai-generated; evidence remains 4 exact-source, 26 semantic-source, and 4 trivial.

Source hygiene was corrected before retagging. The unresolved JHU and dead UCLA URLs were not propagated. The retained Harvard, Colorado, UCL, Encyclopedia of Mathematics, original Tarski, and Ohio State endpoints each resolved through the model-side fetch route with observed HTTP 200 content. The previous `thm-tarski-square` ledger URL was live but described an unrelated space-filling paper; it was replaced by Tarski's 1924 original article record, whose metadata identifies the equivalence between choice and the infinite-cardinal equation $m=m^2$. The Colorado handout exposes the exact family-form König theorem, so `thm-konig` retains `literature-derived` / `exact-source` without qualification.

The nine material repairs are:

- A1, class (a), `fs-cardinal-exponentiation-is-strictly-monotone-in-the-base`: “strictness does hold in the other slot” and the Remark's “strictness in the exponent slot” were replaced by “Cantor's theorem supplies the different strict inequality $\kappa<2^\kappa$” and “Cantor's strict inequality $\kappa<2^\kappa$”. The elementary derivation is that exponent-slot monotonicity fixes the base and compares two exponents, whereas Cantor compares $\kappa$ with $2^\kappa$; `thm-cardinal-power-set-and-cantor` states only the latter.
- B1, class (b), `thm-cardinal-arithmetic-agrees-with-finite-counting`: [L3] was trimmed from the unused least-limit clause to “Every natural number is an ordinal, and $\omega$ is an ordinal” with `lem-omega-least-limit-ordinal` claim (ii) and `def-ordinal`; [L3] was added to steps 1.1 and 1.2. The proof contract now maps both source clauses to those two using steps. No dependency was removed.
- B2, class (b), `thm-regularity-of-the-alephs`: [L9] now states that every strictly increasing map of ordinals is injective, the proposition step 1.2 uses through ordinal trichotomy and `def-injection-surjection-bijection`.
- B3, class (b), `cor-cofinality-of-a-cardinal-power`: [L10] now states the exact injectivity criterion, “equality of two values forces equality of the corresponding inputs,” used for the coordinate map in step 2.1.
- B4, class (b), `ex-the-cofinality-of-aleph-omega`: the irrelevant `def-injection-surjection-bijection` link was removed from [L6] and from `deps`; no proof proposition changed.
- B5, class (b), `ex-a-singular-cardinal-of-uncountable-cofinality`: [L9] now states that every strictly increasing map of ordinals is injective, exactly licensing the map in step 1.1.
- B6, class (b), `ex-an-aleph-fixed-point`: [L7] now states that an injective map onto its range is a bijection to that range, exactly licensing the passage from $n\mapsto T(n)$ to $\omega\approx C$.
- B7, class (b), `ex-the-beth-hierarchy-computed`: [L7] now states that every strictly increasing map of ordinals is injective, exactly licensing the range-cardinality calculation.
- B8, class (b), `ex-counting-functions-and-subsets-of-the-continuum`: the irrelevant `def-injection-surjection-bijection` link was removed from [L7] and from `deps`; no proof proposition changed.

Each material item received its dedicated pre-edit touchlog snapshot. The final `post-A4-foundations` snapshot reports zero items repaired more than once. The stale page-scope `verification.verified` and `verification.judge` blocks were removed from all nine material items, and no replacement certification was written.

`tools/reflow.mts` was unchanged on all nine material files, and `tools/precheck.mts` passed all nine. The strict proof contract passes 29/29 with zero errors and warnings; finite-smoke passes; risk-report routes all 29 items with zero errors; content-policy passes 34/34 with zero errors and warnings; audit-manifest exits zero with 314 published-backward and 188 same-batch relationships; fwdcheck, extcheck, citecheck, rendercheck, prosecheck, and depsource exit zero. The whole-corpus depcheck has exactly the expected nine `published-unaudited` errors created by removing stale certification before A6, one for each material target, and no other error.

## Unresolved concerns

There is no unresolved mathematical or provenance classification and no coverage exception. The nine material items deliberately remain uncertified until Alpha's independent A6 reading.
