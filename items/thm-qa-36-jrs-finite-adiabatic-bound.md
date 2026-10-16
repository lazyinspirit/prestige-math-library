---
id: thm-qa-36-jrs-finite-adiabatic-bound
kind: theorem
title: Finite JRS adiabatic projector bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-36-finite-adiabatic-path-model
  - lem-qa-36-gapped-projection-regularity
  - lem-qa-36-jrs-finite-band-estimates
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-self-adjoint-and-normal-endomorphism
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional spectral and matrix ODE results only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorem 3 and Lemmas 1–8, PDF pp. 5–12; endpoint and gap constants.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 151–156; PDF pp. 159–164.
verification:
  precheck: n/a
---

## Statement

Let $H:[0,1]\to\mathcal L(V)$ be a $C^2$ finite-dimensional Hermitian path, and let $P(s)$ be a coherently followed spectral projection of constant rank $m\ge1$, separated from its complement by full gap $g(s)>0$. Let $U_T$ solve $iU_T'(s)=TH(s)U_T(s)$ with $U_T(0)=I$, where $T>0$. Define
$$A_m(s)=\frac1T\left[\frac{m\|H'(0)\|}{g(0)^2}+\frac{m\|H'(s)\|}{g(s)^2}+\int_0^s\left(\frac{m\|H''(r)\|}{g(r)^2}+\frac{7m\sqrt m\|H'(r)\|^2}{g(r)^3}\right)dr\right].$$
Then
$$\|U_T(s)P(0)U_T(s)^*-P(s)\|\le A_m(s).$$
For every unit $\psi\in\operatorname{ran}P(0)$, its transition probability out of the band at time $s$ is at most $A_m(s)^2$. The rank $m$ may be larger than the number of distinct eigenvalues in the band; using rank in the constants is a valid upper bound.

## Facts & Assumptions

**Given:** The finite path, its gapped band, the slow-time propagator, and $T>0$ from [[def-qa-36-finite-adiabatic-path-model]].

[F1] The band projection is $C^2$ ([[lem-qa-36-gapped-projection-regularity]]).

[F2] The twiddle transform satisfies $\dot P=\widetilde{H'}$, $\|\widetilde X\|\le\sqrt m\|X\|/g$, the block bounds $\|Q\widetilde X P\|\le\sqrt m\|QXP\|/g$ and $\|P\widetilde X Q\|\le\sqrt m\|PXQ\|/g$, $\|Q\ddot P P\|\le\sqrt m\|H''\|/g+4m\|H'\|^2/g^2$, and $\|Q\dot{\widetilde{\dot P}}P\|\le\sqrt m\|Q\ddot P P\|/g+2m\|H'\|\|\dot P\|/g^2$ ([[lem-qa-36-jrs-finite-band-estimates]]).

[F3] The operator norm is submultiplicative and invariant under multiplication by a unitary ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F4] A continuous finite matrix coefficient has a unique propagator on $[0,1]$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]), after realifying its complex coordinates.

## Proof

1.1 Put $D(s)=[P'(s),P(s)]$. Since $P,P'$ are self-adjoint, $D^*=-D$, so $K_A(s)=TH(s)+iD(s)$ is self-adjoint. Let $U_A$ solve $iU_A'=K_AU_A$, $U_A(0)=I$; [F4] gives existence and uniqueness, and differentiating $U_A^*U_A$ gives unitarity. Differentiating $P^2=P$ yields $PP'P=0$ and $P'P+PP'=P'$, hence $[D,P]=P'$. Therefore $P$ solves $iP'=[K_A,P]$, and so does $F(s)=U_A(s)P(0)U_A(s)^*$. Both have initial value $P(0)$; uniqueness for this finite linear matrix ODE gives $F(s)=P(s)$, or equivalently $U_A(s)P(0)U_A(s)^*=P(s)$. [F1, F4, given, algebra]

2.1 Define the unitary wave operator $\Omega(s)=U_A(s)^*U_T(s)$. Differentiating with the two evolution equations gives $\Omega'(s)=-U_A(s)^*D(s)U_T(s)$ and therefore $\Omega(s)=I-\int_0^sU_A(r)^*D(r)U_A(r)\Omega(r)\,dr$. The intertwining identity in step 1.1 implies that the conjugated kernel is off-diagonal relative to $P(0),Q(0)$ and that $\displaystyle Q(0)\Omega(s)P(0)=-\int_0^s Q(0)P'(r)[r]P(0)\Omega(r)P(0)\,dr,$ where $X[r]=U_A(r)^*X(r)U_A(r)$. [step 1.1, F3, algebra]

3.1 For any differentiable $X$, the commutator identity from [[lem-qa-36-jrs-finite-band-estimates]] and step 1.1 gives $\displaystyle \frac{d}{dr}\bigl(Q(0)\widetilde X[r]P(0)\bigr)=-iTQ(0)X[r]P(0)+Q(0)\dot{\widetilde X}[r]P(0).$ Indeed, $Q[H,\widetilde X]P=-QXP$, and the extra commutator with $iD/T$ has zero $QP$ block because $P[D,\widetilde X]Q=Q[D,\widetilde X]P=0$ when $D$ and $\widetilde X$ are off-diagonal. Integrating this identity by parts in step 2.1 with $X=P'$ and $Y(r)=P(0)\Omega(r)P(0)$ yields $\displaystyle Q(0)\Omega(s)P(0)=-\frac{i}{T}\left[Q(0)\widetilde{P'}[r]P(0)Y(r)\Big|_0^s-\int_0^sQ(0)\dot{\widetilde{P'}}[r]P(0)Y(r)\,dr-\int_0^sQ(0)\widetilde{P'}[r]P(0)P(0)\Omega'(r)P(0)\,dr\right].$ Here $\|Y(r)\|\le1$ and $P(0)\Omega'(r)P(0)=P(0)P'[r]Q(0)\Omega(r)P(0)$, because the $PQ$ block of $[P',P]$ is $-PP'Q$. The last integrand is therefore bounded by $\|Q\widetilde{P'}P\|\|P'\|\|Q(0)\Omega P(0)\|$. Repeating the same calculation with $P(0)$ and $Q(0)$ interchanged bounds $\|P(0)\Omega Q(0)\|$ by the same expression. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Use [F2] on the endpoint and derivative terms of step 3.1, and $\|Q\widetilde{P'}P\|\le\sqrt m\|P'\|/g$ on its product term. Since $\|Q(0)\Omega P(0)\|\le1$, this gives $\displaystyle \|Q(0)\Omega P(0)\|\le\frac1T\left[\frac{\sqrt m\|P'(0)\|}{g(0)}+\frac{\sqrt m\|P'(s)\|}{g(s)}+\int_0^s\left(\frac{\sqrt m\|QP''P\|}{g}+\frac{\sqrt m\|P'\|^2}{g}+\frac{2m\|H'\|\|P'\|}{g^2}\right)dr\right].$ Now $\|P'\|\le\sqrt m\|H'\|/g$. The first two integral terms are respectively at most $m\|H''\|/g^2+4m\sqrt m\|H'\|^2/g^3$ and $m\sqrt m\|H'\|^2/g^3$; the last is at most $2m\sqrt m\|H'\|^2/g^3$. Their sum gives exactly the integrand in $A_m(s)$, and the endpoint terms give its two endpoint summands. The same bound holds for $\|P(0)\Omega Q(0)\|$. [F2, F3, step 3.1, algebra]

5.1 Unitary conjugation by $U_A$ and step 1.1 give $\displaystyle \|U_TP(0)U_T^*-P(s)\|=\|\Omega P(0)\Omega^*-P(0)\|=\|Q(0)\Omega P(0)-P(0)\Omega Q(0)\|.$ The last operator is off-diagonal with the two blocks bounded in step 4.1; its norm is the maximum of their norms, so it is at most $A_m(s)$. For a unit $\psi\in\operatorname{ran}P(0)$, $Q(s)U_T(s)\psi=U_A(s)Q(0)\Omega(s)P(0)\psi$ by step 1.1. Its squared norm is the transition probability and is at most $\|Q(0)\Omega(s)P(0)\|^2\le A_m(s)^2$. [step 1.1, step 4.1, algebra] ∎
