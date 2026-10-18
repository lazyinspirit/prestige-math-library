---
id: lem-pe18-spherical-hankel-radial-identities
kind: lemma
title: Outgoing spherical Hankel modes have positive flux and no positive-real zeros
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; the argument is finite algebra and the cited Wronskian."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §10.50: Wronskians and Cross-Products"
      url: "https://dlmf.nist.gov/10.50"
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
---

## Statement

For real $z>0$, let $h_\ell^{(1)}$ be defined in [[def-spherical-bessel-and-hankel-functions]] and set $h_\ell^{(2)}(z)=\overline{h_\ell^{(1)}(z)}$. Then both solve the degree-$\ell$ spherical radial Helmholtz equation, are linearly independent, and
$$\operatorname{Im}\bigl(\overline{h_\ell^{(1)}(z)}(h_\ell^{(1)})'(z)\bigr)=z^{-2}.$$
In particular, neither vanishes for $z>0$, and for $k>0$, $r>0$,
$$r^2\operatorname{Im}\bigl(\overline{h_\ell^{(1)}(kr)}\,\partial_r h_\ell^{(1)}(kr)\bigr)=1/k.$$

## Facts & Assumptions

**Given:** The definitions and radial-solution result for spherical Bessel and Hankel functions.

[F1] [[def-spherical-bessel-and-hankel-functions]]: $j_\ell$ and $h_\ell^{(1)}$ are obtained from $\sin z/z$ and $-ie^{iz}/z$ using the same real differential operator $(-z)^\ell(z^{-1}d/dz)^\ell$.

[F2] [[lem-spherical-bessel-and-hankel-radial-solutions]]: $j_\ell$ and $h_\ell^{(1)}$ solve the same radial equation and $j_\ell(h_\ell^{(1)})'-j_\ell'h_\ell^{(1)}=i/z^2$.

## Proof

**Given:** Real $z>0$ and the functions in [F1]–[F2].

1.1 Conjugating the definition in [F1] commutes with its real differential operator; applying that operator to $ie^{-iz}/z$ defines $h_\ell^{(2)}=\overline{h_\ell^{(1)}}$, which solves the same real-coefficient radial equation as its conjugate. The sine identity gives $j_\ell=(h_\ell^{(1)}+h_\ell^{(2)})/2$. [F1, F2, algebra]

2.1 Put $h=h_\ell^{(1)}$. Substitution of $j=(h+\bar h)/2$ into [F2] yields $(\bar h h'-\bar h' h)/2=i/z^2$. The left side is $i\operatorname{Im}(\bar h h')$, giving the stated identity. If $h(z)=0$, its left side is zero, contradicting $z^{-2}>0$; conjugation gives the same nonvanishing for $h_\ell^{(2)}$. The nonzero Wronskian also proves linear independence. [F2, step 1.1, algebra]

3.1 By the chain rule, $\partial_r h(kr)=k h'(kr)$. Multiplying the identity in step 2.1 by $kr^2$ gives $r^2\operatorname{Im}(\bar h(kr)\partial_r h(kr))=r^2 k/(k^2r^2)=1/k$. [step 2.1, algebra] ∎
