---
id: thm-weierstrass-division-theorem
kind: theorem
title: "Weierstrass division theorem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weierstrass-polynomial, thm-contour-parameter-integrals-are-holomorphic, thm-cauchy-integral-formula-on-a-polydisc, lem-stability-of-slice-zero-count-under-holomorphic-parameters, thm-locally-bounded-separate-holomorphy, thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Theorem 4.4.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $W$ be a Weierstrass polynomial of degree $d$ in the variable $z_m$. Then
for every $f\in\mathcal O_{m,0}$ there exist unique germs
$q\in\mathcal O_{m,0}$ and $r_0,\dots,r_{d-1}\in\mathcal O_{m-1,0}$, meaning
complex constants when $m=1$, such that

$$f=qW+r_0+r_1z_m+\cdots+r_{d-1}z_m^{d-1}.$$

Equivalently, every germ has a unique quotient and a unique remainder of
$z_m$-degree $<d$ upon division by $W$.

## Facts & Assumptions

**Given:** A degree-$d$ Weierstrass polynomial $W$ and a germ $f$.

[L1] A Weierstrass polynomial has central slice $z_m^d$, hence is regular in $z_m$ of order $d$ ([[def-weierstrass-polynomial]]).

[L2] The zero-count lemma supplies a radius $r$ and parameter neighbourhood $V$ on which $W(z',\zeta)\ne0$ for $|\zeta|=r$ ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[L3] A one-variable contour integral is holomorphic in each complex parameter, and a locally bounded separately holomorphic function is holomorphic ([[thm-contour-parameter-integrals-are-holomorphic]], [[thm-locally-bounded-separate-holomorphy]]).

[L4] The polydisc Cauchy formula specializes to the usual one-variable Cauchy formula on a disc ([[thm-cauchy-integral-formula-on-a-polydisc]]).

[L5] A holomorphic function vanishing on a nonempty open subset of a domain vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], after shrinking representatives of $W$ and $f$ if needed there are $r>0$ and a neighbourhood $V$ of $0$ such that $W(z',\zeta)\ne0$ whenever $z'\in V$ and $|\zeta|=r$. Define $$q(z',z_m):=\frac{1}{2\pi i}\int_{|\zeta|=r} \frac{f(z',\zeta)}{W(z',\zeta)(\zeta-z_m)}\,d\zeta,$$ $$r(z',z_m):=\frac{1}{2\pi i}\int_{|\zeta|=r} f(z',\zeta)\frac{W(z',\zeta)-W(z',z_m)}{W(z',\zeta)(\zeta-z_m)}\,d\zeta.$$ As in the preparation proof, [L3] makes $q$ and $r$ holomorphic on $V\times\{|z_m|<r\}$. [L1, L2, L3, construct]

2.1 For fixed $z'$ and $\zeta$, the quotient $$\frac{W(z',\zeta)-W(z',z_m)}{\zeta-z_m}$$ is a polynomial in $z_m$ of degree at most $d-1$: expand the monic polynomial $W$ in powers of $z_m$ and factor each difference $\zeta^j-z_m^j=(\zeta-z_m)(\zeta^{j-1}+\cdots+z_m^{j-1})$. Therefore $r(z',z_m)$ is itself a polynomial in $z_m$ of degree $<d$ with coefficients holomorphic in $z'$. [step 1.1, algebra]

3.1 Adding the two integral formulas from step 1.1 gives $$q(z',z_m)W(z',z_m)+r(z',z_m) =\frac{1}{2\pi i}\int_{|\zeta|=r}\frac{f(z',\zeta)}{\zeta-z_m}\,d\zeta.$$ By [L4], the right-hand side is exactly $f(z',z_m)$ for $|z_m|<r$. Thus $f=qW+r$ with $\deg_{z_m}r<d$. [step 1.1, step 2.1, L4]

4.1 Suppose also $f=q'W+r'$ with $\deg_{z_m}r'<d$. Then $$r-r'=(q'-q)W.$$ For each fixed $z'$, the left-hand side is a one-variable polynomial of degree $<d$ divisible by the monic degree-$d$ polynomial $W(z',\cdot)$. Hence $r(z',\cdot)-r'(z',\cdot)=0$ as a polynomial, so $r=r'$. Then $(q-q')W=0$, and on the nonempty open set where $W\ne0$ one has $q=q'$; [L5] forces $q=q'$ everywhere. Therefore both quotient and remainder are unique. [step 3.1, L5, algebra] ∎
