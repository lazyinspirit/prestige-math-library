---
id: thm-brownian-zero-set-has-no-isolated-points
kind: theorem
title: "The Brownian zero set has no isolated points"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, def-continuous-time-stopping-time, thm-strong-markov-property-of-brownian-motion, def-wiener-measure-on-continuous-path-space, cor-law-of-the-brownian-maximum, lem-rat-embeds-dense, lem-probability-measure-basic-identities, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Theorem 6.39, printed p. 71"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let B be standard Brownian motion and let Z be the zero set of the everywhere-continuous, zero-start representative X fixed in [[def-brownian-zero-set]]. On one measurable event of probability one, every t in Z is a limit point of $Z\setminus\{t\}$. Thus Z is closed and has no isolated points in [0,infinity). On the supplied common full event, this assertion also holds for the original B path.

## Facts & Assumptions

**Given:** AC, B, its normalized representative X, and its zero set Z.

[F1] X has measurable coordinates, every path is continuous and starts at zero, and X agrees with B on a measurable full event. Thus its finite-dimensional distributions, including the independent Gaussian increments, agree with those of B and X itself is a standard Brownian motion. Z is closed and contains zero. [[def-brownian-zero-set]] [[def-brownian-motion]]

[F2] Form the raw natural filtration and usual augmentation of X itself. This augmentation contains the raw filtration of X. The proof applies the strong Markov theorem directly to X and requires no identification with the filtration of the original B. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F3] Stopping times use the non-strict sublevel test. For a bounded stopping time S of the usual augmentation of a Brownian motion X and a bounded product-measurable functional G, the conditional future identity is $E[G((X_{S+r})_{r\ge0})\mid\mathcal G_S]=\Psi(X_S)$, where $\Psi(x)=\int G(x+w)\mu(dw)$ and mu is Wiener measure. Since X is everywhere continuous and S finite, the theorem's measurable random-time version equals the literal evaluation everywhere. [[def-continuous-time-stopping-time]] [[thm-strong-markov-property-of-brownian-motion]] [[def-wiener-measure-on-continuous-path-space]]

[F4] The maximum of a continuous zero-start Brownian motion on [0,h], h>0, has distribution $P(M_h\le x)=2\Phi(x/\sqrt h)-1$ for x>=0; in particular P(M_h=0)=0. The process -X is also Brownian by negating its independent centered Gaussian increments. [[cor-law-of-the-brownian-maximum]] [[def-brownian-motion]]

[F5] Rational density and countable subadditivity for null events. [[lem-rat-embeds-dense]] [[lem-probability-measure-basic-identities]]

[F6] Conditional-expectation equalities are almost-sure equalities of versions characterized by event integrals. Full AC is inherited from the Brownian, completion and conditional-expectation interfaces. [[def-conditional-expectation-as-an-ae-class]] [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Apply [F4] to X and -X on each interval [0,1/m], m>=1. Off a countable union of null events [F5], X has both a positive and a negative value on each such interval. Neither value is at zero. The intermediate value theorem between those two times gives a zero at a positive time <=1/m. Therefore positive zeros accumulate at zero. The same argument applies to the coordinate process under Wiener measure, which is Brownian by [F3]. [F1, F3, F4, F5]

1.2 Fix a nonnegative rational q and define $\tau_q=\inf\{s\ge q:X_s=0\}$, with infimum of the empty set infinity. For t<q its sublevel event is empty. For t>=q, compactness and closedness give $\{\tau_q\le t\}=\{\min_{r\in[q,t]}|X_r|=0\}$, which equals the event that the infimum over $(\mathbb Q\cap[q,t])\cup\{q,t\}$ is zero. At t=q this is the singleton test X_q=0. Every coordinate used has time <=t, so the event belongs to the raw filtration of X and thus to its usual augmentation [F2]. This proves that tau_q is a stopping time. If tau_q is finite, closedness gives X_{tau_q}=0. No recurrence or finiteness assertion is needed. [F1, F2, F3, F5]

2.1 Define $G(w)=1_{\bigcap_{m\ge1}\bigcup_{k>m}\{\inf_{r\in\mathbb Q\cap[1/k,1/m]}|w(r)|=0\}}$. This is product measurable, since only countably many coordinates and set operations occur. For continuous w the compact infimum is a minimum and equals the rational infimum, so G(w)=1 precisely when positive zeros accumulate at zero. Step 1.1 shows $\Psi(0)=\int G(w)\mu(dw)=1$. For any nonzero x, continuity of w at zero and w(0)=0 exclude zeros of x+w sufficiently near zero; hence $\Psi(x)=0$. These assertions hold mu-almost surely even if a realization of Wiener measure contains nonzero-start null paths. [F1, F3, F5, step 1.1]

3.1 For integers N>=1 put S=tau_q wedge N. It is a bounded stopping time: its sublevel event is {tau_q<=t} for t<N and the whole space for t>=N. By [F3] and step 2.1, $E[G((X_{S+r})_{r\ge0})\mid\mathcal G_S]=1_{\{X_S=0\}}$. The event {X_S=0} is in the stopped sigma-algebra by [F3]. Integrating the nonnegative variable $1_{\{X_S=0\}}(1-G((X_{S+r})))$ over the whole space gives zero by the conditional event-integral identity [F6]; since this variable is an indicator, the event it indicates is null. Thus, almost surely on {X_S=0}, positive zeros of the post-S path accumulate at zero. On {tau_q<=N} step 1.2 gives S=tau_q and X_S=0. We conclude that, outside a measurable null event, whenever tau_q<=N the zero tau_q is approached by other zeros from the right. [F3, F6, step 2.1, step 1.2]

4.1 Take the intersection of the full event in step 1.1 with the full events in step 3.1 over the countable set of nonnegative rationals q and positive integers N. It is a measurable full event by [F5]. On it, every finite tau_q is approached by other zeros from the right, since some N is larger than tau_q. [F5, step 1.1, step 3.1]

5.1 On that event zero is not isolated by step 1.1. If t>0 were an isolated zero, some delta with 0<delta<t would satisfy $Z\cap(t-\delta,t+\delta)=\{t\}$. By rational density choose q in (t-delta,t). There are no zeros in [q,t), and t is a zero, so tau_q=t. Step 4.1 supplies other zeros in (t,t+delta), a contradiction. Hence every zero is a limit point of the other zeros. Z is already closed by [F1]. [F1, F5, step 1.1, step 4.1]

6.1 The empty hitting set and tau_q=infinity cause no problem because only bounded S are used, and the conclusion about tau_q is conditional on its finiteness. The time-zero endpoint has its own full event. The only intersections of full events are countable; no rational time is claimed itself to be a positive Brownian zero. On the common agreement event in [F1] the original B and X have identical zero sets, so the original path assertion follows there. AC is inherited as in [F6]. In particular, the proof never places an arbitrary normalization null event in the original Brownian filtration. [F1, F6, step 1.2, step 4.1, step 5.1] ∎



## Source notes

The standard rational-next-zero and strong-Markov architecture is described in Durrett, Section 7.4.1, and Sousi, Theorem 6.39. Here immediate zero accumulation follows from the maximum law applied to both signs. Using tau_q wedge N removes the need for a recurrence argument. The auxiliary filtration is the usual augmentation of the normalized Brownian motion itself.
