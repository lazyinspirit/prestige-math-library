---
id: lem-it-finite-codebook-covering-selection-law
kind: lemma
title: "Finite random-codebook covering and selected-codeword law"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-conditional-entropy
  - def-it-finite-mutual-information
  - def-it-finite-strongly-typical-set
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-finite-type-class-cardinality-bounds
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets and codebooks are finite, and the selected index is the least successful index."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, Wyner-Ziv achievability; Lecture 13, Berger-Tung covering construction."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 66–68, random rate-distortion codebooks and first jointly typical codeword."
---

## Statement

Let $P_{XU}=P_XP_{U|X}$ be a joint law on finite nonempty alphabets, with marginal $P_U$. Fix $\eta>0$. There are typicality tolerances $\delta>0$ and an integer $n_0$ such that, for every $n\ge n_0$, every $x^n\in T_\delta^{(n)}(P_X)$, and every $R>I(X;U)+\eta$, an iid codebook of $M_n=\lceil e^{nR}\rceil$ independent $P_U^{\otimes n}$ words contains a word jointly typical with $x^n$ with probability tending to one uniformly in $x^n$. If the encoder selects the least index with a jointly typical word, then, conditional on a match, its selected word has law $P_U^{\otimes n}$ conditioned on $T_\delta^{(n)}(P_{XU}|x^n)$; conditional on any particular joint type, this law is uniform on the associated conditional type class.

## Facts & Assumptions

**Given:** A finite joint pmf $P_{XU}$, its factorization $P_XP_{U|X}$, and $\eta>0$.

[F1] [[def-it-finite-strongly-typical-set]]: $T_\delta^{(n)}(P)$ consists of support-restricted blocks whose empirical probabilities are within relative tolerance $\delta$ of $P$; the conditional set is defined by joint typicality with the fixed block.

[F2] [[lem-it-finite-type-class-cardinality-bounds]]: for an attainable type $q$ on $m$ letters, $(n+1)^{-m}e^{nH(q)}\le |T_q|\le e^{nH(q)}$.

[F3] [[def-it-finite-mutual-information]]: $I(X;U)=D(P_{XU}\|P_XP_U)$, with natural logarithms and the finite support convention.

[F4] [[def-it-finite-conditional-entropy]]: $H(U|X)$ is the finite average of $H(P_{U|x})$ over positive-mass $x$.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$ with $0\ln0=0$.

## Proof

1.1 For each positive-mass $x$, let $n_x$ be its count in $x^n$. Since $x^n$ is $\delta$-typical, $n_x/n$ is within relative error $\delta$ of $P_X(x)$; hence, for fixed $\delta<1/2$ and all sufficiently large $n$, every such $n_x$ is positive and grows linearly in $n$. Round the numbers $n_xP_{U|X}(u|x)$ to nonnegative integers summing to $n_x$, assigning zero counts whenever $P_{U|X}(u|x)=0$. The resulting conditional type $q_{U|X}$ has each positive-row coordinate error at most $|\mathcal U|/n_x$. Because the alphabets are finite and every positive joint atom has a fixed positive mass, for all sufficiently large $n$ the joint type $q_{XU}(x,u)=(n_x/n)q_{U|X}(u|x)$ lies in $T_\delta^{(n)}(P_{XU})$. [F1, choose, construct]

2.1 The conditional type class from step 1.1 has at least $\prod_{x:P_X(x)>0}(n_x+1)^{-|\mathcal U|}\exp(n_xH(q_{U|x}))$ words by [F2]. Every such word has the same $P_U^{\otimes n}$ probability. For its marginal type $q_U$, that probability is $\exp(n\sum_u q_U(u)\ln P_U(u))=\exp[-n(H(q_U)+D(q_U\|P_U))]$, with support restricted to $P_U(u)>0$. Entropy and this finite relative-entropy expression are continuous on that support simplex, so as $\delta$ and the rounding errors tend to zero, the product of class size and word probability is at least $(n+1)^{-|\mathcal X||\mathcal U|}\exp[-n(I(X;U)+\eta/3)]$. The identity $I(X;U)=H(U)-H(U|X)$ follows by expanding [F3] and collecting the finite sums in [F4]–[F5]. Thus the one-codeword match probability $p_n(x^n)$ has this same lower bound, uniformly over typical $x^n$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 By independence of the codewords, the probability that none of $M_n$ words lies in the conditional typical set is $(1-p_n(x^n))^{M_n}\le e^{-M_np_n(x^n)}$. Choose the tolerances so that the exponent in step 2.1 leaves a positive gap below $R$; then $M_np_n(x^n)\to\infty$ uniformly, and the no-match probability tends to zero. [given, step 2.1, algebra]

4.1 For a fixed $x^n$, let $A=T_\delta^{(n)}(P_{XU}|x^n)$. The event that index $\ell$ is the first successful index depends on codewords before $\ell$ failing and the $\ell$th codeword lying in $A$; those events are independent across codewords. Consequently, conditional on the first-success event at any $\ell$, the selected word has law $P_U^{\otimes n}(\cdot|A)$, and averaging over $\ell$ gives the same conditional law given a match. On each joint type class inside $A$, the marginal type of $U^n$ is fixed, so all its words have the same product probability; the conditional law is therefore uniform on that class. [F1, construct, algebra] ∎

