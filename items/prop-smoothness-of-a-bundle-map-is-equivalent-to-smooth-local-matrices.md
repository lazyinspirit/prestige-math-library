---
id: prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices
kind: proposition
title: "Smoothness of a bundle map is equivalent to smooth local matrices"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-bundle-map-over-a-smooth-base-map, def-local-frame-and-global-frame-of-a-vector-bundle, prop-local-frames-and-local-trivializations-are-equivalent-data, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]
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

Let $\Phi:E\to F$ be a fibrewise linear map over a smooth base map $f:M\to N$.
Choose local frames $(e_1,\dots,e_r)$ for $E$ on $U\subseteq M$ and
$(u_1,\dots,u_s)$ for $F$ on $V\subseteq N$ with $f(U)\subseteq V$. Then $\Phi$
is smooth on $E|_U$ if and only if there are smooth scalar functions
$a_{ji}:U\to\mathbb R$ such that

$$\Phi(e_i(p))=\sum_{j=1}^s a_{ji}(p)u_j(f(p))$$

for every $p\in U$.

## Facts & Assumptions

**Given:** A fibrewise linear map $\Phi:E\to F$ over a smooth map $f:M\to N$ and
local frames on $U$ and $V$ as above.

[L1] Local frames are equivalent to local trivializations
([[prop-local-frames-and-local-trivializations-are-equivalent-data]]).

[L2] A section is smooth exactly when its local components are smooth
([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the chosen frames identify $E|_U$ with $U\times\mathbb R^r$ and $F|_V$ with $V\times\mathbb R^s$. In these trivializations, fibrewise linearity forces $\Phi$ to have the form $\Phi(p,v)=(f(p),A(p)v)$ for a unique matrix $A(p)=(a_{ji}(p))$. [L1, given]
2.1 The local representative $(p,v)\mapsto(f(p),A(p)v)$ is smooth exactly when its matrix entries $a_{ji}$ are smooth on $U$. Equivalently, the images $\Phi(e_i)=\sum_j a_{ji}u_j\circ f$ have smooth local components, which is the criterion in [L2]. [L2, step 1.1, algebra] ∎