---
id: cex-symmetric-need-not-be-self-adjoint
kind: counterexample
title: "A symmetric closed operator that is not self-adjoint"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-densely-defined-closed-and-closable-operator, def-absolutely-continuous-function, thm-integration-by-parts-for-absolutely-continuous-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice]
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
space $H=L^2(0,1)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]) let
$T:=-i\,d/dx$ with domain
$$D(T)=\{f\in AC[0,1]:f'\in L^2(0,1),\ f(0)=f(1)=0\},$$
where complex-valued absolute continuity and the derivative are read on real
and imaginary parts ([[def-absolutely-continuous-function]]). Then:

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

[A2] For real-valued absolutely continuous functions the fundamental theorem of calculus and integration by parts hold, and the indefinite integral of an $L^1$ function is absolutely continuous; applied to real and imaginary parts this gives the same calculus for complex-valued absolutely continuous functions ([[def-absolutely-continuous-function]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-integration-by-parts-for-absolutely-continuous-functions]], [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]).

[A3] $C_c^\infty(\mathbb R)$ is dense in $L^2(\mathbb R)$. Hence, after extending $u\in L^2(0,1)$ by zero, one may approximate it by smooth compactly supported functions and then multiply the approximants by smooth cutoffs supported in $(0,1)$ that tend pointwise to $1$ there; dominated convergence makes the resulting $C_c^\infty(0,1)$ functions dense in $L^2(0,1)$. [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] [[thm-dominated-convergence]] [[def-l-p-space-as-a-quotient-by-null-functions]]

[A4] $y\in D(T^*)$ exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$, and then $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x\in D(T)$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

## Counterexample

**Proof technique:** direct.

**Given:** $H=L^2(0,1)$ and $T=-i\,d/dx$ on the domain $D(T)$ above.

1.1 Complex absolutely continuous calculus, componentwise from the real theory. If $F,G$ are complex-valued with absolutely continuous real and imaginary parts, then $F(x)-F(0)=\int_0^xF'$ for all $x$, and $\int_0^1F'\overline G=F(1)\overline{G(1)}-F(0)\overline{G(0)}-\int_0^1F\overline{G'}$; if $h\in L^2(0,1)$ then $x\mapsto\int_0^xh$ is of this kind with derivative $h$ almost everywhere. [A2]

1.2 Every $\varphi\in C_c^\infty(0,1)$ lies in $D(T)$ because it vanishes near both endpoints. The cutoff approximation in [A3] shows that $C_c^\infty(0,1)$ is dense in $L^2(0,1)$, so $D(T)$ is dense. [A3]

2.1 Symmetry: for $f,g\in D(T)$ the boundary term in 1.1 vanishes because $f(0)=f(1)=0$, so $\langle Tf,g\rangle=-i\int_0^1f'\overline g=\int_0^1f\overline{-ig'}=\langle f,Tg\rangle$; hence $T\subseteq T^*$, and $T$ is symmetric. [A1, step 1.1]

2.2 Closedness: let $f_n\in D(T)$ with $f_n\to f$ and $Tf_n\to w$ in $L^2$. Then $f_n'\to iw$ in $L^2$, so by 1.1 the functions $G_n(x):=\int_0^xf_n'$ converge uniformly to $G(x):=\int_0^xiw$ on $[0,1]$, with $G_n=f_n-f_n(0)=f_n$; hence $f_n\to G$ pointwise and in $L^2$, so $f=G$, that is, $f$ is absolutely continuous with $f'=iw$ almost everywhere, $f(0)=G(0)=0$ and $f(1)=G(1)=\lim_nf_n(1)=0$. Thus $f\in D(T)$ and $Tf=-if'=-i(iw)=w$, so $T$ is closed. [step 1.1]

2.3 Adjoint computed. If $g\in AC[0,1]$ has $g'\in L^2(0,1)$, then for every $f\in D(T)$ the identity of 2.1 read backwards gives $\langle Tf,g\rangle=\langle f,-ig'\rangle$, so $g\in D(T^*)$ and $T^*g=-ig'$. [A4, step 1.1]

2.4 Conversely let $g\in D(T^*)$ and put $h:=T^*g$; by 1.1 the function $H(x):=\int_0^xh$ is absolutely continuous with $H'=h$ and $H(0)=0$. For every $f\in D(T)$ integration by parts in the form of 1.1 gives $\int_0^1f\overline h=f(1)\overline{H(1)}-f(0)\overline{H(0)}-\int_0^1f'\overline H=-\int_0^1f'\overline H$, while $\int_0^1f\overline h=\langle f,T^*g\rangle=\langle Tf,g\rangle=-i\int_0^1f'\overline g$. Hence $\int_0^1f'(\overline H-i\overline g)=0$ for every $f\in D(T)$. [A4, step 1.1]

3.1 The set of derivatives $\{f':f\in D(T)\}$ is exactly the closed hyperplane $E=\{\varphi\in L^2(0,1):\int_0^1\varphi=0\}$: one inclusion is the fundamental theorem of calculus in 1.1, and conversely $f(x):=\int_0^x\varphi$ satisfies $f\in AC$, $f'=\varphi$, $f(0)=0$ and $f(1)=\int_0^1\varphi=0$. Since $E$ is the kernel of the nonzero bounded functional $\varphi\mapsto\int_0^1\varphi$, its orthogonal complement is spanned by the constant function $\mathbf 1$. So step 2.4 gives $\overline H-i\overline g=c\,\mathbf 1$ for some constant $c$; conjugating, $\overline g=-i(\overline H-c)$, that is $g=iH+\overline{ic}$; in particular $g$ is absolutely continuous with $g'=iH'=ih\in L^2(0,1)$ and $h=-ig'$. [step 2.4]

4.1 By steps 2.3 and 3.1, $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ and $T^*g=-ig'$. This is strictly larger than $D(T)$: the constant function $\mathbf 1$ lies in $D(T^*)$ but not in $D(T)$. Hence $T\ne T^*$, and $T^*$ is a proper closed extension of $T$ by [A4]. Moreover $T^*$ is not symmetric: for $g_1(x)=x$, $g_2=\mathbf 1$ one computes from 2.1 that $\langle T^*g_1,g_2\rangle-\langle g_1,T^*g_2\rangle=-i(g_1(1)\overline{g_2(1)}-g_1(0)\overline{g_2(0)})=-i\ne0$. [A4, step 2.1, step 3.1]

5.1 The domain $D_2$ consisting of the functions of the description in step 4.1 with the extra condition $g(0)=g(1)$ carries a closed symmetric extension: symmetry is the computation of 2.1 with the boundary terms cancelling because $f(0)\overline{g(0)}=f(1)\overline{g(1)}$, and closedness is the argument of 2.2, where now $g(0)=\lim_ng_n(0)=\lim_ng_n(1)=g(1)$. It is strictly larger than $T$ (it contains $\mathbf 1$) and strictly smaller than $T^*$ (the function $x\mapsto x$ is in $D(T^*)$ but not in $D_2$). Thus $T$ has a closed symmetric extension properly between itself and its adjoint, and $T$ is not self-adjoint. [A1, step 2.2, step 4.1]

6.1 Every claim is witnessed: $T$ is densely defined and closed by steps 1.2 and 2.2, symmetric by step 2.1, and $T\ne T^*$ by step 4.1; the failure of "symmetric implies self-adjoint" is therefore established, and no claim is made that a self-adjoint extension does not exist: the periodic domain of step 5.1 provides one, and the companion examples page of this pair computes the full family of extensions. [step 5.1] ∎
