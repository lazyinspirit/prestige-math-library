---
id: thm-sequential-likelihood-ratio-test-terminates-under-drift
kind: theorem
title: Iid drift conditions imply almost-sure test termination
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-sequential-likelihood-ratio-test
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-law-or-distribution-of-a-random-element
  - def-likelihood-ratio-as-rn-derivative
  - def-probability-measure
  - lem-iid-sequential-likelihood-ratio-factorization
  - lem-measurable-functions-preserve-independence
  - cor-continuous-functions-are-borel-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-change-of-variables-for-expectation
  - thm-kolmogorov-iid-l1-strong-law
  - thm-likelihood-ratio-change-of-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Robert L. Wolpert, Introduction to Martingales, STA 711 course notes, §1.2, PDF p. 4"
      url: "https://www2.stat.duke.edu/courses/Fall18/sta711/lec/topics/mg.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §2.4, Theorem 2.4.1 and proof, printed pp. 76–78"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume AC. Let $(X_i)_{i\ge1}$ be IID under each of two probability measures $P_j$, with one-coordinate law $Q_j$, and suppose $Q_0$ and $Q_1$ are equivalent. Choose a finite strictly positive representative $\lambda=dQ_1/dQ_0$ and set $Z=\log\lambda$. If
$$\mathbb E_{Q_0}|Z|,\mathbb E_{Q_1}|Z|<\infty,\qquad \mathbb E_{Q_0}Z<0<\mathbb E_{Q_1}Z,$$
then for every $\alpha,\beta\in(0,1)$ the algorithm [[alg-sequential-likelihood-ratio-test]], with $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_t=\sigma(X_1,\ldots,X_t)$, satisfies
$$P_0(\tau<\infty)=P_1(\tau<\infty)=1.$$

## Facts & Assumptions

**Given:** Assume AC. Under $P_j$, the observations $X_i$ are IID with common law $Q_j$, the one-observation laws are equivalent, and the log likelihood increment $Z=\log(dQ_1/dQ_0)(X_1)$ is integrable under both laws with strictly negative $Q_0$ mean and strictly positive $Q_1$ mean. The algorithm uses fixed $\alpha,\beta\in(0,1)$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function and is assumed by the local Radon–Nikodym convention.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means mutual independence together with a common one-coordinate law.

[F2] [[lem-measurable-functions-preserve-independence]]: applying the same measurable real function to IID observations preserves independence; the resulting variables have the common pushforward law.

[F3] [[thm-kolmogorov-iid-l1-strong-law]]: for IID integrable real variables, their sample mean converges almost surely to the expectation.

[F4] [[def-law-or-distribution-of-a-random-element]]: $Q_j$ is the pushforward law of one observation under $P_j$.

[F5] [[def-likelihood-ratio-as-rn-derivative]] and [[thm-likelihood-ratio-change-of-measure]]: an absolutely continuous probability law has a nonnegative RN density, finite almost surely; its integral over a set is the probability of that set under the changed law.

[F6] [[lem-iid-sequential-likelihood-ratio-factorization]]: under IID observations, the finite-time density process is $L_t=\prod_{i=1}^t\lambda(X_i)$.

[F7] [[alg-sequential-likelihood-ratio-test]]: the procedure stops upon crossing $1/\alpha$ above or $\beta$ below, and otherwise continues.

[F8] [[cor-continuous-functions-are-borel-measurable]]: under countable choice, a continuous map from $\mathbb R^n$ to $\mathbb R^m$ is Borel measurable for $n,m\ge1$. This corollary does not itself cover $\log:(0,\infty)\to\mathbb R$; step 1.1 verifies measurability on that subspace directly.

[F9] [[thm-composition-with-borel-functions-preserves-measurability]]: composing a measurable map with a Borel map gives a measurable map.

[F10] [[thm-change-of-variables-for-expectation]]: if $X_i$ has law $Q_j$ and $Z$ is measurable, then $\mathbb E_{P_j}|Z(X_i)|=\mathbb E_{Q_j}|Z|$ and, when these are finite, $\mathbb E_{P_j}Z(X_i)=\mathbb E_{Q_j}Z$.

## Proof

1.1 Let $r$ be any nonnegative RN representative of $Q_1$ with respect to $Q_0$. Since $\int r\,dQ_0=1$, the set where $r=\infty$ is $Q_0$-null and hence $Q_1$-null. On $A=\{r=0\}$ the change-of-measure identity [F5] gives $Q_1(A)=\int_A r\,dQ_0=0$; equivalence $Q_0\ll Q_1$ then makes $A$ $Q_0$-null too. Replacing $r$ by $1$ on these common null sets yields a finite strictly positive measurable representative $\lambda$ of the same density class. Its range lies in $(0,\infty)$, so it is measurable into that subspace with its Borel sigma-algebra $\{B\cap(0,\infty):B\in\mathcal B(\mathbb R)\}$. Although the logarithm is continuous on this subspace, [F8] only covers Euclidean domains. For every open $U\subseteq\mathbb R$, $\log^{-1}(U)$ is open in $(0,\infty)$ and therefore Borel there; since open sets generate $\mathcal B(\mathbb R)$, $\log:(0,\infty)\to\mathbb R$ is Borel measurable. Thus [F9] makes $Z=\log\circ\lambda$ real-valued and measurable. [A1, F4, F5, F8, F9, given, construct]

1.2 For each $j$, the variables $Z_i:=Z(X_i)$ are IID under $P_j$: measurability gives the same pushforward law for all coordinates, and [F2] preserves their independence. The change-of-variables identity [F10] gives $\mathbb E_{P_j}|Z_i|=\mathbb E_{Q_j}|Z|<\infty$ and $\mathbb E_{P_j}Z_i=\mu_j:=\mathbb E_{Q_j}Z$. Thus [F3] gives $t^{-1}\sum_{i=1}^t Z_i\to\mu_j$ almost surely under $P_j$. [F1, F2, F3, F10, given]

2.1 Put $G_t=\prod_{i=1}^t\lambda(X_i)$. By [F6], $G_t$ is a version of the finite-time density, so the algorithm's chosen representative $L_t$ equals $G_t$ $P_0$-almost surely by uniqueness of Radon–Nikodym derivatives. The representative $\lambda$ is finite and strictly positive $Q_0$-almost surely; equivalence of $Q_0,Q_1$ gives the same under $Q_1$. Thus $G_t$ is finite and strictly positive $P_0$-almost surely, and for $A\in\mathcal F_t$, $P_1(A)=\int_A G_t\,dP_0$ implies $P_1(A)=0$ exactly when $P_0(A)=0$. The finite-time restrictions are therefore equivalent, so $L_t=G_t$ also $P_1$-almost surely. Intersecting these probability-one events over countably many $t$ gives one event under each law on which the equalities hold for every $t$. Positivity of $\lambda$ there yields $\log L_t=\sum_{i=1}^tZ_i$. [F5, F6, step 1.1]

3.1 Under $P_0$, steps 1.2 and 2.1 give $\log L_t/t\to\mu_0<0$, hence $\log L_t\to-\infty$. Since $\log\beta$ is finite, some finite $t$ satisfies $L_t\le\beta$, so the lower boundary has been crossed and the algorithm has $\tau<\infty$. [F7, step 1.2, step 2.1, given, algebra]

4.1 Under $P_1$, steps 1.2 and 2.1 give $\log L_t/t\to\mu_1>0$, hence $\log L_t\to+\infty$. Since $\log(1/\alpha)$ is finite, some finite $t$ satisfies $L_t\ge1/\alpha$, so the upper boundary has been crossed and $\tau<\infty$. This proves almost-sure termination under both laws, without a claim about $\mathbb E_{P_j}\tau$. [F7, step 1.2, step 2.1, given, algebra] ∎

## Source notes

Wolpert §1.2, PDF p. 4, writes the iid log likelihood as a sum of iid increments. Durrett Theorem 2.4.1, printed pp. 76–78, proves the L1 strong law by truncation. The local proof uses the actual published Kolmogorov iid L1 strong-law supplier; no finite-variance strengthening is assumed.
