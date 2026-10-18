# Batch 73 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Pair: `rational-cherednik-algebras-and-category-o` / `rational-cherednik-algebras-and-category-o-examples`  
Assigned scheduling input: `6afeb681db572c60a2bb98ee34b4916e8bb7f377810331491da80b19cd004365`

## Plan and batch interfaces

The PA-42 design in `research/plan-physics-algebras-track.md`, its complete claim block in `research/physics-algebras-planning-2026-10-17/proposed-pages.json`, and `research/plan-spec.json` agree on the A/B IDs, titles, category, order 2960, and page-reading prerequisite `affine-hecke-algebras-beyond-type-a`. No design/plan-spec conflict was found. The page prerequisite is reading order only, not an item dependency.

Batch 71's actual batch evidence and PA-40 draft bodies were inspected. No PA-40 item is a logical supplier for this pair: affine/type-A degenerate Hecke structure does not prove the finite-complex-reflection Cherednik presentation or KZ residues. The page-only interface is recorded as verified in `batch-73.cross-batch-dependencies.json`; no item supplier is claimed ready from that batch.

## Inventory, direct dependencies, and levels

Levels below are recomputed from the assigned manifest: zero for items without in-run suppliers, otherwise one plus the maximum in-run supplier level. Published suppliers do not change the in-run level.

| Item | Level | Direct dependencies |
|---|---:|---|
| `lem-rational-cherednik-log-connection-meridian-eigenvalues` | 0 | — |
| `def-rational-cherednik-reflection-data-and-parameters` | 0 | — |
| `def-rational-cherednik-algebra` | 1 | `def-rational-cherednik-reflection-data-and-parameters` |
| `lem-rational-cherednik-commutator-jacobi-compatibility` | 2 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra` |
| `thm-rational-cherednik-pbw-theorem` | 3 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `lem-rational-cherednik-commutator-jacobi-compatibility` |
| `def-rational-cherednik-category-o` | 4 | `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem` |
| `def-rational-cherednik-standard-module` | 5 | `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem`, `def-rational-cherednik-category-o` |
| `thm-rational-cherednik-standard-module-lies-in-category-o` | 6 | `def-rational-cherednik-category-o`, `def-rational-cherednik-standard-module`, `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem` |
| `def-rational-cherednik-polynomial-representation` | 7 | `def-rational-cherednik-standard-module`, `thm-rational-cherednik-standard-module-lies-in-category-o` |
| `lem-rational-cherednik-category-o-has-finite-length` | 7 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `def-rational-cherednik-category-o`, `def-rational-cherednik-standard-module`, `thm-rational-cherednik-standard-module-lies-in-category-o`, `thm-rational-cherednik-pbw-theorem`, `cor-finite-variable-polynomial-ring-noetherian`, `lem-finite-modules-over-noetherian-rings-are-noetherian` |
| `lem-rational-cherednik-polynomial-representation-dunkl-formula` | 8 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem`, `lem-rational-cherednik-commutator-jacobi-compatibility`, `def-rational-cherednik-polynomial-representation` |
| `lem-rational-cherednik-dunkl-localization-and-flat-connection` | 9 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `def-rational-cherednik-category-o`, `thm-rational-cherednik-pbw-theorem`, `lem-rational-cherednik-polynomial-representation-dunkl-formula`, `lem-determinant-trick-for-nakayama` |
| `def-rational-cherednik-kz-functor-and-finite-hecke-algebra` | 10 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-category-o`, `lem-rational-cherednik-dunkl-localization-and-flat-connection` |
| `lem-rational-cherednik-standard-module-local-connection-residue` | 11 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `def-rational-cherednik-standard-module`, `lem-rational-cherednik-dunkl-localization-and-flat-connection`, `def-rational-cherednik-kz-functor-and-finite-hecke-algebra` |
| `thm-rational-cherednik-kz-standard-modules-factor-through-hecke` | 12 | `def-rational-cherednik-kz-functor-and-finite-hecke-algebra`, `lem-rational-cherednik-standard-module-local-connection-residue`, `lem-rational-cherednik-log-connection-meridian-eigenvalues`, `def-rational-cherednik-standard-module` |
| `thm-rational-cherednik-kz-factors-through-hecke-algebra` | 13 | `def-rational-cherednik-kz-functor-and-finite-hecke-algebra`, `thm-rational-cherednik-kz-standard-modules-factor-through-hecke`, `lem-rational-cherednik-category-o-has-finite-length`, `lem-rational-cherednik-dunkl-localization-and-flat-connection` |
| `thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank` | 14 | `def-rational-cherednik-kz-functor-and-finite-hecke-algebra`, `thm-rational-cherednik-kz-factors-through-hecke-algebra`, `lem-rational-cherednik-category-o-has-finite-length`, `lem-rational-cherednik-dunkl-localization-and-flat-connection` |
| `ex-rational-cherednik-trivial-group-is-the-weyl-algebra` | 9 | `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem`, `def-rational-cherednik-polynomial-representation`, `lem-rational-cherednik-polynomial-representation-dunkl-formula` |
| `cex-rational-cherednik-category-o-not-semisimple-at-half` | 9 | `def-rational-cherednik-reflection-data-and-parameters`, `def-rational-cherednik-algebra`, `thm-rational-cherednik-pbw-theorem`, `def-rational-cherednik-category-o`, `def-rational-cherednik-standard-module`, `thm-rational-cherednik-standard-module-lies-in-category-o`, `def-rational-cherednik-polynomial-representation`, `lem-rational-cherednik-polynomial-representation-dunkl-formula` |

The A page has 17 items and the B page has 2, below the 100-item page cap. No dependency cycle was found. The KZ/localization cycle in the initial scaffold was removed: localization now depends only on algebra, PBW, polynomial-representation, category-O and determinant-trick inputs; the KZ definition then depends on localization.

## Source retrieval and disposition

Three primary full texts were fetched and their relevant arguments inspected. The full source inventory, URLs, exact locators, item-by-item supported claims, dispositions, retrieval history, and fetch stamps are in `batch-73.coverage.json`.

- Etingof–Ginzburg, [*Symplectic reflection algebras, Calogero–Moser space, and deformed Harish-Chandra homomorphism*](https://arxiv.org/pdf/math/0011114), §§1.2–1.3, Theorem 1.3, §2 PBW proof, §4 Corollary 4.4/Proposition 4.5. Supports the reflection presentation, PBW comparison, Jacobi and polynomial/Dunkl context. Results used for claims are marked `included`; locally reproved or inlined calculations are explicitly distinguished in coverage.
- Etingof–Ma, [*Lecture Notes on Cherednik Algebras*](https://arxiv.org/pdf/1001.0432), §§3.1–3.8, §5.10 and §§6.1–6.3. This is the book-length/full-lecture-notes treatment. It supports the definition, PBW, category O, standards, finite length, localization, KZ and Hecke parameter discussion. Coverage records the local proofs that replace source-only arguments, the sign-convention comparison, and the unresolved arbitrary-object/equivalence proofs.
- Ginzburg–Guay–Opdam–Rouquier, [*On the category O for rational Cherednik algebras*](https://arxiv.org/pdf/math/0212036), §§2.1–2.6, §§3.1–3.2 and §§5.1–5.4. Supports the independent category-O/highest-weight treatment, localization, KZ factorization and conditional quotient-equivalence route. The full factorization/equivalence source results are recorded as comparison evidence, not as locally completed proofs.

For the B page, Etingof–Ma and GGOR supply two independent comparisons for the trivial-group and rank-one conventions; the recurrence, invariant submodule, trivial quotient and nonsplitting argument are computed locally. No source retrieval failed, so no recovery retries or drops were needed and no `source_resolution` drop entry was created. The existing stamps were previously established by `source-fetch-check --stamp`; the final non-stamping verification is recorded below.

## Sign conventions and scope

The defining commutator is the minus-sign presentation above, with $\alpha_s^\vee(\alpha_s)=1-\lambda_s$ for the chosen dual-action convention. From this presentation and the localization map, the standard-module connection in the carrier is $d+\sum_s c_s(d\alpha_s/\alpha_s)(1-s_E)$. The meridian roots are derived from horizontal transport and the explicitly defined endpoint map. For the chosen generator, GGOR's residue on $\det^{-j}|_{W_H}$ is $-e_Hk_{H,j}$; that character has eigenvalue $\zeta_H^j$, so matching the locally computed residue gives $k_{H,j}=-r_{H,j}/e_H$. Their root $\det(s_H)^{-j}e^{2\pi i k_{H,j}}$ therefore equals the locally derived $\mu_{H,j}$. Etingof–Ma's displayed Hecke parameters use their own root/coroot and connection conventions; the local carrier fixes the current sign instead of copying those roots. This convention comparison is documented in coverage and does not alter the PBW/category-O claims.

The two escalations are confined to the all-object Hecke factorization and the quotient equivalence. Exact unresolved supplier IDs, required hypotheses and affected claims are in those item files and in the readiness decisions. The quotient-equivalence claim remains conditional on $\dim\mathcal H_{q(c)}(W)=|W|$.

## Scoped check record

Final scoped checks:

- `node tools/tsx-run.mjs tools/precheck.mts items/*rational-cherednik*.md`: 13 proof-bearing items checked, 0 failures.
- `node tools/proof-layout.mjs items/*rational-cherednik*.md`: 19 items, 54 proof steps, 0 defects.
- `node tools/rendercheck.mjs` on the 19 assigned items and 2 pages: all 21 pass; every math span parses and all frontmatter parses.
- `node tools/proof-contract.mjs ...batch-73.proof-contracts.json --strict`: 13/13 proof-bearing items checked, 0 errors or warnings; 53 exact supplier citations and 54 mapped steps.
- `node tools/citation-fidelity.mjs ...batch-73.proof-contracts.json --items-dir items --fail-on-missing-quote`: 53 citations checked, no missing quotes or widening candidates.
- `node tools/source-fetch-check.mjs --coverage ...batch-73.coverage.json --stamp`: 5/5 sources fetch-verified, 5/5 resolved, 0 documented drops; all stamps already existed (0 newly stamped).
- Scoped `dependencyLevels` calculation on the batch-73 manifest, using the same exported function as `item-dependency-levels.mjs`: 19 items, maximum level 14, 0 errors. The official run-wide `node tools/item-dependency-levels.mjs check --run ...` still fails on unrelated manifests in this run: an empty inventory for `relay-and-interference-channel-bounds-examples`, missing/invalid labels and numerous existing level-label mismatches. The assigned batch itself has no level mismatch or cycle.
- Focused `depcheck`, `fwdcheck`, and `extcheck` over batch-73 IDs: 0 hard errors, 0 forward-reference issues, and 0 escalation/provenance issues. Four `cited-not-in-deps` warnings are nonlogical navigation links: the algebra definition points to its PBW consumer, the standard-module definition points to its membership theorem, and the KZ definition points to its local residue and standard-module theorem. Adding those as dependencies would create cycles or reverse the proof order.
- The official run-wide proof-contract coverage command is blocked by the unrelated empty scaffold inventory `relay-and-interference-channel-bounds-examples`. The same coverage function was run on a temporary batch-73-only root: 19 items checked, all 13 proof-bearing items covered.
- `node tools/manifest-integrity.mjs --run ... --json`: 162/162 expected items present, none missing or added.

Native Step 1 records were written with `node tools/step1-decisions.mjs record`: 17 items are marked `ready` and the all-object KZ factorization and quotient-equivalence items are marked `escalated`. A scoped audit confirmed all 19 records exist and each stored dependency list matches the batch manifest. The two escalations name their exact missing suppliers, hypotheses and affected claims in the carriers and records. The run-wide `node tools/step1-decisions.mjs check --run ...` remains blocked before it reports readiness because an unrelated item has a noncanonical root identity: `items/thm-it-dmc-uniform-quadratic-capacity-decay.md`. I did not edit that item or use `--owner`. No workflow transition or approval was performed.
