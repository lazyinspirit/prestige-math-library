---
id: lem-r-max-empirical-model-accuracy
kind: lemma
title: "Adaptive empirical-model accuracy for R-MAX"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-r-max
  - def-admissible-mdp-heuristic
  - def-pac-mdp-known-state-action-mdp
  - lem-pac-mdp-adaptive-sample-concentration
  - lem-pac-mdp-value-simulation
  - thm-pac-mdp-value-functions
  - thm-finite-union-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§3.2.2, Lemmas 12–15 and Theorem 11 proof, PDF pp. 17–20 (printed pp. 2429–2432)."
---

## Statement

Let $M$ be a bounded-reward finite discounted MDP, let $0<\eta<V_{\max}/4$ and $0<\delta<1$, and let $U,V_{\max}$ be an admissible heuristic with $V_{\max}=\max\{1,V_0\}$. Put
$$b=\frac{\eta(1-\gamma)}{64V_{\max}},\quad L_0=\ln\frac{8SA}{\delta},\quad m=\left\lceil\frac{8(S+L_0)}{b^2}\right\rceil,\quad \beta=\frac{\eta(1-\gamma)}{16},$$
where $S=|S|$ and $A=\max_s|A(s)|$. Run R-MAX with this sample threshold and approximation tolerance. For $K_t$ the current known set, let $\widehat M_{K_t}$ use its empirical laws on $K_t$ and the heuristic absorbing states elsewhere, and let $M_{K_t}=M_{K_t}(U)$ use the true laws on $K_t$. Define $E_\eta=\{(s,a):U(s,a)\ge V^*(s)-\eta\}$. With probability at least $1-\delta$, simultaneously at all times: every stationary-policy value in $\widehat M_{K_t}$ differs from its value in $M_{K_t}$ by at most $\eta/8$; the current action values satisfy $\|Q_t-Q^*_{\widehat M_{K_t}}\|_\infty\le\beta$ and $0\le Q_t(s,a)\le(1-\gamma)^{-1}$; the greedy value obeys $V_t(s)\ge V^*(s)-\eta$; and $V_t(s)-V^{\pi_t}_{M_{K_t}}(s)\le\eta$ for every state. On this event, the total number of value-table rebuilds plus selections of pairs outside $K_t$ is at most $(m+1)|E_\eta|$.

## Statement references

[[alg-r-max|R-MAX stores its initial empirical batch and performs the specified finite Bellman sweeps]].

[[def-admissible-mdp-heuristic|The admissible value cap and componentwise optimism condition]].

[[def-pac-mdp-known-state-action-mdp|The true and empirical known-state/action models]].

[[lem-pac-mdp-adaptive-sample-concentration|Adaptive reward and transition estimates for each potential stream]].

[[lem-pac-mdp-value-simulation|The policy-value perturbation bound]].

[[thm-pac-mdp-value-functions|Bellman contraction, value iteration, and optimal values]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

## Facts & Assumptions

**Given:** The MDP, admissible heuristic, parameters, R-MAX algorithm, and notation in the Statement.

[F1] [[lem-pac-mdp-adaptive-sample-concentration]]: for each pair's first $m$ potential outcomes, the reward mean and transition $\ell^1$ error obey the displayed concentration bounds, simultaneously under adaptive visits.

[F2] [[lem-pac-mdp-value-simulation]]: if the true trap model values are bounded by $2V_{\max}$, the empirical model has rewards in $[0,1]$, and $\gamma b\le(1-\gamma)/2$, then reward and transition errors at most $b$ give value error at most $2(b+2\gamma V_{\max}b)/(1-\gamma)$ for every policy and for the optimal values.

[F3] [[thm-pac-mdp-value-functions]]: the Bellman optimality operator is a $\gamma$ contraction; its value-iteration iterates converge to its fixed point, and an admissible action value is bounded by $(1-\gamma)^{-1}$.

[F4] [[def-admissible-mdp-heuristic]] and [[def-pac-mdp-known-state-action-mdp]]: $U\ge Q^*$, and the dedicated sink for an unknown pair in $M_K(U)$ has value $U(s,a)$.

[F5] [[alg-r-max]]: each newly known pair triggers one rebuild; a pair remains outside the known set for at most its first $m$ selections.

[F6] [[thm-finite-union-bound]]: the probability of a finite union of events is at most the sum of their probabilities.

## Proof

1.1 Apply [F1] to each pair with reward and transition tolerance $b$. For $\delta_0=\delta/(4SA)$, the transition threshold is $\sqrt{S/m}+\sqrt{2\ln(1/\delta_0)/m}\le b$: its squared numerator is at most $2S+4\ln(1/\delta_0)\le4(S+L_0)$, while $m\ge8(S+L_0)/b^2$. The reward failure is at most $2e^{-2mb^2}\le\delta_0$ because $2mb^2\ge16(S+L_0)\ge\ln(2/\delta_0)$. By [F6], the finite union over reward and transition events for at most $SA$ pairs has failure probability at most $2SA\delta_0=\delta/2$. [given, F1, F6, algebra]

1.2 The Bellman operator of $\widehat M_K$ is exactly the operator in [F5], with unknown backup $U$. Its fixed point and zero-initialized sweeps lie in $[0,(1-\gamma)^{-1}]$. The contraction estimate in [F3] gives error at most $\gamma^L/(1-\gamma)$. For $0<\gamma<1$, $\ln\gamma\le-(1-\gamma)$, so the stated $L$ makes this error at most $\beta$; when $\gamma=0$, one sweep is exact. The initial table $U$ is the exact fixed point for the empty known set. Thus the action-value approximation bound holds after every rebuild. [given, F3, F5, algebra]

2.1 For a fixed known set $K$, the true trap model has every stationary-policy and optimal value at most $2V_{\max}$. Indeed, until the first outside-$K$ pair its path is a true-MDP path, whose expected nonnegative prefix is at most $V^*(s)\le V_{\max}$; after that pair its absorbing continuation is at most $U(s,a)\le V_{\max}$. The empirical trap model has all rewards in $[0,1]$. Also $\gamma b\le(1-\gamma)/2$, since $\gamma b/(1-\gamma)=\gamma\eta/(64V_{\max})<1/256$. Apply the trap-model form of [F2] with $W=V_{\max}$ and $\alpha=\beta=b$. The value error for each policy and the optimum is at most $2b(1+2\gamma V_{\max})/(1-\gamma)=\eta(1+2\gamma V_{\max})/(32V_{\max})\le3\eta/32<\eta/8$. [given, F2, F3, F4, step 1.1, algebra]

3.1 Let $V^*_{M_K}$ and $V^*_{\widehat M_K}$ denote the trap-model optima. For every state, the true Bellman backup at $V^*$ on a known pair is $Q^*(s,a)$, and on an unknown pair the trap backup is $U(s,a)\ge Q^*(s,a)$. Hence $T_{M_K}^*V^*\ge V^*$. The operator preserves coordinatewise order because its transition weights are nonnegative; its iterates from $V^*$ therefore increase. Contraction makes these iterates converge to the unique fixed point, so $V^*_{M_K}\ge V^*$. Step 2.1 gives $V^*_{\widehat M_K}\ge V^*_{M_K}-\eta/8$. Since $\|Q_t-Q^*_{\widehat M_K}\|_\infty\le\beta$, $V_t\ge V^*_{\widehat M_K}-\beta\ge V^*-(\eta/8+\beta)\ge V^*-\eta$. [given, F3, F4, step 2.1, step 1.2, algebra]

3.2 For each state $s$, the action chosen by $\pi_t$ satisfies $Q^*_{\widehat M_K}(s,\pi_t(s))\ge V^*_{\widehat M_K}(s)-2\beta$: its optimal action value is at least its estimated value minus $\beta$, while the estimated maximum is at least the optimal maximum minus $\beta$. Thus $T^{\pi_t}_{\widehat M_K}V^*_{\widehat M_K}\ge V^*_{\widehat M_K}-2\beta$. Subtracting the policy Bellman equation and taking the maximum positive difference yields $V^*_{\widehat M_K}-V^{\pi_t}_{\widehat M_K}\le2\beta/(1-\gamma)$. Comparing the same policy in $M_K$ by step 2.1 and using $V_t\le V^*_{\widehat M_K}+\beta$ gives $V_t-V^{\pi_t}_{M_K}\le\beta+2\beta/(1-\gamma)+\eta/8\le5\eta/16<\eta$, because $\beta=\eta(1-\gamma)/16$. [given, F2, F3, step 2.1, step 1.2, algebra]

4.1 On the event just proved, an outside-$K_t$ pair with $U(s,a)<V^*(s)-\eta$ cannot be selected: its current value is still $Q_t(s,a)=U(s,a)$, whereas $V_t(s)\ge V^*(s)-\eta$. Thus every escape pair lies in $E_\eta$. By [F5], each such pair is selected outside the known set at most $m$ times and causes one rebuild. Summing over $E_\eta$ proves the complexity bound. [given, F4, F5, step 3.1, algebra] ∎
