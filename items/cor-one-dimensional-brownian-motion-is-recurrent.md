---
id: cor-one-dimensional-brownian-motion-is-recurrent
kind: corollary
title: "One-dimensional Brownian motion is recurrent"
status: draft
origin: pipeline
deps: [thm-brownian-future-path-markov-property, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, lem-rat-embeds-dense, lem-probability-measure-basic-identities, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.7"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice and let $B$ be a standard Brownian motion
[[def-brownian-motion]]. Then almost surely the set
$\{t\ge0:B_t\in I\}$ is unbounded for every nonempty open interval
$I\subseteq\mathbb R$; equivalently, almost surely the path visits every
neighbourhood of every real point at arbitrarily large times.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] One-dimensional Brownian motion hits every level almost surely: $P(T_c<\infty)=1$ for every $c\in\mathbb R$. [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]]

[F2] Future-path Markov: for each deterministic $s\ge0$ the increment process $(B_{s+t}-B_s)_{t\ge0}$ is independent of $\mathcal F_s$ with the finite-dimensional marginals of Brownian motion, so for an $\mathcal F_s$-measurable level $c$ the conditional probability that the shifted process ever hits $c-B_s$ is $1$. [[thm-brownian-future-path-markov-property]] [[def-natural-and-usual-augmented-brownian-filtrations]]

[F3] Conditional-expectation versions are unique almost surely, so an event whose conditional probability given $\mathcal F_s$ equals $1$ has probability one. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]]

[F4] Countable intersections of probability-one events have probability one, by continuity from above of a probability measure based at a probability-one event. [[lem-probability-measure-basic-identities]]

[F5] The rationals are dense in $\mathbb R$, so every nonempty open interval contains a rational point. [[lem-rat-embeds-dense]]

[F6] AC is the ambient assumption of the Brownian construction. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Fix $c\in\mathbb R$ and $n\ge1$, and let $A_{c,n}:=\{\exists t\ge n:B_t=c\}$. By [F2] at the deterministic time $n$, conditionally on $\mathcal F_n$ the shifted process $(B_{n+t}-B_n)_{t\ge0}$ is a Brownian motion independent of $\mathcal F_n$; since $c-B_n$ is $\mathcal F_n$-measurable, [F1] gives that the shifted process hits the level $c-B_n$ almost surely, so $P(A_{c,n}|\mathcal F_n)=1$ almost surely; by [F3] this forces $P(A_{c,n})=1$. [F1, F2, F3, given]

2.1 For fixed $c$ the events $A_{c,1}\supseteq A_{c,2}\supseteq\cdots$ all have probability one, so $A_c:=\bigcap_{n\ge1}A_{c,n}$ has probability one by [F4], and on $A_c$ the path visits the level $c$ at arbitrarily large times. [F4, step 1.1]

3.1 The intersection $A:=\bigcap_{c\in\mathbb Q}A_c$ over the countable set of rationals again has probability one by [F4]; on $A$, for every rational $c$ and every time bound the path visits $c$ at some larger time. [F4, step 2.1]

4.1 Let $I\subseteq\mathbb R$ be a nonempty open interval. By [F5] choose a rational $c\in I$. On the probability-one event $A$ of step 3.1 the path visits $c$, hence enters $I$, at arbitrarily large times. Since every nonempty open interval arises in this way and $A$ does not depend on $I$, almost surely the set $\{t:B_t\in I\}$ is unbounded for every nonempty open interval $I$. [F5, step 3.1]

5.1 The equivalent formulation follows: for a real point $y$ and $\varepsilon>0$, the interval $(y-\varepsilon,y+\varepsilon)$ is nonempty and open, so it is visited at arbitrarily large times almost surely. The case of the empty interval is excluded, singleton intervals are not claimed as infinitely visited except through the containing open intervals, and the conclusion is about the unboundedness of the visit set, not about any integrability of a hitting time; the first visit of a fixed level is the almost-sure finiteness proved in [F1]. AC is used only through [F6]. [F1, F6, given, step 4.1] ∎

## Source notes

On the source side, Sousi, Section 6.7, proves one-dimensional recurrence from the almost-sure finiteness of hitting times together with the restart argument, and Durrett, Section 7.4, records the same consequence. The statement here is the neighbourhood form actually consumed by the planar example on the companion page, which contrasts it with the polarity of single points in the plane.
