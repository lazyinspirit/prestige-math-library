# Batch 47 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-47`. Complete local adjudication: two owed decisions, eighteen required risk reviews; one nonfatal proof gap repaired.

Dependency level 0 completed: chart lifting and concave-modulus ball intersection.

`lem-ip-boundary-chart-lifting-and-fourier-projection`: Checked finite relatively compact graph charts, square partition normalization, positive bounded chart densities, L2 and H1 pullback bounds and LG=I. Fourier contractions converge uniformly on compact sets by finite nets; N=0 is treated separately. Diagram arrows G,L,I compose correctly; no diagram dependence in proof. Direct supplier statements support partition, change of variables, product integration and Parseval under the declared Countable Choice.

`lem-ip-concave-modulus-hilbert-ball-intersection`: Independently checked truncated-distance weighted inequality (split both-short pairs from remaining nonnegative terms), concavity of omega(sqrt(t)) squared via polygonal approximation, active-gradient finite minimization and Hilbert variance identity. Projection variational inequalities give the Cauchy sequence for arbitrary intersections. Empty I, identically zero modulus and a zero radius are explicitly handled; AC covers the selections and projection prerequisites.

Sources: current item proofs and their exact Facts/dependency Statements; source URLs and locators retained in carrier metadata. These are local proofs, not imported conclusions. No edits to these carriers. Next: boundary spectral scale, then level-2 items.


Levels 1–2 completed.

`lem-ip-boundary-spectral-counting-and-sobolev-scale`: Checked single-boundary adaptation of G,L, compact embedding by finite-rank Fourier tails, coercive weak resolvent, positivity/self-adjointness/injectivity and spectral basis. Rank-nullity with N proportional to sqrt(1+Lambda) gives the claimed upper counting bound; dyadic summation gives all tau>0. Form Parseval identifies H1. The resolvent diagram correctly composes the weak solution map with compact inclusion. Disconnected boundary may have multiple zero modes; no simplicity is assumed.

`lem-ip-fno-torus-compact-universality`: Checked compact-uniform input/output Fourier truncation, continuity balls covering C and finite-dimensional network supplier proof via finite differences, polarization and Stone-Weierstrass. Full real sine/cosine coefficient extraction uses injected periodic bias, pointwise multiplication approximation and zero-frequency averaging. Nonconstant smooth activation has a point with nonzero derivative, allowing approximate identity channels through mandatory activations. Compact ranges control errors through finitely many operations; empty C and real conjugate symmetry are covered.

`thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel`: Checked orthogonal finite kernel series using conjugated input basis and first-variable-linear pairing; HS tail equals product L2 tail. Bounded kernel operator extends equality from finite spans. Mean-zero input extension and output range imply both section means vanish; countable basis and Fubini prove uniqueness. Supplier is used only in kernel-to-operator direction, so no circular inverse implication; AC and Countable Choice are explicit.

No carrier changes. Next: Neumann wellposedness, generalized universality and finite-sample BV example.


Level 3 completed.

`lem-ip-mean-zero-neumann-problem-wellposedness`: Checked Poincare on the volume-mean-zero closed H1 subspace, elliptic coercivity with constant m/C0 squared, conjugate-linear quotient trace functional and Lax-Milgram. Constants drop out of both sides; energy uniqueness is modulo constants. Bounded trace and positive finite boundary measure give a unique boundary-mean-zero representative and admissibility of L2 fluxes. Trace supplier covers C1 domains and quotient constants; no smooth-coefficient hypothesis is used.

`thm-ip-generalized-fno-uniform-approximation-on-compact-sets`: Checked lifted continuous map I J0 T La on the entire torus input Hilbert space, compact Ga(C), and torus approximation supplier. Zero extension and constant-coordinate extension are isometries; averaging and restriction are contractions. n-d=d-2 is nonnegative and T0 has unit mass at d=2. Averaging commutes with the final constant affine output map, so the constructed approximant has exactly the declared architecture. Empty C is handled.

`ex-ip-finite-sample-outside-uniform-bv-bound`: Checked disk/cell geometry including N=1: centers are s=1/(8q) apart, r=s/4, annular supports disjoint and contained in Omega. Polar integration gives distributional perimeter measure and a norm-one radial test field attains its mass. TV=pi a N/(16q) and q<=2sqrt(N) prove the claimed lower bound; ellipticity and background collar hold. This disproves a uniform class bound only, with no statistical conclusion.

Dependencies: actual C1 trace quotient Statement, Poincare, extension and Lax-Milgram Statements; BV class Definition and distributional TV conventions. No carrier changes. Next: smoothed observation and interior higher integrability.


Level 4 completed.

`def-ip-mean-zero-ntd-and-smoothed-kernel-observation`: Checked Neumann wellposedness, total-boundary mean projection and invariant mean-zero spectral subspace, allowing disconnected boundary zero modes. For d=2,tau=1/2 gives r=0; for d>=3 r>=0, so the spectral smoothing is bounded. Definition does not presuppose HS or kernel existence; zero means are the extension convention, proved later. Actual direct prerequisites support all constructions.

`lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions`: Checked gradient projection multiplier sign, scalar interpolation on product counting measure and dimension norm conversion, yielding Dp tending to one. Ellipticity k<1 permits p>2 with kDp<1. Cutoff equation has g=gamma grad(u).grad(chi) of zero integral; fundamental-solution convolution W has divergence g. Young local bounds require p<2d/(d-2), and cancellation gives |x|^-d far decay, including d=2. Neumann series limits agree distributionally in L2 and Lp; Sobolev/Poincare control the remaining cutoff term. The proof is local rather than an unexplained invocation of Meyers.

No carrier changes. Next: fixed-collar smoothing, then spectral kernel continuity.


Level 5 completed. `lem-ip-ntd-boundary-smoothing-for-fixed-background-collar`: Checked quadratic K-functional minimization and t-integration giving half-order spectral weight, chart retraction bounds and Slobodeckij Fourier identity. Boundary normal-coordinate tangential difference quotients and recovery of normal derivatives prove homogeneous Neumann collar regularity; smooth data are lifted before Rellich integration. The Rellich boundary flux is |grad_M u| squared minus |f| squared; energy and trace bounds extend from smooth to L2 flux by differences. Differences of NtD solutions have homogeneous normal data, so arbitrary spectral output orders follow. Self-adjoint symmetry and geometric averaging give two-index rapid decay; total-mean normalization accommodates disconnected boundary.

Source cross-check: de Hoop et al., actual 80-page PDF, Lemma 3.4 p.16 states fixed-collar smoothing; local proof supplies its own narrower estimates. No imported boundary regularity conclusion substituted for the written induction. Next: level 6.


Level 6 completed.

`lem-ip-interior-neumann-modes-and-kernel-forward-continuity`: Checked background volume-source duality: source support stays away from boundary, so homogeneous-Neumann collar regularity makes the trace coefficient rapidly small. Energy correction controls variable-conductivity interior gradients, and finite interior balls permit the preceding Meyers estimate with uniform p<4. Opposite weak solutions give the signed NtD identity; Holder uses q=p/(p-2)>2. Two-index decay and spectral counting sum the squared matrix with any r>=0. Complexification changes at most a fixed constant; disconnected-boundary zero modes cause no divergence.

`lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound`: Checked rank-J approximants of R and S and the rank-2J combined approximation with product error. r=0 is handled without claiming S compact; RS is compact from R. Singular-value minmax follows from the compact spectral theorem; 2(1+r)>n gives uniform HS norms. Weighted Cauchy-Schwarz between observed kernel norm and a uniformly rapidly decaying matrix gives the Hminus1/2-to-Hplus1/2 norm with square-root exponent. Weak DN/NtD inverse identity has the correct sign/order and uniform DN factors. Empty classes are vacuous and force no unjustified m<=1 assumption.

No carrier changes. Next: refuter:47:1 and class compactness.


Level 7 completed — refuter:47:1. `lem-ip-eit-forward-continuity-and-class-compactness`: Confirmed refuter:47:1 as nonfatal: the exact max(L1,TV) BV convention also needs the L1 limit bound. Added norm continuity ||gamma||1=lim||gamma_j||1<=R in Proof 1.1 and synchronized its derivation. Independently checked fixed-support translation compactness, L1 closure via test fields and AC, preservation of ellipticity/collar, C1 closure of the Calpha derivative ball via Ascoli, and Holder interpolation from L1 to the uniform coefficient Lq norm. Kernel HS continuity therefore gives compact exact image. No Statement or dependency changes; no affected consumer repair is needed.

The original carrier raw SHA256 matched both pre/post snapshots (2e5625ff3ea9e8b7a223a6406ec2247c11c707edf236f99d8a2167c3b0e1736a). The scope observed hash is a composite carrier hash, not a raw-file hash. Proof-only sentence repair; provenance already ai-altered; no material rewrite or judge record was present. Next: same-modulus extension.


Completed `thm-ip-hilbert-map-extension-with-concave-modulus`. Checked graph-inclusion poset, nonempty and empty chains, and one-point extension by the independently checked arbitrary-index Hilbert-ball lemma. Zorn therefore preserves the full arbitrary-subset/real-Hilbert interface, including empty A. For EIT, decreasing cutoff and enlarging C0 uses the finite class diameter; differentiating log(1/(C1 sqrt(s)))^-rho gives concavity when 2log>=rho+1, and saturation drops derivative to zero. Kernel-to-DN exponent is 1/2, zero distance gives uniqueness, and real coefficients plus kernel uniqueness prove exact kernels real while complex kernels are realified.

No carrier change. Dependencies: preceding checked items and the exact IP45 stability Statement. No independent reconstruction of all transitive IP45 proofs is claimed.


Completed `lem-ip-stable-extension-of-the-eit-inverse-map`. Checked unique kernel representatives and equality at zero through the square-root DN comparison and the zero-valued stability modulus. Thus inverse assignment is well-defined on exact image and inherits the corrected concave modulus. Previous extension theorem is used on real Hilbert spaces with complex input norm unchanged. Empty exact image admits zero extension. No additional regularity or injectivity premise is imported.

No carrier change. Dependencies: preceding checked items and the exact IP45 stability Statement. No independent reconstruction of all transitive IP45 proofs is claimed.


Completed `thm-ip-eit-fno-noise-robust-existence`. Checked compact exact image plus closed Kdelta yields compact Minkowski sum and realification is an isometric bijection onto two real channels. The stable extension composed with inverse realification is globally continuous, so generalized universality applies. Triangle inequality bounds noisy error by epsilon+Cstar omega(delta), including delta=0; empty class or noise set is vacuous. This establishes continuum existence only and gives no learning, computational or discretization guarantee.

No carrier change. Dependencies: preceding checked items and the exact IP45 stability Statement. No independent reconstruction of all transitive IP45 proofs is claimed.


Level 12 completed — touched:47:op-ip-finite-sample-generalization-of-neural-inverse-maps. Checked complete compact nonempty joint-data formulation, fixed chart family, finite bounded scalar parameterization, finite architecture tuples, Borel learners, bounded square risk and distinction between minimax excess risk and deterministic reconstruction error. Finite-net ERM baseline follows bounded-loss uniform deviations plus 2(C+D)epsilon oracle discretization. The reader source addition enriches status only: exact preimage is HEAD and hashes match pre/post snapshots. Independently read Reinhardt-Wang-Zech Theorems 5-6,23,27: fixed-design empirical bound, random-design population bound and FrameNet holomorphic/Darcy application do not settle this all-joint-laws EIT minimax characterization. Normalized PDF page numbers and the GLT lemma/theorem labels; formulation unchanged. No global literature-novelty certification or solution claimed.

Verdict: reviewed_no_defect; change_kind: audit_enrichment; defect_ids: []. The HEAD preimage SHA256 2cfdcd5d09ea259ac98c0c07487596743f45ef4c7e892d71618b8551061c0f58 exactly equals the pre snapshot. Initial current 5a264d86e0622e73a31abb9c46862701a02f891ff9ae48fd3e544cc5cadbb91b exactly equals reader-post. Actual diff only adds a literature reference, status paragraph and date; no historical uncertainty is needed. Alpha normalized the new paper PDF locators and GLT theorem/lemma label and synchronized source metadata. Next: focused validation and final report.


Source evidence and reading limits: the current authored local arguments and exact directly cited supplier Statements/Definitions were the basis of the mathematical review. They were not accepted merely from the old reader/refuter reports or owner reviews. External papers were used for literature-status comparisons and contextual cross-checks, not as replacements for the local collar, Meyers or Hilbert-ball proofs. No claim is made to have reconstructed every transitive proof below IP45 stability or read every historical source proof.

Reinhardt–Wang–Zech, [Statistical Learning Theory for Neural Operators](https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf): read the statements of Theorems 5–6 (PDF pp.10–12), 23 (pp.22–23) and 27 (pp.25–26), the random-design Assumption 1 and Darcy setup. The empirical and population norms, compact regression-class requirements, additive noise, holomorphic FrameNet target and specified input law differ from arbitrary joint-law EIT excess risk. This supports retaining the added neighboring-result discussion; it is not a literature-wide novelty determination.

Kovachki–Lanthaler–Mhaskar, [Data Complexity Estimates](https://arxiv.org/pdf/2405.15992), Theorem 3.3 and Remark 3.4, PDF p.13: the displayed learning bound assumes an algebraically FNO-approximable operator class, a compact input set and its specified sampling law. Grohs–Lanthaler–Trautner, [Theory-to-Practice Gap](https://arxiv.org/pdf/2503.18219), Theorem 3.20, Lemma 3.21 and Theorem 3.22, PDF pp.27–28: the rates concern specified ReLU operator approximation spaces and input laws or compact sets satisfying their stated assumptions. Read these statements and the adjacent reduction, not all appendix proofs. Neither statement solves the registered EIT minimax question.

The de Hoop et al. [80-page paper](https://arxiv.org/pdf/2511.20361), Lemma 3.4, PDF p.16, confirms the background-collar smoothing context. Its full proof was not used as an imported result in this adjudication; the written local collar proof was independently checked above. The two assigned diagrams have the correct objects, directions, labels and compositions. No additional diagram is mathematically required by these arguments.

The initial strict contract check exposed the copied F1 quotation from the updated batch-45 BV translation supplier. Refreshed that one quotation from the actual current Statement, as independently requested in the batch-45 ledger alert. The extra empty-supremum convention does not change the memberwise L1 translation estimate used here. This was mechanical contract synchronization, not a second mathematical defect. No Statement/Definition changed in either Alpha-edited item; no supplier interface or outside consumer requires repair. All published suppliers stayed read-only, and no defective published use was confirmed. Existing IDs and proposed withdrawals are preserved.

Validation after final item edits: reflow left both items unchanged; precheck passed the one proof-bearing item (open problem not applicable); rendercheck passed both items; strict proof-contract validation passed 21/21 with zero errors/warnings; risk-report --require-reviewed passed with eighteen complete HIGH/CRITICAL reviews; the required final batched proof-layout command checked both changed item paths, four proof steps and zero defects. Initial risk-report without --require-reviewed also passed and routed the eighteen reviews. No judge, hash stamp, gate battery, scheduling or publication action was performed.

Files edited by Alpha: the two item carriers; batch-47 proof contracts (risk reviews, repaired derivation, current F1 quote and status locators); batch-47 page manifest (source-metadata mirror only); this report and its decisions; the shared frontier ledger note; one closed defect row and its tool-generated ledger view. Page carriers were not edited; no page obligation is owed. No unresolved mathematical blocker or owner repair request remains for this dispatch. The engine owns subsequent hash stamping and gates.
