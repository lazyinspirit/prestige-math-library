---
id: thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator
aliases: [nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]
kind: theorem
domain: mathematics
title: "Self-adjointness of the bounded-coefficient magnetic Schrodinger operator"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, lem-nrqm-magnetic-and-detection-weak-product-rule, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-nrqm-magnetic-and-detection-weak-product-rule: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, first edition 2009, Section 6.1 printed pp. 133-135 (PDF pp. 145-147), Theorem 6.4 p. 135: relative boundedness and Kato-Rellich; Section 7.2 printed pp. 167-168 (PDF pp. 179-180), Theorem 7.8: the free H2 operator. Background only; the bounded-coefficient magnetic relative bounds, self-adjointness and domain argument are supplied locally."
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3 printed p. 45 equation (3.31), and Section 3.3.1 printed pp. 46-47 equations (3.40)-(3.45) (PDF pp. 53-55): minimal coupling and static magnetic gauge algebra. The bounded-coefficient Sobolev-domain and self-adjointness argument is supplied locally."
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$,
$q\in\mathbb R$ and an admissible pair $(A,\Phi)$ in the sense of
[[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]], and let
$P_{A,j}$, $K_{A,\Phi}$ and $K_0$ be the operators defined there on
$L^2(\mathbb R^3;\mathbb C)$. Then:

(a) for every $j$, $P_{A,j}=P_j-qA_j$ is self-adjoint with domain
$D(P_{A,j})=D(P_j)=\{f: D_jf\in L^2\}$; and for every
$u\in W^{2,2}(\mathbb R^3;\mathbb C)$ one has $P_{A,j}u\in W^{1,2}$ and
$P_{A,j}u=P_ju-qA_ju$;

(b) for every $u\in W^{2,2}(\mathbb R^3;\mathbb C)$ the expansion holds:
$$K_{A,\Phi}u=\frac1{2m}P^2u-\frac{q}{2m}\sum_{j=1}^3\bigl(P_jA_j+A_jP_j\bigr)u +\frac{q^2}{2m}|A|^2u+q\,\Phi u,\qquad P^2u:=\sum_{j=1}^3P_j(P_ju)=-\hbar^2\sum_{j=1}^3D_jD_ju,$$
where $(P_jA_j+A_jP_j)u:=P_j(A_ju)+A_jP_ju$, and each term lies in $L^2$;

(c) $K_{A,\Phi}$ is symmetric on its domain and self-adjoint with
$D(K_{A,\Phi})=W^{2,2}(\mathbb R^3;\mathbb C)$;

(d) for every $a\in[0,1)$ there is $b\in[0,\infty)$ with
$$\|(K_{A,\Phi}-K_0)u\|\le a\,\|K_0u\|+b\|u\|\qquad \bigl(u\in W^{2,2}(\mathbb R^3;\mathbb C)\bigr),$$
so $K_{A,\Phi}-K_0$ has $K_0$-bound strictly below one
([[def-relative-boundedness-with-respect-to-an-operator]]); consequently
$K_{A,\Phi}$ is bounded below.

The assertion is a statement about the displayed differential expression with
its stated coefficient hypotheses; it identifies no physical field, particle
or measured Hamiltonian.

## Facts & Assumptions

**Given:** $\hbar>0$, $m>0$, $q\in\mathbb R$; an admissible pair $(A,\Phi)$ with $\|A_j\|_\infty,\|D_kA_j\|_\infty,\|\Phi\|_\infty<\infty$; the operators $P_j$, $Q_j$, $P_{A,j}$, $K_{A,\Phi}$, $K_0$ of the definition.

[F1] $P_j$ is self-adjoint with $D(P_j)=\{f: \xi_j\mathcal F_2f\in L^2\}$, and $\mathcal F_2(P_jf)=2\pi\hbar\xi_j\mathcal F_2f$ for $f\in D(P_j)$; also $D_jf\in L^2$ and $P_jf=-i\hbar D_jf$ for $f\in D_j$ in this domain ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]).

[F2] Multiplication by a real bounded measurable class is a bounded self-adjoint operator, and $qA_j$, $\Phi$, $|A|^2$ are real bounded classes ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], clause (a); [[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]]).

[F3] Kato-Rellich: if $S$ is self-adjoint and an operator $B$ is symmetric with $D(S)\subseteq D(B)$ and $S$-bound less than one, then $S+B$ with domain $D(S)$ is self-adjoint; moreover if $S\ge\gamma$ and $(a,b)$ is an admissible pair for $B$ with $a<1$, then $S+B\ge\gamma-\max\{a|\gamma|+b,\ b/(1-a)\}$ ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).

[F4] For $u\in W^{1,2}$, $A_ju\in W^{1,2}$ and $D_k(A_ju)=A_jD_ku+(D_kA_j)u$; hence $A_ju\in D(P_j)$ with $P_j(A_ju)=A_jP_ju-i\hbar(D_jA_j)u$ ([[lem-nrqm-magnetic-and-detection-weak-product-rule]]).

[F5] For $u\in W^{2,2}$ and admissible $A$, $P_{A,j}u=P_ju-qA_ju\in W^{1,2}$: indeed $P_ju=-i\hbar D_ju\in W^{1,2}$ because $D_ju\in W^{1,2}$ and $A_ju\in W^{1,2}$ by [F4] ([[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] $\mathcal F_2$ is unitary and $W^{2,2}(\mathbb R^3;\mathbb C)=\{f:|\xi|^2\mathcal F_2f\in L^2\}$ with equivalent norms ([[thm-plancherel]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

## Proof

1.1 [Self-adjoint magnetic momenta] For each $j$, $qA_j$ is a bounded symmetric operator by [F2] with $\|qA_jf\|\le |q|\,\|A_j\|_\infty\|f\|$ for every $f\in L^2$, so its $P_j$-bound is $0$: the pair $(a,b)=(0,|q|\|A_j\|_\infty)$ is admissible in the sense of [F3] since $D(P_j)\subseteq L^2=D(qA_j)$. By [F3] with $S=P_j$ and $B=-qA_j$ (symmetric), $P_{A,j}=P_j-qA_j$ is self-adjoint with domain $D(P_j)$. This is the first assertion of (a). [given, F1, F2, F3]

1.2 [Membership of the shifted momentum] Let $u\in W^{2,2}$. Then $D_ju\in W^{1,2}$, so $P_ju=-i\hbar D_ju\in W^{1,2}$, and $A_ju\in W^{1,2}$ by [F4]; hence $P_{A,j}u=P_ju-qA_ju\in W^{1,2}$ and $P_{A,j}u=P_ju-qA_ju$ holds as classes. This completes (a). [given, F1, F4, F5]

1.3 [Momentum bound by the free operator] For $u\in W^{2,2}$, $P_ju\in D(P_j)$ and $\mathcal F_2(P_ju)=2\pi\hbar\xi_j\mathcal F_2u$ by [F1], while $K_0u=\mathcal F_2^*\bigl(c|\xi|^2\mathcal F_2u\bigr)$ with $c:=(2\pi\hbar)^2/(2m)$ by [F1] and the definition of $K_0$: iterating the multiplier identity gives $\mathcal F_2\bigl(\frac1{2m}\sum_jP_j(P_ju)\bigr)=\frac{(2\pi\hbar)^2}{2m}|\xi|^2\mathcal F_2u$. Hence $\|P_ju\|=\|2\pi\hbar\xi_j\mathcal F_2u\|$ and $\|K_0u\|=\|c|\xi|^2\mathcal F_2u\|$ by unitarity of $\mathcal F_2$ [F6]. Given $\varepsilon>0$, the elementary inequality $2\pi\hbar|t|\le\varepsilon c t^2+C_\varepsilon$ (with $t=|\xi|$, $C_\varepsilon=(2\pi\hbar)^2/(4\varepsilon c)$) gives $\|P_ju\|\le\varepsilon\|K_0u\|+C_\varepsilon\|u\|$. [given, F1, F6, algebra]

2.1 [Symmetry of the individual magnetic squares] For $u,v\in W^{2,2}$ and each $j$, step 1.2 gives $P_{A,j}u,P_{A,j}v\in W^{1,2}\subseteq D(P_j)=D(P_{A,j})$ by step 1.1, and $P_ju,P_jv\in W^{1,2}\subseteq D(P_j)$ ([[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]], [[def-sobolev-space-wkp-and-its-norm]]). Using self-adjointness of $P_{A,j}$ and of $P_j$ (step 1.1, [F1]) on their domains, $\langle P_{A,j}(P_{A,j}u),v\rangle=\langle P_{A,j}u,P_{A,j}v\rangle=\langle u,P_{A,j}(P_{A,j}v)\rangle$ and $\langle P_j(P_ju),v\rangle=\langle P_ju,P_jv\rangle=\langle u,P_j(P_jv)\rangle$. Subtracting, the operator $B_j:=\frac1{2m}\bigl(P_{A,j}^2-P_j^2\bigr)$ with $B_ju:=\frac1{2m}\bigl(P_{A,j}(P_{A,j}u)-P_j(P_ju)\bigr)$ on $W^{2,2}$ is symmetric. [given, step 1.1, step 1.2, algebra]

2.2 [Expansion] Let $u\in W^{2,2}$. By [F4] applied to $D_ku$ (which lies in $W^{1,2}$), or directly to $u$, $P_j(A_ju)=A_jP_ju-i\hbar(D_jA_j)u$; hence $P_{A,j}(P_{A,j}u)=(P_j-qA_j)(P_ju-qA_ju)=P_j(P_ju)-qP_j(A_ju)-qA_jP_ju+q^2A_j^2u=P^2\text{-term}_j-q(P_jA_j+A_jP_j)u+q^2A_j^2u$, where $(P_jA_j+A_jP_j)u:=P_j(A_ju)+A_jP_ju$. Summing over $j$ and dividing by $2m$, and using $P^2u=\sum_jP_j(P_ju)$ and $|A|^2=\sum_jA_j^2$, gives the displayed expansion; every term lies in $L^2$ by steps 1.2 and [F2]. This is (b). [given, step 1.2, F4, algebra]

3.1 [Symmetry of $K_{A,\Phi}$] The zero-order term $q\Phi$ is bounded symmetric by [F2]. Hence $K_{A,\Phi}=K_0+\sum_jB_j+q\Phi$ is symmetric on the common domain $W^{2,2}$, because $K_0u=\frac1{2m}\sum_jP_j(P_ju)$ by definition and each summand is symmetric by step 2.1 and [F2]. [given, step 2.1, F2]

3.2 [The relative bound] Let $u\in W^{2,2}$. From (b), $\|(K_{A,\Phi}-K_0)u\|\le\frac{|q|}{2m}\sum_j\|(P_jA_j+A_jP_j)u\|+\frac{q^2}{2m}\bigl\||A|^2u\bigr\|+|q|\|\Phi u\|$. By [F4], $\|(P_jA_j+A_jP_j)u\|\le2\|A_j\|_\infty\|P_ju\|+\hbar\|D_jA_j\|_\infty\|u\|$; and $\||A|^2u\|\le\|A\|_\infty^2\|u\|$, $\|\Phi u\|\le\|\Phi\|_\infty\|u\|$. So it suffices to bound $\|P_ju\|$ in terms of $\|K_0u\|$ and $\|u\|$. [given, step 2.2, F2, F4, algebra]

4.1 [Conclusion of (d)] Inserting step 1.3 with $\varepsilon>0$ chosen so small that $\frac{|q|}{m}\sum_j\bigl(2\|A_j\|_\infty\varepsilon\bigr)<1$ into step 3.2 gives (d): the constant $a$ can be made arbitrarily small, in particular $a<1$, with $b$ depending on $q,m,\|A_j\|_\infty,\|D_jA_j\|_\infty,\|\Phi\|_\infty$ and $\varepsilon$. [step 3.2, step 1.3, algebra]

5.1 [Self-adjointness] By step 2.2 the operator $W:=K_{A,\Phi}-K_0$ is defined on $D(K_0)=W^{2,2}$ and is symmetric by step 3.1 (it is the sum of the symmetric $B_j$ and the bounded symmetric $q\Phi$). By [F3] (Kato-Rellich) with $S=K_0$ and $B=W$, whose $K_0$-bound is below one by step 4.1, the operator $K_0+W=K_{A,\Phi}$ is self-adjoint with domain $D(K_0)=W^{2,2}$. Moreover $K_0u=\mathcal F_2^*(c|\xi|^2\mathcal F_2u)$ is positive (its quadratic form is $\int c|\xi|^2|\mathcal F_2u|^2\ge0$), so $K_0\ge0$ and [F3] gives the lower bound $K_{A,\Phi}\ge-\max\{0,b/(1-a)\}=-b/(1-a)$ for the admissible pair of step 4.1. This is (c) and the final clause of (d). [step 3.1, step 4.1, F3] ∎
