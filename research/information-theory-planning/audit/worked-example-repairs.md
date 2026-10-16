# Exact worked calculations and counterexamples

These are local mathematical developments for B-page proposals. Bits are used in binary/quantum formulas below, nats only where stated. Their logical suppliers remain the explicit A-page theorems; no B page supplies an A page.

## Information and testing

For P=delta_0,Q=(epsilon,1-epsilon), 0<epsilon<1, D(P||Q)=-ln epsilon but D(Q||P)=infinity. Disjoint point masses have both directions infinite. For the reference-kernel witness, use X=Y={0,1}, Q_Y=delta_0,P_Y=delta_1, P_X|Y=delta_0. Two versions Q_X|0=delta_0, Q_X|1=delta_0 or delta_1 agree Q_Y-a.e., while conditional reference KL under P is respectively zero or infinity.

A fair bit has self-information ln2; uniform[0,1] has infinite self-information but differential entropy zero. A nonsingular jointly standard Gaussian pair with correlation r has MI=-ln(1-r²)/2, by subtracting its finite Gaussian joint entropy from the marginal entropies. At |r|=1 its joint law lies on a product-null graph and MI is infinite.

For Bernoulli(3/4) versus Bernoulli(1/4), direct substitution gives D_(1/2)=ln(4/3), D_1=(ln3)/2, D_2=ln(7/3), D_0=0,D_infinity=ln3. For disjoint point masses the defining sum is zero for alpha<1 and infinite for alpha>1, so all positive-order divergences are infinite; omitting the infinite support contribution at alpha>1 would incorrectly produce a logarithm of an empty zero sum and a negative infinite divergence.

For P=(3/4,1/4),Q=(1/4,3/4), likelihood ratios are 3 and 1/3. Fill the first atom before the second: beta_alpha=alpha/3 on [0,3/4] and 3alpha-2 on [3/4,1]. This proves the stated piecewise-linear test curve and its tie randomization exactly.

## Secrecy and privacy

BEC(.25) followed by independent extra erasure probability1/3 gives Eve BEC(.5). I(X;Y)=.75h(p), I(X;Z)=.5h(p), so degraded secrecy capacity is .25 bits at p=.5. Weak/strong separation is explicit: M_n is n independent fair bits, Z reveals its first floor(sqrt n) bits. Leakage is floor(sqrt n), whose normalization by n vanishes while leakage diverges.

For fair Y, X=Y xor Bernoulli(.1) and lambda=.5, optimize J=I(Y;Z)-.5I(X;Z). Markov X-Y-Z gives I(Y;Z)-I(X;Z)=I(Y;Z|X)<=H(Y|X)=h(.1); also I(Y;Z)<=1. Hence J<=.5+.5h(.1), attained by Z=Y and Z=1-Y. Constant Z gives zero. This globally solves the binary-kernel optimization, rather than merely comparing candidate parameters.

## Finite quantum calculations

A qubit spectrum(p,1-p) has entropy h(p), hence pure zero and maximally mixed one bit. Orthogonal pure states have zero individual entropy and mixture spectrum p, so chi=H(p), attained by their basis measurement. For rho=|+><+|,sigma=I/2, QRE is ln2 nats; computational-basis dephasing sends both to I/2 and QRE zero. Orthogonal incompatible supports such as |0><0| versus |1><1| give QRE infinity.

For pure ABC, Schmidt spectra give S(AB)=S(C),S(BC)=S(A),S(ABC)=0 and S(B)=S(AC); SSA reduces exactly to subadditivity S(A)+S(C)>=S(AC). A qubit IID source diag(p,1-p) has Schumacher rate h(p) qubits/symbol. For equiprobable pure states with overlap c, their mixture has characteristic polynomial z²-z+(1-|c|²)/4, hence eigenvalues (1±|c|)/2 and chi=h((1+|c|)/2). A fixed X-basis measurement on equiprobable |0>,|1> gives independent fair outputs, MI0, despite chi1; a fixed POVM need not attain the bound.

Here is a literal counterexample to deducing QRE DPI from metric inequalities alone, without channel structure. Restrict to diagonal binary states p=sin²theta, theta in [a,pi/4], a=pi/12, and map p to sin²(theta-a). Root fidelity is cos(theta-phi), so it is preserved for every pair. Event-TV/halved trace distance is |p-q|; the map derivative in p is sin(2(theta-a))/sin(2theta)<=1, so this metric contracts too. The interior input p=sin²(2a)=1/4 and q=sin²a have finite KL, while their images are sin²a>0 and zero, giving infinite KL. The map is nonlinear on a restricted state family and is not asserted CPTP. This proves precisely that the two metric inequalities alone do not supply QRE DPI; the actual CPTP theorem still needs its operator proof.

For d=2 erasure, Q=max(0,1-2epsilon), unassisted C=1-epsilon, and EA C=2(1-epsilon) bits/use. At epsilon0 these are1,1,2; at epsilon1/2 they are0,.5,1; at epsilon1 all zero. This corrects the old doubled C/EA numbers.

For amplitude damping gamma in [0,1/2], Kraus matrices are diag(1,sqrt(1-gamma)) and sqrt(gamma)|0><1|. Its complement is amplitude damping parameter1-gamma up to basis identification. Damping by delta=(1-2gamma)/(1-gamma) after Bob's output gives complement, since gamma+delta-gamma delta=1-gamma. Thus it is degradable. For input diag(1-p,p), Ic=h((1-gamma)p)-h(gamma p). Phase covariance makes Ic invariant under rho->ZrhoZ; degradable concavity makes dephasing unable to reduce it. Therefore the capacity maximization reduces exactly to max_(0<=p<=1) of this continuous one-dimensional expression. No unproved maximizer p=1/2 is asserted.

QKD block-diagonal accept/abort flags make trace norm additive across branches, so weighted secrecy=(1-p_abort)delta. If Alice and Bob receive independent fair bits while Eve is independent, Alice secrecy is perfect but disagreement probability1/2. This explicitly separates correctness from secrecy.

## Point-to-point channels and finite criteria

For BSC(p), I(X;Y)=H(Y)-h(p)<=1-h(p), with equality at fair input; BEC(e) reveals its fair input with probability1-e and otherwise conveys zero, giving C=1-e. One real AWGN use at P3,noise variance1 has .5ln4 nats=1 bit. Parallel noise variances(1,4,9),total power4 give waterline T=4.5, allocations(3.5,.5,0), and C=.5ln(4.5*1.125) nats.

One use of a noiseless binary channel with M3 has optimal average error1/3 and optimal maximal error1/2 when randomized decoders are allowed. Sum of three successes is <=2, so average error>=1/3. If every message success were>.5, each would need an output whose decoder probability is>.5; three messages and two outputs force two probabilities>.5 in one decoder column, impossible. Assign two messages to output0, split its decoding probability equally, and assign the third to output1: maximal error1/2, average1/3. A deterministic decoder instead has maximal error1. At n1 feedback has no past and changes none of these facts.

A small-average-error code need not itself have small maximal error: on the fixed noiseless binary channel at blocklength n, assign 2^n+1 messages to all 2^n words with one collision and choose one colliding message as decoder winner. Average error=1/(2^n+1)->0 while one message error=1. The ensemble concentrated on this code has the same small expected average error. Expurgation is therefore a separate required step.

For one-use BSC(.1) and M2, the DT expectation is .9*(.5/1.8)+.1= .35 exactly. For n-use BSC(p),0<p<.5, uniform auxiliary output gives log likelihood (n-K)ln(2(1-p))+K ln(2p). Under the channel K~Bin(n,p), under the auxiliary K~Bin(n,.5). The optimal acceptance test accepts small K: alpha=Pr_p(K<k)+theta Pr_p(K=k), beta=Pr_(1/2)(K<k)+theta Pr_(1/2)(K=k),0<=theta<=1. This gives the exact randomized binomial meta-converse tail.

The nonattainment example concerns the single-letter information supremum under exact moment constraints: AWGN unit noise, P>0,s>3P², E X=0,E X²=P,E X⁴=s. Set T=s/3-P²>0. For small epsilon>0 use a mixture of centered Gaussians with variances v1=P-sqrt(T epsilon/(1-epsilon)),v2=P+sqrt(T(1-epsilon)/epsilon), weights1-epsilon,epsilon. These are positive for small epsilon and have exactly the requested moments. Output entropy concavity and the Gaussian upper bound squeeze their MI to .5ln(1+P). If equality were attained, output Gaussian maximal-entropy equality and characteristic-function uniqueness force the input to be N(0,P), contradicting its fourth moment. This proves nonattainment of this information optimization; no extra operational fourth-moment coding theorem is inferred.

## Separation, distributed coding and network examples

Fair Bernoulli source, BSC(.1),rho2 have source entropy1 and channel C=1-h(.1). Since h(.1)<.49 (certifiable by the same rational log series as the DSBS calculation), C>.51. Thus source rate1.01 and channel rate.51 satisfy1<1.01<2*.51 and .51<C. For fair Hamming source,rho1 and BSC(p), equation R(D)=C gives h(D)=h(p), hence D=p on [0,.5].

An explicit finite/asymptotic scope witness is source Bernoulli(.1), BSC(.1),rho1: h(.1)<1-h(.1), so asymptotic vanishing block error is achievable. In one use, all channel transitions and both source probabilities are positive; MAP comparison gives minimal error .1, including its tie at output1. Thus the asymptotic theorem does not assert a zero-error one-use code. This is a scope counterexample, not an assertion that unrestricted finite-block encoder factorizations cannot implement a joint map.

Two-source corner rates follow from chain H12=H1+H2|1=H2+H1|2. For fair X1,X2=X1 xor Bernoulli(p), the exact constraints are Rj>=h(p), R1+R2>=1+h(p), correcting the old sum1. Independent bins are essential to the collision proof: X1=X2 a fair n-bit word, both encoders output the same first ceil(.6n) bits. Their rates satisfy all strict Slepian–Wolf inequalities, but identical binning leaves n-ceil(.6n) unknown fair bits, success probability2^[-n+ceil(.6n)]->0.

For the BT binary example, U1 xor U2 is the parity of three independent Bernoulli(.1) noises and has crossover [1-(.8)^3]/2=.244. Conditional test-channel entropy H(Uj|Xj)=h(.1), H(Uj|Uother)=h(.244), H(U1,U2)=1+h(.244), giving the displayed individual and sum bounds; Xhat_j=Uj has MSE/Hamming error.1.

For the binary adder MAC, deterministic public equal time-sharing between only-user1 fair and only-user2 fair gives(.5,.5). A binary physically degraded BC can use U fair,X=U xor Bernoulli(.1),Y1=X xor Bernoulli(.1),Y2=Y1 xor Bernoulli(.1), all noises independent. The valid superposition pair is R1=h(.18)-h(.1),R2=1-h(.244). Arbitrarily correlated simultaneous private-message inputs are invalid: X1=X2 a fair bit has joint masses(00),(11) each.5, whereas independent private-message deterministic no-feedback encoders force product marginals at each fixed time.

For equal feedback-MAC SNR1 each, rho=.3 permits the symmetric point R1=R2=(1/4)log2(18/5). Its sum saturates .5log2(3.6), and its individual constraint holds since(1.91)^2>3.6. Without feedback sum<=.5log2(3), so this point exhibits strict feedback gain.

An exact correlated-source separation failure uses P(U1,U2) uniform on {(0,0),(0,1),(1,1)} and noiseless Y=X1+X2. Uncoded Xj=Uj makes Y0,1,2 identify the source pair, so lossless transmission succeeds with zero error. Source joint entropy is log2 3. For independent binary inputs Bernoulli(p),Bernoulli(q), H(X1+X2)<=1.5 bits: boundaries give<=1; at an interior entropy maximizer derivative difference is (p-q)ln(P0P2/P1²), nonzero unless p=q because P1>=2sqrt(P0P2). On p=q=t, the common derivative is ln((1-t)/t)-(1-2t)ln2, positive for t<.5 and negative for t>.5 (use ln((1+u)/(1-u))>=2u>u ln2). The unique maximum is p=q=.5, distribution(.25,.5,.25), entropy1.5. Since log2 3>1.5 (9>8), Slepian–Wolf sum rates and independent-input MAC sum rates cannot intersect, despite the zero-error joint code.

Relay example Y_r=X_s xor Bernoulli(.1),Y_d=X_s with no X_r effect has DF maximum1-h(.1) and cut-set maximum1, by binary entropy bounds and uniform X_s independent of X_r. The actual direct channel also has capacity1; the statement is specifically a DF-versus-cutset gap. The deterministic strong-IC example Y1=Y2=(X1,X2) has all strong inequalities equal and exact rectangle Rj<=1. Conversely, noiseless noninterfering Y1=X1,Y2=X2 violates strong hypotheses at uniform input and has actual rectangle[0,1]^2, whereas requiring both receivers to decode both messages would give only origin. Thus the strong-interference MAC-intersection formula cannot be extended unrestrictedly.

For a four-node Gaussian cut, the old cut-RHS bound g_s=s/2+min(s,4-s)log2(2s)/2 gives g1=1,g2=3,g3=1.5+.5log2 6<3. These are cut right-side comparisons, not a simultaneous rate-vector deficit claim.
