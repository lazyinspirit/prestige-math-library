---
id: def-gts-log-cy-pair-toric-degeneration-and-scattering-data
kind: definition
title: Log Calabi–Yau pair, toric degeneration and scattering data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-fs-log-schemes-and-toric-monoids
  - def-gts-log-smooth-saturated-morphism-and-log-canonical-line
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-etale-morphism-schemes
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-flat-morphism-schemes
  - def-sheaf-relative-differentials
  - def-smooth-morphism-schemes
dependency_roles:
  def-gts-fs-log-schemes-and-toric-monoids: mathematical-premise
  def-gts-log-smooth-saturated-morphism-and-log-canonical-line: mathematical-premise
  def-cartier-divisor: mathematical-premise
  def-effective-cartier-divisor: mathematical-premise
  def-etale-morphism-schemes: mathematical-premise
  def-invertible-sheaf: mathematical-premise
  def-invertible-sheaf-of-cartier-divisor: mathematical-premise
  def-flat-morphism-schemes: mathematical-premise
  def-sheaf-relative-differentials: mathematical-premise
  def-smooth-morphism-schemes: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mark Gross and Bernd Siebert, Mirror Symmetry via Logarithmic Degeneration Data I
      url: https://arxiv.org/pdf/math/0309070v3
      locator: §§1–2 for affine and degeneration data; §3.1, Definition 3.1 and Example 3.2 for logarithmic structures
    - title: Mark Gross, Paul Hacking, and Bernd Siebert, Theta Functions on Varieties with Effective Anti-Canonical Class
      url: https://paulhacking.github.io/thetafunctions.pdf
      locator: §§2.3, 2.5, 3.1–3.3, definitions of wall consistency, broken lines, and theta functions
    - title: Simon Felten and Andrea Petracci, The Logarithmic Bogomolov–Tian–Todorov Theorem
      url: https://arxiv.org/pdf/2010.13656v3
      locator: Introduction, SNC anticanonical pair and relative log-canonical bundle
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X$ be a smooth $n$-dimensional finite-type scheme over a field with a closed immersion into some projective space $\mathbb P^N$, and let $D$ be an effective Cartier divisor. This is the projective convention used here. Set $K_X=\det\Omega_X^1$ and $\mathcal O_X(D)$ to be the invertible sheaf of $D$. The pair is log Calabi–Yau when
$$K_X(D):=K_X\otimes\mathcal O_X(D)\cong\mathcal O_X.$$
This condition is not $K_X\cong\mathcal O_X$. If $D$ is required to be simple normal crossings (SNC), this means that étale locally on $X$, $D$ is reduced and has equation $x_1\cdots x_r=0$ in regular parameters; smooth or nodal boundary conditions are separate alternatives.

The divisorial log structure of $(X,D)$ is the log structure whose local sections are regular functions invertible on $X\setminus D$. Log structures and fs/toric monoids use [[def-gts-fs-log-schemes-and-toric-monoids]]. A toric-degeneration record is additional data: it specifies a flat proper morphism $\pi:\mathcal X\to S$ (flat in the sense of [[def-flat-morphism-schemes]], proper in the underlying-scheme sense), the toric base $S$ and its chart monoid, the strata of the scheme-theoretic central fibre $\pi^{-1}(s_0)$ for the specified closed point $s_0\in S$, and the log structures, log morphism and saturation condition on $\pi$. The record must state each of these structures and conditions; it does not infer them from the log-Calabi–Yau pair. No log-CY pair is asserted to admit such a degeneration.

A scattering-diagram record is extra data, not a consequence of $K_X(D)\cong\mathcal O_X$. In the following lattice convention, let $N$ be a free abelian group of finite rank, $M=\operatorname{Hom}(N,\mathbb Z)$ its dual, and $N_{\mathbb R}=N\otimes_{\mathbb Z}\mathbb R$. A rational polyhedral subset is an intersection of finitely many affine half-spaces whose defining linear forms have rational coefficients in lattice coordinates. Let $P\subset N$ be a specified additive submonoid with $P\cap(-P)=\{0\}$, let $R$ be a commutative ring, and let $J\subset R$ be an ideal for which $R$ is complete and separated in the $J$-adic topology. Write $R\llbracket P\rrbracket:=\varprojlim_r R[P]/J^rR[P]$ for the completed monoid algebra. A wall is a rational polyhedral subset $\mathfrak d$ of codimension one in $N_{\mathbb R}$, contained in an affine hyperplane with a chosen primitive normal $n_{\mathfrak d}\in M$ (so its coorientation is part of the data), together with a function $f_{\mathfrak d}\in1+JR\llbracket P\rrbracket$ whose nonconstant monomials have exponents in $P\cap\ker(n_{\mathfrak d})$. For any monomial $z^m$ in the completed group algebra $R\llbracket N\rrbracket:=\varprojlim_r R[N]/J^rR[N]$, define $\theta_{\mathfrak d}(z^m)=f_{\mathfrak d}^{\langle n_{\mathfrak d},m\rangle}z^m$; the exponent is an integer and negative powers are defined since $f_{\mathfrak d}\in1+JR\llbracket P\rrbracket$ is a unit. A path crossing from the positive $n_{\mathfrak d}$-side to the negative side applies $\theta_{\mathfrak d}$, and the reverse crossing applies $\theta_{\mathfrak d}^{-1}$. A diagram is locally finite modulo $J^r$ if each compact subset of $N_{\mathbb R}$ meets only finitely many walls whose function is nontrivial modulo $J^r$. Its codimension-two joints are the specified intersections of wall closures at which path-crossing products are tested. Consistency means that for every loop based outside the walls, crossing walls transversely and avoiding joints, the ordered product of the induced automorphisms is the identity modulo $J^r$ for every $r\ge1$. This is a generic lattice model; any application must supply its monoid, ideal, support, wall, and loop data.

The Gross–Hacking–Keel–Siebert (GHKS) wall-structure convention is a different, richer construction. Its data include a polyhedral integral-affine pseudomanifold $(B,\mathcal P)$, discriminant $\Delta$, local systems of integral tangent vectors and monomials on $B_0=B\setminus\Delta$, wall and slab functions, chart rings, and wall-crossing and localization morphisms (Gross–Hacking–Siebert, Definitions 2.11–2.14). In that convention consistency in codimension zero requires the ordered product around the relevant joint to be the identity; in codimension one, writing $\chi_{b_i,\sigma}$ and $\chi_{b_i,\sigma'}$ for the paired localization maps from the two adjacent slab rings, the product of wall crossings $\theta\times\theta'$ carries the image of the first slab ring onto the image of the second, and therefore induces an isomorphism between those slab rings; and at each codimension-two joint the broken-line sums are independent of the general endpoint inside each chamber and compatible with the chamber-change morphisms (Definitions 2.13, 2.14, 3.9). A broken line is a proper continuous map $\beta:(-\infty,0]\to B_0$ avoiding joints, with a finite sequence of wall-crossing times $-\infty=t_0<t_1<\cdots<t_r=0$ and a monomial $a_i z^{m_i}$ on each affine segment, where $m_i$ is a locally constant section of the integral tangent-vector system along that segment and $\beta'=-m_i$; each outgoing monomial is a nonzero term of the specified chamber-change expansion (Definition 3.3). It is normalized when its initial coefficient is $1$. For an asymptotic monomial $m$ and an endpoint $p$ that is general in the sense of Definition 3.8, at a fixed Artin monoid-ring quotient $A[Q]/I$ in the selected construction, the theta function is the finite sum $\vartheta_m(p)=\sum_\beta a_\beta z^{m_\beta}$ over normalized broken lines with that asymptotic monomial and endpoint (Theorem 3.19 gives the corresponding global function under a consistent wall structure). Here the affine, lattice, ring and monomial data are those of the selected GHKS construction; they are not supplied by the preceding generic lattice convention. None of these structures or consistency properties follows from the log-Calabi–Yau pair condition.

## Definition references

[[def-gts-fs-log-schemes-and-toric-monoids]]

[[def-gts-log-smooth-saturated-morphism-and-log-canonical-line]]

[[def-cartier-divisor]]

[[def-invertible-sheaf]]
