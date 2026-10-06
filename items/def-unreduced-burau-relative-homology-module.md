---
id: def-unreduced-burau-relative-homology-module
kind: definition
title: "The unreduced Burau relative homology module"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-burau-infinite-cyclic-cover
  - lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
  - def-relative-singular-homology
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - def-deck-transformation-and-deck-group
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-regular-covering
  - thm-sheets-equal-fundamental-group-index
  - def-the-laurent-polynomial-ring
  - def-reduced-burau-homology-module
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
    - title: "Allen Hatcher, Algebraic Topology, section 1.3 (covering spaces)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.3, printed pp. 56-64"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $p:\tilde X\to X$ be the Burau infinite cyclic cover, let
$p^{-1}d\subseteq\tilde X$ be the complete preimage of the basepoint (a
discrete countable set and a $\mathbb Z$-torsor under the deck group), and keep
the Laurent polynomial ring $\Lambda_1=\mathbb Z[t^{\pm1}]$ of
[[def-the-laurent-polynomial-ring]]. The **unreduced Burau module** is the
relative singular homology
$$U:=H_1(\tilde X,p^{-1}d;\mathbb Z),$$
with the left $\Lambda_1$-module structure $t^k\cdot x:=(T_{t^k})_*x$ induced
by the deck action on the pair $(\tilde X,p^{-1}d)$ and extended to $\Lambda_1$
by its universal property exactly as in
[[def-reduced-burau-homology-module]].

**Conventions.** The second entry of the pair is the *whole* fibre $p^{-1}d$,
never a single point; integral coefficients are used; the deck action is on the
left. The relevant invariants of the pair are the connecting map of the long
exact sequence of the pair, landing in $H_0(p^{-1}d)$, and the relative
lifted-edge basis fixed in
[[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]].

## Facts & Assumptions

**Given:** The Burau cover $p:\tilde X\to X$ with deck group $\{T_{t^k}:k\in\mathbb Z\}$, the discrete fibre $p^{-1}d$, and the abelian group $U=H_1(\tilde X,p^{-1}d;\mathbb Z)$.

[F1] Every deck transformation is a homeomorphism of $\tilde X$ over $X$; it maps the fibre $p^{-1}d$ to itself, hence is a homeomorphism of the pair $(\tilde X,p^{-1}d)$; the deck group is a group under composition with $T_{t^k}\circ T_{t^l}=T_{t^{k+l}}$ and $T_{t^k}^{-1}=T_{t^{-k}}$ ([[def-deck-transformation-and-deck-group]], [[def-burau-infinite-cyclic-cover]]).

[F2] A continuous map of pairs $f:(X,A)\to(Y,B)$ induces $f_*:H_n(X,A;G)\to H_n(Y,B;G)$ with identity and composite laws ([[def-relative-singular-homology]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]]).

[F3] The cover is regular, so its deck group acts transitively on the fibre, and deck transformations act freely on the connected total space; hence $p^{-1}d=\{T_{t^k}\tilde d:k\in\mathbb Z\}$ is a $\mathbb Z$-torsor. A fibre of a covering is discrete ([[def-regular-covering]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]], [[thm-sheets-equal-fundamental-group-index]]).

[F4] $\Lambda_1$ has the universal property that each unit $u$ of a unital ring $A$ determines a unique unital ring homomorphism $\Lambda_1\to A$ with $t\mapsto u$ ([[def-the-laurent-polynomial-ring]]).

[F5] There is a long exact sequence
$$\cdots\to H_1(p^{-1}d)\to H_1(\tilde X)\to H_1(\tilde X,p^{-1}d)\xrightarrow{\partial}H_0(p^{-1}d)\to H_0(\tilde X)\to\cdots$$
([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F6] The relative lifted-edge basis $(\epsilon_1,\dots,\epsilon_n)$ of $H_1(\Sigma,\Sigma^0)$ and the $\Lambda_1$-module isomorphisms $H_1(\tilde X,p^{-1}d)\cong H_1(\Sigma,\Sigma^0)$ and $H_1(\tilde X)\cong H_1(\Sigma)$ are fixed in [[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]].

## Proof

**Proof technique:** direct.

1.1 *Deck automorphisms of the pair and of $U$.* By [F1] each $T_{t^k}$ is a homeomorphism of the pair $(\tilde X,p^{-1}d)$; by [F2] it induces an endomorphism $(T_{t^k})_*$ of $U$. Since $T_{t^k}\circ T_{t^{-k}}=\operatorname{id}$, functoriality in [F2] gives $(T_{t^k})_*\circ(T_{t^{-k}})_*=\operatorname{id}$ and conversely, so each $(T_{t^k})_*$ is an automorphism and $t_*:=(T_t)_*$ is a unit of $\operatorname{End}_{\mathbb Z}(U)$ with inverse $(T_{t^{-1}})_*$. [F1, F2]

2.1 *The $\Lambda_1$-module structure.* By [F4] the unit $t_*$ determines a unique unital ring homomorphism $\Lambda_1\to\operatorname{End}_{\mathbb Z}(U)$ with $t\mapsto t_*$, and we let $\Lambda_1$ act on $U$ through it; $U$ becomes a left $\Lambda_1$-module because $\Lambda_1$ is commutative. This is the same universal-property construction as in [[def-reduced-burau-homology-module]], so it involves no extra choice. [F4, step 1.1]

3.1 *Conventions and invariants.* By [F3] the fibre is the discrete $\mathbb Z$-torsor $\{T_{t^k}\tilde d\}$, so its degree-zero homology is the free abelian group on the fibre; the connecting map of [F5] is the map $\partial:U\to H_0(p^{-1}d)$ used by the exact sequence of the pair, and the identification of $U$ with $H_1(\Sigma,\Sigma^0)$ in [F6] fixes the relative lifted-edge basis $\epsilon_1,\dots,\epsilon_n$ of $U$. [F3, F5, F6, step 2.1] ∎
