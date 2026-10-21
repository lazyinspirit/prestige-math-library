# Batch 33 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-33`.

## Scope and checkpoint

Read the generated order, scope, immutable pre/post hashes, reader report/findings and refuter JSON. There are exactly two reader obligations concerning published dependencies, no touched/page/foreign-gate/refuter obligations. All six item and both page pre/post hashes agree; no reader repair is claimed. Published sources remain read-only.

## Completed ordered review

### lem-ip-nullspace-property-stability-cone (level 1)

Reviewed all four current proof steps and F1–F15 against the actual supplier statements. The nonzero kernel sphere is nonempty, closed by row Cauchy–Schwarz and reverse triangle estimates, and bounded; n>=1 permits the choice-free Euclidean compactness/extreme-value theorem. Coordinate projections are 1-Lipschitz; both squaring implications require and have nonnegative norms. NSP makes each complementary one-norm strictly positive on the sphere, so the explicitly estimated quotient is continuous and attains q_S<1. The finite support family contains the empty set, and s>=1 plus a nonzero coordinate ensures q>0. Homogeneity transfers the bound to every nonzero kernel vector; zero kernel uses rho=1/2 and h=0 is handled separately. At s=n the full support forces the zero-kernel branch. No AC, noisy-vector conclusion, equivalence assertion, or diagram is used. Reader and refuter report no defect in this carrier. No repair required.

Suppliers: def-ip-nullspace-property, def-p-norms-on-rn, def-euclidean-inner-product, def-norm-and-normed-space, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-finite-sum-laws, lem-finite-set-has-max, lem-of-square-monotone, thm-cauchy-schwarz-and-the-euclidean-norm, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values. Exact continuity, metric identification, finite maximum, square monotonicity and extreme-value clauses were inspected. Initial risk-report passed with four CRITICAL items; this item now has a complete risk_review.

Ordered review continues below; all obligations are now complete.

### thm-ip-basis-pursuit-exact-recovery-under-nsp (level 1)

Reviewed both proof steps and F1–F6 against current definition/norm/finite-sum suppliers. For any feasible z distinct from x-dagger, h=z-x-dagger is a nonzero exact kernel vector by rowwise finite-sum linearity. Its support S has size <=s, and reverse triangle on S plus disjoint-support additivity gives ||z||_1>=||x-dagger||_1-||h_S||_1+||h_Sc||_1>||x-dagger||_1. The proposed minimizer is itself feasible, so existence is proved without compactness or a minimizer-selection assumption. Empty support, x-dagger=0, trivial kernel, n=1 and s=n all satisfy the same argument; no noisy or converse claim is asserted. No choice or diagram is needed. Reader/refuter identify no defect. No repair required.

Dependencies: def-ip-nullspace-property, def-p-norms-on-rn, def-norm-and-normed-space, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-finite-sum-laws. Completed risk review before proceeding to level 2.

### ex-ip-gaussian-identity-design-minimax-lower-bound (level 2)

Reviewed both verification steps and A1/F1–F8 against current suppliers. Identity multiplication gives ker I_d={0}; strict NSP is vacuous and the already-reviewed exact-recovery theorem applies noiselessly. For noisy data, the independent coordinates are exactly N(theta_j,sigma^2/n), the class has <=s nonzeros, T is Borel, n>=1,d>=2,1<=s<=d/2,sigma>0 and full AC are explicit. The squared Euclidean loss equals the written finite square sum. Independently read the current published minimax proof: the finite sparse block packing covers s<=d/2; M=2 uses KL=1/8, TV<=1/4 and scalar Le Cam giving 3 sigma^2/(128n), with s log(ed/s)<=1024. M>=3 uses reference KL=log(M)/8 and Fano factor>1/5, yielding denominator 163840 before weakening to 200000. Read the packing and Fano arguments and actual KL/product/Pinsker/Le Cam/kernel/logarithm interfaces. The zero parameter, d=2,s=1, s=d/2, positive noise, infinite risk and exact/noisy distinction are valid; AC is inherited by this use. Reader findings concern only the published source locator and an ambiguous explanatory paragraph in monotonicity; neither changes an applied mathematical clause. Both are routed separately to the owner, not repaired or certified here. No diagram or local repair required.

Suppliers: def-axiom-of-choice, def-matrix-product-and-identity-matrix, def-ip-nullspace-property, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-gaussian-sparse-sequence-minimax-lower-bound, thm-ip-basis-pursuit-exact-recovery-under-nsp, lem-finite-sum-laws. Published background reading limits: packing and Fano proof arguments and all directly used statistical/logarithm statements were read; deeper measure-theoretic foundations were not recursively audited. The following three-column review completes the required item order.

### ex-ip-nontrivial-order-one-nsp-matrix (level 2)

Reviewed all three verification steps and all five cited facts against current suppliers. Ah=(u-v,u+w), so the kernel is precisely lambda(1,1,-1), in both directions. For lambda!=0, absolute values are all |lambda|>0: empty support gives 0<3|lambda| and every singleton gives |lambda|<2|lambda|. Those exhaust |S|<=1, proving strict NSP for the stated 2-by-3 matrix. The already-reviewed exact-recovery theorem applies at m=2,n=3,s=1 to every vector with at most one nonzero coordinate, including zero. The zero kernel vector is correctly excluded only from the NSP test. No claim at other sparsity orders or noisy data; finite explicit arithmetic uses no AC. Statement and references are uninterrupted and no diagram is needed. Reader/refuter report no defect. No repair required.

Suppliers: def-ip-nullspace-property, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-ip-basis-pursuit-exact-recovery-under-nsp. All four required risk reviews are now complete.

## Routed published findings

### reader:33:1 — confirmed_nonfatal

The current source title says Chapter 4, §§18–19.2. Independently opened arXiv:2310.19244v1: §4.5 contains Lemma 4.14 (printed 105–107) and Corollary 4.15 (printed 108). The locally proved denominator 200000 follows from its sparse block-packing/Fano and binary Le Cam branches; the source locator is inaccurate, not a missing proof. Published source remains read-only; owner should replace only the locator with §4.5, Lemma 4.14 and Corollary 4.15, pp. 105–108.

Closed row: `inverse-problems-knot-theory-all-109-2026-10-19-3a-b33-gaussian-locator` (`nonfatal-recorded`); published repair remains pending. Current canonical guard equals routed `pre_sha256`: `a6bee624a86578469ca5d7f0b414ada705a9a1cf95ffe8189c95739bbe1cf27b`. Raw source SHA256: `cdc780051e7508273dbd61cfefc54ed445824627b6b3d10176f23da55a7ea10c`. No historical raw-byte reconstruction is asserted; scope does not mark either observation unbound.

### reader:33:2 — confirmed_nonfatal

The current Statement says a zero-integral nonnegative integrable function may be positive infinitely often, then attaches “that is FALSE” to a flattened false-statement title. Thomae’s function in fs-nonnegative-integrable-with-zero-integral-vanishes is positive on the rationals and has zero integral, so the first assertion is true; the false implication is vanishing identically. The five-step integral proof correctly establishes nonnegativity, monotonicity on a<b and the two-sided bound. The Gaussian supplier uses only monotonicity on [1,2] to bound log 2 by 1; this remains valid. Published source remains read-only; owner should explicitly name the false vanishing implication, preserving the existing references and hypotheses.

Closed row: `inverse-problems-knot-theory-all-109-2026-10-19-3a-b33-integral-wording` (`nonfatal-recorded`); published repair remains pending. Current canonical guard equals routed `pre_sha256`: `3d0f7f874a8a203a408aa705d85909d42ae793502a5ac799a23ba02ab9b2a179`. Raw source SHA256: `8995be01407f4fbafd66b40b67187a5692fd338b82f12ff7f8034a1630599c08`. No historical raw-byte reconstruction is asserted; scope does not mark either observation unbound.

## Supplemental locator repairs discovered during risk review

These are current risk-review dispositions, not synthetic routed obligations: JSON retains exactly the two owed reader decisions.

### Supplemental locator repair: lem-ip-nullspace-property-stability-cone

Corrected the reference-section page range from 82–84 to 82–85: Definition 4.11 is printed p.83 (PDF index 98) and Remark 4.16 is printed p.85 (PDF index 100). Verdict: `amended_repair`; `repair_confidence: 1`. Closed row: `inverse-problems-knot-theory-all-109-2026-10-19-3a-b33-stability-locator`. No Statement/Definition, dependency, proof, provenance or manifest/contract citation text changed. The source URLs and frontmatter source titles remain accurate. The proof is unchanged and no material-rewrite judge invalidation is needed. Existing valid step separation is retained; no reflow mutation is needed.

### Supplemental locator repair: thm-ip-basis-pursuit-exact-recovery-under-nsp

Corrected Bandeira §6.3 page range from 93–94 to 106–107. The PDF contents are stale; independently read the actual section text and checked the page footers using PyMuPDF on PDF pages 106–107. Verdict: `amended_repair`; `repair_confidence: 1`. Closed row: `inverse-problems-knot-theory-all-109-2026-10-19-3a-b33-basis-pursuit-locator`. No Statement/Definition, dependency, proof, provenance or manifest/contract citation text changed. The source URLs and frontmatter source titles remain accurate. The proof is unchanged and no material-rewrite judge invalidation is needed. Existing valid step separation is retained; no reflow mutation is needed.

## Source evidence and reading limits

[Foucart–Rauhut PDF](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf): Definition 4.1 and Theorems 4.4–4.5, printed pp.78–79; Definition 4.11 and Remark 4.16, printed pp.83 and 85. Read the exact defining inequalities, exact-recovery argument and stable-margin observation, applying the real case. The local proofs supply their own derivations.

[Bandeira PDF](https://www.ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/5f0f7205d1cf274e80d77345a7edbf2a_MIT18_S096F15_TenLec.pdf): actual §6.3, printed pp.106–107, nullspace argument and Definition 6.5. The source omits the nonzero qualification in that displayed definition; the local definition correctly includes it, consistent with the argument and Foucart–Rauhut. The contents page uses stale locators.

[Rigollet–Hütter v1 PDF](https://arxiv.org/pdf/2310.19244v1): read §4.5 sparse-estimation statements and relevant argument, printed pp.105–108; Lemma 4.14 assumes s<=d/8. The current local sparse block-code proof, independently read, supplies s<=d/2 and its stated constant; the external source is context, not an imported proof of this stronger endpoint.

Web PDF screenshots failed with cache misses. Bandeira PDF download and PyMuPDF text extraction succeeded and verified actual page footers. An attempted pdftotext extraction could not run because that binary is absent; no check success is attributed to it.

Both pages are unchanged frontmatter-only compact-v1 carriers. No assigned diagram occurs or is needed for these algebraic and analytic arguments. All inspected assigned Statement/Definition/Example sections are uninterrupted, with references immediately afterward. No published carrier was edited. No missing mathematical prerequisite, proposed withdrawal or local blocker was found; two nonfatal published maintenance requests remain for the owner.

## Final local checks and handoff

All commands exited 0:

- `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-33.proof-contracts.json` before review: four CRITICAL items routed, zero errors.
- The same command with `--require-reviewed` after all four reviews: zero errors, five proof-bearing items inspected by the tool.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-33.proof-contracts.json --strict`: 5/5 items checked, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-ip-nullspace-property-stability-cone.md items/thm-ip-basis-pursuit-exact-recovery-under-nsp.md`: both pass, zero failing.
- Final batched `node tools/proof-layout.mjs items/lem-ip-nullspace-property-stability-cone.md items/thm-ip-basis-pursuit-exact-recovery-under-nsp.md`: two items, six steps, zero defects. No subsequent item edit or formatter was run.
- `node tools/rendercheck.mjs items/lem-ip-nullspace-property-stability-cone.md items/thm-ip-basis-pursuit-exact-recovery-under-nsp.md --quiet`: real KaTeX and renderer YAML parsing pass.
- `node tools/defect-ledger.mjs append --file /tmp/b33-defect-rows.json`: four valid rows appended under its native append lock; generated view refreshed. Two are closed nonfatal published routing dispositions; two are completed local locator repairs.

Exact source comparison: undoing only the two reported locator substitutions reproduces each immutable reader-post raw SHA256. The other four assigned items and both pages exactly match reader-post raw hashes. Thus there are no unstated mathematical or metadata source edits. The only batch contract additions are the four specific risk reviews. Manifest content, provenance, sources metadata and dependency contracts are unaffected by the two reference-section locator edits. The published ledger was reread after acquiring its exclusive lock; only this writer's lock was released. Both affected IDs occur exactly once in its classification index.

The task-named decisions JSON contains exactly `reader:33:1` and `reader:33:2`, each `confirmed_nonfatal`, each referencing exactly one closed row. Supplemental risk-review locator dispositions are documented above without inventing native obligations. All four HIGH/CRITICAL risk reviews are complete; published maintenance remains pending owner action. No mathematical escalation, item/page withdrawal, judge invocation, stamp, self-certification or engine transition was performed. Engine owns current decision hash stamping and the gate battery.
