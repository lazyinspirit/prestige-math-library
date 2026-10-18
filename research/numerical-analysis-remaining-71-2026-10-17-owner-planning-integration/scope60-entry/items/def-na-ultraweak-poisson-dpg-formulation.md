---
id: "def-na-ultraweak-poisson-dpg-formulation"
kind: "definition"
title: "Ultraweak Poisson DPG spaces and plan-consistent bilinear form"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 4
deps: ["def-na-hdiv-space", "def-na-simplicial-mesh-rt-bdm-spaces", "lem-na-hdiv-weak-normal-trace", "lem-na-ultraweak-poisson-rotation-trace-2d", "def-sobolev-space-wkp-and-its-norm", "def-wkp-zero-as-a-sobolev-closure", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "not-applicable"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page paper; §2 Theorem 2.1 and proof; §§3.1–3.4, including Lemmas 3.1–3.3 on ultraweak Poisson and Fortin maps."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page paper; §§3.1–3.2, Lemmas 4.1–4.4, Theorem 4.2. The graph inf-sup proof assumes simply connected Lipschitz domain."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page course monograph; §§5.1–5.2 ideal/practical DPG; §§5.6.2 and 5.6.4 Fortin and mixed stability."}, {"title": "C. Carstensen, L. Demkowicz, and J. Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page paper; full §2 and Theorem 2.1 proof, §3.1. The Poisson stability application cites the same simply-connected source."}]}
verification: {}
---

## Statement

Assume Countable Choice. Let $d=2$ or $3$, $\Omega\subset\mathbb R^d$ bounded connected Lipschitz polyhedral and $\mathcal T_h$ a finite conforming shape-regular simplicial partition; all fields are real. Put $H(div,\mathcal T_h)=\prod_KH(div;K)$ and $H^1(\mathcal T_h)=\prod_KH^1(K)$, with squared broken graph norm $\sum_K(\|\tau\|_2^2+\|div\tau\|_2^2+\|v\|_2^2+\|\nabla v\|_2^2)$. Let $\widehat U$ be the elementwise trace range of $H^1_0(\Omega)$ and $\widehat Q_n$ the elementwise weak normal trace range of $H(div;\Omega)$, each with global lift infimum norm; range membership is compatibility and normal traces are conservative across interior facets. Set $U=L^2(\Omega)^d\times L^2(\Omega)\times\widehat U\times\widehat Q_n$, $V=H(div,\mathcal T_h)\times H^1(\mathcal T_h)$. For $x=(\sigma,u,\widehat u,\widehat\sigma_n)$ and $y=(\tau,v)$, define
$$b(x,y)=(\sigma,\tau)-(u,div_h\tau)+\langle\widehat u,\tau\cdot n\rangle-(\sigma,\nabla_hv)+\langle\widehat\sigma_n,v\rangle,\quad F_f(y)=(f,v).$$
Pairings sum over cell boundaries and use the cell-outward normal. The sign convention is $\sigma=-\nabla u$, $div\sigma=f$.

## Axiom and interface note

Countable Choice is declared for Sobolev traces. The planar rotation identity is proved locally in [[lem-na-ultraweak-poisson-rotation-trace-2d]]; no 3D H(curl) trace result is imported.
