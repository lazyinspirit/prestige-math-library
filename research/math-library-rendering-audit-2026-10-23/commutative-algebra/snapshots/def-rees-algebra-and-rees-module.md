---
id: def-rees-algebra-and-rees-module
kind: definition
title: "The Rees algebra of an ideal and the Rees module of a filtered module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-associated-graded-ring-and-module, def-graded-ring-and-graded-module]
aliases: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Definition 10.70.1"
      url: "https://stacks.math.columbia.edu/tag/052P"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Exercise (20.16)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Definition

Let $R$ be a commutative ring and $I\subset R$ an ideal. The **Rees algebra** of
$I$ is the graded subring
$$ \mathcal R(I):=\bigoplus_{n\ge0} I^nt^n\subset R[t]. $$
Equivalently, it is the graded ring whose degree-$n$ piece is $I^n$.

Let $M$ be an $R$-module equipped with a descending filtration
$$ M=M_0\supseteq M_1\supseteq M_2\supseteq\cdots $$
satisfying $IM_n\subseteq M_{n+1}$ for every $n\ge0$. The **Rees module** of
this filtration is
$$ \mathcal R(M_\bullet):=\bigoplus_{n\ge0} M_nt^n\subset M[t], $$
viewed as a graded $\mathcal R(I)$-module.

For the $I$-adic filtration $M_n=I^nM$, the quotient
$$ \mathcal R(M_\bullet)/I\mathcal R(M_\bullet) $$
is naturally $\operatorname{gr}_I(M)$.
