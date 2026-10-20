---
id: lem-du-simultaneous-initialization-event
kind: lemma
title: "Simultaneous initialization estimates for the Du architectures"
status: draft
origin: pipeline
dependency_level: 3
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-du-overparameterized-network-architectures-and-gram-kernels, lem-du-population-gram-kernels-are-finite-symmetric-psd, lem-du-initial-output-gaussian-concentration, thm-standard-gaussian-lipschitz-concentration, def-multivariate-normal-law, lem-gaussian-even-moment-bound-for-brownian-increments, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, cor-cauchy-schwarz-for-random-variables, thm-cauchy-schwarz-and-the-euclidean-norm, thm-nondegenerate-multivariate-normal-law-has-density, thm-differentiation-under-the-integral-sign, thm-integration-by-parts, thm-dominated-convergence, cor-markov-inequality-for-random-variables, cor-chebyshev-inequality-for-random-variables, cor-mean-value-theorem, lem-epsilon-net-of-unit-sphere-has-cardinality-bound, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-frobenius-matrix-norm, def-p-norms-on-rn, def-axiom-of-choice, def-dependent-choice, def-countable-choice, thm-factorization-of-expectations-for-independent-variables, thm-finite-union-bound]
justified_by: []
proof_strategy: direct
axiom_use: "AC, DC and countable choice are inherited from the Gaussian suppliers; the finite estimates use no additional choice."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Du, Lee, Li, Wang and Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendices B, C, E and G"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Use either of the two architectures, its own terminal population kernel $K$, and independent Gaussian initialization. Assume AC, DC and countable choice and the activation and bounded-label hypotheses of the convergence theorems. Fix $0<\delta<1$. Write $\lambda=\lambda_{\min}(K)>0$, $q=1+\log(16/\delta)$ and $M=\sqrt{1+\log(16mnH/\delta)}$. There are constants $A\ge2$ and $C\ge1$, depending only on the fixed activation bounds, its normalizer, the label bound, and, in the residual case, $c_{\rm res}$, with the following property. For the fully connected case put $T=A^H$; if

$$m\ge C\max\{T n^4/\lambda^4,T n/\delta,T n^2\log(16Hn/\delta)/\lambda^2\},$$

then with probability at least $1-\delta$, simultaneously:

$$\max_{i,h}\|x_i^{(h)}(0)\|\le T,\quad \max_{h\ge2}\|W^{(h)}(0)\|_{\rm op}\le C\sqrt m,\quad \|a(0)\|_2\le C\sqrt m,\quad \|a(0)\|_4\le C m^{1/4},$$

$$\max_{i,h}\|b_{i,h}(0)\|_\infty\le T M,\quad \lambda_{\min}(J_H(0)J_H(0)^T)\ge3\lambda/4,\quad \|u(0)-y\|^2\le Tnq.$$

Here $J_H$ is the Jacobian block of the last hidden-layer matrix, and $b_{i,h}$ is the derivative of the scalar output with respect to the hidden feature vector $x_i^{(h)}$, so $b_{i,H}=a$. In the residual case $H\ge2$, the same conclusions hold with $T$ replaced everywhere in the conclusions by $C$, provided

$$m\ge C\max\{n^4H^6/\lambda^4,n^2/(\lambda^2H^2),n/\delta,n^2\log(16Hn/\delta)/\lambda^2\}.$$

For residual depth one use the fully connected case. Constants may be enlarged, and $A$ may be increased, simultaneously in these conclusions.

## Statement references

[Du et al., initialization arguments B.1–B.2, C.1–C.2 and E.1–E.2](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** The architecture, its population recursion, the data, Gaussian initialization, width and confidence parameters in the Statement.

[F1] The architecture-specific population recurrences, including residual means, and their positive semidefiniteness are supplied locally. [[def-du-overparameterized-network-architectures-and-gram-kernels]] [[lem-du-population-gram-kernels-are-finite-symmetric-psd]]

[F2] Lipschitz functions of a standard Gaussian vector obey the stated one-sided concentration inequality; applying it to both signs gives a two-sided bound. [[thm-standard-gaussian-lipschitz-concentration]]

[F3] Gaussian vectors have the stated covariance and even moments $(2p-1)!!$. [[def-multivariate-normal-law]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F4] Conditional on hidden features, the Gaussian output norm is at most the square root of their total squared norm plus their operator norm times $\sqrt{2\log(1/\varepsilon)}$, with failure probability at most $\varepsilon$. [[lem-du-initial-output-gaussian-concentration]]

[F5] If $X,Y$ have finite second moments, then $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$; expanding a square and applying this bound gives the $L^2$ triangle estimate used for residual feature variances. [[cor-cauchy-schwarz-for-random-variables]]

[F6] Euclidean Cauchy–Schwarz bounds inner products and the Euclidean norm satisfies the triangle inequality. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F7] A nondegenerate bivariate normal vector has its Gaussian Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F8] Differentiation may pass through an integral when parameter derivatives have a common integrable majorant. [[thm-differentiation-under-the-integral-sign]]

[F9] Integration by parts is valid on a compact interval when the derivatives are integrable. [[thm-integration-by-parts]]

[F10] Dominated convergence passes limits through integrals under a common integrable majorant. [[thm-dominated-convergence]]

[F11] For nonnegative $Y$ and $a>0$, $P(Y\ge a)\le EY/a$. [[cor-markov-inequality-for-random-variables]]

[F12] For square-integrable $Y$ and $a>0$, $P(|Y-EY|\ge a)\le\operatorname{Var}(Y)/a^2$. [[cor-chebyshev-inequality-for-random-variables]]

[F13] A real function continuous on a compact interval and differentiable in its interior has some derivative equal to its average rate of change; this turns the bounded $\rho$-derivatives in step 2.1 into Lipschitz bounds. [[cor-mean-value-theorem]]

[F14] Analyticity gives $\sigma''$, and the $\beta$-Lipschitz property of $\sigma'$ gives $|\sigma''|\le\beta$ wherever needed in step 2.1. [given]

[F16] A $1/4$-net of the Euclidean unit sphere in $\mathbb R^m$ exists with at most $9^m$ points. [[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]

[F17] Matrix operator norms are induced by the Euclidean vector norm. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F18] For $p=4$, $\|a\|_4=(\sum_r|a_r|^4)^{1/4}$. [[def-p-norms-on-rn]]

[F19] The Frobenius norm is the Euclidean norm of the matrix entry list, $\|\Phi\|_F^2=\sum_{i,r}\Phi_{ir}^2$; for any unit $v$, Euclidean Cauchy–Schwarz gives $\|\Phi v\|_2^2=\sum_i(\sum_r\Phi_{ir}v_r)^2\le\sum_{i,r}\Phi_{ir}^2$, hence $\|\Phi\|_{\rm op}\le\|\Phi\|_F$. [[def-frobenius-matrix-norm]] [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F15] In the residual coupling, the feature vector and fresh Gaussian vector are independent, so $\operatorname{Cov}(V+\alpha\sigma(G))=\operatorname{Cov}(V)+\alpha^2\operatorname{Cov}(\sigma(G))\succeq\operatorname{Cov}(V)$. This is the construction in [[lem-du-population-gram-kernels-are-finite-symmetric-psd]] and yields the monotone variance lower bound in step 4.1.

[F20] For finitely many independent real random variables, expectations of products of nonnegative Borel functions factor, including when the expectations are extended nonnegative values. [[thm-factorization-of-expectations-for-independent-variables]]

[F21] The probability of a finite union of events is at most the sum of their probabilities. [[thm-finite-union-bound]]

## Proof

1.1 We give the scalar estimates used below explicitly. If $U,V$ are centered Gaussian variables with variances at most a fixed $Q$, then $|\sigma(z)|\le B+L|z|$ and [F3] imply $\|\sigma(U)\|_{2p}\le C\sqrt p$; [F5] then gives $\|\sigma(U)\sigma(V)\|_p\le Cp$ for integers $p\ge2$. The same last bound holds for $a^2\sigma'(U)\sigma'(V)$ when $a$ is an independent standard normal, because $|\sigma'|\le L$. After centering, each such variable $X$ satisfies $E|X|^p\le p! C^p$, enlarging $C$ using $p^p\le e^p p!$. Expanding its exponential series, for $|t|\le1/(2C)$ one has $Ee^{tX}\le1+\sum_{p\ge2}(C|t|)^p\le e^{2C^2t^2}$. For $m$ independent copies, [F20] factors the exponential moment of their sum. Applying [F11] to $\exp(t\sum_rX_r)$ with $t=s/(4C^2)$, and then to $\exp(-t\sum_rX_r)$, to obtain $P(|m^{-1}\sum_rX_r|>s)\le2e^{-cms^2}$ for $0<s\le c$. All constants are uniform over the covariances with these variance bounds. [F2, F3, F5, F11, F20, given, algebra]

2.1 The Gaussian expectation maps needed in the population recurrences are Lipschitz functions of the three entries of their bivariate covariance on any region $v\le Q_{ii},Q_{jj}\le Q$, where $v>0$ is fixed. This applies to $E[g(U)g(V)]$ for $g=\sigma$ and $g=\sigma'$, and to the residual marginal map $s\mapsto E\sigma(\sqrt s Z)$. At fixed $\rho$, changing $s,t$ changes these expectations by at most $C(|\Delta s|+|\Delta t|)$: use the Lipschitz constants $L,\beta$, $s,t\ge v$, and [F5] to bound the resulting products. For fixed $s,t$ and $|\rho|<1$, the covariance matrix is positive definite, so [F7] supplies the density $\phi_{s,t,\rho}$. On any compact interval $|\rho|\le r<1$, its eigenvalues lie between $v(1-r)$ and $Q(1+r)$. Direct differentiation of the Gaussian density gives $\partial_\rho\phi_{s,t,\rho}=\sqrt{st}\,\partial_u\partial_v\phi_{s,t,\rho}$. Uniform eigenvalue bounds imply that $|g(u)g(v)\partial_\rho\phi_{s,t,\rho}(u,v)|$ is bounded by an integrable polynomial times $e^{-c(u^2+v^2)}$, uniformly on this interval; $g$ has at most linear growth and $g'$ is bounded. Thus [F8] justifies differentiating the expectation under the integral. On finite rectangles apply [F9] successively in $u$ and $v$; the boundary terms tend to zero as the rectangles expand because of Gaussian decay and the growth bound. The same integrable majorant and [F10] pass the rectangle limits, giving $\partial_\rho E[g(U)g(V)]=\sqrt{st}E[g'(U)g'(V)]$. Its absolute value is at most $QL^2$ for $g=\sigma$ and $Q\beta^2$ for $g=\sigma'$, since $|\sigma'|\le L$ and $|\sigma''|\le\beta$. At $\rho=\pm1$, the representation $U=\sqrt s Z$, $V=\sqrt t(\rho Z+\sqrt{1-\rho^2}Z')$ is dominated after multiplication by either pair of activations by $C(1+|Z|+|Z'|)^2$, which is integrable; [F10] gives continuity at both endpoints. Finally $\rho=Q_{ij}/\sqrt{st}$ is Lipschitz in the covariance entries when $s,t\ge v$. [F3, F5, F7, F8, F9, F10, step 1.1, algebra, F13]

3.1 Write $\widehat S_{ij}^{(h)}=\langle x_i^{(h)}(0),x_j^{(h)}(0)\rangle$ and, for residual layers, $\widehat b_i^{(h)}=m^{-1/2}\sum_r x_{i,r}^{(h)}(0)$. Conditional on previous layers, the preactivation pairs in distinct rows are independent centered Gaussians with covariance given by $\widehat S^{(h-1)}$. In the fully connected case, step 1.1 bounds each difference of $\widehat S_{ij}^{(h)}$ from its conditional mean by $Ct_0$, except with probability $\delta/(32Hn^2)$, where $t_0=\sqrt{\log(64Hn^2/\delta)/m}$. Its conditional mean is exactly the fully connected population expectation evaluated at $\widehat S^{(h-1)}$. Since the population diagonal is one, step 2.1 gives, while the error is at most a fixed small constant, $e_h\le C e_{h-1}+Ct_0$, where $e_h=\max_{ij}|\widehat S_{ij}^{(h)}-K_{ij}^{(h)}|$ and $e_0=0$. If $B>1$ is a fixed base for this recurrence, then $e_h\le B^Ht_0$ after enlarging its prefactor. Choose the statement constant $A\ge B^2$ and enlarge the width constant; its term $Tn^2\log(16Hn/\delta)/\lambda^2$, with $T=A^H$, then makes this error smaller than both the fixed stopping threshold and $c\lambda/n$. Conditional bounds and the finite union bound [F21] over $h,i,j$ therefore justify the estimates through layers $h<H$; the last hidden-feature norm is bounded by one further conditional application of the activation moment estimate, without identifying its covariance with the terminal derivative kernel. A first layer crossing the stopping threshold would contradict this recurrence. In particular all feature norms are bounded by a constant, hence by $T$. [F1, F3, F21, step 1.1, step 2.1, algebra]

4.1 In the residual case the population feature variances lie in a fixed compact interval $[v,Q]$ independent of $H$. Indeed the vector construction in [F1] gives $S^{(h)}-b^{(h)}(b^{(h)})^T\succeq S^{(1)}-b^{(1)}(b^{(1)})^T$, whose diagonal is $v=c_\sigma\operatorname{Var}(\sigma(Z))>0$. Positivity of $v$ follows from nonconstancy, continuity and the positive Gaussian density. Also $\sqrt{S_{ii}^{(h)}}\le\sqrt{S_{ii}^{(h-1)}}+\alpha(B+L\sqrt{S_{ii}^{(h-1)}})$ with $\alpha=c_{\rm res}/H$, so iteration gives a fixed upper bound. The empirical conditional mean satisfies exactly the same residual second-moment/mean recursion with $S,b$ replaced by $\widehat S,\widehat b$. The nonlinear quadratic part has conditional fluctuation at most $C\alpha^2t_0$ by step 1.1. Each cross part is $\alpha m^{-1/2}\sum_r x_{i,r}^{(h-1)}\sigma(U_{j,r})$; its centered value has absolute size at most $C\alpha t_0$ by [F2], since its Lipschitz constant in the independent row Gaussians is at most $C\alpha\|x_i^{(h-1)}\|/\sqrt m$. The empirical mean has fluctuation at most $C\alpha t_0$ by [F2]. Step 2.1 now yields $e_h\le(1+C/H)e_{h-1}+Ct_0/H$, taking the maximum of the covariance and mean errors. The first layer has $e_1\le Ct_0$ by step 1.1 and [F2]. Hence $e_h\le Ct_0$ uniformly in $H$. The width assumption and the same stopping argument, now in $[v/2,2Q]$, justify the conditional estimates and give the feature bound through $h<H$; the finite union bound [F21] combines their layerwise failure probabilities. One further conditional step gives $\|x_i^{(H)}\|\le C$, using the same upper-norm recurrence, so $\max_{i,h}\|x_i^{(h)}\|\le C$. [F1, F2, F3, F21, step 1.1, step 2.1, step 3.1, algebra, F15]

5.1 For either architecture, conditional on layers before the last, the last-hidden-layer Jacobian Gram entries are $s_H^2\widehat S_{ij}^{(H-1)}m^{-1}\sum_ra_r^2\sigma'(z_{i,r})\sigma'(z_{j,r})$, where $s_H^2=c_\sigma$ for the fully connected case and $s_H^2=c_{\rm res}^2/H^2$ for residual $H\ge2$. This follows by differentiating the last layer. The summands are independent across $r$. Steps 1.1–2.1, the feature bounds and errors just proved give entry error at most $B_2^Ht_0$ in the fully connected case, for a fixed base $B_2$ depending only on the fixed activation bounds, and at most $Ct_0/H^2$ in the residual case. Choose the statement constant $A$ also with $A\ge B_2^2$; the displayed logarithmic width term and a sufficiently large fixed multiplier then make both errors at most $\lambda/(4n)$. A finite union bound [F21] covers the terminal-kernel entry events. If an $n\times n$ matrix $E$ has entries bounded by $\varepsilon$, then for any $z$, $\|Ez\|_2\le\sqrt n\,\varepsilon\sum_j|z_j|\le n\varepsilon\|z\|_2$ by [F6], hence $\|E\|_{\rm op}\le n\varepsilon$. Thus $\|J_HJ_H^T-K\|_{\rm op}\le\lambda/4$. Both matrices are symmetric, and for every $z$, $z^TJ_HJ_H^Tz\ge z^TKz-|z^TEz|\ge(\lambda-\|E\|_{\rm op})\|z\|_2^2\ge3\lambda\|z\|_2^2/4$, where $E=J_HJ_H^T-K$. The Rayleigh-quotient characterization of the smallest eigenvalue now gives $\lambda_{\min}(J_HJ_H^T)\ge3\lambda/4$. [F1, F3, F6, F21, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

5.2 By [F16], choose a $1/4$-net $\mathcal N$ of the unit sphere with at most $9^m$ points. The Euclidean norm duality $\|z\|_2=\sup_{\|x\|_2=1}|x^Tz|$ follows from [F6], so $\|W\|_{\rm op}=\sup_{\|x\|=\|y\|=1}|x^TWy|$. For unit $x,y$, choose $v,w\in\mathcal N$ within $1/4$ of them. Then [F6] gives $|x^TWy-v^TWw|\le\|x-v\|_2\|W y\|_2+\|v\|_2\|W(y-w)\|_2\le\tfrac12\|W\|_{\rm op}$. Taking suprema yields $\|W\|_{\rm op}\le2\max_{v,w\in\mathcal N}|v^TWw|$. Each $v^TWw$ is standard normal, whose tail is at most $2e^{-t^2/2}$ by [F2]. The finite union bound [F21] gives $\|W^{(h)}\|\le C\sqrt m$ for all $h\ge2$ with failure at most $\delta/16$ when $m\ge C\log(16H/\delta)$, which follows from either displayed width because $\lambda\le c_\sigma L^2$ in the fully connected case and $\lambda\le C/H^2$ in the residual case. The latter bound follows by bounding the diagonal of its terminal kernel with step 4.1. Gaussian second and eighth moments and [F12] give $\|a\|_2\le C\sqrt m$ and $\|a\|_4\le Cm^{1/4}$ with failure at most $\delta/16$ when $m\ge C/\delta$, also implied by the widths. These arguments never bound $\|W^{(1)}\|$ on the whole input space, so no input-dimension condition is used. [F2, F3, F6, F12, F16, F21, step 3.1, step 4.1, construct, algebra, F17, F18]

6.1 Conditional on hidden weights, $b_{i,h}(0)=P_{i,h}^Ta$, where $P_{i,h}$ is the product of downstream feature Jacobians. Their operator norms have fixed envelopes $B^H$ in the fully connected case and $B$ in the residual case, using $\prod_{l>h}(1+C/H)\le e^C$ for residual layers. Increase the conclusion constants so these envelopes are at most $T/2$ and $C/2$, respectively. Each coordinate is centered Gaussian of variance at most $(T/2)^2$ or $(C/2)^2$. Since $M^2=1+\log(16mnH/\delta)$, its two-sided tail is at most $2e^{-2M^2}\le\delta/(8mnH)$; the finite union bound [F21] over at most $mnH$ coordinates gives the asserted coordinate maxima with failure at most $\delta/8$. Finally [F4] and $\|\Phi\|_{\rm op}\le\|\Phi\|_F\le\sqrt n\max_i\|x_i^{(H)}\|$ give $\|u(0)\|\le C\sqrt{Tnq}$ or $C\sqrt{nq}$ with failure at most $\delta/16$. [F2, F3, F4, F21, step 3.1, step 4.1, step 5.1, step 5.2, F19]

7.1 By the finite union bound [F21], allocate at most $\delta/(32Hn^2)$ to each fully connected feature-covariance or terminal-feature-norm event in step 3.1; there are at most $2Hn^2$ such events. Allocate at most $\delta/(128Hn^2)$ to each residual covariance, cross-term, mean, or terminal-feature-norm event in step 4.1; there are at most $4Hn^2$ such events. Allocate at most $\delta/(64n^2)$ to each terminal-kernel entry event. The weight-matrix and readout norm events in step 5.2 each use $\delta/16$; backward coordinates use $\delta/8$ and the output norm uses $\delta/16$ in step 6.1. Even summing both architecture allocations, these budgets total at most $27\delta/64<\delta$. The thresholds are constant multiples of $t_0$ or $M$; increasing the fixed constants in the width and conclusions makes each displayed concentration bound meet its allocation without changing their forms. Adding the deterministic bounded-label contribution proves the simultaneous event. [F2, F21, step 3.1, step 4.1, step 5.1, step 5.2, step 6.1, algebra] ∎
