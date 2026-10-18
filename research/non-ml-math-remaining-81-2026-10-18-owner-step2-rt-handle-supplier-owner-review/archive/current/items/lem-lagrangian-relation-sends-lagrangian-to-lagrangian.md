---
id: lem-lagrangian-relation-sends-lagrangian-to-lagrangian
kind: lemma
title: "A linear Lagrangian relation sends a Lagrangian subspace to a Lagrangian subspace"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-intersection-form-on-the-homology-of-a-closed-oriented-surface, def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces, thm-rank-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Teruji Thomas, The Maslov index as a quadratic space"
      url: "https://arxiv.org/pdf/math/0505561"
    - title: "Kevin Walker, On Witten's 3-manifold invariants, §18"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Statement

Let $(V,\omega_V)$ and $(W,\omega_W)$ be finite-dimensional real symplectic vector spaces of dimensions $2n$ and $2m$. Give $\overline V\oplus W$ the form $-\omega_V\oplus\omega_W$. If $\Lambda\subseteq\overline V\oplus W$ is Lagrangian and $L\subseteq V$ is Lagrangian, then

$$R_\Lambda(L)=\{y\in W:\text{there is }x\in L\text{ with }(x,y)\in\Lambda\}$$

is Lagrangian in $W$.

## Facts & Assumptions

**Given:** Finite-dimensional symplectic vector spaces $V,W$, a Lagrangian relation $\Lambda\subseteq\overline V\oplus W$, and a Lagrangian $L\subseteq V$.

[F1] A Lagrangian subspace is isotropic and has dimension half that of its ambient symplectic space ([[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]]).

[F2] Rank-nullity and the dimension formula for sums of finite-dimensional subspaces hold ([[thm-rank-nullity]]).

## Proof

**Given:** The data in the Statement.

1.1 Let $K=\Lambda\cap(L\oplus W)$. Projection $p_W:K\to W$ has image $R_\Lambda(L)$ and kernel $T=\{x\in L:(x,0)\in\Lambda\}$. For $(x,y),(x',y')\in K$, isotropy of $\Lambda$ gives $-\omega_V(x,x')+\omega_W(y,y')=0$; isotropy of $L$ makes the first term zero. Hence $R_\Lambda(L)$ is isotropic. [F1, given, algebra]

2.1 In $\overline V\oplus W$, the orthogonal complement of $L\oplus W$ is $L\oplus0$, because $L^\perp=L$. Since $\Lambda=\Lambda^\perp$, the orthogonal complement of $\Lambda+(L\oplus W)$ is $\Lambda\cap(L\oplus0)$, of dimension $\dim T$. For any subspace $U$ of a finite-dimensional symplectic space, the map $v\mapsto\omega(v,-)|_U$ onto $U^*$ is surjective: extend a functional from a basis of $U$ to the ambient space and use the isomorphism defined by the nondegenerate form. Its kernel is $U^\perp$, so $\dim U^\perp=\dim V-\dim U$. Rank-nullity and [F2] therefore give $\dim K=(n+m)+(n+2m)-(2n+2m-\dim T)=m+\dim T.$ The kernel of $p_W|_K$ has dimension $\dim T$, so $\dim R_\Lambda(L)=m$. [F1, F2, step 1.1, algebra]

3.1 The isotropic subspace $R_\Lambda(L)$ has dimension $m$. The formula proved in step 2.1 gives $\dim R_\Lambda(L)^\perp=2m-m=m$. Since isotropy gives $R_\Lambda(L)\subseteq R_\Lambda(L)^\perp$, equality follows; this is the definition of Lagrangian in [F1]. [F1, step 1.1, step 2.1] ∎
