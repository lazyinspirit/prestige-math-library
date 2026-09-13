---
id: cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending
kind: counterexample
title: The same intrinsic planar strip can have different extrinsic curvature after bending
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "def-induced-connection-and-second-fundamental-form", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-connection-laws-in-directional-form", "thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Explicit plane-to-half-cylinder isometry and principal-curvature comparison, printed pages 5–6
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Examples 14.2.5–14.2.6, printed pages 105–106
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: counterexample
---

## False claim

The induced Riemannian metric of a Euclidean surface determines its second
fundamental form, up to transport by intrinsic isometries.

## Counterexample

Assume $\mathrm{AC}_\omega$ and let $r>0$. On
$U=(0,\pi r)\times\mathbb R$, define two embeddings into Euclidean
$\mathbb R^3$ by

$$F(u,v)=(u,v,0),\qquad G(u,v)=\bigl(r\cos(u/r),r\sin(u/r),v\bigr).$$

Both pull back the Euclidean metric to $du^2+dv^2$, so
$G\circ F^{-1}$ is an intrinsic isometry from a planar strip to an open
half-cylinder and both induced metrics are flat. Nevertheless, for the
displayed normals,

$$\mathrm{II}_F=0,\qquad \mathrm{II}_G(\partial_u,\partial_u)=-\frac1rN_G\ne0.$$

Thus the two isometric surfaces have different second fundamental forms, and
the false claim fails. The countable-choice assumption is inherited exactly
from the general second-fundamental-form construction.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $r>0$, $U$, the two displayed embeddings,
and the standard Euclidean metric.

[F1] Countable choice permits a choice from every sequence of nonempty sets, and pullback by an immersion gives its induced Riemannian metric. [[def-countable-choice]], [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]].

[F2] Under $\mathrm{AC}_\omega$, the second fundamental form is the normal component $\mathrm{II}(X,Y)=(\overline\nabla_XY)^\perp$. [[def-induced-connection-and-second-fundamental-form]].

[F3] The metric Christoffel formula and connection Leibniz rule identify Euclidean covariant derivatives with ordinary Cartesian derivatives. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

[F4] A Riemannian manifold is flat exactly when it is locally isometric to Euclidean space. [[thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space]].

## Verification

**Proof technique:** explicit counterexample.

1.1 The plane derivatives are $F_u=(1,0,0)$ and $F_v=(0,1,0)$. For $\theta=u/r$, the cylinder derivatives are $G_u=(-\sin\theta,\cos\theta,0)$ and $G_v=(0,0,1)$. Each pair is orthonormal, so both differentials are injective and [F1] gives $F^*g_{\mathrm E}=G^*g_{\mathrm E}=du^2+dv^2$. [F1, given, algebra]

2.1 The interval $0<u<\pi r$ makes $\theta\mapsto(\cos\theta,\sin\theta)$ injective with positive second coordinate, so $F$ and $G$ identify $U$ diffeomorphically with the planar strip and open upper half-cylinder, respectively. Step 1.1 then shows directly that $G\circ F^{-1}$ preserves the metric. Since $(U,du^2+dv^2)$ is locally Euclidean, [F4] also makes both induced metrics flat. [F4, step 1.1, algebra]

2.2 The constant unit normal $N_F=(0,0,1)$ and every second derivative of $F$ are zero. The Cartesian Euclidean symbols vanish by [F3], so [F2] gives $\mathrm{II}_F(\partial_i,\partial_j)=0$ for every $i,j$. [F2, F3, step 1.1, algebra]

2.3 The outward unit cylinder normal is $N_G=(\cos\theta,\sin\theta,0)$. Here $G_{uu}=-(1/r)N_G$ is already normal, while $G_{uv}=G_{vv}=0$. Thus [F2]–[F3] give $\mathrm{II}_G(\partial_u,\partial_u)=-(1/r)N_G\ne0$ and zero for the other coordinate pairs. [F2, F3, step 1.1, algebra]

3.1 The isometry in step 2.1 identifies the same intrinsic metric on the two strips, but steps 2.2–2.3 exhibit a tangent pair for which one second fundamental form is zero and the other is nonzero. Hence no transport by that intrinsic isometry can identify the two forms, which is the promised concrete failure of the false claim. [step 2.1, step 2.2, step 2.3, algebra]

4.1 The domain and both images are nonempty fixed two-manifolds, so zero- and one-dimensional cases are inapplicable. The condition $r>0$ makes the interval nonempty, the embeddings immersive, and $1/r$ defined; $r=0$ is the excluded collapsed cylinder. The open interval omits both seam endpoints, and the images have no manifold boundary. The embeddings, normals, and isometry are explicit. The only choice assumption is the stated $\mathrm{AC}_\omega$ inherited through [F2], and the calculations add none. The item refutes a universal determination claim by one witness rather than asserting a biconditional. [F1, F2, F3, F4, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1] ∎
