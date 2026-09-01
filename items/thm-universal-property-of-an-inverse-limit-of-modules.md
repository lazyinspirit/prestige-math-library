---
id: thm-universal-property-of-an-inverse-limit-of-modules
kind: theorem
title: "Universal property of an inverse limit of modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-system-and-inverse-limit-of-modules]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.5"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 9.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.87"
      url: "https://stacks.math.columbia.edu/tag/03C9"
pipeline_run: null
---

## Statement

Let
$$M_1 \xleftarrow{\varphi_2} M_2 \xleftarrow{\varphi_3} M_3 \xleftarrow{} \cdots$$
be an inverse system of $R$-modules. For every $R$-module $N$, giving an
$R$-linear map
$$f \colon N \to \varprojlim M_n$$
is equivalent to giving a family of $R$-linear maps
$$f_n \colon N \to M_n$$
such that
$$\varphi_n \circ f_n = f_{n-1} \qquad (n \ge 2).$$

Equivalently, the projections
$$\pi_n \colon \varprojlim M_n \to M_n$$
form a terminal compatible cone.

## Facts & Assumptions

**Given:** An inverse system $(M_n,\varphi_n)$ of $R$-modules and an $R$-module $N$.

[L1] The inverse limit is the compatible-element submodule of the product
$$\varprojlim M_n = \left\{(x_n) \in \prod M_n : \varphi_n(x_n)=x_{n-1}\text{ for }n \ge 2\right\}$$
with projections to the coordinates ([[def-inverse-system-and-inverse-limit-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 If $f \colon N \to \varprojlim M_n$ is $R$-linear, define $$f_n := \pi_n \circ f \colon N \to M_n.$$ For each $x \in N$, the element $f(x)$ lies in the compatible submodule from [L1], so its coordinates satisfy $\varphi_n(f_n(x))=f_{n-1}(x)$ for every $n \ge 2$. Thus the family $(f_n)$ is compatible. [L1, given]

1.2 Conversely, let $(f_n)$ be a compatible family and define $$f(x) := (f_n(x))_{n \ge 1} \in \prod M_n.$$ Compatibility says $\varphi_n(f_n(x))=f_{n-1}(x)$ for every $n \ge 2$, so $f(x)$ actually lies in $\varprojlim M_n$. Since products and coordinate maps are $R$-linear, $f$ is $R$-linear. [L1, given, construct]

2.1 The two constructions are inverse to each other: starting from $f$ and then taking coordinates recovers each $f_n$, while starting from $(f_n)$ and then forming $f$ gives the unique map whose $n$th coordinate is $f_n$. [step 1.1, step 1.2]

3.1 Therefore maps $N \to \varprojlim M_n$ are in bijection with compatible families $(f_n)$, which is exactly the terminal-cone universal property. [step 2.1] ∎
