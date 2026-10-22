# Batch 104 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-104`; role: alpha.
Scope: four touched carriers, two reader published-page findings, no page or refuter decisions. No judge, stamp, agent dispatch or engine gate is performed.

## Level 0: definition

`def-qsmx-toric-cellular-hamiltonian`: **amended_repair**, repair confidence 1. The reader correctly replaced the misleading oriented-cellulation title and made characteristic maps, multiplicities, coordinate pairings/transposes and finite paths explicit. No orientation data are needed over F2. The spaces, maps, Pauli matrices, support, units and closed-surface hypotheses are defined. Matrix commutation follows from boundary-squared zero. Connected primal and dual graphs remain explicit hypotheses; loops and repeated incidences are retained.

The old manifest Definition and title reconstruct the exact pre-reader carrier: replace the current Definition block with manifest[0].items[0].statement, retaining a single blank paragraph before Definition references, and restore the old title. Before synchronizing the manifest this gave SHA256 `c5607c690c2200a76f762f6f9e78a2e525b45c2b0aba80fe018cdf0487d02b7d`, exactly the immutable pre snapshot. Current bytes initially matched the post snapshot `1ec2fb95fd6aea48b5568e5c5b0e38ea9d5f84771585b5a877de956b1d8cbd04`. Thus there is no unknown historical delta. The manifold paragraph and dependency already present in that preimage are not attributed to the reader.

Independently opened all direct item/reference consumers: ground-space theorem, local-centralizer lemma, string theorem, endpoint example and batch-105 `ex-qsmx-double-z2`. Their actual uses preserve the same finite incidence and crossing conventions; no outside consumer needs repair. The latter uses only I(p1,q1)=1 and the unchanged crossing theorem. Page inventory/order is unchanged. Amended the source locator: Kitaev equation (4) is on PDF page 5, so equations (1)–(4) occupy pp.2–5. Synchronized this source locator and the corrected title/Definition in the owning manifest.

## Review checkpoint

Definition review complete. Next: finish ground-space risk review before the endpoint example and higher-level string theorem.

## Level 1: ground space

`thm-qsmx-toric-ground-space`: **amended_repair**, repair confidence 1. Exact preimage: `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/thm-qsmx-toric-ground-space.md`, SHA256 `38e9bdf600f980b768ea3473038e33ea2aa17cba8d4dc9cc3cacef7186b42682`. The initial current source exactly matched the post snapshot. The reader added correct quadratic-form and simultaneous-eigenbasis explanations to already sound finite-dimensional steps. Independently, pure X and pure Z support pairs are independent, so the stabilizer expansion has no hidden negative identity. Its trace gives dimension 2^(E−V−F+2). The positive quadratic form proves both directions of the kernel equality. Vertex and face product identities force at least two violations of either violated type. One-edge excitations attain the bound on L>=3 square tori. The Euler supplier's exact nonempty compact connected orientable boundaryless hypotheses and inherited AC are present; genus zero gives dimension one. A one-vertex, one-face torus with identity stabilizers has no excited sector and is covered by the +infinity convention. Zero couplings are excluded.

Corrected the definition of frustration freeness: a common zero vector alone would be automatic for all linear maps; the intended assertion requires a common **nonzero vector in the kernels**. The proof already supplies it. Corrected the Kitaev equation-(4) page locator as above. Manifest statement/source mirrors agree. The only direct item/reference consumer is `thm-qsmx-toric-strings-and-local-tests`; its F2 and step 1.2 use precisely the established nonzero common eigenspace and require no repair. The owning A page only inventories the theorem. No further interface propagation is needed. CRITICAL risk review is complete in the owning contract before advancing to level 2.

## Level 1: endpoint example

`ex-qsmx-toric-defect-pair`: **reviewed_no_defect**, `change_kind: audit_enrichment`, no defect IDs. Preimage `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-boundary-proposal-4/sources-read-final/ex-qsmx-toric-defect-pair.md` hashes to `d8bf885d5254134bb545756ef7ad03c4cb6c674ab85e5e28ff7b41f8376974de`; current source matches immutable post `8f6cdd5be989e7afd90ced44f795665c39ba409df87166cda32b1e7e50036561`. The reader's quadratic-form expansion is sound explanation of the previous immediate kernel identification, and contract finite-check step locators now match. Ordered X-then-Z stabilizer products give no negative identity terms, so the trace is positive without AC. Simple distinct-endpoint paths have exactly two odd incidences. Their strings are invertible, preserve nonzero ground vectors, and flip precisely the endpoint constraints; positive penalties give the two exact energy sums. This holds throughout a degenerate ground space and for one-edge paths. Closed/empty paths are outside the stated setup. No statistical or physical conclusion is made. The three-edge TikZ patch correctly displays two red endpoint vertices and two internal black vertices; it does not assert those endpoints are identified on a minimal-size torus. No diagram repair is needed. Item complete before level 2.

## Level 2: strings and compression

`thm-qsmx-toric-strings-and-local-tests`: **reviewed_no_defect**, `change_kind: audit_enrichment`, no defect IDs. Exact preimage in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/` hashes to `8ff6571d80118f22fbd84f32a6fdee88e4c27147706e4e996e1748b6a283ed64`; current source matches post `99df8409537e84cdfe983d7e2f7d6a14eee1f7482b8ccc65b3a2346b6dac4899`. The reader made the existing finite Pauli expansion explicit, without repairing a substantive mathematical defect. All Pauli terms remain supported inside the same disk. Anticommuting terms compress to zero and centralizing terms compress to P0. The scalar is the sum of the latter coefficients and may be complex. Empty support, zero and non-self-adjoint operators are included. Global logical loops are excluded by the complement-cycle hypothesis.

Opened the entire unchanged `lem-qsmx-toric-local-pauli-centralizer` proof and its contract as an actual supplier, not as an extra routed decision. Connected graph ranks give dim H1=2. Its dual-cycle intersection functionals vanish on boundaries and detect the two primal basis classes. Disjoint support forces b to be a face boundary and a to vanish on every cycle. The induced functional on im(partial1) extends in a finite-dimensional space and is represented by a coordinate vector u, so a=partial1^T u. Finite basis extension requires no arbitrary-index choice. Products in the canonical X(a)Z(b) order are actual stabilizers without an unaccounted sign. This proves exactly the supplier statement used in compression. AC remains explicitly inherited from the ground-space theorem; there is no physical premise. CRITICAL risk review is complete.

The string TikZ shows a horizontal primal representative and vertical dual representative, with opposite boundary sides identified. Its single shared-edge crossing gives odd parity. Its dual endpoints on the square boundary are identified and can be understood as a subdivided dual edge. The proof uses only Pauli algebra and the independently proved centralizer lemma. Both assigned item diagrams are correct; the compact A/B pages have no diagrams and require no additions.

## Published-page findings

`reader:104:1` (`classification-of-compact-connected-surfaces`) and `reader:104:2` (`relations-functions-and-quotients`): **false_positive**. The named theorem and Choice definition both explicitly contain `status: published`, and each named published page lists its supplier. Checked their complete frontmatter, the routed owned-consumer reachability, the actual Euler/Choice supplier statements and relevant proof, the pinned import receipt and committed original mathematics carriers. Exact raw SHA256 agrees in current imports, `research/math-imports.json`, and `git show HEAD:items/<id>.md`:

- `thm-classification-of-compact-connected-surfaces`: `1bee253c5ab6f983d475359119fa6ffaeea3b93898b836ad2eb431969af7994a`.
- `def-axiom-of-choice`: `b7ccec7b07d943518c5e392e0b3a3edd1952140776269b25dc3fd73f78475861`.

Several existing pre-Step-3 run supplier snapshots of the Choice definition independently have that same hash and published status, including `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-qft72-nullcone/supplier-snapshots/def-axiom-of-choice.md`. The refuter independently reports both status omissions absent. There is no evidence of an actual missing-status carrier followed by a correction: the source snapshot and committed original agree with the current source. This is stronger evidence than mere current repair. The reader did not bind observed item bytes; the scope's `split-current` fingerprint binds the page plus reachable members at routing, not an earlier item observation. No missing historical bytes are represented as recovered reader observations. The asserted status defect is unsupported and contradicted by the pinned/committed suppliers. Neither reader finding is relabelled as a repaired historical defect.

Each finding references exactly one closed false-positive ledger row and retains the exact consumer `thm-qsmx-toric-ground-space`. No defective published supplier is confirmed, so no published maintenance record or published-ledger edit is warranted. Imported and original mathematics remain read-only. This is a scoped-use assessment, not a new audit of the whole classification supplier chain.

## Sources and limits

Read actual local full-text PDFs in `research/physics-non-fluid-129-2026-10-21-r2-batch-104-sources/raw/` with PyMuPDF: Kitaev, *Fault-tolerant quantum computation by anyons*, §1 PDF pp.2–5, equations (1)–(4), and §2 PDF p.6, equation (5); Preskill, *Physics 219*, §§9.6–9.7 PDF pp.16–21, especially (9.20)–(9.22). Sources: https://arxiv.org/pdf/quant-ph/9707021 and https://www.preskill.caltech.edu/ph219/topological.pdf. The local source-reading record is earlier-author evidence; the passages above were independently read in this review. Kitaev's H0=-sum A-sum B corresponds to local J=K=2 after an additive shift. Preskill's -Delta/4 coefficient corresponds to J=K=Delta/2, so the pair gap is Delta. Genus-g counting, weighted gap and exact disk compression are locally proved; neither perturbative discussion is imported as a theorem or empirical evidence. The local papers' theoretical physical discussion supplies no measured input here.

Direct exact suppliers checked include `def-qsm-local-spin-algebras` (finite q=2 matrix factors), `def-topological-manifold-with-and-without-boundary` (Hausdorff, countable-basis, boundary convention), `def-r-orientation-of-a-topological-manifold` (generating continuous local integral-homology section), `def-axiom-of-choice`, the Euler-characteristic corollary and finite-CW Euler definition, and the classification theorem's relevant orientable classification/Euler-invariance argument. The latter passes the cell-count formula from canonical surface models to arbitrary finite cellulations. No entire transitive mathematical library audit is claimed.

The reader/refuter note a page-only evidence discrepancy: batch-104 cross-batch readiness text says nine batch-102 items while the current page has eleven. No owned item's prerequisite closure reaches a batch-102 Lieb–Robinson, spectral-flow or clustering theorem. Retained the original edge and its evidence; reported the stale count to the owner here and in the owned frontier ledger. This is an off-scope evidence alert, not an invented item finding or independent certification of batch 102. No withdrawal, new item or page was introduced.

## Validation checkpoint

All six routed decisions authored; final scoped checks pending. Only the definition and ground-space item carriers and their owning manifest mirrors were amended; both required risk reviews were added. Reader-only proof enrichments and the untouched centralizer remain intact. No unresolved mathematical prerequisite or outside consumer repair remains.

The first strict contract check found a stale verbatim quote in the endpoint example's F1: the reader had changed “is a path” to “is such a path” in the definition. Updated that contract quote to the exact current source; this is mechanical quote synchronization, not a newly invented mathematical defect. The first scoped precheck and render checks passed. Final strict/risk/layout results follow below.

## Final focused checks and handoff

All commands below ran in the physics workspace on final relevant bytes:

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-104.proof-contracts.json --strict`: exit 0, 4/4 proof-bearing items, zero errors/warnings after the exact-quote synchronization.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-104.proof-contracts.json`: exit 0 before reviews; two CRITICAL items identified. Final rerun with `--require-reviewed`: exit 0, four routed items and zero errors. Both CRITICAL reviews contain specific step, supplier, boundary, choice and scope evidence.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the four touched item paths: exit 0, all three proof-bearing items pass; definition has no proof body. No item changed after this check.
- `node tools/physics-support/rendercheck.mjs` on those same four paths: exit 0, all four files parse, zero math/YAML errors. This tool checks math/frontmatter; diagram correctness was separately checked from the actual TikZ as described above, without claiming a compiled diagram audit.
- Required final `node tools/physics-support/proof-layout.mjs items/def-qsmx-toric-cellular-hamiltonian.md items/thm-qsmx-toric-ground-space.md items/ex-qsmx-toric-defect-pair.md items/thm-qsmx-toric-strings-and-local-tests.md`: exit 0, **4 items, 15 steps, 0 defects**. No item edits followed.
- Ledger append validated and appended six rows: four fixed substantive/bibliographic defects, two false-positive dispositions; no row was fabricated for the mechanical contract quote mismatch. Exact six-obligation coverage, closed ledger references, one row per reader finding and all five current manifest statement mirrors were checked with explicit Python assertions.

Final raw item hashes (currency evidence only; engine stamping remains pending):

- `def-qsmx-toric-cellular-hamiltonian`: `075d1f5ddfdc85937357785608d6304dfb6bfa800dbe1a5f395cb1eda75bd158`.
- `thm-qsmx-toric-ground-space`: `299f4ba1bb01a85a06e345623581ebf306c891e7a41fb1a9624ff480e42ff587`.
- `lem-qsmx-toric-local-pauli-centralizer`: `21a0727cfbb780431fbef3334ba62cf5b05974dbe4d2ecbb07147493f53f1437`.
- `thm-qsmx-toric-strings-and-local-tests`: `99df8409537e84cdfe983d7e2f7d6a14eee1f7482b8ccc65b3a2346b6dac4899`.
- `ex-qsmx-toric-defect-pair`: `8f6cdd5be989e7afd90ced44f795665c39ba409df87166cda32b1e7e50036561`.

No mathematical escalation or required outside-consumer repair remains. The stale batch-102 page-readiness count remains an owner evidence-maintenance alert; no off-scope proof review or repair is claimed. Published content, imports, root mathematics and original reader/refuter/scope/hash artifacts were not edited. No material proof rewrite or prior judge stamp was present. Next action belongs to the engine: stamp the decisions and run its ordinary gate battery.
