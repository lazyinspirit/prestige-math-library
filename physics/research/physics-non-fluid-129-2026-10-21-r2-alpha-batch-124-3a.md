# Batch 124 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-124`. Scope: batch 124 only. Reviewed in generated order: level-6 postulate, level-7 theorem with completed risk review, then level-7 remark and its refuter finding. Four decisions are written in the task-named decisions file. No judging, stamping, certification, dispatch or engine gate battery was performed.

## Dispositions

| Obligation | Disposition | Evidence |
|---|---|---|
| `touched:124:post-tgrx-linearized-horizon-model` | `accepted_repair` | Retain the reader's explicit natural-unit dimensions for the renormalization scale and effective energy cutoff. |
| `touched:124:pthm-tgrx-linearized-area-modular-moment` | `accepted_repair` | Retain the signed area-difference title and cutoff clarification; all five proof steps check out. |
| `touched:124:rem-tgrx-qnec-qfc-status` | `escalated` | Current source reviewed and repaired; exact pre-reader remark bytes remain unavailable, and explicit owner authorization for a current-content historical disposition is pending. |
| `refuter:124:1` | `confirmed_fatal` | The original setup lacked its arbitrary-dimensional ambient Lorentzian geometry and a Cauchy-surface definition. The current carrier supplies both. |

## Postulate: completed first

The adopted model fixes a smooth Lorentzian four-manifold family, signature (-+++), c=hbar=k_B=1, a common compact-cut generator flow with fixed affine normalization, reference B0=0, fixed Hadamard state/stress inputs, first-order focusing, a future boundary condition and absolute stress first moment. It adopts these premises and does not assert solution existence, a null-energy condition, entropy identification or empirical applicability.

The actual supplier `post-tgrx-semiclassical-equation`, Postulate, fixes mu in inverse metres and E_cut in joules. Thus both have dimension inverse length at c=hbar=1. The reader's clarification is sound. The exact pre-reader carrier was recovered at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-tgr124-qnec-status/snapshot/items/post-tgrx-linearized-horizon-model.md`, SHA256 `d87caeb15cb8ee0651370ff5ab8dcc0adfaf6944f9d53bb21c3bbff2f8b15ce5`. Its complete diff against the current item contains only those unit clarifications and corresponding scope wording. The current item matches the immutable post-reader hash `eea4cf87a392a286758e5ef6c5586819afd3b827a8d4d7dc182d4e3d3034e301`.

Direct dependencies read: the semiclassical Postulate and the published `def-tgr-horizon-screen-family`, including the complete proof of `lem-tgr-null-screen-quotient-positive`. Supporting current stress, curvature and curvature-variation definitions and the formulation-only free-collapse Postulate were inspected at the uses relevant to this model. Collapse/scattering premises and nonzero curvature-squared effects are expressly excluded here; their deeper proofs are not certified by this review.

Both actual item consumers, the assigned theorem and remark, retain the same supplied model and unit convention. No outside item consumer appeared in a search of current items/library. All affected manifest public-section and scope mirrors are synchronized. Defect `pnf129-r2-b124-natural-unit-dimensions` is closed with repair confidence 1.

## Theorem: proof and CRITICAL risk review complete

The local argument proves, for every lambda >= lambda0,
`delta A_infty - delta A(lambda) = 8 pi G_N M_lambda`, where M_lambda is the signed first null-stress moment. G_N>0 has dimension L^2; M_lambda is dimensionless. Its statement makes no entropy, modular-generator, positivity or empirical claim.

Step 1.1: the spacelike cut tangent plane injects into the positive rank-two screen quotient, hence identifies isometrically with it. Local flow coordinates commute; torsion freedom and metric compatibility give the cut-metric derivative. Differentiating its positive determinant gives the area-density identity. Integrating first on a finite slab permits epsilon differentiation using compactness and the stated joint C1 regularity, without assuming an unstated mixed second derivative. B0=0 makes the background density independent of lambda.

Step 1.2: generatorwise absolute integrability and the future boundary give the positive-sign stress-tail formula. Step 2.1: the transverse integral is absolutely convergent, including at lambda0: continuity bounds the stress on the initial compact unit slab, and the first-moment weight controls the remaining tail. Step 3.1: Tonelli applied to the absolute first moment bounds the integral of |delta A'|, proves the finite area limit and justifies the order reversal. Step 4.1 divides by 4G_N. Zero stress gives constant varied area; either sign of stress remains allowed. No nontrivial choice, converse or selection argument occurs.

The exact pre-reader theorem was recovered in the same snapshot directory, SHA256 `8aed2a56963970cb2150302e70d296bfdf8da46c5c8783b25d69c271873e716b`. Its diff confirms the reader changed the title and cutoff language, leaving the proof intact. Current raw hash `ded2aa0e195f3001e2f9e251a69cb60a8bb349f75586d6e7f3bcdcc1394da125` matches the post-reader snapshot. The signed title is appropriate; “deficit” needlessly suggested a sign not proved. Defect `pnf129-r2-b124-signed-area-title` is closed with confidence 1. A specific complete CRITICAL risk review was recorded before proceeding to the remark.

Source context checked independently: [Wall, arXiv:1105.3445v6](https://arxiv.org/pdf/1105.3445), §2.2 equations (11)–(23), and [Reall, Black Holes (2024)](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf), §§4.6 and 4.8, equations (4.29)–(4.40). Wall retains a graviton shear-squared contribution when relevant; the local model excludes that source and adopts its own first-order equation. Neither source's general GSL or area theorem is imported. Only the relevant passages were read, not either complete work.

## Remark and refuter finding

The refuter is correct. Naming arbitrary d>=2, spacelike cuts, null geodesics and Cauchy surfaces without an ambient (M,g) or Cauchy definition leaves the formulation untyped. Its sole local model dependency only supplies a four-dimensional geometry and cannot repair that mismatch. The current Statement now defines its own d-dimensional smooth Lorentzian geometry, time orientation, causal vectors/curves, Cauchy splitting, metric connection, affine null segment and induced expansion/shear. The geometry is independent of the local four-dimensional model. Regulated von Neumann entropy is also made explicit without assuming a finite continuum density matrix.

Two additional current-carrier defects were independently confirmed and corrected:

- The transverse-patch A->0 expression previously covered d=2. A one-point zero-dimensional patch has counting area 1, so that shrinking limit is unavailable. The expression now explicitly applies to d>2, and the separate source d=2 inequality is stated. The generic QFC's d=2 cut/derivative convention is discrete; no dimension is silently dropped.
- The JT paragraph reused the generic area-normalized expansion without the source's total-dilaton normalization and positivity assumption. It now uses positive Phi, the source entropy with fixed other cut points, 4G/Phi times its affine derivative, and the two-dimensional QNEC hypothesis. The zero-quantum-expansion condition remains distinct from full QFC.

Closed rows: `pnf129-r2-b124-ambient-source-geometry` (exactly the row for `refuter:124:1`), `pnf129-r2-b124-two-dimensional-patch-limit`, and `pnf129-r2-b124-jt-expansion-normalization`. Each completed current repair has confidence 1. The complete HIGH risk review is in the contract. The current remark has no item dependency/reference consumers; its assigned B page merely places it and requires its A page. No outside repair is needed.

Source checks and limits:

- [QNEC v2](https://arxiv.org/pdf/1509.02542v2): the existing run-local complete PDF text at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-tgr124-qnec-status/qnec-1509.02542v2.txt`, abstract/outline, §2 (2.1)–(2.3), §3.1, §4.5 (4.61)–(4.63), and §5 (5.1)–(5.5) and interaction discussion. Checked fixed-background scope, separate dimensional cases and conditional extension; no replica-proof audit.
- [QFC v1](https://arxiv.org/pdf/1506.02669v1): §§3.1–3.3 (3.1)–(3.10) and §5.2 (5.6)–(5.9). Checked the finite-renormalized-entropy assumption, Cauchy splitting, cut profiles, expansion normalization and conjectural diagonal statement; no full proof audit.
- [Fu–Koeller–Marolf v2](https://arxiv.org/html/1705.03161v2): §2 and §4 including the v2 note. Checked locally vanishing null second fundamental form, d>=5, either nonzero coupling sign, and the effective-cutoff localization caveat. No universal higher-curvature conclusion is claimed.
- [Franken et al. v3](https://arxiv.org/html/2510.13961v3): Introduction and §3, especially (3.9)–(3.15), positive Phi, the stated matter assumption and model-specific counterexamples. The [arXiv record](https://arxiv.org/abs/2510.13961) identifies v3 as current/published. No higher-dimensional uplift or full external proof audit is asserted.

All items separate assumptions, deductions and source-reported status. They report no experimental measurements or statistical inference. No uncertainty or empirical precision was invented.

## Historical limitation and owner action

At opening, the remark exactly matched the immutable post-reader raw hash `e47417c9773d538c9439d4113401dcd612382a04f59b9e2d19aca40b80f266a5`. The recorded pre-reader hash is `062a3144b237ce303ecea0087173ac560c369b7c2021393170fbd652f5c5eec1`. An exact preimage was not recovered from current-run research archives or HEAD. The owner archive `after.md` is a different hash and was not relabelled as the preimage. The stale manifest and reader narrative provide useful semantic evidence, but not proof of historical bytes. Attempted reconstruction did not match and is not evidence.

An optional owner question requests the explicitly authorized current-content historical resolution allowed by this dispatch. No reply has been inferred. The touched remark decision therefore remains escalated with historical_delta_unknown true. Required owner action: supply the exact preimage, or explicitly authorize that historical disposition with durable evidence. The current defects above are independently repaired and closed; their correction does not erase the missing history or change the refuter finding into a false positive. There is no unresolved mathematical prerequisite in the reviewed current content.

## Records, diagrams and local checks

The task-named report and four-entry decisions file are present. The owning proof contracts include complete CRITICAL/HIGH risk reviews and the remark's geometry/source review. The owning manifest mirrors current public sections and metadata; stable IDs, item/page inventory and dependency edges are preserved. The batch cross-dependency input and `briefs/tasks/frontier-dependency-ledger.md` record the actual owned supplier use; the native refresh completed. Five closed defect rows were appended through the serialized ledger command. No published/imported item was edited or found defective in the scoped uses; no published ledger update was needed.

The assigned items and both frontmatter-only pages contain no TikZ/tikzcd diagrams. No diagram is necessary to establish these local calculations or source-status distinctions.

Actual focused checks:

- Reflow: changed remark unchanged by formatter.
- Explicit three-item precheck: postulate nonproof structure and theorem direct proof passed; remark correctly has no checkable proof. Two checked, zero failures.
- Changed-remark rendercheck: YAML and all math spans passed.
- Strict owning proof-contract check: zero errors, zero warnings, 3/3 checked.
- Risk report before review: MODERATE postulate, CRITICAL theorem, HIGH remark. After substantive review, --require-reviewed: zero errors.
- Required final batched proof-layout: three items, five proof steps, zero defects; run after final item edits and reflow.
- Frontier dependency ledger refresh: completed and deduplicated.

Final current remark raw SHA256: `5e2e26a52642ceefb711ae700af4adad3b7eedb9cd3b9454868001d1fabf3dfd`. Engine-owned decision hashes and gate battery remain for the engine. The sole open disposition is the explicitly reported historical-preimage hold.
