---
id: def-prism-operator-for-a-homotopy
kind: definition
title: "The prism operator of a homotopy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-standard-topological-simplex-and-its-affine-face-maps, def-singular-simplex-and-singular-chain-group-with-coefficients]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Haynes Miller, Algebraic Topology I, Lecture 6"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/87a1ec7a7bcb92c59881ab6a8e70e0c2_MIT18_905F16_lec6.pdf"
pipeline_run: frontier-30
---

## Definition

Let $H:X\times I\to Y$ be a homotopy from $f$ to $g$ in the sense of
[[def-homotopy-relative-and-path-homotopy]]. For each singular $n$-simplex
$\sigma:\Delta^n\to X$, write
$$\sigma\times\operatorname{id}_I:\Delta^n\times I\to X\times I,\qquad (u,t)\mapsto(\sigma(u),t).$$

For each $0\leq i\leq n$, let
$$\lambda_i:\Delta^{n+1}\to\Delta^n\times I$$
be the affine map sending the vertices of $\Delta^{n+1}$ to
$$(v_0,0),\dots,(v_i,0),(v_i,1),(v_{i+1},1),\dots,(v_n,1).$$
In barycentric coordinates this is
$$\lambda_i(t_0,\dots,t_{n+1})=\bigl(s_0,\dots,s_n,\ t_{i+1}+\cdots+t_{n+1}\bigr),$$
where
$$s_k= \begin{cases} t_k,& k<i,\\ t_i+t_{i+1},& k=i,\\ t_{k+1},& k>i. \end{cases}$$

The **prism operator** determined by $H$ is the degree-$1$ homomorphism
$$P_H:C_n(X;\mathbb Z)\to C_{n+1}(Y;\mathbb Z)$$
defined on a singular simplex by
$$P_H(\sigma):=\sum_{i=0}^n(-1)^i\,H\circ(\sigma\times\operatorname{id}_I)\circ\lambda_i,$$
and extended linearly. For coefficients in an abelian group $G$, tensor with
$\operatorname{id}_G$ to obtain
$$P_H:C_n(X;G)\to C_{n+1}(Y;G).$$
