---
id: def-borel-moore-homology
kind: definition
title: "Borel-Moore homology by locally finite chains"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients,
       def-singular-chain-complex-and-singular-homology, def-compact-space,
       lem-compactness-of-a-subspace-is-ambient,
       lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "5.3 (the Borel-Moore sheaf of chains as locally finite chains, with the paracompactness remark) and 11.2 (the dual construction, the realization by closed locally finite chains and pushforward along proper mappings)"
---

## Definition

Let $X$ be a locally compact Hausdorff topological space and let $R$ be a
commutative ring. For $k\ge0$ let $S_k(X)$ be the set of continuous maps
$\Delta^k\to X$ from the standard simplex
([[def-singular-simplex-and-singular-chain-group-with-coefficients]]); the
convention of [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]
supplies neighbourhood bases by open sets with compact closure. A formal sum
$c=\sum_{\sigma\in S_k(X)}a_\sigma\,\sigma$ with $a_\sigma\in R$ is **locally
finite** if every point $x\in X$ has an open neighbourhood meeting only
finitely many of the images $\sigma(\Delta^k)$ of the simplices with
$a_\sigma\ne0$ ([[def-compact-space]] for compactness). The **locally finite
$k$-chains** are the $R$-module
$$C_k^{\mathrm{BM}}(X;R)=\bigl\{c:\ \text{the sum is locally finite}\bigr\},\qquad C_k^{\mathrm{BM}}(X;R)=0\ \ (k<0),$$
with addition and scalar multiplication defined coefficientwise. The **boundary**
$$\partial\Bigl(\sum_\sigma a_\sigma\sigma\Bigr)=\sum_\sigma a_\sigma\,\partial\sigma$$
is again locally finite, because every face of $\sigma$ has image contained in
the image of $\sigma$, and $\partial^2=0$ because $\partial^2\sigma=0$; thus
$(C_*^{\mathrm{BM}}(X;R),\partial)$ is a chain complex and its homology is the
**Borel-Moore homology** $H_k^{\mathrm{BM}}(X;R)$
([[def-singular-chain-complex-and-singular-homology]] for the ordinary chain
complex, which is the special case of sums with finite support).

A **proper** continuous map $f:X\to Y$ (inverse images of compact sets are
compact) induces $f_*:C_*^{\mathrm{BM}}(X;R)\to C_*^{\mathrm{BM}}(Y;R)$ by
$\sigma\mapsto f\circ\sigma$: for $y\in Y$ choose a compact neighbourhood $K$
of $y$; the compact set $f^{-1}(K)$ is covered by finitely many of the
neighbourhoods furnished by local finiteness of $c$, by
[[lem-compactness-of-a-subspace-is-ambient]], so only finitely many
simplices meet $f^{-1}(K)$, and a neighbourhood of $y$ contained in $K$ then
meets only finitely many images $f(\sigma(\Delta^k))$. This is a chain map
because $f\circ\partial\sigma=\partial(f\circ\sigma)$, so it induces
$f_*:H_*^{\mathrm{BM}}(X;R)\to H_*^{\mathrm{BM}}(Y;R)$. Coefficients and degree
are otherwise unused below. No choice principle is used in the definition; a
homeomorphism and, more generally, a proper continuous map act functorially.

## Remarks

- **Locally finite versus finite.** The ordinary singular chain group
  $C_k(X;R)$ is the subgroup of sums with finite support, and it is contained in
  $C_k^{\mathrm{BM}}(X;R)$ because a finite family of images has every point
  meeting only finitely many of them. For compact $X$ the inclusion is an
  isomorphism, as proved on this page.
- **Functoriality.** Proper maps induce pushforwards on locally finite chains;
  an arbitrary continuous map need not. Properness is a sufficient condition,
  not a necessary condition for every individual map. The class maps of the
  companion theorem use the guaranteed functoriality for proper morphisms.
