---
id: cex-emg-fx-eft-order-does-not-control-derivatives
kind: counterexample
title: "Small invariants do not alone control derivative corrections"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-fx-nonlinear-lagrangian
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-emg-fx-nonlinear-lagrangian: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and its Applications, arXiv:2112.12118v3 (2022)"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), PDF pp. 5–6: generic two-invariant derivative-free actions and the distinct status of physical restrictions. No coefficients or thresholds are imported."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019), §3.2.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§3.2.5, printed pp. 113–117 (PDF pp. 120–124): smooth field strength as the exterior derivative of a potential and the Maxwell action. The oscillatory family and scaling estimate are proved here."
---
## Statement refuted

On oriented Minkowski $\mathbb R^4$ with metric $\eta$, define $X=-F_{ab}F^{ab}/4$ and $Y=-F_{ab}(\star_\eta F)^{ab}/4$ for a smooth real two-form $F$. For fixed finite $\alpha,\beta$, every one-parameter family of smooth exact two-forms with $\sup_{\mathbb R^4}(|\alpha X|+|\beta Y|)\to0$ has uniformly bounded $\sup_{\mathbb R^4}|\partial_xF_{tx}|$. Thus small invariant corrections alone control all derivative scales.

## Statement references

[[def-emg-fx-nonlinear-lagrangian]]

[[lem-emg-lorentz-hodge-calculus]]

## Facts & Assumptions

**Given:** Minkowski $\mathbb R^4$ with length coordinates $(t,x,y,z)$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dt\wedge dx\wedge dy\wedge dz$, fixed positive scales $F_0,L_0,k_*$, fixed finite $\alpha,\beta$, and $0<\epsilon<1$.

[F1] [[def-emg-fx-nonlinear-lagrangian]] defines $X=-F_{ab}F^{ab}/4$ and $Y=-F_{ab}(\star_gF)^{ab}/4$ and allows arbitrary fixed coefficients $\alpha,\beta$ in $L=X+\alpha X^2+\beta Y^2$. If $F$ and the fixed scale $F_0$ have unit $\mathfrak F$, then $[X]=[Y]=\mathfrak F^2$ and $[\alpha]=[\beta]=\mathfrak F^{-2}=[F_0]^{-2}$; the definition makes no claim of derivative control from these invariants.

[F2] [[lem-emg-lorentz-hodge-calculus]] gives the Lorentzian Hodge component formula. For the simple two-form $dt\wedge dx$, its dual has only the complementary $dy\wedge dz$ component, so its contraction with $dt\wedge dx$ is zero.

[A1] $F_0$ is a fixed field-strength scale with unit $\mathfrak F$, $L_0$ is a fixed length scale, and $k_*>0$ is a fixed inverse-length scale; thus $F_0L_0$ has the local-potential component units in length coordinates. The fixed finite coefficients $\alpha,\beta$ have units $\mathfrak F^{-2}$, and $\epsilon\in(0,1)$ is dimensionless. No coefficient is assigned a QED value.

## Counterexample

Define the smooth one-form
$$A_\epsilon=F_0L_0\epsilon^3\cos\!\left(\frac{x}{L_0\epsilon^2}\right)dt$$
and its curvature $F_\epsilon=dA_\epsilon$.

1.1 Differentiating the coefficient gives
$$F_\epsilon=F_0\epsilon\sin\!\left(\frac{x}{L_0\epsilon^2}\right)dt\wedge dx.$$
It is exact, smooth for every $\epsilon>0$, and $dF_\epsilon=d^2A_\epsilon=0$. It is a valid curvature configuration; no field equation is claimed. [given, F1, A1, algebra]

1.2 Put $E_\epsilon=F_0\epsilon\sin(x/(L_0\epsilon^2))$. The only nonzero independent component is $(F_\epsilon)_{tx}=E_\epsilon$, and raising indices with $\eta$ gives $(F_\epsilon)^{tx}=-E_\epsilon$. Hence $F_{ab}F^{ab}=-2E_\epsilon^2$ and $X_\epsilon=E_\epsilon^2/2$. By [F2], $Y_\epsilon=0$. [given, F1, F2, A1, algebra]

2.1 Since $|\sin|\le1$, $|\alpha X_\epsilon|+|\beta Y_\epsilon|\le |\alpha|F_0^2\epsilon^2/2$, which tends to zero. Direct differentiation gives
$$\partial_x(F_\epsilon)_{tx}=\frac{F_0}{L_0\epsilon}\cos\!\left(\frac{x}{L_0\epsilon^2}\right),$$
whose supremum is $F_0/(L_0\epsilon)$; the phase wave number is $k_\epsilon=(L_0\epsilon^2)^{-1}$. Thus both the derivative supremum and $k_\epsilon/k_*$ diverge. [given, A1, step 1.1, step 1.2, algebra]

3.1 The family has invariant corrections tending uniformly to zero while $\sup|\partial_x(F_\epsilon)_{tx}|$ diverges by step 2.1. It therefore contradicts the refuted uniform derivative-bound implication. A derivative-truncation criterion must state its own derivative hypotheses and cutoff; the invariant inequalities alone do not provide them. [step 2.1, algebra] ∎

## Remarks

This is a smooth field configuration with a global potential and no singularities. It is not asserted to solve the nonlinear constitutive equation or represent an observation. The example neither evaluates an effective-action coefficient nor supplies a QED threshold.
