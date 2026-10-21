# Batch 90 authoring record

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: KT-37, Khovanov homology and Jones categorification  
Scaffold input: a01ad0599f0865ce0072a50b1b0f05caedae7edd714cb6f3f6a0efce40ef1d05

## Inventory and levels

The pair has 10 A-page items and 2 B-page items. Levels are computed from actual in-run deps edges across the populated run manifests, including batch 82 suppliers. Current order:

- Level 1: def-khovanov-frobenius-algebra-and-cube-of-resolutions.
- Level 2: alg-khovanov-chain-complex-from-diagram.
- Level 3: lem-khovanov-cube-differential-squares-to-zero.
- Level 4: def-reduced-khovanov-cohomology-of-a-knot; thm-khovanov-chain-complex-from-diagram-procedure-properties.
- Level 5: lem-khovanov-graded-euler-characteristic-jones-normalization; lem-khovanov-reidemeister-chain-homotopies; cex-knot-kt-37-boundary-case; ex-knot-kt-37-worked-cases.
- Level 6: thm-khovanov-homology-is-an-oriented-link-invariant; thm-reduced-khovanov-basepoint-and-reidemeister-invariance.
- Level 7: thm-khovanov-euler-characteristic-is-jones.

Batch 90 remains dependency_level 2 with batch 82 as the scheduling prerequisite. The B item deps were reduced to the suppliers their arguments actually use; the cex and worked example no longer depend on unfinished link-invariance claims.

## Plan resolution and conflicts

The controlling design is research/plan-knot-theory-track.md §KT-37, including its appended “Early reduced theory” paragraph. It controls over the task's shortened item list and the prerequisite-map detail. The exact cube signs, smoothing convention, shifts, R-move scope, Euler substitution, reduced quotient, and basepoint scope were retained.

research/plan-spec.json agrees on page IDs, titles, category, order, and A-page requires; its empty items arrays are placeholders. The prerequisite map assigns thm-khovanov-chain-complex-from-diagram-procedure-properties to KT-37 even though the short task list omits it; it is included so the finite algorithm has a separate termination and output proof. The map also assigns the reduced definition and basepoint theorem, retained because KT-37 explicitly appends them.

The plan calls |v|-n_- “homological degree,” although the differential increases this index. The carriers call it cohomological degree i=|v|-n_- and preserve the plan's numerical convention. The prerequisite map's blanket full-AC branch is stronger than needed for the finite cube, Frobenius identities, R1 calculation, and statewise Euler calculation. The isotopy and diagram-equivalence statements use AC_omega; the KT-29 Hecke/Jones comparison retains full AC. These branches remain separate.

## Supplier and source inspection

Actual supplier bodies and relevant proofs were inspected for the required pages chain-complexes-and-homology, chain-homotopy-and-the-homotopy-category, and kauffman-bracket-state-sum-and-jones-polynomial. Checked internal suppliers include the cochain/chain complex definitions, homotopy and homotopy-equivalence definitions, mapping-cone convention, cone/homotopy results, Kauffman crossing chart and curl correction, normalized bracket invariance, and the batch-82 bracket-to-library-Jones bridge. The batch-82 materials remain drafts; inspection verifies the interfaces and is not approval. The crossing-sign determinant convention and the AC_omega clauses of the Reidemeister/general-position suppliers were also checked.

Full-text source evidence and fetch stamps are in batch-90.coverage.json. The four treatments and URLs are:
- Mikhail Khovanov, arXiv:math/9908171v2, https://arxiv.org/pdf/math/9908171v2; local full text /tmp/kt37-khovanov-9908171v2.pdf.
- Dror Bar-Natan, arXiv:math/0201043, https://arxiv.org/pdf/math/0201043; local full text /tmp/kt37-bar-natan-0201043.pdf.
- Louis H. Kauffman, arXiv:1107.1524v2, https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf.
- Melissa Zhang, arXiv:2501.03115v1, https://arxiv.org/pdf/2501.03115v1; local full text /tmp/zhang_multigrid_notes.pdf.

Khovanov §§2.2–2.4, 3.3–4.2, 5.1–5.4, 7.1–7.2, and 8.1–8.4 were read. Bar-Natan §§2–3 and 3.5.1–3.5.5 were read, including the RII figures and RIII residual-cube argument. Kauffman §§3–5 and Zhang §§3.5–3.7 and 6.3.4 were read. Khovanov §5.4 omits the R3 decomposition details. Bar-Natan §3.5.2 gives RII cancellations through acyclic subcomplexes and Figure 1; the carrier does not yet identify and verify those inclusions in its signed four-face modules. Bar-Natan §3.5.5 leaves tau_1 d_{1,*01}=d_{2,*01} and d_{1,*10}=tau_2 d_{2,*10} to readers. The carrier records these as unresolved because the local tensor-factor order and signed maps have not been fully identified; it does not claim an unverified Frobenius reduction. There were no retrieval failures and no source was dropped.

## Item checkpoints

### def-khovanov-frobenius-algebra-and-cube-of-resolutions — level 1 — ready

Defines A=Z[X]/(X^2), its graded structure maps, the state cube, ordered edge signs, and normalized cohomological/quantum degrees. In-run deps: none. External deps: def-kauffman-bracket-smoothing-and-loop-value, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-cochain-complex-in-an-abelian-category. Quotient-ring, counit, coassociativity, and Frobenius identities are checked on the stated bases. Sources/locators: Khovanov §§2.2–2.3, 4.2; Bar-Natan §§2–3; Kauffman §§3–4; Zhang §§3.5–3.7. Uses calligraphic A to distinguish the algebra from the bracket variable and A-smoothing label.

### alg-khovanov-chain-complex-from-diagram — level 2 — ready

Finite mathematical-input procedure enumerating states, tensor modules, signed edge maps, and grading shifts; it returns a candidate cochain differential and makes no parser or complexity claim. In-run dep: def-khovanov-frobenius-algebra-and-cube-of-resolutions. External dep: def-kauffman-bracket-smoothing-and-loop-value. The separate square-zero supplier is justified_by. Sources/locators: Khovanov §§3.3–4.2; Bar-Natan §3; Kauffman §4; Zhang §§3.5–3.7.

### lem-khovanov-cube-differential-squares-to-zero — level 3 — ready

Proves unsigned face maps agree by tensor commutation, associativity, coassociativity, and Frobenius identities; the ordered cube signs differ by one. In-run deps: alg-khovanov-chain-complex-from-diagram, def-khovanov-frobenius-algebra-and-cube-of-resolutions. Sources/locators: Khovanov §§3.3–4.2; Bar-Natan §3; Kauffman §4; Zhang §§3.5–3.7. The proof now states the zero- and one-crossing empty-path cases explicitly.

### def-reduced-khovanov-cohomology-of-a-knot — level 4 — ready

Defines the quotient by im(X_p), reduced quantum shift, and equivalent cut one-interval module M=Z with X acting trivially. In-run deps: alg-khovanov-chain-complex-from-diagram, def-khovanov-frobenius-algebra-and-cube-of-resolutions, lem-khovanov-cube-differential-squares-to-zero. External dep: def-cochain-complex-in-an-abelian-category. Proves X_p commutes with every edge, quotient well-definedness, and the based merge/split formulas. Sources/locators: Khovanov §§8.1–8.4; Kauffman §§4–5; Zhang §6.3.4. Zhang's basepoint-independence assertion is not used as proof of the later theorem.

### thm-khovanov-chain-complex-from-diagram-procedure-properties — level 4 — ready

Proves finite termination, finite-rank free state groups, degree-zero edge maps, boundedness, and d^2=0 for the constructed output. In-run deps: alg-khovanov-chain-complex-from-diagram, lem-khovanov-cube-differential-squares-to-zero, def-cochain-complex-in-an-abelian-category. Sources/locators: Khovanov §§3.3–4.2; Bar-Natan §3; Kauffman §4; Zhang §§3.5–3.7.

### lem-khovanov-graded-euler-characteristic-jones-normalization — level 5 — ready

For q=-A^-2 and t=A^-4, proves the unreduced rank Euler sum is (q+q^-1)f_D(A) and reduced is f_D(A), with torsion excluded by rank and crossingless normalization computed. In-run deps: def-khovanov-frobenius-algebra-and-cube-of-resolutions, alg-khovanov-chain-complex-from-diagram, def-reduced-khovanov-cohomology-of-a-knot, thm-khovanov-chain-complex-from-diagram-procedure-properties. External deps: def-kauffman-bracket-smoothing-and-loop-value, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-cochain-complex-in-an-abelian-category. Sources/locators: Khovanov §§2.2–2.4, 7.1–7.2; Bar-Natan §§2–3; Kauffman §§3–4; Zhang §§3.5–3.7. The statewise substitution and bounded rank-Euler cancellation are expanded locally.

### lem-khovanov-reidemeister-chain-homotopies — level 5 — escalated

The statement retains normalized R1/R2/R3 shift claims and the based quotient clause. The carrier proves crossing-order correction and both R1 integral basis splittings and explicit identity-cone contractions. In-run deps: def-khovanov-frobenius-algebra-and-cube-of-resolutions, def-reduced-khovanov-cohomology-of-a-knot, lem-khovanov-cube-differential-squares-to-zero. External deps: def-cochain-complex-in-an-abelian-category, def-chain-homotopy, def-chain-homotopy-equivalence, def-mapping-cone-of-a-chain-map.

RII blocker: Bar-Natan §3.5.2, printed pp. 347–349 and Figure 1, cancels two acyclic subcomplexes. This carrier does not identify those subcomplex inclusions in the signed four-face modules or verify the quotient differentials and shifts. The earlier alpha,beta splitting did not specify enough tensor maps and was removed.

RIII blocker: Bar-Natan §3.5.5, printed p. 350, needs tau_1 d_{1,*01}=d_{2,*01} and d_{1,*10}=tau_2 d_{2,*10}. The carrier does not define the maps on explicit ordered tensor factors and signed state bases, so its former reduction to Frobenius composites is unjustified. Khovanov §5.4 also omits the decomposition propositions. The based quotient argument is verified only for R1. These are mathematical proof gaps, not source-fetch failures.

### thm-khovanov-homology-is-an-oriented-link-invariant — level 6 — escalated

Under AC_omega, the oriented Reidemeister supplier gives a finite move sequence; the proof needs a bigraded chain homotopy equivalence for each move. In-run deps: def-countable-choice, thm-oriented-reidemeister-equivalence-theorem, thm-khovanov-chain-complex-from-diagram-procedure-properties, lem-khovanov-reidemeister-chain-homotopies, def-chain-homotopy, def-chain-homotopy-equivalence. Since the local supplier proves R1 only and leaves RII/RIII unresolved, the sequence composition does not prove diagram independence. Sources/locators: Khovanov §§5.1–5.4; Bar-Natan §§3.5.1–3.5.5; Kauffman §§4–5; Zhang §§3.6–3.7.

### thm-reduced-khovanov-basepoint-and-reidemeister-invariance — level 6 — escalated

Retains based-move invariance and transport of the mark along an oriented knot. In-run deps: def-reduced-khovanov-cohomology-of-a-knot, lem-khovanov-reidemeister-chain-homotopies. External deps: def-countable-choice, thm-oriented-reidemeister-equivalence-theorem, thm-isotopy-extension, lem-a-smooth-isotopy-of-links-can-be-put-in-general-position, lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times, def-chain-homotopy, def-chain-homotopy-equivalence.

Local blocker: RII/RIII based chain homotopies depend on the escalated local lemma. Basepoint-transport blocker: isotopy extension covers knot embeddings, while the general-position suppliers state results for closed-link isotopies. The carrier does not construct and prove a cut one-interval tangle isotopy relative to fixed boundary endpoints/collars or derive the required relative-boundary finite Reidemeister movie. Sources/locators: Khovanov §§8.1–8.4; Bar-Natan §§3.5.1–3.5.5; Zhang §6.3.4. Zhang's basepoint-independence statement is not substituted for the missing proof.

### thm-khovanov-euler-characteristic-is-jones — level 7 — escalated

The carrier proves the diagramwise Euler formula and keeps the full-AC KT-29 bracket/Jones branch separate from AC_omega invariance. In-run deps: lem-khovanov-graded-euler-characteristic-jones-normalization, thm-khovanov-homology-is-an-oriented-link-invariant, thm-reduced-khovanov-basepoint-and-reidemeister-invariance. External deps: def-axiom-of-choice, thm-bracket-state-sum-matches-library-jones-specialization, thm-choice-implies-dependent-implies-countable-choice. The statement's link-level Kh notation requires the two unresolved invariance theorems; therefore the requested conclusion is escalated. Sources/locators: Khovanov §§2.4, 7.1–7.2; Bar-Natan §§3.1, 3.5; Kauffman §§3–4; Zhang §§3.5–3.7.

### cex-knot-kt-37-boundary-case — level 5 — ready

Directly computes raw Euler sums q+q^-1, q^-1(q+q^-1), and -q^2(q+q^-1) for the crossingless unknot and its two curl diagrams. In-run deps: def-khovanov-frobenius-algebra-and-cube-of-resolutions, alg-khovanov-chain-complex-from-diagram, lem-khovanov-cube-differential-squares-to-zero, thm-khovanov-chain-complex-from-diagram-procedure-properties. External deps: def-kauffman-bracket-smoothing-and-loop-value, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-oriented-reidemeister-moves, lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy. The proof sums the two state modules directly, then uses rationalization and bounded rank-nullity to pass from chain Euler to rank Euler. It does not depend on the unfinished Reidemeister homotopy lemma or link/Jones invariance. Sources/locators: Khovanov §§2.2–2.4, 5.1–5.2; Bar-Natan §§3.1, 3.5.1; Kauffman §§3–4; Zhang §§3.5–3.7.

### ex-knot-kt-37-worked-cases — level 5 — ready

Computes the crossingless cube directly: unreduced Z in quantum degrees +1 and -1, and reduced Z in bidegree (0,0). In-run deps: def-khovanov-frobenius-algebra-and-cube-of-resolutions, alg-khovanov-chain-complex-from-diagram, def-reduced-khovanov-cohomology-of-a-knot. No link-invariance or Jones bridge dependency is needed. Sources/locators: Khovanov §§2.2, 4.2, 7.2; Bar-Natan §3.1; Kauffman §§3–4; Zhang §§3.5–3.7, 6.3.4.

## Final validation and owner handoff

- proof-layout on the 12 assigned carriers: pass, 12 items, 31 numbered steps, 0 defects.
- Statement-first audit on the 12 assigned items: pass, 0 uninterrupted-statement defects. Page/manifest/carrier consistency audit: 2 pages, 12 items, 0 inventory, deps, level, or pipeline-run mismatches.
- tools/precheck.mts on the same 12 carriers: pass, 12 files, 11 checked, 0 failing; the algorithm is not applicable because it has no proof section.
- proof-contract strict check: pass, 12/12 items, 0 errors, 0 warnings.
- coverage-checklist with required destinations: pass, 1 assigned page, 38 harvested results, 0 errors, 0 warnings.
- source-fetch-check with --stamp: 4/4 full-text sources fetch-verified and resolved, 0 drops, 0 newly stamped.
- Scoped dependency-label audit over the assigned 12 items: all 12 labels match computed in-run levels 1,2,3,4,4,5,5,6,6,7,5,5 in manifest order.
- Run-wide item-dependency-levels check: failed outside batch 90. The run has 218 pages and 137 global errors: 110 empty scaffold inventories and 27 dependency_level mismatches. Examples include empty factorized-and-composite-linear-inversion and dependency_level mismatches for thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization and lem-kauffman-smoothing-operators-for-braid-crossings. None of the 12 assigned labels mismatch; those other pages/items were not edited.
- proof-contract-coverage could not audit the run-wide contract inventory because it stops at the empty frontier page khovanov-to-floer-spectral-sequence. That page is outside this assignment and was not edited. The batch-local strict proof-contract check passes.
- Step 1 decision records were created for all 12 items: 8 ready and 4 escalated. The escalations are lem-khovanov-reidemeister-chain-homotopies, thm-khovanov-homology-is-an-oriented-link-invariant, thm-reduced-khovanov-basepoint-and-reidemeister-invariance, and thm-khovanov-euler-characteristic-is-jones. Their exact missing RII/RIII and relative-endpoint arguments are recorded above and in the item carriers.
- No retrieval failed, so no source-resolution retry history was fabricated. No tests were added or run. Readiness records document authoring completion only and do not constitute independent approval.
