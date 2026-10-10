---
id: ex-sr-perfect-fluid-rest-and-moving-frame
kind: example
title: "Perfect fluid components in its rest frame and in a moving frame"
status: draft
origin: pipeline
domain: mathematics
deps: [lem-sr-perfect-fluid-conservation-equations, lem-sr-observer-stress-energy-decomposition, def-lorentz-boost, thm-sr-tensor-and-current-transformation, thm-sr-proper-time-and-observer-decomposition, def-lorentz-form-and-inertia, def-inertial-frame-and-inertial-chart, def-rational-power, def-sr-affine-minkowski-model, lem-boost-is-proper-orthochronous-with-inverse]
dependency_roles:
  lem-sr-perfect-fluid-conservation-equations: mathematical-premise
  lem-sr-observer-stress-energy-decomposition: mathematical-premise
  def-lorentz-boost: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rational-power: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Let $T^{ab}=(\varepsilon+P)n^an^b+P\eta^{ab}$ be the perfect-fluid tensor of [[lem-sr-perfect-fluid-conservation-equations]], with $n$ future unit. In an inertial frame in which $n=e_0$ (fluid at rest) the components are $T^{00}=\varepsilon$, $T^{11}=T^{22}=T^{33}=P$ and all other components zero. Under the passive boost along $x^1$ with parameter $\beta$, $|\beta|<1$, $\gamma=(1-\beta^2)^{-1/2}$, the primed components become $$T'^{00}=\gamma^2(\varepsilon+P)-P,\quad T'^{01}=T'^{10}=-\gamma^2(\varepsilon+P)\beta,\quad T'^{11}=\gamma^2(\varepsilon+P)\beta^2+P,\quad T'^{22}=T'^{33}=P,$$ all remaining components zero, and the observer contraction $T^{ab}(e_0')_a(e_0')_b=T'^{00}$ differs from $\varepsilon$ by $(\gamma^2-1)(\varepsilon+P)$.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial frame and chart $x$, constant $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-inertial-frame-and-inertial-chart]]); $C^1$ data $\varepsilon,P$, a future unit field $n$ ([[thm-sr-proper-time-and-observer-decomposition]]); the perfect-fluid field $T$ of [[lem-sr-perfect-fluid-conservation-equations]]; the passive boost along $e_1$ with $\gamma=(1-\beta^2)^{-1/2}$ and $|\beta|<1$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[def-rational-power]]).

[F1] Rank-two component law $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}$ under the inertial transition. ([[thm-sr-tensor-and-current-transformation]]\,(iii))

[F2] Observer decomposition: for a continuous symmetric field $T$ and future unit observer $n$ the contraction $\varepsilon=T^{ab}n_an_b$ is the energy density component of the unique observer decomposition, and in an adapted frame with $n=e_0$ it equals $T^{00}$. ([[lem-sr-observer-stress-energy-decomposition]])

## Verification

**Proof technique:** direct.

1.1 Rest-frame components. With $n=e_0$, $n^a=\delta^a_0$ and $\eta=\operatorname{diag}(-1,1,1,1)$: $T^{00}=(\varepsilon+P)(n^0)^2+P\eta^{00}=(\varepsilon+P)-P=\varepsilon$; $T^{ii}=(\varepsilon+P)(n^i)^2+P\eta^{ii}=0+P=P$ for $i=1,2,3$; and $T^{0i}=(\varepsilon+P)n^0n^i+P\eta^{0i}=0$. [given]

2.1 Observer contraction in the rest frame. By [F2] applied to the observer $e_0$ the contraction is $\varepsilon=T^{ab}(e_0)_a(e_0)_b=T^{00}$, consistent with step 1.1. [F2, step 1.1]

2.2 Boosted components. The boost matrix has $\Lambda^0{}_0=\Lambda^1{}_1=\gamma$, $\Lambda^0{}_1=\Lambda^1{}_0=-\gamma\beta$ and preserves the other two spatial directions. Substituting the rest-frame components of step 1.1 into [F1] and summing the nonzero terms gives $T'^{00}=\gamma^2\varepsilon+\gamma^2\beta^2P=\gamma^2(\varepsilon+P)-P$, $T'^{01}=\gamma(-\gamma\beta)\varepsilon+(-\gamma\beta)\gamma P=-\gamma^2(\varepsilon+P)\beta$, $T'^{11}=\gamma^2\beta^2\varepsilon+\gamma^2P=\gamma^2(\varepsilon+P)\beta^2+P$, $T'^{22}=T'^{33}=P$, $T'^{23}=0$ and $T'^{02}=T'^{03}=T'^{12}=T'^{13}=0$. [F1, step 1.1]

3.1 The boosted observer contraction. Because the passive boost $B(\beta)$ is a proper orthochronous Lorentz map ([[lem-boost-is-proper-orthochronous-with-inverse]]), the primed basis is an orthonormal future-oriented frame, so the vector $e_0'$ with primed components $e_0'^a=\delta^a_0$ is future unit; by [F2] its energy contraction is $\varepsilon':=T^{ab}(e_0')_a(e_0')_b=T'^{00}=\gamma^2(\varepsilon+P)-P$, so $\varepsilon'-\varepsilon=(\gamma^2-1)(\varepsilon+P)$: this difference vanishes exactly when $\beta=0$ (i.e. $\gamma=1$) or $\varepsilon+P=0$, and $\varepsilon'\ge\varepsilon$ whenever $\varepsilon+P\ge0$; no positivity of $\varepsilon+P$ is assumed. The transverse diagonal components remain $P$. [F2, step 2.2, given]

4.1 The computation uses the observer decomposition to identify the numerical contraction $T'^{00}$ as the energy density of the boosted observer; it asserts no equation of state, no positivity of $\varepsilon$ or $P$ and no measurement. [step 2.2, step 3.1] ∎
