---
title: Slack entropy thresholds preserve the quantitative synchronization bound
status: published
research_item: lem-author-5d47c15147c9-slack-expansion-synchrony
dependency_level: 11
---

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)
- [lem-author-5d47c15147c9-logarithmic-boundary-mass](item-lem-author-5d47c15147c9-logarithmic-boundary-mass)
- [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)
- [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [lem-author-6ad39f024b17-restricted-adjacency-tail](item-lem-author-6ad39f024b17-restricted-adjacency-tail)
- [prop-expander-sync-prop-3-2](item-prop-expander-sync-prop-3-2)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)


## Statement

Assume countable choice. Fix $0<\varepsilon<1$ and $\gamma>1+\varepsilon$. Put $\mu=\gamma\log n$, $p=\mu/n$ and $\alpha=8/\sqrt\mu$. Put $I(x)=x\log x-x+1$ for $x>0$ and $\beta=(\gamma+1+\varepsilon)/2$. Let $0<a<1<b$ be the unique lower and upper branch roots of $\gamma I(x)=\beta$. There is a constant $C=C(\gamma,\varepsilon)>0$ such that, for all sufficiently large integers $n$, the loop-free independent-edge graph $G(n,p)$ is an $(n,\mu,\alpha,a/2-1,b)$-expander and is globally synchronizing, with probability at least $1-Cn^{-\varepsilon}$. Global synchrony means convergence of the rotating-frame trajectory of the identical Kuramoto flow to a fully synchronized state for phase-volume almost every initial phase. The cutoff and constants may depend on both parameters; no exact unshifted-root Laplacian bound is asserted.

## Facts & Assumptions

[F1] The graph law and binomial degree laws are those of [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi) and [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence). Entropy $I(x)=x\log x-x+1$ has lower and upper inverse branches; in particular $I(a)=I(b)=\beta/\gamma$ has unique solutions $0<a<1<b$ whenever $0<\beta<\gamma$ ([prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)).

[F2] For fixed $x>0$ and integer $k=x\mu+O(1)$, the mass of $\operatorname{Bin}(n-1,p)$ is $\Theta(n^{-\gamma I(x)}/\sqrt{\log n})$ ([lem-author-5d47c15147c9-logarithmic-boundary-mass](item-lem-author-5d47c15147c9-logarithmic-boundary-mass)). Exact adjacent mass ratios follow from [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law). Probabilities and expectations are finite sums ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] At fixed $\gamma>1$, $\mathbb P(\|A-pJ\|\ge8\sqrt\mu)\le2n^{-\gamma}$ for all sufficiently large $n$ ([lem-author-6ad39f024b17-restricted-adjacency-tail](item-lem-author-6ad39f024b17-restricted-adjacency-tail)). This completed supplier imports independent nonbacktracking estimates; it does not rely on the article's all-$\gamma$ Corollary 6.6.

[F4] A norm bound $\|A-pJ\|\le\alpha\mu$ together with $(1+c^-+\alpha)\mu\le d_{\min}\le d_{\max}\le(1+c^+-\alpha)\mu$ gives the two-sided expander predicate of [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander) by [prop-expander-sync-prop-3-2](item-prop-expander-sync-prop-3-2).

[F5] Under countable choice, an expander with positive reference degree, $c^->-1$, $0<\alpha\le1/5$, and $32\alpha(1+4c^+-3c^-)(1+c^-)^{-2}\log((1+c^++\alpha)/(2\alpha))<1$ is globally synchronizing ([thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)).

[F6] The natural logarithm is strictly increasing and onto the real line, hence unbounded, and $\log x/x^r\to0$ for every $r>0$ as $x\to\infty$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

## Proof

**Given:** The parameters and choice hypothesis in the Statement.

**Goal:** Prove quantitative synchrony with sound, slack expansion parameters.

1.1 Put $\delta=(\gamma-1-\varepsilon)/2>0$ and $\beta=1+\varepsilon+\delta=(\gamma+1+\varepsilon)/2<\gamma$. By [F1], the $a,b$ in the Statement exist uniquely on the specified branches and satisfy $\gamma I(a)=\gamma I(b)=\beta$. For $X\sim\operatorname{Bin}(n-1,p)$, write $f_j=\mathbb P(X=j)$. At $k_-=\lfloor a\mu\rfloor$ and $k_+=\lceil b\mu\rceil$, [F2] gives $f_{k_\pm}=O(n^{-\beta}/\sqrt{\log n})$. For $1\le j\le k_-$ the ratio $f_{j-1}/f_j=j(1-p)/((n-j)p)$ is at most a fixed $\rho_-<1$ eventually, since its maximum tends to $a<1$. For $k_+\le j<n-1$, $f_{j+1}/f_j=(n-1-j)p/((j+1)(1-p))$ is at most a fixed $\rho_+<1$, since its maximum tends to $1/b<1$. Summing the two geometric bounds gives $\mathbb P(X\le k_-)+\mathbb P(X\ge k_+)=O(n^{-\beta}/\sqrt{\log n})$. [F1, F2, given, choose, algebra]

2.1 For any finite family of events, its union indicator is at most the sum of their indicators. Thus [F2] and step 1.1 give $\mathbb P(d_{\min}\le k_-\text{ or }d_{\max}\ge k_+)=O(n^{1-\beta}/\sqrt{\log n})=O(n^{-\varepsilon})$. On its complement $d_{\min}>a\mu$ and $d_{\max}<b\mu$, with no integer rounding loss. By [F3] the adjacency norm is below $\alpha\mu$ except with probability $2n^{-\gamma}=O(n^{-\varepsilon})$. No independence between these three exceptional events is required. [F1, F2, F3, step 1.1, algebra]

3.1 Set $\widetilde c^-=a/2-1>-1$, $\widetilde c^+=b$. By [F6], eventually $0<\alpha\le\min\{a/2,1/5\}$. On the good event from step 2.1, $(1+\widetilde c^-+\alpha)\mu\le a\mu<d_{\min}$ and $d_{\max}<b\mu\le(1+\widetilde c^+-\alpha)\mu$. Hence [F4] gives the stated expander. Its reference degree $\mu$ is positive. The coefficient $32(1+4\widetilde c^+-3\widetilde c^-)/(1+\widetilde c^-)^2$ is a fixed positive constant. For $0<\alpha\le1$, $\log((1+b+\alpha)/(2\alpha))\le\log((b+2)/2)+\log(1/\alpha)$; [F6] implies $\alpha\log(1/\alpha)\to0$. Thus the strict numerical hypothesis in [F5] holds eventually. [F4, F5, F6, step 2.1, algebra]

4.1 Increase the cutoff to include all supplier cutoffs and the inequalities of step 3.1. Then [F5] gives global synchrony on the same good event. Step 2.1 bounds its complement by $Cn^{-\varepsilon}$ for a constant depending only on the fixed parameters. This proves the complete claimed probability bound, and hence also the weaker $C(\log n)^4n^{-\varepsilon}$ bound for large $n$. All input estimates are independent of the refuted shifted-root proposition. [F3, F5, step 2.1, step 3.1, algebra] ∎
