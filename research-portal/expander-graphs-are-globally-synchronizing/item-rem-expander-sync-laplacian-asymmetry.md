---
title: Failure of symmetric Laplacian control near threshold
status: draft
research_item: rem-expander-sync-laplacian-asymmetry
dependency_level: 8
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 6 and 8, expansion motivation; p. 32, Figure 3 and following
        paragraph
      statement: The article motivates asymmetric Laplacian bounds and states that a
        symmetric norm bound in the indicated range requires a constant greater
        than one and would not imply connectivity.
      hypotheses: The stated random-graph range has fixed gamma greater than 1 and p =
        gamma log(n)/n; the threshold is displayed approximately.
      reading_limits: The cited passages in the supplied article text were inspected
        for attribution. The argument below uses the declared mathematical
        suppliers, not the article as a proof premise.
---

PDF p. 6: ` Section 1 expansion motivation `; PDF p. 8: ` Section 1.4 asymmetric expansion `; PDF p. 32: ` Figure 3 and following prose `

## Prerequisites

- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [prop-expander-sync-rate-root-properties](item-prop-expander-sync-rate-root-properties)
- [rem-expander-sync-extremal-degree-asymptotics](item-rem-expander-sync-extremal-degree-asymptotics)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)


## Statement

Fix $\gamma>1$, put $p=\gamma\log n/n$ and $d^*=pn$, and let $G(n,p)$ be the loop-free random graph on $[n]$ in which distinct edges occur independently with probability $p$. Let $A$ be its adjacency matrix, $D$ its diagonal degree matrix, $L=D-A$, $J$ the all-ones matrix, and $\Delta_L=L-d^*I+(d^*/n)J$ as in [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices). The norm is the Euclidean induced operator norm.

Let $h(c)=(1+c)\log(1+c)-c$ for $c>-1$. For $\gamma>1$, write $c^-(\gamma)\in(-1,0)$ and $c^+(\gamma)>0$ for the two roots of $h(c)=1/\gamma$, as in [def-expander-sync-rate-function](item-def-expander-sync-rate-function). They satisfy $c^+(\gamma)>-c^-(\gamma)$, with endpoint values $c^-(1)=-1$ and $c^+(1)=e-1$. The upper root equals $1$ exactly at $\gamma_0=1/(2\log 2-1)$, approximately $2.5886$.

For every fixed $c<c^+(\gamma)$, the probability of $\|\Delta_L\|\le cd^*$ tends to zero as $n\to\infty$. In particular, for $1<\gamma<2.5886$, any fixed constant $c$ for which this symmetric norm bound holds with probability tending to one must exceed $1$. Such a bound with $c>1$ does not by itself imply connectivity. These asymmetric degree deviations motivate separate lower and upper Laplacian bounds.

## Facts & Assumptions

[F1] The centered matrix has $\Delta_L=L-d^*I+(d^*/n)J$; in the loop-free graph $L_{xx}=d(x)$, the degree of vertex $x$ ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)).

[F2] For fixed $\gamma>1$, the maximum degree satisfies $d_{\max}/d^*\to1+c^+(\gamma)$ in probability ([rem-expander-sync-extremal-degree-asymptotics](item-rem-expander-sync-extremal-degree-asymptotics)).

[F3] The two roots are unique on their respective branches; $c^+$ is strictly decreasing, $c^+>-c^-$, and their endpoint values are $e-1$ and $-1$ at $\gamma=1$ ([def-expander-sync-rate-function](item-def-expander-sync-rate-function), [prop-expander-sync-rate-root-properties](item-prop-expander-sync-rate-root-properties)).

[F4] The induced operator norm is nonnegative. For $b\ge0$, a real symmetric matrix with operator norm at most $b$ has every diagonal entry at most $b$ ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

[F5] The natural logarithm satisfies $\log 2=\int_1^2 dt/t$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)).

[F6] A graph is connected when its vertex set is nonempty and every two vertices are joined by a path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

## Proof

**Given:** Fixed $\gamma>1$ and the graph sequence in the Statement.

**Goal:** Establish the root threshold, the probabilistic obstruction to a symmetric norm bound, and the connectivity limitation.

1.1 Direct substitution gives $h(1)=2\log 2-1>0$. By the upper-branch uniqueness and strict decrease in [F3], $c^+(\gamma)=1$ exactly when $\gamma=\gamma_0=1/(2\log 2-1)$, and $c^+(\gamma)>1$ when $\gamma<\gamma_0$. To locate the threshold, substitute $t=(1+x)/(1-x)$ in [F5] and expand the finite geometric sum: $\log 2=2\sum_{k=0}^{4}1/((2k+1)3^{2k+1})+R$, where $0<R<9/(4\cdot11\cdot3^{11})$. Thus $\log 2<189094979/272806380<0.69315$, and in fact $2.5886(2\log 2-1)<97427117861/97430850000<1$. Hence $2.5886<\gamma_0$; the stated decimal is an approximation to $\gamma_0$. The asymmetry and endpoint assertions are [F3]. [F3, F5, algebra]

2.1 For $n\ge2$, $d^*=\gamma\log n>0$. If $c<0$, then $cd^*<0\le\|\Delta_L\|$ by [F4], so the norm-bound event is empty and has probability zero. Now suppose $0\le c<c^+(\gamma)$, so $b=cd^*\ge0$. By [F1], the diagonal entry at a maximum-degree vertex is $d_{\max}-d^*+d^*/n$. If $\|\Delta_L\|\le cd^*$, [F4] applies with this $b$ and implies $d_{\max}/d^*-1+1/n\le c$. By [F2], the left side converges in probability to $c^+(\gamma)$. Therefore, for each fixed $c<c^+(\gamma)$, the probability of the norm bound tends to zero. In the stated range, step 1.1 gives $c^+(\gamma)>1$, so a fixed constant yielding the bound with probability tending to one must be greater than $1$. [F1, F2, F4, step 1.1]

3.1 The norm bound alone does not imply connectivity when $c>1$: for the empty graph on $n\ge2$ vertices and any $d^*>0$, $L=0$ and $\Delta_L=-d^*I+(d^*/n)J$. This matrix has eigenvalue $0$ on constant vectors and $-d^*$ on their orthogonal complement, so its norm is $d^*$. Two distinct vertices exist because $n\ge2$, and no path joins them because the graph has no edges. By [F6], the graph is disconnected. Thus separate lower and upper bounds can convey information that a symmetric bound with such a constant does not. [F1, F4, F6, algebra] ∎

## Source notes

The asymmetric-expansion motivation, Figure 3 and the original norm-bound observation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 6, 8 and 32. The proof above gives a fixed-constant, high-probability interpretation using the independently supplied degree result; it does not assert an exact limiting Laplacian norm.
