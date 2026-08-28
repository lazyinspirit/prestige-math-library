---
id: lem-prepared-factorizations-and-irreducibility
kind: lemma
title: "Prepared factorizations correspond to germ factorizations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-units-in-the-holomorphic-germ-ring, def-weierstrass-polynomial, thm-weierstrass-preparation-theorem, thm-uniqueness-in-weierstrass-preparation, thm-zero-order-factorization-holomorphic-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.5"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.4"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

Let $f\in\mathcal O_{m,0}$ be regular in $z_m$ of order $d$, and let
$f=uW$ be its Weierstrass preparation.

1. If $f=gh$ in $\mathcal O_{m,0}$, then $g$ and $h$ are regular in $z_m$, and
   if $g=u_gG$ and $h=u_hH$ are their preparations, then $W=GH$.
2. Conversely, if $W=GH$ with $G$ and $H$ Weierstrass polynomials of positive
   degree, then $f=(uG)H$ is a nontrivial factorization in $\mathcal O_{m,0}$.

Consequently $f$ is irreducible in $\mathcal O_{m,0}$ if and only if $W$ is
irreducible in the polynomial ring $\mathcal O_{m-1,0}[z_m]$.

## Facts & Assumptions

**Given:** A regular germ $f$ of order $d$ and its preparation $f=uW$.

[L1] A positive-degree Weierstrass polynomial vanishes at the origin, so it is not a unit; units are exactly the nonvanishing germs ([[def-weierstrass-polynomial]], [[prop-units-in-the-holomorphic-germ-ring]]).

[L2] Every regular germ admits a preparation, and that preparation is unique ([[thm-weierstrass-preparation-theorem]], [[thm-uniqueness-in-weierstrass-preparation]]).

[L3] A one-variable holomorphic function has finite zero order exactly when it is a power times a nonvanishing factor ([[thm-zero-order-factorization-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f=gh$. Restricting to the axis $z'=0$ gives $$f(0,\zeta)=g(0,\zeta)h(0,\zeta).$$ Because $f$ is regular of order $d$, [L3] makes the left-hand side a product of $\zeta^d$ and a nonvanishing holomorphic function. Hence neither factor on the right is identically zero, and [L3] gives integers $e$ and $d-e$ such that $g(0,\zeta)$ has exact order $e$ and $h(0,\zeta)$ has exact order $d-e$. Thus $g$ and $h$ are regular in $z_m$. [given, L3, algebra]

1.2 Conversely, if $W=GH$ with $G$ and $H$ Weierstrass of positive degree, then $f=uW=(uG)H$. Step [L1] makes both $G$ and $H$ nonunits, so this is a nontrivial factorization of $f$ in the germ ring. [L1, given, algebra]

2.1 Prepare the factors: $$g=u_gG,\qquad h=u_hH.$$ Then $$f=(u_gu_h)(GH).$$ The product $GH$ is monic of degree $d$ in $z_m$, and its lower coefficients still vanish at $z'=0$, so $GH$ is a Weierstrass polynomial of degree $d$. By the uniqueness part of [L2], the prepared polynomial of $f$ is unique, hence $W=GH$. [step 1.1, L1, L2, algebra]

3.1 Step 2.1 shows that every nontrivial factorization of $f$ yields a nontrivial factorization of $W$, and step 1.2 shows the converse. Therefore $f$ is irreducible exactly when $W$ is irreducible in $\mathcal O_{m-1,0}[z_m]$. [step 2.1, step 1.2] ∎
