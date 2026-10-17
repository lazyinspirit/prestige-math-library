---
id: thm-vector-bundles-glued-from-transition-cocycles
kind: theorem
title: Vector bundles are glued from transition cocycles
status: published
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, thm-quotient-universal-property]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Transition functions and reconstruction, printed pp.7–8"
    - title: "Milnor and Stasheff, Characteristic Classes, §§2–3"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Coordinate transformations and bundle construction, printed pp.14–20"
---

## Statement

Let $(U_i)_{i\in I}$ be an open cover of $X$, and let
$g_{ji}:U_i\cap U_j\to\operatorname{GL}_n(\mathbb F)$ be continuous maps
such that

$$g_{ii}=I,\qquad g_{ki}=g_{kj}g_{ji}.$$

The quotient of $\coprod_iU_i\times\mathbb F^n$ by
$(x,v,i)\sim(x,g_{ji}(x)v,j)$ is a rank-$n$ $\mathbb F$-vector bundle.
Replacing $g_{ji}$ by $g'_{ji}=h_jg_{ji}h_i^{-1}$ for continuous
$h_i:U_i\to\operatorname{GL}_n(\mathbb F)$ gives an isomorphic bundle.
Every rank-$n$ bundle is recovered from the cocycle of any linear atlas.

## Facts & Assumptions

**Given:** The cover and cocycle in the statement.

[F1] A vector bundle is locally a product by fiberwise-linear charts, and its transition order is $g_{ki}=g_{kj}g_{ji}$ ([[def-real-and-complex-topological-vector-bundle]]).

[F2] A map out of a quotient is continuous exactly when its composite with the quotient map is continuous ([[thm-quotient-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 The cocycle with $k=i$ gives $g_{ij}g_{ji}=I$. Hence the displayed relation is reflexive, symmetric, and transitive: the transitive calculation is $g_{kj}(g_{ji}v)=g_{ki}v$. It therefore defines a quotient $q:\coprod_iU_i\times\mathbb F^n\to E$ and a map $p:E\to X$ by $p[x,v,i]=x$. Since $pq(x,v,i)=x$ is continuous on every summand, the quotient property [F2] makes $p$ continuous. [F2, given, algebra]

2.1 The quotient map $q$ is open. Indeed, if $O$ is open in the coproduct, then the part of its saturation in the $j$th summand is the union over $k$ of the images of $O\cap((U_j\cap U_k)\times\mathbb F^n\times\{k\})$ under the homeomorphism $(x,v,k)\mapsto(x,g_{jk}(x)v,j)$; its inverse uses $g_{kj}=g_{jk}^{-1}$. Hence every such part is open. The restriction of $q$ over the saturated open set $p^{-1}(U_i)$ is therefore again a quotient map. Define $\Phi_i[x,v,k]=(x,g_{ik}(x)v)$. The cocycle makes this independent of the representative, and its composite with the restricted quotient map is continuous on every summand, so [F2] makes $\Phi_i$ continuous. Its inverse is $(x,w)\mapsto[x,w,i]$ and is continuous as the $i$th-summand inclusion followed by $q$. Thus $\Phi_i:p^{-1}(U_i)\cong U_i\times\mathbb F^n$ is a fiberwise-linear chart. Its overlap from $i$ to $j$ is $g_{ji}$, so [F1] proves that $E$ is the claimed bundle. [F1, F2, step 1.1]

3.1 For the primed cocycle, the maps on summands $(x,v,i)\mapsto[x,h_i(x)v,i]'$ respect the relation because $g'_{ji}h_i=h_jg_{ji}$. By [F2] they descend to a continuous fiberwise-linear map $E\to E'$. Replacing $h_i$ by $h_i^{-1}$ gives its continuous inverse, so it is a bundle isomorphism. [F2, step 2.1, algebra]

4.1 Finally, a linear atlas of a rank-$n$ bundle supplies the functions $g_{ji}$ and their cocycle law by [F1]. Sending the quotient class $[x,v,i]$ to $\phi_i^{-1}(x,v)$ is well-defined, continuous by [F2], and in each chart is the identity map on $U_i\times\mathbb F^n$. It is therefore a bundle isomorphism from the reconstructed quotient to the original bundle. [F1, F2, step 2.1] ∎
