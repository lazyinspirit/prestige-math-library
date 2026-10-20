---
id: thm-dpo-reward-policy-reparameterization
kind: theorem
title: Bradley–Terry reward-policy reparameterization and finite DPO gradient
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-bradley-terry-preference-model
  - def-kl-regularized-policy-improvement
  - thm-finite-action-gibbs-policy-optimum
  - thm-chain-rule-for-total-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-derivative-of-exponential
justified_by: []
proof_strategy: direct
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Statement

For each prompt $x$ under consideration, let $Y_x$ be a finite response set with at least two elements, let $q_x$ be a probability vector with $q_x(y)>0$ for every $y\in Y_x$, let $r_x:Y_x\to\mathbb R$, and let $\beta>0$. Define $Z_x=\sum_{y\in Y_x}q_x(y)e^{r_x(y)/\beta}$ and $p_x^*(y)=q_x(y)e^{r_x(y)/\beta}/Z_x$. For every distinct $a,b\in Y_x$,
$$r_x(a)-r_x(b)=\beta\log\frac{p_x^*(a)}{q_x(a)}-\beta\log\frac{p_x^*(b)}{q_x(b)},$$
so the Bradley–Terry probability is
$$\Pr(a\succ b\mid x)=\sigma\!\left(\beta\log\frac{p_x^*(a)}{q_x(a)}-\beta\log\frac{p_x^*(b)}{q_x(b)}\right).$$
Conversely, every full-support probability vector $\pi_x$ on $Y_x$ is the unique Gibbs policy for reward $\widehat r_x(y)=\beta\log(\pi_x(y)/q_x(y))$; adding any prompt-only constant $c_x$ to this reward leaves both the Gibbs policy and the Bradley–Terry probabilities unchanged.

Let $D=((x_i,y_i^w,y_i^l))_{i=1}^n$ be a finite ordered dataset with $n\ge1$, $y_i^w,y_i^l\in Y_{x_i}$, and $y_i^w\ne y_i^l$. Let $\Theta\subseteq\mathbb R^d$ be open and let each conditional policy $\pi_\theta(\cdot\mid x_i)$ be a probability vector with $\pi_\theta(y\mid x_i)>0$ for every $y\in Y_{x_i}$, whose coordinates are continuously differentiable in $\theta\in\Theta$. Put
$$u_i(\theta)=\beta\left(\log\frac{\pi_\theta(y_i^w\mid x_i)}{q_{x_i}(y_i^w)}-\log\frac{\pi_\theta(y_i^l\mid x_i)}{q_{x_i}(y_i^l)}\right),\qquad \mathcal L_D(\theta)=\frac1n\sum_{i=1}^n\log(1+e^{-u_i(\theta)}).$$
Then $\mathcal L_D$ is the finite direct preference optimization (DPO) loss: the average negative log likelihood for the Bradley–Terry model with implicit reward $\widehat r_\theta(x_i,y)=\beta\log\!\bigl(\pi_\theta(y\mid x_i)/q_{x_i}(y)\bigr)$. Its Euclidean gradient is
$$\nabla_\theta\mathcal L_D(\theta)=-\frac{\beta}{n}\sum_{i=1}^n\sigma(-u_i(\theta))\left(\nabla_\theta\log\pi_\theta(y_i^w\mid x_i)-\nabla_\theta\log\pi_\theta(y_i^l\mid x_i)\right).$$
Here $\nabla_\theta$ is the column vector of Euclidean partial derivatives on the open set $\Theta$.

## Statement references

[[def-bradley-terry-preference-model|Finite Bradley–Terry preference model]]: defines $\Pr(a\succ b\mid x)=\sigma(r_x(a)-r_x(b))$ and the sigmoid.

[[def-kl-regularized-policy-improvement|Finite KL-regularized policy improvement]]: defines the finite KL objective and its reward/reference conventions.

[[thm-finite-action-gibbs-policy-optimum|Finite-action Gibbs policy theorem]]: gives the unique optimizer $p_x^*$ and its normalization.

[[thm-chain-rule-for-total-derivatives|Chain rule for total derivatives]]: differentiates the finite composition of the loss and the conditional log-probability coordinates.

[[thm-logarithm-derivative-and-integral|Natural logarithm derivative]]: supplies $(\log t)'=1/t$ for $t>0$.

[[thm-derivative-of-exponential|Exponential derivative]]: supplies $(e^t)'=e^t$ for real $t$.

[Rafailov et al., §4 Eqs. (6)–(7), Appendix A.2 and A.4](https://arxiv.org/pdf/2305.18290v3)

[Purdue PrefOpt course notes, §§3e–4a](https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html)

## Facts & Assumptions

**Given:** The finite response sets, full-support reference vectors, rewards, positive $\beta$, finite dataset, open parameter domain, and full-support $C^1$ policy family in the Statement.

[F1] [[def-bradley-terry-preference-model]]: for distinct responses, $\Pr(a\succ b\mid x)=\sigma(r_x(a)-r_x(b))$, where $\sigma(t)=(1+e^{-t})^{-1}$.

[F2] [[def-kl-regularized-policy-improvement]]: for finite probability vectors $p,q$, $F_{q,r,\beta}(p)=\sum_y p_y r(y)-\beta D(p\|q)$; with full-support $q$, the finite KL sum has no zero denominator.

[F3] [[thm-finite-action-gibbs-policy-optimum]]: the unique maximizer is $p_y^*=q_y e^{r(y)/\beta}/Z$, with $Z=\sum_yq_y e^{r(y)/\beta}>0$.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a finite composition is the ordered composition of the derivatives of its constituent maps.

[F5] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with derivative $1/t$.

[F6] [[thm-derivative-of-exponential]]: $e^t$ is differentiable on $\mathbb R$ with derivative $e^t$.

## Proof

1.1 For each $y\in Y_x$, the Gibbs formula and positivity of $q_x(y)$ and $p_x^*(y)$ give $r_x(y)=\beta\log(p_x^*(y)/q_x(y))+\beta\log Z_x$. [F3, given, algebra]

1.2 For any full-support probability vector $\pi_x$, define $\widehat r_x(y)=\beta\log(\pi_x(y)/q_x(y))$. Its partition sum is $\sum_y q_x(y)e^{\widehat r_x(y)/\beta}=\sum_y\pi_x(y)=1$. By the objective definition [F2], the policy is optimized over the finite simplex; the formula and uniqueness in [F3] then return $\pi_x$ as the unique Gibbs maximizer. Adding $c_x$ multiplies both the numerator and partition sum by $e^{c_x/\beta}$, preserving that policy. [F2, F3, given, algebra]

1.3 For real $u$, [F5] and [F6] give $\frac{d}{du}\log(1+e^{-u})=-\frac{e^{-u}}{1+e^{-u}}=-\sigma(-u)$. The logarithm arguments are positive for every finite $u$. [F1, F5, F6, algebra]

2.1 Subtracting the identities in step 1.1 for $a$ and $b$ cancels the common $\beta\log Z_x$ term. Applying [F1] to the remaining reward difference gives the displayed Bradley–Terry probability formula. If $r_x$ is replaced by $r_x+c_x$, the reward difference is unchanged, so the comparison probability is unchanged. [F1, F3, step 1.1, algebra]

2.2 For each record $i$, apply step 1.2 to $\pi_\theta(\cdot\mid x_i)$. Its implicit reward is $\widehat r_\theta$, and [F1] gives the preferred-outcome probability $\sigma(u_i(\theta))$. Since $\sigma(u)=(1+e^{-u})^{-1}$, its negative logarithm is $\log(1+e^{-u})$. Summing over the $n$ records proves the stated finite negative log likelihood. [F1, given, step 1.2, algebra]

3.1 Each $\pi_\theta(y_i^w\mid x_i)$ and $\pi_\theta(y_i^l\mid x_i)$ is positive and continuously differentiable on $\Theta$, so the logarithms are continuously differentiable. Applying [F4] to each $u_i$ gives $\nabla_\theta u_i=\beta(\nabla_\theta\log\pi_\theta(y_i^w\mid x_i)-\nabla_\theta\log\pi_\theta(y_i^l\mid x_i))$, because $q_{x_i}$ is fixed. The finite-sum chain rule with step 1.3 gives the displayed gradient. [F4, F5, F6, given, step 1.3, algebra] ∎
