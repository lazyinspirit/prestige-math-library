---
id: lem-bounded-rate-reaction-generator-dynkin-identity
kind: lemma
title: "Dynkin identity for a bounded-rate finite stopped reaction chain"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-reaction-network-propensity-system-and-generator
  - lem-competing-exponential-race-for-reaction-channels
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - thm-finite-state-gillespie-and-next-reaction-exactness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tiejun Li, Analysis of explicit tau-leaping schemes for simulating chemically reacting systems"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2015/mms_6_417_Li.pdf"
      locator: "§4, equations (4.3)–(4.7), Lemma 4.1, PDF pp. 12–13 (journal pp. 429–430)."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.2, generator specification for a finite-channel reaction network, PDF pp. 7–8."
---

## Statement

Assume Countable Choice and Dependent Choice. Let $D$ and $F$ be disjoint
finite sets of states, and let a finite-channel reaction chain move from a
state $x\in D$ by channel $j$ to $x+\nu_j\in D\cup F$ at rate $a_j(x)$.
Assume its total rate is at most $A<\infty$ on $D$, and make every state in
$F$ absorbing. Let $v:[0,T]\times(D\cup F)\to\mathbb R$ have a continuously
differentiable time section for each state, with $\partial_t v$ continuous
in time. Define
$$Qf(x)=\sum_j a_j(x)(f(x+\nu_j)-f(x))\quad(x\in D),\qquad Qf(x)=0\quad(x\in F).$$
Then, for the stopped chain $X$ and $0\le t\le T$,
$$\mathbb E[v(t,X_t)] = \mathbb E[v(0,X_0)] + \mathbb E\int_0^t(\partial_s v(s,X_s)+Qv(s,\cdot)(X_s))\,ds.$$
In particular, $D$ may be the finite set of lattice states inside a compact
stopping region, and $F$ the finite set of one-jump exit destinations.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, finite $D,F$, a finite-channel
reaction chain with bounded total rate on $D$, absorbing states on $F$, and a
time-differentiable $v$.

[F1] [[def-reaction-network-propensity-system-and-generator]]: a channel at
state $x$ makes the marked transition $x\mapsto x+\nu_j$ at rate $a_j(x)$;
its generator sums $a_j(x)(f(x+\nu_j)-f(x))$ over channels.

[F2] [[lem-competing-exponential-race-for-reaction-channels]]: at a fixed
state with total rate $\lambda$, the waiting time has survival
$e^{-\lambda t}$ and channel $j$ has event-time density
$a_j e^{-\lambda t}$; if $\lambda=0$, no event occurs.

[F3] [[thm-finite-state-gillespie-and-next-reaction-exactness]]: under
Countable Choice and Dependent Choice, a finite reaction system has the
specified exact CTMC path law, and its expected number of events on $[0,T]$
is at most $\Lambda T$ for $\Lambda=\max_x\lambda(x)$. In particular, it
has finitely many events on every finite horizon almost surely.

[A1] Countable Choice is assumed in [F2] for the exponential probability
law. [[def-countable-choice]]

[A2] Dependent Choice is assumed in [F3] for the countable product of
independent event inputs. [[def-dependent-choice]]

## Proof

**Given:** The finite stopped chain, Countable Choice, Dependent Choice, and
facts [F1]–[F3].

1.1 Uniformly over $x\in D\cup F$, the no-event probability in a time interval of length $\delta$ is $e^{-\lambda(x)\delta}$, where $\lambda(x)=0$ on $F$ and $\lambda(x)\le A$ on $D$. Its difference from $1-\lambda(x)\delta$ is at most $A^2\delta^2/2$. For a channel $j$ from $x\in D$, the probability that it fires once at time $r\in(0,\delta)$ and no later event occurs is $$\int_0^\delta a_j(x)e^{-\lambda(x)r} e^{-\lambda(x+\nu_j)(\delta-r)}\,dr.$$ Both rates in the exponent are at most $A$, so its difference from $a_j(x)\delta$ is at most $a_j(x)A\delta^2$. Summing over channels gives at most $\lambda(x)A\delta^2\le A^2\delta^2$. After the first event, the conditional probability of another before $\delta$ is at most $A(\delta-r)$; integrating against the first-event rate, at most $A$, shows that the probability of at least two events is at most $A^2\delta^2/2$. These estimates are uniform on the finite state set. [F1, F2, A1, algebra]

2.1 Since $D\cup F$ is finite and $\partial_t v$ is continuous, uniformly in $s$ and $x$, $$v(s+\delta,x)=v(s,x)+\delta\partial_s v(s,x)+o(\delta).$$ The zero-event probability is $1-\lambda(x)\delta+O(\delta^2)$; the single-channel probabilities are $a_j(x)\delta+O(\delta^2)$ by step 1.1; and the multiple-event probability is $O(\delta^2)$. In the zero-event case, the contribution is $v(s,x)+\delta(\partial_s v(s,x)-\lambda(x)v(s,x))+o(\delta)$. The one-event channel contributions are $\delta\sum_j a_j(x)v(s,x+\nu_j)+o(\delta)$, because the time change in $v(s+\delta,x+\nu_j)$ is multiplied by an $O(\delta)$ event probability. The multiple-event contribution is $O(\delta^2)$. Adding the cases, the order-$\delta$ terms are $$\delta\partial_s v(s,x)+\delta\sum_j a_j(x)(v(s,x+\nu_j)-v(s,x)),$$ with a uniform $o(\delta)$ remainder. This is $\delta(\partial_s v(s,x)+Qv(s,\cdot)(x))+o(\delta)$; for $x\in F$ the chain is fixed and $Q=0$. Multiple-event payoffs contribute $O(\delta^2)$ because $v$ is bounded on the finite set. [F1, step 1.1, given, algebra]

3.1 Sum the conditional identity in step 2.1 over a deterministic partition of $[0,t]$ and take expectations. The uniform $o(\delta)$ remainders sum to $o(1)$. By [F3] the chain has finitely many jumps almost surely on $[0,t]$; therefore $s\mapsto\partial_s v(s,X_s)+Qv(s,\cdot)(X_s)$ is bounded and piecewise continuous, so its Riemann sums converge pathwise. Boundedness and dominated convergence let expectations pass to the integral. The left side telescopes to $\mathbb E[v(t,X_t)]-\mathbb E[v(0,X_0)]$, proving the identity. [F3, A1, A2, step 2.1, algebra] ∎
