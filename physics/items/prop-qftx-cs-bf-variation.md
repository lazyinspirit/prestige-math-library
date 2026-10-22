---
id: prop-qftx-cs-bf-variation
kind: proposition
title: "Chern–Simons boundary variation and BF equations"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or empirical claim."
dependency_level: 1
deps:
  - def-countable-choice
  - def-qftx-cs-bf-actions
  - thm-general-stokes-theorem
justified_by: []
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-cs-bf-actions: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Boris Khesin and Robert Wendt, The Geometry of Infinite-Dimensional Groups"
      url: "https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf"
      locator: "§3.2, printed pp. 184–186: complete first-variation calculation, Stokes boundary contribution, and presymplectic structure."
    - title: "Steven Carlip, Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe"
      url: "https://arxiv.org/pdf/gr-qc/0409039"
      locator: "§2.3, equations (2.3.2)–(2.3.14): Chern–Simons Euler equation and the classical three-dimensional gravity phase-space interface."
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§2, especially the variation of the BF action and the boundary-term qualification in Remark 1."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $M$ be a compact oriented smooth three-manifold with boundary, $\mathfrak g$ a finite-dimensional real Lie algebra with invariant nondegenerate symmetric pairing, and $A\in\Omega^1(M;\mathfrak g)$ a smooth connection in a fixed trivialization. For an arbitrary smooth variation $\alpha\in\Omega^1(M;\mathfrak g)$, the Chern–Simons first variation is

$$\delta\operatorname{CS}_A(\alpha)=2\int_M\langle\alpha\wedge F_A\rangle-\int_{\partial M}\langle A\wedge\alpha\rangle,$$

where $\partial M$ has the outward-normal-first orientation. Thus the boundary term is part of the variation; the bulk Euler equation is $F_A=0$ when variations are compactly supported in $\operatorname{int}M$ (or when boundary data make the boundary variation vanish). For $B\in\Omega^1(M;\mathfrak g)$ the BF action has first variation

$$\delta\operatorname{BF}_{(B,A)}(\beta,\alpha)=\int_M\langle\beta\wedge F_A\rangle+\int_M\langle\alpha\wedge D_AB\rangle-\int_{\partial M}\langle B\wedge\alpha\rangle,$$

so interior-compact variations give the equations $F_A=0$ and $D_AB=0$. No boundary condition is imposed by these bulk equations.

For $\lambda\in\mathbb R$ fixed, the boundary potential current of $\lambda\operatorname{CS}$ is $\theta_A(\alpha)=-\lambda\langle A\wedge\alpha\rangle$. On a compact oriented smooth surface $\Sigma$ (with smooth boundary allowed), put $\mathcal A_\Sigma=\Omega^1(\Sigma;\mathfrak g)$ and identify each tangent space with $\Omega^1(\Sigma;\mathfrak g)$. For $a\in\mathcal A_\Sigma$ define $\Theta_\Sigma|_a(\alpha)=\int_\Sigma\theta_a(\alpha)$, and let $\Omega_\Sigma=d_{\mathcal A_\Sigma}\Theta_\Sigma$. The restriction to the flat-connection solution space, wherever it is smooth, is the possibly degenerate presymplectic form. Explicitly, on tangent vectors $\alpha_1,\alpha_2$ it is the constant closed form

$$\Omega_\Sigma(\alpha_1,\alpha_2)=-2\lambda\int_\Sigma\langle\alpha_1\wedge\alpha_2\rangle.$$

At a flat connection $a$ ($F_a=0$), tangent variations $\alpha$ to the flat-connection equations satisfy $D_a\alpha=0$. For an infinitesimal gauge parameter $\epsilon\in C^\infty(\Sigma;\mathfrak g)$, the gauge direction is $D_a\epsilon$ and

$$\Omega_\Sigma(D_a\epsilon,\alpha)=-2\lambda\int_{\partial\Sigma}\langle\epsilon,\alpha\rangle.$$

Consequently gauge parameters vanishing on $\partial\Sigma$ generate null directions on the linearized flat locus. If $\epsilon$ is field-independent, the displayed boundary variation is $\delta Q_\epsilon$ for $Q_\epsilon(a)=-2\lambda\int_{\partial\Sigma}\langle\epsilon,a\rangle$. For $\lambda\ne0$, nonzero boundary parameters need not be null and can carry such charges when the boundary conditions permit them; no charge algebra or integrability assertion for field-dependent parameters is made. If $\lambda=0$, the displayed $\Theta_\Sigma$, $\Omega_\Sigma$ and $Q_\epsilon$ vanish identically, and every gauge direction on the linearized flat locus is null.

## Statement references

[[def-qftx-cs-bf-actions]]

[[def-countable-choice]]

[[thm-general-stokes-theorem]]

## Facts & Assumptions

**Given:** A compact oriented smooth three-manifold $M$ with boundary, a finite-dimensional real Lie algebra $\mathfrak g$ with the invariant nondegenerate pairing in the action definition, smooth fields $A,B$ and variations $\alpha,\beta$, and the stated $\mathrm{AC}_\omega$ assumption.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says every countable family of nonempty sets has a choice function.

[F1] [[def-qftx-cs-bf-actions]]: $F_A=dA+\tfrac12[A,A]$, $D_AX=dX+[A,X]$, $\operatorname{CS}(A)=\int_M\langle A\wedge dA+\tfrac13A\wedge[A,A]\rangle$, and $\operatorname{BF}(B,A)=\int_M\langle B\wedge F_A\rangle$.

[F2] [[thm-general-stokes-theorem]]: under $\mathrm{AC}_\omega$, for an oriented smooth $n$-manifold with boundary and a compactly supported smooth $(n-1)$-form $\eta$, $\int_Md\eta=\int_{\partial M}j^*\eta$ with outward-normal-first boundary orientation. Here compactness of $M$ makes all smooth forms used below compactly supported.

## Proof

1.1 Differentiate the Chern–Simons integrand along $A+s\alpha$. The quadratic term contributes $\langle\alpha\wedge dA+A\wedge d\alpha\rangle$. For the cubic term, the graded bracket and invariant pairing give the cyclic identities $\langle A\wedge[\alpha,A]\rangle=\langle\alpha\wedge[A,A]\rangle$ and $\langle A\wedge[A,\alpha]\rangle=\langle\alpha\wedge[A,A]\rangle$ for degree-one $A,\alpha$. Thus the three differentiated terms in $\tfrac13\langle A\wedge[A,A]\rangle$ are equal, and their average is $\langle\alpha\wedge[A,A]\rangle$. The full unintegrated variation is $\langle\alpha\wedge dA+A\wedge d\alpha+\alpha\wedge[A,A]\rangle$. [given, F1, algebra]

1.2 Differentiate $F_{A+s\alpha}$ at $s=0$; bilinearity of the bracket gives $\delta F_A=D_A\alpha$. Thus the BF variation before integration by parts is $\int_M\langle\beta\wedge F_A+B\wedge D_A\alpha\rangle$. [F1, algebra]

2.1 The graded Leibniz rule gives $d\langle A\wedge\alpha\rangle=\langle dA\wedge\alpha\rangle-\langle A\wedge d\alpha\rangle$. Since a two-form commutes with a one-form under wedge, $\langle A\wedge d\alpha\rangle=\langle\alpha\wedge dA\rangle-d\langle A\wedge\alpha\rangle$. Substitute this into step 1.1, combine $2dA+[A,A]=2F_A$, and apply [F2] to obtain the stated Chern–Simons formula, including its boundary sign. [A1, F1, F2, step 1.1, algebra]

3.1 For variations compactly supported in $\operatorname{int}M$, the boundary term in step 2.1 is zero. If stationarity holds for every such $\alpha$, then $\int_M\langle\alpha\wedge F_A\rangle=0$ for every local test variation. If $F_A$ were nonzero at some point, nondegeneracy of the pairing would select an algebra element pairing nontrivially with one component; continuity preserves its sign on a smaller chart, and a nonnegative bump supported there would make the integral nonzero. Hence $F_A=0$ on $\operatorname{int}M$. [A1, F1, step 2.1, construct]

3.2 For constant tangent vectors $\alpha_1,\alpha_2$ on the affine space $\mathcal A_\Sigma$, differentiating the potential current $\theta_A(\alpha)=-\lambda\langle A\wedge\alpha\rangle$ from step 2.1 gives $D_{\alpha_1}\Theta(\alpha_2)=-\lambda\int_\Sigma\langle\alpha_1\wedge\alpha_2\rangle$ and $D_{\alpha_2}\Theta(\alpha_1)=-\lambda\int_\Sigma\langle\alpha_2\wedge\alpha_1\rangle$. The field-space exterior derivative is their difference; antisymmetry of the wedge gives $\Omega_\Sigma=-2\lambda\int_\Sigma\langle\alpha_1\wedge\alpha_2\rangle$. Its coefficients are constant, so its field-space exterior derivative is zero. [step 2.1, algebra]

4.1 Invariance of the pairing makes $D_A$ obey the graded Leibniz rule on paired forms. Therefore $d\langle B\wedge\alpha\rangle=\langle D_AB\wedge\alpha\rangle-\langle B\wedge D_A\alpha\rangle$. As in step 2.1, the two-form $D_AB$ commutes under wedge with $\alpha$. Apply [F2] to obtain the stated BF formula. For variations supported in the interior the boundary integral vanishes. Independent compactly supported $\beta$ and $\alpha$ then test $F_A$ and $D_AB$ separately; the local nondegenerate-pairing bump argument in step 3.1 shows each must vanish. [A1, F1, F2, step 1.2, step 2.1, step 3.1, algebra]

4.2 At a flat $a$, $D_a^2\epsilon=[F_a,\epsilon]=0$, so $D_a\epsilon$ is tangent to the flat locus. For a tangent $\alpha$, $D_a\alpha=0$. Invariance of the pairing yields $d\langle\epsilon,\alpha\rangle=\langle D_a\epsilon\wedge\alpha\rangle+\langle\epsilon,D_a\alpha\rangle$. Integrating and applying [F2] on $\Sigma$ gives $\int_\Sigma\langle D_a\epsilon\wedge\alpha\rangle=\int_{\partial\Sigma}\langle\epsilon,\alpha\rangle$, which proves the gauge-contraction formula. If $\epsilon|_{\partial\Sigma}=0$, this contraction vanishes for every tangent $\alpha$. If $\epsilon$ is fixed under variation, direct differentiation of $Q_\epsilon(a)=-2\lambda\int_{\partial\Sigma}\langle\epsilon,a\rangle$ gives exactly the same contraction. [A1, F1, F2, step 3.2, algebra]

5.1 For $\lambda\ne0$, nonzero boundary parameters can in fact give nonzero contractions. Take $\mathfrak g=\mathbb R$ with pairing multiplication, the unit disk $\Sigma\subset\mathbb R^2$ with its standard orientation, $a=0$, $\epsilon(x,y)=x$, and $\alpha=dy$. Then $F_a=0$, $D_a\alpha=d(dy)=0$, and $D_a\epsilon=dx$. Polar coordinates give $\int_\Sigma dx\wedge dy=\int_0^{2\pi}\int_0^1 r\,dr\,d\theta=\pi$, so $\Omega_\Sigma(D_a\epsilon,\alpha)=-2\lambda\pi\ne0$ when $\lambda\ne0$. This establishes the stated possibility without asserting that every nonzero boundary parameter has a nonzero charge. If $\lambda=0$, the formulas for $\Theta_\Sigma$, $\Omega_\Sigma$ and $Q_\epsilon$ all have the common factor $\lambda$ and vanish; hence every gauge direction is null in this case. [step 4.2, construct, algebra] ∎
