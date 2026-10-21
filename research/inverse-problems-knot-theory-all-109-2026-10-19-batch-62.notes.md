# Batch 62 notes — Alexander polynomials from Seifert matrices

Run inverse-problems-knot-theory-all-109-2026-10-19; role beta; batch 62.

## Controlling plan and reconciliation

- The task cites research/plan-knot-theory-track.md L279 and L281. The complete KT-07 section controls because it gives the exact determinant convention, normalization caveat, consequences, and proof route for this page.
- research/plan-spec.json confirms the A/B page IDs, order 3120/3121, category knot-theory, and the A-page requirement on seifert-matrices-and-the-alexander-module. Its item arrays are empty and contain no competing item claims. The controlling plan names three A results; the accompanying research/knot-theory-planning-2026-10-18/prerequisite-map.md adds the A-page supplier lem-square-seifert-presentation-and-alexander-normalization. That local helper is included before the determinant theorem. Shared planning files are unchanged.
- The dependency-level input hash in the task matches research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json: 58b9180dbb5cdbbe426e06f3bfdb80491a00fc7cb24de01eeabb561f508d97a4. Batch 62 is level 3 and requires batch 61.
- The design's convention is preserved: for the positive-push matrix $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, KT-06 supplies the exact module presentation $V-tV^T$. The result is the gcd-E0 polynomial $\Delta_K$, up to a unit $\pm t^k$. The distinct fraction $D_K=\Delta_K/(1-t)$ is kept separate.

## Inventory and item dependency levels

The batch manifest records the item inventory and exact direct deps before consumer carriers are authored. The in-run level rule gives:

| Item | Page | Level | In-run suppliers |
|---|---|---:|---|
| lem-square-seifert-presentation-and-alexander-normalization | A | 10 | def-knot-seifert-pairing-and-matrix (5), lem-seifert-matrix-skew-part-is-surface-intersection (7), lem-seifert-matrix-s-equivalence-under-isotopy (7), thm-seifert-matrix-presents-knot-alexander-module (9) |
| thm-seifert-determinant-is-the-knot-alexander-polynomial | A | 11 | local square-presentation lemma (10), KT-06 matrix theorem (9), KT-06 pairing and isotopy suppliers (5, 7) |
| cor-knot-alexander-normalization-symmetry-and-genus-bound | A | 12 | determinant theorem (11), square-presentation lemma (10), current knot-genus definition (3), KT-06 suppliers (5, 7, 9) |
| cor-alexander-polynomial-multiplies-under-connected-sum | A | 12 | determinant theorem (11), square-presentation lemma (10), KT-05 connected-sum definition (0), Seifert-surface existence theorem (2), KT-06 suppliers (5, 7, 9) |
| ex-knot-kt-07-worked-cases | B | 13 | both corollaries (12), determinant theorem (11), local lemma (10), plus required surface and matrix interfaces |
| cex-knot-kt-07-boundary-case | B | 13 | both corollaries (12), determinant theorem (11), local lemma (10), plus required unknot, surface, and matrix interfaces |

The item-dependency-levels function recomputed all six assigned manifest levels as 10, 11, 12, 12, 13, 13 and found no assigned-item level or cycle errors. The run-wide check remains outstanding until the batch is complete.

## Supplier inspection and mathematical interfaces

- Actual KT-06 page and item bodies were inspected, not inferred from its notes. library/knot-theory/seifert-matrices-and-the-alexander-module.md lists the draft supplier modules. items/thm-seifert-matrix-presents-knot-alexander-module.md proves the $V-tV^T$ cokernel presentation with the positive deck generator. items/lem-seifert-matrix-skew-part-is-surface-intersection.md proves $V-V^T=J_F$ and unimodularity. items/lem-seifert-matrix-s-equivalence-under-isotopy.md proves basis congruence and isotopy compatibility.
- The existing definition items/def-alexander-polynomial-from-the-first-elementary-ideal.md defines $\Delta_K$ as a generator of $E_0(A_K)$ and explicitly separates $D_K=\Delta_K/(1-t)$. The actual def-elementary-ideals-of-a-finitely-presented-module definition includes the empty-minor convention; lem-elementary-ideals-are-independent-of-the-presentation supplies the needed invariance. The current published oriented-link-invariance theorem was read in full for its module-naturality interface.
- The KT-06 source definition assumes full AC through Alexander duality; it is retained explicitly in each dependent item. The connected-sum corollary also uses the AC$_\omega$ hypothesis of thm-every-oriented-knot-bounds-a-seifert-surface, discharged from full AC by the existing implication supplier. No choice-free claim is made.
- No actual KT-06 supplier body needed by the local lemma is missing. Their draft status is authoring context only and is not acceptance.

## Sources and dispositions

- Dale Rolfsen, Knots and Links, full book PDF: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf. Read §8.A (printed pp. 200–202), §8.B (pp. 203–205), §8.C (pp. 206–211), and the connected-sum matrix discussion in §8.E (p. 218). The book gives the Seifert form convention, module cokernel route, determinant presentation, normalization, reciprocity, and the matrix block-sum interface. Its genus inequality is an exercise; the local corollary gives the complete proof.
- Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, complete PDF: https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf. Read §6.2.3 (printed pp. 43–47), including Theorem 6.2.9, Example 6.2.11, and Proposition 6.2.12. The theorem states the Seifert-matrix module presentation but defers its proof to Lickorish; the local theorem proof supplies it. Proposition 6.2.12 gives determinant-based arguments for reciprocity, knot evaluation at one, connected-sum block matrices, and the width bound; local proofs make the steps complete under the current convention.
- Charles Livingston, “Seifert forms and concordance,” complete six-page article: https://arxiv.org/pdf/math/0101035. Read the complete article. Its concordance and cyclic-branched-cover results use the Alexander polynomial but do not establish the KT-07 determinant formula or genus bound. The plan's Livingston source lead is retained in the batch source coverage as out-of-scope for these claims; no proof step relies on it.
- These two independent full treatments, one a book and one complete lecture notes, cover the A page. The B-page matrix convention is independently checked against the Kyushu lecture notes. `source-fetch-check` reports 7/8 sources fetch-verified and 8/8 resolved; the single documented drop is an optional out-of-scope plumbing thesis whose six full-text attempts returned HTTP 503. It is not used by any claim or proof. The source-resolution evidence, searches, attempts, and certainty rationale are in the coverage JSON.
- Supplemental search history: a web screenshot request for the already fetched Cattabriga PDF returned a cache miss; the full §6.2.3 text had already been read and the source-fetch stamp remains valid. Filip Mišev's thesis was consulted as an optional general plumbing check; its BORIS URL returned six HTTP 503 responses, and a searched Regensburg mirror returned 404. It was recorded as certainly out-of-scope because the assigned band surfaces and matrices are specified and proved locally. Ozbagci–Popescu-Pampu's Figure 4 caption was inspected as a braid/plumbing convention check only and is recorded out-of-scope; no proof relies on its diagram.

## Checkpoint — lem-square-seifert-presentation-and-alexander-normalization

- Exact claim: for any connected knot Seifert surface and its positive-push matrix, the square presentation has $E_0(A_K)=(\det(V-tV^T))$; the determinant at $t=1$ is $\pm1$, including the empty $0\times0$ case. Basis changes and ambient isotopies preserve the associated ideal/determinant assertion.
- Direct dependencies: def-knot-seifert-pairing-and-matrix, def-oriented-seifert-surface, def-one-variable-alexander-module-of-an-oriented-link, thm-seifert-matrix-presents-knot-alexander-module, lem-seifert-matrix-s-equivalence-under-isotopy, def-alexander-polynomial-from-the-first-elementary-ideal, thm-the-alexander-polynomial-is-an-oriented-link-invariant, def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, lem-seifert-matrix-skew-part-is-surface-intersection, def-elementary-ideals-of-a-finitely-presented-module, lem-elementary-ideals-are-independent-of-the-presentation, def-the-laurent-polynomial-ring, and lem-units-and-powers-of-the-laurent-polynomial-ring.
- Convention and argument: the square presentation is exactly $V-tV^T$; the unique maximal minor is its determinant; at one the matrix becomes $V-V^T=J_F$; the unit group is $\{\pm t^k\}$. The genus-zero empty minor is $1$.
- Sources and locators: Rolfsen §8.A–8.C, printed pp. 200–211; Cattabriga–Francaviglia §6.2.3, printed pp. 43–47. Their convention and completeness limits are recorded above.
- Validation: dependency level 10 recomputes from its actual KT-06 supplier levels. Final item precheck, strict proof contract, and six-item proof-layout checks pass; shared source, dependency, content-policy, and render results are in Final validation below.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Checkpoint — thm-seifert-determinant-is-the-knot-alexander-polynomial

- Exact claim: for every connected oriented knot Seifert surface and ordered basis in the positive-push convention, $\det(V-tV^T)\doteq\Delta_K(t)$, with $\doteq$ explicitly meaning association by a unit $\pm t^k$. The statement keeps the existing fraction $D_K=\Delta_K/(1-t)$ separate from the determinant polynomial.
- Direct dependencies: def-knot-seifert-pairing-and-matrix, def-oriented-seifert-surface, def-one-variable-alexander-module-of-an-oriented-link, thm-seifert-matrix-presents-knot-alexander-module, lem-seifert-matrix-s-equivalence-under-isotopy, def-alexander-polynomial-from-the-first-elementary-ideal, thm-the-alexander-polynomial-is-an-oriented-link-invariant, the local square-presentation lemma, the Laurent-ring definition and units lemma, full AC, and its AC$_\omega$ implication. Exact arrays are in the batch manifest.
- Convention and argument: the module presentation and the helper's square E0 ideal share the positive-meridian $t$ action. Equal nonzero principal ideals give associate generators in the Laurent domain. The helper's evaluation at one supplies nonvanishing; the isotopy suppliers support choice-independence.
- Sources and locators: Rolfsen §8.A–8.C, printed pp. 200–211; Cattabriga–Francaviglia §6.2.3, Theorem 6.2.9 and Proposition 6.2.12, printed pp. 43–47. The local proof does not use the deferred proof citation in Theorem 6.2.9.
- Validation: dependency level 11 recomputes from the helper and actual KT-06 supplier levels. Final item precheck, strict proof contract, and six-item proof-layout checks pass.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Checkpoint — cor-knot-alexander-normalization-symmetry-and-genus-bound

- Exact claim: every generator has value $\pm1$ at $t=1$, is reciprocal up to a unit, and has exponent width at most $2g(K)$. The width convention is defined in the statement as highest exponent minus lowest exponent, and the unique centered representative has value $1$ at one and support in $[-g(K),g(K)]$. The fraction $D_K$ is explicitly distinct and has a simple pole at one.
- Direct dependencies: determinant theorem, local square-presentation lemma, knot genus and surface definitions, the KT-06 matrix/module interfaces, polynomial/module definitions and isotopy invariance, full AC, and its countable-choice implication. See manifest for the exact array.
- Convention and argument: for $M(t)=V-tV^T$, $M(t)^T=-tM(t^{-1})$; the even matrix size yields $p(t)=t^{2g(F)}p(t^{-1})$. Each determinant term has exponent between $0$ and $2g(F)$. Applying this to a minimum-genus surface proves the width bound and centering.
- Sources and locators: Rolfsen §8.C, printed pp. 206–211; Cattabriga–Francaviglia §6.2.3, Proposition 6.2.12, printed pp. 45–47. Their width and normalization conventions are reconciled with the current E0 definition above.
- Validation: dependency level 12 recomputes from the determinant theorem and actual supplier levels. Final item precheck, strict proof contract, and six-item proof-layout checks pass.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Checkpoint — cor-alexander-polynomial-multiplies-under-connected-sum

- Exact claim: for oriented knots and every specified datum under the fixed gluing convention, $\Delta_{K\#J}\doteq\Delta_K\Delta_J$; local datum, surface, basis, and isotopy choices do not change the result.
- Direct dependencies: connected-sum definition and its actual local-choice lemma; Seifert-surface definition and existence; countable-choice definition and AC-to-AC$_\omega$ implication; finite surface graph-spine and Hurewicz suppliers; positive-push Seifert pairing; Alexander-module/polynomial definitions and invariance; KT-06 matrix presentation and isotopy lemma; local square-E0 lemma; determinant theorem; and full AC. The exact array is in the manifest.
- Convention and argument: use a boundary band to form the connected-sum surface. Its graph spine is the two summand spines joined by a bridge, so the old bases form a basis. Push-offs from opposite complementary 3-balls have zero linking because each cycle bounds a 2-chain in its own contractible ball; thus the Seifert matrix is a block sum. The determinant of that block sum is the product.
- Sources and locators: Rolfsen §8.E, Proposition 7 proof, p. 218; Cattabriga–Francaviglia §6.2.3, Proposition 6.2.12(6), p. 46. Their block-matrix interface is accompanied by the complete local band and linking proof.
- Validation: dependency level 12 recomputes from the actual connected-sum and KT-06 supplier levels. Final item precheck, strict proof contract, and six-item proof-layout checks pass.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Checkpoint — ex-knot-kt-07-worked-cases

- Exact claim: the two ordered genus-one Hopf-plumbing bases give $V_T=\begin{psmallmatrix}1&0\\-1&1\end{psmallmatrix}$ and $V_E=\begin{psmallmatrix}1&0\\-1&-1\end{psmallmatrix}$; their determinant representatives are $1-t+t^2$ and $-1+3t-t^2$. The displayed values at $1$ are both $1$, at $-1$ are $3$ and $-5$, and multiplicativity gives the product representative $-t^4+4t^3-5t^2+4t-1$.
- Direct dependencies: matrix and surface definitions; connected-sum definition; finite surface normal-form/Hurewicz suppliers; skew-part lemma; module presentation and polynomial invariance; square-E0 lemma; determinant, normalization, and multiplicativity corollaries; full AC and its countable-choice implication.
- Convention and argument: the matrices are computed from signed Hopf-band self-linkings, one positive core intersection, and the explicitly chosen zero cross-linking push-off; the skew-part lemma determines the remaining entry. Matrix products and evaluations are performed explicitly.
- Sources and locators: Rolfsen §8.A–8.C, pp. 200–211; Cattabriga–Francaviglia §6.2.3, Example 6.2.11 and Proposition 6.2.12, pp. 44–47. The Kyushu lecture notes, Chapter 7 Examples 7.4–7.5, pp. 78–79, are an additional convention cross-check: their displayed matrices use the opposite ordered-core intersection sign, so the carrier computes the requested entries directly and does not import those matrices.
- Validation: dependency level 13 recomputes from the actual A-page item levels. Final item precheck, strict proof contract, proof-layout, and renderer checks pass.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Checkpoint — cex-knot-kt-07-boundary-case

- Refuted claim: under the current knot convention, every $D_K(t)=\Delta_K(t)/(1-t)$ is a Laurent polynomial. The standard unknot and its spanning disk give the empty matrix, determinant $1$, and normalized representative $\Delta_U=1$; hence $D_U=1/(1-t)$.
- Direct dependencies: connected-sum and surface definitions; one-variable module and Alexander-polynomial definitions; Seifert matrix and matrix-presentation suppliers; the local square-E0 lemma; determinant, normalization, and multiplicativity results; full AC with its countable-choice implication; the Laurent-ring definition and contractible-space homology corollary.
- Argument: if $D_U$ were in $\Lambda$, then $(1-t)q=1$ for some $q\in\Lambda$. Evaluation at $t=1$ is a ring homomorphism $\Lambda\to\mathbb Z$ and yields $0=1$. Multiplicativity confirms the same obstruction for $U\#U$.
- Sources and locators: Rolfsen §8.A–8.C, pp. 200–211; Cattabriga–Francaviglia §6.2.2–6.2.3, Example 6.2.11 and Proposition 6.2.12, pp. 42–47.
- Validation: dependency level 13 recomputes from the actual A-page item levels. Final item precheck, strict proof contract, proof-layout, and renderer checks pass.
- Unresolved obligations: no mathematical or supplier gaps. Its native Step 1 record is `ready` and closed; the run-wide check remains open on other batches.

## Final validation and handoff blockers

- The batch manifest contains all six items, exact direct dependencies, and levels `10, 11, 12, 12, 13, 13`. Carrier dependency arrays match the manifest. A scoped recomputation gives those same six levels, no assigned-item errors, and no missing current-run edges in the 32-item transitive dependency closure. The run-wide `item-dependency-levels` check has 84 unrelated errors: 76 empty scaffold inventories and eight level-label defects. The exact nonempty item defects are `lem-kauffman-smoothing-operators-for-braid-crossings` (0 vs. 1), `lem-alternating-state-adequacy-and-jones-span` (3 vs. 5), `thm-reduced-alternating-diagram-minimizes-crossings` (3 vs. 4), `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots` (4 vs. 6), `cex-knot-kt-50-boundary-case` (1 vs. 5), `ex-knot-kt-50-worked-cases` (5 vs. 7), `lem-cyclic-cover-linking-form-inverse-matrix` (0 vs. 1), and `cex-knot-kt-21-boundary-case` (missing level). Empty-inventory examples include `khovanov-to-floer-spectral-sequence` and `levine-tristram-signatures-and-arf-invariant`; neither is in batch 62.
- Passing scoped checks: `precheck` 6/6; strict proof contracts 6/6; `proof-layout` 6 items, 22 steps, 0 defects; `rendercheck` all six carriers and both pages, 0 errors; `content-policy` 6 items, 0 errors; `manifest-deps` 6 items, 0 errors; focused `depcheck` 0 errors; `fwdcheck` 0 errors; `extcheck` 0 unproved items; `prosecheck` 0 errors/warnings; coverage checklist 2 pages, 20 harvested results, 0 errors; and source fetch check 7/8 stamped, 8/8 resolved with one documented optional-source drop.
- The focused `pathcheck` has no errors; it warns that `library/knot-theory/_category.md` is absent, so the knot-theory collection has no category overview. This pair did not edit the category file.
- Run-wide `depsource` stops on empty inventories in batch 100 (`khovanov-to-floer-spectral-sequence` and its examples page). After the batch-55 duplicate was corrected by its owner, `batch-dependency-levels check` reports the recorded run levels as stale; only the owner may regenerate that shared schedule evidence. These foreign batches were not edited.
- Native Step 1 records were created with `decision: ready` and `owner: false` for all six items, each with its complete direct dependency list. The final `step1-decisions check` reports these six closed; the run-wide result remains open with 414 of 749 items ready and 411 other item/page work rows. No escalation was overwritten.
- Both new page files contain YAML frontmatter only with empty bodies; the batch inventory and cross-batch edge file contain the assigned six items, one prerequisite-page edge, and 85 actual item dependency edges. Edge evidence records supplier bodies and consumer interfaces; `verified` is interface inspection, not acceptance.

## Current run status at handoff

- Recomputed `tools/autopilot` status at 2026-10-18T22:39:15.939Z: run remains `running`; stage `1-scaffold` is 55/109, missing batches 6, 20, 21, 23, 24, 27, 28, 29 plus 46 others; nothing is in flight. The current owner blocker is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`: `stage-stalemate` for units 31 and 56, which are covered but artifact-incomplete and no longer running. This is outside batch 62's write boundary.
- The earlier batch-55 duplicate edge was corrected by its owner after the first failed readiness attempt. All six batch-62 records now exist and verify as `ready`; the global check remains open on the other 400 work entries. The recorded batch dependency-level file is stale after that foreign manifest change and remains owner-managed.
