---
id: cex-zariski-topology-not-hausdorff
kind: counterexample
title: "The Zariski topology on the affine line over an infinite field is not Hausdorff"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-zariski-topology-cofinite-on-affine-line]
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, cofinite-topology discussion in §1.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Statement refuted

Over an infinite field, the Zariski topology on $\mathbf A_k^1$ is Hausdorff.

## Example

Let $a\ne b$ be two points of $\mathbf A_k^1$. By
[[cor-zariski-topology-cofinite-on-affine-line]], every nonempty open subset of
$\mathbf A_k^1$ is the complement of a finite set. If $U$ and $V$ are nonempty
open neighborhoods of $a$ and $b$, then
$$ U\cap V=\mathbf A_k^1\setminus(F\cup G) $$
for finite sets $F$ and $G$. Because $k$ is infinite, $F\cup G$ is still a
proper subset of $k$, so $U\cap V\ne\varnothing$.

Thus no two distinct points admit disjoint neighborhoods. The refuted statement
is therefore false: the classical Zariski topology on $\mathbf A_k^1$ is not
Hausdorff.
