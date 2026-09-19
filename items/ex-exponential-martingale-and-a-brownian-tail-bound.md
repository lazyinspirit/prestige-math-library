---
id: ex-exponential-martingale-and-a-brownian-tail-bound
kind: example
title: "Exponential martingale Brownian tail bound"
status: draft
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, def-continuous-time-stopping-time, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-optional-sampling-for-bounded-stopping-times, def-elementary-predictable-brownian-integrand, def-continuous-time-filtration-and-all-pairs-martingale, def-continuity-real, thm-heine-cantor-r, thm-fatou-lemma, def-convergence-in-probability, def-partition-and-refinement, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, thm-two-sided-exit-probability-for-brownian-motion]
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
[[def-elementary-predictable-brownian-integrand]]. For a standard Brownian
motion $B$ and real $a>0$, $T>0$,
$$P\Bigl(\sup_{0\le t\le T}B_t\ge a\Bigr)\le e^{-a^2/(2T)} .$$

## Facts & Assumptions

**Given:** AC, (H), a standard Brownian motion $B$ equipped with its usual augmented natural filtration and with continuous paths on a full-measure event, real $a>0$, $T>0$, and $\theta>0$. [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F1] **Exponential martingale.** For every real $\theta$ the process $Z_t=\exp(\theta B_t-\theta^2t/2)$ is a positive continuous martingale with $EZ_t=1$ and $E[Z_t\mid\mathcal F_s]=Z_s$ almost surely for $s\le t$. [[cor-exponential-brownian-martingale]] [[def-brownian-motion]]
 
[F2] **Hitting time of a closed half-line is a stopping time.** Let $\tau_a:=\inf\{t\ge0:B_t\ge a\}$ (with $\inf\emptyset=+\infty$). On the full-measure continuity event one has, for every $t\ge0$, $$\Bigl\{\sup_{0\le u\le t}B_u\ge a\Bigr\}\cap C=\{\tau_a\le t\}\cap C=\Bigl(\bigcap_{m\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{B_q>a-1/m\}\Bigr)\cap C,$$ because a path that reaches height $\ge a$ at some time $\le t$ has rational times arbitrarily close with values above $a-1/m$, and conversely approximate rational hitting above $a-1/m$ for every $m$ produces a convergent rational sequence whose limit time $q^*\le t$ has $B_{q^*}\ge a$ by continuity. The events on the right lie in $\mathcal F_t$ when they are evaluated through rational times, and the usual augmentation contains the null exceptional set. Moreover, the two-sided exit law of [[thm-two-sided-exit-probability-for-brownian-motion]] tends to $1$ as the lower endpoint tends to $-\infty$, so $\tau_a<\infty$ almost surely. [[def-continuous-time-stopping-time]] [[def-brownian-motion]] [[def-continuity-real]]
 
[F3] **Discrete optional sampling and Fatou.** If a martingale is sampled on a deterministic finite grid, the sampled process is a discrete martingale, and for every grid stopping time bounded by the last grid point the expectation is unchanged; dyadic ceilings of a stopping time give such grid stopping times increasing to the original stopping time, and Fatou's lemma bounds the expectation of the almost-sure limit by the liminf of the expectations. [[thm-optional-sampling-for-bounded-stopping-times]] [[thm-fatou-lemma]] [[def-continuous-time-filtration-and-all-pairs-martingale]]
 
[F4] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 The hitting time is a stopping time: by the pathwise identity of [F2] the event $\{\tau_a\le t\}$ agrees, up to the null continuity event, with a countable combination of the events $\{B_q>a-1/m\}$ with $q\in\mathbb Q\cap[0,t]$, each of which lies in $\mathcal F_q\subseteq\mathcal F_t$; off the continuity event the difference is a null set and the usual augmentation contains it. Hence $\tau_a$ is a stopping time with $\{\tau_a\le T\}=\{\sup_{t\le T}B_t\ge a\}$ almost surely. [F2, given]
 
2.1 Dyadic sampling: for the grid of mesh $2^{-n}T$ in $[0,T]$, the sampled process $Z_{j2^{-n}T}$ is a discrete martingale by [F1]; the ceiling $\tau_a^{(n)}:=2^{-n}T\lceil2^n(\tau_a\wedge T)/T\rceil$ is a grid stopping time bounded by $T$, so by [F3] $EZ_{\tau_a^{(n)}}=EZ_0=1$. Since $\tau_a^{(n)}\downarrow\tau_a\wedge T$ and the path of $Z$ is continuous, $Z_{\tau_a^{(n)}}\to Z_{\tau_a\wedge T}$ almost surely; Fatou's lemma gives $EZ_{\tau_a\wedge T}\le\liminf_nEZ_{\tau_a^{(n)}}=1$. [F1, F3, step 1.1]
 
3.1 Markov bound: on the event $\{\tau_a\le T\}$, using continuity of the path at time $\tau_a\wedge T=\tau_a$, $Z_{\tau_a}=\exp(\theta a-\theta^2\tau_a/2)\ge\exp(\theta a-\theta^2T/2)$, so $$P(\tau_a\le T)e^{\theta a-\theta^2T/2}\le E\bigl[Z_{\tau_a\wedge T}1_{\{\tau_a\le T\}}\bigr]\le EZ_{\tau_a\wedge T}\le1$$ by step 2.1, that is $P(\sup_{t\le T}B_t\ge a)\le\exp(\theta^2T/2-\theta a)$ for every $\theta>0$. [F1, step 2.1]
 
4.1 Optimizing: the exponent $\theta^2T/2-\theta a$ is a convex quadratic in $\theta$ with minimum $-a^2/(2T)$ at $\theta=a/T>0$; substituting gives $P(\sup_{t\le T}B_t\ge a)\le e^{-a^2/(2T)}$. Boundary and consistency cases: for $a\le0$ the bound is trivial and the event has probability one; as $a\to0^+$ the bound tends to $1$, consistent with $P(\sup_{t\le T}B_t\ge0)=1$; as $T\to\infty$ or $a\to\infty$ the bound tends to $0$, and both limits are finite; the sampled expectations in step 2.1 are exactly $1$, so no uniform integrability of the stopped family is assumed; the martingale used has deterministic modulus $e^{\theta^2t/2}$ and is therefore integrable; and AC enters only through [F4]. [F1, F3, F4, step 3.1] ∎

## Source notes

Lawler, Sections 3.3 and 3.5, obtains exponential bounds from the exponential martingale. The proof above avoids unbounded optional stopping: it samples the martingale on dyadic grids, applies the discrete optional sampling theorem, and recovers the stopped expectation by Fatou's lemma, as the source's own boundary warning about unbounded stopping times requires.
