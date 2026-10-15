---
id: thm-exact-gaussian-linear-regression-inference
kind: theorem
title: "Exact t and partial F inference in full-rank Gaussian regression"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 4
deps:
  - lem-full-column-rank-matrix-has-economy-qr
  - def-fixed-design-linear-regression-model
  - def-least-squares-solution-set
  - thm-least-squares-fitted-vector-and-solution-set
  - thm-linear-estimability-iff-row-space
  - def-axiom-of-choice
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-randomized-test
  - def-test-size-and-power
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - def-chi-square-law
  - def-student-t-and-f-laws
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-grouping-independent-sigma-algebras
  - lem-measurable-functions-preserve-independence
  - def-orthogonal-projection
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - prop-pythagorean-parallelogram-and-polarisation-identities
  - def-countable-choice
  - lem-axiom-of-choice-implies-countable-choice
  - cor-continuous-functions-are-borel-measurable
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-dimension-of-a-linear-subspace
  - thm-row-rank-equals-column-rank
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-dimension-of-a-direct-sum
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Section 15: Multiple Linear Regression, PDF pp. 1–7"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Lecture 4: Multivariate Normal Distribution, PDF pp. 1–4"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf"
    - title: "Charlotte Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 1–7"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Stanford University, Stats 203, Inference for Linear Regression, Lecture 4, sections on mean-response and prediction intervals"
      url: "https://web.stanford.edu/class/stats203/lectures/lecture4/"
---

## Statement

Assume the Axiom of Choice. Fix a deterministic full-column-rank matrix $X\in\mathbb R^{n\times p}$ with $1\le p<n$, a parameter $\beta\in\mathbb R^p$, and $\sigma^2>0$. Observe $Y=X\beta+\epsilon$, where the coordinates of $\epsilon$ are independent with law $N(0,\sigma^2)$. This is the fixed-design Gaussian experiment on $\mathbb R^n$ indexed by $(\beta,\sigma^2)\in\mathbb R^p\times(0,\infty)$.

Let $\widehat\beta=(X^TX)^{-1}X^TY$ and $P_X:=X(X^TX)^{-1}X^T$, the orthogonal projection matrix onto $\operatorname{col}X$. Define
$$RSS_F=\|(I_n-P_X)Y\|^2,\qquad \nu=n-p,\qquad s^2=RSS_F/\nu,\qquad s=\sqrt{s^2}.$$
For $c\in\mathbb R^p\setminus\{0\}$, set
$$T_c=\begin{cases}\dfrac{c^T\widehat\beta-c^T\beta}{s\sqrt{c^T(X^TX)^{-1}c}},&s>0,\\0,&s=0.\end{cases}$$
Then $\widehat\beta\sim N_p(\beta,\sigma^2(X^TX)^{-1})$, $\widehat\beta$ is independent of $RSS_F$, $RSS_F/\sigma^2\sim\chi^2_\nu$, $s>0$ almost surely, and $T_c\sim t_\nu$.

For a fixed reduced design $X_R\in\mathbb R^{n\times(p-q)}$ with $\operatorname{rank}X_R=p-q$, $\operatorname{col}X_R\subseteq\operatorname{col}X$, and $1\le q\le p$, put $W_R=\operatorname{col}X_R$ and
$$RSS_R=\|Y-P_{W_R}Y\|^2.$$
Under the null hypothesis $X\beta\in W_R$, the statistic
$$F=\begin{cases}\dfrac{(RSS_R-RSS_F)/q}{RSS_F/\nu},&RSS_F>0,\\0,&RSS_F=0\end{cases}$$
has law $F_{q,\nu}$. Both denominator degrees of freedom are positive; the empty reduced design space is allowed when $q=p$.

For a null value $\theta_0$, define $T_{c,\theta_0}$ by replacing $c^T\beta$ in the numerator of $T_c$ by $\theta_0$, with the same zero-denominator convention. For $0<\alpha<1$, the two-sided test of $H_0:c^T\beta=\theta_0$ that rejects when $|T_{c,\theta_0}|>t_{\nu,1-\alpha/2}$ has size exactly $\alpha$. The partial F test that rejects when $F>F^{-1}_{q,\nu}(1-\alpha)$ also has size exactly $\alpha$ under its stated null. The joint Gaussian maximum-likelihood estimate is $\widehat\beta$ together with $\widehat\sigma^2_{\rm ML}=RSS_F/n$ almost surely, distinct from $s^2=RSS_F/(n-p)$. If an observed vector has $RSS_F=0$, the likelihood has no maximizer over $\sigma^2>0$; this event has probability zero in the stated model.

## Facts & Assumptions

**Given:** The Axiom of Choice, a fixed full-column-rank $X\in\mathbb R^{n\times p}$ with $1\le p<n$, and independent errors $\epsilon_i\sim N(0,\sigma^2)$ with $\sigma^2>0$.

[A1] The Axiom of Choice is assumed in the Gaussian normal-law and orthogonal-coordinate results used below. [[def-axiom-of-choice]]

[F1] A full-column-rank real matrix has an economy QR factorization $X=QR$ with $Q^TQ=I_p$, $R$ upper triangular with positive diagonal, and an orthogonal completion $[Q\ Q_0]$; its projection is $P_X=QQ^T$. [[lem-full-column-rank-matrix-has-economy-qr]]

[F2] An orthogonal transformation of a vector with independent standard-normal coordinates again has independent standard-normal coordinates. [[thm-orthogonal-transform-preserves-standard-normal-product-law]]

[F3] The sum of squares of $k$ independent standard-normal variables has law $\chi_k^2$ for every integer $k\ge1$. [[def-chi-square-law]]

[F4] A positive-degree chi-square variable is positive almost surely. [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

[F5] Student $t_k$ is a ratio of an independent standard normal and $\chi_k^2/k$, and $F_{r,s}$ is a ratio of independent scaled chi-square variables. [[def-student-t-and-f-laws]]

[F6] The $t_k$ CDF is continuous, symmetric, and strictly increasing on $\mathbb R$; the $F_{r,s}$ CDF is continuous and strictly increasing on $(0,\infty)$, so the stated quantiles exist uniquely. [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

[F7] A randomized test is a measurable procedure with binary action and measurable rejection function giving the probability of rejection. [[def-randomized-test]]

[F8] The size of a test is the supremum of its rejection probabilities over the null parameter set. [[def-test-size-and-power]]

[F9] By [[def-standard-normal-and-normal-laws]], $N(0,\sigma^2)$ for $\sigma>0$ is the pushforward of $N(0,1)$ under $x\mapsto\sigma x$. Since the standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$, the change of variable $z=x/\sigma$ gives density $(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)}$ for $N(0,\sigma^2)$.

[F10] A statistical experiment is a measurable data space with a parameter-indexed family of sampling laws; an estimator is a measurable statistic with target the estimand. [[def-statistical-experiment]] [[def-statistic-and-estimator]]

[F11] Orthogonal projections give orthogonal decompositions. [[def-orthogonal-projection]]

[F12] Squared norms add across orthogonal summands. [[prop-pythagorean-parallelogram-and-polarisation-identities]]

[F13] Under the Axiom of Choice, Countable Choice follows; continuous Euclidean maps are Borel measurable under Countable Choice. [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]] [[cor-continuous-functions-are-borel-measurable]]

[F14] The fixed-design first-moment model has fixed $X$, response $Y\in\mathbb R^n$, parameter $\beta\in\mathbb R^p$, and $\mathbb E_\beta Y=X\beta$; it imposes no covariance or Gaussian assumption. [[def-fixed-design-linear-regression-model]]

[F15] The least-squares solution set is $\operatorname*{arg\,min}_{b\in\mathbb R^p}\|y-Xb\|_2^2$. [[def-least-squares-solution-set]]

[F16] Least-squares minimizers are characterized by the normal equation, and their fitted vector and residual are uniquely $P_{\operatorname{col}X}y$ and $y-P_{\operatorname{col}X}y$. [[thm-least-squares-fitted-vector-and-solution-set]]

[F17] In the fixed-design first-moment model, $c^T\beta$ is linearly estimable exactly when $c\in\operatorname{row}(X)=\operatorname{im}(X^T)$. [[thm-linear-estimability-iff-row-space]]

[F18] Disjoint groups of an independent coordinate family generate independent sigma-algebras. [[thm-grouping-independent-sigma-algebras]]

[F19] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F20] A linear image of a multivariate normal vector is multivariate normal, with covariance obtained by the corresponding matrix transform. [[def-multivariate-normal-law]]

[F21] Every subspace of a finite-dimensional inner-product space has an orthogonal complement giving a direct-sum decomposition of the whole space. [[thm-finite-dimensional-orthogonal-decomposition]]

[F22] Every finite-dimensional real inner-product space has an orthonormal basis, including the empty basis in dimension zero. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[F23] Every subspace of a finite-dimensional vector space is finite-dimensional. [[thm-dimension-of-a-linear-subspace]]

[F24] The dimension of a finite direct sum of finite-dimensional subspaces is the sum of their dimensions. [[cor-dimension-of-a-direct-sum]]

[F25] Matrix rank is row rank; row and column ranks are dimensions of their respective spaces and are equal for every finite matrix. [[def-row-space-column-space-nullspace-and-matrix-ranks]] [[thm-row-rank-equals-column-rank]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The Gaussian experiment has the fixed-design first moment in [F14], and [F15] defines its least-squares solution set. Apply [F1] and write $X=QR$, with $[Q\ Q_0]$ orthogonal. Since $R$ is invertible, $X^TX=R^TR$ and $(X^TX)^{-1}=R^{-1}R^{-T}$. Therefore $\widehat\beta=R^{-1}Q^TY$ and $P_X=Q R(R^TR)^{-1}R^TQ^T=QQ^T$. For any $b\in\mathbb R^p$, orthogonality of the columns of $Q$ and $Q_0$ gives $\|Y-Xb\|^2=\|Q^TY-Rb\|^2+\|Q_0^TY\|^2$. The unique minimizer is $b=R^{-1}Q^TY$, consistent with [F16]; the residual is $Q_0Q_0^TY$. [given, F1, F11, F12, F14, F15, F16, algebra]

1.2 Set $W_U=\operatorname{col}X$, $A=W_U\cap W_R^\perp$, and $B=W_U^\perp$, and let $P_A,P_B$ be the orthogonal projections onto $A,B$. By [F21], $\mathbb R^n=W_U\oplus B$. For any $u\in W_U$, write $u=P_{W_R}u+(u-P_{W_R}u)$. The first term belongs to $W_R\subseteq W_U$, while the second lies in $W_R^\perp$ by [F11] and in $W_U$ because it is a difference of vectors in $W_U$. Thus $u\in W_R+A$. Conversely $W_R,A\subseteq W_U$, and $W_R\cap A=\{0\}$ because $A\subseteq W_R^\perp$ and [F21] gives $W_R\cap W_R^\perp=\{0\}$, so $W_U=W_R\oplus A$. Combining the two decompositions gives $\mathbb R^n=W_R\oplus A\oplus B$, with pairwise orthogonal summands. By [F23], these subspaces are finite-dimensional. The columns of $X$ are a basis of $W_U$, so $\dim W_U=p$. If $q=p$, then $W_R=\{0\}$ and $\dim W_R=0=p-q$; if $q<p$, [F25] gives $\dim W_R=\operatorname{crank}(X_R)=\operatorname{rrank}(X_R)=\operatorname{rank}(X_R)=p-q$. Applying [F24] gives $\dim A=q$ and $\dim B=n-p=\nu$. By [F22], choose orthonormal bases of $W_R,A,B$, using the empty basis when $q=p$. Let $O$ be the matrix whose columns are these bases in that order; then $O$ is orthogonal. For every $y=r+a+b$ in the unique decomposition, [F11] gives $P_{W_R}y=r$, $P_Ay=a$, $P_By=b$, and $P_{W_U}y=r+a$. Hence $y-P_{W_R}y=P_Ay+P_By$ and $y-P_{W_U}y=P_By$. Standardize the errors to $\eta=\epsilon/\sigma$. By [F9], each $\epsilon_i/\sigma$ is standard normal, and [F19] preserves independence under coordinatewise scaling, so $\eta$ has independent standard-normal coordinates. Write $O^T\eta=(Z_R,Z_A,Z_B)$. By [F2], these transformed coordinates are independent standard normals, so [F18] makes $Z_A$ and $Z_B$ independent. Under the null, $\mu=X\beta\in W_R$, so $P_A\mu=P_B\mu=0$. The two residual vectors above are therefore $P_A\epsilon+P_B\epsilon$ and $P_B\epsilon$; since $P_X=P_{W_U}$ and the chosen columns are orthonormal, $RSS_R-RSS_F=\|P_A\epsilon\|^2=\sigma^2\|Z_A\|^2$ and $RSS_F=\|P_B\epsilon\|^2=\sigma^2\|Z_B\|^2$. Thus [F3] gives independent $\chi_q^2$ and $\chi_\nu^2$ variables; both degrees are positive, [F4] makes the denominator positive almost surely, and the ratio definition [F5] gives the stated $F_{q,\nu}$ law. [A1, given, F2, F3, F4, F5, F9, F11, F12, F13, F18, F19, F21, F22, F23, F24, F25, choose, algebra]

2.1 Put $\eta=\epsilon/\sigma$ and use $U=[Q\ Q_0]$ from [F1]. The density in [F9] becomes standard normal under this scaling, and [F19] preserves independence under coordinatewise scaling; hence $\eta$ has independent standard-normal coordinates. By [F2], $U^T\eta=(G,H)$ has independent standard-normal coordinates, and [F18] groups the first $p$ and last $\nu$ coordinates into independent vectors. Step 1.1 gives $\widehat\beta-\beta=\sigma R^{-1}G$ and $(I-P_X)Y=\sigma Q_0H$. By [F13], these linear and squared-norm maps are Borel, so [F19] preserves the independence of their values. From [F20], $\widehat\beta\sim N_p(\beta,\sigma^2R^{-1}R^{-T})=N_p(\beta,\sigma^2(X^TX)^{-1})$; [F3] gives $RSS_F/\sigma^2=\|H\|^2\sim\chi^2_\nu$, and $s>0$ almost surely by [F4]. For $c\ne0$, positive definiteness gives $v_c=c^T(X^TX)^{-1}c>0$. The linear image $Z_c=(R^{-T}c)^TG/\sqrt{v_c}$ is $N(0,1)$ by [F20], since $\|R^{-T}c\|^2=v_c$. It is independent of $\|H\|^2$ by [F18] and [F19]. Therefore, almost surely, $T_c=Z_c/\sqrt{\|H\|^2/\nu}$ has law $t_\nu$ by [F3] and [F5]; the defined value on $s=0$ does not change its law. Finally, $\operatorname{row}(X)=\mathbb R^p$, so [F17] makes every coefficient contrast estimable; explicitly, $X^T[X(X^TX)^{-1}c]=c$. [A1, F1, F2, F3, F4, F5, F9, F13, F17, F18, F19, F20, step 1.1, algebra]

2.2 For fixed $v=\sigma^2>0$, independence and the normal density [F9] make the joint likelihood as a function of $b$ proportional to $\exp(-\|Y-Xb\|^2/(2v))$. Step 1.1 shows its unique maximizer is $\widehat\beta$. [F1, F9, step 1.1]

3.1 Define $T_{c,\theta_0}$ by replacing $c^T\beta$ in the numerator of $T_c$ with $\theta_0$. This statistic is measurable by [F10] and [F13], since its piecewise formula uses Borel linear and norm maps. Under $H_0:c^T\beta=\theta_0$, step 2.1 gives the symmetric continuous $t_\nu$ law in [F6]; the two tails beyond $\pm t_{\nu,1-\alpha/2}$ each have probability $\alpha/2$. The contrast null and alternative are both nonempty: $\beta=\theta_0c/(c^Tc)$ is in the null, and $\beta=(\theta_0+1)c/(c^Tc)$ is in its alternative. The partial F statistic is Borel because $RSS_R$ and $RSS_F$ are continuous functions of $Y$, and its ratio on $\{RSS_F>0\}$ with the constant branch on $\{RSS_F=0\}$ is Borel by [F13], so the two threshold rejection events are Borel. Step 1.2 and the unique $F_{q,\nu}$ quantile in [F6] give upper-tail rejection probability $\alpha$. The F-test null contains $\beta=0$; step 1.2 gives a $q$-dimensional subspace $A\subseteq\operatorname{col}X$ with $q\ge1$, so some $a\in A\setminus\{0\}$ equals $X\beta$ for a coefficient vector $\beta$. Since $A\cap W_R=\{0\}$, this mean is outside $W_R$, so that parameter is in the alternative. Each Borel rejection event $E$ defines a measurable deterministic kernel by $K(y,\{1\})=\mathbf1_E(y)$ and $K(y,\{0\})=1-\mathbf1_E(y)$, so [F7] applies. Both tests reject with probability $\alpha$ at every null parameter, so each has size $\alpha$ by [F8]. [F6, F7, F8, F10, F13, step 1.2, step 2.1, algebra]

4.1 Write $r=RSS_F$. At $b=\widehat\beta$, the joint log-likelihood for $v>0$ is $-\frac n2\log(2\pi v)-\frac r{2v}$. If $r>0$, its derivative $(r-nv)/(2v^2)$ is positive for $v<r/n$ and negative for $v>r/n$, so the unique maximum is $v=r/n$. Step 2.1 shows $r>0$ almost surely. If an observed vector has $r=0$, the likelihood tends to infinity as $v\downarrow0$ and has no maximizer on $(0,\infty)$. Therefore the joint MLE is $(\widehat\beta,RSS_F/n)$ almost surely, while $s^2=RSS_F/(n-p)$ differs because $n>p$ and $RSS_F>0$ almost surely. Together with steps 2.1 and 3.1 this proves all asserted distributional and test-calibration claims, with the likelihood exception stated for every data vector. [step 2.1, step 2.2, step 3.1, algebra] ∎
