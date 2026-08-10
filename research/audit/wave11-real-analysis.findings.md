# Wave 11 real-analysis Audit-Beta findings

Date: 2026-08-09
Role: Audit-Beta, A1/A2 only
Scope: `research/audit/wave11-real-analysis.pages.json`

## Result

All 61 scoped mathematical-content items were classified for statement and proof provenance. All 55 supplied proofs were read step by step, every direct dependency citation was checked against the target's on-disk mathematical clause, and all 55 proof contracts were written.

One published sentence is mathematically false. One proof sentence names a nonexistent step. Six Facts & Assumptions lines contain eleven direct citations that no numbered proof step uses. No other non-negotiable mathematical, logical, or dependency-citation defect was found.

No item or page was edited. Every proposal below awaits A3 approval; the six deletion proposals are additionally placed in the owner-only A10 queue.

## A1 provenance census

The 61 ledger rows are in `research/audit/wave11-real-analysis.provenance.jsonl`, in manifest order.

| Axis | Classification | Count |
|---|---:|---:|
| statement | `literature-derived` | 23 |
| statement | `ai-altered` | 27 |
| statement | `ai-generated` | 11 |
| proof | `ai-generated` | 55 |
| proof | `not-applicable` | 6 |
| evidence | `exact-source` | 23 |
| evidence | `semantic-source` | 24 |
| evidence | `established-knowledge` | 3 |
| evidence | `trivial` | 7 |
| evidence | `none` | 4 |

The ledger uses 26 distinct literature URLs. Each URL was opened successfully during this pass. Every `exact-source` rationale identifies the matching hypotheses, quantifiers, direction, and convention. Every `semantic-source` rationale states the relevant packaging, notation, hypothesis, or convention delta. All 55 supplied numbered arguments were classified `ai-generated`: none was shown to be a transcription or identifiable adaptation of a particular source proof.

Three standard statements need Alpha's independent established-knowledge concurrence because no qualifying source stating the full claim surfaced:

- `ex-xk-abs-x-smoothness-threshold`;
- `cex-absolute-value-integrable-without-the-function`;
- `fs-substitution-holds-for-every-integrable-integrand`.

Their provisional ledger classification is `statement: ai-altered`, `evidence: established-knowledge`, `urls: []`, and `alpha_concurred: false`. None was labeled invented merely because the search did not surface a qualifying source.

The positive `ai-generated` determinations are:

- the two repository-specific scope remarks;
- the quartic periodic oscillator and the three examples built directly from it;
- the selected removable rational quotient;
- the selected two-level step-function calculation;
- the bespoke disjoint-quartic-bump derivative counterexample and the integration-by-parts undefinedness refutation built from it;
- the selected signed-weight mean-value counterexample.

The two load-bearing generated statements are `ex-piecewise-polynomial-periodic-oscillator`, used by three scoped examples, and `cex-a-function-with-a-primitive-that-is-not-integrable`, used by `fs-integration-by-parts-needs-no-integrability-hypothesis` and mentioned by earlier same-pair items. Alpha must route these through the generated-statement truth-risk disposition before approving their provenance tags.

## A2 proposed repairs

### Class (a): unambiguous falsehood

`ex-integral-test-applied-to-the-p-series`, final sentence of the `p=1` cross-check.

Old text:

> At $p = 1$ the verdict is that $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic series diverges; no primitive is exhibited there, and none can be, because the primitive is the logarithm and this library has not built it.

Proposed text:

> At $p = 1$ the verdict is that $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic series diverges. No named logarithmic primitive is available from the current dependency vocabulary, and none is needed for this conclusion.

Reason: `cor-primitives-of-a-continuous-function`, existence clause, states that every continuous real function on an interval has the integral-function primitive. The item itself cites that corollary, and $t\mapsto(t+1)^{-1}$ is continuous on $[0,\infty)$. Failure to have built a named logarithm prevents writing that primitive in the desired named closed form; it does not prevent a primitive from existing. The p-series threshold and unboundedness conclusion remain correct.

This is a material mathematical-text repair. At A4 it needs an item-dedicated pre-edit touchlog snapshot, deletion of the stale `verification.judge` block and `verification.audited` stamp, reflow, precheck, and the relevant gates.

### Class (b): citation precision

`thm-linearity-of-the-integral`, proof step 4.2.

Old text:

> so steps 2.3 to 6.3 give integrability

Proposed text:

> so steps 2.3, 2.4 and 3.2 give integrability and the required identities

Reason: the proof has no step 6.3. The machine-readable bracket on the same line already gives the correct inputs `[step 2.3, step 3.2, step 2.4, L9]`: step 2.3 treats positive scalar multiplication, step 2.4 treats `-f`, and step 3.2 gives the positive-scalar integral identity. The mathematical argument is sound once the prose reference is corrected.

This is a material proof-text repair and requires the same A4 snapshot/stamp-removal/reflow/precheck treatment.

The following six Facts & Assumptions lines are never cited by a numbered proof step. Their eleven target citations therefore cannot truthfully receive a `uses` entry in the proof contract:

| Item | Fact | Exact current text | Direct targets |
|---|---|---|---:|
| `thm-monotonicity-of-the-integral` | L5 | `With oriented limits, ...` | 1 |
| `thm-additivity-over-subintervals` | L6 | `Refinement inequalities and the common refinement ...` | 2 |
| `thm-first-mean-value-theorem-for-integrals` | L8 | `Oriented limits are not needed here ...` | 1 |
| `thm-ftc-second-part` | L8 | `Oriented limits are not needed here ...` | 1 |
| `thm-integration-by-parts` | L7 | `Oriented limits are not needed here ...` | 1 |
| `cex-absolute-value-integrable-without-the-function` | L9 | `Lebesgue's criterion, and the fact that a nondegenerate interval is not null ...` | 5 |

Proposed new text for each line: delete the entire unused fact line, then reconcile any dependency that becomes unused. The proofs already establish their conclusions without these facts: the first five facts are orientation/refinement comments outside the argument actually taken, while the last proof computes its Darboux sums directly. Fabricating `uses` would make the contract false. Because deletion is owner-only, these six cleanups go to A10 rather than Beta's A4 apply pass.

### Class (c): provenance additions

After A3 approval, add the component `provenance` blocks and qualifying `sources.references` recorded in the 61-row ledger, removing any legacy one-axis `authorship` key encountered in the same edit. This is a bulk pure-retag pass except for the two material repairs above. The three `established-knowledge` rows cannot be applied until Alpha either concurs and changes `alpha_concurred` to `true`, or supplies a different supported classification.

### Class (d): debatable restatement

None.

## Proof-contract result

`research/audit/wave11-real-analysis.proof-contracts.json` contains:

- 55 scoped contracts for 55 proof-bearing items;
- 703 direct Fact-to-target citation entries, each with the target's complete exact `Statement`, `Definition`, or `Statement refuted` clause and every actual numbered-step use;
- 377 derivation entries, covering every numbered proof step exactly once;
- zero routine-step suppressions;
- 440 boundary entries, exactly eight for each proof.

`node tools/proof-contract.mjs research/audit/wave11-real-analysis.proof-contracts.json --strict --json` checks all 55 contracts and reports 12 errors and zero warnings. The twelve errors are the audit findings, not missing audit work:

1. one `step-entry-input-step-missing` for the nonexistent step 6.3 in `thm-linearity-of-the-integral` step 4.2;
2. eleven `citation-uses` errors for the six unused fact lines listed above.

No quote, source-section, input-map coverage, duplicate-step, boundary-count, or scope error is present. The contracts leave the unused facts with `uses: []` rather than inventing proof uses.

## Published-claim decay

The A-page summary `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` says Taylor's integral remainder “is deliberately developed” on the Darboux/l'Hopital/Taylor page. The published target's scope remark says exactly the opposite: “No integral remainder ... is made here.” `rem-integral-conventions-and-scope` accurately describes only the old scaffold plan and also says the result is absent from the integral page. This is stale page-plan prose, not a false mathematical theorem; it is recorded for the publication-maintenance queue under the triage rule and was not chased or edited.

## Coverage

- Read all 61 scoped statements, definitions, constructions, counterexamples, false statements, and remarks, plus both A-page summaries.
- Read all 55 supplied proofs and all 377 numbered proof steps.
- Checked all 703 direct Fact-to-target citations against exact on-disk target clauses.
- Checked all 790 declared manifest relationships: 618 published-backward, 155 same-batch, and 17 explicit forward references. Every target exists; all 158 distinct target items were read to the mathematical clause needed by the source item. The 17 forward references are page-orientation links recorded by the manifest, not illicit proof dependencies.
- Completed all 440 boundary cases.
- Opened all 26 provenance URLs successfully.

There is no coverage exception. The twelve strict-contract errors are fully enumerated above. No item or page repair was applied before A3.

## A4 applied result

Date: 2026-08-09
Role: Audit-Beta, A4 only
Decision applied: `research/audit/wave11-A3.md`

The approved final split is 53 pure provenance/source retags, eight material item repairs, and the single authorized A-page correction. Every legacy `origin` field is byte-for-byte unchanged. No scoped item retains `authorship`. All 61 item `provenance` blocks and `sources.references` URL sets agree with the final ledger; the 53 pure retags retain their complete prior verification state, while exactly the eight material ids now retain only `verification.precheck: pass` pending A6 certification.

The false primitive sentence in `ex-integral-test-applied-to-the-p-series` was changed from:

> At $p = 1$ the verdict is that $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic series diverges; no primitive is exhibited there, and none can be, because the primitive is the logarithm and this library has not built it.

to:

> At $p = 1$ the verdict is that $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic series diverges. No named logarithmic primitive is available from the current dependency vocabulary, and none is needed for this conclusion.

This is class (a). `cor-primitives-of-a-continuous-function`, claim 1, licenses existence of an integral-function primitive for the continuous integrand; only a named logarithmic closed form is absent.

The step-reference text in `thm-linearity-of-the-integral`, step 4.2, was changed from “so steps 2.3 to 6.3 give integrability” to “so steps 2.3, 2.4 and 3.2 give integrability and the required identities.” This is class (b): steps 2.3, 2.4 and 3.2 are exactly the positive-scalar, negation, and positive-scalar identity inputs already named by the machine-readable tag; step 6.3 does not exist.

The six A3-approved class-(b) unused-Fact cleanups were applied as follows. In every case the new Fact text is absent: the exact old paragraph had no numbered-step use, so deleting it removes a false proof-contract citation obligation without removing an argument.

- `thm-monotonicity-of-the-integral`: deleted `[L5] With oriented limits, $\int_v^u h = -\int_u^v h$ ([[def-oriented-integral]]).` Kept `def-oriented-integral`, which remains used by the Statement.
- `thm-additivity-over-subintervals`: deleted `[L6] Refinement inequalities and the common refinement ([[lem-refinement-inequalities]], [[def-partition-and-refinement]]).` Removed `lem-refinement-inequalities`; retained `def-partition-and-refinement`. Renumbered old `[L7]` to `[L6]` and old `[L8]` to `[L7]` in the Fact labels, all proof citations, all input tags, and the regenerated contract.
- `thm-first-mean-value-theorem-for-integrals`: deleted `[L8] Oriented limits are not needed here, $a < b$ throughout; $\int_a^a u = 0$ ([[def-oriented-integral]]).` Removed `def-oriented-integral`.
- `thm-ftc-second-part`: deleted `[L8] Oriented limits are not needed here, $a<b$ throughout ([[def-oriented-integral]]).` Removed `def-oriented-integral`.
- `thm-integration-by-parts`: deleted `[L7] Oriented limits are not needed here, $a<b$ throughout ([[def-oriented-integral]]).` Removed `def-oriented-integral`.
- `cex-absolute-value-integrable-without-the-function`: deleted `[L9] Lebesgue's criterion, and the fact that a nondegenerate interval is not null ([[thm-lebesgue-criterion]], [[lem-nondegenerate-interval-is-not-null]], [[def-measure-zero-and-content-zero]], [[thm-dirichlet-and-thomae-continuity-sets]], [[def-continuity-real]]).` Removed `def-measure-zero-and-content-zero` and `def-continuity-real`; retained the three targets still cited by the final Remark.

This is exactly six Fact-paragraph deletions, eleven Fact/source citation deletions, six dependency removals, no dependency additions, and one two-label renumbering.

The only page-prose change is in `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`. The old sentence:

> Taylor's integral remainder needs higher derivatives and is deliberately developed with Darboux's theorem, l'Hopital's rule, and Taylor expansion rather than on this page.

was replaced by:

> Taylor's integral remainder needs higher derivatives and is not developed on this page. The current Darboux/L'Hopital/Taylor page also explicitly excludes the integral remainder.

This narrow correction agrees with `rem-darboux-lhopital-taylor-scope`; no other Wave 11 page text changed.

The final provenance census is 24 `literature-derived`, 26 `ai-altered`, and 11 `ai-generated` statements, with evidence counts 24 `exact-source`, 24 `semantic-source`, two `established-knowledge`, seven `trivial`, and four `none`. The two established-knowledge rows, `ex-xk-abs-x-smoothness-threshold` and `cex-absolute-value-integrable-without-the-function`, now have `alpha_concurred: true`. `fs-substitution-holds-for-every-integrable-integrand` has A3's exact Pugh Chapter 3 Exercise 35 override: `statement: literature-derived`, `proof: ai-generated`, `evidence: exact-source`, the Springer Pugh URL, and `alpha_concurred: false`; the same source appears in its item references.

Exactly seven proof-contract entries were regenerated from final text. The final namespaced and merged inventories each contain 55 contracts, 692 Fact/source citations, 377 derivations, zero routine-step suppressions, and 440 boundary rows. Finite smoke reports zero errors and risk routing covers all 55 items.

One mechanical contradiction remains between the authorized A4 state and the strict contract validator. Both final contract files check all 55 items with zero warnings but one `citation-ai-generated-statement` error: `fs-integration-by-parts-needs-no-integrability-hypothesis` cites `cex-a-function-with-a-primitive-that-is-not-integrable`. A3 section 5.3 explicitly requires that exact logical edge to remain pending the A6 `genrisk` disposition and forbids A3 from choosing retag/restate/unfold/narrow; removing the citation would also change the required total from 692. No A4-authorized edit can simultaneously preserve A3's provenance counts, citation count, and generated-risk handoff while making this validator return zero errors. The earlier twelve A2 contract defects are all closed; this is the new provenance-policy check activated by applying A3's `ai-generated` tag.

The generated-risk report now contains all eleven Wave 11 generated seeds. `ex-piecewise-polynomial-periodic-oscillator` has exactly three logical consumers. `cex-a-function-with-a-primitive-that-is-not-integrable` has exactly one logical consumer; its reported cone size is four because the report also records three orientation-only direct citations. Both dispositions remain `pending` for A6, as required. Content policy reconciles all 61 rows with zero errors and 15 expected audit-mode warnings, including those four generated-dependency warnings and the legacy generated-role/kind handoff warnings.

Direct execution of the A4 component gates gives: global precheck 2,172/2,172; forward references, external-record tier, rendering, prose, dependency sources, and A4 pending-audit dependency checks all pass; citecheck completes as advisory; finite smoke passes; risk reporting completes; content policy has zero errors; the final relationship manifest has 784 edges (615 published-backward, 152 same-batch, 17 forward); and `git diff --check` passes. The aggregate `gates.mjs` and `audit-split.mjs` wrappers cannot spawn their child Node or shell process in this workspace sandbox (`EPERM`), so the same tools were run directly and the 53/8 split was independently reproduced by a subprocess-free, field-aware comparison against the shared baseline. That comparison also proves that the four Wave 11 pages differ only at the one authorized page and that all 53 pure-retag bodies and verification blocks are unchanged.

No touch snapshot was taken: the orchestrator owns the single stage-level `post-A4` snapshot, and the Wave 11 touch ledger still stops at its orchestrator-owned `pre-A4` snapshot. No A6 or later action was run. Every approved A4 edit is applied; the strict generated-citation error above and the orchestrator-owned post-A4 snapshot are the only unresolved handoff points.
