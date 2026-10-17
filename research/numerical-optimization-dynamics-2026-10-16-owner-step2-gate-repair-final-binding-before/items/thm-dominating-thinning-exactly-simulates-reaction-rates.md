---
id: thm-dominating-thinning-exactly-simulates-reaction-rates
kind: theorem
title: "Dominating thinning has the prescribed reaction law"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-poisson-and-cox-point-process
  - def-reaction-network-propensity-system-and-generator
  - def-scalar-poisson-count-law
  - alg-dominating-thinning-for-time-varying-reaction-rates
  - lem-competing-exponential-race-for-reaction-channels
  - lem-homogeneous-poisson-ordered-event-time-density
  - lem-poisson-count-law-normalization-and-moments
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §§7.1.1 and 7.2.2, random time change and time-dependent intensity method, PDF pp. 183–186 and 196–197."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§§2.1–2.4, Poisson processes, time changes, and thinning, PDF pp. 5–12."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Let $E\subseteq\mathbb Z^d$ be finite or countable, with finitely many time-dependent propensities $a_j(t,x)$ on $[0,T]$ as in [[def-reaction-network-propensity-system-and-generator]]. Suppose a certified constant envelope $0\le\lambda(t,x):=\sum_j a_j(t,x)\le\Lambda<\infty$ holds for all $t\in[0,T]$ and $x\in E$. Then the dominating-thinning algorithm in [[alg-dominating-thinning-for-time-varying-reaction-rates]], with an unlimited candidate budget, has the following exact conditional law from time $t$ and state $x$:

$$\mathbb P(\text{no accepted reaction in }(t,t+u]\mid X_t=x,\mathcal F_t)=\exp\!\left(-\int_t^{t+u}\lambda(s,x)\,ds\right),\qquad 0\le u\le T-t,$$

and for every Borel $B\subseteq(t,T]$ and channel $j$,

$$\mathbb P(\text{first accepted reaction time lies in }B,\ J=j\mid X_t=x,\mathcal F_t)=\int_B a_j(s,x)\exp\!\left(-\int_t^s\lambda(v,x)\,dv\right)ds.$$

After a reaction, the same rule restarts at its new time and state. Candidate events on $[0,T]$ have a Poisson count of mean $\Lambda T$; accepted reactions are a subset, so there are finitely many accepted reactions almost surely and $\mathbb E N(T)\le\Lambda T$. The conclusion is conditional on the stated envelope; no law is asserted when it fails.

When $\Lambda>0$, the same two conditional-law conclusions hold if, at each fixed $(s,x)$, channel $j$ is accepted on a Borel mark set $D_j(s,x)\subseteq[0,1]$, provided these sets are pairwise disjoint, have Lebesgue measure $a_j(s,x)/\Lambda$, and for each fixed state $x$ the region
$$\{(s,u)\in[0,T]\times[0,1]:u\in D_j(s,x)\}$$
is measurable for $\mathcal B([0,T])\otimes\mathcal B([0,1])$. The standard cumulative intervals in the algorithm are one such choice: their endpoints are finite sums of the Borel time sections $a_k(\cdot,x)/\Lambda$, so their time-mark regions are product-measurable. If $\Lambda=0$, the step 5.1 constant-path case applies. This equivalent mark-set form is used by the minimum-intensity coupling construction.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a reaction propensity system, an independent stream of unit exponential variables and unit-interval uniform variables, and a certified envelope $\Lambda$.

[F1] The reaction network specifies admissible increments, finite channel rates, and the time-dependent rate sum $\lambda(t,x)$. ([[def-reaction-network-propensity-system-and-generator]])

[F2] The global envelope is an admissibility precondition for the algorithm. Its pointwise runtime guard reports `invalid-envelope` only if it encounters a candidate time and state where $\lambda(t,x)>\Lambda$; it does not verify a global certificate exhaustively. ([[alg-dominating-thinning-for-time-varying-reaction-rates]])

[F3] Under Countable Choice and Dependent Choice the countable random-input stream can be realized with the prescribed finite-coordinate product laws. ([[thm-countable-product-of-probability-spaces]])

[F4] The homogeneous Poisson process on $(0,T]$ with rate $\Lambda$ has finite total count and ordered event-time density $e^{-\Lambda T}\Lambda^m$ on $0<s_1<\cdots<s_m\le T$. ([[lem-homogeneous-poisson-ordered-event-time-density]])

[F5] A finite-intensity Poisson point process has the mixed-binomial construction: conditional on a Poisson total count, its points have the normalized intensity law. ([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]], [[def-poisson-and-cox-point-process]])

[F6] Nonnegative product-measurable functions may be integrated by sections (Tonelli), so the mark-region measure is the time integral of its mark lengths. The product-measurability hypothesis in the generalized mark-set clause supplies this condition for each fixed state. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F7] If $N^*(T)\sim\operatorname{Pois}(\Lambda T)$, then $\mathbb E N^*(T)=\Lambda T$. ([[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]])

[A1] Countable Choice is used in the exponential and unit-interval probability laws. ([[def-countable-choice]])

[A2] Dependent Choice is used in constructing the countable product probability space for the infinite stream of random inputs. ([[def-dependent-choice]])

## Proof

**Proof technique:** direct.

1.1 First assume $\Lambda>0$. If the candidate interarrival increments are $E_n/\Lambda$, then for exactly $m$ candidates at ordered times $0<s_1<\cdots<s_m\le T$, the product of the $m$ exponential gap densities and the final no-candidate survival factor is $\prod_{i=1}^m\Lambda e^{-\Lambda(s_i-s_{i-1})}\cdot e^{-\Lambda(T-s_m)}=e^{-\Lambda T}\Lambda^m,$ where $s_0=0$. This is the ordered-event density in [F4]. The independent uniform marks give the conditional product-uniform mark law, so [F5] identifies the finite marked candidate pattern with a Poisson point process of intensity $\Lambda\,ds\,du$ on $(0,T]\times[0,1]$. In particular $N^*(T)\sim\operatorname{Pois}(\Lambda T)$. [A1, A2, F3, F4, F5, given, algebra]

2.1 Fix a state $x$ and a time $t$ before the next accepted event. For $s\in(t,t+u]$ put $b(s)=\Lambda-\lambda(s,x)\ge0$. Conditional on $m$ ordered candidate times, the probability all marks are rejected is the product of their rejection fractions. Using the ordered candidate density from step 1.1 and Tonelli [F6], the probability of no accepted candidate is $e^{-\Lambda u}\sum_{m=0}^\infty\int_{t<s_1<\cdots<s_m\le t+u}\prod_{i=1}^m b(s_i)\,ds_1\cdots ds_m =e^{-\Lambda u}\sum_{m=0}^\infty\frac{(\int_t^{t+u}b(s)\,ds)^m}{m!} =e^{-\int_t^{t+u}\lambda(s,x)\,ds}.$ The middle identity holds because the symmetric product integrand has equal integrals on the $m!$ orderings of the cube; ties form a Lebesgue-null set. This proves the displayed survival law. [F4, F6, step 1.1, given, algebra]

3.1 Fix a channel $j$ and a Borel set $B\subseteq(t,T]$. Future candidate points after time $t$ are independent of the history through $t$; by translation of the ordered-time density in [F4], exactly $m$ candidates on $(t,T]$ have ordered-time density $e^{-\Lambda(T-t)}\Lambda^m$. For the first accepted candidate to occur at time $s\in B$ with mark in $D_j(s,x)$, all earlier candidates must be rejected, its mark must lie in a set of measure $a_j(s,x)/\Lambda$, and later candidates are unrestricted. For $k$ earlier rejected candidates, integration over their ordered times contributes $(\int_t^s b(v)\,dv)^k/k!$; for $\ell$ later unrestricted candidates, integration contributes $(\Lambda(T-s))^\ell/\ell!$. Summing the nonnegative series and using [F6], the first-event measure on $B$ is $e^{-\Lambda(T-t)}\int_B a_j(s,x)\left(\sum_{k=0}^\infty\frac{(\int_t^s b(v)\,dv)^k}{k!}\right)\left(\sum_{\ell=0}^\infty\frac{(\Lambda(T-s))^\ell}{\ell!}\right)ds =\int_B a_j(s,x)e^{-\int_t^s\lambda(v,x)\,dv}\,ds.$ This proves the channel-specific first-event law for arbitrary Borel rates and for disjoint mark sets of the specified measures whose time-mark regions are product-measurable; their locations within $[0,1]$ do not enter the calculation. The endpoint mark conventions differ only on a null set. [F2, F4, F6, step 2.1, algebra]

4.1 At an accepted candidate time the new state depends only on the past and that candidate's mark. If its candidate index is $K$, the event $\{K=n\}$ is determined by the first $n$ gap and mark coordinates; partitioning over finite $n$ shows that the coordinates after $K$ retain their prescribed product law. Thus the same two calculations restart at the new state and time. Since $N(T)\le N^*(T)$ pathwise, [F7] gives $\mathbb E N(T)\le\Lambda T$ and $N(T)<\infty$ almost surely. Repeating the event-kernel construction proves the full path law through $T$. [A1, A2, F3, F5, F7, step 2.1, step 3.1]

5.1 If $\Lambda=0$, the envelope forces every propensity to vanish everywhere, so the constant path is exact. If the global envelope hypothesis is false, this theorem asserts no path law; the algorithm returns `invalid-envelope` only if its pointwise guard encounters a violating candidate as specified in [F2]. Steps 1.1, 2.1, 3.1 and 4.1 establish the candidate law, both conditional event laws, the restart rule and the finite-count bound under the global envelope. [F1, F2, given, step 1.1, step 2.1, step 3.1, step 4.1] ∎
