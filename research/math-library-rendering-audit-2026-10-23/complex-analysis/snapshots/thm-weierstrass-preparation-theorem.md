---
id: thm-weierstrass-preparation-theorem
kind: theorem
title: "Weierstrass preparation theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-units-in-the-holomorphic-germ-ring, def-regular-holomorphic-germ, def-weierstrass-polynomial, lem-stability-of-slice-zero-count-under-holomorphic-parameters, lem-holomorphic-power-sums-of-slice-zeros, lem-newton-identities-for-slice-roots, thm-zero-order-factorization-holomorphic-function, prop-algebra-of-holomorphic-functions-in-several-variables, thm-contour-parameter-integrals-are-holomorphic, thm-cauchy-integral-formula-on-a-polydisc, thm-locally-bounded-separate-holomorphy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
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

Let $f\in\mathcal O_{m,0}$ be regular in $z_m$ of order $d$. Then there are a
unit $u\in\mathcal O_{m,0}$ and a Weierstrass polynomial $W$ of degree $d$ such
that

$$f=uW.$$

## Facts & Assumptions

**Given:** A germ $f\in\mathcal O_{m,0}$ that is regular in $z_m$ of order $d$.

[L1] Units in $\mathcal O_{m,0}$ are exactly the germs with nonzero value at $0$ ([[prop-units-in-the-holomorphic-germ-ring]]).

[L2] The zero-count lemma supplies a radius $r$ and parameter neighbourhood $V$ for the nearby slices of $f$ ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[L3] The power sums of those slice zeros are holomorphic, and Newton's recurrences convert them into holomorphic elementary symmetric functions ([[lem-holomorphic-power-sums-of-slice-zeros]], [[lem-newton-identities-for-slice-roots]]).

[L4] A Weierstrass polynomial is monic in the last variable with lower coefficients vanishing at the origin, and the exact order of a one-variable zero is the exponent in its local factorization ([[def-weierstrass-polynomial]], [[thm-zero-order-factorization-holomorphic-function]]).

[L5] Quotients by nonvanishing holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L6] A one-variable contour integral is holomorphic in each complex parameter, and a locally bounded separately holomorphic function is holomorphic ([[thm-contour-parameter-integrals-are-holomorphic]], [[thm-locally-bounded-separate-holomorphy]]).

[L7] The polydisc Cauchy formula specializes to the usual one-variable Cauchy formula when only the last variable is present ([[thm-cauchy-integral-formula-on-a-polydisc]]).

## Proof

**Proof technique:** direct.

1.1 Choose a representative of $f$ on a neighbourhood of the closed cylinder $V\times\{|\zeta|\le r\}$ given by [L2]. For each $z'\in V$, let $\lambda_1(z'),\dots,\lambda_d(z')$ be the slice zeros in $|\zeta|<r$, counted with multiplicity. By [L3], the elementary symmetric functions $e_1(z'),\dots,e_d(z')$ of those roots are holomorphic in $z'$. Define $$W(z',\zeta):=\zeta^d-e_1(z')\zeta^{d-1}+\cdots+(-1)^d e_d(z').$$ At $z'=0$ all slice roots equal $0$, so $e_j(0)=0$ for every $j$; therefore $W$ is a degree-$d$ Weierstrass polynomial by [L4]. [given, L2, L3, L4, construct]

2.1 For each fixed $z'\in V$, the polynomial $W(z',\zeta)$ has exactly the zeros $\lambda_1(z'),\dots,\lambda_d(z')$ with their multiplicities. Since $f(z',\zeta)$ has the same zero multiset by construction, [L4] shows that at every slice zero $\lambda$ the quotient $f(z',\zeta)/W(z',\zeta)$ extends holomorphically across $\lambda$; away from those zeros it is holomorphic by [L5]. Thus the slice quotient $$q_{z'}(\zeta):=\frac{f(z',\zeta)}{W(z',\zeta)}$$ is holomorphic on $|\zeta|<r$. [step 1.1, L4, L5]

3.1 Define $$u(z',z_m):=\frac{1}{2\pi i}\int_{|\zeta|=r} \frac{f(z',\zeta)}{W(z',\zeta)(\zeta-z_m)}\,d\zeta.$$ Because $W(z',\zeta)\ne0$ on $|\zeta|=r$, the integrand is continuous on $V\times\{|\zeta|=r\}\times\{|z_m|<r\}$ and holomorphic in each parameter variable. By [L6], the resulting function $u$ is separately holomorphic and locally bounded, hence holomorphic on $V\times\{|z_m|<r\}$. For fixed $z'$, the one-variable Cauchy formula [L7] applied to the holomorphic slice quotient $q_{z'}$ from step 2.1 gives $$u(z',z_m)=q_{z'}(z_m),$$ so $$f(z',z_m)=u(z',z_m)W(z',z_m).$$ [step 2.1, L6, L7]

4.1 On the central slice, regularity gives $f(0,\zeta)=\zeta^d h(\zeta)$ with $h(0)\ne0$, while step 1.1 gives $W(0,\zeta)=\zeta^d$. Hence step 3.1 yields $u(0,0)=h(0)\ne0$. By [L1], the germ of $u$ is a unit. Therefore the germs of $u$ and $W$ satisfy $f=uW$ in $\mathcal O_{m,0}$, which is the required preparation. [step 1.1, step 3.1, L1] ∎
