---
id: thm-r-max-pac-bound
kind: theorem
title: "PAC-MDP sample complexity of R-MAX"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-r-max
  - def-pac-mdp-sample-complexity
  - def-admissible-mdp-heuristic
  - lem-r-max-empirical-model-accuracy
  - thm-pac-mdp-escape-event-reduction
  - thm-zero-tolerance-pac-mdp-boundary
justified_by: []
aliases:
  - thm-rmax-pac-bound
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§3.2.2, Theorem 11 and complete proof, PDF pp. 17–20 (printed pp. 2429–2432)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§4.2.4, PDF pp. 53–54; R-max PAC-MDP context."
---

## Statement

Let $M$ be a bounded-reward finite discounted MDP, write $S=|S|$ and $A=\max_s|A(s)|$, and fix $0\le\epsilon<(1-\gamma)^{-1}$, $0<\delta<1$, and an admissible heuristic with normalized cap $V_{\max}$. At $\epsilon=0$, if $V^*(s)=0$ at every state then $N_0=0$; no finite zero-tolerance extension holds uniformly over this class: already at $\gamma=0$, every fixed finite legal sample threshold $m$ and value-iteration tolerance $\beta$ admits an admissible one-state example for R-MAX with $N_0=\infty$ with positive probability. This does not assert failure for every fixed heuristic or model. The parameter formulas below are evaluated only when $\epsilon>0$. Assume now $\epsilon>0$. If $\epsilon\ge V_{\max}$, then $N_\epsilon=0$. Otherwise put
$$\eta=\epsilon/4,\quad b=\frac{\eta(1-\gamma)}{64V_{\max}},\quad m=\left\lceil\frac{8(S+\ln(16SA/\delta))}{b^2}\right\rceil,\quad \beta=\frac{\eta(1-\gamma)}{16},$$
and run R-MAX with sample threshold $m$ and value-iteration tolerance $\beta$. Let $E_\eta=\{(s,a):U(s,a)\ge V^*(s)-\eta\}$ and $\zeta=(m+1)|E_\eta|$. Define $q=\eta/(4V_{\max})$, and define $H$ and $M$ by
$$H=\begin{cases}1,&\gamma=0,\\ \max\{1,\lceil\ln(1/[\eta(1-\gamma)])/(-\ln\gamma)\rceil\},&0<\gamma<1,\end{cases}\qquad M=\left\lceil\frac{2(\zeta+1)+2\ln(2/\delta)}q\right\rceil.$$
Then $\mathbb P(N_\epsilon\le HM)\ge1-\delta$. For the uninformative heuristic $U(s,a)=V_{\max}=(1-\gamma)^{-1}$, the bound is $\widetilde O(S^2A/[\epsilon^3(1-\gamma)^6])$, where $\widetilde O$ suppresses logarithmic factors.


For every $\epsilon>0$, a bound uniform over all MDPs and admissible heuristics with these $S,A,\gamma$ is obtained by setting
$$\bar V=\frac1{1-\gamma},\quad \bar b=\frac{\epsilon(1-\gamma)^2}{256},\quad \bar m=\left\lceil\frac{8(S+\ln(16SA/\delta))}{\bar b^2}\right\rceil,\quad \bar q=\frac{\epsilon(1-\gamma)}{16},\quad \bar\zeta=(\bar m+1)SA,$$
and
$$\bar H=\begin{cases}1,&\gamma=0,\\ \max\{1,\lceil\ln(1/[(\epsilon/4)(1-\gamma)])/(-\ln\gamma)\rceil\},&0<\gamma<1,\end{cases}\qquad \bar M=\left\lceil\frac{2(\bar\zeta+1)+2\ln(2/\delta)}{\bar q}\right\rceil.$$ 
Then $\mathbb P(N_\epsilon\le\bar H\bar M)\ge1-\delta$. This bound depends only on $S,A,\epsilon,\delta,\gamma$.

## Statement references

[[thm-zero-tolerance-pac-mdp-boundary|The full zero-tolerance boundary, including admissible algorithm failures and the zero-value success case]].

[[def-pac-mdp-sample-complexity|The bad-timestep count and the uniform PAC-MDP meaning of a bound]].

[[def-admissible-mdp-heuristic|Admissibility, the cap, and the reward-scale normalization]].

[[alg-r-max|R-MAX's known-set updates and finite value-iteration approximation]].

[[lem-r-max-empirical-model-accuracy|Simultaneous optimism, model accuracy, policy accuracy, and update/escape count]].

[[thm-pac-mdp-escape-event-reduction|The high-probability conversion from update/escape counts to bad steps]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

## Facts & Assumptions

**Given:** The MDP, heuristic, parameters, R-MAX algorithm, and bad-step count in the Statement.

[F1] [[lem-r-max-empirical-model-accuracy]]: with the stated $m$ and $\beta$, the simultaneous optimism and model/policy accuracy conditions hold with probability at least $1-\delta/2$, and updates plus escapes total at most $(m+1)|E_\eta|$.

[F2] [[thm-pac-mdp-escape-event-reduction]]: if those conditions hold with failure probability at most $\rho$, then taking $B=W=V_{\max}$ and $Q_c=(1-\gamma)^{-1}$ gives $N_{4\eta}\le HM$ with failure probability at most $2\rho$ for the displayed $H,M$.

[F3] [[def-admissible-mdp-heuristic]]: $0\le V^*(s)\le V_{\max}$ and $U(s,a)\le V_{\max}$.

[F4] [[thm-zero-tolerance-pac-mdp-boundary]]: at zero tolerance the all-zero-optimal-value case has no bad steps; fixed finite legal R-MAX parameters admit an admissible one-state model with infinitely many zero-bad steps, with failure probability exceeding any prescribed confidence tolerance.

## Proof

1.1 If $\epsilon=0$, apply [F4] to obtain both stated endpoint branches. No finite sample-size or positive bonus is defined by substituting zero into the later formulas. For the remainder assume $\epsilon>0$. [given, F4, cases]

1.2 If $\epsilon\ge V_{\max}$, then $V^*(s)-\epsilon\le0$ for every state and every continuation value is nonnegative, so no time is counted. Assume now $\epsilon<V_{\max}$. The stated $\eta$ satisfies $0<\eta<V_{\max}/4$ and $\eta(1-\gamma)<1$. Apply [F1] with confidence parameter $\delta/2$; its sample threshold is exactly the displayed $m$. On its event, R-MAX has the hypotheses of [F2] with $\zeta=(m+1)|E_\eta|$. [given, F1, F2, F3, algebra]

1.3 For the uninformative heuristic, $|E_\eta|\le SA$ and $V_{\max}=(1-\gamma)^{-1}$. The displayed $b$ gives $m=O((S+\ln(SA/\delta))V_{\max}^2/[\eta^2(1-\gamma)^2])$. Also $H=O((1-\gamma)^{-1}\ln(1/[\eta(1-\gamma)]))$, since $-\ln\gamma\ge1-\gamma$ for $0<\gamma<1$, and $M=O((V_{\max}/\eta)(\zeta+\ln(2/\delta)))$. Using $\zeta\le(m+1)SA$ and $\eta=\epsilon/4$ yields $\widetilde O(S^2A/[\epsilon^3(1-\gamma)^6])$. [given, F1, F2, algebra]

2.1 Take $\rho=\delta/2$ in [F2]. Since $4\eta=\epsilon$, the theorem gives $\mathbb P(N_\epsilon\le HM)\ge1-\delta$. [step 1.2, F2, algebra]

3.1 Put $\bar V=(1-\gamma)^{-1}$. Since $V_{\max}\le\bar V$ and $|E_\eta|\le SA$, the instance parameters satisfy $b\ge\bar b$, $m\le\bar m$, $\zeta\le\bar\zeta$, and $q\ge\bar q$, while the truncation horizon is $H=\bar H$. If $\epsilon<V_{\max}$, then $M\le\bar M$ and step 2.1 yields the uniform bound. If $\epsilon\ge V_{\max}$, then $N_\epsilon=0$. Thus the displayed $\bar H\bar M$ is a finite PAC-MDP bound in the sense of the Definition. [given, F1, F2, F3, step 2.1, algebra] ∎
