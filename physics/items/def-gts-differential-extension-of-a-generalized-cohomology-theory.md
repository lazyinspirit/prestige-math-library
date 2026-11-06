---
id: def-gts-differential-extension-of-a-generalized-cohomology-theory
kind: definition
title: Differential extension of a generalized cohomology theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
deps:
  - def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
justified_by: []
dependency_roles:
  def-sequential-prespectrum-spectrum-and-adjoint-structure-maps: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Ulrich Bunke and Thomas Schick, Differential K-theory. A survey.
      url: https://arxiv.org/pdf/1011.6663v2
      locator: Section 2, Definition 2.1 and Corollary 2.5, and §§2.1–2.2 through Theorem 2.10, printed/PDF pp. 6–8; differential-extension axioms, diagram and homotopy formula.
---

## Definition

Let $\mathsf{Mfd}$ be the category of finite-dimensional Hausdorff second-countable smooth manifolds without boundary and smooth maps. Let $E$ be a commutative ring spectrum, meaning a spectrum with a unital, homotopy-associative and homotopy-commutative multiplication and its coherence data; for $M\in\mathsf{Mfd}$, write $M_+$ for $M$ with a disjoint basepoint and define $E^n(M):=[\Sigma^\infty M_+,\Sigma^nE]$ in the stable homotopy category. Let $V=\bigoplus_{r\in\mathbb Z}V^r$ be a graded real vector space and define $\Omega^m(M;V)=\bigoplus_{p+r=m}\Omega^p(M;\mathbb R)\otimes_{\mathbb R}V^r$, with total differential $d=d_{\mathrm{dR}}\otimes 1$. Write $H^m_{\mathrm{dR}}(M;V)$ for the degree-$m$ cohomology of this complex, and fix a natural degree-preserving transformation $\operatorname{ch}:E^*(M)\to H^*_{\mathrm{dR}}(M;V)$. A **differential extension** of this data consists of graded contravariant groups $\widehat E^n(M)$ and natural transformations

$$I:\widehat E^n(M)\to E^n(M),\qquad R:\widehat E^n(M)\to\Omega^n_{\mathrm{cl}}(M;V),\qquad a:\Omega^{n-1}(M;V)/d\Omega^{n-2}(M;V)\to\widehat E^n(M),$$

where these maps are natural under smooth pullback and $\Omega^n_{\mathrm{cl}}=\ker(d:\Omega^n(M;V)\to\Omega^{n+1}(M;V))$. Require $[R(x)]_{\mathrm{dR}}=\operatorname{ch}(I(x))$, $I(a([\eta]))=0$, and $R(a([\eta]))=d\eta$. Here $[\eta]$ is the quotient class modulo exact forms. Define $\operatorname{ch}_{\Omega}:E^{n-1}(M)\to\Omega^{n-1}(M;V)/d\Omega^{n-2}(M;V)$ by taking the unique quotient class of closed forms corresponding to $\operatorname{ch}$ under de Rham theory. Require the sequence

$$E^{n-1}(M)\xrightarrow{\operatorname{ch}_{\Omega}}\Omega^{n-1}(M;V)/d\Omega^{n-2}(M;V)\xrightarrow{a}\widehat E^n(M)\xrightarrow{I}E^n(M)\to0$$

to be exact. Finally require the homotopy formula $f_1^*x-f_0^*x=a(\int_{[0,1]}F^*R(x))$ for every pair $M,N\in\mathsf{Mfd}$, every smooth homotopy $F:M\times[0,1]\to N$ from $f_0$ to $f_1$, and every $x\in\widehat E^n(N)$, using the orientation from $0$ to $1$. A differential extension is not assumed unique, and multiplicativity of its differential groups is additional structure rather than part of this definition.

## Definition references

[[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

## Structure diagram

The structure maps and their compatibility are represented by the commutative square below. The lower map sends a closed form to its de Rham cohomology class; the square alone asserts compatibility, not exactness of any sequence.

```tikzcd
\widehat E^n(M) \arrow[r,"I"] \arrow[d,"R"'] & E^n(M) \arrow[d,"\mathop{\mathrm{ch}}"] \\
\Omega^n_{\mathrm{cl}}(M;V) \arrow[r,"{[\,\cdot\,]_{\mathrm{dR}}}"'] & H^n_{\mathrm{dR}}(M;V)
```

The ordinary differential-cohomology supplier fixes a familiar special case of this interface. The complex $K$-theory supplier fixes one possible topological theory and Bott grading used by the later cycle model. Neither supplier implies existence or uniqueness of a differential extension for an arbitrary $E$.

