---
title: Extremal-degree asymptotics near connectivity
status: draft
research_item: rem-expander-sync-extremal-degree-asymptotics
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 31–32, Section 6, degree asymptotics and equation (6.3)
      statement: For fixed $\gamma>1$ and $p=\gamma\log n/n$, the article reports the
        stated minimum- and maximum-degree asymptotics with high probability and
        defines the constants through equation (6.3).
      hypotheses: The graph is $G(n,p)$ with fixed $\gamma>1$ and $p=\gamma\log n/n$,
        as $n$ tends to infinity.
      reading_limits: The indicated passages of the supplied article text were
        inspected for attribution. The article attributes the degree result to
        Bollobás [9, Exercise 3.4]; that book was not independently read. The
        article is not used as proof of the result here.
---

PDF p. 31: ` Section 6, citation to [9, Exercise 3.4] `; PDF p. 32: ` Section 6, equation (6.3) and preceding degree asymptotics `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [prop-expander-prereq-logarithmic-extreme-degrees](item-prop-expander-prereq-logarithmic-extreme-degrees)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)


## Statement

Fix $\gamma>1$ and put $p=\gamma\log n/n$. For all sufficiently large $n$, let $G(n,p)$ be the random simple graph on $[n]=\{1,\ldots,n\}$ in which each possible edge is present independently with probability $p$. The degree $d(v)$ is the number of edges incident to $v$; write $d_{\min}=\min_v d(v)$ and $d_{\max}=\max_v d(v)$. Let $h(c)=(1+c)\log(1+c)-c$ for $c>-1$, and let $c^-(\gamma)\in(-1,0)$ and $c^+(\gamma)>0$ be the unique roots of $\gamma h(c)=1$ in their respective intervals. Then, with high probability,

$$d_{\min}=(1+o(1))(1+c^-(\gamma))pn,\qquad d_{\max}=(1+o(1))(1+c^+(\gamma))pn.$$

Here the $o(1)$ terms can be taken as deterministic error bounds tending to zero: there is a deterministic sequence $\delta_n\downarrow0$ such that the absolute relative errors in both displayed formulas are at most $\delta_n$ with probability tending to one. High probability means that this probability tends to one as $n\to\infty$.

## Statement references

[def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-rate-function](item-def-expander-sync-rate-function)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

## Facts & Assumptions

[F1] For the stated graph sequence, if $I(a)=a\log a-a+1$ for $a>0$ and $a_-\in(0,1)$ and $a_+>1$ are the unique solutions of $\gamma I(a)=1$, then $d_{\min}/(pn)\to a_-$ and $d_{\max}/(pn)\to a_+$ jointly in probability: for each $\varepsilon>0$, the probability that either normalized degree differs from its limit by more than $\varepsilon$ tends to zero ([prop-expander-prereq-logarithmic-extreme-degrees](item-prop-expander-prereq-logarithmic-extreme-degrees)).

[F2] For $\gamma>1$, the roots $c^-(\gamma)\in(-1,0)$ and $c^+(\gamma)>0$ exist uniquely as stated ([def-expander-sync-rate-function](item-def-expander-sync-rate-function)).

[F3] High probability and deterministic $o(1)$ are limits along the integer index $n$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi), [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

## Proof

**Given:** Fixed $\gamma>1$ and the graph sequence in the Statement.

**Goal:** Establish both displayed relative asymptotics simultaneously with high probability.

1.1 For every $c>-1$, direct substitution gives $h(c)=I(1+c)$. The change of variable $a=1+c$ maps $(-1,0)$ to $(0,1)$ and $(0,\infty)$ to $(1,\infty)$. By the root uniqueness in [F1] and [F2], $a_-=1+c^-(\gamma)$ and $a_+=1+c^+(\gamma)$; both are positive. Consequently [F1] gives joint convergence in probability of $d_{\min}/(a_-pn)$ and $d_{\max}/(a_+pn)$ to $1$. [F1, F2, algebra]

2.1 Let $R_n$ be the maximum of the two absolute relative errors in step 1.1. For each positive integer $k$, convergence in probability gives an integer $N_k$ such that $\mathbb P(R_n>1/k)<1/k$ for all $n\ge N_k$. Choose the $N_k$ strictly increasing, and, for $N_k\le n<N_{k+1}$, set $\delta_n=1/k$; choose any positive initial values for the finitely many earlier indices. Then $\delta_n\to0$ and $\mathbb P(R_n>\delta_n)\to0$. By [F3], both displayed estimates therefore hold simultaneously with high probability, with deterministic relative error bound $\delta_n$. [F3, step 1.1, choose] ∎

## Source notes

The article states these asymptotics in Section 6 and attributes them to Bollobás [9, Exercise 3.4]. The argument above uses the separately supplied degree proposition; the article citation records attribution only.
