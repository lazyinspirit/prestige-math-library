---
id: lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling
kind: lemma
title: Heterogeneous bounded atom vector rows admit a logarithmic cubed Gaussian coupling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
  - lem-gaussian-anchored-conditional-quantile-coupling
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-measurability-of-integration-against-a-kernel
  - lem-finite-products-of-probability-kernels
  - lem-conditional-independence-under-kernel-extension-and-conditioning
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
  - thm-finite-union-bound
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-factorization-of-expectations-for-independent-variables
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. Yu. Zaitsev, Multidimensional version of the results of Komlos, Major and Tusnady for vectors with finite exponential moments (1998), Section 5; heterogeneous covariance interpolation and Gaussian anchor specialization proved here"
      url: "https://www.numdam.org/item/PS_1998__2__41_0.pdf"
axiom_use: "AC is inherited from the Gaussian, analytic and integration suppliers. Terminal conditional kernels are explicit Gaussian posteriors; no pointwise selection of disintegrations in an environment is used."
---

## Statement

Assume AC. Fix $K\ge1$ and $A>0$. There is a finite $C_{A,K}$ such that the following holds uniformly over $1\le d\le2$, integers $1\le m\le N$, and $B\ge1$. Let $X_1,\ldots,X_m$ be independent centered vectors with representations
$$X_i=Z_i+\sum_{r=1}^{r_i}Y_{ir},\qquad |Y_{ir}|\le B\ \hbox{almost surely},$$
where every $r_i$ is finite, all displayed atom and Gaussian terms are independent, every $Y_{ir}$ is centered, and every $Z_i$ is a centered Gaussian vector, possibly degenerate. Suppose
$$I_d\le D_i:=\operatorname{cov}(X_i)\le KI_d.$$
There is a coupling with independent $G_i\sim N_d(0,D_i)$ satisfying
$$\Pr\!\left(\max_{1\le k\le m}\left|\sum_{i=1}^k(X_i-G_i)\right|>C_{A,K}B\log^3(eN)\right)\le N^{-A}.$$
The constants do not depend on the atom counts or individual laws. Empty atom sums and zero Gaussian terms are allowed.

The coupling laws can be chosen as a measurable probability kernel in a supplied standard Borel parameter $\theta$: if the atom laws and Gaussian covariance matrices are measurable kernels and functions of $\theta$, with the hypotheses holding for each $\theta$, there is a coupling kernel $Q_\theta(dx,dg)$ with the stated product marginals and the displayed bound for each $\theta$. Thus a random environment with these conditional independent atom laws can first be sampled, and this coupling kernel then applied conditionally. This assertion concerns the conditional laws supplied in the hypotheses and does not assume a selection of regular conditional laws separately at each parameter.

## Facts & Assumptions

**Given:** The atom and Gaussian representations, covariance bounds, parameters $A,K,d,m,N,B$, and, for the kernel assertion, the supplied measurable atom laws and Gaussian covariance matrices. Matrix inequalities are quadratic form inequalities and all vector norms are Euclidean.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Independent sums of centered bounded vectors and a Gaussian, of total covariance $sI_j$ and Gaussian covariance at least $\gamma sI_j$, have the uniform cumulant and tilted Fourier bounds of [[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]].

[F2] The Gaussian anchored conditional quantile supplier constructs measurable root transports and, for joint dimension $2d\le4$, measurable transports of a fresh independent Gaussian residual conditional on the target parent. With covariance $sI$, atom bound $b$, and Gaussian covariance fraction $\gamma>0$, the target value error is bounded by $C_\gamma b(1+(|p|^2+|v|^2)/s)$ when $s\ge C_\gamma b^2$ and $|p|,|v|\le c_\gamma s/b$. [[lem-gaussian-anchored-conditional-quantile-coupling]]

[F3] Real symmetric matrices have an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F4] A Gaussian has its covariance characteristic function; zero cross covariance implies independence for Gaussian subvectors by factorization. A positive definite Gaussian has its Gaussian density. [[lem-characteristic-function-of-a-multivariate-normal-law]], [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] Integrating a measurable function against a supplied probability kernel is measurable, and finite products of probability kernels are probability kernels. [[thm-measurability-of-integration-against-a-kernel]], [[lem-finite-products-of-probability-kernels]]

[F6] Nonnegative integrals obey Tonelli and monotone convergence. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-monotone-convergence-for-the-integral]]

[F7] A kernel extension depending only on one part of an independent pair preserves independence from its complement. [[lem-conditional-independence-under-kernel-extension-and-conditioning]]

[F8] Exponential Markov bounds, the finite union bound, and Euclidean triangle inequality apply. [[cor-markov-inequality-for-random-variables]], [[thm-finite-union-bound]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F9] Expectations of finite products of nonnegative functions of independent variables factor. [[thm-factorization-of-expectations-for-independent-variables]]

## Proof

1.1 For a coordinate $Y$ of one centered atom, $E|Y|^r\le B^{r-2}EY^2$ for every integer $r\ge2$. Absolute exponential-series integration is legitimate because $\sum_r|hY|^r/r!\le e^{B|h|}$; [F6] permits summing its nonnegative absolute terms, and its positive and negative parts then give the signed series identity. For $B|h|<1$, centering cancels the linear term and $r!\ge2$ for $r\ge2$, so
$$\log Ee^{hY}\le Ee^{hY}-1\le\frac{h^2EY^2}{2(1-B|h|)}.$$
A centered Gaussian coordinate has logarithmic mgf $h^2\operatorname{var}(Z)/2$, by completing the square in its positive-variance eigencoordinates using [F3] and [F4]; zero-variance coordinates vanish. Independence multiplies the finitely many atom and Gaussian mgfs. Since their variances add to each coordinate variance of $X_i$, at most $K$, any sum of $s$ entries, also with arbitrary matching Gaussian replacements, has coordinate log mgf at most $Ks h^2/[2(1-B|h|)]$. For a coordinate threshold $u>0$ use $h=u/(Ks+Bu)$ and exponential Markov for both signs. This gives tail at most $2\exp\{-u^2/[2(Ks+Bu)]\}$. The coordinate union bound therefore gives, uniformly in atom counts,
$$\Pr\!\left(\left|\sum_{i\in I}X_i\right|>C_K[\sqrt{st}+Bt]\right)\le C_K e^{-c_Kt},\qquad t\ge1.$$
This holds for every contiguous interval in any compressed ordering. [given, A1, F3, F4, F6, F8, F9, algebra]

1.2 Consider a dyadic mixed row whose odd entries are independent matching Gaussians and whose even entries have their raw laws. At a node of $s\ge4$ entries let its two child covariance matrices be $U,V$, put $W=U+V$, and, for its target child sums $S_L,S_R$, define
$$P=S_L+S_R,\qquad H=UW^{-1},\qquad D=S_L-HP,\qquad R=U-UW^{-1}U.$$
Independence gives $\operatorname{cov}(P)=W$, $\operatorname{cov}(P,D)=U-WW^{-1}U=0$, and $\operatorname{cov}(D)=R$. The symmetric matrix $R$ equals $UW^{-1}V$ and has inverse $V^{-1}WU^{-1}=U^{-1}+V^{-1}$; hence it is positive definite without assuming commutation. Since each child has $s/2$ entries, [F3] gives
$$\tfrac s2I\le U,V\le\tfrac{Ks}2I,\qquad sI\le W\le KsI,\qquad \tfrac s4I\le R\le\tfrac{Ks}4I.$$
The final inequalities follow by inverting, adding, and reinverting the quadratic form bounds. [given, F3, algebra]

1.3 The transformed pair $Q=\sqrt s\operatorname{diag}(W^{-1/2},R^{-1/2})(P,D)$ has covariance $sI_{2d}$. A raw atom $x$ in its left or right child contributes respectively
$$\sqrt s\bigl(W^{-1/2}x,R^{-1/2}VW^{-1}x\bigr),\qquad \sqrt s\bigl(W^{-1/2}x,-R^{-1/2}UW^{-1}x\bigr).$$
Their norms are at most $C_KB$, since $\sqrt s\|W^{-1/2}\|\le1$, $\sqrt s\|R^{-1/2}\|\le2$, and $\|UW^{-1}\|,\|VW^{-1}\|\le K/2$. Each child contains half Gaussian entries, so its Gaussian covariance is at least $(s/4)I$, at least $\gamma$ times its total covariance with $\gamma=1/(2K)$. Congruence of quadratic forms therefore makes the Gaussian covariance of $Q$ at least $\gamma sI_{2d}$. All its bounded contributions are the independently transformed original atoms, and all Gaussian contributions combine into an independent Gaussian. Thus [F1] and [F2] apply directly to $Q$, including its coordinate prefixes. The conditioning is on its first $d$ coordinates. Undoing the separate parent and residual whitening, whose inverse norms are bounded by $C_K$, gives a transport of a fresh $E_I\sim N_d(0,R)$ to $D$ conditional on $P=p$, with error
$$|T_{I,p}(E_I)-E_I|\le C_KB\left(1+\frac{|p|^2+|T_{I,p}(E_I)|^2}{s}\right)$$
when $s\ge C_KB^2$ and the two target norms are at most $c_Ks/B$. The root has the analogous transport from $N_d(0,W)$ with error $C_KB(1+|P|^2/s)$. There is no additional factor from the atom counts or from $\sqrt s$. [F1, F2, F3, step 1.2, algebra]

2.1 Temporarily take a dyadic current length $q\le2N$, set $L=a\log(eN)$, and let $q_0$ be the least dyadic integer at least $H_KB^2L$, with $H_K$ to be fixed. Suppose $q\ge2q_0$. Start with an independent Gaussian row having the individual covariances $D_i$. Its root sum and residuals $E_I=V_L-UW^{-1}V_I$ at the active nodes are mutually independent Gaussian vectors of covariances $W_{\rm root}$ and $R_I$: the cross covariances vanish, and independence follows recursively from [F4]. Apply the root transport in step 1.3 and then, descending the tree, set $D_I=T_{I,S_I}(E_I)$ and
$$S_L=UW^{-1}S_I+D_I,\quad S_R=VW^{-1}S_I-D_I,\quad V_L=UW^{-1}V_I+E_I,\quad V_R=VW^{-1}V_I-E_I.$$
Stop at length $q_0$. Each fresh residual is independent of the already exposed parents, so every target split has exactly its prescribed conditional law. For Gaussians the child covariance is $UW^{-1}U+R=U$ and the cross covariance is $UW^{-1}V-R=0$, with the analogous right covariance $V$. [F2, F4, step 1.2, step 1.3, construct, choose, algebra]

2.2 There is an explicit terminal target kernel, also measurable in any supplied environment. In a terminal mixed block let $\mu$ be the product law of its raw positions, let $s(r)$ be their sum, and let $G>0$ be the sum of the matching Gaussian-position covariances. Given the target block sum $u$, sample the raw-position vector from
$$\frac{q_G(u-s(r))\,\mu(dr)}{\int q_G(u-s(v))\,\mu(dv)}.$$
The denominator is finite and strictly positive everywhere by [F4]. Fill the Gaussian positions conditional on their remaining sum $u-s(r)$: for their covariance matrices $C_j$ and fresh independent $h_j\sim N(0,C_j)$, put $H_0=\sum_jh_j$ and $g_j=C_jG^{-1}(u-s(r))+h_j-C_jG^{-1}H_0$. The residual vector has sum zero, zero cross covariance with $H_0$, and covariance blocks $\delta_{ij}C_i-C_iG^{-1}C_j$; thus [F4] identifies its Gaussian conditional law. Multiplying the posterior by the total-sum density and integrating in $u$ proves the original raw/Gaussian product law, first on rectangles and then by monotone approximation. This verifies the terminal conditional law at every sum, without choosing regular conditional versions. Independent terminal kernels and the split laws of step 2.1 consequently recover exactly the entire mixed row product law by induction through the disjoint binary blocks. The existing Gaussian row is unchanged, and already has its required product law. [F4, F5, F6, step 2.1, construct, algebra]

3.1 Use step 1.1 and a union bound for every dyadic target sum and every within-terminal prefix in the completed target and Gaussian rows. There are at most $Cq$ such vectors. Except on probability $C_Kq e^{-c_KL}$, each target sum of size $s$ has norm at most $C_K(\sqrt{sL}+BL)$. The target residual is $D_I=VW^{-1}S_L-UW^{-1}S_R$, so its norm satisfies the same bound with a different $C_K$. At active sizes $s\ge2q_0$, choose $H_K$ large enough that these target norms are at most $c_Ks/B$; their ratios to $s/B$ are bounded by $C_K/\sqrt{H_K}+C_K/H_K$. Their squared norms divided by $s$ are at most $C_KL$. Step 1.3 therefore bounds the root discrepancy and every residual discrepancy $\delta_I=D_I-E_I$ by $C_KBL$. The within-terminal prefix norms are at most $C_K(\sqrt{q_0L}+BL)\le C_KBL$, since $q_0<2H_KB^2L$. No conditional concentration inside a terminal block has been assumed. [F8, step 1.1, step 1.2, step 1.3, step 2.2, choose, algebra]

3.2 Write $e_I=S_I-V_I$. Its child equations are $e_L=UW^{-1}e_I+\delta_I$ and $e_R=VW^{-1}e_I-\delta_I$. For a prefix $P$ ending at a terminal boundary of $I$, let $C_P$ be the sum of its individual covariance matrices. Its discrepancy has the exact expansion
$$\sum_{i\in P}(X_i-G_i)=C_PW_I^{-1}e_I+\sum_{J\text{ on the boundary path}}M_{J,P}\delta_J.$$
If the boundary lies in the left child, $M_{J,P}=C_{\rm partial\ left}W_{J_L}^{-1}$; if it lies in the right child, $M_{J,P}=I-C_{\rm partial\ right}W_{J_R}^{-1}$. To prove the formula, in the left case substitute the child's leading term $C_PU^{-1}e_L$ and cancel $U^{-1}U$; in the right case add $e_L$ to $C_QV^{-1}e_R$, obtaining leading coefficient $(U+C_Q)W^{-1}$ and residual coefficient $I-C_QV^{-1}$. Induction from terminal blocks proves the expansion. This cancellation uses the order $W_{\rm desc}W_{\rm parent}^{-1}W_{\rm parent}W_{\rm grandparent}^{-1}$ and never commutes two matrices. If a partial child has $r$ of its $h$ entries, its coefficient norm is at most $Kr/h\le K$. Hence $\|M_{J,P}\|\le1+K$ and $\|C_PW_I^{-1}\|\le K$. There are at most $\log_2q$ boundary ancestors. The expansion and step 3.1 give terminal-boundary error $C_KBL\log(eq)$; adding its terminal prefix residual gives the same bound for all prefixes. [F8, step 1.2, step 2.1, step 3.1, algebra]

3.3 If $q<2q_0$, couple a raw or mixed row independently to a matching Gaussian row. Their unconditional concentration bounds from step 1.1 and a union bound over prefixes give maximum discrepancy at most $C_K(\sqrt{qL}+BL)\le C_KBL$ except on probability $C_Kq e^{-c_KL}$. This covers the small sizes, including a row of one entry, and large $B$. Thus in all cases a mixed row can be coupled directly to an already realized matching Gaussian row with stage error at most $C_KBL\log(eq)$ and bad probability at most $C_Kq e^{-c_KL}$. [F8, step 1.1, step 3.2, algebra]

4.1 Pad the initial length $m$ to dyadic $q<2m$ by independent $N_d(0,I_d)$ entries; for $m=1$ take $q=1$. These added laws have empty atom sums and preserve all covariance bounds. Begin with its matching independent Gaussian row. At an active length at least $2q_0$, apply steps 2.1–3.2, taking the target laws to be the designated raw laws in even slots and matching Gaussians in odd slots. Use the root and residual primitives computed from the already realized active Gaussian row, and fresh target terminal kernels. Freeze the newly raw even positions and retain the odd Gaussian positions in their compressed order. Their covariance matrices still lie between $I$ and $KI$. The target product law and [F7] preserve independence of the active row from its frozen complement. At an active length below $2q_0$, independently replace all remaining Gaussian positions by their designated raw laws, using step 3.3, and stop. This constructs the full intended independent raw row after at most $C\log(eN)$ stages, without changing the original Gaussian row. [F5, F7, step 2.1, step 2.2, step 3.3, construct]

4.2 Every original prefix meets the active positions of each stage in an initial compressed prefix. Triangle inequality adds the stage maximum errors, each at most $C_KBL\log(eN)$, to give total error at most $C_{A,K}B\log^3(eN)$. Always use the ambient $L=a\log(eN)$, even for short compressed rows. The union bad probability is at most $C_KN\log(eN)e^{-c_Ka\log(eN)}$. Choose $a$ sufficiently large depending only on $A,K$ to make this at most $N^{-A}$ for all $N\ge1$; then restrict to the first $m$ entries. This proves the numerical assertion. [F8, step 3.3, step 4.1, choose, algebra]

5.1 For the parameter assertion, every entry law is a measurable kernel obtained by applying addition to the finite product of its supplied atom and Gaussian kernels, using [F5]. Covariance entries are measurable integrals. In dimensions one and two positive definite inverse square roots are continuous functions of their matrices: in dimension two, for $C>0$, $C^{1/2}=(C+\sqrt{\det C}\,I)/\sqrt{\operatorname{tr}C+2\sqrt{\det C}}$, as verified in an eigenbasis by [F3]; the semidefinite zero case is defined by zero and the formula extends continuously. Thus the Gaussian starts and all transforms in steps 1.2–1.3 depend measurably on the parameter. Mixed transformed joint and prefix densities are Gaussian convolution integrals of their raw product kernels, so are jointly measurable by [F5] and strictly positive. Their conditional CDFs are measurable density-ratio integrals. The coordinate quantiles in [F2] are measurable rational infima of those CDFs; hence its root and residual maps are jointly measurable in the parameter and all spatial inputs. The terminal posterior in step 2.2 is likewise a measurable kernel with positive measurable denominator, followed by the explicit Gaussian bridge kernel. Finite kernel products and successive extensions preserve measurability: for one extension define its law by integrating the next kernel against the preceding law; [F5] gives measurable evaluations and [F6] gives countable additivity by monotone convergence of disjoint indicator sums. Iterating this finite construction gives a coupling kernel $Q_\theta$, and every previous marginal and probability bound holds at each parameter. No pointwise selection of conditional-law versions or coupling laws is used. [A1, F2, F3, F4, F5, F6, step 1.2, step 1.3, step 2.2, step 4.2, construct, algebra] ∎

## Source notes

The source supplies the dyadic conditional-quantile architecture. The heterogeneous covariance formula in step 3.2, the stopped Gaussian-anchor replacement, and the parameterwise terminal posterior are proved locally. The bound is deliberately weaker than the source's optimized strong approximation estimates. Whole grouped entries need not be bounded: the boundedness hypothesis concerns their independent centered atoms.
