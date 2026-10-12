---
id: thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
aliases: [nrqm-composites-real-multipliers-and-free-bounded-potential-operators]
kind: theorem
domain: mathematics
title: "Real multiplication operators and free plus bounded-potential Schrödinger operators"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, thm-dominated-convergence, thm-plancherel, def-fourier-transform-on-l-one-of-rn, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-schwartz-space-and-its-seminorms, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Thm 6.4 p. 135 (Kato-Rellich), Thm 7.8 p. 168 (free Hamiltonian), Thm 5.1-5.2 pp. 123-125 (Stone)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §2.3 pp. 24-28 (free Hamiltonian as an informed model choice)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), let $d\ge1$ and work on $H=L^2(\mathbb R^d;\mathbb C)$ ([[def-hilbert-space]]).

(a) For a real measurable finite-valued function $a:\mathbb R^d\to\mathbb R$ define $M_af:=af$ on $D(M_a):=\{f\in H: af\in H\}$. Then $M_a$ is a densely defined self-adjoint operator on $H$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

(b) Let $c>0$, $b\in\mathbb R$, and let $\mathcal F_2$ be the unitary Plancherel transform with the convention $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^1$ ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]). Define

$$H_0:=\mathcal F_2^*\,M_{c|\xi|^2+b}\,\mathcal F_2,\qquad D(H_0):=\{f\in H:|\xi|^2\mathcal F_2f\in H\}.$$

Then $H_0$ is self-adjoint, $D(H_0)$ coincides with the Sobolev space $W^{2,2}(\mathbb R^d;\mathbb C)$ as a set (with equivalent norms, [[def-sobolev-space-wkp-and-its-norm]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]), $H_0\ge b$ in the quadratic-form sense, and for every Schwartz function $f\in\mathcal S(\mathbb R^d)$, $H_0f=-(c/4\pi^2)\Delta f+bf$.

(c) If $V:\mathbb R^d\to\mathbb R$ is measurable with $\|V\|_\infty<\infty$ and $H:=H_0+M_V$ with domain $D(H_0)$, then $H$ is self-adjoint on $D(H_0)$, is bounded below, and the assignment $t\mapsto e^{itH}$ is a strongly continuous one-parameter unitary group whose generator is $iH$: the limit $\lim_{t\to0}\frac1t(e^{itH}\psi-\psi)$ exists exactly for $\psi\in D(H)$ and equals $iH\psi$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

(d) *Scope*: the argument uses only boundedness and measurability of $V$; it proves nothing for $V\propto-1/|x|$, $V\propto|x|^2$ or the delta interaction, does not identify $H_0$ with any measured free-particle Hamiltonian, and asserts no physical interpretation.

## Facts & Assumptions

**Given:** $d\ge1$; $H=L^2(\mathbb R^d;\mathbb C)$; a real measurable finite-valued $a$; constants $c>0$, $b\in\mathbb R$; a real bounded measurable $V$.

[F1] If measurable $f_n\to f$ pointwise and $|f_n|\le g$ with $\int g<\infty$, then $\int|f_n-f|\to0$ ([[thm-dominated-convergence]]).

[F2] For a densely defined operator $T$, $D(T^*)$ consists of those $y$ for which $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$; $T$ is symmetric when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for $x,y\in D(T)$, and self-adjoint when $T=T^*$ including domains ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F3] $\mathcal F_2:L^2(\mathbb R^d)\to L^2(\mathbb R^d)$ is a surjective linear isometry extending the $L^1$ transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$, and it preserves the inner product ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F4] For $f\in\mathcal S(\mathbb R^d)$ the Plancherel transforms of $f$ and of its distributional Laplacian satisfy $\mathcal F_2(\Delta f)(\xi)=-4\pi^2|\xi|^2\mathcal F_2f(\xi)$ for a.e. $\xi$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[def-schwartz-space-and-its-seminorms]]).

[F5] $W^{2,2}(\mathbb R^d;\mathbb C)$ equals the set $\{f\in L^2:\langle\xi\rangle^2\mathcal F_2f\in L^2\}$ and the two norms are equivalent; consequently $\{f:|\xi|^2\mathcal F_2f\in L^2\}=W^{2,2}$ as sets ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] Let $A$ be self-adjoint and $B$ symmetric with $D(A)\subseteq D(B)$ and $A$-bound less than one; then $A+B$ on $D(A)$ is self-adjoint and, when $A\ge\gamma$ with admissible pair $(a,b)$ for $B$, $A+B\ge\gamma-\max\{a|\gamma|+b,\ b/(1-a)\}$ ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F7] If $T$ is self-adjoint with spectral PVM $E$ and $U(t)=e^{itT}$, then $U$ is a strongly continuous one-parameter unitary group, $U(t)D(T)=D(T)$, and $\lim_{t\to0}\frac1t(U(t)\psi-\psi)$ exists exactly for $\psi\in D(T)$, where it equals $iT\psi$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

## Proof

1.1 [Density and symmetry of the multiplier] For $f\in H$ and $n\ge1$ put $f_n:=f\mathbf 1_{\{|a|\le n\}}$. Then $af_n$ is bounded by $n|f_n|$, so $f_n\in D(M_a)$, and $f_n\to f$ in $H$ by [F1] applied to $|f_n-f|^2\le|f|^2$; hence $D(M_a)$ is dense. For $f,g\in D(M_a)$ the integral $\int af\overline g$ is defined and equals $\int f\overline{ag}$ because $a$ is real-valued, so $\langle M_af,g\rangle=\langle f,M_ag\rangle$: $M_a$ is symmetric. [given, F1, F2, algebra]

2.1 [Adjoint domain of the multiplier] Let $g\in D(M_a^*)$ with representing vector $h=M_a^*g$, so $\int af\overline g=\int f\overline h$ for all $f\in D(M_a)$. Fix $n$ and restrict to $f\in H$ vanishing off $E_n:=\{|a|\le n\}$; every such $f$ lies in $D(M_a)$, and the identity reads $\int_{E_n}(a\overline g-\overline h)f=0$ for all $f\in L^2(E_n)$, so $h=ag$ a.e. on $E_n$; as $E_n\uparrow\mathbb R^d$, $h=ag$ a.e., and since $h\in H$, $ag\in H$ and $g\in D(M_a)$. Conversely every $g\in D(M_a)$ satisfies the adjoint identity with $h=M_ag$. Hence $D(M_a^*)=D(M_a)$ and $M_a^*=M_a$: $M_a$ is self-adjoint, giving (a). [step 1.1, F2, algebra]

3.1 [Unitary conjugation] Let $T:=M_{c|\xi|^2+b}$, self-adjoint on $D(T)=\{g:c|\xi|^2g\in H\}$ by step 2.1 applied to the real finite-valued function $c|\xi|^2+b$. Define $H_0:=\mathcal F_2^*T\mathcal F_2$ on $D(H_0)=\mathcal F_2^{-1}D(T)=\{f:|\xi|^2\mathcal F_2f\in H\}$. For $x,y\in D(H_0)$, $\langle H_0x,y\rangle=\langle T\mathcal F_2x,\mathcal F_2y\rangle$ by unitarity of $\mathcal F_2$ [F3]. If $y\in D(H_0^*)$, the functional $x\mapsto\langle H_0x,y\rangle$ is bounded on $D(H_0)$; conjugating by the unitary $\mathcal F_2$ shows that $g\mapsto\langle Tg,\mathcal F_2y\rangle$ is bounded on $D(T)$, so $\mathcal F_2y\in D(T^*)=D(T)$ and hence $y\in D(H_0)$ with $H_0^*y=\mathcal F_2^*T^*\mathcal F_2y=H_0y$; the reverse inclusion is immediate from the symmetry identity. Thus $H_0$ is self-adjoint. [step 2.1, F2, F3, algebra]

4.1 [Domain, lower bound and free action] By [F5], $D(H_0)=W^{2,2}(\mathbb R^d)$ as a set with equivalent norms. For $f\in D(H_0)$ the pairing with $f$ is computed in the $\xi$-variable, where multiplication by $c|\xi|^2+b\ge b$ gives $\langle H_0f,f\rangle=\int(c|\xi|^2+b)|\mathcal F_2f(\xi)|^2d\xi\ge b\|\mathcal F_2f\|^2=b\|f\|^2$, so $H_0\ge b$ in the quadratic-form sense. For a Schwartz function $f$, [F4] gives $\mathcal F_2(-(c/4\pi^2)\Delta f+bf)(\xi)=(c|\xi|^2+b)\mathcal F_2f(\xi)$ a.e.; both sides are continuous representatives, and Plancherel inversion identifies them as elements of $H$, so $H_0f=-(c/4\pi^2)\Delta f+bf$. This is (b). [step 3.1, F3, F4, F5, algebra]

5.1 [Bounded perturbation by Kato-Rellich] Let $V$ be real with $\|V\|_\infty<\infty$ and let $M_V$ be the bounded multiplication operator on $H$. Then $D(H_0)\subseteq D(M_V)=H$, $M_V$ is symmetric because $V$ is real, and $\|M_Vf\|\le\|V\|_\infty\|f\|$ for every $f\in D(H_0)$, so the $H_0$-bound of $M_V$ is $0<1$ with admissible pair $(0,\|V\|_\infty)$ ([[def-relative-boundedness-with-respect-to-an-operator]]). By [F6] the operator $H=H_0+M_V$ on $D(H_0)$ is self-adjoint and, since $H_0\ge b$, satisfies $H\ge b-\max\{0\cdot|b|+\|V\|_\infty,\ \|V\|_\infty\}=b-\|V\|_\infty$, hence is bounded below. [step 4.1, F6, algebra]

6.1 [Unitary dynamics] Applying [F7] to the self-adjoint $H$ of step 5.1 yields that $t\mapsto e^{itH}$ is a strongly continuous one-parameter unitary group, $e^{itH}D(H)=D(H)$, and the difference quotients converge exactly on $D(H)$; the physical convention $t\mapsto e^{-itH}$ is the same group at negative time. No claim in this item extends to unbounded or singular $V$, which are excluded by the boundedness and measurability hypotheses recorded in [F6]. [step 5.1, F7] ∎
