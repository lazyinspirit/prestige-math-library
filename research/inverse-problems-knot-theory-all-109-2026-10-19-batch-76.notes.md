# Batch 76 authoring notes — Fox–Milnor factorization and slice obstructions

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `76` · dependency level `7` · prerequisite batches `62, 67, 74, 75`  
Scheduling input: `725f70a22aa73c94c017d1a8ab25c1c658162b974a3683f13c75d3e6750293b3`

## Controlling design and comparison

The complete KT-23 section at `research/plan-knot-theory-track.md:686-705` controls the mathematical scope and proof route. It specifies the locally flat slice implication, the necessary-only obstruction, metabolic signature vanishing off Alexander roots, and the square-knot/trefoil examples. Its Seifert-form route controls over any citation-only Fox determinant proof.

The current `research/plan-spec.json` entries at lines 877299–877329 agree with the assigned page IDs, order, category, companion, titles, and four A-page `requires` edges. They have empty `items` arrays, so they do not conflict with the KT-23 item inventory; the track design and prerequisite map supply that inventory and item-level interfaces.

The current prerequisite map has a placement/ownership mismatch: it labels `def-metabolic-seifert-form-and-algebraic-knot-concordance` and `lem-slice-disk-induces-seifert-metabolizer` as KT-22-owned, while the live KT-21 `batch-74.pages.json` and `library/knot-theory/smooth-and-topological-knot-concordance.md` place both in batch 74. Their current item bodies are inspected below. This batch cannot repair or reassign them. The mismatch is recorded for owner reconciliation.

The prerequisite map lists `thm-locally-flat-slice-implies-fox-milnor-factorization` as a direct prerequisite of the metabolic signature theorem. The KT-23 design states the algebraic result for every metabolic Seifert form; its local Hermitian-matrix proof does not use Fox–Milnor factorization or the slice-disk metabolizer supplier. This batch records the narrower logical dependency and retains the full algebraic claim. Any desired geometric slice corollary still depends on the unresolved slice-to-metabolizer module.

## Item inventory and dependency levels

Inventory and dependencies were placed in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-76.pages.json` before authoring item carriers. Levels use current in-run supplier levels and equal one plus the largest such level.

| Item | Page | Level | In-run suppliers determining level |
|---|---|---:|---|
| `lem-metabolic-seifert-form-implies-fox-milnor-factorization` | A | 0 | none |
| `thm-locally-flat-slice-implies-fox-milnor-factorization` | A | 12 | determinant theorem 11; slice-metabolizer lemma 8; metabolic definition 7; local lemma 0 |
| `cor-nonfactorization-obstructs-sliceness` | A | 13 | Fox–Milnor theorem 12 |
| `thm-metabolizer-implies-levine-tristram-signature-vanishing` | A | 16 | stabilization lemma 15; Levine–Tristram definition 13; determinant theorem 11; metabolic definition 7 |
| `ex-knot-kt-23-worked-cases` | B | 12 | determinant theorem 11; trefoil matrix lemma 8; ribbon inverse lemma 2 |
| `cex-knot-kt-23-boundary-case` | B | 17 | signature theorem 16; sliceness corollary 13; Fox–Milnor theorem 12 |

## Conventions and proof route

Use the positive-push Seifert matrix convention `V_ij = lk(a_i^+,a_j)` and determinant `det(V-tV^T)`. Write `p \doteq q` only for equality up to a Laurent unit `±t^k`. The Fox–Milnor conclusion concerns the Alexander polynomial generator, not the separate knot-normalized fraction `D_K=Delta_K/(1-t)`. The factorization and signature statements are necessary obstructions; neither converse is claimed.

The local matrix lemma proves the algebraic metabolic factorization by choosing a basis beginning with the integral metabolizer and using the determinant of a block matrix with a zero half-size corner. The signature proof is choice-free finite-dimensional Hermitian linear algebra after the full-AC Seifert-pairing convention has supplied the knot data.

## Current supplier findings

- `thm-seifert-determinant-is-the-knot-alexander-polynomial` (batch 62, level 11): its current body fixes the positive-meridian and positive-push conventions and proves the determinant-generator relation; its statement also separates `Delta_K` from `D_K`. Draft status is retained.
- `def-levine-tristram-hermitian-form-and-signature` (batch 67, level 13) defines `H_omega=(1-omega)V+(1-bar(omega))V^T`; `lem-seifert-stabilization-preserves-levine-tristram-signature` (batch 67, level 15) proves surface/basis invariance, including singular parameters. Draft statuses are retained.
- `def-metabolic-seifert-form-and-algebraic-knot-concordance` (batch 74, level 7) defines a metabolizer as a primitive rank-half direct summand on which the integral Seifert pairing vanishes. Draft status is retained.
- `lem-slice-disk-induces-seifert-metabolizer` (batch 74, level 8) has a conditional rank calculation and isotropy argument, but its proof explicitly leaves `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` unresolved. That source item says Alexander duality gives complement homology but does not construct the required locally flat embedded 3-manifold or oriented bicollar. Do not use this supplier as a proved premise.
- `lem-general-knot-reverse-mirror-sum-is-ribbon` (batch 74, level 2) supplies a complete current local construction under `AC_omega`; the example also uses the published theorem `AC -> AC_omega`. Draft status is not approval.
- `lem-positive-hopf-plumbing-has-trefoil-seifert-matrix` (batch 75, level 8) gives the matrix `[[1,0],[-1,1]]` in the same positive-push convention. Draft status is retained.

## Source retrieval and harvested results

Full texts inspected for the A-page claims: Fox–Milnor (1966), §2, Theorem 2, printed pp. 262–263; Livingston, *A Survey of Classical Knot Concordance*, §2.2, Theorem 2.6, printed p. 323, and §3.1/§3.3, printed pp. 325–326; Conway, *The Levine–Tristram Signature: A Survey*, §2.1 and Remark 2.10, printed pp. 3–5. Fox–Milnor supplies a distinct torsion proof route; the KT-23 carrier uses the planned Seifert-form route. Livingston’s short slice-to-metabolizer proof cites a smooth regular-value construction and does not resolve the locally flat topological supplier gap. Conway’s remark supports the zero-signature statement and its nonroot condition; the matrix inertia argument is proved locally.

Ray’s complete lecture notes were retrieved from the author-hosted full-text PDF after the official Numdam PDF browser route timed out. The recovery search and both URLs are preserved in the batch coverage record. Ray’s Proposition 1.6 states the inverse-mirror ribbon fact as an exercise; the current batch-74 item supplies the local proof used by the worked example.

## Item checkpoints

### `lem-metabolic-seifert-form-implies-fox-milnor-factorization`

The local lemma proves that an integral bilinear form on a rank-$2g$ lattice with unimodular skew part and a rank-$g$ direct-summand metabolizer has determinant $\det(V-tV^T)=t^g f(t)f(t^{-1})$. It uses no in-run suppliers and no choice axiom; the basis extension is a finite direct-sum decomposition. The block determinant is justified by swapping the two $g$-row blocks, and the reciprocal factor identity is calculated in final step 3.1. The $g=0$ empty determinant case is explicit.

Source treatments inspected: Livingston, §3.3, p. 326, supports the reciprocal norm conclusion; Conway, §2.1 and Remark 2.10, pp. 3–5, supports the Seifert/Hermitian metabolic zero-block setup. Their short expositions are not used in place of the local determinant calculation. Dependencies: none. Current decision candidate: `ready`, pending the required proof-contract and scoped layout checks. The next assigned theorem was completed below, retaining the exact locally flat slice-to-metabolizer blocker.

### `thm-locally-flat-slice-implies-fox-milnor-factorization`

The full assigned statement is retained, including the algebraically metabolic branch, locally flat slice branch, determinant normalization, and necessary-only warning. Step 1.1 completes the metabolic branch by the local block determinant lemma and the current determinant/Alexander interface. The slice branch is not inferred from citation or from the current draft `lem-slice-disk-induces-seifert-metabolizer`: that supplier explicitly assumes `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` and marks its construction unproved. Required unresolved hypotheses are a locally flat proper disk, capped Seifert surface, matching oriented product collars, and a two-sided locally flat 3-manifold neighborhood aligned with the positive push-off. This blocks the theorem's geometric clause and its downstream sliceness corollary/counterexample. Current decision: `escalated`; no source excerpt or acceptance has been invented. The next assigned corollary was completed below with the same blocker.

### `cor-nonfactorization-obstructs-sliceness`

The statement is the exact necessary-only contrapositive: failure of an integral reciprocal norm rules out a locally flat slice disk. The proof records the formal contrapositive, but it does not treat the main theorem as a proved premise because the main theorem's slice branch remains unresolved. Direct dependency: `thm-locally-flat-slice-implies-fox-milnor-factorization` (level 12). Current decision: `escalated` for the same locally flat Seifert-hypersurface gap; no converse is claimed. The next metabolic signature theorem was completed below, independently of this geometric supplier.

### `thm-metabolizer-implies-levine-tristram-signature-vanishing`

The claim is the algebraic statement for every metabolic positive-push Seifert form at $\omega\ne1$ with $\Delta_K(\omega)\ne0$. The proof changes to an integral basis adapted to the metabolizer, proves nondegeneracy from the determinant reciprocal identity, and explicitly reduces the Hermitian form to the standard hyperbolic block with equal positive/negative indices. It is choice-free after the full-AC convention supplies the knot Seifert data. Suppliers inspected: the batch-67 Levine–Tristram definition and stabilization proof, batch-62 determinant theorem and its Alexander-module/square-presentation proof, and the batch-74 metabolic definition. Sources: Livingston §3.1 pp. 325–326 and Conway §2.1/Remark 2.10 pp. 3–5; both confirm the nonroot and metabolic hypotheses, while the inertia argument is local. The prerequisite map's extra direct edges from this algebraic statement to the Fox–Milnor theorem and slice-metabolizer lemma are not used by the stated claim and would introduce the unresolved geometric supplier without a logical need. Dependencies are the minimal current logical inputs. Current decision candidate: `ready`, pending the required proof-contract and scoped layout checks. The B-page matrix calculations and counterexample were completed below, with the cex's dependent sliceness claim escalated.

### `ex-knot-kt-23-worked-cases`

The worked example is $S=T\#T^\dagger$, with the stated right-handed trefoil positive-push matrix $V=\left(\begin{smallmatrix}1&0\\-1&1\end{smallmatrix}\right)$. It proves the reverse-mirror matrix is $-V^T$, the connected-sum matrix is $\operatorname{diag}(V,-V^T)$, and the graph of the swap matrix is a primitive rank-2 metabolizer. Both determinant blocks are $t^2-t+1$, and $f(t^{-1})=t^{-2}f(t)$ for $f=t^2-t+1$. The current batch-74 ribbon-inverse proof supplies the smooth disk; full AC implies its $\mathrm{AC}_\omega$ hypothesis. Dependencies: current batches 60, 61, 62, 74, and 75, with levels determining item level 12. Sources inspected/reused: Rolfsen §8.A pp. 200–202 via the batch-75 full-book source record; Ray Proposition 1.6 p. 3 (the statement is given as an exercise); Livingston §2.1 pp. 322–323. The local batch-74 proof, not the exercise statement, supplies the disk. Current decision candidate: `ready`, pending contract/layout checks. The trefoil obstruction counterexample was completed below, retaining its unresolved sliceness inference.

### `cex-knot-kt-23-boundary-case`

The full assigned false claim is retained: the trefoil with $V=\left(\begin{smallmatrix}1&0\\-1&1\end{smallmatrix}\right)$ bounds a locally flat disk. The proof computes $\Delta_T(t)=t^2-t+1$, shows $|\Delta_T(-1)|=3$ is not an integer square, and computes $H_{-1}=\left(\begin{smallmatrix}4&-2\\-2&4\end{smallmatrix}\right)$ with signature $2$, so the form is not metabolic. The local polynomial and algebraic-signature calculations are complete. The topological refutation is escalated because it still requires the unresolved slice-disk-to-metabolizer supplier. Source locators: Fox–Milnor §2, Theorem 2, pp. 262–263; Livingston §§3.1 and 3.3, pp. 325–326; Conway §2.1/Remark 2.10, pp. 3–5. Direct and blocker suppliers are recorded explicitly in the item and contract. Current decision: `escalated`.

## Mechanical checkpoint

- `source-fetch-check --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-76.coverage.json --stamp`: pass, 8/8 sources fetch-verified, 0 drops.
- The four batch evidence JSON files parse successfully; all six `dependency_level` values in source frontmatter match the values in the batch manifest.
- A/B page bodies are empty; the new A/B files contain YAML frontmatter only.
- `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19`: run-scoped command failed on empty scaffolds in unrelated pages: `open-frontiers-in-learned-inverse-problems`, `open-frontiers-in-learned-inverse-problems-examples`, `casson-gordon-invariants-and-sliceness-obstructions`, `casson-gordon-invariants-and-sliceness-obstructions-examples`, `satellite-operators-and-knot-concordance-filtrations`, `satellite-operators-and-knot-concordance-filtrations-examples`, `epsilon-and-upsilon-concordance-invariants`, `epsilon-and-upsilon-concordance-invariants-examples`, `character-varieties-and-the-a-polynomial`, `character-varieties-and-the-a-polynomial-examples`, `open-questions-in-knot-polynomials-and-surgery`, `open-questions-in-knot-polynomials-and-surgery-examples`, `zero-traces-and-conway-nonsliceness`, and `zero-traces-and-conway-nonsliceness-examples`. Batch 76 did not appear among reported level errors; its own six levels were independently compared to current supplier levels above.
- This earlier next-action line was superseded by the final scoped validation checkpoint and readiness records below.

## Final scoped validation checkpoint

After the canonical proof-phase labels were applied, `node tools/tsx-run.mjs tools/precheck.mts --json` passed all six items (0 failed), and `node tools/proof-layout.mjs` passed all six items with 21 steps and 0 defects. The strict proof-contract check passes all six entries with 0 errors and 0 warnings after regenerating exact citations/derivations from the current item bodies and updating the signature theorem's boundary evidence to step 2.1.

Focused dependency validation passes for all six items and both pages (`depcheck`: 0 errors, 0 warnings). `rendercheck` passes all 8 files with 0 errors or warnings; `content-policy` passes all 6 assigned items with 0 errors or warnings. `source-fetch-check` verifies all 8 registered sources. All four batch evidence JSON files parse successfully. The Ray search history preserves the official Numdam timeout, recovery search, and inspected author-hosted complete PDF; no source was dropped.

The run-wide `item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` remains blocked by the same 14 unrelated pages with empty scaffold inventories listed above. The six batch-76 levels still match the current maximum in-run supplier levels and are unchanged by proof normalization. Final local decisions are: `lem-metabolic-seifert-form-implies-fox-milnor-factorization` ready; `thm-metabolizer-implies-levine-tristram-signature-vanishing` ready; `ex-knot-kt-23-worked-cases` ready; `thm-locally-flat-slice-implies-fox-milnor-factorization` escalated; `cor-nonfactorization-obstructs-sliceness` escalated; and `cex-knot-kt-23-boundary-case` escalated. The escalation records retain the exact unresolved locally flat Seifert-hypersurface supplier and affected geometric claims.

## Latest run-wide check reconciliation

The final rerun of `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` failed with 37 errors outside batch 76: five empty inventories (`character-varieties-and-the-a-polynomial-examples`, `open-questions-in-knot-polynomials-and-surgery`, `open-questions-in-knot-polynomials-and-surgery-examples`, `zero-traces-and-conway-nonsliceness`, `zero-traces-and-conway-nonsliceness-examples`) and these 32 stale/mismatched item levels (recorded → computed): `def-cusp-slope-length` 6→5; `def-zero-surgery-on-a-knot` 0→2; `def-cdr-satellite-concordance-categories` 0→3; `def-integral-half-solutions-strebel-and-l2-signatures` 1→8; `def-satellite-induced-concordance-operator` 1→8; `lem-cdr-smooth-s4-complement-is-standard-ball` 1→4; `lem-satellite-operator-preserves-concordance` 2→9; `def-blanchfield-pairing-and-higher-order-rho-invariant` 2→9; `thm-l2-signature-theorem-for-closed-four-manifolds` 2→9; `thm-amenable-von-neumann-l2-flatness` 2→9; `thm-cheeger-gromov-uniform-rho-bound` 2→9; `lem-l2-rho-invariant-bordism-independence` 3→10; `lem-amenable-D-R-l2-dimension-estimate` 3→10; `lem-higher-order-blanchfield-pairings-are-nonsingular` 3→10; `thm-cdr-concordance-categories-form-abelian-groups` 3→10; `lem-cdr-zero-surgery-pattern-homology-cobordism` 3→16; `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images` 3→10; `thm-amenable-signature-vanishing-for-solvable-bordisms` 4→16; `lem-cha-kim-integral-solvability-and-blanchfield-bordism` 4→16; `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction` 4→17; `lem-cha-kim-higher-order-rho-bound-and-coprime-separation` 5→17; `thm-cochran-davis-ray-strong-winding-injectivity` 5→18; `thm-cha-kim-winding-zero-iterates-infinite-rank` 6→19; `ex-knot-kt-27-worked-cases` 7→20; `cex-knot-kt-27-boundary-case` 7→20; `thm-epsilon-upsilon-are-concordance-homomorphism-data` 12→11; `ex-knot-kt-42-worked-cases` 13→12; `cex-knot-kt-42-boundary-case` 13→12; `lem-property-p-instanton-surgery-triangle-and-rank-input` 5→6; `thm-property-p-for-nontrivial-knots` 6→7; `lem-s-three-filling-detects-the-meridian-slope` 7→8; `thm-gordon-luecke-knot-complement-determines-knot` 8→9. None of the six batch-76 items appears in these errors; their recorded levels are directly consistent with their current in-run suppliers.

The full-run `step1-decisions.mjs check` also exits nonzero because this run is not globally closed. The item-scoped decision audit confirms the three ready records have current hashes and are closed; the three escalated records correctly remain open for owner reconciliation. No other pair's artifacts were changed.
