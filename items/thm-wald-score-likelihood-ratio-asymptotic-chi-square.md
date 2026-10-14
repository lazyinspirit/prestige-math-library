---
id: thm-wald-score-likelihood-ratio-asymptotic-chi-square
kind: theorem
title: Wald, score, and likelihood-ratio asymptotic chi-square calibration
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-parametric-statistical-model
  - def-qmd-path
  - def-wald-score-likelihood-ratio-statistics
  - thm-regular-mle-asymptotic-linearity-and-normality
  - def-op-and-little-op-stochastic-bounds
  - thm-vector-stochastic-order-calculus
  - thm-vector-slutsky
  - thm-multivariate-iid-central-limit-theorem
  - def-multivariate-normal-law
  - def-chi-square-law
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26, PDF pp. 9–17"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "John Duchi, Stats 300B Lecture 6, Winter 2018, complete scribe note, PDF pp. 1–5"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2018/lecture-06.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 4: Hypothesis tests in likelihood models, lines 33–76"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html"
---

## Statement

Assume AC. Let $X_1,\ldots,X_n$ be iid from $P_{\theta_0}$ in a correctly
specified dominated model, with $\theta_0=(0,\eta_0)$ an interior point of
the full open parameter set $\Theta\subset\mathbb R^q\times\mathbb R^{d-q}$.
In a local $C^1$ parameter chart, suppose the null is $\psi=0$, so its local
null set is a linear subspace of codimension $q\ge1$; all score and
information coordinates below use this chart. Assume QMD at
$\theta_0$ with positive-definite information
$$
I=\begin{pmatrix}I_{\psi\psi}&I_{\psi\eta}\\I_{\eta\psi}&I_{\eta\eta}\end{pmatrix},
$$
and write $I_{\mathrm{eff}}=I_{\psi\psi}-
I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\psi}$. If $d=q$, interpret nuisance
blocks as empty, so $I_{\mathrm{eff}}=I_{\psi\psi}=I$ and products involving
$\eta$ are zero. Let
$\Delta_n=n^{-1/2}\sum_i s_{\theta_0}(X_i)$. Assume the hypotheses of
[[thm-regular-mle-asymptotic-linearity-and-normality]] hold for the full model.
Assume the constrained MLE is measurable, exact, consistent, and maximizes
over a set containing $\theta_0$; it is root-$n$ bounded by that theorem's
localization conclusion. For every finite $M$ the
following likelihood and score expansions hold uniformly over $\|h\|\le M$:
$$
\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0) =h^T\Delta_n-\tfrac12h^TIh+o_P(1),
$$
$$
n^{-1/2}\nabla\ell_n(\theta_0+h/\sqrt n) =\Delta_n-Ih+o_P(1).
$$
Assume the covariance, score-projection, and efficient-information estimators in
[[def-wald-score-likelihood-ratio-statistics]] converge in probability to
their stated limits. Partition $\Delta_n=(\Delta_{\psi,n},\Delta_{\eta,n})$,
put $r_n=\Delta_{\psi,n}-I_{\psi\eta}I_{\eta\eta}^{-1}\Delta_{\eta,n}$,
and set $T_n=r_n^TI_{\mathrm{eff}}^{-1}r_n$. Then, under the null,
$$
W_n=T_n+o_P(1),\quad S_n=T_n+o_P(1),\quad L_n=T_n+o_P(1),\qquad W_n\Rightarrow\chi_q^2,\quad S_n\Rightarrow\chi_q^2,\quad L_n\Rightarrow\chi_q^2.
$$
Here $\chi_q^2$ is the law defined in [[def-chi-square-law]]. This is an
asymptotic calibration; no exact finite-sample
chi-square law is asserted.

## Facts & Assumptions

**Given:** The iid correctly specified model and the local-null, QMD,
positive-information, consistency, local-expansion, estimator, and covariance
hypotheses in the Statement. Assume AC.

[F1] [[def-qmd-path]]: QMD supplies the score $s_{\theta_0}$ and information matrix $I=\mathbb E_{\theta_0}[s_{\theta_0}s_{\theta_0}^T]$.

[F2] [[def-wald-score-likelihood-ratio-statistics]]: in local coordinates $(\psi,\eta)$, $W_n$ uses the tested MLE coordinates and their covariance, $S_n$ uses the consistent estimated efficient score and information, and $L_n$ is twice the unrestricted-minus-restricted log likelihood.

[F3] [[thm-regular-mle-asymptotic-linearity-and-normality]]: under its local envelope and consistency hypotheses, the full MLE has the stated asymptotic linear representation, and any consistent exact restricted maximizer containing $\theta_0$ is root-$n$ bounded.

[F4] [[def-op-and-little-op-stochastic-bounds]]: boundedness in probability and convergence in probability use the finite-dimensional Euclidean norm.

[F5] [[thm-vector-stochastic-order-calculus]]: a vector converging in distribution is bounded in probability, and products of bounded and vanishing vectors vanish in probability.

[F6] [[thm-vector-slutsky]]: a continuous map of a weakly convergent vector and a vector converging in probability to a constant has the corresponding weak limit.

[F7] [[thm-multivariate-iid-central-limit-theorem]]: under AC, the normalized sum of iid finite-second-moment vectors converges to a multivariate normal with their covariance.

[F8] [[def-multivariate-normal-law]]: under AC, $N_d(0,I)$ has covariance $I$ and its linear maps are multivariate normal.

[F9] [[def-chi-square-law]]: for $q\ge1$, $\chi_q^2$ is the law of $\sum_{j=1}^qG_j^2=\|G\|^2$ when $G\sim N_q(0,I_q)$ has independent standard-normal coordinates.

[A1] The local likelihood and normalized score expansions are assumed uniformly on each bounded local parameter set as stated; QMD alone is not used to infer them here.

[A2] $I$ is positive definite and $1\le q\le d$; when $q=d$, the nuisance blocks are empty and their products are interpreted as zero.

[A3] [[def-axiom-of-choice]]: AC is inherited from the density-representative convention in [F2], the MLE theorem [F3], and the probability-law suppliers [F7]–[F9].

## Proof

1.1 If $d=q$, then $I_{\mathrm{eff}}=I$ is positive definite. If $d>q$, $I_{\eta\eta}$ is a positive-definite principal block. For nonzero $v\in\mathbb R^q$, evaluate the quadratic form of $I$ at $(v,-I_{\eta\eta}^{-1}I_{\eta\psi}v)$; the result is $v^TI_{\mathrm{eff}}v>0$, so $I_{\mathrm{eff}}$ is positive definite in either case. Normalizing $p_{\theta_0+h}$ in the QMD expansion [F1], write $\sqrt{p_{\theta_0+h}}=\sqrt{p_{\theta_0}}+ \tfrac12h^Ts_{\theta_0}\sqrt{p_{\theta_0}}+e_h$ with $\|e_h\|_{L^2(\mu)}=o(\|h\|)$. Expanding the squared norm, whose value is $\int p_{\theta_0+h}d\mu=1$, gives $h^T\mathbb E_{\theta_0}s_{\theta_0}+O(\|h\|^2)+o(\|h\|)=0$. Taking $h=te_j$ and dividing by $t$ proves each score coordinate has mean zero. Since $s_{\theta_0}$ is square integrable by [F1], the iid CLT [F7] gives $\Delta_n\Rightarrow N_d(0,I)$ under AC. Define $r_n=\Delta_{\psi,n}-I_{\psi\eta}I_{\eta\eta}^{-1}\Delta_{\eta,n}$. Its covariance, by block multiplication, is $$\operatorname{Var}(r_n)=I_{\psi\psi}-I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\psi}-I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\psi}+I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\eta}I_{\eta\eta}^{-1}I_{\eta\psi}=I_{\mathrm{eff}}.$$ Thus the linear-map case of Slutsky [F6] gives $r_n\Rightarrow N_q(0,I_{\mathrm{eff}})$; its covariance is the block calculation above. [A2, A3, F1, F6, F7, F8, given, algebra]

2.1 By [F3], the full MLE satisfies $\sqrt n(\hat\theta_n-\theta_0)=I^{-1}\Delta_n+o_P(1)$. Solving the block system $I(a,b)^T=(\Delta_{\psi,n},\Delta_{\eta,n})^T$ shows its tested block is $a=I_{\mathrm{eff}}^{-1}r_n$, including the empty-nuisance case. If $d=q$, the local null contains only $\theta_0$, so consistency makes the constrained MLE equal to $\theta_0$ with probability tending to one and there is no nuisance expansion to prove. Otherwise, [F3] makes the constrained root-$n$ error bounded. In local coordinates $h=(u,v)$ for $(\eta,\psi)$, the limiting quadratic log likelihood is $Q_n(u,v)=u^T\Delta_{\eta,n}+v^T\Delta_{\psi,n} -\tfrac12\{u^TI_{\eta\eta}u+2u^TI_{\eta\psi}v+v^TI_{\psi\psi}v\}.$ For general $v$, completing the square in $u$ gives the unique maximizer $u=I_{\eta\eta}^{-1}(\Delta_{\eta,n}-I_{\eta\psi}v)$ and the profile $v^Tr_n-\tfrac12v^TI_{\mathrm{eff}}v$ up to a term independent of $v$. At the null $v=0$ this gives the unique nuisance maximizer $u_0=I_{\eta\eta}^{-1}\Delta_{\eta,n}$. On every distance-$\varepsilon$ set from $u_0$, strict positive definiteness of $I_{\eta\eta}$ makes the quadratic log likelihood at least $\tfrac12\lambda_{\min}(I_{\eta\eta})\varepsilon^2$ below its maximum. Uniformity of the likelihood expansion [A1], constrained root-$n$ tightness [F3], and this gap therefore give $\sqrt n(\tilde\eta_n-\eta_0)=I_{\eta\eta}^{-1}\Delta_{\eta,n}+o_P(1)$. [A1, A2, F3, F4, step 1.1, algebra]

3.1 Consistency places both maximizers in the open chart neighborhood with probability tending to one; the off-chart zero conventions in [F2] therefore do not affect the expansions below. The upper-left block of $I^{-1}$ is $I_{\mathrm{eff}}^{-1}$ by solving the block system $I(x,y)^T=(a,0)^T$. The differentiable local chart has tested coordinate $\psi$, so the Wald statistic in [F2], the expansion in step 2.1, and covariance consistency give $W_n=(I_{\mathrm{eff}}^{-1}r_n)^TI_{\mathrm{eff}} (I_{\mathrm{eff}}^{-1}r_n)+o_P(1) =r_n^TI_{\mathrm{eff}}^{-1}r_n+o_P(1).$ [A1, A2, F2, F4, step 2.1, algebra]

3.2 If $d=q$, the nuisance score is empty and the score expansion [A1] at $h=0$ gives $U_{\mathrm{eff},n}=U_{\psi,n}(\theta_0)=\Delta_n+o_P(1)=r_n+o_P(1)$. If $d>q$, the score expansion [A1] at the constrained MLE and $\sqrt n(\tilde\eta_n-\eta_0)=I_{\eta\eta}^{-1}\Delta_{\eta,n}+o_P(1)$ give $U_{\psi,n}(\tilde\theta_n)=r_n+o_P(1)$ and $U_{\eta,n}(\tilde\theta_n)=o_P(1)$. The estimated projection coefficient is bounded in probability by consistency, so the efficient score in [F2] is $r_n+o_P(1)$. Efficient-information consistency and [F5] imply $S_n=r_n^TI_{\mathrm{eff}}^{-1}r_n+o_P(1)$. [A1, A2, F2, F4, F5, step 2.1, algebra]

3.3 The likelihood expansion in [A1] makes $L_n$ equal, up to $o_P(1)$, twice the maximum of $Q_n(u,v)$ over all local $(u,v)$ minus twice its maximum over the null $v=0$. The unrestricted and restricted quadratic maximizers are linear functions of $\Delta_n$, hence are $O_P(1)$ by step 1.1 and [F5]. Taking a bounded local ball large enough with probability arbitrarily close to one justifies using the uniform expansions for both maxima. The profile formula in step 2.1 reduces this difference to $2\sup_v\{v^Tr_n-\tfrac12v^TI_{\mathrm{eff}}v\} =r_n^TI_{\mathrm{eff}}^{-1}r_n.$ The identity follows by completing the square at $v=I_{\mathrm{eff}}^{-1}r_n$. Hence $L_n=r_n^TI_{\mathrm{eff}}^{-1}r_n+o_P(1)$. [A1, A2, F2, F4, F5, step 2.1, algebra]

4.1 Since $r_n\Rightarrow N_q(0,I_{\mathrm{eff}})$ and $I_{\mathrm{eff}}$ is positive definite, its transformed vector $I_{\mathrm{eff}}^{-1/2}r_n$ converges to $N_q(0,I_q)$. The squared Euclidean norm of that limit is $\chi_q^2$ by [F9]. Combining this with steps 3.1–3.3 and [F4]–[F5] proves all three limits and their common first-order approximation. AC is inherited through [F2], [F3], and [F7]–[F9], as recorded in [A3]. [A3, F4, F5, F6, F7, F8, F9, step 1.1, step 3.1, step 3.2, step 3.3] ∎
