---
id: def-pontryagin-thom-map-of-a-framed-submanifold
kind: definition
title: "The Pontryagin-Thom map of a framed submanifold"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
  - def-the-standard-smooth-step-function
  - def-framing-of-a-normal-bundle
  - prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product
  - def-pontryagin-thom-collapse-of-an-embedded-submanifold
  - def-disk-bundle-sphere-bundle-and-thom-space
  - lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
  - def-countable-choice
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "equations (2.34) and (2.36), printed pp.21-22"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, proof of Theorem C, printed pp.46-48"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Pontryagin-Thom construction 6.8, electronic pp.111-112"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be closed and smooth and let $(N,\varphi)$ be a closed framed codimension-$k$ submanifold, $k\ge0$ ([[def-framing-of-a-normal-bundle]]). A compatible chart $\Phi$ for $(\nu(N),\mathrm{id})$, a supplied smooth metric and a sufficiently small radius give a collapse $c:X_+\to\operatorname{Th}(\nu(N))$ as in [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]]. Compose it with the framing homeomorphism and projection of [[prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product]]:
$$X_+\xrightarrow{c}\operatorname{Th}(\nu(N))\xrightarrow{\Phi_\varphi}N_+\wedge S^k\xrightarrow{p}S^k.$$
Its based homotopy class is the **Pontryagin–Thom class**. The map is based at the disjoint point of $X_+$; its restriction to $X$ need not preserve any preselected point of $X$.

For $k\ge1$ we use the following normalized smooth representative $f_{(N,\varphi)}$. Fix an orientation-preserving stereographic coordinate $z:S^k\setminus\{\infty\}\to\mathbb R^k$ with centre $y_0=z^{-1}(0)$ and positive basis $b_0=(dz_{y_0})^{-1}(e_1,\ldots,e_k)$. Write $u=\varphi_s(v)$ in a compatible tube $\Phi(s,v)$, and choose $r>0$ so that the chart is defined on $\{|u|\le2r\}$; compactness of $N$ gives such a radius. Using [[def-the-standard-smooth-step-function]], put
$$a(q)=1-\sigma\!\left(\frac{q-r^2/4}{3r^2/4}\right).$$
Thus $a=1$ for $q\le r^2/4$, $a>0$ for $q<r^2$ and $a=0$ for $q\ge r^2$. Define
$$f_{(N,\varphi)}(\Phi(s,v))=z^{-1}\!\left(\frac{u}{a(|u|^2)}\right)\quad(|u|<r),$$
and send all other points to $\infty$. Near $N$ the target coordinate is exactly $u$. Near $|u|=r$, the coordinate at infinity obtained by inversion is $a(|u|^2)u/|u|^2$, which is smooth and extends by zero because $a$ is smooth and vanishes identically for $|u|\ge r$. Hence the map is smooth everywhere and constant near the boundary of the larger tube. Its centre preimage is exactly $N$.

This representative has the preceding collapse class. Use the framing metric $|v|_\varphi=|\varphi_s(v)|$. In the disk model of [[def-disk-bundle-sphere-bundle-and-thom-space]], the smooth profile above has normalized radius
$$b(t)=\frac{t}{\sqrt{a(t^2)^2+t^2}}\quad(0\le t\le r),$$
with $b(0)=0$, $b(r)=1$ and $b(t)>0$ for $t>0$. Interpolating $b(t)$ with $t/r$ gives continuous disk-valued radial maps which agree at the boundary and never acquire an extra centre preimage. Closed pasting gives a based homotopy to the ordinary collapse, as in [[lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint]]. Different metrics are compared by the radial Thom homeomorphisms; the next lemma proves tube independence.

For $k=0$, $N$ is clopen in $X$, and $f_{(N,\varphi)}:X\to S^0$ sends $N$ to the nonbasepoint and $X\setminus N$ to the basepoint. For $N=\varnothing$ it is constant at the basepoint. The framing is fixed data; a reflected framing changes the map by the corresponding sphere reflection. Countable choice is inherited only from the compatible-chart and normal-bundle machinery.
