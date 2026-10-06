---
id: ex-conserved-energy-of-a-travelling-wave-packet
kind: example
title: "Conserved energy of a travelling wave packet"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-wave-energy-and-energy-flux, def-wave-equation-cauchy-data-and-wave-speed, thm-chain-rule-for-total-derivatives, lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-support-and-compactly-supported-riemann-integral-in-rn, def-countable-choice, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.1.B, printed pp. 36-38: running wave solutions $u=f(x-ct)$ and their energy"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§4.4, printed pp. 88-90, (4.23)-(4.27): the wave equation on the line, travelling profiles and their conserved quantities"
verification:
  precheck: pass
---

## Example

Assume Countable Choice for the Lebesgue measure and multidimensional volume assertions below ([[def-countable-choice]]). Let $c>0$ and let $F\in C_c^2(\mathbb R)$ be compactly supported, and put

$$u(x,t):=F(x-ct)\qquad(x,t\in\mathbb R),$$

a right-moving travelling packet. Then $u$ is a classical solution of
$\Box_cu=0$ ([[def-wave-equation-cauchy-data-and-wave-speed]]) and for every
$t\in\mathbb R$ its total energy ([[def-wave-energy-and-energy-flux]]) is
finite, independent of $t$, and splits equally between its kinetic and
potential parts:

$$E(t)=\int_{\mathbb R}\tfrac12\bigl(u_t^2+c^2u_x^2\bigr)\,dx=c^2\int_{\mathbb R}F'(s)^2\,ds,\qquad E_{\mathrm{kin}}(t)=E_{\mathrm{pot}}(t)=\tfrac12c^2\int_{\mathbb R}F'(s)^2\,ds.$$

The equal split is the signature of a nondispersive packet: pointwise
$u_t=-cF'(x-ct)$ and $|Du|=|F'(x-ct)|$, so both densities equal
$\tfrac12c^2F'(x-ct)^2$ and the energy density is $c^2F'(x-ct)^2$.

The finite-energy statement is genuinely one-dimensional. In dimension $n\ge2$
the profile $u(x,t)=F(\omega\cdot x-ct)$ with a unit vector $\omega$ is still a
classical solution and still satisfies $u_t=-cF'$ and $Du=F'\omega$ pointwise,
so the two densities still split equally; but the density $c^2F'(\omega\cdot x-ct)^2$
then depends on $x$ only through the single variable $\omega\cdot x-ct$, and
whenever $F'\not\equiv0$ it is bounded below by a positive constant on a slab
of infinite $n$-dimensional measure, so the total energy over $\mathbb R^n$ is
$+\infty$. The conserved finite total energy computed here is therefore the
energy of a one-dimensional packet.

## Facts & Assumptions

**Given:** Countable Choice; $c>0$ and $F\in C_c^2(\mathbb R)$, and $u(x,t)=F(x-ct)$ on $\mathbb R\times\mathbb R$; write $F_2(s):=F'(s)^2$ for the continuous compactly supported density profile.

[F1] Chain rule: $D(G\circ H)(a)=DG(H(a))\circ DH(a)$ for composable totally differentiable maps. ([[thm-chain-rule-for-total-derivatives]])

[F2] Change of variables: for a $C^1$ diffeomorphism $T:U\to V$ of open sets and a continuous compactly supported $f:V\to\mathbb R$, $\int_Vf\,d\lambda_n=\int_U(f\circ T)\,|\det DT|\,d\lambda_n$. ([[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]])

[F3] The energy density and flux of a $C^2$ function are $e=\tfrac12(u_t^2+c^2|Du|^2)$ and $q=-c^2u_tDu$; the wave operator is $\Box_c=\partial_t^2-c^2\Delta$. ([[def-wave-energy-and-energy-flux]], [[def-wave-equation-cauchy-data-and-wave-speed]])

[F4] The nonnegative Lebesgue integral is monotone and positively homogeneous; a continuous compactly supported function is bounded and supported in a set of finite measure. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-support-and-compactly-supported-riemann-integral-in-rn]])

[F5] An orthogonal linear map preserves Lebesgue measure, because its determinant has absolute value one; translations also preserve it. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

## Verification

1.1 Derivatives and the pointwise split: by [F1], $u_t=-cF'(x-ct)$, $u_{tt}=c^2F''(x-ct)$, $u_x=F'(x-ct)$ and $u_{xx}=F''(x-ct)$, so $\Box_cu=c^2F''(x-ct)-c^2F''(x-ct)=0$ and $u$ is a classical solution with continuous second derivatives [F3]; moreover $u_t^2=c^2F'(x-ct)^2$ and $|Du|^2=F'(x-ct)^2$, so $e_{\mathrm{kin}}=e_{\mathrm{pot}}=\tfrac12c^2F_2(x-ct)$ and $e=c^2F_2(x-ct)$. [given, F1, F3, algebra]

2.1 The total energy: for each $t$, $E(t)=\int_{\mathbb R}c^2F_2(x-ct)\,dx=c^2\int_{\mathbb R}F_2(y)\,dy$ by [F2] applied to the diffeomorphism $T(x)=x+ct$ of $\mathbb R$, whose derivative is $1$; the value is finite because $F_2=F'^2$ is continuous with compact support, so it is bounded by a constant and vanishes outside a bounded interval, and [F4] bounds its integral by the constant times the finite length of that interval; similarly $E_{\mathrm{kin}}(t)=E_{\mathrm{pot}}(t)=\tfrac12c^2\int_{\mathbb R}F_2(y)\,dy$ by [F4]. Hence $E(t)$ is finite, independent of $t$, and equals $c^2\int_{\mathbb R}F'(s)^2\,ds$, with the equal split $E_{\mathrm{kin}}=E_{\mathrm{pot}}=\tfrac12c^2\int_{\mathbb R}F'(s)^2\,ds$. [given, step 1.1, F2, F4, algebra]

3.1 The multidimensional caution: for $n\ge2$, given a unit vector $\omega$ and $u(x,t)=F(\omega\cdot x-ct)$, the same chain rule gives $u_t=-cF'(\omega\cdot x-ct)$, $Du=F'(\omega\cdot x-ct)\omega$ and $u_{tt}=c^2F''$, $\Delta u=F''|\omega|^2=F''$, so $u$ is again a classical solution and the densities again satisfy $e_{\mathrm{kin}}=e_{\mathrm{pot}}=\tfrac12c^2F'(\omega\cdot x-ct)^2$; but if $F'\not\equiv0$ then $F'^2\ge m>0$ on some nondegenerate interval $I=(a,b)$ by continuity. Choose an orthogonal $O$ with $Oe_0=\omega$: take $O=I$ if $\omega=e_0$, and otherwise set $v=(e_0-\omega)/|e_0-\omega|$ and $O=I-2vv^{\mathsf T}$; direct multiplication gives $O^{\mathsf T}O=I$ and $Oe_0=\omega$. For each $R>0$, the rotated box $ct\omega+O(I\times(-R,R)^{n-1})$ lies in the slab $\{x:\omega\cdot x-ct\in I\}$. By [F5] its measure is $(b-a)(2R)^{n-1}$. The density is at least $c^2m$ throughout it, so [F4] gives $E_{\mathbb R^n}(t)\ge c^2m(b-a)(2R)^{n-1}$ for every $R$; letting $R\to\infty$ proves $E_{\mathbb R^n}(t)=+\infty$. Thus the finite total energy of the Example cannot be extended beyond $n=1$. [given, step 1.1, F4, F5, algebra] ∎

