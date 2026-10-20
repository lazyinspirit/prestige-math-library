# Step 3a adjudication — batch 17

Run: `machine-learning-all-101-2026-10-19`; group: `batch-17`.

Scope: exactly four refuter obligations, no touched/page/reader obligations. Reader made no changes; pre/post snapshot item, contract and manifest hashes agree. Live autopilot status inspected; engine owns transitions. No judging, stamping or publication performed.

## Level 1: cost-complexity definition

`refuter:17:2`: confirmed_fatal (citation-inaccurate). Independently read the complete current Definition and supplier `def-empirical-decision-tree`. Finite binary trees and nonempty node samples make all losses finite; an internal subtree has at least two leaves, so its quotient denominator is positive. Collapsing k leaves removes k−1 leaves. The criterion and explicit absence of an optimality/test-risk claim are sound, including alpha=0 and a root-only tree (no quotient evaluated).

Official MIT PDF displayed p.13 discusses C4.5 bounds; p.14 supplies CART classification cost complexity and p.16 its regression counterpart. Corrected both source metadata and Definition reference from “13 and 16” to “14 and 16”; no Definition or proof changed. Repair confidence: 1. No consumer interface changed; manifest and provenance remain accurate. Source: https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf (download independently extracted with PyMuPDF). Defect ledger/decisions and local checks completed below.

Next: finish mean theorem review and its CRITICAL risk review before level 2.

## Level 1: mean theorem

`refuter:17:4`: confirmed_fatal (citation-inaccurate); corrected both occurrences of slide 15 to slide 16, repair confidence 1. Complete current proof and all four direct cited suppliers reviewed. The published least-squares proof and its nearest-projection and adjoint-kernel arguments were opened as supporting context; no defect found. The map T(c)=(c,…,c) is real linear with adjoint the coordinate sum; its normal equation is Nc=sum y. N>=1 gives uniqueness; squared norm and norm have the same minimizers. The independent expansion gives minimum RSS and covers zero, singleton and constant responses; empty I is correctly excluded. No AC, statement change, consumer repair or diagram. CRITICAL risk review completed in the owning contract before advancing. ESL printed p.307 equations (9.10)–(9.14) checked from the full 764-page authors-linked Drive PDF; relevant pp.305–310 were read. Exact source URL remains in the carrier. No manifest/provenance delta is needed.

Next: level-2 greedy procedure.

## Level 2: greedy procedure

`refuter:17:1`: confirmed_fatal (citation-inaccurate); extended the MIT locator from slides 14–15 to 14–16 in metadata and reference, repair confidence 1. Reviewed complete inputs, output, three instructions and the already-reviewed two suppliers. Exact real midpoints lie strictly between adjacent distinct coordinates, hence both children are nonempty. All scores are finite; the finite (j,k) order resolves ties. The final stopping instruction handles empty candidates and depth zero; repeated values are deduplicated. The procedure explicitly allows zero improvement and makes no global optimality claim. Recursion calls the same procedure operationally, with no logical self-edge. No mathematical interface, manifest or provenance change. Source context: ESL pp.307–310; MIT displayed pp.14–16, with the missing greedy objective on p.16.

Next: level-3 correctness/termination risk reviews.

## Level 3: greedy correctness and termination

`refuter:17:3`: confirmed_fatal (citation-inaccurate); corrected both MIT ranges to 14–16, repair confidence 1. All three proof steps and F1–F3 reviewed. Every admissible threshold belongs to a unique adjacent-value gap and matches its midpoint partition. Finite comparison and the fixed order attain a deterministic minimum; regression means use the prior theorem, classification uses its declared impurity. Finite depth with binary branching terminates, and disjoint nonempty sample leaves also bound splits by n−1. Depth zero, no variation, n=1, endpoint thresholds and score ties are handled. Only nodewise optimality is claimed. HIGH risk review complete; no mathematical interface/proof change or consumer repair.

Next: pruning termination at the same level.

## Level 3: pruning termination

Risk-only obligation completed without a decision row or item edit. Read the complete pruning procedure and all three theorem steps and cited suppliers. Internal subtrees have k>=2 leaves, so g is a finite real quotient. At L>1 the finite nonempty candidate set includes the root. A minimizing collapse decreases L by k−1>=1 and preserves the tree/sample conditions; L=1 is exactly the root leaf. Thus L0−1 is valid, including zero operations for L0=1. Fixed path order handles ties and zero quotients; no AC or optimality theorem is needed. ESL p.308 supports the pruning procedure; termination is proved locally. HIGH risk review complete.

Next: level-4 threshold example and its diagram.

## Level 4: threshold example

Risk-only review complete, no decision row or edit. Exact rational recomputation gives RSS (2/3,0,2/3), means (0,1) at the unique middle split. The root is at depth zero and its resulting child leaves are at depth one, where the cap stops recursion. “Root split has depth 1” refers to that one-level split; no second depth convention is needed. TikZ predicate, holds-left/fails-right interpretation, two branch endpoints, feature values and predictions agree with the text. All three Verification steps and cited suppliers reviewed; no missing diagram needed and the argument is independent of the diagram. HIGH risk review recorded; all four required risk reviews are complete.

## Scope and remaining checks

All assigned statements/definitions/examples are uninterrupted and preserve mathematical hypotheses. Citation corrections change references and metadata only: no Statement/Definition, mathematical proof, dependency list or page changes. Existing provenance and manifest remain valid; no judge record is present in these four carriers. No published defect, unresolved prerequisite, withdrawal or out-of-batch repair identified. The owned cross-batch dependency artifact is []; published suppliers were read as context only. Ledger/decisions and all focused checks are completed below.

## Decisions and observation bindings

Exactly four `flagged` decisions are recorded, in dispatched item order: refuter:17:2, :4, :1, :3. Each confirmed citation defect has a distinct fixed fatal ledger row named `ml101-b17-3a-{cost-complexity,node-mean,greedy-procedure,greedy-theorem}-mit-locator`, referenced by its decision, with repair_confidence=1. The scope observed_sha256 values bind the immutable item/contract/manifest carrier tuple, not the raw item bytes; no unbound historical observation or owner historical resolution is involved. Current raw item pre-edit SHA-256 equaled the reader-post snapshot item_sha256 for all four carriers (verified before repairs).

Downloaded source SHA-256: MIT `25ef452680171d453607687294548d7e148abb04ffdf490af2297363d804dd7c`; ESL `8d098d65cf53925ba0fc13a52a2790d48a32433223cbd876d0a527cd1afe2e0f`. Source PDFs are temporary retrievals, not new authored artifacts. The guessed direct ESL download route failed; the exact authors-linked Drive URL in item metadata fetched the complete 764-page book. No source retrieval failure was used as evidence of a mathematical defect.

## Final local validation and handoff

- Reflow on the four changed item paths: all unchanged; existing proof layout preserved.
- Precheck on those paths: 2 proofs checked, 0 failing; definition and algorithm have no phase proof.
- Rendercheck on those paths: 4 files pass, including actual KaTeX and YAML parsing.
- Strict proof-contract check on owning batch: 9/9 items, 0 errors, 0 warnings.
- Risk-report before reviews: identified the four routed HIGH/CRITICAL items; after completing each review in dependency order, --require-reviewed reports 0 errors for the batch.
- Final required single batched proof-layout invocation on all four changed paths: 4 items, 8 steps, 0 defects. No item edits followed it.
- Ledger append tool: 4 fixed rows appended and generated view refreshed. Decision/ledger bijection checked locally: exactly four owed obligations, one distinct fixed row each.
- Frontier-dependency ledger appended with owned consumer/interface review; existing empty cross-batch record preserved. Manifest, provenance, pages and published items unchanged.

No unresolved blocker remains in this dispatch. Full native gate battery, current hash stamping, judging and stage transitions are intentionally left to the engine; the listed checks are local evidence only.
