---
id: lem-gts-differential-extension-second-exact-sequence
kind: lemma
title: The closed-form exact sequence of a differential extension
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
proof_strategy: direct
deps:
  - def-gts-differential-extension-of-a-generalized-cohomology-theory
justified_by: []
dependency_roles:
  def-gts-differential-extension-of-a-generalized-cohomology-theory: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
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
      locator: Corollary 2.5 and its derivation from the differential-extension axioms, Section 2.1.
---

## Statement

For a differential extension of $E$ with the form-action exact sequence and structure-map identities, put

$$P^n(M)=\{(\omega,x)\in\Omega^n_{\mathrm{cl}}(M;V)\times E^n(M):[\omega]_{\mathrm{dR}}=\operatorname{ch}(x)\}.$$

The sequence

$$E^{n-1}(M)\xrightarrow{\operatorname{ch}}H^{n-1}_{\mathrm{dR}}(M;V)\xrightarrow{a_{\mathrm{cl}}}\widehat E^n(M)\xrightarrow{(R,I)}P^n(M)\to0$$

is exact, where $a_{\mathrm{cl}}([\eta])=a([\eta])$ for a closed representative $\eta$.

## Statement references

[[def-gts-differential-extension-of-a-generalized-cohomology-theory]]

## Facts & Assumptions

**Given:** A differential extension of $E$ on $M$ with the exact form-action sequence and the identities $I(a([\eta]))=0$ and $R(a([\eta]))=d\eta$.

[F1] [[def-gts-differential-extension-of-a-generalized-cohomology-theory]]: the sequence $E^{n-1}(M)\xrightarrow{\operatorname{ch}_{\Omega}}\Omega^{n-1}(M;V)/d\Omega^{n-2}(M;V)\xrightarrow{a}\widehat E^n(M)\xrightarrow{I}E^n(M)\to0$ is exact, and $R(a([\eta]))=d\eta$.

## Proof

**Given:** The data and [F1].

1.1 A closed form $\eta\in\Omega^{n-1}_{\mathrm{cl}}(M;V)$ determines a de Rham class $[\eta]$. If $\eta' =\eta+d\zeta$ is another closed representative, then its quotient class in $\Omega^{n-1}/d\Omega^{n-2}$ equals that of $\eta$, so $a([\eta'])=a([\eta])$. Thus $a_{\mathrm{cl}}$ is well defined. Exactness of [F1] at the form quotient says its kernel consists of $\operatorname{ch}_{\Omega}(E^{n-1})$; passing to de Rham classes identifies this with $\operatorname{ch}(E^{n-1})$. Hence the sequence is exact at $H^{n-1}_{\mathrm{dR}}$. [F1, given, algebra]

2.1 If $y\in\ker(R,I)$, then $I(y)=0$, so [F1] gives $y=a([\eta])$ for some form class $[\eta]$. The curvature identity gives $d\eta=R(y)=0$, hence $\eta$ is closed and $y=a_{\mathrm{cl}}([\eta])$. Conversely, each closed form class maps to an element with $I=0$ and $R=0$, so $\ker(R,I)=\operatorname{im}(a_{\mathrm{cl}})$. This proves exactness at $\widehat E^n(M)$. [F1, step 1.1]

3.1 Let $(\omega,x)\in P^n(M)$. Surjectivity of $I$ in [F1] gives $y\in\widehat E^n(M)$ with $I(y)=x$. By commutativity of the differential-cohomology square, $[R(y)]_{\mathrm{dR}}=\operatorname{ch}(x)=[\omega]_{\mathrm{dR}}$. Thus $\omega-R(y)=d\eta$ for some $\eta\in\Omega^{n-1}(M;V)$. Then $y+a([\eta])$ has underlying class $x$ and curvature $R(y)+d\eta=\omega$. Therefore $(R,I)$ is onto $P^n(M)$; the zero group at the right is exact by surjectivity. [F1, step 2.1, algebra]

4.1 If $M=\varnothing$, the differential forms, topological cohomology groups and differential-extension groups on the empty object are zero, so the displayed sequence is the zero sequence and exact. For nonempty $M$, steps 1.1–2.1 prove all exactness assertions. [F1, step 1.1, step 2.1, step 3.1] ∎

