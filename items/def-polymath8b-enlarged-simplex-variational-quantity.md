---
dependency_level: 2
id: def-polymath8b-enlarged-simplex-variational-quantity
kind: definition
title: "Polymath8b’s enlarged-simplex functionals M_{k,ε}"
status: draft
origin: pipeline
deps: [def-maynard-variational-quantity-mk, def-integrable-real-and-complex-functions-and-their-integrals, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-borel-and-lebesgue-measurable-function-on-rn, def-countable-choice, thm-lebesgue-measure-is-a-complete-measure, lem-polymath8b-l2-marginal-is-well-defined]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
---

## Definition

Work under the Axiom of Countable Choice for the complete Lebesgue-measure branch. For $k\ge2$ and $0<\epsilon<1$, define
$$ (1+\epsilon)R_k:=\{t\in[0,\infty)^k:t_1+\cdots+t_k\le1+\epsilon\},\qquad (1-\epsilon)R_{k-1}:=\{u\in[0,\infty)^{k-1}:u_1+\cdots+u_{k-1}\le1-\epsilon\}.$$
Let $\mathcal G_{k,\epsilon}$ consist of nonzero equivalence classes modulo equality almost everywhere of real Lebesgue-measurable functions $F$ on $\mathbb R^k$ that vanish almost everywhere outside $(1+\epsilon)R_k$ and satisfy $\int_{\mathbb R^k}|F|^2\,d\lambda_k<\infty$, where $\lambda_k$ is Euclidean Lebesgue measure. For each $F\in\mathcal G_{k,\epsilon}$ and $1\le i\le k$, let $G_{F,i}$ be the almost-everywhere-defined $L^2$ marginal whose representative is $\int_0^\infty F(t_1,\ldots,t_k)\,dt_i$ wherever the section integral exists. The local marginal lemma proves that this class is independent of the representative and that $G_{F,i}\in L^2(\mathbb R^{k-1})$.
Define
$$I_{k,\epsilon}(F):=\int_{\mathbb R^k}|F|^2\,d\lambda_k,$$
$$J_{k,i,1-\epsilon}(F):=\int_{(1-\epsilon)R_{k-1}}|G_{F,i}(t_{-i})|^2\,d\lambda_{k-1}(t_{-i}),$$
$$M_{k,\epsilon}:=\sup_{F\in\mathcal G_{k,\epsilon}}\frac{\sum_{i=1}^kJ_{k,i,1-\epsilon}(F)}{I_{k,\epsilon}(F)}.$$
The class is nonempty: the indicator of $[0,1/(2k)]^k$ is supported in $(1+\epsilon)R_k$ and has finite positive square integral. The marginal lemma makes every displayed $J_{k,i,1-\epsilon}(F)$ finite and independent of representatives.

## Definition references

[[def-maynard-variational-quantity-mk|Standard simplex functionals]]

[[def-integrable-real-and-complex-functions-and-their-integrals|Lebesgue integrability]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|Lebesgue measure]]

[[def-borel-and-lebesgue-measurable-function-on-rn|Measurable functions on Euclidean space]]

[[def-countable-choice|Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Complete Lebesgue measure under Countable Choice]]

[[lem-polymath8b-l2-marginal-is-well-defined|Well-defined $L^2$ marginals]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|Cauchy–Schwarz for $L^2$ functions]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini for $L^1$ functions]]
