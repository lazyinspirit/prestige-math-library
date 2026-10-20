---
id: thm-exp3-expected-regret
kind: theorem
title: Exp3 expected regret under bandit feedback
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-exp3
  - def-bandit-importance-weighted-estimator
  - lem-bandit-importance-weighted-estimator-has-conditional-moments
  - lem-exp-negative-argument-second-order-upper-bound
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - lem-exponential-dominates-one-plus-x
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the finite-horizon protocol assumes its stated probability space and categorical draws.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§§11.1–11.4, Theorem 11.2 and complete potential proof, PDF pp. 157–166 / printed pp. 148–157; §11.5 Note 4, PDF pp. 167–168 / printed pp. 158–159."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§3, Theorem 3.1 and complete proof, PDF pp. 5–7 / SIAM printed pp. 52–55; its algorithm uses a uniform-exploration mixture and a different bound."
---

## Statement

Let $n\ge1$ and $k>1$ be integers. Let $x_1,\ldots,x_n\in[0,1]^k$ be a reward sequence fixed before the learner's random choices, and run Exp3 with learning rate
$$
\eta=\sqrt{\frac{2\log k}{nk}}.
$$
Here $\log$ is the natural logarithm. For the well-definedness, finite-horizon completion, and two weight identities below, one may instead take any learning rate $\eta>0$ and any reward sequence admitted by the algorithm: rewards in $[0,1]^k$ fixed in advance or deterministic functions of the complete pre-action history. These procedure properties do not require the tuned learning rate.
Assume the run is on a probability space carrying the measurable, finite-valued actions with the conditional probabilities specified by Exp3; no probability-space construction is asserted. Every normalizing denominator is finite and positive, all estimates and cumulative estimates are finite, and the procedure completes its $n$ rounds. For every $t\in\{0,\ldots,n\}$ and $i\in[k]$,
$$
\widehat S_{t,i}=t-\sum_{s=1}^t\widehat Y_{s,i},
$$
where the sum is empty when $t=0$. Consequently, for every $t\in\{1,\ldots,n\}$,
$$
P_{t,i}=\frac{\exp(-\eta\sum_{s<t}\widehat Y_{s,i})}{\sum_{j=1}^k\exp(-\eta\sum_{s<t}\widehat Y_{s,j})},\qquad i\in[k].
$$
For the following regret guarantees, use the tuned learning rate displayed above. Write $X_t=x_{t,A_t}$ and define expected regret against the best fixed arm by
$$
R_n=\max_{i\in[k]}\sum_{t=1}^n x_{t,i}-\mathbb E\left[\sum_{t=1}^n X_t\right].
$$
Then
$$
R_n\le\sqrt{2nk\log k}.
$$

The same bound holds when each $x_t$ is a deterministic function of the complete history available before $A_t$ is drawn, provided $x_t\in[0,1]^k$. In that past-adaptive case define
$$
R_n^{\mathrm{past}}=\max_{i\in[k]}\mathbb E\left[\sum_{t=1}^n(x_{t,i}-X_t)\right],
$$
with the maximum outside the expectation; then $R_n^{\mathrm{past}}\le\sqrt{2nk\log k}$. This is an expected fixed-arm regret bound, not a high-probability bound, an expected in-hindsight maximum bound for random reward vectors, or a policy-regret bound for a reward rule that responds to the current action.

## Statement references

[[alg-exp3]]: the sampling distribution, loss estimate, reward estimate, and cumulative update.

[[def-bandit-importance-weighted-estimator]]: the bandit feedback and importance-weighted estimate conventions.

[[def-adversary-and-feedback-model]]: oblivious and non-anticipating timing, distinguished from current-action-reactive timing.

[[def-static-dynamic-and-strongly-adaptive-regret]]: fixed-comparator and expected-regret conventions.

[[def-natural-logarithm]]: the natural logarithm is the inverse of the exponential on positive reals.

## Facts & Assumptions

**Given:** A finite horizon $n\ge1$, $k>1$ arms, reward vectors in $[0,1]^k$, Exp3 with any $\eta>0$ for its procedure properties and with the displayed tuned rate for the regret guarantees, and its probability space of learner draws. In the optional past-adaptive case each reward vector is selected from the pre-action history.

[A1] [[def-adversary-and-feedback-model]]: an oblivious adversary fixes the entire reward sequence before learner randomization; a non-anticipating adversary selects the current vector from past history before the current action; a reactive adversary may select it after seeing that action.

[F1] [[alg-exp3]]: $P_{t,i}=\exp(\eta\widehat S_{t-1,i})/\sum_j\exp(\eta\widehat S_{t-1,j})$.

[F2] [[def-bandit-importance-weighted-estimator]]: $Y_t=1-X_t$, $y_{t,i}=1-x_{t,i}$, $\widehat Y_{t,i}=\mathbf1\{A_t=i\}Y_t/P_{t,i}$, and $\widehat X_{t,i}=1-\widehat Y_{t,i}$.

[F3] [[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: $\mathbb E[\widehat Y_{t,i}\mid\mathcal F_{t-1}]=y_{t,i}$ and $\mathbb E[\widehat Y_{t,i}^{2}\mid\mathcal F_{t-1}]=y_{t,i}^2/P_{t,i}$.

[F4] [[lem-exp-negative-argument-second-order-upper-bound]]: $\exp(z)\le1+z+z^2/2$ for every real $z\le0$.

[F5] [[lem-exponential-dominates-one-plus-x]]: $1+u\le\exp(u)$ for every real $u$.

[F6] [[thm-exponential-addition-formula]]: $\exp(u+v)=\exp(u)\exp(v)$ for all real $u,v$.

[F7] [[cor-exponential-reciprocal-and-positivity]]: $\exp(u)>0$ and $\exp(-u)=1/\exp(u)$ for all real $u$.

[F8] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing.

[F9] [[def-natural-logarithm]]: for $q>0$, $\exp(\log q)=q$.

[F10] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing.

[F11] [[def-online-decision-protocol]]: the learner chooses from prior history before current-round feedback.

[F12] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_{t-1}$ records the information available before the round-$t$ action.

[F13] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation versions have the same integrals as the original variable over every event in the conditioning sigma-algebra.

[F14] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on integrable random variables and preserves almost-sure order.

[F15] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of an integrable variable is its Lebesgue integral.

[F16] [[def-static-dynamic-and-strongly-adaptive-regret]]: expected regret is expectation over the specified randomness when the regret variable is measurable and integrable.

[F17] [[def-real-exponential-function-and-e]]: $\exp$ is a real-valued function on $\mathbb R$ and $\exp(0)=1$.

[F18] [[alg-exp3]]: Exp3 initializes $\widehat S_{0,i}=0$.

[F19] [[alg-exp3]]: Exp3 updates $\widehat S_{t,i}=\widehat S_{t-1,i}+\widehat X_{t,i}$.

[F20] [[thm-natural-logarithm-laws]]: $\log1=0$.

[F21] [[alg-exp3]]: the procedure uses exact real arithmetic and assumes a probability space carrying the stated measurable finite-valued actions with their conditional probabilities.

## Proof

1.1 First fix any positive finite real learning rate $\eta$ and any reward sequence admitted by the algorithm. Initially $\widehat S_{0,i}=0$ is finite for every $i$ by [F18]. Suppose all $\widehat S_{t-1,i}$ are finite. Then each $\exp(\eta\widehat S_{t-1,i})$ is a positive finite real by [F7] and the real-valued exponential definition [F17]. Its finite sum over $[k]$ is positive and finite, so [F1] gives $P_{t,i}>0$ and $\sum_iP_{t,i}=1$. The assumed measurable action draw exists by [F21]; its observed reward is in $[0,1]$. Thus each $\widehat Y_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$ and $\widehat X_{t,i}=1-\widehat Y_{t,i}$ is finite, and [F19] makes every $\widehat S_{t,i}$ finite. Induction proves these facts through round $n$. The prescribed loop has the finite index set $\{1,\ldots,n\}$ and each round consists of the finite operations just checked together with an assumed draw, so it completes exactly $n$ rounds. This argument uses only $\eta>0$ and the algorithm's reward range, for either fixed or deterministic past-adaptive rewards. For the rate in the regret clauses, $k>1$, [F10] and [F20] give $\log k>\log1=0$, and [F9] makes $\log k$ real; hence that tuned $\eta$ is also a positive finite real and the same argument applies to it. [given, F1, F7, F9, F10, F17, F18, F19, F20, F21, induction]

1.2 For $t=0$, the claimed identity $\widehat S_{t,i}=t-\sum_{s=1}^t\widehat Y_{s,i}$ holds by [F18] and the empty-sum convention. If it holds at $t-1$, then [F19] and $\widehat X_{t,i}=1-\widehat Y_{t,i}$ give
$$
\widehat S_{t,i}=\widehat S_{t-1,i}+\widehat X_{t,i}=t-\sum_{s=1}^t\widehat Y_{s,i}.
$$
Substituting this identity into [F1] and using [F6] factors out the common positive term $\exp(\eta(t-1))$ from numerator and denominator, giving the stated loss-weight formula for $P_{t,i}$. [F1, F6, F18, F19, induction, algebra]

2.1 For each $t$, set $W_t=\sum_{j=1}^k\exp(\eta\widehat S_{t,j})$ and $V_t=\sum_{j=1}^kP_{t,j}\widehat Y_{t,j}^{2}$. By [F1], [F7], and step 1.1, $W_t$ is positive and finite, and $P_t$ is a probability vector. [F1, F7, step 1.1]

2.2 By [A1] and [F11], each reward vector is fixed at the pre-action history. At each such history, [F3] and $\widehat X_{t,i}=1-\widehat Y_{t,i}$ give the conditional mean $\mathbb E[\widehat X_{t,i}\mid\mathcal F_{t-1}]=x_{t,i}$ by the finite conditional sum. Averaging these sums over histories and using [F14] and [F19] gives $\mathbb E[\widehat S_{n,i}]=\mathbb E[\sum_tx_{t,i}]$. [A1, F2, F3, F11, F12, F13, F14, F19, step 1.1]

2.3 On every round and every action outcome, $\sum_jP_{t,j}\widehat X_{t,j}=1-\sum_jP_{t,j}\widehat Y_{t,j}=1-Y_t=X_t$, because only the sampled arm contributes to the middle sum. [F2, step 1.1, algebra]

3.1 Fix a pre-action history at round $t$. If $A_t=a$, only coordinate $a$ contributes to $V_t$, with value $y_{t,a}^2/P_{t,a}$. Its conditional expectation is therefore $\sum_{a=1}^kP_{t,a}(y_{t,a}^2/P_{t,a})=\sum_{a=1}^ky_{t,a}^2\le k$, since $0\le y_{t,a}\le1$. Averaging over the finite histories and summing the $n$ rounds gives $\mathbb E[\sum_tV_t]\le nk$. [given, F2, F3, F12, F14, F15, step 2.1, algebra]

3.2 By [F1]–[F2], $W_t/W_{t-1}=\sum_{j=1}^kP_{t,j}\exp(\eta\widehat X_{t,j})=\exp(\eta)\sum_{j=1}^kP_{t,j}\exp(-\eta\widehat Y_{t,j})$. Each $\widehat Y_{t,j}\ge0$, so [F4] with $z=-\eta\widehat Y_{t,j}$ gives $W_t/W_{t-1}\le\exp(\eta)(1-\eta\sum_jP_{t,j}\widehat Y_{t,j}+\eta^2V_t/2)$. Put $u_t=-\eta\sum_jP_{t,j}\widehat Y_{t,j}+\eta^2V_t/2$. By [F5] and $\sum_jP_{t,j}\widehat X_{t,j}=1-\sum_jP_{t,j}\widehat Y_{t,j}$, this is at most $\exp(\eta+u_t)=\exp(\eta\sum_jP_{t,j}\widehat X_{t,j}+\eta^2V_t/2)$. [F1, F2, F4, F5, step 2.1, algebra]

4.1 Multiplying step 3.2 over $t=1,\ldots,n$ and using [F6] gives $W_n/W_0\le\exp(\eta\sum_{t=1}^n\sum_jP_{t,j}\widehat X_{t,j}+\eta^2\sum_{t=1}^nV_t/2)$. Here $W_0=k$ by [F17]–[F18], and $W_n\ge\exp(\eta\widehat S_{n,i})$ for every $i$ by [F19]. Since $k=\exp(\log k)$ by [F9], strict increase [F8] and $\eta>0$ yield $\widehat S_{n,i}-\sum_{t=1}^n\sum_jP_{t,j}\widehat X_{t,j}\le\log k/\eta+(\eta/2)\sum_{t=1}^nV_t$ for every arm $i$. [F6, F8, F9, F17, F18, F19, step 3.2, algebra]

5.1 For the oblivious case set $R_{n,i}=\sum_tx_{t,i}-\mathbb E[\sum_tX_t]$; for the past-adaptive case set $R_{n,i}=\mathbb E[\sum_t(x_{t,i}-X_t)]$. By steps 2.2–2.3, both equal $\mathbb E[\widehat S_{n,i}-\sum_t\sum_jP_{t,j}\widehat X_{t,j}]$. Taking expectations in step 4.1, using [F14]–[F16], and applying step 3.1 gives $R_{n,i}\le\log k/\eta+\eta nk/2$ for every $i$. [F14, F15, F16, step 4.1, step 3.1, step 2.2, step 2.3, algebra]

6.1 Using $\eta>0$ from step 1.1, substitution gives $\log k/\eta=\eta nk/2=\sqrt{nk\log k/2}$. The per-arm bound in step 5.1 therefore equals $\sqrt{2nk\log k}$; taking the finite maximum over $i$ proves both regret bounds in the Statement. [given, step 1.1, step 5.1, algebra] ∎
