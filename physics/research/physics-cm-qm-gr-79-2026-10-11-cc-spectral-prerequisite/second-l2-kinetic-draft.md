---
id: thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound
aliases: [nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]
kind: theorem
domain: mathematics
title: "L^2 potential infinitesimal kinetic bound"
status: draft
origin: pipeline
deps: [lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-locally-integrable-functions-embed-in-distributions, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, def-sobolev-space-wkp-and-its-norm, thm-plancherel, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-136 and Section 10.1 p. 221 (relative kinetic bounds for L^p potentials)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "H. Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Chapter 9 (Sobolev embeddings and the Fourier characterisation of H^2; failure of pointwise bounds in the critical case)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let
$V\in L^2(\mathbb R^3;\mathbb R)$ and let $H_0=-\Delta$ with
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the free operator
([[def-sobolev-space-wkp-and-its-norm]]), constructed below as the maximal
Fourier multiplier with the $2\pi$ convention. Then:

(a) **Sup-norm interpolation.** There is a constant $C$ such that for every
$u\in H^2(\mathbb R^3)$ and every $R\ge1$,

$$\|u\|_\infty\le C\bigl(R^{3/2}\|u\|_2+R^{-1/2}\|\Delta u\|_2\bigr).$$

(b) **Infinitesimal smallness.** The multiplier $M_V$ with
$D(M_V)=\{u\in L^2:Vu\in L^2\}$ is $H_0$-bounded with relative bound $0$:
for every $\eta>0$ there is $b_\eta<\infty$ such that

$$\|Vu\|_2\le\eta\|H_0u\|_2+b_\eta\|u\|_2\qquad(u\in D(H_0)).$$

(c) **Self-adjointness.** $H=H_0+M_V$ is self-adjoint on $D(H_0)$ and
bounded below.

The potential is real valued but need not be bounded, continuous or compactly
supported; no decay rate is assumed. All original parts (a)-(c) retain this
full potential class and CC alone.

## Facts & Assumptions

**Given:** CC, real $V\in L^2(\mathbb R^3)$, the free weak Laplacian on
$W^{2,2}$, $u\in H^2$, $R\ge1$ and $\eta>0$.

[F1] The unitary Plancherel transform [[thm-plancherel]] uses $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on Schwartz functions. The CC Sobolev characterisation [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] and weak multiplier identity [[lem-weak-derivatives-are-polynomial-fourier-multipliers]] identify $W^{2,2}$ with $\{u:|\xi|^2\mathcal F_2u\in L^2\}$ and give $\mathcal F_2(-\Delta u)=4\pi^2|\xi|^2\mathcal F_2u$. No AC-bearing composite free/bounded-potential result is used.

[F2] Cauchy-Schwarz [[cor-cauchy-schwarz-inequality-for-l-two]] and spherical integration give $\int_{|\xi|\le R}d\xi=4\pi R^3/3$ and $\int_{|\xi|>R}|\xi|^{-4}d\xi=4\pi/R$. Dominated convergence is [[thm-dominated-convergence]]. The CC injection of local integrable functions into distributions [[thm-locally-integrable-functions-embed-in-distributions]] permits identification of an integral representative by testing against compact smooth functions.

[F3] The actual CC supplier [[lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus]] gives a unique regular PVM for a self-adjoint operator on a Hilbert space with a specified countable dense sequence, including the exact square-integrability domain and bounded/unbounded Borel calculus. On $L^2(\mathbb R^3;\mathbb C)$ use the specified enumeration of rational complex linear combinations of rational bounded-box indicators: real density is [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]], and approximating the real and imaginary parts gives complex density. This concrete CC calculus, not an AC spectral theorem, is used for the lower bound after self-adjointness has been proved.

## Proof

1.1 Maximal free multiplier and its actual domain: put $a(\xi)=4\pi^2|\xi|^2$, and define $M_a$ on $D(M_a)=\{f\in L^2:af\in L^2\}$. This domain is dense because $1_{a\le n}f\in D(M_a)$ and these cutoffs converge to any $f\in L^2$ by dominated convergence. It is symmetric because $a$ is real. If $g\in D(M_a^*)$ and $h=M_a^*g$, test the adjoint identity against every $L^2$ vector supported on $\{a\le n\}$; multiplication by $a$ is bounded there, and the identity gives $1_{a\le n}h=a1_{a\le n}g$. These sets exhaust the space, so $ag=h\in L^2$ and $g\in D(M_a)$. Conversely, $ag\in L^2$ gives the adjoint identity by Cauchy-Schwarz. Thus $M_a=M_a^*$ including domains. By unitary transport and [F1], $H_0=\mathcal F_2^*M_a\mathcal F_2$ is self-adjoint on precisely $W^{2,2}$ and agrees with the weak Laplacian. Its explicit inverse at $z=\pm i\mu$, $\mu>0$, is $Q_z=\mathcal F_2^*M_{(a-z)^{-1}}\mathcal F_2$; one has $\|Q_z\|\le\mu^{-1}$ and $\|H_0Q_z\|\le1$. At $z=-s$, $s>0$, the same formula gives $\|Q_{-s}\|\le s^{-1}$ and $\|H_0Q_{-s}\|\le1$. Each inverse maps onto the exact free domain, as multiplying by $a-z$ verifies both inverse equations. [F1, F2, given, construct, algebra]

2.1 Fourier sup interpolation, with the representative justified: write $\widehat u=\mathcal F_2u$. By [F2], $\int_{|\xi|\le R}|\widehat u|\le\sqrt{4\pi/3}\,R^{3/2}\|u\|_2$ and $\int_{|\xi|>R}|\widehat u|\le\sqrt{4\pi}\,R^{-1/2}\||\xi|^2\widehat u\|_2=\sqrt{4\pi}\,R^{-1/2}\|H_0u\|_2/(4\pi^2)$. In particular $\widehat u\in L^1$. The absolutely convergent inverse integral $v(x)=\int\widehat u(\xi)e^{2\pi ix\cdot\xi}d\xi$ defines a bounded continuous function. For any compact smooth test function $\varphi$, Fubini gives $\int v\overline\varphi=\int\widehat u\,\overline{\widehat\varphi}=\langle u,\varphi\rangle$ by Plancherel; absolute integrability for Fubini follows from $\|\widehat u\|_1\|\varphi\|_1<\infty$. Thus $v-u$ has zero distribution and [F2] gives $v=u$ almost everywhere. Taking the essential supremum of its inverse integral yields (a), with $C=\max\{\sqrt{4\pi/3},\sqrt{4\pi}/(4\pi^2)\}$, and $\|H_0u\|_2=\|\Delta u\|_2$. [F1, F2, step 1.1, construct, algebra]

3.1 Full unbounded potential bound and symmetry: $V$ is finite almost everywhere and $\|Vu\|_2\le\|V\|_2\|u\|_\infty$ for every $u\in W^{2,2}$, so $D(H_0)\subseteq D(M_V)$. Step 2.1 gives $\|Vu\|_2\le C\|V\|_2R^{-1/2}\|H_0u\|_2+C\|V\|_2R^{3/2}\|u\|_2$. Given $\eta>0$, choose $R=\max\{1,(C\|V\|_2/\eta)^2\}$ and set $b_\eta=C\|V\|_2R^{3/2}$; then the asserted relative estimate holds, including $V=0$, and the relative bound is $0$. Realness of $V$ gives $\langle Vu,w\rangle=\langle u,Vw\rangle$ for $u,w\in D(M_V)$: the two equal integrands are absolutely integrable by the $L^2$ Cauchy-Schwarz bounds. In particular the restriction of $M_V$ to $D(H_0)$ is symmetric, even when $V$ is unbounded. The maximal multiplier itself has no artificial bounded-potential hypothesis. [F2, step 2.1, construct, algebra]

4.1 Two nonreal Neumann inverses on the exact domain: fix $\eta=1/4$ in step 3.1 and write $b=b_{1/4}\ge0$. For $z=\pm i\mu$ with $\mu>4b$, step 1.1 gives $\|M_VQ_z\|\le1/4+b/\mu<1/2$. Hence $L_z=I+M_VQ_z$ has the norm-convergent inverse $\sum_{n\ge0}(-M_VQ_z)^n$, whose norm is at most $2$; multiplication of partial geometric sums and passage to the norm limit verify both inverse identities. On $D(H_0)$ the exact factorization is $H-z=L_z(H_0-z)$. Therefore $X_z=Q_zL_z^{-1}$ maps $L^2$ into $D(H_0)$ and is a two-sided inverse of $H-z:D(H_0)\to L^2$, with $\|X_z\|\le2/\mu$. Both signs use the same estimate; the order $Q_zL_z^{-1}$ is essential. This is an explicit domain argument, not an invocation of Kato-Rellich. [step 1.1, step 3.1, construct, algebra]

4.2 All sufficiently negative real inverses: for every $s>4b$, the explicit $Q_{-s}=(H_0+s)^{-1}$ from step 1.1 similarly satisfies $\|M_VQ_{-s}\|\le1/4+b/s<1/2$. The same geometric series gives the inverse of $I+M_VQ_{-s}$ and the factorization $H+s=(I+M_VQ_{-s})(H_0+s)$ on $D(H_0)$. Thus every real $\lambda=-s<-4b$ lies in the resolvent set, with bounded inverse $X_\lambda=Q_{-s}(I+M_VQ_{-s})^{-1}$ and norm at most $2/s$. This establishes a whole negative half-line of resolvent points; a single negative resolvent point alone would not prove a lower bound. [step 1.1, step 3.1, construct, algebra]

5.1 Exact adjoint domain: $H$ is densely defined because $D(H)=D(H_0)$ is dense, and it is symmetric by steps 1.1 and 3.1. Let $y\in D(H^*)$ and choose $\mu>4b$. Step 4.1 supplies $x\in D(H_0)$ solving $(H-i\mu)x=(H^*-i\mu)y$. Symmetry gives $H^*x=Hx$, so $w=y-x$ satisfies $(H^*-i\mu)w=0$. For every $v\in D(H)$ the adjoint identity implies $\langle(H+i\mu)v,w\rangle=0$; since $H+i\mu$ is onto by the other sign of step 4.1, $w=0$. Hence $y=x\in D(H)$ and $H^*y=Hy$. Together with symmetry this proves $H=H^*$ including the exact domain $D(H_0)$, for every real $L^2$ potential. No extra separability of a potential range or boundedness of $V$ was introduced. [step 1.1, step 3.1, step 4.1, algebra]

6.1 Negative spectral support and lower bound under CC: apply [F3] to the self-adjoint $H$ of step 5.1 on the fixed-dense-sequence space $L^2(\mathbb R^3)$. Put $L=4b+1$. For each $\lambda<-L$, step 4.2 gives a bounded inverse $X_\lambda$ and hence $\|(H-\lambda)v\|\ge c_\lambda\|v\|$ on $D(H)$, where $c_\lambda=\|X_\lambda\|^{-1}>0$. For $I_\lambda=(\lambda-c_\lambda/2,\lambda+c_\lambda/2)$, a vector in the range of $E_H(I_\lambda)$ lies in $D(H)$ because that interval is bounded; its spectral norm formula gives $\|(H-\lambda)v\|\le(c_\lambda/2)\|v\|$, so $v=0$ and $E_H(I_\lambda)=0$. Consider all rational-endpoint intervals $J\subset(-\infty,-L)$ with $E_H(J)=0$. They form a countable collection and cover $(-\infty,-L)$: at each $\lambda$ choose rational endpoints enclosing it within the open spectral hole $I_\lambda\cap(-\infty,-L)$. This existence argument chooses no uncountably indexed family; taking all such rational intervals is canonical. Countable subadditivity of each scalar spectral measure yields $E_H((-\infty,-L))=0$. Therefore for $u\in D(H)$, $\langle Hu,u\rangle=\int t\,d\mu_u(t)\ge-L\|u\|_2^2$; the integral is absolutely convergent by its second-moment domain condition and Cauchy-Schwarz. This proves boundedness below. Parts (a), (b) and (c) are respectively steps 2.1, 3.1 and 5.1 together with this step. [F3, step 4.2, step 5.1, construct, algebra] ∎

## Remarks

Research-only repair support for the exact second-consumer escalation; original provenance and the full unbounded real-$L^2$/CC Statement are preserved. The inspected source raw SHA-256 was `dae411557427ecfd4ead04c5474795b27491e8ddf6e580d30bdb7383a15f94e0`. The proof replaces the AC composite/Kato premises with a direct maximal free Fourier multiplier, sup interpolation, two nonreal Neumann inverses and an exact adjoint-domain argument. The same negative-real Neumann construction rules out the entire sufficiently negative spectrum and the actual fixed-dense-sequence CC calculus supplies the lower quadratic-form bound. No optimal lower constant is asserted. The sole spectral successor retains mathematical review, registration, supplier/consumer closure and existing cycle/cap history; this draft and its mechanical checks confer no production acceptance. No production, mirror, readiness, import, plan or other draft was edited.
