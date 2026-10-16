# QA researcher r2 checkpoint — 2026-10-14

Status: source reading, root-supplier audit and assigned prose/machine inventories are drafted and validated. Ownership remains only `sections/qa_r2.md`, `source-ledgers/qa_r2.json`, `qa_r2-items.json`, `qa_r2-pages.json`, and `sources/qa_r2/`.

## Completed scope

- QA07: eigenphase QPE with explicit controlled-power access, exact finite outcome law, nearest-grid/tail proof routes, superposition law, and separate power-query, bare-controlled-U query, and gate-cost models.
- QA08–09: integer-only rational reconstruction, modular order finding and Shor factoring, including failure/repetition rules, CRT sign-vector success, explicit reversible arithmetic circuit proof obligations, and separate bit/gate/query costs.
- QA10: finite abelian HSP sample law and fixed-sample common-kernel recovery. Output stays in an explicit implicit subgroup presentation; no free Smith-normal-form generator extraction is claimed.
- QA31: generic finite cyclic DLP with group-operation/oracle costs and explicit repetition count, generalized-dihedral hidden-shift reduction, and a scoped power-of-two Kuperberg sieve inventory. Elliptic-curve and number-field algorithms are excluded from active result claims.

The five A pages contain 10, 10, 10, 10 and 12 items; all five B pages are logical leaves. There are 62 unique item IDs, every item appears on exactly one page matching its home, the own-item dependency graph is acyclic, required source/proof-obligation fields are present, and algorithm/correctness/success/cost records use `deps` rather than `justified_by`.

## Reading and source record

The complete sequential Childs lecture notes are PDF pp. 1–191. De Wolf’s complete relevant chapters are PDF pp. 41–64 (phase estimation, factoring/order finding, and hidden subgroup/discrete log). Shor’s complete preprint is pp. 1–28. Kuperberg’s complete paper is pp. 1–11. Proos–Zalka’s article body is pp. 1–32; bibliography pp. 33–34 was not needed and was not read. Exact chunk ranges, complete-document/relevant-chapter scopes, cache paths, hashes and source limitations are in `source-ledgers/qa_r2.json`.

Source-fetch verification last passed 14/14 page-source entries across five complete PDF bodies. The verified coverage and local PDF/text/header caches are in this directory. The physics convention check read four NRQM state/measurement items for notation only; no physics item or physical postulate is a logical dependency.

## Frozen interfaces and cost boundaries

QA05’s final finite-abelian character/Fourier IDs and QA06’s cyclic-QFT definition, exact binary circuit-correctness theorem and gate-count theorem are referenced by their exact IDs. The QA10 normalized coset amplitude is `sqrt(|H|/|G|)=1/sqrt(|H^⊥|)` on `H^⊥`; the indicator transform coefficient is `|H|/sqrt(|G|)`. QC dependencies use the integrator’s reserved register/tensor/state/density/measurement/circuit/oracle/controlled-access/reversible-embedding/cost/Dirac IDs; they remain unwritten interfaces pending reconciliation. QPE does not require inverse access to U. QPE/Shor QFT gate counts use only the ideal exact arbitrary-angle rotation submodel and make no finite-alphabet, compiler-time, uniform-family, or BQP claim. Controlled powers and classical extraction are charged or supplied explicitly.

## Authoring obligations still open

- Complete the finite-rational Legendre/convergent proof and reconstruction uniqueness proof. Reduce `y/Q` first; use the terminal convergent when the reduced sample equals the target; otherwise prove its reduced denominator `D>2q` before applying the local criterion. Do not substitute the published irrational-only Legendre theorem.
- Finish the local QPE geometric-sum, nearest-grid and circular-tail derivations and sign/endpoint checks.
- Build and cost the reversible schoolbook modular multiplier, including a unitary invalid-encoding extension, fresh-target reversible embedding, ancilla cleanup and explicit fanout costs. No efficient controlled powers follow from a bare U oracle.
- Complete the CRT component-order valuation proof for Shor’s success estimate.
- Prove the QA10 restriction/cut and Chernoff recovery route; if output is changed to generators, provide a polynomial bit-cost proof for finite congruence/Smith-normal-form extraction.
- Before activating QA31’s Kuperberg result, prove the list-size/Chernoff recurrence for the inventory’s shortened final matching width `w_j=min(m,r−1−mj)`, whose positive widths sum to `r−1` while the original `m=ceil(√(n−1))` stays fixed through recursion; then union-bound recursive stages. Keep arbitrary-N and arbitrary-finite-abelian hidden-shift proofs separate.
- Keep elliptic-curve group-law associativity, number-field ideal reduction, and their implementation costs outside active dependencies until proved locally.

No engine, canonical plan/items, live run-state, or other agent-owned files were modified.
