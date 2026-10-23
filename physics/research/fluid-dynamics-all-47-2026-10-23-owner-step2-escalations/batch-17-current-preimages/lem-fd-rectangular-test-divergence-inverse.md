---
id: lem-fd-rectangular-test-divergence-inverse
kind: lemma
title: "Rectangular continuous divergence inverse on mean-zero tests"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 6 §6.1, PDF pp. 55–56: Stokes pressure and inf–sup context; the explicit rectangle right inverse is proved here."
---

## Statement

Let $d\ge1$ and let $\Omega=\prod_{i=1}^d(a_i,b_i)$ be a nonempty finite open rectangle. Write $D(\Omega)=C_c^\infty(\Omega;\mathbb R)$ and $D_0(\Omega)=\{h\in D(\Omega):\int_\Omega h=0\}$. For every compact $K\subset\Omega$ there is a compact $K'\subset\Omega$ such that a linear map $R:D_0(\Omega)\to D(\Omega;\mathbb R^d)$ sends tests supported in $K$ to fields supported in $K'$, satisfies $\operatorname{div}(Rh)=h$, and is continuous on each fixed-support test space for the seminorms $\sup|\partial^\alpha h|$.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[A1] For each nonempty interval, an affine rescaling of $b(s)=\exp(-1/(1-s^2))$ for $|s|<1$, extended by zero, is a positive smooth compactly supported bump; its integral is positive and finite, so it can be normalized to one.

[A2] All integrations below are over finite intervals. Fubini applies to smooth compactly supported functions, and differentiation under these finite integrals is valid.

## Proof

**Given:** A nonempty finite rectangle $\Omega$, the test-space seminorms in the Statement, and a zero-integral test $h$.

1.1 For each interval, choose an affine copy of the bump in [A1]. Every derivative on $|s|<1$ is the exponential times a finite sum of rational terms with poles of finite order at $|s|=1$; $e^{-1/(1-s^2)}$ tends to zero faster than every such power, so extension by zero is smooth. Its integral is finite and positive, so normalization gives $\theta_i$. For $d=1$, put $(Rh)(x)=\int_{a_1}^x h(s)\,ds$. Its derivative is $h$, and it vanishes near both endpoints because $h$ is compactly supported and has total integral zero. Its support is compact inside the interval, and its $j$th derivative is $h^{(j-1)}$ for $j\ge1$; the zeroth seminorm is bounded by $(b_1-a_1)\sup|h|$. [given, A1, A2, algebra]

2.1 For $d>1$, let $x'=(x_2,\ldots,x_d)$ and $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$. Then $\int H=0$ by [A2]. Assuming the construction in dimension $d-1$, define
$$(Rh)_1=\int_{a_1}^{x_1}\bigl(h(s,x')-\theta_1(s)H(x')\bigr)\,ds,\qquad (Rh)_j=\theta_1(x_1)(R'H)_{j-1}(x')\quad(j\ge2).$$
Differentiating gives $\operatorname{div}(Rh)=h-\theta_1H+\theta_1H=h$. The first component vanishes both before the support and after its total first-coordinate integral, which is zero; the other components are compactly supported by induction. [given, A1, A2, step 1.1, induction]

3.1 If inputs are supported in fixed compact $K$, each coordinate projection $K_i$ is compactly contained in $(a_i,b_i)$. Choose closed intervals $J_i\Subset(a_i,b_i)$ containing $K_i$ and the support of $\theta_i$; for the first component also include the interval hull of these supports. The recursive formulas then place every output component inside the fixed compact product $K'=\prod_iJ_i$. Every output derivative is a finite sum of fixed-bump derivatives times finite-coordinate integrals of derivatives of $h$ or its marginals. Such integrals have sup norm at most the interval length times the integrand sup norm, and differentiation in other coordinates commutes with integration. Induction therefore bounds each output seminorm by a constant times finitely many input seminorms. This proves fixed-support continuity. [given, A1, A2, step 2.1, induction] ∎

