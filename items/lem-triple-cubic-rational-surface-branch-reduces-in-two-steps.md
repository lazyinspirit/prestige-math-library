---
id: lem-triple-cubic-rational-surface-branch-reduces-in-two-steps
kind: lemma
title: "A triple-cubic surface branch reduces after two successors"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 17
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-double-plus-simple-cubic-rational-surface-branch-terminates,
                    lem-nonsquare-tangent-conic-rational-surface-blowups-terminate,
                    lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function,
                    lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology,
                    lem-rational-singular-point-blowup-canonical-pullback-surjective,
                    lem-rational-surface-local-rings-propagate-by-point-sequence-spreading,
                    lem-regular-local-quotient-by-parameter-is-regular,
                    lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic,
                    lem-surface-regular-fibres-preserve-normality, thm-one-dimensional-regular-local-rings-are-dvrs]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Lipman, Rational singularities (1969), \u00a724, pp.264\u2013268, relations (5)/(5\u2032): full text read; omitted chart details proved locally"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1969%5d%20Rational%20singularities%20with%20applications%20to%20algebraic%20surfaces%20and%20unique%20factorization.pdf"
    - title: "Joseph Lipman, Desingularization of two-dimensional schemes (1978), pp.171\u2013174, (1.29) and fixed-coordinate termination"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1978%5d%20Desingularization%20of%20two-dimensional%20schemes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. For a rational Gorenstein normal local surface in the permitted setting with square tangent conic, if its nonzero controlling cubic is a scalar times a cube, its continuing branch enters the nonsquare case or the double-plus-simple cubic class after at most two successive square successors. This allows every characteristic and residue field.

## Facts & Assumptions

**Given:** A rational Gorenstein normal local surface in the permitted setting with square tangent conic whose nonzero controlling cubic is a scalar multiple of a cube.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-double-plus-simple-cubic-rational-surface-branch-terminates.* Assume AC and DC. Let $A$ be a rational Gorenstein normal local surface in the permitted canonical-module setting, with normal completion and generators $\mathfrak m=(x,y,z)$. If $z^2+a xy^2\in z\mathfrak m^2+(x,y)^4$ for a unit $a$, all its singular point-blowup branches terminate. ([[lem-double-plus-simple-cubic-rational-surface-branch-terminates]])

[F4] *lem-nonsquare-tangent-conic-rational-surface-blowups-terminate.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted class with invertible canonical module and normal completion, if its tangent-conic quadratic is not a scalar times a square, repeatedly blowing up its singular points terminates in a regular model. ([[lem-nonsquare-tangent-conic-rational-surface-blowups-terminate]])

[F5] *lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function.* Assume AC and DC. Let $A$ be a nonregular rational normal local surface domain in the permitted canonical-module setting, with $\omega_A\cong A$. Then its point blowup is normal with trivial canonical module. Its exceptional conormal $L$ has degree two and $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$. ([[lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function]])

[F6] *lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic.* Assume AC and DC. For a rational Gorenstein normal local surface singularity with square tangent conic, choose $\mathfrak m=(x_1,x_2,z)$ and a relation $z^2=\sum a_{ijk}x_ix_jx_k$. There is a nonzero homogeneous cubic $H\in\kappa[X_1,X_2]$ whose zero scheme on the reduced exceptional line contains all singular successors. ([[lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic]])

[F7] *lem-rational-singular-point-blowup-canonical-pullback-surjective.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. ([[lem-rational-singular-point-blowup-canonical-pullback-surjective]])

[F8] *lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology.* Assume AC and DC. For a rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X$ is normal. Its exceptional fibre $E$ is a projective pure CM curve, its tautological conormal line $L=\mathcal O_E(1)$ is very ample, and $H^1(E,L^n)=0$, $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$. ([[lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology]])

[F9] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F10] *lem-regular-local-quotient-by-parameter-is-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$. ([[lem-regular-local-quotient-by-parameter-is-regular]])

[F11] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

## Proof

1.1 Ordinary rational point blowups remain normal, rationality propagates to the closed local rings, and canonical pullback from a local trivialization is a surjection onto a torsion-free rank-one module, hence an isomorphism; so the rational Gorenstein and normal-completion hypotheses persist along every singular branch. [F7, F9, F11, given]

2.1 Choose generators so that the controlling cubic is $\bar aY^3$ with $\bar a\ne0$; grouping the relation modulo $\mathfrak m^4$ and absorbing the terms $z^2\mathfrak m$ into a unit coefficient gives the exact ideal relation $z^2+ay^3+\beta x^2z+\gamma x^4\in J_1=(x^3y,x^2y^2,xyz,y^2z)$ with $a$ a unit. [F6, given, step 1.1]

3.1 The unique possible singular successor in the $x$-chart has quadratic $P(X,V)=V^2+\bar\beta XV+\bar\gamma X^2$; if $P$ is nonsquare that successor is in the nonsquare case. [F4, F5, step 2.1]

4.1 If $P$ is a square, choose $\delta$ with $\bar\beta=2\bar\delta$ and $\bar\gamma=\bar\delta^2$ and make the old-ring coordinate correction $w=z+\delta x^2$; this preserves $J_1$, the new $x^2w$ and $x^4$ coefficients lie in $\mathfrak m$, and expanding them in $(x,y,w)$ after absorbing a $w^2$ coefficient into a unit produces exact coefficients $\rho,\sigma$ with $z^2+ay^3+\rho x^3y+\sigma x^5\in J_2=(x^3z,x^2y^2,xyz,y^2z)$. [F6, step 3.1]

5.1 Writing the right side of that relation as $Ax^3z+Bx^2y^2+Cxyz+Dy^2z$, the next $x$-chart equation is $v^2+axu^3+\rho x^2u+\sigma x^3-Ax^2v-Bx^2u^2-Cxuv-Dxu^2v=0$; its tangent quadratic is $v^2$ and its cubic restriction to the kernel plane $v=0$ is $X^2(\bar\rho U+\bar\sigma X)$. [F6, step 4.1]

6.1 The origin of that chart is singular: if its two-dimensional local ring were regular, the quotient by $x$ would have the double-line cotangent generators $u,v$, so $x$ would lie in the square of the maximal ideal and $u,v$ would be regular parameters, but the displayed equation puts $v^2$ in the third power of that maximal ideal, which is impossible for regular parameters; hence the rational Gorenstein tangent-conic supplier applies to it, and normality of the next rational point blowup forces the controlling cubic to be nonzero, so $\rho$ or $\sigma$ is a unit, in every characteristic. [F5, F8, F10, step 5.1]

7.1 If $\rho$ is a unit, the cubic $X^2(\bar\rho U+\bar\sigma X)$ is a double factor times a distinct simple factor, and an invertible linear choice with simple coordinate $\rho u+\sigma x$ and double coordinate $x$ puts the successor in the double-plus-simple class $(S)$, which terminates. [F3, step 6.1]

8.1 If $\rho$ is not a unit, then $\sigma$ is a unit and $\rho=xr$ on the chart; swapping coordinates $X=u$, $Y=x$, $Z=v$ turns the equation into $Z^2+(\sigma+rX)Y^3+aX^3Y-AY^2Z-BX^2Y^2-CXYZ-DX^2YZ=0$, whose four last terms lie in $(X^3Z,X^2Y^2,XYZ,Y^2Z)$; this is the corrected relation with new $\rho$ a unit and $\sigma=0$, so one further point blowup reaches the double-plus-simple class. [F3, step 6.1, step 7.1]

9.1 Hence a continuing square branch enters either the nonsquare case or the double-plus-simple cubic class after at most two successive square successors; for the E8-form relation the substitution $x=y_{\mathrm{old}}$, $y=x_{\mathrm{old}}$, $z=z_{\mathrm{old}}$ exhibits the displayed successor $v^2+y_{\mathrm{old}}u^3+y_{\mathrm{old}}^3$ as the $\sigma$-unit chart, and the swap $X=u$, $Y=y_{\mathrm{old}}$ gives $v^2+Y^3+X^3Y$, whose next $X$-chart is $w^2+Xs^3+X^2s$ with cubic $X^2s$ having a double and a distinct simple factor, so it enters the stable class; the argument uses neither division by two or three nor a geometric-factorization assumption, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, step 7.1, step 8.1] ∎

## Remarks

- The finite transition is exactly the step missing from the earlier restrictive chart analysis.
- The last four terms of the swapped equation are retained rather than discarded.
