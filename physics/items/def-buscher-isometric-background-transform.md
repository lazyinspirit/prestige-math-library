---
id: def-buscher-isometric-background-transform
kind: definition
title: Buscher Isometric Background Transform
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-rns-ns-background-sigma-model
  - post-buscher-covariant-measure-dilaton-shift
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-rns-ns-background-sigma-model: formulation-prerequisite
  post-buscher-covariant-measure-dilaton-shift: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local leading-order Buscher transform of the NS–NS sigma-model metric, two-form, and dilaton along a free commuting spacelike circle isometry; excludes global bundle/CFT equivalence, localized isometry-breaking sources, higher-derivative corrections, and string-loop corrections."
sources:
  references:
    - title: "E. Alvarez, J. L. F. Barbón, and J. Borlaf, T-Duality for Open Strings, arXiv:hep-th/9603089v1"
      url: "https://arxiv.org/pdf/hep-th/9603089v1"
      locator: "§§1–2 and Appendix A, PDF pp. 1–13 and Appendix A: auxiliary gauging, algebraic gauge-field integration, Buscher rules, and global qualifications."
    - title: "Enrique Álvarez, Luis Álvarez-Gaumé, and Yolanda Lozano, An Introduction to T-Duality in String Theory, arXiv:hep-th/9410237v2"
      url: "https://arxiv.org/pdf/hep-th/9410237v2"
      locator: "§2.1, equations (2.1.1)–(2.1.5): the Euclidean sigma model, gauged parent action, algebraic gauge-field equation, and Buscher blocks."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§3.2, equation (3.11), PDF pp. 14–15: dimensionless Buscher rules and their isometry hypothesis."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Take a target patch with dimensionless coordinates $(y,x^i)$, with $y\sim y+2\pi$, string-frame metric $G_s:=G^{(s)}$ of dimension length squared, two-form $B_2$ of dimension length squared, and dimensionless dilaton $\Phi$. Relative to the length-valued coordinates $X^\mu$ in [F1], write $X^\mu=\lambda^\mu x^\mu$ for fixed positive length scales $\lambda^\mu$, with $\lambda^y=R$ for the angular circle; the metric and two-form components therefore acquire length-squared units in this chart. Require a free commuting spacelike $U(1)$ isometry, $\partial_yG_s=\partial_yB_2=\partial_y\Phi=0$ in an invariant local gauge, and $\widehat G_{yy}>0$. Set $\widehat G=G_s/\alpha'$ and $\widehat B=B_2/\alpha'$, so their components are dimensionless. The local Buscher transform along $y$ is
$$\widehat G'_{yy}=1/\widehat G_{yy},\quad \widehat G'_{yi}=\widehat B_{yi}/\widehat G_{yy},\quad \widehat B'_{yi}=\widehat G_{yi}/\widehat G_{yy}.$$

$$\widehat G'_{ij}=\widehat G_{ij}-(\widehat G_{yi}\widehat G_{yj}-\widehat B_{yi}\widehat B_{yj})/\widehat G_{yy},\quad \widehat B'_{ij}=\widehat B_{ij}-(\widehat G_{yi}\widehat B_{yj}-\widehat B_{yi}\widehat G_{yj})/\widehat G_{yy},\quad \Phi'=\Phi-\tfrac12\log\widehat G_{yy}.$$
These are the local leading sigma-model rules obtained by gauging the isometry and integrating out the worldsheet gauge field with the standard covariant measure. The definition does not assert global patching or an exact dual quantum background.

## Definition references

[[def-supergravity-conventions-and-normalizations]]

[[post-rns-ns-background-sigma-model]]

[[post-buscher-covariant-measure-dilaton-shift]]

## Facts & Assumptions

**Given:** Smooth target fields in one invariant coordinate patch, dimensionless $y$ of period $2\pi$, $\alpha'>0$, $\widehat G_{yy}>0$, and the adopted local Euclidean NS–NS sigma-model measure.

[F1] [[post-rns-ns-background-sigma-model]]: in length-valued target coordinates the local Euclidean bosonic action has metric term $\frac1{4\pi\alpha'}\int\sqrt h\,h^{ab}G_{\mu\nu}\partial_a X^\mu\partial_b X^\nu$, two-form term $\frac{i}{4\pi\alpha'}\int\varepsilon^{ab}B_{\mu\nu}\partial_a X^\mu\partial_b X^\nu$, and Fradkin–Tseytlin term $\frac1{4\pi}\int\sqrt h\,\Phi R^{(2)}$; it is local on one target chart and adopts no global measure.

[A1] [[def-supergravity-conventions-and-normalizations]]: $G^{(s)}$ is the string-frame metric, the Lorentzian signature is mostly plus, $\hbar=c=1$, $\alpha'$ has length-squared dimension, and $G^{(E)}=e^{-\Phi/2}G^{(s)}$.

[F2] [[post-buscher-covariant-measure-dilaton-shift]]: under the adopted covariantly regularized local measure, the Gaussian determinant contributes $-\frac1{8\pi}\int\sqrt h\,R^{(2)}\log\widehat G_{yy}$ and hence shifts $\Phi$ by $-\frac12\log\widehat G_{yy}$.

## Verification

1.1 In the chart of the Definition write $X^\mu=\lambda^\mu x^\mu$ with fixed positive lengths $\lambda^\mu$ and $\lambda^y=R$. If $G^{(s)}_{X,\mu\nu}$ and $B_{X,\mu\nu}$ are the components in the length-valued $X$ coordinates, then $G^{(s)}_{x,\mu\nu}=\lambda^\mu\lambda^\nu G^{(s)}_{X,\mu\nu}$ and $B_{x,\mu\nu}=\lambda^\mu\lambda^\nu B_{X,\mu\nu}$ have length-squared dimension; setting $\widehat G=G^{(s)}_x/\alpha'$ and $\widehat B=B_x/\alpha'$ turns [F1]'s matter action into $\frac1{4\pi}\int[\sqrt h\,h^{ab}\widehat G_{\mu\nu}\partial_a x^\mu\partial_b x^\nu+i\varepsilon^{ab}\widehat B_{\mu\nu}\partial_a x^\mu\partial_b x^\nu]$. Let $\xi^a$, $a=1,2$, be dimensionless local worldsheet coordinates. In a local gauge for the free shift $y\mapsto y+\epsilon$, introduce a real worldsheet one-form $A=A_a d\xi^a$, with dimensionless components and transformation $A\mapsto A-d\epsilon$, and use $D_a y=\partial_a y+A_a$. Let the dimensionless Lagrange multiplier $\widetilde y$ have period $2\pi$. With $\varepsilon^{12}=+1$, the Euclidean gauged parent action is
$$
S_P=\frac1{4\pi}\int_\Sigma d^2\xi\left\{\sqrt h\,h^{ab}\left[\widehat G_{yy}A_aA_b+2\widehat G_{yi}A_a\partial_bx^i+\widehat G_{ij}\partial_ax^i\partial_bx^j\right]+i\varepsilon^{ab}\left[2\widehat B_{yi}A_a\partial_bx^i+\widehat B_{ij}\partial_ax^i\partial_bx^j\right]\right\}+\frac{i}{2\pi}\int_\Sigma\widetilde y\,dA+\frac1{4\pi}\int_\Sigma d^2\xi\sqrt h\,\Phi R^{(2)}.
$$
The multiplier term is equivalently $\frac{i}{2\pi}\int d^2\xi\,\varepsilon^{ab}\widetilde y\partial_aA_b$; its normalization corresponds to the source's dimensionful multiplier $\widetilde\theta=\alpha'\widetilde y$. Integrating over $\widetilde y$ imposes $dA=0$, and on a contractible patch $A=d\theta$ can be removed by the shift gauge symmetry. This is only the local gauged parent action; no global holonomy or path-integral equivalence is asserted. [given, F1, A1, construct]

2.1 Fix the shift gauge $y=0$ in the parent action of step 1.1. Varying its algebraic Gaussian field $A_a$ gives, with $\widehat G_{yy}=E_{yy}>0$,
$$
A_a=-\frac1{E_{yy}}\left(\widehat G_{yi}\partial_a x^i+i\frac{\varepsilon_a{}^b}{\sqrt h}\left(\widehat B_{yi}\partial_b x^i+\partial_b\widetilde y\right)\right),
$$
where $\varepsilon_a{}^b:=h_{ac}\varepsilon^{cb}$. Substituting into the parent action and collecting the coefficients of the symmetric metric contraction and antisymmetric two-form contraction gives the dual matrix blocks $E'_{yy}=1/E_{yy}$, $E'_{yi}=E_{yi}/E_{yy}$, $E'_{iy}=-E_{iy}/E_{yy}$, and $E'_{ij}=E_{ij}-E_{iy}E_{yj}/E_{yy}$, with $E=\widehat G+\widehat B$. This is a local Gaussian elimination; its functional-determinant contribution is treated separately by [F2]. [given, F1, step 1.1, algebra]

3.1 Writing $E'=\widehat G'+\widehat B'$ with $\widehat G'$ symmetric and $\widehat B'$ antisymmetric gives $\widehat G'_{yi}=(E'_{yi}+E'_{iy})/2=\widehat B_{yi}/\widehat G_{yy}$ and $\widehat B'_{yi}=(E'_{yi}-E'_{iy})/2=\widehat G_{yi}/\widehat G_{yy}$. Taking the symmetric and antisymmetric parts of $E'_{ij}$ gives exactly the displayed $ij$ rules, because $E_{iy}=\widehat G_{yi}-\widehat B_{yi}$ and $E_{yj}=\widehat G_{yj}+\widehat B_{yj}$. [given, step 2.1, algebra]

4.1 By the adopted regularized measure input [F2], the Gaussian determinant changes the curvature coupling by $-\frac1{8\pi}\int\sqrt h\,R^{(2)}\log\widehat G_{yy}$. Combining it with [F1]'s coefficient $\frac1{4\pi}\int\sqrt h\,\Phi R^{(2)}$ is equivalent to replacing $\Phi$ by $\Phi-\frac12\log\widehat G_{yy}$, the dilaton rule in the Definition. This is the specified local measure correction; no global equivalence is inferred. [F1, F2, step 2.1, algebra] ∎

## Remarks

The source derivation assumes a free isometry and controlled gauge-field periodicities. Localized backreaction that breaks the isometry, NS5 magnetic support, higher derivatives, loops, dual-bundle topology, and global CFT patching require separate data and are outside this definition.

