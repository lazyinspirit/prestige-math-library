---
id: def-ip-real-frame-phase-retrieval
kind: definition
title: Real phase retrieval via finite real measurements
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-identifiability-and-stability-modulus
  - def-max-min
  - def-ordered-field
  - def-euclidean-inner-product
  - lem-metrics-on-rn
justified_by:
  - lem-ip-real-phase-retrieval-quotient-metric
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), arXiv:math/0412411"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2"
      url: "https://arxiv.org/pdf/1901.07911v2"
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015)"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $d\ge1$, $m\ge0$, and $\Phi=(a_i)_{i\in[m]}$ be a finite family in $\mathbb R^d$, allowing zero measurement vectors and not assuming that $\Phi$ spans. Here $[m]=\{1,\ldots,m\}$ and $[0]=\varnothing$; measurement labels are one-based, while coordinates in $\mathbb R^d$ use the library's zero-based convention $k<d$. Write $\mathbb R^{[m]}=\{y:[m]\to\mathbb R\}$. Use the Euclidean inner product $\langle u,v\rangle=\sum_{k<d}u_kv_k$ and norm $\|u\|_2=\sqrt{\langle u,u\rangle}$. Define the signal equivalence relation $x\sim z$ by $z=x$ or $z=-x$, let $Q_d=\mathbb R^d/\sim$, and write $q(x)=[x]$. Its quotient distance is
$$d_{\pm}([x],[z]):=\min\{\|x-z\|_2,\|x+z\|_2\}.$$

Use data space $Y_m=\{b:[m]\to[0,\infty)\}$ with metric
$$\rho_m(b,c)=\begin{cases}\sqrt{\sum_{k<m}(b_{k+1}-c_{k+1})^2},&m\ge1,\\0,&m=0.\end{cases}$$
The fixed relabeling $i\mapsto i-1$ identifies $[m]$-indexed data with the library's zero-based $\mathbb R^m$; $Y_0$ is a singleton. Define the real analysis map $T_\Phi:\mathbb R^d\to\mathbb R^{[m]}$ by
$$T_\Phi x=(\langle a_i,x\rangle)_{i\in[m]}.$$
The amplitude map is $\mathcal M_\Phi([x])=(|\langle a_i,x\rangle|)_{i\in[m]}$, while the intensity map is
$$\mathcal I_\Phi([x])=(\langle a_i,x\rangle^2)_{i\in[m]}\in Y_m.$$
A finite real measurement family performs **phase retrieval** when $\mathcal I_\Phi:Q_d\to Y_m$ is injective, equivalently when the induced amplitude map is injective. The quotient distance, both induced maps, and the data metric are well defined as verified below.

The diagram records the identity $\mathcal I_\Phi\circ q=S\circ T_\Phi$, where $S(y)=(y_i^2)_{i\in[m]}$ is coordinatewise squaring. It distinguishes signed linear measurements, amplitudes, and intensities; no proof relies on the diagram.

```tikzcd
\mathbb R^d \arrow[r,"T_\Phi"] \arrow[d,"q"'] & \mathbb R^{[m]} \arrow[d,"S"] \\
Q_d \arrow[r,"\mathcal I_\Phi"'] & [0,\infty)^m
```

## Definition references

[[def-ip-forward-map-and-solution-classes|Forward maps and target-class spaces]]

[[def-ip-identifiability-and-stability-modulus|Identifiability modulo a target equivalence]]

[[def-max-min|Minimum of a finite set of real numbers]]

[[def-ordered-field|The real order used to attain this two-point minimum]]

[[def-euclidean-inner-product|Euclidean inner product and norm]]

[[lem-metrics-on-rn|Euclidean metrics on finite real coordinate spaces]]

[Radu Balan, Pete Casazza, and Dan Edidin, The real finite-frame measurement model and injectivity, §2](https://arxiv.org/pdf/math/0412411)

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, abstract phaseless maps and quotient classes, §§1–2.1](https://arxiv.org/pdf/1901.07911v2)

[Radu Balan, real phase retrieval and complement property, §3.2](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)
