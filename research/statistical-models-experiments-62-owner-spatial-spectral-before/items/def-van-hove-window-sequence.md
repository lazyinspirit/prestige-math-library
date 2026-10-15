---
id: def-van-hove-window-sequence
kind: definition
title: "Van Hove sequences of spatial windows"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.1"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$. A **Van Hove sequence of spatial windows** is a
sequence $(W_n)_{n\ge1}$ of bounded Borel sets
([[def-borel-sigma-algebra]]) in $\mathbb R^d$ with
$0<|W_n|<\infty$ for every $n$, $|W_n|\to\infty$, and
$$\frac{|(W_n+K)\setminus W_n|}{|W_n|}\longrightarrow0 \quad\text{for every compact }K\subseteq\mathbb R^d.$$
Here $|E|$ is Lebesgue measure when $E$ is Lebesgue measurable, and
$W_n+K:=\{x+y:x\in W_n,\ y\in K\}$. As part of the condition, each boundary
excess $(W_n+K)\setminus W_n$ in the display is required to be Lebesgue
measurable. Thus the window volume diverges while every fixed compact spatial
enlargement adds a negligible relative volume.
