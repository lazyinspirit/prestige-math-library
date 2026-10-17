---
id: def-emg-topological-sector
kind: definition
title: "Selected classical field topology and optional circle normalization"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-emg-geometry-units
  - def-emg-local-potentials-and-circle-data
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-local-potentials-and-circle-data: mathematical-premise
physical_scope: "A choice between a smooth classical real two-form field and an additionally selected, fixed-normalization U(1) connection sector on the stated Einstein–Maxwell spacetime; no assertion that every closed field admits that sector and no quantum electric-charge quantization."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§2.4.2–2.4.3, especially PDF p. 84: differential forms, local potentials, and the distinction between closed and exact forms; §3.2.5, PDF pp. 121–122, for the curved-spacetime Maxwell formulation."
    - title: "David Tong, Gauge Theory, author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§1.1.2, PDF pp. 17–19 (printed pp. 6–8): north/south monopole-potential patches and their overlap transformation. Quantum wavefunction phase and Dirac charge quantization in adjacent text are not adopted."
---

## Definition

Let $(M,g,N,o)$ be the smooth, Hausdorff, second-countable, oriented and time-oriented Lorentzian four-manifold of [[def-emg-geometry-units]], with signature $(-,+,+,+)$ and no boundary. Write $\Omega^k(M)$ for the smooth real sections of $\Lambda^kT^*M$. The classical electromagnetic field type is a smooth real two-form $F\in\Omega^2(M)$. In length-coordinate charts its components have SI unit tesla; its integral over an oriented smooth two-surface has unit weber. The exterior derivative is denoted $d$. A field is **closed** when $dF=0$. Closedness is a field condition, not the same condition as having a global potential.

For an open set $U\subseteq M$, a **local potential** for $F$ on $U$ is a smooth real one-form $A_U\in\Omega^1(U)$ satisfying $dA_U=F|_U$. It is a **global potential** when $U=M$. In a length-coordinate chart the components of $A_U$ have unit tesla metre. This classical real-field description chooses $F$ itself and requires no bundle or global $A$.

An **optional circle-normalized connection sector** adds the mathematical data of a smooth right principal $U(1)$ bundle $\pi:P\to M$ and a connection, using the local-potential and circle-data conventions of [[def-emg-local-potentials-and-circle-data]]. Here $U(1)=\{z\in\mathbb C:|z|=1\}$ with multiplication. Concretely, supply a countable open cover $\{U_i\}$ and smooth transition maps $g_{ij}:U_i\cap U_j\to U(1)$ satisfying $g_{ii}=1$ and $g_{ij}g_{jk}=g_{ik}$. On overlap pieces with smooth real lifts $g_{ij}=e^{if_{ij}}$, the normalized local connection one-forms $a_i$ satisfy $a_j=a_i+df_{ij}$; in local fibre angles the convention is $\theta_j=\theta_i-f_{ij}$, so $d\theta_i+a_i$ patches. The local curvature forms $da_i$ agree. Fix an independent constant $\kappa_0>0$ with unit weber, and set $A_i=\kappa_0a_i$ and $F|_{U_i}=\kappa_0da_i$. Thus $a_i$ has component unit $\mathrm m^{-1}$ in length coordinates, while $A_i$ has component unit tesla metre. Choosing $P$ and $\kappa_0$ is extra model data; no claim is made that every smooth closed real $F$ is the curvature of such a fixed-normalization connection.

The selected **topological sector** is the fixed pair consisting of the bundle $P$ and the normalization $\kappa_0$; its connection is data on that fixed bundle. Changing $P$ or $\kappa_0$ selects a different sector.

In a trivialization, a **gauge transformation** is a single-valued smooth map $h:U\to U(1)$; its local real lifts may differ by integer multiples of $2\pi$. A connection on a trivial bundle is **gauge trivial** when one such global map takes its normalized connection form to zero. For a closed piecewise-$C^1$ loop $\gamma$ lying in a trivialization, horizontal transport is defined by $\dot\theta=-a(\dot\gamma)$; the endpoint fibre rotation is its **holonomy**. When $a$ is one global one-form along the loop this is $\exp(-i\int_\gamma a)$. These definitions introduce no quantum state or quantum phase. The constant $\kappa_0$ is not identified with Planck's constant or a unit of electric charge.
