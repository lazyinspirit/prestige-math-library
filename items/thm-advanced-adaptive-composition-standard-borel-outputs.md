---
id: thm-advanced-adaptive-composition-standard-borel-outputs
kind: theorem
title: Advanced adaptive composition for standard-Borel outputs
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-standard-borel-space
  - def-axiom-of-choice
  - lem-dp-pure-privacy-loss-kl-bound
  - lem-dp-approximate-kernel-purification
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - def-conditional-kl-for-probability-kernels
  - thm-conditional-kl-is-measurable
  - thm-azuma-hoeffding-inequality
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - lem-dp-test-function-extension
  - thm-measurability-of-integration-against-a-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-integration-against-a-radon-nikodym-derivative
  - def-conditional-expectation-given-a-sigma-algebra
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Assume full AC for the jointly measurable Radon–Nikodym versions, transcript laws, conditional KL interfaces, and Azuma supplier. No stronger axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Assume AC. Let $\mathcal D$ be the finite-support count functions on a nonempty record universe, with neighbors formed by adding or removing one record occurrence. Let $k\ge1$, let each round output space and each finite transcript-prefix space be a measurable space measurably isomorphic to a Polish space, and let $K_i(D,h,\cdot)$ be the probability kernel for round $i$ conditional on prior transcript $h$. Suppose that for every $D\sim D'$, every $i$, every $h$, and every measurable round-$i$ event $A$,
$$
K_i(D,h,A)\le e^\varepsilon K_i(D',h,A)+\delta,
$$
where $\varepsilon\ge0$ and $0\le\delta\le1$. If $0<\delta'<1$ and $k\delta+\delta'\le1$, then the finite-product full transcript is $(\varepsilon',k\delta+\delta')$-differentially private, where
$$
\varepsilon'=\sqrt{2k\ln(1/\delta')}\,\varepsilon+k\varepsilon(e^\varepsilon-1).
$$

## Statement references

[[def-differential-privacy-and-adjacency|The ordered event inequalities defining differential privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Theorem 3.20 and its proof, §3.5.2, printed pp. 49–51.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.2, Lemma 2.4, Claim 2.5 and their proof sketch (context; exact constants are proved below).](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** AC, $k\ge1$ adaptive rounds with $(\varepsilon,\delta)$-private conditional kernels for every history, standard-Borel output and finite-prefix spaces, and $0<\delta'<1$ with $k\delta+\delta'\le1$.

[A1] [[def-axiom-of-choice|Axiom of Choice]] is assumed by the RN, path-law, conditional-KL, and Azuma suppliers.

[F1] [[def-differential-privacy-and-adjacency|Differential privacy]] is the event inequality in both directions for every ordered neighboring pair; the database source has the power-set sigma-algebra, so transcript-event evaluations are measurable in the database.

[F2] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel|Finite products of standard-Borel spaces]] remain standard Borel.

[F3] [[thm-ionescu-tulcea-construction-of-a-markov-chain|Ionescu–Tulcea path law]]: under AC, an initial probability and a sequence of history-dependent probability kernels give a probability law whose finite-prefix laws are the prescribed iterated integrals.

[F4] [[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels|Joint RN derivatives]]: dominated probability kernels on standard-Borel source and target spaces have a jointly measurable density representing every event on one common conull set.

[F5] [[lem-dp-pure-privacy-loss-kl-bound|Pure-DP KL bound]]: if two probability laws satisfy both pure $\varepsilon$ event inequalities, then $D(P\|Q)\le b$, where $b=\varepsilon(e^\varepsilon-1)$; the same holds with $P,Q$ reversed.

[F6] [[lem-dp-approximate-kernel-purification|Kernel purification]]: under AC, an $(\varepsilon,\delta)$ pair of kernels has a pure-$\varepsilon$ replacement within integrated total variation $\delta$ under any supplied history probability.

[F7] [[def-conditional-kl-for-probability-kernels|Conditional KL]] is the integral of the fiberwise KL divergence; [[thm-conditional-kl-is-measurable]] makes its integrand measurable.

[F8] [[def-conditional-expectation-given-a-sigma-algebra|Conditional expectation]] is characterized by measurability and equality of integrals over every event in the conditioning sigma-algebra.

[F9] [[thm-azuma-hoeffding-inequality|Azuma–Hoeffding]]: if martingale differences have history-measurable interval bounds of length $c_i$, then the upper tail at $t>0$ is at most $\exp(-2t^2/\sum_i c_i^2)$.

[F10] [[lem-dp-test-function-extension|Bounded-function extension]] applied in both directions converts an event bound with $\varepsilon=0$ and additive error $s$ into $|\int g\,dP-\int g\,dQ|\le s$ for every measurable $0\le g\le1$.

[F11] [[thm-integration-against-a-radon-nikodym-derivative|RN integration identity]] recovers integration against a measure by multiplying by its density.

[F12] [[thm-measurability-of-integration-against-a-kernel|Kernel integration measurability]] and [[thm-sections-of-product-measurable-functions-are-measurable]] make the history-section probabilities and their integrals measurable.

[F13] [[def-natural-logarithm|Natural logarithm]] is the inverse of the positive real exponential and is defined on the positive likelihood ratios used below.

[F14] [[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation]] is integration against the path probability law; bounded privacy-loss variables are integrable.

[F15] [[thm-natural-logarithm-laws|The logarithm product law]] gives $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

## Proof

1.1 Fix neighboring databases $D,D'$. By [F2], every finite history space is standard Borel. To apply the infinite-sequence form of [F3], append after round $k$ a singleton output space and its unique probability kernel at every later round. The first $k$ coordinates of the resulting path law have exactly the desired finite transcript law; do this for $D$ and $D'$ to obtain $P$ and $Q$. Event evaluations of these laws are measurable in the database by [F1]. [A1, F1, F2, F3, given, choose, construct]

1.2 We first prove the one-sided estimate from $P$ to $Q$. Set $P_0^*=Q_0$ equal to the point mass on the empty history. Recursively, after constructing the modified $D$-transcript prefix law $P_{i-1}^*$, apply [F6] to the round-$i$ pair $K_i(D,h,\cdot),K_i(D',h,\cdot)$ with base history law $\lambda_i=P_{i-1}^*$. This gives a probability kernel $K_i^*$ that is pure $\varepsilon$ relative to $K_i(D',h,\cdot)$ in both event directions for $\lambda_i$-almost every $h$, with $\int\operatorname{TV}(K_i(D,h,\cdot),K_i^*(h,\cdot))P_{i-1}^*(dh)\le\delta$. Composing the finite modified sequence by [F3] gives a law $P^*$ and its prefix laws $P_i^*$. [A1, F3, F6, given, construct]

2.1 The prefix laws $P_i^*$ and $Q_i$ are mutually absolutely continuous for each $i$. They agree at the empty history. If they are equivalent at $i-1$, then for a product-measurable event $B$ with $Q_i(B)=0$, the iterated integral formula [F3] gives $K_i(D',h,B_h)=0$ for $Q_{i-1}$-almost every $h$, hence for $P_{i-1}^*$-almost every $h$. The pure reverse inequality from step 1.2 gives $K_i^*(h,B_h)=0$, so $P_i^*(B)=0$. Reversing the two kernels proves the converse; induction gives prefix equivalence. [F1, F3, step 1.2, given, induction]

3.1 For each $i$, apply [F4] with base measure $P_{i-1}^*$ to obtain a jointly measurable density $r_i(h,y)$ of $K_i^*(h,\cdot)$ with respect to $K_i(D',h,\cdot)$ on one common conull history set. The pure event inequalities imply $e^{-\varepsilon}\le r_i\le e^\varepsilon$ almost surely there: if either bound failed on a positive-measure fiber set, some level set separated from that bound by $1/n$ would contradict one event inequality. Clip $r_i$ everywhere to $[e^{-\varepsilon},e^\varepsilon]$; Borel composition preserves measurability, the density is unchanged on the conull set, and $X_i(h,y)=\ln r_i(h,y)$ is jointly measurable with $|X_i|\le\varepsilon$. [F1, F4, F13, step 1.2, step 2.1, given, construct]

4.1 We prove the density formula by induction on prefix length. At the first round, [F4] gives $dP_1^*/dQ_1=r_1$. Suppose $R_{i-1}=\prod_{j<i}r_j$ is the density on the first $i-1$ outputs. For a measurable event $A$ on the first $i$ outputs, [F3] gives $P_i^*(A)=\int P_{i-1}^*(dh)\int\mathbf1_A(h,y)K_i^*(h,dy)$. For almost every $h$, [F4] replaces the inner integral by $\int\mathbf1_A(h,y)r_i(h,y)K_i(D',h,dy)$. Applying [F11] to the outer prefix integral with density $R_{i-1}$ yields $P_i^*(A)=\int Q_{i-1}(dh)R_{i-1}(h)\int\mathbf1_A(h,y)r_i(h,y)K_i(D',h,dy)=\int_A R_{i-1}(h)r_i(h,y)Q_i(dh,dy)$. This proves the induction and hence $dP^*/dQ=R=\prod_{i=1}^k r_i(H_{i-1},Y_i)$. Since every factor is positive and bounded, [F15] gives $\ln R=\sum_{i=1}^kX_i(H_{i-1},Y_i)$ almost surely under both laws. [F3, F4, F11, F13, F15, step 3.1, induction]

4.2 Put $m_i(h)=\int X_i(h,y)K_i^*(h,dy)$. By the density formula and KL definition, $m_i(h)=D(K_i^*(h,\cdot)\|K_i(D',h,\cdot))\le b$ for $P_{i-1}^*$-almost every $h$, using [F5]. It is measurable by [F7] and [F12]. For every measurable prefix event $C$, the iterated-prefix identity [F3] gives $\int_{\{H_{i-1}\in C\}}X_i\,dP^*=\int_Cm_i(h)P_{i-1}^*(dh)$. Thus [F8] identifies $m_i(H_{i-1})$ as the conditional expectation of $X_i$ given the previous transcript. By [F14], the variables are integrable, so $M_j=\sum_{i\le j}(X_i-m_i(H_{i-1}))$ is a martingale. Each increment lies in the history-measurable interval $[-\varepsilon-m_i,\varepsilon-m_i]$, of length $2\varepsilon$. [F3, F5, F7, F8, F12, F14, step 3.1, given, construct]

5.1 If $\varepsilon=0$, every $X_i=0$, so $P^*=Q$ and the pure transcript has zero privacy loss. If $\varepsilon>0$, apply [F9] to step 4.2 with $c_i=2\varepsilon$ and $t=\varepsilon\sqrt{2k\ln(1/\delta')}$. It gives $P^*(M_k\ge t)\le\delta'$. Since $\sum_i m_i\le kb$ almost surely, the privacy loss exceeds $\varepsilon'=kb+t$ with probability at most $\delta'$. For any event $A$, split it into $A\cap\{\ln R\le\varepsilon'\}$ and $A\cap\{\ln R>\varepsilon'\}$; the density formula in step 4.1 bounds the first probability by $e^{\varepsilon'}Q(A)$ and the second by $\delta'$. Thus $P^*(A)\le e^{\varepsilon'}Q(A)+\delta'$. Applying the same argument under $Q$ with the roles reversed gives $Q(A)\le e^{\varepsilon'}P^*(A)+\delta'$, because the conditional kernels are pure in both directions and [F5] bounds both KL orientations. [F5, F9, step 4.1, step 4.2, given, algebra]

6.1 We compare $P$ and $P^*$ in total variation. For $i=0,\ldots,k$, let $H_i$ be the transcript law that uses the modified $D$ kernels for rounds $1,\ldots,i$ and the original $D$ kernels for rounds $i+1,\ldots,k$. Consecutive laws share the modified prefix through round $i-1$, whose law is $P_{i-1}^*$, and differ only in the round-$i$ kernel; after that round they use the same continuation kernels. For any final event, integrating that common continuation gives a measurable conditional probability $g(h,y)$ in $[0,1]$ by [F12]. The two-sided test-function bound [F10] and the integrated TV bound in step 1.2 yield $\operatorname{TV}(H_{i-1},H_i)\le\delta$. The triangle inequality gives $\operatorname{TV}(P,P^*)\le k\delta$, hence $P(A)\le P^*(A)+k\delta$. Combining with step 5.1 proves $P(A)\le e^{\varepsilon'}Q(A)+k\delta+\delta'$. [F3, F6, F10, F12, step 1.2, step 5.1, given, algebra]

7.1 Repeat steps 1.2–6.1 with $D'$ as the modified side and $D$ as the reference side. This gives $Q(A)\le e^{\varepsilon'}P(A)+k\delta+\delta'$. The ordered pair and event were arbitrary, so [F1] proves the stated differential-privacy guarantee. The condition $k\delta+\delta'\le1$ keeps the additive parameter in its declared nontrivial range; no step weakens the claimed epsilon. [F1, step 1.2, step 5.1, step 6.1, given] ∎
