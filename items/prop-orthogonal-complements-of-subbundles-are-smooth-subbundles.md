---
id: prop-orthogonal-complements-of-subbundles-are-smooth-subbundles
kind: proposition
title: "Orthogonal complements of subbundles are smooth subbundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-subbundle, def-smooth-bundle-metric, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, thm-gram-schmidt-orthonormalisation, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $S\subseteq E$ be a smooth vector subbundle of a smooth vector bundle $E\to M$
equipped with a smooth bundle metric. Then the orthogonal complements

$$S_p^\perp:=\{v\in E_p:\langle v,w\rangle_p=0\text{ for every }w\in S_p\}$$

form a smooth vector subbundle $S^\perp\subseteq E$.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$, a smooth subbundle $S\subseteq E$,
and a smooth bundle metric on $E$.

[L1] Locally, $S$ is spanned by part of a frame of $E$ ([[def-vector-subbundle]]).

[L2] Gram-Schmidt orthonormalisation depends smoothly on a smooth frame
([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** direct.

1.1 Around each point, choose a local frame $(e_1,\dots,e_r)$ of $E$ such that $(e_1,\dots,e_k)$ spans $S$. Apply smooth Gram-Schmidt from [L2] to obtain a local orthonormal frame $(u_1,\dots,u_r)$. Because the first $k$ input vectors already lie in $S$, the first $k$ orthonormalized vectors still span $S$. [L1, L2, given, choose]
2.1 For each fibre, the orthogonal complement of $S_p$ is then spanned by $u_{k+1}(p),\dots,u_r(p)$. These vectors vary smoothly, so they give a local frame of $S^\perp$. Hence $S^\perp$ is a smooth vector subbundle of $E$. [step 1.1, algebra] ∎