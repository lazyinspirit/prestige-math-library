---
id: lem-cft-binary-tree-coordinates-are-biholomorphic
kind: lemma
title: Binary-tree insertion coordinates are biholomorphic
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Yuto Moriwaki, Convergence and operadic compatibility of bulk and boundary
      OPEs in two-dimensional conformal field theory, arXiv:2410.02648v2
    url: https://arxiv.org/pdf/2410.02648v2
    locator: §1.2, PDF pp. 10–11, tree coordinates and Proposition 1.1.
  - title: Yuto Moriwaki, Vertex operator algebra and parenthesized braid operad,
      arXiv:2209.10443v3
    url: https://arxiv.org/pdf/2209.10443v3
    locator: '§3.1, equations (3.2)–(3.4) and Proposition 3.1, PDF pp.39–40: rightmost-leaf
      tree coordinates are biholomorphic onto their image and have a polynomial inverse.'
---

## Statement

Let $A$ be a planar binary tree with $n\geq2$ distinctly labelled leaves, and let $X_n(\mathbb C)=\{(z_1,\ldots,z_n):z_i\ne z_j\text{ for }i\ne j\}$. For each internal vertex $v$, let $R(v)$ be the rightmost descendant leaf and $L(v)$ the rightmost leaf in the left child subtree; put $z_v=z_{L(v)}-z_{R(v)}$. For an internal edge $e$ from parent $u(e)$ to internal child $d(e)$ put $\zeta_e=z_{d(e)}/z_{u(e)}$. Let $t_A$ be the root, $r_A$ the rightmost leaf, $x_A=z_{t_A}$ and $z_A=z_{r_A}$. Then
$$\Psi_A:X_n(\mathbb C)\longrightarrow \mathbb C\times\mathbb C^\times\times(\mathbb C^\times)^{n-2},\qquad \mathbf z\longmapsto(z_A,x_A,(\zeta_e)_{e\in E(A)})$$
is biholomorphic onto its image. Its inverse is polynomial in $(z_A,x_A,(\zeta_e))$ on that image.

## Facts & Assumptions

**Given:** A fixed finite planar binary tree whose leaves are distinctly labelled; “rightmost” refers to its planar order.

## Proof

**Given:** The tree and coordinate definitions in the Statement.

1.1 For any configuration $\mathbf z\in X_n(\mathbb C)$, the two leaves $L(v)$ and $R(v)$ lie in disjoint child subtrees, so their coordinates differ and $z_v\ne0$. Thus every ratio $\zeta_e$ and the root scale $x_A$ is defined and nonzero. Coordinate differences and quotients by the nowhere-zero functions $z_{u(e)}$ are holomorphic on $X_n(\mathbb C)$, so $\Psi_A$ is holomorphic. [given, algebra]

2.1 Given $(c,x,(\zeta_e))$ in the image, set $z_A=c$ and assign the root's internal difference $z_{t_A}=x$. Recursively, if an internal vertex $v$ has assigned rightmost-leaf coordinate $r_v$ and internal difference $z_v$, assign the rightmost leaf coordinate of its left child to $r_v+z_v$; the right child inherits $r_v$. If a child is internal, assign its difference $z_d=\zeta_e z_v$ and repeat. If a child is a leaf, its coordinate has now been assigned. Every leaf receives one coordinate because the two child subtrees partition the leaves below each vertex. [given, step 1.1, algebra]

3.1 The reconstruction in step 2.1 uses only additions and products of $c,x,\zeta_e$, so it is polynomial and hence holomorphic. For coordinates in the image, induction down the tree shows that the reconstructed rightmost leaf at every subtree is its original one and that each reconstructed left rightmost leaf differs from it by the original $z_v$; therefore it recovers every original leaf coordinate. Conversely, applying the defining differences and ratios to the reconstructed coordinates returns $(c,x,(\zeta_e))$. Hence $\Psi_A$ is injective, maps onto its image by definition, and has the displayed holomorphic inverse there. [given, step 2.1, algebra] ∎

## Remarks

The image consists precisely of coordinate tuples whose recursively reconstructed leaves are pairwise distinct. This criterion is used to define the admissible radius tuples and nested tree domains in [[def-cft-locally-c1-cofinite-open-closed-data]].
