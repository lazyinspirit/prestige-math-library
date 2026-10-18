notes = '''
Entropy is H(qUV)-H(qV); uniform-reference KL proves continuity even at zero coordinates (1.1,2.1).
The fiber factors over positive-mass v rows; zero-mass rows contribute factor 1 and nqV(v)>0 makes each retained blocklength positive (1.1,2.1).
Finite distributivity factors the complement marginal and positivity of the supported joint word permits the coordinatewise ratios (1.1,2.1).
Continuity chooses one delta; summing at most (n+1)^m conditional-type fans gives the entropy exponent; 2.1 explicitly includes the empty complement.
Indicator Chebyshev bounds and finite union over symbols/nonempty S yield the typicality limit, including zero-probability symbols (1.1–2.1).
The counting converse uses at most MS correct words per complement; independent per-word/per-encoder bins and diagonal slack achieve every closed subset constraint (1.1–4.1).
Four explicit masses give conditional entropy h(p), joint entropy ln2+h(p), and the support graph is connected for p>0 (1.1–4.1).
Two independent bin equalities each have probability 1/M; sharing a map makes them the same event, changing M^-2 to M^-1 (1.1–2.1).
Under q^n all words of Tq have mass e^-nH(q); the count-factorial comparison makes q a most probable type, yielding the polynomial lower bound (1.1–2.1).
Rounding positive conditional counts constructs a supported joint type, and a first successful IID draw has precisely the conditional product law, uniform within type (1.1–4.1).
Conditional-type fan counts and product-marginal probabilities give the packing exponent; complement-only selection preserves independence of candidate changed codewords (1.1–4.1).
Uniformly permuting conditional counts gives a hypergeometric triple count with variance at most nx; support zeros vanish and a finite Chebyshev union gives C/n (1.1–3.1).
A null direction of posterior/distortion vectors removes weights without lowering conditional entropy, preserving distortion and yielding |U|<=|X|+1; compactness over finitely many decoders attains the minimum (1.1–3.1).
Time sharing gives convexity; compact nested channel sets give continuity at Dmin, and mixing with a zero-rate decoder proves continuity at Dmax, including Dmin=Dmax (1.1–3.1).
Separate covering/Markov selections and independent bins meet every subset packing exponent; one code controls all bounded distortions, and concatenation gives the convex hull (1.1–4.1).
The converse Ui=(W,Y^-i) is Markov with Xi,Yi and bounds rate by the convex single-letter minimum; covering/Markov selection and bin decoding achieve it via decreasing tolerance (1.1–4.1).
Constant Y turns every WZ auxiliary into an ordinary reproduction channel via data processing; U=hatX proves the opposite infimum inequality (1.1,2.1).
At D=0 nonnegative Hamming distortion forces X=g(Y,U), so H(X|Y,U)=0; U=X attains H(X|Y), and the SW pair (H(X|Y),H(Y)) is feasible (1.1,2.1).
Identity auxiliaries Ui=Xi give zero distortions and turn each Berger–Tung subset information into H(XS|XSc), exactly the SW constraints (1.1,2.1).
Absolute integrability of f ln f makes the entropy a real number; conditional densities and an integrable outer entropy make the conditional definition invariant under null changes (1.1,2.1).
Gaussian normalization follows by substitution and Tonelli; finite messages, Borel decoder and nonnegative expected-square budgets define the operational code (1.1–3.1).
Borel maps use precisely own message and strict output past, with a singleton empty history at i=1; Gaussian kernels iterated finitely give the joint law (1.1,2.1).
Gaussian convolution has positive bounded density and a quadratic lower-log bound; KL proves marginal/subadditive/lower entropy bounds, while the conditional branch requires fresh noise independent of (X,S) (1.1–5.1).
Summing W1(y1|x)W2(y2|y1) gives a stochastic row and the factorization implies conditional independence X-Y1-Y2 (1.1,2.1).
Every W row is stochastic and finite distributivity makes the n-fold output law normalized (1.1,2.1).
Gaussian conditional covariance K-Kaa^TK/D gives the displayed residual variances and opposite-sign normalized correlation; N>0 keeps denominators positive (1.1–3.1).
Summing the causal product law backwards over outputs gives total mass one and the prescribed conditional channel row on each positive-probability history (1.1,2.1).
The deterministic encoder and finite channel block law define both receivers jointly, and their error union is a finite measurable event (1.1,2.1).
Separate deterministic functions of independent messages make each coordinate input pair independent; product channel rows normalize the complete code law (1.1,2.1).
At each step own messages and common past fix the inputs, then one stochastic row supplies the next output; finite recursion normalizes the feedback-code law (1.1,2.1).
Posterior finite entropy decomposes by the error indicator; the error branch has at most m-1 values and Jensen handles epsilon in (0,1), with epsilon=0,1 and m=1 explicit (1.1–4.1).
The strictly decreasing F has opposite endpoint signs and a unique interior root; a Gaussian startup/innovation code keeps that correlation, gives exponentially shrinking errors and respects powers via slack (1.1–7.1).
The finite IID source block, separate source encoders and product MAC law give a normalized joint law and a measurable reconstruction-error event (1.1,2.1).
An intermediate alpha solves a decreasing continuous equation; residual feedback plus a private Gaussian layer gives the dominant corner, and message-averaged quadratic power concentrates (1.1–7.1).
Block-Markov clouds carry the previous user-2 chunk; sender 1 learns that chunk by feedback and receiver backward likelihood tests yield the three strict information constraints, followed by closure (1.1–5.1).
Independent Gaussian codebooks achieve subset likelihood thresholds and expurgation enforces powers; Gaussian-entropy/Fano converse gives the same bounds, with zero-power users removed explicitly (1.1–6.1).
Conditional type counts times conditional codeword probabilities give each wrong-source exponent; channel dependence only on inputs cancels source terms in the entropy expansions (1.1–4.1).
Conditional variances and Cauchy–Schwarz give one rho in [0,1] for the converse; rho=0, the unique sum corner and rate-splitting corners plus time sharing achieve the union (1.1–9.1).
Source-indexed codebooks and a deterministic rounded public schedule make the true tuple typical; three positive packing gaps and finite averaging give reliable transmission (1.1–4.1).
Ignoring feedback gives achievability; conditional channel entropy and conditioning monotonicity bound each I(M;Yi|past) by C(W), and Fano gives the converse (1.1–3.1).
Superposition likelihood tests achieve the two bounds and omit singleton-message tests on axes; Ui=(M2,Y1past) and degradation give the converse and finite time sharing (1.1–5.1).
Three subset likelihood tests and independent conditional-product codebooks prove strict-rate achievability; the Fano/entropy converse uses a finite public time index Q (1.1–5.1).
At P1=P2=N=1 and rho=1/2, individual values are half ln(7/4); the chosen sum ln(7/4) exceeds half ln3 because 49>48 (1.1,2.1).
XOR is bijective in either input given the other; uniform independent inputs achieve the ln2 triangle, while diagonal correlated mixtures must be deterministic conditional on Q (1.1–3.1).
The three supported source pairs map injectively to 0,1,2; direct entropy optimization bounds every product-input output entropy by 1.5ln2 below ln3 (1.1–3.1).
Truncated likelihood selection and reference tests bound every wrong branch pattern; shell inputs enforce costs and final finite/Euclidean deterministic selection gives the NNC cut expression (1.1–13.1).
Degrading the higher-SNR observation gives a logarithmic entropy-difference bound; linear estimation and Gaussian entropy bounds give all genie expressions, including zero gains and s=t=0 (1.1–3.1).
Gaussian superposition false-own-message classes yield nine facets; explicit elimination plus one-common/one-unsplit fallback realizes seven facets with deterministic power selection and singleton streams (1.1–5.1).
The code permits arbitrary destination subsets and causal past-output encoders; error is a union only over required destination estimates, including no required estimates.
Independent fresh Gaussian noises and measurable causal node encoders define multicast with local knowledge of own source messages; zero inputs and absent source/destination sets are allowed.
Real and complex models use independent private messages and unit-variance Gaussian noises; SNR/INR are squared gains times powers and the normalization factor is 1/2 or 1.
KL to the everywhere-positive Gaussian with matching mean/covariance gives the entropy gap; zero KL is exactly equality of laws and the Gaussian conversely attains the bound (1.1,2.1).
The relay-only and full-feedback interfaces both choose inputs before current outputs; the first use has empty histories and singleton source messages are allowed.
Strong interference is the pair of single-letter inequalities for EVERY product input law, including deterministic input distributions; separate messages define independent codewords.
Terminal encoders use own messages and strict local output histories; a relay uses only its strict history and each terminal decoder knows its own message.
On f>1 the log is bounded; on f<=1 comparison to a Gaussian gives -f ln f<=q/e+f|ln q|, integrable by the second moment (1.1,2.1).
The two-real-dimensional Gaussian entropy bound and detK<= (trK/2)^2 give the complex bound, with equality exactly for Gaussian K=(sigma²/2)I (1.1,2.1).
Chebyshev for each positive-mass letter and finite union imply strong typicality; zero-probability letters occur with probability zero (1.1,2.1).
After deleting constants, all needed Gaussian log likelihoods are quadratic with finite fourth moments; slack positive powers and fixed zero-power inputs satisfy NNC, and closure/all-zero codes finish (1.1–7.1).
Directed information sums finite conditional KL terms; Y^0 is the empty tuple and the causal conditioning explicitly includes current Zi.
Under the conditional target law Chebyshev makes a triple typical; its bounded finite-support likelihood ratio changes to marginal-codebook law with exponent I(X;U|V), then independent trials cover (1.1–3.1).
The typical-word likelihood ratio is bounded by e^-n(I(U;Z|V)-eta); summing against a probability conditional law proves packing, also when V is constant (1.1,2.1).
Gaussian smoothing gives finite output entropy and the density-ratio identity I=h(Y)-h(Z); the variance entropy bound gives the scalar inequality, including zero-variance Gaussian inputs (1.1–3.1).
Three-stream subset likelihood tests achieve positive-rate subsets only; singleton streams create no false-message class and slack-power concentration selects one deterministic code (1.1–4.1).
Each positive-rate wrong subset has a likelihood threshold with its Gaussian variance information; finite-receiver error averaging and power concentration give deterministic codebooks, with zero-rate subsets omitted (1.1–4.1).
Block-Markov decode-forward has separate relay/destination packing exponents; fixed-block error vanishes and block count tends to infinity, while a singleton message gives R=0 (1.1–4.1).
Expanding I(X,Q;Y|Z) in both orders and using Q-(X,Z)-Y gives the inequality by the nonnegative I(Q;Y|Z) (1.1,2.1).
The interleaved entropy chain rule subtracts forward directed information from total information, leaving the reverse sum; its first term with empty histories is zero (1.1,2.1).
A hybrid-output telescoping sum changes one coordinate at a time; memorylessness permits the universal single-letter ordering at each conditional input law (1.1,2.1).
Finite positive-support likelihood values verify all NNC supplier hypotheses; constant reconstructions have zero penalty and a separate singleton-message code attains the origin (1.1–3.1).
The two relay cuts give the minimum; a test-channel chain-rule identity makes their difference I(Xr;Y)-I(Yr;hatYr|Xr,Y), so the compression condition selects the first bound (1.1–3.1).
For each terminal the cuts with and without relay give exactly its two bounds, and one multicast NNC code serves both destinations with own-message side information; the origin is separate (1.1–4.1).
Disintegrating finite/extended conditional KL chain rules gives both orderings without infinity subtraction; the Markov condition makes one term zero and nonnegativity proves data processing (1.1–3.1).
A product conditional channel makes Yi independent of all other inputs and prior outputs given Xi; chain rules and nonnegative I(Ypast;Yi) bound total information coordinatewise (1.1–2.1).
Genie/Fano expansions reduce each facet to Gaussian entropy estimates; explicit degradation couplings require only the displayed weak/mixed inequalities and handle vanishing gains (1.1–4.1).
Fano, causality and memorylessness bound two cuts, and conditional input concavity removes histories; a uniform time index gives the closed convexified outer region (1.1–3.1).
Conditional Gaussian maximum entropy bounds each cut; logdet tangent concavity and trace covariance give |A|P, then determinant identity picks min(|A|,|Ac|), with negative inner cuts compared to the separate zero tuple (1.1–5.1).
Strong gains simulate the unintended observation after decoding the own message; tensorization/power bounds give both MAC outer cuts, and one Gaussian ensemble achieves both receivers (1.1–4.1).
Conditional concavity removes time sharing in both relay outer cuts; giving the full output pair to the relay lets decode-forward attain their minimum, and compactness attains the maximum (1.1–2.1).
Universal strong inequalities lift to independent codeword blocks; Fano yields both MAC outer sums, and a common product-codebook ensemble achieves both receivers (1.1–4.1).
Explicit weak/mixed seven-facet comparisons lose at most each facet coefficient sum; axis clipping is proved separately, strong interference is exact, and zero powers are handled without dividing by gains (1.1–6.1).
The fixed gains satisfy both strong conditions; squaring them gives SNR 1,9/4 and INR 4,25/4, with active sum bound log2(6) (1.1,2.1).
The noiseless independent binary links achieve the unit square; the misapplied MAC sum formula is at most one bit under every time-sharing law and excludes (1,1) (1.1–2.1).
Both receivers see the same XOR, so both universal strong inequalities hold with equality; uniform inputs and time sharing realize the unit-sum triangle (1.1–2.1).
Two-universal collision expansion bounds the mean squared bin deviation; finite Cauchy–Schwarz and sum q²<=max q give the public-seed TV bound (1.1–4.1).
Every block entry is nonnegative and finite distributivity makes its output sum the product of n stochastic row sums, equal to one (1.1,2.1).
Independence follows from zero KL; conversely constant positive-output conditional mixtures average to PZ, and zero-output mass forces all supported conditional masses zero (1.1–2.1).
Positive joint atoms have PY>0, making finite-support information density bounded; variance sums give Chebyshev and a positive exponential tilt with negative derivative gives an exponential upper tail (1.1–4.1).
The mixture support lies in PZ^n; KL Jensen plus information-density truncation bounds expected divergence, and truncated-likelihood variance bounds expected TV (1.1–4.1).
Posterior-mixture null directions preserve PX while not lowering the wiretap objective, reducing to |U|<=|X|; entropy continuity and compactness attain the maximum (1.1–5.1).
Auxiliary random coding plus resolvability and message expurgation give maximal-error strong secrecy; a telescoping output-information difference and Fano bound every weak/average code by the same maximum (1.1–6.1).
Posterior degraded data processing makes the auxiliary objective at most the same-input X objective; U=X attains it and the general auxiliary maximum supplies the optimizer (1.1–3.1).
The entropy-chain objective bound is attained by identity release; the invertible binary-symmetric matrix forces a perfectly private release to have identical kernel rows (1.1–3.1).
Both observers recover all floor(sqrt n) message bits, giving leakage floor(sqrt n)ln2; its normalized value tends to zero while unnormalized leakage diverges (1.1–4.1).
Explicit erasure kernels make Eve BEC(1/2), so the information difference is h(p)/4; binary KL shows the maximum ln2/4 at p=1/2 and zero at p=0,1 (1.1–3.1).
'''.strip().splitlines()
# Substantive replacements. A missing key keeps the actual original disposition,
# with the item's independent mathematical review explaining why it survives.
overrides={}
def setc(i,c,e,status='checked'):
 overrides[(i,c)]={'case':c,'status':status,('evidence' if status=='checked' else 'reason'):e}
for i in [2,3,5]:setc(i,'empty','S is nonempty but C=S^c may be empty. Its product alphabet is a singleton, its marginal has mass one, and the conditional formula becomes the unconditional formula; the finite product/counting argument includes S=[k].')
setc(1,'empty','The positive-mass v index set cannot be empty because qV sums to one. Omitted zero-mass rows have empty position sets and contribute the explicitly proved factor 1; empty alphabets and n=0 are excluded.')
setc(4,'empty','The finite source law has a nonempty support and k>=2 through the source definition. Subsets in the union are nonempty, while C may be empty at S=[k]; its conditional surprisal is the full surprisal, so the same finite-variance argument applies.')
for i in range(8,19):
 if i in [10,14,18]:setc(i,'empty','The full changed/terminal subset has empty complement, represented by a singleton variable; its conditional entropy/information is unconditional. The displayed finite-subset argument includes this case, while a probability law still requires nonempty alphabets.')
# Definition and Gaussian batch: correct genuine admitted cases rather than retain blanket N/A.
for i in [20,21]:
 setc(i,'zero','Pj=0 is allowed: a nonnegative expected-square cost bounded by zero forces that sender input to be zero almost surely. N remains strictly positive, so the Gaussian channel law and error event remain defined.')
 setc(i,'one','A singleton message set Mj=1 has rate ln(1)/n=0, and n=1 is a valid code length. The finite-message/Borel-kernel construction remains normalized.')
 setc(i,'degenerate','A user message can be constant and a sender input can be identically zero; the independent channel noise still has N>0 and supplies the output density.')
 setc(i,'endpoints','The power domain is P1,P2>=0, with the zero-budget endpoints defined by the same cost inequality; N=0 is excluded by N>0.')
setc(21,'empty','At i=1, the Definition explicitly uses the singleton empty history R^0. Its Borel causal map is a function only of the own message, so kernel iteration starts normally.')
for c,e in {'zero':'A density may vanish on a measurable set; the entropy integrand is defined there by the continuous extension 0 ln0=0. A deterministic positive-dimensional X has no Lebesgue density and is excluded.', 'one':'The domain R^d includes the ordinary scalar case d=1; the finite-integral entropy formula and null-set invariance argument apply unchanged.', 'degenerate':'A point mass in positive Euclidean dimension has no Lebesgue density, and an infinite entropy integral is excluded by the finite-integral hypothesis.'}.items():setc(19,c,e,'not_applicable' if c=='degenerate' else 'checked')
for c,e in {'zero':'X may be identically zero or have zero coordinate variance. Then Y is a Gaussian translate, h(Y)=h(Z), and each coordinate upper bound is attained; N=0 is excluded.', 'one':'Dimension d=1 makes subadditivity an equality and leaves the scalar Gaussian maximum-entropy bound. No vector-coordinate independence is required.', 'degenerate':'Atomic or deterministic X is allowed; convolution with independent N>0 Gaussian noise gives an everywhere-positive density and finite entropy by the proved quadratic log bound.', 'endpoints':'The noise domain N>0 excludes its singular endpoint. Zero signal covariance is admitted and gives the exact pure-noise entropy lower bound.'}.items():setc(22,c,e)
for i in [23,24]:
 setc(i,'zero','Stochastic kernels may have zero entries; all normalization sums are finite and nonnegative, so no division by a zero entry is used.')
 setc(i,'one','All finite nonempty input/output alphabets may be singletons. A stochastic row then has its unique mass equal to one and the normalization proof still applies.')
 setc(i,'degenerate','Deterministic transition kernels are admitted: each row may have one entry equal to one and the rest zero. The product/factorization remains stochastic.')
setc(25,'zero','rho=0 is admitted, with D=N+P1+P2 and error covariance -P1P2/D; the normalized sign-reversed correlation becomes sqrt(P1P2)/sqrt((N+P1)(N+P2)). Powers and N must remain positive.')
setc(25,'one','rho=1 is excluded by [0,1); P1=P2=N=1 are ordinary positive parameter values and create no singular denominator. There is no one-element alphabet parameter.','not_applicable')
setc(25,'degenerate','Singular input covariance at rho=1 and zero user powers are excluded by rho<1 and Pj>0. At the admitted rho=0 the independent Gaussian pair still gives positive residual variances.','not_applicable')
setc(25,'endpoints','The included endpoint rho=0 is handled by the same rank-one covariance subtraction with positive D; the endpoint rho=1 is explicitly excluded and N>0 prevents zero residual-variance denominators.')
for i in [26,27,28,29,32,48,52,54]:
 setc(i,'one','Singleton source/message/input/output alphabets are permitted by the finite code model; a one-message decoder returns the sole value with zero error, and n=1 starts with an empty output history where causality is used.')
 setc(i,'zero','Zero-probability channel/source entries are permitted in the stochastic product law and require no division. A singleton message gives rate zero whenever a message-rate parameter is present.')
 setc(i,'degenerate','Deterministic channel rows and constant source/message variables are valid finite laws; composing the fixed encoder maps with those rows still gives a normalized law and defined decoder error.')
for i in [26,29,48,52,54]:setc(i,'empty','Every causal history at the first use is the empty tuple, a singleton argument of the encoder. This is an admitted history, not an empty probability alphabet; finite recursion begins with that history.')
setc(26,'iff-forward','The Definition explicitly states equivalence of the causal product law and its positive-probability history conditionals: division by the positive past mass recovers W at that history.')
setc(26,'iff-reverse','Conversely the uniform initial message law and each stated history conditional multiply by the finite probability chain rule to the displayed causal product; zero-mass histories contribute zero.')
for c,e in {'zero':'At epsilon=0 the posterior error indicator is zero almost surely, giving H(M|Y,S)=0; step 3.1 treats this separately without log(0).', 'degenerate':'A point-mass posterior or deterministic estimator is allowed; finite posterior entropies and the error partition still apply. The observation itself retains the conditional-density hypothesis.', 'endpoints':'Both epsilon=0 and epsilon=1 are explicit in 3.1; their binary entropies vanish. The one-message branch has entropy zero by 4.1.'}.items():setc(30,c,e)
for i in [31,33]:
 setc(i,'zero','The Statement assumes P1,P2,N>0 and the claimed correlation is strictly interior, so zero powers/noise or rho=0 are outside this lemma; zero-power capacity is handled by the separate capacity theorem.','not_applicable')
 setc(i,'degenerate','The positive-power, positive-noise and interior-correlation hypotheses exclude a singular innovation covariance; the displayed residual variances remain strictly positive.','not_applicable')
 setc(i,'endpoints',('The auxiliary F is evaluated at r=0 and r=1 to establish the unique root inside (0,1); its rate corner is achieved by closing strict rates and raising temporary powers.' if i==31 else 'The claimed rho lies strictly between 0 and rho_star. The intermediate alpha is proved strictly positive and below 1-rho²; endpoint capacity points are supplied by other lemmas/closure, not asserted here.'))
for i in [35,37]:
 setc(i,'zero','Zero user powers are explicitly treated by removing that user; the union reduces to the positive-user single-user interval, or to the origin when both powers vanish. Zero rates use singleton messages.')
 setc(i,'degenerate','A zero-power user has input zero almost surely; the proof separately reduces to one user and includes the all-zero channel-input case while N>0 stays nonsingular.')
 setc(i,'endpoints',('Closing strict rate regions includes all three capacity faces, and zero-power endpoints are handled in the final case split.' if i==35 else 'rho=0 uses the no-feedback region; rho=rho_star uses the sum-corner construction; rho>rho_star, including rho=1, adds only rates contained in the sum-corner rectangle.'))
 setc(i,'one','Mj=1 is an admitted zero-rate sender; powers or N equal to one are nonsingular ordinary parameter values in the logarithmic formulas.')
for i in [34,36,38,39,40,41,43]:
 setc(i,'one','A constant finite auxiliary/time-sharing variable and singleton input/output alphabets are permitted; conditional information sums reduce to their unconditional or zero-information values under these choices.')
 setc(i,'degenerate','Deterministic finite laws and kernel zeros are allowed; information densities are evaluated on positive supports, with impossible candidates rejected, and finite entropy uses 0 ln0=0.')
 setc(i,'zero','Zero-mass symbols are omitted from conditional-information averages. Zero-information channels and zero message rates must be treated by singleton-message decoding rather than a strict positive-information threshold.')
setc(40,'endpoints','The proof explicitly omits cloud tests when R2=0 and satellite tests when R1=0, then takes closure to include all nonnegative capacity-region faces.')
setc(41,'endpoints','Capacity includes zero-rate axes and saturated subset-information faces. Positive-rate subset tests with closure prove those faces; the isolated proof completion explicitly omits tests for singleton-message subsets.')
for i in [42,44,81,82,83]:
 setc(i,'degenerate',('The example channel is deterministic: its transition row is a point mass. The exact finite-law calculation/explicit inverse decoder in the complete argument includes this degeneracy.' if i!=42 and i!=81 else 'The powers and channel gains are fixed positive numbers; the example does not quantify over zero-power or singular-noise instances.','not_applicable' if i in [42,81] else 'checked'))
for c in ['zero','one','endpoints']:setc(42,c,{'zero':'The region admits zero-rate coordinates, including the origin; these obey every displayed nonnegative information upper bound.', 'one':'P1=P2=N=1 are the actual prescribed values, and direct substitution gives half ln(7/4) and ln2.', 'endpoints':'The selected pair saturates both individual inequalities while its sum ln(7/4)<ln2. The full fixed-rho polygon also includes its zero-rate axis endpoints.'}[c])
setc(43,'endpoints','For Bernoulli p,q in [0,1], the finite entropy formulas remain valid at deterministic endpoints by 0 ln0=0; the exact capacity triangle includes (0,0),(ln2,0),(0,ln2).')
setc(44,'zero','The source atom (1,0) has mass zero and is excluded from the inverse table. All other three atoms have distinct sums, so the deterministic decoder has error exactly zero.')
setc(44,'one','The binary input alphabets and ternary output are fixed, while the product-input optimization includes p=1 or q=1 by entropy continuity. This is not a singleton-alphabet assertion.','not_applicable')
setc(44,'endpoints','The product-input entropy optimization explicitly invokes continuity at Bernoulli endpoints r=0,1/2; the boundary product laws do not exceed the interior maximum 3ln2/2.')
for i in [49,50]:
 setc(i,'zero','Zero gains or zero input power are permitted; the affected signal contribution vanishes and the independent unit-variance receiver noise remains nondegenerate.')
 setc(i,'one','Unit receiver-noise variance is a fixed normalization; node/user powers or gains equal to one are admitted ordinary values of the displayed channel equations.')
 setc(i,'degenerate','A constant zero input, vanishing channel gain, or constant message is admitted; no input-density hypothesis is imposed and the fresh receiver noises remain Gaussian.')
 setc(i,'endpoints','The nonnegative expected-square budget permits P=0, forcing that input to vanish almost surely. The formulas for SNR/INR and the channel equations have no division by P.')
setc(48,'empty','The destination set Dk may be empty; then that message has no required decoder and contributes no error event. Independently, the first causal history is the singleton empty tuple. Empty input/output alphabets remain excluded.')
setc(49,'empty','The finite source/destination subsets may be empty and a destination that is not a source has an explicitly singleton own-message variable; no missing message is modeled by an empty probability space.')
for i in [51,56]:
 setc(i,'one',('d=1 gives the scalar real maximum-entropy bound h<=1/2 ln(2 pi e K), and the KL proof still applies.' if i==51 else 'sigma²=1 is allowed and gives h(Z)<=ln(pi e); K remains positive definite. The real representation has fixed dimension two.'))
 setc(i,'nonempty-choice','The Statement expressly assumes AC and the Facts list A1; Gaussian-law and KL/entropy suppliers carry that assumption. The contract must retain it even though the final algebra only integrates the supplied Gaussian density.')
setc(51,'zero','The mean m may be zero and the density may vanish off its support; the Gaussian reference is positive everywhere and KL handles such zeros. A zero covariance eigenvalue is excluded by K positive definite.')
setc(56,'endpoints','Positive-definite K implies sigma²>0; a zero-variance atom is excluded. The determinant bound attains equality exactly at the isotropic Gaussian K=(sigma²/2)I, not at a singular covariance.')
for i in [53,57,60,61,66,67,68]:
 setc(i,'one','Singleton conditioning or input/output variables are admitted finite laws. Conditional-KL sums then reduce to the unconditional information or zero, and the finite chain-rule/counting proof stays valid.')
 setc(i,'zero','Zero-mass atoms contribute no conditional-KL term and are excluded from supported typical words; deterministic input/channel cases need no division by a zero probability.')
 setc(i,'degenerate','Constant finite variables and deterministic channel rows are admitted; the same support-restricted finite sums give zero entropies/information where the variable is determined.')
setc(53,'endpoints','The universal strong-regime inequalities are non-strict and include equality, for example identical receiver marginal channels. Product-input simplex vertices are included in the universal quantifier.')
setc(55,'one','The density argument is valid in scalar dimension d=1. The auxiliary cutoff M=max(1,||f||infinity) handles the threshold ||f||infinity=1 without a logarithmic singularity.')
setc(55,'degenerate','A positive-dimensional point mass has no Lebesgue density and is outside the hypotheses. Bounded densities supported on a strict subset are allowed, using the integrand convention at f=0.','not_applicable')
setc(55,'endpoints','The proof explicitly splits at the value f=1: the positive logarithmic part is bounded by f ln M and the negative part by q/e+f|ln q|; their common threshold contributes zero.')
setc(57,'endpoints','The tolerance is strictly positive; delta=0 is excluded since a nonrational law may have no exact empirical type. Positive-probability atoms arbitrarily near simplex boundaries still have a finite fixed-law Chebyshev constant.')
for c,e in {'empty':'Y^0 is explicitly the empty history, represented by a constant singleton random variable; its conditional information terms are well-defined. If the empty sequence is allowed, the displayed sums are empty and equal zero.', 'zero':'For n=0 the displayed sums, if extended, equal zero; for positive n any deterministic Xi or Yi makes its corresponding conditional-KL term zero. No zero-valued denominators are introduced.', 'one':'At n=1, I(X^1 to Y^1)=I(X1;Y1) and the causal version is I(X1;Y1|Z1), since Y^0 is constant.', 'degenerate':'If a whole sequence is deterministic, all directed-information terms with that sequence as an unconditioned variable vanish by the finite conditional-KL definition.'}.items():setc(59,c,e)
setc(62,'one','The fixed noise variance is one in both real and complex models. Gains or input variances equal to one give the ordinary ln(1+|a|²v) value and no exceptional denominator.')
setc(62,'endpoints','The boundary v=0 gives constant X, output a translated noise, and I(X;Y)=0; the claimed Gaussian equality expressly includes that degenerate input. Likewise a=0 gives zero information for every input.')
for i in [62,72,73,77,81]:setc(i,'nonempty-choice','AC is expressly carried by A1 and the invoked Gaussian/standard-Borel conditional-KL suppliers; preserving that assumption is required even though no new arbitrary family of witnesses is selected in the final displayed algebra.')
setc(67,'empty','The reverse directed-information term at i=1 has Y^0 and X^0 constant; its conditional information is zero. The telescoping chain expansion includes this initial empty history.')
setc(67,'endpoints','At n=1, the reverse sum is zero and the identity reduces to I(X1;Y1)=I(X1;Y1)+0. The complete interleaved chain proof includes this endpoint directly.')
for i in [65,70,71,75,78,79,83]:
 setc(i,'one','A singleton message set has rate zero and a decoder can return that unique message with error zero; singleton auxiliaries/input alphabets reduce the finite information sums to the corresponding constant-variable formulas.')
 setc(i,'degenerate','Deterministic channel/input laws are admitted finite models. Zero conditional information yields a zero-rate bound, and singleton message codes remain valid in that case.')
for i in [75,78,79]:setc(i,'zero','The finite input simplex includes zero coordinates and deterministic input laws. All entropy sums extend by 0 ln0=0; rates equal to zero are achieved by singleton message sets and satisfy the converse inequalities.')
for i in [72,73]:
 setc(i,'one','A sequence of length one or a singleton standard-Borel variable is allowed. The product/chain formula reduces to one term or zero information; the proof uses no positive-cardinality lower bound other than existence of a probability law.')
 setc(i,'degenerate','Constant or atomic standard-Borel random variables and infinite information values are permitted. The proof adds extended nonnegative KL quantities and never subtracts infinities.')
 setc(i,'endpoints','The information range is the extended interval [0,+infinity]. Zero information and +infinity are included by the conditional-KL chain rule and nonnegative order, so no infinity-minus-infinity expression is used.')
setc(73,'empty','The i=1 proof explicitly uses the empty past Y^0 with zero information. An n=0 extension gives zero on both sides by empty sums; no empty probability alphabet is required.')
setc(66,'iff-forward','The hypotheses explicitly say equivalently Q-(X,Z)-Y: equality of conditional channel rows outside null conditioning histories is the finite Markov conditional-independence property.')
setc(66,'iff-reverse','Conversely the finite Markov condition gives P(Y|X,Z,Q)=P(Y|X,Z) on positive-probability conditioning atoms, so the channel law depends on Q only through (X,Z), as used to set I(Q;Y|X,Z)=0.')
for i in [76,77]:setc(i,'one','A unit power or unit noise is permitted by the Gaussian formula; singleton source-message sets give zero rates. No determinant/logarithm denominator vanishes because observation noise covariance is identity.')
setc(76,'empty','Admissible cuts have A intersect S nonempty and Ac intersect D nonempty, so both cut sides have positive size. A vacuous source/destination requirement imposes no such cut and no cutwise claim.','not_applicable')
setc(77,'zero','Vanishing gains are explicitly split in 3.1: h21=0 forces h22=0 and R2=0, with reflected cases analogous. Zero-power inputs are allowed by the Gaussian MAC supplier, whose singleton streams create no threshold test.')
setc(81,'zero','The fixed-parameter region includes zero-rate axes and the origin; all listed information upper bounds are nonnegative and singleton messages realize the origin.')
setc(81,'one','Unit P1,P2 and h11 are actual prescribed parameters. The first individual bound evaluates exactly to log2(2)=1 bit per use.')
setc(81,'endpoints','The exact polygon includes the individual-rate faces R1=1 and R2=log2(13/4), and its active sum face is log2(6), smaller than log2(19/2).')
setc(82,'endpoints','The capacity square includes the corner (1,1), achieved by uncoded noiseless links, whereas every point in the misapplied union satisfies sum rate at most one. The discrepancy persists after closure.')
setc(83,'endpoints','The triangle has vertices (0,0),(1,0),(0,1); uniform inputs and time sharing explicitly achieve them and the full closed convex hull.')
for i in [84,85,87,88,89,90,91,92,93,94]:
 if i in [85,87,88]:setc(i,'empty','The product runs over positive blocklength n>=1; the underlying stochastic law has nonempty support. Zero-probability letters are omitted, not treated as an empty probability alphabet.','not_applicable')
 if i in [89,91]:setc(i,'endpoints','The maximization includes boundary input laws with zero coordinates and deterministic simplex vertices; entropy extends continuously by 0 ln0=0, so compactness/auxiliary reduction includes the boundary.')
setc(92,'endpoints','The sensitive-channel noise is fixed at 1/10, but the release-kernel simplex includes deterministic identity release (attaining equality) and constant release (zero utility/leakage); the proof applies to both endpoints.')
setc(93,'iff-forward','The channel description W=1 exactly when y=z=x is a definition of a deterministic stochastic row. The mathematical conclusion is a weak-but-not-strong example and a one-way implication strong implies weak, not a biconditional.','not_applicable')
setc(93,'iff-reverse','The words exactly when specify which channel entries equal one. They do not assert weak secrecy iff strong secrecy; the computed divergent leakage explicitly refutes the reverse implication.','not_applicable')
# Exact capacity-region characterizations have both necessity and sufficiency directions.
for i in [35,37,39,40,41,43,77,78,79,81,83,90,91,94]:
 setc(i,'iff-forward','Necessity in the asserted exact capacity characterization is proved by the converse calculation. '+notes[i])
 setc(i,'iff-reverse','Sufficiency in the asserted exact capacity characterization follows from its actual code construction/supplier and closure, including singleton-message cases. '+notes[i])
for i in [42,44,81,82,83]:
 if i in [42,81]:setc(i,'degenerate','The powers and channel gains are fixed positive numbers; this example makes no zero-power or singular-noise assertion. Its rate region can still have zero coordinates, addressed separately.','not_applicable')
 else:setc(i,'degenerate','The example channel is deterministic: each transition row is a point mass. The finite entropy calculation and explicit decoding construction include this admitted degeneracy.')
