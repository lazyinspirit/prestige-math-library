---
id: lem-cft-aut-o-action-and-coordinate-covariance
kind: lemma
title: Virasoro modes give an Aut O action with field covariance
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-aut-o-formal-coordinate-group
  - def-cft-integrally-graded-conformal-module
  - def-conformal-vertex-algebra
  - def-virasoro-algebra
  - def-vertex-algebra-module
  - def-formal-distribution-on-a-vector-space
dependency_roles:
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  def-cft-integrally-graded-conformal-module: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§10.1–10.9
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal exponentiation of positive Virasoro modes and the coordinate-covariance identity; local finiteness is checked below.
    - title: Edward Frenkel, Vertex Algebras and Algebraic Curves, Séminaire Bourbaki 875 (2000), §§4.1–4.3
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: The Aut O Lie algebra convention and its action on conformal state spaces.
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and $M$ an integrally graded conformal $V$-module. For $\rho(t)=a t+O(t^2)\in\operatorname{Aut}\mathcal O$, let $a\ne0$ be its linear coefficient and set $\gamma(t):=a^{-1}\rho(t)=t+O(t^2)$. Factor $\gamma$ uniquely on each finite jet as $\exp(\sum_{n\ge1}c_n\ell_n)(t)$, where $\ell_n=-t^{n+1}\partial_t$ uses the right-composition convention of [[def-cft-aut-o-formal-coordinate-group]]. Define
$$R_M(\rho):=a^{L_M(0)}\exp\!\left(-\sum_{n\ge1}c_nL_M(n)\right),$$
and define $R_V$ by the same formula. More generally, for a commutative $\mathbb C$-algebra $A$ and $\sigma(u)=b_1u+b_2u^2+\cdots\in A\llbracket u\rrbracket$ with $b_1\in A^\times$, use the right-composition product $(\sigma_1\sigma_2)(u)=\sigma_2(\sigma_1(u))$, and write $R_{M,A}(\sigma)$ and $R_{V,A}(\sigma)$ for the same finite-jet formulas, extended $A$-linearly to $M_A:=M\otimes_{\mathbb C}A$ and $V_A:=V\otimes_{\mathbb C}A$. On $M_d\otimes A$, $b_1^{L_M(0)}$ means multiplication by $b_1^d$, and on $V_d\otimes A$ use $b_1^{L_V(0)}$ with the same convention; the coefficients of the positive-mode exponentials are in $A$. This extension is functorial in $A$ and obeys the same right-action law. The sums are interpreted coefficientwise on finite jets and are finite on each vector, as justified below.

For $\rho(t)=\sum_{r\ge1}a_rt^r$, set $\rho_z(u):=\rho(z+u)-\rho(z)$. For $j\ge1$, its coefficient of $u^j$ is $\sum_{r\ge j}a_r\binom rjz^{r-j}$, so $\rho_z\in\mathbb C\llbracket z\rrbracket\llbracket u\rrbracket$ has linear coefficient $\rho'(z)\in\mathbb C\llbracket z\rrbracket^\times$. The state-field covariance identity is
$$R_M(\rho)Y_M(v,z)R_M(\rho)^{-1}=Y_M\!\left(R_{V,\mathbb C\llbracket z\rrbracket}(\rho_z)v,\rho(z)\right).$$
The field on the right is substituted coefficientwise: $R_{V,\mathbb C\llbracket z\rrbracket}(\rho_z)v$ has coefficients in a finite-dimensional filtration stage of $V$, and $\rho(z)$ has order one, so lower truncation makes every coefficient on a fixed module vector a finite sum. The identity is coefficientwise in formal distributions. No analytic convergence is asserted.

## Facts & Assumptions

**Given:** The formal group and its right-composition Lie algebra, an ordinary conformal vertex algebra, and an integrally graded conformal module.

[F1] [[def-cft-aut-o-formal-coordinate-group]]: for any commutative $\mathbb C$-algebra $A$, $\operatorname{Aut}_A A\llbracket t\rrbracket$ consists of substitutions with unit linear coefficient and product $(\rho_1\rho_2)(t)=\rho_2(\rho_1(t))$; over $\mathbb C$, $\ell_n=-t^{n+1}\partial_t$ satisfies $[\ell_m,\ell_n]=(m-n)\ell_{m+n}$.

[F2] [[def-cft-integrally-graded-conformal-module]]: $L_M(0)$ is diagonalizable with integer eigenvalues bounded below and $L_M(n)M_d\subseteq M_{d-n}$ for $n>0$.

[F3] [[def-conformal-vertex-algebra]]: $V=\bigoplus_{d\ge0}V_d$, each $V_d$ is finite dimensional, and $L(-1)=T$.

[F4] [[def-virasoro-algebra|Virasoro algebra in the $L_{m}$ convention]]: $[L(m),L(n)]=(m-n)L(m+n)+\frac{m^3-m}{12}\delta_{m+n,0}C$.

[F5] [[def-vertex-algebra-module]]: the module Jacobi identity holds with the stated formal binomial expansions.

[F6] [[def-formal-distribution-on-a-vector-space]]: formal delta functions, residues, and substitutions are coefficientwise formal operations, not analytic limits.

## Proof

1.1 For a vector of weight $d$, every $L_M(n)$ with $n>d-d_0$ kills it by [F2]. Thus only finitely many $n$ and finitely many powers of $\sum c_nL_M(n)$ act nontrivially on that vector. On the jet modulo $t^{r+1}$, the coefficient of degree $k+1$ in $\exp(\sum c_n\ell_n)(t)$ is $-c_k$ plus an expression in $c_1,\ldots,c_{k-1}$; recursive solution gives unique $c_1,\ldots,c_r$. The Virasoro central term in [F4] vanishes for positive indices. The assignment $\ell_n\mapsto-L_M(n)$ is anti-Lie for the right action, since $[-L_M(m),-L_M(n)]=(m-n)L_M(m+n)=-(-L_M([\ell_m,\ell_n]))$. The finite Baker–Campbell–Hausdorff formula on each nilpotent jet quotient therefore gives compatible right actions; $[L_M(0),L_M(n)]=-nL_M(n)$ supplies the scaling compatibility. Integer weights in [F2] make $a^{L_M(0)}$ single-valued. More explicitly, for $A$ as in the Statement and a unit $b\in A^\times$, $b^{L_M(0)}$ acts on $M_d\otimes A$ by $b^d$, which is defined for every integer $d$. For a fixed $m\in M_d$, $\sum_{n\ge1}c_nL_M(n)m$ is finite because $L_M(n)m=0$ for $n>d-d_0$, and every sufficiently high power of this degree-lowering sum kills $m$; hence its exponential is a finite sum even when $c_n\in A$. The finite-jet factorization recursion and the Baker–Campbell–Hausdorff identities use only ring operations, rational scalars, and inversion of the unit leading coefficient, so they hold over $A$ and give the asserted functorial right action. On $V$, [F4] gives $[L_V(0),L_V(n)]=-nL_V(n)$, so $L_V(n)V_d\subseteq V_{d-n}$; the same argument applies using the nonnegative integral grading and finite-dimensional stages in [F3]. [F1, F2, F3, F4, algebra]

1.2 Taking the conformal-vector residues in [F5] gives, for every integer $q\ge0$,
$$[L_M(q),Y_M(v,z)]=\sum_{j=0}^{q+1}\binom{q+1}{j}z^{q+1-j}Y_M(L(j-1)v,z).$$
The $j=0$ term is $z^{q+1}Y_M(Tv,z)=z^{q+1}\partial_zY_M(v,z)$, by $L(-1)=T$ in [F3] and the translation identity obtained from the module Jacobi identity. Hence
$$[-L_M(q),Y_M(v,z)]=-z^{q+1}\partial_zY_M(v,z)-\sum_{j=1}^{q+1}\binom{q+1}{j}z^{q+1-j}Y_M(L(j-1)v,z).$$
This is the infinitesimal covariance formula for the coordinate vector field $\ell_q=-z^{q+1}\partial_z$: its base-point velocity is $-z^{q+1}$ and its relative-coordinate velocity is $-(z+u)^{q+1}+z^{q+1}=-\sum_{j=1}^{q+1}\binom{q+1}{j}z^{q+1-j}u^j$. Under $R_V$, the latter acts on $v$ by the state term in the displayed commutator. [F3, F5, F6, algebra]

2.1 On every finite jet, the covariance identity derived in step 1.2 and composed below uses only polynomial operations and inversion of the leading coefficient. The same finite-jet computation therefore holds over any commutative $\mathbb C$-algebra $A$. For $\rho_z$, take $A=\mathbb C\llbracket z\rrbracket$; its leading coefficient $\rho'(z)$ is a unit, so step 1.1 applies. For a homogeneous $v\in V_d$, positive modes lower weight and the diagonal factor preserves weight; consequently $R_{V,A}(\rho_z)v$ has coefficients in $V_{\le d}$. Since $V_{\le d}$ is finite dimensional, lower truncation of $Y_M(e,w)m$ is uniform over a basis $e$ of this stage for each fixed $m\in M$. Writing $\rho(z)=zq(z)$ with $q(0)=a_1\ne0$, each integer power $\rho(z)^n$ has order $n$; the uniform lower bound on the field powers and the nonnegative $z$-orders of the state coefficients therefore make every coefficient of the substituted field a finite sum. Thus the covariance identity is well-defined coefficientwise. For the formal flow of each $\ell_q$, differentiate both sides of the claimed covariance identity with respect to the flow parameter. The derivative of the conjugated left side is the commutator in step 1.2; the chain rule on the right gives the base-point and relative-coordinate velocities computed there. At parameter zero the two sides coincide, so their coefficientwise formal differential equation has equal initial values and equal recursively determined coefficients. This proves covariance for each elementary flow. For $\rho(t)=a t$, the $q=0$ commutator in step 1.2 integrates to $a^{L_M(0)}Y_M(v,z)a^{-L_M(0)}=Y_M(a^{L_V(0)}v,az)$; integer weights remove any logarithm choice. Every finite jet of a general $\rho$ is a product of such a scaling and the elementary positive-mode flows by the recursion in step 1.1. Composing their covariance identities using the right-action law in step 1.1 proves the formula on every finite jet and therefore coefficientwise on the formal series. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎
