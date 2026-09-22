---
id: lem-brownian-zero-set-has-lebesgue-measure-zero
kind: lemma
title: "The Brownian zero set has Lebesgue measure zero"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, lem-brownian-motion-has-a-jointly-measurable-continuous-version, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-standard-normal-and-normal-laws, def-axiom-of-choice, def-brownian-motion, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-probability-measure-basic-identities]
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

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion and let $Z$ be its zero set as in
[[def-brownian-zero-set]], understood through the all-path continuous jointly
measurable version. Then for every $0\le T<\infty$ the Lebesgue measure of $Z_T$ is
zero almost surely:
$$P\bigl(\lambda(Z_T)=0\bigr)=1 .$$
Here set $Z_0=Z\cap\{0\}$, extending the positive-horizon notation.
There is one measurable full event on which $\lambda(Z)=0$ and all finite
horizons have zero measure. On its intersection with the supplied event of
all-time agreement, the same pathwise assertion holds for the original B.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, its normalized version $\widehat B$ and zero set $Z$, and a horizon $T\in(0,\infty)$.

[F1] The zero set is the closed, nonempty set $Z=\{t\ge0:\widehat B_t=0\}$ of the all-path continuous version $\widehat B$, and $Z_T=Z\cap[0,T]$. [[def-brownian-zero-set]]

[F2] The map $(t,\omega)\mapsto\widehat B_t(\omega)$ is $\mathcal B([0,\infty))\otimes\mathcal F$-measurable, so $(t,\omega)\mapsto1_{\{\widehat B_t=0\}}$ is product measurable. [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F3] For t>0 the Brownian definition gives $B_t-B_0$ law N(0,t), and B_0=0 almost surely, hence B_t has that law. By the definition of the normal law, it is the law of sqrt(t) times a standard normal variable. [[def-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[F4] Tonelli: for a product-measurable $f\ge0$ on a product of sigma-finite spaces, the section integrals are measurable and the two iterated integrals agree. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

[F6] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere. Countable unions of probability-zero events are null. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]] [[lem-probability-measure-basic-identities]]

## Proof

**Proof technique:** direct.

1.1 For t>0, [F3] gives $P(B_t=0)=\gamma(\{0\})=0$, because sqrt(t)>0 and the standard normal density integrates to zero over the Lebesgue-null singleton {0}. The latter singleton convention is in [F1]. The normalized version agrees with B on one measurable full event by [F2], so $P(\widehat B_t=0)=0$ as well. At t=0 the probability is one, but that time singleton has Lebesgue measure zero. The zero indicator is product measurable by [F2]. [F1, F2, F3]

2.1 Applying [F4] to that indicator over the sigma-finite product $[0,T]\times\Omega$ with the product measure $dt\otimes P$ gives $E\lambda(Z_T)=\int_0^TP(\widehat B_t=0)\,dt=0$, and it also shows that $\omega\mapsto\lambda(Z_T(\omega))$ is measurable. [step 1.1, F4]

3.1 Since $0\le\lambda(Z_T)\le T$, its measurability and zero expectation in step 2.1 permit [F6], giving $\lambda(Z_T)=0$ almost surely. [F6, step 2.1]

4.1 Intersect the measurable probability-one events from step 3.1 over the explicitly listed horizons N>=1. By [F6] their intersection A is measurable with probability one. On A, every finite nonnegative T has $Z\cap[0,T]\subseteq Z\cap[0,N]$ for some integer N>=T, so its measure is zero by monotonicity. Also $Z=\bigcup_{N\ge1}(Z\cap[0,N])$, so countable subadditivity of Lebesgue measure gives $\lambda(Z)=0$ on A. Conversely a zero-measure whole zero set has zero-measure intersections, which explains the global formulation. [F1, F6, step 3.1]

5.1 At T=0 the zero set is the singleton {0}, so its measure is zero pathwise; the time endpoint t=0 does not affect step 2.1. Let A_* be the measurable full event on which the supplied normalized process agrees with B at all times. On A intersect A_* from step 4.1 the original B path has exactly the same zero set, proving its pathwise nullness there. No claim is needed that arbitrary exceptional paths of B have measurable zero sets or that the entire all-time equality event is measurable. The countable horizon list is fixed; full AC is inherited from [F5], with no further selection of paths or exceptional events. [F1, F2, F5, step 2.1, step 4.1] ∎

## Source notes

Durrett, Section 7.4.1, computes $E|Z\cap[0,T]|=\int_0^TP(B_t=0)\,dt=0$ and concludes that the zero set has measure zero; the argument above makes the Tonelli step explicit through the all-path continuous jointly measurable version, so the section integrals are measurable without any auxiliary regularity assumption.
