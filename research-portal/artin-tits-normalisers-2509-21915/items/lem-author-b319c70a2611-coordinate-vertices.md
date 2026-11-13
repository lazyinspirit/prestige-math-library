---
id: lem-author-b319c70a2611-coordinate-vertices
kind: lemma
title: Coordinate vertices inside a relative open ball
status: draft
domain: mathematics
origin: pipeline
deps:
  - prop-relative-linear-interface-artin-tits-prerequisites
  - math:def-inner-product-space
  - math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
dependency_roles:
  prop-relative-linear-interface-artin-tits-prerequisites: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $E$ be a finite-dimensional coordinate Euclidean space, $T\subseteq E$, and $u\in\operatorname{int}_E(T)$. If $d=\dim E>0$, there exist an orthonormal basis $e_1,\ldots,e_d$ and $\varepsilon>0$ such that all $p_i^\pm=u\pm\varepsilon e_i$ belong to $T$, and $B_E(u,\varepsilon)\subseteq T$.

## Statement references

[[prop-relative-linear-interface-artin-tits-prerequisites]]

[[math:def-inner-product-space]]

[[math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]

[[math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

## Facts & Assumptions

[F1] Relative interior is computed using Euclidean balls in $E$: $u\in\operatorname{int}_E(T)$ means that some $R>0$ satisfies $B_E(u,R)\subseteq T$ ([[prop-relative-linear-interface-artin-tits-prerequisites]]).

[F2] The coordinate Euclidean inner product is $\langle x,y\rangle=\sum_{k=1}^d x_k y_k$; it is a real inner product, with the bilinearity and positive definiteness of [[math:def-inner-product-space]].

[F3] An orthonormal family satisfies $\langle e_i,e_j\rangle=\delta_{ij}$. Its vectors have induced length $\|e_i\|=\sqrt{\langle e_i,e_i\rangle}=1$ ([[math:def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F4] Every finite-dimensional real inner product space has an orthonormal basis ([[math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

**Given:** $E,T,u$ as in the statement and $d=\dim E>0$. Use the coordinate Euclidean inner product, the induced length $\|x\|=\sqrt{\langle x,x\rangle}$ and the distance $d_E(x,y)=\|x-y\|$.

**Goal:** Choose the opposite vertices and the ball required in the statement.

**Proof technique:** direct.

1.1 By [F1], choose $R>0$ with $B_E(u,R)\subseteq T$, and set $\varepsilon=R/2$. The space $E$ is a finite-dimensional real inner product space by [F2], so [F4] supplies an orthonormal basis $e_1,\ldots,e_d$. [given, F1, F2, F4, choose]

2.1 For each $i$, real bilinearity and orthonormality give $\langle \pm\varepsilon e_i,\pm\varepsilon e_i\rangle=\varepsilon^2\langle e_i,e_i\rangle=\varepsilon^2$. Hence $d_E(u\pm\varepsilon e_i,u)=\varepsilon<R$, so $p_i^\pm=u\pm\varepsilon e_i\in T$. Also $B_E(u,\varepsilon)\subseteq B_E(u,R)\subseteq T$ since $0<\varepsilon<R$. These are both required assertions. [step 1.1, F1, F2, F3, algebra] ∎
