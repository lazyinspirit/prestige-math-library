# Batch 76 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-76.

Scope: nine touched obligations; no reader, refuter, page, or flagged obligations. Reader and refuter reports are evidence, independently checked below. Initial risk-report completed with zero errors and fourteen HIGH/CRITICAL items.

## def-locally-lipschitz-ito-sde-and-maximal-solution

Reviewed full Definition and all six prerequisite interfaces. Distance to the nonempty closed complement is continuous; radius and inverse-distance bounds make K_n compact and nested, with interiors exhausting U; U=R^d uses the explicitly declared infinite-distance convention. Empty early sets and initial states outside int K_n give zero stopping times without requiring xi bounded. Compatibility gives increasing exit times and a local process only before zeta, with no unsupported global existence claim. AC is inherited from Brownian calculus. Reader stopping-time dependency and exhaustion explanation are sound.

Verdict: reviewed_no_defect (audit_enrichment). No further item edit.

## lem-brownian-ito-integral-bdg-moment-bound

Reviewed all four steps and all ten cited prerequisite interfaces. Each stopped scalar coordinate is driven by the full vector Brownian motion, so the multidimensional Ito formula with output dimension one is the correct citation. Energy and path stopping bound both the stochastic integrand energy and the p-moment; dyadic Doob and monotone convergence apply. For p=2 the Hessian is 2 and no Holder division is needed; for p>2 division is only on S_i(R)>0. Coordinate estimates sum with a dimension-dependent constant and Fatou removes each coordinate stop; finite energy and continuous paths ensure eventual rho_R=T. No ellipticity, bounded original integrand, or integer p is assumed.

Verdict: accepted_repair. No further item edit.

Review checkpoint: lower-level items completed before adjudicating their consumers. Final dispositions and checks follow below.

## alg-tamed-euler-superlinear-drift

Reviewed Definition in full against the local SDE data. For finite coefficients, h>0, and N>=1 the denominator 1+h|b| is positive, each increment is finite, and the stated finite loop gives adapted grid values; the two endpoint interpolation expressions agree by the recursion. U=R^d prevents an undefined coefficient evaluation after leaving a state domain. h<=1 is an explicit admissibility restriction. The algorithm separates numerical outputs from later moment and convergence results. No extra choice beyond the ambient AC is used.

Risk review complete; no routed decision.

## thm-local-sde-existence-and-uniqueness-until-exit

Reviewed five proof steps and all nine dependency statements, including the full finite-horizon strong-solution Definition required by the global supplier. Time-uniform local bounds and state Lipschitz constants on a compact support neighborhood make the cutoff products globally Lipschitz uniformly in t. The given L2 initial state fits the global existence theorem even outside early K_n, where the exit is zero. Stopped differences have finite L2 path supremum, so continuity and dominated convergence justify the continuous Gronwall input. Agreement to the first common exit gives identical exits and compatible stopped processes; the same estimate gives local uniqueness. No nonexplosion is inferred. The pre/post item hashes agree; only the contract audit evidence changed.

Verdict: reviewed_no_defect; change_kind: audit_enrichment.

## lem-cir-lamperti-transform-and-positive-root

Reviewed all four steps, the defining positive-root algorithm, and the six supplier statements. Local smooth cutoffs allow the global Ito formula to act on sqrt(x) on each compact positive interval. Drift simplifies to (4*kappa*theta-sigma^2)/(8Z)-kappa*Z/2 and diffusion sigma/2, matching Alfonsi equations (2)-(3), PDF pp.1-2. Inclusive Feller implies a>=sigma^2/8>0; A>0 and discriminant c^2+4Aah>c^2 for every real increment and z>=0, including z=0. The other quadratic root is negative, and substitution into the original equation is valid because the chosen root is strictly positive. No inverse-moment or strong-rate theorem is used.

Risk review complete; no routed decision.

## thm-superlinear-sde-global-existence-and-moments

Reviewed four steps and all twelve prerequisite interfaces. The Lyapunov generator estimate uses one-sided drift control at y=0 and linear diffusion growth, with C_p>=0. Stopped active integrands are bounded; initial states outside the ball contribute only the integrable initial Lyapunov value, so dominated convergence and Tonelli justify Gronwall. Corrected step 3.1 to use the actual radius-reaching event E_R rather than tau_R<=T, which is automatic for capped exhaustion stops. A bounded maximal path extends via a larger global cutoff solution; thus failure lies in every E_R and has probability zero. Fatou gives uniform fixed-time moments; polynomial drift growth, Holder and the proved maximal integral estimate then give every path-supremum moment, including 1<=p<2. Statement and dependencies unchanged; no consumer statement change is triggered.

Verdict: amended_repair; defect nod-b76-3a-capped-exit-event closed.

## alg-drift-implicit-euler-sde

Reviewed the exact procedure and finite solver branches, including work cap M=0, rejected certificates and null diagnostics. The full-space continuous dissipative drift fits the independently read resolvent theorem: H_h is (1+h*mu)-strongly monotone and has a globally Lipschitz inverse by the Brouwer projection argument in its supplier. Thus the inverse is Borel and exact grid values are adapted. The stated continuous extension agrees at shared endpoints but may anticipate Y_(n+1) within an interval; no adapted interpolation or stochastic integral using that extension is asserted. The verifier contract accepts only exact roots and the first failed solve returns the stated prefix, never an approximate advancement. No step-size restriction beyond h<=1 is hidden, including mu=0.

Risk review complete; no routed decision. Batch-65 supplier and monotone-map proof reviewed read-only; no defect found.

## lem-tamed-euler-uniform-moment-bounds

Reviewed all seven numbered steps and twelve prerequisite interfaces. Polynomial derivative growth gives drift growth and the moderate-state h^2|b|^2 bound at radius N^(1/(2q)); Lambda may be fixed large enough independently of N. The predictable alpha_k has bounded conditional Gaussian variance, and exponential submartingales plus Doob control all suffix sums. Gaussian-square exponentials require N large depending on the chosen moment, as explicitly handled by N_0(p); finitely many smaller meshes have finite Y moments by recursion, and their probabilities are bounded trivially when extending tail constants. The rough O(N) Lp bound and arbitrary polynomial decay of the bad-event probability close the Holder bootstrap, including p<2 via the second moment. Checked HJK Lemmas 3.1-3.6 and 3.9 (PDF pp.15-16) against the local dominator definitions; no cited result replaces the local proof.

Risk review complete; no routed decision.

## thm-cir-positive-solution-and-nonattainment

Reviewed every step and fourteen dependency interfaces. Constructing Z directly from local existence avoids reversing the Lamperti lemma. Scale density z^(-delta)*exp(2*kappa*z^2/sigma^2) has generator zero and delta>=1 even at Feller equality; its lower-end integral diverges, so the bounded stopped martingale gives the stated lower-exit bound. Countable upper levels exclude bounded lower termination; the independent Z^2 generator kappa*theta-kappa*Z^2 gives uniform upper-exit bounds and excludes unbounded excursions. Positive continuity to each finite upper hit justifies the increasing epsilon limit. Local uniqueness and a larger compact truncation give continuation whenever neither boundary is approached. Squaring constructs X; taking square roots proves uniqueness for positive CIR solutions. The stopped z^(2p) generator, dominated convergence, Tonelli, Gronwall and Fatou establish fixed-time moments for real p>=1 without negative-moment assumptions. Reader clarifications are valid.

Verdict: reviewed_no_defect (audit_enrichment).

## cex-euler-moments-diverge-for-cubic-dissipative-sde

Reviewed all four steps and seven dependency statements. b=-x^3 has one-sided constant zero and derivative growth q=2, so the repaired global theorem supplies exact-solution moments. On the explicit rare event the initial Gaussian density gives h^(-3/2)*exp(-2h^(-3))/sqrt(2*pi); independent later small increments contribute at least exp(-2T). For h<=1/4 and |y|>=h^(-1), h+h^2<=5/16 makes the cubic lower bound at least (h/2)|y|^3, preserving the threshold. Rescaling gives z_(n+1)>=z_n^3 and a 3^(N-1) exponent, which beats the negative O(N^3) event logarithm for every fixed p>=1. Only eventual N is needed; no claim about h<=1/4 for every mesh. Pre/post item hashes agree: touched obligation is contract-only audit enrichment.

Verdict: reviewed_no_defect; audit_enrichment.

## thm-cir-lamperti-scheme-converges-in-probability

Reviewed all four proof steps and seven prerequisite statements. Strictly positive continuous exact paths lie in deterministic compact positive intervals with probability approaching one. The globally decreasing q makes the positive implicit-root error nonexpansive regardless of the numerical path location, giving max|e_n|<=sum|r_n|. On the exact-path compact event, bounded q and Gaussian absolute moments yield the localized expected residual O(h^(3/2)) per step; no independence of that event and the increments is assumed. Markov followed by the compact-exhaustion limit proves grid convergence in probability. The square transformation is controlled on |e|<=1 and bounded exact paths. Inclusive Feller equality is supplied by the local positivity proof, with no claim of negative moments or Lp rate. Reader changes are bibliographic metadata only; Alfonsi equations (2)-(3), PDF pp.1-2, and Dereich-Neuenkirch-Szpruch Theorem 1.1, PDF p.3, confirm the comparison scope.

Current risk review complete.

## thm-drift-implicit-euler-sde-strong-order-half

Reviewed all six steps and fourteen prerequisite interfaces, including the full L1 maximal-integral proof and the batch-65 resolvent proof. Exact inverse growth |R_h(u)|<=|u|+h|b(0)| gives finite moments for every finite numerical recursion, so martingale and finite-energy uses are justified. Shared-noise stability conditions on F_(t_n) and uses covariance hI, retaining factor <=1 from the dissipative resolvent, including mu=0. Polynomial Db and all exact moments give fourth-order increment control, then E|d|^2<=Ch^3; endpoint increments X_s-X_(n+1) obey the same estimate from the integral equation. Diffusion defects are martingale differences by the added continuous-martingale supplier. The L1 maximal estimate and Young absorption yield v_j<=Ch sum_(k<j)v_k+Ch, and the written finite recurrence proves Ch global grid error. No adaptedness of the algorithm anticipative interpolation or path-sup rate for it is used. H-M-S Theorem 5.3 (printed pp.1059-1060) is compatible comparison, using a different extension.

Current risk review complete.

## thm-tamed-euler-strong-order-half

Independently reviewed all five steps and thirteen current prerequisite interfaces. Predictable left-grid coefficients define an adapted continuous Ito interpolation. All grid moments and Gaussian independence give delta moments O(h^(r/2)) for r=2,4, and taming defect second moment O(h^2). Splitting drift at X-underlineY and applying one-sided Lipschitzness plus Young gives the pointwise nonnegative majorant C(|e|^2+(1+A^2)|delta|^2+|b-b_h|^2); Cauchy-Schwarz and available fourth moments make its expected integral <=C integral v+Ch. For fixed N, all interpolation moments are finite from finite grid coefficient moments and Brownian maximal moments; in particular the martingale integrand e^T G has finite expected square energy. The finite-energy L1 maximal bound absorbs v/2. Dominated convergence makes v continuous, so Gronwall yields the stated path-supremum L2 rate. HJK Theorem 1.1 and hypotheses in section 1 match this claim. Historical source recovery and final disposition are recorded below.

Current risk review complete.

## ex-noise-induced-instability-in-explicit-em

Reviewed all three proof steps and eight supplier interfaces. Ito applied to exp(-7t/2+sqrt(3)W_t) gives drift -2X and diffusion sqrt(3)X; completing the Gaussian square gives E X_t^2=e^(-t), including t=0. At h=1/2 the explicit multiplier sqrt(3)*DeltaW has conditional mean-square factor 3h=3/2, while deterministic multiplier is zero. The implicit denominator 1+2h=2 gives factor (1+3h)/4=5/8. Independence from the grid sigma-algebra and finite moments follow from the linear updates. No strict stochastic contraction is inferred from deterministic resolvent contraction alone.

Risk review complete; no routed decision.

## Final historical comparison and dispositions

All nine touched carriers were compared to the immutable pre/post fingerprints. Eight initial current carriers matched their post-reader raw SHA256; the ninth (the global theorem) also matched before the deliberate Alpha proof amendment. The final CIR metadata normalization is the only other Alpha item edit. No Statement or Definition was changed by Alpha, so no downstream consumer repair is required. No stale judge record was present in either edited item.

Exact pre-reader bytes for the definition, BDG lemma, local theorem, global theorem and cubic counterexample were found at `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/<id>.md`. Exact bytes for CIR positivity, CIR convergence and the implicit convergence theorem were found at `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/<id>.md`. Each was SHA256-authenticated against the pre snapshot before reading the full diff.

The tamed theorem's exact pre-reader bytes were recovered in memory by reversing the first complete recorded diff in `research/numerical-optimization-dynamics-2026-10-16-dispatch/reader-reader-76.attempt-1.log:10482` against the authenticated post-reader bytes. The reconstructed raw SHA256 is `fa80ad0306b76fee78f64e845e4160312eedcfb9169be95d2ff9a4d5bd79365f`, exactly the pre snapshot fingerprint. No reconstructed file or transcript was created. The original pointwise drift bound already supports the supremum argument; the explicit nonnegative H, moment and continuity details are sound audit enrichment. No historical uncertainty or owner-current-content exception remains.

Final nine dispositions (the JSON is authoritative):

| Carrier | Verdict | Closed defects |
|---|---|---|
| def-locally-lipschitz-ito-sde-and-maximal-solution | reviewed_no_defect; audit_enrichment | none |
| lem-brownian-ito-integral-bdg-moment-bound | accepted_repair | nod-b76-3a-vector-driver-citation |
| thm-local-sde-existence-and-uniqueness-until-exit | reviewed_no_defect; audit_enrichment | none |
| thm-superlinear-sde-global-existence-and-moments | amended_repair | nod-b76-3a-initial-boundary; nod-b76-3a-capped-exit-event |
| thm-cir-positive-solution-and-nonattainment | reviewed_no_defect; audit_enrichment | none |
| cex-euler-moments-diverge-for-cubic-dissipative-sde | reviewed_no_defect; audit_enrichment | none |
| thm-cir-lamperti-scheme-converges-in-probability | reviewed_no_defect; metadata | none |
| thm-drift-implicit-euler-sde-strong-order-half | reviewed_no_defect; audit_enrichment | none |
| thm-tamed-euler-strong-order-half | reviewed_no_defect; audit_enrichment | none |

The accepted citation repair uses the full vector-driver Ito theorem; the scalar-driver theorem does not directly cover a sum against m Brownian coordinates. The historical initial-boundary equality fails for deterministic xi=2R. The separate capped-exit inference fails even for b=sigma=0 and xi=0, where every capped tau_R=T without reaching radius R. The revised E_R argument corrects that inference and explicitly supplies bounded-path continuation via a larger cutoff solution. All three defects have separate closed ledger rows owned at 3a-adjudicate.

## Sources and dependency evidence

The current local dependency Statements/Definitions were opened for every cited dependency in the fourteen routed items; the batch-65 resolvent and monotone-map proof bodies were also independently read. AC is explicitly inherited from the Brownian/calculus interfaces; no new choice principle is introduced. The actual explicit-Euler algorithm's C1, polynomial local-Lipschitz and step-size hypotheses hold for the cubic and linear examples (the cubic divergence proof uses only eventual h<=1/4). No published prerequisite defect was identified, so the published-defect ledger remains unchanged.

Primary-source passages consulted: [HJK tamed SDE paper](https://arxiv.org/pdf/1010.3756), section 1, Theorem 1.1 and Lemmas 3.1–3.6, 3.9; [Higham–Mao–Stuart](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf), Theorem 5.3 and its proof, printed pp.1059–1060; [Alfonsi](https://arxiv.org/pdf/1206.3855), equations (2)–(3), PDF pp.1–2; [Dereich–Neuenkirch–Szpruch](https://www.uni-muenster.de/Stochastik/dereich/Publikationen/Preprints/cir.pdf), Theorem 1.1, PDF p.3; and [HJK divergence paper](https://arxiv.org/pdf/0905.0273), Theorem 1, PDF p.5. These validate source scopes; the library's local proofs were independently checked and do not import missing external lemmas. In particular the comparison CIR rate requires strict Feller, while the authored localization proof covers equality with convergence in probability only.

## Mechanical corrections and validation checkpoint

The CIR locator's double-quoted LaTeX had invalid YAML escapes (also alerted by batch 98 in the shared frontier ledger). Replaced its quoting with single quotes and corrected its exact theorem/page locator; mathematics and references are preserved. This is metadata normalization, not a new mathematical defect. Its own proof contract and manifest statements remain current.

Reflow on both Alpha-edited items reported unchanged. Focused precheck passed both proofs; rendercheck parsed both YAML frontmatters and all mathematics with real KaTeX. The first strict contract check exposed an omitted F3 use in the reader BDG contract and an unanchored new boundary note; both are mechanical bookkeeping corrections, with no defect-ledger rows. Final check results are recorded below after rerun.

## Final local check results and handoff

- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-76.proof-contracts.json --strict`: 0 errors, 0 warnings; 16/16 checked after the two bookkeeping corrections.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-76.proof-contracts.json`, then the same command with `--require-reviewed`: both exit 0; all fourteen HIGH/CRITICAL reviews are complete and item-specific.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-superlinear-sde-global-existence-and-moments.md items/thm-cir-lamperti-scheme-converges-in-probability.md`: both pass, 2 checked and 0 failing.
- `node tools/rendercheck.mjs` on those same two paths: both frontmatters and all math parse with real KaTeX, exit 0.
- Final `node tools/proof-layout.mjs items/thm-superlinear-sde-global-existence-and-moments.md items/thm-cir-lamperti-scheme-converges-in-probability.md`: 2 items, 8 steps, 0 defects. No later item edits.
- Decision coverage independently checked: exactly the nine frozen touched obligations, no duplicates or extra routes; three referenced defect IDs resolve to closed `fixed` rows at `3a-adjudicate`.
- Focused `git diff --check` for both edited items and the batch contract: exit 0.

The pre-Alpha global-theorem bytes were also reconstructed in memory by undoing only Alpha's step-3.1 amendment; their raw SHA256 equals the immutable post-reader fingerprint. The reader's Definition expansion preserves every coefficient, initial-state, stopping and lifetime clause. All ten direct item consumers found by exact ID search lie in this batch and were reviewed; no outside consumer or surgical repair is required. The page-only routing is empty, and no new page verdict is claimed.

Shared frontier-dependency notes now record the owned resolvent consumer review and resolution of batch 98's YAML alert. Published content remains read-only. No unresolved mathematical prerequisite, historical-byte uncertainty, proposed withdrawal or owner blocker remains. The next action is engine-owned hash stamping and gate battery; no judge, stamp, dispatch or stage transition was initiated here.
