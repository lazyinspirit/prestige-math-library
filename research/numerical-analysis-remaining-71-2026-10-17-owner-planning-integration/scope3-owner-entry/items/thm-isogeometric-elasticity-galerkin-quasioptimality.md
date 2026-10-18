---
id: thm-isogeometric-elasticity-galerkin-quasioptimality
kind: theorem
title: Finite-Lamé isogeometric elasticity is conforming and quasi-optimal
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - def-linear-elasticity-displacement-formulation-and-data
  - thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation, §4.1 and §5.1"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications, Chapter 8 §8.12.1"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
---

## Statement

Assume Countable Choice and the real displacement formulation of [[def-linear-elasticity-displacement-formulation-and-data]] on a nonempty bounded, connected Lipschitz domain $D\subset\mathbb R^d$, $d\in\{2,3\}$. Let $V=H^1_0(D;\mathbb R^d)$ with the gradient norm, let the measurable shear modulus satisfy $0<\mu_0\le\mu(x)\le\mu_1<\infty$ almost everywhere, let $0\le\lambda<\infty$, and let $f\in V'$. For a finite conforming isogeometric subspace $V_h\subset V$ built from the matching NURBS patches of [[def-isogeometric-galerkin-patch-space-and-refinement]], the elasticity variational problem has a unique solution $u$, the Galerkin problem has a unique solution $u_h$, and
$$\|u-u_h\|_V\le\frac{2\mu_1+d\lambda}{\mu_0}\inf_{v_h\in V_h}\|u-v_h\|_V.$$
The estimate is for each finite $\lambda$ and has a factor growing with $\lambda$; it is not a locking-free or $\lambda$-uniform NURBS result.

## Facts & Assumptions

**Given:** Countable Choice; the elasticity data and domain above; and a finite isogeometric space declared conforming in $H^1_0(D;\mathbb R^d)$.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]]: the scalar local space is finite dimensional; the elasticity space is its componentwise $d$-fold product restricted to global $H^1_0(D;\mathbb R^d)$; nonmatching faces are excluded.

[F2] [[lem-matching-nurbs-patch-traces-give-h1-conformity]]: cellwise $C^1$ fields with square-integrable gradients and matching full-face traces belong to global $H^1$.

[F3] [[def-linear-elasticity-displacement-formulation-and-data]] fixes the real convention $V=H^1_0(D;\mathbb R^d)$ with gradient norm, $\mu\in L^\infty$ with $0<\mu_0\le\mu\le\mu_1$, $\lambda\ge0$, $f\in V'$, $\varepsilon(v)=(\nabla v+\nabla v^T)/2$, and $\mathcal E_\lambda(v,w)=2\int_D\mu\varepsilon(v):\varepsilon(w)+\lambda\int_D\operatorname{div}v\operatorname{div}w$.

[F4] [[thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound]] states: under Countable Choice, $d\in\{2,3\}$, the data of [F3], finite $\lambda\ge0$, and any finite-dimensional conforming $V_h\subset V$, the continuous and Galerkin solutions are unique and $\|u-u_h\|_V\le (2\mu_1+d\lambda)\mu_0^{-1}\inf_{v_h\in V_h}\|u-v_h\|_V$.

[A1] [[def-countable-choice]] is the exact axiom required by the imported elasticity theorem and its Hilbert, Lax--Milgram and Céa applications; this item adds no stronger choice principle.

## Proof

1.1 A single-patch analysis space is finite dimensional because its tensor coefficient set is finite. A finite multipatch space is a subspace of the finite product of these local spaces and is therefore finite dimensional. Its definition imposes global $H^1_0$ membership; for piecewise $C^1$ fields the matching-trace lemma [F2] supplies the $H^1$ condition, while the zero-boundary restriction is imposed separately. Thus this $V_h$ is a finite-dimensional conforming subspace of the $V$ in the statement. [F1, F2, given, algebra]

2.1 The typed domain, real displacement space, coefficient, load, strain and form in the Statement are exactly those fixed in [F3]. By step 1.1 the isogeometric space is a finite-dimensional conforming subspace. Thus the actual PE19 estimate [F4] applies and gives existence, uniqueness and the displayed constant. Since $\lambda$ appears in the numerator, this application supplies no bound uniform in $\lambda$. [A1, F3, F4, step 1.1, given] ∎
