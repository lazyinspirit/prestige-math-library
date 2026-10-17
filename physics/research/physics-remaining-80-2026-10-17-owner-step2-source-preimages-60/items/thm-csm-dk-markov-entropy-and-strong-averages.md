---
id: thm-csm-dk-markov-entropy-and-strong-averages
kind: theorem
title: "Markov relative entropy decay and almost-sure time averages"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-finite-reversible-rate-model
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - thm-csm-dk-integrable-covariance-green-kubo
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  thm-csm-dk-nonexplosive-ctmc-and-gap: mathematical-premise
  thm-csm-dk-integrable-covariance-green-kubo: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.4: finite continuous-time convergence, reversibility and spectral expansion."
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§§6.1–6.2: master-equation probabilities and stochastic entropy; the local proof derives its own finite-chain dissipation identity."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]], countable choice [[def-countable-choice]], and the model $E,\pi,w,Q$ of [[def-csm-dk-finite-reversible-rate-model]]. For any initial probability vector $p_0$, let $p_t=p_0P_t$, where $P_t=e^{tQ}$ is supplied by [[thm-csm-dk-nonexplosive-ctmc-and-gap]], and define the dimensionless relative information
$$\mathcal D(p_t\Vert\pi):=\sum_{a\in E}p_a(t)\log\frac{p_a(t)}{\pi_a},\qquad 0\log0:=0.$$
For every $t>0$, $p_a(t)>0$ for all states and
$$\frac{d}{dt}\mathcal D(p_t\Vert\pi)=-\frac12\sum_{a\in E}\sum_{b\ne a}\pi_aw_{ab}(r_b(t)-r_a(t))(\log r_b(t)-\log r_a(t))\le0,\qquad r_a(t):=\frac{p_a(t)}{\pi_a}.$$
At a positive time the derivative vanishes exactly when $p_t=\pi$, and $\mathcal D(p_t\Vert\pi)\to0$ as $t\to\infty$.

For every bounded observable $A:E\to\mathbb R$ and every initial law, the actual continuous-time average satisfies
$$\frac1T\int_0^T A(X_s)\,ds\longrightarrow\pi(A)\quad\text{almost surely as }T\to\infty.$$
Under stationary preparation, with $A_c=A-\pi(A)$ and spectral gap $\lambda_*$ from [[thm-csm-dk-nonexplosive-ctmc-and-gap]],
$$\operatorname{Var}_\pi\!\left(\frac1T\int_0^T A(X_s)\,ds\right)\le\frac{2\|A_c\|_{L^2(\pi)}^2}{\lambda_*T}.$$

## Facts & Assumptions
**Given:** Choice, countable choice, the connected finite reversible rate model, and its stationary semigroup.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: every countable sequence of nonempty sets has a choice function.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: the finite rates obey $\pi_aw_{ab}=\pi_bw_{ba}$, the positive-rate graph is connected, and $Q$ is the row generator with off-diagonal entries $w_{ab}$.

[F2] [[thm-csm-dk-nonexplosive-ctmc-and-gap]]: $P_t=e^{tQ}$, the only zero eigenfunctions of $Q$ are constants, the nonzero eigenvalues are $-\lambda_j$ with $\lambda_j>0$, and for initial law $\pi$ there is a jointly measurable stationary process on $\mathbb R$.

[F3] [[thm-csm-dk-integrable-covariance-green-kubo]]: for a jointly measurable, centered, second-order stationary process with absolutely integrable covariance, the variance of its time integral is the double-integral covariance formula and its covariance divided by $2T$ tends to the integrated covariance.

## Proof

**Given:** [A1]–[A2] and [F1]–[F3].

1.1 Choose $\Lambda>\max_aq_a$ and set $K=I+Q/\Lambda$. By [F1], $K$ is stochastic with positive diagonal, and for any distinct $a,b$ a positive-rate path of length $k$ gives $K^k_{ab}>0$; for $a=b$ take $k=0$. By [F2], $P_t=e^{tQ}=e^{-\Lambda t}\sum_{n\ge0}(\Lambda t)^nK^n/n!$. Every summand is nonnegative and the term for this $k$ is strictly positive, so $P_t(a,b)>0$ for every $t>0$. Hence $p_t(b)=\sum_a p_0(a)P_t(a,b)>0$. [A1, F1, F2, algebra]

1.2 The eigenbasis in [F2] gives, for centered $A_c=\sum_{j\ge1}a_j\phi_j$, $C_A(s):=\mathbb E_\pi[A_c(X_0)A_c(X_s)]=\langle A_c,P_sA_c\rangle_\pi=\sum_{j\ge1}a_j^2e^{-\lambda_js}$ for $s\ge0$. Thus $C_A(s)\ge0$ and $\int_0^\infty C_A(s)\,ds=\sum_{j\ge1}a_j^2/\lambda_j\le\|A_c\|_{L^2(\pi)}^2/\lambda_*$. The process $A_c(X_s)$ is centered, jointly measurable and second-order stationary; the spectral sum makes its covariance absolutely integrable. By [F3] the variance of its time integral is the double-integral covariance formula. Dividing by $T^2$ and bounding $T-s\le T$ proves the stated variance bound. [A1, A2, F2, F3, algebra]

2.1 For $t>0$, differentiate the finite sum defining $\mathcal D$; the mass derivative $\sum_a p'_a(t)$ is zero, so $\mathcal D'(t)=\sum_a p'_a(t)\log r_a(t)=\sum_{a}\sum_{b\ne a}p_a(t)w_{ab}(\log r_b(t)-\log r_a(t))$. Use $p_a=\pi_ar_a$ and pair the directed $(a,b)$ and $(b,a)$ terms with the symmetric conductance $\pi_aw_{ab}=\pi_bw_{ba}$. This gives the displayed negative half-sum. For positive $x,y$, $(x-y)(\log x-\log y)\ge0$, with equality only at $x=y$, since $\log x-\log y=\int_y^x du/u$. Connectedness forces all $r_a$ equal when the sum vanishes; normalization then gives $r_a=1$ and $p_t=\pi$. [F1, step 1.1, algebra]

2.2 Fix a reference time $t_*>0$ and put $T_n=n^2t_*$. For every $\varepsilon>0$, the pointwise inequality $\mathbf1_{\{|Y|>\varepsilon\}}\le Y^2/\varepsilon^2$ applied to $Y=T_n^{-1}\int_0^{T_n}A_c(X_s)\,ds$, together with step 1.2, gives $\sum_{n=1}^{\infty}\Pr_\pi(|Y|>\varepsilon)\le\frac{2\|A_c\|_{L^2(\pi)}^2}{\lambda_*\varepsilon^2t_*}\sum_{n=1}^{\infty}n^{-2}<\infty$. For each $N$, the probability that one of these events occurs for some $n\ge N$ is at most the corresponding tail sum, which tends to zero. Thus only finitely many occur almost surely. Applying this argument to $\varepsilon=1/k$ for each positive integer $k$ proves convergence to zero along $T_n$, almost surely. [F2, step 1.2, algebra]

3.1 Let $M=\max_{a\in E}|A_c(a)|$. For $T_n\le T\le T_{n+1}$, $|T^{-1}\int_0^TA_c(X_s)ds-T_n^{-1}\int_0^{T_n}A_c(X_s)ds|\le 2M(T_{n+1}-T_n)/T_n\to0$. Hence the time averages converge to zero for stationary initial law. For any future-path event $H$ and state $a$, let $\mu_a(H)$ be its probability under the common transition kernels started from $a$. Then $\Pr_{p_0}(H)=\sum_a p_0(a)\mu_a(H)=\mathbb E_\pi[(p_0(X_0)/\pi(X_0))1_H]$, so the forward path law from $p_0$ has density $p_0(X_0)/\pi(X_0)$ relative to the stationary path law. This density is bounded because $E$ is finite and every $\pi_a>0$. Every stationary null event, including failure of the almost-sure limit, is therefore null for every initial preparation. Adding $\pi(A)$ proves the claimed limit. [A1, F1, F2, step 2.2, algebra]

4.1 Exponential convergence in [F2] gives $p_t\to\pi$ entrywise. The function $x\mapsto x\log(x/\pi_a)$ extends continuously to $x=0$ by value zero, so the finite sum $\mathcal D(p_t\Vert\pi)$ tends to zero. Combined with step 2.1 this proves all the relative-information claims. [F2, step 2.1] ∎
