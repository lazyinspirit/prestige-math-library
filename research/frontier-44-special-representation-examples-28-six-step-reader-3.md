# Reader 3 — batch 3

Run: `frontier-44-special-representation-examples-28-six-step`. Independent Step 3a review; no judge, audit or certification stamp is awarded.

## Opened inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, the exact batch manifest, cross-batch dependency list and the 14 proof contracts. The runtime state directory exists. Published A content is outside repair scope.

### sequences-and-limits

Opened `library/real-analysis/sequences-and-limits.md` and the complete current carriers:

- `items/def-sequence.md`
- `items/lem-limit-of-tail.md`
- `items/lem-limit-unique.md`
- `items/lem-convergent-implies-bounded.md`
- `items/lem-convergent-implies-cauchy.md`
- `items/lem-null-times-bounded.md`
- `items/thm-algebra-of-limits.md`
- `items/lem-limit-preserves-order.md`
- `items/thm-squeeze.md`
- `items/lem-limit-abs.md`
- `items/def-divergence-to-infinity.md`
- `items/lem-reciprocal-of-null-diverges.md`
- `items/lem-index-map-grows.md`
- `items/lem-subsequence-inherits-limit.md`
- `items/fs-bounded-implies-convergent.md`
- `items/fs-limit-preserves-strict-inequality.md`
- `items/fs-subsequence-convergence-implies-convergence.md`
- `items/rem-sequence-conventions.md`

### sequences-and-limits-examples

Opened `library/real-analysis/sequences-and-limits-examples.md` and the complete current carriers:

- `items/ex-the-reciprocal-of-k-plus-one-is-null.md`
- `items/ex-a-rational-expression-limit.md`
- `items/ex-an-alternating-null-sequence.md`
- `items/ex-square-roots-diverge-to-infinity.md`
- `items/ex-successive-root-differences.md`
- `items/ex-changing-finitely-many-terms.md`
- `items/ex-two-squeeze-computations.md`
- `items/ex-subsequences-of-a-null-sequence.md`
- `items/ex-absolute-value-limit.md`
- `items/cex-sum-of-divergent-sequences-converges.md`
- `items/cex-null-times-unbounded-need-not-be-null.md`
- `items/cex-quotient-rule-needs-a-nonzero-limit.md`
- `items/cex-squeeze-with-unequal-bound-limits.md`
- `items/ex-geometric-sequences-all-real-ratios.md`

### External prerequisite sections opened

Statements/definitions, facts and relevant complete proof/remark sections were read for:

- `items/def-natural-numbers.md`
- `items/def-nat-order.md`
- `items/def-nat-addition.md`
- `items/def-field.md`
- `items/def-ordered-field.md`
- `items/def-complete-ordered-field.md`
- `items/def-real-numbers.md`
- `items/def-real-order.md`
- `items/def-real-limit.md`
- `items/lem-rat-embeds-dense.md`
- `items/thm-nat-linear-order.md`
- `items/lem-nat-add-identity.md`
- `items/lem-nat-add-associative.md`
- `items/lem-nat-add-commutative.md`
- `items/lem-nat-order-add-compatible.md`
- `items/thm-induction-principle.md`
- `items/thm-recursion.md`
- `items/lem-nat-successor-neq-self.md`
- `items/lem-nat-discrete.md`
- `items/cor-of-one-positive.md`
- `items/lem-of-add-order.md`
- `items/lem-of-naturals-positive.md`
- `items/thm-of-archimedean.md`
- `items/def-abs-value.md`
- `items/lem-of-sign-rules.md`
- `items/lem-of-abs-value.md`
- `items/lem-of-triangle-inequality.md`
- `items/lem-of-inverse-positive.md`
- `items/prop-of-multiply-inequalities.md`
- `items/cor-of-reverse-triangle.md`
- `items/def-max-min.md`
- `items/lem-finite-set-has-max.md`
- `items/thm-reals-cauchy-complete.md`
- `items/thm-uniqueness-complete-ordered-field.md`
- `items/def-bounded-set.md`
- `items/def-countable.md`
- `items/lem-pigeonhole.md`
- `items/lem-subset-of-countable.md`
- `items/thm-rat-ordered-field.md`
- `items/lem-rat-archimedean.md`
- `items/lem-of-square-monotone.md`
- `items/thm-of-square-roots.md`
- `items/prop-of-reciprocal-order.md`
- `items/lem-of-q-embeds.md`
- `items/def-integer-power.md`
- `items/lem-power-laws.md`
- `items/lem-power-monotone.md`
- `items/lem-bernoulli-inequality.md`

Additional prerequisite sections opened during the review:

- `items/lem-of-zero-mult.md`
- `items/lem-nat-trichotomy.md`
- `items/thm-well-ordering-principle.md`
- `items/thm-strong-induction.md`
- `items/lem-nat-order-is-membership.md`
- `items/cor-cauchy-reals-lub-complete.md`
- `items/lem-cauchy-reals-archimedean.md`
- `items/thm-reals-field.md`
- `items/thm-reals-ordered-field.md`
- `items/def-archimedean-field.md`
- `items/lem-of-square-positive.md`
- `items/lem-of-no-zero-divisors.md`
- `items/lem-of-mult-neg.md`
- `items/lem-of-inverse-unique.md`
- `items/def-equinumerous.md`
- `items/def-injection-surjection-bijection.md`

## Repairs and evidence

All item edits were to assigned draft carriers. No published item, page prose, other batch, plan or engine state was edited. The 14-entry batch proof-contract file was updated where necessary. No modified item had a judge record remaining; no judge/audit stamp was added.

| Carrier | Exact repair and evidence |
| --- | --- |
| `ex-geometric-sequences-all-real-ratios` | Verification 1.1 asserted `|(-b)^k|=b^k` for every real b, false at b=-1, k=1. Restricted the consequence to b≥0, matching `lem-of-abs-value` and the existing contract. In 1.6 cited F25 for the index-map properties. In 2.5 replaced the unsupported switch from the even map to the odd map by applying the full-sequence growth estimate at -M and using m_j≥j. In 2.4 explicitly derived unboundedness and failure of finite convergence from F16. Corrected Lebl's subsection locator. The five cases, quantitative estimates, sharp equality cases, integer exponents and 0^0 convention remain intact. |
| `ex-two-squeeze-computations` | Verification 2.3 applied the sum rule to 1 and 2u_k to claim 1-2u_k→1. Applied the scalar rule to -2u_k first, then addition to 1+(-2u_k). In 2.2 corrected the lower-bound explanation for s_k=1: 1-2u_k<1 follows from 2u_k>0. Corrected the source description that called Hunter's cubic example a root comparison. |
| `ex-absolute-value-limit` | Example and Verification 4.1 confused the actual limit -1 with the fixed candidate +1 in the converse. Stated precisely that |x_k|→|1| does not imply x_k→1, whereas the forward implication for the actual limit -1 holds. Removed the inaccurate reference to a “boundedness direction” in `lem-limit-abs`. Verification 2.2 invoked the negative clause of absolute value at x_0=0; separated the negative and zero cases explicitly. Updated the derivations, fact-use mappings and boundary evidence. |
| `ex-successive-root-differences` | Verification 1.2 now translates 0≤sqrt(k+1), rather than translating sqrt(k)≤sqrt(k), to prove w_k≥sqrt(k). F6 now records both strict and non-strict square-order equivalences, exactly as `lem-of-square-monotone` states them, so the strict use in 1.3 is explicit. Corrected the square-root source page and identified the rationalization passage. |
| `cex-quotient-rule-needs-a-nonzero-limit` | Verification 1.1 now establishes convergence of the constant numerator to 1, closing the witness's previously implicit hypothesis through the epsilon definition. Added F7 and its contract citation/derivation. Hunter Theorem 3.26 has no quotient clause: the locator now distinguishes its algebraic context from Lebl Proposition 2.2.5(iv), which supplies the exact nonzero-denominator-limit condition. |
| `cex-null-times-unbounded-need-not-be-null` | Verification 1.2 inferred positivity of the reciprocal from positivity of its base without citing the inverse-positivity result. Used the earlier null-sequence example's explicit positive-term conclusion in F1 instead; updated the exact contract quote and uses. |
| `cex-sum-of-divergent-sequences-converges` | Verification 3.1 now distinguishes the boundedness definition F9 from convergence. The contract's “both summands are nowhere zero” was false at k=0; it now records both zero initial terms and nonzero later terms. Removed the irrelevant Lebl quotient exercise from the source locator; retained the actual divergent-difference caution. |
| `ex-subsequences-of-a-null-sequence` | Replaced the uncertain Hunter “Example 3.20(?)” locator with Proposition 3.50, p. 58. Corrected Lebl Exercise 2.1.16's description: it proves divergence of the parent from two different convergent subsequential limits, not divergence of the subsequences. Corrected its page to p. 60. Contract zero-index evidence now says n_0=0, m_0=1; the old assertion that both maps begin no later than zero was false. |
| `ex-square-roots-diverge-to-infinity` | Corrected Hunter Example 3.13's actual cubic threshold and Lebl Example 2.1.11's printed page (56, not 58). The source uses monotone convergence; the local proof uses a direct threshold and does not consume that later theorem. Contract direction notes now identify the squares-to-roots use in Verification 2.2. |
| `ex-changing-finitely-many-terms` | Corrected Lebl Exercise 2.1.19 to printed p. 60. |
| `ex-an-alternating-null-sequence` | Corrected Exercise 2.1.7(b)'s section to §2.1.4, not §2.2. |
| `cex-squeeze-with-unequal-bound-limits` | Corrected the Lebl locator to the actual equal-limit assumption in Lemma 2.2.1, p. 61; the purported preceding sentence was not present. Changed the contract's malformed “nowhere constant” description to the precise assertion that the sequence is nonconstant. |

A contract-only repair for `ex-the-reciprocal-of-k-plus-one-is-null` removes a nonexistent N=0 branch: Verification 1.1 chooses N≥1. Its initial term x_0=1 is positive but need not satisfy a small-epsilon tail estimate. That item carrier was unchanged. `ex-a-rational-expression-limit` was unchanged; its numerator/denominator normalization and denominator positivity/nonzero limit are justified.

## Consumer checks

The only mathematical Example wording changed was in `ex-absolute-value-limit`. A repository item-frontmatter search, followed by parsing every candidate's `deps` and `justified_by`, found no direct consumer, hence no indirect consumer. The B-page summary says the converse fails at nonzero limits; `lem-limit-abs` independently proves that stronger statement with a scaled alternating sequence. The summary therefore remains supported. The supplier `ex-square-roots-diverge-to-infinity` retained its Example and proof; its consumer `ex-successive-root-differences` was reviewed and repaired. No other Statement or Definition was changed.

The reciprocal example's eight direct draft consumers were all opened and checked. All 32 assigned carriers were reviewed, including their titles, assertions, facts, arguments and remarks. Checks included the rational/real epsilon equivalence, finite initial blocks, denominator conditions, monotonicity domains, the natural even/odd index maps, uniqueness, sign reversal, both reciprocal-bridge directions and all geometric boundary cases. No algorithm occurs in this batch.

## Sources actually consulted

Read the relevant complete arguments from the author-hosted PDFs, using the printed page numbers rather than PDF indices:

- [Hunter, An Introduction to Real Analysis](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf): Definition 3.10 and Proposition 3.11, pp. 41–42; Examples 3.13–3.15, pp. 42–43; tail discussion and Example 3.20, p. 44; Theorems 3.22–3.23, pp. 45–46; Example 3.24, Corollary 3.25 and Theorem 3.26 with the complete proof and caution, pp. 46–47; Proposition 3.31 and its complete proof, p. 49; Proposition 3.50 and its proof, p. 58.
- [Lebl, Basic Analysis I](https://www.jirka.org/ra/realanal.pdf): Example 2.1.4, p. 53; Example 2.1.8, p. 54; Example 2.1.11, p. 56; Proposition 2.1.17 and its proof, p. 58; Exercises 2.1.3, 2.1.7, 2.1.14 and 2.1.16–2.1.19, pp. 59–60; Lemma 2.2.1 and Example 2.2.2, pp. 61–62; Proposition 2.2.5 and its complete proof, pp. 63–64; Propositions 2.2.6–2.2.7 and the following caution, pp. 65–66; Proposition 2.2.11 and its complete proof, p. 68; Exercises 2.2.6 and 2.2.12, p. 71.

Hunter's geometric source invokes monotone convergence for small positive ratios. The local Bernoulli/Archimedean proof supplies that case independently, including negative ratios and the zero/unit boundaries. External sources document provenance; local proved suppliers establish the arguments.

## Uneditable finding

`thm-reals-cauchy-complete` (published dependency), **Statement, lines 39–41, final sentence**: after asserting convergence of every real Cauchy sequence, it says that this together with the ordered-field result completes the construction of a “complete totally ordered field.” Under `def-complete-ordered-field`, completeness means the least-upper-bound property. Proof steps 1.1–6.1 construct a limit for a Cauchy sequence; they contain no argument that an arbitrary nonempty bounded-above set has a supremum. This is a missing, non-immediate bridge, rather than a false assertion about the actual reals. The assigned consumer `lem-convergent-implies-cauchy` has this supplier in its direct `deps` and invokes its Cauchy-completeness conclusion in Remarks.

Opened `cor-cauchy-reals-lub-complete` completely: it proves exactly the missing least-upper-bound result by bisection and Cauchy convergence in steps 1.1–8.1, using the separately opened `lem-cauchy-reals-archimedean`. The smallest correction is to qualify the supplier's completion claim as completeness **in the Cauchy sense**, and attribute complete ordered-field status to the separate corollary in an appropriately placed later-reference remark. Adding the corollary to this theorem's `deps` would create a cycle, since the corollary already depends on this theorem. This gap is fatal under the reader rule for a substantial unsupported statement inference. It does not invalidate the Cauchy-convergence result actually consumed by this batch. No published bytes were edited.

## Page verdicts and blockers

| Page | Reader verdict |
| --- | --- |
| `sequences-and-limits` (published A) | The 18 local carriers and page summary were checked. Their sequence arguments are supported. Hold the external supplier's overstrong completion sentence for Step 3b; the underlying Cauchy-completeness result remains usable. |
| `sequences-and-limits-examples` (draft B) | The 14 computations/witnesses and B-page summary are supported after the repairs above. No uneditable B-page defect remains. |

No local repair blocker, proposed withdrawal or unresolved unfamiliar mathematics remains. The one published-supplier finding requires the lead's route outside this reader's edit scope. The verdicts are review conclusions, not publication or judge stamps.

## Validation and coverage limits

For each of the 12 changed item paths in the repair table, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: every reflow reported unchanged layout; every precheck passed (12 checks, zero failures). After the final edits and formatter pass, ran once, in one batch, `node tools/proof-layout.mjs` on those same 12 paths: **12 items, 69 steps, 0 defects**. The final `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-3.proof-contracts.json --strict` checked **14/14 entries, 0 errors, 0 warnings**. Earlier contract diagnostics were corrected before that final pass.

The runtime `state.json` identifies this exact run at stage `3a-read`; the two latest Git commits concern the six-step engine. No historical RESUME file was used as active-run evidence. Prerequisite reading was focused on the statements and complete relevant arguments listed above, not an exhaustive re-audit of the 169-item foundational dependency closure. Some prerequisites were discovered while inspecting published consumers and checked subsequently; the initial file-opening order was not perfectly topological. Supplied author manifests and contracts were evidence, not verdicts. Only the two author-hosted source PDFs listed above were externally consulted; other bibliography URLs were not independently verified. No claims of source-wide or corpus-wide coverage are made.
