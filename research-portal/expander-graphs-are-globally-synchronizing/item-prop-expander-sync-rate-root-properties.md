---
title: Monotonicity, endpoints, and asymmetry of the rate roots
status: draft
research_item: prop-expander-sync-rate-root-properties
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 32, equation (6.3), following analysis and Figure 3
      statement: The article states the branch geometry, monotonicity, limits,
        endpoint values and asymmetry of the roots of h(c)=1/gamma.
      hypotheses: Real gamma>1 for the two roots and their strict asymmetry; the
        displayed endpoint values use the extensions at gamma=1.
      reading_limits: The supplied PDF page 32 and its extracted text were inspected.
        This citation attributes the claim; the proof below uses the separately
        declared mathematical suppliers.
---

PDF p. 32: ` Analysis following (6.3); Figure 3 `

## Prerequisites

- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry)
- [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)
- [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms)
- [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables)


## Statement

Let $h(c)=(1+c)\log(1+c)-c$ for $c>-1$, and let $c^-(\gamma)$ and $c^+(\gamma)$ be the negative and positive roots of $h(c)=1/\gamma$ for $\gamma>1$, with the endpoint assignments in [def-expander-sync-rate-function](item-def-expander-sync-rate-function). Then $h$ strictly decreases from the limit $1$ to $0$ on $(-1,0]$ and strictly increases from $0$ to infinity on $[0,\infty)$. For each $\gamma>1$ there are exactly two roots, and both root functions are smooth: $c^-$ strictly increases and $c^+$ strictly decreases. Both tend to $0$ as $\gamma\to\infty$; at $\gamma=1$, $c^-(1)=-1$ and $c^+(1)=e-1$. Finally, $c^+(\gamma)>-c^-(\gamma)$ for every $\gamma>1$.

## Facts & Assumptions

[F1] [def-expander-sync-rate-function](item-def-expander-sync-rate-function) defines the natural logarithm, $e$, $h$, the two designated roots and their endpoint assignments. It identifies $h(c)=I(1+c)$, where $I(a)=a\log a-a+1$.

[F2] [lem-author-2bcd11f9e275-entropy-branch-geometry](item-lem-author-2bcd11f9e275-entropy-branch-geometry) gives $I(1)=0$, $I'(a)=\log a$, the endpoint limits $I(a)\to1$ as $a\downarrow0$ and $I(a)\to\infty$ as $a\to\infty$, and strict decrease on $(0,1)$ and increase on $(1,\infty)$ with respective ranges $(0,1)$ and $(0,\infty)$.

[F3] [lem-author-2bcd11f9e275-entropy-inverse-branches](item-lem-author-2bcd11f9e275-entropy-inverse-branches) gives smooth inverse branches $a_-:(0,1)\to(0,1)$ and $a_+:(0,\infty)\to(1,\infty)$, with $a_-'(t)<0<a_+'(t)$. Taking $s=0$ and $t=1/\gamma\in(0,1)$ in its solution formula and using the designated roots in [def-expander-sync-rate-function](item-def-expander-sync-rate-function) gives $c^\pm(\gamma)=a_\pm(1/\gamma)-1$ for every $\gamma>1$.

[F4] The natural logarithm is strictly increasing, has $\log1=0$, and obeys $\log u+\log v=\log(uv)$ for positive $u,v$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)). A differentiable function with strictly negative derivative on an interval is strictly decreasing there ([math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)).

[F5] [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules) supplies the sum, product, quotient and chain rules for real functions differentiable at the indicated points, with nonzero denominators for quotients and compositions defined near those points. It also gives the positive-integer power rule and differentiability implies continuity. Constant functions have derivative zero directly from their zero difference quotients.

[F6] By [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms) and [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables), a scalar function on an open real interval is smooth when its derivatives of every finite order exist and are continuous.

## Proof

**Given:** Real $\gamma>1$, with $h$ and the root branches as in the Statement.

**Goal:** Prove the stated branch geometry, root properties, endpoint values and strict asymmetry.

1.1 Substitute $a=1+c$ in F2. This gives the stated monotonicity and ranges of $h$, with $1$ the limit at the excluded endpoint $c=-1$. Since $0<1/\gamma<1$, the two ranges and strict monotonicity give exactly one root in each of $(-1,0)$ and $(0,\infty)$ and no others. [F1, F2]

1.2 For $-1<x<1$ set $D(x)=h(x)-h(-x)=I(1+x)-I(1-x)$. The affine inner maps have derivatives $1$ and $-1$ by F5. Thus F2 and F5 make $D$ differentiable, hence continuous, on $(-1,1)$, with $D'(x)=\log(1+x)+\log(1-x)=\log(1-x^2)<0$ for $0<x<1$. Here both logarithm arguments are positive and $0<1-x^2<1$, so F4 applies. Also $D(0)=0$. On every segment $[0,x]$ with $0<x<1$, F4 therefore gives $D(x)<D(0)$, or $h(x)<h(-x)$. [F1, F2, F4, F5]

1.3 Put $r(\gamma)=1/\gamma$ on $(1,\infty)$. F5 gives $r'(\gamma)=-1/\gamma^2$, and induction using its quotient and positive-integer power rules gives $r^{(k)}(\gamma)=(-1)^k k!/\gamma^{k+1}$ for every integer $k\ge0$. Every denominator is nonzero; each displayed derivative is itself differentiable by the same rules, hence continuous. Thus $r$ is smooth by F6, and $r((1,\infty))=(0,1)$ lies in the domains of both inverse branches in F3. [F3, F5, F6]

2.1 Fix either smooth branch $a=a_\pm$. For each integer $j\ge0$, F3 and F5 give $(a^{(j)}\circ r)'=(a^{(j+1)}\circ r)r'$. Every factor $a^{(j)}\circ r$ is therefore differentiable, as is every derivative $r^{(\ell)}$. Starting with $a\circ r$, induction using F5 expresses every iterated derivative as a finite sum of constant multiples of finite products of these factors: differentiating a factor of the first type replaces it by $(a^{(j+1)}\circ r)r'$, and differentiating a factor of the second type replaces it by $r^{(\ell+1)}$. Such sums and products remain differentiable and hence continuous by F5. Consequently $a\circ r$ and $a\circ r-1$ are smooth by F6. F1 and F3 identify the latter functions with $c^\pm$. [F1, F3, F5, F6, step 1.3]

2.2 Since $1/\gamma$ strictly decreases, the decreasing lower inverse makes $c^-$ strictly increase, while the increasing upper inverse makes $c^+$ strictly decrease. For any $0<\delta<1$, F2 gives $I(1-\delta)>0$ and $I(1+\delta)>0$. Once $1/\gamma$ is smaller than both values, branch monotonicity places $1-\delta<a_-(1/\gamma)<1<a_+(1/\gamma)<1+\delta$. Hence both roots tend to $0$. The assigned values at $\gamma=1$ are $-1$ and $e-1$; the definition's justification establishes their continuity as endpoint extensions. [F1, F2, F3, step 1.1]

3.1 Put $x=-c^-(\gamma)\in(0,1)$. Then $h(x)<h(-x)=1/\gamma=h(c^+(\gamma))$. Strict increase of $h$ on $[0,\infty)$ implies $x<c^+(\gamma)$, proving the asymmetry and completing the proof. [F1, step 1.1, step 1.2] ∎



## Source attribution

The notation and the original assertions are attributed to the article, PDF page 32, equation (6.3), its following analysis and Figure 3. The article is not used as a proof premise.
