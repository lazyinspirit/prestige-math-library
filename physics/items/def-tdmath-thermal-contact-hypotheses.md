---
id: def-tdmath-thermal-contact-hypotheses
kind: definition
title: Thermal joins and conditional contact hypotheses
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-forward-sector-hypotheses]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A, pp. 51–54"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Definition

For two simple domains $\Gamma_i\subset\mathbb R^{n_i+1}$ and $\Gamma_j\subset\mathbb R^{n_j+1}$, write their coordinates $(u_i,v_i)$ and $(u_j,v_j)$. Their thermal-join domain is

$$\Delta_{ij}:=\{(u,v_i,v_j):\exists u_i,u_j,\ (u_i,v_i)\in\Gamma_i,\ (u_j,v_j)\in\Gamma_j,\ u=u_i+u_j\}.$$

The joined simple type is a distinct formal tag with amount function $\nu_{\Delta_{ij}}=\nu_{\Gamma_i}+\nu_{\Gamma_j}$ and weight $w_{\Delta_{ij}}=w_{\Gamma_i}+w_{\Gamma_j}$, as defined in [[def-tdmath-forward-sector-hypotheses]]. Encode the separated pair by $\mathsf{J}_{\Gamma_i}(x)+\mathsf{J}_{\Gamma_j}(y)$ and a joined coordinate $Z$ by $\mathsf{J}_{\Delta_{ij}}(Z)$. Their bookkeeping masses agree, and their aggregate composition functions agree. These encoded maps and their raw tags remain distinct. Positive coordinate-scaled copies use the reversible preparation transport of that definition; nested joins preserve their finite primitive amount function under reassociation and permutation. The empty type contributes the zero map.

Write $J_{ij}(x,y)$ for the join state with the summed energy coordinate and the unchanged work coordinates. A compound pair $(x,y)$ and $J_{ij}(x,y)$ have the same total energy and work coordinates but are distinct tagged objects. Define $x\sim_T y$ exactly when $\mathsf{J}_{\Gamma_i}(x)+\mathsf{J}_{\Gamma_j}(y)$ and $\mathsf{J}_{\Delta_{ij}}(J_{ij}(x,y))$ are accessible in both directions. Nested joins use the declared reassociation and permutation identifications.

Assume every finite join is itself a simple domain satisfying [[def-tdmath-forward-sector-hypotheses]]. The contact hypotheses are mathematical assumptions on the common relation: (T1) $(x,y)\prec J_{ij}(x,y)$; (T2) every join state has at least one reversible split into component states at its stated coordinates, and the equal-state split of any state into positive scaled copies of itself is reversible; (T3) $\sim_T$ is transitive; (T4) for every simple state $x$ there are states $x_0,x_1$ in its domain with $x_0\prec\prec x\prec\prec x_1$ and $x_0\sim_T x_1$; (T5) for every ordered pair of simple systems, every $x$ in the first and every work coordinate $v$ in the second's projection $\rho(\Gamma_j):=\{v:\exists u,(u,v)\in\Gamma_j\}$, there is a state $y$ with work coordinate $v$ and $x\sim_T y$.

For the completed calibrator branch, add (C1) **join coherence**: whenever $x\sim_T y$, the join state $J_{ij}(x,y)$ is thermally equivalent to each of $x$ and $y$ under the nested-join identifications. The coordinate sum in the definition alone does not assert C1. In later theorem statements, T1–T5 and C1 are explicitly listed as hypotheses; they are not treated as established physical laws.
