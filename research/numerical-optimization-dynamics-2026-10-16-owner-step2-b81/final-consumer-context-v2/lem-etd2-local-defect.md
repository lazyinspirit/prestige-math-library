---
id: lem-etd2-local-defect
kind: lemma
title: The two-stage ETD2 method has a third-order local defect
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-exponential-euler-and-etd2-step-maps
  - lem-finite-matrix-semilinear-variation-of-constants
  - lem-exponential-phi-integral-representations
  - lem-exponential-euler-local-defect
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-numbers-are-the-real-coordinate-plane
  - def-bounded-linear-operator
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - def-complete-ordered-field
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§2.3, Example 2.18 and equations (2.38)–(2.40), PDF pp. 17–18, printed pp. 226–227; local-defect framework in equations (2.35)–(2.37), PDF pp. 16–17."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, Examples 14.9–14.10 and Theorem 14.11, PDF pp. 166–168, printed pp. 171–173."
---

## Statement

Let $y'=Ay+g(t,y(t))$ on $[t,t+h]$, $0<h\le T$, and let $q(r):=g(r,y(r))$. Suppose $q\in C^2$, $\sup\|q'(r)\|_2\le Q_1$, $\sup\|q''(r)\|_2\le Q_2$, $g$ is $L$-Lipschitz in its state variable on a tube containing the exact path and predictor, and $K_+:=\sup_{0\le s\le T}\|e^{sA}\|_2$. Set $C_E:=K_+Q_1/2$. Then the exact-start defect of $\Psi^2_h$ satisfies
$$\|\Psi^2_h(t,y(t))-y(t+h)\|_2\le K_+\left(Q_2+\frac{LC_E}{2}\right)h^3.$$

## Facts & Assumptions

**Given:** The exact solution, forcing curve, Lipschitz tube, and bounds in the Statement.

[F1] [[lem-finite-matrix-semilinear-variation-of-constants]]: the exact endpoint is the exponential-linear term plus $\int_0^h e^{(h-s)A}q(t+s)\,ds$.

[F2] [[def-exponential-euler-and-etd2-step-maps]]: the ETD2 predictor is $a_h(t,y)=\Psi^E_h(t,y)$ and its correction uses $\varphi_1-\varphi_2$ at $q(t)$ and $\varphi_2$ at $g(t+h,a_h)$.

[F3] [[lem-exponential-phi-integral-representations]]: $\varphi_1(X)=\int_0^1e^{(1-\theta)X}d\theta$ and $\varphi_2(X)=\int_0^1\theta e^{(1-\theta)X}d\theta$.

[L1] [[lem-exponential-euler-local-defect]]: the exact-start predictor obeys $\|a_h(t,y(t))-y(t+h)\|_2\le C_Eh^2$.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]] and [[thm-norm-inequality-for-the-vector-valued-integral]]: Taylor integral remainders and their norms are bounded componentwise.

[F5] [[def-inner-product-norm]], [[prop-standard-coordinate-inner-products]], and [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: vector and induced matrix norms are the Euclidean norms used in the bounds.

[A1] The second derivative bound $Q_2$, state Lipschitz bound $L$, and semigroup bound $K_+$ hold on the complete path and predictor tube.

[F6] [[def-bounded-linear-operator]], [[cor-finite-dimensional-normed-spaces-are-banach]], and [[lem-exponential-series-of-a-bounded-operator]]: for finite $A$ on $\mathbb C^d$, $\|e^{sA}\|_2\le e^{|s|\|A\|_2$. Hence the set defining $K_+$ is nonempty and bounded above by $e^{T\|A\|_2}$; completeness of $\mathbb R$ ([[def-complete-ordered-field]]) supplies its finite supremum.

[F7] [[thm-complex-numbers-are-the-real-coordinate-plane]] and [[prop-standard-coordinate-inner-products]]: componentwise realification is an isometry from $\mathbb C^d$ to $\mathbb R^{2d}$, so the real vector-valued FTC and integral norm bound in [F4] apply to the complex forcing curve with the same norms.

## Proof

1.1 By [F7], the real vector-valued FTC in [F4] applies to the complex curve $q$ and preserves its norm. Write $\ell_h(s):=(1-s/h)q(t)+(s/h)q(t+h)$. Twice integrating the bound on $q''$ from [F4] gives $q(t+s)=q(t)+sq'(t)+r_s$ and $q(t+h)=q(t)+hq'(t)+r_h$, with $\|r_s\|_2\le Q_2s^2/2$ and $\|r_h\|_2\le Q_2h^2/2$. Therefore $\|q(t+s)-\ell_h(s)\|_2\le Q_2s^2/2+(s/h)Q_2h^2/2\le Q_2h^2$. [given, F4, F5, F7, A1, algebra]

1.2 By [L1] and [A1], the endpoint forcing difference satisfies $\|q(t+h)-g(t+h,a_h(t,y(t)))\|_2\le LC_Eh^2$. [L1, A1, algebra]

2.1 Substituting [F3] into [F2] shows the ETD2 correction equals $\int_0^h e^{(h-s)A}[(1-s/h)q(t)+(s/h)g(t+h,a_h(t,y(t)))]\,ds$. Subtracting this from [F1] gives $\int_0^h e^{(h-s)A}(q(t+s)-\ell_h(s))\,ds+\int_0^h e^{(h-s)A}(s/h)(q(t+h)-g(t+h,a_h(t,y(t))))\,ds$. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 By [F6], $K_+$ is finite. By [A1], [F4]–[F5], and step 1.1, the interpolation contribution in step 2.1 is at most $K_+Q_2h^3$. Its stage contribution is at most $K_+LC_Eh^2\int_0^h(s/h)\,ds=K_+LC_Eh^3/2$. Adding these bounds proves the claimed estimate. [A1, F4, F5, F6, step 2.1, algebra] ∎
