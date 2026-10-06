# Batch 2 Step-5a adjudication

Run: `frontier-39-analysis-30`; group: `batch-2`. Review follows the generated dependency order. This is local adjudication, not a judge, audit stamp or engine gate. Published carriers are read-only.

Evidence: dispatched scope/order, reader report/findings, refuter artifact, pre/post raw-hash inventories, current item arguments and exact prerequisite statements. No rendered evidence bundle was supplied. Historical repair descriptions come from the reader report and preserved manifest claims; hash comparison is not a claim to have recovered every historical byte.

Initial risk-report: exit 0, 37 items, 32 HIGH/CRITICAL. Teschl live PDF could not be loaded; no reading of it is claimed. Available authoritative source: Ivrii author PDF (served copyright 2026, preface calls it a June 2021 snapshot); Hunter author PDF.

### def-spherical-mean-of-space-dependent-data

accepted_repair: Reviewed the full Definition and all ten exact supplier interfaces. Continuous sphere data are bounded and Borel on the compact sphere with finite polar measure. For even n>=2 and r>0, translation and polar coordinates reduce weight integrability to integral_0^r s^(n-1)/sqrt(r^2-s^2) ds, integrable both at 0 and at r; bounded continuous f gives absolute convergence. M(x,0)=f(x) is explicitly a convention pending the smoothness proof; n=1 has omega_0=2. AC_omega is stated. The reader's translation-invariance citation closes the affine-substitution attribution gap without changing the formula. Current raw hash 288c45536519bbe49a5b9d9053cd5f7eff386f73c32d636ed69721d65b346cf5; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-def-spherical-mean-of-space-dependent-data`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### def-wave-equation-cauchy-data-and-wave-speed

accepted_repair: Reviewed the entire Definition and ten supplier interfaces. C2 on the open slab defines the PDE; initial data are pointwise limits without an assumed zero-time representative. Both rescaling directions follow from v(x,s)=u(x,s/c), u(x,t)=v(x,ct), c>0: velocity divides by c and the operator scales by c^2. Polar cone measure gives omega_m=(m+1)V_(m+1), including omega_0=2; the old mV_(m+1) reported by the reader and retained in the manifest is false at m=0. Integer double factorial conventions include 0!!=1. AC_omega covers every measure use. Current raw hash 64b729769999bd722ae91909ad999e4cc657ce2a447ee6a7bfce9c619e18e406; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-def-wave-equation-cauchy-data-and-wave-speed`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-derivative-of-an-integral-with-moving-endpoints

accepted_repair: Read all three proof steps and all eight prerequisite statements. Local K is a closed compact interval inside open I; extrema of alpha,beta lie in open J, so a,b,r_* exist there. Primitives on J and compact-rectangle differentiation give both partials of Phi on an open rectangle. Uniform integral estimates give their joint continuity, licensing total differentiability and both chain rules. The endpoint terms have opposite signs; fixed endpoints reduce to parameter differentiation. Strict alpha<beta is retained and no equal-endpoint application is asserted here. No choice is needed. Ivrii rule (2.5.10) uses precisely these endpoint and parameter terms. Current raw hash a30a676c54d9cf81cd16b262138aa7e999d2020e572e1856c9f530fe7199954c; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-derivative-of-an-integral-with-moving-endpoints`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-first-moment-of-the-unit-sphere-vanishes

risk review only: Read all three proof steps and five prerequisite statements. Reflection maps each Borel cone to its negative, preserving Lebesgue measure by determinant absolute value one; the definition therefore gives sigma(-E)=sigma(E). Bounded coordinate integrands against finite sigma are integrable, the measure-preserving substitution follows first for indicators then simple functions and bounded Borel functions, and equality to its negative forces every coordinate integral to zero. n=1 is covered by the polar definition, without an n>=2 chart argument. AC_omega is explicit; no defect or item edit. Current raw hash 3d9b52e6c1b55600664196330dd7bc6f475df4a55b9d2b49fcf9a94aa5bec6b5; matches post-reader; pre/post item bytes unchanged.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-iterated-radial-derivative-identity

accepted_repair: Read all four proof steps and the exact algebra-of-derivatives interface. With g=r^(2k-1)f, the right-hand bracket is g''+(2-2k)Dg. The product-rule induction D^j(r^2v)=r^2D^jv+2jD^(j-1)v gives D^(k-1)g''=r^2D^(k+1)g+(2k-1)D^kg; adding (2-2k)D^kg gives partial_r^2 D^(k-1)g. k=1 is treated separately; C^(k+1) is exactly sufficient and division is confined to r>0. The reader's integer-power/reciprocal attribution correctly uses repeated product and quotient rules, with no unstated chain rule. Current raw hash d089e6b1cd8373ee1fe3e7b3442fb6a8f5ce076f1aaf90f95b29b25059703c5f; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-iterated-radial-derivative-identity`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-radial-derivative-expansion-of-the-epd-transform

accepted_repair: Read all six proof steps and the algebra supplier. The k=1 transform is rf. Expanding (r^2 f)^(j) and applying D once gives only terms r^(i+1)f^(i); the displayed three contribution families have the correct coefficients and no negative powers survive. Evaluation at f=1 gives alpha_(k+1,0)=(2k+1)!! because every radial derivative lowers the power by two and multiplies by the old exponent. The limit after division by r uses the finite f(0) limit and bounded higher derivatives; both stated oscillatory counterexamples correctly show why mere boundedness or continuity is insufficient. No derivative beyond the stated class, integral or choice is used. Current raw hash 15b841376d02d3bedbbe3654ae06f1c502343c44f7ad3cc72f86340ece56d334; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-radial-derivative-expansion-of-the-epd-transform`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### cor-time-reversal-invariance-of-the-homogeneous-wave-equation

accepted_repair: Read both proof steps and all four supplier interfaces. The affine time reflection maps the open reflected interval to I; first time derivative changes sign, the second does not, and all spatial derivatives are unchanged. Thus the homogeneous operator is preserved and the velocity at tau is negated. Total differentiability is supplied by continuous partials before each chain rule. No endpoint trace, uniqueness theorem or choice is asserted. Current raw hash edae9022d3ca1ba78f63879d7da5f960db751ce4344b326e5424f5ee142dd5c6; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-cor-time-reversal-invariance-of-the-homogeneous-wave-equation`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-ball-and-sphere-mean-radial-identity

accepted_repair: Read four proof steps and ten interfaces. Positive/negative polar integrals are finite on the bounded ball; translation and omega r^n/n give A=n r^(-n) integral_0^r s^(n-1)M ds. Uniform continuity on a larger compact ball proves M continuous for r>0. Splitting at r_0>0 makes the primitive supplier's basepoint lie in (0,infinity); product differentiation then yields M=A+(r/n)A_r. n=1 is valid, no r=0 division occurs, and AC_omega is explicit. Current raw hash 391b2e394552c9b256575d1b60f5078254911517954702418a8c9affb5689ffa; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-ball-and-sphere-mean-radial-identity`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-odd-dimensional-wave-kernels-obey-the-radial-recursion

accepted_repair: Read three proof steps and all three suppliers. For h=w_r/r the computed h_rr+(n+1)h_r/r equals w_rrr/r+(n-1)w_rr/r^2-(n-1)w_r/r^3, exactly r^(-1) partial_r Delta_n w. C3 permits commuting the third mixed time/radial derivatives by successive C2 symmetry applications. The consequence is restricted to r>0 and this C3 setting; it does not assert a smooth extension at the origin. n=1 has the correct vanished coefficient. Reader's algebra citation correction leaves the identity intact. Current raw hash c0cc6c660612aa81e8334fd184a7e0d99190e54b1b2479d8ae0e3010c480c569; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-odd-dimensional-wave-kernels-obey-the-radial-recursion`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-one-dimensional-wave-operator-factorisation

accepted_repair: Read three proof steps and five interfaces. C2 mixed-partial symmetry cancels both cross terms in both factor orders. The characteristic linear map has nonzero determinant 2c; on the pulled-back u, partial_x=partial_xi+partial_eta and partial_t=-c partial_xi+c partial_eta, giving -4c^2 U_xi_eta. Since c>0, both directions of the zero-operator equivalence hold on corresponding open sets. Reader corrected derivatives of U in nonexistent x,t coordinates to derivatives of the actual pullback u; total differentiability is supplied before chain-rule use. Current raw hash 0efb8c61497737ab1c1441221459a7bf316b79a3c387dd58fbf8a94d1169ebdd; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-one-dimensional-wave-operator-factorisation`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-spherical-means-of-smooth-data-are-smooth

accepted_repair: Read all five proof steps, the complete four-part Statement, and eleven exact prerequisite interfaces. Uniform difference-quotient estimates on one compact spatial ball justify every ordered mixed derivative through k under the finite polar probability measure, including signed radius zero. Reflection gives evenness; first-moment cancellation gives M_r->0 uniformly on compact centres, and the differentiated-integral bound plus continuity controls sphere boundary values by the open-ball supremum of |Df|. n=1 needs only a finite measure, so no positive-dimensional chart is used. Ck, k>=1 and AC_omega suffice; the reader's stronger signed Ck extension licenses the odd-derivative limits used downstream. Current raw hash 071de2d4b7d68c591783b531f1b38f1569a4711352280ad2965edbfa0e7c91a8; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-spherical-means-of-smooth-data-are-smooth`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-spherical-surface-integrals-project-onto-weighted-ball-integrals

accepted_repair: Read five proof steps, the entire Statement and fifteen exact supplier interfaces. In ambient dimension n+1>=2 each graph sheet has density r/sqrt(r^2-|y-x|^2); two sheets contribute 2r, and equator nullity follows in finitely many bounded graph patches from null coordinate hyperplanes (singleton for n=1). Bounded g and the polar radial bound ensure absolute convergence; normalizing by omega_n r^n gives the stated mean. Gamma recurrence and factorial values give omega_(2k)=2^(2k+1)pi^k k!/(2k)!, hence 2 n!! V_n/omega_n=(n-1)!!. r=ct gives every power of c correctly. Countable Choice is stated; no S0 chart is invoked. Current raw hash f49039ee6b8389f323181151416d64ddf3992a403e238166df9f8f53e7bc54d8; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-spherical-surface-integrals-project-onto-weighted-ball-integrals`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-euler-poisson-darboux-equation-for-spherical-means

reviewed_no_defect: Read all five proof steps and nine exact prerequisite interfaces. Spatial differentiation yields Delta_x M=M_(Delta f); the published radial-average derivative is applied only to C2 f, giving M_r=r A_(Delta f)/n. The ball/sphere lemma applies to continuous Delta f and provides A_r without differentiating Delta f. Combining gives M_rr+(n-1)M_r/r=M_(Delta f). Boundedness and continuity give the zero-radius limits; the finite-measure differentiation argument extends locally to the time parameter in a C2 solution, giving the space-time equation. n=1 has no singular coefficient. AC_omega is explicit. Item bytes are unchanged pre/post; only the proof contract was enriched by the reader, so no defect row is warranted. Current raw hash 03277996fae687bd941b55773858562a90c388a8c256b1110b766cade912feaf; matches post-reader; pre/post item bytes unchanged.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-general-solution-of-the-one-dimensional-wave-equation

accepted_repair: Read all five steps and seven exact supplier interfaces. The invertible characteristic map sends a possibly unbounded nonempty open rectangle to an open convex set with interval sections and open interval projections. U_xi_eta=0 makes U_xi constant on each eta-section; local fixed-eta representatives prove the resulting p is C1, and its primitive P is C2. Horizontal sections similarly give C2 G and U=P+G. The converse is the affine chain rule; differentiation of two decompositions forces their differences to be opposite constants on the projections. No arbitrary section choices are assembled, so no Choice is needed. Reader fixes the overstrong assertion that every image is a bounded parallelogram and the chain-rule prerequisite. Current raw hash e758cfaea4bac83cd5d07229933ccced03d93b79f3050aced1d004eaa8245568; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-general-solution-of-the-one-dimensional-wave-equation`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-dalembert-formula

accepted_repair: Read four proof steps and six exact supplier interfaces. C1 velocity has a C2 primitive P, so the displayed sum has a C2 signed-time extension even at equal endpoints. The two second-derivative formulas agree with factors c^2/2 and c/2; at zero the endpoint displacement average is u0 and the two velocity values sum to u1. For any competing classical solution with pointwise traces, the global open strip has both characteristic projections equal to R. Thus its difference F(x-ct)+G(x+ct) has zero traces at every x; F+G=0 and -cF'+cG'=0 force both derivatives zero globally. This fixes the reader-reported local-projection uniqueness gap without adding zero-time regularity assumptions. No choice, growth or compact-support hypothesis is needed. Current raw hash 3cf57b7af9cc632acdd1efc8b39b1c68ec90aafe75abebc12df589755156ba28; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-dalembert-formula`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-kirchhoff-formula-for-the-three-dimensional-wave-equation

accepted_repair: Read five proof steps and all fifteen exact prerequisite interfaces. With r=ct, u=A+ct A_r+tB gives u_tt=3c^2 A_rr+c^3t A_rrr+2cB_r+c^2tB_rr. EPD and C3 mixed-derivative commutation give the same c^2 Delta u, including cancellation of +/-2c A_r/t. C3 displacement and C2 velocity suffice for every derivative. Surface scaling and Gamma(5/2) give 4pi, so the unnormalized coefficient is 1/(4pi c^2t^2). The formula includes grad u0 dot (y-x), hence normal derivatives or neighbourhood data, not bare displacement values on the sphere. t>0 avoids singular denominators; initial attainment is delegated to its later lemma. AC_omega is stated. Current raw hash 443e618154af8807b2755ca1db7ef92166417f3676e4d67826b03742e281d245; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-three-dimensional-radial-wave-reduces-to-one-dimension

accepted_repair: Read four verification steps and nine exact supplier interfaces. Summing the radial Hessian on r>0 gives Delta u=v_rr+2v_r/r=(rv)_rr/r, proving the forward C2 reduction. Conversely C3 w with w(0,t)=0 has v=integral_0^1 w_r(sr,t) ds, jointly C2 by compact-rectangle differentiation. Continuity of the PDE gives w_rr(0,t)=0. Both v_rr and v_r/r tend uniformly on compact times to w_rrr(0,t)/3; the Cartesian Hessian therefore extends as that scalar times identity. v_rt(0,t)=0 gives continuous mixed Cartesian/time derivatives and the equation at the origin is v_tt=c^2w_rrr. The regularity loss C3 to C2 is explicit; no unjustified Taylor differentiation remains. Current raw hash 1d8ade795b82cfad063bd5b8390731658f8b5b17347a0f701d29a6f4b07863e5; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-three-dimensional-radial-wave-reduces-to-one-dimension`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-dalembert-formula-attains-both-initial-data

accepted_repair: Read all three steps and five exact interfaces. Equal endpoints at zero give zero velocity integral; moving endpoints are used only for t>0 where alpha<beta, yielding two positive endpoint velocity contributions. The already proved primitive-based C2 d'Alembert extension licenses taking the derivative formula to zero. u0' terms cancel and velocity equals u1. No unsupported equal-endpoint use of the moving-endpoint lemma remains, and no choice is required. Current raw hash 826a66ee8110a14d8d75ba87965a54f8d47d676f847512b9e3586670c847af33; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-dalembert-formula-attains-both-initial-data`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-odd-dimensional-wave-formula-by-spherical-means

amended_repair: Read all five proof steps and twelve exact supplier interfaces. With n-2=2k-1 the radial identity applies to h(t)=M_f(x,ct) in C^(k+1); its inner term is c^2 t^(n-2) Delta_x M by EPD. Ordered mixed derivatives through k+1 justify commuting Delta with the k-1 radial operators. C^(k+2) displacement yields a C3 transform, C^(k+1) velocity a C2 transform, so differentiating the former and superposing yields the C2 homogeneous solution. k=1 gives Kirchhoff exactly and the double factorial is nonzero. Initial traces are explicitly left to the later lemma. The reader's total-differentiability addition is accepted; residual F4 attribution of compositions to derivative algebra was removed locally, since the separate total chain-rule clause supplies it. AC_omega is explicit. Current raw hash 63ba130e24d778956af6bb8c9391192d65c5753525bfcc4510194373f50493d0; differs from post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-odd-dimensional-wave-formula-by-spherical-means`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-one-dimensional-forced-wave-duhamel-formula

accepted_repair: Read four proof steps and eight exact supplier interfaces. The constant source extension below s=0 preserves f and f_x continuity; oriented inner primitives define Phi across t=s, with Phi=0 on the diagonal. D_t is half the sum of two launch endpoint values; D_xx requires only f_x. The second time derivative contributes f(x,t) plus c/2 times the difference of f_x, exactly f+c^2 D_xx; mixed derivatives agree and all are continuous on local compact rectangles. Source terms have zero initial displacement/velocity, with D_tt->f(x,0). Homogeneous strip uniqueness gives forced uniqueness. No f_xx or common support assumption is used, and no choice is needed. Current raw hash 7fe3f1dfb43c88f5a35c7e7060c51d1c0b431d18971e434fd081f0b2ada7f802; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-one-dimensional-forced-wave-duhamel-formula`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-poisson-formula-for-the-two-dimensional-wave-equation

accepted_repair: Read four proof steps and fourteen exact supplier interfaces. Cylindrical C3/C2 data give a z-independent Kirchhoff solution; restriction therefore solves the 2D equation. Projection at n=2 gives W(x,ct)=ct M^(3), hence the coefficient 1/(2pi c) in both differentiated and velocity integrals. The singular weight is integrable; the fixed-unit-disk substitution I=ct A uses translation and linear scaling. Mean-value difference quotients are bounded by cC|z|w(z), integrable on the disk, so DCT justifies differentiation and continuous parameter limits. Substituting I'=cA+ct A_t gives the numerator and 1/(2pi ct) coefficient in the equivalent formula. t>0 and AC_omega cover all domains; zero-time attainment is deferred. Current raw hash d9436311a5bb4e5dc3c0012e1ee5a073c8ca11f727208d014afd4a3793d9edcb; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-poisson-formula-for-the-two-dimensional-wave-equation`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave

accepted_repair: Read all four steps and three supplier interfaces. On xi=0 the traces fix G up to the common additive constant and F'(0); F(0) is not individually fixed. The two smooth witnesses sin eta and xi^3+sin eta satisfy the wave equation and share values and both first derivatives on the line because 3xi^2 vanishes there. Their difference xi^3 is nonzero arbitrarily near every line point. This refutes the specified uniqueness claim; no unsupported general well-posedness assertion remains and no choice is used. Current raw hash 1b89e6be6ebc5486bac26af8001bc4c1ec4171f5f4a69592b0f9e78814d69198; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-right-and-left-travelling-waves

accepted_repair: Read four verification steps and seven exact supplier interfaces. Twice differentiating F(x-ct)+G(x+ct) gives the equation and initial velocity -cF'+cG'. G=0 translates the graph by ct without changing shape. Evaluating the primitive integrals in d'Alembert cancels the opposite endpoint terms and returns the same F and G. The converse uses the already checked open-rectangle general solution, with projection intervals and no global extension presupposed. C2 profiles suffice; total differentiability is supplied before chain-rule use. No choice is used. Current raw hash 4c47668821fcfd98073ade4e09a8d156c75a054a645f7476846afcd5bd2025e9; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-right-and-left-travelling-waves`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel

accepted_repair: Read the complete Remark and all three prerequisite interfaces. The displayed 2D wave disk weight, coefficient and time derivative agree with the current Poisson wave formula. The harmonic supplier integrates boundary data with the fixed-ball Poisson density; the wave formula propagates displacement/velocity in space-time. The shared name establishes neither equality of kernels nor transfer of estimates. Reader correctly removes the unsupported assertion that every other mathematical relation is absent. No new proof, uniqueness claim or boundary estimate is supplied here. Current raw hash c7f3aa4a090c8c49a5d5b36c5361ce4c2a72f85cac5f14affbc9b7efd41b8885; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-even-dimensional-wave-formula-by-descent

accepted_repair: Read four proof steps and eight exact supplier interfaces. For n=2k, cylindrical data in n+1=2k+1 dimensions satisfy exactly the odd formula's C^(k+2)/C^(k+1) hypotheses. Their means and hence solution are independent of the extra coordinate, so Delta_(n+1) reduces to Delta_n. Projection t^(n-1) M=(n-1)!! c^(1-n) W cancels the odd normalization and gives the stated c^(1-n) prefactor without differentiating a singular ball weight. k=1 agrees with the checked 2D Poisson formula. r,t>0 and AC_omega are explicit; initial attainment is a later lemma. Reader's removal of unnecessary composition attribution is sound. Current raw hash 443be08d7a38971496637d1ca00954dd3befcb14cc611f0a40268170ec0f75dd; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-even-dimensional-wave-formula-by-descent`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### lem-wave-formulas-attain-the-cauchy-data

accepted_repair: Read four proof steps and fourteen exact suppliers. The finite radial expansion T=sum alpha_j t^(j+1) h^(j) is differentiated explicitly twice; every derivative has order <=k+1 and all time powers are nonnegative after omitting the j=0 first term of T''. Even signed C^(k+1) means give h(0)=f and h'(0)=0, so T->0, T'->(2k-1)!! f and T''->0 uniformly on compact centres. The odd formula therefore has displacement u0 and velocity u1. Cylindrical descent transfers both limits to even n without singular-weight differentiation. Locally uniform displacement convergence and continuous u0 give joint continuity at zero. n=2,3 and zero data are included; AC_omega is explicit. Current raw hash 0abac04bcb22cf1de76def868feb79b6a49bd8b366273438a62878be36515959; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-lem-wave-formulas-attain-the-cauchy-data`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-support-dichotomy-for-free-wave-fundamental-solutions

amended_repair: Read five proof steps and eleven exact interfaces, including the full published smooth-bump proof. In odd n compactness of the sphere gives a uniform radial neighbourhood inside the agreed open neighbourhood, so all required sphere mean derivatives agree; bare traces are correctly excluded. For even n and compact interior support a positive radial margin gives a fixed box and smooth time-dependent integrand extended by zero; repeated compact-rectangle differentiation and Fubini move D_t under the integral. K=b(c^2t^2-rho^2)^(-(2k-1)/2) has b=c^(-1)(-1)^(k-1)(2k-3)!!/(n!!V_n), so K(0,t)=c^(-n)(-1)^(k-1)(2k-3)!!t^(-(n-1))/(n!!V_n), including k=1. A nonnegative smooth bump with compact support in B_(2delta) contributes with one fixed nonzero sign, including its transition annulus. The reader's witness and fixed-support repair is sound. The residual undefined displacement bracket is replaced by partial_t K and its fixed-box differentiation justification is added to step 1.2; the actual velocity claim and normalizations are preserved. The sole direct item consumer is ex-two-dimensional-wave-has-an-interior-tail, reviewed at its assigned level. Current raw hash 1c98776aa29bd9d992ca55ff44174948c4ce86f7ceb36816d64b0461a82aa6b5; differs from post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-support-reader-interior-witness`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-support-dichotomy-for-free-wave-fundamental-solutions

confirmed_fatal: The refuter's observed bytes are bound by scope SHA256 1aa025066607fb2da8c9533b29394efe70c0506bf84266541db598d47f399b30. The current Statement before this repair still contained c^(1-n) partial_t D_t^(k-1)[dot] without an argument, so the reported ill-formed kernel is confirmed. It is repaired to partial_t K(rho,t), where K is defined immediately above with the exact velocity kernel argument and constants. Step 1.2 now proves that one additional time derivative passes under the same fixed-box integral for compact-interior displacement data. Independently checked K's smoothness, nonzero interior sign, all c powers, k=1 and the smooth-bump witness; no missing prerequisite remains. Only the owned 2D-tail example directly cites this supplier and uses the unchanged n=2 velocity kernel. Current raw hash 1c98776aa29bd9d992ca55ff44174948c4ce86f7ceb36816d64b0461a82aa6b5; differs from post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-support-undefined-displacement-kernel`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-wave-support-from-pure-displacement-versus-pure-velocity-data

accepted_repair: Read three verification steps and four exact supplier interfaces, including complete indicator-extension and domain-of-dependence proofs. Each displacement summand is a rigid translate of u0/2, while their sum may reinforce or cancel in overlap. Velocity is integral/(2c)=t times the interval average for t>0 and equals total integral/(2c) once the whole support is contained. The bounded indicator is explicitly a nonclassical formula extension. Compact classical data vanish at +/-a by continuity, so values vanish at |x|=a+ct, including t=0; topological support remains contained in the closed expanding interval. a,c>0 are explicit; zero data and empty overlap are harmless. Current raw hash 6eeebfd39abc624b2d77223c41e6e942b7a65c8d117f0ca860e7b9c8c101f4b6; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-wave-support-from-pure-displacement-versus-pure-velocity-data`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-wave-duhamel-principle

accepted_repair: Read all three proof steps and ten exact prerequisite interfaces. q=floor(n/2)+1 equals k+1 in odd 2k+1 and even 2k dimensions. The explicit finite launch sum has only nonnegative powers and derivatives of the signed sphere mean through q after two (x,tau) differentiations. Joint continuity of all stated spatial derivatives of f gives joint launch derivatives on compact sets, including tau=0; even dimensions use the same cylindrical launch. Constant source-slice extensions in s and signed tau launch supply a rectangle across the diagonal. Its first boundary term vanishes; the second is f(x,t), and each launch's homogeneous equation gives u_tt=f+c^2 Delta u. Fixed s-interval differentiation gives all spatial and mixed derivatives and continuous one-sided endpoints. No time derivatives, common compact source support or higher-dimensional uniqueness is claimed. AC_omega is explicit. Current raw hash 47800462377c4db2449ca625772c0ffc06da4331fa05e9c7d9930735ee0e86f0; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-wave-duhamel-principle`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-kirchhoff-formula-for-constant-initial-velocity

accepted_repair: Read both verification steps and four exact interfaces. The normalized sphere mean preserves every real constant, so the Kirchhoff expression is g0+t v0, with zero second time/spatial derivatives and exactly the two initial data. On the radius-ct sphere the unnormalized integral is 4pi c^2t^2 times the constant; the unit sphere separately has measure 4pi. Zero constants and arbitrary c>0 are covered. AC_omega is explicit and uniqueness is deliberately left to its later owner. Current raw hash f774653e296ab7d1bab797f59e4f5559f98fb29f1c38533886f40a7d3d49de86; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-kirchhoff-formula-for-constant-initial-velocity`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-point-source-wave-front-in-three-dimensions

accepted_repair: Read both verification steps and thirteen exact interfaces, including the full bump proof. Normalize a nonnegative compact smooth bump of positive finite mass and scale by epsilon^-3. For fixed t>0, Fubini is applied on R3 times the fixed unit sphere after bounding the integrand on the finite-measure product B_(ct+epsilon) times S2, even for an unbounded continuous test function. Translation and sphere reflection then give t/(4pi) integral rho_epsilon(y) integral phi(y+ct omega) d sigma dy. Uniform continuity on one compact ball makes the inner sphere integral tend to its value at y=0 as epsilon->0. Surface scaling yields density t/(4pi c^2t^2), total mass t; division of the measure by t gives probability. No distributional PDE is asserted for a singular datum and AC_omega is explicit. Current raw hash d16adb60333e3e96c6485102c57881cfab8f4df21876f7c5c732f00d4fcdc3e7; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-point-source-wave-front-in-three-dimensions`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### ex-two-dimensional-wave-has-an-interior-tail

accepted_repair: Read both verification steps and six exact supplier interfaces, including the repaired support dichotomy. The smooth nonnegative bump equals one on a positive-volume inner disk and has compact support in B_(1/2), so it meets the Poisson C2 velocity hypothesis and is separated from the radius-one sphere. At x=0,t=c=1 the coefficient is 1/(2pi); on that support the weight is >=1 and <=2/sqrt(3), giving a strictly positive integral. The comparison uses neighbourhood dependence in odd dimensions, not bare sphere traces. The displacement-kernel notation repair in its supplier leaves this unchanged velocity use sound; no consumer edit is needed. AC_omega is explicit. Current raw hash 0df950d0229fed5516f1be5182bae8fa11609419e6ff5353e91256c827ebd269; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-ex-two-dimensional-wave-has-an-interior-tail`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### thm-forced-three-dimensional-kirchhoff-duhamel-formula

accepted_repair: Read all four proof steps and fifteen exact supplier interfaces. Joint C2 spatial source regularity exactly meets the n=3 Duhamel hypothesis on every bounded time interval, without time derivatives or common support. Kirchhoff launch is (t-s) times the sphere mean; rho=c(t-s) contributes rho/c and the Jacobian 1/c, giving coefficient 1/(4pi c^2). Signed polar integration with translation converts the radial integral to the retarded ball integral. On the compact backward cone f is bounded, and |y-x|^-1 has finite integral 4pi integral_0^(ct)rho d rho; the centre is a null singleton and may be assigned any value. The arguments prove a constructed classical solution with zero data, and do not infer unproved higher-dimensional uniqueness. AC_omega is explicit. Current raw hash e0094e6f55c1955b1295039d82080065d0db87a94f1c93b14d8ef150fae7cfc8; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-thm-forced-three-dimensional-kirchhoff-duhamel-formula`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### cex-wave-formula-with-sphere-area-and-ball-volume-confused

accepted_repair: Read all three counterexample steps and nine exact supplier interfaces. The refuted expression now changes only sphere measure to ball measure while retaining both actual Kirchhoff factors t. Volume/area ratio is ct/3. Constant displacement produces 2ct/3 with zero displacement limit and velocity 2c/3; constant velocity produces ct^2/3 with zero initial velocity and nonzero second time derivative 2c/3. Both refutations work for every c>0, including c=3, and no denominator is evaluated at t=0. Constant data meet all smoothness hypotheses and need no compact support; AC_omega is explicit. Current raw hash 59bc067ccae178e6bc39955a014cd3f83a1d469684775d81bc50422ba682e72c; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-cex-wave-formula-with-sphere-area-and-ball-volume-confused`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### cor-classical-wave-solutions-are-locally-determined-by-cauchy-data

accepted_repair: Read both proof steps and fifteen exact interfaces. Data differences vanishing on the closed radius-ct ball have all available derivatives zero in its interior and then on its boundary by continuity; thus all odd derivative sphere means vanish. In even n, translation and scaling give W=(n!!V_n)^(-1)(ct)^(n-1) integral_(B1) delta(x+ctz)w(z)dz. The closed-interval mean-value theorem and compact derivative bounds give integrable majorants c^(m+1)C_(m+1)w for successive derivatives through k. DCT therefore justifies every needed derivative, which vanishes at t. Equal sources on the backward cone give equal retarded potentials. Only constructed solutions are asserted; higher-dimensional uniqueness for arbitrary classical solutions is not inferred. AC_omega is explicit. Current raw hash f360fb8b483ff8d168dea13455057ecffae1f39731e038de1c374018b3dc7934; matches post-reader; pre/post item hashes differ.

Closed defect: `f39-b2-5a-cor-classical-wave-solutions-are-locally-determined-by-cauchy-data`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### wave-equation-representation-formulas

amended_repair: Read both complete pages, the A-page 28-item inventory and B-page nine-example list, and all current claims summarized. The reader's signed-radius, normal-derivative and Duhamel joint-spatial-regularity qualifications are sound; n>=2 uniqueness remains deferred. The residual A summary incorrectly locates the characteristic-line counterexample on this page, although its carrier is homed on the B companion. The paragraph now explicitly links that companion as the location. Placement and order remain unchanged. This is a confirmed editorial location defect with a complete local repair.

Closed defect: `f39-b2-5a-page-characteristic-counterexample-placement`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

### wave-equation-representation-formulas

confirmed_nonfatal: Scope binds the original observation to page SHA256 1d9985e517385934ac67e3caf7e407ef05ed146a1488748ace8f98fb4545e540. The before-repair current paragraph repeats the reported claim; YAML examples:[] and the 28 A-item list omit cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave, which the B companion explicitly lists. Confirmed nonfatal editorial placement defect: the theorem inventory and cubic counterexample are mathematically sound. The paragraph now explicitly names and links the companion as the counterexample's location. The referenced closed ledger row is the exact same placement defect as the page decision.

Closed defect: `f39-b2-5a-page-characteristic-counterexample-placement`.

Checkpoint: obligation/risk review complete; next action is the next generated-order item.

Source-locator amendment for `def-spherical-mean-of-space-dependent-data`: Hunter pp.211–212 discuss the wave equation and Cauchy data but do not define sphere/ball averages. Corrected the locator to Proposition 1.45 (p.17) and Theorem 2.1 (p.20), both read completely; Ivrii Definition 9.1.1 separately provides the wave spherical mean. Closed defect: `f39-b2-5a-def-spherical-mean-of-space-dependent-data-hunter-locator`. Verdict is `amended_repair`; full mathematical risk review above remains complete.

Source-locator amendment for `lem-ball-and-sphere-mean-radial-identity`: Hunter §2.2 begins on p.23 with harmonic derivative estimates. The used radial integration and average computation is instead §2.1, Theorem 2.1 and (2.4), p.20. Corrected that locator after reading the complete argument; the local proof is unchanged. Closed defect: `f39-b2-5a-lem-ball-and-sphere-mean-radial-identity-hunter-locator`. Verdict is `amended_repair`; full mathematical risk review above remains complete.

Source-locator amendment for `lem-euler-poisson-darboux-equation-for-spherical-means`: Corrected the inherited Hunter §2.2 locator to §2.1, p.20, Theorem 2.1 and (2.4), read completely. This source supplies the sphere-mean derivative; EPD itself is proved locally from the exact current library suppliers. Closed defect: `f39-b2-5a-lem-euler-poisson-darboux-equation-for-spherical-means-hunter-locator`. Verdict is `amended_repair`; full mathematical risk review above remains complete.

Source-locator amendment for `ex-three-dimensional-radial-wave-reduces-to-one-dimension`: Hunter §7.1 pp.211–212 contains the one-dimensional travelling-wave solution and energy context, not the asserted radial reduction. Corrected the locator to distinguish that context from the locally proved radial reduction and the exact Ivrii Problem 6 source. Closed defect: `f39-b2-5a-ex-three-dimensional-radial-wave-reduces-to-one-dimension-hunter-locator`. Verdict is `amended_repair`; full mathematical risk review above remains complete.

## Source and consumer review checkpoint

Complete source sections read directly: [Ivrii author PDF](https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf), printed pp.45–48 (general solution and d'Alembert), p.51 Problem 6(c–d), pp.53–54 (Problem 14 and characteristic factorization/general solution), pp.61–63 (Proposition 2.5.1, moving-endpoint rule and its complete proof), pp.281–286 (Kirchhoff, Duhamel, retarded potential, means and two-sheet descent). Problem 6(a–b), printed p.50, was also read in full: it explicitly gives v=ru and the one-dimensional travelling-wave reduction. The general 3D Fourier argument is source context, not an imported existence proof without decay hypotheses. Ivrii's Remark 2.3.4 says even-dimensional spherical waves do not exist; that assertion is not used and is not adopted here. The local even-dimensional kernel argument was checked directly.

[Hunter author PDF](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf): complete pp.15–23 (chart/graph surface density, change of variables, polar formula, divergence and Theorem 2.1/(2.4)); complete pp.211–212 (travelling waves, reversibility, data and force context). Four locators misidentified Hunter's actual contents and are corrected above. Teschl archived PDF failed via web and live author URL returned HTTP 404; no claim of reading those unavailable proofs is made. Speck Lecture 10 and Oh author notes were opened as supplementary source context; no unexamined complete argument is claimed. All 38 distinct published dependency/reference interfaces used by the owned items were read, and the smooth-bump supplier proof was read completely. This does not certify all their transitive proofs.

Direct consumers were found using both dependency declarations and body references. Batch-3 consumers of the wave-data Definition use the unchanged speed-c operator, linearity, or impose their own stronger boundary/energy regularity. Their zero-time energy continuity hypotheses are not inferred from the pointwise trace Definition. The Huygens Definition explicitly uses neighbourhood/jet agreement and illustrates the normal derivative by a radial datum with value zero and derivative -1 on the unit sphere. The strong-Huygens proof uses only r>0 smooth mean derivatives and neighbourhood equality; the quiet-shell example explicitly reads the displacement radial derivative. The wave-tail theorem uses the unchanged weighted-ball normalization and compact-interior differentiation. Reflection, finite-speed, 2D pulse and counterexample consumers retain their exact unchanged formula uses. No consumer needs a mathematical repair; no additional propagation hop is triggered. Reader's incidental batch-3 vertical-tab alert in the strong-Huygens item was checked against current step 3.1, which now has a valid \varnothing token; it is not re-reported as a current defect. No published carrier defect was confirmed.

The owned cross-batch input retains the removed heat-page edge; no proposed withdrawal is removed. Step 5b retains computed cross-group reconciliation and impact-window closure.

Initial focused checks: reflow left all six edited items unchanged; precheck passed all five proof-bearing items (the Definition has no proof and was skipped); rendercheck passed all six edited items and the edited A page. Strict proof-contract checking found one stale F2 supplier quotation in the owned 2D-tail example contract after the displacement-kernel Statement repair. Its mathematical use was already reviewed and unchanged; refreshed that quote to the exact current Statement, without editing the sound consumer. This mechanical synchronization creates no defect-ledger row. Required risk-report with --require-reviewed passed (37 items, zero errors).

Final manifest synchronization also replaced fifteen stale strategy descriptions with the actual current proof routes, including the compact moving-endpoint primitive, two graph hemispheres, finite-measure signed-radius smoothness, full-strip uniqueness, differentiated finite sums and cylindrical descent. The one-dimensional forced manifest strategy had the false equation D_tt=f+D_xx for arbitrary c>0; it now reads D_tt=f+c^2 D_xx, matching the authored proof. Closed defect `f39-b2-5a-forced-manifest-wave-speed`; its touched decision is `amended_repair`. No item mathematics was changed during this strategy synchronization, so the final item layout check remains current.

## Final local validation and handoff

Completed all 37 owed obligations exactly: {'amended_repair': 8, 'accepted_repair': 27, 'confirmed_fatal': 1, 'confirmed_nonfatal': 1}. Both flagged decisions reference exactly one closed defect row; all 40 owned confirmed-defect rows are closed at `5a-adjudicate` and referenced by a decision. Every completed repair has `repair_confidence: 1`. The engine must stamp carrier hashes and run its gate battery; no judge, stamp, dispatch, stage transition or impact-window closure was initiated here.

Final local checks:

- Reflow on all six edited items: exit 0, unchanged.
- Precheck on those paths: exit 0, five proof-bearing items passed; the Definition was skipped.
- Rendercheck on the six items and edited A page: exit 0, seven files, valid renderer YAML and KaTeX.
- After refreshing the stale owned supplier quote, `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-2.proof-contracts.json --strict`: exit 0, 37/37 items, zero errors and warnings.
- `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-2.proof-contracts.json --require-reviewed`: exit 0; all 29 CRITICAL and 3 HIGH reviews complete (five MODERATE).
- Final batched `node tools/proof-layout.mjs` on all six edited item paths after their last edits/reflow: exit 0, six items, 23 numbered steps, zero defects. No item was edited afterwards.
- Direct decision coverage and closed-row linkage checks: exactly 37 obligations, no missing/extra decisions, no duplicate or unreferenced owned rows.

Edited items: `thm-odd-dimensional-wave-formula-by-spherical-means`, `thm-support-dichotomy-for-free-wave-fundamental-solutions`, `def-spherical-mean-of-space-dependent-data`, `lem-ball-and-sphere-mean-radial-identity`, `lem-euler-poisson-darboux-equation-for-spherical-means`, and `ex-three-dimensional-radial-wave-reduces-to-one-dimension`. Also updated the routed A-page summary, owned manifest/contract mirrors, this report and decisions, the shared defect ledger and owned-consumer dependency-ledger record. Published content was not edited.

No unresolved owned mathematical finding or prerequisite blocker remains. No current outside-batch repair alert is required. Teschl unavailability and historical source-version limits remain explicitly recorded above; no unsupported source-reading claim is made. Next action: engine hash stamping and gate battery, then Step 5b computed-edge reconciliation.
