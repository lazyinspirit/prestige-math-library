# frontier-17 independent reader report — batch 8

Run: `frontier-17`  
Role: independent reader, step 6a  
Batch: 8  
Pages: `the-identity-theorem-and-the-open-mapping-theorem`, `the-identity-theorem-and-the-open-mapping-theorem-examples`

## Findings

Findings are recorded below with stable identifiers and are never renumbered.

### Fatal

#### R8-1 — `def-local-degree-holomorphic-map`

- **Exact location:** Definition, first sentence.
- **Defect:** The definition says that a nonconstant holomorphic function is on “a complex domain” and then forms $f(a)$ and $\operatorname{ord}_a(f-f(a))$ without naming the domain or requiring $a$ to belong to it.
- **Why it matters:** The displayed construction is undefined when $a$ is outside the unnamed domain. This is a missing hypothesis in the Definition itself, not a between-step gap.
- **Severity:** fatal.
- **Disposition:** repaired. The Definition now fixes a complex domain $\Omega$, a nonconstant holomorphic $f:\Omega\to\mathbb C$, and $a\in\Omega$ before defining $\deg_a f$. The dependent squaring-example fact and its full-section contract quote are synchronized.

#### R8-2 — `thm-local-normal-form-holomorphic-map`

- **Exact location:** Statement, both paragraphs.
- **Defect:** The Statement forms $\deg_a f$ and claims a neighbourhood containing $a$ without naming the complex domain $\Omega$ or requiring $a\in\Omega$. The proof does assume both.
- **Why it matters:** The Statement asserts an unscoped local-degree conclusion more broadly than the hypotheses actually proved.
- **Severity:** fatal.
- **Disposition:** repaired. The Statement now names $\Omega$, $f:\Omega\to\mathbb C$, $a\in\Omega$, and a final source domain $V$ with $a\in V\subseteq\Omega$. Every dependent fact and contract quote uses the corrected scope.

#### R8-3 — `cor-local-multiplicity-count-holomorphic-map`

- **Exact location:** Statement and Facts & Assumptions.
- **Defect:** The Statement forms $\deg_a f$ and $f(a)$ without naming the domain or requiring $a$ to lie in it. Its existential neighbourhood formulation also omits the arbitrarily-small-neighbourhood refinement that the later inverse theorem attributes to it.
- **Why it matters:** The first omission leaves the Statement undefined off the domain. The second leaves the later proof use unlicensed even though the refinement follows from the local-coordinate proof.
- **Severity:** fatal.
- **Disposition:** repaired. The Statement now fixes $\Omega$, $a\in\Omega$, and $m=\deg_a f$, and quantifies over every prescribed neighbourhood $N$ of $a$. Step 1.1 intersects $N$ with the normal-form source and constructs $V\subseteq N$ and $\rho>0$. Because this explicit refinement materially adapts the sourced statement, `provenance.statement` was conservatively retagged from `literature-derived` to `ai-altered`; the source URLs and local proof remain in place.

#### R8-4 — `thm-holomorphic-inverse-function-theorem`

- **Exact location:** Fact [L2] and Proof step 4.1.
- **Defect:** [L2] cites an existential local multiplicity theorem (“there are a neighbourhood $V$ and $\rho>0$”), but step 4.1 says it supplies $m$ preimages “in every sufficiently small source neighbourhood.” That stronger shrinking clause was absent from the cited Statement.
- **Why it matters:** The contradiction with an independently supplied local-injectivity neighbourhood needs the multiplicity neighbourhood to lie inside that neighbourhood. The cited clause did not license that choice.
- **Severity:** fatal.
- **Disposition:** repaired. [L2] now states the exact prescribed-neighbourhood form. Canonical Proof step 2.1 takes $V\subseteq N$, $\rho>0$, and the explicit value $w=f(a)+\rho^m/2$, giving more than one preimage when $m>1$. The implication tags, canonical step numbers, derivations, citation uses, and iff/nonempty-choice boundary rows are synchronized.

#### R8-5 — `thm-boundary-maximum-modulus-principle`

- **Exact location:** Facts & Assumptions, Given paragraph.
- **Defect:** The text attributes continuity of $|f|$ on $\overline\Omega$ to `cor-complex-differentiability-implies-continuity`. That cited corollary only says complex differentiability at an interior point implies continuity there; it says nothing about the assumed boundary extension or continuity of the modulus map.
- **Why it matters:** This is an inaccurate dependency citation. The needed conclusion follows instead from the stated continuity of $f$ on $\overline\Omega$ and the reverse triangle inequality.
- **Severity:** fatal.
- **Disposition:** repaired. The inaccurate citation and unused dependency were removed. Step 1.1 now derives continuity of $|f|$ from the assumed continuity of $f$ and the reverse triangle inequality; the manifest and contract match.

#### R8-6 — `thm-maximum-modulus-principle-with-boundary-and-infinity-control`

- **Exact location:** Facts & Assumptions, Given paragraph; Proof step 2.1.
- **Defect:** The Given paragraph attributes relative closedness of the superlevel sets of $|f|$ to `def-metric-interior-closure-boundary`, which only defines the relevant topological notions. It does not state continuity of holomorphic functions or the closed-superlevel conclusion on which step 2.1 relies.
- **Why it matters:** Step 2.1 needs a fact not supplied by its inputs, and the linked definition does not license the claim attributed to it.
- **Severity:** fatal.
- **Disposition:** repaired. [L5] now quotes complex differentiability implying continuity, and step 2.1 proves relative closedness by preserving the strict complementary inequality on a neighbourhood before applying the boundary and infinity hypotheses. The new dependency, derivation inputs, full source quote, and manifest row are synchronized.

#### R8-7 — `fs-injective-real-differentiable-map-has-nonzero-jacobian`

- **Exact location:** Facts & Assumptions, Given paragraph; Proof step 1.1; frontmatter dependency on `lem-power-monotone`.
- **Defect:** The proof invokes “strict monotonicity of the odd cube” on all of $\mathbb R$, but `lem-power-monotone` proves strict monotonicity in the base only for nonnegative bases. Its Statement does not cover negative inputs.
- **Why it matters:** The cited dependency does not license injectivity of $x\mapsto x^3$ on the whole real line. The witness is valid, but the written justification is not.
- **Severity:** fatal.
- **Disposition:** repaired. `lem-power-monotone` was removed from the item and manifest. Step 1.1 now proves injectivity on all of $\mathbb R$ from $x^3-u^3=(x-u)((x+u/2)^2+3u^2/4)$, and the contract claim matches.

#### R8-8 — batch-8 proof contracts (multiple item ids)

- **Exact location:** `research/frontier-17-batch-8.proof-contracts.json`, citation `quote` rows, including `cor-holomorphic-function-ring-integral-domain:L2/L3`, `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc:L1/L3`, `lem-nonzero-derivative-gives-local-biholomorphism:L1/L2/L3`, `cor-local-multiplicity-count-holomorphic-map:L2`, `thm-boundary-maximum-modulus-principle:L2/L3`, `thm-maximum-modulus-principle-with-boundary-and-infinity-control:L2/L3`, `thm-minimum-modulus-principle:L2`, `thm-hadamard-three-lines:L3`, `cex-flat-smooth-function-has-no-holomorphic-extension:L3/L4`, `cex-nonconstant-blaschke-factor-has-constant-boundary-modulus:L2`, and `fs-injective-real-differentiable-map-has-nonzero-jacobian:L1`.
- **Defect:** These rows contain only a cited clause's opening words or omit a hypothesis/conclusion used by the corresponding fact—for example “Every holomorphic function ... has the primitive”, “the solutions ... are exactly”, and the Heine–Borel clause stopping before “and bounded”. Every fragment occurs on disk, so the substring gate passes, but the recorded text does not itself state the proposition used.
- **Why it matters:** The durable contract does not license the associated proof uses and exhibits the exact “opening words are not a citation” failure named in the dispatch. The item-level fact restatements were separately checked and, except where another finding says otherwise, are faithful.
- **Severity:** fatal (inaccurate/inadequate dependency citation record).
- **Disposition:** repaired. The repository's contract-regeneration tool replaced every citation quote with the complete on-disk Definition or Statement section and regenerated changed derivations. The final contract has 85 citations; an independent exact comparison reports 85/85 equal to their cited source section, while `proof-contract --strict` and `citation-fidelity` both pass.

#### R8-15 — `thm-open-mapping-theorem-holomorphic-functions` and `ex-local-mapping-of-complex-squaring-at-zero-and-one`

- **Exact location:** `thm-open-mapping-theorem-holomorphic-functions`, Fact [L3] and Proof step 2.1; `ex-local-mapping-of-complex-squaring-at-zero-and-one`, Fact [L2] and Verification step 1.1.
- **Defect:** Both facts restated only the noncentral-value clause of `cor-local-multiplicity-count-holomorphic-map`, but their steps also invoked its separate conclusion that $f(a)$ has the unique preimage $a$, counted with multiplicity $m$. The facts also inherited the unscoped $a$ wording repaired under R8-1–R8-3.
- **Why it matters:** A step may not use an omitted continuation of a cited Statement. The source item was strong enough, but the written fact was only its opening clause and did not state the proposition used.
- **Severity:** fatal (inaccurate/inadequate dependency restatement).
- **Disposition:** repaired. Both facts now state the domain and point hypotheses, the prescribed-neighbourhood quantifier, the punctured target-disc fibre count, and the unique central preimage with multiplicity. Their contract uses and full source quotes are current.

#### R8-17 — `cor-injective-holomorphic-derivative-nonzero` and `ex-local-mapping-of-complex-squaring-at-zero-and-one`

- **Exact location:** `cor-injective-holomorphic-derivative-nonzero`, Fact [L1]; `ex-local-mapping-of-complex-squaring-at-zero-and-one`, Fact [L3].
- **Defect:** Both facts copied only the opening summary of `thm-holomorphic-inverse-function-theorem`—“For a nonconstant holomorphic map ... are equivalent”—without the complex-domain hypothesis, the point $a\in\Omega$, or the actual four pointwise clauses.
- **Why it matters:** The shorthand did not preserve the source theorem's domain or quantification and therefore was not a self-contained citation of the proposition used at the named points.
- **Severity:** fatal (inaccurate/inadequate dependency restatement).
- **Disposition:** repaired. Both facts now name the complex domain $\Omega$, the point $a\in\Omega$, and all four pointwise equivalent clauses. Their citation contracts were regenerated from the final text.

#### R8-18 — `cor-local-holomorphic-roots-nonvanishing-function`

- **Exact location:** Facts & Assumptions, Given paragraph; Proof step 2.1.
- **Defect:** The Given paragraph attributed holomorphy of a composite with the exponential to `thm-complex-exponential-is-entire-with-derivative-itself`. That theorem establishes that $\exp$ is entire but does not state the composition theorem needed to infer that $q=\exp(L/m)$ is holomorphic.
- **Why it matters:** The cited dependency did not by itself license the holomorphy conclusion used in step 2.1. The missing complex chain rule exists on disk and must be named rather than silently folded into the exponential theorem.
- **Severity:** fatal (inaccurate dependency citation).
- **Disposition:** repaired. The complex chain rule is now an explicit dependency and Given fact, separate from the statement that the exponential is entire. The same explicit-input repair was applied to the Hadamard normalization under R8-13, and the manifest matches both items.

#### R8-19 — `rem-complex-versus-banach-open-mapping-theorems`

- **Exact location:** Frontmatter `external_refs` and the second body paragraph.
- **Defect:** The remark linked `rem-open-mapping-theorem`, but that target is a draft item on a draft page outside `frontier-17` and outside batch 8. `audit-manifest` classified the external mention as unresolved.
- **Why it matters:** Publishing this in-flight page would leave a reader-facing mathematical citation pointing to content that is neither published nor audited in this run. The cited draft is outside this reader's write scope.
- **Severity:** fatal (unresolved/unlicensed external reference).
- **Disposition:** repaired without touching the out-of-batch draft. The in-batch remark now points readers to its scholarly references directly, states that the Banach theorem is not used, and carries no unresolved `external_refs` edge. `audit-manifest` now reports 169 relationships and zero defects.

### Nonfatal / polish

#### R8-9 — `thm-identity-theorem-holomorphic-functions`

- **Exact location:** Proof step 1.1.
- **Defect:** In the finite-order contradiction the step says $a$ would be the only zero nearby. For order $m=0$ there would be no zero nearby; the correct uniform conclusion is that there are no zeros other than possibly $a$.
- **Why it matters:** Either conclusion contradicts accumulating zeros, and continuity also immediately forces $h(a)=0$, so this is a 30-second wording gap rather than a false theorem.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 1.1 now says there are no nearby zeros other than possibly $a$, covering order $m=0$ and positive finite order uniformly; its contract claim is synchronized.

#### R8-10 — `thm-local-normal-form-holomorphic-map`

- **Exact location:** Proof step 2.1.
- **Defect:** The step shrinks to a disc on which the holomorphic factor $h$ is nowhere zero but does not cite continuity of holomorphic functions among its inputs.
- **Why it matters:** Holomorphy implies continuity and closes the gap immediately, but the step-input contract requires that fact to be explicit.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Continuity is now [L4], step 2.1 cites it, and the dependency, complete source quote, and contract input are recorded.

#### R8-11 — `lem-nonzero-derivative-gives-local-biholomorphism`

- **Exact location:** Proof step 4.1.
- **Defect:** The step uses that the continuous image of the connected disc $V$ is connected without stating or citing that theorem.
- **Why it matters:** This is a standard one-line topological bridge, hence nonfatal under the 30-second rule, but it is absent from the listed inputs.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. The continuous-image theorem is now [L4]; step 4.1 separately derives openness from the local homeomorphism and connectedness from [L4]. The item, manifest, and contract agree.

#### R8-12 — `cor-injective-holomorphic-derivative-nonzero`

- **Exact location:** Proof step 1.2.
- **Defect:** The step infers that $f[\Omega]$ is connected because it is the continuous image of connected $\Omega$, but [L3] supplies only continuity and no input states preservation of connectedness under continuous images.
- **Why it matters:** The missing theorem is standard and closes the argument in seconds, so the gap is nonfatal, but the written inputs are incomplete.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. [L4] now states preservation of connectedness under continuous images, step 1.2 cites it, and the manifest/contract record the dependency.

#### R8-13 — `thm-hadamard-three-lines`

- **Exact location:** Facts & Assumptions and Proof step 1.1.
- **Defect:** Step 1.1 says the exponential normalization is holomorphic, while the declared `thm-complex-exponential-is-entire-with-derivative-itself` dependency is not stated among the Given facts used by that step.
- **Why it matters:** The omitted input is immediate and already declared, so this is a 30-second explicit-input gap.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. The Given paragraph now states both that the complex exponential is entire and that holomorphic compositions obey the complex chain rule; both dependencies are explicit in the item and manifest.

#### R8-14 — batch-8 proof-contract boundary rows

- **Exact location:** `research/frontier-17-batch-8.proof-contracts.json`, especially `thm-holomorphic-inverse-function-theorem:iff-forward`, `cor-local-holomorphic-roots-nonvanishing-function:nonempty-choice`, and `cor-maximum-principle-real-part-holomorphic-function:zero`.
- **Defect:** The inverse-theorem row says step 4.1 proves every forward implication although the forward chain is spread over steps 1.1–3.1; the roots row describes choosing a prescribed root that is actually a given hypothesis; and the real-part row names an $\varepsilon$ not used in the proof.
- **Why it matters:** These rows do not conceal false mathematics, but boundary rows are required to record the disposition actually determined rather than a nearby generic rationale.
- **Severity:** nonfatal contract precision.
- **Disposition:** repaired. The inverse row now identifies the exact four-step implication cycle and canonical step numbers; the root row distinguishes the given prescribed root from the selected logarithm; the real-part row names the actual radius $\rho$. The inverse theorem's explicit target value also changed its nonempty-choice row to a checked disposition.

#### R8-16 — `cor-local-multiplicity-count-holomorphic-map`

- **Exact location:** Proof step 3.1 and its proof-contract inputs.
- **Defect:** The central-fibre sentence uses [L2]'s zero-root clause but did not cite [L2]; the contract consequently recorded only steps 2.1 rather than 2.1 and 3.1 as uses of that fact.
- **Why it matters:** The missing input is visible and closes immediately, so it is nonfatal under the 30-second rule, but every numbered step must list the fact it uses.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 3.1 now cites [L2], and the regenerated contract lists [L2] at both steps 2.1 and 3.1.

## Coverage and changes

The mathematical read is complete with no exception: every numbered step in all 30 proof-bearing items, every Fact/Assumption citation, every title and Statement, every boundary row, all five Definitions/Remarks without proofs, both page bodies, and all 35 provenance pairs were read. I opened **98 distinct item files**: all 35 scoped items, all 61 distinct external dependency targets, and the two additional targets originally cited only in Remarks. The A-page summary has exactly two paragraphs of 58 and 73 words; the B page has no authored body.

Every final dependency target has `provenance.statement` equal to `literature-derived` or `ai-altered`; none is `ai-generated`. The final scoped provenance distribution is 4 `literature-derived/not-applicable`, 23 `literature-derived/ai-altered`, 6 `ai-altered/ai-altered`, 1 `ai-altered/not-applicable`, and 1 `ai-generated/ai-generated`. The sole generated Statement/Construction is `ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc`; it is not a dependency target, and the direct estimate $|p(z)|\le5$ together with $p(-1)=5$ checks its entire stated scope, so no counterexample exists. The local-multiplicity Statement was retagged `ai-altered` after the reader-authored prescribed-neighbourhood refinement.

The cited source families were reopened during the provenance pass: Lebl for the identity, local mapping, open/maximum/minimum principles and roots; Shabat for local inversion and the real-differentiable Jacobian counterexample; Tropp for the strip regularizer and three-lines theorem; and Hunter for the flat smooth function. The final literature/AI-altered labels agree with the source-backed claim versus locally adapted proof split. The removed `rem-open-mapping-theorem` target was legacy-unclassified and draft, but it was non-load-bearing and is no longer cited.

### Files changed

- Statement/Definition repairs: `def-local-degree-holomorphic-map`, `thm-local-normal-form-holomorphic-map`, and `cor-local-multiplicity-count-holomorphic-map` (including its provenance retag).
- Proof/fact/dependency repairs: `thm-identity-theorem-holomorphic-functions`, `cor-local-holomorphic-roots-nonvanishing-function`, `lem-nonzero-derivative-gives-local-biholomorphism`, `cor-local-multiplicity-count-holomorphic-map`, `thm-open-mapping-theorem-holomorphic-functions`, `thm-holomorphic-inverse-function-theorem`, `thm-boundary-maximum-modulus-principle`, `thm-maximum-modulus-principle-with-boundary-and-infinity-control`, `cor-injective-holomorphic-derivative-nonzero`, `thm-hadamard-three-lines`, `ex-local-mapping-of-complex-squaring-at-zero-and-one`, and `fs-injective-real-differentiable-map-has-nonzero-jacobian`.
- External-citation repair: `rem-complex-versus-banach-open-mapping-theorems`.
- `research/frontier-17-batch-8.pages.json`: synchronized every final dependency list (35/35 exact against item frontmatter), the local-multiplicity strategy, and the real-Jacobian strategy. `research/plan-spec.json` was not touched.
- `research/frontier-17-batch-8.proof-contracts.json`: regenerated citations/derivations for repaired facts and steps, normalized all 85 quotes to complete source sections, and corrected boundary dispositions/evidence.
- No item or page was added, deleted, renamed, moved, judged, published, or given a verification stamp. None of the 15 changed items carried a stale `verification.judge` block. The two page composition files required no edit.

### Final gates

- Reflow: all 13 changed proof-bearing items unchanged on the final pass.
- Precheck: all 13 changed proof-bearing items pass; the Definition and Remark edits correctly have no proof precheck.
- Proof contract: 30/30 items, zero errors/warnings. Citation fidelity: 85 citations, no missing quote or widening candidate; independent exact-section comparison 85/85.
- Boundary audit: 240 rows, 125 specifically reasoned `not_applicable`, no template cluster or contradicted disposition.
- Content policy: 35 items, zero errors/warnings. Manifest-vs-item dependency comparison: 35/35 exact.
- Audit manifest: 169 relationships, zero unresolved/missing-source defects. Coverage checklist: one A page and 56 harvested results, zero errors/warnings.
- Finite smoke: zero registered applicable checks; no mathematical pass is inferred from the empty check set. Risk report: zero errors; Alpha-owned high/critical `risk_review` dispositions were not fabricated or edited.
- Citation-faithfulness screen: three notation-only candidates (`\mathbb R` versus `\mathbb{R}`) were opened and are faithful. All 22 truncated-citation heuristic candidates were individually triaged as faithful short statements of the exact operative clause.
- Citecheck: all 35 items clean. Prosecheck and rendercheck: all 37 item/page files clean, including real KaTeX and renderer-YAML parsing.

No unresolved mathematical concern remains. **12 fatal findings and 7 nonfatal findings were repaired; 0 findings remain open.**

## Per-page verdicts

- **`the-identity-theorem-and-the-open-mapping-theorem` (25 items): repaired and clean.** The local-degree scope/interface, local sheet-count refinement, inverse-theorem implication cycle, boundary/infinity continuity citations, strip normalization inputs, contract quotes, and unresolved Banach comparison link were repaired. Every item, title, Statement, proof step, citation, boundary row, Remark, summary paragraph, and provenance pair was read.
- **`the-identity-theorem-and-the-open-mapping-theorem-examples` (10 items): repaired and clean.** The squaring facts now carry the full scoped central-fibre and inverse-theorem clauses, and the real-Jacobian witness proves cube injectivity without the inapplicable monotonicity citation. The generated polynomial example and all counterexamples/false statements survived direct witness and boundary checks.
