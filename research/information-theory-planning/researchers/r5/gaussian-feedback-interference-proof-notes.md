# Supplement: Ozarow feedback MAC, Gaussian NNC gap, and relay feedback

Status: source-derived local proof developments for the additional r5 audit obligations. This note does not edit canonical scaffold items, does not certify the independent audit, and does not classify these established theorems as open problems. ETW interference-channel proof work is allocated to r3 and is deliberately outside this note.

All rates and mutual informations below are in bits (base-two logarithms). Gaussian channel costs are expected block-average powers over the independent uniform messages and channel noises, as stated in each model. Closed capacity regions are closures of strict-rate achievability statements.

## 1. Two-user real AWGN MAC with noiseless output feedback

### 1.1 Operational model and exact region

The channel is `Y_i=g_1 X_{1i}+g_2 X_{2i}+Z_i`, where `Z_i` are iid `N(0,N_0)` and independent of the two independent uniform private messages `M_1,M_2`. Both transmitters observe noiseless causal output feedback `Y^{i-1}` before choosing their time-i symbols; deterministic encoders have the form `X_{ji}=f_{ji}(M_j,Y^{i-1})`. The receiver estimates both messages. Error is average joint message error. The cost is `E[sum_{i=1}^n X_{ji}^2]<=nP_j`, averaged over the uniform messages and channel noises, separately for j=1,2. There is no common message or preshared random variable.

Set `S_j=g_j^2P_j/N_0` and `C(s)=(1/2)log_2(1+s)`. The feedback capacity region is the union over `0<=rho<=1` of

`R_1<=C((1-rho^2)S_1)`, `R_2<=C((1-rho^2)S_2)`, `R_1+R_2<=C(S_1+S_2+2rho sqrt(S_1 S_2))`.

The parameter rho is the correlation coefficient of the two simultaneous effective channel inputs in the converse and in the linear feedback recursion below. It is created by common past output noise that both encoders recover from feedback; it is not preshared randomness.

### 1.2 Covariance/entropy converse

Normalize `N_0=1` and absorb each nonzero gain into the input: write `V_{ji}=g_jX_{ji}/sqrt(N_0)` and `Y_i=V_{1i}+V_{2i}+Z_i` with unit noise. Then `n^{-1}sum_i E V_{ji}^2<=S_j`. Fano’s inequality gives, for a sequence with average error `P_e->0`,

`nR_1<=I(M_1;Y^n|M_2)+n epsilon_n`, `nR_2<=I(M_2;Y^n|M_1)+n epsilon_n`, `n(R_1+R_2)<=I(M_1,M_2;Y^n)+n epsilon_n`,

where `epsilon_n->0`. For each time i let `v_{ji}=Var(V_{ji})`, `c_i=Cov(V_{1i},V_{2i})`, and `Vbar_j=n^{-1}sum_i v_{ji}`, `cbar=n^{-1}sum_i c_i`. Given `(M_2,Y^{i-1})`, `V_{2i}` is known. The conditional-variance bound from linear prediction by this known symbol is

`E Var(V_{1i}|M_2,Y^{i-1})<=E[(V_{1i}-E V_{1i}-(c_i/v_{2i})(V_{2i}-E V_{2i}))^2]=v_{1i}-c_i^2/v_{2i}`

when `v_{2i}>0`; if `v_{2i}=0`, then `c_i=0` and use `v_{1i}`. Since the current Gaussian noise is independent of messages and past outputs, Gaussian maximum entropy conditional on the past and Jensen give

`I(M_1;Y^n|M_2)<=sum_i C(v_{1i}-c_i^2/v_{2i})`.

Concavity of C and Cauchy–Schwarz yield

`n^{-1}I(M_1;Y^n|M_2)<=C(Vbar_1-n^{-1}sum_i c_i^2/v_{2i})<=C(Vbar_1-cbar^2/Vbar_2)`.

The symmetric argument gives `I(M_2;Y^n|M_1)/n<=C(Vbar_2-cbar^2/Vbar_1)`. For the sum, the entropy chain rule, conditioning-reduces-entropy, and the variance of the Gaussian-noise output give

`n^{-1}I(M_1,M_2;Y^n)<=n^{-1}sum_i C(v_{1i}+v_{2i}+2c_i)<=C(Vbar_1+Vbar_2+2cbar)`.

If `Vbar_1 Vbar_2>0`, define `rho=|cbar|/sqrt(Vbar_1 Vbar_2)<=1`; otherwise use rho=0. The first two bounds become `C((1-rho^2)Vbar_j)`. Replacing a negative `cbar` by `|cbar|` only enlarges the sum-rate right side. Since `Vbar_j<=S_j`, monotonicity of C gives all three claimed inequalities. Let n tend to infinity. This converse explicitly permits feedback-induced dependence between the users’ current inputs; product-input MAC converses do not apply.

### 1.3 Causal Gaussian feedback code at the sum-rate corner

For positive `S_1,S_2`, let `rho_*` be the unique root in `(0,1)` of

`C((1-rho_*^2)S_1)+C((1-rho_*^2)S_2)=C(S_1+S_2+2rho_*sqrt(S_1S_2))`.

Uniqueness follows because the left side strictly decreases from a value greater than the right side at rho=0 to zero at rho=1, while the right side strictly increases. Write `a=1-rho_*^2` and `D=1+S_1+S_2+2rho_*sqrt(S_1S_2)`. The defining equality is equivalently

`(1+aS_1)(1+aS_2)=D`.

Choose temporary powers `0<S'_j<S_j`; the construction below uses `S'_j` and its corresponding root `rho_*'`. At the end let `S'_j` increase to `S_j`. Normalize the channel to unit noise and effective inputs `V_j=g_jX_j/sqrt(N_0)`. Initially represent each message by a distinct midpoint `theta_j(m_j)` in `[-1,1]`, with nearest-neighbor separation `Delta_j=2/ceil(2^{nR_j})`. Use three startup channel symbols:

`(V_{1,-2},V_{2,-2})=(0,theta_2)`, `(V_{1,-1},V_{2,-1})=(theta_1,0)`, and `(V_{1,0},V_{2,0})=(0,0)`.

Encoder 1 subtracts its own known `theta_1` from `Y_{-1}` to learn `Z_{1,-1}`; encoder 2 subtracts its own known `theta_2` from `Y_{-2}` to learn `Z_{2,-2}`. After the zero-input symbol at time 0, both learn `Z_0=Y_0`. Define `U_1=Z_{1,-1}+lambda Z_0`, `U_2=Z_{2,-2}+lambda Z_0`, with `lambda^2=rho_*'/(1-rho_*')`. Then `Var(U_1)=Var(U_2)=1+lambda^2` and `Corr(U_1,U_2)=rho_*'`; each encoder knows its own U_j. The receiver is not assumed to know any startup noise.

At time 1 transmit

`V_{j1}=sqrt(S'_j/(1+lambda^2)) U_j`.

Write `Y_rec^{i-1}=(Y_1,...,Y_{i-1})` for the outputs of recursive symbols only. For i>=2 define the conditional innovation `E_{j,i-1}=V_{j,i-1}-E[V_{j,i-1}|Y_rec^{i-1}]` and its (deterministic) Gaussian variance `e_{j,i-1}=E[E_{j,i-1}^2]`. The recursion deliberately ignores the startup outputs in these conditional expectations; conditioning on them would reveal a discrete message point plus noise and would destroy the jointly Gaussian conditioning used below. The causal recursion is

`V_{1i}=sqrt(S'_1/e_{1,i-1}) E_{1,i-1}`, `V_{2i}=-sqrt(S'_2/e_{2,i-1}) E_{2,i-1}`.

Each sender can compute its own previous symbol, the public conditional-expectation function of the recursive feedback history, and the normalization; thus these are valid functions of its private message and past outputs. Joint Gaussian conditioning on `Y_rec^{i-1}` shows that the innovation covariance is deterministic, so `E[V_{ji}^2]=S'_j` at every recursive time and `(V_{1i},V_{2i},Y_i)` is independent of `Y_rec^{i-1}`. This independence claim is only for the recursive Gaussian history, not for the startup outputs containing the unknown message points.

Here is the covariance recurrence. If the preceding symbols have variances `S'_1,S'_2` and correlation rho, then the observation variance is `D_rho=1+S'_1+S'_2+2rho sqrt(S'_1S'_2)`. Conditioning on their sum plus unit Gaussian noise gives

`e_1=S'_1(1+S'_2(1-rho^2))/D_rho`, `e_2=S'_2(1+S'_1(1-rho^2))/D_rho`,

`e_{12}=sqrt(S'_1S'_2)(rho-(1-rho^2)sqrt(S'_1S'_2))/D_rho`.

The separate normalizations and the opposite sign at encoder 2 therefore produce next correlation

`rho_new=((1-rho^2)sqrt(S'_1S'_2)-rho)/sqrt((1+S'_1(1-rho^2))(1+S'_2(1-rho^2)))`.

At `rho=rho_*'`, the matching equation makes the denominator `sqrt(D_rho)`, and direct expansion gives `( (1-rho^2)sqrt(S'_1S'_2)-rho )^2=rho^2 D_rho`. The numerator is positive: let `r_0` solve `r_0=sqrt(S'_1S'_2)(1-r_0^2)`. At this point, putting `a=1-r_0^2`, the difference between the two sides of the product form of the matching equation is

`(1+aS'_1)(1+aS'_2) - (1+S'_1+S'_2+2r_0 sqrt(S'_1S'_2)) = r_0^2(1-S'_1-S'_2-2/a)<0`.

The matching function is strictly decreasing, so `rho_*'<r_0`; equivalently `(1-rho_*'^2)sqrt(S'_1S'_2)-rho_*'>0`. Thus `rho_new=rho_*'`. The correlation and both powers are maintained at every recursive time.

For `V_j` and `Y=V_1+V_2+Z` jointly Gaussian with these powers and correlation, `Var(Y)=D_rho` and `Var(Y|V_j)=1+S'_{3-j}(1-rho^2)`. The matching equation therefore implies

`I(V_j;Y)=1/2 log_2(D_rho/(1+S'_{3-j}(1-rho^2)))=C((1-rho^2)S'_j)=I(V_j;Y|V_{3-j})`.

Given `Y_rec^{i-1}`, `V_{ji}` is a nonzero scalar multiple of `U_j-E[U_j|Y_rec^{i-1}]`; it is one-to-one with U_j for that fixed history. Since `(V_{1i},V_{2i},Y_i)` is independent of the recursive past, writing `Y_rec^n=(Y_1,\ldots,Y_n)` for just the n recursive outputs gives

`I(U_j;Y_rec^n)=sum_i I(U_j;Y_i|Y_rec^{i-1})=n C((1-rho_*'^2)S'_j)`.

For jointly Gaussian variables this means `Var(U_j|Y_rec^n)=Var(U_j)2^{-2nC((1-rho_*'^2)S'_j)}`. The receiver forms `thetahat_1=Y_{-1}+lambda Y_0-E[U_1|Y_rec^n]` and `thetahat_2=Y_{-2}+lambda Y_0-E[U_2|Y_rec^n]`. Each estimation error is `U_j-E[U_j|Y_rec^n]`, hence zero-mean Gaussian with the displayed conditional variance. Nearest-midpoint decoding errs only when its absolute error is at least `Delta_j/2`; the Gaussian tail bound tends to zero doubly exponentially whenever `R_j<C((1-rho_*'^2)S'_j)`.

The recursive symbols cost exactly `S'_j` per use in expectation. Each sender’s startup message symbol has square at most one and the other two startup symbols are zero, so total normalized expected energy is at most `1+nS'_j`. The block has n+3 uses. Since `S'_j<S_j`, for all sufficiently large n this is at most `(n+3)S_j`; the normalized rates `nR_j/(n+3)` tend to R_j. Taking `S'_j` upward to `S_j` proves achievability of the sum-rate corner `(C((1-rho_*^2)S_1),C((1-rho_*^2)S_2))`, whose sum equals the sum constraint. The only shared randomness used in the code is the common channel noise `Z_0`, which both encoders learn through feedback after the startup transmission.

### 1.4 The full Ozarow region

For `rho>rho_*`, the sum bound is redundant because its right side exceeds the sum of the two individual bounds; each individual bound is no larger than at `rho_*`. Thus these rectangles add no rates beyond the `rho_*` region.

For `0<=rho<=rho_*`, both endpoints of the active sum-rate face are achievable by rate splitting. For the endpoint with user 1 at its individual bound, split its message into independent indices `(M_{10},M_{11})`. Generate length-n iid Gaussian cloud codewords `a^n(m_{10})` with power fraction `alpha P_1` and add them only on the n recursive symbols. Retain the three startup message-point transmissions from §1.3, without the `M_{10}` layer. For the feedback layer choose `lambda^2=rho_f/(1-rho_f)` in its startup noise combination, then scale the two first recursive symbols so their powers are `(1-alpha)P_1` and `P_2`; this seeds the required correlation `rho_f`. The startup noises have variance `N_0`, while the recursive effective channel noise has variance `N_0+g_1^2 alpha P_1`; this causes no mismatch because the recursion only requires the initial inputs to have the target covariance, and each subsequent observation contains a fresh iid effective Gaussian noise. On the recursive symbols user 1 sends its feedback-layer input plus `a_i(m_{10})`, while user 2 sends its causal feedback input. In the ensemble average over a uniformly selected `m_{10}` and random cloud codebook, `a_i(m_{10})+Z_i` is iid Gaussian and independent of the feedback-layer messages and past outputs, so it acts as channel noise of variance `N_0+g_1^2 alpha P_1`. The receiver first decodes the two feedback-layer indices using the §1.3 estimator, then subtracts their reconstructed causal inputs and decodes `M_{10}` from the remaining ordinary AWGN codeword. If `rho_f` is the matching feedback correlation for the effective SNRs `(1-alpha)S_1/(1+alpha S_1)` and `S_2/(1+alpha S_1)`, put `rho=sqrt(1-alpha)rho_f`. The feedback layer has rates bounded by its two individual Gaussian terms and saturates its sum term by §1.3. The resulting endpoint rates are

`R_1=C((1-rho^2)S_1)`, `R_2=C(S_1+S_2+2rho sqrt(S_1S_2))-C((1-rho^2)S_1)`.

Indeed the first rate is `C(alpha S_1)+C((1-rho_f^2)(1-alpha)S_1/(1+alpha S_1))=C((1-rho^2)S_1)`, and the sum is `C(alpha S_1)+C(((1-alpha)S_1+S_2+2rho_f sqrt((1-alpha)S_1S_2))/(1+alpha S_1))=C(S_1+S_2+2rho sqrt(S_1S_2))`. To meet the deterministic expected-power constraint after fixing the random cloud codebook, choose each layer's power with a fixed slack, then let that slack tend to zero after n grows. For fixed `alpha in (0,1)`, conditional on a particular cloud word `a`, the feedback encoders and channel are linear Gaussian maps of `a` and zero-mean startup/recursive noises. Thus the expected block energy of user j conditional on that word is `a^T K_j a+c_j`, with `K_j` positive semidefinite and no linear term: the startup midpoint grids are centered, their noises have mean zero, and the recursion uses only the centered startup innovations and recursive outputs. The three startup symbols add only an `O(1)` term. Under the iid Gaussian cloud ensemble, expected total energy is `O(n)`, so `tr(K_j)=O(n)` for fixed channel parameters and alpha. For `L=|M_{10}|` independent cloud words, the normalized message-averaged cost is their average quadratic form and

`Var((nL)^(-1) sum_{m=1}^L a(m)^T K_j a(m)) = 2 sigma^4 tr(K_j^2)/(n^2 L) <= 2 sigma^4 (tr K_j)^2/(n^2 L) = O(1/L)`,

where `sigma^2=alpha P_1`. Since `R_{10}` can be any positive rate below `C(alpha S_1)` for fixed `alpha>0`, L is exponential in n; both users' power costs therefore concentrate simultaneously below their budgets with the fixed slack. The ensemble average error tends to zero by the Gaussian feedback-code error calculation and the ordinary Gaussian code packing bound, so Markov's inequality makes the bad-error codebook event vanish. A codebook satisfying both power constraints and vanishing average error exists. At `alpha=0`, use the already-proved pure feedback corner. The endpoint `rho=0` is obtained as `alpha` increases to one and agrees with the usual Gaussian MAC successive-decoding corner. As alpha varies continuously from zero to one, rho varies continuously from rho_* to 0, so every endpoint is obtained. Splitting user 2 instead yields the other endpoint `(R_1,R_2)=(C(S_1+S_2+2rho sqrt(S_1S_2))-C((1-rho^2)S_2), C((1-rho^2)S_2))`.

For fixed rho<=rho_*, the sum constraint is active and these endpoints are the two ends of its boundary segment. A deterministic public time-sharing schedule between their codes attains every point of that segment; lowering either message rate attains the entire downward-closed pentagon. The converse of §1.2 gives no points outside the stated union. If either S_j=0, the formula follows by continuity and reduces to the single-user AWGN capacity region.

Source locator: El Gamal–Kim, arXiv:1001.3404v3, Interactive Communication, Lecture 18, Theorem 3 and proof, lecture pages 18–28 through 18–38. The lecture proves the symmetric recursion in detail and sketches the asymmetric extension; the covariance formulas and power-specific normalization above supply that extension directly.

## 2. Gaussian noisy-network-coding cut-dependent gap

### 2.1 Model and exact cut bounds

Consider the real AWGN network `Y^N=G X^N+Z^N`, where `Z^N~N(0,I)` has independent coordinates. Node k has an independent uniform message `M_k` at rate `R_k>=0`; every destination in a common nonempty set D must recover all node messages. Error is average block error over the message tuple and channel noise. The source model imposes, for every node k and every message `m_k`, `n^{-1}sum_i E[X_{ki}^2|M_k=m_k]<=P`, where the expectation includes the other messages, channel noise and the node's causal observation history. The article uses deterministic encoders; the random codebook and covering-index choices are fixed by the existence argument. There is no preshared common randomness. For a cut S with `S^c intersect D != empty`, write `Y(S^c)=G(S)X(S)+G'(S)X(S^c)+Z(S^c)`, where G(S) consists of output rows in `S^c` and input columns in S. The cut-set outer bound and the NNC inner bound admit the following exact comparisons (boundary rates are interpreted by closure):

`R(S)<=F_S + (1/2) min{|S|,|S^c|} log_2(2|S|)`,

`R(S)<F_S-|S|/2`,

where `F_S=(1/2)log_2 det(I+(P/2)G(S)G(S)^T)`.

Thus the exact derived additive difference between the displayed cut right sides is

`g_S=|S|/2 + (1/2)min{|S|,|S^c|}log_2(2|S|)`

bits per use. This is the exact cut-right-side difference for the unit-variance quantizer and covariance relaxation in the March 2010 arXiv v2 proof; it is not an exact general Gaussian-network capacity formula. The worst per-cut right-side difference satisfies

`max_{1<=s<=N-1} [s/2 + min(s,N-s)/2 log_2(2s)] <= (N/4)log_2(2N)`

for `N>3`. Here is the discrete maximization. For `s<=N/2`, the expression is `s/2 log_2(4s)`, an increasing function of s, and its value at `N/2` is the stated bound. For `s>=N/2`, set `f(s)=s/2+(N-s)/2 log_2(2s)`. Its second derivative is `-(1/s+N/s^2)/(2 ln 2)<0`; its derivative at `N/2` is `[1-log_2 N+1/ln 2]/2<0` for `N>=6`. Thus f decreases from `N/2` onward, and is bounded by `f(N/2)=(N/4)log_2(2N)`. The remaining integer cases are direct: for `N=4`, the values at `s=1,2,3` are `1,3,1.5+0.5log_2 6`; for `N=5`, those at `s=1,2,3,4` are `1,3,1.5+log_2 6,3.5`; each maximum is at most the claimed bound. This is a cut-RHS comparison only; the arXiv v2 article's Theorem 4 stated a stronger cut-dependent vector guarantee without proving vector selection in its displayed argument. The final 2011 journal version changes that theorem and supplies a different common-shift proof in §2.5 below.

### 2.2 Cut-set outer bound

For any joint input covariance K_S on the senders in S, `K_S` is positive semidefinite and `tr K_S<=|S|P`. Conditional on `X(S^c)`, subtract the known term `G'(S)X(S^c)`. Gaussian maximum entropy gives

`I(X(S);Y(S^c)|X(S^c)) <= (1/2)log_2 det(I+G(S)K_SG(S)^T)`.

The covariance inequality `K_S<=tr(K_S)I` follows by diagonalizing K_S: every eigenvalue is at most the sum of its nonnegative eigenvalues. Congruence by G(S) preserves the positive-semidefinite order, so determinant monotonicity yields

`det(I+G K_S G^T)<=det(I+|S|P GG^T)`.

Let m=|S^c| and q=|S|>=1. For every eigenvalue t>=0, `1+q t<=2q(1+t/2)`; hence

`(1/2)log det(I+|S|P GG^T) <= (1/2)log det(I+(P/2)GG^T)+(m/2)log_2(2q)`.

The determinant identity `det(I+AB)=det(I+BA)` rewrites the common term using `G^TG` instead of `GG^T`. Repeating the same argument in the |S|-dimensional input space bounds the extra term by `(|S|/2)log_2(2|S|)`. Taking the smaller of these two valid bounds proves the stated cut-set outer inequality with `min{|S|,|S^c|}`. The cut-set inequality itself follows from the usual Fano cut argument; feedback or internal correlation among inputs only enlarges the allowed joint K_S and is already covered by this optimization.

### 2.3 NNC inner bound with unit-variance Gaussian quantizers

Choose independent `X_k~N(0,P)` at all nodes and `Q` constant. At every node use `Yhat_k=Y_k+Zhat_k`, where the independent quantization noises `Zhat_k~N(0,1)` are independent of X^N and all channel noises. This is the local test-channel factorization `prod_k p(x_k)W(y^N|x^N)prod_k p(yhat_k|y_k)` required by Theorem 1; each node can form its own quantizer from its own output. The theorem’s NNC cut expression is

`R(S)<I(X(S);Yhat(S^c),Y_d|X(S^c))-I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d)`

for each nonempty S and destination `d in S^c intersect D`.

The first term is at least `I(X(S);Yhat(S^c)|X(S^c))`, since adjoining Y_d cannot decrease mutual information. Conditional on X(S^c), the vector `Yhat(S^c)` has signal `G(S)X(S)` and noise covariance `2I`; the input covariance is `P I`. The Gaussian entropy formula therefore gives exactly

`I(X(S);Yhat(S^c)|X(S^c))=(1/2)log_2 det(I+(P/2)G(S)G(S)^T)=F_S`.

For the penalty, local test-channel independence gives the Markov relation `(Yhat(S^c),Y_d) - (X^N,Y(S)) - Yhat(S)`. By the chain rule,

`I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d)<=I(Y(S);Yhat(S)|X^N)`.

Given X^N, the independent channel noises make `Y(S)` a translate of `|S|` independent unit Gaussians, and `Yhat(S)` adds another independent unit Gaussian in each coordinate. Thus

`I(Y(S);Yhat(S)|X^N)=(|S|/2)log_2(2)=|S|/2`.

Substitution in the NNC theorem proves the inner cut inequality `R(S)<F_S-|S|/2`. Comparing it with the outer inequality proves the displayed per-cut difference g_S exactly. This derivation includes the quantization penalty; dropping it would give an invalid stronger inner bound.

### 2.4 Continuous-alphabet coding bridge

The finite-alphabet NNC theorem alone is not a coding proof for Gaussian variables. Here is the approximation needed for the particular Gaussian input and local test channel above; the same construction works for any fixed `gamma>1` by using `Zhat_k~N(0,gamma-1)`. Fix a rate tuple strictly inside every displayed NNC cut inequality; since there are finitely many cuts and destinations, there is a positive minimum rate margin. Each continuous conditional mutual information is a conditional relative entropy; the finite-partition identity for relative entropy, together with conditional-expectation martingale convergence, lets us choose finite target partitions of `X^N`, `Y^N`, and every `Yhat_k=Y_k+Zhat_k` whose discrete conditional mutual informations approximate all the target Gaussian terms within that margin. Use bounded boxes plus overflow cells, so Gaussian tails make the overflow probabilities arbitrarily small. For each fixed finite target alphabet, the needed conditional entropies are finite and continuous in the joint cell probabilities; no mutual-information convergence is inferred from total-variation convergence on a growing alphabet. Choose the target partitions fine enough that the resulting finite-partition NNC expressions retain less than half the minimum rate margin.

Next truncate each Gaussian input to a large box, quantize it to a finite grid of bounded representatives, and multiply representatives by a factor just below one. This gives independent finite-valued inputs `X_k^m` with `E[(X_k^m)^2]<=P-delta_m` for some `delta_m>0`, while their laws converge to `N(0,P)` and their second moments converge to P. For each fixed target partition, the finite output-label probabilities vary continuously with the bounded channel inputs; Gaussian tails and the truncation choice control the omitted mass. Thus the joint law of all finite input labels, target `Yhat` labels, and target destination-output labels approaches the target finite-partition law.

Make the physical relay observation finite as well: each node forms a finite cell label `Ytilde_k=q_m(Y_k)` from its own observation only. This defines a finite-output memoryless channel from the finite input representatives. Set its local finite test channel to

`p_m(yhat_k|ytilde_k)=Pr{Qhat_m(Y_k+Zhat_k)=yhat_k | q_m(Y_k)=ytilde_k}`,

where the conditional distribution is under the finite input approximation and the physical Gaussian channel. This is a local kernel: node k needs only its own `Ytilde_k` and independent private test-channel randomness, not the other nodes' observations. As the cells of `q_m` shrink on the bounded box, the Gaussian-dither probabilities `Pr{Qhat_m(y+Zhat_k)=yhat_k}` vary uniformly little within each cell; choose the overflow box large enough that its probability is small. The induced joint distribution on the fixed finite target labels is therefore close in total variation to the target law. For this fixed finite alphabet, entropy continuity applies. Refining the physical observation cells and input grid then makes every finite NNC mutual-information expression as close as desired to its selected target-partition value. This order is essential: no mutual-information convergence is inferred merely from total-variation convergence on growing alphabets.

Apply the finite-alphabet NNC theorem to that finite-input, finite-output channel and local test kernels. For each finite approximation, generate every length-n input codeword from the product input law conditioned on its strong typical set; choose the finite input grid and the typicality tolerance so every such codeword has average cost at most `P-delta_m/2`. Write `p_n` for the probability of the conditioning event; `p_n->1`. Each packing error event contains a fixed finite number c of codewords, so conditioning their independent laws on typicality increases its bound by at most `p_n^{-c}=1+o(1)`; the usual wrong-index counts and strict mutual-information exponents are unchanged. For a jointly typical pair of local input and observation sequences, conditional type counting gives a quantization candidate hit probability at least `2^{-n(I+eta)}`; with `2^{n hatR}` independent candidates the miss probability is at most `exp[-2^{n(hatR-I-eta)}]`. These are the covering and packing estimates required by the finite NNC error analysis, now with cost-conditioned input codebooks. Because every message/compression-index codeword has this cost bound, the expected block power constraint holds for every fixed node message after averaging over other messages and the channel. At a relay, the codeword distribution is conditioned on its own current input (known from its message and previous compression index), and the local typicality-covering search uses that input and its own observation; uniform tie-breaking among successful indices preserves the NNC symmetry argument. Each finite approximation has finitely many messages, observations and codebook states, so averaging over the local tie-breaking tables fixes a deterministic set of encoder maps with no larger average error and unchanged input costs. No runtime shared randomness is required. Because the target rate tuple has a strict margin, choose the finite approximation fine enough that it lies inside the finite NNC region, then take blocklength to infinity. Finally diagonalize the finite approximations while letting `delta_m` decrease to zero. This proves the continuous Gaussian NNC achievability claim under the source's per-message expected-power model, rather than assuming a finite-DMC theorem automatically transfers to a continuous alphabet.

### 2.5 Final journal Gaussian gap and a nonnegative vector repair

The final IEEE paper changes Theorem 4 rather than repeating the arXiv v2 cut-dependent vector statement. It uses `Zhat_k~N(0,gamma-1)` with `gamma>1`. The inner cut right side is

`F_gamma(S)-Delta_i(S,gamma)`, where `F_gamma(S)=(1/2)log_2 det(I+(P/gamma)G(S)G(S)^T)` and `Delta_i(S,gamma)=(|S|/2)log_2(gamma/(gamma-1))`.

Its new Lemma 1 and Appendix D bound the cut-set outer right side by `F_gamma(S)+Delta_o(S,gamma)`, with

`Delta_o(S,gamma)=(|S|/2)log_2 alpha(gamma,r/|S|)`, `r=min{|S|,|S^c|}`,

`alpha(gamma,u)=exp(gamma/e)` if `u>=gamma/e`, and `alpha(gamma,u)=(gamma/u)^u` otherwise; the lemma assumes `gamma>=(e-1)u`. Therefore every cut's final-version RHS difference is

`b_S(gamma)=Delta_o(S,gamma)+Delta_i(S,gamma)=(|S|/2)log_2(alpha(gamma,r/|S|)gamma/(gamma-1))`.

Let `Delta(gamma)=max_S b_S(gamma)` and `Delta*=inf_{gamma>=e-1} Delta(gamma)`. The final proof explicitly constructs the common signed shift: for every outer-bound tuple R and every valid cut S,

`sum_{k in S}(R_k-Delta(gamma)) <= F_gamma(S)+Delta_o(S,gamma)-|S|Delta(gamma) <= F_gamma(S)-Delta_i(S,gamma)`.

It then evaluates the one-dimensional minimization and proves `Delta*<=0.63N`. This is a genuine vector-selection argument for the signed cut polyhedron, and the published theorem is a uniform per-coordinate shift; it does not retain the arXiv v2's sharper `g_S` statement.

An analytic certificate avoids relying on the paper's numerical minimization. Fix `gamma=3`, which is admissible. With `x=|S|/N` and `m=min{x,1-x}`, the lemma gives

`b_S(3)/N = (1/2)[x log_2(3/2)+m log_2(3x/m)]`.

For `x<=1/2`, this is `x/2 log_2(9/2)`, at most `(1/4)log_2(9/2)<5/8=0.625`, since `(9/2)^2<2^5`. For `x>=1/2`, put `t=(1-x)/x`; then

`b_S(3)/N = [ln(3/2)+t ln(3/t)]/[2 ln(2)(1+t)]`.

Its unique interior maximum solves `ln(2/t)=1+t`, equivalently `t e^t=2/e`. The function `t e^t` is increasing, and the finite Taylor lower bound gives

`0.467 e^0.467 > 0.467(1+0.467+0.467^2/2+0.467^3/6)>0.743>2/e`,

so `t<0.467`; the comparison `0.743>2/e` follows, for example, from `e>2.7`, which is certified by the positive Taylor sum through degree five and gives `2/e<20/27<0.743`. Taylor bounds also give `ln(3/2)<0.406` and `ln 2>0.693`: the positive Taylor sum through degree four for `e^0.406` exceeds `1.5`, while for `e^0.693` the degree-five sum plus the tail bound `0.693^6/(6!(1-0.693/7))` is below `2` (successive tail-term ratios are at most `0.693/7`). At the critical point the maximum simplifies to `(ln(3/2)+t)/(2 ln 2)`, which is less than `0.873/1.386<0.63`. The endpoint values are smaller. Therefore `max_S b_S(3)<0.63N`, proving the published constant with an explicit admissible quantizer and elementary calculus. The matrix lemma applies with `A=P G(S)^T G(S)`, which has rank at most `min{|S|,|S^c|}`, and normalized input covariance `B=K_S/P`, which has trace at most `|S|`; the case `P=0` is trivial.

The final paper prints `(R_1-0.63N,...,R_N-0.63N)` as a rate tuple without a positive-part symbol. Since operational rate tuples are nonnegative, that literal statement is not defined for low or zero coordinates. The signed-shift proof has a simple operational repair using an active-message version of the NNC packing argument. For any `Delta>Delta*`, choose `gamma>=e-1` with `Delta(gamma)<Delta`, define `A={k:R_k>Delta}`, and set `R'_k=(R_k-Delta)^+`. If A is empty, the zero tuple is achievable. Otherwise, the NNC error proof only needs cut inequalities for cuts U with `U intersect A != empty`: a wrong decoded message tuple has a nonempty set T of incorrect message coordinates, and T is contained in A; the covering and true-tuple typicality events are unchanged, while there is no wrong-message packing event on a cut with T empty. The original packing simplification makes the cut with the wrong-message set sufficient, and the inequalities below in fact hold for every valid U meeting A. For such U,

`R'(U)=R(U intersect A)-|U intersect A|Delta <= R(U)-Delta <= F_gamma(U)+Delta_o(U,gamma)-Delta < F_gamma(U)-Delta_i(U,gamma)`,

because `|U intersect A|>=1`, rates are nonnegative, and `b_U(gamma)<=Delta(gamma)<Delta`. Thus the clipped vector is achievable in closure, with each coordinate loss `R_k-R'_k=min{R_k,Delta}<=Delta`; letting `Delta` decrease to `Delta*` gives the final `0.63N` per-user bound. Zero-rate destination/source coordinates cause no exception: every active cut U has `U^c` containing the destination from the original cut condition, and cuts containing no active-message node have no wrong-message event. This active-message clipping argument is local to this note; it is not printed explicitly in the journal theorem.

Version comparison: the complete arXiv:1002.3188v2 paper (2010-03-12), Theorem 4 and Section V-A equations (22)–(25), states the sharper allowance `g_S=|S|/2+min{|S|,|S^c|}/2 log_2(2|S|)` and its displayed proof compares the cut right sides but does not select a vector. The final author-hosted IEEE paper (vol. 57, no. 5, pp. 3132–3152, May 2011; DOI 10.1109/TIT.2011.2119930) replaces that statement with a common `0.63N` coordinate shift and supplies the matrix lemma, Appendix D, and explicit signed vector construction described above. Its printed wording omits clipping; the active-message argument supplies the corrected nonnegative version. Both complete texts were read; the journal theorem is not attributed to the preprint wording.

Source locators: Lim–Kim–El Gamal–Chung, arXiv:1002.3188v2, Theorem 4 and Section V-A, equations (22)–(25), article pages 20–22; and the final author-hosted IEEE version, Theorem 4 and Section V-A equations (19)–(20), printed pages 3136 and 3141–3142, new Lemma 1 and proof in Appendix D, printed pages 3141–3147. The final-version metadata was cross-checked on Abbas El Gamal's author publications page, which lists IEEE TIT vol. 57, no. 5, pp. 3132–3152, May 2011.

## 3. Relay channel with output feedback: exact topology and cut-set capacity

### 3.1 Operational model

The discrete memoryless relay channel has finite alphabets, one source message M uniform on `[1:2^{nR}]`, source input X_i, relay input X_{1i}, destination output Y_i, and relay output Y_{1i}, with kernel `W(y_i,y_{1i}|x_i,x_{1i})` memoryless across i. The source and relay encoders in the full-feedback topology are

`X_i=f_i(M,Y^{i-1},Y_1^{i-1})`, `X_{1i}=f_{1i}(Y^{i-1},Y_1^{i-1})`.

The destination decodes M from Y^n; error is average over M and the channel. The destination output Y^{i-1} and relay output Y_1^{i-1} are noiselessly fed back causally to both transmitting terminals; the relay also observes its own Y_1^{i-1} in the ordinary relay model. The channel has no cost constraint. The exact capacity is

`C_FB=sup_{p(x,x_1)} min{I(X,X_1;Y), I(X;Y,Y_1|X_1)}`.

This feedback formula does not characterize the no-feedback relay channel.

### 3.2 Cut-set converse

Fano and the chain rule give

`nR<=I(M;Y^n)+n epsilon_n=sum_i I(M;Y_i|Y^{i-1})+n epsilon_n`.

Given `(M,Y^{i-1},Y_1^{i-1})`, both current channel inputs are fixed. Memorylessness gives `H(Y_i|M,Y^{i-1},Y_1^{i-1})=H(Y_i|X_i,X_{1i})`; therefore `H(Y_i|M,Y^{i-1})>=H(Y_i|X_i,X_{1i})`, while `H(Y_i|Y^{i-1})<=H(Y_i)`. Hence

`I(M;Y_i|Y^{i-1})<=H(Y_i)-H(Y_i|X_i,X_{1i})=I(X_i,X_{1i};Y_i)`.

Give the destination output sequence to a genie. This can only lower the conditional message entropy, so Fano also yields `nR<=I(M;Y^n,Y_1^n)+n epsilon_n`. With `O_i=(Y_i,Y_{1i})` and `O^{i-1}=(Y^{i-1},Y_1^{i-1})`,

`I(M;O_i|O^{i-1})=H(O_i|O^{i-1})-H(O_i|M,O^{i-1})`.

Here X_{1i} is a deterministic function of O^{i−1}, and memorylessness gives `H(O_i|M,O^{i-1})=H(O_i|X_i,X_{1i})`. Therefore

`I(M;O_i|O^{i-1})<=H(O_i|X_{1i})-H(O_i|X_i,X_{1i})=I(X_i;Y_i,Y_{1i}|X_{1i})`.

Introduce independent uniform Q on `[1:n]` and the time-shared variables `(X,X_1,Y,Y_1)=(X_Q,X_{1Q},Y_Q,Y_{1Q})`. The two bounds become `R<=I(X,X_1;Y|Q)` and `R<=I(X;Y,Y_1|X_1,Q)`. The two mutual informations are concave in the joint law p(x,x_1): the first by concavity of mutual information in its input law; the second because `H(Y,Y_1|X_1)` is concave in p(x,x_1) while `H(Y,Y_1|X,X_1)` is linear. Averaging the Q-conditioned laws therefore produces one law p(x,x_1) for which both mutual informations are at least the time-shared bounds. Let n tend to infinity to obtain the claimed single-letter outer bound.

### 3.3 Achievability through a degraded enhanced relay observation

Only the feedback link from destination Y to the relay is needed: the relay’s observation at the end of each block is then `(Y^n,Y_1^n)`. The source can ignore feedback. View this as a relay channel whose relay output is `Y_R=(Y,Y_1)` and whose destination output is Y. It is physically degraded because Y is a coordinate projection of Y_R. For any joint input law p(x,x_1), the standard block-Markov decode-forward construction achieves

`R<min{I(X;Y_R|X_1),I(X,X_1;Y)}=min{I(X;Y,Y_1|X_1),I(X,X_1;Y)}`.

To state the actual code interface, split the source's message into B−1 independent indices and let both source terminals know the full block-index schedule; the source needs no feedback. Draw relay codewords `x_1^n(m_{j-1})` iid p(x_1), and, for each relay index, draw source satellites `x^n(m_j|m_{j-1})` conditionally iid p(x|x_1). In block j the source sends the satellite for the new message m_j and old index m_{j-1}; the relay sends its codeword for the old message it decoded in block j−1. At the end of block j the relay observes both `Y^n(j)` through the feedback link and `Y_1^n(j)` locally, and decodes m_j by joint typicality conditioned on the known m_{j-1}; the wrong-satellite packing exponent is `I(X;Y,Y_1|X_1)`. The destination decodes backwards: with m_j already recovered from the later block, it uniquely decodes m_{j-1} from `Y^n(j)` using the pair `(x^n(m_j|m_{j-1}),x_1^n(m_{j-1}))`; the packing exponent is `I(X,X_1;Y)`. The true tuples are typical by the memoryless law and the finite-alphabet weak law. A union bound over the fixed B blocks makes error vanish under both strict inequalities; the rate factor `(B-1)/B` tends to one. Taking the supremum over p(x,x_1) matches the converse.

The full topology in §3.1 also feeds Y_1 back to the source and may feed both outputs to both senders. Those links are unnecessary for this code: the relay’s own Y_1 observation is local, it alone needs the destination-output feedback Y^past, and the source uses only its message and the public block schedule. Thus the theorem’s exact feedback benefit is tied to the destination-to-relay noiseless causal link, not a claim about no-feedback capacity.

Source locator: El Gamal–Kim, arXiv:1001.3404v3, Interactive Communication, “Relay Channel with Feedback,” Lecture 18, Theorem 5 and preceding topology diagram, lecture pages 18–43 through 18–44. The same source states the degraded-relay decode-forward formula used here in Lecture 17; the proof details are supplied by the local r2 relay-DF development and the explicit enhanced-output reduction above.
