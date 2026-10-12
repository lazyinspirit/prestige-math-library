---
id: thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator
aliases: [nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator]
kind: theorem
domain: mathematics
title: "Explicit unbounded oscillator propagator"
status: draft
origin: pipeline
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
$$i\hbar\,\partial_tD(q,p)\psi=\bigl[-p'Q+q'P+\tfrac12(qp'-pq')I\bigr]D(q,p)\psi\quad(\psi\in Y),$$
and the conjugation identity $H_{\mathrm{osc}}D=DH_{\mathrm{osc}}+\bigl[\frac pmP+m\omega^2qQ-\frac{p^2}{2m}-\frac{m\omega^2q^2}{2}\bigr]D$
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

**Given:** CC, $m,\omega,\hbar>0$, the exact oscillator $H_{\mathrm{osc}}$, its Hermite eigenbasis $(\psi_n)$ and graph domain $Y$, the real $C^1$ force $f$, and the Weyl formula in the Statement. Inner products are linear in the first variable. A strong solution means an $L^2$-norm $C^1$ curve taking values in $Y$ and satisfying the equation there; uniqueness is asserted in this class for each initial vector in $Y$. Mild evolution on $L^2$ means the continuous unitary extension of these strong solutions.

[F1] The oscillator is the self-adjoint diagonal operator $H_{\mathrm{osc}}\psi_n=E_n\psi_n$, $E_n=\hbar\omega(n+1/2)$, and finite Hermite sums are a graph core. Its free unitary group multiplies the $n$th coefficient by $e^{-itE_n/\hbar}$, preserves $Y$, is graph-norm continuous on $Y$, and has strong derivative $-iH_{\mathrm{osc}}/\hbar$ on exactly $Y$. These are the explicit diagonal construction and partial-sum conclusions of [[thm-nrqm-oscillator-coherent-evolution-and-variance]] and [[lem-nrqm-oscillator-closed-ladder-domains]]. On Hermite vectors $H_{\mathrm{osc}}$ equals the differential expression $L=-\hbar^2\partial_x^2/(2m)+m\omega^2x^2/2$.

[F2] $Q=M_x$ and $P=-i\hbar\partial_x$ with weak derivative domain are closed self-adjoint operators, and their Hermite ladder formulas extend to $Y$. Only their true graph bounds are used: $\|Q\psi\|\le\ell(2\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2)^{1/2}$ and $\|P\psi\|\le(\hbar/\ell)(2\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2)^{1/2}$. They follow from $\|a\psi\|^2=\|N^{1/2}\psi\|^2$, $\|a^\dagger\psi\|^2=\|N^{1/2}\psi\|^2+\|\psi\|^2$ and $\|u+v\|^2\le2\|u\|^2+2\|v\|^2$ ([[lem-nrqm-oscillator-closed-ladder-domains]]). The corrected common-domain supplier supplies $H(t)=H_{\mathrm{osc}}-f(t)Q$ self-adjoint on $Y$; Weyl invariance is proved below, not presumed in this fact.

[F3] Continuous Banach-valued curves have their norm-valued integral and fundamental theorem of calculus ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]). Closedness extends converging operator graph pairs. Translation and phase multiplication are strongly continuous unitary maps on $L^2$, first by dominated convergence on compact smooth functions and then by density and their unit norms.

## Proof

1.1 Schwartz functions belong to $Y$ and form a graph core. Indeed, for $\varphi\in\mathcal S(\mathbb R)$ the differential expression $L\varphi$ is in $L^2$; integration by parts with the Schwartz eigenfunction $\psi_n$ gives $\langle L\varphi,\psi_n\rangle=E_n\langle\varphi,\psi_n\rangle$. Parseval therefore shows $\sum_n E_n^2|\langle\varphi,\psi_n\rangle|^2=\|L\varphi\|^2<\infty$, proving $\varphi\in Y$ and $H_{\mathrm{osc}}\varphi=L\varphi$ by the exact diagonal domain. Finite Hermite sums are Schwartz and approximate every $Y$ vector in graph norm by [F1], so Schwartz is a graph core. On finite sums the ladder norm estimate in [F2] bounds $Q,P$ by a constant times the $Y$ norm, since $\|N^{1/2}\psi\|^2\le\|N\psi\|\|\psi\|$ and $N=(\hbar\omega)^{-1}H_{\mathrm{osc}}-I/2$. Closedness of $Q,P$ extends these graph bounds and their actions to all of $Y$. [F1, F2, algebra]

1.2 The classical path can be defined without an unproved generic ODE existence invocation: $q(t;s)=(m\omega)^{-1}\int_s^t\sin(\omega(t-r))f(r)dr$ and $p(t;s)=\int_s^t\cos(\omega(t-r))f(r)dr$. Differentiating these continuous integrals gives $q'=p/m$, $p'=-m\omega^2q+f$ and the zero initial data. If two real paths solve the system, the difference satisfies the homogeneous equations and its nonnegative energy $p^2/(2m)+m\omega^2q^2/2$ has derivative zero; its zero initial value forces both differences to vanish. The formulas give joint continuity in $(t,s)$ on the compact triangle, and $S'=f(t)q(t;s)/2$ follows directly from its defining integral. [F3, algebra]

2.1 The Weyl formula is translation followed by multiplication by a unimodular phase, so it is unitary with inverse $D(-q,-p)=D(q,p)^*$. It maps Schwartz onto Schwartz. Differentiation and multiplication there give $QD=D(Q+qI)$ and $PD=D(P+pI)$, hence $H_{\mathrm{osc}}D\varphi=D(H_{\mathrm{osc}}+(p/m)P+m\omega^2qQ+E(q,p)I)\varphi$, where $E(q,p)=p^2/(2m)+m\omega^2q^2/2$. Given $\psi\in Y$, take its finite Hermite partial sums $\varphi_n\to\psi$ in graph norm. By step 1.1 the right-hand side of this identity converges in $L^2$ and $D\varphi_n\to D\psi$; closedness of $H_{\mathrm{osc}}$ gives $D\psi\in Y$ and the same identity there. Applying this inclusion to the inverse gives $D(Y)=Y$. The corresponding $Q,P$ identities extend by their closedness using the same approximants, proving the two asserted conjugations. In particular $D$ is bounded $Y\to Y$, locally uniformly in $(q,p)$. Moving $D H_{\mathrm{osc}}$ to the left in the last identity and replacing $DP$ by $(P-pI)D$, $DQ$ by $(Q-qI)D$, gives the CORRECT output-sided identity $H_{\mathrm{osc}}D=DH_{\mathrm{osc}}+[(p/m)P+m\omega^2qQ-E(q,p)I]D$ on $Y$. Both scalar energy terms have minus signs in this form. [step 1.1, F1, F2, F3, algebra]

3.1 For a fixed $\psi\in Y$, the map $(q,p)\mapsto D(q,p)\psi$ is continuous in $Y$: its $L^2$ continuity is [F3], and its $H_{\mathrm{osc}}$ image is the continuous expression $D(q,p)[H_{\mathrm{osc}}+(p/m)P+m\omega^2qQ+E(q,p)I]\psi$ from step 2.1. On a $C^1$ path differentiate the Weyl formula on Schwartz, where ordinary dominated differentiation is valid. With $P D=D(P+pI)$ this gives $i\hbar D'\varphi=[-p'Q+q'P+(qp'-pq')I/2]D\varphi$. To extend rigorously, approximate $\psi$ by Schwartz graph-core vectors $\varphi_n$. On a compact time interval, the local uniform graph bound in step 2.1 and bounded $Q,P:Y\to L^2$ show that both $D(t)\varphi_n\to D(t)\psi$ and the proposed derivatives converge uniformly in $L^2$. For each $n$ integrate the derivative identity between a fixed base time and $t$ by [F3]; uniform convergence permits taking the integral limit. The limiting right-hand side is continuous, by the $Y$ continuity just proved and continuity of $q',p'$. Applying [F3] again proves the strong derivative for $\psi$ and the CORRECT scalar $(qp'-pq')/2$. This proves all of (a), including its domain and differentiability assertions. [step 1.1, step 2.1, F2, F3, algebra]

4.1 Put $A=H_{\mathrm{osc}}$, $F(t)=e^{-i(t-s)A/\hbar}$, $c_D=(qp'-pq')/2$ and $X=(p/m)P+m\omega^2qQ-E(q,p)I$. The unitary family $U=e^{iS/\hbar}DF$ preserves $Y$ by steps 2.1 and [F1]. Its product derivative on $Y$ is legitimate: for fixed $\psi\in Y$ expand $D(t+h)F(t+h)\psi-D(t)F(t)\psi$ as $D(t+h)[F(t+h)-F(t)]\psi+[D(t+h)-D(t)]F(t)\psi$. The first quotient tends to $D(t)(-iA/\hbar)F(t)\psi$ by free strong differentiation, strong continuity and unit norm of $D$; the second tends to $D'(t)F(t)\psi$ by step 3.1 for the fixed vector $F(t)\psi\in Y$. Thus $i\hbar U'=e^{iS/\hbar}[A-X-S'-p'Q+q'P+c_D I]DF$ on $Y$. The $P$ coefficient is $q'-p/m=0$, the $Q$ coefficient is $-p'-m\omega^2q=-f$, and the scalar is $-S'+c_D+E(q,p)=-fq/2+[q(f-m\omega^2q)-p^2/m]/2+p^2/(2m)+m\omega^2q^2/2=0$. Hence the unchanged final phase $S'=fq/2$ gives $i\hbar\partial_tU=H(t)U$. Step 3.1, the graph-continuous free factor and the locally uniform graph bounds also imply that $U(t,s)\psi$ is continuous in $Y$, so the displayed derivative is continuous in $L^2$ because $H(t):Y\to L^2$ is continuous. Finally zero initial data give $U(s,s)=I$. [step 2.1, step 3.1, step 1.2, F1, F2, F3, algebra]

5.1 Let $v(t)$ and $w(t)$ be two $Y$-valued strong solutions with the same initial vector. Their difference $z$ is $L^2$-norm differentiable and solves $z'=-iH(t)z/\hbar$. The norm derivative is $\partial_t\|z(t)\|^2=2\operatorname{Re}\langle z',z\rangle=2\operatorname{Re}[-i\langle H(t)z,z\rangle/\hbar]=0$, because $H(t)$ is symmetric and the expectation is real. Since $z(s)=0$, $z=0$. This proves uniqueness without a bound on an unbounded $L^2$ Hamiltonian or an invalid norm-factorial iteration. For $r\le s\le t$, both $U(t,r)\psi$ and $U(t,s)U(s,r)\psi$ solve the same strong equation with initial vector $U(s,r)\psi\in Y$ at $s$, so uniqueness gives the cocycle on $Y$, then on $L^2$ by density. Joint strong continuity on $L^2$ follows from the explicit continuous classical paths and phase, free strong continuity and unitarity. Since $Y$ is dense, graph-domain solutions approximating an arbitrary initial $L^2$ vector converge uniformly in $t$ in $L^2$, with error equal to the initial norm error; this is the asserted continuous mild evolution. The inverses are unitary and preserve $Y$ as well; if the cocycle is desired for all time orders, set $U(s,t)=U(t,s)^*$ and use this extension. [step 2.1, step 1.2, step 4.1, F1, F2, F3, algebra]

6.1 If $f=0$, step 1.2 gives $q=p=S=0$, so $U(t,s)=e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$. The diagonal coefficient formula of [F1] applied to the convergent coherent expansion gives $U(t,s)\psi_z=e^{-i\omega(t-s)/2}\psi_{ze^{-i\omega(t-s)}}$. Thus (b), (c), the exact propagator and all original domain/range assertions hold with the corrected Weyl identities. [step 1.2, step 4.1, step 5.1, F1, algebra] ∎

## Research boundary

This research-only repair changes the two false public Weyl identities while preserving the entire propagator, $S'=fq/2$, CC, graph-domain invariance, strong equation, uniqueness, mild evolution, cocycle and coherent check. It supplies the missing graph-core/closedness/inverse argument. The sole spectral successor owns mathematical acceptance, complete old/current consumer maintenance, integration and native caps. No production carrier, shared metadata, mirror, readiness or plan was edited. In particular [F2] relies on the owning corrected common-domain body, not its current false ladder estimate or AC Kato premise. The underlying oscillator suppliers retain their native status; no independent acceptance or source-reading attestation is made here. Dependency metadata and exact current supplier hashes must be reconciled by the successor before integration. Conditional on those exact suppliers, no further analytic gap is claimed by this author.
