# Batch 19 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-19`.

Scope: seven touched carriers, no reader findings or page obligations, one refuter obligation; no foreign gate obligations. Engine retains scheduling, hashing and gates.

Historical comparison: for each of the seven items, replacing only its current sources.references block by the original manifest references reproduces the exact pre-reader raw SHA256. Each initial current raw SHA256 equals the post-reader snapshot. Thus the reader delta is independently bound as citation metadata only, without unknown mathematical history. The original manifest reference blocks are preserved in the report appendix before synchronizing their current mirrors.

## Completed item reviews (dependency order)

### lem-ip-banach-gaussian-cm-shift-ball-bound — reviewed_no_defect; change_kind metadata

Independently checked Proof 1.1–3.1 and every direct supplier interface: covariance null vectors annihilate the Cameron–Martin shift, hence the shift lies in ran(Sigma_n); restricted covariance is positive definite and the symmetric convex complement indicator meets the bounded-loss supplier. The zero support space is treated separately. Countable norming coordinates recover closed balls and continuity from above applies to finite probabilities. AC/HB/countable choice are explicit, including B={0}, h=0 and singular projections. Giné–Nickl §2.4.1 Theorems 2.4.4–2.4.5 (PDF p.65) and their proofs independently checked. Reader changed references only; reverse substitution from the manifest exactly reproduces the pre-reader SHA256, and current raw SHA256 equals post-reader.

No statement/proof repair, consumer interface change, diagram or missing necessary diagram found. Risk review complete.

### lem-ip-gaussian-shift-small-ball-ratio — reviewed_no_defect; change_kind metadata

Checked all three steps against actual Cameron–Martin translation, support, tightness, norming-family, covariance and scalar/multivariate Gaussian interfaces. The sign in the translation formula correctly uses -h. Finite joint Gaussian symmetry passes through L2 coordinate approximation and dominated convergence; e^x>=1+x also proves the conditional Jensen lower bound directly. The centered shift inequality bounds residual exponential moments uniformly in radius. Fixing n before r tends to zero, then sending n to infinity, closes the squeeze without assuming continuity of z_h in the Banach norm. Support gives every denominator positive, also for zero/degenerate Gaussian laws. Read Dashti et al. §3 Theorem 3.2 complete proof and Kekkonen–Korolev §7.5 Theorem 7.5.3 statement: these use open balls; the current independent proof establishes closed balls. Reader delta is SHA256-bound citation metadata only.

No local defect or interface change. Risk review complete.

### def-ip-small-ball-map-estimator — reviewed_no_defect; change_kind metadata

Reviewed the complete uninterrupted Definition and all linked/declarative supplier interfaces, including the covariance/RKHS definition. Closed norm balls are Borel; 0<sup_x m_r(x)<=1 follows from the explicit dense countable cover and countable subadditivity without choosing maximizing centers. A probability cannot live on an empty Banach space; the singleton case gives ratio one. Relative modes explicitly require eventual positive denominators and compare each fixed k; no interchange with a supremum is asserted. AC is confined to the covariance notation; the global definition is choice-free. Checked Dashti Definition 3.1 and notes §7.5 convention, accounting for this carrier’s closed balls and supremum rather than an assumed attained maximum. SHA256 comparison proves only source metadata changed.

No Definition change or needed consumer repair. Risk complete.

### thm-ip-gaussian-small-ball-map-functional — reviewed_no_defect; change_kind metadata

Reviewed Proof 1.1–3.1 and each actual supplier. Fernique plus epsilon<a gives an integrable likelihood envelope on D=B and the single-datum propriety theorem applies. The lower-envelope condition and continuous injection give coercivity with coefficient at least 1/4; E={0} is separate. For fixed centers local Lipschitz errors tend to zero, so the reviewed Gaussian ratio transfers with the correct sign. In the minimizing sequence choose a real norm-convergent subsequence, then use compactness of the image of a closed Hilbert ball, not merely relative compactness; testing against dense covariance classes yields ||h||<=lim||h_n|| and continuity of Phi completes attainment. Both directions of the ratio-mode equivalence are exactly exp(I(k)-I(h))>=1 iff I(h)<=I(k). No global supremum is substituted for fixed centers. Checked the full local compact-ball, Fernique and posterior-propriety proofs; the source notes Theorem 7.5.6 proof supplies contextual direct-method evidence. Reader changes citation metadata only.

No mathematical repair or Statement change required. Risk complete.

### cex-ip-infinite-dimensional-pointwise-density-fallacy — reviewed_no_defect; change_kind metadata

Independently reviewed the complete witness and Proof 1.1–2.1 with every direct dependency interface and the full batch-15 Gaussian-series proof. H0=H1=ell2, w_j=1, lambda_j=1/(j(j+1)) satisfy the precise common-basis hypotheses and telescope to total variance one; AC/countable choice cover the Gaussian branch. Disjoint open balls radius 1/3 at e_j lie in the bounded radius-two ball, forcing their common finite mass to zero. Finitely supported rational sequences are countable under the stated countable choice and dense by squared-tail and finite-coordinate error estimates; countable subadditivity then forces the entire reference measure to vanish. The refutation addresses the exact nonzero translation-invariant Borel measure finite on every bounded Borel set, without excluding densities against other references. The locally finite title is also valid: repeat the disjoint-ball argument at a sufficiently small scale inside any finite-mass neighborhood. No diagram is needed. Reader source metadata correction only.

No defect or consumer interface change. Risk complete.

### ex-ip-finite-dimensional-small-ball-map-equals-density-mode — reviewed_no_defect; change_kind metadata

Reviewed all three Verification steps, actual Gaussian-density/centering interfaces, and exact measure/integral/closed-ball supplier statements. For d,m>=1, positive-definite C and Gamma make Q=C^{-1}+A^T Gamma^{-1}A positive definite even when A=0 or rank deficient. The likelihood is bounded by one and positive on a positive-prior-mass neighborhood, so evidence is positive finite for every fixed datum. Completing the square gives posterior N(Q^{-1}A^T Gamma^{-1}y,Q^{-1}). Gaussian centering maximizes each closed-ball probability at the mean for every radius. Common positive finite closed-ball volumes and continuity give fixed-center mass ratios q(z)/q(v). Because the density maximum is unique, any other z has limiting ratio q(z)/q(m)<1 and cannot be a strong MAP; thus the title’s equality is supported. No singular-covariance claim is made. Reader changes source metadata only.

No mathematical repair or interface change. Risk complete.

## Historical source metadata preimage

Before synchronizing the manifest, the following original reference blocks were independently substituted into each initial current item using the existing YAML quoting/indentation; all seven resulting raw SHA256 values matched the pre snapshot. These values preserve that reproducible comparison after mirror synchronization.

```json
{
  "lem-ip-banach-gaussian-cm-shift-ball-bound": [
    {
      "title": "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models",
      "url": "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf",
      "locator": "§2.4, Lemma 2.4.4 and Theorem 2.4.5, including the complete proof of the Banach Gaussian Anderson inequality."
    },
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§3, Theorem 3.2 proof, including the Gaussian small-ball shift comparison cited there; the finite-projection argument is supplied locally."
    }
  ],
  "lem-ip-gaussian-shift-small-ball-ratio": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§3, Theorem 3.2 and complete proof; its proof invokes the Gaussian small-ball ratio rather than proving it."
    },
    {
      "title": "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes",
      "url": "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf",
      "locator": "§7.4, Theorem 7.5.3 and its stated Cameron–Martin ratio; the local argument supplies the ratio proof."
    }
  ],
  "def-ip-small-ball-map-estimator": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§2, Definitions 2.1–2.3 for strong/generalized MAP notions; §3, Definition 3.1 for the Onsager–Machlup functional."
    },
    {
      "title": "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes",
      "url": "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf",
      "locator": "§7.4, Definition 7.5.1 and Theorems 7.5.2–7.5.3 for small-ball and Onsager–Machlup conventions."
    }
  ],
  "thm-ip-gaussian-small-ball-map-functional": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§2, Assumption 2.1; §3, Definition 3.1, Theorem 3.2 and complete proof; §3.3, Theorem 3.5 and §3.4, Corollary 3.10."
    },
    {
      "title": "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes",
      "url": "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf",
      "locator": "§7.4, Theorems 7.5.2–7.5.3 and their proofs/statements; §7.5, Theorem 7.5.6 and complete compact-embedding minimizer proof."
    }
  ],
  "ex-ip-finite-dimensional-small-ball-map-equals-density-mode": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§2, finite-dimensional density definition and motivation; §3, Definition 3.1 and Theorem 3.2."
    },
    {
      "title": "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes",
      "url": "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf",
      "locator": "§7.4, Theorems 7.5.2–7.5.3 for the finite-dimensional and Gaussian small-ball relation."
    }
  ],
  "cex-ip-infinite-dimensional-pointwise-density-fallacy": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§2, discussion of the absence of an infinite-dimensional Lebesgue density; §3, Definition 3.1."
    },
    {
      "title": "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models",
      "url": "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf",
      "locator": "§2.4, Banach Gaussian measures and Cameron–Martin geometry; §4.4.1, Gaussian series in infinite-dimensional function spaces."
    }
  ],
  "ex-ip-map-differs-from-posterior-mean": [
    {
      "title": "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems",
      "url": "https://arxiv.org/pdf/1303.4795",
      "locator": "§2, Definitions 2.1–2.3, distinguishing MAP estimators from posterior expectations."
    },
    {
      "title": "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes",
      "url": "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf",
      "locator": "§7.4, Definition 7.5.1 and the discussion following Theorem 7.5.3."
    }
  ]
}
```

### ex-ip-map-differs-from-posterior-mean — amended_repair; refuter:19:1 — confirmed_nonfatal

Reviewed all five Verification steps and all seven actual dependency interfaces. Finite uniform-prior partitions give the polynomial moments without an added choice principle; likelihood p lies in [0,4/27], evidence is 1/12, posterior q=12 theta^2(1-theta) is continuous even at 0 and 1, has unique maximum 16/9 at 2/3, and mean 3/5. Global bound m_r(x)<=2r q_max and the matching lower bound at 2/3 show sup_x m_r(x)/(2r)->q_max. The same local continuity average at 3/5 yields limiting ratio (216/125)/(16/9)=243/250<1, now explicit in 4.1. Thus the original omitted exclusion is immediate nonfatal polish, not a false title or substantial missing prerequisite. Preserved Example, title, model, dependencies and claim strength; proof-only addition, repaired contract derivation, no judge record present. Checks: reflow unchanged, changed-item precheck pass, layout five steps zero defects, strict whole-batch proof contract pass and actual KaTeX render pass.

The refuter correctly identifies an unstated final exclusion, but its fatal/overstrong-title classification is not upheld: the exact bound follows immediately from the current authored argument. Added the exclusion in Verification 4.1, rather than weakening the true title or model. Defect `ipkt109-b19-3a-mean-map-exclusion` closes this omission. Repair confidence: 1. All routed item and risk reviews are complete.

## Source and prerequisite evidence

All seven complete current carriers, all 44 unique declared direct dependency interfaces, and the additional linked covariance definition in the mode definition were read. Exact source statements were compared to the authored Facts and all proof inferences were checked independently; the strict proof-contract check also reports all seven current quote/step contracts consistent. Full additional prerequisite proofs read here: `lem-banach-gaussian-rkhs-unit-ball-is-compact`, `thm-fernique-integrability-for-separable-banach-gaussian-law`, `thm-ip-function-space-posterior-propriety`, and `lem-ip-gaussian-series-prior-regularity`. Other supplier results were used through their exact interfaces; this is not a recursive audit of the published library.

Direct interfaces:

`def-axiom-of-choice`, `def-banach-gaussian-covariance-operator-and-rkhs`, `def-banach-space`, `def-borel-gaussian-random-element-on-a-separable-banach-space`, `def-borel-probability-law-on-a-polish-space`, `def-countable-choice`, `def-hahn-banach-extension-principle-relative`, `def-ip-misfit-evidence-and-posterior-law`, `def-ip-prior-on-a-forward-domain`, `def-ip-small-ball-map-estimator`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-measure`, `def-multivariate-normal-law`, `def-nonnegative-lebesgue-integral`, `def-polish-space`, `def-separable-space`, `def-standard-normal-and-normal-laws`, `lem-banach-gaussian-rkhs-unit-ball-is-compact`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss`, `lem-ip-banach-gaussian-cm-shift-ball-bound`, `lem-ip-gaussian-series-prior-regularity`, `lem-ip-gaussian-shift-small-ball-ratio`, `lem-rat-embeds-dense`, `lem-separable-banach-has-countable-norming-family`, `prop-measure-monotonicity`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-banach-gaussian-covariance-rkhs-is-well-defined`, `thm-bolzano-weierstrass`, `thm-borel-sets-are-lebesgue-measurable`, `thm-cameron-martin-translation-for-separable-banach-gaussian-law`, `thm-continuity-from-above-for-measures`, `thm-countable-union-of-countable`, `thm-every-borel-probability-on-a-polish-space-is-tight`, `thm-fernique-integrability-for-separable-banach-gaussian-law`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-ip-function-space-posterior-propriety`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nondegenerate-multivariate-normal-law-has-density`, `thm-product-of-countable`, `thm-rationals-countable`, `thm-support-of-banach-gaussian-is-closure-of-rkhs`.

External source passages actually read:

- [Giné–Nickl full text](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf), §2.4.1, Theorems 2.4.4–2.4.5, printed p.51 / PDF p.65, statements and complete proofs. The corrected theorem labels and finite/Banach distinction are accurate.
- [Dashti–Law–Stuart–Voss paper](https://arxiv.org/pdf/1303.4795), title page; §2 Assumption 2.1 and (2.1); §3 Definition 3.1, Theorem 3.2 and its entire proof, PDF pp.4–6. Its ratio argument invokes a Gaussian ratio and uses open balls; the current local proof supplies the closed-ball result. Theorem 3.5 was checked for its stronger lower-bound hypothesis from its statement; its full global-MAP proof and Corollary 3.10 proof were not re-audited or imported to justify this batch’s weaker pairwise claim.
- [Kekkonen–Korolev notes](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf), title page; §7.5 opening, Assumption 7.5.1, Theorem 7.5.2 and its proof, Theorem 7.5.3 statement; definitions/lemma preceding Theorem 7.5.6, and its complete proof, printed pp.95–98 / PDF pp.94–97. Source conventions were compared to the actual local arguments, rather than assuming that a cited theorem proves a stronger global claim.

## Scope, changes and consumer disposition

Only `items/ex-ip-map-differs-from-posterior-mean.md` was edited in this adjudication: Verification 4.1 now explicitly computes the mean’s limiting ratio to the global supremum. No Statement, Definition, Example description, title, dependency, status, page inventory or page body changed. Thus no interface-triggered direct/indirect consumer repair is necessary. Source-reference mirrors in the owned manifest now agree with the seven reader-corrected metadata blocks; the repaired derivation and all seven risk reviews are current in the owned contract. No prior verification.judge existed in the edited item. No TikZ/tikzcd diagrams occur in the seven carriers, and their arguments require no added diagram. All assigned defining/claim sections are uninterrupted by links and have separate reference sections.

The batch-15 Gaussian-series/prior and batch-16 posterior/propriety suppliers satisfy the actual owned uses; the page-context requirements remain ordering context. No outside repair, defective published supplier, escalation, new item/page, or proposed withdrawal arose. Existing withdrawal proposals and stable IDs remain intact.

## Local validation and handoff

- Reflow on the one changed item: unchanged.
- Changed-item precheck: 1 checked, 0 failing.
- Final proof-layout invocation after the final edit and reflow: 1 item, 5 steps, 0 defects.
- Actual rendercheck on the changed item: YAML and every math span parse under the renderer and real KaTeX.
- Strict owned-batch proof-contract check: 7/7 items, 0 errors, 0 warnings.
- Initial risk-report identified seven CRITICAL items; all seven now have specific complete Alpha reviews; final --require-reviewed: 0 errors.
- Run-specific defect-ledger validation after the append: 58 rows, 0 errors. One closed nonfatal row owns both the touched amendment and refuter finding.
- Decisions file contains exactly eight owed obligations: seven touched and one flagged. Six source-metadata-only verdicts are reviewed_no_defect; the amended example and its confirmed_nonfatal finding share the one fixed defect.

No remaining local blocker or escalation. Published content stayed read-only. No judge, stamp, dispatch, native gate battery, acceptance or publication was performed; the engine owns those operations and current decision hashes. The read-only live status recomputation confirms this run is in Step 3 with batch 19 still awaiting native adjudication collection.
