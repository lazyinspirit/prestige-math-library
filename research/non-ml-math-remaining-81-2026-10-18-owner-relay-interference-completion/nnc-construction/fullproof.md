# Isolated NNC construction: finite multicast and Euclidean/Gaussian extension

Prepared for owner scientific review, cycle 1. This is an isolated proof draft, not a canonical item edit, source certification, workflow verdict, or gate result. Logarithms in the coding proof are natural; divide all its rates and informations by `ln 2` for bits. No new axiom beyond the existing probability-law suppliers is needed.

## Exact scope and source reading

Read `CLAUDE.md` and `README.md` fully; read the two target items, their four named consumers, the finite and Gaussian network definitions, and the finite IID, conditional covering, and conditional packing suppliers. Read the full general multicast construction and error proof in `sources/lim-nnc.txt`, lines 1140–1626 (paper printed pages 14–18), and the full Gaussian extension/evaluation, lines 1731–1998 (printed pages 20–22). The source explicitly leaves the continuous adaptation to a “standard procedure”; the local construction below supplies that adaptation rather than treating that sentence as a proof. Source hashes:

- `sources/lim-nnc.pdf`: `ac298d342080fd529b8aa51a0d9aedd63fbddbf9144b77091b7180b7a36ccc67`.
- `sources/lim-nnc.txt`: `bb205c6e7326402699a34840ae69c8229fbfc5ce7fca6f3c33279cb31d9670f2`.

The proof preserves independent source messages, arbitrary finite time sharing, every required destination/cut, constant reconstructions, and the separate zero tuple. Destinations that are also sources know their own message. This is explicit in the finite code definition; the Gaussian definition should explicitly allow decoder input `(Y_d^n,M_d)` as well (or say it returns its own message without estimating it). The Gaussian target's undefined `\mathcal R=[N]` must read `\mathcal Q=[N]`; this is an interface typo, not a mathematical weakening. The Gaussian target also needs an actual achievability sentence for its general chosen reconstruction set, replacing its conditional sentence by the theorem proved here.

The weak-law supplier used below can be the existing proved `thm-khinchin-weak-law-for-iid-integrable-variables`, whose full statement/proof was read, together with the existing conditional-KL chain-rule supplier `lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing` (also read fully). Alternatively the elementary weak-law calculation fits locally: for integrable IID `V_t`, truncate to `V_t 1_{|V_t|<=K}`; its sample average has variance at most `K^2/n`, while the mean absolute difference of the residual centered average is at most `2 E(|V_1|1_{|V_1|>K})`. First let `n` tend to infinity, then `K` to infinity, and apply `Pr(|Z|>a)<=E|Z|/a`. The tail expectation tends to zero by integrability. This proves exactly the weak law used for information densities and costs; in the Gaussian application those variables even have finite variance. The finite case only needs the corresponding finite-sum variance bound.

## 1. A local encoder and exposure lemma

This elementary rejection construction avoids assuming that unused codewords remain independent after a typical compression index has been selected. It also avoids needing a new unproved Markov lemma for selection from a random codebook.

Let a block input/output pair `(x^n,y^n)` have reconstruction kernel

$$r(du^n\mid x^n,y^n)=\prod_{t=1}^n P_{\hat Y|X,Y,Q}(du_t\mid x_t,y_t,q_t),\qquad \mu(du^n\mid x^n)=\prod_{t=1}^n P_{\hat Y|X,Q}(du_t\mid x_t,q_t).$$

All kernels here are finite-alphabet kernels or the explicit Gaussian kernels below. Thus the likelihood ratios and integrals used next are measurable; conditional distributions on null sets can be defined arbitrarily. Write `C=I(Y;hat Y|X,Q)` in nats, and assume it is finite. Choose `a>0` and a fixed `0<epsilon<1/2`. Let

$$H(x^n,y^n)=\left\{u^n:\log\frac{dr(\cdot\mid x^n,y^n)}{d\mu(\cdot\mid x^n)}(u^n)\le n(C+a)\right\},\qquad Z(x^n,y^n)=r(H(x^n,y^n)\mid x^n,y^n).$$

Pairs with `Z<1-epsilon` are declared bad. For a good pair put `T=r(·|x,y)1_H/Z` and `M=exp(n(C+a))/(1-epsilon)`. Draw `L=ceil exp(n rho)` independent reconstruction entries from `mu`, and test them in order using independent uniforms: accept entry `u` with probability `(dT/dmu)(u)/M`; stop at the first acceptance. If no entry is accepted, declare a covering failure and use a default index. This is a finite measurable randomized causal encoder. Its acceptance probability at each trial is exactly `p=1/M`, independent of the good pair. Its failure probability is `(1-p)^L <= exp(-L/M)`, which tends to zero if `rho>C+a`. Conditional on first acceptance at a specified label `ell`, its reconstruction has exactly law `T`.

Here is the exposure statement needed for packing, with its proof. Conditional on a good `(x,y)` and acceptance at `ell`, the selected entry has law `T`; each entry before `ell` has law

$$\frac{\mu(du\mid x)(1-(dT/d\mu)(u)/M)}{1-p}\le\frac{\mu(du\mid x)}{1-p};$$

entries after `ell` retain law `mu`. These entries are independent conditional on `(x,y,ell)`; the selected word and the other words are independent with these respective conditional laws. This follows by multiplying the independent densities and the rejection/acceptance probabilities and dividing by `(1-p)^{ell-1}p`. In particular, any one unselected entry queried by a false candidate has conditional density at most `1/(1-p)<=2` times `mu`, uniformly in `ell`, for large `n`. Also `T<=r/(1-epsilon)`. Codebooks on any input branch other than the transmitted branch are not inspected by the encoder, and retain their original independent distributions.

Under the intended IID target law, the average log likelihood in the definition of `H` tends to `C`, by the weak law for integrable IID summands. For a deterministic time-sharing sequence having each symbol frequency tending to `P_Q(q)`, apply the same law separately in each nonempty `q` subblock. Hence `E[1-Z]->0` and `Pr{Z<1-epsilon}->0` by Markov's inequality. Moreover `||T-r||_TV=1-Z<=epsilon` on good pairs. In fact the averaged distance tends to zero for fixed epsilon, because it is bounded by `E[1-Z]` plus the vanishing bad-pair probability. This proves that the selected full reconstruction tuple, obtained independently at each node conditional on its local pair, has total variation distance tending to zero from the target product test-channel law; use the telescoping bound for a finite product of kernels. Thus any full-block target event of probability tending to one still holds for the chosen reconstructions. This conclusion needs no assertion that arbitrary locally typical reconstructions are jointly typical.

One may remove the uniforms without adding shared runtime randomness: draw one independent uniform for every reconstruction entry, indexed by node, block, message label, previous-index branch, and current reconstruction label, as part of the code ensemble; fix this finite array together with the codebook after averaging the error probability. During transmission a block uses just one input branch, and each of its reconstruction-entry uniforms is exposed at most once. All uninspected branches retain their independent uniforms and codewords. The encoders after this choice are deterministic functions of local messages and past outputs. For Gaussian powers, every input word will obey the power bound pointwise, so fixing these seeds cannot spoil a power constraint.

## 2. The exact packing calculation, including both kinds of wrong indices

First take `Q` constant. Under the target one-use law

$$P(dx,dy,du)=\prod_{k=1}^N P_{X_k}(dx_k)\,W(dy\mid x)\prod_{k=1}^N P_{\hat Y_k|X_k,Y_k}(du_k\mid x_k,y_k),$$

fix a destination `d`. In formulas about decoding, `P_d` denotes the marginal law of `V=(X_[N],hat Y_[N],Y_d)`. For `d notin A` and `U subset A^c\{d}`, set `F=A union U`, `C_0=F^c`, and define a reference law on these same coordinates by

$$Q_{A,U}=P_{X_{A^c},\hat Y_{C_0},Y_d}\prod_{k\in A}P_{X_k}\prod_{k\in F}P_{\hat Y_k|X_k}.$$

This notation means: first draw the displayed marginal; draw independent new `X_A`; then draw the reconstructions in `F` independently from their marginal codebook kernels given their respective inputs. Correct retained reconstructions are indexed by `C_0`. Put `J_d(A,U)=D(P_d||Q_{A,U})`. On finite alphabets every target-positive atom is reference-positive, so this is finite. In the Gaussian case after deleting constant coordinates, all relevant conditional covariance matrices are nonsingular, so the ratio exists and its log is integrable.

For every such `(A,U)` require the decoder's accepted block tuples to satisfy

$$\log\frac{dP_d^{\otimes n}}{dQ_{A,U}^{\otimes n}}(v^n)\ge n(J_d(A,U)-a).$$

There are only finitely many tests. Under the target law all pass with probability tending to one by the weak law. The elementary change-of-measure bound, valid with sums or integrals, is

$$Q_{A,U}^{\otimes n}\left\{\log\frac{dP_d^{\otimes n}}{dQ_{A,U}^{\otimes n}}\ge n(J_d(A,U)-a)\right\}\le e^{-n(J_d(A,U)-a)}.$$

Indeed on that set the reference measure is at most `exp(-n(J-a))` times the target measure, whose total mass is one. Intersecting with the other tests preserves the bound. This is a complete packing estimate, not an invocation of an unnamed continuous typicality theorem.

For clarity the entropy identities below are written for finite alphabets. Their conditional-KL versions give the same identities for the Gaussian laws; alternatively all their differential entropies after removing constants are finite. Define

$$E_d(A)=J_d(A,\varnothing)=I(X_A;\hat Y_{A^c},Y_d\mid X_{A^c})+\sum_{k\in A}I(\hat Y_k;X_{[N]},\hat Y_{A^c},Y_d,\hat Y_{\{j\in A:j<k\}}\mid X_k).$$

To check the equality, expand `D(P_d||Q_{A,empty})`: the `X_A` contribution is `sum_A H(X_k)-H(X_A|X_Ac,hat Y_Ac,Y_d)`, equal to its displayed mutual information because inputs are independent. The reconstruction contribution is `sum_A H(hat Y_k|X_k)-H(hat Y_A|X_[N],hat Y_Ac,Y_d)`; expand the last entropy in node order. Every term is exactly as displayed. For arbitrary `U`, another chain expansion gives the important identity

$$J_d(A,U)-E_d(A)=\sum_{k\in U}H(\hat Y_k\mid X_k)-H(\hat Y_U\mid X_{A^c},\hat Y_{C_0},Y_d)\ge0.$$

The last expression is the conditional KL divergence of `P_{hat Y_U|X_Ac,hat Y_C0,Y_d}` from `prod_{k in U}P_{hat Y_k|X_k}`, averaged over `(X_Ac,hat Y_C0,Y_d)`. Thus it is nonnegative, including for continuous coordinates by the conditional-KL definition. This proves the lower bound for every wrong-current-index pattern, rather than silently treating a wrong complementary reconstruction as a true one.

Finally set `C_k=I(Y_k;hat Y_k|X_k)`. The test-channel factorization implies

$$E_d(A)-\sum_{k\in A}C_k=I(X_A;\hat Y_{A^c},Y_d\mid X_{A^c})-I(Y_A;\hat Y_A\mid X_{[N]},\hat Y_{A^c},Y_d)=:F_d(A).$$

Here is the cancellation in full. Subtract `C_k=H(hat Y_k|X_k)-H(hat Y_k|X_k,Y_k)` from each summand in `E_d(A)`. The resulting sum is `H(hat Y_A|X_[N],Y_A,hat Y_Ac,Y_d)-H(hat Y_A|X_[N],hat Y_Ac,Y_d)`: conditional on all `Y_A,X_[N]`, the test channels in `A` are independent and depend only on `(X_k,Y_k)`. This difference is the negative conditional mutual information displayed above. No independence of channel outputs is required here.

With finite `Q`, define all the measures conditional on `q`, add `q` to every conditioning tuple, and use product measures for a fixed `q^n`. The log ratios add across positions, their means tend to the corresponding conditional informations, and the same change-of-measure proof applies. Every identity above is then averaged over `q`; there is no separate union of the per-`q` rate regions.

## 3. Complete finite-alphabet multicast coding proof

Let the nonnegative source-rate vector satisfy the strict displayed cut inequalities for a fixed law in the finite target item. Work in nats: `r_k=R_k ln2` if the statement's rates are in bits, and `r_k=0` at a nonsource. A source of rate zero has a singleton message set. There are finitely many constrained destination/cut pairs, so their strict gaps have a positive minimum `g`. If there are no such pairs, each destination already knows every required message and no transmission is needed. Choose a sufficiently small fixed `a>0`, then choose `rho_k>C_k+a` with `rho_k-C_k` arbitrarily small. Choose a large fixed block count `B`, and only then let block size `n` tend to infinity. Choose a deterministic time-sharing word `q^n` whose symbol frequencies tend to `P_Q`; symbols of zero probability are absent. All strict gaps survive this approximation for large `n` (finite sums and finite-alphabet entropy continuity).

For each node `k` and each block `j=1,...,B`, independently generate

$$X_{k,j}(m_k,l_{k,j-1}),\quad m_k\in[1:\lfloor e^{nBr_k}\rfloor],\quad l_{k,j-1}\in[1:L_k],\qquad L_k=\lceil e^{n\rho_k}\rceil,$$

with singleton message range when `r_k=0`. Each word has product law `prod_t P_{X_k|q_t}`. For each of these words independently generate `L_k` reconstruction words from `prod_t P_{hat Y_k|X_k,q_t}`. All blocks and nodes and branches are independent. Initialize `l_k0=1`. In block `j`, node `k` sends `X_kj(m_k,l_k,j-1)` without using within-block outputs; after observing that block's `Y_kj`, it selects `l_kj` by the encoder of Section 1. Thus its encoder is causal in precisely the sense of the finite DMN definition. The same source message is repeated across all `B` blocks; its total length is `nB`, so its asymptotic rate is `r_k`, with no missing prelog factor.

At destination `d`, the decoder knows its own message and its own actual compression-index sequence. It declares the unique tuple of other source messages for which there exist candidate indices `l_kj`, `k!=d`, such that every block passes all the likelihood-ratio tests in Section 2. It fixes `m_d` and all `l_dj` at their actual values. It need not uniquely decode any compression index. On ties or no such message tuple, it declares error. Every finite-alphabet operation is a function on finite sets.

The probability of a bad local pair, covering failure, or failure of a true-message test tends to zero for fixed `B`. To see this without a circular IID assertion, expose blocks in order. The codebook for a new block is independent of all previous blocks. Conditional on any messages and previous true index labels, its transmitted input words are independent with the specified product laws. The channel is memoryless. Section 1 then gives vanishing bad-pair and covering failure probabilities and total variation approximation of its selected reconstructions to the product test-channel law. The finite number of tests accept a target IID tuple with probability tending to one. Union-bound over the finite number `NB` of local selections and `B|D|` true-message block tests.

It remains to bound false messages. By message symmetry fix all actual messages at label 1. Fix a nonempty wrong-source set `T`, a false message tuple with this set, the entire true compression-label path, and a candidate compression path. In block `j` define

$$A_j=\{k:m_k\ne1\text{ or }l_{k,j-1}\ne L_{k,j-1}^{\rm true}\},\qquad U_j=\{k\notin A_j:l_{k,j}\ne L_{k,j}^{\rm true}\}.$$

Then `T subset A_j`, `d notin A_j`, and `U_j subset A_j^c\{d}`. A false input branch at `k in A_j` is an uninspected branch, so its candidate pair has its independent input/marginal-reconstruction law. At `k in U_j` the input is true, while its reconstruction is an unselected entry from the true branch. The exposure lemma bounds its law by twice its marginal codebook law. At the remaining nodes both candidate labels are true, and the selected reconstructions are bounded by `1/(1-epsilon)` times their test-channel laws. Integrating unneeded true coordinates therefore bounds the full candidate tuple's law by

$$K\,Q_{A_j,U_j}^{\otimes n},\qquad K=2^N(1-\epsilon)^{-N},$$

uniformly in all specified labels and in `n` sufficiently large. Restricting to good pairs only decreases the corresponding subprobability measure. The probability weight of specified successful true labels is the product of `(1-p_k)^{ell_k-1}p_k`; these weights do not depend on the block data. Consequently different block codebooks can be exposed independently after the true label path is fixed; summing over true paths has total weight at most one. This justifies multiplying the block packing bounds despite the causal index transitions. This argument is the reason for using the explicit encoder of Section 1.

More explicitly, after integrating unused entries, the joint **subprobability** measure for one block's true input/output/reconstructions and a specified successful label vector `ell` is

$$\left(\prod_k (1-p_k)^{\ell_k-1}p_k\right)\mathbf1_{G}(x^n,y^n)\left(\prod_k\mu_{X_k,n}(dx_k^n)\right)W^{\otimes n}(dy^n\mid x^n)\prod_k T_k(du_k^n\mid x_k^n,y_k^n),$$

where `G` is the event that every local pair is good and `mu_Xk,n` is the input word law. There is no division by the probability of `G`. Keep its indicator (bounded by one) when applying the exposure domination, and sum the geometric weights over allowed true labels (their sum is at most one). Thus the packing proof never conditions on a rare global good event and never hides a normalization factor in the constant `K`. For fixed true index labels all branches used in different blocks are deterministic labels in independent block arrays, which proves the product assertion directly.

Drop block 1's false-message test. For blocks `j=2,...,B`, Section 2 bounds the false test probability by `K exp[-n(E_d(A_j)-a)]`. This is independent of the current-index mismatch set `U_j`. For a fixed previous-index pattern `A`, at most `prod_{k in A}L_k` previous-index tuples realize it. There are at most `2^(N-1)` possible `A` containing `T` and excluding `d`. The last candidate index vector has at most `prod_{k!=d} L_k` choices. The number of false message tuples with set `T` is at most `exp(nB r(T))`. Hence, absorbing the harmless rounding of the `L_k` into a constant depending on `N,B`,

$$\Pr(\hbox{some false message at }d,\ \hbox{no selection failure})\le K^{B-1}2^{(N-1)(B-1)}O_{N,B}(1)\sum_{\varnothing\ne T\subseteq\mathcal S\setminus\{d\}}\exp\!\left(nBr(T)+n\sum_{k\ne d}\rho_k-n(B-1)\min_{T\subseteq A,\ d\notin A}\{E_d(A)-\rho(A)-a\}\right).$$

In particular it tends to zero if for every such `T`

$$r(T)<\frac{B-1}{B}\min_{T\subseteq A,\ d\notin A}\{E_d(A)-\rho(A)-a\}-\frac1B\sum_{k\ne d}\rho_k.$$

Now eliminate the auxiliary rates explicitly. Section 2 gives

$$E_d(A)-\rho(A)=F_d(A)-\sum_{k\in A}(\rho_k-C_k).$$

For every `A` in the minimum, `r(T)<=r(A cap S)<F_d(A)`. Thus the original finite set of strict cut inequalities first allows the positive excesses `rho_k-C_k` and `a` to be chosen so small that each right-hand minimum still exceeds `r(T)` by, say, `g/2`; next `B` can be chosen so large that its two `1/B` losses are smaller than `g/4`. All false-message probabilities then tend to zero as `n` tends to infinity. A finite union over destinations proves multicast reliability. Average over messages, codebooks and the finite seed arrays, and choose one code of error no larger than this vanishing average. This produces deterministic causal finite DMN codes.

This proves the displayed strict finite region. The all-zero tuple is achieved by singleton message sets and constant inputs with exactly zero error, even when some cut expression is negative. Constants in any reconstruction alphabet are allowed in every preceding calculation; they contribute zero information. Finally, for a point in the closure of the union, choose strict-region tuples approaching it and choose one sufficiently long reliable code for each tuple, with errors tending to zero and lengths tending to infinity. Their rate limits give that point. This is the stated closure assertion, with no fixed-positive-gap assertion at a boundary.

## 4. Euclidean extension with cost: the local theorem actually needed

Here is a sufficient Euclidean version, with explicit hypotheses rather than an unrestricted claim about all continuous kernels. Inputs, outputs and reconstructions are finite products of Euclidean spaces, with constant coordinates permitted. The network and test channels have measurable probability kernels. Use a product input law (optionally conditional on finite `Q`) and a product local test channel. Assume: (i) each `C_k` is finite and the local log likelihood defining it is integrable; (ii) for every destination and finite pair `(A,U)` of Section 2, `P_d<<Q_AU`, `J_d(A,U)` is finite, and its log likelihood is integrable under `P_d`; (iii) the displayed cut mutual informations are finite and the chain-rule identity in Section 2 holds; (iv) each node has a nonnegative measurable cost `c_k`, finite mean under its input law, strictly less than its permitted cost. Finite alphabets and the Gaussian laws here meet these hypotheses. They state precisely the needed regularity and do not assert a theorem for infinite or undefined mutual informations.

There is a direct cost-preserving modification of Sections 1–3. Generate each input word from its independent target product law conditioned on

$$\sum_{t=1}^n c_k(x_{k,t})\le n\Gamma_k',$$

where `E c_k(X_k)<Gamma_k'<Gamma_k`. The conditioning probability `a_kn` tends to one by the weak law. Every word in every codebook then satisfies the cost bound, regardless of which causal sequence of indices is selected and regardless of message. For fixed `n` the number of words is finite, so these conditional distributions define an ordinary finite-dimensional random code ensemble. A conditional word law has density at most `1/a_kn` relative to the original product input law and total variation distance `1-a_kn` from it. For a new block its true input tuple is therefore within `sum_k(1-a_kn)` in total variation of the target product law, uniformly in past labels. Passing through a channel kernel does not increase this distance: for an event `E`, integrate its conditional probability, a function in `[0,1]`, against the difference of input measures. Thus the good-pair, true-test, and reconstruction-selection arguments still hold.

The false-pattern estimate changes only by a multiplicative constant. Each true or false input word exposed in a block contributes at most `1/a_kn`; there are at most two input words per node. For large `n`, all `a_kn>=1/2`, so replace `K` by `K'=2^(3N)(1-epsilon)^(-N)`, uniformly in labels and patterns. The likelihood-ratio packing estimate is exactly the measure inequality in Section 2, which did not require discrete alphabets. All block-index counting and all rate elimination are unchanged. The weak laws apply to the integrable log likelihoods in (i)–(ii); for finite `Q` apply them separately on each `q` subblock. This proves the same cut inner bound for this Euclidean model, with deterministic measurable encoders and the stated costs. The deterministic chosen code obeys the cost bound on every transmitted input word, hence also in expectation over messages and observations. No limit of discrete channel codes and no continuity of a discretized decoder are being assumed.

For precision about measurability: all codebooks are finite arrays of real vectors; an encoder evaluates finitely many measurable likelihood ratios, threshold tests, and fixed uniform-seed comparisons, returning the first accepted label or a fixed default. A decoder tests finitely many real-vector tuples and chooses a unique message or a fixed error symbol. These are measurable maps. Fixing the seeds and codebooks produces exactly the measurable causal codes required by the Gaussian definition.

## 5. Verification of every Euclidean hypothesis for the Gaussian target

First choose input variances `0<=P_i'<P_i` at positive-power nodes; if `P_i=0`, use the constant zero input and remove that coordinate from density calculations. For a chosen reconstruction-node set `mathcal Q`, take independent `hat Z_i~N(0,1)` and `hat Y_i=Y_i+hat Z_i` on that set, and constant reconstructions elsewhere. Then `X`, `Y`, and all nonconstant reconstructions are finite-dimensional jointly Gaussian. Given `X`, `Y` has positive-definite unit noise covariance; given `(X,Y)`, each active reconstruction has independent unit quantization-noise variance. Consequently the full joint density of the nonconstant `(X,Y,hat Y)` coordinates is strictly positive, and so are the marginals and reference conditional densities used in Sections 1–2. Every log ratio is a constant plus a quadratic form in Gaussian variables. Its absolute expectation is finite since Gaussian second moments are finite. All local covering quantities and all `J_d(A,U)` are therefore finite. The entropy/chain-rule cancellations in Section 2 are valid, with zero contributions for removed constant coordinates. The cost is `c_i(x)=x^2`, of mean `P_i'`; choose a shell threshold between `P_i'` and `P_i`.

This proves achievability of every strict tuple satisfying for each destination `d notin A`

$$\sum_{k\in A\cap\mathcal S}R_k<I(X_A;Y_d,\hat Y_{A^c\cap\mathcal Q}\mid X_{A^c})-I(Y_{A\cap\mathcal Q};\hat Y_{A\cap\mathcal Q}\mid X_{[N]},Y_d,\hat Y_{A^c\cap\mathcal Q}),$$

where the mutual informations in this section are in bits. This is exactly the Gaussian target's general reconstruction-set expression. At the desired boundary variances `P_i`, take `P_i'` increasing to `P_i` at all positive-power nodes. Every involved Gaussian mutual information is a continuous log determinant of a positive-definite noise covariance plus a positive-semidefinite signal covariance. Therefore any finite family of strict rate inequalities at `P_i` remains strict for `P_i'` sufficiently close to `P_i`. Use those lower-variance codes, which already satisfy the original power constraints. For closed rate boundaries use the diagonal closure argument from Section 3. Thus no code is claimed to satisfy an average power constraint merely because its random ensemble does so.

This also clarifies a minor wording issue: the Gaussian network's noise at time `t` is independent of current inputs and past data; the complete input process may depend on *past* noises through feedback. No proof here assumes independence of the entire input process from all channel noises.

## 6. Noise-level evaluation, all cuts and destinations

For any chosen quantizer set, conditional on all inputs, the vectors of channel noises at different nodes and all quantization noises are independent. Since `d notin A`,

$$I(Y_{A\cap\mathcal Q};\hat Y_{A\cap\mathcal Q}\mid X_{[N]},Y_d,\hat Y_{A^c\cap\mathcal Q})=\frac{|A\cap\mathcal Q|}{2}\log_2 2=\frac{|A\cap\mathcal Q|}{2}.$$

This is equality for this independent-noise network. Constants contribute zero. If `mathcal Q=[N]` and all powers equal `P`, conditioned on `X_Ac` the vector `hat Y_Ac` is `G(A) X_A` plus independent Gaussian noise of covariance `2I`. Gaussian integration gives `h(N(0,K))=(1/2)ln((2 pi e)^m det K)` in nats: the density log is `-(m/2)ln(2 pi)-(1/2)ln det K-(1/2)z^T K^-1 z`, whose expected last quadratic is `m/2`. Subtract the entropy at covariance `2I`, then divide by `ln 2` to obtain

$$I(X_A;\hat Y_{A^c}\mid X_{A^c})=\frac12\log_2\det\left(I+\frac P2G(A)G(A)^T\right).$$

Adding `Y_d` cannot decrease mutual information, by the chain rule and conditional KL nonnegativity. The inner expression for every destination outside `A` is therefore at least

$$\frac12\log_2\det\left(I+\frac P2G(A)G(A)^T\right)-\frac{|A|}{2}.$$

Every tuple satisfying these strict inequalities for every cut with `A cap S` nonempty and `A^c cap D` nonempty satisfies every destination's sufficient inequality. The Euclidean theorem proves it achievable under the precise average-power definition, and its closure follows as before. The all-zero tuple has zero error using singleton source messages and zero inputs, independently of negative cut values.

## 7. Supplier and consumer integration notes

The following are actual mathematical dependencies, not source citations used as black boxes:

1. Finite network definition and conditional-KL/entropy chain-rule suppliers are consumed exactly as their statements say. The existing conditional packing supplier proves a one-word finite change-of-measure bound; Section 2 explicitly proves its multiword/reference-law version. Existing covering alone does not justify the selected-index law; Section 1 provides the missing helper.
2. For a concise canonical finite theorem, Sections 1–2 can be a new finite/block likelihood-ratio coding helper and Section 3 the theorem proof. A continuous helper may contain Section 4 and the Section 1 measure version, with the conditional-KL chain-rule supplier explicitly listed. Alternatively these arguments can stay locally in the target, without adding an unproved helper or a citation-only dependency.
3. The Gaussian theorem must depend on a proved Euclidean coding helper or contain Sections 1–5 locally. Its current maximum-entropy dependency only evaluates/bounds entropies; it cannot supply coding achievability. The Gaussian density entropy evaluation in Section 6 is derived locally. The existing standard-Borel conditional-KL chain rule can supply the chain-rule/nonnegativity interfaces.
4. The finite relay consumer is correct: use constant source/destination reconstructions. Cuts `{s}` and `{s,r}` give its two terms. Its chain-rule identity is unchanged. Remove its conditional-achievability and unresolved-prerequisite wording after integration.
5. The two-way relay consumer is correct once a destination's own message is explicitly available. For destination 2, the only separating source-containing cuts are `{1}` and `{1,r}`, with constant terminal reconstructions; destination 1 has `{2}` and `{2,r}`. There is no sum-rate cut because a separating cut excludes the destination and thus its locally known source. Remove only the stale conditional wording.
6. The Gaussian cut-gap consumer's determinant converse and comparison do not need alteration from this proof; its conditional premises and final unresolved section become unconditional after the Gaussian theorem is integrated. Its claim is a comparison of sufficient inner cuts and outer cuts, as currently worded.
7. The fixed relay quantizer example uses the general `mathcal Q={r}` expression, not just the all-node determinant lower bound. Sections 5–6 supply that expression and its achievability with constant source reconstruction. Its two computed terms and exactly half-bit comparison remain correct; remove its scope-note achievability caveat after integration.

No false mathematical claim was found in these target formulas. Interface corrections required are the undefined quantizer-set letter and explicit Gaussian destination own-message convention. The continuous claim must state actual region achievability, and the Gaussian target should explicitly take closure of its strict regions plus the zero tuple, as in the finite target. These additions state the intended richest sound conclusion rather than weakening it.
