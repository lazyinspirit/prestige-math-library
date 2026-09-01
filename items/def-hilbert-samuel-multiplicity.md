---
id: def-hilbert-samuel-multiplicity
kind: definition
title: "Hilbert-Samuel multiplicity as the factorial-scaled leading coefficient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-existence-of-hilbert-samuel-polynomial]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Stacks Project, Definition 10.59.6 and Lemma 10.59.7"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §21"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Definition

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite
$R$-module, and let $I$ be an ideal of definition for $M$.

If $M=0$, define
$$
e_I(M):=0.
$$

If $M\neq0$, let $P_{I,M}$ be the eventual Hilbert-Samuel polynomial from
[[thm-existence-of-hilbert-samuel-polynomial]], and let $d=\deg P_{I,M}$.
Because $I\subseteq\mathfrak m$ and $M\neq0$, Nakayama's lemma makes
$M/I^{n+1}M$ nonzero for every $n$, so $P_{I,M}$ is not the zero polynomial
and $d$ is defined.

The **Hilbert-Samuel multiplicity** of $M$ with respect to $I$ is
$$
e_I(M):=d!\cdot(\text{leading coefficient of }P_{I,M}).
$$

Equivalently, when $M\neq0$ and
$$
P_{I,M}(n)=\frac{e_I(M)}{d!}n^d+\text{lower-degree terms},
$$
then $e_I(M)$ is the integer scaling the top term.
