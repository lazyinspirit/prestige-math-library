---
id: thm-countable-state-reaction-networks-lyapunov-nonexplosion
kind: theorem
title: "A proper Lyapunov bound prevents reaction-network explosion"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-countable-choice
  - def-dependent-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-random-element-and-real-random-variable
  - def-reaction-network-propensity-system-and-generator
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 6, §6.2, Proposition 6.2.2 and Example 6.2.3; Chapter 7, §7.1.5, PDF pp. 154–157 and 192–193."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.2, random time-change construction and the explicit explosive example, PDF pp. 7–8."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Let $E\subseteq\mathbb Z^d$ be countable and let a finite-channel system be as in [[def-reaction-network-propensity-system-and-generator]]. For an initial state $x_0\in E$, construct its minimal reaction process recursively: at state $x$, wait an exponential time with parameter $\lambda(x)$, choose channel $j$ with probability $a_j(x)/\lambda(x)$, and move to $x+\nu_j$; if $\lambda(x)=0$, remain at $x$ forever. Use an independent stream of these exponential and uniform random inputs, whose countable product law exists by Countable Choice and Dependent Choice.

For $V:E\to[1,\infty)$, call $V$ **proper** when $\{x:V(x)\le n\}$ is finite for every integer $n\ge1$. For this possibly unbounded $V$, define the finite local expression
$$(QV)(x):=\sum_{j:a_j(x)>0}a_j(x)\bigl(V(x+\nu_j)-V(x)\bigr);$$
this does not assert that $V$ belongs to the bounded-function domain of the generator in [F1]. Suppose $QV\le cV$ for a constant $c\ge0$. Define $T_m$ as the time of the $m$th reaction event, with $T_m=\infty$ if fewer than $m$ events occur. Then the explosion time $\tau_\infty:=\lim_{m\to\infty}T_m$ satisfies $\mathbb P_{x_0}(\tau_\infty=\infty)=1$. No full Axiom of Choice is used.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a countable reaction network, a deterministic initial state $x_0$, the independent random input stream, a proper $V\ge1$, and $QV\le cV$.

[F1] A reaction system has finitely many channels, finite total rate at each state, admissible poststates, and generator operator $Qf(x)=\sum_{j:a_j(x)>0}a_j(x)(f(x+\nu_j)-f(x))$ for bounded $f$; for the stated $V$, the theorem uses that same finite sum as a local expression. ([[def-reaction-network-propensity-system-and-generator]])

[F2] Unit exponential waiting times have density $e^{-t}$ on $t>0$, survival $e^{-t}$, and rescaling by $\lambda>0$ gives the exponential holding law of parameter $\lambda$. ([[thm-exponential-and-weibull-survival-laws]])

[F3] Under Countable Choice and Dependent Choice, a countable sequence of probability spaces has a probability product with the required finite-coordinate product marginals; normalized Lebesgue measure supplies the uniform coordinates, and the coordinate laws are random-element laws. ([[thm-countable-product-of-probability-spaces]], [[def-independent-random-elements]], [[def-law-or-distribution-of-a-random-element]], [[def-random-element-and-real-random-variable]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] Expectation is integration against the probability measure, is linear on integrable variables, and preserves almost-sure order. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]])

[A1] Countable Choice is used only in the stated exponential and probability-product existence interfaces. ([[def-countable-choice]])

[A2] Dependent Choice is used only in the countable-product probability-space construction. ([[def-dependent-choice]])

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge\max\{1,V(x_0)\}$ and set $K_n=\{x\in E:V(x)\le n\}$. This is finite by properness. The set $D_n=\{x+\nu_j:x\in K_n,\ a_j(x)>0,\ 1\le j\le R\}\setminus K_n$ of one-reaction exit states is finite, and $F_n=K_n\cup D_n$ is finite. The rate bound $M_n:=\max_{x\in K_n}\lambda(x)$ is therefore finite. For fixed ordered channel labels $j_1,\ldots,j_m$, the density of event times $0<t_1<\cdots<t_m\le T$ before the first exit is the product of the successive channel rates and exponential no-event factors. Summing over channel labels bounds this density by $M_n^m$, since at each event the sum of active channel rates is at most $M_n$. The ordered simplex has volume $T^m/m!$, so the probability of at least $m$ events before exit by $T$ is at most $(M_nT)^m/m!$, which tends to zero. Thus infinitely many jumps cannot occur in finite time while the process remains in $K_n$. [A1, A2, F1, F2, F3, given, construct]

2.1 Stop the process at $\tau_n:=\inf\{t\ge0:X_t\notin K_n\}$. The stopped path takes values in the finite set $F_n$ and is frozen after exit. Let $C_n=\max_{y\in F_n}V(y)$. Conditional on the reaction history through time $s$, partition on the finite vector of last-used stream indices; on each part [F3] gives independence of all unused coordinates. If $s$ falls within a holding interval, the residual exponential wait has the same law because $e^{-\lambda(w+u)}/e^{-\lambda w}=e^{-\lambda u}$. Thus for $x=X_s\in K_n$, the density of one channel-$j$ event at elapsed time $u$ and no earlier event is $a_j(x)e^{-\lambda(x)u}$. The probability of at least two events within $h$ is at most $(M_nh)^2/2$ by integrating the summed first-two-event density, bounded by $M_n^2$, over the ordered two-time simplex. Since $V\le C_n$ on $F_n$, the first-event term differs from $h(QV)(x)$ by at most $C_nM_n^2h^2/2$, using $|1-e^{-z}|\le z$ for $z\ge0$; the multiple-event remainder is bounded by $2C_n(M_nh)^2/2$. Thus, uniformly over $x\in K_n$, $\mathbb E[V(X_{(s+h)\wedge\tau_n})-V(X_{s\wedge\tau_n})\mid\mathcal F_s]=h\,1_{\{s<\tau_n\}}(QV)(X_s)+O(h^2).$ Summing this identity on a uniform partition of $[0,t]$ and letting the mesh tend to zero gives $\mathbb E[V(X_{t\wedge\tau_n})]=V(x_0)+\mathbb E\int_0^{t\wedge\tau_n}(QV)(X_s)\,ds.$ The error sum is $O(th)$; the Riemann sums converge because the stopped path has finitely many jumps by step 1.1 and $QV$ is bounded on $K_n$. [F1, F2, F3, step 1.1, given, algebra]

3.1 Set $g_n(t)=\mathbb E[V(X_{t\wedge\tau_n})]$. From step 2.1, $QV\le cV$, and $V\ge1$, we obtain $g_n(t)\le V(x_0)+c\int_0^t g_n(s)\,ds.$ Here $g_n$ is bounded on each finite interval because $X_{t\wedge\tau_n}\in F_n$. Iterating the integral inequality $m$ times bounds it by $V(x_0)\sum_{k=0}^{m-1}(ct)^k/k!+C_n(ct)^m/m!$; the last term tends to zero and the sum tends to $V(x_0)e^{ct}$. Hence $g_n(t)\le V(x_0)e^{ct}$. [F4, step 2.1, given, algebra]

4.1 On $\{\tau_n\le T\}$ the exit state satisfies $V(X_{\tau_n})>n$, so $n\,\mathbb P(\tau_n\le T)\le g_n(T)\le V(x_0)e^{cT}$. [F4, step 3.1, given, algebra]

5.1 Fix any finite $T>0$. If $\tau_\infty\le T$ but $\tau_n>T$ for some integer $n\ge\max\{1,V(x_0)\}$, infinitely many events occur in finite time while the process remains in $K_n$, an event of probability zero by step 1.1. A countable union over such $n$ is still null, so outside it explosion by $T$ forces $\tau_n\le T$ for every sufficiently large integer $n$. Step 4.1 gives $\mathbb P(\tau_\infty\le T)\le V(x_0)e^{cT}/n$ for arbitrarily large $n$, hence this probability is zero. Taking integer $T\ge1$ proves $\mathbb P(\tau_\infty=\infty)=1$. The argument uses Countable Choice and Dependent Choice only as declared in [A1] and [A2]; it uses no Axiom of Choice. [A1, A2, F3, step 1.1, step 4.1, algebra] ∎