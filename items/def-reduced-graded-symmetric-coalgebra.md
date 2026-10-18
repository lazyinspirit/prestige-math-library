---
id: def-reduced-graded-symmetric-coalgebra
kind: definition
title: "Reduced graded symmetric coalgebra with its shuffle coproduct"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-koszul-sign-rule-for-graded-tensors
  - def-ring-characteristic
  - lem-field-is-a-commutative-ring
justified_by:
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
  - lem-reduced-graded-symmetric-coalgebra-is-cofree
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, §§2–3"
      url: "https://arxiv.org/pdf/hep-th/9209099"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, Proposition 10.1.20"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $k$ be a characteristic-zero field ([[def-field]]), meaning
$\operatorname{char}(k)=0$ under [[def-ring-characteristic]]. By
[[lem-field-is-a-commutative-ring]], $k$ is a commutative ring. Let
$W=\bigoplus_{j\in\mathbb Z}W^j$ be a graded $k$-vector space. For $n\ge1$,
define the graded symmetric power

$$S^n(W)=W^{\otimes_k n}/J_n,$$

where $J_n$ is spanned by the differences obtained by replacing any adjacent
homogeneous factors $x\otimes y$ by
$(-1)^{|x||y|}y\otimes x$ inside a pure tensor. Write
$w_1\odot\cdots\odot w_n$ for the image of a tensor and set

$$S^c(W)=\bigoplus_{n\ge1}S^n(W).$$

The **reduced shuffle coproduct** is the degree-zero linear map
$\bar\Delta:S^c(W)\to S^c(W)\otimes_k S^c(W)$ given on a homogeneous pure
symmetric tensor by

$$\bar\Delta(w_1\odot\cdots\odot w_n) =\sum_{p=1}^{n-1}\ \sum_{\sigma\in\operatorname{Sh}(p,n-p)} \epsilon(\sigma;w_1,\ldots,w_n) (w_{\sigma(1)}\odot\cdots\odot w_{\sigma(p)})\otimes (w_{\sigma(p+1)}\odot\cdots\odot w_{\sigma(n)}),$$

where
$\operatorname{Sh}(p,n-p)=\{\sigma\in S_n:\sigma(1)<\cdots<\sigma(p),\
\sigma(p+1)<\cdots<\sigma(n)\}$, and $\epsilon$ is the Koszul sign of
[[def-koszul-sign-rule-for-graded-tensors]].
For $n=1$ the sum is empty and $\bar\Delta(w)=0$. This is a reduced, hence
noncounital coalgebra convention; no arity-zero summand is included. The next
lemmas verify its coproduct laws, conilpotence, and cofree universal property.
