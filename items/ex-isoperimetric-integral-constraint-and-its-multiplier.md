---
id: "ex-isoperimetric-integral-constraint-and-its-multiplier"
kind: "example"
title: "An integral constraint and its constant multiplier"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "def-axiom-of-choice"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "thm-hk-is-a-hilbert-space"
  - "thm-holder-inequality-for-integrals"
  - "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions"
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-hk-and-hk-zero-notation"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-derivative-of-a-power"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-one-dimensional-trace-truncation-compatibility"
  - "thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint"
  - "thm-integration-by-parts-for-absolutely-continuous-functions"
  - "thm-algebra-of-derivatives"
  - "thm-ftc-second-part"
  - "thm-linearity-of-the-lebesgue-integral-on-l-one"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-68 (finite-dimensional quadratic minimisation and Lagrange multipliers). The integral-constrained parabola and its multiplier are computed independently in this item."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 303-305 (Example 13.9: constrained Dirichlet energy; the integral constraint mechanism)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the trace and Hilbert multiplier suppliers. On $(0,1)$ minimise $J(u)=\int_0^1u'^2\,dx$ over $u\in H^1_0(0,1)$ subject to the integral constraint $\int_0^1u\,dx=A$, where $A\ne0$. The minimiser is $u_0(x)=6A\,x(1-x)$ and the Lagrange multiplier of [[thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint]], in the convention $DJ(u)=\lambda DG(u)$ with $G(u)=\int_0^1u-A$, is the constant $\lambda=24A$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a real number $A\ne0$, the space $H^1_0(0,1)$ with its weak derivative $D$ and norm ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]), the functional $J(u)=\int_0^1u'^2\,dx$ and the constraint $G(u)=\int_0^1u\,dx-A$.

[A1] [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]: the assumed Axiom of Choice supplies Dependent and Countable Choice for the integration and trace suppliers.

[F1] [[thm-hk-is-a-hilbert-space]], [[lem-closed-subspace-of-a-banach-space-is-banach]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-one-dimensional-trace-truncation-compatibility]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: for $I=(0,1)$ and $p=2$, the endpoint trace $T$ is well defined and $\ker T=W_0^{1,2}(I)=H^1_0(I)$; the closure defining $H^1_0(I)$ is a closed linear subspace of the real Hilbert space $H^1(I)$, hence complete for the restricted derivative-sum inner product and itself a real Hilbert space; a class in $H^1_0(I)$ has an absolutely continuous representative $v^*$ on $[0,1]$ with $v^*=0$ at both endpoints and with $(v^*)'=Dv$ almost everywhere.

[F2] [[lem-classical-derivatives-are-weak-derivatives]]: a $C^1$ function on $I$ has its classical derivative as weak derivative; in particular $u_0$ and the affine function $1-2x$ are weakly differentiable with $u_0'(x)=6A(1-2x)$ and $(1-2x)'=-2$.

[F3] [[thm-ftc-second-part]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the fundamental theorem of calculus applied to the antiderivatives $x^2/2$ and $x^3/3$, whose derivatives are $x$ and $x^2$, gives $\int_0^1x\,dx=1/2$ and $\int_0^1x^2\,dx=1/3$, and the integral is linear, so $\int_0^1u_0\,dx=6A(1/2-1/3)=A$.

[F4] [[thm-integration-by-parts-for-absolutely-continuous-functions]]: for absolutely continuous $F,H$ on $[0,1]$, $\int_0^1FH'+\int_0^1F'H=F(1)H(1)-F(0)H(0)$.

[F5] [[def-frechet-derivative-between-banach-spaces]], [[thm-holder-inequality-for-integrals]]: for $u,h\in H^1_0(0,1)$ one has $J(u+h)-J(u)=2\int_0^1u'h'+\int_0^1(h')^2$, and $\bigl|\int_0^1(h')^2\bigr|=\|h'\|_2^2\le\|h\|_{H^1_0}^2$; hence $DJ(u)h=2\int_0^1u'h'$ with $\|DJ(u)\|\le2\|u'\|_2$. Similarly $G$ is continuous affine, with bounded linear derivative $DG(u)h=\int_0^1h$ for every $u$, and $|DG(u)h|\le\|h\|_2\le\|h\|_{H^1_0}$, so $G$ is $C^1$ with this derivative at every point.

[F6] [[thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint]]: if $u$ is a local minimiser of $J$ on the level set $\{G=G(u)\}$ and $DG(u)\ne0$, then there is a unique $\lambda\in\mathbb R$ with $DJ(u)=\lambda DG(u)$.

[F7] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: an absolutely continuous function whose derivative vanishes almost everywhere is constant.

## Verification

**Proof technique:** direct.

**Given:** The Axiom of Choice, the number $A\ne0$, the function $u_0(x)=6Ax(1-x)$ on $(0,1)$, and the functionals $J$ and $G$ above.

1.1 The polynomial $u_0$ is smooth on $[0,1]$ with $u_0(0)=u_0(1)=0$; its class on $(0,1)$ is absolutely continuous with weak derivative $u_0'=6A(1-2x)$ by [F2], and its endpoint trace vanishes, so $u_0\in\ker T=H^1_0(0,1)$ by [F1]. Moreover $\int_0^1u_0\,dx=6A\int_0^1(x-x^2)\,dx=6A(1/2-1/3)=A$ by [F3], so $u_0$ is admissible. [given, F1, F2, F3]

2.1 For every $h\in H^1_0(0,1)$ the derivative formulae are $DJ(u_0)h=2\int_0^1u_0'h'$ and $DG(u)h=\int_0^1h$ by [F5]; in particular $DG(u_0)$ is a nonzero bounded functional, because $DG(u_0)u_0=A\ne0$ by step 1.1, so the constraint is regular. [given, step 1.1, F5]

3.1 We compute $2\int_0^1u_0'h'=24A\int_0^1h$ for every $h\in H^1_0(0,1)$: by [F1] the absolutely continuous representative $h^*$ vanishes at both endpoints and $(h^*)'=Dh$, so [F4] applied to $F=1-2x$ and $H=h^*$ gives $\int_0^1(1-2x)Dh=-\int_0^1(-2)h=2\int_0^1h$; multiplying by $6A$ gives $\int_0^1u_0'h'=12A\int_0^1h$, hence the displayed identity. Thus $DJ(u_0)=24A\,DG(u_0)$. [step 1.1, step 2.1, F1, F2, F4, algebra]

4.1 Let $v\in H^1_0(0,1)$ satisfy the constraint $\int_0^1v\,dx=A$; then $h:=v-u_0\in H^1_0(0,1)$ by step 1.1, and [F5] gives $J(v)=J(u_0)+2\int_0^1u_0'h'+\int_0^1(h')^2=J(u_0)+24A\int_0^1h+\|h'\|_2^2=J(u_0)+\|h'\|_2^2$ by step 3.1, because $\int_0^1h=0$; hence $J(v)\ge J(u_0)$, with equality exactly when $\|h'\|_2=0$. [step 3.1, F5, algebra]

5.1 If $\|h'\|_2=0$, then $h$ has weak derivative $0$, so its absolutely continuous representative is constant by [F7] and [F1]; that constant is $h^*(0)=0$ because $h\in H^1_0(0,1)$ has vanishing trace, so $h=0$ and $v=u_0$. Therefore $u_0$ is the unique admissible minimiser, in particular a local minimiser, and the multiplier rule [F6] applies with the regular constraint $G$; comparing its conclusion $DJ(u_0)=\lambda DG(u_0)$ with the identity of step 3.1 and the fact that $DG(u_0)\ne0$ gives the unique multiplier $\lambda=24A$. This proves the example. [step 1.1, step 2.1, step 3.1, step 4.1, A1, F1, F6, F7] ∎ 