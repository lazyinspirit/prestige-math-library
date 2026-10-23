---
id: def-fd-simple-fluid-state
kind: definition
title: "Specific fundamental relation and valid response charts"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12, §§12.1–12.2"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Definition

Let $U\subset(0,\infty)\times\mathbb R$ be open, with coordinates $(v,s)$, and let $e:U\to\mathbb R$ have continuous total derivatives through order two (write $e\in C^2(U)$). The pair $(U,e)$ is a **simple-fluid state relation** for the purposes of this mathematical library. At $(v,s)\in U$, $v$ is the specific-volume coordinate, $s$ the specific-entropy coordinate, and $e(v,s)$ the specific-energy value. Define
$$T(v,s):=\frac{\partial e}{\partial s}(v,s),\qquad p(v,s):=-\frac{\partial e}{\partial v}(v,s),\qquad \rho:=\frac1v.$$
In these partial derivatives the other state coordinate is held fixed. Write $e_{vv},e_{vs},e_{sv},e_{ss}$ for the corresponding second partial derivatives, set
$$H_e:=\begin{pmatrix}e_{vv}&e_{vs}\\ e_{sv}&e_{ss}\end{pmatrix},$$
and define the coordinate-Hessian determinant
$$J_e:=e_{vv}e_{ss}-e_{vs}e_{sv}.$$
The **local thermal-chart hypothesis** at a state is $T>0$ and $e_{ss}>0$; it is a pointwise hypothesis and does not assert a global inverse. The conditions $e_{vv}>0$ and $J_e>0$, when required, are separate pointwise response restrictions. The definition itself imposes no sign condition on $e_{vv}$ or $J_e$ and no invertibility or convexity condition on all of $U$.

Under the physical SI interpretation only, $v$ has units $\mathrm{m^3\,kg^{-1}}$, $s$ has units $\mathrm{J\,kg^{-1}\,K^{-1}}$, $e$ has units $\mathrm{J\,kg^{-1}}$, $T$ has units $\mathrm K$, $p$ has units $\mathrm{Pa}$, and $\rho$ has units $\mathrm{kg\,m^{-3}}$. This is a mathematical definition of a state relation and makes no claim that an actual material obeys it.

## Definition references

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12, §§12.1–12.2, printed pp. 347–360](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)
