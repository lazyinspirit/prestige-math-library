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
  - def-countable-choice
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
  - def-emg-fx-continuous-compact-top-form-integral
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
  def-emg-fx-continuous-compact-top-form-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019),
        §3.2.5, The Maxwell Action"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§3.2.5, printed pp. 113–117 (PDF pp. 120–124): the one-form potential,
        field strength, Maxwell action, compact variation, and sourced
        differential-form equation. The local model convention here is stated
        independently."
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and
        its Applications, arXiv:2112.12118v3 (2022)"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), PDF pp. 5–6: two Lorentz invariants and a
        generic derivative-free Lagrangian L(S,P); §6, equations (6.1)–(6.3),
        PDF pp. 10–11, for the distinct field-equation interface. No
        Heisenberg–Euler coefficient is imported."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.73)–(1.78), and Chapter 4, equations
        (4.28)–(4.29), (4.45): field-strength and Maxwell-action conventions.
        Carroll's Gaussian normalization is not imported."
---

## Definition

Let $(M,g,N,o)$ be a smooth, Hausdorff, second-countable, boundaryless, oriented and time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$, independent orientation $o$, and the torsion-free metric-compatible connection $\nabla$ selected by $g$. Fix a smooth principal $U(1)$ bundle sector and a smooth connection $\mathcal A$ in that sector. In the inherited physical-curvature normalization, its curvature is a smooth real two-form $F\in\Omega^2(M)$ with $dF=0$. On a supplied countable trivializing cover $(U_i)$, write its compatible local physical-potential representatives as $A_i\in\Omega^1(U_i)$, so $F|_{U_i}=dA_i$ and, in the normalization of [[def-emg-local-potentials-and-circle-data]], $A_i=\kappa_0 a_i$ with $A_j-A_i=\kappa_0\lambda(g_{ij})$ on overlaps. No global potential is required.

A permitted variation is specified by a smooth compactly supported global real one-form $a\in\Omega^1(M)$, with the same component units as each $A_i$ if units are attached. For a dimensionless parameter $\epsilon\in\mathbb R$, define $A_{i,\epsilon}:=A_i+\epsilon a|_{U_i}$. Because $a$ is global, these local representatives retain the same transition functions and define a smooth connection $\mathcal A_\epsilon$ in the same bundle sector. Equivalently, the normalized local representatives shift as $a_{i,\epsilon}=a_i+\epsilon\kappa_0^{-1}a|_{U_i}$. Thus $F_\epsilon|_{U_i}=dA_{i,\epsilon}=F|_{U_i}+\epsilon da$, so globally $F_\epsilon=F+\epsilon da$. The shorthand $\mathcal A_\epsilon=\mathcal A+\epsilon a$ denotes this affine shift of local physical-potential representatives; it does not assert direct addition of a base one-form to a principal-bundle connection one-form on its total space.

Raise indices with $g^{-1}$ and let $\star_g$ be the Hodge map determined by $g$ and $o$. Define the scalar invariants
$$X:=-\frac14 F_{ab}F^{ab},\qquad Y:=-\frac14F_{ab}(\star_gF)^{ab}.$$
Let $L:\mathbb R^2\to\mathbb R$ be $C^2$, and write $L_X,L_Y$ for its first partial derivatives evaluated at $(X,Y)$. Define the contravariant antisymmetric tensor
$$H^{ab}:=L_XF^{ab}+L_Y(\star_gF)^{ab}.$$
The source-free local action density is $L(X,Y)\,\mathrm{vol}_g$. For a continuous compactly supported top form, use the finite chart-partition integral $\mathcal I_M$ of the continuous-integral definition linked below; it agrees with the usual manifold integral on smooth forms. This convention retains Countable Choice, meaning that every countable family of nonempty sets has a choice function, as inherited from the smooth integral. Its relative action difference under a compact variation is $\mathcal I_M([L(X(F_\epsilon),Y(F_\epsilon))-L(X(F),Y(F))]\,\mathrm{vol}_g)$; this difference has compact support even when the unvaried integral over $M$ is not finite. The connection is stationary when the derivative of this relative action at $\epsilon=0$ vanishes for every permitted $a$.

In the mathematical normalization, $L=X$ is the Maxwell quadratic term. If units are attached, the components of $F$ have a fixed unit $\mathfrak F$, $X,Y,L$ have unit $\mathfrak F^2$, and coefficients $\alpha,\beta$ in $L=X+\alpha X^2+\beta Y^2$ have unit $\mathfrak F^{-2}$, so $\alpha X$ and $\beta Y$ are dimensionless. This normalization is not an SI action prefactor. The coefficients are arbitrary parameters, not QED coefficients. This definition supplies no quantum origin, source coupling, characteristic-cone condition, hyperbolicity, causality, or solution-existence claim.

## Definition references

[[def-emg-lorentzian-forms]]

[[def-emg-local-potentials-and-circle-data]]

[[lem-emg-circle-connection-gluing]]

[[lem-emg-lorentz-hodge-calculus]]

[[def-emg-fx-continuous-compact-top-form-integral]]

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry and fixed bundle connection sector in the Definition, the smooth curvature $F$, and a $C^2$ function $L:\mathbb R^2\to\mathbb R$.

[F1] [[def-emg-lorentzian-forms]] fixes a boundaryless oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, its metric-selected connection and its length-coordinate unit convention.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines $\star_g$ from the metric and independent orientation. On two-forms, $({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}$ and $\star_g^2=-\mathrm{id}$.

[F3] [[def-emg-local-potentials-and-circle-data]] specifies the normalized local connection representatives $a_i$, their fixed transition functions, and the positive normalization $\kappa_0$, so the physical representatives are $A_i=\kappa_0a_i$. [[lem-emg-circle-connection-gluing]] proves that adding one global one-form to all normalized representatives preserves those transitions and changes curvature by its exterior derivative. Under the variation defined above, the normalized representatives shift by $\epsilon a/\kappa_0$; hence the physical curvature changes by $\epsilon da$ and remains closed.

[F4] [[def-emg-fx-continuous-compact-top-form-integral]] defines a linear, local finite chart-partition integral for continuous compactly supported top forms, proves chart and cutoff independence directly for continuous coefficients, and gives the finite rectangle bound that permits uniform coefficient limits to pass through the integral. Under the stated Countable Choice convention ([[def-countable-choice]]), it agrees on smooth forms with [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]] and [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]. Those imported smooth-only statements are used only for this compatibility, not to assert smoothness of a density made from a merely $C^2$ Lagrangian.

[A1] $L$ is $C^2$ on all of $\mathbb R^2$; no analyticity, weak-field expansion, source term, or quantum matching condition is assumed.

## Proof

1.1 Each contraction defining $X$ and $Y$ is a scalar under changes of coordinates, because $g^{-1}$ and $\star_g$ are tensorial. Since $F$, $g$, and $\mathrm{vol}_g$ are smooth, $X,Y$ are smooth; $L_X(X,Y)$ and $L_Y(X,Y)$ are $C^1$. Therefore $H$ is a globally defined $C^1$ section of $\Lambda^2TM$, and the displayed action density is a globally defined $C^1$ top form. [given, F1, F2, A1, algebra]

2.1 For a permitted compactly supported variation $a$, [F3] gives $F_\epsilon-F=\epsilon da$, which vanishes off $\operatorname{supp}a$. Hence the difference of the two $L$ densities is compactly supported. Its coefficient is at least continuous, so the integral $\mathcal I_M$ in [F4] is finite without requiring a smooth density. On finitely many fixed chart rectangles near that support, the chain rule gives continuous parameter derivatives; their uniform convergence of difference quotients on compact rectangles allows passage to the integrals by the rectangle bound in [F4]. Hence its first variation is well-defined for $L\in C^2$, with no stronger regularity assumption. Thus the Definition specifies a relative action and stationarity predicate without assuming the unvaried action is finite or that a stationary connection exists. [given, F3, F4, A1, algebra] ∎

## Remarks

A source-free nonlinear constitutive equation is a model distinct from linear Maxwell unless $L=X$ (up to an overall constant). Positivity and causality of its characteristic cone require a separate principal-symbol analysis. If an Euler–Heisenberg interpretation is later supplied, its coefficients and thresholds must come from a stated QFT calculation and approximation regime; none is assigned here.
