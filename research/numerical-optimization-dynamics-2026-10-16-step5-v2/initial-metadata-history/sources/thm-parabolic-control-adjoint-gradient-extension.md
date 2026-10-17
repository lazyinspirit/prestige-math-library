---
id: thm-parabolic-control-adjoint-gradient-extension
kind: theorem
title: Parabolic linear-quadratic control has an energy adjoint and reduced gradient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - def-pde-box-control-set
  - lem-parabolic-energy-pairing-and-trace
  - lem-parabolic-projection-time-product-rule
  - thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound
  - thm-parabolic-variational-wellposedness-and-energy-stability
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Christian Clason, Introduction to Finite Element Methods, lecture notes"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
      locator: "Chapter 11, Theorem 11.1, Lemma 11.2, and Theorem 11.3, PDF pp. 99–103: evolution-space traces, integration by parts, and measurable coercive parabolic well-posedness."
---

## Statement

Assume Countable Choice. Let $T>0$ and let $E\subset\mathbb R^d$ be bounded and Lebesgue measurable. Let $V\hookrightarrow H\cong H^*\hookrightarrow V^*$ be a real Gelfand triple with $V$ separable, and let $W=\{w\in L^2(0,T;V):w'\in L^2(0,T;V^*)\}$ have the continuous $H$-valued trace supplied by [[lem-parabolic-energy-pairing-and-trace]]. Let $a(t;\cdot,\cdot)$ be measurable, uniformly bounded and coercive as in [[thm-parabolic-variational-wellposedness-and-energy-stability]]. Let $U=L^2(E\times(0,T))$, let $B:U\to L^2(0,T;V^*)$ be bounded and linear, and let $Q_{ad}=\{q\in U:q_a\le q\le q_b\text{ a.e.}\}$ for $q_a,q_b\in U$, $q_a\le q_b$. For fixed $u_0\in H$, $f\in L^2(0,T;V^*)$, and $u_d\in L^2(0,T;H)$, define the unique state by
$$
u'(t)+A(t)u(t)=f(t)+Bq(t),\quad u(0)=u_0,
$$
where $\langle A(t)v,w\rangle=a(t;v,w)$ and $\langle A(t)^*p,v\rangle=a(t;v,p)$, and define
$$
\widehat J(q)=\tfrac12\|u(q)-u_d\|_{L^2(0,T;H)}^2+\tfrac\alpha2\|q\|_U^2,\qquad \alpha>0.
$$
Then for every $q\in U$ the adjoint $p\in W$ uniquely solves
$$
-p'(t)+A(t)^*p(t)=u(q)(t)-u_d(t),\quad p(T)=0,
$$
and $\widehat J$ is Fr\'echet differentiable with
$$
\nabla\widehat J(q)=B^*p+\alpha q.
$$
Define $B^*p\in U$ by $(B^*p,r)_U=\int_0^T\langle Br,p\rangle_{V^*,V}dt$ for every $r\in U$; boundedness of $B$ and Hilbert-space Riesz representation make it well-defined. The formula requires the terminal/initial traces and time-dependent form hypotheses above; it asserts no finite-element error rate. For the separate finite-element error splitting, assume additionally $u\in H^1(0,T;V)$, $V_h\subset V$ is finite-dimensional, and $P_h\in C^1([0,T];\mathcal L(V,V_h))$ in operator norm. Then its residual derivative is $\rho'=P_h'(t)u+P_h(t)u'-u'$, including the $P_h'(t)u$ term.

## Facts & Assumptions
**Given:** Countable Choice; the real Gelfand triple with separable $V$ and its energy space; the stated bounded, coercive, measurable form; bounded linear $B$; fixed initial and desired data; and $\alpha>0$.

[A1] Countable Choice is the stated axiom for parabolic solvability and Hilbert-space Riesz representation ([[def-countable-choice]], [[thm-riesz-representation-for-hilbert-space]]).

[F1] On the stated separable real evolution triple, for every right-hand side in $L^2(0,T;V^*)$ and initial trace in $H$, the parabolic equation has a unique energy solution in $W$ ([[thm-parabolic-variational-wellposedness-and-energy-stability]]).

[F2] Elements of $W$ have continuous $H$ traces, and for $v,w\in W$ the energy pairing obeys integration by parts, including the endpoint terms ([[def-parabolic-evolution-triple-and-energy-space]], [[lem-parabolic-energy-pairing-and-trace]]).

[F3] Time reversal preserves measurability, boundedness, and coercivity for the transposed form; applying [F1] to the reversed equation gives the terminal adjoint.

[F4] Apply [[def-pde-box-control-set]] to the bounded measurable space-time domain $E\times(0,T)$. It supplies the pointwise box and the real Hilbert structure on $U=L^2(E\times(0,T))$ under Countable Choice, so Hilbert-space Riesz representation defines $B^*p$.

[F5] For the stated separable $V$, if $u\in H^1(0,T;V)$ and $P_h\in C^1([0,T];\mathcal L(V,V_h))$ in operator norm, then $(P_hu)'=P_h'u+P_hu'$ and the parabolic residual contains $P_h'u$ ([[lem-parabolic-projection-time-product-rule]], [[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]]).

## Proof

1.1 For a direction $r\in U$, the state difference $z=u(q+r)-u(q)$ satisfies $z'+A(t)z=Br$ and $z(0)=0$. By [A1, F1] and linearity, $z=S r$ for a bounded linear solution map $S:U\to L^2(0,T;H)$. Expanding the two squared norms gives $\widehat J(q+r)-\widehat J(q)=(u-u_d,z)_{L^2(0,T;H)}+\alpha(q,r)_U+\tfrac12\|z\|_{L^2(0,T;H)}^2+\tfrac\alpha2\|r\|_U^2.$ The last two terms are quadratic in $r$, so the first two terms give the Fr\'echet derivative once the observation residual is paired with $z$. [A1, F1, given, algebra]

2.1 Set $g=u-u_d$ and reverse time: with $s=T-t$, $\tilde p(s)=p(T-s)$, $\tilde g(s)=g(T-s)$, and $\tilde a^*(s;x,y)=a(T-s;y,x)$, the backward equation becomes the forward equation $\langle\tilde p',v\rangle+\tilde a^*(s;\tilde p,v)=(\tilde g,v)_H$ with initial value $\tilde p(0)=0$. The transposed reversed form is measurable, bounded, and coercive with the same constants, so [A1, F1] supplies its unique energy solution; reflecting back proves [F3] and gives $p\in W$. Its weak equation is $\langle-p',v\rangle+a(t;v,p)=(g,v)_H$. By the energy integration-by-parts identity [F2], testing with the state variation $z$ and using $z(0)=0$ and $p(T)=0$ gives $\int_0^T(g,z)_Hdt=\int_0^T\bigl(\langle z',p\rangle+a(t;z,p)\bigr)dt=\int_0^T\langle Br,p\rangle dt=(B^*p,r)_U.$ Therefore the linear term in step 1.1 is $(B^*p,r)_U$, and the derivative is $B^*p+\alpha q$. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Boundedness of $S$ makes the remainder in step 1.1 bounded by $\tfrac12\|S\|^2\|r\|_U^2+\tfrac\alpha2\|r\|_U^2$, which is $o(\|r\|_U)$. Therefore the derivative is Fr\'echet; Riesz representation in [A1] gives the stated gradient. [A1, F4, step 1.1, step 2.1, algebra]

4.1 In the additional finite-element setting of [F5], differentiate $\rho(t)=P_h(t)u(t)-u(t)$ in the weak time sense. The product rule gives $\rho'=P_h'(t)u(t)+P_h(t)u'(t)-u'(t)$. Thus the comparison residual contains the full displayed derivative, including $P_h'u$; the reduced-gradient formula does not authorize dropping it. [F5, given, algebra] ∎

## Remarks

The proof uses the terminal condition on $p$ and the zero initial value of a state variation; omitting either endpoint term would invalidate the adjoint identity.
