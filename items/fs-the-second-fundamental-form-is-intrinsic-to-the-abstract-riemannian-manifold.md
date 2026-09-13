---
id: fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold
kind: false-statement
title: The second fundamental form is intrinsic to the abstract Riemannian manifold
status: draft
origin: pipeline
deps: ["def-countable-choice","def-induced-connection-and-second-fundamental-form","prop-christoffel-formula-for-the-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 1, explicit plane-to-half-cylinder isometry and principal-curvature comparison, printed pages 5–6, together with Chapter 8, equations (8.2)–(8.4), printed pages 139–140
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Examples 14.2.5–14.2.6 and Remark 14.2.9, printed pages 105–107
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. The assumption is inherited exactly through [[def-induced-connection-and-second-fundamental-form]]; after that interface is fixed, the explicit plane-and-cylinder calculation makes no additional countable-family choice.

**False claim:** the second fundamental form is determined by the abstract
Riemannian manifold and therefore is preserved when the same intrinsic metric
is realized by different isometric embeddings.

Assume $\mathrm{AC}_\omega$. Even inside the same Euclidean ambient space, an
isometric plane strip and half-cylinder have different second fundamental
forms.

## Facts & Assumptions

**Given:** Countable choice and the flat strip
$U=\mathbb R\times(0,\pi)$ with coordinates $(x,y)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-induced-connection-and-second-fundamental-form]]; after that supplied interface is fixed, the explicit calculation makes no additional countable-family choice.

[F1] For an embedded Riemannian submanifold,
$\mathrm{II}(X,Y)=(\overline\nabla_XY)^\perp$.
[[def-induced-connection-and-second-fundamental-form]].

[F2] The Levi–Civita symbols of the Euclidean identity metric vanish.
[[prop-christoffel-formula-for-the-levi-civita-connection]].

## Refutation

**Proof technique:** direct counterexample.

1.1 Define embeddings $P,C:U\to\mathbb R^3$ by $P(x,y)=(x,y,0)$ and $C(x,y)=(x,\cos y,\sin y)$. Their tangent pairs are $P_x=(1,0,0)$, $P_y=(0,1,0)$ and $C_x=(1,0,0)$, $C_y=(0,-\sin y,\cos y)$, so direct dot products give $P^*\overline g=C^*\overline g=dx^2+dy^2$. Thus $C\circ P^{-1}$ is an isometry from the planar strip $P(U)$ to the half-cylinder $C(U)$, realizing exactly the same abstract Riemannian manifold. [algebra, construct]

2.1 All second coordinate derivatives of $P$ vanish. Since [F2] identifies the ambient Euclidean covariant derivative with ordinary coordinate differentiation, [F1] gives $\mathrm{II}_P(\partial_x,\partial_x)=\mathrm{II}_P(\partial_x,\partial_y)=\mathrm{II}_P(\partial_y,\partial_y)=0$. [A1, F1, F2, step 1.1, algebra]

2.2 Along the cylinder let $N(x,y)=(0,\cos y,\sin y)$, a smooth unit normal. One has $C_{xx}=C_{xy}=0$ and $C_{yy}=(0,-\cos y,-\sin y)=-N$. Hence [F1]–[F2] give $\mathrm{II}_C(\partial_x,\partial_x)=\mathrm{II}_C(\partial_x,\partial_y)=0$ but $\mathrm{II}_C(\partial_y,\partial_y)=-N\ne0$. [F1, F2, step 1.1, algebra]

3.1 The isometry in step 1.1 identifies the two ordered orthonormal tangent frames, yet steps 2.1–2.2 identify a component that is zero for one embedding and nonzero for the other. Therefore $\mathrm{II}$ is not intrinsic. [step 1.1, step 2.1, step 2.2]

4.1 The witness is nonempty, boundaryless, two-dimensional, and has positive-definite induced metric. Empty, zero-dimensional, and one-dimensional cases cannot invalidate this explicit two-dimensional counterexample to the universal claim. The open strip excludes the parameter endpoints $0,\pi$. Countable choice is inherited exactly through [A1] and [F1]; both embeddings and the cylinder normal are explicit, so no further selection occurs. No biconditional is asserted. [A1, F1, step 1.1, step 2.1, step 2.2, step 3.1] ∎
