---
id: lem-poisson-tau-leap-one-step-weak-defect
kind: lemma
title: "One-step weak defect of finite-state Poisson tau-leaping"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-reaction-network-propensity-system-and-generator
  - lem-competing-exponential-race-for-reaction-channels
  - alg-explicit-poisson-tau-leaping
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - thm-finite-state-gillespie-and-next-reaction-exactness
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tiejun Li, Analysis of explicit tau-leaping schemes for simulating chemically reacting systems"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2015/mms_6_417_Li.pdf"
      locator: "§4, Theorem 4.3 and its backward-generator proof, PDF pp. 12–15 (journal pp. 429–432)."
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§III, equations (14)–(18), journal pp. 1718–1719 / PDF pp. 3–4."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Let $E$ be finite, let
$A=\max(\{0\}\cup\{\sum_j a_j(x):x\in E\})$, and assume
$a_j(x)=0$ whenever $x+\nu_j\notin E$. Extend every state outside $E$ as
absorbing, as in [[alg-explicit-poisson-tau-leaping]]. For $h\ge0$, let
$Q_h$ be the exact reaction-chain transition kernel and $K_h$ the Poisson
tau-leap transition kernel. If $g:\mathbb Z^d\to\mathbb R$ is bounded, then
$$\left|(K_hg)(x)-g(x)-h(Qg)(x)\right| \le2A^2h^2\|g\|_\infty,$$
$$\left|(Q_hg)(x)-g(x)-h(Qg)(x)\right| \le2A^2h^2\|g\|_\infty,$$
and hence
$$\|K_hg-Q_hg\|_\infty\le4A^2h^2\|g\|_\infty.$$
The bounds include the multi-reaction leap probability that can trigger the
invalid-state branch.

## Facts & Assumptions

**Given:** Finite reaction data [[def-reaction-network-propensity-system-and-generator]], the exact reaction chain law specified there, the tau-leap kernel [[alg-explicit-poisson-tau-leaping]], and a bounded $g$.

[F1] [[def-reaction-network-propensity-system-and-generator]]: a single channel-$j$ event from $x$ has destination $x+\nu_j$ and rate $a_j(x)$; forbidden one-event transitions have zero propensity.

[F2] [[lem-competing-exponential-race-for-reaction-channels]]: at state $x$, the next-event survival is $e^{-\lambda(x)t}$ and the channel-$j$ event density is $a_j(x)e^{-\lambda(x)t}$.

[F3] [[alg-explicit-poisson-tau-leaping]]: conditional channel counts are independent Poisson variables of means $a_j(x)h$ and any out-of-$E$ leap is absorbing.

[F4] [[def-scalar-poisson-count-law]]: the count mass is $e^{-\lambda}\lambda^k/k!$ for finite $\lambda$.

[F5] [[lem-poisson-count-law-normalization-and-moments]]: a Poisson count of mean $\lambda$ has mean $\lambda$ and factorial second moment $\lambda^2$.

[F6] [[thm-finite-state-gillespie-and-next-reaction-exactness]]: under Countable Choice and Dependent Choice, the finite-state reaction system has its specified exact path law and has finitely many events on finite horizons.

[A1] Countable Choice is assumed by [F2] for the exponential probability law. [[def-countable-choice]]

[A2] Dependent Choice is assumed by [F6] for the countable input streams. [[def-dependent-choice]]

## Proof

**Given:** Countable Choice, Dependent Choice, a step $h\ge0$, $A$ as in the Statement, and $G=\|g\|_\infty$.

If $E=\varnothing$, then $A=0$ and both kernels are the identity on $\mathbb Z^d$, so every asserted bound is zero. Otherwise fix $x\in E$.

1.1 For the Poisson leap, the probability of zero total counts is $e^{-\lambda(x)h}$. The probability that exactly channel $j$ fires once is $a_j(x)h e^{-\lambda(x)h}$, so its difference from $a_j(x)h$ is at most $a_j(x)\lambda(x)h^2$. Summing these errors over $j$ gives at most $\lambda(x)^2h^2\le A^2h^2$. If $N=\sum_jK_j$, independence and [F5] give $$\mathbb E[N(N-1)\mid x] =\sum_j(a_j(x)h)^2+2\sum_{i<j}a_i(x)a_j(x)h^2 =(\lambda(x)h)^2,$$ hence $\mathbb P(N\ge2\mid x)\le(\lambda(x)h)^2/2\le A^2h^2/2$. The zero-count probability differs from $1-\lambda(x)h$ by at most $A^2h^2/2$. A single allowed channel event remains in $E$ by [F1], so only the $N\ge2$ part can trigger the invalid-state branch. The zero-count, total single-count, and multiple-count contributions are bounded respectively by $GA^2h^2/2$, $GA^2h^2$, and $GA^2h^2/2$. Thus $|(K_hg)(x)-g(x)-h(Qg)(x)|\le2GA^2h^2$. [F1, F3, F4, F5, algebra]

1.2 For the exact chain, the no-event probability is $e^{-\lambda(x)h}$, which differs from $1-\lambda(x)h$ by at most $A^2h^2/2$. The probability of one channel-$j$ event and no later event is $$\int_0^h a_j(x)e^{-\lambda(x)s} e^{-\lambda(x+\nu_j)(h-s)}\,ds.$$ Its difference from $a_j(x)h$ is at most $a_j(x)Ah^2$, since all total rates on $E$ are at most $A$; summing over $j$ gives at most $\lambda(x)Ah^2\le A^2h^2$. The probability of two or more events is at most $A^2h^2/2$: conditional on a first event at time $s$, a later event has probability at most $A(h-s)$, and integration against the first-event rate bounded by $A$ gives the bound. The no-event, total single-event, and multiple-event contributions are bounded respectively by $GA^2h^2/2$, $GA^2h^2$, and $GA^2h^2/2$. Therefore $|(Q_hg)(x)-g(x)-h(Qg)(x)|\le2GA^2h^2$. [F1, F2, F6, A1, A2, algebra]

2.1 Subtract the two first-order expansions from steps 1.1 and 1.2 and use the triangle inequality. This gives $|(K_hg)(x)-(Q_hg)(x)|\le4GA^2h^2$ for every $x\in E$. Outside $E$ both kernels hold the state fixed, so the same bound holds there. Taking the supremum proves the final inequality. [step 1.1, step 1.2, algebra] ∎
