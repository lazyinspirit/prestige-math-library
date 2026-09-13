---
id: thm-equivalent-characterizations-of-a-totally-geodesic-submanifold
kind: theorem
title: Equivalent characterizations of a totally geodesic submanifold
status: published
origin: pipeline
deps: ["def-totally-geodesic-submanifold", "def-induced-connection-and-second-fundamental-form", "thm-the-induced-connection-is-levi-civita", "lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor", "def-geodesic-of-an-affine-connection", "def-covariant-derivative-along-a-curve", "thm-existence-uniqueness-and-smooth-dependence-of-geodesics"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, definition of totally geodesic and Exercise 8.4, printed page 139
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

Assume $\mathrm{AC}_\omega$. Let $M\subseteq\overline M$ be an embedded
Riemannian submanifold, and assume both manifolds are boundaryless so that the
library's two-sided geodesic convention applies. The following conditions are
equivalent:

1. $\mathrm{II}=0$, so $M$ is totally geodesic;
2. $\overline\nabla_XY$ is tangent to $M$ for all local tangent fields $X,Y$;
3. every intrinsic affinely parametrized geodesic of $M$, viewed in
   $\overline M$, is an ambient affinely parametrized geodesic on every common
   interval of definition.

The choice hypothesis is inherited exactly from the smooth submanifold
projections and geodesic existence.

## Facts & Assumptions

**Given:** Countable choice and the boundaryless embedded Riemannian
submanifold.

[F1] Total geodesicity means $\mathrm{II}=0$.
[[def-totally-geodesic-submanifold]].

[F2] The Gauss decomposition is
$\overline\nabla_XY=\nabla^M_XY+\mathrm{II}(X,Y)$.
[[def-induced-connection-and-second-fundamental-form]].

[F3] The induced connection is the intrinsic Levi–Civita connection.
[[thm-the-induced-connection-is-levi-civita]].

[F4] The second fundamental form is symmetric and bilinear.
[[lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor]].

[F5] A geodesic is characterized by vanishing covariant acceleration, with
the derivative along a curve defined by the pullback connection.
[[def-geodesic-of-an-affine-connection]],
[[def-covariant-derivative-along-a-curve]].

[F6] Under $\mathrm{AC}_\omega$, every supplied initial tangent vector has a
unique local intrinsic geodesic. [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]].

## Proof

**Proof technique:** direct.

1.1 By [F2], the normal component of $\overline\nabla_XY$ is exactly $\mathrm{II}(X,Y)$. Thus condition 1 holds if and only if condition 2 holds. [F1, F2, algebra]

1.2 Pulling [F2] back along a smooth curve $\gamma$ in $M$ and evaluating on its velocity gives the curvewise Gauss formula $$\overline D_t\gamma'=D^M_t\gamma'+\mathrm{II}(\gamma',\gamma').$$ This follows in a local frame directly from the pullback derivative in [F5], so it is independent of field extensions. If condition 1 holds and $\gamma$ is an intrinsic geodesic, [F3] and [F5] make the first term zero and [F1] makes the second zero. Hence $\gamma$ is an ambient geodesic, proving condition 3. [F1, F2, F3, F5, algebra]

2.1 Conversely assume condition 3. Fix $p\in M$ and $v\in T_pM$. By [F6] there is an intrinsic geodesic $\gamma$ with $(\gamma(0),\gamma'(0))=(p,v)$. Condition 3 and [F5] make both covariant accelerations in step 1.2 zero, so $\mathrm{II}_p(v,v)=0$. Since $p,v$ were arbitrary, this holds for every tangent vector. [F5, F6, step 1.2, choose]

3.1 By symmetry and bilinearity [F4], polarization gives $$2\mathrm{II}_p(u,v)=\mathrm{II}_p(u+v,u+v)-\mathrm{II}_p(u,u)-\mathrm{II}_p(v,v)=0.$$ Thus $\mathrm{II}=0$, proving condition 1 and completing the equivalence. [F4, step 2.1, algebra]

4.1 On the empty manifold all three universal conditions hold. In dimension zero all geodesics are constant and $\mathrm{II}$ is zero; the proof applies unchanged in dimension one and in codimension zero. Both manifolds are explicitly boundaryless because [F5] uses that convention; parameter intervals have nonempty interior and any included endpoints use their stated one-sided derivative. Positive definiteness supplies the orthogonal decomposition. The only choice is the declared $\mathrm{AC}_\omega$ inherited through [F1]–[F3] and used by [F6]; step 2.1 invokes existence for one supplied $(p,v)$ at a time. [F1, F2, F3, F5, F6, step 1.1, step 1.2, step 2.1, step 3.1] ∎
