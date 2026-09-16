---
id: fs-zero-mean-curvature-implies-a-submanifold-is-totally-geodesic
kind: false-statement
title: Zero mean curvature implies a submanifold is totally geodesic
status: published
origin: pipeline
deps: ["def-mean-curvature-vector", "def-totally-geodesic-submanifold", "def-induced-connection-and-second-fundamental-form", "prop-christoffel-formula-for-the-levi-civita-connection", "thm-hyperbolic-identities-and-derivatives", "thm-sine-and-cosine-derivatives", "thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Danny Calegari, Minimal Surfaces
      url: https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf
      locator: Chapter 3, Lemma 1.2 and Example 1.6, printed pages 4–7, together with Section 2.2 and equation (2.1), printed pages 12–14
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Gaussian and mean curvatures and minimal-hypersurface discussion, printed pages 142–143
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

**False claim:** if a positive-dimensional Riemannian submanifold has zero
mean-curvature vector, then it is totally geodesic.

Assume $\mathrm{AC}_\omega$. Mean curvature is only the trace of the second
fundamental form, so nonzero trace-free extrinsic curvature can remain.

## Facts & Assumptions

**Given:** Countable choice and the open parameter domain $U=(-\pi,\pi)\times\mathbb R$.

[F1] For a positive-dimensional immersion, the averaged mean-curvature vector is $\mathbf H=\frac1m\operatorname{tr}_g\mathrm{II}$. [[def-mean-curvature-vector]].

[F2] An embedded Riemannian submanifold is totally geodesic exactly when its normal-valued second fundamental form vanishes identically. [[def-totally-geodesic-submanifold]].

[F3] The second fundamental form is the normal component of the ambient covariant derivative, and the Euclidean Levi–Civita symbols vanish in Cartesian coordinates. [[def-induced-connection-and-second-fundamental-form]], [[prop-christoffel-formula-for-the-levi-civita-connection]].

[F4] The derivatives and identities $(\cosh v)'=\sinh v$, $(\sinh v)'=\cosh v$, $\cosh^2v-\sinh^2v=1$, $(\sin u)'=\cos u$, $(\cos u)'=-\sin u$, and $\sin^2u+\cos^2u=1$ hold. [[thm-hyperbolic-identities-and-derivatives]], [[thm-sine-and-cosine-derivatives]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]].

## Refutation

**Proof technique:** direct counterexample.

1.1 Define $X:U\to\mathbb R^3$ by $X(u,v)=(\cosh v\cos u,\cosh v\sin u,v)$. Using [F4], $X_u=(-\cosh v\sin u,\cosh v\cos u,0)$ and $X_v=(\sinh v\cos u,\sinh v\sin u,1)$, so $\langle X_u,X_u\rangle=\langle X_v,X_v\rangle=\cosh^2v$ and $\langle X_u,X_v\rangle=0$. Thus $X$ is an immersion with induced metric $\cosh^2v(du^2+dv^2)$. The coordinate $v$ is recovered from the third component, and $u\in(-\pi,\pi)$ is recovered from the seam-free circle coordinate, so this chart is an embedding onto its image. [F4, algebra, construct]

2.1 The cross product from step 1.1 has length $\cosh^2v$, yielding the smooth unit normal $N=(\operatorname{sech}v\cos u,\operatorname{sech}v\sin u,-\tanh v)$. The second derivatives are $X_{uu}=(-\cosh v\cos u,-\cosh v\sin u,0)$, $X_{uv}=(-\sinh v\sin u,\sinh v\cos u,0)$, and $X_{vv}=(\cosh v\cos u,\cosh v\sin u,0)$. Their inner products with $N$ are respectively $-1,0,1$, so [F3] gives $\mathrm{II}(X_u,X_u)=-N$, $\mathrm{II}(X_u,X_v)=0$, and $\mathrm{II}(X_v,X_v)=N$. [F3, F4, step 1.1, algebra]

3.1 The vectors $e_1=X_u/\cosh v$ and $e_2=X_v/\cosh v$ are orthonormal by step 1.1. Step 2.1 therefore gives $\mathrm{II}(e_1,e_1)=-\operatorname{sech}^2v\,N$ and $\mathrm{II}(e_2,e_2)=\operatorname{sech}^2v\,N$. By [F1], $\mathbf H=\frac12(\mathrm{II}(e_1,e_1)+\mathrm{II}(e_2,e_2))=0$ everywhere. [F1, step 1.1, step 2.1, algebra]

4.1 Nevertheless step 2.1 gives $\mathrm{II}(X_u,X_u)=-N\ne0$ at every point (at $(u,v)=(0,0)$ it is the explicit vector $(-1,0,0)$). By [F2] the catenoid chart is not totally geodesic, which refutes the claim. [F2, step 1.1, step 2.1, step 3.1]

5.1 The witness is nonempty, boundaryless, two-dimensional, and its induced conformal factor $\cosh^2v$ is strictly positive. The open angular interval excludes both seam endpoints; no limiting assertion is made. Empty and zero-dimensional cases are outside the positive-dimensional claim, while in dimension one [F1] makes $\mathbf H=\mathrm{II}(e,e)$, so the implication happens to hold there. Countable choice is inherited exactly through [F1]–[F3]; the parametrization, frame, and normal are explicit and add no choice. No biconditional is asserted. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
