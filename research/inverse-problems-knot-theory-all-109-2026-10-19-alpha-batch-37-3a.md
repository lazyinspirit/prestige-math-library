# Batch 37 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-37`.

Four owed obligations decided: three metadata normalizations reviewed without a mathematical defect; one refuter finding confirmed fatal and repaired with confidence 1. All eleven HIGH/CRITICAL risk reviews are complete. No batch-local blocker remains. No engine acceptance or gate completion is asserted.

The current three touched item raw hashes match their reader-post snapshots exactly: lemma `b1767e3c4d4f0d228197a5351c342da1fd76c8bc95870320bdddd6487ec1d557`, corollary `735978de7d9a2fdb45fb5ae7d0f8067acd0f47c628f4ab87db2027d9b4c543d8`, compact-support example `5bc2275fba6cc6f04ae86f057af091527c6e5a4ea96d92daaa9f49d304ca2894`. Their pre/post item hashes differ and contract/manifest hashes do not. The reader report explains the locator/title metadata normalization; these decisions retain it without claiming a historical proof repair. Manifest mirrors now match the current metadata.

## lem-ip-compact-support-fourier-laplace-is-entire

Steps 1.1–2.1 checked: enlarge to a common rectangle; bounded x_j gives uniform exponential difference quotients and componentwise Riemann integration passes their limits. Holds at x_j=0 and f=0, for every fixed other complex coordinate, without choice. Title accurately asserts separate entirety. Salo §2.1 Theorems 2.1–2.2 support conventions/full-angle inversion, not this extension; Krishnan–Quinto Theorem 3 supplies compact-support analyticity context. Reader metadata changes accepted.

## cor-ip-limited-angle-compact-support-uniqueness

Steps 1.1–2.1 checked: any nonempty open angle set contains an arc giving a real product rectangle; apply the one-variable identity theorem first in z1 then z2. Reapply derivative lemma to polynomial multiples of f to obtain all zero moments. Stone–Weierstrass applies to the unital point-separating real polynomial algebra on nonempty compact support; approximate conjugate f componentwise. Uniform integral bound and positivity on a box force f=0. Empty support handled. Approximation sequence can be selected canonically among rational polynomials, so no countable choice is required. Reader Salo locator correction accepted; claim unchanged.

## lem-ip-limited-angle-radon-data-is-l2-on-compact-support

Steps 1.1–2.1 checked: compact support supplies uniform finite line integration and continuous data. Every (possibly disconnected or empty) line intersection with Omega has diameter at most diam(Omega), hence length at most that number; Cauchy–Schwarz yields the pointwise bound. Bounded integrand on Theta times a finite box permits Fubini; orthogonal substitution has absolute determinant one. Empty/zero-measure Theta and f=0 give zero on both sides. CC is explicitly carried for the substitution supplier.

## lem-ip-schwartz-radon-well-defined

Steps 1.1–3.1 checked: product-coordinate polynomial weights control radial decay. Orthogonality bounds each derivative by C(1+|s|+|t|)^(-N-2). Integration gives uniform offset decay; every derivative has an integrable t-majorant independent of local s, supporting differentiation under the integral. Componentwise mean-value estimates show continuity. k=0 and N=0 are covered by spatial order N+2. No inverse or choice-dependent supplier is used.

## lem-ip-fourier-slice-identity-on-schwartz

Steps 1.1–2.1 checked: decay order greater than two gives absolute double integrability. Fubini and positively oriented orthogonal substitution yield sigma theta with the negative 2pi Fourier phase. Bounded cutoffs and dominated convergence are valid for spatial and pulled-back integrals, including sigma=0. CC is assumed explicitly for integrability and Lebesgue substitution; compact-support compatibility is retained.

## prop-ip-limited-angle-data-no-holder-stability

Steps 1.1–3.1 checked: plateau bump has positive L2 norm and fixed interior compact support; lambda>0 exists for M>0. Modulation yields L2=lambda/N and bounded H1 norm. Nonstationary line phase has |v dot theta-perp|>=c>0; repeated integration by parts has no boundary terms. Cauchy–Schwarz, support diameter, finite angular measure and orthogonal substitution give N^(-m-1) data decay uniformly. For every alpha>0 select m with alpha(m+1)>1, contradicting lambda>0. N=1, C=0, zero truth and aperture endpoints do not break the proof. CC assumptions match suppliers.

## ex-ip-compact-support-limited-angle-uniqueness

Steps 1.1–2.1 checked: the bump exists in B1 with nonzero plateau. Difference h-psi is compactly supported smooth with zero measured data, so the choice-free uniqueness corollary applies. The coordinate-entire continuation is exactly that proved by the corollary; zero bump data would contradict its plateau. Reader Salo locator correction accepted; no mathematical claim changed.

## prop-ip-limited-angle-fourier-visibility

Steps 1.1–2.1 and every supplier interface checked: CC gives Schwartz slice identity and compact-support Lebesgue/Riemann compatibility; the separate Riemann uniqueness result requires only nonempty open Theta. For sigma=0 the sampled frequency is 0, whereas W_Theta excludes it. Refuter 37:1 is confirmed fatal as a false exact-set title; corrected title explicitly includes zero. Statement, both proof steps, assumptions, provenance and dependencies remain unchanged. Zero data and zero input are handled correctly; no unsupported full Schwartz injectivity is claimed.

Repair confidence: 1. Title-only correction; no Statement/Definition change or downstream interface repair.



## ex-ip-high-frequency-limited-angle-instability

All four verification steps checked. Theta={|theta1|<1/2} is nonempty open and antipodally symmetric; blind horizontal arcs are present. |v dot theta-perp|=sqrt(1-theta1^2) has infimum sqrt(3)/2, approached at excluded endpoints. A positive-measure plateau bump normalizes to L2=1; lambda_M gives H1<=M/2 and positive lambda_M/N. The already reviewed integration-by-parts proposition applies to exactly this family with K inside Omega. Choosing m with alpha(m+1)>1 disproves every proposed Holder bound. N=1 and C=0 are covered; CC is explicit.

## ex-ip-invisible-wedge-null-function

Steps 1.1–2.1 checked. A closed subarc inside the open blind region gives a nonempty annular open sector and nonzero smooth bump q. q is Schwartz; f=widehat(q)(-x) is Schwartz and Fourier inversion with reflection gives widehat(f)=q with the correct 2pi signs. Antipodal symmetry excludes sigma theta from the support for either sign; the annulus separately makes q(0)=0. Every offset section is Schwartz, so zero Fourier transform implies pointwise zero Radon data. Nonzero Fourier transform rules out f=0 as an L1/L2 class; the normed target metric and two-truth theorem yield loss>=||f||2/2 at common datum zero. CC hypotheses of transform/inversion/substitution are carried. The original Krishnan–Quinto Theorem 3 null-function paragraph appears to say support in V where the argument needs its complement; this local example explicitly uses the blind sector and is independently sound.

## op-ip-stable-limited-angle-reconstruction

Formulation and entire Status reviewed: K_M is nonempty (contains zero), data are in L2 by the assigned estimate, zero estimator bounds the minimax error by M, and the infimum is over all deterministic maps with adversarial L2 noise. Hohmann–Holzmann model/ellipsoids and Corollary 3.2 checked: weighted disk spaces, Gaussian white-noise risk and spectral ellipsoids differ from this global unweighted H1 formulation. Supplement A.1 Theorem 3.1 proof excerpts confirm the statistical setting; no full supplement audit claimed. Mazzucchelli–Salo–Tzou Theorems 1.2–1.3 concern analytic wavefront regularity/local uniqueness under Bolker/one-sided hypotheses, not sharp minimax error. Caro–Dos Santos Ferreira–Ruiz Theorem 2.5 gives local logarithmic Lp stability with one-sided support and Besov assumptions, not the requested matching global minimax bounds. Status is carefully limited to the checked source record, not a claim of exhaustive literature coverage; no proof or acceptance stamp is appropriate.

## Refuter disposition and repair

`refuter:37:1` is `confirmed_fatal`, closed by defect row `inverse-problems-knot-theory-all-109-2026-10-19-3a-b37-visible-wedge-zero-frequency`. The original observed fingerprint `0de7d24b34ffeccef7834094b2b8a9f48af0375a1655b7ca7a2cf0a0b05ca13f` equals SHA256 of the sorted canonical post-snapshot carrier object. The pre-edit proposition raw hash `c023bb4a733f6758edd528500cfe56137b748afabcb626565d75ea93c8758cd9` matches the snapshot. The finding is bound, and there is no historical uncertainty requiring owner disposition.

The title is now “Limited-angle data sample the visible Fourier wedge and zero frequency.” Its former word “exactly” excluded the sampled origin through the wedge definition. No Statement, proof, dependency or provenance changed; no material rewrite or judge invalidation occurred. The manifest title was synchronized. No additional touched obligation is invented for this already routed finding.

## Sources and reading limits

- [Salo, notes](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf), §2.1, printed pp. 4–5, Theorems 2.1–2.2 and proofs: Fourier slicing and full-angle uniqueness. Salo uses a tangent parameter and phase without 2π; the authored arguments explicitly use unit normals and the negative 2π phase. The reader’s locator corrections accurately restrict the attribution.
- [Krishnan–Quinto](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf), §1.3.2, printed pp. 13–14, Theorems 1–3 and proofs, and §1.5.1, pp. 34–35, Theorem 17/proof and visibility discussion. Compact-support analytic continuation supports uniqueness. The null-function paragraph has an apparent sector/complement typo; the local blind-sector argument was checked independently and does not inherit it.
- [Mazzucchelli–Salo–Tzou](https://arxiv.org/pdf/2306.05906), §§1.2–1.3, Definition 1.5 and Theorems 1.2–1.3, printed pp. 3–4 of the retrieved version: checked analytic/Bolker and one-sided-support hypotheses. Contextual statements only; no audit of their microlocal proof.
- [Hohmann–Holzmann](https://www3.stat.sinica.edu.tw/ss_newpaper/SS-14-064_na.pdf), model and ellipsoids, §3.1, Theorem 3.1 and Corollary 3.2; [supplement](https://www3.stat.sinica.edu.tw/statistica/oldpdf/A26n17s.pdf), model pp. 1–3 and Appendix A.1 Theorem 3.1 proof excerpts pp. 19–22/Lemma A.4. Checked to distinguish statistical weighted-space risk from the stated deterministic minimax problem; full supplement proof audit is not claimed.
- [Caro–Dos Santos Ferreira–Ruiz](https://arxiv.org/pdf/1211.1887), §2.3 Theorem 2.5, printed pp. 13–14: checked its local target, one-sided support and Besov hypotheses. Its full proof was not audited.

All actual direct dependency statements for the reviewed items were opened. The outside draft Fourier-slice and two-truth theorem proofs were also read; both support their exact uses. Foundational published proofs were not recursively audited. No new imported external input was needed.

## Diagrams, interfaces and publication

The visible-wedge definition’s TikZ diagram has antipodal measured sectors, dashed excluded boundary rays, a removed origin and separate blind sectors; these agree with its explicitly schematic caption. No additional diagram is needed to follow the algebraic proofs. All assigned claim/definition/example/open-problem sections are uninterrupted by hyperlinks, with references after the complete sections. Both A/B pages are frontmatter-only and retain `page_layout: compact-v1`; no page decision is owed.

Current owned consumer uses are recorded in the batch cross-dependency file and `briefs/tasks/frontier-dependency-ledger.md`. No original Statement/Definition changed, no consumer repair or additional propagation is required, and no published defect or withdrawal was identified. Published content remained read-only.

## Local verification and blockers

- Risk report before review: 10 CRITICAL and 1 HIGH, zero errors. After complete specific `risk_review` entries: `--require-reviewed` reports zero errors for all 11.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-37.proof-contracts.json --strict`: 11/11 checked, zero errors/warnings.
- Reflow on the title-edited proposition: unchanged. Precheck: one checked, zero failing. Rendercheck: one file passes YAML and real KaTeX parsing.
- Required final `node tools/proof-layout.mjs items/prop-ip-limited-angle-fourier-visibility.md`: one item, two steps, zero defects. No subsequent item edit.
- Closed defect row appended through the serialized defect-ledger tool; generated ledger view refreshed.

No mathematical blocker or uncertainty remains in batch 37. Live status was recomputed from `.autopilot/`: the engine is still in Step 3; its separate batch-30 split retry failure is outside this dispatch and was not modified. No scheduling, stamping, judging, publication, push or engine gate battery was initiated. Pre-existing unrelated working-tree changes were preserved.

Run-wide ledger validation limitation: `node tools/defect-ledger.mjs validate --run inverse-problems-knot-theory-all-109-2026-10-19` exited 1 after checking 100 rows. Three existing batch-11 rows have unsupported location values: `ipkt109-b11-3a-selector-measurability` ("Proof 1.1"), `ipkt109-b11-3a-gradiometry-multiplicity` and `ipkt109-b11-3a-heat-attribution` ("Example and Verification"). The new batch-37 row appended successfully and is not among these errors. Owner alert: normalize those outside-batch ledger locations through their authorized owner; no mathematical defect is inferred from this mechanical failure. No outside row was edited.
