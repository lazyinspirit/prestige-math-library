# Batch 30 Step 5a adjudication

Run: `frontier-39-analysis-30`; group: `batch-30`. Local mathematical review only; the engine owns hashes and gates.

The scope/order, reader report and findings, refuter report, pre/post snapshots, manifest and current carriers were inspected. All 21 current item raw-byte hashes initially matched the post-reader snapshot. The pre/post snapshots distinguish 15 item changes and two contract-only changes. No historical item preimage is claimed: these new files are absent from HEAD; the reader report and immutable hash deltas are historical evidence, and every disposition below rests on independent current-content review.

## `def-spatial-and-frequency-centres-and-variances`

Definition and Well-definedness checked against the complex L2 pairing and Plancherel statements. Pairing |x_j||f| with |f| gives the absolute first-moment integral; shifted second moments use |x-a|²≤2|x|²+2|a|². Both norms are positive because the class is nonzero and Plancherel is an isometry. Means are real, all integrals are representative-independent, and n=1 is included; countable choice is inherited exactly from Plancherel. Reader corrected the pairing and Heisenberg locator; accepted. No definition changed in this adjudication.

Disposition: `accepted_repair`. Risk review complete.

## `lem-compact-support-gives-an-entire-fourier-laplace-transform`

Proof 1.1–5.1 and all 13 declared supplier interfaces checked. Empty K implies f=0; nonempty K is bounded and closed by Heine–Borel. Replacing f by f1_K is legitimate. At fixed complex coordinates, the other exponential factors are bounded on K. The exponential derivative yields a uniform remainder at 0<|s|<δ/(2πS), bounded by 2πSε exp(2πS|Im w|)||g||1; S=0 gives zero directly. This proves a full complex derivative without a sequential-choice inference. The claim is precisely entire coordinate slices, and equality on real frequencies is literal. Reader repair accepted; local proof uses no choice. Source: Sheagren §5 Lemma 5.1 and its compact-support observation, printed p.11, independently opened online.

Disposition: `accepted_repair`. Risk review complete.

## `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`

Proof 1.1–6.1 and all 16 supplier interfaces checked. Square completion yields Ca^(-n/2) exp(π|Im z|²/a). The difference-quotient majorant is a constant times |x| exp(-πa|x|²/4), integrable by the Gaussian supplier; C=0 gives zero, and null-set changes preserve all integrals. Countable choice licenses the sequential criterion: failure of the derivative limit would supply, by countable choice, bad increments with |s_m|<1/m, contradicting the dominated-convergence limit for every null sequence. The corrected Lindell locator resolves to PDF pp.35–36, independently opened. Refuter finding 30:1 is false_positive: the proven bound makes F locally bounded on C^n, and its slices are holomorphic. Lebl, Tasty Bits of Several Complex Variables, Definition 1.1.2 and Proposition 1.1.3, pp.14–15 (https://www.jirka.org/scv/scv.pdf), identify locally bounded separate holomorphy with joint holomorphy; the full iterated-Cauchy proof was read. At |z-z0|<1 the local bound is Ca^(-n/2) exp(π(|Im z0|+1)²/a). Thus the title is mathematically true even on its stronger reading, and the written Statement promises exactly the slice conclusion needed by Hardy. No joint-holomorphy premise is smuggled into a consumer and no title edit is warranted.

Disposition: `accepted_repair`. Risk review complete.

## `lem-hardy-entire-growth-rigidity`

Proof 1.1–6.1 and every declared supplier statement checked, together with Tao §1 complete sector proof. For b≥1/a, Φ=exp(πz²/a)F is bounded on both axes and grows ≤C1 exp(π(Re z)²/a). The far-ray condition tan θ>π/(2aδ) gives the required nonpositive quadratic exponent. Opposite signs of qδ in the two upper sectors and phase-centered damping give sin(μ+(2+ε)α)≥cos((2+ε)θ/2)>0 uniformly. Hence decay at infinity is uniform; principal powers have the needed one-sided continuous extensions on the negative ray and tend to zero at the vertex. The boundary-and-infinity maximum principle applies on connected open sectors. Taking ε→0, enlarging θ, and δ→0 is pointwise and does not require countable choice. Reflection z↦-z controls the lower sectors; Liouville gives F(0)exp(-πz²/a), and real-axis decay forces F(0)=0 if b>1/a. Zero constants cause no divisions. Reader polar-form supplier and source corrections accepted; no strengthened induction or unsupported Phragmén–Lindelöf theorem is used.

Disposition: `accepted_repair`. Risk review complete.

## `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`

Proof 1.1–3.1 and the Gaussian, exponential and power interfaces checked. For a,b>0, ab<1 iff a<1/b; c in the open interval is positive. Gaussian transform has coefficient c^(-n/2)>0 and rate 1/c>b. Both inequalities are non-strict at x=0 or ξ=0. The quotient exp(-π(c-a)|x|²) differs at 0 and a unit vector; continuity rules out being constant a.e. since each nonempty open ball has positive Lebesgue measure. Thus both vanishing and the critical-rate classification fail below threshold. No zero-base power or endpoint c=a is silently used. Countable choice comes from the Gaussian transform. Reader exponent and classification repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `lem-position-derivative-commutator-estimate`

Proof 1.1–4.1 and all nine supplier statements checked. Conjugating the bilinear weak test with test conjugation proves D_j conjugate f=conjugate D_jf. The multiplier x_jχ_R is compactly supported smooth with bounded derivatives, so weak Leibniz and compact-support integration by parts apply to f and x_jχ_R conjugate f. The escaping-annulus term is dominated by 2||D_jχ||∞ |f|² and tends pointwise to zero. The derivative-product term is L1 by Cauchy–Schwarz on x_jf,D_jf, and dominated convergence gives ||f||²=-2 Re∫x_j conjugate f D_jf. A second Cauchy–Schwarz proves the bound without dividing by f or a derivative norm, so f=0 is valid. H1=W1,2 and countable choice are inherited from the exact Sobolev interface. No additional defect found.

Disposition: `risk review complete; no carrier obligation`. Risk review complete.

## `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`

Proof 1.1–5.1 and the exact identity-theorem statement checked. Nondegenerate intervals have interior. The repaired point p+min(ε,r)/2 is distinct from p and lies in every prescribed ball while staying in the interval. For every arbitrary p in int I1 the (n-1)-variable slice meets the induction hypothesis, so it vanishes on C^(n-1); first-coordinate identity then gives all of C^n. Fixed points are finitely many existential choices, with no choice axiom. n=1 uses the same interior accumulation point, and singleton/empty factors are excluded. Reader repair accepted; Sheagren p.11 supports only the one-variable observation, while finite iteration is proved locally.

Disposition: `accepted_repair`. Risk review complete.

## `thm-support-measure-uncertainty-inequality`

Proof 1.1–3.1 and all nine exact suppliers checked. Real Hölder applies to |f| and 1_E, so finite |E| gives ||f||1≤|E|^(1/2)||f||2. The L1 transform is uniformly bounded and agrees a.e. with Plancherel; restricting its squared modulus to F gives ||f||²≤|E||F|||f||². Division is valid for the nonzero class. Empty/null supports would force the nonzero norm to vanish and are thereby excluded; no assumption of positive support measure is needed in advance. Countable choice is inherited from agreement, Plancherel and Riemann–Lebesgue. F1 overattributes it to the choice-free L1 definition, but states a stronger sufficient hypothesis and affects no inference. Donoho–Stark §3 Theorem 2, equation (3.1), printed pp.909–911, was downloaded and all three scanned pages visually read; zero errors and unit normalization give the 1D bound, while the n-dimensional proof is local. Reader bibliography repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `cor-dimensional-heisenberg-uncertainty-inequality`

Proof 1.1–2.1, coordinate estimate, Sobolev characterization, multiplier and Plancherel interfaces checked. For every j, weak derivative in L2 gives ||D_jf||2=2π||ξ_j fhat||2; summing n bounds 1/(4π)||f||² and finite Cauchy–Schwarz yield n/(4π), since coordinate-square sums are |x|² and |ξ|². Domain is full H1 with spatial moment; no Schwartz approximation is substituted for the claim and no equality classification is extended. n=1 and f=0 work without division by their norms. Countable choice is explicitly carried. Reader source locator accepted: Laugesen Example 24.5 and Remark 24.6(2)–(3), printed pp.145–146, read online in full relevant passage.

Disposition: `accepted_repair`. Risk review complete.

## `lem-centering-by-translation-and-modulation-preserves-the-variance-product`

Proof 1.1–3.1 and all 11 declared supplier statements checked. The translation convention τ_a f(x)=f(x-a) makes g=M_-b τ_-a f. For Schwartz approximants the phase is exp(2πia·(ξ+b)), so |ghat(ξ)|=|fhat(ξ+b)|. Both spatial and frequency covariance operators are L2 isometries; passing norm limits using Plancherel extends the L1 laws to every L2 class. Countable choice explicitly selects a Schwartz approximating sequence. Changes of variables apply only to integrable moments, established by shifted second-moment bounds and Cauchy–Schwarz. They give zero means, exact coordinate norm identities, equal positive denominators, and preserved variances. Nonzero hypothesis, n≥1 inherited from the variance definition, and representative independence are sound. No defect found.

Disposition: `risk review complete; no carrier obligation`. Risk review complete.

## `thm-hardy-gaussian-uncertainty-principle`

Proof 1.1–4.1 and seven exact suppliers checked. For each coordinate, all other coordinates stay real, so the entire slice has growth constant Ca^(-n/2) and real-axis decay constant C exp(-πbΣother y_k²). Both are admissible in one-variable rigidity. For ab>1 those slices vanish on the whole real space, and Fourier uniqueness gives f=0 a.e. For ab=1, successive real-coordinate identities give F(x)=F(0)exp(-π|x|²/a); the separately entire difference vanishes on [0,1]^n, so real-box rigidity extends the factorization. The Gaussian transform with amplitude F(0)a^(n/2) gives the exact scalar; uniqueness asserts a.e. equality only. n≥1 is explicit, zero F(0) is permitted, and no stronger separately holomorphic induction theorem or joint-holomorphy prerequisite is assumed. Countable choice is correctly inherited from Gaussian continuation, transform and uniqueness, not from the choice-free rigidity. Reader repair accepted; direct consumer review will check the new explicit dimension hypothesis.

Disposition: `accepted_repair`. Risk review complete.

## `thm-qualitative-compact-support-uncertainty-principle`

Proof 1.1–3.1 and all six exact suppliers checked. Compact K2 is bounded and closed; ξ=(R+1,0,…,0) is outside it for R>0 bounding its norm, including K2 empty. Its open complement contains a box of coordinate half-width ε/(2√n), hence every point is ≤ε/2 from its center. The transform is zero on this box by the actual hypothesis; the coordinate-entire continuation vanishes identically by real-box rigidity, then L1 uniqueness returns f=0 a.e. No nonzero-transform point is placed outside its support. Empty K1 and singleton supports present no exception, and no false biconditional is claimed. Countable choice is used only through uniqueness. Reader repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `cex-finite-variance-is-not-the-same-as-compact-support`

Counterexample 1.1–3.1 and all ten exact suppliers checked. The positive Gaussian is L1∩L2 with norm²=(2a)^(-n/2); its positive integral transform agrees with Plancherel a.e. Polynomial-times-Gaussian integrability proves both second moments without keeping an invalid unreduced exponent in a polynomial majorant. Reflection -x of each integrable coordinate first-moment integrand gives zero means. A measurable support of either everywhere-positive representative has null complement, so has infinite measure because cubes [-R,R]^n have measure (2R)^n. Compact sets are closed measurable and bounded, hence finite measure. n≥1, a>0 and the countable-choice premises are carried; the zero class is not a witness. Reader repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`

Remarks and the published thm-heisenberg-uncertainty-inequality Statement checked exactly: Schwartz f, arbitrary real centers a,b, constant n/(4π), equality for nonzero c and λ>0, with the zero function also giving equality. The local H1 inequality is separately identified and its equality cases are explicitly undecided. The coordinate form follows from the already reviewed coordinate estimate, not from a false consequence of the summed estimate. Current item bytes are identical pre/post; only the contract zero-boundary wording was enriched. This is audit_enrichment, not a reader mathematical repair, and closes no finding.

Disposition: `reviewed_no_defect`. 

## `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`

Remarks checked against the exact local rigidity construction and Hardy coordinate proof. qδ has the correct sign in each sector and hε the sector-centered phase of rigidity step 1.2, yielding uniform angular damping. Tao §1 actually supplies that complex argument; his Theorem 2 supplies a non-sharp real threshold, while the independently read Fernández-Bertolín–Malinnikova survey §1 p.2 records a complete sharp real-variable proof. The paragraph restricts its non-sharp assertion to Tao’s particular method. Reader correction of the obsolete auxiliary and universal-method overstatement accepted.

Disposition: `accepted_repair`. 

## `thm-finite-dft-support-product-uncertainty`

Proof 1.1–3.1 and all nine exact suppliers checked. Supports are finite subsets of Z/N, not subsets of chosen representatives. Parseval plus positive counting norm makes both supports nonempty. Finite triangle inequality is derived by induction from modulus laws, and Cauchy–Schwarz is applied in the actual counting space to |f| and 1_S, giving ||F_Nf||∞≤N^(-1/2)|S|^(1/2)||f||2. Summation over T and division by positive ||f||² prove |S||T|≥N. At N=1 the transform is the identity; no AC, convergence, inverse transform or equality classification is used. Tao §1 pp.1–2 general finite-group proof and subgroup discussion read; the local normalization differs by scalar but support cardinalities do not. Reader interface repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `ex-gaussian-attains-heisenberg-equality`

Verification 1.1–3.1, every declared supplier and Sobolev characterization Proof 1.3 checked. The Gaussian transform and L1/L2 agreement establish norm²=(2a)^(-n/2), positive amplitude and integrable odd first moments, so both means vanish. Parameter differentiation uses an open neighborhood compactly contained in (0,∞), with positive lower c0 and integrable majorant 2π|x|² exp(-2πc0|x|²), meeting the exact differentiation theorem. Differentiating (2c)^(-n/2) gives -n(2c)^(-n/2-1), hence Vx=n/(4πa) and Vξ=na/(4π). Weighted frequency integrability supplies H1 through the reverse Sobolev construction before the inequality is used. The equality constant and variance product n²/(16π²) are correct; f fits the quoted family at λ=2πa. No zero mean or moment is pre-assumed. Countable choice is carried for Gaussian and Sobolev suppliers; a>0 excludes zero-base powers. Reader repair accepted.

Disposition: `accepted_repair`. Risk review complete.

## `ex-hardy-critical-and-subcritical-gaussian-regimes`

Verification 1.1–2.1 and all six exact suppliers checked. Critical b=1/a uses common constant max(1,a^(-n/2)), and fhat(0)=a^(-n/2) yields scalar one. Subcritical c∈(a,1/b) uses max(1,c^(-n/2)). A full-measure subset is unbounded since a disjoint unit cube would contradict its null complement. Thus the spatial a.e. inequality forces c≥a; dividing the frequency bound gives exp(π(b-1/c)|ξ|²)≤C′c^(n/2), forcing c≤1/b. These requirements are impossible at ab>1; no assertion wrongly excludes the critical nonzero witness. The inequality is non-strict at ξ=0, constants remain finite positive, and all rates are positive. Dimension n≥1 is fixed in Given and inherited in each supplier. Reader sign and contract-endpoint corrections accepted.

Disposition: `accepted_repair`. Risk review complete.

## `ex-finite-dft-delta-and-constant-extremisers`

Verification 1.1–2.1 and all eight exact suppliers checked. The delta sum has its sole nonzero summand at representative 0, yielding N^(-1/2)1. Character orthogonality with parameters 0,k supplies the negative-sign sum for the constant, yielding N^(1/2)δ0. The rational powers are positive because N≥1, and supports have products 1·N and N·1. At N=1 delta and constant coincide. These are examples of equality, not an exhaustive classification; no choice or invertibility theorem is used. No carrier finding or change is owed.

Disposition: `risk review complete; no carrier obligation`. Risk review complete.

## `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one`

Counterexample 1.1–2.1 and all four current suppliers checked. A supposed nonzero function with two singleton supports would have support product one; the product theorem gives one≥N, contradicting N>1. N=2 already refutes the universal claim, and N=1 has the displayed delta witness. Empty supports and f=0 are outside the supposed configuration, and no inverse-transform theorem is needed. Current raw item bytes are unchanged pre/post. Only the contract was corrected to cite the positive product bound rather than invoke invertibility. This is audit_enrichment and closes no reader/refuter finding.

Disposition: `reviewed_no_defect`. Risk review complete.

## `uncertainty-principles-for-fourier-analysis`

Full A-page prose, order and its 16 placements checked against the reviewed items. The H1 lower-bound domain is distinct from the quoted Schwartz equality classification. Gaussian bounds imply finite moments, without equivalence to support hypotheses. Compact support uses entire slices and a box in the open frequency complement. Hardy uses one-variable coordinate rigidity and finite factor iteration, not the obsolete strengthened induction. The finite product theorem carries N rather than a continuous variance constant. All substantive reader corrections are accurate; current page bytes match the post-reader snapshot. No new page repair needed.

Disposition: `accepted_repair`. 

## B-page finding and repair

Reader finding 30:1 and refuter finding 30:2 are the same confirmed_fatal page defect. With the reviewed unitary definition at N=4 and h=1_{ {0,2} }, (F4 h)(k)=(1+exp(-πik))/2, equal to one for even k and zero for odd k. Hence F4h=h and both supports have size two, product four, while h is neither delta nor constant. Tao §1 printed p.2 (https://arxiv.org/pdf/math/0308286) independently confirms subgroup indicators as equality cases. Changed only “the two extremisers” to “two examples of extremisers”; the N=1 coincidence and all formulas remain. Both observations bind the unchanged pre-repair page hash a339a9499b2d3f7581e2d2ad386546c59ad09cc503fe4a4f5f44d8d7a0b84550. One deduplicated closed defect row serves both decisions. The current B-page claims and its five item placements were reviewed. No item mathematics changed.

## Manifest and dependency reconciliation

Synchronized all 17 routed manifest entries with current titles, dependency lists, sources and provenance, and replaced obsolete proof strategies with their reviewed current arguments. Core Statement/Definition/Remarks and Example mirrors now use the current carrier text. Counterexample manifests retain their positive witness summaries and stable IDs. The obsolete compact-support strategy used a real-increment bound for complex increments; it now records the uniform remainder proof. The Hardy strategy no longer contains the unproved strengthened induction or uses |z|² for the holomorphic sum of squares. The proof-cost remark mirrors the actual sector-centered damping. This is completion of the accepted reader repairs, not an additional item rewrite.

Direct dependency/reference searches for the variance definition and Hardy theorem returned only batch-30 carriers and the owned A page. The Hardy explicit n≥1 condition is met by the examples’ Given, Gaussian supplier dimensions, and the remarks’ R^n context. All actual consumer uses were checked; no outside consumer repair or Statement/Definition change is needed in this adjudication. No withdrawal is proposed or removed.

## Sources and review limits

Relevant full arguments or exact interfaces were independently read:

- [Sheagren](https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf), §5 Lemma 5.1 and following compact-support observation, printed p.11. The coordinate extension and finite identity iteration are proved locally.
- [Tao, Hardy’s uncertainty principle](https://terrytao.wordpress.com/2009/02/18/hardys-uncertainty-principle/), Theorems 1–2 and complete §1 sector proof.
- [Lindell thesis](https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9206853&fileOId=9206856), §3.2 continuation/growth and sector/critical argument, PDF pp.35–40. Extraction corrupts numeral glyphs; page positions and mathematical content, rather than guessed printed numerals, were checked.
- [Laugesen](https://arxiv.org/pdf/0903.3845), Example 24.5 and Remark 24.6, printed pp.145–146; normalization converted to the local 2π convention.
- [Donoho–Stark](https://web.stanford.edu/dept/statistics/cgi-bin/donoho/wp-content/uploads/2018/08/UPSR.pdf), §3 Theorem 2, equation (3.1), complete proof and kernel-norm computation, printed pp.909–911. These scanned pages were downloaded, rendered with PyMuPDF and visually read. The source supplies the 1D zero-error specialization; the owned proof establishes arbitrary n directly.
- [Fernández-Bertolín–Malinnikova](https://arxiv.org/pdf/2210.03369), §1 Theorem 1, dimension discussion and sharp real-variable proof attribution, printed pp.2–3. Angular-frequency normalization has critical product 1/4, converted to product one here. The survey’s generalized-Gaussian equality assertion is not consumed.
- [Tao, finite-group uncertainty](https://arxiv.org/pdf/math/0308286), §1 printed pp.1–2, full product-bound proof and subgroup equality discussion. The prime-order sum refinement is not imported.
- [Taylor](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf), §11 equations (11.5)–(11.6), Proposition 11.2 and complete character-orthogonality proof; normalized target pairing distinguished from the local counting pairings.
- [Teschl](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf), Theorem 14.15 and proof, printed pp.385–386. The remark quotes the published library theorem’s Schwartz equality family, not an equality classification from Teschl’s coordinate statement.
- [Lebl](https://www.jirka.org/scv/scv.pdf), Definition 1.1.2 and complete Proposition 1.1.3 proof, printed pp.14–15: bounded separate holomorphy gives joint holomorphy via iterated Cauchy integrals. The Gaussian bound verifies local boundedness directly; the deeper unbounded Hartogs variant is unnecessary.

All 21 owned bodies and both pages were read. All direct declared/cited supplier interfaces needed by the routed arguments were opened; Sobolev Proof 1.3’s reverse construction was also checked. This is not a recursive audit of every published supplier proof. No published mathematical defect was identified, so no published ledger lock or edit was needed. No source failure blocks a local proof. Missing `python` and `pdftoppm` executables were resolved with `python3` and PyMuPDF; these mechanical failures are not defect rows.

## Local checks and handoff

- Initial risk report was run before review. All 18 HIGH/CRITICAL risks received specific complete reviews. The final `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-30.proof-contracts.json --require-reviewed` returned zero errors.
- Final `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-30.proof-contracts.json --strict`: 21/21 checked, zero errors or warnings.
- Scoped `node tools/rendercheck.mjs` on both owned pages: two files checked, real KaTeX/YAML parsing passed.
- One batched `node tools/proof-layout.mjs` on all 17 routed touched item paths after the final content edit: 17 items, 59 steps, zero defects. No item was edited by this adjudicator and no item edit followed that check. Reader prechecks were not represented as new tests.
- Twenty-one rows were appended through the ledger tool’s serialized append mechanism. Both reports of the B-page defect reference one row; the Gaussian false positive has one closed false-positive row. Completed repairs record confidence one; contract-only audit enrichments have empty defect IDs.
- Corrected the owned dependency input’s two stale annotations; `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` completed.
- Local coverage validation found exactly 21 unique owed decisions, closed linked rows, 18 complete risk reviews, and all 21 item bytes unchanged from the reader post snapshot. A blank ledger line initially broke the local inventory script; filtering blank lines fixed it without changing ledger data. No judgment, engine stamp, stage transition or full gate battery was initiated.

No local mathematical blocker or proposed withdrawal remains. Step 5b must reconcile engine-computed cross-batch impacts and the refreshed batch-30 manifest; this report does not claim that stage is closed. The engine must bind decision hashes and run its gates on final carriers. Historical repair descriptions remain reader evidence with immutable pre/post fingerprints, not claimed recovered preimages.
