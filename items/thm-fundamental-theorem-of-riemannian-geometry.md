---
id: thm-fundamental-theorem-of-riemannian-geometry
kind: theorem
title: "Fundamental theorem of riemannian geometry"
status: published
origin: pipeline
deps: ["thm-the-koszul-formula-defines-an-affine-connection","lem-koszul-formula-is-necessary-for-a-levi-civita-connection","def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Every supplied smooth Riemannian metric on a smooth manifold, including a manifold with boundary, has exactly one Levi–Civita connection. The construction adds no choice assumption.

## Facts & Assumptions

**Given:** A smooth Riemannian metric $g$.

[F1] The Koszul expression defines a smooth affine connection with $2g(\nabla_XY,Z)=K(X,Y,Z)$ ([[thm-the-koszul-formula-defines-an-affine-connection]]).

[F2] Every Levi–Civita connection must satisfy this same Koszul identity ([[lem-koszul-formula-is-necessary-for-a-levi-civita-connection]]).

[F3] Levi–Civita means metric compatibility and torsion freeness ([[def-levi-civita-connection]]).

## Proof

1.1 Take the connection supplied by [F1]. In $K(X,Y,Z)+K(X,Z,Y)$ the two $X$-derivative terms add to $2Xg(Y,Z)$, the $Y$ and $Z$ derivative terms cancel, and the bracket terms cancel in pairs by metric symmetry and bracket skew-symmetry. Dividing by two gives $g(\nabla_XY,Z)+g(Y,\nabla_XZ)=Xg(Y,Z)$, proving compatibility. [F1]

2.1 In $K(X,Y,Z)-K(Y,X,Z)$ all metric derivative terms cancel. The bracket terms pairing against $X$ and $Y$ cancel because $[Z,X]=-[X,Z]$ and $[Z,Y]=-[Y,Z]$; the two remaining terms give $2g(Z,[X,Y])$. Thus $g(\nabla_XY-\nabla_YX-[X,Y],Z)=0$ for every local $Z$. Nondegeneracy gives torsion zero, so the connection is Levi–Civita. [F1, F3, step 1.1]

3.1 Any second Levi–Civita connection has exactly the same pairing with every $Z$ by [F2], so nondegeneracy identifies its derivative on every $X,Y$ with the constructed one. This proves uniqueness. Empty and zero-dimensional manifolds have the unique zero operator; dimension one still requires compatibility, supplied in step 1.1. The construction and nondegeneracy argument remain valid at boundary points and use no connection-existence choice theorem. [F2, step 2.1] ∎
