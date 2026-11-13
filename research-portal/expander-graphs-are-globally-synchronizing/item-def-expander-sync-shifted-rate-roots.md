---
title: Shifted rate roots for quantitative expansion
status: published
research_item: def-expander-sync-shifted-rate-roots
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 36, Proposition 6.9, equations (6.7) and (6.8)
      statement: The article defines the negative and positive shifted roots by
        equations (6.7) and (6.8), respectively.
      hypotheses: Real parameters $0<\varepsilon<1$ and
        $1+\varepsilon<\gamma<1+\varepsilon^{-2}$; each logarithm is evaluated
        at a positive argument.
      reading_limits: The supplied article text at Proposition 6.9 and its equations
        was inspected for attribution. The article is not used to justify
        existence or uniqueness.
---

PDF p. 36: ` Proposition 6.9, equations (6.7), (6.8) `

## Prerequisites

- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)


## Definition

Let $h(x)=(1+x)\log(1+x)-x$ for $x>-1$, where $\log$ is the natural logarithm. For real parameters $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, define $c^-=c^-(\gamma,\varepsilon)$ to be the unique real $c<0$ satisfying $1+c-\varepsilon>0$ and $\gamma h(c-\varepsilon)=1+\varepsilon$. Define $c^+=c^+(\gamma,\varepsilon)$ to be the unique real $c>0$ satisfying $1+c+\varepsilon>0$ and $\gamma h(c+\varepsilon)=1+\varepsilon$.

Equivalently, the respective equations are $\gamma((1+c-\varepsilon)\log(1+c-\varepsilon)-(c-\varepsilon))=1+\varepsilon$ and $\gamma((1+c+\varepsilon)\log(1+c+\varepsilon)-(c+\varepsilon))=1+\varepsilon$.

## Definition references

[def-expander-sync-rate-function](item-def-expander-sync-rate-function)

[prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)

## Justification

The rate-function definition gives $h(x)=I(1+x)$, where $I(a)=a\log a-a+1$ for $a>0$ ([def-expander-sync-rate-function](item-def-expander-sync-rate-function), [prop-expander-prereq-entropy-root-geometry](item-prop-expander-prereq-entropy-root-geometry)). Put $t=(1+\varepsilon)/\gamma$. The hypotheses give $0<t<1$. The entropy-root proposition supplies exactly two positive solutions of $I(a)=t$: $a_-(t)\in(0,1)$ and $a_+(t)>1$. It also gives $a_-(t)-1+\varepsilon<0$ and $a_+(t)-1-\varepsilon>0$ under these parameter hypotheses.

For the first equation set $a=1+c-\varepsilon$. Its two admissible roots are $c=a_-(t)-1+\varepsilon$ and $c=a_+(t)-1+\varepsilon$. The first is negative by the supplied sign bound, while the second is positive because $a_+(t)>1$ and $\varepsilon>0$. Thus exactly one root is negative. For the second equation set $a=1+c+\varepsilon$. Its roots are $c=a_-(t)-1-\varepsilon$ and $c=a_+(t)-1-\varepsilon$. The first is negative because $a_-(t)<1$ and $\varepsilon>0$, while the second is positive by the supplied sign bound. Thus exactly one root is positive. The substitutions ensure that the logarithm arguments are positive.

## Source attribution

The notation and equations are attributed to Proposition 6.9, equations (6.7) and (6.8), of the cited article; the justification above uses the separate mathematical suppliers.
