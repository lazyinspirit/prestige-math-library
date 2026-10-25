---
id: thm-uniqueness-in-weierstrass-preparation
kind: theorem
title: "Uniqueness in Weierstrass preparation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-units-in-the-holomorphic-germ-ring, def-weierstrass-polynomial, thm-weierstrass-preparation-theorem, thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 6.2.3"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Theorem 4.4.1"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Suppose $f\in\mathcal O_{m,0}$ is regular in $z_m$ of order $d$ and

$$f=uW=vP$$

with $u,v$ units and $W,P$ Weierstrass polynomials of degree $d$. Then
$W=P$ and $u=v$.

## Facts & Assumptions

**Given:** A regular germ $f$ of order $d$ with two preparations $f=uW=vP$.

[L1] Units are exactly the germs with nonzero value at $0$ ([[prop-units-in-the-holomorphic-germ-ring]]).

[L2] A degree-$d$ Weierstrass polynomial is monic in $z_m$ and has central slice $z_m^d$ ([[def-weierstrass-polynomial]]).

[L3] A holomorphic function on a domain that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after shrinking to a common neighbourhood the unit factors $u$ and $v$ are nowhere zero. Therefore for each fixed nearby parameter $z'$, the slice zeros of $f(z',\cdot)$ coincide, with multiplicity, with the slice zeros of $W(z',\cdot)$ and also with those of $P(z',\cdot)$. [given, L1]

2.1 Fix such a parameter $z'$. By [L2], both $W(z',\cdot)$ and $P(z',\cdot)$ are monic degree-$d$ one-variable polynomials with the same multiset of roots, counted with multiplicity. Over $\mathbb C$, a monic polynomial is the product of its linear factors, so these two polynomials are equal. Since this holds for every nearby $z'$, the germs satisfy $W=P$. [step 1.1, L2, algebra]

3.1 With $W=P$, the two preparations give $(u-v)W=0$. On the nonempty open set where $W\ne0$ one therefore has $u=v$. Applying [L3] to the holomorphic function $u-v$ on the connected neighbourhood shows $u=v$ everywhere there, and hence as germs. [step 2.1, L3, algebra] ∎
