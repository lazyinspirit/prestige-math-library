# Batch 49 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-49`.

Reviewed scope, order, reader report/findings, refuter report, pre/post fingerprints and current carriers. Three touched raw source hashes match the post-reader snapshot before Alpha edits. No reader findings, page obligations or foreign gates are owed.

## Completed in dependency order

`def-ip-pnp-ista-with-denoiser`: accepted reader removal of the ambiguous unindexed return arrow. Forward arrows agree with the recurrence; all inputs and iterates are typed, positive parameters and n>=1 are explicit. No convergence or proximal guarantee is asserted. Risk review complete in contract. Statement/Definition unchanged by Alpha.

The remaining ordered reviews are recorded below; all owed work is complete.

`lem-ip-tweedie-mmse-jacobian-and-prox-potential`: reader citation/measure clarifications retained; refuter:49:1 confirmed nonfatal. Repaired Proof 3.1 with coordinate segments in a compact box and the bound M sum_j |z_j-w_j| <= n M ||z-w||. Coordinate differentiability supplies continuity at segment endpoints, so F12 now applies without presupposing a total derivative. Any coordinate order is explicit, matching F13 word-derivative conventions. Reviewed posterior normalization, density integration, moment smoothing, covariance positivity, Tweedie, injectivity, inverse patching and the global radial minimum. No finite prior moment, convexity or choice is required. Complete risk review and derivation mirror recorded. Statement unchanged; no interface propagation required.

`thm-ip-exact-mmse-pnp-ista-stationarity`: Reviewed all seven steps and F1-F6 against their actual suppliers. gamma<=1/L includes equality: majorization still holds, and the nonnegative residual r_t has gradient Lipschitz constant <=2/gamma. Completing the square uses the repaired lemma global minimizer; x_t lies in the open image and has finite objective from t=1, even if f(x0)=+infinity. Telescoping starts at t=2 to avoid infinity subtraction. Finite infimum bounds residual sums; the descent lemma applied on all R^n at x_t-gamma grad r_t/2 gives ||grad r_t||^2<=4r_t/gamma. Interior first-order optimality yields grad f=-grad r_t. No convexity, iterate convergence or trained-network conclusion is claimed. Reader F6 triangle/homogeneity citation is retained; no statement change or added choice.

`cex-ip-pnp-iterative-awgn-error-model`: Reviewed all three counterexample steps, F1-F3 and A1. With theta=x0=0, gamma=1/2 and D(z)=z^2, direct substitution gives z2=(epsilon+2)^2/8-1/2. Recomputed endpoints: epsilon in (-1/2,1/2) gives (-7/32,9/32), while epsilon in (-5/2,-3/2) gives [-1/2,-15/32). Both events have positive standard-normal probability and disjoint images, excluding a point mass. The lower bound excludes every positive-variance normal by the strictly positive full-line density. AC is explicitly inherited from both normal-law suppliers. The universal claim is refuted by a total continuous deterministic map; no exact-MMSE hypothesis is needed or claimed.

`ex-ip-scalar-mmse-exact-denoiser`: Reviewed all three verification steps and F1-F4. Positive a gives two distinct atoms, each of mass 1/2, hence a Borel probability not supported on any scalar affine hyperplane (singleton). Both Gaussian weights are positive for every real input and sigma>0. Factoring their common exponential yields exactly a tanh(az/sigma^2), including zero input and either sign. The repaired local lemma applies with gamma>0 and supplies both unique risk minimization and unique global proximal minimization. a=0 and sigma=0 are excluded explicitly; no finite-prior-moment or choice difficulty arises.

`ex-ip-approximate-cnn-mmse-denoiser`: Reviewed both verification steps, complete Example, F1-F5 and all eight actual dependencies. The two-point prior meets non-hyperplane support; Gaussian weight cancellation gives a tanh(az/sigma^2). Choosing b=eta/2 supplies the nonzero bias without choice. Error equals |b| at every input and the exact map differs at zero. The network diagram correctly composes multiplication by a/sigma^2, tanh, scaling a and bias b. Only failure of the exact map hypothesis for this prior is asserted; no absence of another objective or impossibility of convergence follows. The remark supplier was read completely: finite competing proximal values permit cancellation and imply monotonicity, contradicted by P(z)=-z. No fitted-network empirical guarantee is imported.

## Source and dependency evidence

Read each current cited supplier Statement/Definition, including the full Gaussian lemma and the non-proximal-selection remark. Checked F3 domination on open parameter intervals, F12 continuity and interior differentiability, F13 all coordinate words, positive-density null-set transfer, and the choice-free smooth inverse theorem. Read actual draft learned-estimator definition: the present maps are analytic plug-in maps, with no training assertion. No recursive audit of unrelated published suppliers is claimed.

Read [Xu et al.](https://arxiv.org/pdf/2005.07685), §1 (6a–6b), §2 Assumptions 1–3 and Theorem 1, Appendix A.1–A.2, and §3: the exact map, positive stepsize, Lipschitz gradient and finite infimum agree with the local claims. The local proof explicitly handles infinite initial objective by starting finite telescoping at t=2; no iterate convergence is inferred. The Gaussian normalization constant changes the potential only by an additive constant. The experiment supplies context, not an approximate-network theorem.

Read [Gribonval–Nikolova](https://arxiv.org/pdf/1807.04021), Definition 1, Proposition 3, §2.5.1 and Appendix A.4: nondegeneracy means no full-measure affine hyperplane; Gaussian posterior means admit nonconvex proximity penalties, with uniqueness under nondegeneracy. Checked the Gaussian polynomial bound and positive-Jacobian argument. No general Hilbert-space theorem is needed by the local finite-dimensional proof. Reading of the later Appendix A.5 was limited to its displayed differentiation and quotient argument, not the whole paper.

Read [Parikh–Boyd](https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf), §1.1 and §4.2.1 equations (4.7)–(4.8): its standard proximal definition assumes closed proper convex penalties. Only its quadratic smooth upper-bound calculation applies here; the local lemma supplies the nonconvex global minimizer independently.

## Scope, consumers and metadata

No original Statement or Definition was changed by reader or Alpha; the only Definition-section edit is deletion of the diagram feedback edge. The two retained forward edges compute exactly the same recurrence. Owned stationarity/example/remark consumers use unchanged supplier hypotheses and conclusions. No further consumer repair, published defect, external escalation, withdrawal or missing prerequisite was found. Both pages retain YAML-only compact-v1 presentation and draft status. All seven claim sections are uninterrupted by links, with each retained reference in its following reference section. There are two diagrams, both checked. Alpha changes only the lemma proof and its derivation mirror, six risk reviews, this report/decisions, defect ledger and the owned frontier-ledger note; inventory and provenance already remain correct. No verification.judge record is present.

## Decisions and local checks

Exactly four decisions: accepted_repair for the definition and stationarity theorem; amended_repair for the lemma; confirmed_nonfatal for refuter:49:1. Each completed repair has repair_confidence 1. Four closed ledger rows were appended through the serialized native append tool: ipkt109-b49-3a-lemma-citations, ipkt109-b49-3a-ista-diagram, ipkt109-b49-3a-stationarity-norm and ipkt109-b49-3a-coordinate-mvt. The refuter decision references exactly its own one row.

The three Git HEAD preimages match their pre-reader SHA256 fingerprints; before Alpha edits all three raw current files matched the post-reader snapshot. Thus the reader delta is recoverable and was inspected directly, rather than inferred from the report. The scope's separate refuter observed fingerprint is retained in the original scope; no replacement observation binding or historical-byte assertion was invented.

- Initial risk-report: seven items routed, six HIGH/CRITICAL reviews required, zero tool errors. Final --require-reviewed: zero errors with all six complete reviews.
- Explicit three-item reflow: all unchanged, exit 0.
- Explicit three-item precheck: two proof-bearing items passed; definition has no proof; zero failures.
- Final required proof-layout command batched all three touched item paths after reflow: three items, seventeen steps, zero defects.
- Exact four-obligation set and current edited Proof 3.1 contract derivation mirror: passed.
- Native defect-ledger append validated four rows and regenerated its view successfully.

No mathematical blocker or escalation remains. These are local review/check results only; no judge, stamp, certification, stage transition, publication or engine gate battery was performed.

Final edited lemma SHA256: `f8a98153e1a6c3443cfbfe0408aea9175f4cc9ccd73b1edf6ed47c3dfb60610a`.
