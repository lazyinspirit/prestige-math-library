---
id: rem-m-theory-brane-web-tbrane-frontier-2026
kind: remark
title: M Theory Brane Web Tbrane Frontier 2026
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - post-m-theory-type-iia-circle-limit-dictionary
dependency_roles:
  post-m-theory-type-iia-circle-limit-dictionary: formulation-prerequisite
aliases: []
physical_scope: "Source-reported local chain for a noncompact IIB D5/D7 configuration with a chosen compact x9 circle, through the circle zero-mode truncation and its IIA holomorphic D6 curve to local M-theory geometry; no mutually nonlocal global web or universal web/geometry equivalence is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrés Collinucci, M-theory geometries from five-brane webs, seven-branes, and T-branes, arXiv:2607.05588v1"
      url: "https://arxiv.org/pdf/2607.05588v1"
      locator: "Abstract, Introduction, §§2–3.2, §§4–5.4, PDF pp. 1–14: the noncompact IIB D5/D7 setup, chosen x9 circle, holomorphic D6 curve, local Taub–NUT/sheaf uplift uv=det(T), T-brane data, and applicability limits."
    - title: "Edward Witten, String Theory Dynamics in Various Dimensions, arXiv:hep-th/9503124v2"
      url: "https://arxiv.org/pdf/hep-th/9503124v2"
      locator: "§§2.2–2.3, PDF pp. 5–10: the source-reported type-IIA/M-theory circle interpretation and its low-energy scope."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Collinucci’s local setup uses the source’s flat ten-dimensional Minkowski coordinates $x_0,\ldots,x_9$ with $x_0$ time and length-valued coordinates in natural units. The coordinates $x_7,x_8$ are noncompact, and a chosen circle $x_9\sim x_9+2\pi R$ of radius $R>0$ lies along one D7-brane and transverse to the D5-branes. A D5 spans $x_0,\ldots,x_4$ and a half-line $x_5\in(-\infty,0]$ ending at a codimension-three point of the D7, which spans $x_0,\ldots,x_4,x_7,x_8,x_9$; in the source normalization its endpoint is a unit magnetic source, $\int_{S^2}F=2\pi$, through a positively oriented linking sphere. On the D7 with the endpoints removed, $F$ is the smooth real curvature two-form of a $U(1)$ line-bundle connection: $F=dA_a$ only on trivializing patches, with $A_a$ real local one-forms. No single smooth potential on the linking sphere is assumed. Put $z=x_7+i x_8$ and take $\alpha'>0$ to have units of length squared, so the T-dual radius $\widetilde R=\alpha'/R$ is a length. For the curve description retain only the circle zero mode, namely the average $(2\pi R)^{-1}\int_0^{2\pi R}\phi_5(z,x_9)\,dx_9$ of the D7 position scalar $\phi_5$ along $x_5$. The source drops the nonzero Fourier modes before T-dualizing; localized endpoints do not give an exact circle isometry. In this truncation, after T-duality on $x_9$, define the dimensionless coordinates $w_\pm=\exp(\pm(x_5+i\widetilde x_9)/\widetilde R)$, so $w_+w_-=1$. In the no-NS5 setup of the source’s §§3–5, let $q_L,q_R\in\mathbb Z_{\ge0}$ count the D5 endpoints on the left and right of the D7, and let $z_i^{(-)},z_j^{(+)}\in\mathbb C$ be their positions. Within this zero-mode description these endpoints map to one D6-brane on the holomorphic curve
$$w_+\prod_{j=1}^{q_R}(z-z_j^{(+)})=C\prod_{i=1}^{q_L}(z-z_i^{(-)}),$$
where $C$ is a nonzero complex constant of dimension length$^{q_R-q_L}$ (its numerical value in a fixed length unit lies in $\mathbb C^*$). More explicitly, $C=c_0\Lambda^{q_R-q_L}$ for a reference length $\Lambda>0$ and a dimensionless complex constant $c_0\ne0$ incorporating the position and circle phase integration constants. Both sides then have dimension length$^{q_R}$. A single left endpoint gives $w_+=C(z-z_0)$ with $[C]=\mathrm{length}^{-1}$. For the source’s coherent-sheaf description, take a complex patch $U\subset\mathbb C_z\times\mathbb C^*_{w_+}$ and let $\mathcal O_U$ be its sheaf of holomorphic functions. For $k\in\mathbb Z_{>0}$, a finite-rank presentation $0\to\mathcal O_U^{\oplus k}\xrightarrow{\mathcal T(z,w_+)}\mathcal O_U^{\oplus k}\to\mathcal F\to0$ encodes the D6 support. Here the local T-brane data mean the non-diagonal matrix entries of the holomorphic tachyon map $\mathcal T$; in the source’s examples, nilpotent entries encode the partition. In the sheaf presentation, the local uplift is the hypersurface $uv=\det\mathcal T(z,w_+)$ in $\mathbb C^2_{u,v}\times U$; its M-theory circle collapses where $\det\mathcal T=0$. These are source-reported local constructions, not a universal web/geometry equivalence.

## Statement references

[Collinucci, Abstract, Introduction, §§2–3.2, §§4–5.4](https://arxiv.org/pdf/2607.05588v1)

[Witten, §§2.2–2.3](https://arxiv.org/pdf/hep-th/9503124v2)

[[post-m-theory-type-iia-circle-limit-dictionary]]

## Status

The source reports the local profile and holomorphic D6 curve for D5 endpoints on a D7 and extends the construction to multiple D7-branes and partition data. Section 3.1, Eqs. (6)–(8), separates the circle zero mode from nonzero modes and explicitly retains the former for the subsequent curve; the latter are exponentially suppressed far from each endpoint, at transverse distance much larger than $R$, but are not identically zero. Its T-brane/sheaf discussion represents the local support by $\det(\mathcal T)=0$ and gives the uplift $uv=\det(\mathcal T)$ in that presentation. Sections 3–5 assume there is no NS5-brane; the source treats NS5-containing configurations separately using Taub–NUT data. It explicitly warns that mutually nonlocal $(p,q)$ branes cannot be handled by one global duality frame and require patchwise constructions and gluing. The retained M/IIA circle-dictionary prerequisite supplies the adopted circle-scaling and metric convention as formulation context for interpreting the local lift; it does not supply the local curve or T-brane map. The removed flat open-string D$p$ T-duality theorem concerns Neumann/Dirichlet boundary data and right-moving chirality; it does not formulate or derive this seven-brane/T-brane chain. The source-status review dated 2026-10-30 is limited to the cited version and sections; it makes no universal or global claim.

## Remarks

The diagram records the source’s local chain after the stated circle zero-mode truncation. The arrows summarize source-reported duality/uplift steps and supply no proof; the source text and limits above carry the claim.

```tikz
\begin{tikzpicture}
\node[draw,align=center] (iib) at (0,0) {IIB\\noncompact local setup\\D5 endpoints on D7; $x_9$ circle};
\node[draw,align=center] (iia) at (5,0) {IIA\\D6 on a holomorphic\\curve in $\mathbb C^*\times\mathbb C$};
\node[draw,align=center] (m) at (10,0) {M-theory\\local Taub--NUT\\sheaf uplift $uv=\det(\mathcal T)$};
\draw[->] (iib.east) -- node[above,align=center] {zero mode, then\\T-dualize $x_9$} (iia.west);
\draw[->] (iia.east) -- node[above,align=center] {local circle\\uplift} (m.west);
\end{tikzpicture}
```
