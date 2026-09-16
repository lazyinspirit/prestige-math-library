---
id: cor-brownian-zero-set-is-uncountable
kind: corollary
title: "The Brownian zero set is uncountable"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, def-perfect-set-r, thm-brownian-zero-set-has-no-isolated-points, lem-brownian-zero-set-has-lebesgue-measure-zero, thm-perfect-set-uncountable-r, lem-rat-embeds-dense, def-axiom-of-choice]
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

Let $B$ be a standard Brownian motion and let $Z$ be its zero set
[[def-brownian-zero-set]]. Almost surely, for every $T>0$ the set $Z_T=Z\cap[0,T]$
is uncountable. In particular the zero set is almost surely uncountable in
every nondegenerate interval $[0,T]$, although by
[[lem-brownian-zero-set-has-lebesgue-measure-zero]] it has Lebesgue measure
zero there.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, its zero set $Z$, and $T>0$.

[F1] $Z$ is a closed subset of $[0,\infty)$ containing $0$, and $Z_T=Z\cap[0,T]$ is compact. [[def-brownian-zero-set]]

[F2] Almost surely every point of $Z$ is a limit point of $Z$, so $Z$ has no isolated points. [[thm-brownian-zero-set-has-no-isolated-points]]

[F3] Almost surely $\lambda(Z_N)=0$ for every integer horizon $N\ge1$. [[lem-brownian-zero-set-has-lebesgue-measure-zero]]

[F4] A set $P\subseteq\mathbb R$ is perfect when it is closed and has no isolated points; every nonempty perfect subset of $\mathbb R$ is uncountable. [[def-perfect-set-r]] [[thm-perfect-set-uncountable-r]]

[F5] The rationals are dense in $\mathbb R$. [[lem-rat-embeds-dense]]

[F6] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Fix a rational $q>0$ with $q\notin Z$; then $Z\cap[0,q]$ is nonempty because $0\in Z$, it is closed in $\mathbb R$ as the intersection of the closed set $Z$ with the closed interval $[0,q]$, and it has no isolated points: for $t\in Z\cap[0,q]$ one has $t<q$, and by [F2] there are zeros of $Z$ different from $t$ in every neighbourhood of $t$, which for a neighbourhood of radius $<\min(q-t,t+1)$ lie in $[0,q]$. [F1, F2, F4, given]

1.2 Almost surely, for every $T>0$ there is a rational $q\in(0,T)$ with $q\notin Z$: by [F3] and monotonicity of Lebesgue measure, $\lambda(Z_T)=0<T=\lambda([0,T])$, so $Z_T\ne[0,T]$; picking $s\in(0,T)\setminus Z$, openness of the complement of the closed set $Z$ supplies a neighbourhood of $s$ disjoint from $Z$, and [F5] supplies a rational $q$ in that neighbourhood with $0<q<T$. [F3, F5, given]

2.1 On the probability-one event of [step 1.2] and [F2], and for a rational $q$ as there, [step 1.1] exhibits $Z\cap[0,q]$ as a nonempty perfect subset of $\mathbb R$; by [F4] it is uncountable, and since $Z\cap[0,q]\subseteq Z_T$, the set $Z_T$ is uncountable. [step 1.1, step 1.2, F4]

3.1 The cases are covered: $T>0$ is required, so the interval is nondegenerate; the rational $q$ is chosen strictly inside $(0,T)$ so that the potential isolated point $q$ of $Z\cap[0,q]$ is excluded by $q\notin Z$; the statement is asserted simultaneously for all $T>0$ on one probability-one event, obtained by intersecting the countably many events of [step 1.2] over rational $T$ and using monotonicity in $T$; and AC enters only through [F6]. [step 1.2, step 2.1, F1, F6, given] ∎

## Source notes

Sousi, Theorem 6.39, states the zero set is almost surely closed with no isolated points, and Durrett, Section 7.4.1, derives uncountability from closedness and the absence of isolated points by the perfect-set theorem. The corollary adds the explicit choice of a rational point outside $Z$ inside every horizon, which is what makes the subset used in the perfect-set theorem nonempty and genuinely free of the terminal-point exception.
