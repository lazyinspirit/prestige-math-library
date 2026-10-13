---
id: lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint
aliases: [nrqm-magnetic-and-detection-momentum-operators-self-adjoint]
kind: lemma
domain: mathematics
title: "Self-adjointness, Fourier representation and translation identities of position and momentum"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-nrqm-magnetic-and-detection-position-and-momentum-operators, thm-algebra-of-derivatives, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, def-fourier-transform-on-l-one-of-rn, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-complex-translation-and-approximate-identity-interfaces, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 pp. 55-57 and Section 3.1 pp. 88-92 (self-adjointness, domains and spectral projections of position and momentum)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.2 pp. 204-210 and Section 9.2 pp. 276-279 (Fourier characterisation of Sobolev spaces and translation invariance)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $d\ge1$ and
$\hbar>0$, and let $Q_j,P_j$ be the position and momentum operators of
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] on
$L^2(\mathbb R^d;\mathbb C)$; let $\mathcal F_2$ be the unitary Plancherel
transform with $\widehat f(\xi)=\int_{\mathbb R^d}f(x)e^{-2\pi ix\cdot\xi}dx$
on $L^1$ ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]).

(a) For every $j$, $Q_j$ is self-adjoint with domain
$D(Q_j)=\{f\in L^2:\ x_jf\in L^2\}$.

(b) For every $j$, $P_j$ is self-adjoint with domain
$$D(P_j)=\{f\in L^2(\mathbb R^d;\mathbb C):\ \xi_j\mathcal F_2f\in L^2(\mathbb R^d;\mathbb C)\},$$
and for every $f\in D(P_j)$, $\mathcal F_2(P_jf)(\xi)=2\pi\hbar\,\xi_j\,\mathcal F_2f(\xi)$
for almost every $\xi$. In particular $P_jf=-i\hbar D_jf$ for every
$f\in W^{1,2}(\mathbb R^d;\mathbb C)$, and for $d=1$ the domain of the single
momentum operator is exactly $D(P)=W^{1,2}(\mathbb R;\mathbb C)$.

(c) For every $a\in\mathbb R^d$ the translation $(T_af)(x):=f(x-a)$ is a
unitary operator, $T_aD(P_j)=D(P_j)$, $T_aP_jT_a^{-1}=P_j$,
$T_aD(Q_j)=D(Q_j)$ and $T_aQ_jT_a^{-1}=Q_j-a_j$ for every $j$; moreover
$D_j(T_af)=T_a(D_jf)$ as $L^2$ classes for every $f\in W^{1,2}$, so $T_a$
preserves $W^{1,2}$ and $W^{2,2}$.

## Facts & Assumptions

**Given:** $d\ge1$, $\hbar>0$, and the operators $Q_j,P_j$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]].

[F1] $\mathcal F_2$ is unitary on $L^2(\mathbb R^d;\mathbb C)$ and $\langle\mathcal F_2f,\mathcal F_2g\rangle=\langle f,g\rangle$ for all $L^2$ classes ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F2] If $f,g\in L^2$ and $D_jf=g$ weakly, then $\mathcal F_2g(\xi)=2\pi i\xi_j\mathcal F_2f(\xi)$ for a.e. $\xi$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F3] $W^{1,2}(\mathbb R^d;\mathbb C)$ consists of the classes $f$ with $\langle\xi\rangle\mathcal F_2f\in L^2$, where $\langle\xi\rangle:=(1+|\xi|^2)^{1/2}$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F4] For a real measurable finite-valued $a:\mathbb R^d\to\mathbb R$, the multiplication operator $M_ah:=ah$ on $D(M_a)=\{h\in L^2: ah\in L^2\}$ is self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], clause (a)).

[F5] Translation $\tau_hf(x)=f(x-h)$ is an isometry of complex $L^p$, $1\le p\le\infty$, depending norm-continuously on $h$ for $p<\infty$ ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F6] Change of variables for the $C^1$ translation $y\mapsto y+a$ with Jacobian determinant one: $\int h(y)\,dy=\int h(x-a)\,dx$ for every nonnegative Lebesgue measurable $h$, and hence for every integrable $h$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

## Proof

1.1 [Position operators] The function $x\mapsto x_j$ is real, measurable and finite-valued, so [F4] applied to $a(x)=x_j$ gives that $Q_j=M_a$ is self-adjoint with $D(Q_j)=\{f: x_jf\in L^2\}$. This is (a). [given, F4]

1.2 [Unitary conjugation of a self-adjoint operator] Let $U$ be unitary and let $S$ be self-adjoint. Put $D(A):=U D(S)$ and $Au:=USU^*u$ for $u\in D(A)$. The domain is dense because $D(S)$ is dense and $U$ is a surjective isometry. Then $A$ is symmetric: for $u=Uz$, $v=Uw$ with $z,w\in D(S)$, $\langle Au,v\rangle=\langle USz,Uw\rangle=\langle Sz,w\rangle=\langle z,Sw\rangle=\langle Uz,USw\rangle=\langle u,Av\rangle$ by unitarity. If now $v\in D(A^*)$ with $A^*v=w'$, then for every $z\in D(S)$, writing $y:=U^*v$, $\langle Sz,y\rangle=\langle USz,v\rangle=\langle AUz,v\rangle=\langle Uz,w'\rangle=\langle z,U^*w'\rangle$; hence $y\in D(S^*)=D(S)$ and $Sy=U^*w'$. Therefore $v=Uy$ with $y\in D(S)$, that is $v\in D(A)$, and $Av=USy=UU^*w'=w'$. So $D(A^*)=D(A)$ and $A^*=A$. [given, algebra]

1.3 [The two momentum domains agree] Fix $j$, define $b_j(\xi):=2\pi\hbar\xi_j$ and let $\widetilde P_j:=\mathcal F_2^*M_{b_j}\mathcal F_2$ on $D(\widetilde P_j):=\{f\in L^2:b_j\mathcal F_2f\in L^2\}$, where $M_{b_j}$ is maximal multiplication as in [F4]. Let $f\in D(P_j)$. Then $D_jf\in L^2$ and [F2] gives $\mathcal F_2(D_jf)=2\pi i\xi_j\mathcal F_2f$, so $b_j\mathcal F_2f=-i\hbar\mathcal F_2(D_jf)\in L^2$; thus $f\in D(\widetilde P_j)$ and $\widetilde P_jf=\mathcal F_2^*(b_j\mathcal F_2f)=-i\hbar\mathcal F_2^*\mathcal F_2(D_jf)=-i\hbar D_jf=P_jf$. [given, F1, F2, F4]

1.4 [Translations commute with weak derivatives] Let $a\in\mathbb R^d$ and assume only $f\in L^2$ and $D_jf\in L^2$ for one fixed $j$; by [F5] $T_a$ is an isometry of $L^2$. For every $\varphi\in C_c^\infty$ the function $\varphi(\cdot+a)$ is again a test function. Its partial difference quotient at $y$ is exactly that of $\varphi$ at $y+a$, so $\partial_j(\varphi(\cdot+a))=(D_j\varphi)(\cdot+a)$. Two uses of [F6], applied to positive and negative parts of real and imaginary components of the integrable functions, give $\int(T_af)D_j\varphi=\int f(y)D_j\varphi(y+a)dy=\int f(y)D_j(\varphi(\cdot+a))(y)dy=-\int(D_jf)(y)\varphi(y+a)dy=-\int(T_aD_jf)(x)\varphi(x)dx$. Thus $D_j(T_af)=T_a(D_jf)\in L^2$, without assuming any other weak derivative of $f$. Applying this separately for every $j$ when $f\in W^{1,2}$, and then to each $D_kf$ when $f\in W^{2,2}$, proves preservation of both Sobolev spaces. The inverse $T_{-a}$ gives equality of these spaces under translation. Moreover $T_a$ is complex-linear and [F6] gives $\langle T_af,T_ag\rangle=\int f(y)\overline{g(y)}dy=\langle f,g\rangle$; with its inverse this proves unitarity. [given, F5, F6, algebra]

2.1 [Converse inclusion] Let $f\in D(\widetilde P_j)$ and set $g:=\mathcal F_2^*(2\pi i\xi_j\mathcal F_2f)\in L^2$. We show that $g$ is the weak $j$-derivative of $f$. Let $\varphi\in C_c^\infty(\mathbb R^d)$ be complex-valued; it is enough to verify the bilinear identity for the real and imaginary parts, so assume first that $\varphi$ is real-valued. Applying [F2] to $\varphi$ (whose classical derivative is its weak derivative as specified in the defining supplier) and [F1], $\int fD_j\varphi=\langle f,D_j\varphi\rangle=\langle\mathcal F_2f,\mathcal F_2(D_j\varphi)\rangle=\langle\mathcal F_2f,2\pi i\xi_j\mathcal F_2\varphi\rangle=\int\mathcal F_2f\overline{2\pi i\xi_j\mathcal F_2\varphi}=-\int(2\pi i\xi_j\mathcal F_2f)\overline{\mathcal F_2\varphi}=-\langle g,\varphi\rangle=-\int g\varphi$. The Fourier pairings remain sesquilinear; real-valuedness of $\varphi$ identifies only the spatial inner products with the bilinear test integrals. By linearity the identity holds for all complex $\varphi\in C_c^\infty$. Hence $g$ is the $L^2$ weak $j$-derivative of $f$, that is $f\in D(P_j)$ and $P_jf=-i\hbar g=\mathcal F_2^*(2\pi\hbar\xi_j\mathcal F_2f)=\widetilde P_jf$. [given, step 1.3, F1, F2, algebra]

2.2 [Momentum as a Fourier multiplier] The function $b_j$ of step 1.3 is real, measurable and finite-valued. By [F4], $M_{b_j}$ is self-adjoint with domain $D(M_{b_j})=\{h\in L^2:\ b_jh\in L^2\}$. The operator $\widetilde P_j$ of step 1.3 has domain $\mathcal F_2^{-1}D(M_{b_j})$, so step 1.2 with $U=\mathcal F_2^*$ and $S=M_{b_j}$ proves its self-adjointness. [given, F1, F4, step 1.2, step 1.3]

2.3 [Translation identities] Since $T_a^{-1}=T_{-a}$ and $T_a$ is unitary by [F5], step 1.4 gives $T_aP_jT_a^{-1}h=-i\hbar T_aD_j(T_{-a}h)=-i\hbar T_aT_{-a}D_jh=-i\hbar D_jh=P_jh$ for $h\in D(P_j)$, and $T_aD(P_j)=D(P_j)$ because the same computation applies to $T_{-a}$. For $Q_j$, $Q_jT_{-a}h$ is the class $x\mapsto x_jh(x+a)$ and applying $T_a$ gives $x\mapsto(x-a)_jh(x)$; hence $T_aQ_jT_a^{-1}=Q_j-a_j$ as class-valued maps, and $D(Q_j-a_j)=\{h:(x_j-a_j)h\in L^2\}=D(Q_j)$ because $|(x_j-a_j)h|\le|x_jh|+|a_j||h|$ and conversely $|x_jh|\le|(x_j-a_j)h|+|a_j||h|$. [given, F5, step 1.4, algebra]

3.1 [Conclusion of (b)] Steps 1.3 and 2.1 give $D(P_j)=D(\widetilde P_j)=\{f: \xi_j\mathcal F_2f\in L^2\}$ and $P_j=\widetilde P_j$, which is self-adjoint by step 2.2; and for $f\in D(P_j)$, $\mathcal F_2(P_jf)=\mathcal F_2(\widetilde P_jf)=2\pi\hbar\xi_j\mathcal F_2f$ a.e. If $d=1$ then $\{f:\xi\mathcal F_2f\in L^2\}=\{f:\langle\xi\rangle\mathcal F_2f\in L^2\}=W^{1,2}(\mathbb R;\mathbb C)$ by [F3], because $\xi^2\le\langle\xi\rangle^2=1+\xi^2$ and $\langle\xi\rangle^2\le1+2\xi^2$ for $|\xi|\ge1$ while both weights are bounded by constants on $|\xi|\le1$. This is (b). [step 2.2, step 1.3, step 2.1, F3, algebra]

4.1 [Conclusion of (c)] Steps 1.4 and 2.3 give all assertions of (c): unitarity of $T_a$ is [F5], the momentum and position conjugation identities and the preservation of $W^{1,2}$ and $W^{2,2}$ are step 1.4 and its iteration. [step 1.4, step 2.3, F5] ∎
