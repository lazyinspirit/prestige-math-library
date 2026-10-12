---
id: thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate
aliases: [nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]
kind: theorem
domain: mathematics
title: "Finite gapped adiabatic estimate"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, thm-cauchy-integral-formula-circle, def-self-adjoint-and-normal-endomorphism, def-operator-norm, def-bounded-linear-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Two-State System pp. 153-155 (adiabatic evolution as the slow limit)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (adiabatic theorem for a nondegenerate isolated level; standard analytic perturbation treatment)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$H:[0,1]\to\operatorname{Herm}(\mathbb C^d)$ be a map of class $C^2$ into the
Hermitian $d\times d$ matrices, let $P(s)$ be the spectral projection of $H(s)$
for a spectral cluster $\sigma_P(s)$ that is separated from the complementary
spectrum by a uniform gap: $\operatorname{dist}(\sigma_P(s),\sigma(H(s))\setminus\sigma_P(s))\ge g>0$
for all $s\in[0,1]$, and fix $T>0$. Let $U_T$ solve
$i\,\partial_sU_T(s)=TH(s)U_T(s)$, $U_T(0)=I$
([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]), and let
$U_A$ solve $i\,\partial_sU_A(s)=\bigl(TH(s)+i[P'(s),P(s)]\bigr)U_A(s)$,
$U_A(0)=I$ (equivalently $U_A'=(-iTH+K)U_A$ with $K=[P',P]$). Then:

(a) $P\in C^2([0,1];\operatorname{End}(\mathbb C^d))$ and $K=[P',P]$ is
anti-Hermitian of class $C^1$ with $[K,P]=P'$.

(b) There is a $C^1$ Hermitian $X:[0,1]\to\operatorname{End}(\mathbb C^d)$ with
$[H(s),X(s)]=K(s)$ for all $s$.

(c) *Intertwining.* $P(s)U_A(s)=U_A(s)P(0)$ for all $s$.

(d) *Adiabatic estimate.* With
$C:=2\sup_s\|X(s)\|+\int_0^1\bigl(\|X'(s)\|+\|K(s)\|\|X(s)\|\bigr)ds$ one has
$$\bigl\|(I-P(s))U_T(s)P(0)\bigr\|\le\frac CT\qquad(s\in[0,1]).$$

The estimate is finite-dimensional and conditional on the uniform positive gap;
gap-closing families and unbounded families are not covered.

## Facts & Assumptions

**Given:** the $C^2$ family $H$, the gapped cluster projection $P$, $T>0$, and the propagators $U_T,U_A$.

[F1] Finite-dimensional spectral calculus: $P(s)$ is the spectral projection of the Hermitian matrix $H(s)$; $[H(s),P(s)]=0$; the contour formula $P(s)=\frac1{2\pi i}\oint_{\Gamma_s}(z-H(s))^{-1}dz$ and differentiation under the integral give $P\in C^2$ with $P'=PP'+P'P$ and $[P',P]=(P'P-PP')$ anti-Hermitian; also $PP'P=0$ ([[thm-cauchy-integral-formula-circle]], [[def-self-adjoint-and-normal-endomorphism]]).

[F2] On the cross-block matrices the commutator map $Y\mapsto[H,Y]$ is invertible with inverse norm at most $1/g$; conjugating by the $C^2$ unitary solving $W'=KW$ (which makes $P$ constant) reduces the construction of $X$ to inverting a $C^1$ finite cross-block map, so $X$ is $C^1$ and Hermitian ([[def-operator-norm]], algebra).

[F3] Both $TH+K$ and $TH$ are norm-continuous self-adjoint-valued families on $[0,1]$ (making $U_A,U_T$ unitary propagators) with $\|(\cdot)\|\le T\|H\|+\|K\|$ on the compact interval ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], [[def-operator-norm]]).

## Proof

1.1 [Properties of $P$ and $K$] [F1] gives $P^2=P$, $P'=PP'+P'P$, $PP'P=0$; hence $[K,P]=KP-PK=(P'P-PP')P-P(P'P-PP')=P'-2PP'P=P'$, and $K^*=(P'P-PP')^*=P'P-PP'=-K$. [F1, algebra]

2.1 [The intertwining identity] The modified generator $G(s):=TH(s)+K(s)$ is self-adjoint on $\mathbb C^d$; differentiating $P(s)U_A(s)$ gives $\frac{d}{ds}\bigl[PU_A\bigr]=(P'+PG(s))U_A$, and $P'=KP-PK$ by step 1.1, while $PG=TPH+PK=THP+PK$ because $[H,P]=0$. Hence $P'+PG=KP-PK+THP+PK=THP+KP=GP$, so both $PU_A$ and $U_AP(0)$ satisfy $Z'(s)=-iG(s)Z(s)$ on $[0,1]$; equality at $s=0$ gives $P(s)U_A(s)=U_A(s)P(0)$. [step 1.1, F1, F2, algebra]

3.1 [Difference bound] Put $D:=U_A^*U_T$ and $F:=U_A^*XU_T$. Differentiating with the equations of [F3] gives $D'=U_A^*(iG-iTH)U_T=-iU_A^*KU_T$ and $F'=U_A^*[X'-KX+iT[H,X]]U_T=U_A^*[X'-KX+iTK]U_T$, so $(1+iT)D'=F'-U_A^*X'U_T$ (substituting $[H,X]=K$ and $D'$). Integrating from $0$ to $s$ and using $\|U_A\|=\|U_T\|=1$ and $|1+iT|=\sqrt{1+T^2}\ge T$ gives $\|D(s)-I\|\le\frac1T[2\sup\|X\|+\int_0^1\|X'\|]\le C/T$. Since $(I-P(s))U_A(s)P(0)=0$ by step 2.1, $(I-P(s))U_T(s)P(0)=(I-P(s))U_A(s)(D(s)-I)P(0)$, whose norm is at most $\|D(s)-I\|\le C/T$. [step 2.1, F2, F3, algebra] ∎
