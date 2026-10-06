---
id: def-orientation-line-of-a-morse-critical-point
kind: definition
title: "The orientation line of a Morse critical point"
status: published
origin: pipeline
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-stable-and-unstable-sets-of-a-critical-point, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, lem-stable-and-unstable-manifolds-are-flow-invariant, def-nondegenerate-critical-point-nullity-index-and-coindex, def-morse-smale-pair]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5 and Remark 2.5.3(a), printed pp. 62-65 (orientations $or^-(p)$ of the unstable manifolds)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3, printed pp. 70-71 (orientations and co-orientations of stable/unstable manifolds)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 69-70 (fixing an orientation of each unstable manifold)"
dependency_level: 0
---

## Definition

Let $(f,X)$ be a Morse--Smale pair on a manifold $M$ and let $p$ be a critical point of index $\lambda(p)$. The **orientation line** of $p$ is the determinant line
$$o_p:=\det T_pW^u(p)=\Lambda^{\lambda(p)}T_pW^u(p)$$
of the tangent space at $p$ of the unstable manifold ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]). An **orientation of the critical point** is a choice of positive ray in $o_p$; equivalently, since $W^u(p)$ is connected and diffeomorphic to $\mathbb R^{\lambda(p)}$ ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]]), it is a choice of orientation of the disk $W^u(p)$. No orientation of $M$ and no orientability of $M$ is used; the orientation lines are extra data attached to the critical points.

Here $W^u(p)$ is the unstable set of $p$ under the descending flow
([[def-stable-and-unstable-sets-of-a-critical-point]]), an immersed
$\lambda(p)$-dimensional manifold by
[[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]],
with $\lambda(p)$ the Morse index of
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]; the pair
$(f,X)$ is Morse--Smale in the sense of [[def-morse-smale-pair]], so $X$ is
complete. The unstable manifold is diffeomorphic to $\mathbb R^{\lambda(p)}$
and hence connected and orientable. Flow invariance
([[lem-stable-and-unstable-manifolds-are-flow-invariant]]) makes $X$ tangent to it:
differentiating $t\mapsto\Phi_t(x)\in W^u(p)$ at $t=0$ gives $X_x\in T_xW^u(p)$.
Because $W^u(p)$ is connected and diffeomorphic to a Euclidean space, a ray in $\det T_pW^u(p)$ extends uniquely to a continuous orientation of $W^u(p)$ (pull back to Euclidean space and choose the constant sign matching the ray at $p$);
and restricting an orientation of $W^u(p)$ back to $p$ returns the ray: the two
descriptions of an orientation of $p$ agree. For $\lambda(p)=0$ the line $o_p$
is $\Lambda^0\{0\}=\mathbb R$ and an orientation of $p$ is a choice of one of
its two rays, matching the two orientations of a one-point manifold.

The orientation line is attached to $p$, not to $M$: the tangent space
$T_pW^u(p)$ is defined by the backward-limit set of the flow, and $o_p$ carries
no information about an orientation of the ambient manifold. Different critical
points may be oriented independently, and replacing the chosen ray by its
opposite is the operation of reversing the orientation of $p$ used later.
