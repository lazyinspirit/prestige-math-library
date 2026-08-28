---
id: def-weierstrass-polynomial
kind: definition
title: "Weierstrass polynomials in the last variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-germ-ring-and-its-maximal-ideal, def-regular-holomorphic-germ]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Sections 4.3-4.4"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Definition

Fix $m\ge1$, write $z=(z',z_m)$ with $z'\in\mathbb C^{m-1}$, and let
$d\in\mathbb N$. A **Weierstrass polynomial of degree $d$** is a germ in
$\mathcal O_{m,0}$ represented by

$$W(z',z_m)=z_m^d+a_{d-1}(z')z_m^{d-1}+\cdots+a_0(z'),$$

where each $a_j$ is an element of $\mathcal O_{m-1,0}$, so for $m=1$ the
coefficients are complex constants, and $a_j(0)=0$.

For $d=0$ the lower-coefficient list and sum are empty, so the unique
degree-$0$ Weierstrass polynomial is $W=1$.

In particular $W(0,z_m)=z_m^d$, so every Weierstrass polynomial of degree $d$
is regular in $z_m$ of order $d$ in the sense of
[[def-regular-holomorphic-germ]].
