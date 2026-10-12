---
id: thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
aliases: [nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]
kind: theorem
domain: mathematics
title: "Norm Dyson series and uniqueness"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-riesz-representation-for-hilbert-space, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-linearity-of-the-bochner-integral, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, def-countable-choice]
dependency_roles:
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-linearity-of-the-bochner-integral: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (quantum dynamics, Stone's theorem) and Chapter 12 pp. 245-256 (scattering theory, Cook's Lemma 12.3)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Time-Dependent Perturbation Theory pp. 175-182 (perturbation expansion and the two-state system)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an arbitrary complex Hilbert space ([[def-hilbert-space]]), $I=[a,b]\subset\mathbb R$ a nonempty compact interval, $\hbar>0$, and $\mathcal H:I\to\mathcal B(H)$ a norm-continuous family of bounded self-adjoint operators. Put $A(t)=-i\mathcal H(t)/\hbar$ and $K=\sup_{t\in I}\|A(t)\|<\infty$. For every $s,t\in I$ define $U_0(t,s)=I_H$ and, recursively, the oriented Bochner integrals
$$U_{n+1}(t,s)=\int_s^t A(r)U_n(r,s)\,dr,$$
where $\int_s^t=-\int_t^s$ when $t<s$. Equivalently, for $s\le t$ these are the **latest-time-left** ordered integrals
$$U_n(t,s)=\Bigl(\frac{-i}{\hbar}\Bigr)^n\int_{s<t_1<\cdots<t_n<t}\mathcal H(t_n)\cdots\mathcal H(t_1)\,dt_1\cdots dt_n,$$
with the simplex integral meaning the nested integral with $t_n$ outermost and $t_1$ innermost. For arbitrary $s,t$ its unambiguous nested form is $\int_s^t dr_1\int_s^{r_1}dr_2\cdots\int_s^{r_{n-1}}dr_n\,A(r_1)\cdots A(r_n)$. Then:

(a) $\|U_n(t,s)\|\le(K|t-s|)^n/n!$ for all $n\ge0$ and all $s,t\in I$.

(b) $U(t,s)=\sum_{n\ge0}U_n(t,s)$ converges in operator norm uniformly on $I\times I$, is jointly norm-continuous, satisfies $U(s,s)=I_H$, and obeys $\|U(t,s)-I_H\|\le e^{K|t-s|}-1$. In particular all original forward-time convergence claims hold.

(c) For every $s,t\in I$,
$$U(t,s)=I_H-\frac{i}{\hbar}\int_s^t\mathcal H(r)U(r,s)\,dr.$$
For fixed $s$ this is the unique continuous $\mathcal B(H)$-valued solution on $I$. More generally, the solution with initial value $C\in\mathcal B(H)$ at $s$ is $U(t,s)C$. For $a<b$, the operator-norm derivatives are
$$\partial_tU(t,s)=-\frac{i}{\hbar}\mathcal H(t)U(t,s),\qquad \partial_sU(t,s)=+\frac{i}{\hbar}U(t,s)\mathcal H(s),$$
with the corresponding one-sided derivatives at the endpoints. Therefore, for every $\psi\in H$, $U(t,s)\psi$ is strongly continuously differentiable in either variable and satisfies the same equations applied to $\psi$, with the common bounded-generator domain equal to all of $H$.

(d) Every $U(t,s)$ is unitary, $U(t,s)^*=U(s,t)=U(t,s)^{-1}$, and
$$U(t,s)U(s,r)=U(t,r)\qquad(r,s,t\in I).$$
These conclusions include both orientations of the time interval and intervals containing positive and negative times. If $a=b$, all terms with $n\ge1$ vanish and $U(a,a)=I_H$; the derivative assertions then have no nontrivial interval on which to apply.

No separability hypothesis on $H$, invariant domain for an unbounded operator, differentiability of $\mathcal H$, spectral theorem or physical interpretation is required.

## Facts & Assumptions

**Given:** CC, arbitrary complex Hilbert space $H$, compact real interval $I=[a,b]$, norm-continuous self-adjoint-valued $\mathcal H$, $\hbar>0$, and $A=-i\mathcal H/\hbar$ with bound $K$. The identity on $H$ is $I_H$.

[F1] Bounded operators have $\|BC\|\le\|B\|\|C\|$, $\|B^*\|=\|B\|$, and adjoint reverses products ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). The Hilbert space $H$ is complete ([[def-hilbert-space]]). No assertion that $\mathcal B(H)$ is finite dimensional is made.

[F2] Strongly measurable Banach-valued functions with integrable norm are Bochner integrable ([[thm-bochner-integrability-criterion]]), their integrals satisfy the norm inequality ([[lem-bochner-integral-norm-inequality]]), and integration is linear ([[lem-linearity-of-the-bochner-integral]]). For a continuous curve on a compact interval, grid step functions constructed by evaluating the curve at prescribed partition endpoints converge uniformly, so it is strongly measurable and integrable. This works in $\mathcal B(H)$ without assuming that $H$ or $\mathcal B(H)$ is separable.

[F3] A continuous Banach-valued integrand has a continuously differentiable primitive, and integration of a continuous derivative gives its endpoint difference ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]). The supplier assumes CC. Passing a uniform limit through an integral follows directly from [F2], since the integral error is bounded by interval length times the uniform error. Bounded left/right multiplication commutes with an integral: this holds for simple approximants and passes to their norm limit.

[F4] Hilbert-space Riesz representation ([[thm-riesz-representation-for-hilbert-space]]) assumes CC and applies to arbitrary Hilbert spaces. For $B\in\mathcal B(H)$ and $y\in H$, the bounded linear functional $x\mapsto\langle Bx,y\rangle$ has a unique representing vector $B^*y$. Uniqueness makes $B^*$ linear, the norm identity gives $\|B^*y\|\le\|B\|\|y\|$, and the inner-product identity gives adjoint product rules and $\|B^*\|=\|B\|$. Thus adjoints in this proof require only this CC supplier, not a basis or spectral theorem.

## Proof

1.1 [The operator Banach algebra and the bounded coefficient] For an operator-norm Cauchy sequence $(B_j)$, each $(B_j\psi)$ is Cauchy in $H$ and has a unique limit; define $B\psi=\lim_jB_j\psi$. The limit is linear and $\|B\psi\|\le M\|\psi\|$ for $M=\sup_j\|B_j\|<\infty$. For sufficiently large $j,k$, $\|(B_j-B_k)\psi\|\le\varepsilon\|\psi\|$; letting $k\to\infty$ gives $\|B_j-B\|\le\varepsilon$. Thus $\mathcal B(H)$ is complete, even for nonseparable or zero-dimensional $H$. This construction uses unique limits for all $\psi$, not a choice of a basis or of unrelated representatives. Norm continuity on compact $I$ makes $K$ finite. The bounded adjoint construction in [F4] applies on arbitrary $H$; $A(t)^*=-A(t)$ follows from self-adjointness of $\mathcal H(t)$. [F1, F4, given, construct, algebra]

2.1 [Oriented nested integrals and their fixed parameter region] For $D=t-s$ and $n\ge1$, substitution in the defining nested integrals gives $U_n(t,s)=D^n\int_0^1d\xi_1\int_0^{\xi_1}d\xi_2\cdots\int_0^{\xi_{n-1}}d\xi_n\,A(s+D\xi_1)\cdots A(s+D\xi_n)$. This formula follows by replacing each $r_j$ with $s+D\xi_j$ successively; it remains valid for $D<0$ because each oriented differential contributes its signed factor $D$. The integrands are continuous and bounded on the fixed closed region $0\le\xi_n\le\cdots\le\xi_1\le1$, and their successive integrals exist by [F2]. Thus every $U_n$ is defined. For $D\ge0$ relabel $t_j=r_{n+1-j}$ to obtain exactly the latest-time-left simplex in the Statement, without invoking a Banach-valued product-measure Fubini theorem. At $D=0$ all positive-order terms are zero. [step 1.1, F2, F3, given, construct, algebra]

3.1 [Factorial bound and joint continuity] The repeated integral of the constant $1$ over the fixed region in step 2.1 is $1/n!$, by successive elementary integration. The norm inequality and submultiplicativity give $\|U_n(t,s)\|\le|D|^nK^n/n!$; for $n=0$, $\|I_H\|\le1$, including $H=\{0\}$. This proves (a) for both time directions. If $(s',t')\to(s,t)$, the points $s'+(t'-s')\xi$ converge uniformly for $0\le\xi\le1$ to $s+D\xi$. Uniform continuity of $A$ on $I$ and the telescoping product identity make the products in step 2.1 converge uniformly in all $\xi_j$; the scalar factor $(t'-s')^n$ also converges. The norm inequality through the fixed nested integrals proves joint norm continuity of each $U_n$. [step 2.1, F1, F2, given, algebra]

4.1 [Uniform convergence and the Volterra equation] The uniform bound $(K(b-a))^n/n!$ has summable series, so completeness from step 1.1 gives a uniformly operator-norm convergent sum $U$ on $I^2$. The sum is norm-continuous, and summing the positive-order bounds gives $\|U-I_H\|\le e^{K|t-s|}-1$. The terms at $t=s$ give $U(s,s)=I_H$. Summing the defining recursion and passing the uniform limit through its oriented integral by [F3] gives $U(t,s)=I_H+\int_s^tA(r)U(r,s)dr$ for all $s,t$. This proves (b) and the identity in (c). [step 1.1, step 2.1, step 3.1, F2, F3, given, algebra]

5.1 [Derivatives and uniqueness on both sides of the initial time] For fixed $s$, the integrand $A(r)U(r,s)$ is norm-continuous; [F3] applied to step 4.1 gives $\partial_tU=A(t)U$ and its endpoint one-sided versions. For uniqueness with arbitrary initial $C$, let $W$ be another continuous solution and $E(t)=W(t)-U(t,s)C$. Then $E(t)=\int_s^tA(r)E(r)dr$ and $M=\sup_{t\in I}\|E(t)\|<\infty$. Iterating this identity $N$ times along the oriented segment between $s$ and $t$, and taking norms using its fixed region from step 2.1, yields $\|E(t)\|\le M(K|t-s|)^N/N!$. The bound tends to zero for each $t$; hence $E=0$ on all $I$. This also proves uniqueness for a bounded continuous operator coefficient with any norm bound, and for right multiplication or a sum of left/right multiplication, since these are bounded linear operators on the Banach space $\mathcal B(H)$. [step 1.1, step 2.1, step 4.1, F1, F2, F3, given, algebra]

6.1 [Isometry and surjectivity are separate deductions] Operator-norm differentiability permits the product rule and differentiation of adjoints. For fixed $s$, $G(t)=U(t,s)^*U(t,s)$ has $G'=U^*(A^*+A)U=0$, so [F3] gives $G=I_H$. This establishes isometry. To prove surjectivity, put $Q(t)=U(t,s)U(t,s)^*$. Its derivative is $Q'=A(t)Q-QA(t)$ and $Q(s)=I_H$; this derivative is not assumed to vanish by cancellation. The constant function $I_H$ solves the same equation. The linear coefficient $T_t(B)=A(t)B-BA(t)$ has norm at most $2K$ and is norm-continuous. The uniqueness argument in step 5.1, with coefficient $T_t$ and bound $2K$, shows $Q=I_H$. Thus $U$ is unitary for every $s,t$, including $t<s$. [step 1.1, step 5.1, F1, F3, given, algebra]

7.1 [Cocycle, reverse propagator and lower-start derivative] Fix any $r,s\in I$. Both $t\mapsto U(t,r)$ and $t\mapsto U(t,s)U(s,r)$ satisfy $X'=A(t)X$ throughout $I$ and have value $U(s,r)$ at $t=s$, so step 5.1 gives $U(t,r)=U(t,s)U(s,r)$ for every $t$. Taking $r=t$ gives $U(t,s)U(s,t)=I_H$, and step 6.1 identifies $U(s,t)=U(t,s)^*$. Now fix the reference endpoint $a$. The cocycle gives $U(t,s)=U(t,a)U(s,a)^*$. Differentiating in $s$ using the already proved upper-time derivative of $U(s,a)$ gives $\partial_sU(t,s)=U(t,a)(A(s)U(s,a))^*=-U(t,s)A(s)=iU(t,s)\mathcal H(s)/\hbar$, with the endpoint one-sided interpretations. This proves (d) and completes (c). [step 5.1, step 6.1, F1, F3, given, algebra]

8.1 [Strong equations, domains and choice ledger] For any $\psi\in H$, applying the operator-norm difference quotients to $\psi$ gives the stated strong derivative equations and their continuity. Every $\mathcal H(t)$ is a bounded operator with domain all $H$, so no invariant unbounded domain is hidden in this assertion. All constructions use explicit grid simple approximants, countable series and uniquely defined limits; no basis selection, spectral representation, or Stone theorem is used for arbitrary $H$. The declared CC hypothesis is retained at the Lebesgue/Bochner and FTC interfaces [F2]–[F3], and through Hilbert Riesz for the adjoints in [F4]. If $a=b$ every oriented integral has length zero and the identities reduce to $I_H$ as stated. Steps 3.1, 4.1, 5.1 and 7.1, 6.1 and 7.1 establish all four claims. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, F1, F2, F3, given, algebra] ∎

## Research evidence: exact noncommuting two-state check

Take $H=\mathbb C^2$, $\hbar=1$, $I=[0,T]$ with $T>0$, $P=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $Q=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\mathcal H(t)=P+tQ$. This is a norm-continuous bounded self-adjoint family; $P^2=Q^2=I_2$, $PQ=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and $QP=-PQ$. The corrected second term is $U_2(T,0)=-[T^2I_2/2+T^3PQ/6+T^3QP/3+T^4I_2/8]$. The earliest-left term in the read carrier is $E_2(T,0)=-[T^2I_2/2+T^3PQ/3+T^3QP/6+T^4I_2/8]$. Their difference is $U_2-E_2=(T^3/6)(PQ-QP)=T^3PQ/3\ne0$. The recursion requires $U_2'(T,0)=-\mathcal H(T)\int_0^T\mathcal H(r)dr$; the earliest-left term instead differentiates to $-\int_0^T\mathcal H(r)dr\,\mathcal H(T)$. At $T=1$ the failed left-generator residual $E_2'-A(T)U_1$ equals $-PQ\ne0$. Introducing a real scalar coupling $\lambda\mathcal H(t)$ separates this defect at order $\lambda^2$; higher Dyson terms cannot repair the second-order coefficient. This verifies the ordering defect for an actual noncommuting continuous matrix family, rather than commuting scalar examples.

## Proposed changes and owning work remaining

This research draft corrects the public earliest-left simplex to latest-left and defines the reverse-time extension by exact oriented integrals. It preserves the arbitrary-Hilbert-space, bounded norm-continuous self-adjoint, CC, factorial estimates, norm differentiability, unitarity and cocycle scope, and makes both time directions and the all-$H$ strong domain explicit. The degenerate compact interval is treated without asserting a derivative on an isolated point. Research frontmatter removes the unused general Stone supplier and adds the existing FTC, Bochner-linearity and CC Hilbert-Riesz suppliers actually used. It does not claim that a separable-only spectral calculus suffices for arbitrary $H$; this bounded proof needs no spectral calculus.

The current production truncation lemma's public remainder also has reversed operator order and the wrong residual-time endpoint. With the corrected simplex it must use $\mathcal H(t_{N+1})\cdots\mathcal H(t_1)U(t_1,s)$; merely reversing the product and keeping $U(t_{N+1},s)$ does not repair it. The current strong interaction-picture theorem additionally needs a direct strong-integral construction, because strong continuity of $V_I$ need not imply the norm continuity required by this supplier. These are exact consumer-context findings, not acceptance or a complete consumer-cone review. Production/mirror edits, old/current/alias consumer closure, metadata integration, readiness and native review-history/caps belong solely to the spectral successor. No local mathematical proof gap remains in this bounded norm-continuous construction; independent acceptance and the affected consumer work remain open.
