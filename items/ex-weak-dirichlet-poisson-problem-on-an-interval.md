---
id: "ex-weak-dirichlet-poisson-problem-on-an-interval"
kind: "example"
title: "The weak Dirichlet Poisson problem on an interval"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "thm-first-fundamental-theorem-of-calculus-for-l-one"
  - "cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous"
  - "lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous"
  - "thm-integration-by-parts-for-absolutely-continuous-functions"
  - "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions"
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "def-axiom-of-choice"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-integral-over-a-measurable-set"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-mollifier-family-generated-by-a-unit-mass-smooth-bump"
  - "def-the-standard-smooth-step-function"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-compact-support-zero-extension-in-wkp"
  - "prop-mollifier-families-are-l-one-approximate-identities"
  - "thm-absolute-continuity-of-the-integral"
  - "thm-acl-characterisation-of-w-one-p"
  - "thm-algebra-of-derivatives"
  - "thm-chain-rule"
  - "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign"
  - "thm-dominated-convergence"
  - "thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form"
  - "thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem"
  - "thm-ftc-second-part"
  - "thm-holder-inequality-for-integrals"
  - "thm-extreme-value-r"
  - "thm-integration-by-parts"
  - "thm-l-one-approximate-identities-converge-in-l-p"
  - "thm-linearity-of-the-integral"
  - "thm-tonelli-and-fubini-for-completed-product-measures"
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
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 5.2, Exercise 5.3, printed p. 114: weak one-dimensional Poisson solutions have a second weak derivative and are C1. The Green kernel formula is proved directly here, not asserted by that exercise."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.5, the one-dimensional model of the weak Dirichlet problem, printed pp. 99–101"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.4, Proposition 8.15 and Remark 22, printed pp. 221–222: one-dimensional weak Dirichlet problems (with a positive reaction term) and the Riesz identification; the pure Poisson Green kernel is computed here."
---

## Example

Assume the Axiom of Choice inherited through the cited suppliers, together with Countable Choice. Let $I=(0,1)$ and $f\in L^2(I)$. Define $$u(x):=\int_0^1G(x,y)f(y)\,dy,\qquad G(x,y):=\min(x,y)-xy .$$ Then $G$ is continuous on $[0,1]^2$ with $G(0,\cdot)=G(1,\cdot)=0$, $u\in H^1_0(I)$ is the unique weak solution of $-u''=f$ with zero boundary values in the sense of [[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]], and $$\int_0^1u'(x)\overline{\varphi'(x)}\,dx=\int_0^1f(x)\overline{\varphi(x)}\,dx\qquad\text{for every }\varphi\in C_c^\infty(I) .$$ The solution is recovered by two integrations: $u'$ is absolutely continuous, $u''=-f$ a.e. and $u(0)=u(1)=0$; for $f=\mathbf 1$ this gives the explicit $u(x)=\frac12x(1-x)$. More generally, if $F\in H^{-1}(I)$ is represented as $F(v)=(f_0,v)_{L^2}+(f_1,v')_{L^2}$ with $f_0,f_1\in L^2(I)$ ([[thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form]]), then the weak solution is $u(x)=\int_0^1G(x,y)f_0(y)\,dy+\int_0^1\partial_yG(x,y)f_1(y)\,dy$, where $\partial_yG$ is taken in the distributional sense, matching the one-dimensional integration-by-parts formula. This illustrates item 13 of the design on a one-dimensional model; no general Green-function theory is claimed.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the interval $I=(0,1)$; a class $f\in L^2(I)$; the Green kernel $G(x,y)=\min(x,y)-xy$ on $[0,1]^2$; and $u(x):=\int_0^1G(x,y)f(y)\,dy$.

[F1] Kernel facts: $G$ is continuous on $[0,1]^2$ with $G(0,\cdot)=G(1,\cdot)=0$; for $y\ne x$ one has $\partial_xG(x,y)=\mathbf 1_{y>x}-y\in[-1,1]$ and $\partial_yG(x,y)=\mathbf 1_{x>y}-x\in[-1,1]$, so both partial derivatives are bounded by $1$ in modulus (direct computation from $G=\min(x,y)-xy$; [[thm-ftc-second-part]] supplies the underlying linearity and [[def-integral-over-a-measurable-set]] the Lebesgue integrals).

[F2] Dominated convergence gives convergence of integrals under an integrable bound ([[thm-dominated-convergence]]). An indefinite integral of an $L^1$ function is absolutely continuous with derivative equal to the integrand a.e. by [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] and [[thm-first-fundamental-theorem-of-calculus-for-l-one]], while the recovery formula for an absolutely continuous function is [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]. Integration by parts for absolutely continuous factors is [[thm-integration-by-parts-for-absolutely-continuous-functions]], applied componentwise over $\mathbb C$. Products of absolutely continuous functions remain absolutely continuous ([[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]]); [[thm-absolute-continuity-of-the-integral]] controls integrals on the shrinking boundary strips, and [[thm-holder-inequality-for-integrals]] bounds the products.

[F3] Membership criterion proved below: an absolutely continuous $w$ on $[0,1]$ with $w(0)=w(1)=0$ and $w'\in L^2(0,1)$ lies in $H^1_0(I)$. The boundary cutoff uses the standard smooth step $\sigma$, which takes values in $[0,1]$ and has bounded derivative; its product and chain rules give a compactly supported $W^{1,2}$ approximation. The approximation is then zero-extended and mollified, using the ACL characterisation, the compact-support zero-extension theorem, convergence of mollifiers, and the density definition of $H^1_0$ ([[def-the-standard-smooth-step-function]], [[thm-extreme-value-r]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-acl-characterisation-of-w-one-p]], [[lem-compact-support-zero-extension-in-wkp]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[def-wkp-zero-as-a-sobolev-closure]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F4] Lax--Milgram existence and uniqueness on $I$: for every $F\in H^{-1}(I)$ there is a unique $u\in H^1_0(I)$ with $\int_0^1u'\,\overline{v'}=F(v)$ for all $v\in H^1_0(I)$ ([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]], [[def-h-minus-one-as-the-dual-of-h-one-zero]]); if $F(v)=(f,v)_{L^2}$ with $f\in L^2$, this datum lies in $H^{-1}$ ([[thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).



## Proof

1.1 Differentiation under the integral: fixing $x$ and letting $h\to0$, the kernel identity $\bigl(G(x+h,y)-G(x,y)\bigr)/h\to\partial_xG(x,y)$ holds for every $y\ne x$, hence for almost every $y$, and the quotients are bounded by $1$ because $G$ is $1$-Lipschitz in its first variable on $[0,1]$; since $|f|\in L^1$, dominated convergence gives $$u'(x)=\int_0^1\partial_xG(x,y)f(y)\,dy=\int_x^1f(y)\,dy-\int_0^1yf(y)\,dy .$$ [F1, F2]

1.2 Boundary cutoff: prove the criterion of [F3]. Let $w$ be absolutely continuous on $[0,1]$ with $w(0)=w(1)=0$ and $w'\in L^2$. For $m\ge4$ set $\chi_m(x):=\sigma(mx-1)\sigma(m(1-x)-1)$ and $w_m:=\chi_m w$. Then $\chi_m$ vanishes on $[0,1/m]\cup[1-1/m,1]$, equals $1$ on $[2/m,1-2/m]$, takes values in $[0,1]$, and $|\chi_m'|\le2mC_\sigma$ by the chain and product rules. The product $w_m$ is absolutely continuous with derivative $\chi_m'w+\chi_mw'\in L^2$ and compact support in $I$, so $w_m\in W^{1,2}(I)$. [F3, algebra]

2.1 Regularity and boundary values: the formula of step 1.1 exhibits $u'$ as the sum of the continuous function $x\mapsto\int_x^1f$ and a constant, so $u\in C^1([0,1])$; $u(0)=\int G(0,y)f=0$ and $u(1)=0$ by [F1], and the fundamental theorem gives $u(x)=\int_0^xu'(t)\,dt$. Moreover $u'$ is the difference of an absolutely continuous function and a constant, so $u''=-f$ almost everywhere. [F1, F2, step 1.1]

2.2 Convergence in $H^1$: put $E_m:=(0,2/m)\cup(1-2/m,1)$. Since $w_m=w$ off $E_m$ and $w\in L^2$, $\|w_m-w\|_{L^2}\to0$; in $L^2$, $(w_m-w)'=(\chi_m-1)w'+\chi_m'w$, and the first term tends to zero because $w'\in L^2$ and the strips shrink to the endpoints. Near $0$, $|w(x)|^2=|\int_0^xw'(t)\,dt|^2\le x\int_0^x|w'(t)|^2dt$, while near $1$, $|w(x)|^2=|\int_x^1w'(t)\,dt|^2\le(1-x)\int_x^1|w'(t)|^2dt$. Therefore $$\int_{1/m}^{2/m}|\chi_m'w|^2dx\le6C_\sigma^2\int_0^{2/m}|w'|^2dt\quad\text{and}\quad\int_{1-2/m}^{1-1/m}|\chi_m'w|^2dx\le6C_\sigma^2\int_{1-2/m}^1|w'|^2dt,$$ and both bounds tend to zero. Thus $\|w_m-w\|_{H^1(0,1)}\to0$. [F3, step 1.2, algebra]

3.1 Mollification and closure: each $w_m$ has compact support inside $I$, so its zero extension $W_m$ belongs to $W^{1,2}(\mathbb R)$ by [F3]. Mollifying at sufficiently small scales gives $W_m*\rho_\varepsilon\in C_c^\infty(I)$. The weak-derivative identity with test $y\mapsto\rho_\varepsilon(x-y)$ gives $(W_m*\rho_\varepsilon)'=W_m'*\rho_\varepsilon$; applying the $L^2$ approximate-identity result separately to $W_m$ and $W_m'$ proves convergence in $W^{1,2}$. Hence $w_m\in H^1_0(I)$. Since this space is closed and $w_m\to w$ in $H^1$, $w\in H^1_0(I)$. Applying the criterion to step 2.1 gives $u\in H^1_0(I)$. [F3, step 2.2]

3.2 Weak identity on test functions: for $\varphi\in C_c^\infty(I)$, integration by parts on $[0,1]$ and step 2.1 give $$\int_0^1u'\,\overline{\varphi'}\,dx=\bigl[u'\,\overline\varphi\bigr]_0^1-\int_0^1u''\,\overline\varphi\,dx=\int_0^1f\,\overline\varphi\,dx,$$ the boundary term vanishing because $\varphi$ has compact support in $I$ and $u''=-f$ a.e. [F2, step 2.1]

4.1 Identification and uniqueness: the right-hand side $v\mapsto(f,v)_{L^2}$ is an element of $H^{-1}(I)$ by [F4], and both sides of the identity are bounded in $v$ on $H^1_0(I)$ by H\"older; since $C_c^\infty(I)$ is dense in $H^1_0(I)$, the identity of step 3.2 extends to every $v\in H^1_0(I)$. Hence $u$ is the unique weak solution of $-u''=f$ with zero boundary values. For $f=\mathbf 1$ the formula gives $u'(x)=(1-x)-\tfrac12=\tfrac12-x$ and $u(x)=\tfrac12x(1-x)$. [F4, step 3.1, step 3.2, algebra]

5.1 General $H^{-1}$ datum: let $F(v)=(f_0,v)_{L^2}+(f_1,v')_{L^2}$ with $f_0,f_1\in L^2(I)$ and define $w(x):=\int_0^1\partial_yG(x,y)f_1(y)\,dy=\int_0^xf_1(y)\,dy-x\int_0^1f_1(y)\,dy$. Then $w$ is absolutely continuous with $w(0)=w(1)=0$ and $w'=f_1-\int_0^1f_1\in L^2$, so $w\in H^1_0(I)$ by the criterion of step 3.1; for $v\in H^1_0(I)$ one computes $\int_0^1w'\overline{v'}=\int_0^1f_1\overline{v'}-\bigl(\int_0^1f_1\bigr)\overline{\int_0^1v'}$, and $\int_0^1v'=0$ for $v\in H^1_0$, by approximating $v$ in $H^1$ by compactly supported smooth $v_j$, for which $\int v_j'=0$, and using $|\int(v'-v_j')|\le\|v'-v_j'\|_2$, so the identity $\int_0^1w'\overline{v'}=\int_0^1f_1\overline{v'}$ holds. Combined with step 4.1 applied to $f_0$, the function $u=u_0+w$ with $u_0(x)=\int G(x,y)f_0(y)dy$ satisfies the weak equation for the datum $F$, and by uniqueness it is the weak solution; this is the displayed Green representation with $\partial_yG$ acting on $f_1$. [F4, step 3.1, step 4.1, algebra]

6.1 Conclusion: the Green function representation produces the unique weak solution on the interval, with the weak identity and the explicit case $f=\mathbf 1$ giving $u(x)=\tfrac12x(1-x)$, and the general divergence-form datum is handled by the same kernel with $\partial_yG$; no general Green-function theory is claimed. [step 4.1, step 5.1] ∎ 
