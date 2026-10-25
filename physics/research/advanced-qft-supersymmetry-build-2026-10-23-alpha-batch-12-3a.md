# Batch 12 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-12. Scope: batch 12 only. Engine owns stamps and gates.

## Dependency-order checkpoint

Completed level 2: `lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character`. All nine steps and exact direct suppliers independently read. Stability kills infinitesimal stabilizers and trace-annihilators; the unique torus lift gives nonnegative word weights, forbids J, and yields the monomial-ideal bijection in both directions. Inverse gauge compensation gives the displayed tangent character. The reader correctly adds the Laurent-polynomial slice action, compact/complex fixed-point equality and smooth fixed-scheme/Jacobian argument needed to exclude invariant tangents. Empty k=0 and N=1 cases, finite coefficients and inherited full AC checked. Current raw SHA256 a9cf32a93360c19e8ba7231fdca1837ebdd78316f6915ae9df6d9e80a763553a equals the post-reader snapshot; pre-reader fingerprint is 4e4bf1da7d0cc3f9d62f6b4c6349bb1db1f04cb4e1ce4874bfb293051472829d. Reader repair retained with confidence 1; final verdict amended_repair after metadata synchronization. Specific CRITICAL risk review recorded before proceeding. No item edit.

Sources opened: local raw ADHM definition, quotient proof (especially 6.1), three published fixed-scheme/Jacobian/linear-reductivity suppliers; Nakajima–Yoshioka https://arxiv.org/pdf/math/0311058 section 3.1, printed pp.17–19; Nekrasov https://arxiv.org/pdf/hep-th/0206161 sections 3.1–3.3. External readings check conventions; local proofs supply the actual deduction. No claim of independent reconstruction of all transitive supplier proofs.

Initial risk-report succeeded: five HIGH/CRITICAL items. Subsequent completed reviews and final dispositions follow.

Completed level 3: `def-framed-u-n-instanton-moduli-and-adhm-data`. Exact trace-normalized charge Definition read; Hodge/charge signs, specified smooth bundle/gauge data, moment-map types, stability equivalence, FI chamber versus level, sheaf polynomial and Uhlenbeck strata checked. The definition claims neither a quotient correspondence nor U(N) integrality. N>=2 is its own scope; the theorem's N=1 uses the independent raw-data definition. No change or decision owed. CRITICAL risk review complete.

Completed level 14: `thm-adhm-fixed-point-instanton-count`. All six proof steps checked. The core supplies the stable quotient; the sheaf transfer remains conditional, ordinary ASD uses the exact zero-FI regular and rank-one suppliers, and no ordinary-ASD series equality is asserted. Read both ordinary dictionary proofs and their exact first-order qualifications. Noncompact localization uses the independently defined inverse fixed-inclusion trace; the quotient meets smooth/separated/finite-atlas hypotheses and its finite reduced fixed locus is proper. Trace-shifting proves noncompactness at k>0. Empty k=0 coefficient is 1. CRITICAL risk review complete. Both touched carrier manifests still had old Statement wording; synchronized only those two statement fields, retaining all item bytes. Final touched verdicts are amended_repair for this necessary metadata completion.

`refuter:12:1`: false_positive. Zero-FI current raw hash 5076f5fdabc85b0d37a19d2e97509c02836f94cc1a97597bf6e5636784bdb43f equals HEAD and batch-60 pre-reader snapshot. Rank-one current raw hash f660cdb4c7b496bd0ce6c3dd7dcfb6684284004ae032fda0498ade1000551ffc likewise equals HEAD and batch-60 pre-reader snapshot. Zero-FI lists ten dependencies, none the rank-one lemma, and its proof uses only rank N>=2. Rank-one lists zero-FI and uses it to stabilize W to rank two, preserving V, I'J'=IJ and costability. Producer manifest edges and cited contract sources agree with this direction. Full actual deps closure of the assigned theorem: 5391 items, no cycles. Thus this is not a repaired historical cycle: the supposed reverse edge is absent already in the immutable producer baseline. No producer edit or owner resolution is needed. The closed false-positive ledger row retains the original fatal severity and allegation.

Completed both level 15 examples in order. U(1): I nonzero and IJ=0 force J=0; scalar gauge fixes I=1 and quotient coordinates are B1,B2, so tangent character t1+t2 and degree-one reciprocal Euler factor follow. U(2): exactly two one-box colors; substitutions V=e1 and V=e2 yield the four stated additive weights and correctly signed Euler products. All three steps of each Verification checked, with independent variables, inherited AC and formal-series scope retained. The U(2) TikZ correctly depicts the two one-box colorings; no missing diagram is needed. Both risk reviews complete, no decisions owed and no item edits.

Focused contract check first reported six metadata errors: duplicate F3/source pair and unsupported source_section `Proof step 6.1` caused two lost use mappings; both examples retained pre-reader F2 quotations. Removed only the duplicate pair, preserved its actual proof locator as supplementary metadata, retained the original Statement citation and union of its three actual uses, and refreshed both example quotes to the current theorem. These are contract maintenance issues, not additional mathematical defect-ledger rows. Strict recheck passed: 0 errors, 0 warnings, 5/5 items.

## Final dispositions and consumer review

Exactly three decisions, all complete:

| Obligation | Verdict | Ledger suffix |
|---|---|---|
| touched:12:lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character | amended_repair, confidence 1 | batch-12-core-word-indices |
| touched:12:thm-adhm-fixed-point-instanton-count | amended_repair, confidence 1 | batch-12-theorem-word-indices |
| refuter:12:1 | false_positive | batch-12-alleged-dictionary-cycle |

Ledger IDs have the run prefix. The first two rows record the nonfatal omitted word-index domains, fixed by the reader; the added algebraic-slice details are a sound expansion of the already stated supplier result, not a fabricated fatal gap. The third retains the original fatal allegation with false-positive disposition. No reader finding or page decision is owed. No metadata failure was turned into a mathematical defect row.

The two touched HEAD preimages were read from commit `b12e4e0b9023b24743ed8811e173c621696d2341`, at `physics/items/<id>.md`, and their raw hashes match the immutable pre-reader snapshots. All five current item hashes equal their post-reader snapshots. Alpha changes only the owning manifest/contract, reports/decisions and required ledgers; no item or page source changed, no material proof rewrite or judge-record invalidation occurred. The two touched public statements retain all original claims and add explicit indices and already conditional dictionary qualifications.

Actual direct consumers were found by item/reference searches. The core's theorem, `pthm-qftx-omega-background-fixed-point-expansion` (batch 51, F2/A2 and Proof 1.1–4.1) and `ex-qftx-s4-n2-partition-function` (batch 50, F2 and Verification 1.1/3.1) use exactly the stable positive-FI quotient, partition labels and dual-framing tangent character. They keep their source-specific physical assumptions and regulator limitations separate. No affected consumer requires a source edit. The theorem's only item consumers are the two assigned examples, checked completely; their stale contract quotations were refreshed. No further interface hop is needed. A/B pages are frontmatter-only, draft, compact-v1, with correct inventories and empty bodies. No page repair or additional diagram is needed.

## Published suppliers and remaining ownership limits

Read-only imports `lem-multiplicative-type-groups-are-linearly-reductive` and `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions` match their import pins. Their proofs support the exact complex-torus uses under AC, but each published frontmatter has only a judge pass and lacks the schema-required audit/verified/recorded-repair publication evidence. Recorded both nonfatal metadata findings, exact IDs/hashes, suppliers and original-owner repair strategy in `research/published-consumer-supplier-ledger.md`, maintaining its deduplicated index after exclusive acquisition and reread under `research/.published-consumer-ledger.lock`; released only this dispatch's lock. Both original-owner maintenance records remain OPEN. This review creates no replacement audit stamp and edits no imports.

Existing cross-batch OPEN readiness/history records are preserved; their separate owners retain native review/closure duties. No substantial mathematical prerequisite gap in the assigned conditional deductions remains unresolved here. No proposed withdrawal. Review of the separate dictionaries checks their exact conditional interfaces and the complete zero-FI/rank-one arguments; it does not independently reconstruct every transitive analytic/GAGA/normal-form proof. The 5391-item dependency traversal checks metadata acyclicity, not 5391 proofs.

## Source locators and validation

Independently opened [Nakajima–Yoshioka](https://arxiv.org/pdf/math/0311058), section 3.1, printed pp.17–19 (zero-based PDF pages 16–18), including the complete Theorem 3.2 and Notation 3.3. These specify the framed-sheaf setting, partitions and tangent-character convention. Independently opened [Nekrasov](https://arxiv.org/pdf/hep-th/0206161), sections 3.1–3.3, PDF pp.13–16 (zero-based pages 12–15), equations (3.1)–(3.9), for matrix/moment-map conventions and noncompact positive-level scope. No contour-residue proof or continuum path-integral construction was inferred. The actual algebraic quotient, fixed-tangent and noncompact trace deductions were checked in the local cited carriers.

Actual focused checks after metadata amendments:

- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-12.proof-contracts.json --strict`: 5/5 checked, 0 errors, 0 warnings.
- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-12.proof-contracts.json --require-reviewed`: all five HIGH/CRITICAL reviews complete, 0 errors. Initial run without this flag preceded review.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the five explicit assigned item paths: all four proof-bearing items passed; the definition has no proof to precheck.
- `node tools/physics-support/rendercheck.mjs` on the five explicit items and two assigned page paths: 7 files, all YAML and KaTeX checks pass. This check does not claim a production TikZ compilation.
- Required final batched layout check: `node tools/physics-support/proof-layout.mjs items/lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character.md items/thm-adhm-fixed-point-instanton-count.md`: 2 items, 15 steps, 0 defects. No later item edit.

No agent dispatch, judge cycle, acceptance/self-certification, decision-hash stamping, publication, commit or engine gate battery was initiated. The engine owns stamping and subsequent gates.
