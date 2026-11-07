---
id: def-milnor-boundary-map-for-a-discrete-valuation
kind: definition
title: "Milnor residue boundary for a discrete valuation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-milnor-k-group-of-a-field
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-uniformising-parameter
  - def-valuation-on-a-field
  - def-valuation-ring
justified_by:
  - lem-milnor-residue-specialization-and-principal-unit-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapter IX, §2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Printed pp. 286–290, formulas (2.1)–(2.3) and Proposition (2.2)."
    - title: "Charles Weibel, The K-book: An Introduction to Algebraic K-theory, Chapter III, §6"
      url: "https://www.math.rutgers.edu/~weibel/Kbook.html"
      locator: "Milnor K-theory residue for a discrete valuation and tame-symbol convention."
verification:
  precheck: n/a
---

## Definition

Let $F$ be a field with a surjective discrete valuation
$v:F^\times\to\mathbb Z$, valuation ring $\mathcal O_v$, maximal ideal
$\mathfrak m_v$, residue field $\kappa_v=\mathcal O_v/\mathfrak m_v$, and
uniformizer $\pi$. For $a_i\in F^\times$, write uniquely
$a_i=\pi^{r_i}u_i$ with $r_i=v(a_i)\in\mathbb Z$ and
$u_i\in\mathcal O_v^\times$. The **Milnor residue boundary** is the
homomorphism $\partial_v:K_n^M(F)\to K_{n-1}^M(\kappa_v)$ determined, for
$n\ge1$, by
$$ \partial_v\{a_1,\ldots,a_n\}=\sum_{\varnothing\ne J=\{j_1<\cdots<j_m\}\subseteq\{1,\ldots,n\}}(-1)^{n-(j_1+\cdots+j_m)}\Bigl(\prod_{j\in J}r_j\Bigr)\{\bar u_i:i\notin J\}\,\{-1,\ldots,-1\}_{m-1}, $$
where bars denote residues, an empty residue symbol is the multiplicative
identity in $K_0^M(\kappa_v)=\mathbb Z$, and
$\{-1,\ldots,-1\}_{m-1}$ has $m-1$ entries (and is $1$ when $m=1$).
This convention gives $\partial_v\{u_1,\ldots,u_n\}=0$ for units and
$\partial_v\{u_1,\ldots,u_{n-1},\pi\}=\{\bar u_1,\ldots,\bar u_{n-1}\}$.
For $n=1$, it is $\partial_v\{a\}=v(a)\in K_0^M(\kappa_v)=\mathbb Z$.
The resulting homomorphism is independent of the chosen uniformizer.

The degree-preserving leading-unit specialization associated with the same
choice of $\pi$ is the homomorphism
$s_{v,\pi}:K_n^M(F)\to K_n^M(\kappa_v)$ given on symbols by
$s_{v,\pi}\{a_1,\ldots,a_n\}=\{\bar u_1,\ldots,\bar u_n\}$.
It depends on $\pi$ in general; if every $a_i$ lies in a subfield on which
$v$ is trivial, then $s_{v,\pi}$ is the identity on that subfield's Milnor
$K$-group.

## Definition references

[[def-milnor-k-group-of-a-field]]

[[def-discrete-valuation]]

[[def-discrete-valuation-ring]]

[[def-uniformising-parameter]]

[[def-valuation-on-a-field]]

[[def-valuation-ring]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., IX §2](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Charles Weibel, *The K-book*, Chapter III §6](https://www.math.rutgers.edu/~weibel/Kbook.html)
