# Batch 32 authoring notes — TV source certificates and level-set convergence

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `tv-source-certificates-and-geometric-convergence`  
Scheduling input: `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`  
Batch dependency level: 5; prerequisite batches: 27 and 31.

## Plan and design reconciliation

- The controlling plan is IP-32 at `research/plan-inverse-problems-track.md` lines 759–784. The current `research/plan-spec.json` has the same A/B IDs, titles, category, orders 3060/3061, companion relation, and three page requirements. Its `items: []` arrays are pre-authoring slots; the complete design inventory is entered in the batch manifest before carrier authoring.
- The design fixes four named A results and the circular Radon, deblurring, and no-certificate B leaves. The A page adds local definitions and intermediate results for canonical level sets, variational curvature, the full-plane $L^2$ TV interface, finite-Radon representation, cutoff approximation, its Sobolev and coarea consequences, planar isoperimetry, and primal compactness. These make the plan's implicit objects and compactness estimates explicit without changing the source theorem's claim.
- The plan's prerequisite `proximal-gradient-and-accelerated-composite-optimization` is retained at page level. Its inspected published algorithm and rate theorem are explicitly finite-dimensional (`R^n`); they do not supply the infinite-dimensional `L^2` Hilbert argument here. The proof uses the current Banach convex/Fenchel and variational-source suppliers instead. No finite-dimensional proximal result is imported into an `L^2` claim.
- The theorem records the selected minimum-TV limit separately from uniqueness. In the Neumann branch, if `A 1 = 0`, the authoring statement selects zero-mean minimizers; otherwise arbitrary constant shifts of minimizers can destroy sequence convergence. The supplied source's direct-method proof makes this normalization when treating the annihilated-constant case. This is recorded for owner reconciliation with the abbreviated design wording.
- Full-space interface reconciliation: the base `def-ip-spatial-bv-and-distributional-tv` defines BV for globally $L^1$ functions, while IP-32 and its source use an $L^2$ functional with only local integrability. The A page now defines $TV_2$ by the compactly supported test-field supremum and proves its proper/convex/lower-semicontinuous properties, finite-Radon derivative representation, cutoff approximation, Sobolev estimate, and coarea formula. This preserves the full-space $L^2$ branch rather than silently assuming global $L^1$.
- Boundary-convention reconciliation: geometric level sets for all branches are ambient subsets of $\mathbb R^2$, using zero extension on bounded domains; the regularizer remains Dirichlet full-space perimeter or Neumann relative perimeter as selected. The curvature definition uses relative perimeter and compactly supported perturbations in the Neumann domain, while the Dirichlet obstacle is global. The source's Definition 4 requires compactly supported symmetric difference; an earlier draft used merely bounded difference, so the carrier was corrected to match the full-text convention.

## Item inventory and dependency order

The batch manifest was completed with the assigned inventory and direct dependencies before carrier authoring. Levels below count every dependency item in this run (including batches 27 and 31); external published suppliers do not raise the level. The A page has 15 items and the B page has 3, within the 100-item cap.

| Level | Item | Kind | Direct in-run item suppliers |
|---:|---|---|---|
| 2 | `def-ip-tv-functional-on-l2-distributional-variation` | definition | `def-ip-spatial-bv-and-distributional-tv` (batch 31) |
| 3 | `def-ip-tv-level-set-representatives-and-boundaries` | definition | `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31) |
| 3 | `def-ip-tv-variational-curvature` | definition | `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31) |
| 3 | `lem-ip-tv-l2-finite-variation-has-radon-derivative` | lemma | `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-euclidean-radon-representation-under-countable-choice` (batch 31); `lem-ip-smooth-compact-support-dense-in-c0` (batch 31); `lem-ip-vector-radon-variation-is-radon` (batch 31); `def-ip-spatial-bv-and-distributional-tv` (batch 31) |
| 3 | `lem-ip-tv-l2-functional-properties` | lemma | `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-bv-test-field-characterization-and-lsc` (batch 31) |
| 4 | `def-ip-tv-dual-source-certificate` | definition | `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31); `def-ip-banach-convex-subgradient-and-dual-pairing` (batch 27); `def-ip-bregman-distance` (batch 27); `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-tv-l2-functional-properties` (batch 32) |
| 4 | `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets` | lemma | `def-ip-spatial-bv-and-distributional-tv` (batch 31); `lem-ip-bv-smooth-coarea` (batch 31); `lem-ip-bv-strict-approximation` (batch 31); `lem-ip-bv-test-field-characterization-and-lsc` (batch 31); `lem-ip-vector-radon-variation-is-radon` (batch 31) |
| 4 | `lem-ip-tv-l2-cutoff-approximation` | lemma | `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-tv-l2-finite-variation-has-radon-derivative` (batch 32); `def-ip-spatial-bv-and-distributional-tv` (batch 31) |
| 5 | `lem-ip-tv-dual-attainment-and-certificate-limit` | lemma | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-bregman-distance` (batch 27); `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31); `def-ip-banach-convex-subgradient-and-dual-pairing` (batch 27); `def-ip-variational-source-condition` (batch 27); `lem-ip-banach-fenchel-duality-for-regularization` (batch 27); `thm-ip-vsc-nonlinear-regularization-rate` (batch 27) |
| 5 | `lem-ip-tv-l2-coarea-formula` | lemma | `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-bv-coarea-formula` (batch 31); `lem-ip-bv-test-field-characterization-and-lsc` (batch 31); `lem-ip-tv-l2-cutoff-approximation` (batch 32) |
| 5 | `lem-ip-tv-l2-sobolev-inequality` | lemma | `lem-ip-tv-l2-cutoff-approximation` (batch 32); `lem-ip-bv-sobolev-inequality` (batch 31) |
| 6 | `lem-ip-neumann-bv-sobolev-poincare` | lemma | `def-ip-boundary-tv-conventions` (batch 31); `def-ip-spatial-bv-and-distributional-tv` (batch 31); `lem-ip-bv-compactness-lower-semicontinuity` (batch 31); `lem-ip-bv-extension-and-translation` (batch 31); `lem-ip-bv-sobolev-inequality` (batch 31); `lem-ip-bv-zero-gradient-constant-on-connected-domain` (batch 31) |
| 7 | `lem-ip-tv-vanishing-noise-primal-compactness` | lemma | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31); `lem-ip-tv-dual-attainment-and-certificate-limit` (batch 32); `lem-ip-bv-compactness-lower-semicontinuity` (batch 31); `lem-ip-bv-sobolev-inequality` (batch 31); `lem-ip-bv-zero-gradient-constant-on-connected-domain` (batch 31); `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `lem-ip-tv-l2-finite-variation-has-radon-derivative` (batch 32); `lem-ip-tv-l2-sobolev-inequality` (batch 32); `lem-ip-bv-test-field-characterization-and-lsc` (batch 31); `lem-ip-neumann-bv-sobolev-poincare` (batch 32) |
| 8 | `lem-ip-tv-level-set-uniform-density-and-hausdorff` | lemma | `def-ip-tv-level-set-representatives-and-boundaries` (batch 32); `def-ip-tv-variational-curvature` (batch 32); `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31); `lem-ip-tv-dual-attainment-and-certificate-limit` (batch 32); `lem-ip-tv-vanishing-noise-primal-compactness` (batch 32); `lem-ip-bv-coarea-formula` (batch 31); `lem-ip-bv-test-field-characterization-and-lsc` (batch 31); `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets` (batch 32); `lem-ip-tv-l2-coarea-formula` (batch 32); `lem-ip-neumann-bv-sobolev-poincare` (batch 32); `lem-ip-tv-l2-functional-properties` (batch 32); `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `def-ip-tv-dual-source-certificate` (batch 32) |
| 9 | `thm-ip-2d-tv-level-set-convergence` | theorem | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-tv-level-set-representatives-and-boundaries` (batch 32); `def-ip-tv-variational-curvature` (batch 32); `lem-ip-tv-dual-attainment-and-certificate-limit` (batch 32); `lem-ip-tv-vanishing-noise-primal-compactness` (batch 32); `lem-ip-tv-level-set-uniform-density-and-hausdorff` (batch 32); `lem-ip-neumann-bv-sobolev-poincare` (batch 32) |
| 5 | `cex-ip-tv-minimum-truth-without-source-certificate` | counterexample | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-spatial-bv-and-distributional-tv` (batch 31); `def-ip-boundary-tv-conventions` (batch 31); `def-ip-banach-convex-subgradient-and-dual-pairing` (batch 27); `lem-ip-vector-radon-variation-is-radon` (batch 31) |
| 5 | `ex-ip-tv-circular-radon-zero-truth` | example | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `def-ip-tv-level-set-representatives-and-boundaries` (batch 32) |
| 5 | `ex-ip-tv-bessel-deblurring-source-certificate` | example | `def-ip-tv-dual-source-certificate` (batch 32); `def-ip-tv-functional-on-l2-distributional-variation` (batch 32); `def-ip-banach-convex-subgradient-and-dual-pairing` (batch 27) |

The plan names four headline A results. The added local definitions and intermediate lemmas are explicit prerequisites authorized by the authoring instructions; plan-spec.json keeps both pages' item arrays empty as pre-authoring slots. This is an inventory expansion for proof closure, not a change to shared plan metadata. The B page retains all three planned leaves: circular Radon, deblurring, and the no-certificate counterexample.

## Supplier inspection and current readiness evidence

- Batch 27 carriers `def-ip-banach-convex-subgradient-and-dual-pairing`, `def-ip-bregman-distance`, `def-ip-variational-source-condition`, `lem-ip-banach-fenchel-duality-for-regularization`, and `thm-ip-vsc-nonlinear-regularization-rate` were read in full. Their current Step-1 records are current. The VSC theorem is used only with its stated global-minimizer, sublevel, parameter-coupling, and Bregman hypotheses.
- Batch 31 `def-ip-spatial-bv-and-distributional-tv`, `def-ip-boundary-tv-conventions`, and `lem-ip-bv-test-field-characterization-and-lsc` were read in full and their Step-1 records are current.
- The actual proof bodies of batch 31 `lem-ip-bv-smooth-coarea`, `lem-ip-bv-strict-approximation`, `lem-ip-bv-coarea-formula`, `lem-ip-bv-sobolev-inequality`, `lem-ip-bv-lipschitz-trace-and-zero-extension`, `lem-ip-bv-one-sided-trace-on-lipschitz-graph`, `lem-ip-bv-extension-and-translation`, `lem-ip-bv-compactness-lower-semicontinuity`, and `lem-ip-l1-sequence-compactness-by-cell-averages` were inspected. `step1Decision` currently reports `Item or dependency changed; record current readiness` for each of those owner-ready snapshots. Their mathematical text is present, but the stale receipts cannot be represented as current owner readiness or acceptance. The affected consumers remain explicitly escalated pending owner hash/readiness reconciliation.
- In particular, the current coarea proof's declared Countable Choice route and the earlier owner receipt's dependency list differ; the current compactness chain uses current trace/extension/cell-average carrier bodies whose receipts are stale. The batch's use of those interfaces is blocked at readiness pending reconciliation even though their bodies were inspected. No other pair's files or receipts were changed.

## Authoring checkpoints

### `def-ip-tv-level-set-representatives-and-boundaries`

- Claim/convention: for $t>0$ use $\{u>t\}$ and for $t<0$ use $\{u<t\}$ from the a.e. class; for bounded Dirichlet and Neumann models use zero extension to form the ambient geometric sets, while the Neumann penalty remains relative. The canonical representative is density one in $\mathbb R^2$ and its ambient topological boundary is used for Hausdorff convergence.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §3, `https://arxiv.org/pdf/1711.06495`; Chambolle–Duval–Peyré–Poon (2017), §2.1, `https://arxiv.org/pdf/1602.00087`.
- Dependencies/level: batch 31 spatial BV (1) and boundary conventions (2); published Countable Choice and Lebesgue differentiation; item level 3.
- Status: ready record current for the canonical-level-set definition; statement/page scan passes and the A page is frontmatter-only.
- Next action: author the variational-curvature definition, then the dual-source certificate definition.

### `def-ip-tv-variational-curvature`

- Claim/convention: curvature minimization uses the selected full-space perimeter, Dirichlet zero-extension perimeter, or Neumann relative perimeter, with perturbations whose symmetric difference has compact closure in the model domain. Bounded Dirichlet additionally has a separate global obstacle curvature condition on $\Omega$.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Definition 4, `https://arxiv.org/pdf/1711.06495`; Chambolle–Duval–Peyré–Poon (2017), §2.6, `https://arxiv.org/pdf/1602.00087`.
- Dependencies/level: batch 31 spatial BV and boundary conventions (levels 1/2); item level 3.
- Status: current ready record; statement/page scan passes and the A page is frontmatter-only.
- Next action: author the dual-source certificate definition.

### `def-ip-tv-dual-source-certificate`

- Claim/convention: a certificate is $p^\dagger\in L^2(\Sigma;\mathbb R)$ with $A^*p^\dagger\in\partial R(u^\dagger)$ for a minimum-TV exact truth and a specifically selected full-space, Dirichlet, or Neumann functional. Full-space $R$ is the local-distributional $TV_2$ on $L^2$; bounded-domain branches retain the repository's zero-extension versus interior-variation conventions. Vector subgradients use the Riesz-identified $L^2$ dual. Neither truth nor certificate is asserted unique.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Definition 1 and §1.1, `https://arxiv.org/pdf/1711.06495`; Chambolle–Duval–Peyré–Poon (2017), §§1.3/3.1, `https://arxiv.org/pdf/1602.00087`; Kaltenbacher (2024), Definition (1.25), `https://arxiv.org/pdf/2403.18704`.
- Dependencies/level: batch 32 L²-TV definition (2) and its proper/convex/lsc/BV-agreement lemma (3); batch 31 spatial-TV/boundary conventions (1/2); batch 27 Banach subgradient/Bregman definitions (0/2); published Hilbert Riesz interfaces. Item level 4.
- Status: definition body closes the full-space $L^2$ versus global-$L^1$ interface gap; its current Step-1 record is escalated because the preflight checked in-batch suppliers before their ready records were written. Statement/page scan passes; no proof contract applies to a definition.
- Next action: author the dual attainment/certificate-limit lemma.

### `lem-ip-tv-dual-attainment-and-certificate-limit`

- Claim/conventions: the feasible dual set is $K=\{p:A^*p\in\partial R(0)\}$ for the selected full-space, Dirichlet, or Neumann functional. The quadratic dual maximizer is the Hilbert projection of $(f+w)/\alpha$; exact-data maximizers converge to the unique minimum-norm maximizer of the limit support problem; both $p$ and $A^*p$ have the corresponding nonexpansive noise bounds. The certificate also yields a $p=2$, $\beta=0$ VSC and the IP-27 rate conclusion when its exact-minimizer and parameter-coupling hypotheses hold.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Theorem 1/Proposition 3 and proofs, `https://arxiv.org/pdf/1711.06495`; Kaltenbacher (2024), Lemma 2 appendix proof and Theorem 3 complete proof, `https://arxiv.org/pdf/2403.18704`; Borwein–Vanderwerff, §4.4 Exercise 4.4.1, `https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf` (inspected, found unrelated, corrected in carrier/coverage).
- Source correction: the 2018 paper's displayed dual value identity (Theorem 1, equation (9)) omits a factor $\alpha$ for the displayed unscaled objective. Direct substitution of $p=(f-Au)/\alpha$ gives $\min J_\alpha=\alpha\max_K D_\alpha$ (equivalently, $\min J_\alpha/\alpha=\max_KD_\alpha$). The carrier proves this corrected identity; the dual maximizer, projection formula, and extremality relations are unaffected.
- Dependencies/level: batch 32 source-certificate definition (4); batch 27 Banach subgradient (0), Bregman definition (2), VSC definition (3), Fenchel lemma (1), and VSC rate theorem (4); batch 31 TV/boundary definitions (1,2); published Countable Choice, Bolzano–Weierstrass, Riesz, real-Hilbert, and Cauchy–Schwarz interfaces. Item level 5.
- Status: dual projection, KKT, certificate-limit, noise-stability, and VSC calculations are written; scoped proof-layout and strict contract checks pass. Its Step-1 record is escalated because the source-certificate definition was not recorded ready when the in-batch preflight ran; that escalation is preserved. The source equation discrepancy is resolved locally. Kaltenbacher’s Lemma 2/Theorem 3 were inspected but not used as a substitute for the batch 27 rate supplier. The earlier Borwein–Vanderwerff “Proposition 4.4.1(a)” locator is corrected: the book has Exercise 4.4.1 on conjugate examples, which is not used in this projection proof; coverage records that harvested citation as dropped with exact evidence.
- Next action: complete the density/Hausdorff lemma, main theorem, and B examples against the recorded geometric interfaces.

### `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets`

- Claim/convention: for every Lebesgue-measurable finite-area set of finite spatial perimeter in $\mathbb R^2$, $4\pi|E|\le P(E;\mathbb R^2)^2$.
- Proof route: for a bounded smooth domain, apply Stokes to the area form, decompose the compact regular boundary into finitely many smooth circle components, and prove periodic Wirtinger from Fourier Parseval by integration by parts. Transfer to arbitrary finite-perimeter sets with compactly supported strict smooth approximants, coarea, Sard's theorem and a threshold choice for which both symmetric-difference error and perimeter are controlled.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §3.4, `https://arxiv.org/pdf/1711.06495`; Terra, *Introduction to Geometric Measure Theory*, §7.6, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`. The local proof is complete and corrects no source claim.
- Dependencies/level: batch 31 spatial BV, smooth coarea (2), strict approximation (3), and test-field formula (2); published Sard, compact smooth 1-manifold classification, general Stokes, Parseval, and vector Radon variation. The BV coarea theorem was removed from direct deps because this proof uses only smooth coarea. Recomputed item level is 4 (one plus the maximum in-run supplier level 3).
- Status: full proof, contract, and layout check are complete. Step-1 is escalated because the coarea and strict-approximation suppliers have stale readiness hashes; owner hash/readiness reconciliation is required.
- Next action: author primal compactness, then density/Hausdorff.

### `cex-ip-tv-minimum-truth-without-source-certificate`

- Claim/convention: on $\Omega=(-1,1)^2$, Neumann TV, $A=I$, and $u^\dagger=f=|x_1|$, the unique exact solution is a minimum-TV truth but no $L^2$ subgradient/certificate exists.
- Proof route: compute the directional derivative of $TV_N$ on smooth compactly supported variations as the line functional $-2\int\varphi(0,x_2)\,dx_2$. If an $L^2$ subgradient existed, applying its inequality to both signs forces it to represent that line functional. A concentrating test sequence has $L^2$ norm tending to zero but fixed line trace, contradicting Cauchy–Schwarz.
- Sources/locators: Chambolle–Duval–Peyré–Poon (2017), §§1.3 and 7, `https://arxiv.org/pdf/1602.00087`; the counterexample is verified directly in the carrier.
- Dependencies/level: batch 32 source-certificate definition (4), batch 31 spatial TV/boundary convention (1/2), batch 27 subgradient definition (0), and published measure/Hilbert facts; item level 5.
- Status: full counterexample calculation, strict contract, and layout check are complete; its Step-1 record is escalated because the internal source-certificate definition was not yet recorded ready during the preflight. The escalation is preserved under the no-overwrite instruction.
- Next action: complete the density/Hausdorff lemma, theorem, and examples.

### `def-ip-tv-functional-on-l2-distributional-variation`

- Claim/convention: for open $\Omega\subseteq\mathbb R^2$ and an $L^2$ a.e. class, define $TV_2$ as the supremum of the distributional test integral over compactly supported smooth vector fields of Euclidean norm at most one. This permits local integrability without global $L^1$.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §1.1, `https://arxiv.org/pdf/1711.06495`; Terra, *Introduction to Geometric Measure Theory*, §7.4, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`.
- Dependencies/level: batch 31 spatial-TV definition (1), published real L²/Cauchy–Schwarz; item level 2.
- Status: this L²-TV interface definition has a current ready record; the statement/page and carrier/manifest checks pass.
- Next action: prove functional properties and finite-Radon representation.

### `lem-ip-tv-l2-functional-properties`

- Claim/convention: the extended test-field supremum on $L^2$ is proper, convex, lower semicontinuous, and positively one-homogeneous; on $L^2\cap BV$ it agrees with the existing spatial-TV functional.
- Proof/source route: each test integral is continuous linear on $L^2$; the supremum gives convexity and closed sublevels. The existing BV test-field theorem gives agreement on the global-$L^1$ overlap.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §1.1; Terra, §7.4, URLs as above.
- Dependencies/level: batch 32 L²-TV definition (2), batch 31 test-field/lsc lemma (2), published Cauchy–Schwarz; item level 3.
- Status: local properness/convexity/lsc/BV-agreement proof, strict contract, and layout check are complete; Step-1 is escalated because the internal L²-TV definition had not been recorded ready at preflight. That escalation is preserved.
- Next action: verify the finite-Radon derivative representation.

### `lem-ip-tv-l2-finite-variation-has-radon-derivative`

- Claim/convention: if $u\in L^2(\Omega)$ and $TV_2(u;\Omega)<\infty$, then each distributional coordinate derivative is a finite signed Radon measure and their vector variation mass equals $TV_2$.
- Proof route: bound each derivative functional on $C_c^\infty$ by the test supremum, extend to $C_0$, apply the CC Euclidean Radon representation coordinatewise, and use the vector-measure dual formula plus smooth density to identify the total mass.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §1.1; Terra, §7.4, URLs as above.
- Dependencies/level: batch 32 L²-TV definition (2); batch 31 Euclidean Radon representation (1), spatial derivative definition (1), smooth C0 density and vector Radon variation (0); item level 3.
- Status: proof, strict contract, and layout check are complete; the Euclidean Radon, C0-density, vector-variation, and spatial-TV supplier receipts are current. Step-1 is escalated only because the internal L²-TV definition was recorded later; this escalation is preserved.
- Next action: establish cutoff approximation.

### `lem-ip-tv-l2-cutoff-approximation`

- Claim/convention: smooth spatial cutoffs $\chi_k=1$ on $B(0,k)$ and supported in $B(0,2k)$ produce $v_k=\chi_ku\in BV\cap L^1$ with $v_k\to u$ in $L^2$ and $\limsup TV(v_k)\le TV_2(u)$.
- Proof route: prove the product rule directly in distributional pairings, bound the cutoff-gradient term by the $L^2$ tail, and use finite-Radon representation from the preceding item.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §1.1; Terra, §7.4, URLs as above.
- Dependencies/level: batch 32 L²-TV and finite-Radon derivative items (2/3), published smooth cutoff interface; item level 4.
- Status: proof, strict contract, and layout check are complete; its Step-1 record is escalated because the internal finite-Radon and L²-TV suppliers were not recorded ready during preflight. Those records are now present, but the escalation is preserved.
- Next action: derive the full-plane L² Sobolev and coarea estimates from these cutoffs.

### `lem-ip-tv-l2-sobolev-inequality`

- Claim/convention: $\|u\|_2\le TV_2(u;\mathbb R^2)$ for finite-variation $L^2$ functions.
- Proof route: apply the existing BV Sobolev inequality to the cutoff approximants and pass to the $L^2$ limit using the cutoff variation upper bound.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §1.1; Terra, §7.5, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`.
- Dependencies/level: batch 32 cutoff approximation (4), batch 31 full-space BV Sobolev (4), Countable Choice; item level 5.
- Status: full proof, strict contract, and layout check pass. Step-1 is escalated because the batch 31 BV Sobolev supplier has a stale readiness hash; owner refresh is required.
- Next action: use the L² interface to prove full-space primal compactness and coarea.

### `lem-ip-tv-l2-coarea-formula`

- Claim/convention: for $u\in L^2(\mathbb R^2)$ with finite $TV_2$, nonzero positive superlevel and negative sublevel sets have finite area, have finite perimeter almost everywhere, and their perimeter integrals sum to $TV_2(u)$.
- Proof route: use compact BV cutoffs, level-set $L^1$ convergence away from level zero, BV coarea and lower semicontinuity for one inequality, then signed layer cake and Fubini for the reverse inequality.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §3.1, `https://arxiv.org/pdf/1711.06495`; Terra, §5.3, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`.
- Dependencies/level: batch 32 L² cutoff (4); batch 31 BV coarea (4) and test-field/lsc (2); published Countable Choice, Tonelli/Fubini, Fatou, and monotone convergence; item level 5.
- Status: full cutoff-transfer proof, strict contract, and layout check pass. Step-1 is escalated because the batch 31 BV coarea supplier has a stale readiness hash; the test-field supplier is current.
- Next action: use the L² interfaces in the primal compactness argument.

### `lem-ip-tv-vanishing-noise-primal-compactness`

- Claim/convention: with $\alpha_n\to0$ and $\|A^*\|\|w_n\|/\alpha_n\le\eta$, supplied minimizers have a weak-$L^2$ and local-$L^1$ subsequence converging to a selected minimum-TV exact solution; on bounded domains the convergence is global $L^1$. In the annihilated Neumann constant mode, select zero-mean minimizers.
- Proof route: use dual-field bounds for residual and TV, prove a zero-mean Neumann $L^1$ Poincaré estimate by a compactness contradiction, bound the constants from $A\mathbf1_\Omega$ when it is nonzero, then apply BV compactness and a countable Hilbert coordinate diagonal. The last step transfers any certificate at the original truth to the selected exact minimum.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Lemma 1 and proof, `https://arxiv.org/pdf/1711.06495`; Terra, Theorem 7.49 and §§7.4–7.5, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`.
- Dependencies/level: batch 32 dual lemma (5), Neumann Poincaré (6), and L² Sobolev (5); batch 31 spatial/BV conventions (1–2), BV compactness (5), BV Sobolev (4), zero-gradient constancy (0), and test-field lsc (2); batch 32 L² derivative representation (3); published Countable Choice/Hilbert sequence facts. Item level 7.
- Status: proof, strict contract, and layout check pass; it includes the $A^*=0$ branch, connected Neumann normalization, L²/BV bounds, subsequence construction, exactness, lsc, and certificate transfer. Step-1 is escalated by stale BV compactness/Sobolev/zero-gradient receipts and the escalated Neumann Poincaré supplier.
- Next action: complete the density/Hausdorff lemma, theorem, and examples.

### `lem-ip-neumann-bv-sobolev-poincare`

- Claim/convention: there is a finite $C_\Omega$ such that $\|u-u_\Omega\|_{L^2(\Omega)}\le C_\Omega TV(u;\Omega)$ for every BV function on a nonempty bounded connected Lipschitz domain. This is the exact Neumann constant used in the threshold $\eta<1/C_\Omega$.
- Proof route: first prove zero-mean $L^1$ Poincaré by contradiction using bounded-domain BV compactness, lower semicontinuity, and zero-gradient constancy; then extend by zero and apply the full-plane BV Sobolev inequality to get the $L^2$ bound.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §4.3 and equation (38), `https://arxiv.org/pdf/1711.06495`; Terra, §7.5, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`.
- Dependencies/level: batch 31 BV compactness (5), extension (4), full-space Sobolev (4), zero-gradient constancy (0); published Countable Choice. The earlier Cauchy–Schwarz dependency was removed because the local contradiction and extension proof do not use it. Item level 6.
- Status: local contradiction/extension proof, strict contract, and layout check pass. Step-1 is escalated by stale compactness, extension, Sobolev, and zero-gradient supplier receipts.
- Next action: use the declared $C_\Omega$ in Neumann density estimates.

### lem-ip-tv-level-set-uniform-density-and-hausdorff

- Claim/convention: preserve the full-space, bounded Dirichlet, and bounded connected Neumann branches; use their distinct perimeter/obstacle conventions, thresholds η<2√π or η<1/CΩ, almost-everywhere nonzero levels, uniform two-sided density, the full-space common-support conclusion, inherited certificates for selected exact limits, and conditional measure-to-Hausdorff transfer. The theorem statement is complete; the density and support claims are not certified by the present proof.
- Proof route completed so far: dual-field strong convergence plus bounded perturbations gives equiintegrability and tail bounds; source-subgradient/coarea gives curvature minimization and equality; bounded-domain perimeter bounds and a full-space coarse estimate are proved; the sharp planar isoperimetric absorption and Neumann Poincaré gap are isolated; the conditional Hausdorff argument handles both-empty and one-empty boundary cases explicitly.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Lemma 3 eqs. (23)–(27), §3.4 Lemma 5, §4.1 Lemma 8 eqs. (29)–(33), and §§4.1–4.3; Chambolle–Duval–Peyré–Poon (2017), §2.7, Proposition 3/8 and Theorem 1 proof; Terra, §§5.3 and 7.4–7.6. URLs are in the item metadata and source-coverage artifact.
- Dependencies/level: direct suppliers include the batch 32 dual-certificate definition/limit, L²-TV interfaces/coarea, primal compactness, Neumann inequality and planar isoperimetry; batch 31 BV coarea, test-field/lsc, spatial TV and boundary conventions; published Countable Choice and Bolzano–Weierstrass. Exact IDs are in the manifest; level 8.
- Unresolved proof obligations: (1) lem-ip-tv-finite-perimeter-ball-cut-calculus: a.e.-radius perimeter decomposition and sphere-slice term for E∩B and E\B, minimizer comparison, Neumann relative cuts, and Dirichlet perimeter submodularity/join-intersection; (2) lem-ip-tv-curvature-minimizer-component-support-bound: full-space component/Jordan decomposition, curvature inheritance, positive area/perimeter lower bounds, and diameter/common-support bound. These affect all branch density conclusions and full-space support.
- Status/next action: escalated; retain the full statement and no QED. Strict contract and layout pass; owner must provide/reconcile the two geometric suppliers and stale batch 31 receipts before any ready status.

### thm-ip-2d-tv-level-set-convergence

- Claim/convention: after a subsequence, a selected minimum-TV exact limit is obtained; for almost every nonzero level the canonical sets converge in measure and their ambient boundaries in Hausdorff distance. Full-space/Dirichlet thresholds, the bounded Dirichlet obstacle lower bound, the Neumann CΩ threshold, and the zero-mean selection when A1Ω=0 are preserved; uniqueness is separate.
- Proof route completed so far: primal compactness gives the selected exact certified limit; full-space common level support converts local to global L¹ via signed layer cake; Tonelli and a summable subsequence give a.e.-level set convergence; the conditional Hausdorff proof treats empty sets and uses the canonical ambient boundary convention. It does not prove the density/support input.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), Theorems 1–2 and complete Theorem 2 proof; Chambolle–Duval–Peyré–Poon (2017), Theorem 1 and full proof for A=I; Terra, §§5.3 and 7.3–7.5. Full URLs/locators are in the manifest and coverage evidence.
- Dependencies/level: direct in-run suppliers are the batch 32 source-certificate/level-set/curvature definitions, dual and primal compactness lemmas, Neumann inequality, and density/Hausdorff lemma; published Countable Choice, Tonelli/Fubini, and Bolzano–Weierstrass. Level 9.
- Status/next action: escalated; strict contract and layout pass, and the proof retains unresolved hypothesis A2 from the incomplete density module. The two missing supplier IDs and exact hypotheses are recorded above; no QED or ready claim.

### ex-ip-tv-circular-radon-zero-truth

- Claim/convention: a circular mean defined on real Schwartz inputs has a unique bounded extension to real L² with norm at most √2 σ(S¹); at zero truth, p=0 is a source certificate, u_n=0 are global minimizers for every α_n>0, and every nonzero canonical level and boundary is empty with zero measure/Hausdorff distance.
- Proof route: polar coordinates, circle Cauchy–Schwarz and Tonelli prove the bound on Schwartz inputs; Countable Choice supplies dense real Schwartz classes and complete real L² target gives the extension; nonnegativity of the objective proves the minimizer and level claims. This extension formulation avoids defining the integral on an arbitrary Lebesgue representative before its measurability is established.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §5.1, formula (41) and circular Radon context, https://arxiv.org/pdf/1711.06495; all operator and minimizer arguments are complete locally.
- Dependencies/level: polar surface measure, polar-coordinate formula, circle Cauchy–Schwarz, Tonelli/Fubini, Schwartz density, L² completeness, TV/source/level-set definitions, and Countable Choice; item level 5.
- Status/next action: local operator/minimizer verification, strict contract, layout, and source stamp pass. Step-1 is escalated because its internal TV/source/level-set definitions were not recorded ready during preflight; escalation preserved.

### ex-ip-tv-bessel-deblurring-source-certificate

- Claim/convention: for a nonzero smooth nonnegative annular radial profile, the Bessel multiplier m(ξ)=(1+4π²|ξ|²)^(-1/2) is bounded/self-adjoint/injective; the explicit radial calibration has p∈L², A*p=div z∈∂TV₂(u†), so the truth is the unique minimum-TV exact solution; zero noise gives parameter ratio 0. No regularized-minimizer existence claim is made.
- Proof route: establish real-valuedness, boundedness, self-adjointness and injectivity by Fourier symmetry/Plancherel; calibrate the gradient with a compactly supported radial field; show q=div z∈H¹, apply the inverse multiplier to obtain p∈L², then verify A*p=q and uniqueness.
- Sources/locators: Iglesias–Mercier–Scherzer (2018), §5.1 smooth radial mollification/source condition and §5.2 deblurring context, https://arxiv.org/pdf/1711.06495; published Fourier/Plancherel and bump suppliers are linked in the item.
- Dependencies/level: source and L²-TV definitions, real/complex Hilbert pairing, L¹ Fourier convention, Schwartz density, Plancherel, smooth bump, Countable Choice, and convex-subgradient definition; level 5. The earlier uninspected Teschl reference has been removed.
- Status/next action: local calibration verification, strict contract, layout, and source stamp pass. Step-1 is escalated because its internal TV/source definitions were not recorded ready during preflight; escalation preserved.

## Active run snapshot

The recomputed autopilot status for this run is running, stage 1-scaffold at 98/109 covered; batch 32 remains listed among missing dispatches and nothing is in flight. The existing owner-repair blocker remains on Step 1. No .autopilot state or owner verdict was changed.

The batch 32 cross-batch input records 53 declared cross-batch edges: 40 current supplier-interface checks and 13 open edges. The open edges are the batch 31 broad BV page and direct consumers of BV proofs with stale Step-1 hashes; their supplier IDs and exact blockers are in the cross-batch file. The source coverage contains 7 page-source entries (5 A-page URLs, 2 B-page URLs including shared URLs again) and `source-fetch-check --stamp` verified all 7.

## Source route and unresolved prerequisites

- Iglesias–Mercier–Scherzer (2018), full 26-page paper, `https://arxiv.org/pdf/1711.06495`: read §§1.1–2, Theorem 1 and Proposition 3 with proofs, Definition 4, Theorem 2, its complete proof architecture, Lemmas 3–7, and the full density-estimate arguments in §§4.1–4.3. Supported items: source-certificate definition, dual lemma, density/Hausdorff lemma, convergence theorem, and the circular-Radon/deblurring example contexts. The paper's finite-perimeter ball-cut equalities and full-space component/Jordan decomposition cite separate geometric-measure results; those are not silently treated as local proofs.
- Chambolle–Duval–Peyré–Poon (2017), full 52-page paper, `https://arxiv.org/pdf/1602.00087`: read §§2.1, 2.5, 2.7, §§3–4, Lemmas 2–4, Proposition 8, and the complete proof of Theorem 1. It independently verifies the dual-certificate level-set mechanism, uniform density, Hausdorff transfer, and the fact that TV source certificates can fail. Its theorem is the full-space denoising case `A=Id`; it is not used as proof of the general inverse-problem or boundary branches.
- Terra, *Introduction to Geometric Measure Theory*, complete 291-page lecture notes, `https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf`: read the complete coarea theorem statement/proof section in §5.3 and the relevant complete BV trace, extension, and compactness arguments in §§7.3–7.5. Supported the local coarea, compactness, and planar isoperimetry prerequisites. The source's cited reduced-boundary ball-cut calculus and finite-perimeter component/Jordan decomposition still need local complete supplier proofs for this pair.
- A retrieval tool mismatch (`pdftotext` is absent) did not interrupt source retrieval: Iglesias, Chambolle, Terra, Kaltenbacher and the cited Borwein book were retrieved/inspected at the relevant full-text sections; the primary two TV papers and Terra notes were read across all relevant sections. The Kaltenbacher Lemma 2 appendix proof and Theorem 3 proof were read through the rate conclusion. The Borwein citation was found to misidentify an unrelated exercise and is marked dropped as a harvested result, with the exact locator evidence in the item and coverage. No source retrieval failed and no recovery retry occurred; no retrieval-failure `source_resolution` record is required.

## Exact mathematical escalation

- Missing complete local finite-perimeter ball-cut calculus: reduced-boundary slicing for balls, the a.e.-radius perimeter decomposition used to compare `E` with `E\B(x,r)`, and its matching boundary-slice term. This affects `lem-ip-tv-level-set-uniform-density-and-hausdorff` and `thm-ip-2d-tv-level-set-convergence` in the full-space, Dirichlet, and Neumann density proofs. Proposed A-page supplier: `lem-ip-tv-finite-perimeter-ball-cut-calculus`.
- Missing complete local finite-perimeter component/Jordan decomposition and diameter control for global curvature minimizers. The full-space common-support step in the 2018 proof and the independent 2017 proof invoke this result; it affects `lem-ip-tv-level-set-uniform-density-and-hausdorff`, `thm-ip-2d-tv-level-set-convergence`, and the two example conclusions. Proposed A-page supplier: `lem-ip-tv-curvature-minimizer-component-support-bound`.
- These are significant geometric-measure-theory suppliers. Their source statements and locators are recorded, but a citation is not treated as proof and no readiness is claimed for dependent items. The full theorem statement and all branches remain present for owner reconciliation.

## Scoped validation and Step-1 readiness

- Assigned statement/page/manifest scan: PASS, 18 item carriers and 2 pages; statements contain no hyperlinks, both pages are YAML frontmatter only, and carrier deps/levels equal the manifest.
- Scoped item dependency recomputation: PASS, 18/18 labels match, maximum level 9. The repository-wide item-level command reports seven unrelated errors in the knot-theory scope: empty inventory character-varieties-and-the-a-polynomial-examples; stale labels for lem-concordance-annulus-induces-zero-surgery-cobordism, lem-strong-winding-stable-under-companion-insertion, lem-property-p-instanton-surgery-triangle-and-rank-input, thm-property-p-for-nontrivial-knots, lem-s-three-filling-detects-the-meridian-slope, and thm-gordon-luecke-knot-complement-determines-knot. None is in batch 32; those carriers were not edited.
- Scoped proof-layout: PASS, 18 items / 56 numbered steps / 0 defects.
- Strict proof contracts: PASS, 14 proof-bearing items / 56 derivations / 108 exact supplier excerpts / 0 validator errors. All eight standard boundary cases are recorded for every proof-bearing item. Finite checks are empty because no finite computational claim applies to these analytic statements.
- Source fetch: PASS, source-fetch-check reports 7/7 page-source entries fetch-verified; all entries were stamped after full-text inspection.
- Batch 32 cross-batch input: local ownership/schema/duplicate check PASS, 53 edges: 40 verified interface reviews and 13 open. The full-run frontier-dependency-ledger read-only collector could not finish because another carrier has invalid quoted YAML escape \mathbb at items/lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup.md:30. No other owner's file was changed.
- Batch dependency checker: blocked before graph recomputation by the same unrelated invalid YAML escape in items/lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup.md:30. The run-wide derived ledger was not regenerated.
- Step-1 decisions: 3 items currently ready and 15 escalated. Eight escalations were inadvertently recorded because the preflight evaluated all in-batch supplier receipts before recording their ready suppliers: lem-ip-tv-l2-finite-variation-has-radon-derivative, lem-ip-tv-l2-functional-properties, def-ip-tv-dual-source-certificate, lem-ip-tv-l2-cutoff-approximation, lem-ip-tv-dual-attainment-and-certificate-limit, cex-ip-tv-minimum-truth-without-source-certificate, ex-ip-tv-circular-radon-zero-truth, and ex-ip-tv-bessel-deblurring-source-certificate. Their current supplier dependencies are now present, but the escalations are preserved under the no-overwrite instruction. The three ready records are def-ip-tv-functional-on-l2-distributional-variation, def-ip-tv-level-set-representatives-and-boundaries, and def-ip-tv-variational-curvature. The remaining seven escalations are based on stale batch 31 receipts and the two unresolved geometric modules recorded above. No owner flag was used.

## Next action

Owner reconciliation is required for the eight preserved preflight escalations, stale batch 31 readiness hashes, the two missing geometric A-page suppliers, and the unrelated malformed YAML carrier blocking the run-wide dependency ledger. Do not overwrite any recorded escalation or change engine state in this pair.
