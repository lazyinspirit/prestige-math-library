# Batch 27 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Group: `batch-27`. Scope: batch 27 only. Completed the routed order: pressure-gauge proposition, observation stability theorem, gradient-forcing example; each risk review was recorded before moving higher. No agents, judging, stamping, publication, engine transition or gate battery were initiated.

## Decisions and repairs

The decisions JSON contains exactly ten owed obligations: two touched carriers, two refuter findings and six reader findings. There are no page-only obligations. Each decision references one distinct closed defect-ledger row owned at `3a-adjudicate`. Frontmatter and body citation inaccuracies have separate locations and rows; no finding is silently aliased or duplicated across obligations.

- `touched:27:thm-fd-stokes-load-observable-stability`: `amended_repair`, confidence 1. Retain the reader frontmatter citation correction, complete the separate body-reference correction, and synchronize the manifest locator.
- `refuter:27:2`: `confirmed_fatal`, fixed, confidence 1. The body reference omitted the actual printed pages of its named Example 4.2.2. Added pp. 233–234, preserving the other cited ranges.
- `touched:27:ex-fd-stokes-gradient-forcing-gauge`: `amended_repair`, confidence 1. Same source-locator maintenance, with the example argument unchanged.
- `refuter:27:1`: `confirmed_fatal`, fixed, confidence 1. Corrected the corresponding Example references locator.
- `reader:27:1`: `confirmed_nonfatal`, `nonfatal-recorded`. The root published page really retains its stale Step-1 draft/nonacceptance assertion. This is contradictory page prose, not a mathematical counterexample or a load-bearing premise; the reader's fatal severity is not upheld.
- `reader:27:2` through `reader:27:6`: `confirmed_nonfatal`, `nonfatal-recorded`. All five imported Definition/Statement sections really retain the identified inline supplier links without the required immediately following references section. No missing mathematical hypothesis or invalid inference follows from these presentation defects.

The two body source references now agree with the reader-corrected frontmatter. The owning manifest source locators were updated, and all three contracts received item-specific complete risk reviews. Statements, Definitions, proofs, dependency edges, empirical/public interfaces, provenance classifications, page inventories and compact-v1 flags are unchanged. No judge stamp was present on the changed local items; no material proof rewrite occurred. Citation-only maintenance does not trigger consumer propagation.

## Mathematical review

All local carriers are draft mathematics. No experimental observations, statistical inference, measured input or assertion of physical applicability is made.

`prop-fd-pressure-gauge-observables`: read Statement and Proof 1.1, 1.2, 2.1 with its four actual suppliers. The nonempty bounded open domain has positive finite measure, so constants belong to L2 and means are defined. Cauchy–Schwarz bounds every pairing and the weight functional. Subtracting the mean leaves readings on Q unchanged. The zero-boundary divergence lemma gives integral(div v)=0, so pressure shifts leave the weak term unchanged. The unnormalized sensor shift is exactly c integral(g). Zero mean proves invariance and c=1 proves the converse. Checked g=0, g=1, c=0 and arbitrary L2 representatives. Countable Choice remains an explicit inherited premise. No decision is owed for this untouched unflagged item.

`thm-fd-stokes-load-observable-stability`: read every proof step and the exact local sensor definition, imported Stokes-space definition, divergence right-inverse theorem and weak-solvability theorem. Their hypotheses match: real spaces, d in {2,3}, nonempty bounded connected Lipschitz D, homogeneous zero-boundary velocity, gradient norm, mean-zero L2 pressure, nu>0 and Countable Choice. Read the weak-solvability proof: coercivity alpha=nu, continuity M_a=2nu and inf-sup beta at least 1/C_div produce the stated pressure constant 3 C_div. Bilinearity and uniqueness establish linearity at step 1.1. Apply that exact bound to F-G at step 2.1, then square and sum the bounded sensor inequalities at step 3.1. Checked F=G, zero sensors and m=1; m=0 and nu=0 are excluded, not limiting claims. No additional choice or unproved existence assertion is introduced.

`ex-fd-stokes-gradient-forcing-gauge`: read all four verification steps and six supplier claims after the theorem/proposition reviews. Boundedness makes the coordinate potential square-integrable and its mean finite. The potential has zero mean and weak gradient e1. Integration by parts extends from compactly supported smooth velocities by the specified H1 closure and Cauchy–Schwarz. The matrix trace bound gives |F_phi(v)| <= sqrt(d) ||phi||2 ||grad v||2. Direct substitution verifies both equations for (0,phi); unique normalized solvability applies with the stated viscosity and Countable Choice. The mean-zero weight gives a gauge-invariant bounded sensor. A ball inside D has positive measure outside any coordinate hyperplane, proving its reading is strictly positive. Empty/measure-zero open domains and a constant coordinate are excluded by the actual hypotheses.

No TikZ/tikzcd diagrams occur in the local scope; these elementary scalar/functional arguments require no added diagram. Statements and the example description are uninterrupted, and both assigned pages remain frontmatter-only.

## Published findings and dependencies

Read the canonical root page `../library/numerical-pdes-and-spatial-discretization/mixed-finite-elements-and-stokes-stability.md`, including its published frontmatter and Draft status paragraph. Its actual published members include the directly consumed Stokes-space definition and weak-solvability theorem. The scope's split-current page fingerprint is a routing binding, not evidence of originally observed reader bytes.

Read the complete relevant imported carriers for the five hyperlink findings: `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `lem-na-finite-cover-zero-mean-data-decomposition`, `thm-na-star-shaped-bogovskii-bounded-right-inverse`, `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, and `thm-na-continuous-stokes-divergence-infsup`. The decomposition's finite tree cancellation and norm estimate, local-to-global right-inverse construction, and inf-sup test v=-B_D q preserve the interfaces used by the local theorem. The imported weak-solvability, zero-mean divergence, cover and L2 Cauchy–Schwarz carriers were also read for their exact uses. This is focused supplier-use review, not a complete independent audit of the entire transitive mathematical library or its publication evidence.

All nine inspected imported supplier carriers still match their `research/math-imports.json` pins. No imported or root mathematical bytes were changed. Each of the six confirmed published findings is recorded with exact carrier, owned consumer, evidence, suppliers, OPEN owner maintenance status and repair strategy in `research/published-consumer-supplier-ledger.md`; its classification index was merged while holding this worker's exclusive lock, then the lock was released. Nonfatal-recorded closes the scoped adjudication only, not the original maintenance issue. The strategy is to reconcile stale publication prose or relocate links without weakening formulas, assumptions, attribution or dependency edges under mathematics-owner authority.

The current batch cross-batch dependency artifact is `[]`. All same-run suppliers for the example belong to its own A page; no outside in-run consumer repair or withdrawal is needed. The owned-consumer record in `briefs/tasks/frontier-dependency-ledger.md` was updated. No substantial unmet mathematical prerequisite or unresolved local escalation was identified.

## Sources and historical comparison

Independently opened [Boffi–Brezzi–Fortin](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), §4.2.5, Example 4.2.2, equations (4.2.59)–(4.2.64), printed pp. 233–234, PDF indices 245–246. The PDF text and printed headers confirm the locator. Screenshot retrieval for the second page failed with a cache miss; the readable PDF text supplied the evidence. This review does not claim full-book reading.

Opened [Guermond Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), Remark 53.4, §53.2.1 and Lemma 53.9/Theorem 53.11 context. These support the weak-form and pressure-normalization context; the exact constant used here comes from the imported local weak-solvability theorem and its proof. No source qualification is replaced by an empirical claim.

Read both immutable pre/post batch hash files and the reader/refuter reports and findings. The theorem item fingerprint changes from `daaae05f653f8642236fd72984e468986d35497b0041261750a446df76cea060` to `3f18a535c3acad2e9508f18e71ac7cb71d55c280b46eddd64c07488c8f56b6d9`; the example changes from `d47aa57e39be60913c3caeb1e733fd46d121b5965674ec1049f04c42e4cde663` to `b9171b0dd6d3ea4fad0d0744d73fee7b0bc60a84ea4222f2f5bf5aed9d24bcaa`. Reader repair evidence identifies the frontmatter locator change; contract and manifest fingerprints and page hashes were unchanged at that boundary. Current body references independently confirmed the residual refuter defects. Original reports, scopes and snapshots were preserved; no historical counterexample is asserted against corrected current bytes.

Final raw hashes after local repair:

- theorem: `fbe28c2ca633cca10ff76aa16a219e8e53a0e81890ebed4e59ce5d3facce43f0`.
- example: `64d82af52e91e1540b33e8c74958fa3e5b72e88a2a24135846ffa56e0a434a64`.

## Focused checks

All commands ran from the physics workspace and exited 0:

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-27.proof-contracts.json`: routed three CRITICAL items, scores 8, 13 and 12; all received complete specific risk reviews.
- The same command with `--require-reviewed`: 0 errors, 3 items routed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-fd-stokes-load-observable-stability.md items/ex-fd-stokes-gradient-forcing-gauge.md`: both unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with those two paths: 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` with those two paths: 2 files, valid YAML and math rendering.
- After final item edits and reflow, one batched `node tools/physics-support/proof-layout.mjs` with those two paths: 2 items, 7 steps, 0 defects.
- Local JSON/coverage/linkage checks: exactly 10/10 owed decisions, each linked to its corresponding closed ledger row; imported supplier pin checks 9/9 unchanged.

These checks are local evidence, not engine gate results or mathematical acceptance stamps. The engine owns current decision hashing and its subsequent gate battery. Remaining issues are the six explicitly recorded read-only published maintenance findings.
