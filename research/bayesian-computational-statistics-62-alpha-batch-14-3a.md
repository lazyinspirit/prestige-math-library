# Batch 14 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-14`.

Scope has no touched items, touched pages, reader findings or refuter findings. Pre/post item, contract and page fingerprints agree. Exactly zero decision entries are owed; risk reviews remain required for five items. No carrier repair has been made.

## Completed review, in generated dependency order

### Level 1: `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`

Read all five proof steps and all ten direct supplier bodies. Finite Gram matrices are PSD; relabelling and restriction preserve the stated characteristic function, so Gaussian uniqueness supplies enumeration invariance and consistency. The empty support (also T empty) has its singleton law. The real-line lemma supplies standard Borel coordinates, and the AC Kolmogorov theorem supplies exactly cylinder existence and uniqueness. Repeated indices reduce by grouping coefficients at distinct sites; zero variances and singular matrices need no inverse. AC covers simultaneous finite enumerations and the declared Gaussian/extension interfaces. No continuity, joint index measurability or Banach-valued tightness is inferred. Checked van der Vaart–van Zanten section 2.1, printed p.202; source agrees with the arbitrary-index finite-law convention. Reader/refuter findings are empty. No defect found.

Sources: https://arxiv.org/pdf/0805.3252, section 2.1, printed p.202; https://gaussianprocess.org/gpml/chapters/RW2.pdf, Chapter 2. Local prerequisites are the ten IDs in the current carrier deps, read independently, including the full current Kolmogorov extension proof and finite Gaussian construction. No decision is owed for this untouched, unflagged item. Risk review is complete in the owning contract.

### Level 2: `thm-finite-gaussian-process-posterior-and-predictive-laws`

Read all six proof steps and the ten direct prerequisites, including the independent-stack proof, full current conditional-normal kernel proof, Cholesky equivalence and triangular-solve proofs. A finite evaluation stack is Gaussian even with repetitions; independence of noise from the process implies independence from that stack. The affine map to (f_test,Y) gives cross-block K_*X and observed covariance C. C positive definite satisfies the conditional-normal supplier exactly; its residual construction proves PSD Schur complement and a measurable all-y conditional kernel without inverting prior or predictive blocks. Jointly independent prediction noise changes only the predictive block by R_*. Cholesky uses its positive diagonal to solve Lz=b and L^T u=z; the product equation gives Cu=b. Positive n,p exclude empty vectors; n=p=1, zero noise when C remains SPD, repeated indices and zero conditional variance are permitted. The theorem is not an iff claim; the risk signal comes from a cited Cholesky title. AC is retained. GPML equations 2.22–2.24 and Algorithm 2.1 (printed pp.16,19) cover the zero-mean iid-noise specialization; the broader nonzero-mean correlated-noise claim follows from the reviewed local Gaussian argument. Empty reader/refuter findings; no defect found.

No mathematical or carrier edit; risk review complete. No owed decision. The batch-6 conditional-normal supplier remains outside edit scope and was read as prerequisite evidence, not certified by its presence or prior reports.

### Level 3: `ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise`

Read all four verification steps and every direct dependency; the three additional product-measure/rectangle/product-sigma suppliers have the needed probability-space interfaces. Constant kernel PSD follows from (sum a_i)^2; R is SPD by completing the square. Product of GP and noise laws makes the entire process and noise independent, not merely pairwise independent coordinates. C=[[2,3/2],[3/2,2]] is SPD with determinant 7/4 and inverse [[8/7,-6/7],[-6/7,8/7]]. With residual (-1,2), the solve is (-20/7,22/7), yielding mean 16/7. The covariance reduction is 4/7 and variance 3/7. AC is declared and the observation is a value of the selected all-y kernel, not a claim of pointwise uniqueness on null observations. Positive fixed dimensions exclude empty cases. GPML regression conventions and the independently reviewed broader posterior theorem justify this generated finite example. Reader/refuter findings empty; no defect found.

Risk review complete; no carrier repair or decision owed.

### Level 3: `ex-gaussian-process-extrapolation-retains-independent-index-uncertainty`

Read all three verification steps against the nine already-read direct suppliers. Grouping repeated sites gives a sum of squared grouped coefficients, proving PSD for every finite list, not only the two distinct indices. Product GP/noise laws supply measurable independent random elements under the declared AC Gaussian interfaces. With one training and one test coordinate the blocks are K_XX=K_**=R=1 and K_*X=0, so C=2 is SPD. The reviewed posterior theorem gives exactly mean zero and variance one for every real y in its selected version. Thus the independent unobserved site retains its original normal law; no general geometric extrapolation or sample-path claim is made. Empty data are outside this fixed example; the zero cross-block and repeated-site PSD boundary are handled explicitly. Source conventions checked in GPML Chapter 2; reader/refuter findings empty. No defect found.

Risk review complete; no carrier repair or decision owed.

### Level 3: `ex-singular-gaussian-process-prior-and-predictive-covariances`

Read all four verification steps against the nine direct prerequisites already reviewed. The constant kernel is PSD for arbitrary coefficient lists, and product probability gives the required entire-process/noise independence with AC retained from the Gaussian interfaces. K_XX=J_2 has rank one, whereas C=J_2+I_2 is SPD by u^2+v^2+(u+v)^2 and has the displayed inverse. For repeated test list (b,b), both cross-block and prior test block are J_2. Exact multiplication at y=(1,0) gives mean (1/3,1/3), reduction (2/3)J_2, and conditional covariance J_2/3. Its eigenvalues are 2/3 and zero, hence rank one and PSD; this is a valid singular law supported on equal test coordinates. Only C is inverted. Fixed two-coordinate dimensions exclude empty cases; singularity and repetitions are the intended boundary witnesses. The selected kernel convention matches the posterior theorem and the source regression convention. Reader/refuter findings empty; no defect found.

Risk review complete; no carrier repair or decision owed.

## Dispositions and scope

No confirmed defects, published supplier alerts, missing prerequisites, proposed withdrawals or blockers were found. No defect-ledger row is appropriate. No Statement or Definition changed, so no consumer repair or additional-hop review was triggered. The two owned cross-batch rows were maintained with fresh evidence: the conjugacy-page prerequisite and the posterior theorem’s conditional-normal supplier. Both remain verified at the actual interface used; no new unresolved dependency arose. The shared frontier ledger was refreshed and deduplicated through its tool. Published content stayed read-only.

Five `risk_review` objects in the owning proof contract were enriched, and the two existing owned cross-batch dependency evidence rows were refreshed. Item sources, pages, manifests, provenance, prior evidence and verification stamps were preserved. These audit enrichments add no decision obligations; the required decisions array is empty. No judge cycle, stamping, certification or engine transition was attempted.

## Checks

Initial risk report: zero errors; two CRITICAL, three HIGH and one MODERATE item. Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-14.proof-contracts.json --require-reviewed`: zero errors, all five required reviews complete. `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-14.proof-contracts.json --strict`: zero errors, zero warnings, 6/6 items checked. Independent raw SHA-256 comparison: all six current items and both pages match the identical pre/post-reader snapshot fingerprints. `node tools/frontier-dependency-ledger.mjs refresh --run bayesian-computational-statistics-62`: refreshed and deduplicated successfully. Decisions JSON parsed and has exactly the required empty array. No item was edited, so reflow, item precheck and proof-layout are not applicable to this dispatch.

Review completed in the generated level order, with each contract risk review and this report checkpoint written before proceeding to the next item. Final disposition: no repairs, no confirmed defects, no escalations. Engine hashing and the later gate battery remain engine-owned.
