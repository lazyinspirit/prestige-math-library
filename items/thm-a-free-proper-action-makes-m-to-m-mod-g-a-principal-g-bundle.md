---
id: thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle
kind: theorem
title: A free proper action makes M to M/G a principal bundle
status: published
origin: pipeline
deps: [thm-free-proper-action-quotient-manifold, lem-local-slice-for-a-free-proper-action, def-smooth-fibre-bundle-and-local-trivialization, def-principal-g-bundle-and-associated-fiber-bundle]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Local product and quotient-chart construction in Theorem 21.10, printed pages 545–547
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $G$ act smoothly, freely, and properly on the left of $M$. With the
equivalent right action

$$x\mathbin{\cdot}g:=g^{-1}\mathbin{\cdot}x,$$

the orbit projection $q:M\to M/G$ is a smooth right principal $G$-bundle.

## Facts & Assumptions

**Given:** A smooth free proper left action of $G$ on $M$.

[F1] The quotient is a smooth manifold and $q$ is a smooth surjective
submersion. [[thm-free-proper-action-quotient-manifold]].

[F2] Every point has a slice $S$ such that
$A:G\times S\to G\cdot S$, $(g,s)\mapsto g\cdot s$, is a diffeomorphism.
[[lem-local-slice-for-a-free-proper-action]].

[F3] A principal bundle has equivariant local product charts, with ordinary
right multiplication on the group coordinate.
[[def-principal-g-bundle-and-associated-fiber-bundle]],
[[def-smooth-fibre-bundle-and-local-trivialization]].

## Proof

**Proof technique:** turn the slice products into equivariant bundle charts.

1.1 The formula $x\cdot g=g^{-1}\cdot x$ is a right action because $(x\cdot g)\cdot h=h^{-1}g^{-1}\cdot x=(gh)^{-1}\cdot x=x\cdot(gh)$. It is smooth, has the same orbits as the original action, and is free. [given, algebra]

2.1 Let $S$ be a slice from [F2], put $U=q(S)$, and let $s:U\to S$ be the smooth inverse of $q|_S$. Define $$\Psi:U\times G\longrightarrow q^{-1}(U),\qquad \Psi(u,g)=s(u)\cdot g=g^{-1}\cdot s(u).$$ Under the diffeomorphism $A:G\times S\to G\cdot S=q^{-1}(U)$, this is the composite of factor swap with inversion on $G$, so it is a diffeomorphism. It lies over $U$ because $q(\Psi(u,g))=u$. [F1, F2, step 1.1]

3.1 The map is right equivariant: $$\Psi(u,gk)=s(u)\cdot(gk)=(s(u)\cdot g)\cdot k=\Psi(u,g)\cdot k.$$ The slice neighborhoods cover $M/G$, so the maps $\Psi^{-1}$ are smooth equivariant local trivializations with fibre $G$. By [F3], $q$ is a right principal $G$-bundle. No choice principle is used. [F3, step 1.1, step 2.1] ∎
