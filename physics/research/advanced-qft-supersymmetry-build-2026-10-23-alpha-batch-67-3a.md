# Batch 67 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-67` (scope assignment group `w` preserved).

## Level 1 checkpoint

Reviewed `lem-qftx-gaga-projective-cover-laurent-cohomology`, Proof 1.1–5.1, its definition supplier and direct imported statements. The mixed-series convergence, coefficient support, cochain signs, analytic extension and empty/full-support calculations are sound with the stated AC and dimension bounds. Recorded its complete risk review before proceeding higher.

`refuter:67:1` and the associated published-supplier `reader:67:1` are false positives. Visually rendered Demailly, *Complex Analytic and Differential Geometry*, VIII §6, Theorem 6.5, printed p. 378 (zero-based PDF page 377): the degree condition is q≥1. The same page explicitly supplies the smooth-data branch and finite reciprocal-eigenvalue energy estimate. The extraction displays ≥ as > (and ≤ as 6); the rendered glyph has its lower bar. There is no historical q=1 defect demonstrated by these reports. The URL is https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf ; downloaded PDF raw SHA256 `d7c7654a7417e8322e5dcf8fe8ec818b4c1a18cf280b41f2df5a871b776d89a1`.

The current published `thm-hormander-l2-dbar-existence` F19/6.1 uses the trivial flat line bundle, smooth psh exhaustion and top-form conversion η↦η∧dz₁∧⋯∧dzₙ. This commutes with dbar, preserves coefficient norms, and cancels the common constant volume factor. Its positive curvature eigenvalues and finite energy satisfy the source hypotheses also at q=1. Reviewed the current corollary weight construction: its smooth convex majorant makes the arbitrary smooth datum finite-energy, including empty shells; 11.1 therefore legitimately applies Claim 2. No published or imported carrier was changed.

Next: finish level-2 comparison and level-3 examples, record their risk reviews, disposition the touched repair, append ledger records and run focused checks. No unresolved level-1 blocker.

## Level 2 checkpoint

`thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology` Proof 1.1–5.1 is sound: holomorphic frame changes commute with the coefficientwise differential, smaller-polydisc primitives establish stalkwise exactness, smooth-module sheaves are acyclic, and all cycles belong to the supplied abelian-sheaf injective datum. AC supplies DC. Checked finite rank, degree zero, q>r, and r=0 separately. Scalar values use the reviewed lemma. Its risk review is complete; no carrier edit or separate decision is owed.

## Level 3: structure-sheaf example checkpoint

`ex-qftx-gaga-analytic-projective-structure` Proof 1.1–5.1 correctly enumerates all six negative-support cases and their selected vertices. Checked the displayed zero-mode matrices: diagonal kernel in degree zero, image/kernel plane a02=a01+a12 in degree one, and surjectivity onto degree two. Analytic convergence and both comparisons follow from the already reviewed suppliers. Risk review complete; no separate decision owed.

## Level 3: negative-twist repair checkpoint

Accepted the reader repair to `ex-qftx-gaga-analytic-untwisted-obstruction`. The exact Git HEAD preimage (commit `36b950746c`) has raw SHA256 `c56c1406eff71d5d8590230994831c32775da932f8a3dbbd9a91e845df03d2be`, matching the pre snapshot. Current SHA256 `40c1623d907fb3e083b96a036c67ff6a7a5f3633e5e0b91ae816b008b92071c9` matches post. The only item changes are the accurate descriptive title and Proof 1.1. Original 1.1 suppressed the compatibility argument; current 1.1 supplies it explicitly. This is nonfatal: a competent reader can close the omission from coefficient uniqueness and overlap equality. Both endpoint dimensions, the unique top tuple (-1,…,-1), analytic rather than formal quotient, both Dolbeault comparisons and the rank-one evaluation test were checked. Risk review complete. The original Example section is byte-identical; no Statement/Definition or physical public-interface change, consumer repair or new lemma is needed. Synchronized the revised item title in the owning manifest; no additional item edit.

## Dispositions and source limits

Exactly three decisions are owed and supplied: `refuter:67:1` → `false_positive`; `reader:67:1` → `false_positive`; `touched:67:ex-qftx-gaga-analytic-untwisted-obstruction` → `accepted_repair`, confidence 1. Each maps to its own closed ledger record. False-positive rows preserve the reports' fatal classification as the alleged severity; they record no confirmed fatal mathematical defect. Original reader/refuter artifacts, hashes and scope remain unchanged. The scope contains no in-run-dependency finding, page decision or guarded downstream obligation.

Read the five current items, both current frontmatter-only pages, reader report/findings, refuter report, pre/post snapshots, owning contracts/manifest and cross-batch list (empty). Compared every contract citation's complete extracted source section with its actual current item section: all 24 distinct sources match. Read the direct mathematical supplier statements and relevant published Hörmander/corollary proof chain. Demailly Theorem 6.5 and its proof plus the (0,q) conversion on printed p. 378 were read from the rendered PDF. Other bibliography entries in authored items supply context; this adjudication does not attest a fresh complete reading of those books/notes or an independent re-audit of every deeper imported proof. No invented source retrieval or empirical precision.

The twist convention e_j=(Z_j/Z_i)^k e_i is consistent with homogeneous degree k modes; O(0) is trivial. Both pages preserve `page_layout: compact-v1`, inventories, draft status and empty bodies. No TikZ/tikzcd diagrams occur, and these calculations require no added diagram. All items are mathematics: there are no physical postulates, measured inputs or statistical inference. No defective published item was confirmed by the routed findings, so the published maintenance ledger requires no new defect entry. Published sources and imported snapshots remain unchanged. Frontier supplier/consumer disposition is recorded in `briefs/tasks/frontier-dependency-ledger.md`.

## Focused checks and handoff

Before review, `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-67.proof-contracts.json` identified four CRITICAL items and no errors. All four now have specific complete risk reviews; rerun with `--require-reviewed` reports 0 errors, 5 items routed. Scoped precheck across all five items reports four proof-bearing items checked, 0 failing. Scoped rendercheck across the five items and two pages passes all seven files. Final proof-layout on the touched item reports 1 item, 5 steps, 0 defects. No author item bytes were changed during adjudication; the accepted reader item is still the exact post snapshot. Only owning risk metadata and the manifest title were synchronized, alongside required reports/decisions/ledgers.

No unresolved routed blocker, escalation, withdrawal, outside consumer repair or remaining scientific task. These are local checks and adjudication dispositions, not judge stamps, publication approval or an engine gate battery. The engine owns hash stamping and subsequent gates.
