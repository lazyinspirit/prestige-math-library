---
id: lem-robbins-siegmund-almost-supermartingale
kind: lemma
title: "Robbins–Siegmund almost-supermartingale convergence"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-doob-submartingale-convergence
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
  - cor-mean-value-theorem
  - thm-exponential-addition-formula
  - def-complete-ordered-field
  - thm-induction-principle
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dimitri P. Bertsekas, Convex Optimization Algorithms, Appendix A, Proposition A.4.5"
      url: "https://web.mit.edu/dimitrib/www/Appendix_A_NEW_ALG.pdf"
      locator: "Appendix A, Proposition A.4.5, printed pp. 464–465; its generalized theorem statement is cited for context, while the complete proof below is local"
---

## Statement

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,(\mathcal F_k)_{k\ge0},P)$ be a discrete filtered probability space. Let $X_k$ be nonnegative, adapted, and integrable for every $k$. Let $a_k,c_k$ be deterministic nonnegative sequences with finite sums, and let $b_k$ be nonnegative, $\mathcal F_k$-measurable, and integrable. If
$$\mathbb E[X_{k+1}\mid\mathcal F_k]\le(1+a_k)X_k-b_k+c_k\quad\text{almost surely for every }k,$$
then $X_k$ converges almost surely to a finite nonnegative random variable and $\sum_{k\ge0}b_k<\infty$ almost surely.

## Facts & Assumptions

**Given:** The filtered probability space, processes, summable sequences, conditional inequality, and the Axiom of Choice in the Statement. A sequence of nonnegative reals is summable when its partial sums have a finite supremum.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is assumed for the conditional-expectation and Doob interfaces used here.

[F1] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_k\subseteq\mathcal F_{k+1}\subseteq\mathcal F$.

[F2] [[def-adapted-and-integrable-stochastic-process]]: adaptedness means $\mathcal F_k$-measurability at time $k$, and integrability means finite expectation of the absolute value at every fixed time.

[F3] [[def-conditional-expectation-as-an-ae-class]]: under AC, conditional expectations exist as almost-sure classes; inequalities and equalities between them are interpreted almost surely.

[F4] [[thm-doob-submartingale-convergence]]: under AC, a submartingale $Y_k$ with $\sup_k\mathbb E[Y_k^+]<\infty$ has a finite integrable almost-sure limit.

[F5] [[def-real-exponential-function-and-e]]: $\exp(t)=\sum_{n\ge0}t^n/n!$, so $\exp(0)=1$.

[F6] [[thm-derivative-of-exponential]]: $\exp'(t)=\exp(t)$.

[F7] [[thm-exponential-is-strictly-increasing]]: $\exp$ is increasing on $\mathbb R$.

[F8] [[cor-mean-value-theorem]]: for a function continuous on $[u,v]$ and differentiable on $(u,v)$, some $w\in(u,v)$ satisfies $g(v)-g(u)=g'(w)(v-u)$.

[F9] [[thm-exponential-addition-formula]]: $\exp(s+t)=\exp(s)\exp(t)$.

[F10] [[def-complete-ordered-field]]: every nonempty set of reals bounded above has a least upper bound.

[F11] [[thm-induction-principle]]: a property true at $0$ and inherited by each successor holds for every natural index.

[F12] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and fixes constants; [[thm-taking-out-what-is-known]]: an integrable measurable factor can be taken outside when the products are integrable.

## Proof

1.1 Define $A_0=1$, $A_{k+1}=A_k(1+a_k)$, and $T_k=\sum_{j\ge k}c_j/A_{j+1}$. Then $A_k\ge1$. For $t>0$, [F8] applied to $\exp$ on $[0,t]$ gives $\exp(t)-1=t\exp(w)$ for some $w\in(0,t)$; by [F5] and [F7], $\exp(w)\ge1$, so $1+t\le\exp(t)$, with equality at $t=0$. Repeated use of [F9] now gives $A_k\le\exp(\sum_{j<k}a_j)\le\exp(\sum_{j\ge0}a_j)$. Thus $A_k$ is nondecreasing and bounded. Let $A_\infty=\sup_k A_k$, which exists by [F10]; for every $\varepsilon>0$, some $n$ has $A_n>A_\infty-\varepsilon$, and then $A_\infty-\varepsilon<A_n\le A_k\le A_\infty$ for all $k\ge n$, so $A_k\to A_\infty\ge1$. If $C_m=\sum_{j<m}c_j$ and $C_\infty=\sup_m C_m$, then for every $\varepsilon>0$ some $m$ has $C_m>C_\infty-\varepsilon$; for $k\ge m$, $0\le T_k\le C_\infty-C_k\le C_\infty-C_m<\varepsilon$. Thus $T_k\to0$. [A1, F5, F6, F7, F8, F9, F10, F11, given, choose, algebra, induction]

2.1 Put $Z_k=X_k/A_k+T_k$. Each $Z_k$ is nonnegative, adapted, and integrable by [F1]–[F3]. By [F12], division by the positive deterministic $A_{k+1}$ and addition of the deterministic $T_{k+1}$ commute with conditional expectation. Since $A_{k+1}=A_k(1+a_k)$ and $T_k=c_k/A_{k+1}+T_{k+1}$, the given conditional inequality yields $\mathbb E[Z_{k+1}\mid\mathcal F_k]\le \frac{(1+a_k)X_k-b_k+c_k}{A_{k+1}}+T_{k+1}=Z_k-\frac{b_k}{A_{k+1}}.$ Hence $-Z_k$ is an integrable adapted submartingale and $\sup_k\mathbb E[(-Z_k)^+]=0$. By [F4], $Z_k$ converges almost surely to a finite limit. [A1, F1, F2, F3, F4, F12, step 1.1, given, algebra]

3.1 Define $S_k=\sum_{j<k}b_j/A_{j+1}$ and $W_k=Z_k+S_k$. For each $k$, $S_{k+1}=S_k+b_k/A_{k+1}$ is $\mathcal F_k$-measurable: each earlier $b_j$ is $\mathcal F_j$-measurable with $\mathcal F_j\subseteq\mathcal F_k$, the new term $b_k$ is $\mathcal F_k$-measurable by hypothesis, and the denominators are deterministic. The finite sums $S_k,S_{k+1}$ are nonnegative and integrable by [F2]–[F3]. Hence [F12] gives $\mathbb E[S_{k+1}\mid\mathcal F_k]=S_{k+1}=S_k+b_k/A_{k+1}$. Combining this with step 2.1 by linearity yields $\mathbb E[W_{k+1}\mid\mathcal F_k]\le Z_k-b_k/A_{k+1}+S_k+b_k/A_{k+1}=W_k$. Thus $-W_k$ is an integrable adapted submartingale with $\sup_k\mathbb E[(-W_k)^+]=0$; [F4] gives a finite almost-sure limit for $W_k$. Since the increasing partial sums $S_k$ are bounded above by $W_k$, their limit is finite almost surely. [A1, F1, F2, F3, F4, F12, step 2.1, algebra]

4.1 From $1\le A_{j+1}\le A_\infty$, step 3.1 implies $\sum_j b_j\le A_\infty\sum_j b_j/A_{j+1}<\infty$ almost surely. By definition, $X_k=A_k(Z_k-T_k)$; step 1.1 gives $A_k\to A_\infty$ and $T_k\to0$, and step 2.1 gives convergence of $Z_k$. Therefore $X_k$ converges to a finite nonnegative limit and the asserted decrement sum is finite. [step 1.1, step 2.1, step 3.1, algebra] ∎
## Source notes

The author-hosted Bertsekas appendix states a generalized Robbins–Siegmund theorem but provides no proof of it; the preceding note describes a proof route without giving its argument. It is recorded as statement-level comparison only; the proof above derives the required result from the complete current Doob submartingale supplier.
