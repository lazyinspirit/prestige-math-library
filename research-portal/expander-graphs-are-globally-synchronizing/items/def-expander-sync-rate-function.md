---
id: def-expander-sync-rate-function
title: Degree large-deviation rate function and roots
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-natural-logarithm
  - math:def-real-exponential-function-and-e
  - prop-expander-prereq-entropy-root-geometry
dependency_roles:
  math:def-natural-logarithm: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  prop-expander-prereq-entropy-root-geometry: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 32, equation (6.3), following paragraph and Figure 3
      statement: The article defines h(x)=(1+x)log(1+x)-x and the negative and
        positive roots of gamma h(c)=1 for gamma>1; it extends the negative
        branch by -1 for 0<gamma<=1 and gives the positive endpoint e-1 at
        gamma=1.
      hypotheses: Real c>-1 and real gamma>1 for the two roots; the stated extensions
        concern the endpoint gamma=1 and the negative branch for 0<gamma<=1.
      reading_limits: The supplied article text around equation (6.3) and the
        following paragraph was inspected. This citation attributes the
        article's notation and claims; the justification below uses the separate
        mathematical suppliers.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 6
---

## Definition

Let $\log$ be the natural logarithm, the inverse of the exponential function on the positive reals, and write $e=\exp(1)$. For real $c>-1$, define $h(c)=(1+c)\log(1+c)-c$.

For real $\gamma>1$, let $c^-(\gamma)$ be the unique root of $\gamma h(c)=1$ in $(-1,0)$ and let $c^+(\gamma)$ be its unique root in $(0,\infty)$. Extend the negative branch by $c^-(\gamma)=-1$ for $0<\gamma\le1$, and set $c^+(1)=e-1$.

## Justification

The natural logarithm is defined on positive reals by [[math:def-natural-logarithm]], so the formula for $h$ is defined for every $c>-1$. In [[prop-expander-prereq-entropy-root-geometry]], $I(a)=a\log a-a+1$ has a lower inverse branch $a_-:(0,1)\to(0,1)$ and an upper inverse branch $a_+:(0,\infty)\to(1,\infty)$. Since $h(c)=I(1+c)$ and $1/\gamma\in(0,1)$ when $\gamma>1$, the two designated roots exist uniquely and equal $a_-(1/\gamma)-1$ and $a_+(1/\gamma)-1$.

As $\gamma\downarrow1$, the lower inverse tends to $0$: for every $0<\delta<1$, strict decrease of $I$ on $(0,1)$ and $I(\delta)<1$ place $a_-(t)$ below $\delta$ once $t<1$ is sufficiently close to $1$. Thus the assigned value $c^-(1)=-1$ makes the negative extension continuous at $1$; it is constant for $0<\gamma\le1$. The upper inverse is continuous at $1$, and $I(e)=e\log e-e+1=1$ because $\log(\exp 1)=1$. Its unique upper-branch value at $1$ is therefore $e$, so $c^+(1)=e-1$ is the continuous endpoint value.

## Source attribution

The notation and endpoint assignments are attributed to the article, PDF p. 32, equation (6.3), its following paragraph and Figure 3. The article is not used as the justification for the existence or uniqueness of the roots.
