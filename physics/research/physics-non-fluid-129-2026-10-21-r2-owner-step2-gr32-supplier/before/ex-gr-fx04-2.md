---
id: ex-gr-fx04-2
kind: example
title: "A compact interior change preserves the ADM limit but changes scalar curvature"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "A smooth Riemannian metric example on a fixed asymptotic end; no Einstein constraint, completeness, or physical-solution claim is made."
deps:
  - def-gr-fx-adm-end
  - prop-gr-fx-conformal-adm-value
  - prop-gr-fx-compact-change-adm
  - lem-gr-fx04-conformal-scalar-curvature
dependency_roles:
  def-gr-fx-adm-end: mathematical-premise
  prop-gr-fx-conformal-adm-value: mathematical-premise
  prop-gr-fx-compact-change-adm: mathematical-premise
  lem-gr-fx04-conformal-scalar-curvature: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §6.3.2, equation (6.52), and §§7.3.1–7.3.2, equations (7.14)–(7.15), PDF pp. 90–91 and 105–110."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §6.3, equation (6.17), and §7.2, equation (7.6c), PDF pp. 26–27 and 33–34."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §2.1, equation (2), PDF pp. 7–8."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pass
---

## Example

Fix a length $R_0>0$, set $E=\{x\in\mathbb R^3:|x|>R_0\}$, and let $x_*=(3R_0,0,0)$. Define
$$\phi(x)=\begin{cases}\exp\!\left(-\frac{1}{1-|x-x_*|^2/R_0^2}\right),&|x-x_*|<R_0,\\0,&|x-x_*|\ge R_0.\end{cases}$$
For $0<\varepsilon<1$, set $u_0=1$, $u_\varepsilon=1+\varepsilon\phi$, $h_0=u_0^4\delta$, $h_\varepsilon=u_\varepsilon^4\delta$, and $K_0=K_\varepsilon=0$ on $E$. Both data sets have the same fixed-chart ADM energy, $0$, but their scalar curvatures differ at $x_*$.

## Example references

[[def-gr-fx-adm-end]]

[[prop-gr-fx-conformal-adm-value]]

[[prop-gr-fx-compact-change-adm]]

[[lem-gr-fx04-conformal-scalar-curvature]]

## Facts & Assumptions

**Given:** The Euclidean end $E$, the smooth bump candidate $\phi$, $0<\varepsilon<1$, and the conformal metrics and tensors in the Example.

[F1] The fixed-chart ADM energy depends only on $h$ and equals the prescribed limit of its Cartesian surface integrand; $K=0$ satisfies the required decay ([[def-gr-fx-adm-end]]).

[F2] For a positive smooth conformal factor $u$, $S_{u^4\delta}=-8u^{-5}\Delta_\delta u$ ([[lem-gr-fx04-conformal-scalar-curvature]]).

[F3] A positive conformal factor $u=1+m/(2r)+O_2(r^{-2})$ has $E_{\mathrm{ADM}}=c^4m/G_N$ ([[prop-gr-fx-conformal-adm-value]]).

[F4] If two metrics agree outside a compact subset of the same fixed end chart and both limits exist, their ADM energies are equal ([[prop-gr-fx-compact-change-adm]]).

[A1] $R_0>0$, $x_*=(3R_0,0,0)$, and $0<\varepsilon<1$; all coordinates are Euclidean length coordinates.

## Verification

**Given:** [F1]–[F4] and [A1].

1.1 Put $y=x-x_*$ and $q=1-|y|^2/R_0^2$. For $q>0$, each derivative of $e^{-1/q}$ is a polynomial in $q^{-1}$ times $e^{-1/q}$, and $q^{-N}e^{-1/q}\to0$ as $q\downarrow0$ for every integer $N\ge0$. Therefore extension by zero at $q\le0$ is $C^\infty$, so $\phi$ is a smooth bump supported in $\overline{B_{R_0}(x_*)}$. Since $|x_*|=3R_0$, this compact support lies in $\{|x|\ge2R_0\}\subset E$. Also $0\le\phi\le e^{-1}$, hence both $u_0$ and $u_\varepsilon$ are positive. [A1, construct, algebra]

2.1 The metrics $h_0$ and $h_\varepsilon$ agree outside the compact support of $\phi$, and both have $K=0$. The conformal end result [F3] with $m=0$ gives $E_{\mathrm{ADM}}(h_0)=0$; [F4] then gives $E_{\mathrm{ADM}}(h_\varepsilon)=E_{\mathrm{ADM}}(h_0)=0$. [F1, F3, F4, step 1.1, algebra]

3.1 At $x_*$, $q=1$, $\phi(x_*)=e^{-1}$, $\partial_iq=0$, and $\partial_i\partial_jq=-2\delta_{ij}/R_0^2$. Differentiating $\phi=e^{-1/q}$ at this point gives $\partial_i\phi(x_*)=0$ and $\partial_i\partial_j\phi(x_*)=-2e^{-1}\delta_{ij}/R_0^2$, so $\Delta_\delta\phi(x_*)=-6e^{-1}/R_0^2$. The flat metric $h_0=\delta$ has scalar curvature $0$, while [F2] gives
$$S_{h_\varepsilon}(x_*)=-8(1+\varepsilon e^{-1})^{-5}\varepsilon\Delta_\delta\phi(x_*)=\frac{48\varepsilon e^{-1}}{R_0^2(1+\varepsilon e^{-1})^5}>0.$$
Thus the scalar curvatures differ at $x_*$ although the ADM limits agree. [F2, step 1.1, algebra] ∎

## Remarks

The example changes a metric on an exterior manifold with an inner boundary and does not impose the Einstein constraint equations or completeness. It is not a counterexample to a positive-mass theorem with its own hypotheses.
