# Sparse-gap undercoverage: complete proposed local proof

Initial proof proposal, subsequently integrated into the two live items after the parent confirmed the native writer drain. Exact preimages are archived in `research/R-owner-eb-credible-before/`. No page, manifest or live contract has been changed. Read in full: CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the four live carriers named below, and the full source's Theorem 3.1 and §9 in `/tmp/bcs-svvdv-2015-v5.txt` (source PDF `/tmp/bcs-svvdv-2015-v5.pdf`). No hashes or certification were performed. After integration, explicit two-item proof-layout reported 2 items, 15 steps, 0 defects.

## Established necessary cap correction

The current counterexample fixes beta>0 while leaving the procedure's cap unspecified. The proof requires that the allowed regularity range eventually contains the explicitly constructed a_j below. For a **fixed cap A**, it suffices and is the natural regime to assume 0<beta<A. With the actual rho_j=2^j and minimal ceiling recursion, a_j decreases to beta asymptotically, so no beta+1/2<A requirement is needed. Alternatively preserve every beta>0 by explicitly choosing the procedure cap A>beta as part of the counterexample, or more generally assuming A_{n_j}>=a_j eventually and a lower-bracket theorem for those caps. Do not silently assert the fixed-cap result for beta>=A. The source's printed Theorem 3.1 also omits this cap issue; its §9 argument needs alpha_j to belong to the permitted interval.

The richest sound existential counterexample says: **for every beta>0 choose any fixed A>beta, and run the procedure with A_n=A**. This preserves all beta>0 in the approved claim while making the necessary procedure choice explicit.

## Exact sole non-elementary supplier needed

Use a one-sided part of `lem-empirical-bayes-maximizer-bracket-on-polished-tails` separately from its polished-tail upper bound:

For fixed p>=0, C>=1, A>0, every fixed theta_0 in ell2 with theta_{0,1}=0, and the stated measurable likelihood maximizer on [0,A], define

h_n(alpha)=1/(K_alpha log K_alpha) sum_i n^2 i^{1+2alpha} (log i) theta_{0,i}^2/(i^{1+2alpha+2p}+n)^2,

where K_alpha=n^{1/(1+2alpha+2p)}. Set tau=1/(16 C^8) and underalpha_n=inf{alpha in [0,A]: h_n(alpha)>=tau}, with inf empty=A. Then P_theta(hatalpha_n>=underalpha_n)->1. **No polished-tail assumption** may be imposed on this interface. Pointwise-in-truth convergence is enough here; uniform-in-ell2 convergence is not consumed.

The remaining argument below is complete without score-process or uniform-noise suppliers. In particular coordinatewise monotonicity controls the entire noise process above a_j.

## Proposed replacement mathematical body for the counterexample

Use the given inverse Gaussian sequence procedure, assume AC as inherited there, fix beta>0, p>=0, C>=1, gamma in (0,1), and choose a fixed cap A>beta. Assume C^{-2}i^{-2p}<=kappa_i^2<=C^2i^{-2p}. Take

0<M<=1/(1984 C^8).

Put s=1+2beta+2p, rho_j=2^j, n_1=2 and n_{j+1}=ceil((2 rho_{j+1}^2)^s n_j), and N_j=n_j^{1/s}. Define the same nonnegative sparse-gap truth as the current item: theta_{0,i}^2=0 if N_j/rho_j<i<=N_j or 2N_j<i<=rho_j N_j for some j, and M i^{-1-2beta} otherwise. Then theta_{0,1}=0, theta_0 in Theta_beta(M), and for every deterministic sequence of nonnegative inflation factors satisfying

L_{n_j}<=K_L sqrt(M) rho_j^{(1+2p)/(8+8beta+8p)}

eventually, for some finite K_L, coverage tends to zero along n_j. Values at finitely many n_j<3 are immaterial to the asymptotic procedure.

### Facts & Assumptions

**Given:** The model, parameters, cap, credibility level, sequence, truth and inflation bound above.

[F1] The coordinate posterior has mean n kappa_i X_i/(i^{1+2alpha}+n kappa_i^2) and variance v_i(alpha)=(i^{1+2alpha}+n kappa_i^2)^{-1}. `lem-gaussian-sequence-empirical-bayes-posterior-formula`.

[F2] The one-sided likelihood-maximizer bound in the exact interface above, valid for every fixed ell2 truth with first coordinate zero.

[F3] Theta_beta(M) is the ell2 hyperrectangle sup_i i^{1+2beta}theta_i^2<=M. `def-gaussian-sequence-hyperrectangle-class`.

[F4] Independent standard normal coordinates have E Z_i^2=1; nonnegative sums may be integrated termwise. These can use the procedure's normal moments and Tonelli suppliers; Markov's inequality is also proved where used below by integrating t*1{Y>t}<=Y.

### Counterexample

1.1 The recursion implies N_{j+1}>=2 rho_{j+1}^2 N_j. Earlier zero gaps end before N_j and later gaps begin beyond 2N_j: the previous last endpoint is rho_{j-1}N_{j-1}<=N_j/(2rho_j)<N_j, while the next first endpoint is N_{j+1}/rho_{j+1}>=2rho_{j+1}N_j>2N_j. Consequently theta_{0,i}^2=M i^{-1-2beta} on N_j<i<=2N_j. Every coordinate is either zero or this power-law value, so sum_i theta_{0,i}^2<=M(1+1/(2beta)) and [F3] holds. Also 1<N_1=2^{1/s}<2=rho_1, so the first gap contains coordinate 1. [F3, given, algebra]

1.2 Write delta_j=s log(rho_j)/(4 log n_j), a_j=beta+delta_j, t_j=1+2a_j+2p=s+2delta_j, and d=1+2p. Iterating the recursion gives log n_j>=log2+s(log2)(j^2+2j-3) for j>=2, hence delta_j->0. Thus eventually 0<delta_j<=1/4, a_j<A, N_j/rho_j>=2 and N_j>=2. In subsequent steps restrict to these j. Put T=s+1/2; then s<t_j<=T and n_j^{delta_j}=rho_j^{s/4}. [given, algebra]

2.1 For x>=2 and q>=2, divide i>x into dyadic intervals (2^l x,2^{l+1}x]. Each contains at most 3*2^l x integers, and log i<=(l+2)log x. Therefore sum_{i>x}i^{-q}log i<=3x^{1-q}log x sum_{l>=0}(l+2)2^{-l(q-1)}<=18x^{1-q}log x, since sum_{l>=0}(l+2)2^{-l}=6. [algebra]

2.2 Fix n=n_j and first take 0<=alpha<=beta. Write t=1+2alpha+2p, K=n^{1/t}, and q=2+2alpha+4p+2beta>=2. In h_n, bound (i^t+n)^2 below by n^2 for i<=K and by i^{2t} for i>K. Using theta_{0,i}^2<=M i^{-1-2beta}, the first part is at most M because i^{2alpha-2beta}<=1 and sum_{i<=K}log i<=K log K. The tail is at most 18M n^2 K^{-q}=18M K^{2alpha-2beta}<=18M by step 2.1. Thus h_n(alpha)<=19M uniformly for 0<=alpha<=beta. [step 1.1, step 2.1, algebra]

2.3 Now take beta<alpha<=a_j, set delta=alpha-beta, t=s+2delta, K=n^{1/t}, N=N_j and rho=rho_j. The zero gaps split h_n into three parts from i<=N/rho, N<i<=2N and i>rho N. For the first part H_1, the denominator bound n^2 gives H_1<=M(log N/log K)(N/rho)^{1+2delta}/K. Here log N/log K=t/s<=T/s, and N^{1+2delta}/K=n^{2delta(t+1)/(st)}. Since delta<=delta_j and (t+1)/t<=(s+1)/s, this last quantity is at most rho^{(s+1)/(2s)}. Hence H_1<=M(T/s)rho^{-(s-1)/(2s)}. [step 1.1, step 1.2, algebra]

2.4 For the middle part H_2, use (i^t+n)^2>=i^{2t}, log i<=log(2N), and at most 2N indices to obtain H_2<=2M(log(2N)/log K)n^2 N^{1-2s-2delta}/K. Since log(2N)/log K<=2T/s and n^2 N^{1-2s-2delta}/K=n^{-2delta(t-1)/(st)}<=1, this gives H_2<=4M T/s. [step 1.2, algebra]

2.5 For the last part H_3 put q=2s+2delta>=2 and use step 2.1 with x=rho N. Then H_3<=18M(log(rho N)/log K)n^2(rho N)^{1-q}/K. By delta_j<=1/4, log rho/log N=4delta_j<=1, so the logarithm ratio is at most 2T/s. Also n^2 N^{1-q}/K=n^{-2delta(t-1)/(st)}<=1, and rho^{1-q}<=rho^{1-2s}. Thus H_3<=36M(T/s)rho^{1-2s}. Combining steps 2.2--2.5 and T/s<3/2 gives sup_{0<=alpha<=a_j}h_n(alpha)<=max(19,41T/s)M<=62M<=1/(32C^8)<tau. Therefore underalpha_{n_j}>=a_j, and [F2] implies P(E_j)->1 for E_j={hatalpha_{n_j}>=a_j}. [F2, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4, algebra]

3.1 For fixed alpha define B_i(alpha)=i^{1+2alpha}theta_{0,i}/(i^{1+2alpha}+n kappa_i^2) and W_i(alpha)=sqrt(n)kappa_i Z_i/(i^{1+2alpha}+n kappa_i^2), so the posterior-mean error equals -B(alpha)+W(alpha). If alpha>=a_j>beta and N_j<i<=2N_j, then i^{1+2alpha+2p}>=N_j^s=n and n kappa_i^2/i^{1+2alpha}<=C^2. There are at least N_j/2 integers in this block, each with theta_{0,i}^2>=M(2N_j)^{-1-2beta}. Consequently, uniformly for alpha>=a_j,

||B(alpha)||^2>=b^2 M N_j^{-2beta}, where b=2^{-1-beta}/(1+C^2)>0.

[step 1.1, step 1.2, F1, algebra]

3.2 Put R_j=n_j^{-a_j/t_j} and D=C^2(2+2^{2beta+1/2}/(2beta)). At alpha=a_j, with K=n_j^{1/t_j}>=2, the variance bound v_i<=C^2 i^{2p}/(i^{t_j}+n_j) gives sum_{i<=K}v_i<=2C^2 K^{-2a_j}. For the tail, sum_{i>K}v_i<=sum_{i>K}i^{-1-2a_j}<=floor(K)^{-2a_j}/(2a_j)<=2^{2beta+1/2}K^{-2a_j}/(2beta). Thus V_j=sum_i v_i(a_j)<=D R_j^2. Each v_i(alpha) decreases in alpha, so the posterior expected squared centered norm is at most V_j for every alpha>=a_j. If Y is this squared norm, t P(Y>t)<=E Y implies that its (1-gamma)-quantile is at most V_j/gamma. Therefore sup_{alpha>=a_j} r_{n_j,gamma}(alpha)<=sqrt(D/gamma)R_j. [F1, F4, step 1.2, algebra]

3.3 For each realization of the normal coordinates and every alpha>=a_j, |W_i(alpha)|<=|W_i(a_j)| for every i. Thus sup_{alpha>=a_j}||W(alpha)||<=||W(a_j)||. Moreover E||W(a_j)||^2=sum_i n_j kappa_i^2/(i^{1+2a_j}+n_j kappa_i^2)^2<=sum_i v_i(a_j)<=D R_j^2. In particular, P{sup_{alpha>=a_j}||W(alpha)||>b sqrt(M)N_j^{-beta}/2}<=4D R_j^2/(b^2 M N_j^{-2beta}). [F4, step 3.2, algebra]

4.1 Direct subtraction of exponents, and n_j^{delta_j}=rho_j^{s/4}, give R_j/N_j^{-beta}=rho_j^{-d/(4t_j)}. Let e=d/(4(s+1)) and eta=d/(8(s+1)(s+1/2))>0. Since t_j<=s+1/2, d/(4t_j)-e>=eta. The given inflation condition and step 3.2 yield sup_{alpha>=a_j}L_{n_j}r_{n_j,gamma}(alpha)/(sqrt(M)N_j^{-beta})<=K_L sqrt(D/gamma)rho_j^{-eta}->0. Also step 3.3's probability bound is at most (4D/(b^2 M))rho_j^{-d/(2T)}->0. [given, step 1.2, step 3.2, step 3.3, algebra]

4.2 On E_j the selected regularity is positive and at least a_j. If the credible ball covers theta_0, the triangle inequality gives ||B(hatalpha)||<=L_{n_j}r_{n_j,gamma}(hatalpha)+||W(hatalpha)||. By step 3.1 the left side is at least b sqrt(M)N_j^{-beta}; by step 4.1 the first term is strictly smaller than b sqrt(M)N_j^{-beta}/2 eventually, and the second exceeds that same half-threshold with probability tending to zero. Thus coverage is at most P(E_j^c)+o(1)->0. This fixed truth lies in Theta_beta(M), so uniform nonvanishing coverage on the entire hyperrectangle is false in the stated regime. [step 2.5, step 3.1, step 4.1] QED

## Necessary consumer adjustment

The sparse-gap example `ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered` can retain its deterministic construction and membership argument, add that the procedure is run with any fixed A>beta, gamma in (0,1), and M in the explicit small range above, then replace its escalation disclaimers with the proved coverage conclusion. Its verification should cite the repaired counterexample for the final coverage inference. Parent owns full consumer closure and metadata.

## Technical notes for integration

- Use a valid counterexample heading (`## Statement refuted`, `## Counterexample`) if adopting the schema's convention; current carrier uses `## Statement` plus escalation prose.
- The proof's formulas here are review text, not claimed renderer-ready syntax. Convert inequalities and display labels to standard KaTeX and keep each numbered argument paragraph intact when integrating.
- No new stochastic-process supplier is necessary beyond the one-sided bracket. Dyadic estimate step 2.1 and posterior spread/noise estimates are fully local.
- Potential direct deps needed beyond current carrier's list: normal second moments and Tonelli, unless the local facts are imported through a proved directly consumed supplier with these properties in its statement. Parent owns dependency selection and contracts.

## Independent focused review of positive branch

Read actual `lem-empirical-bayes-radius-bias-and-noise-comparison` and `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails`. Checked the noise trace and maximum weight, retained-coordinate radius lower bound, low-frequency bias-to-h ratio, floor(N) polished-tail block, fixed-cap coverage deduction and growing-cap inflation exponents. No mathematical defect found, conditional on the sibling supplying the stated sharpened growing-cap rate comparison. The uniform tail-integral constant in comparison lemma step 1.1 uses (1+4A_n+2p)/N_{n,A_n}->0 when replacing floor(N) by N; this follows from its hypotheses, though its proof could say so explicitly. Parent owns acceptance, source quote refresh, and metadata.
