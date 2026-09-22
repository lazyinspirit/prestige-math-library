---
id: ex-brownian-hitting-probability-from-an-exponential-martingale
kind: example
title: "Hitting probabilities from an exponential martingale"
status: draft
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion-started-at-x, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, thm-two-sided-exit-probability-for-brownian-motion, thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity, def-continuous-time-stopping-time, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-optional-sampling-for-bounded-stopping-times, thm-uniform-integrability-of-conditional-expectations-of-one-variable, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, def-elementary-predictable-brownian-integrand, def-continuous-time-filtration-and-all-pairs-martingale, def-continuity-real, thm-heine-cantor-r, thm-dominated-convergence, def-convergence-in-probability, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
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
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Sections 7.3 and 7.5"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $a,b>0$, let $Z$ be
the coordinate process under the canonical shifted Brownian law $P_x$ on
continuous path space, let $\mu$ be real, and let
$X_t:=Z_t+\mu t$ for $x\in(-a,b)$.
Let $\tau:=\inf\{t\ge0:X_t\notin(-a,b)\}$ be its first exit time from
$(-a,b)$. Then for $\mu\ne0$
$$P_x\bigl(X\text{ exits }(-a,b)\text{ at }b\bigr) =\frac{1-e^{-2\mu(x+a)}}{1-e^{-2\mu(a+b)}},$$
and for $\mu=0$ the probability is $(x+a)/(a+b)$.

## Facts & Assumptions

**Given:** AC, (H), $a,b>0$, a start $x\in(-a,b)$, a real $\mu\ne0$, the continuous coordinate process $Z$ under $P_x$ equipped with its usual augmented natural filtration, the drifted process $X_t=Z_t+\mu t$, and the exit time $\tau$. [[def-brownian-motion-started-at-x]] [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F1] **Exponential martingale.** Under $P_x$, $W_t:=Z_t-x$ is a standard Brownian motion. Consequently $M_t:=\exp(-2\mu X_t)=e^{-2\mu x}\exp(-2\mu W_t-2\mu^2t)$ is a positive continuous martingale, so $E_xM_t=e^{-2\mu x}$ and $E_x[M_t\mid\mathcal F_s]=M_s$. [[cor-exponential-brownian-martingale]] [[def-brownian-motion-started-at-x]] [[def-brownian-motion]]
 
[F2] **The exit time is a stopping time.** The set $C=(-\infty,-a]\cup[b,\infty)$ is closed, and every canonical path of $X$ is continuous. Hence $\{\tau\le t\}=\bigcap_{m\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{\operatorname{dist}(X_q,C)<1/m\}$, which belongs to the coordinate filtration at time $t$; thus $\tau$ is a stopping time. [[def-continuous-time-stopping-time]] [[def-continuity-real]] [[def-brownian-motion-started-at-x]]
 
[F3] **Finiteness of $\tau$.** By the law of the iterated logarithm $(Z_t-x)/t\to0$ almost surely, so $X_t/t\to\mu\ne0$ and $X_t\to+\infty$ or $-\infty$ according to the sign of $\mu$. Continuity forces a boundary crossing, so $\tau<\infty$ almost surely. [[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]] [[def-continuity-real]]
 
[F4] **Finite-grid sampling.** The restriction of an all-pairs continuous martingale to a finite deterministic grid is a discrete martingale, so discrete optional sampling applies to bounded grid-valued stopping indices. Conditional expectations of one fixed integrable variable are uniformly integrable, and uniform integrability plus convergence in probability gives convergence in $L^1$. [[thm-optional-sampling-for-bounded-stopping-times]] [[thm-uniform-integrability-of-conditional-expectations-of-one-variable]] [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]] [[def-continuous-time-filtration-and-all-pairs-martingale]] [[def-convergence-in-probability]]
 
[F5] **Domination.** On the probability-one event $Z_0=x$, continuity gives $X_{\tau\wedge T}\in[-a,b]$ for every $T>0$. Thus $0<M_{\tau\wedge T}\le K:=\max(e^{2\mu a},e^{-2\mu b})$ simultaneously for all $T$. This almost-sure deterministic bound suffices for dominated convergence as $T\to\infty$. [[thm-dominated-convergence]]
 
[F6] **AC bookkeeping.** Full AC supplies the conditional-expectation interface and the inherited choice requirements of the Brownian and LIL suppliers. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 Stopping identity at a bounded continuous time: fix $T>0$, put $\rho=\tau\wedge T$, and for $n\ge1$ round $\rho$ upward to the grid $\{jT2^{-n}:0\le j\le2^n\}$, obtaining $\rho_n$. At a grid point $u<T$, $\{\rho_n\le u\}=\{\rho\le u\}\in\mathcal F_u$, so $\rho_n$ is a bounded stopping index for the sampled discrete martingale. Discrete optional sampling gives $E_xM_{\rho_n}=E_xM_0=e^{-2\mu x}$. It also identifies $M_{\rho_n}$ as a conditional expectation of the fixed integrable variable $M_T$ at the grid stopped sigma-algebra, so [F4] makes $(M_{\rho_n})_n$ uniformly integrable. Continuity gives $M_{\rho_n}\to M_\rho$ almost surely, hence in probability; [F4] upgrades this to $L^1$, proving $E_xM_{\tau\wedge T}=e^{-2\mu x}$. This uses the discrete theorem only on finite grids and proves the continuous bounded-time passage explicitly. [F1, F2, F4]

2.1 Define $X_\tau$ by evaluation on $\{\tau<\infty\}$ and as $0$ otherwise, and define $M_\tau=e^{-2\mu X_\tau}$. These are measurable: bounded-time evaluations are limits of the finite-grid evaluations in step 1.1, and the finite-exit value is their eventual value as integer horizons increase. Since $\tau<\infty$ almost surely by [F3], $M_{\tau\wedge T}\to M_\tau$ as $T\to\infty$; the deterministic bound in [F5] gives $E_xM_\tau=e^{-2\mu x}$ by dominated convergence. [F1, F3, F5, step 1.1]
 
3.1 The value at the exit: $X_\tau\in\{-a,b\}$ almost surely by continuity and the definition of $\tau$ as the first exit, so $M_\tau=e^{-2\mu X_\tau}$ equals $e^{2\mu a}$ on $\{X_\tau=-a\}$ and $e^{-2\mu b}$ on $\{X_\tau=b\}$. Writing $p:=P_x(X_\tau=b)$, the identity of step 2.1 becomes $e^{-2\mu x}=p\,e^{-2\mu b}+(1-p)e^{2\mu a}$. [F2, step 2.1]
 
4.1 Solving: $p=\dfrac{e^{-2\mu x}-e^{2\mu a}}{e^{-2\mu b}-e^{2\mu a}} =\dfrac{1-e^{-2\mu(x+a)}}{1-e^{-2\mu(a+b)}}$, multiplying numerator and denominator by $e^{-2\mu a}$; the denominator is nonzero because $\mu\ne0$ and $a+b>0$ make the two endpoint exponentials distinct. [step 3.1]
 
5.1 The case $\mu=0$: then $X=Z$ is Brownian motion started at $x$, and [[thm-two-sided-exit-probability-for-brownian-motion]] gives $P_x(X_\tau=b)=(x+a)/(a+b)$ directly; this agrees with the limit of the formula of step 4.1 as $\mu\to0$. [F1, given]
 
6.1 Boundary and consistency cases: for $x\to-a$ the probability tends to $0$ and for $x\to b$ it tends to $1$, consistent with the starting point being at the boundary; for $\mu\to0$ step 4.1 has a removable singularity with limit $(x+a)/(a+b)$; for $\mu<0$ the same computation applies with the sign carried through; the stopping time is not bounded, and the passage to the limit was justified by the uniform boundedness of $M_{\tau\wedge t}$ from [F5] rather than by assuming uniform integrability of an unbounded family; the exit time is finite almost surely by the law of the iterated logarithm; and AC supplies the conditional-expectation interface and the inherited Brownian and LIL choice requirements, as declared in the Given hypotheses. [F3, F5, F6, step 4.1, step 5.1] ∎

## Source notes

Durrett, Section 7.5, Theorem 7.5.6, proves the exponential Brownian martingale by Gaussian conditioning. The finite-grid conditional-expectation and uniform-integrability suppliers cited in [F4] justify the bounded-time passage here; the drifted exit formula is then the explicit two-point calculation in steps 3.1–4.1. The proof above verifies the stopping-time property of the closed-set exit time through rational approximations, uses boundedness on the exit interval for the passage to the limit, and treats $\mu=0$ through the two-sided exit theorem rather than through the singular limit of the formula.
