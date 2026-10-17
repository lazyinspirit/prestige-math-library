---
id: lem-anchored-irgnm-fixed-reference-error-and-residual
kind: lemma
title: "Anchored IRGNM error identity and fixed-reference residual inequality"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-anchored-irgnm-with-discrepancy-stopping
  - lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds
  - lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves
  - lem-linearity-of-the-bochner-integral
  - lem-bochner-integral-norm-inequality
  - thm-hilbert-adjoint-properties
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods (full lecture); anchored formulation/source-filter context, local constants proved here"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Full 15-page lecture read; pp. 9–13 distinguish anchored IRGNM and spectral source arguments. The exact fixed-reference theorem here is locally derived, not attributed to the slide theorem."
    - title: "Christian Clason, Regularization of Inverse Problems (anchored formulation and spectral-error proof context)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Section 11.3, printed pp. 112–116, full local anchored proof read; that source proves an a-priori theorem, not the direct-discrepancy result authored here."
---

## Statement

Assume AC. Let $X,Y$ be real or complex Hilbert spaces over the same scalar
field, let $U\subseteq X$ be open, and let
$B=\overline B(x^\dagger,\rho)\subseteq U$ be convex. Let
$F:U\to Y$ continuously Fréchet differentiable over that field (bounded
complex-linear derivatives in the complex case). Set $A=F'(x^\dagger)$,
$S=A^*A$ and $y=F(x^\dagger)$. Suppose for each $x\in B$ that
$F'(x)=(I+R_x)A$ for a bounded linear $R_x:Y\to Y$ with
$\|R_x\|\le\kappa<1$, taking $R_{x^\dagger}=0$. Let $x\in B$,
$e=x-x^\dagger$, $e_0=x_0-x^\dagger=S^\nu w$, $0<\nu\le1/2$,
$\|w\|\le W$, and $\|y_\delta-y\|\le\delta$. For a single exact
anchored update with shift $\alpha>0$, define $e_+=x_+-x^\dagger$,
$v=\|Ae\|$, $v_+=\|Ae_+\|$, $R=R_x$,
$H=R+R^*+R^*R$, $\theta=2\kappa+\kappa^2$,
$d_0=2\kappa(1+\kappa)$, and $c_0=1+\kappa$. Then
$$t=F'(x)e-(F(x)-y),\quad z=(I+R)^*(y_\delta-y+t)-HAe_+,$$
$$(S+\alpha I)e_+=\alpha e_0+A^*z,\quad \|z\|\le c_0\delta+d_0v+\theta v_+.$$
Consequently
$$(1-\theta)v_+\le W\alpha^{\nu+1/2}+d_0v+c_0\delta,\qquad \|e_+\|\le W\alpha^\nu+\frac{c_0\delta+d_0v+\theta v_+}{2\sqrt\alpha}.$$
Also for $x,u\in B$,
$$(1-\kappa)\|A(x-u)\|\le\|F(x)-F(u)\|\le(1+\kappa)\|A(x-u)\|,$$
and the tangential-cone condition holds with constant $2\kappa/(1-\kappa)$. The conclusions require only the current state and segment in $B$, not the next state in $B$.

## Facts & Assumptions

**Given:** The objects, source condition, current admissible state and exact anchored step in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the field-complete functional calculus and the inherited Countable Choice for adjoints and the segment integral.

[F1] [[alg-anchored-irgnm-with-discrepancy-stopping]]: the exact correction includes $\alpha(x_0-x)$.

[F2] [[lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds]]: source bias, source residual, normal-noise and pushed residual bounds hold in both fields.

[F3] [[lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves]], [[lem-linearity-of-the-bochner-integral]] and [[lem-bochner-integral-norm-inequality]]: a continuously differentiable segment curve has increment the integral of its derivative, and the integral norm is bounded by the integral of the norm.

[F4] [[thm-hilbert-adjoint-properties]]: adjoints reverse products, preserve the norm and satisfy the conjugate-linear sum identities.

## Proof

1.1 For $h=x-u$, let $\gamma(s)=F(u+sh)$. The segment lies in $B$. If $h\ne0$ and $0<s<1$, then for real $r\to0$ with $s+r\in[0,1]$, same-field Fréchet differentiability gives
$$\left\|\frac{F(u+(s+r)h)-F(u+sh)}r-F'(u+sh)h\right\|
=\frac{\|F(u+(s+r)h)-F(u+sh)-F'(u+sh)(rh)\|}{|r|}\longrightarrow0.$$
Thus $\gamma'(s)=F'(u+sh)h$. For $h=0$ the curve is constant. In either case differentiability makes $\gamma$ continuous by the Fréchet remainder definition, and this derivative is continuous on the segment with endpoint extensions because $F'$ is Lipschitz on $B$. Applying the Banach-valued fundamental theorem [F3] and subtracting the constant integral of $Ah$ gives
$$F(x)-F(u)-Ah=\int_0^1(F'(u+sh)-A)h\,ds.$$
Linearity of $R_{u+sh}$ and its norm bound make the integrand norm at most $\kappa\|Ah\|$, so the integral has that bound. The triangle and reverse triangle inequalities give the two-sided estimate. Subtracting $(F'(u)-A)h$ bounds the linearization remainder by $2\kappa\|Ah\|$, proving the cone constant. This integrates the continuous vector $F'(u+sh)h$, not a possibly unmeasurable choice of the operators $R_{u+sh}$. Taking $u=x^\dagger$ also gives $\|t\|\le2\kappa v$. [A1, F3, given, algebra]

1.2 Let $A_x=F'(x)$. From [F1], $(A_x^*A_x+\alpha I)e_+=\alpha e_0+A_x^*(y_\delta-y+t)$. By factorization and [F4], $A_x^*A_x=S+A^*HA$ and $A_x^*=A^*(I+R)^*$. Moving $A^*HAe_+$ to the right gives the fixed-reference identity with $z$ in the Statement. The inverse used here exists independently of where $x_+$ lies. [A1, F1, F2, F4, given, algebra]

2.1 By [F4], $\|H\|\le2\kappa+\kappa^2=\theta$ and $\|(I+R)^*\|\le1+\kappa$. Combining these bounds with $\|t\|\le2\kappa v$ proves $\|z\|\le c_0\delta+d_0v+\theta v_+$. [F4, step 1.1, step 1.2, algebra]

3.1 Apply $A(S+\alpha I)^{-1}$ to step 1.2 and use [F2] with $e_0=S^\nu w$. Then $v_+\le W\alpha^{\nu+1/2}+\|z\|$; moving $\theta v_+$ to the left gives the residual inequality. Applying $(S+\alpha I)^{-1}$ without $A$ instead gives $\|e_+\|\le W\alpha^\nu+\|z\|/(2\sqrt\alpha)$, proving the error bound. This controls the fixed source term through its spectral filter, not through a crude $\alpha^{-1}\|e_0\|$ estimate. [A1, F2, step 1.2, step 2.1, algebra] ∎
