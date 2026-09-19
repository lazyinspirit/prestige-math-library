---
id: ex-brownian-hitting-probability-from-an-exponential-martingale
kind: example
title: "Hitting probabilities from an exponential martingale"
status: draft
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion-started-at-x, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, thm-two-sided-exit-probability-for-brownian-motion, thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity, def-continuous-time-stopping-time, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-optional-sampling-for-bounded-stopping-times, def-elementary-predictable-brownian-integrand, def-continuous-time-filtration-and-all-pairs-martingale, def-continuity-real, thm-heine-cantor-r, thm-dominated-convergence, def-convergence-in-probability, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.3 and 3.5"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $a,b>0$, let
$B^x=x+B$, let $\mu$ be real, and let
$X_t:=x+B_t+\mu t$ be the drifted Brownian motion started at $x\in(-a,b)$.
Let $\tau:=\inf\{t\ge0:X_t\notin(-a,b)\}$ be its first exit time from
$(-a,b)$. Then for $\mu\ne0$
$$P_x\bigl(X\text{ exits }(-a,b)\text{ at }b\bigr) =\frac{1-e^{-2\mu(x+a)}}{1-e^{-2\mu(a+b)}},$$
and for $\mu=0$ the probability is $(x+a)/(a+b)$.

## Facts & Assumptions

**Given:** AC, (H), $a,b>0$, a start $x\in(-a,b)$, a real $\mu\ne0$, a standard Brownian motion $B$ equipped with its usual augmented natural filtration, the drifted process $X_t=x+B_t+\mu t$, and the exit time $\tau$. [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F1] **Exponential martingale.** For every real $\theta$, $\exp(\theta B_t-\theta^2t/2)$ is a positive continuous martingale with $EZ_t=1$; consequently $M_t:=\exp(-2\mu X_t)=e^{-2\mu x}\exp(-2\mu B_t-2\mu^2t)$ is a positive continuous martingale equal to a positive constant times the exponential martingale with parameter $\theta=-2\mu$, so $EM_t=e^{-2\mu x}$ and $E[M_t\mid\mathcal F_s]=M_s$. [[cor-exponential-brownian-martingale]] [[def-brownian-motion-started-at-x]] [[def-brownian-motion]]
 
[F2] **The exit time is a stopping time.** The set $C=(-\infty,-a]\cup[b,\infty)$ is closed. On the full-measure continuity event, $\{\tau\le t\}=\bigcap_{m\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{\operatorname{dist}(X_q,C)<1/m\}$ up to a null set: a path that has left the interval by time $t$ has rational times arbitrarily close to the exit time with distance $<1/m$, while approximate rational contact for every $m$ produces a convergent rational sequence whose limit time $q^*\le t$ has $X_{q^*}\in C$ by continuity and closedness; each event on the right lies in $\mathcal F_t$, and the null exceptional set is contained in the usual augmentation. [[def-continuous-time-stopping-time]] [[def-continuity-real]] [[thm-heine-cantor-r]] [[def-brownian-motion]]
 
[F3] **Finiteness of $\tau$.** By the law of the iterated logarithm $B_t/t\to0$ almost surely as $t\to\infty$, so $X_t/t\to\mu\ne0$ and hence $X_t\to+\infty$ or $-\infty$ according to the sign of $\mu$; since $X$ has continuous paths starting inside $(-a,b)$, it must cross the boundary, so $\tau<\infty$ almost surely. [[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]] [[def-continuity-real]]
 
[F4] **Boundedness on the exit interval and discrete optional sampling.** For every $\omega$ and every $t$ one has $X_{t\wedge\tau}\in[-a,b]$, so $M_{t\wedge\tau}$ lies between the two numbers $e^{-2\mu b}$ and $e^{2\mu a}$ (in the appropriate order), uniformly in $t$; and for the dyadic ceilings $\tau_n:=2^{-n}T\lceil2^n(\tau\wedge T)/T\rceil$ of $\tau\wedge T$ the sampled martingale satisfies $EM_{\tau_n}=EM_0=e^{-2\mu x}$ by discrete optional sampling, with $\tau_n\downarrow\tau\wedge T$ and $M_{\tau_n}\to M_{\tau\wedge T}$ almost surely by continuity. [[thm-optional-sampling-for-bounded-stopping-times]] [[def-continuous-time-filtration-and-all-pairs-martingale]] [[def-continuity-real]] [[def-elementary-predictable-brownian-integrand]]
 
[F5] **Domination.** The bounded family $(M_{\tau_n})$ is uniformly integrable, so expectations pass to the almost-sure limit. [[thm-dominated-convergence]] [[def-convergence-in-probability]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 Stopping identity: by [F4] and [F5], $E_xM_{\tau\wedge T}=\lim_nEM_{\tau_n}=M_0=e^{-2\mu x}$ for every $T$; since $\tau<\infty$ almost surely by [F3], letting $T\to\infty$ and using boundedness of $M_{\tau}$ (it equals $M$ at the boundary value $-a$ or $b$) gives $E_xM_\tau=e^{-2\mu x}$. [F1, F3, F4, F5]
 
2.1 The value at the exit: $X_\tau\in\{-a,b\}$ by continuity and the definition of $\tau$ as the first exit, so $M_\tau=e^{-2\mu X_\tau}$ equals $e^{2\mu a}$ on $\{X_\tau=-a\}$ and $e^{-2\mu b}$ on $\{X_\tau=b\}$. Writing $p:=P_x(X_\tau=b)$, the identity of step 1.1 becomes $e^{-2\mu x}=p\,e^{-2\mu b}+(1-p)e^{2\mu a}$. [F2, step 1.1]
 
3.1 Solving: $p=\dfrac{e^{-2\mu x}-e^{2\mu a}}{e^{-2\mu b}-e^{2\mu a}} =\dfrac{1-e^{-2\mu(x+a)}}{1-e^{-2\mu(a+b)}}$, multiplying numerator and denominator by $e^{-2\mu a}$; the denominator is nonzero because $\mu\ne0$ and $a+b>0$ make the two endpoint exponentials distinct. [step 2.1]
 
4.1 The case $\mu=0$: then $X=B^x$ is Brownian motion started at $x$, and [[thm-two-sided-exit-probability-for-brownian-motion]] gives $P_x(X_\tau=b)=(x+a)/(a+b)$ directly; this agrees with the limit of the formula of step 3.1 as $\mu\to0$. [F1, given]
 
5.1 Boundary and consistency cases: for $x\to-a$ the probability tends to $0$ and for $x\to b$ it tends to $1$, consistent with the starting point being at the boundary; for $\mu\to0$ step 3.1 has a removable singularity with limit $(x+a)/(a+b)$; for $\mu<0$ the same computation applies with the sign carried through; the stopping time is not bounded, and the passage to the limit was justified by the uniform boundedness of $M_{\tau\wedge t}$ from [F4] rather than by assuming uniform integrability of an unbounded family; the exit time is finite almost surely by the law of the iterated logarithm; and AC enters only through [F6]. [F3, F4, F6, step 3.1, step 4.1] ∎

## Source notes

Lawler, Sections 3.3 and 3.5, computes biased exit probabilities from the exponential martingale. The proof above verifies the stopping-time property of the closed-set exit time through rational approximations, uses boundedness on the exit interval for the passage to the limit, and treats $\mu=0$ through the two-sided exit theorem rather than through the singular limit of the formula.
