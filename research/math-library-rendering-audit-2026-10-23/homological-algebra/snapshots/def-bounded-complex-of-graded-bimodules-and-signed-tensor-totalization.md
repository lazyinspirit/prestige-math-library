---
id: def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
kind: definition
title: "Bounded graded bimodule complexes and signed tensor totalization"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-graded-balanced-tensor-product-and-homogeneous-hom
  - def-cochain-complex-in-an-abelian-category
  - def-bounded-bounded-below-and-bounded-above-complex
  - def-tensor-product-total-complex-of-chain-complexes
justified_by: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §10.6"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Fix a commutative ring $k$ and unital associative graded $k$-algebras $B,A,C$
([[def-graded-ring-module-bimodule-and-internal-shift]]). A **bounded cochain
complex of graded $(B,A)$-bimodules** is a cochain complex in the sense of
[[def-cochain-complex-in-an-abelian-category]] that is bounded in the sense of
[[def-bounded-bounded-below-and-bounded-above-complex]],
$F=(F^p,d_F^p)_{p\in\mathbb Z}$, with each $F^p$ a graded $(B,A)$-bimodule
and each differential
$$d_F^p:F^p\longrightarrow F^{p+1}$$
is a degree-zero bimodule map. Thus each $d_F^p$ preserves internal degree and
commutes with both outer actions, and $d_F^{p+1}d_F^p=0$.

For a bounded cochain complex $F$ of graded $(B,A)$-bimodules and a bounded
cochain complex $G$ of graded $(A,C)$-bimodules, the **signed tensor
totalization** uses the graded balanced tensor product
([[def-graded-balanced-tensor-product-and-homogeneous-hom]]) and has cochain
degree $n$ term
$$\operatorname{Tot}(F\otimes_A G)^n:=\bigoplus_{p+q=n}F^p\otimes_A G^q$$
and differential on $f\in F^p$, $g\in G^q$ given by
$$d(f\otimes g):=d_F(f)\otimes g+(-1)^p f\otimes d_G(g).$$
The balanced tensor carries its total internal grading: if $f$ has internal
degree $r$ and $g$ has internal degree $s$, then $f\otimes g$ has internal
degree $r+s$. Its outer actions are $b(f\otimes g)c=(bf)\otimes(gc)$ for
$b\in B$ and $c\in C$. When $G$ is instead a bounded cochain complex of graded
left $A$-modules, omit the right $C$-action and retain the induced left
$B$-action.

This is the existing tensor-product total complex
([[def-tensor-product-total-complex-of-chain-complexes]]) after reindexing
cochain degree $p$ as chain degree $-p$; its Koszul sign is therefore $(-1)^p$. The
internal $\mathbb{Z}$-grading is independent of cochain degree and contributes no
additional sign. If $F$ is supported in $[a,b]$ and $G$ in $[c,d]$, then the
totalization is supported in $[a+c,b+d]$, and each diagonal has only finitely
many summands. If either input is the zero complex, the totalization is zero.
If one input is concentrated in cochain degree $r$, then
$$
\operatorname{Tot}(F\otimes_A G)^n=F^r\otimes_A G^{n-r},\qquad d=(-1)^r(1\otimes d_G).
$$
If instead $G$ is concentrated in cochain degree $s$, then
$$
\operatorname{Tot}(F\otimes_A G)^n=F^{n-s}\otimes_A G^s,\qquad d=d_F\otimes 1.
$$
In particular, when both differentials vanish the total differential is zero.
