# Batch 79 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-79`.

Read the workspace rules, ordered dispatch, scope, reader report/findings, refuter artifact and pre/post snapshots. Pre and post item, contract and page bindings agree; the reader made no repairs. Exactly five finding obligations are routed, with no touched/page obligations.

## Completed level 0

`reader:79:2`: confirmed_nonfatal; repair_confidence: 1. The curvature lemma has steps 1.1, 2.1, 3.1. Its six-component contract check incorrectly named 2.1–2.2; corrected it to 2.1 and 3.1. The proof and public interface are unchanged. Read every proof step; explicitly verified the contraction, diagonal kernel equations, three off-diagonal signs and both directions of Ricci=0 iff R=0. Ricci symmetry follows from pair exchange with swapped contracted indices. Dimension three and nondegenerate Lorentz signature are retained. No choice use. Risk review completed in the owning contract after the initial risk-report run (HIGH 5).

Source: [Carlip](https://arxiv.org/html/gr-qc/0409039), §2.1 equation (2.1.1), retrieved and read; the local proof establishes the tensor identity independently. No empirical inference is involved.


## Completed level 1

`reader:79:3`: confirmed_nonfatal; repair_confidence: 1. Corrected the contract field-space derivative locator to 3.2 and disk example to 5.1. Also corrected the same finite-check row's sign typo: the second integral is of α2∧α1, not α1∧α2. The additional swapped-wedge sign typo is corrected within the same finite-check entry and recorded with this contract repair. The authored item is sound and unchanged.

Read all eight steps and each direct supplier: `def-qftx-cs-bf-actions`, `def-countable-choice`, `thm-general-stokes-theorem`. Checked compact support, outward-normal-first orientation, graded cubic variation, both integrations by parts, nondegenerate-pairing bump tests, gauge contraction, fixed-parameter charge and the disk integral. Countable choice is inherited exactly from Stokes; no full AC is added. The zero multiplier and empty boundary cases are explicitly valid. Risk review completed (HIGH 6).

Sources actually retrieved/read: [Khesin–Wendt](https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf), III §3.2, printed pp.184–186, Definition 3.11 and Proposition 3.12 calculation plus following presymplectic discussion; [Baez](https://arxiv.org/html/gr-qc/9905087), §2 including Remark 1; [Carlip](https://arxiv.org/html/gr-qc/0409039), §2.3 equations (2.3.1)–(2.3.14). Khesin's printed p.185 calculation displays a plus exact-derivative term; the preceding expression and the local graded Leibniz rule instead give the negative boundary sign used by the item. Source authority does not override that local computation. Its compact simply connected simple group hypotheses are stronger than the local definition; the local proof establishes the broader paired-Lie-algebra calculation. Baez explicitly qualifies omitted boundary terms; the item retains them. No source text was edited. PDF screenshot retrieval failed, so the sign observation is based on the retrieved PDF text, not a claimed visual inspection.


## Completed level 2

`reader:79:4`: confirmed_nonfatal; repair_confidence: 1. Corrected the contract Einstein trace locator to 5.1 and curvature transport locator to 4.1. Read all five proof steps and their four direct suppliers; no item edits were needed. Verified J's volume sign, injectivity, adjoint intertwining, invariant transported pairing and full variation space. On the invertible locus the induced connection has zero torsion and preserves the metric. The Koszul formula determines it uniquely and, solved using the inverse smooth metric, supplies smooth existence in the converse. Curvature transport matches the lemma's convention; the trace of G is -Scal/2. Both directions preserve the explicit spin-connection requirement. Empty U is vacuous; rank-deficient e remains admissible to BF, and no inverse is used there. ACω remains inherited. Risk review completed (CRITICAL 13).

The cited Carlip and Baez passages distinguish the invertible sector from degenerate BF configurations. The local result is a conditional mathematical correspondence, not evidence for a physical or quantum model. The zero-field counterexample was also read: e=ω=0 on the closed unit three-ball satisfies both BF equations and has rank-zero induced tensor. No empirical premises occur.


## Page obligations

`reader:79:1` and `refuter:79:1`: confirmed_nonfatal; repair_confidence: 1; same underlying unsupported-prerequisite defect. Read both page carriers, the two proposed supplier-page inventories and every assigned item. None uses the weighted RT or BV/BRST material. The A page is frontmatter-only; its action definition expressly excludes quantization and RT identification. Removed `qftx-modular-tqft-sewing` and `qftx-bv-brst` from the A page and owning pages manifest; retained `integration-of-forms-and-the-general-stokes-theorem`, actually used by the variation proof. Marked both consumer-owned cross-batch rows removed with exact reasons. Inventory, item ordering, all item bytes, and the B-page dependency are unchanged. No outside consumer needs a mathematical repair; no item public interface changed. The canonical plan and workflow transitions remain engine-owned.

No TikZ/tikzcd diagrams occur in the five items or two assigned pages, and the local tensor/form arguments require no added diagram. No published supplier defect was found in the direct uses reviewed, so no published-ledger write is warranted. Review is bounded to the direct suppliers and source sections described above; it is not a recursive audit of the mathematics library.

## Ledger, checks and handoff

Exactly five decisions are written in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-79-3a-decisions.json`. Four fixed, nonfatal `accuracy/ill-formed` ledger rows were appended with `caught_at_stage: 3a-adjudicate` and confidence 1. The page row is shared by the two reports of the identical defect; each finding decision references exactly one row. IDs end in `curvature-contract`, `variation-contract`, `gravity-contract`, and `page-prerequisites` under prefix `physics-non-fluid-129-2026-10-21-r2-3a-batch-79-`.

Actual successful local checks:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-79.proof-contracts.json` before reviews: 0 errors, HIGH 5 / HIGH 6 / CRITICAL 13 / MODERATE 3.
- The same command with `--require-reviewed` after all three completed risk reviews: 0 errors, four items routed.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-79.proof-contracts.json --strict`: 0 errors, 0 warnings, 4/4 checked.
- `node tools/physics-support/rendercheck.mjs library/quantum-field-theory-mathematics/qftx-chern-simons-bf-gravity.md`: one file passed.
- `node tools/physics-support/proof-layout.mjs items/lem-qftx-three-dimensional-curvature-determined-by-ricci.md items/prop-qftx-cs-bf-variation.md items/prop-qftx-three-dimensional-gravity-bf.md`: three items, 16 steps, 0 defects. These were read-only checks; no item was edited or precheck stamp manufactured.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2`: refreshed and deduplicated after the owned edge dispositions changed. The derived unified ledger was not edited by hand.
- Defect-ledger append validated all four new rows and refreshed its generated view under the tool's append lock.
- Scoped Python assertions verified exactly the five routed obligations, each with one fixed ledger record and matching adjudication reference; all five current raw item hashes equal both immutable pre/post snapshots; every finite-check proof-step locator resolves.

One attempted `frontier-dependency-ledger.mjs check` invocation returned usage because that tool supports `refresh`, not `check`; no validation success is claimed from it. Local `pdftotext` was unavailable; source sections were instead retrieved through the web PDF/HTML reader. No source-reading claim relies on that failed conversion. The six direct Stokes supplier Statements were also inspected for compact support, orientation, dimensional and choice hypotheses; their more remote closures were not re-audited.

No unresolved mathematical blocker or outside-consumer repair remains. All original item IDs, Statements/Definitions, dependency declarations, provenance and proof bodies are unchanged. Published/imported content remains read-only. No judging, stamping, certification, dispatch or gate battery was initiated; the engine owns subsequent hash stamping and gates, including canonical-plan reconciliation of the scoped page-prerequisite correction if required.
