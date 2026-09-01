---
id: def-hilbert-samuel-function-and-polynomial
kind: definition
title: "The Hilbert-Samuel function and eventual Hilbert-Samuel polynomial of a finite local module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-associated-graded-ring-and-module, def-composition-series-and-length-of-a-module, cor-length-is-additive-in-short-exact-sequences]
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
    - title: "Stacks Project, Definition 10.59.1"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §21"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Definition

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite
$R$-module, and let $I\subseteq\mathfrak m$ be an ideal of definition for $M$,
meaning that $M/I M$ has finite length. Every quotient below has finite length:
its finite $I$-adic filtration has factors that are finite quotients of finite
direct sums of $M/IM$. The **Hilbert-Samuel function** of $(M,I)$ is
$$
\chi_{I,M}(n):=\ell_R(M/I^{n+1}M)\qquad (n\ge0).
$$

The associated graded module is
$$
\operatorname{gr}_I(M)=\bigoplus_{n\ge0} I^nM/I^{n+1}M,
$$
and its homogeneous-piece lengths are
$$
\varphi_{I,M}(n):=\ell_R(I^nM/I^{n+1}M).
$$
They satisfy
$$
\chi_{I,M}(n)=\sum_{j=0}^n \varphi_{I,M}(j).
$$
This is repeated additivity of length in the finite filtration
$M\supseteq IM\supseteq\cdots\supseteq I^{n+1}M$.

When there is a polynomial $P_{I,M}(X)\in\mathbb Q[X]$ with
$$
\chi_{I,M}(n)=P_{I,M}(n)\qquad\text{for all sufficiently large }n,
$$
it is called the **Hilbert-Samuel polynomial** of $M$ with respect to $I$.
