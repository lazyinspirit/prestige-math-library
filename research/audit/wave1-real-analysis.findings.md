# Wave 1 real-analysis Audit-Beta findings

## Continuity checkpoint — 2026-08-03

- Current substage: A1 source classification and A2 proof-contract assembly after the complete first mathematical read.
- Owned artifacts: `research/audit/wave1-real-analysis.provenance.jsonl`, `research/audit/wave1-real-analysis.findings.md`, and `research/audit/wave1-real-analysis.proof-contracts.json`. The ledger and contract file are not yet created; this findings file is the first owned write.
- Completed checks: all 43 manifest items and the A-page were read in full; every numbered proof step was read; all same-page dependency targets and the cross-category targets used by proof facts were read; reputable literature searches have been completed for every Statement or Construction. No item or page file has been edited.
- Open mathematical constraints: verify final HTTP status for each URL selected for the ledger; encode exact source clauses and exact step uses for all 35 proof-bearing items; resolve three established-but-unsourced classifications with `alpha_concurred: false`; preserve two citation-precision defects for A3 without applying repairs.
- Exact next action: validate the selected source URLs, then generate and strictly validate the 35 proof contracts before completing the ledger and findings report.

## Result

The manifest contains 43 mathematical-content items: eight definitions and 35 proof-bearing items. The provenance ledger has one row for every item. Statement evidence is 20 exact-source, 19 semantic-source, three established-knowledge, and one trivial; statement labels are 20 literature-derived, 22 ai-altered, and one ai-generated. Proof labels are 22 ai-altered, 13 ai-generated, and eight not-applicable.

All 22 distinct URLs retained in the ledger returned HTTP 200 after redirects on 2026-08-03. Failed or unavailable candidates were excluded rather than recorded.

## A1 classification

| Item | Statement | Proof | Evidence |
|---|---|---|---|
| def-field | ai-altered | not-applicable | semantic-source |
| def-ordered-field | ai-altered | not-applicable | semantic-source |
| def-abs-value | literature-derived | not-applicable | exact-source |
| def-archimedean-field | ai-altered | not-applicable | semantic-source |
| def-complete-ordered-field | literature-derived | not-applicable | exact-source |
| def-field-homomorphism | ai-altered | not-applicable | semantic-source |
| def-ordered-field-isomorphism | literature-derived | not-applicable | exact-source |
| lem-of-inverse-unique | literature-derived | ai-altered | exact-source |
| lem-of-zero-mult | literature-derived | ai-altered | exact-source |
| lem-of-mult-neg | literature-derived | ai-altered | exact-source |
| cor-of-neg-one-squared | literature-derived | ai-generated | exact-source |
| lem-of-no-zero-divisors | literature-derived | ai-altered | exact-source |
| lem-of-mult-cancel | literature-derived | ai-altered | exact-source |
| lem-of-add-order | ai-altered | ai-generated | semantic-source |
| lem-of-sign-rules | ai-altered | ai-generated | semantic-source |
| lem-of-square-positive | literature-derived | ai-altered | exact-source |
| cor-of-one-positive | literature-derived | ai-generated | exact-source |
| lem-of-inverse-positive | ai-altered | ai-altered | semantic-source |
| lem-of-abs-value | ai-altered | ai-altered | semantic-source |
| lem-of-triangle-inequality | literature-derived | ai-altered | exact-source |
| cor-of-reverse-triangle | literature-derived | ai-altered | exact-source |
| lem-of-square-monotone | ai-altered | ai-generated | established-knowledge |
| prop-of-reciprocal-order | ai-altered | ai-altered | semantic-source |
| prop-of-product-sign | ai-altered | ai-generated | semantic-source |
| prop-of-multiply-inequalities | ai-altered | ai-generated | semantic-source |
| prop-of-ab-less-b | ai-altered | ai-generated | established-knowledge |
| def-canonical-natural | ai-altered | not-applicable | semantic-source |
| lem-of-naturals-positive | ai-altered | ai-generated | semantic-source |
| thm-of-archimedean | literature-derived | ai-altered | exact-source |
| cor-archimedean-reciprocal | ai-altered | ai-altered | semantic-source |
| lem-of-q-embeds | ai-altered | ai-altered | semantic-source |
| lem-of-q-dense | literature-derived | ai-altered | exact-source |
| thm-of-square-roots | ai-altered | ai-altered | semantic-source |
| lem-of-hom-fixes-q | ai-altered | ai-altered | semantic-source |
| lem-of-hom-order-preserving | ai-altered | ai-generated | established-knowledge |
| thm-uniqueness-complete-ordered-field | literature-derived | ai-altered | exact-source |
| lem-cauchy-reals-archimedean | literature-derived | ai-altered | exact-source |
| cor-cauchy-reals-lub-complete | literature-derived | ai-altered | exact-source |
| thm-equivalence-of-constructions | ai-altered | ai-generated | semantic-source |
| ex-sqrt-two-exists | ai-altered | ai-generated | semantic-source |
| cex-embedding-not-order-preserving | literature-derived | ai-altered | exact-source |
| cex-ordered-field-not-archimedean | literature-derived | ai-altered | exact-source |
| fs-two-nonisomorphic-complete-ordered-fields | ai-generated | ai-generated | trivial |

The three established-knowledge rows are provisional pending Alpha concurrence:

- lem-of-square-monotone: the compound strict, nonstrict, and absolute-value square monotonicity statement is standard and follows immediately from the displayed factorization, but no reputable source with the full formulation surfaced.
- prop-of-ab-less-b: the equivalence is a standard positive-factor cancellation exercise, but no reputable exact formulation surfaced.
- lem-of-hom-order-preserving: the theorem is the standard nonzero-square argument for homomorphisms out of a complete ordered field, but no reputable source with the stated domain and codomain surfaced.

These are recoverable established results, not positive novelty determinations. Each remains alpha_concurred: false. No classification was left undecidable between recoverable and invented.

Every in-scope item currently lacks a provenance block. Subject to A3 approval, all 43 therefore need a class-(c) pure provenance retag using the ledger rows. Exact-source and semantic-source items also need their ledger URL added to sources.references if it is not already present. The three established-knowledge items must wait for Alpha concurrence. The trivial false statement needs no URL. These retro-tags do not change mathematical text and must retain any existing judge or audit record.

## A2 defects proposed for A3

### Citation precision: cor-cauchy-reals-lub-complete

Old fact:

> [L3] Convergence and the Cauchy condition for real sequences, quantified over rational epsilon; limits preserve <= (def-real-limit).

The cited Definition section defines convergence and the Cauchy condition but does not state preservation of order by limits. Steps 6.1, 7.1, and 7.2 use that stronger clause, including equality of two limits whose termwise gap tends to zero.

Proposed new fact:

> [L3] Convergence and the Cauchy condition for real sequences are quantified over positive rational epsilon (def-real-limit).

Proposed proof replacement, class (b), with the elementary arguments written locally:

- In step 6.1, after obtaining limits s and s', suppose first that s < s'. By density choose a positive rational epsilon with 3 epsilon-hat < s' - s. For all large k, the two convergence bounds and step 4.1 give
  s' - s <= |s' - b_k| + (b_k-a_k) + |a_k-s| < 3 epsilon-hat,
  a contradiction. If s' < s, choose 2 epsilon-hat < s-s'; convergence and a_k <= b_k give the analogous contradiction. Thus s=s'. For fixed k, monotonicity gives a_k <= a_j <= b_j <= b_k for j >= k; convergence contradicts s<a_k or b_k<s after choosing a positive rational smaller than the alleged gap. Hence a_k <= s <= b_k.
- In step 7.1, if t in S and s<t, choose a positive rational epsilon-hat < t-s. Eventually b_k < s+epsilon-hat<t, contradicting t<=b_k.
- In step 7.2, if v is an upper bound and v<s, choose a positive rational epsilon-hat < s-v. Since a_k<v for every k, eventual a_k>s-epsilon-hat>v is impossible.

The derivation uses only the convergence definition, rational density [L6], the nested inequalities from step 3.1, and the width estimate from step 4.1.

### Citation precision: cex-ordered-field-not-archimedean

Old fact:

> [L4] R is an ordered field, so R[t] is an integral domain and a nonzero real polynomial has finitely many real roots and a sign at +infinity equal to that of its leading coefficient (thm-reals-ordered-field).

The cited theorem states only that the constructed reals form a totally ordered field. It does not state any polynomial-root or eventual-sign theorem.

Proposed new fact:

> [L4] R is a totally ordered field (thm-reals-ordered-field).

Proposed new step 1.1, class (b), with the missing elementary derivation written locally:

> Let p(x)=a_m x^m+...+a_0 and q(x)=b_n x^n+...+b_0 have nonzero leading coefficients. For x>1, divide by the leading terms. If x is larger than 1 plus the sums of the absolute values of the lower coefficient ratios, then
> |sum_{i<m}(a_i/a_m)x^(i-m)|<1 and |sum_{j<n}(b_j/b_n)x^(j-n)|<1.
> Thus p(x) and q(x) eventually have the signs of a_m and b_n, respectively, and p(x)/q(x) has constant nonzero eventual sign. Hence exactly one of f and -f lies in P.

Step 1.3 should cite only the given ordering definition and algebra, not [L4]. This removes the unsupported polynomial attribution without changing the counterexample.

No unambiguous mathematical falsehood and no debatable convention-sensitive restatement was found. No repair has been applied.

## Nonfatal observations

The A-page has eight headed prose sections rather than the current exact two-paragraph summary shape. This is published-page structural decay, not a mathematical falsehood, and is recorded without opening a repair cycle under the triage rule.

Several fact lines spell out elementary consequences of their cited axioms, including inverse involution from the group axioms and cofinality of powers of two from Archimedean cofinality. Each is directly checkable within 30 seconds and was treated as an acceptable minor citation expansion. No other issue crossed the fatal or citation-repair threshold.

## Proof contracts and risk routing

The proof-contract file contains all 35 proof-bearing items, 135 direct fact-link contracts, 252 numbered step mappings, and 280 boundary-case dispositions. The strict checker reports 0 errors and 0 warnings. Finite smoke tests are empty because no in-scope claim is a supported finite/combinatorial check.

The transparent risk report routes 12 items as high and 15 as critical; their risk_review records remain pending for the independent Alpha proof-refuter. Six items are ordinary and two moderate. Risk routing is not itself a defect.

## Coverage

Every one of the 43 in-scope Statements, Definitions, Examples, Counterexamples, and the False Statement was read from disk. Every Remark and the complete A-page summary was read with mathematical-claim suspicion. Every one of the 252 numbered proof steps, every declared dependency, and every one of the 135 direct dependency wikilinks in [F#]/[A#]/[L#] facts was checked against the exact on-disk target text. Same-category targets and all cross-category targets used by the proofs were read. There are no coverage exceptions.

Frozen wave-1 evidence was not modified, no published item or page was edited, and no verification stamp, judge record, commit, or push was made.

## A4 apply record (wave 1b)

Applied the A3 order to 40 of 43 scoped items and reconciled 42 missing
reader-visible reference entries. The three `established-knowledge` rows
`lem-of-square-monotone`, `prop-of-ab-less-b`, and
`lem-of-hom-order-preserving` were deliberately left untouched for Alpha/A6
because they have neither the required Alpha concurrence nor a reader-visible
reference URL. `cor-cauchy-reals-lub-complete` now narrows `[L3]` and supplies
the local order arguments in steps 6.1, 7.1, and 7.2;
`cex-ordered-field-not-archimedean` now narrows `[L4]` and supplies the local
eventual-sign derivation. Both proof contracts were updated, and both material
items had stale judge and owner verification stamps removed. No
`verification.verified` or `verification.audited` stamp was written. Alpha/A6
independent verification is still required.
