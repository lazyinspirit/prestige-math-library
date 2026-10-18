---
id: thm-pe18-spherical-impedance-modal-reflection
kind: theorem
title: Exact spherical-mode reflection under the local impedance truncation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe18-local-impedance-absorbing-boundary, lem-pe18-spherical-hankel-radial-identities]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; the ratio follows by substituting one outgoing and one incoming radial mode."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "NIST Digital Library of Mathematical Functions, §§10.49–10.50"
      url: "https://dlmf.nist.gov/10"
---

## Statement

Fix $k,R>0$ and $\ell\ge0$. On $r=R$, write one radial mode as $u(r)=A h_\ell^{(1)}(kr)+B h_\ell^{(2)}(kr)$, where $h_\ell^{(2)}=\overline{h_\ell^{(1)}}$. If $u$ satisfies $\partial_ru-iku=0$ at $R$, then
$$\frac BA=-\frac{(h_\ell^{(1)})'(kR)-ih_\ell^{(1)}(kR)}{(h_\ell^{(2)})'(kR)-ih_\ell^{(2)}(kR)}.$$
The denominator is nonzero, so this is the exact reflected modal-amplitude ratio; no uniform-in-$\ell$ smallness is asserted.

## Facts & Assumptions

**Given:** The outgoing/incoming radial pair at positive real argument.

[F1] [[def-pe18-local-impedance-absorbing-boundary]]: the spherical truncation condition uses the outgoing convention $\partial_ru-iku=0$.

[F2] [[lem-pe18-spherical-hankel-radial-identities]]: $\operatorname{Im}(\overline{h_\ell^{(1)}}(h_\ell^{(1)})')=z^{-2}$ and the incoming conjugate has the negative of this flux.

## Proof

**Given:** $k,R>0$, $\ell\ge0$, and [F1]–[F2].

1.1 Let $z=kR$. The boundary condition, divided by $k$, is $A\bigl((h_\ell^{(1)})'(z)-ih_\ell^{(1)}(z)\bigr)+B\bigl((h_\ell^{(2)})'(z)-ih_\ell^{(2)}(z)\bigr)=0.$ If the incoming factor in parentheses were zero, then $(h_\ell^{(2)})'=ih_\ell^{(2)}$, so $\operatorname{Im}(\overline{h_\ell^{(2)}}(h_\ell^{(2)})')=|h_\ell^{(2)}|^2>0$ by nonvanishing, contradicting its negative flux from [F2]. Hence that factor is nonzero. [F1, F2, algebra]

2.1 For $A\ne0$, solve the equation in step 1.1 for $B/A$ to obtain the displayed ratio. If $A=0$, the same nonzero incoming factor forces $B=0$, so the boundary condition has no nonzero purely incoming mode. [step 1.1, algebra] ∎
