---
id: thm-curvature-is-a-type-one-three-tensor
kind: theorem
title: Curvature is a type (1,3) tensor
status: published
origin: pipeline
deps: ["lem-curvature-is-c-infinity-linear-in-all-three-vector-fields", "def-smooth-tensor-field"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 11, Section 11.1, printed page 72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Proposition 7.1, printed pages 117–118
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

Let $\nabla$ be an affine connection on a smooth manifold $M$. For $p\in M$
and $u,v,w\in T_pM$, choose smooth local extensions $X,Y,Z$ and set

$$R_p(u,v)w:=(R(X,Y)Z)_p.$$

This is independent of the extensions, is trilinear in $(u,v,w)$, and varies
smoothly with $p$. Equivalently,

$$\mathcal R_p(\alpha,u,v,w):=\alpha\bigl(R_p(u,v)w\bigr)$$

is a smooth type $(1,3)$ tensor field. We use $R$ for both this tensor and its
vector-valued representative.

## Facts & Assumptions

[F1] Curvature is $C^\infty(M)$-linear separately in its three vector-field slots. [[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]].

[F2] A smooth type $(1,3)$ tensor field is a smooth section of $T^1_3M$. [[def-smooth-tensor-field]].

## Proof

**Given:** A point $p\in M$, tangent vectors $u,v,w\in T_pM$, and smooth local extensions $X,Y,Z$ on a common neighborhood of $p$.

1.1 If $X'$ is another extension of $u$, take a coordinate frame $E_1,\ldots,E_n$ near $p$ and write $X-X'=\sum_a f^aE_a$. Since every $f^a(p)=0$, [F1] gives $(R(X-X',Y)Z)_p=\sum_a f^a(p)(R(E_a,Y)Z)_p=0$. Repeating this argument in the second and third slots proves independence of all three extensions. The same identities, evaluated at $p$, prove real trilinearity of $(u,v,w)\mapsto R_p(u,v)w$. [F1, algebra]

2.1 On a coordinate neighborhood with frame $E_i$ and dual coframe $\varepsilon^l$, put $R^l{}_{ijk}=\varepsilon^l(R(E_i,E_j)E_k)$. Each coefficient is smooth because the defining curvature expression applies the connection and Lie bracket to smooth fields. The identity $R_p(u,v)w=R^l{}_{ijk}(p)u^iv^jw^kE_l|_p$, obtained from [F1], therefore makes the vector-valued representative smooth. Pairing its output with a covector gives the smooth fibrewise multilinear map $\mathcal R_p$ above, hence a smooth section of $T^1_3M$ by [F2]. [F1, F2, step 1.1, algebra] ∎
