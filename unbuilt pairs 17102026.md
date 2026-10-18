# Mathematics pair build and publication status — 17 October 2026

**149 completely unbuilt; 3 partially built and partially published; 215 fully built and fully published.**

The requested GPT-6 Luna agent at max effort audited the 218 pairs excluded from the completely-unbuilt list. This table covers the **367 pairs across 31 categories in the original list**, not every pair in the library. Machine learning and physics are excluded. It reflects the current local working tree, not the deployed VPS.

The earlier method incorrectly treated blank A/B page summaries as missing drafting even when their inventories rendered substantive, published items. A blank summary alone does not make a pair unbuilt or a content stub. Publication metadata alone does not establish drafting completeness.

The original report saved category totals but no pair IDs. A current replay of its exact classifier reproduces all 367 pairs and every original category total; the IDs are therefore labeled as current replay rather than a recovered historical snapshot. See [the replay and inclusion reasons](research/non-ml-math-original-rule-replay-2026-10-17.json).

| Category | Completely unbuilt | Partially built and not published | Partially built and partially published | Fully built and not published | Fully built and partially published | Fully built and fully published |
|---|---:|---:|---:|---:|---:|---:|
| Abstract Algebra | 3 | 0 | 0 | 0 | 0 | 30 |
| Algebraic Topology | 1 | 0 | 0 | 0 | 0 | 0 |
| Braid Groups | 0 | 0 | 0 | 0 | 0 | 1 |
| Category O and Geometric Representation Theory | 3 | 0 | 0 | 0 | 0 | 0 |
| Category Theory | 0 | 0 | 0 | 0 | 0 | 9 |
| Combinatorics | 0 | 0 | 0 | 0 | 0 | 32 |
| Commutative Algebra | 0 | 0 | 0 | 0 | 0 | 3 |
| Complex Analysis | 0 | 0 | 0 | 0 | 0 | 11 |
| Coxeter Groups | 0 | 0 | 0 | 0 | 0 | 3 |
| Differential Geometry | 3 | 0 | 1 | 0 | 0 | 0 |
| Functional Analysis | 1 | 0 | 0 | 0 | 0 | 0 |
| Group Theory | 0 | 0 | 1 | 0 | 0 | 6 |
| Hall Algebras and Tensor Categories | 11 | 0 | 0 | 0 | 0 | 0 |
| Hecke Algebras and Categorification | 1 | 0 | 0 | 0 | 0 | 0 |
| Homological Algebra | 3 | 0 | 0 | 0 | 0 | 1 |
| Hopf Algebras & Hecke Algebras | 4 | 0 | 0 | 0 | 0 | 0 |
| Information Theory | 24 | 0 | 0 | 0 | 0 | 0 |
| Lie Theory | 2 | 0 | 0 | 0 | 0 | 0 |
| Linear Algebra | 0 | 0 | 0 | 0 | 0 | 15 |
| Measure Theory | 0 | 0 | 0 | 0 | 0 | 6 |
| Number Theory | 0 | 0 | 0 | 0 | 0 | 11 |
| Numerical Linear Algebra and Approximation | 27 | 0 | 0 | 0 | 0 | 0 |
| Numerical PDEs and Spatial Discretization | 44 | 0 | 0 | 0 | 0 | 0 |
| Quantum Algebra and Representation Theory | 14 | 0 | 0 | 0 | 0 | 0 |
| Quantum Algorithms | 1 | 0 | 0 | 0 | 0 | 0 |
| Quantum Computing | 3 | 0 | 0 | 0 | 0 | 0 |
| Quantum Groups and Crystal Bases | 2 | 0 | 0 | 0 | 0 | 0 |
| Real Analysis | 0 | 0 | 1 | 0 | 0 | 50 |
| Representation Theory of Groups | 2 | 0 | 0 | 0 | 0 | 0 |
| Set Theory | 0 | 0 | 0 | 0 | 0 | 6 |
| Topology | 0 | 0 | 0 | 0 | 0 | 31 |
| **Total** | **149** | **0** | **3** | **0** | **0** | **215** |

A completely unbuilt pair has no actual pair-specific mathematical exposition, proof, worked example, or substantive item carrier. Planning and splice scaffolds alone count as unbuilt. A fully built pair has its required mathematical content authored, either in the pages or their item carriers; this is an authoring inventory, not a proof-correctness audit. “Partially published” covers an incomplete planned pair with some published content, even when all existing carriers are published.

The three partial cases are:

- **Differential Geometry — Sard/transversality:** both pages and existing carriers are published, but two statement-only false-statement/counterexample carriers explicitly have unsupplied refutation/counterexample content.
- **Group Theory — Frattini subgroups/Burnside basis theorem:** 36 substantive published item carriers exist, but neither A nor B page exists and those items have no current page-inventory home.
- **Real Analysis — monotone functions/discontinuities:** pages and all 43 existing relevant items are published, but the current plan still lists the absent `ex-conway-base-13-function`. Earlier reconciliation instructed removal of that plan entry; this is a stale-plan inconsistency, not an inferred instruction to author an unsupported example.

The 149 completely unbuilt pairs comprise 99 with no A/B page files or planned item carriers and 50 with planning scaffolds only. The [completely-unbuilt inventory](research/non-ml-math-completely-unbuilt-counts-2026-10-17.json) and [original aggregate report](research/non-ml-math-unbuilt-counts-2026-10-17.json) remain available.

The [pair-by-pair appendix](research/non-ml-math-partial-pair-audit-2026-10-17.md) answers all five requested questions for each of the 218 audited pairs: publication status, draft/unpublished items, stubs, undrafted work, and the original inclusion reason. The [structured audit](research/non-ml-math-pair-build-publication-audit-2026-10-17.json) records exact source paths, item identities, statuses, page homes, and the category matrix.

Owner queued the next build after physics completion and local publication: **81 pairs (78 completely unbuilt + 3 partial)**, excluding the 71 pairs in the two numerical-analysis categories. See [the durable owner instruction and exact pair list](research/NEXT-FRONTIER-81-OWNER-INSTRUCTION-2026-10-17.md).
