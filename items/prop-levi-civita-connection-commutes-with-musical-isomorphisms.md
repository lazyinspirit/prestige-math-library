---
id: prop-levi-civita-connection-commutes-with-musical-isomorphisms
kind: proposition
title: "Levi civita connection commutes with musical isomorphisms"
status: published
origin: pipeline
deps: ["thm-fundamental-theorem-of-riemannian-geometry","def-dual-connection","thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For Levi–Civita and its dual connection,
$$(\nabla_X\alpha)^\sharp=\nabla_X(\alpha^\sharp),\qquad \nabla_X(Y^\flat)=(\nabla_XY)^\flat.$$

## Facts & Assumptions

**Given:** A Riemannian metric, its Levi–Civita connection, a one-form $\alpha$ and fields $X,Y$.

[F1] Levi–Civita is metric compatible ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F2] The dual derivative satisfies $(\nabla_X\alpha)(Y)=X(\alpha(Y))-\alpha(\nabla_XY)$ ([[def-dual-connection]]).

[F3] Musical maps are smooth inverse maps characterized by metric pairing ([[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]).

## Proof

1.1 Put $A=\alpha^\sharp$. Then $(\nabla_X\alpha)(Y)=Xg(A,Y)-g(A,\nabla_XY)=g(\nabla_XA,Y)$ by compatibility. Since this holds for all local $Y$, nondegeneracy identifies $(\nabla_X\alpha)^\sharp$ with $\nabla_XA$. [F1, F2, F3]

2.1 Substitute $\alpha=Y^\flat$ in step 1.1 and use both inverse identities of [F3] to get the flat formula. Zero fields/forms give zero on both sides; dimension zero has the unique fibre maps and rank one requires no modification. All constructions are local and smooth at boundary points, and no basis family or metric existence theorem is used. [F3, step 1.1] ∎
