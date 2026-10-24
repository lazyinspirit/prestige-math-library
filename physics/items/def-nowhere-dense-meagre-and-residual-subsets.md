---
id: def-nowhere-dense-meagre-and-residual-subsets
kind: definition
title: "Nowhere dense, meagre, residual, and comeagre subsets of a topological space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interior-closure-boundary-top, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ ([[def-interior-closure-boundary-top]]). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$.

