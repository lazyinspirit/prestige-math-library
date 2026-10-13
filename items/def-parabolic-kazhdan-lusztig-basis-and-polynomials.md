---
id: def-parabolic-kazhdan-lusztig-basis-and-polynomials
kind: definition
title: "The parabolic Kazhdan–Lusztig bases and polynomials"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis,
       def-parabolic-hecke-module-and-antispherical-standard-basis,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution]
justified_by: [thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.6-2.7 (printed pp. 7-9): the notation c_x=sum m_{y,x}m_y and d_x=sum n_{y,x}n_y, the dictionary (v^{l(y)-l(x)})m_{y,x}=P^I_{y^{-1},x^{-1}} in the cases u=-1 and u=q of Deodhar [Deo87], and the reduction m_{y,x}=h_{w_0 y,w_0 x} for finitary I with w_0 the longest element of W_I; complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005 (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1-5.2 (printed pp. 134-140): the Kazhdan-Lusztig basis and polynomials in the classical q-normalization; complete passages read."
---

## Definition

Retain the notation of
[[def-parabolic-hecke-module-and-antispherical-standard-basis]] and write the
parabolic Kazhdan--Lusztig bases of
[[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]] as

$$C_x=\sum_{y\le x,\ y\in{}^JW}m_{y,x}\,m_y,\qquad D_x=\sum_{y\le x,\ y\in{}^JW}n_{y,x}\,n_y,\qquad x\in{}^JW,$$

with coefficients $m_{y,x},n_{y,x}\in\mathbb Z[v]$ supported on the lower
Bruhat ideal, $m_{x,x}=n_{x,x}=1$ and $m_{y,x},n_{y,x}\in v\mathbb Z[v]$ for
$y<x$.

The **spherical parabolic Kazhdan--Lusztig polynomials** are
$$M^J_{y,x}(q):=v^{-\ell(x)+\ell(y)}m_{y,x},\qquad q=v^{-2},$$
and the **antispherical (sign) parabolic Kazhdan--Lusztig polynomials** are
$$N^J_{y,x}(q):=v^{-\ell(x)+\ell(y)}n_{y,x}.$$
The parity and degree bounds established in
[[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]]
make these polynomials in $q$; that reduction theorem discharges the
well-definedness asserted here and is recorded in `justified_by`. Values at
$v=1$ are written $m_{y,x}(1)$, $n_{y,x}(1)$.

**Normalization dictionary.** With $P^J_{y,x}(u)$ the parabolic polynomials of
Deodhar (1987) attached to the subset $J$, one has
$M^J_{y,x}=P^J_{y^{-1},x^{-1}}$ for $u=-1$ and $N^J_{y,x}=P^J_{y^{-1},x^{-1}}$
for $u=q$, in the index convention of Deodhar and of the anti-spherical
category. Thus the spherical family is the $u=-1$ normalization and the
antispherical family the $u=q$ normalization; the two are not related by a
unit.

**Spherical reduction to ordinary coefficients.** If $W_J$ is finite with
longest element $w_0^J$, then
$$m_{y,x}=p_{w_0^Jy,\,w_0^Jx}\qquad\text{for all }y,x\in{}^JW,$$
where $p$ is the coefficient of the ordinary Kazhdan--Lusztig basis of
[[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]] and
$\underline H_{w}=\sum_{y\le w}p_{y,w}H_y$ in the normalization of
[[def-normalized-type-a-hecke-algebra-and-its-bar-involution]].

## Remarks

- **Well-definedness.** The coefficients $m_{y,x},n_{y,x}$ exist and are
  unique by the parabolic basis theorem; the triangular support and the
  vanishing of $m_{y,x},n_{y,x}$ for $y\not\le x$ are part of that theorem.
  The assertions that the shifted coefficients are polynomials in $q=v^{-2}$
  (parity and degree bound) are not part of the existence theorem: they are
  proved in the alternating-sum reduction theorem
  [[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]],
  which is the recorded justification of this definition. No parity clause is
  read back into the existence theorem.
- **Both families are canonical-basis coefficients, not chosen representatives.**
  $C_x$ and $D_x$ are the unique bar-fixed elements with triangular support of
  the parabolic basis theorem; the symbols $m_{y,x}$ and $n_{y,x}$ are their
  standard-basis coefficients in $M^J$ and $N^J$ respectively.
