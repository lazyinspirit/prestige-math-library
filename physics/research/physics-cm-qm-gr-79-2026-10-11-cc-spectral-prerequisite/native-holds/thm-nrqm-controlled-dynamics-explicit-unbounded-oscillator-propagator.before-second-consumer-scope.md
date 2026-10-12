---
id: thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator
aliases: [nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator]
kind: theorem
domain: mathematics
title: "Explicit unbounded oscillator propagator"
status: draft
origin: pipeline
dependency_level: 7
deps: [thm-nrqm-controlled-dynamics-driven-oscillator-common-domain, thm-nrqm-oscillator-coherent-evolution-and-variance, lem-nrqm-oscillator-closed-ladder-domains, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-driven-oscillator-common-domain: mathematical-premise
  thm-nrqm-oscillator-coherent-evolution-and-variance: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
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
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (unitary dynamics) and Chapter 8 pp. 173-180 (oscillator algebra)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Simple Harmonic Oscillator pp. 80-84 (coherent states and the classical solution of the driven oscillator)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
notation of [[thm-nrqm-controlled-dynamics-driven-oscillator-common-domain]]:
$m,\omega,\hbar>0$, $\ell=\sqrt{\hbar/(m\omega)}$, $Q,P$ the position and
momentum operators, $H_{\mathrm{osc}}=\frac{P^2}{2m}+\frac{m\omega^2}{2}Q^2$ with
domain $Y=D(H_{\mathrm{osc}})$, $f\in C^1([a,b];\mathbb R)$ and
$H(t)=H_{\mathrm{osc}}-f(t)Q$ self-adjoint on $Y$. For real $q,p$ define the
Weyl operator
$$D(q,p)\psi(x):=e^{ip(x-q/2)/\hbar}\,\psi(x-q).$$
For $s\le t$ in $[a,b]$ let $q(\cdot;s),p(\cdot;s)$ be the unique $C^1$ solution
of $q'=p/m$, $p'=-m\omega^2q+f$, $q(s)=p(s)=0$, and put
$S(t,s):=\int_s^tf(r)q(r)/2\,dr$. Then:

(a) $D(q,p)$ is unitary on $L^2(\mathbb R,dx)$, preserves $Y$, and on $Y$ the
identities $D(q,p)^*QD(q,p)=Q+qI$, $D(q,p)^*PD(q,p)=P+pI$ hold; along a $C^1$
trajectory $t\mapsto(q(t),p(t))$ one has
$$i\hbar\,\partial_tD(q,p)\psi=\bigl[-p'Q+q'P+\tfrac12(pq)'I\bigr]D(q,p)\psi\quad(\psi\in Y),$$
and the conjugation identity $H_{\mathrm{osc}}D=DH_{\mathrm{osc}}+\bigl[\frac pmP+m\omega^2qQ+\frac{p^2}{2m}-\frac{m\omega^2q^2}{2}\bigr]D$
holds on $Y$.

(b) The family
$$U(t,s):=e^{iS(t,s)/\hbar}D(q(t,s),p(t,s))e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$$
is unitary, $U(s,s)=I$, preserves $Y$, satisfies the strong Schrödinger
equation $i\hbar\,\partial_tU(t,s)\psi=H(t)U(t,s)\psi$ for every $\psi\in Y$,
and provides the unique solution of that equation with $U(s,s)=I$; by density it
gives strongly continuous mild evolution on all of $L^2(\mathbb R,dx)$, with
the cocycle property on $[a,b]$.

(c) *Coherent-state check.* If $\psi_z$ is the coherent vector of
[[thm-nrqm-oscillator-coherent-evolution-and-variance]] and $f\equiv0$, then
$U(t,s)\psi_z=e^{-i\omega(t-s)/2}\psi_{ze^{-i\omega(t-s)}}$, recovering the
undriven dynamics.

No statement about arbitrary unbounded potentials or varying domains is made.

## Facts & Assumptions

**Given:** the oscillator data of
[[thm-nrqm-controlled-dynamics-driven-oscillator-common-domain]]; $f\in C^1$;
the solution $(q,p)$; $S$; $s\le t$ in $[a,b]$.

[F1] $Y=D(H_{\mathrm{osc}})$ is invariant under the free evolution $e^{-i\tau H_{\mathrm{osc}}/\hbar}$ and under $D(q,p)$; $Q,P$ map $Y$ boundedly into $L^2$, and on $Y$ one has $H_{\mathrm{osc}}=\frac{P^2}{2m}+\frac{m\omega^2}2Q^2$ ([[thm-nrqm-controlled-dynamics-driven-oscillator-common-domain]], [[thm-nrqm-oscillator-coherent-evolution-and-variance]], [[lem-nrqm-oscillator-closed-ladder-domains]]).

[F2] The Weyl operator is unitary (translation composed with multiplication by a unimodular function) and satisfies $D^*QD=Q+qI$, $D^*PD=P+pI$ on the common domain, by the product rule on smooth compact vectors and graph-norm extension ([[thm-nrqm-oscillator-coherent-evolution-and-variance]], [[def-operator-norm]], [[def-hilbert-space]]).

[F3] Linear ODE with continuous coefficients: the system $q'=p/m$, $p'=-m\omega^2q+f$ has a unique $C^1$ solution on $[a,b]$ for each initial data, by the fundamental theorem of calculus for Banach-valued curves applied to the equivalent integral equation ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F4] $S'=fq/2$ by the fundamental theorem of calculus ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

## Proof

1.1 [Differentiating the explicit propagator] Put $q=q(t,s)$, $p=p(t,s)$. On $Y$, [F2] gives $i\hbar\,\partial_tD=[-p'Q+q'P+\frac12(pq)'I]D$ and $H_{\mathrm{osc}}D=DH_{\mathrm{osc}}+XD$ with $X:=\frac pmP+m\omega^2qQ+\frac{p^2}{2m}-\frac{m\omega^2q^2}2$, whence $DH_{\mathrm{osc}}=H_{\mathrm{osc}}D-XD$. Therefore, with $E:=e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$ and $U=e^{iS/\hbar}DE$, one has $i\hbar\,\partial_tU=e^{iS/\hbar}[-S'+\frac12(pq)'-p'Q+q'P]DE+e^{iS/\hbar}DH_{\mathrm{osc}}E=e^{iS/\hbar}[H_{\mathrm{osc}}-X-S'+\frac12(pq)'-p'Q+q'P]DE$. Substituting $q'=p/m$, $p'=f-m\omega^2q$ and $S'=fq/2$ (so that $\frac12(pq)'=\frac12(p'q+pq')=\frac{fq}{2}-\frac{m\omega^2q^2}{2}+\frac{p^2}{2m}$) makes the bracket equal to $H_{\mathrm{osc}}-fQ$: the $P$-coefficient is $q'-\frac pm=0$, the $Q$-coefficient is $-p'-m\omega^2q=-f$, and the scalar terms are $-S'+\frac12(pq)'-\frac{p^2}{2m}+\frac{m\omega^2q^2}{2}=-\frac{fq}2+\bigl(\frac{fq}2-\frac{m\omega^2q^2}2+\frac{p^2}{2m}\bigr)-\frac{p^2}{2m}+\frac{m\omega^2q^2}2=0$. Hence $i\hbar\partial_tU=H(t)U$ on $Y$. [F1, F2, F3, F4, algebra]

2.1 [Uniqueness and mild evolution] If $V$ is another $Y$-valued strong solution with $V(s,s)=I$, then $\eta:=U-V$ satisfies $\eta(t)=\int_s^t(-i/\hbar)H(r)\eta(r)dr$; iterating gives $\|\eta(t)\|\le C^n(t-s)^n/n!\sup\|\eta\|$ for all $n$, so $\eta=0$; alternatively differentiate $\|\eta(t)\psi\|^2$ in $t$ and use self-adjointness of $H(t)$. Since $U(t,s)$ is unitary on $L^2$ and $Y$ is dense, bounded extension gives strong continuity and the cocycle property on $L^2$ (the composition of the explicit unitaries at $(t,s)$ and $(s,r)$ agrees with the one at $(t,r)$ on $Y$ by uniqueness, hence everywhere). [step 1.1, F1, F2, algebra]

3.1 [Undriven check] For $f\equiv0$ one has $q\equiv p\equiv0$, $S\equiv0$, so $U(t,s)=e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$ and the coherent-state formula is the one proved in [[thm-nrqm-oscillator-coherent-evolution-and-variance]] (c). [step 1.1, F1, algebra] ∎
