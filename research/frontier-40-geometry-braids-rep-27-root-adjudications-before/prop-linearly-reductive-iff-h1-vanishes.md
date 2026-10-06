---
id: prop-linearly-reductive-iff-h1-vanishes
kind: proposition
title: Linear reductivity is equivalent to vanishing of first Hochschild cohomology
dependency_level: 4
deps:
  - def-hochschild-cohomology-of-algebraic-groups
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Lemma 15.14 and Propositions 15.15-15.16, printed pp. 311-312
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Propositions 12.14-12.15, printed pp. 278-279
---
## Statement

Let $k$ be a field and let $G$ be an algebraic group over $k$. Then $G$ is linearly reductive (every finite-dimensional rational representation of $G$ is a direct sum of simple representations) if and only if $H^1(G,V)=0$ for every finite-dimensional rational representation $V$ of $G$.

## Facts & Assumptions

**Given:** A field $k$, an algebraic group $G$ over $k$, and a finite-dimensional rational representation $V$ of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F1] For a $G$-module $M$ the Hochschild complex $C^\bullet(G,M)$ has cohomology $H^\bullet(G,M)$, $H^0(G,M)=M^G$ is the fixed subgroup, and a short exact sequence $0\to M'\to M\to M''\to0$ of rational $G$-modules induces a long exact sequence in cohomology, because its coefficient vector spaces split linearly and hence its natural cochain maps are surjective. ([[def-hochschild-cohomology-of-algebraic-groups]])

[F2] For a finite-dimensional representation $V$, the $\operatorname{Hom}$-representation $\operatorname{Hom}_k(V',V'')$ of a pair of finite-dimensional representations $V',V''$ is finite-dimensional, and its $G$-fixed vectors are the $G$-equivariant linear maps $V'\to V''$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F3] A natural $1$-cocycle $f:G\to V$ satisfies $f(gh)=f(g)+g f(h)$, and a $1$-coboundary is $g\mapsto gm-m$. This is valid for general algebraic groups, without an affine coordinate-ring assumption. ([[def-hochschild-cohomology-of-algebraic-groups]])


## Proof

**Given:** A field $k$ and an algebraic group $G$ over $k$.

1.1 Suppose first that $H^1(G,M)=0$ for every finite-dimensional representation $M$. Let $0\to V'\to V\to V''\to0$ be an exact sequence of finite-dimensional representations; applying [F1] to the $G$-module $\operatorname{Hom}_k(V'',V')$ of [F2] gives the exact sequence $H^0(G,\operatorname{Hom}(V'',V))\to H^0(G,\operatorname{Hom}(V'',V''))\xrightarrow{\delta}H^1(G,\operatorname{Hom}(V'',V'))$. The identity of $V''$ is a $G$-fixed element of $\operatorname{Hom}(V'',V'')$, and its image under $\delta$ lies in $H^1(G,\operatorname{Hom}(V'',V'))=0$; hence the identity lifts to a $G$-fixed element of $\operatorname{Hom}(V'',V)$, i.e. to a $G$-equivariant splitting of the sequence. Every short exact sequence of finite-dimensional representations splits, so every such representation is a direct sum of simple representations and $G$ is linearly reductive. [F1, F2]

1.2 Conversely suppose $G$ is linearly reductive and let $f:G\to V$ be a natural $1$-cocycle. On $W=V\oplus k$ define $g\cdot(v,a)=(g v+a f(g),a)$, functorially on every base algebra. The cocycle identity [F3] proves the action law; $f(e)=0$ follows by evaluating the identity at $e$, so the identity acts trivially. The entries are regular because $f$ is natural, hence a scheme morphism by Yoneda. This is a finite-dimensional rational representation and fits into $0\to V\to W\to k\to0$. Linear reductivity gives a $G$-equivariant splitting, whose value at $1$ is $(m,1)$. Its invariance means $gm+f(g)=m$, so $f(g)=m-gm$ is the coboundary of $-m$. Thus every $H^1$ class vanishes. This argument preserves the full general-group Statement. [F2, F3]

2.1 Step1.1 proves vanishing implies linear reductivity, and step1.2 proves the converse through an explicit finite-dimensional cocycle representation. Thus the equivalence holds, with no use of affine free-comodule effacement for a nonaffine group. [step 1.1, step 1.2] ∎
