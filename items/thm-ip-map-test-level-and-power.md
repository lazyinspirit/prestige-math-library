---
id: thm-ip-map-test-level-and-power
kind: theorem
title: Level, power, and weighted regularization of Gaussian MAP feature tests
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - alg-ip-gaussian-map-feature-test
  - thm-ip-isonormal-gaussian-posterior-law
  - def-countable-choice
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-trace-class-operator
  - lem-hilbert-tikhonov-normal-operator-invertible
  - lem-standard-normal-cdf-quantiles-and-symmetry
  - def-ip-isonormal-white-noise-experiment
  - def-isometry-coisometry-and-partial-isometry
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-positive-square-root-of-a-compact-positive-operator
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - thm-hilbert-space-fourier-expansion
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: The raw and calibrated Gaussian-tail arguments add no choice. The weighted-minimizer clause constructs the real polar partial isometry from the common eigenbasis and uses Countable Choice through the compact spectral and square-root suppliers. The posterior input inherits the Axiom of Choice from its separate RCD proof.
sources:
  references:
    - title: "Remo Kretschmann and Frank Werner, Maximum a posteriori testing in statistical inverse problems, Theorems 2.4–2.5"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Remo Kretschmann, Daniel Wachsmuth, and Frank Werner, Optimal regularized hypothesis testing in statistical inverse problems, §1.2 and Theorem 2.3"
      url: https://arxiv.org/pdf/2212.12897
---

## Statement

Assume the Axiom of Choice. Let $X,H$ be separable real Hilbert spaces, $K:X\to H$ bounded and linear, $\epsilon>0$, and let $U$ be a Borel Gaussian prior with mean $m_0$ and positive self-adjoint, injective, trace-class covariance $C_0$, independent of a jointly Gaussian centered family $Z$ indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. Fix $h\in X$, define $S=C_0^{1/2}$, $B=SK^*KS$, $R=(B+\epsilon^2I)^{-1}$, $\Phi_h=KSRSh$, and $c_h=\langle Km_0,\Phi_h\rangle_H-\langle m_0,h\rangle_X$. Let $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$ and let the raw MAP test reject exactly when $Y_x(\Phi_h)>c_h$. Define $G(t)=\int_{-\infty}^{t}(2\pi)^{-1/2}e^{-s^2/2}\,ds$, the standard normal cumulative distribution function. For every $x\in X$ its rejection probability is
$$\mathbb P_x\{Y_x(\Phi_h)>c_h\}=\begin{cases}G\!\left(\dfrac{\langle x,K^*\Phi_h\rangle_X-c_h}{\epsilon\|\Phi_h\|_H}\right),&\Phi_h\ne0,\\[6pt]\mathbf1\{0>c_h\},&\Phi_h=0.\end{cases}$$

Let $P_Y$ be the prior-predictive law of the field $Y(g)=\langle KU,g\rangle_H+\epsilon Z(g)$ on $\mathbb R^H$ with its cylinder sigma-algebra, and let $\Pi_y$ and $M_y$ be the data-indexed posterior kernel and mean supplied by the Gaussian posterior-law theorem, using supplied finite or countable complete orthonormal bases of $X$ and $H$ as in that theorem. For every $y$, the scalar feature marginal under $\Pi_y$ is normal with mean $\langle M_y,h\rangle_X$ and variance $\langle C_{\rm post}h,h\rangle_X$; its mode is its mean, with the support point serving as the mode when the variance is zero. For each fixed $h$, the raw MAP test agrees for $P_Y$-almost every $y$ with rejection exactly when this posterior marginal mode is positive. The exceptional null set may depend on $h$. If $h=0$, then $\Phi_h=c_h=0$, and the raw test returns $0$ almost surely under every sampling law and under $P_Y$.

For a further real Hilbert space $V$ and a continuous linear injection $i:V\to X$, define the residual functional $r_\Phi\in V^*$, where $V^*$ is the continuous dual of $V$, by
$$r_\Phi(v)=\langle Ki(v),\Phi\rangle_H-\langle i(v),h\rangle_X,\qquad \|r_\Phi\|_{V^*}=\sup_{\|v\|_V\le1}|r_\Phi(v)|.$$
For $0<\alpha<1$ let $z_{1-\alpha}$ satisfy $G(z_{1-\alpha})=1-\alpha$. If $\Phi\ne0$, the calibrated probe test rejects exactly when
$$Y_x(\Phi)>\epsilon\|\Phi\|_H z_{1-\alpha}+\|r_\Phi\|_{V^*}.$$
Its rejection probability at every $x\in X$ is the same displayed Gaussian-tail formula with $\Phi$ in place of $\Phi_h$ and calibrated threshold in place of $c_h$. If $x=i(v)$ satisfies $\|v\|_V\le1$ and $\langle x,h\rangle_X\le0$, this test has rejection probability at most $\alpha$. For $\Phi=0$ it never rejects and has level zero.

As an additional weighted-regularization identity, assume Countable Choice and suppose that $C_0K^*K=K^*KC_0$. Let $J$ be the real partial isometry in the polar decomposition $K=J(K^*K)^{1/2}$. Let $\mathcal D=\{C_0^{1/2}x:x\in X\}$, and define $C_0^{-1/2}$ as the inverse of $C_0^{1/2}$ on $\mathcal D$. On $\Psi\in H$, set
$$J_h(\Psi)=\|K^*\Psi-h\|_X^2+\epsilon^2\|C_0^{-1/2}J^*\Psi\|_X^2$$
when $J^*\Psi\in\mathcal D$, and set $J_h(\Psi)=+\infty$ otherwise. Then $\Phi_h$ is a minimizer of $J_h$, and
$$K^*\Phi_h=B(B+\epsilon^2I_X)^{-1}h.$$

## Statement references

[[alg-ip-gaussian-map-feature-test|Gaussian MAP feature test]]

[[thm-ip-isonormal-gaussian-posterior-law|Gaussian posterior law in an isonormal inverse experiment]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, Theorems 2.4–2.5](https://arxiv.org/pdf/2402.00686)

[Kretschmann, Wachsmuth, and Werner, *Optimal regularized hypothesis testing in statistical inverse problems*, §1.2 and Theorem 2.3](https://arxiv.org/pdf/2212.12897)

## Facts & Assumptions

**Given:** The Gaussian model and hypotheses in the Statement, a feature vector $h$, a truth space $V$ when the calibrated test is used, and the commutation hypothesis for the final clause.

[F1] The MAP feature test has probe $\Phi_h=K C_0^{1/2}(C_0^{1/2}K^*KC_0^{1/2}+\epsilon^2I)^{-1}C_0^{1/2}h$ and threshold $c_h=\langle Km_0,\Phi_h\rangle-\langle m_0,h\rangle$. [[alg-ip-gaussian-map-feature-test]]

[F2] At any fixed $x$ and probe $\Phi$, $Y_x(\Phi)$ is normal with mean $\langle Kx,\Phi\rangle_H$ and variance $\epsilon^2\|\Phi\|_H^2$; the zero probe is the constant zero. [[def-ip-isonormal-white-noise-experiment]]

[F3] The standard normal distribution is continuous, strictly increasing, symmetric, and its upper $1-\alpha$ quantile satisfies $1-G(z_{1-\alpha})=\alpha$. [[lem-standard-normal-cdf-quantiles-and-symmetry]]

[F4] A positive injective trace-class covariance is compact and has a positive square root; its compact positive operator admits a complete orthonormal eigenbasis under Countable Choice. [[def-trace-class-operator]], [[lem-positive-square-root-of-a-compact-positive-operator]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]]

[F5] The cited partial-isometry definition uses nonzero complex Hilbert spaces; it supplies only the terminology here. The real operator $J$ is constructed and its defining properties are verified directly in step 1.2. [[def-isometry-coisometry-and-partial-isometry]]

[F6] A self-adjoint operator on each finite-dimensional real inner-product space has an orthonormal eigenbasis, and Hilbert-basis expansions converge in norm with Parseval's identity. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[F7] The Hilbert adjoint satisfies $\langle Kx,\Phi\rangle_H=\langle x,K^*\Phi\rangle_X$. [[def-hilbert-space-adjoint]]

[F8] For $\sigma>0$, the density of $N(a,\sigma^2)$ is uniquely maximized at $a$; when $\sigma=0$, $N(a,0)$ is the point mass at $a$, whose support point is its mode.

[F9] For every fixed $h$, the posterior-law theorem gives $\langle M_y,h\rangle_X=\langle m_0,h\rangle_X+y(\Phi_h)-\langle Km_0,\Phi_h\rangle_H$ for $P_Y$-almost every $y$, and gives the scalar posterior marginal stated in the Statement. [[thm-ip-isonormal-gaussian-posterior-law]]

[A1] The posterior input inherits the Axiom of Choice from its separate conditional-law construction. Countable Choice is used for the compact spectral and square-root suppliers in the weighted clause; its real partial isometry is constructed in the proof. The Gaussian-tail and calibration calculations use no additional choice principle. [[def-axiom-of-choice]], [[def-countable-choice]]



## Proof
1.1 For fixed $x$ and $\Phi\ne0$, [F2] gives $Y_x(\Phi)=\langle Kx,\Phi\rangle_H+\epsilon\|\Phi\|_H Z_0$ in law, where $Z_0$ is standard normal. By [F7], the mean is $\langle x,K^*\Phi\rangle_X$. Hence $\mathbb P_x\{Y_x(\Phi)>c\}=1-G((c-\langle x,K^*\Phi\rangle)/(\epsilon\|\Phi\|)$, which equals the stated formula by symmetry in [F3]. For $\Phi=0$, $Y_x(0)=0$ and the probability is exactly $\mathbf1\{0>c\}$. Substituting $\Phi_h,c_h$ proves the raw MAP formula. [given, F1, F2, F3, F7, algebra]

1.2 For the weighted clause, [F4] gives the compact positive injective spectral decomposition $C_0v_j=c_jv_j$ with $c_j>0$, finite-dimensional eigenspaces, and a complete orthonormal family spanning $X$. The commutation hypothesis makes each such eigenspace invariant under the self-adjoint positive operator $K^*K$. By [F6], diagonalize its finite-dimensional restriction in each eigenspace. This gives a common complete orthonormal basis with $C_0v_j=c_jv_j$ and $K^*Kv_j=\lambda_jv_j$, $\lambda_j\ge0$. For $\lambda_j>0$, put $w_j=Kv_j/\sqrt{\lambda_j}$; then $\langle w_i,w_j\rangle_H=\delta_{ij}$ by [F7]. Define $Tv_j=\sqrt{\lambda_j}v_j$ and define $Jv_j=w_j$ for $\lambda_j>0$ and $Jv_j=0$ for $\lambda_j=0$. For a finite sum $x=\sum_j a_jv_j$, orthonormality gives $\|Tx\|^2=\sum_j\lambda_j|a_j|^2\le\|K\|^2\|x\|^2$ and $\|Jx\|^2=\sum_{\lambda_j>0}|a_j|^2\le\|x\|^2$. Thus both rules extend by completeness to bounded real-linear operators on $X$, with $T$ self-adjoint and positive and $T^2=K^*K$. Any bounded self-adjoint positive square root $Q$ of $K^*K$ commutes with its square and therefore preserves each eigenspace; on an eigenspace with eigenvalue $\lambda\ge0$, it equals $\sqrt\lambda I$. Indeed, for $Q^2=\lambda I$, $a=\sqrt\lambda$, and a vector $x$ in that eigenspace, $V=(Q-aI)x$ satisfies $QV=-aV$, which positivity forces to vanish; when $\lambda=0$, $\|Qx\|^2=\langle Q^2x,x\rangle=0$. Hence $T=(K^*K)^{1/2}$. Also $\|Kx\|^2=\sum_j\lambda_j|\langle x,v_j\rangle|^2$, so $\ker K$ is the closed span of the zero-eigenvalue vectors and $(\ker K)^\perp$ is the closed span of the positive-eigenvalue vectors. The extended $J$ vanishes on $\ker K$, is isometric on $(\ker K)^\perp$, and has $\ker J=\ker K$ by its coordinate formula; these real-space properties verify that $J$ is a partial isometry as characterized in [F5], including when the basis is empty. The expansions of $Kx$ and $Jx$ show $K=JT$ and $\overline{R(K)}=\overline{\operatorname{span}}\{w_j:\lambda_j>0\}$. Since $w_j$ are orthonormal, with $\xi_j=\langle\Psi,w_j\rangle_H$ the adjoint identities and Fourier expansion in $X$ give $J^*\Psi=\sum_{\lambda_j>0}\xi_jv_j$ and $K^*\Psi=\sum_{\lambda_j>0}\sqrt{\lambda_j}\xi_jv_j$. If $h_j=\langle h,v_j\rangle_X$, the Fourier expansions give $\|K^*\Psi-h\|_X^2=\sum_{\lambda_j>0}|\sqrt{\lambda_j}\xi_j-h_j|^2+\sum_{\lambda_j=0}|h_j|^2$ and $\|C_0^{-1/2}J^*\Psi\|_X^2=\sum_{\lambda_j>0}|\xi_j|^2/c_j$ whenever the second term is defined. Components of $\Psi$ in $\overline{R(K)}^\perp$ affect neither expression. [given, A1, F4, F5, F6, F7, algebra]

1.3 For each fixed $h$, [F9] gives for $P_Y$-almost every $y$ that $\langle M_y,h\rangle_X=\langle m_0,h\rangle_X+y(\Phi_h)-\langle Km_0,\Phi_h\rangle_H=y(\Phi_h)-c_h$. For every $y$, the posterior feature marginal has the normal law stated in the theorem. If its variance $\sigma^2$ is positive, its density is $(\sigma\sqrt{2\pi})^{-1}\exp(-(t-\langle M_y,h\rangle_X)^2/(2\sigma^2))$, uniquely maximized at $\langle M_y,h\rangle_X$; if its variance is zero, it is the point mass at that same value. Thus its mode is $\langle M_y,h\rangle_X$ in both cases. On the probability-one set where the displayed identity holds, the raw comparison $y(\Phi_h)>c_h$ is therefore equivalent to a positive posterior marginal mode; its exceptional null set may depend on $h$. If $h=0$, the definitions give $\Phi_h=c_h=0$, and [F2] gives $Y_x(0)=0$ almost surely under each $P_x$ and $Y(0)=0$ almost surely under $P_Y$, so the raw test returns $0$ under all those laws. [F2, F8, F9, algebra]

2.1 For $x=i(v)$ in the stated null ball, [F7] gives $\langle Kx,\Phi\rangle=\langle x,K^*\Phi\rangle_X=\langle x,h\rangle_X+r_\Phi(v)\le|r_\Phi(v)|\le\|r_\Phi\|_{V^*}$. Thus the calibrated threshold is at least $\langle Kx,\Phi\rangle+\epsilon\|\Phi\|z_{1-\alpha}$. Applying step 1.1 to that threshold and using [F3] bounds the rejection probability by $1-G(z_{1-\alpha})=\alpha$. The same substitution gives the exact stated power formula at every $x$. If $\Phi=0$, then $r_0(v)=-\langle i(v),h\rangle$ and its norm is nonnegative, so the strict comparison is $0>\|r_0\|_{V^*}$, which is false; the level and power are zero. [given, F2, F3, F7, step 1.1, algebra]

3.1 For each $\lambda_j>0$, the scalar quadratic $|\sqrt{\lambda_j}\xi-h_j|^2+\epsilon^2|\xi|^2/c_j$ is minimized at $\xi_j=\sqrt{\lambda_j}c_jh_j/(\lambda_jc_j+\epsilon^2)$. These coefficients define a vector in $H$ and lie in the inverse-square-root domain because $|\xi_j|^2/c_j=\lambda_jc_j|h_j|^2/(\lambda_jc_j+\epsilon^2)^2\le|h_j|^2/(4\epsilon^2)$, using $t/(t+\epsilon^2)^2\le1/(4\epsilon^2)$ for $t\ge0$; Parseval makes the bound summable. The corresponding vector is $KSRSh=\Phi_h$, since $SRS$ has coefficient $c_jh_j/(\lambda_jc_j+\epsilon^2)$ on $v_j$. Each coordinate minimizes its summand, while the $\lambda_j=0$ terms are fixed and the orthogonal observation component is irrelevant, so $\Phi_h$ minimizes $J_h$. Finally [F7] and the diagonal action of $B$ show that $K^*\Phi_h$ has coefficient $\lambda_jc_jh_j/(\lambda_jc_j+\epsilon^2)$, which is the coefficient of $B(B+\epsilon^2I)^{-1}h$. [step 1.2, F4, F6, F7, algebra] ∎
## Remarks

The raw MAP formula uses a prior fixed independently of the observation whose rejection is tested. If prior covariance is tuned using the same sample, this theorem does not establish the displayed level or power formula for that empirical procedure.

## Remarks references

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §3.2](https://arxiv.org/pdf/2402.00686)
## Polar factorization diagram

The triangle records the real polar factorization $K=J(K^*K)^{1/2}$. On the common eigenbasis in step 3.1, the upper arrow sends $v_j$ to $\sqrt{\lambda_j}v_j$; the right arrow then sends it to $\sqrt{\lambda_j}w_j$ when $\lambda_j>0$, and to zero when $\lambda_j=0$. This agrees with the lower arrow $K$ on the basis and therefore on all of $X$ by boundedness and density. The diagram summarizes step 1.2 and is not used in any proof step.

```tikzcd
X \arrow[r, "(K^*K)^{1/2}"] \arrow[dr, "K"'] & X \arrow[d, "J"] \\
& H
```

