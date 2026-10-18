---
id: def-na-rt0-h1-interpolation
kind: definition
title: Canonical RT0 interpolation on H1 fields
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-na-simplicial-mesh-rt-bdm-spaces, lem-na-simplex-h1-facet-trace-bound, lem-na-h1-interior-facet-traces-agree, lem-na-rt0-unisolvence-and-global-conformity, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §16.1: canonical RT interpolation defined by facet flux moments on H1 fields."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.2: RT0 facet degrees of freedom and interpolation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Assume Countable Choice, a conforming affine simplicial mesh $\mathcal T_h$ from [[def-na-simplicial-mesh-rt-bdm-spaces]], and $v\in H^1(D;\mathbb R^d)$. The facet trace inequality of [[lem-na-simplex-h1-facet-trace-bound]] makes each moment $m_F(v):=\int_F\gamma_Fv\cdot n_F$ finite. On each cell $K$, use its outward normals to prescribe the $d+1$ facet moments (with sign reversed when $n_F$ points inward to $K$); by RT0 flux unisolvence in [[lem-na-rt0-unisolvence-and-global-conformity]], there is a unique $I_Kv\in\operatorname{RT}_0(K)$ with those moments. Define $I_hv$ by $(I_hv)|_K=I_Kv$. The elementwise traces of the global H1 field agree almost everywhere across each shared facet by [[lem-na-h1-interior-facet-traces-agree]], so the shared moment is single-valued in the fixed orientation; the same unisolvence result gives $I_hv\in\operatorname{RT}_0(\mathcal T_h)\subset H(\operatorname{div};D)$. No canonical facet-moment definition on rough H(div)-only input is made here.
