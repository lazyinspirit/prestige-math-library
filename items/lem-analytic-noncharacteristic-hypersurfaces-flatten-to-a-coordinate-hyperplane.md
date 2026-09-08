---
id: lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane
kind: lemma
title: Analytic flattening and the normal principal coefficient
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §5 equations (61)–(68), printed pp. 12–13. The linearization and analytic normal-line extensions are derived locally.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §§2.3.1–2.3.2, Definitions 2.13–2.19, normal coordinates (2.7), and the transformed principal coefficient, PDF pp. 20–24. The normal derivative below includes the required multinomial weights absent from Definition 2.15.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["thm-real-analytic-inverse-and-implicit-function-theorems", "lem-principal-symbol-under-a-c-one-coordinate-change", "def-characteristic-covector-hypersurface-and-noncharacteristic-data", "thm-symmetry-of-higher-mixed-partials"]
---

## Statement

Let $\phi$ be real analytic near $a\in\mathbb R^{d+1}$ with $\phi(a)=0$ and $d\phi(a)\ne0$. There are analytic coordinates $(x,t)$ with $t=\phi$ near a. For an analytic scalar equation $P(z,(D^\alpha u)_{|\alpha|\le m})=0$, $m\ge1$, the derivative of its transformed equation with respect to the pure normal m-jet equals the principal symbol of its linearization evaluated at $d\phi$. At a compatible m-jet where that scalar is nonzero the equation has a unique local analytic solved branch for the pure normal m-jet. Euclidean normal data mean $D^ju(X(x))[\nu(x),\ldots,\nu(x)]$, and can instead be flattened using analytic normal-line coordinates.

## Facts & Assumptions

**Given:** An analytic hypersurface at p and an analytic scalar order-m equation with a compatible initial jet at which its normal principal symbol is nonzero, as specified in the statement.

[F1] Nonsingular analytic coordinate maps have analytic local inverses and nonsingular scalar equations have analytic implicit branches. ([[thm-real-analytic-inverse-and-implicit-function-theorems]]).

[F2] Highest-order coefficients transform by the inverse-transpose differential. ([[lem-principal-symbol-under-a-c-one-coordinate-change]]).

[F3] Analytic higher derivatives are symmetric multilinear derivatives. ([[thm-symmetry-of-higher-mixed-partials]]).

## Proof

1.1 After relabeling coordinates take $\partial_{z_{d+1}}\phi(a)\ne0$. The map $\Psi(z)=(z_1-a_1,\ldots,z_d-a_d,\phi(z))$ has determinant $\partial_{z_{d+1}}\phi(a)$. F1 supplies an analytic inverse $z=\Phi(x,t)$, and the initial surface is exactly t=0. [given, F1, algebra]

2.1 For any derivative $D_z^\alpha u$ of order m, repeated chain rule shows the coefficient of $\partial_t^m(u\circ\Phi)$ is $(d\phi)^\alpha$: obtaining m derivatives on u requires that each differentiation hit u, while differentiation of a coordinate coefficient leaves lower order on u. All transformed jet expressions are analytic and linear in the top-order jets. Differentiating the transformed nonlinear P in the pure t-jet therefore gives $\sum_{|\alpha|=m}P_{u_\alpha}(d\phi)^\alpha$, the principal symbol of its linearization. This agrees with F2 applied to that linearized operator. [step 1.1, F2, algebra]

3.1 At the specified compatible jet P=0, and step 2.1 makes its derivative in the selected scalar slot nonzero. F1 gives a unique analytic branch expressing this slot in terms of the remaining jets and (x,t). The remaining derivatives all have total order at most m and normal order strictly less than m. This proves the claimed solved form only near the selected compatible jet. [given, step 2.1, F1]

4.1 For normal data, step 1.1 gives an analytic parametrization X of the surface. The nonvanishing analytic gradient has an analytic positive length: apply F1 to $s^2-|\nabla\phi|^2=0$ at its positive root. Thus $\nu=\nabla\phi/|\nabla\phi|$ is analytic. The map $\Theta(x,t)=X(x)+t\nu(x)$ has independent tangent columns and its unit normal column, hence invertible derivative, so F1 again gives an analytic inverse. By F3 and the fact that Theta is affine in t, $\partial_t^j(u\circ\Theta)(x,0)=D^ju(X(x))[\nu(x),\ldots,\nu(x)]$. The conormal dt in these coordinates is proportional to dphi on the surface; homogeneity of the degree-m symbol preserves its nonvanishing. Thus this flattening handles exactly the stated Euclidean normal data. [step 1.1, step 2.1, F1, F3] ∎

## Source notes

Gantumur, §5 equations (61)–(68), printed pp. 12–13. The linearization and analytic normal-line extensions are derived locally.

