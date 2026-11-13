---
id: prop-se-nonlinear-mild
kind: proposition
domain: mathematics
title: Mild formulation of the controlled power NLS
status: published
proof_strategy: direct
deps:
  - def-se-internal-systems
  - prop-se-scale-flow
  - math:def-axiom-of-choice
  - math:def-infinitesimal-generator-of-a-c-zero-semigroup
  - math:def-classical-strong-and-mild-abstract-cauchy-solutions
  - math:def-bochner-integrable-function
  - math:lem-linearity-of-the-bochner-integral
  - math:thm-variation-of-constants-formula
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-bochner-integrability-criterion
dependency_roles:
  def-se-internal-systems: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-infinitesimal-generator-of-a-c-zero-semigroup: mathematical-premise
  math:def-classical-strong-and-mild-abstract-cauchy-solutions: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  math:lem-linearity-of-the-bochner-integral: mathematical-premise
  math:thm-variation-of-constants-formula: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
---

## Statement

Assume the Axiom of Choice and take the exterior domain, $T>0$, $m\in\{3,5\}$, $g(v)=\lambda|v|^{m-1}v$, and $Kh=\varphi h$ from [[def-se-internal-systems]]. Let $\sigma\in\mathbb R$, $X=H_D^\sigma(\Omega)$, and $W(t)=e^{it\Delta_D}$ as in [[prop-se-scale-flow]]. Let $B$ be the infinitesimal generator on $X$ of the restriction of $W$ to nonnegative times. Let $v_0\in X$, $v\in C([0,T];X)$, and suppose $g(v)$ and $Kh$ are well-defined Bochner-integrable $X$-valued functions on $(0,T)$.

Put $f=i g(v)-iKh$. Then $v$ is an integral solution of $v'=Bv+f$, $v(0)=v_0$, if and only if, for every $t\in[0,T]$,

$$v(t)=W(t)v_0+i\int_0^t W(t-r)g(v)(r)\,dr-i\int_0^t W(t-r)(Kh)(r)\,dr.$$

Here an integral solution means that $\int_0^t v(r)\,dr\in D(B)$ and $v(t)=v_0+B\int_0^t v(r)\,dr+\int_0^t f(r)\,dr$ for every $t$. In particular, every classical solution of this abstract equation satisfies the displayed formula. On $H_D^{\sigma+2}$ the generator acts as $B=i\Delta_D$, so a sufficiently regular solution of the controlled equation in [[def-se-internal-systems]] is covered whenever it is a classical solution in the stated abstract sense. The formula is a fixed-point equation in $v$ for a prescribed control $h$; no existence or uniqueness for the nonlinear problem is asserted.

## Facts & Assumptions

[F1] The system definition supplies $g$, $K$ and the sign convention $i\partial_t v+\Delta_Dv+g(v)=Kh$ in the appropriate solution class [[def-se-internal-systems]].

[F2] $W$ is a strongly continuous unitary group on $X$. Moreover, if $x\in H_D^{\sigma+2}$, its orbit is differentiable in $X$ with derivative $i\Delta_DW(t)x$ [[prop-se-scale-flow]].

[F3] The generator is defined by the right difference quotient at zero [[math:def-infinitesimal-generator-of-a-c-zero-semigroup]]. The abstract solution definitions distinguish the classical, mild and integral formulations; the integral formulation is the one displayed in the statement [[math:def-classical-strong-and-mild-abstract-cauchy-solutions]].

[F4] For a strongly continuous semigroup on a Banach space and integrable forcing, the variation-of-constants formula is continuous, every classical solution has that formula, and the formula is the unique integral solution [[math:thm-variation-of-constants-formula]]. Its Dependent Choice hypothesis, and the Countable Choice used by the abstract solution definitions, follow from the assumed Axiom of Choice [[math:def-axiom-of-choice]] by [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]].

[F5] Bochner integrability is the Banach-valued integration condition in [[math:def-bochner-integrable-function]], and its integral is linear [[math:lem-linearity-of-the-bochner-integral]]. The Bochner integrability criterion gives $\int_0^T\|q(r)\|_X\,dr<\infty$ for every Bochner-integrable $q:(0,T)\to X$ [[math:thm-bochner-integrability-criterion]].

## Proof

[F1] The system definition supplies $g$, $K$ and the sign convention $i\partial_t v+\Delta_Dv+g(v)=Kh$ in the appropriate solution class [[def-se-internal-systems]].

[F2] $W$ is a strongly continuous unitary group on $X$. Moreover, if $x\in H_D^{\sigma+2}$, its orbit is differentiable in $X$ with derivative $i\Delta_DW(t)x$ [[prop-se-scale-flow]].

[F3] The generator is defined by the right difference quotient at zero [[math:def-infinitesimal-generator-of-a-c-zero-semigroup]]. The abstract solution definitions distinguish the classical, mild and integral formulations; the integral formulation is the one displayed in the statement [[math:def-classical-strong-and-mild-abstract-cauchy-solutions]].

[F4] For a strongly continuous semigroup on a Banach space and integrable forcing, the variation-of-constants formula is continuous, every classical solution has that formula, and the formula is the unique integral solution [[math:thm-variation-of-constants-formula]]. Its Dependent Choice hypothesis, and the Countable Choice used by the abstract solution definitions, follow from the assumed Axiom of Choice [[math:def-axiom-of-choice]] by [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]].

[F5] Bochner integrability is the Banach-valued integration condition in [[math:def-bochner-integrable-function]], and its integral is linear [[math:lem-linearity-of-the-bochner-integral]]. The Bochner integrability criterion gives $\int_0^T\|q(r)\|_X\,dr<\infty$ for every Bochner-integrable $q:(0,T)\to X$ [[math:thm-bochner-integrability-criterion]].



**Given:** The data and integrability hypotheses in the statement.

**Goal:** Establish the displayed fixed-point formulation and the stated relation to classical solutions.

1.1 By [F2], the restriction of $W$ to nonnegative times is a strongly continuous semigroup on the Banach space $X$. The two assumed Bochner-integrable functions have the Bochner-integrable linear combination $f=i g(v)-iKh$ by [F5]. The criterion in [F5] then gives $\int_0^T\|f(r)\|_X\,dr<\infty$. The assumed Axiom of Choice supplies Dependent Choice by [F4]. Therefore the variation-of-constants theorem in [F4] applies with initial vector $v_0$ and this particular forcing. It says that an integral solution is exactly the continuous variation-of-constants function $W(t)v_0+\int_0^tW(t-r)f(r)\,dr$. [F2, F4, F5]

1.2 If $x\in H_D^{\sigma+2}$, [F2] gives the derivative at zero of $W(t)x$ in $X$ as $i\Delta_Dx$. The definition in [F3] therefore gives $x\in D(B)$ and $Bx=i\Delta_Dx$. Multiplication of the controlled equation in [F1] by $-i$ gives $v'=i\Delta_Dv+i g(v)-iKh$, whenever those terms are meaningful in $X$. [F1, F2, F3]

2.1 Linearity of the Bochner integral splits the last integral into $i\int_0^tW(t-r)g(v)(r)\,dr-i\int_0^tW(t-r)(Kh)(r)\,dr$. Thus the integral-solution condition is equivalent to the displayed equation. Since $f$ was formed from the given $v$, this equivalence applies to each candidate $v$ satisfying the stated integrability assumptions; it does not use a nonlinear existence theorem. [F5, step 1.1]

3.1 Every classical solution of $v'=Bv+f$ with the stated initial value has the variation-of-constants formula by [F4], hence the displayed fixed-point equation by step 2.1. Step 1.2 identifies the abstract equation with the controlled equation for a sufficiently regular trajectory taking values in $H_D^{\sigma+2}$ and satisfying the classical-solution conditions. This proves the assertions without claiming that every distributional solution has these regularity properties. [F4, step 2.1, step 1.2] ∎

## Source notes

The original article supplies the controlled equation and its displayed mild formulation in (3.16)–(3.18). That citation is attribution; the deduction above uses the stated scale-flow and abstract semigroup suppliers.
