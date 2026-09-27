---
id: def-braid-isotopy-relative-top-and-bottom
kind: definition
title: "Braid isotopy relative to the top and bottom endpoints"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-geometric-braid-with-setwise-endpoints, def-homotopy-relative-and-path-homotopy,
       def-continuous-map-top, def-product-topology, def-interval,
       def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $n\in\mathbb N$ and let $Q=(q_1,\dots,q_n)$ be the base configuration of
[[def-geometric-braid-with-setwise-endpoints]], so that braids based at $Q$ are
tuples of continuous maps $z_j\colon I\to D^\circ$ satisfying conditions (1)--(3)
of that definition. Write $I=[0,1]$ ([[def-interval]]) and give $I\times I$ the
product topology ([[def-product-topology]]).

Let $\beta=(z_1,\dots,z_n)$ and $\beta'=(z'_1,\dots,z'_n)$ be braids based at
$Q$. A **braid isotopy from $\beta$ to $\beta'$ relative to the top and bottom
endpoints**, or simply a **braid isotopy**, is an $n$-tuple

$$Z=(Z_1,\dots,Z_n),\qquad Z_j\colon I\times I\longrightarrow D^\circ,$$

of continuous maps ([[def-continuous-map-top]]) such that

1. for every $s\in I$, the tuple $Z(s,\cdot):=(Z_1(s,\cdot),\dots,Z_n(s,\cdot))$
   is a braid based at $Q$, i.e. $t\mapsto Z_j(s,t)$ is continuous into
   $D^\circ$, the $n$ values $Z_j(s,t)$ are pairwise distinct for every $t$, the
   bottom condition $Z_j(s,0)=q_j$ holds for every $s$ and $j$, and
   $\{Z_1(s,1),\dots,Z_n(s,1)\}=\{q_1,\dots,q_n\}$ for every $s$;
2. $Z_j(0,t)=z_j(t)$ and $Z_j(1,t)=z'_j(t)$ for all $j$ and $t$.

The first variable $s$ is the **isotopy parameter** and the second variable $t$
is the height; a family of motions depending on $s$ is a braid isotopy exactly
when the map $(s,t)\mapsto Z_j(s,t)$ is *jointly* continuous, not merely
continuous in $s$ for each fixed $t$. When such a $Z$ exists we say that
$\beta$ and $\beta'$ are **braid-isotopic** and write $\beta\sim\beta'$.

**Relation to homotopy.** A braid is a continuous map $I\to(D^\circ)^n$ with
additional properties, and a braid isotopy is a homotopy of such maps
([[def-homotopy-relative-and-path-homotopy]]) that is *relative to the bottom
subset* $\{0\}\subseteq I$, in the following sense: the homotopy condition
$Z_j(s,0)=z_j(0)=z'_j(0)$ for all $s$ says that the whole bottom point is fixed
throughout the deformation. At the top, the condition is *imposed setwise*:
$\{Z_1(s,1),\dots,Z_n(s,1)\}=\{q_1,\dots,q_n\}$. Joint continuity then
forces each individual top endpoint to remain constant as $s$ varies, since a
continuous map from an interval into this finite discrete set is constant.

**Endpoint permutations of the slices.** Let $Z$ be a braid isotopy from
$\beta$ to $\beta'$. Each slice $Z(s,\cdot)$ is a braid and hence has an
endpoint permutation $\pi(Z(s,\cdot))\in S_n$
([[def-geometric-braid-with-setwise-endpoints]],
[[def-finite-symmetric-group-and-permutation-notation]]). This definition does
not separately *impose* that these slice permutations agree: it requires each slice to
be a braid and the family to be jointly continuous. The slice permutations do agree, and
therefore the endpoint permutation is an invariant of braid isotopy, with
$\pi(\beta)=\pi(\beta')$; this is proved on this page, in the stacking
proposition, by a connectedness argument for the height interval $I$.

**Isotopy of the ambient cylinder is not enough.** The definition constrains
the deformation to the product $D^\circ\times I$ through height-preserving
motions; it is neither an isotopy of an arbitrary embedded link nor a
free homotopy of the tuple of paths. Deformations that make a strand meet a
horizontal plane more than once, or that move bottom points, are not braid isotopies; a
counterexample is recorded on the companion examples page.
