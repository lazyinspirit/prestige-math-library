---
id: ex-gr-unit-conventions-for-two-time-coordinates
kind: example
title: "Component units of the flat metric in length and time coordinates"
status: published
origin: session
domain: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-si-unit-and-coordinate-conventions, ex-gr-minkowski-chart-as-a-lorentzian-manifold, lem-gr-covariant-two-tensor-transformation-law, def-gr-smooth-covariant-two-tensor-field]
dependency_roles:
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  ex-gr-minkowski-chart-as-a-lorentzian-manifold: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
physical_scope: "Unit bookkeeping for the flat model metric under the change of time coordinate from x^0 = ct to x^0 = t: the metric components change from diag(-1,1,1,1) to diag(-c^2,1,1,1) and the component dimensions change accordingly, while the line element ds^2 retains dimension m^2. Illustrates the SI conventions; asserts no measured value of c and no dynamics."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), equations (1.5)-(1.6) with x^0 = ct and c = 1, and the remark that 1 second equals 3 x 10^8 metres in these units, printed pp. 4-5 (PDF pp. 11-12)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), Conventions: units with c = 1, PDF p. 1"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), natural units and dimensions of constants, printed p. 144 (PDF p. 151)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,A)$ be the flat Lorentzian four-manifold of
[[ex-gr-minkowski-chart-as-a-lorentzian-manifold]], whose global chart
$x=(x^0,x^1,x^2,x^3)$ is read as **length coordinates** $x^0=ct$,
$(x^1,x^2,x^3)=(x,y,z)$ in metres, with components
$A_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$, all dimensionless. Introduce the
**time coordinates** $u=(t,x,y,z)$, so that the coordinate change from $u$ to
$x$ is $x^0=cu^0$, $x^i=u^i$. Then in the chart $u$ the same field $A$ has
components

$$A'_{ab}=\operatorname{diag}(-c^2,1,1,1)_{ab},$$

the component $A'_{00}$ carries dimension $\mathrm m^2\,\mathrm s^{-2}$, the
components $A'_{ij}$ for $i,j\ge1$ are dimensionless, and the line element
$ds^2=A'_{ab}du^adu^b$ again has dimension $\mathrm m^2$. Thus the same metric
has components of different dimensions in the two charts, while its invariant
readings are unchanged; this verifies part (b) of
[[def-gr-si-unit-and-coordinate-conventions]].

## Facts & Assumptions

**Given:** The flat field $A$ with components $\operatorname{diag}(-1,1,1,1)$ in the length chart $x$ on $M=\mathbb R^4$ and the time chart $u$ with $x^0=cu^0$, $x^i=u^i$ for a positive constant $c$ of dimension $\mathrm m\,\mathrm s^{-1}$.

[L1] Under a change of charts $x=x(u)$ the components of a covariant $2$-tensor field transform as $A'_{ab}(u)=\sum_{c,d}\frac{\partial x^c}{\partial u^a}(u)\frac{\partial x^d}{\partial u^b}(u)A_{cd}(x(u))$ ([[lem-gr-covariant-two-tensor-transformation-law]]).

[L2] The conventions attach to $c$ the dimension $\mathrm m\,\mathrm s^{-1}$; in length coordinates $x^0=ct$ all four coordinates are in metres and the metric components are dimensionless, while in time coordinates $g_{00}$ carries dimension $\mathrm m^2\,\mathrm s^{-2}$; the line element $ds^2=g_{ab}dx^adx^b$ has dimension $\mathrm m^2$ in every chart ([[def-gr-si-unit-and-coordinate-conventions]]).

[L3] Constant components in a global chart define a smooth covariant $2$-tensor field, and the flat field $A$ is the Lorentzian metric of [[ex-gr-minkowski-chart-as-a-lorentzian-manifold]] ([[def-gr-smooth-covariant-two-tensor-field]]).

## Verification

**Proof technique:** direct.

1.1 The Jacobian of the coordinate change is diagonal: $\frac{\partial x^0}{\partial u^0}=c$, $\frac{\partial x^i}{\partial u^i}=1$ for $i=1,2,3$, and all off-diagonal entries vanish. Applying [L1] to the diagonal matrix $A=\operatorname{diag}(-1,1,1,1)$ gives $A'_{00}=c^2A_{00}=-c^2$, $A'_{ij}=A_{ij}=\delta_{ij}$ for $i,j\ge1$, and $A'_{0i}=A'_{i0}=0$; hence $A'=\operatorname{diag}(-c^2,1,1,1)$. [L1, L3, algebra]

2.1 By [L2] the factor $c^2$ carries dimension $\mathrm m^2\,\mathrm s^{-2}$, so $A'_{00}=-c^2$ carries that dimension, while $A'_{11}=A'_{22}=A'_{33}=1$ are dimensionless; in particular the components are no longer all dimensionless. In the $u$ chart, $du^0=dt$ carries seconds and $du^i$ metres, so $A'_{00}(du^0)^2$ and $A'_{ij}du^idu^j$ both carry dimension $\mathrm m^2$, and so does their sum $ds^2$, in agreement with [L2]; in the $x$ chart the same expression reads $A_{ab}dx^adx^b$ with all coordinates in metres. [step 1.1, L2, algebra]

3.1 The two component matrices therefore differ by the factor $c^2$ in the time-time entry, and the dimension of a single component depends on the chart while the invariant $ds^2$ does not; this is exactly the content of part (b) of [[def-gr-si-unit-and-coordinate-conventions]], and the example asserts no numerical value of $c$. [step 1.1, step 2.1, L2] ∎
