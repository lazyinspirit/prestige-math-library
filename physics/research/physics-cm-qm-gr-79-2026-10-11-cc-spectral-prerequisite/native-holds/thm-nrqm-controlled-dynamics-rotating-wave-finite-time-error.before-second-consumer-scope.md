---
id: thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error
aliases: [nrqm-controlled-dynamics-rotating-wave-finite-time-error]
kind: theorem
domain: mathematics
title: "Rotating-wave finite-time error"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, lem-nrqm-controlled-dynamics-dyson-truncation-bound, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  lem-nrqm-controlled-dynamics-dyson-truncation-bound: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Spin Magnetic Resonance pp. 178-180 and Harmonic Perturbations pp. 181-183 (rotating-wave approximation and its finite-time validity)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (unitary propagators for bounded norm-continuous generators)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space, let $A=A^*\in\mathcal B(H)$ and $B\in\mathcal B(H)$ with
$\omega\in\mathbb R\setminus\{0\}$, and put (units $\hbar=1$)
$$H(t):=A+e^{i\omega t}B+e^{-i\omega t}B^*,\qquad H_{\mathrm{avg}}:=A .$$
Let $U(t,s)$ and $U_{\mathrm{avg}}(t,s)$ be the unitary propagators of
[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]. Then for all
$s\le t$:
$$\bigl\|U(t,s)-U_{\mathrm{avg}}(t,s)\bigr\|\le\frac{4\|B\|}{|\omega|} \Bigl[1+(t-s)\bigl(\|A\|+2\|B\|\bigr)\Bigr].$$
With $\hbar$ restored, replace $A,B$ by $A/\hbar,B/\hbar$, i.e.
$\|U(t,s)-U_{\mathrm{avg}}(t,s)\|\le\frac{4\|B\|}{\hbar|\omega|}[1+\frac{t-s}{\hbar}(\|A\|+2\|B\|)]$.

The bound is linear in $t-s$; it makes no uniform-in-time claim and no claim
about resonance, decay or an unbounded dipole coupling.

## Facts & Assumptions

**Given:** $A=A^*$, $B$ bounded, $\omega\ne0$, the propagators $U,U_{\mathrm{avg}}$, $s\le t$; set $V(r):=H(r)-A=e^{i\omega r}B+e^{-i\omega r}B^*$.

[F1] $H(\cdot)$ is norm-continuous with self-adjoint values and $K=\sup\|H(r)\|\le\|A\|+2\|B\|$, so [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] supplies unitary propagators: $\partial_tU(t,s)=-iH(t)U(t,s)$, $\partial_sU(t,s)=+iU(t,s)H(s)$, and $\partial_sU_{\mathrm{avg}}(t,s)=+iU_{\mathrm{avg}}(t,s)A$ ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], [[def-operator-norm]]).

[F2] The primitive $Z(r):=\frac{e^{i\omega r}}{i\omega}B-\frac{e^{-i\omega r}}{i\omega}B^*$ satisfies $Z'=V$, $\|Z(r)\|\le2\|B\|/|\omega|$ for all $r$, and $Z$ is norm-differentiable ([[def-bounded-linear-operator]], algebra).

[F3] If $G$ is $\mathcal B(H)$-valued $C^1$ on $[s,t]$ then $G(t)-G(s)=\int_s^tG'(r)dr$ and $\|\int G'\|\le\int\|G'\|$ ([[lem-nrqm-controlled-dynamics-dyson-truncation-bound]], [[def-operator-norm]], [[def-hilbert-space]]).

## Proof

1.1 [Duhamel formula] Differentiate $r\mapsto U(t,r)U_{\mathrm{avg}}(r,s)$ using [F1]: $\frac{d}{dr}\bigl[U(t,r)U_{\mathrm{avg}}(r,s)\bigr]=iU(t,r)H(r)U_{\mathrm{avg}}(r,s)-iU(t,r)AU_{\mathrm{avg}}(r,s)=iU(t,r)V(r)U_{\mathrm{avg}}(r,s)$. Integrating from $s$ to $t$ and using $U(t,t)=U_{\mathrm{avg}}(s,s)=I$ gives $U_{\mathrm{avg}}(t,s)-U(t,s)=i\int_s^tU(t,r)V(r)U_{\mathrm{avg}}(r,s)dr$, i.e. $U(t,s)-U_{\mathrm{avg}}(t,s)=-i\int_s^tU(t,r)V(r)U_{\mathrm{avg}}(r,s)dr$. [F1, F3, algebra]

2.1 [Integration by parts] Replacing $V$ by $Z'$ and integrating by parts with [F2] and [F1]: $-i\int_s^tU(t,r)V(r)U_{\mathrm{avg}}(r,s)dr=-i\Bigl[U(t,r)Z(r)U_{\mathrm{avg}}(r,s)\Bigr]_s^t+i\int_s^t\partial_r\bigl[U(t,r)Z(r)U_{\mathrm{avg}}(r,s)\bigr]dr,$ where $-i[U(t,t)Z(t)U_{\mathrm{avg}}(t,s)-U(t,s)Z(s)U_{\mathrm{avg}}(s,s)]=-iZ(t)U_{\mathrm{avg}}(t,s)+iU(t,s)Z(s)$ has norm at most $2\cdot2\|B\|/|\omega|=4\|B\|/|\omega|$; the boundary term of the differentiated integrand is $U(t,r)\bigl(-iH(r)Z(r)+iZ(r)A\bigr)U_{\mathrm{avg}}(r,s)$, whose norm is at most $(\|H(r)\|+\|A\|)\|Z(r)\|\le(2\|A\|+2\|B\|)\cdot2\|B\|/|\omega|$. Integrating over $[s,t]$ gives the stated bound up to the harmless replacement of $\|A\|+2\|B\|$ by its bound. [step 1.1, F1, F2, algebra] ∎
