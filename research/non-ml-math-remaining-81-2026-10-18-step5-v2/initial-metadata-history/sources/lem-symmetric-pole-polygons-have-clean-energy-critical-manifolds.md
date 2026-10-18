---
id: lem-symmetric-pole-polygons-have-clean-energy-critical-manifolds
kind: lemma
title: Clean energy critical manifolds in Clifford-centriole polygon spaces
status: draft
dependency_level: 5
origin: pipeline
deps:
- def-axiom-of-choice
- lem-clifford-centrioles-and-geodesic-tangent-condition
- thm-second-variation-formula-for-energy
- lem-integration-by-parts-for-the-index-form
- prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints
- thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
- prop-killing-fields-restrict-to-jacobi-fields-along-geodesics
- thm-euclidean-inverse-function-theorem
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
---

## Statement

Assume AC. Let $P$ be $\mathrm{SO}(p)$ or a Clifford centriole $P_l$ with the normalized trace metric, and let $(o,q)$ be its indicated pole pair $(I,-I)$ or $(J_l,-J_l)$ in one component. For a fixed energy bound $c$, choose a convexity radius $r>0$ and a mesh $n$ with $c/n<r^2$. The short-edge polygon energy has compact sublevels in each path component. Its critical points are precisely sampled smooth constant-speed geodesics. Its Hessian has the same index and kernel as the path index form. The critical loci in a bounded sublevel form a finite union of compact Morse–Bott manifolds, with Hessian kernel equal to the tangent to the endpoint-fixing isotropy orbit.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The spaces are compact totally geodesic matrix symmetric spaces; their ambient connection and curvature satisfy $\nabla_XY=[X,Y]/2$ and $R(Y,X)X=-\operatorname{ad}_X^2Y/4$. ([[lem-clifford-centrioles-and-geodesic-tangent-condition]]).

[F2] For fixed endpoints, the Hessian of $E=\int_0^1|\gamma'|^2$ is twice the index form, including the correct piecewise endpoint and corner terms. ([[thm-second-variation-formula-for-energy]], [[lem-integration-by-parts-for-the-index-form]]).

[F3] Fixed-endpoint null fields of the index form are Jacobi fields; prescribed initial value and derivative determine a unique Jacobi field. Killing variations restrict to Jacobi fields. ([[prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints]], [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]], [[prop-killing-fields-restrict-to-jacobi-fields-along-geodesics]]).

[F4] A map with invertible derivative admits a local inverse; the tubular-neighborhood theorem supplies the normal slices used here. ([[thm-euclidean-inverse-function-theorem]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Put $x_0=o$, $x_n=q$, and let $Q_n$ be the open set of $(x_1,\ldots,x_{n-1})\in P^{n-1}$ with $\operatorname{dist}(x_{j-1},x_j)<r$. Define $E_n=n\sum_j\operatorname{dist}(x_{j-1},x_j)^2$. On $E_n\le c$ every edge length is at most $\sqrt{c/n}<r$. Thus this sublevel is closed in the compact product and lies inside $Q_n$. A fixed path component is closed here: sufficiently close vertex families yield pointwise short-geodesic homotopies. First variation at a vertex is twice the incoming velocity minus twice the outgoing velocity. Hence the critical polygons are exactly sampled smooth geodesics. [A1, F1, F2, construct]


1.2 For $l\ge1$ write $\mathfrak h=\{Z\in\mathfrak{so}(p):[Z,J_i]=0\ (i<l)\}$, $\mathfrak k=\{Z\in\mathfrak h:[Z,J_l]=0\}$ and $\mathfrak m=\{Z\in\mathfrak h:ZJ_l=-J_lZ\}$. Then $\mathfrak h=\mathfrak k\oplus\mathfrak m$, $[\mathfrak m,\mathfrak m]\subseteq\mathfrak k$, and $T_{J_l}P_l=\mathfrak mJ_l$. Along $\gamma(t)=\exp(tX)J_l$, $X\in\mathfrak m$, the parallel curvature operator is $-\operatorname{ad}_X^2/4$ on $\mathfrak m$. It is nonnegative since $\operatorname{ad}_X$ is skew-adjoint for the trace metric. In a parallel eigenframe, a Jacobi field vanishing at zero is $tV$ on the zero eigenspace and $\sin(\sqrt\kappa t)V/\sqrt\kappa$ on an eigenspace of eigenvalue $\kappa>0$. The terminal value vanishes precisely for the latter directions with $\sqrt\kappa\in\pi\mathbb N$. [F1, F3, algebra]


2.1 At a critical geodesic decompose any endpoint-zero $H^1$ field as $W=J+Z$, where $J$ is the unique edgewise Jacobi field with the same vertex values and $Z$ vanishes at every vertex. Short convex edges have no conjugate points, so those Jacobi interpolants exist uniquely. Integration by parts on every edge gives $I(J,Z)=0$. On the edgewise zero-vertex space the index form is positive definite: if $Y$ is the Jacobi fundamental matrix with $Y(0)=0$ and $Y'(0)=I$, then before the first conjugate point $S=Y'Y^{-1}$ is symmetric and satisfies $S'+S^2+R=0$. Expanding $|Z'-SZ|^2$ and integrating gives $I(Z,Z)=\int|Z'-SZ|^2$; the boundary terms vanish, first for smooth zero-endpoint fields and then by $H^1$ approximation. Equality forces $Z'=SZ$ and the zero terminal value forces $Z=0$. Thus the polygon Hessian is twice $I$ on the interpolant space and has exactly the full Hessian's index and kernel. [F2, F3, step 1.1, algebra]


3.1 For such an eigenvector $Y\in\mathfrak m$ put $B=[X,Y]/(4\kappa)\in\mathfrak k$. The identity $\operatorname{ad}_X^2Y=-4\kappa Y$ gives $[B,X]=Y$. Conjugation of $\gamma$ by $\exp(sB)$ is a geodesic variation fixing both $J_l$ and $-J_l$, with initial derivative $YJ_l$. By uniqueness it is the corresponding Jacobi field. Therefore all endpoint-zero Jacobi fields are tangent to the orbit of the compact centralizer of $J_1,\ldots,J_l$. For $l=0$ use conjugation in $\mathrm{SO}(p)$, which fixes $I$ and $-I$, with the same bracket calculation. Its orbit is compact and embedded; its tangent is exactly the Hessian kernel by step 2.1. [F1, F3, step 2.1, step 1.2, algebra]


4.1 Choose a normal slice to one such orbit. The Hessian on that slice is invertible. Apply the inverse theorem to the normal component of the differential of $E_n$ in slice coordinates: its only zero near the zero section is the zero section. Hence the critical locus near that orbit is exactly the orbit, proving the Morse–Bott condition. The critical locus in a compact energy sublevel is compact, so finitely many such neighborhoods cover it. Each contains just one critical component; consequently there are finitely many components and critical values. No classification of all symmetric spaces or centriole chains is needed. [F4, step 1.1, step 3.1, construct] ∎
