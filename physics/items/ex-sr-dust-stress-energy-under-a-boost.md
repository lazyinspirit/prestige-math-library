---
id: ex-sr-dust-stress-energy-under-a-boost
kind: example
title: "Dust stress-energy in a boosted inertial frame"
status: published
origin: pipeline
domain: mathematics
deps: [def-sr-stress-energy-tensor-and-force-density, lem-sr-dust-conservation-equivalence, thm-sr-tensor-and-current-transformation, def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse, def-lorentz-form-and-inertia, def-inertial-frame-and-inertial-chart, def-rational-power, def-sr-affine-minkowski-model]
dependency_roles:
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  lem-sr-dust-conservation-equivalence: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rational-power: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

In an inertial chart $x$ with frame $(o;e_0,e_1,e_2,e_3)$, define the constant future unit field $n:A\to V$ by $n(p)=e_0$ and the dust tensor $T=\rho\,n\otimes n$ on all of $A$, with constant rest coefficient $\rho>0$. Thus $T^{ab}=\rho\,\delta^a_0\delta^b_0$ and the only nonzero component is $T^{00}=\rho$. Under the passive boost of [[def-lorentz-boost]] along the $x^1$ axis with parameter $\beta$, $|\beta|<1$, $\gamma=(1-\beta^2)^{-1/2}$, the primed components are $$T'^{00}=\gamma^2\rho,\quad T'^{01}=T'^{10}=-\gamma^2\beta\rho,\quad T'^{11}=\gamma^2\beta^2\rho,\quad T'^{22}=T'^{33}=0,$$ all other components zero; equivalently $T'^{ab}=\rho\,n'^an'^b$, where $n'^a$ denotes the primed components of the same field $n(p)=e_0$, namely $(n'^0,n'^1,n'^2,n'^3)=(\gamma,-\gamma\beta,0,0)$.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial frame $(o;e_0,e_1,e_2,e_3)$ and chart $x$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]); $\rho>0$ constant; the fields $n(p)=e_0$ and $T=\rho\,n\otimes n$ on all of $A$, with $T^{ab}=\rho\,\delta^a_0\delta^b_0$, which is $C^1$, symmetric and constant; the primed chart $x\prime=\Lambda x$ with $\Lambda$ the matrix of the passive boost along $e_1$ with parameter $\beta\in(-1,1)$ and $\gamma=(1-\beta^2)^{-1/2}$ ([[def-lorentz-boost]], [[def-rational-power]]).

[F1] Rank-two component law: under the inertial transition $x'=\Lambda x+a$ the components transform as $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}$; the boost is proper orthochronous with inverse $B(-\beta)$. For the same vector field $n$, the primed components obey $n\prime{}^a=\Lambda^a{}_b n^b$. ([[thm-sr-tensor-and-current-transformation]]\,(i),(iii), [[lem-boost-is-proper-orthochronous-with-inverse]])

[F2] Conservation terminology: a constant symmetric field has vanishing force density $\partial'_aT'^{ab}=0$, and dust tensors $\rho\,n\otimes n$ with constant future unit $n$ and constant $\rho>0$ are conserved by the dust equivalence. ([[def-sr-stress-energy-tensor-and-force-density]], [[lem-sr-dust-conservation-equivalence]])

## Verification

**Proof technique:** direct.

1.1 Boosted components. The boost matrix has $\Lambda^0{}_0=\gamma$, $\Lambda^0{}_1=\Lambda^1{}_0=-\gamma\beta$, $\Lambda^1{}_1=\gamma$ and preserves the other two spatial directions ([[def-lorentz-boost]]). Since $T^{ab}=\rho\,\delta^a_0\delta^b_0$, [F1] gives $T'^{ab}=\rho\,\Lambda^a{}_0\Lambda^b{}_0$; using $\Lambda^0{}_0=\gamma$, $\Lambda^1{}_0=-\gamma\beta$, $\Lambda^2{}_0=\Lambda^3{}_0=0$ this is $T'^{00}=\gamma^2\rho$, $T'^{01}=T'^{10}=-\gamma^2\beta\rho$, $T'^{11}=\gamma^2\beta^2\rho$ and $T'^{22}=T'^{33}=T'^{02}=T'^{03}=T'^{12}=T'^{13}=0$. [F1, given]

2.1 Factorization and conservation. For the same field $n(p)=e_0$, [F1] gives $n'^a=\Lambda^a{}_b n^b=\Lambda^a{}_0$, hence its primed components are $n'^0=\gamma$, $n'^1=-\gamma\beta$, $n'^2=n'^3=0$. Step 1.1 therefore reads $T'^{ab}=\rho\,n'^an'^b$; the passive change preserves the fields $n$ and $T$. The primed components satisfy $\eta_{ab}n'^an'^b=-\gamma^2+\gamma^2\beta^2=-1$ and $n'^0>0$, consistent with the future unit normalization of $n=e_0$. All primed components are constant in the primed chart, so $\partial'_aT'^{ab}=0$, consistent with [F2] applied to the constant future unit field $n$ and constant $\rho>0$. [F1, F2, given, step 1.1]

3.1 The primed coordinate coefficient $T'^{00}=\gamma^2\rho$ is the numerical factorization $\gamma^2\rho=\gamma\cdot(\gamma\rho)$; its source interpretation as one energy factor and one volume factor belongs to the separately adopted dust model reading and is not proved by this component computation. The example is a component computation and asserts no interaction, no dynamics and no measurement. [step 2.1] ∎
