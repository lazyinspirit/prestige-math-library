---
id: thm-square-root-kalman-finite-horizon-perturbation-bound
kind: theorem
title: "The square-root filter has an explicit conditioned finite-horizon error bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-finite-budget-square-root-kalman-filter
  - alg-kalman-filter
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-square-root-kalman-prediction-factor-identity
  - lem-square-root-kalman-measurement-block-factor-identity
  - lem-square-root-kalman-prearray-qr-error-bound
  - lem-square-root-kalman-schur-perturbation-bound
  - lem-square-root-kalman-triangular-solve-forward-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§2–3.4, factor covariance recursions and triangular innovation solves"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §§3.3.1 and 3.5.2, covariance-factor stability and limitations for gains and estimates"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, equations (4.20)–(4.29), exact Kalman prediction and update maps"
verification:
  precheck: pass
---

## Statement

Fix a finite horizon $T$ and let $(m_{k|k},P_{k|k})$ and
$(m_k^-,P_k^-)$ be the exact real-arithmetic prediction and update recursions
of [[alg-kalman-filter]]. Let
$$S_k=H_kP_k^-H_k^T+R_k,\qquad B_k=P_k^-H_k^T,\qquad v_k=y_k-H_km_k^-.$$
Suppose each innovation has a certified lower bound
$$x^TS_kx\ge\mu_k\|x\|_2^2\quad(x\in\mathbb R^{p_k}),\qquad \mu_k>0.$$
Let the procedure [[alg-finite-budget-square-root-kalman-filter]] output represented covariances
$\widehat P_{k|k}=\widehat L_{k|k}\widehat L_{k|k}^T$ and means
$\widehat m_{k|k}$. At step $k$, assume certified local bounds
$$\begin{aligned} &\|\widehat P_k^--(F_k\widehat P_{k-1|k-1}F_k^T+Q_k)\|_2\le e_k^P,\\ &\|\widehat J_k-J_k(\widehat P_k^-)\|_2\le e_k^J,\\ &\|\widehat m_k^--F_k\widehat m_{k-1|k-1}\|_2\le e_k^m,\\ &\|\widehat v_k-(y_k-H_k\widehat m_k^-)\|_2\le e_k^v,\\ &\|\widehat L_{11,k}\widehat z_k-\widehat v_k\|_2\le\rho_k,\\ &\|\widehat m_{k|k}-(\widehat m_k^-+\widehat L_{21,k}\widehat z_k)\|_2\le e_k^u, \end{aligned}$$
where
$$J_k(P)=\begin{bmatrix}H_kPH_k^T+R_k&H_kP\\PH_k^T&P\end{bmatrix}$$
and $\widehat J_k=\widehat L_k\widehat L_k^T$ is the joint covariance
represented by the measurement QR blocks. Let $f_k\ge\|F_k\|_2$,
$h_k\ge\|H_k\|_2$, $b_k\ge\|B_k\|_2$, and
$r_k\ge\|v_k\|_2$ be certified finite upper bounds. Choose
$\Delta_0\ge\|\widehat m_{0|0}-m_0\|_2+
\|\widehat P_{0|0}-P_0\|_2$.

Define recursively
$$c_k^H=1+h_k^2,\qquad \varepsilon_k=c_k^H(f_k^2\Delta_{k-1}+e_k^P)+e_k^J.$$
If $\varepsilon_k\le\mu_k/2$, put
$$K_k^\#=1+2b_k/\mu_k,\qquad C_k^K=\frac2{\mu_k}\left(1+\frac{b_k}{\mu_k}\right),\qquad C_k^P=2+\frac{4b_k}{\mu_k}+2\left(\frac{b_k}{\mu_k}\right)^2,$$
$$A_k=(1+h_kK_k^\#)f_k+ (C_k^Kr_k+C_k^P)c_k^Hf_k^2,$$
$$\eta_k=(1+h_kK_k^\#)e_k^m+ (C_k^Kr_k+C_k^P)(c_k^He_k^P+e_k^J)+ K_k^\#(e_k^v+\rho_k)+e_k^u, \qquad \Delta_k=A_k\Delta_{k-1}+\eta_k.$$
Then each $\widehat S_k$ is positive definite, the factor update is
defined, and, with $z_k^*=\widehat L_{11,k}^{-1}\widehat v_k$,
$$\|\widehat z_k-z_k^*\|_2\le \frac{\rho_k}{\sigma_{\min}(\widehat L_{11,k})} \le\sqrt{\frac2{\mu_k}}\,\rho_k,$$
where $\sigma_{\min}(T)=\min_{\|x\|_2=1}\|Tx\|_2$. Also
$$\|\widehat m_{T|T}-m_{T|T}\|_2+ \|\widehat P_{T|T}-P_{T|T}\|_2\le\Delta_T.$$
Equivalently,
$$\Delta_T=\left(\prod_{k=1}^T A_k\right)\Delta_0+ \sum_{j=1}^T\left(\prod_{k=j+1}^T A_k\right)\eta_j,$$
where an empty product is $1$. The bound is finite-horizon and explicitly
conditioned on the innovation margins and data scales. It implies no
uniform-in-time stability or accuracy claim.

## Facts & Assumptions

**Given:** The exact and computed finite-horizon recursions, local defect bounds in the Statement, and $\varepsilon_k\le\mu_k/2$ for each step.

[F1] The exact Kalman recursion uses $P_k^-=F_kP_{k-1|k-1}F_k^T+Q_k$ and $m_{k|k}=m_k^-+B_kS_k^{-1}v_k$, $P_{k|k}=P_k^- -B_kS_k^{-1}B_k^T$. [[alg-kalman-filter]]

[F2] The measurement QR blocks satisfy $\widehat P_{k|k}=\widehat D_k- \widehat B_k\widehat S_k^{-1}\widehat B_k^T$ and $\widehat L_{21,k}\widehat L_{11,k}^{-1}= \widehat B_k\widehat S_k^{-1}$ when $\widehat S_k\succ0$. [[lem-square-root-kalman-measurement-block-factor-identity]]

[F3] Under its successful no-underflow QR and precision hypotheses ($qu<1$, and $ru<1$ for nonempty product inner dimensions), the prearray bound includes input-factor, rounded-product, and Householder QR contributions to $\|\widehat J_k-J_k(\widehat P_k^-)\|_2$; the prediction array has the analogous bound for $e_k^P$. [[lem-square-root-kalman-prearray-qr-error-bound]]

[F4] The Schur perturbation lemma proves inverse, gain and covariance estimates under Frobenius block-error bounds. Its resolvent and Schur expansions are algebraic identities; the operator-norm estimates needed here are derived directly in step 3.1. [[lem-square-root-kalman-schur-perturbation-bound]]

[F5] The operator norm is the maximum Euclidean stretch of a unit vector, and compatible operator norms are submultiplicative. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]

[F6] If $T$ is nonsingular and $r=T\widehat z-v$, then $\|\widehat z-T^{-1}v\|_2\le\|r\|_2/\sigma_{\min}(T)$; if $TT^T\succeq\nu I$, then $\sigma_{\min}(T)\ge\sqrt\nu$. [[lem-square-root-kalman-triangular-solve-forward-bound]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $\delta_{k-1}^P=\|\widehat P_{k-1|k-1}-P_{k-1|k-1}\|_2$ and $\delta_{k-1}^m=\|\widehat m_{k-1|k-1}-m_{k-1|k-1}\|_2$. By [F1], [F5] and the prediction defect, $$\|\widehat P_k^--P_k^-\|_2 \le f_k^2\delta_{k-1}^P+e_k^P,\qquad \|\widehat m_k^--m_k^-\|_2 \le f_k\delta_{k-1}^m+e_k^m.$$ [F1, F5, given, algebra]

2.1 Let $C_H=\begin{bmatrix}H_k\\I\end{bmatrix}$. Direct block multiplication gives $J_k(\widehat P_k^-)-J_k(P_k^-)=C_H(\widehat P_k^--P_k^-)C_H^T$. For every $x$, $\|C_Hx\|_2^2=\|H_kx\|_2^2+\|x\|_2^2\le (1+h_k^2)\|x\|_2^2$, so [F5] and the joint defect imply $$\|\widehat J_k-J_k(P_k^-)\|_2 \le(1+h_k^2)(f_k^2\delta_{k-1}^P+e_k^P)+e_k^J.$$ If $\delta_{k-1}^P\le\Delta_{k-1}$, the right side is at most $\varepsilon_k$. Each of its observation, cross, and state blocks therefore has operator error at most $\varepsilon_k$: every block is obtained by left- and right-multiplying by coordinate projections of operator norm at most one, so [F5] and submultiplicativity give the bound. [F3, F5, step 1.1, algebra]

3.1 Assume $\delta_{k-1}^P\le\Delta_{k-1}$ and suppress $k$. Write $E_S=\widehat S-S$, $E_B=\widehat B-B$, and $E_D=\widehat D-P^-$. Step 2.1 bounds their operator norms by $\varepsilon\le\mu/2$. Cauchy–Schwarz gives $|x^TE_Sx|\le\varepsilon\|x\|_2^2$, hence $\widehat S\succeq(\mu-\varepsilon)I\succ0$. The same inequality applied to $y=Sx$ and $y=\widehat Sx$ gives $\|S^{-1}\|_2\le\mu^{-1}$ and $\|\widehat S^{-1}\|_2\le\beta:=(\mu-\varepsilon)^{-1}\le2/\mu$. The resolvent identity $\widehat S^{-1}-S^{-1}=-S^{-1}E_S\widehat S^{-1}$ then bounds the inverse difference by $\mu^{-1}\beta\varepsilon$. Expanding the gain and Schur differences as in [F4], now applying operator-norm triangle and product inequalities throughout, yields $$\|\widehat B\widehat S^{-1}-BS^{-1}\|_2\le\beta\varepsilon+b\mu^{-1}\beta\varepsilon\le C^K\varepsilon,$$ $$\|\widehat P_{k|k}-P_{k|k}\|_2\le\varepsilon+2b\beta\varepsilon+b^2\mu^{-1}\beta\varepsilon+\beta\varepsilon^2\le C^P\varepsilon.$$ Here [F2] identifies the represented posterior as the Schur complement, and $\beta\varepsilon^2\le\varepsilon$. Finally, $\|\widehat B\widehat S^{-1}\|_2\le(b+\varepsilon)\beta\le1+2b/\mu=K^\#$. These estimates use operator block bounds directly, without a Frobenius conversion. [F2, F4, F5, given, step 2.1, algebra]

4.1 The innovation residual and computed-innovation defect give $$\|\widehat v_k-v_k\|_2\le h_k\|\widehat m_k^--m_k^-\|_2+e_k^v.$$ Let $z_k^*=\widehat L_{11,k}^{-1}\widehat v_k$. By [F6] and the $\widehat S_k\succeq(\mu_k/2)I$ bound from step 3.1, $\|\widehat z_k-z_k^*\|_2\le\sqrt{2/\mu_k}\,\rho_k$, as included in the Statement. Because $\widehat L_{11,k}\widehat z_k=\widehat v_k+\xi_k$ with $\|\xi_k\|_2\le\rho_k$, [F2] gives $\widehat L_{21,k}\widehat z_k= \widehat B_k\widehat S_k^{-1}(\widehat v_k+\xi_k)$. Subtract the exact mean equation in [F1], insert and subtract $\widehat B_k\widehat S_k^{-1}v_k$, and use step 3.1. The result is $$\|\widehat m_{k|k}-m_{k|k}\|_2\le (1+h_kK_k^\#)(f_k\delta_{k-1}^m+e_k^m) +C_k^K\varepsilon_k r_k+ K_k^\#(e_k^v+\rho_k)+e_k^u.$$ [F1, F2, F6, given, step 1.1, step 3.1, algebra]

5.1 Add the covariance bound in step 3.1 to the mean bound in step 4.1. Using $\delta_{k-1}^P,\delta_{k-1}^m\le\Delta_{k-1}$ and the definition of $\varepsilon_k$ yields $$\|\widehat m_{k|k}-m_{k|k}\|_2+ \|\widehat P_{k|k}-P_{k|k}\|_2 \le A_k\Delta_{k-1}+\eta_k=\Delta_k.$$ Induction from the stated $\Delta_0$ proves the bound for each $k$. Repeated substitution of the scalar recurrence gives the displayed product-and-sum formula at $T$. Since each assumption and step concerns only the finite indices $1,\ldots,T$, no uniform-in-time conclusion follows. [given, step 1.1, step 2.1, step 3.1, step 4.1, induction, algebra] ∎

