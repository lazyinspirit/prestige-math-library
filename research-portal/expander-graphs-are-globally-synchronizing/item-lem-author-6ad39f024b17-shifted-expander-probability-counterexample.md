---
title: Two fixed-parameter expander events have vanishing success probabilities
status: published
research_item: lem-author-6ad39f024b17-shifted-expander-probability-counterexample
dependency_level: 9
---

## Prerequisites

- [lem-author-6ad39f024b17-small-minimum-degree](item-lem-author-6ad39f024b17-small-minimum-degree)
- [lem-author-6ad39f024b17-shifted-root-degree-obstruction](item-lem-author-6ad39f024b17-shifted-root-degree-obstruction)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)
- [math:lem-finite-probability-basic-laws](https://alphabetamath.cc/item/lem-finite-probability-basic-laws)


## Statement

Let $n\ge3$ be an integer and set $L=\log n$, where $\log$ is the natural logarithm. Fix the parameters $\gamma=2$, $\varepsilon=1/2$, $p=2L/n$, $d^*=2L$, and $\alpha=8/\sqrt{2L}$. For all sufficiently large such $n$ we have $0<p<1$. Let $G\sim G(n,p)$ be the loop-free random graph on $[n]$ with independent Bernoulli-$p$ unordered-edge indicators; all probabilities below use this finite product law. Write $d(u)=\deg_G(u)$, $d_{\min}=\min_{u\in[n]}d(u)$, and $d_{\max}=\max_{u\in[n]}d(u)$.

Let $c^-<0<c^+$ be the signed shifted roots, characterized by $2h(c^--1/2)=2h(c^++1/2)=3/2$, where $h(x)=(1+x)\log(1+x)-x$ for $x>-1$. Define the degree event by
$$D_n=\{(1+c^-+\alpha)pn\le d_{\min}\le d_{\max}\le(1+c^+-\alpha)pn\},$$
and let $E_n$ be the event that $G$ is an $(n,d^*,\alpha,c^-,c^+)$-expander, with the two-sided spectral expander predicate. For all sufficiently large $n$, both success probabilities satisfy
$$\mathbb P(D_n)\le\eta_n,\qquad\mathbb P(E_n)\le\eta_n,\qquad\eta_n=2e^4L/\sqrt n+2p/(1-p)^2\longrightarrow0.$$
Consequently, for neither event is there a constant $C>0$, independent of $n$, such that its failure probability is at most $C(\log n)^4n^{-1/2}$ for every sufficiently large $n$.

## Statement references

[math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)

[math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)

[def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

## Facts & Assumptions

[F1] For the graph $G\sim G(n,p)$ specified above, $\mathbb P(d_{\min}>\lfloor L\rfloor)\le\eta_n\to0$ for all sufficiently large $n$ ([lem-author-6ad39f024b17-small-minimum-degree](item-lem-author-6ad39f024b17-small-minimum-degree)).

[F2] For these admissible parameters, each of the full expander predicate and the degree target $D_n$ forces $d_{\min}>L$ for all sufficiently large $n$ ([lem-author-6ad39f024b17-shifted-root-degree-obstruction](item-lem-author-6ad39f024b17-shifted-root-degree-obstruction)).

[F3] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F4] The graph law is the finite product of the Bernoulli-$p$ edge laws, and degree counts the incident edges in this loop-free graph; the degree extrema are defined on the nonempty set $[n]$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)).

[F5] The shifted roots and the two-sided expander predicate used for $E_n$ are those in [def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots) and [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), respectively, specialized to the parameters in the Statement.

[F6] The floor satisfies $\lfloor L\rfloor\le L<\lfloor L\rfloor+1$. In a finite probability space, event containment implies the corresponding probability inequality, and $\mathbb P(B^c)=1-\mathbb P(B)$ ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part), [math:lem-finite-probability-basic-laws](https://alphabetamath.cc/item/lem-finite-probability-basic-laws)).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 By [F3], $p=2L/n\to0$, so for sufficiently large $n$ the graph law and degree extrema are defined as in [F4]. By [F5] the events $D_n,E_n$ are exactly those covered by [F2]. Hence $D_n,E_n\subseteq\{d_{\min}>L\}\subseteq\{d_{\min}>\lfloor L\rfloor\}$, using the floor inequality in [F6]. Applying probability monotonicity from [F6] and the bound [F1] gives both success-probability upper bounds. Their complement probabilities are at least $1-\eta_n$ and at most one, so both failure probabilities tend to one. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 For any fixed $C>0$, [F3] with $a=1/8$ gives $C(\log n)^4/\sqrt n=C(\log n/n^{1/8})^4\to0$. Eventually $\eta_n<1/4$ and this proposed failure bound is below $1/4$. The actual failure probability of each event exceeds $3/4$, contradicting any such bound beyond every sufficiently large cutoff. All parameters remain fixed except $n$ and its prescribed $p,d^*,\alpha$. [F1, F3, step 1.1, algebra] ∎
