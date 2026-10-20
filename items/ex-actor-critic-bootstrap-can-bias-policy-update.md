---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
id: ex-actor-critic-bootstrap-can-bias-policy-update
kind: example
title: "A bootstrapped critic can bias the first actor update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - alg-one-step-actor-critic
  - def-total-derivative-in-euclidean-space
  - thm-logarithm-derivative-and-integral
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example

---

## Example

Let $S=\{s,x_0,x_1,d\}$, terminal set $S_\dagger=\{d\}$, reward set $\mathcal R=\{0\}$, $A(s)=\{0,1\}$, and $A(x_0)=A(x_1)=A(d)=\{*\}$. From $(s,0)$ transition deterministically to $(x_0,0)$; from $(s,1)$ transition deterministically to $(x_1,0)$; from either $x_i$ transition to $(d,0)$; and from $d$ transition to $(d,0)$. All unlisted joint masses are zero. Start at $s$ and use discount $\gamma=1/2$. For $\theta\in(0,1)$, let $\pi_\theta(1\mid s)=\theta$, $\pi_\theta(0\mid s)=1-\theta$, and choose the only available action at every other state. Run the algorithm from initial actor parameter $\theta_0=1/2$. Use open critic-parameter domain $W=\mathbb R^4$, with coordinate order $(w_s,w_{x_0},w_{x_1},w_d)$, and differentiable critic $\widehat V_w(z)=w_z$ at initial vector $(w_s,w_{x_0},w_{x_1},w_d)=(0,0,1,0)$. With actor step size $\alpha=1/4$, critic step size $\beta=0$, and the one-step actor update $\Delta\theta=\alpha I_0\delta_0\nabla_\theta\log\pi_\theta(A_0\mid S_0)$, where $I_0=1$ and $\delta_0=R_1+\gamma\widehat V_w(S_1)-\widehat V_w(S_0)$, the true start-state objective is $J(\theta)=0$ for every $\theta$, but the expected first actor increment is $1/8$. Each possible first actor update remains in $(0,1)$. The episode reaches $d$ after two decisions; at its second decision the only action at $x_0$ or $x_1$ has score zero, and $\beta=0$ leaves the critic unchanged, so all updates remain in $U=(0,1)$ and $W$. Thus this bootstrapped critic produces a biased first actor update.

## Example references

[[alg-one-step-actor-critic|The one-step actor–critic procedure with discounted actor trace and bootstrapped TD error]].

[[def-finite-markov-decision-process|The finite MDP joint transition-reward convention]].

## Facts & Assumptions

**Given:** The finite MDP and policies in the Example, $\theta=1/2$, the stated critic values, and the one-step actor-critic update.

[F1] [[def-finite-markov-decision-process]]: each state has its specified finite nonempty action set, and each joint next-state/reward law is a probability distribution.

[F2] [[def-differentiable-stochastic-policy]]: on the common positive support, $\psi_\theta(s,a)=\nabla_\theta\log\pi_\theta(a\mid s)$.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: the episode ends at its first terminal state and its discounted return sums rewards only up to that time.

[F4] [[alg-one-step-actor-critic]]: at time $t$, the actor increment is $\alpha I_t\delta_t\nabla_\theta\log\pi_\theta(A_t\mid S_t)$ with $I_0=1$ and $\delta_t=R_{t+1}+\gamma\widehat V_w(S_{t+1})-\widehat V_w(S_t)$, setting the terminal continuation to zero; proposed updates are required to stay in the open parameter domains.

[F5] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log'(x)=1/x$.

[F6] [[def-total-derivative-in-euclidean-space]]: a constant scalar function has total derivative the zero linear map, since its first-order remainder is identically zero.

## Verification

**Given:** The Example data and facts above.

1.1 Every reward in this MDP is zero and the episode reaches $d$ in two decisions, so its total return is zero for every sampled action sequence. Hence $J(\theta)=0$ for every $\theta\in(0,1)$ and $\nabla_\theta J(1/2)=0$ by [F6]. [given, F1, F3, F6, algebra]

1.2 At $\theta=1/2$, the score at $s$ is $\nabla_\theta\log\theta=2$ for action $1$ and $\nabla_\theta\log(1-\theta)=-2$ for action $0$, by [F2] and [F5]. [given, F2, F5, algebra]

2.1 If $A_0=0$, then $S_1=x_0$ and $\delta_0=0+(1/2)\cdot0-0=0$, so the first actor increment is zero. If $A_0=1$, then $S_1=x_1$ and $\delta_0=0+(1/2)\cdot1-0=1/2$, so the first increment is $(1/4)\cdot1\cdot(1/2)\cdot2=1/4$ by [F4] and step 1.2. Both proposed values, $1/2$ and $3/4$, are in the policy domain $(0,1)$. At the second decision the unique action at $x_i$ has score zero, and $\beta=0$ leaves the critic unchanged; the second updates therefore remain in $(0,1)\times W$ and the next state is terminal $d$. This verifies within-episode admissibility and finite termination. [given, F4, step 1.2, algebra]

3.1 The two actions each have probability $1/2$, so the expected first actor increment is $(1/2)\cdot0+(1/2)\cdot(1/4)=1/8$. This differs from the true gradient $0$ in step 1.1, proving the stated bias. [given, step 1.1, step 2.1, algebra] ∎

## Remarks

[A1] Axiom of Choice: every family of nonempty sets has a choice function; the referenced general episodic path-law algorithm assumes AC.

## Remarks references

[[def-axiom-of-choice]].
