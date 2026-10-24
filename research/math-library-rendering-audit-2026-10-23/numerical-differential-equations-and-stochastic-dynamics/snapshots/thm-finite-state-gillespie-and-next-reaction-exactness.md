---
id: thm-finite-state-gillespie-and-next-reaction-exactness
kind: theorem
title: "Finite-state Gillespie and next-reaction methods have the specified CTMC law"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-random-element-and-real-random-variable
  - def-reaction-network-propensity-system-and-generator
  - alg-gillespie-direct-method-for-reaction-networks
  - alg-next-reaction-random-time-change-method
  - lem-competing-exponential-race-for-reaction-channels
  - lem-homogeneous-poisson-ordered-event-time-density
  - thm-countable-product-of-probability-spaces
  - thm-dominating-thinning-exactly-simulates-reaction-rates
  - thm-exponential-and-weibull-survival-laws
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Daniel T. Gillespie, Exact Stochastic Simulation of Coupled Chemical Reactions"
      url: "https://www.ma.imperial.ac.uk/~nsjones/gillespie_1977.pdf"
      locator: "§§II.B–III.C, joint reaction-event density and the direct-method event pair, journal pp. 2343–2346 / PDF pp. 4–7."
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §§7.1.1, 7.1.4–7.1.5 and 7.2.1–7.2.2, PDF pp. 183–197."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§§2.2 and 2.6, random time change and the direct/next-reaction simulation correspondence, PDF pp. 7 and 14."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice, and let $E$ be finite with a reaction system from [[def-reaction-network-propensity-system-and-generator]]. Fix an initial state $x_0\in E$. Supply the independent random streams required by [[alg-gillespie-direct-method-for-reaction-networks]] and [[alg-next-reaction-random-time-change-method]], and use unlimited reaction-event budgets. Define the reference marked process starting at $x_0$ recursively: at state $x$, if $\lambda(x)>0$, its next reaction time has law $\operatorname{Exp}(\lambda(x))$ and its channel is independent of that time with probabilities $a_j(x)/\lambda(x)$; if $\lambda(x)=0$, it remains at $x$. Then both algorithms have the law of this reference process on every finite horizon. With a finite event budget, each algorithm instead returns the corresponding reference-process prefix, stopped according to its stated horizon, absorption and budget rules. The process has generator operator
$$(Qf)(x)=\sum_{j:a_j(x)>0}a_j(x)\bigl(f(x+\nu_j)-f(x)\bigr),$$
absorbing states are handled exactly, and for $\Lambda=\max_{x\in E}\lambda(x)$ the expected total reaction count on $[0,T]$ is at most $\Lambda T$. A zero-increment channel is still a marked reaction event, but it contributes zero to the state generator.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a finite state space $E$, an initial state $x_0\in E$, a finite-channel reaction system, unlimited reaction-event budgets for full-horizon output, and the random input streams with the product laws specified in the algorithm definitions.

[F1] A propensity system has total rate $\lambda(x)$ and reaction generator operator $Qf(x)=\sum_{j:a_j(x)>0}a_j(x)(f(x+\nu_j)-f(x))$. ([[def-reaction-network-propensity-system-and-generator]])

[F2] Independent unit exponential clocks with rates $a_j(x)$ have first-event time $\operatorname{Exp}(\lambda(x))$, channel probability $a_j(x)/\lambda(x)$, and independent time and channel. ([[lem-competing-exponential-race-for-reaction-channels]])

[F3] The direct method uses one independent unit exponential and one unit-uniform input per event; the next-reaction method uses independent unit exponential increments in its channel clocks. ([[alg-gillespie-direct-method-for-reaction-networks]], [[alg-next-reaction-random-time-change-method]])

[F4] Independent unit exponential interarrival times give the ordered event-time density $e^{-T}$ on each finite-window ordered simplex, the rate-one case of the homogeneous Poisson event-time law. ([[lem-homogeneous-poisson-ordered-event-time-density]])

[F5] Under the declared Countable Choice and Dependent Choice assumptions, countable input streams with the required finite-coordinate product laws exist. ([[thm-countable-product-of-probability-spaces]])

[F6] For a finite state space the rate bound $\Lambda$ is finite; dominating thinning has accepted event count bounded by a rate-$\Lambda$ Poisson candidate count with expectation $\Lambda T$. With the time-constant rates used here, the standard cumulative mark intervals are independent of time and hence have product-measurable time-mark regions, satisfying the exact-thinning theorem's generalized measurability condition. ([[thm-dominating-thinning-exactly-simulates-reaction-rates]])

[A1] Countable Choice is used in the exponential and uniform probability laws. ([[def-countable-choice]])

[A2] Dependent Choice is used in the countable product probability-space construction for the input streams. ([[def-dependent-choice]])

## Proof

**Proof technique:** direct.

1.1 For one channel clock sequence with independent unit exponential gaps, the joint density of exactly $m$ ordered thresholds $0<s_1<\cdots<s_m\le u$ and no next threshold by $u$ is $\prod_{i=1}^m e^{-(s_i-s_{i-1})}\,e^{-(u-s_m)}=e^{-u},\qquad s_0=0.$ This agrees with [F4] at unit rate, so each $Y_j$ in the next-reaction construction is a unit-rate Poisson process on finite windows. The streams for distinct channels are independent by [F5], and after an event the unused sequence coordinates remain independent: partition on the finite index of the last used coordinate and use the finite-coordinate product law. [A1, A2, F4, F5, given, algebra]

1.2 At state $x$ with $\lambda(x)>0$, the direct method's waiting time $E/\lambda(x)$ has survival $e^{-\lambda(x)t}$ by [F2]. The disjoint cumulative intervals for $U$ have lengths $a_j(x)/\lambda(x)$, so channel $j$ is selected with that probability; because $U$ and $E$ are independent, the channel is independent of the waiting time. Thus the direct method uses exactly the reference event kernel. If $\lambda(x)=0$, it returns the absorbing path specified in the Statement. [A1, F1, F2, F3, given, algebra]

2.1 At a state $x$, the next-reaction clock of channel $j$ has residual internal threshold distributed as an independent $\operatorname{Exp}(1)$ variable. By [F2] their minimum has the same event-time and channel law as in step 1.2. After a reaction at elapsed time $\delta$, every nonwinning channel $k$ is conditioned only on its threshold exceeding $a_k(x)\delta$; memorylessness follows exactly from $\mathbb P(E_k>a_k(x)\delta+u\mid E_k>a_k(x)\delta)=e^{-u}.$ The residual thresholds remain independent because the conditioning events factor across independent clocks, and the fired channel receives a fresh independent exponential increment. Induction over the reaction count proves that every successive event kernel agrees with step 1.2, hence the full marked path law agrees. The threshold construction also gives $X_t=X_0+\sum_j\nu_jY_j(\int_0^t a_j(X_{s-})ds)$ by its definition. [A1, A2, F2, F3, F5, step 1.2, algebra]

3.1 Apply the bounded-envelope thinning theorem with the time-constant rates $a_j(t,x)=a_j(x)$ and envelope $\Lambda=\max_{x\in E}\lambda(x)$. It gives finitely many events almost surely and $\mathbb E N(T)\le\Lambda T$. For bounded $f$ and small $h$, the probability of no reaction is $e^{-\lambda(x)h}=1-\lambda(x)h+O(h^2)$; the probability of exactly one channel-$j$ reaction is $a_j(x)h+O(h^2)$ by its first-event density; and the probability of two or more is $O(h^2)$ by the candidate Poisson bound in [F6]. Therefore $\lim_{h\downarrow0}\frac{\mathbb E_x[f(X_h)]-f(x)}{h}=\sum_{j:a_j(x)>0}a_j(x)\bigl(f(x+\nu_j)-f(x)\bigr),$ which is the operator in [F1]. A zero-increment channel contributes zero to this expression even though its marked event is counted. [F1, F2, F6, step 1.2, step 2.1, given, algebra]

4.1 Steps 1.2 and 2.1 identify both algorithmic event kernels, starting at the fixed $x_0$, with the reference kernel; the finite event bound in step 3.1 makes the unlimited-budget comparison a full-horizon path-law equality. A firing at a fixed deterministic horizon has probability zero, since each successive event time has a density conditional on the preceding history; the countable union over event indices is still null. Thus the algorithms' endpoint branches do not alter the path-law conclusion. With a finite budget, the same event-kernel comparison holds up to the algorithm's stopping rule and gives exactly the stated prefix law. Step 3.1 computes the generator and expected event-count bound. [step 1.2, step 2.1, step 3.1, given] ∎
