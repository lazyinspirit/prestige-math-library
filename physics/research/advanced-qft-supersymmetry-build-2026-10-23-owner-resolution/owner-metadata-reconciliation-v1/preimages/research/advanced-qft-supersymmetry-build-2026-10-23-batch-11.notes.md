# Batch 11 — Step 1 authoring evidence

Run: advanced-qft-supersymmetry-build-2026-10-23

Batch: 11 (beta, quantum-field-theory-mathematics)

Updated: 2026-10-23 07:34 UTC

## Plan and inventory

The complete design section at research/plan-advanced-qft-and-supersymmetry-track.md under “Finite-Dimensional Q-Exact Deformation Theorem” matches the current research/plan-spec.json rows and the batch manifest on A/B IDs, title, category, library classification, order 967, and the required earlier page the-lebesgue-integral-and-the-convergence-theorems. The design requires an explicit finite-dimensional graded integration cycle, odd Q and V, even S and O, a Q-invariant measure/cycle, dominated differentiation, and zero boundary flux. No design/plan conflict was found. The empty item arrays were planning placeholders and are now populated in the assigned manifest; the shared plan and proposed inventory were left unchanged.

research/advanced-qft-supersymmetry-build-2026-10-23-batch-dependency-levels.json records batch 11 at level 0 with no in-run batch prerequisites. The final local item levels were independently recomputed from this pair’s actual item edges:

- def-finite-dimensional-q-exact-localization-data: level 0; no item prerequisites.
- thm-finite-dimensional-q-exact-deformation-invariance: level 1; in-run prerequisite def-finite-dimensional-q-exact-localization-data. External mathematical premises are thm-differentiation-under-the-integral-sign, def-derivative, and cor-zero-derivative-implies-constant.
- ex-finite-q-exact-deformation-on-the-four-torus: level 2; in-run prerequisites are the local definition and theorem.

Every edge has role mathematical-premise; all items have domain mathematics and library mathematics. No physical scope is claimed. The A page contains the definition and theorem in supplier-first order. The B page contains the worked torus example and remains a leaf. Both page bodies are empty and their files contain YAML frontmatter only. The native page-layout pass remains responsible for setting compact-v1 after initial authoring; no layout flag or page summary was authored here.

## Item claims and argument decisions

### def-finite-dimensional-q-exact-localization-data

Defines the finite-dimensional graded integral on ΠTM, its top-form/Berezin convention, an odd graded derivation Q and its square, Q-invariance as the exact integration identity IΓ(QF)=0, zero boundary flux, the even/odd deformation data, and the compact-parameter integrable-majorant condition for the integrand and its derivative. The ordinary derivative is justified by the imported differentiation theorem; no large-parameter limit is part of the definition.

Sources and inspected locators are recorded in the coverage file:

- Schwarz and Zaboronsky, §§2–3, PDF pp. 2–7: https://arxiv.org/pdf/hep-th/9511112. Their fixed-locus localization theorem has additional compactness and Q-squared hypotheses; it is not used as the proof of this item’s theorem.
- Pestun and Zabzine, §1, PDF pp. 1–3: https://arxiv.org/pdf/1608.02953. This covers the finite-dimensional Q-exact deformation and distinguishes it from the further saddle limit and infinite-dimensional extension.
- Folland, Real Analysis, Theorem 2.27(b), printed pp. 55–56: https://djvu.online/file/NPF4BEtSuqdFA.

### thm-finite-dimensional-q-exact-deformation-invariance

For an oriented finite-dimensional integration cycle, an odd derivation, Q-closed even insertion/action, an odd deformation, (Q²V)E_t=0, an exact zero-boundary Q-invariance identity, and a common L1 majorant on each compact parameter interval, proves Z'(t)=0 and hence constancy of Z. The argument differentiates the graded integrand, applies the imported dominated differentiation theorem on an open neighborhood with compact closure, uses the graded Leibniz rule with the sign for odd V, invokes the zero-boundary identity, and applies the real zero-derivative theorem to the real and imaginary parts. The statement explicitly excludes a large-t saddle conclusion and a continuum functional-integral identity.

Direct supplier readings and exact interfaces:

- items/thm-differentiation-under-the-integral-sign.md (pinned SHA256 642bbb78732d67f3f5af0078f921ed2237db866d85c0b628350a53c187318044): complex-valued sections are integrable; the parameter derivative exists almost everywhere and is measurable; a single integrable majorant bounds the derivative uniformly on an open parameter interval. Its complete local proof was read. The proof’s four direct suppliers were read: dominated convergence, the mean-value theorem, L1-linearity, and density of the rationals. The derived theorem is applied only on an open neighborhood contained in each compact interval, so its open-interval majorant hypothesis is met.
- items/def-derivative.md (pinned SHA256 8f3329a3f96aa71f8fdc0dedd26e47cfa535c76b964b9641306ff5f1d05318fe): the derivative is the finite real difference-quotient limit at an interior point. Its exact definition was inspected.
- items/cor-zero-derivative-implies-constant.md (pinned SHA256 71bcbe9d08caef0ed96ae0bf6210285259445e36d218256ce98ea739eb1e0a9e): continuity on an interval and zero derivative at every interior point imply constancy. Its complete local proof was read; it is applied separately to the real and imaginary parts.

The transitive item closure of these imported calculus/integration suppliers contains 326 unique mathematical items, with no def-axiom-of-choice and no physical-domain item. All imported bytes match research/math-imports.json. The missing readiness record returned for the published differentiation supplier is expected for an outside, read-only mathematical supplier, not an in-run readiness gap. Its full local proof and exact hypotheses were inspected; no escalation was raised.

### ex-finite-q-exact-deformation-on-the-four-torus

Uses T⁴, Q=d, O=dx¹∧dx², S=dx³∧dx⁴, and V=sin(x³)dx⁴. The local density is −(1+t cos(x³)) dx¹∧dx²∧dx³∧dx⁴, while its integral is −(2π)⁴. The proof verifies Q-invariance directly by integrating periodic coordinate derivatives over a full period, checks Q-closure/Q-squared and a uniform integrable majorant on compact t intervals, and evaluates the integral explicitly.

## Source searches, retrieval, and dispositions

Searches used to find the finite-dimensional arguments:

- “finite dimensional supersymmetric localization Q exact deformation invariance mathematical proof Ward identity lecture notes PDF” surfaced Schwarz–Zaboronsky and the Pestun–Zabzine review chapter; both relevant sections were read in full.
- “Supersymmetry and localization finite dimensional supermanifold Schwarz Zaboronsky 1995 pdf” identified the 16-page primary paper; §§2–3 and the complete Theorem 1 proof were inspected.
- “Witten Supersymmetry and Morse theory 1982 full text pdf Q-exact deformation integral” surfaced Witten’s article as adjacent context; it was not harvested for these claims.
- “Guillemin Sternberg Supersymmetry and Equivariant de Rham Theory finite dimensional Q exact deformation pdf” surfaced the book record; its text was not harvested for this batch.

The four selected sources were all full-text fetched and inspected; source-fetch-check --stamp recorded one successful retrieval attempt per URL, four PDF/HTML stamps, zero retries, zero drops, and no unresolved source. Every harvested result is marked included with its supported item and exact locator in research/advanced-qft-supersymmetry-build-2026-10-23-batch-11.coverage.json. The local proofs remain complete; citations are not used as substitutes for them. No source_resolution failure/disposition record is applicable because every selected retrieval succeeded.

## Validation and unresolved run-level observations

The following scoped checks passed:

- content-policy.mjs on the batch 11 manifest: 3 items, 0 errors, 0 warnings.
- depcheck.mjs with the explicit batch 11 item selection: 334-item, 89-page dependency closure; 0 errors, 0 warnings, no item or page cycle.
- rendercheck.mjs on the three items and both pages: 5 carriers, 0 errors, 0 warnings.
- precheck.mts on the three items: theorem and example pass; the definition is not applicable because it has no proof-like section; 0 failures.
- proof-contract.mjs --strict on the batch contracts: all three inventory items checked; 0 errors, 0 warnings.
- Item dependency-level recomputation for this pair: declared levels 0, 1, 2 match the computed levels.
- source-fetch-check.mjs check mode: 4/4 full-text sources remain stamped.
- Final direct-dependency level recomputation for batch 11: declared levels 0, 1, 2 match computed levels; batch-level input remains level 0.
- Final proof-layout.mjs on the theorem and example: 2 items, 9 steps, 0 defects.
- Final statement/page inspection: all three complete Definition/Statement/Example sections have no hyperlinks; both A/B page bodies are empty.
- The cross-batch dependency file is the required JSON array with zero rows; all actual item/page edges are internal to batch 11 or to external published mathematics.

## Step 1 readiness records

All three records were written with the ordinary per-item record command, without owner override and without replacing an existing escalation:

- def-finite-dimensional-q-exact-localization-data: ready, owner=false, no item dependencies, record hash d9bf3d3994e013b68992ee57c86d48a0a2fd9f78f7213cc2cf46b0b1abdee649, recorded 2026-10-23T07:31:55.783Z.
- thm-finite-dimensional-q-exact-deformation-invariance: ready, owner=false, dependencies cor-zero-derivative-implies-constant, def-derivative, def-finite-dimensional-q-exact-localization-data, and thm-differentiation-under-the-integral-sign; record hash 7a409ff7098cd5db2712d1c51b1eb619022f3e34e1a3d415523678e6c46d5400, recorded 2026-10-23T07:32:04.675Z.
- ex-finite-q-exact-deformation-on-the-four-torus: ready, owner=false, dependencies def-finite-dimensional-q-exact-localization-data and thm-finite-dimensional-q-exact-deformation-invariance; record hash 808eb97a8fcdfec32e7d142cb46a6fb1f6ae1baec7e8f335a68a91710bedbf04, recorded 2026-10-23T07:32:12.630Z.

These are Step 1 authoring-readiness records; they do not claim independent review or acceptance.
After writing them, loadStep1Record and step1Decision were rerun for the three IDs; each returned closed: true with the recorded hash.

The whole-run item-dependency-levels.mjs check cannot close yet: it reports 102 empty page inventories in other batches. It reports no dependency-level mismatch in batch 11; the scoped recomputation above passes. Whole-run proof-contract-coverage.mjs likewise stops at the other batch’s empty page aqft-susy-math-foundations; batch 11’s strict item contracts pass. These are other authors’ unfinished inventories, not prerequisites of batch 11, and no outside carriers were edited.

There are no unresolved mathematical prerequisites or source-retrieval failures within this pair. Batch 11 authoring, scoped checks, and readiness recording are complete. The only outstanding evidence is run-level: other batches must fill their 102 empty page inventories before the whole-run dependency-level and proof-contract-coverage checks can close.
