---
id: def-emg-fx-nonlinear-lagrangian
kind: definition
title: "A smooth nonlinear electromagnetic constitutive model"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-emg-lorentzian-forms
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-maxwell-action-variation
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019), §3.2.5, The Maxwell Action"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§3.2.5, printed pp. 113–117 (PDF pp. 120–124): the one-form potential, field strength, Maxwell action, compact variation, and sourced differential-form equation. The local model convention here is stated independently."
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and its Applications, arXiv:2112.12118v3 (2022)"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), PDF pp. 5–6: two Lorentz invariants and a generic derivative-free Lagrangian L(S,P); §6, equations (6.1)–(6.3), PDF pp. 10–11, for the distinct field-equation interface. No Heisenberg–Euler coefficient is imported."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.73)–(1.78), and Chapter 4, equations (4.28)–(4.29), (4.45): field-strength and Maxwell-action conventions. Carroll's Gaussian normalization is not imported."
---

## Definition

Let $(M,g,N,o)$ be a smooth, Hausdorff, second-countable, boundaryless, oriented and time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$, independent orientation $o$, and the torsion-free metric-compatible connection $
abla$ selected by $g$. Fix a smooth principal $U(1)$ bundle sector and a smooth connection $mathcal A$ in that sector. In the inherited physical-curvature normalization, its curvature is a smooth real two-form $F\in\Omega^2(M)$ with $dF=0$. A permitted variation is $mathcal A_\epsilon=\mathcal A+\epsilon a$, where $a\in\Omega^1(M)$ is smooth and compactly supported; the same-sector convention gives $F_\epsilon=F+\epsilon da$. No global potential is required.

Raise indices with $g^{-1}$ and let $\star_g$ be the Hodge map determined by $g$ and $o$. Define the scalar invariants
$$X:=-\frac14 F_{ab}F^{ab},\qquad Y:=-\frac14F_{ab}(\star_gF)^{ab}.$$
Let $L:\mathbb R^2\to\mathbb R$ be $C^2$, and write $L_X,L_Y$ for its first partial derivatives evaluated at $(X,Y)$. Define the contravariant antisymmetric tensor
$$H^{ab}:=L_XF^{ab}+L_Y(\star_gF)^{ab}.$$
The source-free local action density is $L(X,Y)\,\mathrm{vol}_g$. Its relative action difference under a compact variation is the integral of $[L(X(F_\epsilon),Y(F_\epsilon))-L(X(F),Y(F))]\,\mathrm{vol}_g$; this difference has compact support even when the unvaried integral over $M$ is not finite. The connection is stationary when the derivative of this relative action at $\epsilon=0$ vanishes for every permitted $a$.

In the mathematical normalization, $L=X$ is the Maxwell quadratic term. If units are attached, the components of $F$ have a fixed unit $\mathfrak F$, $X,Y,L$ have unit $\mathfrak F^2$, and coefficients $\alpha,\beta$ in $L=X+\alpha X^2+\beta Y^2$ have unit $\mathfrak F^{-2}$, so $\alpha X$ and $\beta Y$ are dimensionless. This normalization is not an SI action prefactor. The coefficients are arbitrary parameters, not QED coefficients. This definition supplies no quantum origin, source coupling, characteristic-cone condition, hyperbolicity, causality, or solution-existence claim.

## Definition references

[[def-emg-lorentzian-forms]]

[[def-emg-local-potentials-and-circle-data]]

[[lem-emg-circle-connection-gluing]]

[[lem-emg-lorentz-hodge-calculus]]

[[lem-emg-maxwell-action-variation]]

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry and fixed bundle connection sector in the Definition, the smooth curvature $F$, and a $C^2$ function $L:\mathbb R^2\to\mathbb R$.

[F1] [[def-emg-lorentzian-forms]] fixes a boundaryless oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, its metric-selected connection and its length-coordinate unit convention.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines $\star_g$ from the metric and independent orientation. On two-forms, $({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}$ and $\star_g^2=-\mathrm{id}$.

[F3] [[def-emg-local-potentials-and-circle-data]] specifies the normalized circle-connection data and local curvature forms. [[lem-emg-circle-connection-gluing]] proves that the fixed transition data define one bundle sector, that its physical curvature is a global smooth closed two-form, and that same-sector connection differences are global one-forms; compactly supported such differences give $\delta F=da$ in the inherited physical normalization.

[F4] [[lem-emg-maxwell-action-variation]] defines the relative action variation on noncompact manifolds and proves the compact-support integration-by-parts rule for this same connection interface. Its Maxwell stress and linear field equations are not asserted for the present nonlinear $L$.

[A1] $L$ is $C^2$ on all of $\mathbb R^2$; no analyticity, weak-field expansion, source term, or quantum matching condition is assumed.

## Proof

1.1 Each contraction defining $X$ and $Y$ is a scalar under changes of coordinates, because $g^{-1}$ and $\star_g$ are tensorial. Since $F$, $g$, and $\mathrm{vol}_g$ are smooth, $X,Y$ are smooth; $L_X(X,Y)$ and $L_Y(X,Y)$ are $C^1$. Therefore $H$ is a globally defined $C^1$ section of $\Lambda^2TM$, and the displayed action density is a globally defined $C^1$ top form. [given, F1, F2, A1, algebra]

2.1 For a permitted compactly supported variation $a$, [F3] gives $F_\epsilon-F=\epsilon da$, which vanishes off $\operatorname{supp}a$. Hence the difference of the two $L$ densities is compactly supported. Its integral is the ordinary integral of a compactly supported top form and is finite; the $C^2$ hypothesis makes its first variation well-defined by the chain rule on that compact support. Thus the Definition specifies a relative action and stationarity predicate without assuming the unvaried action is finite or that a stationary connection exists. [given, F3, F4, A1, algebra] ∎

## Remarks

A source-free nonlinear constitutive equation is a model distinct from linear Maxwell unless $L=X$ (up to an overall constant). Positivity and causality of its characteristic cone require a separate principal-symbol analysis. If an Euler–Heisenberg interpretation is later supplied, its coefficients and thresholds must come from a stated QFT calculation and approximation regime; none is assigned here.
