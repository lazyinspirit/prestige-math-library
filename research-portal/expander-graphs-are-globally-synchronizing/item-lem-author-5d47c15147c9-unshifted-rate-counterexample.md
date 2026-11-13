---
title: The exact unshifted expansion event cannot have polynomial failure decay
status: draft
research_item: lem-author-5d47c15147c9-unshifted-rate-counterexample
dependency_level: 8
---

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [lem-author-5d47c15147c9-rare-degree-existence](item-lem-author-5d47c15147c9-rare-degree-existence)
- [lem-author-5d47c15147c9-unshifted-diagonal-obstruction](item-lem-author-5d47c15147c9-unshifted-diagonal-obstruction)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)


## Statement

Fix any $\gamma>1$ and the unshifted roots $c^-\in(-1,0)<c^+$ of $\gamma((1+c)\log(1+c)-c)=1$. Let $E_n$ be the event that $G(n,p)$ is an $(n,\mu,8/\sqrt\mu,c^-,c^+)$-expander, where $\mu=\gamma\log n$, $p=\mu/n$. There is $\kappa=\kappa(\gamma)>0$ such that for all sufficiently large integers $n$,
$$\mathbb P(E_n^c)\ge\frac{\kappa}{\sqrt{\log n}}.$$
Consequently no bound $\mathbb P(E_n^c)\le C(\log n)^4n^{-\varepsilon}$ can hold with fixed $C>0$ and $\varepsilon>0$. In particular $\gamma=2$, $\varepsilon=1/2$ is a counterexample under all original Theorem 6.2 parameter assumptions.

## Facts & Assumptions

[F1] The degree $k_n=\lceil(1+c^-)\mu-p\rceil-1$ has bounded rounding from the lower entropy root, and its occurrence forces $E_n^c$ ([lem-author-5d47c15147c9-unshifted-diagonal-obstruction](item-lem-author-5d47c15147c9-unshifted-diagonal-obstruction)).

[F2] At such a root, a degree-$k_n$ vertex exists with probability at least $\kappa/\sqrt{\log n}$ for some $\kappa>0$ ([lem-author-5d47c15147c9-rare-degree-existence](item-lem-author-5d47c15147c9-rare-degree-existence)).

[F3] For every $b>0$, $\log n/n^b\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

## Proof

**Given:** The fixed parameters and event in the Statement.

**Goal:** Obtain the lower bound and contradict the claimed rate.

1.1 By [F1], the event in [F2] is contained in $E_n^c$. Thus its probability lower bound proves the first displayed inequality. This uses the exact original centering and unshifted root, without any shifted-root assertion. [F1, F2, given]

2.1 For any fixed $\varepsilon>0$, $n^{\varepsilon}/(\log n)^{9/2}\to\infty$ by [F3], for example by applying it with $b=\varepsilon/9$ and taking the power $9/2$. Hence $\kappa/\sqrt{\log n}>C(\log n)^4n^{-\varepsilon}$ eventually for every fixed $C>0$. The choice $\varepsilon=1/2$, $\gamma=2$ satisfies $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$ because $3/2<2<5$; also $0<p<1$ eventually. Therefore this is a counterexample family under the complete original assumptions. It challenges the expansion probability only, not the separate synchrony event. [F3, step 1.1, algebra] ∎
