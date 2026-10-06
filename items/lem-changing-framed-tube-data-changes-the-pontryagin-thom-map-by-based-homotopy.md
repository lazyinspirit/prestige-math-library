---
id: lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy
kind: lemma
title: "Tube independence of the Pontryagin-Thom map"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy
  - prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product
  - lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
  - def-homotopy-relative-and-path-homotopy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "'part of Theorem 2.35 is that the resulting map is independent of these choices', printed pp.21-22"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Theorem A, printed pp.44-46"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X$ be a closed smooth manifold and let
$(N,\varphi)$ be a closed framed codimension-$k$ submanifold of $X$,
$k\ge0$. Pontryagin-Thom maps of $(N,\varphi)$ built from any two compatible
tubular charts, any two supplied smooth metrics on $\nu(N\subseteq X)$, and any two
sufficiently small positive radii are based homotopic as maps
$X_+\to S^k$ ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

The framing is fixed data throughout: the auxiliary choices removed here are
the chart, the metric and the radius, and the framing-induced homeomorphism
$\Phi_\varphi$ is the same structure transported along the metric comparison.
A bundle automorphism of the normal datum other than the identity changes
$\Phi_\varphi$ and is a change of framed submanifold, not a change of tube
data; the construction makes no claim of independence under such an
automorphism.

## Facts & Assumptions

**Given:** A closed framed codimension-$k$ submanifold $(N,\varphi)$ of the closed smooth manifold $X$, and two sets of tube data for the normal datum $(\nu(N\subseteq X),\mathrm{id})$: compatible tubular charts, metrics $h_1,h_2$ on $\nu(N\subseteq X)$ and sufficiently small positive radii $\rho_1,\rho_2$.

[F1] The Pontryagin-Thom map is $f_{(N,\varphi)}=p\circ\Phi_\varphi\circ c$, where $c$ is the collapse of the given tube data and $p,\Phi_\varphi$ are the based projection and the framing-induced homeomorphism ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F2] The collapse is continuous and based; collapses made with any two compatible tubular charts, sufficiently small radii and supplied metrics represent the same based homotopy class after the canonical radial identification of the metric targets ([[lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint]], [[lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy]]).

[F3] The framing-induced homeomorphism is natural in the framed data and independent of the metric used on $\nu(N\subseteq X)$ up to the canonical radial homeomorphism ([[prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product]]).

[F4] Based homotopies compose with fixed based maps: if $H:X_+\times I\to Y$ is a based homotopy and $q:Y\to Z$ is a based continuous map, then $q\circ H$ is a based homotopy; and based homotopy is an equivalence relation on based maps ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

1.1 (The two collapses and the metric comparison.) Let $c_i:X_+\to\operatorname{Th}_{h_i}(\nu(N\subseteq X))$ be the collapse built from the $i$-th tube data, $i=1,2$. By [F2] both are based continuous maps, and there is a based homotopy between $c_1$ and $r^{-1}\circ c_2$, where $r:\operatorname{Th}_{h_1}(\nu)\to\operatorname{Th}_{h_2}(\nu)$ is the canonical radial comparison of metrics. [F2, given]

2.1 (Composing with the framing identification.) Let $\Phi_\varphi^{(i)}:\operatorname{Th}_{h_i}(\nu)\to N_+\wedge S^k$ be the framing homeomorphisms, and $q_i:=p\circ\Phi_\varphi^{(i)}$. By [F3], $\Phi_\varphi^{(2)}=\Phi_\varphi^{(1)}\circ r^{-1}$ as based maps, hence $q_2\circ r=q_1$: the metric comparisons and the framing homeomorphisms cancel exactly. Therefore $f_2=q_2\circ c_2=q_1\circ(r^{-1}c_2)$ and $f_1=q_1\circ c_1$, and composing the based homotopy of step 1.1 with the fixed based map $q_1$ gives a based homotopy $f_1\simeq f_2$ by [F4]. [F1, F3, F4, step 1.1]

3.1 (Conclusion.) Steps 1.1-2.1 show that any two Pontryagin-Thom maps built from compatible charts, metrics and radii are based homotopic, the framing being held fixed. The argument used only continuity, the tube-independence of the collapse and the exact metric compatibility of the framing homeomorphism; no choice beyond the inherited $\mathrm{AC}_\omega$ occurs, and for $N=\varnothing$ both sphere-valued maps are constant at the basepoint. For $k=0$, $N$ is clopen in $X$, and both maps send $N$ to the nonbasepoint of $S^0$ and its complement to the basepoint. [F1, F2, F4, step 1.1, step 2.1] ∎
