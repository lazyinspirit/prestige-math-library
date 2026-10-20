---
id: thm-finite-horizon-pomdp-piecewise-linear-convex-value
kind: theorem
title: "Finite-horizon POMDP values are piecewise-linear and convex"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - alg-pomdp-witness-backup
  - lem-finite-pomdp-belief-update-is-probability-kernel
  - thm-belief-mdp-sufficient-statistic
  - def-sum-over-a-finite-index-set
  - lem-finite-sum-laws
  - lem-finite-set-has-max
  - def-finite-cardinality
  - def-nat-power
  - thm-product-rule
  - thm-cardinality-of-a-set-of-functions
  - thm-induction-principle
aliases: []
forward_refs: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §§4.1–4.3, PDF pp. 11–16, and witness/pruning context in §4, PDF pp. 13–19. The alpha-vector induction and witness-pruning invariance are proved locally."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 8–15 and 19. The slides are used for independent treatment and count context, not as a proof substitute."
---

## Statement

Fix a finite POMDP, horizon $H\in\mathbb N$, and discount $\gamma\in[0,1]$. For $0\le h\le H$, let $\Gamma_h$ be the finite alpha-vector set returned by the exhaustive backup, with set semantics for duplicate vectors. Then, for every belief $b\in\Delta(S)$,

$$V_h(b)=\max_{\alpha\in\Gamma_h}\sum_{s\in S}b(s)\alpha(s),$$

where $V_h$ is the optimal expected $h$-step discounted reward. Thus $V_h$ is the upper envelope of finitely many linear functions on $\Delta(S)$: it is linear on each region $R_\alpha=\{b\in\Delta(S):\sum_s b(s)\alpha(s)\ge\sum_s b(s)\beta(s)\text{ for every }\beta\in\Gamma_h\}$ and is convex. Define a **witness belief** for $\alpha\in\Gamma_h$ to be any $b\in\Delta(S)$ with $\sum_s b(s)\alpha(s)=V_h(b)$. Removing every vector with no witness belief leaves $V_h$ unchanged. For the count, $\mathcal P_0$ contains the empty continuation and each $\mathcal P_{h+1}$ consists of a root action and one depth-$h$ continuation for each observation; with $N_h=|\mathcal P_h|$, $N_0=1$ and $N_{h+1}=|A|N_h^{|\Omega|}$. The exhaustive candidate and witness-vector counts are bounded by $N_h$, which can grow exponentially in $h$. No infinite-horizon representation or polynomial-time pruning claim is made.

## Statement references

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).

## Facts & Assumptions

**Given:** A finite POMDP, $H\in\mathbb N$, $\gamma\in[0,1]$, its belief simplex $\Delta(S)$, and the exhaustive alpha-vector backup.

[F1] Conditional on state $s$ and action $a$, the joint next-state/reward/observation mass is $p(s',\rho\mid s,a)O(o\mid s')$; its next-state and reward marginals are $T$ and $r$, and realized rewards are not observed. [[def-finite-pomdp]]

[F2] A belief $b$ is a probability vector; the filter and observation normalizer are defined for positive observation probability. [[def-belief-state-and-bayes-filter]]

[F3] The exhaustive backup forms a root action and one continuation vector for each observation and assigns the vector $r(s,a)+\gamma\sum_{s'}T(s'\mid s,a)\sum_oO(o\mid s')\alpha_o(s')$. [[alg-pomdp-witness-backup]]

[F4] The finite-horizon optimal value is obtained by the belief-state recursion, zero-probability observations omitted; finite action randomization cannot improve the maximum. [[thm-belief-mdp-sufficient-statistic]]

[F5] Finite sums are enumeration-independent, additive, and homogeneous in a real scalar. [[def-sum-over-a-finite-index-set]], [[lem-finite-sum-laws]]

[F6] A nonempty finite set of real values has an attained maximum. [[lem-finite-set-has-max]]

[F7] The cardinality of a finite set is the natural number equinumerous with it. [[def-finite-cardinality]]

[F8] For finite $X,Y$, the function set $X^Y$ is finite and has cardinality $|X|^{|Y|}$. [[thm-cardinality-of-a-set-of-functions]]

[F9] Finite Cartesian products are finite and their cardinalities multiply. [[thm-product-rule]]

[F10] Natural powers satisfy $m^0=1$ and $m^{n+1}=m^n m$. [[def-nat-power]]

[F11] If a property holds at $0$ and its truth at $h$ implies its truth at $h+1$, it holds for every natural $h$. [[thm-induction-principle]]

[L1] $P(h)$ denotes the claim that $\Gamma_h$ is finite and nonempty, is exactly the set of distinct state-conditional value vectors of depth-$h$ policy trees, and satisfies $V_h(b)=\max_{\alpha\in\Gamma_h}\sum_s b(s)\alpha(s)$ for every belief $b$.

## Proof

1.1 At horizon $h=0$, there is one empty-continuation policy tree and the backup returns $\Gamma_0=\{0\}$. Its conditional value is zero at every state, and the optimal zero-step value is $V_0(b)=0=\sum_s b(s)0$ for each belief. Thus $P(0)$ holds. [base, given, L1, F3, F4, construct]

1.2 Fix $h\in\mathbb N$ and assume $P(h)$. [ih, L1]

2.1 A depth-$(h+1)$ policy tree is a root action $a$ and a depth-$h$ continuation tree $\pi_o$ for each $o\in\Omega$. From initial hidden state $s$, its expected immediate reward plus discounted continuation value is $\sum_{s'\in S}\sum_{\rho\in\mathcal R}\sum_{o\in\Omega}p(s',\rho\mid s,a)O(o\mid s')\bigl(\rho+\gamma\alpha_h^{\pi_o}(s')\bigr)$. By the induction hypothesis [L1], each continuation vector $\alpha_h^{\pi_o}$ is represented in $\Gamma_h$. Since the continuation is selected from $o$ alone, not from the unobserved reward $\rho$, finite-sum linearity and reindexing [F5], together with $\sum_oO(o\mid s')=1$ from [F1], rewrite this expectation as $\sum_{s',\rho}\rho p(s',\rho\mid s,a)+\gamma\sum_{s'}\bigl(\sum_\rho p(s',\rho\mid s,a)\bigr)\sum_oO(o\mid s')\alpha_h^{\pi_o}(s')$. The first term is $r(s,a)$ and the inner next-state marginal is $T(s'\mid s,a)$ by [F1], so this is exactly the vector formed by [F3]. Conversely, each tuple generated by [F3] has a depth-$h$ tree for each continuation vector by [L1]; since $\Omega$ is finite, choose these finitely many trees successively and adjoin the root action to obtain a depth-$(h+1)$ tree. Therefore $\Gamma_{h+1}$ is exactly the set of distinct conditional-value vectors of those trees. The candidate set $A\times\Gamma_h^{\Omega}$ is finite by [F8]–[F9], so its image $\Gamma_{h+1}$ under the vector formula is finite; it is nonempty by the nonempty action set and a constant continuation tuple. [step 1.2, F1, F3, F5, F8, F9, construct]

3.1 For each depth-$(h+1)$ tree $\pi$, conditioning on the initial hidden state gives value $\sum_s b(s)\alpha^\pi_{h+1}(s)$ from belief $b$. Every deterministic history policy is such a tree: its first action is the root and its restriction after each observation is the corresponding subtree; conversely every tree prescribes such a policy. Since $\Gamma_{h+1}$ is finite and nonempty by step 2.1, its value set $\{\sum_s b(s)\alpha(s):\alpha\in\Gamma_{h+1}\}$ is a nonempty finite image in $\mathbb R$, so [F6] gives an attained maximum. By [F4], randomized policies cannot improve it. Hence $V_{h+1}(b)=\max_{\alpha\in\Gamma_{h+1}}\sum_s b(s)\alpha(s)$. This completes $P(h+1)$. [step 2.1, F1, F3, F4, F5, F6]

4.1 The base step 1.1 and successor steps 2.1–3.1 prove $P(h)$ for every natural $h$ by induction. The recursion in [F3] depends only on the preceding stage, so a call with horizon at least $h$ has the same $\Gamma_h$ as a call with horizon exactly $h$. In particular, the displayed alpha-vector representation holds for every $0\le h\le H$. [step 1.1, step 3.1, L1, F3, F11, discharge-induction]

5.1 For each $\alpha\in\Gamma_h$, its maximizing region $R_\alpha$ is the simplex intersected with the finitely many half-spaces $\sum_s b(s)(\alpha(s)-\beta(s))\ge0$, one for each $\beta\in\Gamma_h$. These regions cover $\Delta(S)$ because the maximum in step 4.1 is attained, and on $R_\alpha$ the value equals the linear function $b\mapsto\sum_s b(s)\alpha(s)$. This proves piecewise linearity. [step 4.1, F5, F6]

5.2 For arbitrary $b,c\in\Delta(S)$ and $\lambda\in[0,1]$, the vector $\lambda b+(1-\lambda)c$ is again in $\Delta(S)$ by [F2]: its coordinates are nonnegative and sum to $\lambda+(1-\lambda)=1$. Finite-sum linearity [F5] gives $\sum_s(\lambda b(s)+(1-\lambda)c(s))\alpha(s)=\lambda\sum_s b(s)\alpha(s)+(1-\lambda)\sum_s c(s)\alpha(s)$ for each $\alpha$. Taking the maximum over $\Gamma_h$ and bounding each summand by the corresponding maxima gives $V_h(\lambda b+(1-\lambda)c)\le\lambda V_h(b)+(1-\lambda)V_h(c)$. Thus $V_h$ is convex. [step 4.1, F2, F5, F6, choose]

5.3 Define $\Gamma_h^{\rm wit}=\{\alpha\in\Gamma_h:\exists b\in\Delta(S),\ \sum_s b(s)\alpha(s)=V_h(b)\}$. For arbitrary $b$, [F6] gives a maximizing $\alpha_b\in\Gamma_h$; that same $b$ witnesses $\alpha_b$, so $\alpha_b\in\Gamma_h^{\rm wit}$. Therefore $\max_{\alpha\in\Gamma_h^{\rm wit}}\sum_s b(s)\alpha(s)=V_h(b)$; deleting all vectors with no witness preserves the value at every belief. [step 4.1, F6, choose]

5.4 Let $\mathcal P_0$ contain only the empty continuation and $\mathcal P_{h+1}=A\times\mathcal P_h^{\Omega}$. A depth-$(h+1)$ tree is uniquely its root action and a function from observations to depth-$h$ trees. By [F8]–[F9], these sets are finite and their cardinalities satisfy $N_0=1$ and $N_{h+1}=|A|N_h^{|\Omega|}$; [F10] fixes the natural-power convention. The map from trees to conditional-value vectors has image $\Gamma_h$, the set of distinct exhaustive candidates by step 2.1. Enumerating the $N_h$ trees shows that this image has at most $N_h$ vectors, and the witness vectors form a subset, so their count is no larger. [step 4.1, F3, F7, F8, F9, F10]

6.1 In the case $|A|=2$, $|\Omega|=1$, let $Q(h)$ be the claim $N_h=2^h$. The base case is $N_0=1=2^0$. [base, step 5.4, F10]

6.2 Fix $h$ and assume $Q(h)$. Step 5.4 gives $N_{h+1}=2N_h=2\cdot2^h=2^{h+1}$ by the natural-power recursion [F10], so $Q(h+1)$ holds. [ih, step 5.4, F10, algebra]

7.1 The base and successor steps prove $N_h=2^h$ for every $h$ by [F11]. Thus exhaustive tree candidates can grow exponentially, although duplicate vectors or pruning may reduce the stored set. [step 6.1, step 6.2, F11, discharge-induction]

8.1 The induction conclusions in steps 4.1 and 7.1, together with the envelope and convexity arguments in steps 5.1 and 5.2, witness pruning in step 5.3, and the general tree count in step 5.4, establish all claims. No Axiom of Choice is used: branches are selected only over the finite observation set, maxima are attained in finite sets, and the cited sufficiency, finite-sum, finite-function-set, product, and induction arguments make no arbitrary-family choice. [step 4.1, step 5.1, step 5.2, step 5.3, step 5.4, step 7.1, F4, F6, F8, F9, F11, discharge-induction] ∎

## Remarks

The tree-count recurrence bounds the exhaustive candidate search, not the number of distinct vectors after duplicate removal. Exact witness pruning is value-preserving, but this theorem gives no guarantee that it leaves a small set. The finite-horizon assumption is essential to the finite policy-tree construction; no infinite-horizon piecewise-linear representation is asserted.
