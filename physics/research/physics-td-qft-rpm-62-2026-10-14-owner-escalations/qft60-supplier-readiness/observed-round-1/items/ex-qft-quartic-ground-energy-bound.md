---
id: ex-qft-quartic-ground-energy-bound
kind: example
domain: mathematics
title: One-mode quartic ground-energy increment bound
status: draft
origin: pipeline
dependency_level: 6
deps: [def-qft-regulated-polynomial-hamiltonian, lem-qft-hermite-oscillator-research-supplier, lem-qft-regulated-ground-variational-bound, lem-qft-coercive-polynomial-form-domain, thm-dominated-convergence, def-countable-choice]
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qft-regulated-ground-variational-bound: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §8.3, pp.212–214"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§8.3, printed pp.212–214: the Hermite ground state and oscillator eigenvalue."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 3, pp.21–24"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 3, printed pp.21–24: the normalized Gaussian ground state of the one-dimensional oscillator."
---

## Statement

Assume $a>0$, $m>0$, and $\lambda\ge0$, all real mathematical parameters.
For $N=1$ take the polynomial
$$V_\lambda(q)=\frac{m^2}{2}q^2+\lambda q^4$$
and the differential expression $h_\lambda=-a\,d^2/dq^2+V_\lambda(q)$ with
the form realization of [[thm-qft-self-adjoint-regulated-interaction]]. Write
$E_g(\lambda)$ for its least eigenvalue. Then
$$0\le E_g(\lambda)-E_g(0)\le\frac{3a\lambda}{2m^2}.$$
The parameters are mathematical and dimensionless here; no physical mass,
unit, measurement, or continuum claim is made.

## Facts & Assumptions

**Given:** $a,m>0$, $\lambda\ge0$, and the finite-mode form realization for $V_\lambda$.

[A1] [[def-countable-choice]]: the spectral and form suppliers used here are invoked under Countable Choice.

[F1] [[def-qft-regulated-polynomial-hamiltonian]]: $V_\lambda(q)\ge(m^2/2)q^2$, so $C_0=0$ and the common quadratic coercivity constant is $c=m^2/2$.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: for $-a\,d^2/dq^2+(m^2/2)q^2$, the least eigenvalue is $m\sqrt{a/2}$ and its normalized ground function is $\phi_b(q)=(b/\pi)^{1/4}e^{-bq^2/2}$ with $b=m/\sqrt{2a}$.

[F3] [[lem-qft-regulated-ground-variational-bound]]: the least eigenvalue equals the infimum of the normalized form over its form domain.

[F4] [[lem-qft-coercive-polynomial-form-domain]]: the form domain is the completion of $C_c^\infty$ for the displayed gradient-plus-weight norm and injects into $L^2$.

[F5] [[thm-dominated-convergence]]: differentiation under the Gaussian integral with respect to $b>0$ is justified locally by an integrable polynomial-Gaussian bound.

## Proof

**Proof technique:** direct.

**Given:** $a,m>0$, $\lambda\ge0$, and the forms $q_0,q_\lambda$.

1.1 Write $a_\lambda=q_\lambda+2\|\cdot\|_2^2$ for the shifted form inner product of the $\lambda$ completion. On $C_c^\infty$, $V_\lambda\ge V_0$ gives $a_\lambda(u,u)\ge a_0(u,u)$, so a $Q_\lambda$-Cauchy sequence is $Q_0$-Cauchy and the identity extends continuously to $Q_\lambda\to Q_0$ with the same $L^2$ representative. The unshifted forms $q_\lambda=a_\lambda-2\|\cdot\|_2^2$ and $q_0=a_0-2\|\cdot\|_2^2$ are continuous on their respective form spaces. For any $u\in Q_\lambda$, approximate it in $Q_\lambda$ by $u_r\in C_c^\infty$; then $q_\lambda(u_r)\ge q_0(u_r)$ for every $r$, and continuity of both forms gives $q_\lambda(u)\ge q_0(u)$ in the limit. For normalized $u\in Q_\lambda$, [F3] then gives $q_\lambda(u)\ge q_0(u)\ge E_g(0)$. Taking the infimum yields $E_g(\lambda)\ge E_g(0)$. [A1, F1, F3, F4, algebra]

2.1 The Gaussian $\phi_b$ from [F2] and its derivative are polynomial times a Gaussian. For cutoffs $\chi_R$ as in the cutoff construction of
[[lem-qft-hermite-oscillator-research-supplier]], $\chi_R\phi_b\in C_c^\infty$
converges to $\phi_b$ in the $\lambda$ form norm: the derivative error is
$(1-\chi_R)\phi_b'-(\chi_R')\phi_b$, whose first term has vanishing Gaussian
tail and whose second has norm at most $C\|\phi_b\|_2/R$; the weighted error
has squared magnitude bounded by $(m^2q^2/2+\lambda q^4+2)|\phi_b|^2$, an
integrable polynomial-Gaussian tail. Thus $\phi_b\in Q_\lambda$. [A1, F2, F4, algebra]

2.2 Let $\mathbb E_b[g]:=\int g(q)\sqrt{b/\pi}e^{-bq^2}\,dq$. The Hermite
ground function in [F2] is normalized, so $\mathbb E_b[1]=1$. On any compact
interval of positive $b$ values, the derivatives of the integrands through
order two are bounded by a constant times $(1+|q|^4)e^{-b_*q^2}$ for some
$b_*>0$, which is integrable; [F5] therefore permits differentiation under the
integral. Differentiating $\mathbb E_b[1]=1$ gives
$$0=\mathbb E_b\!\left[\frac1{2b}-q^2\right],\qquad
\mathbb E_b[q^2]=\frac1{2b}.$$
Differentiating the second identity and using
$\partial_b(\sqrt{b/\pi}e^{-bq^2})=(\frac1{2b}-q^2)\sqrt{b/\pi}e^{-bq^2}$ gives
$$-\frac1{2b^2}=\mathbb E_b\!\left[q^2\left(\frac1{2b}-q^2\right)\right]
=\frac1{4b^2}-\mathbb E_b[q^4],$$
so $\mathbb E_b[q^4]=3/(4b^2)$. Since $\phi_b'=-bq\phi_b$, this gives
$\|\phi_b'\|_2^2=b/2$. Hence
$$\|\phi_b\|_2^2=1,\quad \|\phi_b'\|_2^2=b/2,\quad
\int q^2|\phi_b|^2=1/(2b),\quad\int q^4|\phi_b|^2=3/(4b^2).$$
The unperturbed form value
is $ab/2+m^2/(4b)=m\sqrt{a/2}=E_g(0)$, using $b=m/\sqrt{2a}$, and the quartic
contribution is $3\lambda/(4b^2)=3a\lambda/(2m^2)$. The variational bound
[F3] applied to this normalized vector yields
$$E_g(\lambda)\le E_g(0)+\frac{3a\lambda}{2m^2}.$$
Combining with step 1.1 proves both inequalities, including $\lambda=0$.
[A1, F2, F3, F5, step 2.1, algebra] ∎
