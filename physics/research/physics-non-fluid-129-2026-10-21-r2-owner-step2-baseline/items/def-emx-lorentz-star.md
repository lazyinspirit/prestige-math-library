---
id: def-emx-lorentz-star
kind: definition
title: Lorentzian Hodge star and periods
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - lem-wedge-monomials-in-a-dual-basis-form-a-basis
  - def-closed-and-exact-differential-forms
  - def-de-rham-cohomology
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
dependency_roles:
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  lem-wedge-monomials-in-a-dual-basis-form-a-basis: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John C. Baez and Javier P. Muniain, Gauge Fields, Knots, and Gravity (1994)
      url: https://djvu.online/file/8KettTaCShh22
      locator: Part I, §1.5.3, pp. 87–90, oriented semi-Riemannian Hodge star and the complementary-basis formula; §1.6, pp. 116–124, Stokes and de Rham periods.
    - title: Fionn Fitzmaurice, Differential Geometry (notes for Peter Taylor's course, 2011)
      url: https://www.maths.tcd.ie/~fionn/dg/dg.pdf
      locator: §§12.4–12.5, PDF pp. 56–57, closed and exact forms, Lorentzian Hodge duality, and the signature-dependent square formula.
    - title: John M. Lee, Introduction to Smooth Manifolds, second edition
      url: https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
      locator: Chapter 16, Stokes's theorem, pp. 426–430; Chapter 17, de Rham quotient and homotopy operator, §§17.1 and 17.3, pp. 441–445; Theorem 17.14 and Corollary 17.15, pp. 447–448.
proof_strategy: direct
---

## Definition

Let $V=\mathbb R^4$ with ordered coframe $e^0=dx^0,e^1=dx^1,e^2=dx^2,e^3=dx^3$, bilinear form $\eta=\operatorname{diag}(-1,1,1,1)$, inverse $\eta^{-1}=\eta$, and volume form $\mathrm{vol}_\eta=e^0\wedge e^1\wedge e^2\wedge e^3$. For $0\le k\le4$, give $\Lambda^kV^*$ the induced bilinear pairing $\langle\alpha,\beta\rangle_\eta:=\frac1{k!}\alpha_{\mu_1\cdots\mu_k}\beta^{\mu_1\cdots\mu_k}$, with indices raised by $\eta^{-1}$. The Lorentzian Hodge star is the unique linear map $\star_\eta:\Lambda^kV^*\to\Lambda^{4-k}V^*$ satisfying $\alpha\wedge\star_\eta\beta=\langle\alpha,\beta\rangle_\eta\,\mathrm{vol}_\eta$ for all $\alpha,\beta\in\Lambda^kV^*$. For an increasing index set $I\subseteq\{0,1,2,3\}$, write $e^I$ for the corresponding wedge, $I^c$ for its increasing complement, $s(I,I^c)$ for the sign of the concatenation $(I,I^c)$ relative to $(0,1,2,3)$, and $\epsilon_I:=\prod_{i\in I}\epsilon_i$, where $\epsilon_0=-1$ and $\epsilon_1=\epsilon_2=\epsilon_3=1$. The equivalent basis formula is $\star_\eta e^I=\epsilon_I s(I,I^c)e^{I^c}$.

For a smooth manifold $N$, an integer $1\le k\le\dim N$, a smooth closed $k$-form $\omega\in\Omega^k(N)$, and a finite real smooth singular $k$-cycle $z=\sum_\sigma c_\sigma\sigma$ with $\partial z=0$, define its period by $\operatorname{Per}_z(\omega):=\int_z\omega:=\sum_\sigma c_\sigma\int_\sigma\omega$. The form $\omega$ is exact when $\omega=d\alpha$ for a globally defined smooth $(k-1)$-form $\alpha\in\Omega^{k-1}(N)$. These are mathematical definitions and use no physical constants.

## Definition references

[[def-smooth-differential-k-form]]

[[def-wedge-product-of-differential-forms]]

[[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]

[[def-closed-and-exact-differential-forms]]

[[def-de-rham-cohomology]]

[[def-smooth-singular-chain-and-cochain-complexes]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

## Facts & Assumptions

**Given:** The fixed oriented vector space $V=\mathbb R^4$, the nondegenerate form $\eta$, its displayed volume form, and the increasing coframe-wedge basis.

[F1] [[def-smooth-differential-k-form]] defines $\Omega^k(N)$ as the smooth sections of $\Lambda^kT^*N$.

[F2] [[def-wedge-product-of-differential-forms]] defines the wedge of forms pointwise from the wedge of alternating covectors.

[F3] [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]] says that the increasing wedges of a dual basis form a basis in every degree.

[F4] [[def-closed-and-exact-differential-forms]] defines $Z^k=\ker d$ and $B^k=\operatorname{im}d$, hence closed and exact forms.

[F5] [[def-de-rham-cohomology]] defines $H^k_{\mathrm{dR}}(N)=Z^k(N)/B^k(N)$, with $[\omega]=0$ precisely when $\omega$ is exact.

[F6] [[def-smooth-singular-chain-and-cochain-complexes]] defines finite real chains of smooth singular simplices and their signed boundary.

[F7] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] assigns an extension-independent integral to each smooth singular simplex.

## Proof

**Given:** The finite-dimensional exterior spaces and pairings in the Definition.

1.1 For each increasing $I$, set $\star_\eta e^I=\epsilon_I s(I,I^c)e^{I^c}$. By [F3], the $e^I$ form a basis, so this prescription extends uniquely by linearity to a map $\Lambda^kV^*\to\Lambda^{4-k}V^*$; its coefficients are constant, so it also defines a smooth map on the affine space. [given, F1, F3, construct]

2.1 For increasing $I,J$ of size $k$, $e^I\wedge e^{J^c}=0$ when $I\ne J$, because an index repeats. When $I=J$, $e^I\wedge\star_\eta e^I=\epsilon_I\,\mathrm{vol}_\eta$. The component pairing has $\langle e^I,e^J\rangle_\eta=0$ for $I\ne J$ and $\langle e^I,e^I\rangle_\eta=\epsilon_I$. Thus the characterizing identity holds on basis pairs and, by bilinearity, for every $\alpha,\beta$. Pairing with all complementary basis wedges also proves uniqueness. [F1, F2, F3, step 1.1, algebra]

3.1 The cycle integral in the Definition is a finite sum of the unique simplex integrals in [F7], so it is independent of how a finite chain is written after equal simplex coefficients are combined. The terms closed, exact, and $[\omega]=0$ have the quotient meanings in [F4] and [F5]. No physical assumption or choice principle is used. [F4, F5, F6, F7] ∎
