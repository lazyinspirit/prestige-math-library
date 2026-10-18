# r4 findings: lossy source coding, rate-distortion, and quantization

This is source research and a scoped proof handoff for the information-theory scaffold. It records what the complete sources prove, what assumptions they use, what I supply with a local finite-alphabet argument, and where an item still needs a separate proof. The source files and read extents are in `source-manifest.json` and `reading-ledger.json`; existing library suppliers are in `supplier-map.json`.

## Source authority and source limits

Robert M. Gray's *Source Coding Theory* is the principal comprehensive source. I read the full 197-page author-hosted PDF, including the complete bibliography and index, with the scan's equation gaps addressed by OCR and visual page checks. It is the 1990 first edition, digitally duplicated in the author-hosted 2001 sixth printing. Its contents match the lane: information sources; code, rate, distortion and information; process source-coding converses and achievability; finite and continuous rate-distortion calculations; high-rate quantization; and uniform-quantizer noise.

Gray is candid about rigor: the preface calls this an engineering survey rather than a mathematics text and admits that some mathematical detail is treated “cavalierly.” It refers continuous variational proofs to Csiszár. It also explicitly declines to prove convergence of the finite-alphabet Blahut algorithm (§4.4), and Chapter 5 calls the high-rate analysis less rigorous. These limitations matter: the theorem statements below preserve the conditions actually supplied, and the BA proof below is independent rather than attributed to Gray.

MIT OCW 6.441 Spring 2016 Chapters 23–25 provide a complete short proof sequence for finite-block lossy coding, i.i.d. rate-distortion achievability, Gaussian and Bernoulli examples, and lossy source-channel separation. The complete Wyner–Ziv paper supplies the finite-alphabet decoder-only-side-information theorem; the complete Equitz–Cover paper supplies the two-stage successive-refinement criterion and examples. They are supplements, not evidence that arbitrary alphabets or distortion criteria satisfy the same theorems.

## Models and definitions to use

For a finite source alphabet \(\mathcal X\), finite reproduction alphabet \(\widehat{\mathcal X}\), source pmf \(p\), and nonnegative finite single-letter distortion \(d:\mathcal X\times\widehat{\mathcal X}\to[0,\infty)\), a stochastic test channel is a row-stochastic kernel \(W(\hat x\mid x)\). Its average distortion and mutual information are

\[
\bar d(p,W)=\sum_{x,\hat x}p(x)W(\hat x\mid x)d(x,\hat x),\qquad
I(p,W)=\sum_{x,\hat x}p(x)W(\hat x\mid x)\log_2\frac{W(\hat x\mid x)}{p_{\widehat X}(\hat x)},
\]

with zero-mass summands set to zero. Equivalently, \(I(X;\widehat X)=D(P_{X\widehat X}\Vert P_X\otimes P_{\widehat X})\). The finite-alphabet rate-distortion function is

\[
R(D)=\min_{W:\bar d(p,W)\le D} I(p,W).
\]

Use base-2 logarithms for rates in bits. On standard Borel alphabets the definition becomes an infimum over probability kernels and the joint-law KL definition is the safe measure-level definition; density formulas require actual densities. For extended nonnegative distortions, \(\mathbb E d\) is an extended integral and feasibility/finite-rate must be established separately.

An \((n,M)\) fixed-length block source code consists of an encoder \(f:\mathcal X^n\to[M]\) and a decoder \(g:[M]\to\widehat{\mathcal X}^n\). Its rate is \(n^{-1}\log_2 M\); under separable distortion \(d_n(x^n,\hat x^n)=n^{-1}\sum_i d(x_i,\hat x_i)\), expected-distortion and excess-distortion performance are different criteria. Do not replace one by the other. A vector quantizer is a block code whose encoder selects a minimum-distortion codeword from a finite reproduction codebook; a deterministic tie rule makes the encoder a function. For Euclidean squared error, cells are Voronoi cells. A fixed-rate code with \(M\) cells costs \(\log_2 M\) bits per block; if an entropy coder follows the quantizer, the first-order rate quantity is instead \(H(q(X))\), and the two constraints are not identical.

For finite alphabets, let \(D_{\min}=\min_W\bar d(p,W)\) and \(D_{\max}=\min_{\hat x}\sum_xp(x)d(x,\hat x)\). The feasible set is a closed subset of the compact product of row simplices. Mutual information is continuous there (finite entropy formula), so the minimum is attained whenever \(D\ge D_{\min}\). At \(D\ge D_{\max}\), a constant reproduction has zero mutual information, so \(R(D)=0\). If \(d(x,\hat x)=0\) exactly on the diagonal and \(D=0\), the only feasible channel reproduces \(X\) exactly and \(R(0)=H(X)\). Mixing test channels proves convexity of \(R(D)\): distortion mixes linearly and mutual information is convex in the channel by finite log-sum. Monotonicity is immediate from nested feasible sets. Endpoint continuity is not automatic; the finite-dimensional optimization is the safe attainment scope.

For a general Borel source, use \(R(D)=\inf_{W:\mathbb E d\le D}I(X;\widehat X)\), but do not claim a minimizing kernel without an existence proof. A sufficient proof route is tightness/relative compactness of the feasible joint laws (from compact reproduction space or distortion coercivity), a closed fixed-source marginal constraint, lower semicontinuity of distortion and mutual information, and a finite feasible point. None of this follows merely from writing an integral in place of a finite sum.

Gray's process formulation also distinguishes the \(N\)-th order distortion-rate function \(D_N(R)\) from a process limit. For a stationary process with additive distortion, one takes \(N^{-1}D_N(R)\) at the corresponding block rate and defines the process distortion-rate function only when the limit exists. The converse additionally assumes a well-defined limiting distortion-rate function, well-defined average distortion, and finite decoder delay. Those conditions belong in the statement, not in a footnote after a general claim.

## Finite-alphabet operational theorem and proof route

For an i.i.d. finite-alphabet source and finite separable distortion, the information converse is single-letter. Any \((n,M)\) code induces \(X^n\to W\to\widehat X^n\), hence

\[
\log_2 M\ge I(X^n;\widehat X^n)\ge \sum_{i=1}^n I(X_i;\widehat X_i)
\ge \sum_i R(\mathbb E d(X_i,\widehat X_i))
\ge nR(\mathbb E d_n(X^n,\widehat X^n)).
\]

The second step uses independence of the source coordinates and the entropy chain rule; the third uses the one-letter definition; the last uses convexity and monotonicity. MIT OCW §24.1 proves this single-letterization and the general code converse. Thus any operational expected-distortion code obeys the information lower bound.

For achievability, MIT OCW Theorem 24.3 gives a useful finite-block bound. Given a source law \(P_X\), a test channel \(P_{Y\mid X}\), nonnegative measurable distortion, default reproduction \(y_0\), \(M\in\mathbb N\), and \(\gamma>0\), random independent codewords drawn from \(P_Y\) plus the default codeword yield a deterministic code with

\[
\mathbb E d(X,\widehat X)\le \mathbb E d(X,Y)+\mathbb E d(X,y_0)e^{-M/\gamma}
+\mathbb E\big[d(X,y_0)\mathbf1\{i(X;Y)>\log\gamma\}\big],
\]

where all logarithms in that display use the same base as the information density and the exponential is interpreted consistently. Its proof uses the layer-cake formula, independent-codeword failure probability, and the change-of-measure identity for information density. For i.i.d. repetitions, choose \(\log M\) just above \(nI(X;Y)\), \(\log\gamma\) between them, and a test channel whose distortion is strictly below the target. The information-density law of large numbers makes the tail event rare. If the default distortion has finite mean, the averages of its i.i.d. copies are uniformly integrable, so the tail expectation vanishes. This proves the fixed-length expected-distortion theorem for i.i.d. sources whenever \(D>D_0:=\inf\{D:R(D)<\infty\}\) and a finite default distortion \(D_{\max}<\infty\) is available. Finite alphabets with finite distortion satisfy these conditions automatically. The information converse plus this random-code existence proof gives operational \(R_{op}(D)=R(D)\) in that regime. The construction is nonconstructive and is not a polynomial-time encoder/decoder algorithm.

MIT OCW Theorem 24.4 separately gives an excess-distortion bound, with a tail term for \(\{d(X,Y)>D\}\) and a term for large information density. Keep its probability criterion separate from expected distortion. For stationary ergodic sources, Gray §3.4 proves a block-code achievability result under bounded additive single-letter distortion and a process-approximation lemma; Gray does not prove that lemma in full generality there. Gray's converse in §3.2 permits broader source/code classes only under its limiting-DRF, finite-delay, and well-defined-average-distortion premises. Do not cite the stationary-ergodic bounded-distortion theorem as a proof for unbounded MSE.

## Finite-alphabet Blahut rate-distortion algorithm: complete proof

This fills the explicit proof gap in Gray §4.4. Assume finite nonempty \(\mathcal X,\widehat{\mathcal X}\), remove zero-probability source symbols so \(p_i>0\), take finite \(d_{ij}\ge0\), and fix finite \(\beta\ge0\). Use natural logarithms in this section and put \(c_{ij}=e^{-\beta d_{ij}}>0\). For an output pmf \(q\), define

\[
Z_i(q)=\sum_jq_jc_{ij},\quad F(q)=-\sum_i p_i\ln Z_i(q),\quad
g_j(q)=\sum_i p_i\frac{c_{ij}}{Z_i(q)},\quad
W^q(j\mid i)=\frac{q_jc_{ij}}{Z_i(q)}.
\]

For a channel \(W\) and its output pmf \(r_j=\sum_i p_iW(j\mid i)\), set \(J_\beta(W)=I(p,W)+\beta\bar d(p,W)\), in nats. Direct expansion gives

\[
G(W,q):=\sum_i p_iD\!\left(W(\cdot\mid i)\middle\|\frac{q_jc_{ij}}{Z_i(q)}\right)
=J_\beta(W)+D(r\|q)=F(q)+\sum_i p_iD(W(\cdot\mid i)\|W^q(\cdot\mid i)).
\]

The finite KL terms use the usual support convention; if \(q_j=0\), the corresponding channel coordinate must be zero for finite \(G\). Thus for fixed \(q\), \(W^q\) minimizes \(G\); for fixed \(W\), \(q=r\) minimizes it. Minimizing over the compact channel product and the output simplex in either order shows \(J_\beta^*:=\min_WJ_\beta(W)=\min_qF(q)\); both minima exist because \(F\) is continuous on the simplex (\(Z_i(q)\ge\min_jc_{ij}>0\)) and \(J_\beta\) is continuous on the finite channel product.

Start at any full-support \(q^0\). Iterate

\[
W^t(j\mid i)=W^{q^t}(j\mid i),\qquad q^{t+1}_j=r_{W^t}(j)=q^t_jg_j(q^t).
\]

Since \(\sum_jq_jg_j(q)=1\) and all \(c_{ij},p_i,q_j\) are positive, this is a pmf and stays full support. The auxiliary identity yields the genuine descent estimate

\[
F(q_t)-F(q_{t+1})\ge D(q_{t+1}\|q_t)\ge0.
\]

For global convergence, choose any minimizer \(q^*\) of \(F\). Differentiation gives \(\partial_jF(q)=-g_j(q)\); the simplex KKT conditions give \(g_j(q^*)=1\) on the support of \(q^*\), with \(g_j(q^*)\le1\) off the support. For each active \(j\), the weights \(a_{ij}=p_ic_{ij}/Z_i(q^*)\) sum to one, and

\[
g_j(q_t)=\sum_i a_{ij}\frac{Z_i(q^*)}{Z_i(q_t)}.
\]

Concavity of \(\ln\), followed by \(\sum_j q_j^*a_{ij}=p_i\), proves

\[
D(q^*\|q_t)-D(q^*\|q_{t+1})
=\sum_jq_j^*\ln g_j(q_t)
\ge\sum_i p_i\ln\frac{Z_i(q^*)}{Z_i(q_t)}
=F(q_t)-F(q^*).
\]

Telescoping and nonnegativity of KL show \(\sum_{s=0}^{t}(F(q_s)-F^*)\le D(q^*\|q_0)\). Since \(F(q_t)\) is nonincreasing,

\[
0\le F(q_t)-F^*\le\frac{D(q^*\|q_0)}{t+1}.
\]

For uniform \(q_0\), the bound is at most \(\ln|\widehat{\mathcal X}|/(T+1)\). This is a global objective guarantee even when an optimizer lies on the simplex boundary; it does not claim that \(q_t\) itself converges to one particular optimizer.

There is also a computable a-posteriori certificate. Put \(\gamma(q)=\max(1,\max_jg_j(q))\). For a minimizing \(q^*\), Jensen gives

\[
F(q)-F^*=\sum_i p_i\ln\frac{Z_i(q^*)}{Z_i(q)}
\le\ln\sum_i p_i\frac{Z_i(q^*)}{Z_i(q)}
=\ln\sum_jq_j^*g_j(q)\le\ln\gamma(q).
\]

The actual channel iterate satisfies \(J_\beta(W^q)=F(q)-D(r_{W^q}\|q)\le F(q)\), and of course \(J_\beta(W^q)\ge J_\beta^*\), so its objective gap is at most \(\ln\gamma(q)\). This also proves finite termination of the certificate rule: the explicit global gap bound makes \(F(q_t)\to F^*\); by compactness every cluster point minimizes \(F\), and the KKT conditions give \(\gamma=1\) at every minimizer. The continuous function \(\gamma\) therefore tends to one along the iterates, so every positive tolerance is eventually certified.

Each exact-real iteration costs \(O(|\mathcal X||\widehat{\mathcal X}|)\) arithmetic operations. Uniform initialization gives an explicit \(O(|\mathcal X||\widehat{\mathcal X}|\,\ln|\widehat{\mathcal X}|/\varepsilon)\) iteration-arithmetic bound for \(\varepsilon\)-optimal Lagrangian objective in nats. A separate bound based on \(\ln\gamma\) is an a-posteriori stopping certificate. This is not a bit-complexity bound for transcendental arithmetic: a real implementation must use log-sum-exp and outward-rounded enclosures for exponentials, sums, and logarithms, and declare success only when the enclosure proves the objective-gap bound is below tolerance. The theorem covers finite \(\beta\) and finite distortion entries; it does not silently include \(+\infty\) costs, general alphabets, or exact inversion of the Lagrange parameter to a requested distortion. Sweeping \(\beta\) yields supported points; a requested distortion at a corner/flat segment may require a separate convex interpolation/one-dimensional search argument.

## Continuous alphabets, Gaussian formulas, and water-filling

For general standard-Borel source/reproduction spaces, the measure-safe information RDF is \(\inf_W D(P_{X\widehat X}\|P_X\otimes P_{\widehat X})\) under \(\mathbb E d\le D\). Gray §4.5 writes the continuous Blahut variational equations in density form and expressly refers rigorous proofs to Csiszár. Its formal integral analogues require a testable support/integrability contract: a.e. positive normalizers \(\int q(d\hat x)e^{-\beta d(x,\hat x)}\), finite log-normalizer expectation, finite candidate mutual information/distortion, measurability, and existence/compactness if a minimum is claimed. No finite-alphabet BA convergence proof automatically extends to this space.

For a real scalar Gaussian \(X\sim N(0,\sigma^2)\) with squared error, MIT OCW §25.1.2 proves

\[
R(D)=\tfrac12\log_2^+(\sigma^2/D),\qquad D>0,
\]

where \(\log^+u=\max(0,\log u)\); for \(D=0\) the rate is infinite. For \(0<D<\sigma^2\), an attaining joint Gaussian pair has \(X=\widehat X+Z\), independent \(\widehat X\sim N(0,\sigma^2-D)\), \(Z\sim N(0,D)\); its forward kernel is \(\widehat X\mid X\sim N(((\sigma^2-D)/\sigma^2)X, D(\sigma^2-D)/\sigma^2)\). For \(D\ge\sigma^2\), constant zero reproduction suffices. The converse uses the Gaussian KL/maximum-entropy bound. MIT §25.1.2 also gives, for a mean-zero variance-\(\sigma^2\) source with finite divergence to \(N(0,\sigma^2)\),

\[
\tfrac12\log_2(\sigma^2/D)-D_2(P_X\|N(0,\sigma^2))\le R(D)\le\tfrac12\log_2(\sigma^2/D),
\]

in the positive-rate region (with the corresponding positive-part/zero-rate interpretation), and the Shannon lower-bound asymptotic is tight up to \(o(1)\) as \(D\downarrow0\) under that finite-divergence condition. Differential entropy identities require their own finiteness assumptions; a differential-entropy expression is not a definition for arbitrary laws.

For a finite-dimensional Gaussian vector with covariance eigenvalues \(\lambda_1,\ldots,\lambda_m\), squared-error total distortion, and no cost constraints on the reproduction, diagonalizing the covariance reduces the information optimization to independent scalar Gaussian coordinates. The exact vector formula is

\[
R_X(D)=\min_{d_i\in[0,\lambda_i],\,\sum_i d_i\le D}\frac12\sum_i\log_2(\lambda_i/d_i)
=\frac12\sum_i\log_2^+(\lambda_i/\theta),
\quad D=\sum_i\min(\lambda_i,\theta).
\]

The second equality follows from convex KKT allocation; coordinates below the common water level \(\theta\) receive zero rate. For per-coordinate distortion divide both total distortion and rate by \(m\). Gray supplies the vector Gaussian Shannon lower bound and points to Berger/Gallager for the exact Gaussian-process result; it does not prove stationary-process reverse water-filling. A safe sufficient regime for a process derivation is a stationary Gaussian source with bounded spectral density \(S(f)\), normalized so \(\int_{-1/2}^{1/2}S(f)df=\mathbb E X_0^2\), together with a stated Toeplitz eigenvalue-distribution theorem and the operational/source-limit argument. In that regime the usual candidate formula is

\[
R(D)=\frac12\int_{-1/2}^{1/2}\log_2^+\!\frac{S(f)}{\theta}\,df,
\qquad D=\int_{-1/2}^{1/2}\min(S(f),\theta)\,df.
\]

Do not attribute this derivation to Gray's explicit proofs, or silently promote the simpler Shannon lower bound \(\frac12\log(\sigma_{\rm pred}^2/D)\) based on prediction-error variance to the exact process RDF. The bounded-spectrum assumption is sufficient for a clean Toeplitz-limit route; more general spectra require separate control of unbounded test functions and the exact source-coding operational limit.

## Quantizers, computational procedures, and high-rate assumptions

Given a finite reproduction codebook, Gray's §3.4.1 proves that a minimum-distortion/nearest-neighbor encoder is optimal for that codebook. Under squared error and a fixed partition into cells of positive probability and finite second moment, the conditional mean minimizes the cell distortion. Alternating nearest-neighbor assignment and centroid update therefore never increases distortion. This Lloyd/Lloyd–Max monotonicity does not imply global optimality. For finite data there are finitely many assignments. If the algorithm keeps tied points in their current cells and handles empty cells without accepting an equal-cost reassignment, every changed assignment strictly lowers distortion; it therefore terminates at a coordinatewise local optimum after finitely many assignments. Without these tie/empty-cell rules the general statement is only monotone distortion, not finite termination. For continuous laws the distortion can decrease through infinitely many steps; the usual guarantee is limit/stationarity under extra compactness and regularity, not finite termination. There can be multiple locally optimal quantizers.

For a fixed finite-state decoder trellis and additive block distortion, Gray §3.7's Viterbi recurrence keeps the minimum cumulative cost to every state at each time. Induction on time proves that any globally optimal path to a state extends a minimum-cost path to its predecessor; selecting the minimum final-state cost therefore gives a global minimum-cost path. With \(|S|\) states, \(|E|\) directed trellis edges, and block length \(L\), dynamic programming uses \(O(L|E|)\) cost comparisons/additions (plus \(O(L|E|)\) traceback storage, reducible with checkpointing). It is not an algorithm for optimizing over all possible trellis decoders.

Gray Ch. 5 and MIT OCW §23 use a high-rate/fine-quantization approximation. Its prerequisites must travel with every formula: fixed dimension \(k\); source density smooth enough to be nearly constant on small cells; cell diameters tending to zero; a cell-shape/reproduction-density asymptotic; distortion of seminorm/rth-power type in the stated results; and overload-region probability and distortion negligible relative to granular distortion. For a quantizer with \(N\) codepoints and asymptotic point density \(\lambda\), local-cell analysis gives a granular distortion approximation proportional to

\[
N^{-r/k}\int f(x)\lambda(x)^{-r/k}dx,
\]

for \(r\)-th-power seminorm distortion, with the shape constant depending on the cell geometry. Under those assumptions, optimizing the point density gives \(\lambda(x)\propto f(x)^{k/(k+r)}\); Gray's equivalent-sphere argument supplies an asymptotic lower bound, not a universal exactly achievable finite-\(N\) value because spheres do not tile space. In the scalar squared-error case the familiar granular formula is \(D_N\sim (12N^2)^{-1}(\int f^{1/3})^3\) when the hypotheses and negligible overload condition hold. Unbounded-support sources need clipping/overload analysis; small cell width alone does not dispose of overload.

Under the same smooth/fine-cell assumptions, Gray's entropy approximation is \(H(q(X))\approx h(X)-\mathbb E\log_2(1/(N\lambda(X)))=h(X)+\mathbb E\log_2(N\lambda(X))\), after expressing the local cell volume as \(1/(N\lambda(X))\). For uniform scalar step \(\Delta\), this specializes to \(H(q_\Delta(X))\approx h(X)-\log_2\Delta\). These are asymptotics; entropy of a quantizer output and a fixed \(\log N\) code rate are distinct constraints.

The additive-white-quantization-noise story is also conditional. Gray Chs. 5–6 distinguish granular error from overload and list smooth joint density, small cells, many levels, and no overload as conditions behind the approximation. For a deterministic sinusoidal input to a uniform quantizer, the error can have a discrete line spectrum rather than white spectrum; for dc the error is constant. Conversely, a dither whose characteristic function vanishes at the nonzero integer multiples of \(2\pi/\Delta\), with no overload, yields the stated signal-independent marginal error; a uniform one-step dither also gives white error in Gray's setup. Do not conclude “white” merely from a uniform marginal or from matching second moments.

## Side information and successive refinement

When side information \(Y\) is known at both encoder and decoder, the conditional rate-distortion function is

\[
R_{X\mid Y}(D)=\inf_{P_{\widehat X\mid X,Y}:\,\mathbb E d(X,\widehat X)\le D} I(X;\widehat X\mid Y).
\]

This is not the decoder-only Wyner–Ziv problem. Wyner–Ziv (1976) assumes finite \(\mathcal X,\mathcal Y,\widehat{\mathcal X}\), i.i.d. pairs \((X_i,Y_i)\), encoder observes \(X^n\) only, decoder observes the message and \(Y^n\), nonnegative finite \(d(x,\hat x)\) independent of \(Y\), fixed-length blocks, and expected average distortion. Its theorem is

\[
R_{WZ}(D)=\min_{P_{U\mid X},\,g:\,\mathbb E d(X,g(Y,U))\le D}
[I(X;U)-I(Y;U)] = \min I(X;U\mid Y),\qquad U-X-Y,
\]

with a finite auxiliary alphabet; the paper's appendix gives \(|\mathcal U|\le |\mathcal X|+1\). The proof uses a single-letter converse with a block auxiliary, convexity, random binning/Slepian–Wolf coding for achievability, and continuity at zero distortion. At zero distortion with reproduction \(X\), the rate is \(H(X\mid Y)\). For positive distortion, decoder-only side information usually costs more than side information at both terminals; equality requires an additional condition and is not general. The original theorem does not automatically cover a distortion \(d(x,\hat x,y)\) that depends on \(Y\), nor general continuous variables; either statement needs a new proof/source.

Equitz–Cover (1991) treats two-stage refinement of an i.i.d. source under a common per-letter distortion criterion. Let \(D_1\ge D_2\), with coarse reconstruction \(\widehat X_1\) at rate \(R(D_1)\) and fine reconstruction \(\widehat X_2\) at total rate \(R(D_2)\). Their necessary-and-sufficient criterion is that there exist individually rate-distortion-optimal test channels at both distortions whose joint law can be coupled to satisfy

\[
X\longrightarrow\widehat X_2\longrightarrow\widehat X_1.
\]

The condition is existence of a compatible pair of optimizers; it does not say every optimal pair is compatible. The proof uses the no-excess-rate multiple-description region, expands the information inequalities, and forces the excess mutual informations to zero; random nested codebooks give achievability. This is an asymptotic block-code statement; finite practical tree encoders need not achieve the limit. The paper proves successively refinable examples (arbitrary finite alphabet with Hamming distortion, memoryless Gaussian with squared error, Laplacian with absolute error) and gives a finite ternary absolute-error counterexample, so successive refinement is not automatic.

## Lossy source-channel separation

For an i.i.d. source and a discrete memoryless channel, let \(\rho\) be channel uses per source symbol and \(C\) the channel capacity in matching bits per channel use. The converse is

\[
\rho^*(D)\ge R(D)/C,
\]

by the code Markov chain, data processing, the source information-RDF converse, and the memoryless channel capacity bound. The achievability \(\rho^*(D)=R(D)/C\) in MIT OCW Theorem 25.4 assumes stationary memoryless source, separable distortion, and a stationary memoryless channel. It concatenates a lossy source code with a channel code of maximum (not merely average) error probability because source-compressor outputs need not be uniform. For bounded distortion (in particular finite alphabets and finite distortion), the channel error contribution vanishes immediately. The source note gives the more general condition A1: centers \(a_0,\hat a_0\) and \(\lambda<\infty\) with (i) generalized triangle \(d(a,\hat a)\le\lambda[d(a,\hat a_0)+d(a_0,\hat a)]\), (ii) finite \(\mathbb E d(S,\hat a_0)\), (iii) finite \(\mathbb E d(a_0,\widehat S)\) for an RD-achieving output law at the operating distortion, and (iv) finite center distortion. A source/channel with a cost constraint requires the cost-constrained capacity theorem and admissible channel-code cost; it is not covered by the unconstrained DMC statement. If \(C=0\), the quotient formula is interpreted only after separating the trivial zero-rate distortions from positive-rate demands.

## Local library supplier audit and build implications

The information-theory category is currently a stub; there is no published local classical rate-distortion, lossy-code, quantizer, source-channel separation, Wyner–Ziv, or successive-refinement item. Existing published foundations that can be cited for their exact narrow scopes include probability measures and standard Borel spaces; probability kernels and standard-Borel disintegration; law-level KL, its nonnegativity/equality case; finite Jensen; differentiable convex gradient inequalities; and the uniform-integrability convergence theorem. The published finite entropy/stochastic-matrix QA item is finite-only and the finite-hypothesis MI item assumes a uniform hypothesis prior; neither is a general Shannon information supplier.

No current supplier proves general entropy/conditional-entropy chain rules, general MI data processing, finite-alphabet rate-distortion existence or operational equivalence, KL joint convexity/lower semicontinuity on optimization domains, BA convergence, or the high-rate quantizer limits. The BA proof above supplies the necessary finite update/convergence/certificate argument locally. A future finite-alphabet information layer should prove entropy chain rules, log-sum/Jensen, mutual-information convexity and channel DPI itself or adopt an exact published general supplier. A broader standard-Borel layer additionally needs conditional-law versions, KL chain rules and DPI, lower semicontinuity/compactness, and an existence theorem. Do not cite quantum trace-distance DPI as classical MI DPI, and do not use the specialized exponential-loss KL update as a generic alternating-projection theorem.


## Exact scalar quadratic-Gaussian two-encoder region

The WTV exact region is now accompanied by a local proof note at researchers/r4/wtv-gaussian-two-encoder-proof-notes.md. Its scope is two scalar unit-variance jointly Gaussian observations with correlation \(0<\rho<1\), two separate encoders, one joint decoder, positive per-coordinate expected-MSE targets, and the closure of fixed-length finite-message codes. The note states both scalar face bounds and the exact sum-rate bound with
\[
\beta(d_1,d_2)=1+\sqrt{1+\frac{4\rho^2d_1d_2}{(1-\rho^2)^2}}.
\]
It identifies the Gaussian product test channel \(U_j=Y_j+Q_j\), computes its posterior error covariance and all three Berger–Tung mutual-information constraints, and reduces continuous Gaussian achievability to finite-alphabet coding by clipped source grids and finite output partitions, with weighted cross-moment convergence and an explicit \(L^2\) tail-error bound.

The original WTV converse couples a weighted source sum to a Gaussian CEO problem and cites prior CEO work for the key inequality. The local note proves the missing CEO step for arbitrary finite block encoders: message-likelihood Fisher information is bounded by conditional message entropy using the Gaussian score formula and maximum-entropy bound; the two Fisher matrices add given the latent Gaussian; integration by parts proves the Bayesian Cramér–Rao matrix inequality; and convexity of \(u\mapsto(1+u)^{-1}\) gives
\[
\delta\ge\left[1+\sum_j\operatorname{snr}_j(1-2^{-2r_j})\right]^{-1}.
\]
The note then proves the supporting-\(\mu\) optimizer directly from the off-diagonal inverse identity, combines it with the centralized error-covariance determinant bound, and derives the \(\beta\) formula. It also proves the scalar-face Gaussian-summand entropy-power inequality locally: the heat equation and integration by parts give de Bruijn’s identity for Gaussian-dominated finite-message posteriors; score conditioning and Jensen give reciprocal Fisher information; a large-noise entropy squeeze gives the entropy-Fisher inequality; and relative-entropy contraction/lower semicontinuity justify the epsilon-smoothing limit. The exact test-channel region is proved by explicit boundary channels and the distortion-diagonal case split; no finite-alphabet coding theorem is assumed for a continuous Gaussian source.

r4 read the relevant WTV proof text consecutively: §2 model/Theorem 1, §3 direct test channels, §§4-5 converse, and Appendices B-E, including the paper's CEO appeal and its supporting-\(\mu\)/achievability arguments. The r5 lane remains the reader of the entire 55-page preprint; this focused reread does not claim a second full-paper read. The source itself presents §3 achievability only at high level and imports the CEO characterization. The local note supplies those missing proof details for the stated scalar model; it makes no claim for vector Gaussian sources, arbitrary numbers of terminals, zero distortion, or excess-distortion criteria.
