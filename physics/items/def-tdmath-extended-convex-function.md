---
id: def-tdmath-extended-convex-function
kind: definition
title: "Proper, convex, and lower-semicontinuous extended-real functions on Euclidean space"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-complete-ordered-field
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, Princeton Mathematical Series 28, §§7 and 12"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §§1.2 and 1.4"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$. Write $\overline{\mathbb R}=\mathbb R\cup\{+\infty\}$ with its usual order and extended addition; in a convex combination set $0\cdot(+\infty)=0$ and $\lambda\cdot(+\infty)=+\infty$ for $\lambda>0$. A function $f:\mathbb R^d\to\overline{\mathbb R}$ is **proper** when it never takes the value $-\infty$ and its effective domain

$$\operatorname{dom}f:=\{x\in\mathbb R^d:f(x)<+\infty\}$$

is nonempty. It is **convex** when

$$f((1-t)x+ty)\le (1-t)f(x)+tf(y)\qquad(x,y\in\mathbb R^d,\ t\in[0,1]).$$

It is **lower semicontinuous** when each weak sublevel set $\{x:f(x)\le a\}$ is closed in the Euclidean topology, for every $a\in\mathbb R$. Its **epigraph** is

$$\operatorname{epi}f:=\{(x,r)\in\mathbb R^d\times\mathbb R:f(x)\le r\}.$$

On this page “closed proper convex” means proper, convex, and lower semicontinuous in these conventions. The pairing of $p,x\in\mathbb R^d$ is the Euclidean inner product $\langle p,x\rangle$ of [[def-euclidean-inner-product]].

