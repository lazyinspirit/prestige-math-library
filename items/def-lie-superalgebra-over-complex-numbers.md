---
id: def-lie-superalgebra-over-complex-numbers
kind: definition
title: Lie superalgebra over the complex numbers
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-vector-space
  - def-linear-map
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, Chapter 2 §§2.1–2.2"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 10–15: Z/2-graded vector spaces, parity, and the two equivalent Lie-superalgebra definitions."
    - title: "Lauren Caston and Rita Fioresi, Mathematical Foundations of Supersymmetry, §§1.1–1.2"
      url: https://arxiv.org/pdf/0710.5742
      locator: "Printed pp. 9–14: super vector spaces, superalgebras, and the signed Lie-superbracket convention."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

A **complex Lie superalgebra** is a complex vector space $\mathfrak g$ with a specified direct-sum grading
$$ \mathfrak g=\mathfrak g_{\bar 0}\oplus\mathfrak g_{\bar 1} $$
and a complex-bilinear bracket $[\ ,\ ]:\mathfrak g\times\mathfrak g\to\mathfrak g$ satisfying the following conditions. A vector in one summand is **homogeneous**; its **parity** $|x|\in\{0,1\}$ is defined by $x\in\mathfrak g_{\bar{|x|}}$. For homogeneous $x,y,z$:

1. The bracket is graded: $[\mathfrak g_{\bar i},\mathfrak g_{\bar j}]\subseteq\mathfrak g_{\overline{i+j}}$.
2. It is graded-skew: $[x,y]=-(-1)^{|x||y|}[y,x]$.
3. It satisfies the signed Jacobi identity in derivation form:
   $$ [x,[y,z]]=\left\lbrack [x,y],z\right\rbrack+(-1)^{|x||y|}[y,[x,z]]. $$
4. The odd self-Jacobi identity $[x,[x,x]]=0$ for odd $x$ is listed explicitly as part of this convention. Over $\mathbb C$ it follows from condition 3.

Here $\mathfrak g$ is a vector space in the sense of [[def-vector-space]], and the bracket is bilinear in the sense of [[def-linear-map]]. The ground field is fixed to $\mathbb C$ throughout this pair; no positive-characteristic claim is included.

## Remarks

The even part $\mathfrak g_{\bar0}$ is an ordinary Lie algebra under the restricted bracket. Odd brackets are symmetric, and may be nonzero on the diagonal: if $x$ is odd, graded skew symmetry places no condition forcing $[x,x]=0$. The extra odd identity is redundant in characteristic zero; in characteristic three it must be imposed separately for the usual PBW route.
