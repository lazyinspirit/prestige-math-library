---
id: lem-emx-c1-stokes-on-standard-3-simplex
kind: lemma
title: Stokes identity for a C1 two-form on the standard three-simplex
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emx-continuous-chain-integral
  - def-standard-orientation-of-the-affine-simplex
  - def-directional-and-partial-derivatives
  - def-c-one-map-and-local-inverse
  - thm-newton-leibniz-with-interior-derivative
  - thm-jordan-fubini-by-sections
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-multidimensional-integral-properties
dependency_roles:
  def-emx-continuous-chain-integral: mathematical-premise
  def-standard-orientation-of-the-affine-simplex: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-c-one-map-and-local-inverse: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: Peter S. Park, Proof of de Rham's Theorem
    url: https://people.math.harvard.edu/~pspark/derham.pdf
    locator: 'Indirect source via the actually used local def-standard-orientation-of-the-affine-simplex: signed
      affine face conventions. The C1 three-simplex Stokes statement and coordinate proof are reconstructed here
      rather than attributed to a smooth-only Stokes theorem.'
  - title: 'J. Lebl, Basic Analysis, Section 5.3: Fundamental Theorem of Calculus'
    url: https://www.jirka.org/ra/html/sec_ftc.html
    locator: 'Section 5.3, inherited source pointer of the actually used local thm-newton-leibniz-with-interior-derivative:
      endpoint increments on compact coordinate sections.'
  - title: A. Leibman, Multidimensional Real Analysis, Theorems 5.4.2 and 5.5.7
    url: https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf
    locator: Theorems 5.4.2 and 5.5.7, inherited source locators of the actually used local thm-jordan-fubini-by-sections
      and thm-change-of-variables-for-compact-jordan-sets. They supply section integration and affine parameter
      changes; the C1 Stokes deduction is local and no independent full-text source reading is asserted.
---

## Statement

Let $T=\{(u_1,u_2,u_3)\in\mathbb R^3:u_i\ge0,\ u_1+u_2+u_3\le1\}$ with its positive affine orientation and signed outward boundary. Let $\eta=f_1du^2\wedge du^3-f_2du^1\wedge du^3+f_3du^1\wedge du^2$ be a $C^1$ two-form on an open neighbourhood of $T$, and define

$$d\eta=(\partial_1f_1+\partial_2f_2+\partial_3f_3)du^1\wedge du^2\wedge du^3.$$

Using the continuous-form chain integral of [[def-emx-continuous-chain-integral]],

$$\int_T d\eta=\int_{\partial T}\eta.$$

## Statement references

[[def-emx-continuous-chain-integral]]

[[def-standard-orientation-of-the-affine-simplex]]

[[def-directional-and-partial-derivatives]]

[[def-c-one-map-and-local-inverse]]

[[thm-newton-leibniz-with-interior-derivative]]

[[thm-jordan-fubini-by-sections]]

[[thm-change-of-variables-for-compact-jordan-sets]]

[[thm-multidimensional-integral-properties]]

## Facts & Assumptions

**Given:** The oriented simplex $T$ and the $C^1$ coefficient functions $f_1,f_2,f_3$ in the Statement.

[F1] [[def-emx-continuous-chain-integral]] defines both integrals by pullback coefficients and proves that continuous-form integrals exist on standard parameter simplices.

[F2] [[def-standard-orientation-of-the-affine-simplex]] gives the signed-face formula $\partial[v_0,v_1,v_2,v_3]=[v_1,v_2,v_3]-[v_0,v_2,v_3]+[v_0,v_1,v_3]-[v_0,v_1,v_2]$ and the outward induced orientations.

[F3] [[thm-newton-leibniz-with-interior-derivative]] gives the endpoint difference for a continuous derivative on a compact interval.

[F4] [[thm-jordan-fubini-by-sections]] integrates the continuous derivative coefficients over the coordinate sections of the compact Jordan simplex.

[F5] [[thm-change-of-variables-for-compact-jordan-sets]] permits the affine coordinate changes between the upper face and its ordered simplex parameters, with the absolute determinant factor.

[F6] [[thm-multidimensional-integral-properties]] gives finite linearity and additivity of the Riemann integrals.

[F7] [[def-directional-and-partial-derivatives]] defines the coordinate derivatives used in the formula for $d\eta$.

[F8] [[def-c-one-map-and-local-inverse]] defines continuously differentiable coefficient functions with continuous first derivative.

## Proof

**Given:** The oriented simplex $T$ and $C^1$ form $\eta$ in the Statement.

1.1 The coefficient functions $f_i$ and $\partial_i f_i$ are continuous on the compact Jordan domains in the Statement by the $C^1$ hypothesis [F8], so their integrals exist by [F1]. Fix $i$ and fix the other two coordinates in the triangular projection $D_i=\{u_j\ge0:j\ne i,\ \sum_{j\ne i}u_j\le1\}$. The $u_i$-section of $T$ is $[0,1-\sum_{j\ne i}u_j]$. By [F3], its integral of $\partial_i f_i$ equals the upper endpoint value of $f_i$ minus the lower endpoint value. Integrating this identity over $D_i$ by [F4], then summing over $i$, writes $\int_Td\eta$ as the sum of all upper endpoint terms minus all lower endpoint terms. [F1, F3, F4, F7, F8, given]

2.1 On the three lower faces, in increasing order of their remaining coordinates, the induced boundary integrals are $-\int f_1du^2\wedge du^3$ on $u_1=0$, $-\int f_2du^1\wedge du^3$ on $u_2=0$, and $-\int f_3du^1\wedge du^2$ on $u_3=0$. The first and third signs are the boundary signs in [F2]; the middle face has positive signed face but the restriction of $\eta$ is already $-f_2du^1\wedge du^3$. Thus the lower endpoint terms from step 1.1 are exactly the three lower-face contributions to $\int_{\partial T}\eta$. [F2, step 1.1]

3.1 On the upper face, set $u_1=1-u_2-u_3$. Substitution gives $\eta|_{u_1+u_2+u_3=1}=(f_1+f_2+f_3)du^2\wedge du^3$. Its outward normal is proportional to $(1,1,1)$, while the ordered tangent vectors $(-1,1,0),(-1,0,1)$ have cross product $(1,1,1)$, so $(u_2,u_3)$ gives the positive face orientation. The ordered affine face parameters differ from $(u_2,u_3)$ by an affine map with determinant of absolute value $1$; [F5] therefore identifies the upper endpoint sum in step 1.1 with the upper-face integral. Adding the four face contributions using [F6] proves $\int_Td\eta=\int_{\partial T}\eta$. [F1, F2, F5, F6, step 1.1, step 2.1, given] ∎
