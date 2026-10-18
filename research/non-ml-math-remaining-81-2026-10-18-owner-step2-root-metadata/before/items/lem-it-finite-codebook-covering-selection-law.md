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

Let $P_{XU}=P_XP_{U|X}$ be a joint law on finite nonempty alphabets, with marginal $P_U$. Fix $\eta>0$ and a target joint-typicality tolerance $\epsilon>0$. There are a source-typicality tolerance $\delta>0$ and an integer $n_0$ such that, for every $n\ge n_0$, every $x^n\in T_\delta^{(n)}(P_X)$, and every $R>I(X;U)+\eta$, an iid codebook of $M_n=\lceil e^{nR}\rceil$ independent $P_U^{\otimes n}$ words contains a word in $T_\epsilon^{(n)}(P_{XU}|x^n)$ with probability tending to one uniformly in $x^n$. If the encoder selects the least index with a jointly typical word, then, conditional on a match, its selected word has law $P_U^{\otimes n}$ conditioned on $T_\epsilon^{(n)}(P_{XU}|x^n)$; conditional on any particular joint type, this law is uniform on the associated conditional type class.

## Facts & Assumptions

**Given:** A finite joint pmf $P_{XU}$, its factorization $P_XP_{U|X}$, $\eta>0$, and the target tolerance $\epsilon>0$.

[F1] [[def-it-finite-strongly-typical-set]]: $T_\delta^{(n)}(P)$ consists of support-restricted blocks whose empirical probabilities are within relative tolerance $\delta$ of $P$; the conditional set is defined by joint typicality with the fixed block.

[F2] [[lem-it-finite-type-class-cardinality-bounds]]: for an attainable type $q$ on $m$ letters, $(n+1)^{-m}e^{nH(q)}\le |T_q|\le e^{nH(q)}$.

[F3] [[def-it-finite-mutual-information]]: $I(X;U)=D(P_{XU}\|P_XP_U)$, with natural logarithms and the finite support convention.

[F4] [[def-it-finite-conditional-entropy]]: $H(U|X)$ is the finite average of $H(P_{U|x})$ over positive-mass $x$.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$ with $0\ln0=0$.

## Proof

1.1 Let $\rho>0$ be any desired relative accuracy for a constructed joint type. For each positive-mass $x$, let $n_x$ be its count in $x^n$. Choose $\delta<1/2$; then $n_x/n$ is within relative error $\delta$ of $P_X(x)$, so for all sufficiently large $n$ every such $n_x$ is positive and grows linearly in $n$, uniformly over $x^n\in T_\delta^{(n)}(P_X)$. For each row, take floors of $n_xP_{U|X}(u|x)$ on its positive conditional support and distribute the fewer than $|\mathcal U|$ remaining counts among those entries; set zero-conditional-probability counts to zero. Every resulting count differs from its target by at most $|\mathcal U|$. As there are finitely many positive joint atoms, first choose $\delta$ small and then $n$ large so that the joint type $q_{XU}(x,u)=(n_x/n)q_{U|X}(u|x)$ has relative error at most $\rho$ on every positive atom of $P_{XU}$. Zero joint atoms receive zero counts. Thus the associated conditional type class is nonempty and its joint type lies in $T_\rho^{(n)}(P_{XU})$. [F1, choose, construct]

2.1 The conditional type class from step 1.1 has at least $\prod_{x:P_X(x)>0}(n_x+1)^{-|\mathcal U|}\exp(n_xH(q_{U|x}))$ words by [F2]. Every word in it has the same $P_U^{\otimes n}$ probability. Its marginal type $q_U$ is supported on $\operatorname{supp}(P_U)$, and this probability is
$$\exp\!\left(n\sum_{u:P_U(u)>0}q_U(u)\ln P_U(u)\right)=\exp[-n(H(q_U)+D(q_U\|P_U))].$$
For any finite probability vector, each entropy summand $-t\ln t$ is continuous at zero because $t\ln t\to0$. The finite conditional-entropy sum expands as
$$H_q(U|X)=-\sum_{x,u:q(x,u)>0}q(x,u)\ln\frac{q(x,u)}{q_X(x)}=H(q_{XU})-H(q_X).$$
On $\operatorname{supp}(P_U)$,
$$D(r\|P_U)=\sum_{u:P_U(u)>0}r(u)\ln r(u)-\sum_{u:P_U(u)>0}r(u)\ln P_U(u),$$
so $D(r\|P_U)$ is continuous even when some $r(u)=0$. The displayed identity makes $H_q(U|X)$ continuous in $q_{XU}$. Consequently $\Phi(q):=H_q(U|X)-H(q_U)-D(q_U\|P_U)$ is continuous at $P_{XU}$ on the simplex of laws supported by $P_{XU}$, including its boundary. Expanding the finite KL sum [F3] and the entropy formulas [F4]–[F5] gives $I(X;U)=H(U)-H(U|X)$, so $\Phi(P_{XU})=H(U|X)-H(U)=-I(X;U)$. Choose $\rho<\epsilon$ small enough that $\Phi(q)\ge-I(X;U)-\eta/3$ whenever $q$ is within relative tolerance $\rho$ of $P_{XU}$. The type-class bound and the product probability then give
$$p_n(x^n)\ge(n+1)^{-|\mathcal X||\mathcal U|}\exp[-n(I(X;U)+\eta/3)]$$
uniformly over $x^n\in T_\delta^{(n)}(P_X)$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 By independence of the codewords, the probability that none of $M_n$ words lies in the conditional typical set is $(1-p_n(x^n))^{M_n}\le e^{-M_np_n(x^n)}$. Choose the tolerances so that the exponent in step 2.1 leaves a positive gap below $R$; then $M_np_n(x^n)\to\infty$ uniformly, and the no-match probability tends to zero. [given, step 2.1, algebra]

4.1 For a fixed $x^n$, let $A=T_\epsilon^{(n)}(P_{XU}|x^n)$. The event that index $\ell$ is the first successful index depends on codewords before $\ell$ failing and the $\ell$th codeword lying in $A$; those events are independent across codewords. Consequently, conditional on the first-success event at any $\ell$, the selected word has law $P_U^{\otimes n}(\cdot|A)$, and averaging over $\ell$ gives the same conditional law given a match. On each joint type class inside $A$, the marginal type of $U^n$ is fixed, so all its words have the same product probability; the conditional law is therefore uniform on that class. [F1, construct, algebra] ∎

