---
id: lem-fd-conformation-storage
kind: lemma
title: "Objective conformation positivity and stored-energy dissipation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-fd-nonnewtonian-laws
  - lem-fd-observer-calculus
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - prop-a-fundamental-matrix-is-invertible
  - thm-derivative-of-matrix-inversion
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-determinant-differential-and-jacobis-formula
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-determinant-multiplicative
  - thm-logarithm-derivative-and-integral
  - thm-integral-logarithm-product-law
  - lem-cm-positive-definite-matrix-square-roots
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-fd-nonnewtonian-laws: mathematical-premise
  lem-fd-observer-calculus: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  prop-a-fundamental-matrix-is-invertible: mathematical-premise
  thm-derivative-of-matrix-inversion: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-determinant-differential-and-jacobis-formula: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-integral-logarithm-product-law: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "John W. Barrett and Sebastien Boyaval, Existence and Approximation of a (Regularized) Oldroyd-B Model, arXiv:0907.4066v2, §1.1"
      url: "https://arxiv.org/pdf/0907.4066"
    - title: "S. Boyaval, T. Lelièvre, and C. Mangoubi, Free-energy-dissipative schemes for the Oldroyd-B model, ESAIM: M2AN 43 (2009), §§2.1.1–2.1.2 and Appendix B, Lemma 2.1"
      url: "https://www.numdam.org/item/10.1051/m2an/2009008.pdf"
verification:
  precheck: pending
---

## Statement

Let $T>0$, let $J\subseteq\mathbb R$ be an open interval containing $[0,T]$, let $\Omega\subseteq\mathbb R^3$ be open, and let $u\in C^1(J\times\Omega;\mathbb R^3)$ satisfy $\operatorname{div}u=0$ on a neighborhood of a $C^1$ trajectory $x:[0,T]\to\Omega$ with $x'(t)=u(t,x(t))$. Here $C^r$ means that coordinate partial derivatives through total order $r$ exist and are continuous. Set $L(t)=\nabla u(t,x(t))$ and $D(t)=(L(t)+L(t)^{\mathsf T})/2$, both with units $\mathrm{s}^{-1}$. Let $\mathrm{Sym}(3)$ denote the real symmetric $3\times3$ matrices and $\mathrm{Sym}^+(3)=\{M\in\mathrm{Sym}(3):v^{\mathsf T}Mv>0\text{ for every }v\ne0\}$. Let $C\in C^1([0,T];\mathrm{Sym}(3))$ be dimensionless and satisfy

$$
C'=LC+CL^{\mathsf T}-(C-I_3)/\lambda,\qquad C(0)=C_0\in\mathrm{Sym}^+(3),
$$

where $C_0\in\mathrm{Sym}^+(3)$, $I_3$ is the $3\times3$ identity matrix, $G>0$ is in $\mathrm{Pa}$, $\lambda>0$ is in $\mathrm{s}$, and $\eta_s\ge0$ is in $\mathrm{Pa\,s}$. Derivatives of $C$ at the endpoints are one-sided. Define $\tau_p=G(C-I_3)$ and $\tau_s=2\eta_sD$, both in $\mathrm{Pa}$. On $\mathrm{Sym}^+(3)$ define the stored-energy density $w(C)=\frac G2(\operatorname{tr}C-\log\det C-3)$ in $\mathrm{J\,m^{-3}}$, where $\log r:=\int_1^r ds/s$ for $r>0$. Then $C(t)$ remains positive definite for every $t\in[0,T]$, $w(C(t))\ge0$, with equality exactly when $C(t)=I_3$, and for every $t$,

$$(\tau_s+\tau_p):D-\frac{d}{dt}w(C)=2\eta_sD:D+\frac{G}{2\lambda}\bigl(\operatorname{tr}C+\operatorname{tr}C^{-1}-6\bigr)\ge0.$$

For a $C^2$ rigid observer change $x^*=Q(t)x+c(t)$ with $Q(t)\in SO(3)$, set $C^*=QCQ^{\mathsf T}$ and $L^*=QLQ^{\mathsf T}+Q'Q^{\mathsf T}$. The conformation equation is covariant under this transformation, $D^*=QDQ^{\mathsf T}$, $\tau_p^*=Q\tau_pQ^{\mathsf T}$, $\tau_s^*=Q\tau_sQ^{\mathsf T}$, and $w(C^*)=w(C)$. Positivity is a forward-time conclusion from the initial time $0$; no backward-time positivity, PDE solution existence, or entropy-production claim is asserted.



## Statement references

[[def-fd-nonnewtonian-laws|conformation equations, stress, and storage definition]].

[[lem-fd-observer-calculus|rigid-observer transformation of velocity, velocity gradient, and rate of strain]].

[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval|global solution of a continuous-coefficient matrix ODE on a compact interval]].

[[prop-a-fundamental-matrix-is-invertible|invertibility of the matrix solution with identity initial value]].

[Barrett and Boyaval, Oldroyd-B model, §1.1](https://arxiv.org/pdf/0907.4066).

[Boyaval, Lelièvre, and Mangoubi, Oldroyd-B free-energy estimate, §§2.1.1–2.1.2 and Appendix B, Lemma 2.1](https://www.numdam.org/item/10.1051/m2an/2009008.pdf).

## Facts & Assumptions

**Given:** The smooth incompressible trajectory, its continuous matrix field $L(t)$, the symmetric solution $C(t)$ and positive initial matrix $C_0$, and the constants $G,\lambda,\eta_s$ in the Statement.

[A1] [[def-fd-nonnewtonian-laws]]: $D_tC=LC+CL^{\mathsf T}-(C-I_3)/\lambda$, $\tau_p=G(C-I_3)$, $\tau_s=2\eta_sD$, and $w(C)=\frac G2(\operatorname{tr}C-\log\det C-3)$ for $C\in\mathrm{Sym}^+(3)$; $C$ is dimensionless and symmetric.

[F1] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: for continuous $L:[0,T]\to M_3(\mathbb R)$, $Z'=LZ$, $Z(0)=I_3$ has a unique $C^1$ solution on all of $[0,T]$.

[F2] [[prop-a-fundamental-matrix-is-invertible]]: every such solution with identity initial matrix is invertible at every time in its interval.

[F3] [[thm-derivative-of-matrix-inversion]] and [[thm-chain-rule-for-total-derivatives]]: on the invertible locus, $D\operatorname{inv}(Z)[H]=-Z^{-1}HZ^{-1}$, and this derivative composes with a $C^1$ matrix path.

[F4] [[thm-algebra-of-derivatives]]: scalar products, sums and quotients obey their derivative rules; applying these entrywise gives the product rule for finite matrix products.

[F5] [[thm-determinant-differential-and-jacobis-formula]] and [[thm-logarithm-derivative-and-integral]]: for invertible $C$, $(\det C)'=\det C\operatorname{tr}(C^{-1}C')$, and for $r>0$, $(\log r)'=1/r$.

[F6] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and [[thm-determinant-multiplicative]]: a real symmetric matrix has an orthonormal eigenbasis and determinants multiply under matrix products.

[F7] [[thm-integral-logarithm-product-law]]: the integral logarithm $L$ satisfies $L(ab)=L(a)+L(b)$ for $a,b>0$; the Statement defines $\log=L$.

[F8] [[lem-cm-positive-definite-matrix-square-roots]]: a symmetric positive-definite matrix has a symmetric positive-definite square root and inverse square root.

[F9] [[thm-derivative-of-exponential]] and [[cor-exponential-reciprocal-and-positivity]]: the derivative of the real exponential is itself and the exponential is positive.

[F10] [[lem-fd-observer-calculus]]: for $Q,c\in C^2$, $Q(t)\in SO(3)$, and corresponding points under $x^*=Qx+c$, the transformed velocity and gradient are $u^*=Q'x+Qu+c'$ and $L^*=QLQ^{\mathsf T}+Q'Q^{\mathsf T}$, while $D^*=QDQ^{\mathsf T}$; the transformed material derivative is defined along the transformed velocity.

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement and Facts & Assumptions.

1.1 Since $u$ and $x$ are $C^1$, $L(t)=\nabla u(t,x(t))$ is continuous on the compact interval $[0,T]$. Applying [F1] gives a unique $C^1$ solution $Z'=LZ$, $Z(0)=I_3$ on all of $[0,T]$; by [F2], each $Z(t)$ is invertible. [given, F1, F2]

1.2 By [F10], a material trajectory transforms with velocity $u^*=Q'x+Qu+c'$ and gradient $L^*=QLQ^{\mathsf T}+Q'Q^{\mathsf T}$. Along that trajectory, differentiating $C^*=QCQ^{\mathsf T}$ by the chain and product rules gives $D_t^*C^*=Q(D_tC)Q^{\mathsf T}+Q'CQ^{\mathsf T}+QCQ'^{\mathsf T}$. Substituting these formulas cancels the observer-derivative terms and gives $D_t^*C^*-L^*C^*-C^*(L^*)^{\mathsf T}=Q(D_tC-LC-CL^{\mathsf T})Q^{\mathsf T}$. Since $C^*-I_3=Q(C-I_3)Q^{\mathsf T}$, the conformation equation is covariant. [A1, F4, F10]

2.1 By [F3] and the chain rule along $Z$, $(Z^{-1})'=-Z^{-1}Z'Z^{-1}=-Z^{-1}L$; transposing gives $(Z^{-\mathsf T})'=-L^{\mathsf T}Z^{-\mathsf T}$. [F2, F3, step 1.1]

3.1 Define $Y(t)=e^{t/\lambda}Z(t)^{-1}C(t)Z(t)^{-\mathsf T}$. Product differentiation using [F4], then substitution of the equation for $C'$ and the identities in step 2.1, cancels the $LC$ and $CL^{\mathsf T}$ terms and yields $Y'(t)=\frac1\lambda e^{t/\lambda}Z(t)^{-1}Z(t)^{-\mathsf T}$. [A1, F4, F9, step 1.1, step 2.1]

4.1 Since $Y(0)=C_0$, the fundamental theorem of calculus gives $Y(t)=C_0+\frac1\lambda\int_0^t e^{s/\lambda}Z(s)^{-1}Z(s)^{-\mathsf T}\,ds$. For nonzero $v$, the integrand's quadratic form is $e^{s/\lambda}|Z(s)^{-\mathsf T}v|^2/\lambda>0$; its integral is positive semidefinite (zero at $t=0$), so adding it to the positive-definite $C_0$ makes $Y(t)$ positive definite for every $t\in[0,T]$. The identity $C=e^{-t/\lambda}ZYZ^{\mathsf T}$ and invertibility of $Z$ then give $v^{\mathsf T}Cv=e^{-t/\lambda}(Z^{\mathsf T}v)^{\mathsf T}Y(Z^{\mathsf T}v)>0$ for every nonzero $v$. [given, F9, step 1.1, step 3.1]

5.1 By [F6], write $C=U\operatorname{diag}(c_1,c_2,c_3)U^{\mathsf T}$ with $c_i>0$. Determinant multiplicativity and $UU^{\mathsf T}=I_3$ give $\det C=c_1c_2c_3$; finite-sum trace cyclicity gives $\operatorname{tr}C=\sum_i c_i$; hence [F7] gives $\log\det C=\sum_i\log c_i$. For each $c>0$, [F5] gives $\log c=\int_1^c dt/t$: if $c>1$, then $\log c<c-1$ because $1/t<1$ on the interior of $[1,c]$; if $0<c<1$, then $\log c=-\int_c^1dt/t<-(1-c)=c-1$ because $1/t>1$ on the interior of $[c,1]$; at $c=1$ the integral is zero. Thus $c-\log c-1\ge0$, with equality exactly at $c=1$, so $w(C)=\frac G2\sum_i(c_i-\log c_i-1)\ge0$, with equality exactly when all $c_i=1$, that is, $C=I_3$. [given, F5, F6, F7, algebra]

5.2 By [F6], write $C=U\operatorname{diag}(c_1,c_2,c_3)U^{\mathsf T}$ with $c_i>0$. The unique positive square root and inverse square root in [F8] are $U\operatorname{diag}(\sqrt{c_i})U^{\mathsf T}$ and $U\operatorname{diag}(c_i^{-1/2})U^{\mathsf T}$, respectively. Thus $C^{-1}=U\operatorname{diag}(c_i^{-1})U^{\mathsf T}$ and $\operatorname{tr}C+\operatorname{tr}C^{-1}-6=\sum_{i=1}^3(c_i+c_i^{-1}-2)=\sum_{i=1}^3(\sqrt{c_i}-c_i^{-1/2})^2\ge0$. [F6, F8, algebra]

6.1 Since $C$ is positive definite by step 4.1 and $\det C>0$ by step 5.1, Jacobi's formula and the derivative of logarithm in [F5] give $\frac{d}{dt}w(C)=\frac G2\operatorname{tr}((I_3-C^{-1})C')$. Substituting [A1] and multiplying out gives
$\operatorname{tr}((I_3-C^{-1})(LC+CL^{\mathsf T}))=\operatorname{tr}(LC)+\operatorname{tr}(CL^{\mathsf T})-\operatorname{tr}(C^{-1}LC)-\operatorname{tr}(L^{\mathsf T})$.
The finite-sum identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ and $C^{\mathsf T}=C$ give $\operatorname{tr}(CL^{\mathsf T})=\operatorname{tr}(LC)$, $\operatorname{tr}(C^{-1}LC)=\operatorname{tr}L$, and $\operatorname{tr}(L^{\mathsf T})=\operatorname{tr}L$. Also $(C-I_3):D=\operatorname{tr}((C-I_3)L)=\operatorname{tr}(LC)-\operatorname{tr}L$, since the contraction of a symmetric matrix with the skew part of $L$ is zero. Therefore the displayed linear term is $2(C-I_3):D$. Direct multiplication gives $(I_3-C^{-1})(C-I_3)=C+C^{-1}-2I_3$, so its trace is $\operatorname{tr}C+\operatorname{tr}C^{-1}-6$. Hence $\frac{d}{dt}w=G(C-I_3):D-\frac{G}{2\lambda}(\operatorname{tr}C+\operatorname{tr}C^{-1}-6)$. [A1, F5, step 4.1, step 5.1, algebra]

6.2 From [A1], $(\tau_s+\tau_p):D=2\eta_sD:D+G(C-I_3):D$. Subtracting the derivative in step 6.1 gives the identity in the Statement; it is nonnegative by $\eta_s\ge0$, $D:D\ge0$, and step 5.2. Since $D^*=QDQ^{\mathsf T}$ and $C^*=QCQ^{\mathsf T}$, the stress definitions give $\tau_s^*=Q\tau_sQ^{\mathsf T}$ and $\tau_p^*=Q\tau_pQ^{\mathsf T}$; trace and determinant invariance give $w(C^*)=w(C)$. [A1, step 1.2, step 5.2, step 6.1, algebra] ∎

