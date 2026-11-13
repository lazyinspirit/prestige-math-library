---
title: Cubic estimates used for the order parameter bootstrap
status: draft
research_item: lem-expander-sync-order-cubic
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 15–16, proof of Lemma 2.5, equations (2.11) and (2.12)
      statement: The article derives the displayed cubic and discriminant and uses a
        0.431 lower bound for the squared first order parameter.
      hypotheses: The article works with a stable state on a connected expander, with
        nonnegative expansion parameter and the preceding phase convention; the
        bootstrap assumes alpha at most 1/5.
      reading_limits: The supplied extracted text at the cited proof was inspected.
        This citation attributes the article's argument; the proof below uses
        the stated local suppliers and direct calculations.
---

PDF p. 15: ` Proof of Lemma 2.5, equation (2.11) `; PDF p. 16: ` Proof of Lemma 2.5, equation (2.12) `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)
- [cor-expander-sync-cor-2-2](item-cor-expander-sync-cor-2-2)
- [cor-expander-sync-cor-2-4](item-cor-expander-sync-cor-2-4)
- [def-expander-prereq-polynomial-root-certificates](item-def-expander-prereq-polynomial-root-certificates)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)
- [math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, possibly with loops, with $n=|V|>0$ and symmetric binary adjacency matrix $A$. Let $d^*\ge0$ and $0\le\alpha\le1/5$, and suppose $\|A-(d^*/n)J\|\le\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Put $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$ and rotate all phases together so that $\rho_1$ is real and nonnegative. Set $X=\rho_1^2$ and, for $x>0$, $f(x,\alpha)=2x+4\alpha-1-(1-2\alpha^2/x)^2$.

Then $X>0$, $2\alpha^2/X<1$, $f(X,\alpha)\ge0$, and $X>0.431$. For $x>0$, $f(x,\alpha)=0$ is equivalent to $P_\alpha(x)=0$, where $P_\alpha(x)=x^3+(2\alpha-1)x^2+2\alpha^2x-2\alpha^4$. Its discriminant, defined by the coefficient formula in [def-expander-prereq-polynomial-root-certificates](item-def-expander-prereq-polynomial-root-certificates), is $-4\alpha^4(27\alpha^4+20\alpha^3+10\alpha^2-8\alpha+1)$. It is negative for $0<\alpha\le0.2055$ and zero at $\alpha=0$. For $0<\alpha\le1/5$, the cubic has exactly one real root; at $\alpha=0$ its distinct real roots are $0$ and $1$, while $f(\cdot,0)$ has the unique positive root $1$. Also $f(0.431,\alpha)<0$ throughout $0\le\alpha\le1/5$.

## Facts & Assumptions

[F1] Under the stated graph and stability hypotheses, $X\ge(1+|\rho_2|^2)/2-2\alpha$; the phase rotation preserves the moduli of the order parameters ([lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1), [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)).

[F2] For $\alpha<1/4$, the normalized $\rho_1$ is positive; when it is positive, $|\rho_2|\ge1-2\alpha^2/X$ ([cor-expander-sync-cor-2-2](item-cor-expander-sync-cor-2-2), [cor-expander-sync-cor-2-4](item-cor-expander-sync-cor-2-4)).

[F3] Polynomials are continuous, and the intermediate value theorem and derivative monotonicity criterion apply on real intervals under their stated hypotheses ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions), [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value), [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)). The coefficient formula for the cubic discriminant is given in [def-expander-prereq-polynomial-root-certificates](item-def-expander-prereq-polynomial-root-certificates).

## Proof

**Given:** The graph, stable state, normalization, and parameter range in the Statement, under countable choice.

**Goal:** Establish the order-parameter estimates and the stated polynomial assertions.

1.1 By [F2], $X>0$. If $X\le2\alpha^2$, then [F1] gives $2\alpha^2\ge X\ge1/2-2\alpha$. But $2\alpha^2+2\alpha\le2/25+2/5=12/25<1/2$, a contradiction. Thus $1-2\alpha^2/X>0$. Squaring the lower bound in [F2] is therefore valid; substituting it in [F1] gives $2X+4\alpha-1\ge(1-2\alpha^2/X)^2$, or $f(X,\alpha)\ge0$. [F1, F2, given, algebra]

1.2 Multiplication by $x^2/2>0$ gives $x^2f(x,\alpha)/2=P_\alpha(x)$ for $x>0$. Substitution of the coefficients of $P_\alpha$ into the discriminant formula in [F3] gives the displayed expression. Write $q(a)=27a^4+20a^3+10a^2-8a+1$. For $0\le a\le411/2000<21/100$, $q'(a)\le108(21/100)^3+60(21/100)^2+20(21/100)-8<0$. Hence $q(a)\ge q(411/2000)=327454507/16000000000000>0$ by [F3]. The discriminant therefore has the asserted signs. [F3, given, algebra]

2.1 For $0<\alpha\le1/5$, $P_\alpha(0)=-2\alpha^4<0$ and $P_\alpha(x)\to+\infty$ as $x\to+\infty$, so [F3] gives a positive real root $r$. Divide by $x-r$ to write $P_\alpha(x)=(x-r)(x^2+bx+c)$ with real $b,c$. Direct expansion of the discriminant formula gives $\Delta=(b^2-4c)(r^2+br+c)^2$. Since step 1.2 gives $\Delta<0$, $b^2-4c<0$, so the quadratic has no real root by completing the square. Thus $r$ is the unique real root. At $\alpha=0$, $P_0(x)=x^2(x-1)$ and $f(x,0)=2x-2$ for $x>0$, giving the stated endpoint roots. [F3, step 1.2, given, algebra]

3.1 Put $u=431/1000$. For $0\le a\le1/5$, $1-2a^2/u\ge1-(2/25)/u>0$, so $\partial f(u,a)/\partial a=4+(8a/u)(1-2a^2/u)>0$. By [F3], $f(u,a)\le f(u,1/5)=2P_{1/5}(u)/u^2<0$, because $P_{1/5}(u)=-113609/1000000000$. For $a>0$, step 2.1 and the intermediate value theorem imply that $P_a$ is negative to the left of its unique root: otherwise continuity would produce another root between that point and $u$ or between $u$ and the existing root. Since $f(X,a)\ge0$ and $f(u,a)<0$, $X$ lies to the right of $u$. For $a=0$, step 1.1 gives $f(X,0)=2X-2\ge0$, so $X\ge1>u$. This proves all claims. [F3, step 1.1, step 1.2, step 2.1, given, algebra] ∎

## Source notes

The cited article states that the discriminant is strictly negative for $\alpha<0.2055$. At the allowed endpoint $\alpha=0$ the displayed discriminant is zero. The proof above treats that endpoint separately; this correction does not by itself refute the order-parameter conclusion.
