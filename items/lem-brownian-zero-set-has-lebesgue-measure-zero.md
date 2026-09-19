---
id: lem-brownian-zero-set-has-lebesgue-measure-zero
kind: lemma
title: "The Brownian zero set has Lebesgue measure zero"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, lem-brownian-motion-has-a-jointly-measurable-continuous-version, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-brownian-transition-semigroup-property, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4.1 (the zero set has measure zero)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Theorem 6.39"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Let $B$ be a standard Brownian motion and let $Z$ be its zero set as in
[[def-brownian-zero-set]], understood through the all-path continuous jointly
measurable version. Then for every $T<\infty$ the Lebesgue measure of $Z_T$ is
zero almost surely:
$$P\bigl(\lambda(Z_T)=0\bigr)=1 .$$
Equivalently, almost surely the set of times at which the path vanishes has
Lebesgue measure zero.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, its normalized version $\widehat B$ and zero set $Z$, and a horizon $T\in(0,\infty)$.

[F1] The zero set is the closed, nonempty set $Z=\{t\ge0:\widehat B_t=0\}$ of the all-path continuous version $\widehat B$, and $Z_T=Z\cap[0,T]$. [[def-brownian-zero-set]]

[F2] The map $(t,\omega)\mapsto\widehat B_t(\omega)$ is $\mathcal B([0,\infty))\otimes\mathcal F$-measurable, so $(t,\omega)\mapsto1_{\{\widehat B_t=0\}}$ is product measurable. [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F3] A standard Brownian motion satisfies $B_t\sim N(0,t)$, whose law has density $p_t(0,y)$ for $t>0$; hence $P(\widehat B_t=0)=P(B_t=0)=0$ for every $t>0$. [[lem-brownian-transition-semigroup-property]] [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F4] Tonelli: for a product-measurable $f\ge0$ on a product of sigma-finite spaces, the section integrals are measurable and the two iterated integrals agree. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $t>0$ one has $P(\widehat B_t=0)=P(B_t=0)=0$ by [F1] and [F3], while $t=0$ contributes nothing to a Lebesgue integral over $[0,T]$; the indicator $(t,\omega)\mapsto1_{\{\widehat B_t(\omega)=0\}}$ is product measurable by [F2]. [F1, F2, F3]

2.1 Applying [F4] to that indicator over the sigma-finite product $[0,T]\times\Omega$ with the product measure $dt\otimes P$ gives $E\lambda(Z_T)=\int_0^TP(\widehat B_t=0)\,dt=0$, and it also shows that $\omega\mapsto\lambda(Z_T(\omega))$ is measurable. [step 1.1, F4]

3.1 Since $0\le\lambda(Z_T)\le T$ and its expectation is zero, $\lambda(Z_T)=0$ almost surely. [step 2.1]

4.1 Intersecting the probability-one events of [step 3.1] over the integer horizons $T=N$, $N\ge1$, yields a single probability-one event on which $\lambda(Z\cap[0,N])=0$ for every $N$; for an arbitrary finite horizon $T$ choose $N\ge T$ and use $Z_T\subseteq Z_N$ to conclude $\lambda(Z_T)=0$ almost surely. [step 3.1]

5.1 The degenerate cases are covered: the endpoint $t=0$ and the singleton $\{0\}\subseteq Z$ have Lebesgue measure zero and do not affect the integral; the horizon is finite and positive, and larger horizons are handled by monotonicity in [step 4.1]; the identity $Z_T=Z\cap[0,T]$ is the definition of [F1]; and the version $\widehat B$ differs from $B$ only on a null set by [F1], so the almost-sure conclusion transfers to the zero set of $B$; AC enters only through [F5]. [step 2.1, step 4.1, F1, F5, given] ∎

## Source notes

Durrett, Section 7.4.1, computes $E|Z\cap[0,T]|=\int_0^TP(B_t=0)\,dt=0$ and concludes that the zero set has measure zero; the argument above makes the Tonelli step explicit through the all-path continuous jointly measurable version, so the section integrals are measurable without any auxiliary regularity assumption.
