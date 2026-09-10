---
id: lem-based-sphere-maps-have-finite-affine-bubble-normal-forms
kind: lemma
title: Based sphere maps have finite affine bubble normal forms
deps: ["thm-finite-simplicial-approximation-for-maps-of-pairs", "prop-cubical-and-spherical-models-of-higher-homotopy-agree", "thm-quotient-universal-property", "lem-continuity-is-local-and-pastes", "def-euclidean-spheres-and-closed-balls"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Hatcher §2.C finite approximation and Proposition 2.30/Example 2.31 pp136–137 as ingredients; local explicit double-cube and radial-collapse construction
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let r≥1 and model the target based sphere by $\mathbb R^r\cup\{\infty\}$. Every based map $(I^r,\partial I^r)\to(\mathbb R^r\cup\{\infty\},\infty)$ is based homotopic to a map constant at infinity off finitely many disjoint closed parallelepipeds in the cube interior, and on each has the form $Q_R(A_j(x-c_j))$, with $A_j$ invertible and
$$Q_R(v)=\begin{cases}v/(1-\|v\|_\infty/R)&\|v\|_\infty<R,\\\infty&\|v\|_\infty\ge R.\end{cases}$$
Here R>0; the closed support is $\{x:\|A_j(x-c_j)\|_\infty\le R\}$. The finite family may be empty. No infinite choice is used.

## Facts & Assumptions

[F1] Finite pair approximation keeps a subcomplex mapping into a singleton fixed. [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F2] The collapsed cube is the based sphere. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]

[F3] Functions respecting quotient fibres descend continuously. [[thm-quotient-universal-property]]

[F4] Finite closed pasting preserves continuity. [[lem-continuity-is-local-and-pastes]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Double the cube $[-1,1]^r$ along its boundary. Subdivide each boundary face by ordering its free coordinates, compatibly on common faces, and cone this boundary triangulation to a separate center in each copy. This is a finite simplicial complex. Map the first copy identically to the unit sup-norm cube in $\mathbb R^r$, and the second by $x\mapsto x/\|x\|_\infty^2$, taking its center to infinity. The formulas agree on the shared boundary. Radially the second formula sends norm ρ to 1/ρ, so its inverse has the same formula; continuity at the center/infinity follows directly. This identifies the double with the compactified Euclidean space, with infinity a vertex. [F2, F3, F4]

2.1 Triangulate $I^r$ by the ordered-coordinate simplices, with boundary a subcomplex. Apply F1 to the given map into the double, using the boundary and the singleton infinity as the pair subcomplexes. Its pair homotopy fixes the entire source boundary. After subdivision the resulting simplicial map g is affine on every source simplex when its image lies in a simplex of the first copy. Choose p in the interior of one r-simplex in that copy, and R>0 small enough that $p+[-R,R]^r$ is contained in that interior. A source simplex meeting this cube must map onto that r-simplex: any proper image face misses its interior. Its dimension is r, so its affine map has an invertible linear part. [F1, step 1.1]

3.1 The inverse image of the small cube in each onto simplex is a closed parallelepiped strictly inside that simplex. Distinct such parallelepipeds are disjoint, and they avoid the source boundary because that boundary maps to infinity. On it $g(x)-p=A_j(x-c_j)$ where $g(c_j)=p$ and $A_j$ is invertible. There are finitely many such simplices. [step 2.1]

4.1 Translation by -p is based homotopic to the identity through translation by -tp: bounded translations preserve escape to infinity uniformly in t. Next use $Q_{R,t}(v)=v/(1-t\|v\|_\infty/R)$ where the denominator is positive, and infinity otherwise, including infinity. At a finite moving boundary with t>0 the output norm diverges. At infinity any finite output has norm at least the input norm, uniformly in t, proving continuity there even at t=0. Thus this is a continuous based homotopy from the identity to $Q_R$. Postcomposing the translated g gives the asserted bubbles on step 3.1 and infinity elsewhere. If there are no onto simplices, it gives the constant map. [F3, F4, step 2.1, step 3.1] ∎
