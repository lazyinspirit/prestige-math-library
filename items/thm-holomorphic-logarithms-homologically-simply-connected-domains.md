---
id: thm-holomorphic-logarithms-homologically-simply-connected-domains
kind: theorem
title: "A nonvanishing holomorphic function on a homologically simply connected domain has a holomorphic logarithm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitives-homologically-simply-connected-domains, def-homologically-simply-connected-complex-domain, thm-complex-exponential-surjects-onto-the-punctured-plane, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, thm-zero-complex-derivative-on-a-domain-implies-constant, thm-kernel-and-fibres-of-complex-exponential, thm-cauchy-integral-formula-higher-derivatives, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, cor-complex-differentiability-implies-continuity, def-complex-domain, def-complex-primitive, def-complex-conjugate-real-imaginary-part-and-modulus, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a homologically simply connected complex domain and let
$f:\Omega\to\mathbb C$ be holomorphic and nowhere zero. Then there is a
holomorphic $L:\Omega\to\mathbb C$ with

$$\exp(L(z))=f(z)\qquad(z\in\Omega),$$

and any two such functions differ by a constant lying in $2\pi i\mathbb Z$.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega$ and a holomorphic nowhere-zero $f:\Omega\to\mathbb C$.

[L1] Every holomorphic function on a homologically simply connected complex domain has a primitive there ([[thm-primitives-homologically-simply-connected-domains]]), that is a holomorphic $F$ with $F'$ equal to the function ([[def-complex-primitive]]).

[L2] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L3] The complex exponential is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L4] If $f$ is complex differentiable at $a$ and $g$ at $f(a)$, then $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]).

[L5] Linear combinations, products and nonvanishing quotients of functions complex differentiable at a point are complex differentiable there, with the usual formulas ([[thm-algebra-of-complex-derivatives]]).

[L6] If $U$ is a complex domain and $g:U\to\mathbb C$ is holomorphic with $g'\equiv0$, then $g$ is constant on $U$ ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[L7] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L8] Every holomorphic function has complex derivatives of all natural orders locally ([[thm-cauchy-integral-formula-higher-derivatives]]); a complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L9] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]), and a connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L10] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]), and a homologically simply connected domain is such a domain in which every cycle is null-homologous ([[def-homologically-simply-connected-complex-domain]]).

[L11] For $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]); the integers form an ordered commutative ring and are discrete in $\mathbb R$, so if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

[L12] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L13] $\exp(z+w)=\exp z\,\exp w$ for all complex $z,w$, hence $\exp(-w)\exp(w)=1$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 By [L8] the derivative $f'$ is holomorphic on $\Omega$, and $f$ is nowhere zero, so the logarithmic derivative $f'/f$ is holomorphic on $\Omega$ by [L5]. [given, L5, L8]

1.2 Fix $z_0\in\Omega$, which is nonempty by [L10]. Since $f(z_0)\ne0$, [L2] gives $w_0\in\mathbb C$ with $\exp(w_0)=f(z_0)$. [given, L2, L10]

2.1 By [L1] the function $f'/f$ of step 1.1 has a primitive $G$ on $\Omega$; put $F=G-G(z_0)+w_0$, so that $F$ is holomorphic with $F'=f'/f$ and $F(z_0)=w_0$. [step 1.1, step 1.2, L1, L5]

3.1 The function $u=f\exp(-F)$ is holomorphic on $\Omega$ by [L3], [L4] and [L5], and $u'=f'\exp(-F)-fF'\exp(-F)=\bigl(f'-f\cdot(f'/f)\bigr)\exp(-F)=0$ throughout $\Omega$; so $u$ is a constant by [L6] and [L10]. [step 2.1, L3, L4, L5, L6, L10]

4.1 Evaluating at $z_0$ gives that constant: $u(z_0)=f(z_0)\exp(-w_0)=\exp(w_0)\exp(-w_0)=1$ by step 1.2 and [L13], so $f=\exp(F)$ on $\Omega$ and $L=F$ has the required property. [step 1.2, step 2.1, step 3.1, L13]

5.1 If $L_1,L_2$ are holomorphic on $\Omega$ with $\exp\circ L_1=\exp\circ L_2=f$, then $L_1-L_2$ takes values in $2\pi i\mathbb Z$ by [L7]; it is continuous by [L8], so $\operatorname{Im}(L_1-L_2)/(2\pi)$ is a continuous integer-valued real function by [L11] and [L12], and [L9] with [L10] and [L11] forces it to be constant on the connected $\Omega$. Hence $L_1-L_2$ is a constant in $2\pi i\mathbb Z$. [step 4.1, L7, L8, L9, L10, L11, L12] ∎
