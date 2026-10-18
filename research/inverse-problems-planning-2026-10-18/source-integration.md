# Inverse-problems source integration, 2026-10-18

This index integrates all six reader-owned `reader-N.md` and `.json` reports.
Root independently checked the 19 downloaded PDFs against their recorded
hashes and page counts and confirmed they are ignored under
`.autopilot/scaffold-refresh-2026-10-18/sources/`; the check receipt is
`.autopilot/scaffold-refresh-2026-10-18/source-artifact-check.json`. There
were 19 full-text reading instances, 18 distinct texts, and 759 unique PDF
pages; Clason's 137-page notes were independently read in readers 1 and 5.
The research reports retain paraphrases and theorem locators, not bulk text.

| Lane | Full texts read | Main claims used in the scaffold | Material limits retained |
|---|---|---|---|
| Reader 1: deterministic linear/spectral | Clason, *Regularization of Inverse Problems*, arXiv:2001.00617v2, 137 pp.; Brandt–Horn, *Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems*, arXiv:2610.13483v1, 22 pp. | Compact Hilbert SVD and Picard criterion; regularization error split; source-class moduli and deterministic lower bounds; filter qualification/saturation; Landweber; discretization error; narrow factorized double-discrepancy theorem. | Clason's core assumptions are compact/Hilbert; Bayesian/statistical sections are explicitly an outlook. Brandt–Horn is a 2026 unreviewed preprint with a factor-order inconsistency, strong simultaneous-diagonalization/compatibility hypotheses, empirical experiments outside some theorem hypotheses, and an open rate-optimality question. |
| Reader 2: statistics/minimax | Kretschmann–Werner, MAP feature testing, arXiv:2402.00686v5, 34 pp.; Lawrence–Michailidis–Nair, active network tomography, arXiv:0708.1079v1, 21 pp.; Ingster–Sapatinas–Suslina, minimax detection, arXiv:1001.1853v4, 26 pp.; Li–Werner, SOLIT, arXiv:2304.10356v2, 28 pp.; Ding–Mathé, general-source minimax rates, arXiv:1707.01706v2, 7 pp. | Isonormal inverse experiments and feature testing; design-dependent tomography identifiability; Gaussian sequence cutoff risk and constant-factor minimax comparison; mild/severe detection regimes; SOLIT oracle inequality and rate conditions. | Cavalier's broad 2008 survey was inaccessible and is not counted. Ingster's complete main article was read, but its detailed proof supplement was not; the scaffold requires a local proof or complete alternate source for theorem-level detection/adaptation claims. Network-tomography criteria whose proof is only cited in the chapter are examples/design evidence until independently sourced. The statistical literature here does not establish general honest inverse-problem coverage. |
| Reader 3: Bayesian/function-space computation | Dashti–Stuart, *The Bayesian Approach to Inverse Problems*, arXiv:1302.6989v4, 107 pp.; Cotter–Roberts–Stuart–White, function-space MCMC, arXiv:1202.0709v3 / *Statistical Science* 28(3), 23 pp.; Blechschmidt et al., flow matching, arXiv:2610.02377v1, 38 pp. | Prior support/sample regularity; posterior propriety; Hellinger data stability and potential-discretization error; small-ball MAP; pCN reversibility/invariance; finite-dimensional conditional flow transport. | The Acta Numerica Stuart article from 2010 was inaccessible and is not counted; the full lecture-note text is the alternative. Posterior contraction is not proved by generic posterior stability. Flow-matching work is an unreviewed finite-dimensional preprint; its function-space error theory is open. Global Lipschitz vector fields give bi-Lipschitz flows, while the classical Jacobian formula requires stronger C¹ spatial regularity (or a stated a.e./Sobolev-flow theorem). Reader 3 corrected the support-point proof of evidence positivity; continuity on bounded noncompact sets alone is insufficient. |
| Reader 4: PDE/tomography/scattering | Salo, *On geometric inverse problems and microlocal analysis*, arXiv:2312.08123v1, 60 pp.; Mazzucchelli–Salo–Tzou, analytic double-fibration support, arXiv:2306.05906v1, 46 pp. | Euclidean Radon/Fourier slice and filtered backprojection; simple-surface geodesic X-ray injectivity in the stated 2D proof scope; finite-time wave coefficient recovery; conditional Calderón uniqueness; analytic Bolker visibility/support. The reader-4 prerequisite annex now records 13 concrete local module contracts and proof routes for IP-39–41. | A Sobolev stability exercise in Salo is not treated as proved. The geodesic proof is simplified to 2D; broader cases cite external work. PDE coefficient results are qualitative/conditional and do not supply general noisy-data stability. Analytic microlocal conclusions need analytic structure, visibility, and (for local support) one-sided vanishing. The annex identifies imported foundations that remain local proof obligations: analytic FBI/FIO and continuation, variable-metric wave well-posedness, full Gaussian-beam residual estimates, product Carleman/CGO remainders, conductivity DN conjugacy, and the cubic DN differentiability step. |
| Reader 5: nonlinear/variational/sparse | Clason notes as above, 137 pp.; Iglesias–Mercier–Scherzer, 2D TV-regularized linear inverse problems, arXiv:1711.06495v3, 26 pp.; Kaltenbacher, Banach range invariance/EIT rates, arXiv:2403.18704v1, 27 pp. | TCC, nonlinear Tikhonov existence/cluster stability, nonlinear Landweber/LM/IRGNM; spatial TV source certificates and level-set convergence in a narrow 2D setting; range-invariance/VSC joint, split, and frozen-Newton rates with EIT applications. | Clason's nonlinear results are Hilbert/local and do not cover Banach penalties. TV is linear, 2D, and boundary-convention specific. Kaltenbacher's hypotheses are extensive and problem-specific. No complete sparse-recovery or manifold-constrained inverse source was read; the scaffold limits sparse claims to a fully supplied nullspace-property proof and requires sourcing/proof of robust variants. |
| Reader 6: learned/data-driven | Daras et al., diffusion inverse-problem survey, arXiv:2410.00083v1, 38 pp.; Xu et al., exact-MMSE PnP-ISTA, arXiv:2005.07685v1, 10 pp.; Zheng et al., InverseBench, arXiv:2503.11043v2 / ICLR 2025, 29 pp.; de Hoop et al., EIT inverse-map/FNO, arXiv:2511.20361v1, 80 pp. | Exact conditional-score decomposition and approximate measurement-score taxonomy; stationarity for exact-MMSE PnP-ISTA; dataset- and solver-specific benchmark observations; a rigorous but nonconstructive EIT logarithmic-stability-to-FNO existence bound. | The survey is non-exhaustive; the perception-distortion theorem it cites was not independently read. PnP theorem excludes approximate trained denoisers. InverseBench evidence is empirical with small PDE validation/test sets. The FNO result is an existence theorem, not a training/generalization/cost/calibration result, and logarithmic instability remains. The main inverse-map modality assumptions do not cover every PDE class. |

The source dossiers are the primary citation map; exact title, author, version,
retrieval date, original URL, SHA-256, extraction range, and reader-authored
limitations remain in `sources/reader-1.md` through `reader-6.md` and their
paired JSON files. The scaffold does not claim to have personally repeated
the readers' complete-text reads, re-proved their source theorems, reproduced
any code, or upgraded empirical results to mathematical guarantees.

## Reused library interfaces checked for the plan

The existing carrier map in `proposed-registration-delta.json` gives each
published page ID and exact `library/...` path. The central reusable blocks
are:

- compact Hilbert SVD, Moore–Penrose pseudoinverse, source-power/Tikhonov
  filters, Morozov, Landweber, IRGNM, and the detailed data/discretization/
  solve-residual error chain;
- generalized white noise in a negative Sobolev space, statistical
  experiments/losses, sparse identity-design minimax lower bounds, and
  Le Cam/Assouad/Fano tools;
- Bayesian posterior kernels, Banach-Gaussian support and Cameron–Martin
  theory, exact Hellinger/TV conventions, Gaussian-process posterior and
  contraction results, polished-tail credible-set coverage, general-state
  MCMC, and Feynman–Kac SMC;
- finite-dimensional proximal/PHDG/LM methods, automatic differentiation,
  PDE state and adjoint-gradient/error estimates, and constrained
  finite-element optimization;
- weak elliptic/wave forward equations, Sobolev traces/Green identities, and
  outgoing Helmholtz volume-integral scattering and Born error bounds.

The IP-39–41 proof-module contracts are now listed directly in the prose and
in the reader-4 annex. They are designed local suppliers with explicit
hypotheses and proof routes, not claims that either source proves their
missing foundations; independent review must check each contract and route.
The other new local obligations are deliberately separate: inverse-problem
identifiability/modulus, compact Picard range, inverse source-class minimax
arguments, Gaussian sequence inverse risk, experiment-specific white noise,
function-space posterior well-posedness, nonlinear inverse regularization,
spatial BV/TV, geometric visibility, and EIT/FNO extension/approximation.
Published pages are not renamed, rehomed, or made to depend on this category.

## Audit integration, 2026-10-18

The substantive repair adds explicit missing proof designs for IP10 mixture/Lindeberg testing, IP19 small-ball ratios, IP24 flow differentiability, Banach convex duality/VSC, multidimensional BV/coarea/relative isoperimetry/TV density estimates, IP38 geodesic/Pestov foundations, IP39 analytic cutoffs/FBI/Morse/stationary phase/continuation, IP40 metric wave/lifting/polar/Borel/beam/finite propagation, IP41 nonresonant manifold elliptic/Carleman/CGO/boundary quasimode/cubic DN, and IP45/IP47 quantitative EIT, Hilbert–Schmidt kernel, extension and neural approximation. These are unauthored obligations, not claims that the source readers proved them. The EIT source cites rather than proves decisive planar/higher-dimensional stability and Hilbert extension; those gaps are explicit local designs, never `op-` suppliers.

The audit independently checked TV Theorem 2 (PDF pp9–10) and corrected the erroneous `α=o(δ)` summary in the scaffold and reader5 Markdown/JSON, with the original report/read attestation preserved. Exact threshold, boundary curvature and subsequence/a.e.-level conclusions replace it. The nonlinear Tikhonov contract now states weak-to-weak graph closedness, and Picard requires the orthogonal-range condition. Current published finite matrix pseudoinverses do not define an unbounded Hilbert pseudoinverse. Existing weak subsequence/norm-lower-semicontinuity and Cameron–Martin compact-ball bodies are reused rather than duplicated.

Coverage now has 55 pairs / 110 pages, preserving IP01–52. IP53 supplies real complement-property phase retrieval; IP54 gives well-defined EIG and Gaussian design; IP55 gives finite observability, similarity gauge and exact rank-qualified block-Hankel realization. Explicit deconvolution/backward-heat spectral budgets join existing examples. The three new pair references are bibliographic leads with elementary local proof designs; no new full-text reading is claimed. Existing reader scope remains 19 reading instances, 18 distinct works, 759 unique PDF pages (896 counting the repeated Clason read).

Every open-problem proposal still owes a concrete formulation and dated solution-status check. “No dossier proves it” is not evidence that a mathematical problem is open. All finite-computation, learned-score, pCN-mixing, coverage and approximation limitations remain explicit. This research integration authorizes no proof acceptance or production publication.
