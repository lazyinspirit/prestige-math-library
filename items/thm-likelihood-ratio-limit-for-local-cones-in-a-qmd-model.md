---
id: thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model
kind: theorem
title: "Likelihood-ratio limit for local cones in a QMD model"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-qmd-path
  - def-fisher-information-metric-distance
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-quadratic-likelihood-optimization-is-fisher-distance
  - def-multivariate-normal-law
  - def-axiom-of-choice
  - def-convergence-in-distribution-of-random-elements
  - def-convergence-in-probability
  - thm-portmanteau-theorem
  - thm-continuous-mapping-theorem
  - thm-slutsky-for-real-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Steven G. Self and Kung-Yee Liang, Asymptotic Properties of Maximum Likelihood Estimators and Likelihood Ratio Tests Under Nonstandard Conditions"
      url: "https://www.stat.cmu.edu/~brian/763-2015/week06/papers/self-liang-1987.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $d\ge1$, let $\Theta_0\subseteq\Theta\subseteq\mathbb R^d$, and let $\theta_0\in\Theta_0$. Assume the full-model parameter set $\Theta$ is open in $\mathbb R^d$, so $\theta_0$ is interior for the QMD model. Under $P_{\theta_0}$, let $X_1,\ldots,X_n$ be IID and let $\ell_n(\theta)=\sum_{i=1}^n\log p_\theta(X_i)$ be their sample log-likelihood. Define local parameter sets $C_n:=\sqrt n(\Theta-\theta_0)$ and $C_{0n}:=\sqrt n(\Theta_0-\theta_0)$. Assume the model is QMD at $\theta_0$ as in [[def-qmd-path]], and write $I:=\mathbb E_{\theta_0}[s_{\theta_0}s_{\theta_0}^T]$ for its Fisher information; assume $I$ is positive definite, meaning $v^TIv>0$ for every nonzero $v$. Suppose $C_n$ and $C_{0n}$ are closed in the Euclidean metric (their complements are open), contain $0$, and converge locally to nonempty closed convex cones $C$ and $C_0$ with $C_0\subseteq C$. A cone contains $0$ and is closed under multiplication by every nonnegative scalar; convex means that the set contains the line segment between each pair of its points. Local convergence means that, for every $R>0$, there are $\delta_{n,R}\to0$ such that every point of $C_n\cap\overline B_2(0,R)$ or $C\cap\overline B_2(0,R)$ is within $\delta_{n,R}$ in Euclidean distance of the other set, and likewise for $C_{0n}$ and $C_0$. Here a point $x$ is within $\delta$ of a set $A$ when $\inf_{a\in A}\|x-a\|_2\le\delta$.

Assume a uniform local quadratic likelihood expansion: for $h\in C_n$,

$$\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)=h^TZ_n-\tfrac12h^TIh+r_n(h),$$

where $Z_n\Rightarrow Z\sim N_d(0,I)$ under $P_{\theta_0}$ and, for every $R>0$, $\sup\{|r_n(h)|:h\in C_n,\ \|h\|_2\le R\}\to_P0$. Assume the full and null local log-likelihoods attain maxima at $\hat h_n\in C_n$ and $\hat h_{0n}\in C_{0n}$ and that both maximizer sequences are tight, meaning that for every $\eta>0$ some $R<\infty$ makes the limiting upper probability of either norm exceeding $R$ at most $\eta$. For

$$T_n:=2\left[\sup_{h\in C_n}\{\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)\}-\sup_{h\in C_{0n}}\{\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)\}\right],$$

the likelihood-ratio statistic satisfies

$$T_n\Rightarrow d_I^2(I^{-1}Z,C_0)-d_I^2(I^{-1}Z,C),$$

where $d_I$ is the Fisher-information distance of [[def-fisher-information-metric-distance]]. QMD alone is not asserted to imply the uniform expansion or tightness hypotheses.

## Facts & Assumptions

**Given:** AC, the model, local parameter sets, expansion, convergence, and tightness hypotheses in the Statement.

[A1] The Axiom of Choice is assumed for the finite-dimensional normal-law convention used here ([[def-axiom-of-choice]]).

[F1] QMD at an interior point means the square-root-density expansion $\int[\sqrt{p_{\theta_0+h}}-\sqrt{p_{\theta_0}}-\tfrac12h^Ts_{\theta_0}\sqrt{p_{\theta_0}}]^2d\mu=o(\|h\|_2^2)$ for a square-integrable score and common dominating measure ([[def-qmd-path]]).

[F2] The Fisher distance is $d_I(x,A)=\inf_{a\in A}\sqrt{(x-a)^TI(x-a)}$ ([[def-fisher-information-metric-distance]]).

[F3] The Euclidean inner product is $u^Tv$ and its norm is $\|u\|_2$ ([[def-euclidean-inner-product]]).

[F4] $\overline B_2(0,R)=\{h:\|h\|_2\le R\}$, and the Euclidean metric has this norm as its distance ([[def-euclidean-spheres-and-closed-balls]]).

[F5] The Cauchy–Schwarz inequality gives $|u^Tv|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] For nonempty closed $A$, there is $\lambda>0$ with $h^TIh\ge\lambda\|h\|_2^2$, and maximizing $q_z(h)=z^Th-\tfrac12h^TIh$ over $A$ gives $\tfrac12z^TI^{-1}z-\tfrac12d_I^2(I^{-1}z,A)$; the maximum is attained ([[lem-quadratic-likelihood-optimization-is-fisher-distance]]).

[F7] Under AC, $N_d(0,I)$ is a Borel probability law with the stated covariance ([[def-multivariate-normal-law]]).

[F8] Weak convergence of laws gives the closed-set upper bound $\limsup_nP(Z_n\in F)\le P(Z\in F)$ for each closed $F$ ([[thm-portmanteau-theorem]]).

[F9] Continuous maps preserve convergence in distribution at points of continuity of the limiting law ([[thm-continuous-mapping-theorem]]).

[F10] For real random variables, adding a term converging in probability to zero preserves convergence in distribution ([[thm-slutsky-for-real-random-variables]]).

[F11] Convergence in probability means that every fixed positive error threshold is exceeded with probability tending to zero ([[def-convergence-in-probability]]); convergence in distribution is weak convergence of the laws ([[def-convergence-in-distribution-of-random-elements]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 With the supplied QMD information $I$ of [F1], write $q_z(h)=h^Tz-\tfrac12h^TIh$ and $m_A(z)=\sup_{h\in A}q_z(h)$ for $A=C,C_0$. By [F6], $m_A(z)=\tfrac12z^TI^{-1}z-\tfrac12d_I^2(I^{-1}z,A)$. If $h_A(z)$ is a maximizer, then $q_z(h_A(z))\ge q_z(0)=0$. The lower bound in [F6] and [F5] imply $\|h_A(z)\|_2\le2\|z\|_2/\lambda$ (with the bound immediate when $h_A(z)=0$). [F1, F6, F3, F5, given, algebra]

1.2 Let $\lambda$ be from [F6], fix $M>0$, and choose $R>2M/\lambda+1$. For $A_n=C_n$, $A=C$ (and likewise for $A_n=C_{0n}$, $A=C_0$), write $m_{A_n,R}(z)=\sup_{h\in A_n\cap\overline B_2(0,R)}q_z(h)$. For every $\|z\|_2\le M$, [F6] gives a maximizer $h(z)$ of $q_z$ on $A$ with $\|h(z)\|_2\le2M/\lambda<R-1$. Local set convergence supplies points of $A_n$ within $\delta_{n,R-1}+1/n$ of $h(z)$, hence inside the radius-$R$ ball for all large $n$. Conversely, every point of $A_n\cap\overline B_2(0,R)$ is within $\delta_{n,R}+1/n$ of a point of $A$. With $B_I=\sum_{j,k=1}^d|I_{jk}|$, [F3] and [F5] give $|q_z(h)-q_z(h')|\le(M+B_I(R+1))\|h-h'\|_2$ for $\|h\|_2,\|h'\|_2\le R+1$ and $\|z\|_2\le M$. These two directions show $\sup_{\|z\|_2\le M}|m_{A_n,R}(z)-m_A(z)|\to0$. The same bounds apply to both full and null sets. [F6, F3, F4, F5, given, algebra, choose]

2.1 The sequence $Z_n$ is tight. Indeed, for any $\eta>0$ choose $R$ with $P(\|Z\|_2\ge R)<\eta$, possible because [F7] supplies a Borel probability law on finite-dimensional $\mathbb R^d$. The set $\{z:\|z\|_2\ge R\}$ is closed, so [F8] bounds $\limsup_nP(\|Z_n\|_2\ge R)$ by $\eta$. step 1.1 then makes the maximizers of $q_{Z_n}$ over $C$ and $C_0$ tight as well. [A1, F7, F8, step 1.1, given, choose]

2.2 For $A_n=C_n$ or $C_{0n}$, put $L_{A_n,R}:=\sup_{h\in A_n\cap\overline B_2(0,R)}\{\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)\}$. The uniform expansion gives $|L_{A_n,R}-m_{A_n,R}(Z_n)|\le\sup_{h\in C_n,\ \|h\|_2\le R}|r_n(h)|\to_P0$ for each fixed $R$. For fixed $M>0$ and $R>2M/\lambda+1$, step 1.2 therefore gives, for every $\varepsilon>0$, $P(|L_{A_n,R}-m_A(Z_n)|>\varepsilon,\ \|Z_n\|_2\le M)\to0$, with $A=C$ or $C_0$, respectively. [F11, step 1.2, given]

3.1 Given $\eta>0$, tightness of $Z_n$ lets us choose $M$ so that $\|Z_n\|_2\le M$ with limiting probability at least $1-\eta/3$. Choose $R>2M/\lambda+1$ large enough that the joint event that both local likelihood maximizers lie in the radius-$R$ ball has limiting probability at least $1-\eta/3$. By step 1.1 both quadratic maximizers also lie in that ball whenever $\|Z_n\|_2\le M$. Thus all four full and truncated suprema agree except on events with total limiting upper probability at most $2\eta/3$. step 2.2 and arbitrariness of $\eta$ give $T_n-2(m_C(Z_n)-m_{C_0}(Z_n))\to_P0$. [F11, step 1.1, step 2.2, given, choose]

4.1 The form $\langle u,v\rangle_I=u^TIv$ is an inner product; its Cauchy–Schwarz inequality follows by requiring $(u-tv)^TI(u-tv)\ge0$ for every real $t$. Thus the induced norm satisfies the triangle inequality, and taking infima gives $|d_I(x,C)-d_I(y,C)|\le\|x-y\|_I$. Also $v^TIv\le B_I\|v\|_2^2$, where $B_I$ is the finite entry sum from step 1.2, so the distance map is Euclidean Lipschitz after composition with the fixed linear map $I^{-1}$. Therefore $g(z):=d_I^2(I^{-1}z,C_0)-d_I^2(I^{-1}z,C)$ is continuous. The formula in step 1.1 gives $2[m_C(z)-m_{C_0}(z)]=g(z)$. By [F9], $g(Z_n)\Rightarrow g(Z)$. step 3.1 and [F10] then give $T_n\Rightarrow g(Z)$, which is the stated distance-difference law. [F2, F6, F9, F10, step 1.1, step 1.2, step 3.1] ∎

## Remarks

The uniform local expansion and tightness are explicit hypotheses. The proof does not infer uniformity over bounded local parameters from pointwise LAN, and it does not invoke the regular interior Wilks theorem at a boundary.
