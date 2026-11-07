---
id: thm-bourgain-watt-variant-double-large-sieve
kind: theorem
title: "Bourgain–Watt Variant Double Large Sieve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-holder-inequality-for-integrals, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jean Bourgain and Nigel Watt, “Decoupling for Perturbed Cones and the Mean Square of |ζ(1/2+it)|”"
      url: "https://arxiv.org/pdf/1505.04161v1"
      locator: "§5, equations (5.1)–(5.5)"
    - title: "Nigel Watt, “On the Mean Squared Modulus of a Dirichlet L-Function over a Short Segment of the Critical Line”"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/82909?download.pdf"
      locator: "The modified double-large-sieve use and related setup"
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$, let $X,Y$ be finite subsets of $\mathbb R^d$, and let $U_i,V_i>0$ satisfy $|x_i|<U_i$ for every $x\in X$ and $|y_i|<V_i$ for every $y\in Y$. Put $e(t)=\exp(2\pi i t)$ and
$$N_V(X)=\#\{(x,x')\in X^2:|x_i-x_i'|<V_i^{-1}\text{ for every }i\}.$$
Let $\Omega=\prod_{i=1}^d[-U_i,U_i]$, let $|\Omega|$ denote its Lebesgue measure, and for $q>2$ define the normalized norm
$$\|F\|_{L^q_\sharp(\Omega)} =\left(|\Omega|^{-1}\int_\Omega|F(u)|^q\,du\right)^{1/q}.$$
Then for every real $q>2$ there is $C_{q,d}>0$ such that
$$\left|\sum_{x\in X}\sum_{y\in Y}e(x\cdot y)\right| \le C_{q,d} \left(\prod_{i=1}^d(1+U_iV_i)\right)^{1/q} |X|^{1-2/q}N_V(X)^{1/q} \left\|\sum_{y\in Y}e(u\cdot y)\right\|_{L^q_\sharp(\Omega)}.$$


## Statement references

[Jean Bourgain and Nigel Watt, “Decoupling for Perturbed Cones and the Mean Square of |ζ(1/2+it)|”](https://arxiv.org/pdf/1505.04161v1)

[Nigel Watt, “On the Mean Squared Modulus of a Dirichlet L-Function over a Short Segment of the Critical Line”](https://www.impan.pl/shop/publication/transaction/download/product/82909?download.pdf)

## Facts & Assumptions

**Given:** Finite sets X,Y, positive coordinate bounds U_i,V_i and q>2 as stated.

## Proof status

Section 5 and equations (5.1)–(5.5) were inspected. The local proof still needs a complete reconstruction of the conditional-expectation comparison and its normalizations; the statement is retained as a source claim and remains escalated.
