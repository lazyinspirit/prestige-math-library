---
id: def-even-dimensional-spinor-bundle-chirality-and-spin-connection
kind: definition
title: "Even-dimensional spinor bundles, chirality, and the spin connection"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 9
deps:
  - def-spin-lift-of-oriented-orthonormal-frame-bundle
  - def-clifford-algebra-of-a-quadratic-space
  - thm-complex-spin-modules-and-compact-reducibility
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-connection-on-a-smooth-vector-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - def-axiom-of-choice
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
justified_by:
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard B. Melrose, Analysis, Loops and Spin (2024 lecture notes)"
      url: https://math.mit.edu/~rbm/Loops2024/AnLoSp.pdf
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Definition

Assume full AC. Let $M$ be an oriented Riemannian manifold of even dimension $n=2m\ge2$ with a specified Spin lift $P\to P_{SO}(TM)$. Let $S_0$ be the complex irreducible Clifford module of dimension $2^m$ supplied by [[thm-complex-spin-modules-and-compact-reducibility]], with positive-square complex Clifford action $c_+$ and full-even Spin representation $\sigma$. Put $c_0(v)=i\,c_+(v)$ for the negative-square cotangent action. This changes the Clifford square sign and preserves equivariance under $\sigma$, since the scalar $i$ commutes with that action. Define the complex spinor bundle by the associated real bundle $P\times_{\operatorname{Spin}(n)}(S_0)_{\mathbb R}$ using the realification of $\sigma$, and descend multiplication by $i$ and the Clifford action through their commuting transition maps.

For an oriented orthonormal basis $(e_1,\ldots,e_{2m})$, define the chirality operator on $S_0$ by $\Gamma_{S_0}=i^m c_0(e^1)\cdots c_0(e^{2m})$. The calculation below proves that this is basis-independent, squares to $1$, and anticommutes with each $c_0(\xi)$. Its $\pm1$ eigenspaces are $S_0^\pm$ and their associated bundles are $S^\pm$. The Levi–Civita connection on $P_{SO}(TM)$ lifts through the differential of $\operatorname{Spin}(n)\to SO(n)$ to the **spin connection** $\widetilde\nabla^S$ on $S$. This item defines these objects; [[lem-spinor-and-clifford-associated-bundles-are-well-defined]] supplies the global bundle, metric, connection, and transition verification.

## Facts & Assumptions

**Given:** The Clifford action and the selected oriented orthonormal basis in the Statement.

[F1] The generators satisfy $c_0(e^j)^2=-I$ and anticommute for distinct orthonormal covectors ([[def-clifford-algebra-of-a-quadratic-space]], [[def-graded-hermitian-clifford-module-and-geometric-dirac]]).

[F2] In even dimension the complex spinor module has dimension $2^m$ and its Spin restriction has two half-spin representations, each of dimension $2^{m-1}$ ([[thm-complex-spin-modules-and-compact-reducibility]]).

[A1] The actual even-algebra identification [[lem-clifford-even-subalgebra-signature-identification]] and full complex matrix classification [[thm-real-complex-clifford-algebra-classification]] give the spinor and two half-spin dimensions in [F2]. The negative-sign action here is obtained from the positive complex action by multiplication by $i$, as checked below.

## Proof

**Given:** $n=2m$, the Clifford generators $c_j=c_0(e^j)$, and $\Gamma=i^m c_1\cdots c_n$.

1.1 The positive generators satisfy $c_+(v)^2=|v|^2$, so $c_0(v)^2=-|v|^2$ and their polarized relation is the required negative one. Spin equivariance is preserved: $\sigma(h)c_0(v)\sigma(h)^{-1}=i\,c_+(\rho(h)v)=c_0(\rho(h)v)$. Its negative-sign volume chirality is $i^m\prod_j(i c_+(e^j))=(-1)^m i^m\prod_jc_+(e^j)$, so the two half-spin labels are exchanged when $m$ is odd, with dimensions unchanged. Reversing the order of the $n$ pairwise anticommuting generators takes $n(n-1)/2=m(2m-1)$ swaps, and their squares contribute $(-1)^n=1$. Hence $(c_1\cdots c_n)^2=(-1)^m$. Since $(i^m)^2=(-1)^m$, $\Gamma^2=1$. For any $k$, moving $c_k$ through the other $n-1$ factors changes the sign by $(-1)^{n-1}=-1$; thus $\Gamma c_k=-c_k\Gamma$, and linearity gives the same relation for every covector. [A1, F1, F2, given, algebra]

2.1 The product $c_1\cdots c_n$ is fully alternating because distinct orthonormal generators anticommute. Under an oriented orthogonal basis change $A\in SO(n)$, its top exterior coefficient is multiplied by $\det A=1$, so $\Gamma$ is independent of the chosen oriented orthonormal basis. Since $\Gamma^2=1$ over $\mathbb C$, the projections $(I\pm\Gamma)/2$ split $S_0=S_0^+\oplus S_0^-$. Anticommutation shows each $c_0(\xi)$ exchanges the two eigenspaces. Their dimensions are equal to $2^{m-1}$ by [F2]. The exact full and even matrix factors are those in [A1]. [A1, F2, step 1.1, algebra] ∎

