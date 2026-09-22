---
id: cex-symmetric-need-not-be-self-adjoint
kind: counterexample
title: "A symmetric closed operator that is not self-adjoint"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-densely-defined-closed-and-closable-operator, def-absolutely-continuous-function, thm-integration-by-parts-for-absolutely-continuous-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
forward_refs: [lem-schwartz-cutoffs-from-the-standard-smooth-step]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Example 7.23, pp.32-34"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, pp.91-95"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Exercise 6.28 and Sec. 6.3.2"
---

## Statement refuted

Assume the Axioms of Countable Choice and Dependent Choice. On the Hilbert
space $H=L^2((0,1);\mathbb C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]) let
$T:=-i\,d/dx$ with domain
$$D(T)=\{f\in AC[0,1]:f'\in L^2(0,1),\ f(0)=f(1)=0\},$$
where complex-valued absolute continuity and the derivative are read on real
and imaginary parts ([[def-absolutely-continuous-function]]). Domain notation
means the $L^2$ classes having the indicated absolutely continuous representative;
endpoint values refer to that representative. Then:

1. $T$ is densely defined, closed and symmetric, so $T$ refutes the reading
   "closed and symmetric implies self-adjoint";
2. $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ and $T^*g=-ig'$, so $T^*$ is a
   proper closed extension of $T$; $T^*$ itself is not symmetric, and
   $T\ne T^*$;
3. the periodic domain $D_2=\{g\in AC[0,1]:g'\in L^2(0,1),\ g(0)=g(1)\}$
   carries a closed symmetric extension of $T$, strictly between $T$ and
   $T^*$.

## Facts & Assumptions

[A1] A densely defined operator is symmetric when $T\subseteq T^*$ and self-adjoint when $T=T^*$; the adjoint of a densely defined operator is always closed ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[A2] For real-valued absolutely continuous functions the fundamental theorem of calculus and integration by parts hold, and the indefinite integral of an $L^1$ function is absolutely continuous; applied to real and imaginary parts this gives the same calculus for complex-valued absolutely continuous functions ([[def-absolutely-continuous-function]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-integration-by-parts-for-absolutely-continuous-functions]], [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]]).

[A3] $C_c^\infty(\mathbb R)$ is dense in $L^2(\mathbb R)$ under Countable Choice, applied componentwise for complex functions. There exists a smooth $\chi$ on $\mathbb R$ with $0\le\chi\le1$, equal to one on $[-1,1]$ and zero off $[-2,2]$. Dominated convergence applies under an integrable majorant ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-dominated-convergence]]).

[A4] $y\in D(T^*)$ exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$, and then $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x\in D(T)$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[A5] Under Countable Choice, complex $L^2$ is a Hilbert space of almost-everywhere classes with first-variable-linear pairing $\langle f,g\rangle=\int f\overline g$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The pairing satisfies Cauchy–Schwarz; taking $|h|$ and $1$ on an interval of length at most one gives $\int|h|\le\|h\|_2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Counterexample

**Proof technique:** direct.

**Given:** $H=L^2((0,1);\mathbb C)$ and $T=-i\,d/dx$ on the domain $D(T)$ above.

1.1 An absolutely continuous representative is continuous and unique in its almost-everywhere class: a nonzero difference at a point would stay nonzero on a relative interval of positive length. It is bounded on [0,1] and thus belongs to $L^2$; its a.e. derivative is independent of the representative. The stated domains are linear and define linear operators. Complex absolutely continuous calculus is obtained componentwise from the real theory. If $F,G$ are complex-valued with absolutely continuous real and imaginary parts, then $F(x)-F(0)=\int_0^xF'$ for all $x$, and $\int_0^1F'\overline G=F(1)\overline{G(1)}-F(0)\overline{G(0)}-\int_0^1F\overline{G'}$; if $h\in L^2(0,1)$ then $x\mapsto\int_0^xh$ is of this kind with derivative $h$ almost everywhere by the first $L^1$ fundamental theorem, using the inclusion $L^2\subseteq L^1$ in [A5]. These are the uses of the stated Countable Choice and Dependent Choice through the calculus and Hilbert-space suppliers. [A2, A5]

2.1 Given $u\in H$, extend it by zero to $u_0$ on $\mathbb R$. By [A3] and Countable Choice, choose complex $\varphi_n\in C_c^\infty(\mathbb R)$ with $\|\varphi_n-u_0\|_2<1/n$, using real and imaginary approximations if necessary. For $n\ge5$ put $\zeta_n(x)=(1-\chi(nx))(1-\chi(n(x-1)))$ on $(0,1)$ and extend it by zero outside. It vanishes in neighborhoods of both endpoints, so this extension is smooth with compact support in $(0,1)$. Also $0\le\zeta_n\le1$ and $\zeta_n(x)\to1$ for every $x\in(0,1)$. Then $\psi_n=\zeta_n\varphi_n\in C_c^\infty(0,1)\subseteq D(T)$ and $\|\psi_n-u\|_2\le1/n+\|(\zeta_n-1)u\|_2\to0$ by domination by $|u|^2$ for the squared error. Thus $D(T)$ is dense. [A3, A5, step 1.1]

2.2 Symmetry: for $f,g\in D(T)$ the boundary term in 1.1 vanishes because $f(0)=f(1)=0$, so $\langle Tf,g\rangle=-i\int_0^1f'\overline g=\int_0^1f\overline{-ig'}=\langle f,Tg\rangle$; hence $T\subseteq T^*$, and $T$ is symmetric. [A1, step 1.1]

2.3 Closedness: let $f_n\in D(T)$ with $f_n\to f$ and $Tf_n\to w$ in $L^2$. Then $f_n'\to iw$ in $L^2$, so by 1.1 the functions $G_n(x):=\int_0^xf_n'$ converge uniformly to $G(x):=\int_0^xiw$ on $[0,1]$, since $\sup_x|G_n(x)-G(x)|\le\|f_n'-iw\|_2$ by [A5], with $G_n=f_n-f_n(0)=f_n$; hence $f_n\to G$ pointwise and in $L^2$, so $f=G$, that is, $f$ is absolutely continuous with $f'=iw$ almost everywhere, $f(0)=G(0)=0$ and $f(1)=G(1)=\lim_nf_n(1)=0$. Thus $f\in D(T)$ and $Tf=-if'=-i(iw)=w$, so $T$ is closed. The sequential graph criterion applies in this metric product under the assumed Countable Choice. [A5, step 1.1]

2.4 Adjoint computed. If $g\in AC[0,1]$ has $g'\in L^2(0,1)$, then for every $f\in D(T)$ the identity in step 1.1 read backwards gives $\langle Tf,g\rangle=\langle f,-ig'\rangle$, so $g\in D(T^*)$ and $T^*g=-ig'$. [A4, step 1.1]

2.5 Conversely let $g\in D(T^*)$ and put $h:=T^*g$; by 1.1 the function $H(x):=\int_0^xh$ is absolutely continuous with $H'=h$ and $H(0)=0$. For every $f\in D(T)$ integration by parts in the form of 1.1 gives $\int_0^1f\overline h=f(1)\overline{H(1)}-f(0)\overline{H(0)}-\int_0^1f'\overline H=-\int_0^1f'\overline H$, while $\int_0^1f\overline h=\langle f,T^*g\rangle=\langle Tf,g\rangle=-i\int_0^1f'\overline g$. Hence $\int_0^1f'(\overline H-i\overline g)=0$ for every $f\in D(T)$. [A4, step 1.1]

3.1 The derivatives of elements of $D(T)$ are exactly $E=\{\varphi\in L^2(0,1):\int_0^1\varphi=0\}$: one inclusion follows from step 1.1, and conversely $f(x)=\int_0^x\varphi$ has derivative $\varphi$, vanishes at both endpoints, and belongs to $D(T)$. Set $k=H+ig\in L^2$ and $m=\int_0^1k$. Step 2.5 says $\int\varphi\overline k=0$ for every $\varphi\in E$. Taking $\varphi=k-m$ gives $0=\int(k-m)\overline k=\int|k-m|^2$, since $\int(k-m)=0$. Thus $k=m$ as a class and $g=iH-im$. This supplies an absolutely continuous representative of $g$ with $g'=ih$ a.e., so $h=-ig'$. No unproved orthogonal-hyperplane assertion is needed. [A5, step 1.1, step 2.5]

4.1 By steps 2.4 and 3.1, $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ and $T^*g=-ig'$. This is strictly larger than $D(T)$: the constant function $\mathbf 1$ lies in $D(T^*)$ but not in $D(T)$. Hence $T\ne T^*$, and $T^*$ is a proper closed extension of $T$ by [A4]. Moreover $T^*$ is not symmetric: for $g_1(x)=x$, $g_2=\mathbf 1$ one computes from step 1.1 that $\langle T^*g_1,g_2\rangle-\langle g_1,T^*g_2\rangle=-i(g_1(1)\overline{g_2(1)}-g_1(0)\overline{g_2(0)})=-i\ne0$. [A4, step 2.2, step 2.4, step 3.1]

5.1 Let $Sg=-ig'$ on the periodic domain $D_2$. It is densely defined because it extends $T$. For $f,g\in D_2$ the boundary form in step 1.1 vanishes, so $S$ is symmetric. If $g\in D(S^*)$, the adjoint identity restricted to $D(T)$ gives $g\in D(T^*)$ and $S^*g=T^*g=-ig'$ by [A4] and step 4.1. For arbitrary $f\in D_2$, integration by parts therefore gives $0=-i(f(1)\overline{g(1)}-f(0)\overline{g(0)})$. Choose $f=\mathbf1\in D_2$: then $g(1)=g(0)$, so $g\in D_2$. Conversely the boundary form vanishes for every periodic $g$, giving $g\in D(S^*)$ and $S^*g=Sg$. Hence $S=S^*$ with equality of domains; $S$ is self-adjoint and therefore closed by [A1]. The constant function lies in $D_2\setminus D(T)$, and $x\mapsto x$ lies in $D(T^*)\setminus D_2$, proving both strict inclusions. [A1, A4, step 1.1, step 2.1, step 4.1]

6.1 Every claim is witnessed: $T$ is densely defined and closed by steps 2.1 and 2.3, symmetric by step 2.2, and $T\ne T^*$ by step 4.1; the failure of "symmetric implies self-adjoint" is therefore established, and no claim is made that a self-adjoint extension does not exist: the periodic domain of step 5.1 provides one by its explicitly computed adjoint. [step 2.1, step 2.2, step 2.3, step 4.1, step 5.1] ∎
