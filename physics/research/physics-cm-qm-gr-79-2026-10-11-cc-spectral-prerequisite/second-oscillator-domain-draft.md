---
id: thm-nrqm-controlled-dynamics-driven-oscillator-common-domain
aliases: [nrqm-controlled-dynamics-driven-oscillator-common-domain]
kind: theorem
domain: mathematics
title: "Driven oscillator common domain"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, lem-nrqm-oscillator-closed-ladder-domains, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution, thm-nrqm-oscillator-hermite-recurrence, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-dominated-convergence, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-136 (Kato-Rellich) and Chapter 8 pp. 173-180 (algebraic oscillator methods)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Simple Harmonic Oscillator pp. 80-84 (ladder operators and the ground state)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$m,\omega,\hbar>0$, let $\ell:=\sqrt{\hbar/(m\omega)}$, let
$H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$ be the oscillator of
[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] with
orthonormal eigenbasis $(\psi_n)_{n\ge0}$ and ladder operators
$a_\psi,a_\psi^\dagger,N_\psi$ of [[lem-nrqm-oscillator-closed-ladder-domains]]
transported to $L^2(\mathbb R,dx)$, and let
$Q=M_x$, $P=\mathcal F_2^*M_{2\pi\hbar\xi}\mathcal F_2$ be the maximal
position and momentum operators (their self-adjointness is proved below), with
$D(Q)=\{\psi:x\psi\in L^2\}$ and
$D(P)=\{\psi:\xi\mathcal F_2\psi\in L^2\}$, with
$H_{\mathrm{osc}}=\hbar\omega(N_\psi+\frac12I)$ and the couplings
$$Q=\frac{\ell}{\sqrt2}(a_\psi+a_\psi^\dagger),\qquad P=\frac{\hbar}{i\ell\sqrt2}(a_\psi-a_\psi^\dagger)$$
on the common domain $D(N_\psi^{1/2})$. Let $f:[a,b]\to\mathbb R$ be of class
$C^1$. Put $Y:=D(H_{\mathrm{osc}})=D(N_\psi)$ with graph norm
$\|\psi\|_Y^2:=\|\psi\|^2+\|H_{\mathrm{osc}}\psi\|^2$. Then:

(a) *Ladder bounds.* For every $\psi\in D(N_\psi^{1/2})$,
$$\|Q\psi\|\le\ell\bigl(2\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2\bigr)^{1/2},\qquad \|P\psi\|\le\frac{\hbar}{\ell}\bigl(2\|N_\psi^{1/2}\psi\|^2+\|\psi\|^2\bigr)^{1/2}.$$

(b) *Infinitesimal bound.* For every $\eta>0$ there is $b_\eta<\infty$ with
$\|Q\psi\|\le\eta\|H_{\mathrm{osc}}\psi\|+b_\eta\|\psi\|$ for
$\psi\in Y=D(H_{\mathrm{osc}})$; hence $-f(t)Q$ is
$H_{\mathrm{osc}}$-bounded with relative bound $0$ for every fixed $t$
([[def-relative-boundedness-with-respect-to-an-operator]]).

(c) *Common domain.* For every $t\in[a,b]$ the operator
$H(t):=H_{\mathrm{osc}}-f(t)Q$ is self-adjoint on the single domain $Y$
(independent of $t$); moreover $t\mapsto H(t)$ belongs to
$C^1([a,b];\mathcal B(Y,L^2))$ with derivative $-f'(t)Q$, so the family has a
common domain and satisfies the regularity hypothesis of
[[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]].

## Facts & Assumptions

**Given:** CC; $m,\omega,\hbar>0$, $\ell=\sqrt{\hbar/(m\omega)}$; the scaled Hermite basis $(\psi_n)$ and its diagonal oscillator $A:=H_{\mathrm{osc}}$; $f\in C^1([a,b];\mathbb R)$; $Y=D(A)$ with its stated graph norm. Write $c:=\hbar\omega>0$.

[F1] [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] assumes CC and supplies the exact diagonal domain $Y=\{\psi:\sum_n c^2(n+1/2)^2|\langle\psi,\psi_n\rangle|^2<\infty\}$, self-adjointness of $A$, its closedness and graph-core finite sums. This is also $D(N_\psi)$, with $A=c(N_\psi+I/2)$; the equality follows directly from the displayed coefficient actions. Its graph domain is a Hilbert space because its graph is closed in $L^2\oplus L^2$.

[F2] [[lem-nrqm-oscillator-closed-ladder-domains]] supplies the exact shifted coefficient actions under CC. Define $N_\psi^{1/2}$ directly by $(N_\psi^{1/2}\psi)_n=\sqrt n\,c_n$ on $\{\psi:\sum_n n|c_n|^2<\infty\}$, where $c_n=\langle\psi,\psi_n\rangle$. For this domain, $\|a_\psi\psi\|^2=\sum_n n|c_n|^2=:A_\psi$ and $\|a_\psi^\dagger\psi\|^2=A_\psi+\|\psi\|^2$. Finite coefficient truncations converge in both ladder graph norms.

[F3] [[thm-nrqm-oscillator-hermite-recurrence]] gives $\sqrt2\,yg_n=\sqrt n\,g_{n-1}+\sqrt{n+1}g_{n+1}$ and $\sqrt2\,g_n'=\sqrt n\,g_{n-1}-\sqrt{n+1}g_{n+1}$. Scaling by the actual $D$ gives the finite-basis formulas for $Q$ and $P$ used below. [[thm-plancherel]] and [[lem-weak-derivatives-are-polynomial-fourier-multipliers]] assume CC and identify $P\psi_n=-i\hbar\psi_n'$ via its exact Fourier multiplier. Every $\psi_n$ and its derivative belong to $L^2$.

[F4] The adjoint-domain definition [[def-adjoint-of-a-densely-defined-unbounded-operator]] and closedness of adjoints [[lem-unbounded-adjoint-is-well-defined-and-closed]] are CC interfaces. A vector $y$ belongs to $D(T^*)$ precisely when there is $w$ with $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$; the inner product is linear in its first argument. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] bounds all Hilbert pairings. [[thm-dominated-convergence]] justifies the explicit multiplier truncations below. No Kato-Rellich theorem or general AC spectral supplier is used.

## Proof

1.1 [Concrete maximal multipliers are self-adjoint under CC] For any real measurable finite-valued $v$ on $\mathbb R$, define $T_vh=vh$ on $\{h\in L^2:vh\in L^2\}$. For $h\in L^2$, $h_n=\mathbf1_{\{|v|\le n\}}h$ belongs to this domain and converges to $h$ by dominated convergence against $|h|^2$, so the domain is dense. The real multiplier gives symmetry. If $y\in D(T_v^*)$ and $w=T_v^*y$, test the adjoint identity against every $x\in L^2$ supported on $E_n=\{|v|\le n\}$; each such $x$ is in $D(T_v)$, and $\langle x,vy-w\rangle=0$. Taking $x=\mathbf1_{E_n}(vy-w)\in L^2$ gives $vy=w$ a.e. on $E_n$. Their union is all $\mathbb R$, so $vy=w\in L^2$, whence $y\in D(T_v)$ and $T_v^*y=T_vy$. The converse follows by symmetry, proving self-adjointness and thus closedness by [F4]. Apply this to $v(x)=x$ and $v(\xi)=2\pi\hbar\xi$. Plancherel unitary conjugation transports the second adjoint identity including the exact domain, so $Q=M_x$ and $P=\mathcal F_2^*T_{2\pi\hbar\xi}\mathcal F_2$ are self-adjoint and closed on exactly their maximal displayed domains. This reconstructs the needed concrete operators without invoking the AC-bearing general composite carrier. [F3, F4, given, construct, algebra]

1.2 [Actual diagonal nonreal inverses] For $R>0$ and $z\in\{iR,-iR\}$ define $$R_z h:=\sum_{n\ge0}\frac{\langle h,\psi_n\rangle}{c(n+1/2)-z}\psi_n.$$ The real positive diagonal values $\lambda_n=c(n+1/2)$ give $|\lambda_n-z|\ge R$ and $|\lambda_n/(\lambda_n-z)|\le1$. Hence the series converges, $\|R_z\|\le1/R$, $R_z h\in Y$ and $\|AR_z\|\le1$. Direct coefficient multiplication verifies $(A-z)R_z=I$ on $L^2$ and $R_z(A-z)=I$ on $Y$. In particular $R_z:L^2\to Y$ is bounded for the fixed graph norm, with $\|R_zh\|_Y^2\le(1+R^{-2})\|h\|^2$. These are concrete countable diagonal formulas, without a spectral theorem. [F1, given, construct, algebra]

2.1 [The complete common half-number domain] By [F3], for every finite expansion the coupling identities in the Statement hold. Let $\psi\in D(N_\psi^{1/2})$ and $\psi_M=\sum_{n\le M}c_n\psi_n$. By [F2], $\psi_M\to\psi$ and both ladder images converge to their stated series. Thus $Q\psi_M$ and $P\psi_M$ converge to the respective ladder combinations. Closedness from step 1.1 places $\psi$ in both $D(Q)$ and $D(P)$ and gives the coupling identities on all $D(N_\psi^{1/2})$. For $A_\psi=\|N_\psi^{1/2}\psi\|^2$ and $B_\psi=\|\psi\|^2$, the triangle inequality and $(x+y)^2\le2(x^2+y^2)$ give $$\|Q\psi\|^2\le\frac{\ell^2}{2}\bigl(\sqrt{A_\psi}+\sqrt{A_\psi+B_\psi}\bigr)^2\le\ell^2(2A_\psi+B_\psi),\qquad \|P\psi\|^2\le\frac{\hbar^2}{\ell^2}(2A_\psi+B_\psi).$$ Taking nonnegative square roots proves the corrected full-domain (a). No assumption restricts $\psi$ to coherent states or finite expansions. [step 1.1, F2, F3, algebra]

3.1 [Explicit infinitesimal relative bound] For $\psi\in Y$, coefficient Cauchy-Schwarz gives $A_\psi=\sum_n n|c_n|^2\le\|N_\psi\psi\|\|\psi\|$. The diagonal formula gives $\|N_\psi\psi\|\le c^{-1}\|A\psi\|$ because $n\le n+1/2$ coefficientwise. Set $X=\|N_\psi\psi\|$ and $B=\|\psi\|$. Step 2.1 implies $\|Q\psi\|\le\ell\sqrt{2XB+B^2}\le\ell\sqrt{2XB}+\ell B$. For any $\delta>0$, the nonnegative square $(\sqrt{\delta X}-\sqrt{B/(2\delta)})^2$ gives $\sqrt{2XB}\le\delta X+B/(2\delta)$. Given the Statement's $\eta>0$, take $\delta=\eta c/\ell$ to obtain $$\|Q\psi\|\le\eta\|A\psi\|+b_\eta\|\psi\|,\qquad b_\eta:=\ell+\frac{\ell^2}{2\eta c}<\infty.$$ Multiplication by the fixed finite real number $|f(t)|$ makes the relative $A$-bound of $-f(t)Q$ zero; when $f(t)=0$ the perturbation vanishes. This proves all of (b). [step 2.1, F1, F2, algebra]

4.1 [Two uniform Neumann inverses on the original domain] Set $F=\sup_{t\in[a,b]}|f(t)|<\infty$, $\eta_0=1/(4\max(1,F))$, $b=F b_{\eta_0}$ and choose $R>4b+1$. For $B_t=-f(t)Q$ restricted to $Y$, step 3.1 gives $\|B_tu\|\le(1/4)\|Au\|+b\|u\|$ uniformly in $t$. Therefore $B_tR_z$ is a bounded operator on $L^2$ with norm at most $1/4+b/R<1/2$ for both $z=\pm iR$, by step 1.2. Its Neumann series $L_{t,z}=\sum_{j\ge0}(-B_tR_z)^j$ converges in operator norm, since the tail norm is bounded by the geometric tail $\sum_{j>J}2^{-j}$; completeness of $\mathcal B(L^2)$ follows from pointwise norm limits and the uniform bound. Multiplying finite partial sums and taking their norm limit gives $L_{t,z}(I+B_tR_z)=(I+B_tR_z)L_{t,z}=I$. On $Y$ the exact factorization is $H(t)-z=(I+B_tR_z)(A-z)$. Consequently $$S_{t,z}:=R_zL_{t,z}:L^2\to Y$$ is its two-sided inverse, including $S_{t,z}(H(t)-z)u=u$ for every $u\in Y$. Thus both $H(t)\pm iR$ are onto and injective on the original domain; no larger domain is introduced by the inverse construction. [step 3.1, step 1.2, F1, construct, algebra]

5.1 [Exact adjoint domain] Since $f(t)$ is real and $Y\subseteq D(Q)$, steps 1.1 and [F1] imply that $H(t)=A+B_t$ on the dense domain $Y$ is symmetric. Hence $Y\subseteq D(H(t)^*)$ and the adjoint agrees with $H(t)$ there. Let $y\in D(H(t)^*)$ and put $g=(H(t)^*-iR)y\in L^2$. Step 4.1 supplies $x=S_{t,iR}g\in Y$ with $(H(t)-iR)x=g$. Then $w=y-x$ lies in $D(H(t)^*)$ and $(H(t)^*-iR)w=0$. For every $u\in Y$, the first-variable-linear adjoint convention gives $\langle(H(t)+iR)u,w\rangle=\langle u,H(t)^*w\rangle+iR\langle u,w\rangle=0$, since $H(t)^*w=iRw$ makes the first term $-iR\langle u,w\rangle$. The range of $H(t)+iR$ is all $L^2$ by step 4.1, so $w$ is orthogonal to all of $L^2$ and $w=0$. Thus $y=x\in Y$ and $H(t)^*y=H(t)y$. The reverse inclusion was already shown, proving exact self-adjointness with $D(H(t)^*)=D(H(t))=Y=D(N_\psi)$ for every $t$. This supplies the missing conclusion directly under CC. [step 1.1, step 4.1, F1, F4, algebra]

6.1 [Common graph regularity] Step 3.1 with $\eta=1$ shows $\|Q\psi\|\le(1+b_1)\|\psi\|_Y$, so $Q:Y\to L^2$ is bounded; also $A:Y\to L^2$ is bounded with norm at most one. Therefore $H(t)=A-f(t)Q\in\mathcal B(Y,L^2)$ and $\|H(t)-H(s)\|_{Y\to L^2}\le|f(t)-f(s)|\|Q\|_{Y\to L^2}$. For interior $t$, and with the corresponding one-sided endpoint limits, $$\left\|\frac{H(t+h)-H(t)}h+f'(t)Q\right\|_{Y\to L^2}\le\left|\frac{f(t+h)-f(t)}h-f'(t)\right|\|Q\|_{Y\to L^2}\longrightarrow0.$$ Continuity of $f'$ makes the derivative norm-continuous, proving $C^1([a,b];\mathcal B(Y,L^2))$. The fixed graph space $Y$ is dense and Hilbert by [F1]. If needed, step 4.1's bound also gives uniformly equivalent moving graph norms: $\|H(t)u\|\le(5/4)\|Au\|+b\|u\|$ and $(3/4)\|Au\|\le\|H(t)u\|+b\|u\|$. Thus all common-domain and regularity hypotheses claimed in (c), including those of [[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]] after an affine change of the time interval, are met. No propagator formula or extra Weyl-domain hypothesis is assumed. [step 3.1, step 4.1, step 5.1, F1, algebra]

7.1 [Conclusion] Step 2.1 proves the corrected (a), step 3.1 proves (b), and steps 5.1 and 6.1 prove the entire common-domain and norm-$C^1$ assertion (c) on $D(N_\psi)$. [step 2.1, step 3.1, step 5.1, step 6.1] ∎

## Research evidence: explicit finite-vector counterexamples

For $\psi_+=(\psi_0+\psi_2)/\sqrt2$, the normalized basis gives $\|\psi_+\|^2=1$ and $\|N_\psi^{1/2}\psi_+\|^2=1$. The actual ladder actions are

$$a_\psi\psi_+=\psi_1,\qquad a_\psi^\dagger\psi_+=(\psi_1+\sqrt3\psi_3)/\sqrt2.$$

Consequently

$$\frac{\|Q\psi_+\|^2}{\ell^2}=\frac12\left[(1+1/\sqrt2)^2+3/2\right]=\frac32+\frac1{\sqrt2}>2.$$

The original alleged squared position bound is $1+1=2$, so it is false already on a finite vector in $Y$. For $\psi_-=(\psi_0-\psi_2)/\sqrt2$,

$$a_\psi\psi_-=-\psi_1,\qquad a_\psi^\dagger\psi_-=(\psi_1-\sqrt3\psi_3)/\sqrt2,\qquad \frac{\ell^2\|P\psi_-\|^2}{\hbar^2}=\frac32+\frac1{\sqrt2}>2.$$

This refutes the original momentum estimate too. The corrected squared bound on both examples is $2\cdot1+1=3$, which contains the exact value. The algebraic mistake was dropping the factor supplied by the two ladder norms: bounding both by $\sqrt{A_\psi+B_\psi}$ yields a factor $\sqrt2$, whereas the valid two-component Cauchy-Schwarz bound gives precisely $\sqrt{2A_\psi+B_\psi}$.

## Research status and remaining obligations

Research-only replacement for the exact carrier named in `second-consumer-scope-request.md`. The only mathematical public correction is the two ladder estimates in (a); the complete $D(N_\psi^{1/2})$, $D(N_\psi)$, infinitesimal bound, real $C^1$ force, self-adjoint common domain, and operator-norm regularity are retained. The old reference to the enclosing coherent-evolution item is replaced by concrete maximal-multiplier definitions and actual Hermite/scaling suppliers, because that enclosing CC-labelled item invokes an AC-bearing composite-operator theorem. The local proof uses the actual CC supplier statements instead, including the diagonal oscillator realization and closed ladder domains. No Kato-Rellich or general spectral theorem remains as a load-bearing premise.

The public common-domain conclusion does not by itself construct the explicit forced-oscillator propagator; its separately assigned Weyl derivative, graph-domain invariance and phase repairs remain with their author and the sole successor. Correcting (a) requires the successor to complete the old/current/alias consumer review and focused repairs, including any consumer that quoted the original false bounds. This research does not change a production carrier, mirror, readiness decision, native hold, import or plan. Metadata reconciliation, mathematical acceptance and the existing capped cycle remain exclusively with `physics_spectral_repair_successor`.

No external authoritative full text was retrieved in this task. Bibliography entries are inherited provenance, not a claim of fresh source verification. The proof supplies the needed multiplier, Neumann and adjoint-domain arguments locally. Scoped mechanical checks and source snapshot hashes are adjacent evidence; neither amounts to an independent audit or native acceptance.
