---
id: def-ip-generalized-fourier-neural-operator
kind: definition
title: Generalized Fourier neural operator on a compact manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-ip-boundary-chart-lifting-and-fourier-projection
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "§2.4 and §4.4, equations (2.14)–(2.17) and (4.15)–(4.18), printed pp. 7–8 and 22–24."
    - title: "Nikola Kovachki et al., Neural Operator: Learning Maps Between Function Spaces"
      url: "https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf"
      locator: "§4.4, Fourier neural-operator architecture, Fourier multiplier, finite mode cutoff and real-valued conjugate-symmetry convention, printed pp. 20–23."
---

## Definition

Let $M\subset\mathbb R^{d_a}$ be a compact smooth manifold of dimension $n\ge d$, let $\Omega\subset(0,1)^d$ be a bounded domain, and let $\sigma\in C^\infty(\mathbb R)$ be globally Lipschitz and nonpolynomial. Fix finite input and output channel dimensions. A generalized Fourier neural operator is a map $\Psi:L^2(M;\mathbb R^{d_{in}})\to L^2(\Omega;\mathbb R^{d_{out}})$ of the form
$$\Psi=Q\circ R\circ F\circ L_L\circ\cdots\circ L_1\circ E\circ S.$$
Here $S$ is a pointwise finite-dimensional affine network, $S(h)(x)=s(x,h(x))$; $E$ is a continuous linear chart-lifting map from manifold functions to multichannel functions on $\mathbb T^n$; each $L_\ell$ acts on periodic channel fields by a fixed matrix channel map plus a continuous periodic channel bias $b_\ell(x)$ and a finite Fourier-multiplier convolution, followed coordinatewise by $\sigma$; $F:L^2(\mathbb T^n;\mathbb R^{c})\to L^2(\mathbb T^d;\mathbb R^{r})$ is a continuous linear dimension-reduction layer
$$ (Fv)(x_1,\ldots,x_d)=\int_{\mathbb T^{n-d}}K(z)v(x_1,\ldots,x_d,z)\,dz,$$
with a finite-dimensional matrix kernel $K$; $R$ is restriction of periodic fields to $\Omega$; and $Q$ is a pointwise finite-dimensional output network. For the EIT boundary manifold $M=\partial\Omega\times\partial\Omega$, the chart-lifting map $E$ may be taken to be the map $G$ of the chart-lifting lemma, with its finite chart-pair array treated as input channels. The finite Fourier multiplier at a layer is $\widehat{\mathcal K v}(k)=R_k\widehat v(k)$ for finitely many $k\in\mathbb Z^n$, with real-valued outputs enforced by conjugate-symmetric coefficients. When $n=d$, $F$ is the identity layer.

This is an architecture definition only. It asserts no approximation, training, statistical, discretization, or computational-cost guarantee.

## Definition references

[[lem-ip-boundary-chart-lifting-and-fourier-projection|The chart-lifting maps and their left-inverse identity.]]

[de Hoop et al., equations (4.15)–(4.18): generalized FNO on a manifold](https://arxiv.org/pdf/2511.20361)

[Kovachki et al., §4.4: Fourier neural-operator multiplier layers](https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf)
