---
id: thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator
aliases: [nrqm-fock-and-equilibrium-bounded-fixed-n-operator]
kind: theorem
domain: mathematics
title: "Bounded fixed-N operator"
status: published
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, def-fourier-transform-on-l-one-of-rn, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-hilbert-space, def-bounded-linear-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-137 (Kato-Rellich theorem and bounded perturbations of the free Hamiltonian)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 9 Sections 9.1-9.3 pp. 135-138 (field operators and second quantized Hamiltonians)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $N\ge1$, let
$m_1,\dots,m_N>0$ and $\hbar>0$, write points of $\mathbb R^{3N}$ as
$X=(x_1,\dots,x_N)$ with $x_i\in\mathbb R^3$, and let $\mathcal F_2$ be the
Plancherel transform of [[thm-plancherel]] with the convention
$\widehat f(\xi)=\int f(X)e^{-2\pi iX\cdot\xi}\,dX$ on $L^1$
([[def-fourier-transform-on-l-one-of-rn]]). Define the quadratic weight and the
free kinetic operator
$$\kappa(\xi_1,\dots,\xi_N):=\sum_{i=1}^N\frac{\hbar^2}{2m_i}|\xi_i|^2,\qquad K:=\mathcal F_2^*\,M_\kappa\,\mathcal F_2,\qquad D(K):=\{u\in L^2(\mathbb R^{3N};\mathbb C):\ \kappa\,\mathcal F_2u\in L^2\}$$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).
Let $V:\mathbb R^{3N}\to\mathbb R$ be measurable and bounded, with
$\|V\|_\infty:=\operatorname{ess\,sup}|V|<\infty$, and let $M_V$ be
multiplication by $V$ ([[def-sobolev-space-wkp-and-its-norm]],
[[def-hilbert-space]]). Then:

(a) $K$ is a self-adjoint positive operator with domain $D(K)$, and $D(K)$ is
the Sobolev space $W^{2,2}(\mathbb R^{3N};\mathbb C)$ as a set, with
$\|\cdot\|_{W^{2,2}}$ equivalent to the graph norm
$u\mapsto(\|u\|^2+\|Ku\|^2)^{1/2}$
([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]);

(b) $H:=K+M_V$ with $D(H):=D(K)$ is self-adjoint and bounded below by
$-\|V\|_\infty$; the space $C_c^\infty(\mathbb R^{3N};\mathbb C)$ is a core for
both $K$ and $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]],
[[def-relative-boundedness-with-respect-to-an-operator]]);

(c) for every $r\ge1$ the operator $K\otimes I_r+M_V\otimes I_r$ on
$L^2(\mathbb R^{3N};\mathbb C)\otimes\mathbb C^r$, with domain
$D(K)\otimes\mathbb C^r$, is self-adjoint and bounded below by $-\|V\|_\infty$.

In particular, if $V_i:\mathbb R^3\to\mathbb R$ and $W_{ij}:\mathbb R^3\to\mathbb R$
($1\le i<j\le N$) are measurable and bounded and
$V(X):=\sum_iV_i(x_i)+\sum_{i<j}W_{ij}(x_i-x_j)$, then $\|V\|_\infty\le\sum_i\|V_i\|_\infty+\sum_{i<j}\|W_{ij}\|_\infty<\infty$
and (a)-(c) apply. No Hunziker-van Winter-Zhislin threshold statement, no
stability of matter, no thermodynamic-limit and no physical interpretation is
asserted.

## Facts & Assumptions
**Given:** the integers $N,r\ge1$, masses $m_i>0$, the constant $\hbar>0$, the weight $\kappa$ and free operator $K$, a real bounded measurable $V$, and the perturbation $M_V$.

[F1] For a real measurable finite-valued function $a$ on $\mathbb R^d$, the multiplier $M_au=au$ on $D(M_a)=\{u:au\in L^2\}$ is self-adjoint; the Plancherel transform is unitary with $\|\mathcal F_2u\|=\|u\|$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] (a), [[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F2] Unitary equivalence preserves self-adjointness: if $U$ is unitary and $A$ is self-adjoint with domain $D(A)$, then $U^*AU$ with domain $U^{-1}D(A)$ is self-adjoint, and $K\ge0$ is equivalent to $\langle Ku,u\rangle=\|M_\kappa^{1/2}\mathcal F_2u\|^2\ge0$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-hilbert-space]]).

[F3] Fourier characterization of Sobolev spaces: $W^{2,2}(\mathbb R^d;\mathbb C)=\{u:(1+|\xi|^2)\mathcal F_2u\in L^2\}$ with equivalent norm, and $C_c^\infty(\mathbb R^d;\mathbb C)$ is dense in $W^{k,p}$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F4] Kato-Rellich: if $A$ is self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $\|Bu\|\le a\|Au\|+b\|u\|$ on $D(A)$ for some $a<1$, then $A+B$ on $D(A)$ is self-adjoint, and if moreover $A\ge\gamma$ then $A+B\ge\gamma-\max\{a|\gamma|+b,b/(1-a)\}$ in the quadratic-form sense ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F5] If $S\subseteq T$ are operators on the same Hilbert space with $S$ symmetric and $D(S)$ a core for the self-adjoint $T$, then $S$ is essentially self-adjoint with $\overline S=T$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-densely-defined-closed-and-closable-operator]]).




## Proof

1.1 [Self-adjointness of $K$] The function $\kappa$ is real, measurable and finite-valued, so $M_\kappa$ is self-adjoint on $D(M_\kappa)=\{v:\kappa v\in L^2\}$ by [F1]; conjugating by the unitary $\mathcal F_2$ ([F1]) gives that $K=\mathcal F_2^*M_\kappa\mathcal F_2$ is self-adjoint with $D(K)=\mathcal F_2^{-1}D(M_\kappa)=\{u:\kappa\mathcal F_2u\in L^2\}$ ([F2]). For $u\in D(K)$, $\langle Ku,u\rangle=\langle M_\kappa\mathcal F_2u,\mathcal F_2u\rangle=\int\kappa|\mathcal F_2u|^2\ge0$, so $K\ge0$. [F1, F2, algebra]

1.2 [Finitely many components] Let $\mathfrak K_1,\dots,\mathfrak K_r$ be Hilbert spaces and let $T_a$ be self-adjoint on $\mathfrak K_a$ for $a=1,\dots,r$. On the direct sum $\bigoplus_a\mathfrak K_a$ with domain $\{(u_a):u_a\in D(T_a)\}$ define $T((u_a)):=(T_au_a)$. Then $T$ is symmetric (componentwise), and if $(u^{(k)})$ is in the domain with $u^{(k)}\to u$ and $Tu^{(k)}\to\eta$, then componentwise $u_a^{(k)}\to u_a$ and $T_au_a^{(k)}\to\eta_a$; closedness of $T_a$ gives $u_a\in D(T_a)$, $T_au_a=\eta_a$ and $\sum_a\|T_au_a\|^2=\|\eta\|^2<\infty$, so $T$ is closed. Testing the adjoint componentwise shows $D(T^*)=D(T)$ and $T^*=T$; a symmetric densely defined operator whose adjoint has the same domain is self-adjoint. If all $T_a=T_0$ and $\mathfrak K_a=\mathfrak K_0$, then $T\ge-\|V\|_\infty$ whenever $T_0\ge-\|V\|_\infty$, because the quadratic form is the sum of the components. [F4, algebra]

2.1 [Identification with $W^{2,2}$ and the core] For $\xi\in\mathbb R^{3N}$ one has $c_{\min}(1+|\xi|^2)\le 1+\kappa(\xi)\le c_{\max}(1+|\xi|^2)$ for suitable positive constants $c_{\min},c_{\max}$ depending only on $N,m_i,\hbar$; hence $\kappa\mathcal F_2u\in L^2$ if and only if $(1+|\xi|^2)\mathcal F_2u\in L^2$, i.e. $u\in W^{2,2}(\mathbb R^{3N};\mathbb C)$, with equivalent norms by [F3]. Since $C_c^\infty$ is dense in $W^{2,2}$ ([F3]) and the graph norm of $K$ is equivalent to the $W^{2,2}$ norm, $C_c^\infty$ is a core for $K$, and $K$ is the unique self-adjoint extension of $K|_{C_c^\infty}$ ([F5]). [F3, F5, step 1.1, algebra]

3.1 [Bounded perturbation] Since $\|V\|_\infty<\infty$, the operator $M_V$ is bounded with $\|M_V\|\le\|V\|_\infty$; it is symmetric as multiplication by a real function, and on $D(K)$ the bound $\|M_Vu\|\le 0\cdot\|Ku\|+\|V\|_\infty\|u\|$ exhibits the admissible pair $(a,b)=(0,\|V\|_\infty)$. By [F4] with $A=K$ and $\gamma=0$, $H=K+M_V$ is self-adjoint on $D(K)$ and bounded below by $-\|V\|_\infty$. Moreover $\|Hu\|\le\|Ku\|+\|V\|_\infty\|u\|$ and $\|Ku\|\le\|Hu\|+\|V\|_\infty\|u\|$, so the graph norms of $H$ and $K$ are equivalent on $D(K)$; hence the core $C_c^\infty$ of step 2.1 is also a core for $H$. This proves (a) and (b). [F4, step 1.1, step 2.1, algebra]

4.1 [The scalar case with $r$ components] The Hilbert space $L^2(\mathbb R^{3N};\mathbb C)\otimes\mathbb C^r$ is identified with $\bigoplus_{a=1}^rL^2(\mathbb R^{3N};\mathbb C)$ componentwise; under this identification $K\otimes I_r+M_V\otimes I_r$ is the direct sum of $r$ copies of $H$ with domain $D(K)^{\oplus r}=D(K)\otimes\mathbb C^r$. By step 3.1 and step 1.2 it is self-adjoint and bounded below by $-\|V\|_\infty$, which is (c). [step 3.1, step 1.2, algebra]

5.1 [Conclusion and scope] Steps 1.1-3.1 prove (a), (b) and (c); the displayed reduction for external and pair potentials only uses the triangle inequality for essential suprema, $\|V\|_\infty\le\sum_i\|V_i\|_\infty+\sum_{i<j}\|W_{ij}\|_\infty<\infty$. No HVZ threshold, stability, thermodynamic-limit or physical-interpretation claim is made. [step 1.1, step 2.1, step 3.1, step 1.2, step 4.1, algebra] ∎
