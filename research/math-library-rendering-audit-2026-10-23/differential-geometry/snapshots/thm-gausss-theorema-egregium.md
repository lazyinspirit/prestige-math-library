---
id: thm-gausss-theorema-egregium
kind: theorem
title: Gauss’s Theorema Egregium
status: published
origin: pipeline
deps: ["def-countable-choice","thm-gauss-equation-for-a-riemannian-submanifold","thm-weingarten-equation-and-adjointness-of-the-shape-operator","thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space","thm-fundamental-theorem-of-riemannian-geometry","def-determinant-of-a-linear-operator","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 14.2.12 with complete pointwise proof, printed page 108
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Theorem 8.6 with complete proof, printed pages 143–144
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
landmark: true
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume $\mathrm{AC}_\omega$. Let $M^2\subseteq\mathbb R^3$ be a surface
with its induced metric. For every $p\in M$ and either smooth local unit
normal $\nu$ near $p$,

$$\det S_{\nu,p}=K(T_pM).$$

The left side is independent of the sign of $\nu$ and equals the intrinsic
sectional curvature, so it is determined by the induced Riemannian metric.
The choice hypothesis is inherited through both the smooth submanifold
projection constructions and the supplied sectional-curvature interface.

## Facts & Assumptions

**Given:** Countable choice, the Euclidean surface, a point $p$, and a supplied local unit normal $\nu$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] The Gauss equation expresses intrinsic curvature as ambient curvature plus the two ordered quadratic `II` terms. [[thm-gauss-equation-for-a-riemannian-submanifold]].

[F2] The shape operator satisfies $g(S_\nu X,Y)=\langle\mathrm{II}(X,Y),\nu\rangle$ and is self-adjoint. [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F3] Euclidean space is locally isometric to itself and hence flat. [[thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space]].

[F4] For an orthonormal tangent pair $(e_1,e_2)$, $K(T_pM)=\operatorname{Rm}^M(e_1,e_2,e_2,e_1)$. [[def-sectional-curvature]].

[F5] The determinant of an endomorphism is basis independent. [[def-determinant-of-a-linear-operator]].

[F6] The induced metric determines a unique Levi–Civita connection. [[thm-fundamental-theorem-of-riemannian-geometry]].

## Proof

**Proof technique:** direct.

1.1 Choose one orthonormal basis $(e_1,e_2)$ of the supplied tangent plane. Since the normal fibre is spanned by $\nu$, [F2] gives $$\mathrm{II}(e_i,e_j)=g(S_\nu e_i,e_j)\nu.$$ Write $h_{ij}=g(S_\nu e_i,e_j)$. In this basis [F5] gives $\det S_{\nu,p}=h_{11}h_{22}-h_{12}h_{21}$. [F2, F5, choose, algebra]

2.1 Apply [F1] with $X=W=e_1$ and $Y=Z=e_2$. The ambient term vanishes by [F3], and step 1.1 yields $\operatorname{Rm}^M(e_1,e_2,e_2,e_1)=h_{11}h_{22}-h_{12}h_{21}=\det S_{\nu,p}.$ By [F4] this is $K(T_pM)$. [A1, F1, F3, F4, step 1.1, algebra]

3.1 Replacing $\nu$ by $-\nu$ replaces $S_\nu$ by $-S_\nu$; in dimension two, $\det(-S_\nu)=(-1)^2\det S_\nu=\det S_\nu$. Thus the value is independent of the local normal sign. By [F6], the curvature tensor and therefore [F4]'s sectional curvature are determined solely by the induced metric, proving the intrinsic conclusion. [F5, F6, step 2.1, algebra]

4.1 The assertion is vacuous for the empty surface and is specifically two-dimensional, so zero- and one-dimensional cases are outside its hypothesis. The fibrewise calculation applies at boundary points and positive definiteness supplies the orthonormal basis. Only one finite basis and one supplied local normal are used. The stated $\mathrm{AC}_\omega$ is inherited through [F1]–[F2] and [F4], with no new family selection. [F1, F2, F4, F5, step 1.1, step 2.1, step 3.1] ∎
