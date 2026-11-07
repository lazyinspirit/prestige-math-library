---
id: lem-holomorphic-line-bundle-section-dimensions-have-polynomial-growth
kind: lemma
title: Polynomial growth of holomorphic sections on a compact complex manifold
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-manifolds-and-holomorphic-vector-bundles
- lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
- prop-every-smooth-manifold-admits-a-positive-smooth-density
- thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
- thm-density-measure-integration-agrees-with-smooth-density-integration
- cor-holomorphic-mean-value-property
- cor-cauchy-schwarz-inequality-for-l-two
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
sources:
  references:
  - title: J.-P. Demailly, Complex Analytic and Differential Geometry (2012)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: Chapter VII sections11–14, printed352–360, spaces of holomorphic sections, finite jets and projective embeddings. The present polynomial bound is reconstructed by the local rescaling/mean-value argument, without importing Kodaira vanishing or a finite-dimensionality theorem.
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact complex manifold of dimension $n\ge1$ and let $L\to X$ be a holomorphic line bundle. There is a constant $C>0$, depending only on $X,L$, such that for every integer $m\ge0$,
$$\dim_{\mathbb C}H^0(X,L^{\otimes m})\le C(m+1)^n.$$
In particular every section space is finite-dimensional. No positivity of $L$, Kahler condition, projectivity, or prior finite-dimensionality of $H^0$ is assumed. In the zero-dimensional convention of a compact finite discrete complex manifold the same assertion holds with $(m+1)^0=1$.

## Facts & Assumptions

**Given:** AC, the compact complex manifold and its holomorphic line bundle.

[A1] AC is explicit and implies Countable Choice used by smooth metric and density suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Holomorphic bundles have smooth underlying complex vector bundles and holomorphic local frames. A smooth complex vector bundle admits a smooth Hermitian metric under AC ([[def-complex-manifolds-and-holomorphic-vector-bundles]], [[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F2] A smooth manifold admits a positive smooth density under Countable Choice; this defines a locally finite Radon measure, with the usual coordinate integration rule. On a compact manifold its total mass is finite ([[prop-every-smooth-manifold-admits-a-positive-smooth-density]], [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]], [[thm-density-measure-integration-agrees-with-smooth-density-integration]]).

[F3] A holomorphic function equals its circle mean; Cauchy–Schwarz holds for $L^2$ functions; iterated integrals of nonnegative functions obey Tonelli ([[cor-holomorphic-mean-value-property]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] A finite-dimensional complex inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 Choose a smooth Hermitian metric on $L$ by [F1] and a positive smooth density $d\mu$ by [F2]. Take a finite cover by coordinate domains $U_i$ with closures inside slightly larger trivializing domains $V_i$, each equipped with a holomorphic frame $e_i$ of $L$. Write $|e_i(z)|^2=e^{-\phi_i(z)}$, with $\phi_i$ smooth and real. Compactness permits common constants $r_0>0$, $K<\infty$ and $c>0$ so that every centre $p\in U_i$ has its closed coordinate polydisk of radius $r_0$ in $V_i$, all real second derivatives of $\phi_i$ are bounded there by $K$, and $d\mu\ge c\,dV$ there, where $dV$ is Euclidean volume. These are finite-cover compact bounds, not choices depending on an unknown basis of $H^0$. [A1, F1, F2, given, choose, construct, algebra]

2.1 Fix such $p$ and let $F_p(z)=\phi_i(p)/2+\sum_j(\partial\phi_i/\partial z_j)(p)(z_j-p_j)$, a holomorphic affine function. The changed frame $e_p=e^{F_p}e_i$ has squared norm $e^{-\psi_p(z)}$, where $\psi_p=\phi_i-2\operatorname{Re}F_p$. Taylor's formula gives $\psi_p(p)=0$ and $|\psi_p(z)|\le K'|z-p|^2$ on the chosen polydisk, with $K'$ uniform over the finite cover. Put $r=r_0/\sqrt{m+1}$. For a holomorphic section $s=f_p e_p^{\otimes m}$, its fibre norm satisfies $|s(p)|^2=|f_p(p)|^2$, while on this radius-$r$ polydisk the factor $e^{-m\psi_p(z)}$ is bounded above and below by positive constants independent of $m,p$, since $m|\psi_p(z)|\le K'nr_0^2$. [F1, step 1.1, construct, algebra]

3.1 In one complex variable, [F3]'s circle mean and Cauchy–Schwarz give $|h(0)|^2\le(2\pi)^{-1}\int_0^{2\pi}|h(\rho e^{it})|^2dt$. Integrate against $2\rho\,d\rho/r^2$ for $0<\rho<r$ to obtain $|h(0)|^2\le(\pi r^2)^{-1}\int_{|z|<r}|h(z)|^2dV$. Iterating this in the $n$ variables and using Tonelli in [F3] gives $|f_p(p)|^2\le(\pi r^2)^{-n}\int_{P(p,r)}|f_p|^2dV$. Apply step 2.1's uniform metric comparison and step 1.1's density lower bound. Enlarging a single finite constant $C_0$ gives for every global section
$$|s(p)|^2\le C_0(m+1)^n\int_X|s|^2d\mu.$$
This evaluation estimate does not assume the section space is finite-dimensional or complete. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Any finite-dimensional subspace of $H^0(X,L^{\otimes m})$ has the positive definite $L^2$ inner product from these choices: a nonzero section is nonzero on a nonempty open set, which has positive density measure. Choose an orthonormal basis $s_1,\ldots,s_q$ of that finite subspace by [F4]. At a point $p$, choose a unit vector of the one-dimensional fibre and write $s_j(p)=a_j$ in that fibre coordinate. If $R=(\sum_j|a_j|^2)^{1/2}>0$, the section $s=R^{-1}\sum_j\overline{a_j}s_j$ has $L^2$ norm one and $|s(p)|^2=R^2$. Thus step 3.1 gives $\sum_j|s_j(p)|^2\le C_0(m+1)^n$; if $R=0$ the same inequality is immediate. Integrating this finite sum over $X$ yields $q\le C_0\mu(X)(m+1)^n$. [F2, F4, step 3.1, choose, algebra]

5.1 If the whole section space had dimension exceeding the integer part of this bound, it would contain a finite independent list longer than that bound; applying step 4.1 to its span is a contradiction. Hence it is finite-dimensional and satisfies the claimed inequality with any $C\ge C_0\mu(X)$, enlarged to be positive. This includes $m=0$, since the radius and comparisons in step 2.1 used $m+1$ throughout. For a compact zero-manifold there are finitely many points and a section is an arbitrary choice of one fibre vector at each point, so the dimension is the number of points independently of $m$. The zero bundle of sections and disconnected compact manifolds cause no change in the finite-cover proof. No curvature or projectivity theorem has been used. [F2, step 2.1, step 4.1, algebra] ∎

## Source-reading boundary

The cached 2012 Demailly text was read at Chapter VII Definition11.7, Propositions11.9–11.10 and their proofs, and sections13–14 through Theorem14.1 and its proof, printed352–360. Those proofs invoke Kodaira–Nakano vanishing and Chow; neither is used here. The local rescaling, mean-value and finite-orthonormal-family argument above is supplied explicitly, with no assertion that the cited source contains these exact formulas or that an unvisited chapter was read.
