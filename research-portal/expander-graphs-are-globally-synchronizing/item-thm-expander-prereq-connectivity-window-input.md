---
title: Connectivity in the logarithmic random-graph window
status: published
research_item: thm-expander-prereq-connectivity-window-input
dependency_level: 2
sources:
  references:
    - title: Frieze and Karoński, Introduction to Random Graphs
      url: https://www.math.cmu.edu/~af1p/BOOK.pdf
      locator: §4.1, Theorem 4.1 and its independent-edge proof, printed pp. 67–69
        (PDF pp. 83–85)
      reading_limits: Read the extracted text of §4.1, Theorem 4.1 and its proof,
        printed pp. 67–69 (PDF pp. 83–85). Used only for method attribution; no
        fixed-edge conversion or external logical premise is imported.
---

## Prerequisites

- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [lem-author-c1dce5041ae4-isolated-factorial-moments](item-lem-author-c1dce5041ae4-isolated-factorial-moments)
- [lem-author-c1dce5041ae4-finite-sieve-zero-count](item-lem-author-c1dce5041ae4-finite-sieve-zero-count)
- [lem-author-c1dce5041ae4-small-component-sum](item-lem-author-c1dce5041ae4-small-component-sum)
- [lem-author-c1dce5041ae4-connectivity-monotone-coupling](item-lem-author-c1dce5041ae4-connectivity-monotone-coupling)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)
- [math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals)
- [math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:def-divergence-to-infinity](https://alphabetamath.cc/item/def-divergence-to-infinity)
- [math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)


## Statement

For $p=(\log n+c_n)/n\in[0,1]$, the connectivity probability for the simple independent-edge graph tends to zero if $c_n\to-\infty$, to $e^{-e^{-c}}$ if $c_n\to c\in\mathbb R$, and to one if $c_n\to+\infty$. This is a graph probability statement and supplies no monotonicity assertion about Kuramoto synchronization.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] The graph is $G(n,p)$ with independent possible edges ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] Every vertex belongs to its component, and distinct components have no connecting path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F3] All limits concern $n\to\infty$ and the specified sequences $c_n$ ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F4] The fixed-order factorial moments of the isolated-vertex count converge to $e^{-cr}$ when $c_n\to c$ ([lem-author-c1dce5041ae4-isolated-factorial-moments](item-lem-author-c1dce5041ae4-isolated-factorial-moments)).

[F5] If these factorial moments converge to $\lambda^r$, the zero-count probability converges to $e^{-\lambda}$ ([lem-author-c1dce5041ae4-finite-sieve-zero-count](item-lem-author-c1dce5041ae4-finite-sieve-zero-count)).

[F6] When $c_n$ is bounded the probability of a component with between two and half the vertices tends to zero ([lem-author-c1dce5041ae4-small-component-sum](item-lem-author-c1dce5041ae4-small-component-sum)).

[F7] For fixed $n$, connectivity probability is nondecreasing in the edge probability ([lem-author-c1dce5041ae4-connectivity-monotone-coupling](item-lem-author-c1dce5041ae4-connectivity-monotone-coupling)).

[F8] A finite probability space has nonnegative outcome weights summing to one, and an event's probability is the sum of its weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F9] The natural logarithm is strictly increasing on $(0,\infty)$, maps this interval onto $\mathbb R$, and satisfies $\log 1=0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F10] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F11] The exponential is positive, tends to zero at $-\infty$, and tends to $+\infty$ at $+\infty$ ([math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)).

[F12] The real exponential is continuous, in particular at zero ([math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals), its first fact).

[F13] Limits of convergent real sequences respect sums, differences and scalar multiples ([math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)).

[F14] The natural logarithm is inverse to the real exponential: $\exp(\log x)=x$ for $x>0$ and $\log(\exp t)=t$ for real $t$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F15] For a real sequence $(x_n)$, $x_n\to+\infty$ means that for every real $M$ one has $x_n>M$ eventually; $x_n\to-\infty$ means that for every real $M$ one has $x_n<M$ eventually ([math:def-divergence-to-infinity](https://alphabetamath.cc/item/def-divergence-to-infinity)).

[F16] For a real function on a domain unbounded above, $f(C)\to L$ as $C\to+\infty$ means that for every $\eta>0$ there is a real $M$ such that $|f(C)-L|<\eta$ whenever $C>M$ in the domain. For a domain unbounded below, the corresponding definition at $-\infty$ uses $C<M$. Infinite limits replace the bound on $|f(C)-L|$ by the requirement that $f(C)$ eventually exceed every real threshold or lie below every real threshold, respectively ([math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity)).

## Proof

**Proof technique:** direct.

1.1 Suppose $c_n\to c\in\mathbb R$ and let $X$ count isolated vertices. Applying [F4] and then [F5] with $\lambda=e^{-c}>0$ gives $\mathbb P(X=0)\to e^{-e^{-c}}$. For $n\ge2$ a connected graph has no isolated vertex. If a graph is disconnected but has no isolated vertex, its smallest component has order between 2 and $n/2$: there are at least two nonempty components, whose sizes sum to $n$. Let $A$ be the connectivity event, $B=\{X=0\}$, and $D$ the event that a component has order between 2 and $n/2$. Then $A\subseteq B$ and $B\setminus A\subseteq D$. For the graph's outcome weights $w$, [F8] gives $0\le\mathbb P(B)-\mathbb P(A)=\sum_{\omega\in B\setminus A}w(\omega)\le\mathbb P(D)=o(1)$ by [F6], since convergence of $c_n$ implies eventual boundedness. Thus $\mathbb P(B)-\mathbb P(A)\to0$ by the convergence definition, and subtracting this null sequence from $\mathbb P(B)$ proves the finite-limit case by [F13], without converting from a fixed-edge model. [F1, F2, F3, F4, F5, F6, F8, F11, F13, algebra]

1.2 Put $L(C)=e^{-e^{-C}}$. The real-variable limits in this step have the meaning in [F16], with domain $\mathbb R$. As $C\to+\infty$, [F11] gives $-e^{-C}\to0$; continuity at zero from [F12] gives $L(C)\to e^0=1$, where $\exp(0)=\exp(\log 1)=1$ by [F9] and [F14]. As $C\to-\infty$, [F11] gives $e^{-C}\to+\infty$, so $-e^{-C}\to-\infty$ and a second application of [F11] gives $L(C)\to0$. To see the final implication directly, for any $\eta>0$ choose $T$ such that $t<T$ implies $e^t<\eta$; then choose $C$ sufficiently negative that $-e^{-C}<T$. These uses of composition are therefore justified at both ends. [F9, F11, F12, F14, F16, algebra]

2.1 Write $f_n(t)=\mathbb P(G(n,t)\text{ is connected})$. For fixed $C\in\mathbb R$, set $p_C=(\log n+C)/n$. By [F9], for any real $M$ there is an $x_M>0$ with $\log x_M=M$; for every integer $n>x_M$, strict increase gives $\log n>M$. Hence $\log n\to+\infty$ in the sense of [F15], and $p_C>0$ eventually. Also [F10] with $a=1$ and [F13] give $p_C\to0$, since $C/n\to0$: given $\eta>0$, $n>|C|/\eta$ implies $|C|/n<\eta$. Consequently $p_C\in[0,1]$ eventually and step 1.1 applies to this tail, giving $f_n(p_C)\to e^{-e^{-C}}$. [step 1.1, F1, F3, F9, F10, F13, F15, algebra]

3.1 By [F8], $0\le f_n(t)\le1$ for $t\in[0,1]$, since an event sums a subset of the nonnegative weights whose total is one. Fix $\varepsilon>0$. If $c_n\to+\infty$, choose a fixed $C$ with $L(C)>1-\varepsilon/2$ by step 1.2. By [F15], eventually $c_n>C$ and hence $p\ge p_C$, so [F7] and step 2.1 give $1\ge f_n(p)\ge f_n(p_C)>L(C)-\varepsilon/2>1-\varepsilon$. If $c_n\to-\infty$, choose a fixed $C$ with $L(C)<\varepsilon/2$. By [F15], eventually $c_n<C$ and hence $p\le p_C$, so $0\le f_n(p)\le f_n(p_C)<L(C)+\varepsilon/2<\varepsilon$. These are precisely convergence to one and zero. The given assumption $p\in[0,1]$ ensures that the graph exists in both regimes, and step 2.1 makes each comparison probability admissible eventually. [step 2.1, step 1.2, F1, F3, F7, F8, F15, F16, choose, algebra] ∎

## Source notes

The local proof follows the isolated-vertex/component decomposition in Frieze and Karoński, §4.1, printed pp. 67–69. The source states Theorem 4.1 first in the fixed-edge model and proves its independent-edge analogue. Here the argument stays in the independent-edge model throughout. The helper uses the deliberately weaker root-parent bound $k^{k-1}$ instead of the exact tree count $k^{k-2}$, and proves the needed zero-count limit directly by a finite sieve rather than importing the Poisson-limit theorem cited by the book. Five fully authored helpers precede this composition. No source statement is imported as a logical premise; the article under study is not used.
