---
id: thm-codazzi-equation-for-a-riemannian-submanifold
kind: theorem
title: Codazzi equation for a Riemannian submanifold
status: published
origin: pipeline
deps: ["def-normal-connection", "def-induced-connection-and-second-fundamental-form", "lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor", "thm-the-induced-connection-is-levi-civita", "def-curvature-of-an-affine-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, Codazzi equation (2.1.8) and surrounding adapted-frame definitions, printed pages 25–27
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

Assume $\mathrm{AC}_\omega$. For tangent fields on an embedded Riemannian
submanifold, define

$$(\nabla\mathrm{II})(X;Y,Z):=\nabla^\perp_X\mathrm{II}(Y,Z)-\mathrm{II}(\nabla^M_XY,Z)-\mathrm{II}(Y,\nabla^M_XZ).$$

Then the Codazzi equation is

$$(\overline R(X,Y)Z)^\perp=(\nabla\mathrm{II})(X;Y,Z)-(\nabla\mathrm{II})(Y;X,Z).$$

The curvature convention is
$\overline R(X,Y)Z=\overline\nabla_X\overline\nabla_YZ-\overline\nabla_Y\overline\nabla_XZ-\overline\nabla_{[X,Y]}Z$.
The choice hypothesis is inherited exactly through the smooth tangent and
normal projection constructions.

## Facts & Assumptions

**Given:** Countable choice, an embedded Riemannian submanifold, and tangent
fields $X,Y,Z$.

[F1] The Gauss decomposition is
$\overline\nabla_XY=\nabla^M_XY+\mathrm{II}(X,Y)$.
[[def-induced-connection-and-second-fundamental-form]].

[F2] The normal component of the ambient derivative of a normal field is
$\nabla^\perp$. [[def-normal-connection]].

[F3] The second fundamental form is a smooth normal-valued two-tensor.
[[lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor]].

[F4] The induced connection is torsion free.
[[thm-the-induced-connection-is-levi-civita]].

[F5] Curvature is the bracket-corrected commutator with the sign used in the
Statement. [[def-curvature-of-an-affine-connection]].

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the tangent field $\nabla^M_YZ$ and [F2] to the normal field $\mathrm{II}(Y,Z)$. Taking normal components gives $$(\overline\nabla_X\overline\nabla_YZ)^\perp=\mathrm{II}(X,\nabla^M_YZ)+\nabla^\perp_X\mathrm{II}(Y,Z).$$ The same formula with $X$ and $Y$ interchanged also holds, while [F1] gives $(\overline\nabla_{[X,Y]}Z)^\perp=\mathrm{II}([X,Y],Z)$. [F1, F2, F3, algebra]

2.1 Substitute step 1.1 into [F5]: $$(\overline R(X,Y)Z)^\perp=\nabla^\perp_X\mathrm{II}(Y,Z)-\nabla^\perp_Y\mathrm{II}(X,Z)+\mathrm{II}(X,\nabla^M_YZ)-\mathrm{II}(Y,\nabla^M_XZ)-\mathrm{II}([X,Y],Z).$$ [F5, step 1.1, algebra]

3.1 By [F4], $[X,Y]=\nabla^M_XY-\nabla^M_YX$. Replace the bracket term in step 2.1 and regroup the first, third, and fifth terms and then the remaining terms according to the definition in the Statement. The result is precisely $(\nabla\mathrm{II})(X;Y,Z)-(\nabla\mathrm{II})(Y;X,Z)$. [F3, F4, step 2.1, algebra]

4.1 On an empty or zero-dimensional submanifold every term is the unique zero section. In dimension one the skew pair $(X,Y)$ forces both sides to vanish; normal rank zero also makes both sides zero. The tensorial formula applies at boundary points, and positive definiteness supplies its projections. The stated $\mathrm{AC}_\omega$ is inherited through [F1]–[F4], with no new selection. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
