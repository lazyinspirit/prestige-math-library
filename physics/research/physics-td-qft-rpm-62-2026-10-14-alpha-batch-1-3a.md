# Batch 1 Step 3a adjudication

Run: physics-td-qft-rpm-62-2026-10-14. Role: alpha. Group: batch-1. Scope: batch 1; exactly refuter:1:1. No reader, touched or page decisions are owed.

## Finding and repair

post-td-bulk-additivity, Postulate: confirmed_fatal, repaired with repair_confidence 1. The original equation evaluated n_(A,j) even when that species was absent from A's constitution. def-td-equilibrium-state-domain defines only its listed positive coordinates. Mentioning a separate boundary supplied neither a map nor a state in that boundary. For example, a hydrogen-only A and oxygen-only B require an undefined oxygen coordinate on D_A. This is ill-formed, not an empirical disagreement or an omitted elementary proof step.

The item's raw SHA-256 before editing was 4f5a2f34e5086a53a527a0b2feb36df99a20f1659e3e376d278c8a073a4fe274, exactly the item_sha256 in both immutable Step-3 pre and post snapshots. Their contract and manifest fingerprints also agree. The reader made no repairs; its favorable account of the boundary sentence does not resolve the typing defect. The refuter's observed fingerprint is retained in the routed scope; no original report or snapshot was changed.

The repair fixes the constituent constitutions and a distinct union species ordering. For each union label, a_(s,j) is a total map on the existing D_s: use the uniquely corresponding dimensioned coordinate if present, and 0 mol otherwise. The compound constitution uses the union list. Its sum for every species is strictly positive because at least one constituent contains that species with positive amount. This does not insert zeros into any positive-mole chart, presume a boundary extension, or derive physical realizability. The composition map's output membership remains adopted model data. Scaling retains the ordered species and SI conventions, positive scale and distinct tag. Energy, volume, admitted-pair and physical-scope exclusions remain intact.

Shared, disjoint and differently ordered lists are covered. An empty admitted-pair set is permissible and asserts no existence of a pair. Zero and negative scaling remain excluded. No choice axiom, regularity at a composition boundary, empirical premise or statistical precision is introduced. No Proof section is appropriate for this adopted postulate.

The carrier, its manifest statement and its nonproof formulation/scope/source and risk reviews were updated. No IDs, dependency edges, pages or source URLs changed. There was no judge record to invalidate.

## Suppliers and source evidence

Read all six direct dependencies at their current definitions: def-td-equilibrium-state-domain supplies constitution-specific positive mole coordinates; def-td-system-and-permitted-exchanges supplies outer-boundary and compound bookkeeping; def-td-si-quantities supplies dimensioned scalar conventions; def-cartesian-product supplies exactly pairs of states; def-function-space supplies function evaluation and tuple conventions; def-subset-and-proper-subset supplies admitted-subset inclusion. Mathematical imports and their original sources remain read-only; their transitive proofs were not re-audited.

Independently retrieved [Lieb and Yngvason, section II.A.1](https://arxiv.org/pdf/cond-mat/9708200v2), printed pp. 13–15 (PDF indices 12–14), including the complete composition/scaling passage and examples. It presents constituent product states and positive scaling of energy, work coordinates and matter, with microscopic and gravitational limitations. Its hydrogen/oxygen examples distinguish separated, mixed and reacted systems. The local total-coordinate composition map and zero bookkeeping are adopted model conventions, not a theorem quoted from that source. Independently retrieved [OpenStax Volume 2 section 3.1](https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems) for system/boundary context. Neither source is treated as empirical proof of additivity or as providing an absent coordinate map.

## Consumer review

Searched current items and pages for the supplier ID and checked the actual cited uses and relevant hypotheses. All direct consumers remain sound under this clarification; no necessary consumer repair changes a further interface, so propagation stops here. These are focused use checks, not whole-item re-audits.

| Consumers | Actual use and disposition |
|---|---|
| post-td-concave-fundamental-entropy | Same admitted composition map and separate entropy-additivity law; no boundary extension assumed. |
| def-td-isolated-compound-feasible-set, def-td-scaled-products-and-comparison | Add dimensioned constituent totals on admitted compounds; aligned species sums now have explicit maps. Constituent endpoint product spaces and formal empty unit are unaffected. |
| post-td-common-bulk-constitutive-law, post-td-accessibility-a1-a6, def-td-thermal-join | Positive tagged scaling; the join uses its own common species list and retains work coordinates. No use of an absent positive coordinate or a new zero scale. |
| pthm-td-concave-stability, pthm-td-euler-and-gibbs-duhem, pthm-td-clapeyron-local | Distinct-tag scaling versus separately assumed common constitutive law; unaffected. |
| pthm-td-interior-exchange-equilibrium | Additive totals; species derivatives apply to a nonzero bilateral feasible coordinate direction in open charts. An absent species supplies no such varying coordinate, so bookkeeping zero introduces no chemical potential or derivative. |
| pthm-td-intensive-coexistence-conditions, pthm-td-regular-gibbs-phase-rule | Same declared species list and interior bilateral exchanges; all relevant coordinates already exist. |
| def-td-phase-and-coexistence-domain, ex-td-phase-fraction-lever-rule | Common phase species, positive phase amounts and additive volume/amount totals; unchanged. |
| post-td-entropy-maximum, pthm-td-fixed-tp-reaction-potential-minimum | Isolated-compound totals and separately assumed entropy sum; no species-boundary extension is used in the deduction. |
| ex-td-noncompact-entropy-supremum-not-attained, ex-td-local-entropy-maximum-below-global, ex-td-retained-volume-thermal-equilibrium | Fixed positive amounts, additive energy and unchanged tagged scaling; example conclusions unaffected. |
| cex-td-tagged-scaling-not-fixed-type-homogeneity | One-species toy family with positive coordinate addition and distinct scaling tags; counterexample still applies. |
| td-thermodynamic-framework | Page describes restricted adopted separated-system additivity and energy exclusions; unchanged. |

All these item/page carriers are draft. No defective published supplier or consumer was found; no published-ledger entry is warranted. Owned prerequisite IDs and roles did not change. The existing batch-1 cross-batch input is unaffected by this species-map correction; other owners' inputs remain untouched.

## Checks and handoff

Initial batch-1 risk-report: exit 0; MODERATE post-td-bulk-additivity and post-td-first-law-energy, ORDINARY ex-td-si-unit-arithmetic, MODERATE ex-td-first-law-sign-convention; no HIGH or CRITICAL items. A specific complete Alpha risk review was nevertheless recorded for the repaired postulate.

Final focused checks:

- node tools/tsx-run.mjs tools/physics-support/precheck.mts items/post-td-bulk-additivity.md: exit 0, one nonproof structure checked, zero failures.
- node tools/physics-support/rendercheck.mjs items/post-td-bulk-additivity.md: exit 0, one file; YAML and every math span parse under the actual renderer parsers.
- node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-1.proof-contracts.json --strict --items post-td-bulk-additivity: exit 0, 1/1 checked, zero errors or warnings.
- node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-1.proof-contracts.json --require-reviewed: exit 0, four items routed, zero errors; no HIGH/CRITICAL items.
- Final manifest/body equality and decisions JSON checks passed. Final item raw SHA-256: cd1b43c0b56f70bbb11c2870ca218c8595759529e1977a2d60504c1294baec31.
- The append utility successfully added exactly one closed row, physics-td-qft-rpm-62-2026-10-14-3a-batch-1-absent-species-amount-map, and refreshed its generated ledger view. The sole flagged decision references that row with repair_confidence 1.
- After the final item edit, node tools/physics-support/proof-layout.mjs items/post-td-bulk-additivity.md failed before rendering: ERR_MODULE_NOT_FOUND for package @/components imported by /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx. A retry with TSX_TSCONFIG_PATH=/Users/ianx/Projects/prestige-intelligence/web/tsconfig.json also exited 1 with the identical resolution error. No layout pass or blue-chip scan is claimed. This postulate has no numbered proof steps. The mechanical renderer failure creates no content defect-ledger row and does not justify editing outside the dispatch.

No substantial missing prerequisite, consumer repair, owner disposition or historical-byte uncertainty remains. The outstanding validation limitation is the renderer alias resolution above; the owner must restore that runtime and rerun the explicit layout check. The engine owns hash stamping and the gate battery; this report grants no judgment or certification.
