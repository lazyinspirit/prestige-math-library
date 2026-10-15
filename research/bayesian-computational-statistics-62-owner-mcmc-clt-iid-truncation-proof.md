# Finite-moment iid vector approximation: truncation and assembly

Research only. No live items, contracts, manifests, numerical levels, hashes, gates, tests or native evidence were edited. This note proves the finite-moment reduction conditional on the exact quantitative bounded-vector coupling stated below. It does not claim that coupling's full proof has been supplied or reviewed here.

## Source and division of proof obligations

Full source obtained: A. Yu. Zaitsev (1998), *Multidimensional version of the results of Komlós, Major and Tusnády for vectors with finite exponential moments*, ESAIM Probability and Statistics 2, 41–108, <https://www.numdam.org/item/PS_1998__2__41_0.pdf>, 68 pages. The actual PDF's printed pp. 42–43 were visually checked because its extracted mathematical fonts are damaged. Definition 1.2 and Theorem 1.3, including their dependence on the parameter and truncation scale, were checked from the original rendered pages. The complete proof of the bounded coupling is assigned to the geometric-envelope sibling; its quantile ingredients are assigned separately. This note does not assert full-source proof review of those 68 pages.

There is no need to import a separate finite-moment Sakhanenko/Einmahl theorem: the elementary truncation reduction below turns the quantitative bounded-vector theorem into the required finite-$q$ iid approximation, in fixed dimension two and in every lower effective dimension.

The source defines $L(x)=\max\{1,\log x\}$. Its exact Theorem 1.3 is: for $\tau\ge1$, $\eta>0$, centered independent target distributions in $\mathcal A_d(\tau)$ with covariance $I$, construct independent copies $X_1,\ldots,X_N$ and independent centered Gaussian vectors $G_1,\ldots,G_N$ with covariance $I$ such that
$$E\exp\left\{\frac{c_1(\eta)\Delta_N}{\tau d^3 L(d)}\right\}\le\exp\left\{c_2(\eta)d^{9/4+\eta}L(N/\tau^2)\right\}.$$
Here $\Delta_N$ is the maximum of the norms of the first $k$ differences of partial sums, $1\le k\le N$; the source uses the coordinate maximum norm. In fixed dimension at most two the Euclidean norm differs by a deterministic factor at most $\sqrt2$. Fixing, for example, $\eta=1$, the theorem gives constants independent of $N$, $\tau$, and the particular distributions. That uniformity is essential. A statement that each *fixed* exponential-moment law has some unspecified asymptotic $O(\log N)$ coupling is insufficient for this reduction.

## Precisely sufficient quantitative coupling supplier

The local supplier needed for this reduction is weaker than the source's sharp exponential inequality. For each $d\in\{1,2\}$ and each $A>0$, there is a constant $C_A$ depending only on $A,d$ such that, whenever $Z$ is a centered $\mathbb R^d$ vector with covariance $I_d$ and $\|Z\|\le R$ almost surely, $R\ge1$, and $N\ge2$, there is a coupling of $N$ independent copies $Z_i$ and $N$ independent $N_d(0,I_d)$ vectors $H_i$ satisfying
$$\Pr\left(\max_{k\le N}\left\|\sum_{i=1}^k(Z_i-H_i)\right\|>C_A R[\log(eN)]^3\right)\le C_A N^{-A}.$$
The constant must be uniform in the bounded distribution, $R$ and $N$. This is the polynomial high-probability interface of the locally constructed bounded core, rather than an asserted local proof of the source's sharper $R\log N$ exponential-moment inequality. The extra logarithmic powers are harmless because the finite-moment target has polynomial slack $q>p$. The analytic-class calculation below is retained as a proved bridge to the source's formulation; the dyadic assembly needs only this displayed high-probability bound.

## Bounded standardized vectors belong to the analytic class with linear parameter

Let $EZ=0$, $EZZ^T=I_d$ and $\|Z\|\le R$ almost surely, $R\ge1$. For a complex vector $z$ use the bilinear pairing $z^TZ$ and the Hermitian Euclidean norm to bound its modulus. Set $f(z)=Ee^{z^TZ}$. For $\|z\|<1/(256R)$,
$$|f(z)-1|\le e^{1/256}-1<1/2.$$
The entire function $f$ therefore takes values in the disk of radius $1/2$ about one on this ball. Its principal logarithm $\phi=\log f$ is analytic there and $\phi(0)=0$. Boundedness of $Z$ permits differentiation under its expectation by a uniform exponential bound.

For real directions $u,v$, abbreviate the corresponding directional derivatives of $f$ by subscripts. With $e^{1/256}<2$, covariance normalization and Cauchy–Schwarz give
$$|f_u|\le2\|u\|,\quad |f_v|\le2\|v\|,\quad |f_{uv}|\le2\|u\|\|v\|,\quad |f_{vv}|\le2\|v\|^2,$$
$$|f_{uvv}|\le2R\|u\|\|v\|^2.$$
For the last bound use $|u^TZ|\le R\|u\|$ and $E(v^TZ)^2=\|v\|^2$. Since $|f|\ge1/2$, the explicit quotient formula
$$\phi_{uvv}=\frac{f_{uvv}}f-\frac{f_uf_{vv}}{f^2}-\frac{2f_vf_{uv}}{f^2}+\frac{2f_uf_v^2}{f^3}$$
implies
$$|\phi_{uvv}|\le(4R+16+32+128)\|u\|\|v\|^2\le180R\|u\|\|v\|^2.$$
Thus the definition of $\mathcal A_d(\tau)$ holds with $\tau=256R$: its covariance form is $v^TI_dv=\|v\|^2$, its analytic ball has radius $1/\tau$, and its third derivative bound is at most $\tau\|u\|\|v\|^2$. This proof is dimension independent. All constants are uniform in the truncated distribution; no density or nonlattice hypothesis is used.

## Finite-$q$ iid theorem supplied by the reduction

Let $X_1,X_2,\ldots$ be iid centered real two-dimensional vectors with
$$M_q=E\|X_1\|^q<\infty,\qquad q>p>2.$$
Let $\Sigma=EX_1X_1^T$. Conditional on the quantitative bounded coupling above, there is an extension preserving the original iid process and a sequence $G_i$ of independent $N_2(0,\Sigma)$ vectors such that
$$\max_{1\le k\le n}\left\|\sum_{i=1}^k(X_i-G_i)\right\|=O(n^{1/p}\log n)\quad\text{almost surely}.$$
In fact the proof gives $O(n^{1/a}(\log n)^3)$ for any fixed $p<a<q$, hence $o(n^{1/p})$. The weaker displayed target is retained for the intended SIP consumer. The Gaussian sequence need not be independent of $(X_i)$.

### 1. Remove singular covariance without losing an original coordinate

If $v\in\ker\Sigma$, then $E(v^TX_1)^2=0$, so $v^TX_1=0$ almost surely. Intersecting over a deterministic finite orthonormal basis of the kernel and over all integer indices gives one probability-one event on which every $X_i$ belongs to $V=\operatorname{ran}\Sigma$. If $\dim V=0$, every $X_i=0$ almost surely, and take every $G_i=0$. The approximation error is zero.

Otherwise choose a deterministic orthonormal basis of $V$ and work in its coordinates, of dimension $d=1$ or $2$. The resulting covariance, still denoted $\Sigma$, is positive definite. Write $\lambda>0$ for its smallest eigenvalue. An eventual coupling in $V$ is mapped back by the fixed isometry, preserving both norms and the covariance matrix of the original two-dimensional vectors. This handles rank one without an unjustified inverse of the original singular matrix.

### 2. Dyadic truncation and original-tail removal

Fix $a$ with $p<a<q$. For $m\ge0$, let
$$I_m=\{2^m,\ldots,2^{m+1}-1\},\quad N_m=2^m,\quad L_m=N_m^{1/a}.$$
For $i\in I_m$ put
$$\mu_m=E[X_1\mathbf1_{\{\|X_1\|\le L_m\}}],\quad W_{m,i}=X_i\mathbf1_{\{\|X_i\|\le L_m\}}-\mu_m.$$
The elementary pointwise inequality $x^s\mathbf1_{\{x>L\}}\le L^{s-q}x^q$ for $0\le s\le q$ gives
$$\Pr\left(\exists i\in I_m:\|X_i\|>L_m\right)\le M_qN_mL_m^{-q}=M_q2^{-m(q/a-1)}.$$
Because $q/a>1$, these bounds sum over $m$. First Borel–Cantelli gives a finite random block index after which there are no discarded original observations at all. On that event, for every partial block $1\le k\le N_m$,
$$\sum_{i=2^m}^{2^m+k-1}(X_i-W_{m,i})=k\mu_m.$$
Centering is controlled deterministically, since $EX_1=0$ implies
$$\|\mu_m\|\le E[\|X_1\|\mathbf1_{\{\|X_1\|>L_m\}}]\le M_qL_m^{1-q}.$$
Thus its maximum partial-block error is at most $M_qN_mL_m^{1-q}$. If $\theta_\mu=1+(1-q)/a$, then $\theta_\mu<1/a$ because $a<q$. In particular this error is $O(N_m^{1/a})$. All finitely many early tail errors contribute a single finite random constant after they have occurred.

### 3. Truncated covariances and standardized support radius

Let $\Sigma_m=EW_{m,i}W_{m,i}^T$. Exactly,
$$\Sigma-\Sigma_m=E[X_1X_1^T\mathbf1_{\{\|X_1\|>L_m\}}]+\mu_m\mu_m^T.$$
Consequently, with a deterministic finite $C$ depending on the original law and $q$,
$$\|\Sigma-\Sigma_m\|_{\mathrm{op}}\le M_qL_m^{2-q}+M_q^2L_m^{2-2q}\le C L_m^{2-q}.$$
Since $q>2$, this tends to zero. For all sufficiently large deterministic $m$, $\Sigma_m$ is positive definite with smallest eigenvalue at least $\lambda/2$, and its largest eigenvalue is uniformly bounded. On these blocks define
$$Z_{m,i}=\Sigma_m^{-1/2}W_{m,i}.$$
They are iid within the block, centered, with covariance $I_d$. Moreover $\|\mu_m\|\le E\|X_1\|<\infty$, so for large $m$,
$$\|Z_{m,i}\|\le\sqrt{2/\lambda}(L_m+E\|X_1\|)\le C_0 L_m=:R_m.$$
Increase $C_0$ if necessary so $R_m\ge1$. The preceding analytic-class calculation puts this law in $\mathcal A_d(256R_m)$. The parameter grows linearly in the cutoff, not quadratically or cubically.

### 4. The quantitative block coupling and its Borel–Cantelli rate

Apply the required bounded coupling to the $N_m$ standardized truncated variables. Denote its independent standard Gaussian coordinates in block $m$ by $H_{m,1},\ldots,H_{m,N_m}$. The Gaussian truncation-matched increments are $\widetilde G_{m,k}=\Sigma_m^{1/2}H_{m,k}$. Uniform boundedness of $\|\Sigma_m^{1/2}\|$ permits unwhitening the coupling inequality with a constant independent of $m$.

Use the polynomial coupling bound with $A=3$. Its exceptional probability on block $m$ is at most $C_3 2^{-3m}$, summable in $m$. Since $\log(eN_m)\le C(m+1)$ and $R_m\le C_0N_m^{1/a}$, first Borel–Cantelli gives, almost surely for every sufficiently large block,
$$\max_{k\le N_m}\left\|\sum_{j=1}^k(W_{m,2^m+j-1}-\widetilde G_{m,j})\right\|\le C N_m^{1/a}(m+1)^3.$$
There is no dependence on an unknown law-specific constant which could grow with $m$. The numerical constant $C$ is deterministic once the original distribution, $q,a$ and the uniform coupling theorem constants are fixed; only the eventual block index is random.

### 5. Replace changing Gaussian covariances by the fixed target covariance

Use the same $H_{m,j}$ to define $G_{m,j}=\Sigma^{1/2}H_{m,j}$. The square-root difference is Lipschitz here because both covariance matrices have eigenvalues uniformly separated from zero. For completeness, set $A=\Sigma^{1/2}$, $B=\Sigma_m^{1/2}$, $D=A-B$. The exact Sylvester identity is
$$AD+DB=\Sigma-\Sigma_m.$$
Taking Frobenius inner product with $D$ gives
$$[\lambda_{\min}(A)+\lambda_{\min}(B)]\|D\|_F^2\le\langle D,AD+DB\rangle_F\le\|D\|_F\|\Sigma-\Sigma_m\|_F.$$
If $D=0$ the desired bound is immediate; otherwise divide by $\|D\|_F$. Fixed dimension and the uniform positive lower eigenvalue give
$$\|\Sigma^{1/2}-\Sigma_m^{1/2}\|_{\mathrm{op}}\le C\|\Sigma-\Sigma_m\|_{\mathrm{op}}\le C L_m^{2-q}.$$
No invalid global Lipschitz assertion at zero eigenvalues is being used; those directions were removed in step 1.

Put $D_m=\Sigma^{1/2}-\Sigma_m^{1/2}$. Each coordinate of $\sum_{j=1}^kD_mH_{m,j}$ is centered Gaussian with variance at most $N_m\|D_m\|_{\mathrm{op}}^2$ for $k\le N_m$. The elementary normal tail bound and a union bound over $dN_m$ coordinates/times therefore give, for sufficiently large fixed $C_1$,
$$\Pr\left(\max_{k\le N_m}\left\|\sum_{j=1}^kD_mH_{m,j}\right\|>C_1\|D_m\|_{\mathrm{op}}\sqrt{N_m(m+1)}\right)\le C_2e^{-2(m+1)}.$$
For example, a Euclidean norm exceeding $t$ forces some coordinate to exceed $t/\sqrt d$; the union bound is $2d2^m\exp[-C_1^2(m+1)/(2d)]$, which has the claimed summable bound upon increasing $C_1$. If $D_m=0$, this error is identically zero and no division is needed.

Another first Borel–Cantelli application gives an eventual almost-sure error
$$O\left(N_m^{1/2}L_m^{2-q}\sqrt{m+1}\right)=O\left(N_m^{\theta_G}\sqrt{m+1}\right),\qquad\theta_G=\frac12+\frac{2-q}{a}.$$
Since $a<q$ and $q>2$, also $a<2(q-1)$, so $\theta_G<1/a$. This term is $O(N_m^{1/a}(m+1))$ and in fact strictly smaller by a polynomial factor. This proves the Gaussian-variance correction with all maximal and probability estimates explicit.

### 6. Coupling on all blocks and on the original probability space

The finite block theorem may initially construct a new copy of the bounded block instead of retaining the given $W_{m,i}$. This distinction must be addressed. For each $m$, its joint coupling law is a probability on two finite-dimensional Euclidean spaces: the truncated block and its Gaussian block. The already-published local `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` supplies a probability kernel $K_m(w,dh)$ giving the conditional Gaussian-block law given the bounded block. This is an existing proved local supplier under AC, not a new unproved coupling theorem.

Evaluate $K_m$ at the actually given $W_m$. On an extension of the original space, take the countable conditional product of these block kernels. The published local `thm-ionescu-tulcea-construction-of-a-markov-chain` applies with initial coordinate the entire original probability space $(\Omega,\mathcal F,P)$ and subsequent coordinate the finite-dimensional Gaussian block space; its next-coordinate kernel is $K_m(W_m(\omega),\cdot)$, independent of previously appended Gaussian coordinates. It allows arbitrary measurable initial spaces and history-dependent supplied kernels under AC. Its finite-dimensional rectangle rule is
$$\widetilde P(d\omega,dh_0\cdots dh_M)=P(d\omega)\prod_{m=0}^M K_m(W_m(\omega),dh_m).$$
Its finite-dimensional marginals are consistent, and the countable product extension preserves $P$ as the original marginal. Because the original blocks $W_m$ are independent, integrating rectangles factors over $m$. Hence the unconditional joint block laws are exactly the products of the original finite block couplings. In particular the Gaussian increments in all blocks together are independent, with each standardized increment $N_d(0,I_d)$. The coupling estimates and all preceding Borel–Cantelli arguments are retained. The finitely many early blocks before covariance invertibility can use independent Gaussian blocks; their total partial-sum error is a finite random constant.

There is also an explicit way to construct a law-copy of the original variables after coupling truncated blocks: write $W=X\mathbf1_{\{\|X\|\le L\}}-\mu$. On $W\ne-\mu$, recover $X=W+\mu$. On $W=-\mu$, sample independently from the original $X$ law conditioned on $\{\|X\|>L\}\cup\{X=0\}$, with an arbitrary rule on a zero-probability conditioning branch. This restores iid original variables and the correct joint truncation relationship, using independent residual draws for coordinates and blocks. However, a law-copy alone does not literally preserve an already supplied process on its original space; the disintegration extension above supplies that stronger formulation. Neither route requires a density for $X$ or for its truncation.

### 7. Assemble block maxima into the global rate

On the intersection of the probability-one events in steps 2, 4 and 5, the maximum partial-sum difference in block $m$ is at most $C(\omega)2^{m/a}(m+1)^3$ for all blocks, after absorbing the finitely many initial errors into a finite random constant. For $2^M\le n<2^{M+1}$, triangle inequality bounds the global maximum through time $n$ by
$$C(\omega)\sum_{m=0}^M2^{m/a}(m+1)^3\le C_aC(\omega)2^{M/a}(M+1)^3.$$
The last bound follows by replacing $(m+1)^3$ by $(M+1)^3$ and summing the geometric progression. Since $2^M\le n$ and $M+1=O(\log(en))$, the error is $O(n^{1/a}[\log(en)]^3)$ almost surely. As $1/a<1/p$, this is $o(n^{1/p})$, hence also the requested $O(n^{1/p}\log n)$ for $n\ge2$.

All uses of Borel–Cantelli are first-lemma uses with summable explicit probabilities. Independence between error events for different blocks is not required. Independence of Gaussian increments across blocks is established separately in step 6, rather than inferred from the probability estimates.

### 8. If a continuous Brownian process is required

The result above gives independent Gaussian increments of covariance $\Sigma$. In the effective dimension, the independent standardized increments $H_i$ can be interpolated by independent standard Brownian bridges $\beta_i$ on $[0,1]$, independent of all existing variables, using
$$W(k+t)=\sum_{i=1}^kH_i+tH_{k+1}+\beta_{k+1}(t),\qquad k\ge0,\quad0\le t\le1.$$
Here a bridge can be made explicitly from an independent Brownian motion $B_i$ by $\beta_i(t)=B_i(t)-tB_i(1)$. Its covariance is $\min(s,t)-st$ and it is centered Gaussian with zero endpoints. The resulting $W$ is continuous at all integer boundaries, is centered Gaussian, and has covariance $\min(s,t)I_d$ by direct calculation within and between intervals. Thus it is standard Brownian motion by the local Gaussian-covariance/increment equivalence. Multiplying by the fixed covariance square root and mapping back to the original two coordinates gives a Brownian process with covariance $\Sigma$ and the constructed partial sums at integer times. Additional Brownian coordinates can be adjoined in covariance-kernel directions if a standard two-dimensional driver is desired; their multiplication by $\Sigma^{1/2}$ gives zero.

This interpolation uses only the existing Brownian existence, Gaussian independence and covariance-characterization suppliers. It imposes no independence of the final Brownian motion from the original iid variables.

## Status and exact unresolved obligation

The truncation, analytic-class membership, finite-tail removal, centering, covariance correction, dyadic assembly, singular-covariance treatment and original-process extension are complete conditional on the precise uniform bounded coupling in this note. They do not need a finite-$q$ theorem as an external logical premise. The bounded-core siblings have now authored a selected-law local construction with the weaker polynomial high-probability $R(\log N)^3$ interface displayed above. The finite-moment helper must consume that exact local interface, rather than import the source-sharp exponential-moment claim. Its completed carrier and independent review remain owner integration obligations; the downstream Markov/regenerative SIP still needs its separate regeneration and variance-identification proofs.

Separately, the Markov reduction must justify genuine iid full-tour vectors or supply an appropriate alternative for one-dependent tours, their spare $q>p$ moments, exponential regeneration-length control and covariance identification under the target's exact chain hypotheses. The present note supplies none of those facts by assumption-free analogy. In particular the currently permitted minorization $s\equiv0$ is not itself usable regeneration data. Those obligations remain with the SIP/regeneration owner; no OBM theorem completion is claimed.
