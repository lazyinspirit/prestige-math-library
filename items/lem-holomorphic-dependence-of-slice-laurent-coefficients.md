---
id: lem-holomorphic-dependence-of-slice-laurent-coefficients
kind: lemma
title: "Laurent coefficients on Hartogs slices depend holomorphically on the remaining variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hartogs-figure-and-polydisc-hull,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-laurent-coefficient-formula-and-uniqueness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Fix $0<r,s<1$, let $f$ be holomorphic on $H(r,s)$, and choose $\rho$ with
$r<\rho<1$. For each integer $n$ and each $w$ with $|w|<1$, define

$$a_n(w):=\frac{1}{2\pi i}\int_{|\zeta|=\rho} \frac{f(\zeta,w)}{\zeta^{n+1}}\,d\zeta.$$

Then every $a_n$ is holomorphic on the unit disc $\{|w|<1\}$. Moreover, for
each fixed $w$ with $|w|<1$ the slice $z\mapsto f(z,w)$ has Laurent expansion

$$f(z,w)=\sum_{n\in\mathbb Z} a_n(w) z^n \qquad (r<|z|<1).$$

## Facts & Assumptions

**Given:** Real numbers $0<r<s<1$ are not assumed; only $0<r,s<1$, a function
$f\in\mathcal O(H(r,s))$, and a radius $\rho$ with $r<\rho<1$.

[L1] The Hartogs figure contains every point $(\zeta,w)$ with $|\zeta|=\rho$ and
$|w|<1$ ([[def-hartogs-figure-and-polydisc-hull]]).

[L2] A contour integral of a jointly continuous integrand that is holomorphic in
the parameter variable defines a holomorphic function of that parameter
([[thm-contour-parameter-integrals-are-holomorphic]]).

[L3] The Laurent coefficients of a one-variable holomorphic function on an
annulus are given by the contour integral formula, and those coefficients are
unique ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 Fix an integer $n$. By [L1], for $|\zeta|=\rho$ and $|w|<1$ the point $(\zeta,w)$ lies in $H(r,s)$, so the integrand $(\zeta,w)\mapsto f(\zeta,w)\zeta^{-n-1}$ is continuous on the circle times the unit disc and, for fixed $\zeta$, holomorphic in $w$. Therefore [L2] makes $a_n$ holomorphic on $\{|w|<1\}$. [L1, L2]

1.2 Fix $w$ with $|w|<1$. Then the slice $z\mapsto f(z,w)$ is holomorphic on the annulus $r<|z|<1$, again by [L1]. Applying [L3] to that one-variable slice on the circle $|z|=\rho$ shows that its Laurent coefficients are exactly the numbers $a_n(w)$ defined above. [L1, L3]

2.1 The Laurent expansion from step 1.2 is therefore $f(z,w)=\sum_{n\in\mathbb Z}a_n(w)z^n$ for $r<|z|<1$, and step 1.1 gives the holomorphic dependence of every coefficient on $w$. [step 1.1, step 1.2] ∎
