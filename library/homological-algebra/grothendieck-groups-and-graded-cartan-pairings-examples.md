---
page: grothendieck-groups-and-graded-cartan-pairings-examples
title: "Grothendieck Groups and Graded Cartan Pairings — Examples"
status: published
items: []
examples:
  - ex-cartan-map-for-the-dual-numbers
  - ex-graded-dual-numbers-cartan-polynomial
  - ex-hom-pairing-over-a-nonsplit-field
---

These examples compute the central distinctions of the page. For the
dual-number algebra $k[\varepsilon]/(\varepsilon^2)$ over any field, the
Cartan map sends the single projective class to twice the simple class:
$K_0(A)\cong\mathbb Z[A]$, $G_0(A)\cong\mathbb Z[k]$ and $c_A([A])=2[k]$, so
the Cartan map need not be an isomorphism. The same algebra with the internal
grading $\deg\varepsilon=2$ has one graded-simple shift orbit, with Laurent
bases $[S]$ of $G_0^{\mathrm{gr}}(A)$ and $[A]$ of $K_0^{\mathrm{gr}}(A)$,
and the graded Cartan map sends $[A]$ to $(1+v^2)[S]$.

The last example takes $k=\mathbb R$ and $A=\mathbb C$ viewed as a real
algebra: the unique simple module $S=\mathbb C$ is also the unique
indecomposable finite-dimensional projective, but
$\langle[P],[S]\rangle=\dim_{\mathbb R}\operatorname{Hom}_{\mathbb C}(\mathbb C,\mathbb C)=2$.
The endomorphism ring of the simple is $\mathbb C$ rather than the scalar
field, so the splitting hypothesis $\operatorname{End}_A(S_i)=k$ of the
dual-bases theorem fails and the dual-basis conclusion genuinely fails,
showing that the hypothesis cannot be dropped.
