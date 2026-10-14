---
id: lem-gaussian-sparse-covariance-mixture-lower-bound
kind: lemma
title: "Gaussian mixture lower bound for weakly sparse covariance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
  - def-countable-choice
  - def-euclidean-spheres-and-closed-balls
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-total-variation-distance-for-probability-laws
  - def-weak-lq-sparse-covariance-class
  - def-minimax-squared-operator-risk
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - thm-cauchy-schwarz-finite
  - thm-determinant-multiplicative
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Cai and Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Sections 2-3 and 7.3"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Statement

Assume AC. Fix $\tau,M>0$, $\beta>1$, and $0\le q<1$. There are
$v,b>0$ and $P_0<\infty$, depending only on these fixed parameters, such
that the following holds. Let $p\ge P_0$, $n\ge1$, $p\ge n^\beta$ and
$$0\le c\le M n^{(1-q)/2}(\log p)^{-(3-q)/2}.$$
Put $a=\log(p)/n$, $s=\tau/4$, $\epsilon=v\sqrt a$ and
$$k=\left\lfloor\frac{c}{2(s\epsilon)^q}\right\rfloor.$$
If $c/[2(s\epsilon)^q]\ge2$, then
$$\mathfrak R_n(\mathcal P_q(\tau,c))\ge b c^2a^{1-q}.$$
For $q=0$, $(s\epsilon)^q=1$. The proof gives all Gaussian mixture and
conditional remainder estimates locally; no external mixture-affinity lemma
is assumed.

## Facts & Assumptions

**Given:** The class, fixed constants, scales and nontrivial sparse-row regime in the statement.

[F1] Under AC, a positive-definite covariance defines a Gaussian law with the specified covariance and normal unit-direction projections. [[def-multivariate-normal-law]].

[F2] Strong off-diagonal sums $\sum_{i\ne j}|\sigma_{ij}|^q\le c$ imply the weak-$\ell_q$ condition; for $q=0$ the condition counts nonzero entries. [[def-weak-lq-sparse-covariance-class]].

[F3] Minimax risk is the infimum of maximal expected squared operator loss over measurable estimators. [[def-minimax-squared-operator-risk]].

[F4] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

[F5] Finite-sum Cauchy–Schwarz applies to Euclidean vectors and finite weighted sums, and the operator norm is the maximum Euclidean output norm over unit inputs. [[def-euclidean-spheres-and-closed-balls]] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[thm-cauchy-schwarz-finite]].

[F6] The independent standard-normal coordinates in the Gaussian construction have their product joint law; their scalar density is $(2\pi)^{-1/2}e^{-x^2/2}$, product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets, and positive operators have nonnegative square roots. [[def-multivariate-normal-law]] [[def-standard-normal-and-normal-laws]] [[thm-independent-random-elements-have-product-joint-law]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-non-negative-square-root-exists-and-is-unique]].

[F7] Under Countable Choice, an invertible linear change of variables satisfies the Borel Lebesgue substitution formula; the stated AC assumption supplies Countable Choice. [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F8] Tonelli's theorem factors the nonnegative cross-moment integrand across the finite product sample space. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F9] Total variation distance is $\sup_E|P(E)-Q(E)|$ for probability laws on a common measurable space. [[def-total-variation-distance-for-probability-laws]].

[F10] Cauchy–Schwarz for square-integrable random variables controls the density-ratio integral under a probability law. [[cor-cauchy-schwarz-for-random-variables]].

## Proof

1.1 Choose $v^2<(\beta-1)/(4\beta)$ and put $r=\lfloor p/2\rfloor$. Write $x=c/[2(s\epsilon)^q]$, so $x\ge2$ and $k=\lfloor x\rfloor\ge x/2\ge2$. The radius condition gives $x\le C\sqrt n/(\log p)^{3/2}$, hence $k^2\le Cn/(\log p)^3$, $k\epsilon\le C/\log p$, and $n\epsilon^4k^2\le C/\log p$. Also $k^2p^{2v^2}/r\le Cp^{1/\beta+2v^2-1}/(\log p)^3\to0$, uniformly over admitted $n,c$. All constants depend only on fixed parameters. Increase $P_0$ so $r\ge16k$, $2k\epsilon\le1/3$, and the small bounds below hold. Let $\Lambda$ be all $r\times r$ zero-one matrices with every row sum $k$ and every column sum at most $2k$; cyclic shifts of a $k$-set show it is nonempty. For $\gamma\in\{0,1\}^r$, embed $D_\gamma\lambda$ as the upper-right block of a symmetric off-diagonal matrix $A(\gamma,\lambda)$, using two disjoint $r$-coordinate blocks and an extra zero coordinate if $p$ is odd, and put $\Sigma_{\gamma,\lambda}=s(I_p+\epsilon A(\gamma,\lambda))$. Every absolute row sum of $A$ is at most $2k$. For any $z$, $|z^{\mathsf T}Az|\le\frac12\sum_{j,l}|A_{jl}|(z_j^2+z_l^2)\le2k\|z\|_2^2$; applying this to unit eigenvectors and using [F4] bounds the eigenvalues of $A$ in $[-2k,2k]$. Thus $\Sigma_{\gamma,\lambda}$ is positive definite with eigenvalues in $[2s/3,4s/3]\subset(0,\tau]$. Each column has at most $2k$ off-diagonal entries of magnitude $s\epsilon$. If $0<q<1$, its weak-$\ell_q$ quantity is at most $2k(s\epsilon)^q\le c$; if $q=0$, its nonzero count is at most $2k\le c$. Hence [F2] puts every covariance in the radius-$c$ class. The standard-normal density gives $P(|Z|>t)=e^{-t^2/2}\sqrt{2/\pi}\int_0^\infty e^{-w^2/2-tw}\,dw\le e^{-t^2/2}$, so [F1] verifies the directional-tail condition. For any rectangular matrix $M$ and vector $z$, [F5] gives $|(Mz)_i|^2\le(\sum_j|M_{ij}|)(\sum_j|M_{ij}|z_j^2)$. Summing over rows yields $\|Mz\|_2^2\le(\max_i\sum_j|M_{ij}|)(\max_j\sum_i|M_{ij}|)\|z\|_2^2$, hence $\|M\|_{\mathrm{op}}^2\le(\max_i\sum_j|M_{ij}|)(\max_j\sum_i|M_{ij}|)$. Therefore each cross-block matrix $C=\epsilon D_{\gamma_{-1}}L$ below has $\|C\|_{\mathrm{op}}\le\sqrt2k\epsilon\le2k\epsilon$. [given, F1, F2, F4, F5, algebra, construct]

2.1 Give $(\gamma,\lambda)$ the uniform prior on $\{0,1\}^r\times\Lambda$. Fix bit $i$, say $i=1$ by row symmetry, and condition on the remaining bit vector $\gamma_{-1}$ and nuisance rows $L=(\lambda_2,\ldots,\lambda_r)$. The number of possible first-row supports is $N(L)=\binom{d(L)}k$, where $d(L)$ counts columns whose nuisance sum is less than $2k$. Since there are $(r-1)k$ nuisance ones, $d(L)\ge r/2$. The marginal prior of $L$ is $\pi(L)=N(L)/|\Lambda|$, independent of $\gamma_{-1}$; conditional on $L$, a support $A$ is uniform among its $N(L)$ available $k$-sets. For each fixed $\gamma_{-1}$, when $\gamma_1=0$ let $Q_{\gamma_{-1},L}$ be the Gaussian n-sample law, which does not depend on $A$; when $\gamma_1=1$, let $P_{\gamma_{-1},A,L}$ be the n-sample law and $\overline P_{\gamma_{-1},L}$ its uniform support mixture. In the chi-square expansion draw two independent available supports $A,B$ given $L$. Their joint mass with $L$ is proportional to $1/N(L)$, so given $A,B,\gamma_{-1}$ the nuisance rows are not asserted uniform. [given, step 1.1, algebra]

3.1 Fix $\gamma_{-1}$ and let $C\in\mathbb R^{r\times r}$ be the cross-block matrix with first row zero and remaining rows $\epsilon\gamma_l\lambda_l$. Under $Q_{\gamma_{-1},L}$, after canceling $s$, the covariance is $B_0=\begin{pmatrix}I_r&C\\C^{\mathsf T}&I_r\end{pmatrix}$, with an extra identity coordinate if $p$ is odd. Put $R=(I_r-C^{\mathsf T}C)^{1/2}$; it is positive definite because $\|C\|_{\mathrm{op}}<1$. The block matrix $T=\begin{pmatrix}I_r&0\\C^{\mathsf T}&R\end{pmatrix}$ satisfies $TT^{\mathsf T}=B_0$. Whiten by $T^{-1}$, extended by the identity on any extra coordinate. If $e=e_1$ is the first coordinate in the left block and $v_A=\mathbf1_A$ is the right-block support vector, then $T^{-1}e=e$ and $T^{-1}v_A=R^{-1}v_A$. Thus the alternative covariances become $I+\Delta_A$ and $I+\Delta_B$, where $\Delta_A=eu^{\mathsf T}+ue^{\mathsf T}$, $\Delta_B=ew^{\mathsf T}+we^{\mathsf T}$, $u=\epsilon R^{-1}v_A$, $w=\epsilon R^{-1}v_B$, and $u,w\perp e$. With $H=(I_r-C^{\mathsf T}C)^{-1}$, $u^{\mathsf T}w=t=\epsilon^2\mathbf1_A^{\mathsf T}H\mathbf1_B$. The operator norms of $\Delta_A,\Delta_B$ equal $\|u\|_2,\|w\|_2$, respectively. Since $\|R^{-1}\|_{\mathrm{op}}\le(1-\|C\|_{\mathrm{op}}^2)^{-1/2}$, these norms are at most $\epsilon\sqrt{k}/\sqrt{1-\|C\|_{\mathrm{op}}^2}<1/4$ for large $P_0$; here $\epsilon\sqrt{k}=(k\epsilon)/\sqrt{k}\le C/(\sqrt2\log p)$. For positive-definite $S$, [F1], [F6] and [F7] give the Lebesgue density $f_S(x)=(2\pi)^{-p/2}(\det S)^{-1/2}\exp(-x^{\mathsf T}S^{-1}x/2)$: the independent standard-normal coordinates have product density, and the invertible linear map $S^{1/2}$ changes variables with determinant $(\det S)^{1/2}$. For the one-observation laws, write $f_A,f_B,f_0$ for the positive densities of the two alternatives and the whitened baseline. Put $M=(I+\Delta_A)^{-1}+(I+\Delta_B)^{-1}-I$. Each inverse has smallest eigenvalue at least $(1+1/4)^{-1}=4/5$, hence $M\succeq(3/5)I$. The product density $f_Af_B/f_0$ has exponent matrix $M$ and normalizing factor $(2\pi)^{-p/2}[\det(I+\Delta_A)\det(I+\Delta_B)]^{-1/2}$. Diagonalizing $M$ by [F4], applying an orthogonal change of variables and scaling each one-dimensional standard-normal density [F6, F7] gives
$$\int \frac{f_A(x)f_B(x)}{f_0(x)}\,dx=[\det(I+\Delta_A)\det(I+\Delta_B)\det M]^{-1/2}.$$
The identity $(I+\Delta_A)M(I+\Delta_B)=I-\Delta_A\Delta_B$ and determinant multiplicativity [[thm-determinant-multiplicative]] reduce it to $\det(I-\Delta_A\Delta_B)^{-1/2}$. Since $u,w\perp e$, $\Delta_A\Delta_B=tee^{\mathsf T}+uw^{\mathsf T}$. On $\operatorname{span}\{e\}$, $I-\Delta_A\Delta_B$ contributes determinant $1-t$. On $e^\perp$, if $u=0$ the rank-one determinant is $1$; otherwise choose an orthonormal basis whose first vector is $u/\|u\|_2$, so $I-uw^{\mathsf T}$ has only its first row changed and determinant $1-w^{\mathsf T}u=1-t$. The full determinant is $(1-t)^2$, and the one-observation cross integral is $(1-t)^{-1}$. The n-sample laws have product densities by the product joint-law supplier in [F6]; repeated Tonelli [F8] therefore makes their cross integral the nth power, $(1-t)^{-n}$. [given, F1, F4, F6, F7, F8, step 1.1, step 2.1, algebra]

4.1 Write $J=|A\cap B|$, $X_l=|A\cap\operatorname{supp}\lambda_l|$ and $Y_l=|B\cap\operatorname{supp}\lambda_l|$. The identity $H-I=C^{\mathsf T}(I-CC^{\mathsf T})^{-1}C$ follows from $H-I=(I-C^{\mathsf T}C)^{-1}C^{\mathsf T}C$ and $(I-C^{\mathsf T}C)C^{\mathsf T}=C^{\mathsf T}(I-CC^{\mathsf T})$. The Neumann series $(I-CC^{\mathsf T})^{-1}=\sum_{m\ge0}(CC^{\mathsf T})^m$ converges because $\|C\|_{\mathrm{op}}<1$; since $C$ has nonnegative entries, $H-I$ is entrywise nonnegative and $t-J\epsilon^2\ge0$. The eigenvalues of $CC^{\mathsf T}$ lie in $[0,\|C\|_{\mathrm{op}}^2]$, so [F4] gives $\|(I-CC^{\mathsf T})^{-1}\|_{\mathrm{op}}\le(1-\|C\|_{\mathrm{op}}^2)^{-1}$. Also $(C\mathbf1_A)_l=\epsilon\gamma_lX_l$ and $(C\mathbf1_B)_l=\epsilon\gamma_lY_l$. Cauchy--Schwarz [F5] and $2ab\le a^2+b^2$ yield
$$0\le t-J\epsilon^2\le\frac{\epsilon^4}{2(1-\|C\|_{\mathrm{op}}^2)}\sum_{l=2}^r(X_l^2+Y_l^2).$$
Since $\|H\|_{\mathrm{op}}\le(1-\|C\|_{\mathrm{op}}^2)^{-1}$ and $\|\mathbf1_A\|_2=\|\mathbf1_B\|_2=\sqrt{k}$, [F5] also gives $t\le\epsilon^2k/(1-\|C\|_{\mathrm{op}}^2)$. Since $k\ge2$ and $k\epsilon\le C/\log p$, $\epsilon^2k=(k\epsilon)^2/k=o(1)$, so $t=o(1)$. The derivative of $-\log(1-x)$ is at most $2$ for $0\le x\le t\le1/2$; since $1-\|C\|_{\mathrm{op}}^2\ge8/9$, the preceding bound gives
$$(1-t)^{-n}\le(1-J\epsilon^2)^{-n}\exp\left\{\theta\sum_{l=2}^r(X_l^2+Y_l^2)\right\},\qquad\theta=2n\epsilon^4.$$ [given, F4, F5, step 1.1, step 3.1, algebra]

5.1 Fix $A,B,\gamma_{-1}$ and all nuisance rows except row $l$, and let $a_j$ be the sum in column $j$ over those fixed rows. A support $S$ for row $l$ is feasible exactly when $|S|=k$, $a_j+\mathbf1_{\{j\in S\}}\le2k$ for every column, and $a_j+\mathbf1_{\{j\in S\}}<2k$ for every $j\in A\cup B$ (so both first-row supports remain available). Thus before prior weighting row $l$ is uniform over the $k$-subsets of the fixed set
$$V=\{j\in A\cup B:a_j\le2k-2\}\cup\{j\notin A\cup B:a_j\le2k-1\}.$$
At most $(r-2)k/(2k)\le r/2$ columns outside $A\cup B$ have $a_j=2k$, so deleting these and $A\cup B$ leaves at least $r/2-2k\ge r/4$ available columns; hence $d_0=|V|\ge r/4$. The first-row availability count is $d(L)=\#\{j:a_j+\mathbf1_{\{j\in S\}}<2k\}$; as $S$ varies, only columns outside $A\cup B$ with $a_j=2k-1$ can change this count, so its range has width at most $k\le2k$. Since $d(L)\ge r/2$ and $\binom{d+1}k/\binom dk=(d+1)/(d+1-k)$, the ratio of any two weights $1/N(L)$ is at most $\exp(Ck^2/r)\le2$ after increasing $P_0$. Thus the actual conditional density of the row support is at most twice the uniform-subset density on $V$. If $m=|A\cap V|$, singleton and ordered-pair inclusion probabilities give $E X_l=mk/d_0\le Ck^2/r$ and $E[X_l(X_l-1)]=m(m-1)k(k-1)/(d_0(d_0-1))\le Ck^4/r^2$. Hence $E X_l^2\le C(k^2/r+k^4/r^2)$; the same bound holds for $Y_l$ and under the weighted law with twice the constant. Since $\theta k^2=o(1)$, $e^z-1\le2z$ for $0\le z\le1$ yields
$$E[\exp\{\theta(X_l^2+Y_l^2)\}\mid\text{all other rows},A,B,\gamma_{-1}]\le1+C\theta(k^2/r+k^4/r^2).$$ [given, step 1.1, step 2.1, step 4.1, algebra]

5.2 Put $f_l=\exp\{\theta(X_l^2+Y_l^2)\}$ and $B_0=1+C\theta(k^2/r+k^4/r^2)$. Every factor except $f_l$ is measurable when all rows except $l$ are fixed. Thus for any subset $S$ containing $l$, conditional expectation gives
$$E[\prod_{j\in S}f_j\mid A,B,\gamma_{-1}]\le B_0 E[\prod_{j\in S\setminus\{l\}}f_j\mid A,B,\gamma_{-1}].$$
Iterating over the finitely many nuisance rows yields
$$E[\exp\{\theta\sum_{l=2}^r(X_l^2+Y_l^2)\}\mid A,B,\gamma_{-1}]\le B_0^{r-1}\le\exp\{Cn\epsilon^4(k^2+k^4/r)\}=1+o(1)$$
uniformly in $A,B,\gamma_{-1}$. No row independence is used. [given, step 1.1, step 5.1, algebra]

6.1 Given $L$, $A,B$ are independent uniform $k$-subsets of a set of size $d\ge r/2$. Expanding $z^J=(1+(z-1))^J$ and using
$$E\binom Jj=\binom kj\frac{(k)_j}{(d)_j}\le\frac{[k^2/(d-k+1)]^j}{j!}$$
gives $E[z^J\mid L]\le\exp\{k^2(z-1)/(d-k+1)\}$. Since $J\le k$ and $\epsilon^2k=o(1)$, $(1-J\epsilon^2)^{-n}\le\exp(2n\epsilon^2J)=p^{2v^2J}$. Define $\chi^2(\overline P_{\gamma_{-1},L},Q_{\gamma_{-1},L})=\int(d\overline P_{\gamma_{-1},L}/dQ_{\gamma_{-1},L}-1)^2\,dQ_{\gamma_{-1},L}$. Finite expansion of the mixture density gives
$$1+\chi^2(\overline P_{\gamma_{-1},L},Q_{\gamma_{-1},L})=E_{A,B\mid L,\gamma_{-1}}(1-t)^{-n}.$$
The posterior of $L$ given $A,B,\gamma_{-1}$ has weights proportional to $1/N(L)$; step 5.2 bounds the conditional remainder factor by $1+o(1)$ uniformly in $A,B,\gamma_{-1}$. Since $d-k+1\ge r/3$, the overlap generating-function bound is uniform in $L,\gamma_{-1}$ and yields
$$E_{\gamma_{-1},L}[1+\chi^2(\overline P_{\gamma_{-1},L},Q_{\gamma_{-1},L})]\le(1+o(1))\exp(Ck^2p^{2v^2}/r)=1+o(1),$$
using step 1.1. For each fixed $(\gamma_{-1},L)$, if $R=d\overline P/dQ$, then $E_Q(R-1)=0$, so the positive and negative parts of $R-1$ have equal integrals, and the event $\{R\ge1\}$ attains the supremum in [F9]; hence $\operatorname{TV}(\overline P,Q)=\tfrac12E_Q|R-1|$; [F10] bounds this by $\tfrac12\sqrt{\chi^2(\overline P,Q)}$. Finite Cauchy--Schwarz [F5] over the common prior weights on $(\gamma_{-1},L)$ bounds the average conditional total variation by $\tfrac12\sqrt{E_{\gamma_{-1},L}\chi^2}$, at most $1/2$ after increasing $P_0$. The same mixing weights are used under bit $i=0$ and bit $i=1$, so the full sample-law mixtures have total variation at most $1/2$ by the triangle inequality for the density integral. Their density affinity satisfies
$$\int\min(dP_{i,0},dP_{i,1})=1-\operatorname{TV}(P_{i,0},P_{i,1})\ge1/2.$$ [given, F5, F9, F10, step 1.1, step 2.1, step 3.1, step 4.1, step 5.2, algebra]
7.1 For parameters with $h$ different bits, apply their covariance difference to the vector that is one on the right block and zero elsewhere. Each changed bit contributes a distinct left-block coordinate of magnitude $s\epsilon k$, independently of support choices, so the squared output norm is at least $h(s\epsilon k)^2$ while the input squared norm is $r$. Hence $\|\Sigma_\theta-\Sigma_{\theta'}\|_{\mathrm{op}}^2\ge h(s\epsilon k)^2/r$. Given any measurable matrix estimator, choose a nearest finite covariance target with a fixed tie order. The finite distance comparisons are measurable: [F5] bounds the operator norm by the Frobenius norm, and its triangle inequality follows by applying the Euclidean triangle inequality to every unit vector, so distance to each fixed target is continuous. A wrong target decision forces squared estimation loss at least one quarter of the squared target separation. For each bit, the sum of its two conditional testing errors is at least the density affinity, since pointwise the test contributes at least the minimum of the two densities. By step 6.1, under the uniform prior each bit error probability is at least $1/4$, so the average number of bit errors is at least $r/4$. The maximal risk is at least the average risk and therefore at least $(s\epsilon k)^2/16$. Finally, $k\ge c/[4(s\epsilon)^q]$ implies this is at least $b c^2a^{1-q}$ for a positive constant depending only on the fixed parameters. [given, F3, F4, F5, step 1.1, step 6.1, algebra] ∎
