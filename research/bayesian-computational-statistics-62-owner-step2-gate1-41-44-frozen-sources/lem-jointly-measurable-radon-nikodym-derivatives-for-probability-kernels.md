---
id: lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
kind: lemma
title: "Jointly measurable Radon–Nikodym derivatives for probability kernels"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-measurability-of-integration-against-a-kernel
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-composition-with-borel-functions-preserves-measurability
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
proof_strategy: direct
axiom_use: "Assume AC. It is used through the finite-prefix kernel-law construction, the scalar Radon–Nikodym theorem, and the countable measure-determining algebra result. No stronger choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathlib, Probability.Kernel.RadonNikodym, Kernel.rnDeriv documentation"
      url: "https://leanprover-community.github.io/mathlib4_docs/Mathlib/Probability/Kernel/RadonNikodym.html"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement

Assume AC. Let $(E,\mathcal E)$ and $(F,\mathcal F)$ be standard Borel spaces, let $\lambda$ be a probability measure on $E$, and let $M$ and $R$ be probability kernels from $E$ to $F$. Suppose $M(x,\cdot)\ll R(x,\cdot)$ for $\lambda$-almost every $x$. Then there is an $(\mathcal E\otimes\mathcal F)$-measurable function $r:E\times F\to[0,\infty]$ such that, for $\lambda$-almost every $x$ and every $B\in\mathcal F$,
$$M(x,B)=\int_B r(x,y)\,R(x,dy).$$
The exceptional set in $x$ is a single null set, independent of $B$.

## Facts & Assumptions

**Given:** AC, standard Borel spaces $(E,\mathcal E)$ and $(F,\mathcal F)$, a probability measure $\lambda$ on $E$, probability kernels $M,R:E\rightsquigarrow F$, and $M(x,\cdot)\ll R(x,\cdot)$ for $\lambda$-almost every $x$.

[A1] [[def-axiom-of-choice]]: AC supplies a choice function for every family of nonempty sets.

[F1] [[def-standard-borel-space]]: A standard Borel space is measurably isomorphic to a Polish space.

[F2] [[def-measure-kernel-and-probability-kernel]]: Each kernel section is a measure, each set evaluation is measurable in the source variable, and a probability kernel has mass one in every section.

[F3] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: An initial probability and a sequence of probability kernels determine a unique path law whose finite-prefix laws are the ordered iterated kernel integrals.

[F4] [[thm-measurability-of-integration-against-a-kernel]]: For a probability kernel $K$ and a nonnegative product-measurable $f$, the map $x\mapsto\int f(x,y)K(x,dy)$ is measurable.

[F5] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: A nonnegative measurable function with integral zero vanishes almost everywhere.

[F6] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: Under AC, a finite measure absolutely continuous with respect to a probability measure has a measurable $L^1$ Radon–Nikodym density, unique almost everywhere.

[F7] [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]: Under AC, a standard Borel space has a countable algebra that determines finite measures.

[F8] [[thm-integration-against-a-radon-nikodym-derivative]]: A Radon–Nikodym representative $h=dP/dQ$ satisfies $P(A)=\int_Ah\,dQ$ for every measurable $A$.

[F9] [[thm-composition-with-borel-functions-preserves-measurability]]: Composing a measurable function with a Borel function preserves measurability.

[F10] [[thm-sections-of-product-measurable-functions-are-measurable]]: For each fixed $x$, the section $y\mapsto h(x,y)$ of a product-measurable function is measurable.

[F11] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: If $g$ is nonnegative measurable on a measure space $(F,\mathcal F,\mu)$, then $B\mapsto\int_Bg\,d\mu$ is a measure.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Apply [F3] to $\lambda$ and each one-step kernel to obtain joint laws $P(dx,dy)=\lambda(dx)M(x,dy)$ and $Q(dx,dy)=\lambda(dx)R(x,dy)$. For any product-measurable $A$, the section integrals are measurable by [F4]. If $Q(A)=0$, then $R(x,A_x)=0$ for $\lambda$-almost every $x$ by [F5]; intersecting with the conull kernel-domination set gives $M(x,A_x)=0$ there, hence $P(A)=0$. Thus $P\ll Q$. [A1, F2, F3, F4, F5, given]

2.1 By [F6], choose a product-measurable density $h=dP/dQ$. On $N=\{h<0\}$, positivity of $P$ gives $0\le P(N)=\int_Nh\,dQ=-\int_Nh^-\,dQ$, so [F5] makes $h^-=0$ $Q$-almost everywhere on $N$. The Borel positive-part map preserves measurability by [F9], so replacing $h$ by $h^+=\max(h,0)$ leaves the density unchanged $Q$-almost everywhere and makes it nonnegative. [A1, F5, F6, F9, step 1.1, choose]

3.1 Let $\mathcal C$ be a countable measure-determining algebra on $F$ from [F7], containing $F$. For each $B\in\mathcal C$ and $D\in\mathcal E$, the rectangle laws and density identity [F8] give $\int_D M(x,B)\lambda(dx)=P(D\times B)=\int_D(\int_Bh(x,y)R(x,dy))\lambda(dx)$. Both integrands are measurable by [F2] and [F4] and integrable because their integrals over $E$ are at most one. Uniqueness of Radon–Nikodym densities in [F6] makes them equal $\lambda$-almost everywhere for each fixed $B$. [A1, F1, F2, F3, F4, F6, F7, F8, step 2.1]

4.1 Intersect the conull sets from step 3.1 over the countable algebra $\mathcal C$. For each $x$ in the intersection, the section $h(x,\cdot)$ is measurable by [F10], so [F11] makes $B\mapsto\int_Bh(x,y)R(x,dy)$ a measure. The kernel section $M(x,\cdot)$ is a probability measure by [F2]. These two measures agree on $\mathcal C$ and have total mass one because $F\in\mathcal C$ and step 3.1 includes $B=F$. The measure-determining property [F7] makes them equal on every $B\in\mathcal F$, with the same exceptional null set for all $B$. Taking $r=h$ proves the assertion. [A1, F2, F7, F10, F11, step 3.1] ∎
