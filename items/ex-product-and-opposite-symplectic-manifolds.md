---
id: ex-product-and-opposite-symplectic-manifolds
kind: example
title: Product and opposite symplectic manifolds
status: published
origin: pipeline
deps: ["prop-products-and-opposites-of-symplectic-manifolds", "thm-equivalent-characterizations-of-lagrangian-subspaces", "def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, products, and Lecture 2, diagonal example
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

For every symplectic manifold $(M,\omega)$, the diagonal
$\Delta_M\subset M^-\times M$ is Lagrangian for the product form
$-\operatorname{pr}_1^*\omega+\operatorname{pr}_2^*\omega$.

## Facts & Assumptions

**Given:** A symplectic manifold $(M,\omega)$.

[F1] Opposites and products carry the stated symplectic forms.
[[prop-products-and-opposites-of-symplectic-manifolds]].

[F2] In a $2n$-dimensional symplectic vector space a subspace is Lagrangian
exactly when it is isotropic and of dimension $n$, and a submanifold is
Lagrangian exactly when its tangent spaces are Lagrangian subspaces.
[[thm-equivalent-characterizations-of-lagrangian-subspaces]],
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

## Verification

**Proof technique:** direct.

1.1 A tangent vector to the diagonal is $(v,v)$. On two such vectors, the product form gives $-\omega(v,w)+\omega(v,w)=0$, so the diagonal is isotropic. [F1, given, algebra]

2.1 If $\dim M=2n$, then $\dim\Delta_M=2n$ and $\dim(M^-\times M)=4n$. Thus [F2] upgrades isotropy to Lagrangianity, including $n=0$. [F2, step 1.1] ∎
