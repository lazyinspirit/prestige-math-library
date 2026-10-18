# Batch 45 authoring and evidence notes

Run non-ml-math-remaining-81-2026-10-18; pair car-algebras-majorana-generators-and-clifford-comparison; Beta batch 45.

## Plan comparison and scope

The current plan-spec rows at orders 2904–2905 match the task and track table: A/B IDs, titles, category, companion, and page prerequisite edges agree. Both plan-spec item inventories are empty. The detailed PA-14 inventory in research/physics-algebras-planning-2026-10-17/proposed-pages.json supplies three A-page obligations and a B-page examples obligation. This batch has eighteen A items and three B items, below the 100-item page cap.

There is an unresolved scope conflict. The pathway sentence in research/physics-algebras-planning-2026-10-17/prose-scaffold.md says the CAR/Majorana page proves “only the finite-mode algebra comparison.” The detailed PA-14 entry in proposed-pages.json additionally requires an infinite-dimensional CAR C*-algebra, its inductive-limit universal norm, and inequivalent irreducible representations. The canonical plan-spec leaves item inventories empty, and the run owner direction does not reconcile the PA-14-specific difference. The richer obligation is retained and proved; owner reconciliation is still needed for the conflicting finite-only pathway sentence.

The infinite-dimensional CAR construction is given for every complex Hilbert space by the directed system of its finite-dimensional subspaces. The inequivalent irreducible pair is explicit for the standard countable mode set. No classification, uncountability claim, QFT locality theorem, spin-statistics theorem, or uniqueness of a physical vacuum is asserted.

## Inventory and item dependency levels

Scheduling input: 825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042. Page dependency level is 2; prerequisite batch is 34. Item levels use logical dependencies, including cross-batch item suppliers. The page-level prerequisite remains reading-route metadata.

| Item | Level | In-run logical suppliers |
|---|---:|---|
| def-fermionic-fock-space-over-hilbert-space | 0 | — |
| def-finite-mode-car-algebra | 0 | — |
| thm-square-summable-families-form-a-hilbert-space | 0 | — |
| def-finite-dimensional-car-algebra | 1 | def-finite-mode-car-algebra |
| lem-finite-mode-car-occupation-matrix-units | 1 | def-finite-mode-car-algebra |
| lem-fock-creation-annihilation-satisfy-car | 1 | def-fermionic-fock-space-over-hilbert-space |
| thm-finite-mode-car-clifford-majorana-isomorphism | 3 | def-finite-mode-car-algebra; batch 34 Clifford definition, polarized relations, and universal property |
| thm-finite-mode-car-algebra-is-full-matrix-algebra | 4 | occupation matrix units, Majorana isomorphism, batch 34 PBW, batch 74 matrix C*-algebra |
| lem-finite-mode-car-canonical-inclusions-are-isometric | 5 | occupation matrix units, finite-mode matrix theorem |
| thm-finite-dimensional-car-algebra-is-matrix-algebra | 5 | finite-dimensional CAR definition, finite-mode CAR definition/matrix theorem |
| def-countable-mode-car-algebra | 6 | finite-mode canonical inclusions and finite matrix theorem |
| lem-car-finite-subspace-inclusions-are-isometric | 6 | finite-dimensional CAR matrix theorem, finite-mode canonical inclusions |
| def-car-algebra-over-hilbert-space | 7 | finite-dimensional CAR definition/matrix theorem and isometric subspace inclusions |
| lem-countable-mode-car-particle-hole-automorphism | 7 | countable CAR definition, finite-mode CAR definition/inclusions/matrix theorem |
| thm-countable-mode-car-has-universal-inductive-limit-norm | 7 | countable CAR definition, finite-mode CAR stages, occupation operators, and choice-free $\ell^2$ completeness |
| lem-countable-mode-car-fock-representation-is-irreducible | 8 | countable CAR definition and countable universal-norm theorem |
| thm-general-car-has-universal-inductive-limit-norm | 8 | Hilbert-space CAR definition, finite-dimensional CAR/inclusions, Fock CAR, bounded-operator completeness and norm continuity |
| thm-countable-mode-car-has-inequivalent-irreducible-representations | 9 | countable Fock irreducibility and particle-hole automorphism |
| ex-one-mode-car-majorana-and-pauli-matrices | 5 | finite-mode Majorana and matrix theorems |
| ex-two-mode-car-occupation-matrix-units | 5 | occupation matrix units and finite-mode matrix theorem |
| cex-countable-car-representations-are-not-all-fock | 10 | inequivalent irreducible representations theorem |

Every item is zero without an in-run supplier and otherwise one plus the maximum in-run supplier level. The cross-batch matrix C*-algebra helper in batch 74 is at item level 0; batch 74's page level is 1. New Hilbert-Fock carriers have a separate Countable Choice dependency, not an in-run item-level contribution.

## Conventions, proof route, and axiom branches

The finite-mode algebra is the complex unital *-algebra quotient with $\{a_i,a_j\}=0$, $\{a_i^\dagger,a_j^\dagger\}=0$, and $\{a_i,a_j^\dagger\}=\delta_{ij}1$. The Clifford convention is PA-03 plus-$Q$, so $e_r^2=+1$. Majoranas are $\gamma_{2j-1}=a_j+a_j^\dagger$ and $\gamma_{2j}=i(a_j^\dagger-a_j)$, with inverse $a_j=(e_{2j-1}+ie_{2j})/2$ and $a_j^\dagger=(e_{2j-1}-ie_{2j})/2$.

The finite matrix proof combines the Majorana isomorphism and PA-03 PBW dimension $4^n$ with explicit occupation-basis matrix units surjecting onto $M_{2^n}(\mathbb C)$. Equal finite dimensions give the algebra isomorphism. The C*-norm uses the batch-74 finite matrix C*-algebra result. For general $H$, finite-dimensional subspaces form a directed system; finite basis extension identifies each inclusion with an iterated coordinate inclusion $A\mapsto A\otimes I_2$. The completion has the universal norm because every finite-stage representation is isometric, and Fock space supplies a global representation. The separate standard countable branch also has a direct occupation-space representation and proves an explicit inequivalent pair.

The countable occupation-space route is choice-free, including completeness of $\ell^2(\mathcal P_{\mathrm{fin}}(\mathbb N))$: the new arbitrary-index $\ell^2$ theorem defines coordinate limits uniquely and bounds finite subsums, so it needs no enumeration or choice function. It also proves finite-support density by truncating outside a finite set selected from the finite-subsums norm, and identifies the coordinate vectors as a complete orthonormal basis. It uses Replacement to form the function of unique coordinate limits, and this axiom is declared directly in the new theorem. The Fock irreducibility proof now uses finite occupation projections converging to the vacuum vector; it does not invoke arbitrary orthogonal projections or Riesz representation. The occupation operators use signs $(-1)^{|\{s\in S:s<j\}|}$ and particle-hole exchange $\alpha(a_j)=a_j^\dagger$, $\alpha(a_j^\dagger)=a_j$. The inequivalence proof chooses the least unoccupied positive integer after selecting a nonzero finite-subset coefficient. It does not use the published physics Fock item.

The general Hilbert-space Fock representation is a distinct Countable Choice branch: lem-fock-creation-annihilation-satisfy-car uses def-hilbert-space-adjoint and thm-hilbert-adjoint-properties, whose hypotheses explicitly include Countable Choice. The general CAR algebra and finite-subspace inclusion construction themselves use only finite-dimensional orthonormal bases. The axiom is declared in item dependencies and its use is named in the general universal-norm theorem.

## Cross-pair supplier inspection and unresolved routes

- Batch 34's actual PA-03 A/B pages and relevant A-carrier bodies were read. The plus-$Q$ Clifford definition, polarized relations, quotient factorization, universal property, and PBW theorem cover $k=\mathbb C$, the standard $2n$-dimensional quadratic space, and the fixed ordered basis; PBW permits degenerate forms and requires no nondegeneracy. These suppliers remain draft, not accepted. The Majorana theorem, finite matrix theorem, and their consumers remain escalated pending native supplier acceptance.
- Batch 74's actual page inventory and complete lem-matrix-algebra-is-a-c-star-algebra proof were inspected. It gives the operator-norm C*-structure on finite complex matrices by a choice-free coordinate proof. It remains draft, not accepted; consumers remain escalated pending native readiness.
- The published physics/items/lem-qft-fock-ccr-car.md was read. It covers bounded CAR operators on antisymmetric Fock space, but not the universal finite-mode algebra or its matrix units, and its dependency closure includes Countable Choice. The design requires a supported same-ID import route and prohibits copying that proof. The current math import registry has no mapping, the root items/ tree has no same-ID carrier, and math depcheck cannot resolve the physics path. No physics item is used as a logical dependency. Owner reconciliation is required on whether the local finite occupation matrix-unit construction satisfies the planned reuse boundary.
- The finite-only pathway sentence versus detailed PA-14 infinite claim is an owner scope escalation. Infinite-mode items remain present and no acceptance is asserted.

Exact cross-batch evidence is recorded in research/non-ml-math-remaining-81-2026-10-18-batch-45.cross-batch-dependencies.json.

## Source reading and disposition

The A page's CAR claims are supported by two independent full-text lecture-note treatments, including the complete relevant reasoning, not citations alone. The choice-free occupation-space Hilbert prerequisite also has two independent sequence-space treatments; the arbitrary-index completeness and finite-support density arguments are written locally. All four direct PDF retrievals were inspected and stamped in the batch coverage file.

| Source | Read locator and use | Full-text verification |
|---|---|---|
| Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, University of Vienna, version 6 August 2026 | Chapter 6, §§6.1–6.8, PDF pp. 81–92: Fock CAR, finite examples, universal finite CAR, matrix units, Hilbert-space inductive limits, and representation distinctions. | Official full 112-page PDF; fetch stamp is in the coverage file. |
| Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, arXiv:math-ph/0511030v2 | §§4.1–4.2, printed pp. 14–17 / PDF pp. 13–16, and §5.7, printed pp. 22–23 / PDF pp. 21–22. It uses self-adjoint real Clifford fields with anticommutator $2\delta_{ij}$; the local Majorana proof translates this to complex creation/annihilation conventions. | Full 79-page PDF fetched and inspected with MuPDF; fetch stamp is in the coverage file. |
| Gerald Teschl, Topics in Real and Functional Analysis | Chapter 1, §1.2, printed pp. 8–9 / PDF pp. 21–22: coordinate-limit proof for sequence-space completeness; §1.3, printed pp. 17–18 / PDF pp. 30–31: the complex $\ell^2(\mathbb N)$ inner product and Hilbert-space example. The local theorem extends the coordinate proof to arbitrary index sets using finite subsums. | Full 563-page PDF fetched and inspected with MuPDF; fetch stamp is in the coverage file. |
| Theo Bühler and Dietmar A. Salamon, Functional Analysis, ETH Zürich lecture notes | Chapter 2, §2.4.4, Example 2.74(ii), printed p. 94 / PDF p. 102: the real square-summable sequence space as a Hilbert space. The local proof supplies the complex arbitrary-index version. | Full 452-page PDF fetched from the university-hosted mirror and inspected with MuPDF; fetch stamp is in the coverage file. The ETH host returned HTTP 403; the source was recovered from the university mirror and that attempt is recorded in coverage. |

Harvested results and their item-level dispositions, including stronger source statements left out of scope, are recorded in research/non-ml-math-remaining-81-2026-10-18-batch-45.coverage.json. No source was dropped or left unresolved. pdftotext was unavailable locally; MuPDF extraction succeeded.

## Checks and readiness

Final scoped checks:

- Normative precheck: the three proof items changed during the final audit pass, 3 checked and 0 failing.
- proof-layout: all 21 assigned items, 57 numbered steps, 0 defects. The explicitly changed items were also checked after their final edits.
- rendercheck: 23 assigned files (21 items and 2 pages), 0 errors or warnings.
- content-policy: 21 manifest items, 0 errors or warnings.
- Strict proof contracts: all 16 proof-bearing items checked, 0 errors or warnings. The batch inventory/page/contract consistency check reports 18 A items, 3 B items, 21 total, and 16 contracts.
- Coverage checklist: 1 A page, 31 harvested source results, 0 errors or warnings. source-fetch-check --check: 4/4 sources fetch-verified and resolved, 0 dropped sources. The earlier ETH-host 403 for Bühler–Salamon was recovered from the university-hosted mirror; both attempts are retained in coverage.
- Full-run item-dependency-levels check exits 1 with 129 errors in other batches and 0 batch-45 item errors. No unrelated inventory or item levels were changed.
- Full-run proof-contract-coverage is not batch-scoped and exits 1 because another frontier item is missing: lem-parallel-awgn-cost-constrained-achievability. The batch-only proof inventory/contract comparison passed.
- All 21 Step-1 records remain escalated with owner:false; the batch-specific record check confirms each record lists the item’s current direct logical dependencies. No readiness or approval is asserted. The shared PA-03 page prerequisite is named in each reason, and B items also record their A-page dependencies. The records were not overwritten after this escalation.
- The batch-scoped trailing-whitespace scan found no matches. Whole-repository git diff --check remains red on unrelated dirty item items/thm-morse-sard-for-euclidean-maps.md:63; this pair did not edit it.

Read-only autopilot status updated at 2026-10-17 17:15:36 UTC reports the run as running, 1-scaffold at 54/81, no in-flight writers, and the blocker from 2026-10-17 16:44:57 UTC: plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2). This pair did not modify shared plans or engine state. The owner must resolve that shared-plan parse failure before the run can advance.

The two owner escalations remain open: (1) prose-scaffold says “only the finite-mode algebra comparison” while detailed PA-14 requires infinite CAR, and (2) the planned lem-qft-fock-ccr-car same-ID mathematics-import route is unavailable, leaving owner reconciliation on the local finite occupation matrix-unit proof. Batch 34 and batch 74 supplier bodies were inspected but remain draft and unaccepted. All batch-45 items therefore remain escalated pending these decisions and the owner’s independent review.
