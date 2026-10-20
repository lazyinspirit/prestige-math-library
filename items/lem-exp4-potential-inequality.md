---
id: lem-exp4-potential-inequality
kind: lemma
title: Exp4 exponential-weights potential inequality
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-exp4
  - cor-exponential-reciprocal-and-positivity
  - lem-exp-negative-argument-second-order-upper-bound
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - lem-mean-value-theorem-on-closed-interval
  - thm-exponential-addition-formula
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof is a finite potential calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§18.4, Lemma 18.2, PDF pp. 238–239 / printed pp. 229–230; the source directs its proof to Exercise 18.2, supplied here."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§7, exponential-potential part of the proof of Theorem 7.1, PDF pp. 18–19 / SIAM printed pp. 66–67; its exploration variant is not used."
---

## Statement

For any Exp4 run with learning rate $\eta>0$ and any fixed expert $m^*\in[M]$, define $\widetilde L_{t,m}=1-\widetilde X_{t,m}$. The following pathwise inequality holds for every realized action sequence:
$$
\sum_{t=1}^n\widetilde X_{t,m^*}-\sum_{t=1}^n\sum_{m=1}^M Q_{t,m}\widetilde X_{t,m}\le\frac{\log M}{\eta}+\frac{\eta}{2}\sum_{t=1}^n\sum_{m=1}^M Q_{t,m}\widetilde L_{t,m}^{2}.
$$

## Statement references

[[alg-exp4|Exp4 update]]: the expert weights are updated by normalized exponentials of the estimated rewards.

[[lem-exp-negative-argument-second-order-upper-bound|Nonpositive-axis exponential inequality]]: the potential proof applies this inequality to the negative estimated losses.

## Facts & Assumptions

**Given:** Integers $n\ge1$, $M>1$, a learning rate $\eta>0$, and an Exp4 run.

[F1] [[alg-exp4]]: $Q_{1,m}=1/M$, $Q_{t+1,m}$ is proportional to $Q_{t,m}\exp(\eta\widetilde X_{t,m})$, and $\widetilde L_{t,m}=1-\widetilde X_{t,m}\ge0$ is finite.

[F2] [[lem-exp-negative-argument-second-order-upper-bound]]: $\exp(z)\le1+z+z^2/2$ for every real $z\le0$.

[F3] [[thm-exponential-addition-formula]]: $\exp(a+b)=\exp(a)\exp(b)$ for all real $a,b$.

[F4] [[def-natural-logarithm]]: $\log$ is defined on positive reals as the inverse of $\exp$.

[F5] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log1=0$, and $\log(u/v)=\log u-\log v$ for $u,v>0$.

[F6] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with $\log'(u)=1/u$.

[F7] [[lem-mean-value-theorem-on-closed-interval]]: for a continuous function on a closed interval differentiable in its interior, some interior point realizes its secant slope as the derivative.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $\exp(u)>0$ for every real $u$.

## Proof

1.1 First, for every $s>0$, $\log s\le s-1$. If $s=1$ this is equality by [F5]. If $s>1$, apply [F7] to $\log$ on $[1,s]$; by [F6] there is $c\in(1,s)$ with $\log s=(s-1)/c\le s-1$. If $0<s<1$, apply [F7] on $[s,1]$ to obtain $c\in(s,1)$ with $-\log s=(1-s)/c\ge1-s$, again giving $\log s\le s-1$. All intervals lie in $(0,\infty)$, where [F6] supplies continuity and differentiability. [F4, F5, F6, F7, cases, choose, algebra]

2.1 Define $W_{1,m}=1$, $W_{t+1,m}=W_{t,m}\exp(\eta\widetilde X_{t,m})$, and $Z_t=\sum_m W_{t,m}$. The update gives $Q_{t,m}=W_{t,m}/Z_t$. Since $\widetilde X_{t,m}=1-\widetilde L_{t,m}$, [F3] and [F2] give $Z_{t+1}/Z_t=\sum_m Q_{t,m}\exp(\eta\widetilde X_{t,m})=\exp(\eta)\sum_m Q_{t,m}\exp(-\eta\widetilde L_{t,m})\le\exp(\eta)S_t$, where $S_t=\sum_m Q_{t,m}(1-\eta\widetilde L_{t,m}+\eta^2\widetilde L_{t,m}^{2}/2)>0$. Positivity follows termwise from $1-u+u^2/2=((u-1)^2+1)/2>0$ and $Q_{t,m}>0$. Applying [F5] and step 1.1 yields $\log(Z_{t+1}/Z_t)\le\eta+\log S_t\le\eta+S_t-1=\eta\sum_m Q_{t,m}\widetilde X_{t,m}+(\eta^2/2)\sum_m Q_{t,m}\widetilde L_{t,m}^{2}$. [F1, F2, F3, F5, F8, step 1.1, algebra]

3.1 Summing step 2.1 over $t$ and using [F5] telescopes the left side to $\log(Z_{n+1}/Z_1)$. Since $Z_1=M$ and $Z_{n+1}=\sum_m\exp(\eta\sum_{t=1}^n\widetilde X_{t,m})$, the fixed expert term gives $\log(Z_{n+1}/Z_1)\ge\eta\sum_{t=1}^n\widetilde X_{t,m^*}-\log M$. Combining this lower bound with the summed upper bound and dividing by $\eta>0$ proves the stated inequality. [F1, F5, step 2.1, algebra] ∎
