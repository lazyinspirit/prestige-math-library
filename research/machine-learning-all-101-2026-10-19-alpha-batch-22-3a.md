# Batch 22 Step 3a adjudication

Run: machine-learning-all-101-2026-10-19. Group: batch-22. Only batch 22 is writable; published suppliers remain read-only.

## Dependency-order review

- Level 0, `lem-ky-fan-trace-maximization`: reviewed all steps and current F1–F5 supplier statements/proofs. Projection coefficients in [0,1] sum to q; the two deficit sums give both directions of the equality characterization, also for ties, A=0 and q=p. No defect. Complete risk review recorded. Sources: current item Facts F1–F5 and their exact local carriers; Cameron §2.1 and von Luxburg §5.2 are bibliographic context, not externally consulted evidence.



- Level 2, `thm-classical-mds-recovers-euclidean-distances`: retained the explicit eigenvalue nonnegativity calculation as audit enrichment (`reviewed_no_defect`, `change_kind: audit_enrichment`). The immediate implication in the original proof was already sound; no defect is manufactured for this expansion. All steps and six suppliers checked; double-centering, zero-rank/n=1, positive-eigenvector centering, exact distances and span isometry are sound. Statement and consumer interface unchanged. Complete risk review recorded.

- Level 2, `thm-minimum-norm-lle-weights-exist-uniquely`: all four steps and F1–F4 checked. Affine parametrization plus finite least squares and orthogonal projection proves unique least-norm weights, including singular/T=0 and k=1 cases, without AC. Complete risk review recorded.

- Level 2, `thm-pca-frobenius-optimality`: three steps and eight suppliers checked. Trace reduction, SVD squared eigenvalues, tail error and both equality directions hold also for q=p, n=1, rank zero and ties. Published Frobenius definition and norm-formula theorem have the routed inline-link defects; their used mathematical interfaces are sound. Risk review complete; publication maintenance remains owner work.

- Level 3, `ex-rank-q-pca-exact-reconstruction`: Read all three steps and both previously reviewed suppliers. X is centered, X^TX=diag(2,0), Q=e1 is feasible and XP=X. Zero error is minimal; the strict 2>0 eigenvalue gap proves uniqueness of the subspace but not the signed frame. No AC, diagram or reader/refuter finding. Risk review complete.

- Level 3, `ex-singular-local-lle-covariance`: Read all three steps and both actual weight suppliers. Tie rule gives (4,2,3); Z=(0,-1,1) has nonzero rank-one Gram matrix. Zero residual iff w2=w3=t and w4=1-2t; norm=6(t-1/3)^2+1/3 gives exactly the stated unique weights, despite singularity. No matrix inverse or choice; no diagram or reader/refuter finding. Risk review complete.

- Level 4, `thm-lle-trace-minimizers`: amended reader repair by adding `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` to deps. The current F7 citation and spectral/positivity calculation are valid. Four proof steps and seven suppliers checked: kernel identity, invariant zero-sum restriction, positive eigenvalues and Ky Fan on -R establish the minimum and tie cases, including q=n-1. No Statement change; no consumer interface change. Refuter finding confirmed nonfatal; repair_confidence=1. Complete risk review recorded.

- Level 4, `ex-connected-lle-graph-need-not-have-simple-zero`: Read four steps and all four actual suppliers. Duplicate-point rows uniquely reconstruct with weight 1 on duplicate, row 5 uniquely uses (1/2,1/2); neighbor tie rule gives the six union edges drawn. Graph is connected but fixed vectors are (a,b,a,b,(a+b)/2), so kernel dimension is exactly 2 and LLE correctly returns failure. Diagram has all six edges and distinguishes selected relations from nonzero weights. No AC or reader/refuter finding. Risk review complete.

- Level 5, `ex-square-loop-mds-isomap-lle-differ`: Checked all four steps and six previously reviewed actual suppliers. Centered square Gram has eigenvalues (1,1,0,0); chosen ux is unit, yielding repeated pairs. Tie lists yield path 4-1-2-3, whose graph distances equal the stated centered line distances. Singleton weights give displayed W and M, constant fixed kernel, symmetric-subspace spectrum (0,2) and antisymmetric characteristic lambda^2-6lambda+4. Bottom vector with a=sqrt(5)-2 is correct and normalized by the LLE constraint. Four distinct coordinates and unequal adjacent gap ratios separate LLE from MDS and ISOMAP even under reflection/translation. TikZ side labels, three blue path edges and omitted dashed side agree with tie rule. No AC or defect. Risk review complete.

All nine routed high-risk reviews are complete. No substantial unmet mathematical prerequisite or unresolved uncertainty identified. No new helper, withdrawal or Statement/Definition edit was necessary.

## Routed decisions and ledger

Exactly five obligations are decided in the accompanying decisions JSON:

- `touched:22:thm-classical-mds-recovers-euclidean-distances`: `reviewed_no_defect`, audit enrichment, `defect_ids: []`. The reader calculation is retained. The authenticated preimage matches the immutable pre-reader raw fingerprint and the current item matches the reader-post raw fingerprint. The original omitted unit-eigenvector calculation is an immediate elementary consequence, not a mathematical defect.
- `touched:22:thm-lle-trace-minimizers`: `amended_repair`, confidence 1. The reader's F7 and positive restricted-eigenvalue explanation are sound and retained; the newly cited real spectral theorem is now also declared in item and manifest dependencies. Closed defect `ml101-b22-3a-lle-spectral-dependency`.
- `reader:22:1`: `confirmed_nonfatal`. Closed bounded editorial finding `ml101-b22-3a-frobenius-format`, disposition `nonfatal-recorded`. Published source maintenance remains pending owner action.
- `reader:22:2`: `confirmed_nonfatal`. Closed bounded editorial finding `ml101-b22-3a-norm-formula-format`, disposition `nonfatal-recorded`. Published source maintenance remains pending owner action.
- `refuter:22:1`: `confirmed_nonfatal`, confidence 1; route `flagged`. Shares precisely the LLE dependency defect and repair with its touched obligation. One closed ledger row references both decisions; this is not two defects.

All three confirmed defects have closed rows in `research/defect-ledger.jsonl`, caught at `3a-adjudicate`, with exact decision references. The generated view was regenerated by the append tool. No row was created for a mechanical failure or the sound MDS enrichment.

## Published findings and consumer review

`def-frobenius-matrix-norm` has inline links throughout its complete Definition, including the coordinate norm explanation and final norm-comparison reference. Its used interface is sound: vectorizing the entries gives the standard coordinate inner-product norm and the real squared-entry formula. Consumer `def-rank-q-principal-component-analysis` uses precisely that formula. All six linked supplier IDs, exact location, current raw fingerprint and relocation strategy are recorded in the canonical published ledger.

`thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` has an inline operator-norm link in Statement item 1. Its current proof's Frobenius formula follows from column/row unitary invariance and the SVD, and the current factorization of UAV has the correct right unitary factor. Consumer `thm-pca-frobenius-optimality` uses precisely the squared singular-value sum, allowing zero padding. No mathematical consumer repair is necessary.

The current raw-source envelopes reproduce both reader `observed_sha256` values exactly; the refuter observed envelope reproduces the immutable reader-post LLE carrier. There is no missing historical preimage or unbound-observation issue in these obligations. The published items were not edited. Their A-P maintenance entries and two unique classification-index rows were merged after acquiring `research/.published-consumer-ledger.lock`; the lock was released only by its creator. Current queue counts were recomputed from distinct literal IDs while dated inventory claims were preserved. These entries close adjudication, not owner source maintenance or publication certification.

No Statement or Definition changed. The sole source edit is the LLE frontmatter dependency, mirrored in `research/machine-learning-all-101-2026-10-19-batch-22.pages.json`. Its F7 citation already exists in the proof contract. No new provenance label or judge invalidation is needed for this dependency-only amendment; no judge stamp exists on the item. All nine complete risk reviews were recorded in the owning proof contract before moving to higher routed dependency levels.

The batch-owned cross-batch input remains `[]`: all actual in-run suppliers reviewed here are in batch 22, and the remaining suppliers are published. The frontier dependency merger was refreshed after the declaration edit. No outside consumer edit, supplier escalation, withdrawal, new item or page was needed.

## Diagrams and pages

The connected-LLE example's six union edges and point/index labels agree with all five deterministic lists, including zero-weight selected edges. The square example's three blue graph edges and omitted dashed square side agree with its four index tie decisions. The additional assigned disconnected-ISOMAP diagram has precisely edges {1,2} and {3,4}, both labelled 1/10; its proof excludes every cross edge by the 99/10 lower bound. All three diagrams are correct, and the numerical proofs are independent of their drawings. No missing diagram is required by the exposition.

The two existing batch pages remain draft, YAML-only, with `page_layout: compact-v1`, full inventories and no summary. Scope owes no page decision; neither page was edited.

## Sources and evidence limits

Read the current proofs and actual exact supplier carriers named in each risk review, notably the standard coordinate inner products, real self-adjoint spectral theorem, trace definition/cyclicity, orthogonal basis/decomposition, finite least squares, SVD, published norm formulas, and batch-local centering, equal-Gram, Ky Fan, neighbor, PCA/MDS/LLE definitions and algorithms. The finite linear-algebra arguments were checked directly; no unfamiliar or unresolved result required external research. Bibliographic source references in the items (Cameron §§2–3,6–7; ESL §§14.5,14.8–14.9,18.5.2; von Luxburg §5.2) were not freshly retrieved and are not claimed as external reading. This is the routed adjudication and direct used-interface review, not a recursive audit of every published supplier's transitive proofs.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-22.proof-contracts.json`: 0 errors, 15 result/example items routed, nine HIGH items.
- Final same command with `--require-reviewed`: 0 errors; all nine HIGH reviews complete. The added seventh LLE dependency raises its score to 7, still HIGH.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-lle-trace-minimizers.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-lle-trace-minimizers.md`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-lle-trace-minimizers.md`: OK, actual KaTeX and frontmatter parsing.
- Final `node tools/proof-layout.mjs items/thm-lle-trace-minimizers.md`, after the last item edit and formatter: 1 item, 4 steps, 0 defects.
- `node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: refreshed and deduplicated.
- Defect-ledger append: three valid rows appended and generated view rendered. Decision inventory independently compared to the exact scope: five obligations, no extras or omissions; nine complete risk-review entries.
- Verified active run against `.autopilot/machine-learning-all-101-2026-10-19` via the native read-only status command and current `git log`. Scheduling, stamping, judging and stage transitions remain engine-owned; none was initiated.

No mathematical blocker or open local repair remains. Published formatting maintenance is explicitly queued for the owner. The engine must stamp current decision hashes and run its ordinary gate battery; no local check here claims acceptance or certification.
