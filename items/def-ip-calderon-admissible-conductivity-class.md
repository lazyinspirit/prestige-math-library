---
id: def-ip-calderon-admissible-conductivity-class
kind: definition
title: Calderón admissible conductivity classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-l-p-space-as-a-quotient-by-null-functions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Section 2.3, equations (2.10)–(2.13), printed pp. 9–11: bounded conductivities equal to the fixed background outside a compactly contained subdomain, with BV in dimension two and C1alpha in dimensions at least three."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 1, Definitions 1.1–1.2, printed pp. 1–2: uniformly elliptic planar conductivity classes and integral translation moduli."
---

## Definition

Fix an integer $d\ge2$. Let $\Omega\subset(0,1)^d$ be a nonempty bounded connected open domain with $C^\infty$ boundary, and let $\Omega'\subset\Omega$ be an open domain whose closure is compact and contained in $\Omega$. Fix real parameters $m>0$, $M\ge\max\{1,m\}$, $R>0$, and $0<\alpha<1$. Define
$$\Gamma_{m,M}(\Omega):=\{\gamma\in L^\infty(\Omega;\mathbb R):m\le\gamma(x)\le M\text{ for almost every }x\in\Omega\}$$
and
$$\Gamma'_{m,M}(\Omega,\Omega'):=\{\gamma\in\Gamma_{m,M}(\Omega):\gamma=1\text{ almost everywhere on }\Omega\setminus\Omega'\}.$$
For $\gamma\in BV(\Omega)$ set $\|\gamma\|_{BV(\Omega)}:=\max\{\|\gamma\|_{L^1(\Omega)},TV(\gamma;\Omega)\}$. For a continuously differentiable function on $\overline\Omega$ whose first derivatives are $\alpha$-Hölder continuous, set
$$\|\gamma\|_{C^{1,\alpha}(\overline\Omega)}:=\max\left\{\max_{|\beta|\le1}\sup_{x\in\overline\Omega}|\partial^\beta\gamma(x)|,\ \max_{|\beta|=1}\sup_{\substack{x,y\in\overline\Omega\\x\ne y}}\frac{|\partial^\beta\gamma(x)-\partial^\beta\gamma(y)|}{|x-y|^\alpha}\right\}.$$
Define
$$X_d(R):=\begin{cases}\{\gamma\in\Gamma'_{m,M}(\Omega,\Omega')\cap BV(\Omega):\|\gamma\|_{BV(\Omega)}\le R\},&d=2,\\[2mm]\{\gamma\in\Gamma'_{m,M}(\Omega,\Omega')\cap C^{1,\alpha}(\overline\Omega):\|\gamma\|_{C^{1,\alpha}(\overline\Omega)}\le R\},&d\ge3.\end{cases}$$
For $\gamma\in\Gamma'_{m,M}(\Omega,\Omega')$, define its measurable background extension $\gamma_e:\mathbb R^d\to\mathbb R$ by $\gamma_e=\gamma$ almost everywhere on $\Omega$ and $\gamma_e=1$ on $\mathbb R^d\setminus\Omega$. Then $\gamma_e-1$ vanishes almost everywhere outside $\Omega'$. No pointwise continuity of $\gamma_e$ is asserted. The classes $X_d(R)$ are not assumed nonempty.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|Spatial BV classes and total variation.]]

[[def-l-p-space-as-a-quotient-by-null-functions|Lebesgue spaces are almost-everywhere classes.]]
