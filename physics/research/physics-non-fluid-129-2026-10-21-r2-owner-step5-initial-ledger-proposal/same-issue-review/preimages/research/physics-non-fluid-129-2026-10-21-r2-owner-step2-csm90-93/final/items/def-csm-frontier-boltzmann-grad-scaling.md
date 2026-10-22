---
id: def-csm-frontier-boltzmann-grad-scaling
kind: definition
title: Periodic hard-sphere Boltzmann–Grad scaling convention
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Isabelle Gallagher, Laure Saint-Raymond and Benjamin Texier, From Newton to Boltzmann: Hard Spheres and Short-Range Potentials, arXiv:1208.5753v2, 2013"
      url: "https://arxiv.org/pdf/1208.5753"
      locator: "Chapter 1, §1.0, equations (1.0.1)–(1.0.2), and §1.3, pp. 5–9: hard-sphere free flight/reflection and the N ε^(d−1) Boltzmann–Grad scaling."
---

## Definition

Fix a dimension $d\ge2$, a period length $L>0$ metres, and an equal particle mass $m>0$ kilograms. The position space is the flat torus $\mathbb T_L^d:=(\mathbb R/L\mathbb Z)^d$. For lifts $x,y\in\mathbb R^d$ of points $[x],[y]\in\mathbb T_L^d$, define

$$\operatorname{dist}_{\mathbb T_L^d}([x],[y]):=\min_{k\in\mathbb Z^d}|x-y+Lk|,$$

where $|z|=(\sum_{\ell=1}^d z_\ell^2)^{1/2}$ is the Euclidean norm. For $q_i=[x]$ and $q_j=[y]$, the vectors $x-y+Lk$, $k\in\mathbb Z^d$, are the displacement representatives from $q_j$ to $q_i$. The minimum is attained because $|x-y+Lk|\to\infty$ as $|k|\to\infty$, and its value is independent of the chosen lifts because changing lifts reindexes $k$. For each $N\ge2$ under consideration, let $\delta_N>0$ be the physical sphere diameter in metres and put $a_N:=\delta_N/L$. An admissible configuration $(q_1,\ldots,q_N)$ has pairwise distances $\operatorname{dist}_{\mathbb T_L^d}(q_i,q_j)>\delta_N$. For a hard-sphere trajectory below, require $\delta_N<L/2$; this restriction holds eventually in the scaling prescription. If two quotient displacement representatives of length $\delta_N$ existed, their difference would be a nonzero vector in $L\mathbb Z^d$, of length at least $L$, but the triangle inequality bounds its length by $2\delta_N<L$; thus the contact normal is unique.

A hard-sphere trajectory, when defined, is specified on one interval $I\subseteq\mathbb R$ with nonempty interior, with time $t\in I$ measured in seconds. For each $i=1,\ldots,N$ its maps are
$$q_i:I\longrightarrow\mathbb T_L^d,\qquad v_i:I\longrightarrow\mathbb R^d,$$
where $v_i$ is measured in $\mathrm{m\,s^{-1}}$. The interval may be bounded or unbounded and may include either finite endpoint. Positions are continuous on $I$, and the position and velocity paths are piecewise $C^1$ on its interior away from the isolated binary contacts. On a free-flight interval, $\dot q_i=v_i$ means that any local Euclidean lift of $q_i$ has derivative $v_i$; changing that lift by a constant lattice vector leaves the derivative unchanged. There $\dot v_i=0$. At an interior contact time use both one-sided velocity limits and set $v_i(t_c)=v_i^+$, the outgoing value. A finite endpoint is included only when the corresponding limits from within $I$ exist, and the position and velocity maps take those values there. No collision rule involving a missing side of an endpoint is imposed; a two-sided update there would require an extension of the trajectory through that time. These conventions specify a partial trajectory only and assert no continuation through a collision accumulation. A binary contact of particles $i,j$ at an interior time $t_c\in I^\circ$ means $\operatorname{dist}_{\mathbb T_L^d}(q_i(t_c),q_j(t_c))=\delta_N$, while no other pair is in contact at $t_c$. Write $v_i^-$ and $v_i^+$ for the one-sided velocity limits at the contact. Let $n$ be the unique unit vector from the centre of $j$ to the centre of $i$ along the shortest quotient displacement. The equal-mass elastic reflection rule is

$$v_i^+=v_i^- -\bigl((v_i^--v_j^-)\cdot n\bigr)n,\qquad v_j^+=v_j^- +\bigl((v_i^--v_j^-)\cdot n\bigr)n.$$

The Boltzmann–Grad scaling prescription is a sequence, indexed by all sufficiently large integers $N$, with $N\to\infty$, $a_N\to0$, and

$$N a_N^{d-1}=\kappa$$

for a fixed dimensionless $\kappa\in(0,\infty)$. Under this exact relation, $a_N=(\kappa/N)^{1/(d-1)}\to0$, so the trajectory restriction $\delta_N<L/2$ holds for every sufficiently large $N$. The factor $a_N$ is the diameter measured relative to the fixed box length, so the displayed parameter is dimensionless. This is a definition of a finite hard-sphere model and a scaling prescription only; it asserts neither global existence of the hard-sphere flow nor convergence to a Boltzmann equation.
